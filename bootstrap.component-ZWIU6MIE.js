import {
  MatSelect,
  MatSelectModule,
  MatSelectTrigger,
  SettingsToggleComponent,
  VirtualKeyboardComponent,
  toSignal
} from "./chunk-HG4JVFWK.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-S7NYECL6.js";
import "./chunk-HNXE7CJM.js";
import {
  MatOption
} from "./chunk-6J743VWG.js";
import "./chunk-LUYDBS2E.js";
import {
  TranslatePipe
} from "./chunk-EJHJWHXP.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  OrganisationService,
  VERSION
} from "./chunk-OYNCT7VZ.js";
import {
  AsyncHandler
} from "./chunk-YY5V2SKX.js";
import "./chunk-73APMK6M.js";
import "./chunk-76O3XVZN.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-5MSK4FA4.js";
import "./chunk-LSYCFMJO.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-TTMVHCFS.js";
import {
  Component,
  DatePipe,
  NgTemplateOutlet,
  Output,
  computed,
  effect,
  inject,
  output,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
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
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
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
} from "./chunk-5QOLI3H3.js";
import "./chunk-653SOEEV.js";

// libs/components/src/lib/kiosk-location-picker.component.ts
var _c0 = ["*"];
var _c1 = (a0) => ({ $implicit: a0 });
function KioskLocationPickerComponent_Conditional_1_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275elementContainer(1, 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const option_item_r4 = \u0275\u0275reference(11);
    \u0275\u0275property("value", option_r3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", option_item_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c1, option_r3));
  }
}
function KioskLocationPickerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 6)(4, "mat-select", 7, 1);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("ngModelChange", function KioskLocationPickerComponent_Conditional_1_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275elementStart(7, "mat-select-trigger")(8, "div", 8)(9, "div", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(13, KioskLocationPickerComponent_Conditional_1_For_14_Template, 2, 5, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, "APP.VISITOR_KIOSK.SELECT_REGION_MSG"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.active_region())("placeholder", \u0275\u0275pipeBind1(6, 7, "APP.VISITOR_KIOSK.SELECT_REGION"));
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_region()?.display_name || ctx_r1.active_region()?.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_region()?.id, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.regions());
  }
}
function KioskLocationPickerComponent_Conditional_2_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275elementContainer(1, 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const option_item_r4 = \u0275\u0275reference(11);
    \u0275\u0275property("value", option_r6);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", option_item_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c1, option_r6));
  }
}
function KioskLocationPickerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 6)(4, "mat-select", 14, 1);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("ngModelChange", function KioskLocationPickerComponent_Conditional_2_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275elementStart(7, "mat-select-trigger")(8, "div", 8)(9, "div", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(13, KioskLocationPickerComponent_Conditional_2_For_14_Template, 2, 5, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, "APP.VISITOR_KIOSK.SELECT_BUILDING_MSG"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.active_building())("placeholder", \u0275\u0275pipeBind1(6, 7, "APP.VISITOR_KIOSK.SELECT_BUILDING"));
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_building()?.display_name || ctx_r1.active_building()?.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_building()?.id, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.buildings());
  }
}
function KioskLocationPickerComponent_Conditional_3_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275elementContainer(1, 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const option_item_r4 = \u0275\u0275reference(11);
    \u0275\u0275property("value", option_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", option_item_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c1, option_r8));
  }
}
function KioskLocationPickerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div");
    \u0275\u0275elementStart(1, "label", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6)(5, "mat-select", 16, 1);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("ngModelChange", function KioskLocationPickerComponent_Conditional_3_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLevel($event));
    });
    \u0275\u0275elementStart(8, "mat-select-trigger")(9, "div", 8)(10, "div", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(14, KioskLocationPickerComponent_Conditional_3_For_15_Template, 2, 5, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275projection(16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "APP.VISITOR_KIOSK.SELECT_LEVEL_MSG"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.active_level())("placeholder", \u0275\u0275pipeBind1(7, 7, "APP.VISITOR_KIOSK.SELECT_LEVEL"));
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_level()?.display_name || ctx_r1.active_level()?.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_level()?.id, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
function KioskLocationPickerComponent_Conditional_4_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275elementContainer(1, 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r10 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const option_item_r4 = \u0275\u0275reference(11);
    \u0275\u0275property("value", option_r10);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", option_item_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c1, option_r10));
  }
}
function KioskLocationPickerComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div");
    \u0275\u0275elementStart(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6)(5, "mat-select", 18, 1);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function KioskLocationPickerComponent_Conditional_4_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.active_rotation, $event) || (ctx_r1.active_rotation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(8, KioskLocationPickerComponent_Conditional_4_For_9_Template, 2, 5, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
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
function KioskLocationPickerComponent_Conditional_5_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275elementContainer(1, 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r12 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const option_item_r4 = \u0275\u0275reference(11);
    \u0275\u0275property("value", option_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", option_item_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c1, option_r12));
  }
}
function KioskLocationPickerComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div");
    \u0275\u0275elementStart(1, "label", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6)(5, "mat-select", 20, 1);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function KioskLocationPickerComponent_Conditional_5_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.active_location, $event) || (ctx_r1.active_location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(8, KioskLocationPickerComponent_Conditional_5_For_9_Template, 2, 5, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
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
function KioskLocationPickerComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22)(4, "span", 23);
    \u0275\u0275text(5, "\xA0[");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 23);
    \u0275\u0275text(8, "]");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const option_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r13.display_name || option_r13.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r13.id);
  }
}
function saveKioskLocation(kiosk) {
  const { building, level, orientation, location } = kiosk;
  localStorage.setItem("KIOSK.building", building?.id || level.parent_id);
  localStorage.setItem("KIOSK.level", level.id);
  if (orientation) {
    localStorage.setItem("KIOSK.orientation", `${orientation.id}`);
  } else
    localStorage.removeItem("KIOSK.orientation");
  if (location)
    localStorage.setItem("KIOSK.location", `${location.id}`);
  else
    localStorage.removeItem("KIOSK.location");
}
function clearKioskLocation() {
  localStorage.removeItem("KIOSK.building");
  localStorage.removeItem("KIOSK.level");
  localStorage.removeItem("KIOSK.orientation");
  localStorage.removeItem("KIOSK.location");
}
function hasKioskLocation() {
  return !!localStorage.getItem("KIOSK.building") && !!localStorage.getItem("KIOSK.level");
}
var KioskLocationPickerComponent = class _KioskLocationPickerComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this.submitted = output();
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
    this.regions = this._org.region_list;
    this.buildings = this._org.active_buildings;
    this.levels = this._org.active_levels;
    this.locations = computed(
      () => this.active_level()?.locations || [],
      ...ngDevMode ? [{ debugName: "locations" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this.active_region.set(this._org.region);
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
  /** Select a level. A location from the old level is cleared. */
  setLevel(level) {
    this.active_level.set(level);
    this.active_location.set(null);
  }
  /** List the orientations of the active building and select the first */
  updateRotations() {
    const orientations = this.active_building()?.orientations || {};
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
  /** Emit the picked location when a level is selected */
  submit() {
    const level = this.active_level();
    if (!level)
      return;
    this.submitted.emit({
      building: this.active_building(),
      level,
      orientation: this.active_rotation(),
      location: this.active_location()
    });
  }
  static {
    this.\u0275fac = function KioskLocationPickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KioskLocationPickerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KioskLocationPickerComponent, selectors: [["kiosk-location-picker"]], outputs: { submitted: "submitted" }, ngContentSelectors: _c0, decls: 12, vars: 9, consts: [["option_item", ""], ["select", ""], [1, "flex", "flex-col", "space-y-2", "px-4"], [1, "border-base-300", "mt-4!", "flex", "w-full", "items-center", "justify-end", "border-t", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"], ["id", "bootstrap-region-label"], ["appearance", "outline", 1, "no-subscript"], ["aria-labelledby", "bootstrap-region-label", "building", "", 3, "ngModelChange", "ngModel", "placeholder"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1", "truncate"], [1, "bg-base-200", "mr-4!", "rounded-sm", "px-1.5", "font-mono", "text-[0.625rem]"], [3, "value"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["id", "bootstrap-building-label"], ["aria-labelledby", "bootstrap-building-label", "building", "", 3, "ngModelChange", "ngModel", "placeholder"], ["id", "bootstrap-level-label"], ["aria-labelledby", "bootstrap-level-label", "level", "", 3, "ngModelChange", "ngModel", "placeholder"], ["id", "bootstrap-orientation-label"], ["aria-labelledby", "bootstrap-orientation-label", 3, "ngModelChange", "ngModel", "placeholder"], ["id", "bootstrap-location-label"], ["aria-labelledby", "bootstrap-location-label", 3, "ngModelChange", "ngModel", "placeholder"], [1, "leading-tight"], [1, "font-mono", "text-[0.625rem]", "opacity-70"], [1, "hidden"]], template: function KioskLocationPickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275conditionalCreate(1, KioskLocationPickerComponent_Conditional_1_Template, 15, 9);
        \u0275\u0275conditionalCreate(2, KioskLocationPickerComponent_Conditional_2_Template, 15, 9);
        \u0275\u0275conditionalCreate(3, KioskLocationPickerComponent_Conditional_3_Template, 17, 9);
        \u0275\u0275conditionalCreate(4, KioskLocationPickerComponent_Conditional_4_Template, 10, 7);
        \u0275\u0275conditionalCreate(5, KioskLocationPickerComponent_Conditional_5_Template, 10, 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 3)(7, "button", 4);
        \u0275\u0275listener("click", function KioskLocationPickerComponent_Template_button_click_7_listener() {
          return ctx.submit();
        });
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, KioskLocationPickerComponent_ng_template_10_Template, 9, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.regions().length > 1 ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.buildings().length ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.levels().length && ctx.active_building() ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.rotations().length ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.locations().length ? 5 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.active_level());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 7, "COMMON.BOOTSTRAP_SUBMIT"), " ");
      }
    }, dependencies: [
      NgTemplateOutlet,
      FormsModule,
      NgControlStatus,
      NgModel,
      MatFormFieldModule,
      MatFormField,
      MatRippleModule,
      MatRipple,
      MatSelectModule,
      MatSelect,
      MatSelectTrigger,
      MatOption,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\nlabel[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n/*# sourceMappingURL=kiosk-location-picker.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KioskLocationPickerComponent, [{
    type: Component,
    args: [{ selector: "kiosk-location-picker", template: `
        <div class="flex flex-col space-y-2 px-4">
            @if (regions().length > 1) {
                <label id="bootstrap-region-label">
                    {{ 'APP.VISITOR_KIOSK.SELECT_REGION_MSG' | translate }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        aria-labelledby="bootstrap-region-label"
                        #select
                        building
                        [ngModel]="active_region()"
                        (ngModelChange)="setRegion($event)"
                        [placeholder]="
                            'APP.VISITOR_KIOSK.SELECT_REGION' | translate
                        "
                    >
                        <mat-select-trigger>
                            <div class="flex items-center space-x-4">
                                <div class="flex-1 truncate">
                                    {{
                                        active_region()?.display_name ||
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
                                <ng-container
                                    [ngTemplateOutlet]="option_item"
                                    [ngTemplateOutletContext]="{ $implicit: option }"
                                />
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
            @if (buildings().length) {
                <label id="bootstrap-building-label">
                    {{ 'APP.VISITOR_KIOSK.SELECT_BUILDING_MSG' | translate }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        aria-labelledby="bootstrap-building-label"
                        #select
                        building
                        [ngModel]="active_building()"
                        (ngModelChange)="setBuilding($event)"
                        [placeholder]="
                            'APP.VISITOR_KIOSK.SELECT_BUILDING' | translate
                        "
                    >
                        <mat-select-trigger>
                            <div class="flex items-center space-x-4">
                                <div class="flex-1 truncate">
                                    {{
                                        active_building()?.display_name ||
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
                                <ng-container
                                    [ngTemplateOutlet]="option_item"
                                    [ngTemplateOutletContext]="{ $implicit: option }"
                                />
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
            @if (levels().length && active_building()) {
                <div></div>
                <label id="bootstrap-level-label">
                    {{ 'APP.VISITOR_KIOSK.SELECT_LEVEL_MSG' | translate }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        aria-labelledby="bootstrap-level-label"
                        #select
                        level
                        [ngModel]="active_level()"
                        (ngModelChange)="setLevel($event)"
                        [placeholder]="
                            'APP.VISITOR_KIOSK.SELECT_LEVEL' | translate
                        "
                    >
                        <mat-select-trigger>
                            <div class="flex items-center space-x-4">
                                <div class="flex-1 truncate">
                                    {{
                                        active_level()?.display_name ||
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
                                <ng-container
                                    [ngTemplateOutlet]="option_item"
                                    [ngTemplateOutletContext]="{ $implicit: option }"
                                />
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <ng-content />
            }
            @if (rotations().length) {
                <div></div>
                <label id="bootstrap-orientation-label">
                    {{ 'APP.VISITOR_KIOSK.SELECT_ORIENTATION_MSG' | translate }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        aria-labelledby="bootstrap-orientation-label"
                        #select
                        [(ngModel)]="active_rotation"
                        [placeholder]="
                            'APP.VISITOR_KIOSK.SELECT_ORIENTATION' | translate
                        "
                    >
                        @for (option of rotations(); track option) {
                            <mat-option [value]="option">
                                <ng-container
                                    [ngTemplateOutlet]="option_item"
                                    [ngTemplateOutletContext]="{ $implicit: option }"
                                />
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
            @if (locations().length) {
                <div></div>
                <label id="bootstrap-location-label">
                    {{ 'APP.VISITOR_KIOSK.SELECT_LOCATION_MSG' | translate }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        aria-labelledby="bootstrap-location-label"
                        #select
                        [(ngModel)]="active_location"
                        [placeholder]="
                            'APP.VISITOR_KIOSK.SELECT_LOCATION' | translate
                        "
                    >
                        @for (option of locations(); track option) {
                            <mat-option [value]="option">
                                <ng-container
                                    [ngTemplateOutlet]="option_item"
                                    [ngTemplateOutletContext]="{ $implicit: option }"
                                />
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
        </div>
        <div
            class="border-base-300 mt-4! flex w-full items-center justify-end border-t px-4 py-2"
        >
            <button
                btn
                matRipple
                class="w-32"
                [disabled]="!active_level()"
                (click)="submit()"
            >
                {{ 'COMMON.BOOTSTRAP_SUBMIT' | translate }}
            </button>
        </div>
        <ng-template #option_item let-option>
            <div class="leading-tight">
                <div>{{ option.display_name || option.name }}</div>
                <div class="font-mono text-[0.625rem] opacity-70">
                    <span class="hidden">&nbsp;[</span>{{ option.id
                    }}<span class="hidden">]</span>
                </div>
            </div>
        </ng-template>
    `, imports: [
      NgTemplateOutlet,
      FormsModule,
      MatFormFieldModule,
      MatRippleModule,
      MatSelectModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;c7b5ea313591fdcc8d7490f27b731cefe30769ff131252fcb413d137c4ecd3e6;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/kiosk-location-picker.component.ts */\n:host {\n  display: block;\n}\nmat-form-field {\n  width: 100%;\n}\nlabel {\n  padding-top: 1rem;\n}\n/*# sourceMappingURL=kiosk-location-picker.component.css.map */\n"] }]
  }], null, { submitted: [{ type: Output, args: ["submitted"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KioskLocationPickerComponent, { className: "KioskLocationPickerComponent", filePath: "libs/components/src/lib/kiosk-location-picker.component.ts", lineNumber: 301 });
})();

// apps/map-kiosk/src/app/bootstrap.component.ts
function BootstrapComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 11);
    \u0275\u0275listener("ngModelChange", function BootstrapComponent_Conditional_13_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.parking.set($event));
    });
    \u0275\u0275text(1, "Show as fixed parking display");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.parking());
    \u0275\u0275control();
  }
}
var BootstrapComponent = class _BootstrapComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._query_params = toSignal(this._route.queryParamMap);
    this._ready = signal(
      false,
      ...ngDevMode ? [{ debugName: "_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._handle_query_params = effect(
      () => {
        if (!this._ready())
          return;
        const params = this._query_params();
        if (!params)
          return;
        untracked(() => this.handleQueryParams(params));
      },
      ...ngDevMode ? [{ debugName: "_handle_query_params" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.version = VERSION;
    this.parking = signal(
      false,
      ...ngDevMode ? [{ debugName: "parking" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this._ready.set(true);
    this.timeout("check", () => this.checkBootstrap(), 1e3);
  }
  /** React to changes in the route query parameters */
  handleQueryParams(params) {
    if (params.has("osk")) {
      const osk_enabled = params.get("osk") === "true";
      localStorage.setItem("OSK.enabled", `${osk_enabled}`);
    }
    if (params.has("clear") && params.get("clear") === "true") {
      clearKioskLocation();
      localStorage.removeItem("KIOSK.parking");
    }
    if (params.has("level")) {
      const level = this._org.levelWithID([params.get("level")]);
      if (level) {
        this.bootstrapKiosk({
          building: null,
          level,
          orientation: null,
          location: null
        });
      }
    }
  }
  /**
   * Store bootstrapped values and navigate to the main page
   */
  bootstrapKiosk(kiosk) {
    const parking = this.parking();
    saveKioskLocation(kiosk);
    if (parking)
      localStorage.setItem("KIOSK.parking", `true`);
    else
      localStorage.removeItem("KIOSK.parking");
    this._router.navigate([parking ? "/parking" : "/explore"]);
  }
  /**
   * Check for any existing bootstrapped values
   */
  checkBootstrap() {
    if (hasKioskLocation()) {
      const parking = localStorage.getItem("KIOSK.parking");
      this._router.navigate([parking ? "/parking" : "/explore"]);
    }
    VirtualKeyboardComponent.enabled = localStorage.getItem("OSK.enabled") === "true";
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BootstrapComponent, selectors: [["", "bootstrap", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 22, vars: 19, consts: [["picker", ""], [1, "bg-base-200", "absolute", "inset-0", "z-0"], ["form", "", 1, "border-base-200", "bg-base-100", "relative", "z-10", "mx-auto", "my-8", "w-md", "max-w-[calc(100%-2rem)]", "overflow-hidden", "rounded-lg", "border", "shadow-sm"], [1, "bg-secondary", "text-secondary-content", "flex", "w-full", "items-center", "justify-between", "px-4", "py-3", "text-xl", "font-medium"], [1, "relative", "overflow-hidden", "rounded-sm", "px-2", "py-1"], [1, "bg-base-100", "absolute", "inset-0", "z-0", "opacity-10"], [1, "relative", "z-10", "font-mono", "text-sm", "uppercase"], [3, "submitted"], [1, "mt-2", 3, "ngModel"], [1, "absolute", "right-0", "bottom-0", "z-10", "p-2", "text-right"], [1, "text-xs", "opacity-40"], [1, "mt-2", 3, "ngModelChange", "ngModel"]], template: function BootstrapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "div", 1);
        \u0275\u0275elementStart(1, "div", 2)(2, "header", 3)(3, "div");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275element(7, "div", 5);
        \u0275\u0275elementStart(8, "div", 6);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "kiosk-location-picker", 7, 0);
        \u0275\u0275listener("submitted", function BootstrapComponent_Template_kiosk_location_picker_submitted_11_listener($event) {
          return ctx.bootstrapKiosk($event);
        });
        \u0275\u0275conditionalCreate(13, BootstrapComponent_Conditional_13_Template, 2, 1, "settings-toggle", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 9)(15, "div", 10);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 10);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "date");
        \u0275\u0275pipe(21, "date");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const picker_r3 = \u0275\u0275reference(12);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, "COMMON.MAP_KIOSK"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "COMMON.BOOTSTRAP_SETUP"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(picker_r3.active_level()?.tags.includes("parking") ? 13 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(17, 11, "COMMON.CONTROLS_VERSION"), ": ", ctx.version.hash, " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(20, 13, ctx.version.time, "longDate"), " (", \u0275\u0275pipeBind2(21, 16, ctx.version.time, "shortTime"), ") ");
      }
    }, dependencies: [
      FormsModule,
      NgControlStatus,
      NgModel,
      KioskLocationPickerComponent,
      SettingsToggleComponent,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BootstrapComponent, [{
    type: Component,
    args: [{
      selector: "[bootstrap]",
      template: `
        <div class="bg-base-200 absolute inset-0 z-0"></div>
        <div
            form
            class="border-base-200 bg-base-100 relative z-10 mx-auto my-8 w-md max-w-[calc(100%-2rem)] overflow-hidden rounded-lg border shadow-sm"
        >
            <header
                class="bg-secondary text-secondary-content flex w-full items-center justify-between px-4 py-3 text-xl font-medium"
            >
                <div>
                    {{ 'COMMON.MAP_KIOSK' | translate }}
                </div>
                <div class="relative overflow-hidden rounded-sm px-2 py-1">
                    <div
                        class="bg-base-100 absolute inset-0 z-0 opacity-10"
                    ></div>
                    <div class="relative z-10 font-mono text-sm uppercase">
                        {{ 'COMMON.BOOTSTRAP_SETUP' | translate }}
                    </div>
                </div>
            </header>
            <kiosk-location-picker
                #picker
                (submitted)="bootstrapKiosk($event)"
            >
                @if (picker.active_level()?.tags.includes('parking')) {
                    <settings-toggle
                        [ngModel]="parking()"
                        (ngModelChange)="parking.set($event)"
                        class="mt-2"
                        >Show as fixed parking display</settings-toggle
                    >
                }
            </kiosk-location-picker>
        </div>
        <div class="absolute right-0 bottom-0 z-10 p-2 text-right">
            <div class="text-xs opacity-40">
                {{ 'COMMON.CONTROLS_VERSION' | translate }}: {{ version.hash }}
            </div>
            <div class="text-xs opacity-40">
                {{ version.time | date: 'longDate' }}
                ({{ version.time | date: 'shortTime' }})
            </div>
        </div>
    `,
      imports: [
        DatePipe,
        FormsModule,
        KioskLocationPickerComponent,
        SettingsToggleComponent,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BootstrapComponent, { className: "BootstrapComponent", filePath: "apps/map-kiosk/src/app/bootstrap.component.ts", lineNumber: 86 });
})();
export {
  BootstrapComponent
};
//# debugId=38445d1d-3141-5c4e-8bba-e175d862f4f4
//# sourceMappingURL=bootstrap.component-ZWIU6MIE.js.map
