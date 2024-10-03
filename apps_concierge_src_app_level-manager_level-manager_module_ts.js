"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_level-manager_level-manager_module_ts"],{

/***/ 84532:
/*!**********************************************************************!*\
  !*** ./apps/concierge/src/app/level-manager/level-list.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LevelListComponent: () => (/* binding */ LevelListComponent)
/* harmony export */ });
/* harmony import */ var _level_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level-management.service */ 88599);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _ui_booking_panel_settings_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/booking-panel-settings-modal.component */ 82953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/clipboard */ 52352);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/simple-table.component */ 88328);














const _c0 = a0 => ({
  key: "display_name",
  name: "Level Name",
  content: a0
});
const _c1 = () => ({
  key: "building",
  name: "Building",
  size: "16rem"
});
const _c2 = a0 => ({
  key: "parking",
  name: "Parking",
  content: a0,
  size: "5rem",
  sortable: false
});
const _c3 = a0 => ({
  key: "actions",
  name: " ",
  content: a0,
  size: "3.75rem",
  sortable: false
});
const _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function LevelListComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LevelListComponent_ng_template_3_Template_button_click_0_listener() {
      const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.copyToClipboard(row_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const data_r4 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r2.id, " ");
  }
}
function LevelListComponent_ng_template_5_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function LevelListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, LevelListComponent_ng_template_5_div_0_Template, 3, 0, "div", 10);
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r5.tags == null ? null : row_r5.tags.includes("parking"));
  }
}
function LevelListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "button", 13)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-menu", null, 3)(6, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LevelListComponent_ng_template_7_Template_button_click_6_listener() {
      const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.editLevel(row_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 15)(8, "app-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Edit Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LevelListComponent_ng_template_7_Template_button_click_12_listener() {
      const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.editBookingPanelSettings(row_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 15)(14, "app-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " top_panel_open ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Edit Booking Panel Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LevelListComponent_ng_template_7_Template_button_click_18_listener() {
      const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.removeLevel(row_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 15)(20, "app-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Remove Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const menu_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", menu_r8);
  }
}
class LevelListComponent {
  constructor(_manager, _clipboard, _dialog) {
    this._manager = _manager;
    this._clipboard = _clipboard;
    this._dialog = _dialog;
    this.levels = this._manager.filtered_levels;
    this.editLevel = level => this._manager.editLevel(level);
    this.removeLevel = level => this._manager.removeLevel(level);
    this.copyToClipboard = id => {
      const success = this._clipboard.copy(id);
      if (success) (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Level ID copied to clipboard.');
    };
  }
  editBookingPanelSettings(level) {
    this._dialog.open(_ui_booking_panel_settings_modal_component__WEBPACK_IMPORTED_MODULE_2__.BookingPanelSettingsModalComponent, {
      data: {
        zone: level
      }
    });
  }
  static #_ = this.ɵfac = function LevelListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LevelListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_level_management_service__WEBPACK_IMPORTED_MODULE_0__.LevelManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__.Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: LevelListComponent,
    selectors: [["level-list"]],
    decls: 9,
    vars: 15,
    consts: [["name_template", ""], ["parking_template", ""], ["action_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], ["empty_message", "No levels", 1, "min-w-[48rem]", "block", "text-sm", 3, "data", "columns", "sortable"], [1, "w-full", "h-20"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "text-[0.625rem]", "opacity-30", "font-mono"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto", 4, "ngIf"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-success", "text-success-content", "mx-auto"], [1, "w-full", "flex", "justify-end", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], ["className", "material-symbols-rounded", 1, "text-2xl"], [1, "text-2xl", "text-error"]],
    template: function LevelListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "simple-table", 5)(2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, LevelListComponent_ng_template_3_Template, 5, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(5, LevelListComponent_ng_template_5_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(7, LevelListComponent_ng_template_7_Template, 24, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const name_template_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
        const parking_template_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
        const action_template_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.levels)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](10, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, name_template_r9), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c2, parking_template_r10), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c3, action_template_r11)))("sortable", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_4__.SimpleTableComponent]
  });
}

/***/ }),

/***/ 88599:
/*!**************************************************************************!*\
  !*** ./apps/concierge/src/app/level-manager/level-management.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LevelManagementService: () => (/* binding */ LevelManagementService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _level_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./level-modal.component */ 65013);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 12587);











class LevelManagementService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject({});
    this._change = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(0);
    this.options = this._options.asObservable();
    this.level_list = this._org.level_list;
    this.filtered_levels = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this._org.building_list, this.level_list, this._options]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([buildings, list, options]) => {
      list = list.filter(_ => buildings.find(bld => bld.id === _.parent_id));
      if (options.zone) {
        list = list.filter(_ => _.parent_id === options.zone);
      }
      if (options.search) {
        list = list.filter(_ => _.name.toLowerCase().includes(options.search.toLowerCase()));
      }
      for (const level of list) {
        const parent = this._org.buildings.find(bld => bld.id === level.parent_id);
        if (parent) {
          level.building = parent.display_name || parent.name;
        }
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
  editLevel(level = new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.PlaceZone()) {
    const ref = this._dialog.open(_level_modal_component__WEBPACK_IMPORTED_MODULE_3__.LevelModalComponent, {
      data: level
    });
    ref.afterClosed().subscribe(data => {
      if (data) this._org.addZone(data);
    });
  }
  removeLevel(level) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ref = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_4__.openConfirmModal)({
        title: 'Remove Building',
        content: `Are you sure you want to remove the building "${level.name}"?`,
        icon: {
          content: 'delete_forever'
        },
        confirm_text: 'Remove'
      }, _this._dialog);
      if (ref.reason !== 'done') return ref.close();
      ref.loading('Removing building...');
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.removeZone)(level.id).toPromise();
      _this._org.removeZone({
        id: level.id,
        tags: ['level']
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_4__.notifySuccess)('Successfully removed building.');
      ref.close();
    })();
  }
  static #_ = this.ɵfac = function LevelManagementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LevelManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_1__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: LevelManagementService,
    factory: LevelManagementService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 98267:
/*!*************************************************************************!*\
  !*** ./apps/concierge/src/app/level-manager/level-manager.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LevelManagerComponent: () => (/* binding */ LevelManagerComponent)
/* harmony export */ });
/* harmony import */ var _level_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level-management.service */ 88599);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/app-topbar.component */ 45189);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 96843);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _level_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./level-list.component */ 84532);







const _c0 = ["app-level-manager", ""];
class LevelManagerComponent {
  constructor(_manager) {
    this._manager = _manager;
    this.newLevel = () => this._manager.editLevel();
  }
  static #_ = this.ɵfac = function LevelManagerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LevelManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_level_management_service__WEBPACK_IMPORTED_MODULE_0__.LevelManagementService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LevelManagerComponent,
    selectors: [["", "app-level-manager", ""]],
    attrs: _c0,
    decls: 10,
    vars: 0,
    consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "flex", "items-center", "justify-between", "mb-2", "px-8", "pt-4", "pb-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], [1, "block", "w-full", "relative", "flex-1", "h-1/2"]],
    template: function LevelManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "main", 1)(4, "header", 2)(5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Level Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LevelManagerComponent_Template_button_click_7_listener() {
          return ctx.newLevel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Add Level ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "level-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_1__.ApplicationTopbarComponent, _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.ApplicationSidebarComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, _level_list_component__WEBPACK_IMPORTED_MODULE_3__.LevelListComponent],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n\n            sidebar[_ngcontent-%COMP%] {\n                height: 100%;\n            }\n\n            main[_ngcontent-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                flex: 1;\n                min-width: 50%;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldmVsLW1hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsWUFBWTtnQkFDWixXQUFXO2dCQUNYLDJCQUEyQjtZQUMvQjs7WUFFQTtnQkFDSSxZQUFZO1lBQ2hCOztZQUVBO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixPQUFPO2dCQUNQLGNBQWM7Z0JBQ2QsWUFBWTtZQUNoQiIsImZpbGUiOiJsZXZlbC1tYW5hZ2VyLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYjEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaWRlYmFyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvbGV2ZWwtbWFuYWdlci9sZXZlbC1tYW5hZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCwyQkFBMkI7WUFDL0I7O1lBRUE7Z0JBQ0ksWUFBWTtZQUNoQjs7WUFFQTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsT0FBTztnQkFDUCxjQUFjO2dCQUNkLFlBQVk7WUFDaEI7O0FBRVosNGxDQUE0bEMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWIxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2lkZWJhciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 86842:
/*!**********************************************************************!*\
  !*** ./apps/concierge/src/app/level-manager/level-manager.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LevelManagerModule: () => (/* binding */ LevelManagerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ui.module */ 15412);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/spaces */ 44855);
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/users */ 41489);
/* harmony import */ var _level_manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./level-manager.component */ 98267);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ 12772);
/* harmony import */ var _level_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./level-list.component */ 84532);
/* harmony import */ var _level_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./level-modal.component */ 65013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);












const ROUTES = [{
  path: '',
  component: _level_manager_component__WEBPACK_IMPORTED_MODULE_3__.LevelManagerComponent
}, {
  path: 'new',
  component: _level_manager_component__WEBPACK_IMPORTED_MODULE_3__.LevelManagerComponent
}];
class LevelManagerModule {
  static #_ = this.ɵfac = function LevelManagerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LevelManagerModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: LevelManagerModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_1__.SharedSpacesModule, _placeos_users__WEBPACK_IMPORTED_MODULE_2__.SharedUsersModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](LevelManagerModule, {
    declarations: [_level_manager_component__WEBPACK_IMPORTED_MODULE_3__.LevelManagerComponent, _level_list_component__WEBPACK_IMPORTED_MODULE_4__.LevelListComponent, _level_modal_component__WEBPACK_IMPORTED_MODULE_5__.LevelModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_1__.SharedSpacesModule, _placeos_users__WEBPACK_IMPORTED_MODULE_2__.SharedUsersModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 65013:
/*!***********************************************************************!*\
  !*** ./apps/concierge/src/app/level-manager/level-modal.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LevelModalComponent: () => (/* binding */ LevelModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);


















function LevelModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 7)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function LevelModalComponent_main_4_form_1_div_1_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const building_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", building_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", building_r1.display_name || building_r1.name, " ");
  }
}
function LevelModalComponent_main_4_form_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nStart"](2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-form-field", 15)(5, "mat-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, LevelModalComponent_main_4_form_1_div_1_mat_option_6_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Building is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("error", ctx_r1.form.controls.parent_id.invalid && ctx_r1.form.controls.parent_id.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 3, ctx_r1.building_list));
  }
}
function LevelModalComponent_main_4_form_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function LevelModalComponent_main_4_form_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function LevelModalComponent_main_4_form_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23)(1, "mat-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Has Parking Spaces ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function LevelModalComponent_main_4_form_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LevelModalComponent_main_4_form_1_div_1_Template, 10, 5, "div", 11)(2, LevelModalComponent_main_4_form_1_div_2_Template, 5, 0, "div", 11)(3, LevelModalComponent_main_4_form_1_div_3_Template, 5, 0, "div", 11)(4, LevelModalComponent_main_4_form_1_div_4_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.parent_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.display_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.map_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.parking);
  }
}
function LevelModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LevelModalComponent_main_4_form_1_Template, 5, 5, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.form);
  }
}
function LevelModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "footer", 25)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LevelModalComponent_footer_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function LevelModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Saving level...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class LevelModalComponent {
  constructor(_org, _data, _dialog_ref) {
    this._org = _org;
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.loading = false;
    this.building_list = this._org.building_list;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this._data?.id || ''),
      display_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this._data?.display_name || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this._data?.parent_id || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      map_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this._data?.map_id || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      parking: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this._data?.tags?.includes('parking') || false)
    });
  }
  save() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.form.valid) {
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(`Some form fields are invalid. [${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.getInvalidFields)(_this.form).join(', ')}]`);
      }
      _this.loading = true;
      const data = _this.form.getRawValue();
      data.tags = data.parking ? ['level', 'parking'] : ['level'];
      const resp = yield (data.id ? (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateZone)(data.id, {
        ...data,
        name: `LEVEL ${(0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.authority)().description} ${data.display_name}`
      }) : (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.addZone)({
        ...data,
        name: `LEVEL ${(0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.authority)().description} ${data.display_name}`
      })).toPromise().catch();
      if (resp.id) _this._dialog_ref.close(resp);
      _this.loading = false;
    })();
  }
  static #_ = this.ɵfac = function LevelModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LevelModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: LevelModalComponent,
    selectors: [["level-modal"]],
    decls: 8,
    vars: 5,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_zoneLabel$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS_0 = goog.getMsg(" Building{$startTagSpan}*{$closeTagSpan}: ", {
          "closeTagSpan": "\uFFFD/#3\uFFFD",
          "startTagSpan": "\uFFFD#3\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_0 = MSG_EXTERNAL_zoneLabel$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:@@zoneLabel␟5e09041a10f5eb39aadfaa1a8dd77f4dc8d77314␟711878476466678637: Building${"\uFFFD#3\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_SPAN:: `;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_displayNamePlaceholder$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS_1 = goog.getMsg("Display Name");
        i18n_1 = MSG_EXTERNAL_displayNamePlaceholder$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:@@displayNamePlaceholder␟e438ba78cbafdb5bcbce0820bfaad995a504f222␟3013055597615607317:Display Name`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS_2 = goog.getMsg(" Display Name: ");
        i18n_2 = MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:@@displayNameLabel␟8d766661ed5e178519720ec8e959d2a737f600a6␟1377207093952578744: Display Name: `;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_mapIdPlaceholder$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS_3 = goog.getMsg("URL of the Map SVG file");
        i18n_3 = MSG_EXTERNAL_mapIdPlaceholder$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:@@mapIdPlaceholder␟f78f3836515ccc83a36f25d9174f585019d54341␟1505388289077394171:URL of the Map SVG file`;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_mapIdLabel$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS_4 = goog.getMsg(" Map URL: ");
        i18n_4 = MSG_EXTERNAL_mapIdLabel$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS_4;
      } else {
        i18n_4 = $localize`:@@mapIdLabel␟df25418cac1c9528713ba16dc8d5e1f497e1e0d3␟7638966832226302469: Map URL: `;
      }
      return [["load_state", ""], i18n_0, i18n_2, i18n_4, ["btn", "", "icon", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "max-h-[65vh] overflow-y-auto overflow-x-hidden p-4", 4, "ngIf", "ngIfElse"], ["class", "p-2 flex justify-end border-t border-base-200", 4, "ngIf"], ["btn", "", "icon", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "overflow-y-auto", "overflow-x-hidden", "p-4"], ["system", "", "class", "flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]", 3, "formGroup", 4, "ngIf"], ["system", "", 1, "flex", "flex-col", "w-[36rem]", "max-w-[calc(100vw-4rem)]", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], ["class", "flex flex-col py-2", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "zone"], ["appearance", "outline"], ["formControlName", "parent_id", "placeholder", "Select Building"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["for", "display-name"], ["matInput", "", "name", "display-name", "placeholder", i18n_1, "formControlName", "display_name"], ["for", "map-id"], ["matInput", "", "name", "map-id", "placeholder", i18n_3, "formControlName", "map_id"], [1, "flex", "flex-col", "py-2"], ["name", "parking", "formControlName", "parking"], [1, "p-2", "flex", "justify-end", "border-t", "border-base-200"], ["btn", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "w-64", "h-64"], ["diameter", "32"], [1, "mt-4"]];
    },
    template: function LevelModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header")(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, LevelModalComponent_button_3_Template, 3, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, LevelModalComponent_main_4_Template, 2, 1, "main", 5)(5, LevelModalComponent_footer_5_Template, 3, 0, "footer", 6)(6, LevelModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.form.value.id ? "Edit" : "Add", " Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckbox, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe]
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
//# sourceMappingURL=apps_concierge_src_app_level-manager_level-manager_module_ts.js.map