"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["default-apps_concierge_src_app_desks_desks-state_service_ts"],{

/***/ 34381:
/*!*************************************************************!*\
  !*** ./apps/concierge/src/app/desks/desks-state.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesksStateService: () => (/* binding */ DesksStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ 64331);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 70462);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 32484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 95933);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 36520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 58175);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 680);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 15746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 45083);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 36932);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 31957);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ 57016);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! date-fns */ 4512);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns */ 12687);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/bookings */ 40688);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var libs_common_src_lib_qr_code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! libs/common/src/lib/qr-code */ 98010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 17401);













function addQRCodeToBooking(booking) {
  return new _placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.Booking({
    ...booking,
    extension_data: {
      ...booking.extension_data,
      checkin_qr_code: (0,libs_common_src_lib_qr_code__WEBPACK_IMPORTED_MODULE_5__.generateQRCode)(`/workplace/#/book/code?asset_id=${encodeURIComponent(booking.asset_id)}`)
    }
  });
}
class DesksStateService extends _placeos_common__WEBPACK_IMPORTED_MODULE_3__.AsyncHandler {
  get new_desk_count() {
    return this._new_desks.getValue()?.length || 0;
  }
  nextPage() {
    this._call_next_page.next(`NEXT_${Date.now()}`);
  }
  constructor(_org, _dialog) {
    super();
    this._org = _org;
    this._dialog = _dialog;
    this._filters = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({});
    this._new_desks = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
    this._desk_bookings = [];
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(false);
    this.new_desks = this._new_desks.asObservable();
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this.desks = this._filters.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(filters => {
      const zones = filters.zones || [];
      return zones && !zones.includes('All') ? (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.showMetadata)(zones[0], 'desks').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(m => m.details instanceof Array ? m.details : []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)([]))) : (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.listChildMetadata)(this._org.building?.id, {
        name: 'desks'
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(m => m.map(i => i.metadata?.desks?.details || []).reduce((c, i) => [...c, ...i], [])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)([])));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(list => {
      if (!(list instanceof Array)) list = [];
      list.sort((a, b) => a.name?.localeCompare(b.name));
      return list.map(i => new _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.Desk({
        ...i,
        qr_code: ''
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.shareReplay)(1));
    this._next_page = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
    this._call_next_page = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
    this._all_zones_keys = ['All', -1, '-1'];
    this.setup_paging = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this._filters, this._org.initialised]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)(([filters, loaded]) => {
      if (!loaded) return;
      const date = filters.date || Date.now();
      const zones = !filters.zones || filters.zones.some(z => this._all_zones_keys.includes(z)) ? [this._org.building.id] : filters.zones;
      this._next_page.next(() => (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.queryPagedBookings)({
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_16__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_17__["default"])(date)),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_16__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_18__["default"])(date)),
        type: 'desk',
        zones: zones.join(','),
        include_checked_out: true
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)({
        data: [],
        total: 0,
        next: null
      }))));
      this._call_next_page.next(`RESET_${Date.now()}`);
    }));
    this.paged_bookings = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this._next_page, this._call_next_page]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)((a, b) => a[1] === b[1]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(([next_page, action]) => {
      this._loading.next(true);
      if (!next_page) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)({
          data: [],
          total: 0,
          next: null,
          reset: action.includes('RESET')
        });
      }
      // If reset is true, start over
      if (action.includes('RESET')) {
        return next_page().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(data => ({
          ...data,
          reset: true
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)({
          data: [],
          total: 0,
          next: null
        })));
      }
      return next_page().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(data => ({
        ...data,
        reset: false
      })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)({
        data: [],
        total: 0,
        next: null
      })));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.scan)((acc, {
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
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)(_ => this._loading.next(false)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.shareReplay)(1));
    this.has_more_pages = this.paged_bookings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(_ => _.list.length < _.total));
    this.bookings = this.paged_bookings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(i => i.list));
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
  addDesks(list) {
    this._new_desks.next(this._new_desks.getValue().concat(list));
  }
  removeNewDesk(desk) {
    this._filters.next(this._filters.getValue());
    this._new_desks.next(this._new_desks.getValue().filter(d => d.id !== desk.id));
  }
  clearNewDesks() {
    this._filters.next(this._filters.getValue());
    this._new_desks.next([]);
  }
  checkinDesk(desk, state = true) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const status = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.checkinBooking)(desk.id, state ?? true).toPromise().catch(_ => ({
        failed: true,
        error: _
      }));
      if (status.failed) {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)(status.error ? `Error: ${status.error}` : `Error checking ${state ? 'in' : 'out'} desk booking`);
        throw status.error;
      }
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifySuccess)(`Checked ${state ? 'in' : 'out'} ${desk.user_name}.`);
    })();
  }
  approveDesk(desk) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const success = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.approveBooking)(desk.id).toPromise().catch(_ => 'failed');
      if (success === 'failed') {
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)('Error approving in desk booking');
      }
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifySuccess)(`Approved desk booking for ${desk.user_name} on ${(0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])(desk.date, 'MMM do')}.`);
      desk.approved = true;
      desk.rejected = false;
    })();
  }
  rejectDesk(desk) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const success = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.rejectBooking)(desk.id).toPromise().catch(_ => 'failed');
      if (success === 'failed') {
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)('Error rejecting in desk booking');
      }
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifySuccess)(`Rejected desk booking for ${desk.user_name} on ${(0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])(desk.date, 'MMM do')}.`);
      desk.approved = false;
      desk.rejected = true;
    })();
  }
  giveAccess(desk) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const success = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.saveBooking)(new _placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.Booking({
        ...desk,
        access: true
      })).toPromise().catch(_ => 'failed');
      if (success === 'failed') return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)('Error giving building access booking host');
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifySuccess)(`Successfully gave building access to ${desk.user_name} for desk booking.`);
      _this._desk_bookings = [..._this._desk_bookings, success];
    })();
  }
  rejectAllDesks() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const list = _this2._desk_bookings || [];
      if (list.length <= 0) return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyInfo)('No desks to reject for the selected date');
      const resp = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.openConfirmModal)({
        title: 'Cancel all desk bookings',
        content: 'Are you sure you want to cancel all bookings for the selected date?',
        icon: {
          type: 'icon',
          class: 'material-icons',
          content: 'delete'
        }
      }, _this2._dialog);
      if (resp.reason !== 'done') return;
      resp.loading('Rejecting all desks for selected date...');
      yield Promise.all(list.map(desk => (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.rejectBooking)(desk.id).toPromise()));
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifySuccess)('Successfully rejected all desk bookings for selected date.');
      resp.close();
    })();
  }
  static #_ = this.ɵfac = function DesksStateService_Factory(t) {
    return new (t || DesksStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialog));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjectable"]({
    token: DesksStateService,
    factory: DesksStateService.ɵfac,
    providedIn: 'root'
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
//# sourceMappingURL=default-apps_concierge_src_app_desks_desks-state_service_ts.js.map