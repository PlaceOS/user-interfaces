import {
  AuthenticatedImageDirective
} from "./chunk-QDEM5VOS.js";
import {
  playlistMediaIcon,
  playlistMediaThumbnailUrl
} from "./chunk-IROTSDQV.js";
import {
  Component,
  ElementRef,
  IconComponent,
  Input,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JABNH3I5.js";

// apps/signage-manager/src/app/shared/media-thumbnail.component.ts
function MediaThumbnailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("object-cover", ctx_r0.cover())("object-contain", !ctx_r0.cover());
    \u0275\u0275property("source", ctx_r0.thumbnail_url())("alt", ctx_r0.item().name + " thumbnail");
  }
}
function MediaThumbnailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "icon", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.media_icon());
  }
}
var MediaThumbnailComponent = class _MediaThumbnailComponent {
  constructor() {
    this._element = inject(ElementRef);
    this.item = input.required(
      ...ngDevMode ? [{ debugName: "item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cover = input(
      false,
      ...ngDevMode ? [{ debugName: "cover" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.in_view = signal(
      false,
      ...ngDevMode ? [{ debugName: "in_view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.thumbnail_url = computed(
      () => playlistMediaThumbnailUrl(this.item()),
      ...ngDevMode ? [{ debugName: "thumbnail_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.media_icon = computed(
      () => playlistMediaIcon(this.item()),
      ...ngDevMode ? [{ debugName: "media_icon" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngAfterViewInit() {
    if (typeof IntersectionObserver === "undefined") {
      this.in_view.set(true);
      return;
    }
    this._observer = new IntersectionObserver((entries) => {
      this.in_view.set(entries.some((entry) => entry.isIntersecting));
    });
    this._observer.observe(this._element.nativeElement);
  }
  ngOnDestroy() {
    this._observer?.disconnect();
  }
  static {
    this.\u0275fac = function MediaThumbnailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MediaThumbnailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaThumbnailComponent, selectors: [["media-thumbnail"]], inputs: { item: [1, "item"], cover: [1, "cover"] }, decls: 2, vars: 1, consts: [["auth", "", 1, "h-full", "w-full", "text-xs", "flex", "items-center", "justify-center", 3, "source", "alt", "object-cover", "object-contain"], [1, "flex", "h-full", "w-full", "items-center", "justify-center"], ["auth", "", 1, "h-full", "w-full", "text-xs", "flex", "items-center", "justify-center", 3, "source", "alt"], [1, "text-4xl", "opacity-30"]], template: function MediaThumbnailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, MediaThumbnailComponent_Conditional_0_Template, 1, 6, "img", 0)(1, MediaThumbnailComponent_Conditional_1_Template, 3, 1, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.in_view() && ctx.thumbnail_url() ? 0 : 1);
      }
    }, dependencies: [AuthenticatedImageDirective, IconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=media-thumbnail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaThumbnailComponent, [{
    type: Component,
    args: [{ selector: "media-thumbnail", template: `
        @if (in_view() && thumbnail_url()) {
            <img
                auth
                [source]="thumbnail_url()"
                [alt]="item().name + ' thumbnail'"
                class="h-full w-full text-xs flex items-center justify-center"
                [class.object-cover]="cover()"
                [class.object-contain]="!cover()"
            />
        } @else {
            <div class="flex h-full w-full items-center justify-center">
                <icon class="text-4xl opacity-30">{{ media_icon() }}</icon>
            </div>
        }
    `, imports: [AuthenticatedImageDirective, IconComponent], styles: ["/* angular:styles/component:css;add3d5834f4f18c74379fdaa6a5f175ffb708afdb369283d1bbbc3bc1d735ebe;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/shared/media-thumbnail.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=media-thumbnail.component.css.map */\n"] }]
  }], null, { item: [{ type: Input, args: [{ isSignal: true, alias: "item", required: true }] }], cover: [{ type: Input, args: [{ isSignal: true, alias: "cover", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaThumbnailComponent, { className: "MediaThumbnailComponent", filePath: "apps/signage-manager/src/app/shared/media-thumbnail.component.ts", lineNumber: 46 });
})();

export {
  MediaThumbnailComponent
};
//# debugId=8aca46b2-8fe8-5ba4-9b57-9fe2dd244386
//# sourceMappingURL=chunk-FIT4JK4N.js.map
