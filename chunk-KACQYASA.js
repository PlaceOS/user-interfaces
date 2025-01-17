import {
  AsyncHandler,
  BehaviorSubject,
  Booking,
  CalendarEvent,
  LockersService,
  MatDialog,
  OrganisationService,
  ParkingService,
  SettingsService,
  addMinutes,
  addWeeks,
  catchError,
  checkinBooking,
  combineLatest,
  currentUser,
  current_user,
  debounceTime,
  differenceInMilliseconds,
  differenceInMinutes,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  endOfDay,
  filter,
  flatten,
  format,
  getDefaultOptions,
  getModule,
  getUnixTime,
  interval,
  isAfter,
  isBefore,
  isSameDay,
  map,
  newCalendarEventFromBooking,
  of,
  openConfirmModal,
  queryBookings,
  queryEvents,
  requestSpacesForZone,
  shareReplay,
  startOfDay,
  startOfMinute,
  startOfWeek,
  startWith,
  switchMap,
  tap,
  toDate,
  unique,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IM5PHJ7W.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// node_modules/date-fns/endOfWeek.mjs
function endOfWeek(date, options) {
  const defaultOptions = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  _date.setDate(_date.getDate() + diff);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// apps/workplace/src/app/new-schedule/schedule-state.service.ts
var _ScheduleStateService = class _ScheduleStateService extends AsyncHandler {
  setOptions(options) {
    this._options.next(options);
  }
  getOptions() {
    return this._options.getValue();
  }
  get offset_weekday() {
    return this._settings.get("app.week_start") || 0;
  }
  constructor(_settings, _org, _lockers, _dialog, _parking) {
    super();
    this._settings = _settings;
    this._org = _org;
    this._lockers = _lockers;
    this._dialog = _dialog;
    this._parking = _parking;
    this._poll = new BehaviorSubject(0);
    this._poll_type = new BehaviorSubject("api");
    this._loading = new BehaviorSubject(false);
    this._options = new BehaviorSubject({ period: "day" });
    this._filters = new BehaviorSubject({
      shown_types: [
        "event",
        "desk",
        "parking",
        "visitor",
        "locker",
        "group-event"
      ]
    });
    this._date = new BehaviorSubject(Date.now());
    this._update = combineLatest([this._date, this._poll]).pipe(debounceTime(500), tap((_) => this._loading.next(true)));
    this._deleted = [];
    this._space_bookings = this._org.active_building.pipe(
      filter((_) => !!_),
      distinctUntilKeyChanged("id"),
      debounceTime(300),
      tap((_) => this.unsubWith("bind:")),
      switchMap(({ id }) => {
        this._loading.next(true);
        return requestSpacesForZone(id);
      }),
      // Get list of spaces for building
      distinctUntilChanged(([s1], [s2]) => s1 !== s2),
      switchMap((list) => {
        this._loading.next(false);
        return combineLatest((list || []).map((space) => {
          const binding = getModule(space.id, "Bookings").binding("bookings");
          const obs = binding.listen().pipe(map((event_list) => (event_list || []).map((i) => new CalendarEvent(__spreadProps(__spreadValues({}, i), {
            resources: i.attendees.filter((_) => _.email === space.email || _.resource),
            system: space
          })))), catchError((_) => of([])));
          if (!this.hasSubscription(`bind:${space.id}`)) {
            this.subscription(`bind:${space.id}`, binding.bind());
          }
          return obs;
        }));
      }),
      map((_) => flatten(_)),
      shareReplay(1)
    );
    this.options = this._options.asObservable();
    this.filters = this._filters.asObservable();
    this.date = this._date.asObservable();
    this.loading = this._loading.asObservable();
    this.week_date = combineLatest([
      this._org.active_building,
      this.date
    ]).pipe(map(([_, date]) => startOfWeek(date, {
      weekStartsOn: this.offset_weekday
    }).valueOf()));
    this.week_options = combineLatest([
      this._org.active_building,
      this.date
    ]).pipe(filter(([bld]) => !!bld), map(([bld]) => {
      const options = [];
      let date = startOfDay(Date.now());
      for (let i = -4; i < 48; i++) {
        let day = addWeeks(date, i);
        const week_s_date = startOfWeek(day, {
          weekStartsOn: this.offset_weekday
        });
        const week_e_date = endOfWeek(day, {
          weekStartsOn: this.offset_weekday
        });
        const this_week = isAfter(Date.now(), week_s_date) && isBefore(Date.now(), week_e_date);
        const week_start = format(week_s_date, "dd MMM");
        const week_end = format(week_e_date, "dd MMM");
        options.push({
          id: week_s_date.valueOf(),
          name: `${week_start} - ${week_end}`,
          this_week
        });
      }
      return options;
    }));
    this.ws_events = combineLatest([
      this._space_bookings,
      this._update
    ]).pipe(map(([_, [date]]) => {
      const user = currentUser();
      return _.filter((_2) => isSameDay(_2.date, date) && (_2.host.toLowerCase() === user.email.toLowerCase() || _2.attendees.find((a) => a.email.toLowerCase() === user.email.toLowerCase())) && !_2.linked_bookings?.find((b) => b.booking_type === "group-event"));
    }));
    this.api_events = combineLatest([
      this._update,
      this._options
    ]).pipe(switchMap(([[date], { period }]) => {
      const query = {
        period_start: getUnixTime(period === "day" ? startOfDay(date) : startOfWeek(date, {
          weekStartsOn: this.offset_weekday
        })),
        period_end: getUnixTime(period === "day" ? endOfDay(date) : endOfWeek(date, {
          weekStartsOn: this.offset_weekday
        }))
      };
      return this._settings.get("app.events.use_bookings") ? queryBookings(__spreadProps(__spreadValues({}, query), { type: "room" })).pipe(map((_) => _.map((i) => newCalendarEventFromBooking(i))), catchError((_) => of([]))) : queryEvents(__spreadValues({}, query)).pipe(catchError((_) => of([])));
    }), shareReplay(1));
    this.raw_events = combineLatest([
      this._poll_type,
      this._options
    ]).pipe(switchMap(([t, { period }]) => t === "api" || period !== "week" ? this.api_events : this.ws_events), tap(() => this.timeout("end_loading", () => this._loading.next(false))), shareReplay(1));
    this.events = this.raw_events.pipe(map((_) => _.filter((_2) => !_2.extension_data?.shared_event)));
    this.visitors = combineLatest([
      this._update,
      this.options
    ]).pipe(switchMap(([[date], { period }]) => this._bookingQuery("visitor", period, date)), map((_) => _.filter((_2) => !_2.parent_id && !_2.linked_event)), tap(() => this.timeout("end_loading", () => this._loading.next(false))), shareReplay(1));
    this.desks = combineLatest([
      this._update,
      this.options
    ]).pipe(switchMap(([[date], { period }]) => this._bookingQuery("desk", period, date)), tap(() => this.timeout("end_loading", () => this._loading.next(false))), shareReplay(1));
    this.parking = combineLatest([
      this._update,
      this.options
    ]).pipe(switchMap(([[date], { period }]) => this._bookingQuery("parking", period, date)), tap(() => this.timeout("end_loading", () => this._loading.next(false))), shareReplay(1));
    this.group_events = this.raw_events.pipe(map((_) => _.filter((_2) => _2.extension_data?.shared_event)));
    this.locker_bookings = combineLatest([
      this._update,
      this.options
    ]).pipe(switchMap(([[date], { period }]) => this._bookingQuery("locker", period, date)), tap(() => this.timeout("end_loading", () => this._loading.next(false))), shareReplay(1));
    this.lockers = combineLatest([
      this._org.active_building.pipe(filter((_) => !!_), distinctUntilKeyChanged("id")),
      this._lockers.lockers$
    ]).pipe(debounceTime(300), switchMap((_0) => __async(this, [_0], function* ([_, lockers]) {
      const system_id = this._org.binding("lockers");
      if (!system_id)
        return [[], lockers];
      const mod = getModule(system_id, "LockerLocations");
      const my_lockers = yield mod.execute("lockers_allocated_to_me").catch((_2) => []);
      return [my_lockers, lockers];
    })), map(([my_lockers, lockers]) => {
      return my_lockers.map((i) => {
        const locker = lockers.find((lkr) => lkr.id === i.locker_id);
        if (!locker && (!i.level || !i.building))
          return null;
        i.level = i.level || locker?.level_id;
        i.building = i.building || this._org.levelWithID([locker?.level_id])?.parent_id;
        return new Booking({
          date: startOfDay(Date.now()).valueOf(),
          duration: 24 * 60 - 1,
          title: "Locker Booking",
          description: i.locker_name,
          booking_type: "locker",
          all_day: true,
          asset_id: locker.map_id,
          asset_name: i.locker_name,
          zones: [i.building, i.level],
          extension_data: {
            // map_id: i.locker_id || locker.map_id,
          }
        });
      }).filter((item) => item);
    }), catchError((e) => {
      console.error(e);
      return of([]);
    }), tap(() => this.timeout("end_loading", () => this._loading.next(false))), shareReplay(1));
    this.bookings = combineLatest([
      this.events,
      this.visitors,
      this.desks,
      this.parking,
      this.lockers,
      this.locker_bookings,
      this.group_events
    ]).pipe(map(([events, visitors, desks, parking, lockers, locker_bookings, group_events]) => {
      const filtered_events = events.filter((ev) => !desks.find((bkn) => `${ev.meeting_id}` === `${bkn.id}`) && ev.linked_bookings[0]?.booking_type !== "group-event");
      return [
        ...filtered_events,
        ...visitors,
        ...desks,
        ...parking,
        ...lockers,
        ...locker_bookings,
        ...group_events
      ].sort((a, b) => a.date - b.date);
    }));
    this.filtered_bookings = combineLatest([
      this.bookings,
      this._filters
    ]).pipe(map(([bkns, filters]) => bkns.filter((_) => {
      if (this._deleted.includes(_.instance ? `${_.id}|${_.instance}` : _.id))
        return false;
      if (_.extension_data?.shared_event && !filters?.shown_types?.includes("group-event")) {
        return false;
      }
      if (_ instanceof CalendarEvent && !_.extension_data?.shared_event && !filters?.shown_types?.includes("event")) {
        return false;
      } else if (_ instanceof CalendarEvent)
        return true;
      return filters?.shown_types?.includes(_.booking_type);
    })));
    this._ignore_cancel = [];
    this._checkCancel = combineLatest([
      current_user,
      interval(60 * 1e3).pipe(startWith(0))
    ]).pipe(filter(([u]) => !!u), map((_0) => __async(this, [_0], function* ([user]) {
      const is_home = user.location !== "wfo";
      const auto_release = this._settings.get("app.auto_release");
      if (auto_release && is_home && (auto_release.time_after || auto_release.time_before) && auto_release.resources?.length) {
        const time_before = Math.min(60, auto_release.time_before || 0);
        for (const type of auto_release.resources) {
          const bookings = yield queryBookings({
            period_start: getUnixTime(startOfMinute(Date.now())),
            period_end: getUnixTime(addMinutes(Date.now(), (auto_release.time_after || 5) + time_before)),
            type
          }).toPromise();
          const check_block = (auto_release.time_after || 0) + time_before;
          for (const booking of bookings) {
            if (this._ignore_cancel.includes(booking.id) || booking.checked_in || booking.rejected) {
              continue;
            }
            this._dialog.closeAll();
            const diff = differenceInMinutes(addMinutes(booking.date, auto_release.time_after || 0), Date.now());
            if (diff > check_block || diff < 0)
              continue;
            const time = addMinutes(booking.date, auto_release.time_after || 0);
            const close_after = differenceInMilliseconds(time.getTime() + 60 * 1e3, Date.now());
            const wording = type === "parking" ? "reservation" : "booking";
            const result = yield openConfirmModal({
              title: `Keep ${type} ${wording}`,
              content: `You have indicated you are not in the office. 
                                Your  ${wording} for "<i>${booking.asset_name || booking.title}</i>" at ${format(booking.date, this._settings.time_format)} will be cancelled at ${format(time, this._settings.time_format)}.<br/><br/>
                                Do you wish to keep this ${wording}?`,
              icon: { content: "event_busy" },
              confirm_text: "Keep",
              cancel_text: "Dismiss",
              close_delay: close_after
            }, this._dialog);
            if (result.reason !== "done") {
              this._ignore_cancel.push(booking.id);
              continue;
            }
            result.loading("Checking in booking...");
            yield checkinBooking(booking.id, true).toPromise();
            result.close();
          }
        }
      }
    })));
    this.subscription("poll_type", this._org.active_building.subscribe(() => this._poll_type.next(this._settings.get("app.schedule.use_websocket") ? "ws" : "api")));
    this.subscription("chat_event", this._settings.listen("CHAT:task_complete").subscribe(() => this.triggerPoll()));
    this.subscription("wfh_checks", this._checkCancel.subscribe());
    this._deleted = JSON.parse(sessionStorage.getItem("PLACEOS.events.deleted") || "[]");
  }
  triggerPoll() {
    this._poll.next(Date.now());
  }
  startPolling(delay = 60 * 1e3) {
    this.interval("poll", () => this._poll.next(Date.now()), delay);
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval("poll");
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
    sessionStorage.setItem("PLACEOS.events.deleted", JSON.stringify(this._deleted));
  }
  setType(name, state) {
    const filters = this._filters.getValue() || { shown_types: [] };
    const { shown_types } = filters;
    if (shown_types.includes(name) === state)
      return;
    const new_types = state ? unique([...shown_types, name]) : shown_types.filter((_) => _ !== name);
    this._filters.next(__spreadProps(__spreadValues({}, filters), {
      shown_types: new_types
    }));
  }
  toggleType(name, clear = false) {
    return __async(this, null, function* () {
      const filters = this._filters.getValue() || { shown_types: [] };
      const { shown_types } = filters;
      if (shown_types && (shown_types.includes(name) || clear)) {
        this._filters.next(__spreadProps(__spreadValues({}, filters), {
          shown_types: shown_types.filter((_) => _ !== name)
        }));
      } else {
        this._filters.next(__spreadProps(__spreadValues({}, filters), {
          shown_types: [...shown_types, name]
        }));
      }
    });
  }
  _bookingQuery(type, period, date) {
    return queryBookings({
      period_start: getUnixTime(period === "day" ? startOfDay(date) : startOfWeek(date, {
        weekStartsOn: this.offset_weekday
      })),
      period_end: getUnixTime(period === "day" ? endOfDay(date) : endOfWeek(date, {
        weekStartsOn: this.offset_weekday
      })),
      type,
      include_checked_out: true,
      include_deleted: "recurring"
    }).pipe(catchError((_) => of([])));
  }
};
_ScheduleStateService.\u0275fac = function ScheduleStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScheduleStateService)(\u0275\u0275inject(SettingsService), \u0275\u0275inject(OrganisationService), \u0275\u0275inject(LockersService), \u0275\u0275inject(MatDialog), \u0275\u0275inject(ParkingService));
};
_ScheduleStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScheduleStateService, factory: _ScheduleStateService.\u0275fac, providedIn: "root" });
var ScheduleStateService = _ScheduleStateService;

export {
  ScheduleStateService
};
//# sourceMappingURL=chunk-KACQYASA.js.map
