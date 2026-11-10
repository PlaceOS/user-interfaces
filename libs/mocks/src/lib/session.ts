import { log } from '@placeos/common';
import {
    MockHttpRequestHandlerOptions,
    registerMockEndpoint as registerEndpoint,
} from '@placeos/ts-client';

/** Prefix of the localStorage keys that hold mock data */
const MOCK_SESSION_PREFIX = 'PLACEOS.mock.';
/**
 * Session cookie that marks the browser session of the mock data. All tabs
 * of an origin share it, and the browser removes it when it closes.
 */
const MOCK_SESSION_COOKIE = 'placeos_mock_session=1';
/**
 * Largest serialised store kept, in characters. Browsers allow about 5MB for
 * each origin, so one large store (such as media with data URLs) must not
 * push out the others. Use `persistById` for large generated lists.
 */
const MAX_STORE_CHARS = 1_000_000;

/** Reads and writes one dataset as JSON */
interface SessionStore {
    dump(): unknown;
    load(value: unknown): void;
}

const _stores = new Map<string, SessionStore>();
/** Last JSON written for each key, so unchanged stores are not written again */
const _written = new Map<string, string>();
/** Starts a store when another tab saves its key first, see `whenSaved` */
const _waiting = new Map<string, () => void>();

function read(key: string): unknown {
    try {
        const raw = localStorage.getItem(MOCK_SESSION_PREFIX + key);
        if (raw === null) return undefined;
        _written.set(key, raw);
        return JSON.parse(raw);
    } catch {
        return undefined;
    }
}

function write(key: string, value: unknown) {
    let raw: string | undefined;
    try {
        raw = JSON.stringify(value);
    } catch (error) {
        log('MOCKS', `Unable to serialise session store "${key}"`, [error]);
        return;
    }
    if (raw === undefined || _written.get(key) === raw) return;
    if (raw.length > MAX_STORE_CHARS) {
        log('MOCKS', `Session store "${key}" is too large to keep`, [
            raw.length,
        ]);
        return;
    }
    try {
        localStorage.setItem(MOCK_SESSION_PREFIX + key, raw);
        _written.set(key, raw);
    } catch (error) {
        log('MOCKS', `Unable to keep session store "${key}"`, [error]);
    }
}

/** Replace the contents of `target` with `value`, keeping the reference */
function replaceContents(target: object, value: unknown) {
    if (Array.isArray(target)) {
        if (Array.isArray(value)) target.splice(0, target.length, ...value);
        return;
    }
    if (!value || typeof value !== 'object' || Array.isArray(value)) return;
    for (const key of Object.keys(target)) delete target[key];
    Object.assign(target, value);
}

function load(key: string, store: SessionStore, value: unknown) {
    try {
        store.load(value);
    } catch (error) {
        // Data from an older version of the mocks can fail to load. Keep the
        // current data, and do not stop mock mode.
        log('MOCKS', `Unable to restore session store "${key}"`, [error]);
    }
}

function track(key: string, store: SessionStore) {
    _stores.set(key, store);
    _waiting.delete(key);
    const saved = read(key);
    if (saved !== undefined) load(key, store, saved);
}

/** Apply a change that another tab of this origin saved */
function onStorage(event: StorageEvent) {
    if (!event.key?.startsWith(MOCK_SESSION_PREFIX)) return;
    if (event.newValue === null) return;
    const key = event.key.slice(MOCK_SESSION_PREFIX.length);
    const store = _stores.get(key);
    if (!store) return _waiting.get(key)?.();
    try {
        const value = JSON.parse(event.newValue);
        _written.set(key, event.newValue);
        load(key, store, value);
    } catch (error) {
        log('MOCKS', `Unable to read session store "${key}"`, [error]);
    }
}

/**
 * Start the mock session. Call it before any `persist` call. Mock data from
 * an earlier browser session is removed. Changes that other tabs of this
 * origin save are applied to this tab as they happen. The apps fetch the new
 * data on their next request, and do not reload.
 */
export function startMockSession() {
    try {
        if (!document.cookie.split('; ').includes(MOCK_SESSION_COOKIE)) {
            const keys: string[] = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key?.startsWith(MOCK_SESSION_PREFIX)) keys.push(key);
            }
            keys.forEach((key) => localStorage.removeItem(key));
            document.cookie = `${MOCK_SESSION_COOKIE};path=/;samesite=strict`;
        }
    } catch (error) {
        log('MOCKS', 'Unable to start the mock session', [error]);
    }
    window.removeEventListener('storage', onStorage);
    window.addEventListener('storage', onStorage);
}

/** Options for `persist` and `persistById` */
export interface PersistOptions {
    /** Runs after saved data loads, at start up or from another tab */
    onLoad?: () => void;
}

/**
 * Keep a mock dataset for the browser session, so user changes survive a
 * reload and reach other tabs. Restores saved data into `target` in place,
 * which keeps existing references valid. Call it before code reads the
 * dataset.
 */
export function persist<T extends object>(
    key: string,
    target: T,
    { onLoad }: PersistOptions = {},
): T {
    track(key, {
        dump: () => target,
        load: (value) => {
            replaceContents(target, value);
            onLoad?.();
        },
    });
    return target;
}

/** Items that changed in a list kept by `persistById` */
interface ListChanges<T> {
    changed: T[];
    removed: string[];
}

/** Lists kept by `persistById`, by key, to mark changed items */
const _lists = new Map<
    string,
    { list: { id?: unknown }[]; dirty: Set<string> }
>();

/**
 * Keep a large list for the browser session by saving only the items that
 * changed. Items need an `id` that the mock data generates the same way on
 * each load. Write requests mark the item in their route and response, see
 * `registerMockEndpoint`. Added and removed items are found on each save.
 * Changes from another tab are kept in this tab's saves too, so the last tab
 * to save does not drop them.
 */
export function persistById<T extends { id?: string | number }>(
    key: string,
    list: T[],
    { onLoad }: PersistOptions = {},
): T[] {
    const dirty = new Set<string>();
    const removed = new Set<string>();
    let known = new Set(list.map((item) => `${item.id}`));
    _lists.set(key, { list, dirty });
    track(key, {
        dump: (): ListChanges<T> => {
            const ids = new Set(list.map((item) => `${item.id}`));
            for (const id of known) if (!ids.has(id)) removed.add(id);
            for (const id of ids) {
                if (!known.has(id)) dirty.add(id);
                removed.delete(id);
            }
            known = ids;
            return {
                changed: list.filter((item) => dirty.has(`${item.id}`)),
                removed: [...removed],
            };
        },
        load: (value) => {
            const saved = value as ListChanges<T>;
            for (const id of saved?.removed || []) {
                const index = list.findIndex((item) => `${item.id}` === id);
                if (index >= 0) list.splice(index, 1);
                removed.add(id);
                dirty.delete(id);
            }
            for (const item of saved?.changed || []) {
                const index = list.findIndex((i) => `${i.id}` === `${item.id}`);
                if (index >= 0) list.splice(index, 1, item);
                else list.push(item);
                dirty.add(`${item.id}`);
                removed.delete(`${item.id}`);
            }
            known = new Set(list.map((item) => `${item.id}`));
            onLoad?.();
        },
    });
    return list;
}

/**
 * Mark the items with these IDs as changed in each `persistById` list, so the
 * next save keeps them. Write endpoints do this for you. Call it when other
 * mock code, such as a mock module, changes an item in place.
 */
export function markChanged(ids: unknown[]) {
    const keys = ids.filter((id) => id !== undefined && id !== null);
    if (!keys.length) return;
    for (const { list, dirty } of _lists.values()) {
        for (const id of keys) {
            if (list.some((item) => `${item.id}` === `${id}`)) {
                dirty.add(`${id}`);
            }
        }
    }
}

/**
 * Keep a value that the mock code replaces, instead of changing in place.
 * `get` reads the current value and `set` replaces it with the saved value.
 */
export function persistValue<T>(
    key: string,
    get: () => T,
    set: (value: T) => void,
) {
    track(key, { dump: get, load: (value) => set(value as T) });
}

/**
 * Run `start` when another tab saves `key` before this tab keeps it. Use it
 * for stores that start only when used, so changes from other tabs still
 * reach them. `start` must call `persist`, `persistById` or `persistValue`.
 */
export function whenSaved(key: string, start: () => void) {
    if (!_stores.has(key)) _waiting.set(key, start);
}

/** Whether this browser session holds saved data for `key` */
export function hasMockSession(key: string) {
    try {
        return localStorage.getItem(MOCK_SESSION_PREFIX + key) !== null;
    } catch {
        return false;
    }
}

/** Write every changed mock dataset to localStorage */
export function saveMockSession() {
    for (const [key, store] of _stores) write(key, store.dump());
}

/**
 * Register a mock HTTP endpoint. Use it in place of the ts-client function.
 * Requests other than GET save the mock session after they complete, so the
 * change survives a reload and reaches other tabs. The `:id` route parameter
 * and the `id` of the response name the items that changed.
 */
export function registerMockEndpoint(options: MockHttpRequestHandlerOptions) {
    const { callback } = options;
    if (options.method === 'GET' || !callback) {
        return registerEndpoint(options);
    }
    registerEndpoint({
        ...options,
        callback: (request) => {
            const result = callback(request);
            const items = Array.isArray(result) ? result : [result];
            markChanged([
                request.route_params?.id,
                ...items.map((item) => item?.id),
            ]);
            saveMockSession();
            return result;
        },
    });
}

/** Make an ID that stays unique across reloads in the same session */
export function mockId(prefix = '') {
    return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}
