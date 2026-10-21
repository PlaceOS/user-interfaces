import {
  DurationPipe
} from "./chunk-IFMM4UUI.js";
import {
  reportBookingStatus,
  reportEventStatus
} from "./chunk-M7D6LSL2.js";
import {
  DateRangeFieldComponent
} from "./chunk-RL3PNBUJ.js";
import {
  SimpleTableComponent
} from "./chunk-M7ZA3PPG.js";
import {
  UserSearchFieldComponent
} from "./chunk-2B3I5LIK.js";
import "./chunk-VZ6SCRG6.js";
import "./chunk-NKFHWBCN.js";
import "./chunk-XF7VXPW2.js";
import {
  queryAllEvents
} from "./chunk-DYYMC33G.js";
import "./chunk-Y4FJNLAU.js";
import {
  queryAllBookings
} from "./chunk-TWDLTGRO.js";
import {
  AuthenticatedImageDirective
} from "./chunk-FZ7AIFRE.js";
import "./chunk-BMQKHWAC.js";
import "./chunk-EPT6QV6G.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-TZ5JUV4G.js";
import "./chunk-YVNE7QXT.js";
import "./chunk-ZVSHIGFS.js";
import "./chunk-3DBDHK6S.js";
import "./chunk-4VWJLUSZ.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-HLTSGFYE.js";
import "./chunk-JQJNBBNN.js";
import "./chunk-I6MB2EED.js";
import {
  TranslatePipe
} from "./chunk-JCEMX2GO.js";
import "./chunk-MCWEYL2F.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-C5SFKFXB.js";
import {
  OrganisationService,
  SettingsService,
  getUnixTime
} from "./chunk-NAPLFNKH.js";
import "./chunk-ZBK6XVOU.js";
import {
  IconComponent
} from "./chunk-BSQA34BX.js";
import {
  downloadFile,
  endOfDay,
  format,
  i18n,
  jsonToCsv,
  notifyError,
  startOfDay
} from "./chunk-PYWAX25U.js";
import "./chunk-QQKECY2M.js";
import "./chunk-F5BJYE7W.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-FWV33PKU.js";
import "./chunk-BF2TDFXD.js";
import "./chunk-R7WRISTA.js";
import "./chunk-TFYF4ALL.js";
import {
  Component,
  DatePipe,
  Injectable,
  computed,
  inject,
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵpureFunction7,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-EOGESHX7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/reports/user/user-report.service.ts
var TYPE_NAMES = {
  desk: "RESOURCE.DESK",
  parking: "RESOURCE.PARKING",
  locker: "RESOURCE.LOCKER",
  room: "RESOURCE.ROOM"
};
var BOOKING_TYPES = ["desk", "parking", "locker"];
var UserReportService = class _UserReportService {
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._options = signal(
      {
        start: startOfDay(Date.now()).valueOf(),
        end: endOfDay(Date.now()).valueOf(),
        user: null
      },
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._params = computed(() => {
      const { start, end, user } = this._options();
      const zone = this._settings.get("app.use_region") ? this._org.active_region()?.id : this._org.active_building()?.id;
      return { start, end, email: user?.email, zone };
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_params" } : (
      /* istanbul ignore next */
      {}
    )), { equal: (a, b) => a.start === b.start && a.end === b.end && a.email === b.email && a.zone === b.zone }));
    this._rows = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_rows" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._params(),
      defaultValue: [],
      loader: async ({ params: { start, end, email, zone } }) => {
        if (!email || !zone)
          return [];
        const period = {
          period_start: getUnixTime(startOfDay(start)),
          period_end: getUnixTime(endOfDay(end))
        };
        const [events, ...booking_lists] = await Promise.all([
          // Tell the user when the room events are too many to load
          queryAllEvents(__spreadProps(__spreadValues({}, period), {
            zone_ids: zone,
            include_cancelled: true,
            limit: 200
          })).catch(() => {
            notifyError(i18n("COMMON.LOAD_ERROR"));
            return [];
          }),
          ...BOOKING_TYPES.map((type) => queryAllBookings(__spreadProps(__spreadValues({}, period), {
            type,
            zones: zone,
            email,
            include_deleted: true,
            include_checked_out: true,
            limit: 200
          })))
        ]);
        const host = email.toLowerCase();
        return [
          ...booking_lists.flat().map((_) => this._bookingRow(_)),
          ...events.filter((event) => [event.extension_data?.host_override, event.host].some((_) => _?.toLowerCase() === host)).map((_) => this._eventRow(_))
        ].sort((a, b) => a.date - b.date);
      }
    }));
    this.options = this._options.asReadonly();
    this.loading = this._rows.isLoading;
    this.rows = computed(
      () => this._rows.value().map((row) => __spreadProps(__spreadValues({}, row), {
        type_name: i18n(TYPE_NAMES[row.type]),
        checked_in: row.checked_in && i18n(row.checked_in)
      })),
      ...ngDevMode ? [{ debugName: "rows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.counts = computed(
      () => {
        const counts = {
          desk: 0,
          parking: 0,
          locker: 0,
          room: 0
        };
        for (const row of this.rows())
          counts[row.type] += 1;
        return counts;
      },
      ...ngDevMode ? [{ debugName: "counts" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  setOptions(options) {
    this._options.update((current) => __spreadValues(__spreadValues({}, current), options));
  }
  downloadReport() {
    const { start, end, user } = this._options();
    const rows = this.rows();
    if (!user || !rows.length)
      return;
    downloadFile(`report+user+${user.email}+${format(start, "yyyy-MM-dd")}+${format(end, "yyyy-MM-dd")}.csv`, jsonToCsv(rows.map((row) => ({
      type: row.type_name,
      name: row.name,
      location: row.location,
      date: format(row.date, "yyyy-MM-dd HH:mm"),
      duration: row.duration,
      all_day: row.all_day,
      checked_in: row.checked_in,
      status: row.status
    }))));
  }
  _bookingRow(booking) {
    const type = booking.booking_type;
    return {
      type,
      name: booking.asset_name || booking.extension_data?.asset_name || booking.description || booking.asset_id,
      location: this._org.locationWithID(booking.zones).label,
      date: booking.date,
      duration: booking.duration,
      all_day: booking.is_all_day,
      checked_in: booking.checked_in ? "COMMON.YES" : "COMMON.NO",
      status: reportBookingStatus(booking)
    };
  }
  _eventRow(event) {
    return {
      type: "room",
      name: event.system?.display_name || event.system?.name || "",
      location: this._org.locationWithID([...event.system?.zones || []]).label,
      date: event.date,
      duration: event.duration,
      all_day: event.is_all_day,
      // Room events have no check-in state
      checked_in: "",
      status: reportEventStatus(event)
    };
  }
  static {
    this.\u0275fac = function UserReportService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserReportService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserReportService, factory: _UserReportService.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserReportService, [{
    type: Injectable
  }], null, null);
})();

// apps/concierge/src/app/reports/user/user-report.component.ts
var _c0 = (a0) => ({ key: "type_name", name: a0 });
var _c1 = (a0) => ({ key: "name", name: a0 });
var _c2 = (a0) => ({ key: "location", name: a0 });
var _c3 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c4 = (a0, a1) => ({ key: "duration", name: a0, content: a1 });
var _c5 = (a0) => ({ key: "checked_in", name: a0 });
var _c6 = (a0) => ({ key: "status", name: a0 });
var _c7 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
var _forTrack0 = ($index, $item) => $item.name;
function UserReportComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 17);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", user_r1.name, " (", user_r1.email, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(4, 4, ctx_r1.options().start, "mediumDate"), " \u2013 ", \u0275\u0275pipeBind2(5, 7, ctx_r1.options().end, "mediumDate"), " ");
  }
}
function UserReportComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "mat-spinner", 18);
    \u0275\u0275elementStart(2, "p", 19);
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
function UserReportComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "p", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.REPORTS_USER_EMPTY"), " ");
  }
}
function UserReportComponent_Conditional_27_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "h3", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const total_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, total_r3.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(total_r3.count);
  }
}
function UserReportComponent_Conditional_27_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, row_r4.date, row_r4.all_day ? "mediumDate" : "MMM d, y, " + ctx_r1.time_format), " ");
  }
}
function UserReportComponent_Conditional_27_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "duration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5.all_day ? \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY") : \u0275\u0275pipeBind2(3, 3, row_r5.duration, true), " ");
  }
}
function UserReportComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275repeaterCreate(1, UserReportComponent_Conditional_27_For_2_Template, 6, 4, "div", 21, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275element(4, "simple-table", 23);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275template(13, UserReportComponent_Conditional_27_ng_template_13_Template, 3, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(15, UserReportComponent_Conditional_27_ng_template_15_Template, 4, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_template_r6 = \u0275\u0275reference(14);
    const duration_template_r7 = \u0275\u0275reference(16);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.totals());
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r1.rows())("columns", \u0275\u0275pureFunction7(37, _c7, \u0275\u0275pureFunction1(21, _c0, \u0275\u0275pipeBind1(5, 5, "COMMON.TYPE")), \u0275\u0275pureFunction1(23, _c1, \u0275\u0275pipeBind1(6, 7, "FORM.NAME")), \u0275\u0275pureFunction1(25, _c2, \u0275\u0275pipeBind1(7, 9, "COMMON.LOCATION")), \u0275\u0275pureFunction2(27, _c3, \u0275\u0275pipeBind1(8, 11, "FORM.DATE"), date_template_r6), \u0275\u0275pureFunction2(30, _c4, \u0275\u0275pipeBind1(9, 13, "FORM.DURATION"), duration_template_r7), \u0275\u0275pureFunction1(33, _c5, \u0275\u0275pipeBind1(10, 15, "COMMON.CHECKED_IN")), \u0275\u0275pureFunction1(35, _c6, \u0275\u0275pipeBind1(11, 17, "COMMON.STATUS"))))("sortable", true)("page_size", ctx_r1.printing() ? 0 : 20)("empty_message", \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
  }
}
var UserReportComponent = class _UserReportComponent {
  constructor() {
    this._state = inject(UserReportService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.printing = signal(
      false,
      ...ngDevMode ? [{ debugName: "printing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.rows = this._state.rows;
    this.totals = computed(
      () => {
        const counts = this._state.counts();
        return [
          {
            name: "APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS",
            count: this.rows().length
          },
          { name: "RESOURCE.DESKS", count: counts.desk },
          { name: "RESOURCE.PARKING", count: counts.parking },
          { name: "RESOURCE.LOCKERS", count: counts.locker },
          { name: "RESOURCE.ROOMS", count: counts.room }
        ];
      },
      ...ngDevMode ? [{ debugName: "totals" }] : (
        /* istanbul ignore next */
        []
      )
    );
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
    this.setOptions = (options) => this._state.setOptions(options);
    this.downloadReport = () => this._state.downloadReport();
    this.setStartDate = (date) => this._state.setOptions({ start: startOfDay(date).valueOf() });
    this.setEndDate = (date) => this._state.setOptions({ end: endOfDay(date).valueOf() });
  }
  get week_start() {
    return this._settings.get("app.week_start");
  }
  get time_format() {
    return this._settings.time_format;
  }
  print() {
    this.printing.set(true);
    setTimeout(() => {
      window.print();
      this.printing.set(false);
    }, 300);
  }
  static {
    this.\u0275fac = function UserReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserReportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserReportComponent, selectors: [["", "user-report", ""]], features: [\u0275\u0275ProvidersFeature([UserReportService])], decls: 28, vars: 19, consts: [["startDate", ""], ["endDate", ""], ["date_template", ""], ["duration_template", ""], [1, "border-base-200", "bg-base-100", "z-20", "flex", "h-20", "w-full", "items-center", "space-x-2", "border-b", "p-4", "print:hidden"], [1, "w-64", 3, "ngModelChange", "ngModel"], [3, "week_start", "from"], [3, "ngModelChange", "ngModel"], [1, "flex-1"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "click", "disabled", "matTooltip"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "print:h-auto", "print:overflow-visible"], [1, "bg-base-200", "m-4", "flex", "items-center", "rounded-sm", "p-4"], ["auth", "", 1, "h-12", 3, "source"], [1, "px-2", "text-right"], [1, "text-2xl", "font-medium"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [1, "screen-only", "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [1, "text-sm", "opacity-60"], [1, "mb-4", 3, "diameter"], [1, "opacity-30"], [1, "border-base-200", "bg-base-100", "m-4", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border", "p-4"], [1, "flex", "flex-1", "flex-col", "items-center"], [1, "border-base-200", "bg-base-100", "m-4", "overflow-hidden", "rounded-sm", "border"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], [1, "text-sm"], [1, "text-2xl"], [1, "p-4"]], template: function UserReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4)(1, "a-user-search-field", 5);
        \u0275\u0275listener("ngModelChange", function UserReportComponent_Template_a_user_search_field_ngModelChange_1_listener($event) {
          return ctx.setOptions({ user: $event || null });
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(2, "date-range-field", 6)(3, "input", 7, 0);
        \u0275\u0275listener("ngModelChange", function UserReportComponent_Template_input_ngModelChange_3_listener($event) {
          return $event ? ctx.setStartDate($event) : "";
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(5, "input", 7, 1);
        \u0275\u0275listener("ngModelChange", function UserReportComponent_Template_input_ngModelChange_5_listener($event) {
          return $event ? ctx.setEndDate($event) : "";
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "div", 8);
        \u0275\u0275elementStart(8, "button", 9);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275listener("click", function UserReportComponent_Template_button_click_8_listener() {
          return ctx.downloadReport();
        });
        \u0275\u0275elementStart(10, "icon");
        \u0275\u0275text(11, "download");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "button", 9);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275listener("click", function UserReportComponent_Template_button_click_12_listener() {
          return ctx.print();
        });
        \u0275\u0275elementStart(14, "icon");
        \u0275\u0275text(15, "print");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 10)(17, "div", 11);
        \u0275\u0275element(18, "img", 12)(19, "div", 8);
        \u0275\u0275elementStart(20, "div", 13)(21, "h2", 14);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(24, UserReportComponent_Conditional_24_Template, 6, 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(25, UserReportComponent_Conditional_25_Template, 5, 4, "div", 15)(26, UserReportComponent_Conditional_26_Template, 4, 3, "div", 16)(27, UserReportComponent_Conditional_27_Template, 17, 45);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_16_0;
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.options().user);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("week_start", ctx.week_start)("from", 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.options().start);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.options().end);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", !ctx.rows().length)("matTooltip", \u0275\u0275pipeBind1(9, 13, "APP.CONCIERGE.REPORTS_DOWNLOAD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.rows().length)("matTooltip", \u0275\u0275pipeBind1(13, 15, "APP.CONCIERGE.REPORTS_PRINT"));
        \u0275\u0275advance(6);
        \u0275\u0275property("source", ctx.logo()?.src || ctx.logo());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 17, "APP.CONCIERGE.REPORTS_USER_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_16_0 = ctx.options().user) ? 24 : -1, tmp_16_0);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 25 : !ctx.options().user ? 26 : 27);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatTooltipModule,
      MatTooltip,
      AuthenticatedImageDirective,
      IconComponent,
      SimpleTableComponent,
      DateRangeFieldComponent,
      UserSearchFieldComponent,
      DatePipe,
      DurationPipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nbutton[icon][disabled][_ngcontent-%COMP%] {\n  background-color: var(--%NS%neutral) !important;\n}\n/*# sourceMappingURL=user-report.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserReportComponent, [{
    type: Component,
    args: [{ selector: "[user-report]", template: `
        <div
            class="border-base-200 bg-base-100 z-20 flex h-20 w-full items-center space-x-2 border-b p-4 print:hidden"
        >
            <a-user-search-field
                class="w-64"
                [ngModel]="options().user"
                (ngModelChange)="setOptions({ user: $event || null })"
            ></a-user-search-field>
            <date-range-field [week_start]="week_start" [from]="0">
                <input
                    #startDate
                    [ngModel]="options().start"
                    (ngModelChange)="$event ? setStartDate($event) : ''"
                />
                <input
                    #endDate
                    [ngModel]="options().end"
                    (ngModelChange)="$event ? setEndDate($event) : ''"
                />
            </date-range-field>
            <div class="flex-1"></div>
            <button
                icon
                matRipple
                class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                [disabled]="!rows().length"
                [matTooltip]="'APP.CONCIERGE.REPORTS_DOWNLOAD' | translate"
                (click)="downloadReport()"
            >
                <icon>download</icon>
            </button>
            <button
                icon
                matRipple
                class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                [disabled]="!rows().length"
                [matTooltip]="'APP.CONCIERGE.REPORTS_PRINT' | translate"
                (click)="print()"
            >
                <icon>print</icon>
            </button>
        </div>
        <div
            class="relative h-1/2 w-full flex-1 overflow-auto print:h-auto print:overflow-visible"
        >
            <div class="bg-base-200 m-4 flex items-center rounded-sm p-4">
                <img auth class="h-12" [source]="logo()?.src || logo()" />
                <div class="flex-1"></div>
                <div class="px-2 text-right">
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.REPORTS_USER_HEADER' | translate }}
                    </h2>
                    @if (options().user; as user) {
                        <p class="text-sm opacity-60">
                            {{ user.name }} ({{ user.email }})
                        </p>
                        <p class="text-sm opacity-60">
                            {{ options().start | date: 'mediumDate' }} &ndash;
                            {{ options().end | date: 'mediumDate' }}
                        </p>
                    }
                </div>
            </div>
            @if (loading()) {
                <div class="flex h-full w-full flex-col items-center p-8">
                    <mat-spinner [diameter]="32" class="mb-4"></mat-spinner>
                    <p class="opacity-30">
                        {{ 'APP.CONCIERGE.REPORTS_LOADING' | translate }}
                    </p>
                </div>
            } @else if (!options().user) {
                <div
                    class="screen-only flex h-full w-full flex-col items-center p-8"
                >
                    <p class="opacity-30">
                        {{ 'APP.CONCIERGE.REPORTS_USER_EMPTY' | translate }}
                    </p>
                </div>
            } @else {
                <div
                    class="border-base-200 bg-base-100 m-4 flex items-center justify-center space-x-2 rounded-sm border p-4"
                >
                    @for (total of totals(); track total.name) {
                        <div class="flex flex-1 flex-col items-center">
                            <h3 class="text-sm">
                                {{ total.name | translate }}
                            </h3>
                            <p class="text-2xl">{{ total.count }}</p>
                        </div>
                    }
                </div>
                <div
                    class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
                >
                    <simple-table
                        class="block w-full text-sm"
                        [data]="rows()"
                        [columns]="[
                            {
                                key: 'type_name',
                                name: 'COMMON.TYPE' | translate,
                            },
                            { key: 'name', name: 'FORM.NAME' | translate },
                            {
                                key: 'location',
                                name: 'COMMON.LOCATION' | translate,
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
                                key: 'checked_in',
                                name: 'COMMON.CHECKED_IN' | translate,
                            },
                            {
                                key: 'status',
                                name: 'COMMON.STATUS' | translate,
                            },
                        ]"
                        [sortable]="true"
                        [page_size]="printing() ? 0 : 20"
                        [empty_message]="
                            'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                        "
                    ></simple-table>
                    <ng-template #date_template let-row="row">
                        <div class="p-4">
                            {{
                                row.date
                                    | date
                                        : (row.all_day
                                              ? 'mediumDate'
                                              : 'MMM d, y, ' + time_format)
                            }}
                        </div>
                    </ng-template>
                    <ng-template #duration_template let-row="row">
                        <div class="p-4">
                            {{
                                row.all_day
                                    ? ('COMMON.ALL_DAY' | translate)
                                    : (row.duration | duration: true)
                            }}
                        </div>
                    </ng-template>
                </div>
            }
        </div>
    `, providers: [UserReportService], imports: [
      DatePipe,
      FormsModule,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      AuthenticatedImageDirective,
      DurationPipe,
      IconComponent,
      SimpleTableComponent,
      TranslatePipe,
      DateRangeFieldComponent,
      UserSearchFieldComponent
    ], styles: ["/* angular:styles/component:css;3c811c74d433396486d6ba5cbbae385af38d7c72fc236eb6dc7fe20c2c70b1da;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/user/user-report.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nbutton[icon][disabled] {\n  background-color: var(--neutral) !important;\n}\n/*# sourceMappingURL=user-report.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserReportComponent, { className: "UserReportComponent", filePath: "apps/concierge/src/app/reports/user/user-report.component.ts", lineNumber: 214 });
})();
export {
  UserReportComponent
};
//# debugId=2f858cd4-2f00-524e-8016-bcc0a5cb09a1
//# sourceMappingURL=user-report.component-RVBDXJKF.js.map
