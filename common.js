"use strict";
(self["webpackChunkworkplace"] = self["webpackChunkworkplace"] || []).push([["common"],{

/***/ 87625:
/*!***********************************************************************!*\
  !*** ./apps/workplace/src/app/new-schedule/schedule-state.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleStateService": () => (/* binding */ ScheduleStateService)
/* harmony export */ });
/* harmony import */ var _Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/bookings */ 56917);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 88397);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/events */ 27288);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/organisation */ 6221);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @placeos/spaces */ 43404);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @placeos/ts-client */ 96750);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns */ 75845);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns */ 19956);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns */ 69377);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! date-fns */ 33200);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 36116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 79128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 86839);













class ScheduleStateService extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  constructor(_settings, _org) {
    super();
    this._settings = _settings;
    this._org = _org;
    this._poll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(0);
    this._poll_type = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject('api');
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(false);
    this._filters = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject({
      shown_types: ['event', 'desk', 'parking', 'visitor', 'locker']
    });
    this._date = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(Date.now());
    this._update = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._date, this._poll]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this._loading.next(true)));
    this._deleted = [];
    this._space_bookings = this._org.active_building.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(_ => !!_), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.distinctUntilKeyChanged)('id'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.unsubWith('bind:')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(({
      id
    }) => {
      this._loading.next(true);
      return (0,_placeos_spaces__WEBPACK_IMPORTED_MODULE_5__.requestSpacesForZone)(id);
    }),
    // Get list of spaces for building
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)(([s1], [s2]) => s1 !== s2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(list => {
      this._loading.next(false);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)((list || []).map(space => {
        const binding = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_6__.getModule)(space.id, 'Bookings').binding('bookings');
        const obs = binding.listen().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(event_list => (event_list || []).map(i => new _placeos_events__WEBPACK_IMPORTED_MODULE_3__.CalendarEvent({
          ...i,
          resources: i.attendees.filter(_ => _.email === space.email || _.resource),
          system: space
        }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([])));
        if (!this.hasSubscription(`bind:${space.id}`)) {
          this.subscription(`bind:${space.id}`, binding.bind());
        }
        return obs;
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(_ => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.flatten)(_)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    this.ws_events = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._space_bookings, this._update]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([_, [date]]) => {
      const user = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.currentUser)();
      return _.filter(_ => (0,date_fns__WEBPACK_IMPORTED_MODULE_19__["default"])(_.date, date) && (_.host.toLowerCase() === user.email.toLowerCase() || _.attendees.find(a => a.email.toLowerCase() === user.email.toLowerCase())));
    }));
    /** List of calendar events for the selected date */
    this.api_events = this._update.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(([date]) => {
      const query = {
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])(date)),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_22__["default"])(date))
      };
      return this._settings.get('app.events.use_bookings') ? (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.queryBookings)({
        ...query,
        type: 'room'
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(_ => _.map(i => (0,_placeos_events__WEBPACK_IMPORTED_MODULE_3__.newCalendarEventFromBooking)(i))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]))) : (0,_placeos_events__WEBPACK_IMPORTED_MODULE_3__.queryEvents)({
        ...query
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([])));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    /** List of calendar events for the selected date */
    this.events = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._poll_type]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(([t]) => t === 'api' ? this.api_events : this.ws_events), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.timeout('end_loading', () => this._loading.next(false))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    /** List of desk bookings for the selected date */
    this.visitors = this._update.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(([date]) => (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.queryBookings)({
      period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])(date)),
      period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_22__["default"])(date)),
      type: 'visitor'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(_ => {
      console.error(_);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]);
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.timeout('end_loading', () => this._loading.next(false))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    /** List of desk bookings for the selected date */
    this.desks = this._update.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(([date]) => (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.queryBookings)({
      period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])(date)),
      period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_22__["default"])(date)),
      include_checked_out: true,
      type: 'desk'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(_ => {
      console.error(_);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]);
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.timeout('end_loading', () => this._loading.next(false))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    /** List of parking bookings for the selected date */
    this.parking = this._update.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(([date]) => (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.queryBookings)({
      period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])(date)),
      period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_22__["default"])(date)),
      type: 'parking'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([])))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.timeout('end_loading', () => this._loading.next(false))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    /** List of parking bookings for the selected date */
    this.lockers = this._update.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(([date]) => {
      const system_id = this._org.binding('area_management');
      if (!system_id) return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]);
      const mod = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_6__.getModule)(system_id, 'Lockers');
      return mod.execute('lockers_allocated_to_me').catch(_ => []);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(_ => _.map(i => new _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.Booking({
      date: (0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])(Date.now()).valueOf(),
      duration: 24 * 60 - 1,
      asset_id: i.locker_id,
      asset_name: i.locker_name,
      zones: [i.building, i.level],
      extension_data: {
        map_id: i.locker_id
      }
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.timeout('end_loading', () => this._loading.next(false))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    /** List of events and bookings for the selected date */
    this.bookings = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.events, this.visitors, this.desks, this.parking, this.lockers]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([e, v, d, p, l]) => [...e, ...v, ...d, ...p, ...l].sort((a, b) => a.date - b.date)));
    /** Filtered list of events and bookings for the selected date */
    this.filtered_bookings = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.bookings, this._filters]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([bkns, filters]) => bkns.filter(_ => !this._deleted.includes(_.id) && _ instanceof _placeos_events__WEBPACK_IMPORTED_MODULE_3__.CalendarEvent && filters?.shown_types?.includes('event') || filters?.shown_types?.includes(_.booking_type))));
    /** Currently selected date */
    this.filters = this._filters.asObservable();
    /** Currently selected date */
    this.date = this._date.asObservable();
    /** Whether events and bookings are loading */
    this.loading = this._loading.asObservable();
    this.subscription('poll_type', this._org.active_building.subscribe(() => this._poll_type.next(this._settings.get('app.schedule.use_websocket') ? 'ws' : 'api')));
    this._deleted = JSON.parse(sessionStorage.getItem('PLACEOS.events.deleted') || '[]');
  }
  triggerPoll() {
    this._poll.next(Date.now());
  }
  startPolling(delay = 60 * 1000) {
    this.interval('poll', () => {
      document.visibilityState === 'visible' ? this._poll.next(Date.now()) : '';
    }, delay);
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval('poll');
  }
  setDate(date) {
    this._date.next(date);
  }
  removeItem(item) {
    this.setAsDeleted(item.id);
    this._poll.next(Date.now());
  }
  setAsDeleted(id) {
    this._deleted.push(id);
    sessionStorage.setItem('PLACEOS.events.deleted', JSON.stringify(this._deleted));
  }
  toggleType(name, clear = false) {
    var _this = this;
    return (0,_Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const filters = _this._filters.getValue() || {
        shown_types: []
      };
      const {
        shown_types
      } = filters;
      if (shown_types && (shown_types.includes(name) || clear)) {
        _this._filters.next({
          ...filters,
          shown_types: shown_types.filter(_ => _ !== name)
        });
      } else {
        _this._filters.next({
          ...filters,
          shown_types: [...shown_types, name]
        });
      }
    })();
  }
}
ScheduleStateService.ɵfac = function ScheduleStateService_Factory(t) {
  return new (t || ScheduleStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.OrganisationService));
};
ScheduleStateService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjectable"]({
  token: ScheduleStateService,
  factory: ScheduleStateService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 18676:
/*!*******************************************************************!*\
  !*** ./apps/workplace/src/app/schedule/schedule-state.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleStateService": () => (/* binding */ ScheduleStateService)
/* harmony export */ });
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/bookings */ 56917);
/* harmony import */ var _placeos_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/calendar */ 51876);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 88397);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/events */ 27288);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 19956);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 69377);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 20312);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 33200);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 45398);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 54350);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 79128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 80522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 86839);









class ScheduleStateService extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  constructor(_settings) {
    super();
    this._settings = _settings;
    this._poll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(0);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject({
      start: Date.now()
    });
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject('');
    this._schedule = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
    this.options = this._options.asObservable();
    this.loading = this._loading.asObservable();
    this.schedule = this._loading.asObservable();
    this.calendars = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(_ => (0,_placeos_calendar__WEBPACK_IMPORTED_MODULE_1__.queryCalendars)()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.shareReplay)(1));
    this.events = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._options, this._poll]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)(([options]) => {
      this._loading.next('Loading schedule...');
      const query = {
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(options.start)),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(options.start), 6))
      };
      if (options.calendar) {
        query.calendar = options.calendar;
      }
      this._schedule.next(this._schedule.getValue().filter(_ => !(0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.timePeriodsIntersect)(query.period_start * 1000, query.period_end * 1000, _.date, _.date + _.duration * 60 * 1000)));
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.forkJoin)([this._settings.get('app.events.use_bookings') === true ? (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_0__.queryBookings)({
        ...query,
        type: 'room'
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(_ => _.map(i => (0,_placeos_events__WEBPACK_IMPORTED_MODULE_3__.newCalendarEventFromBooking)(i)))) : (0,_placeos_events__WEBPACK_IMPORTED_MODULE_3__.queryEvents)({
        ...query
      }), (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_0__.queryBookings)({
        ...query,
        type: 'desk'
      }), (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_0__.queryBookings)({
        ...query,
        type: 'parking'
      })]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.catchError)(_ => []));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(([events, bookings]) => {
      const list = [...this._schedule.getValue(), ...events, ...bookings.filter(_ => _.status !== 'declined')].sort((a, b) => a.date - b.date);
      this._schedule.next((0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.unique)(list, 'id'));
      return list;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.catchError)(_ => []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.tap)(_ => this._loading.next('')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.shareReplay)(1));
  }
  startPolling(delay = 15 * 1000) {
    this.interval('poll', () => this._poll.next(Date.now()), delay);
  }
  stopPolling() {
    this.clearInterval('poll');
  }
  setOptions(options) {
    this._options.next({
      ...this._options.getValue(),
      ...options
    });
  }
}
ScheduleStateService.ɵfac = function ScheduleStateService_Factory(t) {
  return new (t || ScheduleStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
};
ScheduleStateService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjectable"]({
  token: ScheduleStateService,
  factory: ScheduleStateService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 51876:
/*!************************************!*\
  !*** ./libs/calendar/src/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Calendar": () => (/* reexport safe */ _lib_calendar__WEBPACK_IMPORTED_MODULE_0__.Calendar),
/* harmony export */   "CalendarService": () => (/* reexport safe */ _lib_calendar__WEBPACK_IMPORTED_MODULE_0__.CalendarService),
/* harmony export */   "queryCalendarAvailability": () => (/* reexport safe */ _lib_calendar__WEBPACK_IMPORTED_MODULE_0__.queryCalendarAvailability),
/* harmony export */   "queryCalendars": () => (/* reexport safe */ _lib_calendar__WEBPACK_IMPORTED_MODULE_0__.queryCalendars),
/* harmony export */   "querySpaceCalendarAvailability": () => (/* reexport safe */ _lib_calendar__WEBPACK_IMPORTED_MODULE_0__.querySpaceCalendarAvailability),
/* harmony export */   "querySpaceFreeBusy": () => (/* reexport safe */ _lib_calendar__WEBPACK_IMPORTED_MODULE_0__.querySpaceFreeBusy),
/* harmony export */   "queryUserFreeBusy": () => (/* reexport safe */ _lib_calendar__WEBPACK_IMPORTED_MODULE_0__.queryUserFreeBusy)
/* harmony export */ });
/* harmony import */ var _lib_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/calendar */ 39489);


/***/ }),

/***/ 34139:
/*!******************************************************!*\
  !*** ./libs/calendar/src/lib/calendar.interfaces.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 48780:
/*!***************************************************!*\
  !*** ./libs/calendar/src/lib/calendar.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarService": () => (/* binding */ CalendarService)
/* harmony export */ });
/* harmony import */ var _Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 79128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 25670);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 19956);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 69377);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 33200);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 62317);
/* harmony import */ var libs_common_src_lib_async_handler_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/common/src/lib/async-handler.class */ 64871);
/* harmony import */ var libs_common_src_lib_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/common/src/lib/settings.service */ 80719);
/* harmony import */ var libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/organisation/src/lib/organisation.service */ 10565);
/* harmony import */ var _calendar_fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.fn */ 56217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 86839);











class CalendarService extends libs_common_src_lib_async_handler_class__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  constructor(_org, _settings) {
    super();
    this._org = _org;
    this._settings = _settings;
    this._calendars = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    /** Observable for the list of calendars */
    this.calendar_list = (0,_calendar_fn__WEBPACK_IMPORTED_MODULE_4__.queryCalendars)().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(l => this._calendars.next(l)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.shareReplay)(1));
    /* istanbul ignore next */
    this.query = () => (0,_calendar_fn__WEBPACK_IMPORTED_MODULE_4__.queryCalendars)();
    /* istanbul ignore next */
    this.freeBusy = q => (0,_calendar_fn__WEBPACK_IMPORTED_MODULE_4__.querySpaceFreeBusy)(q, this._org);
    /* istanbul ignore next */
    this.availability = q => (0,_calendar_fn__WEBPACK_IMPORTED_MODULE_4__.queryCalendarAvailability)(q);
    this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.first)(_ => _)).subscribe(() => this.init());
  }
  init() {
    var _this = this;
    return (0,_Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this._settings.get('app.events.use_bookings')) return;
      _this._initialised.next(true);
    })();
  }
  get calendars() {
    return this._calendars.getValue();
  }
  /** Get Free busy for the selected day
   * @param calendars User calendar
   * @param date Selected day
   */
  getFreeBusyDate(date, calendars) {
    return (0,_calendar_fn__WEBPACK_IMPORTED_MODULE_4__.querySpaceFreeBusy)({
      period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(date)),
      period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(date)),
      calendars
    }, this._org);
  }
  /** Check rooms availability */
  checkSpacesAvailability(system_ids, period_start, period_end, old_booking) {
    return (0,_Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield (0,_calendar_fn__WEBPACK_IMPORTED_MODULE_4__.queryCalendarAvailability)({
        period_start,
        period_end,
        system_ids: system_ids.join(',')
      }).toPromise();
      const start = new Date(old_booking?.date).valueOf();
      const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(start, old_booking?.duration).valueOf();
      const available = result.every(i => {
        const availability = i.availability;
        if (old_booking && i.id === old_booking.system?.email) {
          const index = availability.findIndex(block => {
            return block.date >= start && (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(block.date, block.duration).valueOf() <= end;
          });
          if (index !== -1) {
            availability.splice(index, 1);
          }
        }
        return !availability.length;
      });
      return !!available;
    })();
  }
}
CalendarService.ɵfac = function CalendarService_Factory(t) {
  return new (t || CalendarService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_3__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](libs_common_src_lib_settings_service__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
};
CalendarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
  token: CalendarService,
  factory: CalendarService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 39489:
/*!*******************************************!*\
  !*** ./libs/calendar/src/lib/calendar.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Calendar": () => (/* reexport safe */ _calendar_class__WEBPACK_IMPORTED_MODULE_0__.Calendar),
/* harmony export */   "CalendarService": () => (/* reexport safe */ _calendar_service__WEBPACK_IMPORTED_MODULE_2__.CalendarService),
/* harmony export */   "queryCalendarAvailability": () => (/* reexport safe */ _calendar_fn__WEBPACK_IMPORTED_MODULE_3__.queryCalendarAvailability),
/* harmony export */   "queryCalendars": () => (/* reexport safe */ _calendar_fn__WEBPACK_IMPORTED_MODULE_3__.queryCalendars),
/* harmony export */   "querySpaceCalendarAvailability": () => (/* reexport safe */ _calendar_fn__WEBPACK_IMPORTED_MODULE_3__.querySpaceCalendarAvailability),
/* harmony export */   "querySpaceFreeBusy": () => (/* reexport safe */ _calendar_fn__WEBPACK_IMPORTED_MODULE_3__.querySpaceFreeBusy),
/* harmony export */   "queryUserFreeBusy": () => (/* reexport safe */ _calendar_fn__WEBPACK_IMPORTED_MODULE_3__.queryUserFreeBusy)
/* harmony export */ });
/* harmony import */ var _calendar_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.class */ 34603);
/* harmony import */ var _calendar_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.interfaces */ 34139);
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.service */ 48780);
/* harmony import */ var _calendar_fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.fn */ 56217);





/***/ })

}]);
//# sourceMappingURL=common.js.map