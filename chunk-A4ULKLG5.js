import {
  getCachedAuthenticatedImage,
  loadAuthenticatedImage,
  loadAuthenticatedImageWithHeader
} from "./chunk-2EHUPV2S.js";
import {
  AsyncHandler
} from "./chunk-NCRUSG7A.js";
import {
  Mt
} from "./chunk-WSQPQHCZ.js";
import {
  Component,
  Directive,
  ElementRef,
  Input,
  computed,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-UL33YUHR.js";

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

// libs/components/src/lib/user-avatar.component.ts
function UserAvatarComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.initials, " ");
  }
}
function UserAvatarComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("alt", ctx_r0.initials)("source", ctx_r0.user().photo);
  }
}
function UserAvatarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, UserAvatarComponent_Conditional_0_Conditional_1_Template, 2, 1, "div", 1)(2, UserAvatarComponent_Conditional_0_Conditional_2_Template, 1, 2, "img", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("user-id", ctx_r0.user().id);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.user().photo ? 1 : 2);
  }
}
var UserAvatarComponent = class _UserAvatarComponent {
  constructor() {
    this.user = input(
      void 0,
      ...ngDevMode ? [{ debugName: "user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_valid = computed(
      () => {
        const user = this.user();
        if (!user)
          return false;
        const name = (user.name || "").trim();
        const email = (user.email || "").trim();
        if (name.startsWith("<empty>") || email.startsWith("<empty>")) {
          return false;
        }
        return !!(name || email || user.first_name || user.last_name);
      },
      ...ngDevMode ? [{ debugName: "is_valid" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get initials() {
    const user = this.user();
    if (!user)
      return "NA";
    if (user.first_name && user.last_name) {
      return `${user.first_name[0]}${user.last_name[0]}`;
    }
    let name = (user.name || "").replace(/<[^>]*>/g, " ").trim();
    if (!name)
      name = (user.email || user.name || "").split("@")[0];
    const parts = name.replace(/[()[\]\-+=\\/@<>]+/gi, " ").split(/\s+/).filter(Boolean);
    if (parts.length === 0)
      return "NA";
    return parts.length > 1 ? `${parts[0][0]}${parts[parts.length - 1][0]}` : parts[0].slice(0, 2);
  }
  static {
    this.\u0275fac = function UserAvatarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAvatarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAvatarComponent, selectors: [["a-user-avatar"]], inputs: { user: [1, "user"] }, decls: 1, vars: 1, consts: [[1, "border-base-100", "bg-base-200", "flex", "h-[2.5em]", "w-[2.5em]", "items-center", "justify-center", "overflow-hidden", "rounded-full", "border-2"], ["initials", "", 1, "text-base-content", "uppercase", "opacity-60"], ["auth", "", 1, "flex", "h-full", "w-full", "items-center", "justify-center", "object-cover", "object-center", 3, "alt", "source"]], template: function UserAvatarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, UserAvatarComponent_Conditional_0_Template, 3, 2, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.is_valid() ? 0 : -1);
      }
    }, dependencies: [AuthenticatedImageDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAvatarComponent, [{
    type: Component,
    args: [{ selector: "a-user-avatar", template: `
        @if (is_valid()) {
            <div
                class="border-base-100 bg-base-200 flex h-[2.5em] w-[2.5em] items-center justify-center overflow-hidden rounded-full border-2"
                [attr.user-id]="user().id"
            >
                @if (!user().photo) {
                    <div
                        initials
                        class="text-base-content uppercase opacity-60"
                    >
                        {{ initials }}
                    </div>
                } @else {
                    <img
                        auth
                        class="flex h-full w-full items-center justify-center object-cover object-center"
                        [alt]="initials"
                        [source]="user().photo"
                    />
                }
            </div>
        }
    `, imports: [AuthenticatedImageDirective] }]
  }], null, { user: [{ type: Input, args: [{ isSignal: true, alias: "user", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAvatarComponent, { className: "UserAvatarComponent", filePath: "libs/components/src/lib/user-avatar.component.ts", lineNumber: 34 });
})();

export {
  AuthenticatedImageDirective,
  UserAvatarComponent
};
//# debugId=fc552fbc-a100-5167-8626-5bbe65fda4ff
//# sourceMappingURL=chunk-A4ULKLG5.js.map
