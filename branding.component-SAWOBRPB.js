import {
  BRAND_FONTS,
  brandEditingOn,
  canEditBrandKit,
  ensureBrandFont
} from "./chunk-5LOB5WLK.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-QAFPFGPO.js";
import "./chunk-PZOQ7KMB.js";
import {
  AuthenticatedImageDirective
} from "./chunk-CGDRULSM.js";
import {
  ImageGenService
} from "./chunk-AOMGWXLL.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-BUXOUYWY.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-BZ7UY2RA.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-G4RAFQJW.js";
import "./chunk-DKQ77FMR.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-WEGWBEFP.js";
import {
  SignageContextService,
  actionError
} from "./chunk-RUR53MNN.js";
import "./chunk-P5YDCKEY.js";
import {
  TranslatePipe
} from "./chunk-4R7BTQAK.js";
import "./chunk-IDK2QKPP.js";
import "./chunk-VCQ7GNNO.js";
import {
  Component,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  MatOption,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  ViewChild,
  computed,
  i18n,
  inject,
  notifyError,
  notifySuccess,
  setClassMetadata,
  signal,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-VC4MJRPT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/branding/branding.component.ts
var _c0 = ["logo_input"];
var _forTrack0 = ($index, $item) => $item.family;
var _forTrack1 = ($index, $item) => $item.id;
function BrandingComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 6);
    \u0275\u0275elementEnd();
  }
}
function BrandingComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 7);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 8);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 9);
    \u0275\u0275listener("click", function BrandingComponent_Conditional_8_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.load());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "SIGNAGE_MANAGER.BRAND_LOAD_ERROR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "COMMON.RETRY"), " ");
  }
}
function BrandingComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10)(1, "icon", 31);
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, ctx_r1.branding_disabled() ? "SIGNAGE_MANAGER.BRAND_DISABLED" : "SIGNAGE_MANAGER.BRAND_READ_ONLY"), " ");
  }
}
function BrandingComponent_Conditional_9_For_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function BrandingComponent_Conditional_9_For_12_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const $index_r5 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeColour($index_r5));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.colours().length < 2)("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.BRAND_REMOVE_COLOUR"));
  }
}
function BrandingComponent_Conditional_9_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "input", 32);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("input", function BrandingComponent_Conditional_9_For_12_Template_input_input_1_listener($event) {
      const $index_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setColourFromInput($index_r5, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 33)(4, "input", 34);
    \u0275\u0275listener("ngModelChange", function BrandingComponent_Conditional_9_For_12_Template_input_ngModelChange_4_listener($event) {
      const $index_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setColour($index_r5, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BrandingComponent_Conditional_9_For_12_Conditional_7_Template, 4, 4, "button", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const colour_r7 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("cursor-pointer", ctx_r1.can_edit());
    \u0275\u0275property("disabled", !ctx_r1.can_edit())("value", colour_r7.value);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 12, "SIGNAGE_MANAGER.BRAND_COLOURS"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-error", ctx_r1.colour_errors()[$index_r5]);
    \u0275\u0275property("ngModel", colour_r7.value)("disabled", !ctx_r1.can_edit());
    \u0275\u0275attribute("aria-invalid", ctx_r1.colour_errors()[$index_r5] ? "true" : null);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(colour_r7.key);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_edit() ? 7 : -1);
  }
}
function BrandingComponent_Conditional_9_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function BrandingComponent_Conditional_9_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addColour());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.BRAND_ADD_COLOUR"), " ");
  }
}
function BrandingComponent_Conditional_9_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    \u0275\u0275property("value", option_r9.family);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r9.family ? option_r9.label : \u0275\u0275pipeBind1(2, 2, option_r9.label));
  }
}
function BrandingComponent_Conditional_9_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.BRAND_LOGO_HINT"), " ");
  }
}
function BrandingComponent_Conditional_9_For_30_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.BRAND_LOGO_DERIVED"));
  }
}
function BrandingComponent_Conditional_9_For_30_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 42);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const slot_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r1.logoUrl(slot_r10.id))("alt", \u0275\u0275pipeBind1(1, 2, slot_r10.label));
  }
}
function BrandingComponent_Conditional_9_For_30_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("color", slot_r10.faded);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "SIGNAGE_MANAGER.IMAGE_GEN_NO_LOGO_YET"));
  }
}
function BrandingComponent_Conditional_9_For_30_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function BrandingComponent_Conditional_9_For_30_Conditional_9_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const slot_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.derive(slot_r10.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", !!ctx_r1.busy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SIGNAGE_MANAGER.BRAND_LOGO_MAKE_IT"), " ");
  }
}
function BrandingComponent_Conditional_9_For_30_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "button", 46);
    \u0275\u0275listener("click", function BrandingComponent_Conditional_9_For_30_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const slot_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pick(slot_r10.id));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, BrandingComponent_Conditional_9_For_30_Conditional_9_Conditional_4_Template, 3, 4, "button", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !!ctx_r1.busy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, ctx_r1.busy() === slot_r10.id ? "SIGNAGE_MANAGER.IMAGE_GEN_LOGO_UPLOADING" : ctx_r1.logoId(slot_r10.id) ? "SIGNAGE_MANAGER.IMAGE_GEN_REPLACE_LOGO" : "SIGNAGE_MANAGER.IMAGE_GEN_ADD_LOGO"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.logoId(slot_r10.id) && ctx_r1.logoId(ctx_r1.other(slot_r10.id)) ? 4 : -1);
  }
}
function BrandingComponent_Conditional_9_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 38)(2, "span", 39);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, BrandingComponent_Conditional_9_For_30_Conditional_5_Template, 3, 3, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 41);
    \u0275\u0275conditionalCreate(7, BrandingComponent_Conditional_9_For_30_Conditional_7_Template, 2, 4, "img", 42)(8, BrandingComponent_Conditional_9_For_30_Conditional_8_Template, 3, 5, "span", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, BrandingComponent_Conditional_9_For_30_Conditional_9_Template, 5, 5, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, slot_r10.label));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.derived() === slot_r10.id ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", slot_r10.ground);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.logoId(slot_r10.id) ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_edit() ? 9 : -1);
  }
}
function BrandingComponent_Conditional_9_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function BrandingComponent_Conditional_9_Conditional_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r1.saving() ? "COMMON.SAVING" : "COMMON.SAVE"), " ");
  }
}
function BrandingComponent_Conditional_9_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.BRAND_IMAGE_GEN_OFF"));
  }
}
function BrandingComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, BrandingComponent_Conditional_9_Conditional_0_Template, 5, 3, "p", 10);
    \u0275\u0275elementStart(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 12)(5, "input", 13);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function BrandingComponent_Conditional_9_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.organisation, $event) || (ctx_r1.organisation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 14);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 15);
    \u0275\u0275repeaterCreate(11, BrandingComponent_Conditional_9_For_12_Template, 8, 14, "div", 16, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(13, BrandingComponent_Conditional_9_Conditional_13_Template, 3, 3, "button", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "label", 18);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 19)(18, "mat-select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function BrandingComponent_Conditional_9_Template_mat_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.font, $event) || (ctx_r1.font = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function BrandingComponent_Conditional_9_Template_mat_select_ngModelChange_18_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.previewFont());
    });
    \u0275\u0275repeaterCreate(19, BrandingComponent_Conditional_9_For_20_Template, 3, 4, "mat-option", 21, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 22);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "label", 23);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, BrandingComponent_Conditional_9_Conditional_27_Template, 3, 3, "p", 24);
    \u0275\u0275elementStart(28, "div", 25);
    \u0275\u0275repeaterCreate(29, BrandingComponent_Conditional_9_For_30_Template, 10, 8, "div", 26, _forTrack1);
    \u0275\u0275elementStart(31, "input", 27, 0);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275listener("change", function BrandingComponent_Conditional_9_Template_input_change_31_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pickLogo($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 28);
    \u0275\u0275conditionalCreate(35, BrandingComponent_Conditional_9_Conditional_35_Template, 3, 4, "button", 29);
    \u0275\u0275conditionalCreate(36, BrandingComponent_Conditional_9_Conditional_36_Template, 3, 3, "span", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r1.can_edit() ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 18, "SIGNAGE_MANAGER.BRAND_ORGANISATION"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.organisation);
    \u0275\u0275property("disabled", !ctx_r1.can_edit())("placeholder", \u0275\u0275pipeBind1(6, 20, "SIGNAGE_MANAGER.BRAND_ORGANISATION"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 22, "SIGNAGE_MANAGER.BRAND_COLOURS"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.colours());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_edit() && ctx_r1.colours().length < ctx_r1.max_colours ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 24, "SIGNAGE_MANAGER.BRAND_FONT"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.font);
    \u0275\u0275property("disabled", !ctx_r1.can_edit());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.fonts);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("font-family", ctx_r1.font_stack());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 26, "SIGNAGE_MANAGER.BRAND_FONT_SAMPLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 28, "SIGNAGE_MANAGER.BRAND_LOGO"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_edit() ? 27 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.slots);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(33, 30, "SIGNAGE_MANAGER.IMAGE_GEN_ADD_LOGO"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.can_edit() ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.enabled() ? 36 : -1);
  }
}
var COLOUR_NAMES = ["primary", "secondary", "accent"];
var MAX_COLOURS = 3;
var BrandingComponent = class _BrandingComponent {
  constructor() {
    this._image_gen = inject(ImageGenService);
    this._context = inject(SignageContextService);
    this.fonts = BRAND_FONTS;
    this.enabled = this._image_gen.enabled;
    this.branding_disabled = computed(
      () => !brandEditingOn(this._context),
      ...ngDevMode ? [{ debugName: "branding_disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.load_state = signal(
      "loading",
      ...ngDevMode ? [{ debugName: "load_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_edit = computed(
      () => canEditBrandKit(this._context) && this.load_state() === "ready",
      ...ngDevMode ? [{ debugName: "can_edit" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.organisation = signal(
      "",
      ...ngDevMode ? [{ debugName: "organisation" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.colours = signal(
      [
        { key: "primary", value: "#0E6E52" }
      ],
      ...ngDevMode ? [{ debugName: "colours" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max_colours = MAX_COLOURS;
    this.font = signal(
      "",
      ...ngDevMode ? [{ debugName: "font" }] : (
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
    this.busy = signal(
      "",
      ...ngDevMode ? [{ debugName: "busy" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.logos = signal(
      {
        on_light: "",
        on_dark: ""
      },
      ...ngDevMode ? [{ debugName: "logos" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.derived = signal(
      "",
      ...ngDevMode ? [{ debugName: "derived" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._extra_palette = {};
    this.slots = [
      {
        id: "on_light",
        label: "SIGNAGE_MANAGER.BRAND_LOGO_ON_LIGHT",
        ground: "#FFFFFF",
        faded: "rgba(0, 0, 0, 0.45)"
      },
      {
        id: "on_dark",
        label: "SIGNAGE_MANAGER.BRAND_LOGO_ON_DARK",
        ground: "#1B2420",
        faded: "rgba(255, 255, 255, 0.55)"
      }
    ];
    this._logo_input = viewChild(
      "logo_input",
      ...ngDevMode ? [{ debugName: "_logo_input" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._target = "on_light";
    this.font_stack = computed(
      () => {
        const family = this.font();
        return family ? `"${family}", system-ui, sans-serif` : "system-ui, sans-serif";
      },
      ...ngDevMode ? [{ debugName: "font_stack" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.colour_errors = computed(
      () => this.colours().map((colour) => !_BrandingComponent.COLOUR.test(colour.value)),
      ...ngDevMode ? [{ debugName: "colour_errors" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    await this.load();
    this.previewFont();
  }
  /** Read the brand kit, unless an earlier read already worked */
  async load() {
    this.load_state.set("loading");
    if (this._image_gen.brand_kit_read() !== "ok") {
      await this._image_gen.reloadBrandKit();
    }
    if (this._image_gen.brand_kit_read() !== "ok") {
      this.load_state.set("failed");
      return;
    }
    const brand = this._image_gen.brand_kit();
    if (brand)
      this._apply(brand);
    this.load_state.set("ready");
  }
  addColour() {
    if (this.colours().length >= MAX_COLOURS)
      return;
    this.colours.update((list) => [
      ...list,
      { key: this._freeKey(), value: "#1B2420" }
    ]);
  }
  /** the first palette key not in use, so a new colour replaces nothing */
  _freeKey() {
    const used = /* @__PURE__ */ new Set([
      ...this.colours().map((colour) => colour.key),
      ...Object.keys(this._extra_palette)
    ]);
    const names = [
      ...COLOUR_NAMES,
      ...Array.from({ length: used.size + 1 }, (_, index) => `colour ${index + 1}`)
    ];
    return names.find((name) => !used.has(name)) || `colour ${used.size + 1}`;
  }
  removeColour(index) {
    if (this.colours().length < 2)
      return;
    this.colours.update((list) => list.filter((_, i) => i !== index));
  }
  static {
    this.COLOUR = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
  }
  setColour(index, value) {
    this.colours.update((list) => list.map((colour, i) => i === index ? __spreadProps(__spreadValues({}, colour), { value }) : colour));
  }
  setColourFromInput(index, event) {
    const input = event.target;
    if (input instanceof HTMLInputElement) {
      this.setColour(index, input.value);
    }
  }
  previewFont() {
    ensureBrandFont(this.font());
  }
  logoId(slot) {
    return this.logos()[slot];
  }
  logoUrl(slot) {
    const id = this.logos()[slot];
    return id ? `/api/engine/v2/uploads/${encodeURIComponent(id)}/url` : "";
  }
  other(slot) {
    return slot === "on_light" ? "on_dark" : "on_light";
  }
  pick(slot) {
    if (!this.can_edit())
      return;
    this._target = slot;
    this._logo_input()?.nativeElement.click();
  }
  async pickLogo(event) {
    if (!this.can_edit())
      return;
    const input = event.target;
    const file = input.files?.[0];
    input.value = "";
    if (!file)
      return;
    const slot = this._target;
    this.busy.set(slot);
    try {
      const kit = await this._image_gen.replaceBrandLogo(slot, file, !this.logoId(this.other(slot)));
      this._applyLogos(kit);
      notifySuccess(i18n("SIGNAGE_MANAGER.IMAGE_GEN_LOGO_SAVED"));
    } catch (error) {
      notifyError(actionError(error, i18n("SIGNAGE_MANAGER.BRAND_SAVE_FAILED")));
    } finally {
      this.busy.set("");
    }
  }
  /** make this slot from the other one */
  async derive(slot) {
    if (!this.can_edit())
      return;
    this.busy.set(slot);
    try {
      const kit = await this._image_gen.deriveBrandLogo(slot);
      this._applyLogos(kit);
      notifySuccess(i18n("SIGNAGE_MANAGER.BRAND_LOGO_MADE"));
    } catch (error) {
      notifyError(actionError(error, i18n("SIGNAGE_MANAGER.BRAND_SAVE_FAILED")));
    } finally {
      this.busy.set("");
    }
  }
  async save() {
    if (!this.can_edit())
      return;
    if (this.colour_errors().some(Boolean)) {
      notifyError(i18n("SIGNAGE_MANAGER.BRAND_COLOUR_INVALID"));
      return;
    }
    this.saving.set(true);
    try {
      const palette = __spreadValues({}, this._extra_palette);
      for (const colour of this.colours()) {
        palette[colour.key] = colour.value;
      }
      await this._image_gen.saveBrandKit({
        organisation: this.organisation().trim() || void 0,
        palette,
        font: this.font() ? { family: this.font() } : void 0
      });
      notifySuccess(i18n("SIGNAGE_MANAGER.BRAND_SAVED"));
    } catch (error) {
      notifyError(actionError(error, i18n("SIGNAGE_MANAGER.BRAND_SAVE_FAILED")));
    } finally {
      this.saving.set(false);
    }
  }
  _apply(brand) {
    this.organisation.set(brand.organisation || "");
    const palette = brand.palette || {};
    const ordered = [
      ...COLOUR_NAMES.filter((name) => palette[name]),
      ...Object.keys(palette).filter((key) => !COLOUR_NAMES.includes(key))
    ];
    if (ordered.length) {
      this.colours.set(ordered.slice(0, MAX_COLOURS).map((key) => ({ key, value: palette[key] })));
    }
    this._extra_palette = Object.fromEntries(ordered.slice(MAX_COLOURS).map((key) => [key, palette[key]]));
    const font = brand.font;
    this.font.set(typeof font === "string" ? font : font?.family || "");
    this._applyLogos(brand);
  }
  _applyLogos(brand) {
    this.logos.set({
      on_light: brand.logo_upload_id || "",
      on_dark: brand.logo_dark_upload_id || ""
    });
    this.derived.set(brand.logo_derived || "");
  }
  static {
    this.\u0275fac = function BrandingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BrandingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrandingComponent, selectors: [["app-branding"]], viewQuery: function BrandingComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._logo_input, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 10, vars: 7, consts: [["logo_input", ""], [1, "absolute", "inset-0", "flex", "flex-col", "overflow-auto", "p-6"], [1, "mb-1", "text-2xl"], [1, "text-base-content/60", "mb-6", "text-sm"], [1, "flex", "justify-center", "p-8"], [1, "border-error/40", "bg-error/10", "flex", "items-center", "gap-3", "rounded-lg", "border", "p-3", "text-sm"], ["diameter", "32"], [1, "text-error"], [1, "flex-1"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", 3, "click"], [1, "border-base-300", "bg-base-200", "mb-6", "flex", "items-center", "gap-2", "rounded-lg", "border", "p-3", "text-sm"], ["for", "brand-org"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "id", "brand-org", 3, "ngModelChange", "ngModel", "disabled", "placeholder"], [1, "mt-4", "mb-2", "block"], [1, "flex", "flex-col", "items-start", "gap-2"], [1, "flex", "items-center", "gap-3"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse"], ["for", "brand-font", 1, "mt-6"], ["appearance", "outline", 1, "w-full", "max-w-sm"], ["id", "brand-font", 3, "ngModelChange", "ngModel", "disabled"], [3, "value"], [1, "border-base-300", "bg-base-200", "mb-2", "rounded-lg", "border", "p-4", "text-2xl"], [1, "mt-6"], [1, "text-base-content/60", "mb-2", "text-sm"], [1, "flex", "flex-col", "gap-4", "sm:flex-row"], [1, "border-base-300", "flex", "min-w-0", "flex-1", "flex-col", "gap-3", "rounded-lg", "border", "p-4"], ["type", "file", "accept", "image/png,image/jpeg,image/webp,image/svg+xml", 1, "sr-only", 3, "change"], [1, "mt-8", "flex", "items-center", "gap-3"], ["btn", "", "matRipple", "", "type", "button", 1, "w-40", 3, "disabled"], [1, "text-base-content/60", "text-sm"], [1, "text-base-content/60"], ["type", "color", 1, "border-base-300", "h-10", "w-14", "rounded", "border", "bg-transparent", "disabled:cursor-not-allowed", "disabled:opacity-60", 3, "input", "disabled", "value"], ["appearance", "outline", 1, "no-subscript", "w-40"], ["matInput", "", "placeholder", "#0E6E52", 3, "ngModelChange", "ngModel", "disabled"], [1, "text-base-content/60", "text-xs", "uppercase"], ["icon", "", "default", "", "error", "", "type", "button", 3, "disabled", "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", 3, "click", "disabled", "matTooltip"], [1, "flex", "items-baseline", "justify-between", "gap-2"], [1, "text-sm", "font-medium"], [1, "text-base-content/60", "shrink-0", "text-xs"], [1, "flex", "h-28", "items-center", "justify-center", "rounded", "p-3"], ["auth", "", 1, "max-h-full", "max-w-full", 3, "source", "alt"], [1, "text-xs", 3, "color"], [1, "flex", "flex-wrap", "gap-2"], [1, "text-xs"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", 3, "click", "disabled"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", 3, "disabled"], ["btn", "", "matRipple", "", "type", "button", 1, "w-40", 3, "click", "disabled"]], template: function BrandingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "h1", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, BrandingComponent_Conditional_7_Template, 2, 0, "div", 4)(8, BrandingComponent_Conditional_8_Template, 9, 6, "div", 5)(9, BrandingComponent_Conditional_9_Template, 37, 32);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "SIGNAGE_MANAGER.BRAND_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "SIGNAGE_MANAGER.BRAND_HINT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.load_state() === "loading" ? 7 : ctx.load_state() === "failed" ? 8 : 9);
      }
    }, dependencies: [
      AuthenticatedImageDirective,
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
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrandingComponent, [{
    type: Component,
    args: [{
      selector: "app-branding",
      template: `
        <div class="absolute inset-0 flex flex-col overflow-auto p-6">
            <h1 class="mb-1 text-2xl">
                {{ 'SIGNAGE_MANAGER.BRAND_HEADER' | translate }}
            </h1>
            <p class="text-base-content/60 mb-6 text-sm">
                {{ 'SIGNAGE_MANAGER.BRAND_HINT' | translate }}
            </p>

            @if (load_state() === 'loading') {
                <div class="flex justify-center p-8">
                    <mat-spinner diameter="32" />
                </div>
            } @else if (load_state() === 'failed') {
                <div
                    class="border-error/40 bg-error/10 flex items-center gap-3 rounded-lg border p-3 text-sm"
                >
                    <icon class="text-error">error</icon>
                    <span class="flex-1">{{
                        'SIGNAGE_MANAGER.BRAND_LOAD_ERROR' | translate
                    }}</span>
                    <button
                        btn
                        matRipple
                        type="button"
                        class="inverse"
                        (click)="load()"
                    >
                        {{ 'COMMON.RETRY' | translate }}
                    </button>
                </div>
            } @else {
                @if (!can_edit()) {
                    <p
                        class="border-base-300 bg-base-200 mb-6 flex items-center gap-2 rounded-lg border p-3 text-sm"
                    >
                        <icon class="text-base-content/60">lock</icon>
                        {{
                            (branding_disabled()
                                ? 'SIGNAGE_MANAGER.BRAND_DISABLED'
                                : 'SIGNAGE_MANAGER.BRAND_READ_ONLY'
                            ) | translate
                        }}
                    </p>
                }

                <label for="brand-org">{{
                    'SIGNAGE_MANAGER.BRAND_ORGANISATION' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        id="brand-org"
                        [(ngModel)]="organisation"
                        [disabled]="!can_edit()"
                        [placeholder]="
                            'SIGNAGE_MANAGER.BRAND_ORGANISATION' | translate
                        "
                    />
                </mat-form-field>

                <label class="mt-4 mb-2 block">{{
                    'SIGNAGE_MANAGER.BRAND_COLOURS' | translate
                }}</label>
                <div class="flex flex-col items-start gap-2">
                    @for (colour of colours(); track $index) {
                        <div class="flex items-center gap-3">
                            <input
                                type="color"
                                class="border-base-300 h-10 w-14 rounded border bg-transparent disabled:cursor-not-allowed disabled:opacity-60"
                                [class.cursor-pointer]="can_edit()"
                                [disabled]="!can_edit()"
                                [value]="colour.value"
                                (input)="setColourFromInput($index, $event)"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.BRAND_COLOURS' | translate
                                "
                            />
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-40"
                            >
                                <input
                                    matInput
                                    [ngModel]="colour.value"
                                    (ngModelChange)="setColour($index, $event)"
                                    [disabled]="!can_edit()"
                                    [class.text-error]="colour_errors()[$index]"
                                    [attr.aria-invalid]="
                                        colour_errors()[$index] ? 'true' : null
                                    "
                                    placeholder="#0E6E52"
                                />
                            </mat-form-field>
                            <span
                                class="text-base-content/60 text-xs uppercase"
                                >{{ colour.key }}</span
                            >
                            @if (can_edit()) {
                                <button
                                    icon
                                    default
                                    error
                                    type="button"
                                    [disabled]="colours().length < 2"
                                    [matTooltip]="
                                        'SIGNAGE_MANAGER.BRAND_REMOVE_COLOUR'
                                            | translate
                                    "
                                    (click)="removeColour($index)"
                                >
                                    <icon>delete</icon>
                                </button>
                            }
                        </div>
                    }
                    @if (can_edit() && colours().length < max_colours) {
                        <button
                            btn
                            matRipple
                            type="button"
                            class="inverse"
                            (click)="addColour()"
                        >
                            {{ 'SIGNAGE_MANAGER.BRAND_ADD_COLOUR' | translate }}
                        </button>
                    }
                </div>

                <label class="mt-6" for="brand-font">{{
                    'SIGNAGE_MANAGER.BRAND_FONT' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full max-w-sm">
                    <mat-select
                        id="brand-font"
                        [(ngModel)]="font"
                        [disabled]="!can_edit()"
                        (ngModelChange)="previewFont()"
                    >
                        @for (option of fonts; track option.family) {
                            <mat-option [value]="option.family">{{
                                option.family
                                    ? option.label
                                    : (option.label | translate)
                            }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <p
                    class="border-base-300 bg-base-200 mb-2 rounded-lg border p-4 text-2xl"
                    [style.font-family]="font_stack()"
                >
                    {{ 'SIGNAGE_MANAGER.BRAND_FONT_SAMPLE' | translate }}
                </p>

                <label class="mt-6">{{
                    'SIGNAGE_MANAGER.BRAND_LOGO' | translate
                }}</label>
                @if (can_edit()) {
                    <p class="text-base-content/60 mb-2 text-sm">
                        {{ 'SIGNAGE_MANAGER.BRAND_LOGO_HINT' | translate }}
                    </p>
                }
                <div class="flex flex-col gap-4 sm:flex-row">
                    @for (slot of slots; track slot.id) {
                        <div
                            class="border-base-300 flex min-w-0 flex-1 flex-col gap-3 rounded-lg border p-4"
                        >
                            <div
                                class="flex items-baseline justify-between gap-2"
                            >
                                <span class="text-sm font-medium">{{
                                    slot.label | translate
                                }}</span>
                                @if (derived() === slot.id) {
                                    <span
                                        class="text-base-content/60 shrink-0 text-xs"
                                        >{{
                                            'SIGNAGE_MANAGER.BRAND_LOGO_DERIVED'
                                                | translate
                                        }}</span
                                    >
                                }
                            </div>

                            <!-- shown on the ground it is meant for, which is the
                             only way to tell whether it actually works -->
                            <div
                                class="flex h-28 items-center justify-center rounded p-3"
                                [style.background]="slot.ground"
                            >
                                @if (logoId(slot.id)) {
                                    <img
                                        auth
                                        [source]="logoUrl(slot.id)"
                                        class="max-h-full max-w-full"
                                        [alt]="slot.label | translate"
                                    />
                                } @else {
                                    <span
                                        class="text-xs"
                                        [style.color]="slot.faded"
                                        >{{
                                            'SIGNAGE_MANAGER.IMAGE_GEN_NO_LOGO_YET'
                                                | translate
                                        }}</span
                                    >
                                }
                            </div>

                            @if (can_edit()) {
                                <div class="flex flex-wrap gap-2">
                                    <button
                                        btn
                                        matRipple
                                        type="button"
                                        class="inverse"
                                        [disabled]="!!busy()"
                                        (click)="pick(slot.id)"
                                    >
                                        {{
                                            (busy() === slot.id
                                                ? 'SIGNAGE_MANAGER.IMAGE_GEN_LOGO_UPLOADING'
                                                : logoId(slot.id)
                                                  ? 'SIGNAGE_MANAGER.IMAGE_GEN_REPLACE_LOGO'
                                                  : 'SIGNAGE_MANAGER.IMAGE_GEN_ADD_LOGO'
                                            ) | translate
                                        }}
                                    </button>
                                    @if (
                                        !logoId(slot.id) &&
                                        logoId(other(slot.id))
                                    ) {
                                        <button
                                            btn
                                            matRipple
                                            type="button"
                                            class="inverse"
                                            [disabled]="!!busy()"
                                            (click)="derive(slot.id)"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.BRAND_LOGO_MAKE_IT'
                                                    | translate
                                            }}
                                        </button>
                                    }
                                </div>
                            }
                        </div>
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

                <div class="mt-8 flex items-center gap-3">
                    @if (can_edit()) {
                        <button
                            btn
                            matRipple
                            type="button"
                            class="w-40"
                            [disabled]="saving()"
                            (click)="save()"
                        >
                            {{
                                (saving() ? 'COMMON.SAVING' : 'COMMON.SAVE')
                                    | translate
                            }}
                        </button>
                    }
                    @if (!enabled()) {
                        <span class="text-base-content/60 text-sm">{{
                            'SIGNAGE_MANAGER.BRAND_IMAGE_GEN_OFF' | translate
                        }}</span>
                    }
                </div>
            }
        </div>
    `,
      imports: [
        AuthenticatedImageDirective,
        FormsModule,
        IconComponent,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatTooltipModule,
        TranslatePipe
      ]
    }]
  }], null, { _logo_input: [{ type: ViewChild, args: ["logo_input", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrandingComponent, { className: "BrandingComponent", filePath: "apps/signage-manager/src/app/branding/branding.component.ts", lineNumber: 348 });
})();
export {
  BrandingComponent
};
//# debugId=0a0bd39e-b7b3-5be9-9421-3c1e5f4068e1
//# sourceMappingURL=branding.component-SAWOBRPB.js.map
