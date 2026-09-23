import {
  PluginEmbedComponent
} from "./chunk-UIWZMC5C.js";
import {
  MediaDurationPipe
} from "./chunk-VEVPEVNK.js";
import {
  SignageSharedWithComponent
} from "./chunk-MJRYWTEU.js";
import {
  AuthenticatedImageDirective
} from "./chunk-FP54GULP.js";
import {
  SignageService
} from "./chunk-VT2EE4SD.js";
import "./chunk-XASXFKEM.js";
import "./chunk-OZEEJTZM.js";
import "./chunk-WPXQUSDA.js";
import "./chunk-LOC765HW.js";
import "./chunk-VOXI3UVZ.js";
import {
  playlistMediaThumbnailUrl,
  playlistMediaUrl
} from "./chunk-IROTSDQV.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-VATSXXH3.js";
import {
  TranslatePipe
} from "./chunk-2MCN5NQW.js";
import {
  MatTooltip
} from "./chunk-K5RUP4DL.js";
import "./chunk-SVCYCBW2.js";
import {
  RouterLink
} from "./chunk-6VI5IEKG.js";
import {
  Component,
  Cs,
  DatePipe,
  Dh,
  DomSanitizer,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatRipple,
  MatRippleModule,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JABNH3I5.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/media-preview-modal.component.ts
var _c0 = (a0) => ["/playlists", a0];
var _c1 = (a0) => ({ tab: "items", item: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function MediaPreviewModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r0.thumbnail_url)("alt", ctx_r0.item.name + " thumbnail");
  }
}
function MediaPreviewModalComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "icon", 24);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 25);
    \u0275\u0275text(4, " Failed to load media preview. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 26);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 1, "SIGNAGE_MANAGER.PREVIEW_UNAVAILABLE"), " ");
  }
}
function MediaPreviewModalComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "mat-spinner", 27);
    \u0275\u0275elementStart(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "COMMON.LOADING"));
  }
}
function MediaPreviewModalComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 29);
    \u0275\u0275listener("load", function MediaPreviewModalComponent_Conditional_13_Template_img_load_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.handleMediaLoaded());
    })("error", function MediaPreviewModalComponent_Conditional_13_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.handleMediaLoadError());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-0", ctx_r0.media_loading() || ctx_r0.media_error());
    \u0275\u0275property("source", ctx_r0.media_url)("alt", ctx_r0.item.name);
  }
}
function MediaPreviewModalComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "video", 30);
    \u0275\u0275listener("loadeddata", function MediaPreviewModalComponent_Conditional_14_Template_video_loadeddata_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.handleMediaLoaded());
    })("error", function MediaPreviewModalComponent_Conditional_14_Template_video_error_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.handleMediaLoadError());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-0", ctx_r0.media_loading() || ctx_r0.media_error());
    \u0275\u0275property("source", ctx_r0.media_url);
    \u0275\u0275attribute("aria-label", ctx_r0.item.name);
  }
}
function MediaPreviewModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "iframe", 31);
    \u0275\u0275listener("load", function MediaPreviewModalComponent_Conditional_15_Template_iframe_load_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.handleMediaLoaded());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-0", ctx_r0.media_loading());
    \u0275\u0275property("src", ctx_r0.safe_url(), \u0275\u0275sanitizeResourceUrl)("title", ctx_r0.item.name);
  }
}
function MediaPreviewModalComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "plugin-embed", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("plugin", ctx_r0.plugin)("config", ctx_r0.plugin_preview_config())("auto_play", true);
  }
}
function MediaPreviewModalComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "icon", 32);
    \u0275\u0275text(2, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.PREVIEW_UNAVAILABLE"), " ");
  }
}
function MediaPreviewModalComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.item.description, " ");
  }
}
function MediaPreviewModalComponent_Conditional_32_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r5, " ");
  }
}
function MediaPreviewModalComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33);
    \u0275\u0275repeaterCreate(5, MediaPreviewModalComponent_Conditional_32_For_6_Template, 2, 1, "span", 34, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.TAGS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.item.tags);
  }
}
function MediaPreviewModalComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "mediaDuration");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.DURATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, ctx_r0.item.play_time / 1e3), " ");
  }
}
function MediaPreviewModalComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LOADING"), " ");
  }
}
function MediaPreviewModalComponent_Conditional_53_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 36)(1, "icon", 37);
    \u0275\u0275text(2, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const playlist_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c0, playlist_r6.id))("queryParams", \u0275\u0275pureFunction1(5, _c1, ctx_r0.item.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(playlist_r6.name);
  }
}
function MediaPreviewModalComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, MediaPreviewModalComponent_Conditional_53_For_2_Template, 5, 7, "a", 36, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.containing_playlists());
  }
}
function MediaPreviewModalComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.NOT_IN_PLAYLISTS"), " ");
  }
}
function MediaPreviewModalComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "SIGNAGE_MANAGER.PLAY_COUNT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.item.play_count || "0", " ");
  }
}
function MediaPreviewModalComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "SIGNAGE_MANAGER.VALID_FROM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 4, ctx_r0.item.valid_from * 1e3, "mediumDate"), " ");
  }
}
function MediaPreviewModalComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.EXPIRES_AT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 4, ctx_r0.item.valid_until * 1e3, "mediumDate"), " ");
  }
}
var MediaPreviewModalComponent = class _MediaPreviewModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._service = inject(SignageService);
    this._sanitizer = inject(DomSanitizer);
    this.item = this._data.media;
    this.group_id = this._data.group_id || "";
    this.plugin = this._data.plugin;
    this.media_url = playlistMediaUrl(this.item);
    this.thumbnail_url = playlistMediaThumbnailUrl(this.item);
    this.media_loading = signal(
      this._hasLoadableMedia(),
      ...ngDevMode ? [{ debugName: "media_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.media_error = signal(
      false,
      ...ngDevMode ? [{ debugName: "media_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.containing_playlists = signal(
      [],
      ...ngDevMode ? [{ debugName: "containing_playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading_playlists = signal(
      true,
      ...ngDevMode ? [{ debugName: "loading_playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.edit = () => this._service.editMedia(this.item);
    this.safe_url = computed(
      () => {
        if (this.item.media_type === "webpage") {
          return this._sanitizer.bypassSecurityTrustResourceUrl(this.media_url);
        }
        return null;
      },
      ...ngDevMode ? [{ debugName: "safe_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.plugin_config = computed(
      () => __spreadValues(__spreadValues({}, this.plugin?.defaults || {}), this.item.plugin_params || {}),
      ...ngDevMode ? [{ debugName: "plugin_config" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.plugin_preview_config = computed(
      () => ({
        instance_id: this.item.id || "signage-manager-preview",
        config: this.plugin_config(),
        timing: { scheduled_duration_ms: 15e3 }
      }),
      ...ngDevMode ? [{ debugName: "plugin_preview_config" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.type_label = computed(
      () => {
        switch (this.item.media_type) {
          case "video":
            return "COMMON.VIDEO";
          case "image":
            return "COMMON.IMAGE";
          case "webpage":
            return "COMMON.WEBPAGE";
          case "plugin":
            return "SIGNAGE_MANAGER.TYPE_PLUGIN";
          default:
            return this.item.media_type;
        }
      },
      ...ngDevMode ? [{ debugName: "type_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.animation_label = computed(
      () => {
        switch (this.item.animation) {
          case Cs.Cut:
            return "SIGNAGE_MANAGER.ANIM_CUT";
          case Cs.CrossFade:
            return "SIGNAGE_MANAGER.ANIM_CROSS_FADE";
          case Cs.SlideTop:
            return "SIGNAGE_MANAGER.ANIM_SLIDE_TOP";
          case Cs.SlideLeft:
            return "SIGNAGE_MANAGER.ANIM_SLIDE_LEFT";
          case Cs.SlideRight:
            return "SIGNAGE_MANAGER.ANIM_SLIDE_RIGHT";
          case Cs.SlideBottom:
            return "SIGNAGE_MANAGER.ANIM_SLIDE_BOTTOM";
          default:
            return "COMMON.DEFAULT";
        }
      },
      ...ngDevMode ? [{ debugName: "animation_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    try {
      const media = await Dh(this.item.id, this.group_id ? { group_id: this.group_id } : {});
      this.containing_playlists.set(media.playlists);
    } catch {
      this.containing_playlists.set([]);
    } finally {
      this.loading_playlists.set(false);
    }
  }
  handleMediaLoaded() {
    this.media_loading.set(false);
    this.media_error.set(false);
  }
  handleMediaLoadError() {
    this.media_loading.set(false);
    this.media_error.set(true);
  }
  _hasLoadableMedia() {
    return !!this.media_url && ["image", "video", "webpage"].includes(this.item.media_type);
  }
  static {
    this.\u0275fac = function MediaPreviewModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MediaPreviewModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaPreviewModalComponent, selectors: [["media-preview-modal"]], decls: 59, vars: 57, consts: [[1, "bg-base-100", "flex", "h-full", "flex-col", "items-center", "overflow-auto"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "truncate", "text-xl", "font-medium"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", ""], [1, "bg-base-100", "z-0", "mx-2", "mb-2", "flex", "w-[calc(100%-1rem)]", "flex-1", "gap-2", "overflow-hidden", "rounded-sm", "max-md:flex-col"], [1, "bg-base-200", "border-base-300", "relative", "flex", "flex-1", "items-center", "justify-center", "overflow-hidden", "rounded-lg", "border"], ["auth", "", 1, "absolute", "inset-0", "h-full", "w-full", "object-contain", 3, "source", "alt"], ["aria-live", "assertive", 1, "bg-base-200/80", "absolute", "inset-0", "z-10", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-4", "text-center"], ["aria-live", "polite", 1, "bg-base-200/60", "absolute", "inset-0", "z-10", "flex", "items-center", "justify-center"], ["auth", "", 1, "h-full", "max-h-full", "w-full", "max-w-full", "object-contain", 3, "source", "alt", "opacity-0"], ["auth", "", "controls", "", 1, "h-full", "max-h-full", "w-full", "max-w-full", "object-contain", 3, "source", "opacity-0"], [1, "h-full", "w-full", "border-0", "bg-white", 3, "src", "title", "opacity-0"], [1, "h-full", "w-full", 3, "plugin", "config", "auto_play"], [1, "text-base-content/70", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "border-base-300", "bg-base-100", "w-72", "shrink-0", "overflow-y-auto", "rounded-lg", "border", "max-md:w-full"], [1, "relative", "space-y-5", "p-5"], ["icon", "", "default", "", "matTooltipPosition", "left", 1, "absolute", "top-2", "right-2", 3, "click", "matTooltip"], [1, "text-base-content/70", "mb-1", "text-xs", "font-medium", "tracking-wider", "uppercase"], [1, "rounded-lg", "px-2", "py-1", "font-mono", "text-xs", "capitalize"], [1, "text-sm"], [1, "text-sm", "capitalize"], [1, "text-base-content/70", "text-sm"], [1, "space-y-1"], ["type", "media", 3, "item_id", "group_id", "compact_label"], [1, "text-error", "text-6xl"], [1, "text-base", "font-medium"], [1, "text-base-content/70", "max-w-sm", "text-sm"], [3, "diameter"], [1, "sr-only"], ["auth", "", 1, "h-full", "max-h-full", "w-full", "max-w-full", "object-contain", 3, "load", "error", "source", "alt"], ["auth", "", "controls", "", 1, "h-full", "max-h-full", "w-full", "max-w-full", "object-contain", 3, "loadeddata", "error", "source"], [1, "h-full", "w-full", "border-0", "bg-white", 3, "load", "src", "title"], [1, "text-8xl"], [1, "flex", "flex-wrap", "gap-1"], [1, "bg-info-light", "text-info", "max-w-full", "truncate", "rounded-full", "px-2", "py-1", "text-xs", "font-medium"], [1, "font-mono", "text-sm"], ["matRipple", "", "mat-dialog-close", "", 1, "hover:bg-base-200", "flex", "items-center", "space-x-2", "rounded", "px-2", "py-1", "no-underline", 3, "routerLink", "queryParams"], [1, "text-base-content/60", "text-xl"]], template: function MediaPreviewModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementStart(6, "icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "main", 4)(9, "section", 5);
        \u0275\u0275conditionalCreate(10, MediaPreviewModalComponent_Conditional_10_Template, 1, 2, "img", 6);
        \u0275\u0275conditionalCreate(11, MediaPreviewModalComponent_Conditional_11_Template, 8, 3, "div", 7)(12, MediaPreviewModalComponent_Conditional_12_Template, 5, 4, "div", 8);
        \u0275\u0275conditionalCreate(13, MediaPreviewModalComponent_Conditional_13_Template, 1, 4, "img", 9)(14, MediaPreviewModalComponent_Conditional_14_Template, 1, 4, "video", 10)(15, MediaPreviewModalComponent_Conditional_15_Template, 1, 4, "iframe", 11)(16, MediaPreviewModalComponent_Conditional_16_Template, 1, 3, "plugin-embed", 12)(17, MediaPreviewModalComponent_Conditional_17_Template, 6, 3, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "aside", 14)(19, "div", 15)(20, "button", 16);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275listener("click", function MediaPreviewModalComponent_Template_button_click_20_listener() {
          return ctx.edit();
        });
        \u0275\u0275elementStart(22, "icon");
        \u0275\u0275text(23, "edit");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(24, MediaPreviewModalComponent_Conditional_24_Template, 6, 4, "div");
        \u0275\u0275elementStart(25, "div")(26, "div", 17);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 18);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(32, MediaPreviewModalComponent_Conditional_32_Template, 7, 3, "div");
        \u0275\u0275conditionalCreate(33, MediaPreviewModalComponent_Conditional_33_Template, 7, 6, "div");
        \u0275\u0275elementStart(34, "div")(35, "div", 17);
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 19);
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div")(42, "div", 17);
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 20);
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div")(49, "div", 17);
        \u0275\u0275text(50);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(52, MediaPreviewModalComponent_Conditional_52_Template, 3, 3, "div", 21)(53, MediaPreviewModalComponent_Conditional_53_Template, 3, 0, "div", 22)(54, MediaPreviewModalComponent_Conditional_54_Template, 3, 3, "div", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(55, MediaPreviewModalComponent_Conditional_55_Template, 6, 4, "div");
        \u0275\u0275conditionalCreate(56, MediaPreviewModalComponent_Conditional_56_Template, 7, 7, "div");
        \u0275\u0275conditionalCreate(57, MediaPreviewModalComponent_Conditional_57_Template, 7, 7, "div");
        \u0275\u0275element(58, "signage-shared-with", 23);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.item.name);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 39, "SIGNAGE_MANAGER.CLOSE_MEDIA_PREVIEW"));
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.thumbnail_url && (ctx.media_loading() || ctx.media_error()) ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.media_error() ? 11 : ctx.media_loading() ? 12 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.item.media_type === "image" ? 13 : ctx.item.media_type === "video" ? 14 : ctx.item.media_type === "webpage" ? 15 : ctx.item.media_type === "plugin" && ctx.plugin ? 16 : 17);
        \u0275\u0275advance(7);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(21, 41, "SIGNAGE_MANAGER.MEDIA_EDIT"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.item.description ? 24 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 43, "COMMON.TYPE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("bg-info", ctx.item.media_type === "video")("text-info-content", ctx.item.media_type === "video")("bg-warning", ctx.item.media_type === "image")("text-warning-content", ctx.item.media_type === "image")("bg-success", ctx.item.media_type === "webpage")("text-success-content", ctx.item.media_type === "webpage")("bg-error", ctx.item.media_type === "plugin")("text-error-content", ctx.item.media_type === "plugin");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 45, ctx.type_label()), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.item.tags?.length ? 32 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.play_time ? 33 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 47, "SIGNAGE_MANAGER.ANIMATION"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 49, ctx.animation_label()), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 51, "SIGNAGE_MANAGER.ORIENTATION"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.item.orientation || \u0275\u0275pipeBind1(47, 53, "COMMON.LOCATION_UNSPECIFIED"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 55, "SIGNAGE_MANAGER.NAV_PLAYLISTS"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading_playlists() ? 52 : ctx.containing_playlists().length > 0 ? 53 : 54);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.item.play_count ? 55 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.valid_from ? 56 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.valid_until ? 57 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("item_id", ctx.item.id)("group_id", ctx.group_id)("compact_label", true);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      RouterLink,
      IconComponent,
      AuthenticatedImageDirective,
      PluginEmbedComponent,
      MatTooltip,
      SignageSharedWithComponent,
      DatePipe,
      MediaDurationPipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=media-preview-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaPreviewModalComponent, [{
    type: Component,
    args: [{ selector: "media-preview-modal", template: `
        <div
            class="bg-base-100 flex h-full flex-col items-center overflow-auto"
        >
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="truncate text-xl font-medium">{{ item.name }}</h2>
                <button
                    icon
                    type="button"
                    matRipple
                    mat-dialog-close
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.CLOSE_MEDIA_PREVIEW' | translate
                    "
                >
                    <icon>close</icon>
                </button>
            </header>
            <main
                class="bg-base-100 z-0 mx-2 mb-2 flex w-[calc(100%-1rem)] flex-1 gap-2 overflow-hidden rounded-sm max-md:flex-col"
            >
                <section
                    class="bg-base-200 border-base-300 relative flex flex-1 items-center justify-center overflow-hidden rounded-lg border"
                >
                    @if (thumbnail_url && (media_loading() || media_error())) {
                        <img
                            auth
                            [source]="thumbnail_url"
                            [alt]="item.name + ' thumbnail'"
                            class="absolute inset-0 h-full w-full object-contain"
                        />
                    }
                    @if (media_error()) {
                        <div
                            class="bg-base-200/80 absolute inset-0 z-10 flex flex-col items-center justify-center space-y-2 p-4 text-center"
                            aria-live="assertive"
                        >
                            <icon class="text-error text-6xl">error</icon>
                            <p class="text-base font-medium">
                                Failed to load media preview.
                            </p>
                            <p class="text-base-content/70 max-w-sm text-sm">
                                {{
                                    'SIGNAGE_MANAGER.PREVIEW_UNAVAILABLE'
                                        | translate
                                }}
                            </p>
                        </div>
                    } @else if (media_loading()) {
                        <div
                            class="bg-base-200/60 absolute inset-0 z-10 flex items-center justify-center"
                            aria-live="polite"
                        >
                            <mat-spinner [diameter]="48"></mat-spinner>
                            <span class="sr-only">{{
                                'COMMON.LOADING' | translate
                            }}</span>
                        </div>
                    }
                    @if (item.media_type === 'image') {
                        <img
                            auth
                            [source]="media_url"
                            [alt]="item.name"
                            class="h-full max-h-full w-full max-w-full object-contain"
                            [class.opacity-0]="media_loading() || media_error()"
                            (load)="handleMediaLoaded()"
                            (error)="handleMediaLoadError()"
                        />
                    } @else if (item.media_type === 'video') {
                        <video
                            auth
                            [source]="media_url"
                            controls
                            [attr.aria-label]="item.name"
                            class="h-full max-h-full w-full max-w-full object-contain"
                            [class.opacity-0]="media_loading() || media_error()"
                            (loadeddata)="handleMediaLoaded()"
                            (error)="handleMediaLoadError()"
                        ></video>
                    } @else if (item.media_type === 'webpage') {
                        <iframe
                            [src]="safe_url()"
                            [title]="item.name"
                            class="h-full w-full border-0 bg-white"
                            [class.opacity-0]="media_loading()"
                            (load)="handleMediaLoaded()"
                        ></iframe>
                    } @else if (item.media_type === 'plugin' && plugin) {
                        <plugin-embed
                            class="h-full w-full"
                            [plugin]="plugin"
                            [config]="plugin_preview_config()"
                            [auto_play]="true"
                        ></plugin-embed>
                    } @else {
                        <div
                            class="text-base-content/70 flex flex-col items-center justify-center space-y-2"
                        >
                            <icon class="text-8xl">hide_image</icon>
                            <p>
                                {{
                                    'SIGNAGE_MANAGER.PREVIEW_UNAVAILABLE'
                                        | translate
                                }}
                            </p>
                        </div>
                    }
                </section>
                <aside
                    class="border-base-300 bg-base-100 w-72 shrink-0 overflow-y-auto rounded-lg border max-md:w-full"
                >
                    <div class="relative space-y-5 p-5">
                        <button
                            icon
                            default
                            class="absolute top-2 right-2"
                            [matTooltip]="
                                'SIGNAGE_MANAGER.MEDIA_EDIT' | translate
                            "
                            matTooltipPosition="left"
                            (click)="edit()"
                        >
                            <icon>edit</icon>
                        </button>
                        @if (item.description) {
                            <div>
                                <div
                                    class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                >
                                    {{ 'COMMON.DESCRIPTION' | translate }}
                                </div>
                                <div class="text-sm">
                                    {{ item.description }}
                                </div>
                            </div>
                        }
                        <div>
                            <div
                                class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                            >
                                {{ 'COMMON.TYPE' | translate }}
                            </div>
                            <span
                                class="rounded-lg px-2 py-1 font-mono text-xs capitalize"
                                [class.bg-info]="item.media_type === 'video'"
                                [class.text-info-content]="
                                    item.media_type === 'video'
                                "
                                [class.bg-warning]="item.media_type === 'image'"
                                [class.text-warning-content]="
                                    item.media_type === 'image'
                                "
                                [class.bg-success]="
                                    item.media_type === 'webpage'
                                "
                                [class.text-success-content]="
                                    item.media_type === 'webpage'
                                "
                                [class.bg-error]="item.media_type === 'plugin'"
                                [class.text-error-content]="
                                    item.media_type === 'plugin'
                                "
                            >
                                {{ type_label() | translate }}
                            </span>
                        </div>
                        @if (item.tags?.length) {
                            <div>
                                <div
                                    class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                >
                                    {{ 'COMMON.TAGS' | translate }}
                                </div>
                                <div class="flex flex-wrap gap-1">
                                    @for (tag of item.tags; track tag) {
                                        <span
                                            class="bg-info-light text-info max-w-full truncate rounded-full px-2 py-1 text-xs font-medium"
                                        >
                                            {{ tag }}
                                        </span>
                                    }
                                </div>
                            </div>
                        }
                        @if (item.play_time) {
                            <div>
                                <div
                                    class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                >
                                    {{ 'FORM.DURATION' | translate }}
                                </div>
                                <div class="font-mono text-sm">
                                    {{ item.play_time / 1000 | mediaDuration }}
                                </div>
                            </div>
                        }
                        <div>
                            <div
                                class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                            >
                                {{ 'SIGNAGE_MANAGER.ANIMATION' | translate }}
                            </div>
                            <div class="text-sm">
                                {{ animation_label() | translate }}
                            </div>
                        </div>
                        <div>
                            <div
                                class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                            >
                                {{ 'SIGNAGE_MANAGER.ORIENTATION' | translate }}
                            </div>
                            <div class="text-sm capitalize">
                                {{
                                    item.orientation ||
                                        ('COMMON.LOCATION_UNSPECIFIED'
                                            | translate)
                                }}
                            </div>
                        </div>
                        <div>
                            <div
                                class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                            >
                                {{
                                    'SIGNAGE_MANAGER.NAV_PLAYLISTS' | translate
                                }}
                            </div>
                            @if (loading_playlists()) {
                                <div class="text-base-content/70 text-sm">
                                    {{ 'COMMON.LOADING' | translate }}
                                </div>
                            } @else if (containing_playlists().length > 0) {
                                <div class="space-y-1">
                                    @for (
                                        playlist of containing_playlists();
                                        track playlist.id
                                    ) {
                                        <a
                                            matRipple
                                            mat-dialog-close
                                            class="hover:bg-base-200 flex items-center space-x-2 rounded px-2 py-1 no-underline"
                                            [routerLink]="[
                                                '/playlists',
                                                playlist.id,
                                            ]"
                                            [queryParams]="{
                                                tab: 'items',
                                                item: item.id,
                                            }"
                                        >
                                            <icon
                                                class="text-base-content/60 text-xl"
                                                >playlist_play</icon
                                            >
                                            <span class="text-sm">{{
                                                playlist.name
                                            }}</span>
                                        </a>
                                    }
                                </div>
                            } @else {
                                <div class="text-base-content/70 text-sm">
                                    {{
                                        'SIGNAGE_MANAGER.NOT_IN_PLAYLISTS'
                                            | translate
                                    }}
                                </div>
                            }
                        </div>
                        @if (item.play_count) {
                            <div>
                                <div
                                    class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.PLAY_COUNT' | translate
                                    }}
                                </div>
                                <div class="text-sm capitalize">
                                    {{ item.play_count || '0' }}
                                </div>
                            </div>
                        }
                        @if (item.valid_from) {
                            <div>
                                <div
                                    class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.VALID_FROM' | translate
                                    }}
                                </div>
                                <div class="text-sm capitalize">
                                    {{
                                        item.valid_from * 1000
                                            | date: 'mediumDate'
                                    }}
                                </div>
                            </div>
                        }
                        @if (item.valid_until) {
                            <div>
                                <div
                                    class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                >
                                    {{ 'FORM.EXPIRES_AT' | translate }}
                                </div>
                                <div class="text-sm capitalize">
                                    {{
                                        item.valid_until * 1000
                                            | date: 'mediumDate'
                                    }}
                                </div>
                            </div>
                        }
                        <signage-shared-with
                            type="media"
                            [item_id]="item.id"
                            [group_id]="group_id"
                            [compact_label]="true"
                        ></signage-shared-with>
                    </div>
                </aside>
            </main>
        </div>
    `, imports: [
      MatRippleModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      RouterLink,
      IconComponent,
      AuthenticatedImageDirective,
      DatePipe,
      MediaDurationPipe,
      PluginEmbedComponent,
      TranslatePipe,
      MatTooltip,
      SignageSharedWithComponent
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/shared/media-preview-modal.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=media-preview-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaPreviewModalComponent, { className: "MediaPreviewModalComponent", filePath: "apps/signage-manager/src/app/shared/media-preview-modal.component.ts", lineNumber: 393 });
})();
export {
  MediaPreviewModalComponent
};
//# debugId=1bbe3560-1bb7-5304-97ad-2ebc4c5d1eb0
//# sourceMappingURL=media-preview-modal.component-COMAJMXM.js.map
