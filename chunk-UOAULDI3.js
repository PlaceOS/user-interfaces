import {
  LocaleService
} from "./chunk-6ERNVUYY.js";
import {
  LiveAnnouncer
} from "./chunk-E7F6ANP7.js";
import {
  DestroyRef,
  Directive,
  ElementRef,
  Injector,
  afterNextRender,
  inject,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-QU3LMPFF.js";

// libs/components/src/lib/announce.directive.ts
var _AnnounceDirective = class _AnnounceDirective {
  constructor() {
    const el = inject(ElementRef).nativeElement;
    const announcer = inject(LiveAnnouncer);
    const locale = inject(LocaleService);
    const injector = inject(Injector);
    const destroy_ref = inject(DestroyRef);
    let last_text = "";
    const announceText = () => {
      var _a;
      const text = ((_a = el.textContent) == null ? void 0 : _a.trim()) ?? "";
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
};
_AnnounceDirective.\u0275fac = function AnnounceDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AnnounceDirective)();
};
_AnnounceDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AnnounceDirective, selectors: [["", "announce", ""]] });
var AnnounceDirective = _AnnounceDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnnounceDirective, [{
    type: Directive,
    args: [{ selector: "[announce]" }]
  }], () => [], null);
})();

export {
  AnnounceDirective
};
//# debugId=1b489875-fb8d-5a4e-88a1-0f156b0425b6
//# sourceMappingURL=chunk-UOAULDI3.js.map
