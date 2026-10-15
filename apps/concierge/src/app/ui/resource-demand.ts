import {
    DestroyRef,
    inject,
    linkedSignal,
    signal,
    Signal,
} from '@angular/core';

/** True when two values are equal, or are objects with equal top-level fields */
function shallowEqual(a: unknown, b: unknown) {
    if (Object.is(a, b)) return true;
    if (!a || !b || typeof a !== 'object' || typeof b !== 'object') {
        return false;
    }
    const a_map = a as Record<string, unknown>;
    const b_map = b as Record<string, unknown>;
    const a_keys = Object.keys(a_map);
    if (a_keys.length !== Object.keys(b_map).length) return false;
    return a_keys.every((key) => Object.is(a_map[key], b_map[key]));
}

/**
 * Tracks which resources of a root service the open views use.
 *
 * Wrap the params of a resource with `params()`. The resource does not load
 * before a view uses it. While no view uses it, it keeps its last params and
 * data, so changes such as a new building do not start a load in the
 * background. When a view uses it again, it loads only if its params changed.
 */
export class ResourceDemand<K extends string> {
    private readonly _counts = signal<Partial<Record<K, number>>>({});

    /**
     * Mark resources as used until the calling view is destroyed.
     * Call in an injection context, for example a field initializer.
     */
    public use(...names: K[]) {
        this._update(names, 1);
        inject(DestroyRef).onDestroy(() => this._update(names, -1));
    }

    /** Whether a view uses the resource now */
    public isActive(name: K) {
        return (this._counts()[name] || 0) > 0;
    }

    /** Params that are undefined before the first use and hold still while not used */
    public params<T>(name: K, params: () => T): Signal<T | undefined> {
        return linkedSignal<{ active: boolean; params: T }, T | undefined>({
            source: () => ({ active: this.isActive(name), params: params() }),
            computation: (source, previous) =>
                source.active ? source.params : previous?.value,
            equal: shallowEqual,
        });
    }

    private _update(names: K[], change: number) {
        this._counts.update((counts) => {
            const next = { ...counts };
            for (const name of names) next[name] = (next[name] || 0) + change;
            return next;
        });
    }
}
