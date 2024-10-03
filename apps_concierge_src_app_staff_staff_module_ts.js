"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_staff_staff_module_ts"],{

/***/ 64925:
/*!***************************************************************************!*\
  !*** ./apps/concierge/src/app/staff/emergency-contact-modal.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmergencyContactModalComponent: () => (/* binding */ EmergencyContactModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/components */ 51588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/user-search-field.component */ 18000);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-tooltip.component */ 22238);






















const _c0 = () => ({
  standalone: true
});
const _c1 = () => [];
function EmergencyContactModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 6)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function EmergencyContactModalComponent_main_5_mat_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", level_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", level_r3.display_name || level_r3.name, " ");
  }
}
function EmergencyContactModalComponent_main_5_ng_container_34_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", role_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", role_r4, " ");
  }
}
function EmergencyContactModalComponent_main_5_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EmergencyContactModalComponent_main_5_ng_container_34_mat_option_1_Template, 2, 2, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const role_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", role_r4);
  }
}
function EmergencyContactModalComponent_main_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "main", 7)(1, "form", 8)(2, "a-user-search-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function EmergencyContactModalComponent_main_5_Template_a_user_search_field_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setUser($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 10)(4, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 14)(9, "div", 15)(10, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 15)(15, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Phone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 10)(20, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Level:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "mat-form-field", 12)(23, "mat-select", 19)(24, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "All Levels");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, EmergencyContactModalComponent_main_5_mat_option_26_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 10)(29, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Roles:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 14)(32, "mat-form-field", 22)(33, "mat-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, EmergencyContactModalComponent_main_5_ng_container_34_Template, 2, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](35, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "button", 25)(37, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Add New Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const role_form_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 5, ctx_r1.levels));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](35, 7, ctx_r1.data)) == null ? null : tmp_6_0.roles) || _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("content", role_form_r5);
  }
}
function EmergencyContactModalComponent_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "footer", 29)(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EmergencyContactModalComponent_footer_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function EmergencyContactModalComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "main", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-spinner", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Saving contact details...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("diameter", 48);
  }
}
function EmergencyContactModalComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 33)(1, "mat-form-field", 12)(2, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function EmergencyContactModalComponent_ng_template_9_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.role_name, $event) || (ctx_r1.role_name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EmergencyContactModalComponent_ng_template_9_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.addRole());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Save Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.role_name);
  }
}
class EmergencyContactModalComponent {
  constructor(_data, _dialog_ref, _org) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this._org = _org;
    this._changes = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(0);
    this.loading = false;
    this.contact = this._data;
    this.data = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this._org.active_building, this._changes]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(([bld]) => !!bld), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(([bld]) => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.showMetadata)(bld.id, 'emergency_contacts')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(({
      details
    }) => details || {
      roles: [],
      contacts: []
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.shareReplay)(1));
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this._data?.id || `ecntct-${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.randomString)(8)}`),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this._data?.name || ''),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this._data?.email || ''),
      phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this._data?.phone || ''),
      zone: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this._data?.zone || ''),
      roles: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this._data?.roles || [])
    });
    /** List of levels for the active building */
    this.levels = this._org.active_levels;
  }
  addRole() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.role_name) return;
      _this._tooltip.close();
      _this.loading = true;
      _this._dialog_ref.disableClose = true;
      const data = yield _this.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).toPromise();
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.updateMetadata)(_this._org.building.id, {
        name: 'emergency_contacts',
        description: 'Emergency Contacts',
        details: {
          roles: [...(data.roles || []), _this.role_name].filter(_ => !!_),
          contacts: data.contacts
        }
      }).toPromise();
      _this._changes.next(0);
      _this.form.patchValue({
        roles: [...(_this.form.value.roles || []), _this.role_name]
      });
      _this.role_name = '';
      _this.loading = false;
      _this._dialog_ref.disableClose = false;
    })();
  }
  setUser(user) {
    this.form.patchValue({
      name: user?.name,
      email: user?.email,
      phone: user?.phone
    });
  }
  save() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      _this2._dialog_ref.disableClose = true;
      const data = yield _this2.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).toPromise();
      const contacts = data?.contacts || [];
      const new_contacts = [...contacts.filter(_ => _.id !== _this2.contact?.id), _this2.form.value].sort((a, b) => a.name.localeCompare(b.name));
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.updateMetadata)(_this2._org.building.id, {
        name: 'emergency_contacts',
        description: 'Emergency Contacts',
        details: {
          roles: data.roles || [],
          contacts: new_contacts
        }
      }).toPromise();
      _this2._dialog_ref.disableClose = true;
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifySuccess)('Successfully updated emergency contacts.');
      _this2.loading = false;
      _this2._dialog_ref.close();
    })();
  }
  static #_ = this.ɵfac = function EmergencyContactModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EmergencyContactModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_1__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: EmergencyContactModalComponent,
    selectors: [["emergency-contact-modal"]],
    viewQuery: function EmergencyContactModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_placeos_components__WEBPACK_IMPORTED_MODULE_4__.CustomTooltipComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._tooltip = _t.first);
      }
    },
    decls: 11,
    vars: 5,
    consts: [["load_state", ""], ["role_form", ""], [1, "flex-1", "w-0"], ["icon", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 w-[36rem]", 4, "ngIf", "ngIfElse"], ["class", "flex justify-center items-center p-2 border-t border-base-200", 4, "ngIf"], ["icon", "", "mat-dialog-close", ""], [1, "p-4", "w-[36rem]"], [1, "space-y-4", 3, "formGroup"], ["ngModel", "", 1, "mb-4", 3, "ngModelChange", "ngModelOptions"], [1, "flex", "flex-col"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "formControlName", "name", "placeholder", "Full name"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "flex-col", "flex-1"], ["for", "email"], ["matInput", "", "formControlName", "email", "type", "email", "placeholder", "Email address"], ["matInput", "", "formControlName", "phone", "type", "tel", "placeholder", "Emergency contact number"], ["formControlName", "zone", "placeholder", "All Levels"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "no-subscript", "flex-1"], ["multiple", "", "formControlName", "roles", "placeholder", "Select roles"], [4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "customTooltip", "", 1, "space-x-2", 3, "content"], [1, "pr-2"], [3, "value"], [3, "value", 4, "ngIf"], [1, "flex", "justify-center", "items-center", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["loading", "", 1, "h-64", "flex", "flex-col", "items-center", "justify-center"], [1, "mb-4", 3, "diameter"], [1, "bg-base-100", "p-4", "rounded"], ["matInput", "", "placeholder", "Role name", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"]],
    template: function EmergencyContactModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "header")(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, EmergencyContactModalComponent_button_4_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, EmergencyContactModalComponent_main_5_Template, 41, 11, "main", 4)(6, EmergencyContactModalComponent_footer_6_Template, 3, 0, "footer", 5)(7, EmergencyContactModalComponent_ng_template_7_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(9, EmergencyContactModalComponent_ng_template_9_Template, 5, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx.contact ? "Edit" : "New", " Emergency Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOption, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_5__.UserSearchFieldComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__.IconComponent, _libs_components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_7__.CustomTooltipComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe]
  });
}

/***/ }),

/***/ 74494:
/*!**********************************************************************!*\
  !*** ./apps/concierge/src/app/staff/emergency-contacts.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmergencyContactsComponent: () => (/* binding */ EmergencyContactsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _emergency_contact_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emergency-contact-modal.component */ 64925);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _role_management_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-management-modal.component */ 33621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/clipboard */ 52352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/app-topbar.component */ 45189);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 96843);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/simple-table.component */ 88328);
/* harmony import */ var _libs_components_src_lib_level_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/level.pipe */ 23666);


























const _c0 = ["app-emergency-contacts", ""];
const _c1 = () => [];
const _c2 = a0 => ({
  key: "name",
  name: "Person",
  content: a0
});
const _c3 = a0 => ({
  key: "roles",
  name: "Roles",
  content: a0,
  sortable: false
});
const _c4 = a0 => ({
  key: "zone",
  name: "Zone",
  content: a0,
  size: "8rem",
  sortable: false
});
const _c5 = a0 => ({
  key: "actions",
  name: " ",
  content: a0,
  size: "6rem",
  sortable: false
});
const _c6 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function EmergencyContactsComponent_mat_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", role_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", role_r2, " ");
  }
}
function EmergencyContactsComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EmergencyContactsComponent_ng_template_32_Template_button_click_0_listener() {
      const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3).row;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r4.copyToClipboard(row_r4.email));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r4.email, " ");
  }
}
function EmergencyContactsComponent_ng_template_34_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", role_r6, " ");
  }
}
function EmergencyContactsComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, EmergencyContactsComponent_ng_template_34_span_1_Template, 2, 1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", data_r7);
  }
}
function EmergencyContactsComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "level");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_6_0;
    const data_r8 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", data_r8 ? (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, data_r8)) == null ? null : tmp_6_0.display_name : "All", " ");
  }
}
function EmergencyContactsComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 32)(1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EmergencyContactsComponent_ng_template_38_Template_button_click_1_listener() {
      const row_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9).row;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r4.editContact(row_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EmergencyContactsComponent_ng_template_38_Template_button_click_4_listener() {
      const row_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9).row;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r4.removeContact(row_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
}
class EmergencyContactsComponent {
  constructor(_org, _dialog, _clipboard) {
    this._org = _org;
    this._dialog = _dialog;
    this._clipboard = _clipboard;
    this._change = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(0);
    this.search = '';
    this.role_filter = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject('');
    this.data = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this._org.active_building, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(([bld]) => !!bld), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(([bld]) => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.showMetadata)(bld.id, 'emergency_contacts')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(({
      details
    }) => details || {
      roles: [],
      contacts: []
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.shareReplay)(1));
    this.roles = this.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(_ => _?.roles || []));
    this.contacts = this.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(_ => _?.contacts || []));
    this.filtered_contacts = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.contacts, this.role_filter]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(([list, role]) => list.filter(_ => !role || _.roles.includes(role))));
    this.copyToClipboard = id => {
      const success = this._clipboard.copy(id);
      if (success) (0,_placeos_common__WEBPACK_IMPORTED_MODULE_4__.notifySuccess)("User's email copied to clipboard.");
    };
  }
  ngOnInit() {}
  manageRoles() {
    const ref = this._dialog.open(_role_management_modal_component__WEBPACK_IMPORTED_MODULE_5__.RoleManagementModalComponent, {});
    ref.afterClosed().subscribe(() => this._change.next(Date.now()));
  }
  editContact(contact) {
    const ref = this._dialog.open(_emergency_contact_modal_component__WEBPACK_IMPORTED_MODULE_3__.EmergencyContactModalComponent, {
      data: contact
    });
    ref.afterClosed().subscribe(() => this._change.next(Date.now()));
  }
  removeContact(contact) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_4__.openConfirmModal)({
        title: 'Remove Emergency Contact',
        content: `Are you sure you want to remove ${contact.name} from the emergency contacts?`,
        icon: {
          content: 'delete'
        }
      }, _this._dialog);
      if (result.reason !== 'done') return;
      result.loading('Removing contact...');
      const data = yield _this.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.take)(1)).toPromise();
      const new_contacts = (data?.contacts || []).filter(_ => _.id !== contact.id);
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.updateMetadata)(_this._org.building.id, {
        name: 'emergency_contacts',
        description: 'Emergency Contacts',
        details: {
          roles: data.roles,
          contacts: new_contacts
        }
      }).toPromise();
      result.close();
      _this._change.next(Date.now());
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_4__.notifySuccess)('Successfully removed emergency contact.');
    })();
  }
  static #_ = this.ɵfac = function EmergencyContactsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EmergencyContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_1__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_20__.Clipboard));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: EmergencyContactsComponent,
    selectors: [["", "app-emergency-contacts", ""]],
    attrs: _c0,
    decls: 40,
    vars: 24,
    consts: [["person_template", ""], ["roles_template", ""], ["zone_template", ""], ["actions_template", ""], [1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], ["topbar", "", 1, "px-8", "py-4", "flex", "flex-col"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "placeholder", "Filter contacts...", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", 1, "space-x-2", 3, "click"], [1, "text-2xl"], [1, "pr-2"], [1, "flex", "items-center", "justify-between", "py-2", "mt-2"], ["placeholder", "All Roles", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["icon", "", "matRipple", "", "matTooltip", "Manage Roles", 1, "h-12", "w-12", "bg-secondary", "text-secondary-content", "rounded", 3, "click"], [1, "w-full", "h-1/2", "flex-1", "overflow-auto", "px-8"], [1, "min-w-[52rem]", "block", "text-sm", 3, "data", "filter", "empty_message", "columns", "sortable"], [1, "w-full", "h-12"], [3, "value"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "text-[0.625rem]", "opacity-30", "font-mono"], [1, "flex", "flex-wrap", "p-2"], ["class", "m-1 py-1 px-2 rounded-2xl text-xs font-mono bg-info text-info-content", 4, "ngFor", "ngForOf"], [1, "m-1", "py-1", "px-2", "rounded-2xl", "text-xs", "font-mono", "bg-info", "text-info-content"], [1, "p-4"], [1, "flex", "items-center", "justify-end", "w-full", "space-x-2", "p-2"], ["icon", "", "matRipple", "", "matTooltip", "Edit Emergency Contact", 3, "click"], ["icon", "", "matRipple", "", "matTooltip", "Remove Emergency Contact", 1, "text-error", 3, "click"]],
    template: function EmergencyContactsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "main", 5)(4, "section", 6)(5, "div", 7)(6, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Emergency Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 9)(9, "mat-form-field", 10)(10, "app-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, " search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function EmergencyContactsComponent_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.search, $event) || (ctx.search = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EmergencyContactsComponent_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.editContact());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "app-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Add Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 16)(19, "mat-form-field", 10)(20, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function EmergencyContactsComponent_Template_mat_select_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.role_filter.next($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "All Roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, EmergencyContactsComponent_mat_option_23_Template, 2, 2, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 9)(26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EmergencyContactsComponent_Template_button_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.manageRoles());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "list_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](30, "simple-table", 22)(31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, EmergencyContactsComponent_ng_template_32_Template, 5, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"])(34, EmergencyContactsComponent_ng_template_34_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"])(36, EmergencyContactsComponent_ng_template_36_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"])(38, EmergencyContactsComponent_ng_template_38_Template, 7, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const person_template_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](33);
        const roles_template_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](35);
        const zone_template_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](37);
        const actions_template_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.role_filter.getValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](24, 8, ctx.roles) || _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("data", ctx.filtered_contacts)("filter", ctx.search)("empty_message", ctx.search ? "No matching contacts" : "No emergency contacts for this building")("columns", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction4"](19, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](11, _c2, person_template_r11), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](13, _c3, roles_template_r12), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](15, _c4, zone_template_r13), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](17, _c5, actions_template_r14)))("sortable", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgModel, _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_6__.ApplicationTopbarComponent, _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_7__.ApplicationSidebarComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__.MatTooltip, _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_8__.IconComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_9__.SimpleTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.AsyncPipe, _libs_components_src_lib_level_pipe__WEBPACK_IMPORTED_MODULE_10__.LevelPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtZXJnZW5jeS1jb250YWN0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsMkJBQTJCO1lBQy9CIiwiZmlsZSI6ImVtZXJnZW5jeS1jb250YWN0cy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWIxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvc3RhZmYvZW1lcmdlbmN5LWNvbnRhY3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCwyQkFBMkI7WUFDL0I7O0FBRVosb29CQUFvb0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWIxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 80284:
/*!*************************************************************!*\
  !*** ./apps/concierge/src/app/staff/new-staff.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewStaffComponent: () => (/* binding */ NewStaffComponent)
/* harmony export */ });
/* harmony import */ var _staff_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-state.service */ 3335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/app-topbar.component */ 45189);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 96843);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _staff_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff-topbar.component */ 2722);
/* harmony import */ var _staff_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staff-listing.component */ 33418);









const _c0 = ["app-new-staff", ""];
function NewStaffComponent_mat_progress_bar_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-progress-bar", 5);
  }
}
class NewStaffComponent {
  constructor(_state) {
    this._state = _state;
    this.loading = this._state.loading;
  }
  ngOnInit() {
    this._state.startPolling();
  }
  ngOnDestroy() {
    this._state.stopPolling();
  }
  static #_ = this.ɵfac = function NewStaffComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NewStaffComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_staff_state_service__WEBPACK_IMPORTED_MODULE_0__.StaffStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: NewStaffComponent,
    selectors: [["", "app-new-staff", ""]],
    attrs: _c0,
    decls: 8,
    vars: 3,
    consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "w-full"], [1, "w-full", "flex-1", "h-0"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate", 1, "w-full"]],
    template: function NewStaffComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "staff-topbar", 2)(5, "staff-listings", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, NewStaffComponent_mat_progress_bar_6_Template, 1, 0, "mat-progress-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 1, ctx.loading));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_1__.ApplicationTopbarComponent, _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.ApplicationSidebarComponent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__.MatProgressBar, _staff_topbar_component__WEBPACK_IMPORTED_MODULE_3__.StaffTopbarComponent, _staff_listing_component__WEBPACK_IMPORTED_MODULE_4__.StaffListingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1zdGFmZi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsMkJBQTJCO1lBQy9CIiwiZmlsZSI6Im5ldy1zdGFmZi5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWIxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvc3RhZmYvbmV3LXN0YWZmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCwyQkFBMkI7WUFDL0I7O0FBRVosNG1CQUE0bUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWIxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 33621:
/*!*************************************************************************!*\
  !*** ./apps/concierge/src/app/staff/role-management-modal.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleManagementModalComponent: () => (/* binding */ RoleManagementModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/components */ 51588);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-tooltip.component */ 22238);

















function RoleManagementModalComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleManagementModalComponent_ng_container_12_Template_button_click_4_listener() {
      const role_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r3.active = role_r3;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.role_name = role_r3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleManagementModalComponent_ng_container_12_Template_button_click_7_listener() {
      const role_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.removeRole(role_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const role_form_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](role_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("content", role_form_r5);
  }
}
function RoleManagementModalComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10)(1, "mat-form-field", 11)(2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function RoleManagementModalComponent_ng_template_14_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r3.role_name, $event) || (ctx_r3.role_name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleManagementModalComponent_ng_template_14_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.updateRoles());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Save Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.role_name);
  }
}
class RoleManagementModalComponent {
  removeRole(role) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!role) return;
      _this.loading = true;
      _this._dialog_ref.disableClose = true;
      const data = yield _this.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).toPromise();
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateMetadata)(_this._org.building.id, {
        name: 'emergency_contacts',
        description: 'Emergency Contacts',
        details: {
          roles: [...data.roles.filter(_ => _ !== role)].filter(_ => !!_).sort((a, b) => a.localeCompare(b)),
          contacts: data.contacts.map(_ => ({
            ..._,
            roles: _.roles.filter(r => r !== role)
          }))
        }
      }).toPromise();
      _this._changes.next(0);
      _this.loading = false;
      _this._dialog_ref.disableClose = false;
    })();
  }
  updateRoles() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.role_name) return;
      _this2.loading = true;
      _this2._tooltip.close();
      _this2._dialog_ref.disableClose = true;
      const data = yield _this2.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).toPromise();
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateMetadata)(_this2._org.building.id, {
        name: 'emergency_contacts',
        description: 'Emergency Contacts',
        details: {
          roles: [...data.roles.filter(_ => _ !== _this2.active), _this2.role_name].filter(_ => !!_).sort((a, b) => a.localeCompare(b)),
          contacts: data.contacts
        }
      }).toPromise();
      _this2._changes.next(0);
      _this2.role_name = '';
      _this2.active = '';
      _this2.loading = false;
      _this2._dialog_ref.disableClose = false;
    })();
  }
  constructor(_org, _dialog_ref) {
    this._org = _org;
    this._dialog_ref = _dialog_ref;
    this._changes = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(0);
    this.loading = false;
    this.data = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this._org.active_building, this._changes]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(([bld]) => !!bld), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(([bld]) => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.showMetadata)(bld.id, 'emergency_contacts')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(({
      details
    }) => {
      const value = details || {
        roles: [],
        contacts: []
      };
      if (!value.roles) value.roles = [];
      if (!value.contacts) value.contacts = [];
      return value;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.shareReplay)(1));
    this.roles = this.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(_ => _.roles));
  }
  static #_ = this.ɵfac = function RoleManagementModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RoleManagementModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: RoleManagementModalComponent,
    selectors: [["role-management-modal"]],
    viewQuery: function RoleManagementModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_placeos_components__WEBPACK_IMPORTED_MODULE_1__.CustomTooltipComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._tooltip = _t.first);
      }
    },
    decls: 16,
    vars: 4,
    consts: [["role_form", ""], ["btn", "", "icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "overflow-y-auto", "min-w-[20rem]", "divide-y", "divide-base-200", "max-h-[65vh]"], ["btn", "", "matRipple", "", "customTooltip", "", 1, "flex", "items-center", "justify-center", "space-x-2", "w-[calc(100%-1rem)]", "m-2", 3, "click", "content"], [1, "truncate"], [4, "ngFor", "ngForOf"], [1, "flex", "items-center", "space-x-2", "hover:bg-base-200:bg-base-300", "p-2"], [1, "flex-1", "truncate"], ["btn", "", "icon", "", "matRipple", "", "customTooltip", "", 3, "click", "content"], ["btn", "", "icon", "", "matRipple", "", 3, "click"], [1, "bg-base-100", "p-4", "rounded"], ["appearance", "outline"], ["matInput", "", "placeholder", "Role name", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"]],
    template: function RoleManagementModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "header")(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Manage Roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 1)(4, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "main", 2)(7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleManagementModalComponent_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          ctx.active = "";
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.role_name = "");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "New Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, RoleManagementModalComponent_ng_container_12_Template, 10, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, RoleManagementModalComponent_ng_template_14_Template, 5, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const role_form_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("content", role_form_r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 2, ctx.roles));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _libs_components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_5__.CustomTooltipComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe]
  });
}

/***/ }),

/***/ 18819:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/staff/staff-details.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StaffDetailsComponent: () => (/* binding */ StaffDetailsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/users */ 41489);
/* harmony import */ var _staff_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff-state.service */ 3335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_action_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/action-icon.component */ 88157);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_user_avatar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/user-avatar.component */ 23574);












function StaffDetailsComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Onsite");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function StaffDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "a-user-avatar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, StaffDetailsComponent_div_0_div_7_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 7)(9, "action-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function StaffDetailsComponent_div_0_Template_action_icon_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onsite ? ctx_r1.checkout() : ctx_r1.checkin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "a", 9)(11, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "a", 10)(14, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "call");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("user", ctx_r1.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.user == null ? null : ctx_r1.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.user == null ? null : ctx_r1.user.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.onsite);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matTooltip", ctx_r1.onsite ? "Checkout Staff" : "Checkin Staff")("loading", ctx_r1.loading)("content", ctx_r1.onsite ? "event_busy" : "event_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", "mailto:" + (ctx_r1.user == null ? null : ctx_r1.user.email), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("disabled", !(ctx_r1.user == null ? null : ctx_r1.user.email));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", "tel:" + (ctx_r1.user == null ? null : ctx_r1.user.phone), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("disabled", !(ctx_r1.user == null ? null : ctx_r1.user.phone));
  }
}
class StaffDetailsComponent {
  constructor(_state) {
    var _this = this;
    this._state = _state;
    this.checkin = /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      yield _this._state.checkin(_this.user).catch(e => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('Error checking in Staff member'));
      _this.loading = false;
    });
    this.checkout = /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      yield _this._state.checkout(_this.user).catch(e => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('Error checking out Staff member'));
      _this.loading = false;
    });
  }
  static #_ = this.ɵfac = function StaffDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || StaffDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_staff_state_service__WEBPACK_IMPORTED_MODULE_3__.StaffStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: StaffDetailsComponent,
    selectors: [["staff-details"]],
    inputs: {
      user: "user",
      onsite: "onsite"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "w-full flex items-center px-4 py-2 bg-base-100 border-b border-base-200 hover:opacity-80", "details", "", 4, "ngIf"], ["details", "", 1, "w-full", "flex", "items-center", "px-4", "py-2", "bg-base-100", "border-b", "border-base-200", "hover:opacity-80"], [3, "user"], [1, "flex", "flex-col", "flex-1"], [1, "px-2"], [1, "px-2", "text-xs", "text-opacity-50"], ["class", "text-xs opacity-50 px-4", 4, "ngIf"], [1, "flex", "items-center"], [3, "click", "matTooltip", "loading", "content"], ["icon", "", "matRipple", "", "matTooltip", "Email Staff", 3, "href"], ["icon", "", "matRipple", "", "matTooltip", "Phone Staff", 3, "href"], [1, "text-xs", "opacity-50", "px-4"]],
    template: function StaffDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, StaffDetailsComponent_div_0_Template, 16, 11, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.user);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _libs_components_src_lib_action_icon_component__WEBPACK_IMPORTED_MODULE_4__.ActionIconComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _libs_components_src_lib_user_avatar_component__WEBPACK_IMPORTED_MODULE_6__.UserAvatarComponent]
  });
}

/***/ }),

/***/ 33418:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/staff/staff-listing.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StaffListingComponent: () => (/* binding */ StaffListingComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _staff_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staff-state.service */ 3335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _staff_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staff-details.component */ 18819);









const _c0 = ["container"];
function StaffListingComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StaffListingComponent_div_1_Template_div_click_0_listener() {
      const group_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.scrollTo(group_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 5, ctx_r3.user_list)[group_r3].length <= 0)("active", group_r3 === ctx_r3.active_group);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", group_r3, " ");
  }
}
function StaffListingComponent_ng_container_4_ng_container_1_ng_container_1_staff_details_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "staff-details", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "letter-" + group_r7 + "-" + i_r6)("user", user_r5)("onsite", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 3, ctx_r3.events) ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 5, ctx_r3.events)[user_r5.email] : false);
  }
}
function StaffListingComponent_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, StaffListingComponent_ng_container_4_ng_container_1_ng_container_1_staff_details_3_Template, 3, 7, "staff-details", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "letter-" + (group_r7 === "#" ? "0" : group_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", group_r7, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 3, ctx_r3.user_list)[group_r7]);
  }
}
function StaffListingComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, StaffListingComponent_ng_container_4_ng_container_1_ng_container_1_Template, 5, 5, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r3.user_list)[group_r7].length);
  }
}
function StaffListingComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, StaffListingComponent_ng_container_4_ng_container_1_Template, 3, 3, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.groups);
  }
}
function StaffListingComponent_mat_progress_bar_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 13);
  }
}
function StaffListingComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No matching staff members");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
const CHARS = '#abcdefghijklmnopqrstuvwxyz'.split('');
class StaffListingComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  constructor(_state) {
    super();
    this._state = _state;
    this.active_group = '#';
    this.groups = CHARS;
    this.events = this._state.user_events;
    this.loading = this._state.loading;
    this.user_count = this._state.filtered_users.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(list => list.length));
    this.user_list = this._state.filtered_users.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(list => {
      const user_map = {};
      for (const char of CHARS) {
        user_map[char] = (list || []).filter(user => user.name.toLowerCase()[0].startsWith(char) || char === '#' && !CHARS.includes(user.name.toLowerCase()[0]));
      }
      this.timeout('scroll', () => this.onScroll({}), 30);
      return user_map;
    }));
  }
  onScroll(_) {
    const scroll_top = this._el.nativeElement.scrollTop;
    for (const group of CHARS) {
      const el = document.querySelector(`#letter-${group === '#' ? '0' : group}`);
      if (el) {
        if (el.offsetTop - scroll_top > 0) {
          break;
        }
        this.active_group = group;
      }
    }
  }
  scrollTo(group) {
    const el = document.querySelector(`#letter-${group}-0`);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      this.active_group = group;
    }
  }
  static #_ = this.ɵfac = function StaffListingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || StaffListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_staff_state_service__WEBPACK_IMPORTED_MODULE_1__.StaffStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: StaffListingComponent,
    selectors: [["staff-listings"]],
    viewQuery: function StaffListingComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._el = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
    decls: 10,
    vars: 8,
    consts: [["container", ""], ["empty_state", ""], [1, "w-full", "p-2", "flex", "items-center", "justify-center"], ["letter", "", "class", "capitalize h-6 w-6 flex items-center justify-center text-xs cursor-pointer", 3, "disabled", "active", "click", 4, "ngFor", "ngForOf"], [1, "flex-1", "overflow-auto", "w-full", "relative", "bg-base-200", 2, "height", "50%", 3, "scroll"], [4, "ngIf", "ngIfElse"], ["mode", "indeterminate", 4, "ngIf"], ["letter", "", 1, "capitalize", "h-6", "w-6", "flex", "items-center", "justify-center", "text-xs", "cursor-pointer", 3, "click"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["group", "", 1, "capitalize", "bg-base-200", "border-b", "text-sm", "font-medium", "sticky", "top-0", "z-10", 3, "id"], [3, "id", "user", "onsite", 4, "ngFor", "ngForOf"], [3, "id", "user", "onsite"], ["mode", "indeterminate"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center"]],
    template: function StaffListingComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, StaffListingComponent_div_1_Template, 3, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 4, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scroll", function StaffListingComponent_Template_div_scroll_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onScroll($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, StaffListingComponent_ng_container_4_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, StaffListingComponent_mat_progress_bar_6_Template, 1, 0, "mat-progress-bar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, StaffListingComponent_ng_template_8_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const empty_state_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.groups);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 4, ctx.user_count))("ngIfElse", empty_state_r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 6, ctx.loading));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBar, _staff_details_component__WEBPACK_IMPORTED_MODULE_2__.StaffDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                width: 100%;\n                height: 50%;\n            }\n\n            [letter][_ngcontent-%COMP%] {\n                transition: font-size 200ms, color 200ms;\n            }\n\n            [group][_ngcontent-%COMP%] {\n                border-color: #ccc;\n                padding: 0.5rem 1.65rem;\n            }\n\n            .disabled[_ngcontent-%COMP%] {\n                opacity: 0.2;\n                pointer-events: none;\n            }\n\n            .active[_ngcontent-%COMP%] {\n                font-size: 1.25rem;\n                opacity: 1;\n                color: #d81b60;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWZmLWxpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsV0FBVztnQkFDWCxXQUFXO1lBQ2Y7O1lBRUE7Z0JBQ0ksd0NBQXdDO1lBQzVDOztZQUVBO2dCQUNJLGtCQUFrQjtnQkFDbEIsdUJBQXVCO1lBQzNCOztZQUVBO2dCQUNJLFlBQVk7Z0JBQ1osb0JBQW9CO1lBQ3hCOztZQUVBO2dCQUNJLGtCQUFrQjtnQkFDbEIsVUFBVTtnQkFDVixjQUFjO1lBQ2xCIiwiZmlsZSI6InN0YWZmLWxpc3RpbmcuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbbGV0dGVyXSB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDIwMG1zLCBjb2xvciAyMDBtcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW2dyb3VwXSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxLjY1cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNkODFiNjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvc3RhZmYvc3RhZmYtbGlzdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixXQUFXO2dCQUNYLFdBQVc7WUFDZjs7WUFFQTtnQkFDSSx3Q0FBd0M7WUFDNUM7O1lBRUE7Z0JBQ0ksa0JBQWtCO2dCQUNsQix1QkFBdUI7WUFDM0I7O1lBRUE7Z0JBQ0ksWUFBWTtnQkFDWixvQkFBb0I7WUFDeEI7O1lBRUE7Z0JBQ0ksa0JBQWtCO2dCQUNsQixVQUFVO2dCQUNWLGNBQWM7WUFDbEI7O0FBRVosZzJDQUFnMkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtsZXR0ZXJdIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmb250LXNpemUgMjAwbXMsIGNvbG9yIDIwMG1zO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbZ3JvdXBdIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDEuNjVyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2Q4MWI2MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3335:
/*!*************************************************************!*\
  !*** ./apps/concierge/src/app/staff/staff-state.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StaffStateService: () => (/* binding */ StaffStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/users */ 41489);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 99908);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37580);










class StaffStateService extends _placeos_common__WEBPACK_IMPORTED_MODULE_3__.AsyncHandler {
  constructor(_org) {
    var _this;
    super();
    _this = this;
    this._org = _org;
    this._onsite = {};
    this._events = {};
    this._filters = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject({});
    this._search = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject('');
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    this._users = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this.users = this._filters.asObservable();
    this.filtered_users = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this._search, this._users, this._filters]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(details => {
      const [filter, users, options] = details;
      return users.filter(i => (!filter || i.name.toLowerCase().includes(filter) || i.email.toLowerCase().includes(filter)) && (!options.only_onsite || this._onsite[i.email]));
    }));
    this.user_events = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this._filters]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)( /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_) {
        _this._loading.next(true);
        const bookings = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.queryBookings)({
          period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.startOfDay)(Date.now())),
          period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_11__.endOfDay)(Date.now())),
          type: 'staff'
        }).toPromise();
        const checkin_map = {};
        const now = new Date().valueOf();
        for (const bkn of bookings) {
          if ((0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.timePeriodsIntersect)(now, now, bkn.date, bkn.date + bkn.duration * 60 * 1000)) {
            checkin_map[bkn.asset_id] = bkn.checked_in;
            _this._events[bkn.asset_id] = bkn;
          }
        }
        _this._onsite = checkin_map;
        _this._loading.next(false);
        return checkin_map;
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.shareReplay)(1));
    this.loadUsers();
    this.user_events.subscribe();
  }
  setFilters(filters) {
    this._filters.next({
      ...this._filters.getValue(),
      ...filters
    });
  }
  setSearchString(search) {
    this._search.next(search);
  }
  startPolling(delay = 30 * 1000) {
    this.setFilters(this._filters.getValue());
    this.interval('poll', () => this.setFilters(this._filters.getValue()), delay);
  }
  stopPolling() {
    this.clearInterval('poll');
  }
  checkin(user) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.saveBooking)({
        booking_start: Math.floor(new Date().valueOf() / 1000),
        booking_end: Math.floor((0,date_fns__WEBPACK_IMPORTED_MODULE_11__.endOfDay)(new Date()).valueOf() / 1000),
        asset_id: user.email,
        title: 'Checked-in Onsite',
        description: _this2._org.building.display_name || _this2._org.building.name,
        zones: [_this2._org.building.id],
        booking_type: 'staff'
      }).toPromise();
      yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.checkinBooking)(result.id, true).toPromise();
      _this2._events[user.email] = result;
      _this2._onsite[user.email] = true;
    })();
  }
  checkout(user) {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const event = _this3._events[user.email];
      if (event) {
        const result = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.saveBooking)({
          ...event.toJSON(),
          booking_end: Math.floor(new Date().valueOf() / 1000)
        }).toPromise();
        yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.checkinBooking)(result.id, false).toPromise();
        _this3._events[user.email] = result;
        _this3._onsite[user.email] = false;
      }
    })();
  }
  loadUsers() {
    var _this4 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const user_list = yield (0,_placeos_users__WEBPACK_IMPORTED_MODULE_1__.searchStaff)('').toPromise();
      user_list.sort((a, b) => a.name.localeCompare(b.name));
      _this4._users.next(user_list);
    })();
  }
  static #_ = this.ɵfac = function StaffStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || StaffStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.OrganisationService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
    token: StaffStateService,
    factory: StaffStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2722:
/*!****************************************************************!*\
  !*** ./apps/concierge/src/app/staff/staff-topbar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StaffTopbarComponent: () => (/* binding */ StaffTopbarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _staff_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff-state.service */ 3335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/searchbar.component */ 12236);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);

















function StaffTopbarComponent_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", level_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", level_r1.display_name || level_r1.name, " ");
  }
}
class StaffTopbarComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  constructor(_state, _org, _route, _router) {
    super();
    this._state = _state;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    /** List of selected levels */
    this.zones = [];
    /** List of levels for the active building */
    this.levels = this._org.active_levels;
    this.filters = this._state.filters;
    /** Set filtered date */
    this.setDate = date => this._state.setFilters({
      date
    });
    /** Set filtered date */
    this.setFilters = filters => this._state.setFilters(filters);
    /** Set filter string */
    this.setSearch = str => this._state.setSearchString(str);
    /** Update active zones for desks */
    this.updateZones = zones => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          zone_ids: zones.join(',')
        }
      });
      this._state.setFilters({
        zones
      });
    };
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.first)(_ => _)).toPromise();
      _this.subscription('route.query', _this._route.queryParamMap.subscribe(params => {
        if (params.has('zone_ids')) {
          const zones = params.get('zone_ids').split(',');
          if (zones.length) {
            const level = _this._org.levelWithID(zones);
            if (!level) {
              return;
            }
            _this._org.building = _this._org.buildings.find(bld => bld.id === level.parent_id);
            _this.zones = zones;
          }
        }
      }));
      _this.subscription('levels', _this._org.active_levels.subscribe(levels => {
        _this.zones = _this.zones.filter(zone => levels.find(lvl => lvl.id === zone));
        if (!_this.zones.length && levels.length) {
          _this.zones.push(levels[0].id);
        }
        _this.updateZones(_this.zones);
      }));
      _this.setSearch('');
    })();
  }
  static #_ = this.ɵfac = function StaffTopbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || StaffTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_staff_state_service__WEBPACK_IMPORTED_MODULE_3__.StaffStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: StaffTopbarComponent,
    selectors: [["staff-topbar"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 7,
    consts: [[1, "flex", "items-center", "bg-base-100", "h-20", "px-4", "border-b", "border-base-200", "space-x-2"], ["appearance", "outline"], ["multiple", "", "placeholder", "All Levels", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "m-2", 3, "ngModelChange", "ngModel"], [1, "text-xs"], [1, "flex-1", "w-2"], [1, "mr-2", 3, "modelChange"], [3, "value"]],
    template: function StaffTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function StaffTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.zones, $event) || (ctx.zones = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function StaffTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
          return ctx.updateZones($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, StaffTopbarComponent_mat_option_3_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-slide-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function StaffTopbarComponent_Template_mat_slide_toggle_ngModelChange_5_listener($event) {
          return ctx.setFilters({
            only_onsite: $event
          });
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Onsite Only");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "searchbar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("modelChange", function StaffTopbarComponent_Template_searchbar_modelChange_10_listener($event) {
          return ctx.setSearch($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.zones);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 3, ctx.levels));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 5, ctx.filters)) == null ? null : tmp_2_0.only_onsite);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_4__.SearchbarComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__.MatSlideToggle, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: ["mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWZmLXRvcGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGNBQWM7Z0JBQ2QsVUFBVTtZQUNkIiwiZmlsZSI6InN0YWZmLXRvcGJhci5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuMjVlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogOGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvc3RhZmYvc3RhZmYtdG9wYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksY0FBYztnQkFDZCxVQUFVO1lBQ2Q7O0FBRVosZ2JBQWdiIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjI1ZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDhlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9619:
/*!*********************************************************!*\
  !*** ./apps/concierge/src/app/staff/staff.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StaffComponent: () => (/* binding */ StaffComponent)
/* harmony export */ });
/* harmony import */ var _staff_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-state.service */ 3335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/sidebar.component */ 74605);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _staff_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staff-topbar.component */ 2722);
/* harmony import */ var _staff_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff-listing.component */ 33418);








const _c0 = ["app-staff", ""];
function StaffComponent_mat_progress_bar_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 4);
  }
}
class StaffComponent {
  constructor(_state) {
    this._state = _state;
    this.loading = this._state.loading;
  }
  ngOnInit() {
    this._state.startPolling();
  }
  ngOnDestroy() {
    this._state.stopPolling();
  }
  static #_ = this.ɵfac = function StaffComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || StaffComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_staff_state_service__WEBPACK_IMPORTED_MODULE_0__.StaffStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: StaffComponent,
    selectors: [["", "app-staff", ""]],
    attrs: _c0,
    decls: 6,
    vars: 3,
    consts: [[1, "relative", "overflow-hidden", "flex-1", "flex", "flex-col"], [1, "w-full"], [1, "w-full", "flex-1", "h-0"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate", 1, "w-full"]],
    template: function StaffComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "staff-topbar", 1)(3, "staff-listings", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, StaffComponent_mat_progress_bar_4_Template, 1, 0, "mat-progress-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 1, ctx.loading));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBar, _staff_topbar_component__WEBPACK_IMPORTED_MODULE_2__.StaffTopbarComponent, _staff_listing_component__WEBPACK_IMPORTED_MODULE_3__.StaffListingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n                background: var(--b1);\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWZmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gscUJBQXFCO1lBQ3pCIiwiZmlsZSI6InN0YWZmLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWIxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvc3RhZmYvc3RhZmYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxxQkFBcUI7WUFDekI7O0FBRVosZ2hCQUFnaEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 36738:
/*!******************************************************!*\
  !*** ./apps/concierge/src/app/staff/staff.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPONENTS: () => (/* binding */ COMPONENTS),
/* harmony export */   StaffModule: () => (/* binding */ StaffModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _staff_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff.component */ 9619);
/* harmony import */ var _staff_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staff-topbar.component */ 2722);
/* harmony import */ var _staff_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staff-listing.component */ 33418);
/* harmony import */ var _staff_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff-details.component */ 18819);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/ui.module */ 15412);
/* harmony import */ var _new_staff_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-staff.component */ 80284);
/* harmony import */ var _emergency_contacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emergency-contacts.component */ 74494);
/* harmony import */ var _emergency_contact_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./emergency-contact-modal.component */ 64925);
/* harmony import */ var _role_management_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./role-management-modal.component */ 33621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);















const ROUTES = [{
  path: '',
  component: _staff_component__WEBPACK_IMPORTED_MODULE_0__.StaffComponent
}, {
  path: 'new',
  component: _new_staff_component__WEBPACK_IMPORTED_MODULE_5__.NewStaffComponent
}, {
  path: 'emergency-contacts',
  component: _emergency_contacts_component__WEBPACK_IMPORTED_MODULE_6__.EmergencyContactsComponent
}];
const COMPONENTS = [_new_staff_component__WEBPACK_IMPORTED_MODULE_5__.NewStaffComponent, _staff_component__WEBPACK_IMPORTED_MODULE_0__.StaffComponent, _staff_topbar_component__WEBPACK_IMPORTED_MODULE_1__.StaffTopbarComponent, _staff_listing_component__WEBPACK_IMPORTED_MODULE_2__.StaffListingComponent, _staff_details_component__WEBPACK_IMPORTED_MODULE_3__.StaffDetailsComponent, _emergency_contacts_component__WEBPACK_IMPORTED_MODULE_6__.EmergencyContactsComponent, _emergency_contact_modal_component__WEBPACK_IMPORTED_MODULE_7__.EmergencyContactModalComponent, _role_management_modal_component__WEBPACK_IMPORTED_MODULE_8__.RoleManagementModalComponent];
class StaffModule {
  static #_ = this.ɵfac = function StaffModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || StaffModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: StaffModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__.UIModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](StaffModule, {
    declarations: [_new_staff_component__WEBPACK_IMPORTED_MODULE_5__.NewStaffComponent, _staff_component__WEBPACK_IMPORTED_MODULE_0__.StaffComponent, _staff_topbar_component__WEBPACK_IMPORTED_MODULE_1__.StaffTopbarComponent, _staff_listing_component__WEBPACK_IMPORTED_MODULE_2__.StaffListingComponent, _staff_details_component__WEBPACK_IMPORTED_MODULE_3__.StaffDetailsComponent, _emergency_contacts_component__WEBPACK_IMPORTED_MODULE_6__.EmergencyContactsComponent, _emergency_contact_modal_component__WEBPACK_IMPORTED_MODULE_7__.EmergencyContactModalComponent, _role_management_modal_component__WEBPACK_IMPORTED_MODULE_8__.RoleManagementModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__.UIModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

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
/* harmony export */   WeekOfMonth: () => (/* reexport safe */ _lib_booking_class__WEBPACK_IMPORTED_MODULE_2__.WeekOfMonth),
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
//# sourceMappingURL=apps_concierge_src_app_staff_staff_module_ts.js.map