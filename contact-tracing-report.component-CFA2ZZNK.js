import {
  ReportsStateService
} from "./chunk-I6LAZD7I.js";
import {
  ReportMetricGuideComponent
} from "./chunk-TZLZ4PRG.js";
import "./chunk-M7D6LSL2.js";
import {
  DateRangeFieldComponent
} from "./chunk-LCHSZWKM.js";
import "./chunk-JNHYREVF.js";
import "./chunk-ULYE3EO5.js";
import {
  SimpleTableComponent
} from "./chunk-RILX3QL7.js";
import {
  UserPipe
} from "./chunk-6CASYEIA.js";
import {
  UserSearchFieldComponent
} from "./chunk-XTYJMPFE.js";
import {
  searchStaff
} from "./chunk-S37FUGVJ.js";
import "./chunk-I6CQFYCS.js";
import "./chunk-5WW5YMHZ.js";
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
import "./chunk-5GXWVSSG.js";
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
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  OrganisationService,
  SettingsService,
  StaffUser,
  currentUser,
  getUnixTime
} from "./chunk-ACYV7NM4.js";
import {
  IconComponent
} from "./chunk-QVU2YYRL.js";
import {
  Jp,
  downloadFile,
  endOfDay,
  format,
  formatDuration,
  jsonToCsv,
  notifyError,
  notifyWarn,
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
import "./chunk-N4RTV55R.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  DatePipe,
  Injectable,
  Output,
  Pipe,
  computed,
  inject,
  output,
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
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
  ɵɵpureFunction4,
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

// apps/concierge/src/app/reports/contact-tracing/get-user.pipe.ts
var USER_LIST = {};
var GetUserPipe = class _GetUserPipe {
  /**
   * Get staff memeber details
   * @param id ID, Email or Staff ID of the user
   */
  transform(id) {
    if (!id)
      return Promise.resolve(null);
    if (!USER_LIST[id]) {
      USER_LIST[id] = searchStaff(id).then((_) => _[0] || new StaffUser({ id, name: id })).catch(() => new StaffUser({ id, name: id }));
    }
    return USER_LIST[id];
  }
  static addUser(user) {
    USER_LIST[user.id] = Promise.resolve(user);
  }
  static {
    this.\u0275fac = function GetUserPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GetUserPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "user", type: _GetUserPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GetUserPipe, [{
    type: Pipe,
    args: [{
      name: "user"
    }]
  }], null, null);
})();

// apps/concierge/src/app/reports/contact-tracing/contact-tracing-state.service.ts
var ContactTracingStateService = class _ContactTracingStateService {
  constructor() {
    this._org = inject(OrganisationService);
    this._reports = inject(ReportsStateService);
    this._settings = inject(SettingsService);
    this._loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "_loading" }] : (
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
    this._options = signal(
      {
        start: startOfDay(Date.now()),
        end: endOfDay(Date.now())
      },
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._events = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_events" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({ options: this._options(), refresh: this._generate() }),
      defaultValue: [],
      loader: async ({ params: { options } }) => {
        const { start, end, user } = options;
        if (!user)
          return [];
        this._loading.set("Loading contact events...");
        const mod = Jp(this.system_id, "ContactTracing");
        const current_user = user || currentUser();
        GetUserPipe.addUser(current_user);
        if (!this.system_id || !mod) {
          this._loading.set("");
          return [];
        }
        try {
          const list = await mod.execute("close_contacts", [
            current_user.email,
            current_user.username,
            getUnixTime(start),
            getUnixTime(endOfDay(end))
          ]);
          const person = user;
          return list.map((_) => ({
            mac_address: _.mac_address,
            date: _.contact_time * 1e3,
            duration: Math.floor(_.duration / 60) || 0,
            user_id: person.id,
            user: person.name,
            contact_id: _.username,
            distance: 1
          }));
        } catch (err) {
          notifyError(`${err?.msg || JSON.stringify(err)}`);
          return [];
        } finally {
          this._loading.set("");
        }
      }
    }));
    this.events = this._events.value;
    this.options = this._options.asReadonly();
    this.loading = this._loading.asReadonly();
  }
  get system_id() {
    const binding = this._org.binding("contact_tracing");
    const system_id = binding instanceof Object ? binding.id : binding;
    return system_id;
  }
  get time_format() {
    return this._settings.time_format;
  }
  setOptions(options) {
    this._options.set(__spreadValues(__spreadValues({}, this._options()), options));
  }
  generateReport() {
    this._generate.set(Date.now());
  }
  async downloadReport() {
    const { start, end } = this._reports.options();
    const events = this.events();
    const pipe = new GetUserPipe();
    const processed_events = await Promise.all(events.map(async (_) => ({
      "MAC Address": _.mac_address,
      Date: format(_.date, "dd MMM yyyy, " + this.time_format),
      "User Name": _.user,
      "Contact Name": (await pipe.transform(_.contact_id))?.name || (_.contact_id !== "null" ? _.contact_id : null) || _.mac_address,
      Duration: `${Math.floor(_.duration / 60) ? Math.floor(_.duration / 60) + "h " : ""}${Math.floor(_.duration % 60) + "m"}`,
      Distance: _.distance
    })));
    if (!processed_events?.length) {
      return notifyWarn("No events to download.");
    }
    downloadFile(`report+contact-tracing+${format(start, "yyyy-MM-dd")}+${format(end, "yyyy-MM-dd")}.csv`, jsonToCsv(processed_events));
  }
  static {
    this.\u0275fac = function ContactTracingStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactTracingStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContactTracingStateService, factory: _ContactTracingStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactTracingStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/reports/contact-tracing/contact-tracing-options.component.ts
var ContactTracingOptionsComponent = class _ContactTracingOptionsComponent {
  constructor() {
    this._state = inject(ContactTracingStateService);
    this._settings = inject(SettingsService);
    this.printing = output();
    this.download = output();
    this.options = this._state.options;
    this.can_download = computed(
      () => !!this.options()?.user,
      ...ngDevMode ? [{ debugName: "can_download" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setOptions = (_) => this._state.setOptions(_);
    this.generate = () => this._state.generateReport();
  }
  get week_start() {
    return this._settings.get("app.week_start");
  }
  print() {
    this.printing.emit(true);
    setTimeout(() => {
      window.print();
      this.printing.emit(false);
    }, 300);
  }
  static {
    this.\u0275fac = function ContactTracingOptionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactTracingOptionsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactTracingOptionsComponent, selectors: [["contact-tracing-options"]], outputs: { printing: "printing", download: "download" }, decls: 14, vars: 7, consts: [["startDate", ""], ["endDate", ""], [1, "bg-base-100", "flex", "w-full", "items-center", "space-x-2", "p-4", "shadow-sm"], [3, "week_start", "from"], [3, "ngModelChange", "ngModel"], ["placeholder", "Search for user to trace...", 1, "w-64", 3, "ngModelChange", "ngModel"], [1, "flex-1"], ["icon", "", "default", "", "matRipple", "", "matTooltip", "Download Report", "aria-label", "Download Report", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "click", "disabled"], ["icon", "", "matRipple", "", "matTooltip", "Print Report", "aria-label", "Print Report", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "click", "disabled"]], template: function ContactTracingOptionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "date-range-field", 3)(2, "input", 4, 0);
        \u0275\u0275listener("ngModelChange", function ContactTracingOptionsComponent_Template_input_ngModelChange_2_listener($event) {
          return $event ? ctx.setOptions({ start: $event }) : "";
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(4, "input", 4, 1);
        \u0275\u0275listener("ngModelChange", function ContactTracingOptionsComponent_Template_input_ngModelChange_4_listener($event) {
          return $event ? ctx.setOptions({ end: $event }) : "";
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "a-user-search-field", 5);
        \u0275\u0275listener("ngModelChange", function ContactTracingOptionsComponent_Template_a_user_search_field_ngModelChange_6_listener($event) {
          return ctx.setOptions({ user: $event });
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275element(7, "div", 6);
        \u0275\u0275elementStart(8, "button", 7);
        \u0275\u0275listener("click", function ContactTracingOptionsComponent_Template_button_click_8_listener() {
          return ctx.download.emit();
        });
        \u0275\u0275elementStart(9, "icon");
        \u0275\u0275text(10, "download");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "button", 8);
        \u0275\u0275listener("click", function ContactTracingOptionsComponent_Template_button_click_11_listener() {
          return ctx.print();
        });
        \u0275\u0275elementStart(12, "icon");
        \u0275\u0275text(13, "print");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("week_start", ctx.week_start)("from", 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.options()?.start);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.options()?.end);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.options()?.user);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.can_download());
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", !ctx.can_download());
      }
    }, dependencies: [
      DateRangeFieldComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      UserSearchFieldComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel
    ], styles: ["\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25rem;\n}\nbutton[icon][disabled][_ngcontent-%COMP%] {\n  background-color: var(--%NS%neutral) !important;\n}\n/*# sourceMappingURL=contact-tracing-options.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactTracingOptionsComponent, [{
    type: Component,
    args: [{ selector: "contact-tracing-options", template: `
        <div
            class="bg-base-100 flex w-full items-center space-x-2 p-4 shadow-sm"
        >
            <date-range-field [week_start]="week_start" [from]="0">
                <input
                    #startDate
                    [ngModel]="options()?.start"
                    (ngModelChange)="
                        $event ? setOptions({ start: $event }) : ''
                    "
                />
                <input
                    #endDate
                    [ngModel]="options()?.end"
                    (ngModelChange)="$event ? setOptions({ end: $event }) : ''"
                />
            </date-range-field>
            <a-user-search-field
                class="w-64"
                placeholder="Search for user to trace..."
                [ngModel]="options()?.user"
                (ngModelChange)="setOptions({ user: $event })"
            ></a-user-search-field>
            <div class="flex-1"></div>
            <button
                icon
                default
                matRipple
                matTooltip="Download Report"
                class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                [disabled]="!can_download()"
                (click)="download.emit()"
                aria-label="Download Report"
            >
                <icon>download</icon>
            </button>
            <button
                icon
                matRipple
                class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                [disabled]="!can_download()"
                matTooltip="Print Report"
                (click)="print()"
                aria-label="Print Report"
            >
                <icon>print</icon>
            </button>
        </div>
    `, imports: [
      DateRangeFieldComponent,
      MatRippleModule,
      MatTooltipModule,
      IconComponent,
      UserSearchFieldComponent,
      FormsModule
    ], styles: ["/* angular:styles/component:css;47494ff02c77eb9d536fd6ec6e1602c07578491dfbe00a5af890b7e488087270;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/contact-tracing/contact-tracing-options.component.ts */\nmat-form-field {\n  height: 3.25rem;\n}\nbutton[icon][disabled] {\n  background-color: var(--neutral) !important;\n}\n/*# sourceMappingURL=contact-tracing-options.component.css.map */\n"] }]
  }], null, { printing: [{ type: Output, args: ["printing"] }], download: [{ type: Output, args: ["download"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactTracingOptionsComponent, { className: "ContactTracingOptionsComponent", filePath: "apps/concierge/src/app/reports/contact-tracing/contact-tracing-options.component.ts", lineNumber: 85 });
})();

// apps/concierge/src/app/reports/contact-tracing/contact-tracing-report.component.ts
var _c0 = (a0) => ({ key: "date", name: "Time of Contact", content: a0 });
var _c1 = (a0) => ({ key: "user_id", name: "Person", content: a0 });
var _c2 = (a0) => ({ key: "contact_id", name: "Close Contact", content: a0 });
var _c3 = (a0) => ({ key: "duration", name: "Duration", content: a0 });
var _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function ContactTracingReportComponent_Conditional_9_Conditional_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "user");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    const row_r2 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, \u0275\u0275pipeBind1(2, 1, data_r1))?.name || row_r2.mac_address, " ");
  }
}
function ContactTracingReportComponent_Conditional_9_Conditional_0_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, data_r3, "mediumDate"), ", ", \u0275\u0275pipeBind2(3, 5, data_r3, ctx_r3.time_format), " ");
  }
}
function ContactTracingReportComponent_Conditional_9_Conditional_0_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDuration(data_r5 || 0) || "Less than a minute", " ");
  }
}
function ContactTracingReportComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "placeos-report-metric-guide", 12);
    \u0275\u0275elementStart(1, "div", 13)(2, "div", 14)(3, "h2", 15);
    \u0275\u0275text(4, " Contact Events ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "placeos-report-metric-guide", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "simple-table", 17);
    \u0275\u0275template(7, ContactTracingReportComponent_Conditional_9_Conditional_0_ng_template_7_Template, 4, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, ContactTracingReportComponent_Conditional_9_Conditional_0_ng_template_9_Template, 4, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, ContactTracingReportComponent_Conditional_9_Conditional_0_ng_template_11_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_template_r6 = \u0275\u0275reference(8);
    const date_template_r7 = \u0275\u0275reference(10);
    const duration_template_r8 = \u0275\u0275reference(12);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("absolute", true)("items", ctx_r3.metric_guide);
    \u0275\u0275advance(5);
    \u0275\u0275property("items", ctx_r3.table_metric_guide)("inline", true);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r3.tracing_events())("columns", \u0275\u0275pureFunction4(16, _c4, \u0275\u0275pureFunction1(8, _c0, date_template_r7), \u0275\u0275pureFunction1(10, _c1, user_template_r6), \u0275\u0275pureFunction1(12, _c2, user_template_r6), \u0275\u0275pureFunction1(14, _c3, duration_template_r8)))("sortable", true)("page_size", ctx_r3.printing() ? 0 : 30);
  }
}
function ContactTracingReportComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "p", 19);
    \u0275\u0275text(2, " Select a user from the topbar to begin ");
    \u0275\u0275elementEnd()();
  }
}
function ContactTracingReportComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ContactTracingReportComponent_Conditional_9_Conditional_0_Template, 13, 21)(1, ContactTracingReportComponent_Conditional_9_Conditional_1_Template, 3, 0, "div", 11);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r3.has_user() ? 0 : 1);
  }
}
function ContactTracingReportComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-spinner", 20);
    \u0275\u0275elementStart(2, "p", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.loading());
  }
}
var METRIC_GUIDE = [
  {
    label: "Contact events",
    description: "Close contacts returned by the ContactTracing module for the selected user and date range."
  },
  {
    label: "Time of contact",
    description: "The contact timestamp returned by the module, displayed in the configured date and time format."
  },
  {
    label: "Person / Close contact",
    description: "The selected user is shown as the person. The close contact is resolved from the returned username when possible, falling back to the identifier."
  },
  {
    label: "Duration",
    description: "The module duration is converted from seconds to whole minutes and displayed as hours and minutes."
  }
];
var TABLE_METRIC_GUIDE = [
  {
    label: "Time of contact",
    description: "Contact time returned by the ContactTracing module, converted from seconds to local milliseconds for display."
  },
  {
    label: "Person",
    description: "The selected report user."
  },
  {
    label: "Close contact",
    description: "Contact username resolved through the user pipe when possible, falling back to the returned identifier or MAC address."
  },
  {
    label: "Duration",
    description: "Contact duration converted to whole minutes, then displayed as hours and minutes."
  }
];
var ContactTracingReportComponent = class _ContactTracingReportComponent {
  constructor() {
    this._state = inject(ContactTracingStateService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.printing = signal(
      false,
      ...ngDevMode ? [{ debugName: "printing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.metric_guide = METRIC_GUIDE;
    this.table_metric_guide = TABLE_METRIC_GUIDE;
    this.loading = this._state.loading;
    this.options = this._state.options;
    this.has_user = computed(
      () => !!this.options()?.user,
      ...ngDevMode ? [{ debugName: "has_user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tracing_events = this._state.events;
    this.setOptions = (_) => this._state.setOptions(_);
    this.downloadReport = () => this._state.downloadReport();
    this.formatDuration = (d) => formatDuration({ hours: Math.floor(d / 60), minutes: d % 60 });
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
  get time_format() {
    return this._settings.time_format;
  }
  static {
    this.\u0275fac = function ContactTracingReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactTracingReportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactTracingReportComponent, selectors: [["app-contact-tracing-report"]], decls: 11, vars: 5, consts: [["user_template", ""], ["date_template", ""], ["duration_template", ""], [1, "print:hidden", 3, "printing", "download"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "print:h-auto", "print:overflow-visible"], [1, "w-full"], [1, "bg-base-200", "m-4", "flex", "items-center", "overflow-hidden", "rounded-sm", "p-4"], ["alt", "", "auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "px-2", "text-2xl", "font-medium"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "screen-only", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [3, "absolute", "items"], [1, "border-base-200", "mx-auto", "my-2", "w-5xl", "max-w-[calc(100%-2rem)]", "rounded-lg", "border"], [1, "border-base-200", "flex", "items-center", "justify-between", "border-b", "px-4"], [1, "py-2", "text-xl", "font-medium"], ["title", "Table column calculations", 3, "items", "inline"], ["empty_message", "No contact tracing events for selected period", 1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size"], [1, "p-4"], [1, "opacity-70"], [3, "diameter"]], template: function ContactTracingReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "contact-tracing-options", 3);
        \u0275\u0275listener("printing", function ContactTracingReportComponent_Template_contact_tracing_options_printing_0_listener($event) {
          return ctx.printing.set($event);
        })("download", function ContactTracingReportComponent_Template_contact_tracing_options_download_0_listener() {
          return ctx.downloadReport();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "div", 4)(2, "div", 5)(3, "div", 6);
        \u0275\u0275element(4, "img", 7)(5, "div", 8);
        \u0275\u0275elementStart(6, "h2", 9);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(9, ContactTracingReportComponent_Conditional_9_Template, 2, 1)(10, ContactTracingReportComponent_Conditional_10_Template, 4, 2, "div", 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("source", ctx.logo()?.src || ctx.logo());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 3, "APP.CONCIERGE.REPORTS_CONTACTS_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 9 : 10);
      }
    }, dependencies: [
      CommonModule,
      ContactTracingOptionsComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      SimpleTableComponent,
      AuthenticatedImageDirective,
      ReportMetricGuideComponent,
      AsyncPipe,
      DatePipe,
      UserPipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=contact-tracing-report.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactTracingReportComponent, [{
    type: Component,
    args: [{ selector: "app-contact-tracing-report", template: `
        <contact-tracing-options
            (printing)="printing.set($event)"
            (download)="downloadReport()"
            class="print:hidden"
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
                            'APP.CONCIERGE.REPORTS_CONTACTS_HEADER' | translate
                        }}
                    </h2>
                </div>
            </div>
            @if (!loading()) {
                @if (has_user()) {
                    <placeos-report-metric-guide
                        [absolute]="true"
                        [items]="metric_guide"
                    />
                    <div
                        class="border-base-200 mx-auto my-2 w-5xl max-w-[calc(100%-2rem)] rounded-lg border"
                    >
                        <div
                            class="border-base-200 flex items-center justify-between border-b px-4"
                        >
                            <h2 class="py-2 text-xl font-medium">
                                Contact Events
                            </h2>
                            <placeos-report-metric-guide
                                title="Table column calculations"
                                [items]="table_metric_guide"
                                [inline]="true"
                            />
                        </div>
                        <simple-table
                            class="block w-full text-sm"
                            [data]="tracing_events()"
                            [columns]="[
                                {
                                    key: 'date',
                                    name: 'Time of Contact',
                                    content: date_template,
                                },
                                {
                                    key: 'user_id',
                                    name: 'Person',
                                    content: user_template,
                                },
                                {
                                    key: 'contact_id',
                                    name: 'Close Contact',
                                    content: user_template,
                                },
                                {
                                    key: 'duration',
                                    name: 'Duration',
                                    content: duration_template,
                                },
                            ]"
                            [sortable]="true"
                            [page_size]="printing() ? 0 : 30"
                            empty_message="No contact tracing events for selected period"
                        ></simple-table>
                        <ng-template
                            #user_template
                            let-data="data"
                            let-row="row"
                        >
                            <div class="p-4">
                                {{
                                    (data | user | async)?.name ||
                                        row.mac_address
                                }}
                            </div>
                        </ng-template>
                        <ng-template #date_template let-data="data">
                            <div class="p-4">
                                {{ data | date: 'mediumDate' }},
                                {{ data | date: time_format }}
                            </div>
                        </ng-template>
                        <ng-template #duration_template let-data="data">
                            <div class="p-4">
                                {{
                                    formatDuration(data || 0) ||
                                        'Less than a minute'
                                }}
                            </div>
                        </ng-template>
                    </div>
                } @else {
                    <div
                        class="screen-only flex flex-col items-center justify-center space-y-2 p-8"
                    >
                        <p class="opacity-70">
                            Select a user from the topbar to begin
                        </p>
                    </div>
                }
            } @else {
                <div
                    class="flex flex-col items-center justify-center space-y-2 p-8"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p class="opacity-70">{{ loading() }}</p>
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      ContactTracingOptionsComponent,
      MatProgressSpinnerModule,
      UserPipe,
      SimpleTableComponent,
      AuthenticatedImageDirective,
      TranslatePipe,
      ReportMetricGuideComponent
    ], styles: ["/* angular:styles/component:css;b5ddbd83b4b573db467eee0aab1ad053104c11d8d0d5679573f22afeb56e112e;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/contact-tracing/contact-tracing-report.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=contact-tracing-report.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactTracingReportComponent, { className: "ContactTracingReportComponent", filePath: "apps/concierge/src/app/reports/contact-tracing/contact-tracing-report.component.ts", lineNumber: 213 });
})();
export {
  ContactTracingReportComponent
};
//# debugId=7913e901-86a5-52fa-98b1-642365b7df70
//# sourceMappingURL=contact-tracing-report.component-CFA2ZZNK.js.map
