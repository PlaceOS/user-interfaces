"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_lockers_lockers_module_ts"],{

/***/ 99476:
/*!*********************************************************************!*\
  !*** ./apps/concierge/src/app/lockers/locker-bookings.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockerBookingsComponent: () => (/* binding */ LockerBookingsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _locker_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locker-state.service */ 78574);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-table.component */ 27442);













function LockerBookingsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const date_r14 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 2, date_r14, "MMM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 5, date_r14, "dd"));
  }
}
function LockerBookingsComponent_ng_template_7_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).row;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 2, row_r15.date, ctx_r18.time_format), " \u2013 ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 5, row_r15.end, ctx_r18.time_format), " ");
  }
}
function LockerBookingsComponent_ng_template_7_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "All Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function LockerBookingsComponent_ng_template_7_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LockerBookingsComponent_ng_template_7_ng_container_0_ng_container_1_Template, 4, 8, "ng-container", 16)(2, LockerBookingsComponent_ng_template_7_ng_container_0_ng_container_2_Template, 2, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !row_r15.all_day);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r15.all_day);
  }
}
function LockerBookingsComponent_ng_template_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Expired ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function LockerBookingsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, LockerBookingsComponent_ng_template_7_ng_container_0_Template, 3, 2, "ng-container", 16)(1, LockerBookingsComponent_ng_template_7_ng_container_1_Template, 3, 0, "ng-container", 16);
  }
  if (rf & 2) {
    const row_r15 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r15.status !== "declined" && !row_r15.deleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r15.status === "declined" || row_r15.deleted);
  }
}
function LockerBookingsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r22 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r22.asset_name || row_r22.asset_id, " ");
  }
}
function LockerBookingsComponent_ng_template_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r23.user_email, " ");
  }
}
function LockerBookingsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, LockerBookingsComponent_ng_template_11_div_3_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r23 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r23.user_name || row_r23.user_email || row_r23.booked_by_name || row_r23.booked_by_email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r23.user_name);
  }
}
function LockerBookingsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "app-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-menu", null, 24)(7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LockerBookingsComponent_ng_template_13_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const row_r26 = restoredCtx.row;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.approve(row_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 25)(9, "app-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "event_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Approve Locker");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LockerBookingsComponent_ng_template_13_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const row_r26 = restoredCtx.row;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r30.reject(row_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 25)(15, "app-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "event_busy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Decline Locker");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const row_r26 = ctx.row;
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("bg-success", row_r26.approved)("text-white", row_r26.approved || row_r26.rejected)("bg-warning", !row_r26.approved && !row_r26.rejected)("text-black", !row_r26.approved && !row_r26.rejected)("bg-error", row_r26.rejected);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r26.approved ? "Approved" : row_r26.rejected ? "Declined" : "Tentative", " ");
  }
}
function LockerBookingsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 27)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "app-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-menu", null, 28)(7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LockerBookingsComponent_ng_template_15_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const row_r32 = restoredCtx.row;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r34.checkin(row_r32, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 25)(9, "app-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Check-in");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LockerBookingsComponent_ng_template_15_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const row_r32 = restoredCtx.row;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r36.checkin(row_r32, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 25)(15, "app-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Check-out");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r31 = ctx.data;
    const row_r32 = ctx.row;
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("bg-neutral-600", !data_r31)("bg-success", data_r31)("opacity-30", row_r32.status === "ended");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r33)("disabled", row_r32.status === "ended")("matTooltip", row_r32.status === "ended" ? "Locker booking has ended" : "Check-in or check-out locker");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r31 ? "Yes" : "No");
  }
}
function LockerBookingsComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LockerBookingsComponent_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r37.loadMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Load More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c0 = () => ["date", "period", "user_name", "group", "asset_name", "approver_name", "status", "checked_in"];
const _c1 = () => ["Date", "Period", "Person", "Group", "Locker", "Approver", "Status", "Checked In"];
const _c2 = () => ["4r", "10r", "flex", "10r", "10r", "10r", "8r", "7r"];
const _c3 = (a0, a1, a2, a3, a4, a5, a6) => ({
  user_name: a0,
  asset_name: a1,
  date: a2,
  period: a3,
  status: a4,
  checked_in: a5,
  access: a6
});
class LockerBookingsComponent {
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _settings) {
    var _this = this;
    this._state = _state;
    this._settings = _settings;
    this.filters = this._state.filters;
    this.has_more_pages = this._state.has_more_pages;
    this.bookings = this._state.bookings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(i => i.map(booking => ({
      ...booking,
      end: booking.date + booking.duration * 60 * 1000
    }))));
    this.rejectAll = () => this._state.rejectAllLockers();
    this.loadMore = () => this._state.nextPage();
    this.checkin = (d, s) => this.runMethod('checkin', /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._state.checkinLocker(d, s);
      d.checked_in = s ?? true;
    }));
    this.approve = d => this.runMethod('approve', /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this._state.approveLocker(d);
    }));
    this.reject = d => this.runMethod('reject', /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this._state.rejectLocker(d);
    }));
  }
  runMethod(name, fn) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = name;
      yield fn().catch(i => null);
      _this2.loading = '';
    })();
  }
  static #_ = this.ɵfac = function LockerBookingsComponent_Factory(t) {
    return new (t || LockerBookingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_locker_state_service__WEBPACK_IMPORTED_MODULE_1__.LockersStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: LockerBookingsComponent,
    selectors: [["locker-bookings"]],
    decls: 26,
    vars: 26,
    consts: [[1, "w-full", "h-4"], [1, "overflow-auto", "h-full", "w-full", "px-4", "pb-4"], [1, "min-w-[76rem]", "block", 3, "dataSource", "filter", "columns", "display_column", "column_size", "template", "empty"], ["date_template", ""], ["period_template", ""], ["locker_template", ""], ["user_template", ""], ["status_template", ""], ["option_template", ""], ["btn", "", "matRipple", "", "class", "absolute bottom-2 left-2 w-32 mx-auto my-4", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", 1, "absolute", "bottom-2", "right-2", "bg-base-100", "shadow", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "w-full"], [1, "opacity-60"], [1, "text-xl"], [4, "ngIf"], [1, "text-xs", "py-1", "px-2", "bg-error", "rounded-2xl", "text-white"], [1, "flex", "flex-col", "justify-center"], [1, "select-all"], ["class", "text-xs opacity-30 select-all", 4, "ngIf"], [1, "text-xs", "opacity-30", "select-all"], ["matRipple", "", 1, "rounded-3xl", "px-2", "py-1", "flex", "items-center", "space-x-2", "capitalize", 3, "matMenuTriggerFor"], [1, "ml-2"], ["statusMenu", "matMenu"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], ["matRipple", "", 1, "rounded-3xl", "px-2", "py-1", "text-white", "flex", "items-center", "space-x-2", 3, "matMenuTriggerFor", "disabled", "matTooltip"], ["checkinMenu", "matMenu"], ["btn", "", "matRipple", "", 1, "absolute", "bottom-2", "left-2", "w-32", "mx-auto", "my-4", 3, "click"]],
    template: function LockerBookingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "custom-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, LockerBookingsComponent_ng_template_5_Template, 7, 8, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(7, LockerBookingsComponent_ng_template_7_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(9, LockerBookingsComponent_ng_template_9_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(11, LockerBookingsComponent_ng_template_11_Template, 4, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(13, LockerBookingsComponent_ng_template_13_Template, 19, 12, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(15, LockerBookingsComponent_ng_template_15_Template, 19, 10, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, LockerBookingsComponent_button_17_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 10)(20, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-menu", null, 11)(24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LockerBookingsComponent_Template_button_click_24_listener() {
          return ctx.rejectAll();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Reject All");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](23);
        let tmp_1_0;
        let tmp_6_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.bookings)("filter", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 9, ctx.filters)) == null ? null : tmp_1_0.search)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c0))("display_column", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](16, _c1))("column_size", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](17, _c2))("template", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction7"](18, _c3, _r7, _r5, _r1, _r3, _r9, _r11, _r11))("empty", ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 11, ctx.filters)) == null ? null : tmp_6_0.search) ? "No matching locker bookings" : "There are no locker booking for the currently selected date.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 13, ctx.has_more_pages));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r13);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_4__.CustomTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n                position: relative;\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvbG9ja2Vycy9sb2NrZXItYm9va2luZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxrQkFBa0I7Z0JBQ2xCLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO2dCQUNaLFdBQVc7WUFDZiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 78574:
/*!****************************************************************!*\
  !*** ./apps/concierge/src/app/lockers/locker-state.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockersStateService: () => (/* binding */ LockersStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 70462);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 95933);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 15746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 45083);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 36520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 36932);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 680);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 31957);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 57016);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 4512);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns */ 12687);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/bookings */ 40688);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var libs_common_src_lib_qr_code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! libs/common/src/lib/qr-code */ 98010);
/* harmony import */ var _placeos_ts_client_dist_esm_resources_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @placeos/ts-client/dist/esm/resources/functions */ 47875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 17401);













function addQRCodeToBooking(booking) {
  return new _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.Booking({
    ...booking,
    extension_data: {
      ...booking.extension_data,
      checkin_qr_code: (0,libs_common_src_lib_qr_code__WEBPACK_IMPORTED_MODULE_4__.generateQRCode)(`/workplace/#/book/code?asset_id=${encodeURIComponent(booking.asset_id)}`)
    }
  });
}
class LockersStateService extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  nextPage() {
    this._call_next_page.next(`NEXT_${Date.now()}`);
  }
  constructor(_org, _dialog) {
    super();
    this._org = _org;
    this._dialog = _dialog;
    this._filters = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({});
    // private _new_lockers = new BehaviorSubject<Locker[]>([]);
    this._locker_bookings = [];
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(false);
    // public readonly new_lockers = this._new_lockers.asObservable();
    // public get new_locker_count() {
    //     return this._new_lockers.getValue()?.length || 0;
    // }
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    // public readonly lockers: Observable<Locker[]> = this._filters.pipe(
    //     debounceTime(500),
    //     switchMap((filters) => {
    //         const zones = filters.zones || [];
    //         return zones && !zones.includes('All')
    //             ? showMetadata(zones[0], 'lockers').pipe(map((m) => m.details))
    //             : listChildMetadata(this._org.building?.id, {
    //                   name: 'lockers',
    //               }).pipe(
    //                   map((m) =>
    //                       m
    //                           .map((i) => i.metadata.lockers.details)
    //                           .reduce((c: any[], i: any[]) => [...c, ...i], [])
    //                   )
    //               );
    //     }),
    //     catchError((_) => []),
    //     map((list) => {
    //         if (!(list instanceof Array)) list = [];
    //         list.sort((a, b) => a.name?.localeCompare(b.name));
    //         return list.map((i) => new Locker({ ...i, qr_code: '' }));
    //     }),
    //     shareReplay(1)
    // );
    this._next_page = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this._call_next_page = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this._all_zones_keys = ['All', -1, '-1'];
    this.setup_paging = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._filters, this._org.initialised]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(([filters, loaded]) => {
      if (!loaded) return;
      const date = filters.date || Date.now();
      const zones = !filters.zones || filters.zones.some(z => this._all_zones_keys.includes(z)) ? [this._org.building.id] : filters.zones;
      this._next_page.next(() => (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.queryPagedBookings)({
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(date)),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(date)),
        type: 'locker',
        zones: zones.join(','),
        include_checked_out: true
      }));
      this._call_next_page.next(`RESET_${Date.now()}`);
    }));
    this.paged_bookings = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._next_page, this._call_next_page]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)((a, b) => a[1] === b[1]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(([next_page, action]) => {
      this._loading.next(true);
      if (!next_page) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)({
          data: [],
          total: 0,
          next: null,
          reset: action.includes('RESET')
        });
      }
      // If reset is true, start over
      if (action.includes('RESET')) {
        return next_page().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(data => ({
          ...data,
          reset: true
        })));
      }
      return next_page().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(data => ({
        ...data,
        reset: false
      })));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.scan)((acc, {
      data,
      total,
      next,
      reset
    }) => {
      const list = data;
      this._next_page.next(next); // Set the next page function
      if (reset) return {
        list,
        total
      }; // Reset the items array
      return {
        list: [...acc.list, ...list],
        total
      };
    }, {
      list: [],
      total: 0
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this._loading.next(false)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.shareReplay)(1));
    this.has_more_pages = this.paged_bookings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(_ => _.list.length < _.total));
    this.bookings = this.paged_bookings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(i => i.list));
    this.setup_paging.subscribe();
  }
  setFilters(filters) {
    if (filters.zones?.includes('All')) {
      filters.zones = ['All', ...this._org.levelsForBuilding(this._org.building).map(lvl => lvl.id)];
    } else if (filters.zones && this._filters.getValue()?.zones?.includes('All')) {
      filters.zones = [];
    }
    this._filters.next({
      ...this._filters.getValue(),
      ...filters
    });
  }
  refresh() {
    this._loading.next(true);
    this.timeout('poll', () => this.setFilters(this._filters.getValue()));
  }
  // public addLockers(list: Locker[]) {
  //     this._new_lockers.next(this._new_lockers.getValue().concat(list));
  // }
  // public clearNewLockers() {
  //     this._filters.next(this._filters.getValue());
  //     this._new_lockers.next([]);
  // }
  checkinLocker(locker, state = true) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Check-in:', locker);
      const status = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.checkinBooking)(locker.id, state ?? true).toPromise().catch(_ => ({
        failed: true,
        error: _
      }));
      if (status.failed) {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)(status.error ? `Error: ${status.error}` : `Error checking ${state ? 'in' : 'out'} locker booking`);
        throw status.error;
      }
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)(`Checked ${state ? 'in' : 'out'} ${locker.user_name}.`);
    })();
  }
  approveLocker(locker) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const success = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.approveBooking)(locker.id).toPromise().catch(_ => 'failed');
      if (success === 'failed') {
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)('Error approving in locker booking');
      }
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)(`Approved locker booking for ${locker.user_name} on ${(0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])(locker.date, 'MMM do')}.`);
      locker.approved = true;
      locker.rejected = false;
    })();
  }
  rejectLocker(locker) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const success = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.rejectBooking)(locker.id).toPromise().catch(_ => 'failed');
      if (success === 'failed') {
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)('Error rejecting in locker booking');
      }
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)(`Rejected locker booking for ${locker.user_name} on ${(0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])(locker.date, 'MMM do')}.`);
      locker.approved = false;
      locker.rejected = true;
    })();
  }
  giveAccess(locker) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const success = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.saveBooking)(new _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.Booking({
        ...locker,
        access: true
      })).toPromise().catch(_ => 'failed');
      if (success === 'failed') return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)('Error giving building access booking host');
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)(`Successfully gave building access to ${locker.user_name} for locker booking.`);
      _this._locker_bookings = [..._this._locker_bookings, success];
    })();
  }
  rejectAllLockers() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const list = _this2._locker_bookings || [];
      if (list.length <= 0) return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyInfo)('No lockers to reject for the selected date');
      const resp = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.openConfirmModal)({
        title: 'Cancel all locker bookings',
        content: 'Are you sure you want to cancel all bookings for the selected date?',
        icon: {
          type: 'icon',
          class: 'material-icons',
          content: 'delete'
        }
      }, _this2._dialog);
      if (resp.reason !== 'done') return;
      resp.loading('Rejecting all lockers for selected date...');
      yield Promise.all(list.map(locker => (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.rejectBooking)(locker.id).toPromise()));
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)('Successfully rejected all locker bookings for selected date.');
      resp.close();
    })();
  }
  static #_ = this.ɵfac = function LockersStateService_Factory(t) {
    return new (t || LockersStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_3__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialog));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjectable"]({
    token: LockersStateService,
    factory: LockersStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7155:
/*!*******************************************************************!*\
  !*** ./apps/concierge/src/app/lockers/locker-topbar.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockersTopbarComponent: () => (/* binding */ LockersTopbarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 17627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 46939);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _locker_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locker-state.service */ 78574);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/bookings */ 40688);
/* harmony import */ var _ui_booking_rules_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/booking-rules-modal.component */ 67232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/date-options.component */ 11771);
/* harmony import */ var _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/searchbar.component */ 97338);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);























function LockersTopbarComponent_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "All Levels");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function LockersTopbarComponent_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", level_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", level_r3.display_name || level_r3.name, " ");
  }
}
function LockersTopbarComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LockersTopbarComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r4.manageRestrictions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "lock_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
class LockersTopbarComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  constructor(_lockers, _org, _route, _router, _dialog) {
    super();
    this._lockers = _lockers;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this._dialog = _dialog;
    /** List of levels for the active building */
    this.levels = this._org.active_levels;
    /** List of levels for the active building */
    this.filters = this._lockers.filters;
    this.manage = false;
    this.is_map = false;
    /** Set filtered date */
    this.setDate = date => this._lockers.setFilters({
      date
    });
    this.setFilters = o => this._lockers.setFilters(o);
    /** Update active zones for lockers */
    this.updateZones = zones => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          zone_ids: zones.join(',')
        },
        queryParamsHandling: 'merge'
      });
      this._lockers.setFilters({
        zones
      });
    };
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.first)(_ => _)).toPromise();
      _this.subscription('route.query', _this._route.queryParamMap.subscribe(params => {
        if (params.has('zone_ids')) {
          const zones = params.get('zone_ids').split(',');
          if (zones.length) {
            _this.updateZones(zones);
            const level = _this._org.levelWithID(zones);
            if (!level) return;
            _this._org.building = _this._org.buildings.find(bld => bld.id === level.parent_id);
          }
        }
        if (params.has('date')) {
          _this.setDate(new Date(+params.get('date')));
        }
        if (params.has('approve')) {
          _this.approve(params.get('approve'));
        } else if (params.has('reject')) {
          _this.reject(params.get('reject'));
        }
        _this.manage = _this._router.url?.includes('manage');
        _this.is_map = _this._router.url?.includes('map');
      }));
      _this.subscription('router.events', _this._router.events.subscribe(() => {
        _this.manage = _this._router.url?.includes('manage');
        _this.is_map = _this._router.url?.includes('map');
      }));
      _this.subscription('levels', _this._org.active_levels.subscribe( /*#__PURE__*/function () {
        var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (levels) {
          const filters = yield _this.filters.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).toPromise();
          const zones = filters?.zones?.filter(zone => levels.find(lvl => lvl.id === zone) || zone === 'All') || [];
          if (!zones.length && levels.length) {
            zones.push(levels[0].id);
          }
          _this.updateZones(zones);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()));
      _this.manage = _this._router.url?.includes('manage');
      _this.is_map = _this._router.url?.includes('map');
    })();
  }
  // public newLocker() {
  //     this._lockers.addLockers([
  //         new Locker({ id: `locker-${randomInt(999_999)}` }),
  //     ]);
  //     notifySuccess(
  //         'New locker added to local data. Make sure to save the locker before using it.'
  //     );
  // }
  // public newLockerBooking() {
  //     this._dialog.open(LockerBookModalComponent, {});
  // }
  manageRestrictions() {
    this._dialog.open(_ui_booking_rules_modal_component__WEBPACK_IMPORTED_MODULE_5__.BookingRulesModalComponent, {
      data: {
        type: 'locker'
      }
    });
  }
  // public async loadCSVData(event: InputEvent) {
  //     const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
  //         notifyError(m);
  //         throw e;
  //     });
  //     try {
  //         const list = csvToJson(data) || [];
  //         this._lockers.addLockers(
  //             list.map(
  //                 (_) =>
  //                     new Locker({
  //                         ..._,
  //                         id: _.id || `locker-${randomInt(999_999)}`,
  //                     })
  //             )
  //         );
  //     } catch (e) {
  //         console.error(e);
  //     }
  // }
  // public downloadTemplate() {
  //     const locker: any = new Locker({
  //         id: 'locker-123',
  //         name: 'Test Locker',
  //         bookable: true,
  //         groups: ['test-locker-group', 'locker-bookers'],
  //         features: ['Standing Locker', 'Dual Monitor'],
  //     }).toJSON();
  //     const data = jsonToCsv([locker]);
  //     downloadFile('locker-template.csv', data);
  // }
  /**
   * Aprrove a locker booking
   * @param id Booking ID to approve
   */
  approve(id) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const booking = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_4__.showBooking)(id).toPromise();
      if (booking) {
        _this2._lockers.approveLocker(booking);
      }
    })();
  }
  /**
   * Reject a locker booking
   * @param id Booking ID to reject
   */
  reject(id) {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const booking = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_4__.showBooking)(id).toPromise();
      if (booking) {
        _this3._lockers.rejectLocker(booking);
      }
    })();
  }
  static #_ = this.ɵfac = function LockersTopbarComponent_Factory(t) {
    return new (t || LockersTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_locker_state_service__WEBPACK_IMPORTED_MODULE_3__.LockersStateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: LockersTopbarComponent,
    selectors: [["lockers-topbar"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
    decls: 13,
    vars: 13,
    consts: [[1, "flex", "items-center", "bg-base-100", "h-20", "px-4", "border-b", "border-base-200", "space-x-2"], ["appearance", "outline"], ["placeholder", "All Levels", 3, "ngModel", "ngModelChange"], ["value", "All", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["btn", "", "icon", "", "matRipple", "", "class", "bg-primary mx-2 text-white rounded", "matTooltip", "Locker Restrictions", 3, "click", 4, "ngIf"], [1, "flex-1", "w-2"], [1, "mr-2", 3, "model", "modelChange"], [3, "dateChange"], ["value", "All"], [3, "value"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Locker Restrictions", 1, "bg-primary", "mx-2", "text-white", "rounded", 3, "click"]],
    template: function LockersTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function LockersTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
          return ctx.updateZones([$event]);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, LockersTopbarComponent_mat_option_5_Template, 2, 0, "mat-option", 3)(6, LockersTopbarComponent_mat_option_6_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, LockersTopbarComponent_button_8_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "searchbar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("modelChange", function LockersTopbarComponent_Template_searchbar_modelChange_10_listener($event) {
          return ctx.setFilters({
            search: $event
          });
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "date-options", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("dateChange", function LockersTopbarComponent_Template_date_options_dateChange_12_listener($event) {
          return ctx.setDate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 5, ctx.filters).zones ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 7, ctx.filters).zones[0] : "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.is_map);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 9, ctx.levels));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.manage);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("model", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 11, ctx.filters)) == null ? null : tmp_4_0.search);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _ui_date_options_component__WEBPACK_IMPORTED_MODULE_6__.DateOptionsComponent, _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_7__.SearchbarComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_8__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
    styles: ["mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvbG9ja2Vycy9sb2NrZXItdG9wYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksY0FBYztnQkFDZCxVQUFVO1lBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuMjVlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogOGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 57391:
/*!*************************************************************!*\
  !*** ./apps/concierge/src/app/lockers/lockers.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockersComponent: () => (/* binding */ LockersComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _locker_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locker-state.service */ 78574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/sidebar.component */ 42349);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ 78173);
/* harmony import */ var _locker_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locker-topbar.component */ 7155);











const _c0 = ["app-lockers", ""];
function LockersComponent_mat_progress_bar_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 7);
  }
}
const _c1 = () => ["/book", "lockers", "events"];
const _c2 = () => ["/book", "lockers", "map"];
const _c3 = () => ["/book", "lockers", "manage"];
class LockersComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  constructor(_state, _router) {
    super();
    this._state = _state;
    this._router = _router;
    this.loading = this._state.loading;
  }
  ngOnInit() {
    this._state.refresh();
    this.subscription('router.events', this._router.events.subscribe(e => {
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
        const url_parts = this._router.url?.split('/') || [''];
        this.path = url_parts[parts.length - 1].split('?')[0];
      }
    }));
    const parts = this._router.url?.split('/') || [''];
    this.path = parts[parts.length - 1].split('?')[0];
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static #_ = this.ɵfac = function LockersComponent_Factory(t) {
    return new (t || LockersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_locker_state_service__WEBPACK_IMPORTED_MODULE_1__.LockersStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LockersComponent,
    selectors: [["", "app-lockers", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    attrs: _c0,
    decls: 15,
    vars: 12,
    consts: [[1, "flex-1", "relative", "w-1/2", "flex", "flex-col", "bg-base-200", "overflow-hidden"], [1, "w-full"], [1, "dark"], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", "queryParamsHandling", "merge", 3, "routerLink", "active"], [1, "flex-1", "h-1/2", "w-full", "relative", "overflow-auto"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate", 1, "w-full"]],
    template: function LockersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "lockers-topbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "nav", 3)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Bookings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Map View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Manage Lockers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, LockersComponent_mat_progress_bar_13_Template, 1, 0, "mat-progress-bar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c1))("active", ctx.path === "events");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c2))("active", ctx.path === "map");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c3))("active", ctx.path === "manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 7, ctx.loading));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabNav, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabLink, _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__.MatProgressBar, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _locker_topbar_component__WEBPACK_IMPORTED_MODULE_3__.LockersTopbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvbG9ja2Vycy9sb2NrZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixZQUFZO2dCQUNaLFdBQVc7WUFDZiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 17639:
/*!**********************************************************!*\
  !*** ./apps/concierge/src/app/lockers/lockers.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockersModule: () => (/* binding */ LockersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ 92106);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _placeos_explore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/explore */ 84203);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/ui.module */ 97428);
/* harmony import */ var _lockers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lockers.component */ 57391);
/* harmony import */ var _locker_bookings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locker-bookings.component */ 99476);
/* harmony import */ var _locker_topbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locker-topbar.component */ 7155);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @placeos/bookings */ 40688);
/* harmony import */ var _placeos_form_fields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @placeos/form-fields */ 39304);
/* harmony import */ var _new_lockers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-lockers.component */ 92576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);


















const ROUTES = [{
  path: 'new',
  component: _new_lockers_component__WEBPACK_IMPORTED_MODULE_7__.NewLockersComponent,
  children: [{
    path: 'events',
    component: _locker_bookings_component__WEBPACK_IMPORTED_MODULE_3__.LockerBookingsComponent
  }, {
    path: '**',
    redirectTo: 'events'
  }]
}, {
  path: '',
  component: _lockers_component__WEBPACK_IMPORTED_MODULE_2__.LockersComponent,
  children: [{
    path: 'events',
    component: _locker_bookings_component__WEBPACK_IMPORTED_MODULE_3__.LockerBookingsComponent
  }, {
    path: '**',
    redirectTo: 'events'
  }]
}];
class LockersModule {
  static #_ = this.ɵfac = function LockersModule_Factory(t) {
    return new (t || LockersModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: LockersModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule, _placeos_explore__WEBPACK_IMPORTED_MODULE_0__.SharedExploreModule, _placeos_bookings__WEBPACK_IMPORTED_MODULE_5__.SharedBookingsModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_6__.FormFieldsModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](LockersModule, {
    declarations: [_new_lockers_component__WEBPACK_IMPORTED_MODULE_7__.NewLockersComponent, _lockers_component__WEBPACK_IMPORTED_MODULE_2__.LockersComponent, _locker_bookings_component__WEBPACK_IMPORTED_MODULE_3__.LockerBookingsComponent, _locker_topbar_component__WEBPACK_IMPORTED_MODULE_4__.LockersTopbarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule, _placeos_explore__WEBPACK_IMPORTED_MODULE_0__.SharedExploreModule, _placeos_bookings__WEBPACK_IMPORTED_MODULE_5__.SharedBookingsModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_6__.FormFieldsModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule]
  });
})();

/***/ }),

/***/ 92576:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/lockers/new-lockers.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewLockersComponent: () => (/* binding */ NewLockersComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _locker_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locker-state.service */ 78574);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 46939);
/* harmony import */ var _ui_booking_rules_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/booking-rules-modal.component */ 67232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/date-options.component */ 11771);
/* harmony import */ var _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/searchbar.component */ 97338);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/app-topbar.component */ 33005);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 19842);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ 78173);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);

























const _c0 = ["app-new-lockers", ""];
function NewLockersComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", level_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", level_r4.display_name || level_r4.name, " ");
  }
}
function NewLockersComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "date-options", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("dateChange", function NewLockersComponent_ng_container_18_Template_date_options_dateChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.setDate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NewLockersComponent_ng_container_18_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r7.refresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, ctx_r1.loading));
  }
}
function NewLockersComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NewLockersComponent_ng_container_19_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r8.manageRestrictions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "lock_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}
function NewLockersComponent_mat_progress_bar_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-progress-bar", 19);
  }
}
class NewLockersComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  constructor(_state, _router, _route, _dialog, _org) {
    super();
    this._state = _state;
    this._router = _router;
    this._route = _route;
    this._dialog = _dialog;
    this._org = _org;
    this.loading = this._state.loading;
    /** List of levels for the active building */
    this.filters = this._state.filters;
    /** List of levels for the active building */
    this.levels = this._org.active_levels;
    this.setDate = date => this._state.setFilters({
      date
    });
    this.setFilters = o => this._state.setFilters(o);
    this.refresh = () => this._state.refresh();
    /** Update active zones for lockers */
    this.updateZones = zones => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          zone_ids: zones.join(',')
        },
        queryParamsHandling: 'merge'
      });
      this._state.setFilters({
        zones
      });
    };
  }
  ngOnInit() {
    var _this = this;
    this._state.refresh();
    this.subscription('router.events', this._router.events.subscribe(e => {
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__.NavigationEnd) {
        const url_parts = this._router.url?.split('/') || [''];
        this.path = url_parts[parts.length - 1].split('?')[0];
      }
    }));
    this.subscription('levels', this._org.active_levels.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (levels) {
        const filters = yield _this.filters.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).toPromise();
        const zones = filters?.zones?.filter(zone => levels.find(lvl => lvl.id === zone) || zone === 'All') || [];
        if (!zones.length && levels.length) {
          zones.push(levels[0].id);
        }
        _this.updateZones(zones);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()));
    const parts = this._router.url?.split('/') || [''];
    this.path = parts[parts.length - 1].split('?')[0];
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  // public newLockerBooking() {
  //     const ref = this._dialog.open(LockerBookModalComponent, {});
  //     ref.afterClosed().subscribe((_) => {
  //         this._state.refresh();
  //     });
  // }
  manageRestrictions() {
    this._dialog.open(_ui_booking_rules_modal_component__WEBPACK_IMPORTED_MODULE_4__.BookingRulesModalComponent, {
      data: {
        type: 'locker'
      }
    });
  }
  static #_ = this.ɵfac = function NewLockersComponent_Factory(t) {
    return new (t || NewLockersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_locker_state_service__WEBPACK_IMPORTED_MODULE_2__.LockersStateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_3__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: NewLockersComponent,
    selectors: [["", "app-new-lockers", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
    attrs: _c0,
    decls: 24,
    vars: 14,
    consts: [[1, "print:hidden"], [1, "flex", "flex-1", "h-px", "print:hidden"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "flex", "items-center", "w-full", "py-4", "px-8", "space-x-2"], [1, "text-2xl", "font-medium"], [1, "flex-1", "w-px"], [1, "mr-2", 3, "model", "modelChange"], [1, "w-full", "flex", "items-center", "px-8", "space-x-2"], ["appearance", "outline", 1, "h-[3.5rem]"], ["multiple", "", "placeholder", "All Levels", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "border-l", "h-full", "!ml-8", "!mr-4"], [4, "ngIf"], [1, "flex-1", "h-1/2", "w-full", "relative", "overflow-auto", "px-4"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], [3, "value"], [3, "dateChange"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Refresh List", 1, "ml-2", "rounded", "border", "border-base-200", 3, "disabled", "click"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Locker Restrictions", 1, "bg-primary", "text-white", "rounded", 3, "click"], ["mode", "indeterminate", 1, "w-full"]],
    template: function NewLockersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-topbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "main", 2)(4, "div", 3)(5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Locker Bookings");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "searchbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("modelChange", function NewLockersComponent_Template_searchbar_modelChange_8_listener($event) {
          return ctx.setFilters({
            search: $event
          });
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 7)(11, "mat-form-field", 8)(12, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function NewLockersComponent_Template_mat_select_ngModelChange_12_listener($event) {
          return ctx.updateZones($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, NewLockersComponent_mat_option_14_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "div", 11)(17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, NewLockersComponent_ng_container_18_Template, 6, 3, "ng-container", 12)(19, NewLockersComponent_ng_container_19_Template, 4, 0, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, NewLockersComponent_mat_progress_bar_22_Template, 1, 0, "mat-progress-bar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("model", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 6, ctx.filters)) == null ? null : tmp_0_0.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](13, 8, ctx.filters)) == null ? null : tmp_1_0.zones);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 10, ctx.levels));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.path === "events");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.path === "manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](23, 12, ctx.loading) && ctx.path === "events");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _ui_date_options_component__WEBPACK_IMPORTED_MODULE_5__.DateOptionsComponent, _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_6__.SearchbarComponent, _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_7__.ApplicationTopbarComponent, _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.ApplicationSidebarComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_9__.IconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvbG9ja2Vycy9uZXctbG9ja2Vycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsMkJBQTJCO1lBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

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
//# sourceMappingURL=apps_concierge_src_app_lockers_lockers_module_ts.js.map