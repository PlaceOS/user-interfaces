import { signal, untracked, type WritableSignal } from '@angular/core';

/** Browser storage, or null when the page cannot use it */
function storageArea(type: 'local' | 'session') {
    try {
        return (type === 'session' ? sessionStorage : localStorage) ?? null;
    } catch {
        // Storage can be unavailable in private browsing or restricted embeds
        return null;
    }
}

/**
 * Writable signal that starts from a stored value and stores each new value
 * at once. When storage is unavailable, the value is kept in memory only.
 * @param parse Value of the stored text, or of null when nothing is stored
 * or the text cannot be read
 * @param options.serialise Text to store. Null removes the key.
 */
export function storedSignal<T>(
    key: string,
    parse: (stored: string | null) => T,
    options: {
        storage?: 'local' | 'session';
        serialise?: (value: T) => string | null;
    } = {},
): WritableSignal<T> {
    const type = options.storage || 'local';
    const serialise = options.serialise || String;
    let initial: T;
    try {
        initial = parse(storageArea(type)?.getItem(key) ?? null);
    } catch {
        initial = parse(null);
    }
    const value = signal(initial);
    const set = value.set;
    value.set = (next: T) => {
        set(next);
        try {
            const text = serialise(next);
            const area = storageArea(type);
            if (text === null) area?.removeItem(key);
            else area?.setItem(key, text);
        } catch {
            // Storing is best effort. The value stays in memory.
        }
    };
    value.update = (fn: (current: T) => T) => value.set(fn(untracked(value)));
    return value;
}
