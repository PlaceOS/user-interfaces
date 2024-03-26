"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_building-manager_building-manager_module_ts"],{

/***/ 42455:
/*!******************************************************************************************!*\
  !*** ./apps/concierge/src/app/building-manager/auto-release-settings-modal.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoReleaseSettingsModalComponent: () => (/* binding */ AutoReleaseSettingsModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ 64331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-yaml */ 43811);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);
/* harmony import */ var _libs_form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/duration-field.component */ 28442);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);

















function AutoReleaseSettingsModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 6)(1, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AutoReleaseSettingsModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "main", 8)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Before Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a-duration-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AutoReleaseSettingsModalComponent_main_4_Template_a_duration_field_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.settings.time_before = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "After Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a-duration-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AutoReleaseSettingsModalComponent_main_4_Template_a_duration_field_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.settings.time_after = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Event Types");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-form-field", 10)(10, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AutoReleaseSettingsModalComponent_main_4_Template_mat_select_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.settings.resources = $event);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("min", 0)("ngModel", ctx_r1.settings.time_before);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("min", 0)("ngModel", ctx_r1.settings.time_after);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.settings.resources);
  }
}
function AutoReleaseSettingsModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "footer", 15)(1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AutoReleaseSettingsModalComponent_footer_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.save());
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
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("diameter", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.loading);
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
  static #_ = this.ɵfac = function AutoReleaseSettingsModalComponent_Factory(t) {
    return new (t || AutoReleaseSettingsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AutoReleaseSettingsModalComponent,
    selectors: [["auto-release-modal"]],
    decls: 8,
    vars: 4,
    consts: [[1, "flex", "items-center", "justify-between", "border-b", "border-gray-300", "p-4"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "px-2 w-[20rem]", 4, "ngIf", "ngIfElse"], ["class", "p-4 flex justify-end", 4, "ngIf"], ["load_state", ""], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "text-2xl"], [1, "px-2", "w-[20rem]"], [3, "min", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "w-full"], ["multiple", "", "placeholder", "Set Event Types...", 3, "ngModel", "ngModelChange"], ["value", "desk"], ["value", "visitor"], ["value", "parking"], [1, "p-4", "flex", "justify-end"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-32", "space-y-2"], [3, "diameter"]],
    template: function AutoReleaseSettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "header", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Auto-Release Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AutoReleaseSettingsModalComponent_button_3_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AutoReleaseSettingsModalComponent_main_4_Template, 17, 5, "main", 3)(5, AutoReleaseSettingsModalComponent_footer_5_Template, 3, 0, "footer", 4)(6, AutoReleaseSettingsModalComponent_ng_template_6_Template, 4, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRipple, _libs_form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_4__.DurationFieldComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent]
  });
}

/***/ }),

/***/ 13304:
/*!****************************************************************************!*\
  !*** ./apps/concierge/src/app/building-manager/building-form.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildingFormComponent: () => (/* binding */ BuildingFormComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 64331);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);

















function BuildingFormComponent_ng_container_0_form_1_div_1_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", region_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", region_r9.display_name || region_r9.name, " ");
  }
}
function BuildingFormComponent_ng_container_0_form_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 8)(4, "mat-select", 21)(5, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, BuildingFormComponent_ng_container_0_form_1_div_1_mat_option_7_Template, 2, 2, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r4.default_parent);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 2, ctx_r4.region_list));
  }
}
function BuildingFormComponent_ng_container_0_form_1_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tz_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", tz_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](tz_r10);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BuildingFormComponent_ng_container_0_form_1_div_1_Template, 9, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 5)(4, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](5, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5)(9, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](10, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-form-field", 8)(12, "app-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-autocomplete", null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, BuildingFormComponent_ng_container_0_form_1_mat_option_17_Template, 2, 2, "mat-option", 14)(18, BuildingFormComponent_ng_container_0_form_1_mat_option_18_Template, 2, 1, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 5)(20, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](21, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r3.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 5, ctx_r3.region_list)) == null ? null : tmp_1_0.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matAutocomplete", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.filtered_timezones);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r3.timezones.length);
  }
}
function BuildingFormComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BuildingFormComponent_ng_container_0_form_1_Template, 24, 7, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.form);
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
    this.subscription('tz-change', this.form.valueChanges.subscribe(({
      timezone
    }) => this.filtered_timezones = this.timezones.filter(_ => _.toLowerCase().includes(timezone.toLowerCase()))));
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
  static #_ = this.ɵfac = function BuildingFormComponent_Factory(t) {
    return new (t || BuildingFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService));
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
        const MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_BUILDING_MANAGER_BUILDING_FORM_COMPONENT_TS___0 = goog.getMsg(" Display Name: ");
        i18n_0 = MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_BUILDING_MANAGER_BUILDING_FORM_COMPONENT_TS___0;
      } else {
        i18n_0 = $localize`:@@displayNameLabel␟8d766661ed5e178519720ec8e959d2a737f600a6␟1377207093952578744: Display Name: `;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_BUILDING_MANAGER_BUILDING_FORM_COMPONENT_TS___1 = goog.getMsg(" Timezone: ");
        i18n_1 = MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_BUILDING_MANAGER_BUILDING_FORM_COMPONENT_TS___1;
      } else {
        i18n_1 = $localize`:@@displayNameLabel␟dbd34479df566856113383ebef3a2cb98e494642␟7608711767660448404: Timezone: `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_BUILDING_MANAGER_BUILDING_FORM_COMPONENT_TS___2 = goog.getMsg(" Location: ");
        i18n_2 = MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_BUILDING_MANAGER_BUILDING_FORM_COMPONENT_TS___2;
      } else {
        i18n_2 = $localize`:@@displayNameLabel␟8dfcfa872af9be0ad27411537a6944e3d33a278f␟2698045878883517755: Location: `;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_BUILDING_MANAGER_BUILDING_FORM_COMPONENT_TS____0 = goog.getMsg(" Region: ");
        i18n_3 = MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_BUILDING_MANAGER_BUILDING_FORM_COMPONENT_TS____0;
      } else {
        i18n_3 = $localize`:@@displayNameLabel␟88b397510643ec67156f0eb2d333d4012801a8c1␟2672381863752151894: Region: `;
      }
      return [[4, "ngIf", "ngIfElse"], ["load_state", ""], ["building", "", "class", "flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]", 3, "formGroup", 4, "ngIf"], ["building", "", 1, "flex", "flex-col", "w-[36rem]", "max-w-[calc(100vw-4rem)]", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "display-name"], i18n_0, ["appearance", "outline"], ["matInput", "", "name", "display-name", "placeholder", "Display Name", "formControlName", "display_name"], i18n_1, ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "formControlName", "timezone", "placeholder", "Building timezone", 3, "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "disabled", 4, "ngIf"], ["for", "address"], i18n_2, ["matInput", "", "name", "address", "placeholder", "Location or Address...", "formControlName", "location"], ["for", "region"], i18n_3, ["name", "region", "formControlName", "parent_id", "placeholder", "Select Region..."], [3, "value"], [3, "disabled"], [1, "flex", "flex-col", "items-center", "justify-center", "w-64", "h-64"], ["diameter", "32"], [1, "mt-4"]];
    },
    template: function BuildingFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, BuildingFormComponent_ng_container_0_Template, 2, 1, "ng-container", 0)(1, BuildingFormComponent_ng_template_1_Template, 4, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe]
  });
}

/***/ }),

/***/ 34640:
/*!****************************************************************************!*\
  !*** ./apps/concierge/src/app/building-manager/building-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildingListComponent: () => (/* binding */ BuildingListComponent)
/* harmony export */ });
/* harmony import */ var _building_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./building-management.service */ 53963);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-table.component */ 27442);
/* harmony import */ var _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/authenticated-image.directive */ 75142);
/* harmony import */ var _libs_components_src_lib_level_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/level.pipe */ 6612);












function BuildingListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "level");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "level");
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, data_r6)) == null ? null : tmp_0_0.display_name) || ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 3, data_r6)) == null ? null : tmp_0_0.name), " ");
  }
}
function BuildingListComponent_ng_template_4_img_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 7);
  }
  if (rf & 2) {
    const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().data;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("source", data_r7[0]);
  }
}
function BuildingListComponent_ng_template_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BuildingListComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, BuildingListComponent_ng_template_4_img_0_Template, 1, 1, "img", 5)(1, BuildingListComponent_ng_template_4_span_1_Template, 2, 0, "span", 6);
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", data_r7.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !data_r7.length);
  }
}
function BuildingListComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9)(1, "button", 10)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-menu", null, 11)(6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BuildingListComponent_ng_template_6_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const row_r11 = restoredCtx.row;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.editBuildingMetadata(row_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 13)(8, "app-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "edit_square");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "App Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BuildingListComponent_ng_template_6_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const row_r11 = restoredCtx.row;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.editBuilding(row_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 13)(14, "app-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Edit Building");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BuildingListComponent_ng_template_6_Template_button_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const row_r11 = restoredCtx.row;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.setAutoRelease(row_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 13)(20, "app-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "release_alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Auto-release Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BuildingListComponent_ng_template_6_Template_button_click_24_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const row_r11 = restoredCtx.row;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.removeBuilding(row_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 16)(26, "app-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Delete Building");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r12);
  }
}
const _c0 = () => ["display_name", "address", "timezone", "region", "level_count", "actions"];
const _c1 = () => ["Name", "Location", "Timezone", "Region", "Levels", " "];
const _c2 = () => ["12r", "flex", "12r", "10r", "6r", "3.75r"];
const _c3 = (a0, a1, a2) => ({
  images: a0,
  zones: a1,
  actions: a2
});
class BuildingListComponent {
  constructor(_manager, _settings) {
    this._manager = _manager;
    this._settings = _settings;
    this.buildings = this._manager.filtered_buildings;
    this.settings = {};
    this.editBuilding = building => this._manager.editBuilding(building);
    this.editBuildingMetadata = building => this._manager.editBuildingMetadata(building);
    this.removeBuilding = building => this._manager.removeBuilding(building);
    this.setAutoRelease = building => this._manager.setAutoRelease(building);
  }
  static #_ = this.ɵfac = function BuildingListComponent_Factory(t) {
    return new (t || BuildingListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_building_management_service__WEBPACK_IMPORTED_MODULE_0__.BuildingManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: BuildingListComponent,
    selectors: [["building-list"]],
    decls: 8,
    vars: 12,
    consts: [[1, "absolute", "inset-0", "overflow-auto", "px-4"], ["empty", "No buildings", 1, "block", "min-w-[60rem]", "w-full", "h-full", 3, "dataSource", "columns", "display_column", "column_size", "template"], ["level_template", ""], ["image_template", ""], ["action_template", ""], ["auth", "", "class", "max-h-[3rem] max-w-[8rem]", 3, "source", 4, "ngIf"], ["class", "opacity-30", 4, "ngIf"], ["auth", "", 1, "max-h-[3rem]", "max-w-[8rem]", 3, "source"], [1, "opacity-30"], [1, "w-full", "flex", "justify-end", "space-x-2"], ["btn", "", "icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], ["className", "material-symbols-rounded", 1, "text-xl"], [1, "flex", "items-center", "space-x-2", "text-red-500"], [1, "text-error", "text-xl"]],
    template: function BuildingListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "custom-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BuildingListComponent_ng_template_2_Template, 3, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"])(4, BuildingListComponent_ng_template_4_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"])(6, BuildingListComponent_ng_template_6_Template, 30, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.buildings)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c0))("display_column", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c1))("column_size", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c2))("template", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](8, _c3, _r3, _r1, _r5));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_3__.CustomTableComponent, _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_4__.AuthenticatedImageDirective, _libs_components_src_lib_level_pipe__WEBPACK_IMPORTED_MODULE_5__.LevelPipe]
  });
}

/***/ }),

/***/ 53963:
/*!********************************************************************************!*\
  !*** ./apps/concierge/src/app/building-manager/building-management.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildingManagementService: () => (/* binding */ BuildingManagementService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 64331);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 70462);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var _building_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./building-modal.component */ 33629);
/* harmony import */ var _ui_app_settings_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/app-settings-modal.component */ 66229);
/* harmony import */ var _auto_release_settings_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auto-release-settings-modal.component */ 42455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 17401);













class BuildingManagementService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject({});
    this._change = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(0);
    this.options = this._options.asObservable();
    this.filtered_buildings = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._org.region_list, this._org.building_list, this._options, this._org.initialised]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(([regions, list, options]) => {
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
  static #_ = this.ɵfac = function BuildingManagementService_Factory(t) {
    return new (t || BuildingManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: BuildingManagementService,
    factory: BuildingManagementService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 27207:
/*!*******************************************************************************!*\
  !*** ./apps/concierge/src/app/building-manager/building-manager.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildingManagerComponent: () => (/* binding */ BuildingManagerComponent)
/* harmony export */ });
/* harmony import */ var _building_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./building-management.service */ 53963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/app-topbar.component */ 33005);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 19842);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _building_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./building-list.component */ 34640);







const _c0 = ["app-building-manager", ""];
class BuildingManagerComponent {
  constructor(_state) {
    this._state = _state;
    this.newBuilding = () => this._state.editBuilding();
  }
  static #_ = this.ɵfac = function BuildingManagerComponent_Factory(t) {
    return new (t || BuildingManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_building_management_service__WEBPACK_IMPORTED_MODULE_0__.BuildingManagementService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: BuildingManagerComponent,
    selectors: [["", "app-building-manager", ""]],
    attrs: _c0,
    decls: 10,
    vars: 0,
    consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "flex", "items-center", "justify-between", "mb-2", "p-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 3, "click"], [1, "block", "w-full", "relative", "flex-1", "h-1/2"]],
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
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n\n            sidebar[_ngcontent-%COMP%] {\n                height: 100%;\n            }\n\n            main[_ngcontent-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                flex: 1;\n                min-width: 50%;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvYnVpbGRpbmctbWFuYWdlci9idWlsZGluZy1tYW5hZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCwyQkFBMkI7WUFDL0I7O1lBRUE7Z0JBQ0ksWUFBWTtZQUNoQjs7WUFFQTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsT0FBTztnQkFDUCxjQUFjO2dCQUNkLFlBQVk7WUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWIxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2lkZWJhciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 45990:
/*!****************************************************************************!*\
  !*** ./apps/concierge/src/app/building-manager/building-manager.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildingManagerModule: () => (/* binding */ BuildingManagerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ui.module */ 97428);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/spaces */ 55322);
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/users */ 81239);
/* harmony import */ var _building_manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./building-manager.component */ 27207);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ 21757);
/* harmony import */ var _building_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./building-list.component */ 34640);
/* harmony import */ var _building_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./building-form.component */ 13304);
/* harmony import */ var _building_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./building-modal.component */ 33629);
/* harmony import */ var _auto_release_settings_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auto-release-settings-modal.component */ 42455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);














const ROUTES = [{
  path: '',
  component: _building_manager_component__WEBPACK_IMPORTED_MODULE_3__.BuildingManagerComponent
}, {
  path: 'new',
  component: _building_manager_component__WEBPACK_IMPORTED_MODULE_3__.BuildingManagerComponent
}];
class BuildingManagerModule {
  static #_ = this.ɵfac = function BuildingManagerModule_Factory(t) {
    return new (t || BuildingManagerModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: BuildingManagerModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_1__.SharedSpacesModule, _placeos_users__WEBPACK_IMPORTED_MODULE_2__.SharedUsersModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](BuildingManagerModule, {
    declarations: [_building_manager_component__WEBPACK_IMPORTED_MODULE_3__.BuildingManagerComponent, _building_list_component__WEBPACK_IMPORTED_MODULE_4__.BuildingListComponent, _building_form_component__WEBPACK_IMPORTED_MODULE_5__.BuildingFormComponent, _building_modal_component__WEBPACK_IMPORTED_MODULE_6__.BuildingModalComponent, _auto_release_settings_modal_component__WEBPACK_IMPORTED_MODULE_7__.AutoReleaseSettingsModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_1__.SharedSpacesModule, _placeos_users__WEBPACK_IMPORTED_MODULE_2__.SharedUsersModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 33629:
/*!*****************************************************************************!*\
  !*** ./apps/concierge/src/app/building-manager/building-modal.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildingModalComponent: () => (/* binding */ BuildingModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _building_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./building-form.component */ 13304);







function BuildingModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 4)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function BuildingModalComponent_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "footer", 5)(1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuildingModalComponent_footer_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.save());
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
  static #_ = this.ɵfac = function BuildingModalComponent_Factory(t) {
    return new (t || BuildingModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: BuildingModalComponent,
    selectors: [["building-modal"]],
    decls: 7,
    vars: 6,
    consts: [["btn", "", "icon", "", "mat-dialog-close", "", 4, "ngIf"], [1, "max-h-[65vh]", "overflow-y-auto", "overflow-x-hidden", "p-4"], [3, "building", "save", "loading", "loadingChange", "done"], ["class", "p-2 flex justify-end border-t border-base-200", 4, "ngIf"], ["btn", "", "icon", "", "mat-dialog-close", ""], [1, "p-2", "flex", "justify-end", "border-t", "border-base-200"], ["btn", "", 1, "w-32", 3, "click"]],
    template: function BuildingModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header")(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BuildingModalComponent_button_3_Template, 3, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "main", 1)(5, "building-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("loadingChange", function BuildingModalComponent_Template_building_form_loadingChange_5_listener($event) {
          return ctx.loading = $event;
        })("done", function BuildingModalComponent_Template_building_form_done_5_listener($event) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("building", ctx.building)("save", ctx.save_state)("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _building_form_component__WEBPACK_IMPORTED_MODULE_2__.BuildingFormComponent]
  });
}

/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_building-manager_building-manager_module_ts.js.map