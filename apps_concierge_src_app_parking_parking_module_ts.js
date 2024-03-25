"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_parking_parking_module_ts"],{

/***/ 2604:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/parking/new-parking.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewParkingComponent: () => (/* binding */ NewParkingComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _parking_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parking-state.service */ 52788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/app-topbar.component */ 33005);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 19842);
/* harmony import */ var _parking_topbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parking-topbar.component */ 28868);










function NewParkingComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No parking floors for the currently selected building");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class NewParkingComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  constructor(_state, _router) {
    super();
    this._state = _state;
    this._router = _router;
    /** List of levels for the active building */
    this.levels = this._state.levels;
    this.path = '';
  }
  ngOnInit() {
    this._state.startPolling();
    this.subscription('router.events', this._router.events.subscribe(e => {
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) {
        const url_parts = this._router.url?.split('/') || [''];
        this.path = url_parts[parts.length - 1].split('?')[0];
      }
    }));
    const parts = this._router.url?.split('/') || [''];
    this.path = parts[parts.length - 1].split('?')[0];
  }
  static #_ = this.ɵfac = function NewParkingComponent_Factory(t) {
    return new (t || NewParkingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_parking_state_service__WEBPACK_IMPORTED_MODULE_1__.ParkingStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: NewParkingComponent,
    selectors: [["app-new-parking"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 9,
    vars: 3,
    consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full", "relative"], [1, "flex-1", "h-1/2", "w-full", "relative", "overflow-auto", "px-2"], ["class", "absolute inset-0 bg-base-100/80/20 flex flex-col items-center justify-center z-50", 4, "ngIf"], [1, "absolute", "inset-0", "bg-base-100/80/20", "flex", "flex-col", "items-center", "justify-center", "z-50"]],
    template: function NewParkingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "parking-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, NewParkingComponent_div_7_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 1, ctx.levels)) == null ? null : tmp_0_0.length));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_2__.ApplicationTopbarComponent, _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.ApplicationSidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _parking_topbar_component__WEBPACK_IMPORTED_MODULE_4__.ParkingTopbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n\n            sidebar[_ngcontent-%COMP%] {\n                height: 100%;\n            }\n\n            main[_ngcontent-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                flex: 1;\n                min-width: 50%;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcGFya2luZy9uZXctcGFya2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsMkJBQTJCO1lBQy9COztZQUVBO2dCQUNJLFlBQVk7WUFDaEI7O1lBRUE7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLE9BQU87Z0JBQ1AsY0FBYztnQkFDZCxZQUFZO1lBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNpZGViYXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 84243:
/*!***************************************************************************!*\
  !*** ./apps/concierge/src/app/parking/parking-bookings-list.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingBookingsListComponent: () => (/* binding */ ParkingBookingsListComponent)
/* harmony export */ });
/* harmony import */ var _parking_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parking-state.service */ 52788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ 78173);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-table.component */ 27442);








function ParkingBookingsListComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r7 == null ? null : row_r7.extension_data == null ? null : row_r7.extension_data.plate_number, " ");
  }
}
function ParkingBookingsListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r8 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("bg-success", data_r8 === "approved")("bg-warning", data_r8 === "tentative")("bg-error", data_r8 === "cancelled" || data_r8 === "declined")("text-success-content", data_r8 === "approved")("text-warning-content", data_r8 === "tentative")("text-error-content", data_r8 === "cancelled" || data_r8 === "declined");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r8, " ");
  }
}
function ParkingBookingsListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParkingBookingsListComponent_ng_template_7_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const row_r9 = restoredCtx.row;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.reject(row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "event_busy");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParkingBookingsListComponent_ng_template_7_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const row_r9 = restoredCtx.row;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.approve(row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "event_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function ParkingBookingsListComponent_mat_progress_bar_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 9);
  }
}
const _c0 = () => ["asset_name", "booked_by_name", "user_name", "plate_number", "status", "actions"];
const _c1 = () => ["Bay No.", "Reserved By", "Reserved For", "Car Plate #", "Status", " "];
const _c2 = () => ["6r", "flex", "14r", "8r", "6r", "6r"];
const _c3 = (a0, a1, a2) => ({
  plate_number: a0,
  actions: a1,
  status: a2
});
class ParkingBookingsListComponent {
  constructor(_state) {
    this._state = _state;
    this.events = this._state.bookings;
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.reject = e => this._state.rejectBooking(e);
    this.approve = e => this._state.approveBooking(e);
  }
  static #_ = this.ɵfac = function ParkingBookingsListComponent_Factory(t) {
    return new (t || ParkingBookingsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_parking_state_service__WEBPACK_IMPORTED_MODULE_0__.ParkingStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ParkingBookingsListComponent,
    selectors: [["parking-bookings-list"]],
    decls: 11,
    vars: 22,
    consts: [[1, "block", "min-w-[60rem]", 3, "dataSource", "columns", "display_column", "filter", "column_size", "template"], ["plate_template", ""], ["status_template", ""], ["action_template", ""], ["class", "absolute bottom-0 inset-x-0", 4, "ngIf"], [1, "capitalize", "px-2", "py-1", "rounded", "border", "border-base-200"], [1, "w-full", "flex", "items-center", "justify-end"], ["icon", "", "matTooltip", "Reject Parking Reservation", 3, "click"], ["icon", "", "matTooltip", "Approve Parking Reservation", 3, "click"], [1, "absolute", "bottom-0", "inset-x-0"]],
    template: function ParkingBookingsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "custom-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ParkingBookingsListComponent_ng_template_3_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(5, ParkingBookingsListComponent_ng_template_5_Template, 2, 13, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(7, ParkingBookingsListComponent_ng_template_7_Template, 7, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(9, ParkingBookingsListComponent_mat_progress_bar_9_Template, 1, 0, "mat-progress-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "async");
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
        let tmp_0_0;
        let tmp_7_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("opacity-50", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 9, ctx.loading)) == null ? null : tmp_0_0.includes("bookings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.events)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c0))("display_column", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c1))("filter", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 11, ctx.options).search)("column_size", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c2))("template", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](18, _c3, _r1, _r5, _r3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 13, ctx.loading)) == null ? null : tmp_7_0.includes("bookings"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBar, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_2__.CustomTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: block;\n                width: 100%;\n                height: 100%;\n                overflow: auto;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcGFya2luZy9wYXJraW5nLWJvb2tpbmdzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxjQUFjO2dCQUNkLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixjQUFjO1lBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 57165:
/*!************************************************************************!*\
  !*** ./apps/concierge/src/app/parking/parking-space-list.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingSpaceListComponent: () => (/* binding */ ParkingSpaceListComponent)
/* harmony export */ });
/* harmony import */ var _parking_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parking-state.service */ 52788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ 78173);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-table.component */ 27442);








function ParkingSpaceListComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParkingSpaceListComponent_ng_template_4_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const row_r3 = restoredCtx.row;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.editSpace(row_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParkingSpaceListComponent_ng_template_4_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const row_r3 = restoredCtx.row;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.removeSpace(row_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function ParkingSpaceListComponent_mat_progress_bar_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 7);
  }
}
const _c0 = () => ["name", "map_id", "assigned_to", "notes", "actions"];
const _c1 = () => ["Bay No.", "Map ID", "Assigned", "Notes", " "];
const _c2 = () => ["8r", "10r", "14r", "flex", "10r"];
const _c3 = a0 => ({
  actions: a0
});
class ParkingSpaceListComponent {
  constructor(_state) {
    this._state = _state;
    this.spaces = this._state.spaces;
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.editSpace = s => this._state.editSpace(s);
    this.removeSpace = s => this._state.removeSpace(s);
  }
  static #_ = this.ɵfac = function ParkingSpaceListComponent_Factory(t) {
    return new (t || ParkingSpaceListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_parking_state_service__WEBPACK_IMPORTED_MODULE_0__.ParkingStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ParkingSpaceListComponent,
    selectors: [["parking-space-list"]],
    decls: 11,
    vars: 20,
    consts: [[1, "absolute", "inset-0", "overflow-auto", "px-2"], [1, "block", "min-w-[56rem]", 3, "dataSource", "columns", "display_column", "column_size", "template", "filter"], ["action_template", ""], ["class", "absolute bottom-0 inset-x-0", 4, "ngIf"], ["btn", "", "icon", "", "matRipple", "", 1, "absolute", "bottom-2", "left-2", "bg-secondary", "text-secondary-content", 3, "click"], [1, "w-full", "flex", "items-center", "justify-end"], ["icon", "", 3, "click"], [1, "absolute", "bottom-0", "inset-x-0"]],
    template: function ParkingSpaceListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "custom-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ParkingSpaceListComponent_ng_template_4_Template, 7, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(6, ParkingSpaceListComponent_mat_progress_bar_6_Template, 1, 0, "mat-progress-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParkingSpaceListComponent_Template_button_click_8_listener() {
          return ctx.editSpace();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        let tmp_0_0;
        let tmp_7_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("opacity-50", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 9, ctx.loading)) == null ? null : tmp_0_0.includes("spaces"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.spaces)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c0))("display_column", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c1))("column_size", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c2))("template", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c3, _r1))("filter", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 11, ctx.options).search);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 13, ctx.loading)) == null ? null : tmp_7_0.includes("spaces"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_2__.CustomTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 32085:
/*!*************************************************************************!*\
  !*** ./apps/concierge/src/app/parking/parking-space-modal.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingSpaceModalComponent: () => (/* binding */ ParkingSpaceModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/user-search-field.component */ 20576);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);













function ParkingSpaceModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 6)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ParkingSpaceModalComponent_main_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 7)(1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Parking Space Name/Bay Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "A name is required for parking spaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Map ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " A map ID is required for parking spaces ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Assigned User");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "a-user-search-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ParkingSpaceModalComponent_main_5_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.form.patchValue({
        assigned_user: null,
        assigned_to: null,
        assigned_name: null
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Map Rotation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 21)(28, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ParkingSpaceModalComponent_main_5_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.postForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.form);
  }
}
function ParkingSpaceModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-spinner", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Saving parking space details...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class ParkingSpaceModalComponent {
  get id() {
    return this._data?.id || '';
  }
  constructor(_data, _dialog_ref) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      map_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      assigned_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null),
      assigned_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      assigned_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      map_rotation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(0)
    });
    if (_data) this.form.patchValue(_data);
  }
  postForm() {
    if (!this.form.valid) return;
    this.loading = true;
    const value = this.form.value;
    if (value.assigned_user) {
      value.assigned_to = value.assigned_user.email;
      value.assigned_name = value.assigned_user.name;
    }
    this._dialog_ref.disableClose = true;
    this.event.emit({
      reason: 'done',
      metadata: value
    });
  }
  static #_ = this.ɵfac = function ParkingSpaceModalComponent_Factory(t) {
    return new (t || ParkingSpaceModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ParkingSpaceModalComponent,
    selectors: [["parking-space-modal"]],
    outputs: {
      event: "event"
    },
    decls: 8,
    vars: 4,
    consts: [[1, "w-[28rem]"], [1, "flex", "items-center", "justify-between", "px-2", "w-full"], [1, "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 flex flex-col", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["load_state", ""], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "flex", "flex-col", 3, "formGroup"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name"], ["for", "map-id"], ["matInput", "", "name", "map-id", "formControlName", "map_id"], ["for", "user"], [1, "flex", "items-center", "space-x-2"], ["name", "user", "formControlName", "assigned_user"], ["btn", "", "matRipple", "", 1, "mb-5", 3, "click"], ["for", "notes"], ["matInput", "", "name", "notes", "formControlName", "notes"], ["for", "map-rotation"], ["matInput", "", "name", "map-rotation", "formControlName", "map_rotation"], [1, "flex", "items-center", "justify-center", "space-x-2"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "w-32", "inverse"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "p-8", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], ["diameter", "32"]],
    template: function ParkingSpaceModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ParkingSpaceModalComponent_button_4_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ParkingSpaceModalComponent_main_5_Template, 32, 1, "main", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ParkingSpaceModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.id ? "Edit" : "New", " Parking Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_0__.UserSearchFieldComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent]
  });
}

/***/ }),

/***/ 52788:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/parking/parking-state.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingStateService: () => (/* binding */ ParkingStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/bookings */ 40688);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/ts-client */ 64331);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 31957);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 57016);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 4512);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns */ 12687);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 70462);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 85046);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 36520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 15746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 680);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 95933);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 17627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 46939);
/* harmony import */ var _parking_space_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parking-space-modal.component */ 32085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 17401);














class ParkingStateService extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  constructor(_org, _dialog) {
    super();
    this._org = _org;
    this._dialog = _dialog;
    this._poll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(0);
    this._change = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(0);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({
      date: Date.now(),
      search: '',
      zones: []
    });
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
    /** List of available parking levels for the current building */
    this.levels = this._org.active_levels.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_ => _.filter(lvl => lvl.tags.includes('parking'))));
    /** List of parking spaces for the current building/level */
    this.spaces = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.levels, this._options, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(([lvls, options]) => !!(options.zones[0] || lvls[0]?.id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(([levels, options]) => {
      this._loading.next([...this._loading.getValue(), 'spaces']);
      return (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_4__.showMetadata)(options.zones[0] || levels[0]?.id, 'parking-spaces');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(metadata => metadata.details instanceof Array ? metadata.details : []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this._loading.next(this._loading.getValue().filter(_ => _ !== 'spaces'))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.shareReplay)(1));
    /** List of parking spaces for the current building/level */
    this.users = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._org.active_building, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(([bld]) => !!bld?.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(([bld]) => {
      this._loading.next([...this._loading.getValue(), 'users']);
      return (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_4__.showMetadata)(bld.id, 'parking-users');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(metadata => metadata.details instanceof Array ? metadata.details : []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this._loading.next(this._loading.getValue().filter(_ => _ !== 'users'))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.shareReplay)(1));
    /** List of parking bookings for the current building/level */
    this.bookings = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._org.active_building, this._options, this._poll]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(([bld, options]) => {
      this._loading.next([...this._loading.getValue(), 'bookings']);
      return (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.queryBookings)({
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(options.date)),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_16__["default"])(options.date)),
        type: 'parking',
        zones: options.zones?.length ? options.zones.join(',') : bld?.id
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this._loading.next(this._loading.getValue().filter(_ => _ !== 'bookings'))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.shareReplay)(1));
    this.options = this._options.asObservable();
    this.loading = this._loading.asObservable();
  }
  setOptions(options) {
    this._options.next({
      ...this._options.getValue(),
      ...options
    });
  }
  startPolling(delay = 5000) {
    this._poll.next(Date.now());
    this.interval('poll', () => this._poll.next(Date.now()), delay);
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval('poll');
  }
  /** Add or update a space in the available list */
  editSpace(space) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ref = _this._dialog.open(_parking_space_modal_component__WEBPACK_IMPORTED_MODULE_5__.ParkingSpaceModalComponent, {
        data: space
      });
      const state = yield Promise.race([ref.afterClosed().toPromise(), ref.componentInstance.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.first)(_ => _.reason === 'done')).toPromise()]);
      if (state?.reason !== 'done') return;
      const zone = _this._options.getValue().zones[0];
      const new_space = {
        ...state.metadata,
        id: state.metadata.id || `parking-${zone}.${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.randomInt)(999999)}`
      };
      const spaces = yield _this.spaces.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.take)(1)).toPromise();
      const idx = spaces.findIndex(_ => _.id === new_space.id);
      if (idx >= 0) spaces[idx] = new_space;else spaces.push(new_space);
      const new_space_list = spaces;
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_4__.updateMetadata)(zone, {
        name: 'parking-spaces',
        details: new_space_list,
        description: 'List of available parking spaces'
      }).toPromise();
      _this._change.next(Date.now());
      ref.close();
    })();
  }
  /** Remove the given space from the available list */
  removeSpace(space) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const state = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.openConfirmModal)({
        title: 'Remove Parking Space',
        content: `Are you sure you wish to remove the parking space "${space.name}"?`,
        icon: {
          content: 'delete'
        }
      }, _this2._dialog);
      if (state?.reason !== 'done') return;
      state.loading('Removing parking space...');
      const zone = _this2._options.getValue().zones[0];
      const spaces = yield _this2.spaces.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.take)(1)).toPromise();
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_4__.updateMetadata)(zone, {
        name: 'parking-spaces',
        details: spaces.filter(_ => _.id !== space.id),
        description: 'List of available parking spaces'
      }).toPromise();
      state.close();
    })();
  }
  saveUsers(users) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
  approveBooking(booking) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const success = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.approveBooking)(booking.id).toPromise().catch(_ => 'failed');
      success === 'failed' ? (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)('Error approving in desk booking') : (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)(`Approved parking reservation for ${booking.user_name} on ${(0,date_fns__WEBPACK_IMPORTED_MODULE_19__["default"])(booking.date, 'MMM Do')}.`);
    })();
  }
  rejectBooking(bookings) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const success = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.rejectBooking)(bookings.id).toPromise().catch(_ => 'failed');
      success === 'failed' ? (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)('Error rejecting in desk booking') : (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)(`Rejected parking reservation for ${bookings.user_name} on ${(0,date_fns__WEBPACK_IMPORTED_MODULE_19__["default"])(bookings.date, 'MMM Do')}.`);
    })();
  }
  static #_ = this.ɵfac = function ParkingStateService_Factory(t) {
    return new (t || ParkingStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_3__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialog));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjectable"]({
    token: ParkingStateService,
    factory: ParkingStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 28868:
/*!********************************************************************!*\
  !*** ./apps/concierge/src/app/parking/parking-topbar.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingTopbarComponent: () => (/* binding */ ParkingTopbarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 17627);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _parking_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parking-state.service */ 52788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/date-options.component */ 11771);
/* harmony import */ var _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/searchbar.component */ 97338);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 28849);

















function ParkingTopbarComponent_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", level_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", level_r2.display_name || level_r2.name, " ");
  }
}
function ParkingTopbarComponent_date_options_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "date-options", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateChange", function ParkingTopbarComponent_date_options_7_Template_date_options_dateChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.setDate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
class ParkingTopbarComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  constructor(_state, _org, _route, _router) {
    super();
    this._state = _state;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this.manage = false;
    /** List of selected levels */
    this.zones = [];
    /** List of levels for the active building */
    this.levels = this._state.levels;
    /** Options set for week view */
    this.options = this._state.options;
    /** Set filtered date */
    this.setDate = d => this._state.setOptions({
      date: d
    });
    /** Set filter string */
    this.setSearch = str => this._state.setOptions({
      search: str
    });
    /** List of levels for the active building */
    this.updateZones = z => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          zone_ids: z.join(',')
        }
      });
      this._state.setOptions({
        zones: z
      });
    };
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.first)(_ => _)).toPromise();
      _this.subscription('route.query', _this._route.queryParamMap.subscribe(params => {
        if (params.has('zone_ids')) {
          const zones = params.get('zone_ids').split(',');
          if (zones.length) {
            const level = _this._org.levelWithID(zones);
            _this.zones = zones;
            if (!level) return;
            _this._org.building = _this._org.buildings.find(bld => bld.id === level.parent_id);
          }
        }
      }));
      _this.subscription('levels', _this._state.levels.subscribe(levels => {
        _this.zones = _this.zones.filter(zone => levels.find(lvl => lvl.id === zone));
        if (!_this.zones.length && levels.length) {
          _this.zones.push(levels[0].id);
        }
        _this.updateZones(_this.zones);
      }));
      _this.manage = !_this._router.url.includes('events');
    })();
  }
  static #_ = this.ɵfac = function ParkingTopbarComponent_Factory(t) {
    return new (t || ParkingTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_parking_state_service__WEBPACK_IMPORTED_MODULE_3__.ParkingStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ParkingTopbarComponent,
    selectors: [["parking-topbar"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 8,
    vars: 5,
    consts: [[1, "flex", "items-center", "bg-base-100", "px-2", "h-20"], ["appearance", "outline"], ["placeholder", "All Levels", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex-1", "w-0"], [1, "mr-2", 3, "modelChange"], [3, "dateChange", 4, "ngIf"], [3, "value"], [3, "dateChange"]],
    template: function ParkingTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ParkingTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
          ctx.updateZones([$event]);
          return ctx.zones = [$event];
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ParkingTopbarComponent_mat_option_3_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "searchbar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("modelChange", function ParkingTopbarComponent_Template_searchbar_modelChange_6_listener($event) {
          return ctx.setSearch($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ParkingTopbarComponent_date_options_7_Template, 1, 0, "date-options", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.zones[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 3, ctx.levels));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.manage);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ui_date_options_component__WEBPACK_IMPORTED_MODULE_4__.DateOptionsComponent, _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_5__.SearchbarComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
    styles: ["button[_ngcontent-%COMP%] {\n                min-width: 0;\n                padding: 0 0.85rem;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcGFya2luZy9wYXJraW5nLXRvcGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFlBQVk7Z0JBQ1osa0JBQWtCO1lBQ3RCOztZQUVBO2dCQUNJLGNBQWM7Z0JBQ2QsVUFBVTtZQUNkIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAuODVyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuMjVlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogOGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 17081:
/*!************************************************************************!*\
  !*** ./apps/concierge/src/app/parking/parking-users-list.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingUsersListComponent: () => (/* binding */ ParkingUsersListComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _parking_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parking-state.service */ 52788);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 46939);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 70462);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-table.component */ 27442);














function ParkingUsersListComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ParkingUsersListComponent_ng_template_4_Template_input_ngModelChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const key_r6 = restoredCtx.key;
      const form_r5 = restoredCtx.row;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](form_r5.get(key_r6).setValue($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const form_r5 = ctx.row;
    const key_r6 = ctx.key;
    const name_r7 = ctx.name;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", form_r5.value[key_r6])("placeholder", name_r7);
  }
}
function ParkingUsersListComponent_ng_template_6_app_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " warning ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const form_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().row;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("text-red-600", ctx_r11.deletion.has(form_r10.value.id))("text-yellow-400", !ctx_r11.deletion.has(form_r10.value.id));
  }
}
function ParkingUsersListComponent_ng_template_6_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ParkingUsersListComponent_ng_template_6_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      const form_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().row;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.markForDelete(form_r10.value.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const form_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().row;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", ctx_r12.isNew(form_r10.value.id) ? "Remove New User" : "Mark for Deletion");
  }
}
function ParkingUsersListComponent_ng_template_6_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ParkingUsersListComponent_ng_template_6_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.clearChanges(ctx_r19.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "clear_all");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ParkingUsersListComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ParkingUsersListComponent_ng_template_6_app_icon_1_Template, 2, 4, "app-icon", 8)(2, ParkingUsersListComponent_ng_template_6_button_2_Template, 3, 1, "button", 9)(3, ParkingUsersListComponent_ng_template_6_button_3_Template, 3, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const form_r10 = ctx.row;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.deletion.has(form_r10.value.id) || form_r10.dirty || ctx_r2.isNew(form_r10.value.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.deletion.has(form_r10.value.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.deletion.has(form_r10.value.id) || form_r10.dirty);
  }
}
function ParkingUsersListComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16)(1, "app-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r21.deletion.entries.length, " users pending deletion");
  }
}
function ParkingUsersListComponent_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16)(1, "app-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 1, ctx_r22.new_items).length, " new users pending save ");
  }
}
function ParkingUsersListComponent_div_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16)(1, "app-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 1, ctx_r23.change_count), " users with pending changes");
  }
}
function ParkingUsersListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ParkingUsersListComponent_div_11_div_1_Template, 5, 1, "div", 14)(2, ParkingUsersListComponent_div_11_div_2_Template, 6, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ParkingUsersListComponent_div_11_div_4_Template, 6, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.deletion.entries.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, ctx_r4.new_items).length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 5, ctx_r4.change_count));
  }
}
const _c0 = () => ["email", "transponder", "designation", "car_model", "car_colour", "plate_number", "phone", "notes", "actions"];
const _c1 = () => ["", "", "", "", "", "", "", "", " "];
const _c2 = () => ["14r", "10r", "10r", "10r", "10r", "10r", "10r", "flex"];
const _c3 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => ({
  email: a0,
  name: a1,
  transponder: a2,
  designation: a3,
  car_model: a4,
  car_colour: a5,
  plate_number: a6,
  phone: a7,
  notes: a8,
  actions: a9
});
const generateUserForm = user => new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
  id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(user.id || ''),
  email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(user.email || ''),
  name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(user.name || ''),
  transponder: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(user.transponder || ''),
  designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(user.designation || ''),
  car_model: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(user.car_model || ''),
  car_colour: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(user.car_colour || ''),
  plate_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(user.plate_number || ''),
  phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(user.phone || ''),
  notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(user.notes || '')
});
class ParkingUsersListComponent {
  isNew(id) {
    return !!this.new_items.getValue().find(_ => _.value.id === id);
  }
  constructor(_state) {
    this._state = _state;
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.forms = this._state.users.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_ => _.map(u => generateUserForm(u))));
    this.new_items = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
    this.user_list = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.forms, this.new_items]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([a, b]) => [...a, ...b]));
    this.change_count = this.user_list.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_ => _.filter(f => f.dirty || !this.isNew(f.value.id)).length));
    this.deletion = new Set();
  }
  markForDelete(id) {
    if (this.isNew(id)) {
      this.new_items.next(this.new_items.getValue().filter(_ => _.value.id !== id));
    } else this.deletion.add(id);
  }
  clearChanges(id) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.isNew(id)) {
        const new_items = _this.new_items.getValue();
        const item = new_items.find(_ => _.value.id === id);
        if (item) {
          item.reset({
            id
          });
        }
      } else {
        const list = yield _this.user_list.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).toPromise();
        const users = yield _this._state.users.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).toPromise();
        const item = list.find(_ => _.value.id === id);
        const user = users.find(_ => _.id === id);
        if (item && user) item.reset(user);
      }
    })();
  }
  newUser() {
    const form = generateUserForm({
      id: `parking-${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.randomInt)(99999999, 10000000)}`
    });
    this.new_items.next([...this.new_items.getValue(), form]);
  }
  saveChanges() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const list = yield _this2.user_list.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).toPromise();
      const users = list.map(_ => _.value).filter(_ => !_this2.deletion.has(_.id));
      yield _this2._state.saveUsers(users);
    })();
  }
  static #_ = this.ɵfac = function ParkingUsersListComponent_Factory(t) {
    return new (t || ParkingUsersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_parking_state_service__WEBPACK_IMPORTED_MODULE_1__.ParkingStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ParkingUsersListComponent,
    selectors: [["parking-users-list"]],
    decls: 14,
    vars: 31,
    consts: [[1, "absolute", "inset-0", "overflow-auto", "px-2"], [1, "block", "min-w-[96rem]", 3, "dataSource", "columns", "display_column", "column_size", "template", "filter"], ["text_input_template", ""], ["action_template", ""], ["btn", "", "icon", "", "matRipple", "", 1, "absolute", "bottom-2", "left-2", "bg-primary", "text-white", 3, "click"], ["class", "absolute bottom-2 right-2 bg-base-100 border border-base-200 p-2 text-base rounded shadow space-y-2", 4, "ngIf"], [1, "relative", "-top-px", "border-none", "px-2", "py-4", "-m-2", "text-base", "w-full", "!outline-none", "focus:border-b", "border-blue-600", 3, "ngModel", "placeholder", "ngModelChange"], [1, "w-full", "flex", "items-center", "justify-end"], [3, "text-red-600", "text-yellow-400", 4, "ngIf"], ["btn", "", "icon", "", 3, "matTooltip", "click", 4, "ngIf"], ["btn", "", "icon", "", "matTooltip", "Clear Changes", 3, "click", 4, "ngIf"], ["btn", "", "icon", "", 3, "matTooltip", "click"], ["btn", "", "icon", "", "matTooltip", "Clear Changes", 3, "click"], [1, "absolute", "bottom-2", "right-2", "bg-base-100", "border", "border-base-200", "p-2", "text-base", "rounded", "shadow", "space-y-2"], ["class", "flex items-center space-x-2 p-2", 4, "ngIf"], ["btn", "", 1, "w-full"], [1, "flex", "items-center", "space-x-2", "p-2"], [1, "text-red-600", "text-2xl"], [1, "text-yellow-400", "text-2xl"]],
    template: function ParkingUsersListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "custom-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ParkingUsersListComponent_ng_template_4_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(6, ParkingUsersListComponent_ng_template_6_Template, 4, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ParkingUsersListComponent_Template_button_click_8_listener() {
          return ctx.newUser();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ParkingUsersListComponent_div_11_Template, 8, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "async");
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("opacity-50", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 9, ctx.loading)) == null ? null : tmp_0_0.includes("users"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.user_list)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](17, _c0))("display_column", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](18, _c1))("column_size", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](19, _c2))("template", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunctionV"](20, _c3, [_r1, _r1, _r1, _r1, _r1, _r1, _r1, _r1, _r1, _r3]))("filter", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 11, ctx.options).search);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.deletion.entries.length || _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 13, ctx.change_count) || _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 15, ctx.new_items).length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_4__.CustomTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe]
  });
}

/***/ }),

/***/ 76626:
/*!*************************************************************!*\
  !*** ./apps/concierge/src/app/parking/parking.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingComponent: () => (/* binding */ ParkingComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _parking_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parking-state.service */ 52788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/sidebar.component */ 42349);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _parking_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parking-topbar.component */ 28868);










function ParkingComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "No parking floors for the currently selected building");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
const _c0 = () => ["/parking", "events"];
const _c1 = () => ["/parking", "spaces"];
class ParkingComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  constructor(_state, _router) {
    super();
    this._state = _state;
    this._router = _router;
    /** List of levels for the active building */
    this.levels = this._state.levels;
    this.path = '';
  }
  ngOnInit() {
    this._state.startPolling();
    this.subscription('router.events', this._router.events.subscribe(e => {
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
        const url_parts = this._router.url?.split('/') || [''];
        this.path = url_parts[parts.length - 1].split('?')[0];
      }
    }));
    const parts = this._router.url?.split('/') || [''];
    this.path = parts[parts.length - 1].split('?')[0];
  }
  static #_ = this.ɵfac = function ParkingComponent_Factory(t) {
    return new (t || ParkingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_parking_state_service__WEBPACK_IMPORTED_MODULE_1__.ParkingStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ParkingComponent,
    selectors: [["app-parking"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    decls: 13,
    vars: 9,
    consts: [[1, "relative", "overflow-hidden", "bg-base-100"], [1, "dark"], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", "queryParamsHandling", "merge", 3, "routerLink", "active"], [1, "flex-1", "h-1/2", "w-full", "relative", "overflow-auto", "px-4"], ["class", "absolute inset-0 flex flex-col items-center justify-center z-50", 4, "ngIf"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "z-50"], [1, "absolute", "inset-0", "bg-base-100", "opacity-50", "z-0"]],
    template: function ParkingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "parking-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1)(4, "nav", 2)(5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Bookings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Manage Spaces ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ParkingComponent_div_11_Template, 4, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c0))("active", ctx.path === "events");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c1))("active", ctx.path === "spaces");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 5, ctx.levels)) == null ? null : tmp_4_0.length));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabNav, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _parking_topbar_component__WEBPACK_IMPORTED_MODULE_3__.ParkingTopbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n            }\n\n            sidebar[_ngcontent-%COMP%] {\n                height: 100%;\n            }\n\n            main[_ngcontent-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                flex: 1;\n                min-width: 50%;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcGFya2luZy9wYXJraW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixZQUFZO2dCQUNaLFdBQVc7WUFDZjs7WUFFQTtnQkFDSSxZQUFZO1lBQ2hCOztZQUVBO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixPQUFPO2dCQUNQLGNBQWM7Z0JBQ2QsWUFBWTtZQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaWRlYmFyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 28358:
/*!**********************************************************!*\
  !*** ./apps/concierge/src/app/parking/parking.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppParkingModule: () => (/* binding */ AppParkingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ 78173);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _placeos_form_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/form-fields */ 39304);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/ui.module */ 97428);
/* harmony import */ var _parking_bookings_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parking-bookings-list.component */ 84243);
/* harmony import */ var _parking_space_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parking-space-list.component */ 57165);
/* harmony import */ var _parking_space_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parking-space-modal.component */ 32085);
/* harmony import */ var _parking_topbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parking-topbar.component */ 28868);
/* harmony import */ var _parking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parking.component */ 76626);
/* harmony import */ var _new_parking_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-parking.component */ 2604);
/* harmony import */ var _parking_users_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parking-users-list.component */ 17081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
















const COMPONENTS = [_new_parking_component__WEBPACK_IMPORTED_MODULE_7__.NewParkingComponent, _parking_component__WEBPACK_IMPORTED_MODULE_6__.ParkingComponent, _parking_bookings_list_component__WEBPACK_IMPORTED_MODULE_2__.ParkingBookingsListComponent, _parking_space_list_component__WEBPACK_IMPORTED_MODULE_3__.ParkingSpaceListComponent, _parking_users_list_component__WEBPACK_IMPORTED_MODULE_8__.ParkingUsersListComponent, _parking_topbar_component__WEBPACK_IMPORTED_MODULE_5__.ParkingTopbarComponent, _parking_space_modal_component__WEBPACK_IMPORTED_MODULE_4__.ParkingSpaceModalComponent];
const ROUTES = [{
  path: 'new',
  component: _new_parking_component__WEBPACK_IMPORTED_MODULE_7__.NewParkingComponent,
  children: [{
    path: 'events',
    component: _parking_bookings_list_component__WEBPACK_IMPORTED_MODULE_2__.ParkingBookingsListComponent
  }, {
    path: 'users',
    component: _parking_users_list_component__WEBPACK_IMPORTED_MODULE_8__.ParkingUsersListComponent
  }, {
    path: 'manage',
    component: _parking_space_list_component__WEBPACK_IMPORTED_MODULE_3__.ParkingSpaceListComponent
  }, {
    path: '**',
    redirectTo: 'events'
  }]
}, {
  path: '',
  component: _parking_component__WEBPACK_IMPORTED_MODULE_6__.ParkingComponent,
  children: [{
    path: 'events',
    component: _parking_bookings_list_component__WEBPACK_IMPORTED_MODULE_2__.ParkingBookingsListComponent
  }, {
    path: 'users',
    component: _parking_users_list_component__WEBPACK_IMPORTED_MODULE_8__.ParkingUsersListComponent
  }, {
    path: 'manage',
    component: _parking_space_list_component__WEBPACK_IMPORTED_MODULE_3__.ParkingSpaceListComponent
  }, {
    path: '**',
    redirectTo: 'events'
  }]
}, {
  path: '**',
  redirectTo: ''
}];
class AppParkingModule {
  static #_ = this.ɵfac = function AppParkingModule_Factory(t) {
    return new (t || AppParkingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AppParkingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_0__.FormFieldsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBarModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppParkingModule, {
    declarations: [_new_parking_component__WEBPACK_IMPORTED_MODULE_7__.NewParkingComponent, _parking_component__WEBPACK_IMPORTED_MODULE_6__.ParkingComponent, _parking_bookings_list_component__WEBPACK_IMPORTED_MODULE_2__.ParkingBookingsListComponent, _parking_space_list_component__WEBPACK_IMPORTED_MODULE_3__.ParkingSpaceListComponent, _parking_users_list_component__WEBPACK_IMPORTED_MODULE_8__.ParkingUsersListComponent, _parking_topbar_component__WEBPACK_IMPORTED_MODULE_5__.ParkingTopbarComponent, _parking_space_modal_component__WEBPACK_IMPORTED_MODULE_4__.ParkingSpaceModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_0__.FormFieldsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBarModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
})();

/***/ }),

/***/ 40688:
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
/* harmony export */   ParkingSpaceSelectModalComponent: () => (/* reexport safe */ _lib_parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_9__.ParkingSpaceSelectModalComponent),
/* harmony export */   SharedBookingsModule: () => (/* reexport safe */ _lib_bookings_module__WEBPACK_IMPORTED_MODULE_0__.SharedBookingsModule),
/* harmony export */   approveBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.approveBooking),
/* harmony export */   checkinBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.checkinBooking),
/* harmony export */   checkinBookingAttendee: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.checkinBookingAttendee),
/* harmony export */   createBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.createBooking),
/* harmony export */   createBookingsForEvent: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.createBookingsForEvent),
/* harmony export */   findNearbyFeature: () => (/* reexport safe */ _lib_booking_utilities__WEBPACK_IMPORTED_MODULE_3__.findNearbyFeature),
/* harmony export */   generateBookingForm: () => (/* reexport safe */ _lib_booking_utilities__WEBPACK_IMPORTED_MODULE_3__.generateBookingForm),
/* harmony export */   isResourceAvailable: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.isResourceAvailable),
/* harmony export */   newBookingFromCalendarEvent: () => (/* reexport safe */ _lib_booking_utilities__WEBPACK_IMPORTED_MODULE_3__.newBookingFromCalendarEvent),
/* harmony export */   queryAllBookings: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryAllBookings),
/* harmony export */   queryBookings: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryBookings),
/* harmony export */   queryPagedBookings: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryPagedBookings),
/* harmony export */   queryResourceAvailability: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryResourceAvailability),
/* harmony export */   rejectBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.rejectBooking),
/* harmony export */   removeBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.removeBooking),
/* harmony export */   saveBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.saveBooking),
/* harmony export */   showBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.showBooking),
/* harmony export */   updateBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.updateBooking)
/* harmony export */ });
/* harmony import */ var _lib_bookings_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bookings.module */ 96845);
/* harmony import */ var _lib_booking_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/booking-form.service */ 63863);
/* harmony import */ var _lib_booking_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/booking.class */ 86049);
/* harmony import */ var _lib_booking_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/booking.utilities */ 99645);
/* harmony import */ var _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/bookings.fn */ 25183);
/* harmony import */ var _lib_desk_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/desk.service */ 2103);
/* harmony import */ var _lib_lockers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/lockers.service */ 61635);
/* harmony import */ var _lib_booking_details_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/booking-details-modal.component */ 55713);
/* harmony import */ var _lib_booking_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/booking-card.component */ 39861);
/* harmony import */ var _lib_parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/parking-select-modal/parking-select-modal.component */ 65033);












/***/ }),

/***/ 2103:
/*!***********************************************!*\
  !*** ./libs/bookings/src/lib/desk.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesksService: () => (/* binding */ DesksService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 31957);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 57016);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 4512);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 17627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/organisation/src/lib/organisation.service */ 38203);
/* harmony import */ var _bookings_fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookings.fn */ 25183);
/* harmony import */ var _desk_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desk-confirm-modal.component */ 921);
/* harmony import */ var _desk_questions_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desk-questions-modal.component */ 29165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 17401);












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
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(date || new Date())),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(date || new Date()))
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
        booking_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(date)),
        user_id: for_user?.id || host.id,
        user_name: for_user?.name || host.name,
        user_email: for_user?.email || host.email,
        booking_end: Math.floor((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(date).valueOf() / 1000),
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
  static #_ = this.ɵfac = function DesksService_Factory(t) {
    return new (t || DesksService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: DesksService,
    factory: DesksService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_parking_parking_module_ts.js.map