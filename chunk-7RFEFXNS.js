import {
  LocaleService
} from "./chunk-F2KCMQDL.js";
import {
  Pipe,
  inject,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-E52RJLI7.js";

// libs/components/src/lib/translate.pipe.ts
var TranslatePipe = class _TranslatePipe {
  constructor() {
    this._locale = inject(LocaleService);
  }
  transform(value, args = {}, plural) {
    return this._locale.get(value, args, plural) || value;
  }
  static {
    this.\u0275fac = function TranslatePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TranslatePipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "translate", type: _TranslatePipe, pure: false });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslatePipe, [{
    type: Pipe,
    args: [{
      name: "translate",
      pure: false
    }]
  }], null, null);
})();

export {
  TranslatePipe
};
//# debugId=e40f8122-b041-5a0d-9274-6184c0e6c469
//# sourceMappingURL=chunk-7RFEFXNS.js.map
