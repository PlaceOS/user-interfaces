import {
  ReportUsageChartsComponent,
  ReportUsageListComponent,
  differenceInDays
} from "./chunk-JAI44JNW.js";
import {
  differenceInBusinessDays
} from "./chunk-GSS7VQRC.js";
import {
  ReportsStateService
} from "./chunk-FT44UUAC.js";
import "./chunk-K2GEOON2.js";
import {
  ReportPageComponent,
  ReportsOptionsComponent
} from "./chunk-JN66JEK6.js";
import {
  ReportMetricGuideComponent
} from "./chunk-IDVSJLIJ.js";
import {
  cappedReportAttendeeCount,
  reportBookableMinutes,
  reportBookingDuration,
  reportQueryOptions
} from "./chunk-BNYZLQSX.js";
import "./chunk-Y4WB74H6.js";
import "./chunk-2YAIQWOT.js";
import "./chunk-ZUUAVPI6.js";
import {
  SimpleTableComponent
} from "./chunk-FVUE3IV6.js";
import "./chunk-ZNRUWCT6.js";
import "./chunk-L3PIF3IF.js";
import "./chunk-O2Q5KAGP.js";
import "./chunk-IL5677XG.js";
import "./chunk-SSIGC455.js";
import "./chunk-AAVRKJYD.js";
import "./chunk-5QQFFETM.js";
import "./chunk-W7NX7DBL.js";
import "./chunk-ZXV7GD5Y.js";
import "./chunk-L6ECGFL2.js";
import "./chunk-I52JNSOJ.js";
import "./chunk-3NOPCA56.js";
import "./chunk-54KE5JKV.js";
import "./chunk-P2TW542U.js";
import "./chunk-OX3RHFRB.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-QWYXFXJS.js";
import "./chunk-G7ZLBZI3.js";
import "./chunk-RIENTTXY.js";
import "./chunk-AIQQ7SMZ.js";
import "./chunk-4KJDXIJS.js";
import {
  SpacePipe
} from "./chunk-ZGXJBQRU.js";
import "./chunk-2ASGLQE5.js";
import {
  TranslatePipe
} from "./chunk-3J2727IM.js";
import "./chunk-4HBLGKU6.js";
import {
  SettingsService
} from "./chunk-ZHHZEV2Q.js";
import {
  IconComponent
} from "./chunk-THFOX4CC.js";
import {
  AsyncHandler,
  downloadFile,
  endOfDay,
  formatDuration,
  jsonToCsv,
  startOfDay,
  unique
} from "./chunk-R4OILVJS.js";
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
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵpureFunctionV,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QAVCSYNX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

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
var _c0 = (a0) => ({ key: "name", name: a0 });
var _c1 = (a0, a1) => ({ key: "capacity", name: a0, content: a1 });
var _c2 = (a0) => ({ key: "booking_count", name: a0 });
var _c3 = (a0) => ({ key: "utilisation", name: a0 });
var _c4 = (a0) => ({ key: "avg_attendees", name: a0 });
var _c5 = (a0, a1) => ({ key: "no_shows", name: a0, show: a1 });
var _c6 = (a0, a1) => ({ key: "min_attendance", name: a0, show: a1 });
var _c7 = (a0, a1) => ({ key: "max_attendance", name: a0, show: a1 });
var _c8 = (a0) => ({ key: "occupancy", name: a0 });
var _c9 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => [a0, a1, a2, a3, a4, a5, a6, a7, a8];
function ReportSpacesSpaceListingComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ReportSpacesSpaceListingComponent_Conditional_5_Template_button_click_0_listener() {
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
var TABLE_METRIC_GUIDE = [
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
      () => this.has_attendance() ? TABLE_METRIC_GUIDE : TABLE_METRIC_GUIDE.filter((item) => item.label !== "No-shows" && item.label !== "Min / Max attendance"),
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportSpacesSpaceListingComponent, selectors: [["report-spaces-space-listing"]], inputs: { print: [1, "print"] }, decls: 20, vars: 63, consts: [["capacity_template", ""], [1, "border-base-200", "bg-base-100", "m-4", "overflow-hidden", "rounded-sm", "border"], [1, "border-base-200", "flex", "items-center", "border-b", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], ["title", "Table column calculations", 3, "items", "inline"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"], [1, "opacity-70"]], template: function ReportSpacesSpaceListingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, ReportSpacesSpaceListingComponent_Conditional_5_Template, 5, 6, "button", 4);
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
        \u0275\u0275property("data", ctx.space_list())("columns", \u0275\u0275pureFunctionV(53, _c9, [\u0275\u0275pureFunction1(31, _c0, \u0275\u0275pipeBind1(8, 11, "FORM.NAME")), \u0275\u0275pureFunction2(33, _c1, \u0275\u0275pipeBind1(9, 13, "COMMON.CAPACITY"), capacity_template_r4), \u0275\u0275pureFunction1(36, _c2, \u0275\u0275pipeBind1(10, 15, "RESOURCE.BOOKINGS")), \u0275\u0275pureFunction1(38, _c3, \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.REPORTS_BOOKED_TIME_UTILISATION")), \u0275\u0275pureFunction1(40, _c4, \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.REPORTS_AVG_BOOKING_INVITES")), \u0275\u0275pureFunction2(42, _c5, \u0275\u0275pipeBind1(13, 21, "APP.CONCIERGE.REPORTS_NO_SHOWS"), ctx.has_attendance()), \u0275\u0275pureFunction2(45, _c6, \u0275\u0275pipeBind1(14, 23, "APP.CONCIERGE.REPORTS_MIN_ATTENDANCE"), ctx.has_attendance()), \u0275\u0275pureFunction2(48, _c7, \u0275\u0275pipeBind1(15, 25, "APP.CONCIERGE.REPORTS_MAX_ATTENDANCE"), ctx.has_attendance()), \u0275\u0275pureFunction1(51, _c8, \u0275\u0275pipeBind1(16, 27, "APP.CONCIERGE.REPORTS_OCCUPANCY"))]))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(17, 29, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
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
                        [attr.aria-label]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
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
                        <span class="opacity-70">{{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSpacesSpaceListingComponent, { className: "ReportSpacesSpaceListingComponent", filePath: "apps/concierge/src/app/reports/spaces/report-spaces-space-listing.component.ts", lineNumber: 180 });
})();

// apps/concierge/src/app/reports/spaces/report-spaces-user-listing.component.ts
var _c02 = (a0) => ({ key: "name", name: a0 });
var _c12 = (a0) => ({ key: "booking_count", name: a0 });
var _c22 = (a0) => ({ key: "avg_attendees", name: a0 });
var _c32 = (a0) => ({ key: "total_time", name: a0 });
var _c42 = (a0) => ({ key: "no_shows", name: a0 });
var _c52 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function ReportSpacesUserListingComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ReportSpacesUserListingComponent_Conditional_5_Template_button_click_0_listener() {
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
var TABLE_METRIC_GUIDE2 = [
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
    this.table_metric_guide = TABLE_METRIC_GUIDE2;
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
        \u0275\u0275conditionalCreate(5, ReportSpacesUserListingComponent_Conditional_5_Template, 5, 6, "button", 3);
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
        \u0275\u0275property("data", ctx.user_list())("columns", \u0275\u0275pureFunction5(33, _c52, \u0275\u0275pureFunction1(23, _c02, \u0275\u0275pipeBind1(8, 11, "FORM.NAME")), \u0275\u0275pureFunction1(25, _c12, \u0275\u0275pipeBind1(9, 13, "RESOURCE.BOOKINGS")), \u0275\u0275pureFunction1(27, _c22, \u0275\u0275pipeBind1(10, 15, "APP.CONCIERGE.REPORTS_AVG_BOOKING_INVITES")), \u0275\u0275pureFunction1(29, _c32, \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.REPORTS_TOTAL_TIME")), \u0275\u0275pureFunction1(31, _c42, \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.REPORTS_NO_SHOWS"))))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(13, 21, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
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
                        [attr.aria-label]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSpacesUserListingComponent, { className: "ReportSpacesUserListingComponent", filePath: "apps/concierge/src/app/reports/spaces/report-spaces-user-listing.component.ts", lineNumber: 114 });
})();

// apps/concierge/src/app/reports/spaces/report-spaces.component.ts
function ReportSpacesComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "placeos-report-metric-guide", 2)(1, "report-spaces-overall")(2, "report-usage-charts", 3)(3, "report-usage-list", 4)(4, "report-spaces-space-listing", 3)(5, "report-spaces-user-listing", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
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
    this._route = inject(ActivatedRoute);
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
  }
  ngOnInit() {
    this._state.setOptions({ type: "events" });
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => this._state.setOptions(reportQueryOptions(params))));
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportSpacesComponent, selectors: [["", "report-spaces", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 4, consts: [["resource_type", "events", 3, "printing", "download", "generate", "loading", "has_data"], ["header", "APP.CONCIERGE.REPORTS_ROOMS_HEADER", 3, "loading", "has_data"], [3, "absolute", "items"], [3, "print"], ["type", "spaces", 3, "print"]], template: function ReportSpacesComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(1, "report-page", 1);
        \u0275\u0275template(2, ReportSpacesComponent_ng_template_2_Template, 6, 6, "ng-template");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("loading", !!ctx.loading())("has_data", ctx.has_data());
        \u0275\u0275advance();
        \u0275\u0275property("loading", !!ctx.loading())("has_data", ctx.has_data());
      }
    }, dependencies: [
      ReportPageComponent,
      ReportsOptionsComponent,
      ReportMetricGuideComponent,
      ReportUsageChartsComponent,
      ReportSpacesOverallComponent,
      ReportUsageListComponent,
      ReportSpacesSpaceListingComponent,
      ReportSpacesUserListingComponent
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
        <report-page
            header="APP.CONCIERGE.REPORTS_ROOMS_HEADER"
            [loading]="!!loading()"
            [has_data]="has_data()"
        >
            <ng-template>
                <placeos-report-metric-guide
                    [absolute]="true"
                    [items]="metric_guide"
                />
                <report-spaces-overall></report-spaces-overall>
                <report-usage-charts [print]="printing()" />
                <report-usage-list type="spaces" [print]="printing()" />
                <report-spaces-space-listing
                    [print]="printing()"
                ></report-spaces-space-listing>
                <report-spaces-user-listing
                    [print]="printing()"
                ></report-spaces-user-listing>
            </ng-template>
        </report-page>
    `, imports: [
      ReportPageComponent,
      ReportsOptionsComponent,
      ReportMetricGuideComponent,
      ReportUsageChartsComponent,
      ReportSpacesOverallComponent,
      ReportUsageListComponent,
      ReportSpacesSpaceListingComponent,
      ReportSpacesUserListingComponent
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/spaces/report-spaces.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=report-spaces.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSpacesComponent, { className: "ReportSpacesComponent", filePath: "apps/concierge/src/app/reports/spaces/report-spaces.component.ts", lineNumber: 98 });
})();
export {
  ReportSpacesComponent
};
//# debugId=edb03e9a-632b-5f11-a74d-948748cdeb7d
//# sourceMappingURL=report-spaces.component-BCN7QYE3.js.map
