import {
  PageHeadingDirective
} from "./chunk-DXE5MFOJ.js";
import {
  MatSelect,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-GGG6XCMU.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-E7P7PY3I.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-7KIO3CXK.js";
import {
  MatOption
} from "./chunk-EDBFUYP4.js";
import {
  AnnounceDirective
} from "./chunk-BNTT5YFE.js";
import {
  VirtualKeyboardComponent
} from "./chunk-SIFLLKHY.js";
import "./chunk-WPGRQ6NC.js";
import {
  TranslatePipe
} from "./chunk-RRDUZKXJ.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  OrganisationService,
  SettingsService,
  VERSION,
  isPublicMode
} from "./chunk-4KFQL45D.js";
import {
  AsyncHandler
} from "./chunk-PARB3GVO.js";
import "./chunk-CH5WGOBH.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-K5TTW5WQ.js";
import "./chunk-VEHNMD7P.js";
import "./chunk-ZGEGORPC.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-EQ5PGPZI.js";
import {
  CommonModule,
  Component,
  DatePipe,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CLFS24D3.js";
import "./chunk-653SOEEV.js";

// apps/visitor-kiosk/src/app/bootstrap.component.ts
function BootstrapComponent_Conditional_11_Conditional_1_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20)(1, "div", 21)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22)(5, "span", 23);
    \u0275\u0275text(6, "\xA0[");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9, "]");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", option_r3.display_name || option_r3.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r3.id);
  }
}
function BootstrapComponent_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 15)(4, "mat-select", 16, 0);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function BootstrapComponent_Conditional_11_Conditional_1_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.active_region, $event) || (ctx_r1.active_region = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function BootstrapComponent_Conditional_11_Conditional_1_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275elementStart(7, "mat-select-trigger")(8, "div", 17)(9, "div", 18);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 19);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(13, BootstrapComponent_Conditional_11_Conditional_1_For_14_Template, 10, 3, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, "APP.VISITOR_KIOSK.SELECT_REGION_MSG"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.active_region);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "APP.VISITOR_KIOSK.SELECT_REGION_MSG"));
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_region()?.display_name || ctx_r1.active_region()?.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_region()?.id, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.regions());
  }
}
function BootstrapComponent_Conditional_11_Conditional_2_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20)(1, "div", 21)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22)(5, "span", 23);
    \u0275\u0275text(6, "\xA0[");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9, "]");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    \u0275\u0275property("value", option_r5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", option_r5.display_name || option_r5.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r5.id);
  }
}
function BootstrapComponent_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 15)(4, "mat-select", 25, 0);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function BootstrapComponent_Conditional_11_Conditional_2_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.active_building, $event) || (ctx_r1.active_building = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function BootstrapComponent_Conditional_11_Conditional_2_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275elementStart(7, "mat-select-trigger")(8, "div", 17)(9, "div", 18);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 19);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(13, BootstrapComponent_Conditional_11_Conditional_2_For_14_Template, 10, 3, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, "APP.VISITOR_KIOSK.SELECT_BUILDING_MSG"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.active_building);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "APP.VISITOR_KIOSK.SELECT_BUILDING"));
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_building()?.display_name || ctx_r1.active_building()?.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_building()?.id, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.buildings());
  }
}
function BootstrapComponent_Conditional_11_Conditional_3_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20)(1, "div", 21)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22)(5, "span", 23);
    \u0275\u0275text(6, "\xA0[");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9, "]");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    \u0275\u0275property("value", option_r7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", option_r7.display_name || option_r7.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r7.id);
  }
}
function BootstrapComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div");
    \u0275\u0275elementStart(1, "label", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 15)(5, "mat-select", 27, 0);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function BootstrapComponent_Conditional_11_Conditional_3_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.active_level, $event) || (ctx_r1.active_level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(8, "mat-select-trigger")(9, "div", 17)(10, "div", 18);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 19);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(14, BootstrapComponent_Conditional_11_Conditional_3_For_15_Template, 10, 3, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "APP.VISITOR_KIOSK.SELECT_LEVEL_MSG"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.active_level);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 7, "APP.VISITOR_KIOSK.SELECT_LEVEL"));
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_level()?.display_name || ctx_r1.active_level()?.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_level()?.id, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
function BootstrapComponent_Conditional_11_Conditional_4_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20)(1, "div", 21)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22)(5, "span", 23);
    \u0275\u0275text(6, "\xA0[");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9, "]");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    \u0275\u0275property("value", option_r9);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", option_r9.display_name || option_r9.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r9.id);
  }
}
function BootstrapComponent_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div");
    \u0275\u0275elementStart(1, "label", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 15)(5, "mat-select", 29, 0);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function BootstrapComponent_Conditional_11_Conditional_4_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.active_rotation, $event) || (ctx_r1.active_rotation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(8, BootstrapComponent_Conditional_11_Conditional_4_For_9_Template, 10, 3, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "APP.VISITOR_KIOSK.SELECT_ORIENTATION_MSG"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.active_rotation);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 5, "APP.VISITOR_KIOSK.SELECT_ORIENTATION"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.rotations());
  }
}
function BootstrapComponent_Conditional_11_Conditional_5_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20)(1, "div", 21)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22)(5, "span", 23);
    \u0275\u0275text(6, "\xA0[");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9, "]");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const option_r11 = ctx.$implicit;
    \u0275\u0275property("value", option_r11);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", option_r11.display_name || option_r11.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r11.id);
  }
}
function BootstrapComponent_Conditional_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div");
    \u0275\u0275elementStart(1, "label", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 15)(5, "mat-select", 31, 0);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function BootstrapComponent_Conditional_11_Conditional_5_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.active_location, $event) || (ctx_r1.active_location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(8, BootstrapComponent_Conditional_11_Conditional_5_For_9_Template, 10, 3, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "APP.VISITOR_KIOSK.SELECT_LOCATION_MSG"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.active_location);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 5, "APP.VISITOR_KIOSK.SELECT_LOCATION"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.locations());
  }
}
function BootstrapComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, BootstrapComponent_Conditional_11_Conditional_1_Template, 15, 9);
    \u0275\u0275conditionalCreate(2, BootstrapComponent_Conditional_11_Conditional_2_Template, 15, 9);
    \u0275\u0275conditionalCreate(3, BootstrapComponent_Conditional_11_Conditional_3_Template, 16, 9);
    \u0275\u0275conditionalCreate(4, BootstrapComponent_Conditional_11_Conditional_4_Template, 10, 7);
    \u0275\u0275conditionalCreate(5, BootstrapComponent_Conditional_11_Conditional_5_Template, 10, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.regions().length > 1 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.buildings().length ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.levels().length && ctx_r1.active_building() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.rotations().length ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.locations().length ? 5 : -1);
  }
}
function BootstrapComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-spinner", 32);
    \u0275\u0275elementStart(2, "p", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading());
  }
}
function BootstrapComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 34);
    \u0275\u0275listener("click", function BootstrapComponent_Conditional_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bootstrapKiosk());
    });
    \u0275\u0275text(2, " Finish Setup ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.active_building() && !ctx_r1.active_level());
  }
}
function BootstrapComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 35)(2, "h2", 36);
    \u0275\u0275text(3, " Public mode is enabled ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 37);
    \u0275\u0275text(5, " Setup is disabled while this kiosk is in public mode. ");
    \u0275\u0275elementEnd()()();
  }
}
var BootstrapComponent = class _BootstrapComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._startup_action = "";
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_region = signal(
      null,
      ...ngDevMode ? [{ debugName: "active_region" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_building = signal(
      null,
      ...ngDevMode ? [{ debugName: "active_building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_level = signal(
      null,
      ...ngDevMode ? [{ debugName: "active_level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_rotation = signal(
      null,
      ...ngDevMode ? [{ debugName: "active_rotation" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_location = signal(
      null,
      ...ngDevMode ? [{ debugName: "active_location" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rotations = signal(
      [],
      ...ngDevMode ? [{ debugName: "rotations" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._last_query_params = "";
    this.regions = this._org.region_list;
    this.buildings = this._org.active_buildings;
    this.levels = this._org.active_levels;
    this.is_public_mode = isPublicMode;
    this.locations = computed(
      () => {
        const active_level = this.active_level();
        if (!active_level) {
          return [];
        }
        return active_level.locations || [];
      },
      ...ngDevMode ? [{ debugName: "locations" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get version() {
    return VERSION;
  }
  setRegion(region) {
    this._org.region = region;
    this.active_region.set(region);
    this.active_building.set(null);
    this.active_level.set(null);
    this.active_location.set(null);
    this.updateRotations();
  }
  setBuilding(building) {
    this._org.building = building;
    this.active_building.set(building);
    this.active_level.set(null);
    this.active_location.set(null);
    this.updateRotations();
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this.active_region.set(this._org.region);
    this.subscription("query_params", this._route.queryParamMap.subscribe(() => this.handleQueryParams()));
    this.checkBootstrap();
  }
  updateRotations() {
    this.rotations.set([]);
    const active_building = this.active_building();
    if (!active_building) {
      this.active_rotation.set(null);
      return;
    }
    const orientations = active_building.orientations;
    const rotations = [];
    for (const key in orientations) {
      if (orientations[key]) {
        rotations.push({
          id: key,
          name: `${key.split("_").join(" ")} (${orientations[key] * 90}\xB0)`,
          value: orientations[key]
        });
      }
    }
    this.rotations.set(rotations);
    this.active_rotation.set(rotations[0] || null);
  }
  /**
   * Store bootstrapped values and navigate to the main page
   */
  bootstrapKiosk() {
    this.loading.set("Bootstrapping application...");
    const active_level = this.active_level();
    const active_building = this.active_building();
    const active_rotation = this.active_rotation();
    const active_location = this.active_location();
    if (active_level) {
      if (localStorage) {
        localStorage.setItem("KIOSK.building", active_building?.id || active_level.parent_id);
        localStorage.setItem("KIOSK.level", active_level.id);
        if (active_rotation) {
          localStorage.setItem("KIOSK.orientation", `${active_rotation.id}`);
        }
        if (active_location) {
          localStorage.setItem("KIOSK.location", `${active_location.id}`);
        }
      }
      this.navigateToStartupRoute();
    }
    this.loading.set("");
  }
  /**
   * Check for any existing bootstrapped values
   */
  checkBootstrap() {
    this.loading.set("Checking for existing parameters...");
    if (this._startup_action === "preferences") {
      this.navigateToStartupRoute();
      this.loading.set("");
      return;
    }
    if (localStorage) {
      const building_id = localStorage.getItem("KIOSK.building");
      const level_id = localStorage.getItem("KIOSK.level");
      if (building_id && level_id) {
        this._router.navigate(this.getStartupRoute());
      }
    }
    VirtualKeyboardComponent.enabled = localStorage.getItem("OSK.enabled") === "true";
    this.loading.set("");
  }
  getStartupRoute() {
    if (this._startup_action === "preferences") {
      return ["/checkin", "preferences"];
    }
    const path = this._settings.get("app.default_route") || "welcome";
    const route = path.split("/");
    route[0] = `/${route[0]}`;
    return route;
  }
  navigateToStartupRoute() {
    const route = this.getStartupRoute();
    if (route[0] === "/checkin" && route[1] === "preferences") {
      this._router.navigate(route, {
        queryParams: this.getMergedQueryParamsFromUrl()
      });
      return;
    }
    this._router.navigate(route);
  }
  getActionParamFromUrl() {
    return this.getMergedQueryParamsFromUrl().action?.trim().toLowerCase() || "";
  }
  handleQueryParams() {
    const query_params = this.getMergedQueryParamsFromUrl();
    const query_key = JSON.stringify(query_params);
    if (query_key === this._last_query_params)
      return;
    this._last_query_params = query_key;
    if (query_params.action) {
      this._startup_action = query_params.action.trim().toLowerCase();
    } else {
      this._startup_action = this.getActionParamFromUrl();
    }
    if (query_params.osk !== void 0) {
      const osk_enabled = query_params.osk === "true";
      localStorage.setItem("OSK.enabled", `${osk_enabled}`);
    }
    if (query_params.clear === "true") {
      localStorage.removeItem("KIOSK.building");
      localStorage.removeItem("KIOSK.level");
      localStorage.removeItem("KIOSK.orientation");
    }
    if (query_params.level) {
      const level = this._org.levelWithID([query_params.level]);
      if (level) {
        this.active_level.set(level);
        this.bootstrapKiosk();
      }
    }
  }
  getMergedQueryParamsFromUrl() {
    const query_params = {};
    try {
      const parsed_url = new URL(window.location.href, window.location.origin);
      parsed_url.searchParams.forEach((value, key) => {
        query_params[key] = value;
      });
      const hash_route = parsed_url.hash?.replace(/^#/, "") || "";
      const hash_query = hash_route.includes("?") ? hash_route.split("?")[1] : "";
      new URLSearchParams(hash_query).forEach((value, key) => {
        query_params[key] = value;
      });
    } catch {
    }
    this._route.snapshot.queryParamMap.keys.forEach((key) => {
      const value = this._route.snapshot.queryParamMap.get(key);
      if (value !== null) {
        query_params[key] = value;
      }
    });
    return query_params;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BootstrapComponent_BaseFactory;
      return function BootstrapComponent_Factory(__ngFactoryType__) {
        return (\u0275BootstrapComponent_BaseFactory || (\u0275BootstrapComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BootstrapComponent)))(__ngFactoryType__ || _BootstrapComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BootstrapComponent, selectors: [["", "bootstrap", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 23, vars: 21, consts: [["select", ""], [1, "bg-base-200", "absolute", "inset-0", "z-0"], ["form", "", 1, "border-base-300", "bg-base-100", "relative", "z-10", "mx-auto", "my-8", "w-md", "max-w-[calc(100%-2rem)]", "overflow-hidden", "rounded-lg", "border", "shadow-sm"], [1, "bg-secondary", "text-secondary-content", "flex", "w-full", "items-center", "justify-between", "px-4", "py-3", "text-xl", "font-medium"], ["pageHeading", ""], [1, "relative", "overflow-hidden", "rounded-sm", "px-2", "py-1"], [1, "bg-base-100", "absolute", "inset-0", "z-0", "opacity-10"], [1, "relative", "z-10", "font-mono", "text-sm", "uppercase"], [1, "flex", "flex-col", "space-y-2", "px-4"], [1, "m-auto", "flex", "flex-col", "items-center", "p-8"], [1, "border-base-300", "mt-4!", "flex", "w-full", "items-center", "justify-end", "border-t", "px-4", "py-2"], [1, "absolute", "right-0", "bottom-0", "z-10", "p-2", "text-right"], [1, "text-xs", "opacity-70"], [1, "bg-base-300/90", "text-base-content", "absolute", "inset-0", "z-20", "flex", "items-center", "justify-center", "p-8", "text-center"], ["id", "bootstrap-region-label"], ["appearance", "outline", 1, "no-subscript"], ["aria-labelledby", "bootstrap-region-label", "building", "", 3, "ngModelChange", "ngModel", "placeholder"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1", "truncate"], [1, "bg-base-200", "mr-4!", "rounded-sm", "px-1.5", "font-mono", "text-[0.625rem]"], [3, "value"], [1, "leading-tight"], [1, "font-mono", "text-[0.625rem]", "opacity-70"], [1, "hidden"], ["id", "bootstrap-building-label"], ["aria-labelledby", "bootstrap-building-label", "building", "", 3, "ngModelChange", "ngModel", "placeholder"], ["id", "bootstrap-level-label"], ["aria-labelledby", "bootstrap-level-label", "level", "", 3, "ngModelChange", "ngModel", "placeholder"], ["id", "bootstrap-orientation-label"], ["aria-labelledby", "bootstrap-orientation-label", 3, "ngModelChange", "ngModel", "placeholder"], ["id", "bootstrap-location-label"], ["aria-labelledby", "bootstrap-location-label", 3, "ngModelChange", "ngModel", "placeholder"], ["aria-hidden", "true", 3, "diameter"], ["announce", ""], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"], [1, "max-w-xl", "space-y-2"], [1, "text-3xl", "font-semibold"], [1, "text-lg", "opacity-80"]], template: function BootstrapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "header", 3)(3, "h1", 4);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275element(7, "div", 6);
        \u0275\u0275elementStart(8, "div", 7);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(11, BootstrapComponent_Conditional_11_Template, 6, 5, "div", 8)(12, BootstrapComponent_Conditional_12_Template, 4, 2, "div", 9);
        \u0275\u0275conditionalCreate(13, BootstrapComponent_Conditional_13_Template, 3, 1, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 11)(15, "div", 12);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 12);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "date");
        \u0275\u0275pipe(21, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(22, BootstrapComponent_Conditional_22_Template, 6, 0, "div", 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 9, "APP.VISITOR_KIOSK.APP"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 11, "COMMON.BOOTSTRAP_SETUP"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 11 : 12);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 13 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(17, 13, "COMMON.CONTROLS_VERSION"), ": ", ctx.version.hash, " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(20, 15, ctx.version.time, "longDate"), " (", \u0275\u0275pipeBind2(21, 18, ctx.version.time, "shortTime"), ") ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.is_public_mode() ? 22 : -1);
      }
    }, dependencies: [
      PageHeadingDirective,
      AnnounceDirective,
      CommonModule,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatSelectTrigger,
      MatOption,
      FormsModule,
      NgControlStatus,
      NgModel,
      DatePipe,
      TranslatePipe
    ], styles: ["\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\nlabel[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n/*# sourceMappingURL=bootstrap.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BootstrapComponent, [{
    type: Component,
    args: [{ selector: "[bootstrap]", template: `
        <div class="bg-base-200 absolute inset-0 z-0">
            <div
                form
                class="border-base-300 bg-base-100 relative z-10 mx-auto my-8 w-md max-w-[calc(100%-2rem)] overflow-hidden rounded-lg border shadow-sm"
            >
                <header
                    class="bg-secondary text-secondary-content flex w-full items-center justify-between px-4 py-3 text-xl font-medium"
                >
                    <h1 pageHeading>
                        {{ 'APP.VISITOR_KIOSK.APP' | translate }}
                    </h1>
                    <div class="relative overflow-hidden rounded-sm px-2 py-1">
                        <div
                            class="bg-base-100 absolute inset-0 z-0 opacity-10"
                        ></div>
                        <div class="relative z-10 font-mono text-sm uppercase">
                            {{ 'COMMON.BOOTSTRAP_SETUP' | translate }}
                        </div>
                    </div>
                </header>
                @if (!loading()) {
                    <div class="flex flex-col space-y-2 px-4">
                        @if (regions().length > 1) {
                            <label id="bootstrap-region-label">
                                {{
                                    'APP.VISITOR_KIOSK.SELECT_REGION_MSG'
                                        | translate
                                }}
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select
                                    aria-labelledby="bootstrap-region-label"
                                    #select
                                    building
                                    [(ngModel)]="active_region"
                                    (ngModelChange)="setRegion($event)"
                                    [placeholder]="
                                        'APP.VISITOR_KIOSK.SELECT_REGION_MSG'
                                            | translate
                                    "
                                >
                                    <mat-select-trigger>
                                        <div
                                            class="flex items-center space-x-4"
                                        >
                                            <div class="flex-1 truncate">
                                                {{
                                                    active_region()
                                                        ?.display_name ||
                                                        active_region()?.name
                                                }}
                                            </div>
                                            <div
                                                class="bg-base-200 mr-4! rounded-sm px-1.5 font-mono text-[0.625rem]"
                                            >
                                                {{ active_region()?.id }}
                                            </div>
                                        </div>
                                    </mat-select-trigger>
                                    @for (option of regions(); track option) {
                                        <mat-option [value]="option">
                                            <div class="leading-tight">
                                                <div>
                                                    {{
                                                        option.display_name ||
                                                            option.name
                                                    }}
                                                </div>
                                                <div
                                                    class="font-mono text-[0.625rem] opacity-70"
                                                >
                                                    <span class="hidden"
                                                        >&nbsp;[</span
                                                    >{{ option.id
                                                    }}<span class="hidden"
                                                        >]</span
                                                    >
                                                </div>
                                            </div>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (buildings().length) {
                            <label id="bootstrap-building-label">
                                {{
                                    'APP.VISITOR_KIOSK.SELECT_BUILDING_MSG'
                                        | translate
                                }}
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select
                                    aria-labelledby="bootstrap-building-label"
                                    #select
                                    building
                                    [(ngModel)]="active_building"
                                    (ngModelChange)="setBuilding($event)"
                                    [placeholder]="
                                        'APP.VISITOR_KIOSK.SELECT_BUILDING'
                                            | translate
                                    "
                                >
                                    <mat-select-trigger>
                                        <div
                                            class="flex items-center space-x-4"
                                        >
                                            <div class="flex-1 truncate">
                                                {{
                                                    active_building()
                                                        ?.display_name ||
                                                        active_building()?.name
                                                }}
                                            </div>
                                            <div
                                                class="bg-base-200 mr-4! rounded-sm px-1.5 font-mono text-[0.625rem]"
                                            >
                                                {{ active_building()?.id }}
                                            </div>
                                        </div>
                                    </mat-select-trigger>
                                    @for (option of buildings(); track option) {
                                        <mat-option [value]="option">
                                            <div class="leading-tight">
                                                <div>
                                                    {{
                                                        option.display_name ||
                                                            option.name
                                                    }}
                                                </div>
                                                <div
                                                    class="font-mono text-[0.625rem] opacity-70"
                                                >
                                                    <span class="hidden"
                                                        >&nbsp;[</span
                                                    >{{ option.id
                                                    }}<span class="hidden"
                                                        >]</span
                                                    >
                                                </div>
                                            </div>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (levels().length && active_building()) {
                            <div></div>
                            <label id="bootstrap-level-label">
                                {{
                                    'APP.VISITOR_KIOSK.SELECT_LEVEL_MSG'
                                        | translate
                                }}
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select
                                    aria-labelledby="bootstrap-level-label"
                                    #select
                                    level
                                    [(ngModel)]="active_level"
                                    [placeholder]="
                                        'APP.VISITOR_KIOSK.SELECT_LEVEL'
                                            | translate
                                    "
                                >
                                    <mat-select-trigger>
                                        <div
                                            class="flex items-center space-x-4"
                                        >
                                            <div class="flex-1 truncate">
                                                {{
                                                    active_level()
                                                        ?.display_name ||
                                                        active_level()?.name
                                                }}
                                            </div>
                                            <div
                                                class="bg-base-200 mr-4! rounded-sm px-1.5 font-mono text-[0.625rem]"
                                            >
                                                {{ active_level()?.id }}
                                            </div>
                                        </div>
                                    </mat-select-trigger>
                                    @for (option of levels(); track option) {
                                        <mat-option [value]="option">
                                            <div class="leading-tight">
                                                <div>
                                                    {{
                                                        option.display_name ||
                                                            option.name
                                                    }}
                                                </div>
                                                <div
                                                    class="font-mono text-[0.625rem] opacity-70"
                                                >
                                                    <span class="hidden"
                                                        >&nbsp;[</span
                                                    >{{ option.id
                                                    }}<span class="hidden"
                                                        >]</span
                                                    >
                                                </div>
                                            </div>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (rotations().length) {
                            <div></div>
                            <label id="bootstrap-orientation-label">
                                {{
                                    'APP.VISITOR_KIOSK.SELECT_ORIENTATION_MSG'
                                        | translate
                                }}
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select
                                    aria-labelledby="bootstrap-orientation-label"
                                    #select
                                    [(ngModel)]="active_rotation"
                                    [placeholder]="
                                        'APP.VISITOR_KIOSK.SELECT_ORIENTATION'
                                            | translate
                                    "
                                >
                                    @for (option of rotations(); track option) {
                                        <mat-option [value]="option">
                                            <div class="leading-tight">
                                                <div>
                                                    {{
                                                        option.display_name ||
                                                            option.name
                                                    }}
                                                </div>
                                                <div
                                                    class="font-mono text-[0.625rem] opacity-70"
                                                >
                                                    <span class="hidden"
                                                        >&nbsp;[</span
                                                    >{{ option.id
                                                    }}<span class="hidden"
                                                        >]</span
                                                    >
                                                </div>
                                            </div>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (locations().length) {
                            <div></div>
                            <label id="bootstrap-location-label">
                                {{
                                    'APP.VISITOR_KIOSK.SELECT_LOCATION_MSG'
                                        | translate
                                }}
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select
                                    aria-labelledby="bootstrap-location-label"
                                    #select
                                    [(ngModel)]="active_location"
                                    [placeholder]="
                                        'APP.VISITOR_KIOSK.SELECT_LOCATION'
                                            | translate
                                    "
                                >
                                    @for (option of locations(); track option) {
                                        <mat-option [value]="option">
                                            <div class="leading-tight">
                                                <div>
                                                    {{
                                                        option.display_name ||
                                                            option.name
                                                    }}
                                                </div>
                                                <div
                                                    class="font-mono text-[0.625rem] opacity-70"
                                                >
                                                    <span class="hidden"
                                                        >&nbsp;[</span
                                                    >{{ option.id
                                                    }}<span class="hidden"
                                                        >]</span
                                                    >
                                                </div>
                                            </div>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                    </div>
                } @else {
                    <div class="m-auto flex flex-col items-center p-8">
                        <mat-spinner
                            [diameter]="32"
                            aria-hidden="true"
                        ></mat-spinner>
                        <p announce>{{ loading() }}</p>
                    </div>
                }
                @if (!loading()) {
                    <div
                        class="border-base-300 mt-4! flex w-full items-center justify-end border-t px-4 py-2"
                    >
                        <button
                            btn
                            matRipple
                            class="w-32"
                            [disabled]="!active_building() && !active_level()"
                            (click)="bootstrapKiosk()"
                        >
                            Finish Setup
                        </button>
                    </div>
                }
            </div>
            <div class="absolute right-0 bottom-0 z-10 p-2 text-right">
                <div class="text-xs opacity-70">
                    {{ 'COMMON.CONTROLS_VERSION' | translate }}:
                    {{ version.hash }}
                </div>
                <div class="text-xs opacity-70">
                    {{ version.time | date: 'longDate' }}
                    ({{ version.time | date: 'shortTime' }})
                </div>
            </div>
            @if (is_public_mode()) {
                <div
                    class="bg-base-300/90 text-base-content absolute inset-0 z-20 flex items-center justify-center p-8 text-center"
                >
                    <div class="max-w-xl space-y-2">
                        <h2 class="text-3xl font-semibold">
                            Public mode is enabled
                        </h2>
                        <p class="text-lg opacity-80">
                            Setup is disabled while this kiosk is in public
                            mode.
                        </p>
                    </div>
                </div>
            }
        </div>
    `, imports: [
      PageHeadingDirective,
      AnnounceDirective,
      CommonModule,
      MatRippleModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule
    ], styles: ["/* angular:styles/component:css;b5cb44247b14df9ceaa1cde6e18e7655f7940be592d59e7ac7be62a75ddd59dd;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/bootstrap.component.ts */\nmat-form-field {\n  width: 100%;\n}\nlabel {\n  padding-top: 1rem;\n}\n/*# sourceMappingURL=bootstrap.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BootstrapComponent, { className: "BootstrapComponent", filePath: "apps/visitor-kiosk/src/app/bootstrap.component.ts", lineNumber: 414 });
})();
export {
  BootstrapComponent
};
//# debugId=a0f73769-0180-55d7-ba8a-27ae98621202
//# sourceMappingURL=bootstrap.component-A4AZ5FRQ.js.map
