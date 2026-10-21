import {
  differenceInBusinessDays
} from "./chunk-QZZAG2PA.js";
import {
  REMOVE_KEYS
} from "./chunk-7WQR2VDI.js";
import {
  ReportsOptionsComponent
} from "./chunk-KFOVGYPT.js";
import {
  ReportMetricGuideComponent
} from "./chunk-3SO3DV43.js";
import "./chunk-M7D6LSL2.js";
import "./chunk-6TY7WDWD.js";
import {
  showVisitorFlag
} from "./chunk-NZZC4LZU.js";
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
import {
  queryBookings
} from "./chunk-5U2JY245.js";
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
import "./chunk-7MSOSGO6.js";
import "./chunk-23X2VP53.js";
import {
  TranslatePipe
} from "./chunk-N7R5EHVG.js";
import "./chunk-MCWEYL2F.js";
import "./chunk-C5SFKFXB.js";
import {
  OrganisationService,
  SettingsService,
  getUnixTime
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
  i18n,
  isSameDay,
  jsonToCsv,
  notifyError,
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
  Injectable,
  Input,
  computed,
  formatDate,
  inject,
  input,
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
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
  ɵɵpureFunction4,
  ɵɵpureFunction7,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EOGESHX7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/reports/visitors/visitors-report.service.ts
var VisitorsReportService = class _VisitorsReportService {
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
      {},
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._generate = signal(
      0,
      ...ngDevMode ? [{ debugName: "_generate" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._loading.asReadonly();
    this.options = this._options.asReadonly();
    this._bookings = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_bookings" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._generate(),
      defaultValue: [],
      loader: async ({ params: gen }) => {
        if (gen <= 0)
          return [];
        const options = this._options();
        this._loading.set(true);
        const { start, end, zones } = options;
        try {
          const list = await queryBookings({
            period_start: getUnixTime(startOfDay(start || Date.now())),
            period_end: getUnixTime(endOfDay(end || start || Date.now())),
            type: "visitor",
            zones: (zones || [])?.join(",") || (this._settings.get("app.use_region") ? this._org.region?.id : "") || this._org.building?.id
          });
          if (!list.length) {
            notifyError(i18n("APP.CONCIERGE.REPORTS_LOAD_ERROR"));
          }
          return list;
        } finally {
          this._loading.set(false);
        }
      }
    }));
    this.bookings = this._bookings.value;
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
  }
  setOptions(options) {
    this._options.set(__spreadValues(__spreadValues({}, this._options()), options));
  }
  generateReport() {
    this._generate.set(Date.now());
  }
  async downloadReport() {
    const options = this._options();
    const bookings = this.bookings();
    const show_international = showVisitorFlag(this._settings, bookings, "international");
    const show_visitor_internal_or_external = showVisitorFlag(this._settings, bookings, "visitor_internal_or_external");
    if (!bookings?.length)
      return;
    const is_same = isSameDay(options.start, options.end);
    const date = is_same ? format(options.start || startOfDay(Date.now()), "yyyy-MM-dd") : `${format(options.start || startOfDay(Date.now()), "yyyy-MM-dd")}-${format(options.end || endOfDay(Date.now()), "yyyy-MM-dd")}`;
    downloadFile(`report+assets+${date}.tsv`, jsonToCsv(bookings.map((booking) => {
      const b = booking.toJSON();
      const fmt_str = "MMM d, y, h:mm a";
      b.start = formatDate(b.booking_start * 1e3, fmt_str, "en");
      b.end = formatDate(b.booking_end * 1e3, fmt_str, "en");
      if (show_international) {
        b.international = i18n(booking.extension_data?.international ? "COMMON.YES" : "COMMON.NO");
      }
      if (show_visitor_internal_or_external) {
        b.visitor_internal_or_external = i18n(booking.extension_data?.visitor_internal_or_external === "external" ? "COMMON.TYPE_EXTERNAL" : "COMMON.TYPE_INTERNAL");
      }
      for (const key of REMOVE_KEYS)
        delete b[key];
      return b;
    }), "	"));
  }
  static {
    this.\u0275fac = function VisitorsReportService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisitorsReportService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VisitorsReportService, factory: _VisitorsReportService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorsReportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/reports/visitors/visitor-report-daily-usage.component.ts
var _c0 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c1 = (a0) => ({ key: "booking_count", name: a0 });
var _c2 = (a0) => ({ key: "host_count", name: a0 });
var _c3 = (a0) => ({ key: "booked_count", name: a0 });
var _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function VisitorReportDailyUsageComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function VisitorReportDailyUsageComponent_Conditional_5_Template_button_click_0_listener() {
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
function VisitorReportDailyUsageComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
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
var TABLE_METRIC_GUIDE = [
  {
    label: "Unique visitors",
    description: "Number of distinct visitor asset IDs booked on the day."
  },
  {
    label: "Hosts",
    description: "Number of distinct booking user emails on the day."
  },
  {
    label: "Booking count",
    description: "Total visitor bookings recorded for the day."
  }
];
var VisitorReportDailyUsageComponent = class _VisitorReportDailyUsageComponent {
  constructor() {
    this._state = inject(VisitorsReportService);
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
        const days = this._state.daily_stats();
        const list = [];
        for (const date in days) {
          list.push({
            date,
            booking_count: unique(days[date].bookings, "asset_id").length,
            host_count: unique(days[date].bookings, "user_email").length,
            booked_count: days[date].bookings.length
          });
        }
        return list;
      },
      ...ngDevMode ? [{ debugName: "daily_stats" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.download = async () => {
      const data = this.daily_stats();
      downloadFile("report-visitors-daily-usage.csv", jsonToCsv(data));
    };
  }
  static {
    this.\u0275fac = function VisitorReportDailyUsageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisitorReportDailyUsageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorReportDailyUsageComponent, selectors: [["visitor-report-daily-usage"]], inputs: { print: [1, "print"] }, decls: 15, vars: 35, consts: [["date_template", ""], [1, "border-base-200", "bg-base-100", "m-4", "overflow-hidden", "rounded-sm", "border"], [1, "border-base-200", "flex", "items-center", "border-b", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], ["title", "Table column calculations", 3, "items", "inline"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"]], template: function VisitorReportDailyUsageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, VisitorReportDailyUsageComponent_Conditional_5_Template, 4, 3, "button", 4);
        \u0275\u0275element(6, "placeos-report-metric-guide", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "simple-table", 6);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275template(13, VisitorReportDailyUsageComponent_ng_template_13_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const date_template_r4 = \u0275\u0275reference(14);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "APP.CONCIERGE.REPORTS_VISITORS_DAILY"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.print() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.table_metric_guide)("inline", true);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.daily_stats())("columns", \u0275\u0275pureFunction4(30, _c4, \u0275\u0275pureFunction2(21, _c0, \u0275\u0275pipeBind1(8, 11, "FORM.DATE"), date_template_r4), \u0275\u0275pureFunction1(24, _c1, \u0275\u0275pipeBind1(9, 13, "APP.CONCIERGE.REPORTS_VISITORS_UNIQUE")), \u0275\u0275pureFunction1(26, _c2, \u0275\u0275pipeBind1(10, 15, "APP.CONCIERGE.REPORTS_VISITORS_HOSTS")), \u0275\u0275pureFunction1(28, _c3, \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.REPORTS_BOOKING_COUNT_HEADER"))))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
      }
    }, dependencies: [
      CommonModule,
      SimpleTableComponent,
      IconComponent,
      MatTooltipModule,
      MatTooltip,
      MatRippleModule,
      MatRipple,
      ReportMetricGuideComponent,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorReportDailyUsageComponent, [{
    type: Component,
    args: [{ selector: "visitor-report-daily-usage", template: `
        <div
            class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_VISITORS_DAILY' | translate }}
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
                [data]="daily_stats()"
                [columns]="[
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                    },
                    {
                        key: 'booking_count',
                        name:
                            'APP.CONCIERGE.REPORTS_VISITORS_UNIQUE' | translate,
                    },
                    {
                        key: 'host_count',
                        name:
                            'APP.CONCIERGE.REPORTS_VISITORS_HOSTS' | translate,
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
        </div>
    `, imports: [
      CommonModule,
      SimpleTableComponent,
      TranslatePipe,
      IconComponent,
      MatTooltipModule,
      MatRippleModule,
      ReportMetricGuideComponent
    ] }]
  }], null, { print: [{ type: Input, args: [{ isSignal: true, alias: "print", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorReportDailyUsageComponent, { className: "VisitorReportDailyUsageComponent", filePath: "apps/concierge/src/app/reports/visitors/visitor-report-daily-usage.component.ts", lineNumber: 111 });
})();

// apps/concierge/src/app/reports/visitors/visitor-report-list.component.ts
var _c02 = (a0) => ({ key: "visitor_name", name: a0 });
var _c12 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c22 = (a0) => ({ key: "host", name: a0 });
var _c32 = (a0) => ({ key: "checked_in", name: a0 });
var _c42 = (a0) => ({ key: "self_registered", name: a0 });
var _c5 = (a0) => ({ key: "international", name: "International", show: a0 });
var _c6 = (a0, a1) => ({ key: "visitor_internal_or_external", name: a0, show: a1 });
var _c7 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
function VisitorReportListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function VisitorReportListComponent_Conditional_5_Template_button_click_0_listener() {
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
function VisitorReportListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
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
var TABLE_METRIC_GUIDE2 = [
  {
    label: "Name",
    description: "Uses asset name, extension asset name, description, then asset ID as fallback."
  },
  {
    label: "Host",
    description: "Booking user name, falling back to user email."
  },
  {
    label: "Checked in",
    description: "True when the visitor booking checked-in flag is set."
  },
  {
    label: "Self registered",
    description: "True when the visitor booking extension data marks the visitor as self registered."
  },
  {
    label: "International",
    description: "Shown only when international visitors are enabled, using the booking extension international flag."
  },
  {
    label: "Internal or external",
    description: "Shown only when the visitor internal/external type is enabled. Internal unless the booking extension value is external."
  }
];
var VisitorReportListComponent = class _VisitorReportListComponent {
  constructor() {
    this._state = inject(VisitorsReportService);
    this._settings = inject(SettingsService);
    this.print = input(
      false,
      ...ngDevMode ? [{ debugName: "print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visitor_bookings = computed(
      () => {
        const bookings = this._state.bookings();
        const list = [];
        for (const booking of bookings) {
          list.push({
            visitor_name: booking.asset_name || booking.extension_data?.asset_name || booking.description || booking.asset_id,
            visitor_email: booking.asset_id || booking.extension_data?.visitor_email || "",
            date: booking.date,
            host: booking.user_name || booking.user_email,
            host_email: booking.user_email || booking.booked_by_email,
            checked_in: i18n(booking.checked_in ? "COMMON.YES" : "COMMON.NO"),
            self_registered: i18n(booking.extension_data?.self_registered ? "COMMON.YES" : "COMMON.NO"),
            international: i18n(booking.extension_data?.international ? "COMMON.YES" : "COMMON.NO"),
            visitor_internal_or_external: i18n(booking.extension_data?.visitor_internal_or_external === "external" ? "COMMON.TYPE_EXTERNAL" : "COMMON.TYPE_INTERNAL")
          });
        }
        return list;
      },
      ...ngDevMode ? [{ debugName: "visitor_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.download = async () => {
      const data = this.visitor_bookings().map((item) => __spreadValues({}, item));
      for (const bkn of data) {
        bkn.date = format(bkn.date, "yyyy-MM-dd HH:mm");
      }
      downloadFile("report-visitor-daily-usage.csv", jsonToCsv(data));
    };
  }
  get allow_international() {
    return showVisitorFlag(this._settings, this._state.bookings(), "international");
  }
  get allow_visitor_internal_or_external() {
    return showVisitorFlag(this._settings, this._state.bookings(), "visitor_internal_or_external");
  }
  get table_metric_guide() {
    return TABLE_METRIC_GUIDE2.filter((item) => (this.allow_international || item.label !== "International") && (this.allow_visitor_internal_or_external || item.label !== "Internal or external"));
  }
  static {
    this.\u0275fac = function VisitorReportListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisitorReportListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorReportListComponent, selectors: [["visitor-report-list"]], inputs: { print: [1, "print"] }, decls: 17, vars: 49, consts: [["date_template", ""], [1, "border-base-200", "bg-base-100", "m-4", "overflow-hidden", "rounded-sm", "border"], [1, "border-base-200", "flex", "items-center", "border-b", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], ["title", "Table column calculations", 3, "items", "inline"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"]], template: function VisitorReportListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, VisitorReportListComponent_Conditional_5_Template, 4, 3, "button", 4);
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
        \u0275\u0275template(15, VisitorReportListComponent_ng_template_15_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const date_template_r4 = \u0275\u0275reference(16);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "APP.CONCIERGE.REPORTS_VISITORS_LIST_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.print() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.table_metric_guide)("inline", true);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.visitor_bookings())("columns", \u0275\u0275pureFunction7(41, _c7, \u0275\u0275pureFunction1(25, _c02, \u0275\u0275pipeBind1(8, 11, "FORM.NAME")), \u0275\u0275pureFunction2(27, _c12, \u0275\u0275pipeBind1(9, 13, "FORM.DATE"), date_template_r4), \u0275\u0275pureFunction1(30, _c22, \u0275\u0275pipeBind1(10, 15, "FORM.HOST")), \u0275\u0275pureFunction1(32, _c32, \u0275\u0275pipeBind1(11, 17, "COMMON.CHECKED_IN")), \u0275\u0275pureFunction1(34, _c42, \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.REPORTS_VISITORS_SELF_REGISTERED")), \u0275\u0275pureFunction1(36, _c5, ctx.allow_international), \u0275\u0275pureFunction2(38, _c6, \u0275\u0275pipeBind1(13, 21, "BOOKINGS.VISITOR_INTERNAL_OR_EXTERNAL"), ctx.allow_visitor_internal_or_external)))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(14, 23, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
      }
    }, dependencies: [
      SimpleTableComponent,
      CommonModule,
      IconComponent,
      MatTooltipModule,
      MatTooltip,
      ReportMetricGuideComponent,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorReportListComponent, [{
    type: Component,
    args: [{ selector: "visitor-report-list", template: `
        <div
            class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{
                        'APP.CONCIERGE.REPORTS_VISITORS_LIST_HEADER' | translate
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
                [data]="visitor_bookings()"
                [columns]="[
                    { key: 'visitor_name', name: 'FORM.NAME' | translate },
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                    },
                    { key: 'host', name: 'FORM.HOST' | translate },
                    {
                        key: 'checked_in',
                        name: 'COMMON.CHECKED_IN' | translate,
                    },
                    {
                        key: 'self_registered',
                        name:
                            'APP.CONCIERGE.REPORTS_VISITORS_SELF_REGISTERED'
                            | translate,
                    },
                    {
                        key: 'international',
                        name: 'International',
                        show: allow_international,
                    },
                    {
                        key: 'visitor_internal_or_external',
                        name:
                            'BOOKINGS.VISITOR_INTERNAL_OR_EXTERNAL' | translate,
                        show: allow_visitor_internal_or_external,
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
        </div>
    `, imports: [
      SimpleTableComponent,
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatTooltipModule,
      ReportMetricGuideComponent
    ] }]
  }], null, { print: [{ type: Input, args: [{ isSignal: true, alias: "print", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorReportListComponent, { className: "VisitorReportListComponent", filePath: "apps/concierge/src/app/reports/visitors/visitor-report-list.component.ts", lineNumber: 141 });
})();

// apps/concierge/src/app/reports/visitors/visitor-report-overall.component.ts
var VisitorReportOverallComponent = class _VisitorReportOverallComponent {
  constructor() {
    this._state = inject(VisitorsReportService);
    this._bookings = this._state.bookings;
    this._options = this._state.options;
    this.total_count = computed(
      () => this._bookings().length || 0,
      ...ngDevMode ? [{ debugName: "total_count" }] : (
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
        const events = this._bookings();
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
    this.\u0275fac = function VisitorReportOverallComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisitorReportOverallComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorReportOverallComponent, selectors: [["visitor-report-overall"]], decls: 19, vars: 12, consts: [[1, "border-base-200", "bg-base-100", "m-4", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border", "p-4"], [1, "flex", "flex-1", "flex-col", "items-center"], [1, "text-sm"], [1, "text-2xl"]], template: function VisitorReportOverallComponent_Template(rf, ctx) {
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
        \u0275\u0275domElementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "APP.CONCIERGE.REPORTS_BUSINESS_DAYS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.business_days() || 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 8, "APP.CONCIERGE.REPORTS_TOTAL_VISITORS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.total_count() || 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 10, "APP.CONCIERGE.REPORTS_AVERAGE_LENGTH"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.avg_length() || "0");
      }
    }, dependencies: [TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorReportOverallComponent, [{
    type: Component,
    args: [{ selector: "visitor-report-overall", template: `
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
                    {{ 'APP.CONCIERGE.REPORTS_TOTAL_VISITORS' | translate }}
                </h3>
                <p class="text-2xl">{{ total_count() || 0 }}</p>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorReportOverallComponent, { className: "VisitorReportOverallComponent", filePath: "apps/concierge/src/app/reports/visitors/visitor-report-overall.component.ts", lineNumber: 36 });
})();

// apps/concierge/src/app/reports/visitors/visitors-report.component.ts
function VisitorsReportComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "placeos-report-metric-guide", 9)(1, "visitor-report-overall")(2, "visitor-report-daily-usage", 10)(3, "visitor-report-list");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("absolute", true)("items", ctx_r0.metric_guide);
    \u0275\u0275advance(2);
    \u0275\u0275property("print", ctx_r0.printing());
  }
}
function VisitorsReportComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
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
function VisitorsReportComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, VisitorsReportComponent_Conditional_9_Conditional_0_Template, 4, 3)(1, VisitorsReportComponent_Conditional_9_Conditional_1_Template, 4, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.total_count() ? 0 : 1);
  }
}
function VisitorsReportComponent_Conditional_10_Template(rf, ctx) {
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
    label: "Total visitors",
    description: "Visitor bookings returned for the selected dates and zones."
  },
  {
    label: "Average length",
    description: "Sum of visitor booking durations divided by the number of visitor bookings."
  },
  {
    label: "Daily unique visitors",
    description: "For each day, unique visitors are counted by asset ID and hosts are counted by user email."
  },
  {
    label: "Booking count",
    description: "Total visitor bookings recorded for each day in the report."
  }
];
var VisitorsReportComponent = class _VisitorsReportComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(VisitorsReportService);
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
      () => this._state.bookings()?.length || 0,
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
      } else
        this._state.setOptions({ zones: [] });
    }));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275VisitorsReportComponent_BaseFactory;
      return function VisitorsReportComponent_Factory(__ngFactoryType__) {
        return (\u0275VisitorsReportComponent_BaseFactory || (\u0275VisitorsReportComponent_BaseFactory = \u0275\u0275getInheritedFactory(_VisitorsReportComponent)))(__ngFactoryType__ || _VisitorsReportComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorsReportComponent, selectors: [["", "visitors-report", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 7, consts: [[3, "printing", "download", "generate", "loading", "has_data"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "print:h-auto", "print:overflow-visible"], [1, "w-full"], [1, "bg-base-200", "m-4", "flex", "items-center", "rounded-sm", "p-4"], ["auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "px-2", "text-2xl", "font-medium"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [1, "screen-only", "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [3, "absolute", "items"], [3, "print"], [1, "opacity-30"], [1, "mb-4", 3, "diameter"]], template: function VisitorsReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "reports-options", 0);
        \u0275\u0275listener("printing", function VisitorsReportComponent_Template_reports_options_printing_0_listener($event) {
          return ctx.printing.set($event);
        })("download", function VisitorsReportComponent_Template_reports_options_download_0_listener() {
          return ctx.downloadReport();
        })("generate", function VisitorsReportComponent_Template_reports_options_generate_0_listener() {
          return ctx.generateReport();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4)(5, "div", 5);
        \u0275\u0275elementStart(6, "h2", 6);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(9, VisitorsReportComponent_Conditional_9_Template, 2, 1)(10, VisitorsReportComponent_Conditional_10_Template, 5, 4, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("loading", ctx.loading())("has_data", ctx.has_data());
        \u0275\u0275advance(4);
        \u0275\u0275property("source", ctx.logo()?.src || ctx.logo());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "APP.CONCIERGE.REPORTS_VISITORS_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 9 : 10);
      }
    }, dependencies: [
      ReportsOptionsComponent,
      ReportMetricGuideComponent,
      AuthenticatedImageDirective,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      VisitorReportOverallComponent,
      VisitorReportDailyUsageComponent,
      VisitorReportListComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=visitors-report.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorsReportComponent, [{
    type: Component,
    args: [{ selector: "[visitors-report]", template: `
        <reports-options
            (printing)="printing.set($event)"
            [loading]="loading()"
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
                        {{
                            'APP.CONCIERGE.REPORTS_VISITORS_HEADER' | translate
                        }}
                    </h2>
                </div>
            </div>
            @if (!loading()) {
                @if (total_count()) {
                    <placeos-report-metric-guide
                        [absolute]="true"
                        [items]="metric_guide"
                    />
                    <visitor-report-overall></visitor-report-overall>
                    <visitor-report-daily-usage
                        [print]="printing()"
                    ></visitor-report-daily-usage>
                    <visitor-report-list></visitor-report-list>
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
      ReportsOptionsComponent,
      ReportMetricGuideComponent,
      AuthenticatedImageDirective,
      MatProgressSpinnerModule,
      VisitorReportOverallComponent,
      VisitorReportDailyUsageComponent,
      VisitorReportListComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/visitors/visitors-report.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=visitors-report.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorsReportComponent, { className: "VisitorsReportComponent", filePath: "apps/concierge/src/app/reports/visitors/visitors-report.component.ts", lineNumber: 124 });
})();
export {
  VisitorsReportComponent
};
//# debugId=e1aa4c64-2bfa-5396-be1c-bcad377c6639
//# sourceMappingURL=visitors-report.component-ZWC55C2X.js.map
