import {
  EventsStateService
} from "./chunk-NYFUTAAC.js";
import "./chunk-IPDW32UJ.js";
import "./chunk-3RGPC2EH.js";
import {
  loadPersistedZones,
  persistZones
} from "./chunk-2IX3MLLC.js";
import {
  DateOptionsComponent
} from "./chunk-J55DB2VV.js";
import "./chunk-WU4ZQASG.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-5O7QTLTR.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BuildingPipe,
  CalendarEvent,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  EventDetailsModalComponent,
  FormsModule,
  IconComponent,
  LevelPipe,
  MatCheckbox,
  MatCheckboxModule,
  MatDialog,
  MatFormField,
  MatFormFieldModule,
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
  NgControlStatus,
  NgModel,
  NgModule,
  OrganisationService,
  Output,
  Router,
  RouterModule,
  SettingsService,
  SettingsToggleComponent,
  SetupBreakdownModalComponent,
  SimpleTableComponent,
  SpacePipe,
  TranslatePipe,
  UserPipe,
  ViewChild,
  __spreadProps,
  __spreadValues,
  addDays,
  addHours,
  catchError,
  combineLatest,
  computed,
  debounceTime,
  declineEvent,
  differenceInMinutes,
  downloadFile,
  filter,
  first,
  format,
  getTimezoneDifferenceInHours,
  getTimezoneOffsetInMinutes,
  getTimezoneOffsetString,
  i18n,
  inject,
  isSameDay,
  jsonToCsv,
  lastValueFrom,
  map,
  nextValueFrom,
  normalizeDates,
  notifyError,
  notifyInfo,
  notifySuccess,
  of,
  openConfirmModal,
  output,
  requestSpacesForZone,
  setClassMetadata,
  setHours,
  settingSignal,
  shareReplay,
  signal,
  startOfDay,
  startOfMinute,
  startOfWeek,
  startWith,
  switchMap,
  toSignal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction8,
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
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-32WFR5TQ.js";

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
function RoomBookingsApprovalsComponent_Conditional_15_Template(rf, ctx) {
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
function RoomBookingsApprovalsComponent_For_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "icon");
    \u0275\u0275text(2, "event_repeat");
    \u0275\u0275elementEnd()();
  }
}
function RoomBookingsApprovalsComponent_For_17_Conditional_14_Template(rf, ctx) {
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
function RoomBookingsApprovalsComponent_For_17_Conditional_15_Template(rf, ctx) {
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
function RoomBookingsApprovalsComponent_For_17_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 19);
  }
}
function RoomBookingsApprovalsComponent_For_17_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34)(1, "icon");
    \u0275\u0275text(2, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-menu", null, 0)(5, "button", 35);
    \u0275\u0275listener("click", function RoomBookingsApprovalsComponent_For_17_Conditional_49_Template_button_click_5_listener() {
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
    \u0275\u0275listener("click", function RoomBookingsApprovalsComponent_For_17_Conditional_49_Template_button_click_12_listener() {
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
function RoomBookingsApprovalsComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275conditionalCreate(1, RoomBookingsApprovalsComponent_For_17_Conditional_1_Template, 3, 0, "div", 15);
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
    \u0275\u0275conditionalCreate(14, RoomBookingsApprovalsComponent_For_17_Conditional_14_Template, 3, 5, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, RoomBookingsApprovalsComponent_For_17_Conditional_15_Template, 2, 1, "div", 18)(16, RoomBookingsApprovalsComponent_For_17_Conditional_16_Template, 1, 0, "hr", 19);
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
    \u0275\u0275listener("click", function RoomBookingsApprovalsComponent_For_17_Template_button_click_37_listener() {
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
    \u0275\u0275listener("click", function RoomBookingsApprovalsComponent_For_17_Template_button_click_43_listener() {
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
    \u0275\u0275conditionalCreate(49, RoomBookingsApprovalsComponent_For_17_Conditional_49_Template, 19, 7);
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
function RoomBookingsApprovalsComponent_Conditional_18_Template(rf, ctx) {
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
function RoomBookingsApprovalsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function RoomBookingsApprovalsComponent_Conditional_19_Template_button_click_0_listener() {
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
var RoomBookingsApprovalsComponent = class _RoomBookingsApprovalsComponent {
  constructor() {
    this._state = inject(EventsStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.show = signal(true, ...ngDevMode ? [{ debugName: "show" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.status = signal({}, ...ngDevMode ? [{ debugName: "status" }] : (
      /* istanbul ignore next */
      []
    ));
    this.search = signal("", ...ngDevMode ? [{ debugName: "search" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pending = toSignal(this._state.pending, {
      initialValue: []
    });
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this.filtered_pending = computed(() => {
      const search = this.search().toLowerCase();
      const status = this.status();
      return this.pending().filter((event) => !status[event.id] && (!event.recurring_event_id || !status[event.recurring_event_id]) && (event.title.toLowerCase().includes(search) || event.host.toLowerCase().includes(search) || event.organiser?.name?.toLowerCase().includes(search)));
    }, ...ngDevMode ? [{ debugName: "filtered_pending" }] : (
      /* istanbul ignore next */
      []
    ));
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
    this.status.update((s) => __spreadProps(__spreadValues({}, s), { [event.id]: "accept" }));
    this._state.replace(this._eventWithStatus(event, "approved"));
  }
  async approveSeries(event) {
    const mod = this._org.module("approvals", "RoomBookingApproval");
    if (!mod)
      return;
    this.loading.set(true);
    await mod.execute("accept_recurring_event", [event.mailbox, event.recurring_event_id || event.id], 30 * 1e3).catch();
    this.loading.set(false);
    this._setSeriesStatus(event, "accept");
    this._replaceSeriesEvents(event, "approved");
  }
  async reject(event) {
    const mod = this._org.module("approvals", "RoomBookingApproval");
    if (!mod)
      return;
    this.loading.set(true);
    await mod.execute("decline_event", [event.mailbox, event.id]).catch();
    this.loading.set(false);
    this.status.update((s) => __spreadProps(__spreadValues({}, s), { [event.id]: "decline" }));
    this._state.replace(this._eventWithStatus(event, "declined"));
  }
  async rejectSeries(event) {
    const mod = this._org.module("approvals", "RoomBookingApproval");
    if (!mod)
      return;
    this.loading.set(true);
    await mod.execute("decline_recurring_event", [event.mailbox, event.recurring_event_id || event.id], 30 * 1e3).catch();
    this.loading.set(false);
    this._setSeriesStatus(event, "decline");
    this._replaceSeriesEvents(event, "declined");
  }
  _setSeriesStatus(event, status) {
    const recurring_event_id = event.recurring_event_id || event.id;
    const series_events = this.pending().filter((_) => (_.recurring_event_id || _.id) === recurring_event_id);
    this.status.update((s) => __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, s), {
      [recurring_event_id]: status
    }), Object.fromEntries(series_events.map((_) => [_.id, status]))), {
      [event.id]: status
    }));
  }
  _replaceSeriesEvents(event, status) {
    const recurring_event_id = event.recurring_event_id || event.id;
    const series_events = this.pending().filter((_) => (_.recurring_event_id || _.id) === recurring_event_id);
    for (const series_event of series_events.length ? series_events : [event]) {
      this._state.replace(this._eventWithStatus(series_event, status));
    }
  }
  _eventWithStatus(event, status) {
    const response_status = status === "approved" ? "accepted" : "declined";
    return new CalendarEvent(__spreadProps(__spreadValues({}, event), {
      status,
      resources: event.resources.map((resource) => __spreadProps(__spreadValues({}, resource), {
        response_status
      })),
      system: event.system ? __spreadProps(__spreadValues({}, event.system), { response_status }) : event.system
    }));
  }
  static {
    this.\u0275fac = function RoomBookingsApprovalsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomBookingsApprovalsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomBookingsApprovalsComponent, selectors: [["room-bookings-approvals"]], decls: 20, vars: 19, consts: [["menu", "matMenu"], [1, "border-base-300", "flex", "h-full", "w-[20rem]", "flex-col", "overflow-hidden", "border-l"], [1, "border-base-200", "relative", "flex", "items-center", "justify-center", "space-x-2", "border-b", "p-2"], ["btn", "", "icon", "", "matRipple", "", "matTooltipPosition", "left", 1, "bg-base-200", "absolute", "top-3", "left-2", 3, "click", "matTooltip"], [1, "flex-1", "py-3", "text-center"], [1, "border-base-300", "relative", "-mt-px", "border-b"], ["type", "text", 1, "w-full", "py-4", "pr-4", "pl-10", 3, "ngModelChange", "placeholder", "ngModel"], [1, "pointer-events-none", "absolute", "top-1/2", "left-2", "-translate-y-1/2", "text-2xl"], [1, "bg-base-200", "flex-1", "space-y-1", "overflow-auto", "p-1"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "border-base-300", "bg-base-100", "relative", "w-full", "rounded-lg", "border", "p-2"], [1, "absolute", "top-14", "right-0", "bottom-0", "left-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-2"], ["btn", "", "icon", "", "matRipple", "", "matTooltipPosition", "left", 1, "border-base-200", "hover:bg-info-light", "absolute", "top-3", "-left-8", "border", "shadow-md", 3, "matTooltip"], ["src", "assets/icons/no-pending.svg"], [1, "opacity-30"], ["matTooltip", "Recurring Series", "matTooltipPosition", "left", 1, "absolute", "top-3", "right-2", "text-2xl"], [1, "font-medium"], [1, "mb-2", "text-xs", "opacity-30"], [1, "bg-base-200", "mb-2", "h-32", "w-full", "overflow-hidden", "rounded-sm"], [1, "border-base-300", "bg-base-200", "mb-2"], [1, "mb-2", "flex", "items-center", "space-x-2"], [1, "bg-base-200", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full"], [1, "text-xl"], [1, "flex-1"], [1, "text-sm"], [1, "text-xs", "opacity-50"], [1, "flex-1", "text-sm"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "border-success", "bg-success-light", "flex", "min-w-0", "flex-1", "items-center", "space-x-1", "text-black", 3, "click", "disabled"], [1, "ml-2"], [1, "text-success", "text-2xl"], ["btn", "", "matRipple", "", 1, "border-error", "bg-error-light", "flex", "min-w-0", "flex-1", "items-center", "space-x-1", "text-black", 3, "click", "disabled"], [1, "text-error", "text-2xl"], ["auth", "", 1, "min-h-full", "min-w-full", "object-cover", "object-center", 3, "source"], ["icon", "", "matRipple", "", 1, "border-base-300", "bg-base-200", "h-12", "w-12", "rounded-md", "border", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2", "pr-4"], [1, "bg-base-100", "absolute", "inset-0", "z-0", "opacity-80"], ["diameter", "32"], [1, "relative", "z-10"], ["btn", "", "icon", "", "matRipple", "", "matTooltipPosition", "left", 1, "border-base-200", "hover:bg-info-light", "absolute", "top-3", "-left-8", "border", "shadow-md", 3, "click", "matTooltip"]], template: function RoomBookingsApprovalsComponent_Template(rf, ctx) {
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
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "input", 6);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function RoomBookingsApprovalsComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "icon", 7);
        \u0275\u0275text(13, " search ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 8);
        \u0275\u0275conditionalCreate(15, RoomBookingsApprovalsComponent_Conditional_15_Template, 5, 3, "div", 9);
        \u0275\u0275repeaterCreate(16, RoomBookingsApprovalsComponent_For_17_Template, 50, 45, "div", 10, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(18, RoomBookingsApprovalsComponent_Conditional_18_Template, 6, 3, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(19, RoomBookingsApprovalsComponent_Conditional_19_Template, 4, 3, "button", 12);
      }
      if (rf & 2) {
        \u0275\u0275styleProp("width", ctx.show() ? "" : "0px");
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 9, "APP.CONCIERGE.ROOMS_PENDING_HIDE"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 11, "APP.CONCIERGE.ROOMS_PENDING_HEADER", \u0275\u0275pureFunction2(16, _c0, ctx.filtered_pending().length || "0", ctx.pending().length || "0")), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 14, "COMMON.SEARCH"));
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(!ctx.filtered_pending().length ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.filtered_pending());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading() ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.show() ? 19 : -1);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
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
      MatMenuTrigger,
      AsyncPipe,
      DatePipe,
      TranslatePipe,
      BuildingPipe,
      LevelPipe,
      SpacePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  height: 100%;\n}\n/*# sourceMappingURL=room-approvals.component.css.map */"] });
  }
};
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
                >
                    <icon>chevron_right</icon>
                </button>
                <h3 class="flex-1 py-3 text-center">
                    {{
                        'APP.CONCIERGE.ROOMS_PENDING_HEADER'
                            | translate
                                : {
                                      count: filtered_pending().length || '0',
                                      total: pending().length || '0',
                                  }
                    }}
                </h3>
            </div>
            <div class="border-base-300 relative -mt-px border-b">
                <input
                    type="text"
                    [placeholder]="'COMMON.SEARCH' | translate"
                    class="w-full py-4 pr-4 pl-10"
                    [(ngModel)]="search"
                />
                <icon
                    class="pointer-events-none absolute top-1/2 left-2 -translate-y-1/2 text-2xl"
                >
                    search
                </icon>
            </div>
            <div class="bg-base-200 flex-1 space-y-1 overflow-auto p-1">
                @if (!filtered_pending().length) {
                    <div
                        class="flex h-full w-full flex-col items-center justify-center space-y-2"
                    >
                        <img src="assets/icons/no-pending.svg" />
                        <p class="opacity-30">
                            {{
                                'APP.CONCIERGE.ROOMS_PENDING_EMPTY' | translate
                            }}
                        </p>
                    </div>
                }
                @for (event of filtered_pending(); track event) {
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
                        <p class="mb-2 text-xs opacity-30">
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
                                <div class="text-xs opacity-50">
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
                class="border-base-200 hover:bg-info-light absolute top-3 -left-8 border shadow-md"
                (click)="setShow(!show())"
                [matTooltip]="'APP.CONCIERGE.ROOMS_PENDING_SHOW' | translate"
                matTooltipPosition="left"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomBookingsApprovalsComponent, { className: "RoomBookingsApprovalsComponent", filePath: "apps/concierge/src/app/day-view/room-approvals.component.ts", lineNumber: 296 });
})();

// apps/concierge/src/app/day-view/room-bookings-list.component.ts
var _c02 = (a0, a1) => ({ key: "date", name: a0, content: a1, size: "4rem", sortable: false });
var _c1 = (a0, a1) => ({ key: "date", name: a0, content: a1, size: "9rem" });
var _c2 = (a0) => ({ key: "room_name", name: a0 });
var _c3 = (a0, a1) => ({ key: "host", name: a0, content: a1 });
var _c4 = (a0) => ({ key: "title", name: a0 });
var _c5 = (a0, a1) => ({ key: "type", name: a0, content: a1, sortable: false });
var _c6 = (a0, a1) => ({ key: "status", name: a0, content: a1, sortable: false });
var _c7 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
function RoomBookingsListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 13)(2, "mat-spinner", 14);
    \u0275\u0275elementStart(3, "p", 15);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "COMMON.LOADING"), "... ");
  }
}
function RoomBookingsListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18);
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
function RoomBookingsListComponent_ng_template_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext().row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, row_r2.date, ctx_r2.time_format), " \u2013 ", \u0275\u0275pipeBind2(3, 5, row_r2.date_end, ctx_r2.time_format), " ");
  }
}
function RoomBookingsListComponent_ng_template_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY"), " ");
  }
}
function RoomBookingsListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, RoomBookingsListComponent_ng_template_16_Conditional_1_Template, 4, 8, "div", 19);
    \u0275\u0275conditionalCreate(2, RoomBookingsListComponent_ng_template_16_Conditional_2_Template, 3, 3, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275conditional(!row_r2.all_day && row_r2.duration <= 12 * 60 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r2.all_day || row_r2.duration > 12 * 60 ? 2 : -1);
  }
}
function RoomBookingsListComponent_ng_template_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const email_r4 = \u0275\u0275nextContext().data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", email_r4, " ");
  }
}
function RoomBookingsListComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "user");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "div", 20)(4, "div", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, RoomBookingsListComponent_ng_template_18_Conditional_6_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const email_r4 = ctx.data;
    const user_r5 = \u0275\u0275pipeBind1(2, 4, \u0275\u0275pipeBind1(1, 2, email_r4));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (user_r5 == null ? null : user_r5.name) || (user_r5 == null ? null : user_r5.email) || email_r4, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((user_r5 == null ? null : user_r5.name) ? 6 : -1);
  }
}
function RoomBookingsListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, row_r6.type === "external" ? "COMMON.TYPE_EXTERNAL" : row_r6.type === "cancelled" ? "COMMON.TYPE_CANCELLED" : "COMMON.TYPE_INTERNAL"), " ");
  }
}
function RoomBookingsListComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-error!", !row_r7.deleted && (row_r7.type === "cancelled" || row_r7.status === "declined"))("text-error-content!", !row_r7.deleted && (row_r7.type === "cancelled" || row_r7.status === "declined"))("bg-neutral!", row_r7.deleted)("text-neutral-content!", row_r7.deleted)("bg-warning!", row_r7.status === "tentative" && !row_r7.deleted)("text-warning-content!", row_r7.status === "tentative" && !row_r7.deleted);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 13, row_r7.deleted ? "APP.CONCIERGE.BOOKING_STATUS_DELETED" : row_r7.type === "cancelled" || row_r7.status === "declined" ? "APP.CONCIERGE.BOOKING_STATUS_DECLINED" : row_r7.status === "tentative" ? "APP.CONCIERGE.BOOKING_STATUS_PENDING" : "APP.CONCIERGE.BOOKING_STATUS_APPROVED"), " ");
  }
}
function RoomBookingsListComponent_ng_template_24_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function RoomBookingsListComponent_ng_template_24_Conditional_0_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const row_r9 = \u0275\u0275nextContext(2).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(row_r9));
    });
    \u0275\u0275elementStart(1, "div", 30)(2, "icon", 27);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "CALENDAR_EVENT.ACTION_EDIT"), " ");
  }
}
function RoomBookingsListComponent_ng_template_24_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function RoomBookingsListComponent_ng_template_24_Conditional_0_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const row_r9 = \u0275\u0275nextContext(2).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancel(row_r9));
    });
    \u0275\u0275elementStart(1, "div", 30)(2, "icon", 31);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "CALENDAR_EVENT.ACTION_DELETE"), " ");
  }
}
function RoomBookingsListComponent_ng_template_24_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function RoomBookingsListComponent_ng_template_24_Conditional_0_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const row_r9 = \u0275\u0275nextContext(2).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.print(row_r9));
    });
    \u0275\u0275elementStart(1, "div", 30)(2, "icon", 27);
    \u0275\u0275text(3, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "CALENDAR_EVENT.ACTION_PRINT"), " ");
  }
}
function RoomBookingsListComponent_ng_template_24_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function RoomBookingsListComponent_ng_template_24_Conditional_0_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const row_r9 = \u0275\u0275nextContext(2).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancel(row_r9, true));
    });
    \u0275\u0275elementStart(1, "div", 30)(2, "icon", 31);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "CALENDAR_EVENT.ACTION_DELETE_SERIES"), " ");
  }
}
function RoomBookingsListComponent_ng_template_24_Conditional_0_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function RoomBookingsListComponent_ng_template_24_Conditional_0_For_11_Template_button_click_0_listener() {
      const act_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const row_r9 = \u0275\u0275nextContext(2).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.performAction(row_r9, act_r14.id));
    });
    \u0275\u0275elementStart(1, "div", 30)(2, "icon", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const act_r14 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(act_r14.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(act_r14.name);
  }
}
function RoomBookingsListComponent_ng_template_24_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "button", 26)(2, "icon", 27);
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 6);
    \u0275\u0275conditionalCreate(6, RoomBookingsListComponent_ng_template_24_Conditional_0_Conditional_6_Template, 7, 3, "button", 28);
    \u0275\u0275conditionalCreate(7, RoomBookingsListComponent_ng_template_24_Conditional_0_Conditional_7_Template, 7, 3, "button", 28);
    \u0275\u0275conditionalCreate(8, RoomBookingsListComponent_ng_template_24_Conditional_0_Conditional_8_Template, 7, 3, "button", 28);
    \u0275\u0275conditionalCreate(9, RoomBookingsListComponent_ng_template_24_Conditional_0_Conditional_9_Template, 7, 3, "button", 28);
    \u0275\u0275repeaterCreate(10, RoomBookingsListComponent_ng_template_24_Conditional_0_For_11_Template, 6, 2, "button", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const action_menu_r15 = \u0275\u0275reference(5);
    const row_r9 = \u0275\u0275nextContext().row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", action_menu_r15);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r2.hide_edit() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.can_delete() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.is_concierge ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r9.recurring_event_id ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.custom_actions());
  }
}
function RoomBookingsListComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomBookingsListComponent_ng_template_24_Conditional_0_Template, 12, 5, "div", 25);
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.show_actions(row_r9) ? 0 : -1);
  }
}
var RoomBookingsListComponent = class _RoomBookingsListComponent {
  constructor() {
    this._state = inject(EventsStateService);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.can_delete = settingSignal("events.allow_deleting", false);
    this.events = toSignal(this._state.filtered, {
      initialValue: []
    });
    this.date = toSignal(this._state.date, {
      initialValue: Date.now()
    });
    this.period = toSignal(this._state.period, {
      initialValue: "day"
    });
    this.spaces = toSignal(this._state.spaces, {
      initialValue: []
    });
    this.loading = toSignal(this._state.loading, {
      initialValue: false
    });
    this.bookings = computed(() => [...this.events()].filter((event) => !event.extension_data?.shared_event).sort((a, b) => a.date - b.date).map((event) => __spreadProps(__spreadValues({}, event), {
      source_event: event,
      room_name: this.room_name(event),
      type: event.guests?.length ? "external" : event.status === "declined" ? "cancelled" : "internal"
    })), ...ngDevMode ? [{ debugName: "bookings" }] : (
      /* istanbul ignore next */
      []
    ));
    this.setDate = (date) => this._state.setDate(date);
    this.edit = (event) => this._state.newBooking(event?.source_event || event);
    this.cancel = (event, series = false) => this._state.removeBooking(event?.source_event || event, series);
    this.hide_edit = computed(() => !this._settings.get("app.events.allow_edit"), ...ngDevMode ? [{ debugName: "hide_edit" }] : (
      /* istanbul ignore next */
      []
    ));
    this.custom_actions = computed(() => this._settings.get("app.events.custom_actions") || [], ...ngDevMode ? [{ debugName: "custom_actions" }] : (
      /* istanbul ignore next */
      []
    ));
    this.show_actions = (event) => event?.state !== "done" && !this._settings.get("app.events.booking_unavailable");
  }
  get is_concierge() {
    return (this._settings.app_name || "").toLowerCase().includes("concierge");
  }
  print(event) {
    const ref = this._dialog.open(EventDetailsModalComponent, {
      data: {
        event: event?.source_event || event,
        edit_fn: this.edit,
        remove_fn: this.cancel
      }
    });
    ref.componentInstance.hide_edit.set(this.hide_edit());
    ref.componentInstance.printEvent();
  }
  async performAction(event, action) {
    event = event?.source_event || event;
    if (!action.includes("breakdown"))
      return;
    const ref = this._dialog.open(SetupBreakdownModalComponent, {
      data: event
    });
    const data = await ref.afterClosed().toPromise();
    if (data)
      this._state.replace(data);
  }
  get time_format() {
    return this._settings.time_format;
  }
  get week_start() {
    return this._settings.get("app.week_start");
  }
  room_name(event) {
    const space = this.spaces().find((item) => event.resources?.some((resource) => resource.id === item.id || resource.email === item.email) || event.system?.id === item.id || event.system?.email === item.email);
    return space?.display_name || space?.name || event.location || i18n("COMMON.ROOM") || "";
  }
  static {
    this.\u0275fac = function RoomBookingsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomBookingsListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomBookingsListComponent, selectors: [["room-bookings-list"]], features: [\u0275\u0275ProvidersFeature([UserPipe])], decls: 26, vars: 57, consts: [["date_template", ""], ["period_template", ""], ["user_template", ""], ["type_template", ""], ["status_template", ""], ["action_template", ""], ["action_menu", "matMenu"], [1, "flex", "h-full", "w-full", "flex-col"], [1, "border-base-200", "bg-base-100", "flex", "items-center", "justify-center", "border-b", "p-2"], [3, "dateChange", "date", "step", "display_mode", "week_start", "is_new", "hide_today"], [1, "min-h-0", "flex-1", "overflow-auto", "pb-16"], [1, "block", "min-w-368", "text-sm", 3, "data", "columns", "empty_message", "sortable"], [1, "absolute", "top-14", "right-0", "bottom-0", "left-0", "z-30", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-2"], [1, "bg-base-100", "absolute", "inset-0", "z-0", "opacity-80"], ["diameter", "32"], [1, "relative", "z-10"], [1, "flex", "w-full", "flex-col", "items-center", "justify-center", "py-2"], [1, "opacity-60"], [1, "text-xl"], [1, "p-2"], [1, "flex", "flex-col", "justify-center", "px-4", "py-2"], [1, "select-all"], [1, "max-w-48", "truncate", "text-xs", "opacity-30", "select-all"], [1, "px-4", "py-2"], [1, "bg-success", "text-success-content", "inline-flex", "rounded-full", "px-3", "py-1", "text-xs"], [1, "mx-auto", "flex", "items-center", "justify-end", "space-x-2"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded-sm", 3, "matMenuTriggerFor"], [1, "text-2xl"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-error", "text-2xl"]], template: function RoomBookingsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "date-options", 9);
        \u0275\u0275listener("dateChange", function RoomBookingsListComponent_Template_date_options_dateChange_2_listener($event) {
          return ctx.setDate($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "div", 10);
        \u0275\u0275element(4, "simple-table", 11);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(13, RoomBookingsListComponent_Conditional_13_Template, 6, 3, "div", 12);
        \u0275\u0275template(14, RoomBookingsListComponent_ng_template_14_Template, 7, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, RoomBookingsListComponent_ng_template_16_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(18, RoomBookingsListComponent_ng_template_18_Template, 7, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(20, RoomBookingsListComponent_ng_template_20_Template, 3, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(22, RoomBookingsListComponent_ng_template_22_Template, 4, 15, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(24, RoomBookingsListComponent_ng_template_24_Template, 1, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const date_template_r16 = \u0275\u0275reference(15);
        const period_template_r17 = \u0275\u0275reference(17);
        const user_template_r18 = \u0275\u0275reference(19);
        const type_template_r19 = \u0275\u0275reference(21);
        const status_template_r20 = \u0275\u0275reference(23);
        const action_template_r21 = \u0275\u0275reference(25);
        \u0275\u0275advance(2);
        \u0275\u0275property("date", ctx.date())("step", ctx.period() === "week" ? 7 : 1)("display_mode", ctx.period() === "week" ? "week" : "day")("week_start", ctx.week_start)("is_new", true)("hide_today", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("data", ctx.bookings())("columns", \u0275\u0275pureFunction8(48, _c8, \u0275\u0275pureFunction2(27, _c02, \u0275\u0275pipeBind1(5, 11, "FORM.DATE"), date_template_r16), \u0275\u0275pureFunction2(30, _c1, \u0275\u0275pipeBind1(6, 13, "FORM.PERIOD"), period_template_r17), \u0275\u0275pureFunction1(33, _c2, \u0275\u0275pipeBind1(7, 15, "RESOURCE.ROOM")), \u0275\u0275pureFunction2(35, _c3, \u0275\u0275pipeBind1(8, 17, "FORM.HOST"), user_template_r18), \u0275\u0275pureFunction1(38, _c4, \u0275\u0275pipeBind1(9, 19, "FORM.TITLE")), \u0275\u0275pureFunction2(40, _c5, \u0275\u0275pipeBind1(10, 21, "COMMON.TYPE"), type_template_r19), \u0275\u0275pureFunction2(43, _c6, \u0275\u0275pipeBind1(11, 23, "COMMON.STATUS"), status_template_r20), \u0275\u0275pureFunction1(46, _c7, action_template_r21)))("empty_message", \u0275\u0275pipeBind1(12, 25, "APP.CONCIERGE.SCHEDULE_EMPTY"))("sortable", true);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.loading() ? 13 : -1);
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      IconComponent,
      SimpleTableComponent,
      DateOptionsComponent,
      AsyncPipe,
      DatePipe,
      TranslatePipe,
      UserPipe
    ], styles: ["\n[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=room-bookings-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomBookingsListComponent, [{
    type: Component,
    args: [{ selector: "room-bookings-list", template: `
        <div class="flex h-full w-full flex-col">
            <div
                class="border-base-200 bg-base-100 flex items-center justify-center border-b p-2"
            >
                <date-options
                    [date]="date()"
                    [step]="period() === 'week' ? 7 : 1"
                    [display_mode]="period() === 'week' ? 'week' : 'day'"
                    [week_start]="week_start"
                    (dateChange)="setDate($event)"
                    [is_new]="true"
                    [hide_today]="true"
                ></date-options>
            </div>
            <div class="min-h-0 flex-1 overflow-auto pb-16">
                <simple-table
                    class="block min-w-368 text-sm"
                    [data]="bookings()"
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
                        {
                            key: 'room_name',
                            name: 'RESOURCE.ROOM' | translate,
                        },
                        {
                            key: 'host',
                            name: 'FORM.HOST' | translate,
                            content: user_template,
                        },
                        {
                            key: 'title',
                            name: 'FORM.TITLE' | translate,
                        },
                        {
                            key: 'type',
                            name: 'COMMON.TYPE' | translate,
                            content: type_template,
                            sortable: false,
                        },
                        {
                            key: 'status',
                            name: 'COMMON.STATUS' | translate,
                            content: status_template,
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
                    [empty_message]="'APP.CONCIERGE.SCHEDULE_EMPTY' | translate"
                    [sortable]="true"
                ></simple-table>
            </div>
            @if (loading()) {
                <div
                    class="absolute top-14 right-0 bottom-0 left-0 z-30 flex flex-col items-center justify-center space-y-2 p-2"
                >
                    <div
                        class="bg-base-100 absolute inset-0 z-0 opacity-80"
                    ></div>
                    <mat-spinner diameter="32"></mat-spinner>
                    <p class="relative z-10">
                        {{ 'COMMON.LOADING' | translate }}...
                    </p>
                </div>
            }
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
                    @if (!row.all_day && row.duration <= 12 * 60) {
                        <div class="p-2">
                            {{ row.date | date: time_format }} &ndash;
                            {{ row.date_end | date: time_format }}
                        </div>
                    }
                    @if (row.all_day || row.duration > 12 * 60) {
                        <div class="p-2">
                            {{ 'COMMON.ALL_DAY' | translate }}
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
            <ng-template #type_template let-row="row">
                <div class="px-4 py-2">
                    {{
                        (row.type === 'external'
                            ? 'COMMON.TYPE_EXTERNAL'
                            : row.type === 'cancelled'
                              ? 'COMMON.TYPE_CANCELLED'
                              : 'COMMON.TYPE_INTERNAL'
                        ) | translate
                    }}
                </div>
            </ng-template>
            <ng-template #status_template let-row="row">
                <div class="px-4 py-2">
                    <div
                        class="bg-success text-success-content inline-flex rounded-full px-3 py-1 text-xs"
                        [class.bg-error!]="
                            !row.deleted &&
                            (row.type === 'cancelled' ||
                                row.status === 'declined')
                        "
                        [class.text-error-content!]="
                            !row.deleted &&
                            (row.type === 'cancelled' ||
                                row.status === 'declined')
                        "
                        [class.bg-neutral!]="row.deleted"
                        [class.text-neutral-content!]="row.deleted"
                        [class.bg-warning!]="
                            row.status === 'tentative' && !row.deleted
                        "
                        [class.text-warning-content!]="
                            row.status === 'tentative' && !row.deleted
                        "
                    >
                        {{
                            (row.deleted
                                ? 'APP.CONCIERGE.BOOKING_STATUS_DELETED'
                                : row.type === 'cancelled' ||
                                    row.status === 'declined'
                                  ? 'APP.CONCIERGE.BOOKING_STATUS_DECLINED'
                                  : row.status === 'tentative'
                                    ? 'APP.CONCIERGE.BOOKING_STATUS_PENDING'
                                    : 'APP.CONCIERGE.BOOKING_STATUS_APPROVED'
                            ) | translate
                        }}
                    </div>
                </div>
            </ng-template>
            <ng-template #action_template let-row="row">
                @if (show_actions(row)) {
                    <div
                        class="mx-auto flex items-center justify-end space-x-2"
                    >
                        <button
                            icon
                            matRipple
                            class="h-12 w-12 rounded-sm"
                            [matMenuTriggerFor]="action_menu"
                        >
                            <icon class="text-2xl">more_vert</icon>
                        </button>
                        <mat-menu #action_menu="matMenu">
                            @if (!hide_edit()) {
                                <button mat-menu-item (click)="edit(row)">
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">edit</icon>
                                        <div>
                                            {{
                                                'CALENDAR_EVENT.ACTION_EDIT'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            }
                            @if (can_delete()) {
                                <button mat-menu-item (click)="cancel(row)">
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-error text-2xl"
                                            >delete</icon
                                        >
                                        <div>
                                            {{
                                                'CALENDAR_EVENT.ACTION_DELETE'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            }
                            @if (is_concierge) {
                                <button mat-menu-item (click)="print(row)">
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">print</icon>
                                        <div>
                                            {{
                                                'CALENDAR_EVENT.ACTION_PRINT'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            }
                            @if (row.recurring_event_id) {
                                <button
                                    mat-menu-item
                                    (click)="cancel(row, true)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-error text-2xl"
                                            >delete</icon
                                        >
                                        <div>
                                            {{
                                                'CALENDAR_EVENT.ACTION_DELETE_SERIES'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            }
                            @for (act of custom_actions(); track act) {
                                <button
                                    mat-menu-item
                                    (click)="performAction(row, act.id)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">{{
                                            act.icon
                                        }}</icon>
                                        <div>{{ act.name }}</div>
                                    </div>
                                </button>
                            }
                        </mat-menu>
                    </div>
                }
            </ng-template>
        </div>
    `, providers: [UserPipe], imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      MatMenuModule,
      MatProgressSpinnerModule,
      IconComponent,
      SimpleTableComponent,
      DateOptionsComponent,
      UserPipe
    ], styles: ["/* angular:styles/component:css;50f565321ed488c261915867f2cdb2126821993bd33e062143023023a6d86219;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/day-view/room-bookings-list.component.ts */\n:host {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=room-bookings-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomBookingsListComponent, { className: "RoomBookingsListComponent", filePath: "apps/concierge/src/app/day-view/room-bookings-list.component.ts", lineNumber: 310 });
})();

// apps/concierge/src/app/day-view/room-booking-search.component.ts
var _c03 = ["input_el"];
var _c12 = (a0, a1) => ({ count: a0, total: a1 });
function RoomBookingSearchComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 4);
    \u0275\u0275text(1, " search ");
    \u0275\u0275elementEnd();
  }
}
function RoomBookingSearchComponent_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.events().length ? "APP.CONCIERGE.ROOMS_SEARCH_EMPTY" : "APP.CONCIERGE.ROOMS_EMPTY"), " ");
  }
}
function RoomBookingSearchComponent_Conditional_8_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function RoomBookingSearchComponent_Conditional_8_For_8_Template_button_click_0_listener() {
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
function RoomBookingSearchComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, RoomBookingSearchComponent_Conditional_8_Conditional_5_Template, 3, 3, "div", 8);
    \u0275\u0275elementStart(6, "div", 9);
    \u0275\u0275repeaterCreate(7, RoomBookingSearchComponent_Conditional_8_For_8_Template, 23, 27, "button", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 2, "APP.CONCIERGE.ROOMS_SEARCH_COUNT", \u0275\u0275pureFunction2(5, _c12, ctx_r1.filtered().length, ctx_r1.events().length)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.filtered().length ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.filtered());
  }
}
var RoomBookingSearchComponent = class _RoomBookingSearchComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(EventsStateService);
    this._settings = inject(SettingsService);
    this.selected = output();
    this.show = signal(false, ...ngDevMode ? [{ debugName: "show" }] : (
      /* istanbul ignore next */
      []
    ));
    this.search = signal("", ...ngDevMode ? [{ debugName: "search" }] : (
      /* istanbul ignore next */
      []
    ));
    this.events = toSignal(this._state.filtered, {
      initialValue: []
    });
    this.types = [
      { id: "internal", name: "Internal", color: "#D81B60" },
      { id: "external", name: "External", color: "#1E88E5" },
      { id: "cancelled", name: "Cancelled", color: "#eeeeee" }
    ];
    this.filtered = computed(() => {
      const search = this.search().toLowerCase();
      return this.events().filter((e) => {
        return !e.is_system_event && (e.title.toLowerCase().includes(search) || e.organiser?.name?.toLowerCase().includes(search) || e.host.toLowerCase().includes(search) || e.system?.display_name?.toLowerCase().includes(search) || e.system?.name?.toLowerCase().includes(search) || e.resources[0]?.display_name?.toLowerCase()?.includes(search) || e.resources[0]?.name?.toLowerCase()?.includes(search) || e.resources[0]?.email?.toLowerCase()?.includes(search));
      });
    }, ...ngDevMode ? [{ debugName: "filtered" }] : (
      /* istanbul ignore next */
      []
    ));
    this._input_element = viewChild("input_el", ...ngDevMode ? [{ debugName: "_input_element" }] : (
      /* istanbul ignore next */
      []
    ));
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
    this.show.set(true);
    this._input_element()?.nativeElement.focus();
  }
  hideSearch() {
    if (!this.show())
      return;
    this.timeout("hide", () => this.show.set(false));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RoomBookingSearchComponent_BaseFactory;
      return function RoomBookingSearchComponent_Factory(__ngFactoryType__) {
        return (\u0275RoomBookingSearchComponent_BaseFactory || (\u0275RoomBookingSearchComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RoomBookingSearchComponent)))(__ngFactoryType__ || _RoomBookingSearchComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomBookingSearchComponent, selectors: [["room-booking-search"]], viewQuery: function RoomBookingSearchComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._input_element, _c03, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, outputs: { selected: "selected" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 10, consts: [["input_el", ""], [1, "relative"], ["icon", "", "matRipple", "", 3, "click"], [1, "border-base-300", "bg-base-100", "absolute", "top-1/2", "right-0", "w-[20rem]", "-translate-y-1/2", "rounded-full", "border", "py-3", "pr-4", "pl-10", "shadow-sm", 3, "ngModelChange", "blur", "ngModel", "placeholder"], [1, "absolute", "top-1/2", "right-70", "-translate-y-1/2", "text-2xl"], [1, "border-base-300", "bg-base-100", "absolute", "top-full", "right-4", "max-h-[65vh]", "w-[18rem]", "translate-y-2", "overflow-auto", "rounded-sm", "border", "shadow-sm"], [1, "bg-base-100", "sticky", "top-0", "z-10", "rounded-sm", "p-4"], [1, "text-xs", "opacity-60"], [1, "flex", "items-center", "justify-center", "p-4", "text-center", "text-sm", "opacity-30"], [1, "-mt-2", "px-2", "pb-2"], ["matRipple", "", 1, "hover:bg-base-200", "relative", "z-0", "flex", "w-full", "items-center", "space-x-2", "rounded-sm", "p-2", "text-left"], ["matRipple", "", 1, "hover:bg-base-200", "relative", "z-0", "flex", "w-full", "items-center", "space-x-2", "rounded-sm", "p-2", "text-left", 3, "click"], [1, "h-10", "w-1", "rounded-full"], ["date", "", 1, "leading-tight"], [1, "mx-auto", "text-2xl"], [1, "mx-auto", "-mt-1", "text-sm", "font-medium", "uppercase"], [1, "w-1/2", "flex-1"], [1, "flex", "w-full", "items-center", "space-x-2"], [1, "flex-1", "truncate", "text-sm"], [1, "truncate", "text-xs", "opacity-30"]], template: function RoomBookingSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
        \u0275\u0275listener("click", function RoomBookingSearchComponent_Template_button_click_1_listener() {
          return ctx.showSearch();
        });
        \u0275\u0275elementStart(2, "icon");
        \u0275\u0275text(3, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "input", 3, 0);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function RoomBookingSearchComponent_Template_input_ngModelChange_4_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("blur", function RoomBookingSearchComponent_Template_input_blur_4_listener() {
          return ctx.hideSearch();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, RoomBookingSearchComponent_Conditional_7_Template, 2, 0, "icon", 4);
        \u0275\u0275conditionalCreate(8, RoomBookingSearchComponent_Conditional_8_Template, 9, 8, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275classProp("opacity-0", !ctx.show())("pointer-events-none", !ctx.show());
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 8, "APP.CONCIERGE.ROOMS_SEARCH"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.show() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show() ? 8 : -1);
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      IconComponent,
      AsyncPipe,
      DatePipe,
      UserPipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomBookingSearchComponent, [{
    type: Component,
    args: [{ selector: "room-booking-search", template: `
        <div class="relative">
            <button icon matRipple (click)="showSearch()">
                <icon>search</icon>
            </button>
            <input
                #input_el
                [class.opacity-0]="!show()"
                [class.pointer-events-none]="!show()"
                class="border-base-300 bg-base-100 absolute top-1/2 right-0 w-[20rem] -translate-y-1/2 rounded-full border py-3 pr-4 pl-10 shadow-sm"
                [(ngModel)]="search"
                (blur)="hideSearch()"
                [placeholder]="'APP.CONCIERGE.ROOMS_SEARCH' | translate"
            />
            @if (show()) {
                <icon
                    class="absolute top-1/2 right-70 -translate-y-1/2 text-2xl"
                >
                    search
                </icon>
            }
            @if (show()) {
                <div
                    class="border-base-300 bg-base-100 absolute top-full right-4 max-h-[65vh] w-[18rem] translate-y-2 overflow-auto rounded-sm border shadow-sm"
                >
                    <div class="bg-base-100 sticky top-0 z-10 rounded-sm p-4">
                        <div class="text-xs opacity-60">
                            {{
                                'APP.CONCIERGE.ROOMS_SEARCH_COUNT'
                                    | translate
                                        : {
                                              count: filtered().length,
                                              total: events().length,
                                          }
                            }}
                        </div>
                    </div>
                    @if (!filtered().length) {
                        <div
                            class="flex items-center justify-center p-4 text-center text-sm opacity-30"
                        >
                            {{
                                (events().length
                                    ? 'APP.CONCIERGE.ROOMS_SEARCH_EMPTY'
                                    : 'APP.CONCIERGE.ROOMS_EMPTY'
                                ) | translate
                            }}
                        </div>
                    }
                    <div class="-mt-2 px-2 pb-2">
                        @for (event of filtered(); track event) {
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
                                    <div class="truncate text-xs opacity-30">
                                        {{ event.system?.display_name }}
                                    </div>
                                    <div class="truncate text-xs opacity-30">
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
  }], null, { selected: [{ type: Output, args: ["selected"] }], _input_element: [{ type: ViewChild, args: ["input_el", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomBookingSearchComponent, { className: "RoomBookingSearchComponent", filePath: "apps/concierge/src/app/day-view/room-booking-search.component.ts", lineNumber: 145 });
})();

// apps/concierge/src/app/day-view/room-timeline.utilities.ts
function isActiveRoomTimelineEvent(event) {
  const state = event.state;
  const status = event.status;
  return !event.deleted && !event.rejected && event.type !== "cancelled" && status !== "cancelled" && status !== "declined" && state !== "cancelled";
}

// apps/concierge/src/app/day-view/room-timeline-inverted.component.ts
var _c04 = ["timeline_el"];
var _c13 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function RoomBookingsInvertedTimelineComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.TIMEZONE_DIFF"), " ");
  }
}
function RoomBookingsInvertedTimelineComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.TODAY"), " ");
  }
}
function RoomBookingsInvertedTimelineComponent_For_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
}
function RoomBookingsInvertedTimelineComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, RoomBookingsInvertedTimelineComponent_For_16_Conditional_3_Template, 1, 0, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hour_r1 = ctx.$implicit;
    const \u0275$index_33_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r2.block_width + "rem");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatHour(hour_r1), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_33_r2 !== 0 ? 3 : -1);
  }
}
function RoomBookingsInvertedTimelineComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("mouseenter", function RoomBookingsInvertedTimelineComponent_For_19_Template_div_mouseenter_0_listener() {
      const \u0275$index_44_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hovered_row.set(\u0275$index_44_r5));
    })("mouseleave", function RoomBookingsInvertedTimelineComponent_For_19_Template_div_mouseleave_0_listener() {
      const \u0275$index_44_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearHoveredRow(\u0275$index_44_r5));
    });
    \u0275\u0275elementStart(1, "div", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const space_r6 = ctx.$implicit;
    const \u0275$index_44_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r2.row_height + "rem");
    \u0275\u0275classProp("row-highlight", ctx_r2.hovered_row() === \u0275$index_44_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", space_r6.display_name || space_r6.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.events()[space_r6.id] || \u0275\u0275pureFunction0(6, _c13)).length, " ");
  }
}
function RoomBookingsInvertedTimelineComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 25);
  }
  if (rf & 2) {
    const \u0275$index_55_r7 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", \u0275$index_55_r7 * ctx_r2.block_width + "rem");
  }
}
function RoomBookingsInvertedTimelineComponent_For_24_For_3_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 31);
  }
}
function RoomBookingsInvertedTimelineComponent_For_24_For_3_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 32);
    \u0275\u0275elementStart(1, "p", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-secondary", event_r11.status !== "cancelled")("bg-error", event_r11.status === "cancelled");
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-60", event_r11.status === "cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", event_r11.all_day ? "All Day" : \u0275\u0275pipeBind3(3, 11, event_r11.date, ctx_r2.time_format, ctx_r2.tz), " \u2013 ", event_r11.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("opacity-60", event_r11.status === "cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (event_r11.organiser == null ? null : event_r11.organiser.name) || event_r11.host, " ");
  }
}
function RoomBookingsInvertedTimelineComponent_For_24_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function RoomBookingsInvertedTimelineComponent_For_24_For_3_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const event_r11 = \u0275\u0275nextContext().$implicit;
      const space_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewEvent(event_r11, space_r12.id));
    })("mouseenter", function RoomBookingsInvertedTimelineComponent_For_24_For_3_Conditional_0_Template_button_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r10);
      const \u0275$index_58_r9 = \u0275\u0275nextContext(2).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hovered_row.set(\u0275$index_58_r9));
    })("mouseleave", function RoomBookingsInvertedTimelineComponent_For_24_For_3_Conditional_0_Template_button_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r10);
      const \u0275$index_58_r9 = \u0275\u0275nextContext(2).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearHoveredRow(\u0275$index_58_r9));
    });
    \u0275\u0275elementStart(1, "div", 30);
    \u0275\u0275conditionalCreate(2, RoomBookingsInvertedTimelineComponent_For_24_For_3_Conditional_0_Conditional_2_Template, 1, 0, "div", 31);
    \u0275\u0275conditionalCreate(3, RoomBookingsInvertedTimelineComponent_For_24_For_3_Conditional_0_Conditional_3_Template, 6, 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r11 = \u0275\u0275nextContext().$implicit;
    const \u0275$index_58_r9 = \u0275\u0275nextContext().$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r2.timeToOffset(event_r11.date) + "%")("top", \u0275$index_58_r9 * ctx_r2.row_height + 0.15 + "rem")("width", ctx_r2.endToOffset(event_r11.duration) + "%")("height", ctx_r2.row_height - 0.3 + "rem");
    \u0275\u0275property("matTooltip", ctx_r2.eventTooltip(event_r11));
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-60", event_r11.state === "done")("rounded-none!", event_r11.is_system_event)("border-secondary!", event_r11.is_system_event);
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r11.is_system_event ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!event_r11.is_system_event ? 3 : -1);
  }
}
function RoomBookingsInvertedTimelineComponent_For_24_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomBookingsInvertedTimelineComponent_For_24_For_3_Conditional_0_Template, 4, 17, "button", 28);
  }
  if (rf & 2) {
    const event_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!event_r11.is_system_event || ctx_r2.ui_options().show_overflow ? 0 : -1);
  }
}
function RoomBookingsInvertedTimelineComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("mouseenter", function RoomBookingsInvertedTimelineComponent_For_24_Template_div_mouseenter_0_listener() {
      const \u0275$index_58_r9 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hovered_row.set(\u0275$index_58_r9));
    })("mouseleave", function RoomBookingsInvertedTimelineComponent_For_24_Template_div_mouseleave_0_listener() {
      const \u0275$index_58_r9 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearHoveredRow(\u0275$index_58_r9));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(1, "div", 27);
    \u0275\u0275repeaterCreate(2, RoomBookingsInvertedTimelineComponent_For_24_For_3_Template, 1, 1, null, null, _forTrack0);
  }
  if (rf & 2) {
    const space_r12 = ctx.$implicit;
    const \u0275$index_58_r9 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", \u0275$index_58_r9 * ctx_r2.row_height + "rem")("height", ctx_r2.row_height + "rem");
    \u0275\u0275classProp("row-highlight", ctx_r2.hovered_row() === \u0275$index_58_r9);
    \u0275\u0275advance();
    \u0275\u0275styleProp("top", \u0275$index_58_r9 * ctx_r2.row_height + ctx_r2.row_height + "rem");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.events()[space_r12.id] || \u0275\u0275pureFunction0(8, _c13));
  }
}
function RoomBookingsInvertedTimelineComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 35);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r2.timeToOffset(ctx_r2.now) + "%");
  }
}
var RoomBookingsInvertedTimelineComponent = class _RoomBookingsInvertedTimelineComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(EventsStateService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._timeline_el = viewChild("timeline_el", ...ngDevMode ? [{ debugName: "_timeline_el" }] : (
      /* istanbul ignore next */
      []
    ));
    this._building = toSignal(this._org.active_building, {
      initialValue: this._org.building
    });
    this._filtered = toSignal(this._state.filtered, { initialValue: [] });
    this._did_auto_scroll = false;
    this.hovered_row = signal(-1, ...ngDevMode ? [{ debugName: "hovered_row" }] : (
      /* istanbul ignore next */
      []
    ));
    this.block_width = 7;
    this.row_height = 2.75;
    this.ui_options = toSignal(this._state.options, {
      initialValue: {}
    });
    this.spaces = toSignal(this._state.spaces, { initialValue: [] });
    this.date = toSignal(this._state.date, {
      initialValue: this._state.getDate()
    });
    this.is_today = computed(() => isSameDay(this.date(), Date.now()), ...ngDevMode ? [{ debugName: "is_today" }] : (
      /* istanbul ignore next */
      []
    ));
    this.show_time = computed(() => {
      this._building();
      const date = this.date();
      const today = isSameDay(date, Date.now());
      const offset = this.timezone ? getTimezoneDifferenceInHours(this.timezone) : 0;
      const start = addHours(setHours(startOfDay(Date.now()), this.block_start), -offset).valueOf();
      const end = addHours(setHours(startOfDay(Date.now()), this.block_end), -offset).valueOf();
      return today && Date.now() >= start && Date.now() <= end;
    }, ...ngDevMode ? [{ debugName: "show_time" }] : (
      /* istanbul ignore next */
      []
    ));
    this.events = computed(() => {
      const spaces = this.spaces();
      const events = this._filtered().filter(isActiveRoomTimelineEvent);
      const date = this.date();
      const event_map = {};
      const offset = this.timezone ? getTimezoneDifferenceInHours(this.timezone) : 0;
      const start = addHours(setHours(startOfDay(date), this.block_start), -offset).valueOf();
      const end = addHours(setHours(startOfDay(date), this.block_end), -offset).valueOf();
      for (const space of spaces) {
        event_map[space.id] = events.filter((event) => event.resources.find((item) => item.id === space.id || item.email === space.email) || event.system?.id === space.id || event.system?.email === space.email).filter((event) => event.date_end >= start && event.date <= end);
      }
      return event_map;
    }, ...ngDevMode ? [{ debugName: "events" }] : (
      /* istanbul ignore next */
      []
    ));
    this._hour_list = Array.from({ length: 24 }, (_, i) => i);
    this.hours = computed(() => this._hour_list.filter((hour) => hour >= this.block_start && hour < this.block_end), ...ngDevMode ? [{ debugName: "hours" }] : (
      /* istanbul ignore next */
      []
    ));
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
    const tooltip = `Start: ${event.all_day ? "All Day" : this._date_pipe.transform(event.date, this.time_format)}
Title:  ${event.title}
Host:  ${event.organiser?.name || event.host}`;
    return tooltip;
  }
  ngOnInit() {
    this.subscription("poll", this._state.startPolling());
    this.subscription("auto_scroll", combineLatest([this._state.date, this._state.spaces]).pipe(debounceTime(100), filter(([_, spaces]) => spaces.length > 0), first()).subscribe(([date]) => this._autoScrollToCurrentTime(date)));
  }
  ngAfterViewInit() {
    const date = this._state.getDate();
    requestAnimationFrame(() => this._autoScrollToCurrentTime(date));
  }
  clearHoveredRow(index) {
    if (this.hovered_row() === index)
      this.hovered_row.set(-1);
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
  viewEvent(event, space_id, scroll_to = false) {
    if (event.is_system_event)
      return;
    const ref = this._dialog.open(EventDetailsModalComponent, {
      data: {
        event,
        edit_fn: (e) => this.edit(e),
        remove_fn: (e) => this.remove(e, space_id)
      }
    });
    ref.componentInstance.hide_edit.set(!this._settings.get("app.events.allow_edit"));
    this.subscription("actions", ref.componentInstance.action.subscribe(async (action) => {
      if (!action.includes("breakdown"))
        return;
      const ref2 = this._dialog.open(SetupBreakdownModalComponent, {
        data: event
      });
      const data = await ref2.afterClosed().toPromise();
      if (data)
        this._state.replace(data);
    }));
  }
  async remove(item, space_id) {
    const time = `${format(item.date, "dd MMM yyyy " + this.time_format)}`;
    const resource_name = item.space?.display_name;
    const content = `Cancel the booking for ${resource_name} at ${time}`;
    const resp = await openConfirmModal({ title: `Cancel booking`, content, icon: { content: "delete" } }, this._dialog);
    if (resp.reason !== "done")
      return;
    resp.loading("Requesting booking cancellation...");
    this._state.remove(item);
    await declineEvent(item.id, {
      calendar: item.calendar || item.mailbox || item.host,
      system_id: space_id
    }).toPromise().catch((e) => {
      this._state.restore(item);
      notifyError(`Unable to cancel booking. ${e}`);
      resp.close();
      throw e;
    });
    notifySuccess("Successfully cancelled booking.");
    this._dialog.closeAll();
  }
  _autoScrollToCurrentTime(date) {
    if (this._did_auto_scroll || !isSameDay(date, Date.now()))
      return;
    const timeline_el = this._timeline_el()?.nativeElement;
    if (!timeline_el)
      return;
    const percent = this.timeToOffset(this.now) / 100;
    const target = timeline_el.scrollWidth * percent - timeline_el.clientWidth / 2;
    timeline_el.scrollLeft = Math.max(0, target);
    this._did_auto_scroll = true;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RoomBookingsInvertedTimelineComponent_BaseFactory;
      return function RoomBookingsInvertedTimelineComponent_Factory(__ngFactoryType__) {
        return (\u0275RoomBookingsInvertedTimelineComponent_BaseFactory || (\u0275RoomBookingsInvertedTimelineComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RoomBookingsInvertedTimelineComponent)))(__ngFactoryType__ || _RoomBookingsInvertedTimelineComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomBookingsInvertedTimelineComponent, selectors: [["room-bookings-inverted-timeline"]], viewQuery: function RoomBookingsInvertedTimelineComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._timeline_el, _c04, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, features: [\u0275\u0275InheritDefinitionFeature], decls: 26, vars: 19, consts: [["timeline_el", ""], [1, "bg-info", "text-info-content", "mx-2", "mt-2", "w-[calc(100%-1rem)]", "rounded-lg", "p-2", "text-center", "text-xs"], [1, "border-base-200", "relative", "z-20", "flex", "items-center", "justify-center", "space-x-2", "border-b", "p-2"], [3, "dateChange", "date", "is_new", "hide_today"], [1, "text-info", "absolute", "top-1/2", "left-4", "-translate-y-1/2", "text-sm"], [1, "absolute", "top-1/2", "right-8", "-translate-y-1/2"], [3, "selected"], ["timeline", "", 1, "z-0", "grid", "h-1/2", "w-full", "flex-1", "overflow-auto"], ["timezone", "", 1, "bg-base-100", "sticky", "top-0", "left-0", "z-30", "flex", "h-10", "items-center", "justify-center"], [1, "text-xs", "opacity-30"], [1, "bg-base-300", "absolute", "right-0", "bottom-0", "h-2", "w-px"], [1, "bg-base-300", "absolute", "right-0", "bottom-0", "h-px", "w-2"], ["time-headers", "", 1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-20", "flex", "h-10", "items-center", "border-b"], [1, "relative", "flex", "h-full", "min-w-0", "items-center", "justify-center", 3, "width"], ["room-headers", "", 1, "border-base-300", "bg-base-100", "sticky", "left-0", "z-20", "overflow-visible", "border-r"], [1, "border-base-200", "flex", "w-full", "items-center", "border-b", "px-2", "transition-colors", "duration-150", 3, "height", "row-highlight"], ["timeline-grid", "", 1, "relative", "z-0", "overflow-hidden"], [1, "bg-base-200", "absolute", "top-0", "h-full", "w-px", 3, "left"], [1, "bg-secondary", "absolute", "inset-y-0", "w-0.5", 3, "left"], [1, "relative", "flex", "h-full", "min-w-0", "items-center", "justify-center"], [1, "text-xs", "opacity-60"], [1, "bg-base-300", "absolute", "top-0", "left-0", "h-2", "w-px"], [1, "border-base-200", "flex", "w-full", "items-center", "border-b", "px-2", "transition-colors", "duration-150", 3, "mouseenter", "mouseleave"], [1, "truncate", "pr-2", "text-xs"], [1, "bg-base-200", "text-base-content", "ml-auto", "rounded-full", "px-2", "py-0.5", "text-[10px]", "font-medium"], [1, "bg-base-200", "absolute", "top-0", "h-full", "w-px"], [1, "absolute", "left-0", "w-full", "rounded-sm", "transition-colors", "duration-150", 3, "mouseenter", "mouseleave"], [1, "border-base-200", "absolute", "left-0", "w-full", "border-b"], ["event", "", "matRipple", "", 1, "absolute", "z-10", "text-left", "transition-all", "duration-150", "hover:z-20", "hover:scale-[1.01]", 3, "left", "top", "width", "height", "matTooltip"], ["event", "", "matRipple", "", 1, "absolute", "z-10", "text-left", "transition-all", "duration-150", "hover:z-20", "hover:scale-[1.01]", 3, "click", "mouseenter", "mouseleave", "matTooltip"], [1, "border-base-300", "bg-base-100", "hover:bg-base-200", "relative", "h-full", "w-full", "overflow-hidden", "rounded-md", "border", "px-2", "py-0.5", "text-xs", "shadow-md", "ring-1", "ring-black/5", "transition-all", "duration-150", "hover:shadow-lg"], [1, "bg-secondary", "absolute", "-inset-px", "opacity-30"], [1, "absolute", "inset-y-0", "left-0", "w-1"], [1, "truncate", "font-medium"], [1, "truncate"], [1, "bg-secondary", "absolute", "inset-y-0", "w-0.5"]], template: function RoomBookingsInvertedTimelineComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, RoomBookingsInvertedTimelineComponent_Conditional_0_Template, 3, 3, "div", 1);
        \u0275\u0275elementStart(1, "div", 2)(2, "date-options", 3);
        \u0275\u0275listener("dateChange", function RoomBookingsInvertedTimelineComponent_Template_date_options_dateChange_2_listener($event) {
          return ctx.setDate($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(3, RoomBookingsInvertedTimelineComponent_Conditional_3_Template, 3, 3, "div", 4);
        \u0275\u0275elementStart(4, "div", 5)(5, "room-booking-search", 6);
        \u0275\u0275listener("selected", function RoomBookingsInvertedTimelineComponent_Template_room_booking_search_selected_5_listener($event) {
          return ctx.viewEvent($event, $event.system == null ? null : $event.system.id, true);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 7, 0)(8, "div", 8)(9, "div", 9);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "div", 10)(13, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 12);
        \u0275\u0275repeaterCreate(15, RoomBookingsInvertedTimelineComponent_For_16_Template, 4, 4, "div", 13, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 14);
        \u0275\u0275repeaterCreate(18, RoomBookingsInvertedTimelineComponent_For_19_Template, 5, 7, "div", 15, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 16);
        \u0275\u0275repeaterCreate(21, RoomBookingsInvertedTimelineComponent_For_22_Template, 1, 2, "div", 17, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275repeaterCreate(23, RoomBookingsInvertedTimelineComponent_For_24_Template, 4, 9, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275conditionalCreate(25, RoomBookingsInvertedTimelineComponent_Conditional_25_Template, 1, 2, "div", 18);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.timezone && ctx.tz ? 0 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("date", ctx.date())("is_new", true)("hide_today", true);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_today() ? 3 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(11, 15, ctx.date(), "zzzz", ctx.tz), " ");
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("width", ctx.block_range * ctx.block_width + "rem");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.hours());
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("height", ctx.spaces().length * ctx.row_height + "rem");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.spaces());
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("width", ctx.block_range * ctx.block_width + "rem")("height", ctx.spaces().length * ctx.row_height + "rem");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.hours());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.spaces());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.show_time() ? 25 : -1);
      }
    }, dependencies: [
      CommonModule,
      DateOptionsComponent,
      RoomBookingSearchComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n[timeline][_ngcontent-%COMP%] {\n  grid-template-columns: 13rem auto;\n  grid-template-rows: 2.5rem auto;\n}\n.row-highlight[_ngcontent-%COMP%] {\n  background-color: var(--info-light);\n}\n/*# sourceMappingURL=room-timeline-inverted.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomBookingsInvertedTimelineComponent, [{
    type: Component,
    args: [{ selector: "room-bookings-inverted-timeline", template: `
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
                [date]="date()"
                (dateChange)="setDate($event)"
                [is_new]="true"
                [hide_today]="true"
            ></date-options>
            @if (is_today()) {
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
            #timeline_el
            timeline
            class="z-0 grid h-1/2 w-full flex-1 overflow-auto"
        >
            <div
                timezone
                class="bg-base-100 sticky top-0 left-0 z-30 flex h-10 items-center justify-center"
            >
                <div class="text-xs opacity-30">
                    {{ date() | date: 'zzzz' : tz }}
                </div>
                <div
                    class="bg-base-300 absolute right-0 bottom-0 h-2 w-px"
                ></div>
                <div
                    class="bg-base-300 absolute right-0 bottom-0 h-px w-2"
                ></div>
            </div>
            <div
                time-headers
                class="border-base-300 bg-base-100 sticky top-0 z-20 flex h-10 items-center border-b"
                [style.width]="block_range * block_width + 'rem'"
            >
                @for (hour of hours(); track hour; let i = $index) {
                    <div
                        class="relative flex h-full min-w-0 items-center justify-center"
                        [style.width]="block_width + 'rem'"
                    >
                        <div class="text-xs opacity-60">
                            {{ formatHour(hour) }}
                        </div>
                        @if (i !== 0) {
                            <div
                                class="bg-base-300 absolute top-0 left-0 h-2 w-px"
                            ></div>
                        }
                    </div>
                }
            </div>
            <div
                room-headers
                class="border-base-300 bg-base-100 sticky left-0 z-20 overflow-visible border-r"
                [style.height]="spaces().length * row_height + 'rem'"
            >
                @for (space of spaces(); track space; let i = $index) {
                    <div
                        class="border-base-200 flex w-full items-center border-b px-2 transition-colors duration-150"
                        [style.height]="row_height + 'rem'"
                        [class.row-highlight]="hovered_row() === i"
                        (mouseenter)="hovered_row.set(i)"
                        (mouseleave)="clearHoveredRow(i)"
                    >
                        <div class="truncate pr-2 text-xs">
                            {{ space.display_name || space.name }}
                        </div>
                        <div
                            class="bg-base-200 text-base-content ml-auto rounded-full px-2 py-0.5 text-[10px] font-medium"
                        >
                            {{ (events()[space.id] || []).length }}
                        </div>
                    </div>
                }
            </div>
            <div
                timeline-grid
                class="relative z-0 overflow-hidden"
                [style.width]="block_range * block_width + 'rem'"
                [style.height]="spaces().length * row_height + 'rem'"
            >
                @for (hour of hours(); track hour; let i = $index) {
                    <div
                        class="bg-base-200 absolute top-0 h-full w-px"
                        [style.left]="i * block_width + 'rem'"
                    ></div>
                }
                @for (space of spaces(); track space; let i = $index) {
                    <div
                        class="absolute left-0 w-full rounded-sm transition-colors duration-150"
                        [style.top]="i * row_height + 'rem'"
                        [style.height]="row_height + 'rem'"
                        [class.row-highlight]="hovered_row() === i"
                        (mouseenter)="hovered_row.set(i)"
                        (mouseleave)="clearHoveredRow(i)"
                    ></div>
                    <div
                        class="border-base-200 absolute left-0 w-full border-b"
                        [style.top]="i * row_height + row_height + 'rem'"
                    ></div>
                    @for (event of events()[space.id] || []; track event.id) {
                        @if (
                            !event.is_system_event || ui_options().show_overflow
                        ) {
                            <button
                                event
                                matRipple
                                class="absolute z-10 text-left transition-all duration-150 hover:z-20 hover:scale-[1.01]"
                                [style.left]="timeToOffset(event.date) + '%'"
                                [style.top]="i * row_height + 0.15 + 'rem'"
                                [style.width]="
                                    endToOffset(event.duration) + '%'
                                "
                                [style.height]="row_height - 0.3 + 'rem'"
                                (click)="viewEvent(event, space.id)"
                                [matTooltip]="eventTooltip(event)"
                                (mouseenter)="hovered_row.set(i)"
                                (mouseleave)="clearHoveredRow(i)"
                            >
                                <div
                                    class="border-base-300 bg-base-100 hover:bg-base-200 relative h-full w-full overflow-hidden rounded-md border px-2 py-0.5 text-xs shadow-md ring-1 ring-black/5 transition-all duration-150 hover:shadow-lg"
                                    [class.opacity-60]="event.state === 'done'"
                                    [class.rounded-none!]="
                                        event.is_system_event
                                    "
                                    [class.border-secondary!]="
                                        event.is_system_event
                                    "
                                >
                                    @if (event.is_system_event) {
                                        <div
                                            class="bg-secondary absolute -inset-px opacity-30"
                                        ></div>
                                    }
                                    @if (!event.is_system_event) {
                                        <div
                                            class="absolute inset-y-0 left-0 w-1"
                                            [class.bg-secondary]="
                                                event.status !== 'cancelled'
                                            "
                                            [class.bg-error]="
                                                event.status === 'cancelled'
                                            "
                                        ></div>
                                        <p
                                            class="truncate font-medium"
                                            [class.opacity-60]="
                                                event.status === 'cancelled'
                                            "
                                        >
                                            {{
                                                event.all_day
                                                    ? 'All Day'
                                                    : (event.date
                                                      | date: time_format : tz)
                                            }}
                                            &ndash;
                                            {{ event.title }}
                                        </p>
                                        <p
                                            class="truncate"
                                            [class.opacity-60]="
                                                event.status === 'cancelled'
                                            "
                                        >
                                            {{
                                                event.organiser?.name ||
                                                    event.host
                                            }}
                                        </p>
                                    }
                                </div>
                            </button>
                        }
                    }
                }
                @if (show_time()) {
                    <div
                        class="bg-secondary absolute inset-y-0 w-0.5"
                        [style.left]="timeToOffset(now) + '%'"
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
    ], styles: ["/* angular:styles/component:css;a806aa990939d18c095e434c06c2a534659130703ab7ec1f9e12b185eb92024c;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/day-view/room-timeline-inverted.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n[timeline] {\n  grid-template-columns: 13rem auto;\n  grid-template-rows: 2.5rem auto;\n}\n.row-highlight {\n  background-color: var(--info-light);\n}\n/*# sourceMappingURL=room-timeline-inverted.component.css.map */\n"] }]
  }], null, { _timeline_el: [{ type: ViewChild, args: ["timeline_el", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomBookingsInvertedTimelineComponent, { className: "RoomBookingsInvertedTimelineComponent", filePath: "apps/concierge/src/app/day-view/room-timeline-inverted.component.ts", lineNumber: 281 });
})();

// apps/concierge/src/app/day-view/room-timeline.component.ts
var _c05 = () => [];
var _forTrack02 = ($index, $item) => $item.id;
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
function RoomBookingsTimelineComponent_Conditional_3_Template(rf, ctx) {
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
function RoomBookingsTimelineComponent_For_15_Template(rf, ctx) {
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
function RoomBookingsTimelineComponent_For_18_Conditional_2_Template(rf, ctx) {
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
function RoomBookingsTimelineComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275conditionalCreate(2, RoomBookingsTimelineComponent_For_18_Conditional_2_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_43_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r2.block_height + "rem");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275$index_43_r4 !== 0 ? 2 : -1);
  }
}
function RoomBookingsTimelineComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 25);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", "calc(" + ctx_r2.timeToOffset(ctx_r2.now) + "% + 1px)");
  }
}
function RoomBookingsTimelineComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 26);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r2.block_height + "rem");
  }
}
function RoomBookingsTimelineComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 27);
  }
  if (rf & 2) {
    const \u0275$index_60_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", "calc(" + \u0275$index_60_r5 * ctx_r2.block_width + "rem - 1px)");
  }
}
function RoomBookingsTimelineComponent_For_26_For_1_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 31);
  }
}
function RoomBookingsTimelineComponent_For_26_For_1_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 32);
    \u0275\u0275elementStart(1, "p", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-secondary", event_r7.status !== "cancelled")("bg-error", event_r7.status === "cancelled");
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-60", event_r7.status === "cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", event_r7.all_day ? "All Day" : \u0275\u0275pipeBind3(3, 11, event_r7.date, ctx_r2.time_format, ctx_r2.tz), " \u2013 ", event_r7.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("opacity-60", event_r7.status === "cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (event_r7.organiser == null ? null : event_r7.organiser.name) || event_r7.host, " ");
  }
}
function RoomBookingsTimelineComponent_For_26_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function RoomBookingsTimelineComponent_For_26_For_1_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const event_r7 = \u0275\u0275nextContext().$implicit;
      const space_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewEvent(event_r7, space_r8.id));
    });
    \u0275\u0275elementStart(1, "div", 30);
    \u0275\u0275conditionalCreate(2, RoomBookingsTimelineComponent_For_26_For_1_Conditional_0_Conditional_2_Template, 1, 0, "div", 31);
    \u0275\u0275conditionalCreate(3, RoomBookingsTimelineComponent_For_26_For_1_Conditional_0_Conditional_3_Template, 6, 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext().$implicit;
    const \u0275$index_63_r9 = \u0275\u0275nextContext().$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", \u0275$index_63_r9 * ctx_r2.block_width + 0.25 + "rem")("top", ctx_r2.timeToOffset(event_r7.date) + "%")("height", ctx_r2.endToOffset(event_r7.duration) + "%");
    \u0275\u0275property("matTooltip", ctx_r2.eventTooltip(event_r7));
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-60", event_r7.state === "done")("rounded-none!", event_r7.is_system_event)("border-secondary!", event_r7.is_system_event);
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r7.is_system_event ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!event_r7.is_system_event ? 3 : -1);
  }
}
function RoomBookingsTimelineComponent_For_26_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomBookingsTimelineComponent_For_26_For_1_Conditional_0_Template, 4, 15, "button", 28);
  }
  if (rf & 2) {
    const event_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!event_r7.is_system_event || ctx_r2.ui_options().show_overflow ? 0 : -1);
  }
}
function RoomBookingsTimelineComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, RoomBookingsTimelineComponent_For_26_For_1_Template, 1, 1, null, null, _forTrack02);
  }
  if (rf & 2) {
    const space_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.events()[space_r8.id] || \u0275\u0275pureFunction0(0, _c05));
  }
}
function RoomBookingsTimelineComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 34);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", ctx_r2.timeToOffset(ctx_r2.now) + "%");
  }
}
var RoomBookingsTimelineComponent = class _RoomBookingsTimelineComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(EventsStateService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._building = toSignal(this._org.active_building, {
      initialValue: this._org.building
    });
    this._filtered = toSignal(this._state.filtered, { initialValue: [] });
    this.block_width = 14;
    this.ui_options = toSignal(this._state.options, {
      initialValue: {}
    });
    this.spaces = toSignal(this._state.spaces, { initialValue: [] });
    this.date = toSignal(this._state.date, {
      initialValue: this._state.getDate()
    });
    this.is_today = computed(() => isSameDay(this.date(), Date.now()), ...ngDevMode ? [{ debugName: "is_today" }] : (
      /* istanbul ignore next */
      []
    ));
    this.show_time = computed(() => {
      this._building();
      const date = this.date();
      const today = isSameDay(date, Date.now());
      const offset = this.timezone ? getTimezoneDifferenceInHours(this.timezone) : 0;
      const start = addHours(setHours(startOfDay(Date.now()), this.block_start), -offset).valueOf();
      const end = addHours(setHours(startOfDay(Date.now()), this.block_end), -offset).valueOf();
      return today && Date.now() >= start && Date.now() <= end;
    }, ...ngDevMode ? [{ debugName: "show_time" }] : (
      /* istanbul ignore next */
      []
    ));
    this.events = computed(() => {
      const spaces = this.spaces();
      const events = this._filtered().filter(isActiveRoomTimelineEvent);
      const date = this.date();
      const event_map = {};
      const offset = this.timezone ? getTimezoneDifferenceInHours(this.timezone) : 0;
      const start = addHours(setHours(startOfDay(date), this.block_start), -offset).valueOf();
      const end = addHours(setHours(startOfDay(date), this.block_end), -offset).valueOf();
      for (const space of spaces) {
        event_map[space.id] = events.filter((event) => event.resources.find((item) => item.id === space.id || item.email === space.email) || event.system?.id === space.id || event.system?.email === space.email).filter((event) => event.date_end >= start && event.date <= end);
      }
      return event_map;
    }, ...ngDevMode ? [{ debugName: "events" }] : (
      /* istanbul ignore next */
      []
    ));
    this._hour_list = Array.from({ length: 24 }, (_, i) => i);
    this.hours = computed(() => this._hour_list.filter((hour) => hour >= this.block_start && hour < this.block_end), ...ngDevMode ? [{ debugName: "hours" }] : (
      /* istanbul ignore next */
      []
    ));
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
  viewEvent(event, space_id, scroll_to = false) {
    if (event.is_system_event)
      return;
    const ref = this._dialog.open(EventDetailsModalComponent, {
      data: {
        event,
        edit_fn: (e) => this.edit(e),
        remove_fn: (e) => this.remove(e, space_id)
      }
    });
    ref.componentInstance.hide_edit.set(!this._settings.get("app.events.allow_edit"));
    this.subscription("actions", ref.componentInstance.action.subscribe(async (action) => {
      if (!action.includes("breakdown"))
        return;
      const ref2 = this._dialog.open(SetupBreakdownModalComponent, {
        data: event
      });
      const data = await ref2.afterClosed().toPromise();
      if (data)
        this._state.replace(data);
    }));
  }
  async remove(item, space_id) {
    const time = `${format(item.date, "dd MMM yyyy " + this.time_format)}`;
    const resource_name = item.space?.display_name;
    const content = `Cancel the booking for ${resource_name} at ${time}`;
    const resp = await openConfirmModal({ title: `Cancel booking`, content, icon: { content: "delete" } }, this._dialog);
    if (resp.reason !== "done")
      return;
    if (item.status === "declined") {
      return notifyInfo("Booking has already been cancelled");
    }
    resp.loading("Requesting booking cancellation...");
    this._state.remove(item);
    await declineEvent(item.id, {
      calendar: item.calendar || item.mailbox || item.host,
      system_id: space_id
    }).toPromise().catch((e) => {
      this._state.restore(item);
      notifyError(`Unable to cancel booking. ${e}`);
      resp.close();
      throw e;
    });
    notifySuccess("Successfully cancelled booking.");
    this._dialog.closeAll();
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RoomBookingsTimelineComponent_BaseFactory;
      return function RoomBookingsTimelineComponent_Factory(__ngFactoryType__) {
        return (\u0275RoomBookingsTimelineComponent_BaseFactory || (\u0275RoomBookingsTimelineComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RoomBookingsTimelineComponent)))(__ngFactoryType__ || _RoomBookingsTimelineComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomBookingsTimelineComponent, selectors: [["room-bookings-timeline"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 28, vars: 16, consts: [[1, "bg-info", "text-info-content", "mx-2", "mt-2", "w-[calc(100%-1rem)]", "rounded-lg", "p-2", "text-center", "text-xs"], [1, "border-base-200", "relative", "z-20", "flex", "items-center", "justify-center", "space-x-2", "border-b", "p-2"], [3, "dateChange", "date", "is_new", "hide_today"], [1, "text-info", "absolute", "top-1/2", "left-4", "-translate-y-1/2", "text-sm"], [1, "absolute", "top-1/2", "right-8", "-translate-y-1/2"], [3, "selected"], ["timeline", "", 1, "z-0", "grid", "h-1/2", "w-full", "flex-1", "overflow-auto"], ["timezone", "", 1, "bg-base-100", "sticky", "top-0", "left-0", "z-30", "flex", "items-center", "justify-center"], [1, "text-xs", "opacity-30"], [1, "bg-base-300", "absolute", "right-0", "bottom-0", "h-2", "w-px"], [1, "bg-base-300", "absolute", "right-0", "bottom-0", "h-px", "w-2"], ["space-headers", "", 1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-20", "flex", "items-center", "border-b"], [1, "relative", "flex", "h-full", "w-56", "items-center", "justify-center", "px-4"], ["hour-blocks", "", 1, "border-base-300", "bg-base-100", "sticky", "left-0", "z-10", "overflow-visible", "border-r"], [1, "relative", "w-full", 3, "height"], [1, "bg-secondary", "absolute", "right-0", "h-2", "w-2", "translate-x-1/2", "-translate-y-1/2", "rounded-full", 3, "top"], ["space-blocks", "", 1, "relative", "overflow-hidden"], [1, "border-base-200", "relative", "w-full", "border-b", 3, "height"], [1, "bg-base-200", "absolute", "top-0", "h-full", "w-px", 3, "left"], [1, "bg-secondary", "absolute", "inset-x-0", "h-[2px]", 3, "top"], [1, "truncate", "px-4"], [1, "bg-base-300", "absolute", "bottom-0", "-left-px", "h-2", "w-px"], [1, "relative", "w-full"], [1, "bg-base-300", "absolute", "-top-px", "right-0", "h-px", "w-2"], [1, "absolute", "-top-px", "right-3", "-translate-y-1/2", "text-xs", "opacity-60"], [1, "bg-secondary", "absolute", "right-0", "h-2", "w-2", "translate-x-1/2", "-translate-y-1/2", "rounded-full"], [1, "border-base-200", "relative", "w-full", "border-b"], [1, "bg-base-200", "absolute", "top-0", "h-full", "w-px"], ["event", "", "matRipple", "", 1, "absolute", "w-52", "text-left", "hover:opacity-90", 3, "left", "top", "height", "matTooltip"], ["event", "", "matRipple", "", 1, "absolute", "w-52", "text-left", "hover:opacity-90", 3, "click", "matTooltip"], [1, "border-base-200", "bg-base-100", "hover:bg-base-200", "relative", "h-full", "w-full", "overflow-hidden", "rounded-lg", "border", "px-3", "py-1", "text-xs", "shadow-sm"], [1, "bg-secondary", "absolute", "-inset-px", "opacity-30"], [1, "absolute", "inset-y-0", "left-0", "w-1"], [1, "truncate"], [1, "bg-secondary", "absolute", "inset-x-0", "h-[2px]"]], template: function RoomBookingsTimelineComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, RoomBookingsTimelineComponent_Conditional_0_Template, 3, 3, "div", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "date-options", 2);
        \u0275\u0275listener("dateChange", function RoomBookingsTimelineComponent_Template_date_options_dateChange_2_listener($event) {
          return ctx.setDate($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(3, RoomBookingsTimelineComponent_Conditional_3_Template, 3, 3, "div", 3);
        \u0275\u0275elementStart(4, "div", 4)(5, "room-booking-search", 5);
        \u0275\u0275listener("selected", function RoomBookingsTimelineComponent_Template_room_booking_search_selected_5_listener($event) {
          return ctx.viewEvent($event, $event.system == null ? null : $event.system.id, true);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "div", 9)(12, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 11);
        \u0275\u0275repeaterCreate(14, RoomBookingsTimelineComponent_For_15_Template, 4, 1, "div", 12, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 13);
        \u0275\u0275repeaterCreate(17, RoomBookingsTimelineComponent_For_18_Template, 3, 3, "div", 14, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275conditionalCreate(19, RoomBookingsTimelineComponent_Conditional_19_Template, 1, 2, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 16);
        \u0275\u0275repeaterCreate(21, RoomBookingsTimelineComponent_For_22_Template, 1, 2, "div", 17, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275repeaterCreate(23, RoomBookingsTimelineComponent_For_24_Template, 1, 2, "div", 18, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275repeaterCreate(25, RoomBookingsTimelineComponent_For_26_Template, 2, 1, null, null, _forTrack02);
        \u0275\u0275conditionalCreate(27, RoomBookingsTimelineComponent_Conditional_27_Template, 1, 2, "div", 19);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.timezone && ctx.tz ? 0 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("date", ctx.date())("is_new", true)("hide_today", true);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_today() ? 3 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(10, 12, ctx.date(), "zzzz", ctx.tz), " ");
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("width", ctx.spaces().length * ctx.block_width + "rem");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.spaces());
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("height", ctx.block_range * ctx.block_height + "rem");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.hours());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.show_time() && ctx.timeToOffset(ctx.now) < 100 ? 19 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.hours());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.spaces());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.spaces());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.show_time() ? 27 : -1);
      }
    }, dependencies: [
      CommonModule,
      DateOptionsComponent,
      RoomBookingSearchComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n[timeline][_ngcontent-%COMP%] {\n  grid-template-columns: 4rem auto;\n  grid-template-rows: 3.5rem auto;\n}\n/*# sourceMappingURL=room-timeline.component.css.map */"] });
  }
};
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
                [date]="date()"
                (dateChange)="setDate($event)"
                [is_new]="true"
                [hide_today]="true"
            ></date-options>
            @if (is_today()) {
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
                <div class="text-xs opacity-30">
                    {{ date() | date: 'zzzz' : tz }}
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
                [style.width]="spaces().length * block_width + 'rem'"
            >
                @for (space of spaces(); track space) {
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
                @for (hour of hours(); track hour; let i = $index) {
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
                @if (show_time() && timeToOffset(now) < 100) {
                    <div
                        class="bg-secondary absolute right-0 h-2 w-2 translate-x-1/2 -translate-y-1/2 rounded-full"
                        [style.top]="'calc(' + timeToOffset(now) + '% + 1px)'"
                    ></div>
                }
            </div>
            <div space-blocks class="relative overflow-hidden">
                @for (hour of hours(); track hour; let i = $index) {
                    <div
                        class="border-base-200 relative w-full border-b"
                        [style.height]="block_height + 'rem'"
                    ></div>
                }
                @for (space of spaces(); track space; let i = $index) {
                    <div
                        class="bg-base-200 absolute top-0 h-full w-px"
                        [style.left]="'calc(' + i * block_width + 'rem - 1px)'"
                    ></div>
                }

                @for (space of spaces(); track space.id; let i = $index) {
                    @for (event of events()[space.id] || []; track event.id) {
                        @if (
                            !event.is_system_event || ui_options().show_overflow
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
                                    class="border-base-200 bg-base-100 hover:bg-base-200 relative h-full w-full overflow-hidden rounded-lg border px-3 py-1 text-xs shadow-sm"
                                    [class.opacity-60]="event.state === 'done'"
                                    [class.rounded-none!]="
                                        event.is_system_event
                                    "
                                    [class.border-secondary!]="
                                        event.is_system_event
                                    "
                                >
                                    @if (event.is_system_event) {
                                        <div
                                            class="bg-secondary absolute -inset-px opacity-30"
                                        ></div>
                                    }
                                    @if (!event.is_system_event) {
                                        <div
                                            class="absolute inset-y-0 left-0 w-1"
                                            [class.bg-secondary]="
                                                event.status !== 'cancelled'
                                            "
                                            [class.bg-error]="
                                                event.status === 'cancelled'
                                            "
                                        ></div>
                                        <p
                                            class="truncate"
                                            [class.opacity-60]="
                                                event.status === 'cancelled'
                                            "
                                        >
                                            {{
                                                event.all_day
                                                    ? 'All Day'
                                                    : (event.date
                                                      | date: time_format : tz)
                                            }}
                                            &ndash;
                                            {{ event.title }}
                                        </p>
                                        <p
                                            class="truncate"
                                            [class.opacity-60]="
                                                event.status === 'cancelled'
                                            "
                                        >
                                            {{
                                                event.organiser?.name ||
                                                    event.host
                                            }}
                                        </p>
                                    }
                                </div>
                            </button>
                        }
                    }
                }
                @if (show_time()) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomBookingsTimelineComponent, { className: "RoomBookingsTimelineComponent", filePath: "apps/concierge/src/app/day-view/room-timeline.component.ts", lineNumber: 252 });
})();

// apps/concierge/src/app/day-view/room-week-timeline.component.ts
var _c06 = () => [];
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
function RoomWeekBookingsTimelineComponent_Conditional_3_Template(rf, ctx) {
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
function RoomWeekBookingsTimelineComponent_For_15_Conditional_4_Template(rf, ctx) {
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
function RoomWeekBookingsTimelineComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, RoomWeekBookingsTimelineComponent_For_15_Conditional_4_Template, 3, 3, "div", 17);
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
function RoomWeekBookingsTimelineComponent_For_19_For_2_Conditional_9_Template(rf, ctx) {
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
function RoomWeekBookingsTimelineComponent_For_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function RoomWeekBookingsTimelineComponent_For_19_For_2_Template_button_click_0_listener() {
      const event_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewEvent(event_r4, event_r4.system == null ? null : event_r4.system.id));
    });
    \u0275\u0275element(1, "div", 21);
    \u0275\u0275elementStart(2, "div", 22)(3, "div", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275pipe(8, "date");
    \u0275\u0275conditionalCreate(9, RoomWeekBookingsTimelineComponent_For_19_For_2_Conditional_9_Template, 3, 5, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 25);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 25);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "user");
    \u0275\u0275pipe(15, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_27_0;
    const event_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.typeColor(event_r4.type));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("line-through", event_r4.state === "done");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r4.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(7, 10, event_r4.date, ctx_r1.time_format, ctx_r1.tz), " \u2013 ", \u0275\u0275pipeBind3(8, 14, event_r4.date_end, ctx_r1.time_format, ctx_r1.tz), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.tz ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", event_r4.system == null ? null : event_r4.system.display_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_27_0 = \u0275\u0275pipeBind1(15, 20, \u0275\u0275pipeBind1(14, 18, event_r4.host))) == null ? null : tmp_27_0.name) || event_r4.host, " ");
  }
}
function RoomWeekBookingsTimelineComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, RoomWeekBookingsTimelineComponent_For_19_For_2_Template, 16, 22, "button", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.events()[date_r5] || \u0275\u0275pureFunction0(0, _c06));
  }
}
var RoomWeekBookingsTimelineComponent = class _RoomWeekBookingsTimelineComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(EventsStateService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._building = toSignal(this._org.active_building, {
      initialValue: this._org.building
    });
    this._filtered = toSignal(this._state.filtered, { initialValue: [] });
    this._zones = toSignal(this._state.zones, { initialValue: [] });
    this.hours = Array.from({ length: 24 }, (_, i) => i);
    this.ui_options = toSignal(this._state.options, {
      initialValue: {}
    });
    this.date = toSignal(this._state.date, {
      initialValue: this._state.getDate()
    });
    this.remove = this._state.removeBooking;
    this.types = signal([
      { id: "internal", name: "Internal", color: "#D81B60" },
      { id: "external", name: "External", color: "#1E88E5" },
      { id: "cancelled", name: "Cancelled", color: "#eeeeee" }
    ], ...ngDevMode ? [{ debugName: "types" }] : (
      /* istanbul ignore next */
      []
    ));
    this.days = computed(() => {
      this._building();
      const date = this.date();
      return new Array(7).fill(0).map((_, idx) => addDays(setHours(startOfWeek(date, { weekStartsOn: this._week_start }), 12 - Math.floor(this.timezone_offset / 60)), idx).valueOf());
    }, ...ngDevMode ? [{ debugName: "days" }] : (
      /* istanbul ignore next */
      []
    ));
    this.this_week = computed(() => isSameWeek(this.date(), Date.now(), {
      weekStartsOn: this._week_start
    }), ...ngDevMode ? [{ debugName: "this_week" }] : (
      /* istanbul ignore next */
      []
    ));
    this._data_pipe = new DatePipe("en");
    this.events = computed(() => {
      const day_list = this.days();
      let events = this._filtered().filter(isActiveRoomTimelineEvent);
      const zones = this._zones();
      if (zones.length) {
        events = events.filter((event) => event.system?.zones.find((zone) => zones.includes(zone)));
      }
      const event_map = {};
      for (const date of day_list) {
        const date_value = this._data_pipe.transform(date, "yyyy-MM-dd", this.tz);
        event_map[date] = events.filter((event) => {
          const event_date_value = this._data_pipe.transform(event.date, "yyyy-MM-dd", this.tz);
          return date_value === event_date_value && !event.is_system_event;
        }).sort((a, b) => a.date - b.date);
      }
      return event_map;
    }, ...ngDevMode ? [{ debugName: "events" }] : (
      /* istanbul ignore next */
      []
    ));
    this.event_max_count = computed(() => {
      const events = this.events();
      let length = 0;
      for (const date in events) {
        if (events[date].length > length)
          length = events[date].length;
      }
      return length;
    }, ...ngDevMode ? [{ debugName: "event_max_count" }] : (
      /* istanbul ignore next */
      []
    ));
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this.edit = (e) => this._state.newBooking(e);
    this.setDate = (d) => this._state.setDate(d);
  }
  get _week_start() {
    return this._settings.get("app.week_start");
  }
  get week_start() {
    return this._week_start;
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
    this.types.set([
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
    ]);
  }
  typeColor(type) {
    return this.types().find((_) => _.id === type)?.color || "#EEE";
  }
  viewEvent(event, space_id, scroll_to = false) {
    if (event.is_system_event)
      return;
    const ref = this._dialog.open(EventDetailsModalComponent, {
      data: {
        event,
        edit_fn: (e) => this.edit(e),
        remove_fn: (e) => this.remove(e)
      }
    });
    ref.componentInstance.hide_edit.set(!this._settings.get("app.events.allow_edit"));
    this.subscription("actions", ref.componentInstance.action.subscribe((action) => {
      if (!action.includes("breakdown"))
        return;
      const ref2 = this._dialog.open(SetupBreakdownModalComponent, {
        data: event
      });
      lastValueFrom(ref2.afterClosed()).then((data) => {
        if (data)
          this._state.replace(data);
      });
    }));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RoomWeekBookingsTimelineComponent_BaseFactory;
      return function RoomWeekBookingsTimelineComponent_Factory(__ngFactoryType__) {
        return (\u0275RoomWeekBookingsTimelineComponent_BaseFactory || (\u0275RoomWeekBookingsTimelineComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RoomWeekBookingsTimelineComponent)))(__ngFactoryType__ || _RoomWeekBookingsTimelineComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomWeekBookingsTimelineComponent, selectors: [["room-week-bookings-timeline"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 20, vars: 18, consts: [[1, "bg-info", "text-info-content", "mx-2", "mt-2", "w-[calc(100%-1rem)]", "rounded-lg", "p-2", "text-center", "text-xs"], [1, "border-base-200", "relative", "z-20", "flex", "items-center", "justify-center", "space-x-2", "border-b", "p-2"], ["display_mode", "week", 3, "dateChange", "date", "step", "week_start", "is_new", "hide_today"], [1, "text-info", "absolute", "top-1/2", "left-4", "-translate-y-1/2", "text-sm"], [1, "absolute", "top-1/2", "right-8", "-translate-y-1/2"], [3, "selected"], ["timeline", "", 1, "z-0", "grid", "h-1/2", "w-full", "flex-1", "overflow-auto"], ["timezone", "", 1, "bg-base-100", "sticky", "top-0", "left-0", "z-30", "flex", "items-center", "justify-center"], [1, "text-xs", "opacity-30"], [1, "bg-base-300", "absolute", "right-0", "bottom-0", "h-2", "w-px"], [1, "bg-base-300", "absolute", "right-0", "bottom-0", "h-px", "w-2"], ["day-headers", "", 1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-20", "flex", "min-w-[calc(100%-3rem)]", "items-center", "border-b"], [1, "relative", "flex", "h-full", "min-w-48", "flex-1", "flex-col", "items-center", "justify-center", "leading-tight"], ["empty-block", "", 1, "border-base-300", "bg-base-100", "sticky", "left-0", "z-10", "min-h-full", "border-r"], ["date-blocks", "", 1, "relative", "flex", "min-w-[calc(100%-3rem)]", "overflow-hidden"], [1, "border-base-200", "min-w-48", "flex-1", "overflow-hidden", "border-r", "p-2"], [1, "truncate"], [1, "text-info", "absolute", "bottom-1", "left-1/2", "-translate-x-1/2", "text-xs"], [1, "bg-base-300", "absolute", "bottom-0", "-left-px", "h-2", "w-px"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "w-full", "space-x-2", "rounded-sm", "p-2", "text-left"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "w-full", "space-x-2", "rounded-sm", "p-2", "text-left", 3, "click"], [1, "my-1.5", "h-2", "w-2", "rounded-full"], [1, "w-1/2", "flex-1"], [1, "truncate", "text-sm"], [1, "flex-1", "text-xs", "opacity-60"], [1, "truncate", "text-xs", "opacity-30"]], template: function RoomWeekBookingsTimelineComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, RoomWeekBookingsTimelineComponent_Conditional_0_Template, 3, 3, "div", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "date-options", 2);
        \u0275\u0275listener("dateChange", function RoomWeekBookingsTimelineComponent_Template_date_options_dateChange_2_listener($event) {
          return ctx.setDate($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(3, RoomWeekBookingsTimelineComponent_Conditional_3_Template, 3, 3, "div", 3);
        \u0275\u0275elementStart(4, "div", 4)(5, "room-booking-search", 5);
        \u0275\u0275listener("selected", function RoomWeekBookingsTimelineComponent_Template_room_booking_search_selected_5_listener($event) {
          return ctx.viewEvent($event, $event.system == null ? null : $event.system.id, true);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "div", 9)(12, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 11);
        \u0275\u0275repeaterCreate(14, RoomWeekBookingsTimelineComponent_For_15_Template, 6, 6, "div", 12, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "div", 13);
        \u0275\u0275elementStart(17, "div", 14);
        \u0275\u0275repeaterCreate(18, RoomWeekBookingsTimelineComponent_For_19_Template, 3, 1, "div", 15, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.timezone && ctx.tz ? 0 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("date", ctx.date())("step", 7)("week_start", ctx.week_start)("is_new", true)("hide_today", true);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.this_week() ? 3 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(10, 14, ctx.date(), "zzzz", ctx.tz), " ");
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("width", ctx.days().length * 12 + "rem");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.days());
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("height", ctx.event_max_count() ? ctx.event_max_count() * 5.375 + "rem" : "");
        \u0275\u0275advance();
        \u0275\u0275styleProp("width", ctx.days().length * 12 + "rem");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.days());
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      RoomBookingSearchComponent,
      DateOptionsComponent,
      AsyncPipe,
      DatePipe,
      TranslatePipe,
      UserPipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n[timeline][_ngcontent-%COMP%] {\n  grid-template-columns: 4rem auto;\n  grid-template-rows: 3.5rem auto;\n}\n/*# sourceMappingURL=room-week-timeline.component.css.map */"] });
  }
};
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
                [date]="date()"
                [step]="7"
                display_mode="week"
                [week_start]="week_start"
                (dateChange)="setDate($event)"
                [is_new]="true"
                [hide_today]="true"
            ></date-options>
            @if (this_week()) {
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
                <div class="text-xs opacity-30">
                    {{ date() | date: 'zzzz' : tz }}
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
                [style.width]="days().length * 12 + 'rem'"
            >
                @for (date of days(); track date) {
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
                    event_max_count() ? event_max_count() * 5.375 + 'rem' : ''
                "
            ></div>
            <div
                date-blocks
                class="relative flex min-w-[calc(100%-3rem)] overflow-hidden"
                [style.width]="days().length * 12 + 'rem'"
            >
                @for (date of days(); track date; let i = $index) {
                    <div
                        class="border-base-200 min-w-48 flex-1 overflow-hidden border-r p-2"
                    >
                        @for (event of events()[date] || []; track event) {
                            <button
                                matRipple
                                class="hover:bg-base-200 flex w-full space-x-2 rounded-sm p-2 text-left"
                                (click)="viewEvent(event, event.system?.id)"
                            >
                                <div
                                    class="my-1.5 h-2 w-2 rounded-full"
                                    [style.background-color]="
                                        typeColor(event.type)
                                    "
                                ></div>
                                <div class="w-1/2 flex-1">
                                    <div
                                        class="truncate text-sm"
                                        [class.line-through]="
                                            event.state === 'done'
                                        "
                                    >
                                        {{ event.title }}
                                    </div>
                                    <div class="flex-1 text-xs opacity-60">
                                        {{
                                            event.date | date: time_format : tz
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
                                    </div>
                                    <div class="truncate text-xs opacity-30">
                                        {{ event.system?.display_name }}
                                    </div>
                                    <div class="truncate text-xs opacity-30">
                                        {{
                                            (event.host | user | async)?.name ||
                                                event.host
                                        }}
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomWeekBookingsTimelineComponent, { className: "RoomWeekBookingsTimelineComponent", filePath: "apps/concierge/src/app/day-view/room-week-timeline.component.ts", lineNumber: 203 });
})();

// apps/concierge/src/app/day-view/room-bookings.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function RoomBookingsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 10);
  }
}
function RoomBookingsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 11);
    \u0275\u0275text(1, "download");
    \u0275\u0275elementEnd();
  }
}
function RoomBookingsComponent_For_38_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const level_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_12_0 = \u0275\u0275pipeBind1(2, 1, level_r1.parent_id)) == null ? null : tmp_12_0.display_name, " ");
  }
}
function RoomBookingsComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19)(1, "div", 31);
    \u0275\u0275conditionalCreate(2, RoomBookingsComponent_For_38_Conditional_2_Template, 5, 3, "div", 32);
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
function RoomBookingsComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 6);
    \u0275\u0275listener("ngModelChange", function RoomBookingsComponent_Conditional_39_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateUIOptions({ show_overflow: $event }));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.ui_options().show_overflow);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.SETUP_BREAKDOWN"));
  }
}
function RoomBookingsComponent_For_44_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "div", 35);
    \u0275\u0275elementStart(2, "div", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 37);
    \u0275\u0275listener("click", function RoomBookingsComponent_For_44_Conditional_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const type_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFilter(type_r5.id, true));
    });
    \u0275\u0275elementStart(5, "icon", 38);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const type_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", type_r5.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", type_r5.name, " ");
  }
}
function RoomBookingsComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomBookingsComponent_For_44_Conditional_0_Template, 7, 3, "div", 34);
  }
  if (rf & 2) {
    const type_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r1.type_list.includes(type_r5.id) ? 0 : -1);
  }
}
function RoomBookingsComponent_For_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 6);
    \u0275\u0275listener("ngModelChange", function RoomBookingsComponent_For_55_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const type_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFilter(type_r7.id, !$event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", !ctx_r1.type_list.includes(type_r7.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r7.name, " ");
  }
}
function RoomBookingsComponent_Conditional_57_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "room-bookings-inverted-timeline", 29);
  }
}
function RoomBookingsComponent_Conditional_57_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "room-bookings-timeline", 29);
  }
}
function RoomBookingsComponent_Conditional_57_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomBookingsComponent_Conditional_57_Conditional_0_Conditional_0_Template, 1, 0, "room-bookings-inverted-timeline", 29)(1, RoomBookingsComponent_Conditional_57_Conditional_0_Conditional_1_Template, 1, 0, "room-bookings-timeline", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.day_timeline_view() === "inverted" ? 0 : 1);
  }
}
function RoomBookingsComponent_Conditional_57_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "room-week-bookings-timeline", 29);
  }
}
function RoomBookingsComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomBookingsComponent_Conditional_57_Conditional_0_Template, 2, 1)(1, RoomBookingsComponent_Conditional_57_Conditional_1_Template, 1, 0, "room-week-bookings-timeline", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.period() === "day" ? 0 : 1);
  }
}
function RoomBookingsComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "room-bookings-list", 29);
  }
}
function RoomBookingsComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "room-bookings-approvals", 30);
  }
}
var EMPTY = [];
var RoomBookingsComponent = class _RoomBookingsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._state = inject(EventsStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._settings = inject(SettingsService);
    this._user_pipe = inject(UserPipe);
    this.day_timeline_view = settingSignal("events.day_timeline_view", "default");
    this.zones = toSignal(this._state.zones, { initialValue: [] });
    this.period = toSignal(this._state.period, {
      initialValue: "day"
    });
    this.downloading = signal(false, ...ngDevMode ? [{ debugName: "downloading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.view = signal("timeline", ...ngDevMode ? [{ debugName: "view" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ui_options = toSignal(this._state.options, {
      initialValue: {}
    });
    this._levels$ = combineLatest([
      this._org.active_building,
      this._org.active_region
    ]).pipe(switchMap(([bld, region]) => {
      const zone = this.use_region ? region : bld;
      if (!zone?.id)
        return of([]);
      return requestSpacesForZone(zone.id).pipe(catchError(() => of([])));
    }), map((spaces) => {
      const level_ids = new Set(spaces.filter((space) => space.bookable).flatMap((space) => space.zones || []));
      const level_list = this.use_region ? this._org.levelsForRegion(this._org.region) : this._org.levelsForBuilding(this._org.building);
      return level_list.filter((level) => level_ids.has(level.id));
    }), shareReplay(1));
    this.levels = toSignal(this._levels$, { initialValue: [] });
    this.updateZones = (zones) => {
      const zone_ids = this._clean_zone_ids(zones);
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          zone_ids: zone_ids.length ? zone_ids.join(",") : null
        },
        queryParamsHandling: "merge"
      });
      this._state.setZones(zone_ids);
      persistZones("room-bookings", this._persistScopeId(), zone_ids);
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
    this.setView = (view) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { view },
        queryParamsHandling: "merge"
      });
      this.view.set(view);
    };
    this.newBooking = (d) => this._state.newBooking(d);
    this.types = [
      { id: "internal", name: "Internal", color: "#D81B60" },
      { id: "external", name: "External", color: "#1E88E5" },
      { id: "cancelled", name: "Cancelled", color: "#eeeeee" }
    ];
  }
  get type_list() {
    return this._state.filters.hide_type || EMPTY;
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
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("period")) {
        this._state.setPeriod(params.get("period") === "day" ? "day" : "week");
      }
      if (params.has("view")) {
        this.view.set(params.get("view") === "list" ? "list" : "timeline");
      }
      if (this.use_region)
        return;
      if (params.has("zone_ids")) {
        const zones = this._clean_zone_ids(params.get("zone_ids").split(","));
        if (zones.length) {
          const level = this._org.levelWithID(zones);
          if (!level)
            return;
          this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
          this.updateZones(zones);
        }
      }
    }));
    this.subscription("levels", this._levels$.pipe(debounceTime(300)).subscribe(async (levels) => {
      if (this.use_region)
        return;
      const current = this.zones().filter((zone) => levels.find((lvl) => lvl.id === zone));
      if (!this.zones().length) {
        const persisted = loadPersistedZones("room-bookings", this._persistScopeId()).filter((zone) => levels.find((lvl) => lvl.id === zone));
        if (persisted.length) {
          this.updateZones(persisted);
          return;
        }
      }
      this.updateZones(current);
    }));
  }
  _persistScopeId() {
    return this.use_region ? this._org.region?.id || "" : this._org.building?.id || "";
  }
  setFilter(id, value) {
    const filters = this._state.filters;
    let hide_type = filters.hide_type || [];
    hide_type = hide_type.filter((i) => i !== id);
    if (value)
      hide_type.push(id);
    this._state.setFilters({ hide_type });
  }
  async downloadAttendeeList() {
    this.downloading.set(true);
    try {
      const events = await nextValueFrom(this._state.filtered);
      const emails = /* @__PURE__ */ new Set();
      for (const event of events) {
        if (event.host && event.system?.email !== event.host)
          emails.add(event.host);
        for (const attendee of event.attendees || []) {
          if (attendee.email && event.system?.email !== attendee.email && !attendee.resource) {
            emails.add(attendee.email);
          }
        }
      }
      const data = await Promise.all(Array.from(emails).map(async (email) => {
        const user = await this._user_pipe.transform(email);
        return {
          name: user?.name || "",
          email
        };
      }));
      const period = this.period();
      const date = format(this._state.getDate(), "yyyy-MM-dd");
      downloadFile(`room-bookings-${date}-${period}.csv`, jsonToCsv(data));
    } finally {
      this.downloading.set(false);
    }
  }
  _clean_zone_ids(zones = []) {
    return (zones || []).filter((zone_id) => !!zone_id);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RoomBookingsComponent_BaseFactory;
      return function RoomBookingsComponent_Factory(__ngFactoryType__) {
        return (\u0275RoomBookingsComponent_BaseFactory || (\u0275RoomBookingsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RoomBookingsComponent)))(__ngFactoryType__ || _RoomBookingsComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomBookingsComponent, selectors: [["room-bookings"]], features: [\u0275\u0275ProvidersFeature([UserPipe]), \u0275\u0275InheritDefinitionFeature], decls: 60, vars: 47, consts: [["menu", "matMenu"], [1, "absolute", "inset-0", "flex", "flex-col", "overflow-hidden", "pl-8"], [1, "flex", "w-full", "items-center", "space-x-2", "py-4", "pr-8"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], ["appearance", "outline", 1, "no-subscript", "w-32"], [3, "ngModelChange", "ngModel"], ["value", "day"], ["value", "week"], ["icon", "", "matRipple", "", 1, "border-secondary", "h-12", "w-12", "rounded", "border", 3, "click", "matTooltip", "disabled"], ["diameter", "24"], [1, "text-2xl"], ["btn", "", "matRipple", "", 1, "space-x-2", 3, "click"], [1, "pl-2"], [1, "border-base-300", "bg-base-100", "ml-2", "flex", "rounded", "border"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded-none", 3, "click", "matTooltip"], [1, "flex", "w-full", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-52"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [3, "ngModel"], [1, "flex", "flex-1", "justify-end", "pr-2"], [1, "border-base-300", "flex", "max-w-lg", "flex-1", "items-center", "rounded-full", "border"], [1, "flex", "w-px", "flex-1", "items-center", "space-x-1", "overflow-x-auto", "rounded-l-full", "px-1"], ["btn", "", "matRipple", "", 1, "inverse", "bg-base-100", 3, "matMenuTriggerFor"], [1, "mx-2"], [1, ""], [1, "flex", "w-48", "flex-col", "space-y-2", "overflow-hidden"], [1, "border-base-200", "mt-4", "flex", "h-px", "w-full", "flex-1", "border-t"], [1, "relative", "z-0", "w-1/2", "flex-1"], [1, "relative", "z-10"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [1, "border-base-300", "flex", "items-center", "rounded-full", "border"], [1, "m-2", "h-4", "w-4", "rounded-full"], [1, "truncate", "text-sm"], ["icon", "", "matRipple", "", 1, "text-base-300", "hover:text-base-content", 3, "click"], [1, "text-xl"]], template: function RoomBookingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "div", 4);
        \u0275\u0275elementStart(6, "mat-form-field", 5)(7, "mat-select", 6);
        \u0275\u0275listener("ngModelChange", function RoomBookingsComponent_Template_mat_select_ngModelChange_7_listener($event) {
          return ctx.setPeriod($event);
        });
        \u0275\u0275elementStart(8, "mat-option", 7);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-option", 8);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "button", 9);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275listener("click", function RoomBookingsComponent_Template_button_click_14_listener() {
          return ctx.downloadAttendeeList();
        });
        \u0275\u0275conditionalCreate(16, RoomBookingsComponent_Conditional_16_Template, 1, 0, "mat-spinner", 10)(17, RoomBookingsComponent_Conditional_17_Template, 2, 0, "icon", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 12);
        \u0275\u0275listener("click", function RoomBookingsComponent_Template_button_click_18_listener() {
          return ctx.newBooking();
        });
        \u0275\u0275elementStart(19, "div", 13);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "icon", 11);
        \u0275\u0275text(23, "add");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 14)(25, "button", 15);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275listener("click", function RoomBookingsComponent_Template_button_click_25_listener() {
          return ctx.setView("timeline");
        });
        \u0275\u0275elementStart(27, "icon", 11);
        \u0275\u0275text(28, "view_timeline");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "button", 15);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275listener("click", function RoomBookingsComponent_Template_button_click_29_listener() {
          return ctx.setView("list");
        });
        \u0275\u0275elementStart(31, "icon", 11);
        \u0275\u0275text(32, "view_list");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(33, "div", 16)(34, "mat-form-field", 17)(35, "mat-select", 18);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275listener("ngModelChange", function RoomBookingsComponent_Template_mat_select_ngModelChange_35_listener($event) {
          return ctx.updateZones($event);
        });
        \u0275\u0275repeaterCreate(37, RoomBookingsComponent_For_38_Template, 5, 3, "mat-option", 19, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(39, RoomBookingsComponent_Conditional_39_Template, 3, 4, "settings-toggle", 20);
        \u0275\u0275elementStart(40, "div", 21)(41, "div", 22)(42, "div", 23);
        \u0275\u0275repeaterCreate(43, RoomBookingsComponent_For_44_Template, 1, 1, null, null, _forTrack03);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "button", 24)(46, "icon");
        \u0275\u0275text(47, "filter_list");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 25);
        \u0275\u0275text(49);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "mat-menu", 26, 0)(53, "div", 27);
        \u0275\u0275repeaterCreate(54, RoomBookingsComponent_For_55_Template, 2, 2, "mat-checkbox", 20, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(56, "div", 28);
        \u0275\u0275conditionalCreate(57, RoomBookingsComponent_Conditional_57_Template, 2, 1)(58, RoomBookingsComponent_Conditional_58_Template, 1, 0, "room-bookings-list", 29);
        \u0275\u0275conditionalCreate(59, RoomBookingsComponent_Conditional_59_Template, 1, 0, "room-bookings-approvals", 30);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const menu_r8 = \u0275\u0275reference(52);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 29, "APP.CONCIERGE.ROOM_BOOKINGS"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.period());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 31, "COMMON.DAY"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 33, "COMMON.WEEK"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(15, 35, "APP.CONCIERGE.DOWNLOAD_USER_LIST"))("disabled", ctx.downloading());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.downloading() ? 16 : 17);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 37, "APP.CONCIERGE.ROOMS_BOOK_ADD"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("bg-secondary", ctx.view() === "timeline")("text-secondary-content", ctx.view() === "timeline")("opacity-70", ctx.view() !== "timeline");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(26, 39, "COMMON.DAY"));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("bg-secondary", ctx.view() === "list")("text-secondary-content", ctx.view() === "list")("opacity-70", ctx.view() !== "list");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(30, 41, "COMMON.LIST"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.zones())("placeholder", \u0275\u0275pipeBind1(36, 43, "COMMON.LEVEL_ALL"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.levels());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.allow_setup_breakdown ? 39 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.types);
        \u0275\u0275advance(2);
        \u0275\u0275property("matMenuTriggerFor", menu_r8);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(50, 45, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.types);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.view() === "timeline" ? 57 : 58);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.has_approvals ? 59 : -1);
      }
    }, dependencies: [
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatMenuModule,
      MatMenu,
      MatMenuTrigger,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatCheckboxModule,
      MatCheckbox,
      FormsModule,
      NgControlStatus,
      NgModel,
      RoomBookingsInvertedTimelineComponent,
      RoomBookingsTimelineComponent,
      RoomWeekBookingsTimelineComponent,
      RoomBookingsListComponent,
      RoomBookingsApprovalsComponent,
      SettingsToggleComponent,
      TranslatePipe,
      BuildingPipe
    ], encapsulation: 2 });
  }
};
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
                    <mat-select
                        [ngModel]="period()"
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
                    icon
                    matRipple
                    class="border-secondary h-12 w-12 rounded border"
                    [matTooltip]="
                        'APP.CONCIERGE.DOWNLOAD_USER_LIST' | translate
                    "
                    [disabled]="downloading()"
                    (click)="downloadAttendeeList()"
                >
                    @if (downloading()) {
                        <mat-spinner diameter="24"></mat-spinner>
                    } @else {
                        <icon class="text-2xl">download</icon>
                    }
                </button>
                <button btn matRipple class="space-x-2" (click)="newBooking()">
                    <div class="pl-2">
                        {{ 'APP.CONCIERGE.ROOMS_BOOK_ADD' | translate }}
                    </div>
                    <icon class="text-2xl">add</icon>
                </button>
                <div
                    class="border-base-300 bg-base-100 ml-2 flex rounded border"
                >
                    <button
                        icon
                        matRipple
                        class="h-12 w-12 rounded-none"
                        [class.bg-secondary]="view() === 'timeline'"
                        [class.text-secondary-content]="view() === 'timeline'"
                        [class.opacity-70]="view() !== 'timeline'"
                        [matTooltip]="'COMMON.DAY' | translate"
                        (click)="setView('timeline')"
                    >
                        <icon class="text-2xl">view_timeline</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        class="h-12 w-12 rounded-none"
                        [class.bg-secondary]="view() === 'list'"
                        [class.text-secondary-content]="view() === 'list'"
                        [class.opacity-70]="view() !== 'list'"
                        [matTooltip]="'COMMON.LIST' | translate"
                        (click)="setView('list')"
                    >
                        <icon class="text-2xl">view_list</icon>
                    </button>
                </div>
            </div>
            <div class="flex w-full items-center space-x-2">
                <mat-form-field appearance="outline" class="no-subscript w-52">
                    <mat-select
                        [ngModel]="zones()"
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
                        [ngModel]="ui_options().show_overflow"
                        (ngModelChange)="
                            updateUIOptions({ show_overflow: $event })
                        "
                        >{{
                            'APP.CONCIERGE.SETUP_BREAKDOWN' | translate
                        }}</settings-toggle
                    >
                }
                <div class="flex flex-1 justify-end pr-2">
                    <div
                        class="border-base-300 flex max-w-lg flex-1 items-center rounded-full border"
                    >
                        <div
                            class="flex w-px flex-1 items-center space-x-1 overflow-x-auto rounded-l-full px-1"
                        >
                            @for (type of types; track type.id) {
                                @if (!type_list.includes(type.id)) {
                                    <div
                                        class="border-base-300 flex items-center rounded-full border"
                                    >
                                        <div
                                            class="m-2 h-4 w-4 rounded-full"
                                            [style.background-color]="
                                                type.color
                                            "
                                        ></div>
                                        <div class="truncate text-sm">
                                            {{ type.name }}
                                        </div>
                                        <button
                                            icon
                                            matRipple
                                            class="text-base-300 hover:text-base-content"
                                            (click)="setFilter(type.id, true)"
                                        >
                                            <icon class="text-xl">close</icon>
                                        </button>
                                    </div>
                                }
                            }
                        </div>
                        <button
                            btn
                            matRipple
                            class="inverse bg-base-100"
                            [matMenuTriggerFor]="menu"
                        >
                            <icon>filter_list</icon>
                            <div class="mx-2">
                                {{ 'COMMON.FILTERS' | translate }}
                            </div>
                        </button>
                    </div>
                    <mat-menu #menu="matMenu" class="">
                        <div
                            class="flex w-48 flex-col space-y-2 overflow-hidden"
                        >
                            @for (type of types; track type) {
                                <mat-checkbox
                                    [ngModel]="!type_list.includes(type.id)"
                                    (ngModelChange)="
                                        setFilter(type.id, !$event)
                                    "
                                >
                                    {{ type.name }}
                                </mat-checkbox>
                            }
                        </div>
                    </mat-menu>
                </div>
            </div>
            <div class="border-base-200 mt-4 flex h-px w-full flex-1 border-t">
                @if (view() === 'timeline') {
                    @if (period() === 'day') {
                        @if (day_timeline_view() === 'inverted') {
                            <room-bookings-inverted-timeline
                                class="relative z-0 w-1/2 flex-1"
                            />
                        } @else {
                            <room-bookings-timeline
                                class="relative z-0 w-1/2 flex-1"
                            />
                        }
                    } @else {
                        <room-week-bookings-timeline
                            class="relative z-0 w-1/2 flex-1"
                        />
                    }
                } @else {
                    <room-bookings-list class="relative z-0 w-1/2 flex-1" />
                }
                @if (has_approvals) {
                    <room-bookings-approvals class="relative z-10" />
                }
            </div>
        </div>
    `, providers: [UserPipe], imports: [
      TranslatePipe,
      MatFormFieldModule,
      MatSelectModule,
      MatMenuModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      IconComponent,
      MatRippleModule,
      MatCheckboxModule,
      FormsModule,
      RoomBookingsInvertedTimelineComponent,
      RoomBookingsTimelineComponent,
      RoomWeekBookingsTimelineComponent,
      RoomBookingsListComponent,
      RoomBookingsApprovalsComponent,
      SettingsToggleComponent,
      BuildingPipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomBookingsComponent, { className: "RoomBookingsComponent", filePath: "apps/concierge/src/app/day-view/room-bookings.component.ts", lineNumber: 271 });
})();

// apps/concierge/src/app/day-view/day-view.component.ts
var _c07 = ["app-new-dayview", ""];
var DayViewComponent = class _DayViewComponent {
  constructor() {
    this._router = inject(Router);
    this._url = toSignal(this._router.events.pipe(startWith(null)), {
      initialValue: null
    });
    this.path = computed(() => {
      this._url();
      const parts = (this._router.url || "").split("/");
      return parts[parts.length - 1].split("?")[0];
    }, ...ngDevMode ? [{ debugName: "path" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function DayViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DayViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DayViewComponent, selectors: [["", "app-new-dayview", ""]], attrs: _c07, decls: 5, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"]], template: function DayViewComponent_Template(rf, ctx) {
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
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n@media print {\n  [_nghost-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=day-view.component.css.map */"] });
  }
};
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DayViewComponent, { className: "DayViewComponent", filePath: "apps/concierge/src/app/day-view/day-view.component.ts", lineNumber: 43 });
})();

// apps/concierge/src/app/day-view/day-view.module.ts
var ROUTES = [
  { path: "", component: DayViewComponent, title: "Room Bookings" },
  { path: "**", redirectTo: "" }
];
var DayViewModule = class _DayViewModule {
  static {
    this.\u0275fac = function DayViewModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DayViewModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DayViewModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [DayViewComponent, RouterModule.forChild(ROUTES)] });
  }
};
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
//# sourceMappingURL=day-view.module-FQF7YLVV.js.map
