"use strict";
(self["webpackChunkworkplace"] = self["webpackChunkworkplace"] || []).push([["common"],{

/***/ 79184:
/*!*******************************************************************!*\
  !*** ./apps/workplace/src/app/schedule/schedule-state.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleStateService: () => (/* binding */ ScheduleStateService)
/* harmony export */ });
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _placeos_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/calendar */ 91886);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/events */ 40569);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 99908);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 28797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 26320);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 68757);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3107);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 37580);









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
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_12__.startOfDay)(options.start)),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_13__.addDays)((0,date_fns__WEBPACK_IMPORTED_MODULE_14__.endOfDay)(options.start), 6))
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
      }), (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_0__.queryBookings)({
        ...query,
        type: 'group-event'
      })]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.catchError)(_ => []));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(([events, bookings, parking, group_events]) => {
      const list = [...this._schedule.getValue(), ...events, ...bookings.filter(_ => _.status !== 'declined'), ...group_events.filter(_ => _.status !== 'declined')].sort((a, b) => a.date - b.date);
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
  static #_ = this.ɵfac = function ScheduleStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ScheduleStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjectable"]({
    token: ScheduleStateService,
    factory: ScheduleStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 91886:
/*!************************************!*\
  !*** ./libs/calendar/src/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Calendar: () => (/* reexport safe */ _lib_calendar__WEBPACK_IMPORTED_MODULE_0__.Calendar),
/* harmony export */   CalendarService: () => (/* reexport safe */ _lib_calendar__WEBPACK_IMPORTED_MODULE_0__.CalendarService),
/* harmony export */   queryCalendarAvailability: () => (/* reexport safe */ _lib_calendar__WEBPACK_IMPORTED_MODULE_0__.queryCalendarAvailability),
/* harmony export */   queryCalendars: () => (/* reexport safe */ _lib_calendar__WEBPACK_IMPORTED_MODULE_0__.queryCalendars),
/* harmony export */   querySpaceCalendarAvailability: () => (/* reexport safe */ _lib_calendar__WEBPACK_IMPORTED_MODULE_0__.querySpaceCalendarAvailability),
/* harmony export */   querySpaceFreeBusy: () => (/* reexport safe */ _lib_calendar__WEBPACK_IMPORTED_MODULE_0__.querySpaceFreeBusy),
/* harmony export */   queryUserFreeBusy: () => (/* reexport safe */ _lib_calendar__WEBPACK_IMPORTED_MODULE_0__.queryUserFreeBusy)
/* harmony export */ });
/* harmony import */ var _lib_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/calendar */ 30694);


/***/ }),

/***/ 82458:
/*!******************************************************!*\
  !*** ./libs/calendar/src/lib/calendar.interfaces.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 14015:
/*!***************************************************!*\
  !*** ./libs/calendar/src/lib/calendar.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarService: () => (/* binding */ CalendarService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 99908);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 49675);
/* harmony import */ var libs_common_src_lib_async_handler_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/common/src/lib/async-handler.class */ 75354);
/* harmony import */ var libs_common_src_lib_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/common/src/lib/settings.service */ 14233);
/* harmony import */ var libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/organisation/src/lib/organisation.service */ 19863);
/* harmony import */ var _calendar_fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.fn */ 458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37580);











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
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
      period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.startOfDay)(date)),
      period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_11__.endOfDay)(date)),
      calendars
    }, this._org);
  }
  /** Check rooms availability */
  checkSpacesAvailability(system_ids, period_start, period_end, old_booking) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield (0,_calendar_fn__WEBPACK_IMPORTED_MODULE_4__.queryCalendarAvailability)({
        period_start,
        period_end,
        system_ids: system_ids.join(',')
      }).toPromise();
      const start = new Date(old_booking?.date).valueOf();
      const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.addMinutes)(start, old_booking?.duration).valueOf();
      const available = result.every(i => {
        const availability = i.availability;
        if (old_booking && i.id === old_booking.system?.email) {
          const index = availability.findIndex(block => {
            return block.date >= start && (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.addMinutes)(block.date, block.duration).valueOf() <= end;
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
  static #_ = this.ɵfac = function CalendarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CalendarService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_3__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](libs_common_src_lib_settings_service__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
    token: CalendarService,
    factory: CalendarService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 30694:
/*!*******************************************!*\
  !*** ./libs/calendar/src/lib/calendar.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Calendar: () => (/* reexport safe */ _calendar_class__WEBPACK_IMPORTED_MODULE_0__.Calendar),
/* harmony export */   CalendarService: () => (/* reexport safe */ _calendar_service__WEBPACK_IMPORTED_MODULE_2__.CalendarService),
/* harmony export */   queryCalendarAvailability: () => (/* reexport safe */ _calendar_fn__WEBPACK_IMPORTED_MODULE_3__.queryCalendarAvailability),
/* harmony export */   queryCalendars: () => (/* reexport safe */ _calendar_fn__WEBPACK_IMPORTED_MODULE_3__.queryCalendars),
/* harmony export */   querySpaceCalendarAvailability: () => (/* reexport safe */ _calendar_fn__WEBPACK_IMPORTED_MODULE_3__.querySpaceCalendarAvailability),
/* harmony export */   querySpaceFreeBusy: () => (/* reexport safe */ _calendar_fn__WEBPACK_IMPORTED_MODULE_3__.querySpaceFreeBusy),
/* harmony export */   queryUserFreeBusy: () => (/* reexport safe */ _calendar_fn__WEBPACK_IMPORTED_MODULE_3__.queryUserFreeBusy)
/* harmony export */ });
/* harmony import */ var _calendar_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.class */ 65772);
/* harmony import */ var _calendar_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.interfaces */ 82458);
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.service */ 14015);
/* harmony import */ var _calendar_fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.fn */ 458);





/***/ })

}]);
//# sourceMappingURL=common.js.map