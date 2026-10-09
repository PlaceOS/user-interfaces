import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-YA5DADHX.js";
import {
  BRAND_FONTS,
  brandEditingOn,
  canEditBrandKit,
  ensureBrandFont
} from "./chunk-5LOB5WLK.js";
import {
  ImageGenService,
  isFinal
} from "./chunk-F5EGRK47.js";
import {
  SignageMediaService
} from "./chunk-XR3JC4JO.js";
import "./chunk-MOQN4WV5.js";
import "./chunk-6LWHHSW4.js";
import "./chunk-FZRJJ3PO.js";
import {
  SignagePlaylistService
} from "./chunk-A3ZHUTED.js";
import {
  AuthenticatedImageDirective
} from "./chunk-SLLMOXD7.js";
import "./chunk-IAA4H3MD.js";
import "./chunk-76L3RQJV.js";
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
  MatFormField,
  MatFormFieldModule
} from "./chunk-TP37P6LZ.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-GF5I6UHA.js";
import "./chunk-STYUKBG2.js";
import "./chunk-EW627VC3.js";
import {
  SignageContextService
} from "./chunk-NVC2MTBW.js";
import "./chunk-EMBZFGIE.js";
import {
  actionError,
  hexColour,
  orientationOf,
  perceivedLightness
} from "./chunk-RR6Z4IN7.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-ARJ6GFJX.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-B6VCLN4P.js";
import "./chunk-2PPCVPFM.js";
import {
  TranslatePipe
} from "./chunk-KEXLIPA2.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-KABK725Z.js";
import "./chunk-4BHMYMLA.js";
import {
  MatOption
} from "./chunk-HGUL5NVP.js";
import "./chunk-E72MB55H.js";
import "./chunk-DMUGOB3K.js";
import {
  IconComponent
} from "./chunk-PRJCR3BE.js";
import {
  Ds,
  i18n,
  notifyError,
  notifySuccess
} from "./chunk-UY3BZCXJ.js";
import "./chunk-7QGPCQM3.js";
import "./chunk-TQO6MZFG.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-C2I2ZQPH.js";
import "./chunk-ZJXU3LLP.js";
import {
  Component,
  Input,
  Output,
  ViewChild,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  linkedSignal,
  output,
  setClassMetadata,
  signal,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-6HUGPUMR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// apps/signage-manager/src/app/image-gen/image-gen-layer-controls.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.family;
function ImageGenLayerControlsComponent_For_5_For_42_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", option_r4.family);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r4.label);
  }
}
function ImageGenLayerControlsComponent_For_5_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ImageGenLayerControlsComponent_For_5_For_42_Conditional_0_Template, 2, 2, "mat-option", 25);
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275conditional(option_r4.family ? 0 : -1);
  }
}
function ImageGenLayerControlsComponent_For_5_For_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function ImageGenLayerControlsComponent_For_5_For_45_Template_button_click_0_listener() {
      const colour_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const block_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.patchBlock(block_r2.id, { colour: colour_r6 }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const colour_r6 = ctx.$implicit;
    const block_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background", colour_r6);
    \u0275\u0275classProp("ring-2", block_r2.colour === colour_r6);
    \u0275\u0275attribute("aria-pressed", block_r2.colour === colour_r6)("aria-label", colour_r6);
  }
}
function ImageGenLayerControlsComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 7)(2, "mat-form-field", 8)(3, "textarea", 9);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("ngModelChange", function ImageGenLayerControlsComponent_For_5_Template_textarea_ngModelChange_3_listener($event) {
      const block_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.patchBlock(block_r2.id, { text: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 10);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function ImageGenLayerControlsComponent_For_5_Template_button_click_6_listener() {
      const block_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeBlock(block_r2.id));
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 11)(11, "mat-form-field", 12)(12, "mat-select", 13);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("ngModelChange", function ImageGenLayerControlsComponent_For_5_Template_mat_select_ngModelChange_12_listener($event) {
      const block_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.patchBlock(block_r2.id, { role: $event }));
    });
    \u0275\u0275elementStart(14, "mat-option", 14);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-option", 15);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-option", 16);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-form-field", 12)(24, "mat-select", 13);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275listener("ngModelChange", function ImageGenLayerControlsComponent_For_5_Template_mat_select_ngModelChange_24_listener($event) {
      const block_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.patchBlock(block_r2.id, { align: $event }));
    });
    \u0275\u0275elementStart(26, "mat-option", 17);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-option", 18);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-option", 19);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-form-field", 20)(36, "mat-select", 13);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275listener("ngModelChange", function ImageGenLayerControlsComponent_For_5_Template_mat_select_ngModelChange_36_listener($event) {
      const block_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.patchBlock(block_r2.id, { font: $event }));
    });
    \u0275\u0275elementStart(38, "mat-option", 21);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(41, ImageGenLayerControlsComponent_For_5_For_42_Template, 1, 1, null, null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 22);
    \u0275\u0275repeaterCreate(44, ImageGenLayerControlsComponent_For_5_For_45_Template, 1, 6, "button", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(46, "input", 24);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275listener("input", function ImageGenLayerControlsComponent_For_5_Template_input_input_46_listener($event) {
      const block_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setBlockColour(block_r2.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "mat-slide-toggle", 13);
    \u0275\u0275listener("ngModelChange", function ImageGenLayerControlsComponent_For_5_Template_mat_slide_toggle_ngModelChange_49_listener($event) {
      const block_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.patchBlock(block_r2.id, { panel: $event }));
    });
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const block_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", block_r2.text)("placeholder", \u0275\u0275pipeBind1(4, 23, ctx_r2.placeholderFor(block_r2.role)));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 25, ctx_r2.placeholderFor(block_r2.role)));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.state().blocks.length < 2)("matTooltip", \u0275\u0275pipeBind1(7, 27, "SIGNAGE_MANAGER.IMAGE_GEN_REMOVE_TEXT"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", block_r2.role);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 29, "SIGNAGE_MANAGER.IMAGE_GEN_TEXT_SIZE"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 31, "SIGNAGE_MANAGER.IMAGE_GEN_ROLE_HEADLINE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 33, "SIGNAGE_MANAGER.IMAGE_GEN_ROLE_SUBHEADING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 35, "SIGNAGE_MANAGER.IMAGE_GEN_ROLE_BODY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", block_r2.align);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(25, 37, "SIGNAGE_MANAGER.IMAGE_GEN_TEXT_ALIGN"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 39, "SIGNAGE_MANAGER.IMAGE_GEN_ALIGN_LEFT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 41, "SIGNAGE_MANAGER.IMAGE_GEN_ALIGN_CENTRE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 43, "SIGNAGE_MANAGER.IMAGE_GEN_ALIGN_RIGHT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", block_r2.font);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(37, 45, "SIGNAGE_MANAGER.IMAGE_GEN_TEXT_FONT"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 47, ctx_r2.brand_font_label()));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.fonts);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.palette());
    \u0275\u0275advance(2);
    \u0275\u0275property("value", block_r2.colour)("matTooltip", \u0275\u0275pipeBind1(47, 49, "SIGNAGE_MANAGER.IMAGE_GEN_TEXT_ANY_COLOUR"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(48, 51, "SIGNAGE_MANAGER.IMAGE_GEN_TEXT_ANY_COLOUR"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", block_r2.panel);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 53, "SIGNAGE_MANAGER.IMAGE_GEN_TEXT_PANEL"), " ");
  }
}
function ImageGenLayerControlsComponent_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function ImageGenLayerControlsComponent_Conditional_10_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      \u0275\u0275nextContext(2);
      const logo_input_r8 = \u0275\u0275reference(13);
      return \u0275\u0275resetView(logo_input_r8.click());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.uploading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r2.uploading() ? "SIGNAGE_MANAGER.IMAGE_GEN_LOGO_UPLOADING" : "SIGNAGE_MANAGER.IMAGE_GEN_ADD_LOGO"), " ");
  }
}
function ImageGenLayerControlsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ImageGenLayerControlsComponent_Conditional_10_Conditional_3_Template, 3, 4, "button", 28);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, ctx_r2.no_logo_note()));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.can_set_logo() ? 3 : -1);
  }
}
function ImageGenLayerControlsComponent_Conditional_11_Conditional_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 35)(1, "mat-select", 13);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function ImageGenLayerControlsComponent_Conditional_11_Conditional_3_Conditional_15_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.patch({ logo_choice: $event }));
    });
    \u0275\u0275elementStart(3, "mat-option", 36);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-option", 37);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-option", 38);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.state().logo_choice);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 5, "SIGNAGE_MANAGER.IMAGE_GEN_LOGO_VERSION"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 7, "SIGNAGE_MANAGER.IMAGE_GEN_LOGO_AUTO"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, "SIGNAGE_MANAGER.BRAND_LOGO_ON_LIGHT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 11, "SIGNAGE_MANAGER.BRAND_LOGO_ON_DARK"));
  }
}
function ImageGenLayerControlsComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 30)(1, "mat-select", 13);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function ImageGenLayerControlsComponent_Conditional_11_Conditional_3_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.patch({ logo_position: $event }));
    });
    \u0275\u0275elementStart(3, "mat-option", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-option", 32);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-option", 33);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-option", 34);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, ImageGenLayerControlsComponent_Conditional_11_Conditional_3_Conditional_15_Template, 12, 13, "mat-form-field", 35);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.state().logo_position);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 7, "SIGNAGE_MANAGER.IMAGE_GEN_LOGO_POSITION"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 9, "SIGNAGE_MANAGER.IMAGE_GEN_POS_BOTTOM_RIGHT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 11, "SIGNAGE_MANAGER.IMAGE_GEN_POS_BOTTOM_LEFT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 13, "SIGNAGE_MANAGER.IMAGE_GEN_POS_TOP_RIGHT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 15, "SIGNAGE_MANAGER.IMAGE_GEN_POS_TOP_LEFT"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.has_both_logos() ? 15 : -1);
  }
}
function ImageGenLayerControlsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-slide-toggle", 13);
    \u0275\u0275listener("ngModelChange", function ImageGenLayerControlsComponent_Conditional_11_Template_mat_slide_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.patch({ logo: $event }));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(3, ImageGenLayerControlsComponent_Conditional_11_Conditional_3_Template, 16, 17);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r2.state().logo);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "SIGNAGE_MANAGER.IMAGE_GEN_SHOW_LOGO"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.state().logo ? 3 : -1);
  }
}
var FIRST_Y = 0.06;
var BLOCK_GAP = 0.18;
function newTextBlock(role, index = 0) {
  return {
    id: `${Date.now()}-${Math.round(Math.random() * 1e6)}`,
    text: "",
    role,
    x: 0.06,
    y: FIRST_Y + BLOCK_GAP * index,
    align: "left",
    colour: "#ffffff",
    font: "",
    panel: true
  };
}
var ImageGenLayerControlsComponent = class _ImageGenLayerControlsComponent {
  constructor() {
    this.state = input.required(
      ...ngDevMode ? [{ debugName: "state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.logo_on_light = input(
      "",
      ...ngDevMode ? [{ debugName: "logo_on_light" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.logo_on_dark = input(
      "",
      ...ngDevMode ? [{ debugName: "logo_on_dark" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.brand = input(
      null,
      ...ngDevMode ? [{ debugName: "brand" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.uploading = input(
      false,
      ...ngDevMode ? [{ debugName: "uploading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_set_logo = input(
      true,
      ...ngDevMode ? [{ debugName: "can_set_logo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.branding_editing = input(
      true,
      ...ngDevMode ? [{ debugName: "branding_editing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.changed = output();
    this.logo_picked = output({ alias: "logoPicked" });
    this.has_logo = computed(
      () => !!(this.logo_on_light() || this.logo_on_dark()),
      ...ngDevMode ? [{ debugName: "has_logo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_both_logos = computed(
      () => !!this.logo_on_light() && !!this.logo_on_dark(),
      ...ngDevMode ? [{ debugName: "has_both_logos" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.no_logo_note = computed(
      () => this.can_set_logo() ? "SIGNAGE_MANAGER.IMAGE_GEN_NO_LOGO_YET" : this.branding_editing() ? "SIGNAGE_MANAGER.IMAGE_GEN_NO_LOGO_ADMIN" : "SIGNAGE_MANAGER.IMAGE_GEN_NO_LOGO_LOCKED",
      ...ngDevMode ? [{ debugName: "no_logo_note" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.fonts = BRAND_FONTS;
    this.brand_font_label = computed(
      () => {
        const font = this.brand()?.font;
        const family = typeof font === "string" ? font : font?.family;
        return family || "SIGNAGE_MANAGER.IMAGE_GEN_TEXT_BRAND_FONT";
      },
      ...ngDevMode ? [{ debugName: "brand_font_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.palette = computed(
      () => {
        const colours = Object.values(this.brand()?.palette || {});
        return [
          ...new Set(["#ffffff", "#1b2420", ...colours].map(hexColour).filter(Boolean))
        ];
      },
      ...ngDevMode ? [{ debugName: "palette" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  patch(changes) {
    this.changed.emit(__spreadValues(__spreadValues({}, this.state()), changes));
  }
  patchBlock(id, changes) {
    this.patch({
      blocks: this.state().blocks.map((block) => block.id === id ? __spreadValues(__spreadValues({}, block), changes) : block)
    });
  }
  setBlockColour(id, event) {
    const input2 = event.target;
    if (input2 instanceof HTMLInputElement) {
      this.patchBlock(id, { colour: input2.value });
    }
  }
  addBlock() {
    const blocks = this.state().blocks;
    const role = blocks.length === 1 ? "subheading" : "body";
    this.patch({ blocks: [...blocks, newTextBlock(role, blocks.length)] });
  }
  removeBlock(id) {
    if (this.state().blocks.length < 2)
      return;
    this.patch({
      blocks: this.state().blocks.filter((block) => block.id !== id)
    });
  }
  pickLogo(event) {
    const input2 = event.target;
    const file = input2.files?.[0];
    input2.value = "";
    if (file)
      this.logo_picked.emit(file);
  }
  placeholderFor(role) {
    return role === "headline" ? "SIGNAGE_MANAGER.IMAGE_GEN_HEADLINE" : role === "subheading" ? "SIGNAGE_MANAGER.IMAGE_GEN_SUBHEADING" : "SIGNAGE_MANAGER.IMAGE_GEN_BODY_TEXT";
  }
  static {
    this.\u0275fac = function ImageGenLayerControlsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImageGenLayerControlsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageGenLayerControlsComponent, selectors: [["image-gen-layer-controls"]], inputs: { state: [1, "state"], logo_on_light: [1, "logo_on_light"], logo_on_dark: [1, "logo_on_dark"], brand: [1, "brand"], uploading: [1, "uploading"], can_set_logo: [1, "can_set_logo"], branding_editing: [1, "branding_editing"] }, outputs: { changed: "changed", logo_picked: "logoPicked" }, decls: 15, vars: 10, consts: [["logo_input", ""], [1, "flex", "flex-col", "gap-3"], [1, "text-base-content/60", "m-0", "text-xs"], [1, "border-base-300", "flex", "flex-col", "gap-2", "rounded-lg", "border", "p-3"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", "self-start", 3, "click"], [1, "border-base-300", "flex", "flex-wrap", "items-center", "gap-3", "rounded-lg", "border", "p-3"], ["type", "file", "accept", "image/png,image/jpeg,image/webp,image/svg+xml", 1, "sr-only", 3, "change"], [1, "flex", "items-start", "gap-2"], ["appearance", "outline", 1, "no-subscript", "flex-1"], ["matInput", "", "rows", "2", 3, "ngModelChange", "ngModel", "placeholder"], ["icon", "", "default", "", "error", "", "type", "button", 3, "click", "disabled", "matTooltip"], [1, "flex", "flex-wrap", "items-center", "gap-2"], ["appearance", "outline", 1, "no-subscript", "w-32"], [3, "ngModelChange", "ngModel"], ["value", "headline"], ["value", "subheading"], ["value", "body"], ["value", "left"], ["value", "centre"], ["value", "right"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["value", ""], [1, "flex", "flex-wrap", "items-center", "gap-3"], ["type", "button", 1, "border-base-300", "ring-primary", "ring-offset-base-100", "h-6", "w-6", "rounded-full", "border", "ring-offset-2", 3, "background", "ring-2"], ["type", "color", 1, "border-base-300", "h-6", "w-8", "cursor-pointer", "rounded", "border", "bg-transparent", "p-0", 3, "input", "value", "matTooltip"], [3, "value"], ["type", "button", 1, "border-base-300", "ring-primary", "ring-offset-base-100", "h-6", "w-6", "rounded-full", "border", "ring-offset-2", 3, "click"], [1, "text-sm"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", 3, "disabled"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", 3, "click", "disabled"], ["appearance", "outline", 1, "no-subscript", "w-36"], ["value", "bottom-right"], ["value", "bottom-left"], ["value", "top-right"], ["value", "top-left"], ["appearance", "outline", 1, "no-subscript", "w-44"], ["value", "auto"], ["value", "on_light"], ["value", "on_dark"]], template: function ImageGenLayerControlsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "p", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(4, ImageGenLayerControlsComponent_For_5_Template, 52, 55, "div", 3, _forTrack0);
        \u0275\u0275elementStart(6, "button", 4);
        \u0275\u0275listener("click", function ImageGenLayerControlsComponent_Template_button_click_6_listener() {
          return ctx.addBlock();
        });
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275conditionalCreate(10, ImageGenLayerControlsComponent_Conditional_10_Template, 4, 4)(11, ImageGenLayerControlsComponent_Conditional_11_Template, 4, 5);
        \u0275\u0275elementStart(12, "input", 6, 0);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275listener("change", function ImageGenLayerControlsComponent_Template_input_change_12_listener($event) {
          return ctx.pickLogo($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "SIGNAGE_MANAGER.IMAGE_GEN_TEXT_DRAG_HINT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.state().blocks);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 6, "SIGNAGE_MANAGER.IMAGE_GEN_ADD_TEXT"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.has_logo() ? 10 : 11);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 8, "SIGNAGE_MANAGER.IMAGE_GEN_ADD_LOGO"));
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatSlideToggleModule,
      MatSlideToggle,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageGenLayerControlsComponent, [{
    type: Component,
    args: [{
      selector: "image-gen-layer-controls",
      template: `
        <div class="flex flex-col gap-3">
            <p class="text-base-content/60 m-0 text-xs">
                {{ 'SIGNAGE_MANAGER.IMAGE_GEN_TEXT_DRAG_HINT' | translate }}
            </p>

            @for (block of state().blocks; track block.id) {
                <div
                    class="border-base-300 flex flex-col gap-2 rounded-lg border p-3"
                >
                    <div class="flex items-start gap-2">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript flex-1"
                        >
                            <textarea
                                matInput
                                rows="2"
                                [ngModel]="block.text"
                                (ngModelChange)="
                                    patchBlock(block.id, { text: $event })
                                "
                                [placeholder]="
                                    placeholderFor(block.role) | translate
                                "
                                [attr.aria-label]="
                                    placeholderFor(block.role) | translate
                                "
                            ></textarea>
                        </mat-form-field>
                        <button
                            icon
                            default
                            error
                            type="button"
                            [disabled]="state().blocks.length < 2"
                            [matTooltip]="
                                'SIGNAGE_MANAGER.IMAGE_GEN_REMOVE_TEXT'
                                    | translate
                            "
                            (click)="removeBlock(block.id)"
                        >
                            <icon>delete</icon>
                        </button>
                    </div>

                    <div class="flex flex-wrap items-center gap-2">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-32"
                        >
                            <mat-select
                                [ngModel]="block.role"
                                (ngModelChange)="
                                    patchBlock(block.id, { role: $event })
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.IMAGE_GEN_TEXT_SIZE'
                                        | translate
                                "
                            >
                                <mat-option value="headline">{{
                                    'SIGNAGE_MANAGER.IMAGE_GEN_ROLE_HEADLINE'
                                        | translate
                                }}</mat-option>
                                <mat-option value="subheading">{{
                                    'SIGNAGE_MANAGER.IMAGE_GEN_ROLE_SUBHEADING'
                                        | translate
                                }}</mat-option>
                                <mat-option value="body">{{
                                    'SIGNAGE_MANAGER.IMAGE_GEN_ROLE_BODY'
                                        | translate
                                }}</mat-option>
                            </mat-select>
                        </mat-form-field>

                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-32"
                        >
                            <mat-select
                                [ngModel]="block.align"
                                (ngModelChange)="
                                    patchBlock(block.id, { align: $event })
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.IMAGE_GEN_TEXT_ALIGN'
                                        | translate
                                "
                            >
                                <mat-option value="left">{{
                                    'SIGNAGE_MANAGER.IMAGE_GEN_ALIGN_LEFT'
                                        | translate
                                }}</mat-option>
                                <mat-option value="centre">{{
                                    'SIGNAGE_MANAGER.IMAGE_GEN_ALIGN_CENTRE'
                                        | translate
                                }}</mat-option>
                                <mat-option value="right">{{
                                    'SIGNAGE_MANAGER.IMAGE_GEN_ALIGN_RIGHT'
                                        | translate
                                }}</mat-option>
                            </mat-select>
                        </mat-form-field>

                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <mat-select
                                [ngModel]="block.font"
                                (ngModelChange)="
                                    patchBlock(block.id, { font: $event })
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.IMAGE_GEN_TEXT_FONT'
                                        | translate
                                "
                            >
                                <mat-option value="">{{
                                    brand_font_label() | translate
                                }}</mat-option>
                                @for (option of fonts; track option.family) {
                                    @if (option.family) {
                                        <mat-option [value]="option.family">{{
                                            option.label
                                        }}</mat-option>
                                    }
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>

                    <div class="flex flex-wrap items-center gap-3">
                        @for (colour of palette(); track colour) {
                            <button
                                type="button"
                                class="border-base-300 ring-primary ring-offset-base-100 h-6 w-6 rounded-full border ring-offset-2"
                                [style.background]="colour"
                                [class.ring-2]="block.colour === colour"
                                [attr.aria-pressed]="block.colour === colour"
                                (click)="patchBlock(block.id, { colour })"
                                [attr.aria-label]="colour"
                            ></button>
                        }
                        <input
                            type="color"
                            class="border-base-300 h-6 w-8 cursor-pointer rounded border bg-transparent p-0"
                            [value]="block.colour"
                            (input)="setBlockColour(block.id, $event)"
                            [matTooltip]="
                                'SIGNAGE_MANAGER.IMAGE_GEN_TEXT_ANY_COLOUR'
                                    | translate
                            "
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.IMAGE_GEN_TEXT_ANY_COLOUR'
                                    | translate
                            "
                        />
                        <mat-slide-toggle
                            [ngModel]="block.panel"
                            (ngModelChange)="
                                patchBlock(block.id, { panel: $event })
                            "
                        >
                            {{
                                'SIGNAGE_MANAGER.IMAGE_GEN_TEXT_PANEL'
                                    | translate
                            }}
                        </mat-slide-toggle>
                    </div>
                </div>
            }

            <button
                btn
                matRipple
                type="button"
                class="inverse self-start"
                (click)="addBlock()"
            >
                {{ 'SIGNAGE_MANAGER.IMAGE_GEN_ADD_TEXT' | translate }}
            </button>

            <div
                class="border-base-300 flex flex-wrap items-center gap-3 rounded-lg border p-3"
            >
                @if (!has_logo()) {
                    <span class="text-sm">{{
                        no_logo_note() | translate
                    }}</span>
                    @if (can_set_logo()) {
                        <button
                            btn
                            matRipple
                            type="button"
                            class="inverse"
                            [disabled]="uploading()"
                            (click)="logo_input.click()"
                        >
                            {{
                                (uploading()
                                    ? 'SIGNAGE_MANAGER.IMAGE_GEN_LOGO_UPLOADING'
                                    : 'SIGNAGE_MANAGER.IMAGE_GEN_ADD_LOGO'
                                ) | translate
                            }}
                        </button>
                    }
                } @else {
                    <mat-slide-toggle
                        [ngModel]="state().logo"
                        (ngModelChange)="patch({ logo: $event })"
                    >
                        {{ 'SIGNAGE_MANAGER.IMAGE_GEN_SHOW_LOGO' | translate }}
                    </mat-slide-toggle>
                    @if (state().logo) {
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-36"
                        >
                            <mat-select
                                [ngModel]="state().logo_position"
                                (ngModelChange)="
                                    patch({ logo_position: $event })
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.IMAGE_GEN_LOGO_POSITION'
                                        | translate
                                "
                            >
                                <mat-option value="bottom-right">{{
                                    'SIGNAGE_MANAGER.IMAGE_GEN_POS_BOTTOM_RIGHT'
                                        | translate
                                }}</mat-option>
                                <mat-option value="bottom-left">{{
                                    'SIGNAGE_MANAGER.IMAGE_GEN_POS_BOTTOM_LEFT'
                                        | translate
                                }}</mat-option>
                                <mat-option value="top-right">{{
                                    'SIGNAGE_MANAGER.IMAGE_GEN_POS_TOP_RIGHT'
                                        | translate
                                }}</mat-option>
                                <mat-option value="top-left">{{
                                    'SIGNAGE_MANAGER.IMAGE_GEN_POS_TOP_LEFT'
                                        | translate
                                }}</mat-option>
                            </mat-select>
                        </mat-form-field>

                        <!-- both versions exist, so which one is a real choice -->
                        @if (has_both_logos()) {
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-44"
                            >
                                <mat-select
                                    [ngModel]="state().logo_choice"
                                    (ngModelChange)="
                                        patch({ logo_choice: $event })
                                    "
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.IMAGE_GEN_LOGO_VERSION'
                                            | translate
                                    "
                                >
                                    <mat-option value="auto">{{
                                        'SIGNAGE_MANAGER.IMAGE_GEN_LOGO_AUTO'
                                            | translate
                                    }}</mat-option>
                                    <mat-option value="on_light">{{
                                        'SIGNAGE_MANAGER.BRAND_LOGO_ON_LIGHT'
                                            | translate
                                    }}</mat-option>
                                    <mat-option value="on_dark">{{
                                        'SIGNAGE_MANAGER.BRAND_LOGO_ON_DARK'
                                            | translate
                                    }}</mat-option>
                                </mat-select>
                            </mat-form-field>
                        }
                    }
                }
                <input
                    #logo_input
                    type="file"
                    class="sr-only"
                    accept="image/png,image/jpeg,image/webp,image/svg+xml"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.IMAGE_GEN_ADD_LOGO' | translate
                    "
                    (change)="pickLogo($event)"
                />
            </div>
        </div>
    `,
      imports: [
        FormsModule,
        IconComponent,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTooltipModule,
        TranslatePipe
      ]
    }]
  }], null, { state: [{ type: Input, args: [{ isSignal: true, alias: "state", required: true }] }], logo_on_light: [{ type: Input, args: [{ isSignal: true, alias: "logo_on_light", required: false }] }], logo_on_dark: [{ type: Input, args: [{ isSignal: true, alias: "logo_on_dark", required: false }] }], brand: [{ type: Input, args: [{ isSignal: true, alias: "brand", required: false }] }], uploading: [{ type: Input, args: [{ isSignal: true, alias: "uploading", required: false }] }], can_set_logo: [{ type: Input, args: [{ isSignal: true, alias: "can_set_logo", required: false }] }], branding_editing: [{ type: Input, args: [{ isSignal: true, alias: "branding_editing", required: false }] }], changed: [{ type: Output, args: ["changed"] }], logo_picked: [{ type: Output, args: ["logoPicked"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageGenLayerControlsComponent, { className: "ImageGenLayerControlsComponent", filePath: "apps/signage-manager/src/app/image-gen/image-gen-layer-controls.component.ts", lineNumber: 353 });
})();

// apps/signage-manager/src/app/image-gen/image-gen-layer.component.ts
var _c0 = ["canvas"];
var ROLE_SIZE = {
  headline: 0.11,
  subheading: 0.055,
  body: 0.038
};
var ROLE_LEADING = {
  headline: 1.12,
  subheading: 1.3,
  body: 1.45
};
var NUDGE = 5e-3;
var NUDGE_FAST = 0.02;
var COMPOSITE_TYPE = ["image/jpeg", 0.9];
var ImageGenLayerComponent = class _ImageGenLayerComponent {
  constructor() {
    this.image_url = input.required(
      ...ngDevMode ? [{ debugName: "image_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.logo_on_light = input(
      "",
      ...ngDevMode ? [{ debugName: "logo_on_light" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.logo_on_dark = input(
      "",
      ...ngDevMode ? [{ debugName: "logo_on_dark" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.brand = input(
      null,
      ...ngDevMode ? [{ debugName: "brand" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.state = input.required(
      ...ngDevMode ? [{ debugName: "state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.changed = output();
    this.failed = output();
    this.hover_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "hover_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.drag_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "drag_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "selected_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._canvas = viewChild(
      "canvas",
      ...ngDevMode ? [{ debugName: "_canvas" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._artwork = null;
    this._artwork_url = "";
    this._logos = {
      on_light: null,
      on_dark: null
    };
    this._boxes = /* @__PURE__ */ new Map();
    this._grab = { x: 0, y: 0 };
    this._auto_logo = { key: "", dark: false };
    this._brand_family = computed(
      () => {
        const font = this.brand()?.font;
        return typeof font === "string" ? font : font?.family || "";
      },
      ...ngDevMode ? [{ debugName: "_brand_family" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._families = computed(() => [
      ...new Set([
        this._brand_family(),
        ...this.state().blocks.map((block) => block.font)
      ].filter(Boolean))
    ].sort(), __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_families" } : (
      /* istanbul ignore next */
      {}
    )), { equal: (a, b) => a.join("\n") === b.join("\n") }));
    effect(() => {
      const url = this.image_url();
      if (url)
        this._loadArtwork(url);
    });
    effect(() => {
      const url = this.logo_on_light();
      if (url)
        this._loadLogo("on_light", url);
    });
    effect(() => {
      const url = this.logo_on_dark();
      if (url)
        this._loadLogo("on_dark", url);
    });
    effect(() => {
      for (const family of this._families()) {
        ensureBrandFont(family).then(() => this._draw());
      }
    });
    effect(() => {
      this.state();
      this.hover_id();
      this.drag_id();
      this.selected_id();
      this._draw();
    });
  }
  /**
   * The composited image, at the artwork's native size. A JPEG, as the
   * artwork is opaque: a 1536x1024 poster is about 400 KB this way and
   * 3 to 4 MB as a PNG, and every display downloads it.
   */
  toBlob() {
    const canvas = this._canvas()?.nativeElement;
    if (!canvas || !this._artwork)
      return Promise.resolve(null);
    const hovered = this.hover_id();
    const selected = this.selected_id();
    this.hover_id.set("");
    this.selected_id.set("");
    this._draw();
    return new Promise((resolve) => canvas.toBlob((blob) => {
      this.hover_id.set(hovered);
      this.selected_id.set(selected);
      resolve(blob);
    }, ...COMPOSITE_TYPE));
  }
  onPointerDown(event) {
    const point = this._toArtwork(event);
    if (!point)
      return;
    const block = this._blockAt(point.x, point.y);
    this.selected_id.set(block?.id || "");
    if (!block)
      return;
    const box = this._boxes.get(block.id);
    if (!box)
      return;
    this._grab = { x: point.x - box.left, y: point.y - box.top };
    this.drag_id.set(block.id);
    this._canvas()?.nativeElement.setPointerCapture(event.pointerId);
    event.preventDefault();
  }
  onPointerMove(event) {
    const point = this._toArtwork(event);
    if (!point)
      return;
    const dragging = this.drag_id();
    if (!dragging) {
      this.hover_id.set(this._blockAt(point.x, point.y)?.id || "");
      return;
    }
    const canvas = this._canvas()?.nativeElement;
    const box = this._boxes.get(dragging);
    if (!canvas || !box)
      return;
    this._move(dragging, (point.x - this._grab.x) / canvas.width, (point.y - this._grab.y) / canvas.height, box);
  }
  onPointerUp(event) {
    if (!this.drag_id())
      return;
    this._canvas()?.nativeElement.releasePointerCapture(event.pointerId);
    this.drag_id.set("");
  }
  onPointerLeave() {
    if (!this.drag_id())
      this.hover_id.set("");
  }
  /** the same moves without a mouse, for whoever cannot use one */
  onKeyDown(event) {
    if (event.key === "Tab") {
      const blocks = this.state().blocks.filter((b) => b.text.trim());
      if (blocks.length < 2)
        return;
      const at = blocks.findIndex((b) => b.id === this.selected_id());
      const next = event.shiftKey ? at - 1 : at + 1;
      if (next < 0 || next >= blocks.length) {
        this.selected_id.set("");
        return;
      }
      event.preventDefault();
      this.selected_id.set(blocks[next].id);
      this._draw();
      return;
    }
    const id = this.selected_id() || this.state().blocks[0]?.id;
    const box = id ? this._boxes.get(id) : null;
    const block = this.state().blocks.find((item) => item.id === id);
    if (!box || !block)
      return;
    const canvas = this._canvas()?.nativeElement;
    if (!canvas)
      return;
    const step = event.shiftKey ? NUDGE_FAST : NUDGE;
    let x = box.left / canvas.width;
    let y = box.top / canvas.height;
    if (event.key === "ArrowLeft")
      x -= step;
    else if (event.key === "ArrowRight")
      x += step;
    else if (event.key === "ArrowUp")
      y -= step;
    else if (event.key === "ArrowDown")
      y += step;
    else
      return;
    event.preventDefault();
    this.selected_id.set(id);
    this._move(id, x, y, box);
  }
  /** keep the whole block on the artwork, then write the new position out */
  _move(id, x, y, box) {
    const canvas = this._canvas()?.nativeElement;
    if (!canvas)
      return;
    const max_x = Math.max(0, 1 - box.width / canvas.width);
    const max_y = Math.max(0, 1 - box.height / canvas.height);
    const next = {
      x: Math.min(Math.max(x, 0), max_x),
      y: Math.min(Math.max(y, 0), max_y)
    };
    const state = this.state();
    this.changed.emit(__spreadProps(__spreadValues({}, state), {
      blocks: state.blocks.map((block) => block.id === id ? __spreadValues(__spreadValues({}, block), next) : block)
    }));
  }
  _toArtwork(event) {
    const canvas = this._canvas()?.nativeElement;
    if (!canvas)
      return null;
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height)
      return null;
    return {
      x: (event.clientX - rect.left) / rect.width * canvas.width,
      y: (event.clientY - rect.top) / rect.height * canvas.height
    };
  }
  /** last drawn wins, so the block on top is the one you grab */
  _blockAt(x, y) {
    const blocks = this.state().blocks;
    for (let index = blocks.length - 1; index >= 0; index--) {
      const box = this._boxes.get(blocks[index].id);
      if (!box)
        continue;
      if (x >= box.left && x <= box.left + box.width && y >= box.top && y <= box.top + box.height) {
        return blocks[index];
      }
    }
    return null;
  }
  _loadArtwork(url) {
    const image = new Image();
    image.crossOrigin = "anonymous";
    this._artwork = null;
    this._artwork_url = url;
    image.onerror = () => {
      if (this._artwork_url !== url)
        return;
      this._artwork = null;
      this.failed.emit();
    };
    image.onload = () => {
      if (this._artwork_url !== url)
        return;
      this._artwork = image;
      const canvas = this._canvas()?.nativeElement;
      if (canvas) {
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
      }
      this._draw();
    };
    image.src = url;
  }
  _loadLogo(slot, url) {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => {
      this._logos[slot] = image;
      this._draw();
    };
    image.src = url;
  }
  _draw() {
    const canvas = this._canvas()?.nativeElement;
    const artwork = this._artwork;
    if (!canvas || !artwork)
      return;
    const context = canvas.getContext("2d");
    if (!context)
      return;
    const { width, height } = canvas;
    context.clearRect(0, 0, width, height);
    context.drawImage(artwork, 0, 0, width, height);
    const state = this.state();
    if (!state)
      return;
    if (state.logo)
      this._drawLogo(context, width, height, state);
    this._drawBlocks(context, width, height, state);
  }
  _drawBlocks(context, width, height, state) {
    this._boxes.clear();
    const wrap_at = width * 0.88;
    for (const block of state.blocks) {
      const text = block.text.trim();
      if (!text)
        continue;
      const size = Math.round(height * ROLE_SIZE[block.role]);
      const weight = block.role === "headline" ? "700" : "400";
      context.font = `${weight} ${size}px ${this._fontFamily(block.font)}`;
      const lines = this._wrap(context, text, wrap_at);
      const leading = Math.round(size * ROLE_LEADING[block.role]);
      const line_height = Math.round(size * 1.2);
      const box_width = Math.max(...lines.map((line) => context.measureText(line).width));
      const box_height = line_height + leading * (lines.length - 1);
      const pad = Math.round(size * 0.35);
      const box = {
        left: Math.max(pad, Math.min(block.x * width, width - box_width - pad)),
        top: Math.max(pad * 0.6, Math.min(block.y * height, height - box_height - pad * 0.6)),
        width: box_width,
        height: box_height
      };
      this._boxes.set(block.id, box);
      if (block.panel) {
        context.fillStyle = this._panelColour(block.colour);
        context.fillRect(box.left - pad, box.top - pad * 0.6, box.width + pad * 2, box.height + pad * 1.2);
      }
      context.textAlign = block.align === "centre" ? "center" : block.align;
      context.textBaseline = "top";
      const x = block.align === "left" ? box.left : block.align === "right" ? box.left + box.width : box.left + box.width / 2;
      context.fillStyle = block.colour;
      const offset = (line_height - size) / 2;
      lines.forEach((line, index) => {
        context.fillText(line, x, box.top + offset + leading * index);
      });
      if (this.hover_id() === block.id || this.drag_id() === block.id || this.selected_id() === block.id) {
        this._outline(context, box, pad);
      }
    }
  }
  /** shows what you are about to pick up; never drawn into the saved file */
  _outline(context, box, pad) {
    context.save();
    context.strokeStyle = "rgba(255, 255, 255, 0.9)";
    context.lineWidth = Math.max(2, box.height * 0.02);
    context.setLineDash([context.lineWidth * 3, context.lineWidth * 3]);
    context.strokeRect(box.left - pad, box.top - pad * 0.6, box.width + pad * 2, box.height + pad * 1.2);
    context.restore();
  }
  _drawLogo(context, width, height, state) {
    const margin = Math.round(width * 0.04);
    const target_width = Math.round(width * state.logo_scale);
    const probe = this._logos.on_light || this._logos.on_dark;
    if (!probe)
      return;
    const nominal = Math.round(width * state.logo_scale * 0.4);
    const logo = this._logoFor(state, context, {
      left: state.logo_position.endsWith("left") ? margin : width - target_width - margin,
      top: state.logo_position.startsWith("top") ? margin : height - nominal - margin,
      width: target_width,
      height: nominal
    });
    if (!logo)
      return;
    const scale = target_width / (logo.naturalWidth || target_width);
    const target_height = Math.round(logo.naturalHeight * scale);
    const left = state.logo_position.endsWith("left") ? margin : width - target_width - margin;
    const top = state.logo_position.startsWith("top") ? margin : height - target_height - margin;
    context.drawImage(logo, left, top, target_width, target_height);
  }
  /**
   * On auto, the artwork under the logo decides: a dark corner takes the
   * light version and a light corner takes the dark one.
   */
  _logoFor(state, context, box) {
    let choice = state.logo_choice;
    if (choice === "auto") {
      const key = `${this._artwork_url}|${box.left},${box.top},${box.width},${box.height}`;
      if (this._auto_logo.key !== key) {
        this._auto_logo = {
          key,
          dark: this._backgroundIsDark(context, box)
        };
      }
      choice = this._auto_logo.dark ? "on_dark" : "on_light";
    }
    return this._logos[choice] || this._logos.on_light || this._logos.on_dark;
  }
  _backgroundIsDark(context, box) {
    try {
      const { data } = context.getImageData(Math.max(0, Math.round(box.left)), Math.max(0, Math.round(box.top)), Math.max(1, Math.round(box.width)), Math.max(1, Math.round(box.height)));
      let total = 0;
      let count = 0;
      for (let index = 0; index < data.length; index += 16) {
        total += perceivedLightness(data[index], data[index + 1], data[index + 2]);
        count++;
      }
      return count ? total / count < 140 : false;
    } catch {
      return false;
    }
  }
  /** a translucent band behind the words, tinted away from the text colour */
  _panelColour(text_colour) {
    return this._isLight(text_colour) ? "rgba(0, 0, 0, 0.45)" : "rgba(255, 255, 255, 0.6)";
  }
  _isLight(colour) {
    const hex = hexColour(colour);
    if (!hex)
      return true;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return perceivedLightness(r, g, b) > 140;
  }
  _fontFamily(chosen) {
    const family = chosen || this._brand_family();
    return family ? `"${family}", system-ui, sans-serif` : "system-ui, sans-serif";
  }
  /**
   * Line breaks the author typed are kept, including the empty ones.
   * Anything still too wide for the artwork is wrapped on top of that.
   */
  _wrap(context, text, max_width) {
    const lines = [];
    for (const paragraph of text.split("\n")) {
      const words = paragraph.trim().split(/\s+/).filter(Boolean);
      if (!words.length) {
        lines.push("");
        continue;
      }
      let current = "";
      for (const word of words) {
        const candidate = current ? `${current} ${word}` : word;
        if (context.measureText(candidate).width > max_width && current) {
          lines.push(current);
          current = word;
        } else {
          current = candidate;
        }
      }
      if (current)
        lines.push(current);
    }
    return lines;
  }
  static {
    this.\u0275fac = function ImageGenLayerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImageGenLayerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageGenLayerComponent, selectors: [["image-gen-layer"]], viewQuery: function ImageGenLayerComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._canvas, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { image_url: [1, "image_url"], logo_on_light: [1, "logo_on_light"], logo_on_dark: [1, "logo_on_dark"], brand: [1, "brand"], state: [1, "state"] }, outputs: { changed: "changed", failed: "failed" }, decls: 3, vars: 7, consts: [["canvas", ""], ["tabindex", "0", 1, "max-h-full", "max-w-full", "touch-none", 3, "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerleave", "keydown"]], template: function ImageGenLayerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "canvas", 1, 0);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275domListener("pointerdown", function ImageGenLayerComponent_Template_canvas_pointerdown_0_listener($event) {
          return ctx.onPointerDown($event);
        })("pointermove", function ImageGenLayerComponent_Template_canvas_pointermove_0_listener($event) {
          return ctx.onPointerMove($event);
        })("pointerup", function ImageGenLayerComponent_Template_canvas_pointerup_0_listener($event) {
          return ctx.onPointerUp($event);
        })("pointercancel", function ImageGenLayerComponent_Template_canvas_pointercancel_0_listener($event) {
          return ctx.onPointerUp($event);
        })("pointerleave", function ImageGenLayerComponent_Template_canvas_pointerleave_0_listener() {
          return ctx.onPointerLeave();
        })("keydown", function ImageGenLayerComponent_Template_canvas_keydown_0_listener($event) {
          return ctx.onKeyDown($event);
        });
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("cursor-grab", ctx.hover_id() && !ctx.drag_id())("cursor-grabbing", !!ctx.drag_id());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 5, "SIGNAGE_MANAGER.IMAGE_GEN_LAYER_PREVIEW"));
      }
    }, dependencies: [TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 0;\n  min-width: 0;\n}\ncanvas[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid currentColor;\n  outline-offset: 2px;\n}\n/*# sourceMappingURL=image-gen-layer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageGenLayerComponent, [{
    type: Component,
    args: [{ selector: "image-gen-layer", template: `
        <canvas
            #canvas
            tabindex="0"
            class="max-h-full max-w-full touch-none"
            [class.cursor-grab]="hover_id() && !drag_id()"
            [class.cursor-grabbing]="!!drag_id()"
            [attr.aria-label]="
                'SIGNAGE_MANAGER.IMAGE_GEN_LAYER_PREVIEW' | translate
            "
            (pointerdown)="onPointerDown($event)"
            (pointermove)="onPointerMove($event)"
            (pointerup)="onPointerUp($event)"
            (pointercancel)="onPointerUp($event)"
            (pointerleave)="onPointerLeave()"
            (keydown)="onKeyDown($event)"
        ></canvas>
    `, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;ad7271488d3aad2d3bb190d663d631369be429a18654777910b68e25767b19cd;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/image-gen/image-gen-layer.component.ts */\n:host {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 0;\n  min-width: 0;\n}\ncanvas:focus-visible {\n  outline: 2px solid currentColor;\n  outline-offset: 2px;\n}\n/*# sourceMappingURL=image-gen-layer.component.css.map */\n"] }]
  }], () => [], { image_url: [{ type: Input, args: [{ isSignal: true, alias: "image_url", required: true }] }], logo_on_light: [{ type: Input, args: [{ isSignal: true, alias: "logo_on_light", required: false }] }], logo_on_dark: [{ type: Input, args: [{ isSignal: true, alias: "logo_on_dark", required: false }] }], brand: [{ type: Input, args: [{ isSignal: true, alias: "brand", required: false }] }], state: [{ type: Input, args: [{ isSignal: true, alias: "state", required: true }] }], changed: [{ type: Output, args: ["changed"] }], failed: [{ type: Output, args: ["failed"] }], _canvas: [{ type: ViewChild, args: ["canvas", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageGenLayerComponent, { className: "ImageGenLayerComponent", filePath: "apps/signage-manager/src/app/image-gen/image-gen-layer.component.ts", lineNumber: 93 });
})();

// apps/signage-manager/src/app/image-gen/image-gen-references.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function ImageGenReferencesComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "img", 7);
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 9);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ImageGenReferencesComponent_Conditional_6_For_2_Template_button_click_4_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removed.emit(item_r3.id));
    });
    \u0275\u0275elementStart(7, "icon", 10);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const \u0275$index_12_r5 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r3.url, \u0275\u0275sanitizeUrl)("alt", ctx_r3.numberedLabel(\u0275$index_12_r5, item_r3.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.offset() + \u0275$index_12_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 5, "SIGNAGE_MANAGER.IMAGE_GEN_REFERENCE_REMOVE"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 7, "SIGNAGE_MANAGER.IMAGE_GEN_REFERENCE_REMOVE") + " " + ctx_r3.numberedLabel(\u0275$index_12_r5, item_r3.name));
  }
}
function ImageGenReferencesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, ImageGenReferencesComponent_Conditional_6_For_2_Template, 9, 9, "div", 6, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.items());
  }
}
var ImageGenReferencesComponent = class _ImageGenReferencesComponent {
  constructor() {
    this.items = input.required(
      ...ngDevMode ? [{ debugName: "items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.uploading = input(
      false,
      ...ngDevMode ? [{ debugName: "uploading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max = input(
      8,
      ...ngDevMode ? [{ debugName: "max" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.title = input(
      "SIGNAGE_MANAGER.IMAGE_GEN_INCLUDE_IMAGES",
      ...ngDevMode ? [{ debugName: "title" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hint = input(
      "SIGNAGE_MANAGER.IMAGE_GEN_INCLUDE_IMAGES_HINT",
      ...ngDevMode ? [{ debugName: "hint" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.add_label = input(
      "SIGNAGE_MANAGER.IMAGE_GEN_REFERENCE_ADD",
      ...ngDevMode ? [{ debugName: "add_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset = input(
      0,
      ...ngDevMode ? [{ debugName: "offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.picked = output();
    this.removed = output();
  }
  numberedLabel(index, name) {
    return `${i18n("SIGNAGE_MANAGER.IMAGE_GEN_REFERENCE_NUMBER", {
      number: `${this.offset() + index + 1}`
    })}: ${name}`;
  }
  pick(event) {
    const input2 = event.target;
    const files = Array.from(input2.files || []);
    input2.value = "";
    const room = this.max() - this.items().length;
    if (files.length)
      this.picked.emit(files.slice(0, room));
  }
  static {
    this.\u0275fac = function ImageGenReferencesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImageGenReferencesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageGenReferencesComponent, selectors: [["image-gen-references"]], hostAttrs: [1, "flex", "flex-col", "gap-2"], inputs: { items: [1, "items"], uploading: [1, "uploading"], max: [1, "max"], title: [1, "title"], hint: [1, "hint"], add_label: [1, "add_label"], offset: [1, "offset"] }, outputs: { picked: "picked", removed: "removed" }, decls: 13, vars: 15, consts: [["picker", ""], [1, "m-0", "text-sm", "font-medium"], [1, "text-base-content/60", "m-0", "text-xs"], [1, "flex", "flex-wrap", "gap-2"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", "self-start", 3, "click", "disabled"], ["type", "file", "accept", "image/png,image/jpeg,image/webp", 1, "sr-only", 3, "change"], [1, "border-base-300", "bg-base-200", "relative", "h-16", "w-16", "overflow-hidden", "rounded-lg", "border"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], ["aria-hidden", "true", 1, "bg-base-content", "text-base-100", "absolute", "top-0", "left-0", "rounded-br", "px-1", "text-xs", "font-bold"], ["icon", "", "type", "button", 1, "bg-base-100/80", "absolute", "top-0", "right-0", "h-5", "w-5", "rounded-bl", "text-xs", 3, "click", "matTooltip"], [1, "text-sm"]], template: function ImageGenReferencesComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "p", 1);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 2);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, ImageGenReferencesComponent_Conditional_6_Template, 3, 0, "div", 3);
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function ImageGenReferencesComponent_Template_button_click_7_listener() {
          \u0275\u0275restoreView(_r1);
          const picker_r6 = \u0275\u0275reference(11);
          return \u0275\u0275resetView(picker_r6.click());
        });
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "input", 5, 0);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275listener("change", function ImageGenReferencesComponent_Template_input_change_10_listener($event) {
          return ctx.pick($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 7, ctx.title()), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 9, ctx.hint()), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.items().length ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.uploading() || ctx.items().length >= ctx.max());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 11, ctx.uploading() ? "SIGNAGE_MANAGER.IMAGE_GEN_REFERENCE_UPLOADING" : ctx.add_label()), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("multiple", ctx.max() > 1 ? "" : null)("aria-label", \u0275\u0275pipeBind1(12, 13, ctx.add_label()));
      }
    }, dependencies: [IconComponent, MatRippleModule, MatRipple, MatTooltipModule, MatTooltip, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageGenReferencesComponent, [{
    type: Component,
    args: [{
      selector: "image-gen-references",
      host: { class: "flex flex-col gap-2" },
      template: `
        <p class="m-0 text-sm font-medium">
            {{ title() | translate }}
        </p>
        <p class="text-base-content/60 m-0 text-xs">
            {{ hint() | translate }}
        </p>

        @if (items().length) {
            <div class="flex flex-wrap gap-2">
                @for (item of items(); track item.id; let index = $index) {
                    <div
                        class="border-base-300 bg-base-200 relative h-16 w-16 overflow-hidden rounded-lg border"
                    >
                        <img
                            [src]="item.url"
                            class="h-full w-full object-cover"
                            [alt]="numberedLabel(index, item.name)"
                        />
                        <span
                            aria-hidden="true"
                            class="bg-base-content text-base-100 absolute top-0 left-0 rounded-br px-1 text-xs font-bold"
                            >{{ offset() + index + 1 }}</span
                        >
                        <button
                            icon
                            type="button"
                            class="bg-base-100/80 absolute top-0 right-0 h-5 w-5 rounded-bl text-xs"
                            [matTooltip]="
                                'SIGNAGE_MANAGER.IMAGE_GEN_REFERENCE_REMOVE'
                                    | translate
                            "
                            (click)="removed.emit(item.id)"
                            [attr.aria-label]="
                                ('SIGNAGE_MANAGER.IMAGE_GEN_REFERENCE_REMOVE'
                                    | translate) +
                                ' ' +
                                numberedLabel(index, item.name)
                            "
                        >
                            <icon class="text-sm">close</icon>
                        </button>
                    </div>
                }
            </div>
        }

        <button
            btn
            matRipple
            type="button"
            class="inverse self-start"
            [disabled]="uploading() || items().length >= max()"
            (click)="picker.click()"
        >
            {{
                (uploading()
                    ? 'SIGNAGE_MANAGER.IMAGE_GEN_REFERENCE_UPLOADING'
                    : add_label()
                ) | translate
            }}
        </button>
        <input
            #picker
            type="file"
            [attr.multiple]="max() > 1 ? '' : null"
            class="sr-only"
            accept="image/png,image/jpeg,image/webp"
            [attr.aria-label]="add_label() | translate"
            (change)="pick($event)"
        />
    `,
      imports: [IconComponent, MatRippleModule, MatTooltipModule, TranslatePipe]
    }]
  }], null, { items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: true }] }], uploading: [{ type: Input, args: [{ isSignal: true, alias: "uploading", required: false }] }], max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], hint: [{ type: Input, args: [{ isSignal: true, alias: "hint", required: false }] }], add_label: [{ type: Input, args: [{ isSignal: true, alias: "add_label", required: false }] }], offset: [{ type: Input, args: [{ isSignal: true, alias: "offset", required: false }] }], picked: [{ type: Output, args: ["picked"] }], removed: [{ type: Output, args: ["removed"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageGenReferencesComponent, { className: "ImageGenReferencesComponent", filePath: "apps/signage-manager/src/app/image-gen/image-gen-references.component.ts", lineNumber: 93 });
})();

// apps/signage-manager/src/app/image-gen/image-gen-modal.component.ts
var _forTrack03 = ($index, $item) => $item.job_id + "-" + $item.index;
function ImageGenModalComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "image-gen-layer", 21);
    \u0275\u0275listener("changed", function ImageGenModalComponent_Conditional_12_Template_image_gen_layer_changed_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.layer_state.set($event));
    })("failed", function ImageGenModalComponent_Conditional_12_Template_image_gen_layer_failed_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onArtworkFailed());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-40", ctx_r1.state() === "generating");
    \u0275\u0275property("image_url", ctx_r1.selected_object_url())("logo_on_light", ctx_r1.logo_on_light())("logo_on_dark", ctx_r1.logo_on_dark())("brand", ctx_r1.applied_brand())("state", ctx_r1.layer_state());
  }
}
function ImageGenModalComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 8);
  }
}
function ImageGenModalComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-40", ctx_r1.state() === "generating");
    \u0275\u0275property("source", ctx_r1.source_url())("alt", \u0275\u0275pipeBind1(1, 4, "SIGNAGE_MANAGER.IMAGE_GEN_CHANGING_THIS"));
  }
}
function ImageGenModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.IMAGE_GEN_PREVIEW_EMPTY"), " ");
  }
}
function ImageGenModalComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-spinner", 23);
    \u0275\u0275elementStart(2, "p", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "SIGNAGE_MANAGER.IMAGE_GEN_WORKING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.progress_note(), " ");
  }
}
function ImageGenModalComponent_Conditional_17_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function ImageGenModalComponent_Conditional_17_For_6_Template_button_click_0_listener() {
      const candidate_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.select(candidate_r4));
    });
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const candidate_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ring-2", ctx_r1.selected()?.upload_id === candidate_r4.upload_id);
    \u0275\u0275property("disabled", ctx_r1.claim_pending() || ctx_r1.saving() || ctx_r1.state() === "generating")("matTooltip", ctx_r1.versionLabel(candidate_r4));
    \u0275\u0275attribute("aria-pressed", ctx_r1.selected()?.upload_id === candidate_r4.upload_id);
    \u0275\u0275advance();
    \u0275\u0275property("source", candidate_r4.url)("alt", ctx_r1.versionLabel(candidate_r4));
  }
}
function ImageGenModalComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "p", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 26);
    \u0275\u0275repeaterCreate(5, ImageGenModalComponent_Conditional_17_For_6_Template, 2, 7, "button", 27, _forTrack03);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "SIGNAGE_MANAGER.IMAGE_GEN_VERSIONS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.rail());
  }
}
function ImageGenModalComponent_Conditional_20_Conditional_7_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    \u0275\u0275property("value", option_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r7);
  }
}
function ImageGenModalComponent_Conditional_20_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "label", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 32)(5, "mat-select", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ImageGenModalComponent_Conditional_20_Conditional_7_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.aspect, $event) || (ctx_r1.aspect = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(6, ImageGenModalComponent_Conditional_20_Conditional_7_For_7_Template, 2, 2, "mat-option", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "SIGNAGE_MANAGER.IMAGE_GEN_SHAPE"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aspect);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.aspect_options());
  }
}
function ImageGenModalComponent_Conditional_20_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const count_r8 = ctx.$implicit;
    \u0275\u0275property("value", count_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(count_r8);
  }
}
function ImageGenModalComponent_Conditional_20_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "mat-slide-toggle", 40);
    \u0275\u0275twoWayListener("ngModelChange", function ImageGenModalComponent_Conditional_20_Conditional_16_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.use_branding, $event) || (ctx_r1.use_branding = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(4, "p", 18);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.use_branding);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "SIGNAGE_MANAGER.IMAGE_GEN_USE_BRANDING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "SIGNAGE_MANAGER.IMAGE_GEN_USE_BRANDING_HINT"), " ");
  }
}
function ImageGenModalComponent_Conditional_20_Conditional_17_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-slide-toggle", 40);
    \u0275\u0275twoWayListener("ngModelChange", function ImageGenModalComponent_Conditional_20_Conditional_17_Conditional_7_Template_mat_slide_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.include_logo, $event) || (ctx_r1.include_logo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.include_logo);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SIGNAGE_MANAGER.IMAGE_GEN_LEAVE_LOGO_SPACE"), " ");
  }
}
function ImageGenModalComponent_Conditional_20_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "mat-slide-toggle", 40);
    \u0275\u0275twoWayListener("ngModelChange", function ImageGenModalComponent_Conditional_20_Conditional_17_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.add_text_with_layer, $event) || (ctx_r1.add_text_with_layer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(4, "p", 18);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, ImageGenModalComponent_Conditional_20_Conditional_17_Conditional_7_Template, 3, 4, "mat-slide-toggle", 41);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.add_text_with_layer);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "SIGNAGE_MANAGER.IMAGE_GEN_ADD_WORDS_LAYER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "SIGNAGE_MANAGER.IMAGE_GEN_ADD_WORDS_LAYER_HINT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.has_logo() ? 7 : -1);
  }
}
function ImageGenModalComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "label", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 32)(5, "textarea", 33);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ImageGenModalComponent_Conditional_20_Template_textarea_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.brief, $event) || (ctx_r1.brief = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.control.enter", function ImageGenModalComponent_Conditional_20_Template_textarea_keydown_control_enter_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.start());
    })("keydown.meta.enter", function ImageGenModalComponent_Conditional_20_Template_textarea_keydown_meta_enter_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.start());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, ImageGenModalComponent_Conditional_20_Conditional_7_Template, 8, 4, "div", 30);
    \u0275\u0275elementStart(8, "div", 30)(9, "label", 34);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 32)(13, "mat-select", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ImageGenModalComponent_Conditional_20_Template_mat_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.candidates, $event) || (ctx_r1.candidates = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(14, ImageGenModalComponent_Conditional_20_For_15_Template, 2, 2, "mat-option", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, ImageGenModalComponent_Conditional_20_Conditional_16_Template, 7, 7, "div", 37);
    \u0275\u0275conditionalCreate(17, ImageGenModalComponent_Conditional_20_Conditional_17_Template, 8, 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 8, ctx_r1.is_edit() ? "SIGNAGE_MANAGER.IMAGE_GEN_INSTRUCTION" : "SIGNAGE_MANAGER.IMAGE_GEN_BRIEF"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 10, ctx_r1.is_edit() ? "SIGNAGE_MANAGER.IMAGE_GEN_INSTRUCTION_HINT" : "SIGNAGE_MANAGER.IMAGE_GEN_BRIEF_HINT"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.brief);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.is_edit() ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 12, "SIGNAGE_MANAGER.IMAGE_GEN_OPTIONS_COUNT"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.candidates);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.candidate_options());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.has_branding() ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.is_edit() ? 17 : -1);
  }
}
function ImageGenModalComponent_Conditional_21_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u201C", ctx_r1.brief(), "\u201D ");
  }
}
function ImageGenModalComponent_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 30)(2, "label", 44);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 32)(6, "textarea", 45);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ImageGenModalComponent_Conditional_21_Conditional_1_Template_textarea_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.refinement, $event) || (ctx_r1.refinement = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.control.enter", function ImageGenModalComponent_Conditional_21_Conditional_1_Template_textarea_keydown_control_enter_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refine());
    })("keydown.meta.enter", function ImageGenModalComponent_Conditional_21_Conditional_1_Template_textarea_keydown_meta_enter_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refine());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 46);
    \u0275\u0275listener("click", function ImageGenModalComponent_Conditional_21_Conditional_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refine());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "SIGNAGE_MANAGER.IMAGE_GEN_REFINE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 7, "SIGNAGE_MANAGER.IMAGE_GEN_REFINE_HINT"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.refinement);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.refinement().trim() || !ctx_r1.selected() || ctx_r1.state() === "generating" || ctx_r1.claim_pending() || ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "SIGNAGE_MANAGER.IMAGE_GEN_REFINE_ACTION"), " ");
  }
}
function ImageGenModalComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ImageGenModalComponent_Conditional_21_Conditional_0_Template, 2, 1, "p", 42);
    \u0275\u0275conditionalCreate(1, ImageGenModalComponent_Conditional_21_Conditional_1_Template, 11, 11, "div", 43);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.brief() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_refine() ? 1 : -1);
  }
}
function ImageGenModalComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "p", 47);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "image-gen-layer-controls", 48);
    \u0275\u0275listener("changed", function ImageGenModalComponent_Conditional_24_Template_image_gen_layer_controls_changed_4_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.layer_state.set($event));
    })("logoPicked", function ImageGenModalComponent_Conditional_24_Template_image_gen_layer_controls_logoPicked_4_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.uploadLogo($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "SIGNAGE_MANAGER.IMAGE_GEN_WORDS_AND_LOGO"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("state", ctx_r1.layer_state())("logo_on_light", ctx_r1.logo_on_light())("logo_on_dark", ctx_r1.logo_on_dark())("brand", ctx_r1.applied_brand())("can_set_logo", ctx_r1.can_set_logo())("branding_editing", ctx_r1.branding_editing())("uploading", ctx_r1.uploading_logo());
  }
}
function ImageGenModalComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.quota_note(), " ");
  }
}
function ImageGenModalComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.engine_note(), " ");
  }
}
function ImageGenModalComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function ImageGenModalComponent_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.CANCEL"), " ");
  }
}
function ImageGenModalComponent_Conditional_29_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function ImageGenModalComponent_Conditional_29_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.composing.set(false));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.BACK"), " ");
  }
}
function ImageGenModalComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, ImageGenModalComponent_Conditional_29_Conditional_0_Template, 3, 3, "button", 20);
    \u0275\u0275elementStart(1, "button", 50);
    \u0275\u0275listener("click", function ImageGenModalComponent_Conditional_29_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.start());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.rail().length ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.brief().trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "SIGNAGE_MANAGER.IMAGE_GEN_GENERATE"), " ");
  }
}
function ImageGenModalComponent_Conditional_30_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 53);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.IMAGE_GEN_SAVING"), " ");
  }
}
function ImageGenModalComponent_Conditional_30_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.SAVE"), " ");
  }
}
function ImageGenModalComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function ImageGenModalComponent_Conditional_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.composing.set(true));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 52);
    \u0275\u0275listener("click", function ImageGenModalComponent_Conditional_30_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275conditionalCreate(4, ImageGenModalComponent_Conditional_30_Conditional_4_Template, 3, 3)(5, ImageGenModalComponent_Conditional_30_Conditional_5_Template, 2, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.claim_pending() || ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.IMAGE_GEN_NEW_BRIEF"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.can_save());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 4 : 5);
  }
}
var ImageGenModalComponent = class _ImageGenModalComponent {
  versionLabel(candidate) {
    return i18n("SIGNAGE_MANAGER.IMAGE_GEN_VERSION_LABEL", {
      version: `${candidate.version}`,
      option: `${candidate.index + 1}`
    });
  }
  async start() {
    const brief = this.brief().trim();
    if (!brief || this.state() === "generating")
      return;
    const token = ++this._job_token;
    this.state.set("generating");
    try {
      const common = __spreadProps(__spreadValues({}, this._requestBase()), {
        prompt: this.withReferenceRoles(brief)
      });
      let job;
      if (this._data.source_upload_id) {
        const request = __spreadProps(__spreadValues({}, common), {
          source_upload_id: this._data.source_upload_id,
          source_item_id: this._data.source_item_id
        });
        job = await this._image_gen.edit(__spreadProps(__spreadValues({}, request), {
          idempotency_key: this._intentKey("edit", request)
        }));
      } else {
        const request = __spreadProps(__spreadValues({}, common), {
          aspect_ratio: this.aspect()
        });
        job = await this._image_gen.generate(__spreadProps(__spreadValues({}, request), {
          idempotency_key: this._intentKey("generate", request)
        }));
      }
      this._follow(job, token);
    } catch (error) {
      if (this._closed)
        return this._removeReferences();
      if (token !== this._job_token)
        return;
      this.state.set(this.rail().length ? "review" : "compose");
      notifyError(actionError(error, i18n("SIGNAGE_MANAGER.IMAGE_GEN_JOB_FAILED")));
    }
  }
  async refine() {
    const instruction = this.refinement().trim();
    const source = this.selected();
    if (!instruction || !source || this.state() === "generating")
      return;
    this.refinement.set("");
    const token = ++this._job_token;
    this.state.set("generating");
    try {
      const request = __spreadProps(__spreadValues({}, this._requestBase()), {
        prompt: this.withReferenceRoles(instruction),
        candidates: 1,
        source_upload_id: source.upload_id,
        parent_job_id: source.job_id
      });
      const job = await this._image_gen.edit(__spreadProps(__spreadValues({}, request), {
        idempotency_key: this._intentKey("edit", request)
      }));
      this._follow(job, token);
    } catch (error) {
      if (this._closed)
        return this._removeReferences();
      if (token !== this._job_token)
        return;
      this.state.set("review");
      notifyError(actionError(error, i18n("SIGNAGE_MANAGER.IMAGE_GEN_JOB_FAILED")));
    }
  }
  /** the pick could not be read, so it is let go rather than saved unseen */
  onArtworkFailed() {
    this.selected.set(null);
    this.selected_object_url.set("");
    notifyError(i18n("SIGNAGE_MANAGER.IMAGE_GEN_IMAGE_UNREADABLE"));
  }
  async select(candidate) {
    if (this.claim_pending() || this.saving())
      return;
    if (this.state() === "generating")
      return;
    const token = ++this._select_token;
    this.selected.set(candidate);
    this.selected_object_url.set("");
    const url = await this._image_gen.loadImage(candidate.url).catch(() => "");
    if (token !== this._select_token)
      return;
    if (!url)
      return this.onArtworkFailed();
    this.selected_object_url.set(url);
  }
  /**
   * Stop the running job. The old loop stops at once, so a job that still
   * finishes later cannot take over the screen. If the server refuses, the
   * job is still running and the modal keeps following it. A request still
   * on its way gives up its key, so asking again makes a new job rather than
   * getting back the one being cancelled.
   */
  async cancel() {
    this._dropIntent();
    this._stopAwaiting();
    const id = this.current_job_id();
    const job = this._image_gen.jobs()[id];
    if (job && !isFinal(job) && !await this._image_gen.cancel(id)) {
      if (this._closed)
        return;
      notifyError(i18n("SIGNAGE_MANAGER.IMAGE_GEN_CANCEL_FAILED"));
      this._awaitJob(id);
      return;
    }
    this.state.set(this.rail().length ? "review" : "compose");
  }
  /**
   * Say what each attached image is for, after the person's own words. The
   * numbering matches the order the images are sent: the pictures to
   * include first, the style reference last.
   */
  withReferenceRoles(text) {
    const includes = this.include_references().length;
    const style = this.style_reference();
    const lines = [];
    if (includes === 1) {
      lines.push("Include image 1 in the artwork.");
    } else if (includes > 1) {
      lines.push(`Include images 1 to ${includes} in the artwork, arranged so the result is aesthetically pleasing and practical.`);
    }
    if (style) {
      lines.push(`Use image ${includes + 1} as a style guide for how the artwork should look: match its overall look and feel, but do not include image ${includes + 1} or anything from it in the artwork.`);
    }
    if (lines.length) {
      lines.push("Where the description above says more about any of these images, follow the description.");
    }
    return [text, lines.join(" ")].filter(Boolean).join("\n\n");
  }
  /**
   * Attach pictures for this request.
   */
  async addReferences(files, kind) {
    if (!files.length)
      return;
    this.uploading_references.set(true);
    try {
      for (const file of kind === "style" ? files.slice(0, 1) : files) {
        const id = await this._image_gen.uploadReference(file);
        if (this._closed) {
          this._image_gen.removeReference(id);
          return;
        }
        const item = {
          id,
          name: file.name,
          url: URL.createObjectURL(file)
        };
        if (kind === "style") {
          const previous = this.style_reference();
          if (previous) {
            URL.revokeObjectURL(previous.url);
            this._image_gen.removeReference(previous.id);
          }
          this.style_reference.set(item);
        } else {
          this.include_references.update((list) => [...list, item]);
        }
      }
    } catch (error) {
      notifyError(actionError(error, i18n("SIGNAGE_MANAGER.IMAGE_GEN_REFERENCE_UPLOAD_FAILED")));
    } finally {
      this.uploading_references.set(false);
    }
  }
  removeReference(id) {
    const item = this.references().find((entry) => entry.id === id);
    if (item)
      URL.revokeObjectURL(item.url);
    if (this.style_reference()?.id === id)
      this.style_reference.set(null);
    this.include_references.update((list) => list.filter((entry) => entry.id !== id));
    this._image_gen.removeReference(id);
  }
  ngOnDestroy() {
    this._closed = true;
    this._dropIntent();
    this._stopAwaiting();
    for (const id of this.job_ids()) {
      this._image_gen.setJobOnScreen(id, false);
    }
    for (const item of this.references())
      URL.revokeObjectURL(item.url);
    if (this.state() !== "generating")
      return this._removeReferences();
    const job = this._image_gen.jobs()[this.current_job_id()];
    if (job && !isFinal(job)) {
      this._image_gen.abandon(job.id, this.reference_ids());
    }
  }
  /** nothing sends the attached images again, so their uploads can go */
  _removeReferences() {
    this.reference_ids().forEach((id) => this._image_gen.removeReference(id));
  }
  async uploadLogo(file) {
    if (!this.can_set_logo())
      return;
    this.uploading_logo.set(true);
    try {
      await this._image_gen.uploadBrandLogo(file);
      await this._loadBrandLogos();
      this.layer_state.set(__spreadProps(__spreadValues({}, this.layer_state()), { logo: true }));
      notifySuccess(i18n("SIGNAGE_MANAGER.IMAGE_GEN_LOGO_SAVED"));
    } catch (error) {
      notifyError(actionError(error, i18n("SIGNAGE_MANAGER.IMAGE_GEN_LOGO_SAVE_FAILED")));
    } finally {
      this.uploading_logo.set(false);
    }
  }
  async save() {
    const candidate = this.selected();
    if (!candidate || !this.can_save())
      return;
    this.saving.set(true);
    this._dialog_ref.disableClose = true;
    try {
      const name = this._name();
      const overlay = !this._pending && this.has_overlay();
      const blob = overlay ? await this._layer()?.toBlob() : void 0;
      if (overlay && !blob) {
        notifyError(i18n("SIGNAGE_MANAGER.IMAGE_GEN_NO_IMAGE"));
        return;
      }
      let pending = this._pending;
      if (!pending) {
        const media2 = blob ? await this._media_service.addMedia(new File([blob], `${name}.jpg`, {
          type: COMPOSITE_TYPE[0]
        }), new Ds({ name, tags: this._tags() })) : await this._media_service.addMediaFromUpload(candidate.upload_id, {
          name,
          tags: this._tags(),
          orientation: orientationOf(candidate.width, candidate.height, this.is_edit() ? this._data.aspect_ratio : this.aspect())
        });
        if (!media2?.id) {
          this._dialog_ref.close(media2);
          return;
        }
        pending = { media: media2, claimed: !!blob };
        this._pending = pending;
        this.claim_pending.set(true);
      }
      const media = pending.media;
      if (!pending.claimed) {
        try {
          await this._image_gen.claim(candidate.job_id, candidate.upload_id, media.id);
        } catch (error) {
          await this._media_service.discardCreatedMedia(media.id).then(() => this._pending = void 0).catch(() => null);
          throw error;
        }
        pending.claimed = true;
      }
      if (this._data.playlist_id) {
        await this._playlist_service.addMediaToPlaylist(this._data.playlist_id, media.id, media);
      }
      this._pending = void 0;
      if (media.thumbnail_id) {
        await this._image_gen.loadImage(`/api/engine/v2/uploads/${media.thumbnail_id}/url`).catch(() => "");
      }
      this._dialog_ref.close(media);
    } catch (error) {
      notifyError(actionError(error, i18n("SIGNAGE_MANAGER.IMAGE_GEN_SAVE_FAILED")));
    } finally {
      this.claim_pending.set(!!this._pending);
      this.saving.set(false);
      this._dialog_ref.disableClose = false;
    }
  }
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._context = inject(SignageContextService);
    this._media_service = inject(SignageMediaService);
    this._playlist_service = inject(SignagePlaylistService);
    this._image_gen = inject(ImageGenService);
    this._layer = viewChild(
      ImageGenLayerComponent,
      ...ngDevMode ? [{ debugName: "_layer" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._aspect_options = computed(
      () => {
        const capabilities = this._image_gen.capabilities();
        const model_options = this._image_gen.default_model()?.aspect_ratios || [];
        const domain_options = capabilities?.aspect_ratios || [];
        const shared = domain_options.filter((option) => model_options.includes(option));
        return shared.length ? shared : model_options.length ? model_options : domain_options;
      },
      ...ngDevMode ? [{ debugName: "_aspect_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._max_candidates = computed(
      () => {
        const domain_max = this._image_gen.capabilities()?.max_candidates ?? 2;
        const model_max = this._image_gen.default_model()?.max_candidates ?? domain_max;
        return Math.max(1, Math.min(domain_max, model_max));
      },
      ...ngDevMode ? [{ debugName: "_max_candidates" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.state = signal(
      "compose",
      ...ngDevMode ? [{ debugName: "state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.saving = signal(
      false,
      ...ngDevMode ? [{ debugName: "saving" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.composing = signal(
      false,
      ...ngDevMode ? [{ debugName: "composing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.brief = signal(
      "",
      ...ngDevMode ? [{ debugName: "brief" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.refinement = signal(
      "",
      ...ngDevMode ? [{ debugName: "refinement" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.aspect = linkedSignal(
      () => {
        const options = this._aspect_options();
        const requested = this._data.aspect_ratio || "";
        return options.includes(requested) ? requested : options[0] || requested || "16:9";
      },
      ...ngDevMode ? [{ debugName: "aspect" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.candidates = linkedSignal(
      () => {
        return Math.min(2, this._max_candidates());
      },
      ...ngDevMode ? [{ debugName: "candidates" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.add_text_with_layer = signal(
      !this._data.source_upload_id,
      ...ngDevMode ? [{ debugName: "add_text_with_layer" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.include_logo = signal(
      !this._data.source_upload_id,
      ...ngDevMode ? [{ debugName: "include_logo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.use_branding = signal(
      true,
      ...ngDevMode ? [{ debugName: "use_branding" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.layer_state = signal(
      {
        blocks: [newTextBlock("headline")],
        logo: false,
        logo_position: "bottom-right",
        logo_scale: 0.14,
        logo_choice: "auto"
      },
      ...ngDevMode ? [{ debugName: "layer_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.job_ids = signal(
      [],
      ...ngDevMode ? [{ debugName: "job_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.current_job_id = computed(
      () => this.job_ids().at(-1) || "",
      ...ngDevMode ? [{ debugName: "current_job_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_object_url = signal(
      "",
      ...ngDevMode ? [{ debugName: "selected_object_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.logo_on_light = signal(
      "",
      ...ngDevMode ? [{ debugName: "logo_on_light" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.logo_on_dark = signal(
      "",
      ...ngDevMode ? [{ debugName: "logo_on_dark" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.uploading_logo = signal(
      false,
      ...ngDevMode ? [{ debugName: "uploading_logo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.include_references = signal(
      [],
      ...ngDevMode ? [{ debugName: "include_references" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.style_reference = signal(
      null,
      ...ngDevMode ? [{ debugName: "style_reference" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.uploading_references = signal(
      false,
      ...ngDevMode ? [{ debugName: "uploading_references" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.references = computed(
      () => {
        const style = this.style_reference();
        return style ? [...this.include_references(), style] : this.include_references();
      },
      ...ngDevMode ? [{ debugName: "references" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.style_items = computed(
      () => {
        const style = this.style_reference();
        return style ? [style] : [];
      },
      ...ngDevMode ? [{ debugName: "style_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.claim_pending = signal(
      false,
      ...ngDevMode ? [{ debugName: "claim_pending" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_save = computed(
      () => !!this.selected_object_url() && !this.saving(),
      ...ngDevMode ? [{ debugName: "can_save" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.brand = this._image_gen.brand_kit;
    this.can_set_logo = computed(
      () => canEditBrandKit(this._context),
      ...ngDevMode ? [{ debugName: "can_set_logo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.branding_editing = computed(
      () => brandEditingOn(this._context),
      ...ngDevMode ? [{ debugName: "branding_editing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_id = computed(
      () => this._context.selected_group()?.group.id || void 0,
      ...ngDevMode ? [{ debugName: "group_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_branding = computed(
      () => {
        const brand = this.brand();
        if (!brand)
          return false;
        const font = typeof brand.font === "string" ? brand.font : brand.font?.family;
        return !!(brand.organisation || font || Object.keys(brand.palette || {}).length);
      },
      ...ngDevMode ? [{ debugName: "has_branding" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.applied_brand = computed(
      () => this.use_branding() ? this.brand() : null,
      ...ngDevMode ? [{ debugName: "applied_brand" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_edit = computed(
      () => !!this._data.source_upload_id,
      ...ngDevMode ? [{ debugName: "is_edit" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_compose = computed(
      () => !this.rail().length || this.composing(),
      ...ngDevMode ? [{ debugName: "show_compose" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_refine = computed(
      () => this._context.hasFeature("ai-editing") && this._image_gen.can_edit(),
      ...ngDevMode ? [{ debugName: "can_refine" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.source_url = computed(
      () => {
        const id = this._data.source_upload_id;
        return id ? `/api/engine/v2/uploads/${encodeURIComponent(id)}/url` : "";
      },
      ...ngDevMode ? [{ debugName: "source_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_logo = computed(
      () => !!this._image_gen.capabilities()?.logo_layer,
      ...ngDevMode ? [{ debugName: "has_logo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.aspect_options = this._aspect_options;
    this.candidate_options = computed(
      () => {
        const max = this._max_candidates();
        return Array.from({ length: max }, (_, index) => index + 1);
      },
      ...ngDevMode ? [{ debugName: "candidate_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max_references = computed(
      () => this._image_gen.default_model()?.max_references ?? 8,
      ...ngDevMode ? [{ debugName: "max_references" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.include_max = computed(
      () => this.max_references() - (this.style_reference() ? 1 : 0),
      ...ngDevMode ? [{ debugName: "include_max" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.style_max = computed(
      () => Math.min(1, this.max_references() - this.include_references().length),
      ...ngDevMode ? [{ debugName: "style_max" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.job = computed(
      () => this._image_gen.jobs()[this.current_job_id()],
      ...ngDevMode ? [{ debugName: "job" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rail = computed(
      () => {
        const jobs = this._image_gen.jobs();
        const rail = [];
        let version = 0;
        for (const id of this.job_ids()) {
          const images = jobs[id]?.images || [];
          if (!images.some((image) => image?.upload_id))
            continue;
          version++;
          images.forEach((image, index) => {
            if (!image?.upload_id)
              return;
            rail.push({
              job_id: id,
              index,
              upload_id: image.upload_id,
              url: image.url || `/api/engine/v2/uploads/${encodeURIComponent(image.upload_id)}/url`,
              width: image.width,
              height: image.height,
              version
            });
          });
        }
        return rail;
      },
      ...ngDevMode ? [{ debugName: "rail" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.progress_note = computed(
      () => {
        const job = this.job();
        if (!job)
          return "";
        return `${job.images_produced} / ${job.candidates}`;
      },
      ...ngDevMode ? [{ debugName: "progress_note" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.quota_note = computed(
      () => {
        const quota = this._image_gen.capabilities()?.quota;
        const left = quota?.user_remaining_today;
        if (left === null || left === void 0)
          return "";
        return i18n("SIGNAGE_MANAGER.IMAGE_GEN_QUOTA_LEFT", {
          count: `${left}`
        });
      },
      ...ngDevMode ? [{ debugName: "quota_note" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.engine_note = computed(
      () => {
        const provider = this._image_gen.default_provider();
        if (!provider)
          return "";
        return i18n("SIGNAGE_MANAGER.IMAGE_GEN_ENGINE", {
          model: this._image_gen.default_model()?.name || provider.default_model || "",
          provider: provider.name
        });
      },
      ...ngDevMode ? [{ debugName: "engine_note" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.heading = computed(
      () => this.is_edit() ? "SIGNAGE_MANAGER.IMAGE_GEN_EDIT_IMAGE" : "SIGNAGE_MANAGER.IMAGE_GEN_CREATE_IMAGE",
      ...ngDevMode ? [{ debugName: "heading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_overlay = computed(
      () => {
        const state = this.layer_state();
        if (state.blocks.some((block) => block.text.trim()))
          return true;
        return state.logo && !!(this.logo_on_light() || this.logo_on_dark());
      },
      ...ngDevMode ? [{ debugName: "has_overlay" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._select_token = 0;
    this.reference_ids = computed(
      () => this.references().map((item) => item.id),
      ...ngDevMode ? [{ debugName: "reference_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._closed = false;
    this._job_token = 0;
    this._logo_defaulted = false;
    this._logos_read = false;
    this._inflight_key = "";
    this._awaiting = signal(
      "",
      ...ngDevMode ? [{ debugName: "_awaiting" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const id = this._awaiting();
      const job = id ? this._image_gen.jobs()[id] : void 0;
      if (job && isFinal(job))
        untracked(() => this._finish(job));
    });
  }
  /** follow a job the server accepted, unless it was cancelled on the way */
  _follow(job, token) {
    if (this._closed || token !== this._job_token) {
      this._image_gen.abandon(job.id, this._closed ? this.reference_ids() : []);
      return;
    }
    this._inflight_key = "";
    this.job_ids.update((ids) => [...ids, job.id]);
    this._image_gen.setJobOnScreen(job.id, true);
    this._awaitJob(job.id);
  }
  _stopAwaiting() {
    this._job_token++;
    this._awaiting.set("");
  }
  /** wait for the job to reach a final state, then move on */
  _awaitJob(id) {
    this._stopAwaiting();
    this._awaiting.set(id);
  }
  _finish(job) {
    this._awaiting.set("");
    if (this._closed)
      return;
    const newest = job.state === "done" ? this.rail().find((candidate) => candidate.job_id === job.id) : void 0;
    if (!newest) {
      if (job.state === "done") {
        notifyError(i18n("SIGNAGE_MANAGER.IMAGE_GEN_NO_IMAGES"));
      }
      this.state.set(this.rail().length ? "review" : "compose");
      return;
    }
    this.state.set("review");
    this.composing.set(false);
    this.select(newest);
    if (!this._logos_read)
      this._loadBrandLogos();
  }
  /**
   * Both saved logos, so the toggle in the sidebar has something to show.
   * Read once, when the first result lands, and again after an upload.
   */
  async _loadBrandLogos() {
    this._logos_read = true;
    const brand = this.brand();
    const [on_light, on_dark] = await Promise.all([
      this._readUpload(brand?.logo_upload_id),
      this._readUpload(brand?.logo_dark_upload_id)
    ]);
    this.logo_on_light.set(on_light);
    this.logo_on_dark.set(on_dark);
    if (this._logo_defaulted || !(on_light || on_dark))
      return;
    this._logo_defaulted = true;
    if (this.include_logo()) {
      this.layer_state.set(__spreadProps(__spreadValues({}, this.layer_state()), { logo: true }));
    }
  }
  _readUpload(id) {
    if (!id)
      return Promise.resolve("");
    return this._image_gen.loadImage(`/api/engine/v2/uploads/${encodeURIComponent(id)}/url`).catch(() => "");
  }
  _name() {
    const source = this.is_edit() ? this._data.source_name?.trim() : "";
    if (source)
      return source;
    const words = this.brief().trim().split(/\s+/).slice(0, 6).join(" ");
    return words || i18n("SIGNAGE_MANAGER.IMAGE_GEN_DEFAULT_NAME");
  }
  /** what every request carries, whichever kind it is */
  _requestBase() {
    return {
      candidates: this.candidates(),
      // the server would leave a corner empty for a logo it cannot draw
      include_logo: this.include_logo() && this.has_logo(),
      add_text_with_layer: this.add_text_with_layer(),
      use_branding: this.use_branding(),
      group_id: this.group_id(),
      references: this.reference_ids()
    };
  }
  /** the request's key, kept until the server answers or it is let go */
  _intentKey(kind, request) {
    this._inflight_key = this._image_gen.intentKey(kind, request);
    return this._inflight_key;
  }
  _dropIntent() {
    if (!this._inflight_key)
      return;
    this._image_gen.forgetIntent(this._inflight_key);
    this._inflight_key = "";
  }
  /**
   * Tags are what the media library builds its folders from, so only a label
   * a person would want to browse by belongs here.
   */
  _tags() {
    return ["ai-generated"];
  }
  static {
    this.\u0275fac = function ImageGenModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImageGenModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageGenModalComponent, selectors: [["image-gen-modal"]], viewQuery: function ImageGenModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._layer, ImageGenLayerComponent, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 31, vars: 22, consts: [[1, "bg-base-100", "flex", "h-full", "w-full", "flex-col", "overflow-hidden"], [1, "bg-base-200", "m-2", "w-[calc(100%-1rem)]", "shrink-0", "rounded-sm", "border-none", "p-2"], ["id", "image-gen-modal-title", 1, "px-2", "text-xl", "font-medium"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", "", 3, "disabled"], [1, "flex", "min-h-0", "flex-1", "flex-col", "gap-2", "px-2", "pb-2", "md:flex-row"], [1, "flex", "min-h-48", "min-w-0", "flex-1", "flex-col", "gap-2", "md:min-h-0"], [1, "border-base-300", "bg-base-200", "relative", "flex", "min-h-0", "flex-1", "items-center", "justify-center", "overflow-hidden", "rounded-lg", "border"], [1, "h-full", "w-full", 3, "opacity-40", "image_url", "logo_on_light", "logo_on_dark", "brand", "state"], ["diameter", "32"], ["auth", "", 1, "max-h-full", "max-w-full", "object-contain", 3, "source", "opacity-40", "alt"], [1, "text-base-content/50", "m-0", "px-6", "text-sm"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "gap-3"], [1, "flex", "shrink-0", "flex-col", "gap-1"], [1, "border-base-300", "bg-base-100", "flex", "min-h-0", "w-full", "flex-1", "flex-col", "rounded-lg", "border", "md:w-96", "md:flex-none", "md:shrink-0"], [1, "flex-1", "space-y-4", "overflow-y-auto", "p-4"], ["title", "SIGNAGE_MANAGER.IMAGE_GEN_INCLUDE_IMAGES", "hint", "SIGNAGE_MANAGER.IMAGE_GEN_INCLUDE_IMAGES_HINT", 3, "picked", "removed", "items", "uploading", "max"], ["title", "SIGNAGE_MANAGER.IMAGE_GEN_STYLE_REFERENCE", "hint", "SIGNAGE_MANAGER.IMAGE_GEN_STYLE_REFERENCE_HINT", "add_label", "SIGNAGE_MANAGER.IMAGE_GEN_REFERENCE_ADD_ONE", 3, "picked", "removed", "items", "uploading", "max", "offset"], [1, "border-base-300", "border-t", "pt-4"], [1, "text-base-content/60", "m-0", "text-xs"], [1, "border-base-300", "flex", "shrink-0", "items-center", "justify-end", "gap-2", "border-t", "p-2"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", "min-w-32"], [1, "h-full", "w-full", 3, "changed", "failed", "image_url", "logo_on_light", "logo_on_dark", "brand", "state"], ["auth", "", 1, "max-h-full", "max-w-full", "object-contain", 3, "source", "alt"], ["diameter", "48"], [1, "m-0", "text-sm"], [1, "m-0", "text-sm", "font-medium"], [1, "flex", "gap-2", "overflow-x-auto", "p-1"], ["type", "button", 1, "border-base-300", "ring-primary", "ring-offset-base-100", "h-16", "w-28", "shrink-0", "overflow-hidden", "rounded-lg", "border", "ring-offset-2", "disabled:opacity-60", 3, "disabled", "ring-2", "matTooltip"], ["type", "button", 1, "border-base-300", "ring-primary", "ring-offset-base-100", "h-16", "w-28", "shrink-0", "overflow-hidden", "rounded-lg", "border", "ring-offset-2", "disabled:opacity-60", 3, "click", "disabled", "matTooltip"], ["auth", "", 1, "h-full", "w-full", "object-cover", 3, "source", "alt"], [1, "flex", "flex-col"], ["for", "image-gen-brief", 1, "mb-1", "text-sm"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", "id", "image-gen-brief", "rows", "4", 3, "ngModelChange", "keydown.control.enter", "keydown.meta.enter", "placeholder", "ngModel"], ["id", "image-gen-count-label", "for", "image-gen-count", 1, "mb-1", "text-sm"], ["id", "image-gen-count", "aria-labelledby", "image-gen-count-label", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "flex", "flex-col", "gap-1"], ["id", "image-gen-shape-label", "for", "image-gen-shape", 1, "mb-1", "text-sm"], ["id", "image-gen-shape", "aria-labelledby", "image-gen-shape-label", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], [3, "ngModel"], [1, "text-base-content/60", "m-0", "text-xs", "italic"], [1, "flex", "flex-col", "gap-2"], ["for", "image-gen-refine", 1, "mb-1", "text-sm"], ["matInput", "", "id", "image-gen-refine", "rows", "2", 3, "ngModelChange", "keydown.control.enter", "keydown.meta.enter", "placeholder", "ngModel"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", "self-start", 3, "click", "disabled"], [1, "m-0", "mb-2", "text-sm", "font-medium"], [3, "changed", "logoPicked", "state", "logo_on_light", "logo_on_dark", "brand", "can_set_logo", "branding_editing", "uploading"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", "min-w-32", 3, "click"], ["btn", "", "matRipple", "", "type", "button", 1, "min-w-32", 3, "click", "disabled"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", "min-w-32", 3, "click", "disabled"], ["btn", "", "matRipple", "", "type", "button", 1, "flex", "min-w-32", "items-center", "justify-center", "gap-2", 3, "click", "disabled"], ["diameter", "18"]], template: function ImageGenModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 3);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementStart(7, "icon");
        \u0275\u0275text(8, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 4)(10, "section", 5)(11, "div", 6);
        \u0275\u0275conditionalCreate(12, ImageGenModalComponent_Conditional_12_Template, 1, 7, "image-gen-layer", 7)(13, ImageGenModalComponent_Conditional_13_Template, 1, 0, "mat-spinner", 8)(14, ImageGenModalComponent_Conditional_14_Template, 2, 6, "img", 9)(15, ImageGenModalComponent_Conditional_15_Template, 3, 3, "p", 10);
        \u0275\u0275conditionalCreate(16, ImageGenModalComponent_Conditional_16_Template, 7, 4, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(17, ImageGenModalComponent_Conditional_17_Template, 7, 3, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "aside", 13)(19, "div", 14);
        \u0275\u0275conditionalCreate(20, ImageGenModalComponent_Conditional_20_Template, 18, 14)(21, ImageGenModalComponent_Conditional_21_Template, 2, 2);
        \u0275\u0275elementStart(22, "image-gen-references", 15);
        \u0275\u0275listener("picked", function ImageGenModalComponent_Template_image_gen_references_picked_22_listener($event) {
          return ctx.addReferences($event, "include");
        })("removed", function ImageGenModalComponent_Template_image_gen_references_removed_22_listener($event) {
          return ctx.removeReference($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "image-gen-references", 16);
        \u0275\u0275listener("picked", function ImageGenModalComponent_Template_image_gen_references_picked_23_listener($event) {
          return ctx.addReferences($event, "style");
        })("removed", function ImageGenModalComponent_Template_image_gen_references_removed_23_listener($event) {
          return ctx.removeReference($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(24, ImageGenModalComponent_Conditional_24_Template, 5, 10, "div", 17);
        \u0275\u0275conditionalCreate(25, ImageGenModalComponent_Conditional_25_Template, 2, 1, "p", 18);
        \u0275\u0275conditionalCreate(26, ImageGenModalComponent_Conditional_26_Template, 2, 1, "p", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "footer", 19);
        \u0275\u0275conditionalCreate(28, ImageGenModalComponent_Conditional_28_Template, 3, 3, "button", 20)(29, ImageGenModalComponent_Conditional_29_Template, 4, 5)(30, ImageGenModalComponent_Conditional_30_Template, 6, 6);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 18, ctx.heading()), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.saving());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 20, "COMMON.CLOSE"));
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.selected_object_url() ? 12 : ctx.selected() ? 13 : ctx.source_url() ? 14 : ctx.state() !== "generating" ? 15 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.state() === "generating" ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.rail().length ? 17 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.show_compose() ? 20 : 21);
        \u0275\u0275advance(2);
        \u0275\u0275property("items", ctx.include_references())("uploading", ctx.uploading_references())("max", ctx.include_max());
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.style_items())("uploading", ctx.uploading_references())("max", ctx.style_max())("offset", ctx.include_references().length);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.show_compose() ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.quota_note() ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.engine_note() ? 26 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.state() === "generating" ? 28 : ctx.show_compose() ? 29 : 30);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatDialogModule,
      MatDialogClose,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatSlideToggleModule,
      MatSlideToggle,
      MatTooltipModule,
      MatTooltip,
      AuthenticatedImageDirective,
      IconComponent,
      ImageGenLayerComponent,
      ImageGenLayerControlsComponent,
      ImageGenReferencesComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageGenModalComponent, [{
    type: Component,
    args: [{
      selector: "image-gen-modal",
      template: `
        <div class="bg-base-100 flex h-full w-full flex-col overflow-hidden">
            <header
                class="bg-base-200 m-2 w-[calc(100%-1rem)] shrink-0 rounded-sm border-none p-2"
            >
                <h2 id="image-gen-modal-title" class="px-2 text-xl font-medium">
                    {{ heading() | translate }}
                </h2>
                <button
                    icon
                    type="button"
                    matRipple
                    mat-dialog-close
                    [disabled]="saving()"
                    [attr.aria-label]="'COMMON.CLOSE' | translate"
                >
                    <icon>close</icon>
                </button>
            </header>

            <div class="flex min-h-0 flex-1 flex-col gap-2 px-2 pb-2 md:flex-row">
                <!-- the picture, given the room -->
                <section
                    class="flex min-h-48 min-w-0 flex-1 flex-col gap-2 md:min-h-0"
                >
                    <div
                        class="border-base-300 bg-base-200 relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-lg border"
                    >
                        @if (selected_object_url()) {
                            <image-gen-layer
                                class="h-full w-full"
                                [class.opacity-40]="state() === 'generating'"
                                [image_url]="selected_object_url()"
                                [logo_on_light]="logo_on_light()"
                                [logo_on_dark]="logo_on_dark()"
                                [brand]="applied_brand()"
                                [state]="layer_state()"
                                (changed)="layer_state.set($event)"
                                (failed)="onArtworkFailed()"
                            ></image-gen-layer>
                        } @else if (selected()) {
                            <!-- the pick is still being read; the source
                                 image here would look like the result -->
                            <mat-spinner diameter="32"></mat-spinner>
                        } @else if (source_url()) {
                            <img
                                auth
                                [source]="source_url()"
                                class="max-h-full max-w-full object-contain"
                                [class.opacity-40]="state() === 'generating'"
                                [alt]="
                                    'SIGNAGE_MANAGER.IMAGE_GEN_CHANGING_THIS'
                                        | translate
                                "
                            />
                        } @else if (state() !== 'generating') {
                            <p class="text-base-content/50 m-0 px-6 text-sm">
                                {{
                                    'SIGNAGE_MANAGER.IMAGE_GEN_PREVIEW_EMPTY'
                                        | translate
                                }}
                            </p>
                        }

                        @if (state() === 'generating') {
                            <div
                                class="absolute inset-0 flex flex-col items-center justify-center gap-3"
                            >
                                <mat-spinner diameter="48"></mat-spinner>
                                <p class="m-0 text-sm">
                                    {{
                                        'SIGNAGE_MANAGER.IMAGE_GEN_WORKING'
                                            | translate
                                    }}
                                </p>
                                <p class="text-base-content/60 m-0 text-xs">
                                    {{ progress_note() }}
                                </p>
                            </div>
                        }
                    </div>

                    <!-- every candidate of every job in this session, oldest first -->
                    @if (rail().length) {
                        <div class="flex shrink-0 flex-col gap-1">
                            <p class="m-0 text-sm font-medium">
                                {{
                                    'SIGNAGE_MANAGER.IMAGE_GEN_VERSIONS'
                                        | translate
                                }}
                            </p>
                            <!-- padded so the selection ring is not clipped -->
                            <div class="flex gap-2 overflow-x-auto p-1">
                                @for (
                                    candidate of rail();
                                    track candidate.job_id +
                                        '-' +
                                        candidate.index
                                ) {
                                    <!-- a new result takes the preview when
                                         it lands, so no pick while one runs -->
                                    <button
                                        type="button"
                                        [disabled]="
                                            claim_pending() ||
                                            saving() ||
                                            state() === 'generating'
                                        "
                                        class="border-base-300 ring-primary ring-offset-base-100 h-16 w-28 shrink-0 overflow-hidden rounded-lg border ring-offset-2 disabled:opacity-60"
                                        [class.ring-2]="
                                            selected()?.upload_id ===
                                            candidate.upload_id
                                        "
                                        [attr.aria-pressed]="
                                            selected()?.upload_id ===
                                            candidate.upload_id
                                        "
                                        [matTooltip]="versionLabel(candidate)"
                                        (click)="select(candidate)"
                                    >
                                        <img
                                            auth
                                            [source]="candidate.url"
                                            class="h-full w-full object-cover"
                                            [alt]="versionLabel(candidate)"
                                        />
                                    </button>
                                }
                            </div>
                        </div>
                    }
                </section>

                <!-- everything that shapes it -->
                <aside
                    class="border-base-300 bg-base-100 flex min-h-0 w-full flex-1 flex-col rounded-lg border md:w-96 md:flex-none md:shrink-0"
                >
                    <div class="flex-1 space-y-4 overflow-y-auto p-4">
                        @if (show_compose()) {
                            <div class="flex flex-col">
                                <label
                                    for="image-gen-brief"
                                    class="mb-1 text-sm"
                                    >{{
                                        (is_edit()
                                            ? 'SIGNAGE_MANAGER.IMAGE_GEN_INSTRUCTION'
                                            : 'SIGNAGE_MANAGER.IMAGE_GEN_BRIEF'
                                        ) | translate
                                    }}</label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <textarea
                                        matInput
                                        id="image-gen-brief"
                                        rows="4"
                                        [placeholder]="
                                            (is_edit()
                                                ? 'SIGNAGE_MANAGER.IMAGE_GEN_INSTRUCTION_HINT'
                                                : 'SIGNAGE_MANAGER.IMAGE_GEN_BRIEF_HINT'
                                            ) | translate
                                        "
                                        [(ngModel)]="brief"
                                        (keydown.control.enter)="start()"
                                        (keydown.meta.enter)="start()"
                                    ></textarea>
                                </mat-form-field>
                            </div>

                            <!-- an edit comes back at the source's own
                                 shape, so there is nothing here to choose -->
                            @if (!is_edit()) {
                                <div class="flex flex-col">
                                    <!-- a mat-select names itself from the
                                         label by its id -->
                                    <label
                                        id="image-gen-shape-label"
                                        for="image-gen-shape"
                                        class="mb-1 text-sm"
                                        >{{
                                            'SIGNAGE_MANAGER.IMAGE_GEN_SHAPE'
                                                | translate
                                        }}</label
                                    >
                                    <mat-form-field
                                        appearance="outline"
                                        class="no-subscript w-full"
                                    >
                                        <mat-select
                                            id="image-gen-shape"
                                            aria-labelledby="image-gen-shape-label"
                                            [(ngModel)]="aspect"
                                        >
                                            @for (
                                                option of aspect_options();
                                                track option
                                            ) {
                                                <mat-option [value]="option">{{
                                                    option
                                                }}</mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            }
                            <div class="flex flex-col">
                                <label
                                    id="image-gen-count-label"
                                    for="image-gen-count"
                                    class="mb-1 text-sm"
                                    >{{
                                        'SIGNAGE_MANAGER.IMAGE_GEN_OPTIONS_COUNT'
                                            | translate
                                    }}</label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <mat-select
                                        id="image-gen-count"
                                        aria-labelledby="image-gen-count-label"
                                        [(ngModel)]="candidates"
                                    >
                                        @for (
                                            count of candidate_options();
                                            track count
                                        ) {
                                            <mat-option [value]="count">{{
                                                count
                                            }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>

                            @if (has_branding()) {
                                <div class="flex flex-col gap-1">
                                    <mat-slide-toggle
                                        [(ngModel)]="use_branding"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.IMAGE_GEN_USE_BRANDING'
                                                | translate
                                        }}
                                    </mat-slide-toggle>
                                    <p class="text-base-content/60 m-0 text-xs">
                                        {{
                                            'SIGNAGE_MANAGER.IMAGE_GEN_USE_BRANDING_HINT'
                                                | translate
                                        }}
                                    </p>
                                </div>
                            }

                            <!-- both only shape a new picture: an edit keeps
                                 whatever the image already has -->
                            @if (!is_edit()) {
                                <div class="flex flex-col gap-1">
                                    <mat-slide-toggle
                                        [(ngModel)]="add_text_with_layer"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.IMAGE_GEN_ADD_WORDS_LAYER'
                                                | translate
                                        }}
                                    </mat-slide-toggle>
                                    <p class="text-base-content/60 m-0 text-xs">
                                        {{
                                            'SIGNAGE_MANAGER.IMAGE_GEN_ADD_WORDS_LAYER_HINT'
                                                | translate
                                        }}
                                    </p>
                                </div>

                                @if (has_logo()) {
                                    <mat-slide-toggle
                                        [(ngModel)]="include_logo"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.IMAGE_GEN_LEAVE_LOGO_SPACE'
                                                | translate
                                        }}
                                    </mat-slide-toggle>
                                }
                            }
                        } @else {
                            <!-- the brief has already been spent; from here the
                                 box asks for a change to what is on screen -->
                            @if (brief()) {
                                <p
                                    class="text-base-content/60 m-0 text-xs italic"
                                >
                                    &ldquo;{{ brief() }}&rdquo;
                                </p>
                            }
                            <!-- refining sends the pick back through the edit
                                 model, so it follows the ai-editing flag -->
                            @if (can_refine()) {
                                <div class="flex flex-col gap-2">
                                    <div class="flex flex-col">
                                        <label
                                            for="image-gen-refine"
                                            class="mb-1 text-sm"
                                            >{{
                                                'SIGNAGE_MANAGER.IMAGE_GEN_REFINE'
                                                    | translate
                                            }}</label
                                        >
                                        <mat-form-field
                                            appearance="outline"
                                            class="no-subscript w-full"
                                        >
                                            <textarea
                                                matInput
                                                id="image-gen-refine"
                                                rows="2"
                                                [placeholder]="
                                                    'SIGNAGE_MANAGER.IMAGE_GEN_REFINE_HINT'
                                                        | translate
                                                "
                                                [(ngModel)]="refinement"
                                                (keydown.control.enter)="
                                                    refine()
                                                "
                                                (keydown.meta.enter)="refine()"
                                            ></textarea>
                                        </mat-form-field>
                                    </div>
                                    <button
                                        btn
                                        matRipple
                                        type="button"
                                        class="inverse self-start"
                                        [disabled]="
                                            !refinement().trim() ||
                                            !selected() ||
                                            state() === 'generating' ||
                                            claim_pending() ||
                                            saving()
                                        "
                                        (click)="refine()"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.IMAGE_GEN_REFINE_ACTION'
                                                | translate
                                        }}
                                    </button>
                                </div>
                            }
                        }

                        <image-gen-references
                            [items]="include_references()"
                            [uploading]="uploading_references()"
                            [max]="include_max()"
                            title="SIGNAGE_MANAGER.IMAGE_GEN_INCLUDE_IMAGES"
                            hint="SIGNAGE_MANAGER.IMAGE_GEN_INCLUDE_IMAGES_HINT"
                            (picked)="addReferences($event, 'include')"
                            (removed)="removeReference($event)"
                        ></image-gen-references>

                        <image-gen-references
                            [items]="style_items()"
                            [uploading]="uploading_references()"
                            [max]="style_max()"
                            [offset]="include_references().length"
                            title="SIGNAGE_MANAGER.IMAGE_GEN_STYLE_REFERENCE"
                            hint="SIGNAGE_MANAGER.IMAGE_GEN_STYLE_REFERENCE_HINT"
                            add_label="SIGNAGE_MANAGER.IMAGE_GEN_REFERENCE_ADD_ONE"
                            (picked)="addReferences($event, 'style')"
                            (removed)="removeReference($event)"
                        ></image-gen-references>

                        @if (!show_compose()) {
                            <div class="border-base-300 border-t pt-4">
                                <p class="m-0 mb-2 text-sm font-medium">
                                    {{
                                        'SIGNAGE_MANAGER.IMAGE_GEN_WORDS_AND_LOGO'
                                            | translate
                                    }}
                                </p>
                                <image-gen-layer-controls
                                    [state]="layer_state()"
                                    [logo_on_light]="logo_on_light()"
                                    [logo_on_dark]="logo_on_dark()"
                                    [brand]="applied_brand()"
                                    [can_set_logo]="can_set_logo()"
                                    [branding_editing]="branding_editing()"
                                    [uploading]="uploading_logo()"
                                    (changed)="layer_state.set($event)"
                                    (logoPicked)="uploadLogo($event)"
                                ></image-gen-layer-controls>
                            </div>
                        }

                        @if (quota_note()) {
                            <p class="text-base-content/60 m-0 text-xs">
                                {{ quota_note() }}
                            </p>
                        }
                        @if (engine_note()) {
                            <p class="text-base-content/60 m-0 text-xs">
                                {{ engine_note() }}
                            </p>
                        }
                    </div>

                    <footer
                        class="border-base-300 flex shrink-0 items-center justify-end gap-2 border-t p-2"
                    >
                        @if (state() === 'generating') {
                            <button
                                btn
                                matRipple
                                type="button"
                                class="inverse min-w-32"
                                (click)="cancel()"
                            >
                                {{ 'COMMON.CANCEL' | translate }}
                            </button>
                        } @else if (show_compose()) {
                            @if (rail().length) {
                                <button
                                    btn
                                    matRipple
                                    type="button"
                                    class="inverse min-w-32"
                                    (click)="composing.set(false)"
                                >
                                    {{ 'COMMON.BACK' | translate }}
                                </button>
                            }
                            <button
                                btn
                                matRipple
                                type="button"
                                class="min-w-32"
                                [disabled]="!brief().trim()"
                                (click)="start()"
                            >
                                {{
                                    'SIGNAGE_MANAGER.IMAGE_GEN_GENERATE'
                                        | translate
                                }}
                            </button>
                        } @else {
                            <button
                                btn
                                matRipple
                                type="button"
                                class="inverse min-w-32"
                                [disabled]="claim_pending() || saving()"
                                (click)="composing.set(true)"
                            >
                                {{
                                    'SIGNAGE_MANAGER.IMAGE_GEN_NEW_BRIEF'
                                        | translate
                                }}
                            </button>
                            <button
                                btn
                                matRipple
                                type="button"
                                class="flex min-w-32 items-center justify-center gap-2"
                                [disabled]="!can_save()"
                                (click)="save()"
                            >
                                @if (saving()) {
                                    <mat-spinner diameter="18"></mat-spinner>
                                    {{
                                        'SIGNAGE_MANAGER.IMAGE_GEN_SAVING'
                                            | translate
                                    }}
                                } @else {
                                    {{ 'COMMON.SAVE' | translate }}
                                }
                            </button>
                        }
                    </footer>
                </aside>
            </div>
        </div>
    `,
      imports: [
        FormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTooltipModule,
        AuthenticatedImageDirective,
        IconComponent,
        TranslatePipe,
        ImageGenLayerComponent,
        ImageGenLayerControlsComponent,
        ImageGenReferencesComponent
      ]
    }]
  }], () => [], { _layer: [{ type: ViewChild, args: [forwardRef(() => ImageGenLayerComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageGenModalComponent, { className: "ImageGenModalComponent", filePath: "apps/signage-manager/src/app/image-gen/image-gen-modal.component.ts", lineNumber: 585 });
})();
export {
  ImageGenModalComponent
};
//# debugId=5142da1a-bc54-5fda-bd5c-fdf75e1d3eb6
//# sourceMappingURL=image-gen-modal.component-KHDMV5TR.js.map
