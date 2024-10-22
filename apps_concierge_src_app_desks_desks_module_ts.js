"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_desks_desks_module_ts"],{

/***/ 64216:
/*!*******************************************************************!*\
  !*** ./apps/concierge/src/app/desks/desk-book-modal.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeskBookModalComponent: () => (/* binding */ DeskBookModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var apps_workplace_src_app_book_new_desk_flow_new_desk_form_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apps/workplace/src/app/book/new-desk-flow/new-desk-form-details.component */ 35817);














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
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "footer", 7)(1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeskBookModalComponent_footer_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.save());
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
  static #_ = this.ɵfac = function DeskBookModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DeskBookModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DeskBookModalComponent,
    selectors: [["desk-book-modal"]],
    outputs: {
      event: "event"
    },
    decls: 13,
    vars: 7,
    consts: [["load_state", ""], [1, "flex-1", "w-0"], ["icon", "", "mat-dialog-close", ""], ["class", "overflow-auto p-4 max-h-[65vh]", 4, "ngIf", "ngIfElse"], ["class", "flex justify-center items-center p-2 border-t border-base-200", 4, "ngIf"], [1, "overflow-auto", "p-4", "max-h-[65vh]"], [3, "form"], [1, "flex", "justify-center", "items-center", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["loading", "", 1, "h-64", "flex", "flex-col", "items-center", "justify-center"], [1, "mb-4", 3, "diameter"]],
    template: function DeskBookModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header")(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "New Desk Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 2)(5, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, DeskBookModalComponent_main_7_Template, 2, 1, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, DeskBookModalComponent_footer_9_Template, 3, 0, "footer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, DeskBookModalComponent_ng_template_11_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 3, ctx.loading))("ngIfElse", load_state_r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 5, ctx.loading));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, apps_workplace_src_app_book_new_desk_flow_new_desk_form_details_component__WEBPACK_IMPORTED_MODULE_4__.NewDeskFormDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe]
  });
}

/***/ }),

/***/ 38801:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/desks/desk-bookings.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeskBookingsComponent: () => (/* binding */ DeskBookingsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _desks_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desks-state.service */ 20631);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/simple-table.component */ 88328);












const _c0 = a0 => ({
  key: "date",
  name: "Date",
  content: a0,
  size: "4rem",
  sortable: false
});
const _c1 = a0 => ({
  key: "period",
  name: "Period",
  content: a0,
  size: "9rem"
});
const _c2 = a0 => ({
  key: "user_name",
  name: "Person",
  content: a0
});
const _c3 = a0 => ({
  key: "group",
  name: "Group",
  content: a0
});
const _c4 = () => ({
  key: "asset_name",
  name: "Desk"
});
const _c5 = () => ({
  key: "approver",
  name: "Approver"
});
const _c6 = a0 => ({
  key: "status",
  name: "Status",
  content: a0,
  size: "8.5rem",
  sortable: false
});
const _c7 = a0 => ({
  key: "checked_in",
  name: "Checked In",
  content: a0,
  size: "7rem",
  sortable: false
});
const _c8 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
function DeskBookingsComponent_ng_template_4_Template(rf, ctx) {
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
    const date_r2 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 2, date_r2, "MMM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 5, date_r2, "dd"));
  }
}
function DeskBookingsComponent_ng_template_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No Group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DeskBookingsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DeskBookingsComponent_ng_template_6_span_2_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r3.group || (row_r3.extension_data == null ? null : row_r3.extension_data.group), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(row_r3.group || (row_r3.extension_data == null ? null : row_r3.extension_data.group)));
  }
}
function DeskBookingsComponent_ng_template_8_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).row;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 2, row_r4.date, ctx_r4.time_format), " \u2013 ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 5, row_r4.date_end, ctx_r4.time_format), " ");
  }
}
function DeskBookingsComponent_ng_template_8_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "All Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function DeskBookingsComponent_ng_template_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DeskBookingsComponent_ng_template_8_ng_container_1_ng_container_2_Template, 4, 8, "ng-container", 20)(3, DeskBookingsComponent_ng_template_8_ng_container_1_ng_container_3_Template, 2, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !row_r4.all_day);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r4.all_day);
  }
}
function DeskBookingsComponent_ng_template_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r4.status === "ended" ? "Manually Ended" : "Expired", " ");
  }
}
function DeskBookingsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DeskBookingsComponent_ng_template_8_ng_container_1_Template, 4, 2, "ng-container", 20)(2, DeskBookingsComponent_ng_template_8_ng_container_2_Template, 3, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r4.status !== "declined" && !row_r4.deleted && row_r4.status !== "ended");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r4.status === "declined" || row_r4.deleted || row_r4.status === "ended");
  }
}
function DeskBookingsComponent_ng_template_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r6.user_email, " ");
  }
}
function DeskBookingsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DeskBookingsComponent_ng_template_10_div_3_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r6.user_name || row_r6.user_email || row_r6.booked_by_name || row_r6.booked_by_email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r6.user_name);
  }
}
function DeskBookingsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26)(1, "button", 27)(2, "div", 28)(3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "app-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-menu", null, 6)(9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeskBookingsComponent_ng_template_12_Template_button_click_9_listener() {
      const row_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7).row;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.approve(row_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 31)(11, "app-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "event_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Approve Desk");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeskBookingsComponent_ng_template_12_Template_button_click_15_listener() {
      const row_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7).row;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.reject(row_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 31)(17, "app-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "event_busy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Decline Desk");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    const menu_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("!text-success-content", (row_r8 == null ? null : row_r8.status) === "approved")("!bg-success", (row_r8 == null ? null : row_r8.status) === "approved")("!text-error-content", (row_r8 == null ? null : row_r8.status) === "declined")("!bg-error", (row_r8 == null ? null : row_r8.status) === "declined")("!text-neutral-content", (row_r8 == null ? null : row_r8.status) === "ended")("!bg-neutral", (row_r8 == null ? null : row_r8.status) === "ended")("opacity-30", (row_r8 == null ? null : row_r8.status) === "ended");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", menu_r9)("disabled", (row_r8 == null ? null : row_r8.status) === "ended");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (row_r8 == null ? null : row_r8.status) === "ended" ? "Ended" : (row_r8 == null ? null : row_r8.status) === "approved" ? "Approved" : (row_r8 == null ? null : row_r8.status) === "declined" ? "Declined" : "Pending", " ");
  }
}
function DeskBookingsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26)(1, "button", 33)(2, "div", 28)(3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "app-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " arrow_drop_down ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-menu", null, 7)(9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeskBookingsComponent_ng_template_14_Template_button_click_9_listener() {
      const row_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10).row;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.checkin(row_r11, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 31)(11, "app-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Check-in");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeskBookingsComponent_ng_template_14_Template_button_click_15_listener() {
      const row_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10).row;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.checkin(row_r11, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 31)(17, "app-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Check-out");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r12 = ctx.data;
    const row_r11 = ctx.row;
    const checkinMenu_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("!bg-neutral", !data_r12)("!text-neutral-content", !data_r12)("!bg-success", data_r12)("!text-success-content", data_r12)("opacity-30", row_r11.status === "ended");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", checkinMenu_r13)("disabled", row_r11.status === "ended")("matTooltip", row_r11.status === "ended" ? "Desk booking has ended" : "Check-in or check-out desk");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r12 ? "Yes" : "No", " ");
  }
}
function DeskBookingsComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeskBookingsComponent_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.loadMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Load More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class DeskBookingsComponent {
  get columns() {
    return ['date', 'period', 'user_name', 'group', 'asset_name', 'approver_name', 'status', 'checked_in'];
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _settings) {
    var _this = this;
    this._state = _state;
    this._settings = _settings;
    this.filters = this._state.filters;
    this.has_more_pages = this._state.has_more_pages;
    this.bookings = this._state.bookings;
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
  static #_ = this.ɵfac = function DeskBookingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DeskBookingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_desks_state_service__WEBPACK_IMPORTED_MODULE_1__.DesksStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DeskBookingsComponent,
    selectors: [["desk-bookings"]],
    decls: 25,
    vars: 36,
    consts: [["date_template", ""], ["group_template", ""], ["period_template", ""], ["user_template", ""], ["status_template", ""], ["option_template", ""], ["menu", "matMenu"], ["checkinMenu", "matMenu"], [1, "overflow-auto", "h-full", "w-full", "pb-4"], [1, "min-w-[72rem]", "block", "text-sm", 3, "data", "filter", "columns", "empty_message", "sortable"], ["btn", "", "matRipple", "", "class", "absolute bottom-2 left-2 w-32 mx-auto my-4", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", 1, "absolute", "bottom-2", "right-2", "bg-base-100", "shadow", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "w-full", "py-2"], [1, "opacity-60"], [1, "text-xl"], [1, "p-4", "text-[0.625rem]", "font-mono"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], [1, "p-2"], [4, "ngIf"], [1, "text-xs", "py-2", "px-4", "bg-error", "rounded-3xl", "text-white"], [1, "flex", "flex-col", "justify-center", "px-4", "py-2"], [1, "select-all"], ["class", "text-xs opacity-30 select-all", 4, "ngIf"], [1, "text-xs", "opacity-30", "select-all"], [1, "px-2"], ["matRipple", "", 1, "rounded-3xl", "bg-warning", "text-warning-content", "border-none", "w-[7.5rem]", "h-10", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "pl-4", "pr-2", "space-x-2"], [1, "flex-1", "text-left"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], ["matRipple", "", 1, "rounded-3xl", "bg-warning", "text-warning-content", "border-none", "w-[4.5rem]", "h-10", 3, "matMenuTriggerFor", "disabled", "matTooltip"], ["btn", "", "matRipple", "", 1, "absolute", "bottom-2", "left-2", "w-32", "mx-auto", "my-4", 3, "click"]],
    template: function DeskBookingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "simple-table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DeskBookingsComponent_ng_template_4_Template, 7, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(6, DeskBookingsComponent_ng_template_6_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(8, DeskBookingsComponent_ng_template_8_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(10, DeskBookingsComponent_ng_template_10_Template, 4, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(12, DeskBookingsComponent_ng_template_12_Template, 21, 17, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(14, DeskBookingsComponent_ng_template_14_Template, 21, 14, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, DeskBookingsComponent_button_16_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 11)(19, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-menu", null, 6)(23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeskBookingsComponent_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.rejectAll());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Reject All");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_8_0;
        let tmp_10_0;
        const date_template_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
        const group_template_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        const period_template_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
        const user_template_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](11);
        const status_template_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);
        const option_template_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](15);
        const menu_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.bookings)("filter", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 7, ctx.filters)) == null ? null : tmp_8_0.search)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction8"](27, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](13, _c0, date_template_r15), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c1, period_template_r17), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](17, _c2, user_template_r18), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](19, _c3, group_template_r16), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](21, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](22, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](23, _c6, status_template_r19), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](25, _c7, option_template_r20)))("empty_message", ((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 9, ctx.filters)) == null ? null : tmp_10_0.search) ? "No matching desk bookings" : "There are no desk booking for the currently selected date.")("sortable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 11, ctx.has_more_pages));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", menu_r21);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_4__.SimpleTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n                position: relative;\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2stYm9va2luZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxrQkFBa0I7Z0JBQ2xCLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO2dCQUNaLFdBQVc7WUFDZiIsImZpbGUiOiJkZXNrLWJvb2tpbmdzLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGVza3MvZGVzay1ib29raW5ncy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGtCQUFrQjtnQkFDbEIsYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztZQUNmOztBQUVaLDRtQkFBNG1CIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 79637:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/desks/desk-map-view.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeskMapViewComponent: () => (/* binding */ DeskMapViewComponent)
/* harmony export */ });
/* harmony import */ var _placeos_explore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/explore */ 27009);
/* harmony import */ var _desks_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desks-state.service */ 20631);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/user-search-field.component */ 18000);
/* harmony import */ var _libs_components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/interactive-map.component */ 24918);
/* harmony import */ var _libs_explore_src_lib_explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/explore/src/lib/explore-zoom-control.component */ 69801);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);













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
  static #_ = this.ɵfac = function DeskMapViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DeskMapViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_explore__WEBPACK_IMPORTED_MODULE_0__.ExploreStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_desks_state_service__WEBPACK_IMPORTED_MODULE_1__.DesksStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_explore__WEBPACK_IMPORTED_MODULE_0__.ExploreDesksService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_3__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: DeskMapViewComponent,
    selectors: [["desk-map-view"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_placeos_explore__WEBPACK_IMPORTED_MODULE_0__.ExploreDesksService]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 13,
    vars: 19,
    consts: [["map", "", 1, "h-full", "w-full", "relative"], [3, "src", "zoom", "center", "styles", "features", "actions"], [1, "absolute", "bottom-2", "right-2"], [1, "absolute", "top-0", "left-0", "p-2", "text-black"], ["placeholder", "User for bookings...", 1, "white", 3, "ngModelChange", "ngModel"], ["info", "", 1, "absolute", "bottom-0", "rounded", "p-2", "m-2", "bg-base-100", "shadow", "text-center"]],
    template: function DeskMapViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "interactive-map", 1);
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
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                position: relative;\n                height: 100%;\n                width: 100%;\n            }\n\n            [info][_ngcontent-%COMP%] {\n                left: 50%;\n                transform: translateX(-50%);\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2stbWFwLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsa0JBQWtCO2dCQUNsQixZQUFZO2dCQUNaLFdBQVc7WUFDZjs7WUFFQTtnQkFDSSxTQUFTO2dCQUNULDJCQUEyQjtZQUMvQiIsImZpbGUiOiJkZXNrLW1hcC12aWV3LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbaW5mb10ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGVza3MvZGVzay1tYXAtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixrQkFBa0I7Z0JBQ2xCLFlBQVk7Z0JBQ1osV0FBVztZQUNmOztZQUVBO2dCQUNJLFNBQVM7Z0JBQ1QsMkJBQTJCO1lBQy9COztBQUVaLG96QkFBb3pCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtpbmZvXSB7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 76284:
/*!**********************************************************************!*\
  !*** ./apps/concierge/src/app/desks/desk-qr-code-modal.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeskQrCodeModalComponent: () => (/* binding */ DeskQrCodeModalComponent)
/* harmony export */ });
/* harmony import */ var _desks_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desks-state.service */ 20631);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var libs_common_src_lib_qr_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/common/src/lib/qr-code */ 75774);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_safe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/safe.pipe */ 26781);












function DeskQrCodeModalComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const desk_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](1, 3, desk_r1.qr_link, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", desk_r1.qr_code, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", desk_r1.name || desk_r1.id, " ");
  }
}
class DeskQrCodeModalComponent {
  get kiosk_url() {
    const path = this._settings.get('app.workplace_url_path') || '/workplace';
    return `${window.location.origin}${path}`;
  }
  constructor(_settings, _state) {
    this._settings = _settings;
    this._state = _state;
    this.desks = this._state.desks.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(list => list.map(_ => {
      this.loadQrCode(_);
      return _;
    })));
  }
  loadQrCode(item) {
    const link = `${this.kiosk_url}/#/book/code?asset_id=${encodeURIComponent(item.id)}`;
    item.qr_link = link;
    item.qr_code = (0,libs_common_src_lib_qr_code__WEBPACK_IMPORTED_MODULE_2__.generateQRCode)(link);
    return item.qr_code;
  }
  print() {
    window.print();
  }
  static #_ = this.ɵfac = function DeskQrCodeModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DeskQrCodeModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_desks_state_service__WEBPACK_IMPORTED_MODULE_0__.DesksStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DeskQrCodeModalComponent,
    selectors: [["desk-qr-code-modal"]],
    decls: 10,
    vars: 3,
    consts: [[1, "relative", "w-screen", "min-h-screen", "bg-base-100", "rounded-none"], [1, "sticky", "top-0", "flex", "items-center", "justify-between", "print:hidden", "p-4", "w-full"], ["btn", "", "matRipple", "", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "flex-wrap", "overflow-auto", "print:h-auto", "h-[calc(100vh-5rem)]"], ["target", "_blank", "ref", "noopener noreferrer", "class", "flex flex-col items-center justify-center w-[28%] landscape:w-[21%] print:landscape:h-[33.33vh] print:h-[25vh] mx-auto", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", "ref", "noopener noreferrer", 1, "flex", "flex-col", "items-center", "justify-center", "w-[28%]", "landscape:w-[21%]", "print:landscape:h-[33.33vh]", "print:h-[25vh]", "mx-auto", 3, "href"], [1, "block", "p-2", "mx-4", "my-2", "rounded-lg", "border", "border-base-200", "bg-base-100"], [1, "w-48", 3, "src"], [1, "w-[calc(100%-2rem)]", "text-center", "my-1", "font-mono", "text-sm", "bg-base-200", "rounded", "p-1", "mx-4"]],
    template: function DeskQrCodeModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeskQrCodeModalComponent_Template_button_click_2_listener() {
          return ctx.print();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Print QR Codes");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 3)(5, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, DeskQrCodeModalComponent_a_8_Template, 6, 6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 1, ctx.desks));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _libs_components_src_lib_safe_pipe__WEBPACK_IMPORTED_MODULE_4__.SafePipe]
  });
}

/***/ }),

/***/ 80569:
/*!****************************************************************!*\
  !*** ./apps/concierge/src/app/desks/desks-manage.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesksManageComponent: () => (/* binding */ DesksManageComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var libs_common_src_lib_qr_code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! libs/common/src/lib/qr-code */ 75774);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _desks_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desks-state.service */ 20631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/clipboard */ 52352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-tooltip.component */ 22238);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/simple-table.component */ 88328);
/* harmony import */ var _libs_components_src_lib_printable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/printable.component */ 74846);
/* harmony import */ var _libs_components_src_lib_safe_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/safe.pipe */ 26781);

























const _c0 = a0 => ({
  key: "id",
  name: "Desk ID",
  content: a0,
  size: "10rem"
});
const _c1 = () => ({
  key: "name",
  name: "Desk Name"
});
const _c2 = a0 => ({
  key: "groups",
  name: "Groups",
  content: a0
});
const _c3 = a0 => ({
  key: "features",
  name: "Features",
  content: a0
});
const _c4 = a0 => ({
  key: "bookable",
  name: "Bookable",
  content: a0,
  size: "5.5rem"
});
const _c5 = a0 => ({
  key: "actions",
  name: " ",
  content: a0,
  size: "8.5rem",
  sortable: false
});
const _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function DesksManageComponent_ng_template_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r3.map_id, " ");
  }
}
function DesksManageComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DesksManageComponent_ng_template_4_Template_button_click_0_listener() {
      const row_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2).row;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.copyToClipboard(row_r3.map_id || row_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, DesksManageComponent_ng_template_4_div_3_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r3.id || row_r3.map_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", row_r3.id && row_r3.map_id !== row_r3.id);
  }
}
function DesksManageComponent_ng_template_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r5, " ");
  }
}
function DesksManageComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DesksManageComponent_ng_template_6_span_1_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", data_r6);
  }
}
function DesksManageComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 15)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("bg-error", !data_r7)("bg-success", data_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](data_r7 ? "done" : "close");
  }
}
function DesksManageComponent_ng_template_10_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DesksManageComponent_ng_template_10_ng_template_10_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.print());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Print QR Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](3, 3, row_r9.qr_link, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", row_r9.qr_code, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r9.name || row_r9.id, " ");
  }
}
function DesksManageComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 16)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DesksManageComponent_ng_template_10_Template_button_click_1_listener() {
      const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8).row;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.loadQrCode(row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "qr_code");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DesksManageComponent_ng_template_10_Template_button_click_4_listener() {
      const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8).row;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.editDesk(row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DesksManageComponent_ng_template_10_Template_button_click_7_listener() {
      const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8).row;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.removeDesk(row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "app-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, DesksManageComponent_ng_template_10_ng_template_10_Template, 9, 6, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const qr_menu_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("content", qr_menu_r11);
  }
}
function DesksManageComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-spinner", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r3.loading);
  }
}
function DesksManageComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Drop CSV file to add desks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function DesksManageComponent_div_13_Template_input_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.loadCSVData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
const QR_CODES = {};
class DesksManageComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  constructor(_state, _org, _dialog, _settings, _element, _clipboard) {
    super();
    this._state = _state;
    this._org = _org;
    this._dialog = _dialog;
    this._settings = _settings;
    this._element = _element;
    this._clipboard = _clipboard;
    this.dragging = false;
    this.filters = this._state.filters;
    this.desks = this._state.desks;
    this.editDesk = desk => this._state.editDesk(desk);
    this.copyToClipboard = id => {
      const success = this._clipboard.copy(id);
      if (success) (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Desk ID copied to clipboard.');
    };
  }
  removeDesk(desk) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const resp = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.openConfirmModal)({
        title: 'Remove desk',
        content: `Remove desk ${desk.name}?`,
        icon: {
          content: 'delete'
        }
      }, _this._dialog);
      if (resp.reason !== 'done') return;
      resp.close();
      const desks = yield _this.desks.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).toPromise();
      const updated_desks = desks.filter(_ => _.id !== desk.id);
      const filters = yield _this.filters.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).toPromise();
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
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Successfully updated desks');
      _this._state.setFilters({});
      _this.loading = '';
    })();
  }
  get kiosk_url() {
    const path = this._settings.get('app.workplace_url_path') || '/workplace';
    return `${window.location.origin}${path}`;
  }
  loadQrCode(item) {
    const link = `${this.kiosk_url}/#/book/code?asset_id=${encodeURIComponent(item.id)}`;
    item.qr_link = link;
    item.qr_code = (0,libs_common_src_lib_qr_code__WEBPACK_IMPORTED_MODULE_4__.generateQRCode)(link);
  }
  print() {
    window.print();
  }
  loadCSVData(event) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = 'Loading CSV file...';
      _this2.dragging = false;
      const data = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.loadTextFileFromInputEvent)(event).catch(([m, e]) => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(m);
        throw e;
      });
      try {
        const list = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.csvToJson)(data) || [];
        _this2._state.addDesks(list.map(_ => new _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.Desk({
          ..._,
          id: _.id || `desk-${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.randomInt)(999_999)}`
        })));
      } catch (e) {
        console.error(e);
      }
      _this2.loading = '';
    })();
  }
  handleDrag(type, event) {
    this.dragging = type === 'enter';
  }
  static #_ = this.ɵfac = function DesksManageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DesksManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_desks_state_service__WEBPACK_IMPORTED_MODULE_5__.DesksStateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__.Clipboard));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: DesksManageComponent,
    selectors: [["desks-manage"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
    decls: 14,
    vars: 29,
    consts: [["name_template", ""], ["item_list_template", ""], ["bool_template", ""], ["action_template", ""], ["qr_menu", ""], [1, "overflow-auto", "h-full", "w-full", "pb-4", 3, "dragenter", "dragend"], [1, "min-w-[72rem]", "w-full", "block", "text-sm", 3, "filter", "data", "columns", "sortable", "empty_message"], ["class", "absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-base-100 bg-opacity-60", 4, "ngIf"], ["class", "absolute inset-0 bg-neutral flex items-center justify-center", 4, "ngIf"], [1, "flex", "flex-col", "px-4", "py-2", "text-left", "leading-tight", 3, "click"], ["class", "text-[0.625rem] opacity-30 font-mono", 4, "ngIf"], [1, "text-[0.625rem]", "opacity-30", "font-mono"], [1, "flex", "flex-wrap", "p-2"], ["class", "m-1 py-1 px-2 rounded-2xl text-xs font-mono bg-info text-info-content", 4, "ngFor", "ngForOf"], [1, "m-1", "py-1", "px-2", "rounded-2xl", "text-xs", "font-mono", "bg-info", "text-info-content"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "text-white", "mx-auto"], [1, "flex", "items-center", "justify-end", "space-x-2", "p-2"], ["icon", "", "matRipple", "", "customTooltip", "", "matTooltip", "Print QR Code", 3, "click", "content"], ["icon", "", "matRipple", "", "matTooltip", "Edit Desk", 3, "click"], ["icon", "", "matRipple", "", "matTooltip", "Remove Desk", 3, "click"], [1, "text-error"], [1, "bg-base-100", "py-2", "shadow", "rounded"], ["printable", "", 1, ""], ["target", "_blank", "ref", "noopener noreferrer", 1, "block", "p-2", "mx-4", "my-2", "rounded-lg", "border", "border-base-200", "bg-base-100", 3, "href"], [1, "w-48", 3, "src"], [1, "w-[calc(100%-2rem)]", "text-center", "mt-2", "font-mono", "text-sm", "bg-base-200", "rounded", "p-2", "mx-4"], ["btn", "", "matRipple", "", 1, "w-[calc(100%-2rem)]", "mx-4", "my-2", 3, "click"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "bg-base-100", "bg-opacity-60"], ["diameter", "32"], [1, "absolute", "inset-0", "bg-neutral", "flex", "items-center", "justify-center"], [1, "bg-base-100", "p-4", "rounded", "shadow"], [1, "border-4", "border-base-200", "border-dashed", "rounded", "flex", "flex-col", "items-center", "justify-center", "w-64", "h-64"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"]],
    template: function DesksManageComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("dragenter", function DesksManageComponent_Template_div_dragenter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.handleDrag("enter", $event));
        })("dragend", function DesksManageComponent_Template_div_dragend_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.handleDrag("end", $event));
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "simple-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, DesksManageComponent_ng_template_4_Template, 4, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"])(6, DesksManageComponent_ng_template_6_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"])(8, DesksManageComponent_ng_template_8_Template, 3, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"])(10, DesksManageComponent_ng_template_10_Template, 12, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"])(12, DesksManageComponent_div_12_Template, 4, 1, "div", 7)(13, DesksManageComponent_div_13_Template, 5, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_8_0;
        const name_template_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](5);
        const item_list_template_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](7);
        const bool_template_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](9);
        const action_template_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("filter", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 7, ctx.filters)) == null ? null : tmp_4_0.search)("data", ctx.desks)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction6"](22, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](11, _c0, name_template_r13), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](13, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](14, _c2, item_list_template_r14), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](16, _c3, item_list_template_r14), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](18, _c4, bool_template_r15), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](20, _c5, action_template_r16)))("sortable", true)("empty_message", ((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 9, ctx.filters)) == null ? null : tmp_8_0.search) ? "No matching desks" : "No desks for selected level");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.dragging);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__.MatProgressSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__.IconComponent, _libs_components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_7__.CustomTooltipComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_8__.SimpleTableComponent, _libs_components_src_lib_printable_component__WEBPACK_IMPORTED_MODULE_9__.PrintableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _libs_components_src_lib_safe_pipe__WEBPACK_IMPORTED_MODULE_10__.SafePipe]
  });
}

/***/ }),

/***/ 2834:
/*!****************************************************************!*\
  !*** ./apps/concierge/src/app/desks/desks-topbar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesksTopbarComponent: () => (/* binding */ DesksTopbarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _desks_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desks-state.service */ 20631);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _desk_book_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desk-book-modal.component */ 64216);
/* harmony import */ var _ui_booking_rules_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/booking-rules-modal.component */ 46864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/date-options.component */ 94584);
/* harmony import */ var _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/searchbar.component */ 12236);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);

























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
    const level_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", level_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", level_r1.display_name || level_r1.name, " ");
  }
}
function DesksTopbarComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DesksTopbarComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.newDeskBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " New Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function DesksTopbarComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DesksTopbarComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.newDesk());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function DesksTopbarComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 17)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function DesksTopbarComponent_button_10_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.loadCSVData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function DesksTopbarComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DesksTopbarComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.downloadTemplate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function DesksTopbarComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DesksTopbarComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.manageRestrictions());
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
      id: `desk-${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.randomInt)(999_999)}`
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
          id: _.id || `desk-${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.randomInt)(999_999)}`
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
  static #_ = this.ɵfac = function DesksTopbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DesksTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_desks_state_service__WEBPACK_IMPORTED_MODULE_3__.DesksStateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: DesksTopbarComponent,
    selectors: [["desks-topbar"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
    decls: 17,
    vars: 17,
    consts: [[1, "flex", "items-center", "bg-base-100", "h-20", "px-4", "border-b", "border-base-200", "space-x-2"], ["appearance", "outline"], ["placeholder", "All Levels", 3, "ngModelChange", "ngModel"], ["value", "All", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "class", "mx-2 w-40", "matTooltip", "New Desk Booking", 3, "click", 4, "ngIf"], ["btn", "", "icon", "", "matRipple", "", "class", "bg-primary mx-2 text-white rounded", "matTooltip", "New Desk", 3, "click", 4, "ngIf"], ["btn", "", "icon", "", "matRipple", "", "class", "bg-primary relative text-white rounded", "matTooltip", "Upload Desks CSV", 4, "ngIf"], ["btn", "", "icon", "", "matRipple", "", "class", "bg-primary mx-2 text-white rounded", "matTooltip", "Download Template Desk CSV", 3, "click", 4, "ngIf"], ["btn", "", "icon", "", "matRipple", "", "class", "bg-primary mx-2 text-white rounded", "matTooltip", "Desk Restrictions", 3, "click", 4, "ngIf"], [1, "flex-1", "w-2"], [1, "mr-2", 3, "modelChange", "model"], [3, "dateChange"], ["value", "All"], [3, "value"], ["btn", "", "matRipple", "", "matTooltip", "New Desk Booking", 1, "mx-2", "w-40", 3, "click"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "New Desk", 1, "bg-primary", "mx-2", "text-white", "rounded", 3, "click"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Upload Desks CSV", 1, "bg-primary", "relative", "text-white", "rounded"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Download Template Desk CSV", 1, "bg-primary", "mx-2", "text-white", "rounded", 3, "click"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Desk Restrictions", 1, "bg-primary", "mx-2", "text-white", "rounded", 3, "click"]],
    template: function DesksTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function DesksTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
          return ctx.updateZones([$event]);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, DesksTopbarComponent_mat_option_5_Template, 2, 0, "mat-option", 3)(6, DesksTopbarComponent_mat_option_6_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, DesksTopbarComponent_button_8_Template, 2, 0, "button", 5)(9, DesksTopbarComponent_button_9_Template, 3, 0, "button", 6)(10, DesksTopbarComponent_button_10_Template, 4, 0, "button", 7)(11, DesksTopbarComponent_button_11_Template, 3, 0, "button", 8)(12, DesksTopbarComponent_button_12_Template, 3, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "searchbar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("modelChange", function DesksTopbarComponent_Template_searchbar_modelChange_14_listener($event) {
          return ctx.setFilters({
            search: $event
          });
        });
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
    styles: ["mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2tzLXRvcGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGNBQWM7Z0JBQ2QsVUFBVTtZQUNkIiwiZmlsZSI6ImRlc2tzLXRvcGJhci5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuMjVlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogOGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGVza3MvZGVza3MtdG9wYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksY0FBYztnQkFDZCxVQUFVO1lBQ2Q7O0FBRVosZ2JBQWdiIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjI1ZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDhlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 69635:
/*!*********************************************************!*\
  !*** ./apps/concierge/src/app/desks/desks.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesksComponent: () => (/* binding */ DesksComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _desks_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desks-state.service */ 20631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/sidebar.component */ 74605);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _desks_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desks-topbar.component */ 2834);











const _c0 = ["app-desks", ""];
const _c1 = () => ["/book", "desks", "events"];
const _c2 = () => ["/book", "desks", "map"];
const _c3 = () => ["/book", "desks", "manage"];
function DesksComponent_mat_progress_bar_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 7);
  }
}
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
  static #_ = this.ɵfac = function DesksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DesksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_desks_state_service__WEBPACK_IMPORTED_MODULE_1__.DesksStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
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
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2tzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixZQUFZO2dCQUNaLFdBQVc7WUFDZiIsImZpbGUiOiJkZXNrcy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGVza3MvZGVza3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLFlBQVk7Z0JBQ1osV0FBVztZQUNmOztBQUVaLHdjQUF3YyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 20402:
/*!******************************************************!*\
  !*** ./apps/concierge/src/app/desks/desks.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesksModule: () => (/* binding */ DesksModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ 53804);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _placeos_explore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/explore */ 27009);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/ui.module */ 15412);
/* harmony import */ var _desks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desks.component */ 69635);
/* harmony import */ var _desk_bookings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desk-bookings.component */ 38801);
/* harmony import */ var _desks_topbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desks-topbar.component */ 2834);
/* harmony import */ var _desk_map_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desk-map-view.component */ 79637);
/* harmony import */ var _desks_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desks-manage.component */ 80569);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var apps_workplace_src_app_book_new_desk_flow_new_desk_form_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apps/workplace/src/app/book/new-desk-flow/new-desk-form-details.component */ 35817);
/* harmony import */ var _desk_book_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./desk-book-modal.component */ 64216);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _placeos_form_fields__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @placeos/form-fields */ 63046);
/* harmony import */ var _new_desks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-desks.component */ 50636);
/* harmony import */ var _desk_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./desk-modal.component */ 85510);
/* harmony import */ var _desk_qr_code_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./desk-qr-code-modal.component */ 76284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37580);
























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
  static #_ = this.ɵfac = function DesksModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DesksModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
    type: DesksModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__.MatTabsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule, _placeos_explore__WEBPACK_IMPORTED_MODULE_0__.SharedExploreModule, _placeos_bookings__WEBPACK_IMPORTED_MODULE_9__.SharedBookingsModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_10__.FormFieldsModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](DesksModule, {
    declarations: [_new_desks_component__WEBPACK_IMPORTED_MODULE_11__.NewDesksComponent, _desks_component__WEBPACK_IMPORTED_MODULE_2__.DesksComponent, _desk_bookings_component__WEBPACK_IMPORTED_MODULE_3__.DeskBookingsComponent, _desks_topbar_component__WEBPACK_IMPORTED_MODULE_4__.DesksTopbarComponent, _desk_map_view_component__WEBPACK_IMPORTED_MODULE_5__.DeskMapViewComponent, _desks_manage_component__WEBPACK_IMPORTED_MODULE_6__.DesksManageComponent, apps_workplace_src_app_book_new_desk_flow_new_desk_form_details_component__WEBPACK_IMPORTED_MODULE_7__.NewDeskFormDetailsComponent, _desk_book_modal_component__WEBPACK_IMPORTED_MODULE_8__.DeskBookModalComponent, _desk_modal_component__WEBPACK_IMPORTED_MODULE_12__.DeskModalComponent, _desk_qr_code_modal_component__WEBPACK_IMPORTED_MODULE_13__.DeskQrCodeModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__.MatTabsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule, _placeos_explore__WEBPACK_IMPORTED_MODULE_0__.SharedExploreModule, _placeos_bookings__WEBPACK_IMPORTED_MODULE_9__.SharedBookingsModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_10__.FormFieldsModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule]
  });
})();

/***/ }),

/***/ 50636:
/*!*************************************************************!*\
  !*** ./apps/concierge/src/app/desks/new-desks.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewDesksComponent: () => (/* binding */ NewDesksComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _desks_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desks-state.service */ 20631);
/* harmony import */ var _desk_book_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desk-book-modal.component */ 64216);
/* harmony import */ var _ui_booking_rules_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/booking-rules-modal.component */ 46864);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _desk_qr_code_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desk-qr-code-modal.component */ 76284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/date-options.component */ 94584);
/* harmony import */ var _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/searchbar.component */ 12236);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/app-topbar.component */ 45189);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 96843);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/building.pipe */ 56062);






























const _c0 = ["app-new-desks", ""];
function NewDesksComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NewDesksComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.newDeskBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "New Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "app-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function NewDesksComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NewDesksComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.editDesk());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "New Desk");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "app-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function NewDesksComponent_mat_form_field_13_mat_option_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "building");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const level_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, level_r5.parent_id)) == null ? null : tmp_4_0.display_name, " ");
  }
}
function NewDesksComponent_mat_form_field_13_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 19)(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, NewDesksComponent_mat_form_field_13_mat_option_3_div_2_Template, 5, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const level_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", level_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.use_region);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", level_r5.display_name || level_r5.name, " ");
  }
}
function NewDesksComponent_mat_form_field_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-form-field", 16)(1, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function NewDesksComponent_mat_form_field_13_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.updateZones($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, NewDesksComponent_mat_form_field_13_mat_option_3_Template, 5, 3, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, ctx_r1.filters)) == null ? null : tmp_1_0.zones);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 4, ctx_r1.levels));
  }
}
function NewDesksComponent_mat_form_field_14_mat_option_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "building");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const level_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, level_r7.parent_id)) == null ? null : tmp_4_0.display_name, " ");
  }
}
function NewDesksComponent_mat_form_field_14_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 19)(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, NewDesksComponent_mat_form_field_14_mat_option_4_div_2_Template, 5, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const level_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", level_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.use_region);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", level_r7.display_name || level_r7.name, " ");
  }
}
function NewDesksComponent_mat_form_field_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-form-field", 16)(1, "mat-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function NewDesksComponent_mat_form_field_14_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.updateZones([$event]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, NewDesksComponent_mat_form_field_14_mat_option_4_Template, 5, 3, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, ctx_r1.filters)) == null ? null : tmp_1_0.zones == null ? null : tmp_1_0.zones.length) ? (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 4, ctx_r1.filters)) == null ? null : tmp_1_0.zones[0] : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 6, ctx_r1.levels));
  }
}
function NewDesksComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "date-options", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("dateChange", function NewDesksComponent_ng_container_16_Template_date_options_dateChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.setDate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NewDesksComponent_ng_container_16_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.refresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 1, ctx_r1.loading));
  }
}
function NewDesksComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NewDesksComponent_ng_container_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.viewQRCodes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "qr_code");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "button", 28)(5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function NewDesksComponent_ng_container_17_Template_input_change_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.loadCSVData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NewDesksComponent_ng_container_17_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.downloadTemplate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function NewDesksComponent_ng_container_17_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.manageRestrictions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "lock_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
}
function NewDesksComponent_mat_progress_bar_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "mat-progress-bar", 32);
  }
}
class NewDesksComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  get use_region() {
    return !!this._settings.get('app.use_region');
  }
  constructor(_state, _router, _route, _dialog, _org, _settings) {
    super();
    this._state = _state;
    this._router = _router;
    this._route = _route;
    this._dialog = _dialog;
    this._org = _org;
    this._settings = _settings;
    this.loading = this._state.loading;
    this.manage = false;
    /** List of levels for the active building */
    this.filters = this._state.filters;
    /** List of levels for the active building */
    this.levels = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this._org.active_building, this._org.active_region]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([bld, region]) => this._settings.get('app.use_region') ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
    this.setDate = date => this._state.setFilters({
      date
    });
    this.setFilters = o => this._state.setFilters(o);
    this.refresh = () => this._state.refresh();
    this.editDesk = () => this._state.editDesk();
    /** Update active zones for desks */
    this.updateZones = zones => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          zone_ids: zones.join(',')
        },
        queryParamsHandling: 'merge'
      });
    };
  }
  ngOnInit() {
    this._state.refresh();
    this.subscription('router.events', this._router.events.subscribe(e => {
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_16__.NavigationEnd) {
        const url_parts = this._router.url?.split('/') || [''];
        this.path = url_parts[parts.length - 1].split('?')[0];
        this._checkManage();
      }
    }));
    this.subscription('route.query', this._route.queryParamMap.subscribe(params => {
      if (params.has('zone_ids')) {
        const zones = params.get('zone_ids').split(',');
        if (!zones.length) return;
        const level = this._org.levelWithID(zones);
        this._state.setFilters({
          zones
        });
        if (!level) return;
        this._org.building = this._org.buildings.find(bld => bld.id === level.parent_id);
      }
    }));
    const parts = this._router.url?.split('/') || [''];
    this.path = parts[parts.length - 1].split('?')[0];
    this._checkManage();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  viewQRCodes() {
    this._dialog.open(_desk_qr_code_modal_component__WEBPACK_IMPORTED_MODULE_6__.DeskQrCodeModalComponent);
  }
  newDeskBooking() {
    const ref = this._dialog.open(_desk_book_modal_component__WEBPACK_IMPORTED_MODULE_4__.DeskBookModalComponent, {});
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
  downloadTemplate() {
    const desk = new _placeos_organisation__WEBPACK_IMPORTED_MODULE_1__.Desk({
      id: 'desk-123',
      name: 'Test Desk',
      bookable: true,
      groups: ['test-desk-group', 'desk-bookers'],
      features: ['Standing Desk', 'Dual Monitor']
    }).toJSON();
    delete desk.images;
    const data = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.jsonToCsv)([desk]);
    (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.downloadFile)('desk-template.csv', data);
  }
  loadCSVData(event) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.loadTextFileFromInputEvent)(event).catch(([m, e]) => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)(m);
        throw e;
      });
      try {
        const list = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.csvToJson)(data) || [];
        _this._state.addDesks(list.map(_ => new _placeos_organisation__WEBPACK_IMPORTED_MODULE_1__.Desk({
          ..._,
          id: _.id || `desk-${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.randomInt)(999_999)}`
        })));
      } catch (e) {
        console.error(e);
      }
    })();
  }
  _checkManage() {
    var _this2 = this;
    this.manage = this.path.includes('manage');
    if (this.manage) {
      this.subscription('zone-changes', this._org.active_levels.subscribe( /*#__PURE__*/function () {
        var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (lvls) {
          if (!lvls.length) return;
          const {
            zones
          } = yield _this2._state.filters.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1)).toPromise();
          const levels_in_zones = zones?.length && zones.some(z => lvls.find(lvl => lvl.id === z));
          if (!levels_in_zones) _this2.updateZones([lvls[0].id]);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()));
    } else this.unsub('zone-changes');
  }
  static #_ = this.ɵfac = function NewDesksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NewDesksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_desks_state_service__WEBPACK_IMPORTED_MODULE_3__.DesksStateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_1__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: NewDesksComponent,
    selectors: [["", "app-new-desks", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]],
    attrs: _c0,
    decls: 22,
    vars: 13,
    consts: [[1, "print:hidden"], [1, "flex", "flex-1", "h-px", "print:hidden"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "flex", "items-center", "w-full", "py-4", "px-8", "space-x-2"], [1, "text-2xl", "font-medium"], [1, "flex-1", "w-px"], [1, "mr-2", 3, "modelChange", "model"], ["btn", "", "matRipple", "", "class", "space-x-2 w-44", 3, "click", 4, "ngIf"], [1, "w-full", "flex", "items-center", "px-8", "space-x-2", "mb-4"], ["appearance", "outline", "class", "no-subscript w-60", 4, "ngIf"], [4, "ngIf"], [1, "flex-1", "h-1/2", "px-8", "w-full", "relative", "overflow-auto"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], ["btn", "", "matRipple", "", 1, "space-x-2", "w-44", 3, "click"], [1, "pl-2"], [1, "text-2xl"], ["appearance", "outline", 1, "no-subscript", "w-60"], ["placeholder", "All Levels", "multiple", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["placeholder", "All Levels", 3, "ngModelChange", "ngModel"], [3, "dateChange"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Refresh List", 1, "ml-2", "rounded", "border", "border-base-200", 3, "click", "disabled"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "View Desk QR Codes", 1, "bg-secondary", "text-secondary-content", "rounded", "h-12", "w-12", 3, "click"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Upload Desks CSV", 1, "bg-secondary", "text-secondary-content", "rounded", "h-12", "w-12"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Download Template Desk CSV", 1, "bg-secondary", "text-secondary-content", "rounded", "h-12", "w-12", 3, "click"], ["icon", "", "matRipple", "", "matTooltip", "Desk Restrictions", 1, "bg-secondary", "text-secondary-content", "rounded", "h-12", "w-12", 3, "click"], ["mode", "indeterminate", 1, "w-full"]],
    template: function NewDesksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-topbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "main", 2)(4, "div", 3)(5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "searchbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("modelChange", function NewDesksComponent_Template_searchbar_modelChange_8_listener($event) {
          return ctx.setFilters({
            search: $event
          });
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, NewDesksComponent_button_10_Template, 5, 0, "button", 7)(11, NewDesksComponent_button_11_Template, 5, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, NewDesksComponent_mat_form_field_13_Template, 5, 6, "mat-form-field", 9)(14, NewDesksComponent_mat_form_field_14_Template, 6, 8, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, NewDesksComponent_ng_container_16_Template, 6, 3, "ng-container", 10)(17, NewDesksComponent_ng_container_17_Template, 14, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](20, NewDesksComponent_mat_progress_bar_20_Template, 1, 0, "mat-progress-bar", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx.manage ? "Desk Management" : "Desk Bookings", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("model", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](9, 9, ctx.filters)) == null ? null : tmp_1_0.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.path !== "manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.path === "manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.manage);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.manage);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.path === "events");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.path === "manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](21, 11, ctx.loading) && ctx.path === "events");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _ui_date_options_component__WEBPACK_IMPORTED_MODULE_7__.DateOptionsComponent, _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_8__.SearchbarComponent, _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_9__.ApplicationTopbarComponent, _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_10__.ApplicationSidebarComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltip, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__.MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_11__.IconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe, _libs_components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_12__.BuildingPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1kZXNrcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsMkJBQTJCO1lBQy9CIiwiZmlsZSI6Im5ldy1kZXNrcy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWIxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGVza3MvbmV3LWRlc2tzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCwyQkFBMkI7WUFDL0I7O0FBRVosNG1CQUE0bUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWIxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 35817:
/*!**************************************************************************************!*\
  !*** ./apps/workplace/src/app/book/new-desk-flow/new-desk-form-details.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewDeskFormDetailsComponent: () => (/* binding */ NewDeskFormDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 28797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 77177);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 99908);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../libs/form-fields/src/lib/date-field.component */ 19608);
/* harmony import */ var _libs_form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../libs/form-fields/src/lib/duration-field.component */ 83476);
/* harmony import */ var _libs_form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../libs/form-fields/src/lib/time-field.component */ 81413);
/* harmony import */ var _libs_form_fields_src_lib_user_list_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../libs/form-fields/src/lib/user-list-field.component */ 840);
/* harmony import */ var _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../libs/form-fields/src/lib/user-search-field.component */ 18000);
/* harmony import */ var _libs_form_fields_src_lib_recurrence_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../libs/form-fields/src/lib/recurrence-field.component */ 83138);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_assets_src_lib_asset_list_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../libs/assets/src/lib/asset-list-field.component */ 83618);
/* harmony import */ var _libs_bookings_src_lib_desk_list_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../libs/bookings/src/lib/desk-list-field.component */ 56416);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 597);


























const _c0 = () => ({
  standalone: true
});
const _c1 = () => [];
const _c2 = (a0, a1, a2) => ({
  date: a0,
  duration: a1,
  all_day: a2
});
function NewDeskFormDetailsComponent_div_0_section_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "section", 33)(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NewDeskFormDetailsComponent_div_0_section_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.setOptions({
        group: false,
        members: []
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "app-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](6, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NewDeskFormDetailsComponent_div_0_section_1_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.setOptions({
        group: true
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "app-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "group_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](15, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("text-secondary", !((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 12, ctx_r1.options)) == null ? null : tmp_2_0.group));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("bg-base-200", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 14, ctx_r1.options)) == null ? null : tmp_3_0.group)("bg-secondary", !((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 16, ctx_r1.options)) == null ? null : tmp_4_0.group));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("text-secondary", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 18, ctx_r1.options)) == null ? null : tmp_5_0.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("bg-base-200", !((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](17, 20, ctx_r1.options)) == null ? null : tmp_6_0.group))("bg-secondary", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](18, 22, ctx_r1.options)) == null ? null : tmp_7_0.group);
  }
}
function NewDeskFormDetailsComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 38)(1, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Host");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "a-user-search-field", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function NewDeskFormDetailsComponent_div_0_mat_checkbox_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-checkbox", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function NewDeskFormDetailsComponent_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nStart"](3, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "a-time-field", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function NewDeskFormDetailsComponent_div_0_div_27_Template_a_time_field_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.form.patchValue({
        date: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 42)(7, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nStart"](8, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "a-duration-field", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r1.form.value.date)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](10, _c0))("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("time", (tmp_6_0 = ctx_r1.form.get("date")) == null ? null : tmp_6_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
  }
}
function NewDeskFormDetailsComponent_div_0_div_28_mat_checkbox_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-checkbox", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Update all future events ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function NewDeskFormDetailsComponent_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 47)(1, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "recurrence-field", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function NewDeskFormDetailsComponent_div_0_div_28_Template_recurrence_field_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.recurrence, $event) || (ctx_r1.recurrence = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function NewDeskFormDetailsComponent_div_0_div_28_Template_recurrence_field_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onRecurrenceChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, NewDeskFormDetailsComponent_div_0_div_28_mat_checkbox_7_Template, 2, 0, "mat-checkbox", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 5, "FORM.RECURRENCE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("date", ctx_r1.form.getRawValue().date);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.recurrence);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.form.value.id);
  }
}
function NewDeskFormDetailsComponent_div_0_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "mat-checkbox", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function NewDeskFormDetailsComponent_div_0_div_29_Template_mat_checkbox_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.form.patchValue({
        secondary_resource: $event ? "locker" : ""
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](3, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", !!ctx_r1.form.value.secondary_resource)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](2, _c0));
  }
}
function NewDeskFormDetailsComponent_div_0_section_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "section", 16)(1, "h3", 53)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](5, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 55)(8, "a-user-list-field", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function NewDeskFormDetailsComponent_div_0_section_30_Template_a_user_list_field_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.setOptions({
        members: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 2, ctx_r1.options)) == null ? null : tmp_2_0.members) || _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](4, _c1))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](5, _c0));
  }
}
function NewDeskFormDetailsComponent_div_0_section_32_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Desks nearby to the selected desk will booked for group members ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function NewDeskFormDetailsComponent_div_0_section_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "section", 16)(1, "h3", 17)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](6, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "desk-list-field", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, NewDeskFormDetailsComponent_div_0_section_32_p_8_Template, 2, 0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 2, ctx_r1.options)) == null ? null : tmp_2_0.group) ? 3 : 2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 4, ctx_r1.options)) == null ? null : tmp_3_0.group);
  }
}
function NewDeskFormDetailsComponent_div_0_section_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "section", 16)(1, "h3", 17)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](6, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "asset-list-field", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 2, ctx_r1.options)) == null ? null : tmp_2_0.group) ? 4 : 3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction3"](4, _c2, ctx_r1.form.getRawValue().date, ctx_r1.form.value.duration, ctx_r1.form.value.all_day));
  }
}
function NewDeskFormDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, NewDeskFormDetailsComponent_div_0_section_1_Template, 19, 24, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "section", 16)(3, "h3", 17)(4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](7, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, NewDeskFormDetailsComponent_div_0_div_8_Template, 6, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 21)(11, "div", 22)(12, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Add Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "mat-form-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](19, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 26)(21, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nStart"](22, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "a-date-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](25, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, NewDeskFormDetailsComponent_div_0_mat_checkbox_26_Template, 2, 0, "mat-checkbox", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, NewDeskFormDetailsComponent_div_0_div_27_Template, 11, 11, "div", 30)(28, NewDeskFormDetailsComponent_div_0_div_28_Template, 8, 8, "div", 31)(29, NewDeskFormDetailsComponent_div_0_div_29_Template, 4, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, NewDeskFormDetailsComponent_div_0_section_30_Template, 10, 6, "section", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](32, NewDeskFormDetailsComponent_div_0_section_32_Template, 10, 6, "section", 32)(33, NewDeskFormDetailsComponent_div_0_section_33_Template, 8, 8, "section", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_11_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.allow_groups);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("!border-none", ctx_r1.allow_groups);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.can_book_for_others && !((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 14, ctx_r1.options)) == null ? null : tmp_4_0.group));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("to", ctx_r1.end_date)("timezone", ctx_r1.timezone);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.allow_all_day);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.form.value.all_day);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.can_recurr);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.can_book_lockers);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](31, 16, ctx_r1.options)) == null ? null : tmp_11_0.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.form.contains("resources"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.has_assets);
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
    return this._settings.get('app.desks.allow_recurrence');
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
  get timezone() {
    return this._settings.get('app.desks.use_building_timezone') ? this._org.building.timezone : '';
  }
  get end_date() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.endOfDay)((0,date_fns__WEBPACK_IMPORTED_MODULE_14__.addDays)(Date.now(), this._settings.get('app.desks.available_period') || 90)).valueOf();
  }
  get use_24hr() {
    return this._settings.get('app.use_24_hour_time');
  }
  constructor(_state, _org, _settings) {
    super();
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this.find = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    /** List of available buildings to select */
    this.buildings = this._org.building_list;
    /** List of available levels for the selected building */
    this.levels = this._org.active_levels;
    /** List of set options for desk booking */
    this.options = this._state.options;
    /** List of set options for desk booking */
    this.features = this._state.features;
    this.force_time = (0,date_fns__WEBPACK_IMPORTED_MODULE_15__.set)(Date.now(), {
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
      this.initialiseRecurrence();
    }
  }
  initialiseRecurrence() {
    const {
      recurrence_type,
      recurrence_days,
      recurrence_interval,
      recurrence_end,
      date
    } = this.form.value;
    if (!this.can_recurr) return;
    this.recurrence = {
      pattern: recurrence_type,
      days_of_week: new Array(7).fill(0).map((_, i) => i).filter(i => recurrence_days & _placeos_bookings__WEBPACK_IMPORTED_MODULE_0__.DAYS_OF_WEEK_INDEX[i]),
      interval: recurrence_interval,
      start: date,
      end: recurrence_end
    };
  }
  onRecurrenceChange(recurrence) {
    if (!recurrence.pattern) {
      this.form.patchValue({
        recurrence_type: 'none'
      });
    } else if (recurrence.pattern === 'daily') {
      this.form.patchValue({
        recurrence_type: 'daily',
        recurrence_days: _placeos_bookings__WEBPACK_IMPORTED_MODULE_0__.RecurrenceDays.MONDAY | _placeos_bookings__WEBPACK_IMPORTED_MODULE_0__.RecurrenceDays.TUESDAY | _placeos_bookings__WEBPACK_IMPORTED_MODULE_0__.RecurrenceDays.WEDNESDAY | _placeos_bookings__WEBPACK_IMPORTED_MODULE_0__.RecurrenceDays.THURSDAY | _placeos_bookings__WEBPACK_IMPORTED_MODULE_0__.RecurrenceDays.FRIDAY,
        recurrence_interval: recurrence.interval,
        recurrence_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getUnixTime)(recurrence.end)
      });
    } else if (recurrence.pattern === 'weekly') {
      this.form.patchValue({
        recurrence_type: 'weekly',
        recurrence_days: recurrence.days_of_week.reduce((d, i) => d | _placeos_bookings__WEBPACK_IMPORTED_MODULE_0__.DAYS_OF_WEEK_INDEX[i], 0),
        recurrence_interval: recurrence.interval,
        recurrence_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getUnixTime)(recurrence.end)
      });
    } else if (recurrence.pattern === 'monthly' || recurrence.pattern === 'month_day') {
      const date = new Date(this.form.value.date).getDate();
      let instance = Math.floor(date / 7) + (date % 7 ? 1 : 0);
      if (instance === 4 && date >= 25 || instance === 5) instance = -1;
      this.form.patchValue({
        recurrence_type: 'monthly',
        recurrence_interval: recurrence.interval,
        recurrence_nth_of_month: instance,
        recurrence_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getUnixTime)(recurrence.end)
      });
    } else {
      this.form.patchValue({
        recurrence_type: 'none'
      });
    }
  }
  static #_ = this.ɵfac = function NewDeskFormDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NewDeskFormDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_placeos_bookings__WEBPACK_IMPORTED_MODULE_0__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: NewDeskFormDetailsComponent,
    selectors: [["new-desk-form-details"]],
    inputs: {
      form: "form"
    },
    outputs: {
      find: "find"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 1,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5028777105388019087$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_0 = goog.getMsg("Details");
        i18n_0 = MSG_EXTERNAL_5028777105388019087$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟4f8b2bb476981727ab34ed40fde1218361f92c45␟5028777105388019087:Details`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4954033536980360307$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_1 = goog.getMsg("Booking title is required.");
        i18n_1 = MSG_EXTERNAL_4954033536980360307$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟3501a14ee1e89ea7009e8c9d1d6796a9ac9c3718␟4954033536980360307:Booking title is required.`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3158758063619980932$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_2 = goog.getMsg("Date{$startTagSpan}*{$closeTagSpan}", {
          "closeTagSpan": "\uFFFD/#23\uFFFD",
          "startTagSpan": "\uFFFD#23\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_2 = MSG_EXTERNAL_3158758063619980932$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟04cfb5fd033651743bc4b9408bd52ba4ee894070␟3158758063619980932:Date${"\uFFFD#23\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#23\uFFFD"}:CLOSE_TAG_SPAN:`;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6682406734296000735$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_3 = goog.getMsg(" Date and time must be in the future ");
        i18n_3 = MSG_EXTERNAL_6682406734296000735$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:␟407bcc42df8640bf3b85c58145c8d24572bb47b6␟6682406734296000735: Date and time must be in the future `;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3413004253239957216$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_4 = goog.getMsg("Single");
        i18n_4 = MSG_EXTERNAL_3413004253239957216$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_4;
      } else {
        i18n_4 = $localize`:␟ee6b1f617dd5320b23fbed018c38ac092db5e40a␟3413004253239957216:Single`;
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8623978917681527907$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_5 = goog.getMsg("Group");
        i18n_5 = MSG_EXTERNAL_8623978917681527907$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_5;
      } else {
        i18n_5 = $localize`:␟4c90059afafb7e160384d9f512797c95bb95c6dc␟8623978917681527907:Group`;
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8093595438228616861$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_6 = goog.getMsg(" All Day ");
        i18n_6 = MSG_EXTERNAL_8093595438228616861$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_6;
      } else {
        i18n_6 = $localize`:␟8a5018aa2d4dd0e8a98f4499d4b7b4a9255441a5␟8093595438228616861: All Day `;
      }
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4735431816432396893$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_7 = goog.getMsg(" Start Time{$startTagSpan}*{$closeTagSpan}", {
          "closeTagSpan": "\uFFFD/#4\uFFFD",
          "startTagSpan": "\uFFFD#4\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_7 = MSG_EXTERNAL_4735431816432396893$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_7;
      } else {
        i18n_7 = $localize`:␟02d39ddac5bbf95c424df03d5f0d22cc257556bd␟4735431816432396893: Start Time${"\uFFFD#4\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_SPAN:`;
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7899923133926994657$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_8 = goog.getMsg(" End Time{$startTagSpan}*{$closeTagSpan}", {
          "closeTagSpan": "\uFFFD/#9\uFFFD",
          "startTagSpan": "\uFFFD#9\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_8 = MSG_EXTERNAL_7899923133926994657$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_8;
      } else {
        i18n_8 = $localize`:␟96ca8377bef76dbcd3eb3b4d39e5414763c7033b␟7899923133926994657: End Time${"\uFFFD#9\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#9\uFFFD"}:CLOSE_TAG_SPAN:`;
      }
      let i18n_9;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8675972661523566351$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_9 = goog.getMsg(" Require locker ");
        i18n_9 = MSG_EXTERNAL_8675972661523566351$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_9;
      } else {
        i18n_9 = $localize`:␟f1701d7a0d6bfb739979f9e406793d97acd138e3␟8675972661523566351: Require locker `;
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9086691296106045671$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_10 = goog.getMsg("Group Members");
        i18n_10 = MSG_EXTERNAL_9086691296106045671$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_10;
      } else {
        i18n_10 = $localize`:␟60ae849c087ccc322073478a12b2504433fbdd61␟9086691296106045671:Group Members`;
      }
      let i18n_11;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6078724721705612215$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_11 = goog.getMsg("Desk");
        i18n_11 = MSG_EXTERNAL_6078724721705612215$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_11;
      } else {
        i18n_11 = $localize`:␟654c7e59b2003acf985bee710bad11e8cdd461f8␟6078724721705612215:Desk`;
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8637135334686190699$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_12 = goog.getMsg("Request Asset");
        i18n_12 = MSG_EXTERNAL_8637135334686190699$$APPS_WORKPLACE_SRC_APP_BOOK_NEW_DESK_FLOW_NEW_DESK_FORM_DETAILS_COMPONENT_TS_12;
      } else {
        i18n_12 = $localize`:␟1bdfc0dfd2ac89f5d0d2af3a66e5e959d094b39c␟8637135334686190699:Request Asset`;
      }
      return [i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, i18n_10, i18n_11, i18n_12, ["class", "p-0 sm:py-4 sm:px-16 divide-y divide-base-200 space-y-2", 3, "formGroup", 4, "ngIf"], [1, "p-0", "sm:py-4", "sm:px-16", "divide-y", "divide-base-200", "space-y-2", 3, "formGroup"], ["class", "flex items-center", 4, "ngIf"], [1, "p-2"], [1, "space-x-2", "flex", "items-center", "mb-4"], [1, "bg-base-200", "rounded-full", "h-6", "w-6", "flex", "items-center", "justify-center"], [1, "text-xl"], ["class", "w-full", 4, "ngIf"], [1, "flex", "items-center", "flex-wrap", "sm:space-x-2"], [1, "flex-1", "min-w-[256px]"], ["for", "title"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "title", "formControlName", "title", "placeholder", "e.g. Focus Time"], [1, "flex-1", "min-w-[256px]", "relative"], ["for", "date"], ["name", "date", "formControlName", "date", 3, "to", "timezone"], ["formControlName", "all_day", "class", "absolute -top-2 right-0", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["class", "flex flex-col", 4, "ngIf"], ["class", "p-2", 4, "ngIf"], [1, "flex", "items-center"], ["matRipple", "", 1, "relative", "h-16", "flex", "items-center", "justify-center", "flex-1", "space-x-2", 3, "click"], [1, "text-2xl"], [1, ""], [1, "absolute", "h-1", "inset-x-0", "bottom-0", "!m-0"], [1, "w-full"], ["formControlName", "user", 1, "mb-4"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-0"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1", "w-1/3"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr", "timezone"], [1, "flex", "flex-col"], ["for", "recurrence"], ["name", "recurrence", 3, "ngModelChange", "date", "ngModel", "ngModelOptions"], ["formControlName", "update_master", 4, "ngIf"], ["formControlName", "update_master"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "space-x-2", "flex", "items-center"], [1, "flex-1", "w-px"], [1, "overflow-hidden"], [1, "mt-4", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["formControlName", "resources"], ["class", "text-center rounded px-2 py-1 bg-warning shadow text-xs", 4, "ngIf"], [1, "text-center", "rounded", "px-2", "py-1", "bg-warning", "shadow", "text-xs"], ["formControlName", "assets", 3, "options"]];
    },
    template: function NewDeskFormDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, NewDeskFormDetailsComponent_div_0_Template, 34, 18, "div", 13);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.form);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatRipple, _libs_form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_3__.DateFieldComponent, _libs_form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_4__.DurationFieldComponent, _libs_form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_5__.TimeFieldComponent, _libs_form_fields_src_lib_user_list_field_component__WEBPACK_IMPORTED_MODULE_6__.UserListFieldComponent, _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_7__.UserSearchFieldComponent, _libs_form_fields_src_lib_recurrence_field_component__WEBPACK_IMPORTED_MODULE_8__.RecurrenceFieldComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_9__.IconComponent, _libs_assets_src_lib_asset_list_field_component__WEBPACK_IMPORTED_MODULE_10__.AssetListFieldComponent, _libs_bookings_src_lib_desk_list_field_component__WEBPACK_IMPORTED_MODULE_11__.DeskListFieldComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_desks_desks_module_ts.js.map