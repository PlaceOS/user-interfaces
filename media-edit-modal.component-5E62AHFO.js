import {
  SchemaFormComponent
} from "./chunk-SYPHAL3V.js";
import {
  objectHasKeys,
  pluginSchema,
  schemaDefaults
} from "./chunk-DBWLNOKZ.js";
import {
  ItemListFieldComponent
} from "./chunk-PSR7Y3WA.js";
import {
  MatSlider,
  MatSliderModule,
  MatSliderThumb
} from "./chunk-474JKPWF.js";
import {
  DateFieldComponent
} from "./chunk-6HHY4FJK.js";
import "./chunk-2QR6WMMY.js";
import {
  FullscreenModalShellComponent
} from "./chunk-QX7UMRWQ.js";
import "./chunk-Y6Y42IYE.js";
import {
  PluginEmbedComponent
} from "./chunk-YLOZOHGX.js";
import {
  SignageSharedWithComponent
} from "./chunk-OJMFUBRC.js";
import {
  MediaDurationPipe
} from "./chunk-DQ3OENMI.js";
import {
  getVideoContainer,
  isSupportedImageFile,
  mediaAnimation,
  validateSignageMediaDimensions
} from "./chunk-6LWHHSW4.js";
import {
  isWebPageUrl,
  normaliseWebPageUrl,
  webPageFrameUrl
} from "./chunk-FZRJJ3PO.js";
import {
  AuthenticatedImageDirective
} from "./chunk-SLLMOXD7.js";
import "./chunk-IAA4H3MD.js";
import {
  playlistMediaThumbnailUrl
} from "./chunk-76L3RQJV.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-MSPDKJIW.js";
import "./chunk-JKGJXOUJ.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-YVBXI2KA.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-TP37P6LZ.js";
import "./chunk-GF5I6UHA.js";
import "./chunk-W7BPHDUZ.js";
import "./chunk-OAWDSWZC.js";
import "./chunk-EW627VC3.js";
import "./chunk-NVC2MTBW.js";
import "./chunk-EMBZFGIE.js";
import "./chunk-RR6Z4IN7.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-ARJ6GFJX.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-B6VCLN4P.js";
import {
  FormField,
  form,
  required,
  submit,
  validate
} from "./chunk-2PPCVPFM.js";
import {
  TranslatePipe
} from "./chunk-KEXLIPA2.js";
import "./chunk-KABK725Z.js";
import {
  getUnixTime
} from "./chunk-4BHMYMLA.js";
import {
  MatOption
} from "./chunk-HGUL5NVP.js";
import "./chunk-E72MB55H.js";
import {
  HotkeysService
} from "./chunk-DMUGOB3K.js";
import {
  IconComponent,
  SafePipe
} from "./chunk-PRJCR3BE.js";
import {
  Ds,
  Ns,
  endOfDay,
  i18n,
  notifyError,
  notifySuccess,
  startOfDay
} from "./chunk-UY3BZCXJ.js";
import "./chunk-7QGPCQM3.js";
import "./chunk-TQO6MZFG.js";
import "./chunk-C2I2ZQPH.js";
import "./chunk-ZJXU3LLP.js";
import {
  Component,
  DestroyRef,
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
} from "./chunk-6HUGPUMR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// apps/signage-manager/src/app/shared/media-edit-modal.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function MediaEditModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 36);
    \u0275\u0275elementStart(2, "p", 37);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SIGNAGE_MANAGER.LOADING_PLUGIN_PREVIEW"), " ");
  }
}
function MediaEditModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "plugin-embed", 38);
    \u0275\u0275twoWayListener("schemaChange", function MediaEditModalComponent_Conditional_8_Template_plugin_embed_schemaChange_0_listener($event) {
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
function MediaEditModalComponent_Conditional_9_Template(rf, ctx) {
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
function MediaEditModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "icon", 39);
    \u0275\u0275text(2, "movie");
    \u0275\u0275elementEnd()();
  }
}
function MediaEditModalComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r1.thumbnail() || ctx_r1.url)("alt", ctx_r1.model().name || \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.MEDIA_PREVIEW"));
  }
}
function MediaEditModalComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.dimensions_warning, " ");
  }
}
function MediaEditModalComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 12);
    \u0275\u0275element(4, "input", 41);
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
function MediaEditModalComponent_Conditional_26_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 45);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.custom_thumbnail(), \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.THUMBNAIL"));
  }
}
function MediaEditModalComponent_Conditional_26_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 46);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r1.thumbnail())("alt", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.THUMBNAIL"));
  }
}
function MediaEditModalComponent_Conditional_26_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
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
function MediaEditModalComponent_Conditional_26_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function MediaEditModalComponent_Conditional_26_Conditional_11_Template_button_click_0_listener() {
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
function MediaEditModalComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 42);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43)(4, "div", 44);
    \u0275\u0275conditionalCreate(5, MediaEditModalComponent_Conditional_26_Conditional_5_Template, 2, 4, "img", 45)(6, MediaEditModalComponent_Conditional_26_Conditional_6_Template, 2, 4, "img", 46)(7, MediaEditModalComponent_Conditional_26_Conditional_7_Template, 3, 3, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 48);
    \u0275\u0275listener("click", function MediaEditModalComponent_Conditional_26_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const thumbnail_input_r4 = \u0275\u0275reference(13);
      return \u0275\u0275resetView(thumbnail_input_r4.click());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, MediaEditModalComponent_Conditional_26_Conditional_11_Template, 3, 3, "button", 49);
    \u0275\u0275elementStart(12, "input", 50, 0);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("change", function MediaEditModalComponent_Conditional_26_Template_input_change_12_listener($event) {
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
function MediaEditModalComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "label", 53);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "mediaDuration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-slider", 54);
    \u0275\u0275element(8, "input", 55);
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
function MediaEditModalComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "mediaDuration");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r1.model().play_time / 1e3, true), " ");
  }
}
function MediaEditModalComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
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
function MediaEditModalComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.DEFAULT"), " ");
  }
}
function MediaEditModalComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22);
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
function MediaEditModalComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "mat-spinner", 56);
    \u0275\u0275elementStart(2, "p", 57);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SIGNAGE_MANAGER.LOADING_PLUGIN_DETAILS"), " ");
  }
}
function MediaEditModalComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58);
    \u0275\u0275element(4, "schema-form", 59);
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
function MediaEditModalComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 60);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 12)(4, "mat-select", 61);
    \u0275\u0275listener("valueChange", function MediaEditModalComponent_Conditional_71_Template_mat_select_valueChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.permissions.set($event));
    });
    \u0275\u0275elementStart(5, "mat-option", 62);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 63);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 64);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 5, "SIGNAGE_MANAGER.BULK_UPLOAD_PERMISSIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.permissions());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "SIGNAGE_MANAGER.BULK_UPLOAD_PERMISSION_NONE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, "SIGNAGE_MANAGER.BULK_UPLOAD_PERMISSION_SUPPORT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 11, "SIGNAGE_MANAGER.BULK_UPLOAD_PERMISSION_ADMIN"));
  }
}
var ANIMATION_OPTIONS = [
  { value: Ns.Default, label: "COMMON.DEFAULT" },
  { value: Ns.Cut, label: "SIGNAGE_MANAGER.ANIM_CUT" },
  {
    value: Ns.CrossFade,
    label: "SIGNAGE_MANAGER.ANIM_CROSS_FADE"
  },
  { value: Ns.SlideTop, label: "SIGNAGE_MANAGER.ANIM_SLIDE_TOP" },
  {
    value: Ns.SlideLeft,
    label: "SIGNAGE_MANAGER.ANIM_SLIDE_LEFT"
  },
  {
    value: Ns.SlideRight,
    label: "SIGNAGE_MANAGER.ANIM_SLIDE_RIGHT"
  },
  {
    value: Ns.SlideBottom,
    label: "SIGNAGE_MANAGER.ANIM_SLIDE_BOTTOM"
  }
];
var HOTKEY_BLOCKING_FOCUS = 'select, mat-select, [role="combobox"], [role="listbox"], [role="option"], [role="menu"], [role="menuitem"]';
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
    this._dialog = inject(MatDialog);
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
    this.permissions = signal(
      "none",
      ...ngDevMode ? [{ debugName: "permissions" }] : (
        /* istanbul ignore next */
        []
      )
    );
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
      new Ds({
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
    const save_hotkey = inject(HotkeysService).listen(["KeyS"], () => {
      if (this._canUseSaveHotkey())
        this.saveMedia();
    });
    inject(DestroyRef).onDestroy(() => save_hotkey?.unsubscribe());
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
  /**
   * The save hotkey is a plain key, so it only acts while this modal is the
   * top-most dialog and focus is not on a control that takes key presses.
   */
  _canUseSaveHotkey() {
    const dialogs = this._dialog.openDialogs;
    if (dialogs[dialogs.length - 1] !== this._dialog_ref)
      return false;
    return !document.activeElement?.closest(HOTKEY_BLOCKING_FOCUS);
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
          await this._data.onAdd(this.file, new Ds(new_media), this._data.file_metadata, this.custom_thumbnail(), () => this._capturePluginThumbnail(), this.permissions());
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
    }, decls: 73, vars: 76, consts: [["thumbnail_input", ""], ["confirm_hotkey", "S", 3, "confirm", "heading", "loading"], [1, "flex", "flex-col"], ["type", "button", "matRipple", "", 1, "bg-base-300", "border-base-300", "relative", "mx-auto", "mb-4", "h-48", "w-full", "overflow-hidden", "rounded-xl", "border", "shadow", 3, "click"], [1, "text-base-content/70", "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "gap-3"], [1, "h-full", "w-full", 3, "plugin", "config", "auto_play", "schema"], ["sandbox", "allow-scripts allow-same-origin allow-forms", 1, "h-screen", "w-full", "object-contain", "object-center", 3, "title", "src"], [1, "flex", "h-full", "w-full", "items-center", "justify-center"], ["auth", "", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source", "alt"], [1, "bg-info", "text-info-content", "absolute", "top-2", "left-2", "rounded-sm", "px-2", "py-1", "text-xs", "capitalize", "shadow"], ["role", "alert", 1, "bg-warning", "text-warning-content", "mb-4", "rounded-lg", "px-4", "py-2", "text-sm"], ["for", "media-name"], ["appearance", "outline"], ["matInput", "", "id", "media-name", 3, "formField", "placeholder"], [1, "flex", "items-center", "gap-4"], ["for", "media-play-time", 1, "m-0", "w-auto", "min-w-0"], [1, "font-mono", "text-xs"], [1, "text-base-content/70"], ["step", "100", 3, "min", "max"], ["matSliderThumb", "", "id", "media-play-time", 3, "formField"], ["id", "media-animation-label", "for", "media-animation"], ["id", "media-animation", "aria-labelledby", "media-animation-label", 3, "formField", "placeholder"], [3, "value"], ["for", "media-description"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "id", "media-description", 1, "min-h-32", 3, "placeholder", "formField"], ["for", "media-tags"], ["id", "media-tags", "name", "tags", 3, "formField", "options", "placeholder"], [1, "bg-base-200/60", "mb-2", "flex", "items-center", "gap-3", "rounded-lg", "p-4"], [1, "flex", "space-x-4"], [1, "flex-1"], ["for", "media-valid-from"], ["id", "media-valid-from", "name", "valid-from", 3, "formField", "clear"], ["for", "media-valid-until"], ["id", "media-valid-until", "name", "valid-until", 3, "from", "formField", "clear"], ["type", "media", 3, "item_id", "group_id", "allow_unshare"], ["diameter", "32"], [1, "text-sm"], [1, "h-full", "w-full", 3, "schemaChange", "plugin", "config", "auto_play", "schema"], [1, "text-base-content/30", "text-6xl"], ["for", "media-uri"], ["matInput", "", "id", "media-uri", "type", "url", "placeholder", "https://example.com", 3, "formField"], ["for", "media-thumbnail"], [1, "mb-4", "flex", "items-center", "gap-4"], [1, "bg-base-300", "border-base-300", "h-20", "w-32", "shrink-0", "overflow-hidden", "rounded-lg", "border"], [1, "h-full", "w-full", "object-contain", 3, "src", "alt"], ["auth", "", 1, "h-full", "w-full", "object-contain", 3, "source", "alt"], [1, "text-base-content/50", "flex", "h-full", "w-full", "items-center", "justify-center", "px-2", "text-center", "text-xs"], ["btn", "", "type", "button", 1, "inverse", "bg-base-100", 3, "click", "disabled"], ["btn", "", "type", "button", 1, "clear"], ["id", "media-thumbnail", "type", "file", "accept", "image/*", 1, "sr-only", 3, "change"], ["btn", "", "type", "button", 1, "clear", 3, "click"], [1, "flex", "items-center", "space-x-4"], ["for", "media-start-time", 1, "m-0", "w-auto", "min-w-0"], ["min", "0", "step", "100", 3, "max"], ["matSliderThumb", "", "id", "media-start-time", 3, "formField"], ["diameter", "24"], [1, "m-0", "text-sm", "opacity-70"], [1, "bg-base-200/60", "mb-2", "rounded-lg", "p-4"], [3, "schema", "formField"], ["id", "upload-permissions-label", "for", "upload-permissions"], ["id", "upload-permissions", "aria-labelledby", "upload-permissions-label", 3, "valueChange", "value"], ["value", "none"], ["value", "support"], ["value", "admin"]], template: function MediaEditModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function MediaEditModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.saveMedia();
        });
        \u0275\u0275elementStart(3, "form")(4, "div", 2)(5, "button", 3);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275listener("click", function MediaEditModalComponent_Template_button_click_5_listener() {
          return ctx.preview();
        });
        \u0275\u0275conditionalCreate(7, MediaEditModalComponent_Conditional_7_Template, 5, 3, "div", 4)(8, MediaEditModalComponent_Conditional_8_Template, 1, 4, "plugin-embed", 5)(9, MediaEditModalComponent_Conditional_9_Template, 3, 7, "iframe", 6)(10, MediaEditModalComponent_Conditional_10_Template, 3, 0, "div", 7)(11, MediaEditModalComponent_Conditional_11_Template, 2, 4, "img", 8);
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(14, MediaEditModalComponent_Conditional_14_Template, 2, 1, "p", 10);
        \u0275\u0275elementStart(15, "label", 11);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "mat-form-field", 12);
        \u0275\u0275element(19, "input", 13);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(22, "mat-error");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(25, MediaEditModalComponent_Conditional_25_Template, 9, 10);
        \u0275\u0275conditionalCreate(26, MediaEditModalComponent_Conditional_26_Template, 15, 12);
        \u0275\u0275conditionalCreate(27, MediaEditModalComponent_Conditional_27_Template, 9, 9);
        \u0275\u0275elementStart(28, "div", 14)(29, "label", 15);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 16);
        \u0275\u0275conditionalCreate(33, MediaEditModalComponent_Conditional_33_Template, 2, 4)(34, MediaEditModalComponent_Conditional_34_Template, 4, 6, "span", 17)(35, MediaEditModalComponent_Conditional_35_Template, 3, 3, "span", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "mat-slider", 18);
        \u0275\u0275element(37, "input", 19);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "label", 20);
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "mat-form-field", 12)(42, "mat-select", 21);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275repeaterCreate(44, MediaEditModalComponent_For_45_Template, 3, 4, "mat-option", 22, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "label", 23);
        \u0275\u0275text(47);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "mat-form-field", 24);
        \u0275\u0275element(50, "textarea", 25);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "label", 26);
        \u0275\u0275text(54);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(56, "item-list-field", 27);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(58, MediaEditModalComponent_Conditional_58_Template, 5, 3, "div", 28)(59, MediaEditModalComponent_Conditional_59_Template, 5, 5);
        \u0275\u0275elementStart(60, "div", 29)(61, "div", 30)(62, "label", 31);
        \u0275\u0275text(63);
        \u0275\u0275pipe(64, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(65, "a-date-field", 32);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div", 30)(67, "label", 33);
        \u0275\u0275text(68);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(70, "a-date-field", 34);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(71, MediaEditModalComponent_Conditional_71_Template, 14, 13);
        \u0275\u0275element(72, "signage-shared-with", 35);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 42, ctx.item.id ? "SIGNAGE_MANAGER.MEDIA_EDIT" : "SIGNAGE_MANAGER.MEDIA_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 44, "SIGNAGE_MANAGER.MEDIA_SAVING") : "");
        \u0275\u0275advance(5);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 46, "SIGNAGE_MANAGER.PREVIEW_MEDIA_ARIA"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.media_type === "plugin" && ctx.plugin_loading() ? 7 : ctx.media_type === "plugin" && ctx.plugin() ? 8 : ctx.media_type === "webpage" ? 9 : ctx.file && ctx.media_type === "video" && !ctx.thumbnail() ? 10 : 11);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.media_type, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.dimensions_warning ? 14 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 48, "FORM.NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.name)("placeholder", \u0275\u0275pipeBind1(20, 50, "FORM.NAME"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(21, 52, "SIGNAGE_MANAGER.MEDIA_NAME_ARIA"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 54, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.media_type === "webpage" ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.can_set_thumbnail ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.media_type === "video" ? 27 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 56, "SIGNAGE_MANAGER.MEDIA_PLAY_TIME"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.model().play_time ? 33 : ctx.item.video_length ? 34 : 35);
        \u0275\u0275advance(3);
        \u0275\u0275property("min", ctx.model().start_time)("max", ctx.item.video_length || 3e5);
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.play_time);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 58, "SIGNAGE_MANAGER.ANIMATION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.animation)("placeholder", \u0275\u0275pipeBind1(43, 60, "COMMON.DEFAULT"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.animation_options);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 62, "COMMON.DESCRIPTION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(51, 64, "COMMON.DESCRIPTION"))("formField", ctx.form.description);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(52, 66, "SIGNAGE_MANAGER.MEDIA_DESCRIPTION_ARIA"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 68, "COMMON.TAGS"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.tags)("options", ctx.tag_options)("placeholder", \u0275\u0275pipeBind1(57, 70, "COMMON.TAGS"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.media_type === "plugin" && ctx.plugin_loading() ? 58 : ctx.active_plugin_schema() ? 59 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 72, "SIGNAGE_MANAGER.VALID_FROM"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.valid_from)("clear", true);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 74, "FORM.EXPIRES_AT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("from", ctx.model().valid_from)("formField", ctx.form.valid_until)("clear", true);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.file ? 71 : -1);
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
                    <button
                        type="button"
                        matRipple
                        class="bg-base-300 border-base-300 relative mx-auto mb-4 h-48 w-full overflow-hidden rounded-xl border shadow"
                        (click)="preview()"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.PREVIEW_MEDIA_ARIA' | translate
                        "
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
                    </button>
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
                    @if (file) {
                        <label
                            id="upload-permissions-label"
                            for="upload-permissions"
                            >{{
                                'SIGNAGE_MANAGER.BULK_UPLOAD_PERMISSIONS'
                                    | translate
                            }}</label
                        >
                        <mat-form-field appearance="outline">
                            <mat-select
                                id="upload-permissions"
                                aria-labelledby="upload-permissions-label"
                                [value]="permissions()"
                                (valueChange)="permissions.set($event)"
                            >
                                <mat-option value="none">{{
                                    'SIGNAGE_MANAGER.BULK_UPLOAD_PERMISSION_NONE'
                                        | translate
                                }}</mat-option>
                                <mat-option value="support">{{
                                    'SIGNAGE_MANAGER.BULK_UPLOAD_PERMISSION_SUPPORT'
                                        | translate
                                }}</mat-option>
                                <mat-option value="admin">{{
                                    'SIGNAGE_MANAGER.BULK_UPLOAD_PERMISSION_ADMIN'
                                        | translate
                                }}</mat-option>
                            </mat-select>
                        </mat-form-field>
                    }
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaEditModalComponent, { className: "MediaEditModalComponent", filePath: "apps/signage-manager/src/app/shared/media-edit-modal.component.ts", lineNumber: 606 });
})();
export {
  MediaEditModalComponent
};
//# debugId=86da23ab-e504-5d7e-9f51-7593edb33ed4
//# sourceMappingURL=media-edit-modal.component-5E62AHFO.js.map
