import {
  getCachedAuthenticatedImage,
  loadAuthenticatedImage,
  loadAuthenticatedImageWithHeader
} from "./chunk-VOXI3UVZ.js";
import {
  AsyncHandler
} from "./chunk-SAAU3CSL.js";
import {
  Directive,
  ElementRef,
  Input,
  Mt,
  inject,
  input,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵgetInheritedFactory
} from "./chunk-JABNH3I5.js";

// libs/components/src/lib/authenticated-image.directive.ts
var AuthenticatedImageDirective = class _AuthenticatedImageDirective extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._element = inject(ElementRef);
    this._observer = null;
    this._source_version = 0;
    this.source = input(
      void 0,
      ...ngDevMode ? [{ debugName: "source" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnChanges(changes) {
    if (!changes.source)
      return;
    this._source_version += 1;
    this.clearTimeout("load");
    this._observer?.disconnect();
    this._observer = null;
    const source = this.source();
    if (!source)
      return;
    if (!this._isLocalUrl(source)) {
      this._element.nativeElement.src = source;
      return;
    }
    this._loadWhenVisible(source, this._source_version);
  }
  ngOnDestroy() {
    this._observer?.disconnect();
    this._observer = null;
    super.ngOnDestroy();
  }
  _loadWhenVisible(source, version) {
    if (typeof IntersectionObserver === "undefined") {
      void this._loadImage(source, version);
      return;
    }
    this._observer = new IntersectionObserver((entries) => {
      if (!entries.some(({ isIntersecting }) => isIntersecting)) {
        return;
      }
      this._observer?.disconnect();
      this._observer = null;
      void this._loadImage(source, version);
    }, { rootMargin: "300px" });
    this._observer.observe(this._element.nativeElement);
  }
  async _loadImage(source, version) {
    if (version !== this._source_version || source !== this.source())
      return;
    if (!Mt()) {
      this.timeout("load", () => void this._loadImage(source, version), 300);
      return;
    }
    const cached = getCachedAuthenticatedImage(source);
    if (cached) {
      this._element.nativeElement.src = cached;
      return;
    }
    const is_api = source.includes("/api/engine/v2/uploads") || source.includes("/api/engine/v2/signage");
    try {
      const url = is_api ? await loadAuthenticatedImage(source, this._cookiePath(source)) : await loadAuthenticatedImageWithHeader(source);
      if (version === this._source_version && source === this.source()) {
        this._element.nativeElement.src = url;
      }
    } catch (error) {
      if (version === this._source_version) {
        this._element.nativeElement.dispatchEvent(new ErrorEvent("error", { error }));
      }
    }
  }
  /** Whether the source resolves to the current origin. */
  _isLocalUrl(source) {
    try {
      return new URL(source, location.href).origin === location.origin;
    } catch {
      return false;
    }
  }
  /** Return the narrowest cookie path that includes the resource. */
  _cookiePath(source) {
    return source.includes("/api/engine/v2/uploads") ? "/api/engine/v2/uploads" : "/api/engine/v2/signage";
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AuthenticatedImageDirective_BaseFactory;
      return function AuthenticatedImageDirective_Factory(__ngFactoryType__) {
        return (\u0275AuthenticatedImageDirective_BaseFactory || (\u0275AuthenticatedImageDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AuthenticatedImageDirective)))(__ngFactoryType__ || _AuthenticatedImageDirective);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AuthenticatedImageDirective, selectors: [["img", "auth", ""], ["video", "auth", ""], ["audio", "auth", ""]], inputs: { source: [1, "source"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthenticatedImageDirective, [{
    type: Directive,
    args: [{
      selector: "img[auth], video[auth], audio[auth]"
    }]
  }], null, { source: [{ type: Input, args: [{ isSignal: true, alias: "source", required: false }] }] });
})();

export {
  AuthenticatedImageDirective
};
//# debugId=07b842f7-777e-54dc-ae20-fba03d444a17
//# sourceMappingURL=chunk-KIR7RDPJ.js.map
