import {
  ParkingStateService
} from "./chunk-CMVPSXBK.js";
import {
  AsyncHandler,
  AsyncPipe,
  CommonModule,
  Component,
  DatePipe,
  IconComponent,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatProgressBar,
  MatProgressBarModule,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  SettingsService,
  SimpleTableComponent,
  TranslatePipe,
  combineLatest,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
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
  ɵɵpureFunction8,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-I4HSLPYT.js";

// apps/concierge/src/app/parking/parking-bookings-list.component.ts
var _c0 = (a0, a1) => ({ key: "state", name: a0, content: a1, size: "4.75rem", sortable: false });
var _c1 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c2 = (a0) => ({ key: "asset_name", name: a0 });
var _c3 = (a0, a1) => ({ key: "user_name", name: a0, content: a1 });
var _c4 = (a0, a1) => ({ key: "booked_by_name", name: a0, content: a1 });
var _c5 = (a0, a1) => ({ key: "plate_number", name: a0, content: a1, size: "10rem", sortable: false });
var _c6 = (a0, a1) => ({ key: "status", name: a0, content: a1, size: "9.5rem" });
var _c7 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
var _c9 = (a0) => ({ time: a0 });
function ParkingBookingsListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r1.all_day || row_r1.duration > 12 * 60 ? \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY") : \u0275\u0275pipeBind2(3, 3, row_r1.date, ctx_r1.time_format) + " - " + \u0275\u0275pipeBind2(4, 6, row_r1.date_end, ctx_r1.time_format), " ");
  }
}
function ParkingBookingsListComponent_ng_template_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.user_email, " ");
  }
}
function ParkingBookingsListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ParkingBookingsListComponent_ng_template_15_Conditional_3_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.user_name || row_r3.user_email);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.user_name && row_r3.user_email ? 3 : -1);
  }
}
function ParkingBookingsListComponent_ng_template_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.booked_by_email, " ");
  }
}
function ParkingBookingsListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ParkingBookingsListComponent_ng_template_17_Conditional_3_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.booked_by_name || row_r4.booked_by_email);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r4.booked_by_name && row_r4.booked_by_email ? 3 : -1);
  }
}
function ParkingBookingsListComponent_ng_template_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(2, 4, "APP.CONCIERGE.PARKING_CHECKED_OUT_AT", \u0275\u0275pureFunction1(7, _c9, \u0275\u0275pipeBind2(1, 1, row_r5.checked_out_at * 1e3, ctx_r1.time_format))));
  }
}
function ParkingBookingsListComponent_ng_template_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "question_mark");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.PARKING_NOT_CHECKED_IN"));
  }
}
function ParkingBookingsListComponent_ng_template_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.PARKING_CHECKED_IN"));
  }
}
function ParkingBookingsListComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ParkingBookingsListComponent_ng_template_19_Conditional_0_Template, 5, 9, "div", 14);
    \u0275\u0275conditionalCreate(1, ParkingBookingsListComponent_ng_template_19_Conditional_1_Template, 4, 3, "div", 15);
    \u0275\u0275conditionalCreate(2, ParkingBookingsListComponent_ng_template_19_Conditional_2_Template, 4, 3, "div", 16);
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275conditional(!(row_r5 == null ? null : row_r5.checked_in) && row_r5.checked_out_at ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(row_r5 == null ? null : row_r5.checked_in) && !row_r5.checked_out_at ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((row_r5 == null ? null : row_r5.checked_in) ? 2 : -1);
  }
}
function ParkingBookingsListComponent_ng_template_21_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.EMPTY"), " ");
  }
}
function ParkingBookingsListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ParkingBookingsListComponent_ng_template_21_Conditional_2_Template, 3, 3, "span", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6 == null ? null : row_r6.extension_data == null ? null : row_r6.extension_data.plate_number, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(row_r6 == null ? null : row_r6.extension_data == null ? null : row_r6.extension_data.plate_number) ? 2 : -1);
  }
}
function ParkingBookingsListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "button", 20)(2, "div", 21)(3, "div", 22);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 23);
    \u0275\u0275text(7, "arrow_drop_down");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "mat-menu", null, 7)(10, "button", 24);
    \u0275\u0275listener("click", function ParkingBookingsListComponent_ng_template_23_Template_button_click_10_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.approve(row_r8));
    });
    \u0275\u0275elementStart(11, "div", 25)(12, "icon", 23);
    \u0275\u0275text(13, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 26);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 24);
    \u0275\u0275listener("click", function ParkingBookingsListComponent_ng_template_23_Template_button_click_17_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reject(row_r8));
    });
    \u0275\u0275elementStart(18, "div", 25)(19, "icon", 23);
    \u0275\u0275text(20, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 26);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    const menu_r9 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success-content", (row_r8 == null ? null : row_r8.status) === "approved")("bg-success", (row_r8 == null ? null : row_r8.status) === "approved")("text-error-content", (row_r8 == null ? null : row_r8.status) === "declined")("bg-error", (row_r8 == null ? null : row_r8.status) === "declined")("text-neutral-content", (row_r8 == null ? null : row_r8.status) === "ended")("bg-neutral", (row_r8 == null ? null : row_r8.status) === "ended")("opacity-30", (row_r8 == null ? null : row_r8.status) === "ended")("text-warning-content", (row_r8 == null ? null : row_r8.status) === "tentative")("bg-warning", (row_r8 == null ? null : row_r8.status) === "tentative");
    \u0275\u0275property("matMenuTriggerFor", menu_r9)("disabled", (row_r8 == null ? null : row_r8.status) === "ended");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 23, (row_r8 == null ? null : row_r8.status) === "ended" ? "APP.CONCIERGE.BOOKING_STATUS_ENDED" : (row_r8 == null ? null : row_r8.status) === "approved" ? "APP.CONCIERGE.BOOKING_STATUS_APPROVED" : (row_r8 == null ? null : row_r8.status) === "declined" ? "APP.CONCIERGE.BOOKING_STATUS_DECLINED" : "APP.CONCIERGE.BOOKING_STATUS_PENDING"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 25, "APP.CONCIERGE.PARKING_APPROVE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 27, "APP.CONCIERGE.PARKING_DECLINE"), " ");
  }
}
function ParkingBookingsListComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "button", 28);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ParkingBookingsListComponent_ng_template_25_Template_button_click_1_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editReservation(row_r11));
    });
    \u0275\u0275elementStart(3, "icon", 23);
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r11 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("disabled", row_r11.checked_in || row_r11.state === "in_progress" || row_r11.status === "ended" || row_r11.instance)("matTooltip", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.PARKING_EDIT"));
  }
}
var _ParkingBookingsListComponent = class _ParkingBookingsListComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ParkingStateService);
    this._settings = inject(SettingsService);
    this.events = this._state.bookings;
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.filtered_events = combineLatest([
      this._state.bookings,
      this.options
    ]).pipe(map(([booking_list, { search }]) => {
      const s = search.toLowerCase();
      return !s ? booking_list : booking_list.filter((b) => b.user_name.toLowerCase().includes(s) || b.user_email.toLowerCase().includes(s) || b.booked_by_name.toLowerCase().includes(s) || b.booked_by_email.toLowerCase().includes(s) || b.asset_name.toLowerCase().includes(s));
    }));
    this.reject = (e) => this._state.rejectBooking(e);
    this.approve = (e) => this._state.approveBooking(e);
    this.editReservation = (e) => this._state.editReservation(e);
  }
  get time_format() {
    return this._settings.time_format;
  }
  ngOnInit() {
    this.subscription("poll", this._state.startPolling());
  }
};
_ParkingBookingsListComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ParkingBookingsListComponent_BaseFactory;
  return function ParkingBookingsListComponent_Factory(__ngFactoryType__) {
    return (\u0275ParkingBookingsListComponent_BaseFactory || (\u0275ParkingBookingsListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingBookingsListComponent)))(__ngFactoryType__ || _ParkingBookingsListComponent);
  };
})();
_ParkingBookingsListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingBookingsListComponent, selectors: [["parking-bookings-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 28, vars: 58, consts: [["date_template", ""], ["person_template", ""], ["host_template", ""], ["state_template", ""], ["plate_template", ""], ["status_template", ""], ["action_template", ""], ["menu", "matMenu"], [1, "sticky", "left-0", "w-full"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "block", "min-w-[76rem]", "text-sm", 3, "data", "columns", "filter", "sortable", "empty_message"], [1, "h-20", "w-full"], [1, "px-4", "py-2"], [1, "text-xs", "opacity-30"], ["matTooltipPosition", "right", 1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "bg-base-300", "text-2xl", "text-base-100", 3, "matTooltip"], ["matTooltipPosition", "right", 1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "bg-warning", "text-2xl", "text-warning-content", 3, "matTooltip"], ["matTooltipPosition", "right", 1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "bg-success", "text-2xl", "text-success-content", 3, "matTooltip"], [1, "p-4", "font-mono", "text-sm", "uppercase"], [1, "opacity-30"], [1, "px-4"], ["matRipple", "", 1, "h-10", "w-[7.5rem]", "rounded-3xl", "border-none", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "space-x-2", "pl-4", "pr-2"], [1, "flex-1", "text-left"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], [1, "mx-auto", "flex", "items-center", "justify-end", "space-x-2"], ["icon", "", "matRipple", "", 3, "click", "disabled", "matTooltip"]], template: function ParkingBookingsListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 8);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275elementStart(2, "div", 9);
    \u0275\u0275element(3, "simple-table", 10);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "async");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ParkingBookingsListComponent_ng_template_13_Template, 5, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, ParkingBookingsListComponent_ng_template_15_Template, 4, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(17, ParkingBookingsListComponent_ng_template_17_Template, 4, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(19, ParkingBookingsListComponent_ng_template_19_Template, 3, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(21, ParkingBookingsListComponent_ng_template_21_Template, 3, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(23, ParkingBookingsListComponent_ng_template_23_Template, 24, 29, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(25, ParkingBookingsListComponent_ng_template_25_Template, 5, 4, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(27, "div", 11);
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_10_0;
    const date_template_r12 = \u0275\u0275reference(14);
    const person_template_r13 = \u0275\u0275reference(16);
    const host_template_r14 = \u0275\u0275reference(18);
    const state_template_r15 = \u0275\u0275reference(20);
    const plate_template_r16 = \u0275\u0275reference(22);
    const status_template_r17 = \u0275\u0275reference(24);
    const action_template_r18 = \u0275\u0275reference(26);
    \u0275\u0275classProp("opacity-0", !((tmp_7_0 = \u0275\u0275pipeBind1(1, 7, ctx.loading)) == null ? null : tmp_7_0.includes("bookings")));
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx.filtered_events)("columns", \u0275\u0275pureFunction8(49, _c8, \u0275\u0275pureFunction2(27, _c0, \u0275\u0275pipeBind1(4, 9, "COMMON.STATUS_BUSY"), state_template_r15), \u0275\u0275pureFunction2(30, _c1, \u0275\u0275pipeBind1(5, 11, "FORM.TIME"), date_template_r12), \u0275\u0275pureFunction1(33, _c2, \u0275\u0275pipeBind1(6, 13, "APP.CONCIERGE.PARKING_BAY_NUMBER")), \u0275\u0275pureFunction2(35, _c3, \u0275\u0275pipeBind1(7, 15, "APP.CONCIERGE.PARKING_RESERVED_FOR"), person_template_r13), \u0275\u0275pureFunction2(38, _c4, \u0275\u0275pipeBind1(8, 17, "APP.CONCIERGE.PARKING_RESERVED_BY"), host_template_r14), \u0275\u0275pureFunction2(41, _c5, \u0275\u0275pipeBind1(9, 19, "EXPLORE.PARKING_PLATE_NUMBER"), plate_template_r16), \u0275\u0275pureFunction2(44, _c6, \u0275\u0275pipeBind1(10, 21, "COMMON.STATUS"), status_template_r17), \u0275\u0275pureFunction1(47, _c7, action_template_r18)))("filter", (tmp_10_0 = \u0275\u0275pipeBind1(11, 23, ctx.options)) == null ? null : tmp_10_0.search)("sortable", true)("empty_message", \u0275\u0275pipeBind1(12, 25, "APP.CONCIERGE.PARKING_BOOKINGS_EMPTY"));
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  MatProgressBarModule,
  MatProgressBar,
  SimpleTableComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  IconComponent,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var ParkingBookingsListComponent = _ParkingBookingsListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingBookingsListComponent, [{
    type: Component,
    args: [{ selector: "parking-bookings-list", template: `
        <mat-progress-bar
            [class.opacity-0]="!(loading | async)?.includes('bookings')"
            class="sticky left-0 w-full"
        />
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-[76rem] text-sm"
                [data]="filtered_events"
                [columns]="[
                    {
                        key: 'state',
                        name: 'COMMON.STATUS_BUSY' | translate,
                        content: state_template,
                        size: '4.75rem',
                        sortable: false,
                    },
                    {
                        key: 'date',
                        name: 'FORM.TIME' | translate,
                        content: date_template,
                    },
                    {
                        key: 'asset_name',
                        name: 'APP.CONCIERGE.PARKING_BAY_NUMBER' | translate,
                    },
                    {
                        key: 'user_name',
                        name: 'APP.CONCIERGE.PARKING_RESERVED_FOR' | translate,
                        content: person_template,
                    },
                    {
                        key: 'booked_by_name',
                        name: 'APP.CONCIERGE.PARKING_RESERVED_BY' | translate,
                        content: host_template,
                    },
                    {
                        key: 'plate_number',
                        name: 'EXPLORE.PARKING_PLATE_NUMBER' | translate,
                        content: plate_template,
                        size: '10rem',
                        sortable: false,
                    },
                    {
                        key: 'status',
                        name: 'COMMON.STATUS' | translate,
                        content: status_template,
                        size: '9.5rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '3.5rem',
                        sortable: false,
                    },
                ]"
                [filter]="(options | async)?.search"
                [sortable]="true"
                [empty_message]="
                    'APP.CONCIERGE.PARKING_BOOKINGS_EMPTY' | translate
                "
            />
        </div>
        <ng-template #date_template let-row="row">
            <div class="px-4 py-2">
                {{
                    row.all_day || row.duration > 12 * 60
                        ? ('COMMON.ALL_DAY' | translate)
                        : (row.date | date: time_format) +
                          ' - ' +
                          (row.date_end | date: time_format)
                }}
            </div>
        </ng-template>
        <ng-template #person_template let-row="row">
            <div class="px-4 py-2">
                <div>{{ row.user_name || row.user_email }}</div>
                @if (row.user_name && row.user_email) {
                    <div class="text-xs opacity-30">
                        {{ row.user_email }}
                    </div>
                }
            </div>
        </ng-template>
        <ng-template #host_template let-row="row">
            <div class="px-4 py-2">
                <div>{{ row.booked_by_name || row.booked_by_email }}</div>
                @if (row.booked_by_name && row.booked_by_email) {
                    <div class="text-xs opacity-30">
                        {{ row.booked_by_email }}
                    </div>
                }
            </div>
        </ng-template>
        <ng-template #state_template let-row="row">
            @if (!row?.checked_in && row.checked_out_at) {
                <div
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded bg-base-300 text-2xl text-base-100"
                    [matTooltip]="
                        'APP.CONCIERGE.PARKING_CHECKED_OUT_AT'
                            | translate
                                : {
                                      time:
                                          (row.checked_out_at * 1000
                                          | date: time_format),
                                  }
                    "
                    matTooltipPosition="right"
                >
                    <icon>done</icon>
                </div>
            }
            @if (!row?.checked_in && !row.checked_out_at) {
                <div
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded bg-warning text-2xl text-warning-content"
                    [matTooltip]="
                        'APP.CONCIERGE.PARKING_NOT_CHECKED_IN' | translate
                    "
                    matTooltipPosition="right"
                >
                    <icon>question_mark</icon>
                </div>
            }
            @if (row?.checked_in) {
                <div
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded bg-success text-2xl text-success-content"
                    [matTooltip]="
                        'APP.CONCIERGE.PARKING_CHECKED_IN' | translate
                    "
                    matTooltipPosition="right"
                >
                    <icon>done</icon>
                </div>
            }
        </ng-template>
        <ng-template #plate_template let-row="row">
            <div class="p-4 font-mono text-sm uppercase">
                {{ row?.extension_data?.plate_number }}
                @if (!row?.extension_data?.plate_number) {
                    <span class="opacity-30">
                        {{ 'COMMON.EMPTY' | translate }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #status_template let-row="row">
            <div class="px-4">
                <button
                    matRipple
                    class="h-10 w-[7.5rem] rounded-3xl border-none"
                    [class.text-success-content]="row?.status === 'approved'"
                    [class.bg-success]="row?.status === 'approved'"
                    [class.text-error-content]="row?.status === 'declined'"
                    [class.bg-error]="row?.status === 'declined'"
                    [class.text-neutral-content]="row?.status === 'ended'"
                    [class.bg-neutral]="row?.status === 'ended'"
                    [class.opacity-30]="row?.status === 'ended'"
                    [class.text-warning-content]="row?.status === 'tentative'"
                    [class.bg-warning]="row?.status === 'tentative'"
                    [matMenuTriggerFor]="menu"
                    [disabled]="row?.status === 'ended'"
                >
                    <div class="flex items-center space-x-2 pl-4 pr-2">
                        <div class="flex-1 text-left">
                            {{
                                (row?.status === 'ended'
                                    ? 'APP.CONCIERGE.BOOKING_STATUS_ENDED'
                                    : row?.status === 'approved'
                                      ? 'APP.CONCIERGE.BOOKING_STATUS_APPROVED'
                                      : row?.status === 'declined'
                                        ? 'APP.CONCIERGE.BOOKING_STATUS_DECLINED'
                                        : 'APP.CONCIERGE.BOOKING_STATUS_PENDING'
                                ) | translate
                            }}
                        </div>
                        <icon class="text-2xl">arrow_drop_down</icon>
                    </div>
                </button>
            </div>
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="approve(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">event_available</icon>
                        <div class="pr-2">
                            {{ 'APP.CONCIERGE.PARKING_APPROVE' | translate }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="reject(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">event_busy</icon>
                        <div class="pr-2">
                            {{ 'APP.CONCIERGE.PARKING_DECLINE' | translate }}
                        </div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex items-center justify-end space-x-2">
                <button
                    icon
                    matRipple
                    [disabled]="
                        row.checked_in ||
                        row.state === 'in_progress' ||
                        row.status === 'ended' ||
                        row.instance
                    "
                    [matTooltip]="'APP.CONCIERGE.PARKING_EDIT' | translate"
                    (click)="editReservation(row)"
                >
                    <icon class="text-2xl">edit</icon>
                </button>
            </div>
        </ng-template>
        <div class="h-20 w-full"></div>
    `, imports: [
      CommonModule,
      MatProgressBarModule,
      SimpleTableComponent,
      TranslatePipe,
      MatRippleModule,
      IconComponent,
      MatMenuModule,
      MatTooltipModule,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingBookingsListComponent, { className: "ParkingBookingsListComponent", filePath: "apps/concierge/src/app/parking/parking-bookings-list.component.ts", lineNumber: 250 });
})();

export {
  ParkingBookingsListComponent
};
//# sourceMappingURL=chunk-4COUZEKF.js.map
