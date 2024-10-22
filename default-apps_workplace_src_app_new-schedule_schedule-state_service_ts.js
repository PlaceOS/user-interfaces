"use strict";
(self["webpackChunkworkplace"] = self["webpackChunkworkplace"] || []).push([["default-apps_workplace_src_app_new-schedule_schedule-state_service_ts"],{

/***/ 75323:
/*!***********************************************************************!*\
  !*** ./apps/workplace/src/app/new-schedule/schedule-state.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleStateService: () => (/* binding */ ScheduleStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/events */ 40569);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @placeos/spaces */ 44855);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns */ 90610);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns */ 6243);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! date-fns */ 60665);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! date-fns */ 91543);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! date-fns */ 55882);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! date-fns */ 45726);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! date-fns */ 31257);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! date-fns */ 99908);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! date-fns */ 23206);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! date-fns */ 49675);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! date-fns */ 1874);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! date-fns */ 15213);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs */ 86020);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 47504);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 6109);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs/operators */ 89273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
















class ScheduleStateService extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  setOptions(options) {
    this._options.next(options);
  }
  getOptions() {
    return this._options.getValue();
  }
  get offset_weekday() {
    return this._settings.get('app.week_start') || 0;
  }
  constructor(_settings, _org, _lockers, _dialog, _parking) {
    var _this;
    super();
    _this = this;
    this._settings = _settings;
    this._org = _org;
    this._lockers = _lockers;
    this._dialog = _dialog;
    this._parking = _parking;
    this._poll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(0);
    this._poll_type = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject('api');
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(false);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject({
      period: 'day'
    });
    this._filters = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject({
      shown_types: ['event', 'desk', 'parking', 'visitor', 'locker', 'group-event']
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
    this.options = this._options.asObservable();
    /** Currently selected date */
    this.filters = this._filters.asObservable();
    /** Currently selected date */
    this.date = this._date.asObservable();
    /** Whether events and bookings are loading */
    this.loading = this._loading.asObservable();
    this.week_date = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._org.active_building, this.date]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([_, date]) => (0,date_fns__WEBPACK_IMPORTED_MODULE_19__.startOfWeek)(date, {
      weekStartsOn: this.offset_weekday
    }).valueOf()));
    this.week_options = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._org.active_building, this.date]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(([bld]) => !!bld), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([bld]) => {
      const options = [];
      let date = (0,date_fns__WEBPACK_IMPORTED_MODULE_20__.startOfDay)(Date.now());
      for (let i = -4; i < 48; i++) {
        let day = (0,date_fns__WEBPACK_IMPORTED_MODULE_21__.addWeeks)(date, i);
        const week_s_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_19__.startOfWeek)(day, {
          weekStartsOn: this.offset_weekday
        });
        const week_e_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_22__.endOfWeek)(day, {
          weekStartsOn: this.offset_weekday
        });
        const this_week = (0,date_fns__WEBPACK_IMPORTED_MODULE_23__.isAfter)(Date.now(), week_s_date) && (0,date_fns__WEBPACK_IMPORTED_MODULE_24__.isBefore)(Date.now(), week_e_date);
        const week_start = (0,date_fns__WEBPACK_IMPORTED_MODULE_25__.format)(week_s_date, 'dd MMM');
        const week_end = (0,date_fns__WEBPACK_IMPORTED_MODULE_25__.format)(week_e_date, 'dd MMM');
        options.push({
          id: day.valueOf(),
          name: `${week_start} - ${week_end}`,
          this_week
        });
      }
      return options;
    }));
    this.ws_events = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._space_bookings, this._update]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([_, [date]]) => {
      const user = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.currentUser)();
      return _.filter(_ => (0,date_fns__WEBPACK_IMPORTED_MODULE_26__.isSameDay)(_.date, date) && (_.host.toLowerCase() === user.email.toLowerCase() || _.attendees.find(a => a.email.toLowerCase() === user.email.toLowerCase())) && !_.linked_bookings?.find(b => b.booking_type === 'group-event'));
    }));
    /** List of calendar events for the selected date */
    this.api_events = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._update, this._options]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(([[date], {
      period
    }]) => {
      const query = {
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_27__.getUnixTime)(period === 'day' ? (0,date_fns__WEBPACK_IMPORTED_MODULE_20__.startOfDay)(date) : (0,date_fns__WEBPACK_IMPORTED_MODULE_19__.startOfWeek)(date, {
          weekStartsOn: this.offset_weekday
        })),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_27__.getUnixTime)(period === 'day' ? (0,date_fns__WEBPACK_IMPORTED_MODULE_28__.endOfDay)(date) : (0,date_fns__WEBPACK_IMPORTED_MODULE_22__.endOfWeek)(date, {
          weekStartsOn: this.offset_weekday
        }))
      };
      return this._settings.get('app.events.use_bookings') ? (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.queryBookings)({
        ...query,
        type: 'room'
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(_ => _.map(i => (0,_placeos_events__WEBPACK_IMPORTED_MODULE_3__.newCalendarEventFromBooking)(i))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]))) : (0,_placeos_events__WEBPACK_IMPORTED_MODULE_3__.queryEvents)({
        ...query
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([])));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    /** List of calendar events for the selected date */
    this.raw_events = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._poll_type, this._options]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(([t, {
      period
    }]) => t === 'api' || period !== 'week' ? this.api_events : this.ws_events), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.timeout('end_loading', () => this._loading.next(false))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    /** List of calendar events for the selected date */
    this.events = this.raw_events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(_ => _.filter(_ => !_.extension_data?.shared_event)));
    /** List of desk bookings for the selected date */
    this.visitors = this._update.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(([date]) => (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.queryBookings)({
      period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_27__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_20__.startOfDay)(date)),
      period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_27__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_28__.endOfDay)(date)),
      type: 'visitor'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([])))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(_ => _.filter(_ => !_.parent_id && !_.linked_event)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.timeout('end_loading', () => this._loading.next(false))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    /** List of desk bookings for the selected date */
    this.desks = this._update.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(([date]) => (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.queryBookings)({
      period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_27__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_20__.startOfDay)(date)),
      period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_27__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_28__.endOfDay)(date)),
      include_checked_out: true,
      type: 'desk'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([])))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.timeout('end_loading', () => this._loading.next(false))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    /** List of parking bookings for the selected date */
    this.parking = this._update.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(([date]) => (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.queryBookings)({
      period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_27__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_20__.startOfDay)(date)),
      period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_27__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_28__.endOfDay)(date)),
      type: 'parking',
      include_deleted: 'recurring'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([])))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.timeout('end_loading', () => this._loading.next(false))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    /** List of calendar events for the selected date */
    this.group_events = this.raw_events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(_ => _.filter(_ => _.extension_data?.shared_event)));
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
        const locker = lockers.find(lkr => lkr.id === i.locker_id);
        if (!locker && (!i.level || !i.building)) return null;
        i.level = i.level || locker?.level_id;
        i.building = i.building || this._org.levelWithID([locker?.level_id])?.parent_id;
        return new _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.Booking({
          date: (0,date_fns__WEBPACK_IMPORTED_MODULE_20__.startOfDay)(Date.now()).valueOf(),
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
    this.bookings = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.events, this.visitors, this.desks, this.parking, this.lockers, this.group_events]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([events, visitors, desks, parking, lockers, group_events]) => {
      const filtered_events = events.filter(ev => !desks.find(bkn => `${ev.meeting_id}` === `${bkn.id}`) && ev.linked_bookings[0]?.booking_type !== 'group-event');
      return [...filtered_events, ...visitors, ...desks, ...parking, ...lockers, ...group_events].sort((a, b) => a.date - b.date);
    }));
    /** Filtered list of events and bookings for the selected date */
    this.filtered_bookings = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.bookings, this._filters]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([bkns, filters]) => bkns.filter(_ => {
      if (this._deleted.includes(_.instance ? `${_.id}|${_.instance}` : _.id)) return false;
      if (_.extension_data?.shared_event && !filters?.shown_types?.includes('group-event')) {
        return false;
      }
      if (_ instanceof _placeos_events__WEBPACK_IMPORTED_MODULE_3__.CalendarEvent && !_.extension_data?.shared_event && !filters?.shown_types?.includes('event')) {
        return false;
      } else if (_ instanceof _placeos_events__WEBPACK_IMPORTED_MODULE_3__.CalendarEvent) return true;
      return filters?.shown_types?.includes(_.booking_type);
    })));
    this._ignore_cancel = [];
    this._checkCancel = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([_placeos_common__WEBPACK_IMPORTED_MODULE_2__.current_user, (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.interval)(60 * 1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.startWith)(0))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(([u]) => !!u), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)( /*#__PURE__*/function () {
      var _ref2 = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ([user]) {
        const is_home = user.location !== 'wfo';
        const auto_release = _this._settings.get('app.auto_release');
        if (auto_release && is_home && (auto_release.time_after || auto_release.time_before) && auto_release.resources?.length) {
          const time_before = Math.min(60, auto_release.time_before || 0);
          for (const type of auto_release.resources) {
            const bookings = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.queryBookings)({
              period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_27__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_31__.startOfMinute)(Date.now())),
              period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_27__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_32__.addMinutes)(Date.now(), (auto_release.time_after || 5) + time_before)),
              type
            }).toPromise();
            const check_block = (auto_release.time_after || 0) + time_before;
            for (const booking of bookings) {
              if (_this._ignore_cancel.includes(booking.id) || booking.checked_in || booking.rejected) {
                continue;
              }
              _this._dialog.closeAll();
              const diff = (0,date_fns__WEBPACK_IMPORTED_MODULE_33__.differenceInMinutes)((0,date_fns__WEBPACK_IMPORTED_MODULE_32__.addMinutes)(booking.date, auto_release.time_after || 0), Date.now());
              if (diff > check_block || diff < 0) continue;
              const time = (0,date_fns__WEBPACK_IMPORTED_MODULE_32__.addMinutes)(booking.date, auto_release.time_after || 0);
              const close_after = (0,date_fns__WEBPACK_IMPORTED_MODULE_34__.differenceInMilliseconds)(time.getTime() + 60 * 1000, Date.now());
              const wording = type === 'parking' ? 'reservation' : 'booking';
              const result = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.openConfirmModal)({
                title: `Keep ${type} ${wording}`,
                content: `You have indicated you are not in the office. 
                                Your  ${wording} for "<i>${booking.asset_name || booking.title}</i>" at ${(0,date_fns__WEBPACK_IMPORTED_MODULE_25__.format)(booking.date, _this._settings.time_format)} will be cancelled at ${(0,date_fns__WEBPACK_IMPORTED_MODULE_25__.format)(time, _this._settings.time_format)}.<br/><br/>
                                Do you wish to keep this ${wording}?`,
                icon: {
                  content: 'event_busy'
                },
                confirm_text: 'Keep',
                cancel_text: 'Dismiss',
                close_delay: close_after
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
    this.setAsDeleted(item.instance ? `${item.id}|${item.instance}` : item.id);
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
  static #_ = this.ɵfac = function ScheduleStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ScheduleStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵinject"](_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.LockersService), _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵinject"](_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.ParkingService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineInjectable"]({
    token: ScheduleStateService,
    factory: ScheduleStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 60665:
/*!*********************************************!*\
  !*** ./node_modules/date-fns/endOfWeek.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   endOfWeek: () => (/* binding */ endOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ 58700);
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ 19857);



/**
 * The {@link endOfWeek} function options.
 */

/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  _date.setDate(_date.getDate() + diff);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endOfWeek);

/***/ })

}]);
//# sourceMappingURL=default-apps_workplace_src_app_new-schedule_schedule-state_service_ts.js.map