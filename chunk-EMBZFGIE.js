import {
  debounced,
  effect,
  signal,
  untracked
} from "./chunk-6HUGPUMR.js";

// apps/signage-manager/src/app/shared/decode-entity-names.util.ts
var _decoder = null;
function decodeEntities(value) {
  if (!value || value.indexOf("&") === -1)
    return value;
  _decoder ??= document.createElement("textarea");
  _decoder.innerHTML = value;
  return _decoder.value;
}
var NAME_FIELDS = ["name", "display_name"];
var NESTED_FIELDS = ["group", "user", "zone"];
var _decoded = /* @__PURE__ */ new WeakSet();
function decodeEntityNames(item) {
  if (!item || typeof item !== "object" || _decoded.has(item))
    return item;
  const copy = Object.assign(Object.create(Object.getPrototypeOf(item)), item);
  const fields = copy;
  for (const field of NAME_FIELDS) {
    const value = fields[field];
    if (typeof value === "string")
      fields[field] = decodeEntities(value);
  }
  for (const field of NESTED_FIELDS) {
    const value = fields[field];
    if (value && typeof value === "object") {
      fields[field] = decodeEntityNames(value);
    }
  }
  _decoded.add(fields);
  return copy;
}

// apps/signage-manager/src/app/shared/paged-list.ts
var PagedList = class {
  constructor(_options = {}) {
    this._options = _options;
    this._items = signal(
      [],
      ...ngDevMode ? [{ debugName: "_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._has_more = signal(
      false,
      ...ngDevMode ? [{ debugName: "_has_more" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._total = signal(
      0,
      ...ngDevMode ? [{ debugName: "_total" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._error = signal(
      false,
      ...ngDevMode ? [{ debugName: "_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.items = this._items.asReadonly();
    this.loading = this._loading.asReadonly();
    this.has_more = this._has_more.asReadonly();
    this.total = this._total.asReadonly();
    this.error = this._error.asReadonly();
    this._next = null;
    this._token = 0;
    this._loaded_rows = 0;
    this._replace = false;
  }
  /** Rows the server sent for the current query, before the filter */
  get loaded_rows() {
    return this._loaded_rows;
  }
  /**
   * Start a new query from its first page. A null query clears the list.
   * @param keep_items Keep the loaded items on screen until the first page
   * replaces them, for a reload of the same query
   */
  reset(query, { keep_items = false } = {}) {
    const token = ++this._token;
    this._next = null;
    this._has_more.set(false);
    this._error.set(false);
    this._loading.set(false);
    this._replace = !!query && keep_items;
    if (!this._replace) {
      this._items.set([]);
      this._total.set(0);
      this._loaded_rows = 0;
    }
    if (query)
      this._fetchPage(query, token);
  }
  loadMore() {
    if (this._loading() || !this._has_more())
      return;
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
  retry() {
    if (this._loading() || !this._error())
      return true;
    if (!this._next)
      return false;
    this._error.set(false);
    this._has_more.set(true);
    this.loadMore();
    return true;
  }
  /** Change the loaded items in place, e.g. after a local edit. The order
   * is up to `updater`. */
  update(updater) {
    this._items.update(updater);
  }
  /** Change the server total by a local count, e.g. after a delete */
  adjustTotal(change) {
    this._total.update((total) => Math.max(0, total + change));
  }
  async _fetchPage(query, token) {
    this._loading.set(true);
    this._error.set(false);
    try {
      const page = await query;
      if (token !== this._token)
        return;
      const rows = page.data || [];
      const items = rows.filter(this._options.filter || (() => true)).map(decodeEntityNames);
      const replace = this._replace;
      const first_page = replace || !this._loaded_rows;
      this._replace = false;
      this._loaded_rows = (replace ? 0 : this._loaded_rows) + rows.length;
      this._items.update((list) => {
        const by_id = new Map((replace ? [] : list).map((item) => [item.id, item]));
        for (const item of items)
          by_id.set(item.id, item);
        const merged = [...by_id.values()];
        const sort = this._options.sort;
        return sort ? merged.sort(sort) : merged;
      });
      this._options.on_page?.(items);
      this._next = page.next;
      if (first_page)
        this._total.set(page.total);
      this._has_more.set(rows.length > 0 && this._loaded_rows < page.total);
    } catch {
      if (token === this._token) {
        this._has_more.set(false);
        this._error.set(true);
      }
    } finally {
      if (token === this._token)
        this._loading.set(false);
    }
  }
};

// apps/signage-manager/src/app/shared/paged-search.ts
var PagedSearch = class {
  constructor(_query, sort, debounce_ms = 400) {
    this._query = _query;
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.term = signal(
      "",
      ...ngDevMode ? [{ debugName: "term" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._list = new PagedList({ sort });
    this.items = this._list.items;
    this.loading = this._list.loading;
    this.has_more = this._list.has_more;
    this.error = this._list.error;
    const search_debounced = debounced(this.search, debounce_ms);
    effect(() => {
      const term = search_debounced.value();
      untracked(() => {
        this.term.set(term);
        this._list.reset(this._query(term));
      });
    });
  }
  loadMore() {
    this._list.loadMore();
  }
  /** Load the page that failed again, or the first page when it failed */
  retry() {
    if (this.search() !== this.term())
      return;
    if (!this._list.retry())
      this.refresh();
  }
  /** Run the current query again, as when its scope changes */
  refresh() {
    this._list.reset(this._query(this.term()));
  }
};
function byDisplayName(a, b) {
  return (a.display_name || a.name).localeCompare(b.display_name || b.name);
}
function byName(a, b) {
  return a.name.localeCompare(b.name);
}

export {
  decodeEntities,
  decodeEntityNames,
  PagedList,
  PagedSearch,
  byDisplayName,
  byName
};
//# debugId=0bc5a384-ef6d-5f6a-a6ad-10d858b3a229
//# sourceMappingURL=chunk-EMBZFGIE.js.map
