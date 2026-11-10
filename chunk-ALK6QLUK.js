import {
  DomSanitizer,
  Pipe,
  SecurityContext,
  inject,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-AQIWUFR7.js";

// libs/components/src/lib/safe.pipe.ts
var SafePipe = class _SafePipe {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
  }
  /**
   * Marks the string as trusted, so it can be injected into a template.
   * A `url` or `resource` that runs script, such as `javascript:`, is not
   * trusted. It becomes `null` for `url` and an empty URL for `resource`.
   * The type has no default, so each `html` use is explicit. Never pass
   * user content as `html`. Bind it to `[innerHTML]` without this pipe,
   * so Angular sanitises it.
   * @param value String to trust
   * @param type Type of value to trust. `resource`, `url`, `style` or `html`
   */
  transform(value, type) {
    switch (type) {
      case "resource":
        return this.sanitizer.bypassSecurityTrustResourceUrl(this._isSafeUrl(value) ? value : "");
      case "url":
        return this._isSafeUrl(value) ? this.sanitizer.bypassSecurityTrustUrl(value) : null;
      case "style":
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case "html":
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
  }
  /** True when Angular's URL check leaves the URL as is */
  _isSafeUrl(url) {
    return this.sanitizer.sanitize(SecurityContext.URL, url) === url;
  }
  static {
    this.\u0275fac = function SafePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SafePipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "safe", type: _SafePipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafePipe, [{
    type: Pipe,
    args: [{
      name: "safe"
    }]
  }], null, null);
})();

export {
  SafePipe
};
//# debugId=98358461-5450-532e-80c8-035aea2eb349
//# sourceMappingURL=chunk-ALK6QLUK.js.map
