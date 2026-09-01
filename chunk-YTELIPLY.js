import {
  AuthenticatedImageDirective,
  Component,
  ElementRef,
  IconComponent,
  Input,
  SignageService,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtext
} from "./chunk-OKSJ2UNO.js";

// apps/signage-manager/src/app/shared/playlist-thumbnail.component.ts
function PlaylistThumbnailComponent_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const media_r1 = ctx.$implicit;
    const \u0275$index_2_r2 = ctx.$index;
    const \u0275$count_2_r3 = ctx.$count;
    \u0275\u0275styleProp("top", 0.3 - (\u0275$count_2_r3 - 1) * 0.125 + (\u0275$count_2_r3 - 1 - \u0275$index_2_r2) * 0.25 + "rem")("left", 0.3 - (\u0275$count_2_r3 - 1) * 0.125 + (\u0275$count_2_r3 - 1 - \u0275$index_2_r2) * 0.25 + "rem")("z-index", \u0275$index_2_r2);
    \u0275\u0275property("source", media_r1);
  }
}
function PlaylistThumbnailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PlaylistThumbnailComponent_Conditional_0_For_1_Template, 1, 7, "img", 1, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r3.playlist_thumbnail_media()[ctx_r3.playlist().id]);
  }
}
function PlaylistThumbnailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "icon", 3);
    \u0275\u0275text(2, "playlist_play");
    \u0275\u0275elementEnd()();
  }
}
var PlaylistThumbnailComponent = class _PlaylistThumbnailComponent {
  constructor() {
    this._element = inject(ElementRef);
    this._service = inject(SignageService);
    this.playlist = input.required(
      ...ngDevMode ? [{ debugName: "playlist" }] : (
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
    this.playlist_thumbnail_media = this._service.playlist_thumbnail_media;
  }
  ngAfterViewInit() {
    if (typeof IntersectionObserver === "undefined") {
      this._showThumbnail();
      return;
    }
    this._observer = new IntersectionObserver((entries) => {
      const in_view = entries.some((entry) => entry.isIntersecting);
      this.in_view.set(in_view);
      if (in_view)
        this._service.queuePlaylistMeta(this.playlist());
    });
    this._observer.observe(this._element.nativeElement);
  }
  ngOnDestroy() {
    this._observer?.disconnect();
  }
  _showThumbnail() {
    this.in_view.set(true);
    this._service.queuePlaylistMeta(this.playlist());
  }
  static {
    this.\u0275fac = function PlaylistThumbnailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistThumbnailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistThumbnailComponent, selectors: [["playlist-thumbnail"]], inputs: { playlist: [1, "playlist"] }, decls: 2, vars: 1, consts: [[1, "text-base-content/35", "flex", "h-full", "w-full", "items-center", "justify-center"], ["auth", "", "alt", "", 1, "border-base-300", "bg-base-200", "absolute", "h-9", "w-9", "rounded-sm", "border", "object-cover", "shadow", 3, "source", "top", "left", "z-index"], ["auth", "", "alt", "", 1, "border-base-300", "bg-base-200", "absolute", "h-9", "w-9", "rounded-sm", "border", "object-cover", "shadow", 3, "source"], [1, "text-2xl"]], template: function PlaylistThumbnailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, PlaylistThumbnailComponent_Conditional_0_Template, 2, 0)(1, PlaylistThumbnailComponent_Conditional_1_Template, 3, 0, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.in_view() && ctx.playlist_thumbnail_media()[ctx.playlist().id]?.length ? 0 : 1);
      }
    }, dependencies: [AuthenticatedImageDirective, IconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=playlist-thumbnail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistThumbnailComponent, [{
    type: Component,
    args: [{ selector: "playlist-thumbnail", template: `
        @if (in_view() && playlist_thumbnail_media()[playlist().id]?.length) {
            @for (
                media of playlist_thumbnail_media()[playlist().id];
                track media;
                let i = $index;
                let len = $count
            ) {
                <img
                    auth
                    [source]="media"
                    alt=""
                    class="border-base-300 bg-base-200 absolute h-9 w-9 rounded-sm border object-cover shadow"
                    [style.top]="
                        0.3 - (len - 1) * 0.125 + (len - 1 - i) * 0.25 + 'rem'
                    "
                    [style.left]="
                        0.3 - (len - 1) * 0.125 + (len - 1 - i) * 0.25 + 'rem'
                    "
                    [style.z-index]="i"
                />
            }
        } @else {
            <div
                class="text-base-content/35 flex h-full w-full items-center justify-center"
            >
                <icon class="text-2xl">playlist_play</icon>
            </div>
        }
    `, imports: [AuthenticatedImageDirective, IconComponent], styles: ["/* angular:styles/component:css;add3d5834f4f18c74379fdaa6a5f175ffb708afdb369283d1bbbc3bc1d735ebe;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/shared/playlist-thumbnail.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=playlist-thumbnail.component.css.map */\n"] }]
  }], null, { playlist: [{ type: Input, args: [{ isSignal: true, alias: "playlist", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistThumbnailComponent, { className: "PlaylistThumbnailComponent", filePath: "apps/signage-manager/src/app/shared/playlist-thumbnail.component.ts", lineNumber: 56 });
})();

export {
  PlaylistThumbnailComponent
};
//# sourceMappingURL=chunk-YTELIPLY.js.map
