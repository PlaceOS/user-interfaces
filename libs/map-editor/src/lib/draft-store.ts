import { contentHash } from './signature';

export const DRAFT_KEY_PREFIX = 'map-editor:draft:';
const DB_NAME = 'placeos-map-editor';
const DB_VERSION = 1;
const STORE = 'drafts';

/** An unsaved working copy, kept in the viewer's browser; nothing on the server reads it. */
export interface MapDraft {
    key: string;
    zone_id: string;
    source_sha256: string;
    markup: string;
    saved_at: number;
}

export interface DraftStore {
    get(key: string): Promise<MapDraft | null>;
    put(draft: MapDraft): Promise<void>;
    delete(key: string): Promise<void>;
    keys(): Promise<string[]>;
}

export function draftKey(zone_id: string, source_sha256: string): string {
    return `${DRAFT_KEY_PREFIX}${zone_id}:${source_sha256}`;
}

/** SHA-256 hex through WebCrypto; FNV-1a with an `fnv-` prefix where WebCrypto is missing. */
export async function sha256Hex(text: string): Promise<string> {
    const subtle = (globalThis as { crypto?: Crypto }).crypto?.subtle;
    if (!subtle) return `fnv-${contentHash(text)}`;
    const digest = await subtle.digest(
        'SHA-256',
        new TextEncoder().encode(text),
    );
    return Array.from(new Uint8Array(digest))
        .map((byte) => byte.toString(16).padStart(2, '0'))
        .join('');
}

export async function draftKeyFor(
    zone_id: string,
    source_text: string,
): Promise<string> {
    return draftKey(zone_id, await sha256Hex(source_text));
}

export function makeDraft(
    zone_id: string,
    source_sha256: string,
    markup: string,
): MapDraft {
    return {
        key: draftKey(zone_id, source_sha256),
        zone_id,
        source_sha256,
        markup,
        saved_at: Date.now(),
    };
}

/** Map-backed store for tests and for browsers without IndexedDB. */
export class MemoryDraftStore implements DraftStore {
    private readonly _drafts = new Map<string, MapDraft>();

    public async get(key: string): Promise<MapDraft | null> {
        const draft = this._drafts.get(key);
        return draft ? { ...draft } : null;
    }

    public async put(draft: MapDraft): Promise<void> {
        this._drafts.set(draft.key, { ...draft });
    }

    public async delete(key: string): Promise<void> {
        this._drafts.delete(key);
    }

    public async keys(): Promise<string[]> {
        return [...this._drafts.keys()].sort();
    }
}

function request<T>(req: IDBRequest<T>): Promise<T> {
    return new Promise((resolve, reject) => {
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}

/** IndexedDB store `placeos-map-editor/drafts`, keyed by the draft key. */
export class IndexedDbDraftStore implements DraftStore {
    private _db: Promise<IDBDatabase> | null = null;

    public static isAvailable(): boolean {
        return typeof indexedDB !== 'undefined';
    }

    public async get(key: string): Promise<MapDraft | null> {
        const db = await this._open();
        const store = db.transaction(STORE, 'readonly').objectStore(STORE);
        const draft = await request<MapDraft | undefined>(store.get(key));
        return draft || null;
    }

    public async put(draft: MapDraft): Promise<void> {
        const db = await this._open();
        const store = db.transaction(STORE, 'readwrite').objectStore(STORE);
        await request(store.put(draft));
    }

    public async delete(key: string): Promise<void> {
        const db = await this._open();
        const store = db.transaction(STORE, 'readwrite').objectStore(STORE);
        await request(store.delete(key));
    }

    public async keys(): Promise<string[]> {
        const db = await this._open();
        const store = db.transaction(STORE, 'readonly').objectStore(STORE);
        const keys = await request(store.getAllKeys());
        return keys.map((key) => `${key}`).sort();
    }

    private _open(): Promise<IDBDatabase> {
        if (!this._db) {
            this._db = new Promise((resolve, reject) => {
                const open = indexedDB.open(DB_NAME, DB_VERSION);
                open.onupgradeneeded = () => {
                    if (!open.result.objectStoreNames.contains(STORE)) {
                        open.result.createObjectStore(STORE, {
                            keyPath: 'key',
                        });
                    }
                };
                open.onsuccess = () => resolve(open.result);
                open.onerror = () => reject(open.error);
            });
        }
        return this._db;
    }
}
