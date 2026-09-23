import {
  decodeEntityNames
} from "./chunk-XASXFKEM.js";
import {
  debounced,
  effect,
  signal,
  untracked
} from "./chunk-QSNPLM4U.js";

// apps/signage-manager/src/app/shared/paged-search.ts
var PagedSearch = class {
  constructor(_query, _sort, debounce_ms = 400) {
    this._query = _query;
    this._sort = _sort;
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.items = signal(
      [],
      ...ngDevMode ? [{ debugName: "items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_more = signal(
      false,
      ...ngDevMode ? [{ debugName: "has_more" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._next = null;
    this._token = 0;
    const search_debounced = debounced(this.search, debounce_ms);
    effect(() => {
      const term = search_debounced.value();
      untracked(() => {
        const token = ++this._token;
        this.items.set([]);
        this._next = null;
        this.has_more.set(false);
        const query = this._query(term);
        if (query)
          this._fetchPage(query, token);
      });
    });
  }
  loadMore() {
    if (this.loading() || !this.has_more())
      return;
    const next = this._next?.();
    if (!next) {
      this.has_more.set(false);
      return;
    }
    this._fetchPage(next, this._token);
  }
  async _fetchPage(query, token) {
    this.loading.set(true);
    try {
      const page = await query;
      if (token !== this._token)
        return;
      const items = (page.data || []).map(decodeEntityNames);
      this.items.update((list) => {
        const merged = [...list, ...items];
        return this._sort ? merged.sort(this._sort) : merged;
      });
      this._next = page.next;
      this.has_more.set(this.items().length < page.total);
    } catch {
      if (token === this._token)
        this.has_more.set(false);
    } finally {
      if (token === this._token)
        this.loading.set(false);
    }
  }
};
function byDisplayName(a, b) {
  return (a.display_name || a.name).localeCompare(b.display_name || b.name);
}
function byName(a, b) {
  return a.name.localeCompare(b.name);
}

export {
  PagedSearch,
  byDisplayName,
  byName
};
//# debugId=f9515a12-31c0-5492-b89f-33b35695ea37
//# sourceMappingURL=chunk-EQ5LIJEF.js.map
