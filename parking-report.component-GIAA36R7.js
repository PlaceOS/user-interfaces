import {
  DurationPipe
} from "./chunk-LIR6W5BL.js";
import {
  differenceInBusinessDays
} from "./chunk-R2HVCDAQ.js";
import {
  REMOVE_KEYS,
  ReportsStateService
} from "./chunk-I6LAZD7I.js";
import {
  ArcElement,
  CategoryScale,
  Chart,
  LineController,
  LineElement,
  LinearScale,
  PieController,
  PointElement,
  plugin_legend,
  plugin_tooltip
} from "./chunk-K2GEOON2.js";
import {
  ReportsOptionsComponent
} from "./chunk-UAC4RSPK.js";
import {
  ReportMetricGuideComponent
} from "./chunk-TZLZ4PRG.js";
import {
  activeReportBookings,
  formatReportPercentage,
  noShowReportBookings,
  reportBookingStatus,
  reportBookingStatusStats
} from "./chunk-M7D6LSL2.js";
import "./chunk-LCHSZWKM.js";
import {
  ParkingSpacePipe
} from "./chunk-B3QX7MTN.js";
import "./chunk-JNHYREVF.js";
import {
  queryParkingSpacesForZones
} from "./chunk-ULYE3EO5.js";
import {
  SimpleTableComponent
} from "./chunk-RILX3QL7.js";
import {
  parse
} from "./chunk-P54RLJBR.js";
import "./chunk-HWV6SYPV.js";
import "./chunk-WROB6MNN.js";
import "./chunk-GQ7BZQ4E.js";
import "./chunk-RFCENQ5H.js";
import "./chunk-VXZEI5ES.js";
import "./chunk-BUMW524D.js";
import "./chunk-BFWJNWXH.js";
import {
  AuthenticatedImageDirective
} from "./chunk-BZIPWESA.js";
import "./chunk-V3BZRUGF.js";
import "./chunk-WZBYY54Y.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-I52JNSOJ.js";
import "./chunk-TW5QCAQQ.js";
import "./chunk-54KE5JKV.js";
import "./chunk-CV6KPFJH.js";
import "./chunk-OX3RHFRB.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-QWYXFXJS.js";
import "./chunk-G7ZLBZI3.js";
import "./chunk-RIENTTXY.js";
import "./chunk-3TOA4G7Y.js";
import "./chunk-7G72PXFC.js";
import "./chunk-7T3N6W45.js";
import "./chunk-QKZR3R5Z.js";
import {
  TranslatePipe
} from "./chunk-IGQY3INR.js";
import "./chunk-I75UA7CR.js";
import {
  OrganisationService,
  SettingsService
} from "./chunk-ACYV7NM4.js";
import {
  IconComponent
} from "./chunk-QVU2YYRL.js";
import {
  AsyncHandler,
  downloadFile,
  endOfDay,
  format,
  formatDuration,
  i18n,
  isSameDay,
  jsonToCsv,
  startOfDay,
  toZonedTime,
  unique
} from "./chunk-JYQPCPCB.js";
import "./chunk-OWTWWOGC.js";
import "./chunk-ZEZKWG7M.js";
import {
  MatRippleModule
} from "./chunk-3WBJTYSG.js";
import {
  MatRipple
} from "./chunk-QSD4JXRO.js";
import "./chunk-GTXMU3AV.js";
import "./chunk-DK3CVVJN.js";
import {
  ActivatedRoute
} from "./chunk-N4RTV55R.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  DatePipe,
  Injectable,
  Input,
  ViewChild,
  computed,
  effect,
  formatDate,
  inject,
  input,
  linkedSignal,
  resource,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction8,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-QAVCSYNX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/reports/parking/parking-report.service.ts
var ParkingReportService = class _ParkingReportService {
  constructor() {
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._report = inject(ReportsStateService);
    this._options = signal(
      {},
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._report.loading;
    this.options = this._options.asReadonly();
    this.bookings = computed(
      () => this._report.bookings(),
      ...ngDevMode ? [{ debugName: "bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.daily_stats = computed(
      () => {
        const bookings = this.bookings();
        const days = {};
        for (const booking of bookings) {
          const date = this.formatBookingDate(booking.date, "yyyy-MM-dd");
          if (!days[date]) {
            days[date] = {
              date: booking.date,
              bookings: []
            };
          }
          days[date].bookings.push(booking);
        }
        return days;
      },
      ...ngDevMode ? [{ debugName: "daily_stats" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._counts = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_counts" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._options(),
      defaultValue: {},
      loader: async ({ params: filters }) => {
        let zones = (filters.zones || []).filter((z) => z !== -1 && z !== "All");
        if (!zones.length) {
          zones = (this._settings.get("app.use_region") ? this._org.levelsForRegion() : this._org.levelsForBuilding()).filter((_) => _.tags.includes("parking")).map((_) => _.id);
        }
        if (!zones.length)
          return {};
        const scope_id = this._settings.get("app.use_region") ? this._org.region?.id : this._org.building?.id;
        if (!scope_id)
          return {};
        const spaces = await queryParkingSpacesForZones([scope_id]).catch(() => []);
        const list = zones.map((z) => [
          z,
          spaces.filter((space) => space.zones?.includes(z)).length
        ]);
        const mapping = {};
        list.forEach(([id, count]) => mapping[id] = Math.max(count || 0, 1));
        return mapping;
      }
    }));
    this.counts = this._counts.value;
  }
  get timezone() {
    return this._settings.get("app.bookings.use_building_timezone") || this._settings.get("app.parking.use_building_timezone") ? this._org.building?.timezone || "" : "";
  }
  get time_format() {
    return this._settings.time_format;
  }
  formatBookingDate(date, format_string) {
    return format(this.timezone ? toZonedTime(date, this.timezone) : date, format_string);
  }
  setOptions(options) {
    this._options.set(__spreadValues(__spreadValues({}, this._options()), options));
    this._report.setOptions(__spreadProps(__spreadValues({}, options), { type: "parking" }));
  }
  generateReport() {
    this._report.setOptions({ type: "parking" });
    this._report.generateReport();
  }
  async downloadReport() {
    const options = this._options();
    const bookings = this.bookings();
    if (!bookings?.length)
      return;
    const start = Number.isFinite(options.start) ? options.start : bookings[0].date;
    const end = Number.isFinite(options.end) ? options.end : start;
    const is_same = isSameDay(start, end);
    const date = is_same ? format(start, "yyyy-MM-dd") : `${format(start, "yyyy-MM-dd")}-${format(end, "yyyy-MM-dd")}`;
    downloadFile(`report+parking+${date}.csv`, jsonToCsv(bookings.map((booking) => {
      const b = booking.toJSON();
      const fmt_str = "MMM d, y, h:mm a";
      b.start = formatDate(b.booking_start * 1e3, fmt_str, "en");
      b.end = formatDate(b.booking_end * 1e3, fmt_str, "en");
      for (const key of REMOVE_KEYS)
        delete b[key];
      return b;
    })));
  }
  static {
    this.\u0275fac = function ParkingReportService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingReportService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParkingReportService, factory: _ParkingReportService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingReportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/reports/parking/parking-report-charts.component.ts
var _c0 = ["dailyChart"];
var _c1 = ["levelChart"];
var LEVEL_COLORS = [
  "rgb(59, 130, 246)",
  "rgb(16, 185, 129)",
  "rgb(245, 158, 11)",
  "rgb(239, 68, 68)",
  "rgb(139, 92, 246)",
  "rgb(236, 72, 153)",
  "rgb(20, 184, 166)",
  "rgb(249, 115, 22)"
];
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, PieController, ArcElement, plugin_tooltip, plugin_legend);
var ParkingReportChartsComponent = class _ParkingReportChartsComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(ParkingReportService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._bookings = this._state.bookings;
    this._counts = this._state.counts;
    this.print = input(
      false,
      ...ngDevMode ? [{ debugName: "print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.levels = computed(
      () => {
        const counts = this._counts();
        let zones = Object.keys(counts);
        if (!zones.length) {
          zones = (this._settings.get("app.use_region") ? this._org.levelsForRegion() : this._org.levelsForBuilding()).filter((_) => _.tags.includes("parking")).map((_) => _.id);
        }
        return zones;
      },
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.daily_data = computed(
      () => {
        const bookings = activeReportBookings(this._bookings());
        const levels = this.levels();
        const dates = unique(bookings.map((b) => format(b.date, "yyyy-MM-dd"))).sort();
        const series = levels.map((level) => ({
          level,
          data: dates.map((date) => bookings.filter((b) => format(b.date, "yyyy-MM-dd") === date && b.zones?.includes(level)).length)
        }));
        return { dates, series };
      },
      ...ngDevMode ? [{ debugName: "daily_data" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level_counts = computed(
      () => {
        const bookings = activeReportBookings(this._bookings());
        return this.levels().map((level) => ({
          level,
          count: bookings.filter((b) => b.zones?.includes(level)).length
        }));
      },
      ...ngDevMode ? [{ debugName: "level_counts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._daily_chart_el = viewChild(
      "dailyChart",
      ...ngDevMode ? [{ debugName: "_daily_chart_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._level_chart_el = viewChild(
      "levelChart",
      ...ngDevMode ? [{ debugName: "_level_chart_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._day_chart = null;
    this._level_chart = null;
    effect(() => {
      this.daily_data();
      this.level_counts();
      this.print();
      this._daily_chart_el();
      this._level_chart_el();
      this.timeout("update", () => this.updateCharts(), 50);
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._day_chart?.destroy();
    this._level_chart?.destroy();
  }
  updateCharts() {
    this.timeout("update_charts", () => {
      this.updateDailyChart(this.daily_data());
      this.updateLevelChart(this.level_counts());
    }, 50);
  }
  levelName(id) {
    const level = this._org.levelWithID([id]);
    return level?.display_name || level?.name || "";
  }
  updateDailyChart({ dates, series }) {
    const el = this._daily_chart_el()?.nativeElement;
    if (!el)
      return;
    this._day_chart?.destroy();
    this._day_chart = new Chart(el, {
      type: "line",
      data: {
        labels: dates.map((_) => format(parse(_, "yyyy-MM-dd", Date.now()), "dd MMM")),
        datasets: series.map((s, i) => ({
          label: this.levelName(s.level),
          data: s.data,
          borderColor: LEVEL_COLORS[i % LEVEL_COLORS.length],
          backgroundColor: LEVEL_COLORS[i % LEVEL_COLORS.length],
          fill: false,
          tension: 0.3
        }))
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: this.print() ? false : void 0,
        plugins: {
          legend: { display: true, position: "bottom" }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  updateLevelChart(level_counts) {
    const el = this._level_chart_el()?.nativeElement;
    if (!el)
      return;
    const list = level_counts.map((_, i) => __spreadProps(__spreadValues({}, _), {
      color: LEVEL_COLORS[i % LEVEL_COLORS.length]
    })).filter((_) => _.count > 0);
    const labels = list.map((_) => this.levelName(_.level));
    const data = list.map((_) => _.count);
    this._level_chart?.destroy();
    this._level_chart = new Chart(el, {
      type: "pie",
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: list.map((_) => _.color)
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: this.print() ? false : void 0,
        plugins: {
          legend: {
            position: "right"
          }
        }
      }
    });
  }
  static {
    this.\u0275fac = function ParkingReportChartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingReportChartsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingReportChartsComponent, selectors: [["parking-report-charts"]], viewQuery: function ParkingReportChartsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._daily_chart_el, _c0, 5)(ctx._level_chart_el, _c1, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, inputs: { print: [1, "print"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 14, consts: [["dailyChart", ""], ["levelChart", ""], [1, "flex", "w-full", "items-center", "space-x-4", "px-4", 3, "resize"], [1, "border-base-300", "bg-base-100", "h-72", "w-1/2", "flex-1", "rounded-sm", "border", "shadow"], [1, "border-base-200", "border-b", "p-4", "text-xl", "font-bold"], [1, "mx-auto", "h-56", "w-full", "max-w-full", "p-2"], ["role", "img"], [1, "mx-auto", "h-56", "w-[24rem]", "max-w-full", "p-2"]], template: function ParkingReportChartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 2);
        \u0275\u0275domListener("resize", function ParkingReportChartsComponent_Template_div_resize_0_listener() {
          return ctx.updateCharts();
        }, \u0275\u0275resolveWindow);
        \u0275\u0275domElementStart(1, "div", 3)(2, "div", 4);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "div", 5);
        \u0275\u0275domElement(6, "canvas", 6, 0);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(9, "div", 3)(10, "div", 4);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(13, "div", 7);
        \u0275\u0275domElement(14, "canvas", 6, 1);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275domElementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("is-print", ctx.print());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "APP.CONCIERGE.REPORTS_ACTIVE_BOOKINGS_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 8, "APP.CONCIERGE.REPORTS_ACTIVE_BOOKINGS_HEADER"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 10, "APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 12, "APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER"));
      }
    }, dependencies: [TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.is-print[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  width: 20rem !important;\n}\n/*# sourceMappingURL=parking-report-charts.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingReportChartsComponent, [{
    type: Component,
    args: [{ selector: "parking-report-charts", template: `
        <div
            class="flex w-full items-center space-x-4 px-4"
            [class.is-print]="print()"
            (window:resize)="updateCharts()"
        >
            <div
                class="border-base-300 bg-base-100 h-72 w-1/2 flex-1 rounded-sm border shadow"
            >
                <div class="border-base-200 border-b p-4 text-xl font-bold">
                    {{
                        'APP.CONCIERGE.REPORTS_ACTIVE_BOOKINGS_HEADER'
                            | translate
                    }}
                </div>
                <div class="mx-auto h-56 w-full max-w-full p-2">
                    <canvas
                        #dailyChart
                        role="img"
                        [attr.aria-label]="
                            'APP.CONCIERGE.REPORTS_ACTIVE_BOOKINGS_HEADER'
                                | translate
                        "
                    ></canvas>
                </div>
            </div>
            <div
                class="border-base-300 bg-base-100 h-72 w-1/2 flex-1 rounded-sm border shadow"
            >
                <div class="border-base-200 border-b p-4 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER' | translate }}
                </div>
                <div class="mx-auto h-56 w-[24rem] max-w-full p-2">
                    <canvas
                        #levelChart
                        role="img"
                        [attr.aria-label]="
                            'APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER'
                                | translate
                        "
                    ></canvas>
                </div>
            </div>
        </div>
    `, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;777ee74eb31c02bd97ad1617c574db4ec143388923951c9989316a8995b2a4d6;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/parking/parking-report-charts.component.ts */\n:host {\n  display: block;\n}\n.is-print canvas {\n  width: 20rem !important;\n}\n/*# sourceMappingURL=parking-report-charts.component.css.map */\n"] }]
  }], () => [], { print: [{ type: Input, args: [{ isSignal: true, alias: "print", required: false }] }], _daily_chart_el: [{ type: ViewChild, args: ["dailyChart", { isSignal: true }] }], _level_chart_el: [{ type: ViewChild, args: ["levelChart", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingReportChartsComponent, { className: "ParkingReportChartsComponent", filePath: "apps/concierge/src/app/reports/parking/parking-report-charts.component.ts", lineNumber: 117 });
})();

// apps/concierge/src/app/reports/parking/parking-report-daily-usage.component.ts
var _c02 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c12 = (a0) => ({ key: "booking_count", name: a0 });
var _c2 = (a0) => ({ key: "host_count", name: a0 });
var _c3 = () => ({ key: "active_count", name: "Active" });
var _c4 = (a0) => ({ key: "cancelled_count", name: "Rejected", content: a0 });
var _c5 = (a0) => ({ key: "deleted_count", name: "Cancelled", content: a0 });
var _c6 = (a0, a1) => ({ key: "no_show_count", name: a0, content: a1 });
var _c7 = (a0) => ({ key: "booked_count", name: a0 });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
function ParkingReportDailyUsageComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ParkingReportDailyUsageComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
  }
}
function ParkingReportDailyUsageComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, row_r3.date, "mediumDate"), " ");
  }
}
function ParkingReportDailyUsageComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    const row_r5 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatPercent(data_r4, row_r5.booked_count), " ");
  }
}
function ParkingReportDailyUsageComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    const row_r7 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatPercent(data_r6, row_r7.active_count), " ");
  }
}
var TABLE_METRIC_GUIDE = [
  {
    label: "Unique",
    description: "Number of distinct parking asset IDs booked on the day."
  },
  {
    label: "Host count",
    description: "Number of distinct booking user emails on the day."
  },
  {
    label: "Active",
    description: "Bookings on the day that are not deleted and not cancelled."
  },
  {
    label: "Rejected / Cancelled",
    description: "Displayed as count and percentage of total bookings for that day."
  },
  {
    label: "No shows",
    description: "Active bookings on the day that ended without a check-in; shown as count and percentage of active bookings."
  },
  {
    label: "Booking count",
    description: "Total parking bookings recorded for the day."
  }
];
var ParkingReportDailyUsageComponent = class _ParkingReportDailyUsageComponent {
  constructor() {
    this._state = inject(ParkingReportService);
    this._daily_stats = this._state.daily_stats;
    this.print = input(
      false,
      ...ngDevMode ? [{ debugName: "print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.table_metric_guide = TABLE_METRIC_GUIDE;
    this.daily_stats = computed(
      () => {
        const days = this._daily_stats();
        const list = [];
        for (const date in days) {
          list.push({
            date,
            booking_count: unique(days[date].bookings, "asset_id").length,
            host_count: unique(days[date].bookings, "user_email").length,
            active_count: days[date].bookings.filter((booking) => !booking.deleted && booking.status !== "cancelled").length,
            cancelled_count: days[date].bookings.filter((booking) => !booking.deleted && booking.status === "cancelled").length,
            deleted_count: days[date].bookings.filter((booking) => booking.deleted).length,
            no_show_count: noShowReportBookings(days[date].bookings).length,
            booked_count: days[date].bookings.length
          });
        }
        list.sort((a, b) => a.date.localeCompare(b.date));
        return list;
      },
      ...ngDevMode ? [{ debugName: "daily_stats" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.download = async () => {
      const data = this.daily_stats().map((booking) => __spreadProps(__spreadValues({}, booking), {
        cancelled_count: formatReportPercentage(booking.cancelled_count, booking.booked_count),
        deleted_count: formatReportPercentage(booking.deleted_count, booking.booked_count),
        no_show_count: formatReportPercentage(booking.no_show_count, booking.active_count)
      }));
      downloadFile("report-parking-daily-usage.csv", jsonToCsv(data));
    };
    this.formatPercent = formatReportPercentage;
  }
  static {
    this.\u0275fac = function ParkingReportDailyUsageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingReportDailyUsageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingReportDailyUsageComponent, selectors: [["parking-report-daily-usage"]], inputs: { print: [1, "print"] }, decls: 20, vars: 49, consts: [["date_template", ""], ["booking_percent_template", ""], ["no_show_percent_template", ""], [1, "border-base-300", "bg-base-100", "m-4", "overflow-hidden", "rounded-sm", "border", "shadow"], [1, "border-base-200", "flex", "items-center", "border-b", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], ["title", "Table column calculations", 3, "items", "inline"], [1, "-mx-px", "block", "w-[calc(100%+2px)]", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"]], template: function ParkingReportDailyUsageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h3", 5);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, ParkingReportDailyUsageComponent_Conditional_5_Template, 5, 6, "button", 6);
        \u0275\u0275element(6, "placeos-report-metric-guide", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "simple-table", 8);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275template(14, ParkingReportDailyUsageComponent_ng_template_14_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, ParkingReportDailyUsageComponent_ng_template_16_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(18, ParkingReportDailyUsageComponent_ng_template_18_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const date_template_r8 = \u0275\u0275reference(15);
        const booking_percent_template_r9 = \u0275\u0275reference(17);
        const no_show_percent_template_r10 = \u0275\u0275reference(19);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "APP.CONCIERGE.REPORTS_DAILY_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.print() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.table_metric_guide)("inline", true);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.daily_stats())("columns", \u0275\u0275pureFunction8(40, _c8, \u0275\u0275pureFunction2(23, _c02, \u0275\u0275pipeBind1(8, 11, "FORM.DATE"), date_template_r8), \u0275\u0275pureFunction1(26, _c12, \u0275\u0275pipeBind1(9, 13, "APP.CONCIERGE.REPORTS_UNIQUE_HEADER")), \u0275\u0275pureFunction1(28, _c2, \u0275\u0275pipeBind1(10, 15, "APP.CONCIERGE.REPORTS_HOST_COUNT_HEADER")), \u0275\u0275pureFunction0(30, _c3), \u0275\u0275pureFunction1(31, _c4, booking_percent_template_r9), \u0275\u0275pureFunction1(33, _c5, booking_percent_template_r9), \u0275\u0275pureFunction2(35, _c6, \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.REPORTS_NO_SHOWS"), no_show_percent_template_r10), \u0275\u0275pureFunction1(38, _c7, \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.REPORTS_BOOKING_COUNT_HEADER"))))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(13, 21, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
      }
    }, dependencies: [
      CommonModule,
      SimpleTableComponent,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      ReportMetricGuideComponent,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingReportDailyUsageComponent, [{
    type: Component,
    args: [{ selector: "parking-report-daily-usage", template: `
        <div
            class="border-base-300 bg-base-100 m-4 overflow-hidden rounded-sm border shadow"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
                </h3>
                @if (!print()) {
                    <button
                        icon
                        default
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                        [attr.aria-label]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                    >
                        <icon>download</icon>
                    </button>
                }
                <placeos-report-metric-guide
                    title="Table column calculations"
                    [items]="table_metric_guide"
                    [inline]="true"
                />
            </div>
            <simple-table
                class="-mx-px block w-[calc(100%+2px)] text-sm"
                [data]="daily_stats()"
                [columns]="[
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                    },
                    {
                        key: 'booking_count',
                        name: 'APP.CONCIERGE.REPORTS_UNIQUE_HEADER' | translate,
                    },
                    {
                        key: 'host_count',
                        name:
                            'APP.CONCIERGE.REPORTS_HOST_COUNT_HEADER'
                            | translate,
                    },
                    {
                        key: 'active_count',
                        name: 'Active',
                    },
                    {
                        key: 'cancelled_count',
                        name: 'Rejected',
                        content: booking_percent_template,
                    },
                    {
                        key: 'deleted_count',
                        name: 'Cancelled',
                        content: booking_percent_template,
                    },
                    {
                        key: 'no_show_count',
                        name: 'APP.CONCIERGE.REPORTS_NO_SHOWS' | translate,
                        content: no_show_percent_template,
                    },
                    {
                        key: 'booked_count',
                        name:
                            'APP.CONCIERGE.REPORTS_BOOKING_COUNT_HEADER'
                            | translate,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
            <ng-template #date_template let-row="row">
                <div class="p-4">
                    {{ row.date | date: 'mediumDate' }}
                </div>
            </ng-template>
            <ng-template
                #booking_percent_template
                let-data="data"
                let-row="row"
            >
                <div class="p-4">
                    {{ formatPercent(data, row.booked_count) }}
                </div>
            </ng-template>
            <ng-template
                #no_show_percent_template
                let-data="data"
                let-row="row"
            >
                <div class="p-4">
                    {{ formatPercent(data, row.active_count) }}
                </div>
            </ng-template>
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      SimpleTableComponent,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      ReportMetricGuideComponent
    ] }]
  }], null, { print: [{ type: Input, args: [{ isSignal: true, alias: "print", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingReportDailyUsageComponent, { className: "ParkingReportDailyUsageComponent", filePath: "apps/concierge/src/app/reports/parking/parking-report-daily-usage.component.ts", lineNumber: 170 });
})();

// apps/concierge/src/app/reports/parking/parking-report-list.component.ts
var _c03 = (a0, a1) => ({ key: "asset_id", name: a0, content: a1 });
var _c13 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c22 = (a0, a1) => ({ key: "duration", name: a0, content: a1 });
var _c32 = (a0) => ({ key: "host", name: a0 });
var _c42 = (a0) => ({ key: "plate_number", name: a0 });
var _c52 = (a0) => ({ key: "checked_in", name: a0 });
var _c62 = (a0, a1) => ({ key: "checked_in_at", name: a0, content: a1 });
var _c72 = (a0) => ({ key: "status", name: a0 });
var _c82 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
function ParkingReportListComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ParkingReportListComponent_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
  }
}
function ParkingReportListComponent_ng_template_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "parkingSpace");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const id_r3 = \u0275\u0275nextContext().data;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, id_r3))?.identifier || id_r3, " ");
  }
}
function ParkingReportListComponent_ng_template_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.EMPTY"), " ");
  }
}
function ParkingReportListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, ParkingReportListComponent_ng_template_16_Conditional_1_Template, 3, 5)(2, ParkingReportListComponent_ng_template_16_Conditional_2_Template, 3, 3, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const id_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275conditional(id_r3 ? 1 : 2);
  }
}
function ParkingReportListComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(3, 3, row_r4.date, "mediumDate", ctx_r1.timezone));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(6, 7, row_r4.date, ctx_r1.time_format, ctx_r1.timezone), " - ", \u0275\u0275pipeBind3(7, 11, row_r4.date_end, ctx_r1.time_format, ctx_r1.timezone), " ");
  }
}
function ParkingReportListComponent_ng_template_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(1, 1, row_r5.checked_in_at * 1e3, "shortTime", ctx_r1.timezone), " ");
  }
}
function ParkingReportListComponent_ng_template_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.EMPTY"), " ");
  }
}
function ParkingReportListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, ParkingReportListComponent_ng_template_20_Conditional_1_Template, 2, 5)(2, ParkingReportListComponent_ng_template_20_Conditional_2_Template, 3, 3, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r5.checked_in_at ? 1 : 2);
  }
}
function ParkingReportListComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "duration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, row_r6.duration, true), " ");
  }
}
var TABLE_METRIC_GUIDE2 = [
  {
    label: "Bay number",
    description: "Resolves the booking asset ID to the parking space identifier."
  },
  {
    label: "Duration",
    description: "Formats the actual booked duration in hours and minutes."
  },
  {
    label: "Reserved for",
    description: "Booking user name, falling back to user email."
  },
  {
    label: "Checked in",
    description: "True when the booking checked-in flag is set."
  },
  {
    label: "Checked-in at",
    description: "Time the booking was checked in; empty when no check-in has been recorded."
  },
  {
    label: "Status",
    description: "Cancelled bookings show Cancelled; rejected bookings show Rejected; otherwise the booking status is shown, defaulting to tentative."
  }
];
var ParkingReportListComponent = class _ParkingReportListComponent {
  constructor() {
    this._state = inject(ParkingReportService);
    this._bookings = this._state.bookings;
    this._parking_space = new ParkingSpacePipe();
    this.print = input(
      false,
      ...ngDevMode ? [{ debugName: "print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.table_metric_guide = TABLE_METRIC_GUIDE2;
    this.parking_bookings = computed(
      () => {
        const list = [];
        for (const booking of this._bookings()) {
          list.push({
            asset_id: booking.asset_id,
            date: booking.date,
            date_end: booking.date_end || booking.booking_end * 1e3,
            duration: booking.duration,
            all_day: booking.all_day,
            host: booking.user_name || booking.user_email,
            plate_number: booking.extension_data?.plate_number || "",
            checked_in: i18n(booking.checked_in ? "COMMON.YES" : "COMMON.NO"),
            checked_in_at: booking.checked_in_at ? booking.checked_in_at : 0,
            status: reportBookingStatus(booking),
            self_registered: i18n(booking.extension_data?.self_registered ? "COMMON.YES" : "COMMON.NO")
          });
        }
        list.sort((a, b) => a.date - b.date);
        return list;
      },
      ...ngDevMode ? [{ debugName: "parking_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.download = async () => {
      const data = this.parking_bookings();
      for (const bkn of data) {
        bkn.date = this._state.formatBookingDate(bkn.date, "yyyy-MM-dd HH:mm");
        bkn.checked_in_at = bkn.checked_in_at ? this._state.formatBookingDate(bkn.checked_in_at * 1e3, "yyyy-MM-dd HH:mm") : "";
      }
      const rows = await Promise.all(data.map(async (bkn) => ({
        bay_number: await this._bayNumber(bkn.asset_id),
        date: bkn.date,
        duration: bkn.duration,
        all_day: bkn.all_day,
        host: bkn.host,
        plate_number: bkn.plate_number,
        checked_in: bkn.checked_in,
        checked_in_at: bkn.checked_in_at,
        status: bkn.status,
        self_registered: bkn.self_registered
      })));
      downloadFile("report-parking-daily-usage.csv", jsonToCsv(rows));
    };
  }
  get timezone() {
    return this._state.timezone;
  }
  get time_format() {
    return this._state.time_format;
  }
  async _bayNumber(asset_id) {
    if (!asset_id)
      return "";
    const space = await this._parking_space.transform(asset_id);
    return space.identifier || asset_id;
  }
  static {
    this.\u0275fac = function ParkingReportListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingReportListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingReportListComponent, selectors: [["parking-report-list"]], inputs: { print: [1, "print"] }, decls: 24, vars: 55, consts: [["bay_template", ""], ["date_template", ""], ["checked_in_at_template", ""], ["duration_template", ""], [1, "border-base-300", "bg-base-100", "m-4", "overflow-hidden", "rounded-sm", "border", "shadow"], [1, "border-base-200", "flex", "items-center", "border-b", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], ["title", "Table column calculations", 3, "items", "inline"], [1, "-mx-px", "block", "w-[calc(100%+2px)]", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"], [1, "opacity-70"], [1, "text-xs", "opacity-70"]], template: function ParkingReportListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h3", 6);
        \u0275\u0275text(3, "Parking Bookings");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, ParkingReportListComponent_Conditional_4_Template, 5, 6, "button", 7);
        \u0275\u0275element(5, "placeos-report-metric-guide", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "simple-table", 9);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275template(16, ParkingReportListComponent_ng_template_16_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(18, ParkingReportListComponent_ng_template_18_Template, 8, 15, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(20, ParkingReportListComponent_ng_template_20_Template, 3, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(22, ParkingReportListComponent_ng_template_22_Template, 3, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const bay_template_r7 = \u0275\u0275reference(17);
        const date_template_r8 = \u0275\u0275reference(19);
        const checked_in_at_template_r9 = \u0275\u0275reference(21);
        const duration_template_r10 = \u0275\u0275reference(23);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.print() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.table_metric_guide)("inline", true);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.parking_bookings())("columns", \u0275\u0275pureFunction8(46, _c82, \u0275\u0275pureFunction2(26, _c03, \u0275\u0275pipeBind1(7, 8, "APP.CONCIERGE.PARKING_BAY_NUMBER"), bay_template_r7), \u0275\u0275pureFunction2(29, _c13, \u0275\u0275pipeBind1(8, 10, "FORM.DATE"), date_template_r8), \u0275\u0275pureFunction2(32, _c22, \u0275\u0275pipeBind1(9, 12, "FORM.DURATION"), duration_template_r10), \u0275\u0275pureFunction1(35, _c32, \u0275\u0275pipeBind1(10, 14, "APP.CONCIERGE.PARKING_RESERVED_FOR")), \u0275\u0275pureFunction1(37, _c42, \u0275\u0275pipeBind1(11, 16, "BOOKINGS.PARKING_PLATE_NUMBER")), \u0275\u0275pureFunction1(39, _c52, \u0275\u0275pipeBind1(12, 18, "COMMON.CHECKED_IN")), \u0275\u0275pureFunction2(41, _c62, \u0275\u0275pipeBind1(13, 20, "COMMON.CHECKED_IN_AT"), checked_in_at_template_r9), \u0275\u0275pureFunction1(44, _c72, \u0275\u0275pipeBind1(14, 22, "COMMON.STATUS"))))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(15, 24, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
      }
    }, dependencies: [
      CommonModule,
      SimpleTableComponent,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      ReportMetricGuideComponent,
      AsyncPipe,
      DatePipe,
      DurationPipe,
      TranslatePipe,
      ParkingSpacePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingReportListComponent, [{
    type: Component,
    args: [{ selector: "parking-report-list", template: `
        <div
            class="border-base-300 bg-base-100 m-4 overflow-hidden rounded-sm border shadow"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">Parking Bookings</h3>
                @if (!print()) {
                    <button
                        icon
                        default
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                        [attr.aria-label]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                    >
                        <icon>download</icon>
                    </button>
                }
                <placeos-report-metric-guide
                    title="Table column calculations"
                    [items]="table_metric_guide"
                    [inline]="true"
                />
            </div>
            <simple-table
                class="-mx-px block w-[calc(100%+2px)] text-sm"
                [data]="parking_bookings()"
                [columns]="[
                    {
                        key: 'asset_id',
                        name: 'APP.CONCIERGE.PARKING_BAY_NUMBER' | translate,
                        content: bay_template,
                    },
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                    },
                    {
                        key: 'duration',
                        name: 'FORM.DURATION' | translate,
                        content: duration_template,
                    },
                    {
                        key: 'host',
                        name: 'APP.CONCIERGE.PARKING_RESERVED_FOR' | translate,
                    },
                    {
                        key: 'plate_number',
                        name: 'BOOKINGS.PARKING_PLATE_NUMBER' | translate,
                    },
                    {
                        key: 'checked_in',
                        name: 'COMMON.CHECKED_IN' | translate,
                    },
                    {
                        key: 'checked_in_at',
                        name: 'COMMON.CHECKED_IN_AT' | translate,
                        content: checked_in_at_template,
                    },
                    {
                        key: 'status',
                        name: 'COMMON.STATUS' | translate,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
            <ng-template #bay_template let-id="data">
                <div class="p-4">
                    @if (id) {
                        {{ (id | parkingSpace | async)?.identifier || id }}
                    } @else {
                        <span class="opacity-70">
                            {{ 'COMMON.EMPTY' | translate }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #date_template let-row="row">
                <div class="p-4">
                    <div>{{ row.date | date: 'mediumDate' : timezone }}</div>
                    <div class="text-xs opacity-70">
                        {{ row.date | date: time_format : timezone }} -
                        {{ row.date_end | date: time_format : timezone }}
                    </div>
                </div>
            </ng-template>
            <ng-template #checked_in_at_template let-row="row">
                <div class="p-4">
                    @if (row.checked_in_at) {
                        {{
                            row.checked_in_at * 1000
                                | date: 'shortTime' : timezone
                        }}
                    } @else {
                        <span class="opacity-70">
                            {{ 'COMMON.EMPTY' | translate }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #duration_template let-row="row">
                <div class="p-4">
                    {{ row.duration | duration: true }}
                </div>
            </ng-template>
        </div>
    `, imports: [
      CommonModule,
      SimpleTableComponent,
      DurationPipe,
      TranslatePipe,
      ParkingSpacePipe,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      ReportMetricGuideComponent
    ] }]
  }], null, { print: [{ type: Input, args: [{ isSignal: true, alias: "print", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingReportListComponent, { className: "ParkingReportListComponent", filePath: "apps/concierge/src/app/reports/parking/parking-report-list.component.ts", lineNumber: 181 });
})();

// apps/concierge/src/app/reports/parking/parking-report-no-shows.component.ts
var _c04 = (a0, a1) => ({ key: "host", name: a0, content: a1, size: "minmax(10rem, 1fr)" });
var _c14 = (a0) => ({ key: "count", size: "9rem", name: a0 });
var _c23 = (a0, a1) => ({ key: "incidents", name: " ", content: a0, show: a1, size: "3.25rem", sortable: false });
var _c33 = (a0, a1, a2) => [a0, a1, a2];
function ParkingReportNoShowsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ParkingReportNoShowsComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
  }
}
function ParkingReportNoShowsComponent_ng_template_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.email);
  }
}
function ParkingReportNoShowsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ParkingReportNoShowsComponent_ng_template_11_Conditional_3_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.host);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.email && row_r3.email !== row_r3.host ? 3 : -1);
  }
}
function ParkingReportNoShowsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 13);
    \u0275\u0275listener("click", function ParkingReportNoShowsComponent_ng_template_13_Template_button_click_1_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleRow(row_r5.id));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", !!ctx_r1.show_children()[row_r5.id]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.show_children()[row_r5.id] ? "expand_less" : "expand_more");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.host);
  }
}
function ParkingReportNoShowsComponent_ng_template_15_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 22);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 23);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "parkingSpace");
    \u0275\u0275pipe(14, "async");
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const incident_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(3, 5, incident_r6.date, "mediumDate", ctx_r1.timezone), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(6, 9, incident_r6.date, ctx_r1.time_format, ctx_r1.timezone), " - ", \u0275\u0275pipeBind3(7, 13, incident_r6.date_end, ctx_r1.time_format, ctx_r1.timezone), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", incident_r6.location || \u0275\u0275pipeBind1(10, 17, "COMMON.EMPTY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 21, \u0275\u0275pipeBind1(13, 19, incident_r6.asset_id))?.identifier || incident_r6.asset_id || \u0275\u0275pipeBind1(15, 23, "COMMON.EMPTY"), " ");
  }
}
function ParkingReportNoShowsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "table", 16)(2, "thead", 17)(3, "tr")(4, "th", 18);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 18);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 19);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody", 20);
    \u0275\u0275repeaterCreate(14, ParkingReportNoShowsComponent_ng_template_15_For_15_Template, 16, 25, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "FORM.DATE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "COMMON.LOCATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 7, "APP.CONCIERGE.PARKING_BAY_NUMBER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(row_r7.incidents);
  }
}
var ParkingReportNoShowsComponent = class _ParkingReportNoShowsComponent {
  constructor() {
    this._state = inject(ParkingReportService);
    this._org = inject(OrganisationService);
    this._bookings = this._state.bookings;
    this._parking_space = new ParkingSpacePipe();
    this.print = input(
      false,
      ...ngDevMode ? [{ debugName: "print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.no_shows = computed(
      () => {
        const list = noShowReportBookings(this._bookings()).map((booking, index) => {
          const level = this._org.levelWithID(booking.zones || []);
          const building = this._org.find(level?.parent_id);
          const email = booking.user_email?.trim().toLowerCase() || "";
          return {
            user_key: email ? `email:${email}` : booking.user_id ? `id:${booking.user_id}` : `booking:${index}`,
            email,
            host: booking.user_name || email || booking.user_id,
            date: booking.date,
            date_end: booking.date_end || booking.booking_end * 1e3,
            location: [
              building?.display_name || building?.name,
              level?.display_name || level?.name
            ].filter(Boolean).join(", "),
            asset_id: booking.asset_id
          };
        });
        list.sort((a, b) => a.date - b.date);
        return list;
      },
      ...ngDevMode ? [{ debugName: "no_shows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user_no_shows = computed(
      () => {
        const incidents = this.no_shows();
        const users = /* @__PURE__ */ new Map();
        for (const incident of incidents) {
          const user = users.get(incident.user_key) || {
            id: incident.user_key,
            host: incident.host,
            email: incident.email,
            count: 0,
            incidents: []
          };
          user.incidents.push(incident);
          user.count += 1;
          users.set(incident.user_key, user);
        }
        return [...users.values()].sort((a, b) => b.count - a.count);
      },
      ...ngDevMode ? [{ debugName: "user_no_shows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._expanded = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_expanded" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this.user_no_shows,
      computation: () => ({})
    }));
    this.show_children = computed(
      () => this.print() ? Object.fromEntries(this.user_no_shows().map((row) => [row.id, true])) : this._expanded(),
      ...ngDevMode ? [{ debugName: "show_children" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.download = async () => {
      const rows = await Promise.all(this.user_no_shows().map(async (row) => ({
        host: row.host,
        email: row.email,
        no_show_count: row.count,
        incidents: (await Promise.all(row.incidents.map(async (incident) => [
          this._state.formatBookingDate(incident.date, "yyyy-MM-dd HH:mm"),
          this._state.formatBookingDate(incident.date_end, "yyyy-MM-dd HH:mm"),
          incident.location,
          await this._bayNumber(incident.asset_id)
        ].join(" | ")))).join("\n")
      })));
      downloadFile("report-parking-no-shows.csv", jsonToCsv(rows));
    };
  }
  get timezone() {
    return this._state.timezone;
  }
  get time_format() {
    return this._state.time_format;
  }
  toggleRow(id) {
    this._expanded.update((expanded) => __spreadProps(__spreadValues({}, expanded), {
      [id]: !expanded[id]
    }));
  }
  async _bayNumber(asset_id) {
    if (!asset_id)
      return "";
    const space = await this._parking_space.transform(asset_id);
    return space.identifier || asset_id;
  }
  static {
    this.\u0275fac = function ParkingReportNoShowsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingReportNoShowsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingReportNoShowsComponent, selectors: [["parking-report-no-shows"]], inputs: { print: [1, "print"] }, decls: 17, vars: 29, consts: [["host_template", ""], ["expand_template", ""], ["incidents_template", ""], [1, "border-base-300", "bg-base-100", "m-4", "overflow-hidden", "rounded-sm", "border", "shadow"], [1, "border-base-200", "flex", "items-center", "border-b", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], [1, "overflow-x-auto", "print:overflow-visible"], [1, "-mx-px", "block", "w-[calc(100%+2px)]", "min-w-[32rem]", "text-sm", "print:min-w-0", 3, "data", "columns", "sortable", "child_template", "show_children", "page_size", "empty_message"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [1, "min-w-0", "p-4", "break-words"], [1, "text-xs", "opacity-70"], [1, "p-2"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click"], [1, "sr-only"], [1, "bg-base-200/40", "px-4", "py-2"], [1, "w-full", "text-left"], [1, "text-xs", "font-medium", "opacity-70"], ["scope", "col", 1, "pr-4", "pb-1"], ["scope", "col", 1, "pb-1"], [1, "divide-base-200", "divide-y"], [1, "py-2", "pr-4", "align-top", "whitespace-nowrap"], [1, "py-2", "pr-4", "align-top"], [1, "py-2", "align-top"]], template: function ParkingReportNoShowsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h3", 5);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, ParkingReportNoShowsComponent_Conditional_5_Template, 5, 6, "button", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 7);
        \u0275\u0275element(7, "simple-table", 8);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, ParkingReportNoShowsComponent_ng_template_11_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(13, ParkingReportNoShowsComponent_ng_template_13_Template, 6, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(15, ParkingReportNoShowsComponent_ng_template_15_Template, 16, 9, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const host_template_r8 = \u0275\u0275reference(12);
        const expand_template_r9 = \u0275\u0275reference(14);
        const incidents_template_r10 = \u0275\u0275reference(16);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "APP.CONCIERGE.REPORTS_NO_SHOWS"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.print() ? 5 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("data", ctx.user_no_shows())("columns", \u0275\u0275pureFunction3(25, _c33, \u0275\u0275pureFunction2(17, _c04, \u0275\u0275pipeBind1(8, 11, "APP.CONCIERGE.PARKING_RESERVED_FOR"), host_template_r8), \u0275\u0275pureFunction1(20, _c14, \u0275\u0275pipeBind1(9, 13, "APP.CONCIERGE.REPORTS_NO_SHOWS")), \u0275\u0275pureFunction2(22, _c23, expand_template_r9, !ctx.print())))("sortable", true)("child_template", incidents_template_r10)("show_children", ctx.show_children())("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(10, 15, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
      }
    }, dependencies: [
      CommonModule,
      SimpleTableComponent,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      AsyncPipe,
      DatePipe,
      TranslatePipe,
      ParkingSpacePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingReportNoShowsComponent, [{
    type: Component,
    args: [{ selector: "parking-report-no-shows", template: `
        <div
            class="border-base-300 bg-base-100 m-4 overflow-hidden rounded-sm border shadow"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_NO_SHOWS' | translate }}
                </h3>
                @if (!print()) {
                    <button
                        icon
                        default
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                        [attr.aria-label]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                    >
                        <icon>download</icon>
                    </button>
                }
            </div>
            <div class="overflow-x-auto print:overflow-visible">
                <simple-table
                    class="-mx-px block w-[calc(100%+2px)] min-w-[32rem] text-sm print:min-w-0"
                    [data]="user_no_shows()"
                    [columns]="[
                        {
                            key: 'host',
                            name:
                                'APP.CONCIERGE.PARKING_RESERVED_FOR'
                                | translate,
                            content: host_template,
                            size: 'minmax(10rem, 1fr)',
                        },
                        {
                            key: 'count',
                            size: '9rem',
                            name: 'APP.CONCIERGE.REPORTS_NO_SHOWS' | translate,
                        },
                        {
                            key: 'incidents',
                            name: ' ',
                            content: expand_template,
                            show: !print(),
                            size: '3.25rem',
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [child_template]="incidents_template"
                    [show_children]="show_children()"
                    [page_size]="print() ? 0 : 10"
                    [empty_message]="
                        'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                    "
                ></simple-table>
            </div>
            <ng-template #host_template let-row="row">
                <div class="min-w-0 p-4 break-words">
                    <div>{{ row.host }}</div>
                    @if (row.email && row.email !== row.host) {
                        <div class="text-xs opacity-70">{{ row.email }}</div>
                    }
                </div>
            </ng-template>
            <ng-template #expand_template let-row="row">
                    <div class="p-2">
                    <button
                        icon default
                        type="button"
                        matRipple
                        [attr.aria-expanded]="!!show_children()[row.id]"
                        (click)="toggleRow(row.id)"
                    >
                        <icon>{{
                            show_children()[row.id]
                                ? 'expand_less'
                                : 'expand_more'
                        }}</icon>
                        <span class="sr-only">{{ row.host }}</span>
                    </button>
                    </div>
            </ng-template>
            <ng-template #incidents_template let-row="row">
                <div class="bg-base-200/40 px-4 py-2">
                    <table class="w-full text-left">
                        <thead class="text-xs font-medium opacity-70">
                            <tr>
                                <th scope="col" class="pr-4 pb-1">
                                    {{ 'FORM.DATE' | translate }}
                                </th>
                                <th scope="col" class="pr-4 pb-1">
                                    {{ 'COMMON.LOCATION' | translate }}
                                </th>
                                <th scope="col" class="pb-1">
                                    {{
                                        'APP.CONCIERGE.PARKING_BAY_NUMBER'
                                            | translate
                                    }}
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-base-200 divide-y">
                            @for (incident of row.incidents; track incident) {
                                <tr>
                                    <td
                                        class="py-2 pr-4 align-top whitespace-nowrap"
                                    >
                                        {{
                                            incident.date
                                                | date: 'mediumDate' : timezone
                                        }}
                                        <div class="text-xs opacity-70">
                                            {{
                                                incident.date
                                                    | date
                                                        : time_format
                                                        : timezone
                                            }}
                                            -
                                            {{
                                                incident.date_end
                                                    | date
                                                        : time_format
                                                        : timezone
                                            }}
                                        </div>
                                    </td>
                                    <td class="py-2 pr-4 align-top">
                                        {{
                                            incident.location ||
                                                ('COMMON.EMPTY' | translate)
                                        }}
                                    </td>
                                    <td class="py-2 align-top">
                                        {{
                                            (
                                                incident.asset_id
                                                | parkingSpace
                                                | async
                                            )?.identifier ||
                                                incident.asset_id ||
                                                ('COMMON.EMPTY' | translate)
                                        }}
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </ng-template>
        </div>
    `, imports: [
      CommonModule,
      SimpleTableComponent,
      TranslatePipe,
      ParkingSpacePipe,
      IconComponent,
      MatRippleModule,
      MatTooltipModule
    ] }]
  }], null, { print: [{ type: Input, args: [{ isSignal: true, alias: "print", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingReportNoShowsComponent, { className: "ParkingReportNoShowsComponent", filePath: "apps/concierge/src/app/reports/parking/parking-report-no-shows.component.ts", lineNumber: 191 });
})();

// apps/concierge/src/app/reports/parking/parking-report-overall.component.ts
var ParkingReportOverallComponent = class _ParkingReportOverallComponent {
  constructor() {
    this._state = inject(ParkingReportService);
    this._bookings = this._state.bookings;
    this._options = this._state.options;
    this._booking_stats = computed(
      () => reportBookingStatusStats(this._bookings()),
      ...ngDevMode ? [{ debugName: "_booking_stats" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.total_count = computed(
      () => this._booking_stats().total_count || 0,
      ...ngDevMode ? [{ debugName: "total_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_count = computed(
      () => this._booking_stats().active_count || 0,
      ...ngDevMode ? [{ debugName: "active_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cancelled_count = computed(
      () => this._booking_stats().cancelled_count || 0,
      ...ngDevMode ? [{ debugName: "cancelled_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.deleted_count = computed(
      () => this._booking_stats().deleted_count || 0,
      ...ngDevMode ? [{ debugName: "deleted_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.no_shows = computed(
      () => formatReportPercentage(noShowReportBookings(this._bookings()).length, this.active_count()),
      ...ngDevMode ? [{ debugName: "no_shows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.business_days = computed(
      () => {
        const { start, end } = this._options();
        return differenceInBusinessDays(endOfDay(end || Date.now()).valueOf() + 1, startOfDay(start || Date.now())) || 1;
      },
      ...ngDevMode ? [{ debugName: "business_days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.avg_length = computed(
      () => {
        const events = activeReportBookings(this._bookings());
        const avg_minutes = events.reduce((c, i) => c + i.duration, 0) / events.length || 0;
        return formatDuration({
          hours: Math.round(avg_minutes / 60 * 10) / 10
        });
      },
      ...ngDevMode ? [{ debugName: "avg_length" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function ParkingReportOverallComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingReportOverallComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingReportOverallComponent, selectors: [["parking-report-overall"]], decls: 43, vars: 28, consts: [[1, "grid", "grid-cols-1", "gap-4", "px-4", "pb-4", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "xl:grid-cols-5"], [1, "border-base-300", "bg-base-100", "rounded-sm", "border", "p-4", "shadow"], [1, "text-sm"], [1, "text-2xl"]], template: function ParkingReportOverallComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(7, "div", 1)(8, "h3", 2);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(11, "p", 3);
        \u0275\u0275text(12);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(13, "div", 1)(14, "h3", 2);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(17, "p", 3);
        \u0275\u0275text(18);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(19, "div", 1)(20, "h3", 2);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(23, "p", 3);
        \u0275\u0275text(24);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(25, "div", 1)(26, "h3", 2);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(29, "p", 3);
        \u0275\u0275text(30);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(31, "div", 1)(32, "h3", 2);
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(35, "p", 3);
        \u0275\u0275text(36);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(37, "div", 1)(38, "h3", 2);
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(41, "p", 3);
        \u0275\u0275text(42);
        \u0275\u0275domElementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 14, "APP.CONCIERGE.REPORTS_BUSINESS_DAYS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.business_days() || 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 16, "APP.CONCIERGE.REPORTS_TOTAL_RESERVATIONS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.total_count() || 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 18, "APP.CONCIERGE.REPORTS_ALLOCATIONS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.active_count() || 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 20, "APP.CONCIERGE.REPORTS_REJECTED"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.cancelled_count() || 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 22, "APP.CONCIERGE.REPORTS_CANCELLED"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.deleted_count() || 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 24, "APP.CONCIERGE.REPORTS_NO_SHOWS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.no_shows());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 26, "APP.CONCIERGE.REPORTS_AVERAGE_LENGTH"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.avg_length() || "0");
      }
    }, dependencies: [TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingReportOverallComponent, [{
    type: Component,
    args: [{ selector: "parking-report-overall", template: `
        <div
            class="grid grid-cols-1 gap-4 px-4 pb-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
            <div
                class="border-base-300 bg-base-100 rounded-sm border p-4 shadow"
            >
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_BUSINESS_DAYS' | translate }}
                </h3>
                <p class="text-2xl">{{ business_days() || 0 }}</p>
            </div>
            <div
                class="border-base-300 bg-base-100 rounded-sm border p-4 shadow"
            >
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_TOTAL_RESERVATIONS' | translate }}
                </h3>
                <p class="text-2xl">{{ total_count() || 0 }}</p>
            </div>
            <div
                class="border-base-300 bg-base-100 rounded-sm border p-4 shadow"
            >
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_ALLOCATIONS' | translate }}
                </h3>
                <p class="text-2xl">{{ active_count() || 0 }}</p>
            </div>
            <div
                class="border-base-300 bg-base-100 rounded-sm border p-4 shadow"
            >
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_REJECTED' | translate }}
                </h3>
                <p class="text-2xl">{{ cancelled_count() || 0 }}</p>
            </div>
            <div
                class="border-base-300 bg-base-100 rounded-sm border p-4 shadow"
            >
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_CANCELLED' | translate }}
                </h3>
                <p class="text-2xl">{{ deleted_count() || 0 }}</p>
            </div>
            <div
                class="border-base-300 bg-base-100 rounded-sm border p-4 shadow"
            >
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_NO_SHOWS' | translate }}
                </h3>
                <p class="text-2xl">{{ no_shows() }}</p>
            </div>
            <div
                class="border-base-300 bg-base-100 rounded-sm border p-4 shadow"
            >
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_AVERAGE_LENGTH' | translate }}
                </h3>
                <p class="text-2xl">{{ avg_length() || '0' }}</p>
            </div>
        </div>
    `, imports: [TranslatePipe] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingReportOverallComponent, { className: "ParkingReportOverallComponent", filePath: "apps/concierge/src/app/reports/parking/parking-report-overall.component.ts", lineNumber: 80 });
})();

// apps/concierge/src/app/reports/parking/parking-report.component.ts
function ParkingReportComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "placeos-report-metric-guide", 9)(1, "parking-report-overall")(2, "parking-report-charts")(3, "parking-report-list", 10)(4, "parking-report-no-shows", 10)(5, "parking-report-daily-usage", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("absolute", true)("items", ctx_r0.metric_guide);
    \u0275\u0275advance(3);
    \u0275\u0275property("print", ctx_r0.printing());
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing());
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing());
  }
}
function ParkingReportComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.REPORTS_EMPTY"), " ");
  }
}
function ParkingReportComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ParkingReportComponent_Conditional_9_Conditional_0_Template, 6, 5)(1, ParkingReportComponent_Conditional_9_Conditional_1_Template, 4, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.total_count() ? 0 : 1);
  }
}
function ParkingReportComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 12);
    \u0275\u0275elementStart(2, "p", 11);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.CONCIERGE.REPORTS_LOADING"), " ");
  }
}
var METRIC_GUIDE = [
  {
    label: "Business days",
    description: "Number of business days in the selected reporting range."
  },
  {
    label: "Total reservations",
    description: "All parking bookings returned for the selected dates and zones, including active, rejected, and cancelled records."
  },
  {
    label: "Active / Rejected / Cancelled",
    description: "Active excludes cancelled and rejected bookings. Rejected uses bookings with cancelled or rejected status. Cancelled uses bookings flagged as cancelled."
  },
  {
    label: "Average length",
    description: "Sum of active reservation durations divided by the number of active reservations."
  },
  {
    label: "No shows",
    description: "Active reservations that ended without a check-in; percentage is of active reservations."
  },
  {
    label: "Daily usage",
    description: "Counts unique parking spaces, unique hosts, active reservations, cancellations, deletions, no shows, and total reservations for each day."
  }
];
var ParkingReportComponent = class _ParkingReportComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(ParkingReportService);
    this._settings = inject(SettingsService);
    this._route = inject(ActivatedRoute);
    this._org = inject(OrganisationService);
    this._bookings = this._state.bookings;
    this.printing = signal(
      false,
      ...ngDevMode ? [{ debugName: "printing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.metric_guide = METRIC_GUIDE;
    this.total_count = computed(
      () => this._bookings().length || 0,
      ...ngDevMode ? [{ debugName: "total_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._state.loading;
    this.downloadReport = () => this._state.downloadReport();
    this.generateReport = () => this._state.generateReport();
    this.logo = computed(
      () => {
        this._org.active_building();
        return (this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {};
      },
      ...ngDevMode ? [{ debugName: "logo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("start")) {
        this._state.setOptions({ start: +params.get("start") });
      }
      if (params.has("end")) {
        this._state.setOptions({ end: +params.get("end") });
      }
      if (params.has("zones") || params.has("zone_ids")) {
        const zones = (params.get("zones") || params.get("zone_ids")).split(",");
        if (zones.length)
          this._state.setOptions({ zones });
      } else {
        this._state.setOptions({ zones: [] });
      }
    }));
  }
  static {
    this.\u0275fac = function ParkingReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingReportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingReportComponent, selectors: [["", "parking-report", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 7, consts: [["resource_type", "parking", 3, "printing", "download", "generate", "loading", "has_data"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "print:h-auto", "print:overflow-visible"], [1, "w-full"], [1, "bg-base-200", "m-4", "flex", "items-center", "rounded-sm", "p-4"], ["alt", "", "auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "px-2", "text-2xl", "font-medium"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [1, "screen-only", "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [3, "absolute", "items"], [3, "print"], [1, "opacity-70"], [1, "mb-4", 3, "diameter"]], template: function ParkingReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "reports-options", 0);
        \u0275\u0275listener("printing", function ParkingReportComponent_Template_reports_options_printing_0_listener($event) {
          return ctx.printing.set($event);
        })("download", function ParkingReportComponent_Template_reports_options_download_0_listener() {
          return ctx.downloadReport();
        })("generate", function ParkingReportComponent_Template_reports_options_generate_0_listener() {
          return ctx.generateReport();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4)(5, "div", 5);
        \u0275\u0275elementStart(6, "h2", 6);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(9, ParkingReportComponent_Conditional_9_Template, 2, 1)(10, ParkingReportComponent_Conditional_10_Template, 5, 4, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("loading", !!ctx.loading())("has_data", !!ctx.total_count());
        \u0275\u0275advance(4);
        \u0275\u0275property("source", ctx.logo()?.src || ctx.logo());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "APP.CONCIERGE.REPORTS_PARKING_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 9 : 10);
      }
    }, dependencies: [
      MatProgressSpinnerModule,
      MatProgressSpinner,
      AuthenticatedImageDirective,
      ReportMetricGuideComponent,
      ParkingReportOverallComponent,
      ParkingReportDailyUsageComponent,
      ParkingReportChartsComponent,
      ParkingReportListComponent,
      ParkingReportNoShowsComponent,
      ReportsOptionsComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=parking-report.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingReportComponent, [{
    type: Component,
    args: [{ selector: "[parking-report]", template: `
        <reports-options
            resource_type="parking"
            (printing)="printing.set($event)"
            [loading]="!!loading()"
            [has_data]="!!total_count()"
            (download)="downloadReport()"
            (generate)="generateReport()"
        />
        <div
            class="relative h-1/2 w-full flex-1 overflow-auto print:h-auto print:overflow-visible"
        >
            <div class="w-full">
                <div class="bg-base-200 m-4 flex items-center rounded-sm p-4">
                    <img
                        alt=""
                        auth
                        class="h-12"
                        [source]="logo()?.src || logo()"
                    />
                    <div class="flex-1"></div>
                    <h2 class="px-2 text-2xl font-medium">
                        {{ 'APP.CONCIERGE.REPORTS_PARKING_HEADER' | translate }}
                    </h2>
                </div>
            </div>
            @if (!loading()) {
                @if (total_count()) {
                    <placeos-report-metric-guide
                        [absolute]="true"
                        [items]="metric_guide"
                    />
                    <parking-report-overall></parking-report-overall>
                    <parking-report-charts></parking-report-charts>
                    <parking-report-list
                        [print]="printing()"
                    ></parking-report-list>
                    <parking-report-no-shows
                        [print]="printing()"
                    ></parking-report-no-shows>
                    <parking-report-daily-usage
                        [print]="printing()"
                    ></parking-report-daily-usage>
                } @else {
                    <div
                        class="screen-only flex h-full w-full flex-col items-center p-8"
                    >
                        <p class="opacity-70">
                            {{ 'APP.CONCIERGE.REPORTS_EMPTY' | translate }}
                        </p>
                    </div>
                }
            } @else {
                <div class="flex h-full w-full flex-col items-center p-8">
                    <mat-spinner [diameter]="32" class="mb-4"></mat-spinner>
                    <p class="opacity-70">
                        {{ 'APP.CONCIERGE.REPORTS_LOADING' | translate }}
                    </p>
                </div>
            }
        </div>
    `, imports: [
      MatProgressSpinnerModule,
      TranslatePipe,
      AuthenticatedImageDirective,
      ReportMetricGuideComponent,
      ParkingReportOverallComponent,
      ParkingReportDailyUsageComponent,
      ParkingReportChartsComponent,
      ParkingReportListComponent,
      ParkingReportNoShowsComponent,
      ReportsOptionsComponent
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/parking/parking-report.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=parking-report.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingReportComponent, { className: "ParkingReportComponent", filePath: "apps/concierge/src/app/reports/parking/parking-report.component.ts", lineNumber: 144 });
})();
export {
  ParkingReportComponent
};
//# debugId=b8712a94-622f-539f-b96c-8bb3f6bc85c5
//# sourceMappingURL=parking-report.component-GIAA36R7.js.map
