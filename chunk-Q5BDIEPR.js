import {
  DestroyRef,
  inject,
  linkedSignal,
  signal
} from "./chunk-EOGESHX7.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/ui/resource-demand.ts
function shallowEqual(a, b) {
  if (Object.is(a, b))
    return true;
  if (!a || !b || typeof a !== "object" || typeof b !== "object") {
    return false;
  }
  const a_map = a;
  const b_map = b;
  const a_keys = Object.keys(a_map);
  if (a_keys.length !== Object.keys(b_map).length)
    return false;
  return a_keys.every((key) => Object.is(a_map[key], b_map[key]));
}
var ResourceDemand = class {
  constructor() {
    this._counts = signal(
      {},
      ...ngDevMode ? [{ debugName: "_counts" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  /**
   * Mark resources as used until the calling view is destroyed.
   * Call in an injection context, for example a field initializer.
   */
  use(...names) {
    this._update(names, 1);
    inject(DestroyRef).onDestroy(() => this._update(names, -1));
  }
  /** Whether a view uses the resource now */
  isActive(name) {
    return (this._counts()[name] || 0) > 0;
  }
  /** Params that are undefined before the first use and hold still while not used */
  params(name, params) {
    return linkedSignal({
      source: () => ({ active: this.isActive(name), params: params() }),
      computation: (source, previous) => source.active ? source.params : previous?.value,
      equal: shallowEqual
    });
  }
  _update(names, change) {
    this._counts.update((counts) => {
      const next = __spreadValues({}, counts);
      for (const name of names)
        next[name] = (next[name] || 0) + change;
      return next;
    });
  }
};

export {
  ResourceDemand
};
//# debugId=a4681797-9729-5dfc-b3c8-b99b8965b375
//# sourceMappingURL=chunk-Q5BDIEPR.js.map
