import {
  DesksStateService
} from "./chunk-EZCCSAEJ.js";
import "./chunk-UTDONXPW.js";
import {
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-CPERCIGK.js";
import "./chunk-NTXOZMRY.js";
import {
  DateOptionsComponent
} from "./chunk-2NVJ6I5I.js";
import "./chunk-VZETUNS6.js";
import "./chunk-YESQDVQV.js";
import "./chunk-4PWTWFLT.js";
import "./chunk-3FN4NPVV.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-TYEIOTTY.js";
import "./chunk-XFQJKEL3.js";
import {
  CounterComponent,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-4MJY7RRT.js";
import {
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  CurrencyPipe,
  DefaultValueAccessor,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  Injectable,
  MAT_DIALOG_DATA,
  MatDialog,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatOption,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatSuffix,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  OrganisationService,
  Output,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SettingsToggleComponent,
  SimpleTableComponent,
  SpacesService,
  TimeFieldComponent,
  TranslatePipe,
  addHours,
  combineLatest,
  first,
  inject,
  map,
  randomInt,
  setClassMetadata,
  shareReplay,
  tap,
  toDate,
  toObservable,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-25H4I2JW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// node_modules/date-fns/startOfHour.js
function startOfHour(date, options) {
  const _date = toDate(date, options?.in);
  _date.setMinutes(0, 0, 0);
  return _date;
}

// apps/concierge/src/app/points/asset-modal.component.ts
var _c0 = () => [];
var _c1 = () => ({ standalone: true });
function PointsAssetModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function PointsAssetModalComponent_Conditional_5_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 14);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function PointsAssetModalComponent_Conditional_5_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    \u0275\u0275property("value", (option_r2 == null ? null : option_r2.display_name) || (option_r2 == null ? null : option_r2.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (option_r2 == null ? null : option_r2.display_name) || (option_r2 == null ? null : option_r2.name), " ");
  }
}
function PointsAssetModalComponent_Conditional_5_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.POINTS_ASSETS_SEARCH_EMPTY"), " ");
  }
}
function PointsAssetModalComponent_Conditional_5_For_55_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a-time-field", 39);
    \u0275\u0275twoWayListener("ngModelChange", function PointsAssetModalComponent_Conditional_5_For_55_Conditional_17_Template_a_time_field_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const rule_r4 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(rule_r4.second, $event) || (rule_r4.second = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rule_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", rule_r4.second);
    \u0275\u0275property("from", rule_r4.first)("ngModelOptions", \u0275\u0275pureFunction0(3, _c1));
  }
}
function PointsAssetModalComponent_Conditional_5_For_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 29)(2, "mat-form-field", 30)(3, "mat-label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-select", 31);
    \u0275\u0275twoWayListener("ngModelChange", function PointsAssetModalComponent_Conditional_5_For_55_Template_mat_select_ngModelChange_6_listener($event) {
      const rule_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(rule_r4.type, $event) || (rule_r4.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(7, "mat-option", 32);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-option", 33);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-option", 34);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "a-time-field", 35);
    \u0275\u0275twoWayListener("ngModelChange", function PointsAssetModalComponent_Conditional_5_For_55_Template_a_time_field_ngModelChange_16_listener($event) {
      const rule_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(rule_r4.first, $event) || (rule_r4.first = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, PointsAssetModalComponent_Conditional_5_For_55_Conditional_17_Template, 1, 4, "a-time-field", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 37);
    \u0275\u0275text(19, "@");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "a-counter", 38);
    \u0275\u0275twoWayListener("ngModelChange", function PointsAssetModalComponent_Conditional_5_For_55_Template_a_counter_ngModelChange_20_listener($event) {
      const rule_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(rule_r4.rate, $event) || (rule_r4.rate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rule_r4 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 15, "RESOURCE.LEVEL"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", rule_r4.type);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(23, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 17, "APP.CONCIERGE.POINTS_RATE_RULES_BEFORE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.POINTS_RATE_RULES_BETWEEN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 21, "APP.CONCIERGE.POINTS_RATE_RULES_AFTER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", rule_r4.first);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(24, _c1));
    \u0275\u0275advance();
    \u0275\u0275conditional(rule_r4.type === "between" ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", rule_r4.rate);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(25, _c1))("min", 0)("max", 300)("step", 5)("render_fn", ctx_r5.renderPercent);
  }
}
function PointsAssetModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4)(1, "div", 7)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 8)(6, "mat-label");
    \u0275\u0275text(7, "Asset Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-select", 9)(9, "mat-option", 10);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-option", 11);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 7)(16, "label");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-form-field", 8)(20, "mat-label");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "icon", 12);
    \u0275\u0275text(24, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 13);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275conditionalCreate(27, PointsAssetModalComponent_Conditional_5_Conditional_27_Template, 1, 1, "mat-spinner", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(30, PointsAssetModalComponent_Conditional_5_For_31_Template, 2, 2, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(32, "async");
    \u0275\u0275conditionalCreate(33, PointsAssetModalComponent_Conditional_5_Conditional_33_Template, 3, 4, "mat-option", 16);
    \u0275\u0275pipe(34, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 17);
    \u0275\u0275element(36, "settings-toggle", 18);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 19)(39, "div", 20)(40, "label");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "a-counter", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 20)(45, "label");
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "a-counter", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 23)(50, "label");
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div");
    \u0275\u0275repeaterCreate(54, PointsAssetModalComponent_Conditional_5_For_55_Template, 21, 26, "div", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 25);
    \u0275\u0275listener("click", function PointsAssetModalComponent_Conditional_5_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.newRule());
    });
    \u0275\u0275elementStart(57, "div", 26)(58, "icon", 27);
    \u0275\u0275text(59, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 28);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_26_0;
    const auto_r7 = \u0275\u0275reference(29);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r5.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 25, "APP.CONCIERGE.POINTS_TYPE"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 27, "RESOURCE.ROOM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 29, "RESOURCE.DESK"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 31, "RESOURCE.ASSET"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 33, "FORM.NAME"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("opacity-60", !ctx_r5.form.get("type").value);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(26, 35, "APP.CONCIERGE.POINTS_ASSETS_SEARCH"))("matAutocomplete", auto_r7);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r5.loading ? 27 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(32, 37, ctx_r5.asset_options));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!((tmp_13_0 = \u0275\u0275pipeBind1(34, 39, ctx_r5.asset_options)) == null ? null : tmp_13_0.length) ? 33 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(37, 41, "APP.CONCIERGE.POINTS_ACCEPT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 43, "APP.CONCIERGE.POINTS_STANDARD_RATE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 500)("max", 8e4)("step", 500)("render_fn", ctx_r5.renderPrice);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 45, "APP.CONCIERGE.POINTS_DISCOUNT_CAP"));
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 0)("max", 100)("step", 5)("render_fn", ctx_r5.renderPercent);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 47, "APP.CONCIERGE.POINTS_RATE_RULES"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(((tmp_26_0 = ctx_r5.form.get("custom_rates")) == null ? null : tmp_26_0.value) || \u0275\u0275pureFunction0(51, _c0));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 49, "APP.CONCIERGE.POINTS_RATE_RULES_NEW"));
  }
}
var _PointsAssetModalComponent = class _PointsAssetModalComponent extends AsyncHandler {
  constructor() {
    super();
    this._spaces = inject(SpacesService);
    this._desks = inject(DesksStateService);
    this._data = inject(MAT_DIALOG_DATA);
    this.event = new EventEmitter();
    this.form = new FormGroup({
      id: new FormControl(this._data.asset?.id || ""),
      asset_id: new FormControl(this._data.asset?.asset_id || ""),
      name: new FormControl(this._data.asset?.name || ""),
      type: new FormControl(this._data.asset?.type || ""),
      accept_points: new FormControl(this._data.asset?.accept_points ?? false),
      discount_cap: new FormControl(this._data.asset?.discount_cap || 50),
      unit_price: new FormControl(this._data.asset?.unit_price || 1e3),
      custom_rates: new FormControl(this._data.asset?.custom_rates || [])
    });
    this.asset_options = combineLatest([
      this.form.valueChanges,
      this._spaces.list,
      toObservable(this._desks.desks)
    ]).pipe(map(([{ type, name }, spaces, desks]) => {
      this.loading = true;
      const search = (name || "").toLowerCase();
      return !type ? [] : type === "space" ? spaces.filter((_) => _.name.toLowerCase().includes(search)) : desks.filter((_) => _.name.toLowerCase().includes(search));
    }), tap(() => this.loading = false), shareReplay(1));
    this._desks.setFilters({ zones: ["All"] });
    this.subscription("type_change", this.form.get("type").valueChanges.subscribe((v) => {
      const field = this.form.get("name");
      v ? field.enable() : field.disable();
    }));
  }
  renderPrice(value = 0) {
    return `$${(value / 100)?.toFixed(2)}`;
  }
  renderPercent(value = 0) {
    return `${value}%`;
  }
  newRule() {
    this.form.get("custom_rates").setValue([
      ...this.form.get("custom_rates").value,
      {
        type: "before",
        first: startOfHour(/* @__PURE__ */ new Date()),
        second: addHours(startOfHour(/* @__PURE__ */ new Date()), 1),
        rate: 100
      }
    ]);
  }
  save() {
    this.event.emit({ reason: "done", metadata: __spreadValues({}, this.form.value) });
  }
};
_PointsAssetModalComponent.\u0275fac = function PointsAssetModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointsAssetModalComponent)();
};
_PointsAssetModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsAssetModalComponent, selectors: [["points-asset-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 9, consts: [["auto", "matAutocomplete"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", "aria-label", "Close dialog"], [1, "min-w-md", "overflow-hidden", "px-4", "py-2", 3, "formGroup"], [1, "border-base-200", "flex", "items-center", "justify-end", "space-x-2", "border-t", "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"], [1, "flex", "flex-col"], ["appearance", "outline", 1, "h-13", "flex-1"], ["formControlName", "type", "placeholder", "Select asset type"], ["value", "space"], ["value", "desk"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "formControlName", "name", 3, "placeholder", "matAutocomplete"], ["matSuffix", "", 3, "diameter"], [3, "value"], [3, "disabled"], [1, "mb-4", "flex", "items-center"], ["formControlName", "accept_points", 1, "w-full", 3, "name"], [1, "mb-4", "flex", "space-x-4"], [1, "flex", "flex-1", "flex-col"], ["formControlName", "unit_price", 1, "w-full", 3, "min", "max", "step", "render_fn"], ["formControlName", "discount_cap", 1, "w-full", 3, "min", "max", "step", "render_fn"], [1, ""], ["rule", "", 1, "flex", "items-center"], ["btn", "", "matRipple", "", 1, "clear", "w-full", 3, "click"], [1, "flex", "w-full", "items-center", "justify-center"], [1, "text-lg"], [1, "underline"], [1, "flex", "w-1/2", "flex-1", "items-center", "space-x-2"], ["appearance", "outline", 1, "h-13", "w-32", "flex-2"], [3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "before"], ["value", "between"], ["value", "after"], [1, "mt-2", "w-40", "flex-1", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "mt-2", "w-40", "flex-1", 3, "ngModel", "from", "ngModelOptions"], [1, "mx-2"], [1, "border-base-200", "rounded-sm", "border", 3, "ngModelChange", "ngModel", "ngModelOptions", "min", "max", "step", "render_fn"], [1, "mt-2", "w-40", "flex-1", 3, "ngModelChange", "ngModel", "from", "ngModelOptions"]], template: function PointsAssetModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, PointsAssetModalComponent_Conditional_4_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, PointsAssetModalComponent_Conditional_5_Template, 63, 52, "main", 4);
    \u0275\u0275elementStart(6, "footer", 5)(7, "button", 6);
    \u0275\u0275listener("click", function PointsAssetModalComponent_Template_button_click_7_listener() {
      return ctx.save();
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, (ctx.form == null ? null : ctx.form.value == null ? null : ctx.form.value.id) ? "APP.CONCIERGE.POINTS_ASSETS_EDIT" : "APP.CONCIERGE.POINTS_ASSETS_NEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.form.value.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 7, "COMMON.SAVE"), " ");
  }
}, dependencies: [
  AsyncPipe,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  IconComponent,
  CounterComponent,
  TimeFieldComponent,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatPrefix,
  MatSuffix,
  MatSelectModule,
  MatSelect,
  MatOption,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  SettingsToggleComponent,
  MatAutocompleteModule,
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName
], styles: ["\n\nlabel[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 0;\n  margin: 0 1rem 0 0;\n}\n/*# sourceMappingURL=asset-modal.component.css.map */"] });
var PointsAssetModalComponent = _PointsAssetModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PointsAssetModalComponent, [{
    type: Component,
    args: [{ selector: "points-asset-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (form?.value?.id
                        ? 'APP.CONCIERGE.POINTS_ASSETS_EDIT'
                        : 'APP.CONCIERGE.POINTS_ASSETS_NEW'
                    ) | translate
                }}
            </h2>
            @if (!loading) {
                <button icon matRipple mat-dialog-close aria-label="Close dialog">
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (form) {
            <main class="min-w-md overflow-hidden px-4 py-2" [formGroup]="form">
                <div class="flex flex-col">
                    <label>{{ 'APP.CONCIERGE.POINTS_TYPE' | translate }}</label>
                    <mat-form-field appearance="outline" class="h-13 flex-1">
                        <mat-label>Asset Type</mat-label>
                        <mat-select
                            formControlName="type"
                            placeholder="Select asset type"
                        >
                            <mat-option value="space">{{
                                'RESOURCE.ROOM' | translate
                            }}</mat-option>
                            <mat-option value="desk">{{
                                'RESOURCE.DESK' | translate
                            }}</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label>{{ 'RESOURCE.ASSET' | translate }}</label>
                    <mat-form-field appearance="outline" class="h-13 flex-1">
                        <mat-label>{{ 'FORM.NAME' | translate }}</mat-label>
                        <icon
                            matPrefix
                            class="text-2xl"
                            [class.opacity-60]="!form.get('type').value"
                            >search</icon
                        >
                        <input
                            matInput
                            formControlName="name"
                            [placeholder]="
                                'APP.CONCIERGE.POINTS_ASSETS_SEARCH' | translate
                            "
                            [matAutocomplete]="auto"
                        />
                        @if (loading) {
                            <mat-spinner
                                matSuffix
                                [diameter]="32"
                            ></mat-spinner>
                        }
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete">
                        @for (option of asset_options | async; track option) {
                            <mat-option
                                [value]="option?.display_name || option?.name"
                            >
                                {{ option?.display_name || option?.name }}
                            </mat-option>
                        }
                        @if (!(asset_options | async)?.length) {
                            <mat-option [disabled]="true">
                                {{
                                    'APP.CONCIERGE.POINTS_ASSETS_SEARCH_EMPTY'
                                        | translate
                                }}
                            </mat-option>
                        }
                    </mat-autocomplete>
                </div>
                <div class="mb-4 flex items-center">
                    <settings-toggle
                        [name]="'APP.CONCIERGE.POINTS_ACCEPT' | translate"
                        formControlName="accept_points"
                        class="w-full"
                    ></settings-toggle>
                </div>
                <div class="mb-4 flex space-x-4">
                    <div class="flex flex-1 flex-col">
                        <label>{{
                            'APP.CONCIERGE.POINTS_STANDARD_RATE' | translate
                        }}</label>
                        <a-counter
                            class="w-full"
                            formControlName="unit_price"
                            [min]="500"
                            [max]="80000"
                            [step]="500"
                            [render_fn]="renderPrice"
                        ></a-counter>
                    </div>
                    <div class="flex flex-1 flex-col">
                        <label>{{
                            'APP.CONCIERGE.POINTS_DISCOUNT_CAP' | translate
                        }}</label>
                        <a-counter
                            class="w-full"
                            formControlName="discount_cap"
                            [min]="0"
                            [max]="100"
                            [step]="5"
                            [render_fn]="renderPercent"
                        ></a-counter>
                    </div>
                </div>
                <div class="">
                    <label>{{
                        'APP.CONCIERGE.POINTS_RATE_RULES' | translate
                    }}</label>
                    <div>
                        @for (
                            rule of form.get('custom_rates')?.value || [];
                            track rule
                        ) {
                            <div rule class="flex items-center">
                                <div
                                    class="flex w-1/2 flex-1 items-center space-x-2"
                                >
                                    <mat-form-field
                                        appearance="outline"
                                        class="h-13 w-32 flex-2"
                                    >
                                        <mat-label>{{ 'RESOURCE.LEVEL' | translate }}</mat-label>
                                        <mat-select
                                            [(ngModel)]="rule.type"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        >
                                            <mat-option value="before">
                                                {{
                                                    'APP.CONCIERGE.POINTS_RATE_RULES_BEFORE'
                                                        | translate
                                                }}
                                            </mat-option>
                                            <mat-option value="between">
                                                {{
                                                    'APP.CONCIERGE.POINTS_RATE_RULES_BETWEEN'
                                                        | translate
                                                }}
                                            </mat-option>
                                            <mat-option value="after">
                                                {{
                                                    'APP.CONCIERGE.POINTS_RATE_RULES_AFTER'
                                                        | translate
                                                }}
                                            </mat-option>
                                        </mat-select>
                                    </mat-form-field>
                                    <a-time-field
                                        class="mt-2 w-40 flex-1"
                                        [(ngModel)]="rule.first"
                                        [ngModelOptions]="{ standalone: true }"
                                    ></a-time-field>
                                    @if (rule.type === 'between') {
                                        <a-time-field
                                            class="mt-2 w-40 flex-1"
                                            [(ngModel)]="rule.second"
                                            [from]="rule.first"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        ></a-time-field>
                                    }
                                </div>
                                <span class="mx-2">&#64;</span>
                                <a-counter
                                    class="border-base-200 rounded-sm border"
                                    [(ngModel)]="rule.rate"
                                    [ngModelOptions]="{ standalone: true }"
                                    [min]="0"
                                    [max]="300"
                                    [step]="5"
                                    [render_fn]="renderPercent"
                                ></a-counter>
                            </div>
                        }
                    </div>
                    <button
                        btn
                        matRipple
                        class="clear w-full"
                        (click)="newRule()"
                    >
                        <div class="flex w-full items-center justify-center">
                            <icon class="text-lg">add</icon>
                            <span class="underline">{{
                                'APP.CONCIERGE.POINTS_RATE_RULES_NEW'
                                    | translate
                            }}</span>
                        </div>
                    </button>
                </div>
            </main>
        }
        <footer
            class="border-base-200 flex items-center justify-end space-x-2 border-t p-2"
        >
            <button
                btn
                matRipple
                class="w-32"
                [disabled]="!form.value.name"
                (click)="save()"
            >
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
    `, imports: [
      AsyncPipe,
      MatRippleModule,
      TranslatePipe,
      IconComponent,
      CounterComponent,
      TimeFieldComponent,
      TimeFieldComponent,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      SettingsToggleComponent,
      MatAutocompleteModule,
      MatProgressSpinnerModule,
      ReactiveFormsModule
    ], styles: ["/* angular:styles/component:css;eeb114e7766a95e93c6c6baee8932f63df21a648b3e512ffa9a6462164777c8a;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/points/asset-modal.component.ts */\nlabel {\n  width: auto;\n  min-width: 0;\n  margin: 0 1rem 0 0;\n}\n/*# sourceMappingURL=asset-modal.component.css.map */\n"] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointsAssetModalComponent, { className: "PointsAssetModalComponent", filePath: "apps/concierge/src/app/points/asset-modal.component.ts", lineNumber: 276 });
})();

// apps/concierge/src/app/points/points-state.service.ts
var _PointsStateService = class _PointsStateService {
  constructor() {
    this._dialog = inject(MatDialog);
    this._assets = new BehaviorSubject([]);
    this.assets = this._assets.asObservable();
    this._assets.next(JSON.parse(localStorage.getItem("PLACEOS.point_assets") || "[]"));
    this.assets.subscribe((list) => {
      localStorage.setItem("PLACEOS.point_assets", JSON.stringify(list));
    });
  }
  async newAsset(asset) {
    const ref = this._dialog.open(PointsAssetModalComponent, {
      data: { asset }
    });
    const details = await Promise.race([
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
      ref.afterClosed().toPromise()
    ]);
    if (details.reason !== "done")
      return ref.close();
    this._assets.next([
      ...this._assets.getValue().filter((_) => _.id !== asset?.id),
      __spreadProps(__spreadValues({}, details.metadata), {
        id: details.metadata.id || `PA-${randomInt(999999999)}`
      })
    ]);
    ref.close();
  }
  removeAsset(asset_id) {
    this._assets.next(this._assets.getValue().filter((_) => _.id !== asset_id));
  }
};
_PointsStateService.\u0275fac = function PointsStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointsStateService)();
};
_PointsStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PointsStateService, factory: _PointsStateService.\u0275fac, providedIn: "root" });
var PointsStateService = _PointsStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PointsStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/concierge/src/app/points/points-assets.component.ts
var _c02 = (a0) => ({ key: "name", name: a0 });
var _c12 = (a0, a1) => ({ key: "type", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "unit_price", name: a0, content: a1 });
var _c3 = (a0, a1) => ({ key: "accept_points", name: a0, content: a1, size: "5.5rem" });
var _c4 = (a0, a1) => ({ key: "discount_cap", name: a0, content: a1, size: "9rem" });
var _c5 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6.5rem" });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function PointsAssetsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r1, " ");
  }
}
function PointsAssetsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, data_r2 / 100, ctx_r2.code), " p/h ");
  }
}
function PointsAssetsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    \u0275\u0275classProp("bg-error", !data_r4)("bg-success", data_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4 ? "done" : "close");
  }
}
function PointsAssetsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", data_r5, "%");
  }
}
function PointsAssetsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 12);
    \u0275\u0275listener("click", function PointsAssetsComponent_ng_template_15_Template_button_click_1_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(row_r7));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 13);
    \u0275\u0275listener("click", function PointsAssetsComponent_ng_template_15_Template_button_click_4_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.remove(row_r7));
    });
    \u0275\u0275elementStart(5, "icon", 14);
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
var _PointsAssetsComponent = class _PointsAssetsComponent {
  constructor() {
    this._state = inject(PointsStateService);
    this._org = inject(OrganisationService);
    this.asset_list = this._state.assets;
    this.edit = (d) => this._state.newAsset(d);
    this.remove = (d) => this._state.removeAsset(d?.id);
  }
  get code() {
    return this._org.currency_code;
  }
};
_PointsAssetsComponent.\u0275fac = function PointsAssetsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointsAssetsComponent)();
};
_PointsAssetsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsAssetsComponent, selectors: [["points-assets"]], decls: 17, vars: 39, consts: [["type_template", ""], ["price_template", ""], ["bool_template", ""], ["discount_template", ""], ["action_template", ""], [1, "block", "w-full", "min-w-lg", 3, "data", "columns", "sortable", "empty_message"], [1, "p-2"], [1, "bg-base-200", "rounded-sm", "px-2", "py-1", "text-sm", "capitalize"], [1, "p-4", "font-mono", "text-xs"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", "text-white"], [1, "p-4", "text-right"], [1, "mx-auto", "flex", "items-center", "justify-end", "p-2"], ["icon", "", "matRipple", "", "aria-label", "Edit asset", 3, "click"], ["icon", "", "matRipple", "", "aria-label", "Delete asset", 3, "click"], [1, "text-error"]], template: function PointsAssetsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "simple-table", 5);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275template(7, PointsAssetsComponent_ng_template_7_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, PointsAssetsComponent_ng_template_9_Template, 3, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, PointsAssetsComponent_ng_template_11_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(13, PointsAssetsComponent_ng_template_13_Template, 2, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(15, PointsAssetsComponent_ng_template_15_Template, 7, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const type_template_r8 = \u0275\u0275reference(8);
    const price_template_r9 = \u0275\u0275reference(10);
    const bool_template_r10 = \u0275\u0275reference(12);
    const discount_template_r11 = \u0275\u0275reference(14);
    const action_template_r12 = \u0275\u0275reference(16);
    \u0275\u0275property("data", ctx.asset_list)("columns", \u0275\u0275pureFunction6(32, _c6, \u0275\u0275pureFunction1(16, _c02, \u0275\u0275pipeBind1(1, 4, "FORM.NAME")), \u0275\u0275pureFunction2(18, _c12, \u0275\u0275pipeBind1(2, 6, "COMMON.TYPE"), type_template_r8), \u0275\u0275pureFunction2(21, _c2, \u0275\u0275pipeBind1(3, 8, "APP.CONCIERGE.POINTS_PRICE"), price_template_r9), \u0275\u0275pureFunction2(24, _c3, \u0275\u0275pipeBind1(4, 10, "APP.CONCIERGE.POINTS_LABEL"), bool_template_r10), \u0275\u0275pureFunction2(27, _c4, \u0275\u0275pipeBind1(5, 12, "APP.CONCIERGE.POINTS_DISCOUNT"), discount_template_r11), \u0275\u0275pureFunction1(30, _c5, action_template_r12)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(6, 14, "APP.CONCIERGE.POINTS_ASSETS_EMPTY"));
  }
}, dependencies: [
  CommonModule,
  CurrencyPipe,
  SimpleTableComponent,
  MatRippleModule,
  MatRipple,
  IconComponent,
  TranslatePipe
], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=points-assets.component.css.map */"] });
var PointsAssetsComponent = _PointsAssetsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PointsAssetsComponent, [{
    type: Component,
    args: [{ selector: "points-assets", template: `
        <simple-table
            class="block w-full min-w-lg"
            [data]="asset_list"
            [columns]="[
                { key: 'name', name: 'FORM.NAME' | translate },
                {
                    key: 'type',
                    name: 'COMMON.TYPE' | translate,
                    content: type_template,
                },
                {
                    key: 'unit_price',
                    name: 'APP.CONCIERGE.POINTS_PRICE' | translate,
                    content: price_template,
                },
                {
                    key: 'accept_points',
                    name: 'APP.CONCIERGE.POINTS_LABEL' | translate,
                    content: bool_template,
                    size: '5.5rem',
                },
                {
                    key: 'discount_cap',
                    name: 'APP.CONCIERGE.POINTS_DISCOUNT' | translate,
                    content: discount_template,
                    size: '9rem',
                },
                {
                    key: 'actions',
                    name: ' ',
                    content: action_template,
                    size: '6.5rem',
                },
            ]"
            [sortable]="true"
            [empty_message]="'APP.CONCIERGE.POINTS_ASSETS_EMPTY' | translate"
        />
        <ng-template #type_template let-data="data">
            <div class="p-2">
                <span
                    class="bg-base-200 rounded-sm px-2 py-1 text-sm capitalize"
                >
                    {{ data }}
                </span>
            </div>
        </ng-template>
        <ng-template #price_template let-data="data">
            <span class="p-4 font-mono text-xs">
                {{ data / 100 | currency: code }} p/h
            </span>
        </ng-template>
        <ng-template #bool_template let-data="data">
            <div
                [class.bg-error]="!data"
                [class.bg-success]="data"
                class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl text-white"
            >
                <icon>{{ data ? 'done' : 'close' }}</icon>
            </div>
        </ng-template>
        <ng-template #discount_template let-data="data">
            <div class="p-4 text-right">{{ data }}%</div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex items-center justify-end p-2">
                <button icon matRipple (click)="edit(row)" aria-label="Edit asset">
                    <icon>edit</icon>
                </button>
                <button icon matRipple (click)="remove(row)" aria-label="Delete asset">
                    <icon class="text-error">delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      CommonModule,
      SimpleTableComponent,
      MatRippleModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;fc920bce50edd1dac5546bb62d2c5d80ffdb0ed114cdfa8d17a0a6a91a2c6859;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/points/points-assets.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=points-assets.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointsAssetsComponent, { className: "PointsAssetsComponent", filePath: "apps/concierge/src/app/points/points-assets.component.ts", lineNumber: 122 });
})();

// apps/concierge/src/app/points/points-overview.component.ts
var _PointsOverviewComponent = class _PointsOverviewComponent {
  constructor() {
    this.points = {
      value: 0.1,
      desk_checkin: 2,
      room_checkin: 2,
      booking_cancel: 3,
      wellness_card: 1
    };
  }
  ngOnInit() {
    this.loadPoints();
  }
  renderPrice(value = 0) {
    return `$${value?.toFixed(2)}`;
  }
  loadPoints() {
    this.points = __spreadValues(__spreadValues({}, this.points), JSON.parse(localStorage.getItem("PLACEOS.point_details") || "{}"));
  }
  storePoints() {
    localStorage.setItem("PLACEOS.point_details", JSON.stringify(this.points));
  }
};
_PointsOverviewComponent.\u0275fac = function PointsOverviewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointsOverviewComponent)();
};
_PointsOverviewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsOverviewComponent, selectors: [["points-overview"]], decls: 40, vars: 34, consts: [[1, "border-base-300", "mb-4", "w-full", "rounded-sm", "border", "px-4", "py-3", "text-lg", "font-medium"], [1, "bg-base-100", "w-full"], [1, "p-2", "text-lg", "font-medium", "underline"], [1, "mb-4", "flex", "items-center", "space-x-2", "p-4"], [1, "font-mono"], [1, "w-48", 3, "ngModelChange", "step", "ngModel", "render_fn"], [1, "text-2xl", 3, "matTooltip"], [1, "bg-base-100", "w-full", "flex-1"], [1, "p-4"], [1, "border-base-200", "flex", "items-center", "space-x-4", "border-b", "p-2"], [3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "space-x-4", "p-2"]], template: function PointsOverviewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "section", 1)(4, "h2", 2);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 3)(8, "span", 4);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a-counter", 5);
    \u0275\u0275twoWayListener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_11_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.points.value, $event) || (ctx.points.value = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_11_listener() {
      return ctx.storePoints();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "icon", 6);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275text(14, " info ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "section", 7)(16, "h2", 2);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 8)(20, "div", 9)(21, "a-counter", 10);
    \u0275\u0275twoWayListener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_21_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.points.desk_checkin, $event) || (ctx.points.desk_checkin = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_21_listener() {
      return ctx.storePoints();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 9)(26, "a-counter", 10);
    \u0275\u0275twoWayListener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_26_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.points.room_checkin, $event) || (ctx.points.room_checkin = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_26_listener() {
      return ctx.storePoints();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 9)(31, "a-counter", 10);
    \u0275\u0275twoWayListener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_31_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.points.booking_cancel, $event) || (ctx.points.booking_cancel = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_31_listener() {
      return ctx.storePoints();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 11)(36, "a-counter", 10);
    \u0275\u0275twoWayListener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_36_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.points.wellness_card, $event) || (ctx.points.wellness_card = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_36_listener() {
      return ctx.storePoints();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 16, "APP.CONCIERGE.POINTS_OVERVIEW_HEADER"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 18, "APP.CONCIERGE.POINTS_VALUE_HEADER"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 20, "APP.CONCIERGE.POINTS_ONE_POINT"), " =");
    \u0275\u0275advance(2);
    \u0275\u0275property("step", 0.1);
    \u0275\u0275twoWayProperty("ngModel", ctx.points.value);
    \u0275\u0275property("render_fn", ctx.renderPrice);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(13, 22, "APP.CONCIERGE.POINTS_VALUE_INFO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 24, "APP.CONCIERGE.POINTS_AUTO_REWARDS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.points.desk_checkin);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 26, "APP.CONCIERGE.POINTS_REWARD_DESK"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.points.room_checkin);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 28, "APP.CONCIERGE.POINTS_REWARD_ROOM"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.points.booking_cancel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 30, "APP.CONCIERGE.POINTS_REWARD_CANCEL"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.points.wellness_card);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 32, "APP.CONCIERGE.POINTS_REWARD_WELLNESS"));
  }
}, dependencies: [
  CounterComponent,
  FormsModule,
  NgControlStatus,
  NgModel,
  TranslatePipe,
  MatTooltipModule,
  MatTooltip,
  IconComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=points-overview.component.css.map */"] });
var PointsOverviewComponent = _PointsOverviewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PointsOverviewComponent, [{
    type: Component,
    args: [{ selector: "points-overview", template: `
        <h2
            class="border-base-300 mb-4 w-full rounded-sm border px-4 py-3 text-lg font-medium"
        >
            {{ 'APP.CONCIERGE.POINTS_OVERVIEW_HEADER' | translate }}
        </h2>
        <section class="bg-base-100 w-full">
            <h2 class="p-2 text-lg font-medium underline">
                {{ 'APP.CONCIERGE.POINTS_VALUE_HEADER' | translate }}
            </h2>
            <div class="mb-4 flex items-center space-x-2 p-4">
                <span class="font-mono"
                    >{{ 'APP.CONCIERGE.POINTS_ONE_POINT' | translate }} =</span
                >
                <a-counter
                    class="w-48"
                    [step]="0.1"
                    [(ngModel)]="points.value"
                    (ngModelChange)="storePoints()"
                    [render_fn]="renderPrice"
                ></a-counter>
                <icon
                    class="text-2xl"
                    [matTooltip]="'APP.CONCIERGE.POINTS_VALUE_INFO' | translate"
                >
                    info
                </icon>
            </div>
        </section>
        <section class="bg-base-100 w-full flex-1">
            <h2 class="p-2 text-lg font-medium underline">
                {{ 'APP.CONCIERGE.POINTS_AUTO_REWARDS' | translate }}
            </h2>
            <div class="p-4">
                <div
                    class="border-base-200 flex items-center space-x-4 border-b p-2"
                >
                    <a-counter
                        [(ngModel)]="points.desk_checkin"
                        (ngModelChange)="storePoints()"
                    ></a-counter>
                    <span>{{
                        'APP.CONCIERGE.POINTS_REWARD_DESK' | translate
                    }}</span>
                </div>
                <div
                    class="border-base-200 flex items-center space-x-4 border-b p-2"
                >
                    <a-counter
                        [(ngModel)]="points.room_checkin"
                        (ngModelChange)="storePoints()"
                    ></a-counter>
                    <span>{{
                        'APP.CONCIERGE.POINTS_REWARD_ROOM' | translate
                    }}</span>
                </div>
                <div
                    class="border-base-200 flex items-center space-x-4 border-b p-2"
                >
                    <a-counter
                        [(ngModel)]="points.booking_cancel"
                        (ngModelChange)="storePoints()"
                    ></a-counter>
                    <span>{{
                        'APP.CONCIERGE.POINTS_REWARD_CANCEL' | translate
                    }}</span>
                </div>
                <div class="flex items-center space-x-4 p-2">
                    <a-counter
                        [(ngModel)]="points.wellness_card"
                        (ngModelChange)="storePoints()"
                    ></a-counter>
                    <span>{{
                        'APP.CONCIERGE.POINTS_REWARD_WELLNESS' | translate
                    }}</span>
                </div>
            </div>
        </section>
    `, imports: [
      CounterComponent,
      FormsModule,
      TranslatePipe,
      MatTooltipModule,
      IconComponent
    ], styles: ["/* angular:styles/component:css;988165d096528c7b51347b92b4b6dc221c4aacfd0a189d7585a5c637e136471a;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/points/points-overview.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=points-overview.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointsOverviewComponent, { className: "PointsOverviewComponent", filePath: "apps/concierge/src/app/points/points-overview.component.ts", lineNumber: 104 });
})();

// apps/concierge/src/app/points/points-topbar.component.ts
var _c03 = ["*"];
var _PointsTopbarComponent = class _PointsTopbarComponent extends AsyncHandler {
};
_PointsTopbarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275PointsTopbarComponent_BaseFactory;
  return function PointsTopbarComponent_Factory(__ngFactoryType__) {
    return (\u0275PointsTopbarComponent_BaseFactory || (\u0275PointsTopbarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_PointsTopbarComponent)))(__ngFactoryType__ || _PointsTopbarComponent);
  };
})();
_PointsTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsTopbarComponent, selectors: [["points-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c03, decls: 8, vars: 3, consts: [[1, "bg-base-100", "flex", "h-20", "items-center", "space-x-2", "px-8", "py-4"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], [1, "pl-2"]], template: function PointsTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 2)(5, "date-options");
    \u0275\u0275elementStart(6, "div", 3);
    \u0275\u0275projection(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.POINTS_HEADER"), " ");
  }
}, dependencies: [DateOptionsComponent, TranslatePipe], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=points-topbar.component.css.map */"] });
var PointsTopbarComponent = _PointsTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PointsTopbarComponent, [{
    type: Component,
    args: [{ selector: "points-topbar", template: `
        <div class="bg-base-100 flex h-20 items-center space-x-2 px-8 py-4">
            <h2 class="text-2xl font-medium">
                {{ 'APP.CONCIERGE.POINTS_HEADER' | translate }}
            </h2>
            <div class="w-px flex-1"></div>
            <!-- <searchbar class="mr-2"></searchbar> -->
            <date-options></date-options>
            <div class="pl-2">
                <ng-content></ng-content>
            </div>
        </div>
    `, imports: [DateOptionsComponent, TranslatePipe], styles: ["/* angular:styles/component:css;598beeb1039b1ab45f9544c34b6ccfd79f95c38cdc3862574ac547cac62c7acc;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/points/points-topbar.component.ts */\nmat-form-field {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=points-topbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointsTopbarComponent, { className: "PointsTopbarComponent", filePath: "apps/concierge/src/app/points/points-topbar.component.ts", lineNumber: 31 });
})();

// apps/concierge/src/app/points/points.component.ts
var _c04 = () => ["/points-management", "overview"];
var _c13 = () => ["/points-management", "assets"];
function PointsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function PointsComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newAsset());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.POINTS_ASSETS_ADD"), " ");
  }
}
var _PointsComponent = class _PointsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(PointsStateService);
    this._router = inject(Router);
    this.newAsset = () => this._state.newAsset();
  }
  ngOnInit() {
    this.subscription("route.params", this._router.events.subscribe(() => {
      const url_parts = this._router.url?.split("/") || [""];
      this.page = url_parts[url_parts.length - 1];
    }));
    const parts = this._router.url?.split("/") || [""];
    this.page = parts[parts.length - 1];
  }
};
_PointsComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275PointsComponent_BaseFactory;
  return function PointsComponent_Factory(__ngFactoryType__) {
    return (\u0275PointsComponent_BaseFactory || (\u0275PointsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_PointsComponent)))(__ngFactoryType__ || _PointsComponent);
  };
})();
_PointsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsComponent, selectors: [["placeos-new-points"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 18, vars: 14, consts: [["tabPanel", ""], [1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "relative", "z-10"], ["btn", "", "matRipple", "", 1, "w-40"], [1, "mb-4", "px-8"], [1, "bg-base-200", "overflow-hidden", "rounded-sm"], ["mat-tab-nav-bar", "", 3, "tabPanel"], ["mat-tab-link", "", 3, "routerLink", "active"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"]], template: function PointsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 2)(4, "points-topbar", 3);
    \u0275\u0275conditionalCreate(5, PointsComponent_Conditional_5_Template, 3, 3, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "nav", 7)(9, "a", 8);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 8);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "mat-tab-nav-panel", 9, 0);
    \u0275\u0275element(17, "router-outlet");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tabPanel_r3 = \u0275\u0275reference(16);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.page === "assets" ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("tabPanel", tabPanel_r3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c04))("active", ctx.page === "overview");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 8, "APP.CONCIERGE.POINTS_TAB_OVERVIEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c13))("active", ctx.page === "assets");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 10, "APP.CONCIERGE.POINTS_TAB_ASSETS"), " ");
  }
}, dependencies: [
  MatTabsModule,
  MatTabNav,
  MatTabNavPanel,
  MatTabLink,
  RouterModule,
  RouterOutlet,
  RouterLink,
  ApplicationTopbarComponent,
  ApplicationSidebarComponent,
  PointsTopbarComponent,
  MatRippleModule,
  MatRipple,
  TranslatePipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=points.component.css.map */"] });
var PointsComponent = _PointsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PointsComponent, [{
    type: Component,
    args: [{ selector: "placeos-new-points", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <points-topbar class="relative z-10">
                    @if (page === 'assets') {
                        <button btn matRipple class="w-40" (click)="newAsset()">
                            {{ 'APP.CONCIERGE.POINTS_ASSETS_ADD' | translate }}
                        </button>
                    }
                </points-topbar>
                <div class="mb-4 px-8">
                    <div class="bg-base-200 overflow-hidden rounded-sm">
                        <nav mat-tab-nav-bar [tabPanel]="tabPanel">
                            <a
                                mat-tab-link
                                [routerLink]="[
                                    '/points-management',
                                    'overview',
                                ]"
                                [active]="page === 'overview'"
                            >
                                {{
                                    'APP.CONCIERGE.POINTS_TAB_OVERVIEW'
                                        | translate
                                }}
                            </a>
                            <a
                                mat-tab-link
                                [routerLink]="['/points-management', 'assets']"
                                [active]="page === 'assets'"
                            >
                                {{
                                    'APP.CONCIERGE.POINTS_TAB_ASSETS'
                                        | translate
                                }}
                            </a>
                        </nav>
                    </div>
                </div>
                <mat-tab-nav-panel
                    class="h-1/2 w-full flex-1 overflow-auto px-8"
                    #tabPanel
                >
                    <router-outlet></router-outlet>
                </mat-tab-nav-panel>
            </main>
        </div>
    `, imports: [
      MatTabsModule,
      RouterModule,
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      PointsTopbarComponent,
      MatRippleModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/points/points.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=points.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointsComponent, { className: "PointsComponent", filePath: "apps/concierge/src/app/points/points.component.ts", lineNumber: 85 });
})();

// apps/concierge/src/app/points/points.module.ts
var ROUTES = [
  {
    path: "",
    component: PointsComponent,
    children: [
      { path: "assets", component: PointsAssetsComponent },
      { path: "overview", component: PointsOverviewComponent },
      { path: "**", redirectTo: "overview", pathMatch: "full" }
    ]
  }
];
var _PointsModule = class _PointsModule {
};
_PointsModule.\u0275fac = function PointsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointsModule)();
};
_PointsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PointsModule });
_PointsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  PointsComponent,
  PointsOverviewComponent,
  PointsAssetsComponent,
  RouterModule.forChild(ROUTES)
] });
var PointsModule = _PointsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PointsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        PointsComponent,
        PointsOverviewComponent,
        PointsAssetsComponent,
        RouterModule.forChild(ROUTES)
      ]
    }]
  }], null, null);
})();
export {
  PointsModule
};
//# sourceMappingURL=points.module-GA7TZQIS.js.map
