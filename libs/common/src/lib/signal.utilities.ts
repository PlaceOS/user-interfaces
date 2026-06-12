import {
    effect,
    Injector,
    signal,
    untracked,
    type Signal,
} from '@angular/core';

/**
 * Promise that resolves with the first value of the given signal that
 * matches the predicate. Signal based equivalent of `firstTruthyValueFrom`.
 * @param value Signal to watch
 * @param predicate Matching function for the wanted value, defaults to truthy
 * @param injector Injector to scope the watcher to, required outside an injection context
 */
export function firstValueWhere<T>(
    value: Signal<T>,
    predicate: (value: T) => boolean = (_) => !!_,
    injector?: Injector,
): Promise<T> {
    const current = untracked(value);
    if (predicate(current)) return Promise.resolve(current);
    return new Promise<T>((resolve) => {
        const ref = effect(
            () => {
                const current = value();
                if (!predicate(current)) return;
                ref.destroy();
                resolve(current);
            },
            { injector },
        );
    });
}

/**
 * Create a signal that mirrors the source signal, only updating after the
 * source has settled for the given amount of time
 * @param source Signal to debounce
 * @param delay Time in ms to wait before updating
 * @param injector Injector to scope the watcher to, required outside an injection context
 */
export function debouncedSignal<T>(
    source: Signal<T>,
    delay: number,
    injector?: Injector,
): Signal<T> {
    const debounced = signal(untracked(source));
    effect(
        (onCleanup) => {
            const value = source();
            const timer = setTimeout(() => debounced.set(value), delay);
            onCleanup(() => clearTimeout(timer));
        },
        { injector },
    );
    return debounced.asReadonly();
}
