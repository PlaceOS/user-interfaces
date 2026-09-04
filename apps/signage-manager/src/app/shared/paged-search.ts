import { debounced, effect, signal, untracked } from '@angular/core';
import { QueryResponse } from '@placeos/ts-client';
import { decodeEntityNames } from './decode-entity-names.util';

/**
 * Backend search paged as the user scrolls, for the picker modals. Filtering
 * a loaded list would only ever find the items that happened to be fetched,
 * so the term goes to the API and the results page like any other list.
 *
 * Build it in a field initialiser, it needs an injection context.
 */
export class PagedSearch<T extends { id: string }> {
    public readonly search = signal('');
    public readonly items = signal<T[]>([]);
    public readonly loading = signal(false);
    public readonly has_more = signal(false);

    private _next: (() => QueryResponse<T> | null) | null = null;
    // Bumped on every new search so pages from a stale query are discarded.
    private _token = 0;

    constructor(
        /** Builds the first page of results, null when the user may not query */
        private _query: (search: string) => QueryResponse<T> | null,
        private _sort?: (a: T, b: T) => number,
        debounce_ms = 400,
    ) {
        const search_debounced = debounced(this.search, debounce_ms);
        effect(() => {
            const term = search_debounced.value();
            untracked(() => {
                const token = ++this._token;
                this.items.set([]);
                this._next = null;
                this.has_more.set(false);
                const query = this._query(term);
                if (query) this._fetchPage(query, token);
            });
        });
    }

    public loadMore() {
        if (this.loading() || !this.has_more()) return;
        const next = this._next?.();
        if (!next) {
            this.has_more.set(false);
            return;
        }
        this._fetchPage(next, this._token);
    }

    private async _fetchPage(query: QueryResponse<T>, token: number) {
        this.loading.set(true);
        try {
            const page = await query;
            if (token !== this._token) return;
            const items = (page.data || []).map(decodeEntityNames);
            this.items.update((list) => {
                const merged = [...list, ...items];
                return this._sort ? merged.sort(this._sort) : merged;
            });
            this._next = page.next;
            this.has_more.set(this.items().length < page.total);
        } catch {
            if (token === this._token) this.has_more.set(false);
        } finally {
            if (token === this._token) this.loading.set(false);
        }
    }
}

/** Displays and zones show a display_name in preference to their name */
export function byDisplayName(a: any, b: any) {
    return (a.display_name || a.name).localeCompare(b.display_name || b.name);
}

export function byName(a: { name: string }, b: { name: string }) {
    return a.name.localeCompare(b.name);
}
