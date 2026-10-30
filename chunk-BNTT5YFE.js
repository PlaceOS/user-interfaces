import {
  LiveAnnouncer
} from "./chunk-ZGEGORPC.js";
import {
  Directive,
  ElementRef,
  afterNextRender,
  inject,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-CLFS24D3.js";

// apps/visitor-kiosk/src/app/components/announce.directive.ts
var AnnounceDirective = class _AnnounceDirective {
  constructor() {
    const el = inject(ElementRef).nativeElement;
    const announcer = inject(LiveAnnouncer);
    afterNextRender(() => {
      const text = el.textContent?.trim();
      if (text)
        announcer.announce(text, "polite");
    });
  }
  static {
    this.\u0275fac = function AnnounceDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnnounceDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AnnounceDirective, selectors: [["", "announce", ""]] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnnounceDirective, [{
    type: Directive,
    args: [{ selector: "[announce]" }]
  }], () => [], null);
})();

export {
  AnnounceDirective
};
//# debugId=98b8ac35-6d53-5811-99d9-635efd16ae30
//# sourceMappingURL=chunk-BNTT5YFE.js.map
