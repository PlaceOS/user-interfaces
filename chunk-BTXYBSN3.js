import {
  LockerStateService
} from "./chunk-GUUXBIRX.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  DatePipe,
  IconComponent,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  SettingsService,
  SimpleTableComponent,
  TranslatePipe,
  __spreadProps,
  __spreadValues,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
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
  ɵɵpureFunction7,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-Z5DSMDUT.js";

// apps/concierge/src/app/lockers/locker-bookings.component.ts
var _c0 = (a0, a1) => ({ key: "date", name: a0, content: a1, size: "4rem" });
var _c1 = (a0, a1) => ({ key: "date", name: a0, content: a1, size: "9rem" });
var _c2 = (a0, a1) => ({ key: "user_name", name: a0, content: a1 });
var _c3 = (a0) => ({ key: "group", name: a0 });
var _c4 = (a0, a1) => ({ key: "asset_name", name: a0, content: a1 });
var _c5 = (a0) => ({ key: "approver_name", name: a0 });
var _c6 = (a0, a1) => ({ key: "status", name: a0, content: a1, size: "11rem" });
var _c7 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
function LockerBookingsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const date_r1 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, date_r1, "MMM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 5, date_r1, "dd"));
  }
}
function LockerBookingsComponent_ng_template_15_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext(2).row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, row_r2.date, ctx_r2.time_format), " \u2013 ", \u0275\u0275pipeBind2(2, 5, row_r2.date_end, ctx_r2.time_format), " ");
  }
}
function LockerBookingsComponent_ng_template_15_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.ALL_DAY"), " ");
  }
}
function LockerBookingsComponent_ng_template_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275conditionalCreate(1, LockerBookingsComponent_ng_template_15_Conditional_1_Conditional_1_Template, 3, 8);
    \u0275\u0275conditionalCreate(2, LockerBookingsComponent_ng_template_15_Conditional_1_Conditional_2_Template, 2, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275conditional(!(row_r2.all_day || row_r2.duration > 12 * 60) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r2.all_day || row_r2.duration > 12 * 60 ? 2 : -1);
  }
}
function LockerBookingsComponent_ng_template_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, row_r2.status === "ended" ? "APP.CONCIERGE.BOOKING_ENDED" : "APP.CONCIERGE.BOOKING_EXPIRED"), " ");
  }
}
function LockerBookingsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275conditionalCreate(1, LockerBookingsComponent_ng_template_15_Conditional_1_Template, 3, 2, "div", 14);
    \u0275\u0275conditionalCreate(2, LockerBookingsComponent_ng_template_15_Conditional_2_Template, 3, 3, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r2.status !== "declined" && !row_r2.deleted && row_r2.status !== "ended" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r2.status === "declined" || row_r2.deleted || row_r2.status === "ended" ? 2 : -1);
  }
}
function LockerBookingsComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.asset_name || row_r4.asset_id, " ");
  }
}
function LockerBookingsComponent_ng_template_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5.user_email, " ");
  }
}
function LockerBookingsComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, LockerBookingsComponent_ng_template_19_Conditional_3_Template, 2, 1, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r5.user_name || row_r5.user_email || row_r5.booked_by_name || row_r5.booked_by_email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r5.user_name ? 3 : -1);
  }
}
function LockerBookingsComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 21)(2, "div", 22)(3, "div", 23);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 24);
    \u0275\u0275text(7, " arrow_drop_down ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "mat-menu", null, 6)(10, "button", 25);
    \u0275\u0275listener("click", function LockerBookingsComponent_ng_template_21_Template_button_click_10_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.approve(row_r7));
    });
    \u0275\u0275elementStart(11, "div", 26)(12, "icon", 24);
    \u0275\u0275text(13, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 27);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 25);
    \u0275\u0275listener("click", function LockerBookingsComponent_ng_template_21_Template_button_click_17_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reject(row_r7));
    });
    \u0275\u0275elementStart(18, "div", 26)(19, "icon", 24);
    \u0275\u0275text(20, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 27);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    const menu_r8 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success-content!", (row_r7 == null ? null : row_r7.status) === "approved")("bg-success!", (row_r7 == null ? null : row_r7.status) === "approved")("text-error-content!", (row_r7 == null ? null : row_r7.status) === "declined")("bg-error!", (row_r7 == null ? null : row_r7.status) === "declined")("text-neutral-content!", (row_r7 == null ? null : row_r7.status) === "ended")("bg-neutral!", (row_r7 == null ? null : row_r7.status) === "ended")("opacity-30", (row_r7 == null ? null : row_r7.status) === "ended");
    \u0275\u0275property("matMenuTriggerFor", menu_r8)("disabled", (row_r7 == null ? null : row_r7.status) === "ended");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 19, (row_r7 == null ? null : row_r7.status) === "ended" ? "APP.CONCIERGE.BOOKING_STATUS_ENDED" : (row_r7 == null ? null : row_r7.status) === "approved" ? "APP.CONCIERGE.BOOKING_STATUS_APPROVED" : (row_r7 == null ? null : row_r7.status) === "declined" ? "APP.CONCIERGE.BOOKING_STATUS_DECLINED" : "APP.CONCIERGE.BOOKING_STATUS_PENDING"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 21, "APP.CONCIERGE.LOCKERS_APPROVE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 23, "APP.CONCIERGE.LOCKERS_DECLINE"), " ");
  }
}
function LockerBookingsComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 28)(2, "div", 22)(3, "div", 23);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 24);
    \u0275\u0275text(7, " arrow_drop_down ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "mat-menu", null, 7)(10, "button", 25);
    \u0275\u0275listener("click", function LockerBookingsComponent_ng_template_23_Template_button_click_10_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.checkin(row_r10, true));
    });
    \u0275\u0275elementStart(11, "div", 26)(12, "icon", 24);
    \u0275\u0275text(13, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 25);
    \u0275\u0275listener("click", function LockerBookingsComponent_ng_template_23_Template_button_click_17_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.checkin(row_r10, false));
    });
    \u0275\u0275elementStart(18, "div", 26)(19, "icon", 24);
    \u0275\u0275text(20, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r11 = ctx.data;
    const row_r10 = ctx.row;
    const checkinMenu_r12 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-neutral!", !data_r11)("text-neutral-content!", !data_r11)("bg-success!", data_r11)("text-success-content!", data_r11)("opacity-30", row_r10.status === "ended");
    \u0275\u0275property("matMenuTriggerFor", checkinMenu_r12)("disabled", row_r10.status === "ended")("matTooltip", row_r10.status === "ended" ? "Locker booking has ended" : "Check-in or check-out locker");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 16, data_r11 ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 18, "COMMON.CHECK_IN"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 20, "COMMON.CHECK_OUT"));
  }
}
function LockerBookingsComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function LockerBookingsComponent_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadMore());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LOAD_MORE"), " ");
  }
}
var _LockerBookingsComponent = class _LockerBookingsComponent {
  constructor() {
    this._state = inject(LockerStateService);
    this._settings = inject(SettingsService);
    this.filters = this._state.filters;
    this.search = this._state.search;
    this.has_more_pages = this._state.has_more_pages;
    this.bookings = this._state.filtered_bookings.pipe(map((i) => i.map((booking) => __spreadProps(__spreadValues({}, booking), {
      end: booking.date + booking.duration * 60 * 1e3
    }))));
    this.loadMore = () => this._state.nextPage();
    this.checkin = (d, s) => this.runMethod("checkin", async () => {
      await this._state.checkinLocker(d, s);
      d.checked_in = s ?? true;
    });
    this.approve = (d) => this.runMethod("approve", async () => this._state.approveLocker(d));
    this.reject = (d) => this.runMethod("reject", async () => this._state.rejectLocker(d));
  }
  get time_format() {
    return this._settings.time_format;
  }
  async runMethod(name, fn) {
    this.loading = name;
    await fn().catch((i) => null);
    this.loading = "";
  }
};
_LockerBookingsComponent.\u0275fac = function LockerBookingsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockerBookingsComponent)();
};
_LockerBookingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerBookingsComponent, selectors: [["locker-bookings"]], decls: 26, vars: 57, consts: [["date_template", ""], ["period_template", ""], ["locker_template", ""], ["user_template", ""], ["status_template", ""], ["option_template", ""], ["menu", "matMenu"], ["checkinMenu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "block", "w-full", "min-w-[72rem]", "flex-1", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["btn", "", "matRipple", "", 1, "absolute", "bottom-2", "left-4", "z-20", "w-32"], [1, "flex", "w-full", "flex-col", "items-center", "justify-center", "py-2"], [1, "opacity-60"], [1, "text-xl"], [1, "p-2"], [1, "bg-error", "rounded-3xl", "px-4", "py-2", "text-xs", "text-white"], [1, "p-4"], [1, "flex", "flex-col", "justify-center", "px-4", "py-2"], [1, "select-all"], [1, "text-xs", "opacity-30", "select-all"], [1, "px-2"], ["matRipple", "", 1, "bg-warning", "text-warning-content", "h-10", "w-30", "rounded-3xl", "border-none", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "space-x-2", "pr-2", "pl-4"], [1, "flex-1", "text-left"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], ["matRipple", "", 1, "bg-warning", "text-warning-content", "h-10", "w-24", "rounded-3xl", "border-none", 3, "matMenuTriggerFor", "disabled", "matTooltip"], ["btn", "", "matRipple", "", 1, "absolute", "bottom-2", "left-4", "z-20", "w-32", 3, "click"]], template: function LockerBookingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275elementStart(2, "div", 8);
    \u0275\u0275element(3, "simple-table", 9);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "async");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275template(13, LockerBookingsComponent_ng_template_13_Template, 7, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, LockerBookingsComponent_ng_template_15_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(17, LockerBookingsComponent_ng_template_17_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(19, LockerBookingsComponent_ng_template_19_Template, 4, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(21, LockerBookingsComponent_ng_template_21_Template, 24, 25, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(23, LockerBookingsComponent_ng_template_23_Template, 24, 22, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, LockerBookingsComponent_Conditional_25_Template, 3, 3, "button", 10);
  }
  if (rf & 2) {
    const date_template_r14 = \u0275\u0275reference(14);
    const period_template_r15 = \u0275\u0275reference(16);
    const locker_template_r16 = \u0275\u0275reference(18);
    const user_template_r17 = \u0275\u0275reference(20);
    const status_template_r18 = \u0275\u0275reference(22);
    const more_pages_r19 = \u0275\u0275pipeBind1(1, 10, ctx.has_more_pages);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pb-16", !ctx.loading && more_pages_r19)("pb-4", !(!ctx.loading && more_pages_r19));
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.bookings)("columns", \u0275\u0275pureFunction7(49, _c7, \u0275\u0275pureFunction2(30, _c0, \u0275\u0275pipeBind1(4, 12, "FORM.DATE"), date_template_r14), \u0275\u0275pureFunction2(33, _c1, \u0275\u0275pipeBind1(5, 14, "FORM.PERIOD"), period_template_r15), \u0275\u0275pureFunction2(36, _c2, \u0275\u0275pipeBind1(6, 16, "COMMON.PERSON"), user_template_r17), \u0275\u0275pureFunction1(39, _c3, \u0275\u0275pipeBind1(7, 18, "COMMON.GROUP")), \u0275\u0275pureFunction2(41, _c4, \u0275\u0275pipeBind1(8, 20, "RESOURCE.LOCKER"), locker_template_r16), \u0275\u0275pureFunction1(44, _c5, \u0275\u0275pipeBind1(9, 22, "APP.CONCIERGE.APPROVER")), \u0275\u0275pureFunction2(46, _c6, \u0275\u0275pipeBind1(10, 24, "COMMON.STATUS"), status_template_r18)))("sortable", true)("page_size", 100)("empty_message", \u0275\u0275pipeBind1(12, 28, \u0275\u0275pipeBind1(11, 26, ctx.search) ? "APP.CONCIERGE.LOCKERS_BOOK_SEARCH_EMPTY" : "APP.CONCIERGE.LOCKERS_BOOK_EMPTY"));
    \u0275\u0275advance(22);
    \u0275\u0275conditional(!ctx.loading && more_pages_r19 ? 25 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  MatRippleModule,
  MatRipple,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatTooltipModule,
  MatTooltip,
  IconComponent,
  TranslatePipe,
  SimpleTableComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=locker-bookings.component.css.map */"] });
var LockerBookingsComponent = _LockerBookingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerBookingsComponent, [{
    type: Component,
    args: [{ selector: "locker-bookings", template: `
        @let more_pages = has_more_pages | async;
        <div
            class="absolute inset-0 overflow-auto px-8"
            [class.pb-16]="!loading && more_pages"
            [class.pb-4]="!(!loading && more_pages)"
        >
            <simple-table
                class="block w-full min-w-[72rem] flex-1 text-sm"
                [data]="bookings"
                [columns]="[
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                        size: '4rem',
                    },
                    {
                        key: 'date',
                        name: 'FORM.PERIOD' | translate,
                        content: period_template,
                        size: '9rem',
                    },
                    {
                        key: 'user_name',
                        name: 'COMMON.PERSON' | translate,
                        content: user_template,
                    },
                    { key: 'group', name: 'COMMON.GROUP' | translate },
                    {
                        key: 'asset_name',
                        name: 'RESOURCE.LOCKER' | translate,
                        content: locker_template,
                    },
                    {
                        key: 'approver_name',
                        name: 'APP.CONCIERGE.APPROVER' | translate,
                    },
                    {
                        key: 'status',
                        name: 'COMMON.STATUS' | translate,
                        content: status_template,
                        size: '11rem',
                    },
                ]"
                [sortable]="true"
                [page_size]="100"
                [empty_message]="
                    ((search | async)
                        ? 'APP.CONCIERGE.LOCKERS_BOOK_SEARCH_EMPTY'
                        : 'APP.CONCIERGE.LOCKERS_BOOK_EMPTY'
                    ) | translate
                "
            ></simple-table>
            <ng-template #date_template let-date="data">
                <div
                    class="flex w-full flex-col items-center justify-center py-2"
                >
                    <div class="opacity-60">{{ date | date: 'MMM' }}</div>
                    <div class="text-xl">{{ date | date: 'dd' }}</div>
                </div>
            </ng-template>
            <ng-template #period_template let-row="row">
                <div class="p-2">
                    @if (
                        row.status !== 'declined' &&
                        !row.deleted &&
                        row.status !== 'ended'
                    ) {
                        <div class="p-2">
                            @if (!(row.all_day || row.duration > 12 * 60)) {
                                {{ row.date | date: time_format }} &ndash;
                                {{ row.date_end | date: time_format }}
                            }
                            @if (row.all_day || row.duration > 12 * 60) {
                                {{ 'COMMON.ALL_DAY' | translate }}
                            }
                        </div>
                    }
                    @if (
                        row.status === 'declined' ||
                        row.deleted ||
                        row.status === 'ended'
                    ) {
                        <div
                            class="bg-error rounded-3xl px-4 py-2 text-xs text-white"
                        >
                            {{
                                (row.status === 'ended'
                                    ? 'APP.CONCIERGE.BOOKING_ENDED'
                                    : 'APP.CONCIERGE.BOOKING_EXPIRED'
                                ) | translate
                            }}
                        </div>
                    }
                </div>
            </ng-template>
            <ng-template #locker_template let-row="row">
                <div class="p-4">
                    {{ row.asset_name || row.asset_id }}
                </div>
            </ng-template>
            <ng-template #user_template let-row="row">
                <div class="flex flex-col justify-center px-4 py-2">
                    <div class="select-all">
                        {{
                            row.user_name ||
                                row.user_email ||
                                row.booked_by_name ||
                                row.booked_by_email
                        }}
                    </div>
                    @if (row.user_name) {
                        <div class="text-xs opacity-30 select-all">
                            {{ row.user_email }}
                        </div>
                    }
                </div>
            </ng-template>
            <ng-template #status_template let-row="row">
                <div class="px-2">
                    <button
                        matRipple
                        class="bg-warning text-warning-content h-10 w-30 rounded-3xl border-none"
                        [class.text-success-content!]="
                            row?.status === 'approved'
                        "
                        [class.bg-success!]="row?.status === 'approved'"
                        [class.text-error-content!]="row?.status === 'declined'"
                        [class.bg-error!]="row?.status === 'declined'"
                        [class.text-neutral-content!]="row?.status === 'ended'"
                        [class.bg-neutral!]="row?.status === 'ended'"
                        [class.opacity-30]="row?.status === 'ended'"
                        [matMenuTriggerFor]="menu"
                        [disabled]="row?.status === 'ended'"
                    >
                        <div class="flex items-center space-x-2 pr-2 pl-4">
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
                            <icon class="text-2xl"> arrow_drop_down </icon>
                        </div>
                    </button>
                </div>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="approve(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">event_available</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.LOCKERS_APPROVE' | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="reject(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">event_busy</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.LOCKERS_DECLINE' | translate
                                }}
                            </div>
                        </div>
                    </button>
                </mat-menu>
            </ng-template>
            <ng-template #option_template let-data="data" let-row="row">
                <div class="px-2">
                    <button
                        matRipple
                        class="bg-warning text-warning-content h-10 w-24 rounded-3xl border-none"
                        [matMenuTriggerFor]="checkinMenu"
                        [class.bg-neutral!]="!data"
                        [class.text-neutral-content!]="!data"
                        [class.bg-success!]="data"
                        [class.text-success-content!]="data"
                        [class.opacity-30]="row.status === 'ended'"
                        [disabled]="row.status === 'ended'"
                        [matTooltip]="
                            row.status === 'ended'
                                ? 'Locker booking has ended'
                                : 'Check-in or check-out locker'
                        "
                    >
                        <div class="flex items-center space-x-2 pr-2 pl-4">
                            <div class="flex-1 text-left">
                                {{
                                    (data ? 'COMMON.TRUE' : 'COMMON.FALSE')
                                        | translate
                                }}
                            </div>
                            <icon class="text-2xl"> arrow_drop_down </icon>
                        </div>
                    </button>
                </div>
                <mat-menu #checkinMenu="matMenu">
                    <button mat-menu-item (click)="checkin(row, true)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">check</icon>
                            <div>{{ 'COMMON.CHECK_IN' | translate }}</div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="checkin(row, false)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">cancel</icon>
                            <div>{{ 'COMMON.CHECK_OUT' | translate }}</div>
                        </div>
                    </button>
                </mat-menu>
            </ng-template>
        </div>
        @if (!loading && more_pages) {
            <button
                btn
                matRipple
                class="absolute bottom-2 left-4 z-20 w-32"
                (click)="loadMore()"
            >
                {{ 'COMMON.LOAD_MORE' | translate }}
            </button>
        }
    `, imports: [
      CommonModule,
      MatRippleModule,
      MatMenuModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe,
      SimpleTableComponent
    ], styles: ["/* angular:styles/component:css;50f565321ed488c261915867f2cdb2126821993bd33e062143023023a6d86219;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/lockers/locker-bookings.component.ts */\n:host {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=locker-bookings.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerBookingsComponent, { className: "LockerBookingsComponent", filePath: "apps/concierge/src/app/lockers/locker-bookings.component.ts", lineNumber: 271 });
})();

export {
  LockerBookingsComponent
};
//# sourceMappingURL=chunk-BTXYBSN3.js.map
