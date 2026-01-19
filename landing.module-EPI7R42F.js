import {
  BookingCardComponent,
  BookingFormService,
  FAV_DESK_KEY,
  FAV_LOCKER_KEY,
  FAV_PARKING_KEY,
  FooterMenuComponent,
  ScheduleStateService,
  TopbarComponent
} from "./chunk-6ZRUDDEL.js";
import {
  $h,
  Aa,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  Booking,
  Building,
  BuildingPipe,
  CalendarEvent,
  CalendarService,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  EventCardComponent,
  EventFormService,
  ExploreSpacesService,
  FormsModule,
  IconComponent,
  Injectable,
  LevelPipe,
  MatDialog,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgModel,
  NgModule,
  OrganisationService,
  Router,
  RouterLink,
  RouterModule,
  SettingsService,
  SlicePipe,
  SpacePipe,
  StaffUser,
  TranslatePipe,
  UserAvatarComponent,
  Ut,
  Xu,
  __spreadProps,
  __spreadValues,
  catchError,
  checkinBooking,
  combineLatest,
  computed,
  currentUser,
  debounceTime,
  ec,
  filter,
  filterResourcesFromRules,
  firstTruthyValueFrom,
  format,
  i18n,
  inject,
  isSameDay,
  lastValueFrom,
  map,
  nextValueFrom,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  queryEvents,
  removeBooking,
  removeEvent,
  requestSpacesForZone,
  searchStaff,
  setClassMetadata,
  settingSignal,
  shareReplay,
  signal,
  startOfMinute,
  switchMap,
  tap,
  unique,
  userSignal,
  viewChild,
  xa,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-2IAXTSED.js";

// apps/workplace/src/app/landing/landing-state.service.ts
var _LandingStateService = class _LandingStateService extends AsyncHandler {
  constructor() {
    super();
    this._calendar = inject(CalendarService);
    this._schedule = inject(ScheduleStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._options = new BehaviorSubject({});
    this._loading = new BehaviorSubject("");
    this._loading_spaces = new BehaviorSubject(false);
    this._contacts = new BehaviorSubject([]);
    this._level_occupancy = new BehaviorSubject([]);
    this._booking_rules = this._org.active_building.pipe(filter((bld) => !!bld), switchMap((bld) => Xu(bld.id, `room_booking_rules`).pipe(catchError(() => of({ details: [] })))), map((_) => _?.details instanceof Array ? _.details : []), shareReplay(1));
    this._space_list = this._org.active_building.pipe(filter((_) => !!_), switchMap((bld) => requestSpacesForZone(bld.id)), map((_) => _.filter((s) => s.bookable)), shareReplay(1));
    this._filtered_spaces = combineLatest([
      this._space_list,
      this._booking_rules
    ]).pipe(map(([list, rules]) => filterResourcesFromRules(list, {
      date: Date.now(),
      duration: 60,
      host: currentUser(),
      resource: null
    }, rules)));
    this._space_statuses = this._filtered_spaces.pipe(tap((_) => this.unsubWith("bind:")), switchMap((list) => combineLatest((list || []).map((_) => {
      const binding = $h(_.id, "Bookings").variable("status");
      const obs = binding.listen();
      this.subscription(`bind:${_.id}`, binding.bind());
      return obs;
    }))), shareReplay(1));
    this.free_space_list = combineLatest([
      this._space_list,
      this._space_statuses
    ]).pipe(map(([list, statuses]) => (list || []).filter((_, idx) => statuses[idx] === "free").sort((a, b) => a.capacity - b.capacity)), shareReplay(1));
    this.upcoming_events = this._schedule.filtered_bookings.pipe(map((_) => _.filter((i) => i.state !== "done" && isSameDay(i.date, Date.now()))));
    this.contacts = this._contacts.asObservable();
    this.options = this._options.asObservable();
    this.loading = this._loading.asObservable();
    this.loading_spaces = this._loading_spaces.asObservable();
    this.search_fn = (q) => this._settings.get("app.basic_user_search") || this._settings.get("app.colleagues_require_auth") !== false ? xa({ q, authority_id: Ut()?.id }).pipe(map(({ data }) => data.map((_) => new StaffUser(_)))) : searchStaff(q);
    this.search_results = this._options.pipe(debounceTime(500), switchMap(({ search }) => {
      this._loading.next("Loading users...");
      return search ? this.search_fn(search).pipe(catchError(() => of([]))) : of([]);
    }), tap(() => this._loading.next("")), shareReplay(1));
    this.level_occupancy = this._level_occupancy.asObservable();
    this.init();
  }
  async init() {
    await firstTruthyValueFrom(this._org.initialised);
    this.updateContacts();
    this.subscription("building", this._org.active_building.pipe(filter((bld) => !!bld)).subscribe(() => {
      this.updateBuildingMetadata();
      this.updateOccupancy({});
    }));
    const mod = this._org.module("area_management", "AreaManagement");
    if (!mod)
      return;
    const binding = mod.variable("overview");
    this.subscription("overview", binding.bindThenSubscribe((d) => this.updateOccupancy(d || {})));
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  pollUpcomingEvents(delay = 2 * 60 * 1e3) {
    this._schedule.setDate(Date.now());
    this._schedule.triggerPoll();
    return this._schedule.startPolling(delay);
  }
  stopPollingUpcomingEvents() {
    this._schedule.stopPolling();
  }
  refreshUpcomingEvents() {
    this._schedule.setDate(Date.now());
    this._schedule.triggerPoll();
  }
  async updateContacts() {
    const metadata = await lastValueFrom(Xu(currentUser().id, "contacts"));
    const list = metadata.details instanceof Array ? metadata.details : [];
    const users = await Promise.all(list.map((_) => lastValueFrom(Aa(_.email).pipe(catchError(() => of(_))))));
    this._contacts.next(users.map((i) => new StaffUser(i)));
  }
  async addContact(user) {
    let users = [...this._contacts.getValue()];
    users.push(user);
    users = unique(users, "email");
    await lastValueFrom(ec(currentUser().id, {
      name: "contacts",
      description: "Contacts for the User",
      details: users
    }));
    this.updateContacts();
  }
  async removeContact(user) {
    let users = [...this._contacts.getValue()];
    users = users.filter((u) => u.email !== user.email);
    await lastValueFrom(ec(currentUser().id, {
      name: "contacts",
      description: "Contacts for the User",
      details: users
    }));
    this.updateContacts();
  }
  async updateOccupancy(map2) {
    const levels = this._org.levelsForBuilding() || [];
    levels.sort((a, b) => map2[a.id]?.recommendation - map2[b.id]?.recommendation);
    this._level_occupancy.next(levels);
  }
  async updateBuildingMetadata() {
    this._level_occupancy.next([]);
    const occupancy = this._org.binding("occupancy");
    if (!occupancy)
      return;
    const { sys, module, index } = occupancy;
    const mod = $h(sys, module, index);
    if (!mod)
      return;
    this._occupancy_binding = mod.variable("occupancy");
    this.subscription("occupancy_binding", this._occupancy_binding.bindThenSubscribe((value) => {
      const levels = Object.keys(value).map((key) => __spreadValues({
        id: key
      }, value[key]));
      levels.sort((a, b) => a.recommendation_factor - b.recommendation_factor);
      this._level_occupancy.next(levels.map((i) => this._org.levelWithID([i.id])));
    }));
  }
};
_LandingStateService.\u0275fac = function LandingStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LandingStateService)();
};
_LandingStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LandingStateService, factory: _LandingStateService.\u0275fac, providedIn: "root" });
var LandingStateService = _LandingStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/workplace/src/app/landing/landing-availability.component.ts
var _c0 = () => ["/explore"];
var _c1 = (a0) => ({ level: a0 });
function LandingAvailabilityComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.WORKPLACE.AVAILABLE_LIST_HEADER"), " ");
  }
}
function LandingAvailabilityComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.WORKPLACE.AVAILABLE_LIST_SPACES"), " ");
  }
}
function LandingAvailabilityComponent_Conditional_3_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const lvl_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", lvl_r1 == null ? null : lvl_r1.images[0]);
  }
}
function LandingAvailabilityComponent_Conditional_3_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 9);
  }
}
function LandingAvailabilityComponent_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 5)(1, "div", 7);
    \u0275\u0275conditionalCreate(2, LandingAvailabilityComponent_Conditional_3_For_2_Conditional_2_Template, 1, 1, "img", 8)(3, LandingAvailabilityComponent_Conditional_3_For_2_Conditional_3_Template, 1, 0, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10)(5, "div", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "icon", 13);
    \u0275\u0275text(9, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275declareLet(10);
    \u0275\u0275pipe(11, "building");
    \u0275\u0275elementStart(12, "div", 14);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const lvl_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c0))("queryParams", \u0275\u0275pureFunction1(8, _c1, lvl_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((lvl_r1 == null ? null : lvl_r1.images == null ? null : lvl_r1.images.length) ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", lvl_r1.display_name || lvl_r1.name, " ");
    const building_r2 = \u0275\u0275pipeBind1(11, 5, lvl_r1.parent_id);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", (building_r2 == null ? null : building_r2.display_name) || (building_r2 == null ? null : building_r2.name), " ");
  }
}
function LandingAvailabilityComponent_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.WORKPLACE.AVAILABLE_LIST_SPACES_EMPTY"), " ");
  }
}
function LandingAvailabilityComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, LandingAvailabilityComponent_Conditional_3_For_2_Template, 14, 10, "button", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275conditionalCreate(4, LandingAvailabilityComponent_Conditional_3_Conditional_4_Template, 3, 3, "span", 6);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mb-4", !ctx_r2.hide_rooms());
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 3, ctx_r2.levels_free));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(5, 5, ctx_r2.levels_free).length ? 4 : -1);
  }
}
function LandingAvailabilityComponent_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 15);
  }
}
function LandingAvailabilityComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, LandingAvailabilityComponent_Conditional_4_Conditional_4_Template, 1, 0, "mat-spinner", 15);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.WORKPLACE.AVAILABLE_LIST_ROOMS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(5, 4, ctx_r2.loading_spaces) ? 4 : -1);
  }
}
function LandingAvailabilityComponent_Conditional_5_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
    \u0275\u0275pipe(1, "space");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    let tmp_13_0;
    const space_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", (tmp_13_0 = \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, space_r5.id))) == null ? null : tmp_13_0.images[0]);
  }
}
function LandingAvailabilityComponent_Conditional_5_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 18);
  }
}
function LandingAvailabilityComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function LandingAvailabilityComponent_Conditional_5_For_2_Template_button_click_0_listener() {
      const space_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.book(space_r5));
    });
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275conditionalCreate(2, LandingAvailabilityComponent_Conditional_5_For_2_Conditional_2_Template, 3, 5, "img", 8);
    \u0275\u0275pipe(3, "space");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275conditionalBranchCreate(5, LandingAvailabilityComponent_Conditional_5_For_2_Conditional_5_Template, 1, 0, "img", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 10)(7, "div", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 12)(10, "icon", 13);
    \u0275\u0275text(11, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275declareLet(12);
    \u0275\u0275pipe(13, "level");
    \u0275\u0275elementStart(14, "div", 14);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const space_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_11_0 = \u0275\u0275pipeBind1(4, 5, \u0275\u0275pipeBind1(3, 3, space_r5.id))) == null ? null : tmp_11_0.images == null ? null : tmp_11_0.images.length) ? 2 : 5);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", space_r5.display_name || space_r5.name, " ");
    const level_r6 = \u0275\u0275pipeBind1(13, 7, space_r5.zones);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", (level_r6 == null ? null : level_r6.display_name) || (level_r6 == null ? null : level_r6.name), " ");
  }
}
function LandingAvailabilityComponent_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.WORKPLACE.AVAILABLE_LIST_ROOMS_EMPTY"), " ");
  }
}
function LandingAvailabilityComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, LandingAvailabilityComponent_Conditional_5_For_2_Template, 16, 9, "button", 16, \u0275\u0275componentInstance().trackBySpaceId, true);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275conditionalCreate(4, LandingAvailabilityComponent_Conditional_5_Conditional_4_Template, 3, 3, "span", 6);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 1, ctx_r2.space_list));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!((tmp_2_0 = \u0275\u0275pipeBind1(5, 3, ctx_r2.space_list)) == null ? null : tmp_2_0.length) ? 4 : -1);
  }
}
var _LandingAvailabilityComponent = class _LandingAvailabilityComponent {
  constructor() {
    this._state = inject(LandingStateService);
    this._explore = inject(ExploreSpacesService);
    this.space_list = this._state.free_space_list;
    this.loading_spaces = this._state.loading_spaces;
    this.levels_free = this._state.level_occupancy;
    this.hide_spaces = settingSignal("hide_landing_spaces");
    this.hide_rooms = settingSignal("hide_landing_rooms");
    this.book = (s) => this._explore.bookSpace(s, true);
  }
  trackBySpaceId(index, space) {
    return space.id;
  }
};
_LandingAvailabilityComponent.\u0275fac = function LandingAvailabilityComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LandingAvailabilityComponent)();
};
_LandingAvailabilityComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingAvailabilityComponent, selectors: [["landing-availability"]], features: [\u0275\u0275ProvidersFeature([ExploreSpacesService])], decls: 6, vars: 5, consts: [[1, "py-2"], [1, "mb-2", "px-4", "font-medium", "sm:mb-4", "sm:text-lg"], [1, "flex", "items-center", "space-x-2", "px-4", "text-sm", "sm:text-base"], [1, "mx-4", "flex", "w-[calc(100%-2rem)]", "snap-x", "items-center", "space-x-2", "overflow-auto", "py-2", 3, "mb-4"], [1, "mx-4", "flex", "w-[calc(100%-2rem)]", "snap-x", "items-center", "space-x-2", "overflow-auto", "py-2"], ["name", "landing-view-space", "matRipple", "", 1, "border-base-200", "bg-base-100", "flex", "w-64", "snap-start", "items-center", "space-x-2", "rounded-sm", "border", "p-2", "shadow-sm", 3, "routerLink", "queryParams"], [1, "mb-2", "text-sm", "opacity-60"], [1, "bg-base-200", "flex", "h-16", "w-16", "min-w-16", "items-center", "justify-center", "overflow-hidden", "rounded-sm"], ["auth", "", 1, "h-full", "w-full", "object-cover", "object-center", 3, "source"], ["src", "assets/icons/desk-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"], [1, "w-1/2", "flex-1", "space-y-1", "text-left"], [1, "max-w-full", "truncate", "px-1.5", "font-medium"], [1, "flex", "max-w-full", "items-center", "truncate", "text-sm", "opacity-60"], [1, "text-lg", "text-blue-500"], [1, "flex-1", "truncate"], ["diameter", "24"], ["name", "landing-book-room", "matRipple", "", 1, "border-base-200", "bg-base-100", "flex", "w-64", "snap-start", "items-center", "space-x-4", "rounded-sm", "border", "p-2", "shadow-sm"], ["name", "landing-book-room", "matRipple", "", 1, "border-base-200", "bg-base-100", "flex", "w-64", "snap-start", "items-center", "space-x-4", "rounded-sm", "border", "p-2", "shadow-sm", 3, "click"], ["src", "assets/icons/room-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"]], template: function LandingAvailabilityComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, LandingAvailabilityComponent_Conditional_1_Template, 3, 3, "div", 1);
    \u0275\u0275conditionalCreate(2, LandingAvailabilityComponent_Conditional_2_Template, 4, 3, "div", 2);
    \u0275\u0275conditionalCreate(3, LandingAvailabilityComponent_Conditional_3_Template, 6, 7, "div", 3);
    \u0275\u0275conditionalCreate(4, LandingAvailabilityComponent_Conditional_4_Template, 6, 6, "div", 2);
    \u0275\u0275conditionalCreate(5, LandingAvailabilityComponent_Conditional_5_Template, 6, 5, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.hide_rooms() || !ctx.hide_spaces() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.hide_spaces() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.hide_spaces() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.hide_rooms ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.hide_rooms ? 5 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  LevelPipe,
  BuildingPipe,
  SpacePipe,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  RouterModule,
  RouterLink,
  IconComponent,
  AuthenticatedImageDirective
], styles: ["\n\n*[_ngcontent-%COMP%] {\n  shrink: 0;\n}\n/*# sourceMappingURL=landing-availability.component.css.map */"] });
var LandingAvailabilityComponent = _LandingAvailabilityComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingAvailabilityComponent, [{
    type: Component,
    args: [{ selector: "landing-availability", template: `
        <div class="py-2">
            @if (!hide_rooms() || !hide_spaces()) {
                <div class="mb-2 px-4 font-medium sm:mb-4 sm:text-lg">
                    {{ 'APP.WORKPLACE.AVAILABLE_LIST_HEADER' | translate }}
                </div>
            }
            @if (!hide_spaces()) {
                <div
                    class="flex items-center space-x-2 px-4 text-sm sm:text-base"
                >
                    <div>
                        {{ 'APP.WORKPLACE.AVAILABLE_LIST_SPACES' | translate }}
                    </div>
                </div>
            }
            @if (!hide_spaces()) {
                <div
                    class="mx-4 flex w-[calc(100%-2rem)] snap-x items-center space-x-2 overflow-auto py-2"
                    [class.mb-4]="!hide_rooms()"
                >
                    @for (lvl of levels_free | async; track lvl) {
                        <button
                            name="landing-view-space"
                            matRipple
                            class="border-base-200 bg-base-100 flex w-64 snap-start items-center space-x-2 rounded-sm border p-2 shadow-sm"
                            [routerLink]="['/explore']"
                            [queryParams]="{ level: lvl.id }"
                        >
                            <div
                                class="bg-base-200 flex h-16 w-16 min-w-16 items-center justify-center overflow-hidden rounded-sm"
                            >
                                @if (lvl?.images?.length) {
                                    <img
                                        auth
                                        [source]="lvl?.images[0]"
                                        class="h-full w-full object-cover object-center"
                                    />
                                } @else {
                                    <img
                                        class="h-1/2 w-1/2 object-contain object-center"
                                        src="assets/icons/desk-placeholder.svg"
                                    />
                                }
                            </div>
                            <div class="w-1/2 flex-1 space-y-1 text-left">
                                <div
                                    class="max-w-full truncate px-1.5 font-medium"
                                >
                                    {{ lvl.display_name || lvl.name }}
                                </div>
                                <div
                                    class="flex max-w-full items-center truncate text-sm opacity-60"
                                >
                                    <icon class="text-lg text-blue-500"
                                        >place</icon
                                    >
                                    @let building = lvl.parent_id | building;
                                    <div class="flex-1 truncate">
                                        {{
                                            building?.display_name ||
                                                building?.name
                                        }}
                                    </div>
                                </div>
                            </div>
                        </button>
                    }
                    @if (!(levels_free | async).length) {
                        <span class="mb-2 text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.AVAILABLE_LIST_SPACES_EMPTY'
                                    | translate
                            }}
                        </span>
                    }
                </div>
            }
            @if (!hide_rooms) {
                <div
                    class="flex items-center space-x-2 px-4 text-sm sm:text-base"
                >
                    <div>
                        {{ 'APP.WORKPLACE.AVAILABLE_LIST_ROOMS' | translate }}
                    </div>
                    @if (loading_spaces | async) {
                        <mat-spinner diameter="24"></mat-spinner>
                    }
                </div>
            }
            @if (!hide_rooms) {
                <div
                    class="mx-4 flex w-[calc(100%-2rem)] snap-x items-center space-x-2 overflow-auto py-2"
                >
                    @for (
                        space of space_list | async;
                        track trackBySpaceId($index, space)
                    ) {
                        <button
                            name="landing-book-room"
                            matRipple
                            class="border-base-200 bg-base-100 flex w-64 snap-start items-center space-x-4 rounded-sm border p-2 shadow-sm"
                            (click)="book(space)"
                        >
                            <div
                                class="bg-base-200 flex h-16 w-16 min-w-16 items-center justify-center overflow-hidden rounded-sm"
                            >
                                @if (
                                    (space.id | space | async)?.images?.length
                                ) {
                                    <img
                                        auth
                                        [source]="
                                            (space.id | space | async)
                                                ?.images[0]
                                        "
                                        class="h-full w-full object-cover object-center"
                                    />
                                } @else {
                                    <img
                                        class="h-1/2 w-1/2 object-contain object-center"
                                        src="assets/icons/room-placeholder.svg"
                                    />
                                }
                            </div>
                            <div class="w-1/2 flex-1 space-y-1 text-left">
                                <div
                                    class="max-w-full truncate px-1.5 font-medium"
                                >
                                    {{ space.display_name || space.name }}
                                </div>
                                <div
                                    class="flex max-w-full items-center truncate text-sm opacity-60"
                                >
                                    <icon class="text-lg text-blue-500"
                                        >place</icon
                                    >
                                    @let level = space.zones | level;
                                    <div class="flex-1 truncate">
                                        {{ level?.display_name || level?.name }}
                                    </div>
                                </div>
                            </div>
                        </button>
                    }
                    @if (!(space_list | async)?.length) {
                        <span class="mb-2 text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.AVAILABLE_LIST_ROOMS_EMPTY'
                                    | translate
                            }}
                        </span>
                    }
                </div>
            }
        </div>
    `, providers: [ExploreSpacesService], imports: [
      CommonModule,
      TranslatePipe,
      LevelPipe,
      BuildingPipe,
      SpacePipe,
      MatProgressSpinnerModule,
      RouterModule,
      IconComponent,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;604008b5b82ae8efe608a1ad34bb5a806886552a595ea4c88282f9cd101ac1cc;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/landing/landing-availability.component.ts */\n* {\n  shrink: 0;\n}\n/*# sourceMappingURL=landing-availability.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingAvailabilityComponent, { className: "LandingAvailabilityComponent", filePath: "apps/workplace/src/app/landing/landing-availability.component.ts", lineNumber: 196 });
})();

// apps/workplace/src/app/landing/landing-colleagues.component.ts
var _c02 = ["search_input"];
var _c12 = (a0) => ({ count: a0 });
var _c2 = (a0) => ({ text: a0 });
function LandingColleaguesComponent_Conditional_6_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 24);
  }
  if (rf & 2) {
    const user_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("bg-error", user_r3.location === "aol" || user_r3.location === "ooo")("bg-success", user_r3.location === "wfo")("bg-warning", user_r3.location === "wfh")("bg-neutral", !user_r3.location);
    \u0275\u0275property("matTooltip", user_r3.location_name);
  }
}
function LandingColleaguesComponent_Conditional_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275element(2, "a-user-avatar", 12);
    \u0275\u0275conditionalCreate(3, LandingColleaguesComponent_Conditional_6_For_1_Conditional_3_Template, 1, 9, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 18)(12, "icon");
    \u0275\u0275text(13, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-menu", 19, 1)(16, "button", 20);
    \u0275\u0275listener("click", function LandingColleaguesComponent_Conditional_6_For_1_Template_button_click_16_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.newMeeting(user_r3));
    });
    \u0275\u0275elementStart(17, "div", 21)(18, "icon", 22);
    \u0275\u0275text(19, "today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 23);
    \u0275\u0275listener("click", function LandingColleaguesComponent_Conditional_6_For_1_Template_button_click_23_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeUser(user_r3));
    });
    \u0275\u0275elementStart(24, "div", 21)(25, "icon", 22);
    \u0275\u0275text(26, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const menu_r5 = \u0275\u0275reference(15);
    \u0275\u0275advance(2);
    \u0275\u0275property("user", user_r3);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(user_r3.outsideHours == null ? null : user_r3.outsideHours()) ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", user_r3.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r3.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", user_r3.organisation);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r3.organisation, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r3.location_name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r5);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 10, "APP.WORKPLACE.COLLEAGUE_NEW_MEETING"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 12, "APP.WORKPLACE.COLLEAGUE_REMOVE"), " ");
  }
}
function LandingColleaguesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LandingColleaguesComponent_Conditional_6_For_1_Template, 30, 14, "div", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(2, 0, ctx_r3.contacts));
  }
}
function LandingColleaguesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "img", 25);
    \u0275\u0275elementStart(2, "p", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.WORKPLACE.COLLEAGUES_EMPTY"), " ");
  }
}
function LandingColleaguesComponent_Conditional_20_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function LandingColleaguesComponent_Conditional_20_Conditional_1_For_1_Template_button_click_0_listener() {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.addUser(user_r7));
    });
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275element(2, "a-user-avatar", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "div", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("user", user_r7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r7.organisation || user_r7.email, " ");
  }
}
function LandingColleaguesComponent_Conditional_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LandingColleaguesComponent_Conditional_20_Conditional_1_For_1_Template, 8, 3, "button", 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(2, 0, ctx_r3.search_results));
  }
}
function LandingColleaguesComponent_Conditional_20_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", !((tmp_3_0 = \u0275\u0275pipeBind1(3, 1, ctx_r3.options)) == null ? null : tmp_3_0.search) ? \u0275\u0275pipeBind1(4, 3, "APP.WORKPLACE.COLLEAGUE_SEARCH_EMPTY") : \u0275\u0275pipeBind2(6, 7, "APP.WORKPLACE.COLLEAGUE_SEARCH_EMPTY", \u0275\u0275pureFunction1(10, _c2, (tmp_3_0 = \u0275\u0275pipeBind1(5, 5, ctx_r3.options)) == null ? null : tmp_3_0.search)), " ");
  }
}
function LandingColleaguesComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275conditionalCreate(1, LandingColleaguesComponent_Conditional_20_Conditional_1_Template, 3, 2);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalBranchCreate(3, LandingColleaguesComponent_Conditional_20_Conditional_3_Template, 7, 12, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = \u0275\u0275pipeBind1(2, 1, ctx_r3.search_results)) == null ? null : tmp_2_0.length) ? 1 : 3);
  }
}
function LandingColleaguesComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 32);
    \u0275\u0275elementStart(2, "p", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.WORKPLACE.COLLEAGUE_SEARCH_LOADING"), " ");
  }
}
var _LandingColleaguesComponent = class _LandingColleaguesComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(LandingStateService);
    this._settings = inject(SettingsService);
    this._event_form = inject(EventFormService);
    this._router = inject(Router);
    this.show_search = false;
    this.contacts = this._state.contacts;
    this.search_results = combineLatest([
      this._state.search_results,
      this._state.contacts
    ]).pipe(map(([list, contacts]) => list.filter((_) => !contacts.find((user) => user.id === _.id || user.email === _.email))));
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.addUser = async (u) => {
      await this._state.addContact(u);
      notifySuccess(i18n("APP.WORKPLACE.COLLEAGUE_ADDED", { name: u.name }));
      this.show_search = false;
    };
    this.removeUser = async (u) => {
      await this._state.removeContact(u);
      notifySuccess(i18n("APP.WORKPLACE.COLLEAGUE_REMOVED", { name: u.name }));
    };
    this.updateSearch = (s) => this._state.setOptions({ search: s });
    this._input_el = viewChild.required("search_input");
  }
  newMeeting(user) {
    this._event_form.newForm();
    setTimeout(() => {
      this._event_form.form.patchValue({ attendees: [user] });
    }, 300);
    if (this._settings.get("app.new_features")) {
      this._router.navigate(["/book", "meeting"]);
    } else {
      this._router.navigate(["/book", "spaces"]);
    }
  }
  openSearch() {
    this.updateSearch("");
    this.show_search = true;
    this.timeout("open", () => this._input_el().nativeElement.focus(), 100);
  }
};
_LandingColleaguesComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275LandingColleaguesComponent_BaseFactory;
  return function LandingColleaguesComponent_Factory(__ngFactoryType__) {
    return (\u0275LandingColleaguesComponent_BaseFactory || (\u0275LandingColleaguesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LandingColleaguesComponent)))(__ngFactoryType__ || _LandingColleaguesComponent);
  };
})();
_LandingColleaguesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingColleaguesComponent, selectors: [["landing-colleagues"]], viewQuery: function LandingColleaguesComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._input_el, _c02, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 23, vars: 25, consts: [["search_input", ""], ["menu", "matMenu"], [1, "bg-base-200", "mx-2", "flex", "items-center", "justify-between", "rounded-sm", "p-2", "text-sm"], [1, "h-1/2", "w-full", "flex-1", "space-y-4", "overflow-auto", "pt-4"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["btn", "", "name", "open-colleague-search", "matRipple", "", 1, "inverse", "m-2", "w-[calc(100%-1rem)]", 3, "click"], ["search", "", 1, "border-base-200", "bg-base-100", "absolute", "inset-x-2", "top-2", "bottom-16", "flex", "flex-col", "overflow-hidden", "rounded-sm", "border"], [1, "border-base-200", "w-full", "border-b", "p-2", 3, "ngModelChange", "ngModel", "placeholder"], ["icon", "", "name", "close-colleague-search", 1, "absolute", "top-0", "right-0", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto"], ["user", "", 1, "relative", "flex", "items-center", "space-x-2", "px-2"], [1, "relative", "text-xl"], [3, "user"], [1, "absolute", "right-1", "bottom-1", "h-3", "w-3", "rounded-full", "border", "border-white", 3, "bg-error", "bg-success", "bg-warning", "bg-neutral", "matTooltip"], [1, "w-1/2", "flex-1", "leading-tight"], [1, "truncate", 3, "matTooltip"], [1, "truncate", "text-sm", 3, "matTooltip"], [1, "truncate", "text-xs", "opacity-60"], ["icon", "", "name", "colleague-more", 1, "bg-base-200", "rounded-sm!", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["mat-menu-item", "", "name", "meeting-with-colleague", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], ["name", "remove-colleague", "mat-menu-item", "", 3, "click"], [1, "absolute", "right-1", "bottom-1", "h-3", "w-3", "rounded-full", "border", "border-white", 3, "matTooltip"], ["src", "assets/icons/no-contacts.svg"], [1, "text-center", "text-sm", "opacity-60"], ["matRipple", "", "name", "add-colleague", 1, "flex", "min-h-12", "w-full", "items-center", "space-x-2", "p-1", "text-left"], ["matRipple", "", "name", "add-colleague", 1, "flex", "min-h-12", "w-full", "items-center", "space-x-2", "p-1", "text-left", 3, "click"], [1, "relative", "text-base"], [1, "flex-1", "leading-tight"], [1, "truncate"], ["diameter", "32"]], template: function LandingColleaguesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 3);
    \u0275\u0275conditionalCreate(6, LandingColleaguesComponent_Conditional_6_Template, 3, 2);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275conditionalBranchCreate(8, LandingColleaguesComponent_Conditional_8_Template, 5, 3, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 5);
    \u0275\u0275listener("click", function LandingColleaguesComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openSearch());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 6)(13, "input", 7, 0);
    \u0275\u0275pipe(15, "async");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("ngModelChange", function LandingColleaguesComponent_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 8);
    \u0275\u0275listener("click", function LandingColleaguesComponent_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.show_search = false);
    });
    \u0275\u0275elementStart(18, "icon");
    \u0275\u0275text(19, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(20, LandingColleaguesComponent_Conditional_20_Template, 4, 3, "div", 9);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275conditionalBranchCreate(22, LandingColleaguesComponent_Conditional_22_Template, 5, 3, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_5_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 10, "APP.WORKPLACE.COLLEAGUES_COUNT", \u0275\u0275pureFunction1(23, _c12, ((tmp_1_0 = \u0275\u0275pipeBind1(3, 8, ctx.contacts)) == null ? null : tmp_1_0.length) || 0)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(((tmp_2_0 = \u0275\u0275pipeBind1(7, 13, ctx.contacts)) == null ? null : tmp_2_0.length) ? 6 : 8);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 15, "APP.WORKPLACE.COLLEAGUE_ADD"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", !ctx.show_search);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_5_0 = \u0275\u0275pipeBind1(15, 17, ctx.options)) == null ? null : tmp_5_0.search)("placeholder", \u0275\u0275pipeBind1(16, 19, "FORM.USER_SEARCH"));
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(21, 21, ctx.loading) ? 20 : 22);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatTooltipModule,
  MatTooltip,
  UserAvatarComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger
], styles: ["\n\n[user][_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=landing-colleagues.component.css.map */"] });
var LandingColleaguesComponent = _LandingColleaguesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingColleaguesComponent, [{
    type: Component,
    args: [{ selector: "landing-colleagues", template: `
        <div
            class="bg-base-200 mx-2 flex items-center justify-between rounded-sm p-2 text-sm"
        >
            <h2>
                {{
                    'APP.WORKPLACE.COLLEAGUES_COUNT'
                        | translate: { count: (contacts | async)?.length || 0 }
                }}
            </h2>
        </div>
        <div class="h-1/2 w-full flex-1 space-y-4 overflow-auto pt-4">
            @if ((contacts | async)?.length) {
                @for (user of contacts | async; track user) {
                    <div class="relative flex items-center space-x-2 px-2" user>
                        <div class="relative text-xl">
                            <a-user-avatar [user]="user"></a-user-avatar>
                            @if (!user.outsideHours?.()) {
                                <div
                                    class="absolute right-1 bottom-1 h-3 w-3 rounded-full border border-white"
                                    [class.bg-error]="
                                        user.location === 'aol' ||
                                        user.location === 'ooo'
                                    "
                                    [class.bg-success]="user.location === 'wfo'"
                                    [class.bg-warning]="user.location === 'wfh'"
                                    [class.bg-neutral]="!user.location"
                                    [matTooltip]="user.location_name"
                                ></div>
                            }
                        </div>
                        <div class="w-1/2 flex-1 leading-tight">
                            <div class="truncate" [matTooltip]="user.name">
                                {{ user.name }}
                            </div>
                            <div
                                class="truncate text-sm"
                                [matTooltip]="user.organisation"
                            >
                                {{ user.organisation }}
                            </div>
                            <div class="truncate text-xs opacity-60">
                                {{ user.location_name }}
                            </div>
                        </div>
                        <button
                            icon
                            name="colleague-more"
                            class="bg-base-200 rounded-sm!"
                            [matMenuTriggerFor]="menu"
                        >
                            <icon>more_horiz</icon>
                        </button>
                        <mat-menu #menu="matMenu" xPosition="before">
                            <button
                                mat-menu-item
                                name="meeting-with-colleague"
                                (click)="newMeeting(user)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">today</icon>
                                    <div>
                                        {{
                                            'APP.WORKPLACE.COLLEAGUE_NEW_MEETING'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                            <button
                                name="remove-colleague"
                                mat-menu-item
                                (click)="removeUser(user)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">cancel</icon>
                                    <div>
                                        {{
                                            'APP.WORKPLACE.COLLEAGUE_REMOVE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        </mat-menu>
                    </div>
                }
            } @else {
                <div
                    class="flex h-full w-full flex-col items-center justify-center space-y-2 p-8"
                >
                    <img src="assets/icons/no-contacts.svg" />
                    <p class="text-center text-sm opacity-60">
                        {{ 'APP.WORKPLACE.COLLEAGUES_EMPTY' | translate }}
                    </p>
                </div>
            }
        </div>
        <button
            btn
            name="open-colleague-search"
            matRipple
            class="inverse m-2 w-[calc(100%-1rem)]"
            (click)="openSearch()"
        >
            {{ 'APP.WORKPLACE.COLLEAGUE_ADD' | translate }}
        </button>
        <div
            search
            [class.hidden]="!show_search"
            class="border-base-200 bg-base-100 absolute inset-x-2 top-2 bottom-16 flex flex-col overflow-hidden rounded-sm border"
        >
            <input
                #search_input
                [ngModel]="(options | async)?.search"
                (ngModelChange)="updateSearch($event)"
                [placeholder]="'FORM.USER_SEARCH' | translate"
                class="border-base-200 w-full border-b p-2"
            />
            <button
                icon
                name="close-colleague-search"
                class="absolute top-0 right-0"
                (click)="show_search = false"
            >
                <icon>close</icon>
            </button>
            @if (!(loading | async)) {
                <div class="flex h-1/2 flex-1 flex-col space-y-2 overflow-auto">
                    @if ((search_results | async)?.length) {
                        @for (user of search_results | async; track user) {
                            <button
                                matRipple
                                name="add-colleague"
                                class="flex min-h-12 w-full items-center space-x-2 p-1 text-left"
                                (click)="addUser(user)"
                            >
                                <div class="relative text-base">
                                    <a-user-avatar
                                        [user]="user"
                                    ></a-user-avatar>
                                    <!-- <div
                      class="rounded-full h-3 w-3 border border-white absolute bottom-1 right-1"
                      [class.bg-error]="!user.location"
                      [class.bg-success]="user.location"
                    ></div> -->
                                </div>
                                <div class="flex-1 leading-tight">
                                    <div class="truncate">{{ user.name }}</div>
                                    <div class="truncate text-xs opacity-60">
                                        {{ user.organisation || user.email }}
                                    </div>
                                </div>
                            </button>
                        }
                    } @else {
                        <div
                            class="flex h-full w-full flex-col items-center justify-center space-y-2 p-8"
                        >
                            <p class="text-center text-sm opacity-60">
                                {{
                                    !(options | async)?.search
                                        ? ('APP.WORKPLACE.COLLEAGUE_SEARCH_EMPTY'
                                          | translate)
                                        : ('APP.WORKPLACE.COLLEAGUE_SEARCH_EMPTY'
                                          | translate
                                              : {
                                                    text: (options | async)
                                                        ?.search,
                                                })
                                }}
                            </p>
                        </div>
                    }
                </div>
            } @else {
                <div
                    class="flex h-full w-full flex-col items-center justify-center space-y-2 p-8"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p class="text-center text-sm opacity-60">
                        {{
                            'APP.WORKPLACE.COLLEAGUE_SEARCH_LOADING' | translate
                        }}
                    </p>
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      UserAvatarComponent,
      FormsModule,
      MatMenuModule
    ], styles: ["/* angular:styles/component:css;ada4d8e106525fc2a6174594c2f22a46ab6eb32f3e34b0dc3ada2058cacb89f7;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/landing/landing-colleagues.component.ts */\n[user]:hover button {\n  opacity: 1;\n}\n:host {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=landing-colleagues.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingColleaguesComponent, { className: "LandingColleaguesComponent", filePath: "apps/workplace/src/app/landing/landing-colleagues.component.ts", lineNumber: 243 });
})();

// apps/workplace/src/app/landing/landing-favourites.component.ts
var _c03 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item || $index;
function LandingFavouritesComponent_Conditional_6_For_1_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const space_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275property("source", space_r2.images[0]);
  }
}
function LandingFavouritesComponent_Conditional_6_For_1_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
}
function LandingFavouritesComponent_Conditional_6_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    \u0275\u0275conditionalCreate(3, LandingFavouritesComponent_Conditional_6_For_1_Conditional_3_Conditional_3_Template, 1, 1, "img", 7)(4, LandingFavouritesComponent_Conditional_6_For_1_Conditional_3_Conditional_4_Template, 1, 0, "img", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11)(9, "icon", 12);
    \u0275\u0275text(10, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 14)(14, "icon", 12);
    \u0275\u0275text(15, " people ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "button", 15);
    \u0275\u0275listener("click", function LandingFavouritesComponent_Conditional_6_For_1_Conditional_3_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const item_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.newSpaceMeeting(item_r3));
    });
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 16)(23, "icon");
    \u0275\u0275text(24, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "mat-menu", 17, 0)(27, "button", 18);
    \u0275\u0275listener("click", function LandingFavouritesComponent_Conditional_6_For_1_Conditional_3_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const item_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeFavourite("space", item_r3));
    });
    \u0275\u0275elementStart(28, "div", 19)(29, "icon", 20);
    \u0275\u0275text(30, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const menu_r5 = \u0275\u0275reference(26);
    const item_r3 = \u0275\u0275nextContext().$implicit;
    const space_r2 = \u0275\u0275readContextLet(0);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(space_r2.images.length ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", space_r2.display_name || space_r2.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (tmp_16_0 = ctx_r3.level(space_r2)) == null ? null : tmp_16_0.display_name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 8, "APP.WORKPLACE.CAPACITY", \u0275\u0275pureFunction1(15, _c03, space_r2.capacity || 2)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.isClosed(item_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 11, "COMMON.BOOK"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r5);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 13, "APP.WORKPLACE.FAVOURITES_REMOVE"), " ");
  }
}
function LandingFavouritesComponent_Conditional_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "space");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalCreate(3, LandingFavouritesComponent_Conditional_6_For_1_Conditional_3_Template, 34, 17, "div", 4);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const space_r6 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, item_r3)));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((space_r6 == null ? null : space_r6.id) ? 3 : -1);
  }
}
function LandingFavouritesComponent_Conditional_6_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", item_r8 == null ? null : item_r8.images[0]);
  }
}
function LandingFavouritesComponent_Conditional_6_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 21);
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", "assets/icons/" + (item_r8.type === "desk" ? "desk" : "car") + "-placeholder.svg", \u0275\u0275sanitizeUrl);
  }
}
function LandingFavouritesComponent_Conditional_6_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    \u0275\u0275conditionalCreate(3, LandingFavouritesComponent_Conditional_6_For_3_Conditional_3_Template, 1, 1, "img", 7)(4, LandingFavouritesComponent_Conditional_6_For_3_Conditional_4_Template, 1, 1, "img", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11)(9, "icon", 12);
    \u0275\u0275text(10, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "button", 23);
    \u0275\u0275listener("click", function LandingFavouritesComponent_Conditional_6_For_3_Template_button_click_13_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.newBooking(item_r8.type, item_r8));
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 24)(17, "icon");
    \u0275\u0275text(18, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-menu", 17, 0)(21, "button", 18);
    \u0275\u0275listener("click", function LandingFavouritesComponent_Conditional_6_For_3_Template_button_click_21_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeFavourite(item_r8.type, item_r8.id));
    });
    \u0275\u0275elementStart(22, "div", 19)(23, "icon", 20);
    \u0275\u0275text(24, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 25);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const menu_r9 = \u0275\u0275reference(20);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((item_r8 == null ? null : item_r8.images == null ? null : item_r8.images.length) ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (item_r8 == null ? null : item_r8.display_name) || (item_r8 == null ? null : item_r8.name) || (item_r8 == null ? null : item_r8.id), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", item_r8 == null ? null : item_r8.zone == null ? null : item_r8.zone.display_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 6, "COMMON.BOOK"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r9);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 8, "APP.WORKPLACE.FAVOURITES_REMOVE"), " ");
  }
}
function LandingFavouritesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LandingFavouritesComponent_Conditional_6_For_1_Template, 4, 6, null, null, _forTrack0);
    \u0275\u0275repeaterCreate(2, LandingFavouritesComponent_Conditional_6_For_3_Template, 28, 10, "div", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(4, "async");
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r3.spaces);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(4, 0, ctx_r3.assets));
  }
}
function LandingFavouritesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "img", 26);
    \u0275\u0275elementStart(2, "p", 27);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.WORKPLACE.FAVOURITES_EMPTY"), " ");
  }
}
var EMPTY = [];
var _LandingFavouritesComponent = class _LandingFavouritesComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._space_pipe = inject(SpacePipe);
    this._event_form = inject(EventFormService);
    this._booking_form = inject(BookingFormService);
    this._router = inject(Router);
    this._change = new BehaviorSubject(0);
    this.assets = combineLatest([
      this._booking_form.loadResourceList("desks"),
      this._booking_form.loadResourceList("parking-spaces"),
      this._change
    ]).pipe(map(([desks, parking]) => {
      return [
        ...desks.filter(({ id }) => this.desks.includes(id)).map((_) => __spreadProps(__spreadValues({}, _), { type: "desk" })),
        ...parking.filter(({ id }) => this.parking_spaces.includes(id)).map((_) => __spreadProps(__spreadValues({}, _), { type: "parking" }))
      ];
    }), tap((_) => console.log(_)), shareReplay(1));
  }
  get spaces() {
    return this._settings.get("favourite_spaces") || EMPTY;
  }
  get desks() {
    return this._settings.get(FAV_DESK_KEY) || EMPTY;
  }
  get parking_spaces() {
    return this._settings.get(FAV_PARKING_KEY) || EMPTY;
  }
  get locker_banks() {
    return this._settings.get(FAV_LOCKER_KEY) || EMPTY;
  }
  level(space) {
    return this._org.levelWithID(space?.zones || []);
  }
  isClosed(id) {
    if (!this._room_alerts)
      return false;
    return this._room_alerts[id] ? this._room_alerts[id][0] === "closed" : false;
  }
  async ngOnInit() {
    this._room_alerts = await lastValueFrom(Xu(this._org.organisation.id, "room_alerts").pipe(map((v) => v.details)));
  }
  removeFavourite(type, id) {
    let fav_list = this.spaces;
    let key = "favourite_spaces";
    switch (type) {
      case "desk":
        fav_list = this.desks;
        key = FAV_DESK_KEY;
        break;
      case "parking":
        fav_list = this.parking_spaces;
        key = FAV_PARKING_KEY;
        break;
      case "locker":
        fav_list = this.locker_banks;
        key = FAV_LOCKER_KEY;
        break;
    }
    this._settings.saveUserSetting(key, fav_list.filter((_) => _ !== id));
    this._change.next(Date.now());
  }
  async newSpaceMeeting(id) {
    const space = await this._space_pipe.transform(id);
    if (!space)
      return;
    this._event_form.newForm();
    if (this._settings.get("app.new_features")) {
      this._router.navigate(["/book", "meeting"]);
    } else {
      this._router.navigate(["/book", "spaces"]);
    }
    setTimeout(() => {
      this._event_form.form.patchValue({ resources: [space] });
    }, 300);
  }
  async newBooking(type, item) {
    if (!item)
      return;
    if (this._settings.get("app.new_features")) {
      this._router.navigate([
        "/book",
        type === "desk" ? "desk" : type === "locker" ? "locker" : "parking"
      ]);
    } else {
      this._router.navigate([
        "/book",
        type === "desk" ? "desks" : type === "locker" ? "locker" : "parking"
      ]);
    }
    setTimeout(() => {
      this._booking_form.newForm(type);
      this._booking_form.setOptions({ type });
      this._booking_form.form.patchValue({
        resources: [item],
        asset_id: item.id,
        booking_type: type
      });
    }, 100);
  }
};
_LandingFavouritesComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275LandingFavouritesComponent_BaseFactory;
  return function LandingFavouritesComponent_Factory(__ngFactoryType__) {
    return (\u0275LandingFavouritesComponent_BaseFactory || (\u0275LandingFavouritesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LandingFavouritesComponent)))(__ngFactoryType__ || _LandingFavouritesComponent);
  };
})();
_LandingFavouritesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingFavouritesComponent, selectors: [["landing-favourites"]], features: [\u0275\u0275ProvidersFeature([SpacePipe]), \u0275\u0275InheritDefinitionFeature], decls: 9, vars: 11, consts: [["menu", "matMenu"], [1, "bg-base-200", "mx-2", "flex", "items-center", "justify-between", "rounded-sm", "p-2", "text-sm"], [1, "divide-base-200", "h-1/2", "w-full", "flex-1", "space-y-2", "divide-y", "overflow-auto", "pt-4"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["item", "", 1, "relative", "mx-2", "flex", "flex-col", "items-center", "space-y-2", "pt-2"], [1, "relative", "flex", "w-full", "items-center", "space-x-2"], [1, "bg-base-300", "relative", "flex", "h-16", "w-16", "items-center", "justify-center", "overflow-hidden", "rounded-sm"], ["auth", "", 1, "absolute", "top-1/2", "left-1/2", "min-h-full", "min-w-full", "-translate-x-1/2", "-translate-y-1/2", "object-cover", 3, "source"], ["src", "assets/icons/room-placeholder.svg", 1, "m-auto"], [1, "flex", "h-16", "w-1/2", "flex-1", "flex-col", "justify-center", "space-y-1"], [1, "w-full", "truncate", "pr-12"], [1, "flex", "items-center", "space-x-1", "text-xs", "opacity-60"], [1, "text-blue-500"], [1, "w-1/2", "flex-1", "truncate"], [1, "flex", "items-center", "space-x-2", "truncate", "text-xs", "opacity-60"], ["btn", "", "name", "book-favourite", "matRipple", "", 1, "inverse", "w-full", 3, "click", "disabled"], ["icon", "", "name", "favourite-more", 1, "bg-base-200", "absolute", "top-2", "right-0", "m-0!", "rounded-sm!", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["name", "landing-remove-favourite", "mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-error", "text-2xl"], [1, "m-auto", 3, "src"], [1, "truncate"], ["btn", "", "name", "book-favourite", "matRipple", "", 1, "inverse", "w-full", 3, "click"], ["icon", "", "name", "favourite-more", 1, "bg-base-200", "absolute", "top-22", "right-0", "m-0!", "rounded-sm!", 3, "matMenuTriggerFor"], [1, "pr-4"], ["src", "assets/icons/no-favourites.svg"], [1, "text-center", "text-sm", "opacity-60"]], template: function LandingFavouritesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 2);
    \u0275\u0275conditionalCreate(6, LandingFavouritesComponent_Conditional_6_Template, 5, 2);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275conditionalBranchCreate(8, LandingFavouritesComponent_Conditional_8_Template, 5, 3, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_1_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 4, "APP.WORKPLACE.FAVOURITES_COUNT", \u0275\u0275pureFunction1(9, _c03, ((ctx.spaces == null ? null : ctx.spaces.length) || 0) + ((tmp_0_0 = \u0275\u0275pipeBind1(3, 2, ctx.assets)) == null ? null : tmp_0_0.length))), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional((ctx.spaces == null ? null : ctx.spaces.length) || ((tmp_1_0 = \u0275\u0275pipeBind1(7, 7, ctx.assets)) == null ? null : tmp_1_0.length) ? 6 : 8);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  SpacePipe,
  AuthenticatedImageDirective
], styles: ["\n\n[user][_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=landing-favourites.component.css.map */"] });
var LandingFavouritesComponent = _LandingFavouritesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingFavouritesComponent, [{
    type: Component,
    args: [{ selector: "landing-favourites", template: `
        <div
            class="bg-base-200 mx-2 flex items-center justify-between rounded-sm p-2 text-sm"
        >
            <h2>
                {{
                    'APP.WORKPLACE.FAVOURITES_COUNT'
                        | translate
                            : {
                                  count:
                                      (spaces?.length || 0) +
                                      (assets | async)?.length,
                              }
                }}
            </h2>
        </div>
        <div
            class="divide-base-200 h-1/2 w-full flex-1 space-y-2 divide-y overflow-auto pt-4"
        >
            @if (spaces?.length || (assets | async)?.length) {
                @for (item of spaces; track item || $index) {
                    @let space = item | space | async;
                    @if (space?.id) {
                        <div
                            class="relative mx-2 flex flex-col items-center space-y-2 pt-2"
                            item
                        >
                            <div
                                class="relative flex w-full items-center space-x-2"
                            >
                                <div
                                    class="bg-base-300 relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-sm"
                                >
                                    @if (space.images.length) {
                                        <img
                                            auth
                                            class="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                                            [source]="space.images[0]"
                                        />
                                    } @else {
                                        <img
                                            class="m-auto"
                                            src="assets/icons/room-placeholder.svg"
                                        />
                                    }
                                </div>
                                <div
                                    class="flex h-16 w-1/2 flex-1 flex-col justify-center space-y-1"
                                >
                                    <div class="w-full truncate pr-12">
                                        {{ space.display_name || space.name }}
                                    </div>
                                    <div
                                        class="flex items-center space-x-1 text-xs opacity-60"
                                    >
                                        <icon class="text-blue-500">place</icon>
                                        <div class="w-1/2 flex-1 truncate">
                                            {{ level(space)?.display_name }}
                                        </div>
                                    </div>
                                    <div
                                        class="flex items-center space-x-2 truncate text-xs opacity-60"
                                    >
                                        <icon class="text-blue-500">
                                            people
                                        </icon>
                                        <div>
                                            {{
                                                'APP.WORKPLACE.CAPACITY'
                                                    | translate
                                                        : {
                                                              count:
                                                                  space.capacity ||
                                                                  2,
                                                          }
                                            }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                btn
                                name="book-favourite"
                                matRipple
                                class="inverse w-full"
                                [disabled]="isClosed(item)"
                                (click)="newSpaceMeeting(item)"
                            >
                                {{ 'COMMON.BOOK' | translate }}
                            </button>
                            <button
                                icon
                                name="favourite-more"
                                [matMenuTriggerFor]="menu"
                                class="bg-base-200 absolute top-2 right-0 m-0! rounded-sm!"
                            >
                                <icon>more_horiz</icon>
                            </button>
                            <mat-menu #menu="matMenu" xPosition="before">
                                <!-- <button
                    mat-menu-item
                    class="flex items-center space-x-2"
                    >
                    <icon class="text-2xl">info</icon>
                    <div>{{ 'APP.WORKPLACE.VIEW_DETAILS' | translate }}</div>
                  </button> -->
                                <button
                                    name="landing-remove-favourite"
                                    mat-menu-item
                                    (click)="removeFavourite('space', item)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-error text-2xl"
                                            >delete</icon
                                        >
                                        <div>
                                            {{
                                                'APP.WORKPLACE.FAVOURITES_REMOVE'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            </mat-menu>
                        </div>
                    }
                }
                @for (item of assets | async; track item) {
                    <div
                        class="relative mx-2 flex flex-col items-center space-y-2 pt-2"
                        item
                    >
                        <div
                            class="relative flex w-full items-center space-x-2"
                        >
                            <div
                                class="bg-base-300 relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-sm"
                            >
                                @if (item?.images?.length) {
                                    <img
                                        auth
                                        class="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                                        [source]="item?.images[0]"
                                    />
                                } @else {
                                    <img
                                        class="m-auto"
                                        [src]="
                                            'assets/icons/' +
                                            (item.type === 'desk'
                                                ? 'desk'
                                                : 'car') +
                                            '-placeholder.svg'
                                        "
                                    />
                                }
                            </div>
                            <div
                                class="flex h-16 w-1/2 flex-1 flex-col justify-center space-y-1"
                            >
                                <div class="truncate">
                                    {{
                                        item?.display_name ||
                                            item?.name ||
                                            item?.id
                                    }}
                                </div>
                                <div
                                    class="flex items-center space-x-1 text-xs opacity-60"
                                >
                                    <icon class="text-blue-500">place</icon>
                                    <div class="w-1/2 flex-1 truncate">
                                        {{ item?.zone?.display_name }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            btn
                            name="book-favourite"
                            matRipple
                            class="inverse w-full"
                            (click)="newBooking(item.type, item)"
                        >
                            {{ 'COMMON.BOOK' | translate }}
                        </button>
                        <button
                            icon
                            name="favourite-more"
                            [matMenuTriggerFor]="menu"
                            class="bg-base-200 absolute top-22 right-0 m-0! rounded-sm!"
                        >
                            <icon>more_horiz</icon>
                        </button>
                        <mat-menu #menu="matMenu" xPosition="before">
                            <!-- <button
                  mat-menu-item
                  class="flex items-center space-x-2"
                  >
                  <div class="flex items-center space-x-2">
                    <icon class="text-2xl">info</icon>
                    <div>{{ 'APP.WORKPLACE.VIEW_DETAILS' | translate }}</div>
                  </div>
                </button> -->
                            <button
                                name="landing-remove-favourite"
                                mat-menu-item
                                (click)="removeFavourite(item.type, item.id)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-error text-2xl">
                                        delete
                                    </icon>
                                    <div class="pr-4">
                                        {{
                                            'APP.WORKPLACE.FAVOURITES_REMOVE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        </mat-menu>
                    </div>
                }
            } @else {
                <div
                    class="flex h-full w-full flex-col items-center justify-center space-y-2 p-8"
                >
                    <img src="assets/icons/no-favourites.svg" />
                    <p class="text-center text-sm opacity-60">
                        {{ 'APP.WORKPLACE.FAVOURITES_EMPTY' | translate }}
                    </p>
                </div>
            }
        </div>
    `, providers: [SpacePipe], imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatMenuModule,
      SpacePipe,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;ada4d8e106525fc2a6174594c2f22a46ab6eb32f3e34b0dc3ada2058cacb89f7;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/landing/landing-favourites.component.ts */\n[user]:hover button {\n  opacity: 1;\n}\n:host {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=landing-favourites.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingFavouritesComponent, { className: "LandingFavouritesComponent", filePath: "apps/workplace/src/app/landing/landing-favourites.component.ts", lineNumber: 293 });
})();

// apps/workplace/src/app/landing/landing-quick-book.component.ts
function LandingQuickBookComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 8)(2, "mat-spinner", 9);
    \u0275\u0275elementEnd();
  }
}
function LandingQuickBookComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("click", function LandingQuickBookComponent_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.book("desk"));
    });
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275element(2, "img", 5);
    \u0275\u0275conditionalCreate(3, LandingQuickBookComponent_Conditional_4_Conditional_3_Template, 3, 0, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.loading() === "desk" ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "APP.WORKPLACE.QUICK_LINK_DESKS"), " ");
  }
}
function LandingQuickBookComponent_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 8)(2, "mat-spinner", 9);
    \u0275\u0275elementEnd();
  }
}
function LandingQuickBookComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("click", function LandingQuickBookComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.book("parking"));
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275element(2, "img", 11);
    \u0275\u0275conditionalCreate(3, LandingQuickBookComponent_Conditional_5_Conditional_3_Template, 3, 0, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.loading() === "parking" ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "APP.WORKPLACE.QUICK_LINK_PARKING"), " ");
  }
}
var _LandingQuickBookComponent = class _LandingQuickBookComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._router = inject(Router);
    this._book_form = inject(BookingFormService);
    this.loading = signal("");
    this.features = settingSignal("features", []);
  }
  async book(type) {
    if (this.loading())
      return;
    if (type === "space")
      return;
    this.loading.set(type);
    this._book_form.newForm(type);
    this._book_form.setOptions({ type });
    const resources = await nextValueFrom(this._book_form.available_resources);
    if (!resources.length) {
      notifyError(`No ${type} available for the current building`);
      this.loading.set("");
      return;
    }
    this._book_form.form.patchValue({
      resources: [resources[0]],
      asset_id: resources[0].id,
      asset_name: resources[0].name
    });
    console.log("Resource:", resources[0], type);
    this.loading.set("");
    try {
      await this._book_form.confirmPost();
      this._router.navigate(["/book", type, "success"]);
    } catch {
    }
    this._book_form.form.reset();
  }
};
_LandingQuickBookComponent.\u0275fac = function LandingQuickBookComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LandingQuickBookComponent)();
};
_LandingQuickBookComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingQuickBookComponent, selectors: [["landing-quick-book"]], decls: 6, vars: 5, consts: [[1, "mb-2", "px-4", "font-medium", "sm:mb-4", "sm:text-lg"], [1, "mx-4", "mb-4", "flex", "w-[calc(100%-2rem)]", "snap-x", "space-x-2", "overflow-auto"], ["matRipple", "", 1, "border-base-200", "bg-base-100", "flex", "w-64", "min-w-64", "snap-start", "items-center", "space-x-4", "rounded-sm", "border", "p-2", "shadow-sm"], ["matRipple", "", 1, "border-base-200", "bg-base-100", "flex", "w-64", "min-w-64", "snap-start", "items-center", "space-x-4", "rounded-sm", "border", "p-2", "shadow-sm", 3, "click"], [1, "bg-base-200", "relative", "flex", "h-16", "min-w-16", "items-center", "justify-center", "rounded-sm"], ["src", "assets/icons/desk-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "text-xl"], [1, "bg-base-100", "absolute", "inset-0", "opacity-50"], ["diameter", "48"], [1, "bg-base-200", "flex", "h-16", "min-w-16", "items-center", "justify-center", "overflow-hidden", "rounded-sm"], ["src", "assets/icons/car-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"]], template: function LandingQuickBookComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1);
    \u0275\u0275conditionalCreate(4, LandingQuickBookComponent_Conditional_4_Template, 7, 4, "button", 2);
    \u0275\u0275conditionalCreate(5, LandingQuickBookComponent_Conditional_5_Template, 7, 4, "button", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "APP.WORKPLACE.ONECLICK_LINKS_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_1_0 = ctx.features()) == null ? null : tmp_1_0.includes("desks")) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.features().includes("parking") ? 5 : -1);
  }
}, dependencies: [TranslatePipe, MatRippleModule, MatRipple, MatProgressSpinnerModule, MatProgressSpinner], encapsulation: 2 });
var LandingQuickBookComponent = _LandingQuickBookComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingQuickBookComponent, [{
    type: Component,
    args: [{ selector: "landing-quick-book", template: `
        <h3 class="mb-2 px-4 font-medium sm:mb-4 sm:text-lg">
            {{ 'APP.WORKPLACE.ONECLICK_LINKS_HEADER' | translate }}
        </h3>
        <div
            class="mx-4 mb-4 flex w-[calc(100%-2rem)] snap-x space-x-2 overflow-auto"
        >
            @if (features()?.includes('desks')) {
                <button
                    matRipple
                    class="border-base-200 bg-base-100 flex w-64 min-w-64 snap-start items-center space-x-4 rounded-sm border p-2 shadow-sm"
                    (click)="book('desk')"
                >
                    <div
                        class="bg-base-200 relative flex h-16 min-w-16 items-center justify-center rounded-sm"
                    >
                        <img
                            class="h-1/2 w-1/2 object-contain object-center"
                            src="assets/icons/desk-placeholder.svg"
                        />
                        @if (loading() === 'desk') {
                            <div
                                class="absolute inset-0 flex items-center justify-center"
                            >
                                <div
                                    class="bg-base-100 absolute inset-0 opacity-50"
                                ></div>
                                <mat-spinner diameter="48"></mat-spinner>
                            </div>
                        }
                    </div>
                    <div class="text-xl">
                        {{ 'APP.WORKPLACE.QUICK_LINK_DESKS' | translate }}
                    </div>
                </button>
            }
            @if (features().includes('parking')) {
                <button
                    matRipple
                    class="border-base-200 bg-base-100 flex w-64 min-w-64 snap-start items-center space-x-4 rounded-sm border p-2 shadow-sm"
                    (click)="book('parking')"
                >
                    <div
                        class="bg-base-200 flex h-16 min-w-16 items-center justify-center overflow-hidden rounded-sm"
                    >
                        <img
                            class="h-1/2 w-1/2 object-contain object-center"
                            src="assets/icons/car-placeholder.svg"
                        />
                        @if (loading() === 'parking') {
                            <div
                                class="absolute inset-0 flex items-center justify-center"
                            >
                                <div
                                    class="bg-base-100 absolute inset-0 opacity-50"
                                ></div>
                                <mat-spinner diameter="48"></mat-spinner>
                            </div>
                        }
                    </div>
                    <div class="text-xl">
                        {{ 'APP.WORKPLACE.QUICK_LINK_PARKING' | translate }}
                    </div>
                </button>
            }
        </div>
    `, imports: [TranslatePipe, MatRippleModule, MatProgressSpinnerModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingQuickBookComponent, { className: "LandingQuickBookComponent", filePath: "apps/workplace/src/app/landing/landing-quick-book.component.ts", lineNumber: 86 });
})();

// apps/workplace/src/app/landing/landing-quick-links.component.ts
var _c04 = () => ["/book", "meeting"];
var _c13 = () => ["/book", "desk"];
var _c22 = () => ["/book", "parking"];
var _c3 = () => ["/book", "locker"];
function LandingQuickLinksComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2)(1, "div", 3);
    \u0275\u0275element(2, "img", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c04));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.WORKPLACE.QUICK_LINK_ROOMS"), " ");
  }
}
function LandingQuickLinksComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2)(1, "div", 3);
    \u0275\u0275element(2, "img", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c13));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.WORKPLACE.QUICK_LINK_DESKS"), " ");
  }
}
function LandingQuickLinksComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2)(1, "div", 3);
    \u0275\u0275element(2, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c22));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.WORKPLACE.QUICK_LINK_PARKING"), " ");
  }
}
function LandingQuickLinksComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2)(1, "div", 3);
    \u0275\u0275element(2, "img", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.WORKPLACE.QUICK_LINK_LOCKERS"), " ");
  }
}
var _LandingQuickLinksComponent = class _LandingQuickLinksComponent {
  constructor() {
    this.features = settingSignal("features", []);
  }
};
_LandingQuickLinksComponent.\u0275fac = function LandingQuickLinksComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LandingQuickLinksComponent)();
};
_LandingQuickLinksComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingQuickLinksComponent, selectors: [["landing-quick-links"]], decls: 8, vars: 7, consts: [[1, "mb-2", "px-4", "font-medium", "sm:mb-4", "sm:text-lg"], [1, "mx-4", "mb-4", "flex", "w-[calc(100%-2rem)]", "snap-x", "space-x-2", "overflow-auto"], ["matRipple", "", 1, "border-base-200", "bg-base-100", "flex", "w-64", "min-w-64", "snap-start", "items-center", "space-x-4", "rounded-sm", "border", "p-2", "shadow-sm", 3, "routerLink"], [1, "bg-base-200", "flex", "h-16", "min-w-16", "items-center", "justify-center", "rounded-sm"], ["src", "assets/icons/room-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"], [1, "text-xl"], ["src", "assets/icons/desk-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"], ["src", "assets/icons/car-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"], ["src", "assets/icons/locker-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"]], template: function LandingQuickLinksComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1);
    \u0275\u0275conditionalCreate(4, LandingQuickLinksComponent_Conditional_4_Template, 6, 5, "a", 2);
    \u0275\u0275conditionalCreate(5, LandingQuickLinksComponent_Conditional_5_Template, 6, 5, "a", 2);
    \u0275\u0275conditionalCreate(6, LandingQuickLinksComponent_Conditional_6_Template, 6, 5, "a", 2);
    \u0275\u0275conditionalCreate(7, LandingQuickLinksComponent_Conditional_7_Template, 6, 5, "a", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, "APP.WORKPLACE.QUICK_LINKS_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.features().includes("spaces") ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.features().includes("desks") ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.features().includes("parking") ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.features().includes("lockers") ? 7 : -1);
  }
}, dependencies: [TranslatePipe, MatRippleModule, MatRipple, RouterModule, RouterLink], encapsulation: 2 });
var LandingQuickLinksComponent = _LandingQuickLinksComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingQuickLinksComponent, [{
    type: Component,
    args: [{ selector: "landing-quick-links", template: `
        <h3 class="mb-2 px-4 font-medium sm:mb-4 sm:text-lg">
            {{ 'APP.WORKPLACE.QUICK_LINKS_HEADER' | translate }}
        </h3>
        <div
            class="mx-4 mb-4 flex w-[calc(100%-2rem)] snap-x space-x-2 overflow-auto"
        >
            @if (features().includes('spaces')) {
                <a
                    matRipple
                    class="border-base-200 bg-base-100 flex w-64 min-w-64 snap-start items-center space-x-4 rounded-sm border p-2 shadow-sm"
                    [routerLink]="['/book', 'meeting']"
                >
                    <div
                        class="bg-base-200 flex h-16 min-w-16 items-center justify-center rounded-sm"
                    >
                        <img
                            class="h-1/2 w-1/2 object-contain object-center"
                            src="assets/icons/room-placeholder.svg"
                        />
                    </div>
                    <div class="text-xl">
                        {{ 'APP.WORKPLACE.QUICK_LINK_ROOMS' | translate }}
                    </div>
                </a>
            }
            @if (features().includes('desks')) {
                <a
                    matRipple
                    class="border-base-200 bg-base-100 flex w-64 min-w-64 snap-start items-center space-x-4 rounded-sm border p-2 shadow-sm"
                    [routerLink]="['/book', 'desk']"
                >
                    <div
                        class="bg-base-200 flex h-16 min-w-16 items-center justify-center rounded-sm"
                    >
                        <img
                            class="h-1/2 w-1/2 object-contain object-center"
                            src="assets/icons/desk-placeholder.svg"
                        />
                    </div>
                    <div class="text-xl">
                        {{ 'APP.WORKPLACE.QUICK_LINK_DESKS' | translate }}
                    </div>
                </a>
            }
            @if (features().includes('parking')) {
                <a
                    matRipple
                    class="border-base-200 bg-base-100 flex w-64 min-w-64 snap-start items-center space-x-4 rounded-sm border p-2 shadow-sm"
                    [routerLink]="['/book', 'parking']"
                >
                    <div
                        class="bg-base-200 flex h-16 min-w-16 items-center justify-center rounded-sm"
                    >
                        <img
                            class="h-1/2 w-1/2 object-contain object-center"
                            src="assets/icons/car-placeholder.svg"
                        />
                    </div>
                    <div class="text-xl">
                        {{ 'APP.WORKPLACE.QUICK_LINK_PARKING' | translate }}
                    </div>
                </a>
            }
            @if (features().includes('lockers')) {
                <a
                    matRipple
                    class="border-base-200 bg-base-100 flex w-64 min-w-64 snap-start items-center space-x-4 rounded-sm border p-2 shadow-sm"
                    [routerLink]="['/book', 'locker']"
                >
                    <div
                        class="bg-base-200 flex h-16 min-w-16 items-center justify-center rounded-sm"
                    >
                        <img
                            class="h-1/2 w-1/2 object-contain object-center"
                            src="assets/icons/locker-placeholder.svg"
                        />
                    </div>
                    <div class="text-xl">
                        {{ 'APP.WORKPLACE.QUICK_LINK_LOCKERS' | translate }}
                    </div>
                </a>
            }
        </div>
    `, imports: [TranslatePipe, MatRippleModule, RouterModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingQuickLinksComponent, { className: "LandingQuickLinksComponent", filePath: "apps/workplace/src/app/landing/landing-quick-links.component.ts", lineNumber: 97 });
})();

// apps/workplace/src/app/landing/landing-upcoming.component.ts
var _c05 = () => ["/your-bookings"];
var _forTrack02 = ($index, $item) => $item.id || $index;
function LandingUpcomingComponent_Conditional_12_For_1_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-card", 7);
  }
  if (rf & 2) {
    const event_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("event", event_r1)("show_day", true)("edit_fn", ctx_r1.edit_fn)("remove_fn", ctx_r1.remove_fn);
  }
}
function LandingUpcomingComponent_Conditional_12_For_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "booking-card", 8);
  }
  if (rf & 2) {
    const event_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("booking", event_r1)("show_day", true)("edit_fn", ctx_r1.edit_booking_fn)("remove_fn", ctx_r1.remove_fn)("end_fn", ctx_r1.end_fn);
  }
}
function LandingUpcomingComponent_Conditional_12_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LandingUpcomingComponent_Conditional_12_For_1_Case_0_Template, 1, 4, "event-card", 7)(1, LandingUpcomingComponent_Conditional_12_For_1_Case_1_Template, 1, 5, "booking-card", 8);
  }
  if (rf & 2) {
    let tmp_11_0;
    const event_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_11_0 = ctx_r1.type(event_r1)) === "event" ? 0 : tmp_11_0 === "booking" ? 1 : -1);
  }
}
function LandingUpcomingComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LandingUpcomingComponent_Conditional_12_For_1_Template, 2, 1, null, null, _forTrack02);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "slice");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(\u0275\u0275pipeBind3(3, 2, \u0275\u0275pipeBind1(2, 0, ctx_r1.upcoming_events), 0, 5));
  }
}
function LandingUpcomingComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementStart(2, "p", 10);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.WORKPLACE.UPCOMING_EMPTY"), " ");
  }
}
var _LandingUpcomingComponent = class _LandingUpcomingComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(LandingStateService);
    this._event_form = inject(EventFormService);
    this._booking_form = inject(BookingFormService);
    this._router = inject(Router);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this.upcoming_events = this._state.upcoming_events;
    this.edit_fn = (i) => this.edit(i);
    this.edit_booking_fn = (i) => this.editBooking(i);
    this.remove_fn = (i, s) => this.remove(i, s);
    this.end_fn = (i) => this.end(i);
  }
  type(event) {
    return event instanceof Booking ? "booking" : "event";
  }
  ngOnInit() {
    this.subscription("poll", this._state.pollUpcomingEvents());
  }
  async edit(event) {
    console.log("Edit Event:", event);
    this._router.navigate(["/book", "meeting", "form"]);
    if (event.creator !== event.mailbox) {
      event = (await lastValueFrom(queryEvents({
        period_start: event.event_start,
        period_end: event.event_end,
        ical_uid: event.ical_uid
      }))).find((_) => _.ical_uid === event.ical_uid) || event;
    }
    setTimeout(() => this._event_form.newForm(event), 300);
  }
  editBooking(event) {
    this._router.navigate(["/book", `${event.type}`]);
    this._booking_form.newForm(event.booking_type, event);
    setTimeout(() => {
      this._booking_form.form.patchValue({
        resources: [
          {
            id: event.asset_id,
            name: event.asset_name || event.description
          }
        ],
        asset_id: event.asset_id
      });
    }, 100);
  }
  async remove(item, remove_series = false) {
    const time = `${format(item.date, "dd MMM yyyy h:mma")}`;
    const resource_name = item instanceof CalendarEvent ? item.space?.display_name : item.asset_name || item.asset_id;
    const resp = await openConfirmModal({
      title: i18n("APP.WORKPLACE.SCHEDULE_REMOVE_TITLE"),
      content: i18n("APP.WORKPLACE.SCHEDULE_REMOVE_MSG", {
        name: resource_name,
        time
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (resp.reason !== "done")
      return;
    resp.loading(i18n("APP.WORKPLACE.SCHEDULE_REMOVE_LOADING"));
    await lastValueFrom((item instanceof CalendarEvent ? removeEvent : removeBooking)(item.id, {
      calendar: this._settings.get("app.events.use_bookings") ? null : currentUser()?.email,
      system_id: item.system?.id,
      instance: remove_series ? void 0 : !!item.instance,
      start_time: item.instance ? item.booking_start : void 0
    })).catch((e) => {
      notifyError(i18n("APP.WORKPLACE.SCHEDULE_REMOVE_ERROR", { error: e }));
      resp.close();
      throw e;
    });
    notifySuccess(i18n("APP.WORKPLACE.SCHEDULE_REMOVE_SUCCESS"));
    this._state.refreshUpcomingEvents();
    this._dialog.closeAll();
  }
  async end(item) {
    const time = `${format(item.date, "dd MMM yyyy h:mma")}`;
    const resource_name = item.asset_name || item.asset_id;
    const resp = await openConfirmModal({
      title: i18n("APP.WORKPLACE.SCHEDULE_END_TITLE"),
      content: i18n("APP.WORKPLACE.SCHEDULE_END_MSG", {
        name: resource_name,
        time
      }),
      icon: { content: "event_busy" }
    }, this._dialog);
    if (resp.reason !== "done")
      return;
    resp.loading(i18n("APP.WORKPLACE.SCHEDULE_END_LOADING"));
    await checkinBooking(item.id, false).toPromise().catch((e) => {
      notifyError(i18n("APP.WORKPLACE.SCHEDULE_END_ERROR", { error: e }));
      resp.close();
      throw e;
    });
    notifySuccess(i18n("APP.WORKPLACE.SCHEDULE_END_SUCCESS"));
    this._state.refreshUpcomingEvents();
    this._dialog.closeAll();
  }
};
_LandingUpcomingComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275LandingUpcomingComponent_BaseFactory;
  return function LandingUpcomingComponent_Factory(__ngFactoryType__) {
    return (\u0275LandingUpcomingComponent_BaseFactory || (\u0275LandingUpcomingComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LandingUpcomingComponent)))(__ngFactoryType__ || _LandingUpcomingComponent);
  };
})();
_LandingUpcomingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingUpcomingComponent, selectors: [["landing-upcoming"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 15, vars: 16, consts: [[1, "py-2"], [1, "mb-2", "flex", "items-center", "justify-between", "px-4", "sm:mb-4"], [1, "font-medium", "sm:text-lg"], ["btn", "", "name", "upcoming-view-all", 1, "inverse", "hidden", "sm:flex", 3, "routerLink"], ["name", "upcoming-view-all-mobile", 1, "inverse", "relative", "top-8", "flex", "text-blue-500", "underline", "sm:hidden", 3, "routerLink"], [1, "space-y-4", "px-4"], [1, "flex", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "p-8"], [3, "event", "show_day", "edit_fn", "remove_fn"], [3, "booking", "show_day", "edit_fn", "remove_fn", "end_fn"], ["src", "assets/img/no-events.svg", 1, "mr-4"], [1, "opacity-30"]], template: function LandingUpcomingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 4);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 5);
    \u0275\u0275conditionalCreate(12, LandingUpcomingComponent_Conditional_12_Template, 4, 6);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275conditionalBranchCreate(14, LandingUpcomingComponent_Conditional_14_Template, 5, 3, "div", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "APP.WORKPLACE.UPCOMING"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(14, _c05));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, "APP.WORKPLACE.UPCOMING_VIEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(15, _c05));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 10, "APP.WORKPLACE.UPCOMING_VIEW"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_5_0 = \u0275\u0275pipeBind1(13, 12, ctx.upcoming_events)) == null ? null : tmp_5_0.length) ? 12 : 14);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  SlicePipe,
  RouterModule,
  RouterLink,
  EventCardComponent,
  BookingCardComponent,
  TranslatePipe
], encapsulation: 2 });
var LandingUpcomingComponent = _LandingUpcomingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingUpcomingComponent, [{
    type: Component,
    args: [{ selector: "landing-upcoming", template: `
        <div class="py-2">
            <div class="mb-2 flex items-center justify-between px-4 sm:mb-4">
                <div class="font-medium sm:text-lg">
                    {{ 'APP.WORKPLACE.UPCOMING' | translate }}
                </div>
                <a
                    btn
                    name="upcoming-view-all"
                    class="inverse hidden sm:flex"
                    [routerLink]="['/your-bookings']"
                >
                    {{ 'APP.WORKPLACE.UPCOMING_VIEW' | translate }}
                </a>
                <a
                    name="upcoming-view-all-mobile"
                    class="inverse relative top-8 flex text-blue-500 underline sm:hidden"
                    [routerLink]="['/your-bookings']"
                >
                    {{ 'APP.WORKPLACE.UPCOMING_VIEW' | translate }}
                </a>
            </div>
            <div class="space-y-4 px-4">
                @if ((upcoming_events | async)?.length) {
                    @for (
                        event of upcoming_events | async | slice: 0 : 5;
                        track event.id || $index
                    ) {
                        @switch (type(event)) {
                            @case ('event') {
                                <event-card
                                    [event]="event"
                                    [show_day]="true"
                                    [edit_fn]="edit_fn"
                                    [remove_fn]="remove_fn"
                                ></event-card>
                            }
                            @case ('booking') {
                                <booking-card
                                    [booking]="event"
                                    [show_day]="true"
                                    [edit_fn]="edit_booking_fn"
                                    [remove_fn]="remove_fn"
                                    [end_fn]="end_fn"
                                ></booking-card>
                            }
                        }
                    }
                } @else {
                    <div
                        class="flex w-full flex-col items-center justify-center space-y-4 p-8"
                    >
                        <img src="assets/img/no-events.svg" class="mr-4" />
                        <p class="opacity-30">
                            {{ 'APP.WORKPLACE.UPCOMING_EMPTY' | translate }}
                        </p>
                    </div>
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      RouterModule,
      EventCardComponent,
      BookingCardComponent,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingUpcomingComponent, { className: "LandingUpcomingComponent", filePath: "apps/workplace/src/app/landing/landing-upcoming.component.ts", lineNumber: 104 });
})();

// apps/workplace/src/app/landing/landing.component.ts
var _c06 = (a0) => ({ name: a0 });
function LandingComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar", 0);
  }
}
function LandingComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function LandingComponent_Conditional_2_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.tab.set("people"));
    });
    \u0275\u0275elementStart(1, "div", 15)(2, "icon");
    \u0275\u0275text(3, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("inverse", ctx_r2.tab() !== "people");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "APP.WORKPLACE.COLLEAGUES"), " ");
  }
}
function LandingComponent_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "landing-colleagues");
  }
}
function LandingComponent_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "landing-favourites");
  }
}
function LandingComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 12);
    \u0275\u0275conditionalCreate(2, LandingComponent_Conditional_2_Conditional_2_Template, 7, 5, "button", 13);
    \u0275\u0275elementStart(3, "button", 14);
    \u0275\u0275listener("click", function LandingComponent_Conditional_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.tab.set("fav"));
    });
    \u0275\u0275elementStart(4, "div", 15)(5, "icon");
    \u0275\u0275text(6, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 16);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 17);
    \u0275\u0275conditionalCreate(11, LandingComponent_Conditional_2_Conditional_11_Template, 1, 0, "landing-colleagues");
    \u0275\u0275conditionalCreate(12, LandingComponent_Conditional_2_Conditional_12_Template, 1, 0, "landing-favourites");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.hide_colleagues() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("inverse", ctx_r2.tab() !== "fav");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "COMMON.FAVOURITES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.tab() === "people" && !ctx_r2.hide_colleagues() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.tab() === "fav" || ctx_r2.hide_colleagues() ? 12 : -1);
  }
}
function LandingComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_1_0 = ctx_r2.building()) == null ? null : tmp_1_0.address) || ((tmp_1_0 = ctx_r2.building()) == null ? null : tmp_1_0.display_name) || ((tmp_1_0 = ctx_r2.building()) == null ? null : tmp_1_0.name), " ");
  }
}
function LandingComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "landing-quick-links");
  }
}
function LandingComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "landing-quick-book");
  }
}
function LandingComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "footer-menu");
  }
}
var _LandingComponent = class _LandingComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.time = signal(0);
    this.tab = signal("people");
    this.hide_nav = signal(false);
    this.user = userSignal();
    this.building = signal(new Building());
    this.hide_landing_sidebar = settingSignal("hide_landing_sidebar");
    this.hide_colleagues = settingSignal("hide_colleagues");
    this.show_quick_links = settingSignal("show_quick_links");
    this.show_quick_book = settingSignal("show_quick_book");
    this.date = computed(() => startOfMinute(this.time() || Date.now()));
  }
  ngOnInit() {
    this.subscription("building", this._org.active_building.pipe(debounceTime(300)).subscribe(() => {
      this.hide_nav.set(localStorage.getItem("PlaceOS.hide_nav") === "true");
      this.building.set(this._org.building);
    }));
  }
};
_LandingComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275LandingComponent_BaseFactory;
  return function LandingComponent_Factory(__ngFactoryType__) {
    return (\u0275LandingComponent_BaseFactory || (\u0275LandingComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LandingComponent)))(__ngFactoryType__ || _LandingComponent);
  };
})();
_LandingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingComponent, selectors: [["app-landing"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 21, vars: 16, consts: [[1, "z-10"], [1, "bg-base-200", "flex", "h-1/2", "flex-1"], [1, "border-base-300", "bg-base-100", "relative", "hidden", "h-full", "w-[18rem]", "flex-col", "overflow-hidden", "border-r", "sm:flex"], [1, "z-0", "h-full", "w-1/2", "flex-1", "overflow-auto", "sm:px-4"], [1, "bg-brand-300", "sticky", "top-0", "z-50", "mb-4", "flex", "items-center", "justify-between", "overflow-hidden", "px-4", "shadow-sm", "sm:rounded-b"], [1, ""], [1, "font-medium", "sm:text-xl"], ["date", "", 1, "text-sm", "sm:text-base"], [1, "text-sm", "sm:text-base"], [1, "h-32", "pt-4"], ["src", "assets/img/landing.svg"], [1, "bg-base-200", "mx-4", "mb-2", "h-px", "w-[calc(100%-2rem)]"], [1, "flex", "items-center", "space-x-2", "p-2"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "inverse"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], [1, "flex", "items-center", "space-x-2", "capitalize"], [1, "pr-2"], [1, "h-1/2", "w-full", "flex-1"]], template: function LandingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LandingComponent_Conditional_0_Template, 1, 0, "topbar", 0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275conditionalCreate(2, LandingComponent_Conditional_2_Template, 13, 8, "div", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "header", 4)(5, "div", 5)(6, "div", 6);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 7);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, LandingComponent_Conditional_12_Template, 2, 1, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 9);
    \u0275\u0275element(14, "img", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, LandingComponent_Conditional_15_Template, 1, 0, "landing-quick-links");
    \u0275\u0275conditionalCreate(16, LandingComponent_Conditional_16_Template, 1, 0, "landing-quick-book");
    \u0275\u0275element(17, "landing-availability")(18, "div", 11)(19, "landing-upcoming");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(20, LandingComponent_Conditional_20_Template, 1, 0, "footer-menu");
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    \u0275\u0275conditional(!ctx.hide_nav() ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.hide_landing_sidebar() ? 2 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 8, "APP.WORKPLACE.WELCOME_MESSAGE", \u0275\u0275pureFunction1(14, _c06, (tmp_2_0 = ctx.user()) == null ? null : tmp_2_0.name)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 11, ctx.date(), "fullDate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_4_0 = ctx.building()) == null ? null : tmp_4_0.address) || ((tmp_4_0 = ctx.building()) == null ? null : tmp_4_0.name) ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.show_quick_links() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_quick_book() ? 16 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx.hide_nav() ? 20 : -1);
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  TopbarComponent,
  FooterMenuComponent,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  IconComponent,
  LandingColleaguesComponent,
  LandingFavouritesComponent,
  LandingQuickLinksComponent,
  LandingQuickBookComponent,
  LandingAvailabilityComponent,
  LandingUpcomingComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\nmain[_ngcontent-%COMP%] {\n  min-height: 50%;\n}\n/*# sourceMappingURL=landing.component.css.map */"] });
var LandingComponent = _LandingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingComponent, [{
    type: Component,
    args: [{ selector: "app-landing", template: `
        @if (!hide_nav()) {
            <topbar class="z-10" />
        }
        <div class="bg-base-200 flex h-1/2 flex-1">
            @if (!hide_landing_sidebar()) {
                <div
                    class="border-base-300 bg-base-100 relative hidden h-full w-[18rem] flex-col overflow-hidden border-r sm:flex"
                >
                    <div class="flex items-center space-x-2 p-2">
                        @if (!hide_colleagues()) {
                            <button
                                btn
                                matRipple
                                class="flex-1"
                                [class.inverse]="tab() !== 'people'"
                                (click)="tab.set('people')"
                            >
                                <div
                                    class="flex items-center space-x-2 capitalize"
                                >
                                    <icon>people</icon>
                                    <div class="pr-2">
                                        {{
                                            'APP.WORKPLACE.COLLEAGUES'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        }
                        <button
                            btn
                            matRipple
                            class="flex-1"
                            [class.inverse]="tab() !== 'fav'"
                            (click)="tab.set('fav')"
                        >
                            <div class="flex items-center space-x-2 capitalize">
                                <icon>favorite</icon>
                                <div class="pr-2">
                                    {{ 'COMMON.FAVOURITES' | translate }}
                                </div>
                            </div>
                        </button>
                    </div>
                    <div class="h-1/2 w-full flex-1">
                        @if (tab() === 'people' && !hide_colleagues()) {
                            <landing-colleagues></landing-colleagues>
                        }
                        @if (tab() === 'fav' || hide_colleagues()) {
                            <landing-favourites></landing-favourites>
                        }
                    </div>
                </div>
            }
            <div class="z-0 h-full w-1/2 flex-1 overflow-auto sm:px-4">
                <header
                    class="bg-brand-300 sticky top-0 z-50 mb-4 flex items-center justify-between overflow-hidden px-4 shadow-sm sm:rounded-b"
                >
                    <div class="">
                        <div class="font-medium sm:text-xl">
                            {{
                                'APP.WORKPLACE.WELCOME_MESSAGE'
                                    | translate: { name: user()?.name }
                            }}
                        </div>
                        <div date class="text-sm sm:text-base">
                            {{ date() | date: 'fullDate' }}
                        </div>
                        @if (building()?.address || building()?.name) {
                            <div class="text-sm sm:text-base">
                                {{
                                    building()?.address ||
                                        building()?.display_name ||
                                        building()?.name
                                }}
                            </div>
                        }
                    </div>
                    <div class="h-32 pt-4">
                        <img src="assets/img/landing.svg" />
                    </div>
                </header>
                @if (show_quick_links()) {
                    <landing-quick-links />
                }
                @if (show_quick_book()) {
                    <landing-quick-book />
                }
                <landing-availability />
                <div
                    class="bg-base-200 mx-4 mb-2 h-px w-[calc(100%-2rem)]"
                ></div>
                <landing-upcoming />
            </div>
        </div>
        @if (!hide_nav()) {
            <footer-menu />
        }
    `, imports: [
      CommonModule,
      TopbarComponent,
      FooterMenuComponent,
      MatRippleModule,
      TranslatePipe,
      IconComponent,
      LandingColleaguesComponent,
      LandingFavouritesComponent,
      LandingQuickLinksComponent,
      LandingQuickBookComponent,
      LandingAvailabilityComponent,
      LandingUpcomingComponent
    ], styles: ["/* angular:styles/component:css;c3f1a32da175ad5f52496a52568ea49026350ffb8e17368a99aa31f897afc846;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/landing/landing.component.ts */\n:host {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\nmain {\n  min-height: 50%;\n}\n/*# sourceMappingURL=landing.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "apps/workplace/src/app/landing/landing.component.ts", lineNumber: 160 });
})();

// apps/workplace/src/app/landing/landing.module.ts
var ROUTES = [{ path: "", component: LandingComponent }];
var _AppLandingModule = class _AppLandingModule {
};
_AppLandingModule.\u0275fac = function AppLandingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppLandingModule)();
};
_AppLandingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppLandingModule });
_AppLandingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [LandingComponent, RouterModule.forChild(ROUTES)] });
var AppLandingModule = _AppLandingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppLandingModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [LandingComponent, RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  AppLandingModule
};
//# sourceMappingURL=landing.module-EPI7R42F.js.map
