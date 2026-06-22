import { effect, Injector, untracked, type Signal } from '@angular/core';

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
        let ref: ReturnType<typeof effect>;
        ref = untracked(() =>
            effect(
                () => {
                    const current = value();
                    if (!predicate(current)) return;
                    ref.destroy();
                    resolve(current);
                },
                { injector },
            ),
        );
    });
}
