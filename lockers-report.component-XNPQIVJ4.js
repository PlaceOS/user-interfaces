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
  reportBookingStatus,
  reportBookingStatusStats
} from "./chunk-M7D6LSL2.js";
import "./chunk-LCHSZWKM.js";
import "./chunk-JNHYREVF.js";
import "./chunk-ULYE3EO5.js";
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
  flatten,
  format,
  formatDuration,
  i18n,
  isSameDay,
  jsonToCsv,
  startOfDay,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction7,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-QAVCSYNX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/reports/lockers/lockers-report.service.ts
var LockersReportService = class _LockersReportService {
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
          const date = format(booking.date, "yyyy-MM-dd");
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
    this._params = computed(() => {
      const use_region = !!this._settings.get("app.use_region");
      const building = this._org.active_building();
      const region = this._org.active_region();
      let zones = (this._options().zones || []).filter((z) => z !== -1 && z !== "All");
      if (!zones.length) {
        zones = (use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(building)).filter((_) => _.tags.includes("lockers")).map((_) => _.id);
      }
      return {
        zones,
        scope_id: use_region ? region?.id : building?.id,
        version: this._report.inventory_version()
      };
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_params" } : (
      /* istanbul ignore next */
      {}
    )), { equal: (a, b) => JSON.stringify(a) === JSON.stringify(b) }));
    this._counts = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_counts" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._params(),
      defaultValue: {},
      loader: async ({ params: { zones, scope_id } }) => {
        if (!zones.length || !scope_id)
          return {};
        const lockers = await this._report.queryLockers(scope_id).catch(() => []);
        const list = zones.map((z) => [
          z,
          lockers.filter((locker) => locker.zones?.includes(z)).length
        ]);
        const mapping = {};
        list.forEach(([id, count]) => mapping[id] = Math.max(count || 0, 1));
        return mapping;
      }
    }));
    this.counts = this._counts.value;
  }
  setOptions(options) {
    this._options.set(__spreadValues(__spreadValues({}, this._options()), options));
    this._report.setOptions(options);
  }
  generateReport() {
    this._report.setOptions({ type: "lockers" });
    this._report.generateReport();
  }
  async downloadReport() {
    const options = this._options();
    const bookings = this.bookings();
    if (!bookings?.length)
      return;
    const is_same = isSameDay(options.start, options.end);
    const date = is_same ? format(options.start, "yyyy-MM-dd") : `${format(options.start, "yyyy-MM-dd")}-${format(options.end, "yyyy-MM-dd")}`;
    downloadFile(`report+assets+${date}.tsv`, jsonToCsv(bookings.map((booking) => {
      const b = booking.toJSON();
      const fmt_str = "MMM d, y, h:mm a";
      b.start = formatDate(b.booking_start * 1e3, fmt_str, "en");
      b.end = formatDate(b.booking_end * 1e3, fmt_str, "en");
      for (const key of REMOVE_KEYS)
        delete b[key];
      return b;
    }), "	"));
  }
  static {
    this.\u0275fac = function LockersReportService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockersReportService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LockersReportService, factory: _LockersReportService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockersReportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/reports/lockers/lockers-report-charts.component.ts
var _c0 = ["dailyChart"];
var _c1 = ["levelChart"];
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, PieController, ArcElement, plugin_tooltip, plugin_legend);
var LockersReportChartsComponent = class _LockersReportChartsComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(LockersReportService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._daily_stats = this._state.daily_stats;
    this._counts = this._state.counts;
    this._bookings = this._state.bookings;
    this.print = input(
      false,
      ...ngDevMode ? [{ debugName: "print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.day_list = computed(
      () => {
        const days = this._daily_stats();
        const counts = this._counts();
        const list = [];
        const total_spaces = Object.values(counts).reduce((c, v) => c + (v || 0), 0);
        for (const date in days) {
          list.push({
            date,
            booking_count: unique(days[date].bookings, "asset_id").length,
            host_count: unique(days[date].bookings, "user_email").length,
            booked_count: days[date].bookings.length,
            utilisation: days[date].bookings.reduce((c, v) => c + v.duration, 0) / (total_spaces || 1) / (8 * 60)
          });
        }
        return list.sort((a, b) => a.date.localeCompare(b.date));
      },
      ...ngDevMode ? [{ debugName: "day_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.stats = computed(
      () => {
        const bookings = this._bookings();
        const mapping = unique(flatten(bookings.map((_) => _.zones))).filter((id) => this._org.levels.find((_) => _.id === id));
        return [
          mapping,
          mapping.reduce((counts, id) => {
            const list = bookings.filter((_) => _.zones.includes(id));
            counts[id] = list.length || 0;
            return counts;
          }, {})
        ];
      },
      ...ngDevMode ? [{ debugName: "stats" }] : (
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
      this.day_list();
      this.stats();
      this.print();
      this._daily_chart_el();
      this._level_chart_el();
      this.updateCharts();
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._day_chart?.destroy();
    this._level_chart?.destroy();
  }
  updateCharts() {
    this.timeout("update_charts", () => {
      const day_list = this.day_list();
      this.updateDailyChart(day_list);
      const [mappings, counts] = this.stats();
      this.updateLevelChart({ zones: mappings }, counts);
    }, 50);
  }
  updateDailyChart(list) {
    const el = this._daily_chart_el()?.nativeElement;
    if (!el)
      return;
    this._day_chart?.destroy();
    this._day_chart = new Chart(el, {
      type: "line",
      data: {
        labels: list.map((_) => format(parse(_.date, "yyyy-MM-dd", Date.now()), "dd MMM")),
        datasets: [
          {
            data: list.map((_) => +_.utilisation),
            borderColor: "rgb(59, 130, 246)",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            fill: true,
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: this.print() ? false : void 0,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  updateLevelChart(mapping, count) {
    const el = this._level_chart_el()?.nativeElement;
    if (!el)
      return;
    let { zones } = mapping || { zones: [] };
    if (!zones.length) {
      zones = (this._settings.get("app.use_region") ? this._org.levelsForRegion() : this._org.levelsForBuilding()).filter((_) => _.tags.includes("lockers")).map((_) => _.id);
    }
    const zone_list = (zones || []).filter((_) => (count[_] || 0) > 0);
    const labels = zone_list.map((_) => {
      const level = this._org.levelWithID([_]);
      return level?.display_name || level.name || "";
    });
    const data = zone_list.map((_) => count[_] || 0);
    this._level_chart?.destroy();
    this._level_chart = new Chart(el, {
      type: "pie",
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: [
              "rgb(59, 130, 246)",
              "rgb(16, 185, 129)",
              "rgb(245, 158, 11)",
              "rgb(239, 68, 68)",
              "rgb(139, 92, 246)",
              "rgb(236, 72, 153)",
              "rgb(20, 184, 166)",
              "rgb(249, 115, 22)"
            ]
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
    this.\u0275fac = function LockersReportChartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockersReportChartsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockersReportChartsComponent, selectors: [["lockers-report-charts"]], viewQuery: function LockersReportChartsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._daily_chart_el, _c0, 5)(ctx._level_chart_el, _c1, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, inputs: { print: [1, "print"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 14, consts: [["dailyChart", ""], ["levelChart", ""], [1, "flex", "w-full", "items-center", "space-x-4", "px-4", 3, "resize"], [1, "border-base-200", "bg-base-100", "h-72", "w-1/2", "flex-1", "rounded-sm", "border"], [1, "border-base-200", "border-b", "p-4", "text-xl", "font-bold"], [1, "mx-auto", "h-56", "w-full", "max-w-full", "p-2"], ["role", "img"], [1, "mx-auto", "h-56", "w-[24rem]", "max-w-full", "p-2"]], template: function LockersReportChartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 2);
        \u0275\u0275domListener("resize", function LockersReportChartsComponent_Template_div_resize_0_listener() {
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
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "APP.CONCIERGE.REPORTS_DAILY_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 8, "APP.CONCIERGE.REPORTS_DAILY_HEADER"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 10, "APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 12, "APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER"));
      }
    }, dependencies: [TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.is-print[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  width: 8cm !important;\n}\n/*# sourceMappingURL=lockers-report-charts.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockersReportChartsComponent, [{
    type: Component,
    args: [{ selector: "lockers-report-charts", template: `
        <div
            class="flex w-full items-center space-x-4 px-4"
            [class.is-print]="print()"
            (window:resize)="updateCharts()"
        >
            <div
                class="border-base-200 bg-base-100 h-72 w-1/2 flex-1 rounded-sm border"
            >
                <div class="border-base-200 border-b p-4 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
                </div>
                <div class="mx-auto h-56 w-full max-w-full p-2">
                    <canvas
                        #dailyChart
                        role="img"
                        [attr.aria-label]="
                            'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate
                        "
                    ></canvas>
                </div>
            </div>
            <div
                class="border-base-200 bg-base-100 h-72 w-1/2 flex-1 rounded-sm border"
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
    `, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;554a1b12239fa29aec32e67883eab593b53d44df3427eee1e23c3736e6afc0f4;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/lockers/lockers-report-charts.component.ts */\n:host {\n  display: block;\n}\n.is-print canvas {\n  width: 8cm !important;\n}\n/*# sourceMappingURL=lockers-report-charts.component.css.map */\n"] }]
  }], () => [], { print: [{ type: Input, args: [{ isSignal: true, alias: "print", required: false }] }], _daily_chart_el: [{ type: ViewChild, args: ["dailyChart", { isSignal: true }] }], _level_chart_el: [{ type: ViewChild, args: ["levelChart", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockersReportChartsComponent, { className: "LockersReportChartsComponent", filePath: "apps/concierge/src/app/reports/lockers/lockers-report-charts.component.ts", lineNumber: 103 });
})();

// apps/concierge/src/app/reports/lockers/lockers-report-daily-usage.component.ts
var _c02 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c12 = (a0) => ({ key: "booking_count", name: a0 });
var _c2 = (a0) => ({ key: "host_count", name: a0 });
var _c3 = () => ({ key: "active_count", name: "Active" });
var _c4 = (a0) => ({ key: "cancelled_count", name: "Rejected", content: a0 });
var _c5 = (a0) => ({ key: "deleted_count", name: "Cancelled", content: a0 });
var _c6 = (a0) => ({ key: "booked_count", name: a0 });
var _c7 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
function LockersReportDailyUsageComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function LockersReportDailyUsageComponent_Conditional_5_Template_button_click_0_listener() {
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
function LockersReportDailyUsageComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
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
function LockersReportDailyUsageComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
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
var TABLE_METRIC_GUIDE = [
  {
    label: "Unique",
    description: "Number of distinct locker asset IDs booked on the day."
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
    label: "Booking count",
    description: "Total locker bookings recorded for the day."
  }
];
var LockersReportDailyUsageComponent = class _LockersReportDailyUsageComponent {
  constructor() {
    this._state = inject(LockersReportService);
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
        deleted_count: formatReportPercentage(booking.deleted_count, booking.booked_count)
      }));
      downloadFile("report-lockers-daily-usage.csv", jsonToCsv(data));
    };
    this.formatPercent = formatReportPercentage;
  }
  static {
    this.\u0275fac = function LockersReportDailyUsageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockersReportDailyUsageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockersReportDailyUsageComponent, selectors: [["lockers-report-daily-usage"]], inputs: { print: [1, "print"] }, decls: 17, vars: 43, consts: [["date_template", ""], ["booking_percent_template", ""], [1, "border-base-200", "bg-base-100", "m-4", "overflow-hidden", "rounded-sm", "border"], [1, "border-base-200", "flex", "items-center", "border-b", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], ["title", "Table column calculations", 3, "items", "inline"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"]], template: function LockersReportDailyUsageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h3", 4);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, LockersReportDailyUsageComponent_Conditional_5_Template, 5, 6, "button", 5);
        \u0275\u0275element(6, "placeos-report-metric-guide", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "simple-table", 7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275template(13, LockersReportDailyUsageComponent_ng_template_13_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, LockersReportDailyUsageComponent_ng_template_15_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const date_template_r6 = \u0275\u0275reference(14);
        const booking_percent_template_r7 = \u0275\u0275reference(16);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "APP.CONCIERGE.REPORTS_DAILY_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.print() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.table_metric_guide)("inline", true);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.daily_stats())("columns", \u0275\u0275pureFunction7(35, _c7, \u0275\u0275pureFunction2(21, _c02, \u0275\u0275pipeBind1(8, 11, "FORM.DATE"), date_template_r6), \u0275\u0275pureFunction1(24, _c12, \u0275\u0275pipeBind1(9, 13, "APP.CONCIERGE.REPORTS_UNIQUE_HEADER")), \u0275\u0275pureFunction1(26, _c2, \u0275\u0275pipeBind1(10, 15, "APP.CONCIERGE.REPORTS_HOST_COUNT_HEADER")), \u0275\u0275pureFunction0(28, _c3), \u0275\u0275pureFunction1(29, _c4, booking_percent_template_r7), \u0275\u0275pureFunction1(31, _c5, booking_percent_template_r7), \u0275\u0275pureFunction1(33, _c6, \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.REPORTS_BOOKING_COUNT_HEADER"))))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
      }
    }, dependencies: [
      SimpleTableComponent,
      CommonModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockersReportDailyUsageComponent, [{
    type: Component,
    args: [{ selector: "lockers-report-daily-usage", template: `
        <div
            class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
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
                class="block w-full text-sm"
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
        </div>
    `, imports: [
      SimpleTableComponent,
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      ReportMetricGuideComponent
    ] }]
  }], null, { print: [{ type: Input, args: [{ isSignal: true, alias: "print", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockersReportDailyUsageComponent, { className: "LockersReportDailyUsageComponent", filePath: "apps/concierge/src/app/reports/lockers/lockers-report-daily-usage.component.ts", lineNumber: 148 });
})();

// apps/concierge/src/app/reports/lockers/lockers-report-list.component.ts
var _c03 = (a0) => ({ key: "lockers_name", name: a0 });
var _c13 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c22 = (a0, a1) => ({ key: "duration", name: a0, content: a1 });
var _c32 = (a0) => ({ key: "type", name: a0 });
var _c42 = (a0) => ({ key: "host", name: a0 });
var _c52 = (a0) => ({ key: "checked_in", name: a0 });
var _c62 = (a0) => ({ key: "status", name: a0 });
var _c72 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
function LockersReportListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function LockersReportListComponent_Conditional_5_Template_button_click_0_listener() {
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
function LockersReportListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
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
function LockersReportListComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "duration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.duration > 12 * 60 || row_r4.all_day ? \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY") : \u0275\u0275pipeBind2(3, 3, row_r4.duration, true), " ");
  }
}
var TABLE_METRIC_GUIDE2 = [
  {
    label: "Locker",
    description: "Uses asset name, extension asset name, description, then asset ID as fallback."
  },
  {
    label: "Duration",
    description: "Shows all day when the booking is marked all day or duration is greater than 12 hours; otherwise formats booking minutes."
  },
  {
    label: "Type",
    description: "First tag from extension data, falling back to the first booking tag."
  },
  {
    label: "Booked for",
    description: "Booking user name, falling back to user email."
  },
  {
    label: "Checked in",
    description: "True when the booking checked-in flag is set."
  },
  {
    label: "Status",
    description: "Cancelled bookings show Cancelled; rejected bookings show Rejected; otherwise the booking status is shown, defaulting to tentative."
  }
];
var LockersReportListComponent = class _LockersReportListComponent {
  constructor() {
    this._state = inject(LockersReportService);
    this._bookings = this._state.bookings;
    this.print = input(
      false,
      ...ngDevMode ? [{ debugName: "print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.table_metric_guide = TABLE_METRIC_GUIDE2;
    this.lockers_bookings = computed(
      () => {
        const list = [];
        for (const booking of this._bookings()) {
          list.push({
            lockers_name: booking.asset_name || booking.extension_data?.asset_name || booking.description || booking.asset_id,
            date: booking.date,
            duration: booking.duration,
            all_day: booking.all_day,
            host: booking.user_name || booking.user_email,
            checked_in: i18n(booking.checked_in ? "COMMON.YES" : "COMMON.NO"),
            status: reportBookingStatus(booking),
            self_registered: i18n(booking.extension_data?.self_registered ? "COMMON.YES" : "COMMON.NO"),
            type: booking.extension_data?.tags?.[0] || booking.tags?.[0] || ""
          });
        }
        list.sort((a, b) => a.date - b.date);
        return list;
      },
      ...ngDevMode ? [{ debugName: "lockers_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.download = async () => {
      const data = this.lockers_bookings();
      for (const bkn of data) {
        bkn.date = format(bkn.date, "yyyy-MM-dd HH:mm");
      }
      downloadFile("report-lockers-daily-usage.csv", jsonToCsv(data));
    };
  }
  static {
    this.\u0275fac = function LockersReportListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockersReportListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockersReportListComponent, selectors: [["lockers-report-list"]], inputs: { print: [1, "print"] }, decls: 20, vars: 51, consts: [["date_template", ""], ["duration_template", ""], [1, "border-base-200", "bg-base-100", "m-4", "overflow-hidden", "rounded-sm", "border"], [1, "border-base-200", "flex", "items-center", "border-b", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], ["title", "Table column calculations", 3, "items", "inline"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"]], template: function LockersReportListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h3", 4);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, LockersReportListComponent_Conditional_5_Template, 5, 6, "button", 5);
        \u0275\u0275element(6, "placeos-report-metric-guide", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "simple-table", 7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275template(16, LockersReportListComponent_ng_template_16_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(18, LockersReportListComponent_ng_template_18_Template, 4, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const date_template_r5 = \u0275\u0275reference(17);
        const duration_template_r6 = \u0275\u0275reference(19);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "APP.CONCIERGE.REPORTS_LOCKERS_UTIL_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.print() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.table_metric_guide)("inline", true);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.lockers_bookings())("columns", \u0275\u0275pureFunction7(43, _c72, \u0275\u0275pureFunction1(27, _c03, \u0275\u0275pipeBind1(8, 11, "RESOURCE.LOCKER")), \u0275\u0275pureFunction2(29, _c13, \u0275\u0275pipeBind1(9, 13, "FORM.DATE"), date_template_r5), \u0275\u0275pureFunction2(32, _c22, \u0275\u0275pipeBind1(10, 15, "FORM.DURATION"), duration_template_r6), \u0275\u0275pureFunction1(35, _c32, \u0275\u0275pipeBind1(11, 17, "COMMON.TYPE")), \u0275\u0275pureFunction1(37, _c42, \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.BOOKED_FOR")), \u0275\u0275pureFunction1(39, _c52, \u0275\u0275pipeBind1(13, 21, "COMMON.CHECKED_IN")), \u0275\u0275pureFunction1(41, _c62, \u0275\u0275pipeBind1(14, 23, "COMMON.STATUS"))))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(15, 25, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
      }
    }, dependencies: [
      CommonModule,
      SimpleTableComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      ReportMetricGuideComponent,
      DatePipe,
      DurationPipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockersReportListComponent, [{
    type: Component,
    args: [{ selector: "lockers-report-list", template: `
        <div
            class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{
                        'APP.CONCIERGE.REPORTS_LOCKERS_UTIL_HEADER' | translate
                    }}
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
                class="block w-full text-sm"
                [data]="lockers_bookings()"
                [columns]="[
                    {
                        key: 'lockers_name',
                        name: 'RESOURCE.LOCKER' | translate,
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
                        key: 'type',
                        name: 'COMMON.TYPE' | translate,
                    },
                    {
                        key: 'host',
                        name: 'APP.CONCIERGE.BOOKED_FOR' | translate,
                    },
                    {
                        key: 'checked_in',
                        name: 'COMMON.CHECKED_IN' | translate,
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
            <ng-template #date_template let-row="row">
                <div class="p-4">
                    {{ row.date | date: 'mediumDate' }}
                </div>
            </ng-template>
            <ng-template #duration_template let-row="row">
                <div class="p-4">
                    {{
                        row.duration > 12 * 60 || row.all_day
                            ? ('COMMON.ALL_DAY' | translate)
                            : (row.duration | duration: true)
                    }}
                </div>
            </ng-template>
        </div>
    `, imports: [
      CommonModule,
      DurationPipe,
      TranslatePipe,
      SimpleTableComponent,
      MatRippleModule,
      MatTooltipModule,
      IconComponent,
      ReportMetricGuideComponent
    ] }]
  }], null, { print: [{ type: Input, args: [{ isSignal: true, alias: "print", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockersReportListComponent, { className: "LockersReportListComponent", filePath: "apps/concierge/src/app/reports/lockers/lockers-report-list.component.ts", lineNumber: 154 });
})();

// apps/concierge/src/app/reports/lockers/lockers-report-overall.component.ts
var LockersReportOverallComponent = class _LockersReportOverallComponent {
  constructor() {
    this._state = inject(LockersReportService);
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
        return formatDuration({
          minutes: Math.floor(events.reduce((c, i) => c + i.duration, 0) / events.length) || 0
        });
      },
      ...ngDevMode ? [{ debugName: "avg_length" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function LockersReportOverallComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockersReportOverallComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockersReportOverallComponent, selectors: [["lockers-report-overall"]], decls: 34, vars: 15, consts: [[1, "border-base-200", "bg-base-100", "m-4", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border", "p-4"], [1, "flex", "flex-1", "flex-col", "items-center"], [1, "text-sm"], [1, "text-2xl"]], template: function LockersReportOverallComponent_Template(rf, ctx) {
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
        \u0275\u0275text(15, "Active");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(16, "p", 3);
        \u0275\u0275text(17);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(18, "div", 1)(19, "h3", 2);
        \u0275\u0275text(20, "Rejected");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(21, "p", 3);
        \u0275\u0275text(22);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(23, "div", 1)(24, "h3", 2);
        \u0275\u0275text(25, "Cancelled");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(26, "p", 3);
        \u0275\u0275text(27);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(28, "div", 1)(29, "h3", 2);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(32, "p", 3);
        \u0275\u0275text(33);
        \u0275\u0275domElementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "APP.CONCIERGE.REPORTS_BUSINESS_DAYS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.business_days() || 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 11, "APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.total_count() || 0);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.active_count() || 0);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.cancelled_count() || 0);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.deleted_count() || 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 13, "APP.CONCIERGE.REPORTS_AVERAGE_LENGTH"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.avg_length() || "0");
      }
    }, dependencies: [TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockersReportOverallComponent, [{
    type: Component,
    args: [{ selector: "lockers-report-overall", template: `
        <div
            class="border-base-200 bg-base-100 m-4 flex items-center justify-center space-x-2 rounded-sm border p-4"
        >
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_BUSINESS_DAYS' | translate }}
                </h3>
                <p class="text-2xl">{{ business_days() || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS' | translate }}
                </h3>
                <p class="text-2xl">{{ total_count() || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">Active</h3>
                <p class="text-2xl">{{ active_count() || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">Rejected</h3>
                <p class="text-2xl">{{ cancelled_count() || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">Cancelled</h3>
                <p class="text-2xl">{{ deleted_count() || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockersReportOverallComponent, { className: "LockersReportOverallComponent", filePath: "apps/concierge/src/app/reports/lockers/lockers-report-overall.component.ts", lineNumber: 52 });
})();

// apps/concierge/src/app/reports/lockers/lockers-report.component.ts
function LockersReportComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "placeos-report-metric-guide", 9)(1, "lockers-report-overall")(2, "lockers-report-charts")(3, "lockers-report-daily-usage", 10)(4, "lockers-report-list", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("absolute", true)("items", ctx_r0.metric_guide);
    \u0275\u0275advance(3);
    \u0275\u0275property("print", ctx_r0.printing());
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing());
  }
}
function LockersReportComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
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
function LockersReportComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LockersReportComponent_Conditional_9_Conditional_0_Template, 5, 4)(1, LockersReportComponent_Conditional_9_Conditional_1_Template, 4, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.total_count() ? 0 : 1);
  }
}
function LockersReportComponent_Conditional_10_Template(rf, ctx) {
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
    label: "Total bookings",
    description: "All locker bookings returned for the selected dates and zones, including active, rejected, and cancelled records."
  },
  {
    label: "Active / Rejected / Cancelled",
    description: "Active excludes cancelled and rejected bookings. Rejected uses bookings with cancelled or rejected status. Cancelled uses bookings flagged as cancelled."
  },
  {
    label: "Average length",
    description: "Sum of active booking durations divided by the number of active bookings."
  },
  {
    label: "Daily usage",
    description: "Counts unique lockers, unique users, active bookings, cancellations, deletions, and total bookings for each day."
  }
];
var LockersReportComponent = class _LockersReportComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(LockersReportService);
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
    this.\u0275fac = function LockersReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockersReportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockersReportComponent, selectors: [["", "lockers-report", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 7, consts: [["resource_type", "lockers", 3, "printing", "download", "generate", "loading", "has_data"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "print:h-auto", "print:overflow-visible"], [1, "w-full"], [1, "bg-base-200", "m-4", "flex", "items-center", "rounded-sm", "p-4"], ["alt", "", "auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "px-2", "text-2xl", "font-medium"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [1, "screen-only", "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [3, "absolute", "items"], [3, "print"], [1, "opacity-70"], [1, "mb-4", 3, "diameter"]], template: function LockersReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "reports-options", 0);
        \u0275\u0275listener("printing", function LockersReportComponent_Template_reports_options_printing_0_listener($event) {
          return ctx.printing.set($event);
        })("download", function LockersReportComponent_Template_reports_options_download_0_listener() {
          return ctx.downloadReport();
        })("generate", function LockersReportComponent_Template_reports_options_generate_0_listener() {
          return ctx.generateReport();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4)(5, "div", 5);
        \u0275\u0275elementStart(6, "h2", 6);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(9, LockersReportComponent_Conditional_9_Template, 2, 1)(10, LockersReportComponent_Conditional_10_Template, 5, 4, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("loading", !!ctx.loading())("has_data", !!ctx.total_count());
        \u0275\u0275advance(4);
        \u0275\u0275property("source", ctx.logo()?.src || ctx.logo());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "APP.CONCIERGE.REPORTS_LOCKERS_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 9 : 10);
      }
    }, dependencies: [
      MatProgressSpinnerModule,
      MatProgressSpinner,
      ReportMetricGuideComponent,
      LockersReportChartsComponent,
      LockersReportOverallComponent,
      LockersReportDailyUsageComponent,
      LockersReportListComponent,
      AuthenticatedImageDirective,
      ReportsOptionsComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=lockers-report.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockersReportComponent, [{
    type: Component,
    args: [{ selector: "[lockers-report]", template: `
        <reports-options
            resource_type="lockers"
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
                        {{ 'APP.CONCIERGE.REPORTS_LOCKERS_HEADER' | translate }}
                    </h2>
                </div>
            </div>
            @if (!loading()) {
                @if (total_count()) {
                    <placeos-report-metric-guide
                        [absolute]="true"
                        [items]="metric_guide"
                    />
                    <lockers-report-overall></lockers-report-overall>
                    <lockers-report-charts></lockers-report-charts>
                    <lockers-report-daily-usage
                        [print]="printing()"
                    ></lockers-report-daily-usage>
                    <lockers-report-list
                        [print]="printing()"
                    ></lockers-report-list>
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
      ReportMetricGuideComponent,
      LockersReportChartsComponent,
      LockersReportOverallComponent,
      LockersReportDailyUsageComponent,
      LockersReportListComponent,
      AuthenticatedImageDirective,
      ReportsOptionsComponent
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/lockers/lockers-report.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=lockers-report.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockersReportComponent, { className: "LockersReportComponent", filePath: "apps/concierge/src/app/reports/lockers/lockers-report.component.ts", lineNumber: 133 });
})();
export {
  LockersReportComponent
};
//# debugId=2f831aa3-d4f1-5318-ae64-f38957b9247b
//# sourceMappingURL=lockers-report.component-XNPQIVJ4.js.map
