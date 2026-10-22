import {
  activeReportBookings,
  activeReportEvents,
  generateReportForBookings,
  generateReportForDeskBookings,
  isDeclinedReportEvent,
  reportBookableMinutes,
  reportBookedTimeUtilisationPercent,
  reportBookingStatusStats,
  reportEventStatusStats
} from "./chunk-M7D6LSL2.js";
import {
  queryDeskAssets
} from "./chunk-WD5GTSWS.js";
import {
  queryParkingSpacesForZones
} from "./chunk-B2VUZWJQ.js";
import {
  queryLockerAssetsForZones,
  queryLockerBankAssetsForZones
} from "./chunk-TSGHYC3W.js";
import {
  queryAllEvents
} from "./chunk-G2JHYSUV.js";
import {
  queryAllBookings
} from "./chunk-FXQRAK2P.js";
import {
  setDay
} from "./chunk-UTCRAK3D.js";
import {
  requestSpacesForZone
} from "./chunk-KTRJCCRD.js";
import {
  SpacePipe
} from "./chunk-GQXDRDYV.js";
import {
  CalendarEvent,
  OrganisationService,
  SettingsService,
  getUnixTime,
  isBefore
} from "./chunk-WHXIEU2S.js";
import {
  AsyncHandler
} from "./chunk-EQB56Z5X.js";
import {
  ac,
  addDays,
  addMinutes,
  downloadFile,
  endOfDay,
  flatten,
  format,
  getTimezoneDifferenceInHours,
  i18n,
  jsonToCsv,
  nextValueFrom,
  notifyError,
  startOfDay,
  timePeriodsIntersect,
  unique
} from "./chunk-77D47I3C.js";
import {
  Injectable,
  computed,
  formatDate,
  inject,
  resource,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-EOGESHX7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/reports/reports-state.service.ts
var DAYS_OF_WEEK_INDEX = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday"
};
var REMOVE_KEYS = [
  "zones",
  "server_names",
  "extension_data",
  "event_start",
  "event_end",
  "booking_start",
  "booking_end",
  "system",
  "old_system",
  "date",
  "date_end",
  "_valid_asset_cache",
  "_valid_cache_expiry"
];
var ReportsStateService = class _ReportsStateService extends AsyncHandler {
  get _ignore_days() {
    const day_list = this._settings.get("app.reports.ignore_days") || [];
    return day_list?.map((_) => typeof _ === "string" ? _?.toLowerCase() : format(setDay(/* @__PURE__ */ new Date(), _), "eeee")?.toLowerCase()).filter((_) => !!_);
  }
  get _event_bookable_hours() {
    return this._settings.get("app.events.bookable_hours") || this._settings.get("app.bookings.bookable_hours") || null;
  }
  get _event_bookable_minutes() {
    return reportBookableMinutes(this._event_bookable_hours);
  }
  /**
   * Load locker assets for a zone. Calls that run at the same time share
   * one request. The result is not kept, so later loads get fresh data.
   */
  queryLockers(zone_id) {
    return this._sharedInventory(`lockers:${zone_id}`, () => queryLockerAssetsForZones([zone_id]));
  }
  _sharedInventory(key, load) {
    let request = this._inventory_requests.get(key);
    if (!request) {
      request = load().finally(() => this._inventory_requests.delete(key));
      this._inventory_requests.set(key, request);
    }
    return request;
  }
  /**
   * Count bookable lockers in the banks on each level. Loads the
   * inventory once for each building, not once for each level.
   */
  async _lockerCounts(zone_ids) {
    const parent_ids = /* @__PURE__ */ new Map();
    for (const level of this._org.levels) {
      if (level.parent_id)
        parent_ids.set(level.id, level.parent_id);
    }
    const buildings = unique(zone_ids.map((id) => parent_ids.get(id)).filter((id) => !!id));
    const inventories = new Map(await Promise.all(buildings.map(async (id) => [
      id,
      await Promise.all([
        this._sharedInventory(`banks:${id}`, () => queryLockerBankAssetsForZones([id])).catch(() => []),
        this.queryLockers(id).catch(() => [])
      ])
    ])));
    return zone_ids.map((zone_id) => {
      const [banks, lockers] = inventories.get(parent_ids.get(zone_id)) || [[], []];
      const bank_ids = new Set(banks.filter((bank) => bank.zones?.includes(zone_id)).map((bank) => bank.id));
      const count = lockers.filter((locker) => locker.bookable !== false && bank_ids.has(locker.parent_id)).length;
      return [zone_id, count];
    });
  }
  async _resourceCountForZone(zone_id, resource_type, use_assets) {
    switch (resource_type) {
      case "desks": {
        if (use_assets) {
          const desks = await queryDeskAssets(zone_id).catch(() => []);
          return [zone_id, desks.length];
        }
        const metadata = await ac(zone_id, "desks").catch(() => ({ details: [] }));
        return [zone_id, metadata.details.length];
      }
      default:
        return [zone_id, 0];
    }
  }
  get duration() {
    const opts = this._options();
    let start = startOfDay(opts.start);
    const end = endOfDay(opts.end).valueOf();
    let count = 0;
    while (start.valueOf() < end) {
      if (!this._ignore_days.includes(DAYS_OF_WEEK_INDEX[start.getDay()])) {
        count++;
      }
      start = addDays(start, 1);
    }
    return Math.max(1, count);
  }
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._space_pipe = new SpacePipe(this._org);
    this._loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._active_bookings = signal(
      [],
      ...ngDevMode ? [{ debugName: "_active_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._options = signal(
      {
        start: /* @__PURE__ */ new Date(),
        end: /* @__PURE__ */ new Date(),
        zones: []
      },
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._loading.asReadonly();
    this.options = this._options.asReadonly();
    this.bookings = this._active_bookings.asReadonly();
    this._inventory_version = signal(
      0,
      ...ngDevMode ? [{ debugName: "_inventory_version" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.inventory_version = this._inventory_version.asReadonly();
    this._inventory_requests = /* @__PURE__ */ new Map();
    this._inventory = computed(() => {
      const { type, zones = [] } = this._options();
      const use_region = !!this._settings.get("app.use_region");
      const building = this._org.active_building();
      const region = this._org.active_region();
      const selected = zones.filter((z) => z !== -1 && z !== "All");
      const levels = selected.length ? selected : (use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(building)).map((_) => _.id);
      return {
        type,
        zones,
        levels,
        scope_id: use_region ? region?.id : building?.id,
        space_scope_id: (use_region ? building?.parent_id : building?.id) || building?.id,
        use_assets: !!this._settings.get("app.desks.use_assets"),
        version: this._inventory_version()
      };
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_inventory" } : (
      /* istanbul ignore next */
      {}
    )), { equal: (a, b) => JSON.stringify(a) === JSON.stringify(b) }));
    this._spaces = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_spaces" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const { zones, space_scope_id, version } = this._inventory();
        return { zones, space_scope_id, version };
      },
      loader: async ({ params }) => {
        const zones = params.zones.length ? params.zones : [params.space_scope_id];
        const lists = await Promise.all(zones.map((id) => nextValueFrom(requestSpacesForZone(id)).catch(() => [])));
        return flatten(lists);
      }
    }));
    this.spaces = computed(
      () => this._spaces.value() ?? [],
      ...ngDevMode ? [{ debugName: "spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._counts = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_counts" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const inventory = this._inventory();
        if (inventory.type !== "events" && inventory.type !== "catering") {
          return __spreadProps(__spreadValues({}, inventory), { spaces: [] });
        }
        const spaces = this._spaces.value();
        return spaces ? __spreadProps(__spreadValues({}, inventory), { spaces }) : void 0;
      },
      defaultValue: {},
      loader: async ({ params }) => {
        const { type, levels: zones, scope_id } = params;
        let list = [];
        if (type === "events" || type === "catering") {
          list = zones.map((z) => [
            z,
            params.spaces.filter((s) => s.zones.includes(z)).length
          ]);
        } else if (type === "parking") {
          if (scope_id) {
            const spaces = await queryParkingSpacesForZones([
              scope_id
            ]).catch(() => []);
            list = zones.map((z) => [
              z,
              spaces.filter((space) => space.zones?.includes(z)).length
            ]);
          }
        } else if (type === "lockers") {
          list = await this._lockerCounts(zones);
        } else if (zones.length) {
          list = await Promise.all(zones.map((z) => this._resourceCountForZone(z, type, params.use_assets)));
        }
        const map = {};
        list.forEach(([id, count]) => map[id] = count);
        return map;
      }
    }));
    this.counts = this._counts.value;
    this._stats = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_stats" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        counts: this._counts.value(),
        list: this._active_bookings()
      }),
      defaultValue: {},
      loader: async ({ params }) => {
        const { counts, list } = params;
        if (list[0] instanceof CalendarEvent) {
          const events = list || [];
          return __spreadProps(__spreadValues(__spreadValues({}, generateReportForBookings(activeReportEvents(events), this.duration * this._event_bookable_minutes / 60, this._event_bookable_minutes, counts)), reportEventStatusStats(events)), {
            all_events: events
          });
        }
        const bookings = list || [];
        return __spreadProps(__spreadValues(__spreadValues({}, generateReportForDeskBookings(activeReportBookings(bookings), this.duration, counts)), reportBookingStatusStats(bookings)), {
          all_events: bookings
        });
      }
    }));
    this.stats = this._stats.value;
    this.day_list = computed(
      () => {
        const options = this._options();
        const stats = this.stats();
        const { start } = options;
        let date = startOfDay(start);
        const end = endOfDay(options.end || date);
        const dates = [];
        while (isBefore(date, end)) {
          if (this._ignore_days.includes(DAYS_OF_WEEK_INDEX[date.getDay()])) {
            date = addDays(date, 1);
            continue;
          }
          const s = startOfDay(date).valueOf();
          const e = endOfDay(s).valueOf();
          const all_events = stats.all_events?.filter((bkn) => timePeriodsIntersect(s, e, bkn.date, bkn.date + bkn.duration * 60 * 1e3)) || [];
          const events = stats.events?.filter((bkn) => timePeriodsIntersect(s, e, bkn.date, bkn.date + bkn.duration * 60 * 1e3)) || [];
          const usage = options.type === "events" ? unique(events, "system_id").length : unique(events, "asset_id").length;
          dates.push({
            date: s,
            total: stats.total,
            usage,
            free: stats.total - events.length,
            approved: events.reduce((c, e2) => c + (e2.approved || e2.status === "approved" ? 1 : 0), 0),
            cancelled: all_events.filter((event) => !event.deleted && isDeclinedReportEvent(event)).length,
            deleted: all_events.filter((event) => event.deleted).length,
            count: all_events.length,
            utilisation: reportBookedTimeUtilisationPercent(events, stats.total, this._event_bookable_minutes).toFixed(1)
          });
          date = addDays(date, 1);
        }
        return dates;
      },
      ...ngDevMode ? [{ debugName: "day_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  /** Load the bookings and the inventory again for the active options */
  generateReport() {
    this._inventory_version.update((v) => v + 1);
    this.timeout("generate-report", () => this._loadBookings(), 500);
  }
  /** Load the bookings for the active report options */
  async _loadBookings() {
    const options = this._options();
    this._loading.set(i18n("APP.CONCIERGE.REPORTS_LOADING"));
    if (!options?.type && !options?.zones?.length) {
      this._loading.set("");
      this._active_bookings.set([]);
      return;
    }
    let start = startOfDay(options.start || Date.now());
    let end = endOfDay(options.end || start);
    if (options.type === "parking" && (this._settings.get("app.bookings.use_building_timezone") || this._settings.get("app.parking.use_building_timezone")) && this._org.building?.timezone) {
      const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const offset = getTimezoneDifferenceInHours(current_tz, this._org.building.timezone);
      start = addMinutes(start, offset * 60);
      end = addMinutes(end, offset * 60);
    }
    let zones = options?.zones ? options.zones.filter((z) => z !== "All").join(",") : "";
    if (!zones) {
      zones = this._settings.get("app.use_region") ? this._org.region.id : this._org.building.id;
    }
    const query = {
      period_start: getUnixTime(start),
      period_end: getUnixTime(end)
    };
    const bookings_query = __spreadProps(__spreadValues({}, query), {
      include_deleted: true,
      include_checked_out: true
    });
    this._load_controller?.abort();
    const controller = new AbortController();
    this._load_controller = controller;
    const { signal: signal2 } = controller;
    let list = [];
    let failed = false;
    try {
      switch (options.type) {
        case "desks":
          list = await queryAllBookings(__spreadProps(__spreadValues({}, bookings_query), {
            zones,
            type: "desk",
            limit: 200
          }), { signal: signal2 });
          break;
        case "parking":
          list = await queryAllBookings(__spreadProps(__spreadValues({}, bookings_query), {
            zones,
            type: "parking",
            limit: 200
          }), { signal: signal2 });
          break;
        case "lockers":
          list = await queryAllBookings(__spreadProps(__spreadValues({}, bookings_query), {
            zones,
            type: "locker",
            limit: 200
          }), { signal: signal2 });
          break;
        case "assets":
          list = await queryAllBookings(__spreadProps(__spreadValues({}, bookings_query), {
            zones,
            type: "asset-request",
            limit: 200
          }), { signal: signal2 });
          break;
        case "catering":
          list = await queryAllBookings(__spreadProps(__spreadValues({}, bookings_query), {
            zones,
            type: "catering-order",
            limit: 200
          }), { signal: signal2 });
          break;
        case "events":
          list = await queryAllEvents(__spreadProps(__spreadValues({}, query), {
            zone_ids: zones,
            include_cancelled: true,
            limit: 200
          }), { signal: signal2 });
          break;
        default:
          list = [];
      }
    } catch (_) {
      list = [];
      failed = true;
    }
    if (signal2.aborted)
      return;
    this._loading.set("");
    if (failed) {
      notifyError(i18n("COMMON.LOAD_ERROR"), i18n("COMMON.RETRY"), () => this.generateReport());
    } else if (!list?.length) {
      notifyError("No bookings for the selected levels and period");
    }
    list = list.filter((bkn) => {
      return !this._ignore_days.includes(DAYS_OF_WEEK_INDEX[new Date(bkn.date).getDay()]);
    });
    this._active_bookings.set(list || []);
  }
  setOptions(options) {
    const current = untracked(this._options);
    if (options.zones?.includes("All")) {
      options.zones = [
        "All",
        ...this._org.levelsForBuilding(this._org.building).map((lvl) => lvl.id)
      ];
    } else if (options.zones && current.zones?.includes("All")) {
      options.zones = [];
    }
    const value = (v) => v instanceof Array ? v.join() : v instanceof Date ? v.valueOf() : v;
    const unchanged = Object.entries(options).every(([key, v]) => value(v) === value(current[key]));
    if (unchanged)
      return;
    this._active_bookings.set([]);
    this._load_controller?.abort();
    this._loading.set("");
    this._options.set(__spreadValues(__spreadValues({}, current), options));
  }
  downloadReport() {
    const options = this._options();
    const bookings = this._active_bookings();
    downloadFile(`report+${options.type}+${format(options.start, "yyyy-MM-dd")}+${format(options.end, "yyyy-MM-dd")}.csv`, jsonToCsv(bookings.map((bkn) => {
      const details = bkn.toJSON();
      details.start = formatDate((details.event_start || details.booking_start) * 1e3, "MMM d, y, h:mm a", "en");
      details.end = formatDate((details.event_end || details.booking_end) * 1e3, "MMM d, y, h:mm a", "en");
      details.checked_in_time = details.checked_in_at ? formatDate(details.checked_in_at * 1e3, "MMM d, y, h:mm a", "en") : "";
      delete details.checked_in_at;
      for (const key of REMOVE_KEYS)
        delete details[key];
      return details;
    })));
  }
  static {
    this.\u0275fac = function ReportsStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportsStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportsStateService, factory: _ReportsStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  REMOVE_KEYS,
  ReportsStateService
};
//# debugId=d0c47c19-60a5-5327-88ea-bbc01f172d34
//# sourceMappingURL=chunk-KHXWN2DM.js.map
