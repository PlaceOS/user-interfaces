class InMemoryStorage implements Storage {
    private _items = new Map<string, string>();

    get length() {
        return this._items.size;
    }

    clear() {
        this._items.clear();
    }

    getItem(key: string) {
        return this._items.get(key) ?? null;
    }

    key(index: number) {
        return Array.from(this._items.keys())[index] ?? null;
    }

    removeItem(key: string) {
        this._items.delete(key);
    }

    setItem(key: string, value: string) {
        this._items.set(key, value);
    }
}

export function installTestStorage() {
    const needs_storage =
        typeof globalThis.localStorage === 'undefined' ||
        typeof globalThis.sessionStorage === 'undefined';

    if (needs_storage || typeof globalThis.Storage === 'undefined') {
        (globalThis as any).Storage = InMemoryStorage;
    }

    if (typeof globalThis.localStorage === 'undefined') {
        Object.defineProperty(globalThis, 'localStorage', {
            value: new InMemoryStorage(),
        });
    }

    if (typeof globalThis.sessionStorage === 'undefined') {
        Object.defineProperty(globalThis, 'sessionStorage', {
            value: new InMemoryStorage(),
        });
    }
}
