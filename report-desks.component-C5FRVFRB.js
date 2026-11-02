import {
  ReportUsageChartsComponent,
  ReportUsageListComponent,
  differenceInDays
} from "./chunk-GXWSXPPP.js";
import {
  ReportsStateService
} from "./chunk-LPNDBXG3.js";
import "./chunk-K2GEOON2.js";
import {
  ReportPageComponent,
  ReportsOptionsComponent
} from "./chunk-P3A3ZRPP.js";
import {
  ReportMetricGuideComponent
} from "./chunk-3FCCIC2A.js";
import {
  reportQueryOptions
} from "./chunk-BNYZLQSX.js";
import "./chunk-3S4UZCED.js";
import "./chunk-SQBUP7QD.js";
import "./chunk-WMUG2SNM.js";
import {
  SimpleTableComponent
} from "./chunk-SCK3R33F.js";
import "./chunk-KVXPH3YM.js";
import "./chunk-6PPSEREO.js";
import "./chunk-AXTLKA5M.js";
import "./chunk-7HCW6D2W.js";
import "./chunk-6LEQICQW.js";
import "./chunk-YBGXLKPT.js";
import "./chunk-MBWPL2KS.js";
import "./chunk-7LDHXOXB.js";
import "./chunk-DX7Y4JVK.js";
import "./chunk-SBGPLKMV.js";
import "./chunk-I52JNSOJ.js";
import "./chunk-UALXRIP7.js";
import "./chunk-54KE5JKV.js";
import "./chunk-3Y7PKCSJ.js";
import "./chunk-OX3RHFRB.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-QWYXFXJS.js";
import "./chunk-G7ZLBZI3.js";
import "./chunk-RIENTTXY.js";
import "./chunk-NRIUKP6T.js";
import "./chunk-MC2JPMPX.js";
import "./chunk-QG4JAQFD.js";
import "./chunk-YKKYLTOM.js";
import {
  TranslatePipe
} from "./chunk-SWZTUYHJ.js";
import "./chunk-GQCWKAWZ.js";
import {
  OrganisationService,
  SettingsService
} from "./chunk-6ETA7VOK.js";
import {
  IconComponent
} from "./chunk-NE545G3N.js";
import {
  AsyncHandler,
  downloadFile,
  jsonToCsv
} from "./chunk-XMOMB3G6.js";
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
  Component,
  Input,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
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
  ɵɵpureFunction5,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QAVCSYNX.js";
import "./chunk-653SOEEV.js";

// apps/concierge/src/app/reports/desks/report-desks-level-list.component.ts
var _c0 = (a0) => ({ key: "name", name: a0 });
var _c1 = (a0) => ({ key: "avg_usage", name: a0 });
var _c2 = (a0) => ({ key: "approved", name: a0 });
var _c3 = (a0) => ({ key: "count", name: a0 });
var _c4 = (a0, a1) => ({ key: "utilisation", name: a0, content: a1 });
var _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function ReportDesksLevelListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ReportDesksLevelListComponent_Conditional_6_Template_button_click_0_listener() {
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
        \u0275\u0275conditionalCreate(6, ReportDesksLevelListComponent_Conditional_6_Template, 5, 6, "button", 5);
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
        \u0275\u0275property("data", ctx.level_list())("columns", \u0275\u0275pureFunction5(34, _c5, \u0275\u0275pureFunction1(23, _c0, \u0275\u0275pipeBind1(9, 11, "RESOURCE.LEVEL")), \u0275\u0275pureFunction1(25, _c1, \u0275\u0275pipeBind1(10, 13, "APP.CONCIERGE.REPORTS_AVG_DESKS")), \u0275\u0275pureFunction1(27, _c2, \u0275\u0275pipeBind1(11, 15, "APP.CONCIERGE.REPORTS_APPROVED")), \u0275\u0275pureFunction1(29, _c3, \u0275\u0275pipeBind1(12, 17, "APP.CONCIERGE.REPORTS_TOTAL_REQUESTS")), \u0275\u0275pureFunction2(31, _c4, \u0275\u0275pipeBind1(13, 19, "APP.CONCIERGE.REPORTS_UTILISATION"), percent_view_r4)))("page_size", ctx.print() ? 0 : 10)("sortable", true)("empty_message", \u0275\u0275pipeBind1(14, 21, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportDesksLevelListComponent, { className: "ReportDesksLevelListComponent", filePath: "apps/concierge/src/app/reports/desks/report-desks-level-list.component.ts", lineNumber: 131 });
})();

// apps/concierge/src/app/reports/desks/report-desks.component.ts
function ReportDesksComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "placeos-report-metric-guide", 2);
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 4)(9, "h3");
    \u0275\u0275text(10, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 4)(14, "h3");
    \u0275\u0275text(15, "Rejected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 4)(19, "h3");
    \u0275\u0275text(20, "Cancelled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 4)(24, "h3");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(29, "report-usage-charts", 5)(30, "report-usage-list", 6)(31, "report-desks-levels-list", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
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
    this._route = inject(ActivatedRoute);
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
    this._state.setOptions({ type: "desks" });
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => this._state.setOptions(reportQueryOptions(params, true))));
  }
  static {
    this.\u0275fac = function ReportDesksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportDesksComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportDesksComponent, selectors: [["", "report-desks", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 4, consts: [["resource_type", "desks", 3, "printing", "download", "generate", "loading", "has_data"], ["header", "APP.CONCIERGE.REPORTS_DESKS_HEADER", 3, "loading", "has_data"], [3, "absolute", "items"], [1, "border-base-200", "bg-base-100", "m-4", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border", "p-4"], [1, "flex", "flex-1", "flex-col", "items-center"], [3, "print"], ["type", "desks", 3, "print"]], template: function ReportDesksComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(1, "report-page", 1);
        \u0275\u0275template(2, ReportDesksComponent_ng_template_2_Template, 32, 16, "ng-template");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("loading", !!ctx.loading())("has_data", !!ctx.total_count());
        \u0275\u0275advance();
        \u0275\u0275property("loading", !!ctx.loading())("has_data", !!ctx.total_count());
      }
    }, dependencies: [
      ReportPageComponent,
      ReportsOptionsComponent,
      ReportMetricGuideComponent,
      ReportUsageChartsComponent,
      ReportDesksLevelListComponent,
      ReportUsageListComponent,
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
        <report-page
            header="APP.CONCIERGE.REPORTS_DESKS_HEADER"
            [loading]="!!loading()"
            [has_data]="!!total_count()"
        >
            <ng-template>
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
                                'APP.CONCIERGE.REPORTS_UTILISATION' | translate
                            }}
                        </h3>
                        <p>{{ utilisation() || 0 }}%</p>
                    </div>
                </div>
                <report-usage-charts [print]="printing()" />
                <report-usage-list type="desks" [print]="printing()" />
                <report-desks-levels-list
                    [print]="printing()"
                ></report-desks-levels-list>
            </ng-template>
        </report-page>
    `, imports: [
      ReportPageComponent,
      TranslatePipe,
      ReportsOptionsComponent,
      ReportMetricGuideComponent,
      ReportUsageChartsComponent,
      ReportDesksLevelListComponent,
      ReportUsageListComponent
    ], styles: ["/* angular:styles/component:css;a2acccb33bf7e03dd7b433f5322d3eebbac39652744132c78c2980c29c63579a;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/desks/report-desks.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nh3 {\n  font-weight: 500;\n}\n/*# sourceMappingURL=report-desks.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportDesksComponent, { className: "ReportDesksComponent", filePath: "apps/concierge/src/app/reports/desks/report-desks.component.ts", lineNumber: 129 });
})();
export {
  ReportDesksComponent
};
//# debugId=1f30ce9b-4f4b-55af-a8c4-815b892b7ff1
//# sourceMappingURL=report-desks.component-C5FRVFRB.js.map
