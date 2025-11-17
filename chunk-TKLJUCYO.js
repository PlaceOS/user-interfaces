import {
  DesksStateService
} from "./chunk-2K3EVIC6.js";
import {
  AssetListFieldComponent
} from "./chunk-M5T6QMEU.js";
import {
  DeskListFieldComponent
} from "./chunk-DLZZAV5T.js";
import {
  BookingFormService
} from "./chunk-BZF7VHLC.js";
import {
  RecurrenceFieldComponent,
  UserListFieldComponent,
  UserSearchFieldComponent
} from "./chunk-G36UUYE3.js";
import {
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  DateFieldComponent,
  DatePipe,
  DefaultValueAccessor,
  DurationFieldComponent,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  MatCheckbox,
  MatCheckboxModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatProgressBar,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  OrganisationService,
  ReactiveFormsModule,
  SettingsService,
  SimpleTableComponent,
  TimeFieldComponent,
  TranslatePipe,
  UserPipe,
  addDays,
  computed,
  endOfDay,
  i18n,
  inject,
  input,
  nextValueFrom,
  notifyError,
  notifySuccess,
  output,
  set,
  setClassMetadata,
  settingSignal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
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
  ɵɵpureFunction3,
  ɵɵpureFunctionV,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JMWE3Z3Z.js";

// apps/concierge/src/app/desks/desk-bookings.component.ts
var _c0 = () => ["user_name", "asset_name", "user_email", "asset_id", "status", "group", "title"];
var _c1 = (a0, a1) => ({ key: "date", name: a0, content: a1, size: "4rem", sortable: false });
var _c2 = (a0, a1) => ({ key: "date", name: a0, content: a1, size: "9rem" });
var _c3 = (a0) => ({ key: "asset_name", name: a0 });
var _c4 = (a0, a1) => ({ key: "user_email", name: a0, content: a1 });
var _c5 = (a0, a1) => ({ key: "booked_by_email", name: a0, content: a1 });
var _c6 = (a0) => ({ key: "title", name: a0 });
var _c7 = (a0) => ({ key: "approver", name: a0 });
var _c8 = (a0, a1) => ({ key: "status", name: a0, content: a1, size: "8.5rem", sortable: false });
var _c9 = (a0, a1) => ({ key: "checked_in", name: a0, content: a1, size: "7rem", sortable: false });
var _c10 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c11 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9];
function DeskBookingsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15);
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
function DeskBookingsComponent_ng_template_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.DESKS_GROUP_EMPTY"), " ");
  }
}
function DeskBookingsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, DeskBookingsComponent_ng_template_16_Conditional_2_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.group || (row_r2.extension_data == null ? null : row_r2.extension_data.group), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(row_r2.group || (row_r2.extension_data == null ? null : row_r2.extension_data.group)) ? 2 : -1);
  }
}
function DeskBookingsComponent_ng_template_18_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext(2).row;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, row_r3.date, ctx_r3.time_format), " \u2013 ", \u0275\u0275pipeBind2(2, 5, row_r3.date_end, ctx_r3.time_format), " ");
  }
}
function DeskBookingsComponent_ng_template_18_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.ALL_DAY"), " ");
  }
}
function DeskBookingsComponent_ng_template_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275conditionalCreate(1, DeskBookingsComponent_ng_template_18_Conditional_1_Conditional_1_Template, 3, 8);
    \u0275\u0275conditionalCreate(2, DeskBookingsComponent_ng_template_18_Conditional_1_Conditional_2_Template, 2, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275conditional(!row_r3.all_day && row_r3.duration <= 12 * 60 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.all_day || row_r3.duration > 12 * 60 ? 2 : -1);
  }
}
function DeskBookingsComponent_ng_template_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, row_r3.deleted ? "APP.CONCIERGE.BOOKING_DELETED" : row_r3.status === "ended" ? "APP.CONCIERGE.BOOKING_ENDED" : "APP.CONCIERGE.BOOKING_EXPIRED"), " ");
  }
}
function DeskBookingsComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275conditionalCreate(1, DeskBookingsComponent_ng_template_18_Conditional_1_Template, 3, 2, "div", 18);
    \u0275\u0275conditionalCreate(2, DeskBookingsComponent_ng_template_18_Conditional_2_Template, 3, 3, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.status !== "declined" && !row_r3.deleted && row_r3.status !== "ended" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.status === "declined" || row_r3.deleted || row_r3.status === "ended" ? 2 : -1);
  }
}
function DeskBookingsComponent_ng_template_20_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const email_r5 = \u0275\u0275nextContext().data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", email_r5, " ");
  }
}
function DeskBookingsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "user");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "div", 20)(4, "div", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, DeskBookingsComponent_ng_template_20_Conditional_6_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const email_r5 = ctx.data;
    const user_r6 = \u0275\u0275pipeBind1(2, 4, \u0275\u0275pipeBind1(1, 2, email_r5));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (user_r6 == null ? null : user_r6.name) || (user_r6 == null ? null : user_r6.email) || email_r5, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((user_r6 == null ? null : user_r6.name) ? 6 : -1);
  }
}
function DeskBookingsComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 24)(2, "div", 25)(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 27);
    \u0275\u0275text(7, " arrow_drop_down ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "mat-menu", null, 7)(10, "button", 28);
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_22_Template_button_click_10_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.approve(row_r8));
    });
    \u0275\u0275elementStart(11, "div", 29)(12, "icon", 27);
    \u0275\u0275text(13, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 30);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 28);
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_22_Template_button_click_17_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.reject(row_r8));
    });
    \u0275\u0275elementStart(18, "div", 29)(19, "icon", 27);
    \u0275\u0275text(20, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 30);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    const menu_r9 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("!text-success-content", (row_r8 == null ? null : row_r8.status) === "approved")("!bg-success", (row_r8 == null ? null : row_r8.status) === "approved")("!text-error-content", (row_r8 == null ? null : row_r8.status) === "declined")("!bg-error", (row_r8 == null ? null : row_r8.status) === "declined")("!text-neutral-content", (row_r8 == null ? null : row_r8.status) === "ended")("!bg-neutral", (row_r8 == null ? null : row_r8.status) === "ended")("opacity-30", (row_r8 == null ? null : row_r8.status) === "ended");
    \u0275\u0275property("matMenuTriggerFor", menu_r9)("disabled", (row_r8 == null ? null : row_r8.status) === "ended");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 19, (row_r8 == null ? null : row_r8.status) === "ended" ? "APP.CONCIERGE.BOOKING_STATUS_ENDED" : (row_r8 == null ? null : row_r8.status) === "approved" ? "APP.CONCIERGE.BOOKING_STATUS_APPROVED" : (row_r8 == null ? null : row_r8.status) === "declined" ? "APP.CONCIERGE.BOOKING_STATUS_DECLINED" : "APP.CONCIERGE.BOOKING_STATUS_PENDING"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 21, "APP.CONCIERGE.DESKS_ACTION_APPROVE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 23, "APP.CONCIERGE.DESKS_ACTION_DECLINE"), " ");
  }
}
function DeskBookingsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 31)(2, "div", 25)(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 27);
    \u0275\u0275text(7, " arrow_drop_down ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "mat-menu", null, 8)(10, "button", 28);
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_24_Template_button_click_10_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.checkin(row_r11, true));
    });
    \u0275\u0275elementStart(11, "div", 29)(12, "icon", 27);
    \u0275\u0275text(13, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 28);
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_24_Template_button_click_17_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.checkin(row_r11, false));
    });
    \u0275\u0275elementStart(18, "div", 29)(19, "icon", 27);
    \u0275\u0275text(20, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r12 = ctx.data;
    const row_r11 = ctx.row;
    const checkinMenu_r13 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("!bg-neutral", !data_r12)("!text-neutral-content", !data_r12)("!bg-success", data_r12)("!text-success-content", data_r12)("opacity-30", row_r11.status === "ended");
    \u0275\u0275property("matMenuTriggerFor", checkinMenu_r13)("disabled", row_r11.status === "ended")("matTooltip", row_r11.status === "ended" ? "Desk booking has ended" : "Check-in or check-out desk");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 16, data_r12 ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 18, "COMMON.CHECK_IN"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 20, "COMMON.CHECK_OUT"));
  }
}
function DeskBookingsComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 33)(2, "icon", 27);
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 9)(6, "button", 28);
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_26_Template_button_click_6_listener() {
      const row_r15 = \u0275\u0275restoreView(_r14).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cancel(row_r15));
    });
    \u0275\u0275elementStart(7, "div", 29)(8, "icon", 27);
    \u0275\u0275text(9, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const actionMenu_r16 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", actionMenu_r16);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 2, "COMMON.CANCEL_BOOKING"), " ");
  }
}
function DeskBookingsComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function DeskBookingsComponent_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.loadMore());
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
var _DeskBookingsComponent = class _DeskBookingsComponent {
  constructor() {
    this._state = inject(DesksStateService);
    this._settings = inject(SettingsService);
    this.filters = this._state.filters;
    this.has_more_pages = this._state.has_more_pages;
    this.bookings = this._state.bookings;
    this.rejectAll = () => this._state.rejectAllDesks();
    this.cancel = (b) => this._state.cancelBooking(b);
    this.loadMore = () => this._state.nextPage();
    this.checkin = (d, s) => this.runMethod("checkin", async () => {
      await this._state.checkinDesk(d, s);
      d.checked_in = s ?? true;
    });
    this.approve = (d) => this.runMethod("approve", async () => this._state.approveDesk(d));
    this.reject = (d) => this.runMethod("reject", async () => this._state.rejectDesk(d));
  }
  get columns() {
    return [
      "date",
      "period",
      "user_name",
      "group",
      "asset_name",
      "approver_name",
      "status",
      "checked_in"
    ];
  }
  get time_format() {
    return this._settings.time_format;
  }
  async runMethod(name, fn) {
    this.loading = name;
    await fn().catch(() => null);
    this.loading = "";
  }
};
_DeskBookingsComponent.\u0275fac = function DeskBookingsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskBookingsComponent)();
};
_DeskBookingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskBookingsComponent, selectors: [["desk-bookings"]], decls: 30, vars: 71, consts: [["date_template", ""], ["group_template", ""], ["period_template", ""], ["user_template", ""], ["status_template", ""], ["option_template", ""], ["action_template", ""], ["menu", "matMenu"], ["checkinMenu", "matMenu"], ["actionMenu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "block", "min-w-[92rem]", "text-sm", 3, "data", "filter", "filter_on", "columns", "empty_message", "sortable"], ["btn", "", "matRipple", "", 1, "absolute", "bottom-2", "left-4", "z-20", "w-32"], [1, "flex", "w-full", "flex-col", "items-center", "justify-center", "py-2"], [1, "opacity-60"], [1, "text-xl"], [1, "p-4", "font-mono", "text-[0.625rem]"], [1, "opacity-30"], [1, "p-2"], [1, "rounded-3xl", "bg-error", "px-4", "py-2", "text-xs", "text-white"], [1, "flex", "flex-col", "justify-center", "px-4", "py-2"], [1, "select-all"], [1, "max-w-48", "select-all", "truncate", "text-xs", "opacity-30"], [1, "px-2"], ["matRipple", "", 1, "h-10", "w-[7.5rem]", "rounded-3xl", "border-none", "bg-warning", "text-warning-content", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "space-x-2", "pl-4", "pr-2"], [1, "flex-1", "text-left"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], ["matRipple", "", 1, "h-10", "w-[4.5rem]", "rounded-3xl", "border-none", "bg-warning", "text-warning-content", 3, "matMenuTriggerFor", "disabled", "matTooltip"], [1, "mx-auto", "flex", "items-center", "justify-end", "space-x-2"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", 3, "matMenuTriggerFor"], ["btn", "", "matRipple", "", 1, "absolute", "bottom-2", "left-4", "z-20", "w-32", 3, "click"]], template: function DeskBookingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "simple-table", 11);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275template(14, DeskBookingsComponent_ng_template_14_Template, 7, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, DeskBookingsComponent_ng_template_16_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(18, DeskBookingsComponent_ng_template_18_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(20, DeskBookingsComponent_ng_template_20_Template, 7, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(22, DeskBookingsComponent_ng_template_22_Template, 24, 25, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(24, DeskBookingsComponent_ng_template_24_Template, 24, 22, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(26, DeskBookingsComponent_ng_template_26_Template, 13, 4, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(28, DeskBookingsComponent_Conditional_28_Template, 3, 3, "button", 12);
    \u0275\u0275pipe(29, "async");
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_11_0;
    const date_template_r18 = \u0275\u0275reference(15);
    const period_template_r19 = \u0275\u0275reference(19);
    const user_template_r20 = \u0275\u0275reference(21);
    const status_template_r21 = \u0275\u0275reference(23);
    const option_template_r22 = \u0275\u0275reference(25);
    const action_template_r23 = \u0275\u0275reference(27);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.bookings)("filter", (tmp_8_0 = \u0275\u0275pipeBind1(2, 7, ctx.filters)) == null ? null : tmp_8_0.search)("filter_on", \u0275\u0275pureFunction0(33, _c0))("columns", \u0275\u0275pureFunctionV(60, _c11, [\u0275\u0275pureFunction2(34, _c1, \u0275\u0275pipeBind1(3, 9, "FORM.DATE"), date_template_r18), \u0275\u0275pureFunction2(37, _c2, \u0275\u0275pipeBind1(4, 11, "FORM.PERIOD"), period_template_r19), \u0275\u0275pureFunction1(40, _c3, \u0275\u0275pipeBind1(5, 13, "RESOURCE.DESK")), \u0275\u0275pureFunction2(42, _c4, \u0275\u0275pipeBind1(6, 15, "COMMON.PERSON"), user_template_r20), \u0275\u0275pureFunction2(45, _c5, \u0275\u0275pipeBind1(7, 17, "COMMON.BOOKED_BY"), user_template_r20), \u0275\u0275pureFunction1(48, _c6, \u0275\u0275pipeBind1(8, 19, "FORM.TITLE")), \u0275\u0275pureFunction1(50, _c7, \u0275\u0275pipeBind1(9, 21, "APP.CONCIERGE.APPROVER")), \u0275\u0275pureFunction2(52, _c8, \u0275\u0275pipeBind1(10, 23, "COMMON.STATUS"), status_template_r21), \u0275\u0275pureFunction2(55, _c9, \u0275\u0275pipeBind1(11, 25, "COMMON.CHECKED_IN"), option_template_r22), \u0275\u0275pureFunction1(58, _c10, action_template_r23)]))("empty_message", \u0275\u0275pipeBind1(13, 29, ((tmp_11_0 = \u0275\u0275pipeBind1(12, 27, ctx.filters)) == null ? null : tmp_11_0.search) ? "APP.CONCIERGE.DESKS_BOOKINGS_SEARCH_EMPTY" : "APP.CONCIERGE.DESKS_BOOKINGS_EMPTY"))("sortable", true);
    \u0275\u0275advance(27);
    \u0275\u0275conditional(!ctx.loading && \u0275\u0275pipeBind1(29, 31, ctx.has_more_pages) ? 28 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  IconComponent,
  MatTooltipModule,
  MatTooltip,
  SimpleTableComponent,
  UserPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=desk-bookings.component.css.map */"] });
var DeskBookingsComponent = _DeskBookingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskBookingsComponent, [{
    type: Component,
    args: [{ selector: "desk-bookings", template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-[92rem] text-sm"
                [data]="bookings"
                [filter]="(filters | async)?.search"
                [filter_on]="[
                    'user_name',
                    'asset_name',
                    'user_email',
                    'asset_id',
                    'status',
                    'group',
                    'title',
                ]"
                [columns]="[
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                        size: '4rem',
                        sortable: false,
                    },
                    {
                        key: 'date',
                        name: 'FORM.PERIOD' | translate,
                        content: period_template,
                        size: '9rem',
                    },
                    { key: 'asset_name', name: 'RESOURCE.DESK' | translate },
                    {
                        key: 'user_email',
                        name: 'COMMON.PERSON' | translate,
                        content: user_template,
                    },
                    {
                        key: 'booked_by_email',
                        name: 'COMMON.BOOKED_BY' | translate,
                        content: user_template,
                    },
                    {
                        key: 'title',
                        name: 'FORM.TITLE' | translate,
                    },
                    {
                        key: 'approver',
                        name: 'APP.CONCIERGE.APPROVER' | translate,
                    },
                    {
                        key: 'status',
                        name: 'COMMON.STATUS' | translate,
                        content: status_template,
                        size: '8.5rem',
                        sortable: false,
                    },
                    {
                        key: 'checked_in',
                        name: 'COMMON.CHECKED_IN' | translate,
                        content: option_template,
                        size: '7rem',
                        sortable: false,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '3.5rem',
                        sortable: false,
                    },
                ]"
                [empty_message]="
                    ((filters | async)?.search
                        ? 'APP.CONCIERGE.DESKS_BOOKINGS_SEARCH_EMPTY'
                        : 'APP.CONCIERGE.DESKS_BOOKINGS_EMPTY'
                    ) | translate
                "
                [sortable]="true"
            ></simple-table>
            <ng-template #date_template let-date="data">
                <div
                    class="flex w-full flex-col items-center justify-center py-2"
                >
                    <div class="opacity-60">{{ date | date: 'MMM' }}</div>
                    <div class="text-xl">{{ date | date: 'dd' }}</div>
                </div>
            </ng-template>
            <ng-template #group_template let-row="row">
                <div class="p-4 font-mono text-[0.625rem]">
                    {{ row.group || row.extension_data?.group }}
                    @if (!(row.group || row.extension_data?.group)) {
                        <span class="opacity-30">
                            {{ 'APP.CONCIERGE.DESKS_GROUP_EMPTY' | translate }}
                        </span>
                    }
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
                            @if (!row.all_day && row.duration <= 12 * 60) {
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
                            class="rounded-3xl bg-error px-4 py-2 text-xs text-white"
                        >
                            {{
                                (row.deleted
                                    ? 'APP.CONCIERGE.BOOKING_DELETED'
                                    : row.status === 'ended'
                                      ? 'APP.CONCIERGE.BOOKING_ENDED'
                                      : 'APP.CONCIERGE.BOOKING_EXPIRED'
                                ) | translate
                            }}
                        </div>
                    }
                </div>
            </ng-template>
            <ng-template #user_template let-email="data">
                @let user = email | user | async;
                <div class="flex flex-col justify-center px-4 py-2">
                    <div class="select-all">
                        {{ user?.name || user?.email || email }}
                    </div>
                    @if (user?.name) {
                        <div
                            class="max-w-48 select-all truncate text-xs opacity-30"
                        >
                            {{ email }}
                        </div>
                    }
                </div>
            </ng-template>
            <ng-template #status_template let-row="row">
                <div class="px-2">
                    <button
                        matRipple
                        class="h-10 w-[7.5rem] rounded-3xl border-none bg-warning text-warning-content"
                        [class.!text-success-content]="
                            row?.status === 'approved'
                        "
                        [class.!bg-success]="row?.status === 'approved'"
                        [class.!text-error-content]="row?.status === 'declined'"
                        [class.!bg-error]="row?.status === 'declined'"
                        [class.!text-neutral-content]="row?.status === 'ended'"
                        [class.!bg-neutral]="row?.status === 'ended'"
                        [class.opacity-30]="row?.status === 'ended'"
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
                                    'APP.CONCIERGE.DESKS_ACTION_APPROVE'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="reject(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">event_busy</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.DESKS_ACTION_DECLINE'
                                        | translate
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
                        class="h-10 w-[4.5rem] rounded-3xl border-none bg-warning text-warning-content"
                        [matMenuTriggerFor]="checkinMenu"
                        [class.!bg-neutral]="!data"
                        [class.!text-neutral-content]="!data"
                        [class.!bg-success]="data"
                        [class.!text-success-content]="data"
                        [class.opacity-30]="row.status === 'ended'"
                        [disabled]="row.status === 'ended'"
                        [matTooltip]="
                            row.status === 'ended'
                                ? 'Desk booking has ended'
                                : 'Check-in or check-out desk'
                        "
                    >
                        <div class="flex items-center space-x-2 pl-4 pr-2">
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
            <ng-template #action_template let-row="row">
                <div class="mx-auto flex items-center justify-end space-x-2">
                    <button
                        icon
                        matRipple
                        class="h-12 w-12 rounded"
                        [matMenuTriggerFor]="actionMenu"
                    >
                        <icon class="text-2xl">more_vert</icon>
                    </button>
                    <mat-menu #actionMenu="matMenu">
                        <button mat-menu-item (click)="cancel(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">event_busy</icon>
                                <div>
                                    {{ 'COMMON.CANCEL_BOOKING' | translate }}
                                </div>
                            </div>
                        </button>
                    </mat-menu>
                </div>
            </ng-template>
        </div>
        @if (!loading && (has_more_pages | async)) {
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
      TranslatePipe,
      MatRippleModule,
      MatMenuModule,
      IconComponent,
      MatTooltipModule,
      SimpleTableComponent,
      UserPipe,
      MatProgressBar
    ], styles: ["/* angular:styles/component:css;50f565321ed488c261915867f2cdb2126821993bd33e062143023023a6d86219;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/desks/desk-bookings.component.ts */\n:host {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=desk-bookings.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskBookingsComponent, { className: "DeskBookingsComponent", filePath: "apps/concierge/src/app/desks/desk-bookings.component.ts", lineNumber: 327 });
})();

// apps/workplace/src/app/book/desk-flow/desk-form-details.component.ts
var _c02 = () => ({ standalone: true });
var _c12 = () => [];
var _c22 = (a0, a1, a2) => ({ date: a0, duration: a1, all_day: a2 });
function NewDeskFormDetailsComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 1)(1, "button", 18);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("click", function NewDeskFormDetailsComponent_Conditional_0_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ group: false, members: [] }));
    });
    \u0275\u0275elementStart(3, "icon", 19);
    \u0275\u0275text(4, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 21);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 18);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275listener("click", function NewDeskFormDetailsComponent_Conditional_0_Conditional_1_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ group: true }));
    });
    \u0275\u0275elementStart(13, "icon", 19);
    \u0275\u0275text(14, "group_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 20);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "div", 21);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275pipe(20, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-secondary", !((tmp_2_0 = \u0275\u0275pipeBind1(2, 14, ctx_r1.options)) == null ? null : tmp_2_0.group));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 16, "BOOKINGS.DESK_LONE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-base-200", (tmp_4_0 = \u0275\u0275pipeBind1(9, 18, ctx_r1.options)) == null ? null : tmp_4_0.group)("bg-secondary", !((tmp_5_0 = \u0275\u0275pipeBind1(10, 20, ctx_r1.options)) == null ? null : tmp_5_0.group));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-secondary", (tmp_6_0 = \u0275\u0275pipeBind1(12, 22, ctx_r1.options)) == null ? null : tmp_6_0.group);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 24, "BOOKINGS.DESK_GROUP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-base-200", !((tmp_8_0 = \u0275\u0275pipeBind1(19, 26, ctx_r1.options)) == null ? null : tmp_8_0.group))("bg-secondary", (tmp_9_0 = \u0275\u0275pipeBind1(20, 28, ctx_r1.options)) == null ? null : tmp_9_0.group);
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-user-search-field", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "FORM.HOST"));
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY"), " ");
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 23)(2, "label", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 25);
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_Conditional_0_Conditional_34_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form().patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 23)(9, "label", 26);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "a-duration-field", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 12, "FORM.TIME_START"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.form().value.date)("ngModelOptions", \u0275\u0275pureFunction0(16, _c02))("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 14, "FORM.TIME_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("time", (tmp_8_0 = ctx_r1.form().get("date")) == null ? null : tmp_8_0.value)("max", ctx_r1.max_duration)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_35_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "FORM.UPDATE_FUTURE"), " ");
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "label", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "recurrence-field", 29);
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_Conditional_0_Conditional_35_Template_recurrence_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRecurrenceChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, NewDeskFormDetailsComponent_Conditional_0_Conditional_35_Conditional_7_Template, 3, 3, "mat-checkbox", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "FORM.RECURRENCE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("date", ctx_r1.form().getRawValue().date)("ngModel", ctx_r1.form().value)("ngModelOptions", \u0275\u0275pureFunction0(8, _c02))("available_days", ctx_r1.available_days());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form().value.id ? 7 : -1);
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 23)(2, "mat-checkbox", 31);
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_Conditional_0_Conditional_36_Template_mat_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form().patchValue({ secondary_resource: $event ? "locker" : "" }));
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", !!ctx_r1.form().value.secondary_resource)("ngModelOptions", \u0275\u0275pureFunction0(5, _c02));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "BOOKINGS.DESK_REQUIRE_LOCKER"), " ");
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 2)(1, "h3", 16)(2, "div", 4);
    \u0275\u0275text(3, " 2 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 33)(9, "a-user-list-field", 34);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_Conditional_0_Conditional_37_Template_a_user_list_field_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ members: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "BOOKINGS.DESK_GROUP_MEMBERS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ((tmp_3_0 = \u0275\u0275pipeBind1(10, 5, ctx_r1.options)) == null ? null : tmp_3_0.members) || \u0275\u0275pureFunction0(7, _c12))("ngModelOptions", \u0275\u0275pureFunction0(8, _c02));
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_39_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.DESK_GROUP_INFO"), " ");
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "h3", 3)(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "desk-list-field", 35);
    \u0275\u0275conditionalCreate(9, NewDeskFormDetailsComponent_Conditional_0_Conditional_39_Conditional_9_Template, 3, 3, "p", 36);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = \u0275\u0275pipeBind1(4, 3, ctx_r1.options)) == null ? null : tmp_2_0.group) ? 3 : 2, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "RESOURCE.DESK"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_4_0 = \u0275\u0275pipeBind1(10, 7, ctx_r1.options)) == null ? null : tmp_4_0.group) ? 9 : -1);
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "h3", 3)(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "asset-list-field", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = \u0275\u0275pipeBind1(4, 3, ctx_r1.options)) == null ? null : tmp_2_0.group) ? 4 : 3, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "RESOURCE.ASSETS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("options", \u0275\u0275pureFunction3(7, _c22, ctx_r1.form().getRawValue().date, ctx_r1.form().value.duration, ctx_r1.form().value.all_day));
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, NewDeskFormDetailsComponent_Conditional_0_Conditional_1_Template, 21, 30, "section", 1);
    \u0275\u0275elementStart(2, "section", 2)(3, "h3", 3)(4, "div", 4);
    \u0275\u0275text(5, " 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, NewDeskFormDetailsComponent_Conditional_0_Conditional_9_Template, 5, 3, "div", 6);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "label", 9);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-form-field", 10);
    \u0275\u0275element(19, "input", 11);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementStart(21, "mat-error");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 12)(25, "label", 13);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "a-date-field", 14);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, NewDeskFormDetailsComponent_Conditional_0_Conditional_33_Template, 3, 3, "mat-checkbox", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(34, NewDeskFormDetailsComponent_Conditional_0_Conditional_34_Template, 15, 17, "div", 16);
    \u0275\u0275conditionalCreate(35, NewDeskFormDetailsComponent_Conditional_0_Conditional_35_Template, 8, 9, "div", 17);
    \u0275\u0275conditionalCreate(36, NewDeskFormDetailsComponent_Conditional_0_Conditional_36_Template, 5, 6, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(37, NewDeskFormDetailsComponent_Conditional_0_Conditional_37_Template, 11, 9, "section", 2);
    \u0275\u0275pipe(38, "async");
    \u0275\u0275conditionalCreate(39, NewDeskFormDetailsComponent_Conditional_0_Conditional_39_Template, 11, 9, "section", 2);
    \u0275\u0275conditionalCreate(40, NewDeskFormDetailsComponent_Conditional_0_Conditional_40_Template, 9, 11, "section", 2);
    \u0275\u0275pipe(41, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_17_0;
    let tmp_19_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allow_groups ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("!border-none", ctx_r1.allow_groups);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 20, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_book_for_others && !((tmp_5_0 = \u0275\u0275pipeBind1(10, 22, ctx_r1.options)) == null ? null : tmp_5_0.group) ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 24, "FORM.TITLE"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(20, 26, "BOOKINGS.DESK_TITLE_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 28, "FORM.TITLE_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 30, "FORM.DATE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("to", ctx_r1.end_date())("timezone", ctx_r1.timezone);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 32, "FORM.DATE_REQUIRED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.allow_all_day ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.form().value.all_day && ctx_r1.allow_time_changes ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_recurr ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_book_lockers ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_17_0 = \u0275\u0275pipeBind1(38, 34, ctx_r1.options)) == null ? null : tmp_17_0.group) ? 37 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form().contains("resources") ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.has_assets && !((tmp_19_0 = \u0275\u0275pipeBind1(41, 36, ctx_r1.options)) == null ? null : tmp_19_0.group) ? 40 : -1);
  }
}
var _NewDeskFormDetailsComponent = class _NewDeskFormDetailsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.form = input(void 0);
    this.find = output();
    this.buildings = this._org.building_list;
    this.levels = this._org.active_levels;
    this.options = this._state.options;
    this.features = this._state.features;
    this.force_time = set(Date.now(), {
      hours: 6,
      minutes: 0
    }).valueOf();
    this.from_id = false;
    this.recurrence_options = ["daily", "weekly", "monthly"];
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.available_days = settingSignal("desks.available_period", 90);
    this.end_date = computed(() => {
      return endOfDay(addDays(Date.now(), this.available_days())).valueOf();
    });
  }
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get max_duration() {
    return this._settings.get("app.desks.max_duration") || this._settings.get("app.bookings.max_duration") || 8 * 60;
  }
  get can_book_for_others() {
    return this._settings.get("app.bookings.can_book_for_others") || this._settings.get("app.desks.can_book_for_others");
  }
  get can_book_lockers() {
    return this._settings.get("app.desks.can_book_lockers");
  }
  get can_recurr() {
    return this._settings.get("app.desks.allow_recurrence");
  }
  get allow_groups() {
    return this._settings.get("app.desks.allow_groups");
  }
  get has_assets() {
    return !!this._settings.get("app.bookings.has_assets") || !!this._settings.get("app.desks.has_assets");
  }
  get needs_reason() {
    return this._settings.get("app.desks.needs_reason") === true;
  }
  get allow_time_changes() {
    return this._settings.get("app.desks.allow_time_changes") !== false;
  }
  get allow_all_day() {
    return this.allow_time_changes && (!!this._settings.get("app.desks.allow_all_day") || !!this._settings.get("app.bookings.allow_all_day"));
  }
  get timezone() {
    return this._settings.get("app.bookings.use_building_timezone") || this._settings.get("app.desks.use_building_timezone") ? this._org.building.timezone : "";
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  ngOnChanges(changes) {
    const form = this.form();
    if (changes.form && form) {
      if (this.selected_desk?.id) {
        form.patchValue({ resources: [this.selected_desk] });
      }
    }
  }
  onRecurrenceChange(recurrence) {
    this.form().patchValue(recurrence);
  }
};
_NewDeskFormDetailsComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275NewDeskFormDetailsComponent_BaseFactory;
  return function NewDeskFormDetailsComponent_Factory(__ngFactoryType__) {
    return (\u0275NewDeskFormDetailsComponent_BaseFactory || (\u0275NewDeskFormDetailsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_NewDeskFormDetailsComponent)))(__ngFactoryType__ || _NewDeskFormDetailsComponent);
  };
})();
_NewDeskFormDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskFormDetailsComponent, selectors: [["desk-form-details"]], inputs: { form: [1, "form"] }, outputs: { find: "find" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "space-y-2", "divide-y", "divide-base-200", 3, "formGroup"], [1, "flex", "items-center"], [1, "p-2"], [1, "mb-4", "flex", "items-center", "space-x-2"], [1, "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "bg-base-200"], [1, "text-xl"], [1, "w-full"], [1, "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "min-w-[256px]", "flex-1"], ["for", "title"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "title", "formControlName", "title", 3, "placeholder"], [1, "relative", "min-w-[256px]", "flex-1"], ["for", "date"], ["name", "date", "formControlName", "date", 3, "to", "timezone"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-0"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "flex-col"], ["matRipple", "", 1, "relative", "flex", "h-16", "flex-1", "items-center", "justify-center", "space-x-2", 3, "click"], [1, "text-2xl"], [1, ""], [1, "absolute", "inset-x-0", "bottom-0", "!m-0", "h-1"], ["formControlName", "user", 1, "mb-4"], [1, "w-1/3", "flex-1"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr", "timezone"], ["for", "recurrence"], ["name", "recurrence", 3, "ngModelChange", "date", "ngModel", "ngModelOptions", "available_days"], ["formControlName", "update_master"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "w-px", "flex-1"], [1, "overflow-hidden"], [1, "mt-4", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["formControlName", "resources"], [1, "rounded", "bg-warning", "px-2", "py-1", "text-center", "text-xs", "shadow"], ["formControlName", "assets", 3, "options"]], template: function NewDeskFormDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewDeskFormDetailsComponent_Conditional_0_Template, 42, 38, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.form() ? 0 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  IconComponent,
  TranslatePipe,
  AssetListFieldComponent,
  DeskListFieldComponent,
  UserListFieldComponent,
  MatCheckboxModule,
  MatCheckbox,
  RecurrenceFieldComponent,
  DurationFieldComponent,
  TimeFieldComponent,
  DateFieldComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  MatFormFieldModule,
  MatFormField,
  MatError,
  MatInputModule,
  MatInput,
  UserSearchFieldComponent
], encapsulation: 2 });
var NewDeskFormDetailsComponent = _NewDeskFormDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewDeskFormDetailsComponent, [{
    type: Component,
    args: [{ selector: "desk-form-details", template: `
        <!-- <div class="m-2 bg-warning p-2 text-center rounded shadow text-sm">
        The selected desk hasn't been booked. Please book the desk to be
        able to check-in.
        </div> -->
        @if (form()) {
            <div
                class="space-y-2 divide-y divide-base-200"
                [formGroup]="form()"
            >
                @if (allow_groups) {
                    <section class="flex items-center">
                        <button
                            matRipple
                            class="relative flex h-16 flex-1 items-center justify-center space-x-2"
                            [class.text-secondary]="!(options | async)?.group"
                            (click)="setOptions({ group: false, members: [] })"
                        >
                            <icon class="text-2xl">person</icon>
                            <div class="">
                                {{ 'BOOKINGS.DESK_LONE' | translate }}
                            </div>
                            <div
                                class="absolute inset-x-0 bottom-0 !m-0 h-1"
                                [class.bg-base-200]="(options | async)?.group"
                                [class.bg-secondary]="!(options | async)?.group"
                            ></div>
                        </button>
                        <button
                            matRipple
                            class="relative flex h-16 flex-1 items-center justify-center space-x-2"
                            [class.text-secondary]="(options | async)?.group"
                            (click)="setOptions({ group: true })"
                        >
                            <icon class="text-2xl">group_add</icon>
                            <div class="">
                                {{ 'BOOKINGS.DESK_GROUP' | translate }}
                            </div>
                            <div
                                class="absolute inset-x-0 bottom-0 !m-0 h-1"
                                [class.bg-base-200]="!(options | async)?.group"
                                [class.bg-secondary]="(options | async)?.group"
                            ></div>
                        </button>
                    </section>
                }
                <section class="p-2" [class.!border-none]="allow_groups">
                    <h3 class="mb-4 flex items-center space-x-2">
                        <div
                            class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200"
                        >
                            1
                        </div>
                        <div class="text-xl">
                            {{ 'BOOKINGS.DETAILS' | translate }}
                        </div>
                    </h3>
                    @if (can_book_for_others && !(options | async)?.group) {
                        <div class="w-full">
                            <label for="title">{{
                                'FORM.HOST' | translate
                            }}</label>
                            <a-user-search-field
                                formControlName="user"
                                class="mb-4"
                            ></a-user-search-field>
                        </div>
                    }
                    <div class="flex flex-wrap items-center sm:space-x-2">
                        <div class="min-w-[256px] flex-1">
                            <label for="title"
                                >{{ 'FORM.TITLE' | translate
                                }}<span>*</span></label
                            >
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="title"
                                    formControlName="title"
                                    [placeholder]="
                                        'BOOKINGS.DESK_TITLE_PLACEHOLDER'
                                            | translate
                                    "
                                />
                                <mat-error>{{
                                    'FORM.TITLE_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                        <div class="relative min-w-[256px] flex-1">
                            <label for="date">
                                {{ 'FORM.DATE' | translate }}<span>*</span>
                            </label>
                            <a-date-field
                                name="date"
                                formControlName="date"
                                [to]="end_date()"
                                [timezone]="timezone"
                            >
                                {{ 'FORM.DATE_REQUIRED' | translate }}
                            </a-date-field>
                            @if (allow_all_day) {
                                <mat-checkbox
                                    formControlName="all_day"
                                    class="absolute -top-2 right-0"
                                >
                                    {{ 'COMMON.ALL_DAY' | translate }}
                                </mat-checkbox>
                            }
                        </div>
                    </div>
                    @if (!form().value.all_day && allow_time_changes) {
                        <div class="flex items-center space-x-2">
                            <div class="w-1/3 flex-1">
                                <label for="start-time">
                                    {{ 'FORM.TIME_START' | translate
                                    }}<span>*</span>
                                </label>
                                <a-time-field
                                    name="start-time"
                                    [ngModel]="form().value.date"
                                    (ngModelChange)="
                                        form().patchValue({ date: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [use_24hr]="use_24hr"
                                    [timezone]="timezone"
                                ></a-time-field>
                            </div>
                            <div class="w-1/3 flex-1">
                                <label for="end-time">
                                    {{ 'FORM.TIME_END' | translate
                                    }}<span>*</span>
                                </label>
                                <a-duration-field
                                    name="end-time"
                                    formControlName="duration"
                                    [time]="form().get('date')?.value"
                                    [max]="max_duration"
                                    [min]="60"
                                    [step]="60"
                                    [use_24hr]="use_24hr"
                                    [timezone]="timezone"
                                >
                                </a-duration-field>
                            </div>
                        </div>
                    }
                    @if (can_recurr) {
                        <div class="flex flex-col">
                            <label for="recurrence">
                                {{ 'FORM.RECURRENCE' | translate
                                }}<span>*</span>
                            </label>
                            <recurrence-field
                                name="recurrence"
                                [date]="form().getRawValue().date"
                                [ngModel]="form().value"
                                (ngModelChange)="onRecurrenceChange($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [available_days]="available_days()"
                            ></recurrence-field>
                            @if (form().value.id) {
                                <mat-checkbox formControlName="update_master">
                                    {{ 'FORM.UPDATE_FUTURE' | translate }}
                                </mat-checkbox>
                            }
                        </div>
                    }
                    @if (can_book_lockers) {
                        <div class="flex items-center space-x-2">
                            <div class="w-1/3 flex-1">
                                <mat-checkbox
                                    [ngModel]="
                                        !!form().value.secondary_resource
                                    "
                                    (ngModelChange)="
                                        form().patchValue({
                                            secondary_resource: $event
                                                ? 'locker'
                                                : '',
                                        })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                >
                                    {{
                                        'BOOKINGS.DESK_REQUIRE_LOCKER'
                                            | translate
                                    }}
                                </mat-checkbox>
                            </div>
                        </div>
                    }
                </section>
                @if ((options | async)?.group) {
                    <section class="p-2">
                        <h3 class="flex items-center space-x-2">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200"
                            >
                                2
                            </div>
                            <div class="text-xl">
                                {{ 'BOOKINGS.DESK_GROUP_MEMBERS' | translate }}
                            </div>
                            <div class="w-px flex-1"></div>
                        </h3>
                        <div class="overflow-hidden">
                            <a-user-list-field
                                class="mt-4"
                                [ngModel]="(options | async)?.members || []"
                                (ngModelChange)="
                                    setOptions({ members: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></a-user-list-field>
                        </div>
                    </section>
                }
                @if (form().contains('resources')) {
                    <section class="p-2">
                        <h3 class="mb-4 flex items-center space-x-2">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200"
                            >
                                {{ (options | async)?.group ? 3 : 2 }}
                            </div>
                            <div class="text-xl">
                                {{ 'RESOURCE.DESK' | translate }}
                            </div>
                        </h3>
                        <desk-list-field
                            formControlName="resources"
                        ></desk-list-field>
                        @if ((options | async)?.group) {
                            <p
                                class="rounded bg-warning px-2 py-1 text-center text-xs shadow"
                            >
                                {{ 'BOOKINGS.DESK_GROUP_INFO' | translate }}
                            </p>
                        }
                    </section>
                }
                @if (has_assets && !(options | async)?.group) {
                    <section class="p-2">
                        <h3 class="mb-4 flex items-center space-x-2">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200"
                            >
                                {{ (options | async)?.group ? 4 : 3 }}
                            </div>
                            <div class="text-xl">
                                {{ 'RESOURCE.ASSETS' | translate }}
                            </div>
                        </h3>
                        <asset-list-field
                            [options]="{
                                date: form().getRawValue().date,
                                duration: form().value.duration,
                                all_day: form().value.all_day,
                            }"
                            formControlName="assets"
                        ></asset-list-field>
                    </section>
                }
            </div>
        }
    `, imports: [
      CommonModule,
      IconComponent,
      TranslatePipe,
      AssetListFieldComponent,
      DeskListFieldComponent,
      UserListFieldComponent,
      MatCheckboxModule,
      RecurrenceFieldComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      UserSearchFieldComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFormDetailsComponent, { className: "NewDeskFormDetailsComponent", filePath: "apps/workplace/src/app/book/desk-flow/desk-form-details.component.ts", lineNumber: 327 });
})();

// apps/concierge/src/app/desks/desk-book-modal.component.ts
var _DeskBookModalComponent = class _DeskBookModalComponent {
  constructor() {
    this._booking_form = inject(BookingFormService);
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this.event = output();
    this.loading = new BehaviorSubject(false);
  }
  get form() {
    return this._booking_form.form;
  }
  ngOnInit() {
    if (!this.form.value.id) {
      this.form.patchValue({
        duration: this._settings.get("app.desks.default_duration") || 60
      });
    }
  }
  async save() {
    this.loading.next(true);
    this.form.patchValue({ booking_type: "desk" });
    let method = () => this._booking_form.postForm();
    if ((await nextValueFrom(this._booking_form.options))?.group) {
      method = () => this._booking_form.postFormForGroup();
    }
    const event = await method().catch((_) => {
      notifyError(_);
      this.loading.next(false);
      throw _;
    });
    this.event.emit({ reason: "done", metadata: event });
    notifySuccess(i18n("APP.CONCIERGE.DESKS_BOOKING_SUCCESS"));
    this._dialog_ref.close();
    this.loading.next(false);
  }
};
_DeskBookModalComponent.\u0275fac = function DeskBookModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskBookModalComponent)();
};
_DeskBookModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskBookModalComponent, selectors: [["desk-book-modal"]], outputs: { event: "event" }, decls: 5, vars: 9, consts: [[3, "confirm", "heading", "loading"], [3, "form"]], template: function DeskBookModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("confirm", function DeskBookModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
      return ctx.save();
    });
    \u0275\u0275element(4, "desk-form-details", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 3, ctx.form.value.id ? "APP.CONCIERGE.DESKS_BOOK_EDIT" : "APP.CONCIERGE.DESKS_BOOK_NEW"))("loading", \u0275\u0275pipeBind1(2, 5, ctx.loading) ? \u0275\u0275pipeBind1(3, 7, "APP.CONCIERGE.DESKS_BOOKING_LOADING") : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("form", ctx.form);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  FullscreenModalShellComponent,
  NewDeskFormDetailsComponent,
  TranslatePipe
], encapsulation: 2 });
var DeskBookModalComponent = _DeskBookModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskBookModalComponent, [{
    type: Component,
    args: [{ selector: "desk-book-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.DESKS_BOOK_EDIT'
                    : 'APP.CONCIERGE.DESKS_BOOK_NEW'
                ) | translate
            "
            [loading]="
                (loading | async)
                    ? ('APP.CONCIERGE.DESKS_BOOKING_LOADING' | translate)
                    : ''
            "
            (confirm)="save()"
        >
            <desk-form-details [form]="form" />
        </fullscreen-modal-shell>
    `, imports: [
      CommonModule,
      FullscreenModalShellComponent,
      NewDeskFormDetailsComponent,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskBookModalComponent, { className: "DeskBookModalComponent", filePath: "apps/concierge/src/app/desks/desk-book-modal.component.ts", lineNumber: 49 });
})();

export {
  DeskBookingsComponent,
  DeskBookModalComponent
};
//# sourceMappingURL=chunk-TKLJUCYO.js.map
