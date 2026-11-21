import {
  SchemaFormComponent
} from "./chunk-BFBUQVE4.js";
import {
  objectHasKeys,
  pluginSchema,
  schemaDefaults
} from "./chunk-DBWLNOKZ.js";
import {
  ItemListFieldComponent
} from "./chunk-KUJDULUA.js";
import "./chunk-FMGNMJJZ.js";
import {
  PluginEmbedComponent
} from "./chunk-QOENOL4G.js";
import {
  MatSlider,
  MatSliderModule,
  MatSliderThumb
} from "./chunk-O3DQBXXP.js";
import {
  ANIMATION_OPTIONS,
  MediaDurationPipe
} from "./chunk-KX6VUVLO.js";
import {
  saveHotkey
} from "./chunk-ZJCW5CLA.js";
import {
  SignageSharedWithComponent
} from "./chunk-MJSN7HMD.js";
import {
  DateFieldComponent
} from "./chunk-Z7ILSTIC.js";
import "./chunk-WXFINFDJ.js";
import {
  FullscreenModalShellComponent
} from "./chunk-JFANIWDQ.js";
import "./chunk-5ZKEIO2U.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-O32TEXUB.js";
import "./chunk-N562ESTT.js";
import {
  getVideoContainer,
  isSupportedImageFile,
  validateSignageMediaDimensions
} from "./chunk-RARAVHPS.js";
import {
  playlistMediaThumbnailUrl
} from "./chunk-RGRQGXP2.js";
import {
  isWebPageUrl,
  normaliseWebPageUrl,
  webPageFrameUrl
} from "./chunk-6HQGHYDN.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-7NP5DBVY.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-7WP6JLBK.js";
import "./chunk-DGKQOSZV.js";
import "./chunk-QBA626HA.js";
import "./chunk-PCEZJ27E.js";
import {
  AuthenticatedImageDirective
} from "./chunk-3VHVTYHG.js";
import "./chunk-AAM3XREZ.js";
import "./chunk-3DHIDDSY.js";
import "./chunk-DNBAR6RW.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-26OIUIHH.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-OPFTRVSI.js";
import {
  FormField,
  form,
  required,
  submit,
  validate
} from "./chunk-XUI5Q4W7.js";
import "./chunk-5RIAMWU5.js";
import {
  TranslatePipe
} from "./chunk-3FBFZD7L.js";
import "./chunk-M7TCRKWT.js";
import {
  MatOption
} from "./chunk-XUC5JTKQ.js";
import {
  mediaAnimation
} from "./chunk-RJYWFTOV.js";
import "./chunk-X25JVJEC.js";
import {
  IconComponent,
  SafePipe
} from "./chunk-HOZSCKVQ.js";
import {
  getUnixTime
} from "./chunk-Z4DC4HX3.js";
import {
  Fs,
  endOfDay,
  i18n,
  notifyError,
  notifySuccess,
  startOfDay
} from "./chunk-UWUUBN6E.js";
import "./chunk-ZIHEKIW7.js";
import "./chunk-KQUEHK5N.js";
import "./chunk-5XA7EDTX.js";
import "./chunk-35VUMMTM.js";
import {
  Component,
  ViewChild,
  computed,
  effect,
  forwardRef,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
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
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-W6NHZ5YT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GLT7DQUO.js";

// apps/signage-manager/src/app/shared/media-edit-modal.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function MediaEditModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 37);
    \u0275\u0275elementStart(2, "p", 38);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SIGNAGE_MANAGER.LOADING_PLUGIN_PREVIEW"), " ");
  }
}
function MediaEditModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "plugin-embed", 39);
    \u0275\u0275twoWayListener("schemaChange", function MediaEditModalComponent_Conditional_7_Template_plugin_embed_schemaChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.plugin_embed_schema, $event) || (ctx_r1.plugin_embed_schema = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("plugin", ctx_r1.plugin())("config", ctx_r1.plugin_preview_config())("auto_play", true);
    \u0275\u0275twoWayProperty("schema", ctx_r1.plugin_embed_schema);
  }
}
function MediaEditModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 6);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "safe");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.MEDIA_PREVIEW"))("src", \u0275\u0275pipeBind2(2, 4, ctx_r1.preview_url(), "resource"), \u0275\u0275sanitizeResourceUrl);
  }
}
function MediaEditModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "icon", 40);
    \u0275\u0275text(2, "movie");
    \u0275\u0275elementEnd()();
  }
}
function MediaEditModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r1.thumbnail() || ctx_r1.url)("alt", ctx_r1.model().name || \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.MEDIA_PREVIEW"));
  }
}
function MediaEditModalComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.dimensions_warning, " ");
  }
}
function MediaEditModalComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 41);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 13);
    \u0275\u0275element(4, "input", 42);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(6, "mat-error");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "COMMON.URL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.media_uri);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 6, "SIGNAGE_MANAGER.WEBPAGE_URL_ARIA"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, ctx_r1.form.media_uri().value() ? "SIGNAGE_MANAGER.URL_INVALID" : "SIGNAGE_MANAGER.URL_REQUIRED"));
  }
}
function MediaEditModalComponent_Conditional_29_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 46);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.custom_thumbnail(), \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.THUMBNAIL"));
  }
}
function MediaEditModalComponent_Conditional_29_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 47);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r1.thumbnail())("alt", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.THUMBNAIL"));
  }
}
function MediaEditModalComponent_Conditional_29_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.item.id ? "SIGNAGE_MANAGER.THUMBNAIL_NONE" : "SIGNAGE_MANAGER.THUMBNAIL_AUTO"), " ");
  }
}
function MediaEditModalComponent_Conditional_29_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function MediaEditModalComponent_Conditional_29_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.custom_thumbnail.set(""));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.CLEAR"), " ");
  }
}
function MediaEditModalComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 43);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44)(4, "div", 45);
    \u0275\u0275conditionalCreate(5, MediaEditModalComponent_Conditional_29_Conditional_5_Template, 2, 4, "img", 46)(6, MediaEditModalComponent_Conditional_29_Conditional_6_Template, 2, 4, "img", 47)(7, MediaEditModalComponent_Conditional_29_Conditional_7_Template, 3, 3, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 49);
    \u0275\u0275listener("click", function MediaEditModalComponent_Conditional_29_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const thumbnail_input_r4 = \u0275\u0275reference(13);
      return \u0275\u0275resetView(thumbnail_input_r4.click());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, MediaEditModalComponent_Conditional_29_Conditional_11_Template, 3, 3, "button", 50);
    \u0275\u0275elementStart(12, "input", 51, 0);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("change", function MediaEditModalComponent_Conditional_29_Template_input_change_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setThumbnail($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 6, "SIGNAGE_MANAGER.THUMBNAIL"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.custom_thumbnail() ? 5 : ctx_r1.item.thumbnail_id ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.thumbnail_loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 8, ctx_r1.thumbnail_loading() ? "SIGNAGE_MANAGER.THUMBNAIL_LOADING" : "SIGNAGE_MANAGER.THUMBNAIL_CHOOSE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.custom_thumbnail() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 10, "SIGNAGE_MANAGER.THUMBNAIL_CHOOSE"));
  }
}
function MediaEditModalComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "label", 54);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "mediaDuration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-slider", 55);
    \u0275\u0275element(8, "input", 56);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "FORM.TIME_START"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, ctx_r1.model().start_time / 1e3, true), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("max", (ctx_r1.item.video_length || 3e5) - 1e3);
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.start_time);
    \u0275\u0275control();
  }
}
function MediaEditModalComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "mediaDuration");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r1.model().play_time / 1e3, true), " ");
  }
}
function MediaEditModalComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "mediaDuration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.DEFAULT"), " (", \u0275\u0275pipeBind1(3, 4, ctx_r1.item.video_length / 1e3), ") ");
  }
}
function MediaEditModalComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.DEFAULT"), " ");
  }
}
function MediaEditModalComponent_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    \u0275\u0275property("value", option_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, option_r6.label));
  }
}
function MediaEditModalComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "mat-spinner", 57);
    \u0275\u0275elementStart(2, "p", 58);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SIGNAGE_MANAGER.LOADING_PLUGIN_DETAILS"), " ");
  }
}
function MediaEditModalComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 59);
    \u0275\u0275element(4, "schema-form", 60);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "SIGNAGE_MANAGER.PLUGIN_PARAMETERS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("schema", ctx_r1.active_plugin_schema())("formField", ctx_r1.form.plugin_params);
    \u0275\u0275control();
  }
}
function mediaSaveErrorMessage(error) {
  if (error === void 0 || error === null) {
    return i18n("SIGNAGE_MANAGER.SVC_MEDIA_UPLOAD_CANCELLED");
  }
  if (error instanceof Error && error.message)
    return error.message;
  if (typeof error === "string")
    return error;
  if (typeof error === "number" || typeof error === "boolean") {
    return `${error}`;
  }
  if (typeof error === "object") {
    const details = error;
    const value = details.error || details.message || details.statusText || details.name;
    if (value)
      return mediaSaveErrorMessage(value);
  }
  return i18n("SIGNAGE_MANAGER.SVC_MEDIA_UPLOAD_FAILED");
}
var MediaEditModalComponent = class _MediaEditModalComponent {
  get media_type() {
    if (!this.file)
      return this.item.media_type;
    return (getVideoContainer(this.file) ? "video" : isSupportedImageFile(this.file) ? "image" : "") || this.item.media_type;
  }
  /**
   * Webpages and plugins have no file to capture a frame from. A new item
   * without a picked image gets a server screenshot of its URL on save, so
   * the user only has to pick one to override it.
   */
  get can_set_thumbnail() {
    return !!this._data.generateThumbnail && (this.media_type === "webpage" || this.media_type === "plugin");
  }
  get url() {
    if (this.media_type === "webpage") {
      return this.model().media_uri || this.item.media_uri;
    }
    if (this.item.id)
      return this.item.media_url;
    if (this.item.media_uri)
      return this.item.media_uri;
    if (this._file_url)
      return this._file_url;
    this._file_url = URL.createObjectURL(this.file);
    return this._file_url;
  }
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._schema_form = viewChild(
      SchemaFormComponent,
      ...ngDevMode ? [{ debugName: "_schema_form" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.animation_options = ANIMATION_OPTIONS;
    this.dimensions_warning = this._data.file && this._data.file_metadata ? validateSignageMediaDimensions(this._data.file_metadata).error || "" : "";
    this.item = this._data.media;
    this.tag_options = this._data.tag_options || [];
    this.group_id = this._data.group_id || "";
    this.file = this._data.file;
    this.plugin = signal(
      this._data.plugin,
      ...ngDevMode ? [{ debugName: "plugin" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.plugin_loading = signal(
      this.media_type === "plugin" && !!this._data.loadPlugin && !this._data.plugin,
      ...ngDevMode ? [{ debugName: "plugin_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.thumbnail = signal(
      playlistMediaThumbnailUrl(this._data.media),
      ...ngDevMode ? [{ debugName: "thumbnail" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.plugin_embed_schema = signal(
      null,
      ...ngDevMode ? [{ debugName: "plugin_embed_schema" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_plugin_schema = computed(
      () => this._resolvePluginSchema(),
      ...ngDevMode ? [{ debugName: "active_plugin_schema" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.preview_url = signal(
      "",
      ...ngDevMode ? [{ debugName: "preview_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.custom_thumbnail = signal(
      "",
      ...ngDevMode ? [{ debugName: "custom_thumbnail" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.thumbnail_loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "thumbnail_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._plugin_embed = viewChild(
      PluginEmbedComponent,
      ...ngDevMode ? [{ debugName: "_plugin_embed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model = signal(
      {
        name: this._data.file?.name || this._data.media.name || "",
        media_uri: this._data.media.media_uri || "",
        description: this._data.media.description || "",
        animation: mediaAnimation(this._data.media.animation),
        start_time: this._data.media.start_time || 0,
        play_time: this._data.media.play_time || 0,
        tags: this._data.media.tags || [],
        plugin_params: this._data.media.plugin_params || {},
        valid_from: this._data.media.valid_from ? this._data.media.valid_from * 1e3 : null,
        valid_until: this._data.media.valid_until ? this._data.media.valid_until * 1e3 : null
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (path) => {
      required(path.name);
      required(path.media_uri, {
        when: () => this.media_type === "webpage"
      });
      validate(path.media_uri, ({ value }) => this.media_type === "webpage" && value() && !isWebPageUrl(value()) ? {
        kind: "web_url",
        message: i18n("SIGNAGE_MANAGER.URL_INVALID")
      } : void 0);
    });
    this.preview = () => this._data.preview(
      // No id: this previews the unsaved form, not the stored item
      new Fs({
        media_uri: this.url,
        media_type: this.media_type,
        name: this.model().name,
        plugin_id: this.item.plugin_id || this.plugin()?.id,
        plugin_params: this.plugin_config()
      })
    );
    this.plugin_config = computed(
      () => __spreadValues(__spreadValues(__spreadValues({}, this.plugin()?.defaults || {}), schemaDefaults(this.active_plugin_schema())), this.model().plugin_params || {}),
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
    saveHotkey(this._dialog_ref, () => this.saveMedia());
    if (this.media_type === "webpage") {
      this.preview_url.set(webPageFrameUrl(this.item.media_uri || this.item.media_url));
      effect((onCleanup) => {
        const url = this.model().media_uri;
        clearTimeout(this._preview_url_timeout);
        this._preview_url_timeout = setTimeout(() => this.preview_url.set(webPageFrameUrl(url)), 1500);
        onCleanup(() => clearTimeout(this._preview_url_timeout));
      });
    }
    if (this.plugin_loading()) {
      this._loadPluginDetails();
    }
    this._data.file_thumbnail?.then((image) => {
      if (image)
        this.thumbnail.set(image);
    });
    effect(() => {
      const defaults = __spreadValues(__spreadValues({}, this.plugin()?.defaults || {}), schemaDefaults(this.active_plugin_schema()));
      if (!objectHasKeys(defaults))
        return;
      this.model.update((model) => __spreadProps(__spreadValues({}, model), {
        plugin_params: __spreadValues(__spreadValues({}, defaults), model.plugin_params || {})
      }));
    });
  }
  _resolvePluginSchema() {
    return pluginSchema(this.plugin_embed_schema()) || pluginSchema(this.plugin()?.params);
  }
  async _loadPluginDetails() {
    const plugin = await this._data.loadPlugin?.().catch(() => void 0);
    if (plugin)
      this.plugin.set(plugin);
    this.plugin_loading.set(false);
  }
  ngOnDestroy() {
    if (this._file_url)
      URL.revokeObjectURL(this._file_url);
    clearTimeout(this._preview_url_timeout);
  }
  async setThumbnail(event) {
    const input = event.target;
    const file = input.files?.[0];
    input.value = "";
    if (!file)
      return;
    this.thumbnail_loading.set(true);
    const image = await this._data.generateThumbnail(file).catch(() => "").finally(() => this.thumbnail_loading.set(false));
    if (image)
      this.custom_thumbnail.set(image);
  }
  /**
   * Ask the embedded plugin to render its own thumbnail. Captured from the
   * live preview so it reflects the config the user just set. Only used
   * when the server screenshot fails. Plugins that predate the capability
   * return nothing.
   */
  async _capturePluginThumbnail() {
    if (this.media_type !== "plugin")
      return "";
    const embed = this._plugin_embed();
    if (!embed?.canProvideThumbnail())
      return "";
    return embed.requestThumbnail(1280, 720).catch(() => "");
  }
  async saveMedia() {
    await submit(this.form, async () => {
      const schema_form = this._schema_form();
      if (schema_form && !schema_form.isValid())
        return;
      this.loading.set(true);
      this._dialog_ref.disableClose = true;
      const form_value = this.model();
      const new_media = __spreadValues(__spreadValues({}, this.item), form_value);
      if (this.media_type === "webpage") {
        new_media.media_uri = normaliseWebPageUrl(form_value.media_uri) ?? form_value.media_uri;
      }
      if (this.plugin()) {
        new_media.plugin_id = this.item.plugin_id || this.plugin().id;
      }
      if (this.media_type === "plugin") {
        const plugin_config = this.plugin_config();
        if (objectHasKeys(plugin_config)) {
          new_media.plugin_params = plugin_config;
        } else {
          delete new_media.plugin_params;
        }
      } else if (form_value.plugin_params) {
        new_media.plugin_params = form_value.plugin_params;
      } else {
        delete new_media.plugin_params;
      }
      if (form_value.valid_from) {
        new_media.valid_from = getUnixTime(startOfDay(form_value.valid_from));
      } else {
        new_media.valid_from = null;
      }
      if (form_value.valid_until) {
        new_media.valid_until = getUnixTime(endOfDay(form_value.valid_until));
      } else {
        new_media.valid_until = null;
      }
      try {
        if (this.item.id) {
          if (this.custom_thumbnail()) {
            new_media.thumbnail_image = this.custom_thumbnail();
          }
          await this._data.onEdit(this.item.id, new_media);
        } else {
          await this._data.onAdd(this.file, new Fs(new_media), this._data.file_metadata, this.custom_thumbnail(), () => this._capturePluginThumbnail());
        }
      } catch (error) {
        notifyError(i18n("SIGNAGE_MANAGER.MEDIA_SAVE_ERROR", {
          error: mediaSaveErrorMessage(error)
        }));
        return;
      } finally {
        this._dialog_ref.disableClose = false;
        this.loading.set(false);
      }
      this._dialog_ref.close();
      notifySuccess(i18n("SIGNAGE_MANAGER.MEDIA_SAVE_SUCCESS"));
    });
  }
  static {
    this.\u0275fac = function MediaEditModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MediaEditModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaEditModalComponent, selectors: [["media-edit-modal"]], viewQuery: function MediaEditModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._schema_form, SchemaFormComponent, 5)(ctx._plugin_embed, PluginEmbedComponent, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, decls: 75, vars: 75, consts: [["thumbnail_input", ""], ["confirm_hotkey", "S", 3, "confirm", "heading", "loading"], [1, "flex", "flex-col"], [1, "bg-base-300", "border-base-300", "relative", "mx-auto", "mb-4", "h-48", "w-full", "cursor-pointer", "overflow-hidden", "rounded-xl", "border", "shadow", 3, "click"], [1, "text-base-content/70", "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "gap-3"], [1, "h-full", "w-full", 3, "plugin", "config", "auto_play", "schema"], ["sandbox", "allow-scripts allow-same-origin allow-forms", 1, "h-screen", "w-full", "object-contain", "object-center", 3, "title", "src"], [1, "flex", "h-full", "w-full", "items-center", "justify-center"], ["auth", "", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source", "alt"], [1, "bg-info", "text-info-content", "absolute", "top-2", "left-2", "rounded-sm", "px-2", "py-1", "text-xs", "capitalize", "shadow"], ["icon", "", "type", "button", "matRipple", "", 1, "bg-base-100", "text-base-content", "absolute", "top-2", "right-2", "shadow", 3, "click"], ["role", "alert", 1, "bg-warning", "text-warning-content", "mb-4", "rounded-lg", "px-4", "py-2", "text-sm"], ["for", "media-name"], ["appearance", "outline"], ["matInput", "", "id", "media-name", 3, "formField", "placeholder"], [1, "flex", "items-center", "gap-4"], ["for", "media-play-time", 1, "m-0", "w-auto", "min-w-0"], [1, "font-mono", "text-xs"], [1, "text-base-content/70"], ["step", "100", 3, "min", "max"], ["matSliderThumb", "", "id", "media-play-time", 3, "formField"], ["id", "media-animation-label", "for", "media-animation"], ["id", "media-animation", "aria-labelledby", "media-animation-label", 3, "formField", "placeholder"], [3, "value"], ["for", "media-description"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "id", "media-description", 1, "min-h-32", 3, "placeholder", "formField"], ["for", "media-tags"], ["id", "media-tags", "name", "tags", 3, "formField", "options", "placeholder"], [1, "bg-base-200/60", "mb-2", "flex", "items-center", "gap-3", "rounded-lg", "p-4"], [1, "flex", "space-x-4"], [1, "flex-1"], ["for", "media-valid-from"], ["id", "media-valid-from", "name", "valid-from", 3, "formField", "clear"], ["for", "media-valid-until"], ["id", "media-valid-until", "name", "valid-until", 3, "from", "formField", "clear"], ["type", "media", 3, "item_id", "group_id", "allow_unshare"], ["diameter", "32"], [1, "text-sm"], [1, "h-full", "w-full", 3, "schemaChange", "plugin", "config", "auto_play", "schema"], [1, "text-base-content/30", "text-6xl"], ["for", "media-uri"], ["matInput", "", "id", "media-uri", "type", "url", "placeholder", "https://example.com", 3, "formField"], ["for", "media-thumbnail"], [1, "mb-4", "flex", "items-center", "gap-4"], [1, "bg-base-300", "border-base-300", "h-20", "w-32", "shrink-0", "overflow-hidden", "rounded-lg", "border"], [1, "h-full", "w-full", "object-contain", 3, "src", "alt"], ["auth", "", 1, "h-full", "w-full", "object-contain", 3, "source", "alt"], [1, "text-base-content/50", "flex", "h-full", "w-full", "items-center", "justify-center", "px-2", "text-center", "text-xs"], ["btn", "", "type", "button", 1, "inverse", "bg-base-100", 3, "click", "disabled"], ["btn", "", "type", "button", 1, "clear"], ["id", "media-thumbnail", "type", "file", "tabindex", "-1", "aria-hidden", "true", "accept", "image/*", 1, "sr-only", 3, "change"], ["btn", "", "type", "button", 1, "clear", 3, "click"], [1, "flex", "items-center", "space-x-4"], ["for", "media-start-time", 1, "m-0", "w-auto", "min-w-0"], ["min", "0", "step", "100", 3, "max"], ["matSliderThumb", "", "id", "media-start-time", 3, "formField"], ["diameter", "24"], [1, "m-0", "text-sm", "opacity-70"], [1, "bg-base-200/60", "mb-2", "rounded-lg", "p-4"], [3, "schema", "formField"]], template: function MediaEditModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function MediaEditModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.saveMedia();
        });
        \u0275\u0275elementStart(3, "form")(4, "div", 2)(5, "div", 3);
        \u0275\u0275listener("click", function MediaEditModalComponent_Template_div_click_5_listener() {
          return ctx.preview();
        });
        \u0275\u0275conditionalCreate(6, MediaEditModalComponent_Conditional_6_Template, 5, 3, "div", 4)(7, MediaEditModalComponent_Conditional_7_Template, 1, 4, "plugin-embed", 5)(8, MediaEditModalComponent_Conditional_8_Template, 3, 7, "iframe", 6)(9, MediaEditModalComponent_Conditional_9_Template, 3, 0, "div", 7)(10, MediaEditModalComponent_Conditional_10_Template, 2, 4, "img", 8);
        \u0275\u0275elementStart(11, "div", 9);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 10);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275listener("click", function MediaEditModalComponent_Template_button_click_13_listener($event) {
          $event.stopPropagation();
          return ctx.preview();
        });
        \u0275\u0275elementStart(15, "icon");
        \u0275\u0275text(16, "open_in_full");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(17, MediaEditModalComponent_Conditional_17_Template, 2, 1, "p", 11);
        \u0275\u0275elementStart(18, "label", 12);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-form-field", 13);
        \u0275\u0275element(22, "input", 14);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(25, "mat-error");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(28, MediaEditModalComponent_Conditional_28_Template, 9, 10);
        \u0275\u0275conditionalCreate(29, MediaEditModalComponent_Conditional_29_Template, 15, 12);
        \u0275\u0275conditionalCreate(30, MediaEditModalComponent_Conditional_30_Template, 9, 9);
        \u0275\u0275elementStart(31, "div", 15)(32, "label", 16);
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 17);
        \u0275\u0275conditionalCreate(36, MediaEditModalComponent_Conditional_36_Template, 2, 4)(37, MediaEditModalComponent_Conditional_37_Template, 4, 6, "span", 18)(38, MediaEditModalComponent_Conditional_38_Template, 3, 3, "span", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "mat-slider", 19);
        \u0275\u0275element(40, "input", 20);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "label", 21);
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-form-field", 13)(45, "mat-select", 22);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275repeaterCreate(47, MediaEditModalComponent_For_48_Template, 3, 4, "mat-option", 23, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "label", 24);
        \u0275\u0275text(50);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "mat-form-field", 25);
        \u0275\u0275element(53, "textarea", 26);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "label", 27);
        \u0275\u0275text(57);
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(59, "item-list-field", 28);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(61, MediaEditModalComponent_Conditional_61_Template, 5, 3, "div", 29)(62, MediaEditModalComponent_Conditional_62_Template, 5, 5);
        \u0275\u0275elementStart(63, "div", 30)(64, "div", 31)(65, "label", 32);
        \u0275\u0275text(66);
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(68, "a-date-field", 33);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "div", 31)(70, "label", 34);
        \u0275\u0275text(71);
        \u0275\u0275pipe(72, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(73, "a-date-field", 35);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275element(74, "signage-shared-with", 36);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 41, ctx.item.id ? "SIGNAGE_MANAGER.MEDIA_EDIT" : "SIGNAGE_MANAGER.MEDIA_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 43, "SIGNAGE_MANAGER.MEDIA_SAVING") : "");
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.media_type === "plugin" && ctx.plugin_loading() ? 6 : ctx.media_type === "plugin" && ctx.plugin() ? 7 : ctx.media_type === "webpage" ? 8 : ctx.file && ctx.media_type === "video" && !ctx.thumbnail() ? 9 : 10);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.media_type, " ");
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 45, "SIGNAGE_MANAGER.PREVIEW_MEDIA_ARIA"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.dimensions_warning ? 17 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 47, "FORM.NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.name)("placeholder", \u0275\u0275pipeBind1(23, 49, "FORM.NAME"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(24, 51, "SIGNAGE_MANAGER.MEDIA_NAME_ARIA"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 53, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.media_type === "webpage" ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.can_set_thumbnail ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.media_type === "video" ? 30 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 55, "SIGNAGE_MANAGER.MEDIA_PLAY_TIME"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.model().play_time ? 36 : ctx.item.video_length ? 37 : 38);
        \u0275\u0275advance(3);
        \u0275\u0275property("min", ctx.model().start_time)("max", ctx.item.video_length || 3e5);
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.play_time);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 57, "SIGNAGE_MANAGER.ANIMATION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.animation)("placeholder", \u0275\u0275pipeBind1(46, 59, "COMMON.DEFAULT"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.animation_options);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 61, "COMMON.DESCRIPTION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(54, 63, "COMMON.DESCRIPTION"))("formField", ctx.form.description);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(55, 65, "SIGNAGE_MANAGER.MEDIA_DESCRIPTION_ARIA"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 67, "COMMON.TAGS"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.tags)("options", ctx.tag_options)("placeholder", \u0275\u0275pipeBind1(60, 69, "COMMON.TAGS"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.media_type === "plugin" && ctx.plugin_loading() ? 61 : ctx.active_plugin_schema() ? 62 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 71, "SIGNAGE_MANAGER.VALID_FROM"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.valid_from)("clear", true);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 73, "FORM.EXPIRES_AT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("from", ctx.model().valid_from)("formField", ctx.form.valid_until)("clear", true);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("item_id", ctx.item.id)("group_id", ctx.group_id)("allow_unshare", true);
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      FormField,
      IconComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatSliderModule,
      MatSlider,
      MatSliderThumb,
      AuthenticatedImageDirective,
      SchemaFormComponent,
      PluginEmbedComponent,
      ItemListFieldComponent,
      SignageSharedWithComponent,
      TranslatePipe,
      SafePipe,
      MediaDurationPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaEditModalComponent, [{
    type: Component,
    args: [{ selector: "media-edit-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (item.id
                    ? 'SIGNAGE_MANAGER.MEDIA_EDIT'
                    : 'SIGNAGE_MANAGER.MEDIA_NEW'
                ) | translate
            "
            confirm_hotkey="S"
            (confirm)="saveMedia()"
            [loading]="
                loading() ? ('SIGNAGE_MANAGER.MEDIA_SAVING' | translate) : ''
            "
        >
            <form>
                <div class="flex flex-col">
                    <!-- Not a button: the preview can hold an iframe or a
                     plugin, which must not sit inside a button. The click
                     here is for the mouse; the button below is for the
                     keyboard. -->
                    <div
                        class="bg-base-300 border-base-300 relative mx-auto mb-4 h-48 w-full cursor-pointer overflow-hidden rounded-xl border shadow"
                        (click)="preview()"
                    >
                        @if (media_type === 'plugin' && plugin_loading()) {
                            <div
                                class="text-base-content/70 flex h-full w-full flex-col items-center justify-center gap-3"
                            >
                                <mat-spinner diameter="32" />
                                <p class="text-sm">
                                    {{
                                        'SIGNAGE_MANAGER.LOADING_PLUGIN_PREVIEW'
                                            | translate
                                    }}
                                </p>
                            </div>
                        } @else if (media_type === 'plugin' && plugin()) {
                            <plugin-embed
                                class="h-full w-full"
                                [plugin]="plugin()"
                                [config]="plugin_preview_config()"
                                [auto_play]="true"
                                [(schema)]="plugin_embed_schema"
                            ></plugin-embed>
                        } @else if (media_type === 'webpage') {
                            <iframe
                                [title]="
                                    'SIGNAGE_MANAGER.MEDIA_PREVIEW' | translate
                                "
                                class="h-screen w-full object-contain object-center"
                                sandbox="allow-scripts allow-same-origin allow-forms"
                                [src]="preview_url() | safe: 'resource'"
                            ></iframe>
                        } @else if (
                            file && media_type === 'video' && !thumbnail()
                        ) {
                            <!-- An img cannot show a video before its frame renders -->
                            <div
                                class="flex h-full w-full items-center justify-center"
                            >
                                <icon class="text-base-content/30 text-6xl"
                                    >movie</icon
                                >
                            </div>
                        } @else {
                            <img
                                class="h-full w-full object-contain object-center"
                                auth
                                [source]="thumbnail() || url"
                                [alt]="
                                    model().name ||
                                    ('SIGNAGE_MANAGER.MEDIA_PREVIEW'
                                        | translate)
                                "
                            />
                        }
                        <div
                            class="bg-info text-info-content absolute top-2 left-2 rounded-sm px-2 py-1 text-xs capitalize shadow"
                        >
                            {{ media_type }}
                        </div>
                        <button
                            icon
                            type="button"
                            matRipple
                            class="bg-base-100 text-base-content absolute top-2 right-2 shadow"
                            (click)="$event.stopPropagation(); preview()"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.PREVIEW_MEDIA_ARIA' | translate
                            "
                        >
                            <icon>open_in_full</icon>
                        </button>
                    </div>
                    @if (dimensions_warning) {
                        <p
                            class="bg-warning text-warning-content mb-4 rounded-lg px-4 py-2 text-sm"
                            role="alert"
                        >
                            {{ dimensions_warning }}
                        </p>
                    }
                    <label for="media-name">{{
                        'FORM.NAME' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            id="media-name"
                            [formField]="form.name"
                            [placeholder]="'FORM.NAME' | translate"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.MEDIA_NAME_ARIA' | translate
                            "
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    @if (media_type === 'webpage') {
                        <label for="media-uri">{{
                            'COMMON.URL' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                id="media-uri"
                                type="url"
                                [formField]="form.media_uri"
                                placeholder="https://example.com"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.WEBPAGE_URL_ARIA'
                                        | translate
                                "
                            />
                            <mat-error>{{
                                (form.media_uri().value()
                                    ? 'SIGNAGE_MANAGER.URL_INVALID'
                                    : 'SIGNAGE_MANAGER.URL_REQUIRED'
                                ) | translate
                            }}</mat-error>
                        </mat-form-field>
                    }
                    @if (can_set_thumbnail) {
                        <label for="media-thumbnail">{{
                            'SIGNAGE_MANAGER.THUMBNAIL' | translate
                        }}</label>
                        <div class="mb-4 flex items-center gap-4">
                            <div
                                class="bg-base-300 border-base-300 h-20 w-32 shrink-0 overflow-hidden rounded-lg border"
                            >
                                @if (custom_thumbnail()) {
                                    <img
                                        class="h-full w-full object-contain"
                                        [src]="custom_thumbnail()"
                                        [alt]="
                                            'SIGNAGE_MANAGER.THUMBNAIL'
                                                | translate
                                        "
                                    />
                                } @else if (item.thumbnail_id) {
                                    <img
                                        class="h-full w-full object-contain"
                                        auth
                                        [source]="thumbnail()"
                                        [alt]="
                                            'SIGNAGE_MANAGER.THUMBNAIL'
                                                | translate
                                        "
                                    />
                                } @else {
                                    <div
                                        class="text-base-content/50 flex h-full w-full items-center justify-center px-2 text-center text-xs"
                                    >
                                        {{
                                            (item.id
                                                ? 'SIGNAGE_MANAGER.THUMBNAIL_NONE'
                                                : 'SIGNAGE_MANAGER.THUMBNAIL_AUTO'
                                            ) | translate
                                        }}
                                    </div>
                                }
                            </div>
                            <button
                                btn
                                type="button"
                                class="inverse bg-base-100"
                                [disabled]="thumbnail_loading()"
                                (click)="thumbnail_input.click()"
                            >
                                {{
                                    (thumbnail_loading()
                                        ? 'SIGNAGE_MANAGER.THUMBNAIL_LOADING'
                                        : 'SIGNAGE_MANAGER.THUMBNAIL_CHOOSE'
                                    ) | translate
                                }}
                            </button>
                            @if (custom_thumbnail()) {
                                <button
                                    btn
                                    type="button"
                                    class="clear"
                                    (click)="custom_thumbnail.set('')"
                                >
                                    {{ 'COMMON.CLEAR' | translate }}
                                </button>
                            }
                            <input
                                #thumbnail_input
                                id="media-thumbnail"
                                type="file"
                                tabindex="-1"
                                aria-hidden="true"
                                class="sr-only"
                                accept="image/*"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.THUMBNAIL_CHOOSE'
                                        | translate
                                "
                                (change)="setThumbnail($event)"
                            />
                        </div>
                    }
                    @if (media_type === 'video') {
                        <div class="flex items-center space-x-4">
                            <label
                                for="media-start-time"
                                class="m-0 w-auto min-w-0"
                                >{{ 'FORM.TIME_START' | translate }}</label
                            >
                            <div class="font-mono text-xs">
                                {{
                                    model().start_time / 1000
                                        | mediaDuration: true
                                }}
                            </div>
                        </div>
                        <mat-slider
                            min="0"
                            [max]="(item.video_length || 300000) - 1000"
                            step="100"
                        >
                            <input
                                matSliderThumb
                                id="media-start-time"
                                [formField]="form.start_time"
                            />
                        </mat-slider>
                    }
                    <div class="flex items-center gap-4">
                        <label for="media-play-time" class="m-0 w-auto min-w-0">
                            {{
                                'SIGNAGE_MANAGER.MEDIA_PLAY_TIME' | translate
                            }}</label
                        >
                        <div class="font-mono text-xs">
                            @if (model().play_time) {
                                {{
                                    model().play_time / 1000
                                        | mediaDuration: true
                                }}
                            } @else if (item.video_length) {
                                <span class="text-base-content/70">
                                    {{ 'COMMON.DEFAULT' | translate }} ({{
                                        item.video_length / 1000
                                            | mediaDuration
                                    }})
                                </span>
                            } @else {
                                <!-- Set by the playlist default, else 15 seconds -->
                                <span class="text-base-content/70">
                                    {{ 'COMMON.DEFAULT' | translate }}
                                </span>
                            }
                        </div>
                    </div>
                    <mat-slider
                        [min]="model().start_time"
                        [max]="item.video_length || 300000"
                        step="100"
                    >
                        <input
                            matSliderThumb
                            id="media-play-time"
                            [formField]="form.play_time"
                        />
                    </mat-slider>
                    <!-- A mat-select is not a labelable element, so it names
                        itself from the label through aria-labelledby -->
                    <label id="media-animation-label" for="media-animation">{{
                        'SIGNAGE_MANAGER.ANIMATION' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            id="media-animation"
                            aria-labelledby="media-animation-label"
                            [formField]="form.animation"
                            [placeholder]="'COMMON.DEFAULT' | translate"
                        >
                            @for (
                                option of animation_options;
                                track option.value
                            ) {
                                <mat-option [value]="option.value">{{
                                    option.label | translate
                                }}</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <label for="media-description">{{
                        'COMMON.DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            id="media-description"
                            [placeholder]="'COMMON.DESCRIPTION' | translate"
                            [formField]="form.description"
                            class="min-h-32"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.MEDIA_DESCRIPTION_ARIA'
                                    | translate
                            "
                        ></textarea>
                    </mat-form-field>
                    <label for="media-tags">{{
                        'COMMON.TAGS' | translate
                    }}</label>
                    <!-- The form field components keep their inputs inside, so
                        these ids name the component, not its inner control -->
                    <item-list-field
                        id="media-tags"
                        name="tags"
                        [formField]="form.tags"
                        [options]="tag_options"
                        [placeholder]="'COMMON.TAGS' | translate"
                    ></item-list-field>
                    @if (media_type === 'plugin' && plugin_loading()) {
                        <div
                            class="bg-base-200/60 mb-2 flex items-center gap-3 rounded-lg p-4"
                        >
                            <mat-spinner diameter="24" />
                            <p class="m-0 text-sm opacity-70">
                                {{
                                    'SIGNAGE_MANAGER.LOADING_PLUGIN_DETAILS'
                                        | translate
                                }}
                            </p>
                        </div>
                    } @else if (active_plugin_schema()) {
                        <label>{{
                            'SIGNAGE_MANAGER.PLUGIN_PARAMETERS' | translate
                        }}</label>
                        <div class="bg-base-200/60 mb-2 rounded-lg p-4">
                            <schema-form
                                [schema]="active_plugin_schema()"
                                [formField]="form.plugin_params"
                            ></schema-form>
                        </div>
                    }
                    <div class="flex space-x-4">
                        <div class="flex-1">
                            <label for="media-valid-from">{{
                                'SIGNAGE_MANAGER.VALID_FROM' | translate
                            }}</label>
                            <a-date-field
                                id="media-valid-from"
                                name="valid-from"
                                [formField]="form.valid_from"
                                [clear]="true"
                            ></a-date-field>
                        </div>
                        <div class="flex-1">
                            <label for="media-valid-until">{{
                                'FORM.EXPIRES_AT' | translate
                            }}</label>
                            <a-date-field
                                id="media-valid-until"
                                name="valid-until"
                                [from]="model().valid_from"
                                [formField]="form.valid_until"
                                [clear]="true"
                            ></a-date-field>
                        </div>
                    </div>
                    <signage-shared-with
                        type="media"
                        [item_id]="item.id"
                        [group_id]="group_id"
                        [allow_unshare]="true"
                    ></signage-shared-with>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      FormField,
      IconComponent,
      DateFieldComponent,
      TranslatePipe,
      SafePipe,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatSelectModule,
      MatSliderModule,
      AuthenticatedImageDirective,
      MediaDurationPipe,
      SchemaFormComponent,
      PluginEmbedComponent,
      ItemListFieldComponent,
      SignageSharedWithComponent
    ] }]
  }], () => [], { _schema_form: [{ type: ViewChild, args: [forwardRef(() => SchemaFormComponent), { isSignal: true }] }], _plugin_embed: [{ type: ViewChild, args: [forwardRef(() => PluginEmbedComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaEditModalComponent, { className: "MediaEditModalComponent", filePath: "apps/signage-manager/src/app/shared/media-edit-modal.component.ts", lineNumber: 554 });
})();
export {
  MediaEditModalComponent
};
//# debugId=354b6738-353b-5bb3-a9a3-3018b93c6981
//# sourceMappingURL=media-edit-modal.component-KRMOKAWA.js.map
