import {
  LocaleService
} from "./chunk-DEJPKCPZ.js";
import {
  LiveAnnouncer
} from "./chunk-2WJ4TY57.js";
import {
  DestroyRef,
  Directive,
  ElementRef,
  Injector,
  afterNextRender,
  inject,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-QPTDOO3V.js";

// apps/control/src/app/control-store-key.ts
var CONTROL_STORE_KEY = "PLACEOS.CONTROL.system";

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
  AnnounceDirective,
  CONTROL_STORE_KEY
};
//# debugId=da5c3109-98c2-5b4c-ba2e-d4610602744a
//# sourceMappingURL=chunk-2SQLFSJ4.js.map
