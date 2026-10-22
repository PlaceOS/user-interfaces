import {
  differenceInBusinessDays
} from "./chunk-QZZAG2PA.js";
import {
  REMOVE_KEYS
} from "./chunk-KHXWN2DM.js";
import {
  ReportsOptionsComponent
} from "./chunk-R3FYSRB4.js";
import {
  ReportMetricGuideComponent
} from "./chunk-3SO3DV43.js";
import {
  activeReportBookings,
  formatReportPercentage,
  reportBookingStatusStats
} from "./chunk-M7D6LSL2.js";
import "./chunk-KFCUV3Z4.js";
import "./chunk-WD5GTSWS.js";
import "./chunk-B2VUZWJQ.js";
import {
  SimpleTableComponent
} from "./chunk-IA6BOKAS.js";
import "./chunk-CHALR4UF.js";
import "./chunk-TSGHYC3W.js";
import "./chunk-G2JHYSUV.js";
import {
  queryAssetGroupsExtended,
  queryAssetPurchaseOrders
} from "./chunk-4HJH7QP6.js";
import "./chunk-LBI36AI6.js";
import {
  queryBookings
} from "./chunk-FXQRAK2P.js";
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
import "./chunk-KTRJCCRD.js";
import "./chunk-OFW7WDFE.js";
import "./chunk-GQXDRDYV.js";
import "./chunk-23X2VP53.js";
import {
  TranslatePipe
} from "./chunk-N7R5EHVG.js";
import "./chunk-MCWEYL2F.js";
import "./chunk-C5SFKFXB.js";
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
  IconComponent
} from "./chunk-J53GBIJV.js";
import {
  addDays,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵpureFunction8,
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

// apps/concierge/src/app/reports/assets/assets-report.service.ts
var AssetsReportService = class _AssetsReportService {
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
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
    this._products = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_products" } : (
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
        try {
          return await queryAssetGroupsExtended({
            zones: (options.zones || [])?.join(",") || (this._settings.get("app.use_region") ? this._org.region?.id : "") || this._org.building?.id
          });
        } finally {
          this._loading.set(false);
        }
      }
    }));
    this.products = this._products.value;
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
            type: "asset-request",
            include_deleted: true,
            include_checked_out: true,
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
    this.stats = computed(
      () => this._processBookingStats(this.bookings(), this.products()),
      ...ngDevMode ? [{ debugName: "stats" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.daily_stats = computed(
      () => {
        const options = this._options();
        const products = this.products();
        const bookings = this.bookings();
        const stats = {};
        let count = 0;
        let start = startOfDay(options.start);
        const end = endOfDay(options.end);
        while (isBefore(start, end) && count < 365) {
          const date = format(start, "yyyy-MM-dd");
          stats[date] = this._processBookingStats(bookings.filter((_) => isSameDay(_.date, start)), products);
          start = addDays(start, 1);
          count++;
        }
        return stats;
      },
      ...ngDevMode ? [{ debugName: "daily_stats" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._expired_items = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_expired_items" } : (
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
        try {
          const purchase_orders = await queryAssetPurchaseOrders({});
          return purchase_orders.data.filter((order) => order.expected_service_end_date < getUnixTime(options.start || Date.now()));
        } finally {
          this._loading.set(false);
        }
      }
    }));
    this.expired_items = this._expired_items.value;
  }
  _processBookingStats(booking_list, products) {
    const active_bookings = activeReportBookings(booking_list);
    const booked_assets = active_bookings.map((_) => _.asset_ids?.length ? _.asset_ids : [_.asset_id]).flat();
    const unique_events = unique(active_bookings.map((_) => _.linked_event || _.linked_bookings[0]).filter((_) => _), "id").map((i) => new CalendarEvent(i));
    return __spreadProps(__spreadValues({
      events: unique_events,
      bookings: active_bookings,
      all_bookings: booking_list,
      products,
      booking_count: active_bookings.length,
      event_count: unique_events.length,
      total_booked_items: active_bookings.reduce((c, i) => c + i.asset_ids.length, 0)
    }, reportBookingStatusStats(booking_list)), {
      unique_items: products.filter((p) => p.assets.find((_) => booked_assets.includes(_.id))).length,
      products_booked: products.filter((p) => p.assets.find((_) => booked_assets.includes(_.id))).map((p) => ({
        name: p.name,
        count: p.assets.filter((_) => booked_assets.includes(_.id)).length
      }))
    });
  }
  generateReport() {
    this._generate.set(Date.now());
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
  setOptions(options) {
    this._options.set(__spreadValues(__spreadValues({}, this._options()), options));
  }
  static {
    this.\u0275fac = function AssetsReportService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetsReportService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetsReportService, factory: _AssetsReportService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetsReportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/reports/assets/asset-report-daily-usage.component.ts
var _c0 = (a0) => ({ key: "name", name: a0 });
var _c1 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c2 = (a0) => ({ key: "booking_count", name: a0 });
var _c3 = () => ({ key: "active_count", name: "Active" });
var _c4 = (a0) => ({ key: "cancelled_count", name: "Rejected", content: a0 });
var _c5 = (a0) => ({ key: "deleted_count", name: "Cancelled", content: a0 });
var _c6 = (a0) => ({ key: "booked_count", name: a0 });
var _c7 = (a0) => ({ key: "asset_count", name: a0 });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
function AssetReportDailyUsageComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function AssetReportDailyUsageComponent_Conditional_5_Template_button_click_0_listener() {
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
function AssetReportDailyUsageComponent_ng_template_14_Template(rf, ctx) {
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
function AssetReportDailyUsageComponent_ng_template_16_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatPercent(data_r4, row_r5.booking_count), " ");
  }
}
var TABLE_METRIC_GUIDE = [
  {
    label: "Booking count",
    description: "All asset request bookings for the product on the day, including active, rejected, and cancelled records."
  },
  {
    label: "Active",
    description: "Active asset request bookings for the product on the day."
  },
  {
    label: "Rejected / Cancelled",
    description: "Displayed as count and percentage of total product bookings for that day."
  },
  {
    label: "Total booked",
    description: "Number of booked asset IDs from active requests that belong to the product."
  },
  {
    label: "Assets available",
    description: "Total assets configured for the product."
  }
];
var AssetReportDailyUsageComponent = class _AssetReportDailyUsageComponent {
  constructor() {
    this._state = inject(AssetsReportService);
    this.print = input(
      false,
      ...ngDevMode ? [{ debugName: "print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.table_metric_guide = TABLE_METRIC_GUIDE;
    this._daily_stats = this._state.daily_stats;
    this.daily_products = computed(
      () => {
        const days = this._daily_stats();
        let list = [];
        for (const date in days) {
          const { all_bookings, bookings, products } = days[date];
          const products_list = (products || []).map((p) => {
            const all_product_bookings = (all_bookings || bookings).filter((b) => p.assets.find(({ id }) => b.asset_ids.includes(id)));
            const product_bookings = bookings.filter((b) => p.assets.find(({ id }) => b.asset_ids.includes(id)));
            return {
              name: p.name,
              date,
              booking_count: all_product_bookings.length,
              active_count: product_bookings.length,
              cancelled_count: all_product_bookings.filter((booking) => !booking.deleted && booking.status === "cancelled").length,
              deleted_count: all_product_bookings.filter((booking) => booking.deleted).length,
              booked_count: product_bookings.reduce((acc, b) => acc + b.asset_ids.filter((asset_id) => p.assets.find(({ id }) => asset_id === id)).length, 0),
              asset_count: p.assets.length
            };
          });
          list = list.concat(products_list.filter((p) => p.booking_count > 0));
        }
        return list;
      },
      ...ngDevMode ? [{ debugName: "daily_products" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.download = async () => {
      const data = this.daily_products().map((booking) => __spreadProps(__spreadValues({}, booking), {
        date: format(booking.date, "yyyy-MM-dd HH:mm"),
        cancelled_count: formatReportPercentage(booking.cancelled_count, booking.booking_count),
        deleted_count: formatReportPercentage(booking.deleted_count, booking.booking_count)
      }));
      downloadFile("report-assets-daily-usage.csv", jsonToCsv(data));
    };
    this.formatPercent = formatReportPercentage;
  }
  static {
    this.\u0275fac = function AssetReportDailyUsageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetReportDailyUsageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetReportDailyUsageComponent, selectors: [["asset-report-daily-usage"]], inputs: { print: [1, "print"] }, decls: 18, vars: 48, consts: [["date_template", ""], ["booking_percent_template", ""], [1, "border-base-200", "bg-base-100", "m-4", "overflow-hidden", "rounded-sm", "border"], [1, "border-base-200", "flex", "items-center", "border-b", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], ["title", "Table column calculations", 3, "items", "inline"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"]], template: function AssetReportDailyUsageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h3", 4);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, AssetReportDailyUsageComponent_Conditional_5_Template, 4, 3, "button", 5);
        \u0275\u0275element(6, "placeos-report-metric-guide", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "simple-table", 7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275template(14, AssetReportDailyUsageComponent_ng_template_14_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, AssetReportDailyUsageComponent_ng_template_16_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const date_template_r6 = \u0275\u0275reference(15);
        const booking_percent_template_r7 = \u0275\u0275reference(17);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "APP.CONCIERGE.REPORTS_DAILY_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.print() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.table_metric_guide)("inline", true);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.daily_products())("columns", \u0275\u0275pureFunction8(39, _c8, \u0275\u0275pureFunction1(23, _c0, \u0275\u0275pipeBind1(8, 11, "FORM.NAME")), \u0275\u0275pureFunction2(25, _c1, \u0275\u0275pipeBind1(9, 13, "FORM.DATE"), date_template_r6), \u0275\u0275pureFunction1(28, _c2, \u0275\u0275pipeBind1(10, 15, "APP.CONCIERGE.REPORTS_BOOKING_COUNT_HEADER")), \u0275\u0275pureFunction0(30, _c3), \u0275\u0275pureFunction1(31, _c4, booking_percent_template_r7), \u0275\u0275pureFunction1(33, _c5, booking_percent_template_r7), \u0275\u0275pureFunction1(35, _c6, \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.REPORTS_TOTAL_BOOKED")), \u0275\u0275pureFunction1(37, _c7, \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.REPORTS_ASSETS_AVAILABLE"))))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(13, 21, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetReportDailyUsageComponent, [{
    type: Component,
    args: [{ selector: "asset-report-daily-usage", template: `
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
                [data]="daily_products()"
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                    },
                    {
                        key: 'booking_count',
                        name:
                            'APP.CONCIERGE.REPORTS_BOOKING_COUNT_HEADER'
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
                        name: 'APP.CONCIERGE.REPORTS_TOTAL_BOOKED' | translate,
                    },
                    {
                        key: 'asset_count',
                        name:
                            'APP.CONCIERGE.REPORTS_ASSETS_AVAILABLE'
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
                    {{ formatPercent(data, row.booking_count) }}
                </div>
            </ng-template>
        </div>
    `, imports: [
      CommonModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetReportDailyUsageComponent, { className: "AssetReportDailyUsageComponent", filePath: "apps/concierge/src/app/reports/assets/asset-report-daily-usage.component.ts", lineNumber: 149 });
})();

// apps/concierge/src/app/reports/assets/asset-report-expired-items.component.ts
var _c02 = (a0) => ({ key: "purchase_order_number", name: a0 });
var _c12 = (a0) => ({ key: "invoice_number", name: a0 });
var _c22 = (a0, a1) => ({ key: "purchase_date", name: a0, content: a1 });
var _c32 = (a0, a1) => ({ key: "expected_service_start_date", name: a0, content: a1 });
var _c42 = (a0, a1) => ({ key: "expected_service_end_date", name: a0, content: a1 });
var _c52 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function AssetReportExpiredItemsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function AssetReportExpiredItemsComponent_Conditional_5_Template_button_click_0_listener() {
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
function AssetReportExpiredItemsComponent_ng_template_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.DATE_EMPTY"));
  }
}
function AssetReportExpiredItemsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, AssetReportExpiredItemsComponent_ng_template_14_Conditional_1_Template, 3, 3, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r3 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3 ? \u0275\u0275pipeBind2(3, 2, data_r3 * 1e3, "mediumDate") : "", " ");
  }
}
var TABLE_METRIC_GUIDE2 = [
  {
    label: "Purchase / invoice numbers",
    description: "Identifiers from the asset purchase order returned by the assets service."
  },
  {
    label: "Purchase date",
    description: "Purchase order purchase date, shown when available."
  },
  {
    label: "Service start / end",
    description: "Expected service dates from the purchase order. Rows are included when the expected service end date is before the report start date."
  }
];
var AssetReportExpiredItemsComponent = class _AssetReportExpiredItemsComponent {
  constructor() {
    this._state = inject(AssetsReportService);
    this.print = input(
      false,
      ...ngDevMode ? [{ debugName: "print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.table_metric_guide = TABLE_METRIC_GUIDE2;
    this.expired_items = this._state.expired_items;
    this.download = async () => {
      downloadFile("report-assets-expired-items.csv", jsonToCsv(this.expired_items()));
    };
  }
  static {
    this.\u0275fac = function AssetReportExpiredItemsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetReportExpiredItemsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetReportExpiredItemsComponent, selectors: [["asset-report-expired-items"]], inputs: { print: [1, "print"] }, decls: 16, vars: 42, consts: [["date_template", ""], [1, "border-base-200", "bg-base-100", "m-4", "overflow-hidden", "rounded-sm", "border"], [1, "border-base-200", "flex", "items-center", "border-b", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], ["title", "Table column calculations", 3, "items", "inline"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"], [1, "opacity-30"]], template: function AssetReportExpiredItemsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, AssetReportExpiredItemsComponent_Conditional_5_Template, 4, 3, "button", 4);
        \u0275\u0275element(6, "placeos-report-metric-guide", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "simple-table", 6);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275template(14, AssetReportExpiredItemsComponent_ng_template_14_Template, 4, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const date_template_r4 = \u0275\u0275reference(15);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "APP.CONCIERGE.REPORTS_ASSETS_EXPIRED_PO_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.print() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.table_metric_guide)("inline", true);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.expired_items())("columns", \u0275\u0275pureFunction5(36, _c52, \u0275\u0275pureFunction1(23, _c02, \u0275\u0275pipeBind1(8, 11, "APP.CONCIERGE.ASSETS_PURCHASE_NUMBER")), \u0275\u0275pureFunction1(25, _c12, \u0275\u0275pipeBind1(9, 13, "APP.CONCIERGE.ASSETS_PURCHASE_INVOICE")), \u0275\u0275pureFunction2(27, _c22, \u0275\u0275pipeBind1(10, 15, "APP.CONCIERGE.ASSETS_PURCHASE_DATE"), date_template_r4), \u0275\u0275pureFunction2(30, _c32, \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.ASSETS_PURCHASE_START"), date_template_r4), \u0275\u0275pureFunction2(33, _c42, \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.ASSETS_PURCHASE_END"), date_template_r4)))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(13, 21, "APP.CONCIERGE.REPORTS_ASSETS_EXPIRED_PO_EMPTY"));
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetReportExpiredItemsComponent, [{
    type: Component,
    args: [{ selector: "asset-report-expired-items", template: `
        <div
            class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{
                        'APP.CONCIERGE.REPORTS_ASSETS_EXPIRED_PO_HEADER'
                            | translate
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
                [data]="expired_items()"
                [columns]="[
                    {
                        key: 'purchase_order_number',
                        name:
                            'APP.CONCIERGE.ASSETS_PURCHASE_NUMBER' | translate,
                    },
                    {
                        key: 'invoice_number',
                        name:
                            'APP.CONCIERGE.ASSETS_PURCHASE_INVOICE' | translate,
                    },
                    {
                        key: 'purchase_date',
                        name: 'APP.CONCIERGE.ASSETS_PURCHASE_DATE' | translate,
                        content: date_template,
                    },
                    {
                        key: 'expected_service_start_date',
                        name: 'APP.CONCIERGE.ASSETS_PURCHASE_START' | translate,
                        content: date_template,
                    },
                    {
                        key: 'expected_service_end_date',
                        name: 'APP.CONCIERGE.ASSETS_PURCHASE_END' | translate,
                        content: date_template,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_ASSETS_EXPIRED_PO_EMPTY' | translate
                "
            ></simple-table>
            <ng-template #date_template let-data="data">
                <div class="p-4">
                    @if (!data) {
                        <span class="opacity-30">{{
                            'COMMON.DATE_EMPTY' | translate
                        }}</span>
                    }
                    {{ data ? (data * 1000 | date: 'mediumDate') : '' }}
                </div>
            </ng-template>
        </div>
    `, imports: [
      CommonModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetReportExpiredItemsComponent, { className: "AssetReportExpiredItemsComponent", filePath: "apps/concierge/src/app/reports/assets/asset-report-expired-items.component.ts", lineNumber: 125 });
})();

// apps/concierge/src/app/reports/assets/asset-report-overall.component.ts
var AssetReportOverallComponent = class _AssetReportOverallComponent {
  constructor() {
    this._state = inject(AssetsReportService);
    this._stats = this._state.stats;
    this._options = this._state.options;
    this.total_count = computed(
      () => this._stats().total_count || this._stats().booking_count || 0,
      ...ngDevMode ? [{ debugName: "total_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_count = computed(
      () => this._stats().active_count || this._stats().booking_count || 0,
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
        const { events } = this._stats();
        return formatDuration({
          minutes: events.reduce((count, event) => count + event.duration, 0) / (events.length || 1)
        });
      },
      ...ngDevMode ? [{ debugName: "avg_length" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function AssetReportOverallComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetReportOverallComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetReportOverallComponent, selectors: [["asset-report-overall"]], decls: 34, vars: 15, consts: [[1, "border-base-200", "bg-base-100", "m-4", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border", "p-4"], [1, "flex", "flex-1", "flex-col", "items-center"], [1, "text-sm"], [1, "text-2xl"]], template: function AssetReportOverallComponent_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetReportOverallComponent, [{
    type: Component,
    args: [{ selector: "asset-report-overall", template: `
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetReportOverallComponent, { className: "AssetReportOverallComponent", filePath: "apps/concierge/src/app/reports/assets/asset-report-overall.component.ts", lineNumber: 48 });
})();

// apps/concierge/src/app/reports/assets/asset-report-product-usage.component.ts
var _c03 = (a0) => ({ key: "name", name: a0 });
var _c13 = (a0) => ({ key: "booking_count", name: a0 });
var _c23 = (a0) => ({ key: "booked_count", name: a0 });
var _c33 = (a0) => ({ key: "asset_count", name: a0 });
var _c43 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function AssetReportProductUsageComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function AssetReportProductUsageComponent_Conditional_5_Template_button_click_0_listener() {
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
    description: "Active asset request bookings that include at least one asset from the product."
  },
  {
    label: "Assets booked",
    description: "Number of booked asset IDs across active requests that belong to the product."
  },
  {
    label: "Assets available",
    description: "Total assets configured for the product."
  }
];
var AssetReportProductUsageComponent = class _AssetReportProductUsageComponent {
  constructor() {
    this._state = inject(AssetsReportService);
    this.print = input(
      false,
      ...ngDevMode ? [{ debugName: "print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.table_metric_guide = TABLE_METRIC_GUIDE3;
    this._stats = this._state.stats;
    this.products = computed(
      () => {
        const { bookings, products } = this._stats();
        return products.map((p) => {
          const product_bookings = bookings.filter((b) => p.assets.find(({ id }) => b.asset_ids.includes(id)));
          return {
            name: p.name,
            booking_count: product_bookings.length,
            booked_count: product_bookings.reduce((acc, b) => acc + b.asset_ids.filter((asset_id) => p.assets.find(({ id }) => asset_id === id)).length, 0),
            asset_count: p.assets.length
          };
        }).filter((p) => p.booking_count > 0);
      },
      ...ngDevMode ? [{ debugName: "products" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.download = async () => {
      downloadFile("report-assets-product-usage.csv", jsonToCsv(this.products()));
    };
  }
  static {
    this.\u0275fac = function AssetReportProductUsageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetReportProductUsageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetReportProductUsageComponent, selectors: [["asset-report-product-usage"]], inputs: { print: [1, "print"] }, decls: 13, vars: 34, consts: [[1, "border-base-200", "bg-base-100", "m-4", "overflow-hidden", "rounded-sm", "border"], [1, "border-base-200", "flex", "items-center", "border-b", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], ["title", "Table column calculations", 3, "items", "inline"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"]], template: function AssetReportProductUsageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, AssetReportProductUsageComponent_Conditional_5_Template, 4, 3, "button", 3);
        \u0275\u0275element(6, "placeos-report-metric-guide", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "simple-table", 5);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "APP.CONCIERGE.REPORTS_ASSETS_PRDOUCTS_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.print() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.table_metric_guide)("inline", true);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.products())("columns", \u0275\u0275pureFunction4(29, _c43, \u0275\u0275pureFunction1(21, _c03, \u0275\u0275pipeBind1(8, 11, "FORM.NAME")), \u0275\u0275pureFunction1(23, _c13, \u0275\u0275pipeBind1(9, 13, "RESOURCE.BOOKINGS")), \u0275\u0275pureFunction1(25, _c23, \u0275\u0275pipeBind1(10, 15, "APP.CONCIERGE.REPORTS_ASSETS_BOOKED")), \u0275\u0275pureFunction1(27, _c33, \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.REPORTS_ASSETS_AVAILABLE"))))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetReportProductUsageComponent, [{
    type: Component,
    args: [{ selector: "asset-report-product-usage", template: `
        <div
            class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{
                        'APP.CONCIERGE.REPORTS_ASSETS_PRDOUCTS_HEADER'
                            | translate
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
                [data]="products()"
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'booking_count',
                        name: 'RESOURCE.BOOKINGS' | translate,
                    },
                    {
                        key: 'booked_count',
                        name: 'APP.CONCIERGE.REPORTS_ASSETS_BOOKED' | translate,
                    },
                    {
                        key: 'asset_count',
                        name:
                            'APP.CONCIERGE.REPORTS_ASSETS_AVAILABLE'
                            | translate,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetReportProductUsageComponent, { className: "AssetReportProductUsageComponent", filePath: "apps/concierge/src/app/reports/assets/asset-report-product-usage.component.ts", lineNumber: 103 });
})();

// apps/concierge/src/app/reports/assets/asset-report-users.component.ts
var _c04 = (a0) => ({ key: "name", name: a0 });
var _c14 = (a0) => ({ key: "booking_count", name: a0 });
var _c24 = (a0) => ({ key: "asset_count", name: a0 });
var _c34 = (a0) => ({ key: "asset_types", name: a0 });
var _c44 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function AssetReportUsersComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function AssetReportUsersComponent_Conditional_5_Template_button_click_0_listener() {
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
var TABLE_METRIC_GUIDE4 = [
  {
    label: "Bookings",
    description: "Linked events hosted by the user in the selected asset report period."
  },
  {
    label: "Assets booked",
    description: "Distinct asset IDs from active asset request bookings made for the user."
  },
  {
    label: "Asset types",
    description: "Distinct product names matched from the user's booked asset IDs."
  }
];
var AssetReportUsersComponent = class _AssetReportUsersComponent {
  constructor() {
    this._state = inject(AssetsReportService);
    this.print = input(
      false,
      ...ngDevMode ? [{ debugName: "print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.table_metric_guide = TABLE_METRIC_GUIDE4;
    this._stats = this._state.stats;
    this.users = computed(
      () => {
        const { events, bookings, products } = this._stats();
        const data = unique(events, "host").map((user_event) => {
          const host_bookings = bookings.filter((b) => b.booked_by_email === user_event.host);
          const booked_assets = unique(host_bookings.map((_) => _.asset_ids).flat());
          const booked_products = unique(booked_assets.map((i) => products.find((p) => p.assets.find((_) => _.id === i))?.name));
          return {
            name: user_event.organiser?.name || user_event.organiser?.email || user_event.host,
            booking_count: events.filter((event) => event.host === user_event.host).length,
            asset_count: booked_assets.length,
            asset_types: booked_products.length || 0
          };
        });
        return data;
      },
      ...ngDevMode ? [{ debugName: "users" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.download = async () => {
      downloadFile("report-assets-users.csv", jsonToCsv(this.users()));
    };
  }
  static {
    this.\u0275fac = function AssetReportUsersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetReportUsersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetReportUsersComponent, selectors: [["asset-report-users"]], inputs: { print: [1, "print"] }, decls: 13, vars: 34, consts: [[1, "border-base-200", "bg-base-100", "m-4", "overflow-hidden", "rounded-sm", "border"], [1, "border-base-200", "flex", "items-center", "border-b", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], ["title", "Table column calculations", 3, "items", "inline"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"]], template: function AssetReportUsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, AssetReportUsersComponent_Conditional_5_Template, 4, 3, "button", 3);
        \u0275\u0275element(6, "placeos-report-metric-guide", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "simple-table", 5);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "APP.CONCIERGE.REPORTS_ASSETS_REQUESTEES"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.print() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.table_metric_guide)("inline", true);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.users())("columns", \u0275\u0275pureFunction4(29, _c44, \u0275\u0275pureFunction1(21, _c04, \u0275\u0275pipeBind1(8, 11, "FORM.NAME")), \u0275\u0275pureFunction1(23, _c14, \u0275\u0275pipeBind1(9, 13, "RESOURCE.BOOKINGS")), \u0275\u0275pureFunction1(25, _c24, \u0275\u0275pipeBind1(10, 15, "APP.CONCIERGE.REPORTS_ASSETS_BOOKED")), \u0275\u0275pureFunction1(27, _c34, \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.REPORTS_ASSETS_TYPES"))))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetReportUsersComponent, [{
    type: Component,
    args: [{ selector: "asset-report-users", template: `
        <div
            class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_ASSETS_REQUESTEES' | translate }}
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
                [data]="users()"
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'booking_count',
                        name: 'RESOURCE.BOOKINGS' | translate,
                    },
                    {
                        key: 'asset_count',
                        name: 'APP.CONCIERGE.REPORTS_ASSETS_BOOKED' | translate,
                    },
                    {
                        key: 'asset_types',
                        name: 'APP.CONCIERGE.REPORTS_ASSETS_TYPES' | translate,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetReportUsersComponent, { className: "AssetReportUsersComponent", filePath: "apps/concierge/src/app/reports/assets/asset-report-users.component.ts", lineNumber: 99 });
})();

// apps/concierge/src/app/reports/assets/assets-report.component.ts
function AssetsReportComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "placeos-report-metric-guide", 9)(1, "asset-report-overall")(2, "asset-report-daily-usage", 10)(3, "asset-report-product-usage", 10)(4, "asset-report-users", 10)(5, "asset-report-expired-items", 10);
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
function AssetsReportComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
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
function AssetsReportComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AssetsReportComponent_Conditional_9_Conditional_0_Template, 6, 6)(1, AssetsReportComponent_Conditional_9_Conditional_1_Template, 4, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.total_count() ? 0 : 1);
  }
}
function AssetsReportComponent_Conditional_10_Template(rf, ctx) {
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
    description: "All asset request bookings returned for the selected dates and zones, including active, rejected, and cancelled records."
  },
  {
    label: "Active / Rejected / Cancelled",
    description: "Active excludes cancelled and rejected bookings. Rejected uses bookings with cancelled or rejected status. Cancelled uses bookings flagged as cancelled."
  },
  {
    label: "Average length",
    description: "Average duration of linked events for the active asset requests."
  },
  {
    label: "Total and unique booked items",
    description: "Total booked items sums asset IDs on active requests. Unique items counts product groups that contain at least one booked asset."
  },
  {
    label: "Expired items",
    description: "Purchase orders with expected service end dates before the selected report start date."
  }
];
var AssetsReportComponent = class _AssetsReportComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(AssetsReportService);
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
    this._stats = this._state.stats;
    this.total_count = computed(
      () => this._stats()?.total_booked_items || 0,
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
      let \u0275AssetsReportComponent_BaseFactory;
      return function AssetsReportComponent_Factory(__ngFactoryType__) {
        return (\u0275AssetsReportComponent_BaseFactory || (\u0275AssetsReportComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AssetsReportComponent)))(__ngFactoryType__ || _AssetsReportComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetsReportComponent, selectors: [["", "report-assets", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 7, consts: [[3, "printing", "download", "generate", "loading", "has_data"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "print:h-auto", "print:overflow-visible"], [1, "w-full"], [1, "bg-base-200", "m-4", "flex", "items-center", "rounded-sm", "p-4"], ["auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "px-2", "text-2xl", "font-medium"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [1, "screen-only", "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [3, "absolute", "items"], [3, "print"], [1, "opacity-30"], [1, "mb-4", 3, "diameter"]], template: function AssetsReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "reports-options", 0);
        \u0275\u0275listener("printing", function AssetsReportComponent_Template_reports_options_printing_0_listener($event) {
          return ctx.printing.set($event);
        })("download", function AssetsReportComponent_Template_reports_options_download_0_listener() {
          return ctx.downloadReport();
        })("generate", function AssetsReportComponent_Template_reports_options_generate_0_listener() {
          return ctx.generateReport();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4)(5, "div", 5);
        \u0275\u0275elementStart(6, "h2", 6);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(9, AssetsReportComponent_Conditional_9_Template, 2, 1)(10, AssetsReportComponent_Conditional_10_Template, 5, 4, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("loading", ctx.loading())("has_data", ctx.has_data());
        \u0275\u0275advance(4);
        \u0275\u0275property("source", ctx.logo()?.src || ctx.logo());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "APP.CONCIERGE.REPORTS_ASSETS_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 9 : 10);
      }
    }, dependencies: [
      MatProgressSpinnerModule,
      MatProgressSpinner,
      AuthenticatedImageDirective,
      ReportsOptionsComponent,
      ReportMetricGuideComponent,
      AssetReportDailyUsageComponent,
      AssetReportExpiredItemsComponent,
      AssetReportOverallComponent,
      AssetReportProductUsageComponent,
      AssetReportUsersComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=assets-report.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetsReportComponent, [{
    type: Component,
    args: [{ selector: "[report-assets]", template: `
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
                        {{ 'APP.CONCIERGE.REPORTS_ASSETS_HEADER' | translate }}
                    </h2>
                </div>
            </div>
            @if (!loading()) {
                @if (total_count()) {
                    <placeos-report-metric-guide
                        [absolute]="true"
                        [items]="metric_guide"
                    />
                    <asset-report-overall></asset-report-overall>
                    <asset-report-daily-usage
                        [print]="printing()"
                    ></asset-report-daily-usage>
                    <asset-report-product-usage
                        [print]="printing()"
                    ></asset-report-product-usage>
                    <asset-report-users
                        [print]="printing()"
                    ></asset-report-users>
                    <asset-report-expired-items
                        [print]="printing()"
                    ></asset-report-expired-items>
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
      AuthenticatedImageDirective,
      ReportsOptionsComponent,
      ReportMetricGuideComponent,
      AssetReportDailyUsageComponent,
      AssetReportExpiredItemsComponent,
      AssetReportOverallComponent,
      AssetReportProductUsageComponent,
      AssetReportUsersComponent
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/assets/assets-report.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=assets-report.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetsReportComponent, { className: "AssetsReportComponent", filePath: "apps/concierge/src/app/reports/assets/assets-report.component.ts", lineNumber: 140 });
})();
export {
  AssetsReportComponent
};
//# debugId=3ece664b-ad47-5d87-a3d4-6bf7726585be
//# sourceMappingURL=assets-report.component-HG2YZDB4.js.map
