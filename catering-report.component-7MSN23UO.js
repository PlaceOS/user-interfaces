import {
  ReportsStateService
} from "./chunk-I6LAZD7I.js";
import {
  ReportsOptionsComponent
} from "./chunk-UAC4RSPK.js";
import {
  ReportMetricGuideComponent
} from "./chunk-TZLZ4PRG.js";
import "./chunk-M7D6LSL2.js";
import "./chunk-LCHSZWKM.js";
import "./chunk-JNHYREVF.js";
import "./chunk-ULYE3EO5.js";
import {
  SimpleTableComponent
} from "./chunk-RILX3QL7.js";
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
  CalendarEvent,
  CateringOrder,
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
  jsonToCsv,
  startOfDay
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
  CurrencyPipe,
  DatePipe,
  Injectable,
  Input,
  computed,
  effect,
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
  ɵɵdefineInjectable,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction6,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QAVCSYNX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/reports/catering/catering-report-state.service.ts
var CateringReportStateService = class _CateringReportStateService {
  constructor() {
    this._reports = inject(ReportsStateService);
    this.catering_orders = computed(
      () => {
        const { start, end } = this._reports.options();
        const list = this._reports.bookings();
        const start_date = startOfDay(start).valueOf();
        const end_date = endOfDay(end).valueOf();
        const orders = flatten(list.map((_) => _ instanceof CalendarEvent ? _.valid_catering || [] : [
          new CateringOrder(__spreadProps(__spreadValues({}, _.extension_data.details), {
            event: _.linked_event
          }))
        ]));
        return orders.filter((_) => _.deliver_at_time >= start_date && _.deliver_at_time < end_date && _.status !== "cancelled").sort((a, b) => a.event?.date - b.event?.date);
      },
      ...ngDevMode ? [{ debugName: "catering_orders" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.catering_items = computed(
      () => {
        const orders = this.catering_orders();
        const items = [];
        for (const order of orders) {
          for (const item of order?.items || []) {
            const existing = items.find((_) => item.custom_id === _.custom_id);
            if (existing) {
              existing.quantity += item.quantity;
            } else {
              items.push(item);
            }
          }
        }
        return items.sort((a, b) => b.quantity - a.quantity);
      },
      ...ngDevMode ? [{ debugName: "catering_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.stats = computed(
      () => {
        const orders = this.catering_orders();
        const items = this.catering_items();
        const total_cost = orders.reduce((c, i) => c + i.total_cost, 0);
        return {
          order_count: orders.length,
          unique_items: items.length,
          item_count: orders.reduce((c, i) => c + i.item_count, 0),
          total_cost,
          avg_cost: total_cost / orders.length
        };
      },
      ...ngDevMode ? [{ debugName: "stats" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async downloadOrders() {
    const orders = this.catering_orders();
    const data = orders.map((_) => __spreadValues({}, _));
    for (const bkn of data) {
      bkn.date = format(bkn._time, "yyyy-MM-dd HH:mm");
      delete bkn._time;
    }
    const csv_data = jsonToCsv(data, "	");
    return downloadFile("catering-orders.tsv", csv_data);
  }
  static {
    this.\u0275fac = function CateringReportStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringReportStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CateringReportStateService, factory: _CateringReportStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringReportStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/reports/catering/catering-report-items.component.ts
var _c0 = (a0) => ({ key: "name", name: a0 });
var _c1 = (a0, a1) => ({ key: "options", name: a0, content: a1 });
var _c2 = (a0) => ({ key: "caterer", name: a0 });
var _c3 = (a0) => ({ key: "quantity", name: a0 });
var _c4 = (a0, a1) => ({ key: "unit_price", name: a0, content: a1 });
var _c5 = (a0, a1) => ({ key: "total_cost", name: a0, content: a1 });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
var _c7 = (a0) => ({ count: a0 });
function CateringReportItemsComponent_ng_template_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = \u0275\u0275nextContext().data;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1.options(data_r1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "COMMON.OPTIONS", \u0275\u0275pureFunction1(5, _c7, data_r1?.length || 0)), " ");
  }
}
function CateringReportItemsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, CateringReportItemsComponent_ng_template_14_Conditional_1_Template, 3, 7, "span", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r1.length ? 1 : -1);
  }
}
function CateringReportItemsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, (data_r3 || 0) / 100, ctx_r1.code));
  }
}
var TABLE_METRIC_GUIDE = [
  {
    label: "Options",
    description: "Number of configured options on the catering item; hover shows option names."
  },
  {
    label: "Quantity",
    description: "Combined item quantity across all non-cancelled catering orders."
  },
  {
    label: "Item price",
    description: "Unit price converted from cents and displayed in the organisation currency."
  },
  {
    label: "Total cost",
    description: "Item total cost converted from cents and displayed in the organisation currency."
  }
];
var CateringReportItemsComponent = class _CateringReportItemsComponent {
  constructor() {
    this._report = inject(CateringReportStateService);
    this._org = inject(OrganisationService);
    this.print = input(
      false,
      ...ngDevMode ? [{ debugName: "print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.table_metric_guide = TABLE_METRIC_GUIDE;
    this.items = this._report.catering_items;
  }
  get code() {
    return this._org.currency_code;
  }
  options(opts) {
    return opts.map((_) => _.name).join("\n");
  }
  static {
    this.\u0275fac = function CateringReportItemsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringReportItemsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringReportItemsComponent, selectors: [["catering-report-items"]], inputs: { print: [1, "print"] }, decls: 18, vars: 46, consts: [["option_template", ""], ["cost_template", ""], [1, "border-base-200", "bg-base-100", "mx-auto", "my-2", "w-5xl", "max-w-[calc(100%-2rem)]", "overflow-hidden", "rounded-sm", "border"], [1, "border-base-200", "flex", "items-center", "justify-between", "border-b", "px-4"], [1, "py-2", "text-xl", "font-medium"], ["title", "Table column calculations", 3, "items", "inline"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "page_size", "empty_message", "sortable"], [1, "p-4"], [1, "bg-base-200", "rounded-sm", "px-2", "py-1", "text-xs", 3, "matTooltip"]], template: function CateringReportItemsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h2", 4);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "placeos-report-metric-guide", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "simple-table", 6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275template(14, CateringReportItemsComponent_ng_template_14_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, CateringReportItemsComponent_ng_template_16_Template, 3, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const option_template_r4 = \u0275\u0275reference(15);
        const cost_template_r5 = \u0275\u0275reference(17);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 8, "APP.CONCIERGE.REPORTS_CATERING_ITEMS_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("items", ctx.table_metric_guide)("inline", true);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.items())("columns", \u0275\u0275pureFunction6(39, _c6, \u0275\u0275pureFunction1(24, _c0, \u0275\u0275pipeBind1(7, 10, "FORM.NAME")), \u0275\u0275pureFunction2(26, _c1, \u0275\u0275pipeBind1(8, 12, "COMMON.OPTIONS"), option_template_r4), \u0275\u0275pureFunction1(29, _c2, \u0275\u0275pipeBind1(9, 14, "CATERING.CATERER")), \u0275\u0275pureFunction1(31, _c3, \u0275\u0275pipeBind1(10, 16, "CATERING.QUANTITY")), \u0275\u0275pureFunction2(33, _c4, \u0275\u0275pipeBind1(11, 18, "COMMON.ITEM_PRICE"), cost_template_r5), \u0275\u0275pureFunction2(36, _c5, \u0275\u0275pipeBind1(12, 20, "CATERING.TOTAL_COST"), cost_template_r5)))("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(13, 22, "APP.CONCIERGE.REPORTS_CATERING_ORDERS_EMPTY"))("sortable", true);
      }
    }, dependencies: [
      CommonModule,
      SimpleTableComponent,
      MatTooltipModule,
      MatTooltip,
      ReportMetricGuideComponent,
      CurrencyPipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringReportItemsComponent, [{
    type: Component,
    args: [{ selector: "catering-report-items", template: `
        <div
            class="border-base-200 bg-base-100 mx-auto my-2 w-5xl max-w-[calc(100%-2rem)] overflow-hidden rounded-sm border"
        >
            <div
                class="border-base-200 flex items-center justify-between border-b px-4"
            >
                <h2 class="py-2 text-xl font-medium">
                    {{
                        'APP.CONCIERGE.REPORTS_CATERING_ITEMS_HEADER'
                            | translate
                    }}
                </h2>
                <placeos-report-metric-guide
                    title="Table column calculations"
                    [items]="table_metric_guide"
                    [inline]="true"
                />
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="items()"
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'options',
                        name: 'COMMON.OPTIONS' | translate,
                        content: option_template,
                    },
                    {
                        key: 'caterer',
                        name: 'CATERING.CATERER' | translate,
                    },
                    {
                        key: 'quantity',
                        name: 'CATERING.QUANTITY' | translate,
                    },
                    {
                        key: 'unit_price',
                        name: 'COMMON.ITEM_PRICE' | translate,
                        content: cost_template,
                    },
                    {
                        key: 'total_cost',
                        name: 'CATERING.TOTAL_COST' | translate,
                        content: cost_template,
                    },
                ]"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_CATERING_ORDERS_EMPTY' | translate
                "
                [sortable]="true"
            ></simple-table>
            <ng-template #option_template let-data="data">
                <div class="p-4">
                    @if (data.length) {
                        <span
                            class="bg-base-200 rounded-sm px-2 py-1 text-xs"
                            [matTooltip]="options(data)"
                        >
                            {{
                                'COMMON.OPTIONS'
                                    | translate: { count: data?.length || 0 }
                            }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #cost_template let-data="data">
                <div class="p-4">{{ (data || 0) / 100 | currency: code }}</div>
            </ng-template>
        </div>
    `, imports: [
      CommonModule,
      SimpleTableComponent,
      TranslatePipe,
      MatTooltipModule,
      ReportMetricGuideComponent
    ] }]
  }], null, { print: [{ type: Input, args: [{ isSignal: true, alias: "print", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringReportItemsComponent, { className: "CateringReportItemsComponent", filePath: "apps/concierge/src/app/reports/catering/catering-report-items.component.ts", lineNumber: 120 });
})();

// apps/concierge/src/app/reports/catering/catering-report-orders.component.ts
var _c02 = (a0, a1) => ({ key: "deliver_at", name: a0, content: a1 });
var _c12 = (a0) => ({ key: "item_count", name: a0 });
var _c22 = (a0, a1) => ({ key: "total_cost", name: a0, content: a1 });
var _c32 = (a0, a1, a2) => [a0, a1, a2];
function CateringReportOrdersComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, data_r1), " at ", \u0275\u0275pipeBind2(3, 4, data_r1, ctx_r1.time_format), " ");
  }
}
function CateringReportOrdersComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, data_r3 / 100, ctx_r1.code), " ");
  }
}
var TABLE_METRIC_GUIDE2 = [
  {
    label: "Time",
    description: "Order delivery time from the catering order deliver-at timestamp."
  },
  {
    label: "Items",
    description: "Item count recorded on the catering order."
  },
  {
    label: "Total cost",
    description: "Order total cost converted from cents and displayed in the organisation currency."
  }
];
var CateringReportOrdersComponent = class _CateringReportOrdersComponent {
  constructor() {
    this._report = inject(CateringReportStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.print = input(
      false,
      ...ngDevMode ? [{ debugName: "print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.table_metric_guide = TABLE_METRIC_GUIDE2;
    this.orders = this._report.catering_orders;
    this.download = () => this._report.downloadOrders();
  }
  get code() {
    return this._org.currency_code;
  }
  get time_format() {
    return this._settings.time_format;
  }
  static {
    this.\u0275fac = function CateringReportOrdersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringReportOrdersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringReportOrdersComponent, selectors: [["catering-report-orders"]], inputs: { print: [1, "print"] }, decls: 20, vars: 36, consts: [["date_template", ""], ["cost_template", ""], [1, "border-base-200", "bg-base-100", "mx-auto", "my-2", "w-5xl", "max-w-[calc(100%-2rem)]", "overflow-hidden", "rounded-sm", "border"], [1, "border-base-200", "flex", "items-center", "justify-between", "border-b", "px-4"], [1, "py-2", "text-xl", "font-medium"], ["icon", "", "default", "", "matRipple", "", 1, "print:hidden", 3, "click", "matTooltip"], ["title", "Table column calculations", 3, "items", "inline"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], [1, "p-4"]], template: function CateringReportOrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h2", 4);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275listener("click", function CateringReportOrdersComponent_Template_button_click_5_listener() {
          return ctx.download();
        });
        \u0275\u0275elementStart(8, "icon");
        \u0275\u0275text(9, "download");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(10, "placeos-report-metric-guide", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "simple-table", 7);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275template(16, CateringReportOrdersComponent_ng_template_16_Template, 4, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(18, CateringReportOrdersComponent_ng_template_18_Template, 3, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const date_template_r4 = \u0275\u0275reference(17);
        const cost_template_r5 = \u0275\u0275reference(19);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 10, "APP.CONCIERGE.REPORTS_CATERING_ORDERS_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 12, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 14, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.table_metric_guide)("inline", true);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.orders())("columns", \u0275\u0275pureFunction3(32, _c32, \u0275\u0275pureFunction2(24, _c02, \u0275\u0275pipeBind1(12, 16, "APP.CONCIERGE.ASSETS_REQUESTS_TIME"), date_template_r4), \u0275\u0275pureFunction1(27, _c12, \u0275\u0275pipeBind1(13, 18, "APP.CONCIERGE.REPORTS_CATERING_ITEMS")), \u0275\u0275pureFunction2(29, _c22, \u0275\u0275pipeBind1(14, 20, "CATERING.TOTAL_COST"), cost_template_r5)))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(15, 22, "APP.CONCIERGE.REPORTS_CATERING_ORDERS_EMPTY"));
      }
    }, dependencies: [
      CommonModule,
      SimpleTableComponent,
      MatTooltipModule,
      MatTooltip,
      MatRippleModule,
      MatRipple,
      IconComponent,
      ReportMetricGuideComponent,
      CurrencyPipe,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringReportOrdersComponent, [{
    type: Component,
    args: [{ selector: "catering-report-orders", template: `
        <div
            class="border-base-200 bg-base-100 mx-auto my-2 w-5xl max-w-[calc(100%-2rem)] overflow-hidden rounded-sm border"
        >
            <div
                class="border-base-200 flex items-center justify-between border-b px-4"
            >
                <h2 class="py-2 text-xl font-medium">
                    {{
                        'APP.CONCIERGE.REPORTS_CATERING_ORDERS_HEADER'
                            | translate
                    }}
                </h2>
                <button
                    icon
                    default
                    matRipple
                    (click)="download()"
                    class="print:hidden"
                    [matTooltip]="
                        'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                    "
                    [attr.aria-label]="
                        'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                    "
                >
                    <icon>download</icon>
                </button>
                <placeos-report-metric-guide
                    title="Table column calculations"
                    [items]="table_metric_guide"
                    [inline]="true"
                />
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="orders()"
                [columns]="[
                    {
                        key: 'deliver_at',
                        name: 'APP.CONCIERGE.ASSETS_REQUESTS_TIME' | translate,
                        content: date_template,
                    },
                    {
                        key: 'item_count',
                        name:
                            'APP.CONCIERGE.REPORTS_CATERING_ITEMS' | translate,
                    },
                    {
                        key: 'total_cost',
                        name: 'CATERING.TOTAL_COST' | translate,
                        content: cost_template,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_CATERING_ORDERS_EMPTY' | translate
                "
            ></simple-table>

            <ng-template #date_template let-data="data">
                <div class="p-4">
                    {{ data | date }} at {{ data | date: time_format }}
                </div>
            </ng-template>
            <ng-template #cost_template let-data="data">
                <div class="p-4">
                    {{ data / 100 | currency: code }}
                </div>
            </ng-template>
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      SimpleTableComponent,
      MatTooltipModule,
      MatRippleModule,
      IconComponent,
      ReportMetricGuideComponent
    ] }]
  }], null, { print: [{ type: Input, args: [{ isSignal: true, alias: "print", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringReportOrdersComponent, { className: "CateringReportOrdersComponent", filePath: "apps/concierge/src/app/reports/catering/catering-report-orders.component.ts", lineNumber: 120 });
})();

// apps/concierge/src/app/reports/catering/catering-report-overall.component.ts
var CateringReportOverallComponent = class _CateringReportOverallComponent {
  constructor() {
    this._report = inject(CateringReportStateService);
    this._org = inject(OrganisationService);
    this.stats = this._report.stats;
  }
  get code() {
    return this._org.currency_code;
  }
  static {
    this.\u0275fac = function CateringReportOverallComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringReportOverallComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringReportOverallComponent, selectors: [["catering-report-overall"]], decls: 32, vars: 26, consts: [["item", "", 1, "flex", "flex-1", "flex-col", "items-center", "justify-center"], ["count", "", 1, "text-3xl"], [1, "text-sm"], ["unique", "", 1, "text-3xl"], ["items", "", 1, "text-3xl"], ["total", "", 1, "text-3xl"], ["average", "", 1, "text-3xl"]], template: function CateringReportOverallComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275text(2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(3, "div", 2);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(6, "div", 0)(7, "div", 3);
        \u0275\u0275text(8);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(9, "div", 2);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(12, "div", 0)(13, "div", 4);
        \u0275\u0275text(14);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(15, "div", 2);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(18, "div", 0)(19, "div", 5);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "currency");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(22, "div", 2);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(25, "div", 0)(26, "div", 6);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "currency");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(29, "div", 2);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.stats().order_count || "0", " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 10, "APP.CONCIERGE.REPORTS_CATERING_ORDERS_HEADER"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.stats().unique_items || "0", " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 12, "APP.CONCIERGE.REPORTS_CATERING_ITEMS_UNIQUE"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.stats().item_count || "0", " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 14, "APP.CONCIERGE.REPORTS_CATERING_ITEMS_HEADER"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 16, ctx.stats().total_cost / 100 || 0, ctx.code), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 19, "CATERING.TOTAL_COST"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 21, ctx.stats().avg_cost / 100 || 0, ctx.code), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 24, "APP.CONCIERGE.REPORTS_CATERING_ORDERS_AVERAGE"), " ");
      }
    }, dependencies: [CommonModule, CurrencyPipe, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  max-width: 64rem;\n  margin: 0 auto;\n}\n[item][_ngcontent-%COMP%] {\n  border: 1px solid var(--%NS%base-200);\n  border-radius: 0.5rem;\n  padding: 1rem;\n  margin: 0.5rem;\n  height: 6rem;\n  width: 12rem;\n  min-width: 7rem;\n}\n/*# sourceMappingURL=catering-report-overall.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringReportOverallComponent, [{
    type: Component,
    args: [{ selector: "catering-report-overall", template: `
        <div item class="flex flex-1 flex-col items-center justify-center">
            <div count class="text-3xl">
                {{ stats().order_count || '0' }}
            </div>
            <div class="text-sm">
                {{ 'APP.CONCIERGE.REPORTS_CATERING_ORDERS_HEADER' | translate }}
            </div>
        </div>
        <div item class="flex flex-1 flex-col items-center justify-center">
            <div unique class="text-3xl">
                {{ stats().unique_items || '0' }}
            </div>
            <div class="text-sm">
                {{ 'APP.CONCIERGE.REPORTS_CATERING_ITEMS_UNIQUE' | translate }}
            </div>
        </div>
        <div item class="flex flex-1 flex-col items-center justify-center">
            <div items class="text-3xl">
                {{ stats().item_count || '0' }}
            </div>
            <div class="text-sm">
                {{ 'APP.CONCIERGE.REPORTS_CATERING_ITEMS_HEADER' | translate }}
            </div>
        </div>
        <div item class="flex flex-1 flex-col items-center justify-center">
            <div total class="text-3xl">
                {{ stats().total_cost / 100 || 0 | currency: code }}
            </div>
            <div class="text-sm">
                {{ 'CATERING.TOTAL_COST' | translate }}
            </div>
        </div>
        <div item class="flex flex-1 flex-col items-center justify-center">
            <div average class="text-3xl">
                {{ stats().avg_cost / 100 || 0 | currency: code }}
            </div>
            <div class="text-sm">
                {{
                    'APP.CONCIERGE.REPORTS_CATERING_ORDERS_AVERAGE' | translate
                }}
            </div>
        </div>
    `, imports: [CommonModule, TranslatePipe], styles: ["/* angular:styles/component:css;6a270b40a6f5e0e10ead12768846f2c5828b349a3726bb5f045ed4d5c748816d;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/catering/catering-report-overall.component.ts */\n:host {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  max-width: 64rem;\n  margin: 0 auto;\n}\n[item] {\n  border: 1px solid var(--base-200);\n  border-radius: 0.5rem;\n  padding: 1rem;\n  margin: 0.5rem;\n  height: 6rem;\n  width: 12rem;\n  min-width: 7rem;\n}\n/*# sourceMappingURL=catering-report-overall.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringReportOverallComponent, { className: "CateringReportOverallComponent", filePath: "apps/concierge/src/app/reports/catering/catering-report-overall.component.ts", lineNumber: 78 });
})();

// apps/concierge/src/app/reports/catering/catering-report.component.ts
function CateringReportComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "placeos-report-metric-guide", 9)(1, "catering-report-overall")(2, "catering-report-orders", 10)(3, "catering-report-items", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("absolute", true)("items", ctx_r0.metric_guide);
    \u0275\u0275advance(2);
    \u0275\u0275property("print", ctx_r0.printing());
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing());
  }
}
function CateringReportComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
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
function CateringReportComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CateringReportComponent_Conditional_9_Conditional_0_Template, 4, 4)(1, CateringReportComponent_Conditional_9_Conditional_1_Template, 4, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.total_count() ? 0 : 1);
  }
}
function CateringReportComponent_Conditional_10_Template(rf, ctx) {
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
    label: "Orders",
    description: "Catering orders delivered within the selected date range, excluding orders with cancelled status."
  },
  {
    label: "Unique items",
    description: "Number of distinct catering item IDs after combining matching items across all orders."
  },
  {
    label: "Items",
    description: "Sum of item counts across every non-cancelled order in the report."
  },
  {
    label: "Total cost",
    description: "Sum of total cost for all non-cancelled orders, displayed in the organisation currency."
  },
  {
    label: "Average order cost",
    description: "Total cost divided by the number of non-cancelled orders."
  }
];
var CateringReportComponent = class _CateringReportComponent extends AsyncHandler {
  get using_bookings() {
    return this._settings.get("app.catering.use_bookings") == true;
  }
  constructor() {
    super();
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
    this._building = this._org.active_building;
    this._stats = this._state.stats;
    this.total_count = computed(
      () => this._stats()?.count || 0,
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
    effect(() => {
      this._building();
      this._state.setOptions({
        type: this.using_bookings ? "catering" : "events"
      });
    });
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
      } else {
        this._state.setOptions({ zones: [] });
      }
    }));
  }
  static {
    this.\u0275fac = function CateringReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringReportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringReportComponent, selectors: [["catering-report"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 7, consts: [["resource_type", "catering", 3, "printing", "download", "generate", "loading", "has_data"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "print:h-auto", "print:overflow-visible"], [1, "w-full"], [1, "bg-base-200", "m-4", "flex", "items-center", "overflow-hidden", "rounded-sm", "p-4"], ["alt", "", "auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "px-2", "text-2xl", "font-medium"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [1, "screen-only", "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [3, "absolute", "items"], [3, "print"], [1, "opacity-70"], [1, "mb-4", 3, "diameter"]], template: function CateringReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "reports-options", 0);
        \u0275\u0275listener("printing", function CateringReportComponent_Template_reports_options_printing_0_listener($event) {
          return ctx.printing.set($event);
        })("download", function CateringReportComponent_Template_reports_options_download_0_listener() {
          return ctx.downloadReport();
        })("generate", function CateringReportComponent_Template_reports_options_generate_0_listener() {
          return ctx.generateReport();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4)(5, "div", 5);
        \u0275\u0275elementStart(6, "h2", 6);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(9, CateringReportComponent_Conditional_9_Template, 2, 1)(10, CateringReportComponent_Conditional_10_Template, 5, 4, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("loading", !!ctx.loading())("has_data", ctx.has_data());
        \u0275\u0275advance(4);
        \u0275\u0275property("source", ctx.logo()?.src || ctx.logo());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "APP.CONCIERGE.REPORTS_CATERING_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 9 : 10);
      }
    }, dependencies: [
      MatProgressSpinnerModule,
      MatProgressSpinner,
      ReportsOptionsComponent,
      ReportMetricGuideComponent,
      CateringReportItemsComponent,
      CateringReportOrdersComponent,
      CateringReportOverallComponent,
      AuthenticatedImageDirective,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=catering-report.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringReportComponent, [{
    type: Component,
    args: [{ selector: "catering-report", template: `
        <reports-options
            resource_type="catering"
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
                <div
                    class="bg-base-200 m-4 flex items-center overflow-hidden rounded-sm p-4"
                >
                    <img
                        alt=""
                        auth
                        class="h-12"
                        [source]="logo()?.src || logo()"
                    />
                    <div class="flex-1"></div>
                    <h2 class="px-2 text-2xl font-medium">
                        {{
                            'APP.CONCIERGE.REPORTS_CATERING_HEADER' | translate
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
                    <catering-report-overall></catering-report-overall>
                    <catering-report-orders
                        [print]="printing()"
                    ></catering-report-orders>
                    <catering-report-items
                        [print]="printing()"
                    ></catering-report-items>
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
      TranslatePipe,
      MatProgressSpinnerModule,
      ReportsOptionsComponent,
      ReportMetricGuideComponent,
      CateringReportItemsComponent,
      CateringReportOrdersComponent,
      CateringReportOverallComponent,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/catering/catering-report.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=catering-report.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringReportComponent, { className: "CateringReportComponent", filePath: "apps/concierge/src/app/reports/catering/catering-report.component.ts", lineNumber: 135 });
})();
export {
  CateringReportComponent
};
//# debugId=d4779eb8-c0e7-59f5-adc7-8e4b3742eef9
//# sourceMappingURL=catering-report.component-7MSN23UO.js.map
