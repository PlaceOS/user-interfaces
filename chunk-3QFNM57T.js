import {
  playlistMediaIcon,
  playlistMediaThumbnailUrl
} from "./chunk-I53625YO.js";
import {
  AuthenticatedImageDirective
} from "./chunk-QM35KC2P.js";
import {
  IconComponent
} from "./chunk-BQWZIAG6.js";
import {
  Component,
  ElementRef,
  Input,
  Output,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-Y6KAMZVN.js";

// apps/signage-manager/src/app/shared/media-thumbnail.component.ts
function MediaThumbnailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 2);
    \u0275\u0275listener("load", function MediaThumbnailComponent_Conditional_0_Template_img_load_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLoad($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("object-cover", ctx_r1.cover())("object-contain", !ctx_r1.cover());
    \u0275\u0275property("source", ctx_r1.thumbnail_url());
  }
}
function MediaThumbnailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "icon", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.media_icon());
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
    this.aspect_ratio = output();
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
  onLoad(event) {
    const { naturalWidth, naturalHeight } = event.target;
    if (naturalWidth > 0 && naturalHeight > 0) {
      this.aspect_ratio.emit(naturalWidth / naturalHeight);
    }
  }
  ngAfterViewInit() {
    if (typeof IntersectionObserver === "undefined") {
      this.in_view.set(true);
      return;
    }
    this._observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting))
        return;
      this.in_view.set(true);
      this._observer?.disconnect();
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaThumbnailComponent, selectors: [["media-thumbnail"]], inputs: { item: [1, "item"], cover: [1, "cover"] }, outputs: { aspect_ratio: "aspect_ratio" }, decls: 2, vars: 1, consts: [["auth", "", "alt", "", 1, "flex", "h-full", "w-full", "items-center", "justify-center", "text-xs", 3, "source", "object-cover", "object-contain"], [1, "flex", "h-full", "w-full", "items-center", "justify-center"], ["auth", "", "alt", "", 1, "flex", "h-full", "w-full", "items-center", "justify-center", "text-xs", 3, "load", "source"], [1, "text-4xl", "opacity-30"]], template: function MediaThumbnailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, MediaThumbnailComponent_Conditional_0_Template, 1, 5, "img", 0)(1, MediaThumbnailComponent_Conditional_1_Template, 3, 1, "div", 1);
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
                alt=""
                class="flex h-full w-full items-center justify-center text-xs"
                [class.object-cover]="cover()"
                [class.object-contain]="!cover()"
                (load)="onLoad($event)"
            />
        } @else {
            <div class="flex h-full w-full items-center justify-center">
                <icon class="text-4xl opacity-30">{{ media_icon() }}</icon>
            </div>
        }
    `, imports: [AuthenticatedImageDirective, IconComponent], styles: ["/* angular:styles/component:css;add3d5834f4f18c74379fdaa6a5f175ffb708afdb369283d1bbbc3bc1d735ebe;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/shared/media-thumbnail.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=media-thumbnail.component.css.map */\n"] }]
  }], null, { item: [{ type: Input, args: [{ isSignal: true, alias: "item", required: true }] }], cover: [{ type: Input, args: [{ isSignal: true, alias: "cover", required: false }] }], aspect_ratio: [{ type: Output, args: ["aspect_ratio"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaThumbnailComponent, { className: "MediaThumbnailComponent", filePath: "apps/signage-manager/src/app/shared/media-thumbnail.component.ts", lineNumber: 48 });
})();

export {
  MediaThumbnailComponent
};
//# debugId=99c8d81b-8dec-5def-9c8b-c3ed10435220
//# sourceMappingURL=chunk-3QFNM57T.js.map
