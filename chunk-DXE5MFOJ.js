import {
  Directive,
  ElementRef,
  afterNextRender,
  inject,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-CLFS24D3.js";

// apps/visitor-kiosk/src/app/components/page-heading.directive.ts
var PageHeadingDirective = class _PageHeadingDirective {
  constructor() {
    const el = inject(ElementRef).nativeElement;
    afterNextRender(() => {
      const active = document.activeElement;
      if (active && active !== document.body)
        return;
      el.focus({ preventScroll: true });
    });
  }
  static {
    this.\u0275fac = function PageHeadingDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageHeadingDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _PageHeadingDirective, selectors: [["", "pageHeading", ""]], hostAttrs: ["tabindex", "-1"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageHeadingDirective, [{
    type: Directive,
    args: [{
      selector: "[pageHeading]",
      host: { tabindex: "-1" }
    }]
  }], () => [], null);
})();

export {
  PageHeadingDirective
};
//# debugId=c8ec7824-3548-55a1-921b-27d0293a461b
//# sourceMappingURL=chunk-DXE5MFOJ.js.map
