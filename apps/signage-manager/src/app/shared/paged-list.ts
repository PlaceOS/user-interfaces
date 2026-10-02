import { signal } from '@angular/core';
import { QueryResponse } from '@placeos/ts-client';
import { decodeEntityNames } from './decode-entity-names.util';

export interface PagedListOptions<T> {
    /** Order of the loaded items. Without it, items keep their load order. */
    sort?: (a: T, b: T) => number;
    /**
     * Rows of a page to keep. Paging still counts every row the server sent,
     * so it compares like with like against the server total.
     */
    filter?: (item: T) => boolean;
    /** Called with the kept items of each page, e.g. to fill a cache */
    on_page?: (items: T[]) => void;
}

/**
 * List loaded one page at a time from a paged query, as the user scrolls.
 * Items are merged by ID, so an item already held locally, such as one just
 * created, is not shown twice when its page arrives.
 *
 * The owner starts each query with `reset`, usually from an effect that
 * follows the query inputs.
 */
export class PagedList<T extends { id: string }> {
    private readonly _items = signal<T[]>([]);
    private readonly _loading = signal(false);
    private readonly _has_more = signal(false);
    private readonly _total = signal(0);
    private readonly _error = signal(false);

    public readonly items = this._items.asReadonly();
    public readonly loading = this._loading.asReadonly();
    public readonly has_more = this._has_more.asReadonly();
    /** Number of items the server has for the query, loaded or not */
    public readonly total = this._total.asReadonly();
    /** Whether the last page failed to load. `retry` loads it again. */
    public readonly error = this._error.asReadonly();

    private _next: (() => QueryResponse<T> | null) | null = null;
    // Bumped on every reset, so pages from a stale query are discarded
    private _token = 0;
    // Rows the server sent for the query, before `filter`
    private _loaded_rows = 0;
    // Whether the next page replaces the loaded items instead of merging
    private _replace = false;

    constructor(private readonly _options: PagedListOptions<T> = {}) {}

    /** Rows the server sent for the current query, before the filter */
    public get loaded_rows() {
        return this._loaded_rows;
    }

    /**
     * Start a new query from its first page. A null query clears the list.
     * @param keep_items Keep the loaded items on screen until the first page
     * replaces them, for a reload of the same query
     */
    public reset(
        query: QueryResponse<T> | null,
        { keep_items = false }: { keep_items?: boolean } = {},
    ) {
        const token = ++this._token;
        this._next = null;
        this._has_more.set(false);
        this._error.set(false);
        this._replace = !!query && keep_items;
        if (!this._replace) {
            this._items.set([]);
            this._total.set(0);
            this._loaded_rows = 0;
        }
        if (query) this._fetchPage(query, token);
    }

    public loadMore() {
        if (this._loading() || !this._has_more()) return;
        const next = this._next?.();
        if (!next) {
            this._has_more.set(false);
            return;
        }
        this._fetchPage(next, this._token);
    }

    /**
     * Load the page that failed again, when a later page failed.
     * @returns False when the first page failed, so the owner must `reset`
     */
    public retry() {
        if (this._loading() || !this._error()) return true;
        if (!this._next) return false;
        this._error.set(false);
        this._has_more.set(true);
        this.loadMore();
        return true;
    }

    /** Change the loaded items in place, e.g. after a local edit. The order
     * is up to `updater`. */
    public update(updater: (items: T[]) => T[]) {
        this._items.update(updater);
    }

    /** Change the server total by a local count, e.g. after a delete */
    public adjustTotal(change: number) {
        this._total.update((total) => Math.max(0, total + change));
    }

    private async _fetchPage(query: QueryResponse<T>, token: number) {
        this._loading.set(true);
        this._error.set(false);
        try {
            const page = await query;
            if (token !== this._token) return;
            const rows = page.data || [];
            const items = rows
                .filter(this._options.filter || (() => true))
                .map(decodeEntityNames);
            const replace = this._replace;
            const first_page = replace || !this._loaded_rows;
            this._replace = false;
            this._loaded_rows = (replace ? 0 : this._loaded_rows) + rows.length;
            this._items.update((list) => {
                const by_id = new Map(
                    (replace ? [] : list).map((item) => [item.id, item]),
                );
                for (const item of items) by_id.set(item.id, item);
                const merged = [...by_id.values()];
                const sort = this._options.sort;
                return sort ? merged.sort(sort) : merged;
            });
            this._options.on_page?.(items);
            this._next = page.next;
            // Later pages can report an older total while the search index
            // catches up, which would undo local counts of new items
            if (first_page) this._total.set(page.total);
            // An empty page ends paging, so page loops cannot run forever
            this._has_more.set(
                rows.length > 0 && this._loaded_rows < page.total,
            );
        } catch {
            // Paging stops, so a loop that loads every page cannot spin on a
            // failing page. The error state offers a retry instead.
            if (token === this._token) {
                this._has_more.set(false);
                this._error.set(true);
            }
        } finally {
            if (token === this._token) this._loading.set(false);
        }
    }
}
