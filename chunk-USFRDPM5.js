import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// libs/map-editor/src/lib/protected-ids.ts
var ProtectedIdSet = class _ProtectedIdSet {
  constructor(ids = [], complete = true, failed_sources = []) {
    this.complete = complete;
    this.failed_sources = failed_sources;
    this._ids = /* @__PURE__ */ new Map();
    for (const entry of ids) {
      if (!entry.id)
        continue;
      const existing = this._ids.get(entry.id);
      if (!existing)
        this._ids.set(entry.id, entry);
      else if (!existing.label && entry.label)
        this._ids.set(entry.id, entry);
    }
  }
  static empty() {
    return new _ProtectedIdSet();
  }
  get size() {
    return this._ids.size;
  }
  has(id) {
    return !!id && this._ids.has(id);
  }
  get(id) {
    return this._ids.get(id);
  }
  ids() {
    return [...this._ids.values()];
  }
  labelOf(id) {
    const entry = this._ids.get(id);
    return entry?.label || id;
  }
};
function mergeProtectedIds(outcomes) {
  const ids = [];
  const failed = [];
  for (const outcome of outcomes) {
    if (outcome.error !== void 0 || !outcome.ids)
      failed.push(outcome.source);
    else
      ids.push(...outcome.ids);
  }
  return new ProtectedIdSet(ids, failed.length === 0, failed);
}
async function collectProtectedIds(sources) {
  const names = Object.keys(sources);
  const settled = await Promise.allSettled(names.map((name) => sources[name]()));
  return mergeProtectedIds(settled.map((result, i) => result.status === "fulfilled" ? { source: names[i], ids: result.value } : {
    source: names[i],
    error: result.reason ?? new Error("failed")
  }));
}

// libs/map-editor/src/lib/render-check.ts
var BrowserRenderCheck = class {
  constructor(_timeout_ms = 1e4) {
    this._timeout_ms = _timeout_ms;
  }
  check(markup) {
    const started = Date.now();
    const url = URL.createObjectURL(new Blob([markup], { type: "image/svg+xml" }));
    return new Promise((resolve) => {
      const image = new Image();
      let settled = false;
      const finish = (result) => {
        if (settled)
          return;
        settled = true;
        clearTimeout(timer);
        URL.revokeObjectURL(url);
        resolve(__spreadProps(__spreadValues({}, result), { duration_ms: Date.now() - started }));
      };
      const timer = setTimeout(() => finish({
        ok: false,
        error: "the map did not finish rendering in time"
      }), this._timeout_ms);
      image.onload = () => {
        if (!image.naturalWidth && !image.width) {
          finish({
            ok: false,
            error: "the map rendered with no size"
          });
          return;
        }
        finish({ ok: true });
      };
      image.onerror = () => finish({
        ok: false,
        error: "the browser could not draw the map"
      });
      image.src = url;
    });
  }
};
var FakeRenderCheck = class {
  constructor(_result = { ok: true }) {
    this._result = _result;
    this.calls = [];
  }
  async check(markup) {
    this.calls.push(markup);
    return __spreadValues({}, this._result);
  }
};

export {
  ProtectedIdSet,
  collectProtectedIds,
  BrowserRenderCheck,
  FakeRenderCheck
};
//# debugId=833c040c-239d-5bdf-99e3-87265a22ec70
//# sourceMappingURL=chunk-USFRDPM5.js.map
