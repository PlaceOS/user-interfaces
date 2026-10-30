import {
  differenceInBusinessDays
} from "./chunk-R2HVCDAQ.js";
import {
  CategoryScale,
  Chart,
  LineController,
  LineElement,
  LinearScale,
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
  activeReportEvents,
  reportBookingDuration
} from "./chunk-M7D6LSL2.js";
import "./chunk-LCHSZWKM.js";
import {
  queryDeskAssets
} from "./chunk-JNHYREVF.js";
import {
  queryParkingSpaces
} from "./chunk-ULYE3EO5.js";
import {
  SimpleTableComponent
} from "./chunk-RILX3QL7.js";
import {
  FullscreenModalShellComponent
} from "./chunk-4D2YZQAY.js";
import {
  parse
} from "./chunk-P54RLJBR.js";
import "./chunk-HWV6SYPV.js";
import {
  queryLockerAssets
} from "./chunk-WROB6MNN.js";
import {
  queryAllEvents
} from "./chunk-GQ7BZQ4E.js";
import "./chunk-RFCENQ5H.js";
import "./chunk-VXZEI5ES.js";
import {
  queryAllBookings
} from "./chunk-BUMW524D.js";
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
import {
  MAT_DIALOG_DATA,
  MatDialog
} from "./chunk-2K5G7CFD.js";
import "./chunk-54KE5JKV.js";
import "./chunk-CV6KPFJH.js";
import "./chunk-OX3RHFRB.js";
import "./chunk-QWYXFXJS.js";
import "./chunk-G7ZLBZI3.js";
import "./chunk-RIENTTXY.js";
import {
  requestSpacesForZone
} from "./chunk-3TOA4G7Y.js";
import "./chunk-7G72PXFC.js";
import "./chunk-7T3N6W45.js";
import "./chunk-QKZR3R5Z.js";
import {
  TranslatePipe
} from "./chunk-IGQY3INR.js";
import "./chunk-I75UA7CR.js";
import {
  OrganisationService,
  SettingsService,
  getUnixTime
} from "./chunk-ACYV7NM4.js";
import {
  IconComponent
} from "./chunk-QVU2YYRL.js";
import {
  AsyncHandler,
  _c,
  constructFrom,
  differenceInCalendarDays,
  downloadFile,
  endOfDay,
  format,
  formatDuration,
  i18n,
  isSameDay,
  jsonToCsv,
  nextValueFrom,
  normalizeDates,
  notifyError,
  startOfDay
} from "./chunk-JYQPCPCB.js";
import "./chunk-OWTWWOGC.js";
import "./chunk-ZEZKWG7M.js";
import "./chunk-3WBJTYSG.js";
import "./chunk-QSD4JXRO.js";
import "./chunk-GTXMU3AV.js";
import "./chunk-DK3CVVJN.js";
import {
  ActivatedRoute
} from "./chunk-N4RTV55R.js";
import {
  Component,
  Injectable,
  Input,
  ViewChild,
  computed,
  effect,
  formatDate,
  inject,
  input,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction7,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
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

// node_modules/date-fns/_lib/normalizeInterval.js
function normalizeInterval(context, interval) {
  const [start, end] = normalizeDates(context, interval.start, interval.end);
  return { start, end };
}

// node_modules/date-fns/eachDayOfInterval.js
function eachDayOfInterval(interval, options) {
  const { start, end } = normalizeInterval(options?.in, interval);
  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  const date = reversed ? end : start;
  date.setHours(0, 0, 0, 0);
  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }
  const dates = [];
  while (+date <= endTime) {
    dates.push(constructFrom(start, date));
    date.setDate(date.getDate() + step);
    date.setHours(0, 0, 0, 0);
  }
  return reversed ? dates.reverse() : dates;
}

// apps/concierge/src/app/reports/attendance/site-attendance-report-chart.component.ts
var _c0 = ["dailyChart"];
var SERIES = [
  { key: "events", label: "Rooms", color: "rgb(59, 130, 246)" },
  { key: "desks", label: "Desk bookings", color: "rgb(16, 185, 129)" },
  { key: "parking", label: "Parking", color: "rgb(236, 72, 153)" },
  { key: "visitors", label: "Visitors", color: "rgb(245, 158, 11)" },
  { key: "total", label: "Total attendance", color: "rgb(139, 92, 246)" }
];
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, plugin_tooltip, plugin_legend);
var SiteAttendanceReportChartCanvasComponent = class _SiteAttendanceReportChartCanvasComponent extends AsyncHandler {
  constructor() {
    super();
    this._chart = null;
    this._chart_el = viewChild(
      "dailyChart",
      ...ngDevMode ? [{ debugName: "_chart_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.daily_attendance = input(
      [],
      ...ngDevMode ? [{ debugName: "daily_attendance" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_parking = input(
      false,
      ...ngDevMode ? [{ debugName: "show_parking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      this.daily_attendance();
      this.show_parking();
      this._chart_el();
      this.updateChart();
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._chart?.destroy();
  }
  updateChart() {
    this.timeout("update_chart", () => this.renderChart(), 50);
  }
  renderChart() {
    const el = this._chart_el()?.nativeElement;
    if (!el)
      return;
    const rows = this.daily_attendance();
    const series_list = SERIES.filter((series) => series.key !== "parking" || this.show_parking());
    this._chart?.destroy();
    this._chart = new Chart(el, {
      type: "line",
      data: {
        labels: rows.map((row) => format(parse(row.date, "yyyy-MM-dd", Date.now()), "dd MMM")),
        datasets: series_list.map((series) => ({
          label: series.label,
          data: rows.map((row) => row[series.key]),
          borderColor: series.color,
          backgroundColor: series.color,
          fill: false,
          tension: 0.3
        }))
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true, position: "bottom" }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { precision: 0 }
          }
        }
      }
    });
  }
  static {
    this.\u0275fac = function SiteAttendanceReportChartCanvasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteAttendanceReportChartCanvasComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SiteAttendanceReportChartCanvasComponent, selectors: [["site-attendance-report-chart-canvas"]], viewQuery: function SiteAttendanceReportChartCanvasComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._chart_el, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { daily_attendance: [1, "daily_attendance"], show_parking: [1, "show_parking"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 0, consts: [["dailyChart", ""], ["role", "img", "aria-label", "Daily attendance"]], template: function SiteAttendanceReportChartCanvasComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElement(0, "canvas", 1, 0);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\ncanvas[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n/*# sourceMappingURL=site-attendance-report-chart.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteAttendanceReportChartCanvasComponent, [{
    type: Component,
    args: [{ selector: "site-attendance-report-chart-canvas", template: `<canvas
        #dailyChart
        role="img"
        aria-label="Daily attendance"
    ></canvas>`, styles: ["/* angular:styles/component:css;6f2ae6112088ea8fc21a625deec00c34be0d722f48d74020d770cba8d2790e64;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/attendance/site-attendance-report-chart.component.ts */\n:host {\n  display: block;\n  height: 100%;\n}\ncanvas {\n  width: 100% !important;\n}\n/*# sourceMappingURL=site-attendance-report-chart.component.css.map */\n"] }]
  }], () => [], { _chart_el: [{ type: ViewChild, args: ["dailyChart", { isSignal: true }] }], daily_attendance: [{ type: Input, args: [{ isSignal: true, alias: "daily_attendance", required: false }] }], show_parking: [{ type: Input, args: [{ isSignal: true, alias: "show_parking", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SiteAttendanceReportChartCanvasComponent, { className: "SiteAttendanceReportChartCanvasComponent", filePath: "apps/concierge/src/app/reports/attendance/site-attendance-report-chart.component.ts", lineNumber: 67 });
})();
var SiteAttendanceReportChartModalComponent = class _SiteAttendanceReportChartModalComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
  }
  static {
    this.\u0275fac = function SiteAttendanceReportChartModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteAttendanceReportChartModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SiteAttendanceReportChartModalComponent, selectors: [["site-attendance-report-chart-modal"]], decls: 6, vars: 4, consts: [["heading", "Daily attendance", 3, "hide_confirm", "full_width"], [1, "border-base-200", "bg-base-100", "h-[calc(100vh-8rem)]", "rounded-sm", "border"], [1, "border-base-200", "border-b", "px-4", "py-3", "text-lg", "font-semibold"], [1, "h-[calc(100vh-12rem)]", "p-4"], [3, "daily_attendance", "show_parking"]], template: function SiteAttendanceReportChartModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3, " Daily attendance ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275element(5, "site-attendance-report-chart-canvas", 4);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("hide_confirm", true)("full_width", true);
        \u0275\u0275advance(5);
        \u0275\u0275property("daily_attendance", ctx.data.daily_attendance)("show_parking", ctx.data.show_parking);
      }
    }, dependencies: [FullscreenModalShellComponent, SiteAttendanceReportChartCanvasComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteAttendanceReportChartModalComponent, [{
    type: Component,
    args: [{
      selector: "site-attendance-report-chart-modal",
      template: `
        <fullscreen-modal-shell
            heading="Daily attendance"
            [hide_confirm]="true"
            [full_width]="true"
        >
            <div
                class="border-base-200 bg-base-100 h-[calc(100vh-8rem)] rounded-sm border"
            >
                <div
                    class="border-base-200 border-b px-4 py-3 text-lg font-semibold"
                >
                    Daily attendance
                </div>
                <div class="h-[calc(100vh-12rem)] p-4">
                    <site-attendance-report-chart-canvas
                        [daily_attendance]="data.daily_attendance"
                        [show_parking]="data.show_parking"
                    />
                </div>
            </div>
        </fullscreen-modal-shell>
    `,
      imports: [
        FullscreenModalShellComponent,
        SiteAttendanceReportChartCanvasComponent
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SiteAttendanceReportChartModalComponent, { className: "SiteAttendanceReportChartModalComponent", filePath: "apps/concierge/src/app/reports/attendance/site-attendance-report-chart.component.ts", lineNumber: 166 });
})();
var SiteAttendanceReportChartComponent = class _SiteAttendanceReportChartComponent {
  constructor() {
    this._dialog = inject(MatDialog);
    this.daily_attendance = input(
      [],
      ...ngDevMode ? [{ debugName: "daily_attendance" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_parking = input(
      false,
      ...ngDevMode ? [{ debugName: "show_parking" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  openModal() {
    this._dialog.open(SiteAttendanceReportChartModalComponent, {
      data: {
        daily_attendance: this.daily_attendance(),
        show_parking: this.show_parking()
      },
      panelClass: "fullscreen-dialog",
      width: "100vw",
      height: "100vh"
    });
  }
  static {
    this.\u0275fac = function SiteAttendanceReportChartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteAttendanceReportChartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SiteAttendanceReportChartComponent, selectors: [["site-attendance-report-chart"]], inputs: { daily_attendance: [1, "daily_attendance"], show_parking: [1, "show_parking"] }, decls: 11, vars: 2, consts: [["chart", ""], [1, "border-base-200", "bg-base-100", "h-80", "rounded-sm", "border", 3, "resize"], [1, "border-base-200", "flex", "items-center", "border-b", "px-4", "py-3"], [1, "text-lg", "font-semibold"], [1, "flex-1"], ["icon", "", "type", "button", "aria-label", "Maximise daily attendance graph", 3, "click"], [1, "h-64", "p-4"], [3, "daily_attendance", "show_parking"]], template: function SiteAttendanceReportChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275listener("resize", function SiteAttendanceReportChartComponent_Template_div_resize_0_listener() {
          \u0275\u0275restoreView(_r1);
          const chart_r2 = \u0275\u0275reference(10);
          return \u0275\u0275resetView(chart_r2.updateChart());
        }, \u0275\u0275resolveWindow);
        \u0275\u0275elementStart(1, "div", 2)(2, "h3", 3);
        \u0275\u0275text(3, "Daily attendance");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "div", 4);
        \u0275\u0275elementStart(5, "button", 5);
        \u0275\u0275listener("click", function SiteAttendanceReportChartComponent_Template_button_click_5_listener() {
          return ctx.openModal();
        });
        \u0275\u0275elementStart(6, "icon");
        \u0275\u0275text(7, "open_in_full");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 6);
        \u0275\u0275element(9, "site-attendance-report-chart-canvas", 7, 0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("daily_attendance", ctx.daily_attendance())("show_parking", ctx.show_parking());
      }
    }, dependencies: [IconComponent, SiteAttendanceReportChartCanvasComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=site-attendance-report-chart.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteAttendanceReportChartComponent, [{
    type: Component,
    args: [{ selector: "site-attendance-report-chart", template: `
        <div
            class="border-base-200 bg-base-100 h-80 rounded-sm border"
            (window:resize)="chart.updateChart()"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-3">
                <h3 class="text-lg font-semibold">Daily attendance</h3>
                <div class="flex-1"></div>
                <button
                    icon
                    type="button"
                    aria-label="Maximise daily attendance graph"
                    (click)="openModal()"
                >
                    <icon>open_in_full</icon>
                </button>
            </div>
            <div class="h-64 p-4">
                <site-attendance-report-chart-canvas
                    #chart
                    [daily_attendance]="daily_attendance()"
                    [show_parking]="show_parking()"
                />
            </div>
        </div>
    `, imports: [IconComponent, SiteAttendanceReportChartCanvasComponent], styles: ["/* angular:styles/component:css;aca37b045377af9e61ae87ec9ceba230614f528def48741d3190431076d12a3b;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/attendance/site-attendance-report-chart.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=site-attendance-report-chart.component.css.map */\n"] }]
  }], null, { daily_attendance: [{ type: Input, args: [{ isSignal: true, alias: "daily_attendance", required: false }] }], show_parking: [{ type: Input, args: [{ isSignal: true, alias: "show_parking", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SiteAttendanceReportChartComponent, { className: "SiteAttendanceReportChartComponent", filePath: "apps/concierge/src/app/reports/attendance/site-attendance-report-chart.component.ts", lineNumber: 210 });
})();

// apps/concierge/src/app/reports/attendance/site-attendance-report.service.ts
var EMPTY_REPORT = {
  business_days: 0,
  total_attendance: 0,
  total_bookings: 0,
  active_types: 0,
  unique_people: 0,
  daily_attendance: [],
  cards: [],
  hosts: [],
  attendees: []
};
var SiteAttendanceReportService = class _SiteAttendanceReportService {
  constructor() {
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._options = signal(
      {
        start: startOfDay(Date.now()).valueOf(),
        end: endOfDay(Date.now()).valueOf(),
        zones: []
      },
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._report = signal(
      EMPTY_REPORT,
      ...ngDevMode ? [{ debugName: "_report" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._load_token = 0;
    this.loading = this._loading.asReadonly();
    this.options = this._options.asReadonly();
    this.report = this._report.asReadonly();
  }
  setOptions(options) {
    this._load_token++;
    this._loading.set(false);
    this._options.set(__spreadValues(__spreadValues({}, this._options()), options));
  }
  async generateReport() {
    const options = this._options();
    const start = startOfDay(options.start || Date.now());
    const end = endOfDay(options.end || start.valueOf());
    const booking_zones = this.getBookingZones(options.zones);
    const level_ids = this.getLevelIds(options.zones);
    const space_zones = this.getSpaceZones(options.zones);
    const enabled = this.getEnabledResources();
    const query = {
      period_start: getUnixTime(start),
      period_end: getUnixTime(end)
    };
    const bookings_query = __spreadProps(__spreadValues({}, query), {
      include_checked_out: true
    });
    const token = ++this._load_token;
    this._loading.set(true);
    try {
      const [events, desks, parking, lockers, visitors, room_count, desk_count, parking_count, locker_count] = await Promise.all([
        enabled.events ? queryAllEvents(__spreadProps(__spreadValues({}, query), {
          zone_ids: booking_zones,
          limit: 200
        })).catch(() => {
          notifyError(i18n("COMMON.LOAD_ERROR"));
          return [];
        }) : Promise.resolve([]),
        enabled.desks ? queryAllBookings(__spreadProps(__spreadValues({}, bookings_query), {
          zones: booking_zones,
          type: "desk",
          limit: 200
        })).catch(() => []) : Promise.resolve([]),
        enabled.parking ? queryAllBookings(__spreadProps(__spreadValues({}, bookings_query), {
          zones: booking_zones,
          type: "parking",
          limit: 200
        })).catch(() => []) : Promise.resolve([]),
        enabled.lockers ? queryAllBookings(__spreadProps(__spreadValues({}, bookings_query), {
          zones: booking_zones,
          type: "locker",
          limit: 200
        })).catch(() => []) : Promise.resolve([]),
        enabled.visitors ? queryAllBookings(__spreadProps(__spreadValues({}, bookings_query), {
          type: "visitor",
          zones: booking_zones,
          limit: 200
        })).catch(() => []) : Promise.resolve([]),
        enabled.events ? this.getRoomCount(space_zones) : Promise.resolve(0),
        enabled.desks ? this.getDeskCount(level_ids) : Promise.resolve(0),
        enabled.parking ? this.getParkingCount(level_ids) : Promise.resolve(0),
        enabled.lockers ? this.getLockerCount(level_ids) : Promise.resolve(0)
      ]);
      if (token !== this._load_token)
        return;
      const report = this.buildReport({
        events,
        desks,
        parking,
        lockers,
        visitors,
        room_count,
        desk_count,
        parking_count,
        locker_count,
        enabled
      }, start.valueOf(), end.valueOf());
      if (!report.total_bookings) {
        notifyError(i18n("APP.CONCIERGE.REPORTS_LOAD_ERROR"));
      }
      this._report.set(report);
    } finally {
      if (token === this._load_token)
        this._loading.set(false);
    }
  }
  downloadReport() {
    const report = this._report();
    const { start, end } = this._options();
    if (!report.total_bookings)
      return;
    const is_same = isSameDay(start || Date.now(), end || Date.now());
    const date = is_same ? format(start || Date.now(), "yyyy-MM-dd") : `${format(start || Date.now(), "yyyy-MM-dd")}-${format(end || Date.now(), "yyyy-MM-dd")}`;
    downloadFile(`report+site-attendance+${date}.tsv`, jsonToCsv(report.cards.map((card) => ({
      booking_type: card.id,
      attendance: card.attendance,
      bookings: card.bookings,
      daily_average: card.daily_average,
      average_length: card.average_length,
      unique_people: card.unique_people,
      resources_used: card.resource_summary,
      status_label: card.status_label,
      status_count: card.status_count,
      status_rate: `${card.status_rate}%`,
      report_start: formatDate(start || Date.now(), "MMM d, y", "en"),
      report_end: formatDate(end || Date.now(), "MMM d, y", "en")
    })), "	"));
  }
  getBookingZones(zones = []) {
    const zone_list = zones.filter((zone) => zone && zone !== "All");
    if (zone_list.length)
      return zone_list.join(",");
    return this._settings.get("app.use_region") ? this._org.region?.id : this._org.building?.id;
  }
  getLevelIds(zones = []) {
    const zone_list = zones.filter((zone) => zone && zone !== "All");
    if (zone_list.length)
      return zone_list;
    return (this._settings.get("app.use_region") ? this._org.levelsForRegion() : this._org.levelsForBuilding()).map((level) => level.id);
  }
  getSpaceZones(zones = []) {
    const zone_list = zones.filter((zone) => zone && zone !== "All");
    if (zone_list.length)
      return zone_list;
    return [
      this._settings.get("app.use_region") ? this._org.region?.id : this._org.building?.id
    ].filter((zone) => !!zone);
  }
  getEnabledResources() {
    const features = this._settings.get("app.features") || [];
    return {
      events: features.includes("spaces"),
      desks: features.includes("desks"),
      parking: features.includes("parking"),
      lockers: features.includes("lockers"),
      visitors: features.includes("visitors")
    };
  }
  async getRoomCount(zones) {
    if (!zones.length)
      return 0;
    const space_lists = await Promise.all(zones.map((zone) => nextValueFrom(requestSpacesForZone(zone)).catch(() => [])));
    const space_ids = new Set(space_lists.flat().map((space) => space.id).filter((id) => !!id));
    return space_ids.size;
  }
  async getDeskCount(zones) {
    if (!zones.length)
      return 0;
    const counts = await Promise.all(zones.map((zone) => this._settings.get("app.desks.use_assets") ? queryDeskAssets(zone).then((desks) => desks.length).catch(() => 0) : _c(zone, "desks").then((metadata) => metadata.details?.length || 0).catch(() => 0)));
    return counts.reduce((count, value) => count + value, 0);
  }
  async getParkingCount(zones) {
    if (!zones.length)
      return 0;
    const counts = await Promise.all(zones.map((zone) => queryParkingSpaces(zone).then((spaces) => spaces.length || 0).catch(() => 0)));
    return counts.reduce((count, value) => count + value, 0);
  }
  async getLockerCount(zones) {
    if (!zones.length)
      return 0;
    const counts = await Promise.all(zones.map((zone) => queryLockerAssets(zone).then((lockers) => lockers.length || 0).catch(() => 0)));
    return counts.reduce((count, value) => count + value, 0);
  }
  buildReport(result, start, end) {
    const report_result = __spreadProps(__spreadValues({}, result), {
      events: this.getReportEvents(result.events || []),
      desks: activeReportBookings(result.desks || []),
      parking: activeReportBookings(result.parking || []),
      lockers: activeReportBookings(result.lockers || []),
      visitors: activeReportBookings(result.visitors || [])
    });
    const business_days = this.getBusinessDays(start, end);
    const cards = this.buildCards(report_result, business_days);
    const unique_people = this.getUniquePeople(report_result);
    return {
      business_days,
      total_attendance: this.getDailyUniqueAttendance(report_result),
      total_bookings: cards.reduce((count, card) => count + card.bookings, 0),
      active_types: cards.filter((card) => card.bookings > 0).length,
      unique_people,
      daily_attendance: this.buildDailyAttendance(report_result, start, end),
      cards,
      hosts: this.buildHostRows(report_result),
      attendees: this.buildAttendeeRows(report_result)
    };
  }
  getReportEvents(events) {
    return activeReportEvents(events).filter((event) => !event.is_system_event && !this.isGroupEvent(event));
  }
  isGroupEvent(event) {
    const group_events_calendar = this._settings.get("app.group_events_calendar");
    return !!event.extension_data?.shared_event || !!group_events_calendar && event.calendar === group_events_calendar;
  }
  getBusinessDays(start, end) {
    if (!this._settings.get("app.reports.attendance_include_weekends")) {
      return differenceInBusinessDays(endOfDay(end).valueOf() + 1, startOfDay(start)) || 1;
    }
    return Math.max(1, differenceInCalendarDays(endOfDay(end), startOfDay(start)) + 1);
  }
  buildCards(result, business_days) {
    const cards = [];
    if (result.enabled.events) {
      cards.push(this.buildEventCard(result.events || [], result.room_count || 0, business_days));
    }
    if (result.enabled.desks) {
      cards.push(this.buildBookingCard("desks", result.desks || [], result.desk_count || 0, business_days));
    }
    if (result.enabled.parking) {
      cards.push(this.buildBookingCard("parking", result.parking || [], result.parking_count || 0, business_days));
    }
    if (result.enabled.lockers) {
      cards.push(this.buildBookingCard("lockers", result.lockers || [], result.locker_count || 0, business_days));
    }
    if (result.enabled.visitors) {
      cards.push(this.buildVisitorCard(result.visitors || [], business_days));
    }
    return cards;
  }
  getUniquePeople(result) {
    return (/* @__PURE__ */ new Set([
      ...this.getEventPeople(result.events || []),
      ...this.getEventAttendeePeople(result.events || []),
      ...this.getBookingPeople(result.desks || []),
      ...this.getBookingPeople(result.parking || []),
      ...this.getBookingPeople(result.lockers || []),
      ...this.getVisitorPeople(result.visitors || [])
    ])).size;
  }
  getDailyUniqueAttendance(result) {
    const daily_people = /* @__PURE__ */ new Map();
    for (const booking of result.events || []) {
      for (const person of this.getEventAttendancePeople(booking)) {
        this.addDailyPerson(daily_people, booking.date, person.id);
      }
    }
    for (const booking of result.desks || []) {
      for (const person of this.getBookingAttendancePeople(booking)) {
        this.addDailyPerson(daily_people, booking.date, person.id);
      }
    }
    for (const booking of result.parking || []) {
      for (const person of this.getBookingAttendancePeople(booking)) {
        this.addDailyPerson(daily_people, booking.date, person.id);
      }
    }
    for (const booking of result.lockers || []) {
      for (const person of this.getBookingAttendancePeople(booking)) {
        this.addDailyPerson(daily_people, booking.date, person.id);
      }
    }
    for (const booking of result.visitors || []) {
      for (const person of this.getVisitorAttendancePeople(booking)) {
        this.addDailyPerson(daily_people, booking.date, person.id);
      }
    }
    return this.countDailyPeople(daily_people);
  }
  buildDailyAttendance(result, start, end) {
    const events = /* @__PURE__ */ new Map();
    const desks = /* @__PURE__ */ new Map();
    const parking = /* @__PURE__ */ new Map();
    const visitors = /* @__PURE__ */ new Map();
    const total = /* @__PURE__ */ new Map();
    this.addDailyAttendance(events, total, result.events || [], (booking) => this.getEventAttendancePeople(booking));
    this.addDailyAttendance(desks, total, result.desks || [], (booking) => this.getBookingAttendancePeople(booking));
    this.addDailyAttendance(parking, total, result.parking || [], (booking) => this.getBookingAttendancePeople(booking));
    this.addDailyAttendance(/* @__PURE__ */ new Map(), total, result.lockers || [], (booking) => this.getBookingAttendancePeople(booking));
    this.addDailyAttendance(visitors, total, result.visitors || [], (booking) => this.getVisitorAttendancePeople(booking));
    return eachDayOfInterval({
      start: startOfDay(start),
      end: endOfDay(end)
    }).map((day) => {
      const date = format(day, "yyyy-MM-dd");
      return {
        date,
        events: events.get(date)?.size || 0,
        desks: desks.get(date)?.size || 0,
        parking: parking.get(date)?.size || 0,
        visitors: visitors.get(date)?.size || 0,
        total: total.get(date)?.size || 0
      };
    });
  }
  addDailyAttendance(daily_people, total_people, bookings, get_people) {
    for (const booking of bookings) {
      for (const person of get_people(booking)) {
        this.addDailyPerson(daily_people, booking.date, person.id);
        this.addDailyPerson(total_people, booking.date, person.id);
      }
    }
  }
  addDailyPerson(daily_people, date, id) {
    if (!date || !id)
      return;
    const day = format(date, "yyyy-MM-dd");
    const people = daily_people.get(day) || /* @__PURE__ */ new Set();
    people.add(id.toLowerCase());
    daily_people.set(day, people);
  }
  countDailyPeople(daily_people) {
    return [...daily_people.values()].reduce((total, people) => total + people.size, 0);
  }
  buildHostRows(result) {
    const rows = /* @__PURE__ */ new Map();
    for (const booking of result.events || []) {
      this.addPersonBooking(rows, this.getEventPerson(booking), "events");
    }
    for (const booking of result.desks || []) {
      this.addPersonBooking(rows, this.getBookingPerson(booking), "desks");
    }
    for (const booking of result.parking || []) {
      this.addPersonBooking(rows, this.getBookingPerson(booking), "parking");
    }
    for (const booking of result.lockers || []) {
      this.addPersonBooking(rows, this.getBookingPerson(booking), "lockers");
    }
    for (const booking of result.visitors || []) {
      this.addPersonBooking(rows, this.getBookingPerson(booking), "visitors");
    }
    return this.sortPersonRows(rows);
  }
  buildAttendeeRows(result) {
    const rows = /* @__PURE__ */ new Map();
    for (const booking of result.events || []) {
      for (const attendee of this.getEventAttendees(booking)) {
        this.addPersonBooking(rows, attendee, "events");
      }
    }
    for (const booking of result.desks || []) {
      for (const attendee of this.getBookingAttendees(booking)) {
        this.addPersonBooking(rows, attendee, "desks");
      }
    }
    for (const booking of result.parking || []) {
      for (const attendee of this.getBookingAttendees(booking)) {
        this.addPersonBooking(rows, attendee, "parking");
      }
    }
    for (const booking of result.lockers || []) {
      for (const attendee of this.getBookingAttendees(booking)) {
        this.addPersonBooking(rows, attendee, "lockers");
      }
    }
    for (const booking of result.visitors || []) {
      this.addPersonBooking(rows, this.getVisitorPerson(booking), "visitors");
    }
    return this.sortPersonRows(rows);
  }
  addPersonBooking(rows, person, type) {
    if (!person.id)
      return;
    const id = person.id.toLowerCase();
    const row = rows.get(id) || this.createPersonRow(person, id);
    row[type] += 1;
    row.total += 1;
    rows.set(id, row);
  }
  createPersonRow(person, id) {
    return {
      id,
      name: person.name || person.id,
      events: 0,
      desks: 0,
      parking: 0,
      lockers: 0,
      visitors: 0,
      total: 0
    };
  }
  sortPersonRows(rows) {
    return [...rows.values()].sort((a, b) => b.total - a.total || a.name.localeCompare(b.name));
  }
  buildEventCard(bookings, resource_count, business_days) {
    const attendance = this.getDailyEventAttendance(bookings);
    const tracked_bookings = bookings.filter((booking) => this.getPeopleCount(booking) !== void 0);
    const no_shows = tracked_bookings.filter((booking) => this.getPeopleCount(booking)?.max === 0).length;
    const resources_used = new Set(bookings.map((booking) => booking.system?.id || booking.system?.email || booking.location).filter((value) => !!value)).size;
    return {
      id: "events",
      bookings: bookings.length,
      attendance,
      daily_average: this.toFixed(attendance / Math.max(1, business_days)),
      average_length: this.getAverageLength(bookings),
      unique_people: (/* @__PURE__ */ new Set([
        ...this.getEventPeople(bookings),
        ...this.getEventAttendeePeople(bookings)
      ])).size,
      resource_summary: resource_count ? `${resources_used} / ${resource_count}` : `${resources_used}`,
      status_label: "APP.CONCIERGE.REPORTS_NO_SHOWS",
      status_count: no_shows,
      status_rate: this.toFixed(no_shows / Math.max(1, tracked_bookings.length || bookings.length) * 100)
    };
  }
  buildBookingCard(id, bookings, resource_count, business_days) {
    const attendance = this.getDailyBookingAttendance(bookings);
    const resources_used = new Set(bookings.map((booking) => booking.asset_id).filter((value) => !!value)).size;
    const checked_in = bookings.filter((booking) => booking.checked_in).length;
    return {
      id,
      bookings: bookings.length,
      attendance,
      daily_average: this.toFixed(attendance / Math.max(1, business_days)),
      average_length: this.getAverageLength(bookings),
      unique_people: new Set(this.getBookingPeople(bookings)).size,
      resource_summary: resource_count ? `${resources_used} / ${resource_count}` : `${resources_used}`,
      status_label: "COMMON.CHECKED_IN",
      status_count: checked_in,
      status_rate: this.toFixed(checked_in / Math.max(1, bookings.length) * 100)
    };
  }
  buildVisitorCard(bookings, business_days) {
    const attendance = this.getDailyVisitorAttendance(bookings);
    const checked_in = bookings.filter((booking) => booking.checked_in).length;
    return {
      id: "visitors",
      bookings: bookings.length,
      attendance,
      daily_average: this.toFixed(attendance / Math.max(1, business_days)),
      average_length: this.getAverageLength(bookings),
      unique_people: new Set(this.getVisitorPeople(bookings)).size,
      resource_summary: "-",
      status_label: "COMMON.CHECKED_IN",
      status_count: checked_in,
      status_rate: this.toFixed(checked_in / Math.max(1, bookings.length) * 100)
    };
  }
  getAverageLength(bookings) {
    const minutes = Math.floor(bookings.reduce((count, booking) => count + reportBookingDuration(booking), 0) / Math.max(1, bookings.length));
    return formatDuration({ minutes }) || "0";
  }
  getDailyEventAttendance(bookings) {
    const daily_people = /* @__PURE__ */ new Map();
    for (const booking of bookings) {
      for (const person of this.getEventAttendancePeople(booking)) {
        this.addDailyPerson(daily_people, booking.date, person.id);
      }
    }
    return this.countDailyPeople(daily_people);
  }
  getDailyBookingAttendance(bookings) {
    const daily_people = /* @__PURE__ */ new Map();
    for (const booking of bookings) {
      for (const person of this.getBookingAttendancePeople(booking)) {
        this.addDailyPerson(daily_people, booking.date, person.id);
      }
    }
    return this.countDailyPeople(daily_people);
  }
  getDailyVisitorAttendance(bookings) {
    const daily_people = /* @__PURE__ */ new Map();
    for (const booking of bookings) {
      for (const person of this.getVisitorAttendancePeople(booking)) {
        this.addDailyPerson(daily_people, booking.date, person.id);
      }
    }
    return this.countDailyPeople(daily_people);
  }
  getPeopleCount(booking) {
    return booking.extension_data?.people_count;
  }
  getEventPeople(bookings) {
    return bookings.map((booking) => this.getEventPerson(booking).id).filter((value) => !!value);
  }
  getEventAttendeePeople(bookings) {
    return bookings.flatMap((booking) => this.getEventAttendees(booking)).map((person) => person.id).filter((value) => !!value);
  }
  getEventAttendancePeople(booking) {
    return [
      this.getEventPerson(booking),
      ...this.getEventAttendees(booking)
    ];
  }
  getBookingAttendancePeople(booking) {
    return [
      this.getBookingPerson(booking),
      ...this.getBookingAttendees(booking)
    ];
  }
  getVisitorAttendancePeople(booking) {
    return [this.getBookingPerson(booking), this.getVisitorPerson(booking)];
  }
  getBookingPeople(bookings) {
    return bookings.map((booking) => this.getBookingPerson(booking).id).filter((value) => !!value);
  }
  getEventPerson(booking) {
    const id = booking.host || booking.organiser?.email || "";
    return this.isRoomResource(booking, id) ? { id: "", name: "" } : { id, name: booking.organiser?.name || id };
  }
  getBookingPerson(booking) {
    const id = booking.user_email || booking.booked_by_email || booking.user_id || "";
    return { id, name: booking.user_name || booking.booked_by_name || id };
  }
  getEventAttendees(booking) {
    const host_id = this.getEventPerson(booking).id.toLowerCase();
    return (booking.attendees || []).map((user) => this.getUserPerson(user)).filter((person) => person.id && person.id.toLowerCase() !== host_id && !this.isRoomResource(booking, person.id));
  }
  getBookingAttendees(booking) {
    return (booking.attendees || []).map((user) => this.getUserPerson(user)).filter((person) => !!person.id);
  }
  isRoomResource(booking, id = "") {
    const value = id.toLowerCase();
    if (!value)
      return false;
    return this.getRoomResourceIds(booking).includes(value);
  }
  getRoomResourceIds(booking) {
    return [booking.system, ...booking.resources || []].flatMap((resource) => [resource?.id, resource?.email]).filter((value) => !!value).map((value) => value.toLowerCase());
  }
  getUserPerson(user) {
    const id = user.email || user.id || user.name || "";
    return { id, name: user.name || id };
  }
  getVisitorPerson(booking) {
    const id = booking.asset_id || booking.extension_data?.visitor_email || booking.asset_name || booking.extension_data?.visitor_name || "";
    return {
      id,
      name: booking.asset_name || booking.extension_data?.visitor_name || id
    };
  }
  getVisitorPeople(bookings) {
    return bookings.map((booking) => this.getVisitorPerson(booking).id).filter((value) => !!value);
  }
  toFixed(value) {
    return Math.round(value * 10) / 10;
  }
  static {
    this.\u0275fac = function SiteAttendanceReportService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteAttendanceReportService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SiteAttendanceReportService, factory: _SiteAttendanceReportService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteAttendanceReportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/reports/attendance/site-attendance-report.component.ts
var _c02 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "events", name: a0, show: a1 });
var _c2 = (a0, a1) => ({ key: "desks", name: a0, show: a1 });
var _c3 = (a0, a1) => ({ key: "parking", name: a0, show: a1 });
var _c4 = (a0, a1) => ({ key: "lockers", name: a0, show: a1 });
var _c5 = (a0, a1) => ({ key: "visitors", name: a0, show: a1 });
var _c6 = (a0) => ({ key: "total", name: a0 });
var _c7 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
var _forTrack0 = ($index, $item) => $item.id;
function SiteAttendanceReportComponent_Conditional_9_Conditional_0_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 25)(2, "div", 26)(3, "icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 27)(6, "h3", 28);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 13);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 29)(15, "div", 30)(16, "div", 31);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 32);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 30)(22, "div", 31);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 32);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 30)(28, "div", 31);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 32);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 30)(34, "div", 31);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 32);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 33)(40, "div", 30)(41, "div", 31);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 32);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 30)(47, "div", 31);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 32);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 34);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.details[card_r1.id].icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 17, ctx_r1.details[card_r1.id].label), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", card_r1.attendance, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 19, "APP.CONCIERGE.REPORTS_SITE_ATTENDANCE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 21, "APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", card_r1.bookings, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 23, "APP.CONCIERGE.REPORTS_DAILY_AVERAGE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", card_r1.daily_average, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 25, "APP.CONCIERGE.REPORTS_AVERAGE_LENGTH"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", card_r1.average_length, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 27, "APP.CONCIERGE.REPORTS_UNIQUE_PEOPLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", card_r1.unique_people, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 29, "APP.CONCIERGE.REPORTS_RESOURCES_USED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", card_r1.resource_summary, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 31, card_r1.status_label), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", card_r1.status_count, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", card_r1.status_rate, "% ");
  }
}
function SiteAttendanceReportComponent_Conditional_9_Conditional_0_ng_template_69_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.id, " ");
  }
}
function SiteAttendanceReportComponent_Conditional_9_Conditional_0_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, SiteAttendanceReportComponent_Conditional_9_Conditional_0_ng_template_69_Conditional_3_Template, 2, 1, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r3.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.name !== row_r3.id ? 3 : -1);
  }
}
function SiteAttendanceReportComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "placeos-report-metric-guide", 10);
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12)(3, "h3", 13);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 12)(9, "h3", 13);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 14);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 12)(15, "h3", 13);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 14);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 12)(21, "h3", 13);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 14);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 12)(27, "h3", 13);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 14);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 15);
    \u0275\u0275element(33, "site-attendance-report-chart", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 17);
    \u0275\u0275repeaterCreate(35, SiteAttendanceReportComponent_Conditional_9_Conditional_0_For_36_Template, 54, 33, "div", 18, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 19)(38, "div", 20)(39, "div", 21)(40, "h3", 22);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "placeos-report-metric-guide", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "simple-table", 24);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 19)(54, "div", 20)(55, "div", 21)(56, "h3", 22);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "placeos-report-metric-guide", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "simple-table", 24);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(69, SiteAttendanceReportComponent_Conditional_9_Conditional_0_ng_template_69_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const person_template_r4 = \u0275\u0275reference(70);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("absolute", true)("items", ctx_r1.metric_guide);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 30, "APP.CONCIERGE.REPORTS_TOTAL_SITE_ATTENDANCE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.report().total_attendance, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 32, "APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.report().total_bookings, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 34, "APP.CONCIERGE.REPORTS_ACTIVE_TYPES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.report().active_types, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 36, "APP.CONCIERGE.REPORTS_UNIQUE_PEOPLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.report().unique_people, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 38, "APP.CONCIERGE.REPORTS_BUSINESS_DAYS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.report().business_days, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("daily_attendance", ctx_r1.report().daily_attendance)("show_parking", ctx_r1.hasResource("parking"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.report().cards);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 40, "APP.CONCIERGE.REPORTS_HOSTS_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r1.people_table_metric_guide())("inline", true);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r1.report().hosts)("columns", \u0275\u0275pureFunction7(96, _c7, \u0275\u0275pureFunction2(76, _c02, \u0275\u0275pipeBind1(45, 42, "FORM.HOST"), person_template_r4), \u0275\u0275pureFunction2(79, _c1, \u0275\u0275pipeBind1(46, 44, "RESOURCE.ROOMS"), ctx_r1.hasResource("events")), \u0275\u0275pureFunction2(82, _c2, \u0275\u0275pipeBind1(47, 46, "RESOURCE.DESKS"), ctx_r1.hasResource("desks")), \u0275\u0275pureFunction2(85, _c3, \u0275\u0275pipeBind1(48, 48, "RESOURCE.PARKING"), ctx_r1.hasResource("parking")), \u0275\u0275pureFunction2(88, _c4, \u0275\u0275pipeBind1(49, 50, "RESOURCE.LOCKERS"), ctx_r1.hasResource("lockers")), \u0275\u0275pureFunction2(91, _c5, \u0275\u0275pipeBind1(50, 52, "RESOURCE.VISITORS"), ctx_r1.hasResource("visitors")), \u0275\u0275pureFunction1(94, _c6, \u0275\u0275pipeBind1(51, 54, "APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS"))))("page_size", ctx_r1.printing() ? 0 : 10)("sortable", true)("empty_message", \u0275\u0275pipeBind1(52, 56, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 58, "CALENDAR_EVENT.ATTENDEES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r1.people_table_metric_guide())("inline", true);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r1.report().attendees)("columns", \u0275\u0275pureFunction7(124, _c7, \u0275\u0275pureFunction2(104, _c02, \u0275\u0275pipeBind1(61, 60, "CALENDAR_EVENT.ATTENDEES"), person_template_r4), \u0275\u0275pureFunction2(107, _c1, \u0275\u0275pipeBind1(62, 62, "RESOURCE.ROOMS"), ctx_r1.hasResource("events")), \u0275\u0275pureFunction2(110, _c2, \u0275\u0275pipeBind1(63, 64, "RESOURCE.DESKS"), ctx_r1.hasResource("desks")), \u0275\u0275pureFunction2(113, _c3, \u0275\u0275pipeBind1(64, 66, "RESOURCE.PARKING"), ctx_r1.hasResource("parking")), \u0275\u0275pureFunction2(116, _c4, \u0275\u0275pipeBind1(65, 68, "RESOURCE.LOCKERS"), ctx_r1.hasResource("lockers")), \u0275\u0275pureFunction2(119, _c5, \u0275\u0275pipeBind1(66, 70, "RESOURCE.VISITORS"), ctx_r1.hasResource("visitors")), \u0275\u0275pureFunction1(122, _c6, \u0275\u0275pipeBind1(67, 72, "APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS"))))("page_size", ctx_r1.printing() ? 0 : 10)("sortable", true)("empty_message", \u0275\u0275pipeBind1(68, 74, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
  }
}
function SiteAttendanceReportComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.REPORTS_EMPTY"), " ");
  }
}
function SiteAttendanceReportComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SiteAttendanceReportComponent_Conditional_9_Conditional_0_Template, 71, 132)(1, SiteAttendanceReportComponent_Conditional_9_Conditional_1_Template, 4, 3, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.has_data() ? 0 : 1);
  }
}
function SiteAttendanceReportComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "mat-spinner", 38);
    \u0275\u0275elementStart(2, "p", 37);
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
var CARD_DETAILS = {
  events: {
    icon: "meeting_room",
    label: "APP.CONCIERGE.MENU_REPORT_ROOMS"
  },
  desks: {
    icon: "desk",
    label: "APP.CONCIERGE.MENU_REPORT_DESKS"
  },
  parking: {
    icon: "local_parking",
    label: "APP.CONCIERGE.MENU_REPORT_PARKING"
  },
  lockers: {
    icon: "lock",
    label: "APP.CONCIERGE.MENU_REPORT_LOCKERS"
  },
  visitors: {
    icon: "badge",
    label: "APP.CONCIERGE.MENU_REPORT_VISITORS"
  }
};
var METRIC_GUIDE = [
  {
    label: "Total site attendance",
    description: "Sum of unique people per day across enabled booking types in the selected period. Group events and room resource identifiers are excluded."
  },
  {
    label: "Total bookings",
    description: "All active bookings and events included in the enabled attendance resource types for the selected dates and zones."
  },
  {
    label: "Active types",
    description: "Number of enabled resource types with at least one booking in the report."
  },
  {
    label: "Unique people",
    description: "Distinct room hosts, booking owners, and visitors found across included bookings, matched by available user identifier. Room resource identifiers are ignored."
  },
  {
    label: "Daily average",
    description: "Attendance for the resource type divided by business days. Weekends are excluded by default unless the site attendance weekend setting is enabled."
  },
  {
    label: "Resources used",
    description: "Unique booked rooms, desks, parking spaces, lockers, or visitor bookings compared with known resource count where available."
  }
];
var PEOPLE_TABLE_METRIC_GUIDE = [
  {
    label: "Rooms",
    description: "Room bookings where the person appears as host or attendee. Room resource identifiers are ignored."
  },
  {
    label: "Desks",
    description: "Desk bookings where the person appears as booking owner or attendee."
  },
  {
    label: "Parking",
    description: "Parking bookings where the person appears as booking owner or attendee."
  },
  {
    label: "Lockers",
    description: "Locker bookings where the person appears as booking owner or attendee."
  },
  {
    label: "Visitors",
    description: "Visitor bookings where the person appears as booking owner or attendee."
  },
  {
    label: "Total bookings",
    description: "Sum of that person's counted room, desk, parking, locker, and visitor bookings in the report."
  },
  {
    label: "Host rows",
    description: "Hosts are grouped by host, organiser, booking user, or booked-by identifier depending on booking type. Room resources are ignored."
  },
  {
    label: "Attendee rows",
    description: "Attendees are grouped from booking attendee lists; room hosts and room resources are excluded from attendee rows."
  }
];
var SiteAttendanceReportComponent = class _SiteAttendanceReportComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(SiteAttendanceReportService);
    this._settings = inject(SettingsService);
    this._route = inject(ActivatedRoute);
    this._org = inject(OrganisationService);
    this.details = CARD_DETAILS;
    this.metric_guide = METRIC_GUIDE;
    this.people_table_metric_guide = computed(
      () => PEOPLE_TABLE_METRIC_GUIDE.filter((item) => {
        if (item.label === "Rooms")
          return this.hasResource("events");
        if (item.label === "Desks")
          return this.hasResource("desks");
        if (item.label === "Parking")
          return this.hasResource("parking");
        if (item.label === "Lockers")
          return this.hasResource("lockers");
        if (item.label === "Visitors")
          return this.hasResource("visitors");
        return true;
      }),
      ...ngDevMode ? [{ debugName: "people_table_metric_guide" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.printing = signal(
      false,
      ...ngDevMode ? [{ debugName: "printing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.report = this._state.report;
    this.loading = this._state.loading;
    this.has_data = computed(
      () => !!this.report().total_bookings,
      ...ngDevMode ? [{ debugName: "has_data" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.downloadReport = () => this._state.downloadReport();
    this.generateReport = () => this._state.generateReport();
    this.hasResource = (id) => this.report().cards.some((card) => card.id === id);
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
    this.\u0275fac = function SiteAttendanceReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteAttendanceReportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SiteAttendanceReportComponent, selectors: [["", "site-attendance-report", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 8, consts: [["person_template", ""], [3, "printing", "download", "generate", "loading", "has_data", "hide_level_selector"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "print:h-auto", "print:overflow-visible"], [1, "w-full"], [1, "bg-base-200", "m-4", "flex", "items-center", "rounded-sm", "p-4"], ["alt", "", "auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "px-2", "text-2xl", "font-medium"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [1, "screen-only", "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [3, "absolute", "items"], [1, "grid", "grid-cols-1", "gap-4", "px-4", "pb-4", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "xl:grid-cols-5"], [1, "border-base-300", "bg-base-100", "rounded-sm", "border", "p-4", "shadow"], [1, "text-sm", "opacity-70"], [1, "mt-2", "text-3xl", "font-semibold"], [1, "px-4", "pb-4"], [3, "daily_attendance", "show_parking"], [1, "attendance-cards", "grid", "grid-cols-1", "gap-4", "px-4", "pb-8", "md:grid-cols-2", "xl:grid-cols-3"], [1, "attendance-card", "border-base-200", "bg-base-100", "rounded-sm", "border", "p-5", "shadow-sm"], [1, "px-4", "pb-8"], [1, "attendance-table-block", "border-base-200", "bg-base-100", "overflow-hidden", "rounded-sm", "border", "shadow-sm"], [1, "attendance-table-header", "border-base-200", "flex", "items-center", "justify-between", "border-b", "px-4"], [1, "py-4", "text-lg", "font-semibold"], ["title", "Table column calculations", 3, "items", "inline"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "page_size", "sortable", "empty_message"], [1, "flex", "items-start", "gap-4"], [1, "bg-secondary", "text-secondary-content", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-2xl"], [1, "min-w-0", "flex-1"], [1, "text-lg", "font-semibold"], [1, "border-base-200", "mt-4", "grid", "grid-cols-2", "gap-3", "border-t", "pt-4"], [1, "bg-base-200", "rounded-sm", "p-3"], [1, "text-xs", "uppercase", "opacity-70"], [1, "mt-1", "text-xl", "font-medium"], [1, "mt-4", "grid", "grid-cols-2", "gap-3"], [1, "text-xs", "opacity-70"], [1, "p-4"], [1, "font-medium"], [1, "opacity-70"], [1, "mb-4", 3, "diameter"]], template: function SiteAttendanceReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "reports-options", 1);
        \u0275\u0275listener("printing", function SiteAttendanceReportComponent_Template_reports_options_printing_0_listener($event) {
          return ctx.printing.set($event);
        })("download", function SiteAttendanceReportComponent_Template_reports_options_download_0_listener() {
          return ctx.downloadReport();
        })("generate", function SiteAttendanceReportComponent_Template_reports_options_generate_0_listener() {
          return ctx.generateReport();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4);
        \u0275\u0275element(4, "img", 5)(5, "div", 6);
        \u0275\u0275elementStart(6, "h2", 7);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(9, SiteAttendanceReportComponent_Conditional_9_Template, 2, 1)(10, SiteAttendanceReportComponent_Conditional_10_Template, 5, 4, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("loading", ctx.loading())("has_data", ctx.has_data())("hide_level_selector", true);
        \u0275\u0275advance(4);
        \u0275\u0275property("source", ctx.logo()?.src || ctx.logo());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 6, "APP.CONCIERGE.REPORTS_SITE_ATTENDANCE_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 9 : 10);
      }
    }, dependencies: [
      ReportsOptionsComponent,
      AuthenticatedImageDirective,
      IconComponent,
      SimpleTableComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      ReportMetricGuideComponent,
      SiteAttendanceReportChartComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n@media print {\n  @page {\n    size: landscape;\n    margin: 12mm;\n  }\n  [_nghost-%COMP%] {\n    height: auto !important;\n    color: #111827;\n  }\n  .attendance-cards[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 0.75rem;\n    padding-bottom: 1rem !important;\n  }\n  .attendance-card[_ngcontent-%COMP%] {\n    page-break-inside: avoid;\n    break-inside: avoid-page;\n    box-shadow: none !important;\n  }\n  .attendance-card[_ngcontent-%COMP%]    + .attendance-card[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .attendance-table-block[_ngcontent-%COMP%] {\n    break-inside: avoid-page;\n    page-break-inside: avoid;\n    box-shadow: none !important;\n  }\n  .attendance-table-header[_ngcontent-%COMP%] {\n    break-after: avoid-page;\n    page-break-after: avoid;\n  }\n  simple-table[_ngcontent-%COMP%] {\n    break-before: avoid-page;\n    page-break-before: avoid;\n    page-break-inside: avoid;\n    break-inside: avoid-page;\n  }\n}\n/*# sourceMappingURL=site-attendance-report.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteAttendanceReportComponent, [{
    type: Component,
    args: [{ selector: "[site-attendance-report]", template: `
        <reports-options
            (printing)="printing.set($event)"
            [loading]="loading()"
            [has_data]="has_data()"
            [hide_level_selector]="true"
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
                        {{
                            'APP.CONCIERGE.REPORTS_SITE_ATTENDANCE_HEADER'
                                | translate
                        }}
                    </h2>
                </div>
            </div>
            @if (!loading()) {
                @if (has_data()) {
                    <placeos-report-metric-guide
                        [absolute]="true"
                        [items]="metric_guide"
                    />
                    <div
                        class="grid grid-cols-1 gap-4 px-4 pb-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                    >
                        <div
                            class="border-base-300 bg-base-100 rounded-sm border p-4 shadow"
                        >
                            <h3 class="text-sm opacity-70">
                                {{
                                    'APP.CONCIERGE.REPORTS_TOTAL_SITE_ATTENDANCE'
                                        | translate
                                }}
                            </h3>
                            <p class="mt-2 text-3xl font-semibold">
                                {{ report().total_attendance }}
                            </p>
                        </div>
                        <div
                            class="border-base-300 bg-base-100 rounded-sm border p-4 shadow"
                        >
                            <h3 class="text-sm opacity-70">
                                {{
                                    'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS'
                                        | translate
                                }}
                            </h3>
                            <p class="mt-2 text-3xl font-semibold">
                                {{ report().total_bookings }}
                            </p>
                        </div>
                        <div
                            class="border-base-300 bg-base-100 rounded-sm border p-4 shadow"
                        >
                            <h3 class="text-sm opacity-70">
                                {{
                                    'APP.CONCIERGE.REPORTS_ACTIVE_TYPES'
                                        | translate
                                }}
                            </h3>
                            <p class="mt-2 text-3xl font-semibold">
                                {{ report().active_types }}
                            </p>
                        </div>
                        <div
                            class="border-base-300 bg-base-100 rounded-sm border p-4 shadow"
                        >
                            <h3 class="text-sm opacity-70">
                                {{
                                    'APP.CONCIERGE.REPORTS_UNIQUE_PEOPLE'
                                        | translate
                                }}
                            </h3>
                            <p class="mt-2 text-3xl font-semibold">
                                {{ report().unique_people }}
                            </p>
                        </div>
                        <div
                            class="border-base-300 bg-base-100 rounded-sm border p-4 shadow"
                        >
                            <h3 class="text-sm opacity-70">
                                {{
                                    'APP.CONCIERGE.REPORTS_BUSINESS_DAYS'
                                        | translate
                                }}
                            </h3>
                            <p class="mt-2 text-3xl font-semibold">
                                {{ report().business_days }}
                            </p>
                        </div>
                    </div>

                    <div class="px-4 pb-4">
                        <site-attendance-report-chart
                            [daily_attendance]="report().daily_attendance"
                            [show_parking]="hasResource('parking')"
                        />
                    </div>

                    <div
                        class="attendance-cards grid grid-cols-1 gap-4 px-4 pb-8 md:grid-cols-2 xl:grid-cols-3"
                    >
                        @for (card of report().cards; track card.id) {
                            <div
                                class="attendance-card border-base-200 bg-base-100 rounded-sm border p-5 shadow-sm"
                            >
                                <div class="flex items-start gap-4">
                                    <div
                                        class="bg-secondary text-secondary-content flex h-12 w-12 items-center justify-center rounded-2xl"
                                    >
                                        <icon>{{ details[card.id].icon }}</icon>
                                    </div>
                                    <div class="min-w-0 flex-1">
                                        <h3 class="text-lg font-semibold">
                                            {{
                                                details[card.id].label
                                                    | translate
                                            }}
                                        </h3>
                                        <p class="mt-2 text-3xl font-semibold">
                                            {{ card.attendance }}
                                        </p>
                                        <p class="text-sm opacity-70">
                                            {{
                                                'APP.CONCIERGE.REPORTS_SITE_ATTENDANCE'
                                                    | translate
                                            }}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    class="border-base-200 mt-4 grid grid-cols-2 gap-3 border-t pt-4"
                                >
                                    <div class="bg-base-200 rounded-sm p-3">
                                        <div
                                            class="text-xs uppercase opacity-70"
                                        >
                                            {{
                                                'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="mt-1 text-xl font-medium">
                                            {{ card.bookings }}
                                        </div>
                                    </div>
                                    <div class="bg-base-200 rounded-sm p-3">
                                        <div
                                            class="text-xs uppercase opacity-70"
                                        >
                                            {{
                                                'APP.CONCIERGE.REPORTS_DAILY_AVERAGE'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="mt-1 text-xl font-medium">
                                            {{ card.daily_average }}
                                        </div>
                                    </div>
                                    <div class="bg-base-200 rounded-sm p-3">
                                        <div
                                            class="text-xs uppercase opacity-70"
                                        >
                                            {{
                                                'APP.CONCIERGE.REPORTS_AVERAGE_LENGTH'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="mt-1 text-xl font-medium">
                                            {{ card.average_length }}
                                        </div>
                                    </div>
                                    <div class="bg-base-200 rounded-sm p-3">
                                        <div
                                            class="text-xs uppercase opacity-70"
                                        >
                                            {{
                                                'APP.CONCIERGE.REPORTS_UNIQUE_PEOPLE'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="mt-1 text-xl font-medium">
                                            {{ card.unique_people }}
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-4 grid grid-cols-2 gap-3">
                                    <div class="bg-base-200 rounded-sm p-3">
                                        <div
                                            class="text-xs uppercase opacity-70"
                                        >
                                            {{
                                                'APP.CONCIERGE.REPORTS_RESOURCES_USED'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="mt-1 text-xl font-medium">
                                            {{ card.resource_summary }}
                                        </div>
                                    </div>
                                    <div class="bg-base-200 rounded-sm p-3">
                                        <div
                                            class="text-xs uppercase opacity-70"
                                        >
                                            {{ card.status_label | translate }}
                                        </div>
                                        <div class="mt-1 text-xl font-medium">
                                            {{ card.status_count }}
                                        </div>
                                        <div class="text-xs opacity-70">
                                            {{ card.status_rate }}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    <div class="px-4 pb-8">
                        <div
                            class="attendance-table-block border-base-200 bg-base-100 overflow-hidden rounded-sm border shadow-sm"
                        >
                            <div
                                class="attendance-table-header border-base-200 flex items-center justify-between border-b px-4"
                            >
                                <h3 class="py-4 text-lg font-semibold">
                                    {{
                                        'APP.CONCIERGE.REPORTS_HOSTS_HEADER'
                                            | translate
                                    }}
                                </h3>
                                <placeos-report-metric-guide
                                    title="Table column calculations"
                                    [items]="people_table_metric_guide()"
                                    [inline]="true"
                                />
                            </div>
                            <simple-table
                                class="block w-full text-sm"
                                [data]="report().hosts"
                                [columns]="[
                                    {
                                        key: 'name',
                                        name: 'FORM.HOST' | translate,
                                        content: person_template,
                                    },
                                    {
                                        key: 'events',
                                        name: 'RESOURCE.ROOMS' | translate,
                                        show: hasResource('events'),
                                    },
                                    {
                                        key: 'desks',
                                        name: 'RESOURCE.DESKS' | translate,
                                        show: hasResource('desks'),
                                    },
                                    {
                                        key: 'parking',
                                        name: 'RESOURCE.PARKING' | translate,
                                        show: hasResource('parking'),
                                    },
                                    {
                                        key: 'lockers',
                                        name: 'RESOURCE.LOCKERS' | translate,
                                        show: hasResource('lockers'),
                                    },
                                    {
                                        key: 'visitors',
                                        name: 'RESOURCE.VISITORS' | translate,
                                        show: hasResource('visitors'),
                                    },
                                    {
                                        key: 'total',
                                        name:
                                            'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS'
                                            | translate,
                                    },
                                ]"
                                [page_size]="printing() ? 0 : 10"
                                [sortable]="true"
                                [empty_message]="
                                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY'
                                        | translate
                                "
                            ></simple-table>
                        </div>
                    </div>

                    <div class="px-4 pb-8">
                        <div
                            class="attendance-table-block border-base-200 bg-base-100 overflow-hidden rounded-sm border shadow-sm"
                        >
                            <div
                                class="attendance-table-header border-base-200 flex items-center justify-between border-b px-4"
                            >
                                <h3 class="py-4 text-lg font-semibold">
                                    {{ 'CALENDAR_EVENT.ATTENDEES' | translate }}
                                </h3>
                                <placeos-report-metric-guide
                                    title="Table column calculations"
                                    [items]="people_table_metric_guide()"
                                    [inline]="true"
                                />
                            </div>
                            <simple-table
                                class="block w-full text-sm"
                                [data]="report().attendees"
                                [columns]="[
                                    {
                                        key: 'name',
                                        name:
                                            'CALENDAR_EVENT.ATTENDEES'
                                            | translate,
                                        content: person_template,
                                    },
                                    {
                                        key: 'events',
                                        name: 'RESOURCE.ROOMS' | translate,
                                        show: hasResource('events'),
                                    },
                                    {
                                        key: 'desks',
                                        name: 'RESOURCE.DESKS' | translate,
                                        show: hasResource('desks'),
                                    },
                                    {
                                        key: 'parking',
                                        name: 'RESOURCE.PARKING' | translate,
                                        show: hasResource('parking'),
                                    },
                                    {
                                        key: 'lockers',
                                        name: 'RESOURCE.LOCKERS' | translate,
                                        show: hasResource('lockers'),
                                    },
                                    {
                                        key: 'visitors',
                                        name: 'RESOURCE.VISITORS' | translate,
                                        show: hasResource('visitors'),
                                    },
                                    {
                                        key: 'total',
                                        name:
                                            'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS'
                                            | translate,
                                    },
                                ]"
                                [page_size]="printing() ? 0 : 10"
                                [sortable]="true"
                                [empty_message]="
                                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY'
                                        | translate
                                "
                            ></simple-table>
                        </div>
                    </div>

                    <ng-template #person_template let-row="row">
                        <div class="p-4">
                            <div class="font-medium">
                                {{ row.name }}
                            </div>
                            @if (row.name !== row.id) {
                                <div class="text-xs opacity-70">
                                    {{ row.id }}
                                </div>
                            }
                        </div>
                    </ng-template>
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
      ReportsOptionsComponent,
      AuthenticatedImageDirective,
      IconComponent,
      SimpleTableComponent,
      MatProgressSpinnerModule,
      TranslatePipe,
      ReportMetricGuideComponent,
      SiteAttendanceReportChartComponent
    ], styles: ["/* angular:styles/component:css;1414fea0fb71b4890d4f75108dd10d4d7dff40e4879c74165802cba5a63bf7ee;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/attendance/site-attendance-report.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n@media print {\n  @page {\n    size: landscape;\n    margin: 12mm;\n  }\n  :host {\n    height: auto !important;\n    color: #111827;\n  }\n  .attendance-cards {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 0.75rem;\n    padding-bottom: 1rem !important;\n  }\n  .attendance-card {\n    page-break-inside: avoid;\n    break-inside: avoid-page;\n    box-shadow: none !important;\n  }\n  .attendance-card + .attendance-card {\n    margin-top: 0;\n  }\n  .attendance-table-block {\n    break-inside: avoid-page;\n    page-break-inside: avoid;\n    box-shadow: none !important;\n  }\n  .attendance-table-header {\n    break-after: avoid-page;\n    page-break-after: avoid;\n  }\n  simple-table {\n    break-before: avoid-page;\n    page-break-before: avoid;\n    page-break-inside: avoid;\n    break-inside: avoid-page;\n  }\n}\n/*# sourceMappingURL=site-attendance-report.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SiteAttendanceReportComponent, { className: "SiteAttendanceReportComponent", filePath: "apps/concierge/src/app/reports/attendance/site-attendance-report.component.ts", lineNumber: 594 });
})();
export {
  SiteAttendanceReportComponent
};
//# debugId=22227ec3-df6f-5024-9d97-ece4b3e89fb9
//# sourceMappingURL=site-attendance-report.component-5PFWNDPG.js.map
