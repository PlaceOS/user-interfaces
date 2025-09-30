import {
  DesksStateService
} from "./chunk-AXK7YQO5.js";
import {
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-7TLT2YB6.js";
import "./chunk-U26KGSP3.js";
import "./chunk-LW6KYDNR.js";
import "./chunk-IPLJBDCQ.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  CounterComponent,
  CurrencyPipe,
  DateOptionsComponent,
  DefaultValueAccessor,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  MAT_DIALOG_DATA,
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatCheckbox,
  MatChipsModule,
  MatDialog,
  MatDialogClose,
  MatFormField,
  MatInput,
  MatOption,
  MatPrefix,
  MatProgressSpinner,
  MatRipple,
  MatSelect,
  MatSuffix,
  MatTooltip,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SidebarComponent,
  SimpleTableComponent,
  SpacesService,
  TimeFieldComponent,
  UIModule,
  __async,
  __spreadProps,
  __spreadValues,
  addHours,
  combineLatest,
  first,
  map,
  randomInt,
  shareReplay,
  tap,
  toDate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
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
  ɵɵpureFunction6,
  ɵɵreference,
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
} from "./chunk-TTHABZPK.js";

// node_modules/date-fns/startOfHour.mjs
function startOfHour(date) {
  const _date = toDate(date);
  _date.setMinutes(0, 0, 0);
  return _date;
}

// apps/concierge/src/app/points/asset-modal.component.ts
var _c0 = () => [];
var _c1 = () => ({ standalone: true });
function PointsAssetModalComponent_main_3_mat_spinner_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 29);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function PointsAssetModalComponent_main_3_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 30);
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
function PointsAssetModalComponent_main_3_mat_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 31);
    \u0275\u0275text(1, " No matching options ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
  }
}
function PointsAssetModalComponent_main_3_div_34_a_time_field_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a-time-field", 43);
    \u0275\u0275twoWayListener("ngModelChange", function PointsAssetModalComponent_main_3_div_34_a_time_field_11_Template_a_time_field_ngModelChange_0_listener($event) {
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
function PointsAssetModalComponent_main_3_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "mat-form-field", 34)(3, "mat-select", 35);
    \u0275\u0275twoWayListener("ngModelChange", function PointsAssetModalComponent_main_3_div_34_Template_mat_select_ngModelChange_3_listener($event) {
      const rule_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(rule_r4.type, $event) || (rule_r4.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "mat-option", 36);
    \u0275\u0275text(5, " Before ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-option", 37);
    \u0275\u0275text(7, " Between ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 38);
    \u0275\u0275text(9, " After ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "a-time-field", 39);
    \u0275\u0275twoWayListener("ngModelChange", function PointsAssetModalComponent_main_3_div_34_Template_a_time_field_ngModelChange_10_listener($event) {
      const rule_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(rule_r4.first, $event) || (rule_r4.first = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, PointsAssetModalComponent_main_3_div_34_a_time_field_11_Template, 1, 4, "a-time-field", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 41);
    \u0275\u0275text(13, "@");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a-counter", 42);
    \u0275\u0275twoWayListener("ngModelChange", function PointsAssetModalComponent_main_3_div_34_Template_a_counter_ngModelChange_14_listener($event) {
      const rule_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(rule_r4.rate, $event) || (rule_r4.rate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rule_r4 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", rule_r4.type);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(11, _c1));
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", rule_r4.first);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(12, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", rule_r4.type === "between");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", rule_r4.rate);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(13, _c1))("min", 0)("max", 300)("step", 5)("render_fn", ctx_r5.renderPercent);
  }
}
function PointsAssetModalComponent_main_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 6)(1, "section", 7)(2, "div", 8)(3, "label", 9);
    \u0275\u0275text(4, "Asset Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 10)(6, "mat-select", 11)(7, "mat-option", 12);
    \u0275\u0275text(8, "Space");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-option", 13);
    \u0275\u0275text(10, "Desk");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 8)(12, "label", 9);
    \u0275\u0275text(13, "Asset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 10)(15, "app-icon", 14);
    \u0275\u0275text(16, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 15);
    \u0275\u0275template(18, PointsAssetModalComponent_main_3_mat_spinner_18_Template, 1, 1, "mat-spinner", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-autocomplete", null, 0);
    \u0275\u0275template(21, PointsAssetModalComponent_main_3_mat_option_21_Template, 2, 2, "mat-option", 17);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275template(23, PointsAssetModalComponent_main_3_mat_option_23_Template, 2, 1, "mat-option", 18);
    \u0275\u0275pipe(24, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "section", 19)(26, "div", 8)(27, "label", 20);
    \u0275\u0275text(28, "Standard hourly rate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "a-counter", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 22)(31, "h2");
    \u0275\u0275text(32, "Rate Rules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div");
    \u0275\u0275template(34, PointsAssetModalComponent_main_3_div_34_Template, 15, 14, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 24);
    \u0275\u0275listener("click", function PointsAssetModalComponent_main_3_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.newRule());
    });
    \u0275\u0275elementStart(36, "div", 25)(37, "app-icon", 1);
    \u0275\u0275text(38, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 26);
    \u0275\u0275text(40, "Add new rule");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(41, "section", 19)(42, "div", 8)(43, "label");
    \u0275\u0275text(44, "Accept Points?");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "mat-checkbox", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 8)(47, "label", 20);
    \u0275\u0275text(48, "Discount Cap");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "a-counter", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_12_0;
    const auto_r7 = \u0275\u0275reference(20);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r5.form);
    \u0275\u0275advance(15);
    \u0275\u0275classProp("opacity-30", !ctx_r5.form.get("type").value);
    \u0275\u0275advance(2);
    \u0275\u0275property("matAutocomplete", auto_r7);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r5.loading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(22, 16, ctx_r5.asset_options));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_7_0 = \u0275\u0275pipeBind1(24, 18, ctx_r5.asset_options)) == null ? null : tmp_7_0.length));
    \u0275\u0275advance(6);
    \u0275\u0275property("min", 500)("max", 8e4)("step", 500)("render_fn", ctx_r5.renderPrice);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ((tmp_12_0 = ctx_r5.form.get("custom_rates")) == null ? null : tmp_12_0.value) || \u0275\u0275pureFunction0(20, _c0));
    \u0275\u0275advance(15);
    \u0275\u0275property("min", 0)("max", 100)("step", 5)("render_fn", ctx_r5.renderPercent);
  }
}
var _PointsAssetModalComponent = class _PointsAssetModalComponent extends AsyncHandler {
  constructor(_spaces, _desks, _data) {
    super();
    this._spaces = _spaces;
    this._desks = _desks;
    this._data = _data;
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
      this._desks.desks
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
  return new (__ngFactoryType__ || _PointsAssetModalComponent)(\u0275\u0275directiveInject(SpacesService), \u0275\u0275directiveInject(DesksStateService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
};
_PointsAssetModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsAssetModalComponent, selectors: [["points-asset-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 3, consts: [["auto", "matAutocomplete"], [1, "text-lg"], ["class", "min-w-[24rem] overflow-hidden", 3, "formGroup", 4, "ngIf"], [1, "flex", "items-center", "justify-end", "p-2", "space-x-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "w-32"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"], [1, "min-w-[24rem]", "overflow-hidden", 3, "formGroup"], [1, "p-2"], [1, "flex", "items-center"], [1, "w-24"], ["appearance", "outline", 1, "flex-1", "h-[3.25rem]"], ["formControlName", "type", "placeholder", "Select asset type"], ["value", "space"], ["value", "desk"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "formControlName", "name", "placeholder", "Search for asset...", 3, "matAutocomplete"], ["matSuffix", "", 3, "diameter", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [3, "disabled", 4, "ngIf"], [1, "border-t", "border-base-200", "p-2"], [1, "flex-1"], ["formControlName", "unit_price", 1, "border", "border-base-200", "rounded", 3, "min", "max", "step", "render_fn"], [1, ""], ["rule", "", "class", "flex items-center", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", 1, "clear", "w-full", 3, "click"], [1, "flex", "items-center", "justify-center", "w-full"], [1, "underline"], ["formControlName", "accept_points"], ["formControlName", "discount_cap", 1, "border", "border-base-200", "rounded", 3, "min", "max", "step", "render_fn"], ["matSuffix", "", 3, "diameter"], [3, "value"], [3, "disabled"], ["rule", "", 1, "flex", "items-center"], [1, "flex", "items-center", "flex-1", "w-1/2", "space-x-2"], ["appearance", "outline", 1, "flex-2", "h-[3.25rem]", "w-32"], [3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "before"], ["value", "between"], ["value", "after"], [1, "flex-1", "mt-2", "w-40", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "flex-1 mt-2 w-40", 3, "ngModel", "from", "ngModelOptions", "ngModelChange", 4, "ngIf"], [1, "mx-2"], [1, "border", "border-base-200", "rounded", 3, "ngModelChange", "ngModel", "ngModelOptions", "min", "max", "step", "render_fn"], [1, "flex-1", "mt-2", "w-40", 3, "ngModelChange", "ngModel", "from", "ngModelOptions"]], template: function PointsAssetModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, PointsAssetModalComponent_main_3_Template, 50, 21, "main", 2);
    \u0275\u0275elementStart(4, "footer", 3)(5, "button", 4);
    \u0275\u0275text(6, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 5);
    \u0275\u0275listener("click", function PointsAssetModalComponent_Template_button_click_7_listener() {
      return ctx.save();
    });
    \u0275\u0275text(8, " Save ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx.form == null ? null : ctx.form.value == null ? null : ctx.form.value.id) ? "Edit" : "New", " Points Asset ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.form);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx.form.value.name);
  }
}, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, MatFormField, MatPrefix, MatSuffix, MatInput, MatSelect, MatOption, MatCheckbox, MatProgressSpinner, MatDialogClose, MatAutocomplete, MatAutocompleteTrigger, MatRipple, CounterComponent, TimeFieldComponent, IconComponent, AsyncPipe], styles: ["\n\nlabel[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 0;\n  margin: 0 1rem 0 0;\n}\n/*# sourceMappingURL=asset-modal.component.css.map */"] });
var PointsAssetModalComponent = _PointsAssetModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointsAssetModalComponent, { className: "PointsAssetModalComponent", filePath: "apps/concierge/src/app/points/asset-modal.component.ts", lineNumber: 210 });
})();

// apps/concierge/src/app/points/points-state.service.ts
var _PointsStateService = class _PointsStateService {
  constructor(_dialog) {
    this._dialog = _dialog;
    this._assets = new BehaviorSubject([]);
    this.assets = this._assets.asObservable();
    this._assets.next(JSON.parse(localStorage.getItem("PLACEOS.point_assets") || "[]"));
    this.assets.subscribe((list) => {
      localStorage.setItem("PLACEOS.point_assets", JSON.stringify(list));
    });
  }
  newAsset(asset) {
    return __async(this, null, function* () {
      const ref = this._dialog.open(PointsAssetModalComponent, {
        data: { asset }
      });
      const details = yield Promise.race([
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
    });
  }
  removeAsset(asset_id) {
    this._assets.next(this._assets.getValue().filter((_) => _.id !== asset_id));
  }
};
_PointsStateService.\u0275fac = function PointsStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointsStateService)(\u0275\u0275inject(MatDialog));
};
_PointsStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PointsStateService, factory: _PointsStateService.\u0275fac, providedIn: "root" });
var PointsStateService = _PointsStateService;

// apps/concierge/src/app/points/points-assets.component.ts
var _c02 = () => ({ key: "name", name: "Name" });
var _c12 = (a0) => ({ key: "type", name: "Type", content: a0 });
var _c2 = (a0) => ({ key: "unit_price", name: "Unit Price", content: a0 });
var _c3 = (a0) => ({ key: "accept_points", name: "Points", content: a0, size: "5.5rem" });
var _c4 = (a0) => ({ key: "discount_cap", name: "Discount %", content: a0, size: "9rem" });
var _c5 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6.5rem" });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function PointsAssetsComponent_ng_template_1_Template(rf, ctx) {
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
function PointsAssetsComponent_ng_template_3_Template(rf, ctx) {
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
function PointsAssetsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "app-icon");
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
function PointsAssetsComponent_ng_template_7_Template(rf, ctx) {
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
function PointsAssetsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 12);
    \u0275\u0275listener("click", function PointsAssetsComponent_ng_template_9_Template_button_click_1_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(row_r7));
    });
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("click", function PointsAssetsComponent_ng_template_9_Template_button_click_4_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.remove(row_r7));
    });
    \u0275\u0275elementStart(5, "app-icon", 13);
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
var _PointsAssetsComponent = class _PointsAssetsComponent {
  get code() {
    return this._org.currency_code;
  }
  constructor(_state, _org) {
    this._state = _state;
    this._org = _org;
    this.asset_list = this._state.assets;
    this.edit = (d) => this._state.newAsset(d);
    this.remove = (d) => this._state.removeAsset(d?.id);
  }
};
_PointsAssetsComponent.\u0275fac = function PointsAssetsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointsAssetsComponent)(\u0275\u0275directiveInject(PointsStateService), \u0275\u0275directiveInject(OrganisationService));
};
_PointsAssetsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsAssetsComponent, selectors: [["points-assets"]], decls: 11, vars: 21, consts: [["type_template", ""], ["price_template", ""], ["bool_template", ""], ["discount_template", ""], ["action_template", ""], ["empty_message", "No priced assets", 1, "block", "min-w-[32rem]", "w-full", 3, "data", "columns", "sortable"], [1, "p-2"], [1, "bg-base-200", "rounded", "capitalize", "px-2", "py-1", "text-sm"], [1, "text-xs", "p-4", "font-mono"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "text-white", "mx-auto"], [1, "text-right", "p-4"], [1, "flex", "items-center", "justify-end", "p-2", "mx-auto"], ["icon", "", "matRipple", "", 3, "click"], [1, "text-error"]], template: function PointsAssetsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "simple-table", 5);
    \u0275\u0275template(1, PointsAssetsComponent_ng_template_1_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, PointsAssetsComponent_ng_template_3_Template, 3, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, PointsAssetsComponent_ng_template_5_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(7, PointsAssetsComponent_ng_template_7_Template, 2, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(9, PointsAssetsComponent_ng_template_9_Template, 7, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const type_template_r8 = \u0275\u0275reference(2);
    const price_template_r9 = \u0275\u0275reference(4);
    const bool_template_r10 = \u0275\u0275reference(6);
    const discount_template_r11 = \u0275\u0275reference(8);
    const action_template_r12 = \u0275\u0275reference(10);
    \u0275\u0275property("data", ctx.asset_list)("columns", \u0275\u0275pureFunction6(14, _c6, \u0275\u0275pureFunction0(3, _c02), \u0275\u0275pureFunction1(4, _c12, type_template_r8), \u0275\u0275pureFunction1(6, _c2, price_template_r9), \u0275\u0275pureFunction1(8, _c3, bool_template_r10), \u0275\u0275pureFunction1(10, _c4, discount_template_r11), \u0275\u0275pureFunction1(12, _c5, action_template_r12)))("sortable", true);
  }
}, dependencies: [MatRipple, IconComponent, SimpleTableComponent, CurrencyPipe], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=points-assets.component.css.map */"] });
var PointsAssetsComponent = _PointsAssetsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointsAssetsComponent, { className: "PointsAssetsComponent", filePath: "apps/concierge/src/app/points/points-assets.component.ts", lineNumber: 103 });
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
_PointsOverviewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsOverviewComponent, selectors: [["points-overview"]], decls: 31, vars: 7, consts: [[1, "px-4", "py-3", "bg-secondary", "text-white", "w-full", "rounded", "font-medium", "text-lg", "shadow"], [1, "bg-base-100", "w-full"], [1, "p-2", "underline", "font-medium", "text-lg"], [1, "flex", "items-center", "space-x-2", "p-4", "mb-4"], [3, "ngModelChange", "step", "ngModel", "render_fn"], ["matTooltip", "Set point redemption caps on menu items"], [1, "bg-base-100", "w-full", "flex-1"], [1, "p-4"], [1, "flex", "items-center", "space-x-2", "p-2", "border-b", "border-base-200"], [3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "space-x-2", "p-2"]], template: function PointsOverviewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 0);
    \u0275\u0275text(1, " Point Overview ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "section", 1)(3, "h2", 2);
    \u0275\u0275text(4, "Point Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 3)(6, "span");
    \u0275\u0275text(7, "1 point =");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a-counter", 4);
    \u0275\u0275twoWayListener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_8_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.points.value, $event) || (ctx.points.value = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_8_listener() {
      return ctx.storePoints();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "app-icon", 5);
    \u0275\u0275text(10, " info ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "section", 6)(12, "h2", 2);
    \u0275\u0275text(13, "Automatic Rewards");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 7)(15, "div", 8)(16, "a-counter", 9);
    \u0275\u0275twoWayListener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_16_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.points.desk_checkin, $event) || (ctx.points.desk_checkin = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_16_listener() {
      return ctx.storePoints();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "Points for desk check-in");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 8)(20, "a-counter", 9);
    \u0275\u0275twoWayListener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_20_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.points.room_checkin, $event) || (ctx.points.room_checkin = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_20_listener() {
      return ctx.storePoints();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "Points for room check-in");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 8)(24, "a-counter", 9);
    \u0275\u0275twoWayListener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_24_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.points.booking_cancel, $event) || (ctx.points.booking_cancel = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_24_listener() {
      return ctx.storePoints();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "Points for booking cancellation with 24 hour notice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 10)(28, "a-counter", 9);
    \u0275\u0275twoWayListener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_28_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.points.wellness_card, $event) || (ctx.points.wellness_card = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_28_listener() {
      return ctx.storePoints();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30, "Points for completing wellness card");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("step", 0.1);
    \u0275\u0275twoWayProperty("ngModel", ctx.points.value);
    \u0275\u0275property("render_fn", ctx.renderPrice);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx.points.desk_checkin);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.points.room_checkin);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.points.booking_cancel);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.points.wellness_card);
  }
}, dependencies: [NgControlStatus, NgModel, MatTooltip, CounterComponent, IconComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=points-overview.component.css.map */"] });
var PointsOverviewComponent = _PointsOverviewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointsOverviewComponent, { className: "PointsOverviewComponent", filePath: "apps/concierge/src/app/points/points-overview.component.ts", lineNumber: 78 });
})();

// apps/concierge/src/app/points/points-topbar.component.ts
var _c03 = ["*"];
var _PointsTopbarComponent = class _PointsTopbarComponent extends AsyncHandler {
  constructor(_org) {
    super();
    this._org = _org;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
    });
  }
};
_PointsTopbarComponent.\u0275fac = function PointsTopbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointsTopbarComponent)(\u0275\u0275directiveInject(OrganisationService));
};
_PointsTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsTopbarComponent, selectors: [["points-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c03, decls: 7, vars: 0, consts: [[1, "flex", "items-center", "bg-base-100", "h-20", "px-8", "py-4", "space-x-2"], [1, "text-2xl", "font-medium"], [1, "flex-1", "w-px"], [1, "pl-2"]], template: function PointsTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
    \u0275\u0275text(2, "Points Management");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 2)(4, "date-options");
    \u0275\u0275elementStart(5, "div", 3);
    \u0275\u0275projection(6);
    \u0275\u0275elementEnd()();
  }
}, dependencies: [DateOptionsComponent], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=points-topbar.component.css.map */"] });
var PointsTopbarComponent = _PointsTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointsTopbarComponent, { className: "PointsTopbarComponent", filePath: "apps/concierge/src/app/points/points-topbar.component.ts", lineNumber: 28 });
})();

// apps/concierge/src/app/points/points.component.ts
var _c04 = () => ["/points", "overview"];
var _c13 = () => ["/points", "assets"];
function PointsComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function PointsComponent_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newAsset());
    });
    \u0275\u0275text(1, " New Asset ");
    \u0275\u0275elementEnd();
  }
}
var _PointsComponent = class _PointsComponent extends AsyncHandler {
  constructor(_state, _router) {
    super();
    this._state = _state;
    this._router = _router;
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
_PointsComponent.\u0275fac = function PointsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointsComponent)(\u0275\u0275directiveInject(PointsStateService), \u0275\u0275directiveInject(Router));
};
_PointsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsComponent, selectors: [["placeos-points"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 7, consts: [[1, "relative", "w-full", "flex", "flex-col", "bg-base-200"], [1, "relative", "z-10"], ["btn", "", "matRipple", "", 3, "click", 4, "ngIf"], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", 3, "routerLink", "active"], [1, "flex-1", "w-full", "h-1/2", "overflow-auto"], ["btn", "", "matRipple", "", 3, "click"]], template: function PointsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "sidebar");
    \u0275\u0275elementStart(1, "main", 0)(2, "points-topbar", 1);
    \u0275\u0275template(3, PointsComponent_button_3_Template, 2, 0, "button", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "nav", 3)(5, "a", 4);
    \u0275\u0275text(6, " Overview ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 4);
    \u0275\u0275text(8, " Assets ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 5);
    \u0275\u0275element(10, "router-outlet");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.page === "assets");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c04))("active", ctx.page === "overview");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c13))("active", ctx.page === "assets");
  }
}, dependencies: [NgIf, SidebarComponent, MatRipple, MatTabNav, MatTabLink, RouterOutlet, RouterLink, PointsTopbarComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=points.component.css.map */"] });
var PointsComponent = _PointsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointsComponent, { className: "PointsComponent", filePath: "apps/concierge/src/app/points/points.component.ts", lineNumber: 52 });
})();

// apps/concierge/src/app/points/new-points.component.ts
var _c05 = () => ["/points-management", "new", "overview"];
var _c14 = () => ["/points-management", "new", "assets"];
function NewPointsComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function NewPointsComponent_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newAsset());
    });
    \u0275\u0275text(1, " New Asset ");
    \u0275\u0275elementEnd();
  }
}
var _NewPointsComponent = class _NewPointsComponent extends AsyncHandler {
  constructor(_state, _router) {
    super();
    this._state = _state;
    this._router = _router;
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
_NewPointsComponent.\u0275fac = function NewPointsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewPointsComponent)(\u0275\u0275directiveInject(PointsStateService), \u0275\u0275directiveInject(Router));
};
_NewPointsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewPointsComponent, selectors: [["placeos-new-points"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 15, vars: 8, consts: [["tabPanel", ""], [1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "relative", "z-10"], ["btn", "", "matRipple", "", "class", "w-40", 3, "click", 4, "ngIf"], [1, "px-8", "mb-4"], ["mat-tab-nav-bar", "", 3, "tabPanel"], ["mat-tab-link", "", 3, "routerLink", "active"], [1, "flex-1", "w-full", "h-1/2", "overflow-auto", "px-8"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"]], template: function NewPointsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 2)(4, "points-topbar", 3);
    \u0275\u0275template(5, NewPointsComponent_button_5_Template, 2, 0, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "nav", 6)(8, "a", 7);
    \u0275\u0275text(9, " Overview ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 7);
    \u0275\u0275text(11, " Assets ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "mat-tab-nav-panel", 8, 0);
    \u0275\u0275element(14, "router-outlet");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tabPanel_r3 = \u0275\u0275reference(13);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.page === "assets");
    \u0275\u0275advance(2);
    \u0275\u0275property("tabPanel", tabPanel_r3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c05))("active", ctx.page === "overview");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c14))("active", ctx.page === "assets");
  }
}, dependencies: [NgIf, ApplicationTopbarComponent, ApplicationSidebarComponent, MatRipple, MatTabNav, MatTabNavPanel, MatTabLink, RouterOutlet, RouterLink, PointsTopbarComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=new-points.component.css.map */"] });
var NewPointsComponent = _NewPointsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewPointsComponent, { className: "NewPointsComponent", filePath: "apps/concierge/src/app/points/new-points.component.ts", lineNumber: 71 });
})();

// apps/concierge/src/app/points/points.module.ts
var ROUTES = [
  {
    path: "new",
    component: NewPointsComponent,
    children: [
      { path: "assets", component: PointsAssetsComponent },
      { path: "overview", component: PointsOverviewComponent },
      { path: "**", redirectTo: "overview", pathMatch: "full" }
    ]
  },
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
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  UIModule,
  MatTabsModule,
  MatChipsModule,
  RouterModule.forChild(ROUTES)
] });
var PointsModule = _PointsModule;
export {
  PointsModule
};
//# sourceMappingURL=points.module-PJFGUMO4.js.map
