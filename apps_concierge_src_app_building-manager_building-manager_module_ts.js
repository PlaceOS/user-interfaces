"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_building-manager_building-manager_module_ts"],{

/***/ 76094:
/*!******************************************************************************************!*\
  !*** ./apps/concierge/src/app/building-manager/auto-release-settings-modal.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoReleaseSettingsModalComponent: () => (/* binding */ AutoReleaseSettingsModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-yaml */ 53388);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _libs_form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/duration-field.component */ 83476);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);

















function AutoReleaseSettingsModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 6)(1, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AutoReleaseSettingsModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "main", 8)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Notify Before Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a-duration-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AutoReleaseSettingsModalComponent_main_4_Template_a_duration_field_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.settings.time_before, $event) || (ctx_r1.settings.time_before = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Cancel Event After");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a-duration-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AutoReleaseSettingsModalComponent_main_4_Template_a_duration_field_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.settings.time_after, $event) || (ctx_r1.settings.time_after = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Event Types");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-form-field", 10)(10, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AutoReleaseSettingsModalComponent_main_4_Template_mat_select_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.settings.resources, $event) || (ctx_r1.settings.resources = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " Desks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Visitors ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Parking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("min", 0)("max", 60)("step", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.settings.time_before);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("min", 0)("max", 60)("step", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.settings.time_after);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.settings.resources);
  }
}
function AutoReleaseSettingsModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "footer", 15)(1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AutoReleaseSettingsModalComponent_footer_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AutoReleaseSettingsModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "main", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-spinner", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("diameter", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.loading);
  }
}
class AutoReleaseSettingsModalComponent {
  constructor(_id, _dialog_ref, _settings) {
    this._id = _id;
    this._dialog_ref = _dialog_ref;
    this._settings = _settings;
    this.loading = '';
    this.id = this._id;
    this.settings = {};
  }
  ngOnInit() {
    this.loadSettings(this.id);
  }
  loadSettings(id) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = 'Loading auto-release settings for building...';
      _this.settings = {};
      const settings = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.querySettings)({
        parent_id: id
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_ => _.data)).toPromise();
      const unencrypted = settings.find(_ => _.encryption_level === _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.EncryptionLevel.None);
      if (!unencrypted) return;
      try {
        _this.settings = js_yaml__WEBPACK_IMPORTED_MODULE_3__.load(unencrypted.settings_string)?.auto_release || {};
      } catch {}
      _this.loading = '';
    })();
  }
  save() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = 'Saving changes to auto-release settings...';
      const settings = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.querySettings)({
        parent_id: _this2.id
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_ => _.data)).toPromise();
      let unencrypted = settings.find(_ => _.encryption_level === _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.EncryptionLevel.None);
      if (!unencrypted) {
        unencrypted = new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.PlaceSettings({
          parent_id: _this2.id,
          encryption_level: _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.EncryptionLevel.None,
          settings_string: ''
        });
      }
      let old_settings = {};
      try {
        old_settings = js_yaml__WEBPACK_IMPORTED_MODULE_3__.load(unencrypted.settings_string) || {};
      } catch {}
      unencrypted.settings_string = js_yaml__WEBPACK_IMPORTED_MODULE_3__.dump({
        ...old_settings,
        auto_release: _this2.settings
      });
      unencrypted.id ? yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.updateSettings)(unencrypted.id, unencrypted).toPromise() : yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.addSettings)(unencrypted).toPromise();
      const metadata_key = _this2._settings.get('app.workplace_metadata_key') || 'workplace_app';
      const metadata = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.showMetadata)(_this2.id, metadata_key).toPromise();
      const details = metadata.details || {};
      details.auto_release = _this2.settings;
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.updateMetadata)(_this2.id, {
        name: metadata_key,
        details,
        description: ''
      }).toPromise();
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Auto-release settings updated');
      _this2.loading = '';
      _this2._dialog_ref.close();
    })();
  }
  static #_ = this.ɵfac = function AutoReleaseSettingsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AutoReleaseSettingsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AutoReleaseSettingsModalComponent,
    selectors: [["auto-release-modal"]],
    decls: 8,
    vars: 4,
    consts: [["load_state", ""], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-300", "p-4"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "px-2 w-[20rem]", 4, "ngIf", "ngIfElse"], ["class", "p-4 flex justify-end", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "text-2xl"], [1, "px-2", "w-[20rem]"], [3, "ngModelChange", "min", "max", "step", "ngModel"], ["appearance", "outline", 1, "w-full"], ["multiple", "", "placeholder", "Set Event Types...", 3, "ngModelChange", "ngModel"], ["value", "desk"], ["value", "visitor"], ["value", "parking"], [1, "p-4", "flex", "justify-end"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-32", "space-y-2"], [3, "diameter"]],
    template: function AutoReleaseSettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "header", 1)(1, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Auto-Release Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AutoReleaseSettingsModalComponent_button_3_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AutoReleaseSettingsModalComponent_main_4_Template, 17, 9, "main", 4)(5, AutoReleaseSettingsModalComponent_footer_5_Template, 3, 0, "footer", 5)(6, AutoReleaseSettingsModalComponent_ng_template_6_Template, 4, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRipple, _libs_form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_4__.DurationFieldComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent]
  });
}

/***/ }),

/***/ 19932:
/*!****************************************************************************!*\
  !*** ./apps/concierge/src/app/building-manager/building-form.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildingFormComponent: () => (/* binding */ BuildingFormComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);

















function BuildingFormComponent_ng_container_0_form_1_div_1_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", region_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", region_r1.display_name || region_r1.name, " ");
  }
}
function BuildingFormComponent_ng_container_0_form_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 12)(4, "mat-select", 21)(5, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, BuildingFormComponent_ng_container_0_form_1_div_1_mat_option_7_Template, 2, 2, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.default_parent);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 2, ctx_r1.region_list));
  }
}
function BuildingFormComponent_ng_container_0_form_1_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tz_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", tz_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](tz_r3);
  }
}
function BuildingFormComponent_ng_container_0_form_1_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No matching timezones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", true);
  }
}
function BuildingFormComponent_ng_container_0_form_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BuildingFormComponent_ng_container_0_form_1_div_1_Template, 9, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 10)(4, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](5, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 10)(9, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](10, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-form-field", 12)(12, "app-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-autocomplete", null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, BuildingFormComponent_ng_container_0_form_1_mat_option_17_Template, 2, 2, "mat-option", 16)(18, BuildingFormComponent_ng_container_0_form_1_mat_option_18_Template, 2, 1, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 10)(20, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](21, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const auto_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 5, ctx_r1.region_list)) == null ? null : tmp_5_0.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matAutocomplete", auto_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.filtered_timezones);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.timezones.length);
  }
}
function BuildingFormComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BuildingFormComponent_ng_container_0_form_1_Template, 24, 7, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.form);
  }
}
function BuildingFormComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Saving building...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class BuildingFormComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  get default_parent() {
    return this._org.organisation.id;
  }
  constructor(_org) {
    super();
    this._org = _org;
    this.building = null;
    this.save = 0;
    this.loading = false;
    this.loadingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.timezones = [];
    this.filtered_timezones = [];
    this.region_list = this._org.region_list;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
      parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this._org.organisation.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      display_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      timezone: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || ''),
      location: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('')
    });
  }
  ngOnInit() {
    this._updateTimezoneList();
    this.subscription('tz-change', this.form.valueChanges.subscribe(() => this._updateTimezoneList()));
    if (this.building) this.form.patchValue(this.building);
  }
  ngOnChanges(changes) {
    if (changes.building && this.building) {
      this.form.patchValue(this.building);
    }
    if (changes.save && this.save) this.saveChanges();
  }
  saveChanges() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.form.patchValue({
        parent_id: _this.form.value.parent_id || _this._org.organisation.id
      });
      if (!_this.form.valid) {
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(`Some form fields are invalid. [${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.getInvalidFields)(_this.form).join(', ')}]`);
      }
      const data = _this.form.getRawValue();
      _this.loading = true;
      _this.loadingChange.emit(true);
      const body = {
        ...data,
        tags: ['building'],
        name: `BLD ${(0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.authority)().description} ${data.display_name}`
      };
      const building = yield (data.id ? (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateZone)(data.id, body) : (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.addZone)(body)).toPromise().catch(e => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(`Error saving building: ${e.message || e.error || e}`);
        _this.loading = false;
        _this.loadingChange.emit(false);
        throw e;
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Successfully saved building.');
      _this.loading = false;
      _this.loadingChange.emit(false);
      _this.done.emit(building);
    })();
  }
  _updateTimezoneList() {
    const timezone = this.form?.value?.timezone || '';
    this.timezones = _placeos_common__WEBPACK_IMPORTED_MODULE_1__.TIMEZONES_IANA;
    this.filtered_timezones = this.timezones.filter(_ => _.toLowerCase().includes(timezone.toLowerCase()));
  }
  static #_ = this.ɵfac = function BuildingFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BuildingFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: BuildingFormComponent,
    selectors: [["building-form"]],
    inputs: {
      building: "building",
      save: "save",
      loading: "loading"
    },
    outputs: {
      loadingChange: "loadingChange",
      done: "done"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
    decls: 3,
    vars: 2,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_BUILDING_MANAGER_BUILDING_FORM_COMPONENT_TS_0 = goog.getMsg(" Display Name: ");
        i18n_0 = MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_BUILDING_MANAGER_BUILDING_FORM_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:@@displayNameLabel␟8d766661ed5e178519720ec8e959d2a737f600a6␟1377207093952578744: Display Name: `;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_BUILDING_MANAGER_BUILDING_FORM_COMPONENT_TS_1 = goog.getMsg(" Timezone: ");
        i18n_1 = MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_BUILDING_MANAGER_BUILDING_FORM_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:@@displayNameLabel␟dbd34479df566856113383ebef3a2cb98e494642␟7608711767660448404: Timezone: `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_BUILDING_MANAGER_BUILDING_FORM_COMPONENT_TS_2 = goog.getMsg(" Location: ");
        i18n_2 = MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_BUILDING_MANAGER_BUILDING_FORM_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:@@displayNameLabel␟8dfcfa872af9be0ad27411537a6944e3d33a278f␟2698045878883517755: Location: `;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_BUILDING_MANAGER_BUILDING_FORM_COMPONENT_TS_3 = goog.getMsg(" Region: ");
        i18n_3 = MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_BUILDING_MANAGER_BUILDING_FORM_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:@@displayNameLabel␟88b397510643ec67156f0eb2d333d4012801a8c1␟2672381863752151894: Region: `;
      }
      return [["load_state", ""], ["auto", "matAutocomplete"], i18n_0, i18n_1, i18n_2, i18n_3, [4, "ngIf", "ngIfElse"], ["building", "", "class", "flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]", 3, "formGroup", 4, "ngIf"], ["building", "", 1, "flex", "flex-col", "w-[36rem]", "max-w-[calc(100vw-4rem)]", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "display-name"], ["appearance", "outline"], ["matInput", "", "name", "display-name", "placeholder", "Display Name", "formControlName", "display_name"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "formControlName", "timezone", "placeholder", "Building timezone", 3, "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "disabled", 4, "ngIf"], ["for", "address"], ["matInput", "", "name", "address", "placeholder", "Location or Address...", "formControlName", "location"], ["for", "region"], ["name", "region", "formControlName", "parent_id", "placeholder", "Select Region..."], [3, "value"], [3, "disabled"], [1, "flex", "flex-col", "items-center", "justify-center", "w-64", "h-64"], ["diameter", "32"], [1, "mt-4"]];
    },
    template: function BuildingFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, BuildingFormComponent_ng_container_0_Template, 2, 1, "ng-container", 6)(1, BuildingFormComponent_ng_template_1_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r5);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe]
  });
}

/***/ }),

/***/ 60894:
/*!****************************************************************************!*\
  !*** ./apps/concierge/src/app/building-manager/building-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildingListComponent: () => (/* binding */ BuildingListComponent)
/* harmony export */ });
/* harmony import */ var _building_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./building-management.service */ 75981);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _ui_booking_panel_settings_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/booking-panel-settings-modal.component */ 82953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/clipboard */ 52352);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/simple-table.component */ 88328);
/* harmony import */ var _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/authenticated-image.directive */ 93208);
/* harmony import */ var _libs_components_src_lib_level_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/level.pipe */ 23666);
















const _c0 = a0 => ({
  key: "display_name",
  name: "Building Name",
  content: a0
});
const _c1 = () => ({
  key: "location",
  name: "Location",
  size: "16rem"
});
const _c2 = a0 => ({
  key: "timezone",
  name: "Timezone",
  size: "14rem",
  content: a0
});
const _c3 = () => ({
  key: "region",
  name: "Region",
  size: "11rem",
  sortable: false
});
const _c4 = () => ({
  key: "level_count",
  name: "Levels",
  size: "6rem"
});
const _c5 = a0 => ({
  key: "actions",
  name: " ",
  content: a0,
  size: "3rem",
  sortable: false
});
const _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function BuildingListComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BuildingListComponent_ng_template_3_Template_button_click_0_listener() {
      const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.copyToClipboard(row_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const data_r4 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r2.id, " ");
  }
}
function BuildingListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r5);
  }
}
function BuildingListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "level");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "level");
  }
  if (rf & 2) {
    let tmp_7_0;
    const data_r6 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, data_r6)) == null ? null : tmp_7_0.display_name) || ((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, data_r6)) == null ? null : tmp_7_0.name), " ");
  }
}
function BuildingListComponent_ng_template_9_img_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 15);
  }
  if (rf & 2) {
    const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().data;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("source", data_r7[0]);
  }
}
function BuildingListComponent_ng_template_9_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BuildingListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, BuildingListComponent_ng_template_9_img_0_Template, 1, 1, "img", 13)(1, BuildingListComponent_ng_template_9_span_1_Template, 2, 0, "span", 14);
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", data_r7.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !data_r7.length);
  }
}
function BuildingListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "button", 18)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-menu", null, 5)(6, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BuildingListComponent_ng_template_11_Template_button_click_6_listener() {
      const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.editBuildingMetadata(row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 20)(8, "app-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "edit_square");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "App Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BuildingListComponent_ng_template_11_Template_button_click_12_listener() {
      const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.editBuilding(row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 20)(14, "app-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Edit Building");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BuildingListComponent_ng_template_11_Template_button_click_18_listener() {
      const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.setAutoRelease(row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 20)(20, "app-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " release_alert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Auto-release Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BuildingListComponent_ng_template_11_Template_button_click_24_listener() {
      const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.editBookingPanelSettings(row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 20)(26, "app-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " top_panel_open ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Edit Booking Panel Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BuildingListComponent_ng_template_11_Template_button_click_30_listener() {
      const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.setInduction(row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 20)(32, "app-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, " badge ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Induction Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BuildingListComponent_ng_template_11_Template_button_click_36_listener() {
      const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.setSupportIssueTypes(row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 20)(38, "app-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, " support_agent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Support Request Types");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BuildingListComponent_ng_template_11_Template_button_click_42_listener() {
      const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.removeBuilding(row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 23)(44, "app-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Delete Building");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const menu_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", menu_r10);
  }
}
class BuildingListComponent {
  editBookingPanelSettings(building) {
    this._dialog.open(_ui_booking_panel_settings_modal_component__WEBPACK_IMPORTED_MODULE_2__.BookingPanelSettingsModalComponent, {
      data: {
        zone: building
      }
    });
  }
  constructor(_manager, _clipboard, _dialog) {
    this._manager = _manager;
    this._clipboard = _clipboard;
    this._dialog = _dialog;
    this.buildings = this._manager.filtered_buildings;
    this.settings = {};
    this.editBuilding = building => this._manager.editBuilding(building);
    this.editBuildingMetadata = building => this._manager.editBuildingMetadata(building);
    this.removeBuilding = building => this._manager.removeBuilding(building);
    this.setAutoRelease = building => this._manager.setAutoRelease(building);
    this.setInduction = building => this._manager.setInduction(building);
    this.setSupportIssueTypes = building => this._manager.setSupportIssueTypes(building);
    this.copyToClipboard = id => {
      const success = this._clipboard.copy(id);
      if (success) (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Building ID copied to clipboard.');
    };
  }
  static #_ = this.ɵfac = function BuildingListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BuildingListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_building_management_service__WEBPACK_IMPORTED_MODULE_0__.BuildingManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__.Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: BuildingListComponent,
    selectors: [["building-list"]],
    decls: 13,
    vars: 19,
    consts: [["name_template", ""], ["timezone_template", ""], ["level_template", ""], ["image_template", ""], ["action_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], ["empty_message", "No Buildings", 1, "min-w-[62rem]", "w-full", "block", "text-sm", 3, "data", "columns", "sortable"], [1, "w-full", "h-20"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "text-[0.625rem]", "opacity-30", "font-mono"], [1, "p-4", "font-mono", "text-sm"], ["auth", "", "class", "max-h-[3rem] max-w-[8rem]", 3, "source", 4, "ngIf"], ["class", "opacity-30", 4, "ngIf"], ["auth", "", 1, "max-h-[3rem]", "max-w-[8rem]", 3, "source"], [1, "opacity-30"], [1, "w-full", "flex", "justify-end", "space-x-2"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], ["className", "material-symbols-rounded", 1, "text-xl"], [1, "flex", "items-center", "space-x-2", "text-red-500"], [1, "text-error", "text-xl"]],
    template: function BuildingListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "simple-table", 7)(2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, BuildingListComponent_ng_template_3_Template, 5, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"])(5, BuildingListComponent_ng_template_5_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"])(7, BuildingListComponent_ng_template_7_Template, 3, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"])(9, BuildingListComponent_ng_template_9_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"])(11, BuildingListComponent_ng_template_11_Template, 48, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const name_template_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);
        const timezone_template_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);
        const action_template_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.buildings)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction6"](12, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c0, name_template_r11), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c2, timezone_template_r12), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](8, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c5, action_template_r13)))("sortable", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_4__.SimpleTableComponent, _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_5__.AuthenticatedImageDirective, _libs_components_src_lib_level_pipe__WEBPACK_IMPORTED_MODULE_6__.LevelPipe]
  });
}

/***/ }),

/***/ 75981:
/*!********************************************************************************!*\
  !*** ./apps/concierge/src/app/building-manager/building-management.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildingManagementService: () => (/* binding */ BuildingManagementService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _building_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./building-modal.component */ 88859);
/* harmony import */ var _ui_app_settings_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/app-settings-modal.component */ 16252);
/* harmony import */ var _auto_release_settings_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auto-release-settings-modal.component */ 76094);
/* harmony import */ var _induction_settings_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./induction-settings-modal.component */ 32492);
/* harmony import */ var _item_list_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./item-list-modal.component */ 91087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 12587);















class BuildingManagementService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject({});
    this._change = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(0);
    this.options = this._options.asObservable();
    this.filtered_buildings = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this._org.region_list, this._org.building_list, this._options, this._org.initialised]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([regions, list, options]) => {
      if (options.zone) {
        list = list.filter(_ => _.parent_id === options.zone);
      }
      if (options.search) {
        list = list.filter(_ => _.name.toLowerCase().includes(options.search.toLowerCase()));
      }
      for (const bld of list) {
        const parent = regions.find(_ => _.id === bld.parent_id);
        if (parent) {
          bld.region = parent.display_name || parent.name;
        }
        bld.level_count = this._org.levelsForBuilding(bld)?.length || 0;
      }
      return list;
    }));
  }
  setFilters(options) {
    this._options.next({
      ...this._options.getValue(),
      ...options
    });
  }
  setSearchString(search) {
    this._options.next({
      ...this._options.getValue(),
      search
    });
  }
  editBuilding(building = new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.PlaceZone()) {
    const ref = this._dialog.open(_building_modal_component__WEBPACK_IMPORTED_MODULE_4__.BuildingModalComponent, {
      data: building
    });
    ref.afterClosed().subscribe(data => {
      if (data) this._org.addZone(data);
    });
  }
  editBuildingMetadata(zone = new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.PlaceZone()) {
    const ref = this._dialog.open(_ui_app_settings_modal_component__WEBPACK_IMPORTED_MODULE_5__.AppSettingsModalComponent, {
      data: {
        zone
      }
    });
    ref.afterClosed().subscribe(data => {
      if (data) setTimeout(() => location.reload(), 300);
    });
  }
  setAutoRelease(building) {
    if (!building?.id) return;
    this._dialog.open(_auto_release_settings_modal_component__WEBPACK_IMPORTED_MODULE_6__.AutoReleaseSettingsModalComponent, {
      data: building.id
    });
  }
  setInduction(building) {
    if (!building?.id) return;
    this._dialog.open(_induction_settings_modal_component__WEBPACK_IMPORTED_MODULE_7__.InductionSettingsModalComponent, {
      data: building.id
    });
  }
  setSupportIssueTypes(building) {
    if (!building?.id) return;
    this._dialog.open(_item_list_modal_component__WEBPACK_IMPORTED_MODULE_8__.ItemListModalComponent, {
      data: building.id
    });
  }
  removeBuilding(building) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ref = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.openConfirmModal)({
        title: 'Remove Building',
        content: `Are you sure you want to remove the building "${building.name}"?`,
        icon: {
          content: 'delete_forever'
        },
        confirm_text: 'Remove'
      }, _this._dialog);
      if (ref.reason !== 'done') return ref.close();
      ref.loading('Removing building...');
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.removeZone)(building.id).toPromise();
      _this._org.removeZone({
        id: building.id,
        tags: ['building']
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Successfully removed building.');
      ref.close();
    })();
  }
  static #_ = this.ɵfac = function BuildingManagementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BuildingManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
    token: BuildingManagementService,
    factory: BuildingManagementService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 41561:
/*!*******************************************************************************!*\
  !*** ./apps/concierge/src/app/building-manager/building-manager.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildingManagerComponent: () => (/* binding */ BuildingManagerComponent)
/* harmony export */ });
/* harmony import */ var _building_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./building-management.service */ 75981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/app-topbar.component */ 45189);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 96843);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _building_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./building-list.component */ 60894);







const _c0 = ["app-building-manager", ""];
class BuildingManagerComponent {
  constructor(_state) {
    this._state = _state;
    this.newBuilding = () => this._state.editBuilding();
  }
  static #_ = this.ɵfac = function BuildingManagerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BuildingManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_building_management_service__WEBPACK_IMPORTED_MODULE_0__.BuildingManagementService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: BuildingManagerComponent,
    selectors: [["", "app-building-manager", ""]],
    attrs: _c0,
    decls: 10,
    vars: 0,
    consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "flex", "items-center", "justify-between", "mb-2", "px-8", "pt-4", "pb-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], [1, "block", "w-full", "relative", "flex-1", "h-1/2"]],
    template: function BuildingManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "main", 1)(4, "header", 2)(5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Building Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BuildingManagerComponent_Template_button_click_7_listener() {
          return ctx.newBuilding();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Add Building ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "building-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_1__.ApplicationTopbarComponent, _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.ApplicationSidebarComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, _building_list_component__WEBPACK_IMPORTED_MODULE_3__.BuildingListComponent],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n\n            sidebar[_ngcontent-%COMP%] {\n                height: 100%;\n            }\n\n            main[_ngcontent-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                flex: 1;\n                min-width: 50%;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1aWxkaW5nLW1hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsWUFBWTtnQkFDWixXQUFXO2dCQUNYLDJCQUEyQjtZQUMvQjs7WUFFQTtnQkFDSSxZQUFZO1lBQ2hCOztZQUVBO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixPQUFPO2dCQUNQLGNBQWM7Z0JBQ2QsWUFBWTtZQUNoQiIsImZpbGUiOiJidWlsZGluZy1tYW5hZ2VyLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYjEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaWRlYmFyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvYnVpbGRpbmctbWFuYWdlci9idWlsZGluZy1tYW5hZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCwyQkFBMkI7WUFDL0I7O1lBRUE7Z0JBQ0ksWUFBWTtZQUNoQjs7WUFFQTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsT0FBTztnQkFDUCxjQUFjO2dCQUNkLFlBQVk7WUFDaEI7O0FBRVosb21DQUFvbUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWIxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2lkZWJhciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 45900:
/*!****************************************************************************!*\
  !*** ./apps/concierge/src/app/building-manager/building-manager.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildingManagerModule: () => (/* binding */ BuildingManagerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ui.module */ 15412);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/spaces */ 44855);
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/users */ 41489);
/* harmony import */ var _building_manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./building-manager.component */ 41561);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ 12772);
/* harmony import */ var _building_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./building-list.component */ 60894);
/* harmony import */ var _building_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./building-form.component */ 19932);
/* harmony import */ var _building_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./building-modal.component */ 88859);
/* harmony import */ var _auto_release_settings_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auto-release-settings-modal.component */ 76094);
/* harmony import */ var _induction_settings_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./induction-settings-modal.component */ 32492);
/* harmony import */ var _item_list_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./item-list-modal.component */ 91087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
















const ROUTES = [{
  path: '',
  component: _building_manager_component__WEBPACK_IMPORTED_MODULE_3__.BuildingManagerComponent
}, {
  path: 'new',
  component: _building_manager_component__WEBPACK_IMPORTED_MODULE_3__.BuildingManagerComponent
}];
class BuildingManagerModule {
  static #_ = this.ɵfac = function BuildingManagerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BuildingManagerModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: BuildingManagerModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_1__.SharedSpacesModule, _placeos_users__WEBPACK_IMPORTED_MODULE_2__.SharedUsersModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipsModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](BuildingManagerModule, {
    declarations: [_building_manager_component__WEBPACK_IMPORTED_MODULE_3__.BuildingManagerComponent, _building_list_component__WEBPACK_IMPORTED_MODULE_4__.BuildingListComponent, _building_form_component__WEBPACK_IMPORTED_MODULE_5__.BuildingFormComponent, _building_modal_component__WEBPACK_IMPORTED_MODULE_6__.BuildingModalComponent, _auto_release_settings_modal_component__WEBPACK_IMPORTED_MODULE_7__.AutoReleaseSettingsModalComponent, _induction_settings_modal_component__WEBPACK_IMPORTED_MODULE_8__.InductionSettingsModalComponent, _item_list_modal_component__WEBPACK_IMPORTED_MODULE_9__.ItemListModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_1__.SharedSpacesModule, _placeos_users__WEBPACK_IMPORTED_MODULE_2__.SharedUsersModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipsModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
})();

/***/ }),

/***/ 88859:
/*!*****************************************************************************!*\
  !*** ./apps/concierge/src/app/building-manager/building-modal.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildingModalComponent: () => (/* binding */ BuildingModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _building_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./building-form.component */ 19932);







function BuildingModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 4)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function BuildingModalComponent_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "footer", 5)(1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuildingModalComponent_footer_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class BuildingModalComponent {
  constructor(_data, _dialog_ref) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.loading = false;
    this.save_state = 0;
    this.building = this._data;
    this.close = d => this._dialog_ref.close(d);
    this.save = () => this.save_state = Date.now();
  }
  static #_ = this.ɵfac = function BuildingModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BuildingModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: BuildingModalComponent,
    selectors: [["building-modal"]],
    decls: 7,
    vars: 6,
    consts: [["btn", "", "icon", "", "mat-dialog-close", "", 4, "ngIf"], [1, "max-h-[65vh]", "overflow-y-auto", "overflow-x-hidden", "p-4"], [3, "loadingChange", "done", "building", "save", "loading"], ["class", "p-2 flex justify-end border-t border-base-200", 4, "ngIf"], ["btn", "", "icon", "", "mat-dialog-close", ""], [1, "p-2", "flex", "justify-end", "border-t", "border-base-200"], ["btn", "", 1, "w-32", 3, "click"]],
    template: function BuildingModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header")(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BuildingModalComponent_button_3_Template, 3, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "main", 1)(5, "building-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("loadingChange", function BuildingModalComponent_Template_building_form_loadingChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.loading, $event) || (ctx.loading = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("done", function BuildingModalComponent_Template_building_form_done_5_listener($event) {
          return ctx.close($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BuildingModalComponent_footer_6_Template, 3, 0, "footer", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.building.id ? "Edit" : "Add", " Building");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("building", ctx.building)("save", ctx.save_state);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _building_form_component__WEBPACK_IMPORTED_MODULE_2__.BuildingFormComponent]
  });
}

/***/ }),

/***/ 32492:
/*!***************************************************************************************!*\
  !*** ./apps/concierge/src/app/building-manager/induction-settings-modal.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InductionSettingsModalComponent: () => (/* binding */ InductionSettingsModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);

















function InductionSettingsModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 6)(1, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function InductionSettingsModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main", 8)(1, "mat-form-field", 9)(2, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function InductionSettingsModalComponent_main_4_Template_textarea_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.induction_details, $event) || (ctx_r1.induction_details = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-checkbox", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function InductionSettingsModalComponent_main_4_Template_mat_checkbox_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.is_enabled, $event) || (ctx_r1.is_enabled = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Enable Induction for Building ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.induction_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.is_enabled);
  }
}
function InductionSettingsModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "footer", 12)(1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InductionSettingsModalComponent_footer_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function InductionSettingsModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.loading);
  }
}
class InductionSettingsModalComponent {
  constructor(_zone_id, _settings, _org, _dialog_ref) {
    this._zone_id = _zone_id;
    this._settings = _settings;
    this._org = _org;
    this._dialog_ref = _dialog_ref;
    this.loading = '';
    this.induction_details = '';
    this.is_enabled = false;
    this.settings = {};
  }
  ngOnInit() {
    if (!this._zone_id) return;
    this.loadSettings();
  }
  loadSettings() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = 'Loading induction settings for building...';
      const visitor_kiosk_app = _this._settings.get('app.visitor_kiosk_app') || 'visitor-kiosk_app';
      _this.settings = {};
      const [bld_metadata, org_metadata, org_settings] = yield Promise.all([yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.showMetadata)(_this._zone_id, visitor_kiosk_app).toPromise(), yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.showMetadata)(_this._org.organisation.id, visitor_kiosk_app).toPromise(), yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.showMetadata)(_this._org.organisation.id, 'settings').toPromise()]);
      _this.settings = {
        ...org_settings.details,
        ...org_metadata.details,
        ...bld_metadata.details
      };
      _this.induction_details = _this.settings.induction_details || '';
      _this.is_enabled = _this.settings.induction_enabled ?? false;
      _this.loading = '';
    })();
  }
  save() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = 'Saving induction settings...';
      const visitor_kiosk_app = _this2._settings.get('app.visitor_kiosk_app') || 'visitor-kiosk_app';
      _this2._dialog_ref.disableClose = true;
      const metadata = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.showMetadata)(_this2._zone_id, visitor_kiosk_app).toPromise();
      const new_metadata = {
        ...metadata.details,
        induction_details: _this2.induction_details,
        induction_enabled: _this2.is_enabled
      };
      const result = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateMetadata)(_this2._zone_id, {
        name: metadata.name || visitor_kiosk_app,
        description: metadata.description || '',
        details: new_metadata
      }).toPromise().catch(err => {
        console.error(err);
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('Error saving induction settings');
      });
      _this2.loading = '';
      if (result) {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Successfully saved induction settings');
        _this2._dialog_ref.close();
      }
    })();
  }
  static #_ = this.ɵfac = function InductionSettingsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || InductionSettingsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: InductionSettingsModalComponent,
    selectors: [["induction-settings-modal"]],
    decls: 8,
    vars: 4,
    consts: [["load_state", ""], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-300", "p-4"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 flex flex-col space-y-2", 4, "ngIf", "ngIfElse"], ["class", "px-4 pb-4 flex justify-end", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "text-2xl"], [1, "p-4", "flex", "flex-col", "space-y-2"], ["appearance", "outline", 1, "w-[36rem]", "max-w-[80vw]", "h-[50vh]"], ["matInput", "", "placeholder", "Induction Details", 1, "w-[34rem]", "max-w-[calc(80vw-2rem)]", "h-[calc(50vh-2rem)]", "resize-none", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], [1, "px-4", "pb-4", "flex", "justify-end"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-32", "space-y-2"], [3, "diameter"]],
    template: function InductionSettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header", 1)(1, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Induction Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, InductionSettingsModalComponent_button_3_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, InductionSettingsModalComponent_main_4_Template, 5, 2, "main", 4)(5, InductionSettingsModalComponent_footer_5_Template, 3, 0, "footer", 5)(6, InductionSettingsModalComponent_ng_template_6_Template, 4, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckbox, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent]
  });
}

/***/ }),

/***/ 91087:
/*!******************************************************************************!*\
  !*** ./apps/concierge/src/app/building-manager/item-list-modal.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemListModalComponent: () => (/* binding */ ItemListModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);












function ItemListModalComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ItemListModalComponent_div_9_Template_input_ngModelChange_1_listener($event) {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r2.item_list[i_r2].name, $event) || (ctx_r2.item_list[i_r2].name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ItemListModalComponent_div_9_Template_input_ngModelChange_2_listener($event) {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r2.item_list[i_r2].email, $event) || (ctx_r2.item_list[i_r2].email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ItemListModalComponent_div_9_Template_button_click_3_listener() {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.item_list.splice(i_r2, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.item_list[i_r2].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.item_list[i_r2].email);
  }
}
class ItemListModalComponent {
  constructor(_bld_id, _settings, _dialog_ref) {
    this._bld_id = _bld_id;
    this._settings = _settings;
    this._dialog_ref = _dialog_ref;
    this.item_list = [];
    this.loading = false;
    this.identify = (index, item) => index;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const metadata_key = _this._settings.get('app.workplace_metadata_key') || 'workplace_app';
      const metadata = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.showMetadata)(_this._bld_id, metadata_key).toPromise();
      const items = metadata?.details?.support_issue_types || [];
      _this.item_list = items;
    })();
  }
  save() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const metadata_key = _this2._settings.get('app.workplace_metadata_key') || 'workplace_app';
      const concierge_key = _this2._settings.get('app.concierge_metadata_key') || 'concierge_app';
      _this2.loading = true;
      const items = _this2.item_list.filter(_ => _);
      const metadata = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.showMetadata)(_this2._bld_id, metadata_key).toPromise();
      metadata.details.support_issue_types = items;
      let resp = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.updateMetadata)(_this2._bld_id, {
        name: metadata_key,
        details: metadata.details,
        description: metadata.description || ''
      }).toPromise().catch(_ => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(`Failed to save issue types. ${_}`);
      });
      if (!resp) {
        _this2.loading = false;
        return;
      }
      const concierge_metadata = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.showMetadata)(_this2._bld_id, metadata_key).toPromise();
      concierge_metadata.details.support_issue_types = items;
      resp = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.updateMetadata)(_this2._bld_id, {
        name: concierge_key,
        details: concierge_metadata.details,
        description: concierge_metadata.description || ''
      }).toPromise().catch(_ => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(`Failed to save issue types. ${_}`);
      });
      _this2.loading = false;
      if (resp) _this2._dialog_ref.close();
    })();
  }
  static #_ = this.ɵfac = function ItemListModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ItemListModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ItemListModalComponent,
    selectors: [["item-list-modal"]],
    decls: 13,
    vars: 2,
    consts: [["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "w-[36rem]", "overflow-auto", "h-[50vh]", "p-2", "space-y-2"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], ["class", "w-full flex items-center space-x-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flex", "items-center", "justify-end", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "w-full", "flex", "items-center", "space-x-2"], ["type", "text", "placeholder", "Issue Name", 1, "flex-1", "border", "border-base-200", "px-4", "py-3", "rounded", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "Issue Email", 1, "flex-[2]", "border", "border-base-200", "px-4", "py-3", "rounded", 3, "ngModelChange", "ngModel"], ["icon", "", "matRipple", "", "matTooltip", "Remove Item", 3, "click"]],
    template: function ItemListModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header")(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Support Request Issue Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 0)(4, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "main", 1)(7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ItemListModalComponent_Template_button_click_7_listener() {
          return ctx.item_list.push({
            name: "",
            email: ""
          });
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Add Item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ItemListModalComponent_div_9_Template, 6, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "footer", 4)(11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ItemListModalComponent_Template_button_click_11_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.item_list)("ngForTrackBy", ctx.identify);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent]
  });
}

/***/ }),

/***/ 41489:
/*!*********************************!*\
  !*** ./libs/users/src/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FindAvailabilityModalComponent: () => (/* reexport safe */ _lib_find_availability_modal_find_availability_modal_component__WEBPACK_IMPORTED_MODULE_2__.FindAvailabilityModalComponent),
/* harmony export */   GuestUser: () => (/* reexport safe */ _lib_user_class__WEBPACK_IMPORTED_MODULE_5__.GuestUser),
/* harmony export */   MapLocation: () => (/* reexport safe */ _lib_location_class__WEBPACK_IMPORTED_MODULE_4__.MapLocation),
/* harmony export */   NewUserModalComponent: () => (/* reexport safe */ _lib_new_user_modal_component__WEBPACK_IMPORTED_MODULE_1__.NewUserModalComponent),
/* harmony export */   SharedUsersModule: () => (/* reexport safe */ _lib_users_module__WEBPACK_IMPORTED_MODULE_0__.SharedUsersModule),
/* harmony export */   StaffUser: () => (/* reexport safe */ _lib_user_class__WEBPACK_IMPORTED_MODULE_5__.StaffUser),
/* harmony export */   USER_DOMAIN: () => (/* reexport safe */ _lib_user_utilities__WEBPACK_IMPORTED_MODULE_6__.USER_DOMAIN),
/* harmony export */   User: () => (/* reexport safe */ _lib_user_class__WEBPACK_IMPORTED_MODULE_5__.User),
/* harmony export */   UserFormComponent: () => (/* reexport safe */ _lib_user_form_component__WEBPACK_IMPORTED_MODULE_3__.UserFormComponent),
/* harmony export */   generateGuestForm: () => (/* reexport safe */ _lib_user_utilities__WEBPACK_IMPORTED_MODULE_6__.generateGuestForm),
/* harmony export */   generateMockUser: () => (/* reexport safe */ _lib_user_utilities__WEBPACK_IMPORTED_MODULE_6__.generateMockUser),
/* harmony export */   generateUserForm: () => (/* reexport safe */ _lib_user_utilities__WEBPACK_IMPORTED_MODULE_6__.generateUserForm),
/* harmony export */   listGuestMeetings: () => (/* reexport safe */ _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__.listGuestMeetings),
/* harmony export */   locateStaff: () => (/* reexport safe */ _lib_staff_fn__WEBPACK_IMPORTED_MODULE_8__.locateStaff),
/* harmony export */   queryGuests: () => (/* reexport safe */ _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__.queryGuests),
/* harmony export */   removeGuest: () => (/* reexport safe */ _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__.removeGuest),
/* harmony export */   searchGuests: () => (/* reexport safe */ _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__.searchGuests),
/* harmony export */   searchStaff: () => (/* reexport safe */ _lib_staff_fn__WEBPACK_IMPORTED_MODULE_8__.searchStaff),
/* harmony export */   setInternalUserDomain: () => (/* reexport safe */ _lib_user_utilities__WEBPACK_IMPORTED_MODULE_6__.setInternalUserDomain),
/* harmony export */   showGuest: () => (/* reexport safe */ _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__.showGuest),
/* harmony export */   showStaff: () => (/* reexport safe */ _lib_staff_fn__WEBPACK_IMPORTED_MODULE_8__.showStaff),
/* harmony export */   updateGuest: () => (/* reexport safe */ _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__.updateGuest)
/* harmony export */ });
/* harmony import */ var _lib_users_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/users.module */ 34426);
/* harmony import */ var _lib_new_user_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/new-user-modal.component */ 11543);
/* harmony import */ var _lib_find_availability_modal_find_availability_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/find-availability-modal/find-availability-modal.component */ 12716);
/* harmony import */ var _lib_user_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/user-form.component */ 7111);
/* harmony import */ var _lib_location_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/location.class */ 74529);
/* harmony import */ var _lib_user_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/user.class */ 93693);
/* harmony import */ var _lib_user_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/user.utilities */ 24129);
/* harmony import */ var _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/guests.fn */ 86039);
/* harmony import */ var _lib_staff_fn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/staff.fn */ 2372);











/***/ }),

/***/ 74529:
/*!**********************************************!*\
  !*** ./libs/users/src/lib/location.class.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapLocation: () => (/* binding */ MapLocation)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 99908);

class MapLocation {
  constructor(_data = {}) {
    this.type = _data.type || _data.location || 'other';
    this.position = _data.position || _data.map_id || _data.asset_id || {
      x: _data.x / _data.map_width || 0,
      y: _data.y / _data.map_height || 0
    };
    this.variance = _data.variance || 0;
    this.last_seen = _data.last_seen || (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.getUnixTime)(new Date());
    this.level = _data.level;
    this.building = _data.building;
    this.at_location = !!_data.at_location;
    this.coordinates_from = _data.coordinates_from || 'top-left';
  }
}

/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_building-manager_building-manager_module_ts.js.map