import {
  DesksStateService
} from "./chunk-TWYLFCTA.js";
import "./chunk-YTJTC7JX.js";
import {
  ExploreDesksService,
  ExploreZoomControlComponent
} from "./chunk-LIUC5YTP.js";
import "./chunk-A5BPWRUE.js";
import {
  BookingRulesModalComponent
} from "./chunk-DFFN3HTW.js";
import {
  SearchbarComponent
} from "./chunk-TFV6XH4G.js";
import {
  DateOptionsComponent
} from "./chunk-IJ5MCBUG.js";
import "./chunk-K7DX7F3H.js";
import {
  AssetListFieldComponent
} from "./chunk-NGUBZ63R.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-ABF7HW34.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  BookingFormService,
  BuildingPipe,
  Clipboard,
  CommonModule,
  Component,
  CustomTooltipComponent,
  DateFieldComponent,
  DatePipe,
  DefaultValueAccessor,
  Desk,
  DeskListFieldComponent,
  DurationFieldComponent,
  ElementRef,
  ExploreStateService,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  InteractiveMapComponent,
  MatCheckbox,
  MatCheckboxModule,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
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
  MatOption,
  MatProgressBar,
  MatProgressBarModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NavigationEnd,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  OrganisationService,
  PrintableComponent,
  ReactiveFormsModule,
  RecurrenceFieldComponent,
  Router,
  RouterModule,
  RouterOutlet,
  SafePipe,
  SettingsService,
  SimpleTableComponent,
  TimeFieldComponent,
  TranslatePipe,
  UserListFieldComponent,
  UserPipe,
  UserSearchFieldComponent,
  __spreadProps,
  __spreadValues,
  addDays,
  combineLatest,
  computed,
  csvToJson,
  downloadFile,
  ec,
  effect,
  endOfDay,
  generateQRCode,
  i18n,
  inject,
  input,
  jsonToCsv,
  loadTextFileFromInputEvent,
  map,
  nextValueFrom,
  notifyError,
  notifySuccess,
  openConfirmModal,
  output,
  randomInt,
  set,
  setClassMetadata,
  settingSignal,
  signal,
  toSignal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵpureFunction7,
  ɵɵpureFunctionV,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-LG5FGLUS.js";

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
function DeskBookingsComponent_ng_template_12_Template(rf, ctx) {
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
function DeskBookingsComponent_ng_template_14_Conditional_2_Template(rf, ctx) {
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
function DeskBookingsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, DeskBookingsComponent_ng_template_14_Conditional_2_Template, 3, 3, "span", 17);
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
function DeskBookingsComponent_ng_template_16_Conditional_1_Conditional_1_Template(rf, ctx) {
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
function DeskBookingsComponent_ng_template_16_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.ALL_DAY"), " ");
  }
}
function DeskBookingsComponent_ng_template_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275conditionalCreate(1, DeskBookingsComponent_ng_template_16_Conditional_1_Conditional_1_Template, 3, 8);
    \u0275\u0275conditionalCreate(2, DeskBookingsComponent_ng_template_16_Conditional_1_Conditional_2_Template, 2, 3);
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
function DeskBookingsComponent_ng_template_16_Conditional_2_Template(rf, ctx) {
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
function DeskBookingsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275conditionalCreate(1, DeskBookingsComponent_ng_template_16_Conditional_1_Template, 3, 2, "div", 18);
    \u0275\u0275conditionalCreate(2, DeskBookingsComponent_ng_template_16_Conditional_2_Template, 3, 3, "div", 19);
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
function DeskBookingsComponent_ng_template_18_Conditional_6_Template(rf, ctx) {
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
function DeskBookingsComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "user");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "div", 20)(4, "div", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, DeskBookingsComponent_ng_template_18_Conditional_6_Template, 2, 1, "div", 22);
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
function DeskBookingsComponent_ng_template_20_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_20_Template_button_click_10_listener() {
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
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_20_Template_button_click_17_listener() {
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
    \u0275\u0275classProp("text-success-content!", (row_r8 == null ? null : row_r8.status) === "approved")("bg-success!", (row_r8 == null ? null : row_r8.status) === "approved")("text-error-content!", (row_r8 == null ? null : row_r8.status) === "declined")("bg-error!", (row_r8 == null ? null : row_r8.status) === "declined")("text-neutral-content!", (row_r8 == null ? null : row_r8.status) === "ended")("bg-neutral!", (row_r8 == null ? null : row_r8.status) === "ended")("opacity-30", (row_r8 == null ? null : row_r8.status) === "ended");
    \u0275\u0275property("matMenuTriggerFor", menu_r9)("disabled", (row_r8 == null ? null : row_r8.status) === "ended");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 19, (row_r8 == null ? null : row_r8.status) === "ended" ? "APP.CONCIERGE.BOOKING_STATUS_ENDED" : (row_r8 == null ? null : row_r8.status) === "approved" ? "APP.CONCIERGE.BOOKING_STATUS_APPROVED" : (row_r8 == null ? null : row_r8.status) === "declined" ? "APP.CONCIERGE.BOOKING_STATUS_DECLINED" : "APP.CONCIERGE.BOOKING_STATUS_PENDING"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 21, "APP.CONCIERGE.DESKS_ACTION_APPROVE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 23, "APP.CONCIERGE.DESKS_ACTION_DECLINE"), " ");
  }
}
function DeskBookingsComponent_ng_template_22_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_22_Template_button_click_10_listener() {
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
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_22_Template_button_click_17_listener() {
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
    \u0275\u0275classProp("bg-neutral!", !data_r12)("text-neutral-content!", !data_r12)("bg-success!", data_r12)("text-success-content!", data_r12)("opacity-30", row_r11.status === "ended");
    \u0275\u0275property("matMenuTriggerFor", checkinMenu_r13)("disabled", row_r11.status === "ended")("matTooltip", row_r11.status === "ended" ? "Desk booking has ended" : "Check-in or check-out desk");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 16, data_r12 ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 18, "COMMON.CHECK_IN"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 20, "COMMON.CHECK_OUT"));
  }
}
function DeskBookingsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 33)(2, "icon", 27);
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 9)(6, "button", 28);
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_24_Template_button_click_6_listener() {
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
function DeskBookingsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function DeskBookingsComponent_Conditional_26_Template_button_click_0_listener() {
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
    this.loading = signal("");
    this.filters = this._state.filters;
    this.has_more_pages = this._state.has_more_pages;
    this.bookings = computed(() => {
      const all_bookings = this._state.bookings();
      if (!this._state.loading())
        return all_bookings;
      const selected_zones = this.filters().zones || [];
      const active_zones = selected_zones.filter((z) => z && z !== "All" && z !== "-1");
      if (!active_zones.length)
        return [];
      return all_bookings.filter((booking) => booking.zones?.some((z) => active_zones.includes(z)));
    });
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
    this.loading.set(name);
    await fn().catch(() => null);
    this.loading.set("");
  }
};
_DeskBookingsComponent.\u0275fac = function DeskBookingsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskBookingsComponent)();
};
_DeskBookingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskBookingsComponent, selectors: [["desk-bookings"]], decls: 27, vars: 65, consts: [["date_template", ""], ["group_template", ""], ["period_template", ""], ["user_template", ""], ["status_template", ""], ["option_template", ""], ["action_template", ""], ["menu", "matMenu"], ["checkinMenu", "matMenu"], ["actionMenu", "matMenu"], [1, "h-full", "w-full", "overflow-auto", "pb-16"], [1, "block", "min-w-368", "text-sm", 3, "data", "filter", "filter_on", "columns", "empty_message", "sortable"], ["btn", "", "matRipple", "", 1, "absolute", "bottom-2", "left-4", "z-20", "w-32"], [1, "flex", "w-full", "flex-col", "items-center", "justify-center", "py-2"], [1, "opacity-60"], [1, "text-xl"], [1, "p-4", "font-mono", "text-[0.625rem]"], [1, "opacity-30"], [1, "p-2"], [1, "bg-error", "rounded-3xl", "px-4", "py-2", "text-xs", "text-white"], [1, "flex", "flex-col", "justify-center", "px-4", "py-2"], [1, "select-all"], [1, "max-w-48", "truncate", "text-xs", "opacity-30", "select-all"], [1, "px-2"], ["matRipple", "", 1, "bg-warning", "text-warning-content", "h-10", "w-30", "rounded-3xl", "border-none", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "space-x-2", "pr-2", "pl-4"], [1, "flex-1", "text-left"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], ["matRipple", "", 1, "bg-warning", "text-warning-content", "h-10", "w-18", "rounded-3xl", "border-none", 3, "matMenuTriggerFor", "disabled", "matTooltip"], [1, "mx-auto", "flex", "items-center", "justify-end", "space-x-2"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded-sm", 3, "matMenuTriggerFor"], ["btn", "", "matRipple", "", 1, "absolute", "bottom-2", "left-4", "z-20", "w-32", 3, "click"]], template: function DeskBookingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "simple-table", 11);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275template(12, DeskBookingsComponent_ng_template_12_Template, 7, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(14, DeskBookingsComponent_ng_template_14_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(16, DeskBookingsComponent_ng_template_16_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(18, DeskBookingsComponent_ng_template_18_Template, 7, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(20, DeskBookingsComponent_ng_template_20_Template, 24, 25, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(22, DeskBookingsComponent_ng_template_22_Template, 24, 22, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(24, DeskBookingsComponent_ng_template_24_Template, 13, 4, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, DeskBookingsComponent_Conditional_26_Template, 3, 3, "button", 12);
  }
  if (rf & 2) {
    const date_template_r18 = \u0275\u0275reference(13);
    const period_template_r19 = \u0275\u0275reference(17);
    const user_template_r20 = \u0275\u0275reference(19);
    const status_template_r21 = \u0275\u0275reference(21);
    const option_template_r22 = \u0275\u0275reference(23);
    const action_template_r23 = \u0275\u0275reference(25);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.bookings())("filter", ctx.filters().search)("filter_on", \u0275\u0275pureFunction0(27, _c0))("columns", \u0275\u0275pureFunctionV(54, _c11, [\u0275\u0275pureFunction2(28, _c1, \u0275\u0275pipeBind1(2, 7, "FORM.DATE"), date_template_r18), \u0275\u0275pureFunction2(31, _c2, \u0275\u0275pipeBind1(3, 9, "FORM.PERIOD"), period_template_r19), \u0275\u0275pureFunction1(34, _c3, \u0275\u0275pipeBind1(4, 11, "RESOURCE.DESK")), \u0275\u0275pureFunction2(36, _c4, \u0275\u0275pipeBind1(5, 13, "COMMON.PERSON"), user_template_r20), \u0275\u0275pureFunction2(39, _c5, \u0275\u0275pipeBind1(6, 15, "COMMON.BOOKED_BY"), user_template_r20), \u0275\u0275pureFunction1(42, _c6, \u0275\u0275pipeBind1(7, 17, "FORM.TITLE")), \u0275\u0275pureFunction1(44, _c7, \u0275\u0275pipeBind1(8, 19, "APP.CONCIERGE.APPROVER")), \u0275\u0275pureFunction2(46, _c8, \u0275\u0275pipeBind1(9, 21, "COMMON.STATUS"), status_template_r21), \u0275\u0275pureFunction2(49, _c9, \u0275\u0275pipeBind1(10, 23, "COMMON.CHECKED_IN"), option_template_r22), \u0275\u0275pureFunction1(52, _c10, action_template_r23)]))("empty_message", \u0275\u0275pipeBind1(11, 25, ctx.filters().search ? "APP.CONCIERGE.DESKS_BOOKINGS_SEARCH_EMPTY" : "APP.CONCIERGE.DESKS_BOOKINGS_EMPTY"))("sortable", true);
    \u0275\u0275advance(25);
    \u0275\u0275conditional(!ctx.loading() && ctx.has_more_pages() ? 26 : -1);
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
        <div class="h-full w-full overflow-auto pb-16">
            <simple-table
                class="block min-w-368 text-sm"
                [data]="bookings()"
                [filter]="filters().search"
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
                    (filters().search
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
                            class="bg-error rounded-3xl px-4 py-2 text-xs text-white"
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
                            class="max-w-48 truncate text-xs opacity-30 select-all"
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
                        class="bg-warning text-warning-content h-10 w-18 rounded-3xl border-none"
                        [matMenuTriggerFor]="checkinMenu"
                        [class.bg-neutral!]="!data"
                        [class.text-neutral-content!]="!data"
                        [class.bg-success!]="data"
                        [class.text-success-content!]="data"
                        [class.opacity-30]="row.status === 'ended'"
                        [disabled]="row.status === 'ended'"
                        [matTooltip]="
                            row.status === 'ended'
                                ? 'Desk booking has ended'
                                : 'Check-in or check-out desk'
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
            <ng-template #action_template let-row="row">
                <div class="mx-auto flex items-center justify-end space-x-2">
                    <button
                        icon
                        matRipple
                        class="h-12 w-12 rounded-sm"
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
        @if (!loading() && has_more_pages()) {
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
      UserPipe
    ], styles: ["/* angular:styles/component:css;50f565321ed488c261915867f2cdb2126821993bd33e062143023023a6d86219;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/desks/desk-bookings.component.ts */\n:host {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=desk-bookings.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskBookingsComponent, { className: "DeskBookingsComponent", filePath: "apps/concierge/src/app/desks/desk-bookings.component.ts", lineNumber: 325 });
})();

// apps/concierge/src/app/desks/desk-map-view.component.ts
var _DeskMapViewComponent = class _DeskMapViewComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ExploreStateService);
    this._desk = inject(DesksStateService);
    this._desks_state = inject(ExploreDesksService);
    this._org = inject(OrganisationService);
    this.url = toSignal(this._state.map_url, { initialValue: "" });
    this.styles = toSignal(this._state.map_styles);
    this.positions = toSignal(this._state.map_positions);
    this.actions = toSignal(this._state.map_actions);
    this.features = toSignal(this._state.map_features);
    this.setHost = (u) => this._desks_state.setOptions({ host: u });
    this._filtersEffect = effect(() => {
      const opts = this._desk.filters();
      const level = this._org.levelWithID(opts.zones);
      if (level)
        this._state.setLevel(level.id);
      this._desks_state.setOptions({
        date: opts.date || Date.now(),
        all_day: true,
        zones: opts.zones
      });
    });
  }
  ngOnInit() {
    this._desks_state.setOptions({ use_api: true });
  }
};
_DeskMapViewComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DeskMapViewComponent_BaseFactory;
  return function DeskMapViewComponent_Factory(__ngFactoryType__) {
    return (\u0275DeskMapViewComponent_BaseFactory || (\u0275DeskMapViewComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DeskMapViewComponent)))(__ngFactoryType__ || _DeskMapViewComponent);
  };
})();
_DeskMapViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskMapViewComponent, selectors: [["desk-map-view"]], features: [\u0275\u0275ProvidersFeature([ExploreDesksService]), \u0275\u0275InheritDefinitionFeature], decls: 7, vars: 7, consts: [["map", "", 1, "relative", "h-full", "w-full"], [3, "src", "zoom", "center", "styles", "features", "actions"], [1, "absolute", "right-2", "bottom-2"], [1, "absolute", "top-0", "left-0", "p-2", "text-black"], ["placeholder", "User for bookings...", 1, "white", 3, "ngModelChange", "ngModel"], ["info", "", 1, "bg-base-100", "absolute", "bottom-0", "m-2", "rounded-sm", "p-2", "text-center", "shadow-sm"]], template: function DeskMapViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "interactive-map", 1)(2, "explore-zoom-controls", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "a-user-search-field", 4);
    \u0275\u0275listener("ngModelChange", function DeskMapViewComponent_Template_a_user_search_field_ngModelChange_4_listener($event) {
      return ctx.setHost($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275text(6, " Click or Tap an available desk to book it. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx.url())("zoom", (tmp_1_0 = ctx.positions()) == null ? null : tmp_1_0.zoom)("center", (tmp_2_0 = ctx.positions()) == null ? null : tmp_2_0.center)("styles", ctx.styles())("features", ctx.features())("actions", ctx.actions());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", null);
  }
}, dependencies: [
  CommonModule,
  InteractiveMapComponent,
  ExploreZoomControlComponent,
  UserSearchFieldComponent,
  FormsModule,
  NgControlStatus,
  NgModel
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n[info][_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=desk-map-view.component.css.map */"] });
var DeskMapViewComponent = _DeskMapViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskMapViewComponent, [{
    type: Component,
    args: [{ selector: "desk-map-view", template: `
        <div map class="relative h-full w-full">
            <interactive-map
                [src]="url()"
                [zoom]="positions()?.zoom"
                [center]="positions()?.center"
                [styles]="styles()"
                [features]="features()"
                [actions]="actions()"
            ></interactive-map>
            <explore-zoom-controls
                class="absolute right-2 bottom-2"
            ></explore-zoom-controls>
            <div class="absolute top-0 left-0 p-2 text-black">
                <a-user-search-field
                    [ngModel]="null"
                    (ngModelChange)="setHost($event)"
                    class="white"
                    placeholder="User for bookings..."
                ></a-user-search-field>
            </div>
            <div
                info
                class="bg-base-100 absolute bottom-0 m-2 rounded-sm p-2 text-center shadow-sm"
            >
                Click or Tap an available desk to book it.
            </div>
        </div>
    `, providers: [ExploreDesksService], imports: [
      CommonModule,
      InteractiveMapComponent,
      ExploreZoomControlComponent,
      UserSearchFieldComponent,
      FormsModule
    ], styles: ["/* angular:styles/component:css;dd93bc8719393a35a70acaea5bd7405d99fe2e9b226de04eba8ae5416d008453;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/desks/desk-map-view.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n[info] {\n  left: 50%;\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=desk-map-view.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskMapViewComponent, { className: "DeskMapViewComponent", filePath: "apps/concierge/src/app/desks/desk-map-view.component.ts", lineNumber: 72 });
})();

// apps/concierge/src/app/desks/desks-manage.component.ts
var _c02 = (a0, a1) => ({ key: "id", name: a0, content: a1, size: "10rem" });
var _c12 = (a0) => ({ key: "name", name: a0 });
var _c22 = (a0) => ({ key: "assigned_to", name: "Assigned", content: a0 });
var _c32 = (a0, a1) => ({ key: "features", name: a0, content: a1 });
var _c42 = (a0) => ({ key: "security", name: a0 });
var _c52 = (a0, a1) => ({ key: "bookable", name: a0, content: a1, size: "5.5rem" });
var _c62 = (a0) => ({ key: "actions", name: " ", content: a0, size: "8.5rem", sortable: false });
var _c72 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
function DesksManageComponent_ng_template_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.map_id, " ");
  }
}
function DesksManageComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_8_Template_button_click_0_listener() {
      const row_r3 = \u0275\u0275restoreView(_r2).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(row_r3.map_id || row_r3.id));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DesksManageComponent_ng_template_8_Conditional_3_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.id || row_r3.map_id);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.id && row_r3.map_id !== row_r3.id ? 3 : -1);
  }
}
function DesksManageComponent_ng_template_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5, " ");
  }
}
function DesksManageComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, DesksManageComponent_ng_template_10_For_2_Template, 2, 1, "span", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275repeater(data_r6);
  }
}
function DesksManageComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275classProp("bg-error", !data_r7)("bg-success", data_r7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r7 ? "done" : "close");
  }
}
function DesksManageComponent_ng_template_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.UNASSIGNED"), " ");
  }
}
function DesksManageComponent_ng_template_14_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r9 = \u0275\u0275nextContext(2).data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r9, " ");
  }
}
function DesksManageComponent_ng_template_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_14_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const data_r9 = \u0275\u0275nextContext().data;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(data_r9));
    });
    \u0275\u0275elementStart(1, "div", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DesksManageComponent_ng_template_14_Conditional_1_Conditional_3_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const row_r11 = ctx_r9.row;
    const data_r9 = ctx_r9.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.assigned_name || data_r9);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r11.assigned_name ? 3 : -1);
  }
}
function DesksManageComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DesksManageComponent_ng_template_14_Conditional_0_Template, 3, 3, "div", 16);
    \u0275\u0275conditionalCreate(1, DesksManageComponent_ng_template_14_Conditional_1_Template, 4, 2, "button", 17);
  }
  if (rf & 2) {
    const data_r9 = ctx.data;
    \u0275\u0275conditional(!data_r9 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r9 ? 1 : -1);
  }
}
function DesksManageComponent_ng_template_16_ng_template_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275pipe(1, "safe");
    \u0275\u0275element(2, "img", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r13 = \u0275\u0275nextContext(2).row;
    \u0275\u0275property("href", \u0275\u0275pipeBind2(1, 3, row_r13.qr_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", row_r13.qr_code, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r13.name || row_r13.id, " ");
  }
}
function DesksManageComponent_ng_template_16_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275template(2, DesksManageComponent_ng_template_16_ng_template_13_ng_template_2_Template, 5, 6, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 26);
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_16_ng_template_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.print());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const print_content_r15 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("content", print_content_r15);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "APP.CONCIERGE.DESKS_ACTION_PRINT_QR"), " ");
  }
}
function DesksManageComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 21);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_16_Template_button_click_1_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.loadQrCode(row_r13));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "qr_code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_16_Template_button_click_5_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editDesk(row_r13));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 22);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_16_Template_button_click_9_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeDesk(row_r13));
    });
    \u0275\u0275elementStart(11, "icon", 23);
    \u0275\u0275text(12, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, DesksManageComponent_ng_template_16_ng_template_13_Template, 7, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const qr_menu_r16 = \u0275\u0275reference(14);
    \u0275\u0275advance();
    \u0275\u0275property("content", qr_menu_r16)("matTooltip", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.DESKS_ACTION_PRINT_QR"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 6, "APP.CONCIERGE.DESKS_ACTION_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 8, "APP.CONCIERGE.DESKS_ACTION_REMOVE"));
  }
}
function DesksManageComponent_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.loading());
  }
}
function DesksManageComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-spinner", 30);
    \u0275\u0275conditionalCreate(2, DesksManageComponent_Conditional_18_Conditional_2_Template, 2, 1, "p");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.loading() ? 2 : -1);
  }
}
function DesksManageComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 31)(2, "div", 32);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 33);
    \u0275\u0275listener("change", function DesksManageComponent_Conditional_19_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.loadCSVData($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.DESKS_DROP_TEMPLATE"), " ");
  }
}
var _DesksManageComponent = class _DesksManageComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(DesksStateService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._element = inject(ElementRef);
    this._clipboard = inject(Clipboard);
    this.loading = signal("");
    this.dragging = signal(false);
    this.filters = this._state.filters;
    this.stateLoading = this._state.loading;
    this.desks = computed(() => this.stateLoading() ? [] : this._state.desks());
    this.editDesk = (desk) => this._state.editDesk(desk);
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess(i18n("APP.CONCIERGE.DESKS_ID_COPIED"));
    };
  }
  async removeDesk(desk) {
    const resp = await openConfirmModal({
      title: i18n("APP.CONCIERGE.DESKS_REMOVE_TITLE"),
      content: i18n("APP.CONCIERGE.DESKS_REMOVE_MSG", {
        name: desk.name
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (resp.reason !== "done")
      return;
    resp.close();
    const desks = this.desks();
    const updated_desks = desks.filter((_) => _.id !== desk.id);
    const filters = this.filters();
    const level = this._org.levelWithID(filters.zones);
    this.loading.set(i18n("APP.CONCIERGE.DESKS_REMOVE_LOADING"));
    await ec(level.id, {
      name: "desks",
      description: "desks",
      details: updated_desks
    }).toPromise().catch((e) => {
      this.loading.set("");
      notifyError(i18n("APP.CONCIERGE.DESKS_REMOVE_ERROR", {
        error: e.message || e
      }));
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.DESKS_REMOVE_SUCCESS"));
    this._state.setFilters({});
    this.loading.set("");
  }
  get kiosk_url() {
    const path = this._settings.get("app.workplace_url_path") || "/workplace";
    return `${window.location.origin}${path}`;
  }
  loadQrCode(item) {
    const link = `${this.kiosk_url}/#/book/code?asset_id=${encodeURIComponent(item.id)}`;
    item.qr_link = link;
    item.qr_code = generateQRCode(link);
  }
  print() {
    window.print();
  }
  async loadCSVData(event) {
    this.loading.set(i18n("APP.CONCIERGE.DESKS_UPLOADING"));
    this.dragging.set(false);
    const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
      notifyError(m);
      throw e;
    });
    try {
      const list = csvToJson(data) || [];
      this._state.addDesks(list.map((_) => new Desk(__spreadProps(__spreadValues({}, _), {
        id: _.id || `desk-${randomInt(999999)}`
      }))));
    } catch (e) {
      console.error(e);
    }
    this.loading.set("");
  }
  handleDrag(type, event) {
    this.dragging.set(type === "enter");
  }
};
_DesksManageComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DesksManageComponent_BaseFactory;
  return function DesksManageComponent_Factory(__ngFactoryType__) {
    return (\u0275DesksManageComponent_BaseFactory || (\u0275DesksManageComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DesksManageComponent)))(__ngFactoryType__ || _DesksManageComponent);
  };
})();
_DesksManageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesksManageComponent, selectors: [["desks-manage"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 20, vars: 44, consts: [["name_template", ""], ["item_list_template", ""], ["bool_template", ""], ["assigned_template", ""], ["action_template", ""], ["qr_menu", ""], ["print_content", ""], [1, "h-full", "w-full", "overflow-auto", "pb-4", 3, "dragenter", "dragend"], [1, "block", "w-full", "min-w-6xl", "text-sm", 3, "filter", "data", "columns", "sortable", "empty_message"], [1, "bg-base-100", "bg-opacity-60", "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "bg-neutral", "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "flex", "flex-col", "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "flex", "flex-wrap", "p-2"], [1, "bg-info", "text-info-content", "m-1", "rounded-2xl", "px-2", "py-1", "font-mono", "text-xs"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", "text-white"], [1, "p-4", "opacity-30"], [1, "px-4", "py-2", "text-left", "leading-tight"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "flex", "items-center", "justify-end", "space-x-2", "p-2"], ["icon", "", "matRipple", "", "customTooltip", "", 3, "click", "content", "matTooltip"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "text-error"], [1, "bg-base-100", "rounded-sm", "py-2", "shadow-sm"], ["printable", "", 1, "", 3, "content"], ["btn", "", "matRipple", "", 1, "mx-4", "my-2", "w-[calc(100%-2rem)]", 3, "click"], ["target", "_blank", "ref", "noopener noreferrer", 1, "border-base-200", "bg-base-100", "mx-4", "my-2", "block", "rounded-lg", "border", "p-2", 3, "href"], [1, "w-48", 3, "src"], [1, "bg-base-200", "mx-4", "mt-2", "w-[calc(100%-2rem)]", "rounded-sm", "p-2", "text-center", "font-mono", "text-sm"], ["diameter", "32"], [1, "bg-base-100", "rounded-sm", "p-4", "shadow-sm"], [1, "border-base-200", "flex", "h-64", "w-64", "flex-col", "items-center", "justify-center", "rounded-sm", "border-4", "border-dashed"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"]], template: function DesksManageComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("dragenter", function DesksManageComponent_Template_div_dragenter_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.handleDrag("enter", $event));
    })("dragend", function DesksManageComponent_Template_div_dragend_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.handleDrag("end", $event));
    }, \u0275\u0275resolveWindow);
    \u0275\u0275element(1, "simple-table", 8);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275template(8, DesksManageComponent_ng_template_8_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(10, DesksManageComponent_ng_template_10_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(12, DesksManageComponent_ng_template_12_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(14, DesksManageComponent_ng_template_14_Template, 2, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(16, DesksManageComponent_ng_template_16_Template, 15, 10, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275conditionalCreate(18, DesksManageComponent_Conditional_18_Template, 3, 1, "div", 9);
    \u0275\u0275conditionalCreate(19, DesksManageComponent_Conditional_19_Template, 6, 3, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const name_template_r18 = \u0275\u0275reference(9);
    const item_list_template_r19 = \u0275\u0275reference(11);
    const bool_template_r20 = \u0275\u0275reference(13);
    const assigned_template_r21 = \u0275\u0275reference(15);
    const action_template_r22 = \u0275\u0275reference(17);
    \u0275\u0275advance();
    \u0275\u0275property("filter", ctx.filters().search)("data", ctx.desks())("columns", \u0275\u0275pureFunction7(36, _c72, \u0275\u0275pureFunction2(19, _c02, \u0275\u0275pipeBind1(2, 7, "APP.CONCIERGE.DESKS_ID"), name_template_r18), \u0275\u0275pureFunction1(22, _c12, \u0275\u0275pipeBind1(3, 9, "APP.CONCIERGE.DESKS_NAME")), \u0275\u0275pureFunction1(24, _c22, assigned_template_r21), \u0275\u0275pureFunction2(26, _c32, \u0275\u0275pipeBind1(4, 11, "COMMON.FEATURES"), item_list_template_r19), \u0275\u0275pureFunction1(29, _c42, \u0275\u0275pipeBind1(5, 13, "APP.CONCIERGE.DESKS_SECURITY")), \u0275\u0275pureFunction2(31, _c52, \u0275\u0275pipeBind1(6, 15, "COMMON.BOOKABLE"), bool_template_r20), \u0275\u0275pureFunction1(34, _c62, action_template_r22)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(7, 17, ctx.filters().search ? "APP.CONCIERGE.DESKS_MANAGE_SEARCH_EMPTY" : "APP.CONCIERGE.DESKS_MANAGE_EMPTY"));
    \u0275\u0275advance(17);
    \u0275\u0275conditional(ctx.loading() || ctx.stateLoading() ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.dragging() ? 19 : -1);
  }
}, dependencies: [
  CommonModule,
  SimpleTableComponent,
  TranslatePipe,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatRippleModule,
  MatRipple,
  IconComponent,
  MatTooltipModule,
  MatTooltip,
  CustomTooltipComponent,
  PrintableComponent,
  SafePipe
], encapsulation: 2 });
var DesksManageComponent = _DesksManageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesksManageComponent, [{
    type: Component,
    args: [{ selector: "desks-manage", template: `
        <div
            class="h-full w-full overflow-auto pb-4"
            (dragenter)="handleDrag('enter', $event)"
            (window:dragend)="handleDrag('end', $event)"
        >
            <simple-table
                class="block w-full min-w-6xl text-sm"
                [filter]="filters().search"
                [data]="desks()"
                [columns]="[
                    {
                        key: 'id',
                        name: 'APP.CONCIERGE.DESKS_ID' | translate,
                        content: name_template,
                        size: '10rem',
                    },
                    {
                        key: 'name',
                        name: 'APP.CONCIERGE.DESKS_NAME' | translate,
                    },
                    {
                        key: 'assigned_to',
                        name: 'Assigned',
                        content: assigned_template,
                    },
                    {
                        key: 'features',
                        name: 'COMMON.FEATURES' | translate,
                        content: item_list_template,
                    },
                    {
                        key: 'security',
                        name: 'APP.CONCIERGE.DESKS_SECURITY' | translate,
                    },
                    {
                        key: 'bookable',
                        name: 'COMMON.BOOKABLE' | translate,
                        content: bool_template,
                        size: '5.5rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '8.5rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
                [empty_message]="
                    (filters().search
                        ? 'APP.CONCIERGE.DESKS_MANAGE_SEARCH_EMPTY'
                        : 'APP.CONCIERGE.DESKS_MANAGE_EMPTY'
                    ) | translate
                "
            ></simple-table>
            <ng-template #name_template let-row="row">
                <button
                    class="flex flex-col px-4 py-2 text-left leading-tight"
                    (click)="copyToClipboard(row.map_id || row.id)"
                >
                    <div>{{ row.id || row.map_id }}</div>
                    @if (row.id && row.map_id !== row.id) {
                        <div class="font-mono text-[0.625rem] opacity-30">
                            {{ row.map_id }}
                        </div>
                    }
                </button>
            </ng-template>
            <ng-template #item_list_template let-data="data">
                <div class="flex flex-wrap p-2">
                    @for (item of data; track item) {
                        <span
                            class="bg-info text-info-content m-1 rounded-2xl px-2 py-1 font-mono text-xs"
                        >
                            {{ item }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #bool_template let-data="data">
                <div
                    [class.bg-error]="!data"
                    [class.bg-success]="data"
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl text-white"
                >
                    <icon>{{ data ? 'done' : 'close' }}</icon>
                </div>
            </ng-template>
            <ng-template #assigned_template let-row="row" let-data="data">
                @if (!data) {
                    <div class="p-4 opacity-30">
                        {{ 'APP.CONCIERGE.UNASSIGNED' | translate }}
                    </div>
                }
                @if (data) {
                    <button
                        class="px-4 py-2 text-left leading-tight"
                        (click)="copyToClipboard(data)"
                    >
                        <div class="">{{ row.assigned_name || data }}</div>
                        @if (row.assigned_name) {
                            <div class="font-mono text-[0.625rem] opacity-30">
                                {{ data }}
                            </div>
                        }
                    </button>
                }
            </ng-template>
            <ng-template #action_template let-row="row">
                <div class="flex items-center justify-end space-x-2 p-2">
                    <button
                        icon
                        matRipple
                        customTooltip
                        [content]="qr_menu"
                        [matTooltip]="
                            'APP.CONCIERGE.DESKS_ACTION_PRINT_QR' | translate
                        "
                        (click)="loadQrCode(row)"
                    >
                        <icon>qr_code</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.DESKS_ACTION_EDIT' | translate
                        "
                        (click)="editDesk(row)"
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.DESKS_ACTION_REMOVE' | translate
                        "
                        (click)="removeDesk(row)"
                    >
                        <icon class="text-error">delete</icon>
                    </button>
                    <ng-template #qr_menu>
                        <div class="bg-base-100 rounded-sm py-2 shadow-sm">
                            <div class="" printable [content]="print_content">
                                <ng-template #print_content>
                                    <a
                                        [href]="row.qr_link | safe: 'url'"
                                        target="_blank"
                                        ref="noopener noreferrer"
                                        class="border-base-200 bg-base-100 mx-4 my-2 block rounded-lg border p-2"
                                    >
                                        <img class="w-48" [src]="row.qr_code" />
                                    </a>
                                    <div
                                        class="bg-base-200 mx-4 mt-2 w-[calc(100%-2rem)] rounded-sm p-2 text-center font-mono text-sm"
                                    >
                                        {{ row.name || row.id }}
                                    </div>
                                </ng-template>
                            </div>
                            <button
                                btn
                                matRipple
                                class="mx-4 my-2 w-[calc(100%-2rem)]"
                                (click)="print()"
                            >
                                {{
                                    'APP.CONCIERGE.DESKS_ACTION_PRINT_QR'
                                        | translate
                                }}
                            </button>
                        </div>
                    </ng-template>
                </div>
            </ng-template>
            @if (loading() || stateLoading()) {
                <div
                    class="bg-base-100 bg-opacity-60 absolute inset-0 flex flex-col items-center justify-center space-y-2"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    @if (loading()) {
                        <p>{{ loading() }}</p>
                    }
                </div>
            }
            @if (dragging()) {
                <div
                    class="bg-neutral absolute inset-0 flex items-center justify-center"
                >
                    <div class="bg-base-100 rounded-sm p-4 shadow-sm">
                        <div
                            class="border-base-200 flex h-64 w-64 flex-col items-center justify-center rounded-sm border-4 border-dashed"
                        >
                            {{
                                'APP.CONCIERGE.DESKS_DROP_TEMPLATE' | translate
                            }}
                        </div>
                    </div>
                    <input
                        type="file"
                        class="absolute inset-0 opacity-0"
                        (change)="loadCSVData($any($event))"
                    />
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      SimpleTableComponent,
      TranslatePipe,
      MatProgressSpinnerModule,
      MatRippleModule,
      IconComponent,
      MatTooltipModule,
      CustomTooltipComponent,
      PrintableComponent,
      SafePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesksManageComponent, { className: "DesksManageComponent", filePath: "apps/concierge/src/app/desks/desks-manage.component.ts", lineNumber: 261 });
})();

// apps/workplace/src/app/book/desk-flow/desk-form-details.component.ts
var _c03 = () => ({ standalone: true });
var _c13 = () => [];
var _c23 = (a0, a1, a2) => ({ date: a0, duration: a1, all_day: a2 });
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
    \u0275\u0275property("ngModel", ctx_r1.form().value.date)("ngModelOptions", \u0275\u0275pureFunction0(16, _c03))("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
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
    \u0275\u0275property("date", ctx_r1.form().getRawValue().date)("ngModel", ctx_r1.form().value)("ngModelOptions", \u0275\u0275pureFunction0(8, _c03))("available_days", ctx_r1.available_days());
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
    \u0275\u0275property("ngModel", !!ctx_r1.form().value.secondary_resource)("ngModelOptions", \u0275\u0275pureFunction0(5, _c03));
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
    \u0275\u0275property("ngModel", ((tmp_3_0 = \u0275\u0275pipeBind1(10, 5, ctx_r1.options)) == null ? null : tmp_3_0.members) || \u0275\u0275pureFunction0(7, _c13))("ngModelOptions", \u0275\u0275pureFunction0(8, _c03));
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
    \u0275\u0275property("options", \u0275\u0275pureFunction3(7, _c23, ctx_r1.form().getRawValue().date, ctx_r1.form().value.duration, ctx_r1.form().value.all_day));
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
    \u0275\u0275classProp("border-none!", ctx_r1.allow_groups);
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
_NewDeskFormDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskFormDetailsComponent, selectors: [["desk-form-details"]], inputs: { form: [1, "form"] }, outputs: { find: "find" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "divide-base-200", "space-y-2", "divide-y", 3, "formGroup"], [1, "flex", "items-center"], [1, "p-2"], [1, "mb-4", "flex", "items-center", "space-x-2"], [1, "bg-base-200", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full"], [1, "text-xl"], [1, "w-full"], [1, "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "min-w-[256px]", "flex-1"], ["for", "title"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "title", "formControlName", "title", 3, "placeholder"], [1, "relative", "min-w-[256px]", "flex-1"], ["for", "date"], ["name", "date", "formControlName", "date", 3, "to", "timezone"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-0"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "flex-col"], ["matRipple", "", 1, "relative", "flex", "h-16", "flex-1", "items-center", "justify-center", "space-x-2", 3, "click"], [1, "text-2xl"], [1, ""], [1, "absolute", "inset-x-0", "bottom-0", "m-0!", "h-1"], ["formControlName", "user", 1, "mb-4"], [1, "w-1/3", "flex-1"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr", "timezone"], ["for", "recurrence"], ["name", "recurrence", 3, "ngModelChange", "date", "ngModel", "ngModelOptions", "available_days"], ["formControlName", "update_master"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "w-px", "flex-1"], [1, "overflow-hidden"], [1, "mt-4", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["formControlName", "resources"], [1, "bg-warning", "rounded-sm", "px-2", "py-1", "text-center", "text-xs", "shadow-sm"], ["formControlName", "assets", 3, "options"]], template: function NewDeskFormDetailsComponent_Template(rf, ctx) {
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
        <!-- <div class="m-2 bg-warning p-2 text-center rounded-sm shadow-sm text-sm">
        The selected desk hasn't been booked. Please book the desk to be
        able to check-in.
        </div> -->
        @if (form()) {
            <div
                class="divide-base-200 space-y-2 divide-y"
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
                                class="absolute inset-x-0 bottom-0 m-0! h-1"
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
                                class="absolute inset-x-0 bottom-0 m-0! h-1"
                                [class.bg-base-200]="!(options | async)?.group"
                                [class.bg-secondary]="(options | async)?.group"
                            ></div>
                        </button>
                    </section>
                }
                <section class="p-2" [class.border-none!]="allow_groups">
                    <h3 class="mb-4 flex items-center space-x-2">
                        <div
                            class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
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
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
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
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
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
                                class="bg-warning rounded-sm px-2 py-1 text-center text-xs shadow-sm"
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
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
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
    this.loading = signal(false);
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
    this.loading.set(true);
    this.form.patchValue({ booking_type: "desk" });
    let method = () => this._booking_form.postForm();
    if ((await nextValueFrom(this._booking_form.options))?.group) {
      method = () => this._booking_form.postFormForGroup();
    }
    const event = await method().catch((_) => {
      notifyError(_);
      this.loading.set(false);
      throw _;
    });
    this.event.emit({ reason: "done", metadata: event });
    notifySuccess(i18n("APP.CONCIERGE.DESKS_BOOKING_SUCCESS"));
    this._dialog_ref.close();
    this.loading.set(false);
  }
};
_DeskBookModalComponent.\u0275fac = function DeskBookModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskBookModalComponent)();
};
_DeskBookModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskBookModalComponent, selectors: [["desk-book-modal"]], outputs: { event: "event" }, decls: 4, vars: 7, consts: [[3, "confirm", "heading", "loading"], [3, "form"]], template: function DeskBookModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("confirm", function DeskBookModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
      return ctx.save();
    });
    \u0275\u0275element(3, "desk-form-details", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 3, ctx.form.value.id ? "APP.CONCIERGE.DESKS_BOOK_EDIT" : "APP.CONCIERGE.DESKS_BOOK_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 5, "APP.CONCIERGE.DESKS_BOOKING_LOADING") : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("form", ctx.form);
  }
}, dependencies: [
  CommonModule,
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
                loading()
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskBookModalComponent, { className: "DeskBookModalComponent", filePath: "apps/concierge/src/app/desks/desk-book-modal.component.ts", lineNumber: 48 });
})();

// apps/concierge/src/app/desks/desk-qr-code-modal.component.ts
function DeskQrCodeModalComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275pipe(1, "safe");
    \u0275\u0275elementStart(2, "div", 6);
    \u0275\u0275element(3, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const desk_r1 = ctx.$implicit;
    \u0275\u0275property("href", \u0275\u0275pipeBind2(1, 3, desk_r1.qr_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", desk_r1.qr_code, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", desk_r1.name || desk_r1.id, " ");
  }
}
var _DeskQrCodeModalComponent = class _DeskQrCodeModalComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._state = inject(DesksStateService);
    this.print = () => window.print();
    this.desks = computed(() => this._state.desks().map((_) => {
      this.loadQrCode(_);
      return _;
    }));
  }
  get kiosk_url() {
    const path = this._settings.get("app.workplace_url_path") || "/workplace";
    return `${window.location.origin}${path}`;
  }
  loadQrCode(item) {
    const link = `${this.kiosk_url}/#/book/code?asset_id=${encodeURIComponent(item.id)}`;
    item.qr_link = link;
    item.qr_code = generateQRCode(link);
    return item.qr_code;
  }
};
_DeskQrCodeModalComponent.\u0275fac = function DeskQrCodeModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskQrCodeModalComponent)();
};
_DeskQrCodeModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskQrCodeModalComponent, selectors: [["desk-qr-code-modal"]], decls: 11, vars: 3, consts: [[1, "bg-base-100", "relative", "min-h-screen", "w-screen", "rounded-none"], [1, "sticky", "top-0", "flex", "w-full", "items-center", "justify-between", "p-4", "print:hidden"], ["btn", "", "matRipple", "", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-[calc(100vh-5rem)]", "flex-wrap", "overflow-auto", "print:h-auto"], ["target", "_blank", "ref", "noopener noreferrer", 1, "mx-auto", "flex", "w-[28%]", "flex-col", "items-center", "justify-center", "landscape:w-[21%]", "print:h-[25vh]", "print:landscape:h-[33.33vh]", 3, "href"], [1, "border-base-200", "bg-base-100", "mx-4", "my-2", "block", "rounded-lg", "border", "p-2"], [1, "w-48", 3, "src"], [1, "bg-base-200", "mx-4", "my-1", "w-[calc(100%-2rem)]", "rounded-sm", "p-1", "text-center", "font-mono", "text-sm"]], template: function DeskQrCodeModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275listener("click", function DeskQrCodeModalComponent_Template_button_click_2_listener() {
      return ctx.print();
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 3)(6, "icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 4);
    \u0275\u0275repeaterCreate(9, DeskQrCodeModalComponent_For_10_Template, 6, 6, "a", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.DESKS_ACTION_PRINT_QR_LIST"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.desks());
  }
}, dependencies: [
  CommonModule,
  MatDialogModule,
  MatDialogClose,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  IconComponent,
  SafePipe
], encapsulation: 2 });
var DeskQrCodeModalComponent = _DeskQrCodeModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskQrCodeModalComponent, [{
    type: Component,
    args: [{ selector: "desk-qr-code-modal", template: `
        <div class="bg-base-100 relative min-h-screen w-screen rounded-none">
            <div
                class="sticky top-0 flex w-full items-center justify-between p-4 print:hidden"
            >
                <button btn matRipple (click)="print()">
                    {{ 'APP.CONCIERGE.DESKS_ACTION_PRINT_QR_LIST' | translate }}
                </button>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </div>
            <div
                class="flex h-[calc(100vh-5rem)] flex-wrap overflow-auto print:h-auto"
            >
                @for (desk of desks(); track desk) {
                    <a
                        [href]="desk.qr_link | safe: 'url'"
                        target="_blank"
                        ref="noopener noreferrer"
                        class="mx-auto flex w-[28%] flex-col items-center justify-center landscape:w-[21%] print:h-[25vh] print:landscape:h-[33.33vh]"
                    >
                        <div
                            class="border-base-200 bg-base-100 mx-4 my-2 block rounded-lg border p-2"
                        >
                            <img class="w-48" [src]="desk.qr_code" />
                        </div>
                        <div
                            class="bg-base-200 mx-4 my-1 w-[calc(100%-2rem)] rounded-sm p-1 text-center font-mono text-sm"
                        >
                            {{ desk.name || desk.id }}
                        </div>
                    </a>
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      MatDialogModule,
      MatRippleModule,
      TranslatePipe,
      IconComponent,
      SafePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskQrCodeModalComponent, { className: "DeskQrCodeModalComponent", filePath: "apps/concierge/src/app/desks/desk-qr-code-modal.component.ts", lineNumber: 60 });
})();

// apps/concierge/src/app/desks/desks.component.ts
var _c04 = ["app-desks", ""];
function DesksComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function DesksComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newDeskBooking());
    });
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 14);
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.NEW_BOOKING"), " ");
  }
}
function DesksComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function DesksComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editDesk());
    });
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 14);
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.DESKS_NEW"), " ");
  }
}
function DesksComponent_Conditional_13_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const level_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_12_0 = \u0275\u0275pipeBind1(2, 1, level_r5.parent_id)) == null ? null : tmp_12_0.display_name, " ");
  }
}
function DesksComponent_Conditional_13_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16)(1, "div", 17);
    \u0275\u0275conditionalCreate(2, DesksComponent_Conditional_13_For_4_Conditional_2_Template, 5, 3, "div", 18);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", level_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r5.display_name || level_r5.name, " ");
  }
}
function DesksComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 9)(1, "mat-select", 15);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function DesksComponent_Conditional_13_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateZones($event));
    });
    \u0275\u0275repeaterCreate(3, DesksComponent_Conditional_13_For_4_Template, 5, 3, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.filters().zones)("placeholder", \u0275\u0275pipeBind1(2, 2, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
function DesksComponent_Conditional_14_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const level_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_12_0 = \u0275\u0275pipeBind1(2, 1, level_r7.parent_id)) == null ? null : tmp_12_0.display_name, " ");
  }
}
function DesksComponent_Conditional_14_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16)(1, "div", 17);
    \u0275\u0275conditionalCreate(2, DesksComponent_Conditional_14_For_4_Conditional_2_Template, 5, 3, "div", 18);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", level_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r7.display_name || level_r7.name, " ");
  }
}
function DesksComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 9)(1, "mat-select", 20);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function DesksComponent_Conditional_14_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateZones([$event]));
    });
    \u0275\u0275repeaterCreate(3, DesksComponent_Conditional_14_For_4_Template, 5, 3, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ((tmp_1_0 = ctx_r1.filters().zones) == null ? null : tmp_1_0.length) ? ctx_r1.filters().zones[0] : "")("placeholder", \u0275\u0275pipeBind1(2, 2, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
function DesksComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-options", 21);
    \u0275\u0275listener("dateChange", function DesksComponent_Conditional_16_Template_date_options_dateChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "button", 22);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DesksComponent_Conditional_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refresh());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "refresh");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function DesksComponent_Conditional_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rejectAll());
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "event_busy");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 4, "COMMON.REFRESH"))("disabled", ctx_r1.loading());
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 6, "APP.CONCIERGE.REJECT_ALL"))("disabled", ctx_r1.loading());
  }
}
function DesksComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function DesksComponent_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewQRCodes());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "qr_code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 24);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 25);
    \u0275\u0275listener("change", function DesksComponent_Conditional_17_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadCSVData($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 23);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function DesksComponent_Conditional_17_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275elementStart(11, "icon");
    \u0275\u0275text(12, "download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 26);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("click", function DesksComponent_Conditional_17_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.manageRestrictions());
    });
    \u0275\u0275elementStart(15, "icon");
    \u0275\u0275text(16, "lock_open");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 4, "APP.CONCIERGE.DESKS_VIEW_QR_CODE_LIST"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 6, "APP.CONCIERGE.DESKS_LIST_UPLOAD"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 8, "APP.CONCIERGE.DESKS_LIST_DOWNLOAD"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(14, 10, "APP.CONCIERGE.DESKS_BOOKING_RULES"));
  }
}
function DesksComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 11);
  }
}
var _DesksComponent = class _DesksComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(DesksStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._dialog = inject(MatDialog);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.loading = this._state.loading;
    this.manage = false;
    this.filters = this._state.filters;
    this.levels = toSignal(combineLatest([
      this._org.active_building,
      this._org.active_region
    ]).pipe(map(([bld, region]) => this._settings.get("app.use_region") ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld))), { initialValue: [] });
    this.setDate = (date) => this._state.setFilters({ date });
    this.setFilters = (o) => this._state.setFilters(o);
    this.refresh = () => this._state.refresh();
    this.rejectAll = () => this._state.rejectAllDesks();
    this.editDesk = () => this._state.editDesk();
    this.updateZones = (zones) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: zones.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setFilters({ zones });
    };
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  ngOnInit() {
    this.subscription("router.events", this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const url_parts = this._router.url?.split("/") || [""];
        this.path = url_parts[url_parts.length - 1].split("?")[0];
        this._updateView();
      }
    }));
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("zone_ids")) {
        const zones = params.get("zone_ids").split(",");
        if (!zones.length)
          return;
        const level = this._org.levelWithID(zones);
        this._state.setFilters({ zones });
        if (!level)
          return;
        this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
      }
    }));
    const parts = this._router.url?.split("/") || [""];
    this.path = parts[parts.length - 1].split("?")[0];
    this._updateView();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  viewQRCodes() {
    this._dialog.open(DeskQrCodeModalComponent);
  }
  newDeskBooking() {
    const ref = this._dialog.open(DeskBookModalComponent, {});
    ref.afterClosed().subscribe((_) => {
      this._state.refresh();
    });
  }
  manageRestrictions() {
    this._dialog.open(BookingRulesModalComponent, {
      data: { type: "desk" }
    });
  }
  downloadTemplate() {
    const desk = new Desk({
      id: "desk-123",
      name: "Test Desk",
      bookable: true,
      groups: ["test-desk-group", "desk-bookers"],
      features: ["Standing Desk", "Dual Monitor"]
    }).toJSON();
    delete desk.images;
    const data = jsonToCsv([desk]);
    downloadFile("desk-template.csv", data);
  }
  async loadCSVData(event) {
    const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
      notifyError(m);
      throw e;
    });
    try {
      const list = csvToJson(data) || [];
      this._state.addDesks(list.map((_) => new Desk(__spreadProps(__spreadValues({}, _), {
        id: _.id || `desk-${randomInt(999999)}`
      }))));
    } catch (e) {
      console.error(e);
    }
  }
  _getViewFromPath() {
    if (this.path.includes("manage"))
      return "manage";
    if (this.path.includes("map"))
      return "map";
    return "events";
  }
  _updateView() {
    const view = this._getViewFromPath();
    this.manage = view === "manage";
    this._state.setFilters({ view });
    if (this.manage) {
      this.subscription("zone-changes", this._org.active_levels.subscribe(async (lvls) => {
        if (!lvls.length)
          return;
        const { zones } = this._state.filters();
        const levels_in_zones = zones?.length && zones.some((z) => lvls.find((lvl) => lvl.id === z));
        if (!levels_in_zones)
          this.updateZones([lvls[0].id]);
      }));
    } else {
      this.unsub("zone-changes");
    }
  }
};
_DesksComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DesksComponent_BaseFactory;
  return function DesksComponent_Factory(__ngFactoryType__) {
    return (\u0275DesksComponent_BaseFactory || (\u0275DesksComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DesksComponent)))(__ngFactoryType__ || _DesksComponent);
  };
})();
_DesksComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesksComponent, selectors: [["", "app-desks", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c04, decls: 21, vars: 11, consts: [[1, "print:hidden"], [1, "flex", "h-px", "flex-1", "print:hidden"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "w-full", "items-center", "space-x-2", "px-8", "py-4"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], [1, "mr-2", 3, "modelChange", "model"], ["btn", "", "matRipple", "", 1, "w-44", "space-x-2"], [1, "mb-4", "flex", "w-full", "items-center", "space-x-2", "px-8"], ["appearance", "outline", 1, "no-subscript", "w-60"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"], ["mode", "indeterminate", 1, "w-full"], ["btn", "", "matRipple", "", 1, "w-44", "space-x-2", 3, "click"], [1, "pl-2"], [1, "text-2xl"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "dateChange"], ["btn", "", "icon", "", "matRipple", "", 1, "border-base-200", "ml-2", "rounded-sm", "border", 3, "click", "matTooltip", "disabled"], ["btn", "", "icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "click", "matTooltip"], ["btn", "", "icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "matTooltip"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "click", "matTooltip"]], template: function DesksComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar", 0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 2)(4, "div", 3)(5, "h2", 4);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 5);
    \u0275\u0275elementStart(9, "searchbar", 6);
    \u0275\u0275listener("modelChange", function DesksComponent_Template_searchbar_modelChange_9_listener($event) {
      return ctx.setFilters({ search: $event });
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, DesksComponent_Conditional_10_Template, 6, 3, "button", 7);
    \u0275\u0275conditionalCreate(11, DesksComponent_Conditional_11_Template, 6, 3, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 8);
    \u0275\u0275conditionalCreate(13, DesksComponent_Conditional_13_Template, 5, 4, "mat-form-field", 9);
    \u0275\u0275conditionalCreate(14, DesksComponent_Conditional_14_Template, 5, 4, "mat-form-field", 9);
    \u0275\u0275element(15, "div", 5);
    \u0275\u0275conditionalCreate(16, DesksComponent_Conditional_16_Template, 9, 8);
    \u0275\u0275conditionalCreate(17, DesksComponent_Conditional_17_Template, 17, 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 10);
    \u0275\u0275element(19, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, DesksComponent_Conditional_20_Template, 1, 0, "mat-progress-bar", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 9, ctx.manage ? "APP.CONCIERGE.DESKS_HEADER" : "APP.CONCIERGE.DESKS_BOOK_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("model", ctx.filters().search);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.path !== "manage" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.path === "manage" ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.manage ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.manage ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.path === "events" ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.path === "manage" ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.loading() && ctx.path === "events" ? 20 : -1);
  }
}, dependencies: [
  MatProgressBarModule,
  MatProgressBar,
  RouterModule,
  RouterOutlet,
  MatRippleModule,
  MatRipple,
  CommonModule,
  FormsModule,
  NgControlStatus,
  NgModel,
  IconComponent,
  MatTooltipModule,
  MatTooltip,
  DateOptionsComponent,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  SearchbarComponent,
  TranslatePipe,
  BuildingPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=desks.component.css.map */"] });
var DesksComponent = _DesksComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesksComponent, [{
    type: Component,
    args: [{ selector: "[app-desks]", template: `
        <app-topbar class="print:hidden" />
        <div class="flex h-px flex-1 print:hidden">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <div class="flex w-full items-center space-x-2 px-8 py-4">
                    <h2 class="text-2xl font-medium">
                        {{
                            (manage
                                ? 'APP.CONCIERGE.DESKS_HEADER'
                                : 'APP.CONCIERGE.DESKS_BOOK_HEADER'
                            ) | translate
                        }}
                    </h2>
                    <div class="w-px flex-1"></div>
                    <searchbar
                        class="mr-2"
                        [model]="filters().search"
                        (modelChange)="setFilters({ search: $event })"
                    ></searchbar>
                    @if (path !== 'manage') {
                        <button
                            btn
                            matRipple
                            class="w-44 space-x-2"
                            (click)="newDeskBooking()"
                        >
                            <div class="pl-2">
                                {{ 'APP.CONCIERGE.NEW_BOOKING' | translate }}
                            </div>
                            <icon class="text-2xl">add</icon>
                        </button>
                    }
                    @if (path === 'manage') {
                        <button
                            btn
                            matRipple
                            class="w-44 space-x-2"
                            (click)="editDesk()"
                        >
                            <div class="pl-2">
                                {{ 'APP.CONCIERGE.DESKS_NEW' | translate }}
                            </div>
                            <icon class="text-2xl">add</icon>
                        </button>
                    }
                </div>
                <div class="mb-4 flex w-full items-center space-x-2 px-8">
                    @if (!manage) {
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-60"
                        >
                            <mat-select
                                [ngModel]="filters().zones"
                                (ngModelChange)="updateZones($event)"
                                [placeholder]="'COMMON.LEVEL_ALL' | translate"
                                multiple
                            >
                                @for (level of levels(); track level) {
                                    <mat-option [value]="level.id">
                                        <div class="flex flex-col-reverse">
                                            @if (use_region) {
                                                <div class="text-xs opacity-30">
                                                    {{
                                                        (
                                                            level.parent_id
                                                            | building
                                                        )?.display_name
                                                    }}
                                                    <span class="opacity-0">
                                                        -
                                                    </span>
                                                </div>
                                            }
                                            <div>
                                                {{
                                                    level.display_name ||
                                                        level.name
                                                }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (manage) {
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-60"
                        >
                            <mat-select
                                [ngModel]="
                                    filters().zones?.length
                                        ? filters().zones[0]
                                        : ''
                                "
                                (ngModelChange)="updateZones([$event])"
                                [placeholder]="'COMMON.LEVEL_ALL' | translate"
                            >
                                @for (level of levels(); track level) {
                                    <mat-option [value]="level.id">
                                        <div class="flex flex-col-reverse">
                                            @if (use_region) {
                                                <div class="text-xs opacity-30">
                                                    {{
                                                        (
                                                            level.parent_id
                                                            | building
                                                        )?.display_name
                                                    }}
                                                    <span class="opacity-0">
                                                        -
                                                    </span>
                                                </div>
                                            }
                                            <div>
                                                {{
                                                    level.display_name ||
                                                        level.name
                                                }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    <div class="w-px flex-1"></div>
                    @if (path === 'events') {
                        <date-options
                            (dateChange)="setDate($event)"
                        ></date-options>
                        <button
                            btn
                            icon
                            matRipple
                            [matTooltip]="'COMMON.REFRESH' | translate"
                            class="border-base-200 ml-2 rounded-sm border"
                            (click)="refresh()"
                            [disabled]="loading()"
                        >
                            <icon>refresh</icon>
                        </button>
                        <button
                            btn
                            icon
                            matRipple
                            [matTooltip]="
                                'APP.CONCIERGE.REJECT_ALL' | translate
                            "
                            class="border-base-200 ml-2 rounded-sm border"
                            (click)="rejectAll()"
                            [disabled]="loading()"
                        >
                            <icon>event_busy</icon>
                        </button>
                    }
                    @if (path === 'manage') {
                        <button
                            btn
                            icon
                            matRipple
                            class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                            [matTooltip]="
                                'APP.CONCIERGE.DESKS_VIEW_QR_CODE_LIST'
                                    | translate
                            "
                            (click)="viewQRCodes()"
                        >
                            <icon>qr_code</icon>
                        </button>
                        <button
                            btn
                            icon
                            matRipple
                            class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                            [matTooltip]="
                                'APP.CONCIERGE.DESKS_LIST_UPLOAD' | translate
                            "
                        >
                            <icon>cloud_upload</icon>
                            <input
                                type="file"
                                class="absolute inset-0 opacity-0"
                                (change)="loadCSVData($any($event))"
                            />
                        </button>
                        <button
                            btn
                            icon
                            matRipple
                            class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                            (click)="downloadTemplate()"
                            [matTooltip]="
                                'APP.CONCIERGE.DESKS_LIST_DOWNLOAD' | translate
                            "
                        >
                            <icon>download</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                            (click)="manageRestrictions()"
                            [matTooltip]="
                                'APP.CONCIERGE.DESKS_BOOKING_RULES' | translate
                            "
                        >
                            <icon>lock_open</icon>
                        </button>
                    }
                </div>
                <div class="relative h-1/2 w-full flex-1 overflow-auto px-8">
                    <router-outlet></router-outlet>
                </div>
                @if (loading() && path === 'events') {
                    <mat-progress-bar
                        class="w-full"
                        mode="indeterminate"
                    ></mat-progress-bar>
                }
            </main>
        </div>
    `, imports: [
      MatProgressBarModule,
      RouterModule,
      MatRippleModule,
      CommonModule,
      FormsModule,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      DateOptionsComponent,
      MatFormFieldModule,
      MatSelectModule,
      ApplicationSidebarComponent,
      ApplicationTopbarComponent,
      SearchbarComponent,
      TranslatePipe,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/desks/desks.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=desks.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesksComponent, { className: "DesksComponent", filePath: "apps/concierge/src/app/desks/desks.component.ts", lineNumber: 305 });
})();

// apps/concierge/src/app/desks/desks.module.ts
var ROUTES = [
  {
    path: "",
    component: DesksComponent,
    children: [
      { path: "events", component: DeskBookingsComponent },
      { path: "map", component: DeskMapViewComponent },
      { path: "manage", component: DesksManageComponent },
      { path: "**", redirectTo: "events" }
    ]
  }
];
var _DesksModule = class _DesksModule {
};
_DesksModule.\u0275fac = function DesksModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DesksModule)();
};
_DesksModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DesksModule });
_DesksModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  DesksComponent,
  DeskBookingsComponent,
  DeskMapViewComponent,
  DesksManageComponent,
  RouterModule.forChild(ROUTES)
] });
var DesksModule = _DesksModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesksModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        DesksComponent,
        DeskBookingsComponent,
        DeskMapViewComponent,
        DesksManageComponent,
        RouterModule.forChild(ROUTES)
      ]
    }]
  }], null, null);
})();
export {
  DesksModule
};
//# sourceMappingURL=desks.module-EJROK56L.js.map
