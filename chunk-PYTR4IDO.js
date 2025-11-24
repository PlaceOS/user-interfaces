import {
  AsyncHandler,
  BehaviorSubject,
  OrganisationService,
  SettingsService,
  addMinutes,
  endOfDay,
  first,
  getUnixTime,
  queryCalendarAvailability,
  queryCalendars,
  querySpaceFreeBusy,
  shareReplay,
  startOfDay,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-W3HSAJDS.js";
import {
  __async
} from "./chunk-4MWRP73S.js";

// libs/calendar/src/lib/calendar.service.ts
var _CalendarService = class _CalendarService extends AsyncHandler {
  constructor(_org, _settings) {
    super();
    this._org = _org;
    this._settings = _settings;
    this._calendars = new BehaviorSubject([]);
    this.calendar_list = queryCalendars().pipe(tap((l) => this._calendars.next(l)), shareReplay(1));
    this.query = () => queryCalendars();
    this.freeBusy = (q) => querySpaceFreeBusy(q, this._org);
    this.availability = (q) => queryCalendarAvailability(q);
    this._org.initialised.pipe(first((_) => _)).subscribe(() => this.init());
  }
  init() {
    return __async(this, null, function* () {
      if (this._settings.get("app.events.use_bookings"))
        return;
      this._initialised.next(true);
    });
  }
  get calendars() {
    return this._calendars.getValue();
  }
  /** Get Free busy for the selected day
   * @param calendars User calendar
   * @param date Selected day
   */
  getFreeBusyDate(date, calendars) {
    return querySpaceFreeBusy({
      period_start: getUnixTime(startOfDay(date)),
      period_end: getUnixTime(endOfDay(date)),
      calendars
    }, this._org);
  }
  /** Check rooms availability */
  checkSpacesAvailability(system_ids, period_start, period_end, old_booking) {
    return __async(this, null, function* () {
      const result = yield queryCalendarAvailability({
        period_start,
        period_end,
        system_ids: system_ids.join(",")
      }).toPromise();
      const start = new Date(old_booking?.date).valueOf();
      const end = addMinutes(start, old_booking?.duration).valueOf();
      const available = result.every((i) => {
        const availability = i.availability;
        if (old_booking && i.id === old_booking.system?.email) {
          const index = availability.findIndex((block) => {
            return block.date >= start && addMinutes(block.date, block.duration).valueOf() <= end;
          });
          if (index !== -1) {
            availability.splice(index, 1);
          }
        }
        return !availability.length;
      });
      return !!available;
    });
  }
};
_CalendarService.\u0275fac = function CalendarService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CalendarService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(SettingsService));
};
_CalendarService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CalendarService, factory: _CalendarService.\u0275fac, providedIn: "root" });
var CalendarService = _CalendarService;

export {
  CalendarService
};
//# sourceMappingURL=chunk-PYTR4IDO.js.map
