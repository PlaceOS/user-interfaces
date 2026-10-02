import { debounced, effect, Signal, signal, untracked } from '@angular/core';
import { QueryResponse } from '@placeos/ts-client';
import { PagedList } from './paged-list';

/**
 * Backend search paged as the user scrolls, for the picker modals. Filtering
 * a loaded list would only ever find the items that happened to be fetched,
 * so the term goes to the API and the results page like any other list.
 *
 * Build it in a field initialiser, it needs an injection context.
 */
export class PagedSearch<T extends { id: string }> {
    public readonly search = signal('');
    private readonly _list: PagedList<T>;
    public readonly items: Signal<T[]>;
    public readonly loading: Signal<boolean>;
    public readonly has_more: Signal<boolean>;

    constructor(
        /** Builds the first page of results, null when the user may not query */
        query: (search: string) => QueryResponse<T> | null,
        sort?: (a: T, b: T) => number,
        debounce_ms = 400,
    ) {
        this._list = new PagedList<T>({ sort });
        this.items = this._list.items;
        this.loading = this._list.loading;
        this.has_more = this._list.has_more;
        const search_debounced = debounced(this.search, debounce_ms);
        effect(() => {
            const term = search_debounced.value();
            untracked(() => this._list.reset(query(term)));
        });
    }

    public loadMore() {
        this._list.loadMore();
    }
}

/** Displays and zones show a display_name in preference to their name */
export function byDisplayName(a: any, b: any) {
    return (a.display_name || a.name).localeCompare(b.display_name || b.name);
}

export function byName(a: { name: string }, b: { name: string }) {
    return a.name.localeCompare(b.name);
}
