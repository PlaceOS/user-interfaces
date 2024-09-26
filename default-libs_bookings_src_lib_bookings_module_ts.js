"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["default-libs_bookings_src_lib_bookings_module_ts"],{

/***/ 27547:
/*!*********************************************************!*\
  !*** ./libs/bookings/src/lib/booking-card.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingCardComponent: () => (/* binding */ BookingCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 31257);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 45726);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 49675);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 99134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _booking_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking.class */ 53857);
/* harmony import */ var _booking_details_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking-details-modal.component */ 1781);
/* harmony import */ var libs_common_src_lib_async_handler_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/common/src/lib/async-handler.class */ 75354);
/* harmony import */ var libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! libs/organisation/src/lib/organisation.service */ 19863);
/* harmony import */ var _parking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parking.service */ 1593);
/* harmony import */ var _events_src_lib_group_event_details_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../events/src/lib/group-event-details-modal.component */ 58094);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _components_src_lib_status_pill_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/src/lib/status-pill.component */ 50907);





















const _c0 = () => ["./"];
const _c1 = a0 => ({
  booking: a0
});
function BookingCardComponent_h4_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r0.day, ",\u00A0");
  }
}
function BookingCardComponent_h4_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, BookingCardComponent_h4_0_span_1_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.show_day);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](3, 3, ctx_r0.booking == null ? null : ctx_r0.booking.date, ctx_r0.time_format), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](6, 6, ctx_r0.booking == null ? null : ctx_r0.booking.date, "z"), ")");
  }
}
function BookingCardComponent_a_1_app_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.type);
  }
}
function BookingCardComponent_a_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 19)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.location);
  }
}
function BookingCardComponent_a_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Associate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BookingCardComponent_a_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BookingCardComponent_a_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r0.booking.status !== "declined" ? "RESERVED" : "RELEASED", " ");
  }
}
function BookingCardComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BookingCardComponent_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.viewDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 8)(2, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 10)(5, "status-pill", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 12)(8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, BookingCardComponent_a_1_app_icon_9_Template, 2, 1, "app-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, BookingCardComponent_a_1_div_12_Template, 5, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "app-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, " chevron_right ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, BookingCardComponent_a_1_div_15_Template, 2, 0, "div", 18)(16, BookingCardComponent_a_1_div_16_Template, 2, 0, "div", 18)(17, BookingCardComponent_a_1_div_17_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const desk_icon_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](14, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](15, _c1, ctx_r0.booking == null ? null : ctx_r0.booking.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.booking == null ? null : ctx_r0.booking.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("status", ctx_r0.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.type !== "desk")("ngIfElse", desk_icon_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r0.raw_description || (ctx_r0.booking == null ? null : ctx_r0.booking.asset_name) || (ctx_r0.booking == null ? null : ctx_r0.booking.asset_id), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.for_current_user && (ctx_r0.booking == null ? null : ctx_r0.booking.booking_type) !== "group-event");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx_r0.booking == null ? null : ctx_r0.booking.booking_type) === "group-event");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](18, 12, ctx_r0.is_reserved_parking_space));
  }
}
function BookingCardComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 22);
  }
}
class BookingCardComponent extends libs_common_src_lib_async_handler_class__WEBPACK_IMPORTED_MODULE_3__.AsyncHandler {
  get for_current_user() {
    return this.booking?.user_email.toLowerCase() === (0,_placeos_common__WEBPACK_IMPORTED_MODULE_0__.currentUser)()?.email.toLowerCase();
  }
  get time_format() {
    return this._settings.time_format;
  }
  get status() {
    if (this.booking?.is_done) return 'neutral';
    if (this.booking?.status === 'approved') return 'success';
    if (this.booking?.status === 'declined') return 'error';
    if (this.booking?.status === 'cancelled') return 'error';
    if (this.booking?.status === 'tentative') return 'warning';
    return 'warning';
  }
  constructor(_dialog, _route, _org, _settings, _parking) {
    super();
    this._dialog = _dialog;
    this._route = _route;
    this._org = _org;
    this._settings = _settings;
    this._parking = _parking;
    this.show_day = false;
    this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.end = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.raw_description = '';
    this.is_reserved_parking_space = this._parking.assigned_space.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(space => this.booking.booking_type === 'parking' && space && this.booking.asset_id === space.id));
  }
  ngOnInit() {
    this.subscription('route.query', this._route.queryParamMap.subscribe(params => params.has('booking') && this.booking?.id === params.get('event') ? this.viewDetails() : ''));
  }
  ngOnChanges(changes) {
    if (changes.booking) {
      this.raw_description = this.removeHtmlTags(this.booking?.description);
    }
  }
  get type() {
    if (this.booking?.type === 'desk') return 'desk';
    if (this.booking?.type === 'parking') return 'drive_eta';
    return 'book';
  }
  get day() {
    const date = this.booking?.date || Date.now();
    const is_today = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.isSameDay)(Date.now(), date);
    return `${is_today ? 'Today' : (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.format)(date, 'EEEE')}`;
  }
  get location() {
    const level = this._org.levelWithID(this.booking?.zones || []);
    return `${level?.display_name || level?.name || ''}`;
  }
  get period() {
    if (this.booking?.is_all_day) return 'All Day';
    const start = this.booking?.date || Date.now();
    const duration = this.booking?.duration || 60;
    const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.addMinutes)(start, duration);
    const dur = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.formatDuration)({
      hours: Math.floor(duration / 60),
      minutes: duration % 60
    }).replace(' hour', 'hr').replace(' minute', 'min');
    return `${(0,date_fns__WEBPACK_IMPORTED_MODULE_12__.format)(start, this.time_format)} - ${(0,date_fns__WEBPACK_IMPORTED_MODULE_12__.format)(end, this.time_format)} (${dur})`;
  }
  removeHtmlTags(html) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }
  viewDetails() {
    if (!this.booking) return;
    this.timeout('open', () => {
      const view_component = this.booking.booking_type === 'group-event' ? _events_src_lib_group_event_details_modal_component__WEBPACK_IMPORTED_MODULE_6__.GroupEventDetailsModalComponent : _booking_details_modal_component__WEBPACK_IMPORTED_MODULE_2__.BookingDetailsModalComponent;
      const data = this.booking.booking_type === 'group-event' ? {
        booking: this.booking,
        concierge: false
      } : this.booking;
      const ref = this._dialog.open(view_component, {
        data
      });
      this.subscription('edit', ref.componentInstance.edit?.subscribe(() => this.edit.emit()));
      this.subscription('remove', ref.componentInstance.remove?.subscribe(() => this.remove.emit()));
      this.subscription('end', ref.componentInstance.end?.subscribe(() => this.end.emit()));
    });
  }
  static #_ = this.ɵfac = function BookingCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BookingCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_4__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_parking_service__WEBPACK_IMPORTED_MODULE_5__.ParkingService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: BookingCardComponent,
    selectors: [["booking-card"]],
    inputs: {
      booking: "booking",
      show_day: "show_day"
    },
    outputs: {
      edit: "edit",
      remove: "remove",
      end: "end"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]],
    decls: 4,
    vars: 2,
    consts: [["desk_icon", ""], ["class", "mb-2 flex items-center", 4, "ngIf"], ["name", "view-booking-details", "class", "w-full cursor-pointer overflow-hidden relative", 3, "routerLink", "queryParams", "click", 4, "ngIf"], [1, "mb-2", "flex", "items-center"], ["day", "", 4, "ngIf"], [1, "text-xs", "px-2"], ["day", ""], ["name", "view-booking-details", 1, "w-full", "cursor-pointer", "overflow-hidden", "relative", 3, "click", "routerLink", "queryParams"], [1, "w-full", "bg-base-100", "border", "border-base-300", "rounded-xl", "shadow", "py-4", "relative"], [1, "px-4", "text-lg"], [1, "flex", "mx-4", "my-2"], [3, "status"], [1, "flex", "flex-wrap", "flex-col", "sm:flex-row", "sm:divide-x", "divide-base-200-500", "py-2", "space-y-2", "sm:space-y-0"], [1, "flex", "items-center", "px-4", "max-w-[33%]"], [4, "ngIf", "ngIfElse"], [1, "mx-2", "truncate", "flex-1", "w-1/2"], ["class", "flex items-center px-4", 4, "ngIf"], [1, "absolute", "top-1/2", "right-1", "text-4xl", "-translate-y-1/2"], ["class", "absolute top-2 right-2 bg-warning/50 rounded-xl px-2 py-1 text-xs", 4, "ngIf"], [1, "flex", "items-center", "px-4"], [1, "mx-2", "truncate"], [1, "absolute", "top-2", "right-2", "bg-warning/50", "rounded-xl", "px-2", "py-1", "text-xs"], ["src", "assets/icons/desk-outline.svg", 1, "w-5", "h-5"]],
    template: function BookingCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, BookingCardComponent_h4_0_Template, 7, 9, "h4", 1)(1, BookingCardComponent_a_1_Template, 19, 17, "a", 2)(2, BookingCardComponent_ng_template_2_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.booking);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.booking);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_7__.IconComponent, _components_src_lib_status_pill_component__WEBPACK_IMPORTED_MODULE_8__.StatusPillComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n                display: block;\n                width: 100%;\n                position: relative;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmctY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGNBQWM7Z0JBQ2QsV0FBVztnQkFDWCxrQkFBa0I7WUFDdEIiLCJmaWxlIjoiYm9va2luZy1jYXJkLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYm9va2luZ3Mvc3JjL2xpYi9ib29raW5nLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxjQUFjO2dCQUNkLFdBQVc7Z0JBQ1gsa0JBQWtCO1lBQ3RCOztBQUVaLHdlQUF3ZSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1781:
/*!******************************************************************!*\
  !*** ./libs/bookings/src/lib/booking-details-modal.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingDetailsModalComponent: () => (/* binding */ BookingDetailsModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 49675);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 99134);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 45726);
/* harmony import */ var libs_components_src_lib_map_locate_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/components/src/lib/map-locate-modal.component */ 90620);
/* harmony import */ var libs_components_src_lib_map_pin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/components/src/lib/map-pin.component */ 71865);
/* harmony import */ var libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! libs/organisation/src/lib/organisation.service */ 19863);
/* harmony import */ var _booking_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking.class */ 53857);
/* harmony import */ var _bookings_fn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookings.fn */ 18026);
/* harmony import */ var _desk_settings_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./desk-settings-modal.component */ 77904);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/src/lib/interactive-map.component */ 24918);
/* harmony import */ var _components_src_lib_image_carousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/src/lib/image-carousel.component */ 65277);
/* harmony import */ var _components_src_lib_status_pill_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/src/lib/status-pill.component */ 50907);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);

























const _c0 = () => ({
  disable_pan: true,
  disable_zoom: true
});
function BookingDetailsModalComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "div", 27);
  }
}
function BookingDetailsModalComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "image-carousel", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("images", ctx_r1.booking == null ? null : ctx_r1.booking.extension_data == null ? null : ctx_r1.booking.extension_data.images);
  }
}
function BookingDetailsModalComponent_div_10_button_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 35)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.booking.checked_in ? "done" : "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.booking.checked_in ? "Checked in" : "Check in", " ");
  }
}
function BookingDetailsModalComponent_div_10_button_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "mat-spinner", 37);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("diameter", 32);
  }
}
function BookingDetailsModalComponent_div_10_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BookingDetailsModalComponent_div_10_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.toggleCheckedIn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, BookingDetailsModalComponent_div_10_button_1_div_1_Template, 5, 2, "div", 34)(2, BookingDetailsModalComponent_div_10_button_1_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const loading_state_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("bg-success", ctx_r1.booking.checked_in)("text-success-content", ctx_r1.booking.checked_in);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r1.checking_in);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.checking_in)("ngIfElse", loading_state_r4);
  }
}
function BookingDetailsModalComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, BookingDetailsModalComponent_div_10_button_1_Template, 4, 7, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 32)(3, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const menu_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.booking.checked_out_at && !ctx_r1.checked_out && !ctx_r1.auto_checkin && (ctx_r1.booking.state === "upcoming" || ctx_r1.booking.state === "in_progress") && ctx_r1.booking.status !== "declined");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matMenuTriggerFor", menu_r5);
  }
}
function BookingDetailsModalComponent_ng_container_36_div_5_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r8.name || "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" x", item_r8.quantity, " ");
  }
}
function BookingDetailsModalComponent_ng_container_36_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 42)(1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BookingDetailsModalComponent_ng_container_36_div_5_Template_button_click_1_listener() {
      const request_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.show_request[request_r7.id] = !ctx_r1.show_request[request_r7.id]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 44)(3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 46)(7, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 47)(10, "app-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, BookingDetailsModalComponent_ng_container_36_div_5_div_13_Template, 6, 2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const request_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Requested for ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](5, 18, request_r7.deliver_at, "MMM d, " + ctx_r1.time_format), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("bg-success", request_r7.state === "approved")("text-success-content", request_r7.state === "approved")("bg-warning", request_r7.state !== "approved" && request_r7.state !== "rejected")("text-warning-content", request_r7.state !== "approved" && request_r7.state !== "rejected")("bg-error", request_r7.state === "rejected")("text-error-content", request_r7.state === "rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matTooltip", request_r7.state || "Tentative");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", request_r7.state === "approved" ? "done" : request_r7.state === "rejected" ? "close" : "schedule", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.show_request[request_r7.id] ? "expand_less" : "expand_more", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("@show", ctx_r1.show_request[request_r7.id] ? "show" : "hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", request_r7.items);
  }
}
function BookingDetailsModalComponent_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 38)(2, "h3", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](3, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, BookingDetailsModalComponent_ng_container_36_div_5_Template, 14, 21, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nExp"]((ctx_r1.booking.valid_assets == null ? null : ctx_r1.booking.valid_assets.length) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nApply"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.booking.valid_assets);
  }
}
function BookingDetailsModalComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "interactive-map", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r1.level == null ? null : ctx_r1.level.map_id)("features", ctx_r1.features)("options", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](3, _c0));
  }
}
function BookingDetailsModalComponent_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BookingDetailsModalComponent_button_44_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.edit.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 56)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](5, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsModalComponent_button_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BookingDetailsModalComponent_button_45_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.setDeskHeight());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 56)(2, "app-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " height ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](5, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsModalComponent_button_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BookingDetailsModalComponent_button_46_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.remove.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 56)(2, "app-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsModalComponent_button_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BookingDetailsModalComponent_button_47_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.end.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 56)(2, "app-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](5, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
class BookingDetailsModalComponent {
  get level() {
    return this._org.levelWithID(this.booking?.zones || []);
  }
  get building() {
    const building = this._org.buildings.find(bld => (this.booking?.zones || []).includes(bld.id));
    if (this._settings.get('app.use_region')) {
      const region = this._org.regions.find(region => (this.booking?.zones || []).includes(region.id) || region.id === building?.parent_id);
      if (region) return region;
    }
    return building;
  }
  get can_edit() {
    return this.booking.booking_type !== 'visitor' && this.booking.booking_type !== 'parking';
  }
  get auto_checkin() {
    return this._settings.get(`app.${this.booking?.type || 'bookings'}.auto_checkin`);
  }
  get is_checked_in() {
    return this.booking.checked_in;
  }
  get desk_height_enabled() {
    return this.booking?.type === 'desk' && this._settings.get('app.desks.height_enabled');
  }
  get is_in_progress() {
    const ts = Date.now();
    const start = this.booking?.booking_start * 1000;
    const end = this.booking?.booking_end * 1000;
    if (this.booking?.all_day) return start <= ts;
    return start <= ts && ts <= end;
  }
  get time_format() {
    return this._settings.time_format;
  }
  get booking_status() {
    if (this.booking?.is_done) return 'neutral';
    if (this.booking?.status === 'approved') return 'success';
    if (this.booking?.status === 'declined') return 'error';
    if (this.booking?.status === 'tentative') return 'warning';
    return 'warning';
  }
  constructor(_booking, _settings, _org, _dialog) {
    this._booking = _booking;
    this._settings = _settings;
    this._org = _org;
    this._dialog = _dialog;
    this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.end = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.booking = this._booking;
    this.hide_map = false;
    this.checked_out = false;
    this.checking_in = false;
    this.features = [{
      location: this.booking?.extension_data?.map_id || this.booking?.asset_id,
      content: libs_components_src_lib_map_pin_component__WEBPACK_IMPORTED_MODULE_3__.MapPinComponent
    }];
    this.has_assets = !!this.booking?.linked_bookings?.find(_ => _.booking_type === 'asset-request');
  }
  get period() {
    if (this.booking?.is_all_day) return 'All Day';
    const start = this.booking?.date || Date.now();
    const duration = this.booking?.duration || 60;
    const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.addMinutes)(start, duration);
    const dur = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.formatDuration)({
      hours: Math.floor(duration / 60),
      minutes: duration % 60
    }).replace(' hour', 'hr').replace(' minute', 'min');
    return `${(0,date_fns__WEBPACK_IMPORTED_MODULE_15__.format)(start, this.time_format)} - ${(0,date_fns__WEBPACK_IMPORTED_MODULE_15__.format)(end, this.time_format)} (${dur})`;
  }
  toggleCheckedIn() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.checking_in = true;
      const bkn = _this.booking;
      const promise = (bkn.instance ? (0,_bookings_fn__WEBPACK_IMPORTED_MODULE_6__.checkinBookingInstance)(bkn.id, bkn.instance, !_this.booking.checked_in) : (0,_bookings_fn__WEBPACK_IMPORTED_MODULE_6__.checkinBooking)(_this.booking.id, !_this.booking.checked_in)).toPromise().catch(_ => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('Error checking in booking');
        _this.checking_in = false;
        throw _;
      });
      yield promise;
      _this.booking.checked_in = !_this.booking.checked_in;
      _this.checked_out = !_this.booking.checked_in;
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)(`Successfully ${_this.booking.checked_in ? 'checked in' : 'ended booking'}`);
      _this.checking_in = false;
    })();
  }
  status(id) {
    const booking = this.booking.linked_bookings.find(_ => _.asset_id === id);
    if (booking.status) return booking.status;
    return booking ? booking.approved ? 'approved' : booking.rejected ? 'rejected' : 'pending' : 'pending';
  }
  viewLocation() {
    this.hide_map = true;
    const ref = this._dialog.open(libs_components_src_lib_map_locate_modal_component__WEBPACK_IMPORTED_MODULE_2__.MapLocateModalComponent, {
      maxWidth: '95vw',
      maxHeight: '95vh',
      data: {
        item: {
          id: this._booking.asset_id,
          name: this._booking.asset_name,
          map_id: this._booking.extension_data.map_id || this.booking.asset_id,
          level: this.level
        }
      }
    });
    ref.afterClosed().subscribe(() => this.hide_map = false);
  }
  setDeskHeight() {
    this._dialog.open(_desk_settings_modal_component__WEBPACK_IMPORTED_MODULE_7__.DeskSettingsModalComponent, {
      data: {
        id: this.booking.asset_ids[0] || this.booking.asset_id
      }
    });
  }
  static #_ = this.ɵfac = function BookingDetailsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BookingDetailsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_4__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: BookingDetailsModalComponent,
    selectors: [["booking-details-modal"]],
    outputs: {
      edit: "edit",
      remove: "remove",
      end: "end"
    },
    decls: 48,
    vars: 23,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2102851380219026584$$LIBS_BOOKINGS_SRC_LIB_BOOKING_DETAILS_MODAL_COMPONENT_TS_0 = goog.getMsg(" Details ");
        i18n_0 = MSG_EXTERNAL_2102851380219026584$$LIBS_BOOKINGS_SRC_LIB_BOOKING_DETAILS_MODAL_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟2c8ce65c566300dc9063f69c615fda2e3a6b896a␟2102851380219026584: Details `;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_31749697777503671$$LIBS_BOOKINGS_SRC_LIB_BOOKING_DETAILS_MODAL_COMPONENT_TS_1 = goog.getMsg(" Assets ({$interpolation}) ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ booking.valid_assets?.length || 0 }}"
          }
        });
        i18n_1 = MSG_EXTERNAL_31749697777503671$$LIBS_BOOKINGS_SRC_LIB_BOOKING_DETAILS_MODAL_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟9e3da900d415898c8ff7b522c5eecccfe4de018e␟31749697777503671: Assets (${"\uFFFD0\uFFFD"}:INTERPOLATION:) `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1612171114840935381$$LIBS_BOOKINGS_SRC_LIB_BOOKING_DETAILS_MODAL_COMPONENT_TS_2 = goog.getMsg("Edit booking");
        i18n_2 = MSG_EXTERNAL_1612171114840935381$$LIBS_BOOKINGS_SRC_LIB_BOOKING_DETAILS_MODAL_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟53f264e5fad94a425174c18cf299eeac7482f258␟1612171114840935381:Edit booking`;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7190557592686051728$$LIBS_BOOKINGS_SRC_LIB_BOOKING_DETAILS_MODAL_COMPONENT_TS_3 = goog.getMsg("Set Desk Height");
        i18n_3 = MSG_EXTERNAL_7190557592686051728$$LIBS_BOOKINGS_SRC_LIB_BOOKING_DETAILS_MODAL_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:␟35729dbbde462f39a391c9abc24a3f79eebfba7a␟7190557592686051728:Set Desk Height`;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1139994899162365077$$LIBS_BOOKINGS_SRC_LIB_BOOKING_DETAILS_MODAL_COMPONENT_TS_4 = goog.getMsg("Delete booking");
        i18n_4 = MSG_EXTERNAL_1139994899162365077$$LIBS_BOOKINGS_SRC_LIB_BOOKING_DETAILS_MODAL_COMPONENT_TS_4;
      } else {
        i18n_4 = $localize`:␟55883ef2b67c24d30f999a5ade421493fdc9e14a␟1139994899162365077:Delete booking`;
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_834898868131691573$$LIBS_BOOKINGS_SRC_LIB_BOOKING_DETAILS_MODAL_COMPONENT_TS_5 = goog.getMsg("End booking");
        i18n_5 = MSG_EXTERNAL_834898868131691573$$LIBS_BOOKINGS_SRC_LIB_BOOKING_DETAILS_MODAL_COMPONENT_TS_5;
      } else {
        i18n_5 = $localize`:␟2f3dfd27ad1999e91bb66ad271f967d6e543956f␟834898868131691573:End booking`;
      }
      return [["menu", "matMenu"], ["loading_state", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, [1, "w-[100vw]", "h-[100vh]", "sm:relative", "sm:inset-auto", "sm:w-[51rem]", "sm:h-auto", "sm:max-h-[80vh]", "bg-base-100", "sm:bg-base-200", "sm:dark:bg-neutral-600", "sm:rounded", "overflow-auto", "space-y-2", "pb-2"], [1, "sm:flex", "flex-col", "items-center", "pb-4", "max-h-screen", "sm:max-h-[80vh]", "sm:px-16", "sm:border-b", "bg-base-100", "border-base-200"], ["class", "h-8 w-full sm:hidden block", 4, "ngIf"], ["class", "bg-neutral w-full h-64 sm:rounded-b overflow-hidden", 4, "ngIf"], ["title", "", 1, "px-3", "mt-2", "text-xl", "font-medium", "w-full"], [1, "sm:flex", "items-center", "justify-between", "w-full"], [1, "flex", "m-2"], [3, "status"], ["actions", "", "class", "flex items-center space-x-2 px-2", 4, "ngIf"], [1, "sm:flex", "flex-wrap", "sm:px-12"], [1, "sm:p-4", "sm:bg-base-100", "sm:dark:bg-neutral-700", "rounded", "sm:m-2", "sm:border", "border-base-200", "flex-grow-[4]", "min-w-1/3", "sm:w-[16rem]"], [1, "px-3", "mt-2", "text-lg", "font-medium", "mb-2"], [1, "flex", "items-center", "px-2", "space-x-2"], [4, "ngIf"], ["map", "", 1, "mt-4", "sm:my-2", "h-64", "sm:h-48", "relative", "border", "border-base-200", "overflow-hidden", "rounded", "sm:bg-base-100", "m-2", "flex-grow-[3]", "min-w-1/3", "w-[calc(100%-1rem)]", "p-2", "sm:w-[16rem]", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-0", "left-2", "bg-neutral", "text-white"], ["xPosition", "before"], ["mat-menu-item", "", "mat-dialog-close", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], [1, "h-8", "w-full", "sm:hidden", "block"], [1, "bg-neutral", "w-full", "h-64", "sm:rounded-b", "overflow-hidden"], [1, "w-full", "h-64", 3, "images"], ["actions", "", 1, "flex", "items-center", "space-x-2", "px-2"], ["btn", "", "matRipple", "", "class", "flex-1 h-10 border-none", 3, "bg-success", "text-success-content", "disabled", "click", 4, "ngIf"], ["icon", "", "matRipple", "", 1, "bg-secondary", "rounded", "text-white", "h-12", "w-12", 3, "matMenuTriggerFor"], ["btn", "", "matRipple", "", 1, "flex-1", "h-10", "border-none", 3, "click", "disabled"], ["class", "flex items-center space-x-2 justify-center", 4, "ngIf", "ngIfElse"], [1, "flex", "items-center", "space-x-2", "justify-center"], [1, "mr-4"], [1, "mx-auto", 3, "diameter"], [1, "mt-4", "sm:p-4", "sm:bg-base-100", "sm:dark:bg-neutral-700", "rounded", "sm:m-2", "sm:border", "border-base-200", "flex-grow-[3]", "min-w-1/3", "sm:w-[16rem]"], [1, "mx-3", "pt-2", "text-lg", "font-medium"], [1, "flex", "flex-col", "space-y-2"], ["request", "", "class", "border border-base-300 bg-base-100 rounded-xl overflow-hidden", 4, "ngFor", "ngForOf"], ["request", "", 1, "border", "border-base-300", "bg-base-100", "rounded-xl", "overflow-hidden"], ["matRipple", "", 1, "flex", "items-center", "space-x-2", "p-3", "w-full", 3, "click"], [1, "flex-1", "text-left"], [1, "text-sm"], [1, "flex", "items-center", "justify-center", "rounded-full", "w-8", "h-8", 3, "matTooltip"], [1, "flex", "items-center", "justify-center", "rounded-full", "w-8", "h-8"], [1, "text-2xl"], [1, "flex", "flex-col", "bg-base-200", "divide-y", "divide-base-100"], ["class", "flex items-center px-3 py-1 space-x-2 hover:opacity-90", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "px-3", "py-1", "space-x-2", "hover:opacity-90"], [1, "flex", "items-center", "flex-1"], [1, "rounded", "bg-success", "text-success-content", "text-xs", "px-2", "py-1"], [1, "pointer-events-none", 3, "src", "features", "options"], ["mat-menu-item", "", "mat-dialog-close", "", 3, "click"], [1, "flex", "items-center", "space-x-2", "text-base"], ["mat-menu-item", "", 3, "click"], ["className", "material-symbols-rounded"], [1, "text-error"]];
    },
    template: function BookingDetailsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, BookingDetailsModalComponent_div_2_Template, 1, 0, "div", 10)(3, BookingDetailsModalComponent_div_3_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 13)(7, "div", 14)(8, "status-pill", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, BookingDetailsModalComponent_div_10_Template, 5, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 17)(12, "div", 18)(13, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](14, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 20)(16, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "event");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](20, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 20)(22, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "div", 20)(27, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, "map");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 20)(32, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, "place");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](36, BookingDetailsModalComponent_ng_container_36_Template, 6, 2, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BookingDetailsModalComponent_Template_button_click_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.viewLocation());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](38, BookingDetailsModalComponent_ng_container_38_Template, 2, 4, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "button", 23)(40, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "mat-menu", 24, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](44, BookingDetailsModalComponent_button_44_Template, 6, 0, "button", 25)(45, BookingDetailsModalComponent_button_45_Template, 6, 0, "button", 26)(46, BookingDetailsModalComponent_button_46_Template, 6, 0, "button", 26)(47, BookingDetailsModalComponent_button_47_Template, 6, 0, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !(ctx.booking == null ? null : ctx.booking.extension_data == null ? null : ctx.booking.extension_data.images == null ? null : ctx.booking.extension_data.images.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.booking == null ? null : ctx.booking.extension_data == null ? null : ctx.booking.extension_data.images == null ? null : ctx.booking.extension_data.images.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("pt-4", !(ctx.booking == null ? null : ctx.booking.extension_data == null ? null : ctx.booking.extension_data.images));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.booking.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("status", ctx.booking_status);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.period, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.booking.is_done);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](20, 20, ctx.booking.date, "EEEE, dd LLLL y"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.period);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", (ctx.level == null ? null : ctx.level.display_name) || (ctx.level == null ? null : ctx.level.name), ", ", ctx.booking.asset_name || ctx.booking.asset_id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", (ctx.building == null ? null : ctx.building.display_name) || (ctx.building == null ? null : ctx.building.name), " ", (ctx.building == null ? null : ctx.building.address) ? ", " + ctx.building.address : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.has_assets);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.hide_map);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.can_edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.is_checked_in && ctx.desk_height_enabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.is_in_progress);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.is_in_progress);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogClose, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinner, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_8__.IconComponent, _components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_9__.InteractiveMapComponent, _components_src_lib_image_carousel_component__WEBPACK_IMPORTED_MODULE_10__.ImageCarouselComponent, _components_src_lib_status_pill_component__WEBPACK_IMPORTED_MODULE_11__.StatusPillComponent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRipple, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe]
  });
}

/***/ }),

/***/ 18379:
/*!*******************************************************!*\
  !*** ./libs/bookings/src/lib/booking-form.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingFormService: () => (/* binding */ BookingFormService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! date-fns */ 99908);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! date-fns */ 49675);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! date-fns */ 45726);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 97405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 26320);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs */ 68757);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 47504);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/organisation/src/lib/organisation.service */ 19863);
/* harmony import */ var _booking_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking.class */ 53857);
/* harmony import */ var _booking_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking.utilities */ 17141);
/* harmony import */ var _bookings_fn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookings.fn */ 18026);
/* harmony import */ var _desk_questions_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./desk-questions-modal.component */ 67254);
/* harmony import */ var libs_payments_src_lib_payments_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! libs/payments/src/lib/payments.service */ 34525);
/* harmony import */ var _booking_link_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./booking-link-modal.component */ 84089);
/* harmony import */ var libs_assets_src_lib_assets_fn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! libs/assets/src/lib/assets.fn */ 75204);
/* harmony import */ var libs_assets_src_lib_asset_state_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! libs/assets/src/lib/asset-state.service */ 46088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/dialog */ 12587);

























const BOOKING_TYPES = ['desk', 'parking', 'locker', 'catering'];
class BookingFormService extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  get view() {
    return this._view.getValue();
  }
  get booking() {
    return this._booking.getValue();
  }
  resourceUserName(id) {
    return this._resource_use[id];
  }
  newForm(booking = new _booking_class__WEBPACK_IMPORTED_MODULE_4__.Booking({
    all_day: this._settings.get('app.bookings.all_day_default')
  })) {
    this.form.reset();
    this.form.patchValue((0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.cleanObject)({
      ...booking,
      ...booking.extension_data
    }, [null, undefined, '']));
    this.subscription('form_change', this.form.valueChanges.subscribe(() => {
      const {
        date,
        duration
      } = this.form.getRawValue();
      this._assets.setOptions({
        date,
        duration
      });
      this.storeForm();
    }));
    this.timeout('date', () => {
      this.form.patchValue({
        date: booking.date,
        duration: booking.duration
      });
    });
    this._booking.next(new _booking_class__WEBPACK_IMPORTED_MODULE_4__.Booking(booking));
    this._options.next({
      type: this._options.getValue().type
    });
  }
  constructor(_router, _settings, _org, _dialog, _payments, _assets) {
    super();
    this._router = _router;
    this._settings = _settings;
    this._org = _org;
    this._dialog = _dialog;
    this._payments = _payments;
    this._assets = _assets;
    this._view = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject('form');
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject({
      type: 'desk'
    });
    this._booking = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(null);
    this._resource_use = {};
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject('');
    this.last_success = new _booking_class__WEBPACK_IMPORTED_MODULE_4__.Booking(JSON.parse(sessionStorage.getItem('PLACEOS.last_booked_booking') || '{}'));
    this.loading = this._loading.asObservable();
    this.options = this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.shareReplay)(1));
    this.form = (0,_booking_utilities__WEBPACK_IMPORTED_MODULE_5__.generateBookingForm)();
    this.resources = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this._org.active_building, this.options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.distinctUntilKeyChanged)('type'))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(([bld, {
      type
    }]) => {
      if (!bld) return (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)([]);
      switch (type) {
        case 'desk':
          this._loading.next(`Loading desks...`);
          return this.loadResourceList('desks');
        case 'parking':
          this._loading.next(`Loading parking spaces...`);
          return this.loadResourceList('parking-spaces');
        case 'locker':
          this._loading.next(`Loading lockers...`);
          return this.loadResourceList('lockers');
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)([]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.tap)(() => this._loading.next(``)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.shareReplay)(1));
    this.features = this.resources.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(resource => {
      const list = [];
      for (const {
        features
      } of resource) {
        features instanceof Array ? features.forEach(_ => list.push(_)) : null;
      }
      return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.unique)(list).sort((a, b) => a.localeCompare(b));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.shareReplay)(1));
    this.booking_rules = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this._org.building_list, this._options]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(([list, {
      type
    }]) => Promise.all(list.map(bld => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.showMetadata)(bld.id, `${type}_booking_rules`).toPromise()))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(building_rules => {
      const mapping = {};
      for (const rules of building_rules) {
        mapping[rules.id] = rules.details instanceof Array ? rules.details : [];
      }
      return mapping;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.shareReplay)(1));
    this.available_resources = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this.options, this.resources, this.booking_rules, (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.merge)(this.form.get('date').valueChanges, (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.timer)(1000)), (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.merge)(this.form.get('duration').valueChanges, (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.timer)(1000))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.filter)(() => this.form.getRawValue().date > 0 && this.form.getRawValue().duration > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.tap)(([{
      type
    }]) => this._loading.next(`Checking ${type} availability...`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(([options, resources, restrictions]) => {
      var {
        all_day,
        date,
        duration,
        user
      } = this.form.getRawValue();
      if (all_day) {
        date = (0,date_fns__WEBPACK_IMPORTED_MODULE_24__.startOfDay)(date).valueOf();
        duration = 24 * 60 - 1;
      }
      return (0,_bookings_fn__WEBPACK_IMPORTED_MODULE_6__.bookedResourceList)({
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_25__.getUnixTime)(date),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_25__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_26__.addMinutes)(date, duration)),
        type: options.type,
        zones: options.zone_id || (this._settings.get('app.use_region') ? this._org.region?.id : this._org.building?.id) || this._org.organisation.id
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(booked_ids => {
        const start = this.form.getRawValue().date;
        const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_26__.addMinutes)(start, this.form.getRawValue().duration).valueOf();
        this._resource_use = {};
        for (const id of booked_ids) {
          this._resource_use[id] = ' ';
        }
        const available = resources.filter(asset => {
          const is_restricted = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.rulesForResource)({
            date,
            duration,
            resource: asset,
            host: user || (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)()
          }, restrictions[asset.zone?.id] || restrictions[asset.zone?.parent_id] || restrictions[this._org.building.id] || []).hidden;
          return !is_restricted && (!asset.groups?.length || asset.groups.some(grp => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)().groups.includes(grp))) && asset.bookable !== false && (!options.features || options.features?.every(_ => asset.features.includes(_))) && (!options.zone_id || options.zone_id === asset.zone?.id || options.zone_id === asset.zone?.parent_id) && !booked_ids.includes(asset.id);
        });
        console.log('Resources:', resources, available);
        return available;
      }, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)([]))));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.tap)(_ => this._loading.next('')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.shareReplay)(1));
    this.grouped_availability = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this.options, this.available_resources]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(([options, resource]) => {
      const groups = [];
      const asset_list = [...resource].sort((a, b) => a.zone?.id?.localeCompare(b.zone?.id));
      const members = options.members?.length ? options.members : [(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)()];
      while (asset_list.length) {
        const group = [];
        let asset = asset_list.pop();
        while (group.length < members.length) {
          if (group.length && !group.find(_ => _.zone?.id === asset.zone?.id)) {
            break;
          }
          group.push(asset);
          asset = asset_list.pop();
        }
        if (group.length < members.length) continue;
        groups.push(group);
      }
      return groups;
    }));
    this.subscription('router.bookings', this._router.events.subscribe(booking => {
      if (booking instanceof _angular_router__WEBPACK_IMPORTED_MODULE_28__.NavigationEnd && !booking.url.includes('book') && !BOOKING_TYPES.find(_ => booking.url.includes(_))) {
        this.clearForm();
      }
    }));
    this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.first)(_ => _)).subscribe(() => this.setOptions({}));
  }
  setView(value) {
    this._view.next(value);
  }
  setOptions(value) {
    this._options.next({
      ...this._options.getValue(),
      ...value
    });
  }
  setFeature(feature, enable) {
    if (!feature?.length) return;
    const features = this._options.getValue()?.features || [];
    if (enable && !features.includes(feature)) features.push(feature);
    if (!enable && features.includes(feature)) features.splice(features.findIndex(e => e === feature), 1);
    this.setOptions({
      features
    });
  }
  resetForm() {
    if (!sessionStorage.getItem('PLACEOS.booking_form')) {
      return this.newForm();
    }
    const booking = this._booking.getValue();
    this.form.reset({
      user: (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)(),
      booked_by: (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)()
    });
    this.form.patchValue((0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.cleanObject)({
      ...(booking || {}),
      ...(booking?.extension_data || {})
    }, [null, undefined, '']));
    this._options.next({
      type: this._options.getValue().type
    });
  }
  clearForm() {
    sessionStorage.removeItem('PLACEOS.booking_form');
    sessionStorage.removeItem('PLACEOS.booking_form_options');
    this.newForm();
  }
  storeForm() {
    sessionStorage.setItem('PLACEOS.booking_form', JSON.stringify({
      ...this._booking.getValue(),
      ...(0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.cleanObject)(this.form.getRawValue() || {}, [null, undefined, ''])
    }));
    sessionStorage.setItem('PLACEOS.booking_form_filters', JSON.stringify(this._options.getValue() || {}));
  }
  loadForm() {
    this.form.reset({
      user: (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)(),
      booked_by: (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)()
    });
    const data = JSON.parse(sessionStorage.getItem('PLACEOS.booking_form') || '{}');
    const booking = new _booking_class__WEBPACK_IMPORTED_MODULE_4__.Booking(data);
    this._booking.next(booking);
    const booking_data = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.cleanObject)({
      ...data,
      ...(booking || {}),
      ...(booking?.extension_data || {})
    }, [null, undefined, '']);
    this.form.patchValue(booking_data);
    this.setOptions({
      ...JSON.parse(sessionStorage.getItem('PLACEOS.booking_form_filters') || '{}')
    });
  }
  clearOldState() {
    sessionStorage.removeItem('PLACEOS.last_booked_booking');
    this.last_success = new _booking_class__WEBPACK_IMPORTED_MODULE_4__.Booking();
  }
  openBookingLinkModal(force = false) {
    this.form.markAllAsTouched();
    if (!this.form.valid && !force) return;
    const event = new _booking_class__WEBPACK_IMPORTED_MODULE_4__.Booking({
      ...this.booking,
      ...this.form.getRawValue()
    });
    this._dialog.open(_booking_link_modal_component__WEBPACK_IMPORTED_MODULE_9__.BookingLinkModalComponent, {
      data: event
    });
  }
  confirmPost() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.checkQuestions();
      const options = _this._options.getValue();
      const value = _this.form.getRawValue();
      let content = `Would you like to book the ${options.type} ${value.asset_name} for ${(0,date_fns__WEBPACK_IMPORTED_MODULE_30__.format)(value.date, 'dd MMM yyyy')}${value.duration < 12 * 60 ? ' at ' + (0,date_fns__WEBPACK_IMPORTED_MODULE_30__.format)(value.date, 'h:mm a') : ''}`;
      if (options.group) {
        content = `${content}.<br>You group members will be assigned desks nearby your selected desk.`;
      }
      const details = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.openConfirmModal)({
        title: `Book ${options.type}`,
        content,
        icon: {
          content: 'event_available'
        }
      }, _this._dialog);
      if (details?.reason !== 'done') throw 'User cancelled';
      details.loading('Performing booking request...');
      if (options.group) {
        yield _this.postFormForGroup().catch(_ => {
          (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(JSON.stringify(_));
          details.close();
          throw _;
        });
      } else yield _this.postForm().catch(_ => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(JSON.stringify(_));
        details.close();
        throw _;
      });
      details.close();
    })();
  }
  postForm(ignore_check = false) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.form) throw 'No form for booking';
      if (!_this2.form.valid) throw `Some form fields are invalid. [${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.getInvalidFields)(_this2.form).join(', ')}]`;
      _this2.form.patchValue({
        booking_type: _this2.form.getRawValue().booking_type || _this2._options.getValue().type
      });
      let value = _this2.form.getRawValue();
      let booking = _this2._booking.getValue() || new _booking_class__WEBPACK_IMPORTED_MODULE_4__.Booking();
      if (!ignore_check) {
        yield _this2.checkResourceAvailable({
          ...booking,
          ...value,
          user_email: value.user?.email || value.user_email || (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)()?.email
        }, _this2._options.getValue().type);
      }
      if (_this2._payments.payment_module) {
        const receipt = yield _this2._payments.makePayment({
          type: _this2._options.getValue().type,
          resource_name: value.asset_name,
          date: value.date,
          duration: value.duration,
          all_day: value.all_day
        });
        if (!receipt?.success) return;
        value.extension_data = {
          invoice: receipt,
          invoice_id: receipt.invoice_id
        };
      }
      if (!value.zones?.length && _this2._booking.getValue().zones?.length) {
        value.zones = _this2._booking.getValue().zones;
      }
      _this2._loading.next('Saving booking');
      delete value.booking_asset;
      if (value.all_day) {
        value.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_24__.startOfDay)(value.date).valueOf();
        value.duration = 24 * 60 - 1;
      }
      const {
        event_id,
        parent_id
      } = value;
      delete value.event_id;
      delete value.parent_id;
      const resources = value.resources || [];
      const zones = resources[0]?.zone ? (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.unique)([_this2._org.organisation.id, _this2._org.region?.id, resources[0]?.zone?.parent_id, resources[0]?.zone?.id]) : [_this2._org.organisation.id, _this2._org.region?.id];
      const q = event_id ? {
        ical_uid: value.ical_uid,
        event_id: event_id
      } : parent_id ? {
        booking_id: parent_id
      } : {};
      if (booking.instance && !value.update_master) {
        q.instance = true;
        q.start_time = booking.booking_start;
      }
      const result = yield (0,_bookings_fn__WEBPACK_IMPORTED_MODULE_6__.saveBooking)(new _booking_class__WEBPACK_IMPORTED_MODULE_4__.Booking({
        ..._this2._options.getValue(),
        ...value,
        description: value.asset_name || value.description,
        user_name: value.user?.name || value.user_name,
        user_email: value.user?.email || value.user_email,
        extension_data: {
          ...(value.extension_data || {}),
          group: value.group,
          phone: value.phone,
          department: value.user?.department || (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)()?.department
        },
        approved: !_this2._settings.get('app.bookings.no_approval'),
        zones: (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.unique)([...zones, ...(value.zones || [])]).filter(_ => _)
      }), q).toPromise().catch(e => {
        _this2._loading.next('');
        throw e?.error || e;
      });
      if (value.assets?.length || booking.extension_data.assets?.length) {
        const requests = yield (0,libs_assets_src_lib_assets_fn__WEBPACK_IMPORTED_MODULE_10__.validateAssetRequestsForResource)({
          ...result,
          from_booking: true
        }, {
          date: value.date,
          duration: value.duration,
          all_day: value.all_day,
          host: value.booked_by_email,
          zones: (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.unique)([...zones, ...(value.zones || [])]).filter(_ => _)
        }, value.assets).catch(e => {
          console.error("Couldn't update asset requests", e);
          if (e?.status === 409) {
            (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('Some assets are already booked for the selected time');
          }
          _this2._loading.next('');
          throw e?.error || e;
        });
        if (!requests) throw 'Unable to validate asset requests';
        yield requests();
      }
      _this2._loading.next('');
      const {
        booking_type
      } = value;
      _this2.clearForm();
      _this2.form?.patchValue({
        booking_type
      });
      _this2.last_success = result;
      sessionStorage.setItem('PLACEOS.last_booked_booking', JSON.stringify(result));
      _this2.setView('success');
      return result;
    })();
  }
  postFormForGroup() {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        members,
        group,
        type
      } = _this3._options.getValue();
      if (!group) throw 'No group available to book for';
      const extra_members = members.filter(_ => _.email !== (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)().email);
      if (extra_members.length <= 0) throw 'No members in your group to book for.';
      const form = _this3.form.getRawValue();
      const asset_list = yield _this3.available_resources.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.take)(1)).toPromise();
      const active_resource = asset_list.find(_ => _.id === form.asset_id || _.map_id === form.asset_id);
      const level = _this3._org.levelWithID([active_resource.zone?.id]);
      const resources = [active_resource, ...(yield _this3._getNearbyResources(level.map_id, form.asset_id, asset_list, extra_members.length))];
      const group_members = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.unique)([(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)(), ...extra_members], 'email');
      const available = yield Promise.all(group_members.map((_, idx) => _this3.checkResourceAvailable({
        ...form,
        asset_id: resources[idx].map_id || resources[idx].id,
        user_email: _.email
      }, type)));
      const unavailable = group_members.filter((_, idx) => !available[idx]);
      const group_name = `${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)().email}[${(0,date_fns__WEBPACK_IMPORTED_MODULE_30__.format)(Date.now(), 'yyyy-MM-dd')}]`;
      let id = '';
      for (let i = 0; i < group_members.length; i++) {
        if (!available[i]) continue;
        const user = group_members[i];
        const asset = resources[i];
        _this3.form.patchValue({
          ...form,
          parent_id: id,
          user: user,
          user_email: user.email,
          user_id: user.id,
          asset_id: asset?.id,
          asset_name: asset.name,
          description: asset.name,
          map_id: asset?.map_id || asset?.id,
          group: group_name,
          zones: (asset.zone ? (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.unique)([_this3._org.organisation.id, _this3._org.region?.id, asset?.zone?.parent_id, asset?.zone?.id]) : [_this3._org.organisation.id, _this3._org.region?.id]).filter(_ => _)
        });
        const bkn = yield _this3.postForm(true);
        if (bkn.id && !id) id = bkn.id;
      }
      if (unavailable.length) {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyWarn)(`Some members of your group already have a desk booking. [${unavailable.map(_ => _.name || _.email)?.join(', ')}]`);
      }
    })();
  }
  checkQuestions() {
    var _this4 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4._settings.get('app.desks.ignore_questions') !== false) return;
      const ref = _this4._dialog.open(_desk_questions_modal_component__WEBPACK_IMPORTED_MODULE_7__.DeskQuestionsModalComponent);
      const result = yield Promise.race([ref.componentInstance.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.first)(_ => _.reason === 'done')).toPromise(), ref.afterClosed().toPromise()]);
      if (result?.reason !== 'done') throw 'User cancelled';
      const form = ref.componentInstance.form.getRawValue();
      for (const key in form) {
        if (form[key]) throw 'User failed questionaire';
      }
      ref.close();
    })();
  }
  /** Check if the given resource is available for the selected user to book */
  checkResourceAvailable({
    id,
    asset_id,
    date,
    duration,
    user_email
  }, type) {
    var _this5 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!user_email) throw 'No user was selected to book for';
      if (type === 'group-event') return true;
      const bookings = yield (0,_bookings_fn__WEBPACK_IMPORTED_MODULE_6__.queryBookings)({
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_25__.getUnixTime)(date),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_25__.getUnixTime)(date + duration * 60 * 1000),
        type,
        email: user_email,
        limit: 1000
      }).toPromise();
      let active_bookings = bookings.filter(_ => _.status !== 'declined' && _.status !== 'cancelled' && !_.rejected);
      if (active_bookings.find(_ => _.asset_id === asset_id && id !== _.id)) {
        if (asset_id.includes('@')) {
          throw `${asset_id} already has an invite for the selected time`;
        } else {
          throw `${asset_id} is not available at the selected time`;
        }
      }
      const allowed_bookings = _this5._settings.get(`app.bookings.allowed_daily_${type}_count`) ?? 1;
      if (allowed_bookings > 0 && active_bookings.filter(_ => _.user_email.toLowerCase() === (user_email || (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)()?.email).toLowerCase() && _.id !== id).length >= allowed_bookings) {
        const current = user_email === (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)()?.email;
        throw `${current ? 'You' : user_email} already ${current ? 'have' : 'has'} a booking at the selected time`;
      }
      return true;
    })();
  }
  loadResourceList(type) {
    const use_region = this._settings.get('app.use_region');
    const map_metadata = _ => (_?.metadata[type]?.details instanceof Array ? _.metadata[type]?.details : []).map(d => type !== 'lockers' ? {
      ...d,
      id: d.id || d.map_id,
      zone: _.zone
    } : d.lockers?.map(locker => ({
      ...locker,
      bank_id: d.id,
      zone: _.zone
    })) || []);
    const id = use_region ? this._org.building.parent_id : this._org.building.id;
    if (use_region) {
      const id = this._org.building.parent_id;
      const buildings = this._org.buildings.filter(_ => _.parent_id === id);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_32__.forkJoin)(buildings.map(_ => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.listChildMetadata)(_.id, {
        name: type
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(data => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.flatten)(data.map(map_metadata)))))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(_ => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.flatten)(_)));
    }
    return (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.listChildMetadata)(id, {
      name: type
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(data => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.flatten)(data.map(map_metadata))));
  }
  _getNearbyResources(map_url, id, resources, count) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const nearby_resources = [];
      let asset_list = resources.filter(_ => _.id !== id && _.map_id !== id);
      for (let i = 0; i < count; i++) {
        const item = yield (0,_booking_utilities__WEBPACK_IMPORTED_MODULE_5__.findNearbyFeature)(map_url, id, asset_list.map(_ => _.map_id || _.id));
        if (item) {
          nearby_resources.push(resources.find(_ => _.id === item || _.map_id === item));
          asset_list = asset_list.filter(_ => _.id !== item && _.map_id !== item);
        }
      }
      return nearby_resources;
    })();
  }
  static #_ = this.ɵfac = function BookingFormService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BookingFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_28__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵinject"](libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_3__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵinject"](libs_payments_src_lib_payments_service__WEBPACK_IMPORTED_MODULE_8__.PaymentsService), _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵinject"](libs_assets_src_lib_asset_state_service__WEBPACK_IMPORTED_MODULE_11__.AssetStateService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineInjectable"]({
    token: BookingFormService,
    factory: BookingFormService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 84089:
/*!***************************************************************!*\
  !*** ./libs/bookings/src/lib/booking-link-modal.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingLinkModalComponent: () => (/* binding */ BookingLinkModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var libs_common_src_lib_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/common/src/lib/settings.service */ 14233);
/* harmony import */ var libs_common_src_lib_calendar_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/common/src/lib/calendar-links */ 44571);
/* harmony import */ var _booking_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking.class */ 53857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _components_src_lib_safe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/src/lib/safe.pipe */ 26781);
/* harmony import */ var _components_src_lib_sanitise_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/src/lib/sanitise.pipe */ 54616);












class BookingLinkModalComponent {
  constructor(_event, _settings) {
    this._event = _event;
    this._settings = _settings;
    this.outlook_link = (0,libs_common_src_lib_calendar_links__WEBPACK_IMPORTED_MODULE_1__.generateMicrosoftCalendarLink)(this._event);
    this.google_link = (0,libs_common_src_lib_calendar_links__WEBPACK_IMPORTED_MODULE_1__.generateGoogleCalendarLink)(this._event);
    this.ical_link = (0,libs_common_src_lib_calendar_links__WEBPACK_IMPORTED_MODULE_1__.generateCalendarFileLink)(this._event);
  }
  static #_ = this.ɵfac = function BookingLinkModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BookingLinkModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](libs_common_src_lib_settings_service__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: BookingLinkModalComponent,
    selectors: [["booking-link-modal"]],
    decls: 22,
    vars: 12,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4015832758698516701$$LIBS_BOOKINGS_SRC_LIB_BOOKING_LINK_MODAL_COMPONENT_TS_0 = goog.getMsg("Create in Outlook");
        i18n_0 = MSG_EXTERNAL_4015832758698516701$$LIBS_BOOKINGS_SRC_LIB_BOOKING_LINK_MODAL_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟34c16b14ad0e33db574c8bea543e66e766aa3a01␟4015832758698516701:Create in Outlook`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3788591245559456526$$LIBS_BOOKINGS_SRC_LIB_BOOKING_LINK_MODAL_COMPONENT_TS_1 = goog.getMsg("Create in Google Calendar");
        i18n_1 = MSG_EXTERNAL_3788591245559456526$$LIBS_BOOKINGS_SRC_LIB_BOOKING_LINK_MODAL_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟f745484670e6b6bbb8a1c327c222e665fb25b863␟3788591245559456526:Create in Google Calendar`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4894641609416495396$$LIBS_BOOKINGS_SRC_LIB_BOOKING_LINK_MODAL_COMPONENT_TS_2 = goog.getMsg("Download iCal File");
        i18n_2 = MSG_EXTERNAL_4894641609416495396$$LIBS_BOOKINGS_SRC_LIB_BOOKING_LINK_MODAL_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟1af54061e7f4bcfb1048ffaa05c9b8f7c4b41679␟4894641609416495396:Download iCal File`;
      }
      return [i18n_0, i18n_1, i18n_2, [1, "p-4", "w-full", "pb-2"], [1, "flex", "flex-col", "items-center", "space-y-4", "p-4", "relative"], ["btn", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferer", 1, "flex", "items-center", "p-2", "space-x-2", "pr-4", "w-64", "rounded", "inverse", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["src", "assets/icons/gcal.svg", 1, "w-6"], [1, "text-xl"], ["icon", "", "mat-dialog-close", "", 1, "absolute", "top-2", "right-0"]];
    },
    template: function BookingLinkModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Add event to your calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 4)(3, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "sanitize");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](7, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "sanitize");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](12, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "app-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](18, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 9)(20, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 3, ctx.outlook_link, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 6, ctx.google_link, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](14, 9, ctx.ical_link, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _components_src_lib_safe_pipe__WEBPACK_IMPORTED_MODULE_4__.SafePipe, _components_src_lib_sanitise_pipe__WEBPACK_IMPORTED_MODULE_5__.SanitizePipe],
    styles: ["[_nghost-%COMP%] {\n                position: relative;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmctbGluay1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGtCQUFrQjtZQUN0QiIsImZpbGUiOiJib29raW5nLWxpbmstbW9kYWwuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYm9va2luZ3Mvc3JjL2xpYi9ib29raW5nLWxpbmstbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxrQkFBa0I7WUFDdEI7O0FBRVosd1lBQXdZIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 38742:
/*!**************************************************!*\
  !*** ./libs/bookings/src/lib/bookings.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedBookingsModule: () => (/* binding */ SharedBookingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/datepicker */ 61977);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/radio */ 53804);
/* harmony import */ var libs_components_src_lib_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/components/src/lib/components.module */ 14974);
/* harmony import */ var libs_form_fields_src_lib_form_fields_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/form-fields/src/lib/form-fields.module */ 77066);
/* harmony import */ var libs_events_src_lib_events_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/events/src/lib/events.module */ 2704);
/* harmony import */ var libs_spaces_src_lib_spaces_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/spaces/src/lib/spaces.module */ 34360);
/* harmony import */ var libs_users_src_lib_users_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! libs/users/src/lib/users.module */ 34426);
/* harmony import */ var _booking_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking-card.component */ 27547);
/* harmony import */ var _booking_details_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking-details-modal.component */ 1781);
/* harmony import */ var _desk_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./desk-confirm-modal.component */ 3367);
/* harmony import */ var _desk_questions_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./desk-questions-modal.component */ 67254);
/* harmony import */ var _desk_select_modal_desk_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./desk-select-modal/desk-details.component */ 42280);
/* harmony import */ var _desk_select_modal_desk_filters_display_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./desk-select-modal/desk-filters-display.component */ 24174);
/* harmony import */ var _desk_select_modal_desk_filters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./desk-select-modal/desk-filters.component */ 4365);
/* harmony import */ var _desk_select_modal_desk_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./desk-select-modal/desk-list.component */ 93662);
/* harmony import */ var _desk_select_modal_desk_map_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./desk-select-modal/desk-map.component */ 42596);
/* harmony import */ var _desk_select_modal_desk_select_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./desk-select-modal/desk-select-modal.component */ 50622);
/* harmony import */ var _invite_visitor_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./invite-visitor-form.component */ 68874);
/* harmony import */ var _parking_select_modal_parking_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./parking-select-modal/parking-details.component */ 6724);
/* harmony import */ var _parking_select_modal_parking_filters_display_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./parking-select-modal/parking-filters-display.component */ 19138);
/* harmony import */ var _parking_select_modal_parking_filters_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./parking-select-modal/parking-filters.component */ 39145);
/* harmony import */ var _parking_select_modal_parking_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./parking-select-modal/parking-list.component */ 30258);
/* harmony import */ var _parking_select_modal_parking_location_pin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./parking-select-modal/parking-location-pin.component */ 48559);
/* harmony import */ var _parking_select_modal_parking_map_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./parking-select-modal/parking-map.component */ 88952);
/* harmony import */ var _parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./parking-select-modal/parking-select-modal.component */ 67642);
/* harmony import */ var _parking_space_list_field_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./parking-space-list-field.component */ 24844);
/* harmony import */ var _desk_list_field_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./desk-list-field.component */ 56416);
/* harmony import */ var _booking_link_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./booking-link-modal.component */ 84089);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _locker_grid_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./locker-grid.component */ 84854);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _locker_select_modal_locker_select_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./locker-select-modal/locker-select-modal.component */ 90482);
/* harmony import */ var _locker_list_field_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./locker-list-field.component */ 71511);
/* harmony import */ var _locker_select_modal_locker_filters_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./locker-select-modal/locker-filters.component */ 22657);
/* harmony import */ var _locker_select_modal_locker_filters_display_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./locker-select-modal/locker-filters-display.component */ 42394);
/* harmony import */ var _locker_select_modal_locker_bank_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./locker-select-modal/locker-bank-list.component */ 90647);
/* harmony import */ var _locker_select_modal_locker_map_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./locker-select-modal/locker-map.component */ 38720);
/* harmony import */ var _desk_settings_modal_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./desk-settings-modal.component */ 77904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ 37580);
















































const COMPONENTS = [_desk_questions_modal_component__WEBPACK_IMPORTED_MODULE_8__.DeskQuestionsModalComponent, _desk_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__.DeskConfirmModalComponent, _invite_visitor_form_component__WEBPACK_IMPORTED_MODULE_15__.InviteVisitorFormComponent, _booking_details_modal_component__WEBPACK_IMPORTED_MODULE_6__.BookingDetailsModalComponent, _booking_card_component__WEBPACK_IMPORTED_MODULE_5__.BookingCardComponent, _booking_link_modal_component__WEBPACK_IMPORTED_MODULE_25__.BookingLinkModalComponent, _parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_22__.ParkingSpaceSelectModalComponent, _parking_select_modal_parking_filters_component__WEBPACK_IMPORTED_MODULE_18__.ParkingSpaceFiltersComponent, _parking_select_modal_parking_filters_display_component__WEBPACK_IMPORTED_MODULE_17__.ParkingSpaceFiltersDisplayComponent, _parking_select_modal_parking_list_component__WEBPACK_IMPORTED_MODULE_19__.ParkingSpaceListComponent, _parking_select_modal_parking_location_pin_component__WEBPACK_IMPORTED_MODULE_20__.ParkingSpaceLocationPinComponent, _parking_select_modal_parking_map_component__WEBPACK_IMPORTED_MODULE_21__.ParkingSpaceSelectMapComponent, _parking_select_modal_parking_details_component__WEBPACK_IMPORTED_MODULE_16__.ParkingSpaceDetailsComponent, _parking_space_list_field_component__WEBPACK_IMPORTED_MODULE_23__.ParkingSpaceListFieldComponent, _desk_select_modal_desk_select_modal_component__WEBPACK_IMPORTED_MODULE_14__.DeskSelectModalComponent, _desk_select_modal_desk_details_component__WEBPACK_IMPORTED_MODULE_9__.DeskDetailsComponent, _desk_select_modal_desk_filters_component__WEBPACK_IMPORTED_MODULE_11__.DeskFiltersComponent, _desk_select_modal_desk_filters_display_component__WEBPACK_IMPORTED_MODULE_10__.DeskFiltersDisplayComponent, _desk_select_modal_desk_list_component__WEBPACK_IMPORTED_MODULE_12__.DeskListComponent, _desk_select_modal_desk_map_component__WEBPACK_IMPORTED_MODULE_13__.DeskMapComponent, _desk_list_field_component__WEBPACK_IMPORTED_MODULE_24__.DeskListFieldComponent, _desk_settings_modal_component__WEBPACK_IMPORTED_MODULE_33__.DeskSettingsModalComponent, _locker_grid_component__WEBPACK_IMPORTED_MODULE_26__.LockerGridComponent, _locker_list_field_component__WEBPACK_IMPORTED_MODULE_28__.LockerListFieldComponent, _locker_select_modal_locker_select_modal_component__WEBPACK_IMPORTED_MODULE_27__.LockerSelectModalComponent, _locker_select_modal_locker_filters_component__WEBPACK_IMPORTED_MODULE_29__.LockerFiltersComponent, _locker_select_modal_locker_filters_display_component__WEBPACK_IMPORTED_MODULE_30__.LockerFiltersDisplayComponent, _locker_select_modal_locker_bank_list_component__WEBPACK_IMPORTED_MODULE_31__.LockerBankListComponent, _locker_select_modal_locker_map_component__WEBPACK_IMPORTED_MODULE_32__.LockerMapComponent];
class SharedBookingsModule {
  static #_ = this.ɵfac = function SharedBookingsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SharedBookingsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineNgModule"]({
    type: SharedBookingsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineInjector"]({
    providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_35__.ReactiveFormsModule],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_36__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.ReactiveFormsModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_37__.MatRadioModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_38__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__.MatFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_40__.MatDatepickerModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_41__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__.MatDialogModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_43__.MatProgressSpinnerModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__.MatCheckboxModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_45__.MatAutocompleteModule, libs_form_fields_src_lib_form_fields_module__WEBPACK_IMPORTED_MODULE_1__.FormFieldsModule, libs_components_src_lib_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_46__.MatRippleModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__.MatTooltipModule, libs_spaces_src_lib_spaces_module__WEBPACK_IMPORTED_MODULE_3__.SharedSpacesModule, libs_events_src_lib_events_module__WEBPACK_IMPORTED_MODULE_2__.SharedEventsModule, libs_users_src_lib_users_module__WEBPACK_IMPORTED_MODULE_4__.SharedUsersModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵsetNgModuleScope"](SharedBookingsModule, {
    declarations: [_desk_questions_modal_component__WEBPACK_IMPORTED_MODULE_8__.DeskQuestionsModalComponent, _desk_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__.DeskConfirmModalComponent, _invite_visitor_form_component__WEBPACK_IMPORTED_MODULE_15__.InviteVisitorFormComponent, _booking_details_modal_component__WEBPACK_IMPORTED_MODULE_6__.BookingDetailsModalComponent, _booking_card_component__WEBPACK_IMPORTED_MODULE_5__.BookingCardComponent, _booking_link_modal_component__WEBPACK_IMPORTED_MODULE_25__.BookingLinkModalComponent, _parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_22__.ParkingSpaceSelectModalComponent, _parking_select_modal_parking_filters_component__WEBPACK_IMPORTED_MODULE_18__.ParkingSpaceFiltersComponent, _parking_select_modal_parking_filters_display_component__WEBPACK_IMPORTED_MODULE_17__.ParkingSpaceFiltersDisplayComponent, _parking_select_modal_parking_list_component__WEBPACK_IMPORTED_MODULE_19__.ParkingSpaceListComponent, _parking_select_modal_parking_location_pin_component__WEBPACK_IMPORTED_MODULE_20__.ParkingSpaceLocationPinComponent, _parking_select_modal_parking_map_component__WEBPACK_IMPORTED_MODULE_21__.ParkingSpaceSelectMapComponent, _parking_select_modal_parking_details_component__WEBPACK_IMPORTED_MODULE_16__.ParkingSpaceDetailsComponent, _parking_space_list_field_component__WEBPACK_IMPORTED_MODULE_23__.ParkingSpaceListFieldComponent, _desk_select_modal_desk_select_modal_component__WEBPACK_IMPORTED_MODULE_14__.DeskSelectModalComponent, _desk_select_modal_desk_details_component__WEBPACK_IMPORTED_MODULE_9__.DeskDetailsComponent, _desk_select_modal_desk_filters_component__WEBPACK_IMPORTED_MODULE_11__.DeskFiltersComponent, _desk_select_modal_desk_filters_display_component__WEBPACK_IMPORTED_MODULE_10__.DeskFiltersDisplayComponent, _desk_select_modal_desk_list_component__WEBPACK_IMPORTED_MODULE_12__.DeskListComponent, _desk_select_modal_desk_map_component__WEBPACK_IMPORTED_MODULE_13__.DeskMapComponent, _desk_list_field_component__WEBPACK_IMPORTED_MODULE_24__.DeskListFieldComponent, _desk_settings_modal_component__WEBPACK_IMPORTED_MODULE_33__.DeskSettingsModalComponent, _locker_grid_component__WEBPACK_IMPORTED_MODULE_26__.LockerGridComponent, _locker_list_field_component__WEBPACK_IMPORTED_MODULE_28__.LockerListFieldComponent, _locker_select_modal_locker_select_modal_component__WEBPACK_IMPORTED_MODULE_27__.LockerSelectModalComponent, _locker_select_modal_locker_filters_component__WEBPACK_IMPORTED_MODULE_29__.LockerFiltersComponent, _locker_select_modal_locker_filters_display_component__WEBPACK_IMPORTED_MODULE_30__.LockerFiltersDisplayComponent, _locker_select_modal_locker_bank_list_component__WEBPACK_IMPORTED_MODULE_31__.LockerBankListComponent, _locker_select_modal_locker_map_component__WEBPACK_IMPORTED_MODULE_32__.LockerMapComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_36__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.ReactiveFormsModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_37__.MatRadioModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_38__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__.MatFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_40__.MatDatepickerModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_41__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__.MatDialogModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_43__.MatProgressSpinnerModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__.MatCheckboxModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_45__.MatAutocompleteModule, libs_form_fields_src_lib_form_fields_module__WEBPACK_IMPORTED_MODULE_1__.FormFieldsModule, libs_components_src_lib_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_46__.MatRippleModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__.MatTooltipModule, libs_spaces_src_lib_spaces_module__WEBPACK_IMPORTED_MODULE_3__.SharedSpacesModule, libs_events_src_lib_events_module__WEBPACK_IMPORTED_MODULE_2__.SharedEventsModule, libs_users_src_lib_users_module__WEBPACK_IMPORTED_MODULE_4__.SharedUsersModule],
    exports: [_desk_questions_modal_component__WEBPACK_IMPORTED_MODULE_8__.DeskQuestionsModalComponent, _desk_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__.DeskConfirmModalComponent, _invite_visitor_form_component__WEBPACK_IMPORTED_MODULE_15__.InviteVisitorFormComponent, _booking_details_modal_component__WEBPACK_IMPORTED_MODULE_6__.BookingDetailsModalComponent, _booking_card_component__WEBPACK_IMPORTED_MODULE_5__.BookingCardComponent, _booking_link_modal_component__WEBPACK_IMPORTED_MODULE_25__.BookingLinkModalComponent, _parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_22__.ParkingSpaceSelectModalComponent, _parking_select_modal_parking_filters_component__WEBPACK_IMPORTED_MODULE_18__.ParkingSpaceFiltersComponent, _parking_select_modal_parking_filters_display_component__WEBPACK_IMPORTED_MODULE_17__.ParkingSpaceFiltersDisplayComponent, _parking_select_modal_parking_list_component__WEBPACK_IMPORTED_MODULE_19__.ParkingSpaceListComponent, _parking_select_modal_parking_location_pin_component__WEBPACK_IMPORTED_MODULE_20__.ParkingSpaceLocationPinComponent, _parking_select_modal_parking_map_component__WEBPACK_IMPORTED_MODULE_21__.ParkingSpaceSelectMapComponent, _parking_select_modal_parking_details_component__WEBPACK_IMPORTED_MODULE_16__.ParkingSpaceDetailsComponent, _parking_space_list_field_component__WEBPACK_IMPORTED_MODULE_23__.ParkingSpaceListFieldComponent, _desk_select_modal_desk_select_modal_component__WEBPACK_IMPORTED_MODULE_14__.DeskSelectModalComponent, _desk_select_modal_desk_details_component__WEBPACK_IMPORTED_MODULE_9__.DeskDetailsComponent, _desk_select_modal_desk_filters_component__WEBPACK_IMPORTED_MODULE_11__.DeskFiltersComponent, _desk_select_modal_desk_filters_display_component__WEBPACK_IMPORTED_MODULE_10__.DeskFiltersDisplayComponent, _desk_select_modal_desk_list_component__WEBPACK_IMPORTED_MODULE_12__.DeskListComponent, _desk_select_modal_desk_map_component__WEBPACK_IMPORTED_MODULE_13__.DeskMapComponent, _desk_list_field_component__WEBPACK_IMPORTED_MODULE_24__.DeskListFieldComponent, _desk_settings_modal_component__WEBPACK_IMPORTED_MODULE_33__.DeskSettingsModalComponent, _locker_grid_component__WEBPACK_IMPORTED_MODULE_26__.LockerGridComponent, _locker_list_field_component__WEBPACK_IMPORTED_MODULE_28__.LockerListFieldComponent, _locker_select_modal_locker_select_modal_component__WEBPACK_IMPORTED_MODULE_27__.LockerSelectModalComponent, _locker_select_modal_locker_filters_component__WEBPACK_IMPORTED_MODULE_29__.LockerFiltersComponent, _locker_select_modal_locker_filters_display_component__WEBPACK_IMPORTED_MODULE_30__.LockerFiltersDisplayComponent, _locker_select_modal_locker_bank_list_component__WEBPACK_IMPORTED_MODULE_31__.LockerBankListComponent, _locker_select_modal_locker_map_component__WEBPACK_IMPORTED_MODULE_32__.LockerMapComponent]
  });
})();

/***/ }),

/***/ 3367:
/*!***************************************************************!*\
  !*** ./libs/bookings/src/lib/desk-confirm-modal.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeskConfirmModalComponent: () => (/* binding */ DeskConfirmModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../form-fields/src/lib/date-field.component */ 19608);
/* harmony import */ var _form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../form-fields/src/lib/user-search-field.component */ 18000);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);














function DeskConfirmModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 10)(1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function DeskConfirmModalComponent_ng_container_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](2, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a-user-search-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function DeskConfirmModalComponent_ng_container_5_div_2_Template_a_user_search_field_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r2.host, $event) || (ctx_r2.host = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.host);
  }
}
function DeskConfirmModalComponent_ng_container_5_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx_r2.date, "mediumDate"), " ");
  }
}
function DeskConfirmModalComponent_ng_container_5_a_date_field_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a-date-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function DeskConfirmModalComponent_ng_container_5_a_date_field_7_Template_a_date_field_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r2.date, $event) || (ctx_r2.date = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.date);
  }
}
function DeskConfirmModalComponent_ng_container_5_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 24)(4, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function DeskConfirmModalComponent_ng_container_5_div_8_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r2.reason, $event) || (ctx_r2.reason = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.reason);
  }
}
function DeskConfirmModalComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "main", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DeskConfirmModalComponent_ng_container_5_div_2_Template, 4, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 14)(4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](5, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DeskConfirmModalComponent_ng_container_5_div_6_Template, 3, 4, "div", 15)(7, DeskConfirmModalComponent_ng_container_5_a_date_field_7_Template, 1, 1, "a-date-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, DeskConfirmModalComponent_ng_container_5_div_8_Template, 5, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](10, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "footer", 18)(12, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeskConfirmModalComponent_ng_container_5_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.confirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](13, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.can_set_host);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.can_set_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.can_set_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.hide_reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nExp"](ctx_r2.desks.length === 1 ? "" : "s")(ctx_r2.desk_list)((ctx_r2.level == null ? null : ctx_r2.level.display_name) || (ctx_r2.level == null ? null : ctx_r2.level.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nApply"](10);
  }
}
function DeskConfirmModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("diameter", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.loading);
  }
}
class DeskConfirmModalComponent {
  get desk_list() {
    return this.desks.map(_ => _.name).join(', ');
  }
  get hide_reason() {
    return !!this._settings.get('app.desks.hide_reason');
  }
  get can_set_host() {
    return !!this._settings.get('app.desks.can_book_for_others');
  }
  constructor(_data, _settings) {
    this._data = _data;
    this._settings = _settings;
    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.desks = this._data.desks || [];
    this.date = this._data.date;
    this.host = this._data.host;
    this.can_set_date = this._data.can_set_date;
    this.reason = this._data.reason;
    this.level = this._data.level;
  }
  confirm() {
    this.loading = 'Requesting desk booking...';
    this.event.emit({
      reason: 'done'
    });
  }
  static #_ = this.ɵfac = function DeskConfirmModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DeskConfirmModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DeskConfirmModalComponent,
    selectors: [["desk-flow-confirm-modal-component"]],
    outputs: {
      event: "event"
    },
    decls: 8,
    vars: 3,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1554073776118278895$$LIBS_BOOKINGS_SRC_LIB_DESK_CONFIRM_MODAL_COMPONENT_TS_0 = goog.getMsg("Confirm Booking");
        i18n_0 = MSG_EXTERNAL_1554073776118278895$$LIBS_BOOKINGS_SRC_LIB_DESK_CONFIRM_MODAL_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟d513554c23b779e029147a285f1f84f1479488fc␟1554073776118278895:Confirm Booking`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3973931101896534797$$LIBS_BOOKINGS_SRC_LIB_DESK_CONFIRM_MODAL_COMPONENT_TS_1 = goog.getMsg("Date");
        i18n_1 = MSG_EXTERNAL_3973931101896534797$$LIBS_BOOKINGS_SRC_LIB_DESK_CONFIRM_MODAL_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟2f933b826a570836cab04f683970a2d22068458c␟3973931101896534797:Date`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4161419473863623687$$LIBS_BOOKINGS_SRC_LIB_DESK_CONFIRM_MODAL_COMPONENT_TS_2 = goog.getMsg(" Your desk{$interpolation} will be {$interpolation_1} on {$interpolation_2} ", {
          "interpolation": "\uFFFD0\uFFFD",
          "interpolation_1": "\uFFFD1\uFFFD",
          "interpolation_2": "\uFFFD2\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ desks.length === 1 ? '' : 's' }}",
            "interpolation_1": "{{ desk_list }}",
            "interpolation_2": "{{ level?.display_name || level?.name }}"
          }
        });
        i18n_2 = MSG_EXTERNAL_4161419473863623687$$LIBS_BOOKINGS_SRC_LIB_DESK_CONFIRM_MODAL_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟5012a6a10d31e79f5865c2fc7f680b84a14accca␟4161419473863623687: Your desk${"\uFFFD0\uFFFD"}:INTERPOLATION: will be ${"\uFFFD1\uFFFD"}:INTERPOLATION_1: on ${"\uFFFD2\uFFFD"}:INTERPOLATION_2: `;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9178182467454450952$$LIBS_BOOKINGS_SRC_LIB_DESK_CONFIRM_MODAL_COMPONENT_TS_3 = goog.getMsg("Confirm");
        i18n_3 = MSG_EXTERNAL_9178182467454450952$$LIBS_BOOKINGS_SRC_LIB_DESK_CONFIRM_MODAL_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:␟68e710782ccb5398b3acb8844caf0b199da2c3da␟9178182467454450952:Confirm`;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6641024648411549335$$LIBS_BOOKINGS_SRC_LIB_DESK_CONFIRM_MODAL_COMPONENT_TS_4 = goog.getMsg("Host");
        i18n_4 = MSG_EXTERNAL_6641024648411549335$$LIBS_BOOKINGS_SRC_LIB_DESK_CONFIRM_MODAL_COMPONENT_TS_4;
      } else {
        i18n_4 = $localize`:␟fe22ca53e651df951dac25b67c17894b0980f767␟6641024648411549335:Host`;
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4775550080689015987$$LIBS_BOOKINGS_SRC_LIB_DESK_CONFIRM_MODAL_COMPONENT_TS_5 = goog.getMsg("Reason");
        i18n_5 = MSG_EXTERNAL_4775550080689015987$$LIBS_BOOKINGS_SRC_LIB_DESK_CONFIRM_MODAL_COMPONENT_TS_5;
      } else {
        i18n_5 = $localize`:␟4ba250869daa372b54d24fafc0ea934769ee4076␟4775550080689015987:Reason`;
      }
      return [["load_state", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, [1, "flex-1"], ["icon", "", "mat-dialog-close", "", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["icon", "", "mat-dialog-close", ""], [1, "material-icons"], [1, "p-4"], ["host", "", "class", "flex flex-col", 4, "ngIf"], ["date", "", 1, "mb-4"], [4, "ngIf"], [3, "ngModel", "ngModelChange", 4, "ngIf"], ["reason", "", "class", "flex flex-col mb-4", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "p-2"], ["btn", "", "matRipple", "", 3, "click"], ["host", "", 1, "flex", "flex-col"], [1, "mb-4", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["reason", "", 1, "flex", "flex-col", "mb-4"], ["appearance", "outline"], ["matInput", "", "placeholder", "Reason", 3, "ngModelChange", "ngModel"], ["load", "", 1, "flex", "flex-col", "p-12", "items-center", "justify-center"], [1, "mb-4", 3, "diameter"]];
    },
    template: function DeskConfirmModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header")(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DeskConfirmModalComponent_button_4_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DeskConfirmModalComponent_ng_container_5_Template, 14, 7, "ng-container", 9)(6, DeskConfirmModalComponent_ng_template_6_Template, 4, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r6);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner, _form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_1__.DateFieldComponent, _form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_2__.UserSearchFieldComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
    styles: ["main[_ngcontent-%COMP%] {\n                width: 24rem;\n                max-width: calc(100vw - 4.5rem);\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2stY29uZmlybS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFlBQVk7Z0JBQ1osK0JBQStCO1lBQ25DIiwiZmlsZSI6ImRlc2stY29uZmlybS1tb2RhbC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNHJlbTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSA0LjVyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYm9va2luZ3Mvc3JjL2xpYi9kZXNrLWNvbmZpcm0tbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxZQUFZO2dCQUNaLCtCQUErQjtZQUNuQzs7QUFFWixnZEFBZ2QiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNHJlbTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSA0LjVyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 56416:
/*!************************************************************!*\
  !*** ./libs/bookings/src/lib/desk-list-field.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeskListFieldComponent: () => (/* binding */ DeskListFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var libs_common_src_lib_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/common/src/lib/settings.service */ 14233);
/* harmony import */ var _desk_select_modal_desk_select_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desk-select-modal/desk-select-modal.component */ 50622);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/src/lib/authenticated-image.directive */ 93208);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 74646);














const _c0 = () => [];
const _c1 = () => ({
  standalone: true
});
function DeskListFieldComponent_div_1_div_1_mat_checkbox_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-checkbox", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DeskListFieldComponent_div_1_div_1_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.setFeature(opt_r3, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", (ctx_r3.selected_features || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0)).includes(opt_r3))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", opt_r3, " ");
  }
}
function DeskListFieldComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23)(1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DeskListFieldComponent_div_1_div_1_mat_checkbox_4_Template, 2, 5, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.features);
  }
}
function DeskListFieldComponent_div_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 28);
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("source", item_r5.images[0]);
  }
}
function DeskListFieldComponent_div_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 29);
  }
}
function DeskListFieldComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DeskListFieldComponent_div_1_div_1_Template, 5, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DeskListFieldComponent_div_1_img_3_Template, 1, 1, "img", 13)(4, DeskListFieldComponent_div_1_ng_template_4_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 14)(7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 16)(10, "app-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 18)(15, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DeskListFieldComponent_div_1_Template_button_click_15_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.changeResources(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nStart"](17, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DeskListFieldComponent_div_1_Template_button_click_19_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.removeResource(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nStart"](21, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DeskListFieldComponent_div_1_Template_button_click_23_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.toggleFavourite(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const placeholder_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.features == null ? null : ctx_r3.features.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r5.images == null ? null : item_r5.images.length)("ngIfElse", placeholder_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r5.name || item_r5.id || item_r5.map_id || "Desk", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((item_r5.zone == null ? null : item_r5.zone.display_name) || (item_r5.zone == null ? null : item_r5.zone.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("text-blue-400", ctx_r3.favorites.includes(item_r5 == null ? null : item_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.favorites.includes(item_r5 == null ? null : item_r5.id) ? "favorite" : "favorite_border");
  }
}
const EMPTY_FAVS = [];
class DeskListFieldComponent {
  get favorites() {
    return this._settings.get(_desk_select_modal_desk_select_modal_component__WEBPACK_IMPORTED_MODULE_1__.FAV_DESK_KEY) || EMPTY_FAVS;
  }
  constructor(_settings, _dialog) {
    this._settings = _settings;
    this._dialog = _dialog;
    this.features = [];
    this.room_size = 3;
    this.items = [];
    this.disabled = false;
    this.selected_features = [];
    /* istanbul ignore next */
    this.registerOnChange = fn => this._onChange = fn;
    /* istanbul ignore next */
    this.registerOnTouched = fn => this._onTouch = fn;
    this.setDisabledState = s => this.disabled = s;
  }
  /** Add or edit selected items */
  changeResources() {
    const ref = this._dialog.open(_desk_select_modal_desk_select_modal_component__WEBPACK_IMPORTED_MODULE_1__.DeskSelectModalComponent, {
      data: {
        items: this.items,
        options: {
          capacity: this.room_size
        }
      }
    });
    ref.afterClosed().subscribe(items => {
      if (!items) items = ref.componentInstance.selected;
      this.setValue(items);
    });
  }
  /** Remove the selected space from the list */
  removeResource(space) {
    this.setValue(this.items.filter(_ => _.id !== space.id));
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.items = new_value;
    if (this._onChange) this._onChange(this.items);
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.items = value || [];
  }
  toggleFavourite(space) {
    if (!space?.id) return;
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(space.id);
    if (new_state) {
      this._settings.saveUserSetting(_desk_select_modal_desk_select_modal_component__WEBPACK_IMPORTED_MODULE_1__.FAV_DESK_KEY, [...fav_list, space.id]);
    } else {
      this._settings.saveUserSetting(_desk_select_modal_desk_select_modal_component__WEBPACK_IMPORTED_MODULE_1__.FAV_DESK_KEY, fav_list.filter(_ => _ !== space.id));
    }
  }
  static #_ = this.ɵfac = function DeskListFieldComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DeskListFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](libs_common_src_lib_settings_service__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DeskListFieldComponent,
    selectors: [["desk-list-field"]],
    inputs: {
      features: "features"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => DeskListFieldComponent),
      multi: true
    }])],
    decls: 10,
    vars: 1,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1087109089519255800$$LIBS_BOOKINGS_SRC_LIB_DESK_LIST_FIELD_COMPONENT_TS_0 = goog.getMsg("Add Desk");
        i18n_0 = MSG_EXTERNAL_1087109089519255800$$LIBS_BOOKINGS_SRC_LIB_DESK_LIST_FIELD_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟76b072e559d819bff20d8a487e73f64b3afe4f86␟1087109089519255800:Add Desk`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_559636443235347532$$LIBS_BOOKINGS_SRC_LIB_DESK_LIST_FIELD_COMPONENT_TS_1 = goog.getMsg("{$startTagAppIcon}edit{$closeTagAppIcon} Change ", {
          "closeTagAppIcon": "\uFFFD/#18\uFFFD",
          "startTagAppIcon": "\uFFFD#18\uFFFD"
        }, {
          original_code: {
            "closeTagAppIcon": "</app-icon>",
            "startTagAppIcon": "<app-icon>"
          }
        });
        i18n_1 = MSG_EXTERNAL_559636443235347532$$LIBS_BOOKINGS_SRC_LIB_DESK_LIST_FIELD_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟ca9092fdbbb85e5828de77fdf85c49b918cec128␟559636443235347532:${"\uFFFD#18\uFFFD"}:START_TAG_APP_ICON:edit${"\uFFFD/#18\uFFFD"}:CLOSE_TAG_APP_ICON: Change `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2582674642057285571$$LIBS_BOOKINGS_SRC_LIB_DESK_LIST_FIELD_COMPONENT_TS_2 = goog.getMsg("{$startTagAppIcon}close{$closeTagAppIcon} Remove ", {
          "closeTagAppIcon": "\uFFFD/#22\uFFFD",
          "startTagAppIcon": "\uFFFD#22\uFFFD"
        }, {
          original_code: {
            "closeTagAppIcon": "</app-icon>",
            "startTagAppIcon": "<app-icon>"
          }
        });
        i18n_2 = MSG_EXTERNAL_2582674642057285571$$LIBS_BOOKINGS_SRC_LIB_DESK_LIST_FIELD_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟a386ba350cdee69beeb12a908d96f0724ddc2054␟2582674642057285571:${"\uFFFD#22\uFFFD"}:START_TAG_APP_ICON:close${"\uFFFD/#22\uFFFD"}:CLOSE_TAG_APP_ICON: Remove `;
      }
      return [["placeholder", ""], i18n_0, i18n_1, i18n_2, ["list", "", 1, "space-y-2"], ["desk", "", "class", "relative p-2 rounded-lg w-full flex items-center shadow border border-base-200", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "name", "add-desk", 1, "w-full", "inverse", "mt-2", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "flex", "items-center", "flex-wrap", "sm:space-x-2", "mb-2"], [1, "flex-1", "min-w-[256px]", "space-y-2"], ["desk", "", 1, "relative", "p-2", "rounded-lg", "w-full", "flex", "items-center", "shadow", "border", "border-base-200"], ["class", "flex flex-col", 4, "ngIf"], [1, "w-20", "h-20", "rounded-xl", "bg-base-200", "mr-4", "overflow-hidden", "flex", "items-center", "justify-center"], ["auth", "", "class", "min-h-full object-cover", 3, "source", 4, "ngIf", "ngIfElse"], [1, "space-y-2", "pb-4"], [1, "font-medium"], [1, "flex", "items-center", "text-sm", "space-x-2"], [1, "text-blue-500"], [1, "absolute", "bottom-0", "right-0", "flex", "items-center", "justify-end", "text-xs"], ["btn", "", "matRipple", "", "name", "edit-desk", 1, "clear", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", "name", "remove-desk", 1, "clear", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-desk-favourite", 1, "absolute", "top-1", "right-1", 3, "click"], [1, "flex", "flex-col"], ["for", "title"], ["features", "", 1, "flex", "items-center", "flex-wrap", "space-x-2"], [3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [3, "ngModelChange", "ngModel", "ngModelOptions"], ["auth", "", 1, "min-h-full", "object-cover", 3, "source"], ["src", "assets/icons/desk-placeholder.svg", 1, "m-auto"]];
    },
    template: function DeskListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DeskListFieldComponent_div_1_Template, 26, 8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DeskListFieldComponent_Template_button_click_2_listener() {
          return ctx.changeResources();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 7)(4, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.items);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckbox, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_3__.AuthenticatedImageDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple]
  });
}

/***/ }),

/***/ 67254:
/*!*****************************************************************!*\
  !*** ./libs/bookings/src/lib/desk-questions-modal.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeskQuestionsModalComponent: () => (/* binding */ DeskQuestionsModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ 53804);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 74646);









function DeskQuestionsModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "main", 10)(4, "div", 11)(5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](6, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-radio-group", 12)(9, "mat-radio-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-radio-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11)(14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](15, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-radio-group", 14)(18, "mat-radio-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-radio-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15)(23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](24, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-radio-group", 16)(27, "mat-radio-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-radio-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "footer", 17)(32, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeskQuestionsModalComponent_div_0_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](33, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 19)(35, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false);
  }
}
function DeskQuestionsModalComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 21)(1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 19)(4, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class DeskQuestionsModalComponent {
  constructor() {
    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      travelled: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(false),
      unwell: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(false),
      contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(false)
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (Object.keys(this.form.value).find(key => this.form.value[key] === true || this.form.value[key] === 'true')) {
      this.failure = true;
      return;
    }
    this.event.emit({
      reason: 'done'
    });
  }
  static #_ = this.ɵfac = function DeskQuestionsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DeskQuestionsModalComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DeskQuestionsModalComponent,
    selectors: [["desk-question-modal"]],
    outputs: {
      event: "event"
    },
    decls: 3,
    vars: 2,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_877348132538805077$$LIBS_BOOKINGS_SRC_LIB_DESK_QUESTIONS_MODAL_COMPONENT_TS_0 = goog.getMsg("COVID-19 Questionnaire");
        i18n_0 = MSG_EXTERNAL_877348132538805077$$LIBS_BOOKINGS_SRC_LIB_DESK_QUESTIONS_MODAL_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟02006a13b8e6aacb7a6e15bafd8004ed529f5d81␟877348132538805077:COVID-19 Questionnaire`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1650520403092579087$$LIBS_BOOKINGS_SRC_LIB_DESK_QUESTIONS_MODAL_COMPONENT_TS_1 = goog.getMsg(" Have you travelled overseas within the last 14 days?{$startTagSpan}*{$closeTagSpan}", {
          "closeTagSpan": "\uFFFD/#7\uFFFD",
          "startTagSpan": "\uFFFD#7\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_1 = MSG_EXTERNAL_1650520403092579087$$LIBS_BOOKINGS_SRC_LIB_DESK_QUESTIONS_MODAL_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟dad7efbd2320e5ea935aef911f18cbcb24690133␟1650520403092579087: Have you travelled overseas within the last 14 days?${"\uFFFD#7\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_SPAN:`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1182497320820036810$$LIBS_BOOKINGS_SRC_LIB_DESK_QUESTIONS_MODAL_COMPONENT_TS_2 = goog.getMsg(" Are you unwell or experiencing any cold or flu-like symptoms?{$startTagSpan}*{$closeTagSpan}", {
          "closeTagSpan": "\uFFFD/#16\uFFFD",
          "startTagSpan": "\uFFFD#16\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_2 = MSG_EXTERNAL_1182497320820036810$$LIBS_BOOKINGS_SRC_LIB_DESK_QUESTIONS_MODAL_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟cf50bf8de6c6db836da440c89a375631f7ba3fb0␟1182497320820036810: Are you unwell or experiencing any cold or flu-like symptoms?${"\uFFFD#16\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#16\uFFFD"}:CLOSE_TAG_SPAN:`;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_737527639567676154$$LIBS_BOOKINGS_SRC_LIB_DESK_QUESTIONS_MODAL_COMPONENT_TS_3 = goog.getMsg(" Have you had contact with anyone with suspected COVID-19?{$startTagSpan}*{$closeTagSpan}", {
          "closeTagSpan": "\uFFFD/#25\uFFFD",
          "startTagSpan": "\uFFFD#25\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_3 = MSG_EXTERNAL_737527639567676154$$LIBS_BOOKINGS_SRC_LIB_DESK_QUESTIONS_MODAL_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:␟273153c91358de15d124ff2966859d9949080f4c␟737527639567676154: Have you had contact with anyone with suspected COVID-19?${"\uFFFD#25\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#25\uFFFD"}:CLOSE_TAG_SPAN:`;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_935187492052582731$$LIBS_BOOKINGS_SRC_LIB_DESK_QUESTIONS_MODAL_COMPONENT_TS_4 = goog.getMsg("Submit");
        i18n_4 = MSG_EXTERNAL_935187492052582731$$LIBS_BOOKINGS_SRC_LIB_DESK_QUESTIONS_MODAL_COMPONENT_TS_4;
      } else {
        i18n_4 = $localize`:␟71c77bb8cecdf11ec3eead24dd1ba506573fa9cd␟935187492052582731:Submit`;
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4401678084033805848$$LIBS_BOOKINGS_SRC_LIB_DESK_QUESTIONS_MODAL_COMPONENT_TS_5 = goog.getMsg(" Your request to work from the office has been rejected based on your response to the compulsory Covid-19 questions. Please feel free to submit a new request when circumstances change in a way that changes your answer to the questions. ");
        i18n_5 = MSG_EXTERNAL_4401678084033805848$$LIBS_BOOKINGS_SRC_LIB_DESK_QUESTIONS_MODAL_COMPONENT_TS_5;
      } else {
        i18n_5 = $localize`:␟17d62f424c2c025579e1ec0e3f5ad971f57681df␟4401678084033805848: Your request to work from the office has been rejected based on your response to the compulsory Covid-19 questions. Please feel free to submit a new request when circumstances change in a way that changes your answer to the questions. `;
      }
      return [["fail_state", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, ["class", "relative", 4, "ngIf", "ngIfElse"], [1, "relative"], [1, "p-4", "text-xl"], [1, "p-4", 3, "formGroup"], [1, "flex", "flex-col", "mb-4"], ["formControlName", "travelled", 1, "space-x-2"], [3, "value"], ["formControlName", "unwell", 1, "space-x-2"], [1, "flex", "flex-col"], ["formControlName", "contact", 1, "space-x-2"], [1, "flex", "justify-center", "items-center", "p-2"], ["btn", "", "matRipple", "", 3, "click"], ["close", "", "icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "material-icons"], ["failure", "", 1, "pt-8", "relative"], [1, "p-4"]];
    },
    template: function DeskQuestionsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DeskQuestionsModalComponent_div_0_Template, 37, 7, "div", 7)(1, DeskQuestionsModalComponent_ng_template_1_Template, 6, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const fail_state_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.failure)("ngIfElse", fail_state_r3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__.MatRadioButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRipple],
    styles: ["main[_ngcontent-%COMP%] {\n                width: 24rem;\n                max-width: calc(100vw - 4.5rem);\n            }\n\n            [close][_ngcontent-%COMP%] {\n                position: absolute;\n                top: 0.5rem;\n                right: 0.5rem;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2stcXVlc3Rpb25zLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksWUFBWTtnQkFDWiwrQkFBK0I7WUFDbkM7O1lBRUE7Z0JBQ0ksa0JBQWtCO2dCQUNsQixXQUFXO2dCQUNYLGFBQWE7WUFDakIiLCJmaWxlIjoiZGVzay1xdWVzdGlvbnMtbW9kYWwuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRyZW07XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gNC41cmVtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW2Nsb3NlXSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMC41cmVtO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYm9va2luZ3Mvc3JjL2xpYi9kZXNrLXF1ZXN0aW9ucy1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFlBQVk7Z0JBQ1osK0JBQStCO1lBQ25DOztZQUVBO2dCQUNJLGtCQUFrQjtnQkFDbEIsV0FBVztnQkFDWCxhQUFhO1lBQ2pCOztBQUVaLGd0QkFBZ3RCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRyZW07XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gNC41cmVtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW2Nsb3NlXSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMC41cmVtO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 42280:
/*!***************************************************************************!*\
  !*** ./libs/bookings/src/lib/desk-select-modal/desk-details.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeskDetailsComponent: () => (/* binding */ DeskDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var libs_components_src_lib_map_pin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/components/src/lib/map-pin.component */ 71865);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/src/lib/interactive-map.component */ 24918);
/* harmony import */ var _components_src_lib_image_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/src/lib/image-carousel.component */ 65277);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 74646);








const _c0 = () => [];
const _c1 = () => ({
  disable_pan: true,
  disable_zoom: true
});
function DeskDetailsComponent_ng_container_0_image_carousel_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "image-carousel", 22);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("images", ctx_r1.desk.images);
  }
}
function DeskDetailsComponent_ng_container_0_section_31_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](feat_r3);
  }
}
function DeskDetailsComponent_ng_container_0_section_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 23)(1, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DeskDetailsComponent_ng_container_0_section_31_div_3_Template, 3, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.desk.features || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0));
  }
}
function DeskDetailsComponent_ng_container_0_section_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "interactive-map", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.map_url)("focus", ctx_r1.desk.map_id || ctx_r1.desk.id)("features", ctx_r1.features)("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c1));
  }
}
function DeskDetailsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DeskDetailsComponent_ng_container_0_image_carousel_2_Template, 1, 1, "image-carousel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DeskDetailsComponent_ng_container_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.close.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DeskDetailsComponent_ng_container_0_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleFav.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 10)(10, "section", 11)(11, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "section", 13)(14, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 15)(17, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](20, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 15)(22, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "desk");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 15)(27, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, DeskDetailsComponent_ng_container_0_section_31_Template, 4, 2, "section", 16)(32, DeskDetailsComponent_ng_container_0_section_32_Template, 2, 5, "section", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 18)(34, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DeskDetailsComponent_ng_container_0_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r1.active = !ctx_r1.active;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.activeChange.emit(ctx_r1.active));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 20)(36, "app-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](39, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("sm:h-64", ctx_r1.desk.images == null ? null : ctx_r1.desk.images.length)("h-40", ctx_r1.desk.images == null ? null : ctx_r1.desk.images.length)("sm:h-0", !(ctx_r1.desk.images == null ? null : ctx_r1.desk.images.length))("h-12", !(ctx_r1.desk.images == null ? null : ctx_r1.desk.images.length))("!bg-transparent", !(ctx_r1.desk.images == null ? null : ctx_r1.desk.images.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.desk.images == null ? null : ctx_r1.desk.images.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("text-info-content", ctx_r1.fav)("!bg-info", ctx_r1.fav);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.fav ? "favorite" : "favorite_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.desk.display_name || ctx_r1.desk.name || ctx_r1.desk.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.desk.display_name || ctx_r1.desk.name || ctx_r1.desk.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx_r1.desk.zone == null ? null : ctx_r1.desk.zone.display_name) || (ctx_r1.desk.zone == null ? null : ctx_r1.desk.zone.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.desk.features == null ? null : ctx_r1.desk.features.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.hide_map);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("inverse", ctx_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.active ? "remove" : "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nExp"](ctx_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nApply"](39);
  }
}
function DeskDetailsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29)(1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class DeskDetailsComponent {
  constructor() {
    this.fav = false;
    this.active = false;
    this.hide_map = false;
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.toggleFav = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.activeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.map_url = '';
    this.features = [];
  }
  ngOnChanges(changes) {
    if (changes.desk && this.desk) {
      this.updateFeature();
    }
  }
  updateFeature() {
    this.map_url = this.desk.zone.map_id;
    this.features = [{
      location: this.desk.map_id || this.desk.id,
      content: libs_components_src_lib_map_pin_component__WEBPACK_IMPORTED_MODULE_0__.MapPinComponent
    }];
  }
  static #_ = this.ɵfac = function DeskDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DeskDetailsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DeskDetailsComponent,
    selectors: [["desk-details"]],
    inputs: {
      desk: "desk",
      fav: "fav",
      active: "active",
      hide_map: "hide_map"
    },
    outputs: {
      close: "close",
      toggleFav: "toggleFav",
      activeChange: "activeChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    decls: 3,
    vars: 2,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6431414344811875961$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_DETAILS_COMPONENT_TS_0 = goog.getMsg("Single desk");
        i18n_0 = MSG_EXTERNAL_6431414344811875961$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_DETAILS_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟f3cd229363e020d7ceb13bb351bb87f86dda78ef␟6431414344811875961:Single desk`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2952235329246771628$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_DETAILS_COMPONENT_TS_1 = goog.getMsg("{VAR_SELECT, select, true {Remove from booking } false {Add to booking }}");
        i18n_1 = MSG_EXTERNAL_2952235329246771628$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_DETAILS_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟193cbdbbcae6ad83fa2f2ac8d7dcb6b41c384a89␟2952235329246771628:{VAR_SELECT, select, true {Remove from booking } false {Add to booking }}`;
      }
      i18n_1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nPostprocess"](i18n_1, {
        "VAR_SELECT": "\uFFFD0\uFFFD"
      });
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5607930927273386767$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_DETAILS_COMPONENT_TS_2 = goog.getMsg(" {$icu} ", {
          "icu": i18n_1
        }, {
          original_code: {
            "icu": "{ active, select, true { Remove from booking } false\n                            { Add to booking } }"
          }
        });
        i18n_2 = MSG_EXTERNAL_5607930927273386767$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_DETAILS_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟fc6b8194e480db3111367487d3a97bdf5a6333a7␟5607930927273386767: ${i18n_1}:ICU: `;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1551920764795208868$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_DETAILS_COMPONENT_TS_3 = goog.getMsg("Facilities");
        i18n_3 = MSG_EXTERNAL_1551920764795208868$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_DETAILS_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:␟bf10c600bd861cfd0a23f4759562ee0ae9dbe19f␟1551920764795208868:Facilities`;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4621791550614740403$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_DETAILS_COMPONENT_TS_4 = goog.getMsg(" Select a desk to view it's details ");
        i18n_4 = MSG_EXTERNAL_4621791550614740403$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_DETAILS_COMPONENT_TS_4;
      } else {
        i18n_4 = $localize`:␟c6efe811f5410838382ce9adb2636cb75d783ebc␟4621791550614740403: Select a desk to view it's details `;
      }
      return [["emptyState", ""], i18n_0, i18n_2, i18n_3, i18n_4, [4, "ngIf", "ngIfElse"], ["image", "", 1, "relative", "w-full", "bg-base-300"], ["class", "absolute inset-0", 3, "images", 4, "ngIf"], ["icon", "", "matRipple", "", "name", "close-desk-details", 1, "absolute", "top-2", "left-2", "bg-base-200", "sm:hidden", "text-base-content", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-desk-favourite-details", 1, "absolute", "top-2", "right-2", "bg-base-200", 3, "click"], [1, "p-2", "space-y-2", "flex-1", "h-[calc(100%-19.75rem)]", "overflow-auto"], ["actions", "", 1, "z-0", "pb-2", "border-b"], [1, "text-xl", "font-medium", "mb-2", "mt-4"], ["details", "", 1, "space-y-2", "pb-2", "border-b"], [1, "text-xl", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["facilities", "", "class", "space-y-2 pb-2 border-b", 4, "ngIf"], ["map", "", "class", "w-full mx-auto h-64 sm:h-48 relative border border-base-200 overflow-hidden rounded", 4, "ngIf"], [1, "px-2", "pt-2", "pb-[5.5rem]", "border-t", "border-base-200", "shadow", "sm:hidden"], ["btn", "", "matRipple", "", "name", "toggle-desk-details", 1, "w-full", 3, "click"], [1, "flex", "items-center", "justify-center"], [1, "text-2xl"], [1, "absolute", "inset-0", 3, "images"], ["facilities", "", 1, "space-y-2", "pb-2", "border-b"], ["class", "flex items-center flex-wrap space-x-2", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "flex-wrap", "space-x-2"], ["for", "feat", 1, "flex-1", "w-1/2"], ["map", "", 1, "w-full", "mx-auto", "h-64", "sm:h-48", "relative", "border", "border-base-200", "overflow-hidden", "rounded"], [1, "pointer-events-none", 3, "src", "focus", "features", "options"], ["empty", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "opacity-30", "text-center"]];
    },
    template: function DeskDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DeskDetailsComponent_ng_container_0_Template, 40, 25, "ng-container", 5)(1, DeskDetailsComponent_ng_template_1_Template, 3, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const emptyState_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.desk)("ngIfElse", emptyState_r4);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_2__.InteractiveMapComponent, _components_src_lib_image_carousel_component__WEBPACK_IMPORTED_MODULE_3__.ImageCarouselComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRipple],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                width: 30%;\n                min-width: 20rem;\n                height: 100%;\n                min-height: 65vh;\n                background: white;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2stZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixVQUFVO2dCQUNWLGdCQUFnQjtnQkFDaEIsWUFBWTtnQkFDWixnQkFBZ0I7Z0JBQ2hCLGlCQUFpQjtZQUNyQiIsImZpbGUiOiJkZXNrLWRldGFpbHMuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjV2aDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYm9va2luZ3Mvc3JjL2xpYi9kZXNrLXNlbGVjdC1tb2RhbC9kZXNrLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsVUFBVTtnQkFDVixnQkFBZ0I7Z0JBQ2hCLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixpQkFBaUI7WUFDckI7O0FBRVosd3VCQUF3dUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2NXZoO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 24174:
/*!***********************************************************************************!*\
  !*** ./libs/bookings/src/lib/desk-select-modal/desk-filters-display.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeskFiltersDisplayComponent: () => (/* binding */ DeskFiltersDisplayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _desk_filters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desk-filters.component */ 4365);
/* harmony import */ var _booking_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../booking-form.service */ 18379);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 15244);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 74646);













const _c0 = () => [];
function DeskFiltersDisplayComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 2, ctx_r0.start, ctx_r0.time_format), " \u2014 ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 5, ctx_r0.end, ctx_r0.time_format), " ");
  }
}
function DeskFiltersDisplayComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "All Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function DeskFiltersDisplayComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DeskFiltersDisplayComponent_div_15_Template_button_click_3_listener() {
      const feat_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.setFeature(feat_r3, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](feat_r3);
  }
}
function DeskFiltersDisplayComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DeskFiltersDisplayComponent_div_17_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.setOptions({
        show_fav: false
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
class DeskFiltersDisplayComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  get all_day() {
    return this._state.form.value.all_day;
  }
  get start() {
    return this._state.form.value.date;
  }
  get end() {
    const {
      date,
      duration,
      all_day
    } = this._state.form.value;
    if (all_day) return (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.endOfDay)(date);
    return date + duration * 60 * 1000;
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_bsheet, _state, _settings) {
    super();
    this._bsheet = _bsheet;
    this._state = _state;
    this._settings = _settings;
    this.view = 'list';
    this.viewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.options = this._state.options;
    this.setOptions = o => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.editFilter = () => this._bsheet.open(_desk_filters_component__WEBPACK_IMPORTED_MODULE_1__.DeskFiltersComponent);
  }
  static #_ = this.ɵfac = function DeskFiltersDisplayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DeskFiltersDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__.MatBottomSheet), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_booking_form_service__WEBPACK_IMPORTED_MODULE_2__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DeskFiltersDisplayComponent,
    selectors: [["desk-filters-display"]],
    inputs: {
      view: "view"
    },
    outputs: {
      viewChange: "viewChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    decls: 19,
    vars: 17,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5208858215712453646$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_DISPLAY_COMPONENT_TS_0 = goog.getMsg(" Filters ");
        i18n_0 = MSG_EXTERNAL_5208858215712453646$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_DISPLAY_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟19eaa5cd51d70d9ea957eecac78cfd811e9b93d8␟5208858215712453646: Filters `;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8553228906889869186$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_DISPLAY_COMPONENT_TS_1 = goog.getMsg(" Map ");
        i18n_1 = MSG_EXTERNAL_8553228906889869186$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_DISPLAY_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟992a9a6a193a56c5b8846dc972c5e1977ee5f1aa␟8553228906889869186: Map `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7787942140742011951$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_DISPLAY_COMPONENT_TS_2 = goog.getMsg(" List ");
        i18n_2 = MSG_EXTERNAL_7787942140742011951$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_DISPLAY_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟4b286e90831dd637c5cd3eb20544664ee7112669␟7787942140742011951: List `;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1305804744685886428$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_DISPLAY_COMPONENT_TS_3 = goog.getMsg("Favourites Only");
        i18n_3 = MSG_EXTERNAL_1305804744685886428$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_DISPLAY_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:␟d6ad8326be48837fe776a268abc758d1c7ba4f05␟1305804744685886428:Favourites Only`;
      }
      return [i18n_0, i18n_1, i18n_2, i18n_3, ["actions", "", 1, "sm:hidden", "space-x-2", "flex", "flex-row", "items-center", "p-2"], ["btn", "", "matRipple", "", "name", "edit-desk-filters", 1, "flex-1", "w-1/2", 3, "click"], [1, "flex", "items-center"], ["btn", "", "matRipple", "", "name", "view-desk-map", 1, "rounded-l", "rounded-r-none", 3, "click"], ["btn", "", "matRipple", "", "name", "view-desk-list", 1, "rounded-r", "rounded-l-none", 3, "click"], ["filters", "", 1, "flex", "items-center", "flex-wrap", "p-2", "w-[35rem]", "max-w-full", "sm:max-w-[35rem]"], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], [4, "ngIf"], ["filter-item", "", "features", "", 4, "ngFor", "ngForOf"], ["filter-item", "", 4, "ngIf"], ["filter-item", "", "features", ""], ["icon", "", "matRipple", "", "name", "remove-desk-filter", 1, "-mr-4", 3, "click"], ["filter-item", ""], ["icon", "", "matRipple", "", "name", "remove-desk-favs-filter", 1, "-mr-4", 3, "click"]];
    },
    template: function DeskFiltersDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 4)(1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DeskFiltersDisplayComponent_Template_button_click_1_listener() {
          return ctx.editFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 6)(4, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DeskFiltersDisplayComponent_Template_button_click_4_listener() {
          ctx.view = "map";
          return ctx.viewChange.emit(ctx.view);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DeskFiltersDisplayComponent_Template_button_click_6_listener() {
          ctx.view = "list";
          return ctx.viewChange.emit(ctx.view);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](7, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "section", 9)(9, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, DeskFiltersDisplayComponent_ng_container_13_Template, 4, 8, "ng-container", 12)(14, DeskFiltersDisplayComponent_ng_container_14_Template, 2, 0, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, DeskFiltersDisplayComponent_div_15_Template, 6, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, DeskFiltersDisplayComponent_div_17_Template, 6, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_5_0;
        let tmp_6_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("inverse", ctx.view !== "map");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("inverse", ctx.view !== "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 9, ctx.start, "mediumDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.all_day);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.all_day);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 12, ctx.options)) == null ? null : tmp_5_0.features) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 14, ctx.options)) == null ? null : tmp_6_0.show_fav);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
    styles: ["[filter-item][_ngcontent-%COMP%] {\n                display: flex;\n                align-items: center;\n                padding: 0 1rem;\n                height: 2rem;\n                font-size: 0.875rem;\n                border: 1px solid rgba(0, 0, 0, 0.2);\n                border-radius: 1.25rem;\n                margin-right: 0.5rem;\n                margin-bottom: 0.5rem;\n            }\n\n            [filter-item][_ngcontent-%COMP%]:hover {\n                background: rgba(0, 0, 0, 0.1);\n            }\n\n            [filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n                margin-left: 0.5rem;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2stZmlsdGVycy1kaXNwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixtQkFBbUI7Z0JBQ25CLGVBQWU7Z0JBQ2YsWUFBWTtnQkFDWixtQkFBbUI7Z0JBQ25CLG9DQUFvQztnQkFDcEMsc0JBQXNCO2dCQUN0QixvQkFBb0I7Z0JBQ3BCLHFCQUFxQjtZQUN6Qjs7WUFFQTtnQkFDSSw4QkFBOEI7WUFDbEM7O1lBRUE7Z0JBQ0ksbUJBQW1CO1lBQ3ZCIiwiZmlsZSI6ImRlc2stZmlsdGVycy1kaXNwbGF5LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgW2ZpbHRlci1pdGVtXSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtmaWx0ZXItaXRlbV06aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW2ZpbHRlci1pdGVtXSA+ICogKyAqIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYm9va2luZ3Mvc3JjL2xpYi9kZXNrLXNlbGVjdC1tb2RhbC9kZXNrLWZpbHRlcnMtZGlzcGxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2IsbUJBQW1CO2dCQUNuQixlQUFlO2dCQUNmLFlBQVk7Z0JBQ1osbUJBQW1CO2dCQUNuQixvQ0FBb0M7Z0JBQ3BDLHNCQUFzQjtnQkFDdEIsb0JBQW9CO2dCQUNwQixxQkFBcUI7WUFDekI7O1lBRUE7Z0JBQ0ksOEJBQThCO1lBQ2xDOztZQUVBO2dCQUNJLG1CQUFtQjtZQUN2Qjs7QUFFWixvd0NBQW93QyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgW2ZpbHRlci1pdGVtXSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtmaWx0ZXItaXRlbV06aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW2ZpbHRlci1pdGVtXSA+ICogKyAqIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4365:
/*!***************************************************************************!*\
  !*** ./libs/bookings/src/lib/desk-select-modal/desk-filters.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeskFiltersComponent: () => (/* binding */ DeskFiltersComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 28797);
/* harmony import */ var libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/organisation/src/lib/organisation.service */ 19863);
/* harmony import */ var _booking_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../booking-form.service */ 18379);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 15244);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../form-fields/src/lib/date-field.component */ 19608);
/* harmony import */ var _form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../form-fields/src/lib/duration-field.component */ 83476);
/* harmony import */ var _form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../form-fields/src/lib/time-field.component */ 81413);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/src/lib/building.pipe */ 56062);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 597);
























const _c0 = () => ({
  standalone: true
});
const _c1 = () => [];
function DeskFiltersComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DeskFiltersComponent_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function DeskFiltersComponent_mat_form_field_13_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const reg_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", reg_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", reg_r4.display_name || reg_r4.name, " ");
  }
}
function DeskFiltersComponent_mat_form_field_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field", 34)(1, "mat-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DeskFiltersComponent_mat_form_field_13_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setRegion($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, DeskFiltersComponent_mat_form_field_13_mat_option_2_Template, 2, 2, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r1.region)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 3, ctx_r1.regions));
  }
}
function DeskFiltersComponent_mat_form_field_15_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bld_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", bld_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", bld_r6.display_name || bld_r6.name, " ");
  }
}
function DeskFiltersComponent_mat_form_field_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field", 34)(1, "mat-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DeskFiltersComponent_mat_form_field_15_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setBuilding($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, DeskFiltersComponent_mat_form_field_15_mat_option_5_Template, 2, 2, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 4, ctx_r1.building))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](12, _c0))("placeholder", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 6, ctx_r1.building)) == null ? null : tmp_3_0.display_name) || ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 8, ctx_r1.building)) == null ? null : tmp_3_0.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 10, ctx_r1.buildings));
  }
}
function DeskFiltersComponent_mat_form_field_17_mat_option_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "building");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const lvl_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, lvl_r8.parent_id)) == null ? null : tmp_4_0.display_name, " ");
  }
}
function DeskFiltersComponent_mat_form_field_17_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 37)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, DeskFiltersComponent_mat_form_field_17_mat_option_3_div_2_Template, 5, 3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const lvl_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", lvl_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.use_region);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", lvl_r8.display_name || lvl_r8.name, " ");
  }
}
function DeskFiltersComponent_mat_form_field_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field", 34)(1, "mat-select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DeskFiltersComponent_mat_form_field_17_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setOptions({
        zone_id: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, DeskFiltersComponent_mat_form_field_17_mat_option_3_Template, 5, 3, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 3, ctx_r1.options)) == null ? null : tmp_1_0.zone_id)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 5, ctx_r1.levels));
  }
}
function DeskFiltersComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 44)(1, "mat-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function DeskFiltersComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](3, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "a-time-field", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DeskFiltersComponent_div_25_Template_a_time_field_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.form.patchValue({
        date: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 47)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "a-duration-field", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r1.form.value.date)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](8, _c0))("use_24hr", ctx_r1.use_24hr);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("time", (tmp_4_0 = ctx_r1.form.get("date")) == null ? null : tmp_4_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr);
  }
}
function DeskFiltersComponent_section_36_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 52)(1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-checkbox", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DeskFiltersComponent_section_36_div_3_Template_mat_checkbox_ngModelChange_3_listener($event) {
      const feat_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setFeature(feat_r11, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const feat_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](feat_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", (((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 3, ctx_r1.options)) == null ? null : tmp_4_0.features) || _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c1)).includes(feat_r11))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](6, _c0));
  }
}
function DeskFiltersComponent_section_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 50)(1, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, DeskFiltersComponent_section_36_div_3_Template, 5, 7, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 1, ctx_r1.features));
  }
}
function DeskFiltersComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 55)(1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DeskFiltersComponent_div_38_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
class DeskFiltersComponent {
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get region() {
    return this._org.region;
  }
  set region(reg) {
    this._org.region = reg;
  }
  get allow_time_changes() {
    return !!this._settings.get('app.desks.allow_time_changes');
  }
  get allow_all_day() {
    return this.allow_time_changes && !!this._settings.get('app.desks.allow_all_day');
  }
  get end_date() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.endOfDay)((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.addDays)(Date.now(), this._settings.get('app.desks.available_period') || 90));
  }
  get use_24hr() {
    return this._settings.get('app.use_24_hour_time');
  }
  get use_region() {
    return this._settings.get('app.use_region');
  }
  constructor(_bsheet_ref, _state, _org, _settings) {
    this._bsheet_ref = _bsheet_ref;
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this.can_close = false;
    this.options = this._state.options;
    this.features = this._state.features;
    this.buildings = this._org.active_buildings;
    this.form = this._state.form;
    this.regions = this._org.region_list;
    this.levels = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this._org.active_region, this._org.active_building]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(([region, bld]) => {
      const level_list = this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      const viewable_levels = level_list.filter(lvl => !lvl.tags.includes('parking'));
      return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || '').localeCompare(b.display_name || ''));
    }));
    this.close = () => this._bsheet_ref.dismiss();
    this.setOptions = o => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.setLevel = l => {};
    this.setRegion = r => this._org.region = r;
    this.can_close = !!this._bsheet_ref;
  }
  static #_ = this.ɵfac = function DeskFiltersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DeskFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__.MatBottomSheetRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_booking_form_service__WEBPACK_IMPORTED_MODULE_2__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_1__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: DeskFiltersComponent,
    selectors: [["desk-filters"]],
    inputs: {
      hide_levels: "hide_levels"
    },
    decls: 39,
    vars: 33,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7734428352389083660$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_0 = goog.getMsg("Desk Filters");
        i18n_0 = MSG_EXTERNAL_7734428352389083660$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟a42190bd19b1cc93828e70bd0ef7a119f4c22aca␟7734428352389083660:Desk Filters`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5028777105388019087$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_1 = goog.getMsg("Details");
        i18n_1 = MSG_EXTERNAL_5028777105388019087$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟4f8b2bb476981727ab34ed40fde1218361f92c45␟5028777105388019087:Details`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_471816275243265264$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_2 = goog.getMsg("Location");
        i18n_2 = MSG_EXTERNAL_471816275243265264$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟ed31c09fd77c36238c13d83635f3fe5294c733d2␟471816275243265264:Location`;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3973931101896534797$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_3 = goog.getMsg("Date");
        i18n_3 = MSG_EXTERNAL_3973931101896534797$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:␟2f933b826a570836cab04f683970a2d22068458c␟3973931101896534797:Date`;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5010873675481014004$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_4 = goog.getMsg(" {$interpolation} ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ 'COMMON.FAVOURITES' | translate }}"
          }
        });
        i18n_4 = MSG_EXTERNAL_5010873675481014004$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_4;
      } else {
        i18n_4 = $localize`:␟bde3d9fd949ba4c6014b8e64c1362753bca1cf0c␟5010873675481014004: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5737771872454551963$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_5 = goog.getMsg(" {$interpolation} ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ 'DESKS.SHOW_FAVOURITES' | translate }}"
          }
        });
        i18n_5 = MSG_EXTERNAL_5737771872454551963$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_5;
      } else {
        i18n_5 = $localize`:␟cd942cf7297cb47f1a116efdedff1c8547c6ea3e␟5737771872454551963: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8264413387051126615$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_6 = goog.getMsg("Any Region");
        i18n_6 = MSG_EXTERNAL_8264413387051126615$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_6;
      } else {
        i18n_6 = $localize`:␟130845b58eba8e50c98f3fba117a0168cdba4f31␟8264413387051126615:Any Region`;
      }
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7323982518822503502$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_7 = goog.getMsg("Any Level");
        i18n_7 = MSG_EXTERNAL_7323982518822503502$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_7;
      } else {
        i18n_7 = $localize`:␟50407595967bf29832e873b41f9de3502d5c3e03␟7323982518822503502:Any Level`;
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_835486935962207481$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_8 = goog.getMsg(" All Day ");
        i18n_8 = MSG_EXTERNAL_835486935962207481$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_8;
      } else {
        i18n_8 = $localize`:␟d7f43e20f3a729fa3de32bc7a1f709ccd722eae5␟835486935962207481: All Day `;
      }
      let i18n_9;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4204880191779081093$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_9 = goog.getMsg("Start Time");
        i18n_9 = MSG_EXTERNAL_4204880191779081093$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_9;
      } else {
        i18n_9 = $localize`:␟7c0a71d337783e527c1c8e91e433b301c5b1d8a8␟4204880191779081093:Start Time`;
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3845185958891849368$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_10 = goog.getMsg("End Time");
        i18n_10 = MSG_EXTERNAL_3845185958891849368$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_10;
      } else {
        i18n_10 = $localize`:␟e1f10d9bf4d3c37490cd5bf82007444ae7af46b1␟3845185958891849368:End Time`;
      }
      let i18n_11;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8650499415827640724$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_11 = goog.getMsg("Type");
        i18n_11 = MSG_EXTERNAL_8650499415827640724$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_11;
      } else {
        i18n_11 = $localize`:␟f61c6867295f3b53d23557021f2f4e0aa1d0b8fc␟8650499415827640724:Type`;
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2296888311792137027$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_12 = goog.getMsg(" Apply Filters ");
        i18n_12 = MSG_EXTERNAL_2296888311792137027$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_FILTERS_COMPONENT_TS_12;
      } else {
        i18n_12 = $localize`:␟c17e2cc448524a39eb83b2937cea3235a2e8bf37␟2296888311792137027: Apply Filters `;
      }
      return [i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_8, i18n_9, i18n_10, i18n_11, i18n_12, [1, "flex", "rounded-t-md", "items-center", "border-b", "border-base-200", "pb-2", "sm:hidden"], [1, "flex-1", "pl-2"], ["icon", "", "matRipple", "", "name", "close-desk-filters", "class", "sm:hidden", 3, "click", 4, "ngIf"], [1, "font-medium", "flex-2", "text-center"], [1, "flex-1"], [1, "max-h-[65vh]", "p-2", "overflow-y-auto", "overflow-x-hidden", "divide-y", "divide-base-200", "w-full", "max-w-[100vw]", "sm:max-w-[30vw]", 3, "formGroup"], ["details", ""], [1, "text-lg", "font-medium", "mb-1"], [1, "flex-1", "min-w-[8rem]", "flex", "flex-col"], ["for", "location"], ["appearance", "outline", "class", "w-full", 4, "ngIf"], [1, "flex-1", "min-w-[256px]"], ["name", "date", 3, "ngModelChange", "ngModel", "ngModelOptions", "to"], ["class", "flex justify-end -mt-2 mb-2", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["favs", "", 1, "space-y-2", "pb-4"], [1, "text-lg", "font-medium"], [1, "flex", "items-center"], ["for", "fav", 1, "flex-1", "w-1/2"], ["name", "fav", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "space-y-2", "features", "", 4, "ngIf"], ["class", "px-2 py-2 w-full border-t border-base-200", 4, "ngIf"], ["icon", "", "matRipple", "", "name", "close-desk-filters", 1, "sm:hidden", 3, "click"], ["appearance", "outline", 1, "w-full"], ["name", "region", "placeholder", i18n_6, 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", "placeholder", i18n_7, 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "flex", "flex-col-reverse"], ["class", "opacity-30 text-xs", 4, "ngIf"], [1, "opacity-30", "text-xs"], [1, "opacity-0"], [1, "flex", "justify-end", "-mt-2", "mb-2"], ["formControlName", "all_day"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1", "w-1/3"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr"], ["formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr"], ["features", "", 1, "space-y-2"], ["class", "flex items-center flex-wrap space-x-2", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "flex-wrap", "space-x-2"], ["for", "feat", 1, "flex-1", "w-1/2"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "px-2", "py-2", "w-full", "border-t", "border-base-200"], ["btn", "", "matRipple", "", "name", "apply-desk-filters", 1, "w-full", 3, "click"]];
    },
    template: function DeskFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, DeskFiltersComponent_button_2_Template, 3, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](4, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "form", 16)(7, "section", 17)(8, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](9, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 19)(11, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](12, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, DeskFiltersComponent_mat_form_field_13_Template, 4, 6, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, DeskFiltersComponent_mat_form_field_15_Template, 7, 13, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, DeskFiltersComponent_mat_form_field_17_Template, 5, 8, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 22)(19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](20, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "a-date-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DeskFiltersComponent_Template_a_date_field_ngModelChange_21_listener($event) {
          return ctx.form.patchValue({
            date: $event
          });
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, DeskFiltersComponent_div_24_Template, 3, 0, "div", 24)(25, DeskFiltersComponent_div_25_Template, 9, 9, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "section", 26)(27, "h2", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](28, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 28)(31, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](32, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "mat-checkbox", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](35, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DeskFiltersComponent_Template_mat_checkbox_ngModelChange_34_listener($event) {
          return ctx.setOptions({
            show_fav: $event
          });
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, DeskFiltersComponent_section_36_Template, 5, 3, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](37, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, DeskFiltersComponent_div_38_Template, 3, 0, "div", 32);
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_15_0;
        let tmp_17_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.can_close);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.use_region && ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 17, ctx.regions)) == null ? null : tmp_2_0.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.use_region && ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 19, ctx.buildings)) == null ? null : tmp_3_0.length) > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.hide_levels);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.form.value.date)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](31, _c0))("to", ctx.end_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 21, "FORM.DATE_ERROR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.allow_all_day);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.form.value.all_day);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](29, 23, "COMMON.FAVOURITES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nApply"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 25, "DESKS.SHOW_FAVOURITES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nApply"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", (tmp_15_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](35, 27, ctx.options)) == null ? null : tmp_15_0.show_fav)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](32, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_17_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](37, 29, ctx.features)) == null ? null : tmp_17_0.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.can_close);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_3__.DateFieldComponent, _form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_4__.DurationFieldComponent, _form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_5__.TimeFieldComponent, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__.IconComponent, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_7__.BuildingPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                width: 100%;\n                max-width: 100vw;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2stZmlsdGVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixXQUFXO2dCQUNYLGdCQUFnQjtZQUNwQiIsImZpbGUiOiJkZXNrLWZpbHRlcnMuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYm9va2luZ3Mvc3JjL2xpYi9kZXNrLXNlbGVjdC1tb2RhbC9kZXNrLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsV0FBVztnQkFDWCxnQkFBZ0I7WUFDcEI7O0FBRVosZ2pCQUFnakIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 93662:
/*!************************************************************************!*\
  !*** ./libs/bookings/src/lib/desk-select-modal/desk-list.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeskListComponent: () => (/* binding */ DeskListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _booking_form_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../booking-form.service */ 18379);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/src/lib/authenticated-image.directive */ 93208);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 74646);











function DeskListComponent_ng_container_5_ul_1_li_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function DeskListComponent_ng_container_5_ul_1_li_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 23);
  }
  if (rf & 2) {
    const desk_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("source", desk_r2.images[0]);
  }
}
function DeskListComponent_ng_container_5_ul_1_li_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 24);
  }
}
function DeskListComponent_ng_container_5_ul_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeskListComponent_ng_container_5_ul_1_li_1_Template_button_click_1_listener() {
      const desk_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.selectDesk(desk_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DeskListComponent_ng_container_5_ul_1_li_1_div_3_Template, 3, 0, "div", 14)(4, DeskListComponent_ng_container_5_ul_1_li_1_img_4_Template, 1, 1, "img", 15)(5, DeskListComponent_ng_container_5_ul_1_li_1_ng_template_5_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 16)(8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 18)(11, "app-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeskListComponent_ng_container_5_ul_1_li_1_Template_button_click_15_listener() {
      const desk_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.toggleFav.emit(desk_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const desk_r2 = ctx.$implicit;
    const placeholder_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("!border-info", ctx_r2.active === desk_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.selected.includes(desk_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", desk_r2.images == null ? null : desk_r2.images.length)("ngIfElse", placeholder_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", desk_r2.name || desk_r2.id || "Desk", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (desk_r2.zone == null ? null : desk_r2.zone.display_name) || (desk_r2.zone == null ? null : desk_r2.zone.name) || "<No Level>", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("text-info", ctx_r2.isFavourite(desk_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.isFavourite(desk_r2.id) ? "favorite" : "favorite_border");
  }
}
function DeskListComponent_ng_container_5_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DeskListComponent_ng_container_5_ul_1_li_1_Template, 18, 10, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r2.desks));
  }
}
function DeskListComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DeskListComponent_ng_container_5_ul_1_Template, 3, 3, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const empty_state_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx_r2.desks)) == null ? null : tmp_3_0.length)("ngIfElse", empty_state_r5);
  }
}
function DeskListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Finding available desks...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("diameter", 32);
  }
}
function DeskListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28)(1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " No available desk for selected time and/or filters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class DeskListComponent {
  constructor(_state) {
    this._state = _state;
    this.active = '';
    this.selected = '';
    this.favorites = [];
    this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.toggleFav = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.desks = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this._state.options, this._state.available_resources]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([{
      show_fav
    }, _]) => _.filter(i => !show_fav || this.isFavourite(i.id))));
    this.loading = this._state.loading;
  }
  isFavourite(desk_id) {
    return this.favorites.includes(desk_id);
  }
  selectDesk(desk) {
    this.onSelect.emit(desk);
  }
  static #_ = this.ɵfac = function DeskListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DeskListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_booking_form_service__WEBPACK_IMPORTED_MODULE_0__.BookingFormService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DeskListComponent,
    selectors: [["desk-list"]],
    inputs: {
      active: "active",
      selected: "selected",
      favorites: "favorites"
    },
    outputs: {
      onSelect: "onSelect",
      toggleFav: "toggleFav"
    },
    decls: 11,
    vars: 7,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5968132631442328843$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_LIST_COMPONENT_TS_0 = goog.getMsg("Results");
        i18n_0 = MSG_EXTERNAL_5968132631442328843$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_LIST_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟80ed5b776a26a78099e230e0e89d96c33ba44e24␟5968132631442328843:Results`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1931205204318295377$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_LIST_COMPONENT_TS_1 = goog.getMsg(" {$interpolation} result(s) found ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ (desks | async)?.length || 0 }}"
          }
        });
        i18n_1 = MSG_EXTERNAL_1931205204318295377$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_LIST_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟99a2ae2a83b9fba5f9d4547746782447904ccf7b␟1931205204318295377: ${"\uFFFD0\uFFFD"}:INTERPOLATION: result(s) found `;
      }
      return [["load_state", ""], ["empty_state", ""], ["placeholder", ""], i18n_0, i18n_1, [1, "font-bold"], ["count", "", 1, "text-sm", "opacity-60", "mb-4"], [4, "ngIf", "ngIfElse"], ["class", "list-style-none space-y-2", 4, "ngIf", "ngIfElse"], [1, "list-style-none", "space-y-2"], ["desk", "", "class", "relative rounded-lg w-full shadow border bg-base-100 border-base-200 overflow-hidden", 3, "!border-info", 4, "ngFor", "ngForOf"], ["desk", "", 1, "relative", "rounded-lg", "w-full", "shadow", "border", "bg-base-100", "border-base-200", "overflow-hidden"], ["name", "select-desk", "matRipple", "", 1, "w-full", "h-full", "flex", "p-2", 3, "click"], [1, "relative", "w-20", "h-20", "rounded-xl", "bg-base-200", "mr-4", "flex", "items-center", "justify-center"], ["class", "absolute top-1 left-1 border border-neutral bg-base-200 rounded-full h-6 w-6 flex items-center justify-center text-white", 4, "ngIf"], ["auth", "", "class", "object-cover h-full", 3, "source", 4, "ngIf", "ngIfElse"], [1, "space-y-2", "pt-2", "flex-1", "text-left"], [1, "font-medium"], [1, "flex", "items-center", "text-sm", "space-x-2"], [1, "text-info"], [1, "text-xs"], ["icon", "", "matRipple", "", "name", "toggle-desk-favourite", 1, "absolute", "top-1", "right-1", 3, "click"], [1, "absolute", "top-1", "left-1", "border", "border-neutral", "bg-base-200", "rounded-full", "h-6", "w-6", "flex", "items-center", "justify-center", "text-white"], ["auth", "", 1, "object-cover", "h-full", 3, "source"], ["src", "assets/icons/desk-placeholder.svg", 1, "m-auto"], ["loading", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"], [1, "opacity-30"], ["empty", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "opacity-30", "text-center"]];
    },
    template: function DeskListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](1, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DeskListComponent_ng_container_5_Template, 3, 4, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DeskListComponent_ng_template_7_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(9, DeskListComponent_ng_template_9_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_4_0;
        const load_state_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nExp"](((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 3, ctx.desks)) == null ? null : tmp_2_0.length) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nApply"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 5, ctx.loading)) == null ? null : tmp_4_0.length))("ngIfElse", load_state_r6);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinner, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_2__.AuthenticatedImageDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                width: 100%;\n                height: 100%;\n                padding: 0.5rem;\n                background: rgba(0, 0, 0, 0.05);\n                overflow-y: auto;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2stbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixlQUFlO2dCQUNmLCtCQUErQjtnQkFDL0IsZ0JBQWdCO1lBQ3BCIiwiZmlsZSI6ImRlc2stbGlzdC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYm9va2luZ3Mvc3JjL2xpYi9kZXNrLXNlbGVjdC1tb2RhbC9kZXNrLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osZUFBZTtnQkFDZiwrQkFBK0I7Z0JBQy9CLGdCQUFnQjtZQUNwQjs7QUFFWiw0bUJBQTRtQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 42596:
/*!***********************************************************************!*\
  !*** ./libs/bookings/src/lib/desk-select-modal/desk-map.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeskMapComponent: () => (/* binding */ DeskMapComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _booking_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../booking-form.service */ 18379);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var libs_explore_src_lib_explore_spaces_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/explore/src/lib/explore-spaces.service */ 65897);
/* harmony import */ var libs_explore_src_lib_explore_desk_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/explore/src/lib/explore-desk-info.component */ 82882);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/src/lib/interactive-map.component */ 24918);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/src/lib/building.pipe */ 56062);



















const _c0 = () => ({
  controls: true
});
const _c1 = () => ({
  standalone: true
});
function DeskMapComponent_mat_form_field_1_mat_option_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "building");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const lvl_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, lvl_r3.parent_id)) == null ? null : tmp_4_0.display_name, " ");
  }
}
function DeskMapComponent_mat_form_field_1_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, DeskMapComponent_mat_form_field_1_mat_option_2_div_2_Template, 5, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const lvl_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", lvl_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.use_region);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", lvl_r3.display_name || lvl_r3.name, " ");
  }
}
function DeskMapComponent_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-form-field", 4)(1, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function DeskMapComponent_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.level, $event) || (ctx_r1.level = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function DeskMapComponent_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.setOptions({
        zone_ids: [$event.id]
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, DeskMapComponent_mat_form_field_1_mat_option_2_Template, 5, 3, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 3, ctx_r1.levels));
  }
}
class DeskMapComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  get map_url() {
    return this.level?.map_id || '';
  }
  get use_region() {
    return !!this._settings.get('app.use_region');
  }
  constructor(_state, _settings, _org) {
    super();
    this._state = _state;
    this._settings = _settings;
    this._org = _org;
    this.is_displayed = false;
    this.active = '';
    this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.desks = this._state.available_resources;
    this.loading = this._state.loading;
    this.zoom = 1;
    this.center = {
      x: 0.5,
      y: 0.5
    };
    this.coordinates = undefined;
    this._change = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(0);
    this.levels = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this._org.active_region, this._org.active_building]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([region, bld]) => {
      const level_list = this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      const viewable_levels = level_list.filter(lvl => !lvl.tags.includes('parking'));
      return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || '').localeCompare(b.display_name || ''));
    }));
    this.setOptions = o => this._state.setOptions(o);
    this.actions = this._state.available_resources.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(desks => desks.map(desk => ({
      id: desk.map_id || desk.id,
      action: ['touchend', 'mouseup'],
      callback: () => this.selectDesk(desk)
    }))));
    this.features = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this._state.resources, this._state.available_resources]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([desks]) => {
      return this._settings.get('app.desks.hide_user') ? [] : desks.map(desk => ({
        location: desk.id,
        content: libs_explore_src_lib_explore_desk_info_component__WEBPACK_IMPORTED_MODULE_3__.ExploreDeskInfoComponent,
        full_size: true,
        no_scale: true,
        data: {
          id: desk.map_id || desk.id,
          map_id: desk.name,
          name: desk.name || desk.map_id,
          user: this._state.resourceUserName(desk.id)
        },
        z_index: 20
      }));
    }));
    this.styles = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this._state.resources, this._state.available_resources, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([desks, free_desks]) => desks.reduce((styles, desk) => {
      const colours = this._settings.get('app.explore.colors') || {};
      const status = this.active === desk.id ? 'active' : free_desks.find(_ => _.id === desk.id) ? 'free' : this._state.resourceUserName(desk.id) ? 'busy' : 'not-bookable';
      styles[`#${desk.map_id || desk.id}`] = {
        fill: status === 'active' ? '#512DA8' : colours[`desk-${status}`] || colours[`${status}`] || libs_explore_src_lib_explore_spaces_service__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_COLOURS[`${status}`]
      };
      return styles;
    }, {})));
  }
  ngOnInit() {
    this.subscription('levels_update', this._state.options.subscribe(({
      zone_id
    }) => {
      const level = this._org.levelWithID([zone_id]);
      if (level) this.level = level;
    }));
  }
  ngOnChanges(changes) {
    if (changes.active) this._change.next(Date.now());
  }
  selectDesk(desk) {
    this.onSelect.emit(desk);
  }
  setLevel(level) {
    this.setOptions({
      zone_id: level?.id
    });
    const bld = this._org.buildings.find(_ => _.id === level?.parent_id);
    if (bld) {
      const [latitude, longitude] = bld.location.split(',').map(_ => parseFloat(_));
      this.coordinates = {
        latitude,
        longitude
      };
    }
    this.level = level;
  }
  setZoom(new_zoom) {
    this.zoom = Math.max(0.5, Math.min(10, new_zoom));
  }
  resetMap() {
    this.zoom = 1;
    this.center = {
      x: 0.5,
      y: 0.5
    };
  }
  static #_ = this.ɵfac = function DeskMapComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DeskMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_booking_form_service__WEBPACK_IMPORTED_MODULE_1__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: DeskMapComponent,
    selectors: [["desk-map"]],
    inputs: {
      is_displayed: "is_displayed",
      active: "active"
    },
    outputs: {
      onSelect: "onSelect"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
    decls: 8,
    vars: 17,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7323982518822503502$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_MAP_COMPONENT_TS_0 = goog.getMsg("Any Level");
        i18n_0 = MSG_EXTERNAL_7323982518822503502$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_MAP_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟50407595967bf29832e873b41f9de3502d5c3e03␟7323982518822503502:Any Level`;
      }
      return [[1, "bg-base-100", "p-2", "border-b", "border-base-200", "w-full"], ["levels", "", "appearance", "outline", "class", "w-full", 4, "ngIf"], [1, "relative", "flex-1", "w-full"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], ["levels", "", "appearance", "outline", 1, "w-full"], ["name", "location", "placeholder", i18n_0, 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "opacity-30 text-xs", 4, "ngIf"], [1, "opacity-30", "text-xs"], [1, "opacity-0"]];
    },
    template: function DeskMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DeskMapComponent_mat_form_field_1_Template, 4, 6, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2)(4, "interactive-map", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("zoomChange", function DeskMapComponent_Template_interactive_map_zoomChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.zoom, $event) || (ctx.zoom = $event);
          return $event;
        })("centerChange", function DeskMapComponent_Template_interactive_map_centerChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.center, $event) || (ctx.center = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 8, ctx.levels)) == null ? null : tmp_0_0.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx.map_url);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("zoom", ctx.zoom)("center", ctx.center);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 10, ctx.styles))("features", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 12, ctx.features))("actions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 14, ctx.actions))("options", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](16, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_5__.InteractiveMapComponent, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_6__.BuildingPipe],
    styles: ["[_nghost-%COMP%] {\n                position: relative;\n                background: rgba(0, 0, 0, 0.05);\n                display: flex;\n                flex-direction: column;\n            }\n\n            button[_ngcontent-%COMP%] {\n                border-radius: 0;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2stbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksa0JBQWtCO2dCQUNsQiwrQkFBK0I7Z0JBQy9CLGFBQWE7Z0JBQ2Isc0JBQXNCO1lBQzFCOztZQUVBO2dCQUNJLGdCQUFnQjtZQUNwQiIsImZpbGUiOiJkZXNrLW1hcC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYm9va2luZ3Mvc3JjL2xpYi9kZXNrLXNlbGVjdC1tb2RhbC9kZXNrLW1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGtCQUFrQjtnQkFDbEIsK0JBQStCO2dCQUMvQixhQUFhO2dCQUNiLHNCQUFzQjtZQUMxQjs7WUFFQTtnQkFDSSxnQkFBZ0I7WUFDcEI7O0FBRVosd3NCQUF3c0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 50622:
/*!********************************************************************************!*\
  !*** ./libs/bookings/src/lib/desk-select-modal/desk-select-modal.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeskSelectModalComponent: () => (/* binding */ DeskSelectModalComponent),
/* harmony export */   FAV_DESK_KEY: () => (/* binding */ FAV_DESK_KEY)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _booking_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../booking-form.service */ 18379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _desk_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desk-details.component */ 42280);
/* harmony import */ var _desk_filters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desk-filters.component */ 4365);
/* harmony import */ var _desk_filters_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desk-filters-display.component */ 24174);
/* harmony import */ var _desk_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desk-list.component */ 93662);
/* harmony import */ var _desk_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./desk-map.component */ 42596);















function DeskSelectModalComponent_desk_list_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "desk-list", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("toggleFav", function DeskSelectModalComponent_desk_list_16_Template_desk_list_toggleFav_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.toggleFavourite($event));
    })("onSelect", function DeskSelectModalComponent_desk_list_16_Template_desk_list_onSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.displayed = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("active", ctx_r2.displayed == null ? null : ctx_r2.displayed.id)("selected", ctx_r2.selected_ids)("favorites", ctx_r2.favorites);
  }
}
function DeskSelectModalComponent_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DeskSelectModalComponent_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.displayed = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function DeskSelectModalComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "desk-map", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onSelect", function DeskSelectModalComponent_ng_template_37_Template_desk_map_onSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.displayed = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("is_displayed", !!ctx_r2.displayed)("active", ctx_r2.displayed == null ? null : ctx_r2.displayed.id);
  }
}
const FAV_DESK_KEY = 'favourite_desks';
class DeskSelectModalComponent {
  get selected_ids() {
    return this.selected.map(_ => _.id).join(',');
  }
  get favorites() {
    return this._settings.get(FAV_DESK_KEY) || [];
  }
  constructor(_dialog_ref, _settings, _event_form, _data) {
    this._dialog_ref = _dialog_ref;
    this._settings = _settings;
    this._event_form = _event_form;
    this._data = _data;
    this.selected = [];
    this.view = 'list';
    this.selected = [...(_data.items || [])];
    this._event_form.setOptions(_data.options);
  }
  isSelected(id) {
    return id && this.selected_ids.includes(id);
  }
  setSelected(item, state) {
    const list = this.selected.filter(_ => _.id !== item.id);
    if (state) list.push(item);
    this.selected = list;
    if (!this._data.options.group && state) {
      this.displayed = null;
      setTimeout(() => this._dialog_ref.close([item]), 50);
    }
  }
  toggleFavourite(item) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(item.id);
    if (new_state) {
      this._settings.saveUserSetting(FAV_DESK_KEY, [...fav_list, item.id]);
    } else {
      this._settings.saveUserSetting(FAV_DESK_KEY, fav_list.filter(_ => _ !== item.id));
    }
  }
  static #_ = this.ɵfac = function DeskSelectModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DeskSelectModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_booking_form_service__WEBPACK_IMPORTED_MODULE_1__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: DeskSelectModalComponent,
    selectors: [["desk-select-modal"]],
    decls: 39,
    vars: 27,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1749010714240797250$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_SELECT_MODAL_COMPONENT_TS_0 = goog.getMsg("Find Desk");
        i18n_0 = MSG_EXTERNAL_1749010714240797250$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_SELECT_MODAL_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟4221741642af22ed8e17ee106c326def85e70c61␟1749010714240797250:Find Desk`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8443571736703532556$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_SELECT_MODAL_COMPONENT_TS_1 = goog.getMsg(" View List ");
        i18n_1 = MSG_EXTERNAL_8443571736703532556$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_SELECT_MODAL_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟30d3439b0e0095fe69503245f3bd7a2e9498be7c␟8443571736703532556: View List `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_819716823718458903$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_SELECT_MODAL_COMPONENT_TS_2 = goog.getMsg("Back to form");
        i18n_2 = MSG_EXTERNAL_819716823718458903$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_SELECT_MODAL_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟18843b85d1a4f17fefafd07bc5cde636dca44295␟819716823718458903:Back to form`;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3611851363359647609$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_SELECT_MODAL_COMPONENT_TS_3 = goog.getMsg(" {$interpolation} desk(s) added ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ selected.length }}"
          }
        });
        i18n_3 = MSG_EXTERNAL_3611851363359647609$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_SELECT_MODAL_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:␟f566e50852be3f327b040870cbf63b59ea3b8d8c␟3611851363359647609: ${"\uFFFD0\uFFFD"}:INTERPOLATION: desk(s) added `;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6426755559249487826$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_SELECT_MODAL_COMPONENT_TS_4 = goog.getMsg(" {$interpolation} ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{\n                                isSelected(displayed?.id)\n                                    ? 'Remove from Booking'\n                                    : 'Add to booking'\n                            }}"
          }
        });
        i18n_4 = MSG_EXTERNAL_6426755559249487826$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_SELECT_MODAL_COMPONENT_TS_4;
      } else {
        i18n_4 = $localize`:␟f45c34c7afdabef75762747a20f4113d65eb2312␟6426755559249487826: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_874721418273731876$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_SELECT_MODAL_COMPONENT_TS_5 = goog.getMsg(" Back ");
        i18n_5 = MSG_EXTERNAL_874721418273731876$$LIBS_BOOKINGS_SRC_LIB_DESK_SELECT_MODAL_DESK_SELECT_MODAL_COMPONENT_TS_5;
      } else {
        i18n_5 = $localize`:␟ccda1d41ca79703a85a3a598c1d97e040a32b766␟874721418273731876: Back `;
      }
      return [["map_view", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, [1, "w-[100vw]", "h-[100vh]", "sm:relative", "sm:w-auto", "sm:h-auto", "flex", "flex-col", "bg-base-100"], [1, "flex", "items-center", "space-x-4", "w-full"], ["icon", "", "mat-dialog-close", "", 1, "bg-base-200"], [1, "hidden", "sm:flex", "items-center", "justify-end", "flex-1"], ["btn", "", "matRipple", "", "name", "view-desk-map", 1, "rounded-l", "rounded-r-none", 3, "click"], ["btn", "", "matRipple", "", "name", "view-desk-list", 1, "rounded-r", "rounded-l-none", 3, "click"], [1, "flex", "items-center", "divide-x", "divide-base-200", "h-[65vh]", "w-[calc(100vw-4rem)]", "overflow-hidden"], [1, "h-full", "hidden", "sm:flex", "max-w-[20rem]", "sm:h-[65vh]", "sm:max-h-full", 3, "hide_levels"], [1, "flex", "flex-col", "items-center", "flex-1", "w-1/2", "h-full", "sm:h-[65vh]"], [1, "w-full", "border-b", "border-base-200", 3, "viewChange", "view"], ["class", "flex-1 h-1/2 bg-base-200", 3, "active", "selected", "favorites", "toggleFav", "onSelect", 4, "ngIf", "ngIfElse"], [1, "h-full", "w-full", "sm:h-[65vh]", "absolute", "sm:relative", "sm:flex", "sm:max-w-[20rem]", "z-20", "bg-base-100", "block", 3, "activeChange", "toggleFav", "close", "desk", "active", "hide_map", "fav"], [1, "flex", "sm:hidden", "flex-col-reverse", "items-center", "justify-end", "px-2", "pt-2", "pb-[5.5rem]", "border-t", "border-base-200", "w-full"], ["btn", "", "matRipple", "", "name", "desk-return", "class", "inverse sm:hidden w-full", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "name", "save-desks", 1, "w-full", "sm:w-32", "sm:mb-0", 3, "mat-dialog-close"], [1, "hidden", "sm:flex", "items-center", "justify-between", "p-2", "border-t", "border-base-200", "w-full"], ["btn", "", "matRipple", "", "name", "desk-return", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], [1, "opacity-60", "text-sm"], ["btn", "", "matRipple", "", "name", "toggle-desk", 3, "click", "disabled"], [1, "mr-1"], [1, "flex-1", "h-1/2", "bg-base-200", 3, "toggleFav", "onSelect", "active", "selected", "favorites"], ["btn", "", "matRipple", "", "name", "desk-return", 1, "inverse", "sm:hidden", "w-full", 3, "click"], [1, "flex-1", "h-1/2", "w-full", 3, "onSelect", "is_displayed", "active"]];
    },
    template: function DeskSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 7)(1, "header", 8)(2, "button", 9)(3, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 10)(8, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DeskSelectModalComponent_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.view = "map");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " Map ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DeskSelectModalComponent_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.view = "list");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "main", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "desk-filters", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 15)(15, "desk-filters-display", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("viewChange", function DeskSelectModalComponent_Template_desk_filters_display_viewChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.view, $event) || (ctx.view = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, DeskSelectModalComponent_desk_list_16_Template, 1, 3, "desk-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "desk-details", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("activeChange", function DeskSelectModalComponent_Template_desk_details_activeChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.setSelected(ctx.displayed, $event));
        })("toggleFav", function DeskSelectModalComponent_Template_desk_details_toggleFav_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.toggleFavourite(ctx.displayed));
        })("close", function DeskSelectModalComponent_Template_desk_details_close_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.displayed = null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "footer", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, DeskSelectModalComponent_button_19_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](21, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "footer", 22)(23, "button", 23)(24, "div", 24)(25, "app-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](28, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](30, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DeskSelectModalComponent_Template_button_click_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id)));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 24)(33, "app-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](36, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, DeskSelectModalComponent_ng_template_37_Template, 1, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const map_view_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("inverse", ctx.view !== "map");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("inverse", ctx.view !== "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hide_levels", ctx.view !== "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("view", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.view === "list")("ngIfElse", map_view_r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("hidden", !ctx.displayed)("inset-0", ctx.displayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("desk", ctx.displayed)("active", ctx.selected_ids.includes(ctx.displayed == null ? null : ctx.displayed.id))("hide_map", ctx.view === "map")("fav", ctx.displayed && ctx.favorites.includes(ctx.displayed == null ? null : ctx.displayed.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.displayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mb-2", ctx.displayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mat-dialog-close", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mat-dialog-close", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nExp"](ctx.selected.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nApply"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.displayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "remove" : "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nExp"](ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "Remove from Booking" : "Add to booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nApply"](36);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogClose, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _desk_details_component__WEBPACK_IMPORTED_MODULE_3__.DeskDetailsComponent, _desk_filters_component__WEBPACK_IMPORTED_MODULE_4__.DeskFiltersComponent, _desk_filters_display_component__WEBPACK_IMPORTED_MODULE_5__.DeskFiltersDisplayComponent, _desk_list_component__WEBPACK_IMPORTED_MODULE_6__.DeskListComponent, _desk_map_component__WEBPACK_IMPORTED_MODULE_7__.DeskMapComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 77904:
/*!****************************************************************!*\
  !*** ./libs/bookings/src/lib/desk-settings-modal.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeskSettingsModalComponent: () => (/* binding */ DeskSettingsModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _components_src_lib_desk_height_presets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/src/lib/desk-height-presets.component */ 3051);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ 64992);

















function DeskSettingsModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](4, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 7)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Presets");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 8)(9, "mat-form-field", 9)(10, "mat-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function DeskSettingsModalComponent_div_0_Template_mat_select_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.preset, $event) || (ctx_r1.preset = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function DeskSettingsModalComponent_div_0_Template_mat_select_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.setPreset($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Standing");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Seated");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DeskSettingsModalComponent_div_0_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.edit_presets = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Current Height");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 15)(23, "mat-slider", 16)(24, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function DeskSettingsModalComponent_div_0_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.height, $event) || (ctx_r1.height = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function DeskSettingsModalComponent_div_0_Template_input_ngModelChange_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.updatePreset(ctx_r1.height));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DeskSettingsModalComponent_div_0_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.setDeskHeight());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " Apply Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "button", 20)(30, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.preset);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayWith", ctx_r1.formatLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.height.toFixed(1), "cm ");
  }
}
function DeskSettingsModalComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "desk-height-presets", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("close", function DeskSettingsModalComponent_ng_template_1_Template_desk_height_presets_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.edit_presets = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("show_close", true);
  }
}
class DeskSettingsModalComponent {
  constructor(_data, _org, _settings, _dialog_ref) {
    this._data = _data;
    this._org = _org;
    this._settings = _settings;
    this._dialog_ref = _dialog_ref;
    this.desk_id = this._data.id;
    this.edit_presets = false;
    this.height = 71;
  }
  ngOnInit() {
    const sitting_height = this._settings.get('desk_sitting_height');
    const standing_height = this._settings.get('desk_standing_height');
    if (!sitting_height && !standing_height) {
      this.edit_presets = true;
    }
    const last_height = parseInt(localStorage.getItem('PLACEOS.last_desk_height'), 10);
    this.height = last_height || sitting_height || 71;
    if (this.height === sitting_height) {
      this.preset = 'sitting';
    } else if (this.height === standing_height) {
      this.preset = 'standing';
    }
  }
  updatePreset(new_height) {
    const sitting_height = this._settings.get('desk_sitting_height') || 71;
    const standing_height = this._settings.get('desk_standing_height') || 102;
    if (new_height === sitting_height) {
      this.preset = 'sitting';
    } else if (new_height === standing_height) {
      this.preset = 'standing';
    } else {
      this.preset = null;
    }
  }
  setPreset(value) {
    switch (value) {
      case 'standing':
        this.height = this._settings.get('desk_standing_height') || 102;
        break;
      case 'sitting':
        this.height = this._settings.get('desk_sitting_height') || 71;
        break;
      default:
        this.height = 70;
        break;
    }
  }
  setDeskHeight() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const sys_id = _this._org.binding('desks');
      localStorage.setItem('PLACEOS.last_desk_height', `${_this.height}`);
      if (!sys_id) return _this._dialog_ref.close();
      const module = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.getModule)(sys_id, 'DeskControl');
      yield module.execute('set_desk_height', [_this.desk_id, _this.height]).catch(_ => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('Error setting desk height.' + _);
        throw _;
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Successfully set desk height');
      _this._dialog_ref.close();
    })();
  }
  formatLabel(value) {
    return `${value.toFixed(1)}cm`;
  }
  static #_ = this.ɵfac = function DeskSettingsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DeskSettingsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: DeskSettingsModalComponent,
    selectors: [["desk-settings-modal"]],
    decls: 3,
    vars: 2,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7032027191807032897$$LIBS_BOOKINGS_SRC_LIB_DESK_SETTINGS_MODAL_COMPONENT_TS_0 = goog.getMsg("Desk Height");
        i18n_0 = MSG_EXTERNAL_7032027191807032897$$LIBS_BOOKINGS_SRC_LIB_DESK_SETTINGS_MODAL_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟ec37a2ac1276a5f69d65d5ba86b2e98c41b201a9␟7032027191807032897:Desk Height`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8247461324425873330$$LIBS_BOOKINGS_SRC_LIB_DESK_SETTINGS_MODAL_COMPONENT_TS_1 = goog.getMsg(" Set your desk height for the best experience ");
        i18n_1 = MSG_EXTERNAL_8247461324425873330$$LIBS_BOOKINGS_SRC_LIB_DESK_SETTINGS_MODAL_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟de53fc27bc96d3e69d6c7d9b0a19619db7cc1076␟8247461324425873330: Set your desk height for the best experience `;
      }
      return [["desk_height_tooltip", ""], i18n_0, i18n_1, ["class", "relative p-4 bg-base-100 rounded shadow w-[20rem]", 4, "ngIf", "ngIfElse"], [1, "relative", "p-4", "bg-base-100", "rounded", "shadow", "w-[20rem]"], [1, "text-lg"], [1, "text-xs", "opacity-60", "mb-4"], [1, "flex", "flex-col", "mt-2", "mb-4"], [1, "flex", "items-center", "space-x-2", "pb-4"], ["appearance", "outline", 1, "no-subscript", "flex-1", "w-1/2"], ["placeholder", "No selected preset", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "standing"], ["value", "sitting"], ["icon", "", "matRipple", "", 1, "rounded", "h-12", "w-12", "bg-secondary", "text-secondary-content", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["min", "60", "max", "120", "step", "0.5", "discrete", "", 1, "flex-1", 3, "displayWith"], ["matSliderThumb", "", 3, "ngModelChange", "ngModel"], [1, "text-sm", "w-12", "text-right"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-0", "right-0"], [3, "close", "show_close"]];
    },
    template: function DeskSettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, DeskSettingsModalComponent_div_0_Template, 32, 4, "div", 3)(1, DeskSettingsModalComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const desk_height_tooltip_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.edit_presets)("ngIfElse", desk_height_tooltip_r4);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _components_src_lib_desk_height_presets_component__WEBPACK_IMPORTED_MODULE_5__.DeskHeightPresetsComponent, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__.MatSlider, _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__.MatSliderThumb],
    encapsulation: 2
  });
}

/***/ }),

/***/ 68874:
/*!****************************************************************!*\
  !*** ./libs/bookings/src/lib/invite-visitor-form.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InviteVisitorFormComponent: () => (/* binding */ InviteVisitorFormComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var libs_common_src_lib_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/common/src/lib/notifications */ 39525);
/* harmony import */ var libs_common_src_lib_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/common/src/lib/general */ 64217);
/* harmony import */ var libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! libs/organisation/src/lib/organisation.service */ 19863);
/* harmony import */ var _booking_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking-form.service */ 18379);
/* harmony import */ var libs_users_src_lib_user_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! libs/users/src/lib/user.class */ 93693);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../form-fields/src/lib/date-field.component */ 19608);
/* harmony import */ var _form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../form-fields/src/lib/duration-field.component */ 83476);
/* harmony import */ var _form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../form-fields/src/lib/time-field.component */ 81413);
/* harmony import */ var _form_fields_src_lib_user_list_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../form-fields/src/lib/user-list-field.component */ 840);
/* harmony import */ var _form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../form-fields/src/lib/user-search-field.component */ 18000);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 597);




























const _c0 = () => ({
  standalone: true
});
function InviteVisitorFormComponent_ng_container_0_div_1_form_4_div_1_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bld_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", bld_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", bld_r5.display_name || bld_r5.name, " ");
  }
}
function InviteVisitorFormComponent_ng_container_0_div_1_form_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 32)(1, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nStart"](2, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "mat-form-field", 43)(5, "mat-select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function InviteVisitorFormComponent_ng_container_0_div_1_form_4_div_1_Template_mat_select_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.form.patchValue({
        zones: [$event]
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, InviteVisitorFormComponent_ng_container_0_div_1_form_4_div_1_mat_option_6_Template, 2, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r3.form.value.zones[0])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 3, ctx_r3.buildings));
  }
}
function InviteVisitorFormComponent_ng_container_0_div_1_form_4_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 49)(1, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "a-user-search-field", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 1, "FORM.HOST"), "");
  }
}
function InviteVisitorFormComponent_ng_container_0_div_1_form_4_ng_container_19_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function InviteVisitorFormComponent_ng_container_0_div_1_form_4_ng_container_19_mat_option_9_Template_mat_option_click_0_listener() {
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.setVisitor(item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 59)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", item_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", item_r8.email, " ", item_r8.company ? "| " + item_r8.company : "", " ");
  }
}
function InviteVisitorFormComponent_ng_container_0_div_1_form_4_ng_container_19_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function InviteVisitorFormComponent_ng_container_0_div_1_form_4_ng_container_19_mat_option_20_Template_mat_option_click_0_listener() {
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.setVisitor(item_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 59)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", item_r10.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", item_r10.email, " ", item_r10.company ? "| " + item_r10.company : "", " ");
  }
}
function InviteVisitorFormComponent_ng_container_0_div_1_form_4_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 32)(2, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nStart"](3, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "mat-form-field", 43)(6, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("focus", function InviteVisitorFormComponent_ng_container_0_div_1_form_4_ng_container_19_Template_input_focus_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.filterVisitors(ctx_r3.form.value.asset_name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "mat-autocomplete", null, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, InviteVisitorFormComponent_ng_container_0_div_1_form_4_ng_container_19_mat_option_9_Template, 6, 4, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 32)(11, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nStart"](12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "mat-form-field", 43)(15, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("focus", function InviteVisitorFormComponent_ng_container_0_div_1_form_4_ng_container_19_Template_input_focus_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.filterVisitors(ctx_r3.form.value.asset_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](17, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "mat-autocomplete", null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, InviteVisitorFormComponent_ng_container_0_div_1_form_4_ng_container_19_mat_option_20_Template, 6, 4, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 32)(22, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](23, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](25, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const name_auto_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](8);
    const email_auto_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](19);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matAutocomplete", name_auto_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r3.filtered_visitors);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matAutocomplete", email_auto_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r3.filtered_visitors);
  }
}
function InviteVisitorFormComponent_ng_container_0_div_1_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "form", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, InviteVisitorFormComponent_ng_container_0_div_1_form_4_div_1_Template, 8, 6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 32)(3, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nStart"](4, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "a-date-field", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 35)(8, "div", 36)(9, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nStart"](10, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "a-time-field", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function InviteVisitorFormComponent_ng_container_0_div_1_form_4_Template_a_time_field_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.form.patchValue({
        date: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 36)(14, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nStart"](15, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "a-duration-field", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, InviteVisitorFormComponent_ng_container_0_div_1_form_4_div_18_Template, 7, 3, "div", 41)(19, InviteVisitorFormComponent_ng_container_0_div_1_form_4_ng_container_19_Template, 26, 4, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 32)(21, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](22, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](24, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    const multi_state_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r3.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r3.buildings == null ? null : ctx_r3.buildings.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r3.form.value.date)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](11, _c0))("disabled", ctx_r3.form.value.all_day)("use_24hr", ctx_r3.use_24hr);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("time", ctx_r3.form.value.date)("use_24hr", ctx_r3.use_24hr);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.can_book_for_others);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r3.multiple)("ngIfElse", multi_state_r13);
  }
}
function InviteVisitorFormComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](3, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, InviteVisitorFormComponent_ng_container_0_div_1_form_4_Template, 25, 12, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 28)(6, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function InviteVisitorFormComponent_ng_container_0_div_1_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.sendInvite());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](7, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.form);
  }
}
function InviteVisitorFormComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, InviteVisitorFormComponent_ng_container_0_div_1_Template, 8, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const load_state_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, ctx_r3.loading) && !ctx_r3.loading_many)("ngIfElse", load_state_r14);
  }
}
function InviteVisitorFormComponent_ng_template_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nStart"](0, 16, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainer"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nExp"]((ctx_r3.last_success == null ? null : ctx_r3.last_success.asset_name) || (ctx_r3.last_success == null ? null : ctx_r3.last_success.asset_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nApply"](0);
  }
}
function InviteVisitorFormComponent_ng_template_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nStart"](0, 16, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainer"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nExp"](ctx_r3.last_count)(ctx_r3.last_count == 1 ? "" : "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nApply"](0);
  }
}
function InviteVisitorFormComponent_ng_template_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nStart"](0, 17, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainer"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nExp"]((ctx_r3.last_success == null ? null : ctx_r3.last_success.asset_name) || (ctx_r3.last_success == null ? null : ctx_r3.last_success.asset_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nApply"](0);
  }
}
function InviteVisitorFormComponent_ng_template_1_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nStart"](0, 17, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainer"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nExp"](ctx_r3.last_count)(ctx_r3.last_count == 1 ? "" : "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nApply"](0);
  }
}
function InviteVisitorFormComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 61)(1, "div", 62)(2, "h2", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nStart"](3, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, InviteVisitorFormComponent_ng_template_1_ng_container_4_Template, 2, 1, "ng-container", 64)(5, InviteVisitorFormComponent_ng_template_1_ng_container_5_Template, 2, 2, "ng-container", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nStart"](8, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, InviteVisitorFormComponent_ng_template_1_ng_container_10_Template, 2, 1, "ng-container", 64)(11, InviteVisitorFormComponent_ng_template_1_ng_container_11_Template, 2, 2, "ng-container", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 66)(15, "div", 67)(16, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function InviteVisitorFormComponent_ng_template_1_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onDone());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function InviteVisitorFormComponent_ng_template_1_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.sent = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](19, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r3.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r3.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nExp"]((ctx_r3.building == null ? null : ctx_r3.building.display_name) || (ctx_r3.building == null ? null : ctx_r3.building.name))(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](12, 7, ctx_r3.last_success == null ? null : ctx_r3.last_success.date, "mediumDate"))(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](13, 10, ctx_r3.last_success == null ? null : ctx_r3.last_success.date, ctx_r3.time_format));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nApply"](8);
  }
}
function InviteVisitorFormComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "mat-spinner", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](3, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("diameter", 32);
  }
}
function InviteVisitorFormComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 71)(1, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nStart"](2, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "a-user-list-field", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r3.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("guests_only", true);
  }
}
class InviteVisitorFormComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  get multiple() {
    return this._settings.get('app.bookings.multiple_visitors');
  }
  get can_book_for_others() {
    return this._settings.get('app.bookings.can_book_for_others');
  }
  get building() {
    return this._settings.get('app.use_region') ? this._org.region : this._org.building;
  }
  get form() {
    return this._service.form;
  }
  get time_format() {
    return this._settings.time_format;
  }
  get use_24hr() {
    return this._settings.get('app.use_24_hour_time');
  }
  constructor(_service, _settings, _org) {
    super();
    this._service = _service;
    this._settings = _settings;
    this._org = _org;
    this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.sent = false;
    this.loading = this._service.loading;
    this.loading_many = false;
    this.buildings = this._org.active_buildings;
    this.last_success = this._service.last_success;
    this.last_count = 0;
    this.visitors = [];
    this.filtered_visitors = [];
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.sent = false;
      _this._service.clearOldState();
      yield _this.initFormZone();
      _this.form.get('asset_id').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.email]);
      const visitors = _this._settings.get('visitor-invitees') || [];
      for (const item of visitors) {
        const [email, name, company] = item.split('|');
        _this.visitors.push({
          email,
          name,
          company
        });
      }
      _this.filterVisitors('');
      _this.subscription('email', _this.form.get('asset_id').valueChanges.subscribe(_ => _this.filterVisitors(_)));
      _this.subscription('name', _this.form.get('asset_name').valueChanges.subscribe(_ => _this.filterVisitors(_)));
      if (_this.multiple) _this.form.patchValue({
        asset_id: 'multiple@place.tech'
      });
    })();
  }
  setVisitor(item) {
    this.form.patchValue({
      asset_id: item.email,
      asset_name: item.name,
      company: item.company,
      phone: item.phone
    });
  }
  filterVisitors(filter) {
    const s = (filter || '').toLowerCase();
    this.filtered_visitors = this.visitors.filter(({
      email,
      name,
      company
    }) => email.toLowerCase().includes(s) || name.toLowerCase().includes(s) || company.toLowerCase().includes(s));
  }
  onDone() {
    this.done.emit();
    this.sent = false;
  }
  sendInvite() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.form.markAllAsTouched();
      if (!_this2.form.valid || _this2.multiple && !_this2.form.value.assets.length) {
        return (0,libs_common_src_lib_notifications__WEBPACK_IMPORTED_MODULE_2__.notifyError)(`Some fields are invalid. [${(0,libs_common_src_lib_general__WEBPACK_IMPORTED_MODULE_3__.getInvalidFields)(_this2.form).join(', ') || 'visitors'}]`);
      }
      if (!_this2.form.value.user_email || !_this2.can_book_for_others) {
        _this2.form.patchValue({
          user: (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)()
        });
      }
      const {
        asset_id,
        asset_name,
        company,
        assets
      } = _this2.form.value;
      const visitor_details = `${asset_id}|${asset_name}|${company}`;
      const old_visitors = _this2._settings.get('visitor-invitees') || [];
      _this2._settings.saveUserSetting('visitor-invitees', [...old_visitors.filter(_ => !_.includes(asset_id)), visitor_details]);
      yield _this2.multiple ? _this2._bookForMany() : _this2._bookForOne();
      _this2.last_success = _this2._service.last_success;
      yield _this2.initFormZone();
      _this2.sent = true;
    })();
  }
  initFormZone() {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.first)(_ => _)).toPromise();
      _this3._service.setOptions({
        type: 'visitor'
      });
      _this3.form.patchValue({
        booking_type: 'visitor',
        zones: [_this3._org.building?.id]
      });
      if (_this3.multiple) _this3.form.patchValue({
        asset_id: 'multiple@place.tech'
      });
    })();
  }
  _bookForOne() {
    var _this4 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const value = _this4.form.value;
      _this4.form.patchValue({
        name: value.asset_name,
        attendees: [new libs_users_src_lib_user_class__WEBPACK_IMPORTED_MODULE_6__.User({
          name: value.asset_name,
          email: value.asset_id,
          organisation: value.company,
          phone: value.phone
        })]
      });
      yield _this4._service.postForm().catch(e => {
        (0,libs_common_src_lib_notifications__WEBPACK_IMPORTED_MODULE_2__.notifyError)(e);
        throw e;
      });
    })();
  }
  _bookForMany() {
    var _this5 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.loading_many = true;
      const group = `grp-${(0,libs_common_src_lib_general__WEBPACK_IMPORTED_MODULE_3__.randomString)(8)}`;
      const value = _this5.form.value;
      const assets = value.assets;
      _this5.last_count = assets.length;
      for (const user of assets) {
        if (!user.email) continue;
        _this5.form.patchValue({
          ...value,
          booking_type: 'visitor',
          asset_id: user.email,
          asset_name: user.name,
          user: (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)(),
          description: group,
          name: user.name,
          assets: [],
          attendees: [new libs_users_src_lib_user_class__WEBPACK_IMPORTED_MODULE_6__.User({
            name: user.name,
            email: user.email,
            organisation: user.company || user.organisation,
            phone: user.phone
          })]
        });
        yield _this5._service.postForm().catch(e => {
          (0,libs_common_src_lib_notifications__WEBPACK_IMPORTED_MODULE_2__.notifyError)(e);
          _this5.loading_many = false;
          throw e;
        });
      }
      _this5.loading_many = false;
    })();
  }
  static #_ = this.ɵfac = function InviteVisitorFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || InviteVisitorFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_booking_form_service__WEBPACK_IMPORTED_MODULE_5__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_4__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: InviteVisitorFormComponent,
    selectors: [["invite-visitor-form"]],
    outputs: {
      done: "done"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
    decls: 7,
    vars: 2,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4809719174148656467$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_0 = goog.getMsg("Invite Visitor");
        i18n_0 = MSG_EXTERNAL_4809719174148656467$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟5ce047ca92a7474d89cf5b08a9913b0a93d28404␟4809719174148656467:Invite Visitor`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_994966389368964414$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_1 = goog.getMsg(" Send Visitor Invite ");
        i18n_1 = MSG_EXTERNAL_994966389368964414$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟207022d8123aa7a8693ff4c53cd28fea3d5bdff2␟994966389368964414: Send Visitor Invite `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3158758063619980932$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_2 = goog.getMsg("Date{$startTagSpan}*{$closeTagSpan}", {
          "closeTagSpan": "\uFFFD/#5\uFFFD",
          "startTagSpan": "\uFFFD#5\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_2 = MSG_EXTERNAL_3158758063619980932$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟04cfb5fd033651743bc4b9408bd52ba4ee894070␟3158758063619980932:Date${"\uFFFD#5\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_SPAN:`;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_145741817832495807$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_3 = goog.getMsg(" Start Time{$startTagSpan}*{$closeTagSpan}", {
          "closeTagSpan": "\uFFFD/#11\uFFFD",
          "startTagSpan": "\uFFFD#11\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_3 = MSG_EXTERNAL_145741817832495807$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:␟eac10bd97a4b6b06a0221c661de781836b7a1e1c␟145741817832495807: Start Time${"\uFFFD#11\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#11\uFFFD"}:CLOSE_TAG_SPAN:`;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5960185837188220843$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_4 = goog.getMsg("End Time{$startTagSpan}*{$closeTagSpan}", {
          "closeTagSpan": "\uFFFD/#16\uFFFD",
          "startTagSpan": "\uFFFD#16\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_4 = MSG_EXTERNAL_5960185837188220843$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_4;
      } else {
        i18n_4 = $localize`:␟85d5c3a89bab9a7475a7db095089e161586cb7a1␟5960185837188220843:End Time${"\uFFFD#16\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#16\uFFFD"}:CLOSE_TAG_SPAN:`;
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_495507623260232513$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_5 = goog.getMsg("Reason for visit");
        i18n_5 = MSG_EXTERNAL_495507623260232513$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_5;
      } else {
        i18n_5 = $localize`:␟8aaaa9966e2e05be99e9b239f3b257767366b8bf␟495507623260232513:Reason for visit`;
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4333771954088602266$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_6 = goog.getMsg("Select building");
        i18n_6 = MSG_EXTERNAL_4333771954088602266$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_6;
      } else {
        i18n_6 = $localize`:␟a2a7f73f9ff1df08f9f055ead8f1b25a91c060a3␟4333771954088602266:Select building`;
      }
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5685627853493098762$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_7 = goog.getMsg(" Building{$startTagSpan}*{$closeTagSpan}", {
          "closeTagSpan": "\uFFFD/#3\uFFFD",
          "startTagSpan": "\uFFFD#3\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_7 = MSG_EXTERNAL_5685627853493098762$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_7;
      } else {
        i18n_7 = $localize`:␟299cead719c6fe6ad6f5fba06ac22e21f0c4acb2␟5685627853493098762: Building${"\uFFFD#3\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_SPAN:`;
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4464638374806874490$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_8 = goog.getMsg("Visitor Name{$startTagSpan}*{$closeTagSpan}", {
          "closeTagSpan": "\uFFFD/#4\uFFFD",
          "startTagSpan": "\uFFFD#4\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_8 = MSG_EXTERNAL_4464638374806874490$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_8;
      } else {
        i18n_8 = $localize`:␟cf671ca02377cd191d8b3c68c7befb5984469f16␟4464638374806874490:Visitor Name${"\uFFFD#4\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_SPAN:`;
      }
      let i18n_9;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_195607823904920605$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_9 = goog.getMsg(" Visitor Email{$startTagSpan}*{$closeTagSpan}", {
          "closeTagSpan": "\uFFFD/#13\uFFFD",
          "startTagSpan": "\uFFFD#13\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_9 = MSG_EXTERNAL_195607823904920605$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_9;
      } else {
        i18n_9 = $localize`:␟df470c6a7cce24cc7887968eabb3ee0c1bbd3f7c␟195607823904920605: Visitor Email${"\uFFFD#13\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#13\uFFFD"}:CLOSE_TAG_SPAN:`;
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5102326149417665173$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_10 = goog.getMsg(" A valid email is required ");
        i18n_10 = MSG_EXTERNAL_5102326149417665173$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_10;
      } else {
        i18n_10 = $localize`:␟d025fcfed88fe09dce74563ddafbfefb47111f11␟5102326149417665173: A valid email is required `;
      }
      let i18n_11;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1826215573205981970$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_11 = goog.getMsg("Company");
        i18n_11 = MSG_EXTERNAL_1826215573205981970$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_11;
      } else {
        i18n_11 = $localize`:␟6ef0619a37140118b9e640c6cc36ee4e9fb4372a␟1826215573205981970:Company`;
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2924076986947727128$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_12 = goog.getMsg(" Visitor invite sent to {$startTagNgContainer} {$interpolation} {$closeTagNgContainer}{$startTagNgContainer_1} {$interpolation_1} visitor{$interpolation_2} {$closeTagNgContainer}", {
          "closeTagNgContainer": "[\uFFFD/#1:1\uFFFD\uFFFD/*4:1\uFFFD|\uFFFD/#1:2\uFFFD\uFFFD/*5:2\uFFFD]",
          "interpolation": "\uFFFD0:1\uFFFD",
          "interpolation_1": "\uFFFD0:2\uFFFD",
          "interpolation_2": "\uFFFD1:2\uFFFD",
          "startTagNgContainer": "\uFFFD*4:1\uFFFD\uFFFD#1:1\uFFFD",
          "startTagNgContainer_1": "\uFFFD*5:2\uFFFD\uFFFD#1:2\uFFFD"
        }, {
          original_code: {
            "closeTagNgContainer": "</ng-container>",
            "interpolation": "{{\n                                last_success?.asset_name ||\n                                    last_success?.asset_id\n                            }}",
            "interpolation_1": "{{ last_count }}",
            "interpolation_2": "{{\n                                last_count == 1 ? '' : 's'\n                            }}",
            "startTagNgContainer": "<ng-container *ngIf=\"!multiple\">",
            "startTagNgContainer_1": "<ng-container *ngIf=\"multiple\">"
          }
        });
        i18n_12 = MSG_EXTERNAL_2924076986947727128$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_12;
      } else {
        i18n_12 = $localize`:␟3813db8d52465bf6153aa3eab78e731607297455␟2924076986947727128: Visitor invite sent to ${"\uFFFD*4:1\uFFFD\uFFFD#1:1\uFFFD"}:START_TAG_NG_CONTAINER: ${"\uFFFD0:1\uFFFD"}:INTERPOLATION: ${"[\uFFFD/#1:1\uFFFD\uFFFD/*4:1\uFFFD|\uFFFD/#1:2\uFFFD\uFFFD/*5:2\uFFFD]"}:CLOSE_TAG_NG_CONTAINER:${"\uFFFD*5:2\uFFFD\uFFFD#1:2\uFFFD"}:START_TAG_NG_CONTAINER_1: ${"\uFFFD0:2\uFFFD"}:INTERPOLATION_1: visitor${"\uFFFD1:2\uFFFD"}:INTERPOLATION_2: ${"[\uFFFD/#1:1\uFFFD\uFFFD/*4:1\uFFFD|\uFFFD/#1:2\uFFFD\uFFFD/*5:2\uFFFD]"}:CLOSE_TAG_NG_CONTAINER:`;
      }
      i18n_12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nPostprocess"](i18n_12);
      let i18n_13;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_941544886358218249$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_13 = goog.getMsg(" Invite has been sent to {$startItalicText}{$startTagNgContainer} {$interpolation} {$closeTagNgContainer}{$startTagNgContainer_1} {$interpolation_1} visitor{$interpolation_2} {$closeTagNgContainer}{$closeItalicText} to attend {$interpolation_3} from {$interpolation_4} at {$interpolation_5} ", {
          "closeItalicText": "\uFFFD/#9\uFFFD",
          "closeTagNgContainer": "[\uFFFD/#1:1\uFFFD\uFFFD/*10:1\uFFFD|\uFFFD/#1:2\uFFFD\uFFFD/*11:2\uFFFD]",
          "interpolation": "\uFFFD0:1\uFFFD",
          "interpolation_1": "\uFFFD0:2\uFFFD",
          "interpolation_2": "\uFFFD1:2\uFFFD",
          "interpolation_3": "\uFFFD0\uFFFD",
          "interpolation_4": "\uFFFD1\uFFFD",
          "interpolation_5": "\uFFFD2\uFFFD",
          "startItalicText": "\uFFFD#9\uFFFD",
          "startTagNgContainer": "\uFFFD*10:1\uFFFD\uFFFD#1:1\uFFFD",
          "startTagNgContainer_1": "\uFFFD*11:2\uFFFD\uFFFD#1:2\uFFFD"
        }, {
          original_code: {
            "closeItalicText": "</i>",
            "closeTagNgContainer": "</ng-container>",
            "interpolation": "{{\n                                    last_success?.asset_name ||\n                                        last_success?.asset_id\n                                }}",
            "interpolation_1": "{{ last_count }}",
            "interpolation_2": "{{\n                                    last_count == 1 ? '' : 's'\n                                }}",
            "interpolation_3": "{{ building?.display_name || building?.name }}",
            "interpolation_4": "{{ last_success?.date | date: 'mediumDate' }}",
            "interpolation_5": "{{ last_success?.date | date: time_format }}",
            "startItalicText": "<i>",
            "startTagNgContainer": "<ng-container *ngIf=\"!multiple\">",
            "startTagNgContainer_1": "<ng-container *ngIf=\"multiple\">"
          }
        });
        i18n_13 = MSG_EXTERNAL_941544886358218249$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_13;
      } else {
        i18n_13 = $localize`:␟797ad60704f8979ef5951430ea9947b27782284b␟941544886358218249: Invite has been sent to ${"\uFFFD#9\uFFFD"}:START_ITALIC_TEXT:${"\uFFFD*10:1\uFFFD\uFFFD#1:1\uFFFD"}:START_TAG_NG_CONTAINER: ${"\uFFFD0:1\uFFFD"}:INTERPOLATION: ${"[\uFFFD/#1:1\uFFFD\uFFFD/*10:1\uFFFD|\uFFFD/#1:2\uFFFD\uFFFD/*11:2\uFFFD]"}:CLOSE_TAG_NG_CONTAINER:${"\uFFFD*11:2\uFFFD\uFFFD#1:2\uFFFD"}:START_TAG_NG_CONTAINER_1: ${"\uFFFD0:2\uFFFD"}:INTERPOLATION_1: visitor${"\uFFFD1:2\uFFFD"}:INTERPOLATION_2: ${"[\uFFFD/#1:1\uFFFD\uFFFD/*10:1\uFFFD|\uFFFD/#1:2\uFFFD\uFFFD/*11:2\uFFFD]"}:CLOSE_TAG_NG_CONTAINER:${"\uFFFD/#9\uFFFD"}:CLOSE_ITALIC_TEXT: to attend ${"\uFFFD0\uFFFD"}:INTERPOLATION_3: from ${"\uFFFD1\uFFFD"}:INTERPOLATION_4: at ${"\uFFFD2\uFFFD"}:INTERPOLATION_5: `;
      }
      i18n_13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nPostprocess"](i18n_13);
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7858372686370953213$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_14 = goog.getMsg(" Great, thanks ");
        i18n_14 = MSG_EXTERNAL_7858372686370953213$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_14;
      } else {
        i18n_14 = $localize`:␟af6a082ad33b2635f588016703e454c8fb7f7e0f␟7858372686370953213: Great, thanks `;
      }
      let i18n_15;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3676425961094889121$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_15 = goog.getMsg(" Book Another Visitor ");
        i18n_15 = MSG_EXTERNAL_3676425961094889121$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_15;
      } else {
        i18n_15 = $localize`:␟63356c3f7d6177e1e29a68e272010f75eacb3c97␟3676425961094889121: Book Another Visitor `;
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6183159301460846057$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_16 = goog.getMsg("Sending invitation...");
        i18n_16 = MSG_EXTERNAL_6183159301460846057$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_16;
      } else {
        i18n_16 = $localize`:␟59c7bf21621b0422b39735ebc6af2ccb26d894e3␟6183159301460846057:Sending invitation...`;
      }
      let i18n_17;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5958588135415093025$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_17 = goog.getMsg("Visitors{$startTagSpan}*{$closeTagSpan}", {
          "closeTagSpan": "\uFFFD/#3\uFFFD",
          "startTagSpan": "\uFFFD#3\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_17 = MSG_EXTERNAL_5958588135415093025$$LIBS_BOOKINGS_SRC_LIB_INVITE_VISITOR_FORM_COMPONENT_TS_17;
      } else {
        i18n_17 = $localize`:␟6e457c162b83dc787ae4a7a9bda0ca1f3b021b6c␟5958588135415093025:Visitors${"\uFFFD#3\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_SPAN:`;
      }
      return [["send_state", ""], ["load_state", ""], ["multi_state", ""], ["name_auto", "matAutocomplete"], ["email_auto", "matAutocomplete"], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_7, i18n_8, i18n_9, i18n_10, i18n_11, i18n_12, i18n_13, i18n_14, i18n_15, i18n_16, i18n_17, [4, "ngIf", "ngIfElse"], ["class", "relative flex flex-col bg-base-100 overflow-auto max-h-full", 4, "ngIf", "ngIfElse"], [1, "relative", "flex", "flex-col", "bg-base-100", "overflow-auto", "max-h-full"], [1, "w-full", "border-b", "border-base-200", "sm:px-16", "px-4", "py-4"], [1, "text-2xl", "font-medium"], ["class", "sm:px-16 px-4 py-4", 3, "formGroup", 4, "ngIf"], [1, "sticky", "sm:px-16", "px-4", "py-4", "border-t", "bg-base-100", "border-base-200", "bottom-0"], ["btn", "", "matRipple", "", "send", "", 1, "w-full", "sm:w-auto", 3, "click"], [1, "sm:px-16", "px-4", "py-4", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "date"], ["name", "date", "formControlName", "date"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1", "flex", "flex-col", "w-1/3"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "use_24hr"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "use_24hr"], ["class", "w-full flex flex-col", 4, "ngIf"], ["for", "reason"], ["appearance", "outline"], ["name", "reason", "matInput", "", "formControlName", "description", "placeholder", "e.g. Meeting Catchup"], ["for", "building"], ["name", "building", "placeholder", i18n_6, 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "w-full", "flex", "flex-col"], ["for", "host"], ["name", "host", "formControlName", "user", 1, "mb-4"], ["for", "visitor-name"], ["matInput", "", "name", "visitor-name", "formControlName", "asset_name", "placeholder", "Name of the visitor", 3, "focus", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["for", "visitor-email"], ["matInput", "", "name", "visitor-email", "type", "email", "formControlName", "asset_id", "placeholder", "Email of the visitor", 3, "focus", "matAutocomplete"], ["matInput", "", "name", "company", "formControlName", "company", "placeholder", "Company of the visitor"], [3, "click", "value"], [1, "flex", "flex-col", "leading-tight"], [1, "text-xs", "opacity-60"], ["sent", "", 1, "absolute", "inset-0", "bg-base-100", "flex", "flex-col", "items-center", "justify-center", "text-center"], [1, "w-full", "max-w-[32rem]", "flex-1", "h-1/2", "space-y-2", "m-8"], [1, "text-3xl"], [4, "ngIf"], ["src", "assets/icons/sent.svg", 1, "mx-auto"], [1, "w-full", "p-2", "border-t", "border-base-200"], [1, "mx-auto", "flex", "items-center", "space-x-2", "w-full", "max-w-[32rem]"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], ["loading", "", 1, "relative", "flex", "flex-col", "items-center", "justify-center", "rounded", "overflow-hidden", "w-full", "h-full", "min-h-[18rem]"], [3, "diameter"], [1, "flex", "flex-col", 3, "formGroup"], ["formControlName", "assets", 3, "guests_only"]];
    },
    template: function InviteVisitorFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, InviteVisitorFormComponent_ng_container_0_Template, 3, 4, "ng-container", 22)(1, InviteVisitorFormComponent_ng_template_1_Template, 20, 13, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"])(3, InviteVisitorFormComponent_ng_template_3_Template, 4, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"])(5, InviteVisitorFormComponent_ng_template_5_Template, 5, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const send_state_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.sent)("ngIfElse", send_state_r16);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatError, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinner, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__.MatAutocompleteTrigger, _form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_7__.DateFieldComponent, _form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_8__.DurationFieldComponent, _form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_9__.TimeFieldComponent, _form_fields_src_lib_user_list_field_component__WEBPACK_IMPORTED_MODULE_10__.UserListFieldComponent, _form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_11__.UserSearchFieldComponent, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe]
  });
}

/***/ }),

/***/ 84854:
/*!********************************************************!*\
  !*** ./libs/bookings/src/lib/locker-grid.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockerGridComponent: () => (/* binding */ LockerGridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var libs_explore_src_lib_explore_spaces_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/explore/src/lib/explore-spaces.service */ 65897);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);








const _c0 = () => [];
function LockerGridComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LockerGridComponent_button_3_Template_button_click_0_listener() {
      const locker_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.clicked.emit(locker_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const locker_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("grid-column-start", locker_r2.position[0] + 1)("grid-row-start", locker_r2.position[1] + 1)("grid-column-end", locker_r2.position[0] + (locker_r2.size[0] + 1))("background-color", ctx_r2.status(locker_r2))("grid-row-end", locker_r2.position[1] + (locker_r2.size[1] + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("opacity-60", ctx_r2.selected && ctx_r2.selected !== locker_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", locker_r2.name)("disabled", locker_r2.bookable === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", locker_r2.name, " ");
  }
}
class LockerGridComponent {
  get columns() {
    let columns = 1;
    for (const locker of this.bank?.lockers || []) {
      const x = locker.position[0] + locker.size[0];
      if (x > columns) columns = x;
    }
    return columns;
  }
  constructor(_settings) {
    this._settings = _settings;
    this.bank_status = {
      '10': 'busy',
      '7': 'pending'
    };
    this.selected = '';
    this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  status(locker) {
    const colours = this._settings.get('app.explore.colors') || {};
    const value = this.bank_status[locker.id] || 'free';
    return colours[`lockers-${value}`] || colours[`${value}`] || libs_explore_src_lib_explore_spaces_service__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_COLOURS[`${value}`];
  }
  static #_ = this.ɵfac = function LockerGridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LockerGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LockerGridComponent,
    selectors: [["locker-grid"]],
    inputs: {
      bank: "bank",
      bank_status: "bank_status",
      selected: "selected"
    },
    outputs: {
      clicked: "clicked"
    },
    decls: 4,
    vars: 9,
    consts: [[1, "p-4", "text-xl", "font-medium"], [1, "flex-1", "grid", "gap-2", "overflow-hidden", "max-h-full", "h-[75vh]", "min-w-[60vw]", "p-2"], ["matRipple", "", "class", "relative border border-base-200 rounded bg-teal-300 overflow-hidden", 3, "opacity-60", "grid-column-start", "grid-row-start", "grid-column-end", "background-color", "grid-row-end", "matTooltip", "disabled", "click", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "relative", "border", "border-base-200", "rounded", "bg-teal-300", "overflow-hidden", 3, "click", "matTooltip", "disabled"], ["handle", "", 1, "absolute", "top-1/2", "-translate-y-1/2", "left-2", "w-1", "h-6", "bg-neutral", "rounded"], ["vent", "", 1, "absolute", "left-1/2", "-translate-x-1/2", "top-2", "w-3/5", "h-1", "bg-neutral", "rounded-t"], ["vent", "", 1, "absolute", "left-1/2", "-translate-x-1/2", "top-4", "w-3/5", "h-1", "bg-neutral", "rounded-t"], ["vent", "", 1, "absolute", "left-1/2", "-translate-x-1/2", "top-6", "w-3/5", "h-1", "bg-neutral", "rounded-t"], [1, "absolute", "left-1/2", "-translate-x-1/2", "top-8", "text-[0.6rem]", "font-medium", "text-black/60"], [1, "absolute", "inset-0", "hover:bg-neutral"]],
    template: function LockerGridComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, LockerGridComponent_button_3_Template, 8, 15, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.bank == null ? null : ctx.bank.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx.columns * 2.5 + "rem")("grid-template-columns", "repeat(" + ctx.columns + ", 1fr)")("grid-template-rows", "repeat(" + (ctx.bank == null ? null : ctx.bank.height) + ", 1fr)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", (ctx.bank == null ? null : ctx.bank.lockers) || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n            }\n            button[disabled][_ngcontent-%COMP%] {\n                pointer-events: none;\n                opacity: 0.75;\n                background-color: #ccc !important;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2tlci1ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7WUFDaEI7WUFDQTtnQkFDSSxvQkFBb0I7Z0JBQ3BCLGFBQWE7Z0JBQ2IsaUNBQWlDO1lBQ3JDIiwiZmlsZSI6ImxvY2tlci1ncmlkLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b25bZGlzYWJsZWRdIHtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2MgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYm9va2luZ3Mvc3JjL2xpYi9sb2NrZXItZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO1lBQ2hCO1lBQ0E7Z0JBQ0ksb0JBQW9CO2dCQUNwQixhQUFhO2dCQUNiLGlDQUFpQztZQUNyQzs7QUFFWixneEJBQWd4QiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b25bZGlzYWJsZWRdIHtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2MgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 71511:
/*!**************************************************************!*\
  !*** ./libs/bookings/src/lib/locker-list-field.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockerListFieldComponent: () => (/* binding */ LockerListFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var libs_common_src_lib_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/common/src/lib/settings.service */ 14233);
/* harmony import */ var _locker_select_modal_locker_select_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locker-select-modal/locker-select-modal.component */ 90482);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/src/lib/authenticated-image.directive */ 93208);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 74646);














const _c0 = () => [];
const _c1 = () => ({
  standalone: true
});
function LockerListFieldComponent_div_1_div_1_mat_checkbox_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-checkbox", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LockerListFieldComponent_div_1_div_1_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.setFeature(opt_r3, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", (ctx_r3.selected_features || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0)).includes(opt_r3))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", opt_r3, " ");
  }
}
function LockerListFieldComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, LockerListFieldComponent_div_1_div_1_mat_checkbox_4_Template, 2, 5, "mat-checkbox", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.features);
  }
}
function LockerListFieldComponent_div_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 29);
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("source", item_r5.images[0]);
  }
}
function LockerListFieldComponent_div_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 30);
  }
}
function LockerListFieldComponent_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "app-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "accessible");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Disability Accessible");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function LockerListFieldComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LockerListFieldComponent_div_1_div_1_Template, 5, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, LockerListFieldComponent_div_1_img_3_Template, 1, 1, "img", 13)(4, LockerListFieldComponent_div_1_ng_template_4_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 14)(7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 16)(10, "app-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, LockerListFieldComponent_div_1_div_14_Template, 5, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 19)(16, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LockerListFieldComponent_div_1_Template_button_click_16_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.changeResources(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nStart"](18, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LockerListFieldComponent_div_1_Template_button_click_20_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.removeResource(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nStart"](22, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LockerListFieldComponent_div_1_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.toggleFavourite(ctx_r3.asset));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const placeholder_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.features == null ? null : ctx_r3.features.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r5.images == null ? null : item_r5.images.length)("ngIfElse", placeholder_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r5.name || "Locker", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((item_r5.zone == null ? null : item_r5.zone.display_name) || (item_r5.zone == null ? null : item_r5.zone.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r5.accessible);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("text-blue-400", ctx_r3.favorites.includes(ctx_r3.asset == null ? null : ctx_r3.asset.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.favorites.includes(ctx_r3.asset == null ? null : ctx_r3.asset.id) ? "favorite" : "favorite_border");
  }
}
const EMPTY_FAVS = [];
class LockerListFieldComponent {
  get favorites() {
    return this._settings.get(_locker_select_modal_locker_select_modal_component__WEBPACK_IMPORTED_MODULE_1__.FAV_LOCKER_KEY) || EMPTY_FAVS;
  }
  constructor(_settings, _dialog) {
    this._settings = _settings;
    this._dialog = _dialog;
    this.features = [];
    this.room_size = 3;
    this.items = [];
    this.disabled = false;
    this.selected_features = [];
    /* istanbul ignore next */
    this.registerOnChange = fn => this._onChange = fn;
    /* istanbul ignore next */
    this.registerOnTouched = fn => this._onTouch = fn;
    this.setDisabledState = s => this.disabled = s;
  }
  /** Add or edit selected items */
  changeResources() {
    const ref = this._dialog.open(_locker_select_modal_locker_select_modal_component__WEBPACK_IMPORTED_MODULE_1__.LockerSelectModalComponent, {
      data: {
        items: this.items,
        options: {
          capacity: this.room_size
        }
      }
    });
    ref.afterClosed().subscribe(items => {
      if (!items) items = ref.componentInstance.selected;
      this.setValue(items);
    });
  }
  /** Remove the selected space from the list */
  removeResource(space) {
    this.setValue(this.items.filter(_ => _.id !== space.id));
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.items = new_value;
    if (this._onChange) this._onChange(this.items);
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.items = value || [];
  }
  toggleFavourite(space) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(space.id);
    if (new_state) {
      this._settings.saveUserSetting(_locker_select_modal_locker_select_modal_component__WEBPACK_IMPORTED_MODULE_1__.FAV_LOCKER_KEY, [...fav_list, space.id]);
    } else {
      this._settings.saveUserSetting(_locker_select_modal_locker_select_modal_component__WEBPACK_IMPORTED_MODULE_1__.FAV_LOCKER_KEY, fav_list.filter(_ => _ !== space.id));
    }
  }
  static #_ = this.ɵfac = function LockerListFieldComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LockerListFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](libs_common_src_lib_settings_service__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LockerListFieldComponent,
    selectors: [["locker-list-field"]],
    inputs: {
      features: "features"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => LockerListFieldComponent),
      multi: true
    }])],
    decls: 10,
    vars: 1,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6395293173369343552$$LIBS_BOOKINGS_SRC_LIB_LOCKER_LIST_FIELD_COMPONENT_TS_0 = goog.getMsg("Add Locker");
        i18n_0 = MSG_EXTERNAL_6395293173369343552$$LIBS_BOOKINGS_SRC_LIB_LOCKER_LIST_FIELD_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟8b5f83031c9399ae009db8ff4c788e3f8ce20062␟6395293173369343552:Add Locker`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_559636443235347532$$LIBS_BOOKINGS_SRC_LIB_LOCKER_LIST_FIELD_COMPONENT_TS_1 = goog.getMsg("{$startTagAppIcon}edit{$closeTagAppIcon} Change ", {
          "closeTagAppIcon": "\uFFFD/#19\uFFFD",
          "startTagAppIcon": "\uFFFD#19\uFFFD"
        }, {
          original_code: {
            "closeTagAppIcon": "</app-icon>",
            "startTagAppIcon": "<app-icon>"
          }
        });
        i18n_1 = MSG_EXTERNAL_559636443235347532$$LIBS_BOOKINGS_SRC_LIB_LOCKER_LIST_FIELD_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟ca9092fdbbb85e5828de77fdf85c49b918cec128␟559636443235347532:${"\uFFFD#19\uFFFD"}:START_TAG_APP_ICON:edit${"\uFFFD/#19\uFFFD"}:CLOSE_TAG_APP_ICON: Change `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2582674642057285571$$LIBS_BOOKINGS_SRC_LIB_LOCKER_LIST_FIELD_COMPONENT_TS_2 = goog.getMsg("{$startTagAppIcon}close{$closeTagAppIcon} Remove ", {
          "closeTagAppIcon": "\uFFFD/#23\uFFFD",
          "startTagAppIcon": "\uFFFD#23\uFFFD"
        }, {
          original_code: {
            "closeTagAppIcon": "</app-icon>",
            "startTagAppIcon": "<app-icon>"
          }
        });
        i18n_2 = MSG_EXTERNAL_2582674642057285571$$LIBS_BOOKINGS_SRC_LIB_LOCKER_LIST_FIELD_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟a386ba350cdee69beeb12a908d96f0724ddc2054␟2582674642057285571:${"\uFFFD#23\uFFFD"}:START_TAG_APP_ICON:close${"\uFFFD/#23\uFFFD"}:CLOSE_TAG_APP_ICON: Remove `;
      }
      return [["placeholder", ""], i18n_0, i18n_1, i18n_2, ["list", "", 1, "space-y-2"], ["locker", "", "class", "relative p-2 rounded-lg w-full flex items-center shadow border border-base-200", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "name", "add-locker", 1, "w-full", "inverse", "mt-2", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "flex", "items-center", "flex-wrap", "sm:space-x-2", "mb-2"], [1, "flex-1", "min-w-[256px]", "space-y-2"], ["locker", "", 1, "relative", "p-2", "rounded-lg", "w-full", "flex", "items-center", "shadow", "border", "border-base-200"], ["class", "flex flex-col", 4, "ngIf"], [1, "w-20", "h-20", "rounded-xl", "bg-base-200", "mr-4", "overflow-hidden", "flex", "items-center", "justify-center"], ["auth", "", "class", "min-h-full object-cover", 3, "source", 4, "ngIf", "ngIfElse"], [1, "space-y-2", "pb-4"], [1, "font-medium"], [1, "flex", "items-center", "text-sm", "space-x-2"], [1, "text-blue-500", "text-base"], ["class", "flex items-center text-sm space-x-2", 4, "ngIf"], [1, "absolute", "bottom-0", "right-0", "flex", "items-center", "justify-end", "text-xs"], ["btn", "", "matRipple", "", "name", "edit-locker", 1, "clear", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", "name", "remove-locker", 1, "clear", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-locker-favourite", 1, "absolute", "top-1", "right-1", 3, "click"], [1, "flex", "flex-col"], ["for", "title"], ["features", "", 1, "flex", "items-center", "flex-wrap", "space-x-2"], [3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [3, "ngModelChange", "ngModel", "ngModelOptions"], ["auth", "", 1, "min-h-full", "object-cover", 3, "source"], ["src", "assets/icons/locker-placeholder.svg", 1, "m-auto"]];
    },
    template: function LockerListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LockerListFieldComponent_div_1_Template, 27, 9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LockerListFieldComponent_Template_button_click_2_listener() {
          return ctx.changeResources();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 7)(4, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.items);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckbox, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_3__.AuthenticatedImageDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple]
  });
}

/***/ }),

/***/ 90647:
/*!*********************************************************************************!*\
  !*** ./libs/bookings/src/lib/locker-select-modal/locker-bank-list.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockerBankListComponent: () => (/* binding */ LockerBankListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _booking_form_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../booking-form.service */ 18379);
/* harmony import */ var _lockers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lockers.service */ 98796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/src/lib/authenticated-image.directive */ 93208);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 74646);













function LockerBankListComponent_ng_container_5_ul_1_li_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function LockerBankListComponent_ng_container_5_ul_1_li_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 23);
  }
  if (rf & 2) {
    const locker_bank_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("source", locker_bank_r2.images[0]);
  }
}
function LockerBankListComponent_ng_container_5_ul_1_li_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 24);
  }
}
function LockerBankListComponent_ng_container_5_ul_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LockerBankListComponent_ng_container_5_ul_1_li_1_Template_button_click_1_listener() {
      const locker_bank_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.selectLockerBank(locker_bank_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, LockerBankListComponent_ng_container_5_ul_1_li_1_div_3_Template, 3, 0, "div", 14)(4, LockerBankListComponent_ng_container_5_ul_1_li_1_img_4_Template, 1, 1, "img", 15)(5, LockerBankListComponent_ng_container_5_ul_1_li_1_ng_template_5_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 16)(8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 18)(11, "app-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 18)(16, "app-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LockerBankListComponent_ng_container_5_ul_1_li_1_Template_button_click_20_listener() {
      const locker_bank_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.toggleFav.emit(locker_bank_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const locker_bank_r2 = ctx.$implicit;
    const placeholder_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("!border-blue-400", ctx_r2.active === locker_bank_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.selected.includes(locker_bank_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", locker_bank_r2.images == null ? null : locker_bank_r2.images.length)("ngIfElse", placeholder_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", locker_bank_r2.name || locker_bank_r2.id || "Locker_bank", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (locker_bank_r2.zone == null ? null : locker_bank_r2.zone.display_name) || (locker_bank_r2.zone == null ? null : locker_bank_r2.zone.name) || "<No Level>", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", locker_bank_r2.available || 0, " / ", locker_bank_r2.lockers.length || 1, " Available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("text-blue-400", ctx_r2.isFavourite(locker_bank_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.isFavourite(locker_bank_r2.id) ? "favorite" : "favorite_border");
  }
}
function LockerBankListComponent_ng_container_5_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LockerBankListComponent_ng_container_5_ul_1_li_1_Template, 23, 12, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r2.locker_banks));
  }
}
function LockerBankListComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LockerBankListComponent_ng_container_5_ul_1_Template, 3, 3, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const empty_state_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx_r2.locker_banks)) == null ? null : tmp_3_0.length)("ngIfElse", empty_state_r5);
  }
}
function LockerBankListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Finding available locker banks...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 32);
  }
}
function LockerBankListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28)(1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " No available locker banks for selected time and/or filters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class LockerBankListComponent {
  constructor(_state, _lockers) {
    this._state = _state;
    this._lockers = _lockers;
    this.active = '';
    this.selected = '';
    this.favorites = [];
    this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.toggleFav = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.locker_banks = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this._state.options, this._state.available_resources, this._lockers.lockers_banks$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([{
      show_fav
    }, resources, banks]) => {
      return banks.filter(i => (!show_fav || this.isFavourite(i.id)) && resources.find(_ => _.bank_id === i.id)).map(bank => ({
        ...bank,
        available: resources.filter(_ => _.bank_id === bank.id).length,
        lockers: bank.lockers.map(_ => ({
          ..._,
          zone: bank.zone
        }))
      }));
    }));
    this.loading = this._state.loading;
  }
  isFavourite(locker_bank_id) {
    return this.favorites.includes(locker_bank_id);
  }
  selectLockerBank(locker_bank) {
    this.onSelect.emit(locker_bank);
  }
  static #_ = this.ɵfac = function LockerBankListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LockerBankListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_booking_form_service__WEBPACK_IMPORTED_MODULE_0__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_lockers_service__WEBPACK_IMPORTED_MODULE_1__.LockersService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LockerBankListComponent,
    selectors: [["locker-bank-list"]],
    inputs: {
      active: "active",
      selected: "selected",
      favorites: "favorites"
    },
    outputs: {
      onSelect: "onSelect",
      toggleFav: "toggleFav"
    },
    decls: 11,
    vars: 7,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5968132631442328843$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_BANK_LIST_COMPONENT_TS_0 = goog.getMsg("Results");
        i18n_0 = MSG_EXTERNAL_5968132631442328843$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_BANK_LIST_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟80ed5b776a26a78099e230e0e89d96c33ba44e24␟5968132631442328843:Results`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8158044446606709450$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_BANK_LIST_COMPONENT_TS_1 = goog.getMsg(" {$interpolation} result(s) found ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ (locker_banks | async)?.length || 0 }}"
          }
        });
        i18n_1 = MSG_EXTERNAL_8158044446606709450$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_BANK_LIST_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟5b237ca854e67fef69541b67dc32656a82b0972b␟8158044446606709450: ${"\uFFFD0\uFFFD"}:INTERPOLATION: result(s) found `;
      }
      return [["load_state", ""], ["empty_state", ""], ["placeholder", ""], i18n_0, i18n_1, [1, "font-bold"], ["count", "", 1, "text-sm", "opacity-60", "mb-4"], [4, "ngIf", "ngIfElse"], ["class", "list-style-none space-y-2 min-w-[50vh]", 4, "ngIf", "ngIfElse"], [1, "list-style-none", "space-y-2", "min-w-[50vh]"], ["locker_bank", "", "class", "relative rounded-lg w-full shadow border bg-base-100 border-base-200 overflow-hidden", 3, "!border-blue-400", 4, "ngFor", "ngForOf"], ["locker_bank", "", 1, "relative", "rounded-lg", "w-full", "shadow", "border", "bg-base-100", "border-base-200", "overflow-hidden"], ["name", "select-locker_bank", "matRipple", "", 1, "w-full", "h-full", "flex", "p-2", 3, "click"], [1, "relative", "w-20", "h-20", "rounded-xl", "bg-base-200", "mr-4", "flex", "items-center", "justify-center"], ["class", "absolute top-1 left-1 border border-neutral bg-base-200 rounded-full h-6 w-6 flex items-center justify-center text-white", 4, "ngIf"], ["auth", "", "class", "object-cover h-full", 3, "source", 4, "ngIf", "ngIfElse"], [1, "space-y-2", "pt-2", "flex-1", "text-left"], [1, "font-medium"], [1, "flex", "items-center", "text-sm", "space-x-2"], [1, "text-blue-500"], [1, "text-xs"], ["icon", "", "matRipple", "", "name", "toggle-locker_bank-favourite", 1, "absolute", "top-1", "right-1", 3, "click"], [1, "absolute", "top-1", "left-1", "border", "border-neutral", "bg-base-200", "rounded-full", "h-6", "w-6", "flex", "items-center", "justify-center", "text-white"], ["auth", "", 1, "object-cover", "h-full", 3, "source"], ["src", "assets/icons/locker-placeholder.svg", 1, "m-auto"], ["loading", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"], [1, "opacity-30"], ["empty", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "opacity-30", "text-center"]];
    },
    template: function LockerBankListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, LockerBankListComponent_ng_container_5_Template, 3, 4, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, LockerBankListComponent_ng_template_7_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(9, LockerBankListComponent_ng_template_9_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_4_0;
        const load_state_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nExp"](((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, ctx.locker_banks)) == null ? null : tmp_2_0.length) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nApply"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 5, ctx.loading)) == null ? null : tmp_4_0.length))("ngIfElse", load_state_r6);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinner, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_3__.AuthenticatedImageDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                width: 100%;\n                height: 100%;\n                padding: 0.5rem;\n                background: rgba(0, 0, 0, 0.05);\n                overflow-y: auto;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2tlci1iYW5rLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osZUFBZTtnQkFDZiwrQkFBK0I7Z0JBQy9CLGdCQUFnQjtZQUNwQiIsImZpbGUiOiJsb2NrZXItYmFuay1saXN0LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYm9va2luZ3Mvc3JjL2xpYi9sb2NrZXItc2VsZWN0LW1vZGFsL2xvY2tlci1iYW5rLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osZUFBZTtnQkFDZiwrQkFBK0I7Z0JBQy9CLGdCQUFnQjtZQUNwQjs7QUFFWixnb0JBQWdvQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 42394:
/*!***************************************************************************************!*\
  !*** ./libs/bookings/src/lib/locker-select-modal/locker-filters-display.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockerFiltersDisplayComponent: () => (/* binding */ LockerFiltersDisplayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _locker_filters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locker-filters.component */ 22657);
/* harmony import */ var _booking_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../booking-form.service */ 18379);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 15244);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 74646);













const _c0 = () => [];
function LockerFiltersDisplayComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LockerFiltersDisplayComponent_div_16_Template_button_click_3_listener() {
      const feat_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.setFeature(feat_r2, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const feat_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](feat_r2);
  }
}
function LockerFiltersDisplayComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LockerFiltersDisplayComponent_div_18_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.setOptions({
        show_fav: false
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
class LockerFiltersDisplayComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  get start() {
    return this._state.form.value.date;
  }
  get end() {
    const {
      date,
      duration,
      all_day
    } = this._state.form.value;
    if (all_day) return (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.endOfDay)(date);
    return date + duration * 60 * 1000;
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_bsheet, _state, _settings) {
    super();
    this._bsheet = _bsheet;
    this._state = _state;
    this._settings = _settings;
    this.view = 'list';
    this.viewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.options = this._state.options;
    this.setOptions = o => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.editFilter = () => this._bsheet.open(_locker_filters_component__WEBPACK_IMPORTED_MODULE_1__.LockerFiltersComponent);
  }
  static #_ = this.ɵfac = function LockerFiltersDisplayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LockerFiltersDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__.MatBottomSheet), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_booking_form_service__WEBPACK_IMPORTED_MODULE_2__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LockerFiltersDisplayComponent,
    selectors: [["locker-filters-display"]],
    inputs: {
      view: "view"
    },
    outputs: {
      viewChange: "viewChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    decls: 20,
    vars: 23,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5208858215712453646$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_DISPLAY_COMPONENT_TS_0 = goog.getMsg(" Filters ");
        i18n_0 = MSG_EXTERNAL_5208858215712453646$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_DISPLAY_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟19eaa5cd51d70d9ea957eecac78cfd811e9b93d8␟5208858215712453646: Filters `;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8553228906889869186$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_DISPLAY_COMPONENT_TS_1 = goog.getMsg(" Map ");
        i18n_1 = MSG_EXTERNAL_8553228906889869186$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_DISPLAY_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟992a9a6a193a56c5b8846dc972c5e1977ee5f1aa␟8553228906889869186: Map `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7787942140742011951$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_DISPLAY_COMPONENT_TS_2 = goog.getMsg(" List ");
        i18n_2 = MSG_EXTERNAL_7787942140742011951$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_DISPLAY_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟4b286e90831dd637c5cd3eb20544664ee7112669␟7787942140742011951: List `;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1305804744685886428$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_DISPLAY_COMPONENT_TS_3 = goog.getMsg("Favourites Only");
        i18n_3 = MSG_EXTERNAL_1305804744685886428$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_DISPLAY_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:␟d6ad8326be48837fe776a268abc758d1c7ba4f05␟1305804744685886428:Favourites Only`;
      }
      return [i18n_0, i18n_1, i18n_2, i18n_3, ["actions", "", 1, "sm:hidden", "space-x-2", "flex", "flex-row", "items-center", "p-2"], ["btn", "", "matRipple", "", "name", "edit-locker-filters", 1, "flex-1", "w-1/2", 3, "click"], [1, "flex", "items-center"], ["btn", "", "matRipple", "", "name", "view-locker-map", 1, "rounded-l", "rounded-r-none", 3, "click"], ["btn", "", "matRipple", "", "name", "view-locker-list", 1, "rounded-r", "rounded-l-none", 3, "click"], ["filters", "", 1, "flex", "items-center", "flex-wrap", "p-2", "w-[35rem]", "max-w-full", "sm:max-w-[35rem]"], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], ["filter-item", "", "features", "", 4, "ngFor", "ngForOf"], ["filter-item", "", 4, "ngIf"], ["filter-item", "", "features", ""], ["icon", "", "matRipple", "", "name", "remove-locker-filter", 1, "-mr-4", 3, "click"], ["filter-item", ""], ["icon", "", "matRipple", "", "name", "remove-locker-favs-filter", 1, "-mr-4", 3, "click"]];
    },
    template: function LockerFiltersDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 4)(1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LockerFiltersDisplayComponent_Template_button_click_1_listener() {
          return ctx.editFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 6)(4, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LockerFiltersDisplayComponent_Template_button_click_4_listener() {
          ctx.view = "map";
          return ctx.viewChange.emit(ctx.view);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LockerFiltersDisplayComponent_Template_button_click_6_listener() {
          ctx.view = "list";
          return ctx.viewChange.emit(ctx.view);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](7, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "section", 9)(9, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, LockerFiltersDisplayComponent_div_16_Template, 6, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, LockerFiltersDisplayComponent_div_18_Template, 6, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_5_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("inverse", ctx.view !== "map");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("inverse", ctx.view !== "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 9, ctx.start, "mediumDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](14, 12, ctx.start, ctx.time_format), " \u2014 ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](15, 15, ctx.end, ctx.time_format), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 18, ctx.options)) == null ? null : tmp_4_0.features) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](22, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 20, ctx.options)) == null ? null : tmp_5_0.show_fav);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
    styles: ["[filter-item][_ngcontent-%COMP%] {\n                display: flex;\n                align-items: center;\n                padding: 0 1rem;\n                height: 2rem;\n                font-size: 0.875rem;\n                border: 1px solid rgba(0, 0, 0, 0.2);\n                border-radius: 1.25rem;\n                margin-right: 0.5rem;\n                margin-bottom: 0.5rem;\n            }\n\n            [filter-item][_ngcontent-%COMP%]:hover {\n                background: rgba(0, 0, 0, 0.1);\n            }\n\n            [filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n                margin-left: 0.5rem;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2tlci1maWx0ZXJzLWRpc3BsYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLG1CQUFtQjtnQkFDbkIsZUFBZTtnQkFDZixZQUFZO2dCQUNaLG1CQUFtQjtnQkFDbkIsb0NBQW9DO2dCQUNwQyxzQkFBc0I7Z0JBQ3RCLG9CQUFvQjtnQkFDcEIscUJBQXFCO1lBQ3pCOztZQUVBO2dCQUNJLDhCQUE4QjtZQUNsQzs7WUFFQTtnQkFDSSxtQkFBbUI7WUFDdkIiLCJmaWxlIjoibG9ja2VyLWZpbHRlcnMtZGlzcGxheS5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIFtmaWx0ZXItaXRlbV0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbZmlsdGVyLWl0ZW1dOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtmaWx0ZXItaXRlbV0gPiAqICsgKiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYm9va2luZ3Mvc3JjL2xpYi9sb2NrZXItc2VsZWN0LW1vZGFsL2xvY2tlci1maWx0ZXJzLWRpc3BsYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLG1CQUFtQjtnQkFDbkIsZUFBZTtnQkFDZixZQUFZO2dCQUNaLG1CQUFtQjtnQkFDbkIsb0NBQW9DO2dCQUNwQyxzQkFBc0I7Z0JBQ3RCLG9CQUFvQjtnQkFDcEIscUJBQXFCO1lBQ3pCOztZQUVBO2dCQUNJLDhCQUE4QjtZQUNsQzs7WUFFQTtnQkFDSSxtQkFBbUI7WUFDdkI7O0FBRVosd3dDQUF3d0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIFtmaWx0ZXItaXRlbV0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbZmlsdGVyLWl0ZW1dOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtmaWx0ZXItaXRlbV0gPiAqICsgKiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 22657:
/*!*******************************************************************************!*\
  !*** ./libs/bookings/src/lib/locker-select-modal/locker-filters.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockerFiltersComponent: () => (/* binding */ LockerFiltersComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 28797);
/* harmony import */ var libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/organisation/src/lib/organisation.service */ 19863);
/* harmony import */ var _booking_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../booking-form.service */ 18379);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 15244);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../form-fields/src/lib/date-field.component */ 19608);
/* harmony import */ var _form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../form-fields/src/lib/duration-field.component */ 83476);
/* harmony import */ var _form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../form-fields/src/lib/time-field.component */ 81413);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/src/lib/building.pipe */ 56062);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 597);
























const _c0 = () => ({
  standalone: true
});
const _c1 = () => [];
function LockerFiltersComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LockerFiltersComponent_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function LockerFiltersComponent_mat_form_field_13_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const reg_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", reg_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", reg_r4.display_name || reg_r4.name, " ");
  }
}
function LockerFiltersComponent_mat_form_field_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field", 34)(1, "mat-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function LockerFiltersComponent_mat_form_field_13_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setRegion($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, LockerFiltersComponent_mat_form_field_13_mat_option_2_Template, 2, 2, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r1.region)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 3, ctx_r1.regions));
  }
}
function LockerFiltersComponent_mat_form_field_15_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bld_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", bld_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", bld_r6.display_name || bld_r6.name, " ");
  }
}
function LockerFiltersComponent_mat_form_field_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field", 34)(1, "mat-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function LockerFiltersComponent_mat_form_field_15_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setBuilding($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, LockerFiltersComponent_mat_form_field_15_mat_option_5_Template, 2, 2, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 4, ctx_r1.building))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](12, _c0))("placeholder", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 6, ctx_r1.building)) == null ? null : tmp_3_0.display_name) || ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 8, ctx_r1.building)) == null ? null : tmp_3_0.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 10, ctx_r1.buildings));
  }
}
function LockerFiltersComponent_mat_form_field_17_mat_option_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "building");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const lvl_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, lvl_r8.parent_id)) == null ? null : tmp_4_0.display_name, " ");
  }
}
function LockerFiltersComponent_mat_form_field_17_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 37)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, LockerFiltersComponent_mat_form_field_17_mat_option_3_div_2_Template, 5, 3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const lvl_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", lvl_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.use_region);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", lvl_r8.display_name || lvl_r8.name, " ");
  }
}
function LockerFiltersComponent_mat_form_field_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field", 34)(1, "mat-select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function LockerFiltersComponent_mat_form_field_17_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setOptions({
        zone_id: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, LockerFiltersComponent_mat_form_field_17_mat_option_3_Template, 5, 3, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 3, ctx_r1.options)) == null ? null : tmp_1_0.zone_id)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 5, ctx_r1.levels));
  }
}
function LockerFiltersComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 44)(1, "mat-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function LockerFiltersComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](3, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "a-time-field", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function LockerFiltersComponent_div_25_Template_a_time_field_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.form.patchValue({
        date: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 47)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "a-duration-field", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r1.form.value.date)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](8, _c0))("use_24hr", ctx_r1.use_24hr);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("time", (tmp_4_0 = ctx_r1.form.get("date")) == null ? null : tmp_4_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr);
  }
}
function LockerFiltersComponent_section_36_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 52)(1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-checkbox", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function LockerFiltersComponent_section_36_div_3_Template_mat_checkbox_ngModelChange_3_listener($event) {
      const feat_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setFeature(feat_r11, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const feat_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](feat_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", (((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 3, ctx_r1.options)) == null ? null : tmp_4_0.features) || _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c1)).includes(feat_r11))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](6, _c0));
  }
}
function LockerFiltersComponent_section_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 50)(1, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, LockerFiltersComponent_section_36_div_3_Template, 5, 7, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 1, ctx_r1.features));
  }
}
function LockerFiltersComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 55)(1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LockerFiltersComponent_div_38_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
class LockerFiltersComponent {
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get region() {
    return this._org.region;
  }
  set region(reg) {
    this._org.region = reg;
  }
  get allow_time_changes() {
    return !!this._settings.get('app.lockers.allow_time_changes');
  }
  get allow_all_day() {
    return this.allow_time_changes && !!this._settings.get('app.lockers.allow_all_day');
  }
  get end_date() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.endOfDay)((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.addDays)(Date.now(), this._settings.get('app.lockers.available_period') || 90));
  }
  get use_24hr() {
    return this._settings.get('app.use_24_hour_time');
  }
  get use_region() {
    return this._settings.get('app.use_region');
  }
  constructor(_bsheet_ref, _state, _org, _settings) {
    this._bsheet_ref = _bsheet_ref;
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this.can_close = false;
    this.options = this._state.options;
    this.features = this._state.features;
    this.buildings = this._org.active_buildings;
    this.form = this._state.form;
    this.regions = this._org.region_list;
    this.levels = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this._org.active_region, this._org.active_building]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(([region, bld]) => {
      const level_list = this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      const viewable_levels = level_list.filter(lvl => !lvl.tags.includes('parking'));
      return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || '').localeCompare(b.display_name || ''));
    }));
    this.close = () => this._bsheet_ref.dismiss();
    this.setOptions = o => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.setLevel = l => {};
    this.can_close = !!this._bsheet_ref;
  }
  static #_ = this.ɵfac = function LockerFiltersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LockerFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__.MatBottomSheetRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_booking_form_service__WEBPACK_IMPORTED_MODULE_2__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_1__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: LockerFiltersComponent,
    selectors: [["locker-filters"]],
    inputs: {
      hide_levels: "hide_levels"
    },
    decls: 39,
    vars: 30,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2717350382225268503$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_0 = goog.getMsg("Locker Filters");
        i18n_0 = MSG_EXTERNAL_2717350382225268503$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟229669497e532a4055b24a971df68ec327b07e30␟2717350382225268503:Locker Filters`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5028777105388019087$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_1 = goog.getMsg("Details");
        i18n_1 = MSG_EXTERNAL_5028777105388019087$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟4f8b2bb476981727ab34ed40fde1218361f92c45␟5028777105388019087:Details`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_471816275243265264$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_2 = goog.getMsg("Location");
        i18n_2 = MSG_EXTERNAL_471816275243265264$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟ed31c09fd77c36238c13d83635f3fe5294c733d2␟471816275243265264:Location`;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3973931101896534797$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_3 = goog.getMsg("Date");
        i18n_3 = MSG_EXTERNAL_3973931101896534797$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:␟2f933b826a570836cab04f683970a2d22068458c␟3973931101896534797:Date`;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5010873675481014004$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_4 = goog.getMsg(" {$interpolation} ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ 'COMMON.FAVOURITES' | translate }}"
          }
        });
        i18n_4 = MSG_EXTERNAL_5010873675481014004$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_4;
      } else {
        i18n_4 = $localize`:␟bde3d9fd949ba4c6014b8e64c1362753bca1cf0c␟5010873675481014004: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7993989716494624155$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_5 = goog.getMsg(" {$interpolation} ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ 'LOCKERS.SHOW_FAVOURITES' | translate }}"
          }
        });
        i18n_5 = MSG_EXTERNAL_7993989716494624155$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_5;
      } else {
        i18n_5 = $localize`:␟d73a29823cb90d2c49c4f6ee3dc0cbad14a63586␟7993989716494624155: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8264413387051126615$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_6 = goog.getMsg("Any Region");
        i18n_6 = MSG_EXTERNAL_8264413387051126615$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_6;
      } else {
        i18n_6 = $localize`:␟130845b58eba8e50c98f3fba117a0168cdba4f31␟8264413387051126615:Any Region`;
      }
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7323982518822503502$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_7 = goog.getMsg("Any Level");
        i18n_7 = MSG_EXTERNAL_7323982518822503502$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_7;
      } else {
        i18n_7 = $localize`:␟50407595967bf29832e873b41f9de3502d5c3e03␟7323982518822503502:Any Level`;
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_835486935962207481$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_8 = goog.getMsg(" All Day ");
        i18n_8 = MSG_EXTERNAL_835486935962207481$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_8;
      } else {
        i18n_8 = $localize`:␟d7f43e20f3a729fa3de32bc7a1f709ccd722eae5␟835486935962207481: All Day `;
      }
      let i18n_9;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4204880191779081093$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_9 = goog.getMsg("Start Time");
        i18n_9 = MSG_EXTERNAL_4204880191779081093$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_9;
      } else {
        i18n_9 = $localize`:␟7c0a71d337783e527c1c8e91e433b301c5b1d8a8␟4204880191779081093:Start Time`;
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3845185958891849368$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_10 = goog.getMsg("End Time");
        i18n_10 = MSG_EXTERNAL_3845185958891849368$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_10;
      } else {
        i18n_10 = $localize`:␟e1f10d9bf4d3c37490cd5bf82007444ae7af46b1␟3845185958891849368:End Time`;
      }
      let i18n_11;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8650499415827640724$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_11 = goog.getMsg("Type");
        i18n_11 = MSG_EXTERNAL_8650499415827640724$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_11;
      } else {
        i18n_11 = $localize`:␟f61c6867295f3b53d23557021f2f4e0aa1d0b8fc␟8650499415827640724:Type`;
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2296888311792137027$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_12 = goog.getMsg(" Apply Filters ");
        i18n_12 = MSG_EXTERNAL_2296888311792137027$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_FILTERS_COMPONENT_TS_12;
      } else {
        i18n_12 = $localize`:␟c17e2cc448524a39eb83b2937cea3235a2e8bf37␟2296888311792137027: Apply Filters `;
      }
      return [i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_8, i18n_9, i18n_10, i18n_11, i18n_12, [1, "flex", "rounded-t-md", "items-center", "border-b", "border-base-200", "pb-2", "sm:hidden"], [1, "flex-1", "pl-2"], ["icon", "", "matRipple", "", "name", "close-locker-filters", "class", "sm:hidden", 3, "click", 4, "ngIf"], [1, "font-medium", "flex-2", "text-center"], [1, "flex-1"], [1, "max-h-[65vh]", "p-2", "overflow-y-auto", "overflow-x-hidden", "divide-y", "divide-base-200", "w-full", "max-w-[100vw]", "sm:max-w-[30vw]", 3, "formGroup"], ["details", ""], [1, "text-lg", "font-medium", "mb-1"], [1, "flex-1", "min-w-[8rem]", "flex", "flex-col"], ["for", "location"], ["appearance", "outline", "class", "w-full", 4, "ngIf"], [1, "flex-1", "min-w-[256px]"], ["name", "date", "formControlName", "date", 3, "to"], ["class", "flex justify-end -mt-2 mb-2", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["favs", "", 1, "space-y-2", "pb-4"], [1, "text-lg", "font-medium"], [1, "flex", "items-center"], ["for", "fav", 1, "flex-1", "w-1/2"], ["name", "fav", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "space-y-2", "features", "", 4, "ngIf"], ["class", "px-2 py-2 w-full border-t border-base-200", 4, "ngIf"], ["icon", "", "matRipple", "", "name", "close-locker-filters", 1, "sm:hidden", 3, "click"], ["appearance", "outline", 1, "w-full"], ["name", "region", "placeholder", i18n_6, 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", "placeholder", i18n_7, 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "flex", "flex-col-reverse"], ["class", "opacity-30 text-xs", 4, "ngIf"], [1, "opacity-30", "text-xs"], [1, "opacity-0"], [1, "flex", "justify-end", "-mt-2", "mb-2"], ["formControlName", "all_day"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1", "w-1/3"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr"], ["formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr"], ["features", "", 1, "space-y-2"], ["class", "flex items-center flex-wrap space-x-2", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "flex-wrap", "space-x-2"], ["for", "feat", 1, "flex-1", "w-1/2"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "px-2", "py-2", "w-full", "border-t", "border-base-200"], ["btn", "", "matRipple", "", "name", "apply-locker-filters", 1, "w-full", 3, "click"]];
    },
    template: function LockerFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, LockerFiltersComponent_button_2_Template, 3, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](4, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "form", 16)(7, "section", 17)(8, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](9, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 19)(11, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](12, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, LockerFiltersComponent_mat_form_field_13_Template, 4, 6, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, LockerFiltersComponent_mat_form_field_15_Template, 7, 13, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, LockerFiltersComponent_mat_form_field_17_Template, 5, 8, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 22)(19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](20, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "a-date-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, LockerFiltersComponent_div_24_Template, 3, 0, "div", 24)(25, LockerFiltersComponent_div_25_Template, 9, 9, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "section", 26)(27, "h2", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](28, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 28)(31, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](32, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "mat-checkbox", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](35, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function LockerFiltersComponent_Template_mat_checkbox_ngModelChange_34_listener($event) {
          return ctx.setOptions({
            show_fav: $event
          });
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, LockerFiltersComponent_section_36_Template, 5, 3, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](37, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, LockerFiltersComponent_div_38_Template, 3, 0, "div", 32);
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_13_0;
        let tmp_15_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.can_close);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.use_region && ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 15, ctx.regions)) == null ? null : tmp_2_0.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.use_region && ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 17, ctx.buildings)) == null ? null : tmp_3_0.length) > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.hide_levels);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("to", ctx.end_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 19, "FORM.DATE_ERROR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.allow_all_day);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.form.value.all_day);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](29, 21, "COMMON.FAVOURITES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nApply"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 23, "LOCKERS.SHOW_FAVOURITES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nApply"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", (tmp_13_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](35, 25, ctx.options)) == null ? null : tmp_13_0.show_fav)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](29, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_15_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](37, 27, ctx.features)) == null ? null : tmp_15_0.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.can_close);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_3__.DateFieldComponent, _form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_4__.DurationFieldComponent, _form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_5__.TimeFieldComponent, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__.IconComponent, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_7__.BuildingPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                width: 100%;\n                max-width: 100vw;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2tlci1maWx0ZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFdBQVc7Z0JBQ1gsZ0JBQWdCO1lBQ3BCIiwiZmlsZSI6ImxvY2tlci1maWx0ZXJzLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYm9va2luZ3Mvc3JjL2xpYi9sb2NrZXItc2VsZWN0LW1vZGFsL2xvY2tlci1maWx0ZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFdBQVc7Z0JBQ1gsZ0JBQWdCO1lBQ3BCOztBQUVaLG9qQkFBb2pCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 38720:
/*!***************************************************************************!*\
  !*** ./libs/bookings/src/lib/locker-select-modal/locker-map.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockerMapComponent: () => (/* binding */ LockerMapComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _booking_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../booking-form.service */ 18379);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var libs_explore_src_lib_explore_spaces_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/explore/src/lib/explore-spaces.service */ 65897);
/* harmony import */ var libs_explore_src_lib_explore_locker_bank_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/explore/src/lib/explore-locker-bank-info.component */ 84810);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/src/lib/interactive-map.component */ 24918);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 25175);

















const _c0 = () => ({
  standalone: true
});
function LockerMapComponent_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lvl_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", lvl_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", lvl_r1.display_name || lvl_r1.name, " ");
  }
}
class LockerMapComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  get map_url() {
    return this.level?.map_id || '';
  }
  constructor(_state, _settings) {
    super();
    this._state = _state;
    this._settings = _settings;
    this.is_displayed = false;
    this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.lockers = this._state.available_resources;
    this.loading = this._state.loading;
    this.zoom = 1;
    this.center = {
      x: 0.5,
      y: 0.5
    };
    this.setOptions = o => this._state.setOptions(o);
    this.levels = this._state.available_resources.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(lockers => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_0__.unique)(lockers.map(locker => locker.zone), 'id')));
    this.actions = this._state.available_resources.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(lockers => lockers.map(locker => ({
      id: locker.map_id || locker.id,
      action: ['touchend', 'mouseup'],
      callback: () => this.selectLocker(locker)
    }))));
    this.features = this._state.resources.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(lockers => {
      return this._settings.get('app.lockers.hide_user') ? [] : lockers.map(locker => ({
        location: locker.id,
        content: libs_explore_src_lib_explore_locker_bank_info_component__WEBPACK_IMPORTED_MODULE_3__.ExploreLockerBankInfoComponent,
        full_size: true,
        no_scale: true,
        data: {
          id: locker.map_id || locker.id,
          map_id: locker.name,
          name: locker.name || locker.map_id,
          user: this._state.resourceUserName(locker.id)
        },
        z_index: 20
      }));
    }));
    this.styles = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._state.resources, this._state.available_resources]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([lockers, free_lockers]) => lockers.reduce((styles, locker) => {
      const colours = this._settings.get('app.explore.colors') || {};
      const status = free_lockers.find(_ => _.id === locker.id) ? 'free' : 'busy';
      styles[`#${locker.map_id || locker.id}`] = {
        fill: colours[`locker-${status}`] || colours[`${status}`] || libs_explore_src_lib_explore_spaces_service__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_COLOURS[`${status}`]
      };
      return styles;
    }, {})));
  }
  ngOnInit() {
    this.subscription('levels_update', this.levels.subscribe(levels => {
      if (!levels.find(_ => _.id === this.level?.id)) {
        this.level = levels[0];
      }
    }));
  }
  selectLocker(locker) {
    this.onSelect.emit(locker);
  }
  setZoom(new_zoom) {
    this.zoom = Math.max(0.5, Math.min(10, new_zoom));
  }
  resetMap() {
    this.zoom = 1;
    this.center = {
      x: 0.5,
      y: 0.5
    };
  }
  static #_ = this.ɵfac = function LockerMapComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LockerMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_booking_form_service__WEBPACK_IMPORTED_MODULE_1__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: LockerMapComponent,
    selectors: [["locker-map"]],
    inputs: {
      is_displayed: "is_displayed"
    },
    outputs: {
      onSelect: "onSelect"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 21,
    vars: 18,
    consts: [[3, "zoomChange", "centerChange", "src", "zoom", "center", "features", "styles", "actions"], [1, "absolute", "inset-x-0", "top-0", "bg-base-100", "p-2", "border-b", "border-base-200"], ["levels", "", "appearance", "outline", 1, "w-full", "h-[3.25rem]"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value", 4, "ngFor", "ngForOf"], ["zoom", "", 1, "absolute", "bottom-2", "right-2", "rounded-lg", "border", "border-base-200", "bg-base-100", "flex", "flex-col", "overflow-hidden"], ["zoom-in", "", "icon", "", "matRipple", "", 3, "click"], [1, "border-t", "border-base-200", "w-full"], ["zoom-out", "", "icon", "", "matRipple", "", 3, "click"], ["reset", "", "icon", "", "matRipple", "", 3, "click"], [3, "value"]],
    template: function LockerMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "interactive-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("zoomChange", function LockerMapComponent_Template_interactive_map_zoomChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.zoom, $event) || (ctx.zoom = $event);
          return $event;
        })("centerChange", function LockerMapComponent_Template_interactive_map_centerChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.center, $event) || (ctx.center = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 1)(5, "mat-form-field", 2)(6, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function LockerMapComponent_Template_mat_select_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.level, $event) || (ctx.level = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, LockerMapComponent_mat_option_7_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 5)(10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LockerMapComponent_Template_button_click_10_listener() {
          return ctx.setZoom(ctx.zoom * 1.1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "zoom_in");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LockerMapComponent_Template_button_click_14_listener() {
          return ctx.setZoom(ctx.zoom * (1 / 1.1));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "zoom_out");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LockerMapComponent_Template_button_click_18_listener() {
          return ctx.resetMap();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.map_url);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("zoom", ctx.zoom)("center", ctx.center);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("features", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 9, ctx.features))("styles", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 11, ctx.styles))("actions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 13, ctx.actions));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.level);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 15, ctx.levels));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_5__.InteractiveMapComponent, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                position: relative;\n                background: rgba(0, 0, 0, 0.05);\n                padding-top: 4rem;\n            }\n\n            button[_ngcontent-%COMP%] {\n                border-radius: 0;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2tlci1tYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxrQkFBa0I7Z0JBQ2xCLCtCQUErQjtnQkFDL0IsaUJBQWlCO1lBQ3JCOztZQUVBO2dCQUNJLGdCQUFnQjtZQUNwQiIsImZpbGUiOiJsb2NrZXItbWFwLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYm9va2luZ3Mvc3JjL2xpYi9sb2NrZXItc2VsZWN0LW1vZGFsL2xvY2tlci1tYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxrQkFBa0I7Z0JBQ2xCLCtCQUErQjtnQkFDL0IsaUJBQWlCO1lBQ3JCOztZQUVBO2dCQUNJLGdCQUFnQjtZQUNwQjs7QUFFWixncEJBQWdwQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 90482:
/*!************************************************************************************!*\
  !*** ./libs/bookings/src/lib/locker-select-modal/locker-select-modal.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FAV_LOCKER_KEY: () => (/* binding */ FAV_LOCKER_KEY),
/* harmony export */   LockerSelectModalComponent: () => (/* binding */ LockerSelectModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _booking_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../booking-form.service */ 18379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _locker_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../locker-grid.component */ 84854);
/* harmony import */ var _locker_filters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locker-filters.component */ 22657);
/* harmony import */ var _locker_filters_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locker-filters-display.component */ 42394);
/* harmony import */ var _locker_bank_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locker-bank-list.component */ 90647);
/* harmony import */ var _locker_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locker-map.component */ 38720);















function LockerSelectModalComponent_ng_container_16_locker_bank_list_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "locker-bank-list", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("toggleFav", function LockerSelectModalComponent_ng_container_16_locker_bank_list_1_Template_locker_bank_list_toggleFav_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.toggleFavourite($event));
    })("onSelect", function LockerSelectModalComponent_ng_container_16_locker_bank_list_1_Template_locker_bank_list_onSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.bank = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("active", ctx_r2.displayed == null ? null : ctx_r2.displayed.id)("selected", ctx_r2.selected_ids)("favorites", ctx_r2.favorites);
  }
}
function LockerSelectModalComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, LockerSelectModalComponent_ng_container_16_locker_bank_list_1_Template, 1, 3, "locker-bank-list", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const map_view_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.view === "list")("ngIfElse", map_view_r4);
  }
}
function LockerSelectModalComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LockerSelectModalComponent_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.displayed = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function LockerSelectModalComponent_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LockerSelectModalComponent_button_31_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      ctx_r2.bank = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.displayed = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Return ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function LockerSelectModalComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "locker-map", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onSelect", function LockerSelectModalComponent_ng_template_38_Template_locker_map_onSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.displayed = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("is_displayed", !!ctx_r2.displayed);
  }
}
function LockerSelectModalComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "locker-grid", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("clicked", function LockerSelectModalComponent_ng_template_40_Template_locker_grid_clicked_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.displayed = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("bank", ctx_r2.bank)("selected", ctx_r2.displayed == null ? null : ctx_r2.displayed.id);
  }
}
const FAV_LOCKER_KEY = 'favourite_lockers';
class LockerSelectModalComponent {
  get selected_ids() {
    return this.selected.map(_ => _.id).join(',');
  }
  get favorites() {
    return this._settings.get(FAV_LOCKER_KEY) || [];
  }
  constructor(_dialog_ref, _settings, _event_form, _data) {
    this._dialog_ref = _dialog_ref;
    this._settings = _settings;
    this._event_form = _event_form;
    this._data = _data;
    this.selected = [];
    this.view = 'list';
    this.bank = null;
    this.selected = [...(_data.items || [])];
    this._event_form.setOptions(_data.options);
  }
  isSelected(id) {
    return id && this.selected_ids.includes(id);
  }
  setSelected(item, state) {
    const list = this.selected.filter(_ => _.id !== item.id);
    if (state) list.push(item);
    this.selected = list;
    if (!this._data.options.group && state) this._dialog_ref.close([item]);
  }
  toggleFavourite(item) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(item.id);
    if (new_state) {
      this._settings.saveUserSetting(FAV_LOCKER_KEY, [...fav_list, item.id]);
    } else {
      this._settings.saveUserSetting(FAV_LOCKER_KEY, fav_list.filter(_ => _ !== item.id));
    }
  }
  static #_ = this.ɵfac = function LockerSelectModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LockerSelectModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_booking_form_service__WEBPACK_IMPORTED_MODULE_1__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: LockerSelectModalComponent,
    selectors: [["locker-select-modal"]],
    decls: 42,
    vars: 20,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6506914875226692064$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_SELECT_MODAL_COMPONENT_TS_0 = goog.getMsg("Find Locker");
        i18n_0 = MSG_EXTERNAL_6506914875226692064$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_SELECT_MODAL_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟a97cf1d9e290adb3e67030e67ae6cc914390a70d␟6506914875226692064:Find Locker`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8443571736703532556$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_SELECT_MODAL_COMPONENT_TS_1 = goog.getMsg(" View List ");
        i18n_1 = MSG_EXTERNAL_8443571736703532556$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_SELECT_MODAL_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟30d3439b0e0095fe69503245f3bd7a2e9498be7c␟8443571736703532556: View List `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_819716823718458903$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_SELECT_MODAL_COMPONENT_TS_2 = goog.getMsg("Back to form");
        i18n_2 = MSG_EXTERNAL_819716823718458903$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_SELECT_MODAL_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟18843b85d1a4f17fefafd07bc5cde636dca44295␟819716823718458903:Back to form`;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3218631102043895117$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_SELECT_MODAL_COMPONENT_TS_3 = goog.getMsg(" {$interpolation} locker(s) added ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ selected.length }}"
          }
        });
        i18n_3 = MSG_EXTERNAL_3218631102043895117$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_SELECT_MODAL_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:␟613a2ac6bcd89376b2b66c414f54a2120304f542␟3218631102043895117: ${"\uFFFD0\uFFFD"}:INTERPOLATION: locker(s) added `;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7444538929505592211$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_SELECT_MODAL_COMPONENT_TS_4 = goog.getMsg(" {$interpolation} ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{\n                                    isSelected(displayed?.id)\n                                        ? 'Remove from Booking'\n                                        : 'Add to booking'\n                                }}"
          }
        });
        i18n_4 = MSG_EXTERNAL_7444538929505592211$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_SELECT_MODAL_COMPONENT_TS_4;
      } else {
        i18n_4 = $localize`:␟b175289321a7bd20ba6e53bafb26c0604ecec7e5␟7444538929505592211: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_874721418273731876$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_SELECT_MODAL_COMPONENT_TS_5 = goog.getMsg(" Back ");
        i18n_5 = MSG_EXTERNAL_874721418273731876$$LIBS_BOOKINGS_SRC_LIB_LOCKER_SELECT_MODAL_LOCKER_SELECT_MODAL_COMPONENT_TS_5;
      } else {
        i18n_5 = $localize`:␟ccda1d41ca79703a85a3a598c1d97e040a32b766␟874721418273731876: Back `;
      }
      return [["map_view", ""], ["bank_view", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, [1, "w-[100vw]", "h-[100vh]", "sm:relative", "sm:w-auto", "sm:h-auto", "flex", "flex-col", "bg-base-100"], [1, "flex", "items-center", "space-x-4", "w-full"], ["icon", "", "mat-dialog-close", "", 1, "bg-base-200"], [1, "hidden", "sm:flex", "items-center", "justify-end", "flex-1"], ["btn", "", "matRipple", "", "name", "view-locker-map", 1, "rounded-l", "rounded-r-none", 3, "click"], ["btn", "", "matRipple", "", "name", "view-locker-list", 1, "rounded-r", "rounded-l-none", 3, "click"], [1, "flex-1", "flex", "items-center", "divide-x", "divide-base-200", "min-h-[65vh]", "h-[65vh]", "sm:max-h-[65vh]", "sm:max-w-[95vw]", "w-full", "overflow-hidden"], [1, "h-full", "hidden", "sm:flex", "max-w-[20rem]", "sm:h-[65vh]", "sm:max-h-full", 3, "hide_levels"], [1, "flex", "flex-col", "items-center", "flex-1", "w-1/2", "h-full", "sm:h-[65vh]"], [1, "w-full", "border-b", "border-base-200", 3, "viewChange", "view"], [4, "ngIf", "ngIfElse"], [1, "flex", "sm:hidden", "flex-col-reverse", "items-center", "justify-end", "px-2", "pt-2", "pb-[5.5rem]", "border-t", "border-base-200", "w-full"], ["btn", "", "matRipple", "", "name", "locker-return", "class", "inverse sm:hidden w-full", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "name", "save-lockers", 1, "w-full", "sm:w-32", "sm:mb-0", 3, "mat-dialog-close"], [1, "hidden", "sm:flex", "items-center", "justify-between", "p-2", "border-t", "border-base-200", "w-full"], ["btn", "", "matRipple", "", "name", "locker-return", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], [1, "opacity-60", "text-sm", "text-center"], ["btn", "", "matRipple", "", "name", "clear-bank", "class", "inverse mr-2 w-32", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "name", "toggle-locker", 3, "click", "disabled"], [1, "mr-1"], ["class", "flex-1 h-1/2 bg-base-200", 3, "active", "selected", "favorites", "toggleFav", "onSelect", 4, "ngIf", "ngIfElse"], [1, "flex-1", "h-1/2", "bg-base-200", 3, "toggleFav", "onSelect", "active", "selected", "favorites"], ["btn", "", "matRipple", "", "name", "locker-return", 1, "inverse", "sm:hidden", "w-full", 3, "click"], ["btn", "", "matRipple", "", "name", "clear-bank", 1, "inverse", "mr-2", "w-32", 3, "click"], [1, "flex-1", "h-1/2", "w-full", 3, "onSelect", "is_displayed"], [1, "max-w-full", "overflow-auto", "flex-1", "h-1/2", "bg-base-200", 3, "clicked", "bank", "selected"]];
    },
    template: function LockerSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8)(1, "header", 9)(2, "button", 10)(3, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](6, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 11)(8, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LockerSelectModalComponent_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.view = "map");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " Map ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LockerSelectModalComponent_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.view = "list");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "main", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "locker-filters", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 16)(15, "locker-filters-display", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("viewChange", function LockerSelectModalComponent_Template_locker_filters_display_viewChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.view, $event) || (ctx.view = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, LockerSelectModalComponent_ng_container_16_Template, 2, 2, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "footer", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, LockerSelectModalComponent_button_18_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](20, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "footer", 22)(22, "button", 23)(23, "div", 24)(24, "app-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](27, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](29, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, LockerSelectModalComponent_button_31_Template, 2, 0, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LockerSelectModalComponent_Template_button_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id)));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 24)(34, "app-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](37, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, LockerSelectModalComponent_ng_template_38_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(40, LockerSelectModalComponent_ng_template_40_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const bank_view_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("inverse", ctx.view !== "map");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("inverse", ctx.view !== "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hide_levels", ctx.view !== "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("view", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.bank)("ngIfElse", bank_view_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.displayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mb-2", ctx.displayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mat-dialog-close", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mat-dialog-close", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nExp"](ctx.selected.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nApply"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.bank);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.displayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "remove" : "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nExp"](ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "Remove from Booking" : "Add to booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nApply"](37);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogClose, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _locker_grid_component__WEBPACK_IMPORTED_MODULE_3__.LockerGridComponent, _locker_filters_component__WEBPACK_IMPORTED_MODULE_4__.LockerFiltersComponent, _locker_filters_display_component__WEBPACK_IMPORTED_MODULE_5__.LockerFiltersDisplayComponent, _locker_bank_list_component__WEBPACK_IMPORTED_MODULE_6__.LockerBankListComponent, _locker_map_component__WEBPACK_IMPORTED_MODULE_7__.LockerMapComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 98796:
/*!**************************************************!*\
  !*** ./libs/bookings/src/lib/lockers.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockersService: () => (/* binding */ LockersService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/organisation/src/lib/organisation.service */ 19863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);








class LockersService {
  setLevel(level) {
    this._level.next(level);
  }
  constructor(_org) {
    this._org = _org;
    this._level = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject('');
    this._change = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(0);
    this.lockers_banks$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this._org.active_building, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(([bld]) => !!bld), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(([bld]) => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.listChildMetadata)(bld.id, {
      name: 'lockers'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.PlaceMetadata())))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(_ => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.flatten)(_.map(_ => _.metadata.lockers?.details instanceof Array ? _.metadata.lockers?.details.map(bank => ({
      ...bank,
      zone: _.zone
    })) : []))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.shareReplay)(1));
    this.lockers$ = this.lockers_banks$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(bank_list => {
      const lockers = [];
      for (const bank of bank_list) {
        lockers.push(...bank.lockers.map(_ => ({
          ..._,
          bank_id: bank.id,
          map_id: bank.map_id,
          level_id: bank.zone.id
        })));
      }
      return lockers;
    }));
    this.filtered_lockers$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this._level, this.lockers$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([level, lockers]) => lockers.filter(_ => (!level || _.level_id === level) && _.bookable)));
  }
  saveLockers(lockers) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.updateMetadata)(_this._org.building.id, {
        name: 'lockers',
        description: '',
        details: lockers
      });
      _this._change.next(Date.now());
    })();
  }
  static #_ = this.ɵfac = function LockersService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LockersService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_3__.OrganisationService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
    token: LockersService,
    factory: LockersService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6724:
/*!*********************************************************************************!*\
  !*** ./libs/bookings/src/lib/parking-select-modal/parking-details.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingSpaceDetailsComponent: () => (/* binding */ ParkingSpaceDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _placeos_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/components */ 51588);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/src/lib/interactive-map.component */ 24918);
/* harmony import */ var _components_src_lib_image_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/src/lib/image-carousel.component */ 65277);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 74646);










const _c0 = () => ({
  disable_pan: true,
  disable_zoom: true
});
function ParkingSpaceDetailsComponent_ng_container_0_image_carousel_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "image-carousel", 21);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("images", ctx_r1.space.images);
  }
}
function ParkingSpaceDetailsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ParkingSpaceDetailsComponent_ng_container_0_image_carousel_2_Template, 1, 1, "image-carousel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ParkingSpaceDetailsComponent_ng_container_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.close.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ParkingSpaceDetailsComponent_ng_container_0_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.toggleFav.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 9)(10, "section", 10)(11, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "section", 12)(15, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](16, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 14)(18, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](21, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 14)(23, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "meeting_room");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 14)(28, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "interactive-map", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 17)(36, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ParkingSpaceDetailsComponent_ng_container_0_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r1.active = !ctx_r1.active;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.activeChange.emit(ctx_r1.active));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 19)(38, "app-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("sm:h-40", ctx_r1.space.images == null ? null : ctx_r1.space.images.length)("h-64", ctx_r1.space.images == null ? null : ctx_r1.space.images.length)("sm:h-0", !(ctx_r1.space.images == null ? null : ctx_r1.space.images.length))("h-12", !(ctx_r1.space.images == null ? null : ctx_r1.space.images.length))("!bg-transparent", !(ctx_r1.space.images == null ? null : ctx_r1.space.images.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.space.images == null ? null : ctx_r1.space.images.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("text-info-content", ctx_r1.fav)("!bg-info", ctx_r1.fav);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.fav ? "favorite" : "favorite_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.space.display_name || ctx_r1.space.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nExp"](ctx_r1.space.capacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nApply"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (ctx_r1.level == null ? null : ctx_r1.level.display_name) || (ctx_r1.level == null ? null : ctx_r1.level.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (ctx_r1.building == null ? null : ctx_r1.building.address) || (ctx_r1.building == null ? null : ctx_r1.building.display_name) || (ctx_r1.building == null ? null : ctx_r1.building.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.map_url)("focus", ctx_r1.space.map_id)("features", ctx_r1.features)("options", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](28, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("inverse", ctx_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.active ? "remove" : "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.active ? "Remove this room" : "Add this room", " ");
  }
}
function ParkingSpaceDetailsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22)(1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class ParkingSpaceDetailsComponent {
  get level() {
    return this._org.levelWithID([this.space?.zone.id]) || this.space?.zone;
  }
  get building() {
    return this._org.buildings.find(_ => this.space?.zone.id === _.id || this.space?.zone.parent_id === _.id);
  }
  constructor(_org) {
    this._org = _org;
    this.fav = false;
    this.active = false;
    this.activeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.toggleFav = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.map_url = '';
    this.features = [];
  }
  ngOnChanges(changes) {
    if (changes.space && this.space) {
      this._updateFeature();
    }
  }
  _updateFeature() {
    this.map_url = this.level?.map_id;
    this.features = [{
      location: this.space?.map_id,
      content: _placeos_components__WEBPACK_IMPORTED_MODULE_0__.MapPinComponent
    }];
  }
  static #_ = this.ɵfac = function ParkingSpaceDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ParkingSpaceDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_1__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ParkingSpaceDetailsComponent,
    selectors: [["parking-space-details"]],
    inputs: {
      space: "space",
      fav: "fav",
      active: "active"
    },
    outputs: {
      activeChange: "activeChange",
      close: "close",
      toggleFav: "toggleFav"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
    decls: 3,
    vars: 2,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5028777105388019087$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_DETAILS_COMPONENT_TS_0 = goog.getMsg("Details");
        i18n_0 = MSG_EXTERNAL_5028777105388019087$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_DETAILS_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟4f8b2bb476981727ab34ed40fde1218361f92c45␟5028777105388019087:Details`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2731085793954892186$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_DETAILS_COMPONENT_TS_1 = goog.getMsg("{$interpolation} People", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ space.capacity }}"
          }
        });
        i18n_1 = MSG_EXTERNAL_2731085793954892186$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_DETAILS_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟2fe5caca246424da5e7fcee12a1fe341335e1286␟2731085793954892186:${"\uFFFD0\uFFFD"}:INTERPOLATION: People`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7182911930527299079$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_DETAILS_COMPONENT_TS_2 = goog.getMsg(" Select a space to view it's details ");
        i18n_2 = MSG_EXTERNAL_7182911930527299079$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_DETAILS_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟2d39d1ca65d735d7f800e458ce54af6a25652395␟7182911930527299079: Select a space to view it's details `;
      }
      return [["empty_state", ""], i18n_0, i18n_1, i18n_2, [4, "ngIf", "ngIfElse"], ["image", "", 1, "relative", "w-full", "bg-base-200"], ["class", "absolute inset-0", 3, "images", 4, "ngIf"], ["icon", "", "matRipple", "", "close", "", 1, "absolute", "top-2", "left-2", "bg-base-200", "sm:hidden", 3, "click"], ["icon", "", "matRipple", "", "fav", "", 1, "absolute", "top-2", "right-2", "bg-base-200", 3, "click"], [1, "p-2", "space-y-2", "flex-1", "h-1/2", "overflow-auto"], ["actions", "", 1, "z-0"], [1, "text-xl", "font-medium", "mb-2", "mt-4"], ["details", "", 1, "space-y-2"], [1, "text-xl", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["map", "", 1, "w-full", "mx-auto", "h-64", "sm:h-48", "relative", "border", "border-base-200", "overflow-hidden", "rounded"], [1, "pointer-events-none", 3, "src", "focus", "features", "options"], [1, "p-2", "border-t", "border-base-200", "shadow", "sm:hidden"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "flex", "items-center", "justify-center"], [1, "text-2xl"], [1, "absolute", "inset-0", 3, "images"], ["empty", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "opacity-30", "text-center"]];
    },
    template: function ParkingSpaceDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ParkingSpaceDetailsComponent_ng_container_0_Template, 42, 29, "ng-container", 4)(1, ParkingSpaceDetailsComponent_ng_template_1_Template, 3, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const empty_state_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.space)("ngIfElse", empty_state_r3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_3__.InteractiveMapComponent, _components_src_lib_image_carousel_component__WEBPACK_IMPORTED_MODULE_4__.ImageCarouselComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRipple],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                width: 30%;\n                min-width: 20rem;\n                height: 100%;\n                min-height: 65vh;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmtpbmctZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixVQUFVO2dCQUNWLGdCQUFnQjtnQkFDaEIsWUFBWTtnQkFDWixnQkFBZ0I7WUFDcEIiLCJmaWxlIjoicGFya2luZy1kZXRhaWxzLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDY1dmg7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYm9va2luZ3Mvc3JjL2xpYi9wYXJraW5nLXNlbGVjdC1tb2RhbC9wYXJraW5nLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsVUFBVTtnQkFDVixnQkFBZ0I7Z0JBQ2hCLFlBQVk7Z0JBQ1osZ0JBQWdCO1lBQ3BCOztBQUVaLGdyQkFBZ3JCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjV2aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 19138:
/*!*****************************************************************************************!*\
  !*** ./libs/bookings/src/lib/parking-select-modal/parking-filters-display.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingSpaceFiltersDisplayComponent: () => (/* binding */ ParkingSpaceFiltersDisplayComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _parking_filters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parking-filters.component */ 39145);
/* harmony import */ var _booking_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../booking-form.service */ 18379);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 15244);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);
















function ParkingSpaceFiltersDisplayComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.location, " ");
  }
}
function ParkingSpaceFiltersDisplayComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ParkingSpaceFiltersDisplayComponent_div_20_Template_button_click_3_listener() {
      const feat_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.removeFeature(feat_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](feat_r3);
  }
}
class ParkingSpaceFiltersDisplayComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  get start() {
    return this._event_form.form.value.date;
  }
  get end() {
    const {
      date,
      duration
    } = this._event_form.form.value;
    return date + duration * 60 * 1000;
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_bsheet, _event_form, _org, _settings) {
    super();
    this._bsheet = _bsheet;
    this._event_form = _event_form;
    this._org = _org;
    this._settings = _settings;
    this.view = 'list';
    this.viewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.options = this._event_form.options;
    this.location = '';
    this.editFilters = () => this._bsheet.open(_parking_filters_component__WEBPACK_IMPORTED_MODULE_3__.ParkingSpaceFiltersComponent);
  }
  ngOnInit() {
    this.subscription('opts', this.options.subscribe(({
      zone_id
    }) => this._updateLocation([zone_id])));
  }
  removeFeature(feat) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const value = yield _this._event_form.options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).toPromise();
      _this._event_form.setOptions({
        ...value,
        features: (value.features || []).filter(_ => _ !== feat)
      });
    })();
  }
  _updateLocation(zone_ids = []) {
    const level = this._org.levelWithID(zone_ids);
    const item = level || this._org.building;
    this.location = item?.display_name || item?.name || '';
  }
  static #_ = this.ɵfac = function ParkingSpaceFiltersDisplayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ParkingSpaceFiltersDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__.MatBottomSheet), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_booking_form_service__WEBPACK_IMPORTED_MODULE_4__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ParkingSpaceFiltersDisplayComponent,
    selectors: [["parking-space-filters-display"]],
    inputs: {
      view: "view"
    },
    outputs: {
      viewChange: "viewChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 22,
    vars: 23,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5208858215712453646$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_DISPLAY_COMPONENT_TS_0 = goog.getMsg(" Filters ");
        i18n_0 = MSG_EXTERNAL_5208858215712453646$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_DISPLAY_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟19eaa5cd51d70d9ea957eecac78cfd811e9b93d8␟5208858215712453646: Filters `;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8553228906889869186$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_DISPLAY_COMPONENT_TS_1 = goog.getMsg(" Map ");
        i18n_1 = MSG_EXTERNAL_8553228906889869186$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_DISPLAY_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟992a9a6a193a56c5b8846dc972c5e1977ee5f1aa␟8553228906889869186: Map `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7787942140742011951$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_DISPLAY_COMPONENT_TS_2 = goog.getMsg(" List ");
        i18n_2 = MSG_EXTERNAL_7787942140742011951$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_DISPLAY_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟4b286e90831dd637c5cd3eb20544664ee7112669␟7787942140742011951: List `;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7211304359187007121$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_DISPLAY_COMPONENT_TS_3 = goog.getMsg(" Min. {$interpolation} People ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ (options | async)?.capcaity || 2 }}"
          }
        });
        i18n_3 = MSG_EXTERNAL_7211304359187007121$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_DISPLAY_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:␟e1bcafb95323d9492bfdfa190a129131e6255cdb␟7211304359187007121: Min. ${"\uFFFD0\uFFFD"}:INTERPOLATION: People `;
      }
      return [i18n_0, i18n_1, i18n_2, i18n_3, ["actions", "", 1, "sm:hidden", "space-x-2", "flex", "items-center", "p-2"], ["matRipple", "", "filters", "", 1, "flex-1", "w-1/2", 3, "click"], [1, "flex", "items-center"], ["matRipple", "", "map", "", 1, "rounded-l", "rounded-r-none", 3, "click"], ["matRipple", "", "list", "", 1, "rounded-r", "rounded-l-none", 3, "click"], ["filters", "", 1, "flex", "items-center", "flex-wrap", "p-2", "w-[35rem]", "max-w-full", "sm:max-w-[35rem]"], ["filter-item", "", "zone", "", "class", "dark:border-base-200-500", 4, "ngIf"], ["filter-item", "", "date", "", 1, "dark:border-base-200-500"], ["filter-item", "", "time", "", 1, "dark:border-base-200-500"], ["filter-item", "", "count", "", 1, "dark:border-base-200-500"], ["filter-item", "", 4, "ngFor", "ngForOf"], ["filter-item", "", "zone", "", 1, "dark:border-base-200-500"], ["filter-item", ""], ["icon", "", "matRipple", "", 1, "-mr-4", 3, "click"]];
    },
    template: function ParkingSpaceFiltersDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 4)(1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ParkingSpaceFiltersDisplayComponent_Template_button_click_1_listener() {
          return ctx.editFilters();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 6)(4, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ParkingSpaceFiltersDisplayComponent_Template_button_click_4_listener() {
          ctx.view = "map";
          return ctx.viewChange.emit(ctx.view);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ParkingSpaceFiltersDisplayComponent_Template_button_click_6_listener() {
          ctx.view = "list";
          return ctx.viewChange.emit(ctx.view);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](7, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ParkingSpaceFiltersDisplayComponent_div_9_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](18, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ParkingSpaceFiltersDisplayComponent_div_20_Template, 6, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_5_0;
        let tmp_7_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("inverse", ctx.view !== "map");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("inverse", ctx.view !== "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](12, 10, ctx.start, "mediumDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](15, 13, ctx.start, ctx.time_format), " \u2014 ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](16, 16, ctx.end, ctx.time_format), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nExp"](((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](19, 19, ctx.options)) == null ? null : tmp_5_0.capcaity) || 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nApply"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 21, ctx.options)) == null ? null : tmp_7_0.features);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
    styles: ["[filter-item][_ngcontent-%COMP%] {\n                display: flex;\n                align-items: center;\n                padding: 0 1rem;\n                height: 2rem;\n                font-size: 0.875rem;\n                border: 1px solid rgba(0, 0, 0, 0.2);\n                border-radius: 1.25rem;\n                margin-right: 0.5rem;\n                margin-bottom: 0.5rem;\n            }\n\n            [filter-item][_ngcontent-%COMP%]:hover {\n                background: rgba(0, 0, 0, 0.1);\n            }\n\n            [filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n                margin-left: 0.5rem;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmtpbmctZmlsdGVycy1kaXNwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixtQkFBbUI7Z0JBQ25CLGVBQWU7Z0JBQ2YsWUFBWTtnQkFDWixtQkFBbUI7Z0JBQ25CLG9DQUFvQztnQkFDcEMsc0JBQXNCO2dCQUN0QixvQkFBb0I7Z0JBQ3BCLHFCQUFxQjtZQUN6Qjs7WUFFQTtnQkFDSSw4QkFBOEI7WUFDbEM7O1lBRUE7Z0JBQ0ksbUJBQW1CO1lBQ3ZCIiwiZmlsZSI6InBhcmtpbmctZmlsdGVycy1kaXNwbGF5LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgW2ZpbHRlci1pdGVtXSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtmaWx0ZXItaXRlbV06aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW2ZpbHRlci1pdGVtXSA+ICogKyAqIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYm9va2luZ3Mvc3JjL2xpYi9wYXJraW5nLXNlbGVjdC1tb2RhbC9wYXJraW5nLWZpbHRlcnMtZGlzcGxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2IsbUJBQW1CO2dCQUNuQixlQUFlO2dCQUNmLFlBQVk7Z0JBQ1osbUJBQW1CO2dCQUNuQixvQ0FBb0M7Z0JBQ3BDLHNCQUFzQjtnQkFDdEIsb0JBQW9CO2dCQUNwQixxQkFBcUI7WUFDekI7O1lBRUE7Z0JBQ0ksOEJBQThCO1lBQ2xDOztZQUVBO2dCQUNJLG1CQUFtQjtZQUN2Qjs7QUFFWiw0d0NBQTR3QyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgW2ZpbHRlci1pdGVtXSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtmaWx0ZXItaXRlbV06aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW2ZpbHRlci1pdGVtXSA+ICogKyAqIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 39145:
/*!*********************************************************************************!*\
  !*** ./libs/bookings/src/lib/parking-select-modal/parking-filters.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingSpaceFiltersComponent: () => (/* binding */ ParkingSpaceFiltersComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _booking_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../booking-form.service */ 18379);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 28797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 15244);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../form-fields/src/lib/date-field.component */ 19608);
/* harmony import */ var _form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../form-fields/src/lib/duration-field.component */ 83476);
/* harmony import */ var _form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../form-fields/src/lib/time-field.component */ 81413);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 25175);






















const _c0 = () => ({
  standalone: true
});
function ParkingSpaceFiltersComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ParkingSpaceFiltersComponent_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function ParkingSpaceFiltersComponent_ng_container_13_mat_form_field_1_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bld_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", bld_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", bld_r4.display_name || bld_r4.name, " ");
  }
}
function ParkingSpaceFiltersComponent_ng_container_13_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field", 33)(1, "mat-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ParkingSpaceFiltersComponent_ng_container_13_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setBuilding($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ParkingSpaceFiltersComponent_ng_container_13_mat_form_field_1_mat_option_5_Template, 2, 2, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 4, ctx_r1.building))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](12, _c0))("placeholder", ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 6, ctx_r1.building)) == null ? null : tmp_4_0.display_name) || ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 8, ctx_r1.building)) == null ? null : tmp_4_0.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 10, ctx_r1.buildings));
  }
}
function ParkingSpaceFiltersComponent_ng_container_13_mat_form_field_3_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lvl_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", lvl_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", lvl_r6.display_name || lvl_r6.name, " ");
  }
}
function ParkingSpaceFiltersComponent_ng_container_13_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field", 33)(1, "mat-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ParkingSpaceFiltersComponent_ng_container_13_mat_form_field_3_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setOptions({
        zone_id: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ParkingSpaceFiltersComponent_ng_container_13_mat_form_field_3_mat_option_3_Template, 2, 2, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 3, ctx_r1.options)) == null ? null : tmp_2_0.zone_id)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 5, ctx_r1.levels));
  }
}
function ParkingSpaceFiltersComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ParkingSpaceFiltersComponent_ng_container_13_mat_form_field_1_Template, 7, 13, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ParkingSpaceFiltersComponent_ng_container_13_mat_form_field_3_Template, 5, 8, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, ctx_r1.buildings)) == null ? null : tmp_1_0.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.hide_levels);
  }
}
function ParkingSpaceFiltersComponent_ng_container_14_mat_form_field_1_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const reg_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", reg_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", reg_r8.display_name || reg_r8.name, " ");
  }
}
function ParkingSpaceFiltersComponent_ng_container_14_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field", 33)(1, "mat-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ParkingSpaceFiltersComponent_ng_container_14_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setRegion($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ParkingSpaceFiltersComponent_ng_container_14_mat_form_field_1_mat_option_2_Template, 2, 2, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r1.region)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 3, ctx_r1.regions));
  }
}
function ParkingSpaceFiltersComponent_ng_container_14_mat_form_field_3_mat_optgroup_5_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", level_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", level_r10.display_name || level_r10.name, " ");
  }
}
function ParkingSpaceFiltersComponent_ng_container_14_mat_form_field_3_mat_optgroup_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-optgroup", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ParkingSpaceFiltersComponent_ng_container_14_mat_form_field_3_mat_optgroup_5_mat_option_1_Template, 2, 2, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bld_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", bld_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", bld_r11.levels);
  }
}
function ParkingSpaceFiltersComponent_ng_container_14_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field", 33)(1, "mat-select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ParkingSpaceFiltersComponent_ng_container_14_mat_form_field_3_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setOptions({
        zone_id: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Any Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ParkingSpaceFiltersComponent_ng_container_14_mat_form_field_3_mat_optgroup_5_Template, 2, 2, "mat-optgroup", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 3, ctx_r1.options)) == null ? null : tmp_2_0.zone_id)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 5, ctx_r1.region_levels));
  }
}
function ParkingSpaceFiltersComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ParkingSpaceFiltersComponent_ng_container_14_mat_form_field_1_Template, 4, 6, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ParkingSpaceFiltersComponent_ng_container_14_mat_form_field_3_Template, 7, 8, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, ctx_r1.regions)) == null ? null : tmp_1_0.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.hide_levels);
  }
}
function ParkingSpaceFiltersComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 42)(1, "div", 43)(2, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nStart"](3, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "a-time-field", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ParkingSpaceFiltersComponent_div_21_Template_a_time_field_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.form.patchValue({
        date: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 43)(7, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nStart"](8, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "a-duration-field", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r1.form.value.date)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](6, _c0))("use_24hr", ctx_r1.use_24hr);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("time", ctx_r1.form == null ? null : ctx_r1.form.value == null ? null : ctx_r1.form.value.date)("max", ctx_r1.max_duration)("use_24hr", ctx_r1.use_24hr);
  }
}
function ParkingSpaceFiltersComponent_section_30_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 26)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-checkbox", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ParkingSpaceFiltersComponent_section_30_div_3_Template_mat_checkbox_ngModelChange_3_listener($event) {
      const feat_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.toggleFeature(feat_r14, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const feat_r14 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](feat_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 3, ctx_r1.options)) == null ? null : tmp_4_0.features == null ? null : tmp_4_0.features.includes(feat_r14))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c0));
  }
}
function ParkingSpaceFiltersComponent_section_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 48)(1, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ParkingSpaceFiltersComponent_section_30_div_3_Template, 5, 6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 1, ctx_r1.features));
  }
}
function ParkingSpaceFiltersComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 52)(1, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ParkingSpaceFiltersComponent_div_32_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
class ParkingSpaceFiltersComponent {
  setBuilding(bld) {
    this._org.building = bld;
  }
  get bld() {
    return this._org.building;
  }
  get form() {
    return this._form.form;
  }
  get end_date() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.endOfDay)((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.addDays)(Date.now(), this._settings.get('app.parking.available_period') || 7));
  }
  get max_duration() {
    return this._settings.get('app.events.max_duration') || 480;
  }
  get use_24hr() {
    return this._settings.get('app.use_24_hour_time');
  }
  get use_region() {
    return !!this._settings.get('app.use_region');
  }
  constructor(_bsheet_ref, _settings, _form, _org) {
    this._bsheet_ref = _bsheet_ref;
    this._settings = _settings;
    this._form = _form;
    this._org = _org;
    this.can_close = false;
    this.options = this._form.options;
    this.levels = this._org.active_levels.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(l => {
      for (const lvl of l) {
        const bld = this._org.buildings.find(_ => _.id === lvl.parent_id);
        lvl.bld = bld?.display_name || bld?.name || '';
      }
      return l.filter(_ => _.tags.includes('parking'));
    }));
    this.buildings = this._org.active_buildings;
    this.regions = this._org.region_list;
    this.region_levels = this._org.active_region.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(_ => {
      const region_buildings = this._org.buildings.filter(b => !_ || b.parent_id === _.id);
      const region_levels = region_buildings.map(b => ({
        id: b.id,
        name: b.display_name || b.name,
        levels: this._org.levels.filter(l => l.parent_id === b.id && l.tags.includes('parking'))
      }));
      return region_levels.filter(_ => _.levels.length);
    }));
    this.features = this._form.features;
    this.close = () => this._bsheet_ref.dismiss();
    this.setOptions = o => this._form.setOptions(o);
    this.setRegion = r => this._org.region = r;
    this.can_close = !!this._bsheet_ref;
  }
  toggleFeature(feat, state) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        features
      } = yield _this.options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).toPromise();
      const new_list = (features || []).filter(_ => feat !== _);
      if (state) new_list.push(feat);
      _this.setOptions({
        features: new_list
      });
    })();
  }
  static #_ = this.ɵfac = function ParkingSpaceFiltersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ParkingSpaceFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__.MatBottomSheetRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_booking_form_service__WEBPACK_IMPORTED_MODULE_3__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: ParkingSpaceFiltersComponent,
    selectors: [["parking-space-filters"]],
    inputs: {
      hide_levels: "hide_levels"
    },
    decls: 33,
    vars: 18,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7173310086383878456$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_0 = goog.getMsg("Space Filters");
        i18n_0 = MSG_EXTERNAL_7173310086383878456$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟36173168a4643aa78634e9242a63f3a40862f166␟7173310086383878456:Space Filters`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5028777105388019087$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_1 = goog.getMsg("Details");
        i18n_1 = MSG_EXTERNAL_5028777105388019087$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟4f8b2bb476981727ab34ed40fde1218361f92c45␟5028777105388019087:Details`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_471816275243265264$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_2 = goog.getMsg("Location");
        i18n_2 = MSG_EXTERNAL_471816275243265264$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟ed31c09fd77c36238c13d83635f3fe5294c733d2␟471816275243265264:Location`;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3158758063619980932$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_3 = goog.getMsg("Date{$startTagSpan}*{$closeTagSpan}", {
          "closeTagSpan": "\uFFFD/#18\uFFFD",
          "startTagSpan": "\uFFFD#18\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_3 = MSG_EXTERNAL_3158758063619980932$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:␟04cfb5fd033651743bc4b9408bd52ba4ee894070␟3158758063619980932:Date${"\uFFFD#18\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#18\uFFFD"}:CLOSE_TAG_SPAN:`;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4158925728608139729$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_4 = goog.getMsg("Favourites");
        i18n_4 = MSG_EXTERNAL_4158925728608139729$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_4;
      } else {
        i18n_4 = $localize`:␟62ab0c2bf8d16ce7baf2c8b1da2c561d99522256␟4158925728608139729:Favourites`;
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_165958440274527719$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_5 = goog.getMsg(" Only show favourite spaces ");
        i18n_5 = MSG_EXTERNAL_165958440274527719$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_5;
      } else {
        i18n_5 = $localize`:␟ac378c0b437746af89a84b4909ab5b83c5ff55a3␟165958440274527719: Only show favourite spaces `;
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7323982518822503502$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_6 = goog.getMsg("Any Level");
        i18n_6 = MSG_EXTERNAL_7323982518822503502$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_6;
      } else {
        i18n_6 = $localize`:␟50407595967bf29832e873b41f9de3502d5c3e03␟7323982518822503502:Any Level`;
      }
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8264413387051126615$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_7 = goog.getMsg("Any Region");
        i18n_7 = MSG_EXTERNAL_8264413387051126615$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_7;
      } else {
        i18n_7 = $localize`:␟130845b58eba8e50c98f3fba117a0168cdba4f31␟8264413387051126615:Any Region`;
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7323982518822503502$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_8 = goog.getMsg("Any Level");
        i18n_8 = MSG_EXTERNAL_7323982518822503502$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_8;
      } else {
        i18n_8 = $localize`:␟50407595967bf29832e873b41f9de3502d5c3e03␟7323982518822503502:Any Level`;
      }
      let i18n_9;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3039786638368843634$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_9 = goog.getMsg("Start Time{$startTagSpan}*{$closeTagSpan}", {
          "closeTagSpan": "\uFFFD/#4\uFFFD",
          "startTagSpan": "\uFFFD#4\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_9 = MSG_EXTERNAL_3039786638368843634$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_9;
      } else {
        i18n_9 = $localize`:␟34a7595cdc15925514038224946986bfd90dc0ed␟3039786638368843634:Start Time${"\uFFFD#4\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_SPAN:`;
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5960185837188220843$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_10 = goog.getMsg("End Time{$startTagSpan}*{$closeTagSpan}", {
          "closeTagSpan": "\uFFFD/#9\uFFFD",
          "startTagSpan": "\uFFFD#9\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_10 = MSG_EXTERNAL_5960185837188220843$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_10;
      } else {
        i18n_10 = $localize`:␟85d5c3a89bab9a7475a7db095089e161586cb7a1␟5960185837188220843:End Time${"\uFFFD#9\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#9\uFFFD"}:CLOSE_TAG_SPAN:`;
      }
      let i18n_11;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1551920764795208868$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_11 = goog.getMsg("Facilities");
        i18n_11 = MSG_EXTERNAL_1551920764795208868$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_11;
      } else {
        i18n_11 = $localize`:␟bf10c600bd861cfd0a23f4759562ee0ae9dbe19f␟1551920764795208868:Facilities`;
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2296888311792137027$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_12 = goog.getMsg(" Apply Filters ");
        i18n_12 = MSG_EXTERNAL_2296888311792137027$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_FILTERS_COMPONENT_TS_12;
      } else {
        i18n_12 = $localize`:␟c17e2cc448524a39eb83b2937cea3235a2e8bf37␟2296888311792137027: Apply Filters `;
      }
      return [i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_9, i18n_10, i18n_11, i18n_12, [1, "flex", "items-center", "border-b", "border-base-200", "pb-2", "sm:hidden"], [1, "flex-1", "pl-2"], ["icon", "", "matRipple", "", "close", "", 3, "click", 4, "ngIf"], [1, "font-medium", "flex-2", "text-center"], [1, "flex-1"], [1, "max-h-[65vh]", "p-2", "overflow-y-auto", "overflow-x-hidden", "divide-y", "divide-base-200", "w-full", "max-w-[100vw]", 3, "formGroup"], ["details", ""], [1, "text-lg", "font-medium"], [1, "flex-1", "min-w-[256px]", "flex", "flex-col"], ["for", "location"], [4, "ngIf"], [1, "flex-1", "min-w-[256px]"], ["for", "date"], ["name", "date", 3, "ngModelChange", "ngModel", "ngModelOptions", "to"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["favs", "", 1, "space-y-2", "pb-4"], [1, "flex", "items-center"], ["for", "fav", 1, "flex-1", "w-1/2"], ["name", "fav", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["features", "", "class", "space-y-2", 4, "ngIf"], ["class", "px-2 pt-2 w-full border-t border-base-200", 4, "ngIf"], ["icon", "", "matRipple", "", "close", "", 3, "click"], ["appearance", "outline", "class", "w-full", 4, "ngIf"], ["appearance", "outline", 1, "w-full"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "location", "placeholder", i18n_6, 3, "ngModelChange", "ngModel", "ngModelOptions"], ["name", "region", "placeholder", i18n_7, 3, "ngModelChange", "ngModel", "ngModelOptions"], ["name", "location", "placeholder", i18n_8, 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1", "w-1/3"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "use_24hr"], ["features", "", 1, "space-y-2"], ["class", "flex items-center", 4, "ngFor", "ngForOf"], ["for", "feat", 1, "flex-1", "w-1/2"], ["name", "feat", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "px-2", "pt-2", "w-full", "border-t", "border-base-200"], ["btn", "", "matRipple", "", "close", "", 1, "w-full", 3, "click"]];
    },
    template: function ParkingSpaceFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ParkingSpaceFiltersComponent_button_2_Template, 3, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](4, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "form", 15)(7, "section", 16)(8, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](9, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 18)(11, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](12, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, ParkingSpaceFiltersComponent_ng_container_13_Template, 4, 4, "ng-container", 20)(14, ParkingSpaceFiltersComponent_ng_container_14_Template, 4, 4, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 21)(16, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nStart"](17, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "a-date-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ParkingSpaceFiltersComponent_Template_a_date_field_ngModelChange_19_listener($event) {
          return ctx.form.patchValue({
            date: $event
          });
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, " Date and time must be in the future ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, ParkingSpaceFiltersComponent_div_21_Template, 11, 7, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "section", 25)(23, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](24, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 26)(26, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](27, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-checkbox", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ParkingSpaceFiltersComponent_Template_mat_checkbox_ngModelChange_28_listener($event) {
          return ctx.setOptions({
            show_fav: $event
          });
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, ParkingSpaceFiltersComponent_section_30_Template, 5, 3, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, ParkingSpaceFiltersComponent_div_32_Template, 3, 0, "div", 30);
      }
      if (rf & 2) {
        let tmp_8_0;
        let tmp_10_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.can_close);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.use_region);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.use_region);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.form.value.date)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](16, _c0))("to", ctx.end_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](29, 12, ctx.options)) == null ? null : tmp_8_0.show_fav)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 14, ctx.features)) == null ? null : tmp_10_0.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.can_close);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOptgroup, _form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_4__.DateFieldComponent, _form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_5__.DurationFieldComponent, _form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_6__.TimeFieldComponent, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_7__.IconComponent, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                width: 100%;\n                max-width: 100vw;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmtpbmctZmlsdGVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixXQUFXO2dCQUNYLGdCQUFnQjtZQUNwQiIsImZpbGUiOiJwYXJraW5nLWZpbHRlcnMuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYm9va2luZ3Mvc3JjL2xpYi9wYXJraW5nLXNlbGVjdC1tb2RhbC9wYXJraW5nLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsV0FBVztnQkFDWCxnQkFBZ0I7WUFDcEI7O0FBRVosd2pCQUF3akIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 30258:
/*!******************************************************************************!*\
  !*** ./libs/bookings/src/lib/parking-select-modal/parking-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingSpaceListComponent: () => (/* binding */ ParkingSpaceListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _booking_form_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../booking-form.service */ 18379);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/src/lib/authenticated-image.directive */ 93208);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 74646);











function ParkingSpaceListComponent_ng_container_5_ul_1_li_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ParkingSpaceListComponent_ng_container_5_ul_1_li_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 25);
  }
  if (rf & 2) {
    const space_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("source", space_r2.images[0]);
  }
}
function ParkingSpaceListComponent_ng_container_5_ul_1_li_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 26);
  }
}
function ParkingSpaceListComponent_ng_container_5_ul_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 14)(1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParkingSpaceListComponent_ng_container_5_ul_1_li_1_Template_button_click_1_listener() {
      const space_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.selectSpace(space_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ParkingSpaceListComponent_ng_container_5_ul_1_li_1_div_3_Template, 3, 0, "div", 17)(4, ParkingSpaceListComponent_ng_container_5_ul_1_li_1_img_4_Template, 1, 1, "img", 18)(5, ParkingSpaceListComponent_ng_container_5_ul_1_li_1_ng_template_5_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 19)(8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 21)(11, "app-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 21)(16, "app-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](19, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParkingSpaceListComponent_ng_container_5_ul_1_li_1_Template_button_click_20_listener() {
      const space_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.toggleFav.emit(space_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const space_r2 = ctx.$implicit;
    const placeholder_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("!border-info", ctx_r2.active === space_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.selected.includes(space_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", space_r2.images == null ? null : space_r2.images.length)("ngIfElse", placeholder_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", space_r2.name || "Meeting Space", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", space_r2.location || (space_r2.level == null ? null : space_r2.level.display_name) || (space_r2.level == null ? null : space_r2.level.name) || (space_r2.zone == null ? null : space_r2.zone.display_name) || (space_r2.zone == null ? null : space_r2.zone.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nExp"](space_r2.capacity < 1 ? 2 : space_r2.capacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nApply"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("text-info", ctx_r2.isFavourite(space_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.isFavourite(space_r2.id) ? "favorite" : "favorite_border");
  }
}
function ParkingSpaceListComponent_ng_container_5_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ParkingSpaceListComponent_ng_container_5_ul_1_li_1_Template, 23, 11, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r2.assets));
  }
}
function ParkingSpaceListComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ParkingSpaceListComponent_ng_container_5_ul_1_Template, 3, 3, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const empty_state_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx_r2.assets)) == null ? null : tmp_3_0.length)("ngIfElse", empty_state_r5);
  }
}
function ParkingSpaceListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ParkingSpaceListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](3, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("diameter", 32);
  }
}
class ParkingSpaceListComponent {
  constructor(_form) {
    this._form = _form;
    this.active = '';
    this.selected = '';
    this.favorites = [];
    this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.toggleFav = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.assets = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this._form.options, this._form.available_resources]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([{
      show_fav
    }, _]) => _.filter(i => !show_fav || this.isFavourite(i.id))));
    this.loading = this._form.loading;
  }
  isFavourite(space_id) {
    return this.favorites.includes(space_id);
  }
  selectSpace(space) {
    this.onSelect.emit(space);
  }
  static #_ = this.ɵfac = function ParkingSpaceListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ParkingSpaceListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_booking_form_service__WEBPACK_IMPORTED_MODULE_0__.BookingFormService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ParkingSpaceListComponent,
    selectors: [["parking-space-list"]],
    inputs: {
      active: "active",
      selected: "selected",
      favorites: "favorites"
    },
    outputs: {
      onSelect: "onSelect",
      toggleFav: "toggleFav"
    },
    decls: 11,
    vars: 7,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5968132631442328843$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_LIST_COMPONENT_TS_0 = goog.getMsg("Results");
        i18n_0 = MSG_EXTERNAL_5968132631442328843$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_LIST_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟80ed5b776a26a78099e230e0e89d96c33ba44e24␟5968132631442328843:Results`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4264834071624535187$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_LIST_COMPONENT_TS_1 = goog.getMsg(" {$interpolation} result(s) found ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ (assets | async)?.length || 0 }}"
          }
        });
        i18n_1 = MSG_EXTERNAL_4264834071624535187$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_LIST_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟dd662afda8b27e3c6818b705321ddcc36bd571c0␟4264834071624535187: ${"\uFFFD0\uFFFD"}:INTERPOLATION: result(s) found `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4552898751936658514$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_LIST_COMPONENT_TS_2 = goog.getMsg(" {$interpolation} People ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{\n                                        space.capacity < 1 ? 2 : space.capacity\n                                    }}"
          }
        });
        i18n_2 = MSG_EXTERNAL_4552898751936658514$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_LIST_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟08719ea79f574b595da7d187fda2fa8c491b5de7␟4552898751936658514: ${"\uFFFD0\uFFFD"}:INTERPOLATION: People `;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3831747985282777621$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_LIST_COMPONENT_TS_3 = goog.getMsg(" No available spaces for selected time and/or filters ");
        i18n_3 = MSG_EXTERNAL_3831747985282777621$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_LIST_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:␟027c29534f5dc45741b226edfebb3f7f578384b0␟3831747985282777621: No available spaces for selected time and/or filters `;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_126579492602011343$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_LIST_COMPONENT_TS_4 = goog.getMsg("Finding available spaces...");
        i18n_4 = MSG_EXTERNAL_126579492602011343$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_LIST_COMPONENT_TS_4;
      } else {
        i18n_4 = $localize`:␟8dad32dda6491a1051df9156e98031c0e634b413␟126579492602011343:Finding available spaces...`;
      }
      return [["empty_state", ""], ["load_state", ""], ["placeholder", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, [1, "font-bold"], ["count", "", 1, "text-sm", "opacity-60", "mb-4"], [4, "ngIf", "ngIfElse"], ["class", "list-style-none space-y-2", 4, "ngIf", "ngIfElse"], [1, "list-style-none", "space-y-2"], ["space", "", "class", "relative p-2 rounded-lg w-full shadow border bg-base-100 border-base-200", 3, "!border-info", 4, "ngFor", "ngForOf"], ["space", "", 1, "relative", "p-2", "rounded-lg", "w-full", "shadow", "border", "bg-base-100", "border-base-200"], ["matRipple", "", "select", "", 1, "w-full", "h-full", "flex", "items-center", 3, "click"], [1, "relative", "w-20", "h-20", "rounded-xl", "bg-base-200", "mr-4", "overflow-hidden", "flex", "items-center", "justify-center"], ["class", "absolute top-1 left-1 border border-neutral bg-base-200 rounded-full h-6 w-6 flex items-center justify-center text-white", 4, "ngIf"], ["auth", "", "class", "object-cover h-full", 3, "source", 4, "ngIf", "ngIfElse"], [1, "space-y-2"], [1, "font-medium", "truncate", "mr-10"], [1, "flex", "items-center", "text-sm", "space-x-2"], [1, "text-info"], ["icon", "", "matRipple", "", "fav", "", 1, "absolute", "top-1", "right-1", 3, "click"], [1, "absolute", "top-1", "left-1", "border", "border-neutral", "bg-base-200", "rounded-full", "h-6", "w-6", "flex", "items-center", "justify-center", "text-white"], ["auth", "", 1, "object-cover", "h-full", 3, "source"], ["src", "assets/icons/car-placeholder.svg", 1, "m-auto"], ["empty", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "opacity-30", "text-center"], ["loading", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"], [1, "opacity-30"]];
    },
    template: function ParkingSpaceListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](1, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ParkingSpaceListComponent_ng_container_5_Template, 3, 4, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ParkingSpaceListComponent_ng_template_7_Template, 3, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(9, ParkingSpaceListComponent_ng_template_9_Template, 4, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        let tmp_2_0;
        const load_state_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nExp"](((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 3, ctx.assets)) == null ? null : tmp_2_0.length) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nApply"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 5, ctx.loading))("ngIfElse", load_state_r6);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinner, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_2__.AuthenticatedImageDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                width: 100%;\n                height: 100%;\n                padding: 0.5rem;\n                overflow: auto;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmtpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixlQUFlO2dCQUNmLGNBQWM7WUFDbEIiLCJmaWxlIjoicGFya2luZy1saXN0LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYm9va2luZ3Mvc3JjL2xpYi9wYXJraW5nLXNlbGVjdC1tb2RhbC9wYXJraW5nLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osZUFBZTtnQkFDZixjQUFjO1lBQ2xCOztBQUVaLDRoQkFBNGhCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 48559:
/*!**************************************************************************************!*\
  !*** ./libs/bookings/src/lib/parking-select-modal/parking-location-pin.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingSpaceLocationPinComponent: () => (/* binding */ ParkingSpaceLocationPinComponent)
/* harmony export */ });
/* harmony import */ var _placeos_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/components */ 51588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/src/lib/icon.component */ 69434);




function ParkingSpaceLocationPinComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 16);
  }
}
function ParkingSpaceLocationPinComponent_app_icon_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " done ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class ParkingSpaceLocationPinComponent {
  get selected() {
    return this._data.selected === true;
  }
  constructor(_data) {
    this._data = _data;
  }
  static #_ = this.ɵfac = function ParkingSpaceLocationPinComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ParkingSpaceLocationPinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_placeos_components__WEBPACK_IMPORTED_MODULE_0__.MAP_FEATURE_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ParkingSpaceLocationPinComponent,
    selectors: [["parking-space-location-pin"]],
    decls: 17,
    vars: 2,
    consts: [[1, "absolute", "bottom-0", "left-1/2", "-translate-x-1/2"], ["width", "66", "height", "80", "viewBox", "0 0 66 80", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["filter", "url(#filter0_d_1065_10313)"], ["d", "M19.724 53.0408C25.0871 60.3435 30.5582 65.8583 31.0184 66.3178C31.4558 66.755 32.0489 67.0007 32.6674 67.0008H32.6678C33.2863 67.0007 33.8795 66.755 34.3169 66.3178C34.7771 65.8583 40.2481 60.3435 45.6112 53.0408C48.2928 49.3894 50.963 45.2701 52.9663 41.0957C54.9629 36.935 56.3331 32.6459 56.3342 28.6724C56.364 25.5564 55.7725 22.4657 54.5941 19.5809C53.415 16.6946 51.6722 14.0724 49.4675 11.8677C47.2629 9.66308 44.6407 7.92024 41.7544 6.74121C38.8711 5.5634 35.782 4.97184 32.6676 5.00103C29.5533 4.97184 26.4642 5.5634 23.5809 6.74121C20.6946 7.92024 18.0724 9.66308 15.8677 11.8677C13.6631 14.0724 11.9202 16.6946 10.7412 19.5809C9.56278 22.4657 8.97122 25.5565 9.00108 28.6726C9.0022 32.646 10.3724 36.9351 12.369 41.0957C14.3723 45.2701 17.0425 49.3894 19.724 53.0408Z", "fill", "#309251", "stroke", "#0B421D", "stroke-width", "2"], ["id", "filter0_d_1065_10313", "x", "0", "y", "0", "width", "65.3353", "height", "80.001", "filterUnits", "userSpaceOnUse", "color-interpolation-filters", "sRGB"], ["flood-opacity", "0", "result", "BackgroundImageFix"], ["in", "SourceAlpha", "type", "matrix", "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", "result", "hardAlpha"], ["dy", "4"], ["stdDeviation", "4"], ["in2", "hardAlpha", "operator", "out"], ["type", "matrix", "values", "0 0 0 0 0.0196078 0 0 0 0 0.109804 0 0 0 0 0.172549 0 0 0 0.2 0"], ["mode", "normal", "in2", "BackgroundImageFix", "result", "effect1_dropShadow_1065_10313"], ["mode", "normal", "in", "SourceGraphic", "in2", "effect1_dropShadow_1065_10313", "result", "shape"], [1, "absolute", "top-0", "left-0", "w-full", "h-3/4", "flex", "items-center", "justify-center"], ["class", "relative z-10 h-4 w-4 rounded-full bg-base-100 border-2 border-[#0B421D]", 4, "ngIf"], ["class", "relative text-white z-10 text-2xl", 4, "ngIf"], [1, "relative", "z-10", "h-4", "w-4", "rounded-full", "bg-base-100", "border-2", "border-[#0B421D]"], [1, "relative", "text-white", "z-10", "text-2xl"]],
    template: function ParkingSpaceLocationPinComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 1)(2, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "defs")(5, "filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "feFlood", 5)(7, "feColorMatrix", 6)(8, "feOffset", 7)(9, "feGaussianBlur", 8)(10, "feComposite", 9)(11, "feColorMatrix", 10)(12, "feBlend", 11)(13, "feBlend", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ParkingSpaceLocationPinComponent_div_15_Template, 1, 0, "div", 14)(16, ParkingSpaceLocationPinComponent_app_icon_16_Template, 2, 0, "app-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selected);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 88952:
/*!*****************************************************************************!*\
  !*** ./libs/bookings/src/lib/parking-select-modal/parking-map.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingSpaceSelectMapComponent: () => (/* binding */ ParkingSpaceSelectMapComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/events */ 40569);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var _parking_location_pin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parking-location-pin.component */ 48559);
/* harmony import */ var libs_common_src_lib_mapspeople_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/common/src/lib/mapspeople.service */ 99420);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/src/lib/interactive-map.component */ 24918);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 25175);















const _c0 = () => ({
  controls: true
});
function ParkingSpaceSelectMapComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "interactive-map", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("zoomChange", function ParkingSpaceSelectMapComponent_ng_container_0_Template_interactive_map_zoomChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.zoom, $event) || (ctx_r1.zoom = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    })("centerChange", function ParkingSpaceSelectMapComponent_ng_container_0_Template_interactive_map_centerChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.center, $event) || (ctx_r1.center = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.map_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("zoom", ctx_r1.zoom)("center", ctx_r1.center);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 7, ctx_r1.styles))("features", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 9, ctx_r1.features))("actions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 11, ctx_r1.actions))("options", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c0));
  }
}
function ParkingSpaceSelectMapComponent_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", opt_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", opt_r3.display_name || opt_r3.name, " ");
  }
}
class ParkingSpaceSelectMapComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  get map_url() {
    return this.level?.map_id || '';
  }
  constructor(_event_form, _maps_people) {
    super();
    this._event_form = _event_form;
    this._maps_people = _maps_people;
    this.selected = [];
    this.is_displayed = false;
    this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.zoom = 1;
    this.center = {
      x: 0.5,
      y: 0.5
    };
    this._seletedSpace = s => () => this.onSelect.emit(s);
    this.level = null;
    this.levels = this._event_form.available_spaces.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(_ => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_0__.unique)(_.map(({
      level
    }) => level))));
    this.features = this._event_form.available_spaces.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(l => l.map(space => ({
      location: space.map_id,
      content: _parking_location_pin_component__WEBPACK_IMPORTED_MODULE_2__.ParkingSpaceLocationPinComponent,
      data: {
        ...space,
        selected: this.selected.includes(space.id)
      }
    }))));
    this.actions = this._event_form.available_spaces.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(l => l.map(space => ({
      id: space.map_id,
      action: ['touchend', 'mouseup'],
      callback: this._seletedSpace(space)
    }))));
  }
  ngOnInit() {
    this.subscription('spaces', this._event_form.available_spaces.subscribe(_ => {
      if (!this.level && _.length) this.level = _[0].level;
    }));
  }
  setLevel(level) {
    this.level = level;
    this._maps_people.setCustomZone(level.parent_id);
  }
  setZoom(new_zoom) {
    this.zoom = Math.max(0.5, Math.min(10, new_zoom));
  }
  resetMap() {
    this.zoom = 1;
    this.center = {
      x: 0.5,
      y: 0.5
    };
  }
  static #_ = this.ɵfac = function ParkingSpaceSelectMapComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ParkingSpaceSelectMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_events__WEBPACK_IMPORTED_MODULE_1__.EventFormService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](libs_common_src_lib_mapspeople_service__WEBPACK_IMPORTED_MODULE_3__.MapsPeopleService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ParkingSpaceSelectMapComponent,
    selectors: [["parking-space-map"]],
    inputs: {
      selected: "selected",
      is_displayed: "is_displayed"
    },
    outputs: {
      onSelect: "onSelect"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 6,
    vars: 5,
    consts: [[4, "ngIf"], [1, "absolute", "inset-x-0", "top-0", "bg-base-100", "p-2", "border-b", "border-base-200"], ["levels", "", "appearance", "outline", 1, "w-full", "h-[3.25rem]"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], [3, "value"]],
    template: function ParkingSpaceSelectMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ParkingSpaceSelectMapComponent_ng_container_0_Template, 5, 14, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "mat-form-field", 2)(3, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ParkingSpaceSelectMapComponent_Template_mat_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.level, $event) || (ctx.level = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ParkingSpaceSelectMapComponent_Template_mat_select_ngModelChange_3_listener($event) {
          return ctx.setLevel($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ParkingSpaceSelectMapComponent_mat_option_4_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.is_displayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.level);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, ctx.levels));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_4__.InteractiveMapComponent, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                position: relative;\n                background: rgba(0, 0, 0, 0.05);\n                padding-top: 4rem;\n            }\n\n            button[_ngcontent-%COMP%] {\n                border-radius: 0;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmtpbmctbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksa0JBQWtCO2dCQUNsQiwrQkFBK0I7Z0JBQy9CLGlCQUFpQjtZQUNyQjs7WUFFQTtnQkFDSSxnQkFBZ0I7WUFDcEIiLCJmaWxlIjoicGFya2luZy1tYXAuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDRyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYm9va2luZ3Mvc3JjL2xpYi9wYXJraW5nLXNlbGVjdC1tb2RhbC9wYXJraW5nLW1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGtCQUFrQjtnQkFDbEIsK0JBQStCO2dCQUMvQixpQkFBaUI7WUFDckI7O1lBRUE7Z0JBQ0ksZ0JBQWdCO1lBQ3BCOztBQUVaLGdwQkFBZ3BCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDRyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 67642:
/*!**************************************************************************************!*\
  !*** ./libs/bookings/src/lib/parking-select-modal/parking-select-modal.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FAV_PARKING_KEY: () => (/* binding */ FAV_PARKING_KEY),
/* harmony export */   ParkingSpaceSelectModalComponent: () => (/* binding */ ParkingSpaceSelectModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _booking_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../booking-form.service */ 18379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _parking_filters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parking-filters.component */ 39145);
/* harmony import */ var _parking_filters_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parking-filters-display.component */ 19138);
/* harmony import */ var _parking_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parking-list.component */ 30258);
/* harmony import */ var _parking_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parking-map.component */ 88952);
/* harmony import */ var _parking_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parking-details.component */ 6724);















function ParkingSpaceSelectModalComponent_parking_space_list_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "parking-space-list", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("toggleFav", function ParkingSpaceSelectModalComponent_parking_space_list_11_Template_parking_space_list_toggleFav_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.toggleFavourite($event));
    })("onSelect", function ParkingSpaceSelectModalComponent_parking_space_list_11_Template_parking_space_list_onSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.displayed = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("active", ctx_r2.displayed == null ? null : ctx_r2.displayed.id)("selected", ctx_r2.selected_ids)("favorites", ctx_r2.favorites);
  }
}
function ParkingSpaceSelectModalComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ParkingSpaceSelectModalComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.displayed = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ParkingSpaceSelectModalComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "parking-space-map", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onSelect", function ParkingSpaceSelectModalComponent_ng_template_32_Template_parking_space_map_onSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.displayed = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selected", ctx_r2.selected_ids)("is_displayed", !!ctx_r2.displayed);
  }
}
const FAV_PARKING_KEY = 'favourite_parking_spaces';
class ParkingSpaceSelectModalComponent {
  get selected_ids() {
    return this.selected.map(_ => _.id).join(',');
  }
  get favorites() {
    return this._settings.get(FAV_PARKING_KEY) || [];
  }
  constructor(_dialog_ref, _settings, _event_form, _data) {
    this._dialog_ref = _dialog_ref;
    this._settings = _settings;
    this._event_form = _event_form;
    this._data = _data;
    this.selected = [];
    this.view = 'list';
    this.selected = [...(_data.spaces || [])];
    this._event_form.setOptions(_data.options);
  }
  isSelected(id) {
    return id && this.selected_ids.includes(id);
  }
  setSelected(item, state) {
    const list = this.selected.filter(_ => _.id !== item.id);
    if (state) list.push(item);
    this.selected = list;
    if (!this._data.options.group && state) this._dialog_ref.close([item]);
  }
  toggleFavourite(item) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(item.id);
    if (new_state) {
      this._settings.saveUserSetting(FAV_PARKING_KEY, [...fav_list, item.id]);
    } else {
      this._settings.saveUserSetting(FAV_PARKING_KEY, fav_list.filter(_ => _ !== item.id));
    }
  }
  static #_ = this.ɵfac = function ParkingSpaceSelectModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ParkingSpaceSelectModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_booking_form_service__WEBPACK_IMPORTED_MODULE_1__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: ParkingSpaceSelectModalComponent,
    selectors: [["parking-space-select-modal"]],
    decls: 34,
    vars: 22,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6275162452894389177$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_SELECT_MODAL_COMPONENT_TS_0 = goog.getMsg("Find Parking Space");
        i18n_0 = MSG_EXTERNAL_6275162452894389177$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_SELECT_MODAL_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟8db1ccf77dfb75785bcf8e9090ad65ea6ab69884␟6275162452894389177:Find Parking Space`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8443571736703532556$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_SELECT_MODAL_COMPONENT_TS_1 = goog.getMsg(" View List ");
        i18n_1 = MSG_EXTERNAL_8443571736703532556$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_SELECT_MODAL_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟30d3439b0e0095fe69503245f3bd7a2e9498be7c␟8443571736703532556: View List `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_819716823718458903$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_SELECT_MODAL_COMPONENT_TS_2 = goog.getMsg("Back to form");
        i18n_2 = MSG_EXTERNAL_819716823718458903$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_SELECT_MODAL_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟18843b85d1a4f17fefafd07bc5cde636dca44295␟819716823718458903:Back to form`;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7685760017883569970$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_SELECT_MODAL_COMPONENT_TS_3 = goog.getMsg(" {$interpolation} bay(s) added ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ selected.length }}"
          }
        });
        i18n_3 = MSG_EXTERNAL_7685760017883569970$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_SELECT_MODAL_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:␟f5e618f8255889ca7743db771c50b6181b8eb362␟7685760017883569970: ${"\uFFFD0\uFFFD"}:INTERPOLATION: bay(s) added `;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_874721418273731876$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_SELECT_MODAL_COMPONENT_TS_4 = goog.getMsg(" Back ");
        i18n_4 = MSG_EXTERNAL_874721418273731876$$LIBS_BOOKINGS_SRC_LIB_PARKING_SELECT_MODAL_PARKING_SELECT_MODAL_COMPONENT_TS_4;
      } else {
        i18n_4 = $localize`:␟ccda1d41ca79703a85a3a598c1d97e040a32b766␟874721418273731876: Back `;
      }
      return [["map_view", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, [1, "w-[100vw]", "h-[100vh]", "sm:relative", "sm:w-auto", "sm:h-auto", "flex", "flex-col", "bg-base-100"], [1, "flex", "items-center", "space-x-4", "w-full"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "bg-base-200"], [1, "flex-1", "flex", "items-center", "divide-x", "divide-base-200", "min-h-[65vh]", "h-[65vh]", "sm:max-h-[65vh]", "sm:max-w-[95vw]", "w-full", "overflow-hidden"], [1, "h-full", "hidden", "sm:flex", "max-w-[20rem]", "sm:h-[65vh]", "sm:max-h-full", 3, "hide_levels"], [1, "flex", "flex-col", "items-center", "flex-1", "w-1/2", "h-full", "sm:h-[65vh]"], [1, "w-full", "border-b", "border-base-200", 3, "viewChange", "view"], ["class", "flex-1 h-1/2 bg-base-200", 3, "active", "selected", "favorites", "toggleFav", "onSelect", 4, "ngIf", "ngIfElse"], [1, "h-full", "w-full", "sm:h-[65vh]", "absolute", "sm:relative", "sm:flex", "sm:max-w-[20rem]", "z-20", "bg-base-100", "block", 3, "activeChange", "toggleFav", "close", "space", "active", "fav"], [1, "flex", "sm:hidden", "flex-col-reverse", "items-center", "justify-end", "p-2", "border-t", "border-base-200", "w-full"], ["btn", "", "matRipple", "", "return", "", "class", "inverse sm:hidden w-full", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "save", "", 1, "w-full", "sm:w-32", "sm:mb-0", 3, "mat-dialog-close"], [1, "hidden", "sm:flex", "items-center", "justify-between", "p-2", "border-t", "border-base-200", "w-full"], ["btn", "", "matRipple", "", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], [1, "opacity-60", "text-sm"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [1, "mr-1"], [1, "flex-1", "h-1/2", "bg-base-200", 3, "toggleFav", "onSelect", "active", "selected", "favorites"], ["btn", "", "matRipple", "", "return", "", 1, "inverse", "sm:hidden", "w-full", 3, "click"], [1, "flex-1", "h-1/2", "w-full", 3, "onSelect", "selected", "is_displayed"]];
    },
    template: function ParkingSpaceSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6)(1, "header", 7)(2, "button", 8)(3, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "main", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "parking-space-filters", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 11)(10, "parking-space-filters-display", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("viewChange", function ParkingSpaceSelectModalComponent_Template_parking_space_filters_display_viewChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.view, $event) || (ctx.view = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, ParkingSpaceSelectModalComponent_parking_space_list_11_Template, 1, 3, "parking-space-list", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "parking-space-details", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("activeChange", function ParkingSpaceSelectModalComponent_Template_parking_space_details_activeChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.setSelected(ctx.displayed, $event));
        })("toggleFav", function ParkingSpaceSelectModalComponent_Template_parking_space_details_toggleFav_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.toggleFavourite(ctx.displayed));
        })("close", function ParkingSpaceSelectModalComponent_Template_parking_space_details_close_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.displayed = null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "footer", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, ParkingSpaceSelectModalComponent_button_14_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](16, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "footer", 18)(18, "button", 19)(19, "div", 20)(20, "app-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](23, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](25, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ParkingSpaceSelectModalComponent_Template_button_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id)));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 20)(28, "app-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, ParkingSpaceSelectModalComponent_ng_template_32_Template, 1, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const map_view_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hide_levels", ctx.view !== "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("view", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.view === "list")("ngIfElse", map_view_r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("hidden", !ctx.displayed)("inset-0", ctx.displayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("space", ctx.displayed)("active", ctx.selected_ids.includes(ctx.displayed == null ? null : ctx.displayed.id))("fav", ctx.displayed && ctx.favorites.includes(ctx.displayed == null ? null : ctx.displayed.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.displayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mb-2", ctx.displayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mat-dialog-close", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mat-dialog-close", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nExp"](ctx.selected.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nApply"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.displayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "remove" : "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "Remove from Booking" : "Add to booking", " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogClose, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _parking_filters_component__WEBPACK_IMPORTED_MODULE_3__.ParkingSpaceFiltersComponent, _parking_filters_display_component__WEBPACK_IMPORTED_MODULE_4__.ParkingSpaceFiltersDisplayComponent, _parking_list_component__WEBPACK_IMPORTED_MODULE_5__.ParkingSpaceListComponent, _parking_map_component__WEBPACK_IMPORTED_MODULE_6__.ParkingSpaceSelectMapComponent, _parking_details_component__WEBPACK_IMPORTED_MODULE_7__.ParkingSpaceDetailsComponent]
  });
}

/***/ }),

/***/ 24844:
/*!*********************************************************************!*\
  !*** ./libs/bookings/src/lib/parking-space-list-field.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingSpaceListFieldComponent: () => (/* binding */ ParkingSpaceListFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var libs_common_src_lib_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/common/src/lib/settings.service */ 14233);
/* harmony import */ var _parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parking-select-modal/parking-select-modal.component */ 67642);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/src/lib/authenticated-image.directive */ 93208);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 74646);












function ParkingSpaceListFieldComponent_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 24);
  }
  if (rf & 2) {
    const space_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("source", space_r2.images[0]);
  }
}
function ParkingSpaceListFieldComponent_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 25);
  }
}
function ParkingSpaceListFieldComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ParkingSpaceListFieldComponent_div_1_img_2_Template, 1, 1, "img", 14)(3, ParkingSpaceListFieldComponent_div_1_ng_template_3_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 15)(6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 17)(9, "app-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 17)(14, "app-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](17, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 19)(19, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ParkingSpaceListFieldComponent_div_1_Template_button_click_19_listener() {
      const space_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.changeResources(space_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nStart"](21, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "app-icon", 9)(23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ParkingSpaceListFieldComponent_div_1_Template_button_click_24_listener() {
      const space_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.removeResource(space_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nStart"](26, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "app-icon", 9)(28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ParkingSpaceListFieldComponent_div_1_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.toggleFavourite(ctx_r2.asset));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const space_r2 = ctx.$implicit;
    const placeholder_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", space_r2.images == null ? null : space_r2.images.length)("ngIfElse", placeholder_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", space_r2.name || "Meeting Resource", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", space_r2.location || (space_r2.level == null ? null : space_r2.level.display_name) || (space_r2.level == null ? null : space_r2.level.name) || (space_r2.zone == null ? null : space_r2.zone.display_name) || (space_r2.zone == null ? null : space_r2.zone.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nExp"](space_r2.capacity < 1 ? 2 : space_r2.capacity || 1)(space_r2.capacity < 1 ? 2 : space_r2.capacity || 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nApply"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("text-blue-400", ctx_r2.favorites.includes(ctx_r2.asset == null ? null : ctx_r2.asset.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.favorites.includes(ctx_r2.asset == null ? null : ctx_r2.asset.id) ? "favorite" : "favorite_border");
  }
}
const EMPTY_FAVS = [];
class ParkingSpaceListFieldComponent {
  get favorites() {
    return this._settings.get('favourite_spaces') || EMPTY_FAVS;
  }
  constructor(_settings, _dialog) {
    this._settings = _settings;
    this._dialog = _dialog;
    this.disable_date = false;
    this.room_size = 3;
    this.spaces = [];
    this.disabled = false;
    /* istanbul ignore next */
    this.registerOnChange = fn => this._onChange = fn;
    /* istanbul ignore next */
    this.registerOnTouched = fn => this._onTouch = fn;
    this.setDisabledState = s => this.disabled = s;
  }
  /** Add or edit selected spaces */
  changeResources() {
    const ref = this._dialog.open(_parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_1__.ParkingSpaceSelectModalComponent, {
      data: {
        spaces: this.spaces,
        options: {
          capacity: this.room_size,
          disable_date: this.disable_date
        }
      }
    });
    ref.afterClosed().subscribe(spaces => {
      if (!spaces) return;
      this.setValue(spaces);
    });
  }
  /** Remove the selected space from the list */
  removeResource(space) {
    this.setValue(this.spaces.filter(_ => _.id !== space.id));
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.spaces = new_value;
    if (this._onChange) this._onChange(this.spaces);
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.spaces = value || [];
  }
  toggleFavourite(space) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(space.id);
    if (new_state) {
      this._settings.saveUserSetting(_parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_1__.FAV_PARKING_KEY, [...fav_list, space.id]);
    } else {
      this._settings.saveUserSetting(_parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_1__.FAV_PARKING_KEY, fav_list.filter(_ => _ !== space.id));
    }
  }
  static #_ = this.ɵfac = function ParkingSpaceListFieldComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ParkingSpaceListFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](libs_common_src_lib_settings_service__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ParkingSpaceListFieldComponent,
    selectors: [["parking-space-list-field"]],
    inputs: {
      disable_date: "disable_date"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => ParkingSpaceListFieldComponent),
      multi: true
    }])],
    decls: 10,
    vars: 1,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1439078713747050312$$LIBS_BOOKINGS_SRC_LIB_PARKING_SPACE_LIST_FIELD_COMPONENT_TS_0 = goog.getMsg("Add Parking Resource");
        i18n_0 = MSG_EXTERNAL_1439078713747050312$$LIBS_BOOKINGS_SRC_LIB_PARKING_SPACE_LIST_FIELD_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟45491a2ead2b592aec7b4d19300c0715230f334d␟1439078713747050312:Add Parking Resource`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3604407389403754414$$LIBS_BOOKINGS_SRC_LIB_PARKING_SPACE_LIST_FIELD_COMPONENT_TS_1 = goog.getMsg("{VAR_PLURAL, plural, =1 {Person } other {People }}");
        i18n_1 = MSG_EXTERNAL_3604407389403754414$$LIBS_BOOKINGS_SRC_LIB_PARKING_SPACE_LIST_FIELD_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟de78e9a461c1eabe0e350a345933557c629d0ed1␟3604407389403754414:{VAR_PLURAL, plural, =1 {Person } other {People }}`;
      }
      i18n_1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nPostprocess"](i18n_1, {
        "VAR_PLURAL": "\uFFFD1\uFFFD"
      });
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_259696738555613759$$LIBS_BOOKINGS_SRC_LIB_PARKING_SPACE_LIST_FIELD_COMPONENT_TS_2 = goog.getMsg(" {$interpolation} {$icu} ", {
          "icu": i18n_1,
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "icu": "{\n                            (space.capacity < 1 ? 2 : space.capacity || 1),\n                            plural, =1 { Person } other { People } }",
            "interpolation": "{{ space.capacity < 1 ? 2 : space.capacity || 1 }}"
          }
        });
        i18n_2 = MSG_EXTERNAL_259696738555613759$$LIBS_BOOKINGS_SRC_LIB_PARKING_SPACE_LIST_FIELD_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟45802327683c8bd728df5113a59afcd09367e8e9␟259696738555613759: ${"\uFFFD0\uFFFD"}:INTERPOLATION: ${i18n_1}:ICU: `;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3410599700979759406$$LIBS_BOOKINGS_SRC_LIB_PARKING_SPACE_LIST_FIELD_COMPONENT_TS_3 = goog.getMsg("{$startTagAppIcon}edit{$closeTagAppIcon}{$startTagDiv}Change{$closeTagDiv}", {
          "closeTagAppIcon": "\uFFFD/#22\uFFFD",
          "closeTagDiv": "\uFFFD/#23\uFFFD",
          "startTagAppIcon": "\uFFFD#22\uFFFD",
          "startTagDiv": "\uFFFD#23\uFFFD"
        }, {
          original_code: {
            "closeTagAppIcon": "</app-icon>",
            "closeTagDiv": "</div>",
            "startTagAppIcon": "<app-icon class=\"text-2xl\">",
            "startTagDiv": "<div>"
          }
        });
        i18n_3 = MSG_EXTERNAL_3410599700979759406$$LIBS_BOOKINGS_SRC_LIB_PARKING_SPACE_LIST_FIELD_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:␟c5519f0af04771a54fd52f587819c2f86c19691a␟3410599700979759406:${"\uFFFD#22\uFFFD"}:START_TAG_APP_ICON:edit${"\uFFFD/#22\uFFFD"}:CLOSE_TAG_APP_ICON:${"\uFFFD#23\uFFFD"}:START_TAG_DIV:Change${"\uFFFD/#23\uFFFD"}:CLOSE_TAG_DIV:`;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_913695604792961336$$LIBS_BOOKINGS_SRC_LIB_PARKING_SPACE_LIST_FIELD_COMPONENT_TS_4 = goog.getMsg("{$startTagAppIcon}close{$closeTagAppIcon}{$startTagDiv}Remove{$closeTagDiv}", {
          "closeTagAppIcon": "\uFFFD/#27\uFFFD",
          "closeTagDiv": "\uFFFD/#28\uFFFD",
          "startTagAppIcon": "\uFFFD#27\uFFFD",
          "startTagDiv": "\uFFFD#28\uFFFD"
        }, {
          original_code: {
            "closeTagAppIcon": "</app-icon>",
            "closeTagDiv": "</div>",
            "startTagAppIcon": "<app-icon class=\"text-2xl\">",
            "startTagDiv": "<div>"
          }
        });
        i18n_4 = MSG_EXTERNAL_913695604792961336$$LIBS_BOOKINGS_SRC_LIB_PARKING_SPACE_LIST_FIELD_COMPONENT_TS_4;
      } else {
        i18n_4 = $localize`:␟00e1d7e28d4673ed2d4813ab8c6beb9d7e687e8f␟913695604792961336:${"\uFFFD#27\uFFFD"}:START_TAG_APP_ICON:close${"\uFFFD/#27\uFFFD"}:CLOSE_TAG_APP_ICON:${"\uFFFD#28\uFFFD"}:START_TAG_DIV:Remove${"\uFFFD/#28\uFFFD"}:CLOSE_TAG_DIV:`;
      }
      return [["placeholder", ""], i18n_0, i18n_2, i18n_3, i18n_4, ["list", "", 1, "space-y-2"], ["space", "", "class", "relative p-2 rounded-lg w-full flex items-center shadow border border-base-200", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "add-space", "", 1, "w-full", "inverse", "mt-2", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "text-2xl"], [1, "flex", "items-center", "flex-wrap", "sm:space-x-2", "mb-2"], [1, "flex-1", "min-w-[256px]", "space-y-2"], ["space", "", 1, "relative", "p-2", "rounded-lg", "w-full", "flex", "items-center", "shadow", "border", "border-base-200"], [1, "w-24", "h-24", "rounded-xl", "bg-base-200", "mr-4", "overflow-hidden", "flex", "items-center", "justify-center"], ["auth", "", "class", "object-cover h-full", 3, "source", 4, "ngIf", "ngIfElse"], [1, "space-y-2", "pb-4"], [1, "font-medium"], [1, "flex", "items-center", "text-sm", "space-x-2"], [1, "text-blue-500"], [1, "absolute", "bottom-0", "right-0", "flex", "items-center", "justify-end", "text-xs"], ["btn", "", "matRipple", "", "edit-space", "", 1, "clear", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", "remove-space", "", 1, "clear", 3, "click"], ["icon", "", "matRipple", "", "fav", "", 1, "absolute", "top-1", "right-1", 3, "click"], ["auth", "", 1, "object-cover", "h-full", 3, "source"], ["src", "assets/icons/car-placeholder.svg", 1, "m-auto"]];
    },
    template: function ParkingSpaceListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ParkingSpaceListFieldComponent_div_1_Template, 32, 9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ParkingSpaceListFieldComponent_Template_button_click_2_listener() {
          return ctx.changeResources();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 8)(4, "app-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.spaces);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_3__.AuthenticatedImageDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple]
  });
}

/***/ }),

/***/ 1593:
/*!**************************************************!*\
  !*** ./libs/bookings/src/lib/parking.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingService: () => (/* binding */ ParkingService)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68757);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var _bookings_fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookings.fn */ 18026);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 99908);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37580);










class ParkingService extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  constructor(_org, _settings) {
    super();
    this._org = _org;
    this._settings = _settings;
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
    this.loading = this._loading.asObservable(); /** List of available parking levels for the current building */
    this.levels = this._org.level_list.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(_ => {
      if (!this._settings.get('app.use_region')) {
        const blds = this._org.buildingsForRegion();
        const bld_ids = blds.map(bld => bld.id);
        const list = _.filter(lvl => bld_ids.includes(lvl.parent_id) && lvl.tags.includes('parking'));
        list.map(lvl => ({
          ...lvl,
          display_name: `${blds.find(_ => _.id === lvl.parent_id)?.display_name} - ${lvl.display_name}`
        }));
        return list;
      }
      return _.filter(lvl => lvl.parent_id === this._org.building.id && lvl.tags.includes('parking'));
    }));
    /** List of parking spaces for the current building/level */
    this.spaces = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.levels]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(([lvls]) => !!lvls[0]?.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(([levels]) => {
      this._loading.next([...this._loading.getValue(), 'spaces']);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)(levels.map(lvl => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.showMetadata)(lvl.id, 'parking-spaces').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(d => (d.details instanceof Array ? d.details : []).map(s => ({
        ...s,
        zone_id: lvl.id
      }))))));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(list => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_0__.flatten)(list)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this._loading.next(this._loading.getValue().filter(_ => _ !== 'spaces'))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.shareReplay)(1));
    /** List of parking spaces for the current building/level */
    this.users = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this._org.active_building]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(([bld]) => !!bld?.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(([bld]) => {
      this._loading.next([...this._loading.getValue(), 'users']);
      return (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.showMetadata)(bld.id, 'parking-users');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(metadata => metadata.details instanceof Array ? metadata.details : []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this._loading.next(this._loading.getValue().filter(_ => _ !== 'users'))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.shareReplay)(1));
    this.assigned_space = this.spaces.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(list => list.find(_ => _.assigned_to?.toLowerCase() === (0,_placeos_common__WEBPACK_IMPORTED_MODULE_0__.currentUser)().email?.toLowerCase())));
    this.user_details = this.users.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(list => list.find(_ => _.email?.toLowerCase() === (0,_placeos_common__WEBPACK_IMPORTED_MODULE_0__.currentUser)().email?.toLowerCase())));
    this.deny_parking_access = this.user_details.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(details => !!details?.deny));
    this.booked_space = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this._org.active_building, this.spaces]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([_, spaces]) => (0,_bookings_fn__WEBPACK_IMPORTED_MODULE_3__.queryBookings)({
      period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_13__.startOfDay)(Date.now())),
      period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_14__.endOfDay)(Date.now())),
      type: 'parking'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(booking_list => booking_list.map(booking => spaces.find(space => space.id === booking.asset_id)).filter(space => !!space)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(_ => _[0]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.shareReplay)(1));
    this.subscription('spaces', this.assigned_space.subscribe());
  }
  static #_ = this.ɵfac = function ParkingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ParkingService)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_1__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjectable"]({
    token: ParkingService,
    factory: ParkingService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 82882:
/*!*************************************************************!*\
  !*** ./libs/explore/src/lib/explore-desk-info.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExploreDeskInfoComponent: () => (/* binding */ ExploreDeskInfoComponent)
/* harmony export */ });
/* harmony import */ var libs_components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/components/src/lib/interactive-map.component */ 24918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/src/lib/custom-tooltip.component */ 22238);





function ExploreDeskInfoComponent_ng_template_1_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.user);
  }
}
function ExploreDeskInfoComponent_ng_template_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.department, " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 2, ctx_r0.start, "shortTime"), " \u2013 ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 5, ctx_r0.end, "shortTime"), " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4)(3, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ExploreDeskInfoComponent_ng_template_1_p_5_Template, 2, 1, "p", 6)(6, ExploreDeskInfoComponent_ng_template_1_p_6_Template, 2, 1, "p", 7)(7, ExploreDeskInfoComponent_ng_template_1_p_7_Template, 4, 8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("absolute rounded bg-base-100 p-4 top-0 left-0 shadow pointer-events-none " + ctx_r0.x_pos + " " + ctx_r0.y_pos);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r0.map_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.name || ctx_r0.map_id || ctx_r0.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.user && ctx_r0.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.start);
  }
}
class ExploreDeskInfoComponent {
  constructor(_details, _element) {
    this._details = _details;
    this._element = _element;
    /** Space to display details for */
    this.id = this._details.id;
    this.map_id = this._details.map_id;
    this.name = this._details.name;
    this.user = this._details.user;
    this.start = this._details.start;
    this.end = this._details.end;
    this.status = this._details.status;
    this.department = this._details.department;
  }
  ngOnInit(tries = 0) {
    if (tries > 10) return;
    setTimeout(() => {
      const parent = this._element.nativeElement.parentElement?.parentElement;
      if (!parent) return this.ngOnInit(++tries);
      const position = {
        y: parseInt(parent.style.top, 10) / 100,
        x: parseInt(parent.style.left, 10) / 100
      };
      this.y_pos = position.y >= 0.5 ? 'bottom' : 'top';
      this.x_pos = position.x >= 0.5 ? 'right' : 'left';
    }, 200);
  }
  get available_until() {
    return '';
  }
  static #_ = this.ɵfac = function ExploreDeskInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ExploreDeskInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](libs_components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_0__.MAP_FEATURE_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ExploreDeskInfoComponent,
    selectors: [["explore-desk-info"]],
    decls: 3,
    vars: 8,
    consts: [["desk_tooltip", ""], ["customTooltip", "", 1, "h-full", "w-full", "pointer-events-auto", "relative", "z-20", 3, "content", "backdrop", "xPosition", "yPosition", "hover", "delay"], ["name", "space-info", 3, "id"], [1, "arrow"], [1, "details"], ["map-id", "", 1, "m-0", "font-medium"], ["user", "", "class", "mt-2 text-sm", 4, "ngIf"], ["user", "", "class", "mt-1 text-sm", 4, "ngIf"], ["start", "", "class", "mt-1 text-sm", 4, "ngIf"], ["user", "", 1, "mt-2", "text-sm"], ["user", "", 1, "mt-1", "text-sm"], ["start", "", 1, "mt-1", "text-sm"]],
    template: function ExploreDeskInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ExploreDeskInfoComponent_ng_template_1_Template, 8, 7, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const desk_tooltip_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", desk_tooltip_r2)("backdrop", false)("xPosition", "center")("yPosition", "center")("hover", true)("delay", 3000);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("map_id", ctx.map_id);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_1__.CustomTooltipComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
    styles: ["[name='space-info'][_ngcontent-%COMP%] {\n                width: 16rem;\n            }\n\n            [name='status'][_ngcontent-%COMP%] {\n                background-color: #43a047;\n                font-weight: 500;\n            }\n\n            [name='status'].busy[_ngcontent-%COMP%] {\n                background-color: #e53935;\n            }\n\n            [name='status'].pending[_ngcontent-%COMP%] {\n                background-color: #ffb300;\n            }\n\n            [name='status'].not-bookable[_ngcontent-%COMP%] {\n                background-color: #757575;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtZGVzay1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksWUFBWTtZQUNoQjs7WUFFQTtnQkFDSSx5QkFBeUI7Z0JBQ3pCLGdCQUFnQjtZQUNwQjs7WUFFQTtnQkFDSSx5QkFBeUI7WUFDN0I7O1lBRUE7Z0JBQ0kseUJBQXlCO1lBQzdCOztZQUVBO2dCQUNJLHlCQUF5QjtZQUM3QiIsImZpbGUiOiJleHBsb3JlLWRlc2staW5mby5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIFtuYW1lPSdzcGFjZS1pbmZvJ10ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNnJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW25hbWU9J3N0YXR1cyddIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDNhMDQ3O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtuYW1lPSdzdGF0dXMnXS5idXN5IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUzOTM1O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbbmFtZT0nc3RhdHVzJ10ucGVuZGluZyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjMwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW25hbWU9J3N0YXR1cyddLm5vdC1ib29rYWJsZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZXhwbG9yZS9zcmMvbGliL2V4cGxvcmUtZGVzay1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksWUFBWTtZQUNoQjs7WUFFQTtnQkFDSSx5QkFBeUI7Z0JBQ3pCLGdCQUFnQjtZQUNwQjs7WUFFQTtnQkFDSSx5QkFBeUI7WUFDN0I7O1lBRUE7Z0JBQ0kseUJBQXlCO1lBQzdCOztZQUVBO2dCQUNJLHlCQUF5QjtZQUM3Qjs7QUFFWixnbUNBQWdtQyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgW25hbWU9J3NwYWNlLWluZm8nXSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbbmFtZT0nc3RhdHVzJ10ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0M2EwNDc7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW25hbWU9J3N0YXR1cyddLmJ1c3kge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTM5MzU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtuYW1lPSdzdGF0dXMnXS5wZW5kaW5nIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMzAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbbmFtZT0nc3RhdHVzJ10ubm90LWJvb2thYmxlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTc1O1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 84810:
/*!********************************************************************!*\
  !*** ./libs/explore/src/lib/explore-locker-bank-info.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExploreLockerBankInfoComponent: () => (/* binding */ ExploreLockerBankInfoComponent)
/* harmony export */ });
/* harmony import */ var _placeos_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/components */ 51588);
/* harmony import */ var _explore_locker_bank_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-locker-bank-modal.component */ 50795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/src/lib/custom-tooltip.component */ 22238);







function ExploreLockerBankInfoComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("absolute rounded bg-base-100 p-4 top-0 left-0 shadow pointer-events-none " + ctx_r1.x_pos + " " + ctx_r1.y_pos);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r1.map_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.bank.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r1.in_use_count, " lockers in use of ", ctx_r1.bank.lockers.length || 1, " ");
  }
}
class ExploreLockerBankInfoComponent {
  constructor(_details, _element, _dialog) {
    this._details = _details;
    this._element = _element;
    this._dialog = _dialog;
    this.bank = this._details.bank;
    this.in_use_count = this._details.in_use_count;
  }
  ngOnInit(tries = 0) {
    if (tries > 10) return;
    setTimeout(() => {
      const parent = this._element.nativeElement.parentElement?.parentElement;
      if (!parent) return this.ngOnInit(++tries);
      const position = {
        y: parseInt(parent.style.top, 10) / 100,
        x: parseInt(parent.style.left, 10) / 100
      };
      this.y_pos = position.y >= 0.5 ? 'bottom' : 'top';
      this.x_pos = position.x >= 0.5 ? 'right' : 'left';
    }, 200);
  }
  openBankModal() {
    this._dialog.open(_explore_locker_bank_modal_component__WEBPACK_IMPORTED_MODULE_1__.ExploreLockerBankModalComponent, {
      data: {
        ...this._details
      }
    });
  }
  static #_ = this.ɵfac = function ExploreLockerBankInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ExploreLockerBankInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_placeos_components__WEBPACK_IMPORTED_MODULE_0__.MAP_FEATURE_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ExploreLockerBankInfoComponent,
    selectors: [["explore-locker-bank-info"]],
    decls: 4,
    vars: 6,
    consts: [["desk_tooltip", ""], [1, "h-full", "w-full", "pointer-events-auto", "relative", 3, "click"], ["customTooltip", "", 1, "h-full", "w-full", "pointer-events-auto", "relative", 3, "content", "backdrop", "xPosition", "yPosition", "hover", "delay"], ["name", "space-info", 3, "id"], [1, "font-medium"], [1, "whitespace-nowrap", "text-sm"]],
    template: function ExploreLockerBankInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExploreLockerBankInfoComponent_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openBankModal());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ExploreLockerBankInfoComponent_ng_template_2_Template, 5, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const desk_tooltip_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", desk_tooltip_r3)("backdrop", false)("xPosition", "center")("yPosition", "center")("hover", true)("delay", 3000);
      }
    },
    dependencies: [_components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_2__.CustomTooltipComponent]
  });
}

/***/ }),

/***/ 50795:
/*!*********************************************************************!*\
  !*** ./libs/explore/src/lib/explore-locker-bank-modal.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExploreLockerBankModalComponent: () => (/* binding */ ExploreLockerBankModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var libs_bookings_src_lib_lockers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/bookings/src/lib/lockers.service */ 98796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _bookings_src_lib_locker_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../bookings/src/lib/locker-grid.component */ 84854);







class ExploreLockerBankModalComponent {
  constructor(_data) {
    this._data = _data;
    this.bank = this._data.bank;
    this.lockers = this._data.lockers.reduce((map, l) => {
      map[l.id] = 'busy';
      return map;
    }, {});
  }
  static #_ = this.ɵfac = function ExploreLockerBankModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ExploreLockerBankModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ExploreLockerBankModalComponent,
    selectors: [["explore-locker-bank-modal"]],
    decls: 8,
    vars: 3,
    consts: [[1, "text-xl", "font-medium"], ["btn", "", "icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-[65vh]", "overflow-hidden"], [3, "bank", "bank_status"]],
    template: function ExploreLockerBankModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header")(1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 1)(4, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "locker-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.bank.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("bank", ctx.bank)("bank_status", ctx.lockers);
      }
    },
    dependencies: [_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _bookings_src_lib_locker_grid_component__WEBPACK_IMPORTED_MODULE_2__.LockerGridComponent]
  });
}

/***/ })

}]);
//# sourceMappingURL=default-libs_bookings_src_lib_bookings_module_ts.js.map