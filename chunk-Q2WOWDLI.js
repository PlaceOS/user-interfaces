import {
  DomSanitizer,
  Pipe,
  inject,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-OBS3NIR6.js";

// libs/components/src/lib/sanitise.pipe.ts
var SecurityContext;
(function(SecurityContext2) {
  SecurityContext2[SecurityContext2["NONE"] = 0] = "NONE";
  SecurityContext2[SecurityContext2["HTML"] = 1] = "HTML";
  SecurityContext2[SecurityContext2["STYLE"] = 2] = "STYLE";
  SecurityContext2[SecurityContext2["SCRIPT"] = 3] = "SCRIPT";
  SecurityContext2[SecurityContext2["URL"] = 4] = "URL";
  SecurityContext2[SecurityContext2["RESOURCE_URL"] = 5] = "RESOURCE_URL";
})(SecurityContext || (SecurityContext = {}));
var SanitizePipe = class _SanitizePipe {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
  }
  transform(value, type = "html") {
    switch (type) {
      case "resource":
        return this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, value);
      case "url":
        return this.sanitizer.sanitize(SecurityContext.URL, value);
      case "script":
        return this.sanitizer.sanitize(SecurityContext.SCRIPT, value);
      case "style":
        return this.sanitizer.sanitize(SecurityContext.STYLE, value);
      default:
        return this.sanitizer.sanitize(SecurityContext.HTML, value);
    }
  }
  static {
    this.\u0275fac = function SanitizePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SanitizePipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "sanitize", type: _SanitizePipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SanitizePipe, [{
    type: Pipe,
    args: [{
      name: "sanitize"
    }]
  }], null, null);
})();

export {
  SanitizePipe
};
//# debugId=ebb6c185-203f-54f3-ad35-a1d9bb0b65c6
//# sourceMappingURL=chunk-Q2WOWDLI.js.map
