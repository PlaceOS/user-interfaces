import {
  LocaleService
} from "./chunk-F6EFLGBM.js";
import {
  Pipe,
  inject,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-ZL76SY4J.js";

// libs/components/src/lib/translate.pipe.ts
var _TranslatePipe = class _TranslatePipe {
  constructor() {
    this._locale = inject(LocaleService);
  }
  transform(value, args = {}, plural) {
    return this._locale.get(value, args, plural) || value;
  }
};
_TranslatePipe.\u0275fac = function TranslatePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TranslatePipe)();
};
_TranslatePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "translate", type: _TranslatePipe, pure: false });
var TranslatePipe = _TranslatePipe;
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
//# debugId=8f6754c5-f7f6-59e3-b538-d0f0ca357b89
//# sourceMappingURL=chunk-62SMBV55.js.map
