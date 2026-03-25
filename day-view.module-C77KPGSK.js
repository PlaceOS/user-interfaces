import {
  EventSummaryDialogComponent
} from "./chunk-ZG5MWWMX.js";
import "./chunk-D54ZDHOD.js";
import "./chunk-NIPB5KR4.js";
import {
  EventsStateService
} from "./chunk-HZSRGTQ4.js";
import {
  MOCK_APPROVAL_EVENTS
} from "./chunk-K4YRX3PK.js";
import "./chunk-UZWZYCJZ.js";
import "./chunk-DMHKYXHX.js";
import "./chunk-CPERCIGK.js";
import {
  DateOptionsComponent
} from "./chunk-2NVJ6I5I.js";
import "./chunk-VZETUNS6.js";
import "./chunk-4PWTWFLT.js";
import "./chunk-3FN4NPVV.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-TYEIOTTY.js";
import "./chunk-XFQJKEL3.js";
import {
  UserPipe,
  setHours
} from "./chunk-4MJY7RRT.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  BuildingPipe,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  LevelPipe,
  MatDialog,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NgClass,
  NgControlStatus,
  NgModel,
  NgModule,
  OrganisationService,
  Router,
  RouterModule,
  SettingsService,
  SettingsToggleComponent,
  SpacePipe,
  TranslatePipe,
  addDays,
  addHours,
  combineLatest,
  debounceTime,
  differenceInMinutes,
  downloadFile,
  filter,
  format,
  getTimezoneDifferenceInHours,
  getTimezoneOffsetInMinutes,
  getTimezoneOffsetString,
  i18n,
  inject,
  isSameDay,
  jsonToCsv,
  map,
  nextValueFrom,
  normalizeDates,
  output,
  setClassMetadata,
  shareReplay,
  signal,
  startOfDay,
  startOfMinute,
  startOfWeek,
  startWith,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵviewQuerySignal
} from "./chunk-25H4I2JW.js";
import "./chunk-KWSTWQNB.js";

// node_modules/date-fns/isSameWeek.js
function isSameWeek(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return +startOfWeek(laterDate_, options) === +startOfWeek(earlierDate_, options);
}

// apps/concierge/src/app/day-view/room-approvals.component.ts
var _c0 = (a0, a1) => ({ count: a0, total: a1 });
function RoomBookingsApprovalsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "img", 13);
    \u0275\u0275elementStart(2, "p", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.ROOMS_PENDING_EMPTY"), " ");
  }
}
function RoomBookingsApprovalsComponent_For_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "icon");
    \u0275\u0275text(2, "event_repeat");
    \u0275\u0275elementEnd()();
  }
}
function RoomBookingsApprovalsComponent_For_22_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(2, 1, event_r2.date, "zzzz", ctx_r2.tz));
  }
}
function RoomBookingsApprovalsComponent_For_22_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "img", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const space_r4 = \u0275\u0275readContextLet(2);
    \u0275\u0275advance();
    \u0275\u0275property("source", space_r4 == null ? null : space_r4.images[0]);
  }
}
function RoomBookingsApprovalsComponent_For_22_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 19);
  }
}
function RoomBookingsApprovalsComponent_For_22_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34)(1, "icon");
    \u0275\u0275text(2, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-menu", null, 0)(5, "button", 35);
    \u0275\u0275listener("click", function RoomBookingsApprovalsComponent_For_22_Conditional_49_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const event_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.approveSeries(event_r2));
    });
    \u0275\u0275elementStart(6, "div", 36)(7, "icon", 30);
    \u0275\u0275text(8, "done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 35);
    \u0275\u0275listener("click", function RoomBookingsApprovalsComponent_For_22_Conditional_49_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const event_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.rejectSeries(event_r2));
    });
    \u0275\u0275elementStart(13, "div", 36)(14, "icon", 32);
    \u0275\u0275text(15, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const menu_r6 = \u0275\u0275reference(4);
    \u0275\u0275property("matMenuTriggerFor", menu_r6);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 3, "APP.CONCIERGE.ROOMS_APPROVE_SERIES"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 5, "APP.CONCIERGE.ROOMS_REJECT_SERIES"), " ");
  }
}
function RoomBookingsApprovalsComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275conditionalCreate(1, RoomBookingsApprovalsComponent_For_22_Conditional_1_Template, 3, 0, "div", 15);
    \u0275\u0275declareLet(2);
    \u0275\u0275pipe(3, "space");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "space");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementStart(7, "h3", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 17);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275pipe(12, "date");
    \u0275\u0275pipe(13, "date");
    \u0275\u0275conditionalCreate(14, RoomBookingsApprovalsComponent_For_22_Conditional_14_Template, 3, 5, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, RoomBookingsApprovalsComponent_For_22_Conditional_15_Template, 2, 1, "div", 18)(16, RoomBookingsApprovalsComponent_For_22_Conditional_16_Template, 1, 0, "hr", 19);
    \u0275\u0275elementStart(17, "div", 20)(18, "div", 21)(19, "icon", 22);
    \u0275\u0275text(20, "place");
    \u0275\u0275elementEnd()();
    \u0275\u0275declareLet(21);
    \u0275\u0275pipe(22, "building");
    \u0275\u0275declareLet(23);
    \u0275\u0275pipe(24, "level");
    \u0275\u0275elementStart(25, "div", 23)(26, "div", 24);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 25);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 20)(31, "div", 21)(32, "icon", 22);
    \u0275\u0275text(33, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 26);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 27)(37, "button", 28);
    \u0275\u0275listener("click", function RoomBookingsApprovalsComponent_For_22_Template_button_click_37_listener() {
      const event_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.approve(event_r2));
    });
    \u0275\u0275elementStart(38, "div", 29);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "icon", 30);
    \u0275\u0275text(42, "done");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "button", 31);
    \u0275\u0275listener("click", function RoomBookingsApprovalsComponent_For_22_Template_button_click_43_listener() {
      const event_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reject(event_r2));
    });
    \u0275\u0275elementStart(44, "div", 29);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "icon", 32);
    \u0275\u0275text(48, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(49, RoomBookingsApprovalsComponent_For_22_Conditional_49_Template, 19, 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r2.recurring_event_id ? 1 : -1);
    \u0275\u0275advance();
    const space_r7 = \u0275\u0275storeLet((event_r2.resources.length ? \u0275\u0275pipeBind1(4, 18, \u0275\u0275pipeBind1(3, 16, event_r2.resources[0] == null ? null : event_r2.resources[0].email)) : \u0275\u0275pipeBind1(6, 22, \u0275\u0275pipeBind1(5, 20, event_r2.mailbox))) || event_r2.system);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(event_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind3(11, 25, event_r2.date, "mediumDate", ctx_r2.tz), " ", \u0275\u0275pipeBind3(12, 29, event_r2.date, ctx_r2.time_format, ctx_r2.tz), " \u2013 ", \u0275\u0275pipeBind3(13, 33, event_r2.date_end, ctx_r2.time_format, ctx_r2.tz), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.tz ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((space_r7 == null ? null : space_r7.images == null ? null : space_r7.images.length) ? 15 : 16);
    const bld_r8 = \u0275\u0275pipeBind1(22, 37, space_r7 == null ? null : space_r7.zones);
    const lvl_r9 = \u0275\u0275pipeBind1(24, 39, space_r7 == null ? null : space_r7.zones);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", (space_r7 == null ? null : space_r7.display_name) || (space_r7 == null ? null : space_r7.name) || "No Location", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", (bld_r8 == null ? null : bld_r8.display_name) || (bld_r8 == null ? null : bld_r8.name), ", ", (lvl_r9 == null ? null : lvl_r9.display_name) || (lvl_r9 == null ? null : lvl_r9.name), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (event_r2.organiser == null ? null : event_r2.organiser.name) || event_r2.host, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.status()[event_r2.id] === "accept");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 41, ctx_r2.status()[event_r2.id] === "accept" ? "COMMON.APPROVED" : "COMMON.APPROVE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.status()[event_r2.id] === "decline");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 43, ctx_r2.status()[event_r2.id] === "decline" ? "COMMON.DECLINED" : "COMMON.DECLINE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(event_r2.recurring_event_id ? 49 : -1);
  }
}
function RoomBookingsApprovalsComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 37)(2, "mat-spinner", 38);
    \u0275\u0275elementStart(3, "p", 39);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "APP.CONCIERGE.ROOMS_PENDING_LOADING"), " ");
  }
}
function RoomBookingsApprovalsComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function RoomBookingsApprovalsComponent_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setShow(!ctx_r2.show()));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.ROOMS_PENDING_SHOW"));
  }
}
var _RoomBookingsApprovalsComponent = class _RoomBookingsApprovalsComponent {
  constructor() {
    this._state = inject(EventsStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.show = signal(true);
    this.loading = signal(false);
    this.status = signal({});
    this.search = new BehaviorSubject("");
    this.pending = this._state.pending;
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this.filtered_pending = combineLatest([
      this._state.pending,
      this.search
    ]).pipe(map(([list, search]) => list.filter((event) => event.title.toLowerCase().includes(search.toLowerCase()) || event.host.toLowerCase().includes(search.toLowerCase()) || event.organiser?.name.toLowerCase().includes(search.toLowerCase()))));
  }
  get time_format() {
    return this._settings.time_format;
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    const tz_offset = getTimezoneOffsetString(tz);
    return tz_offset === this._local_tz ? "" : tz_offset;
  }
  setShow(value) {
    this.show.set(value);
    sessionStorage.setItem("PlaceOS.Concierge.show_room_approvals", `${value}`);
  }
  ngOnInit() {
    this.show.set(sessionStorage.getItem("PlaceOS.Concierge.show_room_approvals") !== "false");
  }
  async approve(event) {
    const mod = this._org.module("approvals", "RoomBookingApproval");
    if (!mod)
      return;
    this.loading.set(true);
    await mod.execute("accept_event", [event.mailbox, event.id]).catch();
    this.loading.set(false);
    this.status.update((s) => {
      s[event.id] = "accept";
      return s;
    });
  }
  async approveSeries(event) {
    const mod = this._org.module("approvals", "RoomBookingApproval");
    if (!mod)
      return;
    this.loading.set(true);
    await mod.execute("accept_recurring_event", [event.mailbox, event.recurring_event_id || event.id], 30 * 1e3).catch();
    await mod.execute("find_bookings_for_approval").catch();
    this.loading.set(false);
    this.status.update((s) => {
      s[event.id] = "accept";
      return s;
    });
  }
  async reject(event) {
    const mod = this._org.module("approvals", "RoomBookingApproval");
    if (!mod)
      return;
    this.loading.set(true);
    await mod.execute("decline_event", [event.mailbox, event.id]).catch();
    this.loading.set(false);
    this.status.update((s) => {
      s[event.id] = "decline";
      return s;
    });
  }
  async rejectSeries(event) {
    const mod = this._org.module("approvals", "RoomBookingApproval");
    if (!mod)
      return;
    this.loading.set(true);
    await mod.execute("decline_recurring_event", [event.mailbox, event.recurring_event_id || event.id], 30 * 1e3).catch();
    await mod.execute("find_bookings_for_approval").catch();
    this.loading.set(false);
    this.status.update((s) => {
      s[event.id] = "decline";
      return s;
    });
  }
};
_RoomBookingsApprovalsComponent.\u0275fac = function RoomBookingsApprovalsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoomBookingsApprovalsComponent)();
};
_RoomBookingsApprovalsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomBookingsApprovalsComponent, selectors: [["room-bookings-approvals"]], decls: 26, vars: 32, consts: [["menu", "matMenu"], [1, "border-base-300", "flex", "h-full", "w-[20rem]", "flex-col", "overflow-hidden", "border-l"], [1, "border-base-200", "relative", "flex", "items-center", "justify-center", "space-x-2", "border-b", "p-2"], ["btn", "", "icon", "", "matRipple", "", "matTooltipPosition", "left", "aria-label", "Hide pending approvals", 1, "bg-base-200", "absolute", "top-3", "left-2", 3, "click", "matTooltip"], [1, "flex-1", "py-3", "text-center"], [1, "border-base-300", "relative", "-mt-px", "border-b"], ["type", "text", 1, "w-full", "py-4", "pr-4", "pl-10", 3, "ngModelChange", "placeholder", "ngModel"], [1, "pointer-events-none", "absolute", "top-1/2", "left-2", "-translate-y-1/2", "text-2xl"], [1, "bg-base-200", "flex-1", "space-y-1", "overflow-auto", "p-1"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "border-base-300", "bg-base-100", "relative", "w-full", "rounded-lg", "border", "p-2"], [1, "absolute", "top-14", "right-0", "bottom-0", "left-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-2"], ["btn", "", "icon", "", "matRipple", "", "matTooltipPosition", "left", "aria-label", "Show pending approvals", 1, "bg-warning", "text-warning-content", "absolute", "top-3", "-left-8", "shadow-sm", 3, "matTooltip"], ["src", "assets/icons/no-pending.svg"], [1, "opacity-60"], ["matTooltip", "Recurring Series", "matTooltipPosition", "left", 1, "absolute", "top-3", "right-2", "text-2xl"], [1, "font-medium"], [1, "mb-2", "text-xs", "opacity-60"], [1, "bg-base-200", "mb-2", "h-32", "w-full", "overflow-hidden", "rounded-sm"], [1, "border-base-300", "bg-base-200", "mb-2"], [1, "mb-2", "flex", "items-center", "space-x-2"], [1, "bg-base-200", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full"], [1, "text-xl"], [1, "flex-1"], [1, "text-sm"], [1, "text-xs", "opacity-60"], [1, "flex-1", "text-sm"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "border-success", "bg-success-light", "flex", "min-w-0", "flex-1", "items-center", "space-x-1", "text-black", 3, "click", "disabled"], [1, "ml-2"], [1, "text-success", "text-2xl"], ["btn", "", "matRipple", "", 1, "border-error", "bg-error-light", "flex", "min-w-0", "flex-1", "items-center", "space-x-1", "text-black", 3, "click", "disabled"], [1, "text-error", "text-2xl"], ["auth", "", 1, "min-h-full", "min-w-full", "object-cover", "object-center", 3, "source"], ["icon", "", "matRipple", "", "aria-label", "More actions", 1, "border-base-300", "bg-base-200", "h-12", "w-12", "rounded-md", "border", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2", "pr-4"], [1, "bg-base-100", "absolute", "inset-0", "z-0", "opacity-80"], ["diameter", "32"], [1, "relative", "z-10"], ["btn", "", "icon", "", "matRipple", "", "matTooltipPosition", "left", "aria-label", "Show pending approvals", 1, "bg-warning", "text-warning-content", "absolute", "top-3", "-left-8", "shadow-sm", 3, "click", "matTooltip"]], template: function RoomBookingsApprovalsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function RoomBookingsApprovalsComponent_Template_button_click_2_listener() {
      return ctx.setShow(!ctx.show());
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3", 4);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "async");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 5)(12, "input", 6);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275pipe(14, "async");
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275listener("ngModelChange", function RoomBookingsApprovalsComponent_Template_input_ngModelChange_12_listener($event) {
      return ctx.search.next($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "icon", 7);
    \u0275\u0275text(17, " search ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 8);
    \u0275\u0275conditionalCreate(19, RoomBookingsApprovalsComponent_Conditional_19_Template, 5, 3, "div", 9);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275repeaterCreate(21, RoomBookingsApprovalsComponent_For_22_Template, 50, 45, "div", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(24, RoomBookingsApprovalsComponent_Conditional_24_Template, 6, 3, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, RoomBookingsApprovalsComponent_Conditional_25_Template, 4, 3, "button", 12);
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_6_0;
    \u0275\u0275styleProp("width", ctx.show() ? "" : "0px");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 10, "APP.CONCIERGE.ROOMS_PENDING_HIDE"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 16, "APP.CONCIERGE.ROOMS_PENDING_HEADER", \u0275\u0275pureFunction2(29, _c0, ((tmp_2_0 = \u0275\u0275pipeBind1(8, 12, ctx.filtered_pending)) == null ? null : tmp_2_0.length) || "0", ((tmp_2_0 = \u0275\u0275pipeBind1(9, 14, ctx.pending)) == null ? null : tmp_2_0.length) || "0")), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(13, 19, "COMMON.SEARCH"))("ngModel", \u0275\u0275pipeBind1(14, 21, ctx.search));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(15, 23, "COMMON.SEARCH"));
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_6_0 = \u0275\u0275pipeBind1(20, 25, ctx.filtered_pending)) == null ? null : tmp_6_0.length) ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(23, 27, ctx.filtered_pending));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.loading() ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.show() ? 25 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  TranslatePipe,
  IconComponent,
  BuildingPipe,
  LevelPipe,
  SpacePipe,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  AuthenticatedImageDirective,
  MatTooltipModule,
  MatTooltip,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  height: 100%;\n}\n/*# sourceMappingURL=room-approvals.component.css.map */"] });
var RoomBookingsApprovalsComponent = _RoomBookingsApprovalsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomBookingsApprovalsComponent, [{
    type: Component,
    args: [{ selector: "room-bookings-approvals", template: `
        <div
            class="border-base-300 flex h-full w-[20rem] flex-col overflow-hidden border-l"
            [style.width]="show() ? '' : '0px'"
        >
            <div
                class="border-base-200 relative flex items-center justify-center space-x-2 border-b p-2"
            >
                <button
                    btn
                    icon
                    matRipple
                    class="bg-base-200 absolute top-3 left-2"
                    [matTooltip]="
                        'APP.CONCIERGE.ROOMS_PENDING_HIDE' | translate
                    "
                    matTooltipPosition="left"
                    (click)="setShow(!show())"
                    aria-label="Hide pending approvals"
                >
                    <icon>chevron_right</icon>
                </button>
                <h3 class="flex-1 py-3 text-center">
                    {{
                        'APP.CONCIERGE.ROOMS_PENDING_HEADER'
                            | translate
                                : {
                                      count:
                                          (filtered_pending | async)?.length ||
                                          '0',
                                      total: (pending | async)?.length || '0',
                                  }
                    }}
                </h3>
            </div>
            <div class="border-base-300 relative -mt-px border-b">
                <input
                    type="text"
                    [placeholder]="'COMMON.SEARCH' | translate"
                    [attr.aria-label]="'COMMON.SEARCH' | translate"
                    class="w-full py-4 pr-4 pl-10"
                    [ngModel]="search | async"
                    (ngModelChange)="search.next($event)"
                />
                <icon
                    class="pointer-events-none absolute top-1/2 left-2 -translate-y-1/2 text-2xl"
                >
                    search
                </icon>
            </div>
            <div class="bg-base-200 flex-1 space-y-1 overflow-auto p-1">
                @if (!(filtered_pending | async)?.length) {
                    <div
                        class="flex h-full w-full flex-col items-center justify-center space-y-2"
                    >
                        <img src="assets/icons/no-pending.svg" />
                        <p class="opacity-60">
                            {{
                                'APP.CONCIERGE.ROOMS_PENDING_EMPTY' | translate
                            }}
                        </p>
                    </div>
                }
                @for (event of filtered_pending | async; track event) {
                    <div
                        class="border-base-300 bg-base-100 relative w-full rounded-lg border p-2"
                    >
                        @if (event.recurring_event_id) {
                            <div
                                class="absolute top-3 right-2 text-2xl"
                                matTooltip="Recurring Series"
                                matTooltipPosition="left"
                            >
                                <icon>event_repeat</icon>
                            </div>
                        }
                        @let space =
                            (event.resources.length
                                ? (event.resources[0]?.email | space | async)
                                : (event.mailbox | space | async)) ||
                            event.system;
                        <h3 class="font-medium">{{ event.title }}</h3>
                        <p class="mb-2 text-xs opacity-60">
                            {{ event.date | date: 'mediumDate' : tz }}
                            {{ event.date | date: time_format : tz }} &ndash;
                            {{ event.date_end | date: time_format : tz }}
                            @if (tz) {
                                <span>{{
                                    event.date | date: 'zzzz' : tz
                                }}</span>
                            }
                        </p>
                        @if (space?.images?.length) {
                            <div
                                class="bg-base-200 mb-2 h-32 w-full overflow-hidden rounded-sm"
                            >
                                <img
                                    auth
                                    class="min-h-full min-w-full object-cover object-center"
                                    [source]="space?.images[0]"
                                />
                            </div>
                        } @else {
                            <hr class="border-base-300 bg-base-200 mb-2" />
                        }
                        <div class="mb-2 flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
                            >
                                <icon class="text-xl">place</icon>
                            </div>
                            @let bld = $any(space?.zones) | building;
                            @let lvl = $any(space?.zones) | level;
                            <div class="flex-1">
                                <div class="text-sm">
                                    {{
                                        space?.display_name ||
                                            space?.name ||
                                            'No Location'
                                    }}
                                </div>
                                <div class="text-xs opacity-60">
                                    {{ bld?.display_name || bld?.name }},
                                    {{ lvl?.display_name || lvl?.name }}
                                </div>
                            </div>
                        </div>
                        <div class="mb-2 flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
                            >
                                <icon class="text-xl">person</icon>
                            </div>
                            <div class="flex-1 text-sm">
                                {{ event.organiser?.name || event.host }}
                            </div>
                        </div>
                        <div class="flex items-center space-x-2">
                            <button
                                btn
                                matRipple
                                class="border-success bg-success-light flex min-w-0 flex-1 items-center space-x-1 text-black"
                                [disabled]="status()[event.id] === 'accept'"
                                (click)="approve(event)"
                            >
                                <div class="ml-2">
                                    {{
                                        (status()[event.id] === 'accept'
                                            ? 'COMMON.APPROVED'
                                            : 'COMMON.APPROVE'
                                        ) | translate
                                    }}
                                </div>
                                <icon class="text-success text-2xl">done</icon>
                            </button>
                            <button
                                btn
                                matRipple
                                class="border-error bg-error-light flex min-w-0 flex-1 items-center space-x-1 text-black"
                                [disabled]="status()[event.id] === 'decline'"
                                (click)="reject(event)"
                            >
                                <div class="ml-2">
                                    {{
                                        (status()[event.id] === 'decline'
                                            ? 'COMMON.DECLINED'
                                            : 'COMMON.DECLINE'
                                        ) | translate
                                    }}
                                </div>
                                <icon class="text-error text-2xl">close</icon>
                            </button>
                            @if (event.recurring_event_id) {
                                <button
                                    icon
                                    matRipple
                                    class="border-base-300 bg-base-200 h-12 w-12 rounded-md border"
                                    [matMenuTriggerFor]="menu"
                                    aria-label="More actions"
                                >
                                    <icon>more_vert</icon>
                                </button>
                                <mat-menu #menu="matMenu">
                                    <button
                                        mat-menu-item
                                        (click)="approveSeries(event)"
                                    >
                                        <div
                                            class="flex items-center space-x-2 pr-4"
                                        >
                                            <icon class="text-success text-2xl"
                                                >done</icon
                                            >
                                            <div>
                                                {{
                                                    'APP.CONCIERGE.ROOMS_APPROVE_SERIES'
                                                        | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                    <button
                                        mat-menu-item
                                        (click)="rejectSeries(event)"
                                    >
                                        <div
                                            class="flex items-center space-x-2 pr-4"
                                        >
                                            <icon class="text-error text-2xl"
                                                >close</icon
                                            >
                                            <div>
                                                {{
                                                    'APP.CONCIERGE.ROOMS_REJECT_SERIES'
                                                        | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                </mat-menu>
                            }
                        </div>
                    </div>
                }
            </div>
            @if (loading()) {
                <div
                    class="absolute top-14 right-0 bottom-0 left-0 flex flex-col items-center justify-center space-y-2 p-2"
                >
                    <div
                        class="bg-base-100 absolute inset-0 z-0 opacity-80"
                    ></div>
                    <mat-spinner diameter="32"></mat-spinner>
                    <p class="relative z-10">
                        {{ 'APP.CONCIERGE.ROOMS_PENDING_LOADING' | translate }}
                    </p>
                </div>
            }
        </div>
        @if (!show()) {
            <button
                btn
                icon
                matRipple
                class="bg-warning text-warning-content absolute top-3 -left-8 shadow-sm"
                (click)="setShow(!show())"
                [matTooltip]="'APP.CONCIERGE.ROOMS_PENDING_SHOW' | translate"
                matTooltipPosition="left"
                aria-label="Show pending approvals"
            >
                <icon>chevron_left</icon>
            </button>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      BuildingPipe,
      LevelPipe,
      SpacePipe,
      FormsModule,
      MatProgressSpinnerModule,
      AuthenticatedImageDirective,
      MatTooltipModule,
      MatMenuModule
    ], styles: ["/* angular:styles/component:css;5e50b7209e2af39a3705caff73713505f998945b6103484863b7ebc0a5eb9d61;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/day-view/room-approvals.component.ts */\n:host {\n  display: block;\n  position: relative;\n  height: 100%;\n}\n/*# sourceMappingURL=room-approvals.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomBookingsApprovalsComponent, { className: "RoomBookingsApprovalsComponent", filePath: "apps/concierge/src/app/day-view/room-approvals.component.ts", lineNumber: 305 });
})();

// apps/concierge/src/app/day-view/room-booking-search.component.ts
var _c02 = ["input_el"];
var _c1 = (a0, a1) => ({ count: a0, total: a1 });
function RoomBookingSearchComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 4);
    \u0275\u0275text(1, " search ");
    \u0275\u0275elementEnd();
  }
}
function RoomBookingSearchComponent_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, \u0275\u0275pipeBind1(2, 1, ctx_r1.events).length ? "APP.CONCIERGE.ROOMS_SEARCH_EMPTY" : "APP.CONCIERGE.ROOMS_EMPTY"), " ");
  }
}
function RoomBookingSearchComponent_Conditional_9_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function RoomBookingSearchComponent_Conditional_9_For_11_Template_button_click_0_listener() {
      const event_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selected.emit(event_r4));
    });
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementStart(2, "div", 13)(3, "div", 14);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 16)(10, "div", 17)(11, "div", 18);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 7);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 19);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 19);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "user");
    \u0275\u0275pipe(22, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_19_0;
    const event_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.typeColor(event_r4));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 11, event_r4.date, "dd"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 14, event_r4.date, "MMM"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("line-through", event_r4.state === "done");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r4.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(15, 17, event_r4.date, ctx_r1.time_format), " \u2013 ", \u0275\u0275pipeBind2(16, 20, event_r4.date_end, ctx_r1.time_format), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", event_r4.system == null ? null : event_r4.system.display_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_19_0 = \u0275\u0275pipeBind1(22, 25, \u0275\u0275pipeBind1(21, 23, event_r4.host))) == null ? null : tmp_19_0.name) || event_r4.host, " ");
  }
}
function RoomBookingSearchComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, RoomBookingSearchComponent_Conditional_9_Conditional_7_Template, 4, 5, "div", 8);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementStart(9, "div", 9);
    \u0275\u0275repeaterCreate(10, RoomBookingSearchComponent_Conditional_9_For_11_Template, 23, 27, "button", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, "APP.CONCIERGE.ROOMS_SEARCH_COUNT", \u0275\u0275pureFunction2(13, _c1, (tmp_2_0 = \u0275\u0275pipeBind1(4, 2, ctx_r1.filtered)) == null ? null : tmp_2_0.length, (tmp_2_0 = \u0275\u0275pipeBind1(5, 4, ctx_r1.events)) == null ? null : tmp_2_0.length)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(8, 9, ctx_r1.filtered).length ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(12, 11, ctx_r1.filtered));
  }
}
var _RoomBookingSearchComponent = class _RoomBookingSearchComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(EventsStateService);
    this._settings = inject(SettingsService);
    this.selected = output();
    this.show = false;
    this.search = new BehaviorSubject("");
    this.events = this._state.filtered;
    this.types = [
      { id: "internal", name: "Internal", color: "#D81B60" },
      { id: "external", name: "External", color: "#1E88E5" },
      { id: "cancelled", name: "Cancelled", color: "#eeeeee" }
    ];
    this.filtered = combineLatest([this.search, this.events]).pipe(map(([search, event_list]) => {
      search = search.toLowerCase();
      return event_list.filter((e) => {
        return !e.is_system_event && (e.title.toLowerCase().includes(search) || e.organiser?.name.toLowerCase().includes(search) || e.host.toLowerCase().includes(search) || e.system?.display_name.toLowerCase().includes(search) || e.system?.name.toLowerCase().includes(search) || e.resources[0]?.display_name.toLowerCase()?.includes(search) || e.resources[0]?.name.toLowerCase()?.includes(search) || e.resources[0]?.email.toLowerCase()?.includes(search));
      });
    }));
    this._input_element = viewChild("input_el");
  }
  get time_format() {
    return this._settings.time_format;
  }
  typeColor(event) {
    const type = this.types.find((_) => _.id === event.type);
    return type?.color || "#EEE";
  }
  ngOnInit() {
    this.types = [
      {
        id: "internal",
        name: i18n("COMMON.TYPE_INTERNAL"),
        color: "#D81B60"
      },
      {
        id: "external",
        name: i18n("COMMON.TYPE_EXTERNAL"),
        color: "#1E88E5"
      },
      {
        id: "cancelled",
        name: i18n("COMMON.TYPE_CANCELLED"),
        color: "#eeeeee"
      }
    ];
  }
  showSearch() {
    this.show = true;
    this._input_element().nativeElement.focus();
  }
  hideSearch() {
    if (!this.show)
      return;
    this.timeout("hide", () => this.show = false);
  }
};
_RoomBookingSearchComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RoomBookingSearchComponent_BaseFactory;
  return function RoomBookingSearchComponent_Factory(__ngFactoryType__) {
    return (\u0275RoomBookingSearchComponent_BaseFactory || (\u0275RoomBookingSearchComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RoomBookingSearchComponent)))(__ngFactoryType__ || _RoomBookingSearchComponent);
  };
})();
_RoomBookingSearchComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomBookingSearchComponent, selectors: [["room-booking-search"]], viewQuery: function RoomBookingSearchComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._input_element, _c02, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, outputs: { selected: "selected" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 13, consts: [["input_el", ""], [1, "relative"], ["icon", "", "matRipple", "", "aria-label", "Search bookings", 3, "click"], [1, "border-base-300", "bg-base-100", "absolute", "top-1/2", "right-0", "w-[20rem]", "-translate-y-1/2", "rounded-full", "border", "py-3", "pr-4", "pl-10", "shadow-sm", 3, "ngModelChange", "blur", "ngModel", "placeholder"], [1, "absolute", "top-1/2", "right-70", "-translate-y-1/2", "text-2xl"], [1, "border-base-300", "bg-base-100", "absolute", "top-full", "right-4", "max-h-[65vh]", "w-[18rem]", "translate-y-2", "overflow-auto", "rounded-sm", "border", "shadow-sm"], [1, "bg-base-100", "sticky", "top-0", "z-10", "rounded-sm", "p-4"], [1, "text-xs", "opacity-60"], [1, "flex", "items-center", "justify-center", "p-4", "text-center", "text-sm", "opacity-60"], [1, "-mt-2", "px-2", "pb-2"], ["matRipple", "", 1, "hover:bg-base-200", "relative", "z-0", "flex", "w-full", "items-center", "space-x-2", "rounded-sm", "p-2", "text-left"], ["matRipple", "", 1, "hover:bg-base-200", "relative", "z-0", "flex", "w-full", "items-center", "space-x-2", "rounded-sm", "p-2", "text-left", 3, "click"], [1, "h-10", "w-1", "rounded-full"], ["date", "", 1, "leading-tight"], [1, "mx-auto", "text-2xl"], [1, "mx-auto", "-mt-1", "text-sm", "font-medium", "uppercase"], [1, "w-1/2", "flex-1"], [1, "flex", "w-full", "items-center", "space-x-2"], [1, "flex-1", "truncate", "text-sm"], [1, "truncate", "text-xs", "opacity-60"]], template: function RoomBookingSearchComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
    \u0275\u0275listener("click", function RoomBookingSearchComponent_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.showSearch());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "input", 3, 0);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("ngModelChange", function RoomBookingSearchComponent_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search.next($event));
    })("blur", function RoomBookingSearchComponent_Template_input_blur_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.hideSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, RoomBookingSearchComponent_Conditional_8_Template, 2, 0, "icon", 4);
    \u0275\u0275conditionalCreate(9, RoomBookingSearchComponent_Conditional_9_Template, 13, 16, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275classProp("opacity-0", !ctx.show)("pointer-events-none", !ctx.show);
    \u0275\u0275property("ngModel", ctx.search.getValue())("placeholder", \u0275\u0275pipeBind1(6, 9, "APP.CONCIERGE.ROOMS_SEARCH"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 11, "APP.CONCIERGE.ROOMS_SEARCH"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.show ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show ? 9 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  UserPipe,
  MatRippleModule,
  MatRipple,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  IconComponent,
  TranslatePipe
], encapsulation: 2 });
var RoomBookingSearchComponent = _RoomBookingSearchComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomBookingSearchComponent, [{
    type: Component,
    args: [{ selector: "room-booking-search", template: `
        <div class="relative">
            <button icon matRipple (click)="showSearch()" aria-label="Search bookings">
                <icon>search</icon>
            </button>
            <input
                #input_el
                [class.opacity-0]="!show"
                [class.pointer-events-none]="!show"
                class="border-base-300 bg-base-100 absolute top-1/2 right-0 w-[20rem] -translate-y-1/2 rounded-full border py-3 pr-4 pl-10 shadow-sm"
                [ngModel]="search.getValue()"
                (ngModelChange)="search.next($event)"
                (blur)="hideSearch()"
                [placeholder]="'APP.CONCIERGE.ROOMS_SEARCH' | translate"
                [attr.aria-label]="'APP.CONCIERGE.ROOMS_SEARCH' | translate"
            />
            @if (show) {
                <icon
                    class="absolute top-1/2 right-70 -translate-y-1/2 text-2xl"
                >
                    search
                </icon>
            }
            @if (show) {
                <div
                    class="border-base-300 bg-base-100 absolute top-full right-4 max-h-[65vh] w-[18rem] translate-y-2 overflow-auto rounded-sm border shadow-sm"
                >
                    <div class="bg-base-100 sticky top-0 z-10 rounded-sm p-4">
                        <div class="text-xs opacity-60">
                            {{
                                'APP.CONCIERGE.ROOMS_SEARCH_COUNT'
                                    | translate
                                        : {
                                              count: (filtered | async)?.length,
                                              total: (events | async)?.length,
                                          }
                            }}
                        </div>
                    </div>
                    @if (!(filtered | async).length) {
                        <div
                            class="flex items-center justify-center p-4 text-center text-sm opacity-60"
                        >
                            {{
                                ((events | async).length
                                    ? 'APP.CONCIERGE.ROOMS_SEARCH_EMPTY'
                                    : 'APP.CONCIERGE.ROOMS_EMPTY'
                                ) | translate
                            }}
                        </div>
                    }
                    <div class="-mt-2 px-2 pb-2">
                        @for (event of filtered | async; track event) {
                            <button
                                matRipple
                                class="hover:bg-base-200 relative z-0 flex w-full items-center space-x-2 rounded-sm p-2 text-left"
                                (click)="selected.emit(event)"
                            >
                                <div
                                    class="h-10 w-1 rounded-full"
                                    [style.background-color]="typeColor(event)"
                                ></div>
                                <div date class="leading-tight">
                                    <div class="mx-auto text-2xl">
                                        {{ event.date | date: 'dd' }}
                                    </div>
                                    <div
                                        class="mx-auto -mt-1 text-sm font-medium uppercase"
                                    >
                                        {{ event.date | date: 'MMM' }}
                                    </div>
                                </div>
                                <div class="w-1/2 flex-1">
                                    <div
                                        class="flex w-full items-center space-x-2"
                                    >
                                        <div
                                            class="flex-1 truncate text-sm"
                                            [class.line-through]="
                                                event.state === 'done'
                                            "
                                        >
                                            {{ event.title }}
                                        </div>
                                        <div class="text-xs opacity-60">
                                            {{ event.date | date: time_format }}
                                            &ndash;
                                            {{
                                                event.date_end
                                                    | date: time_format
                                            }}
                                        </div>
                                    </div>
                                    <div class="truncate text-xs opacity-60">
                                        {{ event.system?.display_name }}
                                    </div>
                                    <div class="truncate text-xs opacity-60">
                                        {{
                                            (event.host | user | async)?.name ||
                                                event.host
                                        }}
                                    </div>
                                </div>
                            </button>
                        }
                    </div>
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      UserPipe,
      MatRippleModule,
      FormsModule,
      IconComponent,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomBookingSearchComponent, { className: "RoomBookingSearchComponent", filePath: "apps/concierge/src/app/day-view/room-booking-search.component.ts", lineNumber: 146 });
})();

// apps/concierge/src/app/day-view/room-timeline.component.ts
var _c03 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function RoomBookingsTimelineComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.TIMEZONE_DIFF"), " ");
  }
}
function RoomBookingsTimelineComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.TODAY"), " ");
  }
}
function RoomBookingsTimelineComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const space_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", space_r1.display_name || space_r1.name, " ");
  }
}
function RoomBookingsTimelineComponent_For_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hour_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatHour(hour_r2), " ");
  }
}
function RoomBookingsTimelineComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275conditionalCreate(2, RoomBookingsTimelineComponent_For_23_Conditional_2_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_48_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r2.block_height + "rem");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275$index_48_r4 !== 0 ? 2 : -1);
  }
}
function RoomBookingsTimelineComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 25);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", "calc(" + ctx_r2.timeToOffset(ctx_r2.now) + "% + 1px)");
  }
}
function RoomBookingsTimelineComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 26);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r2.block_height + "rem");
  }
}
function RoomBookingsTimelineComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 27);
  }
  if (rf & 2) {
    const \u0275$index_66_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", "calc(" + \u0275$index_66_r5 * ctx_r2.block_width + "rem - 1px)");
  }
}
function RoomBookingsTimelineComponent_For_33_For_1_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 31);
  }
}
function RoomBookingsTimelineComponent_For_33_For_1_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("absolute inset-0 opacity-25 " + ctx_r2.statusBg(event_r7));
  }
}
function RoomBookingsTimelineComponent_For_33_For_1_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "p", 34);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", event_r7.all_day ? "All Day" : \u0275\u0275pipeBind3(3, 3, event_r7.date, ctx_r2.time_format, ctx_r2.tz), " \u2013 ", event_r7.title, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (event_r7.organiser == null ? null : event_r7.organiser.name) || event_r7.host, " ");
  }
}
function RoomBookingsTimelineComponent_For_33_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function RoomBookingsTimelineComponent_For_33_For_1_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const event_r7 = \u0275\u0275nextContext().$implicit;
      const space_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewEvent(event_r7, space_r8.id));
    });
    \u0275\u0275elementStart(1, "div", 30);
    \u0275\u0275conditionalCreate(2, RoomBookingsTimelineComponent_For_33_For_1_Conditional_0_Conditional_2_Template, 1, 0, "div", 31)(3, RoomBookingsTimelineComponent_For_33_For_1_Conditional_0_Conditional_3_Template, 1, 2, "div", 32);
    \u0275\u0275conditionalCreate(4, RoomBookingsTimelineComponent_For_33_For_1_Conditional_0_Conditional_4_Template, 6, 7, "div", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext().$implicit;
    const \u0275$index_70_r9 = \u0275\u0275nextContext().$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", \u0275$index_70_r9 * ctx_r2.block_width + 0.25 + "rem")("top", ctx_r2.timeToOffset(event_r7.date) + "%")("height", ctx_r2.endToOffset(event_r7.duration) + "%");
    \u0275\u0275property("matTooltip", ctx_r2.eventTooltip(event_r7));
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-60", event_r7.state === "done");
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r7.is_system_event ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!event_r7.is_system_event ? 4 : -1);
  }
}
function RoomBookingsTimelineComponent_For_33_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomBookingsTimelineComponent_For_33_For_1_Conditional_0_Template, 5, 11, "button", 28);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const event_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!event_r7.is_system_event || \u0275\u0275pipeBind1(1, 1, ctx_r2.ui_options).show_overflow ? 0 : -1);
  }
}
function RoomBookingsTimelineComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, RoomBookingsTimelineComponent_For_33_For_1_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const space_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(2, 0, ctx_r2.events)[space_r8.id] || \u0275\u0275pureFunction0(2, _c03));
  }
}
function RoomBookingsTimelineComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 36);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", ctx_r2.timeToOffset(ctx_r2.now) + "%");
  }
}
var _RoomBookingsTimelineComponent = class _RoomBookingsTimelineComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(EventsStateService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.block_width = 14;
    this.ui_options = this._state.options;
    this.spaces = this._state.spaces;
    this.date = this._state.date;
    this.is_today = this.date.pipe(map((d) => isSameDay(d, Date.now())));
    this.show_time = combineLatest([
      this.date,
      this._org.active_building
    ]).pipe(map(([d]) => {
      const today = isSameDay(d, Date.now());
      const offset = this.timezone ? getTimezoneDifferenceInHours(this.timezone) : 0;
      const start = addHours(setHours(startOfDay(Date.now()), this.block_start), -offset).valueOf();
      const end = addHours(setHours(startOfDay(Date.now()), this.block_end), -offset).valueOf();
      return today && Date.now() >= start && Date.now() <= end;
    }));
    this.events = combineLatest([
      this._state.spaces,
      this._state.filtered,
      this.date
    ]).pipe(debounceTime(300), map(([spaces, events, date]) => {
      const map2 = {};
      const offset = this.timezone ? getTimezoneDifferenceInHours(this.timezone) : 0;
      const start = addHours(setHours(startOfDay(date), this.block_start), -offset).valueOf();
      const end = addHours(setHours(startOfDay(date), this.block_end), -offset).valueOf();
      for (const space of spaces) {
        map2[space.id] = events.filter((event) => event.resources.find((item) => item.id === space.id || item.email === space.email) || event.system?.id === space.id || event.system?.email === space.email).filter((event) => event.date_end >= start && event.date <= end);
      }
      return map2;
    }), startWith({}), shareReplay(1));
    this._hour_list = Array.from({ length: 24 }, (_, i) => i);
    this.hours = [];
    this.edit = (e) => this._state.newBooking(e);
    this.setDate = (d) => this._state.setDate(d);
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this._date_pipe = new DatePipe("en");
  }
  get now() {
    return startOfMinute(Date.now()).valueOf();
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    const tz_offset = getTimezoneOffsetString(tz);
    return tz_offset === this._local_tz ? "" : tz_offset;
  }
  get block_start() {
    return +this._settings.get("app.events.block_start") || 0;
  }
  get block_end() {
    return +this._settings.get("app.events.block_end") || 24;
  }
  get block_range() {
    return Math.min(24, Math.max(this.block_end - this.block_start, 1));
  }
  get block_height() {
    return +this._settings.get("app.events.block_height") || 3;
  }
  get time_format() {
    return this._settings.time_format;
  }
  formatHour(hour) {
    const date = setHours(Date.now(), hour);
    return this._settings.get("app.use_24_hour_time") ? format(date, "HH:00") : format(date, "h a");
  }
  eventTooltip(event) {
    const tooltip = `Start: ${event.all_day ? "All Day" : this._date_pipe.transform(event.date, this.time_format)}
Title:  ${event.title}
Host:  ${event.organiser?.name || event.host}`;
    return tooltip;
  }
  ngOnInit() {
    this.subscription("poll", this._state.startPolling());
    this.subscription("hour_list", this._org.active_building.subscribe(() => {
      this.hours = this._hour_list.filter((h) => h >= this.block_start && h < this.block_end);
    }));
    this.hours = this._hour_list.filter((h) => h >= this.block_start && h < this.block_end);
    const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const offset = !this.timezone ? 0 : getTimezoneDifferenceInHours(current_tz, this.timezone);
  }
  timeToOffset(date) {
    const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const offset = !this.timezone ? 0 : getTimezoneDifferenceInHours(this.timezone, current_tz);
    const start_time = setHours(startOfDay(this._state.getDate()), this.block_start - offset);
    const diff = differenceInMinutes(date, start_time);
    return +(Math.max(0, diff / 60) / this.block_range * 100).toFixed(2);
  }
  endToOffset(duration) {
    return +(Math.min(this.block_range, duration / 60) / this.block_range * 100).toFixed(2);
  }
  statusBg(event) {
    if (!event.extension_data?.shared_event)
      return "bg-success";
    if (event.status === "declined")
      return "bg-error";
    if (event.status === "tentative")
      return "bg-warning";
    return "bg-success";
  }
  viewEvent(event, space_id, scroll_to = false) {
    if (event.is_system_event)
      return;
    const mock = MOCK_APPROVAL_EVENTS.find((e) => e.id === event.id);
    this._dialog.open(EventSummaryDialogComponent, {
      data: mock ? { event: mock } : { calendar_event: event }
    });
  }
};
_RoomBookingsTimelineComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RoomBookingsTimelineComponent_BaseFactory;
  return function RoomBookingsTimelineComponent_Factory(__ngFactoryType__) {
    return (\u0275RoomBookingsTimelineComponent_BaseFactory || (\u0275RoomBookingsTimelineComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RoomBookingsTimelineComponent)))(__ngFactoryType__ || _RoomBookingsTimelineComponent);
  };
})();
_RoomBookingsTimelineComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomBookingsTimelineComponent, selectors: [["room-bookings-timeline"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 37, vars: 34, consts: [[1, "bg-info", "text-info-content", "mx-2", "mt-2", "w-[calc(100%-1rem)]", "rounded-lg", "p-2", "text-center", "text-xs"], [1, "border-base-200", "relative", "z-20", "flex", "items-center", "justify-center", "space-x-2", "border-b", "p-2"], [3, "dateChange", "date", "is_new", "hide_today"], [1, "text-info", "absolute", "top-1/2", "left-4", "-translate-y-1/2", "text-sm"], [1, "absolute", "top-1/2", "right-8", "-translate-y-1/2"], [3, "selected"], ["timeline", "", 1, "z-0", "grid", "h-1/2", "w-full", "flex-1", "overflow-auto"], ["timezone", "", 1, "bg-base-100", "sticky", "top-0", "left-0", "z-30", "flex", "items-center", "justify-center"], [1, "text-xs", "opacity-60"], [1, "bg-base-300", "absolute", "right-0", "bottom-0", "h-2", "w-px"], [1, "bg-base-300", "absolute", "right-0", "bottom-0", "h-px", "w-2"], ["space-headers", "", 1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-20", "flex", "items-center", "border-b"], [1, "relative", "flex", "h-full", "w-56", "items-center", "justify-center", "px-4"], ["hour-blocks", "", 1, "border-base-300", "bg-base-100", "sticky", "left-0", "z-10", "overflow-visible", "border-r"], [1, "relative", "w-full", 3, "height"], [1, "bg-secondary", "absolute", "right-0", "h-2", "w-2", "translate-x-1/2", "-translate-y-1/2", "rounded-full", 3, "top"], ["space-blocks", "", 1, "relative", "overflow-hidden"], [1, "border-base-200", "relative", "w-full", "border-b", 3, "height"], [1, "bg-base-200", "absolute", "top-0", "h-full", "w-px", 3, "left"], [1, "bg-secondary", "absolute", "inset-x-0", "h-[2px]", 3, "top"], [1, "truncate", "px-4"], [1, "bg-base-300", "absolute", "bottom-0", "-left-px", "h-2", "w-px"], [1, "relative", "w-full"], [1, "bg-base-300", "absolute", "-top-px", "right-0", "h-px", "w-2"], [1, "absolute", "-top-px", "right-3", "-translate-y-1/2", "text-xs", "opacity-60"], [1, "bg-secondary", "absolute", "right-0", "h-2", "w-2", "translate-x-1/2", "-translate-y-1/2", "rounded-full"], [1, "border-base-200", "relative", "w-full", "border-b"], [1, "bg-base-200", "absolute", "top-0", "h-full", "w-px"], ["event", "", "matRipple", "", 1, "absolute", "w-52", "text-left", "hover:opacity-90", 3, "left", "top", "height", "matTooltip"], ["event", "", "matRipple", "", 1, "absolute", "w-52", "text-left", "hover:opacity-90", 3, "click", "matTooltip"], [1, "bg-base-100", "relative", "h-full", "w-full", "overflow-hidden", "rounded-lg", "border", "border-base-200", "px-3", "py-1", "text-xs", "shadow-sm"], [1, "bg-secondary", "absolute", "inset-0", "opacity-20"], [3, "class"], [1, "relative"], [1, "truncate", "font-medium", "text-base-content"], [1, "truncate", "text-base-content", "opacity-70"], [1, "bg-secondary", "absolute", "inset-x-0", "h-[2px]"]], template: function RoomBookingsTimelineComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomBookingsTimelineComponent_Conditional_0_Template, 3, 3, "div", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "date-options", 2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("dateChange", function RoomBookingsTimelineComponent_Template_date_options_dateChange_2_listener($event) {
      return ctx.setDate($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, RoomBookingsTimelineComponent_Conditional_4_Template, 3, 3, "div", 3);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementStart(6, "div", 4)(7, "room-booking-search", 5);
    \u0275\u0275listener("selected", function RoomBookingsTimelineComponent_Template_room_booking_search_selected_7_listener($event) {
      return ctx.viewEvent($event, $event.system == null ? null : $event.system.id, true);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "div", 9)(15, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 11);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275repeaterCreate(18, RoomBookingsTimelineComponent_For_19_Template, 4, 1, "div", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 13);
    \u0275\u0275repeaterCreate(22, RoomBookingsTimelineComponent_For_23_Template, 3, 3, "div", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(24, RoomBookingsTimelineComponent_Conditional_24_Template, 1, 2, "div", 15);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 16);
    \u0275\u0275repeaterCreate(27, RoomBookingsTimelineComponent_For_28_Template, 1, 2, "div", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275repeaterCreate(29, RoomBookingsTimelineComponent_For_30_Template, 1, 2, "div", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(31, "async");
    \u0275\u0275repeaterCreate(32, RoomBookingsTimelineComponent_For_33_Template, 3, 3, null, null, _forTrack0);
    \u0275\u0275pipe(34, "async");
    \u0275\u0275conditionalCreate(35, RoomBookingsTimelineComponent_Conditional_35_Template, 1, 2, "div", 19);
    \u0275\u0275pipe(36, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    \u0275\u0275conditional(ctx.timezone && ctx.tz ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("date", \u0275\u0275pipeBind1(3, 12, ctx.date))("is_new", true)("hide_today", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(5, 14, ctx.is_today) ? 4 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(13, 18, \u0275\u0275pipeBind1(12, 16, ctx.date), "zzzz", ctx.tz), " ");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ((tmp_6_0 = \u0275\u0275pipeBind1(17, 22, ctx.spaces)) == null ? null : tmp_6_0.length) * ctx.block_width + "rem");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(20, 24, ctx.spaces));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("height", ctx.block_range * ctx.block_height + "rem");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.hours);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(25, 26, ctx.show_time) && ctx.timeToOffset(ctx.now) < 100 ? 24 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.hours);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(31, 28, ctx.spaces));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(34, 30, ctx.spaces));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(36, 32, ctx.show_time) ? 35 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  DateOptionsComponent,
  TranslatePipe,
  RoomBookingSearchComponent,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n[timeline][_ngcontent-%COMP%] {\n  grid-template-columns: 4rem auto;\n  grid-template-rows: 3.5rem auto;\n}\n/*# sourceMappingURL=room-timeline.component.css.map */"] });
var RoomBookingsTimelineComponent = _RoomBookingsTimelineComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomBookingsTimelineComponent, [{
    type: Component,
    args: [{ selector: "room-bookings-timeline", template: `
        @if (timezone && tz) {
            <div
                class="bg-info text-info-content mx-2 mt-2 w-[calc(100%-1rem)] rounded-lg p-2 text-center text-xs"
            >
                {{ 'APP.CONCIERGE.TIMEZONE_DIFF' | translate }}
            </div>
        }
        <div
            class="border-base-200 relative z-20 flex items-center justify-center space-x-2 border-b p-2"
        >
            <date-options
                [date]="date | async"
                (dateChange)="setDate($event)"
                [is_new]="true"
                [hide_today]="true"
            ></date-options>
            @if (is_today | async) {
                <div
                    class="text-info absolute top-1/2 left-4 -translate-y-1/2 text-sm"
                >
                    {{ 'COMMON.TODAY' | translate }}
                </div>
            }
            <div class="absolute top-1/2 right-8 -translate-y-1/2">
                <room-booking-search
                    (selected)="viewEvent($event, $event.system?.id, true)"
                ></room-booking-search>
            </div>
        </div>
        <div timeline class="z-0 grid h-1/2 w-full flex-1 overflow-auto">
            <div
                timezone
                class="bg-base-100 sticky top-0 left-0 z-30 flex items-center justify-center"
            >
                <div class="text-xs opacity-60">
                    {{ date | async | date: 'zzzz' : tz }}
                </div>
                <div
                    class="bg-base-300 absolute right-0 bottom-0 h-2 w-px"
                ></div>
                <div
                    class="bg-base-300 absolute right-0 bottom-0 h-px w-2"
                ></div>
            </div>
            <div
                space-headers
                class="border-base-300 bg-base-100 sticky top-0 z-20 flex items-center border-b"
                [style.width]="(spaces | async)?.length * block_width + 'rem'"
            >
                @for (space of spaces | async; track space) {
                    <div
                        class="relative flex h-full w-56 items-center justify-center px-4"
                    >
                        <div class="truncate px-4">
                            {{ space.display_name || space.name }}
                        </div>
                        <div
                            class="bg-base-300 absolute bottom-0 -left-px h-2 w-px"
                        ></div>
                    </div>
                }
            </div>
            <div
                hour-blocks
                class="border-base-300 bg-base-100 sticky left-0 z-10 overflow-visible border-r"
                [style.height]="block_range * block_height + 'rem'"
            >
                @for (hour of hours; track hour; let i = $index) {
                    <div
                        class="relative w-full"
                        [style.height]="block_height + 'rem'"
                    >
                        <div
                            class="bg-base-300 absolute -top-px right-0 h-px w-2"
                        ></div>
                        @if (i !== 0) {
                            <div
                                class="absolute -top-px right-3 -translate-y-1/2 text-xs opacity-60"
                            >
                                {{ formatHour(hour) }}
                            </div>
                        }
                    </div>
                }
                @if ((show_time | async) && timeToOffset(now) < 100) {
                    <div
                        class="bg-secondary absolute right-0 h-2 w-2 translate-x-1/2 -translate-y-1/2 rounded-full"
                        [style.top]="'calc(' + timeToOffset(now) + '% + 1px)'"
                    ></div>
                }
            </div>
            <div space-blocks class="relative overflow-hidden">
                @for (hour of hours; track hour; let i = $index) {
                    <div
                        class="border-base-200 relative w-full border-b"
                        [style.height]="block_height + 'rem'"
                    ></div>
                }
                @for (space of spaces | async; track space; let i = $index) {
                    <div
                        class="bg-base-200 absolute top-0 h-full w-px"
                        [style.left]="'calc(' + i * block_width + 'rem - 1px)'"
                    ></div>
                }

                @for (space of spaces | async; track space.id; let i = $index) {
                    @for (
                        event of (events | async)[space.id] || [];
                        track event.id
                    ) {
                        @if (
                            !event.is_system_event ||
                            (ui_options | async).show_overflow
                        ) {
                            <button
                                event
                                matRipple
                                class="absolute w-52 text-left hover:opacity-90"
                                [style.left]="i * block_width + 0.25 + 'rem'"
                                [style.top]="timeToOffset(event.date) + '%'"
                                [style.height]="
                                    endToOffset(event.duration) + '%'
                                "
                                (click)="viewEvent(event, space.id)"
                                [matTooltip]="eventTooltip(event)"
                            >
                                <div
                                    class="bg-base-100 relative h-full w-full overflow-hidden rounded-lg border border-base-200 px-3 py-1 text-xs shadow-sm"
                                    [class.opacity-60]="event.state === 'done'"
                                >
                                    @if (event.is_system_event) {
                                        <div class="bg-secondary absolute inset-0 opacity-20"></div>
                                    } @else {
                                        <div
                                            [class]="'absolute inset-0 opacity-25 ' + statusBg(event)"
                                        ></div>
                                    }
                                    @if (!event.is_system_event) {
                                        <div class="relative">
                                            <p class="truncate font-medium text-base-content">
                                                {{
                                                    event.all_day
                                                        ? 'All Day'
                                                        : (event.date
                                                          | date: time_format : tz)
                                                }}
                                                &ndash;
                                                {{ event.title }}
                                            </p>
                                            <p class="truncate text-base-content opacity-70">
                                                {{
                                                    event.organiser?.name ||
                                                        event.host
                                                }}
                                            </p>
                                        </div>
                                    }
                                </div>
                            </button>
                        }
                    }
                }
                @if (show_time | async) {
                    <div
                        class="bg-secondary absolute inset-x-0 h-[2px]"
                        [style.top]="timeToOffset(now) + '%'"
                    ></div>
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      DateOptionsComponent,
      TranslatePipe,
      RoomBookingSearchComponent,
      MatRippleModule,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;2b342a13930d0056fd89d140b272ede9f36f097f9a82416d172d995bdca2d966;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/day-view/room-timeline.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n[timeline] {\n  grid-template-columns: 4rem auto;\n  grid-template-rows: 3.5rem auto;\n}\n/*# sourceMappingURL=room-timeline.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomBookingsTimelineComponent, { className: "RoomBookingsTimelineComponent", filePath: "apps/concierge/src/app/day-view/room-timeline.component.ts", lineNumber: 232 });
})();

// apps/concierge/src/app/day-view/room-list-timeline.component.ts
var _c04 = () => [];
var _forTrack02 = ($index, $item) => $item.id;
function RoomListTimelineComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.TIMEZONE_DIFF"), " ");
  }
}
function RoomListTimelineComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.TODAY"), " ");
  }
}
function RoomListTimelineComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hour_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r1.hour_col_width + "rem");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatHour(hour_r1));
  }
}
function RoomListTimelineComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const space_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r1.row_height + "rem");
    \u0275\u0275property("matTooltip", space_r3.display_name || space_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", space_r3.display_name || space_r3.name, " ");
  }
}
function RoomListTimelineComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 20);
  }
  if (rf & 2) {
    const \u0275$index_49_r4 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r1.row_height + "rem");
    \u0275\u0275property("ngClass", \u0275$index_49_r4 % 2 === 1 ? "bg-base-200/30" : "");
  }
}
function RoomListTimelineComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
  if (rf & 2) {
    const \u0275$index_53_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", \u0275$index_53_r5 * ctx_r1.hour_col_width + "rem");
  }
}
function RoomListTimelineComponent_For_28_For_1_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 25);
  }
}
function RoomListTimelineComponent_For_28_For_1_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("absolute inset-0 opacity-25 " + ctx_r1.statusBg(event_r7));
  }
}
function RoomListTimelineComponent_For_28_For_1_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "p", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", event_r7.all_day ? "All Day" : \u0275\u0275pipeBind3(3, 3, event_r7.date, ctx_r1.time_format, ctx_r1.tz), " \u2013 ", event_r7.title, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (event_r7.organiser == null ? null : event_r7.organiser.name) || event_r7.host, " ");
  }
}
function RoomListTimelineComponent_For_28_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function RoomListTimelineComponent_For_28_For_1_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const event_r7 = \u0275\u0275nextContext().$implicit;
      const space_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewEvent(event_r7, space_r8.id));
    });
    \u0275\u0275elementStart(1, "div", 24);
    \u0275\u0275conditionalCreate(2, RoomListTimelineComponent_For_28_For_1_Conditional_0_Conditional_2_Template, 1, 0, "div", 25)(3, RoomListTimelineComponent_For_28_For_1_Conditional_0_Conditional_3_Template, 1, 2, "div", 26);
    \u0275\u0275conditionalCreate(4, RoomListTimelineComponent_For_28_For_1_Conditional_0_Conditional_4_Template, 6, 7, "div", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext().$implicit;
    const \u0275$index_56_r9 = \u0275\u0275nextContext().$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", \u0275$index_56_r9 * ctx_r1.row_height + 0.125 + "rem")("height", ctx_r1.row_height - 0.25 + "rem")("left", ctx_r1.timeToHorizontalOffset(event_r7.date) + "%")("width", ctx_r1.durationToWidth(event_r7.duration) + "%");
    \u0275\u0275property("matTooltip", ctx_r1.eventTooltip(event_r7));
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-60", event_r7.state === "done");
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r7.is_system_event ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!event_r7.is_system_event ? 4 : -1);
  }
}
function RoomListTimelineComponent_For_28_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomListTimelineComponent_For_28_For_1_Conditional_0_Template, 5, 13, "button", 22);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const event_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!event_r7.is_system_event || \u0275\u0275pipeBind1(1, 1, ctx_r1.ui_options).show_overflow ? 0 : -1);
  }
}
function RoomListTimelineComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, RoomListTimelineComponent_For_28_For_1_Template, 2, 3, null, null, _forTrack02);
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const space_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(2, 0, ctx_r1.events)[space_r8.id] || \u0275\u0275pureFunction0(2, _c04));
  }
}
function RoomListTimelineComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 30);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r1.timeToHorizontalOffset(ctx_r1.now) + "%");
  }
}
var _RoomListTimelineComponent = class _RoomListTimelineComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(EventsStateService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.hour_col_width = 7;
    this.row_height = 3;
    this.ui_options = this._state.options;
    this.spaces = this._state.spaces;
    this.date = this._state.date;
    this.is_today = this.date.pipe(map((d) => isSameDay(d, Date.now())));
    this.show_time = combineLatest([
      this.date,
      this._org.active_building
    ]).pipe(map(([d]) => {
      const today = isSameDay(d, Date.now());
      const offset = this.timezone ? getTimezoneDifferenceInHours(this.timezone) : 0;
      const start = addHours(setHours(startOfDay(Date.now()), this.block_start), -offset).valueOf();
      const end = addHours(setHours(startOfDay(Date.now()), this.block_end), -offset).valueOf();
      return today && Date.now() >= start && Date.now() <= end;
    }));
    this.events = combineLatest([
      this._state.spaces,
      this._state.filtered,
      this.date
    ]).pipe(debounceTime(300), map(([spaces, events, date]) => {
      const event_map = {};
      const offset = this.timezone ? getTimezoneDifferenceInHours(this.timezone) : 0;
      const start = addHours(setHours(startOfDay(date), this.block_start), -offset).valueOf();
      const end = addHours(setHours(startOfDay(date), this.block_end), -offset).valueOf();
      for (const space of spaces) {
        event_map[space.id] = events.filter((event) => event.resources.find((item) => item.id === space.id || item.email === space.email) || event.system?.id === space.id || event.system?.email === space.email).filter((event) => event.date_end >= start && event.date <= end);
      }
      return event_map;
    }), startWith({}), shareReplay(1));
    this._hour_list = Array.from({ length: 24 }, (_, i) => i);
    this.hours = [];
    this.edit = (e) => this._state.newBooking(e);
    this.setDate = (d) => this._state.setDate(d);
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this._date_pipe = new DatePipe("en");
  }
  get now() {
    return startOfMinute(Date.now()).valueOf();
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    const tz_offset = getTimezoneOffsetString(tz);
    return tz_offset === this._local_tz ? "" : tz_offset;
  }
  get block_start() {
    return +this._settings.get("app.events.block_start") || 0;
  }
  get block_end() {
    return +this._settings.get("app.events.block_end") || 24;
  }
  get block_range() {
    return Math.min(24, Math.max(this.block_end - this.block_start, 1));
  }
  get time_format() {
    return this._settings.time_format;
  }
  formatHour(hour) {
    const date = setHours(Date.now(), hour);
    return this._settings.get("app.use_24_hour_time") ? format(date, "HH:00") : format(date, "h a");
  }
  eventTooltip(event) {
    return `Start: ${event.all_day ? "All Day" : this._date_pipe.transform(event.date, this.time_format)}
Title:  ${event.title}
Host:  ${event.organiser?.name || event.host}`;
  }
  ngOnInit() {
    this.subscription("poll", this._state.startPolling("list"));
    this.subscription("hour_list", this._org.active_building.subscribe(() => {
      this.hours = this._hour_list.filter((h) => h >= this.block_start && h < this.block_end);
    }));
    this.hours = this._hour_list.filter((h) => h >= this.block_start && h < this.block_end);
  }
  /** Horizontal offset as percentage of the total grid width */
  timeToHorizontalOffset(date) {
    const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const offset = !this.timezone ? 0 : getTimezoneDifferenceInHours(this.timezone, current_tz);
    const start_time = setHours(startOfDay(this._state.getDate()), this.block_start - offset);
    const diff = differenceInMinutes(date, start_time);
    return +(Math.max(0, diff / 60) / this.block_range * 100).toFixed(2);
  }
  /** Width as percentage of total grid width based on duration */
  durationToWidth(duration) {
    return +(Math.min(this.block_range, duration / 60) / this.block_range * 100).toFixed(2);
  }
  statusBg(event) {
    if (!event.extension_data?.shared_event)
      return "bg-success";
    if (event.status === "declined")
      return "bg-error";
    if (event.status === "tentative")
      return "bg-warning";
    return "bg-success";
  }
  viewEvent(event, space_id, _scroll_to = false) {
    if (event.is_system_event)
      return;
    const mock = MOCK_APPROVAL_EVENTS.find((e) => e.id === event.id);
    this._dialog.open(EventSummaryDialogComponent, {
      data: mock ? { event: mock } : { calendar_event: event }
    });
  }
};
_RoomListTimelineComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RoomListTimelineComponent_BaseFactory;
  return function RoomListTimelineComponent_Factory(__ngFactoryType__) {
    return (\u0275RoomListTimelineComponent_BaseFactory || (\u0275RoomListTimelineComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RoomListTimelineComponent)))(__ngFactoryType__ || _RoomListTimelineComponent);
  };
})();
_RoomListTimelineComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomListTimelineComponent, selectors: [["room-list-timeline"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 32, vars: 29, consts: [[1, "bg-info", "text-info-content", "mx-2", "mt-2", "w-[calc(100%-1rem)]", "rounded-lg", "p-2", "text-center", "text-xs"], [1, "border-base-200", "relative", "z-20", "flex", "items-center", "justify-center", "space-x-2", "border-b", "p-2"], [3, "dateChange", "date", "is_new", "hide_today"], [1, "text-info", "absolute", "top-1/2", "left-4", "-translate-y-1/2", "text-sm"], [1, "absolute", "top-1/2", "right-8", "-translate-y-1/2"], [3, "selected"], ["list-grid", "", 1, "z-0", "grid", "h-1/2", "w-full", "flex-1", "overflow-auto"], [1, "bg-base-100", "sticky", "top-0", "left-0", "z-30", "flex", "items-center", "justify-center", "border-r", "border-b", "border-base-300"], [1, "text-xs", "opacity-60"], ["hour-headers", "", 1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-20", "flex", "items-center", "border-b"], [1, "relative", "flex", "h-full", "items-end", "justify-center", "border-l", "border-base-200", "pb-1", 3, "width"], ["space-names", "", 1, "border-base-300", "bg-base-100", "sticky", "left-0", "z-10", "border-r"], [1, "flex", "items-center", "border-b", "border-base-200", "px-3", 3, "height", "matTooltip"], ["event-grid", "", 1, "relative"], [1, "border-b", "border-base-200", 3, "ngClass", "height"], [1, "absolute", "top-0", "h-full", "border-l", "border-base-200", 3, "left"], [1, "bg-secondary", "absolute", "top-0", "h-full", "w-[2px]", 3, "left"], [1, "relative", "flex", "h-full", "items-end", "justify-center", "border-l", "border-base-200", "pb-1"], [1, "flex", "items-center", "border-b", "border-base-200", "px-3", 3, "matTooltip"], [1, "block", "w-full", "truncate", "text-xs", "font-medium"], [1, "border-b", "border-base-200", 3, "ngClass"], [1, "absolute", "top-0", "h-full", "border-l", "border-base-200"], ["matRipple", "", 1, "absolute", "overflow-hidden", "text-left", "hover:opacity-90", 3, "top", "height", "left", "width", "matTooltip"], ["matRipple", "", 1, "absolute", "overflow-hidden", "text-left", "hover:opacity-90", 3, "click", "matTooltip"], [1, "bg-base-100", "relative", "h-full", "w-full", "overflow-hidden", "rounded", "border", "border-base-200", "px-2", "py-0.5", "text-[11px]", "shadow-sm"], [1, "bg-secondary", "absolute", "inset-0", "opacity-20"], [3, "class"], [1, "relative"], [1, "truncate", "pl-1", "font-medium", "text-base-content"], [1, "truncate", "pl-1", "text-base-content", "opacity-70"], [1, "bg-secondary", "absolute", "top-0", "h-full", "w-[2px]"]], template: function RoomListTimelineComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomListTimelineComponent_Conditional_0_Template, 3, 3, "div", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "date-options", 2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("dateChange", function RoomListTimelineComponent_Template_date_options_dateChange_2_listener($event) {
      return ctx.setDate($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, RoomListTimelineComponent_Conditional_4_Template, 3, 3, "div", 3);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementStart(6, "div", 4)(7, "room-booking-search", 5);
    \u0275\u0275listener("selected", function RoomListTimelineComponent_Template_room_booking_search_selected_7_listener($event) {
      return ctx.viewEvent($event, $event.system == null ? null : $event.system.id, true);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 9);
    \u0275\u0275repeaterCreate(15, RoomListTimelineComponent_For_16_Template, 3, 3, "div", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 11);
    \u0275\u0275repeaterCreate(18, RoomListTimelineComponent_For_19_Template, 3, 4, "div", 12, _forTrack02);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 13);
    \u0275\u0275repeaterCreate(22, RoomListTimelineComponent_For_23_Template, 1, 3, "div", 14, _forTrack02);
    \u0275\u0275pipe(24, "async");
    \u0275\u0275repeaterCreate(25, RoomListTimelineComponent_For_26_Template, 1, 2, "div", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275repeaterCreate(27, RoomListTimelineComponent_For_28_Template, 3, 3, null, null, _forTrack02);
    \u0275\u0275pipe(29, "async");
    \u0275\u0275conditionalCreate(30, RoomListTimelineComponent_Conditional_30_Template, 1, 2, "div", 16);
    \u0275\u0275pipe(31, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.timezone && ctx.tz ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("date", \u0275\u0275pipeBind1(3, 11, ctx.date))("is_new", true)("hide_today", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(5, 13, ctx.is_today) ? 4 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(13, 17, \u0275\u0275pipeBind1(12, 15, ctx.date), "zzzz", ctx.tz), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx.hours.length * ctx.hour_col_width + "rem");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.hours);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(20, 21, ctx.spaces));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx.hours.length * ctx.hour_col_width + "rem");
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(24, 23, ctx.spaces));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.hours);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(29, 25, ctx.spaces));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(31, 27, ctx.show_time) ? 30 : -1);
  }
}, dependencies: [
  CommonModule,
  NgClass,
  AsyncPipe,
  DatePipe,
  DateOptionsComponent,
  TranslatePipe,
  RoomBookingSearchComponent,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n[list-grid][_ngcontent-%COMP%] {\n  grid-template-columns: 12rem auto;\n  grid-template-rows: 2.5rem auto;\n}\n/*# sourceMappingURL=room-list-timeline.component.css.map */"] });
var RoomListTimelineComponent = _RoomListTimelineComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomListTimelineComponent, [{
    type: Component,
    args: [{ selector: "room-list-timeline", template: `
        @if (timezone && tz) {
            <div
                class="bg-info text-info-content mx-2 mt-2 w-[calc(100%-1rem)] rounded-lg p-2 text-center text-xs"
            >
                {{ 'APP.CONCIERGE.TIMEZONE_DIFF' | translate }}
            </div>
        }
        <div
            class="border-base-200 relative z-20 flex items-center justify-center space-x-2 border-b p-2"
        >
            <date-options
                [date]="date | async"
                (dateChange)="setDate($event)"
                [is_new]="true"
                [hide_today]="true"
            ></date-options>
            @if (is_today | async) {
                <div
                    class="text-info absolute top-1/2 left-4 -translate-y-1/2 text-sm"
                >
                    {{ 'COMMON.TODAY' | translate }}
                </div>
            }
            <div class="absolute top-1/2 right-8 -translate-y-1/2">
                <room-booking-search
                    (selected)="viewEvent($event, $event.system?.id, true)"
                ></room-booking-search>
            </div>
        </div>
        <div
            list-grid
            class="z-0 grid h-1/2 w-full flex-1 overflow-auto"
        >
            <!-- Top-left corner: timezone -->
            <div
                class="bg-base-100 sticky top-0 left-0 z-30 flex items-center justify-center border-r border-b border-base-300"
            >
                <div class="text-xs opacity-60">
                    {{ date | async | date: 'zzzz' : tz }}
                </div>
            </div>
            <!-- Hour headers (top row, scrolls horizontally) -->
            <div
                hour-headers
                class="border-base-300 bg-base-100 sticky top-0 z-20 flex items-center border-b"
                [style.width]="hours.length * hour_col_width + 'rem'"
            >
                @for (hour of hours; track hour) {
                    <div
                        class="relative flex h-full items-end justify-center border-l border-base-200 pb-1"
                        [style.width]="hour_col_width + 'rem'"
                    >
                        <span class="text-xs opacity-60">{{
                            formatHour(hour)
                        }}</span>
                    </div>
                }
            </div>
            <!-- Space names (left column, scrolls vertically) -->
            <div
                space-names
                class="border-base-300 bg-base-100 sticky left-0 z-10 border-r"
            >
                @for (space of spaces | async; track space.id) {
                    <div
                        class="flex items-center border-b border-base-200 px-3"
                        [style.height]="row_height + 'rem'"
                        [matTooltip]="
                            space.display_name || space.name
                        "
                    >
                        <span class="block w-full truncate text-xs font-medium">
                            {{
                                space.display_name || space.name
                            }}
                        </span>
                    </div>
                }
            </div>
            <!-- Event grid (main area) -->
            <div
                event-grid
                class="relative"
                [style.width]="hours.length * hour_col_width + 'rem'"
            >
                <!-- Row backgrounds + horizontal lines -->
                @for (
                    space of spaces | async;
                    track space.id;
                    let i = $index
                ) {
                    <div
                        class="border-b border-base-200"
                        [ngClass]="i % 2 === 1 ? 'bg-base-200/30' : ''"
                        [style.height]="row_height + 'rem'"
                    ></div>
                }
                <!-- Vertical hour lines -->
                @for (hour of hours; track hour; let j = $index) {
                    <div
                        class="absolute top-0 h-full border-l border-base-200"
                        [style.left]="j * hour_col_width + 'rem'"
                    ></div>
                }
                <!-- Events positioned by space row and hour offset -->
                @for (
                    space of spaces | async;
                    track space.id;
                    let i = $index
                ) {
                    @for (
                        event of (events | async)[space.id] || [];
                        track event.id
                    ) {
                        @if (
                            !event.is_system_event ||
                            (ui_options | async).show_overflow
                        ) {
                            <button
                                matRipple
                                class="absolute overflow-hidden text-left hover:opacity-90"
                                [style.top]="
                                    i * row_height + 0.125 + 'rem'
                                "
                                [style.height]="
                                    row_height - 0.25 + 'rem'
                                "
                                [style.left]="
                                    timeToHorizontalOffset(event.date) + '%'
                                "
                                [style.width]="
                                    durationToWidth(event.duration) + '%'
                                "
                                (click)="viewEvent(event, space.id)"
                                [matTooltip]="eventTooltip(event)"
                            >
                                <div
                                    class="bg-base-100 relative h-full w-full overflow-hidden rounded border border-base-200 px-2 py-0.5 text-[11px] shadow-sm"
                                    [class.opacity-60]="
                                        event.state === 'done'
                                    "
                                >
                                    @if (event.is_system_event) {
                                        <div class="bg-secondary absolute inset-0 opacity-20"></div>
                                    } @else {
                                        <div
                                            [class]="'absolute inset-0 opacity-25 ' + statusBg(event)"
                                        ></div>
                                    }
                                    @if (!event.is_system_event) {
                                        <div class="relative">
                                            <p class="truncate pl-1 font-medium text-base-content">
                                                {{
                                                    event.all_day
                                                        ? 'All Day'
                                                        : (event.date
                                                          | date
                                                              : time_format
                                                              : tz)
                                                }}
                                                &ndash; {{ event.title }}
                                            </p>
                                            <p class="truncate pl-1 text-base-content opacity-70">
                                                {{
                                                    event.organiser?.name ||
                                                        event.host
                                                }}
                                            </p>
                                        </div>
                                    }
                                </div>
                            </button>
                        }
                    }
                }
                <!-- Current time indicator -->
                @if (show_time | async) {
                    <div
                        class="bg-secondary absolute top-0 h-full w-[2px]"
                        [style.left]="
                            timeToHorizontalOffset(now) + '%'
                        "
                    ></div>
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      DateOptionsComponent,
      TranslatePipe,
      RoomBookingSearchComponent,
      MatRippleModule,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;9b5da233e40f40735c0355e5d414b6d5d9032bb038aa2be01d7ad1a5cce14f8b;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/day-view/room-list-timeline.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n[list-grid] {\n  grid-template-columns: 12rem auto;\n  grid-template-rows: 2.5rem auto;\n}\n/*# sourceMappingURL=room-list-timeline.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomListTimelineComponent, { className: "RoomListTimelineComponent", filePath: "apps/concierge/src/app/day-view/room-list-timeline.component.ts", lineNumber: 249 });
})();

// apps/concierge/src/app/day-view/room-week-timeline.component.ts
var _c05 = () => [];
function RoomWeekBookingsTimelineComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.TIMEZONE_DIFF"), " ");
  }
}
function RoomWeekBookingsTimelineComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.WEEK_THIS"), " ");
  }
}
function RoomWeekBookingsTimelineComponent_For_19_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.TODAY"), " ");
  }
}
function RoomWeekBookingsTimelineComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, RoomWeekBookingsTimelineComponent_For_19_Conditional_4_Template, 3, 3, "div", 17);
    \u0275\u0275element(5, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(3, 2, date_r1, "EEE, MMM d", ctx_r1.tz), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isToday(date_r1) ? 4 : -1);
  }
}
function RoomWeekBookingsTimelineComponent_For_27_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(2, 1, event_r4.date_end, "zzzz", ctx_r1.tz));
  }
}
function RoomWeekBookingsTimelineComponent_For_27_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function RoomWeekBookingsTimelineComponent_For_27_For_2_Template_button_click_0_listener() {
      const event_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewEvent(event_r4, event_r4.system == null ? null : event_r4.system.id));
    });
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275element(2, "div");
    \u0275\u0275elementStart(3, "div", 22)(4, "p", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 24);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275pipe(9, "date");
    \u0275\u0275conditionalCreate(10, RoomWeekBookingsTimelineComponent_For_27_For_2_Conditional_10_Template, 3, 5, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 25);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 25);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "user");
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_28_0;
    const event_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-60", event_r4.state === "done");
    \u0275\u0275advance();
    \u0275\u0275classMap("absolute inset-0 opacity-25 " + ctx_r1.statusBg(event_r4));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("line-through", event_r4.state === "done");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r4.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(8, 12, event_r4.date, ctx_r1.time_format, ctx_r1.tz), " \u2013 ", \u0275\u0275pipeBind3(9, 16, event_r4.date_end, ctx_r1.time_format, ctx_r1.tz), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.tz ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", event_r4.system == null ? null : event_r4.system.display_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_28_0 = \u0275\u0275pipeBind1(16, 22, \u0275\u0275pipeBind1(15, 20, event_r4.host))) == null ? null : tmp_28_0.name) || event_r4.host, " ");
  }
}
function RoomWeekBookingsTimelineComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, RoomWeekBookingsTimelineComponent_For_27_For_2_Template, 17, 24, "button", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r1.events)[date_r5] || \u0275\u0275pureFunction0(2, _c05));
  }
}
var _RoomWeekBookingsTimelineComponent = class _RoomWeekBookingsTimelineComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(EventsStateService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.hours = Array.from({ length: 24 }, (_, i) => i);
    this.ui_options = this._state.options;
    this.date = this._state.date;
    this.days = combineLatest([
      this.date,
      this._org.active_building
    ]).pipe(map(([d]) => new Array(7).fill(0).map((_, idx) => addDays(setHours(startOfWeek(d, { weekStartsOn: this._week_start }), 12 - Math.floor(this.timezone_offset / 60)), idx).valueOf())));
    this.this_week = this.date.pipe(map((d) => isSameWeek(d, Date.now())));
    this._data_pipe = new DatePipe("en");
    this.events = combineLatest([
      this.days,
      this._state.filtered,
      this._state.zones
    ]).pipe(map(([day_list, events, zones]) => {
      if (zones.length) {
        events = events.filter((_) => _.system?.zones.find((_2) => zones.includes(_2)));
      }
      const map2 = {};
      for (const date of day_list) {
        const date_value = this._data_pipe.transform(date, "yyyy-MM-dd", this.tz);
        map2[date] = events.filter((event) => {
          const event_date_value = this._data_pipe.transform(event.date, "yyyy-MM-dd", this.tz);
          return date_value === event_date_value && !event.is_system_event;
        }).sort((a, b) => a.date - b.date);
      }
      return map2;
    }), startWith({}), shareReplay(1));
    this.event_max_count = this.events.pipe(map((e) => {
      let length = 0;
      for (const date in e) {
        if (e[date].length > length)
          length = e[date].length;
      }
      return length;
    }));
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this.edit = (e) => this._state.newBooking(e);
    this.setDate = (d) => this._state.setDate(d);
  }
  get _week_start() {
    return this._settings.get("app.week_start");
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    const tz_offset = getTimezoneOffsetString(tz);
    return tz_offset === this._local_tz ? "" : tz_offset;
  }
  get timezone_offset() {
    return getTimezoneOffsetInMinutes(this.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone);
  }
  get now() {
    return startOfMinute(Date.now()).valueOf();
  }
  isToday(date) {
    return isSameDay(date, Date.now());
  }
  get time_format() {
    return this._settings.time_format;
  }
  ngOnInit() {
    this.subscription("poll", this._state.poll());
  }
  statusBg(event) {
    if (!event.extension_data?.shared_event)
      return "bg-success";
    if (event.status === "declined")
      return "bg-error";
    if (event.status === "tentative")
      return "bg-warning";
    return "bg-success";
  }
  viewEvent(event, space_id, scroll_to = false) {
    if (event.is_system_event)
      return;
    const mock = MOCK_APPROVAL_EVENTS.find((e) => e.id === event.id);
    this._dialog.open(EventSummaryDialogComponent, {
      data: mock ? { event: mock } : { calendar_event: event }
    });
  }
};
_RoomWeekBookingsTimelineComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RoomWeekBookingsTimelineComponent_BaseFactory;
  return function RoomWeekBookingsTimelineComponent_Factory(__ngFactoryType__) {
    return (\u0275RoomWeekBookingsTimelineComponent_BaseFactory || (\u0275RoomWeekBookingsTimelineComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RoomWeekBookingsTimelineComponent)))(__ngFactoryType__ || _RoomWeekBookingsTimelineComponent);
  };
})();
_RoomWeekBookingsTimelineComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomWeekBookingsTimelineComponent, selectors: [["room-week-bookings-timeline"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 29, vars: 35, consts: [[1, "bg-info", "text-info-content", "mx-2", "mt-2", "w-[calc(100%-1rem)]", "rounded-lg", "p-2", "text-center", "text-xs"], [1, "border-base-200", "relative", "z-20", "flex", "items-center", "justify-center", "space-x-2", "border-b", "p-2"], [3, "dateChange", "date", "step", "is_new", "hide_today"], [1, "text-info", "absolute", "top-1/2", "left-4", "-translate-y-1/2", "text-sm"], [1, "absolute", "top-1/2", "right-8", "-translate-y-1/2"], [3, "selected"], ["timeline", "", 1, "z-0", "grid", "h-1/2", "w-full", "flex-1", "overflow-auto"], ["timezone", "", 1, "bg-base-100", "sticky", "top-0", "left-0", "z-30", "flex", "items-center", "justify-center"], [1, "text-xs", "opacity-60"], [1, "bg-base-300", "absolute", "right-0", "bottom-0", "h-2", "w-px"], [1, "bg-base-300", "absolute", "right-0", "bottom-0", "h-px", "w-2"], ["day-headers", "", 1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-20", "flex", "min-w-[calc(100%-3rem)]", "items-center", "border-b"], [1, "relative", "flex", "h-full", "min-w-48", "flex-1", "flex-col", "items-center", "justify-center", "leading-tight"], ["empty-block", "", 1, "border-base-300", "bg-base-100", "sticky", "left-0", "z-10", "min-h-full", "border-r"], ["date-blocks", "", 1, "relative", "flex", "min-w-[calc(100%-3rem)]", "overflow-hidden"], [1, "border-base-200", "min-w-48", "flex-1", "overflow-hidden", "border-r", "p-2"], [1, "truncate"], [1, "text-info", "absolute", "bottom-1", "left-1/2", "-translate-x-1/2", "text-xs"], [1, "bg-base-300", "absolute", "bottom-0", "-left-px", "h-2", "w-px"], ["matRipple", "", 1, "mb-1", "w-full", "text-left", "hover:opacity-90"], ["matRipple", "", 1, "mb-1", "w-full", "text-left", "hover:opacity-90", 3, "click"], [1, "bg-base-100", "relative", "w-full", "overflow-hidden", "rounded-lg", "border", "border-base-200", "px-3", "py-1", "text-xs", "shadow-sm"], [1, "relative"], [1, "truncate", "font-medium", "text-base-content"], [1, "text-base-content", "opacity-70"], [1, "truncate", "text-base-content", "opacity-60"]], template: function RoomWeekBookingsTimelineComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomWeekBookingsTimelineComponent_Conditional_0_Template, 3, 3, "div", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "date-options", 2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("dateChange", function RoomWeekBookingsTimelineComponent_Template_date_options_dateChange_2_listener($event) {
      return ctx.setDate($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, RoomWeekBookingsTimelineComponent_Conditional_4_Template, 3, 3, "div", 3);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementStart(6, "div", 4)(7, "room-booking-search", 5);
    \u0275\u0275listener("selected", function RoomWeekBookingsTimelineComponent_Template_room_booking_search_selected_7_listener($event) {
      return ctx.viewEvent($event, $event.system == null ? null : $event.system.id, true);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "div", 9)(15, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 11);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275repeaterCreate(18, RoomWeekBookingsTimelineComponent_For_19_Template, 6, 6, "div", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "div", 13);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementStart(24, "div", 14);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275repeaterCreate(26, RoomWeekBookingsTimelineComponent_For_27_Template, 4, 3, "div", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(28, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_10_0;
    \u0275\u0275conditional(ctx.timezone && ctx.tz ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("date", \u0275\u0275pipeBind1(3, 13, ctx.date))("step", 7)("is_new", true)("hide_today", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(5, 15, ctx.this_week) ? 4 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(13, 19, \u0275\u0275pipeBind1(12, 17, ctx.date), "zzzz", ctx.tz), " ");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ((tmp_7_0 = \u0275\u0275pipeBind1(17, 23, ctx.days)) == null ? null : tmp_7_0.length) * 12 + "rem");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(20, 25, ctx.days));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("height", \u0275\u0275pipeBind1(22, 27, ctx.event_max_count) ? \u0275\u0275pipeBind1(23, 29, ctx.event_max_count) * 5.375 + "rem" : "");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ((tmp_10_0 = \u0275\u0275pipeBind1(25, 31, ctx.days)) == null ? null : tmp_10_0.length) * 12 + "rem");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(28, 33, ctx.days));
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  MatRippleModule,
  MatRipple,
  RoomBookingSearchComponent,
  DateOptionsComponent,
  TranslatePipe,
  UserPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n[timeline][_ngcontent-%COMP%] {\n  grid-template-columns: 4rem auto;\n  grid-template-rows: 3.5rem auto;\n}\n/*# sourceMappingURL=room-week-timeline.component.css.map */"] });
var RoomWeekBookingsTimelineComponent = _RoomWeekBookingsTimelineComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomWeekBookingsTimelineComponent, [{
    type: Component,
    args: [{ selector: "room-week-bookings-timeline", template: `
        @if (timezone && tz) {
            <div
                class="bg-info text-info-content mx-2 mt-2 w-[calc(100%-1rem)] rounded-lg p-2 text-center text-xs"
            >
                {{ 'APP.CONCIERGE.TIMEZONE_DIFF' | translate }}
            </div>
        }
        <div
            class="border-base-200 relative z-20 flex items-center justify-center space-x-2 border-b p-2"
        >
            <date-options
                [date]="date | async"
                [step]="7"
                (dateChange)="setDate($event)"
                [is_new]="true"
                [hide_today]="true"
            ></date-options>
            @if (this_week | async) {
                <div
                    class="text-info absolute top-1/2 left-4 -translate-y-1/2 text-sm"
                >
                    {{ 'COMMON.WEEK_THIS' | translate }}
                </div>
            }
            <div class="absolute top-1/2 right-8 -translate-y-1/2">
                <room-booking-search
                    (selected)="viewEvent($event, $event.system?.id, true)"
                ></room-booking-search>
            </div>
        </div>
        <div timeline class="z-0 grid h-1/2 w-full flex-1 overflow-auto">
            <div
                timezone
                class="bg-base-100 sticky top-0 left-0 z-30 flex items-center justify-center"
            >
                <div class="text-xs opacity-60">
                    {{ date | async | date: 'zzzz' : tz }}
                </div>
                <div
                    class="bg-base-300 absolute right-0 bottom-0 h-2 w-px"
                ></div>
                <div
                    class="bg-base-300 absolute right-0 bottom-0 h-px w-2"
                ></div>
            </div>
            <div
                day-headers
                class="border-base-300 bg-base-100 sticky top-0 z-20 flex min-w-[calc(100%-3rem)] items-center border-b"
                [style.width]="(days | async)?.length * 12 + 'rem'"
            >
                @for (date of days | async; track date) {
                    <div
                        class="relative flex h-full min-w-48 flex-1 flex-col items-center justify-center leading-tight"
                    >
                        <div class="truncate">
                            {{ date | date: 'EEE, MMM d' : tz }}
                        </div>
                        @if (isToday(date)) {
                            <div
                                class="text-info absolute bottom-1 left-1/2 -translate-x-1/2 text-xs"
                            >
                                {{ 'COMMON.TODAY' | translate }}
                            </div>
                        }
                        <div
                            class="bg-base-300 absolute bottom-0 -left-px h-2 w-px"
                        ></div>
                    </div>
                }
            </div>
            <div
                empty-block
                class="border-base-300 bg-base-100 sticky left-0 z-10 min-h-full border-r"
                [style.height]="
                    (event_max_count | async)
                        ? (event_max_count | async) * 5.375 + 'rem'
                        : ''
                "
            ></div>
            <div
                date-blocks
                class="relative flex min-w-[calc(100%-3rem)] overflow-hidden"
                [style.width]="(days | async)?.length * 12 + 'rem'"
            >
                @for (date of days | async; track date; let i = $index) {
                    <div
                        class="border-base-200 min-w-48 flex-1 overflow-hidden border-r p-2"
                    >
                        @for (
                            event of (events | async)[date] || [];
                            track event
                        ) {
                            <button
                                matRipple
                                class="mb-1 w-full text-left hover:opacity-90"
                                (click)="viewEvent(event, event.system?.id)"
                            >
                                <div
                                    class="bg-base-100 relative w-full overflow-hidden rounded-lg border border-base-200 px-3 py-1 text-xs shadow-sm"
                                    [class.opacity-60]="event.state === 'done'"
                                >
                                    <div
                                        [class]="'absolute inset-0 opacity-25 ' + statusBg(event)"
                                    ></div>
                                    <div class="relative">
                                        <p
                                            class="truncate font-medium text-base-content"
                                            [class.line-through]="event.state === 'done'"
                                        >
                                            {{ event.title }}
                                        </p>
                                        <p class="text-base-content opacity-70">
                                            {{
                                                event.date
                                                    | date: time_format : tz
                                            }}
                                            &ndash;
                                            {{
                                                event.date_end
                                                    | date: time_format : tz
                                            }}
                                            @if (tz) {
                                                <span>{{
                                                    event.date_end
                                                        | date: 'zzzz' : tz
                                                }}</span>
                                            }
                                        </p>
                                        <p class="truncate text-base-content opacity-60">
                                            {{ event.system?.display_name }}
                                        </p>
                                        <p class="truncate text-base-content opacity-60">
                                            {{
                                                (event.host | user | async)
                                                    ?.name || event.host
                                            }}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        }
                    </div>
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      MatRippleModule,
      RoomBookingSearchComponent,
      DateOptionsComponent,
      TranslatePipe,
      UserPipe
    ], styles: ["/* angular:styles/component:css;2b342a13930d0056fd89d140b272ede9f36f097f9a82416d172d995bdca2d966;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/day-view/room-week-timeline.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n[timeline] {\n  grid-template-columns: 4rem auto;\n  grid-template-rows: 3.5rem auto;\n}\n/*# sourceMappingURL=room-week-timeline.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomWeekBookingsTimelineComponent, { className: "RoomWeekBookingsTimelineComponent", filePath: "apps/concierge/src/app/day-view/room-week-timeline.component.ts", lineNumber: 206 });
})();

// apps/concierge/src/app/day-view/room-bookings.component.ts
function RoomBookingsComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 11);
  }
}
function RoomBookingsComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 12);
    \u0275\u0275text(1, "download");
    \u0275\u0275elementEnd();
  }
}
function RoomBookingsComponent_For_40_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const level_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_11_0 = \u0275\u0275pipeBind1(2, 1, level_r1.parent_id)) == null ? null : tmp_11_0.display_name, " ");
  }
}
function RoomBookingsComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16)(1, "div", 27);
    \u0275\u0275conditionalCreate(2, RoomBookingsComponent_For_40_Conditional_2_Template, 5, 3, "div", 21);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", level_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r1.display_name || level_r1.name, " ");
  }
}
function RoomBookingsComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 5);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("ngModelChange", function RoomBookingsComponent_Conditional_42_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateUIOptions({ show_overflow: $event }));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", (tmp_1_0 = \u0275\u0275pipeBind1(1, 2, ctx_r1.ui_options)) == null ? null : tmp_1_0.show_overflow);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "APP.CONCIERGE.SETUP_BREAKDOWN"));
  }
}
function RoomBookingsComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "room-bookings-timeline", 25);
  }
}
function RoomBookingsComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "room-week-bookings-timeline", 25);
  }
}
function RoomBookingsComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "room-list-timeline", 25);
  }
}
function RoomBookingsComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "room-bookings-approvals", 26);
  }
}
var _RoomBookingsComponent = class _RoomBookingsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._state = inject(EventsStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._settings = inject(SettingsService);
    this._user_pipe = inject(UserPipe);
    this.zones = this._state.zones;
    this.period = this._state.period;
    this._base_period = "day";
    this.dropdown_period = this.period.pipe(map((p) => {
      if (p === "day" || p === "week")
        this._base_period = p;
      return this._base_period;
    }));
    this.downloading = signal(false);
    this.ui_options = this._state.options;
    this.levels = combineLatest([
      this._org.active_building,
      this._org.active_region
    ]).pipe(map(([bld, region]) => this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
    this.updateZones = (z) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: z.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setZones(z);
    };
    this.updateUIOptions = (o) => this._state.setUIOptions(o);
    this.setPeriod = (p) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { period: p },
        queryParamsHandling: "merge"
      });
      this._state.setPeriod(p);
    };
    this.newBooking = (d) => this._state.newBooking(d);
    this.downloadCsv = async () => {
      this.downloading.set(true);
      try {
        const events = await nextValueFrom(this._state.filtered);
        const emails = /* @__PURE__ */ new Set();
        for (const event of events) {
          if (event.host)
            emails.add(event.host);
          for (const attendee of event.attendees || []) {
            if (attendee.email)
              emails.add(attendee.email);
          }
        }
        const data = await Promise.all(Array.from(emails).map(async (email) => {
          const user = await this._user_pipe.transform(email);
          return {
            name: user?.name || "",
            email
          };
        }));
        const period = await nextValueFrom(this.period);
        const date = format(this._state.getDate(), "yyyy-MM-dd");
        downloadFile(`room-bookings-${date}-${period}.csv`, jsonToCsv(data));
      } finally {
        this.downloading.set(false);
      }
    };
  }
  toggleList() {
    const current = this._state.getPeriod();
    this.setPeriod(current === "list" ? this._base_period : "list");
  }
  get has_approvals() {
    return this._org.binding("approvals");
  }
  get allow_setup_breakdown() {
    return this._settings.get("app.events.allow_setup_breakdown");
  }
  get use_region() {
    return this._settings.get("app.use_region");
  }
  ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("period")) {
        const p = params.get("period");
        this._state.setPeriod(p === "day" ? "day" : p === "list" ? "list" : "week");
      }
      if (this.use_region)
        return;
      if (params.has("zone_ids")) {
        const zones = params.get("zone_ids").split(",");
        if (zones.length) {
          const level = this._org.levelWithID(zones);
          if (!level)
            return;
          this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
          this.updateZones(zones);
        }
      }
    }));
    this.subscription("levels", this._org.active_levels.pipe(debounceTime(300)).subscribe(async (levels) => {
      if (this.use_region)
        return;
      const zones = (await nextValueFrom(this.zones)).filter((zone) => levels.find((lvl) => lvl.id === zone));
      if (!zones.length && levels.length) {
        zones.push(levels[0].id);
      }
      this.updateZones(zones);
    }));
    this.subscription("region", this._org.active_region.pipe(filter((_) => !!_)).subscribe(async (_) => {
      const zones = await nextValueFrom(this.zones);
      if (zones.length)
        return;
      this.updateZones([_.id]);
    }));
  }
};
_RoomBookingsComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RoomBookingsComponent_BaseFactory;
  return function RoomBookingsComponent_Factory(__ngFactoryType__) {
    return (\u0275RoomBookingsComponent_BaseFactory || (\u0275RoomBookingsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RoomBookingsComponent)))(__ngFactoryType__ || _RoomBookingsComponent);
  };
})();
_RoomBookingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomBookingsComponent, selectors: [["room-bookings"]], features: [\u0275\u0275ProvidersFeature([UserPipe]), \u0275\u0275InheritDefinitionFeature], decls: 64, vars: 55, consts: [[1, "absolute", "inset-0", "flex", "flex-col", "overflow-hidden", "pl-8"], [1, "flex", "w-full", "items-center", "space-x-2", "py-4", "pr-8"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], ["appearance", "outline", 1, "no-subscript", "w-32"], [3, "ngModelChange", "ngModel"], ["value", "day"], ["value", "week"], ["matRipple", "", 1, "flex", "h-12", "items-center", "space-x-1", "rounded", "border", "px-3", "text-sm", "font-medium", 3, "click", "ngClass"], [1, "text-xl"], ["icon", "", "matRipple", "", "aria-label", "Download report", 1, "border-secondary", "h-12", "w-12", "rounded", "border", 3, "click", "matTooltip", "disabled"], ["diameter", "24"], [1, "text-2xl"], [1, "flex", "w-full", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-52"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [3, "ngModel"], [1, "flex", "flex-1", "items-center", "justify-end", "space-x-4", "pr-2"], [1, "flex", "items-center", "space-x-1"], [1, "h-3", "w-3", "rounded-full", "bg-success"], [1, "text-xs", "text-gray-600"], [1, "h-3", "w-3", "rounded-full", "bg-warning"], [1, "h-3", "w-3", "rounded-full", "bg-error"], [1, "border-base-200", "mt-4", "flex", "h-px", "w-full", "flex-1", "border-t"], [1, "relative", "z-0", "w-1/2", "flex-1"], [1, "relative", "z-10"], [1, "flex", "flex-col-reverse"], [1, "opacity-0"]], template: function RoomBookingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 3);
    \u0275\u0275elementStart(6, "mat-form-field", 4)(7, "mat-label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-select", 5);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275listener("ngModelChange", function RoomBookingsComponent_Template_mat_select_ngModelChange_10_listener($event) {
      return ctx.setPeriod($event);
    });
    \u0275\u0275elementStart(12, "mat-option", 6);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 7);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "button", 8);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275pipe(20, "async");
    \u0275\u0275pipe(21, "async");
    \u0275\u0275pipe(22, "async");
    \u0275\u0275listener("click", function RoomBookingsComponent_Template_button_click_18_listener() {
      return ctx.toggleList();
    });
    \u0275\u0275elementStart(23, "icon", 9);
    \u0275\u0275text(24, "view_list");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "List");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 10);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275listener("click", function RoomBookingsComponent_Template_button_click_27_listener() {
      return ctx.downloadCsv();
    });
    \u0275\u0275conditionalCreate(29, RoomBookingsComponent_Conditional_29_Template, 1, 0, "mat-spinner", 11)(30, RoomBookingsComponent_Conditional_30_Template, 2, 0, "icon", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 13)(32, "mat-form-field", 14)(33, "mat-label");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-select", 15);
    \u0275\u0275pipe(37, "async");
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275listener("ngModelChange", function RoomBookingsComponent_Template_mat_select_ngModelChange_36_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275repeaterCreate(39, RoomBookingsComponent_For_40_Template, 5, 3, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(41, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(42, RoomBookingsComponent_Conditional_42_Template, 4, 6, "settings-toggle", 17);
    \u0275\u0275elementStart(43, "div", 18)(44, "div", 19);
    \u0275\u0275element(45, "div", 20);
    \u0275\u0275elementStart(46, "span", 21);
    \u0275\u0275text(47, "Confirmed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 19);
    \u0275\u0275element(49, "div", 22);
    \u0275\u0275elementStart(50, "span", 21);
    \u0275\u0275text(51, "Pending");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 19);
    \u0275\u0275element(53, "div", 23);
    \u0275\u0275elementStart(54, "span", 21);
    \u0275\u0275text(55, "Rejected");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(56, "div", 24);
    \u0275\u0275conditionalCreate(57, RoomBookingsComponent_Conditional_57_Template, 1, 0, "room-bookings-timeline", 25);
    \u0275\u0275pipe(58, "async");
    \u0275\u0275pipe(59, "async");
    \u0275\u0275pipe(60, "async");
    \u0275\u0275conditionalBranchCreate(61, RoomBookingsComponent_Conditional_61_Template, 1, 0, "room-week-bookings-timeline", 25)(62, RoomBookingsComponent_Conditional_62_Template, 1, 0, "room-list-timeline", 25);
    \u0275\u0275conditionalCreate(63, RoomBookingsComponent_Conditional_63_Template, 1, 0, "room-bookings-approvals", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 21, "APP.CONCIERGE.ROOM_BOOKINGS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 23, "COMMON.VIEW_PERIOD"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(11, 25, ctx.dropdown_period));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 27, "COMMON.DAY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 29, "COMMON.WEEK"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-primary", \u0275\u0275pipeBind1(19, 31, ctx.period) === "list")("text-primary", \u0275\u0275pipeBind1(20, 33, ctx.period) === "list")("border-base-300", \u0275\u0275pipeBind1(21, 35, ctx.period) !== "list");
    \u0275\u0275property("ngClass", \u0275\u0275pipeBind1(22, 37, ctx.period) === "list" ? "bg-primary/10" : "");
    \u0275\u0275advance(9);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(28, 39, "APP.CONCIERGE.DOWNLOAD_USER_LIST"))("disabled", ctx.downloading());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.downloading() ? 29 : 30);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 41, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(37, 43, ctx.zones))("placeholder", \u0275\u0275pipeBind1(38, 45, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(41, 47, ctx.levels));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.allow_setup_breakdown ? 42 : -1);
    \u0275\u0275advance(15);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(58, 49, ctx.period) === "day" ? 57 : \u0275\u0275pipeBind1(59, 51, ctx.period) === "week" ? 61 : \u0275\u0275pipeBind1(60, 53, ctx.period) === "list" ? 62 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.has_approvals ? 63 : -1);
  }
}, dependencies: [
  CommonModule,
  NgClass,
  AsyncPipe,
  TranslatePipe,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatTooltipModule,
  MatTooltip,
  IconComponent,
  MatRippleModule,
  MatRipple,
  FormsModule,
  NgControlStatus,
  NgModel,
  RoomBookingsTimelineComponent,
  RoomListTimelineComponent,
  RoomWeekBookingsTimelineComponent,
  RoomBookingsApprovalsComponent,
  SettingsToggleComponent,
  BuildingPipe
], encapsulation: 2 });
var RoomBookingsComponent = _RoomBookingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomBookingsComponent, [{
    type: Component,
    args: [{ selector: "room-bookings", template: `
        <div class="absolute inset-0 flex flex-col overflow-hidden pl-8">
            <div class="flex w-full items-center space-x-2 py-4 pr-8">
                <h2 class="text-2xl font-medium">
                    {{ 'APP.CONCIERGE.ROOM_BOOKINGS' | translate }}
                </h2>
                <div class="w-px flex-1"></div>
                <mat-form-field appearance="outline" class="no-subscript w-32">
                    <mat-label>{{ 'COMMON.VIEW_PERIOD' | translate }}</mat-label>
                    <mat-select
                        [ngModel]="dropdown_period | async"
                        (ngModelChange)="setPeriod($event)"
                    >
                        <mat-option value="day">
                            {{ 'COMMON.DAY' | translate }}
                        </mat-option>
                        <mat-option value="week">
                            {{ 'COMMON.WEEK' | translate }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
                <button
                    matRipple
                    class="flex h-12 items-center space-x-1 rounded border px-3 text-sm font-medium"
                    [class.border-primary]="(period | async) === 'list'"
                    [class.text-primary]="(period | async) === 'list'"
                    [class.border-base-300]="(period | async) !== 'list'"
                    [ngClass]="(period | async) === 'list' ? 'bg-primary/10' : ''"
                    (click)="toggleList()"
                >
                    <icon class="text-xl">view_list</icon>
                    <span>List</span>
                </button>
                <button
                    icon
                    matRipple
                    class="border-secondary h-12 w-12 rounded border"
                    [matTooltip]="
                        'APP.CONCIERGE.DOWNLOAD_USER_LIST' | translate
                    "
                    [disabled]="downloading()"
                    (click)="downloadCsv()"
                    aria-label="Download report"
                >
                    @if (downloading()) {
                        <mat-spinner diameter="24"></mat-spinner>
                    } @else {
                        <icon class="text-2xl">download</icon>
                    }
                </button>
            </div>
            <div class="flex w-full items-center space-x-2">
                <mat-form-field appearance="outline" class="no-subscript w-52">
                    <mat-label>{{ 'COMMON.LEVEL_ALL' | translate }}</mat-label>
                    <mat-select
                        [ngModel]="zones | async"
                        (ngModelChange)="updateZones($event)"
                        [placeholder]="'COMMON.LEVEL_ALL' | translate"
                        multiple
                    >
                        @for (level of levels | async; track level) {
                            <mat-option [value]="level.id">
                                <div class="flex flex-col-reverse">
                                    @if (use_region) {
                                        <div class="text-xs text-gray-600">
                                            {{
                                                (level.parent_id | building)
                                                    ?.display_name
                                            }}
                                            <span class="opacity-0"> - </span>
                                        </div>
                                    }
                                    <div>
                                        {{ level.display_name || level.name }}
                                    </div>
                                </div>
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                @if (allow_setup_breakdown) {
                    <settings-toggle
                        [ngModel]="(ui_options | async)?.show_overflow"
                        (ngModelChange)="
                            updateUIOptions({ show_overflow: $event })
                        "
                        >{{
                            'APP.CONCIERGE.SETUP_BREAKDOWN' | translate
                        }}</settings-toggle
                    >
                }
                <div class="flex flex-1 items-center justify-end space-x-4 pr-2">
                    <div class="flex items-center space-x-1">
                        <div class="h-3 w-3 rounded-full bg-success"></div>
                        <span class="text-xs text-gray-600">Confirmed</span>
                    </div>
                    <div class="flex items-center space-x-1">
                        <div class="h-3 w-3 rounded-full bg-warning"></div>
                        <span class="text-xs text-gray-600">Pending</span>
                    </div>
                    <div class="flex items-center space-x-1">
                        <div class="h-3 w-3 rounded-full bg-error"></div>
                        <span class="text-xs text-gray-600">Rejected</span>
                    </div>
                </div>
            </div>
            <div class="border-base-200 mt-4 flex h-px w-full flex-1 border-t">
                @if ((period | async) === 'day') {
                    <room-bookings-timeline class="relative z-0 w-1/2 flex-1" />
                } @else if ((period | async) === 'week') {
                    <room-week-bookings-timeline
                        class="relative z-0 w-1/2 flex-1"
                    />
                } @else if ((period | async) === 'list') {
                    <room-list-timeline class="relative z-0 w-1/2 flex-1" />
                }
                @if (has_approvals) {
                    <room-bookings-approvals class="relative z-10" />
                }
            </div>
        </div>
    `, providers: [UserPipe], imports: [
      CommonModule,
      TranslatePipe,
      MatFormFieldModule,
      MatSelectModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      IconComponent,
      MatRippleModule,
      FormsModule,
      RoomBookingsTimelineComponent,
      RoomListTimelineComponent,
      RoomWeekBookingsTimelineComponent,
      RoomBookingsApprovalsComponent,
      SettingsToggleComponent,
      BuildingPipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomBookingsComponent, { className: "RoomBookingsComponent", filePath: "apps/concierge/src/app/day-view/room-bookings.component.ts", lineNumber: 179 });
})();

// apps/concierge/src/app/day-view/day-view.component.ts
var _c06 = ["app-new-dayview", ""];
var _DayViewComponent = class _DayViewComponent {
};
_DayViewComponent.\u0275fac = function DayViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DayViewComponent)();
};
_DayViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DayViewComponent, selectors: [["", "app-new-dayview", ""]], attrs: _c06, decls: 5, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"]], template: function DayViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1);
    \u0275\u0275element(4, "room-bookings");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [
  ApplicationTopbarComponent,
  ApplicationSidebarComponent,
  RoomBookingsComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n@media print {\n  [_nghost-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=day-view.component.css.map */"] });
var DayViewComponent = _DayViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayViewComponent, [{
    type: Component,
    args: [{ selector: "[app-new-dayview]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                <room-bookings></room-bookings>
            </main>
        </div>
    `, imports: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      RoomBookingsComponent
    ], styles: ["/* angular:styles/component:css;880d487ada0a6ca6b91f4963c378b78309a648e0732b769b53a3313d2e0e60bc;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/day-view/day-view.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n@media print {\n  :host {\n    display: none;\n  }\n}\n/*# sourceMappingURL=day-view.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DayViewComponent, { className: "DayViewComponent", filePath: "apps/concierge/src/app/day-view/day-view.component.ts", lineNumber: 40 });
})();

// apps/concierge/src/app/day-view/day-view.module.ts
var ROUTES = [
  { path: "", component: DayViewComponent },
  { path: "**", redirectTo: "" }
];
var _DayViewModule = class _DayViewModule {
};
_DayViewModule.\u0275fac = function DayViewModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DayViewModule)();
};
_DayViewModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DayViewModule });
_DayViewModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [DayViewComponent, RouterModule.forChild(ROUTES)] });
var DayViewModule = _DayViewModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayViewModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [DayViewComponent, RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  DayViewModule
};
//# sourceMappingURL=day-view.module-C77KPGSK.js.map
