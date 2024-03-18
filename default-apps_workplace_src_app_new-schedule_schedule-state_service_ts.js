"use strict";
(self["webpackChunkworkplace"] = self["webpackChunkworkplace"] || []).push([["default-apps_workplace_src_app_new-schedule_schedule-state_service_ts"],{

/***/ 96205:
/*!***********************************************************************!*\
  !*** ./apps/workplace/src/app/new-schedule/schedule-state.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleStateService: () => (/* binding */ ScheduleStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/bookings */ 40688);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/events */ 58908);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @placeos/spaces */ 55322);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @placeos/ts-client */ 64331);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns */ 77393);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns */ 31957);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns */ 57016);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! date-fns */ 4512);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! date-fns */ 55702);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! date-fns */ 58415);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! date-fns */ 8276);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 70462);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 17827);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 95933);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 15746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 85046);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 18020);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 36520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 45083);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 58175);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 680);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 1062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
















class ScheduleStateService extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  constructor(_settings, _org, _lockers, _dialog) {
    var _this;
    super();
    _this = this;
    this._settings = _settings;
    this._org = _org;
    this._lockers = _lockers;
    this._dialog = _dialog;
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
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([])))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(_ => _.filter(_ => !_.parent_id && !_.linked_event)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.timeout('end_loading', () => this._loading.next(false))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    /** List of desk bookings for the selected date */
    this.desks = this._update.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(([date]) => (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.queryBookings)({
      period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])(date)),
      period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_22__["default"])(date)),
      include_checked_out: true,
      type: 'desk'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([])))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.timeout('end_loading', () => this._loading.next(false))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    /** List of parking bookings for the selected date */
    this.parking = this._update.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(([date]) => (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.queryBookings)({
      period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])(date)),
      period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_22__["default"])(date)),
      type: 'parking'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([])))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.timeout('end_loading', () => this._loading.next(false))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    /** List of parking bookings for the selected date */
    this.lockers = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._org.active_building.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(_ => !!_), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.distinctUntilKeyChanged)('id')), this._lockers.lockers$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)( /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ([_, lockers]) {
        const system_id = _this._org.binding('lockers');
        if (!system_id) return [[], lockers];
        const mod = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_6__.getModule)(system_id, 'LockerLocations');
        const my_lockers = yield mod.execute('lockers_allocated_to_me').catch(_ => []);
        return [my_lockers, lockers];
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([my_lockers, lockers]) => {
      return my_lockers.map(i => {
        const locker = lockers.find(_ => _.id === i.locker_id);
        if (!locker && (!i.level || !i.building)) return null;
        i.level = i.level || locker?.level_id;
        i.building = i.building || this._org.levelWithID([locker?.level_id])?.parent_id;
        return new _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.Booking({
          date: (0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])(Date.now()).valueOf(),
          duration: 24 * 60 - 1,
          title: 'Locker Booking',
          description: i.locker_name,
          booking_type: 'locker',
          all_day: true,
          asset_id: locker.map_id,
          asset_name: i.locker_name,
          zones: [i.building, i.level],
          extension_data: {
            // map_id: i.locker_id || locker.map_id,
          }
        });
      }).filter(item => item);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(e => {
      console.error(e);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.timeout('end_loading', () => this._loading.next(false))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    /** List of events and bookings for the selected date */
    this.bookings = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.events, this.visitors, this.desks, this.parking, this.lockers]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([e, v, d, p, l]) => {
      const filtered_events = e.filter(ev => !d.find(bkn => `${ev.meeting_id}` === `${bkn.id}`));
      return [...filtered_events, ...v, ...d, ...p, ...l].sort((a, b) => a.date - b.date);
    }));
    /** Filtered list of events and bookings for the selected date */
    this.filtered_bookings = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.bookings, this._filters]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([bkns, filters]) => bkns.filter(_ => !this._deleted.includes(_.id) && _ instanceof _placeos_events__WEBPACK_IMPORTED_MODULE_3__.CalendarEvent && filters?.shown_types?.includes('event') || filters?.shown_types?.includes(_.booking_type))));
    /** Currently selected date */
    this.filters = this._filters.asObservable();
    /** Currently selected date */
    this.date = this._date.asObservable();
    /** Whether events and bookings are loading */
    this.loading = this._loading.asObservable();
    this._ignore_cancel = [];
    this._checkCancel = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([_placeos_common__WEBPACK_IMPORTED_MODULE_2__.current_user, (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.interval)(60 * 1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.startWith)(0))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(([u]) => !!u), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)( /*#__PURE__*/function () {
      var _ref2 = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ([user]) {
        const is_home = user.location !== 'wfo';
        const auto_release = _this._settings.get('app.auto_release');
        if (auto_release && is_home && (auto_release.time_after || auto_release.time_before) && auto_release.resources?.length) {
          for (const type of auto_release.resources) {
            const bookings = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.queryBookings)({
              period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_25__["default"])(Date.now())),
              period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_26__["default"])(Date.now(), (auto_release.time_after || 5) + (auto_release.time_before || 0))),
              type
            }).toPromise();
            console.log('Check Bookings:', type, bookings, _this._ignore_cancel);
            const check_block = (auto_release.time_after || 0) + (auto_release.time_before || 0);
            for (const booking of bookings) {
              if (_this._ignore_cancel.includes(booking.id) || booking.checked_in || booking.rejected) {
                continue;
              }
              _this._dialog.closeAll();
              const diff = (0,date_fns__WEBPACK_IMPORTED_MODULE_27__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_26__["default"])(booking.date, auto_release.time_after || 0), Date.now());
              if (diff > check_block || diff < 0) continue;
              const result = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.openConfirmModal)({
                title: `Keep ${type} booking`,
                content: `You have indicated you are not in the office. 
                                Your booking will be cancelled in about ${diff} minutes. 
                                Do you wish to keep this booking?`,
                icon: {
                  content: 'cancel'
                },
                confirm_text: 'Keep',
                cancel_text: 'Dismiss'
              }, _this._dialog);
              if (result.reason !== 'done') {
                _this._ignore_cancel.push(booking.id);
                continue;
              }
              result.loading('Checking in booking...');
              yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.checkinBooking)(booking.id, true).toPromise();
              result.close();
            }
          }
        }
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()));
    this.subscription('poll_type', this._org.active_building.subscribe(() => this._poll_type.next(this._settings.get('app.schedule.use_websocket') ? 'ws' : 'api')));
    this.subscription('chat_event', this._settings.listen('CHAT:task_complete').subscribe(() => this.triggerPoll()));
    this.subscription('wfh_checks', this._checkCancel.subscribe());
    this._deleted = JSON.parse(sessionStorage.getItem('PLACEOS.events.deleted') || '[]');
  }
  triggerPoll() {
    this._poll.next(Date.now());
  }
  startPolling(delay = 60 * 1000) {
    this.interval('poll', () => this._poll.next(Date.now()), delay);
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
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const filters = _this2._filters.getValue() || {
        shown_types: []
      };
      const {
        shown_types
      } = filters;
      if (shown_types && (shown_types.includes(name) || clear)) {
        _this2._filters.next({
          ...filters,
          shown_types: shown_types.filter(_ => _ !== name)
        });
      } else {
        _this2._filters.next({
          ...filters,
          shown_types: [...shown_types, name]
        });
      }
    })();
  }
  static #_ = this.ɵfac = function ScheduleStateService_Factory(t) {
    return new (t || ScheduleStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵinject"](_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.LockersService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialog));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjectable"]({
    token: ScheduleStateService,
    factory: ScheduleStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=default-apps_workplace_src_app_new-schedule_schedule-state_service_ts.js.map