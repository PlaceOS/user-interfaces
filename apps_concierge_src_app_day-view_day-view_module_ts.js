"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_day-view_day-view_module_ts"],{

/***/ 81241:
/*!********************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/booking-modal.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingModalComponent: () => (/* binding */ BookingModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/events */ 58908);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _event_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-form.component */ 66853);














function BookingModalComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, ctx_r0.loading));
  }
}
function BookingModalComponent_footer_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "footer", 8)(1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingModalComponent_footer_13_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class BookingModalComponent {
  get form() {
    return this._service.form;
  }
  constructor(_data, _service, _dialog_ref, _settings) {
    this._data = _data;
    this._service = _service;
    this._dialog_ref = _dialog_ref;
    this._settings = _settings;
    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    /** Observable for the loading state of the form */
    this.loading = this._service.loading;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let event = _this._data.event;
      if (event?.creator !== event?.mailbox) {
        event = (yield (0,_placeos_events__WEBPACK_IMPORTED_MODULE_2__.queryEvents)({
          period_start: event.event_start,
          period_end: event.event_end,
          ical_uid: event.ical_uid
        }).toPromise()).find(_ => _.ical_uid === event.ical_uid) || event;
      }
      if (event && !event.id) {
        event.all_day = _this._settings.get('app.events.all_day_default') ?? event.all_day;
      }
      _this._service.newForm(event);
    })();
  }
  save() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const event = yield _this2._service.postForm().catch(_ => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(_);
        throw _;
      });
      _this2.event.emit({
        reason: 'done',
        metadata: event
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Successfully created booking');
      _this2._dialog_ref.close();
    })();
  }
  static #_ = this.ɵfac = function BookingModalComponent_Factory(t) {
    return new (t || BookingModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_events__WEBPACK_IMPORTED_MODULE_2__.EventFormService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: BookingModalComponent,
    selectors: [["booking-modal"]],
    outputs: {
      event: "event"
    },
    decls: 15,
    vars: 16,
    consts: [[1, "flex-1", "w-0"], ["icon", "", "mat-dialog-close", ""], [1, "relative", "p-4"], [3, "form"], ["loading", "", "class", "absolute inset-0 flex flex-col items-center justify-center", 4, "ngIf"], ["class", "flex justify-center items-center p-2 border-t border-base-200", 4, "ngIf"], ["loading", "", 1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center"], [1, "mb-4", 3, "diameter"], [1, "flex", "justify-center", "items-center", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]],
    template: function BookingModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header")(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 1)(5, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "event-form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, BookingModalComponent_div_11_Template, 5, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, BookingModalComponent_footer_13_Template, 3, 0, "footer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", (ctx.form == null ? null : ctx.form.value.id) ? "Edit" : "New", " Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("overflow-auto", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 8, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("pointer-events-none", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 10, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("form", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 12, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 14, ctx.loading));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _event_form_component__WEBPACK_IMPORTED_MODULE_4__.EventFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: ["main[_ngcontent-%COMP%] {\n                width: 32rem;\n                max-height: 65vh;\n                max-width: calc(100vw - 4rem);\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGF5LXZpZXcvYm9va2luZy1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQiw2QkFBNkI7WUFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMnJlbTtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2NXZoO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDRyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 78610:
/*!***************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/day-view.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayViewComponent: () => (/* binding */ DayViewComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/sidebar.component */ 42349);
/* harmony import */ var _dayview_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dayview-topbar.component */ 66186);
/* harmony import */ var _dayview_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dayview-timeline.component */ 50416);








const _c0 = ["app-dayview", ""];
class DayViewComponent {
  get links() {
    return this._settings.get('app.general.menu') || [];
  }
  constructor(_settings, _router) {
    this._settings = _settings;
    this._router = _router;
  }
  ngOnInit() {
    if (!this.links.find(_ => _.route.includes('day-view'))) {
      this._router.navigate([`/${this.links[0].route}`]);
    }
  }
  static #_ = this.ɵfac = function DayViewComponent_Factory(t) {
    return new (t || DayViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DayViewComponent,
    selectors: [["", "app-dayview", ""]],
    attrs: _c0,
    decls: 4,
    vars: 0,
    consts: [[1, "h-full"], [1, "relative", "overflow-hidden", "flex", "flex-col", "flex-1", "w-1/2", "h-full", "bg-base-200"]],
    template: function DayViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "dayview-topbar")(3, "dayview-timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_ui_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _dayview_topbar_component__WEBPACK_IMPORTED_MODULE_2__.DayviewTopbarComponent, _dayview_timeline_component__WEBPACK_IMPORTED_MODULE_3__.DayviewTimelineComponent],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGF5LXZpZXcvZGF5LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLFlBQVk7Z0JBQ1osV0FBVztZQUNmIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 77647:
/*!************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/day-view.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayViewModule: () => (/* binding */ DayViewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ui.module */ 97428);
/* harmony import */ var _day_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-view.component */ 78610);
/* harmony import */ var _dayview_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dayview-topbar.component */ 66186);
/* harmony import */ var _dayview_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dayview-timeline.component */ 50416);
/* harmony import */ var _dayview_space_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dayview-space.component */ 95049);
/* harmony import */ var _dayview_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dayview-event.component */ 98875);
/* harmony import */ var _booking_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking-modal.component */ 81241);
/* harmony import */ var _event_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event-form.component */ 66853);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @placeos/spaces */ 55322);
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @placeos/users */ 81239);
/* harmony import */ var _placeos_catering__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @placeos/catering */ 5039);
/* harmony import */ var _room_bookings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./room-bookings.component */ 16334);
/* harmony import */ var _room_timeline_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./room-timeline.component */ 27845);
/* harmony import */ var _room_approvals_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./room-approvals.component */ 46019);
/* harmony import */ var _new_dayview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./new-dayview.component */ 90578);
/* harmony import */ var apps_workplace_src_app_book_meeting_flow_meeting_form_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! apps/workplace/src/app/book/meeting-flow/meeting-form-details.component */ 59602);
/* harmony import */ var _event_book_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./event-book-modal.component */ 669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 61699);






















const ROUTES = [{
  path: '',
  component: _day_view_component__WEBPACK_IMPORTED_MODULE_1__.DayViewComponent
}, {
  path: 'new',
  component: _new_dayview_component__WEBPACK_IMPORTED_MODULE_14__.NewDayViewComponent
}];
class DayViewModule {
  static #_ = this.ɵfac = function DayViewModule_Factory(t) {
    return new (t || DayViewModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
    type: DayViewModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_8__.SharedSpacesModule, _placeos_users__WEBPACK_IMPORTED_MODULE_9__.SharedUsersModule, _placeos_catering__WEBPACK_IMPORTED_MODULE_10__.SharedCateringModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](DayViewModule, {
    declarations: [_day_view_component__WEBPACK_IMPORTED_MODULE_1__.DayViewComponent, _dayview_topbar_component__WEBPACK_IMPORTED_MODULE_2__.DayviewTopbarComponent, _dayview_timeline_component__WEBPACK_IMPORTED_MODULE_3__.DayviewTimelineComponent, _dayview_space_component__WEBPACK_IMPORTED_MODULE_4__.DayviewSpaceComponent, _dayview_event_component__WEBPACK_IMPORTED_MODULE_5__.DayviewEventComponent, _new_dayview_component__WEBPACK_IMPORTED_MODULE_14__.NewDayViewComponent, _booking_modal_component__WEBPACK_IMPORTED_MODULE_6__.BookingModalComponent, _event_form_component__WEBPACK_IMPORTED_MODULE_7__.EventFormComponent, _room_bookings_component__WEBPACK_IMPORTED_MODULE_11__.RoomBookingsComponent, _room_timeline_component__WEBPACK_IMPORTED_MODULE_12__.RoomBookingsTimelineComponent, _room_approvals_component__WEBPACK_IMPORTED_MODULE_13__.RoomBookingsApprovalsComponent, _event_book_modal_component__WEBPACK_IMPORTED_MODULE_16__.EventBookModalComponent, apps_workplace_src_app_book_meeting_flow_meeting_form_details_component__WEBPACK_IMPORTED_MODULE_15__.MeetingFormDetailsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_8__.SharedSpacesModule, _placeos_users__WEBPACK_IMPORTED_MODULE_9__.SharedUsersModule, _placeos_catering__WEBPACK_IMPORTED_MODULE_10__.SharedCateringModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule]
  });
})();

/***/ }),

/***/ 98875:
/*!********************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/dayview-event.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayviewEventComponent: () => (/* binding */ DayviewEventComponent)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 12687);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 58415);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 57016);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 8276);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/events */ 58908);
/* harmony import */ var _events_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-state.service */ 81143);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);











function DayviewEventComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("overflow-block absolute rounded overflow-hidden w-full " + ctx_r0.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("top", ctx_r0.overflow_top * 100 + "%")("height", ctx_r0.overflow_height * 100 + "%");
  }
}
function DayviewEventComponent_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.event.title, " ");
  }
}
function DayviewEventComponent_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.time, " ");
  }
}
function DayviewEventComponent_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r5.event.attendees.length, " Attendee", ctx_r5.event.attendees.length === 1 ? "" : "s", " ");
  }
}
function DayviewEventComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DayviewEventComponent_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.view(ctx_r6.event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DayviewEventComponent_div_2_div_3_Template, 4, 1, "div", 5)(4, DayviewEventComponent_div_2_div_4_Template, 4, 1, "div", 5)(5, DayviewEventComponent_div_2_div_5_Template, 4, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("absolute rounded overflow-hidden text-sm border border-base-200 shadow-sm z-10 hover:z-30 " + ctx_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("top", ctx_r1.top * 100 + "%")("height", ctx_r1.height * 100 + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.event.organiser == null ? null : ctx_r1.event.organiser.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.event.duration > 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.event.duration > 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.event.duration > 90);
  }
}
function DayviewEventComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "div")(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("top", ctx_r2.top * 100 + "%")("height", ctx_r2.height * 100 + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("icon flex items-center justify-center mr-2 text-3xl rounded h-12 w-12 text-pending " + ctx_r2.event.ext("cleaning_status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.event.ext("cleaning_status") === "done" ? "done" : "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r2.event.ext("cleaning_status") === "done" ? "Finished" : "Scheduled to", " clean at ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 9, ctx_r2.event.ext("cleaning_time") || ctx_r2.event.event_end * 1000, ctx_r2.time_format), " ");
  }
}
const DAY_IN_MINUTES = 24 * 60;
class DayviewEventComponent {
  get time() {
    const date = new Date(this.event.date);
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(date, this.time_format) + ' - ' + (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(date, this.event.duration), this.time_format);
  }
  get type() {
    return this.event.guests.length ? 'external' : this.event.status === 'declined' ? 'cancelled' : 'internal';
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _settings) {
    this._state = _state;
    this._settings = _settings;
    /** Top position for the event */
    this.top = -999;
    /** Height of the event on the calendar */
    this.height = 0;
    /** Top position for the event */
    this.overflow_top = -999;
    /** Height of the event on the calendar */
    this.overflow_height = 0;
    this.ui_options = this._state.options;
    this.view = e => this._state.setEvent(e);
  }
  ngOnChanges(changes) {
    if (changes.event && this.event) {
      const start = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(this.event.date));
      const diff = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(this.event.date), start);
      this.top = diff / DAY_IN_MINUTES;
      this.height = this.event.duration / DAY_IN_MINUTES;
      this.overflow_top = (diff - (this.event.setup_time || 0)) / DAY_IN_MINUTES;
      this.overflow_height = (this.event.duration + (this.event.setup_time || 0) + (this.event.breakdown_time || 0)) / DAY_IN_MINUTES;
    }
  }
  static #_ = this.ɵfac = function DayviewEventComponent_Factory(t) {
    return new (t || DayviewEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_events_state_service__WEBPACK_IMPORTED_MODULE_1__.EventsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DayviewEventComponent,
    selectors: [["dayview-event"]],
    inputs: {
      event: "event"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    decls: 5,
    vars: 7,
    consts: [[3, "class", "top", "height", 4, "ngIf"], ["event", "", "matRipple", "", 3, "class", "top", "height", "click", 4, "ngIf"], ["cleaning", "", "class", "absolute rounded overflow-hidden flex w-full shadow p-2 bg-base-100 z-20 hover:!h-48", 3, "top", "height", 4, "ngIf"], ["event", "", "matRipple", "", 3, "click"], [1, "px-2", "py-1", "font-medium"], ["class", "py-1 flex items-center", 4, "ngIf"], [1, "py-1", "flex", "items-center"], [1, "mx-2"], ["cleaning", "", 1, "absolute", "rounded", "overflow-hidden", "flex", "w-full", "shadow", "p-2", "bg-base-100", "z-20", "hover:!h-48"], [1, "flex-1", "w-1/2"]],
    template: function DayviewEventComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DayviewEventComponent_div_0_Template, 1, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DayviewEventComponent_div_2_Template, 6, 10, "div", 1)(3, DayviewEventComponent_div_3_Template, 7, 12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 3, ctx.ui_options)) == null ? null : tmp_0_0.show_overflow);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.event);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.event && ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, ctx.ui_options)) == null ? null : tmp_2_0.show_cleaning));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
    styles: ["[event][_ngcontent-%COMP%] {\n                background-color: #ccc;\n                width: 12rem;\n                z-index: 100;\n                transition: box-shadow 200ms;\n            }\n\n            [event][_ngcontent-%COMP%]:hover {\n                box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2),\n                    0 1px 1px 0 rgba(0, 0, 0, 0.14),\n                    0 2px 1px -1px rgba(0, 0, 0, 0.12) !important;\n                cursor: pointer;\n            }\n\n            .overflow-block[_ngcontent-%COMP%] {\n                opacity: 0.3;\n                width: 12rem;\n            }\n\n            .internal[_ngcontent-%COMP%] {\n                background-color: #1565c0;\n                color: #fff;\n            }\n\n            .icon[_ngcontent-%COMP%] {\n                background-color: #f0f0f0;\n            }\n\n            .icon.done[_ngcontent-%COMP%] {\n                color: #21a453;\n            }\n\n            .external[_ngcontent-%COMP%] {\n                background-color: #ad1457;\n                color: #fff;\n            }\n\n            .cancelled[_ngcontent-%COMP%] {\n                background-color: #ccc;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGF5LXZpZXcvZGF5dmlldy1ldmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLHNCQUFzQjtnQkFDdEIsWUFBWTtnQkFDWixZQUFZO2dCQUNaLDRCQUE0QjtZQUNoQzs7WUFFQTtnQkFDSTs7aUVBRWlEO2dCQUNqRCxlQUFlO1lBQ25COztZQUVBO2dCQUNJLFlBQVk7Z0JBQ1osWUFBWTtZQUNoQjs7WUFFQTtnQkFDSSx5QkFBeUI7Z0JBQ3pCLFdBQVc7WUFDZjs7WUFFQTtnQkFDSSx5QkFBeUI7WUFDN0I7O1lBRUE7Z0JBQ0ksY0FBYztZQUNsQjs7WUFFQTtnQkFDSSx5QkFBeUI7Z0JBQ3pCLFdBQVc7WUFDZjs7WUFFQTtnQkFDSSxzQkFBc0I7WUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIFtldmVudF0ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEycmVtO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbZXZlbnRdOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgICAgICAgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgICAgICAgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm92ZXJmbG93LWJsb2NrIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEycmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW50ZXJuYWwge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTY1YzA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaWNvbi5kb25lIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIxYTQ1MztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmV4dGVybmFsIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQxNDU3O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2FuY2VsbGVkIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 95049:
/*!********************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/dayview-space.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayviewSpaceComponent: () => (/* binding */ DayviewSpaceComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/spaces */ 55322);
/* harmony import */ var _events_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-state.service */ 81143);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _dayview_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dayview-event.component */ 98875);








function DayviewSpaceComponent_ng_container_0_dayview_event_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "dayview-event", 2);
  }
  if (rf & 2) {
    const event_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("event", event_r2);
  }
}
function DayviewSpaceComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DayviewSpaceComponent_ng_container_0_dayview_event_1_Template, 1, 1, "dayview-event", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r0.events));
  }
}
class DayviewSpaceComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  constructor(_state) {
    super();
    this._state = _state;
    /** List of events for the selected space */
    this.events = this._state.filtered.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(bookings => {
      return bookings.filter(bkn => bkn.resources.find(space => this.space.email === space.email));
    }));
  }
  ngOnInit() {
    this.subscription('events', this._state.filtered.subscribe());
  }
  static #_ = this.ɵfac = function DayviewSpaceComponent_Factory(t) {
    return new (t || DayviewSpaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_events_state_service__WEBPACK_IMPORTED_MODULE_1__.EventsStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DayviewSpaceComponent,
    selectors: [["dayview-space"]],
    inputs: {
      space: "space"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [3, "event", 4, "ngFor", "ngForOf"], [3, "event"]],
    template: function DayviewSpaceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DayviewSpaceComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.space);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _dayview_event_component__WEBPACK_IMPORTED_MODULE_3__.DayviewEventComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                position: relative;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGF5LXZpZXcvZGF5dmlldy1zcGFjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGtCQUFrQjtZQUN0QiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 50416:
/*!***********************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/dayview-timeline.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayviewTimelineComponent: () => (/* binding */ DayviewTimelineComponent)
/* harmony export */ });
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/ts-client */ 64331);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 85046);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 36520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 58175);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 680);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/spaces */ 55322);
/* harmony import */ var _events_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events-state.service */ 81143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ui_view_event_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/view-event-details.component */ 670);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ 78173);
/* harmony import */ var _dayview_space_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dayview-space.component */ 95049);














function DayviewTimelineComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const time_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("transform", "translateY(-" + ctx_r0.scroll.y + "px)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", time_r7, " ");
  }
}
function DayviewTimelineComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const space_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("transform", "translateX(-" + ctx_r1.scroll.x + "px)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", space_r8.display_name || space_r8.name, " ");
  }
}
function DayviewTimelineComponent_dayview_space_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "dayview-space", 21);
  }
  if (rf & 2) {
    const space_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("space", space_r9);
  }
}
function DayviewTimelineComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const i_r11 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("width", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 4, ctx_r4.space_list)) == null ? null : tmp_0_0.length) * 12 + "rem")("top", i_r11 * 4 + "rem");
  }
}
function DayviewTimelineComponent_mat_progress_bar_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-progress-bar", 23);
  }
}
function DayviewTimelineComponent_view_event_details_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "view-event-details", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("event", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx_r6.event));
  }
}
const HOUR_BLOCKS = new Array(24).fill(0).map((_, idx) => {
  return (idx % 12 === 0 ? 12 : idx % 12) + (idx >= 12 ? ' PM' : ' AM');
});
class DayviewTimelineComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  constructor(_org, _state) {
    super();
    this._org = _org;
    this._state = _state;
    /** Time blocks to display */
    this.blocks = HOUR_BLOCKS;
    /** Current scroll position of the content */
    this.scroll = {
      x: 0,
      y: 0
    };
    /** Whether event data is loading */
    this.loading = this._state.loading;
    /** Event to show more details about */
    this.event = this._state.event;
    this.spaces = this._org.active_building.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(_ => !!_), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(({
      id
    }) => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__.querySystems)({
      zone_id: id,
      limit: 1000
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)({
      data: []
    })))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(({
      data
    }) => data.map(_ => new _placeos_spaces__WEBPACK_IMPORTED_MODULE_3__.Space({
      ..._,
      level: this._org.levelWithID(_.zones)
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.shareReplay)(1));
    /** List of spaces to display */
    this.space_list = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this.spaces, this._state.zones]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(([spaces, zones]) => spaces.filter(space => !zones?.length || space.zones.find(z => zones.includes(z))) || []));
  }
  ngOnInit() {
    this._state.startPolling();
  }
  ngOnDestroy() {
    this._state.stopPolling();
  }
  onScroll(e) {
    requestAnimationFrame(() => this.scroll = {
      x: e.srcElement.scrollLeft,
      y: e.srcElement.scrollTop
    });
  }
  static #_ = this.ɵfac = function DayviewTimelineComponent_Factory(t) {
    return new (t || DayviewTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_events_state_service__WEBPACK_IMPORTED_MODULE_4__.EventsStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: DayviewTimelineComponent,
    selectors: [["dayview-timeline"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 19,
    vars: 14,
    consts: [[1, "absolute", "inset-0", "flex"], [1, "time", "h-full", "w-24", "overflow-hidden", "bg-base-100", "relative"], ["header", "", 1, "relative", "h-16", "z-50"], [1, "bg-base-100", "absolute", "top-0", "left-0", "right-0", "bottom-8"], ["change-transform", "", "class", "relative h-16 border-r border-base-300 z-10", 3, "transform", 4, "ngFor", "ngForOf"], [1, "absolute", "h-8", "w-px", "top-8", "right-0", "bg-base-300"], [1, "h-full", "flex-1", "flex", "flex-col", "w-1/2"], ["header", "", 1, "flex", "relative", "overflow-hidden", "border-b", "border-base-300", "border-opacity-50", "bg-base-100", "h-16", "w-full"], ["change-transform", "", "class", "relative h-16 w-48 min-w-[12rem]", 3, "transform", 4, "ngFor", "ngForOf"], ["content", "", 1, "relative", "flex", "flex-1", "overflow-auto", 3, "scroll"], ["scroll_el", ""], ["class", "w-48 min-w-[12rem] h-[96rem] border-r border-base-300", 3, "space", 4, "ngFor", "ngForOf"], ["class", "absolute bg-base-300 h-px min-w-full left-0", 3, "width", "top", 4, "ngFor", "ngForOf"], ["mode", "indeterminate", "class", "absolute bottom-0 left-0 right-0", 4, "ngIf"], [3, "event", 4, "ngIf"], ["change-transform", "", 1, "relative", "h-16", "border-r", "border-base-300", "z-10"], [1, "absolute", "text-center", "w-full", "text-xs", "top-0", "transform", "-translate-y-1/2", "opacity-40"], [1, "absolute", "h-px", "w-2", "top-0", "right-0", "bg-base-300"], ["change-transform", "", 1, "relative", "h-16", "w-48", "min-w-[12rem]"], ["bar", "", 1, "absolute", "h-8", "w-px", "bottom-0", "-left-px", "bg-base-300"], [1, "name", "m-2", "text-center"], [1, "w-48", "min-w-[12rem]", "h-[96rem]", "border-r", "border-base-300", 3, "space"], [1, "absolute", "bg-base-300", "h-px", "min-w-full", "left-0"], ["mode", "indeterminate", 1, "absolute", "bottom-0", "left-0", "right-0"], [3, "event"]],
    template: function DayviewTimelineComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, DayviewTimelineComponent_div_4_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, DayviewTimelineComponent_div_8_Template, 4, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("scroll", function DayviewTimelineComponent_Template_div_scroll_10_listener($event) {
          return ctx.onScroll($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, DayviewTimelineComponent_dayview_space_12_Template, 1, 1, "dayview-space", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, DayviewTimelineComponent_div_14_Template, 2, 6, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, DayviewTimelineComponent_mat_progress_bar_15_Template, 1, 0, "mat-progress-bar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, DayviewTimelineComponent_view_event_details_17_Template, 2, 3, "view-event-details", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.blocks);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 6, ctx.space_list));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 8, ctx.space_list));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.blocks);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 10, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 12, ctx.event));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _ui_view_event_details_component__WEBPACK_IMPORTED_MODULE_5__.ViewEventDetailsComponent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__.MatProgressBar, _dayview_space_component__WEBPACK_IMPORTED_MODULE_6__.DayviewSpaceComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                position: relative;\n                height: 100%;\n                width: 100%;\n            }\n\n            [change-transform][_ngcontent-%COMP%] {\n                will-change: transform;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGF5LXZpZXcvZGF5dmlldy10aW1lbGluZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGtCQUFrQjtnQkFDbEIsWUFBWTtnQkFDWixXQUFXO1lBQ2Y7O1lBRUE7Z0JBQ0ksc0JBQXNCO1lBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW2NoYW5nZS10cmFuc2Zvcm1dIHtcbiAgICAgICAgICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 66186:
/*!*********************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/dayview-topbar.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayviewTopbarComponent: () => (/* binding */ DayviewTopbarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 17627);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _events_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-state.service */ 81143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/date-options.component */ 11771);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ 59293);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);



















function DayviewTopbarComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", level_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", level_r3.display_name || level_r3.name, " ");
  }
}
function DayviewTopbarComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", type_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", type_r4.name, " ");
  }
}
function DayviewTopbarComponent_mat_slide_toggle_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-slide-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function DayviewTopbarComponent_mat_slide_toggle_15_Template_mat_slide_toggle_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.updateUIOptions({
        show_overflow: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Setup / Breakdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx_r2.ui_options)) == null ? null : tmp_0_0.show_overflow);
  }
}
const _c0 = () => ({
  class: "material-icons",
  content: "add"
});
class DayviewTopbarComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  updateUIOptions(options) {
    this._state.setUIOptions(options);
  }
  get allow_setup_breakdown() {
    return this._settings.get('app.events.allow_setup_breakdown');
  }
  constructor(_state, _org, _route, _router, _settings) {
    super();
    this._state = _state;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this._settings = _settings;
    /** List of selected levels */
    this.zones = [];
    this.types = [{
      id: 'internal',
      name: 'Internal'
    }, {
      id: 'external',
      name: 'External'
    }, {
      id: 'cancelled',
      name: 'Cancelled'
    }];
    /** List of selected types */
    this.type_list = this.types.map(i => `${i.id}`);
    /** List of levels for the active building */
    this.levels = this._org.active_levels;
    /** List of levels for the active building */
    this.ui_options = this._state.options;
    /** Set filtered date */
    this.setDate = d => this._state.setDate(d);
    /**  */
    this.newBooking = d => this._state.newBooking(d);
    /** List of levels for the active building */
    this.updateZones = z => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          zone_ids: z.join(',')
        }
      });
      this._state.setZones(z);
    };
    /** List of levels for the active building */
    this.updateTypes = types => this._state.setFilters({
      hide_type: this.types.reduce((list, item) => {
        !types.includes(item.id) ? list.push(item) : '';
        return list;
      }, [])
    });
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.first)(_ => _)).toPromise();
      _this.subscription('route.query', _this._route.queryParamMap.subscribe(params => {
        if (params.has('zone_ids')) {
          const zones = params.get('zone_ids').split(',');
          if (zones.length) {
            _this.zones = zones;
            const level = _this._org.levelWithID(zones);
            if (!level) return;
            _this._org.building = _this._org.buildings.find(bld => bld.id === level.parent_id);
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
      _this.updateTypes(_this.type_list);
    })();
  }
  static #_ = this.ɵfac = function DayviewTopbarComponent_Factory(t) {
    return new (t || DayviewTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_events_state_service__WEBPACK_IMPORTED_MODULE_3__.EventsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: DayviewTopbarComponent,
    selectors: [["dayview-topbar"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 18,
    vars: 9,
    consts: [[1, "flex", "items-center", "px-4", "h-20", "bg-base-100", "border-b", "border-base-200"], ["btn", "", "matRipple", "", "new", "", 1, "w-12", "xl:w-auto", "overflow-hidden", 3, "click"], [1, "flex", "items-center"], [1, "mr-2", 3, "icon"], [1, "hidden", "xl:block"], ["appearance", "outline"], ["multiple", "", "placeholder", "All Levels", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["multiple", "", "placeholder", "No Events", 3, "ngModel", "ngModelChange"], ["class", "m-2", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "flex-1", "w-0"], [3, "dateChange"], [3, "value"], [1, "m-2", 3, "ngModel", "ngModelChange"], [1, "text-xs"]],
    template: function DayviewTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DayviewTopbarComponent_Template_button_click_1_listener() {
          return ctx.newBooking();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "New Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-form-field", 5)(7, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function DayviewTopbarComponent_Template_mat_select_ngModelChange_7_listener($event) {
          return ctx.zones = $event;
        })("ngModelChange", function DayviewTopbarComponent_Template_mat_select_ngModelChange_7_listener($event) {
          return ctx.updateZones($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, DayviewTopbarComponent_mat_option_8_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-form-field", 5)(11, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function DayviewTopbarComponent_Template_mat_select_ngModelChange_11_listener($event) {
          return ctx.type_list = $event;
        })("ngModelChange", function DayviewTopbarComponent_Template_mat_select_ngModelChange_11_listener($event) {
          return ctx.updateTypes($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-select-trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, DayviewTopbarComponent_mat_option_14_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, DayviewTopbarComponent_mat_slide_toggle_15_Template, 4, 3, "mat-slide-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "date-options", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateChange", function DayviewTopbarComponent_Template_date_options_dateChange_17_listener($event) {
          return ctx.setDate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.zones);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 6, ctx.levels));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.type_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.allow_setup_breakdown);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ui_date_options_component__WEBPACK_IMPORTED_MODULE_4__.DateOptionsComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__.MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
    styles: ["button[_ngcontent-%COMP%] {\n                min-width: 0;\n                padding: 0 0.85rem;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n                margin-left: 1em;\n            }\n\n            mat-slide-toggle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n                width: 5.5em;\n                white-space: initial;\n                line-height: 1.2em;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGF5LXZpZXcvZGF5dmlldy10b3BiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxZQUFZO2dCQUNaLGtCQUFrQjtZQUN0Qjs7WUFFQTtnQkFDSSxjQUFjO2dCQUNkLFVBQVU7Z0JBQ1YsZ0JBQWdCO1lBQ3BCOztZQUVBO2dCQUNJLFlBQVk7Z0JBQ1osb0JBQW9CO2dCQUNwQixrQkFBa0I7WUFDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC44NXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMy4yNWVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4ZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LXNsaWRlLXRvZ2dsZSBkaXYge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1LjVlbTtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 66853:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/event-form.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventFormComponent: () => (/* binding */ EventFormComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var libs_catering_src_lib_catering_order_modal_catering_order_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/catering/src/lib/catering-order-modal/catering-order-state.service */ 679);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 70462);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 15746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _libs_form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/date-field.component */ 46362);
/* harmony import */ var _libs_form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/duration-field.component */ 28442);
/* harmony import */ var _libs_form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/time-field.component */ 59590);
/* harmony import */ var _libs_form_fields_src_lib_user_list_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/user-list-field.component */ 24741);
/* harmony import */ var _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/user-search-field.component */ 20576);
/* harmony import */ var _libs_form_fields_src_lib_space_list_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/space-list-field.component */ 15021);
/* harmony import */ var _libs_assets_src_lib_asset_list_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/assets/src/lib/asset-list-field.component */ 33243);
/* harmony import */ var _libs_catering_src_lib_catering_list_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/catering/src/lib/catering-list-field.component */ 83585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 21916);


























function EventFormComponent_form_0_mat_checkbox_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "FORM.ALL_DAY"), " ");
  }
}
const _c0 = () => ({
  standalone: true
});
function EventFormComponent_form_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 20)(1, "div", 11)(2, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Start Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "a-time-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function EventFormComponent_form_0_div_19_Template_a_time_field_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.form.patchValue({
        date: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 11)(9, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "a-duration-field", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r2.form.get("date").value)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](5, _c0))("use_24hr", ctx_r2.use_24hr_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("time", ctx_r2.form.controls == null ? null : ctx_r2.form.controls.date == null ? null : ctx_r2.form.controls.date.value)("use_24hr", ctx_r2.use_24hr_time);
  }
}
function EventFormComponent_form_0_div_41_mat_form_field_4_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const code_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", code_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", code_r11, " ");
  }
}
function EventFormComponent_form_0_div_41_mat_form_field_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-form-field", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("openedChange", function EventFormComponent_form_0_div_41_mat_form_field_4_Template_mat_form_field_openedChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r12.focusInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-select", 37)(2, "input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function EventFormComponent_form_0_div_41_mat_form_field_4_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r14.code_filter.next($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, EventFormComponent_form_0_div_41_mat_form_field_4_mat_option_5_Template, 2, 2, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " Catering charge code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r7.code_filter.getValue())("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 3, ctx_r7.filtered_codes));
  }
}
function EventFormComponent_form_0_div_41_mat_form_field_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "textarea", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Catering Order notes are required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("mt-2", !_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, (ctx_r8.form.value.catering == null ? null : ctx_r8.form.value.catering.length) && ctx_r8.has_codes));
  }
}
const _c1 = (a0, a1, a2, a3) => ({
  date: a0,
  duration: a1,
  all_day: a2,
  zone_id: a3
});
function EventFormComponent_form_0_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 31)(1, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Catering:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "catering-list-field", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, EventFormComponent_form_0_div_41_mat_form_field_4_Template, 9, 6, "mat-form-field", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EventFormComponent_form_0_div_41_mat_form_field_6_Template, 5, 4, "mat-form-field", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction4"](5, _c1, ctx_r3.form.value.date, ctx_r3.form.value.duration, ctx_r3.form.value.all_day, ctx_r3.form.value.resources[0] == null ? null : ctx_r3.form.value.resources[0].level == null ? null : ctx_r3.form.value.resources[0].level.parent_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 3, (ctx_r3.form.value.catering == null ? null : ctx_r3.form.value.catering.length) && ctx_r3.has_codes));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.form.value.catering == null ? null : ctx_r3.form.value.catering.length);
  }
}
function EventFormComponent_form_0_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 45)(1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Assets:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "asset-list-field", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("date", ctx_r4.form.value.date)("duration", ctx_r4.form.value.duration);
  }
}
const _c2 = () => [5, 10];
function EventFormComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 1)(1, "div", 2)(2, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "A valid title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 6)(12, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "a-date-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, EventFormComponent_form_0_mat_checkbox_18_Template, 3, 3, "mat-checkbox", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, EventFormComponent_form_0_div_19_Template, 15, 6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 11)(21, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Host");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "a-user-search-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 11)(28, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Attendees");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](33, "a-user-list-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 11)(35, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "Space");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](40, "space-list-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](41, EventFormComponent_form_0_div_41_Template, 7, 10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](42, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, EventFormComponent_form_0_div_43_Template, 4, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 20)(45, "div", 21)(46, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Setup Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](48, "a-duration-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 21)(50, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "Breakdown Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](52, "a-duration-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.allow_all_day);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.form.value.all_day);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](42, 9, ctx_r0.has_catering) && ctx_r0.form.contains("catering"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.has_assets);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("min", 0)("custom_options", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](11, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("min", 0)("custom_options", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](12, _c2));
  }
}
class EventFormComponent {
  get allow_all_day() {
    return !!this._settings.get('app.events.allow_all_day');
  }
  get has_assets() {
    return !!this._settings.get('app.events.has_assets');
  }
  get use_24hr_time() {
    return this._settings.get('app.use_24_hour_time');
  }
  constructor(_dialog, _settings, _catering) {
    this._dialog = _dialog;
    this._settings = _settings;
    this._catering = _catering;
    this.code_filter = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject('');
    this.has_catering = this._catering.available_menu.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(l => l.length > 0));
    this.has_codes = this._catering.charge_codes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(l => l.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(has_codes => {
      if (!has_codes) {
        this.form.get('catering_charge_code').setValidators([]);
        this.form.updateValueAndValidity();
      }
    }));
    this.filtered_codes = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this.code_filter, this._catering.charge_codes]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(([s, l]) => l.filter(_ => _.toLowerCase().includes(s.toLowerCase()))));
  }
  static #_ = this.ɵfac = function EventFormComponent_Factory(t) {
    return new (t || EventFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](libs_catering_src_lib_catering_order_modal_catering_order_state_service__WEBPACK_IMPORTED_MODULE_1__.CateringOrderStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: EventFormComponent,
    selectors: [["event-form"]],
    inputs: {
      form: "form"
    },
    decls: 1,
    vars: 1,
    consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "flex", "flex-col"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "title", "formControlName", "title", "placeholder", "Meeting Title"], [1, "flex", "flex-col", "relative"], ["for", "date"], ["name", "date", "formControlName", "date"], ["formControlName", "all_day", "class", "absolute -top-2 right-0", 4, "ngIf"], ["class", "flex space-x-2", 4, "ngIf"], [1, "flex", "flex-col", "flex-1"], ["for", "organiser"], ["name", "organiser", "formControlName", "organiser"], ["for", "attendees"], ["name", "attendees", "formControlName", "attendees"], ["for", "space"], ["formControlName", "resources", 1, "w-full"], ["class", "py-2", 4, "ngIf"], ["class", "flex flex-col flex-1 mb-4", 4, "ngIf"], [1, "flex", "space-x-2"], [1, "flex", "flex-col", "space-y-2", "flex-1"], ["for", "setup"], ["name", "setup", "formControlName", "setup_time", 3, "min", "custom_options"], ["for", "breakdown"], ["name", "breakdown", "formControlName", "breakdown_time", 3, "min", "custom_options"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-0"], ["for", "start-time"], ["name", "start-time", 3, "ngModel", "ngModelOptions", "use_24hr", "ngModelChange"], ["for", "duration"], ["name", "duration", "formControlName", "duration", 3, "time", "use_24hr"], [1, "py-2"], ["for", "catering"], ["name", "catering", "formControlName", "catering", 3, "options"], ["appearance", "outline", "class", "w-full mt-2", 3, "openedChange", 4, "ngIf"], ["appearance", "outline", "class", "w-full", 3, "mt-2", 4, "ngIf"], ["appearance", "outline", 1, "w-full", "mt-2", 3, "openedChange"], ["formControlName", "catering_charge_code", "placeholder", "Charge Code"], ["placeholder", "Search charge codes...", 1, "sticky", "top-0", "bg-base-100", "px-4", "py-3", "text-base", "border-x-0", "border-t-0", "border-b", "focus:border-b", "border-base-200", "w-full", "rounded-none", "z-50", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["input", ""], [1, "hidden"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "catering_notes", "placeholder", "Extra catering details..."], [1, "flex", "flex-col", "flex-1", "mb-4"], ["formControlName", "assets", 3, "date", "duration"]],
    template: function EventFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, EventFormComponent_form_0_Template, 53, 13, "form", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.form);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _libs_form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_2__.DateFieldComponent, _libs_form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_3__.DurationFieldComponent, _libs_form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_4__.TimeFieldComponent, _libs_form_fields_src_lib_user_list_field_component__WEBPACK_IMPORTED_MODULE_5__.UserListFieldComponent, _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_6__.UserSearchFieldComponent, _libs_form_fields_src_lib_space_list_field_component__WEBPACK_IMPORTED_MODULE_7__.SpaceListFieldComponent, _libs_assets_src_lib_asset_list_field_component__WEBPACK_IMPORTED_MODULE_8__.AssetListFieldComponent, _libs_catering_src_lib_catering_list_field_component__WEBPACK_IMPORTED_MODULE_9__.CateringListFieldComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe]
  });
}

/***/ }),

/***/ 90578:
/*!******************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/new-dayview.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewDayViewComponent: () => (/* binding */ NewDayViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/app-topbar.component */ 33005);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 19842);
/* harmony import */ var _room_bookings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-bookings.component */ 16334);




const _c0 = ["app-new-dayview", ""];
class NewDayViewComponent {
  static #_ = this.ɵfac = function NewDayViewComponent_Factory(t) {
    return new (t || NewDayViewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NewDayViewComponent,
    selectors: [["", "app-new-dayview", ""]],
    attrs: _c0,
    decls: 5,
    vars: 0,
    consts: [[1, "flex", "flex-1", "h-px"], [1, "relative", "flex", "flex-col", "flex-1", "w-1/2", "h-full"]],
    template: function NewDayViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "room-bookings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__.ApplicationTopbarComponent, _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.ApplicationSidebarComponent, _room_bookings_component__WEBPACK_IMPORTED_MODULE_2__.RoomBookingsComponent],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGF5LXZpZXcvbmV3LWRheXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsWUFBWTtnQkFDWixXQUFXO2dCQUNYLDJCQUEyQjtZQUMvQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYjEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 46019:
/*!*********************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/room-approvals.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomBookingsApprovalsComponent: () => (/* binding */ RoomBookingsApprovalsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _events_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-state.service */ 81143);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 64331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/authenticated-image.directive */ 75142);
/* harmony import */ var _libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/spaces/src/lib/space.pipe */ 60942);













function RoomBookingsApprovalsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "No pending requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function RoomBookingsApprovalsComponent_div_14_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "space");
  }
  if (rf & 2) {
    const event_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("source", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, event_r4.resources[0] == null ? null : event_r4.resources[0].email))) == null ? null : tmp_0_0.images[0]);
  }
}
function RoomBookingsApprovalsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, RoomBookingsApprovalsComponent_div_14_img_7_Template, 3, 5, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 16)(9, "div", 17)(10, "app-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "space");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "space");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 16)(19, "div", 17)(20, "app-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 20)(25, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoomBookingsApprovalsComponent_div_14_Template_button_click_25_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const event_r4 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.approve(event_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "app-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoomBookingsApprovalsComponent_div_14_Template_button_click_30_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const event_r4 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.reject(event_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "app-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const event_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](event_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 9, event_r4.date, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", event_r4.resources.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ((tmp_3_0 = event_r4.resources.length && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 12, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 14, event_r4.resources[0] == null ? null : event_r4.resources[0].email))) == null ? null : tmp_3_0.display_name) || ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 16, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 18, event_r4.resources[0] == null ? null : event_r4.resources[0].email))) == null ? null : tmp_3_0.name) || "No Location", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (event_r4.organiser == null ? null : event_r4.organiser.name) || event_r4.host, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.status[event_r4.id] === "accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.status[event_r4.id] === "accept" ? "Approved" : "Approve", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.status[event_r4.id] === "decline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.status[event_r4.id] === "decline" ? "Declined" : "Decline", " ");
  }
}
function RoomBookingsApprovalsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 27)(2, "mat-spinner", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Processing...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function RoomBookingsApprovalsComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoomBookingsApprovalsComponent_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.show = !ctx_r10.show);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
class RoomBookingsApprovalsComponent {
  constructor(_state, _org) {
    this._state = _state;
    this._org = _org;
    this.show = true;
    this.loading = false;
    this.status = {};
    this.pending = this._state.pending;
  }
  approve(event) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const system_id = _this._org.binding('approvals');
      if (!system_id) return;
      const mod = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.getModule)(system_id, 'RoomBookingApproval', 1);
      if (!mod) return;
      _this.loading = true;
      yield mod.execute('accept_event', [event.mailbox, event.id]).catch();
      _this.loading = false;
      _this.status[event.id] = 'accept';
    })();
  }
  reject(event) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const system_id = _this2._org.binding('approvals');
      if (!system_id) return;
      const mod = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.getModule)(system_id, 'RoomBookingApproval', 1);
      if (!mod) return;
      _this2.loading = true;
      yield mod.execute('decline_event', [event.mailbox, event.id]).catch();
      _this2.loading = false;
      _this2.status[event.id] = 'decline';
    })();
  }
  static #_ = this.ɵfac = function RoomBookingsApprovalsComponent_Factory(t) {
    return new (t || RoomBookingsApprovalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_events_state_service__WEBPACK_IMPORTED_MODULE_1__.EventsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: RoomBookingsApprovalsComponent,
    selectors: [["room-bookings-approvals"]],
    decls: 18,
    vars: 13,
    consts: [[1, "flex", "flex-col", "h-full", "overflow-hidden", "border-l", "border-base-200"], [1, "flex", "items-center", "p-2", "border-b", "border-base-200", "space-x-2"], ["btn", "", "icon", "", "matRipple", "", 1, "bg-base-200", 3, "click"], [1, "flex-1"], ["btn", "", "icon", "", "matRipple", ""], [1, "flex-1", "overflow-auto", "p-2", "space-y-2"], ["class", "w-full h-full flex flex-col items-center justify-center space-y-2", 4, "ngIf"], ["class", "relative border border-base-200 p-2 w-full rounded", 4, "ngFor", "ngForOf"], ["class", "absolute bottom-0 left-0 right-0 top-14 p-2 flex flex-col items-center justify-center space-y-2", 4, "ngIf"], ["btn", "", "icon", "", "matRipple", "", "class", "bg-warning absolute top-2 -left-8 shadow text-warning-content", 3, "click", 4, "ngIf"], [1, "w-full", "h-full", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], ["src", "assets/icons/no-pending.svg"], [1, "relative", "border", "border-base-200", "p-2", "w-full", "rounded"], [1, "opacity-30", "text-xs", "mb-2"], [1, "w-64", "h-32", "overflow-hidden", "mb-2", "bg-base-200"], ["auth", "", "class", "object-cover min-w-full min-h-full", 3, "source", 4, "ngIf"], [1, "flex", "items-center", "space-x-2", "mb-2"], [1, "h-8", "w-8", "bg-base-200", "rounded-full", "flex", "items-center", "justify-center"], [1, "text-xl"], [1, "flex-1", "text-xs"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "border-success", "bg-success-light", "text-black", "flex", "flex-1", "items-center", "space-x-2", 3, "disabled", "click"], [1, "text-success"], ["btn", "", "matRipple", "", 1, "border-error", "bg-error-light", "text-black", "flex", "flex-1", "items-center", "space-x-2", 3, "disabled", "click"], [1, "text-error"], ["auth", "", 1, "object-cover", "min-w-full", "min-h-full", 3, "source"], [1, "absolute", "bottom-0", "left-0", "right-0", "top-14", "p-2", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "absolute", "inset-0", "bg-base-100", "opacity-80", "z-0"], ["diameter", "32"], [1, "relative", "z-10"], ["btn", "", "icon", "", "matRipple", "", 1, "bg-warning", "absolute", "top-2", "-left-8", "shadow", "text-warning-content", 3, "click"]],
    template: function RoomBookingsApprovalsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoomBookingsApprovalsComponent_Template_button_click_2_listener() {
          return ctx.show = !ctx.show;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 4)(9, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, RoomBookingsApprovalsComponent_div_12_Template, 4, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, RoomBookingsApprovalsComponent_div_14_Template, 35, 20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, RoomBookingsApprovalsComponent_div_16_Template, 5, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, RoomBookingsApprovalsComponent_button_17_Template, 3, 0, "button", 9);
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("width", ctx.show ? "" : "0px");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Pending Approval (", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 7, ctx.pending)) == null ? null : tmp_1_0.length) || "0", ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 9, ctx.pending)) == null ? null : tmp_2_0.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 11, ctx.pending));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.show);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_5__.AuthenticatedImageDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_6__.SpacePipe],
    styles: ["[_nghost-%COMP%] {\n                display: block;\n                position: relative;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGF5LXZpZXcvcm9vbS1hcHByb3ZhbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxjQUFjO2dCQUNkLGtCQUFrQjtnQkFDbEIsWUFBWTtZQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 16334:
/*!********************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/room-bookings.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomBookingsComponent: () => (/* binding */ RoomBookingsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _events_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events-state.service */ 81143);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 46939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ 59293);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _room_timeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./room-timeline.component */ 27845);
/* harmony import */ var _room_approvals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./room-approvals.component */ 46019);






















function RoomBookingsComponent_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", level_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", level_r6.display_name || level_r6.name, " ");
  }
}
function RoomBookingsComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-slide-toggle", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RoomBookingsComponent_ng_container_15_Template_mat_slide_toggle_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.updateUIOptions({
        show_overflow: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Setup / Breakdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, ctx_r1.ui_options)) == null ? null : tmp_0_0.show_overflow);
  }
}
function RoomBookingsComponent_mat_checkbox_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RoomBookingsComponent_mat_checkbox_26_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const type_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.setFilter(type_r9.id, !$event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", !ctx_r3.type_list.includes(type_r9.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", type_r9.name, " ");
  }
}
function RoomBookingsComponent_ng_container_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoomBookingsComponent_ng_container_27_div_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const type_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.setFilter(type_r12.id, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const type_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", type_r12.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](type_r12.name);
  }
}
function RoomBookingsComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RoomBookingsComponent_ng_container_27_div_1_Template, 7, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const type_r12 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r4.type_list.includes(type_r12.id));
  }
}
function RoomBookingsComponent_room_bookings_approvals_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "room-bookings-approvals");
  }
}
const EMPTY = [];
class RoomBookingsComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_3__.AsyncHandler {
  get type_list() {
    return this._state.filters.hide_type || EMPTY;
  }
  get has_approvals() {
    return this._org.binding('approvals');
  }
  get allow_setup_breakdown() {
    return this._settings.get('app.events.allow_setup_breakdown');
  }
  constructor(_org, _state, _router, _route, _settings) {
    super();
    this._org = _org;
    this._state = _state;
    this._router = _router;
    this._route = _route;
    this._settings = _settings;
    this.zones = this._state.zones;
    this.ui_options = this._state.options;
    /** List of levels for the active building */
    this.levels = this._org.active_levels;
    /** List of levels for the active building */
    this.updateZones = z => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          zone_ids: z.join(',')
        }
      });
      this._state.setZones(z);
    };
    this.updateUIOptions = o => this._state.setUIOptions(o);
    /**  */
    this.newBooking = d => this._state.newBooking(d);
    this.types = [{
      id: 'internal',
      name: 'Internal',
      color: '#D81B60'
    }, {
      id: 'external',
      name: 'External',
      color: '#1E88E5'
    }, {
      id: 'cancelled',
      name: 'Cancelled',
      color: '#eeeeee'
    }];
  }
  ngOnInit() {
    var _this = this;
    this.subscription('route.query', this._route.queryParamMap.subscribe(params => {
      if (params.has('zone_ids')) {
        const zones = params.get('zone_ids').split(',');
        if (zones.length) {
          const level = this._org.levelWithID(zones);
          if (!level) return;
          this._org.building = this._org.buildings.find(bld => bld.id === level.parent_id);
        }
      }
    }));
    this.subscription('levels', this._org.active_levels.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (levels) {
        const zones = (yield _this.zones.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).toPromise()).filter(zone => levels.find(lvl => lvl.id === zone));
        if (!zones.length && levels.length) {
          zones.push(levels[0].id);
        }
        _this.updateZones(zones);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()));
  }
  setFilter(id, value) {
    const filters = this._state.filters;
    let hide_type = filters.hide_type || [];
    hide_type = hide_type.filter(i => i !== id);
    if (value) hide_type.push(id);
    this._state.setFilters({
      hide_type
    });
  }
  static #_ = this.ɵfac = function RoomBookingsComponent_Factory(t) {
    return new (t || RoomBookingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_1__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_events_state_service__WEBPACK_IMPORTED_MODULE_2__.EventsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_3__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: RoomBookingsComponent,
    selectors: [["room-bookings"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 31,
    vars: 11,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col", "overflow-hidden", "pl-8"], [1, "flex", "items-center", "justify-between", "w-full", "py-4", "pr-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 1, "space-x-2", 3, "click"], [1, "w-full", "flex", "items-center"], ["appearance", "outline", 1, "h-[3.5rem]"], ["multiple", "", "placeholder", "All Levels", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "border-l", "h-full", "ml-8", "mr-4"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "inverse", 3, "matMenuTriggerFor"], [1, "mx-2"], [1, ""], ["menu", "matMenu"], [1, "flex", "flex-col", "space-y-2", "overflow-hidden", "w-48"], [3, "ngModel", "ngModelChange", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "flex", "w-full", "flex-1", "h-px", "border-t", "mt-4", "border-base-200"], [1, "flex-1"], [3, "value"], [1, "m-2", 3, "ngModel", "ngModelChange"], [1, "text-xs"], [3, "ngModel", "ngModelChange"], ["class", "flex items-center border border-base-200 rounded-3xl", 4, "ngIf"], [1, "flex", "items-center", "border", "border-base-200", "rounded-3xl"], [1, "h-4", "w-4", "m-2", "rounded-full"], ["icon", "", "matRipple", "", 3, "click"]],
    template: function RoomBookingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Room Bookings");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoomBookingsComponent_Template_button_click_4_listener() {
          return ctx.newBooking();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "New Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 4)(10, "mat-form-field", 5)(11, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RoomBookingsComponent_Template_mat_select_ngModelChange_11_listener($event) {
          return ctx.updateZones($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, RoomBookingsComponent_mat_option_13_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, RoomBookingsComponent_ng_container_15_Template, 6, 3, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 10)(18, "button", 11)(19, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "filter_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-menu", 13, 14)(25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, RoomBookingsComponent_mat_checkbox_26_Template, 2, 2, "mat-checkbox", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, RoomBookingsComponent_ng_container_27_Template, 2, 1, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "room-bookings-timeline", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, RoomBookingsComponent_room_bookings_approvals_30_Template, 1, 0, "room-bookings-approvals", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 7, ctx.zones));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 9, ctx.levels));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.allow_setup_breakdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.has_approvals);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckbox, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__.MatSlideToggle, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _room_timeline_component__WEBPACK_IMPORTED_MODULE_5__.RoomBookingsTimelineComponent, _room_approvals_component__WEBPACK_IMPORTED_MODULE_6__.RoomBookingsApprovalsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe]
  });
}

/***/ }),

/***/ 27845:
/*!********************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/room-timeline.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomBookingsTimelineComponent: () => (/* binding */ RoomBookingsTimelineComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 55702);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 77393);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 14562);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 12687);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 8276);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 57016);
/* harmony import */ var _events_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-state.service */ 81143);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 680);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/events */ 58908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/date-options.component */ 11771);















const _c0 = ["scroll_container"];
function RoomBookingsTimelineComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Today ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function RoomBookingsTimelineComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const space_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", space_r9.display_name || space_r9.name, " ");
  }
}
function RoomBookingsTimelineComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const value_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.formatHour(value_r10), " ");
  }
}
function RoomBookingsTimelineComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 29);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("top", ctx_r3.timeToOffset(ctx_r3.now) + "px");
  }
}
function RoomBookingsTimelineComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 30);
  }
}
function RoomBookingsTimelineComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 31);
  }
}
function RoomBookingsTimelineComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("top", ctx_r6.timeToOffset(ctx_r6.now) - ctx_r6.offset_y - (48 - ctx_r6.offset_y % 48) + 48 + "px");
  }
}
function RoomBookingsTimelineComponent_ng_container_32_ng_container_1_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function RoomBookingsTimelineComponent_ng_container_32_ng_container_1_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const event_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("bg-secondary", event_r16.status !== "cancelled")("bg-error", event_r16.status === "cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("opacity-60", event_r16.status === "cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", event_r16.all_day ? "All Day" : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 11, event_r16.date, ctx_r19.time_format), " \u2013 ", (event_r16.organiser == null ? null : event_r16.organiser.name) || event_r16.hjost, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("opacity-60", event_r16.status === "cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", event_r16.title, " ");
  }
}
function RoomBookingsTimelineComponent_ng_container_32_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RoomBookingsTimelineComponent_ng_container_32_ng_container_1_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);
      const event_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const space_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.viewEvent(event_r16, space_r13.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, RoomBookingsTimelineComponent_ng_container_32_ng_container_1_div_1_ng_container_2_Template, 2, 0, "ng-container", 37)(3, RoomBookingsTimelineComponent_ng_container_32_ng_container_1_div_1_ng_container_3_Template, 7, 14, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const event_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("left", i_r14 * 14 + 0.125 + "rem")("top", ctx_r17.timeToOffset(event_r16.date) + "px")("height", ctx_r17.endToOffset(event_r16.duration) + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("pointer-events-none", event_r16.is_system_event);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("opacity-60", event_r16.state === "done")("!rounded-none", event_r16.is_system_event)("!border-secondary", event_r16.is_system_event);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", event_r16.is_system_event);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !event_r16.is_system_event);
  }
}
function RoomBookingsTimelineComponent_ng_container_32_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RoomBookingsTimelineComponent_ng_container_32_ng_container_1_div_1_Template, 4, 16, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const event_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !event_r16.is_system_event || ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r15.ui_options)) == null ? null : tmp_0_0.show_overflow));
  }
}
const _c1 = () => [];
function RoomBookingsTimelineComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RoomBookingsTimelineComponent_ng_container_32_ng_container_1_Template, 3, 3, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const space_r13 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r8.events)[space_r13.id] || _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c1));
  }
}
class RoomBookingsTimelineComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  get now() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(Date.now()).valueOf();
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _dialog, _settings) {
    super();
    this._state = _state;
    this._dialog = _dialog;
    this._settings = _settings;
    this.offset_x = 0;
    this.offset_y = 0;
    this.w_slots = [];
    this.h_slots = [];
    this.hours = Array.from({
      length: 24
    }, (_, i) => i);
    this.ui_options = this._state.options;
    this.spaces = this._state.spaces;
    this.date = this._state.date;
    this.is_today = this.date.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(d => (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(d, Date.now())));
    this.events = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this._state.spaces, this._state.filtered]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([spaces, events]) => {
      const map = {};
      for (const space of spaces) {
        map[space.id] = events.filter(event => event.resources.find(item => item.id === space.id || item.email === space.email) || event.system?.id === space.id || event.system?.email === space.email);
      }
      return map;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.shareReplay)(1));
    this.edit = e => this._state.newBooking(e);
    this.setDate = d => this._state.setDate(d);
  }
  formatHour(hour) {
    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(Date.now(), hour);
    return this._settings.get('app.use_24_hour_time') ? (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(date, 'HH:00') : (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(date, 'h a');
  }
  ngOnInit() {
    this.subscription('poll', this._state.startPolling());
    this.interval('scroll', () => this.onScroll(), 1000);
    const date = Date.now();
    this.onResize();
  }
  timeToOffset(date) {
    const diff = (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(date, (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(date));
    return Math.max(0, diff / 60) * 48;
  }
  endToOffset(duration) {
    return Math.min(24, duration / 60) * 48;
  }
  onResize() {
    const w_slots = Math.floor(window.innerWidth / 224) + 1;
    const h_slots = Math.floor(window.innerHeight / 48);
    this.w_slots = Array.from({
      length: w_slots
    }, (_, i) => i);
    this.h_slots = Array.from({
      length: h_slots
    }, (_, i) => i);
  }
  onScroll() {
    this.offset_x = this._scroll_container.nativeElement.scrollLeft;
    this.offset_y = this._scroll_container.nativeElement.scrollTop;
  }
  viewEvent(event, space_id) {
    var _this = this;
    if (event.is_system_event) return;
    const ref = this._dialog.open(_placeos_events__WEBPACK_IMPORTED_MODULE_3__.EventDetailsModalComponent, {
      data: event
    });
    ref.componentInstance.hide_edit = !this._settings.get('app.events.allow_edit');
    this.subscription('remove', ref.componentInstance.remove.subscribe(() => this.remove(event, space_id)));
    this.subscription('edit', ref.componentInstance.edit.subscribe(() => this.edit(event)));
    this.subscription('actions', ref.componentInstance.action.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (action) {
        if (!action.includes('breakdown')) return;
        const ref = _this._dialog.open(_placeos_events__WEBPACK_IMPORTED_MODULE_3__.SetupBreakdownModalComponent, {
          data: event
        });
        const data = yield ref.afterClosed().toPromise();
        if (data) _this._state.replace(data);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()));
  }
  remove(item, space_id) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const time = `${(0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(item.date, 'dd MMM yyyy ' + _this2.time_format)}`;
      const resource_name = item.space?.display_name;
      const content = `Delete the booking for ${resource_name} at ${time}`;
      const resp = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.openConfirmModal)({
        title: `Delete booking`,
        content,
        icon: {
          content: 'delete'
        }
      }, _this2._dialog);
      if (resp.reason !== 'done') return;
      resp.loading('Requesting booking deletion...');
      yield (0,_placeos_events__WEBPACK_IMPORTED_MODULE_3__.declineEvent)(item.id, {
        calendar: item.calendar || item.mailbox || item.host,
        system_id: space_id
      }).toPromise().catch(e => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)(`Unable to delete booking. ${e}`);
        resp.close();
        throw e;
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)('Successfully deleted booking.');
      _this2._dialog.closeAll();
    })();
  }
  static #_ = this.ɵfac = function RoomBookingsTimelineComponent_Factory(t) {
    return new (t || RoomBookingsTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_events_state_service__WEBPACK_IMPORTED_MODULE_1__.EventsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: RoomBookingsTimelineComponent,
    selectors: [["room-bookings-timeline"]],
    viewQuery: function RoomBookingsTimelineComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._scroll_container = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 34,
    vars: 42,
    consts: [[1, "relative", "flex", "items-center", "justify-center", "p-2", "space-x-2", "border-b", "border-base-200"], [3, "date", "is_new", "dateChange"], ["class", "absolute top-1/2 -translate-y-1/2 left-4 text-info text-sm", 4, "ngIf"], [1, "flex", "flex-col", "w-full", "flex-1", "overflow-hidden", 3, "resize"], ["header", "", 1, "flex", "items-center", "w-full", "h-16"], ["times", "", 1, "w-16", "h-full", "flex", "flex-col", "items-center", "justify-end", "text-xs", "pb-2", "opacity-60"], ["spaces", "", 1, "relative", "flex-1", "h-full", "overflow-hidden", "border-r", "border-base-200"], [1, "flex", "absolute", "inset-y-0"], ["class", "flex flex-col items-center justify-center h-full w-56", 4, "ngFor", "ngForOf"], ["content", "", 1, "flex", "w-full", "flex-1", "h-px"], ["times", "", 1, "relative", "w-16", "h-full", "overflow-y-hidden", "overflow-x-visible", "border-r", "border-base-200"], [1, "absolute", "inset-x-0"], ["class", "relative block h-12", 4, "ngFor", "ngForOf"], ["class", "absolute bg-secondary right-0 translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full z-30", 3, "top", 4, "ngIf"], ["spaces", "", 1, "relative", "flex-1", "h-full", "overflow-hidden", "w-px"], [1, "absolute", "top-0", "flex", "h-full", "pointer-events-none"], ["class", "w-56 h-full border-r border-base-200", 4, "ngFor", "ngForOf"], [1, "absolute", "left-0", "w-full", "pointer-events-none"], ["class", "h-12 w-full border-t border-base-200", 4, "ngFor", "ngForOf"], ["class", "absolute inset-x-0 -translate-y-px h-0.5 bg-secondary z-30", 3, "top", 4, "ngIf"], [1, "relative", "w-full", "h-full", "overflow-auto", "z-10", 3, "scroll"], ["scroll_container", ""], [1, "overflow-hidden", "relative"], [4, "ngFor", "ngForOf"], [1, "absolute", "top-1/2", "-translate-y-1/2", "left-4", "text-info", "text-sm"], [1, "flex", "flex-col", "items-center", "justify-center", "h-full", "w-56"], [1, "relative", "block", "h-12"], [1, "absolute", "top-0", "right-0", "w-2", "h-px", "bg-base-200"], [1, "absolute", "top-0", "right-3", "-translate-y-1/2", "text-xs", "opacity-60"], [1, "absolute", "bg-secondary", "right-0", "translate-x-1/2", "-translate-y-1/2", "h-2", "w-2", "rounded-full", "z-30"], [1, "w-56", "h-full", "border-r", "border-base-200"], [1, "h-12", "w-full", "border-t", "border-base-200"], [1, "absolute", "inset-x-0", "-translate-y-px", "h-0.5", "bg-secondary", "z-30"], [1, "absolute", "bg-secondary", "top-1/2", "left-0", "-translate-x-1/2", "-translate-y-1/2", "h-2", "w-2", "rounded-full"], ["event", "", "class", "absolute w-[13.625rem] hover:opacity-90", 3, "left", "top", "height", "pointer-events-none", "click", 4, "ngIf"], ["event", "", 1, "absolute", "w-[13.625rem]", "hover:opacity-90", 3, "click"], [1, "relative", "w-full", "h-full", "shadow", "bg-base-100", "border", "border-base-200", "hover:bg-base-200", "rounded-lg", "overflow-hidden", "px-3", "py-1", "text-xs"], [4, "ngIf"], [1, "absolute", "inset-0", "bg-secondary", "opacity-50"], [1, "absolute", "left-0", "inset-y-0", "w-1"], [1, "truncate"]],
    template: function RoomBookingsTimelineComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "date-options", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dateChange", function RoomBookingsTimelineComponent_Template_date_options_dateChange_1_listener($event) {
          return ctx.setDate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, RoomBookingsTimelineComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function RoomBookingsTimelineComponent_Template_div_resize_5_listener() {
          return ctx.onResize();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 6)(12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, RoomBookingsTimelineComponent_div_13_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, RoomBookingsTimelineComponent_div_18_Template, 4, 1, "div", 12)(19, RoomBookingsTimelineComponent_div_19_Template, 1, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 14)(22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, RoomBookingsTimelineComponent_div_23_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, RoomBookingsTimelineComponent_div_25_Template, 1, 0, "div", 18)(26, RoomBookingsTimelineComponent_div_26_Template, 2, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("scroll", function RoomBookingsTimelineComponent_Template_div_scroll_28_listener() {
          return ctx.onScroll();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, RoomBookingsTimelineComponent_ng_container_32_Template, 3, 4, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        let tmp_15_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("date", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 23, ctx.date))("is_new", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 25, ctx.is_today));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](9, 27, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 30, ctx.date), "z"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("left", -ctx.offset_x + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 32, ctx.spaces));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("top", -ctx.offset_y + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 34, ctx.is_today));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("left", -(ctx.offset_x % 224) + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.w_slots);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("top", -(ctx.offset_y % 48) + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.h_slots);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 36, ctx.is_today));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("height", 24 * 3 + "rem")("width", ((tmp_15_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 38, ctx.spaces)) == null ? null : tmp_15_0.length) * 14 + "rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 40, ctx.spaces));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _ui_date_options_component__WEBPACK_IMPORTED_MODULE_4__.DateOptionsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGF5LXZpZXcvcm9vbS10aW1lbGluZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO1lBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_day-view_day-view_module_ts.js.map