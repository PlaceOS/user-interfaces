"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_day-view_day-view_module_ts"],{

/***/ 13716:
/*!********************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/booking-modal.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingModalComponent: () => (/* binding */ BookingModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/events */ 40569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _event_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-form.component */ 80140);














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
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "footer", 8)(1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingModalComponent_footer_13_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.save());
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
  static #_ = this.ɵfac = function BookingModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BookingModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_events__WEBPACK_IMPORTED_MODULE_2__.EventFormService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "event-form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
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
    styles: ["main[_ngcontent-%COMP%] {\n                width: 32rem;\n                max-height: 65vh;\n                max-width: calc(100vw - 4rem);\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmctbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxZQUFZO2dCQUNaLGdCQUFnQjtnQkFDaEIsNkJBQTZCO1lBQ2pDIiwiZmlsZSI6ImJvb2tpbmctbW9kYWwuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzJyZW07XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNjV2aDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSA0cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGF5LXZpZXcvYm9va2luZy1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQiw2QkFBNkI7WUFDakM7O0FBRVosZ2dCQUFnZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMnJlbTtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2NXZoO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDRyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 31957:
/*!***************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/day-view.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayViewComponent: () => (/* binding */ DayViewComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/sidebar.component */ 74605);
/* harmony import */ var _dayview_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dayview-topbar.component */ 63795);
/* harmony import */ var _dayview_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dayview-timeline.component */ 38296);








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
  static #_ = this.ɵfac = function DayViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DayViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
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
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRheS12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixZQUFZO2dCQUNaLFdBQVc7WUFDZiIsImZpbGUiOiJkYXktdmlldy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGF5LXZpZXcvZGF5LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLFlBQVk7Z0JBQ1osV0FBVztZQUNmOztBQUVaLGdkQUFnZCIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 37992:
/*!************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/day-view.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayViewModule: () => (/* binding */ DayViewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ui.module */ 15412);
/* harmony import */ var _day_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-view.component */ 31957);
/* harmony import */ var _dayview_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dayview-topbar.component */ 63795);
/* harmony import */ var _dayview_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dayview-timeline.component */ 38296);
/* harmony import */ var _dayview_space_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dayview-space.component */ 72263);
/* harmony import */ var _dayview_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dayview-event.component */ 61769);
/* harmony import */ var _booking_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking-modal.component */ 13716);
/* harmony import */ var _event_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event-form.component */ 80140);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @placeos/spaces */ 44855);
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @placeos/users */ 41489);
/* harmony import */ var _placeos_catering__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @placeos/catering */ 4157);
/* harmony import */ var _room_bookings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./room-bookings.component */ 94013);
/* harmony import */ var _room_timeline_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./room-timeline.component */ 6522);
/* harmony import */ var _room_approvals_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./room-approvals.component */ 64211);
/* harmony import */ var _new_dayview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./new-dayview.component */ 60659);
/* harmony import */ var apps_workplace_src_app_book_meeting_flow_meeting_form_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! apps/workplace/src/app/book/meeting-flow/meeting-form-details.component */ 13291);
/* harmony import */ var _event_book_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./event-book-modal.component */ 98575);
/* harmony import */ var _room_week_timeline_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./room-week-timeline.component */ 98591);
/* harmony import */ var _room_booking_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./room-booking-search.component */ 96891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 37580);
























const ROUTES = [{
  path: '',
  component: _day_view_component__WEBPACK_IMPORTED_MODULE_1__.DayViewComponent
}, {
  path: 'new',
  component: _new_dayview_component__WEBPACK_IMPORTED_MODULE_14__.NewDayViewComponent
}];
class DayViewModule {
  static #_ = this.ɵfac = function DayViewModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DayViewModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
    type: DayViewModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_8__.SharedSpacesModule, _placeos_users__WEBPACK_IMPORTED_MODULE_9__.SharedUsersModule, _placeos_catering__WEBPACK_IMPORTED_MODULE_10__.SharedCateringModule, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](DayViewModule, {
    declarations: [_day_view_component__WEBPACK_IMPORTED_MODULE_1__.DayViewComponent, _dayview_topbar_component__WEBPACK_IMPORTED_MODULE_2__.DayviewTopbarComponent, _dayview_timeline_component__WEBPACK_IMPORTED_MODULE_3__.DayviewTimelineComponent, _dayview_space_component__WEBPACK_IMPORTED_MODULE_4__.DayviewSpaceComponent, _dayview_event_component__WEBPACK_IMPORTED_MODULE_5__.DayviewEventComponent, _new_dayview_component__WEBPACK_IMPORTED_MODULE_14__.NewDayViewComponent, _booking_modal_component__WEBPACK_IMPORTED_MODULE_6__.BookingModalComponent, _event_form_component__WEBPACK_IMPORTED_MODULE_7__.EventFormComponent, _room_bookings_component__WEBPACK_IMPORTED_MODULE_11__.RoomBookingsComponent, _room_timeline_component__WEBPACK_IMPORTED_MODULE_12__.RoomBookingsTimelineComponent, _room_approvals_component__WEBPACK_IMPORTED_MODULE_13__.RoomBookingsApprovalsComponent, _room_booking_search_component__WEBPACK_IMPORTED_MODULE_18__.RoomBookingSearchComponent, _event_book_modal_component__WEBPACK_IMPORTED_MODULE_16__.EventBookModalComponent, apps_workplace_src_app_book_meeting_flow_meeting_form_details_component__WEBPACK_IMPORTED_MODULE_15__.MeetingFormDetailsComponent, _room_week_timeline_component__WEBPACK_IMPORTED_MODULE_17__.RoomWeekBookingsTimelineComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_8__.SharedSpacesModule, _placeos_users__WEBPACK_IMPORTED_MODULE_9__.SharedUsersModule, _placeos_catering__WEBPACK_IMPORTED_MODULE_10__.SharedCateringModule, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule]
  });
})();

/***/ }),

/***/ 61769:
/*!********************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/dayview-event.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayviewEventComponent: () => (/* binding */ DayviewEventComponent)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 45726);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 49675);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 1874);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/events */ 40569);
/* harmony import */ var _events_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-state.service */ 88288);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);











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
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.event.title, " ");
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
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.time, " ");
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
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r0.event.attendees.length, " Attendee", ctx_r0.event.attendees.length === 1 ? "" : "s", " ");
  }
}
function DayviewEventComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DayviewEventComponent_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.view(ctx_r0.event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DayviewEventComponent_div_2_div_3_Template, 4, 1, "div", 5)(4, DayviewEventComponent_div_2_div_4_Template, 4, 1, "div", 5)(5, DayviewEventComponent_div_2_div_5_Template, 4, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("absolute rounded overflow-hidden text-sm border border-base-200 shadow-sm z-10 hover:z-30 " + ctx_r0.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("top", ctx_r0.top * 100 + "%")("height", ctx_r0.height * 100 + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.event.organiser == null ? null : ctx_r0.event.organiser.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.event.duration > 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.event.duration > 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.event.duration > 90);
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
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("top", ctx_r0.top * 100 + "%")("height", ctx_r0.height * 100 + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("icon flex items-center justify-center mr-2 text-3xl rounded h-12 w-12 text-pending " + ctx_r0.event.ext("cleaning_status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.event.ext("cleaning_status") === "done" ? "done" : "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r0.event.ext("cleaning_status") === "done" ? "Finished" : "Scheduled to", " clean at ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 9, ctx_r0.event.ext("cleaning_time") || ctx_r0.event.event_end * 1000, ctx_r0.time_format), " ");
  }
}
const DAY_IN_MINUTES = 24 * 60;
class DayviewEventComponent {
  get time() {
    const date = new Date(this.event.date);
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(date, this.time_format) + ' - ' + (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.addMinutes)(date, this.event.duration), this.time_format);
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
      const start = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.startOfDay)(new Date(this.event.date));
      const diff = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.differenceInMinutes)(new Date(this.event.date), start);
      this.top = diff / DAY_IN_MINUTES;
      this.height = this.event.duration / DAY_IN_MINUTES;
      this.overflow_top = (diff - (this.event.setup_time || 0)) / DAY_IN_MINUTES;
      this.overflow_height = (this.event.duration + (this.event.setup_time || 0) + (this.event.breakdown_time || 0)) / DAY_IN_MINUTES;
    }
  }
  static #_ = this.ɵfac = function DayviewEventComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DayviewEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_events_state_service__WEBPACK_IMPORTED_MODULE_1__.EventsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
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
    styles: ["[event][_ngcontent-%COMP%] {\n                background-color: #ccc;\n                width: 12rem;\n                z-index: 100;\n                transition: box-shadow 200ms;\n            }\n\n            [event][_ngcontent-%COMP%]:hover {\n                box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2),\n                    0 1px 1px 0 rgba(0, 0, 0, 0.14),\n                    0 2px 1px -1px rgba(0, 0, 0, 0.12) !important;\n                cursor: pointer;\n            }\n\n            .overflow-block[_ngcontent-%COMP%] {\n                opacity: 0.3;\n                width: 12rem;\n            }\n\n            .internal[_ngcontent-%COMP%] {\n                background-color: #1565c0;\n                color: #fff;\n            }\n\n            .icon[_ngcontent-%COMP%] {\n                background-color: #f0f0f0;\n            }\n\n            .icon.done[_ngcontent-%COMP%] {\n                color: #21a453;\n            }\n\n            .external[_ngcontent-%COMP%] {\n                background-color: #ad1457;\n                color: #fff;\n            }\n\n            .cancelled[_ngcontent-%COMP%] {\n                background-color: #ccc;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRheXZpZXctZXZlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWiw0QkFBNEI7WUFDaEM7O1lBRUE7Z0JBQ0k7O2lFQUVpRDtnQkFDakQsZUFBZTtZQUNuQjs7WUFFQTtnQkFDSSxZQUFZO2dCQUNaLFlBQVk7WUFDaEI7O1lBRUE7Z0JBQ0kseUJBQXlCO2dCQUN6QixXQUFXO1lBQ2Y7O1lBRUE7Z0JBQ0kseUJBQXlCO1lBQzdCOztZQUVBO2dCQUNJLGNBQWM7WUFDbEI7O1lBRUE7Z0JBQ0kseUJBQXlCO2dCQUN6QixXQUFXO1lBQ2Y7O1lBRUE7Z0JBQ0ksc0JBQXNCO1lBQzFCIiwiZmlsZSI6ImRheXZpZXctZXZlbnQuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBbZXZlbnRdIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMnJlbTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW2V2ZW50XTpob3ZlciB7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgICAgICAgIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgICAgICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMikgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vdmVyZmxvdy1ibG9jayB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMnJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmludGVybmFsIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU2NWMwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmljb24uZG9uZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMWE0NTM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5leHRlcm5hbCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FkMTQ1NztcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNhbmNlbGxlZCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGF5LXZpZXcvZGF5dmlldy1ldmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLHNCQUFzQjtnQkFDdEIsWUFBWTtnQkFDWixZQUFZO2dCQUNaLDRCQUE0QjtZQUNoQzs7WUFFQTtnQkFDSTs7aUVBRWlEO2dCQUNqRCxlQUFlO1lBQ25COztZQUVBO2dCQUNJLFlBQVk7Z0JBQ1osWUFBWTtZQUNoQjs7WUFFQTtnQkFDSSx5QkFBeUI7Z0JBQ3pCLFdBQVc7WUFDZjs7WUFFQTtnQkFDSSx5QkFBeUI7WUFDN0I7O1lBRUE7Z0JBQ0ksY0FBYztZQUNsQjs7WUFFQTtnQkFDSSx5QkFBeUI7Z0JBQ3pCLFdBQVc7WUFDZjs7WUFFQTtnQkFDSSxzQkFBc0I7WUFDMUI7O0FBRVosZzlEQUFnOUQiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIFtldmVudF0ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEycmVtO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbZXZlbnRdOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgICAgICAgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgICAgICAgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm92ZXJmbG93LWJsb2NrIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEycmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW50ZXJuYWwge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTY1YzA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaWNvbi5kb25lIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIxYTQ1MztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmV4dGVybmFsIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQxNDU3O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2FuY2VsbGVkIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 72263:
/*!********************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/dayview-space.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayviewSpaceComponent: () => (/* binding */ DayviewSpaceComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/spaces */ 44855);
/* harmony import */ var _events_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-state.service */ 88288);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _dayview_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dayview-event.component */ 61769);








function DayviewSpaceComponent_ng_container_0_dayview_event_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "dayview-event", 2);
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("event", event_r1);
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
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r1.events));
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
  static #_ = this.ɵfac = function DayviewSpaceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DayviewSpaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_events_state_service__WEBPACK_IMPORTED_MODULE_1__.EventsStateService));
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
    styles: ["[_nghost-%COMP%] {\n                position: relative;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRheXZpZXctc3BhY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxrQkFBa0I7WUFDdEIiLCJmaWxlIjoiZGF5dmlldy1zcGFjZS5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGF5LXZpZXcvZGF5dmlldy1zcGFjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGtCQUFrQjtZQUN0Qjs7QUFFWiw0WEFBNFgiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 38296:
/*!***********************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/dayview-timeline.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayviewTimelineComponent: () => (/* binding */ DayviewTimelineComponent)
/* harmony export */ });
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/spaces */ 44855);
/* harmony import */ var _events_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events-state.service */ 88288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_view_event_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/view-event-details.component */ 22232);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _dayview_space_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dayview-space.component */ 72263);














function DayviewTimelineComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const time_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("transform", "translateY(-" + ctx_r2.scroll.y + "px)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", time_r2, " ");
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
    const space_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("transform", "translateX(-" + ctx_r2.scroll.x + "px)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", space_r4.display_name || space_r4.name, " ");
  }
}
function DayviewTimelineComponent_dayview_space_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "dayview-space", 21);
  }
  if (rf & 2) {
    const space_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("space", space_r5);
  }
}
function DayviewTimelineComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    let tmp_4_0;
    const i_r6 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("width", ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 4, ctx_r2.space_list)) == null ? null : tmp_4_0.length) * 12 + "rem")("top", i_r6 * 4 + "rem");
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
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("event", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx_r2.event));
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
  static #_ = this.ɵfac = function DayviewTimelineComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DayviewTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_events_state_service__WEBPACK_IMPORTED_MODULE_4__.EventsStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: DayviewTimelineComponent,
    selectors: [["dayview-timeline"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 19,
    vars: 14,
    consts: [["scroll_el", ""], [1, "absolute", "inset-0", "flex"], [1, "time", "h-full", "w-24", "overflow-hidden", "bg-base-100", "relative"], ["header", "", 1, "relative", "h-16", "z-50"], [1, "bg-base-100", "absolute", "top-0", "left-0", "right-0", "bottom-8"], ["change-transform", "", "class", "relative h-16 border-r border-base-300 z-10", 3, "transform", 4, "ngFor", "ngForOf"], [1, "absolute", "h-8", "w-px", "top-8", "right-0", "bg-base-300"], [1, "h-full", "flex-1", "flex", "flex-col", "w-1/2"], ["header", "", 1, "flex", "relative", "overflow-hidden", "border-b", "border-base-300", "border-opacity-50", "bg-base-100", "h-16", "w-full"], ["change-transform", "", "class", "relative h-16 w-48 min-w-[12rem]", 3, "transform", 4, "ngFor", "ngForOf"], ["content", "", 1, "relative", "flex", "flex-1", "overflow-auto", 3, "scroll"], ["class", "w-48 min-w-[12rem] h-[96rem] border-r border-base-300", 3, "space", 4, "ngFor", "ngForOf"], ["class", "absolute bg-base-300 h-px min-w-full left-0", 3, "width", "top", 4, "ngFor", "ngForOf"], ["mode", "indeterminate", "class", "absolute bottom-0 left-0 right-0", 4, "ngIf"], [3, "event", 4, "ngIf"], ["change-transform", "", 1, "relative", "h-16", "border-r", "border-base-300", "z-10"], [1, "absolute", "text-center", "w-full", "text-xs", "top-0", "transform", "-translate-y-1/2", "opacity-40"], [1, "absolute", "h-px", "w-2", "top-0", "right-0", "bg-base-300"], ["change-transform", "", 1, "relative", "h-16", "w-48", "min-w-[12rem]"], ["bar", "", 1, "absolute", "h-8", "w-px", "bottom-0", "-left-px", "bg-base-300"], [1, "name", "m-2", "text-center"], [1, "w-48", "min-w-[12rem]", "h-[96rem]", "border-r", "border-base-300", 3, "space"], [1, "absolute", "bg-base-300", "h-px", "min-w-full", "left-0"], ["mode", "indeterminate", 1, "absolute", "bottom-0", "left-0", "right-0"], [3, "event"]],
    template: function DayviewTimelineComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, DayviewTimelineComponent_div_4_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 7)(7, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, DayviewTimelineComponent_div_8_Template, 4, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 10, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("scroll", function DayviewTimelineComponent_Template_div_scroll_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.onScroll($event));
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
    styles: ["[_nghost-%COMP%] {\n                position: relative;\n                height: 100%;\n                width: 100%;\n            }\n\n            [change-transform][_ngcontent-%COMP%] {\n                will-change: transform;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRheXZpZXctdGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxrQkFBa0I7Z0JBQ2xCLFlBQVk7Z0JBQ1osV0FBVztZQUNmOztZQUVBO2dCQUNJLHNCQUFzQjtZQUMxQiIsImZpbGUiOiJkYXl2aWV3LXRpbWVsaW5lLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtjaGFuZ2UtdHJhbnNmb3JtXSB7XG4gICAgICAgICAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGF5LXZpZXcvZGF5dmlldy10aW1lbGluZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGtCQUFrQjtnQkFDbEIsWUFBWTtnQkFDWixXQUFXO1lBQ2Y7O1lBRUE7Z0JBQ0ksc0JBQXNCO1lBQzFCOztBQUVaLDRvQkFBNG9CIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW2NoYW5nZS10cmFuc2Zvcm1dIHtcbiAgICAgICAgICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 63795:
/*!*********************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/dayview-topbar.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayviewTopbarComponent: () => (/* binding */ DayviewTopbarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _events_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-state.service */ 88288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/date-options.component */ 94584);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);



















const _c0 = () => ({
  class: "material-icons",
  content: "add"
});
function DayviewTopbarComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", level_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", level_r1.display_name || level_r1.name, " ");
  }
}
function DayviewTopbarComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", type_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", type_r2.name, " ");
  }
}
function DayviewTopbarComponent_mat_slide_toggle_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-slide-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function DayviewTopbarComponent_mat_slide_toggle_15_Template_mat_slide_toggle_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.updateUIOptions({
        show_overflow: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Setup / Breakdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx_r3.ui_options)) == null ? null : tmp_1_0.show_overflow);
  }
}
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
  static #_ = this.ɵfac = function DayviewTopbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DayviewTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_events_state_service__WEBPACK_IMPORTED_MODULE_3__.EventsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: DayviewTopbarComponent,
    selectors: [["dayview-topbar"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 18,
    vars: 9,
    consts: [[1, "flex", "items-center", "px-4", "h-20", "bg-base-100", "border-b", "border-base-200"], ["btn", "", "matRipple", "", "new", "", 1, "w-12", "xl:w-auto", "overflow-hidden", 3, "click"], [1, "flex", "items-center"], [1, "mr-2", 3, "icon"], [1, "hidden", "xl:block"], ["appearance", "outline"], ["multiple", "", "placeholder", "All Levels", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["multiple", "", "placeholder", "No Events", 3, "ngModelChange", "ngModel"], ["class", "m-2", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "flex-1", "w-0"], [3, "dateChange"], [3, "value"], [1, "m-2", 3, "ngModelChange", "ngModel"], [1, "text-xs"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function DayviewTopbarComponent_Template_mat_select_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.zones, $event) || (ctx.zones = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function DayviewTopbarComponent_Template_mat_select_ngModelChange_7_listener($event) {
          return ctx.updateZones($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, DayviewTopbarComponent_mat_option_8_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-form-field", 5)(11, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function DayviewTopbarComponent_Template_mat_select_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.type_list, $event) || (ctx.type_list = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function DayviewTopbarComponent_Template_mat_select_ngModelChange_11_listener($event) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.zones);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 6, ctx.levels));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.type_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.allow_setup_breakdown);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ui_date_options_component__WEBPACK_IMPORTED_MODULE_4__.DateOptionsComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__.MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
    styles: ["button[_ngcontent-%COMP%] {\n                min-width: 0;\n                padding: 0 0.85rem;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n                margin-left: 1em;\n            }\n\n            mat-slide-toggle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n                width: 5.5em;\n                white-space: initial;\n                line-height: 1.2em;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRheXZpZXctdG9wYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksWUFBWTtnQkFDWixrQkFBa0I7WUFDdEI7O1lBRUE7Z0JBQ0ksY0FBYztnQkFDZCxVQUFVO2dCQUNWLGdCQUFnQjtZQUNwQjs7WUFFQTtnQkFDSSxZQUFZO2dCQUNaLG9CQUFvQjtnQkFDcEIsa0JBQWtCO1lBQ3RCIiwiZmlsZSI6ImRheXZpZXctdG9wYmFyLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjg1cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjI1ZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDhlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtc2xpZGUtdG9nZ2xlIGRpdiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUuNWVtO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGF5LXZpZXcvZGF5dmlldy10b3BiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxZQUFZO2dCQUNaLGtCQUFrQjtZQUN0Qjs7WUFFQTtnQkFDSSxjQUFjO2dCQUNkLFVBQVU7Z0JBQ1YsZ0JBQWdCO1lBQ3BCOztZQUVBO2dCQUNJLFlBQVk7Z0JBQ1osb0JBQW9CO2dCQUNwQixrQkFBa0I7WUFDdEI7O0FBRVosNDhCQUE0OEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC44NXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMy4yNWVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4ZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LXNsaWRlLXRvZ2dsZSBkaXYge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1LjVlbTtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 80140:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/event-form.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventFormComponent: () => (/* binding */ EventFormComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var libs_catering_src_lib_catering_order_modal_catering_order_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/catering/src/lib/catering-order-modal/catering-order-state.service */ 20097);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _libs_form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/date-field.component */ 19608);
/* harmony import */ var _libs_form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/duration-field.component */ 83476);
/* harmony import */ var _libs_form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/time-field.component */ 81413);
/* harmony import */ var _libs_form_fields_src_lib_user_list_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/user-list-field.component */ 840);
/* harmony import */ var _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/user-search-field.component */ 18000);
/* harmony import */ var _libs_form_fields_src_lib_space_list_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/space-list-field.component */ 84809);
/* harmony import */ var _libs_assets_src_lib_asset_list_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/assets/src/lib/asset-list-field.component */ 83618);
/* harmony import */ var _libs_catering_src_lib_catering_list_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/catering/src/lib/catering-list-field.component */ 61601);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 597);


























const _c0 = () => [5, 10];
const _c1 = () => ({
  standalone: true
});
const _c2 = (a0, a1, a2, a3) => ({
  date: a0,
  duration: a1,
  all_day: a2,
  zone_id: a3
});
function EventFormComponent_form_0_mat_checkbox_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-checkbox", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "FORM.ALL_DAY"), " ");
  }
}
function EventFormComponent_form_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 21)(1, "div", 12)(2, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Start Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "a-time-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function EventFormComponent_form_0_div_19_Template_a_time_field_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.form.patchValue({
        date: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 12)(9, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "a-duration-field", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r1.form.get("date").value)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](5, _c1))("use_24hr", ctx_r1.use_24hr_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("time", ctx_r1.form.controls == null ? null : ctx_r1.form.controls.date == null ? null : ctx_r1.form.controls.date.value)("use_24hr", ctx_r1.use_24hr_time);
  }
}
function EventFormComponent_form_0_div_41_mat_form_field_4_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const code_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", code_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", code_r4, " ");
  }
}
function EventFormComponent_form_0_div_41_mat_form_field_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("openedChange", function EventFormComponent_form_0_div_41_mat_form_field_4_Template_mat_form_field_openedChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.focusInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-select", 38)(2, "input", 39, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function EventFormComponent_form_0_div_41_mat_form_field_4_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.code_filter.next($event));
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
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r1.code_filter.getValue())("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 3, ctx_r1.filtered_codes));
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
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("mt-2", !_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, (ctx_r1.form.value.catering == null ? null : ctx_r1.form.value.catering.length) && ctx_r1.has_codes));
  }
}
function EventFormComponent_form_0_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 32)(1, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Catering:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "catering-list-field", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, EventFormComponent_form_0_div_41_mat_form_field_4_Template, 9, 6, "mat-form-field", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EventFormComponent_form_0_div_41_mat_form_field_6_Template, 5, 4, "mat-form-field", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction4"](5, _c2, ctx_r1.form.value.date, ctx_r1.form.value.duration, ctx_r1.form.value.all_day, ctx_r1.form.value.resources[0] == null ? null : ctx_r1.form.value.resources[0].level == null ? null : ctx_r1.form.value.resources[0].level.parent_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 3, (ctx_r1.form.value.catering == null ? null : ctx_r1.form.value.catering.length) && ctx_r1.has_codes));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.form.value.catering == null ? null : ctx_r1.form.value.catering.length);
  }
}
function EventFormComponent_form_0_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 45)(1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Assets:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "asset-list-field", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("date", ctx_r1.form.value.date)("duration", ctx_r1.form.value.duration);
  }
}
function EventFormComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 2)(1, "div", 3)(2, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "A valid title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 7)(12, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "a-date-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, EventFormComponent_form_0_mat_checkbox_18_Template, 3, 3, "mat-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, EventFormComponent_form_0_div_19_Template, 15, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 12)(21, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Host");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "a-user-search-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 12)(28, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Attendees");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](33, "a-user-list-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 12)(35, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "Space");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](40, "space-list-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](41, EventFormComponent_form_0_div_41_Template, 7, 10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](42, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, EventFormComponent_form_0_div_43_Template, 4, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 21)(45, "div", 22)(46, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Setup Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](48, "a-duration-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 22)(50, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "Breakdown Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](52, "a-duration-field", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.allow_all_day);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.form.value.all_day);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](42, 9, ctx_r1.has_catering) && ctx_r1.form.contains("catering"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.has_assets);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("min", 0)("custom_options", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("min", 0)("custom_options", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](12, _c0));
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
  static #_ = this.ɵfac = function EventFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EventFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](libs_catering_src_lib_catering_order_modal_catering_order_state_service__WEBPACK_IMPORTED_MODULE_1__.CateringOrderStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: EventFormComponent,
    selectors: [["event-form"]],
    inputs: {
      form: "form"
    },
    decls: 1,
    vars: 1,
    consts: [["input", ""], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "flex", "flex-col"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "title", "formControlName", "title", "placeholder", "Meeting Title"], [1, "flex", "flex-col", "relative"], ["for", "date"], ["name", "date", "formControlName", "date"], ["formControlName", "all_day", "class", "absolute -top-2 right-0", 4, "ngIf"], ["class", "flex space-x-2", 4, "ngIf"], [1, "flex", "flex-col", "flex-1"], ["for", "organiser"], ["name", "organiser", "formControlName", "organiser", 1, "mb-4"], ["for", "attendees"], ["name", "attendees", "formControlName", "attendees"], ["for", "space"], ["formControlName", "resources", 1, "w-full"], ["class", "py-2", 4, "ngIf"], ["class", "flex flex-col flex-1 mb-4", 4, "ngIf"], [1, "flex", "space-x-2"], [1, "flex", "flex-col", "space-y-2", "flex-1"], ["for", "setup"], ["name", "setup", "formControlName", "setup_time", 3, "min", "custom_options"], ["for", "breakdown"], ["name", "breakdown", "formControlName", "breakdown_time", 3, "min", "custom_options"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-0"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr"], ["for", "duration"], ["name", "duration", "formControlName", "duration", 3, "time", "use_24hr"], [1, "py-2"], ["for", "catering"], ["name", "catering", "formControlName", "catering", 3, "options"], ["appearance", "outline", "class", "w-full mt-2", 3, "openedChange", 4, "ngIf"], ["appearance", "outline", "class", "w-full", 3, "mt-2", 4, "ngIf"], ["appearance", "outline", 1, "w-full", "mt-2", 3, "openedChange"], ["formControlName", "catering_charge_code", "placeholder", "Charge Code"], ["placeholder", "Search charge codes...", 1, "sticky", "top-0", "bg-base-100", "px-4", "py-3", "text-base", "border-x-0", "border-t-0", "border-b", "focus:border-b", "border-base-200", "w-full", "rounded-none", "z-50", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "hidden"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "catering_notes", "placeholder", "Extra catering details..."], [1, "flex", "flex-col", "flex-1", "mb-4"], ["formControlName", "assets", 3, "date", "duration"]],
    template: function EventFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, EventFormComponent_form_0_Template, 53, 13, "form", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.form);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _libs_form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_2__.DateFieldComponent, _libs_form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_3__.DurationFieldComponent, _libs_form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_4__.TimeFieldComponent, _libs_form_fields_src_lib_user_list_field_component__WEBPACK_IMPORTED_MODULE_5__.UserListFieldComponent, _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_6__.UserSearchFieldComponent, _libs_form_fields_src_lib_space_list_field_component__WEBPACK_IMPORTED_MODULE_7__.SpaceListFieldComponent, _libs_assets_src_lib_asset_list_field_component__WEBPACK_IMPORTED_MODULE_8__.AssetListFieldComponent, _libs_catering_src_lib_catering_list_field_component__WEBPACK_IMPORTED_MODULE_9__.CateringListFieldComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe]
  });
}

/***/ }),

/***/ 60659:
/*!******************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/new-dayview.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewDayViewComponent: () => (/* binding */ NewDayViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/app-topbar.component */ 45189);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 96843);
/* harmony import */ var _room_bookings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-bookings.component */ 94013);




const _c0 = ["app-new-dayview", ""];
class NewDayViewComponent {
  static #_ = this.ɵfac = function NewDayViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NewDayViewComponent)();
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
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1kYXl2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCwyQkFBMkI7WUFDL0IiLCJmaWxlIjoibmV3LWRheXZpZXcuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGF5LXZpZXcvbmV3LWRheXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsWUFBWTtnQkFDWixXQUFXO2dCQUNYLDJCQUEyQjtZQUMvQjs7QUFFWixvbkJBQW9uQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYjEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 64211:
/*!*********************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/room-approvals.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomBookingsApprovalsComponent: () => (/* binding */ RoomBookingsApprovalsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _events_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-state.service */ 88288);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/authenticated-image.directive */ 93208);
/* harmony import */ var _libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/spaces/src/lib/space.pipe */ 22011);














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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "space");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    let tmp_3_0;
    const event_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("source", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, event_r2.resources[0] == null ? null : event_r2.resources[0].email))) == null ? null : tmp_3_0.images[0]);
  }
}
function RoomBookingsApprovalsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "space");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "space");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 16)(19, "div", 17)(20, "app-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 20)(25, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoomBookingsApprovalsComponent_div_14_Template_button_click_25_listener() {
      const event_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.approve(event_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "app-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoomBookingsApprovalsComponent_div_14_Template_button_click_30_listener() {
      const event_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.reject(event_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "app-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const event_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](event_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 9, event_r2.date, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", event_r2.resources.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ((tmp_5_0 = event_r2.resources.length && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 14, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 12, event_r2.resources[0] == null ? null : event_r2.resources[0].email))) == null ? null : tmp_5_0.display_name) || ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 18, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 16, event_r2.resources[0] == null ? null : event_r2.resources[0].email))) == null ? null : tmp_5_0.name) || "No Location", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (event_r2.organiser == null ? null : event_r2.organiser.name) || event_r2.host, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r2.status[event_r2.id] === "accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.status[event_r2.id] === "accept" ? "Approved" : "Approve", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r2.status[event_r2.id] === "decline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.status[event_r2.id] === "decline" ? "Declined" : "Decline", " ");
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
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoomBookingsApprovalsComponent_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.show = !ctx_r2.show);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
class RoomBookingsApprovalsComponent {
  set show(value) {
    this._show = value;
    sessionStorage.setItem('PlaceOS.Concierge.show_room_approvals', `${value}`);
  }
  get show() {
    return this._show;
  }
  constructor(_state, _org) {
    this._state = _state;
    this._org = _org;
    this._show = true;
    this.loading = false;
    this.status = {};
    this.pending = this._state.pending;
  }
  ngOnInit() {
    this._show = sessionStorage.getItem('PlaceOS.Concierge.show_room_approvals') !== 'false';
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
  static #_ = this.ɵfac = function RoomBookingsApprovalsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RoomBookingsApprovalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_events_state_service__WEBPACK_IMPORTED_MODULE_1__.EventsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: RoomBookingsApprovalsComponent,
    selectors: [["room-bookings-approvals"]],
    decls: 18,
    vars: 13,
    consts: [[1, "flex", "flex-col", "h-full", "overflow-hidden", "border-l", "border-base-200"], [1, "flex", "items-center", "p-2", "border-b", "border-base-200", "space-x-2"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Hide Pending Approvals", "matTooltipPosition", "left", 1, "bg-base-200", 3, "click"], [1, "flex-1"], ["btn", "", "icon", "", "matRipple", ""], [1, "flex-1", "overflow-auto", "p-2", "space-y-2"], ["class", "w-full h-full flex flex-col items-center justify-center space-y-2", 4, "ngIf"], ["class", "relative border border-base-200 p-2 w-full rounded", 4, "ngFor", "ngForOf"], ["class", "absolute bottom-0 left-0 right-0 top-14 p-2 flex flex-col items-center justify-center space-y-2", 4, "ngIf"], ["btn", "", "icon", "", "matRipple", "", "class", "bg-warning absolute top-2 -left-8 shadow text-warning-content", "matTooltip", "Show Pending Approvals", "matTooltipPosition", "left", 3, "click", 4, "ngIf"], [1, "w-full", "h-full", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], ["src", "assets/icons/no-pending.svg"], [1, "relative", "border", "border-base-200", "p-2", "w-full", "rounded"], [1, "opacity-30", "text-xs", "mb-2"], [1, "w-64", "h-32", "overflow-hidden", "mb-2", "bg-base-200"], ["auth", "", "class", "object-cover min-w-full min-h-full", 3, "source", 4, "ngIf"], [1, "flex", "items-center", "space-x-2", "mb-2"], [1, "h-8", "w-8", "bg-base-200", "rounded-full", "flex", "items-center", "justify-center"], [1, "text-xl"], [1, "flex-1", "text-xs"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "border-success", "bg-success-light", "text-black", "flex", "flex-1", "items-center", "space-x-2", 3, "click", "disabled"], [1, "text-success"], ["btn", "", "matRipple", "", 1, "border-error", "bg-error-light", "text-black", "flex", "flex-1", "items-center", "space-x-2", 3, "click", "disabled"], [1, "text-error"], ["auth", "", 1, "object-cover", "min-w-full", "min-h-full", 3, "source"], [1, "absolute", "bottom-0", "left-0", "right-0", "top-14", "p-2", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "absolute", "inset-0", "bg-base-100", "opacity-80", "z-0"], ["diameter", "32"], [1, "relative", "z-10"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Show Pending Approvals", "matTooltipPosition", "left", 1, "bg-warning", "absolute", "top-2", "-left-8", "shadow", "text-warning-content", 3, "click"]],
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_5__.AuthenticatedImageDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_6__.SpacePipe],
    styles: ["[_nghost-%COMP%] {\n                display: block;\n                position: relative;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb20tYXBwcm92YWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksY0FBYztnQkFDZCxrQkFBa0I7Z0JBQ2xCLFlBQVk7WUFDaEIiLCJmaWxlIjoicm9vbS1hcHByb3ZhbHMuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGF5LXZpZXcvcm9vbS1hcHByb3ZhbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxjQUFjO2dCQUNkLGtCQUFrQjtnQkFDbEIsWUFBWTtZQUNoQjs7QUFFWixnZkFBZ2YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 96891:
/*!**************************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/room-booking-search.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomBookingSearchComponent: () => (/* binding */ RoomBookingSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _events_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events-state.service */ 88288);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_users_src_lib_user_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/users/src/lib/user.pipe */ 89577);













const _c0 = ["input_el"];
function RoomBookingSearchComponent_app_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RoomBookingSearchComponent_div_7_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r1.events).length ? "No matching events found." : "No events for the currently selected date and zone", " ");
  }
}
function RoomBookingSearchComponent_div_7_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RoomBookingSearchComponent_div_7_button_9_Template_button_click_0_listener() {
      const event_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selected.next(event_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 16)(3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 19)(10, "div", 20)(11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const event_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx_r1.typeColor(event_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](5, 11, event_r4.date, "dd"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 14, event_r4.date, "MMM"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("line-through", event_r4.state === "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", event_r4.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](15, 17, event_r4.date, ctx_r1.time_format), " \u2013 ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](16, 20, event_r4.date_end, ctx_r1.time_format), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", event_r4.system == null ? null : event_r4.system.display_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ((tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 23, event_r4.host)) == null ? null : tmp_11_0.name) || event_r4.host, " ");
  }
}
function RoomBookingSearchComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, RoomBookingSearchComponent_div_7_div_6_Template, 3, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, RoomBookingSearchComponent_div_7_button_9_Template, 22, 25, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, ctx_r1.filtered)) == null ? null : tmp_2_0.length, " of ", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 6, ctx_r1.events)) == null ? null : tmp_2_0.length, " Event(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 8, ctx_r1.filtered).length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 10, ctx_r1.filtered));
  }
}
class RoomBookingSearchComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  get time_format() {
    return this._settings.time_format;
  }
  typeColor(event) {
    const type = this.types.find(_ => _.id === event.type);
    return type?.color || '#EEE';
  }
  constructor(_state, _settings) {
    super();
    this._state = _state;
    this._settings = _settings;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.show = false;
    this.search = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject('');
    this.events = this._state.filtered;
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
    this.filtered = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.search, this.events]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([search, event_list]) => {
      search = search.toLowerCase();
      return event_list.filter(e => {
        return !e.is_system_event && (e.title.toLowerCase().includes(search) || e.organiser?.name.toLowerCase().includes(search) || e.host.toLowerCase().includes(search) || e.system?.display_name.toLowerCase().includes(search) || e.system?.name.toLowerCase().includes(search) || e.resources[0]?.display_name.toLowerCase()?.includes(search) || e.resources[0]?.name.toLowerCase()?.includes(search) || e.resources[0]?.email.toLowerCase()?.includes(search));
      });
    }));
  }
  showSearch() {
    this.show = true;
    this._input_element.nativeElement.focus();
  }
  hideSearch() {
    if (!this.show) return;
    this.timeout('hide', () => this.show = false);
  }
  static #_ = this.ɵfac = function RoomBookingSearchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RoomBookingSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_events_state_service__WEBPACK_IMPORTED_MODULE_0__.EventsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: RoomBookingSearchComponent,
    selectors: [["room-booking-search"]],
    viewQuery: function RoomBookingSearchComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._input_element = _t.first);
      }
    },
    outputs: {
      selected: "selected"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    decls: 8,
    vars: 7,
    consts: [["input_el", ""], [1, "relative"], ["icon", "", "matRipple", "", 3, "click"], ["placeholder", "Search day's events...", 1, "absolute", "top-1/2", "-translate-y-1/2", "w-[20rem]", "right-0", "rounded-full", "pl-10", "pr-4", "py-3", "border", "border-base-300", "shadow", "bg-base-100", 3, "ngModelChange", "blur", "ngModel"], ["class", "text-2xl absolute top-1/2 -translate-y-1/2 right-[17.5rem]", 4, "ngIf"], ["class", "absolute top-full translate-y-2 w-[18rem] right-4 rounded border border-base-300 bg-base-100 max-h-[65vh] overflow-auto shadow", 4, "ngIf"], [1, "text-2xl", "absolute", "top-1/2", "-translate-y-1/2", "right-[17.5rem]"], [1, "absolute", "top-full", "translate-y-2", "w-[18rem]", "right-4", "rounded", "border", "border-base-300", "bg-base-100", "max-h-[65vh]", "overflow-auto", "shadow"], [1, "sticky", "top-0", "p-4", "bg-base-100", "rounded", "z-10"], [1, "opacity-60", "text-xs"], ["class", "opacity-30 p-4 flex items-center justify-center text-sm text-center", 4, "ngIf"], [1, "px-2", "pb-2", "-mt-2"], ["matRipple", "", "class", "relative flex items-center p-2 hover:bg-base-200 rounded w-full text-left space-x-2 z-0", 3, "click", 4, "ngFor", "ngForOf"], [1, "opacity-30", "p-4", "flex", "items-center", "justify-center", "text-sm", "text-center"], ["matRipple", "", 1, "relative", "flex", "items-center", "p-2", "hover:bg-base-200", "rounded", "w-full", "text-left", "space-x-2", "z-0", 3, "click"], [1, "h-10", "w-1", "rounded-full"], ["date", "", 1, "leading-tight"], [1, "text-2xl", "mx-auto"], [1, "font-medium", "text-sm", "uppercase", "mx-auto", "-mt-1"], [1, "flex-1", "w-1/2"], [1, "flex", "items-center", "space-x-2", "w-full"], [1, "text-sm", "flex-1", "truncate"], [1, "text-xs", "opacity-30", "truncate"]],
    template: function RoomBookingSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RoomBookingSearchComponent_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.showSearch());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 3, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function RoomBookingSearchComponent_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.search.next($event));
        })("blur", function RoomBookingSearchComponent_Template_input_blur_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.hideSearch());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, RoomBookingSearchComponent_app_icon_6_Template, 2, 0, "app-icon", 4)(7, RoomBookingSearchComponent_div_7_Template, 11, 12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("opacity-0", !ctx.show)("pointer-events-none", !ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.search.getValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.show);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _libs_users_src_lib_user_pipe__WEBPACK_IMPORTED_MODULE_3__.UserPipe]
  });
}

/***/ }),

/***/ 94013:
/*!********************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/room-bookings.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomBookingsComponent: () => (/* binding */ RoomBookingsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _events_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events-state.service */ 88288);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _room_timeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./room-timeline.component */ 6522);
/* harmony import */ var _room_approvals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./room-approvals.component */ 64211);
/* harmony import */ var _room_week_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./room-week-timeline.component */ 98591);
/* harmony import */ var _libs_components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/building.pipe */ 56062);

























const _forTrack0 = ($index, $item) => $item.id;
function RoomBookingsComponent_mat_option_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "building");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const level_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, level_r2.parent_id)) == null ? null : tmp_4_0.display_name, " ");
  }
}
function RoomBookingsComponent_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RoomBookingsComponent_mat_option_21_div_2_Template, 5, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const level_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", level_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.use_region);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", level_r2.display_name || level_r2.name, " ");
  }
}
function RoomBookingsComponent_ng_container_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 15);
  }
}
function RoomBookingsComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RoomBookingsComponent_ng_container_23_div_1_Template, 1, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "mat-slide-toggle", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RoomBookingsComponent_ng_container_23_Template_mat_slide_toggle_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.updateUIOptions({
        show_overflow: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Setup / Breakdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.use_region);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 2, ctx_r2.ui_options)) == null ? null : tmp_3_0.show_overflow);
  }
}
function RoomBookingsComponent_mat_checkbox_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-checkbox", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RoomBookingsComponent_mat_checkbox_34_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const type_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.setFilter(type_r6.id, !$event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", !ctx_r2.type_list.includes(type_r6.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", type_r6.name, " ");
  }
}
function RoomBookingsComponent_For_37_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RoomBookingsComponent_For_37_div_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const type_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.setFilter(type_r8.id, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const type_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", type_r8.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](type_r8.name);
  }
}
function RoomBookingsComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, RoomBookingsComponent_For_37_div_0_Template, 7, 3, "div", 35);
  }
  if (rf & 2) {
    const type_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.type_list.includes(type_r8.id));
  }
}
function RoomBookingsComponent_room_bookings_timeline_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "room-bookings-timeline", 38);
  }
}
function RoomBookingsComponent_room_week_bookings_timeline_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "room-week-bookings-timeline", 38);
  }
}
function RoomBookingsComponent_room_bookings_approvals_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "room-bookings-approvals", 39);
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
  get use_region() {
    return this._settings.get('app.use_region');
  }
  constructor(_org, _state, _router, _route, _settings) {
    super();
    this._org = _org;
    this._state = _state;
    this._router = _router;
    this._route = _route;
    this._settings = _settings;
    this.zones = this._state.zones;
    this.period = this._state.period;
    this.ui_options = this._state.options;
    this.levels = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this._org.active_building, this._org.active_region]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([bld, region]) => this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
    /** List of levels for the active building */
    this.updateZones = z => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          zone_ids: z.join(',')
        },
        queryParamsHandling: 'merge'
      });
      this._state.setZones(z);
    };
    this.updateUIOptions = o => this._state.setUIOptions(o);
    this.setPeriod = p => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          period: p
        },
        queryParamsHandling: 'merge'
      });
      this._state.setPeriod(p);
    };
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
      if (params.has('period')) {
        this._state.setPeriod(params.get('period') === 'day' ? 'day' : 'week');
      }
      if (this.use_region) return;
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
        if (_this.use_region) return;
        const zones = (yield _this.zones.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).toPromise()).filter(zone => levels.find(lvl => lvl.id === zone));
        if (!zones.length && levels.length) {
          zones.push(levels[0].id);
        }
        _this.updateZones(zones);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()));
    this.subscription('region', this._org.active_region.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(_ => !!_)).subscribe(_ => this.updateZones([_.id])));
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
  static #_ = this.ɵfac = function RoomBookingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RoomBookingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_1__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_events_state_service__WEBPACK_IMPORTED_MODULE_2__.EventsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_3__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: RoomBookingsComponent,
    selectors: [["room-bookings"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
    decls: 44,
    vars: 19,
    consts: [["menu", "matMenu"], [1, "absolute", "inset-0", "flex", "flex-col", "overflow-hidden", "pl-8"], [1, "flex", "items-center", "w-full", "py-4", "pr-8", "space-x-4"], [1, "text-2xl", "font-medium"], [1, "flex-1", "w-px"], ["appearance", "outline", 1, "no-subscript", "w-32"], [3, "ngModelChange", "ngModel"], ["value", "day"], ["value", "week"], ["btn", "", "matRipple", "", 1, "space-x-2", 3, "click"], [1, "w-full", "flex", "items-center"], ["appearance", "outline", 1, "no-subscript", "w-52"], ["placeholder", "All Levels", "multiple", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "border-l", "h-full", "ml-8", "mr-4"], [1, "flex", "items-center", "space-x-2", "max-w-[calc(100%-16rem)]", "flex-1"], ["btn", "", "matRipple", "", 1, "inverse", 3, "matMenuTriggerFor"], [1, "mx-2"], [1, ""], [1, "flex", "flex-col", "space-y-2", "overflow-hidden", "w-48"], [3, "ngModel", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "overflow-x-auto", "flex-1", "w-px", "space-x-2", "px-2"], [1, "flex", "items-center", "border", "border-base-200", "rounded-3xl"], [1, "flex", "w-full", "flex-1", "h-px", "border-t", "mt-4", "border-base-200"], ["class", "relative flex-1 w-1/2 z-0", 4, "ngIf"], ["class", "relative z-10", 4, "ngIf"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["class", "border-l h-full ml-8 mr-4", 4, "ngIf"], [1, "m-2", 3, "ngModelChange", "ngModel"], [1, "text-xs"], ["class", "flex items-center border border-base-200 rounded-3xl", 4, "ngIf"], [1, "h-4", "w-4", "m-2", "rounded-full"], ["icon", "", "matRipple", "", 3, "click"], [1, "relative", "flex-1", "w-1/2", "z-0"], [1, "relative", "z-10"]],
    template: function RoomBookingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Room Bookings");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "mat-form-field", 5)(6, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RoomBookingsComponent_Template_mat_select_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.setPeriod($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RoomBookingsComponent_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.newBooking());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "New Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 10)(18, "mat-form-field", 11)(19, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RoomBookingsComponent_Template_mat_select_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.updateZones($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, RoomBookingsComponent_mat_option_21_Template, 5, 3, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, RoomBookingsComponent_ng_container_23_Template, 6, 4, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 16)(26, "button", 17)(27, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "filter_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "mat-menu", 19, 0)(33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, RoomBookingsComponent_mat_checkbox_34_Template, 2, 2, "mat-checkbox", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](36, RoomBookingsComponent_For_37_Template, 1, 1, "div", 23, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, RoomBookingsComponent_room_bookings_timeline_39_Template, 1, 0, "room-bookings-timeline", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](40, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](41, RoomBookingsComponent_room_week_bookings_timeline_41_Template, 1, 0, "room-week-bookings-timeline", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](42, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](43, RoomBookingsComponent_room_bookings_approvals_43_Template, 1, 0, "room-bookings-approvals", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const menu_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 9, ctx.period));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](20, 11, ctx.zones));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](22, 13, ctx.levels));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.allow_setup_breakdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerFor", menu_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](40, 15, ctx.period) === "day");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](42, 17, ctx.period) === "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.has_approvals);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckbox, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__.MatSlideToggle, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _room_timeline_component__WEBPACK_IMPORTED_MODULE_5__.RoomBookingsTimelineComponent, _room_approvals_component__WEBPACK_IMPORTED_MODULE_6__.RoomBookingsApprovalsComponent, _room_week_timeline_component__WEBPACK_IMPORTED_MODULE_7__.RoomWeekBookingsTimelineComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _libs_components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_8__.BuildingPipe]
  });
}

/***/ }),

/***/ 6522:
/*!********************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/room-timeline.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomBookingsTimelineComponent: () => (/* binding */ RoomBookingsTimelineComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 23206);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 31257);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 3330);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 45726);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! date-fns */ 1874);
/* harmony import */ var _events_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-state.service */ 88288);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/events */ 40569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var libs_components_src_lib_media_duration_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! libs/components/src/lib/media-duration.pipe */ 28975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/date-options.component */ 94584);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _room_booking_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./room-booking-search.component */ 96891);





















const _c0 = () => [];
function RoomBookingsTimelineComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Timezone of the building is displayed and is different from your local timezone. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RoomBookingsTimelineComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Today ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RoomBookingsTimelineComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 23)(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const space_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", space_r1.display_name || space_r1.name, " ");
  }
}
function RoomBookingsTimelineComponent_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hour_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.formatHour(hour_r2), " ");
  }
}
function RoomBookingsTimelineComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, RoomBookingsTimelineComponent_div_21_div_2_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("height", ctx_r2.block_height + "rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", i_r4 !== 0);
  }
}
function RoomBookingsTimelineComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 30);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("top", "calc(" + ctx_r2.timeToOffset(ctx_r2.now) + "% + 1px)");
  }
}
function RoomBookingsTimelineComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 31);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("height", ctx_r2.block_height + "rem");
  }
}
function RoomBookingsTimelineComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 32);
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("left", "calc(" + i_r5 * ctx_r2.block_width + "rem - 1px)");
  }
}
function RoomBookingsTimelineComponent_ng_container_28_ng_container_1_button_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
function RoomBookingsTimelineComponent_ng_container_28_ng_container_1_button_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const event_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("bg-secondary", event_r7.status !== "cancelled")("bg-error", event_r7.status === "cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("opacity-60", event_r7.status === "cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", event_r7.all_day ? "All Day" : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](4, 11, event_r7.date, ctx_r2.time_format, ctx_r2.tz), " \u2013 ", event_r7.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("opacity-60", event_r7.status === "cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (event_r7.organiser == null ? null : event_r7.organiser.name) || event_r7.host, " ");
  }
}
function RoomBookingsTimelineComponent_ng_container_28_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RoomBookingsTimelineComponent_ng_container_28_ng_container_1_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const event_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const space_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.viewEvent(event_r7, space_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, RoomBookingsTimelineComponent_ng_container_28_ng_container_1_button_1_ng_container_2_Template, 2, 0, "ng-container", 36)(3, RoomBookingsTimelineComponent_ng_container_28_ng_container_1_button_1_ng_container_3_Template, 7, 15, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const event_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("left", i_r9 * ctx_r2.block_width + 0.25 + "rem")("top", ctx_r2.timeToOffset(event_r7.date) + "%")("height", ctx_r2.endToOffset(event_r7.duration) + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("pointer-events-none", event_r7.state === "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", ctx_r2.eventTooltip(event_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("opacity-60", event_r7.state === "done")("!rounded-none", event_r7.is_system_event)("!border-secondary", event_r7.is_system_event);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", event_r7.is_system_event);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !event_r7.is_system_event);
  }
}
function RoomBookingsTimelineComponent_ng_container_28_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, RoomBookingsTimelineComponent_ng_container_28_ng_container_1_button_1_Template, 4, 17, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const event_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !event_r7.is_system_event || _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r2.ui_options).show_overflow);
  }
}
function RoomBookingsTimelineComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, RoomBookingsTimelineComponent_ng_container_28_ng_container_1_Template, 3, 3, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const space_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r2.events)[space_r8.id] || _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c0));
  }
}
function RoomBookingsTimelineComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 39);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("top", ctx_r2.timeToOffset(ctx_r2.now) + "%");
  }
}
class RoomBookingsTimelineComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  get now() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.startOfMinute)(Date.now()).valueOf();
  }
  get timezone() {
    return this._settings.get('app.events.use_building_timezone') ? this._org.building.timezone : '';
  }
  get tz() {
    // Get Timezone as +/-HHMM
    const tz = this.timezone;
    if (!tz) return '';
    const offset = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.getTimezoneOffsetInMinutes)(tz);
    const hours = Math.floor(Math.abs(offset) / 60);
    const minutes = Math.abs(offset) % 60;
    return `${offset > 0 ? '+' : '-'}${(0,libs_components_src_lib_media_duration_pipe__WEBPACK_IMPORTED_MODULE_5__.padLength)(hours, 2)}${(0,libs_components_src_lib_media_duration_pipe__WEBPACK_IMPORTED_MODULE_5__.padLength)(minutes, 2)}`;
  }
  get block_start() {
    return +this._settings.get('app.events.block_start') || 0;
  }
  get block_end() {
    return +this._settings.get('app.events.block_end') || 24;
  }
  get block_range() {
    return Math.min(24, Math.max(this.block_end - this.block_start, 1));
  }
  get block_height() {
    return +this._settings.get('app.events.block_height') || 3;
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _dialog, _settings, _org) {
    super();
    this._state = _state;
    this._dialog = _dialog;
    this._settings = _settings;
    this._org = _org;
    this.block_width = 14;
    this.ui_options = this._state.options;
    this.spaces = this._state.spaces;
    this.date = this._state.date;
    this.is_today = this.date.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(d => (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.isSameDay)(d, Date.now())));
    this.events = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this._state.spaces, this._state.filtered]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([spaces, events]) => {
      const map = {};
      for (const space of spaces) {
        map[space.id] = events.filter(event => event.resources.find(item => item.id === space.id || item.email === space.email) || event.system?.id === space.id || event.system?.email === space.email);
      }
      return map;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.shareReplay)(1));
    this._hour_list = Array.from({
      length: 24
    }, (_, i) => i);
    this.hours = [];
    this.edit = e => this._state.newBooking(e);
    this.setDate = d => this._state.setDate(d);
    this._date_pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe('en');
  }
  formatHour(hour) {
    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_15__.setHours)(Date.now(), hour);
    return this._settings.get('app.use_24_hour_time') ? (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.format)(date, 'HH:00') : (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.format)(date, 'h a');
  }
  eventTooltip(event) {
    const tooltip = `Start: ${event.all_day ? 'All Day' : this._date_pipe.transform(event.date, this.time_format)}
Title:  ${event.title}
Host:  ${event.organiser?.name || event.host}`;
    return tooltip;
  }
  ngOnInit() {
    this.subscription('poll', this._state.startPolling());
    this.subscription('hour_list', this._org.active_building.subscribe(() => {
      this.hours = this._hour_list.filter(h => h >= this.block_start && h < this.block_end);
    }));
    this.hours = this._hour_list.filter(h => h >= this.block_start && h < this.block_end);
    const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const offset = !this.timezone ? 0 : (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.getTimezoneDifferenceInHours)(current_tz, this.timezone);
  }
  timeToOffset(date) {
    const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const offset = !this.timezone ? 0 : (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.getTimezoneDifferenceInHours)(this.timezone, current_tz);
    const start_time = (0,date_fns__WEBPACK_IMPORTED_MODULE_15__.setHours)((0,date_fns__WEBPACK_IMPORTED_MODULE_17__.startOfDay)(date), this.block_start - offset);
    const diff = (0,date_fns__WEBPACK_IMPORTED_MODULE_18__.differenceInMinutes)(date, start_time);
    return Math.max(0, diff / 60) / this.block_range * 100;
  }
  endToOffset(duration) {
    return Math.min(this.block_range, duration / 60) / this.block_range * 100;
  }
  viewEvent(event, space_id, scroll_to = false) {
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
      const time = `${(0,date_fns__WEBPACK_IMPORTED_MODULE_16__.format)(item.date, 'dd MMM yyyy ' + _this2.time_format)}`;
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
  static #_ = this.ɵfac = function RoomBookingsTimelineComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RoomBookingsTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_events_state_service__WEBPACK_IMPORTED_MODULE_1__.EventsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: RoomBookingsTimelineComponent,
    selectors: [["room-bookings-timeline"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
    decls: 32,
    vars: 38,
    consts: [["class", "mx-2 mt-2 p-2 w-[calc(100%-1rem)] bg-info text-info-content rounded-lg text-center text-xs", 4, "ngIf"], [1, "relative", "flex", "items-center", "justify-center", "p-2", "space-x-2", "border-b", "border-base-200", "z-20"], [3, "dateChange", "date", "is_new"], ["class", "absolute top-1/2 -translate-y-1/2 left-4 text-info text-sm", 4, "ngIf"], [1, "absolute", "top-1/2", "-translate-y-1/2", "right-8"], [3, "selected"], ["timeline", "", 1, "grid", "overflow-auto", "w-full", "h-1/2", "flex-1", "z-0"], ["timezone", "", 1, "sticky", "top-0", "left-0", "z-30", "bg-base-100", "flex", "items-center", "justify-center"], [1, "text-xs", "opacity-30"], [1, "absolute", "h-2", "w-px", "right-0", "bottom-0", "bg-base-300"], [1, "absolute", "w-2", "h-px", "right-0", "bottom-0", "bg-base-300"], ["space-headers", "", 1, "sticky", "top-0", "z-20", "border-b", "border-base-300", "flex", "items-center", "bg-base-100"], ["class", "relative h-full w-56 flex items-center justify-center", 4, "ngFor", "ngForOf"], ["hour-blocks", "", 1, "sticky", "left-0", "z-10", "border-r", "border-base-300", "bg-base-100", "overflow-visible"], ["class", "relative w-full", 3, "height", 4, "ngFor", "ngForOf"], ["class", "absolute bg-secondary right-0 translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full", 3, "top", 4, "ngIf"], ["space-blocks", "", 1, "relative", "overflow-hidden"], ["class", "relative w-full border-b border-base-200", 3, "height", 4, "ngFor", "ngForOf"], ["class", "absolute w-px h-full bg-base-200 top-0", 3, "left", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["class", "absolute inset-x-0 h-[2px] bg-secondary", 3, "top", 4, "ngIf"], [1, "mx-2", "mt-2", "p-2", "w-[calc(100%-1rem)]", "bg-info", "text-info-content", "rounded-lg", "text-center", "text-xs"], [1, "absolute", "top-1/2", "-translate-y-1/2", "left-4", "text-info", "text-sm"], [1, "relative", "h-full", "w-56", "flex", "items-center", "justify-center"], [1, "truncate"], [1, "absolute", "h-2", "w-px", "-left-px", "bottom-0", "bg-base-300"], [1, "relative", "w-full"], [1, "absolute", "-top-px", "right-0", "w-2", "h-px", "bg-base-300"], ["class", "absolute -top-px right-3 -translate-y-1/2 text-xs opacity-60", 4, "ngIf"], [1, "absolute", "-top-px", "right-3", "-translate-y-1/2", "text-xs", "opacity-60"], [1, "absolute", "bg-secondary", "right-0", "translate-x-1/2", "-translate-y-1/2", "h-2", "w-2", "rounded-full"], [1, "relative", "w-full", "border-b", "border-base-200"], [1, "absolute", "w-px", "h-full", "bg-base-200", "top-0"], ["event", "", "matRipple", "", "class", "absolute w-52 hover:opacity-90 text-left", 3, "left", "top", "height", "pointer-events-none", "matTooltip", "click", 4, "ngIf"], ["event", "", "matRipple", "", 1, "absolute", "w-52", "hover:opacity-90", "text-left", 3, "click", "matTooltip"], [1, "relative", "w-full", "h-full", "shadow", "bg-base-100", "border", "border-base-200", "hover:bg-base-200", "rounded-lg", "overflow-hidden", "px-3", "py-1", "text-xs"], [4, "ngIf"], [1, "absolute", "-inset-px", "bg-secondary", "opacity-30"], [1, "absolute", "left-0", "inset-y-0", "w-1"], [1, "absolute", "inset-x-0", "h-[2px]", "bg-secondary"]],
    template: function RoomBookingsTimelineComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, RoomBookingsTimelineComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "date-options", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("dateChange", function RoomBookingsTimelineComponent_Template_date_options_dateChange_2_listener($event) {
          return ctx.setDate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, RoomBookingsTimelineComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4)(7, "room-booking-search", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selected", function RoomBookingsTimelineComponent_Template_room_booking_search_selected_7_listener($event) {
          return ctx.viewEvent($event, $event.system == null ? null : $event.system.id, true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "div", 9)(15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, RoomBookingsTimelineComponent_div_18_Template, 4, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, RoomBookingsTimelineComponent_div_21_Template, 3, 3, "div", 14)(22, RoomBookingsTimelineComponent_div_22_Template, 1, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, RoomBookingsTimelineComponent_div_25_Template, 1, 2, "div", 17)(26, RoomBookingsTimelineComponent_div_26_Template, 1, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, RoomBookingsTimelineComponent_ng_container_28_Template, 3, 4, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, RoomBookingsTimelineComponent_div_30_Template, 1, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_5_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.timezone);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("date", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 16, ctx.date))("is_new", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 18, ctx.is_today));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](13, 22, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 20, ctx.date), "z", ctx.tz), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("width", ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 26, ctx.spaces)) == null ? null : tmp_5_0.length) * ctx.block_width + "rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 28, ctx.spaces));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("height", ctx.block_range * ctx.block_height + "rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 30, ctx.is_today) && ctx.timeToOffset(ctx.now) < 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 32, ctx.spaces));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](29, 34, ctx.spaces));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 36, ctx.is_today));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _ui_date_options_component__WEBPACK_IMPORTED_MODULE_6__.DateOptionsComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltip, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRipple, _room_booking_search_component__WEBPACK_IMPORTED_MODULE_7__.RoomBookingSearchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                max-width: 100%;\n            }\n\n            [timeline][_ngcontent-%COMP%] {\n                grid-template-columns: 4rem auto;\n                grid-template-rows: 3.5rem auto;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb20tdGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsZUFBZTtZQUNuQjs7WUFFQTtnQkFDSSxnQ0FBZ0M7Z0JBQ2hDLCtCQUErQjtZQUNuQyIsImZpbGUiOiJyb29tLXRpbWVsaW5lLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFt0aW1lbGluZV0ge1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNHJlbSBhdXRvO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMy41cmVtIGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGF5LXZpZXcvcm9vbS10aW1lbGluZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixlQUFlO1lBQ25COztZQUVBO2dCQUNJLGdDQUFnQztnQkFDaEMsK0JBQStCO1lBQ25DOztBQUVaLDR1QkFBNHVCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW3RpbWVsaW5lXSB7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0cmVtIGF1dG87XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzLjVyZW0gYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 98591:
/*!*************************************************************************!*\
  !*** ./apps/concierge/src/app/day-view/room-week-timeline.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomWeekBookingsTimelineComponent: () => (/* binding */ RoomWeekBookingsTimelineComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 23206);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 31257);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 28797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 90610);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 77753);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 45726);
/* harmony import */ var _events_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-state.service */ 88288);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/events */ 40569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/date-options.component */ 94584);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _room_booking_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./room-booking-search.component */ 96891);
/* harmony import */ var _libs_users_src_lib_user_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/users/src/lib/user.pipe */ 89577);

















const _c0 = () => [];
function RoomWeekBookingsTimelineComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This Week ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RoomWeekBookingsTimelineComponent_div_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Today ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RoomWeekBookingsTimelineComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16)(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, RoomWeekBookingsTimelineComponent_div_17_div_4_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const date_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 2, date_r1, "EEE, MMM d"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isToday(date_r1));
  }
}
function RoomWeekBookingsTimelineComponent_div_24_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoomWeekBookingsTimelineComponent_div_24_button_1_Template_button_click_0_listener() {
      const event_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.viewEvent(event_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 25)(3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const event_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", ctx_r1.typeColor(event_r4.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("line-through", event_r4.state === "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", event_r4.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 9, event_r4.date, ctx_r1.time_format), " \u2013 ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](8, 12, event_r4.date_end, ctx_r1.time_format), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", event_r4.system == null ? null : event_r4.system.display_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 15, event_r4.host)) == null ? null : tmp_10_0.name) || event_r4.host, " ");
  }
}
function RoomWeekBookingsTimelineComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RoomWeekBookingsTimelineComponent_div_24_button_1_Template, 14, 17, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const date_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx_r1.events)[date_r5] || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](3, _c0));
  }
}
class RoomWeekBookingsTimelineComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  get now() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.startOfMinute)(Date.now()).valueOf();
  }
  isToday(date) {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.isSameDay)(date, Date.now());
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _dialog, _settings) {
    super();
    this._state = _state;
    this._dialog = _dialog;
    this._settings = _settings;
    this.hours = Array.from({
      length: 24
    }, (_, i) => i);
    this.ui_options = this._state.options;
    this.date = this._state.date;
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
    this.days = this.date.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(d => new Array(7).fill(0).map((_, idx) => (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.addDays)((0,date_fns__WEBPACK_IMPORTED_MODULE_12__.startOfWeek)(d), idx).valueOf())));
    this.this_week = this.date.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(d => (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.isSameWeek)(d, Date.now())));
    this.events = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this.days, this._state.filtered, this._state.zones]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([day_list, events, zones]) => {
      if (zones.length) {
        events = events.filter(_ => _.system?.zones.find(_ => zones.includes(_)));
      }
      const map = {};
      for (const date of day_list) {
        map[date] = events.filter(event => (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.isSameDay)(date, event.date) && !event.is_system_event);
      }
      return map;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.shareReplay)(1));
    this.event_max_count = this.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(e => {
      let length = 0;
      for (const date in e) {
        if (e[date].length > length) length = e[date].length;
      }
      return length;
    }));
    this.edit = e => this._state.newBooking(e);
    this.setDate = d => this._state.setDate(d);
  }
  ngOnInit() {
    this.subscription('poll', this._state.poll());
  }
  typeColor(type) {
    return this.types.find(_ => _.id === type)?.color || '#EEE';
  }
  viewEvent(event, space_id, scroll_to = false) {
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
      const time = `${(0,date_fns__WEBPACK_IMPORTED_MODULE_16__.format)(item.date, 'dd MMM yyyy ' + _this2.time_format)}`;
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
  static #_ = this.ɵfac = function RoomWeekBookingsTimelineComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RoomWeekBookingsTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_events_state_service__WEBPACK_IMPORTED_MODULE_1__.EventsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: RoomWeekBookingsTimelineComponent,
    selectors: [["room-week-bookings-timeline"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 26,
    vars: 33,
    consts: [[1, "relative", "flex", "items-center", "justify-center", "p-2", "space-x-2", "border-b", "border-base-200", "z-20"], [3, "dateChange", "date", "is_new"], ["class", "absolute top-1/2 -translate-y-1/2 left-4 text-info text-sm", 4, "ngIf"], [1, "absolute", "top-1/2", "-translate-y-1/2", "right-8"], [3, "selected"], ["timeline", "", 1, "grid", "overflow-auto", "w-full", "h-1/2", "flex-1", "z-0"], ["timezone", "", 1, "sticky", "top-0", "left-0", "z-30", "bg-base-100", "flex", "items-center", "justify-center"], [1, "text-xs", "opacity-30"], [1, "absolute", "h-2", "w-px", "right-0", "bottom-0", "bg-base-300"], [1, "absolute", "w-2", "h-px", "right-0", "bottom-0", "bg-base-300"], ["day-headers", "", 1, "sticky", "top-0", "z-20", "border-b", "border-base-300", "flex", "items-center", "bg-base-100", "min-w-[calc(100%-3rem)]"], ["class", "relative flex-1 h-full min-w-48 flex flex-col items-center justify-center leading-tight", 4, "ngFor", "ngForOf"], ["empty-block", "", 1, "sticky", "left-0", "z-10", "border-r", "border-base-300", "bg-base-100", "min-h-full"], ["date-blocks", "", 1, "relative", "overflow-hidden", "min-w-[calc(100%-3rem)]", "flex"], ["class", "flex-1 min-w-48 overflow-hidden p-2 border-r border-base-200", 4, "ngFor", "ngForOf"], [1, "absolute", "top-1/2", "-translate-y-1/2", "left-4", "text-info", "text-sm"], [1, "relative", "flex-1", "h-full", "min-w-48", "flex", "flex-col", "items-center", "justify-center", "leading-tight"], [1, "truncate"], ["class", "text-info text-xs", 4, "ngIf"], [1, "absolute", "h-2", "w-px", "-left-px", "bottom-0", "bg-base-300"], [1, "text-info", "text-xs"], [1, "flex-1", "min-w-48", "overflow-hidden", "p-2", "border-r", "border-base-200"], ["matRipple", "", "class", "flex p-2 w-full space-x-2 hover:bg-base-200 rounded text-left", 3, "click", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "flex", "p-2", "w-full", "space-x-2", "hover:bg-base-200", "rounded", "text-left", 3, "click"], [1, "h-2", "w-2", "rounded-full", "my-1.5"], [1, "flex-1", "w-1/2"], [1, "text-sm", "truncate"], [1, "text-xs", "opacity-60", "flex-1"], [1, "text-xs", "truncate", "opacity-30"]],
    template: function RoomWeekBookingsTimelineComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "date-options", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dateChange", function RoomWeekBookingsTimelineComponent_Template_date_options_dateChange_1_listener($event) {
          return ctx.setDate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RoomWeekBookingsTimelineComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3)(6, "room-booking-search", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selected", function RoomWeekBookingsTimelineComponent_Template_room_booking_search_selected_6_listener($event) {
          return ctx.viewEvent($event, $event.system == null ? null : $event.system.id, true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "div", 8)(14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, RoomWeekBookingsTimelineComponent_div_17_Template, 6, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, RoomWeekBookingsTimelineComponent_div_24_Template, 3, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_7_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("date", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 12, ctx.date))("is_new", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 14, ctx.this_week));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](12, 18, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 16, ctx.date), "z"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("width", ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 21, ctx.days)) == null ? null : tmp_4_0.length) * 12 + "rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 23, ctx.days));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("height", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 25, ctx.event_max_count) ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 27, ctx.event_max_count) * 5.375 + "rem" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("width", ((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](23, 29, ctx.days)) == null ? null : tmp_7_0.length) * 12 + "rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](25, 31, ctx.days));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _ui_date_options_component__WEBPACK_IMPORTED_MODULE_4__.DateOptionsComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRipple, _room_booking_search_component__WEBPACK_IMPORTED_MODULE_5__.RoomBookingSearchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe, _libs_users_src_lib_user_pipe__WEBPACK_IMPORTED_MODULE_6__.UserPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                max-width: 100%;\n            }\n\n            [timeline][_ngcontent-%COMP%] {\n                grid-template-columns: 4rem auto;\n                grid-template-rows: 3.5rem auto;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb20td2Vlay10aW1lbGluZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixlQUFlO1lBQ25COztZQUVBO2dCQUNJLGdDQUFnQztnQkFDaEMsK0JBQStCO1lBQ25DIiwiZmlsZSI6InJvb20td2Vlay10aW1lbGluZS5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbdGltZWxpbmVdIHtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRyZW0gYXV0bztcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMuNXJlbSBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZGF5LXZpZXcvcm9vbS13ZWVrLXRpbWVsaW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLGVBQWU7WUFDbkI7O1lBRUE7Z0JBQ0ksZ0NBQWdDO2dCQUNoQywrQkFBK0I7WUFDbkM7O0FBRVosd3ZCQUF3dkIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbdGltZWxpbmVdIHtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRyZW0gYXV0bztcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMuNXJlbSBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
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

/***/ }),

/***/ 77753:
/*!**********************************************!*\
  !*** ./node_modules/date-fns/isSameWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameWeek: () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ 90610);


/**
 * The {@link isSameWeek} function options.
 */

/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same week (and month and year)
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dateLeft, dateRight, options) {
  const dateLeftStartOfWeek = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(dateLeft, options);
  const dateRightStartOfWeek = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(dateRight, options);
  return +dateLeftStartOfWeek === +dateRightStartOfWeek;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameWeek);

/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_day-view_day-view_module_ts.js.map