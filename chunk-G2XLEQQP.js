import {
  AsyncHandler,
  BehaviorSubject,
  SettingsService,
  addDays,
  catchError,
  combineLatest,
  debounceTime,
  endOfDay,
  forkJoin,
  getUnixTime,
  map,
  mergeMap,
  newCalendarEventFromBooking,
  queryBookings,
  queryCalendars,
  queryEvents,
  shareReplay,
  startOfDay,
  switchMap,
  tap,
  timePeriodsIntersect,
  timer,
  unique,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OTXONO57.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// apps/workplace/src/app/schedule/schedule-state.service.ts
var _ScheduleStateService = class _ScheduleStateService extends AsyncHandler {
  constructor(_settings) {
    super();
    this._settings = _settings;
    this._poll = new BehaviorSubject(0);
    this._options = new BehaviorSubject({
      start: Date.now()
    });
    this._loading = new BehaviorSubject("");
    this._schedule = new BehaviorSubject([]);
    this.options = this._options.asObservable();
    this.loading = this._loading.asObservable();
    this.schedule = this._loading.asObservable();
    this.calendars = timer(1e3).pipe(switchMap((_) => queryCalendars()), shareReplay(1));
    this.events = combineLatest([
      this._options,
      this._poll
    ]).pipe(debounceTime(1e3), mergeMap(([options]) => {
      this._loading.next("Loading schedule...");
      const query = {
        period_start: getUnixTime(startOfDay(options.start)),
        period_end: getUnixTime(addDays(endOfDay(options.start), 6))
      };
      if (options.calendar) {
        query.calendar = options.calendar;
      }
      this._schedule.next(this._schedule.getValue().filter((_) => !timePeriodsIntersect(query.period_start * 1e3, query.period_end * 1e3, _.date, _.date + _.duration * 60 * 1e3)));
      return forkJoin([
        this._settings.get("app.events.use_bookings") === true ? queryBookings(__spreadProps(__spreadValues({}, query), { type: "room" })).pipe(map((_) => _.map((i) => newCalendarEventFromBooking(i)))) : queryEvents(__spreadValues({}, query)),
        queryBookings(__spreadProps(__spreadValues({}, query), { type: "desk" })),
        queryBookings(__spreadProps(__spreadValues({}, query), { type: "parking" })),
        queryBookings(__spreadProps(__spreadValues({}, query), { type: "group-event" }))
      ]).pipe(catchError((_) => []));
    }), map(([events, bookings, parking, group_events]) => {
      const list = [
        ...this._schedule.getValue(),
        ...events,
        ...bookings.filter((_) => _.status !== "declined"),
        ...group_events.filter((_) => _.status !== "declined")
      ].sort((a, b) => a.date - b.date);
      this._schedule.next(unique(list, "id"));
      return list;
    }), catchError((_) => []), tap((_) => this._loading.next("")), shareReplay(1));
  }
  startPolling(delay = 15 * 1e3) {
    this.interval("poll", () => this._poll.next(Date.now()), delay);
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
};
_ScheduleStateService.\u0275fac = function ScheduleStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScheduleStateService)(\u0275\u0275inject(SettingsService));
};
_ScheduleStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScheduleStateService, factory: _ScheduleStateService.\u0275fac, providedIn: "root" });
var ScheduleStateService = _ScheduleStateService;

export {
  ScheduleStateService
};
//# sourceMappingURL=chunk-G2XLEQQP.js.map
