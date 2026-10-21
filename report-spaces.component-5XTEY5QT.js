import {
  differenceInDays
} from "./chunk-IRBK3GLF.js";
import {
  differenceInBusinessDays
} from "./chunk-QZZAG2PA.js";
import {
  ReportsStateService
} from "./chunk-7WQR2VDI.js";
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
} from "./chunk-KFOVGYPT.js";
import {
  ReportMetricGuideComponent
} from "./chunk-3SO3DV43.js";
import {
  cappedReportAttendeeCount,
  formatReportPercentage,
  reportBookableMinutes,
  reportBookingDuration
} from "./chunk-M7D6LSL2.js";
import "./chunk-6TY7WDWD.js";
import "./chunk-S7JHILGF.js";
import "./chunk-74XVUBEQ.js";
import {
  SimpleTableComponent
} from "./chunk-IA6BOKAS.js";
import "./chunk-TLNZWK6C.js";
import "./chunk-TWQ5XNW7.js";
import "./chunk-PCB66BWK.js";
import "./chunk-PV2WKUSD.js";
import "./chunk-LBI36AI6.js";
import "./chunk-5U2JY245.js";
import "./chunk-UTCRAK3D.js";
import {
  AuthenticatedImageDirective
} from "./chunk-IOWTVLNX.js";
import "./chunk-GAPNJ67M.js";
import "./chunk-EPT6QV6G.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-TZ5JUV4G.js";
import "./chunk-ZVSHIGFS.js";
import "./chunk-ZZZSUQ57.js";
import "./chunk-4VWJLUSZ.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-HLTSGFYE.js";
import "./chunk-JQJNBBNN.js";
import "./chunk-ANOUTIDN.js";
import "./chunk-OFW7WDFE.js";
import {
  SpacePipe
} from "./chunk-7MSOSGO6.js";
import "./chunk-23X2VP53.js";
import {
  TranslatePipe
} from "./chunk-N7R5EHVG.js";
import "./chunk-MCWEYL2F.js";
import "./chunk-C5SFKFXB.js";
import {
  OrganisationService,
  SettingsService
} from "./chunk-6LLBH4AH.js";
import {
  AsyncHandler
} from "./chunk-EQB56Z5X.js";
import {
  IconComponent
} from "./chunk-J53GBIJV.js";
import {
  downloadFile,
  endOfDay,
  format,
  formatDuration,
  jsonToCsv,
  startOfDay,
  unique
} from "./chunk-77D47I3C.js";
import "./chunk-QQKECY2M.js";
import "./chunk-F5BJYE7W.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-FWV33PKU.js";
import "./chunk-BF2TDFXD.js";
import "./chunk-R7WRISTA.js";
import {
  ActivatedRoute
} from "./chunk-TFYF4ALL.js";
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
  resource,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
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
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵpureFunction6,
  ɵɵpureFunctionV,
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
} from "./chunk-EOGESHX7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/reports/spaces/report-spaces-charts.component.ts
var _c0 = ["dailyChart"];
var _c1 = ["levelChart"];
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, PieController, ArcElement, plugin_tooltip, plugin_legend);
var ReportSpacesChartsComponent = class _ReportSpacesChartsComponent extends AsyncHandler {
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
    this.\u0275fac = function ReportSpacesChartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportSpacesChartsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportSpacesChartsComponent, selectors: [["report-spaces-charts"]], viewQuery: function ReportSpacesChartsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._daily_chart_el, _c0, 5)(ctx._level_chart_el, _c1, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, inputs: { print: [1, "print"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 15, vars: 8, consts: [["dailyChart", ""], ["levelChart", ""], [1, "flex", "w-full", "items-center", "space-x-4", "px-4", 3, "resize"], [1, "border-base-200", "bg-base-100", "h-72", "flex-1", "rounded-sm", "border"], [1, "border-base-200", "border-b", "p-4", "text-xl", "font-bold"], [1, "mx-auto", "h-56", "w-full", "max-w-full", "p-2"], [1, "mx-auto", "h-56", "w-[24rem]", "max-w-full", "p-2"]], template: function ReportSpacesChartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 2);
        \u0275\u0275domListener("resize", function ReportSpacesChartsComponent_Template_div_resize_0_listener() {
          return ctx.updateCharts();
        }, \u0275\u0275resolveWindow);
        \u0275\u0275domElementStart(1, "div", 3)(2, "div", 4);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "div", 5);
        \u0275\u0275domElement(6, "canvas", null, 0);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(8, "div", 3)(9, "div", 4);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(12, "div", 6);
        \u0275\u0275domElement(13, "canvas", null, 1);
        \u0275\u0275domElementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("is-print", ctx.print());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "APP.CONCIERGE.REPORTS_DAILY_HEADER"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 6, "APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER"), " ");
      }
    }, dependencies: [TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.is-print[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  width: 8cm !important;\n}\n/*# sourceMappingURL=report-spaces-charts.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportSpacesChartsComponent, [{
    type: Component,
    args: [{ selector: "report-spaces-charts", template: `
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
                    <canvas #dailyChart></canvas>
                </div>
            </div>
            <div
                class="border-base-200 bg-base-100 h-72 flex-1 rounded-sm border"
            >
                <div class="border-base-200 border-b p-4 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER' | translate }}
                </div>
                <div class="mx-auto h-56 w-[24rem] max-w-full p-2">
                    <canvas #levelChart></canvas>
                </div>
            </div>
        </div>
    `, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;554a1b12239fa29aec32e67883eab593b53d44df3427eee1e23c3736e6afc0f4;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/spaces/report-spaces-charts.component.ts */\n:host {\n  display: block;\n}\n.is-print canvas {\n  width: 8cm !important;\n}\n/*# sourceMappingURL=report-spaces-charts.component.css.map */\n"] }]
  }], () => [], { print: [{ type: Input, args: [{ isSignal: true, alias: "print", required: false }] }], _daily_chart_el: [{ type: ViewChild, args: ["dailyChart", { isSignal: true }] }], _level_chart_el: [{ type: ViewChild, args: ["levelChart", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSpacesChartsComponent, { className: "ReportSpacesChartsComponent", filePath: "apps/concierge/src/app/reports/spaces/report-spaces-charts.component.ts", lineNumber: 87 });
})();

// apps/concierge/src/app/reports/spaces/report-spaces-overall-list.component.ts
var _c02 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c12 = (a0) => ({ key: "approved", name: a0 });
var _c2 = (a0) => ({ key: "count", name: a0 });
var _c3 = (a0) => ({ key: "cancelled", name: "Rejected", content: a0 });
var _c4 = (a0) => ({ key: "deleted", name: "Cancelled", content: a0 });
var _c5 = (a0, a1) => ({ key: "utilisation", name: a0, content: a1 });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function ReportSpacesOverallListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ReportSpacesOverallListComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
  }
}
function ReportSpacesOverallListComponent_ng_template_14_Template(rf, ctx) {
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
function ReportSpacesOverallListComponent_ng_template_16_Template(rf, ctx) {
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
function ReportSpacesOverallListComponent_ng_template_18_Template(rf, ctx) {
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
var TABLE_METRIC_GUIDE = [
  {
    label: "Approved",
    description: "Bookings on the day where the booking is approved."
  },
  {
    label: "Total requests",
    description: "All room bookings on the day, including active, rejected, and cancelled events."
  },
  {
    label: "Rejected / Cancelled",
    description: "Displayed as count and percentage of total requests for that day."
  },
  {
    label: "Utilisation",
    description: "Booked room time divided by available room time for that day."
  }
];
var ReportSpacesOverallListComponent = class _ReportSpacesOverallListComponent {
  constructor() {
    this._state = inject(ReportsStateService);
    this.print = input(
      false,
      ...ngDevMode ? [{ debugName: "print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.table_metric_guide = TABLE_METRIC_GUIDE;
    this.day_list = this._state.day_list;
    this.download = async () => {
      const data = this.day_list().map((d) => __spreadProps(__spreadValues({}, d), {
        date: format(d.date, "MMMM d, y(EEE)"),
        cancelled: formatReportPercentage(d.cancelled, d.count),
        deleted: formatReportPercentage(d.deleted, d.count)
      }));
      downloadFile("spaces-usage.csv", jsonToCsv(data));
    };
    this.formatPercent = formatReportPercentage;
  }
  static {
    this.\u0275fac = function ReportSpacesOverallListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportSpacesOverallListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportSpacesOverallListComponent, selectors: [["report-spaces-overall-list"]], inputs: { print: [1, "print"] }, decls: 20, vars: 42, consts: [["date_template", ""], ["percent_template", ""], ["booking_percent_template", ""], [1, "w-full"], [1, "border-base-200", "bg-base-100", "m-4", "overflow-hidden", "rounded-sm", "border"], [1, "border-base-200", "flex", "items-center", "border-b", "p-4"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], ["title", "Table column calculations", 3, "items", "inline"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"]], template: function ReportSpacesOverallListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "h3", 6);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, ReportSpacesOverallListComponent_Conditional_6_Template, 4, 3, "button", 7);
        \u0275\u0275element(7, "placeos-report-metric-guide", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "simple-table", 9);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275template(14, ReportSpacesOverallListComponent_ng_template_14_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, ReportSpacesOverallListComponent_ng_template_16_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(18, ReportSpacesOverallListComponent_ng_template_18_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const date_template_r7 = \u0275\u0275reference(15);
        const percent_template_r8 = \u0275\u0275reference(17);
        const booking_percent_template_r9 = \u0275\u0275reference(19);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 9, "APP.CONCIERGE.REPORTS_DAILY_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.print() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.table_metric_guide)("inline", true);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.day_list())("columns", \u0275\u0275pureFunction6(35, _c6, \u0275\u0275pureFunction2(21, _c02, \u0275\u0275pipeBind1(9, 11, "FORM.DATE"), date_template_r7), \u0275\u0275pureFunction1(24, _c12, \u0275\u0275pipeBind1(10, 13, "APP.CONCIERGE.REPORTS_APPROVED")), \u0275\u0275pureFunction1(26, _c2, \u0275\u0275pipeBind1(11, 15, "APP.CONCIERGE.REPORTS_TOTAL_REQUESTS")), \u0275\u0275pureFunction1(28, _c3, booking_percent_template_r9), \u0275\u0275pureFunction1(30, _c4, booking_percent_template_r9), \u0275\u0275pureFunction2(32, _c5, \u0275\u0275pipeBind1(12, 17, "APP.CONCIERGE.REPORTS_UTILISATION"), percent_template_r8)))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(13, 19, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportSpacesOverallListComponent, [{
    type: Component,
    args: [{
      selector: "report-spaces-overall-list",
      template: `
        <div class="w-full">
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
  }], null, { print: [{ type: Input, args: [{ isSignal: true, alias: "print", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSpacesOverallListComponent, { className: "ReportSpacesOverallListComponent", filePath: "apps/concierge/src/app/reports/spaces/report-spaces-overall-list.component.ts", lineNumber: 143 });
})();

// apps/concierge/src/app/reports/spaces/report-spaces-overall.component.ts
function ReportSpacesOverallComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2)(1, "div", 3)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 3)(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "div", 3)(14, "h3");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "p");
    \u0275\u0275text(18);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "APP.CONCIERGE.REPORTS_NO_SHOWS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.no_shows() || 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 8, "APP.CONCIERGE.REPORTS_NO_SHOWS_PERCENT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.no_show_percent() || 0, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 10, "APP.CONCIERGE.REPORTS_TOTAL_ATTENDEES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.attendance() || 0);
  }
}
var ReportSpacesOverallComponent = class _ReportSpacesOverallComponent {
  constructor() {
    this._state = inject(ReportsStateService);
    this._options = this._state.options;
    this._stats = this._state.stats;
    this.business_days = computed(
      () => {
        const { start, end } = this._options();
        return differenceInBusinessDays(endOfDay(end || Date.now()).valueOf() + 2, startOfDay(start || Date.now())) || 1;
      },
      ...ngDevMode ? [{ debugName: "business_days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.total_count = computed(
      () => this._stats().total_count || this._stats().count || 0,
      ...ngDevMode ? [{ debugName: "total_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_count = computed(
      () => this._stats().count || 0,
      ...ngDevMode ? [{ debugName: "active_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cancelled_count = computed(
      () => this._stats().cancelled_count || 0,
      ...ngDevMode ? [{ debugName: "cancelled_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.deleted_count = computed(
      () => this._stats().deleted_count || 0,
      ...ngDevMode ? [{ debugName: "deleted_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.avg_length = computed(
      () => formatDuration({ minutes: Math.floor(this._stats().avg_length || 0) }),
      ...ngDevMode ? [{ debugName: "avg_length" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.attendance = computed(
      () => this._stats().events.reduce((c, { extension_data }) => c + (+extension_data?.people_count?.max || 0), 0),
      ...ngDevMode ? [{ debugName: "attendance" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.no_shows = computed(
      () => this._stats().events.filter(({ extension_data }) => extension_data?.people_count?.max === 0).length,
      ...ngDevMode ? [{ debugName: "no_shows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.no_show_percent = computed(
      () => {
        const { events } = this._stats();
        if (!events.length)
          return 0;
        return Math.floor(this.no_shows() / events.length * 1e4) / 100;
      },
      ...ngDevMode ? [{ debugName: "no_show_percent" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_attendance = computed(
      () => !!this._stats().events.find(({ extension_data }) => !!extension_data?.people_count),
      ...ngDevMode ? [{ debugName: "has_attendance" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function ReportSpacesOverallComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportSpacesOverallComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportSpacesOverallComponent, selectors: [["report-spaces-overall"]], decls: 35, vars: 16, consts: [[1, "border-base-200", "bg-base-100", "m-4", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border", "p-4"], [1, "flex", "flex-1", "flex-col", "items-center"], [1, "bg-base-100", "m-4", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "p-4"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center"]], template: function ReportSpacesOverallComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h3");
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "p");
        \u0275\u0275text(6);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(7, "div", 1)(8, "h3");
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(11, "p");
        \u0275\u0275text(12);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(13, "div", 1)(14, "h3");
        \u0275\u0275text(15, "Active");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(16, "p");
        \u0275\u0275text(17);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(18, "div", 1)(19, "h3");
        \u0275\u0275text(20, "Rejected");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(21, "p");
        \u0275\u0275text(22);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(23, "div", 1)(24, "h3");
        \u0275\u0275text(25, "Cancelled");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(26, "p");
        \u0275\u0275text(27);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(28, "div", 1)(29, "h3");
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(32, "p");
        \u0275\u0275text(33);
        \u0275\u0275domElementEnd()()();
        \u0275\u0275conditionalCreate(34, ReportSpacesOverallComponent_Conditional_34_Template, 19, 12, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 10, "APP.CONCIERGE.REPORTS_BUSINESS_DAYS"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.business_days() || 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 12, "APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.total_count() || 0);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.active_count() || 0);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.cancelled_count() || 0);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.deleted_count() || 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 14, "APP.CONCIERGE.REPORTS_AVERAGE_LENGTH"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.avg_length() || "None");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.has_attendance() ? 34 : -1);
      }
    }, dependencies: [TranslatePipe], styles: ["\nh3[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\np[_ngcontent-%COMP%]:not([simple]) {\n  font-size: 1.75rem;\n}\n/*# sourceMappingURL=report-spaces-overall.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportSpacesOverallComponent, [{
    type: Component,
    args: [{ selector: "report-spaces-overall", template: ` <div
            class="border-base-200 bg-base-100 m-4 flex items-center justify-center space-x-2 rounded-sm border p-4"
        >
            <div class="flex flex-1 flex-col items-center">
                <h3>{{ 'APP.CONCIERGE.REPORTS_BUSINESS_DAYS' | translate }}</h3>
                <p>{{ business_days() || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3>
                    {{ 'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS' | translate }}
                </h3>
                <p>{{ total_count() || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3>Active</h3>
                <p>{{ active_count() || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3>Rejected</h3>
                <p>{{ cancelled_count() || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3>Cancelled</h3>
                <p>{{ deleted_count() || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3>
                    {{ 'APP.CONCIERGE.REPORTS_AVERAGE_LENGTH' | translate }}
                </h3>
                <p>{{ avg_length() || 'None' }}</p>
            </div>
        </div>
        @if (has_attendance()) {
            <div
                class="bg-base-100 m-4 flex items-center justify-center space-x-2 rounded-sm p-4"
            >
                <div class="flex flex-1 flex-col items-center justify-center">
                    <h3>{{ 'APP.CONCIERGE.REPORTS_NO_SHOWS' | translate }}</h3>
                    <p>{{ no_shows() || 0 }}</p>
                </div>
                <div class="flex flex-1 flex-col items-center justify-center">
                    <h3>
                        {{
                            'APP.CONCIERGE.REPORTS_NO_SHOWS_PERCENT' | translate
                        }}
                    </h3>
                    <p>{{ no_show_percent() || 0 }}%</p>
                </div>
                <div class="flex flex-1 flex-col items-center justify-center">
                    <h3>
                        {{
                            'APP.CONCIERGE.REPORTS_TOTAL_ATTENDEES' | translate
                        }}
                    </h3>
                    <p>{{ attendance() || 0 }}</p>
                </div>
            </div>
        }`, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;5784da58046fe51e566546051a5c06ba941c3fccb5ef3905c439eccf92edf994;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/spaces/report-spaces-overall.component.ts */\nh3 {\n  font-weight: 500;\n}\np:not([simple]) {\n  font-size: 1.75rem;\n}\n/*# sourceMappingURL=report-spaces-overall.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSpacesOverallComponent, { className: "ReportSpacesOverallComponent", filePath: "apps/concierge/src/app/reports/spaces/report-spaces-overall.component.ts", lineNumber: 80 });
})();

// apps/concierge/src/app/reports/spaces/report-spaces-space-listing.component.ts
var _c03 = (a0) => ({ key: "name", name: a0 });
var _c13 = (a0, a1) => ({ key: "capacity", name: a0, content: a1 });
var _c22 = (a0) => ({ key: "booking_count", name: a0 });
var _c32 = (a0) => ({ key: "utilisation", name: a0 });
var _c42 = (a0) => ({ key: "avg_attendees", name: a0 });
var _c52 = (a0, a1) => ({ key: "no_shows", name: a0, show: a1 });
var _c62 = (a0, a1) => ({ key: "min_attendance", name: a0, show: a1 });
var _c7 = (a0, a1) => ({ key: "max_attendance", name: a0, show: a1 });
var _c8 = (a0) => ({ key: "occupancy", name: a0 });
var _c9 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => [a0, a1, a2, a3, a4, a5, a6, a7, a8];
function ReportSpacesSpaceListingComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ReportSpacesSpaceListingComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
  }
}
function ReportSpacesSpaceListingComponent_ng_template_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.CAPACITY_EMPTY"));
  }
}
function ReportSpacesSpaceListingComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ReportSpacesSpaceListingComponent_ng_template_18_Conditional_2_Template, 3, 3, "span", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3 < 1 ? "" : data_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r3 < 1 ? 2 : -1);
  }
}
var TABLE_METRIC_GUIDE2 = [
  {
    label: "Capacity",
    description: "Room capacity from the resolved space details. Empty capacity is shown when the value is less than one."
  },
  {
    label: "Bookings",
    description: "Number of active bookings associated with the room."
  },
  {
    label: "Booked time utilisation",
    description: "Booked room time divided by configured bookable hours across the selected date range. All-day bookings count as one full bookable day."
  },
  {
    label: "Average booking invites",
    description: "Total invited attendees divided by booking count for the room."
  },
  {
    label: "No-shows",
    description: "Bookings for the room with a recorded maximum people count of zero."
  },
  {
    label: "Min / Max attendance",
    description: "Smallest and largest recorded maximum people count for the room."
  },
  {
    label: "Occupancy",
    description: "Capped attendee count divided by booking count and room capacity."
  }
];
var ReportSpacesSpaceListingComponent = class _ReportSpacesSpaceListingComponent {
  constructor() {
    this._reports = inject(ReportsStateService);
    this._settings = inject(SettingsService);
    this.print = input(
      false,
      ...ngDevMode ? [{ debugName: "print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._space_pipe = new SpacePipe();
    this._space_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_space_list" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        stats: this._reports.stats(),
        options: this._reports.options()
      }),
      defaultValue: [],
      loader: async ({ params }) => {
        const { stats } = params;
        const { start, end } = params.options;
        const list = [];
        let has_attendance = false;
        const bookable_minutes = reportBookableMinutes(this._settings.get("app.events.bookable_hours") || this._settings.get("app.bookings.bookable_hours"));
        for (const booking of stats.events || []) {
          const space_list = unique(booking.resources, "email") || [booking.system];
          const resources = [];
          for (const space of space_list) {
            const details = await this._space_pipe.transform(space.email || space.id);
            resources.push(details);
          }
          for (const space of resources) {
            let details = list.find((_) => _.id === space.id || _.id?.toLowerCase() === space.email.toLowerCase());
            if (!details) {
              details = {
                id: space.id || space.email,
                name: space.display_name || space.name,
                capacity: space.capacity,
                booking_count: 0,
                attendance: 0,
                avg_attendance: 0,
                min_attendance: 99,
                max_attendance: 0,
                attendees: 0,
                occupancy_attendees: 0,
                avg_attendees: 0,
                usage: 0,
                no_shows: 0,
                utilisation: 0,
                occupancy: 0
              };
              if (!details.id || !details.name)
                continue;
              list.push(details);
            }
            if (booking.extension_data?.people_count?.max === 0) {
              details.no_shows += 1;
            }
            details.booking_count += 1;
            details.attendance += booking.extension_data?.people_count?.max ?? 0;
            details.avg_attendance += booking.extension_data?.people_count?.avg ?? 0;
            details.min_attendance = Math.min(details.max_attendance, booking.extension_data?.people_count?.max ?? 99);
            details.max_attendance = Math.max(details.max_attendance, booking.extension_data?.people_count?.max ?? 0);
            details.usage += reportBookingDuration(booking, bookable_minutes);
            details.attendees += booking.attendees.length;
            details.occupancy_attendees += cappedReportAttendeeCount(booking, space.capacity);
            has_attendance = has_attendance || !!booking.extension_data.people_count;
          }
        }
        const period_in_days = Math.max(1, differenceInDays(end, start) + 1);
        for (const space of list) {
          space.avg_attendees = Math.floor(space.attendees / space.booking_count * 100) / 100;
          space.avg_attendance = Math.floor(space.attendance / space.booking_count * 100) / 100;
          space.utilisation = `${Math.floor(space.usage / bookable_minutes / period_in_days * 100)}%`;
          space.min_attendance = space.min_attendance === 99 ? "?" : space.min_attendance;
          space.occupancy = `${Math.floor(space.occupancy_attendees / space.booking_count / Math.max(1, space.capacity) * 1e3) / 10}%`;
          if (space.attendance < 0 || !has_attendance) {
            space.attendance = "?";
            space.avg_attendance = "?";
          }
        }
        return list;
      }
    }));
    this.space_list = this._space_list.value;
    this.has_attendance = computed(
      () => !!this.space_list().find(({ attendance }) => attendance !== "?"),
      ...ngDevMode ? [{ debugName: "has_attendance" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.table_metric_guide = computed(
      () => this.has_attendance() ? TABLE_METRIC_GUIDE2 : TABLE_METRIC_GUIDE2.filter((item) => item.label !== "No-shows" && item.label !== "Min / Max attendance"),
      ...ngDevMode ? [{ debugName: "table_metric_guide" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.download = async () => {
      const data = this.space_list().map((item) => __spreadValues({}, item));
      for (const item of data) {
        delete item.attendance;
        delete item.avg_attendance;
        delete item.no_shows;
        delete item.min_attendance;
        delete item.max_attendance;
        delete item.occupancy_attendees;
      }
      downloadFile("report-spaces-usage.csv", jsonToCsv(data));
    };
  }
  static {
    this.\u0275fac = function ReportSpacesSpaceListingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportSpacesSpaceListingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportSpacesSpaceListingComponent, selectors: [["report-spaces-space-listing"]], inputs: { print: [1, "print"] }, decls: 20, vars: 63, consts: [["capacity_template", ""], [1, "border-base-200", "bg-base-100", "m-4", "overflow-hidden", "rounded-sm", "border"], [1, "border-base-200", "flex", "items-center", "border-b", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], ["title", "Table column calculations", 3, "items", "inline"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"], [1, "opacity-30"]], template: function ReportSpacesSpaceListingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, ReportSpacesSpaceListingComponent_Conditional_5_Template, 4, 3, "button", 4);
        \u0275\u0275element(6, "placeos-report-metric-guide", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "simple-table", 6);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275template(18, ReportSpacesSpaceListingComponent_ng_template_18_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const capacity_template_r4 = \u0275\u0275reference(19);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "APP.CONCIERGE.REPORTS_ROOMS_UTIL_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.print() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.table_metric_guide())("inline", true);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.space_list())("columns", \u0275\u0275pureFunctionV(53, _c9, [\u0275\u0275pureFunction1(31, _c03, \u0275\u0275pipeBind1(8, 11, "FORM.NAME")), \u0275\u0275pureFunction2(33, _c13, \u0275\u0275pipeBind1(9, 13, "COMMON.CAPACITY"), capacity_template_r4), \u0275\u0275pureFunction1(36, _c22, \u0275\u0275pipeBind1(10, 15, "RESOURCE.BOOKINGS")), \u0275\u0275pureFunction1(38, _c32, \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.REPORTS_BOOKED_TIME_UTILISATION")), \u0275\u0275pureFunction1(40, _c42, \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.REPORTS_AVG_BOOKING_INVITES")), \u0275\u0275pureFunction2(42, _c52, \u0275\u0275pipeBind1(13, 21, "APP.CONCIERGE.REPORTS_NO_SHOWS"), ctx.has_attendance()), \u0275\u0275pureFunction2(45, _c62, \u0275\u0275pipeBind1(14, 23, "APP.CONCIERGE.REPORTS_MIN_ATTENDANCE"), ctx.has_attendance()), \u0275\u0275pureFunction2(48, _c7, \u0275\u0275pipeBind1(15, 25, "APP.CONCIERGE.REPORTS_MAX_ATTENDANCE"), ctx.has_attendance()), \u0275\u0275pureFunction1(51, _c8, \u0275\u0275pipeBind1(16, 27, "APP.CONCIERGE.REPORTS_OCCUPANCY"))]))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(17, 29, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
      }
    }, dependencies: [
      SimpleTableComponent,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      ReportMetricGuideComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportSpacesSpaceListingComponent, [{
    type: Component,
    args: [{ selector: "report-spaces-space-listing", template: `
        <div
            class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_ROOMS_UTIL_HEADER' | translate }}
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
                    >
                        <icon>download</icon>
                    </button>
                }
                <placeos-report-metric-guide
                    title="Table column calculations"
                    [items]="table_metric_guide()"
                    [inline]="true"
                />
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="space_list()"
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'capacity',
                        name: 'COMMON.CAPACITY' | translate,
                        content: capacity_template,
                    },
                    {
                        key: 'booking_count',
                        name: 'RESOURCE.BOOKINGS' | translate,
                    },
                    {
                        key: 'utilisation',
                        name:
                            'APP.CONCIERGE.REPORTS_BOOKED_TIME_UTILISATION'
                            | translate,
                    },
                    {
                        key: 'avg_attendees',
                        name:
                            'APP.CONCIERGE.REPORTS_AVG_BOOKING_INVITES'
                            | translate,
                    },
                    {
                        key: 'no_shows',
                        name: 'APP.CONCIERGE.REPORTS_NO_SHOWS' | translate,
                        show: has_attendance(),
                    },
                    {
                        key: 'min_attendance',
                        name:
                            'APP.CONCIERGE.REPORTS_MIN_ATTENDANCE' | translate,
                        show: has_attendance(),
                    },
                    {
                        key: 'max_attendance',
                        name:
                            'APP.CONCIERGE.REPORTS_MAX_ATTENDANCE' | translate,
                        show: has_attendance(),
                    },
                    {
                        key: 'occupancy',
                        name: 'APP.CONCIERGE.REPORTS_OCCUPANCY' | translate,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
            <ng-template #capacity_template let-data="data">
                <div class="p-4">
                    {{ data < 1 ? '' : data }}
                    @if (data < 1) {
                        <span class="opacity-30">{{
                            'COMMON.CAPACITY_EMPTY' | translate
                        }}</span>
                    }
                </div>
            </ng-template>
        </div>
    `, imports: [
      SimpleTableComponent,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      ReportMetricGuideComponent
    ] }]
  }], null, { print: [{ type: Input, args: [{ isSignal: true, alias: "print", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSpacesSpaceListingComponent, { className: "ReportSpacesSpaceListingComponent", filePath: "apps/concierge/src/app/reports/spaces/report-spaces-space-listing.component.ts", lineNumber: 177 });
})();

// apps/concierge/src/app/reports/spaces/report-spaces-user-listing.component.ts
var _c04 = (a0) => ({ key: "name", name: a0 });
var _c14 = (a0) => ({ key: "booking_count", name: a0 });
var _c23 = (a0) => ({ key: "avg_attendees", name: a0 });
var _c33 = (a0) => ({ key: "total_time", name: a0 });
var _c43 = (a0) => ({ key: "no_shows", name: a0 });
var _c53 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function ReportSpacesUserListingComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ReportSpacesUserListingComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
  }
}
var TABLE_METRIC_GUIDE3 = [
  {
    label: "Bookings",
    description: "Number of room bookings where the host attendee matches the booking host or host override."
  },
  {
    label: "Average booking invites",
    description: "Total invited attendees across hosted bookings divided by hosted booking count."
  },
  {
    label: "Total time",
    description: "Sum of hosted booking durations, using 15 minutes when a booking duration is missing."
  },
  {
    label: "No-shows",
    description: "Hosted bookings with a recorded maximum people count of zero."
  }
];
var ReportSpacesUserListingComponent = class _ReportSpacesUserListingComponent {
  constructor() {
    this._reports = inject(ReportsStateService);
    this.print = input(
      false,
      ...ngDevMode ? [{ debugName: "print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.table_metric_guide = TABLE_METRIC_GUIDE3;
    this._stats = computed(
      () => this._reports.stats() || { events: [] },
      ...ngDevMode ? [{ debugName: "_stats" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user_list = computed(
      () => {
        const { events } = this._stats();
        const list = [];
        for (const booking of events) {
          const host = booking.attendees?.find((_) => _.email === booking.extension_data?.host_override || _.email === booking.host);
          if (!host)
            continue;
          const capacity = Math.max(booking.resources.reduce((c, s) => c + s.capacity, 0) || 1, 1);
          let details = list.find((_) => _.id?.toLowerCase() === host.email.toLowerCase());
          if (!details) {
            details = {
              id: host.email,
              name: host.name,
              capacity,
              booking_count: 0,
              attendees: 0,
              occupancy_attendees: 0,
              avg_attendees: 0,
              no_shows: 0,
              occupancy: 0,
              total_time: 0
            };
            list.push(details);
          }
          if (booking.extension_data?.people_count?.max === 0) {
            details.no_shows += 1;
          }
          details.booking_count += 1;
          details.attendees += booking.attendees.length;
          details.occupancy_attendees += cappedReportAttendeeCount(booking, capacity);
          details.total_time += booking.duration || 15;
        }
        for (const space of list) {
          space.avg_attendees = Math.floor(space.attendees / space.booking_count * 100) / 100;
          space.occupancy = Math.floor(space.occupancy_attendees / space.booking_count / space.capacity * 100) / 100;
          space.total_time = formatDuration({
            hours: Math.floor(space.total_time / 60),
            minutes: space.total_time % 60
          });
        }
        return list;
      },
      ...ngDevMode ? [{ debugName: "user_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.download = async () => {
      const data = this.user_list().map((item) => __spreadValues({}, item));
      for (const item of data) {
        delete item.attendance;
        delete item.avg_attendance;
        delete item.min_attendance;
        delete item.max_attendance;
        delete item.occupancy;
        delete item.occupancy_attendees;
      }
      downloadFile("report-space-attendee-usage.csv", jsonToCsv(data));
    };
  }
  static {
    this.\u0275fac = function ReportSpacesUserListingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportSpacesUserListingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportSpacesUserListingComponent, selectors: [["report-spaces-user-listing"]], inputs: { print: [1, "print"] }, decls: 14, vars: 39, consts: [[1, "border-base-200", "bg-base-100", "m-4", "overflow-hidden", "rounded-sm", "border"], [1, "border-base-200", "flex", "items-center", "border-b", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], ["title", "Table column calculations", 3, "items", "inline"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"]], template: function ReportSpacesUserListingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, ReportSpacesUserListingComponent_Conditional_5_Template, 4, 3, "button", 3);
        \u0275\u0275element(6, "placeos-report-metric-guide", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "simple-table", 5);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "APP.CONCIERGE.REPORTS_ROOMS_HOST_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.print() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.table_metric_guide)("inline", true);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.user_list())("columns", \u0275\u0275pureFunction5(33, _c53, \u0275\u0275pureFunction1(23, _c04, \u0275\u0275pipeBind1(8, 11, "FORM.NAME")), \u0275\u0275pureFunction1(25, _c14, \u0275\u0275pipeBind1(9, 13, "RESOURCE.BOOKINGS")), \u0275\u0275pureFunction1(27, _c23, \u0275\u0275pipeBind1(10, 15, "APP.CONCIERGE.REPORTS_AVG_BOOKING_INVITES")), \u0275\u0275pureFunction1(29, _c33, \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.REPORTS_TOTAL_TIME")), \u0275\u0275pureFunction1(31, _c43, \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.REPORTS_NO_SHOWS"))))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(13, 21, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
      }
    }, dependencies: [
      SimpleTableComponent,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      ReportMetricGuideComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportSpacesUserListingComponent, [{
    type: Component,
    args: [{ selector: "report-spaces-user-listing", template: `
        <div
            class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_ROOMS_HOST_HEADER' | translate }}
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
                [data]="user_list()"
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'booking_count',
                        name: 'RESOURCE.BOOKINGS' | translate,
                    },
                    {
                        key: 'avg_attendees',
                        name:
                            'APP.CONCIERGE.REPORTS_AVG_BOOKING_INVITES'
                            | translate,
                    },
                    {
                        key: 'total_time',
                        name: 'APP.CONCIERGE.REPORTS_TOTAL_TIME' | translate,
                    },
                    {
                        key: 'no_shows',
                        name: 'APP.CONCIERGE.REPORTS_NO_SHOWS' | translate,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
        </div>
    `, imports: [
      SimpleTableComponent,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      ReportMetricGuideComponent
    ] }]
  }], null, { print: [{ type: Input, args: [{ isSignal: true, alias: "print", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSpacesUserListingComponent, { className: "ReportSpacesUserListingComponent", filePath: "apps/concierge/src/app/reports/spaces/report-spaces-user-listing.component.ts", lineNumber: 111 });
})();

// apps/concierge/src/app/reports/spaces/report-spaces.component.ts
function ReportSpacesComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "placeos-report-metric-guide", 9)(1, "report-spaces-overall")(2, "report-spaces-charts", 10)(3, "report-spaces-overall-list", 10)(4, "report-spaces-space-listing", 10)(5, "report-spaces-user-listing", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("absolute", true)("items", ctx_r0.metric_guide);
    \u0275\u0275advance(2);
    \u0275\u0275property("print", ctx_r0.printing());
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing());
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing());
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing());
  }
}
function ReportSpacesComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
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
function ReportSpacesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ReportSpacesComponent_Conditional_9_Conditional_0_Template, 6, 6)(1, ReportSpacesComponent_Conditional_9_Conditional_1_Template, 4, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.total_count() ? 0 : 1);
  }
}
function ReportSpacesComponent_Conditional_10_Template(rf, ctx) {
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
    description: "All room bookings returned for the selected dates and zones, including active, rejected, and cancelled records."
  },
  {
    label: "Active / Rejected / Cancelled",
    description: "Active excludes cancelled and rejected events. Rejected uses events with cancelled state/type or rejected status. Cancelled uses events flagged as cancelled."
  },
  {
    label: "Average length",
    description: "Sum of active booking durations divided by the number of active bookings."
  },
  {
    label: "Attendance and no-shows",
    description: "Attendance uses the maximum recorded people count on each booking. No-shows are bookings with no recorded people count."
  }
];
var ReportSpacesComponent = class _ReportSpacesComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ReportsStateService);
    this._settings = inject(SettingsService);
    this._route = inject(ActivatedRoute);
    this._org = inject(OrganisationService);
    this.printing = signal(
      false,
      ...ngDevMode ? [{ debugName: "printing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.metric_guide = METRIC_GUIDE;
    this.total_count = computed(
      () => {
        const i = this._state.stats();
        return i.total_count || i.count || 0;
      },
      ...ngDevMode ? [{ debugName: "total_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._state.loading;
    this.has_data = computed(
      () => !!this.total_count(),
      ...ngDevMode ? [{ debugName: "has_data" }] : (
        /* istanbul ignore next */
        []
      )
    );
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
  }
  ngOnInit() {
    this._state.setOptions({ type: "events" });
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("start")) {
        this._state.setOptions({ start: +params.get("start") });
      }
      if (params.has("end")) {
        this._state.setOptions({ end: +params.get("end") });
      }
      if (params.has("zones") || params.has("zone_ids")) {
        const id_list = params.get("zones") || params.get("zone_ids");
        const zones = id_list.split(",");
        if (zones.length)
          this._state.setOptions({ zones });
      } else
        this._state.setOptions({ zones: [] });
    }));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ReportSpacesComponent_BaseFactory;
      return function ReportSpacesComponent_Factory(__ngFactoryType__) {
        return (\u0275ReportSpacesComponent_BaseFactory || (\u0275ReportSpacesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ReportSpacesComponent)))(__ngFactoryType__ || _ReportSpacesComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportSpacesComponent, selectors: [["", "report-spaces", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 7, consts: [["resource_type", "events", 3, "printing", "download", "generate", "loading", "has_data"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "print:h-auto", "print:overflow-visible"], [1, "w-full"], [1, "bg-base-200", "m-4", "flex", "items-center", "rounded-sm", "p-4"], ["auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "px-2", "text-2xl", "font-medium"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [1, "screen-only", "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [3, "absolute", "items"], [3, "print"], [1, "opacity-30"], [1, "mb-4", 3, "diameter"]], template: function ReportSpacesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "reports-options", 0);
        \u0275\u0275listener("printing", function ReportSpacesComponent_Template_reports_options_printing_0_listener($event) {
          return ctx.printing.set($event);
        })("download", function ReportSpacesComponent_Template_reports_options_download_0_listener() {
          return ctx.downloadReport();
        })("generate", function ReportSpacesComponent_Template_reports_options_generate_0_listener() {
          return ctx.generateReport();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4)(5, "div", 5);
        \u0275\u0275elementStart(6, "h2", 6);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(9, ReportSpacesComponent_Conditional_9_Template, 2, 1)(10, ReportSpacesComponent_Conditional_10_Template, 5, 4, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("loading", !!ctx.loading())("has_data", ctx.has_data());
        \u0275\u0275advance(4);
        \u0275\u0275property("source", ctx.logo()?.src || ctx.logo());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "APP.CONCIERGE.REPORTS_ROOMS_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 9 : 10);
      }
    }, dependencies: [
      MatProgressSpinnerModule,
      MatProgressSpinner,
      ReportsOptionsComponent,
      ReportMetricGuideComponent,
      AuthenticatedImageDirective,
      ReportSpacesChartsComponent,
      ReportSpacesOverallComponent,
      ReportSpacesOverallListComponent,
      ReportSpacesSpaceListingComponent,
      ReportSpacesUserListingComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=report-spaces.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportSpacesComponent, [{
    type: Component,
    args: [{ selector: "[report-spaces]", template: `
        <reports-options
            resource_type="events"
            (printing)="printing.set($event)"
            [loading]="!!loading()"
            [has_data]="has_data()"
            (download)="downloadReport()"
            (generate)="generateReport()"
        />
        <div
            class="relative h-1/2 w-full flex-1 overflow-auto print:h-auto print:overflow-visible"
        >
            <div class="w-full">
                <div class="bg-base-200 m-4 flex items-center rounded-sm p-4">
                    <img auth class="h-12" [source]="logo()?.src || logo()" />
                    <div class="flex-1"></div>
                    <h2 class="px-2 text-2xl font-medium">
                        {{ 'APP.CONCIERGE.REPORTS_ROOMS_HEADER' | translate }}
                    </h2>
                </div>
            </div>
            @if (!loading()) {
                @if (total_count()) {
                    <placeos-report-metric-guide
                        [absolute]="true"
                        [items]="metric_guide"
                    />
                    <report-spaces-overall></report-spaces-overall>
                    <report-spaces-charts
                        [print]="printing()"
                    ></report-spaces-charts>
                    <report-spaces-overall-list
                        [print]="printing()"
                    ></report-spaces-overall-list>
                    <report-spaces-space-listing
                        [print]="printing()"
                    ></report-spaces-space-listing>
                    <report-spaces-user-listing
                        [print]="printing()"
                    ></report-spaces-user-listing>
                } @else {
                    <div
                        class="screen-only flex h-full w-full flex-col items-center p-8"
                    >
                        <p class="opacity-30">
                            {{ 'APP.CONCIERGE.REPORTS_EMPTY' | translate }}
                        </p>
                    </div>
                }
            } @else {
                <div class="flex h-full w-full flex-col items-center p-8">
                    <mat-spinner [diameter]="32" class="mb-4"></mat-spinner>
                    <p class="opacity-30">
                        {{ 'APP.CONCIERGE.REPORTS_LOADING' | translate }}
                    </p>
                </div>
            }
        </div>
    `, imports: [
      MatProgressSpinnerModule,
      TranslatePipe,
      ReportsOptionsComponent,
      ReportMetricGuideComponent,
      AuthenticatedImageDirective,
      ReportSpacesChartsComponent,
      ReportSpacesOverallComponent,
      ReportSpacesOverallListComponent,
      ReportSpacesSpaceListingComponent,
      ReportSpacesUserListingComponent
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/spaces/report-spaces.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=report-spaces.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSpacesComponent, { className: "ReportSpacesComponent", filePath: "apps/concierge/src/app/reports/spaces/report-spaces.component.ts", lineNumber: 135 });
})();
export {
  ReportSpacesComponent
};
//# debugId=bd739f6e-7a34-5b40-93be-ea5a6c446b10
//# sourceMappingURL=report-spaces.component-5XTEY5QT.js.map
