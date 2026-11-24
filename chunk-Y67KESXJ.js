import {
  Service,
  setClassMetadata,
  ɵɵdefineService
} from "./chunk-Y6KAMZVN.js";

// node_modules/@angular/cdk/fesm2022/_unique-selection-dispatcher-chunk.mjs
var UniqueSelectionDispatcher = class _UniqueSelectionDispatcher {
  _listeners = [];
  notify(id, name) {
    for (let listener of this._listeners) {
      listener(id, name);
    }
  }
  listen(listener) {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter((registered) => {
        return listener !== registered;
      });
    };
  }
  ngOnDestroy() {
    this._listeners = [];
  }
  static \u0275fac = function UniqueSelectionDispatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UniqueSelectionDispatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _UniqueSelectionDispatcher,
    factory: _UniqueSelectionDispatcher.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UniqueSelectionDispatcher, [{
    type: Service
  }], null, null);
})();

export {
  UniqueSelectionDispatcher
};
//# debugId=091a0782-0a5e-5199-b46d-75b454917999
//# sourceMappingURL=chunk-Y67KESXJ.js.map
