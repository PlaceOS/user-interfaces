import {
  activeReportBookings,
  activeReportEvents,
  generateReportForBookings,
  generateReportForDeskBookings,
  isDeclinedReportEvent,
  reportBookableMinutes,
  reportBookedTimeUtilisationPercent,
  reportBookingStatus,
  reportBookingStatusStats,
  reportEventStatus,
  reportEventStatusStats
} from "./chunk-JVUO5MPJ.js";
import {
  queryParkingSpacesForZones
} from "./chunk-XH4TP4XB.js";
import {
  queryDeskAssets
} from "./chunk-TGMFOUAE.js";
import {
  queryLockerAssetsForZones,
  queryLockerBankAssetsForZones
} from "./chunk-SGGXQVQY.js";
import {
  queryAllEvents
} from "./chunk-YGIWSEYH.js";
import {
  buildingDayEnd,
  buildingDayStart
} from "./chunk-IIQK7S5B.js";
import {
  queryAllBookingsOrThrow
} from "./chunk-CLYLAQPC.js";
import {
  setDay
} from "./chunk-H3ZCGIAC.js";
import {
  requestSpacesForZone
} from "./chunk-6QVP4BEC.js";
import {
  CustomTooltipComponent
} from "./chunk-GPRTMBPY.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-42S2QJDR.js";
import {
  OrganisationService
} from "./chunk-LVW6ON7X.js";
import {
  IconComponent
} from "./chunk-OCRUIWUS.js";
import {
  AsyncHandler,
  CalendarEvent,
  SettingsService,
  _c,
  addDays,
  downloadFile,
  endOfDay,
  flatten,
  format,
  getUnixTime,
  i18n,
  isBefore,
  jsonToCsv,
  nextValueFrom,
  notifyError,
  notifyInfo,
  startOfDay,
  timePeriodsIntersect,
  unique
} from "./chunk-ZGC7FL32.js";
import {
  Component,
  Injectable,
  Input,
  computed,
  formatDate,
  inject,
  input,
  resource,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-J4V3B3VF.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// apps/concierge/src/app/reports/report-metric-guide.component.ts
var _forTrack0 = ($index, $item) => $item.label;
function ReportMetricGuideComponent_ng_template_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.description, " ");
  }
}
function ReportMetricGuideComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "h4", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275repeaterCreate(4, ReportMetricGuideComponent_ng_template_4_For_5_Template, 5, 2, "div", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.title());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.items());
  }
}
var ReportMetricGuideComponent = class _ReportMetricGuideComponent {
  constructor() {
    this.inline = input(
      false,
      ...ngDevMode ? [{ debugName: "inline" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.title = input(
      "How metrics are calculated",
      ...ngDevMode ? [{ debugName: "title" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.absolute = input(
      false,
      ...ngDevMode ? [{ debugName: "absolute" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.items = input(
      [],
      ...ngDevMode ? [{ debugName: "items" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function ReportMetricGuideComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportMetricGuideComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportMetricGuideComponent, selectors: [["placeos-report-metric-guide"]], inputs: { inline: [1, "inline"], title: [1, "title"], absolute: [1, "absolute"], items: [1, "items"] }, decls: 6, vars: 19, consts: [["metric_guide_tooltip", ""], [1, "text-right", "print:hidden"], ["icon", "", "default", "", "type", "button", "customTooltip", "", "matTooltipPosition", "left", 3, "content", "xPosition", "yPosition", "matTooltip"], [1, "text-xl"], [1, "border-base-200", "bg-base-100", "my-2", "w-[min(42rem,calc(100vw-3rem))]", "rounded-sm", "border", "p-4", "text-left", "text-sm", "shadow-xl"], [1, "mb-3", "font-medium"], [1, "grid", "gap-3", "md:grid-cols-2"], [1, "font-medium"], [1, "mt-1", "opacity-70"]], template: function ReportMetricGuideComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "button", 2)(2, "icon", 3);
        \u0275\u0275text(3, "info");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(4, ReportMetricGuideComponent_ng_template_4_Template, 6, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const metric_guide_tooltip_r3 = \u0275\u0275reference(5);
        \u0275\u0275classProp("absolute", ctx.absolute())("top-24", ctx.absolute())("right-0", ctx.absolute())("px-4", !ctx.inline())("py-2", !ctx.inline())("ml-2", ctx.inline());
        \u0275\u0275advance();
        \u0275\u0275classProp("-mr-2", ctx.absolute());
        \u0275\u0275property("content", metric_guide_tooltip_r3)("xPosition", "end")("yPosition", "bottom")("matTooltip", ctx.title());
        \u0275\u0275attribute("aria-label", ctx.title());
      }
    }, dependencies: [CustomTooltipComponent, IconComponent, MatTooltipModule, MatTooltip], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportMetricGuideComponent, [{
    type: Component,
    args: [{
      selector: "placeos-report-metric-guide",
      template: `
        <div
            class="text-right print:hidden"
            [class.absolute]="absolute()"
            [class.top-24]="absolute()"
            [class.right-0]="absolute()"
            [class.px-4]="!inline()"
            [class.py-2]="!inline()"
            [class.ml-2]="inline()"
        >
            <button
                icon
                default
                type="button"
                customTooltip
                [content]="metric_guide_tooltip"
                [xPosition]="'end'"
                [yPosition]="'bottom'"
                [matTooltip]="title()"
                matTooltipPosition="left"
                [attr.aria-label]="title()"
                [class.-mr-2]="absolute()"
            >
                <icon class="text-xl">info</icon>
            </button>
        </div>
        <ng-template #metric_guide_tooltip>
            <div
                class="border-base-200 bg-base-100 my-2 w-[min(42rem,calc(100vw-3rem))] rounded-sm border p-4 text-left text-sm shadow-xl"
            >
                <h4 class="mb-3 font-medium">{{ title() }}</h4>
                <div class="grid gap-3 md:grid-cols-2">
                    @for (item of items(); track item.label) {
                        <div>
                            <div class="font-medium">{{ item.label }}</div>
                            <p class="mt-1 opacity-70">
                                {{ item.description }}
                            </p>
                        </div>
                    }
                </div>
            </div>
        </ng-template>
    `,
      imports: [CustomTooltipComponent, IconComponent, MatTooltipModule]
    }]
  }], null, { inline: [{ type: Input, args: [{ isSignal: true, alias: "inline", required: false }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], absolute: [{ type: Input, args: [{ isSignal: true, alias: "absolute", required: false }] }], items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportMetricGuideComponent, { className: "ReportMetricGuideComponent", filePath: "apps/concierge/src/app/reports/report-metric-guide.component.ts", lineNumber: 58 });
})();

// apps/concierge/src/app/reports/reports-state.service.ts
var BOOKING_TYPES = {
  desks: "desk",
  parking: "parking",
  lockers: "locker",
  assets: "asset-request",
  catering: "catering-order"
};
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
function reportUsesRegion(settings, type) {
  return !!settings.get("app.use_region") || type === "parking" && !!settings.get("app.parking.use_region");
}
var ReportsStateService = class _ReportsStateService extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
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
      const use_region = reportUsesRegion(this._settings, type);
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
    if (resource_type !== "desks")
      return [zone_id, 0];
    if (use_assets) {
      const desks = await queryDeskAssets(zone_id).catch(() => []);
      return [zone_id, desks.length];
    }
    const metadata = await _c(zone_id, "desks").catch(() => ({
      details: []
    }));
    return [zone_id, metadata.details.length];
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
    if (options.type === "parking" && (this._settings.get("app.parking.use_building_timezone") ?? this._settings.get("app.bookings.use_building_timezone")) && this._org.building?.timezone) {
      start = buildingDayStart(start, this._org.building.timezone);
      end = buildingDayEnd(end, this._org.building.timezone);
    }
    let zones = options?.zones ? options.zones.filter((z) => z !== "All").join(",") : "";
    if (!zones) {
      zones = reportUsesRegion(this._settings, options.type) ? this._org.region.id : this._org.building.id;
    }
    const query = {
      period_start: getUnixTime(start),
      period_end: getUnixTime(end)
    };
    this._load_controller?.abort();
    const controller = new AbortController();
    this._load_controller = controller;
    const { signal: signal2 } = controller;
    let list = [];
    let failed = false;
    try {
      const booking_type = BOOKING_TYPES[options.type];
      if (options.type === "events") {
        list = await queryAllEvents(__spreadProps(__spreadValues({}, query), {
          zone_ids: zones,
          include_cancelled: true,
          limit: 200
        }), { signal: signal2 });
      } else if (booking_type) {
        list = await queryAllBookingsOrThrow(__spreadProps(__spreadValues({}, query), {
          include_deleted: true,
          include_checked_out: true,
          zones,
          type: booking_type,
          limit: 200
        }), { signal: signal2 });
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
  downloadReport(exclude_cancelled = false) {
    const options = this._options();
    const include_status = options.type === "desks" || options.type === "events";
    const source = this._active_bookings();
    const bookings = source.map((booking) => ({
      booking,
      status: options.type === "events" ? reportEventStatus(booking) : reportBookingStatus(booking)
    })).filter(({ status }) => !exclude_cancelled || status !== "Cancelled");
    if (exclude_cancelled && !bookings.length) {
      notifyInfo(i18n("APP.CONCIERGE.REPORTS_NO_NON_CANCELLED_BOOKINGS"));
      return;
    }
    const suffix = exclude_cancelled ? "+without-cancelled" : "";
    downloadFile(`report+${options.type}+${format(options.start, "yyyy-MM-dd")}+${format(options.end, "yyyy-MM-dd")}${suffix}.csv`, jsonToCsv(bookings.map(({ booking, status }) => {
      const details = booking.toJSON();
      details.start = formatDate((details.event_start || details.booking_start) * 1e3, "MMM d, y, h:mm a", "en");
      details.end = formatDate((details.event_end || details.booking_end) * 1e3, "MMM d, y, h:mm a", "en");
      if (include_status)
        details.booking_status = status;
      details.checked_in_time = details.checked_in_at ? formatDate(details.checked_in_at * 1e3, "MMM d, y, h:mm a", "en") : "";
      delete details.checked_in_at;
      for (const key of REMOVE_KEYS)
        delete details[key];
      return details;
    })));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ReportsStateService_BaseFactory;
      return function ReportsStateService_Factory(__ngFactoryType__) {
        return (\u0275ReportsStateService_BaseFactory || (\u0275ReportsStateService_BaseFactory = \u0275\u0275getInheritedFactory(_ReportsStateService)))(__ngFactoryType__ || _ReportsStateService);
      };
    })();
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
  }], null, null);
})();

export {
  ReportMetricGuideComponent,
  REMOVE_KEYS,
  reportUsesRegion,
  ReportsStateService
};
//# debugId=eb2af514-54a3-598e-bc19-d497b259a9ff
//# sourceMappingURL=chunk-NWRR4EVP.js.map
