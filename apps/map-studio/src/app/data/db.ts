import { Injectable } from '@angular/core';

/**
 * Minimal IndexedDB key/value store. Replaces the server-side database the
 * reference app used — all project data now lives in the browser.
 *
 * ponytail: one object store, string keys, prefix scans for "tables". Swap for
 * a real schema with indexes if listing ever needs more than a prefix range.
 */

const DB_NAME = 'placeos-map-studio';
const STORE = 'records';

/** Range covering every key beginning with `prefix` */
const under = (prefix: string) => IDBKeyRange.bound(prefix, `${prefix}￿`);

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

    private _open(): Promise<IDBDatabase> {
        if (this._db) return this._db;
        this._db = new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, 1);
            request.onupgradeneeded = () =>
                request.result.createObjectStore(STORE);
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
