import {
  LocaleService,
  Pipe,
  inject,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-ZICKXSK2.js";

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
//# debugId=d2ef139e-3e38-54db-beef-ec90bf0c4feb
//# sourceMappingURL=chunk-JXNJ2Z2W.js.map
