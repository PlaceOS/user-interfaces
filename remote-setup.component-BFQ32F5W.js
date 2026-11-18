import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-OOVRKW7D.js";
import {
  openConfirmModal
} from "./chunk-B3Z5HBO5.js";
import {
  toSignal
} from "./chunk-JI46BRSK.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-T7T3HOKR.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-D6IG36GJ.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-Q6HIFJUC.js";
import {
  MatDialog
} from "./chunk-LPEK236K.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-C4DBDLPR.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel
} from "./chunk-LOS3TMSZ.js";
import "./chunk-QSYXYFEX.js";
import {
  MatOption
} from "./chunk-KXLDQQFL.js";
import "./chunk-4S73GIOG.js";
import "./chunk-OPBA4KSY.js";
import {
  TranslatePipe
} from "./chunk-L6347MOA.js";
import {
  IconComponent
} from "./chunk-XHLNZTFA.js";
import "./chunk-JWZ62QCO.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  OrganisationService,
  REMOTE_SETUP_CLEAR_LIST,
  initialisationComplete,
  isRemoteSetupCommand,
  remoteSetupClearList,
  remoteSetupCommandBinding,
  remoteSetupModule,
  ɵNgNoValidate
} from "./chunk-TZU5QKIT.js";
import {
  Ra,
  i18n,
  notifyError,
  notifySuccess,
  vl
} from "./chunk-QX32FVXP.js";
import "./chunk-KSPAXPMQ.js";
import "./chunk-LWUSUNNB.js";
import {
  MatRippleModule
} from "./chunk-GVTMIID5.js";
import {
  MatRipple
} from "./chunk-NOLYPWCK.js";
import "./chunk-THGATZR4.js";
import "./chunk-O6LGXEN6.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-647F7C2X.js";
import {
  CommonModule,
  Component,
  DatePipe,
  Input,
  NgTemplateOutlet,
  computed,
  debounced,
  effect,
  inject,
  input,
  linkedSignal,
  resource,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵanimateEnter,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WP37UGIF.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/components/src/lib/remote-setup-flow.component.ts
var _c0 = (a0) => ({ id: a0 });
var _c1 = (a0) => ({ app: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function RemoteSetupFlowComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function RemoteSetupFlowComponent_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectDevice(""));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "COMMON.BACK"));
  }
}
function RemoteSetupFlowComponent_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275animateEnter("motion-fade-in");
    \u0275\u0275element(1, "mat-spinner", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
  }
}
function RemoteSetupFlowComponent_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275animateEnter("motion-fade-in");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.REMOTE_SETUP_UNAVAILABLE"), " ");
  }
}
function RemoteSetupFlowComponent_Case_9_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 28);
    \u0275\u0275listener("click", function RemoteSetupFlowComponent_Case_9_For_14_Template_button_click_1_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectDevice(item_r5.id));
    });
    \u0275\u0275elementStart(2, "div", 29)(3, "div", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 31);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 32);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "icon", 33);
    \u0275\u0275text(13, " chevron_right ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r5.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(7, 4, ctx_r1.appName(item_r5.app)), " \xB7 ", item_r5.config?.system_id || \u0275\u0275pipeBind1(8, 6, "COMMON.REMOTE_SETUP_NOT_SET_UP"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 8, item_r5.last_seen, "short"), " ");
  }
}
function RemoteSetupFlowComponent_Case_9_ForEmpty_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.REMOTE_SETUP_NO_DEVICES"), " ");
  }
}
function RemoteSetupFlowComponent_Case_9_Conditional_23_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", app_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r1.appName(app_r7)), " ");
  }
}
function RemoteSetupFlowComponent_Case_9_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 24)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 34);
    \u0275\u0275twoWayListener("ngModelChange", function RemoteSetupFlowComponent_Case_9_Conditional_23_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.clear_app, $event) || (ctx_r1.clear_app = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(5, RemoteSetupFlowComponent_Case_9_Conditional_23_For_6_Template, 3, 4, "mat-option", 26, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.REMOTE_SETUP_APP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.clear_app);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.apps());
  }
}
function RemoteSetupFlowComponent_Case_9_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 26)(1, "div", 35)(2, "div", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    \u0275\u0275property("value", option_r8.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", option_r8.display_name || option_r8.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r8.id, " ");
  }
}
function RemoteSetupFlowComponent_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 14);
    \u0275\u0275animateEnter("motion-fade-in");
    \u0275\u0275listener("ngSubmit", function RemoteSetupFlowComponent_Case_9_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectDevice(ctx_r1.device_input()));
    });
    \u0275\u0275elementStart(1, "mat-form-field", 15)(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function RemoteSetupFlowComponent_Case_9_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.device_input, $event) || (ctx_r1.device_input = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 17);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h2", 18);
    \u0275\u0275animateEnter("motion-fade-in");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ul", 19);
    \u0275\u0275animateEnter("motion-fade-in");
    \u0275\u0275repeaterCreate(13, RemoteSetupFlowComponent_Case_9_For_14_Template, 14, 11, "li", null, _forTrack0, false, RemoteSetupFlowComponent_Case_9_ForEmpty_15_Template, 3, 3, "li", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "form", 21);
    \u0275\u0275animateEnter("motion-fade-in");
    \u0275\u0275listener("ngSubmit", function RemoteSetupFlowComponent_Case_9_Template_form_ngSubmit_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSystem());
    });
    \u0275\u0275elementStart(17, "h2", 22);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 23);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, RemoteSetupFlowComponent_Case_9_Conditional_23_Template, 7, 4, "mat-form-field", 24);
    \u0275\u0275elementStart(24, "mat-form-field", 24)(25, "mat-label");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 25);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RemoteSetupFlowComponent_Case_9_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.clear_system_id, $event) || (ctx_r1.clear_system_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-autocomplete", null, 2);
    \u0275\u0275repeaterCreate(32, RemoteSetupFlowComponent_Case_9_For_33_Template, 6, 3, "mat-option", 26, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 27);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const clear_auto_r9 = \u0275\u0275reference(31);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 15, "COMMON.REMOTE_SETUP_DEVICE_ID"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.device_input);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.device_input().trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 17, "COMMON.REMOTE_SETUP_OPEN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 19, "COMMON.REMOTE_SETUP_DEVICES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.devices());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 21, "COMMON.REMOTE_SETUP_CLEAR_SYSTEM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 23, "COMMON.REMOTE_SETUP_CLEAR_SYSTEM_INFO"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.apps().length > 1 ? 23 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 25, "COMMON.BOOTSTRAP_LABEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.clear_system_id);
    \u0275\u0275property("matAutocomplete", clear_auto_r9)("placeholder", \u0275\u0275pipeBind1(29, 27, "COMMON.BOOTSTRAP_INPUT_PLACEHOLDER"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.systems());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.sending() || !ctx_r1.clear_system_id().trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 29, "COMMON.REMOTE_SETUP_CLEAR"), " ");
  }
}
function RemoteSetupFlowComponent_Case_10_Conditional_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", app_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r1.appName(app_r11)), " ");
  }
}
function RemoteSetupFlowComponent_Case_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 39)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function RemoteSetupFlowComponent_Case_10_Conditional_3_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.missing_app, $event) || (ctx_r1.missing_app = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(5, RemoteSetupFlowComponent_Case_10_Conditional_3_For_6_Template, 3, 4, "mat-option", 26, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.REMOTE_SETUP_APP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.missing_app);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.apps());
  }
}
function RemoteSetupFlowComponent_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38);
    \u0275\u0275animateEnter("motion-fade-in");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, RemoteSetupFlowComponent_Case_10_Conditional_3_Template, 7, 4, "mat-form-field", 39);
    \u0275\u0275elementContainer(4, 40);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const setup_form_r12 = \u0275\u0275reference(14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 3, "COMMON.REMOTE_SETUP_DEVICE_MISSING", \u0275\u0275pureFunction1(6, _c0, ctx_r1.device_id())), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.apps().length > 1 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", setup_form_r12);
  }
}
function RemoteSetupFlowComponent_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275animateEnter("motion-fade-in");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, "COMMON.REMOTE_SETUP_OTHER_APP", \u0275\u0275pureFunction1(6, _c1, \u0275\u0275pipeBind1(2, 1, ctx_r1.appName(ctx_r1.raw_device().app)))), " ");
  }
}
function RemoteSetupFlowComponent_Case_12_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const config_r13 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", config_r13.template_id, ") ");
  }
}
function RemoteSetupFlowComponent_Case_12_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, RemoteSetupFlowComponent_Case_12_Conditional_9_Conditional_2_Template, 2, 1, "span", 30);
  }
  if (rf & 2) {
    const config_r13 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(config_r13.system_id);
    \u0275\u0275advance();
    \u0275\u0275conditional(config_r13.template_id ? 2 : -1);
  }
}
function RemoteSetupFlowComponent_Case_12_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.REMOTE_SETUP_NOT_SET_UP"), " ");
  }
}
function RemoteSetupFlowComponent_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 42);
    \u0275\u0275animateEnter("motion-fade-in");
    \u0275\u0275elementStart(1, "div", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 45);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275conditionalCreate(9, RemoteSetupFlowComponent_Case_12_Conditional_9_Template, 3, 2)(10, RemoteSetupFlowComponent_Case_12_Conditional_10_Template, 2, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainer(11, 40);
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    const setup_form_r12 = \u0275\u0275reference(14);
    const item_r14 = ctx_r1.device();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r14.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, ctx_r1.appName(item_r14.app)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "COMMON.REMOTE_SETUP_CURRENT"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_7_0 = item_r14.config) ? 9 : 10, tmp_7_0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", setup_form_r12);
  }
}
function RemoteSetupFlowComponent_ng_template_13_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 26)(1, "div", 35)(2, "div", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const option_r16 = ctx.$implicit;
    \u0275\u0275property("value", option_r16.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", option_r16.display_name || option_r16.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r16.id, " ");
  }
}
function RemoteSetupFlowComponent_ng_template_13_Conditional_11_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r18 = ctx.$implicit;
    \u0275\u0275property("value", option_r18.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r18.name, " ");
  }
}
function RemoteSetupFlowComponent_ng_template_13_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 24)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function RemoteSetupFlowComponent_ng_template_13_Conditional_11_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.template_id, $event) || (ctx_r1.template_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "mat-option", 53);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, RemoteSetupFlowComponent_ng_template_13_Conditional_11_For_9_Template, 2, 2, "mat-option", 26, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "APP.SIGNAGE.BOOTSTRAP_TEMPLATE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.template_id);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "APP.SIGNAGE.BOOTSTRAP_TEMPLATE_NONE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.templates());
  }
}
function RemoteSetupFlowComponent_ng_template_13_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 54);
    \u0275\u0275twoWayListener("ngModelChange", function RemoteSetupFlowComponent_ng_template_13_Conditional_12_Template_mat_checkbox_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.event_view, $event) || (ctx_r1.event_view = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.event_view);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.REMOTE_SETUP_EVENT_VIEW"), " ");
  }
}
function RemoteSetupFlowComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 46);
    \u0275\u0275animateEnter("motion-fade-in");
    \u0275\u0275listener("ngSubmit", function RemoteSetupFlowComponent_ng_template_13_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.apply());
    });
    \u0275\u0275elementStart(1, "mat-form-field", 24)(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 47);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RemoteSetupFlowComponent_ng_template_13_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.system_id, $event) || (ctx_r1.system_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-autocomplete", null, 3);
    \u0275\u0275repeaterCreate(9, RemoteSetupFlowComponent_ng_template_13_For_10_Template, 6, 3, "mat-option", 26, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, RemoteSetupFlowComponent_ng_template_13_Conditional_11_Template, 10, 7, "mat-form-field", 24);
    \u0275\u0275conditionalCreate(12, RemoteSetupFlowComponent_ng_template_13_Conditional_12_Template, 3, 4, "mat-checkbox", 48);
    \u0275\u0275elementContainer(13, 40);
    \u0275\u0275elementStart(14, "div", 49)(15, "button", 50);
    \u0275\u0275listener("click", function RemoteSetupFlowComponent_ng_template_13_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 51);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const auto_r20 = \u0275\u0275reference(8);
    const ctx_r1 = \u0275\u0275nextContext();
    const status_r21 = \u0275\u0275reference(16);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 11, "COMMON.BOOTSTRAP_LABEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.system_id);
    \u0275\u0275property("matAutocomplete", auto_r20)("placeholder", \u0275\u0275pipeBind1(6, 13, "COMMON.BOOTSTRAP_INPUT_PLACEHOLDER"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.systems());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.setup_app() === "signage" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.setup_app() === "booking-panel" ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", status_r21);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.sending() || ctx_r1.pending());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 15, "COMMON.REMOTE_SETUP_CLEAR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.sending() || !ctx_r1.system_id().trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 17, "COMMON.REMOTE_SETUP_APPLY"), " ");
  }
}
function RemoteSetupFlowComponent_ng_template_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275element(1, "mat-spinner", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 20);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.REMOTE_SETUP_PENDING"), " ");
  }
}
function RemoteSetupFlowComponent_ng_template_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "icon", 57);
    \u0275\u0275text(2, " check_circle ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "COMMON.REMOTE_SETUP_DONE"), " ");
  }
}
function RemoteSetupFlowComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RemoteSetupFlowComponent_ng_template_15_Conditional_0_Template, 4, 4, "div", 55)(1, RemoteSetupFlowComponent_ng_template_15_Conditional_1_Template, 5, 3, "div", 56);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.pending() ? 0 : ctx_r1.done() ? 1 : -1);
  }
}
var DEVICE_ID_FORMAT = /^DEV-[0-9A-F]{12}$/i;
var MAX_DEVICES_SHOWN = 50;
var APP_NAMES = {
  "booking-panel": "APP.BOOKING_PANEL.BOOTSTRAP_TITLE",
  control: "APP.CONTROL.BOOTSTRAP_TITLE",
  signage: "APP.SIGNAGE.BOOTSTRAP_TITLE"
};
var RemoteSetupFlowComponent = class _RemoteSetupFlowComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._query_params = toSignal(this._route.queryParamMap, {
      initialValue: this._route.snapshot.queryParamMap
    });
    this.apps = input.required(
      ...ngDevMode ? [{ debugName: "apps" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._module = signal(
      null,
      ...ngDevMode ? [{ debugName: "_module" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._connected = signal(
      null,
      ...ngDevMode ? [{ debugName: "_connected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._devices = signal(
      {},
      ...ngDevMode ? [{ debugName: "_devices" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._command = signal(
      null,
      ...ngDevMode ? [{ debugName: "_command" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._clear_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "_clear_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._requested_id = computed(
      () => this._query_params().get("device")?.trim() || "",
      ...ngDevMode ? [{ debugName: "_requested_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.device_id = computed(
      () => {
        const id = this._requested_id();
        const devices = this._devices();
        if (!id || devices[id])
          return id;
        const lower = id.toLowerCase();
        const known = Object.keys(devices).find((key) => key.toLowerCase() === lower);
        if (known)
          return known;
        return DEVICE_ID_FORMAT.test(id) ? id.toUpperCase() : id;
      },
      ...ngDevMode ? [{ debugName: "device_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.device_input = signal(
      "",
      ...ngDevMode ? [{ debugName: "device_input" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.raw_device = computed(
      () => this._devices()[this.device_id()] || null,
      ...ngDevMode ? [{ debugName: "raw_device" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.device = computed(
      () => {
        const device = this.raw_device();
        return device && this.apps().includes(device.app) ? device : null;
      },
      ...ngDevMode ? [{ debugName: "device" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.devices = computed(
      () => {
        const apps = this.apps();
        return Object.values(this._devices()).filter((device) => apps.includes(device.app)).sort((a, b) => b.last_seen - a.last_seen).slice(0, MAX_DEVICES_SHOWN);
      },
      ...ngDevMode ? [{ debugName: "devices" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.state = computed(
      () => {
        if (!this._module()) {
          return initialisationComplete()() ? "unavailable" : "loading";
        }
        if (this._connected() === null)
          return "loading";
        if (!this._connected())
          return "unavailable";
        if (!this.device_id())
          return "list";
        if (this.device())
          return "device";
        return this.raw_device() ? "other-app" : "missing";
      },
      ...ngDevMode ? [{ debugName: "state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.missing_app = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "missing_app" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: () => ({ id: this.device_id(), apps: this.apps() }),
      computation: ({ apps }) => apps[0]
    }));
    this.setup_app = computed(
      () => {
        const state = this.state();
        if (state === "device")
          return this.device()?.app ?? null;
        return state === "missing" ? this.missing_app() : null;
      },
      ...ngDevMode ? [{ debugName: "setup_app" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.system_id = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "system_id" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: () => this.device()?.id,
      computation: () => untracked(() => this.device()?.config?.system_id || "")
    }));
    this.template_id = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "template_id" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: () => this.device()?.id,
      computation: () => untracked(() => this.device()?.config?.template_id || "")
    }));
    this.event_view = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "event_view" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: () => this.device()?.id,
      computation: () => untracked(() => !!this.device()?.config?.event_view)
    }));
    this.sending = signal(
      false,
      ...ngDevMode ? [{ debugName: "sending" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._sent_id = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_sent_id" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this.device_id,
      computation: () => ""
    }));
    this._clear_sent = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_clear_sent" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this.device_id,
      computation: () => false
    }));
    this._clear_listed = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_clear_listed" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this.device_id,
      computation: () => false
    }));
    this.clearing = computed(
      () => this._clear_list().includes(this.device_id()),
      ...ngDevMode ? [{ debugName: "clearing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.pending = computed(
      () => isRemoteSetupCommand(this._command()) || this.clearing(),
      ...ngDevMode ? [{ debugName: "pending" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.done = computed(
      () => this._sent_id() ? this.device()?.last_command === this._sent_id() : this._clear_listed() && !this.clearing(),
      ...ngDevMode ? [{ debugName: "done" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.clear_app = linkedSignal(
      () => this.apps()[0],
      ...ngDevMode ? [{ debugName: "clear_app" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.clear_system_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "clear_system_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._search = computed(
      () => this.state() === "list" ? this.clear_system_id() : this.system_id(),
      ...ngDevMode ? [{ debugName: "_search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._debounced_search = debounced(this._search, 300);
    this._systems = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_systems" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        q: this._org.initialised() ? this._debounced_search.value() : "",
        signage: (this.setup_app() ?? (this.state() === "list" ? this.clear_app() : "")) === "signage"
      }),
      loader: async ({ params }) => {
        if (params.q.length < 2)
          return [];
        const { data } = await Ra(__spreadValues({
          q: params.q,
          limit: 20,
          zone_id: this._org.organisation?.id,
          fields: ["id", "name", "display_name"].join(",")
        }, params.signage ? { signage: true } : {}));
        return data;
      }
    }));
    this.systems = computed(
      () => this._systems.hasValue() ? this._systems.value() : [],
      ...ngDevMode ? [{ debugName: "systems" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._templates = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_templates" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this.setup_app() === "signage",
      loader: async ({ params: enabled }) => {
        if (!enabled)
          return [];
        const { data } = await vl({ limit: 500 }).catch(() => ({ data: [] }));
        return data.sort((a, b) => a.name.localeCompare(b.name));
      }
    }));
    this.templates = computed(
      () => this._templates.value() ?? [],
      ...ngDevMode ? [{ debugName: "templates" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      if (this._clear_sent() && this.clearing()) {
        untracked(() => this._clear_listed.set(true));
      }
    });
    effect((on_cleanup) => {
      if (!initialisationComplete()())
        return;
      const mod = untracked(() => remoteSetupModule());
      this._module.set(mod);
      if (!mod)
        return;
      const unbind_connected = mod.variable("connected").bindThenSubscribe((value) => this._connected.set(value === void 0 ? null : !!value));
      const unbind_clear_list = mod.variable(REMOTE_SETUP_CLEAR_LIST).bindThenSubscribe((value) => this._clear_list.set(remoteSetupClearList(value)));
      const unbind_devices = mod.variable("devices").bindThenSubscribe((value) => this._devices.set(value && typeof value === "object" ? value : {}));
      on_cleanup(() => {
        unbind_connected();
        unbind_clear_list();
        unbind_devices();
      });
    });
    effect((on_cleanup) => {
      const mod = this._module();
      const device_id = this.device_id();
      this._command.set(null);
      if (!mod || !device_id)
        return;
      const unbind = mod.variable(remoteSetupCommandBinding(device_id)).bindThenSubscribe((value) => this._command.set(value));
      on_cleanup(unbind);
    });
  }
  /** Translation key of the name of an application */
  appName(app) {
    return APP_NAMES[app] || app;
  }
  /** Open a device. An empty ID goes back to the device list */
  selectDevice(id) {
    this.device_input.set("");
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { device: id.trim() || null },
      queryParamsHandling: "merge"
    });
  }
  /**
   * Send the configuration in the form to the device. A device that is set
   * up also applies it, so this also changes the setup of a device.
   */
  async apply() {
    const app = this.setup_app();
    const system_id = this.system_id().trim();
    if (!app || !system_id)
      return;
    const config = { system_id };
    if (app === "signage" && this.template_id()) {
      config.template_id = this.template_id();
    }
    if (app === "booking-panel") {
      config.event_view = this.event_view();
    }
    await this._send("configure", [this.device_id(), config]);
  }
  /**
   * Remove the configuration from the device, after the user confirms.
   * The driver keeps the device ID in its clear list until the device
   * registers from its setup screen.
   */
  async clear() {
    const state = this.state();
    if (state !== "device" && state !== "missing")
      return;
    const device_id = this.device_id();
    const result = await openConfirmModal({
      title: i18n("COMMON.REMOTE_SETUP_CLEAR"),
      content: i18n("COMMON.REMOTE_SETUP_CLEAR_CONFIRM", {
        id: device_id
      }),
      icon: { type: "icon", content: "restart_alt" },
      destructive: true
    }, this._dialog);
    if (result.reason !== "done")
      return;
    result.close();
    this._sent_id.set("");
    this._clear_listed.set(false);
    await this._send("clear", [device_id]);
  }
  /**
   * Clear all devices of an application that show a system, after the
   * user confirms. Only devices that are on before the driver time limit
   * clear.
   */
  async clearSystem() {
    const app = this.clear_app();
    const system_id = this.clear_system_id().trim();
    const mod = this._module();
    if (!mod || !app || !system_id)
      return;
    const result = await openConfirmModal({
      title: i18n("COMMON.REMOTE_SETUP_CLEAR_SYSTEM"),
      content: i18n("COMMON.REMOTE_SETUP_CLEAR_SYSTEM_CONFIRM", {
        app: i18n(this.appName(app)),
        id: system_id
      }),
      icon: { type: "icon", content: "restart_alt" },
      destructive: true
    }, this._dialog);
    if (result.reason !== "done")
      return;
    result.close();
    this.sending.set(true);
    try {
      await mod.execute("clear_system", [app, system_id]);
      this.clear_system_id.set("");
      notifySuccess(i18n("COMMON.REMOTE_SETUP_CLEAR_SYSTEM_SENT"));
    } catch (error) {
      notifyError(i18n("COMMON.REMOTE_SETUP_SEND_ERROR", {
        error: `${error?.message || error}`
      }));
    } finally {
      this.sending.set(false);
    }
  }
  async _send(method, args) {
    const mod = this._module();
    if (!mod)
      return;
    this.sending.set(true);
    try {
      const id = await mod.execute(method, args);
      if (method === "configure") {
        this._sent_id.set(typeof id === "string" ? id : "");
      } else {
        this._clear_sent.set(true);
      }
    } catch (error) {
      notifyError(i18n("COMMON.REMOTE_SETUP_SEND_ERROR", {
        error: `${error?.message || error}`
      }));
    } finally {
      this.sending.set(false);
    }
  }
  static {
    this.\u0275fac = function RemoteSetupFlowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemoteSetupFlowComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RemoteSetupFlowComponent, selectors: [["remote-setup-flow"]], inputs: { apps: [1, "apps"] }, decls: 17, vars: 5, consts: [["setup_form", ""], ["status", ""], ["clear_auto", "matAutocomplete"], ["auto", "matAutocomplete"], [1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col", "items-center", "overflow-y-auto", "p-2", "sm:p-4"], [1, "bg-base-100", "border-base-300", "flex", "w-full", "max-w-xl", "flex-col", "overflow-hidden", "rounded-sm", "border", "shadow-md"], [1, "bg-secondary", "text-secondary-content", "flex", "items-center", "gap-2", "px-4", "py-3"], ["icon", "", "matRipple", "", 1, "-ml-2"], [1, "text-xl", "font-medium"], [1, "flex", "justify-center", "p-8"], ["unavailable", "", 1, "p-4"], ["other-app", "", 1, "p-4"], ["icon", "", "matRipple", "", 1, "-ml-2", 3, "click"], ["aria-hidden", "true", 3, "diameter"], [1, "flex", "items-start", "gap-2", "px-4", "pt-4", 3, "ngSubmit"], ["appearance", "outline", 1, "min-w-0", "flex-1"], ["matInput", "", "name", "device", "autocomplete", "off", "placeholder", "DEV-...", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", "type", "submit", 1, "h-14", 3, "disabled"], [1, "px-4", "pb-2", "font-medium"], [1, "flex", "flex-col", "pb-2"], [1, "px-4", "pb-4", "text-sm", "opacity-70"], ["clear-system", "", 1, "border-base-300", "flex", "flex-col", "gap-2", "border-t", "p-4", 3, "ngSubmit"], [1, "font-medium"], [1, "pb-2", "text-sm", "opacity-70"], ["appearance", "outline"], ["matInput", "", "name", "clear_system", "autocomplete", "off", 3, "ngModelChange", "ngModel", "matAutocomplete", "placeholder"], [3, "value"], ["btn", "", "matRipple", "", "type", "submit", 1, "inverse", 3, "disabled"], ["device", "", "matRipple", "", 1, "hover:bg-base-200", "flex", "w-full", "items-center", "gap-3", "px-4", "py-3", "text-left", 3, "click"], [1, "flex", "min-w-0", "flex-1", "flex-col"], [1, "font-mono"], [1, "truncate", "text-sm", "opacity-70"], [1, "text-xs", "opacity-60"], ["aria-hidden", "true"], ["name", "clear_app", 3, "ngModelChange", "ngModel"], [1, "flex", "w-full", "items-center", "gap-4", "leading-tight"], [1, "min-w-0", "flex-1", "truncate"], [1, "bg-base-200", "rounded-sm", "px-2", "py-1", "font-mono", "text-[0.625rem]"], ["missing", "", 1, "p-4"], ["appearance", "outline", 1, "-mb-4", "w-full", "px-4"], [3, "ngTemplateOutlet"], ["name", "missing_app", 3, "ngModelChange", "ngModel"], [1, "border-base-300", "flex", "flex-col", "gap-1", "border-b", "p-4"], [1, "font-mono", "text-lg"], [1, "text-sm", "opacity-70"], ["current", "", 1, "text-sm"], [1, "flex", "flex-col", "gap-2", "p-4", 3, "ngSubmit"], ["matInput", "", "name", "system", "autocomplete", "off", 3, "ngModelChange", "ngModel", "matAutocomplete", "placeholder"], ["name", "event_view", 1, "pb-2", 3, "ngModel"], [1, "flex", "flex-col-reverse", "gap-2", "sm:flex-row"], ["btn", "", "matRipple", "", "clear", "", "type", "button", 1, "inverse", "flex-1", 3, "click", "disabled"], ["btn", "", "matRipple", "", "apply", "", "type", "submit", 1, "flex-1", 3, "disabled"], ["name", "template", 3, "ngModelChange", "ngModel"], ["value", ""], ["name", "event_view", 1, "pb-2", 3, "ngModelChange", "ngModel"], ["pending", "", "role", "status", 1, "bg-base-200", "flex", "items-center", "gap-2", "rounded-sm", "p-3", "text-sm"], ["done", "", "role", "status", 1, "bg-success/10", "flex", "items-center", "gap-2", "rounded-sm", "p-3", "text-sm"], ["aria-hidden", "true", 1, "text-success"]], template: function RemoteSetupFlowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "header", 6);
        \u0275\u0275conditionalCreate(3, RemoteSetupFlowComponent_Conditional_3_Template, 4, 3, "button", 7);
        \u0275\u0275elementStart(4, "h1", 8);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(7, RemoteSetupFlowComponent_Case_7_Template, 2, 1, "div", 9)(8, RemoteSetupFlowComponent_Case_8_Template, 3, 3, "p", 10)(9, RemoteSetupFlowComponent_Case_9_Template, 37, 31)(10, RemoteSetupFlowComponent_Case_10_Template, 5, 8)(11, RemoteSetupFlowComponent_Case_11_Template, 4, 8, "p", 11)(12, RemoteSetupFlowComponent_Case_12_Template, 12, 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(13, RemoteSetupFlowComponent_ng_template_13_Template, 21, 19, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, RemoteSetupFlowComponent_ng_template_15_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_4_0;
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.device_id() ? 3 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "COMMON.REMOTE_SETUP_TITLE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_4_0 = ctx.state()) === "loading" ? 7 : tmp_4_0 === "unavailable" ? 8 : tmp_4_0 === "list" ? 9 : tmp_4_0 === "missing" ? 10 : tmp_4_0 === "other-app" ? 11 : tmp_4_0 === "device" ? 12 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgTemplateOutlet,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      IconComponent,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
      MatCheckboxModule,
      MatCheckbox,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatSelectModule,
      MatSelect,
      DatePipe,
      TranslatePipe
    ], styles: ["\nbutton[btn][_ngcontent-%COMP%] {\n  min-height: 3rem;\n}\n/*# sourceMappingURL=remote-setup-flow.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoteSetupFlowComponent, [{
    type: Component,
    args: [{ selector: "remote-setup-flow", template: `
        <div
            class="bg-base-200 absolute inset-0 flex flex-col items-center overflow-y-auto p-2 sm:p-4"
        >
            <div
                class="bg-base-100 border-base-300 flex w-full max-w-xl flex-col overflow-hidden rounded-sm border shadow-md"
            >
                <header
                    class="bg-secondary text-secondary-content flex items-center gap-2 px-4 py-3"
                >
                    @if (device_id()) {
                        <button
                            icon
                            matRipple
                            class="-ml-2"
                            [attr.aria-label]="'COMMON.BACK' | translate"
                            (click)="selectDevice('')"
                        >
                            <icon>arrow_back</icon>
                        </button>
                    }
                    <h1 class="text-xl font-medium">
                        {{ 'COMMON.REMOTE_SETUP_TITLE' | translate }}
                    </h1>
                </header>
                @switch (state()) {
                    @case ('loading') {
                        <div
                            class="flex justify-center p-8"
                            animate.enter="motion-fade-in"
                        >
                            <mat-spinner [diameter]="32" aria-hidden="true" />
                        </div>
                    }
                    @case ('unavailable') {
                        <p
                            unavailable
                            class="p-4"
                            animate.enter="motion-fade-in"
                        >
                            {{ 'COMMON.REMOTE_SETUP_UNAVAILABLE' | translate }}
                        </p>
                    }
                    @case ('list') {
                        <form
                            class="flex items-start gap-2 px-4 pt-4"
                            animate.enter="motion-fade-in"
                            (ngSubmit)="selectDevice(device_input())"
                        >
                            <mat-form-field
                                appearance="outline"
                                class="min-w-0 flex-1"
                            >
                                <mat-label>
                                    {{
                                        'COMMON.REMOTE_SETUP_DEVICE_ID'
                                            | translate
                                    }}
                                </mat-label>
                                <input
                                    matInput
                                    name="device"
                                    autocomplete="off"
                                    [(ngModel)]="device_input"
                                    placeholder="DEV-..."
                                />
                            </mat-form-field>
                            <button
                                btn
                                matRipple
                                type="submit"
                                class="h-14"
                                [disabled]="!device_input().trim()"
                            >
                                {{ 'COMMON.REMOTE_SETUP_OPEN' | translate }}
                            </button>
                        </form>
                        <h2
                            class="px-4 pb-2 font-medium"
                            animate.enter="motion-fade-in"
                        >
                            {{ 'COMMON.REMOTE_SETUP_DEVICES' | translate }}
                        </h2>
                        <ul
                            class="flex flex-col pb-2"
                            animate.enter="motion-fade-in"
                        >
                            @for (item of devices(); track item.id) {
                                <li>
                                    <button
                                        device
                                        matRipple
                                        class="hover:bg-base-200 flex w-full items-center gap-3 px-4 py-3 text-left"
                                        (click)="selectDevice(item.id)"
                                    >
                                        <div
                                            class="flex min-w-0 flex-1 flex-col"
                                        >
                                            <div class="font-mono">
                                                {{ item.id }}
                                            </div>
                                            <div
                                                class="truncate text-sm opacity-70"
                                            >
                                                {{
                                                    appName(item.app)
                                                        | translate
                                                }}
                                                \xB7
                                                {{
                                                    item.config?.system_id ||
                                                        ('COMMON.REMOTE_SETUP_NOT_SET_UP'
                                                            | translate)
                                                }}
                                            </div>
                                        </div>
                                        <div class="text-xs opacity-60">
                                            {{ item.last_seen | date: 'short' }}
                                        </div>
                                        <icon aria-hidden="true">
                                            chevron_right
                                        </icon>
                                    </button>
                                </li>
                            } @empty {
                                <li class="px-4 pb-4 text-sm opacity-70">
                                    {{
                                        'COMMON.REMOTE_SETUP_NO_DEVICES'
                                            | translate
                                    }}
                                </li>
                            }
                        </ul>
                        <form
                            clear-system
                            class="border-base-300 flex flex-col gap-2 border-t p-4"
                            animate.enter="motion-fade-in"
                            (ngSubmit)="clearSystem()"
                        >
                            <h2 class="font-medium">
                                {{
                                    'COMMON.REMOTE_SETUP_CLEAR_SYSTEM'
                                        | translate
                                }}
                            </h2>
                            <p class="pb-2 text-sm opacity-70">
                                {{
                                    'COMMON.REMOTE_SETUP_CLEAR_SYSTEM_INFO'
                                        | translate
                                }}
                            </p>
                            @if (apps().length > 1) {
                                <mat-form-field appearance="outline">
                                    <mat-label>
                                        {{
                                            'COMMON.REMOTE_SETUP_APP'
                                                | translate
                                        }}
                                    </mat-label>
                                    <mat-select
                                        name="clear_app"
                                        [(ngModel)]="clear_app"
                                    >
                                        @for (app of apps(); track app) {
                                            <mat-option [value]="app">
                                                {{ appName(app) | translate }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            }
                            <mat-form-field appearance="outline">
                                <mat-label>
                                    {{ 'COMMON.BOOTSTRAP_LABEL' | translate }}
                                </mat-label>
                                <input
                                    matInput
                                    name="clear_system"
                                    autocomplete="off"
                                    [(ngModel)]="clear_system_id"
                                    [matAutocomplete]="clear_auto"
                                    [placeholder]="
                                        'COMMON.BOOTSTRAP_INPUT_PLACEHOLDER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                            <mat-autocomplete #clear_auto="matAutocomplete">
                                @for (option of systems(); track option.id) {
                                    <mat-option [value]="option.id">
                                        <div
                                            class="flex w-full items-center gap-4 leading-tight"
                                        >
                                            <div
                                                class="min-w-0 flex-1 truncate"
                                            >
                                                {{
                                                    option.display_name ||
                                                        option.name
                                                }}
                                            </div>
                                            <div
                                                class="bg-base-200 rounded-sm px-2 py-1 font-mono text-[0.625rem]"
                                            >
                                                {{ option.id }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-autocomplete>
                            <button
                                btn
                                matRipple
                                type="submit"
                                class="inverse"
                                [disabled]="
                                    sending() || !clear_system_id().trim()
                                "
                            >
                                {{ 'COMMON.REMOTE_SETUP_CLEAR' | translate }}
                            </button>
                        </form>
                    }
                    @case ('missing') {
                        <p missing class="p-4" animate.enter="motion-fade-in">
                            {{
                                'COMMON.REMOTE_SETUP_DEVICE_MISSING'
                                    | translate: { id: device_id() }
                            }}
                        </p>
                        @if (apps().length > 1) {
                            <mat-form-field
                                appearance="outline"
                                class="-mb-4 w-full px-4"
                            >
                                <mat-label>
                                    {{ 'COMMON.REMOTE_SETUP_APP' | translate }}
                                </mat-label>
                                <mat-select
                                    name="missing_app"
                                    [(ngModel)]="missing_app"
                                >
                                    @for (app of apps(); track app) {
                                        <mat-option [value]="app">
                                            {{ appName(app) | translate }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        <ng-container [ngTemplateOutlet]="setup_form" />
                    }
                    @case ('other-app') {
                        <p other-app class="p-4" animate.enter="motion-fade-in">
                            {{
                                'COMMON.REMOTE_SETUP_OTHER_APP'
                                    | translate
                                        : {
                                              app:
                                                  (appName(raw_device()!.app)
                                                  | translate),
                                          }
                            }}
                        </p>
                    }
                    @case ('device') {
                        @let item = device()!;
                        <section
                            class="border-base-300 flex flex-col gap-1 border-b p-4"
                            animate.enter="motion-fade-in"
                        >
                            <div class="font-mono text-lg">{{ item.id }}</div>
                            <div class="text-sm opacity-70">
                                {{ appName(item.app) | translate }}
                            </div>
                            <div current class="text-sm">
                                {{ 'COMMON.REMOTE_SETUP_CURRENT' | translate }}:
                                @if (item.config; as config) {
                                    <span class="font-mono">{{
                                        config.system_id
                                    }}</span>
                                    @if (config.template_id) {
                                        <span class="font-mono">
                                            ({{ config.template_id }})
                                        </span>
                                    }
                                } @else {
                                    {{
                                        'COMMON.REMOTE_SETUP_NOT_SET_UP'
                                            | translate
                                    }}
                                }
                            </div>
                        </section>
                        <ng-container [ngTemplateOutlet]="setup_form" />
                    }
                }
            </div>
        </div>
        <ng-template #setup_form>
            <form
                class="flex flex-col gap-2 p-4"
                animate.enter="motion-fade-in"
                (ngSubmit)="apply()"
            >
                <mat-form-field appearance="outline">
                    <mat-label>
                        {{ 'COMMON.BOOTSTRAP_LABEL' | translate }}
                    </mat-label>
                    <input
                        matInput
                        name="system"
                        autocomplete="off"
                        [(ngModel)]="system_id"
                        [matAutocomplete]="auto"
                        [placeholder]="
                            'COMMON.BOOTSTRAP_INPUT_PLACEHOLDER' | translate
                        "
                    />
                </mat-form-field>
                <mat-autocomplete #auto="matAutocomplete">
                    @for (option of systems(); track option.id) {
                        <mat-option [value]="option.id">
                            <div
                                class="flex w-full items-center gap-4 leading-tight"
                            >
                                <div class="min-w-0 flex-1 truncate">
                                    {{ option.display_name || option.name }}
                                </div>
                                <div
                                    class="bg-base-200 rounded-sm px-2 py-1 font-mono text-[0.625rem]"
                                >
                                    {{ option.id }}
                                </div>
                            </div>
                        </mat-option>
                    }
                </mat-autocomplete>
                @if (setup_app() === 'signage') {
                    <mat-form-field appearance="outline">
                        <mat-label>
                            {{ 'APP.SIGNAGE.BOOTSTRAP_TEMPLATE' | translate }}
                        </mat-label>
                        <mat-select name="template" [(ngModel)]="template_id">
                            <mat-option value="">
                                {{
                                    'APP.SIGNAGE.BOOTSTRAP_TEMPLATE_NONE'
                                        | translate
                                }}
                            </mat-option>
                            @for (option of templates(); track option.id) {
                                <mat-option [value]="option.id">
                                    {{ option.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                }
                @if (setup_app() === 'booking-panel') {
                    <mat-checkbox
                        name="event_view"
                        class="pb-2"
                        [(ngModel)]="event_view"
                    >
                        {{ 'COMMON.REMOTE_SETUP_EVENT_VIEW' | translate }}
                    </mat-checkbox>
                }
                <ng-container [ngTemplateOutlet]="status" />
                <div class="flex flex-col-reverse gap-2 sm:flex-row">
                    <button
                        btn
                        matRipple
                        clear
                        type="button"
                        class="inverse flex-1"
                        [disabled]="sending() || pending()"
                        (click)="clear()"
                    >
                        {{ 'COMMON.REMOTE_SETUP_CLEAR' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        apply
                        type="submit"
                        class="flex-1"
                        [disabled]="sending() || !system_id().trim()"
                    >
                        {{ 'COMMON.REMOTE_SETUP_APPLY' | translate }}
                    </button>
                </div>
            </form>
        </ng-template>
        <ng-template #status>
            @if (pending()) {
                <div
                    pending
                    role="status"
                    class="bg-base-200 flex items-center gap-2 rounded-sm p-3 text-sm"
                >
                    <mat-spinner [diameter]="20" aria-hidden="true" />
                    {{ 'COMMON.REMOTE_SETUP_PENDING' | translate }}
                </div>
            } @else if (done()) {
                <div
                    done
                    role="status"
                    class="bg-success/10 flex items-center gap-2 rounded-sm p-3 text-sm"
                >
                    <icon class="text-success" aria-hidden="true">
                        check_circle
                    </icon>
                    {{ 'COMMON.REMOTE_SETUP_DONE' | translate }}
                </div>
            }
        </ng-template>
    `, imports: [
      CommonModule,
      FormsModule,
      IconComponent,
      TranslatePipe,
      MatAutocompleteModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatSelectModule
    ], styles: ["/* angular:styles/component:css;2e56e70e5e6ea214394c6d424e01f25585f812b5341cfed78cc23f4df5230f46;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/remote-setup-flow.component.ts */\nbutton[btn] {\n  min-height: 3rem;\n}\n/*# sourceMappingURL=remote-setup-flow.component.css.map */\n"] }]
  }], () => [], { apps: [{ type: Input, args: [{ isSignal: true, alias: "apps", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RemoteSetupFlowComponent, { className: "RemoteSetupFlowComponent", filePath: "libs/components/src/lib/remote-setup-flow.component.ts", lineNumber: 520 });
})();

// apps/concierge/src/app/remote-setup/remote-setup.component.ts
var RemoteSetupComponent = class _RemoteSetupComponent {
  constructor() {
    this.apps = ["booking-panel", "control"];
  }
  static {
    this.\u0275fac = function RemoteSetupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemoteSetupComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RemoteSetupComponent, selectors: [["app-remote-setup"]], decls: 1, vars: 1, consts: [[3, "apps"]], template: function RemoteSetupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "remote-setup-flow", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("apps", ctx.apps);
      }
    }, dependencies: [RemoteSetupFlowComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoteSetupComponent, [{
    type: Component,
    args: [{
      selector: "app-remote-setup",
      template: `<remote-setup-flow [apps]="apps" />`,
      imports: [RemoteSetupFlowComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RemoteSetupComponent, { className: "RemoteSetupComponent", filePath: "apps/concierge/src/app/remote-setup/remote-setup.component.ts", lineNumber: 15 });
})();
export {
  RemoteSetupComponent
};
//# debugId=07382352-3e30-5061-984c-d2a09b8cbbcb
//# sourceMappingURL=remote-setup.component-BFQ32F5W.js.map
