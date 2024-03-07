"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["default-libs_users_src_index_ts"],{

/***/ 81239:
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
/* harmony import */ var _lib_users_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/users.module */ 7594);
/* harmony import */ var _lib_new_user_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/new-user-modal.component */ 86755);
/* harmony import */ var _lib_find_availability_modal_find_availability_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/find-availability-modal/find-availability-modal.component */ 2299);
/* harmony import */ var _lib_user_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/user-form.component */ 25396);
/* harmony import */ var _lib_location_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/location.class */ 61721);
/* harmony import */ var _lib_user_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/user.class */ 223);
/* harmony import */ var _lib_user_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/user.utilities */ 11451);
/* harmony import */ var _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/guests.fn */ 38125);
/* harmony import */ var _lib_staff_fn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/staff.fn */ 48675);











/***/ }),

/***/ 2299:
/*!*****************************************************************************************!*\
  !*** ./libs/users/src/lib/find-availability-modal/find-availability-modal.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FindAvailabilityModalComponent: () => (/* binding */ FindAvailabilityModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 77393);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 31957);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 57016);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 4512);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 13241);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 8276);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! date-fns */ 58415);
/* harmony import */ var libs_calendar_src_lib_calendar_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/calendar/src/lib/calendar.fn */ 77276);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 70462);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 95933);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 36520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 58175);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 32345);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);









const _c0 = ["container"];
function FindAvailabilityModalComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hour_r7 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", -ctx_r0.offset_x + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("disabled", ctx_r0.today && ctx_r0.current_hour > hour_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", hour_r7 % 12 === 0 ? "12" : hour_r7 % 12, "", hour_r7 >= 12 ? "pm" : "am", " ");
  }
}
function FindAvailabilityModalComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "a-user-avatar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FindAvailabilityModalComponent_div_18_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const user_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.removeUser(user_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("top", -ctx_r1.offset_y + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user", user_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", user_r8.name || ctx_r1.host.email, " ");
  }
}
function FindAvailabilityModalComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 36);
  }
  if (rf & 2) {
    const h_r12 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", -(ctx_r2.offset_x + 1) + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("disabled", ctx_r2.today && ctx_r2.current_hour > h_r12);
  }
}
function FindAvailabilityModalComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r3.date, "shortTime"), " ");
  }
}
const _c1 = () => [];
function FindAvailabilityModalComponent_user_availability_list_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "user-availability-list", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    const user_r13 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user", user_r13)("date", ctx_r5.date)("availability", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx_r5.availability) ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, ctx_r5.availability)[user_r13.email.toLowerCase()] : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1));
  }
}
class FindAvailabilityModalComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  get today() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(this.date, Date.now());
  }
  get current_hour() {
    return new Date().getHours();
  }
  get selection_left() {
    const date = new Date(this.date);
    return (date.getHours() + date.getMinutes() / 60) * 5;
  }
  get selection_width() {
    return this.duration / 60 * 5;
  }
  constructor(_data, _renderer, _dialog_ref) {
    super();
    this._data = _data;
    this._renderer = _renderer;
    this._dialog_ref = _dialog_ref;
    this.users = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
    this.search = '';
    this.date = this._data.date || Date.now();
    this.duration = this._data.duration || 60;
    this.offset_y = 0;
    this.offset_x = 0;
    this.host = this._data.host;
    this.hours = new Array(24).fill(0);
    this.on_change = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(0);
    this.availability = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.users, this.on_change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(([users]) => {
      return (0,libs_calendar_src_lib_calendar_fn__WEBPACK_IMPORTED_MODULE_1__.queryUserFreeBusy)({
        calendars: [this.host.email, ...users.map(_ => _.email.toLowerCase())].join(','),
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(this.date)),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(this.date))
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)([])));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(availability_list => {
      const availability_map = {};
      for (const item of availability_list) {
        availability_map[item.id.toLowerCase()] = item.availability.filter(_ => _.status === 'busy').map(block => {
          const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(block.starts_at);
          const duration = (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(block.ends_at), (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(block.starts_at));
          return {
            date,
            duration,
            start: (date.getHours() + date.getMinutes() / 60) / 24 * 100,
            size: duration / 60 / 24 * 100
          };
        });
      }
      return availability_map;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.defaultIfEmpty)({}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.shareReplay)(1));
    this.move_time = false;
    this._start_time = 0;
    this._move_last = 0;
    this._move_size = 80 * 24;
    this.users.next([...this._data.users]);
  }
  addUser(user) {
    this.users.next([...this.users.getValue().filter(u => u.email !== user.email), user]);
    this.user = null;
  }
  removeUser(user) {
    this.users.next(this.users.getValue().filter(u => u.email !== user.email));
    this.user = null;
  }
  closeAndUpdate() {
    this._dialog_ref.close(true);
  }
  ngAfterViewInit() {
    const date = new Date(this.date);
    this.timeout('init', () => {
      const el = this._container_el.nativeElement.querySelector(`[hour="${date.getHours()}"]`);
      if (el) {
        const rect = this._container_el.nativeElement.getBoundingClientRect();
        const el_rect = el.getBoundingClientRect();
        this._container_el.nativeElement.scrollTo(el_rect.left - 128 - rect.left, 0);
      }
      this.onScroll();
    }, 300);
  }
  onScroll() {
    this.offset_x = this._container_el.nativeElement.scrollLeft;
    this.offset_y = this._container_el.nativeElement.scrollTop;
  }
  startMovePeriod(event) {
    event.preventDefault();
    event.stopPropagation();
    this._move_last = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    this.move_time = true;
    this._start_time = this.date;
    event instanceof MouseEvent ? this.subscription('on_move', this._renderer.listen('window', 'mousemove', e => this._onMovePeriod(e))) : this.subscription('on_move', this._renderer.listen('window', 'touchmove', e => this._onMovePeriod(e)));
    event instanceof MouseEvent ? this.subscription('on_move_end', this._renderer.listen('window', 'mouseup', () => this._onMoveEnd())) : this.subscription('on_move_end', this._renderer.listen('window', 'touchend', () => this._onMoveEnd()));
  }
  startMoveDuration(event) {
    event.preventDefault();
    event.stopPropagation();
    this._move_last = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    this._start_time = this.duration;
    event instanceof MouseEvent ? this.subscription('on_move', this._renderer.listen('window', 'mousemove', e => this._onMoveDuration(e))) : this.subscription('on_move', this._renderer.listen('window', 'touchmove', e => this._onMoveDuration(e)));
    event instanceof MouseEvent ? this.subscription('on_move_end', this._renderer.listen('window', 'mouseup', () => this._onMoveEnd())) : this.subscription('on_move_end', this._renderer.listen('window', 'touchend', () => this._onMoveEnd()));
  }
  _onMovePeriod(event) {
    const change_px = this._move_last - (event instanceof MouseEvent ? event.clientX : event.touches[0].clientX);
    const dir = change_px > 0 ? -1 : 1;
    const change_min = dir * Math.floor(Math.abs(change_px / this._move_size * 24 * 60) / 5) * 5;
    if (change_min) {
      const old_date = this.date;
      this.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_18__["default"])(this._start_time, change_min).valueOf();
      if (this.date < Date.now()) this.date = old_date;
    }
  }
  _onMoveDuration(event) {
    const change_px = this._move_last - (event instanceof MouseEvent ? event.clientX : event.touches[0].clientX);
    const dir = change_px > 0 ? -1 : 1;
    const change_min = dir * Math.floor(Math.abs(change_px / this._move_size * 24 * 60) / 5) * 5;
    if (change_min) {
      this.duration = Math.max(30, this._start_time + change_min);
    }
  }
  _onMoveEnd() {
    this.unsub('on_move');
    this.unsub('on_move_end');
    this._move_last = 0;
    this.move_time = false;
  }
  static #_ = this.ɵfac = function FindAvailabilityModalComponent_Factory(t) {
    return new (t || FindAvailabilityModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FindAvailabilityModalComponent,
    selectors: [["find-availability-modal"]],
    viewQuery: function FindAvailabilityModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._container_el = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
    decls: 45,
    vars: 31,
    consts: [[1, "relative", "flex", "items-center", "justify-center", "p-4"], [1, "text-center"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-1/2", "left-1", "-translate-y-1/2"], [1, "flex", "flex-col", "h-[calc(100vh-7rem)]", "sm:h-[65vh]", "overflow-hidden"], [1, "w-full", "flex", "flex-col", "sm:flex-row", "space-y-2", "sm:space-y-0", "sm:space-x-2", "p-2"], [1, "max-h-[3.25rem]", "flex-1", 3, "ngModel", "ngModelChange"], [1, "grid", "flex-1", "h-1/2", "w-full", "border-t", "border-base-200", "relative", "overflow-hidden", "divide-x", "divide-y", "divide-base-200", "max-w-[100vw]", "sm:max-w-[80vw]"], ["times", "", 1, "col-start-2", "h-10", "flex", "overflow-hidden", "border-l", "border-base-200"], ["hour", "", "class", "relative border-r border-base-200 h-10 min-w-[5rem] p-2", 3, "left", 4, "ngFor", "ngForOf"], ["users", "", 1, "row-start-2", "w-24", "overflow-hidden"], ["host", "", 1, "flex", "flex-col", "items-center", "justify-center", "h-32", "w-24", "relative", "border-b", "border-base-200", "py-2"], [1, "text-2xl", 3, "user"], [1, "text-xs", "break-words", "overflow-hidden", "max-w-full", "px-2", "text-center"], ["person", "", "class", "flex flex-col items-center justify-center h-32 w-24 relative border-b border-base-200 py-2", 3, "top", 4, "ngFor", "ngForOf"], ["blocks", "", 1, "relative", "row-start-2", "overflow-hidden"], ["fixed", "", 1, "absolute", "inset-0", "flex", "overflow-hidden"], ["divider", "", "class", "relative h-full min-w-[5rem] border-l border-base-200", 3, "left", 4, "ngFor", "ngForOf"], ["selection", "", 1, "absolute", "inset-y-0", "!border-x-2", "!border-info", "z-20", "cursor-grab", "active:cursor-grabbing", 3, "mousedown", "touchstart"], [1, "absolute", "inset-0", "bg-info", "opacity-30"], ["handle", "", 1, "absolute", "top-1/2", "-left-px", "-translate-x-1/2", "-translate-y-1/2", "h-3", "w-3", "rounded-full", "bg-info"], ["handle", "", 1, "absolute", "top-1/2", "-right-px", "translate-x-1/2", "-translate-y-1/2", "h-3", "w-3", "rounded-full", "bg-info", "hover:h-4", "hover:w-4", "active:bg-secondary", 3, "mousedown", "touchstart"], [1, "bg-base-100", "border", "border-base-200", "p-2", "absolute", "top-2", "left-1/2", "-translate-x-1/2", "shadow", "text-xs", "whitespace-nowrap", "rounded"], ["class", "bg-base-100 border border-base-200 p-2 absolute top-12 left-1/2 -translate-x-1/2 shadow text-xs whitespace-nowrap rounded", 4, "ngIf"], ["scroll", "", 1, "absolute", "inset-0", "overflow-auto", 3, "scroll"], ["container", ""], [1, "pointer-events-none", 3, "user", "date", "availability"], ["class", "pointer-events-none", 3, "user", "date", "availability", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "p-2", "border-t", "border-base-200", "w-full"], ["btn", "", "matRipple", "", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], ["hour", "", 1, "relative", "border-r", "border-base-200", "h-10", "min-w-[5rem]", "p-2"], ["person", "", 1, "flex", "flex-col", "items-center", "justify-center", "h-32", "w-24", "relative", "border-b", "border-base-200", "py-2"], [1, "text-xs", "break-words", "max-w-full", "px-2", "text-center"], ["icon", "", 1, "absolute", "-top-1", "-left-1", 3, "click"], ["divider", "", 1, "relative", "h-full", "min-w-[5rem]", "border-l", "border-base-200"], [1, "bg-base-100", "border", "border-base-200", "p-2", "absolute", "top-12", "left-1/2", "-translate-x-1/2", "shadow", "text-xs", "whitespace-nowrap", "rounded"]],
    template: function FindAvailabilityModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Find Availability");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2)(4, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "main", 3)(7, "div", 4)(8, "a-date-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FindAvailabilityModalComponent_Template_a_date_field_ngModelChange_8_listener($event) {
          return ctx.date = $event;
        })("ngModelChange", function FindAvailabilityModalComponent_Template_a_date_field_ngModelChange_8_listener() {
          return ctx.on_change.next(ctx.on_change.getValue() + 1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a-user-search-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FindAvailabilityModalComponent_Template_a_user_search_field_ngModelChange_9_listener($event) {
          return ctx.user = $event;
        })("ngModelChange", function FindAvailabilityModalComponent_Template_a_user_search_field_ngModelChange_9_listener($event) {
          return ctx.addUser($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, FindAvailabilityModalComponent_div_12_Template, 2, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9)(14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "a-user-avatar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, FindAvailabilityModalComponent_div_18_Template, 7, 4, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 14)(21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, FindAvailabilityModalComponent_div_22_Template, 1, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function FindAvailabilityModalComponent_Template_div_mousedown_23_listener($event) {
          return ctx.startMovePeriod($event);
        })("touchstart", function FindAvailabilityModalComponent_Template_div_touchstart_23_listener($event) {
          return ctx.startMovePeriod($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "div", 18)(25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function FindAvailabilityModalComponent_Template_div_mousedown_26_listener($event) {
          return ctx.startMoveDuration($event);
        })("touchstart", function FindAvailabilityModalComponent_Template_div_touchstart_26_listener($event) {
          return ctx.startMoveDuration($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, FindAvailabilityModalComponent_div_30_Template, 3, 4, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function FindAvailabilityModalComponent_Template_div_scroll_31_listener() {
          return ctx.onScroll();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "user-availability-list", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, FindAvailabilityModalComponent_user_availability_list_36_Template, 3, 8, "user-availability-list", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "footer", 27)(39, "button", 28)(40, "div", 29)(41, "app-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Back to form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("top", -ctx.offset_y + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user", ctx.host);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.host.name || ctx.host.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 20, ctx.users));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", "calc(" + ctx.selection_left + "rem - " + ctx.offset_x + "px)")("width", ctx.selection_width + "rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 22, ctx.duration), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.move_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user", ctx.host)("date", ctx.date)("availability", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 24, ctx.availability) ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 26, ctx.availability)[ctx.host.email] : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](30, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 28, ctx.users));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", true);
      }
    },
    styles: [".grid[_ngcontent-%COMP%] {\n                grid-template-columns: 6rem 1fr;\n                grid-template-rows: 2.5rem minmax(0, 1fr);\n            }\n            [disabled='true'][_ngcontent-%COMP%], [disabled='true'][_ngcontent-%COMP%]   [header][_ngcontent-%COMP%] {\n                background: var(--b3) !important;\n                pointer-events: none;\n            }\n            [disabled='true'][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n                opacity: 0.3;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvdXNlcnMvc3JjL2xpYi9maW5kLWF2YWlsYWJpbGl0eS1tb2RhbC9maW5kLWF2YWlsYWJpbGl0eS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLCtCQUErQjtnQkFDL0IseUNBQXlDO1lBQzdDO1lBQ0E7O2dCQUVJLGdDQUFnQztnQkFDaEMsb0JBQW9CO1lBQ3hCO1lBQ0E7Z0JBQ0ksWUFBWTtZQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNnJlbSAxZnI7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyLjVyZW0gbWlubWF4KDAsIDFmcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBbZGlzYWJsZWQ9J3RydWUnXSxcbiAgICAgICAgICAgIFtkaXNhYmxlZD0ndHJ1ZSddIFtoZWFkZXJdIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iMykgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFtkaXNhYmxlZD0ndHJ1ZSddID4gKiB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 25985:
/*!***********************************************************************************!*\
  !*** ./libs/users/src/lib/find-availability-modal/user-availability.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserAvailabilityComponent: () => (/* binding */ UserAvailabilityComponent)
/* harmony export */ });
/* harmony import */ var _user_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user.class */ 223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);



function UserAvailabilityComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("left", event_r1.start + "%")("width", event_r1.size + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 6, event_r1.date, "shortTime"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 9, event_r1.date.valueOf() + event_r1.duration * 60 * 1000, "shortTime"), " ");
  }
}
class UserAvailabilityComponent {
  constructor() {
    this.availability = [];
    this.date = Date.now();
  }
  static #_ = this.ɵfac = function UserAvailabilityComponent_Factory(t) {
    return new (t || UserAvailabilityComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UserAvailabilityComponent,
    selectors: [["user-availability-list"]],
    inputs: {
      user: "user",
      availability: "availability",
      date: "date"
    },
    decls: 2,
    vars: 1,
    consts: [[1, "relative", "w-[120rem]", "h-32", "inset-y-0", "border-b", "border-base-200"], ["event", "", "class", "absolute inset-y-0 bg-error text-white p-2 overflow-hidden border border-red-700 rounded", 3, "left", "width", 4, "ngFor", "ngForOf"], ["event", "", 1, "absolute", "inset-y-0", "bg-error", "text-white", "p-2", "overflow-hidden", "border", "border-red-700", "rounded"], [1, "text-xs", "max-w-full"]],
    template: function UserAvailabilityComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserAvailabilityComponent_div_1_Template, 5, 12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.availability);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n                display: block;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvdXNlcnMvc3JjL2xpYi9maW5kLWF2YWlsYWJpbGl0eS1tb2RhbC91c2VyLWF2YWlsYWJpbGl0eS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGNBQWM7WUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 61721:
/*!**********************************************!*\
  !*** ./libs/users/src/lib/location.class.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapLocation: () => (/* binding */ MapLocation)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 31957);

class MapLocation {
  constructor(_data = {}) {
    this.type = _data.type || _data.location || 'other';
    this.position = _data.position || _data.map_id || _data.asset_id || {
      x: _data.x / _data.map_width || 0,
      y: _data.y / _data.map_height || 0
    };
    this.variance = _data.variance || 0;
    this.last_seen = _data.last_seen || (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date());
    this.level = _data.level;
    this.building = _data.building;
    this.at_location = !!_data.at_location;
    this.coordinates_from = _data.coordinates_from || 'top-left';
  }
}

/***/ }),

/***/ 23395:
/*!*****************************************!*\
  !*** ./libs/users/src/lib/user.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserPipe: () => (/* binding */ UserPipe)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _guests_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guests.fn */ 38125);
/* harmony import */ var _staff_fn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staff.fn */ 48675);
/* harmony import */ var _user_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.class */ 223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);





const USER_LIST = [];
const EMPTY_USER = new _user_class__WEBPACK_IMPORTED_MODULE_3__.User();
class UserPipe {
  /**
   * Get details of the user with the given ID
   * @param user_id ID or Email of the user
   */
  transform(user_id) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!user_id) return EMPTY_USER;
      let user = USER_LIST.find(({
        id,
        email
      }) => id === user_id || email === user_id);
      if (user) return user;
      user = yield (0,_staff_fn__WEBPACK_IMPORTED_MODULE_2__.showStaff)(user_id).toPromise().catch(() => null);
      if (user) {
        USER_LIST.push(user);
        return user;
      }
      user = yield (0,_guests_fn__WEBPACK_IMPORTED_MODULE_1__.showGuest)(user_id).toPromise().catch(() => null);
      if (user) {
        USER_LIST.push(user);
        return user;
      }
      return EMPTY_USER;
    })();
  }
  static #_ = this.ɵfac = function UserPipe_Factory(t) {
    return new (t || UserPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefinePipe"]({
    name: "user",
    type: UserPipe,
    pure: true
  });
}

/***/ }),

/***/ 7594:
/*!********************************************!*\
  !*** ./libs/users/src/lib/users.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedUsersModule: () => (/* binding */ SharedUsersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var libs_components_src_lib_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/components/src/lib/components.module */ 64921);
/* harmony import */ var libs_form_fields_src_lib_form_fields_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/form-fields/src/lib/form-fields.module */ 46568);
/* harmony import */ var _new_user_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-user-modal.component */ 86755);
/* harmony import */ var _user_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-form.component */ 25396);
/* harmony import */ var _user_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.pipe */ 23395);
/* harmony import */ var _wfh_settings_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wfh-settings-modal.component */ 48236);
/* harmony import */ var _find_availability_modal_find_availability_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./find-availability-modal/find-availability-modal.component */ 2299);
/* harmony import */ var _find_availability_modal_user_availability_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./find-availability-modal/user-availability.component */ 25985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../form-fields/src/lib/time-field.component */ 59590);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 94888);
/* harmony import */ var _components_src_lib_user_avatar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/src/lib/user-avatar.component */ 32882);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../form-fields/src/lib/date-field.component */ 46362);
/* harmony import */ var _form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../form-fields/src/lib/user-search-field.component */ 20576);
/* harmony import */ var _components_src_lib_duration_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/src/lib/duration.pipe */ 5522);





























const COMPONENTS = [_new_user_modal_component__WEBPACK_IMPORTED_MODULE_2__.NewUserModalComponent, _user_form_component__WEBPACK_IMPORTED_MODULE_3__.UserFormComponent, _wfh_settings_modal_component__WEBPACK_IMPORTED_MODULE_5__.WFHSettingsModalComponent, _user_pipe__WEBPACK_IMPORTED_MODULE_4__.UserPipe, _find_availability_modal_find_availability_modal_component__WEBPACK_IMPORTED_MODULE_6__.FindAvailabilityModalComponent, _find_availability_modal_user_availability_component__WEBPACK_IMPORTED_MODULE_7__.UserAvailabilityComponent];
class SharedUsersModule {
  static #_ = this.ɵfac = function SharedUsersModule_Factory(t) {
    return new (t || SharedUsersModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
    type: SharedUsersModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, libs_form_fields_src_lib_form_fields_module__WEBPACK_IMPORTED_MODULE_1__.FormFieldsModule, libs_components_src_lib_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckboxModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](SharedUsersModule, {
    declarations: [_new_user_modal_component__WEBPACK_IMPORTED_MODULE_2__.NewUserModalComponent, _user_form_component__WEBPACK_IMPORTED_MODULE_3__.UserFormComponent, _wfh_settings_modal_component__WEBPACK_IMPORTED_MODULE_5__.WFHSettingsModalComponent, _user_pipe__WEBPACK_IMPORTED_MODULE_4__.UserPipe, _find_availability_modal_find_availability_modal_component__WEBPACK_IMPORTED_MODULE_6__.FindAvailabilityModalComponent, _find_availability_modal_user_availability_component__WEBPACK_IMPORTED_MODULE_7__.UserAvailabilityComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, libs_form_fields_src_lib_form_fields_module__WEBPACK_IMPORTED_MODULE_1__.FormFieldsModule, libs_components_src_lib_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckboxModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule],
    exports: [_new_user_modal_component__WEBPACK_IMPORTED_MODULE_2__.NewUserModalComponent, _user_form_component__WEBPACK_IMPORTED_MODULE_3__.UserFormComponent, _wfh_settings_modal_component__WEBPACK_IMPORTED_MODULE_5__.WFHSettingsModalComponent, _user_pipe__WEBPACK_IMPORTED_MODULE_4__.UserPipe, _find_availability_modal_find_availability_modal_component__WEBPACK_IMPORTED_MODULE_6__.FindAvailabilityModalComponent, _find_availability_modal_user_availability_component__WEBPACK_IMPORTED_MODULE_7__.UserAvailabilityComponent]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetComponentScope"](_wfh_settings_modal_component__WEBPACK_IMPORTED_MODULE_5__.WFHSettingsModalComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogClose, _form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_8__.TimeFieldComponent, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_9__.IconComponent, _components_src_lib_user_avatar_component__WEBPACK_IMPORTED_MODULE_10__.UserAvatarComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuTrigger, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRipple, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinner], [_angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe]);
_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetComponentScope"](_find_availability_modal_find_availability_modal_component__WEBPACK_IMPORTED_MODULE_6__.FindAvailabilityModalComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogClose, _form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_11__.DateFieldComponent, _form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_12__.UserSearchFieldComponent, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_9__.IconComponent, _components_src_lib_user_avatar_component__WEBPACK_IMPORTED_MODULE_10__.UserAvatarComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRipple, _find_availability_modal_user_availability_component__WEBPACK_IMPORTED_MODULE_7__.UserAvailabilityComponent], [_angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe, _components_src_lib_duration_pipe__WEBPACK_IMPORTED_MODULE_13__.DurationPipe]);

/***/ }),

/***/ 13241:
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/fromUnixTime/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fromUnixTime)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ 47120);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 21578);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 67265);



/**
 * @name fromUnixTime
 * @category Timestamp Helpers
 * @summary Create a date from a Unix timestamp.
 *
 * @description
 * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.
 *
 * @param {Number} unixTime - the given Unix timestamp (in seconds)
 * @returns {Date} the date
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Create the date 29 February 2012 11:45:05:
 * const result = fromUnixTime(1330515905)
 * //=> Wed Feb 29 2012 11:45:05
 */
function fromUnixTime(dirtyUnixTime) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var unixTime = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyUnixTime);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(unixTime * 1000);
}

/***/ })

}]);
//# sourceMappingURL=default-libs_users_src_index_ts.js.map