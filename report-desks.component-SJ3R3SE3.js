import {
  differenceInDays
} from "./chunk-K5KBHJWF.js";
import {
  ReportsStateService
} from "./chunk-ERRE72EK.js";
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
} from "./chunk-BLW6B2VU.js";
import {
  ReportMetricGuideComponent
} from "./chunk-TXZHPH3V.js";
import {
  formatReportPercentage
} from "./chunk-M7D6LSL2.js";
import "./chunk-E7GHJWJV.js";
import "./chunk-3HGA2V4A.js";
import "./chunk-2Z4YN3BG.js";
import {
  SimpleTableComponent
} from "./chunk-M7ZA3PPG.js";
import "./chunk-KN24TXIB.js";
import "./chunk-MEE7FNS5.js";
import "./chunk-PCZ5F5BM.js";
import "./chunk-EJOPUGLA.js";
import "./chunk-Y4FJNLAU.js";
import "./chunk-EJAEY6MI.js";
import "./chunk-56OYX3BL.js";
import {
  AuthenticatedImageDirective
} from "./chunk-FZ7AIFRE.js";
import "./chunk-BMQKHWAC.js";
import "./chunk-EPT6QV6G.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-TZ5JUV4G.js";
import "./chunk-ZVSHIGFS.js";
import "./chunk-3DBDHK6S.js";
import "./chunk-4VWJLUSZ.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-HLTSGFYE.js";
import "./chunk-JQJNBBNN.js";
import "./chunk-PJTOWFBM.js";
import "./chunk-OFW7WDFE.js";
import "./chunk-U6AQW4LJ.js";
import "./chunk-I6MB2EED.js";
import {
  TranslatePipe
} from "./chunk-JCEMX2GO.js";
import "./chunk-MCWEYL2F.js";
import "./chunk-C5SFKFXB.js";
import {
  OrganisationService,
  SettingsService
} from "./chunk-DOLIX6FW.js";
import {
  AsyncHandler
} from "./chunk-ZBK6XVOU.js";
import {
  IconComponent
} from "./chunk-BSQA34BX.js";
import {
  downloadFile,
  format,
  jsonToCsv
} from "./chunk-PYWAX25U.js";
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

// apps/concierge/src/app/reports/desks/report-desks-charts.component.ts
var _c0 = ["dailyChart"];
var _c1 = ["levelChart"];
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, PieController, ArcElement, plugin_tooltip, plugin_legend);
var ReportDesksChartsComponent = class _ReportDesksChartsComponent extends AsyncHandler {
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
    this.stats = computed(
      () => [this._state.options(), this._state.counts()],
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
      this.updateLevelChart(mappings, counts);
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
    this.\u0275fac = function ReportDesksChartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportDesksChartsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportDesksChartsComponent, selectors: [["report-desks-charts"]], viewQuery: function ReportDesksChartsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._daily_chart_el, _c0, 5)(ctx._level_chart_el, _c1, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, inputs: { print: [1, "print"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 15, vars: 8, consts: [["dailyChart", ""], ["levelChart", ""], [1, "flex", "w-full", "items-center", "space-x-4", "px-4", 3, "resize"], [1, "border-base-200", "bg-base-100", "h-72", "flex-1", "rounded-sm", "border"], [1, "border-base-200", "border-b", "p-4", "text-xl", "font-bold"], [1, "mx-auto", "h-56", "w-full", "max-w-full", "p-2"], [1, "mx-auto", "h-56", "w-[24rem]", "max-w-full", "p-2"]], template: function ReportDesksChartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 2);
        \u0275\u0275domListener("resize", function ReportDesksChartsComponent_Template_div_resize_0_listener() {
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
    }, dependencies: [TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.is-print[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  width: 8cm !important;\n}\n/*# sourceMappingURL=report-desks-charts.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportDesksChartsComponent, [{
    type: Component,
    args: [{ selector: "report-desks-charts", template: `
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
    `, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;554a1b12239fa29aec32e67883eab593b53d44df3427eee1e23c3736e6afc0f4;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/desks/report-desks-charts.component.ts */\n:host {\n  display: block;\n}\n.is-print canvas {\n  width: 8cm !important;\n}\n/*# sourceMappingURL=report-desks-charts.component.css.map */\n"] }]
  }], () => [], { print: [{ type: Input, args: [{ isSignal: true, alias: "print", required: false }] }], _daily_chart_el: [{ type: ViewChild, args: ["dailyChart", { isSignal: true }] }], _level_chart_el: [{ type: ViewChild, args: ["levelChart", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportDesksChartsComponent, { className: "ReportDesksChartsComponent", filePath: "apps/concierge/src/app/reports/desks/report-desks-charts.component.ts", lineNumber: 88 });
})();

// apps/concierge/src/app/reports/desks/report-desks-level-list.component.ts
var _c02 = (a0) => ({ key: "name", name: a0 });
var _c12 = (a0) => ({ key: "avg_usage", name: a0 });
var _c2 = (a0) => ({ key: "approved", name: a0 });
var _c3 = (a0) => ({ key: "count", name: a0 });
var _c4 = (a0, a1) => ({ key: "utilisation", name: a0, content: a1 });
var _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function ReportDesksLevelListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ReportDesksLevelListComponent_Conditional_6_Template_button_click_0_listener() {
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
function ReportDesksLevelListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", data_r3 || "0", "%");
  }
}
var TABLE_METRIC_GUIDE = [
  {
    label: "Average desks",
    description: "Desk bookings on the level divided by the number of days in the selected period."
  },
  {
    label: "Approved",
    description: "Bookings on the level where the booking is approved."
  },
  {
    label: "Total requests",
    description: "Total desk bookings on the level for the selected period."
  },
  {
    label: "Utilisation",
    description: "Bookings on the level divided by available desk count multiplied by days in the selected period."
  }
];
var ReportDesksLevelListComponent = class _ReportDesksLevelListComponent {
  constructor() {
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
    this.table_metric_guide = TABLE_METRIC_GUIDE;
    this._options = this._state.options;
    this._stats = this._state.stats;
    this._counts = this._state.counts;
    this.level_list = computed(
      () => {
        const options = this._options();
        let zones = options.zones || [];
        const stats = this._stats();
        const counts = this._counts();
        const duration = differenceInDays(options.end, options.start) || 1;
        if (!zones.length) {
          zones = this._settings.get("app.use_region") ? this._org.levelsForRegion().map((_) => _.id) : this._org.levelsForBuilding().map((_) => _.id);
        }
        const levels = [];
        for (const zone of zones) {
          if (zone === "All")
            continue;
          const lvl = this._org.levelWithID([zone]);
          const count = counts[zone] || 0;
          const events = (stats.events || []).filter((bkn) => bkn.zones.includes(zone));
          let free = (count * duration - events.length) / duration;
          if (free % 1 !== 0)
            free = free.toFixed(2);
          levels.push({
            name: lvl?.display_name || lvl?.name,
            free,
            approved: events.filter((_) => _.approved).length || 0,
            avg_usage: (events.length / duration || 0).toFixed(2),
            total: count,
            count: events.length,
            utilisation: (events.length / ((count || 1) * duration) * 100 || 0).toFixed(2)
          });
        }
        return levels;
      },
      ...ngDevMode ? [{ debugName: "level_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.download = async () => {
      const data = this.level_list();
      downloadFile("desks-levels-usage.csv", jsonToCsv(data));
    };
  }
  static {
    this.\u0275fac = function ReportDesksLevelListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportDesksLevelListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportDesksLevelListComponent, selectors: [["report-desks-levels-list"]], inputs: { print: [1, "print"] }, decls: 17, vars: 40, consts: [["percent_view", ""], [1, "w-full", "px-4", "pb-2"], [1, "border-base-200", "bg-base-100", "w-full", "overflow-hidden", "rounded-sm", "border"], [1, "border-base-200", "flex", "items-center", "border-b", "p-4"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], ["title", "Table column calculations", 3, "items", "inline"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "page_size", "sortable", "empty_message"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"]], template: function ReportDesksLevelListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h3", 4);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, ReportDesksLevelListComponent_Conditional_6_Template, 4, 3, "button", 5);
        \u0275\u0275element(7, "placeos-report-metric-guide", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "simple-table", 7);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275template(15, ReportDesksLevelListComponent_ng_template_15_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const percent_view_r4 = \u0275\u0275reference(16);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 9, "APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.print() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.table_metric_guide)("inline", true);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.level_list())("columns", \u0275\u0275pureFunction5(34, _c5, \u0275\u0275pureFunction1(23, _c02, \u0275\u0275pipeBind1(9, 11, "RESOURCE.LEVEL")), \u0275\u0275pureFunction1(25, _c12, \u0275\u0275pipeBind1(10, 13, "APP.CONCIERGE.REPORTS_AVG_DESKS")), \u0275\u0275pureFunction1(27, _c2, \u0275\u0275pipeBind1(11, 15, "APP.CONCIERGE.REPORTS_APPROVED")), \u0275\u0275pureFunction1(29, _c3, \u0275\u0275pipeBind1(12, 17, "APP.CONCIERGE.REPORTS_TOTAL_REQUESTS")), \u0275\u0275pureFunction2(31, _c4, \u0275\u0275pipeBind1(13, 19, "APP.CONCIERGE.REPORTS_UTILISATION"), percent_view_r4)))("page_size", ctx.print() ? 0 : 10)("sortable", true)("empty_message", \u0275\u0275pipeBind1(14, 21, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportDesksLevelListComponent, [{
    type: Component,
    args: [{
      selector: "report-desks-levels-list",
      template: `
        <div class="w-full px-4 pb-2">
            <div
                class="border-base-200 bg-base-100 w-full overflow-hidden rounded-sm border"
            >
                <div class="border-base-200 flex items-center border-b p-4">
                    <h3 class="flex-1 text-xl font-bold">
                        {{
                            'APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER'
                                | translate
                        }}
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
                    [data]="level_list()"
                    [columns]="[
                        { key: 'name', name: 'RESOURCE.LEVEL' | translate },
                        {
                            key: 'avg_usage',
                            name: 'APP.CONCIERGE.REPORTS_AVG_DESKS' | translate,
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
                            key: 'utilisation',
                            name:
                                'APP.CONCIERGE.REPORTS_UTILISATION' | translate,
                            content: percent_view,
                        },
                    ]"
                    [page_size]="print() ? 0 : 10"
                    [sortable]="true"
                    [empty_message]="
                        'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                    "
                >
                </simple-table>
                <ng-template #percent_view let-data="data">
                    <div class="p-4">{{ data || '0' }}%</div>
                </ng-template>
            </div>
        </div>
    `,
      imports: [
        SimpleTableComponent,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        ReportMetricGuideComponent
      ]
    }]
  }], null, { print: [{ type: Input, args: [{ isSignal: true, alias: "print", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportDesksLevelListComponent, { className: "ReportDesksLevelListComponent", filePath: "apps/concierge/src/app/reports/desks/report-desks-level-list.component.ts", lineNumber: 127 });
})();

// apps/concierge/src/app/reports/desks/report-desks-overall-list.component.ts
var _c03 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c13 = (a0) => ({ key: "approved", name: a0 });
var _c22 = (a0) => ({ key: "count", name: a0 });
var _c32 = (a0) => ({ key: "cancelled", name: "Rejected", content: a0 });
var _c42 = (a0) => ({ key: "deleted", name: "Cancelled", content: a0 });
var _c52 = (a0, a1) => ({ key: "utilisation", name: a0, content: a1 });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function ReportDesksOverallListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ReportDesksOverallListComponent_Conditional_6_Template_button_click_0_listener() {
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
function ReportDesksOverallListComponent_ng_template_14_Template(rf, ctx) {
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
function ReportDesksOverallListComponent_ng_template_16_Template(rf, ctx) {
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
function ReportDesksOverallListComponent_ng_template_18_Template(rf, ctx) {
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
var TABLE_METRIC_GUIDE2 = [
  {
    label: "Approved",
    description: "Bookings on the day where the booking is approved."
  },
  {
    label: "Total requests",
    description: "All desk bookings on the day, including active, rejected, and cancelled bookings."
  },
  {
    label: "Rejected / Cancelled",
    description: "Displayed as count and percentage of total requests for that day."
  },
  {
    label: "Utilisation",
    description: "Active desk bookings divided by the greater of active bookings or available desk count for that day."
  }
];
var ReportDesksOverallListComponent = class _ReportDesksOverallListComponent {
  constructor() {
    this._state = inject(ReportsStateService);
    this.print = input(
      false,
      ...ngDevMode ? [{ debugName: "print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.table_metric_guide = TABLE_METRIC_GUIDE2;
    this.day_list = this._state.day_list;
    this.download = async () => {
      const data = this.day_list().map((d) => __spreadProps(__spreadValues({}, d), {
        date: format(d.date, "MMM d, y(EEE)"),
        cancelled: formatReportPercentage(d.cancelled, d.count),
        deleted: formatReportPercentage(d.deleted, d.count)
      }));
      downloadFile("desks-usage.csv", jsonToCsv(data));
    };
    this.formatPercent = formatReportPercentage;
  }
  static {
    this.\u0275fac = function ReportDesksOverallListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportDesksOverallListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportDesksOverallListComponent, selectors: [["report-desks-overall-list"]], inputs: { print: [1, "print"] }, decls: 20, vars: 42, consts: [["date_template", ""], ["percent_template", ""], ["booking_percent_template", ""], [1, "w-full", "pb-2"], [1, "border-base-200", "bg-base-100", "m-4", "overflow-hidden", "rounded-sm", "border"], [1, "border-base-200", "flex", "items-center", "border-b", "p-4"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], ["title", "Table column calculations", 3, "items", "inline"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "page_size", "sortable", "empty_message"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"]], template: function ReportDesksOverallListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "h3", 6);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, ReportDesksOverallListComponent_Conditional_6_Template, 4, 3, "button", 7);
        \u0275\u0275element(7, "placeos-report-metric-guide", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "simple-table", 9);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275template(14, ReportDesksOverallListComponent_ng_template_14_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, ReportDesksOverallListComponent_ng_template_16_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(18, ReportDesksOverallListComponent_ng_template_18_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
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
        \u0275\u0275property("data", ctx.day_list())("columns", \u0275\u0275pureFunction6(35, _c6, \u0275\u0275pureFunction2(21, _c03, \u0275\u0275pipeBind1(9, 11, "FORM.DATE"), date_template_r7), \u0275\u0275pureFunction1(24, _c13, \u0275\u0275pipeBind1(10, 13, "APP.CONCIERGE.REPORTS_APPROVED")), \u0275\u0275pureFunction1(26, _c22, \u0275\u0275pipeBind1(11, 15, "APP.CONCIERGE.REPORTS_TOTAL_REQUESTS")), \u0275\u0275pureFunction1(28, _c32, booking_percent_template_r9), \u0275\u0275pureFunction1(30, _c42, booking_percent_template_r9), \u0275\u0275pureFunction2(32, _c52, \u0275\u0275pipeBind1(12, 17, "APP.CONCIERGE.REPORTS_UTILISATION"), percent_template_r8)))("page_size", ctx.print() ? 0 : 10)("sortable", true)("empty_message", \u0275\u0275pipeBind1(13, 19, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportDesksOverallListComponent, [{
    type: Component,
    args: [{
      selector: "report-desks-overall-list",
      template: `
        <div class="w-full pb-2">
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
                    [page_size]="print() ? 0 : 10"
                    [sortable]="true"
                    [empty_message]="
                        'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                    "
                >
                </simple-table>
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
        SimpleTableComponent,
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        ReportMetricGuideComponent
      ]
    }]
  }], null, { print: [{ type: Input, args: [{ isSignal: true, alias: "print", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportDesksOverallListComponent, { className: "ReportDesksOverallListComponent", filePath: "apps/concierge/src/app/reports/desks/report-desks-overall-list.component.ts", lineNumber: 144 });
})();

// apps/concierge/src/app/reports/desks/report-desks.component.ts
function ReportDesksComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "placeos-report-metric-guide", 9);
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 11)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 11)(9, "h3");
    \u0275\u0275text(10, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 11)(14, "h3");
    \u0275\u0275text(15, "Rejected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 11)(19, "h3");
    \u0275\u0275text(20, "Cancelled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 11)(24, "h3");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(29, "report-desks-charts", 12)(30, "report-desks-overall-list", 12)(31, "report-desks-levels-list", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("absolute", true)("items", ctx_r0.metric_guide);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 12, "APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.total_count() || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.active_count() || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.cancelled_count() || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.deleted_count() || 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 14, "APP.CONCIERGE.REPORTS_UTILISATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.utilisation() || 0, "%");
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing());
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing());
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing());
  }
}
function ReportDesksComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.REPORTS_EMPTY"), " ");
  }
}
function ReportDesksComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ReportDesksComponent_Conditional_9_Conditional_0_Template, 32, 16)(1, ReportDesksComponent_Conditional_9_Conditional_1_Template, 4, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.total_count() ? 0 : 1);
  }
}
function ReportDesksComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 14);
    \u0275\u0275elementStart(2, "p", 13);
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
    label: "Total bookings",
    description: "All desk bookings returned for the selected dates and zones, including active, rejected, and cancelled records."
  },
  {
    label: "Active",
    description: "Bookings that are not cancelled and are not rejected."
  },
  {
    label: "Rejected / Cancelled",
    description: "Rejected counts bookings with cancelled state or rejected status. Cancelled counts bookings flagged as cancelled."
  },
  {
    label: "Utilisation",
    description: "Active booking count divided by the number of available desks across the selected levels and business-day period."
  },
  {
    label: "Daily utilisation",
    description: "For each day, active desk usage is compared with available desk capacity for the selected levels."
  }
];
var ReportDesksComponent = class _ReportDesksComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(ReportsStateService);
    this._settings = inject(SettingsService);
    this._route = inject(ActivatedRoute);
    this._org = inject(OrganisationService);
    this._stats = this._state.stats;
    this.printing = signal(
      false,
      ...ngDevMode ? [{ debugName: "printing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.metric_guide = METRIC_GUIDE;
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
    this.utilisation = computed(
      () => ((this._stats().utilisation || 0) * 100).toFixed(1),
      ...ngDevMode ? [{ debugName: "utilisation" }] : (
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
    this._state.setOptions({ type: "desks" });
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("start")) {
        this._state.setOptions({ start: +params.get("start") });
      }
      if (params.has("end")) {
        this._state.setOptions({ end: +params.get("end") });
      }
      if (params.has("zones") || params.has("zone_ids")) {
        const id_list = params.get("zones") || params.get("zone_ids");
        const zones = id_list.split(",").filter((_) => _);
        if (zones.length)
          this._state.setOptions({ zones });
      } else {
        this._state.setOptions({ zones: [] });
      }
    }));
  }
  print() {
    this.printing.set(true);
    setTimeout(() => {
      window.print();
      this.printing.set(false);
    }, 300);
  }
  static {
    this.\u0275fac = function ReportDesksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportDesksComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportDesksComponent, selectors: [["", "report-desks", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 7, consts: [["resource_type", "desks", 3, "printing", "download", "generate", "loading", "has_data"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "print:h-auto", "print:overflow-visible"], [1, "w-full"], [1, "bg-base-200", "m-4", "flex", "items-center", "rounded-sm", "p-4"], ["auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "px-2", "text-2xl", "font-medium"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [1, "screen-only", "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [3, "absolute", "items"], [1, "border-base-200", "bg-base-100", "m-4", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border", "p-4"], [1, "flex", "flex-1", "flex-col", "items-center"], [3, "print"], [1, "opacity-30"], [1, "mb-4", 3, "diameter"]], template: function ReportDesksComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "reports-options", 0);
        \u0275\u0275listener("printing", function ReportDesksComponent_Template_reports_options_printing_0_listener($event) {
          return ctx.printing.set($event);
        })("download", function ReportDesksComponent_Template_reports_options_download_0_listener() {
          return ctx.downloadReport();
        })("generate", function ReportDesksComponent_Template_reports_options_generate_0_listener() {
          return ctx.generateReport();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4)(5, "div", 5);
        \u0275\u0275elementStart(6, "h2", 6);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(9, ReportDesksComponent_Conditional_9_Template, 2, 1)(10, ReportDesksComponent_Conditional_10_Template, 5, 4, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("loading", !!ctx.loading())("has_data", !!ctx.total_count());
        \u0275\u0275advance(4);
        \u0275\u0275property("source", ctx.logo()?.src || ctx.logo());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "APP.CONCIERGE.REPORTS_DESKS_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 9 : 10);
      }
    }, dependencies: [
      MatProgressSpinnerModule,
      MatProgressSpinner,
      ReportsOptionsComponent,
      ReportMetricGuideComponent,
      ReportDesksChartsComponent,
      ReportDesksLevelListComponent,
      ReportDesksOverallListComponent,
      AuthenticatedImageDirective,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nh3[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n/*# sourceMappingURL=report-desks.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportDesksComponent, [{
    type: Component,
    args: [{ selector: "[report-desks]", template: `
        <reports-options
            resource_type="desks"
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
                    <img auth class="h-12" [source]="logo()?.src || logo()" />
                    <div class="flex-1"></div>
                    <h2 class="px-2 text-2xl font-medium">
                        {{ 'APP.CONCIERGE.REPORTS_DESKS_HEADER' | translate }}
                    </h2>
                </div>
            </div>
            @if (!loading()) {
                @if (total_count()) {
                    <placeos-report-metric-guide
                        [absolute]="true"
                        [items]="metric_guide"
                    />
                    <div
                        class="border-base-200 bg-base-100 m-4 flex items-center justify-center space-x-2 rounded-sm border p-4"
                    >
                        <div class="flex flex-1 flex-col items-center">
                            <h3>
                                {{
                                    'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS'
                                        | translate
                                }}
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
                                {{
                                    'APP.CONCIERGE.REPORTS_UTILISATION'
                                        | translate
                                }}
                            </h3>
                            <p>{{ utilisation() || 0 }}%</p>
                        </div>
                    </div>
                    <report-desks-charts
                        [print]="printing()"
                    ></report-desks-charts>
                    <report-desks-overall-list
                        [print]="printing()"
                    ></report-desks-overall-list>
                    <report-desks-levels-list
                        [print]="printing()"
                    ></report-desks-levels-list>
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
      TranslatePipe,
      MatProgressSpinnerModule,
      ReportsOptionsComponent,
      ReportMetricGuideComponent,
      ReportDesksChartsComponent,
      ReportDesksLevelListComponent,
      ReportDesksOverallListComponent,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;a2acccb33bf7e03dd7b433f5322d3eebbac39652744132c78c2980c29c63579a;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/desks/report-desks.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nh3 {\n  font-weight: 500;\n}\n/*# sourceMappingURL=report-desks.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportDesksComponent, { className: "ReportDesksComponent", filePath: "apps/concierge/src/app/reports/desks/report-desks.component.ts", lineNumber: 165 });
})();
export {
  ReportDesksComponent
};
//# debugId=3367960d-e814-5b98-b7a4-66b806457d78
//# sourceMappingURL=report-desks.component-SJ3R3SE3.js.map
