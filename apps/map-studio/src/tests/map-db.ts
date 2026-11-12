import { DbChanges, DbService } from '../app/data/db';

/**
 * In-memory stand-in for `DbService`. jsdom has no IndexedDB, so specs
 * provide this with `{ provide: DbService, useClass: MapDbService }`.
 * Keys list in sorted order, as the IndexedDB key range does.
 */
export class MapDbService implements Partial<DbService> {
    private readonly _records = new Map<string, unknown>();

    private _matching(prefix: string) {
        return [...this._records.keys()]
            .filter((key) => key.startsWith(prefix))
            .sort();
    }

    public async get<T>(key: string) {
        return this._records.get(key) as T | undefined;
    }

    public async set(key: string, value: unknown) {
        this._records.set(key, value);
    }

    public async delete(key: string) {
        this._records.delete(key);
    }

    public async list<T>(prefix: string) {
        return this._matching(prefix).map((key) => this._records.get(key) as T);
    }

    public async deleteWhere(prefix: string) {
        this._matching(prefix).forEach((key) => this._records.delete(key));
    }

    public async write(changes: DbChanges) {
        if (changes.clear) await this.deleteWhere(changes.clear);
        changes.delete?.forEach((key) => this._records.delete(key));
        changes.put?.forEach(([key, value]) => this._records.set(key, value));
    }
}
