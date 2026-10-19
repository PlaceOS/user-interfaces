import { Injectable } from '@angular/core';

/**
 * Minimal IndexedDB key/value store. Replaces the server-side database the
 * reference app used — all project data now lives in the browser.
 *
 * ponytail: one object store, string keys, prefix scans for "tables". Swap for
 * a real schema with indexes if listing ever needs more than a prefix range.
 */

const DB_NAME = 'placeos-map-studio';
const DB_VERSION = 2;
const STORE = 'records';

/** Range covering every key beginning with `prefix` */
const under = (prefix: string) => IDBKeyRange.bound(prefix, `${prefix}￿`);

/** Changes applied together by {@link DbService.write} */
export interface DbChanges {
    /** Prefix whose keys are removed first */
    clear?: string;
    /** Keys removed after `clear` */
    delete?: string[];
    /** Key/value pairs stored last */
    put?: [string, unknown][];
}

/**
 * Version 2 keeps each floorplan's canvas and source SVG under `canvas:<id>`,
 * so listing floorplans no longer reads them. Moves those fields out of
 * records written by version 1.
 */
function splitFloorplanCanvases(store: IDBObjectStore) {
    const request = store.openCursor(under('floorplan:'));
    request.onsuccess = () => {
        const cursor = request.result;
        if (!cursor) return;
        const {
            canvas_state,
            svg_output,
            svg_source,
            svg_source_ids,
            ...floorplan
        } = cursor.value;
        if (
            canvas_state !== undefined ||
            svg_output !== undefined ||
            svg_source !== undefined ||
            svg_source_ids !== undefined
        ) {
            store.put(
                {
                    canvas_state: canvas_state ?? null,
                    svg_output: svg_output ?? null,
                    svg_source,
                    svg_source_ids,
                },
                `canvas:${floorplan.id}`,
            );
            cursor.update(floorplan);
        }
        cursor.continue();
    };
}

@Injectable({ providedIn: 'root' })
export class DbService {
    private _db: Promise<IDBDatabase> | null = null;

    /** Value stored against `key`, or `undefined` */
    public get<T>(key: string) {
        return this._run<T | undefined>('readonly', (s) => s.get(key));
    }

    /** Store `value` against `key` */
    public async set(key: string, value: unknown): Promise<void> {
        await this._run('readwrite', (s) => s.put(value, key));
    }

    /** Remove the value stored against `key` */
    public async delete(key: string): Promise<void> {
        await this._run('readwrite', (s) => s.delete(key));
    }

    /** Every value whose key begins with `prefix` */
    public list<T>(prefix: string): Promise<T[]> {
        return this._run<T[]>('readonly', (s) => s.getAll(under(prefix)));
    }

    /** Remove every value whose key begins with `prefix` */
    public async deleteWhere(prefix: string): Promise<void> {
        await this._run('readwrite', (s) => s.delete(under(prefix)));
    }

    /**
     * Applies `changes` in one transaction: all of them land, or none do.
     * Use this for bulk writes — one transaction per record is far slower.
     */
    public async write(changes: DbChanges): Promise<void> {
        const transaction = (await this._open()).transaction(
            STORE,
            'readwrite',
        );
        const store = transaction.objectStore(STORE);
        if (changes.clear) store.delete(under(changes.clear));
        for (const key of changes.delete ?? []) store.delete(key);
        for (const [key, value] of changes.put ?? []) store.put(value, key);
        return new Promise((resolve, reject) => {
            transaction.oncomplete = () => resolve();
            transaction.onerror = () => reject(transaction.error);
            transaction.onabort = () => reject(transaction.error);
        });
    }

    private _open(): Promise<IDBDatabase> {
        if (this._db) return this._db;
        this._db = new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onupgradeneeded = (event) => {
                if (event.oldVersion < 1)
                    request.result.createObjectStore(STORE);
                if (event.oldVersion < 2) {
                    splitFloorplanCanvases(
                        (request.transaction as IDBTransaction).objectStore(
                            STORE,
                        ),
                    );
                }
            };
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
        return this._db;
    }

    private async _run<T>(
        mode: IDBTransactionMode,
        fn: (store: IDBObjectStore) => IDBRequest<T>,
    ): Promise<T> {
        const store = (await this._open())
            .transaction(STORE, mode)
            .objectStore(STORE);
        const request = fn(store);
        return new Promise((resolve, reject) => {
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }
}
