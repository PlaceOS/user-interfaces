"use strict";
(self["webpackChunkworkplace"] = self["webpackChunkworkplace"] || []).push([["apps_workplace_src_app_events_group-events_module_ts"],{

/***/ 30244:
/*!*********************************************************************!*\
  !*** ./apps/workplace/src/app/events/group-event-card.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupEventCardComponent: () => (/* binding */ GroupEventCardComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _group_event_details_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-event-details-modal.component */ 23150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/authenticated-image.directive */ 75142);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 55309);










function GroupEventCardComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 13);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("source", ctx_r0.event.images[0]);
  }
}
function GroupEventCardComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.event.location, " ");
  }
}
function GroupEventCardComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Remote event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class GroupEventCardComponent {
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_settings, _dialog) {
    this._settings = _settings;
    this._dialog = _dialog;
  }
  ngOnInit() {}
  viewDetails() {
    this._dialog.open(_group_event_details_modal_component__WEBPACK_IMPORTED_MODULE_1__.GroupEventDetailsModalComponent, {
      data: this.event
    });
  }
  static #_ = this.ɵfac = function GroupEventCardComponent_Factory(t) {
    return new (t || GroupEventCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: GroupEventCardComponent,
    selectors: [["group-event-card"]],
    inputs: {
      event: "event"
    },
    decls: 22,
    vars: 14,
    consts: [["matRipple", "", 1, "border", "border-base-300", "flex", "flex-col", "bg-base-100", "rounded-xl", "shadow", "overflow-hidden", "w-64", "h-[20rem]", 3, "click"], [1, "flex", "items-center", "justify-between", "h-28", "w-full", "bg-base-200", "overflow-auto"], ["auth", "", "class", "object-cover", 3, "source", 4, "ngIf"], [1, "p-4", "flex-1", "h-1/2"], [1, "opacity-60", "text-sm"], [1, "text-xl", "mb-2"], [1, "opacity-60", "text-xs", "flex-1", "overflow-hidden", "h-[4.5rem]", "mb-2"], [1, "flex", "items-center", "space-x-2", "text-xs", "mb-1"], [1, "text-info"], ["class", "", 4, "ngIf"], ["class", "opacity-30", 4, "ngIf"], [1, "flex", "items-center", "space-x-2", "text-xs"], [1, ""], ["auth", "", 1, "object-cover", 3, "source"], [1, "opacity-30"]],
    template: function GroupEventCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupEventCardComponent_Template_button_click_0_listener() {
          return ctx.viewDetails();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GroupEventCardComponent_img_2_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 7)(13, "app-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "place");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, GroupEventCardComponent_div_15_Template, 2, 1, "div", 9)(16, GroupEventCardComponent_div_16_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 11)(18, "app-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "people");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.event.images == null ? null : ctx.event.images.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 8, ctx.event.date, "EEE d MMM"), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 11, ctx.event.date, ctx.time_format), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.event.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.event.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.event.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.event.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (ctx.event.attendees == null ? null : ctx.event.attendees.length) || "0", " attending ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_3__.AuthenticatedImageDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe]
  });
}

/***/ }),

/***/ 23150:
/*!******************************************************************************!*\
  !*** ./apps/workplace/src/app/events/group-event-details-modal.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupEventDetailsModalComponent: () => (/* binding */ GroupEventDetailsModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/bookings */ 40688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




class GroupEventDetailsModalComponent {
  constructor(_data) {
    this._data = _data;
    this.booking = this._data;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function GroupEventDetailsModalComponent_Factory(t) {
    return new (t || GroupEventDetailsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GroupEventDetailsModalComponent,
    selectors: [["group-event-details-modal"]],
    decls: 0,
    vars: 0,
    template: function GroupEventDetailsModalComponent_Template(rf, ctx) {}
  });
}

/***/ }),

/***/ 79040:
/*!*************************************************************************!*\
  !*** ./apps/workplace/src/app/events/group-events-sidebar.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupEventsSidebarComponent: () => (/* binding */ GroupEventsSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _libs_form_fields_src_lib_date_calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/date-calendar.component */ 47871);


class GroupEventsSidebarComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GroupEventsSidebarComponent_Factory(t) {
    return new (t || GroupEventsSidebarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GroupEventsSidebarComponent,
    selectors: [["group-events-sidebar"]],
    decls: 3,
    vars: 0,
    consts: [[1, "bg-base-100", "w-[18rem]", "h-full"], [1, "border-base-200", "w-[calc(100%-1rem)]", "mx-auto"]],
    template: function GroupEventsSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "date-calendar")(2, "hr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_libs_form_fields_src_lib_date_calendar_component__WEBPACK_IMPORTED_MODULE_0__.DateCalendarComponent]
  });
}

/***/ }),

/***/ 14278:
/*!*********************************************************************!*\
  !*** ./apps/workplace/src/app/events/group-events-state.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupEventsStateService: () => (/* binding */ GroupEventsStateService)
/* harmony export */ });
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/bookings */ 40688);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 31957);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 57016);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 4512);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 70462);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 85046);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 36520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);









class GroupEventsStateService {
  constructor(_org, _settings) {
    this._org = _org;
    this._settings = _settings;
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({
      date: Date.now()
    });
    this.events = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this._org.active_building, this._options]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(([building]) => !!building), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(([building, options]) => (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_0__.queryBookings)({
      period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(options.date)),
      period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(options.date)),
      type: 'group-event',
      zones: this._settings.get('app.use_region') ? building.parent_id : building.id
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.shareReplay)(1));
  }
  static #_ = this.ɵfac = function GroupEventsStateService_Factory(t) {
    return new (t || GroupEventsStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: GroupEventsStateService,
    factory: GroupEventsStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 98746:
/*!*****************************************************************!*\
  !*** ./apps/workplace/src/app/events/group-events.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupEventsComponent: () => (/* binding */ GroupEventsComponent)
/* harmony export */ });
/* harmony import */ var _group_events_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-events-state.service */ 14278);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/bookings */ 40688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _components_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/topbar.component */ 23299);
/* harmony import */ var _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer-menu.component */ 89252);
/* harmony import */ var _group_events_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group-events-sidebar.component */ 79040);
/* harmony import */ var _group_event_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-event-card.component */ 30244);










const _c0 = ["dashboard", ""];
function GroupEventsComponent_group_event_card_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "group-event-card", 4);
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("event", event_r1);
  }
}
class GroupEventsComponent {
  constructor(_state) {
    this._state = _state;
    this.event_list = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([new _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.Booking(), new _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.Booking(), new _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.Booking(), new _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.Booking(), new _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.Booking(), new _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.Booking()]) || this._state.events;
  }
  static #_ = this.ɵfac = function GroupEventsComponent_Factory(t) {
    return new (t || GroupEventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_group_events_state_service__WEBPACK_IMPORTED_MODULE_0__.GroupEventsStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: GroupEventsComponent,
    selectors: [["", "dashboard", ""]],
    attrs: _c0,
    decls: 8,
    vars: 3,
    consts: [[1, "flex", "flex-1", "h-1/2", "bg-base-200"], [1, "w-1/2", "flex-1", "h-full", "overflow-auto", "p-4"], [1, "flex", "flex-wrap"], ["class", "m-2", 3, "event", 4, "ngFor", "ngForOf"], [1, "m-2", 3, "event"]],
    template: function GroupEventsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "group-events-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, GroupEventsComponent_group_event_card_5_Template, 1, 1, "group-event-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "footer-menu");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 1, ctx.event_list));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _components_topbar_component__WEBPACK_IMPORTED_MODULE_2__.TopbarComponent, _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_3__.FooterMenuComponent, _group_events_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.GroupEventsSidebarComponent, _group_event_card_component__WEBPACK_IMPORTED_MODULE_5__.GroupEventCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                overflow: hidden;\n                display: flex;\n                flex-direction: column;\n            }\n\n            main[_ngcontent-%COMP%] {\n                min-height: 50%;\n            }\n\n            .top[_ngcontent-%COMP%] {\n                background-color: #007ac8;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvZXZlbnRzL2dyb3VwLWV2ZW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGtCQUFrQjtnQkFDbEIsTUFBTTtnQkFDTixPQUFPO2dCQUNQLFFBQVE7Z0JBQ1IsU0FBUztnQkFDVCxnQkFBZ0I7Z0JBQ2hCLGFBQWE7Z0JBQ2Isc0JBQXNCO1lBQzFCOztZQUVBO2dCQUNJLGVBQWU7WUFDbkI7O1lBRUE7Z0JBQ0kseUJBQXlCO1lBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudG9wIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YWM4O1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5272:
/*!**************************************************************!*\
  !*** ./apps/workplace/src/app/events/group-events.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupEventsModule: () => (/* binding */ GroupEventsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _placeos_form_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/form-fields */ 39304);
/* harmony import */ var _group_events_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-events.component */ 98746);
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared.module */ 93053);
/* harmony import */ var _group_events_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-events-sidebar.component */ 79040);
/* harmony import */ var _group_event_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group-event-card.component */ 30244);
/* harmony import */ var _group_event_details_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-event-details-modal.component */ 23150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);











const ROUTES = [{
  path: '',
  component: _group_events_component__WEBPACK_IMPORTED_MODULE_1__.GroupEventsComponent
}];
class GroupEventsModule {
  static #_ = this.ɵfac = function GroupEventsModule_Factory(t) {
    return new (t || GroupEventsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: GroupEventsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_0__.FormFieldsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](GroupEventsModule, {
    declarations: [_group_events_component__WEBPACK_IMPORTED_MODULE_1__.GroupEventsComponent, _group_events_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.GroupEventsSidebarComponent, _group_event_card_component__WEBPACK_IMPORTED_MODULE_4__.GroupEventCardComponent, _group_event_details_modal_component__WEBPACK_IMPORTED_MODULE_5__.GroupEventDetailsModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_0__.FormFieldsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=apps_workplace_src_app_events_group-events_module_ts.js.map