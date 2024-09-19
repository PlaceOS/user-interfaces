"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_asset-manager_asset-manager_module_ts"],{

/***/ 27501:
/*!***************************************************************************!*\
  !*** ./apps/concierge/src/app/asset-manager/asset-bulk-form.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssetBulkFormComponent: () => (/* binding */ AssetBulkFormComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _asset_manager_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset-manager-state.service */ 91519);
/* harmony import */ var _placeos_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/assets */ 20949);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 34456);

















const _c0 = () => ({
  standalone: true
});
const _c1 = (a0, a1) => [a0, "view", a1];
const _c2 = a0 => [a0];
function AssetBulkFormComponent_div_1_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const order_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", order_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", order_r3.purchase_order_number || order_r3.invoice_number, " ");
  }
}
function AssetBulkFormComponent_div_1_mat_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No purchase orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", true);
  }
}
function AssetBulkFormComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3)(1, "header", 4)(2, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "main", 6)(5, "div", 7)(6, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 11)(11, "div", 7)(12, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Number of Assets to create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field", 9)(15, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AssetBulkFormComponent_div_1_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.count, $event) || (ctx_r1.count = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 7)(17, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Label/Friendly Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Label/Friendly Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 7)(24, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " Purchase Order ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-form-field", 9)(27, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AssetBulkFormComponent_div_1_mat_option_28_Template, 2, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, AssetBulkFormComponent_div_1_mat_option_30_Template, 2, 1, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " Purchase Order ID is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "footer", 20)(35, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AssetBulkFormComponent_div_1_Template_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Bulk ", ctx_r1.form.value.id ? "Edit" : "Add", " Asset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", (ctx_r1.product == null ? null : ctx_r1.product.name) || "No Product")("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c0))("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](29, 10, ctx_r1.purchase_orders));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 12, ctx_r1.purchase_orders)) == null ? null : tmp_10_0.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r1.product ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](16, _c1, ctx_r1.base_route, ctx_r1.product.id) : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](19, _c2, ctx_r1.base_route));
  }
}
function AssetBulkFormComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.loading);
  }
}
class AssetBulkFormComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_3__.AsyncHandler {
  get base_route() {
    return this._state.base_route;
  }
  constructor(_state, _route, _router, _org) {
    super();
    this._state = _state;
    this._route = _route;
    this._router = _router;
    this._org = _org;
    this.form = (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_2__.generateAssetForm)();
    this.purchase_orders = this._state.purchase_orders;
    this.count = 2;
    this.loading = '';
  }
  ngOnInit() {
    var _this = this;
    this.subscription('route.query', this._route.queryParamMap.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
        if (params.get('id')) {
          _this.loading = 'Loading Asset Details...';
          const asset = yield (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_2__.showAsset)(params.get('id')).toPromise().catch(() => null);
          if (!asset) {
            (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)('Unable to load asset details.');
            _this._router.navigate([_this.base_route]);
          }
          _this.form.patchValue(asset);
          _this.loading = '';
        }
        if (params.get('group_id')) {
          _this.loading = 'Loading Product Details...';
          const product = yield (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_2__.showAssetGroup)(params.get('group_id')).toPromise().catch(() => null);
          if (!product) {
            (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)('Unable to load associated product details.');
            _this._router.navigate([_this.base_route]);
          }
          _this.product = product;
          _this.form.patchValue({
            type_id: product.id
          });
          _this.loading = '';
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()));
    this._state.setOptions({
      active_item: null
    });
    this.count = 2;
  }
  save() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.count && _this2.count < 1) {
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)('Please enter a valid number of assets to add.');
      }
      if (!_this2.form.valid) {
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)(`Some fields are invalid. [${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.getInvalidFields)(_this2.form)}]`);
      }
      _this2.loading = 'Saving Product...';
      const data = _this2.form.value;
      const list = yield (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_2__.addAssetsInBulk)(new Array(_this2.count).fill({
        ...data,
        zone_id: _this2._org.building.id
      })).toPromise().catch(e => {
        _this2.loading = '';
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)(`Error saving asset: ${e.message}`);
        throw e;
      });
      _this2._state.setExtraAssets(list.map(d => ({
        ...d,
        type_id: _this2.product.id
      })));
      _this2.form.reset();
      _this2._state.postChange();
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifySuccess)(`Asset added ${list.length} successfully.`);
      _this2._router.navigate([_this2.base_route, 'view', _this2.product?.id]);
      _this2.loading = '';
    })();
  }
  static #_ = this.ɵfac = function AssetBulkFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AssetBulkFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_asset_manager_state_service__WEBPACK_IMPORTED_MODULE_1__.AssetManagerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AssetBulkFormComponent,
    selectors: [["asset-bulk-form"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 2,
    consts: [["load_state", ""], [1, "absolute", "inset-0", "bg-base-100"], ["class", "h-full max-w-[32rem] mx-auto flex flex-col", 4, "ngIf", "ngIfElse"], [1, "h-full", "max-w-[32rem]", "mx-auto", "flex", "flex-col"], [1, "p-4"], [1, "text-center", "text-xl", "font-medium"], [1, "flex-1", "h-1/2", "overflow-auto", 3, "formGroup"], [1, "flex", "flex-1", "flex-col", "space-y-2"], ["for", "name"], ["appearance", "outline"], ["matInput", "", 3, "ngModel", "ngModelOptions", "disabled"], [1, "flex", "items-center", "space-x-2"], ["for", "count"], ["matInput", "", "name", "count", "type", "number", "placeholder", "Number of assets to add", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "identifier"], ["matInput", "", "name", "identifier", "placeholder", "Identifier, Asset ID or Barcode", "formControlName", "identifier"], ["for", "purchase-order-id"], ["formControlName", "purchase_order_id", "placeholder", "Select Purchase Order"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "opacity-60", 3, "disabled", 4, "ngIf"], [1, "flex", "justify-end", "space-x-2", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", "inverse", 3, "routerLink"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [3, "value"], [1, "opacity-60", 3, "disabled"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"]],
    template: function AssetBulkFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AssetBulkFormComponent_div_1_Template, 39, 21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AssetBulkFormComponent_ng_template_2_Template, 4, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe]
  });
}

/***/ }),

/***/ 75873:
/*!*******************************************************************************!*\
  !*** ./apps/concierge/src/app/asset-manager/asset-category-form.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssetCategoryFormComponent: () => (/* binding */ AssetCategoryFormComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _asset_manager_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset-manager-state.service */ 91519);
/* harmony import */ var _placeos_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/assets */ 20949);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);

















function AssetCategoryFormComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 6)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AssetCategoryFormComponent_main_4_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", category_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", category_r1.name, " ");
  }
}
function AssetCategoryFormComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main", 7)(1, "div", 8)(2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8)(11, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Parent Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-form-field", 10)(14, "mat-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AssetCategoryFormComponent_main_4_mat_option_16_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 3, ctx_r1.categories)) == null ? null : tmp_3_0.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 5, ctx_r1.categories));
  }
}
function AssetCategoryFormComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "footer", 15)(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AssetCategoryFormComponent_footer_5_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AssetCategoryFormComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Saving Category...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 32);
  }
}
class AssetCategoryFormComponent {
  constructor(_data, _state, _dialog_ref) {
    this._state = _state;
    this._dialog_ref = _dialog_ref;
    this.loading = false;
    this.form = (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_2__.generateAssetCategoryForm)();
    this.categories = this._state.categories.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(list => list.filter(_ => _.parent_category_id !== this.form.value.id)));
    if (_data?.category) this.form.patchValue(_data.category);
  }
  save() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.form.valid) return;
      _this.loading = true;
      _this._dialog_ref.disableClose = true;
      const data = _this.form.value;
      const item = yield (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_2__.saveAssetCategory)(data).toPromise().catch(e => {
        _this.loading = false;
        _this._dialog_ref.disableClose = false;
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)(`Error saving category: ${e.message}`);
        throw e;
      });
      _this.form.reset();
      _this.loading = false;
      _this._dialog_ref.close(item);
    })();
  }
  static #_ = this.ɵfac = function AssetCategoryFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AssetCategoryFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_asset_manager_state_service__WEBPACK_IMPORTED_MODULE_1__.AssetManagerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AssetCategoryFormComponent,
    selectors: [["asset-category-form"]],
    decls: 8,
    vars: 5,
    consts: [["load_state", ""], [1, "flex", "items-center", "p-2"], [1, "text-center", "text-xl", "font-medium"], ["btn", "", "icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "flex-1 h-1/2 overflow-auto p-2 w-[20rem] max-w-[80vw]", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex justify-end space-x-2 p-2 border-t border-base-200", 4, "ngIf"], ["btn", "", "icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex-1", "h-1/2", "overflow-auto", "p-2", "w-[20rem]", "max-w-[80vw]", 3, "formGroup"], [1, "flex", "flex-col", "space-y-2"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Category Name", "formControlName", "name"], ["formControlName", "parent_category_id", "placeholder", "No Parent", 3, "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex", "justify-end", "space-x-2", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "w-32", "inverse"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8"], [3, "diameter"], [1, "mt-4"]],
    template: function AssetCategoryFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header", 1)(1, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AssetCategoryFormComponent_button_3_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AssetCategoryFormComponent_main_4_Template, 18, 7, "main", 4)(5, AssetCategoryFormComponent_footer_5_Template, 5, 0, "footer", 5)(6, AssetCategoryFormComponent_ng_template_6_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.form.value.id ? "Edit" : "Add", " Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe]
  });
}

/***/ }),

/***/ 64928:
/*!*******************************************************************************************!*\
  !*** ./apps/concierge/src/app/asset-manager/asset-category-management-modal.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssetCategoryManagementModalComponent: () => (/* binding */ AssetCategoryManagementModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _placeos_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/assets */ 20949);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);









function AssetCategoryManagementModalComponent_ng_container_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetCategoryManagementModalComponent_ng_container_12_div_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const category_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.edit(category_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetCategoryManagementModalComponent_ng_container_12_div_1_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const category_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.remove(category_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const category_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](category_r2.name);
  }
}
function AssetCategoryManagementModalComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AssetCategoryManagementModalComponent_ng_container_12_div_1_Template, 9, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", category_r2.id);
  }
}
class AssetCategoryManagementModalComponent {
  constructor(_data, _dialog_ref) {
    var _this = this;
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.list = this._data.list;
    this.edit = this._data.edit;
    this.remove = /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (category) {
        yield (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_1__.deleteAssetCategory)(category.id).toPromise();
        _this.changed.emit();
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }
  static #_ = this.ɵfac = function AssetCategoryManagementModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AssetCategoryManagementModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AssetCategoryManagementModalComponent,
    selectors: [["asset-category-management-modal"]],
    decls: 14,
    vars: 3,
    consts: [["btn", "", "icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "overflow-y-auto", "min-w-[20rem]", "divide-y", "divide-base-200", "max-h-[65vh]"], ["btn", "", "matRipple", "", 1, "flex", "items-center", "justify-center", "space-x-2", "w-[calc(100%-1rem)]", "m-2", 3, "click"], [1, "truncate"], [4, "ngFor", "ngForOf"], ["class", "flex items-center space-x-2 hover:bg-base-200:bg-base-300 p-2", 4, "ngIf"], [1, "flex", "items-center", "space-x-2", "hover:bg-base-200:bg-base-300", "p-2"], [1, "flex-1", "truncate"], ["btn", "", "icon", "", "matRipple", "", 3, "click"]],
    template: function AssetCategoryManagementModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header")(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Manage Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 0)(4, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "main", 1)(7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetCategoryManagementModalComponent_Template_button_click_7_listener() {
          return ctx.edit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "New Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AssetCategoryManagementModalComponent_ng_container_12_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 1, ctx.list));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe]
  });
}

/***/ }),

/***/ 36274:
/*!**********************************************************************!*\
  !*** ./apps/concierge/src/app/asset-manager/asset-form.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssetFormComponent: () => (/* binding */ AssetFormComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _asset_manager_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset-manager-state.service */ 91519);
/* harmony import */ var _placeos_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/assets */ 20949);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 34456);

















const _c0 = () => ({
  standalone: true
});
const _c1 = (a0, a1) => [a0, "view", a1];
const _c2 = a0 => [a0];
function AssetFormComponent_div_1_mat_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const order_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", order_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", order_r2.purchase_order_number || order_r2.invoice_number, " ");
  }
}
function AssetFormComponent_div_1_mat_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No purchase orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", true);
  }
}
function AssetFormComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3)(1, "header", 4)(2, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "main", 6)(5, "div", 7)(6, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 11)(11, "div", 7)(12, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Serial Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Serial Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 7)(19, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Label/Friendly Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " Label/Friendly Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 7)(26, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " Purchase Order ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-form-field", 9)(29, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, AssetFormComponent_div_1_mat_option_30_Template, 2, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, AssetFormComponent_div_1_mat_option_32_Template, 2, 1, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, " Purchase Order ID is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 7)(37, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Barcode");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Barcode is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "footer", 21)(44, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AssetFormComponent_div_1_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.form.value.id ? "Edit" : "Add", " Asset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", (ctx_r2.product == null ? null : ctx_r2.product.name) || "No Product")("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c0))("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 8, ctx_r2.purchase_orders));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 10, ctx_r2.purchase_orders)) == null ? null : tmp_8_0.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r2.product ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](13, _c1, ctx_r2.base_route, ctx_r2.product.id) : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](16, _c2, ctx_r2.base_route));
  }
}
function AssetFormComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.loading);
  }
}
class AssetFormComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_3__.AsyncHandler {
  get base_route() {
    return this._state.base_route;
  }
  constructor(_state, _route, _router, _org) {
    super();
    this._state = _state;
    this._route = _route;
    this._router = _router;
    this._org = _org;
    this.form = (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_2__.generateAssetForm)();
    this.purchase_orders = this._state.purchase_orders;
    this.loading = '';
  }
  ngOnInit() {
    var _this = this;
    this.subscription('route.query', this._route.queryParamMap.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
        if (params.get('id')) {
          _this.loading = 'Loading Asset Details...';
          const asset = yield (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_2__.showAsset)(params.get('id')).toPromise().catch(() => null);
          if (!asset) {
            (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)('Unable to load asset details.');
            _this._router.navigate([_this.base_route]);
          }
          _this.form.patchValue(asset);
          _this.loading = '';
        }
        if (params.get('group_id')) {
          _this.loading = 'Loading Product Details...';
          const product = yield (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_2__.showAssetGroup)(params.get('group_id')).toPromise().catch(() => null);
          if (!product) {
            (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)('Unable to load associated product details.');
            _this._router.navigate([_this.base_route]);
          }
          _this.product = product;
          _this.form.patchValue({
            type_id: product.id
          });
          _this.loading = '';
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()));
    this._state.setOptions({
      active_item: null
    });
  }
  save() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.form.valid) {
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)(`Some fields are invalid. [${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.getInvalidFields)(_this2.form)}]`);
      }
      _this2.loading = 'Saving Product...';
      const data = _this2.form.value;
      const item = yield (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_2__.saveAsset)({
        ...data,
        zone_id: _this2._org.building.id
      }).toPromise().catch(e => {
        _this2.loading = '';
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)(`Error saving asset: ${e.message}`);
        throw e;
      });
      _this2.form.reset();
      _this2._state.postChange();
      _this2._state.setExtraAssets([item].map(d => ({
        ...d,
        type_id: _this2.product.id
      })));
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifySuccess)('Asset saved successfully.');
      _this2._router.navigate([_this2.base_route, 'view', _this2.product?.id]);
      _this2.loading = '';
    })();
  }
  static #_ = this.ɵfac = function AssetFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AssetFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_asset_manager_state_service__WEBPACK_IMPORTED_MODULE_1__.AssetManagerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AssetFormComponent,
    selectors: [["asset-form"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 2,
    consts: [["load_state", ""], [1, "absolute", "inset-0", "bg-base-100"], ["class", "h-full max-w-[32rem] mx-auto flex flex-col", 4, "ngIf", "ngIfElse"], [1, "h-full", "max-w-[32rem]", "mx-auto", "flex", "flex-col"], [1, "p-4"], [1, "text-center", "text-xl", "font-medium"], [1, "flex-1", "h-1/2", "overflow-auto", 3, "formGroup"], [1, "flex", "flex-1", "flex-col", "space-y-2"], ["for", "name"], ["appearance", "outline"], ["matInput", "", 3, "ngModel", "ngModelOptions", "disabled"], [1, "flex", "items-center", "space-x-2"], ["for", "serial-number"], ["matInput", "", "name", "serial-number", "placeholder", "Serial Number", "formControlName", "serial_number"], ["for", "identifier"], ["matInput", "", "name", "identifier", "placeholder", "Identifier, Asset ID or Barcode", "formControlName", "identifier"], ["for", "purchase-order-id"], ["formControlName", "purchase_order_id", "placeholder", "Select Purchase Order"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "opacity-60", 3, "disabled", 4, "ngIf"], ["matInput", "", "name", "barcode", "placeholder", "Barcode", "formControlName", "barcode"], [1, "flex", "justify-end", "space-x-2", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", "inverse", 3, "routerLink"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [3, "value"], [1, "opacity-60", 3, "disabled"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"]],
    template: function AssetFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AssetFormComponent_div_1_Template, 48, 18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AssetFormComponent_ng_template_2_Template, 4, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe]
  });
}

/***/ }),

/***/ 57456:
/*!****************************************************************************!*\
  !*** ./apps/concierge/src/app/asset-manager/asset-group-form.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssetGroupFormComponent: () => (/* binding */ AssetGroupFormComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _asset_manager_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset-manager-state.service */ 91519);
/* harmony import */ var _placeos_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/assets */ 20949);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _libs_form_fields_src_lib_image_list_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/image-list-field.component */ 56864);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);





















const _c0 = (a0, a1) => [a0, "view", a1];
const _c1 = a0 => [a0, "list", "items"];
function AssetGroupFormComponent_div_1_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", category_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", category_r3.name, " ");
  }
}
function AssetGroupFormComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3)(1, "header", 4)(2, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "main", 6)(5, "div", 7)(6, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 7)(15, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-form-field", 9)(20, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AssetGroupFormComponent_div_1_Template_mat_select_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.current_category = ctx_r1.form.value.category_id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, AssetGroupFormComponent_div_1_mat_option_21_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AssetGroupFormComponent_div_1_Template_mat_option_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.newCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 14)(25, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "New Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Category is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 7)(32, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Brand");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Brand is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 7)(41, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 7)(48, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "image-list-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "footer", 21)(52, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AssetGroupFormComponent_div_1_Template_button_click_54_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.form.value.id ? "Edit" : "Add", " Product ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](22, 4, ctx_r1.categories));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r1.form.value.id ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](6, _c0, ctx_r1.base_route, ctx_r1.form.value.id) : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](9, _c1, ctx_r1.base_route));
  }
}
function AssetGroupFormComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-spinner", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("diameter", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.loading);
  }
}
class AssetGroupFormComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_3__.AsyncHandler {
  get base_route() {
    return this._state.base_route;
  }
  constructor(_state, _route, _router, _dialog) {
    super();
    this._state = _state;
    this._route = _route;
    this._router = _router;
    this._dialog = _dialog;
    this.form = (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_2__.generateAssetGroupForm)();
    this.new_category = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
    this.categories = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._state.categories, this.new_category]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(([list, item]) => item ? (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.unique)([...list, item], 'id') : list));
    this.loading = '';
  }
  ngOnInit() {
    var _this = this;
    this.subscription('route.query', this._route.queryParamMap.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
        if (params.get('id')) {
          _this.loading = 'Loading Product Details...';
          const product = yield (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_2__.showAssetGroup)(params.get('id')).toPromise().catch(() => null);
          if (!product) {
            (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)('Unable to load product details.');
            _this._router.navigate([_this.base_route]);
          }
          _this.form.patchValue(product);
          _this.loading = '';
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()));
  }
  newCategory() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.form.patchValue({
        category_id: _this2.current_category
      });
      const category = yield _this2._state.editCategory();
      if (!category) return;
      _this2.new_category.next(category);
      _this2.form.patchValue({
        category_id: category.id
      });
    })();
  }
  save() {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.form.valid) return;
      _this3.loading = 'Saving Product...';
      const data = _this3.form.value;
      const item = yield (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_2__.saveAssetGroup)(data).toPromise().catch(e => {
        _this3.loading = '';
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)(`Error saving Product: ${e.message}`);
        throw e;
      });
      _this3.form.reset();
      _this3.loading = '';
      _this3._state.postChange();
      _this3._router.navigate([_this3.base_route, 'view', item.id]);
    })();
  }
  static #_ = this.ɵfac = function AssetGroupFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AssetGroupFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_asset_manager_state_service__WEBPACK_IMPORTED_MODULE_1__.AssetManagerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AssetGroupFormComponent,
    selectors: [["asset-group-form"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 2,
    consts: [["load_state", ""], [1, "absolute", "inset-0", "bg-base-100"], ["class", "h-full max-w-[32rem] mx-auto flex flex-col", 4, "ngIf", "ngIfElse"], [1, "h-full", "max-w-[32rem]", "mx-auto", "flex", "flex-col"], [1, "p-4"], [1, "text-center", "text-xl", "font-medium"], [1, "flex-1", "h-1/2", "overflow-auto", "p-2", 3, "formGroup"], [1, "flex", "flex-col", "space-y-2"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Name of the product", "formControlName", "name"], ["formControlName", "category_id", "placeholder", "Category of Product", 3, "click"], [3, "value", 4, "ngFor", "ngForOf"], [1, "relative", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["for", "brand"], ["matInput", "", "name", "brand", "placeholder", "Brand of the product", "formControlName", "brand"], ["for", "description"], ["matInput", "", "name", "description", "placeholder", "Description of the product", "formControlName", "description"], ["for", "images"], ["name", "images", "formControlName", "images"], [1, "flex", "justify-end", "space-x-2", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", "inverse", 3, "routerLink"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [3, "value"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"]],
    template: function AssetGroupFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AssetGroupFormComponent_div_1_Template, 56, 11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AssetGroupFormComponent_ng_template_2_Template, 4, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__.MatProgressSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlName, _libs_form_fields_src_lib_image_list_field_component__WEBPACK_IMPORTED_MODULE_4__.ImageListFieldComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe]
  });
}

/***/ }),

/***/ 80142:
/*!***************************************************************************!*\
  !*** ./apps/concierge/src/app/asset-manager/asset-item-list.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssetItemListComponent: () => (/* binding */ AssetItemListComponent)
/* harmony export */ });
/* harmony import */ var _asset_manager_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset-manager-state.service */ 91519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/authenticated-image.directive */ 93208);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);








const _c0 = (a0, a1) => [a0, "view", a1];
const _c1 = a0 => [a0, "manage", "group"];
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_10_a_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 22);
  }
  if (rf & 2) {
    const asset_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("source", asset_r1.images[0]);
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_10_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 23);
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_10_a_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const asset_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Assets: ", asset_r1.asset_count || (asset_r1.assets == null ? null : asset_r1.assets.length) || 0, " ");
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_10_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 16)(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_10_a_2_img_2_Template, 1, 1, "img", 18)(3, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_10_a_2_ng_template_3_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 19)(6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_10_a_2_div_8_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const asset_r1 = ctx.$implicit;
    const placeholder_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c0, ctx_r2.base_route, asset_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", asset_r1.images == null ? null : asset_r1.images.length)("ngIfElse", placeholder_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", asset_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", asset_r1.asset_count || (asset_r1.assets == null ? null : asset_r1.assets.length));
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_10_a_2_Template, 9, 8, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const group_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r2.products)[group_r4.id]);
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_11_a_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 22);
  }
  if (rf & 2) {
    const asset_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("source", asset_r5.images[0]);
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_11_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 30);
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_11_a_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const asset_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Assets: ", asset_r5.asset_count || (asset_r5.assets == null ? null : asset_r5.assets.length) || 0, " ");
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_11_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_11_a_2_img_2_Template, 1, 1, "img", 18)(3, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_11_a_2_ng_template_3_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 29)(6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_11_a_2_div_8_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const asset_r5 = ctx.$implicit;
    const placeholder_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c0, ctx_r2.base_route, asset_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", asset_r5.images == null ? null : asset_r5.images.length)("ngIfElse", placeholder_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", asset_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", asset_r5.asset_count || (asset_r5.assets == null ? null : asset_r5.assets.length));
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_11_a_2_Template, 9, 8, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const group_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r2.products)[group_r4.id]);
  }
}
function AssetItemListComponent_div_0_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "h2", 8)(2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_10_Template, 4, 3, "ng-container", 12)(11, AssetItemListComponent_div_0_ng_container_1_div_1_ng_container_11_Template, 4, 3, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_6_0;
    const group_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](group_r4 == null ? null : group_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" (", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 5, ctx_r2.products)[group_r4.id]) == null ? null : tmp_6_0.length, " item", ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 7, ctx_r2.products)[group_r4.id]) == null ? null : tmp_6_0.length) === 1 ? "" : "s", ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 9, ctx_r2.options).view);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "list");
  }
}
function AssetItemListComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AssetItemListComponent_div_0_ng_container_1_div_1_Template, 12, 11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_4_0;
    const group_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r2.products)[group_r4.id]) == null ? null : tmp_4_0.length);
  }
}
function AssetItemListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AssetItemListComponent_div_0_ng_container_1_Template, 3, 3, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r2.categories));
  }
}
function AssetItemListComponent_mat_progress_bar_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 31);
  }
}
function AssetItemListComponent_ng_template_5_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Create New Product ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c1, ctx_r2.base_route));
  }
}
function AssetItemListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32)(1, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AssetItemListComponent_ng_template_5_a_4_Template, 2, 3, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, ctx_r2.options)) == null ? null : tmp_2_0.search) ? "No matching assets found" : "No assets available. Create a new asset with the button below", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 4, ctx_r2.options)) == null ? null : tmp_3_0.search));
  }
}
class AssetItemListComponent {
  get base_route() {
    return this._state.base_route;
  }
  constructor(_state) {
    this._state = _state;
    this.loading = this._state.loading;
    this.options = this._state.options;
    this.categories = this._state.categories;
    this.products = this._state.product_mapping;
  }
  static #_ = this.ɵfac = function AssetItemListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AssetItemListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_asset_manager_state_service__WEBPACK_IMPORTED_MODULE_0__.AssetManagerStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AssetItemListComponent,
    selectors: [["app-asset-item-list"]],
    decls: 7,
    vars: 9,
    consts: [["empty_state", ""], ["placeholder", ""], ["class", "overflow-auto pb-2 w-full h-full", 4, "ngIf", "ngIfElse"], ["mode", "indeterminate", 4, "ngIf"], [1, "overflow-auto", "pb-2", "w-full", "h-full"], [4, "ngFor", "ngForOf"], ["class", "", 4, "ngIf"], [1, ""], [1, "py-2"], [1, "font-medium"], [1, "text-xs"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "rounded", "overflow-hidden", "bg-base-100", "border", "border-base-200", "divide-y", "divide-base-200"], ["matRipple", "", "class", "flex items-center text-left space-x-4 p-4 border border-base-200 hover:border-indigo-400 rounded", 3, "routerLink", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "flex", "items-center", "text-left", "space-x-4", "p-4", "border", "border-base-200", "hover:border-indigo-400", "rounded", 3, "routerLink"], [1, "h-12", "w-12", "flex", "items-center", "justify-center", "border", "border-base-200", "bg-base-200", "overflow-hidden"], ["auth", "", "class", "min-w-full min-h-full object-cover", 3, "source", 4, "ngIf", "ngIfElse"], [1, "flex-1", "flex", "flex-col", "justify-center"], [1, "truncate"], ["class", "text-xs opacity-60", 4, "ngIf"], ["auth", "", 1, "min-w-full", "min-h-full", "object-cover", 3, "source"], ["src", "assets/icons/asset-placeholder.svg", 1, "m-auto"], [1, "text-xs", "opacity-60"], [1, "flex", "items-center", "overflow-hidden", "flex-wrap", "-mx-2", "w-full"], ["matRipple", "", "class", "bg-base-100 rounded shadow w-40 h-44 text-left m-2 border border-base-200 hover:border-indigo-400 flex flex-col", 3, "routerLink", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "bg-base-100", "rounded", "shadow", "w-40", "h-44", "text-left", "m-2", "border", "border-base-200", "hover:border-indigo-400", "flex", "flex-col", 3, "routerLink"], [1, "w-full", "h-32", "flex", "items-center", "justify-center", "bg-base-200", "overflow-hidden"], [1, "border-t", "border-base-200", "w-full", "px-3", "py-1", "flex-1", "flex", "flex-col", "justify-center"], ["src", "assets/icons/asset-placeholder.svg", 1, "m-auto", "w-16"], ["mode", "indeterminate"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "space-y-4", "h-full", "w-full"], [1, "opacity-40"], ["btn", "", "matRipple", "", 3, "routerLink", 4, "ngIf"], ["btn", "", "matRipple", "", 3, "routerLink"]],
    template: function AssetItemListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AssetItemListComponent_div_0_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AssetItemListComponent_mat_progress_bar_3_Template, 1, 0, "mat-progress-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AssetItemListComponent_ng_template_5_Template, 6, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        let tmp_1_0;
        const empty_state_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx.categories)) == null ? null : tmp_1_0.length) && ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, ctx.products)) == null ? null : tmp_1_0._count))("ngIfElse", empty_state_r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 7, ctx.loading));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchDefault, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_1__.AuthenticatedImageDirective, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: block;\n                width: 100%;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGNBQWM7Z0JBQ2QsV0FBVztnQkFDWCxZQUFZO1lBQ2hCIiwiZmlsZSI6ImFzc2V0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvYXNzZXQtbWFuYWdlci9hc3NldC1pdGVtLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxjQUFjO2dCQUNkLFdBQVc7Z0JBQ1gsWUFBWTtZQUNoQjs7QUFFWix3ZUFBd2UiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 12644:
/*!*************************************************************************!*\
  !*** ./apps/concierge/src/app/asset-manager/asset-listing.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssetListingComponent: () => (/* binding */ AssetListingComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _asset_manager_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset-manager-state.service */ 91519);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _asset_manager_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset-manager-topbar.component */ 57722);









const _c0 = a0 => [a0, "list", "items"];
const _c1 = a0 => [a0, "list", "purchase-orders"];
const _c2 = a0 => [a0, "list", "requests"];
function AssetListingComponent_nav_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetListingComponent_nav_2_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.active = "requests");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Requests ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c2, ctx_r2.base_route))("routerLinkActive", "active")("active", ctx_r2.active === "requests");
  }
}
function AssetListingComponent_nav_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AssetListingComponent_nav_2_a_1_Template, 2, 5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetListingComponent_nav_2_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.active = "items");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Products ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetListingComponent_nav_2_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.active = "purchase-orders");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Purchase Orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const tabPanel_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tabPanel", tabPanel_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.is_new);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, ctx_r2.base_route))("active", ctx_r2.active === "items");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c1, ctx_r2.base_route))("active", ctx_r2.active === "purchase-orders");
  }
}
class AssetListingComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  get base_route() {
    return this._state.base_route;
  }
  constructor(_router, _state) {
    super();
    this._router = _router;
    this._state = _state;
    this.active = 'requests';
    this.is_new = false;
  }
  ngOnInit() {
    this.is_new = this._router.url.includes('new');
    this.active = this._router.url.includes('requests') ? 'requests' : this._router.url.includes('items') ? 'items' : 'purchase-orders';
    this.subscription('router.events', this._router.events.subscribe(e => {
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
        this.is_new = this._router.url.includes('new');
        this.active = this._router.url.includes('requests') ? 'requests' : this._router.url.includes('items') ? 'items' : 'purchase-orders';
      }
    }));
  }
  static #_ = this.ɵfac = function AssetListingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AssetListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_asset_manager_state_service__WEBPACK_IMPORTED_MODULE_0__.AssetManagerStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AssetListingComponent,
    selectors: [["asset-listing"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
    decls: 6,
    vars: 2,
    consts: [["tabPanel", ""], [3, "active"], [1, "flex", "flex-col", "flex-1", "h-1/2", "w-full", "px-8"], ["mat-tab-nav-bar", "", 3, "tabPanel", 4, "ngIf"], [1, "flex-1", "h-1/2", "w-full", "overflow-visible"], ["mat-tab-nav-bar", "", 3, "tabPanel"], ["mat-tab-link", "", 3, "routerLink", "routerLinkActive", "active", "click", 4, "ngIf"], ["mat-tab-link", "", 3, "click", "routerLink", "active"], ["mat-tab-link", "", 3, "click", "routerLink", "routerLinkActive", "active"]],
    template: function AssetListingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "asset-manager-topbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AssetListingComponent_nav_2_Template, 6, 10, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-tab-nav-panel", 4, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("active", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.is_new || ctx.active !== "requests");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabNav, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabNavPanel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _asset_manager_topbar_component__WEBPACK_IMPORTED_MODULE_2__.AssetManagerTopbarComponent],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                width: 100%;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0LWxpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsV0FBVztnQkFDWCxZQUFZO1lBQ2hCIiwiZmlsZSI6ImFzc2V0LWxpc3RpbmcuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvYXNzZXQtbWFuYWdlci9hc3NldC1saXN0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFdBQVc7Z0JBQ1gsWUFBWTtZQUNoQjs7QUFFWix3aUJBQXdpQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 56227:
/*!********************************************************************************!*\
  !*** ./apps/concierge/src/app/asset-manager/asset-location-modal.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssetLocationModalComponent: () => (/* binding */ AssetLocationModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/components */ 51588);
/* harmony import */ var _asset_manager_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset-manager-state.service */ 91519);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! libs/spaces/src/lib/space.pipe */ 22011);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/interactive-map.component */ 24918);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/simple-table.component */ 88328);
/* harmony import */ var _split_join_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./split-join.pipe */ 50727);


















const _c0 = a0 => ({
  key: "zone",
  name: "Level",
  content: a0
});
const _c1 = () => ({
  key: "description",
  name: "Space"
});
const _c2 = a0 => ({
  key: "tracking",
  name: "Tracking",
  content: a0
});
const _c3 = () => ({
  key: "user_name",
  name: "Requestee"
});
const _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
const _c5 = () => ({
  display: "none"
});
const _c6 = (a0, a1) => ({
  "#Zones": a0,
  "#zones": a1
});
function AssetLocationModalComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ((tmp_4_0 = ctx_r1.level(ctx_r1.selected.zone)) == null ? null : tmp_4_0.display_name) || "N/A", " ");
  }
}
function AssetLocationModalComponent_interactive_map_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "interactive-map", 17);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ((tmp_4_0 = ctx_r1.level(ctx_r1.selected.zone)) == null ? null : tmp_4_0.map_id) || "")("styles", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](5, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](3, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](4, _c5)))("features", ctx_r1.selected_feature);
  }
}
function AssetLocationModalComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Select a space from the list to view map location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function AssetLocationModalComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_5_0;
    const data_r3 = ctx.data;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ((tmp_5_0 = ctx_r1.level(data_r3)) == null ? null : tmp_5_0.display_name) || "N/A", " ");
  }
}
function AssetLocationModalComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AssetLocationModalComponent_ng_template_22_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "splitjoin");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "app-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "mat-menu", null, 3)(9, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AssetLocationModalComponent_ng_template_22_Template_button_click_9_listener() {
      const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4).row;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.setTracking(row_r5, "in_storage"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 25)(11, "app-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "In Storage");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AssetLocationModalComponent_ng_template_22_Template_button_click_15_listener() {
      const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4).row;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.setTracking(row_r5, "in_transit"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 25)(17, "app-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "trolley");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "In Transit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AssetLocationModalComponent_ng_template_22_Template_button_click_21_listener() {
      const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4).row;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.setTracking(row_r5, "at_location"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 25)(23, "app-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "At Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    const tracking_menu_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](8);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerFor", tracking_menu_r6)("disabled", ctx_r1.loading[row_r5.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 3, row_r5.extension_data == null ? null : row_r5.extension_data.tracking) || "In Storage", " ");
  }
}
class AssetLocationModalComponent {
  updateFeatures() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const space = yield _this._space.transform(_this.selected.extension_data?.location_id);
      _this.selected_feature = _this.selected ? [{
        location: space.map_id,
        content: _placeos_components__WEBPACK_IMPORTED_MODULE_1__.MapPinComponent,
        z_index: 99,
        data: {
          message: `${space.display_name || space.name} is here`
        }
      }] : [];
    })();
  }
  setTracking(item, state) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading[item.id] = true;
      yield _this2._state.setTracking(item, state);
      _this2.loading[item.id] = false;
    })();
  }
  constructor(_state, _org) {
    this._state = _state;
    this._org = _org;
    this.asset = this._state.active_product;
    this.requests = this._state.active_product_requests;
    this._space = new libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_4__.SpacePipe(this._org);
    this.loading = {};
  }
  level(zones) {
    return this._org.levelWithID(zones);
  }
  static #_ = this.ɵfac = function AssetLocationModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AssetLocationModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_asset_manager_state_service__WEBPACK_IMPORTED_MODULE_2__.AssetManagerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_3__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: AssetLocationModalComponent,
    selectors: [["asset-location-modal"]],
    decls: 24,
    vars: 23,
    consts: [["empty_state", ""], ["level_template", ""], ["tracking_template", ""], ["tracking_menu", "matMenu"], [1, "p-6", "relative"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-4", "right-4"], [1, "font-medium", "mb-2"], ["appearance", "outline", 1, "h-[3.5rem]", "mb-2"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search..."], [1, "flex", "items-center", "space-x-4", "w-[90vw]", "text-sm"], [1, "flex-1", "h-[60vh]", "w-1/2", "border", "border-base-200", "bg-base-200", "overflow-auto"], ["empty_message", "No requested assets for this product", 1, "block", "w-full", 3, "row_clicked", "data", "columns", "sortable"], [1, "flex-1", "h-[60vh]", "w-1/2", "border", "border-base-200", "bg-base-200", "relative", "flex", "items-center", "justify-center"], ["class", "absolute top-4 left-4 bg-base-100 px-4 py-2 rounded-3xl border border-base-200", 4, "ngIf"], [3, "src", "styles", "features", 4, "ngIf", "ngIfElse"], [1, "absolute", "top-4", "left-4", "bg-base-100", "px-4", "py-2", "rounded-3xl", "border", "border-base-200"], [3, "src", "styles", "features"], [1, "opacity-30"], [1, "p-4"], [1, "px-4", "py-2"], ["matRipple", "", 1, "bg-none", "w-full", "flex", "items-center", "px-2", "py-1", "text-left", "rounded", 3, "click", "matMenuTriggerFor", "disabled"], [1, "capitalize", "flex-1", "min-w-32"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"]],
    template: function AssetLocationModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 4)(1, "button", 5)(2, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "mat-form-field", 7)(9, "app-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "simple-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("row_clicked", function AssetLocationModalComponent_Template_simple_table_row_clicked_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          ctx.selected = $event;
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.updateFeatures());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, AssetLocationModalComponent_div_16_Template, 2, 1, "div", 14)(17, AssetLocationModalComponent_interactive_map_17_Template, 1, 8, "interactive-map", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, AssetLocationModalComponent_ng_template_18_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"])(20, AssetLocationModalComponent_ng_template_20_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"])(22, AssetLocationModalComponent_ng_template_22_Template, 27, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        let tmp_3_0;
        const empty_state_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](19);
        const level_template_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](21);
        const tracking_template_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 8, ctx.asset)) == null ? null : tmp_3_0.name, " in use location: ", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 10, ctx.requests)) == null ? null : tmp_3_0.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx.requests)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction4"](18, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](12, _c0, level_template_r8), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](14, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](15, _c2, tracking_template_r9), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](17, _c3)))("sortable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selected)("ngIfElse", empty_state_r7);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuTrigger, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _libs_components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_6__.InteractiveMapComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_7__.SimpleTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _split_join_pipe__WEBPACK_IMPORTED_MODULE_8__.SplitJoinPipe]
  });
}

/***/ }),

/***/ 91519:
/*!*****************************************************************************!*\
  !*** ./apps/concierge/src/app/asset-manager/asset-manager-state.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssetManagerStateService: () => (/* binding */ AssetManagerStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/spaces */ 44855);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns */ 99908);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 6109);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var _placeos_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/assets */ 20949);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _asset_category_management_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./asset-category-management-modal.component */ 64928);
/* harmony import */ var _asset_category_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./asset-category-form.component */ 75873);
/* harmony import */ var _placeos_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @placeos/components */ 51588);
/* harmony import */ var libs_assets_src_lib_asset_request_class__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! libs/assets/src/lib/asset-request.class */ 33747);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ 12587);




















class AssetManagerStateService extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  get form() {
    return this._form;
  }
  get is_new_ui() {
    return location.hash.includes('new') || location.pathname.includes('new');
  }
  get base_route() {
    return this.is_new_ui ? '/book/assets/new' : '/book/assets';
  }
  constructor(_spaces, _org, _dialog, _settings) {
    super();
    this._spaces = _spaces;
    this._org = _org;
    this._dialog = _dialog;
    this._settings = _settings;
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject({
      view: 'grid'
    });
    this._change = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(0);
    this._poll = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(0);
    this._extra_assets = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject([]);
    this._form = (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_4__.generateAssetForm)();
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(false);
    /** Whether asset list is loading */
    this.loading = this._loading.asObservable();
    /** List of options set for the view */
    this.options = this._options.asObservable();
    /** List of extra assets to display */
    this.extra_assets = this._extra_assets.asObservable();
    /** List of available assets */
    this.products = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this._change, this._org.active_building]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(() => {
      this._loading.next(true);
      return (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_4__.getGroupsWithAssets)({
        zone_id: this._org.building?.id
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(_ => this._loading.next(false)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.shareReplay)(1));
    /** List of available assets */
    this.purchase_orders = this._change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(() => {
      this._loading.next(true);
      return (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_4__.queryAssetPurchaseOrders)();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(() => this._loading.next(false)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.shareReplay)(1));
    /** List of requests made by users for assets */
    this.requests = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this._options, this._org.active_building, this._org.active_region, this._poll, this._change, this._spaces.initialised]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(([{
      date
    }, bld, region]) => {
      const start = (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.startOfDay)(date || Date.now()).valueOf();
      const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_18__.endOfDay)(date || Date.now()).valueOf();
      const zones = this._settings.get('app.use_region') ? this._org.buildingsForRegion().map(_ => _.id).join(',') : bld?.id;
      return (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.queryBookings)({
        zones,
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_19__.getUnixTime)(start),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_19__.getUnixTime)(end),
        type: 'asset-request'
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(_ => _.map(b => new _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.Booking({
        ...b,
        extension_data: {
          ...b.extension_data,
          space: this._spaces.find(b.extension_data.space_id)
        }
      })).filter(b => {
        const event = b.linked_event || b.linked_bookings[0];
        if (!event) return false;
        const request = new libs_assets_src_lib_asset_request_class__WEBPACK_IMPORTED_MODULE_10__.AssetRequest({
          ...b.extension_data?.request
        });
        const event_start = event.date || event.event_start * 1000 || event.booking_start * 1000 || start;
        request._time = event_start;
        const event_end = event.date_end || event.event_end * 1000 || event.booking_end * 1000 || end;
        return request?.deliver_at >= start && request?.deliver_at < end && request?.deliver_at < event_end;
      })));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.shareReplay)(1));
    /** Filtered list of asset requests */
    this.filtered_requests = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this.requests, this._options]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(([list, options]) => {
      const search = (options.search || '').toLowerCase();
      return search ? list.filter(i => i.user_name.toLowerCase().includes(search) || i.title.toLowerCase().includes(search) || i.extension_data.location_name?.toLowerCase().includes(search) || i.extension_data.assets?.find(_ => _.name.toLowerCase().includes(search)) || i.status.includes(search) || i.extension_data.tracking?.includes(search)) : list;
    }));
    this.categories = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this._options, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(() => (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_4__.queryAssetCategories)()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(list => [new _placeos_assets__WEBPACK_IMPORTED_MODULE_4__.AssetCategory({
      id: '',
      name: 'Uncategorised'
    }), ...list]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.shareReplay)(1));
    /** Currently active asset */
    this.active_product = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this._options, this._org.active_building, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.filter)(([{
      active_item
    }]) => !!active_item), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(([options, t]) => [options.active_item, t]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(([active_item]) => (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_4__.showGroupFull)(active_item, {
      zone_id: this._org.building.id
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.shareReplay)(1));
    /** List of requests for the currently active asset */
    this.active_product_requests = this.active_product.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(item => {
      return this.requests.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(_ => _.filter(i => item.assets.find(asset => asset.id === i.asset_id))));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(_ => _.filter(i => i.status !== 'declined')));
    /** list of filtered assets */
    this.filtered_products = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this.products, this._options]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(([list, options]) => options.search ? list.filter(i => i.name.toLowerCase().includes(options.search.toLowerCase())) : list));
    /** Mapping of available assets to categories */
    this.product_mapping = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this.filtered_products, this.categories]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(([products, category_list]) => {
      const map = {
        _count: products.length
      };
      products.forEach(item => item.category_id = category_list.find(_ => _.id === item.category_id) ? item.category_id : '');
      const categories = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.unique)(products.map(i => i.category_id));
      for (const group of categories) {
        map[group] = products.filter(i => i.category_id === group);
      }
      return map;
    }));
    this.settings = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this._org.active_building, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.filter)(([_]) => !!_), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(([_]) => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_5__.showMetadata)(_.id, 'assets-settings').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)({})))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(_ => _.details || {}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.shareReplay)(1));
    this.availability = this.settings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(_ => _.disabled_rooms || []));
  }
  startPolling(delay = 15 * 1000) {
    this.interval('polling', () => this._poll.next(Date.now()), delay);
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval('polling');
  }
  resetForm() {
    this._form = (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_4__.generateAssetForm)();
  }
  manageCategories() {
    const ref = this._dialog.open(_asset_category_management_modal_component__WEBPACK_IMPORTED_MODULE_7__.AssetCategoryManagementModalComponent, {
      data: {
        list: this.categories,
        edit: i => this.editCategory(i)
      }
    });
    this.subscription('category_modal', ref.componentInstance.changed.subscribe(() => this._change.next(Date.now())));
    ref.afterClosed().subscribe(() => this.unsub('category_modal'));
  }
  editCategory(category = {}) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ref = _this._dialog.open(_asset_category_form_component__WEBPACK_IMPORTED_MODULE_8__.AssetCategoryFormComponent, {
        data: {
          category
        }
      });
      const result = yield ref.afterClosed().toPromise();
      if (!result) return null;
      _this._change.next(Date.now());
      return result;
    })();
  }
  setExtraAssets(list) {
    this._extra_assets.next(list);
  }
  /** Update the set view options */
  setOptions(options) {
    this._options.next({
      ...this._options.getValue(),
      ...options
    });
  }
  postChange() {
    this.timeout('change', () => this._change.next(Date.now()), 1000);
  }
  setStatus(item, status) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let result = item;
      if (status === 'declined') {
        result = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.rejectBooking)(item.id).toPromise();
      } else if (status === 'approved') {
        result = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.approveBooking)(item.id).toPromise();
      }
      _this2._change.next(Date.now());
      return result;
    })();
  }
  setTracking(item, tracking) {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.updateBooking)(item.id, {
        ...item.toJSON(),
        extension_data: {
          ...item.extension_data,
          tracking
        }
      }).toPromise();
      _this3._change.next(Date.now());
      return result;
    })();
  }
  deleteActiveProduct() {
    var _this4 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const item = yield _this4.active_product.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.take)(1)).toPromise();
      if (!item?.id) return;
      yield (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_4__.deleteAssetGroup)(item.id).toPromise();
      _this4._change.next(Date.now());
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)('Successfully deleted asset');
    })();
  }
  postForm() {
    var _this5 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this5.form?.valid) return;
      const data = _this5.form.value;
      const other_data = {
        ...data
      };
      const drop_keys = ['other_data', 'id', 'name', 'quantity', 'category', 'purchase_date', 'brand', 'images'];
      for (const key of drop_keys) {
        delete other_data[key];
      }
      data.other_data = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_5__.cleanObject)(other_data, [undefined, null, '']);
      const asset = yield (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_4__.saveAsset)(data).toPromise();
      _this5._change.next(Date.now());
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)(`Successfully ${data.id ? 'updated' : 'created'} asset`);
      _this5.resetForm();
      return asset.id;
    })();
  }
  editConfig() {
    var _this6 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const config = yield _this6.getConfig(_this6._org.building.id);
      const items = yield _this6.products.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.take)(1)).toPromise();
      const types = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.unique)((0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.flatten)(items.map(i => [i.name])));
      const ref = _this6._dialog.open(_placeos_components__WEBPACK_IMPORTED_MODULE_9__.AttachedResourceConfigModalComponent, {
        data: {
          resource_name: 'Assets',
          config,
          types,
          require_notes: false
        }
      });
      const details = yield Promise.race([ref.componentInstance.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.first)(_ => _.reason === 'done')).toPromise(), ref.afterClosed().toPromise()]);
      if (details?.reason !== 'done') return;
      _this6.updateConfig(_this6._org.building.id, details.metadata).then(() => ref.close(), () => ref.componentInstance.loading = false);
    })();
  }
  getConfig(zone_id = this._org.building.id) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const rules = (yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_5__.showMetadata)(zone_id, 'assets_config').toPromise()).details;
      return rules instanceof Array ? rules : [];
    })();
  }
  updateConfig(zone_id, config) {
    return (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_5__.updateMetadata)(zone_id, {
      id: zone_id,
      name: 'assets_config',
      details: config,
      description: `Assets config for ${zone_id}`
    }).toPromise();
  }
  saveSettings(settings) {
    var _this7 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const old_settings = yield _this7.settings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.take)(1)).toPromise();
      const result = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_5__.updateMetadata)(_this7._org.building.id, {
        id: _this7._org.building.id,
        name: 'assets-settings',
        details: {
          ...old_settings,
          ...settings
        },
        description: `Assets settings for ${_this7._org.building.id}`
      }).toPromise();
      _this7._change.next(Date.now());
      return result;
    })();
  }
  static #_ = this.ɵfac = function AssetManagerStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AssetManagerStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵinject"](_placeos_spaces__WEBPACK_IMPORTED_MODULE_3__.SpacesService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_6__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjectable"]({
    token: AssetManagerStateService,
    factory: AssetManagerStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 57722:
/*!********************************************************************************!*\
  !*** ./apps/concierge/src/app/asset-manager/asset-manager-topbar.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssetManagerTopbarComponent: () => (/* binding */ AssetManagerTopbarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _asset_manager_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset-manager-state.service */ 91519);
/* harmony import */ var _placeos_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/components */ 51588);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ 59864);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 95072);






















const _c0 = a0 => [a0, "manage", "group"];
const _c1 = a0 => [a0, "manage", "purchase-order"];
function AssetManagerTopbarComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Add Product ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c0, ctx_r0.base_route));
  }
}
function AssetManagerTopbarComponent_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Add Purchase Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c1, ctx_r0.base_route));
  }
}
function AssetManagerTopbarComponent_mat_button_toggle_group_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-button-toggle-group", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AssetManagerTopbarComponent_mat_button_toggle_group_3_Template_mat_button_toggle_group_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.setOptions({
        view: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-button-toggle", 13)(3, "div", 14)(4, "app-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "view_module");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-button-toggle", 16)(7, "div", 14)(8, "app-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "view_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx_r0.options)) == null ? null : tmp_1_0.view);
  }
}
function AssetManagerTopbarComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AssetManagerTopbarComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.editConfig());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "menu_book");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AssetManagerTopbarComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AssetManagerTopbarComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.setRoomAvailability());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "event_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AssetManagerTopbarComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AssetManagerTopbarComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.manageCategories());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "list_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AssetManagerTopbarComponent_div_13_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bld_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", bld_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", bld_r7.display_name || bld_r7.name, " ");
  }
}
function AssetManagerTopbarComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20)(1, "mat-form-field", 21)(2, "mat-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AssetManagerTopbarComponent_div_13_Template_mat_select_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.setBuilding($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AssetManagerTopbarComponent_div_13_mat_option_4_Template, 2, 2, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, ctx_r0.building)) == null ? null : tmp_1_0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 4, ctx_r0.buildings));
  }
}
class AssetManagerTopbarComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_3__.AsyncHandler {
  get base_route() {
    return this._state.base_route;
  }
  get use_region() {
    return !!this._settings.get('app.use_region');
  }
  setBuilding(id) {
    const bld = this._org.buildings.find(_ => _.id === id);
    if (!bld) return;
    this._org.building = bld;
  }
  constructor(_state, _org, _settings, _dialog) {
    super();
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this._dialog = _dialog;
    this.active = '';
    this.options = this._state.options;
    this.region = this._org.active_region;
    this.building = this._org.active_building;
    this.buildings = this._org.active_buildings;
    this.setOptions = o => this._state.setOptions(o);
    this.manageCategories = () => this._state.manageCategories();
    this.editConfig = () => this._state.editConfig();
  }
  setRoomAvailability() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ref = _this._dialog.open(_placeos_components__WEBPACK_IMPORTED_MODULE_2__.AvailableRoomsStateModalComponent, {
        data: {
          type: 'Assets',
          disabled_rooms: yield _this._state.availability.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).toPromise()
        }
      });
      _this.subscription('room-availability', ref.componentInstance.change.subscribe( /*#__PURE__*/function () {
        var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (list) {
          yield _this._state.saveSettings({
            disabled_rooms: list
          }).catch();
          ref.componentInstance.loading = false;
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()));
    })();
  }
  static #_ = this.ɵfac = function AssetManagerTopbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AssetManagerTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_asset_manager_state_service__WEBPACK_IMPORTED_MODULE_1__.AssetManagerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_3__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AssetManagerTopbarComponent,
    selectors: [["asset-manager-topbar"]],
    inputs: {
      active: "active"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 15,
    vars: 12,
    consts: [[1, "w-full", "px-8", "pt-4", "pb-2", "bg-base-100", "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", "class", "secondary", 3, "routerLink", 4, "ngIf"], [3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "flex-1"], ["btn", "", "icon", "", "matRipple", "", "class", "bg-secondary text-secondary-content rounded h-12 w-12", "matTooltip", "Edit Config", 3, "click", 4, "ngIf"], ["btn", "", "icon", "", "matRipple", "", "class", "bg-secondary text-secondary-content rounded h-12 w-12", "matTooltip", "Room Availability", 3, "click", 4, "ngIf"], ["btn", "", "icon", "", "matRipple", "", "class", "bg-secondary text-secondary-content rounded h-12 w-12", "matTooltip", "Manage Categories", 3, "click", 4, "ngIf"], ["appearance", "outline", 1, "no-subscript"], ["matPrefix", "", 1, "text-2xl", "relative", "top-1", "-left-1"], ["matInput", "", "placeholder", "Search products and requests", 3, "ngModelChange", "ngModel"], ["class", "flex items-center space-x-2 px-4 pb-2", 4, "ngIf"], ["btn", "", "matRipple", "", 1, "secondary", 3, "routerLink"], [3, "ngModelChange", "ngModel"], ["value", "grid", "matTooltip", "View as Grid"], [1, "flex", "items-center", "justify-center", "h-12", "w-8"], [1, "text-2xl"], ["value", "list", "matTooltip", "View as List"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Edit Config", 1, "bg-secondary", "text-secondary-content", "rounded", "h-12", "w-12", 3, "click"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Room Availability", 1, "bg-secondary", "text-secondary-content", "rounded", "h-12", "w-12", 3, "click"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Manage Categories", 1, "bg-secondary", "text-secondary-content", "rounded", "h-12", "w-12", 3, "click"], [1, "flex", "items-center", "space-x-2", "px-4", "pb-2"], ["appearance", "outline", 1, "no-subscript", "w-48"], ["placeholder", "All Buildings", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
    template: function AssetManagerTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AssetManagerTopbarComponent_a_1_Template, 2, 3, "a", 1)(2, AssetManagerTopbarComponent_a_2_Template, 2, 3, "a", 1)(3, AssetManagerTopbarComponent_mat_button_toggle_group_3_Template, 10, 3, "mat-button-toggle-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AssetManagerTopbarComponent_button_5_Template, 3, 0, "button", 4)(6, AssetManagerTopbarComponent_button_6_Template, 3, 0, "button", 5)(7, AssetManagerTopbarComponent_button_7_Template, 3, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-form-field", 7)(9, "app-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AssetManagerTopbarComponent_Template_input_ngModelChange_11_listener($event) {
          return ctx.setOptions({
            search: $event
          });
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, AssetManagerTopbarComponent_div_13_Template, 6, 6, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "async");
      }
      if (rf & 2) {
        let tmp_6_0;
        let tmp_7_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.active === "items");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.active === "purchase-orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.active === "items");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.active === "items");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.active === "items");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.active === "items");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 8, ctx.options)) == null ? null : tmp_6_0.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.use_region && ((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 10, ctx.building)) == null ? null : tmp_7_0.length));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggle, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe]
  });
}

/***/ }),

/***/ 8731:
/*!*************************************************************************!*\
  !*** ./apps/concierge/src/app/asset-manager/asset-manager.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssetManagerComponent: () => (/* binding */ AssetManagerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/sidebar.component */ 74605);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);



const _c0 = ["asset-manager", ""];
class AssetManagerComponent {
  static #_ = this.ɵfac = function AssetManagerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AssetManagerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AssetManagerComponent,
    selectors: [["", "asset-manager", ""]],
    attrs: _c0,
    decls: 3,
    vars: 0,
    consts: [[1, "relative", "w-1/2", "flex-1", "bg-base-100", "overflow-hidden"]],
    template: function AssetManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_ui_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n                background: var(--b1);\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0LW1hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxxQkFBcUI7WUFDekIiLCJmaWxlIjoiYXNzZXQtbWFuYWdlci5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvYXNzZXQtbWFuYWdlci9hc3NldC1tYW5hZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gscUJBQXFCO1lBQ3pCOztBQUVaLHdpQkFBd2lCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYjEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 33530:
/*!**********************************************************************!*\
  !*** ./apps/concierge/src/app/asset-manager/asset-manager.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppAssetManangerModule: () => (/* binding */ AppAssetManangerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button-toggle */ 59864);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/stepper */ 56622);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ui.module */ 15412);
/* harmony import */ var _asset_listing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset-listing.component */ 12644);
/* harmony import */ var _asset_manager_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset-manager-topbar.component */ 57722);
/* harmony import */ var _asset_manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset-manager.component */ 8731);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _asset_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asset-view.component */ 29725);
/* harmony import */ var _asset_request_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset-request-list.component */ 86240);
/* harmony import */ var _placeos_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @placeos/components */ 51588);
/* harmony import */ var _asset_item_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./asset-item-list.component */ 80142);
/* harmony import */ var _split_join_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./split-join.pipe */ 50727);
/* harmony import */ var _asset_request_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./asset-request-details.component */ 10374);
/* harmony import */ var _duration_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./duration.pipe */ 30410);
/* harmony import */ var _asset_location_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./asset-location-modal.component */ 56227);
/* harmony import */ var _asset_purchase_order_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./asset-purchase-order-form.component */ 5459);
/* harmony import */ var _asset_category_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./asset-category-form.component */ 75873);
/* harmony import */ var _asset_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./asset-form.component */ 36274);
/* harmony import */ var _asset_group_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./asset-group-form.component */ 57456);
/* harmony import */ var _asset_purchase_order_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./asset-purchase-order-list.component */ 97109);
/* harmony import */ var _asset_bulk_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./asset-bulk-form.component */ 27501);
/* harmony import */ var _new_asset_manager_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./new-asset-manager.component */ 94020);
/* harmony import */ var _asset_category_management_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./asset-category-management-modal.component */ 64928);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 37580);




























const COMPONENTS = [_new_asset_manager_component__WEBPACK_IMPORTED_MODULE_18__.NewAssetManagerComponent, _asset_manager_component__WEBPACK_IMPORTED_MODULE_3__.AssetManagerComponent, _asset_manager_topbar_component__WEBPACK_IMPORTED_MODULE_2__.AssetManagerTopbarComponent, _asset_listing_component__WEBPACK_IMPORTED_MODULE_1__.AssetListingComponent, _asset_view_component__WEBPACK_IMPORTED_MODULE_4__.AssetViewComponent, _asset_request_list_component__WEBPACK_IMPORTED_MODULE_5__.AssetRequestListComponent, _asset_item_list_component__WEBPACK_IMPORTED_MODULE_7__.AssetItemListComponent, _asset_request_details_component__WEBPACK_IMPORTED_MODULE_9__.AssetRequestDetailsComponent, _asset_location_modal_component__WEBPACK_IMPORTED_MODULE_11__.AssetLocationModalComponent, _split_join_pipe__WEBPACK_IMPORTED_MODULE_8__.SplitJoinPipe, _duration_pipe__WEBPACK_IMPORTED_MODULE_10__.DurationFormatPipe, _asset_form_component__WEBPACK_IMPORTED_MODULE_14__.AssetFormComponent, _asset_bulk_form_component__WEBPACK_IMPORTED_MODULE_17__.AssetBulkFormComponent, _asset_group_form_component__WEBPACK_IMPORTED_MODULE_15__.AssetGroupFormComponent, _asset_category_form_component__WEBPACK_IMPORTED_MODULE_13__.AssetCategoryFormComponent, _asset_purchase_order_form_component__WEBPACK_IMPORTED_MODULE_12__.AssetPurchaseOrderFormComponent, _asset_purchase_order_list_component__WEBPACK_IMPORTED_MODULE_16__.AssetPurchaseOrderListComponent, _asset_category_management_modal_component__WEBPACK_IMPORTED_MODULE_19__.AssetCategoryManagementModalComponent];
const children = [{
  path: 'list',
  component: _asset_listing_component__WEBPACK_IMPORTED_MODULE_1__.AssetListingComponent,
  children: [{
    path: 'items',
    component: _asset_item_list_component__WEBPACK_IMPORTED_MODULE_7__.AssetItemListComponent
  }, {
    path: 'requests',
    component: _asset_request_list_component__WEBPACK_IMPORTED_MODULE_5__.AssetRequestListComponent
  }, {
    path: 'purchase-orders',
    component: _asset_purchase_order_list_component__WEBPACK_IMPORTED_MODULE_16__.AssetPurchaseOrderListComponent
  }, {
    path: '**',
    redirectTo: 'requests'
  }]
}, {
  path: 'view/:id',
  component: _asset_view_component__WEBPACK_IMPORTED_MODULE_4__.AssetViewComponent
}, {
  path: 'manage',
  children: [{
    path: 'group',
    component: _asset_group_form_component__WEBPACK_IMPORTED_MODULE_15__.AssetGroupFormComponent
  }, {
    path: 'asset',
    component: _asset_form_component__WEBPACK_IMPORTED_MODULE_14__.AssetFormComponent
  }, {
    path: 'asset-bulk',
    component: _asset_bulk_form_component__WEBPACK_IMPORTED_MODULE_17__.AssetBulkFormComponent
  }, {
    path: 'category',
    component: _asset_category_form_component__WEBPACK_IMPORTED_MODULE_13__.AssetCategoryFormComponent
  }, {
    path: 'purchase-order',
    component: _asset_purchase_order_form_component__WEBPACK_IMPORTED_MODULE_12__.AssetPurchaseOrderFormComponent
  }]
}, {
  path: '**',
  redirectTo: 'list/requests'
}];
const ROUTES = [{
  path: 'new',
  component: _new_asset_manager_component__WEBPACK_IMPORTED_MODULE_18__.NewAssetManagerComponent,
  children
}, {
  path: '',
  component: _asset_manager_component__WEBPACK_IMPORTED_MODULE_3__.AssetManagerComponent,
  children
}, {
  path: '**',
  redirectTo: ''
}];
class AppAssetManangerModule {
  static #_ = this.ɵfac = function AppAssetManangerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppAssetManangerModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
    type: AppAssetManangerModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_components__WEBPACK_IMPORTED_MODULE_6__.ComponentsModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__.MatButtonToggleModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__.MatProgressBarModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTabsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__.MatStepperModule, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppAssetManangerModule, {
    declarations: [_new_asset_manager_component__WEBPACK_IMPORTED_MODULE_18__.NewAssetManagerComponent, _asset_manager_component__WEBPACK_IMPORTED_MODULE_3__.AssetManagerComponent, _asset_manager_topbar_component__WEBPACK_IMPORTED_MODULE_2__.AssetManagerTopbarComponent, _asset_listing_component__WEBPACK_IMPORTED_MODULE_1__.AssetListingComponent, _asset_view_component__WEBPACK_IMPORTED_MODULE_4__.AssetViewComponent, _asset_request_list_component__WEBPACK_IMPORTED_MODULE_5__.AssetRequestListComponent, _asset_item_list_component__WEBPACK_IMPORTED_MODULE_7__.AssetItemListComponent, _asset_request_details_component__WEBPACK_IMPORTED_MODULE_9__.AssetRequestDetailsComponent, _asset_location_modal_component__WEBPACK_IMPORTED_MODULE_11__.AssetLocationModalComponent, _split_join_pipe__WEBPACK_IMPORTED_MODULE_8__.SplitJoinPipe, _duration_pipe__WEBPACK_IMPORTED_MODULE_10__.DurationFormatPipe, _asset_form_component__WEBPACK_IMPORTED_MODULE_14__.AssetFormComponent, _asset_bulk_form_component__WEBPACK_IMPORTED_MODULE_17__.AssetBulkFormComponent, _asset_group_form_component__WEBPACK_IMPORTED_MODULE_15__.AssetGroupFormComponent, _asset_category_form_component__WEBPACK_IMPORTED_MODULE_13__.AssetCategoryFormComponent, _asset_purchase_order_form_component__WEBPACK_IMPORTED_MODULE_12__.AssetPurchaseOrderFormComponent, _asset_purchase_order_list_component__WEBPACK_IMPORTED_MODULE_16__.AssetPurchaseOrderListComponent, _asset_category_management_modal_component__WEBPACK_IMPORTED_MODULE_19__.AssetCategoryManagementModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_components__WEBPACK_IMPORTED_MODULE_6__.ComponentsModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__.MatButtonToggleModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__.MatProgressBarModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTabsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__.MatStepperModule, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule]
  });
})();

/***/ }),

/***/ 5459:
/*!*************************************************************************************!*\
  !*** ./apps/concierge/src/app/asset-manager/asset-purchase-order-form.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssetPurchaseOrderFormComponent: () => (/* binding */ AssetPurchaseOrderFormComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _asset_manager_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset-manager-state.service */ 91519);
/* harmony import */ var _placeos_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/assets */ 20949);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 34938);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 99908);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _libs_form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/date-field.component */ 19608);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/simple-table.component */ 88328);





















const _c0 = (a0, a1) => [a0, "view", a1];
const _c1 = a0 => [a0, "list", "purchase-orders"];
const _c2 = () => [];
const _c3 = () => ({
  key: "name",
  name: "Name"
});
const _c4 = () => ({
  key: "identifier",
  name: "Label/Friendly Name"
});
const _c5 = () => ({
  key: "serial_number",
  name: "Serial Number"
});
const _c6 = a0 => ({
  key: "actions",
  name: " ",
  content: a0
});
const _c7 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function AssetPurchaseOrderFormComponent_div_1_h3_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Associated Assets (", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx_r1.asset_list)) == null ? null : tmp_3_0.length) || "0", ") ");
  }
}
function AssetPurchaseOrderFormComponent_div_1_simple_table_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "simple-table", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, ctx_r1.asset_list) || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c2))("columns", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction4"](10, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](8, _c6, ctx_r1.action_template)));
  }
}
function AssetPurchaseOrderFormComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 3)(1, "header", 4)(2, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "main", 6)(5, "div", 7)(6, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Order Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Order number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 7)(15, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " Invoice Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Invoice number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, " Purchase Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "a-date-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 14)(27, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " Purchase Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "mat-form-field", 18)(30, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 13)(34, "div", 7)(35, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, " Expected Service Start Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "a-date-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 7)(39, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, " Expected Service End Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "a-date-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, AssetPurchaseOrderFormComponent_div_1_h3_42_Template, 3, 3, "h3", 25)(43, AssetPurchaseOrderFormComponent_div_1_simple_table_43_Template, 2, 15, "simple-table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "footer", 27)(45, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AssetPurchaseOrderFormComponent_div_1_Template_button_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.form.value.id ? "Edit" : "Add", " Purchase Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("from", ctx_r1.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("from", ctx_r1.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("from", ctx_r1.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.item == null ? null : ctx_r1.item.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.item == null ? null : ctx_r1.item.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx_r1.product_id ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c0, ctx_r1.base_route, ctx_r1.product_id) : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c1, ctx_r1.base_route));
  }
}
function AssetPurchaseOrderFormComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-spinner", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.loading);
  }
}
class AssetPurchaseOrderFormComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_3__.AsyncHandler {
  get base_route() {
    return this._state.base_route;
  }
  constructor(_state, _route, _router, _org) {
    var _this;
    super();
    _this = this;
    this._state = _state;
    this._route = _route;
    this._router = _router;
    this._org = _org;
    this.form = (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_2__.generateAssetPurchaseOrderForm)();
    this.loading = '';
    this._id = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject('');
    this.from = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.addYears)(Date.now(), -5);
    this.asset_list = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this._id, this._org.active_building]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(([_, bld]) => !!_ && !!bld), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(([id]) => (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_2__.queryAssets)({
      order_id: id
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)( /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (asset_list) {
        const groups = yield (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_2__.queryAssetGroups)({
          zone_id: _this._org.building.id,
          limit: 500
        }).toPromise();
        return asset_list.map(asset => ({
          ...asset,
          name: groups.find(_ => _.id === asset.asset_type_id)?.name || asset.id
        }));
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.shareReplay)(1));
  }
  ngOnInit() {
    var _this2 = this;
    this.subscription('route.query', this._route.queryParamMap.subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
        if (params.get('id')) {
          _this2.loading = 'Loading purchase order details...';
          const asset = yield (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_2__.showAssetPurchaseOrder)(params.get('id')).toPromise().catch(() => null);
          if (!asset) {
            (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)('Unable to load purchase order details.');
            _this2._router.navigate([_this2.base_route]);
          }
          _this2.form.patchValue({
            ...asset,
            order_number: asset.purchase_order_number,
            purchase_date: asset.purchase_date * 1000,
            expected_service_end_date: asset.expected_service_end_date * 1000,
            expected_service_start_date: asset.expected_service_start_date * 1000
          });
          _this2.item = asset;
          _this2._id.next(asset.id);
          _this2.loading = '';
        }
        if (params.get('group_id')) {
          _this2.product_id = params.get('group_id');
        }
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()));
    this._state.setOptions({
      active_item: null
    });
  }
  save() {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.form.valid) return;
      _this3.loading = 'Saving Product...';
      const data = _this3.form.value;
      data.purchase_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.getUnixTime)(data.purchase_date) || null;
      data.expected_service_start_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.getUnixTime)(data.expected_service_start_date) || _this3.item?.expected_service_start_date || null;
      data.expected_service_end_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.getUnixTime)(data.expected_service_end_date) || _this3.item?.expected_service_end_date || null;
      const item = yield (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_2__.saveAssetPurchaseOrder)(data).toPromise().catch(e => {
        _this3.loading = '';
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)(`Error saving purchase order.: ${e.message}`);
        throw e;
      });
      _this3.form.reset();
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifySuccess)('Successfully saved purchase order.');
      _this3._state.postChange();
      if (_this3.product_id) {
        _this3._router.navigate([_this3.base_route, 'view', _this3.product_id]);
      } else {
        _this3._router.navigate([_this3.base_route, 'list', 'purchase-orders']);
      }
      _this3.loading = '';
    })();
  }
  static #_ = this.ɵfac = function AssetPurchaseOrderFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AssetPurchaseOrderFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_asset_manager_state_service__WEBPACK_IMPORTED_MODULE_1__.AssetManagerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AssetPurchaseOrderFormComponent,
    selectors: [["asset-purchase-order-form"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 2,
    consts: [["load_state", ""], [1, "absolute", "inset-0", "bg-base-100"], ["class", "h-full max-w-[32rem] mx-auto flex flex-col", 4, "ngIf", "ngIfElse"], [1, "h-full", "max-w-[32rem]", "mx-auto", "flex", "flex-col"], [1, "p-4"], [1, "text-center", "text-xl", "font-medium"], [1, "flex-1", "h-1/2", "overflow-auto", 3, "formGroup"], [1, "flex", "flex-col", "space-y-2"], ["for", "order-number"], ["appearance", "outline"], ["matInput", "", "name", "order-number", "placeholder", "Order Number", "formControlName", "order_number"], ["for", "invoice-number"], ["matInput", "", "name", "invoice-number", "placeholder", "Invoice Number", "formControlName", "invoice_number"], [1, "flex", "space-x-2"], [1, "flex-1", "flex", "flex-col", "space-y-2"], ["for", "purchase-date"], ["name", "purchase-date", "formControlName", "purchase_date", 3, "from"], ["for", "unit-price"], ["appearance", "outline", 1, "w-full"], ["matPrefix", ""], ["matInput", "", "name", "unit-price", "formControlName", "unit_price", 3, "from"], ["for", "depreciation-start-date"], ["name", "depreciation-start-date", "formControlName", "expected_service_start_date", 3, "from"], ["for", "depreciation-end-date"], ["name", "depreciation-end-date", "formControlName", "expected_service_end_date"], ["class", "font-medium mb-2", 4, "ngIf"], ["class", "w-full block text-sm", "empty_message", "No assets for this purchase order", 3, "data", "columns", 4, "ngIf"], [1, "flex", "justify-end", "space-x-2", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", "inverse", 3, "routerLink"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "font-medium", "mb-2"], ["empty_message", "No assets for this purchase order", 1, "w-full", "block", "text-sm", 3, "data", "columns"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"]],
    template: function AssetPurchaseOrderFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AssetPurchaseOrderFormComponent_div_1_Template, 49, 13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AssetPurchaseOrderFormComponent_ng_template_2_Template, 4, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormControlName, _libs_form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_5__.DateFieldComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_6__.SimpleTableComponent, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe]
  });
}

/***/ }),

/***/ 97109:
/*!*************************************************************************************!*\
  !*** ./apps/concierge/src/app/asset-manager/asset-purchase-order-list.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssetPurchaseOrderListComponent: () => (/* binding */ AssetPurchaseOrderListComponent)
/* harmony export */ });
/* harmony import */ var _asset_manager_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset-manager-state.service */ 91519);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/simple-table.component */ 88328);









const _c0 = () => ({
  key: "purchase_order_number",
  name: "PO Number"
});
const _c1 = () => ({
  key: "invoice_number",
  name: "Invoice Number"
});
const _c2 = a0 => ({
  key: "purchase_date",
  name: "Purchase Date",
  content: a0
});
const _c3 = a0 => ({
  key: "expected_service_start_date",
  name: "Service Start",
  content: a0
});
const _c4 = a0 => ({
  key: "expected_service_end_date",
  name: "Service End",
  content: a0
});
const _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function AssetPurchaseOrderListComponent_ng_template_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AssetPurchaseOrderListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AssetPurchaseOrderListComponent_ng_template_5_span_1_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !data_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r2 ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 2, data_r2 * 1000, "mediumDate") : "", " ");
  }
}
class AssetPurchaseOrderListComponent {
  constructor(_state, _router) {
    this._state = _state;
    this._router = _router;
    this.now = Date.now();
    this.purchase_orders = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.combineLatest)([this._state.options, this._state.purchase_orders]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(([{
      search
    }, list]) => list.filter(_ => !search || _.purchase_order_number.toLowerCase().includes(search.toLowerCase()) || _.invoice_number?.toLowerCase().includes(search.toLowerCase()))));
    this.filters = this._state.options;
  }
  editOrder(order) {
    this._router.navigate([this._state.base_route, 'manage', 'purchase-order'], {
      queryParams: {
        id: order.id
      }
    });
  }
  static #_ = this.ɵfac = function AssetPurchaseOrderListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AssetPurchaseOrderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_asset_manager_state_service__WEBPACK_IMPORTED_MODULE_0__.AssetManagerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AssetPurchaseOrderListComponent,
    selectors: [["app-asset-purchase-order-list"]],
    decls: 7,
    vars: 23,
    consts: [["date_template", ""], [1, "relative", "-left-4", "w-[calc(100%+2rem)]", "mt-4", "h-[calc(100%-1rem)]", "flex", "flex-col"], [1, "w-full", "overflow-auto", "h-1/2", "flex-1", "p-4"], ["purchase-orders", "", 1, "min-w-[52rem]", "block", "text-sm", 3, "row_clicked", "data", "columns", "empty_message", "filter", "sortable"], [1, "p-4"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"]],
    template: function AssetPurchaseOrderListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "simple-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("row_clicked", function AssetPurchaseOrderListComponent_Template_simple_table_row_clicked_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.editOrder($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AssetPurchaseOrderListComponent_ng_template_5_Template, 4, 5, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        const date_template_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.purchase_orders)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction5"](17, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c2, date_template_r3), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c3, date_template_r3), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c4, date_template_r3)))("empty_message", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, ctx.filters)) == null ? null : tmp_3_0.search) ? "No matching purchase orders found." : "There are purchase orders for this building.")("filter", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 7, ctx.filters)) == null ? null : tmp_4_0.search)("sortable", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_1__.SimpleTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n                display: block;\n                height: 100%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0LXB1cmNoYXNlLW9yZGVyLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxjQUFjO2dCQUNkLFlBQVk7Z0JBQ1osV0FBVztZQUNmIiwiZmlsZSI6ImFzc2V0LXB1cmNoYXNlLW9yZGVyLWxpc3QuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvYXNzZXQtbWFuYWdlci9hc3NldC1wdXJjaGFzZS1vcmRlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksY0FBYztnQkFDZCxZQUFZO2dCQUNaLFdBQVc7WUFDZjs7QUFFWixnZ0JBQWdnQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 10374:
/*!*********************************************************************************!*\
  !*** ./apps/concierge/src/app/asset-manager/asset-request-details.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssetRequestDetailsComponent: () => (/* binding */ AssetRequestDetailsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _asset_manager_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset-manager-state.service */ 91519);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_user_avatar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/user-avatar.component */ 23574);
/* harmony import */ var _split_join_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./split-join.pipe */ 50727);
/* harmony import */ var _duration_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./duration.pipe */ 30410);
















const _c0 = a0 => ({
  name: a0
});
function AssetRequestDetailsComponent_div_0_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" x", item_r3.quantity, " ");
  }
}
function AssetRequestDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AssetRequestDetailsComponent_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      ctx_r1.request = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.requestChange.emit(ctx_r1.request));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AssetRequestDetailsComponent_div_0_Template_div_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AssetRequestDetailsComponent_div_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      ctx_r1.request = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.requestChange.emit(ctx_r1.request));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "a-user-avatar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 9)(9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 11)(12, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 11)(17, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "call");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 11)(22, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "work_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 13)(27, "div", 14)(28, "div", 15)(29, "app-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "Asset Requested");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, AssetRequestDetailsComponent_div_0_div_34_Template, 4, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 19)(36, "div", 15)(37, "app-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Date For");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](43, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 19)(45, "div", 15)(46, "app-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Period");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](52, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](53, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](54, "duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 19)(56, "div", 15)(57, "app-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "Floor");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "div", 19)(64, "div", 15)(65, "app-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, "meeting_room");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68, "Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "div", 21)(72, "button", 22)(73, "app-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "app-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "mat-menu", 26, 0)(81, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AssetRequestDetailsComponent_div_0_Template_button_click_81_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setStatus("approved"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, " Approve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AssetRequestDetailsComponent_div_0_Template_button_click_83_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setStatus("declined"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84, " Decline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "button", 28)(86, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](88, "splitjoin");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "app-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "mat-menu", 26, 1)(93, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AssetRequestDetailsComponent_div_0_Template_button_click_93_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setTracking("in_storage"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](94, " In Storage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AssetRequestDetailsComponent_div_0_Template_button_click_95_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setTracking("in_transit"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](96, " In Transit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AssetRequestDetailsComponent_div_0_Template_button_click_97_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setTracking("at_location"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98, " At Location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const menu_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](80);
    const tracking_menu_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](92);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("user", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](46, _c0, ctx_r1.request.user_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.request.user_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", "mailto:" + ctx_r1.request.user_email, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.request.user_email || "staff@place.tech", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", "tel:" + ctx_r1.request.user_phone, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.request.user_phone || "04 1234 5678", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.request.user_company || "PlaceOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](43, 33, ctx_r1.request.date, "EEEE, MMMM d, y"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](52, 36, ctx_r1.request.date, ctx_r1.time_format), " \u2013 ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](53, 39, ctx_r1.request.date + ctx_r1.request.duration * 60 * 1000, ctx_r1.time_format), " (", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](54, 42, ctx_r1.request.duration), ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ((tmp_13_0 = ctx_r1.level(ctx_r1.request.zones)) == null ? null : tmp_13_0.display_name) || "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.request.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("bg-success", ctx_r1.request.status === "approved")("bg-error", ctx_r1.request.status === "declined")("bg-warning", ctx_r1.request.status === "tentative");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", menu_r4)("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("text-green-600", ctx_r1.request.status === "approved")("text-red-600", ctx_r1.request.status === "declined")("text-yellow-400", ctx_r1.request.status === "tentative");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.request.status === "approved" ? "done" : ctx_r1.request.status === "declined" ? "close" : "warning", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.request.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", tracking_menu_r5)("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](88, 44, ctx_r1.request.extension_data == null ? null : ctx_r1.request.extension_data.tracking) || "In Storage", " ");
  }
}
class AssetRequestDetailsComponent {
  get items() {
    return this.request?.extension_data?.request?.items || [];
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _org, _settings) {
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this.requestChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.loading = false;
  }
  level(zones) {
    return this._org.levelWithID(zones);
  }
  setStatus(status) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      yield _this._state.setStatus(_this.request, status);
      _this.request.status = status;
      _this.loading = false;
    })();
  }
  setTracking(state) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      yield _this2._state.setTracking(_this2.request, state);
      _this2.request.extension_data.tracking = state;
      _this2.loading = false;
    })();
  }
  static #_ = this.ɵfac = function AssetRequestDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AssetRequestDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_asset_manager_state_service__WEBPACK_IMPORTED_MODULE_1__.AssetManagerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_3__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: AssetRequestDetailsComponent,
    selectors: [["asset-request-details"]],
    inputs: {
      request: "request"
    },
    outputs: {
      requestChange: "requestChange"
    },
    decls: 1,
    vars: 1,
    consts: [["menu", "matMenu"], ["tracking_menu", "matMenu"], ["class", "fixed inset-0 z-50", 3, "click", 4, "ngIf"], [1, "fixed", "inset-0", "z-50", 3, "click"], [1, "absolute", "inset-0", "bg-black", "opacity-50"], [1, "absolute", "inset-y-0", "right-0", "bg-base-100", "w-[480px]", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "top-1", "right-1", 3, "click"], [1, "border-b", "border-base-200", "px-2", "py-4", "flex", "space-x-4"], [1, "text-xl", 3, "user"], ["details", "", 1, "space-y-1"], [1, "font-medium"], [1, "flex", "items-center", "text-sm", "space-x-2"], [1, "underline", 3, "href"], [1, "px-3", "py-4", "relative"], [1, "flex", "items-center", "space-x-4"], [1, "h-6", "w-6", "rounded-full", "text-secondary", "bg-base-200", "flex", "items-center", "justify-center"], [1, "text-sm"], [1, "pl-10", "flex", "flex-col", "mt-1"], [4, "ngFor", "ngForOf"], [1, "flex", "items-center", "space-x-4", "mt-4"], [1, "pl-10", "mt-1"], [1, "absolute", "top-4", "right-4", "text-sm"], ["matRipple", "", 1, "rounded-3xl", "!bg-opacity-20", "flex", "items-center", "px-2", "py-1", "w-full", "text-left", "space-x-2", "mb-4", 3, "matMenuTriggerFor", "disabled"], [1, "text-xl"], [1, "capitalize", "flex-1"], [1, "text-2xl"], [1, "w-36"], ["mat-menu-item", "", 3, "click"], ["matRipple", "", 1, "bg-none", "w-full", "flex", "items-center", "px-2", "py-1", "text-left", "border", "border-base-200", "rounded-none", 3, "matMenuTriggerFor", "disabled"], [1, "text-xs", "bg-success", "text-success-content", "px-2", "py-1", "rounded"]],
    template: function AssetRequestDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, AssetRequestDetailsComponent_div_0_Template, 99, 48, "div", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.request);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _libs_components_src_lib_user_avatar_component__WEBPACK_IMPORTED_MODULE_5__.UserAvatarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _split_join_pipe__WEBPACK_IMPORTED_MODULE_6__.SplitJoinPipe, _duration_pipe__WEBPACK_IMPORTED_MODULE_7__.DurationFormatPipe]
  });
}

/***/ }),

/***/ 86240:
/*!******************************************************************************!*\
  !*** ./apps/concierge/src/app/asset-manager/asset-request-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssetRequestListComponent: () => (/* binding */ AssetRequestListComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _asset_manager_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset-manager-state.service */ 91519);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/date-options.component */ 94584);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/simple-table.component */ 88328);
/* harmony import */ var _asset_request_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./asset-request-details.component */ 10374);
/* harmony import */ var _split_join_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./split-join.pipe */ 50727);

















const _c0 = a0 => ({
  key: "user_name",
  name: "Requester",
  content: a0
});
const _c1 = a0 => ({
  key: "date",
  name: "Deliver At",
  content: a0,
  size: "8rem"
});
const _c2 = a0 => ({
  key: "assets",
  name: "Asset",
  content: a0,
  sortable: false
});
const _c3 = a0 => ({
  key: "zones",
  name: "Floor",
  content: a0,
  size: "9rem",
  sortable: false
});
const _c4 = () => ({
  key: "description",
  name: "Location"
});
const _c5 = a0 => ({
  key: "status",
  name: "Approval",
  content: a0,
  size: "11rem"
});
const _c6 = a0 => ({
  key: "tracking",
  name: "Tracking",
  content: a0,
  size: "12rem",
  sortable: false
});
const _c7 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
const _c8 = () => [];
function AssetRequestListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 16)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](row_r2.user_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](5, 3, ctx_r2.date(row_r2), "MMM d, " + ctx_r2.time_format), " \u2013 ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](6, 6, ctx_r2.date(row_r2) + row_r2.duration * 60 * 1000, "MMM d, " + ctx_r2.time_format), " ");
  }
}
function AssetRequestListComponent_ng_template_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const asset_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", asset_r4.quantity || 1, "\u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", asset_r4.name, " ");
  }
}
function AssetRequestListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AssetRequestListComponent_ng_template_15_div_1_Template, 4, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", (row_r5.extension_data == null ? null : row_r5.extension_data.request == null ? null : row_r5.extension_data.request.items) || _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](1, _c8));
  }
}
function AssetRequestListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, row_r6.date + (row_r6.extension_data == null ? null : row_r6.extension_data.request == null ? null : row_r6.extension_data.request.deliver_offset) * 60 * 1000 + (row_r6.extension_data == null ? null : row_r6.extension_data.request == null ? null : row_r6.extension_data.request.deliver_day_offset) * 24 * 60 * 60 * 1000, "MMM d, " + ctx_r2.time_format), " ");
  }
}
function AssetRequestListComponent_ng_template_19_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function AssetRequestListComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AssetRequestListComponent_ng_template_19_span_2_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_8_0;
    const data_r7 = ctx.data;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", (tmp_8_0 = ctx_r2.level(data_r7)) == null ? null : tmp_8_0.display_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.level(data_r7));
  }
}
function AssetRequestListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 24)(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AssetRequestListComponent_ng_template_21_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "app-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "app-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "mat-menu", null, 6)(10, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AssetRequestListComponent_ng_template_21_Template_button_click_10_listener() {
      const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.setStatus(row_r9, "approved"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 30)(12, "app-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "event_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Approve Asset Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AssetRequestListComponent_ng_template_21_Template_button_click_16_listener() {
      const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.setStatus(row_r9, "declined"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 30)(18, "app-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "event_busy");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Decline Asset Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    const menu_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](9);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("bg-success", row_r9.status === "approved")("bg-error", row_r9.status === "declined")("bg-warning", row_r9.status === "tentative")("text-success-content", row_r9.status === "approved")("text-error-content", row_r9.status === "declined")("text-warning-content", row_r9.status === "tentative");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerFor", menu_r10)("disabled", ctx_r2.loading[row_r9.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r9.status === "approved" ? "done" : row_r9.status === "declined" ? "close" : "warning", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](row_r9.status);
  }
}
function AssetRequestListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 24)(1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AssetRequestListComponent_ng_template_23_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "splitjoin");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "app-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "mat-menu", null, 7)(9, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AssetRequestListComponent_ng_template_23_Template_button_click_9_listener() {
      const row_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.setTracking(row_r12, "in_storage"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 30)(11, "app-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "In Storage");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AssetRequestListComponent_ng_template_23_Template_button_click_15_listener() {
      const row_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.setTracking(row_r12, "in_transit"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 30)(17, "app-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "trolley");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "In Transit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AssetRequestListComponent_ng_template_23_Template_button_click_21_listener() {
      const row_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.setTracking(row_r12, "at_location"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 30)(23, "app-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "At Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const row_r12 = ctx.row;
    const tracking_menu_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](8);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerFor", tracking_menu_r13)("disabled", ctx_r2.loading[row_r12.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 3, row_r12.extension_data == null ? null : row_r12.extension_data.tracking) || "In Storage", " ");
  }
}
class AssetRequestListComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  date(booking) {
    return booking.all_day ? (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.startOfDay)(booking.date).valueOf() : booking.date;
  }
  setStatus(item, status) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading[item.id] = true;
      yield _this._state.setStatus(item, status);
      _this.loading[item.id] = false;
    })();
  }
  setTracking(item, state) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading[item.id] = true;
      yield _this2._state.setTracking(item, state);
      _this2.loading[item.id] = false;
    })();
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _org, _settings) {
    super();
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this.requests = this._state.filtered_requests;
    this.filters = this._state.options;
    this.loading = {};
    this.setDate = date => this._state.setOptions({
      date
    });
  }
  level(zones) {
    return this._org.levelWithID(zones);
  }
  ngOnInit() {
    this.subscription('polling', this._state.startPolling());
  }
  static #_ = this.ɵfac = function AssetRequestListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AssetRequestListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_asset_manager_state_service__WEBPACK_IMPORTED_MODULE_2__.AssetManagerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_3__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: AssetRequestListComponent,
    selectors: [["app-asset-request-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
    decls: 26,
    vars: 40,
    consts: [["user_template", ""], ["assets_template", ""], ["date_template", ""], ["level_template", ""], ["approval_template", ""], ["tracking_template", ""], ["menu", "matMenu"], ["tracking_menu", "matMenu"], [1, "relative", "w-full", "h-[calc(100%-1rem)]", "flex", "flex-col"], [1, "flex", "items-center", "justify-between"], [1, "opacity-60", "text-sm", "p-4"], [3, "dateChange", "date"], [1, "w-full", "overflow-auto", "h-1/2", "flex-1", "pt-2"], ["asset-requests", "", 1, "block", "min-w-[82rem]", "text-sm", 3, "row_clicked", "data", "filter", "columns", "empty_message", "sortable"], [1, "w-full", "h-20"], [3, "requestChange", "request"], [1, "flex", "flex-col", "px-4", "py-2", "text-left"], [1, "text-xs", "opacity-30"], [1, "flex", "flex-col", "p-4"], [4, "ngFor", "ngForOf"], [1, "font-mono", "text-sm"], [1, "p-4"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], [1, "px-4", "py-2"], ["matRipple", "", 1, "rounded-3xl", "!bg-opacity-20", "flex", "items-center", "px-2", "py-1", "w-full", "text-left", "space-x-2", 3, "click", "matMenuTriggerFor", "disabled"], [1, "text-xl"], [1, "capitalize", "flex-1"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], ["matRipple", "", 1, "bg-none", "w-full", "flex", "items-center", "px-2", "py-1", "text-left", "rounded", 3, "click", "matMenuTriggerFor", "disabled"], [1, "capitalize", "flex-1", "min-w-32"]],
    template: function AssetRequestListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "date-options", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("dateChange", function AssetRequestListComponent_Template_date_options_dateChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.setDate($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 12)(9, "simple-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("row_clicked", function AssetRequestListComponent_Template_simple_table_row_clicked_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.request = $event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, AssetRequestListComponent_ng_template_13_Template, 7, 9, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"])(15, AssetRequestListComponent_ng_template_15_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"])(17, AssetRequestListComponent_ng_template_17_Template, 3, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"])(19, AssetRequestListComponent_ng_template_19_Template, 3, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"])(21, AssetRequestListComponent_ng_template_21_Template, 22, 16, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"])(23, AssetRequestListComponent_ng_template_23_Template, 27, 5, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "asset-request-details", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("requestChange", function AssetRequestListComponent_Template_asset_request_details_requestChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.request, $event) || (ctx.request = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_6_0;
        let tmp_7_0;
        let tmp_9_0;
        let tmp_11_0;
        const user_template_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](14);
        const assets_template_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](16);
        const date_template_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);
        const level_template_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](20);
        const approval_template_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](22);
        const tracking_template_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 9, ctx.requests)) == null ? null : tmp_6_0.length, " asset request", ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 11, ctx.requests)) == null ? null : tmp_6_0.length) === "1" ? "" : "s", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("date", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 13, ctx.filters)) == null ? null : tmp_7_0.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx.requests)("filter", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 15, ctx.filters)) == null ? null : tmp_9_0.search)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction7"](32, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](19, _c0, user_template_r14), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](21, _c1, date_template_r16), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](23, _c2, assets_template_r15), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](25, _c3, level_template_r17), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](27, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](28, _c5, approval_template_r18), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](30, _c6, tracking_template_r19)))("empty_message", ((tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 17, ctx.filters)) == null ? null : tmp_11_0.search) ? "No matching asset requests" : "There are no asset requests for the currently selected date.")("sortable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("request", ctx.request);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ui_date_options_component__WEBPACK_IMPORTED_MODULE_4__.DateOptionsComponent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_6__.SimpleTableComponent, _asset_request_details_component__WEBPACK_IMPORTED_MODULE_7__.AssetRequestDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, _split_join_pipe__WEBPACK_IMPORTED_MODULE_8__.SplitJoinPipe],
    styles: ["[_nghost-%COMP%] {\n                display: block;\n                height: 100%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0LXJlcXVlc3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGNBQWM7Z0JBQ2QsWUFBWTtnQkFDWixXQUFXO1lBQ2YiLCJmaWxlIjoiYXNzZXQtcmVxdWVzdC1saXN0LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvYXNzZXQtbWFuYWdlci9hc3NldC1yZXF1ZXN0LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxjQUFjO2dCQUNkLFlBQVk7Z0JBQ1osV0FBVztZQUNmOztBQUVaLDRlQUE0ZSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 29725:
/*!**********************************************************************!*\
  !*** ./apps/concierge/src/app/asset-manager/asset-view.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssetViewComponent: () => (/* binding */ AssetViewComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/components */ 51588);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var _asset_location_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asset-location-modal.component */ 56227);
/* harmony import */ var _asset_manager_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset-manager-state.service */ 91519);
/* harmony import */ var _placeos_assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @placeos/assets */ 20949);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 49675);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-tooltip.component */ 22238);
/* harmony import */ var _libs_components_src_lib_image_carousel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/image-carousel.component */ 65277);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/simple-table.component */ 88328);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ 38223);


























const _c0 = a0 => [a0, "list", "items"];
const _c1 = () => [];
const _c2 = a0 => [a0, "manage", "group"];
const _c3 = a0 => ({
  id: a0
});
const _c4 = a0 => [a0, "manage", "asset"];
const _c5 = a0 => ({
  group_id: a0
});
const _c6 = a0 => [a0, "manage", "asset-bulk"];
const _c7 = () => ({
  key: "id",
  name: "ID"
});
const _c8 = () => ({
  key: "identifier",
  name: "Label/Friendly Name"
});
const _c9 = () => ({
  key: "serial_number",
  name: "Serial Number"
});
const _c10 = a0 => ({
  key: "actions",
  name: " ",
  content: a0,
  size: "5.5rem",
  sortable: false
});
const _c11 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
const _c12 = a0 => [a0, "manage", "purchase-order"];
const _c13 = () => ({
  key: "purchase_order_number",
  name: "PO Number"
});
const _c14 = () => ({
  key: "invoice_number",
  name: "Invoice Number"
});
const _c15 = a0 => ({
  key: "expected_service_start_date",
  name: "Service Start",
  content: a0
});
const _c16 = a0 => ({
  key: "expected_service_end_date",
  name: "Service End",
  content: a0
});
const _c17 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
const _c18 = (a0, a1) => ({
  id: a0,
  group_id: a1
});
function AssetViewComponent_div_0_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_10_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, ctx_r1.item)) == null ? null : tmp_10_0.description) || "~No Description~", " ");
  }
}
function AssetViewComponent_div_0_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "No Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function AssetViewComponent_div_0_ng_template_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 51)(1, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AssetViewComponent_div_0_ng_template_77_Template_button_click_5_listener() {
      const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3).row;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.removeAsset(row_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const row_r4 = ctx.row;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](4, _c4, ctx_r1.base_route))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](6, _c18, row_r4.id, (tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, ctx_r1.item)) == null ? null : tmp_12_0.id));
  }
}
function AssetViewComponent_div_0_ng_template_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 51)(1, "a", 54)(2, "app-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AssetViewComponent_div_0_ng_template_97_Template_button_click_4_listener() {
      const row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5).row;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.removePurchaseOrder(row_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "app-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](2, _c12, ctx_r1.base_route))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](4, _c18, row_r6.id, row_r6 == null ? null : row_r6.id));
  }
}
function AssetViewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "a", 12)(3, "div", 13)(4, "app-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 16)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Assets");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "span")(12, "app-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "span")(18, "app-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 13)(24, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](25, "image-carousel", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](26, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "div", 20)(28, "div", 21)(29, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 23)(33, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](34, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 25)(36, "app-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "button", 29)(42, "div", 30)(43, "app-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](48, AssetViewComponent_div_0_ng_container_48_Template, 3, 3, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](49, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](50, AssetViewComponent_div_0_ng_template_50_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "div", 33)(53, "div", 34)(54, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](56, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](57, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "div", 34)(59, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](61, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](63, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](64, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AssetViewComponent_div_0_Template_button_click_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.viewLocations());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](65, " View Locations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "mat-tab-group", 37)(67, "mat-tab", 38)(68, "div", 39)(69, "div", 40)(70, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](71, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](72, " Add Asset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](73, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](74, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](75, " Bulk Add Asset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](76, "simple-table", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](77, AssetViewComponent_div_0_ng_template_77_Template, 8, 9, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "mat-tab", 43)(80, "div", 39)(81, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](82, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](83, "div", 45)(84, "div", 46)(85, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](86, "Brand");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](87, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](89, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](90, "mat-tab", 47)(91, "div", 39)(92, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](93, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](94, " Add Purchase Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](95, "simple-table", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](96, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](97, AssetViewComponent_div_0_ng_template_97_Template, 7, 7, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_15_0;
    let tmp_17_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_21_0;
    let tmp_23_0;
    let tmp_25_0;
    let tmp_29_0;
    let tmp_31_0;
    let tmp_32_0;
    const no_desc_state_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](51);
    const action_template_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](78);
    const po_action_template_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](98);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const date_template_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](5);
    const delete_tooltip_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](58, _c0, ctx_r1.base_route));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](16, 26, ctx_r1.item)) == null ? null : tmp_10_0.category == null ? null : tmp_10_0.category.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]((tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](22, 28, ctx_r1.item)) == null ? null : tmp_11_0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("images", ((tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](26, 30, ctx_r1.item)) == null ? null : tmp_12_0.images) || _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](60, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (tmp_13_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](31, 32, ctx_r1.item)) == null ? null : tmp_13_0.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](61, _c2, ctx_r1.base_route))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](63, _c3, (tmp_15_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](34, 34, ctx_r1.item)) == null ? null : tmp_15_0.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("content", delete_tooltip_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (tmp_17_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](49, 36, ctx_r1.item)) == null ? null : tmp_17_0.description)("ngIfElse", no_desc_state_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Available: ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](56, 38, ctx_r1.asset_list).length - ((tmp_19_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](57, 40, ctx_r1.requests)) == null ? null : tmp_19_0.length) || 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" In Use: ", ((tmp_20_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](61, 42, ctx_r1.requests)) == null ? null : tmp_20_0.length) || 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](63, 44, ctx_r1.asset_list).length - ((tmp_21_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](64, 46, ctx_r1.requests)) == null ? null : tmp_21_0.length) !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](65, _c4, ctx_r1.base_route))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](67, _c5, (tmp_23_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](71, 48, ctx_r1.item)) == null ? null : tmp_23_0.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](69, _c6, ctx_r1.base_route))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](71, _c5, (tmp_25_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](74, 50, ctx_r1.item)) == null ? null : tmp_25_0.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("data", ctx_r1.asset_list)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction4"](78, _c11, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](73, _c7), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](74, _c8), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](75, _c9), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](76, _c10, action_template_r8)))("sortable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ((tmp_29_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](89, 52, ctx_r1.item)) == null ? null : tmp_29_0.brand) || "~None~", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](83, _c12, ctx_r1.base_route))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](85, _c5, (tmp_31_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](93, 54, ctx_r1.item)) == null ? null : tmp_31_0.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("data", (tmp_32_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](96, 56, ctx_r1.item)) == null ? null : tmp_32_0.purchase_orders)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction5"](95, _c17, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](87, _c13), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](88, _c14), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](89, _c15, date_template_r10), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](91, _c16, date_template_r10), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](93, _c10, po_action_template_r9)))("sortable", true);
  }
}
function AssetViewComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-spinner", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Loading product details...");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("diameter", 32);
  }
}
function AssetViewComponent_ng_template_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " No Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function AssetViewComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, AssetViewComponent_ng_template_4_span_3_Template, 2, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r12 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 2, data_r12 * 1000, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !data_r12);
  }
}
function AssetViewComponent_ng_template_6_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 61)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Are you sure you want to permanently delete this product?");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 62)(4, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AssetViewComponent_ng_template_6_div_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.closeTooltip());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AssetViewComponent_ng_template_6_div_0_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.deleteAsset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " Yes, delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
}
function AssetViewComponent_ng_template_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-spinner", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Deleting product details...");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("diameter", 32);
  }
}
function AssetViewComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, AssetViewComponent_ng_template_6_div_0_Template, 8, 0, "div", 60)(1, AssetViewComponent_ng_template_6_ng_template_1_Template, 4, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const delete_loading_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.deleting)("ngIfElse", delete_loading_r14);
  }
}
function AssetViewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "No purchase orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function AssetViewComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "No assets");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
class AssetViewComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  deleteAsset() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.deleting = true;
      yield _this._state.deleteActiveProduct();
      _this.deleting = false;
      _this._router.navigate([_this._state.base_route, 'list', 'items']);
      _this.closeTooltip();
    })();
  }
  closeTooltip() {
    this._tooltip_el?.close();
  }
  get code() {
    return this._org.currency_code;
  }
  get base_route() {
    return this._state.base_route;
  }
  constructor(_route, _router, _state, _dialog, _org) {
    super();
    this._route = _route;
    this._router = _router;
    this._state = _state;
    this._dialog = _dialog;
    this._org = _org;
    this.loading = false;
    this.deleting = false;
    this.item = this._state.active_product;
    this.asset_list = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this.item, this._state.extra_assets]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(([item, assets]) => {
      if (!item) return [];
      return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.unique)([...item.assets, ...assets.filter(_ => _.type_id === item.id)], 'id');
    }));
    this.requests = this._state.active_product_requests.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(req => req.filter(_ => _.date <= Date.now() && (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.addMinutes)(_.date, _.duration).valueOf() >= Date.now())));
  }
  viewLocations() {
    this._dialog.open(_asset_location_modal_component__WEBPACK_IMPORTED_MODULE_4__.AssetLocationModalComponent);
  }
  ngOnInit() {
    this.loading = true;
    this.subscription('route.params', this._route.paramMap.subscribe(params => {
      if (params.has('id')) {
        this._state.setOptions({
          active_item: params.get('id')
        });
      }
    }));
    this.timeout('no_asset', () => this._router.navigate([this._state.base_route]), 1000);
    this._state.active_product.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.first)(_ => !!_)).subscribe(() => {
      this.clearTimeout('no_asset');
      this.loading = false;
    });
  }
  removeAsset(asset) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const resp = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.openConfirmModal)({
        title: 'Delete asset',
        content: `Are you sure you want to delete this asset?`,
        confirm_text: 'Delete',
        icon: {
          content: 'delete'
        }
      }, _this2._dialog);
      if (resp.reason !== 'done') return;
      resp.loading('Deleting asset...');
      yield (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_6__.deleteAsset)(asset.id).toPromise();
      yield (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_6__.removeAssetRequests)(asset.id);
      const item = yield _this2._state.active_product.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.first)()).toPromise();
      _this2._state.setOptions({
        active_item: ''
      });
      setTimeout(() => _this2._state.setOptions({
        active_item: item.id
      }), 1000);
      resp.close();
    })();
  }
  removePurchaseOrder(asset) {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const resp = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.openConfirmModal)({
        title: 'Delete purchase order',
        content: `Are you sure you want to delete this purchase order?`,
        confirm_text: 'Delete',
        icon: {
          content: 'delete'
        }
      }, _this3._dialog);
      if (resp.reason !== 'done') return;
      resp.loading('Deleting purchase order...');
      yield (0,_placeos_assets__WEBPACK_IMPORTED_MODULE_6__.deleteAssetPurchaseOrder)(asset.id).toPromise();
      const item = yield _this3._state.active_product.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.first)()).toPromise();
      _this3._state.setOptions({
        active_item: ''
      });
      setTimeout(() => _this3._state.setOptions({
        active_item: item.id
      }), 1000);
      resp.close();
    })();
  }
  static #_ = this.ɵfac = function AssetViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AssetViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_asset_manager_state_service__WEBPACK_IMPORTED_MODULE_5__.AssetManagerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_3__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: AssetViewComponent,
    selectors: [["asset-view"]],
    viewQuery: function AssetViewComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_placeos_components__WEBPACK_IMPORTED_MODULE_2__.CustomTooltipComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx._tooltip_el = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
    decls: 12,
    vars: 4,
    consts: [["loading_state", ""], ["date_template", ""], ["delete_tooltip", ""], ["empty_invoices", ""], ["empty_items", ""], ["no_desc_state", ""], ["action_template", ""], ["po_action_template", ""], ["delete_loading", ""], ["class", "h-full w-full flex flex-col", 4, "ngIf", "ngIfElse"], [1, "h-full", "w-full", "flex", "flex-col"], [1, "flex", "items-center", "space-x-4", "p-2", "bg-base-100", "border-b", "border-base-200"], ["btn", "", "matRipple", "", 1, "inverse", 3, "routerLink"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-2"], [1, "flex", "items-center", "space-x-2", "font-medium"], [1, "text-2xl"], [1, "bg-base-100", "flex-1", "w-1/2", "h-[22.5rem]"], [3, "images"], [1, "w-[32rem]", "h-[22.5rem]", "px-4", "flex", "flex-col"], [1, "w-full", "flex", "items-center", "justify-between", "border-b", "border-base-200"], [1, "font-medium"], [1, "flex", "items-center", "text-sm"], ["btn", "", "matRipple", "", 1, "clear", 3, "routerLink", "queryParams"], [1, "flex", "items-center", "text-blue-600", "hover:text-blue-900"], [1, "text-lg"], [1, "mr-2", "underline"], [1, "w-px", "h-4", "bg-base-200"], ["btn", "", "matRipple", "", 1, "clear"], ["customTooltip", "", 1, "flex", "items-center", "text-blue-600", "hover:text-blue-900", 3, "content"], [1, "py-4", "w-full", "flex-1", "h-1/2", "overflow-auto"], [4, "ngIf", "ngIfElse"], [1, "rounded", "bg-base-100", "shadow", "border", "border-base-200", "w-full", "divide-y", "divide-base-200"], [1, "flex", "items-center", "justify-between", "p-3"], [1, "pl-2"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [1, "flex-1", "h-px"], ["label", "Assets"], [1, "max-w-[768px]", "mx-auto", "p-4"], [1, "flex", "w-full", "items-center", "space-x-2", "mb-2"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "routerLink", "queryParams"], ["empty_message", "No assets for this product", 1, "min-w-[40rem]", "block", "text-sm", 3, "data", "columns", "sortable"], ["label", "Specifications"], [1, "p-2"], ["data-table", "", 1, "bg-base-100", "border", "border-base-200"], [1, "flex", "items-center", "p-2"], ["label", "Purchase information"], ["btn", "", "matRipple", "", 1, "mb-2", 3, "routerLink", "queryParams"], ["asset-purchases", "", "empty_message", "No purchase orders for this product", 1, "min-w-[40rem]", "block", "text-sm", 3, "data", "columns", "sortable"], [1, "opacity-30"], [1, "flex", "w-full", "items-center", "justify-end", "p-2"], ["icon", "", "matRipple", "", "matTooltip", "Edit Asset", 3, "routerLink", "queryParams"], ["icon", "", "matRipple", "", "matTooltip", "Remove Asset", 1, "text-error", 3, "click"], ["icon", "", "matRipple", "", 3, "routerLink", "queryParams"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "justify-center"], [3, "diameter"], [1, "p-4"], ["class", "opacity-30", 4, "ngIf"], ["class", "p-4 bg-base-100 rounded my-2 text-center w-[18rem]", 4, "ngIf", "ngIfElse"], [1, "p-4", "bg-base-100", "rounded", "my-2", "text-center", "w-[18rem]"], [1, "flex", "items-center", "space-x-2", "mt-6"], ["btn", "", "matRipple", "", 1, "inverse", "flex-1", "w-24", 3, "click"], ["btn", "", "matRipple", "", 1, "error", "flex-1", "w-24", 3, "click"], [1, "p-4", "bg-base-100", "rounded", "my-2", "w-64", "h-36", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "p-2", "opacity-30"]],
    template: function AssetViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, AssetViewComponent_div_0_Template, 99, 101, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, AssetViewComponent_ng_template_2_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"])(4, AssetViewComponent_ng_template_4_Template, 4, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"])(6, AssetViewComponent_ng_template_6_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"])(8, AssetViewComponent_ng_template_8_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"])(10, AssetViewComponent_ng_template_10_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const loading_state_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.loading && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 2, ctx.item))("ngIfElse", loading_state_r15);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_7__.IconComponent, _libs_components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_8__.CustomTooltipComponent, _libs_components_src_lib_image_carousel_component__WEBPACK_IMPORTED_MODULE_9__.ImageCarouselComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_10__.SimpleTableComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabGroup, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n                height: 100%;\n            }\n\n            [data-table][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2n) {\n                background: #0001;\n            }\n\n            label[_ngcontent-%COMP%] {\n                width: 10rem;\n                min-width: 0;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxZQUFZO1lBQ2hCOztZQUVBO2dCQUNJLGlCQUFpQjtZQUNyQjs7WUFFQTtnQkFDSSxZQUFZO2dCQUNaLFlBQVk7WUFDaEIiLCJmaWxlIjoiYXNzZXQtdmlldy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtkYXRhLXRhYmxlXSA+IGRpdjpudGgtY2hpbGQoMm4pIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvYXNzZXQtbWFuYWdlci9hc3NldC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksWUFBWTtZQUNoQjs7WUFFQTtnQkFDSSxpQkFBaUI7WUFDckI7O1lBRUE7Z0JBQ0ksWUFBWTtnQkFDWixZQUFZO1lBQ2hCOztBQUVaLG9zQkFBb3NCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbZGF0YS10YWJsZV0gPiBkaXY6bnRoLWNoaWxkKDJuKSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTByZW07XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 30410:
/*!***************************************************************!*\
  !*** ./apps/concierge/src/app/asset-manager/duration.pipe.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DurationFormatPipe: () => (/* binding */ DurationFormatPipe)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 99134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class DurationFormatPipe {
  transform(value, short = true) {
    let duration = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.formatDuration)({
      days: Math.floor(value / (24 * 60)),
      hours: Math.floor(value / 60 % 24),
      minutes: Math.floor(value % 60)
    });
    if (!short) return duration;
    return duration.replace(' day', 'd').replace(' hour', 'hr').replace(' minute', 'min');
  }
  static #_ = this.ɵfac = function DurationFormatPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DurationFormatPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "duration",
    type: DurationFormatPipe,
    pure: true
  });
}

/***/ }),

/***/ 94020:
/*!*****************************************************************************!*\
  !*** ./apps/concierge/src/app/asset-manager/new-asset-manager.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewAssetManagerComponent: () => (/* binding */ NewAssetManagerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/app-topbar.component */ 45189);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 96843);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);




const _c0 = ["asset-manager", ""];
class NewAssetManagerComponent {
  static #_ = this.ɵfac = function NewAssetManagerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NewAssetManagerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NewAssetManagerComponent,
    selectors: [["", "asset-manager", ""]],
    attrs: _c0,
    decls: 5,
    vars: 0,
    consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"]],
    template: function NewAssetManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__.ApplicationTopbarComponent, _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.ApplicationSidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1hc3NldC1tYW5hZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCwyQkFBMkI7WUFDL0IiLCJmaWxlIjoibmV3LWFzc2V0LW1hbmFnZXIuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvYXNzZXQtbWFuYWdlci9uZXctYXNzZXQtbWFuYWdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsMkJBQTJCO1lBQy9COztBQUVaLG9vQkFBb29CIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 50727:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/asset-manager/split-join.pipe.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitJoinPipe: () => (/* binding */ SplitJoinPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class SplitJoinPipe {
  transform(value, split = '_', join = ' ') {
    return (value || '').split(split).join(join);
  }
  static #_ = this.ɵfac = function SplitJoinPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SplitJoinPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "splitjoin",
    type: SplitJoinPipe,
    pure: true
  });
}

/***/ }),

/***/ 85616:
/*!************************************!*\
  !*** ./libs/bookings/src/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Booking: () => (/* reexport safe */ _lib_booking_class__WEBPACK_IMPORTED_MODULE_2__.Booking),
/* harmony export */   BookingCardComponent: () => (/* reexport safe */ _lib_booking_card_component__WEBPACK_IMPORTED_MODULE_8__.BookingCardComponent),
/* harmony export */   BookingDetailsModalComponent: () => (/* reexport safe */ _lib_booking_details_modal_component__WEBPACK_IMPORTED_MODULE_7__.BookingDetailsModalComponent),
/* harmony export */   BookingFormService: () => (/* reexport safe */ _lib_booking_form_service__WEBPACK_IMPORTED_MODULE_1__.BookingFormService),
/* harmony export */   DesksService: () => (/* reexport safe */ _lib_desk_service__WEBPACK_IMPORTED_MODULE_5__.DesksService),
/* harmony export */   FAV_PARKING_KEY: () => (/* reexport safe */ _lib_parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_9__.FAV_PARKING_KEY),
/* harmony export */   LockersService: () => (/* reexport safe */ _lib_lockers_service__WEBPACK_IMPORTED_MODULE_6__.LockersService),
/* harmony export */   ParkingService: () => (/* reexport safe */ _lib_parking_service__WEBPACK_IMPORTED_MODULE_10__.ParkingService),
/* harmony export */   ParkingSpaceSelectModalComponent: () => (/* reexport safe */ _lib_parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_9__.ParkingSpaceSelectModalComponent),
/* harmony export */   RecurrenceDays: () => (/* reexport safe */ _lib_booking_class__WEBPACK_IMPORTED_MODULE_2__.RecurrenceDays),
/* harmony export */   SharedBookingsModule: () => (/* reexport safe */ _lib_bookings_module__WEBPACK_IMPORTED_MODULE_0__.SharedBookingsModule),
/* harmony export */   approveBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.approveBooking),
/* harmony export */   approveBookingInstance: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.approveBookingInstance),
/* harmony export */   bookedResourceList: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.bookedResourceList),
/* harmony export */   bookingAddGuest: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.bookingAddGuest),
/* harmony export */   bookingRemoveGuest: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.bookingRemoveGuest),
/* harmony export */   checkinBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.checkinBooking),
/* harmony export */   checkinBookingAttendee: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.checkinBookingAttendee),
/* harmony export */   checkinBookingGuest: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.checkinBookingGuest),
/* harmony export */   checkinBookingInstance: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.checkinBookingInstance),
/* harmony export */   createBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.createBooking),
/* harmony export */   createBookingsForEvent: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.createBookingsForEvent),
/* harmony export */   findNearbyFeature: () => (/* reexport safe */ _lib_booking_utilities__WEBPACK_IMPORTED_MODULE_3__.findNearbyFeature),
/* harmony export */   generateBookingForm: () => (/* reexport safe */ _lib_booking_utilities__WEBPACK_IMPORTED_MODULE_3__.generateBookingForm),
/* harmony export */   isResourceAvailable: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.isResourceAvailable),
/* harmony export */   newBookingFromCalendarEvent: () => (/* reexport safe */ _lib_booking_utilities__WEBPACK_IMPORTED_MODULE_3__.newBookingFromCalendarEvent),
/* harmony export */   queryAllBookings: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryAllBookings),
/* harmony export */   queryBookingGuests: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryBookingGuests),
/* harmony export */   queryBookings: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryBookings),
/* harmony export */   queryPagedBookings: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryPagedBookings),
/* harmony export */   queryResourceAvailability: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryResourceAvailability),
/* harmony export */   rejectBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.rejectBooking),
/* harmony export */   rejectBookingInstance: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.rejectBookingInstance),
/* harmony export */   removeBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.removeBooking),
/* harmony export */   removeBookingInstance: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.removeBookingInstance),
/* harmony export */   saveBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.saveBooking),
/* harmony export */   setBookingState: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.setBookingState),
/* harmony export */   showBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.showBooking),
/* harmony export */   updateBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.updateBooking),
/* harmony export */   updateBookingInductionStatus: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.updateBookingInductionStatus),
/* harmony export */   updateBookingInstance: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.updateBookingInstance)
/* harmony export */ });
/* harmony import */ var _lib_bookings_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bookings.module */ 38742);
/* harmony import */ var _lib_booking_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/booking-form.service */ 18379);
/* harmony import */ var _lib_booking_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/booking.class */ 53857);
/* harmony import */ var _lib_booking_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/booking.utilities */ 17141);
/* harmony import */ var _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/bookings.fn */ 18026);
/* harmony import */ var _lib_desk_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/desk.service */ 74350);
/* harmony import */ var _lib_lockers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/lockers.service */ 98796);
/* harmony import */ var _lib_booking_details_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/booking-details-modal.component */ 1781);
/* harmony import */ var _lib_booking_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/booking-card.component */ 27547);
/* harmony import */ var _lib_parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/parking-select-modal/parking-select-modal.component */ 67642);
/* harmony import */ var _lib_parking_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/parking.service */ 1593);













/***/ }),

/***/ 74350:
/*!***********************************************!*\
  !*** ./libs/bookings/src/lib/desk.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesksService: () => (/* binding */ DesksService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 99908);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/organisation/src/lib/organisation.service */ 19863);
/* harmony import */ var _bookings_fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookings.fn */ 18026);
/* harmony import */ var _desk_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desk-confirm-modal.component */ 3367);
/* harmony import */ var _desk_questions_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desk-questions-modal.component */ 67254);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 12587);












class DesksService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this.can_set_date = true;
    this.error_on_host = true;
  }
  bookDesk({
    desks,
    host,
    reason,
    attendees,
    date
  }) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.error_on_host && !host) {
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('You need to select a host to book a desk.');
      } else {
        host = host || (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)();
      }
      reason = reason || '';
      const level = _this._org.levelWithID(desks[0].zone instanceof Array ? desks[0].zone : [desks[0].zone?.id]);
      let ref = _this._dialog.open(_desk_questions_modal_component__WEBPACK_IMPORTED_MODULE_5__.DeskQuestionsModalComponent);
      let success = yield Promise.race([ref.componentInstance.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.first)(_ => _.reason === 'done')).toPromise(), ref.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_ => null)).toPromise()]);
      if (!success) return;
      ref.close();
      ref = _this._dialog.open(_desk_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__.DeskConfirmModalComponent, {
        data: {
          host,
          desks,
          date: date ? new Date(date) : new Date(),
          reason,
          level,
          can_set_date: _this.can_set_date
        }
      });
      success = yield Promise.race([ref.componentInstance.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.first)(_ => _.reason === 'done')).toPromise(), ref.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_ => null)).toPromise()]);
      if (!success) return;
      host = ref.componentInstance.host || host;
      date = ref.componentInstance.date || date;
      reason = ref.componentInstance.reason || reason;
      if (!host) {
        ref.close();
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('You need to select a host to book a desk. ');
      }
      ref.componentInstance.loading = 'Checking for existing desk bookings...';
      const bookings = yield (0,_bookings_fn__WEBPACK_IMPORTED_MODULE_3__.queryBookings)({
        type: 'desk',
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_9__.startOfDay)(date || new Date())),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.endOfDay)(date || new Date()))
      }).toPromise();
      const desk_list = bookings.filter(d => d.user_email.toLowerCase() === host.email.toLowerCase());
      if (desk_list?.length) {
        ref.close();
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('You currently already have a desk booked for the selected date.');
      }
      ref.componentInstance.loading = 'Booking desk...';
      const users = [host, ...(attendees || [])];
      yield Promise.all([desks.map((desk, idx) => _this.makeDeskBooking(desk, host, date.valueOf() || new Date().valueOf(), reason, users[idx]))]);
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Successfully booked desk');
      ref.close();
      return true;
    })();
  }
  makeDeskBooking(desk, host, date, reason, for_user = null) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const location = `${desk.zone?.name}-${desk.id}`;
      const level = _this2._org.levelWithID(desk.zone instanceof Array ? desk.zone : [desk.zone?.id]);
      const zones = desk.zone?.id ? [desk.zone?.id, level?.parent_id] : [level?.parent_id];
      const booking_data = {
        booking_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_9__.startOfDay)(date)),
        user_id: for_user?.id || host.id,
        user_name: for_user?.name || host.name,
        user_email: for_user?.email || host.email,
        booking_end: Math.floor((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.endOfDay)(date).valueOf() / 1000),
        asset_id: desk.id,
        asset_name: desk.name,
        title: reason,
        description: location,
        zones,
        booking_type: 'desk',
        extension_data: {
          map_id: desk?.map_id || desk?.id,
          groups: desk.groups,
          for_user: for_user?.email
        }
      };
      return (0,_bookings_fn__WEBPACK_IMPORTED_MODULE_3__.saveBooking)(booking_data).toPromise();
    })();
  }
  static #_ = this.ɵfac = function DesksService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DesksService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: DesksService,
    factory: DesksService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 63985:
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/stepper.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdkStep: () => (/* binding */ CdkStep),
/* harmony export */   CdkStepHeader: () => (/* binding */ CdkStepHeader),
/* harmony export */   CdkStepLabel: () => (/* binding */ CdkStepLabel),
/* harmony export */   CdkStepper: () => (/* binding */ CdkStepper),
/* harmony export */   CdkStepperModule: () => (/* binding */ CdkStepperModule),
/* harmony export */   CdkStepperNext: () => (/* binding */ CdkStepperNext),
/* harmony export */   CdkStepperPrevious: () => (/* binding */ CdkStepperPrevious),
/* harmony export */   STEPPER_GLOBAL_OPTIONS: () => (/* binding */ STEPPER_GLOBAL_OPTIONS),
/* harmony export */   STEP_STATE: () => (/* binding */ STEP_STATE),
/* harmony export */   StepperSelectionEvent: () => (/* binding */ StepperSelectionEvent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 72102);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ 63680);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ 74879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ 17699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 33119);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 89273);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 67464);









const _c0 = ["*"];
function CdkStep_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
class CdkStepHeader {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
  /** Focuses the step header. */
  focus() {
    this._elementRef.nativeElement.focus();
  }
  static #_ = this.ɵfac = function CdkStepHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CdkStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CdkStepHeader,
    selectors: [["", "cdkStepHeader", ""]],
    hostAttrs: ["role", "tab"],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkStepHeader]',
      host: {
        'role': 'tab'
      },
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }], null);
})();
class CdkStepLabel {
  constructor( /** @docs-private */template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function CdkStepLabel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CdkStepLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CdkStepLabel,
    selectors: [["", "cdkStepLabel", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepLabel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkStepLabel]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();

/** Used to generate unique ID for each stepper component. */
let nextId = 0;
/** Change event emitted on selection changes. */
class StepperSelectionEvent {}
/** Enum to represent the different states of the steps. */
const STEP_STATE = {
  NUMBER: 'number',
  EDIT: 'edit',
  DONE: 'done',
  ERROR: 'error'
};
/** InjectionToken that can be used to specify the global stepper options. */
const STEPPER_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('STEPPER_GLOBAL_OPTIONS');
class CdkStep {
  /** Whether step is marked as completed. */
  get completed() {
    return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
  }
  set completed(value) {
    this._completedOverride = value;
  }
  _getDefaultCompleted() {
    return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
  }
  /** Whether step has an error. */
  get hasError() {
    return this._customError == null ? this._getDefaultError() : this._customError;
  }
  set hasError(value) {
    this._customError = value;
  }
  _getDefaultError() {
    return this.stepControl && this.stepControl.invalid && this.interacted;
  }
  constructor(_stepper, stepperOptions) {
    this._stepper = _stepper;
    /** Whether user has attempted to move away from the step. */
    this.interacted = false;
    /** Emits when the user has attempted to move away from the step. */
    this.interactedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Whether the user can return to this step once it has been marked as completed. */
    this.editable = true;
    /** Whether the completion of step is optional. */
    this.optional = false;
    this._completedOverride = null;
    this._customError = null;
    this._stepperOptions = stepperOptions ? stepperOptions : {};
    this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
  }
  /** Selects this step component. */
  select() {
    this._stepper.selected = this;
  }
  /** Resets the step to its initial state. Note that this includes resetting form data. */
  reset() {
    this.interacted = false;
    if (this._completedOverride != null) {
      this._completedOverride = false;
    }
    if (this._customError != null) {
      this._customError = false;
    }
    if (this.stepControl) {
      this.stepControl.reset();
    }
  }
  ngOnChanges() {
    // Since basically all inputs of the MatStep get proxied through the view down to the
    // underlying MatStepHeader, we have to make sure that change detection runs correctly.
    this._stepper._stateChanged();
  }
  _markAsInteracted() {
    if (!this.interacted) {
      this.interacted = true;
      this.interactedStream.emit(this);
    }
  }
  /** Determines whether the error state can be shown. */
  _showError() {
    // We want to show the error state either if the user opted into/out of it using the
    // global options, or if they've explicitly set it through the `hasError` input.
    return this._stepperOptions.showError ?? this._customError != null;
  }
  static #_ = this.ɵfac = function CdkStep_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CdkStep)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CdkStepper)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](STEPPER_GLOBAL_OPTIONS, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CdkStep,
    selectors: [["cdk-step"]],
    contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkStepLabel, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
      }
    },
    viewQuery: function CdkStep_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
      }
    },
    inputs: {
      stepControl: "stepControl",
      label: "label",
      errorMessage: "errorMessage",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      state: "state",
      editable: [2, "editable", "editable", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      optional: [2, "optional", "optional", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      completed: [2, "completed", "completed", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      hasError: [2, "hasError", "hasError", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
    },
    outputs: {
      interactedStream: "interacted"
    },
    exportAs: ["cdkStep"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function CdkStep_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CdkStep_ng_template_0_Template, 1, 0, "ng-template");
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStep, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'cdk-step',
      exportAs: 'cdkStep',
      template: '<ng-template><ng-content></ng-content></ng-template>',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], () => [{
    type: CdkStepper,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CdkStepper)]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [STEPPER_GLOBAL_OPTIONS]
    }]
  }], {
    stepLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [CdkStepLabel]
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
        static: true
      }]
    }],
    stepControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    interactedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['interacted']
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    errorMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    state: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    editable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    optional: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    completed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    hasError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }]
  });
})();
class CdkStepper {
  /** The index of the selected step. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(index) {
    if (this.steps && this._steps) {
      // Ensure that the index can't be out of bounds.
      if (!this._isValidIndex(index) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
      }
      this.selected?._markAsInteracted();
      if (this._selectedIndex !== index && !this._anyControlsInvalidOrPending(index) && (index >= this._selectedIndex || this.steps.toArray()[index].editable)) {
        this._updateSelectedItemIndex(index);
      }
    } else {
      this._selectedIndex = index;
    }
  }
  /** The step that is selected. */
  get selected() {
    return this.steps ? this.steps.toArray()[this.selectedIndex] : undefined;
  }
  set selected(step) {
    this.selectedIndex = step && this.steps ? this.steps.toArray().indexOf(step) : -1;
  }
  /** Orientation of the stepper. */
  get orientation() {
    return this._orientation;
  }
  set orientation(value) {
    // This is a protected method so that `MatStepper` can hook into it.
    this._orientation = value;
    if (this._keyManager) {
      this._keyManager.withVerticalOrientation(value === 'vertical');
    }
  }
  constructor(_dir, _changeDetectorRef, _elementRef) {
    this._dir = _dir;
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    /** Emits when the component is destroyed. */
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Steps that belong to the current stepper, excluding ones from nested steppers. */
    this.steps = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    /** List of step headers sorted based on their DOM order. */
    this._sortedHeaders = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    /** Whether the validity of previous steps should be checked or not. */
    this.linear = false;
    this._selectedIndex = 0;
    /** Event emitted when the selected step has changed. */
    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Output to support two-way binding on `[(selectedIndex)]` */
    this.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._orientation = 'horizontal';
    this._groupId = nextId++;
  }
  ngAfterContentInit() {
    this._steps.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)(this._steps), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this._destroyed)).subscribe(steps => {
      this.steps.reset(steps.filter(step => step._stepper === this));
      this.steps.notifyOnChanges();
    });
  }
  ngAfterViewInit() {
    // If the step headers are defined outside of the `ngFor` that renders the steps, like in the
    // Material stepper, they won't appear in the `QueryList` in the same order as they're
    // rendered in the DOM which will lead to incorrect keyboard navigation. We need to sort
    // them manually to ensure that they're correct. Alternatively, we can change the Material
    // template to inline the headers in the `ngFor`, but that'll result in a lot of
    // code duplication. See #23539.
    this._stepHeader.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)(this._stepHeader), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this._destroyed)).subscribe(headers => {
      this._sortedHeaders.reset(headers.toArray().sort((a, b) => {
        const documentPosition = a._elementRef.nativeElement.compareDocumentPosition(b._elementRef.nativeElement);
        // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        // tslint:disable-next-line:no-bitwise
        return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      }));
      this._sortedHeaders.notifyOnChanges();
    });
    // Note that while the step headers are content children by default, any components that
    // extend this one might have them as view children. We initialize the keyboard handling in
    // AfterViewInit so we're guaranteed for both view and content children to be defined.
    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusKeyManager(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation === 'vertical');
    (this._dir ? this._dir.change : (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)(this._layoutDirection()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this._destroyed)).subscribe(direction => this._keyManager.withHorizontalOrientation(direction));
    this._keyManager.updateActiveItem(this._selectedIndex);
    // No need to `takeUntil` here, because we're the ones destroying `steps`.
    this.steps.changes.subscribe(() => {
      if (!this.selected) {
        this._selectedIndex = Math.max(this._selectedIndex - 1, 0);
      }
    });
    // The logic which asserts that the selected index is within bounds doesn't run before the
    // steps are initialized, because we don't how many steps there are yet so we may have an
    // invalid index on init. If that's the case, auto-correct to the default so we don't throw.
    if (!this._isValidIndex(this._selectedIndex)) {
      this._selectedIndex = 0;
    }
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this.steps.destroy();
    this._sortedHeaders.destroy();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Selects and focuses the next step in list. */
  next() {
    this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
  }
  /** Selects and focuses the previous step in list. */
  previous() {
    this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
  }
  /** Resets the stepper to its initial state. Note that this includes clearing form data. */
  reset() {
    this._updateSelectedItemIndex(0);
    this.steps.forEach(step => step.reset());
    this._stateChanged();
  }
  /** Returns a unique id for each step label element. */
  _getStepLabelId(i) {
    return `cdk-step-label-${this._groupId}-${i}`;
  }
  /** Returns unique id for each step content element. */
  _getStepContentId(i) {
    return `cdk-step-content-${this._groupId}-${i}`;
  }
  /** Marks the component to be change detected. */
  _stateChanged() {
    this._changeDetectorRef.markForCheck();
  }
  /** Returns position state of the step with the given index. */
  _getAnimationDirection(index) {
    const position = index - this._selectedIndex;
    if (position < 0) {
      return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
    } else if (position > 0) {
      return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
    }
    return 'current';
  }
  /** Returns the type of icon to be displayed. */
  _getIndicatorType(index, state = STEP_STATE.NUMBER) {
    const step = this.steps.toArray()[index];
    const isCurrentStep = this._isCurrentStep(index);
    return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) : this._getGuidelineLogic(step, isCurrentStep, state);
  }
  _getDefaultIndicatorLogic(step, isCurrentStep) {
    if (step._showError() && step.hasError && !isCurrentStep) {
      return STEP_STATE.ERROR;
    } else if (!step.completed || isCurrentStep) {
      return STEP_STATE.NUMBER;
    } else {
      return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
    }
  }
  _getGuidelineLogic(step, isCurrentStep, state = STEP_STATE.NUMBER) {
    if (step._showError() && step.hasError && !isCurrentStep) {
      return STEP_STATE.ERROR;
    } else if (step.completed && !isCurrentStep) {
      return STEP_STATE.DONE;
    } else if (step.completed && isCurrentStep) {
      return state;
    } else if (step.editable && isCurrentStep) {
      return STEP_STATE.EDIT;
    } else {
      return state;
    }
  }
  _isCurrentStep(index) {
    return this._selectedIndex === index;
  }
  /** Returns the index of the currently-focused step header. */
  _getFocusIndex() {
    return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
  }
  _updateSelectedItemIndex(newIndex) {
    const stepsArray = this.steps.toArray();
    this.selectionChange.emit({
      selectedIndex: newIndex,
      previouslySelectedIndex: this._selectedIndex,
      selectedStep: stepsArray[newIndex],
      previouslySelectedStep: stepsArray[this._selectedIndex]
    });
    // If focus is inside the stepper, move it to the next header, otherwise it may become
    // lost when the active step content is hidden. We can't be more granular with the check
    // (e.g. checking whether focus is inside the active step), because we don't have a
    // reference to the elements that are rendering out the content.
    this._containsFocus() ? this._keyManager.setActiveItem(newIndex) : this._keyManager.updateActiveItem(newIndex);
    this._selectedIndex = newIndex;
    this.selectedIndexChange.emit(this._selectedIndex);
    this._stateChanged();
  }
  _onKeydown(event) {
    const hasModifier = (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.hasModifierKey)(event);
    const keyCode = event.keyCode;
    const manager = this._keyManager;
    if (manager.activeItemIndex != null && !hasModifier && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.SPACE || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.ENTER)) {
      this.selectedIndex = manager.activeItemIndex;
      event.preventDefault();
    } else {
      manager.setFocusOrigin('keyboard').onKeydown(event);
    }
  }
  _anyControlsInvalidOrPending(index) {
    if (this.linear && index >= 0) {
      return this.steps.toArray().slice(0, index).some(step => {
        const control = step.stepControl;
        const isIncomplete = control ? control.invalid || control.pending || !step.interacted : !step.completed;
        return isIncomplete && !step.optional && !step._completedOverride;
      });
    }
    return false;
  }
  _layoutDirection() {
    return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
  }
  /** Checks whether the stepper contains the focused element. */
  _containsFocus() {
    const stepperElement = this._elementRef.nativeElement;
    const focusedElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__._getFocusedElementPierceShadowDom)();
    return stepperElement === focusedElement || stepperElement.contains(focusedElement);
  }
  /** Checks whether the passed-in index is a valid step index. */
  _isValidIndex(index) {
    return index > -1 && (!this.steps || index < this.steps.length);
  }
  static #_ = this.ɵfac = function CdkStepper_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CdkStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CdkStepper,
    selectors: [["", "cdkStepper", ""]],
    contentQueries: function CdkStepper_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkStep, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkStepHeader, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._steps = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
      }
    },
    inputs: {
      linear: [2, "linear", "linear", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      selectedIndex: [2, "selectedIndex", "selectedIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      selected: "selected",
      orientation: "orientation"
    },
    outputs: {
      selectionChange: "selectionChange",
      selectedIndexChange: "selectedIndexChange"
    },
    exportAs: ["cdkStepper"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkStepper]',
      exportAs: 'cdkStepper',
      standalone: true
    }]
  }], () => [{
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }], {
    _steps: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [CdkStep, {
        descendants: true
      }]
    }],
    _stepHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [CdkStepHeader, {
        descendants: true
      }]
    }],
    linear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    selectedIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/** Button that moves to the next step in a stepper workflow. */
class CdkStepperNext {
  constructor(_stepper) {
    this._stepper = _stepper;
    /** Type of the next button. Defaults to "submit" if not specified. */
    this.type = 'submit';
  }
  static #_ = this.ɵfac = function CdkStepperNext_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CdkStepperNext)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkStepper));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CdkStepperNext,
    selectors: [["button", "cdkStepperNext", ""]],
    hostVars: 1,
    hostBindings: function CdkStepperNext_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdkStepperNext_click_HostBindingHandler() {
          return ctx._stepper.next();
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
      }
    },
    inputs: {
      type: "type"
    },
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepperNext, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'button[cdkStepperNext]',
      host: {
        '[type]': 'type',
        '(click)': '_stepper.next()'
      },
      standalone: true
    }]
  }], () => [{
    type: CdkStepper
  }], {
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/** Button that moves to the previous step in a stepper workflow. */
class CdkStepperPrevious {
  constructor(_stepper) {
    this._stepper = _stepper;
    /** Type of the previous button. Defaults to "button" if not specified. */
    this.type = 'button';
  }
  static #_ = this.ɵfac = function CdkStepperPrevious_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CdkStepperPrevious)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkStepper));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CdkStepperPrevious,
    selectors: [["button", "cdkStepperPrevious", ""]],
    hostVars: 1,
    hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdkStepperPrevious_click_HostBindingHandler() {
          return ctx._stepper.previous();
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
      }
    },
    inputs: {
      type: "type"
    },
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepperPrevious, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'button[cdkStepperPrevious]',
      host: {
        '[type]': 'type',
        '(click)': '_stepper.previous()'
      },
      standalone: true
    }]
  }], () => [{
    type: CdkStepper
  }], {
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class CdkStepperModule {
  static #_ = this.ɵfac = function CdkStepperModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CdkStepperModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: CdkStepperModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.BidiModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepperModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.BidiModule, CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious],
      exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 56622:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/stepper.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_STEPPER_INTL_PROVIDER: () => (/* binding */ MAT_STEPPER_INTL_PROVIDER),
/* harmony export */   MAT_STEPPER_INTL_PROVIDER_FACTORY: () => (/* binding */ MAT_STEPPER_INTL_PROVIDER_FACTORY),
/* harmony export */   MatStep: () => (/* binding */ MatStep),
/* harmony export */   MatStepContent: () => (/* binding */ MatStepContent),
/* harmony export */   MatStepHeader: () => (/* binding */ MatStepHeader),
/* harmony export */   MatStepLabel: () => (/* binding */ MatStepLabel),
/* harmony export */   MatStepper: () => (/* binding */ MatStepper),
/* harmony export */   MatStepperIcon: () => (/* binding */ MatStepperIcon),
/* harmony export */   MatStepperIntl: () => (/* binding */ MatStepperIntl),
/* harmony export */   MatStepperModule: () => (/* binding */ MatStepperModule),
/* harmony export */   MatStepperNext: () => (/* binding */ MatStepperNext),
/* harmony export */   MatStepperPrevious: () => (/* binding */ MatStepperPrevious),
/* harmony export */   matStepperAnimations: () => (/* binding */ matStepperAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/stepper */ 63985);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 72102);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 33119);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2842);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/bidi */ 63680);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 89273);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 67464);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 6109);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/platform */ 17699);














function MatStepHeader_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", ctx_r0._getIconContext());
  }
}
function MatStepHeader_Conditional_4_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0._getDefaultTextForState(ctx_r0.state));
  }
}
function MatStepHeader_Conditional_4_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0._intl.completedLabel);
  }
}
function MatStepHeader_Conditional_4_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0._intl.editableLabel);
  }
}
function MatStepHeader_Conditional_4_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatStepHeader_Conditional_4_Case_1_Conditional_0_Template, 2, 1, "span", 8)(1, MatStepHeader_Conditional_4_Case_1_Conditional_1_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r0.state === "done" ? 0 : ctx_r0.state === "edit" ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0._getDefaultTextForState(ctx_r0.state));
  }
}
function MatStepHeader_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatStepHeader_Conditional_4_Case_0_Template, 2, 1, "span", 7)(1, MatStepHeader_Conditional_4_Case_1_Template, 4, 2, "mat-icon", 7);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((tmp_1_0 = ctx_r0.state) === "number" ? 0 : 1);
  }
}
function MatStepHeader_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.template);
  }
}
function MatStepHeader_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
  }
}
function MatStepHeader_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0._intl.optionalLabel);
  }
}
function MatStepHeader_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
const _c0 = ["*"];
function MatStep_ng_template_0_ng_template_1_Template(rf, ctx) {}
function MatStep_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatStep_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx_r0._portal);
  }
}
const _c1 = (a0, a1) => ({
  step: a0,
  i: a1
});
const _c2 = a0 => ({
  "animationDuration": a0
});
const _c3 = (a0, a1) => ({
  "value": a0,
  "params": a1
});
function MatStepper_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
function MatStepper_Case_1_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
  }
}
function MatStepper_Case_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatStepper_Case_1_For_3_Conditional_1_Template, 1, 0, "div", 6);
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const ɵ$index_8_r2 = ctx.$index;
    const ɵ$count_8_r3 = ctx.$count;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const stepTemplate_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", stepTemplate_r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, step_r1, ɵ$index_8_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!(ɵ$index_8_r2 === ɵ$count_8_r3 - 1) ? 1 : -1);
  }
}
function MatStepper_Case_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@horizontalStepTransition.done", function MatStepper_Case_1_For_6_Template_div_animation_horizontalStepTransition_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5._animationDone.next($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const step_r7 = ctx.$implicit;
    const ɵ$index_16_r8 = ctx.$index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-horizontal-stepper-content-inactive", ctx_r5.selectedIndex !== ɵ$index_16_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@horizontalStepTransition", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c3, ctx_r5._getAnimationDirection(ɵ$index_16_r8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx_r5._getAnimationDuration())))("id", ctx_r5._getStepContentId(ɵ$index_16_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx_r5._getStepLabelId(ɵ$index_16_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", step_r7.content);
  }
}
function MatStepper_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](2, MatStepper_Case_1_For_3_Template, 2, 6, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](5, MatStepper_Case_1_For_6_Template, 2, 11, "div", 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx_r5.steps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx_r5.steps);
  }
}
function MatStepper_Case_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10)(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@verticalStepTransition.done", function MatStepper_Case_2_For_1_Template_div_animation_verticalStepTransition_done_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5._animationDone.next($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const step_r10 = ctx.$implicit;
    const ɵ$index_22_r11 = ctx.$index;
    const ɵ$count_22_r12 = ctx.$count;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const stepTemplate_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", stepTemplate_r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, step_r10, ɵ$index_22_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-stepper-vertical-line", !(ɵ$index_22_r11 === ɵ$count_22_r12 - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-vertical-stepper-content-inactive", ctx_r5.selectedIndex !== ɵ$index_22_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@verticalStepTransition", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c3, ctx_r5._getAnimationDirection(ɵ$index_22_r11), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, ctx_r5._getAnimationDuration())))("id", ctx_r5._getStepContentId(ɵ$index_22_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx_r5._getStepLabelId(ɵ$index_22_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", step_r10.content);
  }
}
function MatStepper_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](0, MatStepper_Case_2_For_1_Template, 6, 18, "div", 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx_r5.steps);
  }
}
function MatStepper_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-step-header", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatStepper_ng_template_3_Template_mat_step_header_click_0_listener() {
      const step_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13).step;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](step_r14.select());
    })("keydown", function MatStepper_ng_template_3_Template_mat_step_header_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5._onKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const step_r14 = ctx.step;
    const i_r15 = ctx.i;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-horizontal-stepper-header", ctx_r5.orientation === "horizontal")("mat-vertical-stepper-header", ctx_r5.orientation === "vertical");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabIndex", ctx_r5._getFocusIndex() === i_r15 ? 0 : -1)("id", ctx_r5._getStepLabelId(i_r15))("index", i_r15)("state", ctx_r5._getIndicatorType(i_r15, step_r14.state))("label", step_r14.stepLabel || step_r14.label)("selected", ctx_r5.selectedIndex === i_r15)("active", ctx_r5._stepIsNavigable(i_r15, step_r14))("optional", step_r14.optional)("errorMessage", step_r14.errorMessage)("iconOverrides", ctx_r5._iconOverrides)("disableRipple", ctx_r5.disableRipple || !ctx_r5._stepIsNavigable(i_r15, step_r14))("color", step_r14.color || ctx_r5.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-posinset", i_r15 + 1)("aria-setsize", ctx_r5.steps.length)("aria-controls", ctx_r5._getStepContentId(i_r15))("aria-selected", ctx_r5.selectedIndex == i_r15)("aria-label", step_r14.ariaLabel || null)("aria-labelledby", !step_r14.ariaLabel && step_r14.ariaLabelledby ? step_r14.ariaLabelledby : null)("aria-disabled", ctx_r5._stepIsNavigable(i_r15, step_r14) ? null : true);
  }
}
class MatStepLabel extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepLabel {
  static #_ = this.ɵfac = /* @__PURE__ */(() => {
    let ɵMatStepLabel_BaseFactory;
    return function MatStepLabel_Factory(__ngFactoryType__) {
      return (ɵMatStepLabel_BaseFactory || (ɵMatStepLabel_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatStepLabel)))(__ngFactoryType__ || MatStepLabel);
    };
  })();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatStepLabel,
    selectors: [["", "matStepLabel", ""]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepLabel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matStepLabel]',
      standalone: true
    }]
  }], null, null);
})();

/** Stepper data that is required for internationalization. */
class MatStepperIntl {
  constructor() {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Label that is rendered below optional steps. */
    this.optionalLabel = 'Optional';
    /** Label that is used to indicate step as completed to screen readers. */
    this.completedLabel = 'Completed';
    /** Label that is used to indicate step as editable to screen readers. */
    this.editableLabel = 'Editable';
  }
  static #_ = this.ɵfac = function MatStepperIntl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatStepperIntl)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MatStepperIntl,
    factory: MatStepperIntl.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepperIntl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/** @docs-private */
function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatStepperIntl();
}
/** @docs-private */
const MAT_STEPPER_INTL_PROVIDER = {
  provide: MatStepperIntl,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatStepperIntl]],
  useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
};
class MatStepHeader extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepHeader {
  constructor(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
    super(_elementRef);
    this._intl = _intl;
    this._focusMonitor = _focusMonitor;
    this._intlSubscription = _intl.changes.subscribe(() => changeDetectorRef.markForCheck());
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true);
  }
  ngOnDestroy() {
    this._intlSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  /** Focuses the step header. */
  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._elementRef, origin, options);
    } else {
      this._elementRef.nativeElement.focus(options);
    }
  }
  /** Returns string label of given step if it is a text label. */
  _stringLabel() {
    return this.label instanceof MatStepLabel ? null : this.label;
  }
  /** Returns MatStepLabel if the label of given step is a template label. */
  _templateLabel() {
    return this.label instanceof MatStepLabel ? this.label : null;
  }
  /** Returns the host HTML element. */
  _getHostElement() {
    return this._elementRef.nativeElement;
  }
  /** Template context variables that are exposed to the `matStepperIcon` instances. */
  _getIconContext() {
    return {
      index: this.index,
      active: this.active,
      optional: this.optional
    };
  }
  _getDefaultTextForState(state) {
    if (state == 'number') {
      return `${this.index + 1}`;
    }
    if (state == 'edit') {
      return 'create';
    }
    if (state == 'error') {
      return 'warning';
    }
    return state;
  }
  static #_ = this.ɵfac = function MatStepHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatStepperIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatStepHeader,
    selectors: [["mat-step-header"]],
    hostAttrs: ["role", "tab", 1, "mat-step-header"],
    hostVars: 2,
    hostBindings: function MatStepHeader_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mat-" + (ctx.color || "primary"));
      }
    },
    inputs: {
      state: "state",
      label: "label",
      errorMessage: "errorMessage",
      iconOverrides: "iconOverrides",
      index: "index",
      selected: "selected",
      active: "active",
      optional: "optional",
      disableRipple: "disableRipple",
      color: "color"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 17,
    consts: [["matRipple", "", 1, "mat-step-header-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-step-label"], [1, "mat-step-text-label"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"], ["aria-hidden", "true"], [1, "cdk-visually-hidden"], [3, "ngTemplateOutlet"]],
    template: function MatStepHeader_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div")(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatStepHeader_Conditional_3_Template, 1, 2, "ng-container", 2)(4, MatStepHeader_Conditional_4_Template, 2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MatStepHeader_Conditional_6_Template, 2, 1, "div", 4)(7, MatStepHeader_Conditional_7_Template, 2, 1, "div", 4)(8, MatStepHeader_Conditional_8_Template, 2, 1, "div", 5)(9, MatStepHeader_Conditional_9_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_8_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mat-step-icon-state-", ctx.state, " mat-step-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-step-icon-selected", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.iconOverrides && ctx.iconOverrides[ctx.state] ? 3 : 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((tmp_8_0 = ctx._templateLabel()) ? 6 : ctx._stringLabel() ? 7 : -1, tmp_8_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.optional && ctx.state != "error" ? 8 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.state === "error" ? 9 : -1);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon],
    styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:\"\"}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color);border-radius:var(--mat-stepper-header-hover-state-layer-shape, var(--mat-app-corner-medium))}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color);border-radius:var(--mat-stepper-header-focus-state-layer-shape, var(--mat-app-corner-medium))}@media(hover: none){.mat-step-header:hover{background:none}}.cdk-high-contrast-active .mat-step-header{outline:solid 1px}.cdk-high-contrast-active .mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.cdk-high-contrast-active .mat-step-header[aria-disabled=true]{outline-color:GrayText}.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-label,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-icon,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color, var(--mat-app-on-surface-variant))}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color, var(--mat-app-surface));background-color:var(--mat-stepper-header-icon-background-color, var(--mat-app-on-surface-variant))}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color);color:var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-app-error))}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font, var(--mat-app-title-small-font));font-size:var(--mat-stepper-header-label-text-size, var(--mat-app-title-small-size));font-weight:var(--mat-stepper-header-label-text-weight, var(--mat-app-title-small-weight));color:var(--mat-stepper-header-label-text-color, var(--mat-app-on-surface-variant))}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color, var(--mat-app-on-surface-variant))}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color, var(--mat-app-error));font-size:var(--mat-stepper-header-error-state-label-text-size, var(--mat-app-title-small-size))}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size, var(--mat-app-title-small-size));font-weight:var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-app-title-small-weight))}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-app-primary));color:var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-app-on-primary))}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color);color:var(--mat-stepper-header-done-state-icon-foreground-color)}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-app-primary));color:var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-app-on-primary))}"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-step-header',
      host: {
        'class': 'mat-step-header',
        '[class]': '"mat-" + (color || "primary")',
        'role': 'tab'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon],
      template: "<div class=\"mat-step-header-ripple mat-focus-indicator\" matRipple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disableRipple\"></div>\n\n<div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\">\n  <div class=\"mat-step-icon-content\">\n    @if (iconOverrides && iconOverrides[state]) {\n      <ng-container\n        [ngTemplateOutlet]=\"iconOverrides[state]\"\n        [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container>\n    } @else {\n      @switch (state) {\n        @case ('number') {\n          <span aria-hidden=\"true\">{{_getDefaultTextForState(state)}}</span>\n        }\n\n        @default {\n          @if (state === 'done') {\n            <span class=\"cdk-visually-hidden\">{{_intl.completedLabel}}</span>\n          } @else if (state === 'edit') {\n            <span class=\"cdk-visually-hidden\">{{_intl.editableLabel}}</span>\n          }\n\n          <mat-icon aria-hidden=\"true\">{{_getDefaultTextForState(state)}}</mat-icon>\n        }\n      }\n    }\n  </div>\n</div>\n<div class=\"mat-step-label\"\n     [class.mat-step-label-active]=\"active\"\n     [class.mat-step-label-selected]=\"selected\"\n     [class.mat-step-label-error]=\"state == 'error'\">\n  @if (_templateLabel(); as templateLabel) {\n    <!-- If there is a label template, use it. -->\n    <div class=\"mat-step-text-label\">\n      <ng-container [ngTemplateOutlet]=\"templateLabel.template\"></ng-container>\n    </div>\n  } @else if (_stringLabel()) {\n    <!-- If there is no label template, fall back to the text label. -->\n    <div class=\"mat-step-text-label\">{{label}}</div>\n  }\n\n  @if (optional && state != 'error') {\n    <div class=\"mat-step-optional\">{{_intl.optionalLabel}}</div>\n  }\n\n  @if (state === 'error') {\n    <div class=\"mat-step-sub-label-error\">{{errorMessage}}</div>\n  }\n</div>\n\n",
      styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:\"\"}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color);border-radius:var(--mat-stepper-header-hover-state-layer-shape, var(--mat-app-corner-medium))}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color);border-radius:var(--mat-stepper-header-focus-state-layer-shape, var(--mat-app-corner-medium))}@media(hover: none){.mat-step-header:hover{background:none}}.cdk-high-contrast-active .mat-step-header{outline:solid 1px}.cdk-high-contrast-active .mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.cdk-high-contrast-active .mat-step-header[aria-disabled=true]{outline-color:GrayText}.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-label,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-icon,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color, var(--mat-app-on-surface-variant))}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color, var(--mat-app-surface));background-color:var(--mat-stepper-header-icon-background-color, var(--mat-app-on-surface-variant))}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color);color:var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-app-error))}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font, var(--mat-app-title-small-font));font-size:var(--mat-stepper-header-label-text-size, var(--mat-app-title-small-size));font-weight:var(--mat-stepper-header-label-text-weight, var(--mat-app-title-small-weight));color:var(--mat-stepper-header-label-text-color, var(--mat-app-on-surface-variant))}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color, var(--mat-app-on-surface-variant))}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color, var(--mat-app-error));font-size:var(--mat-stepper-header-error-state-label-text-size, var(--mat-app-title-small-size))}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size, var(--mat-app-title-small-size));font-weight:var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-app-title-small-weight))}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-app-primary));color:var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-app-on-primary))}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color);color:var(--mat-stepper-header-done-state-icon-foreground-color)}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-app-primary));color:var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-app-on-primary))}"]
    }]
  }], () => [{
    type: MatStepperIntl
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }], {
    state: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    errorMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    iconOverrides: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optional: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
const DEFAULT_HORIZONTAL_ANIMATION_DURATION = '500ms';
const DEFAULT_VERTICAL_ANIMATION_DURATION = '225ms';
/**
 * Animations used by the Material steppers.
 * @docs-private
 */
const matStepperAnimations = {
  /** Animation that transitions the step along the X axis in a horizontal stepper. */
  horizontalStepTransition: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('horizontalStepTransition', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('previous', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
    transform: 'translate3d(-100%, 0, 0)',
    visibility: 'hidden'
  })),
  // Transition to `inherit`, rather than `visible`,
  // because visibility on a child element the one from the parent,
  // making this element focusable inside of a `hidden` element.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('current', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
    transform: 'none',
    visibility: 'inherit'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('next', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
    transform: 'translate3d(100%, 0, 0)',
    visibility: 'hidden'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)'), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animateChild)(), {
    optional: true
  })]), {
    params: {
      'animationDuration': DEFAULT_HORIZONTAL_ANIMATION_DURATION
    }
  })]),
  /** Animation that transitions the step along the Y axis in a vertical stepper. */
  verticalStepTransition: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('verticalStepTransition', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('previous', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
    height: '0px',
    visibility: 'hidden'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('next', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
    height: '0px',
    visibility: 'hidden'
  })),
  // Transition to `inherit`, rather than `visible`,
  // because visibility on a child element the one from the parent,
  // making this element focusable inside of a `hidden` element.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('current', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
    height: '*',
    visibility: 'inherit'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* <=> current', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{animationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)'), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animateChild)(), {
    optional: true
  })]), {
    params: {
      'animationDuration': DEFAULT_VERTICAL_ANIMATION_DURATION
    }
  })])
};

/**
 * Template to be used to override the icons inside the step header.
 */
class MatStepperIcon {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static #_ = this.ɵfac = function MatStepperIcon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatStepperIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatStepperIcon,
    selectors: [["ng-template", "matStepperIcon", ""]],
    inputs: {
      name: [0, "matStepperIcon", "name"]
    },
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepperIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[matStepperIcon]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matStepperIcon']
    }]
  });
})();

/**
 * Content for a `mat-step` that will be rendered lazily.
 */
class MatStepContent {
  constructor(_template) {
    this._template = _template;
  }
  static #_ = this.ɵfac = function MatStepContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatStepContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatStepContent,
    selectors: [["ng-template", "matStepContent", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[matStepContent]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class MatStep extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStep {
  constructor(stepper, _errorStateMatcher, _viewContainerRef, stepperOptions) {
    super(stepper, stepperOptions);
    this._errorStateMatcher = _errorStateMatcher;
    this._viewContainerRef = _viewContainerRef;
    this._isSelected = rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription.EMPTY;
    /** Content for step label given by `<ng-template matStepLabel>`. */
    // We need an initializer here to avoid a TS error.
    this.stepLabel = undefined;
  }
  ngAfterContentInit() {
    this._isSelected = this._stepper.steps.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => {
      return this._stepper.selectionChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(event => event.selectedStep === this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(this._stepper.selected === this));
    })).subscribe(isSelected => {
      if (isSelected && this._lazyContent && !this._portal) {
        this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.TemplatePortal(this._lazyContent._template, this._viewContainerRef);
      }
    });
  }
  ngOnDestroy() {
    this._isSelected.unsubscribe();
  }
  /** Custom error state matcher that additionally checks for validity of interacted form. */
  isErrorState(control, form) {
    const originalErrorState = this._errorStateMatcher.isErrorState(control, form);
    // Custom error state checks for the validity of form that is not submitted or touched
    // since user can trigger a form change by calling for another step without directly
    // interacting with the current form.
    const customErrorState = !!(control && control.invalid && this.interacted);
    return originalErrorState || customErrorState;
  }
  static #_ = this.ɵfac = function MatStep_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatStep)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatStepper)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.STEPPER_GLOBAL_OPTIONS, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatStep,
    selectors: [["mat-step"]],
    contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatStepLabel, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatStepContent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
      }
    },
    hostAttrs: ["hidden", ""],
    inputs: {
      color: "color"
    },
    exportAs: ["matStep"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher,
      useExisting: MatStep
    }, {
      provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStep,
      useExisting: MatStep
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    consts: [[3, "cdkPortalOutlet"]],
    template: function MatStep_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatStep_ng_template_0_Template, 2, 1, "ng-template");
      }
    },
    dependencies: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.CdkPortalOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStep, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-step',
      providers: [{
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher,
        useExisting: MatStep
      }, {
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStep,
        useExisting: MatStep
      }],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      exportAs: 'matStep',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.CdkPortalOutlet],
      host: {
        'hidden': '' // Hide the steps so they don't affect the layout.
      },
      template: "<ng-template>\n  <ng-content></ng-content>\n  <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n</ng-template>\n"
    }]
  }], () => [{
    type: MatStepper,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatStepper)]
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.STEPPER_GLOBAL_OPTIONS]
    }]
  }], {
    stepLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatStepLabel]
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _lazyContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatStepContent, {
        static: false
      }]
    }]
  });
})();
class MatStepper extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper {
  /** Duration for the animation. Will be normalized to milliseconds if no units are set. */
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    this._animationDuration = /^\d+$/.test(value) ? value + 'ms' : value;
  }
  constructor(dir, changeDetectorRef, elementRef) {
    super(dir, changeDetectorRef, elementRef);
    /** The list of step headers of the steps in the stepper. */
    // We need an initializer here to avoid a TS error.
    this._stepHeader = undefined;
    /** Full list of steps inside the stepper, including inside nested steppers. */
    // We need an initializer here to avoid a TS error.
    this._steps = undefined;
    /** Steps that belong to the current stepper, excluding ones from nested steppers. */
    this.steps = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    /** Event emitted when the current step is done transitioning in. */
    this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Whether the label should display in bottom or end position.
     * Only applies in the `horizontal` orientation.
     */
    this.labelPosition = 'end';
    /**
     * Position of the stepper's header.
     * Only applies in the `horizontal` orientation.
     */
    this.headerPosition = 'top';
    /** Consumer-specified template-refs to be used to override the header icons. */
    this._iconOverrides = {};
    /** Stream of animation `done` events when the body expands/collapses. */
    this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this._animationDuration = '';
    /** Whether the stepper is rendering on the server. */
    this._isServer = !(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__.Platform).isBrowser;
    const nodeName = elementRef.nativeElement.nodeName.toLowerCase();
    this.orientation = nodeName === 'mat-vertical-stepper' ? 'vertical' : 'horizontal';
  }
  ngAfterContentInit() {
    super.ngAfterContentInit();
    this._icons.forEach(({
      name,
      templateRef
    }) => this._iconOverrides[name] = templateRef);
    // Mark the component for change detection whenever the content children query changes
    this.steps.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this._destroyed)).subscribe(() => {
      this._stateChanged();
    });
    this._animationDone.pipe(
    // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
    // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
    // See https://github.com/angular/angular/issues/24084
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)((x, y) => x.fromState === y.fromState && x.toState === y.toState), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this._destroyed)).subscribe(event => {
      if (event.toState === 'current') {
        this.animationDone.emit();
      }
    });
  }
  _stepIsNavigable(index, step) {
    return step.completed || this.selectedIndex === index || !this.linear;
  }
  _getAnimationDuration() {
    if (this.animationDuration) {
      return this.animationDuration;
    }
    return this.orientation === 'horizontal' ? DEFAULT_HORIZONTAL_ANIMATION_DURATION : DEFAULT_VERTICAL_ANIMATION_DURATION;
  }
  static #_ = this.ɵfac = function MatStepper_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatStepper,
    selectors: [["mat-stepper"], ["mat-vertical-stepper"], ["mat-horizontal-stepper"], ["", "matStepper", ""]],
    contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatStep, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatStepperIcon, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._steps = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._icons = _t);
      }
    },
    viewQuery: function MatStepper_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatStepHeader, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
      }
    },
    hostAttrs: ["role", "tablist"],
    hostVars: 11,
    hostBindings: function MatStepper_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", ctx.orientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-stepper-horizontal", ctx.orientation === "horizontal")("mat-stepper-vertical", ctx.orientation === "vertical")("mat-stepper-label-position-end", ctx.orientation === "horizontal" && ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.orientation === "horizontal" && ctx.labelPosition == "bottom")("mat-stepper-header-position-bottom", ctx.headerPosition === "bottom");
      }
    },
    inputs: {
      disableRipple: "disableRipple",
      color: "color",
      labelPosition: "labelPosition",
      headerPosition: "headerPosition",
      animationDuration: "animationDuration"
    },
    outputs: {
      animationDone: "animationDone"
    },
    exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper,
      useExisting: MatStepper
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 5,
    vars: 2,
    consts: [["stepTemplate", ""], [1, "mat-horizontal-stepper-wrapper"], [1, "mat-horizontal-stepper-header-container"], [1, "mat-horizontal-content-container"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id", "mat-horizontal-stepper-content-inactive"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"], [1, "mat-step"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "click", "keydown", "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "color"]],
    template: function MatStepper_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatStepper_Conditional_0_Template, 1, 0)(1, MatStepper_Case_1_Template, 7, 0, "div", 1)(2, MatStepper_Case_2_Template, 2, 0)(3, MatStepper_ng_template_3_Template, 1, 23, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._isServer ? 0 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((tmp_2_0 = ctx.orientation) === "horizontal" ? 1 : tmp_2_0 === "vertical" ? 2 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, MatStepHeader],
    styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font, var(--mat-app-body-medium-font));background:var(--mat-stepper-container-color, var(--mat-app-surface))}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color, var(--mat-app-outline))}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color, var(--mat-app-outline))}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-inactive{height:0;overflow:hidden}.mat-horizontal-stepper-content:not(.mat-horizontal-stepper-content-inactive){visibility:inherit !important}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.cdk-high-contrast-active .mat-horizontal-content-container{outline:solid 1px}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}.cdk-high-contrast-active .mat-vertical-content-container{outline:solid 1px}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color, var(--mat-app-outline));top:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-stepper-content:not(.mat-vertical-stepper-content-inactive){visibility:inherit !important}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],
    encapsulation: 2,
    data: {
      animation: [matStepperAnimations.horizontalStepTransition, matStepperAnimations.verticalStepTransition]
    },
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]',
      exportAs: 'matStepper, matVerticalStepper, matHorizontalStepper',
      host: {
        '[class.mat-stepper-horizontal]': 'orientation === "horizontal"',
        '[class.mat-stepper-vertical]': 'orientation === "vertical"',
        '[class.mat-stepper-label-position-end]': 'orientation === "horizontal" && labelPosition == "end"',
        '[class.mat-stepper-label-position-bottom]': 'orientation === "horizontal" && labelPosition == "bottom"',
        '[class.mat-stepper-header-position-bottom]': 'headerPosition === "bottom"',
        '[attr.aria-orientation]': 'orientation',
        'role': 'tablist'
      },
      animations: [matStepperAnimations.horizontalStepTransition, matStepperAnimations.verticalStepTransition],
      providers: [{
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper,
        useExisting: MatStepper
      }],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, MatStepHeader],
      template: "<!--\n  We need to project the content somewhere to avoid hydration errors. Some observations:\n  1. This is only necessary on the server.\n  2. We get a hydration error if there aren't any nodes after the `ng-content`.\n  3. We get a hydration error if `ng-content` is wrapped in another element.\n-->\n@if (_isServer) {\n  <ng-content/>\n}\n\n@switch (orientation) {\n  @case ('horizontal') {\n    <div class=\"mat-horizontal-stepper-wrapper\">\n      <div class=\"mat-horizontal-stepper-header-container\">\n        @for (step of steps; track step; let i = $index, isLast = $last) {\n          <ng-container\n            [ngTemplateOutlet]=\"stepTemplate\"\n            [ngTemplateOutletContext]=\"{step: step, i: i}\"></ng-container>\n          @if (!isLast) {\n            <div class=\"mat-stepper-horizontal-line\"></div>\n          }\n        }\n      </div>\n\n      <div class=\"mat-horizontal-content-container\">\n        @for (step of steps; track step; let i = $index) {\n          <div class=\"mat-horizontal-stepper-content\" role=\"tabpanel\"\n               [@horizontalStepTransition]=\"{\n                  'value': _getAnimationDirection(i),\n                  'params': {'animationDuration': _getAnimationDuration()}\n                }\"\n               (@horizontalStepTransition.done)=\"_animationDone.next($event)\"\n               [id]=\"_getStepContentId(i)\"\n               [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n               [class.mat-horizontal-stepper-content-inactive]=\"selectedIndex !== i\">\n            <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n          </div>\n        }\n      </div>\n    </div>\n  }\n\n  @case ('vertical') {\n    @for (step of steps; track step; let i = $index, isLast = $last) {\n      <div class=\"mat-step\">\n        <ng-container\n          [ngTemplateOutlet]=\"stepTemplate\"\n          [ngTemplateOutletContext]=\"{step: step, i: i}\"></ng-container>\n        <div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\">\n          <div class=\"mat-vertical-stepper-content\" role=\"tabpanel\"\n               [@verticalStepTransition]=\"{\n                  'value': _getAnimationDirection(i),\n                  'params': {'animationDuration': _getAnimationDuration()}\n                }\"\n               (@verticalStepTransition.done)=\"_animationDone.next($event)\"\n               [id]=\"_getStepContentId(i)\"\n               [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n               [class.mat-vertical-stepper-content-inactive]=\"selectedIndex !== i\">\n            <div class=\"mat-vertical-content\">\n              <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n            </div>\n          </div>\n        </div>\n      </div>\n    }\n  }\n}\n\n<!-- Common step templating -->\n<ng-template let-step=\"step\" let-i=\"i\" #stepTemplate>\n  <mat-step-header\n    [class.mat-horizontal-stepper-header]=\"orientation === 'horizontal'\"\n    [class.mat-vertical-stepper-header]=\"orientation === 'vertical'\"\n    (click)=\"step.select()\"\n    (keydown)=\"_onKeydown($event)\"\n    [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\"\n    [id]=\"_getStepLabelId(i)\"\n    [attr.aria-posinset]=\"i + 1\"\n    [attr.aria-setsize]=\"steps.length\"\n    [attr.aria-controls]=\"_getStepContentId(i)\"\n    [attr.aria-selected]=\"selectedIndex == i\"\n    [attr.aria-label]=\"step.ariaLabel || null\"\n    [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n    [attr.aria-disabled]=\"_stepIsNavigable(i, step) ? null : true\"\n    [index]=\"i\"\n    [state]=\"_getIndicatorType(i, step.state)\"\n    [label]=\"step.stepLabel || step.label\"\n    [selected]=\"selectedIndex === i\"\n    [active]=\"_stepIsNavigable(i, step)\"\n    [optional]=\"step.optional\"\n    [errorMessage]=\"step.errorMessage\"\n    [iconOverrides]=\"_iconOverrides\"\n    [disableRipple]=\"disableRipple || !_stepIsNavigable(i, step)\"\n    [color]=\"step.color || color\"></mat-step-header>\n</ng-template>\n",
      styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font, var(--mat-app-body-medium-font));background:var(--mat-stepper-container-color, var(--mat-app-surface))}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color, var(--mat-app-outline))}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color, var(--mat-app-outline))}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-inactive{height:0;overflow:hidden}.mat-horizontal-stepper-content:not(.mat-horizontal-stepper-content-inactive){visibility:inherit !important}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.cdk-high-contrast-active .mat-horizontal-content-container{outline:solid 1px}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}.cdk-high-contrast-active .mat-vertical-content-container{outline:solid 1px}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color, var(--mat-app-outline));top:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-stepper-content:not(.mat-vertical-stepper-content-inactive){visibility:inherit !important}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"]
    }]
  }], () => [{
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }], {
    _stepHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
      args: [MatStepHeader]
    }],
    _steps: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatStep, {
        descendants: true
      }]
    }],
    _icons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatStepperIcon, {
        descendants: true
      }]
    }],
    animationDone: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    animationDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/** Button that moves to the next step in a stepper workflow. */
class MatStepperNext extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperNext {
  static #_ = this.ɵfac = /* @__PURE__ */(() => {
    let ɵMatStepperNext_BaseFactory;
    return function MatStepperNext_Factory(__ngFactoryType__) {
      return (ɵMatStepperNext_BaseFactory || (ɵMatStepperNext_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatStepperNext)))(__ngFactoryType__ || MatStepperNext);
    };
  })();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatStepperNext,
    selectors: [["button", "matStepperNext", ""]],
    hostAttrs: [1, "mat-stepper-next"],
    hostVars: 1,
    hostBindings: function MatStepperNext_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepperNext, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'button[matStepperNext]',
      host: {
        'class': 'mat-stepper-next',
        '[type]': 'type'
      },
      standalone: true
    }]
  }], null, null);
})();
/** Button that moves to the previous step in a stepper workflow. */
class MatStepperPrevious extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperPrevious {
  static #_ = this.ɵfac = /* @__PURE__ */(() => {
    let ɵMatStepperPrevious_BaseFactory;
    return function MatStepperPrevious_Factory(__ngFactoryType__) {
      return (ɵMatStepperPrevious_BaseFactory || (ɵMatStepperPrevious_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatStepperPrevious)))(__ngFactoryType__ || MatStepperPrevious);
    };
  })();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatStepperPrevious,
    selectors: [["button", "matStepperPrevious", ""]],
    hostAttrs: [1, "mat-stepper-previous"],
    hostVars: 1,
    hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepperPrevious, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'button[matStepperPrevious]',
      host: {
        'class': 'mat-stepper-previous',
        '[type]': 'type'
      },
      standalone: true
    }]
  }], null, null);
})();
class MatStepperModule {
  static #_ = this.ɵfac = function MatStepperModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatStepperModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatStepperModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher],
    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.PortalModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, MatStepper, MatStepHeader, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepperModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.PortalModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent],
      exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent],
      providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_asset-manager_asset-manager_module_ts.js.map