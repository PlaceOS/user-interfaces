"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_level-manager_level-manager_module_ts"],{

/***/ 92358:
/*!**********************************************************************!*\
  !*** ./apps/concierge/src/app/level-manager/level-list.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LevelListComponent: () => (/* binding */ LevelListComponent)
/* harmony export */ });
/* harmony import */ var _level_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level-management.service */ 63650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-table.component */ 27442);








function LevelListComponent_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function LevelListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, LevelListComponent_ng_template_2_div_0_Template, 3, 0, "div", 4);
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r4.tags == null ? null : row_r4.tags.includes("parking"));
  }
}
function LevelListComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "button", 7)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-menu", null, 8)(6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LevelListComponent_ng_template_4_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const row_r6 = restoredCtx.row;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.editLevel(row_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 10)(8, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Edit Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LevelListComponent_ng_template_4_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const row_r6 = restoredCtx.row;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.removeLevel(row_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 11)(14, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Delete Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r7);
  }
}
const _c0 = () => ["display_name", "building", "parking", "actions"];
const _c1 = () => ["Name", "Building", "Parking", " "];
const _c2 = () => ["flex", "12r", "4r", "3.75r"];
const _c3 = (a0, a1) => ({
  actions: a0,
  parking: a1
});
class LevelListComponent {
  constructor(_manager) {
    this._manager = _manager;
    this.levels = this._manager.filtered_levels;
    this.editLevel = level => this._manager.editLevel(level);
    this.removeLevel = level => this._manager.removeLevel(level);
  }
  static #_ = this.ɵfac = function LevelListComponent_Factory(t) {
    return new (t || LevelListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_level_management_service__WEBPACK_IMPORTED_MODULE_0__.LevelManagementService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LevelListComponent,
    selectors: [["level-list"]],
    decls: 6,
    vars: 11,
    consts: [[1, "absolute", "inset-0", "overflow-auto", "px-4"], ["empty", "No levels", 1, "block", "min-w-[28rem]", "w-full", "h-full", 3, "dataSource", "columns", "display_column", "column_size", "template"], ["parking_template", ""], ["action_template", ""], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto", 4, "ngIf"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-success", "text-success-content", "mx-auto"], [1, "w-full", "flex", "justify-end", "space-x-2"], ["btn", "", "icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "items-center", "space-x-2", "text-red-500"]],
    template: function LevelListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "custom-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LevelListComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(4, LevelListComponent_ng_template_4_Template, 18, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.levels)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0))("display_column", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c1))("column_size", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c2))("template", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](8, _c3, _r3, _r1));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_2__.CustomTableComponent]
  });
}

/***/ }),

/***/ 63650:
/*!**************************************************************************!*\
  !*** ./apps/concierge/src/app/level-manager/level-management.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LevelManagementService: () => (/* binding */ LevelManagementService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ 64331);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70462);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var _level_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./level-modal.component */ 64488);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 17401);











class LevelManagementService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject({});
    this._change = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(0);
    this.options = this._options.asObservable();
    this.level_list = this._org.level_list;
    this.filtered_levels = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.level_list, this._options]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([list, options]) => {
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
  static #_ = this.ɵfac = function LevelManagementService_Factory(t) {
    return new (t || LevelManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_1__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: LevelManagementService,
    factory: LevelManagementService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 41512:
/*!*************************************************************************!*\
  !*** ./apps/concierge/src/app/level-manager/level-manager.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LevelManagerComponent: () => (/* binding */ LevelManagerComponent)
/* harmony export */ });
/* harmony import */ var _level_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level-management.service */ 63650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/app-topbar.component */ 33005);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 19842);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _level_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./level-list.component */ 92358);







const _c0 = ["app-level-manager", ""];
class LevelManagerComponent {
  constructor(_manager) {
    this._manager = _manager;
    this.newLevel = () => this._manager.editLevel();
  }
  static #_ = this.ɵfac = function LevelManagerComponent_Factory(t) {
    return new (t || LevelManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_level_management_service__WEBPACK_IMPORTED_MODULE_0__.LevelManagementService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LevelManagerComponent,
    selectors: [["", "app-level-manager", ""]],
    attrs: _c0,
    decls: 10,
    vars: 0,
    consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "flex", "items-center", "justify-between", "mb-2", "px-4", "py-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 3, "click"], [1, "block", "w-full", "relative", "flex-1", "h-1/2"]],
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
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n\n            sidebar[_ngcontent-%COMP%] {\n                height: 100%;\n            }\n\n            main[_ngcontent-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                flex: 1;\n                min-width: 50%;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvbGV2ZWwtbWFuYWdlci9sZXZlbC1tYW5hZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCwyQkFBMkI7WUFDL0I7O1lBRUE7Z0JBQ0ksWUFBWTtZQUNoQjs7WUFFQTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsT0FBTztnQkFDUCxjQUFjO2dCQUNkLFlBQVk7WUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWIxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2lkZWJhciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 63759:
/*!**********************************************************************!*\
  !*** ./apps/concierge/src/app/level-manager/level-manager.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LevelManagerModule: () => (/* binding */ LevelManagerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ui.module */ 97428);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/spaces */ 55322);
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/users */ 81239);
/* harmony import */ var _level_manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./level-manager.component */ 41512);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ 21757);
/* harmony import */ var _level_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./level-list.component */ 92358);
/* harmony import */ var _level_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./level-modal.component */ 64488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);












const ROUTES = [{
  path: '',
  component: _level_manager_component__WEBPACK_IMPORTED_MODULE_3__.LevelManagerComponent
}, {
  path: 'new',
  component: _level_manager_component__WEBPACK_IMPORTED_MODULE_3__.LevelManagerComponent
}];
class LevelManagerModule {
  static #_ = this.ɵfac = function LevelManagerModule_Factory(t) {
    return new (t || LevelManagerModule)();
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

/***/ 64488:
/*!***********************************************************************!*\
  !*** ./apps/concierge/src/app/level-manager/level-modal.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LevelModalComponent: () => (/* binding */ LevelModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 64331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);


















function LevelModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 4)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function LevelModalComponent_main_4_form_1_div_1_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const building_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", building_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", building_r11.display_name || building_r11.name, " ");
  }
}
function LevelModalComponent_main_4_form_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nStart"](2, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-form-field", 13)(5, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, LevelModalComponent_main_4_form_1_div_1_mat_option_6_Template, 2, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Building is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("error", ctx_r6.form.controls.parent_id.invalid && ctx_r6.form.controls.parent_id.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 3, ctx_r6.building_list));
  }
}
function LevelModalComponent_main_4_form_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function LevelModalComponent_main_4_form_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LevelModalComponent_main_4_form_1_div_1_Template, 10, 5, "div", 8)(2, LevelModalComponent_main_4_form_1_div_2_Template, 5, 0, "div", 8)(3, LevelModalComponent_main_4_form_1_div_3_Template, 5, 0, "div", 8)(4, LevelModalComponent_main_4_form_1_div_4_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r5.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.form.controls.parent_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.form.controls.display_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.form.controls.map_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.form.controls.parking);
  }
}
function LevelModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LevelModalComponent_main_4_form_1_Template, 5, 5, "form", 6);
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
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "footer", 25)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LevelModalComponent_footer_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.save());
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
  static #_ = this.ɵfac = function LevelModalComponent_Factory(t) {
    return new (t || LevelModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef));
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
        const MSG_EXTERNAL_zoneLabel$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS____0 = goog.getMsg(" Building{$startTagSpan}*{$closeTagSpan}: ", {
          "closeTagSpan": "\uFFFD/#3\uFFFD",
          "startTagSpan": "\uFFFD#3\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_0 = MSG_EXTERNAL_zoneLabel$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS____0;
      } else {
        i18n_0 = $localize`:@@zoneLabel␟5e09041a10f5eb39aadfaa1a8dd77f4dc8d77314␟711878476466678637: Building${"\uFFFD#3\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_SPAN:: `;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS____1 = goog.getMsg(" Display Name: ");
        i18n_1 = MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS____1;
      } else {
        i18n_1 = $localize`:@@displayNameLabel␟8d766661ed5e178519720ec8e959d2a737f600a6␟1377207093952578744: Display Name: `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_displayNamePlaceholder$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS____2 = goog.getMsg("Display Name");
        i18n_2 = MSG_EXTERNAL_displayNamePlaceholder$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS____2;
      } else {
        i18n_2 = $localize`:@@displayNamePlaceholder␟e438ba78cbafdb5bcbce0820bfaad995a504f222␟3013055597615607317:Display Name`;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_mapIdLabel$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS____3 = goog.getMsg(" Map URL: ");
        i18n_3 = MSG_EXTERNAL_mapIdLabel$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS____3;
      } else {
        i18n_3 = $localize`:@@mapIdLabel␟df25418cac1c9528713ba16dc8d5e1f497e1e0d3␟7638966832226302469: Map URL: `;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_mapIdPlaceholder$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS____4 = goog.getMsg("URL of the Map SVG file");
        i18n_4 = MSG_EXTERNAL_mapIdPlaceholder$$APPS_CONCIERGE_SRC_APP_LEVEL_MANAGER_LEVEL_MODAL_COMPONENT_TS____4;
      } else {
        i18n_4 = $localize`:@@mapIdPlaceholder␟f78f3836515ccc83a36f25d9174f585019d54341␟1505388289077394171:URL of the Map SVG file`;
      }
      return [["btn", "", "icon", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "max-h-[65vh] overflow-y-auto overflow-x-hidden p-4", 4, "ngIf", "ngIfElse"], ["class", "p-2 flex justify-end border-t border-base-200", 4, "ngIf"], ["load_state", ""], ["btn", "", "icon", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "overflow-y-auto", "overflow-x-hidden", "p-4"], ["system", "", "class", "flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]", 3, "formGroup", 4, "ngIf"], ["system", "", 1, "flex", "flex-col", "w-[36rem]", "max-w-[calc(100vw-4rem)]", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], ["class", "flex flex-col py-2", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "zone"], i18n_0, ["appearance", "outline"], ["formControlName", "parent_id", "placeholder", "Select Building"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["for", "display-name"], i18n_1, ["matInput", "", "name", "display-name", "placeholder", i18n_2, "formControlName", "display_name"], ["for", "map-id"], i18n_3, ["matInput", "", "name", "map-id", "placeholder", i18n_4, "formControlName", "map_id"], [1, "flex", "flex-col", "py-2"], ["name", "parking", "formControlName", "parking"], [1, "p-2", "flex", "justify-end", "border-t", "border-base-200"], ["btn", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "w-64", "h-64"], ["diameter", "32"], [1, "mt-4"]];
    },
    template: function LevelModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header")(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, LevelModalComponent_button_3_Template, 3, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, LevelModalComponent_main_4_Template, 2, 1, "main", 1)(5, LevelModalComponent_footer_5_Template, 3, 0, "footer", 2)(6, LevelModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.form.value.id ? "Edit" : "Add", " Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckbox, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe]
  });
}

/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_level-manager_level-manager_module_ts.js.map