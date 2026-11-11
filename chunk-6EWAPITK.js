import {
  LocaleService
} from "./chunk-GAMVBC5P.js";
import {
  LiveAnnouncer
} from "./chunk-CPSLMZ5T.js";
import {
  DestroyRef,
  Directive,
  ElementRef,
  Injector,
  afterNextRender,
  inject,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-UL33YUHR.js";

// libs/components/src/lib/announce.directive.ts
var AnnounceDirective = class _AnnounceDirective {
  constructor() {
    const el = inject(ElementRef).nativeElement;
    const announcer = inject(LiveAnnouncer);
    const locale = inject(LocaleService);
    const injector = inject(Injector);
    const destroy_ref = inject(DestroyRef);
    let last_text = "";
    const announceText = () => {
      const text = el.textContent?.trim() ?? "";
      if (!text || text === last_text)
        return;
      last_text = text;
      announcer.announce(text, "polite");
    };
    afterNextRender(async () => {
      await locale.loaded();
      if (destroy_ref.destroyed)
        return;
      afterNextRender(announceText, { injector });
      const observer = new MutationObserver(announceText);
      observer.observe(el, {
        characterData: true,
        childList: true,
        subtree: true
      });
      destroy_ref.onDestroy(() => observer.disconnect());
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
//# debugId=c6683c90-3e1a-5191-800a-04b0e4ddccf1
//# sourceMappingURL=chunk-6EWAPITK.js.map
