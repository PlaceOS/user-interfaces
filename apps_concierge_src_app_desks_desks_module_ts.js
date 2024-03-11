"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_desks_desks_module_ts"],{

/***/ 45426:
/*!*******************************************************************!*\
  !*** ./apps/concierge/src/app/desks/desk-book-modal.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeskBookModalComponent: () => (/* binding */ DeskBookModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/bookings */ 40688);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 70462);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var apps_workplace_src_app_book_new_desk_flow_new_desk_form_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apps/workplace/src/app/book/new-desk-flow/new-desk-form-details.component */ 36437);














function DeskBookModalComponent_main_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "new-desk-form-details", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("form", ctx_r0.form);
  }
}
function DeskBookModalComponent_footer_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "footer", 7)(1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeskBookModalComponent_footer_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function DeskBookModalComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Making booking request...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 48);
  }
}
class DeskBookModalComponent {
  get form() {
    return this._booking_form.form;
  }
  constructor(_booking_form, _dialog_ref) {
    this._booking_form = _booking_form;
    this._dialog_ref = _dialog_ref;
    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(false);
  }
  save() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading.next(true);
      _this.form.patchValue({
        booking_type: 'desk'
      });
      const event = yield _this._booking_form.postForm().catch(_ => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)(_);
        _this.loading.next(false);
        throw _;
      });
      _this.event.emit({
        reason: 'done',
        metadata: event
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)('Successfully created booking');
      _this._dialog_ref.close();
      _this.loading.next(false);
    })();
  }
  static #_ = this.ɵfac = function DeskBookModalComponent_Factory(t) {
    return new (t || DeskBookModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DeskBookModalComponent,
    selectors: [["desk-book-modal"]],
    outputs: {
      event: "event"
    },
    decls: 13,
    vars: 7,
    consts: [[1, "flex-1", "w-0"], ["icon", "", "mat-dialog-close", ""], ["class", "overflow-auto p-4 max-h-[65vh]", 4, "ngIf", "ngIfElse"], ["class", "flex justify-center items-center p-2 border-t border-base-200", 4, "ngIf"], ["load_state", ""], [1, "overflow-auto", "p-4", "max-h-[65vh]"], [3, "form"], [1, "flex", "justify-center", "items-center", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["loading", "", 1, "h-64", "flex", "flex-col", "items-center", "justify-center"], [1, "mb-4", 3, "diameter"]],
    template: function DeskBookModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header")(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "New Desk Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 1)(5, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, DeskBookModalComponent_main_7_Template, 2, 1, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, DeskBookModalComponent_footer_9_Template, 3, 0, "footer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, DeskBookModalComponent_ng_template_11_Template, 4, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 3, ctx.loading))("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 5, ctx.loading));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, apps_workplace_src_app_book_new_desk_flow_new_desk_form_details_component__WEBPACK_IMPORTED_MODULE_4__.NewDeskFormDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe]
  });
}

/***/ }),

/***/ 29634:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/desks/desk-bookings.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeskBookingsComponent: () => (/* binding */ DeskBookingsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _desks_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desks-state.service */ 34381);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-table.component */ 27442);













function DeskBookingsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const date_r12 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 2, date_r12, "MMM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 5, date_r12, "dd"));
  }
}
function DeskBookingsComponent_ng_template_7_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).row;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 2, row_r13.date, ctx_r16.time_format), " \u2013 ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 5, row_r13.end, ctx_r16.time_format), " ");
  }
}
function DeskBookingsComponent_ng_template_7_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "All Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function DeskBookingsComponent_ng_template_7_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DeskBookingsComponent_ng_template_7_ng_container_0_ng_container_1_Template, 4, 8, "ng-container", 15)(2, DeskBookingsComponent_ng_template_7_ng_container_0_ng_container_2_Template, 2, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !row_r13.all_day);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r13.all_day);
  }
}
function DeskBookingsComponent_ng_template_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r13.status === "ended" ? "Manually Ended" : "Expired", " ");
  }
}
function DeskBookingsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DeskBookingsComponent_ng_template_7_ng_container_0_Template, 3, 2, "ng-container", 15)(1, DeskBookingsComponent_ng_template_7_ng_container_1_Template, 3, 1, "ng-container", 15);
  }
  if (rf & 2) {
    const row_r13 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r13.status !== "declined" && !row_r13.deleted && row_r13.status !== "ended");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r13.status === "declined" || row_r13.deleted || row_r13.status === "ended");
  }
}
function DeskBookingsComponent_ng_template_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r21.user_email, " ");
  }
}
function DeskBookingsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DeskBookingsComponent_ng_template_9_div_3_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r21 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r21.user_name || row_r21.user_email || row_r21.booked_by_name || row_r21.booked_by_email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r21.user_name);
  }
}
function DeskBookingsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "app-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-menu", null, 23)(7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeskBookingsComponent_ng_template_11_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);
      const row_r24 = restoredCtx.row;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.approve(row_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 24)(9, "app-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "event_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Approve Desk");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeskBookingsComponent_ng_template_11_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);
      const row_r24 = restoredCtx.row;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.reject(row_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 24)(15, "app-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "event_busy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Decline Desk");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const row_r24 = ctx.row;
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("bg-success", row_r24.approved)("text-white", row_r24.approved || row_r24.rejected)("bg-warning", !row_r24.approved && !row_r24.rejected)("text-black", !row_r24.approved && !row_r24.rejected)("bg-error", row_r24.rejected);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r24.approved ? "Approved" : row_r24.rejected ? "Declined" : "Tentative", " ");
  }
}
function DeskBookingsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 26)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "app-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-menu", null, 27)(7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeskBookingsComponent_ng_template_13_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33);
      const row_r30 = restoredCtx.row;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r32.checkin(row_r30, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 24)(9, "app-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Check-in");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeskBookingsComponent_ng_template_13_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33);
      const row_r30 = restoredCtx.row;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r34.checkin(row_r30, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 24)(15, "app-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Check-out");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r29 = ctx.data;
    const row_r30 = ctx.row;
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("bg-neutral", !data_r29)("bg-success", data_r29)("opacity-30", row_r30.status === "ended");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r31)("disabled", row_r30.status === "ended")("matTooltip", row_r30.status === "ended" ? "Desk booking has ended" : "Check-in or check-out desk");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r29 ? "Yes" : "No");
  }
}
function DeskBookingsComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeskBookingsComponent_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r35.loadMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Load More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c0 = () => ["date", "period", "user_name", "group", "asset_name", "approver_name", "status", "checked_in"];
const _c1 = () => ["Date", "Period", "Person", "Group", "Desk", "Approver", "Status", "Checked In"];
const _c2 = () => ["4r", "10r", "flex", "10r", "10r", "10r", "8r", "7r"];
const _c3 = (a0, a1, a2, a3, a4, a5) => ({
  user_name: a0,
  date: a1,
  period: a2,
  status: a3,
  checked_in: a4,
  access: a5
});
class DeskBookingsComponent {
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
    this.rejectAll = () => this._state.rejectAllDesks();
    this.loadMore = () => this._state.nextPage();
    this.checkin = (d, s) => this.runMethod('checkin', /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._state.checkinDesk(d, s);
      d.checked_in = s ?? true;
    }));
    this.approve = d => this.runMethod('approve', /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this._state.approveDesk(d);
    }));
    this.reject = d => this.runMethod('reject', /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this._state.rejectDesk(d);
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
  static #_ = this.ɵfac = function DeskBookingsComponent_Factory(t) {
    return new (t || DeskBookingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_desks_state_service__WEBPACK_IMPORTED_MODULE_1__.DesksStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DeskBookingsComponent,
    selectors: [["desk-bookings"]],
    decls: 24,
    vars: 25,
    consts: [[1, "w-full", "h-4"], [1, "overflow-auto", "h-full", "w-full", "px-4", "pb-4"], [1, "min-w-[76rem]", "block", 3, "dataSource", "filter", "columns", "display_column", "column_size", "template", "empty"], ["date_template", ""], ["period_template", ""], ["user_template", ""], ["status_template", ""], ["option_template", ""], ["btn", "", "matRipple", "", "class", "absolute bottom-2 left-2 w-32 mx-auto my-4", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", 1, "absolute", "bottom-2", "right-2", "bg-base-100", "shadow", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "w-full"], [1, "opacity-60"], [1, "text-xl"], [4, "ngIf"], [1, "text-xs", "py-1", "px-2", "bg-error", "rounded-2xl", "text-white"], [1, "flex", "flex-col", "justify-center"], [1, "select-all"], ["class", "text-xs opacity-30 select-all", 4, "ngIf"], [1, "text-xs", "opacity-30", "select-all"], ["matRipple", "", 1, "rounded-3xl", "px-2", "py-1", "flex", "items-center", "space-x-2", "capitalize", 3, "matMenuTriggerFor"], [1, "ml-2"], ["statusMenu", "matMenu"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], ["matRipple", "", 1, "rounded-3xl", "px-2", "py-1", "text-white", "flex", "items-center", "space-x-2", 3, "matMenuTriggerFor", "disabled", "matTooltip"], ["checkinMenu", "matMenu"], ["btn", "", "matRipple", "", 1, "absolute", "bottom-2", "left-2", "w-32", "mx-auto", "my-4", 3, "click"]],
    template: function DeskBookingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "custom-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, DeskBookingsComponent_ng_template_5_Template, 7, 8, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(7, DeskBookingsComponent_ng_template_7_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(9, DeskBookingsComponent_ng_template_9_Template, 4, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(11, DeskBookingsComponent_ng_template_11_Template, 19, 12, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(13, DeskBookingsComponent_ng_template_13_Template, 19, 10, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, DeskBookingsComponent_button_15_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 9)(18, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-menu", null, 10)(22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeskBookingsComponent_Template_button_click_22_listener() {
          return ctx.rejectAll();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Reject All");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);
        let tmp_1_0;
        let tmp_6_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.bookings)("filter", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 9, ctx.filters)) == null ? null : tmp_1_0.search)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c0))("display_column", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](16, _c1))("column_size", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](17, _c2))("template", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction6"](18, _c3, _r5, _r1, _r3, _r7, _r9, _r9))("empty", ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 11, ctx.filters)) == null ? null : tmp_6_0.search) ? "No matching desk bookings" : "There are no desk booking for the currently selected date.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 13, ctx.has_more_pages));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r11);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_4__.CustomTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n                position: relative;\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGVza3MvZGVzay1ib29raW5ncy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGtCQUFrQjtnQkFDbEIsYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztZQUNmIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 97616:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/desks/desk-map-view.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeskMapViewComponent: () => (/* binding */ DeskMapViewComponent)
/* harmony export */ });
/* harmony import */ var _placeos_explore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/explore */ 84203);
/* harmony import */ var _desks_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desks-state.service */ 34381);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/user-search-field.component */ 20576);
/* harmony import */ var _libs_components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/interactive-map.component */ 51674);
/* harmony import */ var _libs_explore_src_lib_explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/explore/src/lib/explore-zoom-control.component */ 92791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);













class DeskMapViewComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  constructor(_state, _desk, _desks_state, _org) {
    super();
    this._state = _state;
    this._desk = _desk;
    this._desks_state = _desks_state;
    this._org = _org;
    /** Observable for the active map */
    this.url = this._state.map_url;
    /** Observable for the active map */
    this.styles = this._state.map_styles;
    /** Observable for the active map */
    this.positions = this._state.map_positions;
    /** Observable for the active map */
    this.actions = this._state.map_actions;
    /** Observable for the active map */
    this.features = this._state.map_features;
    this.setHost = u => this._desks_state.setOptions({
      host: u
    });
  }
  ngOnInit() {
    this._desks_state.setOptions({
      use_api: true
    });
    this.subscription('date', this._desk.filters.subscribe(opts => {
      const level = this._org.levelWithID(opts.zones);
      if (level) this._state.setLevel(level.id);
      this._desks_state.setOptions({
        date: opts.date || Date.now(),
        all_day: true,
        zones: opts.zones
      });
    }));
  }
  static #_ = this.ɵfac = function DeskMapViewComponent_Factory(t) {
    return new (t || DeskMapViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_explore__WEBPACK_IMPORTED_MODULE_0__.ExploreStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_desks_state_service__WEBPACK_IMPORTED_MODULE_1__.DesksStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_explore__WEBPACK_IMPORTED_MODULE_0__.ExploreDesksService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_3__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: DeskMapViewComponent,
    selectors: [["desk-map-view"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_placeos_explore__WEBPACK_IMPORTED_MODULE_0__.ExploreDesksService]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 13,
    vars: 19,
    consts: [["map", "", 1, "h-full", "w-full", "relative"], [3, "src", "zoom", "center", "styles", "features", "actions"], [1, "absolute", "bottom-2", "right-2"], [1, "absolute", "top-0", "left-0", "p-2", "text-black"], ["placeholder", "User for bookings...", 1, "white", 3, "ngModel", "ngModelChange"], ["info", "", 1, "absolute", "bottom-0", "rounded", "p-2", "m-2", "bg-base-100", "shadow", "text-center"]],
    template: function DeskMapViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i-map", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "explore-zoom-controls", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 3)(10, "a-user-search-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function DeskMapViewComponent_Template_a_user_search_field_ngModelChange_10_listener($event) {
          return ctx.setHost($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Click/Tap an available desk to book it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 7, ctx.url))("zoom", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 9, ctx.positions).zoom)("center", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 11, ctx.positions).center)("styles", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 13, ctx.styles))("features", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 15, ctx.features))("actions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 17, ctx.actions));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", null);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_4__.UserSearchFieldComponent, _libs_components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_5__.InteractiveMapComponent, _libs_explore_src_lib_explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_6__.ExploreZoomControlComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                position: relative;\n                height: 100%;\n                width: 100%;\n            }\n\n            [info][_ngcontent-%COMP%] {\n                left: 50%;\n                transform: translateX(-50%);\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGVza3MvZGVzay1tYXAtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixrQkFBa0I7Z0JBQ2xCLFlBQVk7Z0JBQ1osV0FBVztZQUNmOztZQUVBO2dCQUNJLFNBQVM7Z0JBQ1QsMkJBQTJCO1lBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtpbmZvXSB7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 21747:
/*!****************************************************************!*\
  !*** ./apps/concierge/src/app/desks/desks-manage.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesksManageComponent: () => (/* binding */ DesksManageComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 64331);
/* harmony import */ var libs_common_src_lib_qr_code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! libs/common/src/lib/qr-code */ 98010);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 46939);
/* harmony import */ var _desks_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desks-state.service */ 34381);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_form_fields_src_lib_item_list_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/item-list-field.component */ 44220);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-table.component */ 27442);
/* harmony import */ var _libs_components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-tooltip.component */ 33884);
/* harmony import */ var _libs_components_src_lib_printable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/printable.component */ 81886);
/* harmony import */ var _libs_components_src_lib_safe_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/safe.pipe */ 16318);




























function DesksManageComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "item-list-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function DesksManageComponent_ng_template_5_Template_item_list_field_ngModelChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15);
      const row_r12 = restoredCtx.row;
      const key_r13 = restoredCtx.key;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r14.setRowValue(row_r12.id, key_r13, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r11 = ctx.data;
    const row_r12 = ctx.row;
    const key_r13 = ctx.key;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("placeholder", key_r13 === "groups" ? "User Groups" : "Features")("name", key_r13)("ngModel", (ctx_r0.changes[row_r12.id] ? ctx_r0.changes[row_r12.id][key_r13] : null) || data_r11);
  }
}
function DesksManageComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 11)(1, "mat-form-field", 12)(2, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function DesksManageComponent_ng_template_7_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);
      const row_r17 = restoredCtx.row;
      const key_r18 = restoredCtx.key;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r19.setRowValue(row_r17.id, key_r18, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r16 = ctx.data;
    const row_r17 = ctx.row;
    const key_r18 = ctx.key;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("placeholder", key_r18)("name", key_r18)("ngModel", (ctx_r2.changes[row_r17.id] ? ctx_r2.changes[row_r17.id][key_r18] : null) || data_r16);
  }
}
function DesksManageComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14)(1, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function DesksManageComponent_ng_template_9_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r24);
      const row_r22 = restoredCtx.row;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r23.setRowValue(row_r22.id, "bookable", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r21 = ctx.data;
    const row_r22 = ctx.row;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", (tmp_0_0 = ctx_r4.changes[row_r22.id] == null ? null : ctx_r4.changes[row_r22.id].bookable) !== null && tmp_0_0 !== undefined ? tmp_0_0 : data_r21);
  }
}
function DesksManageComponent_ng_template_11_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DesksManageComponent_ng_template_11_ng_template_10_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r28.print());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, " Print QR Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](3, 3, row_r25.qr_link, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", row_r25.qr_code, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r25.name || row_r25.id, " ");
  }
}
function DesksManageComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DesksManageComponent_ng_template_11_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r32);
      const row_r25 = restoredCtx.row;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r31.removeDesk(row_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DesksManageComponent_ng_template_11_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r32);
      const row_r25 = restoredCtx.row;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r33.loadQrCode(row_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "qr_code");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, DesksManageComponent_ng_template_11_ng_template_10_Template, 9, 6, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r25 = ctx.row;
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](11);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("opacity-0", !ctx_r6.changes[row_r25.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("content", _r27);
  }
}
function DesksManageComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "mat-spinner", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r8.loading);
  }
}
function DesksManageComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " Drop CSV file to add desks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function DesksManageComponent_div_14_Template_input_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r34.loadCSVData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function DesksManageComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 33)(1, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 35)(4, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DesksManageComponent_div_15_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r36.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " Clear Changes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DesksManageComponent_div_15_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r38.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Save Changes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r10.changed, " Desk(s) with unsaved changes ");
  }
}
const _c0 = () => ["map_id", "bookable", "name", "groups", "features", "actions"];
const _c1 = () => ["ID", "Bookable", "Name", "Groups", "Features", " "];
const _c2 = () => ["12r", "6r", "12r", "flex", "16r", "10r"];
const _c3 = (a0, a1, a2, a3, a4, a5) => ({
  map_id: a0,
  name: a1,
  bookable: a2,
  groups: a3,
  features: a4,
  actions: a5
});
const QR_CODES = {};
class DesksManageComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  get changed() {
    return Object.keys(this.changes).length || 0;
  }
  constructor(_state, _org, _dialog, _element) {
    super();
    this._state = _state;
    this._org = _org;
    this._dialog = _dialog;
    this._element = _element;
    this.changes = {};
    this.dragging = false;
    this.page_reset = 0;
    this.filters = this._state.filters;
    this.desks = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this._state.new_desks, this._state.desks]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(([d, n]) => d.concat(n)));
  }
  ngOnInit() {
    this.subscription('new_desks', this._state.new_desks.subscribe(desks => {
      this.page_reset = Date.now();
      const el = this._element?.nativeElement?.parentElement;
      if (el) el.scrollTop = 0;
      for (const desk of desks) {
        this.changes[desk.id] = {};
      }
    }));
  }
  setRowValue(id, key, value) {
    if (!this.changes[id]) this.changes[id] = {};
    this.changes[id][key] = value;
  }
  removeDesk(desk) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const new_desks = yield _this._state.new_desks.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).toPromise();
      if (new_desks.find(_ => _.id === desk.id)) {
        delete _this.changes[desk.id];
        return _this._state.removeNewDesk(desk);
      }
      const resp = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.openConfirmModal)({
        title: 'Remove desk',
        content: `Remove desk ${desk.name}?`,
        icon: {
          content: 'delete'
        }
      }, _this._dialog);
      if (resp.reason !== 'done') return;
      resp.close();
      const desks = yield _this.desks.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).toPromise();
      const updated_desks = desks.filter(_ => _.id !== desk.id);
      const filters = yield _this.filters.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).toPromise();
      const level = _this._org.levelWithID(filters.zones);
      _this.loading = 'Removing desk...';
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateMetadata)(level.id, {
        name: 'desks',
        description: 'desks',
        details: updated_desks
      }).toPromise().catch(e => {
        _this.loading = '';
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(`Error saving desk data. Error: ${e.message || e}`);
        throw e;
      });
      delete _this.changes[desk.id];
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Successfully updated desks');
      _this._state.setFilters({});
      _this.loading = '';
    })();
  }
  save() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = 'Saving changes to desks...';
      const desks = yield _this2.desks.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).toPromise();
      const updated_desks = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.unique)(desks.map(_ => new _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.Desk({
        ..._,
        ...(_this2.changes[_.id] || {})
      }).toJSON()), 'id');
      const filters = yield _this2.filters.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).toPromise();
      const level = _this2._org.levelWithID(filters.zones);
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateMetadata)(level.id, {
        name: 'desks',
        description: 'desks',
        details: updated_desks
      }).toPromise().catch(e => {
        _this2.loading = '';
        const msg = e?.status === 403 ? 'You do not have the required permissions to save desk changes.' : e.message || e;
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(`Error saving desk data. Error: ${msg}`);
        throw e;
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Successfully updated desks');
      _this2._state.clearNewDesks();
      _this2.loading = '';
      _this2.changes = {};
    })();
  }
  clear() {
    this._state.clearNewDesks();
    this.changes = {};
  }
  loadQrCode(item) {
    item.qr_link = `${location.origin}/workplace/#/book/code?asset_id=${encodeURIComponent(item.id)}`;
    item.qr_code = (0,libs_common_src_lib_qr_code__WEBPACK_IMPORTED_MODULE_4__.generateQRCode)(`${location.origin}/workplace/#/book/code?asset_id=${encodeURIComponent(item.id)}`);
  }
  print() {
    window.print();
  }
  loadCSVData(event) {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.loading = 'Loading CSV file...';
      _this3.dragging = false;
      const data = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.loadTextFileFromInputEvent)(event).catch(([m, e]) => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(m);
        throw e;
      });
      try {
        const list = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.csvToJson)(data) || [];
        _this3._state.addDesks(list.map(_ => new _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.Desk({
          ..._,
          id: _.id || `desk-${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.randomInt)(999999)}`
        })));
      } catch (e) {
        console.error(e);
      }
      _this3.loading = '';
    })();
  }
  handleDrag(type, event) {
    this.dragging = type === 'enter';
  }
  static #_ = this.ɵfac = function DesksManageComponent_Factory(t) {
    return new (t || DesksManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_desks_state_service__WEBPACK_IMPORTED_MODULE_5__.DesksStateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: DesksManageComponent,
    selectors: [["desks-manage"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
    decls: 16,
    vars: 29,
    consts: [[1, "w-full", "h-4"], [1, "w-full", "relative", "pl-8", "pb-4", 3, "dragenter", "dragend"], [1, "min-w-[76rem]", "block", 3, "dataSource", "filter", "columns", "display_column", "column_size", "template", "empty", "reset_page", "pagination", "page_size"], ["list_edit_template", ""], ["text_edit_template", ""], ["bookable_edit_template", ""], ["action_template", ""], ["class", "absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-base-100 bg-opacity-60", 4, "ngIf"], ["class", "absolute inset-0 bg-neutral flex items-center justify-center", 4, "ngIf"], ["class", "fixed bottom-0 left-64 right-0 p-2 bg-base-100 shadow border-t border-base-200 flex items-center justify-center space-x-4", 4, "ngIf"], ["hide-outline", "", 1, "w-full", 3, "placeholder", "name", "ngModel", "ngModelChange"], ["hide-outline", "", 1, "w-full", "h-12"], ["appearance", "outline", 1, "h-12", "w-full"], ["matInput", "", 3, "placeholder", "name", "ngModel", "ngModelChange"], [1, "flex", "items-center", "justify-center", "pl-4"], [3, "ngModel", "ngModelChange"], [1, "flex", "items-center", "justify-end", "space-x-2"], ["matTooltip", "Desk has unsaved changes", 1, "p-2", "text-2xl", "text-warning"], ["icon", "", 3, "click"], ["icon", "", "matRipple", "", "customTooltip", "", 3, "content", "click"], ["qr_menu", ""], [1, "bg-base-100", "py-2", "shadow", "rounded"], ["printable", "", 1, ""], ["target", "_blank", "ref", "noopener noreferrer", 1, "block", "p-2", "mx-4", "my-2", "rounded-lg", "border", "border-base-200", "bg-base-100", 3, "href"], [1, "w-48", 3, "src"], [1, "w-[calc(100%-2rem)]", "text-center", "mt-2", "font-mono", "text-sm", "bg-base-200", "rounded", "p-2", "mx-4"], ["btn", "", "matRipple", "", 1, "w-[calc(100%-2rem)]", "mx-4", "my-2", 3, "click"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "bg-base-100", "bg-opacity-60"], ["diameter", "32"], [1, "absolute", "inset-0", "bg-neutral", "flex", "items-center", "justify-center"], [1, "bg-base-100", "p-4", "rounded", "shadow"], [1, "border-4", "border-base-200", "border-dashed", "rounded", "flex", "flex-col", "items-center", "justify-center", "w-64", "h-64"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], [1, "fixed", "bottom-0", "left-64", "right-0", "p-2", "bg-base-100", "shadow", "border-t", "border-base-200", "flex", "items-center", "justify-center", "space-x-4"], [1, "flex-1", "text-center", "pl-8"], [1, "flex", "items-center", "justify-center", "space-x-2"], ["clear", "", "btn", "", "matRipple", "", 1, "inverse", 3, "click"], ["save", "", "btn", "", "matRipple", "", 3, "click"]],
    template: function DesksManageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("dragenter", function DesksManageComponent_Template_div_dragenter_1_listener($event) {
          return ctx.handleDrag("enter", $event);
        })("dragend", function DesksManageComponent_Template_div_dragend_1_listener($event) {
          return ctx.handleDrag("end", $event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "custom-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, DesksManageComponent_ng_template_5_Template, 1, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"])(7, DesksManageComponent_ng_template_7_Template, 3, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"])(9, DesksManageComponent_ng_template_9_Template, 2, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"])(11, DesksManageComponent_ng_template_11_Template, 12, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"])(13, DesksManageComponent_div_13_Template, 4, 1, "div", 7)(14, DesksManageComponent_div_14_Template, 5, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, DesksManageComponent_div_15_Template, 8, 1, "div", 9);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](6);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](8);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](10);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](12);
        let tmp_2_0;
        let tmp_7_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("margin-bottom", ctx.changed > 0 ? "4rem" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dataSource", ctx.desks)("filter", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 15, ctx.filters)) == null ? null : tmp_2_0.search)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](19, _c0))("display_column", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](20, _c1))("column_size", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](21, _c2))("template", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction6"](22, _c3, _r3, _r3, _r5, _r1, _r1, _r7))("empty", ((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 17, ctx.filters)) == null ? null : tmp_7_0.search) ? "No matching desks" : "No desks for selected level")("reset_page", ctx.page_reset)("pagination", true)("page_size", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.dragging);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.changed > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckbox, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatRipple, _libs_form_fields_src_lib_item_list_field_component__WEBPACK_IMPORTED_MODULE_6__.ItemListFieldComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_7__.IconComponent, _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_8__.CustomTableComponent, _libs_components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_9__.CustomTooltipComponent, _libs_components_src_lib_printable_component__WEBPACK_IMPORTED_MODULE_10__.PrintableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _libs_components_src_lib_safe_pipe__WEBPACK_IMPORTED_MODULE_11__.SafePipe]
  });
}

/***/ }),

/***/ 17348:
/*!****************************************************************!*\
  !*** ./apps/concierge/src/app/desks/desks-topbar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesksTopbarComponent: () => (/* binding */ DesksTopbarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 17627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 46939);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _desks_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desks-state.service */ 34381);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/bookings */ 40688);
/* harmony import */ var _desk_book_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desk-book-modal.component */ 45426);
/* harmony import */ var _ui_booking_rules_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/booking-rules-modal.component */ 67232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/date-options.component */ 11771);
/* harmony import */ var _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/searchbar.component */ 97338);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);

























function DesksTopbarComponent_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " All Levels ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function DesksTopbarComponent_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", level_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", level_r7.display_name || level_r7.name, " ");
  }
}
function DesksTopbarComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DesksTopbarComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r8.newDeskBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " New Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function DesksTopbarComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DesksTopbarComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r10.newDesk());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function DesksTopbarComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 17)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function DesksTopbarComponent_button_10_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r12.loadCSVData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function DesksTopbarComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DesksTopbarComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r14.downloadTemplate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function DesksTopbarComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DesksTopbarComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r16.manageRestrictions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "lock_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
class DesksTopbarComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  constructor(_desks, _org, _route, _router, _dialog) {
    super();
    this._desks = _desks;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this._dialog = _dialog;
    /** List of levels for the active building */
    this.levels = this._org.active_levels;
    /** List of levels for the active building */
    this.filters = this._desks.filters;
    this.manage = false;
    this.is_map = false;
    /** Set filtered date */
    this.setDate = date => this._desks.setFilters({
      date
    });
    this.setFilters = o => this._desks.setFilters(o);
    /** Update active zones for desks */
    this.updateZones = zones => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          zone_ids: zones.join(',')
        },
        queryParamsHandling: 'merge'
      });
      this._desks.setFilters({
        zones
      });
    };
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.first)(_ => _)).toPromise();
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
      _this.manage = _this._router.url?.includes('manage');
      _this.is_map = _this._router.url?.includes('map');
    })();
  }
  newDesk() {
    const desk = new _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.Desk({
      id: `desk-${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.randomInt)(999999)}`
    });
    desk.staff_name = `[NEW_DESK]`;
    this._desks.addDesks([desk]);
    (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyInfo)('New desk added to local data.', undefined, () => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyInfo)('Make sure to save the new desk before using it.'));
  }
  newDeskBooking() {
    this._dialog.open(_desk_book_modal_component__WEBPACK_IMPORTED_MODULE_5__.DeskBookModalComponent, {});
  }
  manageRestrictions() {
    this._dialog.open(_ui_booking_rules_modal_component__WEBPACK_IMPORTED_MODULE_6__.BookingRulesModalComponent, {
      data: {
        type: 'desk'
      }
    });
  }
  loadCSVData(event) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.loadTextFileFromInputEvent)(event).catch(([m, e]) => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(m);
        throw e;
      });
      try {
        const list = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.csvToJson)(data) || [];
        _this2._desks.addDesks(list.map(_ => new _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.Desk({
          ..._,
          id: _.id || `desk-${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.randomInt)(999999)}`
        })));
      } catch (e) {
        console.error(e);
      }
    })();
  }
  downloadTemplate() {
    const desk = new _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.Desk({
      id: 'desk-123',
      name: 'Test Desk',
      bookable: true,
      groups: ['test-desk-group', 'desk-bookers'],
      features: ['Standing Desk', 'Dual Monitor']
    }).toJSON();
    delete desk.images;
    const data = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.jsonToCsv)([desk]);
    (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.downloadFile)('desk-template.csv', data);
  }
  /**
   * Aprrove a desk booking
   * @param id Booking ID to approve
   */
  approve(id) {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const booking = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_4__.showBooking)(id).toPromise();
      if (booking) {
        _this3._desks.approveDesk(booking);
      }
    })();
  }
  /**
   * Reject a desk booking
   * @param id Booking ID to reject
   */
  reject(id) {
    var _this4 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const booking = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_4__.showBooking)(id).toPromise();
      if (booking) {
        _this4._desks.rejectDesk(booking);
      }
    })();
  }
  static #_ = this.ɵfac = function DesksTopbarComponent_Factory(t) {
    return new (t || DesksTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_desks_state_service__WEBPACK_IMPORTED_MODULE_3__.DesksStateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: DesksTopbarComponent,
    selectors: [["desks-topbar"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
    decls: 17,
    vars: 17,
    consts: [[1, "flex", "items-center", "bg-base-100", "h-20", "px-4", "border-b", "border-base-200", "space-x-2"], ["appearance", "outline"], ["placeholder", "All Levels", 3, "ngModel", "ngModelChange"], ["value", "All", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "class", "mx-2 w-36", "matTooltip", "New Desk Booking", 3, "click", 4, "ngIf"], ["btn", "", "icon", "", "matRipple", "", "class", "bg-primary mx-2 text-white rounded", "matTooltip", "New Desk", 3, "click", 4, "ngIf"], ["btn", "", "icon", "", "matRipple", "", "class", "bg-primary relative text-white rounded", "matTooltip", "Upload Desks CSV", 4, "ngIf"], ["btn", "", "icon", "", "matRipple", "", "class", "bg-primary mx-2 text-white rounded", "matTooltip", "Download Template Desk CSV", 3, "click", 4, "ngIf"], ["btn", "", "icon", "", "matRipple", "", "class", "bg-primary mx-2 text-white rounded", "matTooltip", "Desk Restrictions", 3, "click", 4, "ngIf"], [1, "flex-1", "w-2"], [1, "mr-2", 3, "model", "modelChange"], [3, "dateChange"], ["value", "All"], [3, "value"], ["btn", "", "matRipple", "", "matTooltip", "New Desk Booking", 1, "mx-2", "w-36", 3, "click"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "New Desk", 1, "bg-primary", "mx-2", "text-white", "rounded", 3, "click"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Upload Desks CSV", 1, "bg-primary", "relative", "text-white", "rounded"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Download Template Desk CSV", 1, "bg-primary", "mx-2", "text-white", "rounded", 3, "click"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Desk Restrictions", 1, "bg-primary", "mx-2", "text-white", "rounded", 3, "click"]],
    template: function DesksTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function DesksTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
          return ctx.updateZones([$event]);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, DesksTopbarComponent_mat_option_5_Template, 2, 0, "mat-option", 3)(6, DesksTopbarComponent_mat_option_6_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, DesksTopbarComponent_button_8_Template, 2, 0, "button", 5)(9, DesksTopbarComponent_button_9_Template, 3, 0, "button", 6)(10, DesksTopbarComponent_button_10_Template, 4, 0, "button", 7)(11, DesksTopbarComponent_button_11_Template, 3, 0, "button", 8)(12, DesksTopbarComponent_button_12_Template, 3, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "searchbar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("modelChange", function DesksTopbarComponent_Template_searchbar_modelChange_14_listener($event) {
          return ctx.setFilters({
            search: $event
          });
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "date-options", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("dateChange", function DesksTopbarComponent_Template_date_options_dateChange_16_listener($event) {
          return ctx.setDate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_8_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 9, ctx.filters).zones ? _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 11, ctx.filters).zones[0] : "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.is_map);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 13, ctx.levels));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.manage);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.manage);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.manage);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.manage);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.manage);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("model", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 15, ctx.filters)) == null ? null : tmp_8_0.search);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _ui_date_options_component__WEBPACK_IMPORTED_MODULE_7__.DateOptionsComponent, _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_8__.SearchbarComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltip, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_9__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe],
    styles: ["mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGVza3MvZGVza3MtdG9wYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksY0FBYztnQkFDZCxVQUFVO1lBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuMjVlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogOGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 23152:
/*!*********************************************************!*\
  !*** ./apps/concierge/src/app/desks/desks.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesksComponent: () => (/* binding */ DesksComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _desks_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desks-state.service */ 34381);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/sidebar.component */ 42349);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ 78173);
/* harmony import */ var _desks_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desks-topbar.component */ 17348);











const _c0 = ["app-desks", ""];
function DesksComponent_mat_progress_bar_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 7);
  }
}
const _c1 = () => ["/book", "desks", "events"];
const _c2 = () => ["/book", "desks", "map"];
const _c3 = () => ["/book", "desks", "manage"];
class DesksComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
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
  static #_ = this.ɵfac = function DesksComponent_Factory(t) {
    return new (t || DesksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_desks_state_service__WEBPACK_IMPORTED_MODULE_1__.DesksStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DesksComponent,
    selectors: [["", "app-desks", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    attrs: _c0,
    decls: 15,
    vars: 12,
    consts: [[1, "flex-1", "relative", "w-1/2", "flex", "flex-col", "bg-base-100", "overflow-hidden"], [1, "w-full"], [1, "dark"], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", "queryParamsHandling", "merge", 3, "routerLink", "active"], [1, "flex-1", "h-1/2", "w-full", "relative", "overflow-auto"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate", 1, "w-full"]],
    template: function DesksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "desks-topbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "nav", 3)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Bookings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Map View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Manage Desks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, DesksComponent_mat_progress_bar_13_Template, 1, 0, "mat-progress-bar", 6);
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabNav, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabLink, _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__.MatProgressBar, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _desks_topbar_component__WEBPACK_IMPORTED_MODULE_3__.DesksTopbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGVza3MvZGVza3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLFlBQVk7Z0JBQ1osV0FBVztZQUNmIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3675:
/*!******************************************************!*\
  !*** ./apps/concierge/src/app/desks/desks.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesksModule: () => (/* binding */ DesksModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ 92106);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _placeos_explore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/explore */ 84203);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/ui.module */ 97428);
/* harmony import */ var _desks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desks.component */ 23152);
/* harmony import */ var _desk_bookings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desk-bookings.component */ 29634);
/* harmony import */ var _desks_topbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desks-topbar.component */ 17348);
/* harmony import */ var _desk_map_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desk-map-view.component */ 97616);
/* harmony import */ var _desks_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desks-manage.component */ 21747);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var apps_workplace_src_app_book_new_desk_flow_new_desk_form_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apps/workplace/src/app/book/new-desk-flow/new-desk-form-details.component */ 36437);
/* harmony import */ var _desk_book_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./desk-book-modal.component */ 45426);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @placeos/bookings */ 40688);
/* harmony import */ var _placeos_form_fields__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @placeos/form-fields */ 39304);
/* harmony import */ var _new_desks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-desks.component */ 2338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);






















const ROUTES = [{
  path: 'new',
  component: _new_desks_component__WEBPACK_IMPORTED_MODULE_11__.NewDesksComponent,
  children: [{
    path: 'events',
    component: _desk_bookings_component__WEBPACK_IMPORTED_MODULE_3__.DeskBookingsComponent
  }, {
    path: 'map',
    component: _desk_map_view_component__WEBPACK_IMPORTED_MODULE_5__.DeskMapViewComponent
  }, {
    path: 'manage',
    component: _desks_manage_component__WEBPACK_IMPORTED_MODULE_6__.DesksManageComponent
  }, {
    path: '**',
    redirectTo: 'events'
  }]
}, {
  path: '',
  component: _desks_component__WEBPACK_IMPORTED_MODULE_2__.DesksComponent,
  children: [{
    path: 'events',
    component: _desk_bookings_component__WEBPACK_IMPORTED_MODULE_3__.DeskBookingsComponent
  }, {
    path: 'map',
    component: _desk_map_view_component__WEBPACK_IMPORTED_MODULE_5__.DeskMapViewComponent
  }, {
    path: 'manage',
    component: _desks_manage_component__WEBPACK_IMPORTED_MODULE_6__.DesksManageComponent
  }, {
    path: '**',
    redirectTo: 'events'
  }]
}];
class DesksModule {
  static #_ = this.ɵfac = function DesksModule_Factory(t) {
    return new (t || DesksModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: DesksModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTabsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule, _placeos_explore__WEBPACK_IMPORTED_MODULE_0__.SharedExploreModule, _placeos_bookings__WEBPACK_IMPORTED_MODULE_9__.SharedBookingsModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_10__.FormFieldsModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](DesksModule, {
    declarations: [_new_desks_component__WEBPACK_IMPORTED_MODULE_11__.NewDesksComponent, _desks_component__WEBPACK_IMPORTED_MODULE_2__.DesksComponent, _desk_bookings_component__WEBPACK_IMPORTED_MODULE_3__.DeskBookingsComponent, _desks_topbar_component__WEBPACK_IMPORTED_MODULE_4__.DesksTopbarComponent, _desk_map_view_component__WEBPACK_IMPORTED_MODULE_5__.DeskMapViewComponent, _desks_manage_component__WEBPACK_IMPORTED_MODULE_6__.DesksManageComponent, apps_workplace_src_app_book_new_desk_flow_new_desk_form_details_component__WEBPACK_IMPORTED_MODULE_7__.NewDeskFormDetailsComponent, _desk_book_modal_component__WEBPACK_IMPORTED_MODULE_8__.DeskBookModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTabsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule, _placeos_explore__WEBPACK_IMPORTED_MODULE_0__.SharedExploreModule, _placeos_bookings__WEBPACK_IMPORTED_MODULE_9__.SharedBookingsModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_10__.FormFieldsModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule]
  });
})();

/***/ }),

/***/ 2338:
/*!*************************************************************!*\
  !*** ./apps/concierge/src/app/desks/new-desks.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewDesksComponent: () => (/* binding */ NewDesksComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _desks_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desks-state.service */ 34381);
/* harmony import */ var _desk_book_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desk-book-modal.component */ 45426);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 46939);
/* harmony import */ var _ui_booking_rules_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/booking-rules-modal.component */ 67232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/date-options.component */ 11771);
/* harmony import */ var _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/searchbar.component */ 97338);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/app-topbar.component */ 33005);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 19842);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ 78173);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);


























const _c0 = ["app-new-desks", ""];
function NewDesksComponent_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", level_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", level_r4.display_name || level_r4.name, " ");
  }
}
function NewDesksComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "date-options", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("dateChange", function NewDesksComponent_ng_container_23_Template_date_options_dateChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r5.setDate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function NewDesksComponent_ng_container_23_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r7.refresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, ctx_r1.loading));
  }
}
function NewDesksComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function NewDesksComponent_ng_container_24_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r8.newDesk());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 20)(5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function NewDesksComponent_ng_container_24_Template_input_change_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r10.loadCSVData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function NewDesksComponent_ng_container_24_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r11.downloadTemplate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function NewDesksComponent_ng_container_24_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r12.manageRestrictions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "lock_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
}
function NewDesksComponent_mat_progress_bar_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-progress-bar", 24);
  }
}
class NewDesksComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
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
    /** Update active zones for desks */
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
    this.page_title = 'Desk Bookings';
  }
  ngOnInit() {
    var _this = this;
    this._state.refresh();
    this.subscription('router.events', this._router.events.subscribe(e => {
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_12__.NavigationEnd) {
        const url_parts = this._router.url?.split('/') || [''];
        this.path = url_parts[parts.length - 1].split('?')[0];
        if (this.path.includes('manage')) {
          this.page_title = 'Desk Management';
        } else {
          this.page_title = 'Desk Bookings';
        }
      }
    }));
    this.subscription('levels', this._org.active_levels.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (levels) {
        const filters = yield _this.filters.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)).toPromise();
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
  newDeskBooking() {
    const ref = this._dialog.open(_desk_book_modal_component__WEBPACK_IMPORTED_MODULE_3__.DeskBookModalComponent, {});
    ref.afterClosed().subscribe(_ => {
      this._state.refresh();
    });
  }
  manageRestrictions() {
    this._dialog.open(_ui_booking_rules_modal_component__WEBPACK_IMPORTED_MODULE_5__.BookingRulesModalComponent, {
      data: {
        type: 'desk'
      }
    });
  }
  newDesk() {
    this._state.addDesks([new _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.Desk({
      id: `desk-${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.randomInt)(999999)}`
    })]);
    (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyInfo)('New desk added to local data.', undefined, () => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyInfo)('Make sure to save the new desk before using it.'));
  }
  downloadTemplate() {
    const desk = new _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.Desk({
      id: 'desk-123',
      name: 'Test Desk',
      bookable: true,
      groups: ['test-desk-group', 'desk-bookers'],
      features: ['Standing Desk', 'Dual Monitor']
    }).toJSON();
    delete desk.images;
    const data = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.jsonToCsv)([desk]);
    (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.downloadFile)('desk-template.csv', data);
  }
  loadCSVData(event) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.loadTextFileFromInputEvent)(event).catch(([m, e]) => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(m);
        throw e;
      });
      try {
        const list = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.csvToJson)(data) || [];
        _this2._state.addDesks(list.map(_ => new _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.Desk({
          ..._,
          id: _.id || `desk-${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.randomInt)(999999)}`
        })));
      } catch (e) {
        console.error(e);
      }
    })();
  }
  static #_ = this.ɵfac = function NewDesksComponent_Factory(t) {
    return new (t || NewDesksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_desks_state_service__WEBPACK_IMPORTED_MODULE_2__.DesksStateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: NewDesksComponent,
    selectors: [["", "app-new-desks", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
    attrs: _c0,
    decls: 29,
    vars: 15,
    consts: [[1, "print:hidden"], [1, "flex", "flex-1", "h-px", "print:hidden"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "flex", "items-center", "w-full", "py-4", "px-8", "space-x-2"], [1, "text-2xl", "font-medium"], [1, "flex-1", "w-px"], [1, "mr-2", 3, "model", "modelChange"], ["btn", "", "matRipple", "", 1, "space-x-2", 3, "click"], [1, "w-full", "flex", "items-center", "px-8", "space-x-2"], ["appearance", "outline", 1, "h-[3.5rem]"], ["placeholder", "All Levels", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "border-l", "h-full", "!ml-8", "!mr-4"], [4, "ngIf"], [1, "flex-1", "h-1/2", "w-full", "relative", "overflow-auto"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], [3, "value"], [3, "dateChange"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Refresh List", 1, "ml-2", "rounded", "border", "border-base-200", 3, "disabled", "click"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "New Desk", 1, "bg-secondary", "text-white", "rounded", 3, "click"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Upload Desks CSV", 1, "bg-secondary", "relative", "text-white", "rounded"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Download Template Desk CSV", 1, "bg-secondary", "text-white", "rounded", 3, "click"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Desk Restrictions", 1, "bg-secondary", "text-white", "rounded", 3, "click"], ["mode", "indeterminate", 1, "w-full"]],
    template: function NewDesksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-topbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "main", 2)(4, "div", 3)(5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "searchbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("modelChange", function NewDesksComponent_Template_searchbar_modelChange_8_listener($event) {
          return ctx.setFilters({
            search: $event
          });
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function NewDesksComponent_Template_button_click_10_listener() {
          return ctx.newDeskBooking();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "New Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 8)(16, "mat-form-field", 9)(17, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function NewDesksComponent_Template_mat_select_ngModelChange_17_listener($event) {
          return ctx.updateZones([$event]);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, NewDesksComponent_mat_option_19_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "div", 12)(22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, NewDesksComponent_ng_container_23_Template, 6, 3, "ng-container", 13)(24, NewDesksComponent_ng_container_24_Template, 14, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, NewDesksComponent_mat_progress_bar_27_Template, 1, 0, "mat-progress-bar", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.page_title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("model", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 7, ctx.filters)) == null ? null : tmp_1_0.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](18, 9, ctx.filters)) == null ? null : tmp_2_0.zones[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](20, 11, ctx.levels));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.path === "events");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.path === "manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](28, 13, ctx.loading) && ctx.path === "events");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _ui_date_options_component__WEBPACK_IMPORTED_MODULE_6__.DateOptionsComponent, _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_7__.SearchbarComponent, _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_8__.ApplicationTopbarComponent, _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_9__.ApplicationSidebarComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltip, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__.MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_10__.IconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGVza3MvbmV3LWRlc2tzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCwyQkFBMkI7WUFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWIxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 36437:
/*!**************************************************************************************!*\
  !*** ./apps/workplace/src/app/book/new-desk-flow/new-desk-form-details.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewDeskFormDetailsComponent: () => (/* binding */ NewDeskFormDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/bookings */ 40688);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 4512);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 65822);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 25864);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../libs/form-fields/src/lib/date-field.component */ 46362);
/* harmony import */ var _libs_form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../libs/form-fields/src/lib/duration-field.component */ 28442);
/* harmony import */ var _libs_form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../libs/form-fields/src/lib/time-field.component */ 59590);
/* harmony import */ var _libs_form_fields_src_lib_user_list_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../libs/form-fields/src/lib/user-list-field.component */ 24741);
/* harmony import */ var _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../libs/form-fields/src/lib/user-search-field.component */ 20576);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_assets_src_lib_asset_list_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../libs/assets/src/lib/asset-list-field.component */ 33243);
/* harmony import */ var _libs_bookings_src_lib_desk_list_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../libs/bookings/src/lib/desk-list-field.component */ 17351);
























function NewDeskFormDetailsComponent_div_0_section_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 23)(1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function NewDeskFormDetailsComponent_div_0_section_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r9.setOptions({
        group: false,
        members: []
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "app-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](6, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function NewDeskFormDetailsComponent_div_0_section_1_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r11.setOptions({
        group: true
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "app-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "group_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](15, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("text-secondary", !((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 12, ctx_r1.options)) == null ? null : tmp_0_0.group));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("bg-base-200", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](8, 14, ctx_r1.options)) == null ? null : tmp_1_0.group)("bg-secondary", !((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 16, ctx_r1.options)) == null ? null : tmp_2_0.group));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("text-secondary", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 18, ctx_r1.options)) == null ? null : tmp_3_0.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("bg-base-200", !((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](17, 20, ctx_r1.options)) == null ? null : tmp_4_0.group))("bg-secondary", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](18, 22, ctx_r1.options)) == null ? null : tmp_5_0.group);
  }
}
function NewDeskFormDetailsComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 30)(1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Host");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "a-user-search-field", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function NewDeskFormDetailsComponent_div_0_mat_checkbox_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-checkbox", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](1, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
const _c0 = () => ({
  standalone: true
});
function NewDeskFormDetailsComponent_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18nStart"](3, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "a-time-field", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function NewDeskFormDetailsComponent_div_0_div_27_Template_a_time_field_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r12.form.patchValue({
        date: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 35)(7, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18nStart"](8, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "a-duration-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r4.form.value.date)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](8, _c0))("use_24hr", ctx_r4.use_24hr);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("time", (tmp_3_0 = ctx_r4.form.get("date")) == null ? null : tmp_3_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r4.use_24hr);
  }
}
function NewDeskFormDetailsComponent_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "mat-checkbox", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function NewDeskFormDetailsComponent_div_0_div_28_Template_mat_checkbox_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r14.form.patchValue({
        secondary_resource: $event ? "locker" : ""
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](3, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", !!ctx_r5.form.value.secondary_resource)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](2, _c0));
  }
}
const _c1 = () => [];
function NewDeskFormDetailsComponent_div_0_section_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 3)(1, "h3", 44)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](5, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 47)(8, "a-user-list-field", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function NewDeskFormDetailsComponent_div_0_section_29_Template_a_user_list_field_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r16.setOptions({
        members: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 2, ctx_r6.options)) == null ? null : tmp_0_0.members) || _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](4, _c1))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](5, _c0));
  }
}
function NewDeskFormDetailsComponent_div_0_section_31_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Desks nearby to the selected desk will booked for group members ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function NewDeskFormDetailsComponent_div_0_section_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 3)(1, "h3", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](6, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "desk-list-field", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, NewDeskFormDetailsComponent_div_0_section_31_p_8_Template, 2, 0, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 2, ctx_r7.options)) == null ? null : tmp_0_0.group) ? 3 : 2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 4, ctx_r7.options)) == null ? null : tmp_1_0.group);
  }
}
const _c2 = (a0, a1, a2) => ({
  date: a0,
  duration: a1,
  all_day: a2
});
function NewDeskFormDetailsComponent_div_0_section_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 3)(1, "h3", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](6, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "asset-list-field", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 2, ctx_r8.options)) == null ? null : tmp_0_0.group) ? 4 : 3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](4, _c2, ctx_r8.form.getRawValue().date, ctx_r8.form.value.duration, ctx_r8.form.value.all_day));
  }
}
function NewDeskFormDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, NewDeskFormDetailsComponent_div_0_section_1_Template, 19, 24, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "section", 3)(3, "h3", 4)(4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, " 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](7, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, NewDeskFormDetailsComponent_div_0_div_8_Template, 6, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Add Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](19, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 15)(21, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18nStart"](22, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "a-date-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](25, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, NewDeskFormDetailsComponent_div_0_mat_checkbox_26_Template, 2, 0, "mat-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, NewDeskFormDetailsComponent_div_0_div_27_Template, 11, 9, "div", 21)(28, NewDeskFormDetailsComponent_div_0_div_28_Template, 4, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](29, NewDeskFormDetailsComponent_div_0_section_29_Template, 10, 6, "section", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](30, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, NewDeskFormDetailsComponent_div_0_section_31_Template, 10, 6, "section", 22)(32, NewDeskFormDetailsComponent_div_0_section_32_Template, 8, 8, "section", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    let tmp_3_0;
    let tmp_8_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.allow_groups);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("!border-none", ctx_r0.allow_groups);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.can_book_for_others && !((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 12, ctx_r0.options)) == null ? null : tmp_3_0.group));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("to", ctx_r0.end_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.allow_all_day);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.form.value.all_day);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.can_book_lockers);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](30, 14, ctx_r0.options)) == null ? null : tmp_8_0.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.form.contains("resources"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.has_assets);
  }
}
class NewDeskFormDetailsComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get can_book_for_others() {
    return this._settings.get('app.desks.can_book_for_others');
  }
  get can_book_lockers() {
    return this._settings.get('app.desks.can_book_lockers');
  }
  get can_recurr() {
    return this._settings.get('app.desks.recurrence_allowed');
  }
  get allow_groups() {
    return this._settings.get('app.desks.allow_groups');
  }
  get has_assets() {
    return !!this._settings.get('app.desks.has_assets');
  }
  get needs_reason() {
    return this._settings.get('app.desks.needs_reason') === true;
  }
  get allow_time_changes() {
    return !!this._settings.get('app.desks.allow_time_changes');
  }
  get allow_all_day() {
    return this.allow_time_changes && !!this._settings.get('app.desks.allow_all_day');
  }
  get end_date() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(Date.now(), this._settings.get('app.desks.available_period') || 90)).valueOf();
  }
  get use_24hr() {
    return this._settings.get('app.use_24_hour_time');
  }
  constructor(_state, _org, _settings) {
    super();
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this.find = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    /** List of available buildings to select */
    this.buildings = this._org.building_list;
    /** List of available levels for the selected building */
    this.levels = this._org.active_levels;
    /** List of set options for desk booking */
    this.options = this._state.options;
    /** List of set options for desk booking */
    this.features = this._state.features;
    this.force_time = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(Date.now(), {
      hours: 6,
      minutes: 0
    }).valueOf();
    this.from_id = false;
    this.recurrence_options = ['daily', 'weekly', 'monthly'];
    this.setOptions = o => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
  }
  ngOnChanges(changes) {
    if (changes.form && this.form) {
      if (this.selected_desk?.id) {
        this.form.patchValue({
          resources: [this.selected_desk]
        });
      }
    }
  }
  static #_ = this.ɵfac = function NewDeskFormDetailsComponent_Factory(t) {
    return new (t || NewDeskFormDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_placeos_bookings__WEBPACK_IMPORTED_MODULE_0__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: NewDeskFormDetailsComponent,
    selectors: [["new-desk-form-details"]],
    inputs: {
      form: "form"
    },
    outputs: {
      find: "find"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 1,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5028777105388019087$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS__0 = goog.getMsg("Details");
        i18n_0 = MSG_EXTERNAL_5028777105388019087$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS__0;
      } else {
        i18n_0 = $localize`:␟4f8b2bb476981727ab34ed40fde1218361f92c45␟5028777105388019087:Details`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4954033536980360307$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS__1 = goog.getMsg("Booking title is required.");
        i18n_1 = MSG_EXTERNAL_4954033536980360307$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS__1;
      } else {
        i18n_1 = $localize`:␟3501a14ee1e89ea7009e8c9d1d6796a9ac9c3718␟4954033536980360307:Booking title is required.`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3158758063619980932$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS__2 = goog.getMsg("Date{$startTagSpan}*{$closeTagSpan}", {
          "closeTagSpan": "\uFFFD/#23\uFFFD",
          "startTagSpan": "\uFFFD#23\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_2 = MSG_EXTERNAL_3158758063619980932$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS__2;
      } else {
        i18n_2 = $localize`:␟04cfb5fd033651743bc4b9408bd52ba4ee894070␟3158758063619980932:Date${"\uFFFD#23\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#23\uFFFD"}:CLOSE_TAG_SPAN:`;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6682406734296000735$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS__3 = goog.getMsg(" Date and time must be in the future ");
        i18n_3 = MSG_EXTERNAL_6682406734296000735$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS__3;
      } else {
        i18n_3 = $localize`:␟407bcc42df8640bf3b85c58145c8d24572bb47b6␟6682406734296000735: Date and time must be in the future `;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3413004253239957216$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS___0 = goog.getMsg("Single");
        i18n_4 = MSG_EXTERNAL_3413004253239957216$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS___0;
      } else {
        i18n_4 = $localize`:␟ee6b1f617dd5320b23fbed018c38ac092db5e40a␟3413004253239957216:Single`;
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8623978917681527907$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS___1 = goog.getMsg("Group");
        i18n_5 = MSG_EXTERNAL_8623978917681527907$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS___1;
      } else {
        i18n_5 = $localize`:␟4c90059afafb7e160384d9f512797c95bb95c6dc␟8623978917681527907:Group`;
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8093595438228616861$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS___2 = goog.getMsg(" All Day ");
        i18n_6 = MSG_EXTERNAL_8093595438228616861$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS___2;
      } else {
        i18n_6 = $localize`:␟8a5018aa2d4dd0e8a98f4499d4b7b4a9255441a5␟8093595438228616861: All Day `;
      }
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4735431816432396893$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS___3 = goog.getMsg(" Start Time{$startTagSpan}*{$closeTagSpan}", {
          "closeTagSpan": "\uFFFD/#4\uFFFD",
          "startTagSpan": "\uFFFD#4\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_7 = MSG_EXTERNAL_4735431816432396893$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS___3;
      } else {
        i18n_7 = $localize`:␟02d39ddac5bbf95c424df03d5f0d22cc257556bd␟4735431816432396893: Start Time${"\uFFFD#4\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_SPAN:`;
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7899923133926994657$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS___4 = goog.getMsg(" End Time{$startTagSpan}*{$closeTagSpan}", {
          "closeTagSpan": "\uFFFD/#9\uFFFD",
          "startTagSpan": "\uFFFD#9\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_8 = MSG_EXTERNAL_7899923133926994657$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS___4;
      } else {
        i18n_8 = $localize`:␟96ca8377bef76dbcd3eb3b4d39e5414763c7033b␟7899923133926994657: End Time${"\uFFFD#9\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#9\uFFFD"}:CLOSE_TAG_SPAN:`;
      }
      let i18n_9;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8675972661523566351$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS___5 = goog.getMsg(" Require locker ");
        i18n_9 = MSG_EXTERNAL_8675972661523566351$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS___5;
      } else {
        i18n_9 = $localize`:␟f1701d7a0d6bfb739979f9e406793d97acd138e3␟8675972661523566351: Require locker `;
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9086691296106045671$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS___6 = goog.getMsg("Group Members");
        i18n_10 = MSG_EXTERNAL_9086691296106045671$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS___6;
      } else {
        i18n_10 = $localize`:␟60ae849c087ccc322073478a12b2504433fbdd61␟9086691296106045671:Group Members`;
      }
      let i18n_11;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6078724721705612215$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS___7 = goog.getMsg("Desk");
        i18n_11 = MSG_EXTERNAL_6078724721705612215$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS___7;
      } else {
        i18n_11 = $localize`:␟654c7e59b2003acf985bee710bad11e8cdd461f8␟6078724721705612215:Desk`;
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8637135334686190699$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS___8 = goog.getMsg("Request Asset");
        i18n_12 = MSG_EXTERNAL_8637135334686190699$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS___8;
      } else {
        i18n_12 = $localize`:␟1bdfc0dfd2ac89f5d0d2af3a66e5e959d094b39c␟8637135334686190699:Request Asset`;
      }
      return [["class", "p-0 sm:py-4 sm:px-16 divide-y divide-base-200 space-y-2", 3, "formGroup", 4, "ngIf"], [1, "p-0", "sm:py-4", "sm:px-16", "divide-y", "divide-base-200", "space-y-2", 3, "formGroup"], ["class", "flex items-center", 4, "ngIf"], [1, "p-2"], [1, "space-x-2", "flex", "items-center", "mb-4"], [1, "bg-base-200", "rounded-full", "h-6", "w-6", "flex", "items-center", "justify-center"], [1, "text-xl"], i18n_0, ["class", "w-full", 4, "ngIf"], [1, "flex", "items-center", "flex-wrap", "sm:space-x-2"], [1, "flex-1", "min-w-[256px]"], ["for", "title"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "title", "formControlName", "title", "placeholder", "e.g. Focus Time"], i18n_1, [1, "flex-1", "min-w-[256px]", "relative"], ["for", "date"], i18n_2, ["name", "date", "formControlName", "date", 3, "to"], i18n_3, ["formControlName", "all_day", "class", "absolute -top-2 right-0", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["class", "p-2", 4, "ngIf"], [1, "flex", "items-center"], ["matRipple", "", 1, "relative", "h-16", "flex", "items-center", "justify-center", "flex-1", "space-x-2", 3, "click"], [1, "text-2xl"], [1, ""], i18n_4, [1, "absolute", "h-1", "inset-x-0", "bottom-0", "!m-0"], i18n_5, [1, "w-full"], ["formControlName", "user"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-0"], i18n_6, [1, "flex", "items-center", "space-x-2"], [1, "flex-1", "w-1/3"], ["for", "start-time"], i18n_7, ["name", "start-time", 3, "ngModel", "ngModelOptions", "use_24hr", "ngModelChange"], ["for", "end-time"], i18n_8, ["name", "end-time", "formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr"], [3, "ngModel", "ngModelOptions", "ngModelChange"], i18n_9, [1, "space-x-2", "flex", "items-center"], i18n_10, [1, "flex-1", "w-px"], [1, "overflow-hidden"], [1, "mt-4", 3, "ngModel", "ngModelOptions", "ngModelChange"], i18n_11, ["formControlName", "resources"], ["class", "text-center rounded px-2 py-1 bg-warning shadow text-xs", 4, "ngIf"], [1, "text-center", "rounded", "px-2", "py-1", "bg-warning", "shadow", "text-xs"], i18n_12, ["formControlName", "assets", 3, "options"]];
    },
    template: function NewDeskFormDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, NewDeskFormDetailsComponent_div_0_Template, 33, 16, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.form);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRipple, _libs_form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_3__.DateFieldComponent, _libs_form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_4__.DurationFieldComponent, _libs_form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_5__.TimeFieldComponent, _libs_form_fields_src_lib_user_list_field_component__WEBPACK_IMPORTED_MODULE_6__.UserListFieldComponent, _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_7__.UserSearchFieldComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_8__.IconComponent, _libs_assets_src_lib_asset_list_field_component__WEBPACK_IMPORTED_MODULE_9__.AssetListFieldComponent, _libs_bookings_src_lib_desk_list_field_component__WEBPACK_IMPORTED_MODULE_10__.DeskListFieldComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe],
    encapsulation: 2
  });
}

/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_desks_desks_module_ts.js.map