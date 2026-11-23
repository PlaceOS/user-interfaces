import { placeRealtime, placeSession, startPlaceClient } from '@placeos/common';
import { mockData } from '@placeos/common/tests';
import {
    DomainAuthority,
    type BindingState,
    type Credential,
    type DomainAuthorityInput,
    type JsonValue,
    type RealtimeStatus,
    type RealtimeTarget,
} from '@placeos/ts-client';

/** Key of a status variable binding, such as `sys-1|Display_1|power` */
export function bindingKey(target: RealtimeTarget) {
    return `${target.sys}|${target.mod}_${target.index ?? 1}|${target.name}`;
}

/**
 * Starts the PlaceOS client of `@placeos/common` for a test, and stubs its
 * login session and realtime client. Call it in `beforeEach`.
 *
 * The test build bundles the workspace libraries, so a test cannot
 * `vi.mock('@placeos/common')`. This helper changes the objects that the
 * helpers read instead: `authority()`, `token()`, `apiKey()`,
 * `isFixedDevice()`, `logout()` and `authorise()` read the session, and
 * `getModule` uses the realtime client. The session and the realtime client
 * make no requests. REST calls go to `fetch`, so stub the operations that a
 * test uses with `vi.mock('@placeos/ts-client', { spy: true })`.
 *
 * - `bind` keeps the listeners. `emit` sends a value to them.
 * - `exec` resolves with `null` until the test sets a value. A rejected
 *   `exec` makes `getModule(...).execute` reject with the same value.
 */
export function startTestPlaceClient() {
    startPlaceClient({
        base_url: '',
        mock: false,
        headers: {},
        auth: {
            redirect_uri: 'http://localhost/oauth-resp.html',
            scope: 'public',
            grant: { kind: 'code' },
        },
    });
    const session = placeSession();
    const realtime = placeRealtime();

    let authority: DomainAuthority | null = null;
    let credential: Credential | null = null;
    let status: RealtimeStatus = { kind: 'open', since_ms: Date.now() };
    const listeners = new Map<string, Set<(state: BindingState) => void>>();
    const values = new Map<string, JsonValue>();
    const status_listeners = new Set<(status: RealtimeStatus) => void>();

    vi.spyOn(session, 'authority').mockImplementation(() => authority);
    vi.spyOn(session, 'credential').mockImplementation(() => credential);
    const is_fixed_device = vi
        .spyOn(session, 'isFixedDevice')
        .mockReturnValue(false);
    const logout = vi.spyOn(session, 'logout').mockResolvedValue(undefined);
    const authorize = vi
        .spyOn(session, 'authorize')
        .mockImplementation(async () =>
            credential
                ? { ok: true, value: credential }
                : { ok: false, error: { kind: 'login_required' } },
        );

    const bind = vi
        .spyOn(realtime, 'bind')
        .mockImplementation((target, listener) => {
            const key = bindingKey(target);
            const list = listeners.get(key) ?? new Set();
            listeners.set(key, list);
            list.add(listener);
            if (values.has(key)) {
                listener({ kind: 'value', value: values.get(key) });
            }
            return () => list.delete(listener);
        });
    vi.spyOn(realtime, 'value').mockImplementation((target) => {
        const key = bindingKey(target);
        return values.has(key)
            ? { kind: 'value', value: values.get(key) }
            : { kind: 'unknown' };
    });
    const exec = vi
        .spyOn(realtime, 'exec')
        .mockResolvedValue({ ok: true, value: null });
    vi.spyOn(realtime, 'status').mockImplementation(() => status);
    vi.spyOn(realtime, 'subscribe').mockImplementation((listener) => {
        status_listeners.add(listener);
        return () => status_listeners.delete(listener);
    });

    /** Set `isOnline()`. The authority does not change */
    const setOnline = (online: boolean) => {
        const current = authority;
        // Online needs an authority when the session status changes
        authority = online ? mockData(DomainAuthority, {}) : null;
        session.useToken('test-online');
        authority = current;
    };
    // The online state stays from the client of an earlier test
    setOnline(false);

    return {
        session,
        realtime,
        bind,
        exec,
        logout,
        authorize,
        is_fixed_device,
        /** Set the authority. `null` is no authority, as before it loads */
        setAuthority(value: DomainAuthorityInput | null) {
            authority = value ? mockData(DomainAuthority, value) : null;
        },
        /** Set the access token. `''` is no credential */
        setToken(token: string) {
            credential = token ? { kind: 'bearer', token } : null;
        },
        /** Use an API key, so `token()` is `x-api-key` */
        setApiKey(key: string) {
            credential = { kind: 'api_key', key };
        },
        setOnline,
        /** Send a value of a status variable to its listeners, and keep it */
        emit(sys: string, mod: string, name: string, data: unknown, index = 1) {
            // Test data of the app types, as the driver sends it in JSON
            const value = data as JsonValue;
            const key = bindingKey({ sys, mod, index, name });
            values.set(key, value);
            for (const listener of listeners.get(key) ?? []) {
                listener({ kind: 'value', value });
            }
        },
        /** Number of listeners of a status variable */
        listenerCount(sys: string, mod: string, name: string, index = 1) {
            return (
                listeners.get(bindingKey({ sys, mod, index, name }))?.size ?? 0
            );
        },
        /**
         * Answer the module calls with `execute`, by method name. A value
         * that `execute` gives or rejects with goes to the caller.
         */
        useExecute(
            execute: (method: string, args: readonly unknown[]) => unknown,
        ) {
            exec.mockImplementation(async (target, args) => ({
                ok: true,
                // Test data of the app types, as the driver sends it in JSON
                value: (await execute(target.name, args ?? [])) as JsonValue,
            }));
        },
        /** Modules that got a call or a binding, such as `sys-1|Camera_1` */
        modules() {
            return [...exec.mock.calls, ...bind.mock.calls].map(
                ([target]) =>
                    `${target.sys}|${target.mod}_${target.index ?? 1}`,
            );
        },
        /** Method names and arguments of the module calls, in order */
        commands() {
            return exec.mock.calls.map(([target, args]) => [
                target.name,
                args ?? [],
            ]);
        },
        /** Set the realtime status and tell its listeners */
        setStatus(next: RealtimeStatus) {
            status = next;
            for (const listener of status_listeners) listener(next);
        },
    };
}

export type TestPlaceClient = ReturnType<typeof startTestPlaceClient>;
