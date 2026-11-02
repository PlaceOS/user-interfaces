import {
  ReportsStateService
} from "./chunk-NOWLXUKQ.js";
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
  ReportMetricGuideComponent
} from "./chunk-3FCCIC2A.js";
import {
  formatReportPercentage
} from "./chunk-BNYZLQSX.js";
import {
  SimpleTableComponent
} from "./chunk-KNA7FLRC.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-QWYXFXJS.js";
import {
  TranslatePipe
} from "./chunk-SWZTUYHJ.js";
import {
  OrganisationService,
  SettingsService
} from "./chunk-OUOM6FKL.js";
import {
  IconComponent
} from "./chunk-NE545G3N.js";
import {
  AsyncHandler,
  differenceInCalendarDays,
  downloadFile,
  format,
  jsonToCsv,
  normalizeDates
} from "./chunk-XMOMB3G6.js";
import {
  MatRippleModule
} from "./chunk-3WBJTYSG.js";
import {
  MatRipple
} from "./chunk-QSD4JXRO.js";
import {
  CommonModule,
  Component,
  DatePipe,
  Input,
  ViewChild,
  computed,
  effect,
  inject,
  input,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
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

// node_modules/date-fns/differenceInDays.js
function differenceInDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const sign = compareLocalAsc(laterDate_, earlierDate_);
  const difference = Math.abs(
    differenceInCalendarDays(laterDate_, earlierDate_)
  );
  laterDate_.setDate(laterDate_.getDate() - sign * difference);
  const isLastDayNotFull = Number(
    compareLocalAsc(laterDate_, earlierDate_) === -sign
  );
  const result = sign * (difference - isLastDayNotFull);
  return result === 0 ? 0 : result;
}
function compareLocalAsc(laterDate, earlierDate) {
  const diff = laterDate.getFullYear() - earlierDate.getFullYear() || laterDate.getMonth() - earlierDate.getMonth() || laterDate.getDate() - earlierDate.getDate() || laterDate.getHours() - earlierDate.getHours() || laterDate.getMinutes() - earlierDate.getMinutes() || laterDate.getSeconds() - earlierDate.getSeconds() || laterDate.getMilliseconds() - earlierDate.getMilliseconds();
  if (diff < 0) return -1;
  if (diff > 0) return 1;
  return diff;
}

// apps/concierge/src/app/reports/report-usage-charts.component.ts
var _c0 = ["dailyChart"];
var _c1 = ["levelChart"];
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, PieController, ArcElement, plugin_tooltip, plugin_legend);
var ReportUsageChartsComponent = class _ReportUsageChartsComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(ReportsStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.print = input(
      false,
      ...ngDevMode ? [{ debugName: "print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.day_list = this._state.day_list;
    this.options = this._state.options;
    this.counts = this._state.counts;
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
      this.options();
      this.counts();
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
      this.updateDailyChart(this.day_list());
      this.updateLevelChart(this.options(), this.counts());
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
        labels: list.map((_) => format(_.date, "dd MMM")),
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
      zones = this._settings.get("app.use_region") ? this._org.levelsForRegion().map((_) => _.id) : this._org.levelsForBuilding().map((_) => _.id);
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
    this.\u0275fac = function ReportUsageChartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportUsageChartsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportUsageChartsComponent, selectors: [["report-usage-charts"]], viewQuery: function ReportUsageChartsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._daily_chart_el, _c0, 5)(ctx._level_chart_el, _c1, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, inputs: { print: [1, "print"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 14, consts: [["dailyChart", ""], ["levelChart", ""], [1, "flex", "w-full", "items-center", "space-x-4", "px-4", 3, "resize"], [1, "border-base-200", "bg-base-100", "h-72", "flex-1", "rounded-sm", "border"], [1, "border-base-200", "border-b", "p-4", "text-xl", "font-bold"], [1, "mx-auto", "h-56", "w-full", "max-w-full", "p-2"], ["role", "img"], [1, "mx-auto", "h-56", "w-[24rem]", "max-w-full", "p-2"]], template: function ReportUsageChartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 2);
        \u0275\u0275domListener("resize", function ReportUsageChartsComponent_Template_div_resize_0_listener() {
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
    }, dependencies: [TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.is-print[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  width: 8cm !important;\n}\n/*# sourceMappingURL=report-usage-charts.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportUsageChartsComponent, [{
    type: Component,
    args: [{ selector: "report-usage-charts", template: `
        <div
            class="flex w-full items-center space-x-4 px-4"
            [class.is-print]="print()"
            (window:resize)="updateCharts()"
        >
            <div
                class="border-base-200 bg-base-100 h-72 flex-1 rounded-sm border"
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
                class="border-base-200 bg-base-100 h-72 flex-1 rounded-sm border"
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
    `, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;554a1b12239fa29aec32e67883eab593b53d44df3427eee1e23c3736e6afc0f4;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/report-usage-charts.component.ts */\n:host {\n  display: block;\n}\n.is-print canvas {\n  width: 8cm !important;\n}\n/*# sourceMappingURL=report-usage-charts.component.css.map */\n"] }]
  }], () => [], { print: [{ type: Input, args: [{ isSignal: true, alias: "print", required: false }] }], _daily_chart_el: [{ type: ViewChild, args: ["dailyChart", { isSignal: true }] }], _level_chart_el: [{ type: ViewChild, args: ["levelChart", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportUsageChartsComponent, { className: "ReportUsageChartsComponent", filePath: "apps/concierge/src/app/reports/report-usage-charts.component.ts", lineNumber: 105 });
})();

// apps/concierge/src/app/reports/report-usage-list.component.ts
var _c02 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c12 = (a0) => ({ key: "approved", name: a0 });
var _c2 = (a0) => ({ key: "count", name: a0 });
var _c3 = (a0) => ({ key: "cancelled", name: "Rejected", content: a0 });
var _c4 = (a0) => ({ key: "deleted", name: "Cancelled", content: a0 });
var _c5 = (a0, a1) => ({ key: "utilisation", name: a0, content: a1 });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function ReportUsageListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ReportUsageListComponent_Conditional_6_Template_button_click_0_listener() {
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
function ReportUsageListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, data_r3, "mediumDate"));
  }
}
function ReportUsageListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", data_r4 || "0", "%");
  }
}
function ReportUsageListComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    const row_r6 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatPercent(data_r5, row_r6.count), " ");
  }
}
function tableMetricGuide(total_requests, utilisation) {
  return [
    {
      label: "Approved",
      description: "Bookings on the day where the booking is approved."
    },
    { label: "Total requests", description: total_requests },
    {
      label: "Rejected / Cancelled",
      description: "Displayed as count and percentage of total requests for that day."
    },
    { label: "Utilisation", description: utilisation }
  ];
}
var USAGE_LISTS = {
  desks: {
    metric_guide: tableMetricGuide("All desk bookings on the day, including active, rejected, and cancelled bookings.", "Active desk bookings divided by the greater of active bookings or available desk count for that day."),
    date_format: "MMM d, y(EEE)",
    file_name: "desks-usage.csv"
  },
  spaces: {
    metric_guide: tableMetricGuide("All room bookings on the day, including active, rejected, and cancelled events.", "Booked room time divided by available room time for that day."),
    date_format: "MMMM d, y(EEE)",
    file_name: "spaces-usage.csv"
  }
};
var ReportUsageListComponent = class _ReportUsageListComponent {
  constructor() {
    this._state = inject(ReportsStateService);
    this.type = input.required(
      ...ngDevMode ? [{ debugName: "type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.print = input(
      false,
      ...ngDevMode ? [{ debugName: "print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.config = computed(
      () => USAGE_LISTS[this.type()],
      ...ngDevMode ? [{ debugName: "config" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.day_list = this._state.day_list;
    this.download = async () => {
      const { date_format, file_name } = this.config();
      const data = this.day_list().map((d) => __spreadProps(__spreadValues({}, d), {
        date: format(d.date, date_format),
        cancelled: formatReportPercentage(d.cancelled, d.count),
        deleted: formatReportPercentage(d.deleted, d.count)
      }));
      downloadFile(file_name, jsonToCsv(data));
    };
    this.formatPercent = formatReportPercentage;
  }
  static {
    this.\u0275fac = function ReportUsageListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportUsageListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportUsageListComponent, selectors: [["report-usage-list"]], inputs: { type: [1, "type"], print: [1, "print"] }, decls: 20, vars: 44, consts: [["date_template", ""], ["percent_template", ""], ["booking_percent_template", ""], [1, "w-full"], [1, "border-base-200", "bg-base-100", "m-4", "overflow-hidden", "rounded-sm", "border"], [1, "border-base-200", "flex", "items-center", "border-b", "p-4"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], ["title", "Table column calculations", 3, "items", "inline"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"]], template: function ReportUsageListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "h3", 6);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, ReportUsageListComponent_Conditional_6_Template, 5, 6, "button", 7);
        \u0275\u0275element(7, "placeos-report-metric-guide", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "simple-table", 9);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275template(14, ReportUsageListComponent_ng_template_14_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, ReportUsageListComponent_ng_template_16_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(18, ReportUsageListComponent_ng_template_18_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const date_template_r7 = \u0275\u0275reference(15);
        const percent_template_r8 = \u0275\u0275reference(17);
        const booking_percent_template_r9 = \u0275\u0275reference(19);
        \u0275\u0275classProp("pb-2", ctx.type() === "desks");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 11, "APP.CONCIERGE.REPORTS_DAILY_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.print() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.config().metric_guide)("inline", true);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.day_list())("columns", \u0275\u0275pureFunction6(37, _c6, \u0275\u0275pureFunction2(23, _c02, \u0275\u0275pipeBind1(9, 13, "FORM.DATE"), date_template_r7), \u0275\u0275pureFunction1(26, _c12, \u0275\u0275pipeBind1(10, 15, "APP.CONCIERGE.REPORTS_APPROVED")), \u0275\u0275pureFunction1(28, _c2, \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.REPORTS_TOTAL_REQUESTS")), \u0275\u0275pureFunction1(30, _c3, booking_percent_template_r9), \u0275\u0275pureFunction1(32, _c4, booking_percent_template_r9), \u0275\u0275pureFunction2(34, _c5, \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.REPORTS_UTILISATION"), percent_template_r8)))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(13, 21, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      SimpleTableComponent,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportUsageListComponent, [{
    type: Component,
    args: [{
      selector: "report-usage-list",
      template: `
        <div class="w-full" [class.pb-2]="type() === 'desks'">
            <div
                class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
            >
                <div class="border-base-200 flex items-center border-b p-4">
                    <h3 class="flex-1 text-xl font-bold">
                        {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
                    </h3>
                    @if (!print()) {
                        <button
                            icon
                            default
                            matRipple
                            [matTooltip]="
                                'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE'
                                    | translate
                            "
                            (click)="download()"
                            [attr.aria-label]="
                                'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE'
                                    | translate
                            "
                        >
                            <icon>download</icon>
                        </button>
                    }
                    <placeos-report-metric-guide
                        title="Table column calculations"
                        [items]="config().metric_guide"
                        [inline]="true"
                    />
                </div>
                <simple-table
                    class="block w-full text-sm"
                    [data]="day_list()"
                    [columns]="[
                        {
                            key: 'date',
                            name: 'FORM.DATE' | translate,
                            content: date_template,
                        },
                        {
                            key: 'approved',
                            name: 'APP.CONCIERGE.REPORTS_APPROVED' | translate,
                        },
                        {
                            key: 'count',
                            name:
                                'APP.CONCIERGE.REPORTS_TOTAL_REQUESTS'
                                | translate,
                        },
                        {
                            key: 'cancelled',
                            name: 'Rejected',
                            content: booking_percent_template,
                        },
                        {
                            key: 'deleted',
                            name: 'Cancelled',
                            content: booking_percent_template,
                        },
                        {
                            key: 'utilisation',
                            name:
                                'APP.CONCIERGE.REPORTS_UTILISATION' | translate,
                            content: percent_template,
                        },
                    ]"
                    [sortable]="true"
                    [page_size]="print() ? 0 : 10"
                    [empty_message]="
                        'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                    "
                ></simple-table>
                <ng-template #date_template let-data="data">
                    <div class="p-4">{{ data | date: 'mediumDate' }}</div>
                </ng-template>
                <ng-template #percent_template let-data="data">
                    <div class="p-4">{{ data || '0' }}%</div>
                </ng-template>
                <ng-template
                    #booking_percent_template
                    let-data="data"
                    let-row="row"
                >
                    <div class="p-4">
                        {{ formatPercent(data, row.count) }}
                    </div>
                </ng-template>
            </div>
        </div>
    `,
      imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        SimpleTableComponent,
        MatRippleModule,
        MatTooltipModule,
        ReportMetricGuideComponent
      ]
    }]
  }], null, { type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: true }] }], print: [{ type: Input, args: [{ isSignal: true, alias: "print", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportUsageListComponent, { className: "ReportUsageListComponent", filePath: "apps/concierge/src/app/reports/report-usage-list.component.ts", lineNumber: 169 });
})();

export {
  differenceInDays,
  ReportUsageChartsComponent,
  ReportUsageListComponent
};
//# debugId=a3e37e64-4ae6-566f-b5ab-4aa667f317c0
//# sourceMappingURL=chunk-AVRIR7TQ.js.map
