"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_room-manager_room-manager_module_ts"],{

/***/ 97068:
/*!***************************************************************************!*\
  !*** ./apps/concierge/src/app/room-manager/new-room-manager.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewRoomManagerComponent: () => (/* binding */ NewRoomManagerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/app-topbar.component */ 33005);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 19842);
/* harmony import */ var _room_manager_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-manager-topbar.component */ 26567);
/* harmony import */ var _room_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room-list.component */ 49315);





const _c0 = ["app-new-room-manager", ""];
class NewRoomManagerComponent {
  static #_ = this.ɵfac = function NewRoomManagerComponent_Factory(t) {
    return new (t || NewRoomManagerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: NewRoomManagerComponent,
    selectors: [["", "app-new-room-manager", ""]],
    attrs: _c0,
    decls: 6,
    vars: 0,
    consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "block", "w-full"], [1, "block", "w-full", "relative", "flex-1", "h-1/2"]],
    template: function NewRoomManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "room-manager-topbar", 2)(5, "room-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__.ApplicationTopbarComponent, _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.ApplicationSidebarComponent, _room_manager_topbar_component__WEBPACK_IMPORTED_MODULE_2__.RoomManagerTopbarComponent, _room_list_component__WEBPACK_IMPORTED_MODULE_3__.RoomListComponent],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n\n            sidebar[_ngcontent-%COMP%] {\n                height: 100%;\n            }\n\n            main[_ngcontent-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                flex: 1;\n                min-width: 50%;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcm9vbS1tYW5hZ2VyL25ldy1yb29tLW1hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsWUFBWTtnQkFDWixXQUFXO2dCQUNYLDJCQUEyQjtZQUMvQjs7WUFFQTtnQkFDSSxZQUFZO1lBQ2hCOztZQUVBO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixPQUFPO2dCQUNQLGNBQWM7Z0JBQ2QsWUFBWTtZQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYjEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaWRlYmFyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 49315:
/*!********************************************************************!*\
  !*** ./apps/concierge/src/app/room-manager/room-list.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomListComponent: () => (/* binding */ RoomListComponent)
/* harmony export */ });
/* harmony import */ var _room_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room-management.service */ 64509);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/clipboard */ 4362);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-table.component */ 27442);
/* harmony import */ var _libs_components_src_lib_level_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/level.pipe */ 6612);











function RoomListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RoomListComponent_ng_template_2_Template_span_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const row_r8 = restoredCtx.row;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.copyToClipboard(row_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    const data_r9 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", row_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r9);
  }
}
function RoomListComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "level");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "level");
  }
  if (rf & 2) {
    const data_r12 = ctx.data;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, data_r12)) == null ? null : tmp_0_0.display_name) || ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 3, data_r12)) == null ? null : tmp_0_0.name), " ");
  }
}
function RoomListComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r13 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("bg-error", !data_r13)("bg-success", data_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r13 ? "done" : "close");
  }
}
function RoomListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8)(1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RoomListComponent_ng_template_8_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const row_r14 = restoredCtx.row;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.editRoom(row_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
const _c0 = () => ["display_name", "zones", "capacity", "type", "bookable", "actions"];
const _c1 = () => ["Room Name", "Level", "Capacity", "Room Type", "Bookable", " "];
const _c2 = () => ["flex", "8r", "6r", "8r", "6r", "3.75r"];
const _c3 = (a0, a1, a2, a3) => ({
  display_name: a0,
  bookable: a1,
  zones: a2,
  actions: a3
});
class RoomListComponent {
  constructor(_manager, _clipboard) {
    this._manager = _manager;
    this._clipboard = _clipboard;
    this.rooms = this._manager.filtered_rooms;
    this.editRoom = room => this._manager.editRoom(room);
    this.copyToClipboard = id => {
      const success = this._clipboard.copy(id);
      if (success) (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Room ID copied to clipboard.');
    };
  }
  static #_ = this.ɵfac = function RoomListComponent_Factory(t) {
    return new (t || RoomListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_room_management_service__WEBPACK_IMPORTED_MODULE_0__.RoomManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__.Clipboard));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: RoomListComponent,
    selectors: [["room-list"]],
    decls: 10,
    vars: 13,
    consts: [[1, "absolute", "inset-0", "overflow-auto", "px-4"], ["empty", "No rooms for selected level or building", 1, "block", "min-w-[48rem]", "w-full", "h-full", 3, "dataSource", "columns", "display_column", "column_size", "template"], ["name_template", ""], ["level_template", ""], ["bool_template", ""], ["action_template", ""], [1, "underline", 3, "matTooltip", "click"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "text-white", "mx-auto"], [1, "w-full", "flex", "justify-end", "space-x-2"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Edit Room", 3, "click"]],
    template: function RoomListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "custom-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, RoomListComponent_ng_template_2_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(4, RoomListComponent_ng_template_4_Template, 3, 5, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(6, RoomListComponent_ng_template_6_Template, 3, 5, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(8, RoomListComponent_ng_template_8_Template, 4, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.rooms)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c0))("display_column", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c1))("column_size", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c2))("template", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](8, _c3, _r1, _r5, _r3, _r7));
      }
    },
    dependencies: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_3__.CustomTableComponent, _libs_components_src_lib_level_pipe__WEBPACK_IMPORTED_MODULE_4__.LevelPipe]
  });
}

/***/ }),

/***/ 64509:
/*!************************************************************************!*\
  !*** ./apps/concierge/src/app/room-manager/room-management.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomManagementService: () => (/* binding */ RoomManagementService)
/* harmony export */ });
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ 64331);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 70462);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 85046);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 36520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 58175);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 680);
/* harmony import */ var _room_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-modal.component */ 17616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 17401);









class RoomManagementService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({});
    this._change = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(0);
    this.options = this._options.asObservable();
    this.room_list = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this._org.active_building, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(([_]) => !!_?.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(([bld]) => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.querySystems)({
      zone_id: bld.id
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(({
      data
    }) => data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([])))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(list => list.filter(_ => this._org.levelWithID(_.zones)).sort((a, b) => a.name.localeCompare(b.name))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.shareReplay)(1));
    this.filtered_rooms = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this.room_list, this._options]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([list, options]) => {
      if (options.zone) {
        list = list.filter(_ => _.zones.includes(options.zone));
      }
      if (options.search) {
        list = list.filter(_ => _.name.toLowerCase().includes(options.search.toLowerCase()));
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
  editRoom(room = new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.PlaceSystem()) {
    const ref = this._dialog.open(_room_modal_component__WEBPACK_IMPORTED_MODULE_2__.RoomModalComponent, {
      data: {
        room
      }
    });
    ref.afterClosed().subscribe(data => {
      if (data) setTimeout(() => this._change.next(Date.now()), 300);
    });
  }
  static #_ = this.ɵfac = function RoomManagementService_Factory(t) {
    return new (t || RoomManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_0__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: RoomManagementService,
    factory: RoomManagementService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 26567:
/*!******************************************************************************!*\
  !*** ./apps/concierge/src/app/room-manager/room-manager-topbar.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomManagerTopbarComponent: () => (/* binding */ RoomManagerTopbarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _room_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room-management.service */ 64509);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 17627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 46939);
/* harmony import */ var _ui_booking_rules_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/booking-rules-modal.component */ 67232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/searchbar.component */ 97338);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);





















function RoomManagerTopbarComponent_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", level_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", level_r1.display_name || level_r1.name, " ");
  }
}
class RoomManagerTopbarComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_3__.AsyncHandler {
  get building() {
    return this._org.building;
  }
  constructor(_manager, _org, _route, _router, _dialog) {
    super();
    this._manager = _manager;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this._dialog = _dialog;
    /** List of levels for the active building */
    this.levels = this._org.active_levels;
    this.filters = this._manager.options;
    /** Set filtered date */
    this.setFilters = filters => this._manager.setFilters(filters);
    /** Set filter string */
    this.setSearch = str => this._manager.setSearchString(str);
    /** Update active zones for desks */
    this.updateZones = zone => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          zone_id: zone
        }
      });
      this._manager.setFilters({
        zone
      });
    };
    this.newRoom = () => this._manager.editRoom();
  }
  manageRestrictions() {
    this._dialog.open(_ui_booking_rules_modal_component__WEBPACK_IMPORTED_MODULE_4__.BookingRulesModalComponent, {
      data: {
        type: 'room'
      }
    });
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.first)(_ => _)).toPromise();
      _this.subscription('route.query', _this._route.queryParamMap.subscribe( /*#__PURE__*/function () {
        var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          if (params.has('zone_id')) {
            const new_zone = params.get('zone_id');
            const {
              zone
            } = yield _this._manager.options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).toPromise();
            if (new_zone && new_zone !== zone) {
              const level = _this._org.levelWithID([new_zone]);
              if (!level) return;
              _this._org.building = _this._org.buildings.find(bld => bld.id === level.parent_id);
              _this.setFilters({
                zone: new_zone
              });
            }
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()));
      _this.subscription('levels', _this._org.active_levels.subscribe(levels => {
        var zone = levels.find(lvl => lvl.id === zone);
        if (!zone && levels.length) zone = levels[0].id;
        _this.updateZones(zone);
      }));
      _this.setSearch('');
    })();
  }
  static #_ = this.ɵfac = function RoomManagerTopbarComponent_Factory(t) {
    return new (t || RoomManagerTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_room_management_service__WEBPACK_IMPORTED_MODULE_1__.RoomManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: RoomManagerTopbarComponent,
    selectors: [["room-manager-topbar"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 18,
    vars: 7,
    consts: [[1, "flex", "items-center", "justify-between", "p-4"], [1, "text-2xl", "font-medium"], ["btn", "", 1, "w-32", 3, "click"], [1, "flex", "items-center", "bg-base-100", "h-20", "px-4", "space-x-2"], ["appearance", "outline"], ["placeholder", "All Levels", 3, "ngModel", "ngModelChange"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex-1", "w-2"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Room Restrictions", 1, "bg-secondary", "text-secondary-content", "rounded", 3, "click"], [1, "mr-2", 3, "modelChange"]],
    template: function RoomManagerTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Room Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoomManagerTopbarComponent_Template_button_click_3_listener() {
          return ctx.newRoom();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "New Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3)(6, "mat-form-field", 4)(7, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RoomManagerTopbarComponent_Template_mat_select_ngModelChange_7_listener($event) {
          return ctx.updateZones($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "All Levels");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, RoomManagerTopbarComponent_mat_option_11_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoomManagerTopbarComponent_Template_button_click_14_listener() {
          return ctx.manageRestrictions();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "lock_open");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "searchbar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("modelChange", function RoomManagerTopbarComponent_Template_searchbar_modelChange_17_listener($event) {
          return ctx.setSearch($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 3, ctx.filters)) == null ? null : tmp_0_0.zone);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.building == null ? null : ctx.building.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 5, ctx.levels));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_5__.SearchbarComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
    styles: ["mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25rem;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcm9vbS1tYW5hZ2VyL3Jvb20tbWFuYWdlci10b3BiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxlQUFlO1lBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjI1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 29910:
/*!***********************************************************************!*\
  !*** ./apps/concierge/src/app/room-manager/room-manager.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomManagerComponent: () => (/* binding */ RoomManagerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/sidebar.component */ 42349);
/* harmony import */ var _room_manager_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room-manager-topbar.component */ 26567);
/* harmony import */ var _room_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-list.component */ 49315);




const _c0 = ["app-room-manager", ""];
class RoomManagerComponent {
  static #_ = this.ɵfac = function RoomManagerComponent_Factory(t) {
    return new (t || RoomManagerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: RoomManagerComponent,
    selectors: [["", "app-room-manager", ""]],
    attrs: _c0,
    decls: 4,
    vars: 0,
    consts: [[1, "relative", "overflow-hidden", "flex", "flex-col"], [1, "block", "w-full"], [1, "block", "w-full", "relative", "flex-1", "h-1/2"]],
    template: function RoomManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "room-manager-topbar", 1)(3, "room-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_ui_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _room_manager_topbar_component__WEBPACK_IMPORTED_MODULE_1__.RoomManagerTopbarComponent, _room_list_component__WEBPACK_IMPORTED_MODULE_2__.RoomListComponent],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n                background: var(--b1);\n            }\n\n            sidebar[_ngcontent-%COMP%] {\n                height: 100%;\n            }\n\n            main[_ngcontent-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                flex: 1;\n                min-width: 50%;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcm9vbS1tYW5hZ2VyL3Jvb20tbWFuYWdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2IsWUFBWTtnQkFDWixXQUFXO2dCQUNYLHFCQUFxQjtZQUN6Qjs7WUFFQTtnQkFDSSxZQUFZO1lBQ2hCOztZQUVBO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixPQUFPO2dCQUNQLGNBQWM7Z0JBQ2QsWUFBWTtZQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWIxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2lkZWJhciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 30414:
/*!********************************************************************!*\
  !*** ./apps/concierge/src/app/room-manager/room-manager.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomManagerModule: () => (/* binding */ RoomManagerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ui.module */ 97428);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/spaces */ 55322);
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/users */ 81239);
/* harmony import */ var _room_manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room-manager.component */ 29910);
/* harmony import */ var _room_manager_topbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./room-manager-topbar.component */ 26567);
/* harmony import */ var _room_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./room-list.component */ 49315);
/* harmony import */ var _room_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./room-modal.component */ 17616);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ 21757);
/* harmony import */ var _new_room_manager_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-room-manager.component */ 97068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);














const ROUTES = [{
  path: '',
  component: _room_manager_component__WEBPACK_IMPORTED_MODULE_3__.RoomManagerComponent
}, {
  path: 'new',
  component: _new_room_manager_component__WEBPACK_IMPORTED_MODULE_7__.NewRoomManagerComponent
}];
class RoomManagerModule {
  static #_ = this.ɵfac = function RoomManagerModule_Factory(t) {
    return new (t || RoomManagerModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: RoomManagerModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_1__.SharedSpacesModule, _placeos_users__WEBPACK_IMPORTED_MODULE_2__.SharedUsersModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](RoomManagerModule, {
    declarations: [_new_room_manager_component__WEBPACK_IMPORTED_MODULE_7__.NewRoomManagerComponent, _room_manager_component__WEBPACK_IMPORTED_MODULE_3__.RoomManagerComponent, _room_manager_topbar_component__WEBPACK_IMPORTED_MODULE_4__.RoomManagerTopbarComponent, _room_list_component__WEBPACK_IMPORTED_MODULE_5__.RoomListComponent, _room_modal_component__WEBPACK_IMPORTED_MODULE_6__.RoomModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_1__.SharedSpacesModule, _placeos_users__WEBPACK_IMPORTED_MODULE_2__.SharedUsersModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 17616:
/*!*********************************************************************!*\
  !*** ./apps/concierge/src/app/room-manager/room-modal.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomModalComponent: () => (/* binding */ RoomModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/keycodes */ 30554);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ 64331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/spaces */ 55322);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);
/* harmony import */ var _libs_form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/duration-field.component */ 28442);
/* harmony import */ var _libs_form_fields_src_lib_image_list_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/image-list-field.component */ 64035);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/chips */ 21757);



























function RoomModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 4)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function RoomModalComponent_main_4_form_1_div_1_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", level_r21.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", level_r21.display_name || level_r21.name, " ");
  }
}
function RoomModalComponent_main_4_form_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nStart"](2, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-form-field", 21)(5, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, RoomModalComponent_main_4_form_1_div_1_mat_option_6_Template, 2, 2, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Level is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("error", ctx_r6.form.controls.zone.invalid && ctx_r6.form.controls.zone.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 3, ctx_r6.levels));
  }
}
function RoomModalComponent_main_4_form_1_div_3_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RoomModalComponent_main_4_form_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31)(1, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nStart"](2, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, RoomModalComponent_main_4_form_1_div_3_mat_error_6_Template, 2, 0, "mat-error", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("error", ctx_r7.form.controls.name.invalid && ctx_r7.form.controls.name.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.form.controls.name.invalid);
  }
}
function RoomModalComponent_main_4_form_1_div_4_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RoomModalComponent_main_4_form_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31)(1, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, RoomModalComponent_main_4_form_1_div_4_mat_error_5_Template, 2, 0, "mat-error", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("error", ctx_r8.form.controls.email.invalid && ctx_r8.form.controls.email.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.form.controls.email.invalid);
  }
}
function RoomModalComponent_main_4_form_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31)(1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function RoomModalComponent_main_4_form_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31)(1, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function RoomModalComponent_main_4_form_1_div_22_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RoomModalComponent_main_4_form_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31)(1, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, RoomModalComponent_main_4_form_1_div_22_mat_error_5_Template, 2, 0, "mat-error", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("error", ctx_r11.form.controls.capacity.invalid && ctx_r11.form.controls.capacity.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r11.form.controls.capacity.invalid);
  }
}
function RoomModalComponent_main_4_form_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "mat-checkbox", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function RoomModalComponent_main_4_form_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "textarea", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function RoomModalComponent_main_4_form_1_div_25_mat_chip_row_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-chip-row", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("removed", function RoomModalComponent_main_4_form_1_div_25_mat_chip_row_6_Template_mat_chip_row_removed_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29);
      const feature_r27 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r28.removeFeature(feature_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "app-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const feature_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selectable", true)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", feature_r27, " ");
  }
}
function RoomModalComponent_main_4_form_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-form-field", 21)(4, "mat-chip-grid", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, RoomModalComponent_main_4_form_1_div_25_mat_chip_row_6_Template, 4, 3, "mat-chip-row", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("matChipInputTokenEnd", function RoomModalComponent_main_4_form_1_div_25_Template_input_matChipInputTokenEnd_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r30.addFeature($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](5);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("error", ctx_r14.form.controls.features.invalid && ctx_r14.form.controls.features.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r14.feature_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matChipInputFor", _r25)("matChipInputSeparatorKeyCodes", ctx_r14.separators)("matChipInputAddOnBlur", true);
  }
}
function RoomModalComponent_main_4_form_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function RoomModalComponent_main_4_form_1_mat_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tz_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", tz_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](tz_r32);
  }
}
function RoomModalComponent_main_4_form_1_mat_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " No matching timezones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", true);
  }
}
function RoomModalComponent_main_4_form_1_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "image-list-field", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RoomModalComponent_main_4_form_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, RoomModalComponent_main_4_form_1_div_1_Template, 10, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, RoomModalComponent_main_4_form_1_div_3_Template, 7, 3, "div", 10)(4, RoomModalComponent_main_4_form_1_div_4_Template, 6, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, RoomModalComponent_main_4_form_1_div_6_Template, 5, 0, "div", 10)(7, RoomModalComponent_main_4_form_1_div_7_Template, 5, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 11)(9, "div", 12)(10, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " Default Setup Duration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "app-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " info_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "a-duration-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 12)(16, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " Default Breakdown Duration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "app-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, " info_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "a-duration-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, RoomModalComponent_main_4_form_1_div_22_Template, 6, 3, "div", 10)(23, RoomModalComponent_main_4_form_1_div_23_Template, 3, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, RoomModalComponent_main_4_form_1_div_24_Template, 5, 0, "div", 8)(25, RoomModalComponent_main_4_form_1_div_25_Template, 8, 6, "div", 8)(26, RoomModalComponent_main_4_form_1_div_26_Template, 5, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 19)(28, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Timezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "mat-form-field", 21)(31, "app-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "mat-autocomplete", null, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, RoomModalComponent_main_4_form_1_mat_option_36_Template, 2, 2, "mat-option", 25)(37, RoomModalComponent_main_4_form_1_mat_option_37_Template, 2, 1, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, RoomModalComponent_main_4_form_1_div_38_Template, 4, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](35);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r5.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.form.controls.zone);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.form.controls.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.form.controls.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.form.controls.display_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.form.controls.display_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r5.settings_form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.form.controls.capacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.form.controls.bookable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.form.controls.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.form.controls.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.form.controls.map_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matAutocomplete", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r5.filtered_timezones);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r5.timezones.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.form.controls.images);
  }
}
function RoomModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "main", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, RoomModalComponent_main_4_form_1_Template, 39, 18, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.form);
  }
}
function RoomModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "footer", 70)(1, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RoomModalComponent_footer_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r33.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function RoomModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-spinner", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Saving room...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
class RoomModalComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  get feature_list() {
    return this.form.controls.features.value;
  }
  constructor(_data, _dialog_ref, _org) {
    super();
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this._org = _org;
    this.loading = false;
    this.timezones = [];
    this.filtered_timezones = [];
    /** List of levels for the active building */
    this.levels = this._org.active_levels;
    /** Group of form fields used for creating the system */
    this.form = (0,_placeos_spaces__WEBPACK_IMPORTED_MODULE_3__.generateSystemsFormFields)(this._data.room);
    this.settings_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
      setup: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(0),
      breakdown: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(0)
    });
    /** Levels of encyption available for the system's settings */
    this.encryption_levels = [{
      id: _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.EncryptionLevel.None,
      name: 'None'
    }, {
      id: _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.EncryptionLevel.Support,
      name: 'Support'
    }, {
      id: _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.EncryptionLevel.Admin,
      name: 'Admin'
    }, {
      id: _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.EncryptionLevel.NeverDisplay,
      name: 'Never Display'
    }];
    /** Function for querying zones */
    this.query_fn = _ => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.queryZones)({
      q: _
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(resp => resp.data));
    /** List of separator characters for features */
    this.separators = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__.COMMA, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__.SPACE];
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        details
      } = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.showMetadata)(_this._org.organisation.id, 'settings').toPromise();
      const overflow = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.getItemWithKeys)(['events', 'overflow'], details) || {};
      if (_this._data.room.id && overflow[_this._data.room.id]) {
        _this.settings_form.patchValue(overflow[_this._data.room.id]);
      }
    })();
  }
  ngOnChanges(changes) {
    if (changes.form) {
      this.updateTimezoneList();
      this.subscription('tz-change', this.form.valueChanges.subscribe(({
        timezone
      }) => this.filtered_timezones = this.timezones.filter(_ => _.toLowerCase().includes(timezone.toLowerCase()))));
    }
  }
  /**
   * Add a feature to the list of features for the item
   * @param event Input event
   */
  addFeature(event) {
    if (!this.form || !this.form.controls.features) return;
    const input = event.input;
    const value = event.value;
    const feature_list = this.feature_list;
    if ((value || '').trim()) {
      feature_list.push(value);
      this.form.controls.features.setValue(feature_list);
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  /**
   * Remove feature from the list
   * @param existing_feature Feature to remove
   */
  removeFeature(existing_feature) {
    if (!this.form || !this.form.controls.features) return;
    const feature_list = this.feature_list;
    const index = feature_list.indexOf(existing_feature);
    if (index >= 0) {
      feature_list.splice(index, 1);
      this.form.controls.features.setValue(feature_list);
    }
  }
  updateTimezoneList() {
    const timezone = this.form?.value?.timezone || '';
    this.timezones = _placeos_common__WEBPACK_IMPORTED_MODULE_2__.TIMEZONES_IANA;
    this.filtered_timezones = this.timezones.filter(_ => _.toLowerCase().includes(timezone.toLowerCase()));
  }
  save() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.form.valid) return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)(`Some form fields are invalid. [${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.getInvalidFields)(_this2.form).join(', ')}]`);
      if (!_this2.form.value.id) {
        _this2.form.patchValue({
          display_name: _this2.form.value.display_name || _this2.form.value.name,
          zones: (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.unique)([_this2._org.organisation.id, _this2._org.building.parent_id, _this2._org.building.id, `${_this2.form.value.zone?.id || _this2.form.value.zone || ''}`]).filter(_ => _)
        });
      }
      _this2.loading = true;
      _this2._dialog_ref.disableClose = true;
      const data = _this2.form.getRawValue();
      const {
        details
      } = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.showMetadata)(_this2._org.organisation.id, 'settings').toPromise();
      const overflow = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.getItemWithKeys)(['events', 'overflow'], details) || {};
      overflow[data.id] = _this2.settings_form.value;
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.updateMetadata)(_this2._org.organisation.id, {
        name: 'settings',
        details: {
          ...details,
          events: {
            ...(details.events || {}),
            overflow
          }
        },
        description: ''
      }).toPromise();
      yield (data.id ? (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.updateSystem)(data.id, data) : (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.addSystem)(data)).toPromise();
      _this2._dialog_ref.disableClose = false;
      _this2._dialog_ref.close(true);
      _this2.loading = false;
    })();
  }
  static #_ = this.ɵfac = function RoomModalComponent_Factory(t) {
    return new (t || RoomModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: RoomModalComponent,
    selectors: [["room-form-modal"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
    decls: 8,
    vars: 5,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_zoneLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____0 = goog.getMsg(" Level{$startTagSpan}*{$closeTagSpan}: ", {
          "closeTagSpan": "\uFFFD/#3\uFFFD",
          "startTagSpan": "\uFFFD#3\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_0 = MSG_EXTERNAL_zoneLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____0;
      } else {
        i18n_0 = $localize`:@@zoneLabel␟805d5ab24c829f98df246a63541ee827ce04a4c4␟6308222021008136210: Level${"\uFFFD#3\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_SPAN:: `;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_nameLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____1 = goog.getMsg(" Name{$startTagSpan}*{$closeTagSpan}: ", {
          "closeTagSpan": "\uFFFD/#3\uFFFD",
          "startTagSpan": "\uFFFD#3\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_1 = MSG_EXTERNAL_nameLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____1;
      } else {
        i18n_1 = $localize`:@@nameLabel␟ce22d533a3bc86b04d363cdacf055e861f719107␟253967969926135345: Name${"\uFFFD#3\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_SPAN:: `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_systemNamePlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____2 = goog.getMsg("Room Name");
        i18n_2 = MSG_EXTERNAL_systemNamePlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____2;
      } else {
        i18n_2 = $localize`:@@systemNamePlaceholder␟412d74982a750ad38d528a416090cad259267cf7␟3270670506078615677:Room Name`;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_systemNameError$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_____0 = goog.getMsg("Room name is required");
        i18n_3 = MSG_EXTERNAL_systemNameError$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_____0;
      } else {
        i18n_3 = $localize`:@@systemNameError␟a76167ad44bb224b5e970e7cdce5e03ba50bbf34␟4944106304667909261:Room name is required`;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_emailLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____3 = goog.getMsg(" Email: ");
        i18n_4 = MSG_EXTERNAL_emailLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____3;
      } else {
        i18n_4 = $localize`:@@emailLabel␟7e7d6d1958ec577b1f852c495aa8abb88a5a4e8c␟3680148548084285501: Email: `;
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_systemEmailPlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____4 = goog.getMsg("Room Email");
        i18n_5 = MSG_EXTERNAL_systemEmailPlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____4;
      } else {
        i18n_5 = $localize`:@@systemEmailPlaceholder␟796480f8af4a196dc6343cf00d09c7841f270f3a␟3140960526772549616:Room Email`;
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_emailError$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_____1 = goog.getMsg("A valid email is required");
        i18n_6 = MSG_EXTERNAL_emailError$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_____1;
      } else {
        i18n_6 = $localize`:@@emailError␟66a4553914df830f0bc1dd1f0a42c57fd85864de␟6407494155279173358:A valid email is required`;
      }
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____5 = goog.getMsg("Display Name: ");
        i18n_7 = MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____5;
      } else {
        i18n_7 = $localize`:@@displayNameLabel␟e966586c3aadb81b0555b483a36f46776d9792c8␟6691873398244034720:Display Name: `;
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_displayNamePlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____6 = goog.getMsg("Display Name");
        i18n_8 = MSG_EXTERNAL_displayNamePlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____6;
      } else {
        i18n_8 = $localize`:@@displayNamePlaceholder␟e438ba78cbafdb5bcbce0820bfaad995a504f222␟3013055597615607317:Display Name`;
      }
      let i18n_9;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_codeNameLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____7 = goog.getMsg("Code: ");
        i18n_9 = MSG_EXTERNAL_codeNameLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____7;
      } else {
        i18n_9 = $localize`:@@codeNameLabel␟61275d3a79a1234bf3fcb50f72d8dc798ef57e27␟7610172352109675938:Code: `;
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_codeNamePlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____8 = goog.getMsg("Code");
        i18n_10 = MSG_EXTERNAL_codeNamePlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____8;
      } else {
        i18n_10 = $localize`:@@codeNamePlaceholder␟68572de01b84c678be4bf8a27b990ecac2f41ce9␟8186013988289067040:Code`;
      }
      let i18n_11;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_capacityLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____9 = goog.getMsg(" Capacity: ");
        i18n_11 = MSG_EXTERNAL_capacityLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____9;
      } else {
        i18n_11 = $localize`:@@capacityLabel␟4fdfe5d0bf8898e5def2c3f9d5971f5e23e753d9␟255201359546348839: Capacity: `;
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_capacityPlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____10 = goog.getMsg("Capacity");
        i18n_12 = MSG_EXTERNAL_capacityPlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____10;
      } else {
        i18n_12 = $localize`:@@capacityPlaceholder␟ce9dfdc6dccb28dc75a78c704e09dc18fb02dcfa␟7825570888384392250:Capacity`;
      }
      let i18n_13;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_capacityError$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_____2 = goog.getMsg(" A valid positive number is required ");
        i18n_13 = MSG_EXTERNAL_capacityError$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_____2;
      } else {
        i18n_13 = $localize`:@@capacityError␟dedde35e8848b99432791a4326aa103b8ec774c4␟8134498951699811316: A valid positive number is required `;
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_bookableLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____11 = goog.getMsg(" Bookable ");
        i18n_14 = MSG_EXTERNAL_bookableLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____11;
      } else {
        i18n_14 = $localize`:@@bookableLabel␟96462a3176e48f64fd7d25d58a6d49afe4628700␟414602767324525018: Bookable `;
      }
      let i18n_15;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_descriptionLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____12 = goog.getMsg("Description:");
        i18n_15 = MSG_EXTERNAL_descriptionLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____12;
      } else {
        i18n_15 = $localize`:@@descriptionLabel␟4a22c6843133f0b0d7dc0d28f864f2f90c1de7ad␟6996799422725544865:Description:`;
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_featuresLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____13 = goog.getMsg(" Features: ");
        i18n_16 = MSG_EXTERNAL_featuresLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____13;
      } else {
        i18n_16 = $localize`:@@featuresLabel␟048b3adb78b9aabee65dbb43d9c5aadcda49015f␟1939786999396738714: Features: `;
      }
      let i18n_17;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_mapIdLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____14 = goog.getMsg("Map ID:");
        i18n_17 = MSG_EXTERNAL_mapIdLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____14;
      } else {
        i18n_17 = $localize`:@@mapIdLabel␟46a8087017d0d929ed6d398ba5d3a5ea1be7ab9b␟1613414518051599973:Map ID:`;
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_mapIdPlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____15 = goog.getMsg("Map SVG ID selector e.g. area-01.10-status");
        i18n_18 = MSG_EXTERNAL_mapIdPlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____15;
      } else {
        i18n_18 = $localize`:@@mapIdPlaceholder␟8936f99965a07edd4b09a0e4120f4dd5de79604d␟609514156045819245:Map SVG ID selector e.g. area-01.10-status`;
      }
      let i18n_19;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_imagesLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____16 = goog.getMsg("Images:");
        i18n_19 = MSG_EXTERNAL_imagesLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS____16;
      } else {
        i18n_19 = $localize`:@@imagesLabel␟e5d9e00faa06714d7671b164cad364b26f4c585b␟5137125764814732349:Images:`;
      }
      return [["btn", "", "icon", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "max-h-[65vh] overflow-y-auto overflow-x-hidden p-4", 4, "ngIf", "ngIfElse"], ["class", "p-2 flex justify-end border-t border-base-200", 4, "ngIf"], ["load_state", ""], ["btn", "", "icon", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "overflow-y-auto", "overflow-x-hidden", "p-4"], ["system", "", "class", "flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]", 3, "formGroup", 4, "ngIf"], ["system", "", 1, "flex", "flex-col", "w-[36rem]", "max-w-[calc(100vw-4rem)]", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "space-x-2"], ["class", "flex flex-col flex-1", 4, "ngIf"], [1, "flex", "space-x-2", 3, "formGroup"], [1, "flex-1", "flex", "flex-col", "space-y-2"], ["for", "setup", 1, "flex", "items-center"], ["matTooltip", "Time before a meeting needed for setup and preparation for the upcoming meeting", 1, "ml-2"], ["name", "setup", "formControlName", "setup", 3, "min"], ["for", "breakdown", 1, "flex", "items-center"], ["matTooltip", "Time after a meeting needed for cleaning and preparation for next meeting", 1, "ml-2"], ["name", "breakdown", "formControlName", "breakdown", 3, "min"], [1, "flex", "flex-col"], ["for", "timezone"], ["appearance", "outline"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "formControlName", "timezone", "placeholder", "Room timezone", 3, "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "disabled", 4, "ngIf"], ["for", "zone"], i18n_0, ["formControlName", "zone", "placeholder", "Select Level"], [3, "value"], [1, "flex", "flex-col", "flex-1"], ["for", "system-name"], i18n_1, ["matInput", "", "name", "system-name", "placeholder", i18n_2, "formControlName", "name", "required", ""], [4, "ngIf"], i18n_3, ["for", "system-email"], i18n_4, ["matInput", "", "name", "system-email", "placeholder", i18n_5, "formControlName", "email"], i18n_6, ["for", "display-name"], i18n_7, ["matInput", "", "name", "display-name", "placeholder", i18n_8, "formControlName", "display_name"], ["for", "code-name"], i18n_9, ["matInput", "", "name", "code-name", "placeholder", i18n_10, "formControlName", "code"], ["for", "capacity"], i18n_11, ["matInput", "", "name", "capacity", "type", "number", "placeholder", i18n_12, "formControlName", "capacity"], i18n_13, ["name", "bookable", "formControlName", "bookable"], i18n_14, ["for", "description"], i18n_15, ["matInput", "", "name", "description", "placeholder", "Description", "formControlName", "description"], i18n_16, ["aria-label", "Room features"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New feature...", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], [3, "selectable", "removable", "removed"], ["matChipRemove", ""], ["for", "map_id"], i18n_17, ["matInput", "", "name", "map_id", "placeholder", i18n_18, "formControlName", "map_id"], [3, "disabled"], ["for", "images"], i18n_19, ["name", "images", "formControlName", "images"], [1, "p-2", "flex", "justify-end", "border-t", "border-base-200"], ["btn", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "w-64", "h-64"], ["diameter", "32"], [1, "mt-4"]];
    },
    template: function RoomModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "header")(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, RoomModalComponent_button_3_Template, 3, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, RoomModalComponent_main_4_Template, 2, 1, "main", 1)(5, RoomModalComponent_footer_5_Template, 3, 0, "footer", 2)(6, RoomModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx.form.value.id ? "Edit" : "Add", " Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckbox, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogClose, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _libs_form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_5__.DurationFieldComponent, _libs_form_fields_src_lib_image_list_field_component__WEBPACK_IMPORTED_MODULE_6__.ImageListFieldComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_7__.IconComponent, _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__.MatChipGrid, _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__.MatChipInput, _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__.MatChipRemove, _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__.MatChipRow, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
    styles: ["mat-checkbox[_ngcontent-%COMP%] {\n                margin-top: 2.5em;\n                margin-bottom: 1.5em;\n            }\n\n            @media screen and (max-width: 640px) {\n                mat-checkbox[_ngcontent-%COMP%] {\n                    margin-top: 0;\n                }\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcm9vbS1tYW5hZ2VyL3Jvb20tbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxpQkFBaUI7Z0JBQ2pCLG9CQUFvQjtZQUN4Qjs7WUFFQTtnQkFDSTtvQkFDSSxhQUFhO2dCQUNqQjtZQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBtYXQtY2hlY2tib3gge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIuNWVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgICAgIG1hdC1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_room-manager_room-manager_module_ts.js.map