import {
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-IPULQWUT.js";
import {
  SpacesService
} from "./chunk-VBB6B6NQ.js";
import {
  DesksStateService
} from "./chunk-TGA6RLTP.js";
import "./chunk-ZSHC5KFM.js";
import "./chunk-LANI7PZE.js";
import {
  CounterComponent
} from "./chunk-Y7ZTJQB7.js";
import "./chunk-EAX5UPGP.js";
import {
  DateOptionsComponent
} from "./chunk-URJE5UK7.js";
import "./chunk-BNQHBCKG.js";
import "./chunk-YZY4ALUF.js";
import "./chunk-JD3FODSO.js";
import "./chunk-DT3G3NPI.js";
import "./chunk-X3F24FI3.js";
import "./chunk-COJA3HE3.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-AQPKYRDV.js";
import {
  SimpleTableComponent
} from "./chunk-NS4JI5JC.js";
import "./chunk-GLAT5DXP.js";
import "./chunk-ZP2Z4GUS.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  SettingsToggleComponent,
  TimeFieldComponent
} from "./chunk-QJGCCPGV.js";
import "./chunk-2S32PAKS.js";
import "./chunk-PQG67L3Z.js";
import {
  AsyncHandler,
  CommonModule,
  Component,
  CurrencyPipe,
  EventEmitter,
  FormField,
  FormsModule,
  IconComponent,
  Injectable,
  MAT_DIALOG_DATA,
  MatDialog,
  MatFormField,
  MatFormFieldModule,
  MatOption,
  MatPrefix,
  MatRipple,
  MatRippleModule,
  MatSuffix,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgModel,
  OrganisationService,
  Output,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  TranslatePipe,
  addHours,
  computed,
  disabled,
  effect,
  form,
  inject,
  nextValueFrom,
  randomInt,
  setClassMetadata,
  signal,
  toDate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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
} from "./chunk-J3JZOKCJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/date-fns/startOfHour.js
function startOfHour(date, options) {
  const _date = toDate(date, options?.in);
  _date.setMinutes(0, 0, 0);
  return _date;
}

// apps/concierge/src/app/points/asset-modal.component.ts
var _c0 = () => ({ standalone: true });
function PointsAssetModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function PointsAssetModalComponent_Conditional_5_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 14);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function PointsAssetModalComponent_Conditional_5_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    \u0275\u0275property("value", option_r2?.display_name || option_r2?.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r2?.display_name || option_r2?.name, " ");
  }
}
function PointsAssetModalComponent_Conditional_5_Conditional_27_Template(rf, ctx) {
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
function PointsAssetModalComponent_Conditional_5_For_48_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a-time-field", 38);
    \u0275\u0275twoWayListener("ngModelChange", function PointsAssetModalComponent_Conditional_5_For_48_Conditional_14_Template_a_time_field_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const rule_r4 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(rule_r4.second, $event) || (rule_r4.second = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const rule_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", rule_r4.second);
    \u0275\u0275property("from", rule_r4.first)("ngModelOptions", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275control();
  }
}
function PointsAssetModalComponent_Conditional_5_For_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 28)(2, "mat-form-field", 29)(3, "mat-select", 30);
    \u0275\u0275twoWayListener("ngModelChange", function PointsAssetModalComponent_Conditional_5_For_48_Template_mat_select_ngModelChange_3_listener($event) {
      const rule_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(rule_r4.type, $event) || (rule_r4.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "mat-option", 31);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-option", 32);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-option", 33);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a-time-field", 34);
    \u0275\u0275twoWayListener("ngModelChange", function PointsAssetModalComponent_Conditional_5_For_48_Template_a_time_field_ngModelChange_13_listener($event) {
      const rule_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(rule_r4.first, $event) || (rule_r4.first = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(14, PointsAssetModalComponent_Conditional_5_For_48_Conditional_14_Template, 1, 4, "a-time-field", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 36);
    \u0275\u0275text(16, "@");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a-counter", 37);
    \u0275\u0275twoWayListener("ngModelChange", function PointsAssetModalComponent_Conditional_5_For_48_Template_a_counter_ngModelChange_17_listener($event) {
      const rule_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(rule_r4.rate, $event) || (rule_r4.rate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rule_r4 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", rule_r4.type);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(20, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 14, "APP.CONCIERGE.POINTS_RATE_RULES_BEFORE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 16, "APP.CONCIERGE.POINTS_RATE_RULES_BETWEEN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 18, "APP.CONCIERGE.POINTS_RATE_RULES_AFTER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", rule_r4.first);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(21, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(rule_r4.type === "between" ? 14 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", rule_r4.rate);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(22, _c0))("min", 0)("max", 300)("step", 5)("render_fn", ctx_r5.renderPercent);
    \u0275\u0275control();
  }
}
function PointsAssetModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4)(1, "div", 7)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 8)(6, "mat-select", 9)(7, "mat-option", 10);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-option", 11);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 7)(14, "label");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 8)(18, "icon", 12);
    \u0275\u0275text(19, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 13);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(22, PointsAssetModalComponent_Conditional_5_Conditional_22_Template, 1, 1, "mat-spinner", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(25, PointsAssetModalComponent_Conditional_5_For_26_Template, 2, 2, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(27, PointsAssetModalComponent_Conditional_5_Conditional_27_Template, 3, 4, "mat-option", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 17);
    \u0275\u0275element(29, "settings-toggle", 18);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 19)(32, "div", 20)(33, "label");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "a-counter", 21);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 20)(38, "label");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "a-counter", 21);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 22)(43, "label");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div");
    \u0275\u0275repeaterCreate(47, PointsAssetModalComponent_Conditional_5_For_48_Template, 18, 23, "div", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 24);
    \u0275\u0275listener("click", function PointsAssetModalComponent_Conditional_5_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.newRule());
    });
    \u0275\u0275elementStart(50, "div", 25)(51, "icon", 26);
    \u0275\u0275text(52, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 27);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const auto_r7 = \u0275\u0275reference(24);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 28, "APP.CONCIERGE.POINTS_TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r5.form.type);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 30, "RESOURCE.ROOM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 32, "RESOURCE.DESK"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 34, "RESOURCE.ASSET"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("opacity-30", !ctx_r5.model().type);
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r5.form.name)("placeholder", \u0275\u0275pipeBind1(21, 36, "APP.CONCIERGE.POINTS_ASSETS_SEARCH"))("matAutocomplete", auto_r7);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r5.loading() ? 22 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r5.asset_options());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r5.asset_options().length ? 27 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(30, 38, "APP.CONCIERGE.POINTS_ACCEPT"))("formField", ctx_r5.form.accept_points);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 40, "APP.CONCIERGE.POINTS_STANDARD_RATE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r5.form.unit_price)("min", 500)("max", 8e4)("step", 500)("render_fn", ctx_r5.renderPrice);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 42, "APP.CONCIERGE.POINTS_DISCOUNT_CAP"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r5.form.discount_cap)("min", 0)("max", 100)("step", 5)("render_fn", ctx_r5.renderPercent);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 44, "APP.CONCIERGE.POINTS_RATE_RULES"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r5.model().custom_rates);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 46, "APP.CONCIERGE.POINTS_RATE_RULES_NEW"));
  }
}
var PointsAssetModalComponent = class _PointsAssetModalComponent extends AsyncHandler {
  constructor() {
    super();
    this._spaces = inject(SpacesService);
    this._desks = inject(DesksStateService);
    this._data = inject(MAT_DIALOG_DATA);
    this.event = new EventEmitter();
    this.model = signal(
      {
        id: this._data.asset?.id || "",
        asset_id: this._data.asset?.asset_id || "",
        name: this._data.asset?.name || "",
        type: this._data.asset?.type || "",
        accept_points: this._data.asset?.accept_points ?? false,
        discount_cap: this._data.asset?.discount_cap || 50,
        unit_price: this._data.asset?.unit_price || 1e3,
        custom_rates: this._data.asset?.custom_rates || []
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      disabled(p.name, ({ valueOf }) => !valueOf(p.type));
    });
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.asset_options = computed(
      () => {
        const { type, name } = this.model();
        const spaces = this._spaces.list();
        const desks = this._desks.desks();
        const search = (name || "").toLowerCase();
        return !type ? [] : type === "space" ? spaces.filter((_) => _.name.toLowerCase().includes(search)) : desks.filter((_) => _.name.toLowerCase().includes(search));
      },
      ...ngDevMode ? [{ debugName: "asset_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._desks.setFilters({ zones: ["All"] });
  }
  renderPrice(value = 0) {
    return `$${(value / 100)?.toFixed(2)}`;
  }
  renderPercent(value = 0) {
    return `${value}%`;
  }
  newRule() {
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      custom_rates: [
        ...m.custom_rates,
        {
          type: "before",
          first: startOfHour(/* @__PURE__ */ new Date()),
          second: addHours(startOfHour(/* @__PURE__ */ new Date()), 1),
          rate: 100
        }
      ]
    }));
  }
  save() {
    this.event.emit({ reason: "done", metadata: __spreadValues({}, this.model()) });
  }
  static {
    this.\u0275fac = function PointsAssetModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PointsAssetModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsAssetModalComponent, selectors: [["points-asset-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 9, consts: [["auto", "matAutocomplete"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "min-w-md", "overflow-hidden", "px-4", "py-2"], [1, "border-base-200", "flex", "items-center", "justify-end", "space-x-2", "border-t", "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"], [1, "flex", "flex-col"], ["appearance", "outline", 1, "h-13", "flex-1"], ["placeholder", "Select asset type", 3, "formField"], ["value", "space"], ["value", "desk"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", 3, "formField", "placeholder", "matAutocomplete"], ["matSuffix", "", 3, "diameter"], [3, "value"], [3, "disabled"], [1, "mb-4", "flex", "items-center"], [1, "w-full", 3, "label", "formField"], [1, "mb-4", "flex", "space-x-4"], [1, "flex", "flex-1", "flex-col"], [1, "w-full", 3, "formField", "min", "max", "step", "render_fn"], [1, ""], ["rule", "", 1, "flex", "items-center"], ["btn", "", "matRipple", "", 1, "clear", "w-full", 3, "click"], [1, "flex", "w-full", "items-center", "justify-center"], [1, "text-lg"], [1, "underline"], [1, "flex", "w-1/2", "flex-1", "items-center", "space-x-2"], ["appearance", "outline", 1, "h-13", "w-32", "flex-2"], [3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "before"], ["value", "between"], ["value", "after"], [1, "mt-2", "w-40", "flex-1", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "mt-2", "w-40", "flex-1", 3, "ngModel", "from", "ngModelOptions"], [1, "mx-2"], [1, "border-base-200", "rounded-sm", "border", 3, "ngModelChange", "ngModel", "ngModelOptions", "min", "max", "step", "render_fn"], [1, "mt-2", "w-40", "flex-1", 3, "ngModelChange", "ngModel", "from", "ngModelOptions"]], template: function PointsAssetModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, PointsAssetModalComponent_Conditional_4_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, PointsAssetModalComponent_Conditional_5_Template, 56, 48, "main", 4);
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
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, ctx.model().id ? "APP.CONCIERGE.POINTS_ASSETS_EDIT" : "APP.CONCIERGE.POINTS_ASSETS_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form ? 5 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.model().name);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 7, "COMMON.SAVE"), " ");
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      IconComponent,
      CounterComponent,
      TimeFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatSuffix,
      MatSelectModule,
      MatSelect,
      MatOption,
      FormsModule,
      NgControlStatus,
      NgModel,
      SettingsToggleComponent,
      MatAutocompleteModule,
      MatAutocomplete,
      MatAutocompleteTrigger,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      FormField,
      TranslatePipe
    ], styles: ["\nlabel[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 0;\n  margin: 0 1rem 0 0;\n}\n/*# sourceMappingURL=asset-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PointsAssetModalComponent, [{
    type: Component,
    args: [{ selector: "points-asset-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (model().id
                        ? 'APP.CONCIERGE.POINTS_ASSETS_EDIT'
                        : 'APP.CONCIERGE.POINTS_ASSETS_NEW'
                    ) | translate
                }}
            </h2>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (form) {
            <main class="min-w-md overflow-hidden px-4 py-2">
                <div class="flex flex-col">
                    <label>{{ 'APP.CONCIERGE.POINTS_TYPE' | translate }}</label>
                    <mat-form-field appearance="outline" class="h-13 flex-1">
                        <mat-select
                            [formField]="form.type"
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
                        <icon
                            matPrefix
                            class="text-2xl"
                            [class.opacity-30]="!model().type"
                            >search</icon
                        >
                        <input
                            matInput
                            [formField]="form.name"
                            [placeholder]="
                                'APP.CONCIERGE.POINTS_ASSETS_SEARCH' | translate
                            "
                            [matAutocomplete]="auto"
                        />
                        @if (loading()) {
                            <mat-spinner
                                matSuffix
                                [diameter]="32"
                            ></mat-spinner>
                        }
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete">
                        @for (option of asset_options(); track option) {
                            <mat-option
                                [value]="
                                    $any(option)?.display_name || option?.name
                                "
                            >
                                {{ $any(option)?.display_name || option?.name }}
                            </mat-option>
                        }
                        @if (!asset_options().length) {
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
                        [label]="'APP.CONCIERGE.POINTS_ACCEPT' | translate"
                        [formField]="form.accept_points"
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
                            [formField]="form.unit_price"
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
                            [formField]="form.discount_cap"
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
                        @for (rule of model().custom_rates; track rule) {
                            <div rule class="flex items-center">
                                <div
                                    class="flex w-1/2 flex-1 items-center space-x-2"
                                >
                                    <mat-form-field
                                        appearance="outline"
                                        class="h-13 w-32 flex-2"
                                    >
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
                [disabled]="!model().name"
                (click)="save()"
            >
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
    `, imports: [
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
      FormField
    ], styles: ["/* angular:styles/component:css;eeb114e7766a95e93c6c6baee8932f63df21a648b3e512ffa9a6462164777c8a;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/points/asset-modal.component.ts */\nlabel {\n  width: auto;\n  min-width: 0;\n  margin: 0 1rem 0 0;\n}\n/*# sourceMappingURL=asset-modal.component.css.map */\n"] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointsAssetModalComponent, { className: "PointsAssetModalComponent", filePath: "apps/concierge/src/app/points/asset-modal.component.ts", lineNumber: 270 });
})();

// apps/concierge/src/app/points/points-state.service.ts
var PointsStateService = class _PointsStateService {
  constructor() {
    this._dialog = inject(MatDialog);
    this._assets = signal(
      JSON.parse(localStorage.getItem("PLACEOS.point_assets") || "[]"),
      ...ngDevMode ? [{ debugName: "_assets" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.assets = this._assets.asReadonly();
    effect(() => {
      const list = this._assets();
      localStorage.setItem("PLACEOS.point_assets", JSON.stringify(list));
    });
  }
  async newAsset(asset) {
    const ref = this._dialog.open(PointsAssetModalComponent, {
      data: { asset }
    });
    const details = await Promise.race([
      new Promise((resolve) => {
        const sub = ref.componentInstance.event.subscribe((event) => {
          if (event?.reason !== "done")
            return;
          sub.unsubscribe();
          resolve(event);
        });
      }),
      nextValueFrom(ref.afterClosed())
    ]);
    if (details.reason !== "done")
      return ref.close();
    this._assets.set([
      ...this._assets().filter((_) => _.id !== asset?.id),
      __spreadProps(__spreadValues({}, details.metadata), {
        id: details.metadata.id || `PA-${randomInt(999999999)}`
      })
    ]);
    ref.close();
  }
  removeAsset(asset_id) {
    this._assets.set(this._assets().filter((_) => _.id !== asset_id));
  }
  static {
    this.\u0275fac = function PointsStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PointsStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PointsStateService, factory: _PointsStateService.\u0275fac, providedIn: "root" });
  }
};
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
var _c1 = (a0, a1) => ({ key: "type", name: a0, content: a1 });
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
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
var PointsAssetsComponent = class _PointsAssetsComponent {
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
  static {
    this.\u0275fac = function PointsAssetsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PointsAssetsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsAssetsComponent, selectors: [["points-assets"]], decls: 17, vars: 39, consts: [["type_template", ""], ["price_template", ""], ["bool_template", ""], ["discount_template", ""], ["action_template", ""], [1, "block", "w-full", "min-w-lg", 3, "data", "columns", "sortable", "empty_message"], [1, "p-2"], [1, "bg-base-200", "rounded-sm", "px-2", "py-1", "text-sm", "capitalize"], [1, "p-4", "font-mono", "text-xs"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", "text-white"], [1, "p-4", "text-right"], [1, "mx-auto", "flex", "items-center", "justify-end", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "click"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click"]], template: function PointsAssetsComponent_Template(rf, ctx) {
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
        \u0275\u0275property("data", ctx.asset_list())("columns", \u0275\u0275pureFunction6(32, _c6, \u0275\u0275pureFunction1(16, _c02, \u0275\u0275pipeBind1(1, 4, "FORM.NAME")), \u0275\u0275pureFunction2(18, _c1, \u0275\u0275pipeBind1(2, 6, "COMMON.TYPE"), type_template_r8), \u0275\u0275pureFunction2(21, _c2, \u0275\u0275pipeBind1(3, 8, "APP.CONCIERGE.POINTS_PRICE"), price_template_r9), \u0275\u0275pureFunction2(24, _c3, \u0275\u0275pipeBind1(4, 10, "APP.CONCIERGE.POINTS_LABEL"), bool_template_r10), \u0275\u0275pureFunction2(27, _c4, \u0275\u0275pipeBind1(5, 12, "APP.CONCIERGE.POINTS_DISCOUNT"), discount_template_r11), \u0275\u0275pureFunction1(30, _c5, action_template_r12)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(6, 14, "APP.CONCIERGE.POINTS_ASSETS_EMPTY"));
      }
    }, dependencies: [
      CommonModule,
      SimpleTableComponent,
      MatRippleModule,
      MatRipple,
      IconComponent,
      CurrencyPipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=points-assets.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PointsAssetsComponent, [{
    type: Component,
    args: [{ selector: "points-assets", template: `
        <simple-table
            class="block w-full min-w-lg"
            [data]="asset_list()"
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
                <button icon default matRipple (click)="edit(row)">
                    <icon>edit</icon>
                </button>
                <button icon default error matRipple (click)="remove(row)">
                    <icon>delete</icon>
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
var PointsOverviewComponent = class _PointsOverviewComponent {
  constructor() {
    this.points = signal(
      {
        value: 0.1,
        desk_checkin: 2,
        room_checkin: 2,
        booking_cancel: 3,
        wellness_card: 1
      },
      ...ngDevMode ? [{ debugName: "points" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loadPoints();
  }
  renderPrice(value = 0) {
    return `$${value?.toFixed(2)}`;
  }
  loadPoints() {
    this.points.set(__spreadValues(__spreadValues({}, this.points()), JSON.parse(localStorage.getItem("PLACEOS.point_details") || "{}")));
  }
  updatePoints(key, value) {
    this.points.update((points) => __spreadProps(__spreadValues({}, points), {
      [key]: value
    }));
    this.storePoints();
  }
  storePoints() {
    localStorage.setItem("PLACEOS.point_details", JSON.stringify(this.points()));
  }
  static {
    this.\u0275fac = function PointsOverviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PointsOverviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsOverviewComponent, selectors: [["points-overview"]], decls: 40, vars: 34, consts: [[1, "border-base-300", "mb-4", "w-full", "rounded-sm", "border", "px-4", "py-3", "text-lg", "font-medium"], [1, "bg-base-100", "w-full"], [1, "p-2", "text-lg", "font-medium", "underline"], [1, "mb-4", "flex", "items-center", "space-x-2", "p-4"], [1, "font-mono"], [1, "w-48", 3, "ngModelChange", "step", "ngModel", "render_fn"], [1, "text-2xl", 3, "matTooltip"], [1, "bg-base-100", "w-full", "flex-1"], [1, "p-4"], [1, "border-base-200", "flex", "items-center", "space-x-4", "border-b", "p-2"], [3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "space-x-4", "p-2"]], template: function PointsOverviewComponent_Template(rf, ctx) {
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
        \u0275\u0275listener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_11_listener($event) {
          return ctx.updatePoints("value", $event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(12, "icon", 6);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275text(14, " info ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "section", 7)(16, "h2", 2);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 8)(20, "div", 9)(21, "a-counter", 10);
        \u0275\u0275listener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_21_listener($event) {
          return ctx.updatePoints("desk_checkin", $event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(22, "span");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 9)(26, "a-counter", 10);
        \u0275\u0275listener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_26_listener($event) {
          return ctx.updatePoints("room_checkin", $event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(27, "span");
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 9)(31, "a-counter", 10);
        \u0275\u0275listener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_31_listener($event) {
          return ctx.updatePoints("booking_cancel", $event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(32, "span");
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 11)(36, "a-counter", 10);
        \u0275\u0275listener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_36_listener($event) {
          return ctx.updatePoints("wellness_card", $event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
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
        \u0275\u0275property("step", 0.1)("ngModel", ctx.points().value)("render_fn", ctx.renderPrice);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(13, 22, "APP.CONCIERGE.POINTS_VALUE_INFO"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 24, "APP.CONCIERGE.POINTS_AUTO_REWARDS"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.points().desk_checkin);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 26, "APP.CONCIERGE.POINTS_REWARD_DESK"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.points().room_checkin);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 28, "APP.CONCIERGE.POINTS_REWARD_ROOM"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.points().booking_cancel);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 30, "APP.CONCIERGE.POINTS_REWARD_CANCEL"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.points().wellness_card);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 32, "APP.CONCIERGE.POINTS_REWARD_WELLNESS"));
      }
    }, dependencies: [
      CounterComponent,
      FormsModule,
      NgControlStatus,
      NgModel,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=points-overview.component.css.map */"] });
  }
};
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
                    [ngModel]="points().value"
                    (ngModelChange)="updatePoints('value', $event)"
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
                        [ngModel]="points().desk_checkin"
                        (ngModelChange)="updatePoints('desk_checkin', $event)"
                    ></a-counter>
                    <span>{{
                        'APP.CONCIERGE.POINTS_REWARD_DESK' | translate
                    }}</span>
                </div>
                <div
                    class="border-base-200 flex items-center space-x-4 border-b p-2"
                >
                    <a-counter
                        [ngModel]="points().room_checkin"
                        (ngModelChange)="updatePoints('room_checkin', $event)"
                    ></a-counter>
                    <span>{{
                        'APP.CONCIERGE.POINTS_REWARD_ROOM' | translate
                    }}</span>
                </div>
                <div
                    class="border-base-200 flex items-center space-x-4 border-b p-2"
                >
                    <a-counter
                        [ngModel]="points().booking_cancel"
                        (ngModelChange)="updatePoints('booking_cancel', $event)"
                    ></a-counter>
                    <span>{{
                        'APP.CONCIERGE.POINTS_REWARD_CANCEL' | translate
                    }}</span>
                </div>
                <div class="flex items-center space-x-4 p-2">
                    <a-counter
                        [ngModel]="points().wellness_card"
                        (ngModelChange)="updatePoints('wellness_card', $event)"
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
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointsOverviewComponent, { className: "PointsOverviewComponent", filePath: "apps/concierge/src/app/points/points-overview.component.ts", lineNumber: 104 });
})();

// apps/concierge/src/app/points/points-topbar.component.ts
var _c03 = ["*"];
var PointsTopbarComponent = class _PointsTopbarComponent extends AsyncHandler {
  constructor() {
    super();
    this._router = inject(Router);
    this._url = signal(
      null,
      ...ngDevMode ? [{ debugName: "_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.path = computed(
      () => {
        this._url();
        const parts = this._router.url.split("/");
        return parts[parts.length - 1].split("?")[0];
      },
      ...ngDevMode ? [{ debugName: "path" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.subscription("router", this._router.events.subscribe((event) => this._url.set(event)));
  }
  static {
    this.\u0275fac = function PointsTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PointsTopbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsTopbarComponent, selectors: [["points-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c03, decls: 8, vars: 3, consts: [[1, "bg-base-100", "flex", "h-20", "items-center", "space-x-2", "px-8", "py-4"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], [1, "pl-2"]], template: function PointsTopbarComponent_Template(rf, ctx) {
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
    }, dependencies: [DateOptionsComponent, TranslatePipe], styles: ["\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=points-topbar.component.css.map */"] });
  }
};
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
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointsTopbarComponent, { className: "PointsTopbarComponent", filePath: "apps/concierge/src/app/points/points-topbar.component.ts", lineNumber: 32 });
})();

// apps/concierge/src/app/points/points.component.ts
var _c04 = () => ["/points-management", "overview"];
var _c12 = () => ["/points-management", "assets"];
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
var PointsComponent = class _PointsComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(PointsStateService);
    this._router = inject(Router);
    this._url = signal(
      null,
      ...ngDevMode ? [{ debugName: "_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.page = computed(
      () => {
        this._url();
        const url_parts = this._router.url?.split("/") || [""];
        return url_parts[url_parts.length - 1];
      },
      ...ngDevMode ? [{ debugName: "page" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.newAsset = () => this._state.newAsset();
    this.subscription("router", this._router.events.subscribe((event) => this._url.set(event)));
  }
  static {
    this.\u0275fac = function PointsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PointsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsComponent, selectors: [["placeos-new-points"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 18, vars: 14, consts: [["tabPanel", ""], [1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "relative", "z-10"], ["btn", "", "matRipple", "", 1, "w-40"], [1, "mb-4", "px-8"], [1, "bg-base-200", "overflow-hidden", "rounded-sm"], ["mat-tab-nav-bar", "", 3, "tabPanel"], ["mat-tab-link", "", 3, "routerLink", "active"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"]], template: function PointsComponent_Template(rf, ctx) {
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
        \u0275\u0275conditional(ctx.page() === "assets" ? 5 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("tabPanel", tabPanel_r3);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c04))("active", ctx.page() === "overview");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 8, "APP.CONCIERGE.POINTS_TAB_OVERVIEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c12))("active", ctx.page() === "assets");
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
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=points.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PointsComponent, [{
    type: Component,
    args: [{ selector: "placeos-new-points", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <points-topbar class="relative z-10">
                    @if (page() === 'assets') {
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
                                [active]="page() === 'overview'"
                            >
                                {{
                                    'APP.CONCIERGE.POINTS_TAB_OVERVIEW'
                                        | translate
                                }}
                            </a>
                            <a
                                mat-tab-link
                                [routerLink]="['/points-management', 'assets']"
                                [active]="page() === 'assets'"
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
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointsComponent, { className: "PointsComponent", filePath: "apps/concierge/src/app/points/points.component.ts", lineNumber: 85 });
})();

// apps/concierge/src/app/points/points.routes.ts
var ROUTES = [
  {
    path: "",
    component: PointsComponent,
    children: [
      {
        path: "assets",
        component: PointsAssetsComponent,
        title: "Point Assets"
      },
      {
        path: "overview",
        component: PointsOverviewComponent,
        title: "Points Overview"
      },
      { path: "**", redirectTo: "overview", pathMatch: "full" }
    ]
  }
];
export {
  ROUTES
};
//# sourceMappingURL=points.routes-LIKNCGQ6.js.map
