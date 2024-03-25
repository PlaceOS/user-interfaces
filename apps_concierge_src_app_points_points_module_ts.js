"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_points_points_module_ts"],{

/***/ 36766:
/*!****************************************************************!*\
  !*** ./apps/concierge/src/app/points/asset-modal.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointsAssetModalComponent: () => (/* binding */ PointsAssetModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/spaces */ 55322);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 20414);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 15870);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 15746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 680);
/* harmony import */ var _desks_desks_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../desks/desks-state.service */ 34381);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);
/* harmony import */ var _libs_form_fields_src_lib_counter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/counter.component */ 37594);
/* harmony import */ var _libs_form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/time-field.component */ 59590);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);

























function PointsAssetModalComponent_main_3_mat_spinner_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-spinner", 29);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("diameter", 32);
  }
}
function PointsAssetModalComponent_main_3_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", (option_r6 == null ? null : option_r6.display_name) || (option_r6 == null ? null : option_r6.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (option_r6 == null ? null : option_r6.display_name) || (option_r6 == null ? null : option_r6.name), " ");
  }
}
function PointsAssetModalComponent_main_3_mat_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " No matching options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", true);
  }
}
const _c0 = () => ({
  standalone: true
});
function PointsAssetModalComponent_main_3_div_34_a_time_field_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a-time-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PointsAssetModalComponent_main_3_div_34_a_time_field_11_Template_a_time_field_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const rule_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](rule_r7.second = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rule_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", rule_r7.second)("from", rule_r7.first)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c0));
  }
}
function PointsAssetModalComponent_main_3_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "mat-form-field", 34)(3, "mat-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PointsAssetModalComponent_main_3_div_34_Template_mat_select_ngModelChange_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const rule_r7 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](rule_r7.type = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Before ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Between ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " After ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a-time-field", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PointsAssetModalComponent_main_3_div_34_Template_a_time_field_ngModelChange_10_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const rule_r7 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](rule_r7.first = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, PointsAssetModalComponent_main_3_div_34_a_time_field_11_Template, 1, 4, "a-time-field", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "@");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a-counter", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PointsAssetModalComponent_main_3_div_34_Template_a_counter_ngModelChange_14_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const rule_r7 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](rule_r7.rate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rule_r7 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", rule_r7.type)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", rule_r7.first)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](12, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rule_r7.type === "between");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", rule_r7.rate)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](13, _c0))("min", 0)("max", 300)("step", 5)("render_fn", ctx_r5.renderPercent);
  }
}
const _c1 = () => [];
function PointsAssetModalComponent_main_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "main", 5)(1, "section", 6)(2, "div", 7)(3, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Asset Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-form-field", 9)(6, "mat-select", 10)(7, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Space");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Desk");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 7)(12, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Asset");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-form-field", 9)(15, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, PointsAssetModalComponent_main_3_mat_spinner_18_Template, 1, 1, "mat-spinner", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-autocomplete", null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, PointsAssetModalComponent_main_3_mat_option_21_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, PointsAssetModalComponent_main_3_mat_option_23_Template, 2, 1, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "section", 19)(26, "div", 7)(27, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Standard hourly rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "a-counter", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 22)(31, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Rate Rules");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, PointsAssetModalComponent_main_3_div_34_Template, 15, 14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointsAssetModalComponent_main_3_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.newRule());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 25)(37, "app-icon", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Add new rule");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "section", 19)(42, "div", 7)(43, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Accept Points?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "mat-checkbox", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 7)(47, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Discount Cap");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "a-counter", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](20);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_5_0;
    let tmp_10_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("opacity-30", !ctx_r0.form.get("type").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matAutocomplete", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](22, 16, ctx_r0.asset_options));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 18, ctx_r0.asset_options)) == null ? null : tmp_5_0.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("min", 500)("max", 80000)("step", 500)("render_fn", ctx_r0.renderPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ((tmp_10_0 = ctx_r0.form.get("custom_rates")) == null ? null : tmp_10_0.value) || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](20, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("min", 0)("max", 100)("step", 5)("render_fn", ctx_r0.renderPercent);
  }
}
class PointsAssetModalComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  constructor(_spaces, _desks, _data) {
    super();
    this._spaces = _spaces;
    this._desks = _desks;
    this._data = _data;
    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this._data.asset?.id || ''),
      asset_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this._data.asset?.asset_id || ''),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this._data.asset?.name || ''),
      type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this._data.asset?.type || ''),
      accept_points: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this._data.asset?.accept_points ?? false),
      discount_cap: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this._data.asset?.discount_cap || 50),
      unit_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this._data.asset?.unit_price || 1000),
      custom_rates: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this._data.asset?.custom_rates || [])
    });
    this.asset_options = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.form.valueChanges, this._spaces.list, this._desks.desks]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(([{
      type,
      name
    }, spaces, desks]) => {
      this.loading = true;
      const search = (name || '').toLowerCase();
      return !type ? [] : type === 'space' ? spaces.filter(_ => _.name.toLowerCase().includes(search)) : desks.filter(_ => _.name.toLowerCase().includes(search));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.loading = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.shareReplay)(1));
    this._desks.setFilters({
      zones: ['All']
    });
    this.subscription('type_change', this.form.get('type').valueChanges.subscribe(v => {
      const field = this.form.get('name');
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
    this.form.get('custom_rates').setValue([...this.form.get('custom_rates').value, {
      type: 'before',
      first: (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date()),
      second: (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date()), 1),
      rate: 100
    }]);
  }
  save() {
    this.event.emit({
      reason: 'done',
      metadata: {
        ...this.form.value
      }
    });
  }
  static #_ = this.ɵfac = function PointsAssetModalComponent_Factory(t) {
    return new (t || PointsAssetModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_spaces__WEBPACK_IMPORTED_MODULE_1__.SpacesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_desks_desks_state_service__WEBPACK_IMPORTED_MODULE_2__.DesksStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: PointsAssetModalComponent,
    selectors: [["points-asset-modal"]],
    outputs: {
      event: "event"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 9,
    vars: 3,
    consts: [[1, "text-lg"], ["class", "min-w-[24rem] overflow-hidden", 3, "formGroup", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "p-2", "space-x-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "flex-1"], ["matRipple", "", 1, "flex-1", 3, "disabled", "click"], [1, "min-w-[24rem]", "overflow-hidden", 3, "formGroup"], [1, "p-2"], [1, "flex", "items-center"], [1, "w-24"], ["appearance", "outline", 1, "flex-1", "h-[3.25rem]"], ["formControlName", "type", "placeholder", "Select asset type"], ["value", "space"], ["value", "desk"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "formControlName", "name", "placeholder", "Search for asset...", 3, "matAutocomplete"], ["matSuffix", "", 3, "diameter", 4, "ngIf"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "disabled", 4, "ngIf"], [1, "border-t", "border-base-200", "p-2"], [1, "flex-1"], ["formControlName", "unit_price", 1, "border", "border-base-200", "rounded", 3, "min", "max", "step", "render_fn"], [1, ""], ["rule", "", "class", "flex items-center", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", 1, "clear", "w-full", 3, "click"], [1, "flex", "items-center", "justify-center", "w-full"], [1, "underline"], ["formControlName", "accept_points"], ["formControlName", "discount_cap", 1, "border", "border-base-200", "rounded", 3, "min", "max", "step", "render_fn"], ["matSuffix", "", 3, "diameter"], [3, "value"], [3, "disabled"], ["rule", "", 1, "flex", "items-center"], [1, "flex", "items-center", "flex-1", "w-1/2", "space-x-2"], ["appearance", "outline", 1, "flex-2", "h-[3.25rem]", "w-32"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["value", "before"], ["value", "between"], ["value", "after"], [1, "flex-1", "mt-2", "w-40", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "flex-1 mt-2 w-40", 3, "ngModel", "from", "ngModelOptions", "ngModelChange", 4, "ngIf"], [1, "mx-2"], [1, "border", "border-base-200", "rounded", 3, "ngModel", "ngModelOptions", "min", "max", "step", "render_fn", "ngModelChange"], [1, "flex-1", "mt-2", "w-40", 3, "ngModel", "from", "ngModelOptions", "ngModelChange"]],
    template: function PointsAssetModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "header")(1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, PointsAssetModalComponent_main_3_Template, 50, 21, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "footer", 2)(5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointsAssetModalComponent_Template_button_click_7_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx.form == null ? null : ctx.form.value == null ? null : ctx.form.value.id) ? "Edit" : "New", " Points Asset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.form.value.name);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckbox, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogClose, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRipple, _libs_form_fields_src_lib_counter_component__WEBPACK_IMPORTED_MODULE_3__.CounterComponent, _libs_form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_4__.TimeFieldComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe],
    styles: ["label[_ngcontent-%COMP%] {\n                width: auto;\n                min-width: 0;\n                margin: 0 1rem 0 0;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcG9pbnRzL2Fzc2V0LW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksV0FBVztnQkFDWCxZQUFZO2dCQUNaLGtCQUFrQjtZQUN0QiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMXJlbSAwIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 60609:
/*!***************************************************************!*\
  !*** ./apps/concierge/src/app/points/new-points.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewPointsComponent: () => (/* binding */ NewPointsComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _points_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./points-state.service */ 64321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/app-topbar.component */ 33005);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 19842);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _points_topbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./points-topbar.component */ 58531);












function NewPointsComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewPointsComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.newAsset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " New Asset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c0 = () => ["/entertainment", "points", "overview"];
const _c1 = () => ["/entertainment", "points", "assets"];
class NewPointsComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  constructor(_state, _router) {
    super();
    this._state = _state;
    this._router = _router;
    this.newAsset = () => this._state.newAsset();
  }
  ngOnInit() {
    this.subscription('route.params', this._router.events.subscribe(() => {
      const url_parts = this._router.url?.split('/') || [''];
      this.page = url_parts[url_parts.length - 1];
    }));
    const parts = this._router.url?.split('/') || [''];
    this.page = parts[parts.length - 1];
  }
  static #_ = this.ɵfac = function NewPointsComponent_Factory(t) {
    return new (t || NewPointsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_points_state_service__WEBPACK_IMPORTED_MODULE_1__.PointsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: NewPointsComponent,
    selectors: [["placeos-new-points"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 13,
    vars: 7,
    consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "relative", "z-10"], ["btn", "", "matRipple", "", 3, "click", 4, "ngIf"], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", 3, "routerLink", "active"], [1, "flex-1", "w-full", "h-1/2", "overflow-auto"], ["btn", "", "matRipple", "", 3, "click"]],
    template: function NewPointsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "main", 1)(4, "points-topbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, NewPointsComponent_button_5_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nav", 4)(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Assets ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.page === "assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c0))("active", ctx.page === "overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c1))("active", ctx.page === "assets");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_2__.ApplicationTopbarComponent, _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.ApplicationSidebarComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabNav, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _points_topbar_component__WEBPACK_IMPORTED_MODULE_4__.PointsTopbarComponent],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcG9pbnRzL25ldy1wb2ludHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsWUFBWTtnQkFDWixXQUFXO2dCQUNYLDJCQUEyQjtZQUMvQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYjEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 14010:
/*!******************************************************************!*\
  !*** ./apps/concierge/src/app/points/points-assets.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointsAssetsComponent: () => (/* binding */ PointsAssetsComponent)
/* harmony export */ });
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _points_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./points-state.service */ 64321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-table.component */ 27442);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);








function PointsAssetsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r10 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r10);
  }
}
function PointsAssetsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r11 = ctx.data;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, data_r11 / 100, ctx_r2.code), " per hour ");
  }
}
function PointsAssetsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r12 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("text-success", data_r12)("text-error", !data_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r12 ? "check_circle" : "cancel", " ");
  }
}
function PointsAssetsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r13 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", data_r13, "%");
  }
}
function PointsAssetsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PointsAssetsComponent_ng_template_9_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const row_r14 = restoredCtx.row;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.edit(row_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PointsAssetsComponent_ng_template_9_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const row_r14 = restoredCtx.row;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.remove(row_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
const _c0 = () => ["name", "type", "unit_price", "accept_points", "discount_cap", "actions"];
const _c1 = () => ["Name", "Type", "Unit Price", "Accepts Points", "Discount %", " "];
const _c2 = () => ["flex"];
const _c3 = (a0, a1, a2, a3, a4) => ({
  type: a0,
  unit_price: a1,
  accept_points: a2,
  discount_cap: a3,
  actions: a4
});
class PointsAssetsComponent {
  get code() {
    return this._org.currency_code;
  }
  constructor(_state, _org) {
    this._state = _state;
    this._org = _org;
    this.asset_list = this._state.assets;
    this.edit = d => this._state.newAsset(d);
    this.remove = d => this._state.removeAsset(d?.id);
  }
  static #_ = this.ɵfac = function PointsAssetsComponent_Factory(t) {
    return new (t || PointsAssetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_points_state_service__WEBPACK_IMPORTED_MODULE_1__.PointsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_0__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: PointsAssetsComponent,
    selectors: [["points-assets"]],
    decls: 11,
    vars: 14,
    consts: [["empty", "No priced assets", 1, "w-full", "h-full", 3, "dataSource", "columns", "display_column", "column_size", "template"], ["type_template", ""], ["price_template", ""], ["accept_template", ""], ["discount_template", ""], ["action_template", ""], [1, "p-2", "bg-base-200", "rounded", "capitalize"], [1, "text-xs"], [1, "flex", "justify-center", "h-px"], [1, "text-2xl"], [1, "text-right", "px-4"], [1, "h-6", "flex", "items-center", "justify-end"], ["icon", "", 3, "click"]],
    template: function PointsAssetsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "custom-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PointsAssetsComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(3, PointsAssetsComponent_ng_template_3_Template, 3, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(5, PointsAssetsComponent_ng_template_5_Template, 3, 5, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(7, PointsAssetsComponent_ng_template_7_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(9, PointsAssetsComponent_ng_template_9_Template, 7, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.asset_list)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c0))("display_column", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c1))("column_size", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c2))("template", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction5"](8, _c3, _r1, _r3, _r5, _r7, _r9));
      }
    },
    dependencies: [_libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_3__.CustomTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe],
    styles: ["[_nghost-%COMP%] {\n                height: 100%;\n                width: 100%;\n                overflow-x: auto;\n                overflow-y: hidden;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcG9pbnRzL3BvaW50cy1hc3NldHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsZ0JBQWdCO2dCQUNoQixrQkFBa0I7WUFDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 97927:
/*!********************************************************************!*\
  !*** ./apps/concierge/src/app/points/points-overview.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointsOverviewComponent: () => (/* binding */ PointsOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _libs_form_fields_src_lib_counter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/counter.component */ 37594);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);





class PointsOverviewComponent {
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
    this.points = {
      ...this.points,
      ...JSON.parse(localStorage.getItem('PLACEOS.point_details') || '{}')
    };
  }
  storePoints() {
    localStorage.setItem('PLACEOS.point_details', JSON.stringify(this.points));
  }
  static #_ = this.ɵfac = function PointsOverviewComponent_Factory(t) {
    return new (t || PointsOverviewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: PointsOverviewComponent,
    selectors: [["points-overview"]],
    decls: 31,
    vars: 7,
    consts: [[1, "p-2", "bg-secondary", "text-white", "w-full", "font-medium", "text-lg"], [1, "bg-base-100", "w-full"], [1, "p-2", "underline", "font-medium", "text-lg"], [1, "flex", "items-center", "space-x-2", "p-2", "mb-4"], [1, "bg-base-100", "rounded", "border", "border-base-200", 3, "step", "ngModel", "render_fn", "ngModelChange"], ["matTooltip", "Set point redemption caps on menu items"], [1, "bg-base-100", "w-full", "flex-1"], [1, "p-4"], [1, "flex", "items-center", "space-x-2", "p-2", "border-b", "border-base-200"], [1, "bg-base-100", "rounded", "border", "border-base-200", 3, "ngModel", "ngModelChange"], [1, "flex", "items-center", "space-x-2", "p-2"]],
    template: function PointsOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Point Overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "section", 1)(3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Point Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "1 point =");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a-counter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_8_listener($event) {
          return ctx.points.value = $event;
        })("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_8_listener() {
          return ctx.storePoints();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "app-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "section", 6)(12, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Automatic Rewards");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7)(15, "div", 8)(16, "a-counter", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_16_listener($event) {
          return ctx.points.desk_checkin = $event;
        })("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_16_listener() {
          return ctx.storePoints();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Points for desk check-in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 8)(20, "a-counter", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_20_listener($event) {
          return ctx.points.room_checkin = $event;
        })("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_20_listener() {
          return ctx.storePoints();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Points for room check-in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 8)(24, "a-counter", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_24_listener($event) {
          return ctx.points.booking_cancel = $event;
        })("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_24_listener() {
          return ctx.storePoints();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Points for booking cancellation with 24 hour notice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 10)(28, "a-counter", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_28_listener($event) {
          return ctx.points.wellness_card = $event;
        })("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_28_listener() {
          return ctx.storePoints();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Points for completing wellness card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("step", 0.1)("ngModel", ctx.points.value)("render_fn", ctx.renderPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.points.desk_checkin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.points.room_checkin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.points.booking_cancel);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.points.wellness_card);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _libs_form_fields_src_lib_counter_component__WEBPACK_IMPORTED_MODULE_0__.CounterComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcG9pbnRzL3BvaW50cy1vdmVydmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO1lBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 64321:
/*!***************************************************************!*\
  !*** ./apps/concierge/src/app/points/points-state.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointsStateService: () => (/* binding */ PointsStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 70462);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 17627);
/* harmony import */ var _asset_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset-modal.component */ 36766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 17401);








class PointsStateService {
  constructor(_dialog) {
    this._dialog = _dialog;
    this._assets = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.assets = this._assets.asObservable();
    this._assets.next(JSON.parse(localStorage.getItem('PLACEOS.point_assets') || '[]'));
    this.assets.subscribe(list => {
      localStorage.setItem('PLACEOS.point_assets', JSON.stringify(list));
    });
  }
  newAsset(asset) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ref = _this._dialog.open(_asset_modal_component__WEBPACK_IMPORTED_MODULE_2__.PointsAssetModalComponent, {
        data: {
          asset
        }
      });
      const details = yield Promise.race([ref.componentInstance.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)(_ => _.reason === 'done')).toPromise(), ref.afterClosed().toPromise()]);
      if (details.reason !== 'done') return ref.close();
      _this._assets.next([..._this._assets.getValue().filter(_ => _.id !== asset?.id), {
        ...details.metadata,
        id: details.metadata.id || `PA-${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.randomInt)(999999999)}`
      }]);
      ref.close();
    })();
  }
  removeAsset(asset_id) {
    this._assets.next(this._assets.getValue().filter(_ => _.id !== asset_id));
  }
  static #_ = this.ɵfac = function PointsStateService_Factory(t) {
    return new (t || PointsStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: PointsStateService,
    factory: PointsStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 58531:
/*!******************************************************************!*\
  !*** ./apps/concierge/src/app/points/points-topbar.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointsTopbarComponent: () => (/* binding */ PointsTopbarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 17627);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/date-options.component */ 11771);







const _c0 = ["*"];
class PointsTopbarComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  constructor(_org) {
    super();
    this._org = _org;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)(_ => _)).toPromise();
    })();
  }
  static #_ = this.ɵfac = function PointsTopbarComponent_Factory(t) {
    return new (t || PointsTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: PointsTopbarComponent,
    selectors: [["points-topbar"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 4,
    vars: 0,
    consts: [[1, "flex", "items-center", "bg-base-100", "h-20", "px-4", "border-b", "border-base-200", "space-x-2"], [1, "flex-1", "w-2"]],
    template: function PointsTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "date-options");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_ui_date_options_component__WEBPACK_IMPORTED_MODULE_3__.DateOptionsComponent],
    styles: ["mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcG9pbnRzL3BvaW50cy10b3BiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxjQUFjO2dCQUNkLFVBQVU7WUFDZCIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMy4yNWVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 73223:
/*!***********************************************************!*\
  !*** ./apps/concierge/src/app/points/points.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointsComponent: () => (/* binding */ PointsComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _points_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./points-state.service */ 64321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/sidebar.component */ 42349);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _points_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./points-topbar.component */ 58531);











function PointsComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PointsComponent_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.newAsset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " New Asset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c0 = () => ["/points", "overview"];
const _c1 = () => ["/points", "assets"];
class PointsComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  constructor(_state, _router) {
    super();
    this._state = _state;
    this._router = _router;
    this.newAsset = () => this._state.newAsset();
  }
  ngOnInit() {
    this.subscription('route.params', this._router.events.subscribe(() => {
      const url_parts = this._router.url?.split('/') || [''];
      this.page = url_parts[url_parts.length - 1];
    }));
    const parts = this._router.url?.split('/') || [''];
    this.page = parts[parts.length - 1];
  }
  static #_ = this.ɵfac = function PointsComponent_Factory(t) {
    return new (t || PointsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_points_state_service__WEBPACK_IMPORTED_MODULE_1__.PointsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: PointsComponent,
    selectors: [["placeos-points"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 7,
    consts: [[1, "relative", "w-full", "flex", "flex-col", "bg-base-200"], [1, "relative", "z-10"], ["btn", "", "matRipple", "", 3, "click", 4, "ngIf"], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", 3, "routerLink", "active"], [1, "flex-1", "w-full", "h-1/2", "overflow-auto"], ["btn", "", "matRipple", "", 3, "click"]],
    template: function PointsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "main", 0)(2, "points-topbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PointsComponent_button_3_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nav", 3)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Assets ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.page === "assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c0))("active", ctx.page === "overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c1))("active", ctx.page === "assets");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRipple, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabNav, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _points_topbar_component__WEBPACK_IMPORTED_MODULE_3__.PointsTopbarComponent],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcG9pbnRzL3BvaW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2IsWUFBWTtnQkFDWixXQUFXO1lBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 41934:
/*!********************************************************!*\
  !*** ./apps/concierge/src/app/points/points.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointsModule: () => (/* binding */ PointsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ 21757);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ui.module */ 97428);
/* harmony import */ var _asset_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset-modal.component */ 36766);
/* harmony import */ var _points_assets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./points-assets.component */ 14010);
/* harmony import */ var _points_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./points-overview.component */ 97927);
/* harmony import */ var _points_topbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./points-topbar.component */ 58531);
/* harmony import */ var _points_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./points.component */ 73223);
/* harmony import */ var _new_points_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-points.component */ 60609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);














const ROUTES = [{
  path: '',
  component: _points_component__WEBPACK_IMPORTED_MODULE_5__.PointsComponent,
  children: [{
    path: 'assets',
    component: _points_assets_component__WEBPACK_IMPORTED_MODULE_2__.PointsAssetsComponent
  }, {
    path: 'overview',
    component: _points_overview_component__WEBPACK_IMPORTED_MODULE_3__.PointsOverviewComponent
  }, {
    path: '**',
    redirectTo: 'overview',
    pathMatch: 'full'
  }]
}, {
  path: 'new',
  component: _new_points_component__WEBPACK_IMPORTED_MODULE_6__.NewPointsComponent,
  children: [{
    path: 'assets',
    component: _points_assets_component__WEBPACK_IMPORTED_MODULE_2__.PointsAssetsComponent
  }, {
    path: 'overview',
    component: _points_overview_component__WEBPACK_IMPORTED_MODULE_3__.PointsOverviewComponent
  }, {
    path: '**',
    redirectTo: 'overview',
    pathMatch: 'full'
  }]
}];
class PointsModule {
  static #_ = this.ɵfac = function PointsModule_Factory(t) {
    return new (t || PointsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: PointsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PointsModule, {
    declarations: [_new_points_component__WEBPACK_IMPORTED_MODULE_6__.NewPointsComponent, _points_component__WEBPACK_IMPORTED_MODULE_5__.PointsComponent, _points_topbar_component__WEBPACK_IMPORTED_MODULE_4__.PointsTopbarComponent, _points_overview_component__WEBPACK_IMPORTED_MODULE_3__.PointsOverviewComponent, _points_assets_component__WEBPACK_IMPORTED_MODULE_2__.PointsAssetsComponent, _asset_modal_component__WEBPACK_IMPORTED_MODULE_1__.PointsAssetModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 20414:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfHour/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfHour)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 47120);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 67265);


/**
 * @name startOfHour
 * @category Hour Helpers
 * @summary Return the start of an hour for the given date.
 *
 * @description
 * Return the start of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an hour
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an hour for 2 September 2014 11:55:00:
 * const result = startOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:00:00
 */
function startOfHour(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setMinutes(0, 0, 0);
  return date;
}

/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_points_points_module_ts.js.map