import {
  listenToConsole,
  randomInt
} from "./chunk-X442T4UJ.js";
import {
  Injectable,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-P2RLUWKE.js";

// libs/common/src/lib/console-history.service.ts
var MAX_HISTORY = 2e4;
var ConsoleHistoryService = class _ConsoleHistoryService {
  constructor() {
    this._history = signal(
      [],
      ...ngDevMode ? [{ debugName: "_history" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._unlisten = listenToConsole((method, args) => untracked(() => this._record(method, args)));
    this.history = this._history.asReadonly();
  }
  ngOnDestroy() {
    this._unlisten();
  }
  _record(method, args) {
    const data = [...args];
    if (typeof data[0] === "string") {
      data[0] = data[0].replace(/%c/g, "");
    }
    const event = {
      id: `console-${randomInt(9999999999)}`,
      type: "console",
      subtype: method,
      timestamp: Date.now(),
      data: data.filter((_) => typeof _ !== "string" || !_.startsWith("color:"))
    };
    this._history.update((history) => [...history, event].slice(-MAX_HISTORY));
  }
  static {
    this.\u0275fac = function ConsoleHistoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsoleHistoryService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConsoleHistoryService, factory: _ConsoleHistoryService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsoleHistoryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ConsoleHistoryService
};
//# debugId=2f972c6d-6a8d-546a-9915-f47fe021912f
//# sourceMappingURL=chunk-2U25XCAX.js.map
