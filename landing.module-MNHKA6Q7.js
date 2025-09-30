import {
  ScheduleStateService
} from "./chunk-K5FCWXN4.js";
import {
  CalendarService
} from "./chunk-CBUH7WPC.js";
import {
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  Booking,
  BookingCardComponent,
  BookingFormService,
  CalendarEvent,
  CommonModule,
  DatePipe,
  DefaultValueAccessor,
  EventCardComponent,
  EventFormService,
  ExploreSpacesService,
  FAV_DESK_KEY,
  FAV_PARKING_KEY,
  FooterMenuComponent,
  FormsModule,
  IconComponent,
  MatDialog,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatProgressSpinner,
  MatRipple,
  MatTooltip,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgSwitch,
  NgSwitchCase,
  OrganisationService,
  Router,
  RouterLink,
  RouterModule,
  SettingsService,
  SharedComponentModule,
  SlicePipe,
  SpacePipe,
  StaffUser,
  TopbarComponent,
  TranslatePipe,
  UpperCasePipe,
  UserAvatarComponent,
  authority,
  catchError,
  checkinBooking,
  combineLatest,
  currentUser,
  debounceTime,
  filter,
  filterResourcesFromRules,
  first,
  format,
  getModule,
  isSameDay,
  map,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  queryUsers,
  removeBooking,
  removeEvent,
  requestSpacesForZone,
  searchStaff,
  shareReplay,
  showMetadata,
  showUser,
  startOfMinute,
  switchMap,
  tap,
  unique,
  updateMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵi18n,
  ɵɵi18nApply,
  ɵɵi18nExp,
  ɵɵi18nPostprocess,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-2W3IMO4G.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// apps/workplace/src/app/landing/landing-state.service.ts
var _LandingStateService = class _LandingStateService extends AsyncHandler {
  constructor(_calendar, _schedule, _org, _settings) {
    super();
    this._calendar = _calendar;
    this._schedule = _schedule;
    this._org = _org;
    this._settings = _settings;
    this._options = new BehaviorSubject({});
    this._loading = new BehaviorSubject("");
    this._loading_spaces = new BehaviorSubject(false);
    this._contacts = new BehaviorSubject([]);
    this._level_occupancy = new BehaviorSubject([]);
    this._booking_rules = this._org.active_building.pipe(filter((bld) => !!bld), switchMap((bld) => showMetadata(bld.id, `room_booking_rules`).pipe(catchError(() => of({ details: [] })))), map((_) => _?.details instanceof Array ? _.details : []), shareReplay(1));
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
      const binding = getModule(_.id, "Bookings").binding("status");
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
    this.search_fn = (q) => this._settings.get("app.basic_user_search") || this._settings.get("app.colleagues_require_auth") !== false ? queryUsers({ q, authority_id: authority()?.id }).pipe(map(({ data }) => data.map((_) => new StaffUser(_)))) : searchStaff(q);
    this.search_results = this._options.pipe(debounceTime(500), switchMap(({ search }) => {
      this._loading.next("Loading users...");
      return search ? this.search_fn(search).pipe(catchError(() => of([]))) : of([]);
    }), tap(() => this._loading.next("")), shareReplay(1));
    this.level_occupancy = this._level_occupancy.asObservable();
    this.init();
  }
  init() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this.updateContacts();
      this.subscription("building", this._org.active_building.pipe(filter((bld) => !!bld)).subscribe(() => {
        this.updateBuildingMetadata();
        this.updateOccupancy({});
      }));
      let sys_id = this._org.binding("area_management");
      if (!sys_id)
        return;
      const binding = getModule(sys_id, "AreaManagement").binding("overview");
      binding.listen().subscribe((d) => this.updateOccupancy(d || {}));
      binding.bind();
    });
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
  updateContacts() {
    return __async(this, null, function* () {
      const metadata = yield showMetadata(currentUser().id, "contacts").toPromise();
      const list = metadata.details instanceof Array ? metadata.details : [];
      const users = yield Promise.all(list.map((_) => showUser(_.email).toPromise()));
      this._contacts.next(users.map((i) => new StaffUser(i)));
    });
  }
  addContact(user) {
    return __async(this, null, function* () {
      let users = [...this._contacts.getValue()];
      users.push(user);
      users = unique(users, "email");
      yield updateMetadata(currentUser().id, {
        name: "contacts",
        description: "Contacts for the User",
        details: users
      }).toPromise();
      this.updateContacts();
    });
  }
  removeContact(user) {
    return __async(this, null, function* () {
      let users = [...this._contacts.getValue()];
      users = users.filter((u) => u.email !== user.email);
      yield updateMetadata(currentUser().id, {
        name: "contacts",
        description: "Contacts for the User",
        details: users
      }).toPromise();
      this.updateContacts();
    });
  }
  updateOccupancy(map2) {
    return __async(this, null, function* () {
      const levels = this._org.levelsForBuilding() || [];
      levels.sort((a, b) => map2[a.id]?.recommendation - map2[b.id]?.recommendation);
      this._level_occupancy.next(levels);
    });
  }
  updateBuildingMetadata() {
    return __async(this, null, function* () {
      this._level_occupancy.next([]);
      const occupancy = this._org.binding("occupancy");
      if (!occupancy)
        return;
      const { sys, module, index } = occupancy;
      const mod = getModule(sys, module, index);
      if (!mod)
        return;
      if (this._occupancy_binding) {
        this._occupancy_binding.unbind();
      }
      this._occupancy_binding = mod.binding("occupancy");
      this._occupancy_binding.bind();
      this.subscription("occupancy_binding", this._occupancy_binding.listen().subscribe((value) => {
        const levels = Object.keys(value).map((key) => __spreadValues({
          id: key
        }, value[key]));
        levels.sort((a, b) => a.recommendation_factor - b.recommendation_factor);
        this._level_occupancy.next(levels.map((i) => this._org.levelWithID([i.id])));
      }));
    });
  }
};
_LandingStateService.\u0275fac = function LandingStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LandingStateService)(\u0275\u0275inject(CalendarService), \u0275\u0275inject(ScheduleStateService), \u0275\u0275inject(OrganisationService), \u0275\u0275inject(SettingsService));
};
_LandingStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LandingStateService, factory: _LandingStateService.\u0275fac, providedIn: "root" });
var LandingStateService = _LandingStateService;

// apps/workplace/src/app/landing/landing-availability.component.ts
var _c0 = () => ["/explore"];
var _c1 = (a0) => ({ level: a0 });
function LandingAvailabilityComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "WPA.AVAILABLE_NOW"), " ");
  }
}
function LandingAvailabilityComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "WPA.SPACES"));
  }
}
function LandingAvailabilityComponent_div_3_button_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 18);
  }
  if (rf & 2) {
    const lvl_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", lvl_r1 == null ? null : lvl_r1.images[0]);
  }
}
function LandingAvailabilityComponent_div_3_button_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 19);
  }
}
function LandingAvailabilityComponent_div_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 11)(1, "div", 12);
    \u0275\u0275template(2, LandingAvailabilityComponent_div_3_button_1_img_2_Template, 1, 1, "img", 13)(3, LandingAvailabilityComponent_div_3_button_1_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14)(6, "div", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16)(9, "app-icon", 17);
    \u0275\u0275text(10, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const lvl_r1 = ctx.$implicit;
    const placeholder_r2 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c0))("queryParams", \u0275\u0275pureFunction1(7, _c1, lvl_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", lvl_r1 == null ? null : lvl_r1.images == null ? null : lvl_r1.images.length)("ngIfElse", placeholder_r2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", lvl_r1.display_name || lvl_r1.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_10_0 = ctx_r2.building(lvl_r1.parent_id)) == null ? null : tmp_10_0.display_name) || ((tmp_10_0 = ctx_r2.building(lvl_r1.parent_id)) == null ? null : tmp_10_0.name));
  }
}
function LandingAvailabilityComponent_div_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "WPA.NO_FREE_SPACES"), " ");
  }
}
function LandingAvailabilityComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, LandingAvailabilityComponent_div_3_button_1_Template, 13, 9, "button", 9);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, LandingAvailabilityComponent_div_3_span_3_Template, 3, 3, "span", 10);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 2, ctx_r2.levels_free));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(4, 4, ctx_r2.levels_free).length);
  }
}
function LandingAvailabilityComponent_div_4_mat_spinner_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 22);
  }
}
function LandingAvailabilityComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, LandingAvailabilityComponent_div_4_mat_spinner_4_Template, 1, 0, "mat-spinner", 21);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "WPA.ROOMS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(5, 4, ctx_r2.loading_spaces));
  }
}
function LandingAvailabilityComponent_div_5_button_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 18);
    \u0275\u0275pipe(1, "space");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    let tmp_5_0;
    const space_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", (tmp_5_0 = \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, space_r5.id))) == null ? null : tmp_5_0.images[0]);
  }
}
function LandingAvailabilityComponent_div_5_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function LandingAvailabilityComponent_div_5_button_1_Template_button_click_0_listener() {
      const space_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.book(space_r5));
    });
    \u0275\u0275elementStart(1, "div", 12);
    \u0275\u0275template(2, LandingAvailabilityComponent_div_5_button_1_img_2_Template, 3, 5, "img", 13);
    \u0275\u0275pipe(3, "space");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14)(6, "div", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16)(9, "app-icon", 17);
    \u0275\u0275text(10, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_7_0;
    const space_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    const space_placeholder_r6 = \u0275\u0275reference(7);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_4_0 = \u0275\u0275pipeBind1(4, 6, \u0275\u0275pipeBind1(3, 4, space_r5.id))) == null ? null : tmp_4_0.images == null ? null : tmp_4_0.images.length)("ngIfElse", space_placeholder_r6);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", space_r5.display_name || space_r5.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_7_0 = ctx_r2.level(space_r5.zones)) == null ? null : tmp_7_0.display_name) || ((tmp_7_0 = ctx_r2.level(space_r5.zones)) == null ? null : tmp_7_0.name));
  }
}
function LandingAvailabilityComponent_div_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "WPA.NO_FREE_ROOMS"), " ");
  }
}
function LandingAvailabilityComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, LandingAvailabilityComponent_div_5_button_1_Template, 13, 8, "button", 23);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, LandingAvailabilityComponent_div_5_span_3_Template, 3, 3, "span", 10);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 3, ctx_r2.space_list))("ngForTrackBy", ctx_r2.trackBySpaceId);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_4_0 = \u0275\u0275pipeBind1(4, 5, ctx_r2.space_list)) == null ? null : tmp_4_0.length));
  }
}
function LandingAvailabilityComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 25);
  }
}
var _LandingAvailabilityComponent = class _LandingAvailabilityComponent {
  trackBySpaceId(index, space) {
    return space.id;
  }
  level(zones) {
    return this._org.levelWithID(zones);
  }
  building(id) {
    return this._org.buildings.find((bld) => bld.id === id);
  }
  get hide_spaces() {
    return this._settings.get("app.hide_landing_spaces");
  }
  get hide_rooms() {
    return this._settings.get("app.hide_landing_rooms");
  }
  constructor(_state, _org, _settings, _explore) {
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this._explore = _explore;
    this.space_list = this._state.free_space_list;
    this.loading_spaces = this._state.loading_spaces;
    this.levels_free = this._state.level_occupancy;
    this.book = (s) => this._explore.bookSpace(s, true);
  }
};
_LandingAvailabilityComponent.\u0275fac = function LandingAvailabilityComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LandingAvailabilityComponent)(\u0275\u0275directiveInject(LandingStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ExploreSpacesService));
};
_LandingAvailabilityComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingAvailabilityComponent, selectors: [["landing-availability"]], features: [\u0275\u0275ProvidersFeature([ExploreSpacesService])], decls: 8, vars: 5, consts: [["space_placeholder", ""], ["placeholder", ""], [1, "py-2"], ["class", "sm:text-lg font-medium mb-2 sm:mb-4 px-4", 4, "ngIf"], ["class", "flex items-center text-sm sm:text-base px-4 space-x-2", 4, "ngIf"], ["class", "w-full overflow-auto flex items-center space-x-4 px-4 py-2", 4, "ngIf"], [1, "sm:text-lg", "font-medium", "mb-2", "sm:mb-4", "px-4"], [1, "flex", "items-center", "text-sm", "sm:text-base", "px-4", "space-x-2"], [1, "w-full", "overflow-auto", "flex", "items-center", "space-x-4", "px-4", "py-2"], ["name", "landing-view-space", "matRipple", "", "class", "flex items-center h-24 min-w-[12.5rem] rounded-lg bg-base-100 shadow p-4 space-x-2", 3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], ["class", "opacity-60 text-sm mb-2", 4, "ngIf"], ["name", "landing-view-space", "matRipple", "", 1, "flex", "items-center", "h-24", "min-w-[12.5rem]", "rounded-lg", "bg-base-100", "shadow", "p-4", "space-x-2", 3, "routerLink", "queryParams"], [1, "w-[4.5rem]", "h-[4.5rem]", "rounded", "bg-base-300", "overflow-hidden", "flex", "items-center", "justify-center"], ["auth", "", "class", "min-h-full object-cover", 3, "source", 4, "ngIf", "ngIfElse"], [1, "text-left"], [1, "max-w-full", "truncate", "px-1.5"], [1, "max-w-full", "truncate", "text-sm", "opacity-60", "flex", "items-center"], [1, "text-blue-500", "text-lg"], ["auth", "", 1, "min-h-full", "object-cover", 3, "source"], ["src", "assets/icons/desk-placeholder.svg", 1, "m-auto"], [1, "opacity-60", "text-sm", "mb-2"], ["diameter", "24", 4, "ngIf"], ["diameter", "24"], ["name", "landing-book-room", "matRipple", "", "class", "flex items-center h-24 min-w-[12.5rem] rounded-lg bg-base-100 shadow p-4 space-x-2", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["name", "landing-book-room", "matRipple", "", 1, "flex", "items-center", "h-24", "min-w-[12.5rem]", "rounded-lg", "bg-base-100", "shadow", "p-4", "space-x-2", 3, "click"], ["src", "assets/icons/room-placeholder.svg", 1, "m-auto"]], template: function LandingAvailabilityComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, LandingAvailabilityComponent_div_1_Template, 3, 3, "div", 3)(2, LandingAvailabilityComponent_div_2_Template, 4, 3, "div", 4)(3, LandingAvailabilityComponent_div_3_Template, 5, 6, "div", 5)(4, LandingAvailabilityComponent_div_4_Template, 6, 6, "div", 4)(5, LandingAvailabilityComponent_div_5_Template, 5, 7, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, LandingAvailabilityComponent_ng_template_6_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.hide_rooms || !ctx.hide_spaces);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.hide_spaces);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.hide_spaces);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.hide_rooms);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.hide_rooms);
  }
}, dependencies: [NgForOf, NgIf, IconComponent, AuthenticatedImageDirective, MatRipple, MatProgressSpinner, RouterLink, AsyncPipe, TranslatePipe, SpacePipe], styles: ["\n\n*[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=landing-availability.component.css.map */"] });
var LandingAvailabilityComponent = _LandingAvailabilityComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingAvailabilityComponent, { className: "LandingAvailabilityComponent", filePath: "apps/workplace/src/app/landing/landing-availability.component.ts", lineNumber: 151 });
})();

// apps/workplace/src/app/landing/landing-colleagues.component.ts
var _c02 = ["search_input"];
function LandingColleaguesComponent_ng_container_6_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 31);
  }
  if (rf & 2) {
    const user_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("bg-error", user_r3.location === "aol" || user_r3.location === "ooo")("bg-success", user_r3.location === "wfo")("bg-warning", user_r3.location === "wfh")("bg-neutral", !user_r3.location);
    \u0275\u0275property("matTooltip", user_r3.location_name);
  }
}
function LandingColleaguesComponent_ng_container_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275element(2, "a-user-avatar", 19);
    \u0275\u0275template(3, LandingColleaguesComponent_ng_container_6_div_1_div_3_Template, 1, 9, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21)(5, "div", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 25)(12, "app-icon");
    \u0275\u0275text(13, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-menu", 26, 4)(16, "button", 27);
    \u0275\u0275listener("click", function LandingColleaguesComponent_ng_container_6_div_1_Template_button_click_16_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.newMeeting(user_r3));
    });
    \u0275\u0275elementStart(17, "div", 28)(18, "app-icon", 29);
    \u0275\u0275text(19, "today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 30);
    \u0275\u0275listener("click", function LandingColleaguesComponent_ng_container_6_div_1_Template_button_click_23_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeUser(user_r3));
    });
    \u0275\u0275elementStart(24, "div", 28)(25, "app-icon", 29);
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
    \u0275\u0275property("ngIf", !user_r3.outsideHours());
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 10, "WPA.CREATE_MEETING"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 12, "WPA.REMOVE_COLLEAGUE"), " ");
  }
}
function LandingColleaguesComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LandingColleaguesComponent_ng_container_6_div_1_Template, 30, 14, "div", 16);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r3.contacts));
  }
}
function LandingColleaguesComponent_div_18_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function LandingColleaguesComponent_div_18_ng_container_1_button_1_Template_button_click_0_listener() {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.addUser(user_r7));
    });
    \u0275\u0275elementStart(1, "div", 35);
    \u0275\u0275element(2, "a-user-avatar", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36)(4, "div", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 38);
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
    \u0275\u0275textInterpolate1(" ", user_r7.organisation, " ");
  }
}
function LandingColleaguesComponent_div_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LandingColleaguesComponent_div_18_ng_container_1_button_1_Template, 8, 3, "button", 33);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r3.search_results));
  }
}
function LandingColleaguesComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, LandingColleaguesComponent_div_18_ng_container_1_Template, 3, 3, "ng-container", 10);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext();
    const search_empty_r8 = \u0275\u0275reference(23);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = \u0275\u0275pipeBind1(2, 2, ctx_r3.search_results)) == null ? null : tmp_5_0.length)("ngIfElse", search_empty_r8);
  }
}
function LandingColleaguesComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "img", 40);
    \u0275\u0275elementStart(2, "p", 41);
    \u0275\u0275i18n(3, 6);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275i18nExp(\u0275\u0275pipeBind1(4, 1, "WPA.COLLEAGUES_EMPTY"));
    \u0275\u0275i18nApply(3);
  }
}
function LandingColleaguesComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "p", 41);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", !((tmp_5_0 = \u0275\u0275pipeBind1(3, 1, ctx_r3.options)) == null ? null : tmp_5_0.search) ? "Start typing to search for users." : 'Unable for find any users matching "' + ((tmp_5_0 = \u0275\u0275pipeBind1(4, 3, ctx_r3.options)) == null ? null : tmp_5_0.search) + '"', " ");
  }
}
function LandingColleaguesComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "mat-spinner", 42);
    \u0275\u0275elementStart(2, "p", 41);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "WPA.COLLEAGUES_SEARCHING"), " ");
  }
}
var _LandingColleaguesComponent = class _LandingColleaguesComponent extends AsyncHandler {
  constructor(_state, _settings, _event_form, _router) {
    super();
    this._state = _state;
    this._settings = _settings;
    this._event_form = _event_form;
    this._router = _router;
    this.show_search = false;
    this.contacts = this._state.contacts;
    this.search_results = combineLatest([
      this._state.search_results,
      this._state.contacts
    ]).pipe(map(([list, contacts]) => list.filter((_) => !contacts.find((user) => user.id === _.id || user.email === _.email))));
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.addUser = (u) => __async(this, null, function* () {
      yield this._state.addContact(u);
      notifySuccess(`Successfully added "${u.name}" to contacts`);
      this.show_search = false;
    });
    this.removeUser = (u) => __async(this, null, function* () {
      yield this._state.removeContact(u);
      notifySuccess(`Successfully removed "${u.name}" from contacts`);
    });
    this.updateSearch = (s) => this._state.setOptions({ search: s });
  }
  newMeeting(user) {
    this._event_form.newForm();
    this._event_form.form.patchValue({ attendees: [user] });
    if (this._settings.get("app.new_features")) {
      this._router.navigate(["/book", "meeting"]);
    } else {
      this._router.navigate(["/book", "spaces"]);
    }
  }
  openSearch() {
    this.updateSearch("");
    this.show_search = true;
    this.timeout("open", () => this._input_el.nativeElement.focus(), 100);
  }
};
_LandingColleaguesComponent.\u0275fac = function LandingColleaguesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LandingColleaguesComponent)(\u0275\u0275directiveInject(LandingStateService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(Router));
};
_LandingColleaguesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingColleaguesComponent, selectors: [["landing-colleagues"]], viewQuery: function LandingColleaguesComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c02, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._input_el = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 26, vars: 22, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_3604407389403754414$$APPS_WORKPLACE_SRC_APP_LANDING_LANDING_COLLEAGUES_COMPONENT_TS_0 = goog.getMsg("{VAR_PLURAL, plural, =1 {Person } other {People }}");
    i18n_0 = MSG_EXTERNAL_3604407389403754414$$APPS_WORKPLACE_SRC_APP_LANDING_LANDING_COLLEAGUES_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`:␟828d084edb03dc237d172214dca7c5f0c2dce8ac␟3604407389403754414:{VAR_PLURAL, plural, =1 {Person } other {People }}`;
  }
  i18n_0 = \u0275\u0275i18nPostprocess(i18n_0, { "VAR_PLURAL": "\uFFFD1\uFFFD" });
  let i18n_1;
  if (false) {
    const MSG_EXTERNAL_2741888341118710692$$APPS_WORKPLACE_SRC_APP_LANDING_LANDING_COLLEAGUES_COMPONENT_TS_1 = goog.getMsg(" {$interpolation} {$icu} ", { "icu": i18n_0, "interpolation": "\uFFFD0\uFFFD" }, { original_code: { "icu": "{(contacts |\n                async)?.length, plural,\n                    =1 {Person }\n                    other {People }\n                }", "interpolation": "{{ (contacts | async)?.length || 0 }}" } });
    i18n_1 = MSG_EXTERNAL_2741888341118710692$$APPS_WORKPLACE_SRC_APP_LANDING_LANDING_COLLEAGUES_COMPONENT_TS_1;
  } else {
    i18n_1 = $localize`:␟7200ce2b8f61a2b87bcbee182c68e057590c004f␟2741888341118710692: ${"\uFFFD0\uFFFD"}:INTERPOLATION: ${i18n_0}:ICU: `;
  }
  let i18n_2;
  if (false) {
    const MSG_EXTERNAL_5990245187139880203$$APPS_WORKPLACE_SRC_APP_LANDING_LANDING_COLLEAGUES_COMPONENT_TS_2 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" }, { original_code: { "interpolation": "{{ 'WPA.COLLEAGUES_EMPTY' | translate }}" } });
    i18n_2 = MSG_EXTERNAL_5990245187139880203$$APPS_WORKPLACE_SRC_APP_LANDING_LANDING_COLLEAGUES_COMPONENT_TS_2;
  } else {
    i18n_2 = $localize`:␟082b183958aaf6c9cda3dd1caba0bb3821480348␟5990245187139880203: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
  }
  return [["search_input", ""], ["empty_state", ""], ["search_empty", ""], ["load_state", ""], ["menu", "matMenu"], i18n_1, i18n_2, [1, "flex", "items-center", "justify-between", "py-2", "mx-2", "border-b", "border-base-200"], [1, "mx-2"], [1, "flex-1", "h-1/2", "w-full", "space-y-4", "overflow-auto", "pt-4"], [4, "ngIf", "ngIfElse"], ["btn", "", "name", "open-colleague-search", "matRipple", "", 1, "inverse", "w-[calc(100%-1rem)]", "m-2", 3, "click"], ["search", "", 1, "absolute", "inset-x-2", "top-2", "bottom-[3.5rem]", "rounded-lg", "overflow-hidden", "flex", "flex-col", "bg-base-100", "shadow", "border", "border-base-200"], ["placeholder", "Search for users...", 1, "w-full", "border-b", "border-base-200", "p-2", "rounded-t-lg", 3, "ngModelChange", "ngModel"], ["icon", "", "name", "close-colleague-search", 1, "absolute", "top-0", "right-0", 3, "click"], ["class", "overflow-auto flex-1 h-1/2 flex flex-col space-y-2", 4, "ngIf", "ngIfElse"], ["class", "flex items-center px-2 space-x-2 relative", "user", "", 4, "ngFor", "ngForOf"], ["user", "", 1, "flex", "items-center", "px-2", "space-x-2", "relative"], [1, "text-xl", "relative"], [3, "user"], ["class", "rounded-full h-3 w-3 border border-white absolute bottom-1 right-1", 3, "bg-error", "bg-success", "bg-warning", "bg-neutral", "matTooltip", 4, "ngIf"], [1, "leading-tight", "flex-1", "w-1/2"], [1, "truncate", 3, "matTooltip"], [1, "text-sm", "truncate", 3, "matTooltip"], [1, "text-xs", "opacity-60", "truncate"], ["icon", "", "name", "colleague-more", 1, "!rounded", "bg-base-200", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["mat-menu-item", "", "name", "meeting-with-colleague", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], ["name", "remove-colleague", "mat-menu-item", "", 3, "click"], [1, "rounded-full", "h-3", "w-3", "border", "border-white", "absolute", "bottom-1", "right-1", 3, "matTooltip"], [1, "overflow-auto", "flex-1", "h-1/2", "flex", "flex-col", "space-y-2"], ["matRipple", "", "name", "add-colleague", "class", "flex items-center p-1 space-x-2 w-full text-left min-h-12", 3, "click", 4, "ngFor", "ngForOf"], ["matRipple", "", "name", "add-colleague", 1, "flex", "items-center", "p-1", "space-x-2", "w-full", "text-left", "min-h-12", 3, "click"], [1, "text-base", "relative"], [1, "leading-tight"], [1, "truncate"], [1, "text-sm", "truncate"], [1, "w-full", "h-full", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["src", "assets/icons/no-contacts.svg"], [1, "opacity-60", "text-sm", "text-center"], ["diameter", "32"]];
}, template: function LandingColleaguesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "h2", 8);
    \u0275\u0275i18n(2, 5);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 9);
    \u0275\u0275template(6, LandingColleaguesComponent_ng_container_6_Template, 3, 3, "ng-container", 10);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 11);
    \u0275\u0275listener("click", function LandingColleaguesComponent_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openSearch());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 12)(12, "input", 13, 0);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275listener("ngModelChange", function LandingColleaguesComponent_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 14);
    \u0275\u0275listener("click", function LandingColleaguesComponent_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.show_search = false);
    });
    \u0275\u0275elementStart(16, "app-icon");
    \u0275\u0275text(17, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, LandingColleaguesComponent_div_18_Template, 3, 4, "div", 15);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, LandingColleaguesComponent_ng_template_20_Template, 5, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(22, LandingColleaguesComponent_ng_template_22_Template, 5, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(24, LandingColleaguesComponent_ng_template_24_Template, 5, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_7_0;
    let tmp_11_0;
    const empty_state_r9 = \u0275\u0275reference(21);
    const load_state_r10 = \u0275\u0275reference(25);
    \u0275\u0275advance(4);
    \u0275\u0275i18nExp(((tmp_4_0 = \u0275\u0275pipeBind1(3, 10, ctx.contacts)) == null ? null : tmp_4_0.length) || 0)((tmp_5_0 = \u0275\u0275pipeBind1(4, 12, ctx.contacts)) == null ? null : tmp_5_0.length);
    \u0275\u0275i18nApply(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_7_0 = \u0275\u0275pipeBind1(7, 14, ctx.contacts)) == null ? null : tmp_7_0.length)("ngIfElse", empty_state_r9);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 16, "WPA.ADD"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", !ctx.show_search);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_11_0 = \u0275\u0275pipeBind1(14, 18, ctx.options)) == null ? null : tmp_11_0.search);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(19, 20, ctx.loading))("ngIfElse", load_state_r10);
  }
}, dependencies: [NgForOf, NgIf, IconComponent, UserAvatarComponent, MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, MatProgressSpinner, MatTooltip, DefaultValueAccessor, NgControlStatus, NgModel, AsyncPipe, TranslatePipe], styles: ["\n\n[user][_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=landing-colleagues.component.css.map */"] });
var LandingColleaguesComponent = _LandingColleaguesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingColleaguesComponent, { className: "LandingColleaguesComponent", filePath: "apps/workplace/src/app/landing/landing-colleagues.component.ts", lineNumber: 222 });
})();

// apps/workplace/src/app/landing/landing-favourites.component.ts
function LandingFavouritesComponent_ng_container_4_div_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 27);
    \u0275\u0275pipe(1, "space");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    let tmp_7_0;
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", (tmp_7_0 = \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, item_r2))) == null ? null : tmp_7_0.images[0]);
  }
}
function LandingFavouritesComponent_ng_container_4_div_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 28);
  }
}
function LandingFavouritesComponent_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 14);
    \u0275\u0275template(3, LandingFavouritesComponent_ng_container_4_div_1_img_3_Template, 3, 5, "img", 15);
    \u0275\u0275pipe(4, "space");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275template(6, LandingFavouritesComponent_ng_container_4_div_1_ng_template_6_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16)(9, "div", 17);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "space");
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "space");
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 18)(16, "app-icon", 19);
    \u0275\u0275text(17, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 20);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "space");
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 21)(23, "app-icon", 19);
    \u0275\u0275text(24, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div");
    \u0275\u0275i18n(26, 5);
    \u0275\u0275pipe(27, "space");
    \u0275\u0275pipe(28, "async");
    \u0275\u0275pipe(29, "space");
    \u0275\u0275pipe(30, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "button", 22);
    \u0275\u0275listener("click", function LandingFavouritesComponent_ng_container_4_div_1_Template_button_click_31_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.newSpaceMeeting(item_r2));
    });
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 23)(35, "app-icon");
    \u0275\u0275text(36, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "mat-menu", 24, 2)(39, "button", 25);
    \u0275\u0275listener("click", function LandingFavouritesComponent_ng_container_4_div_1_Template_button_click_39_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFavourite("space", item_r2));
    });
    \u0275\u0275elementStart(40, "app-icon", 26);
    \u0275\u0275text(41, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    const item_r2 = ctx.$implicit;
    const space_placeholder_r4 = \u0275\u0275reference(7);
    const menu_r5 = \u0275\u0275reference(38);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (tmp_6_0 = \u0275\u0275pipeBind1(5, 12, \u0275\u0275pipeBind1(4, 10, item_r2))) == null ? null : tmp_6_0.images == null ? null : tmp_6_0.images.length)("ngIfElse", space_placeholder_r4);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ((tmp_8_0 = \u0275\u0275pipeBind1(12, 16, \u0275\u0275pipeBind1(11, 14, item_r2))) == null ? null : tmp_8_0.display_name) || ((tmp_8_0 = \u0275\u0275pipeBind1(14, 20, \u0275\u0275pipeBind1(13, 18, item_r2))) == null ? null : tmp_8_0.name), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", (tmp_9_0 = ctx_r2.level(\u0275\u0275pipeBind1(21, 24, \u0275\u0275pipeBind1(20, 22, item_r2)))) == null ? null : tmp_9_0.display_name, " ");
    \u0275\u0275advance(11);
    \u0275\u0275i18nExp(((tmp_10_0 = \u0275\u0275pipeBind1(28, 28, \u0275\u0275pipeBind1(27, 26, item_r2))) == null ? null : tmp_10_0.capacity) || 2)(((tmp_11_0 = \u0275\u0275pipeBind1(30, 32, \u0275\u0275pipeBind1(29, 30, item_r2))) == null ? null : tmp_11_0.capacity) || 2);
    \u0275\u0275i18nApply(26);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.isClosed(item_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 34, "WPA.BOOK"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r5);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 36, "WPA.FAVOURITES_REMOVE"));
  }
}
function LandingFavouritesComponent_ng_container_4_div_2_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 27);
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", item_r7 == null ? null : item_r7.images[0]);
  }
}
function LandingFavouritesComponent_ng_container_4_div_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 36);
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", "assets/icons/" + (item_r7.type === "desk" ? "desk" : "car") + "-placeholder.svg", \u0275\u0275sanitizeUrl);
  }
}
function LandingFavouritesComponent_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 14);
    \u0275\u0275template(3, LandingFavouritesComponent_ng_container_4_div_2_img_3_Template, 1, 1, "img", 15)(4, LandingFavouritesComponent_ng_container_4_div_2_ng_template_4_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 16)(7, "div", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "app-icon", 19);
    \u0275\u0275text(11, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 20);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "button", 30);
    \u0275\u0275listener("click", function LandingFavouritesComponent_ng_container_4_div_2_Template_button_click_14_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.newBooking(item_r7.type, item_r7));
    });
    \u0275\u0275i18n(15, 6);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 31)(18, "app-icon");
    \u0275\u0275text(19, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-menu", 24, 2)(22, "button", 32);
    \u0275\u0275listener("click", function LandingFavouritesComponent_ng_container_4_div_2_Template_button_click_22_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFavourite(item_r7.type, item_r7.id));
    });
    \u0275\u0275elementStart(23, "div", 33)(24, "app-icon", 34);
    \u0275\u0275text(25, " cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 35);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const asset_placeholder_r8 = \u0275\u0275reference(5);
    const menu_r9 = \u0275\u0275reference(21);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", item_r7 == null ? null : item_r7.images == null ? null : item_r7.images.length)("ngIfElse", asset_placeholder_r8);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (item_r7 == null ? null : item_r7.display_name) || (item_r7 == null ? null : item_r7.name), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", item_r7 == null ? null : item_r7.zone == null ? null : item_r7.zone.display_name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275i18nExp(\u0275\u0275pipeBind1(16, 7, "WPA.BOOK"));
    \u0275\u0275i18nApply(15);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r9);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 9, "WPA.FAVOURITES_REMOVE"), " ");
  }
}
function LandingFavouritesComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LandingFavouritesComponent_ng_container_4_div_1_Template, 45, 38, "div", 11)(2, LandingFavouritesComponent_ng_container_4_div_2_Template, 29, 11, "div", 11);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.spaces);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(3, 2, ctx_r2.assets));
  }
}
function LandingFavouritesComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "img", 38);
    \u0275\u0275elementStart(2, "p", 39);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "WPA.FAVOURITES_EMPTY"), " ");
  }
}
var EMPTY = [];
var _LandingFavouritesComponent = class _LandingFavouritesComponent extends AsyncHandler {
  get spaces() {
    return this._settings.get("favourite_spaces") || EMPTY;
  }
  get desks() {
    return this._settings.get(FAV_DESK_KEY) || EMPTY;
  }
  get parking_spaces() {
    return this._settings.get(FAV_PARKING_KEY) || EMPTY;
  }
  level(space) {
    return this._org.levelWithID(space?.zones || []);
  }
  isClosed(id) {
    if (!this._room_alerts)
      return false;
    return this._room_alerts[id] ? this._room_alerts[id][0] === "closed" : false;
  }
  constructor(_org, _settings, _space_pipe, _event_form, _booking_form, _router) {
    super();
    this._org = _org;
    this._settings = _settings;
    this._space_pipe = _space_pipe;
    this._event_form = _event_form;
    this._booking_form = _booking_form;
    this._router = _router;
    this.assets = combineLatest([
      this._booking_form.loadResourceList("desks"),
      this._booking_form.loadResourceList("parking-spaces")
    ]).pipe(map(([desks, parking]) => {
      return [
        ...desks.filter(({ id }) => this.desks.includes(id)).map((_) => __spreadProps(__spreadValues({}, _), { type: "desk" })),
        ...parking.filter(({ id }) => this.parking_spaces.includes(id)).map((_) => __spreadProps(__spreadValues({}, _), { type: "parking" }))
      ];
    }), shareReplay(1));
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this._room_alerts = yield showMetadata(this._org.organisation.id, "room_alerts").pipe(map((v) => v.details)).toPromise();
      console.log("Room Alerts:", this._room_alerts);
      console.log("Spaces:", this.spaces);
    });
  }
  toggleFavourite(type, id) {
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
    }
    const new_state = !fav_list.includes(id);
    if (new_state) {
      this._settings.saveUserSetting(key, [...fav_list, id]);
    } else {
      this._settings.saveUserSetting(key, fav_list.filter((_) => _ !== id));
    }
  }
  newSpaceMeeting(id) {
    return __async(this, null, function* () {
      const space = yield this._space_pipe.transform(id);
      if (!space)
        return;
      this._event_form.newForm();
      this._event_form.form.patchValue({ resources: [space] });
      if (this._settings.get("app.new_features")) {
        this._router.navigate(["/book", "meeting"]);
      } else {
        this._router.navigate(["/book", "spaces"]);
      }
    });
  }
  newBooking(type, item) {
    return __async(this, null, function* () {
      if (!item)
        return;
      if (this._settings.get("app.new_features")) {
        this._router.navigate([
          "/book",
          type === "desk" ? "new-desk" : "new-parking"
        ]);
      } else {
        this._router.navigate([
          "/book",
          type === "desk" ? "desks" : "parking"
        ]);
      }
      setTimeout(() => {
        this._booking_form.newForm();
        this._booking_form.setOptions({ type });
        this._booking_form.form.patchValue({
          resources: [item],
          asset_id: item.id,
          booking_type: type
        });
      }, 100);
    });
  }
};
_LandingFavouritesComponent.\u0275fac = function LandingFavouritesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LandingFavouritesComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(SpacePipe), \u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(Router));
};
_LandingFavouritesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingFavouritesComponent, selectors: [["landing-favourites"]], features: [\u0275\u0275ProvidersFeature([SpacePipe]), \u0275\u0275InheritDefinitionFeature], decls: 8, vars: 6, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_8885797130863755638$$APPS_WORKPLACE_SRC_APP_LANDING_LANDING_FAVOURITES_COMPONENT_TS_0 = goog.getMsg("{VAR_PLURAL, plural, =1 {Resource } other {Resources }}");
    i18n_0 = MSG_EXTERNAL_8885797130863755638$$APPS_WORKPLACE_SRC_APP_LANDING_LANDING_FAVOURITES_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`:␟9e09e22eae5759611e68d7523e168e090fb03ef5␟8885797130863755638:{VAR_PLURAL, plural, =1 {Resource } other {Resources }}`;
  }
  i18n_0 = \u0275\u0275i18nPostprocess(i18n_0, { "VAR_PLURAL": "\uFFFD1\uFFFD" });
  let i18n_1;
  if (false) {
    const MSG_EXTERNAL_6246142648057925772$$APPS_WORKPLACE_SRC_APP_LANDING_LANDING_FAVOURITES_COMPONENT_TS_1 = goog.getMsg(" {$interpolation} {$icu} ", { "icu": i18n_0, "interpolation": "\uFFFD0\uFFFD" }, { original_code: { "icu": "{spaces?.length, plural, =1 {Resource } other {Resources }}", "interpolation": "{{ spaces?.length || 0 }}" } });
    i18n_1 = MSG_EXTERNAL_6246142648057925772$$APPS_WORKPLACE_SRC_APP_LANDING_LANDING_FAVOURITES_COMPONENT_TS_1;
  } else {
    i18n_1 = $localize`:␟2560a465c86f304486dbe077b13dca8fa53e6bcc␟6246142648057925772: ${"\uFFFD0\uFFFD"}:INTERPOLATION: ${i18n_0}:ICU: `;
  }
  let i18n_2;
  if (false) {
    const MSG_EXTERNAL_3604407389403754414$$APPS_WORKPLACE_SRC_APP_LANDING_LANDING_FAVOURITES_COMPONENT_TS_2 = goog.getMsg("{VAR_PLURAL, plural, =1 {Person } other {People }}");
    i18n_2 = MSG_EXTERNAL_3604407389403754414$$APPS_WORKPLACE_SRC_APP_LANDING_LANDING_FAVOURITES_COMPONENT_TS_2;
  } else {
    i18n_2 = $localize`:␟0a8e701e323860a4f1a14836b6e50de2dcaadf25␟3604407389403754414:{VAR_PLURAL, plural, =1 {Person } other {People }}`;
  }
  i18n_2 = \u0275\u0275i18nPostprocess(i18n_2, { "VAR_PLURAL": "\uFFFD1\uFFFD" });
  let i18n_3;
  if (false) {
    const MSG_EXTERNAL_5508454923022029915$$APPS_WORKPLACE_SRC_APP_LANDING_LANDING_FAVOURITES_COMPONENT_TS_3 = goog.getMsg(" {$interpolation} {$icu} ", { "icu": i18n_2, "interpolation": "\uFFFD0\uFFFD" }, { original_code: { "icu": "{(item | space | async)?.capacity || 2, plural,\n                                        =1 {Person }\n                                        other {People }\n                                    }", "interpolation": "{{ (item | space | async)?.capacity || 2 }}" } });
    i18n_3 = MSG_EXTERNAL_5508454923022029915$$APPS_WORKPLACE_SRC_APP_LANDING_LANDING_FAVOURITES_COMPONENT_TS_3;
  } else {
    i18n_3 = $localize`:␟7ef0e1b7d47389a880ef6536e86baeed407a9943␟5508454923022029915: ${"\uFFFD0\uFFFD"}:INTERPOLATION: ${i18n_2}:ICU: `;
  }
  let i18n_4;
  if (false) {
    const MSG_EXTERNAL_8490385903680845804$$APPS_WORKPLACE_SRC_APP_LANDING_LANDING_FAVOURITES_COMPONENT_TS_4 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" }, { original_code: { "interpolation": "{{ 'WPA.BOOK' | translate }}" } });
    i18n_4 = MSG_EXTERNAL_8490385903680845804$$APPS_WORKPLACE_SRC_APP_LANDING_LANDING_FAVOURITES_COMPONENT_TS_4;
  } else {
    i18n_4 = $localize`:␟477a2990dc9e7a47c36b57d54f8150408a0c309b␟8490385903680845804: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
  }
  return [["empty_state", ""], ["space_placeholder", ""], ["menu", "matMenu"], ["asset_placeholder", ""], i18n_1, i18n_3, i18n_4, [1, "flex", "items-center", "justify-between", "py-2", "mx-2", "border-b", "border-base-200"], [1, "mx-2"], [1, "flex-1", "h-1/2", "w-full", "space-y-2", "overflow-auto", "pt-4", "divide-y", "divide-base-200"], [4, "ngIf", "ngIfElse"], ["class", "flex flex-col items-center mx-2 pt-2 space-y-2 relative", "item", "", 4, "ngFor", "ngForOf"], ["item", "", 1, "flex", "flex-col", "items-center", "mx-2", "pt-2", "space-y-2", "relative"], [1, "flex", "w-full", "items-center", "space-x-2", "relative"], [1, "w-16", "h-16", "overflow-hidden", "rounded", "relative", "flex", "items-center", "justify-center", "bg-base-300"], ["auth", "", "class", "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover min-w-full min-h-full", 3, "source", 4, "ngIf", "ngIfElse"], [1, "h-16", "flex-1", "w-1/2", "flex", "flex-col", "justify-center", "space-y-1"], [1, "truncate", "w-full", "pr-12"], [1, "flex", "items-center", "text-xs", "opacity-60", "space-x-1"], [1, "text-blue-500"], [1, "flex-1", "w-1/2", "truncate"], [1, "flex", "items-center", "text-xs", "opacity-60", "truncate", "space-x-2"], ["btn", "", "name", "book-favourite", "matRipple", "", 1, "w-full", "inverse", 3, "click", "disabled"], ["icon", "", "name", "favourite-more", 1, "absolute", "top-2", "right-0", "bg-base-200", "!rounded", "!m-0", "h-12", "w-12", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["name", "landing-remove-favourite", "mat-menu-item", "", 1, "flex", "items-center", "space-x-2", 3, "click"], [1, "text-2xl"], ["auth", "", 1, "absolute", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "object-cover", "min-w-full", "min-h-full", 3, "source"], ["src", "assets/icons/room-placeholder.svg", 1, "m-auto"], [1, "truncate"], ["btn", "", "name", "book-favourite", "matRipple", "", 1, "w-full", "inverse", 3, "click"], ["icon", "", "name", "favourite-more", 1, "absolute", "top-22", "right-0", "bg-base-200", "!rounded", "!m-0", 3, "matMenuTriggerFor"], ["name", "landing-remove-favourite", "mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl", "text-error"], [1, "pr-4"], [1, "m-auto", 3, "src"], [1, "w-full", "h-full", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["src", "assets/icons/no-favourites.svg"], [1, "opacity-60", "text-sm", "text-center"]];
}, template: function LandingFavouritesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h2", 8);
    \u0275\u0275i18n(2, 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275template(4, LandingFavouritesComponent_ng_container_4_Template, 4, 4, "ng-container", 10);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, LandingFavouritesComponent_ng_template_6_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_4_0;
    const empty_state_r10 = \u0275\u0275reference(7);
    \u0275\u0275advance(2);
    \u0275\u0275i18nExp((ctx.spaces == null ? null : ctx.spaces.length) || 0)(ctx.spaces == null ? null : ctx.spaces.length);
    \u0275\u0275i18nApply(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx.spaces == null ? null : ctx.spaces.length) || ((tmp_4_0 = \u0275\u0275pipeBind1(5, 4, ctx.assets)) == null ? null : tmp_4_0.length))("ngIfElse", empty_state_r10);
  }
}, dependencies: [NgForOf, NgIf, IconComponent, AuthenticatedImageDirective, MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, AsyncPipe, TranslatePipe, SpacePipe], styles: ["\n\n[user][_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=landing-favourites.component.css.map */"] });
var LandingFavouritesComponent = _LandingFavouritesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingFavouritesComponent, { className: "LandingFavouritesComponent", filePath: "apps/workplace/src/app/landing/landing-favourites.component.ts", lineNumber: 271 });
})();

// apps/workplace/src/app/landing/landing-quick-links.component.ts
var _c03 = () => ["/book", "meeting"];
var _c12 = () => ["/book", "new-desk"];
var _c2 = () => ["/book", "new-parking"];
function LandingQuickLinksComponent_a_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3)(1, "div", 4);
    \u0275\u0275element(2, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4, "Book a Room");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c03));
  }
}
function LandingQuickLinksComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3)(1, "div", 4);
    \u0275\u0275element(2, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4, "Book a Desk");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c12));
  }
}
function LandingQuickLinksComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3)(1, "div", 4);
    \u0275\u0275element(2, "img", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4, "Book a Parking Space");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c2));
  }
}
var _LandingQuickLinksComponent = class _LandingQuickLinksComponent {
  get features() {
    return this._settings.get("app.features") || [];
  }
  constructor(_settings) {
    this._settings = _settings;
  }
};
_LandingQuickLinksComponent.\u0275fac = function LandingQuickLinksComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LandingQuickLinksComponent)(\u0275\u0275directiveInject(SettingsService));
};
_LandingQuickLinksComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingQuickLinksComponent, selectors: [["landing-quick-links"]], decls: 6, vars: 3, consts: [[1, "sm:text-lg", "font-medium", "mb-2", "sm:mb-4", "px-4"], [1, "flex", "w-full", "overflow-auto", "space-x-2", "px-4", "mb-4"], ["matRipple", "", "class", "w-64 p-2 rounded shadow border border-base-200 flex items-center space-x-4 bg-base-100", 3, "routerLink", 4, "ngIf"], ["matRipple", "", 1, "w-64", "p-2", "rounded", "shadow", "border", "border-base-200", "flex", "items-center", "space-x-4", "bg-base-100", 3, "routerLink"], [1, "min-w-[4rem]", "h-16", "rounded", "bg-base-200", "flex", "items-center", "justify-center"], ["src", "assets/icons/room-placeholder.svg", 1, "m-auto"], [1, "text-xl"], ["src", "assets/icons/desk-placeholder.svg", 1, "m-auto"], ["src", "assets/icons/car-placeholder.svg", 1, "m-auto"]], template: function LandingQuickLinksComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 0);
    \u0275\u0275text(1, " Make a Reservation ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 1);
    \u0275\u0275template(3, LandingQuickLinksComponent_a_3_Template, 5, 2, "a", 2)(4, LandingQuickLinksComponent_a_4_Template, 5, 2, "a", 2)(5, LandingQuickLinksComponent_a_5_Template, 5, 2, "a", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.features.includes("spaces"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.features.includes("desks"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.features.includes("parking"));
  }
}, dependencies: [NgIf, MatRipple, RouterLink] });
var LandingQuickLinksComponent = _LandingQuickLinksComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingQuickLinksComponent, { className: "LandingQuickLinksComponent", filePath: "apps/workplace/src/app/landing/landing-quick-links.component.ts", lineNumber: 63 });
})();

// apps/workplace/src/app/landing/landing-upcoming.component.ts
var _c04 = () => ["/your-bookings"];
function LandingUpcomingComponent_ng_container_12_ng_container_1_event_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "event-card", 12);
    \u0275\u0275listener("edit", function LandingUpcomingComponent_ng_container_12_ng_container_1_event_card_2_Template_event_card_edit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const event_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.edit(event_r2));
    })("remove", function LandingUpcomingComponent_ng_container_12_ng_container_1_event_card_2_Template_event_card_remove_0_listener() {
      \u0275\u0275restoreView(_r1);
      const event_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove(event_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("event", event_r2)("show_day", true);
  }
}
function LandingUpcomingComponent_ng_container_12_ng_container_1_booking_card_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "booking-card", 13);
    \u0275\u0275listener("edit", function LandingUpcomingComponent_ng_container_12_ng_container_1_booking_card_3_Template_booking_card_edit_0_listener() {
      \u0275\u0275restoreView(_r4);
      const event_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editBooking(event_r2));
    })("remove", function LandingUpcomingComponent_ng_container_12_ng_container_1_booking_card_3_Template_booking_card_remove_0_listener() {
      \u0275\u0275restoreView(_r4);
      const event_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove(event_r2, true));
    })("end", function LandingUpcomingComponent_ng_container_12_ng_container_1_booking_card_3_Template_booking_card_end_0_listener() {
      \u0275\u0275restoreView(_r4);
      const event_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.end(event_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("booking", event_r2)("show_day", true);
  }
}
function LandingUpcomingComponent_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0)(1, 9);
    \u0275\u0275template(2, LandingUpcomingComponent_ng_container_12_ng_container_1_event_card_2_Template, 1, 2, "event-card", 10)(3, LandingUpcomingComponent_ng_container_12_ng_container_1_booking_card_3_Template, 1, 2, "booking-card", 11);
    \u0275\u0275elementContainerEnd()();
  }
  if (rf & 2) {
    const event_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", ctx_r2.type(event_r2));
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "event");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "booking");
  }
}
function LandingUpcomingComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LandingUpcomingComponent_ng_container_12_ng_container_1_Template, 4, 3, "ng-container", 8);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(3, 4, \u0275\u0275pipeBind1(2, 2, ctx_r2.upcoming_events), 0, 5))("ngForTrackBy", ctx_r2.trackByFn);
  }
}
function LandingUpcomingComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "img", 15);
    \u0275\u0275elementStart(2, "p", 16);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "WPA.NO_UPCOMING_BOOKINGS"), " ");
  }
}
var _LandingUpcomingComponent = class _LandingUpcomingComponent extends AsyncHandler {
  type(event) {
    return event instanceof Booking ? "booking" : "event";
  }
  constructor(_state, _event_form, _booking_form, _router, _dialog, _settings) {
    super();
    this._state = _state;
    this._event_form = _event_form;
    this._booking_form = _booking_form;
    this._router = _router;
    this._dialog = _dialog;
    this._settings = _settings;
    this.upcoming_events = this._state.upcoming_events;
  }
  ngOnInit() {
    this.subscription("poll", this._state.pollUpcomingEvents());
  }
  trackByFn(_, item) {
    return item?.id;
  }
  edit(event) {
    this._router.navigate(["/book", "meeting", "form"]);
    this._event_form.newForm(event);
  }
  editBooking(event) {
    this._router.navigate(["/book", `new-${event.type}`]);
    this._booking_form.newForm(event);
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
  remove(item, remove_series = false) {
    return __async(this, null, function* () {
      const time = `${format(item.date, "dd MMM yyyy h:mma")}`;
      const resource_name = item instanceof CalendarEvent ? item.space?.display_name : item.asset_name || item.asset_id;
      const content = `Delete the booking for ${resource_name} at ${time}`;
      const resp = yield openConfirmModal({ title: `Delete booking`, content, icon: { content: "delete" } }, this._dialog);
      if (resp.reason !== "done")
        return;
      resp.loading("Requesting booking deletion...");
      yield (item instanceof CalendarEvent ? removeEvent : removeBooking)(item.id, {
        calendar: this._settings.get("app.no_user_calendar") ? null : currentUser()?.email,
        system_id: item.system?.id,
        instance: remove_series ? void 0 : !!item.instance,
        start_time: !!item.instance ? item.booking_start : void 0
      }).toPromise().catch((e) => {
        notifyError(`Unable to delete booking. ${e}`);
        resp.close();
        throw e;
      });
      notifySuccess("Successfully deleted booking.");
      this._state.refreshUpcomingEvents();
      this._dialog.closeAll();
    });
  }
  end(item) {
    return __async(this, null, function* () {
      const time = `${format(item.date, "dd MMM yyyy h:mma")}`;
      const resource_name = item.asset_name || item.asset_id;
      const content = `End the booking for ${resource_name} at ${time}`;
      const resp = yield openConfirmModal({ title: `End booking`, content, icon: { content: "delete" } }, this._dialog);
      if (resp.reason !== "done")
        return;
      resp.loading("Ending booking...");
      yield checkinBooking(item.id, false).toPromise().catch((e) => {
        notifyError(`Unable to end booking. ${e}`);
        resp.close();
        throw e;
      });
      notifySuccess("Successfully ended booking.");
      this._state.refreshUpcomingEvents();
      this._dialog.closeAll();
    });
  }
};
_LandingUpcomingComponent.\u0275fac = function LandingUpcomingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LandingUpcomingComponent)(\u0275\u0275directiveInject(LandingStateService), \u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SettingsService));
};
_LandingUpcomingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingUpcomingComponent, selectors: [["landing-upcoming"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 17, consts: [["empty_state", ""], [1, "py-2"], [1, "flex", "items-center", "justify-between", "mb-2", "sm:mb-4", "px-4"], [1, "sm:text-lg", "font-medium"], ["btn", "", "name", "upcoming-view-all", 1, "inverse", "hidden", "sm:flex", 3, "routerLink"], ["name", "upcoming-view-all-mobile", 1, "inverse", "flex", "sm:hidden", "text-blue-500", "underline", "relative", "top-8", 3, "routerLink"], [1, "space-y-4", "px-4"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngSwitch"], [3, "event", "show_day", "edit", "remove", 4, "ngSwitchCase"], [3, "booking", "show_day", "edit", "remove", "end", 4, "ngSwitchCase"], [3, "edit", "remove", "event", "show_day"], [3, "edit", "remove", "end", "booking", "show_day"], [1, "w-full", "p-8", "flex", "flex-col", "items-center", "justify-center", "space-y-4"], ["src", "assets/img/no-events.svg", 1, "mr-4"], [1, "opacity-30"]], template: function LandingUpcomingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 4);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 5);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 6);
    \u0275\u0275template(12, LandingUpcomingComponent_ng_container_12_Template, 4, 8, "ng-container", 7);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, LandingUpcomingComponent_ng_template_14_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_6_0;
    const empty_state_r5 = \u0275\u0275reference(15);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "WPA.YOUR_BOOKINGS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(15, _c04));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 9, "WPA.VIEW_ALL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(16, _c04));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 11, "WPA.VIEW_ALL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (tmp_6_0 = \u0275\u0275pipeBind1(13, 13, ctx.upcoming_events)) == null ? null : tmp_6_0.length)("ngIfElse", empty_state_r5);
  }
}, dependencies: [NgForOf, NgIf, NgSwitch, NgSwitchCase, EventCardComponent, BookingCardComponent, RouterLink, AsyncPipe, SlicePipe, TranslatePipe] });
var LandingUpcomingComponent = _LandingUpcomingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingUpcomingComponent, { className: "LandingUpcomingComponent", filePath: "apps/workplace/src/app/landing/landing-upcoming.component.ts", lineNumber: 90 });
})();

// apps/workplace/src/app/landing/landing.component.ts
var _c05 = (a0) => ({ name: a0 });
function LandingComponent_topbar_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar", 13);
  }
}
function LandingComponent_div_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function LandingComponent_div_2_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.tab = "people");
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "uppercase");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-b", ctx_r2.tab !== "people")("border-base-200", ctx_r2.tab !== "people")("bg-base-200", ctx_r2.tab !== "people")("bg-opacity-5", ctx_r2.tab !== "people");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 11, \u0275\u0275pipeBind1(5, 9, "WPA.COLLEAGUES")), " ");
  }
}
function LandingComponent_div_2_landing_colleagues_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "landing-colleagues");
  }
}
function LandingComponent_div_2_landing_favourites_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "landing-favourites");
  }
}
function LandingComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275template(2, LandingComponent_div_2_button_2_Template, 7, 13, "button", 16);
    \u0275\u0275elementStart(3, "button", 17);
    \u0275\u0275listener("click", function LandingComponent_div_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.tab = "fav");
    });
    \u0275\u0275elementStart(4, "app-icon");
    \u0275\u0275text(5, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 18);
    \u0275\u0275template(10, LandingComponent_div_2_landing_colleagues_10_Template, 1, 0, "landing-colleagues", 11)(11, LandingComponent_div_2_landing_favourites_11_Template, 1, 0, "landing-favourites", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.hide_colleagues);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-b", ctx_r2.tab !== "fav")("border-base-200", ctx_r2.tab !== "fav")("bg-base-200", ctx_r2.tab !== "fav")("bg-opacity-5", ctx_r2.tab !== "fav");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 12, "WPA.FAVOURITES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.tab === "people" && !ctx_r2.hide_colleagues);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.tab === "fav" || ctx_r2.hide_colleagues);
  }
}
function LandingComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.building.address || ctx_r2.building.display_name || ctx_r2.building.name, " ");
  }
}
function LandingComponent_landing_quick_links_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "landing-quick-links");
  }
}
function LandingComponent_footer_menu_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "footer-menu");
  }
}
var _LandingComponent = class _LandingComponent {
  get hide_nav() {
    return localStorage.getItem("PlaceOS.hide_nav") === "true";
  }
  get date() {
    return startOfMinute(this.time || Date.now());
  }
  get user() {
    return currentUser();
  }
  get building() {
    return this._org.building;
  }
  get hide_landing_sidebar() {
    return this._settings.get("app.hide_landing_sidebar");
  }
  get hide_colleagues() {
    return this._settings.get("app.hide_colleagues");
  }
  get show_quick_links() {
    return this._settings.get("app.show_quick_links");
  }
  constructor(_org, _settings) {
    this._org = _org;
    this._settings = _settings;
    this.tab = "people";
  }
};
_LandingComponent.\u0275fac = function LandingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LandingComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
};
_LandingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingComponent, selectors: [["app-landing"]], decls: 20, vars: 15, consts: [["class", "z-10", 4, "ngIf"], [1, "flex", "flex-1", "h-1/2", "bg-base-200"], ["class", "relative hidden sm:flex flex-col w-[18rem] h-full overflow-hidden bg-base-100 border-r border-base-300", 4, "ngIf"], [1, "flex-1", "h-full", "w-1/2", "sm:px-4", "overflow-auto", "z-0"], [1, "sticky", "top-0", "z-50", "bg-ternary", "px-4", "sm:rounded-b", "flex", "items-center", "justify-between", "overflow-hidden"], [1, ""], [1, "sm:text-xl", "font-medium"], ["date", "", 1, "text-sm", "sm:text-base"], ["class", "text-sm sm:text-base", 4, "ngIf"], [1, "h-32", "pt-4"], ["src", "assets/img/landing.svg"], [4, "ngIf"], [1, "mx-4", "w-[calc(100%-2rem)]", "h-px", "bg-base-200", "mb-2"], [1, "z-10"], [1, "relative", "hidden", "sm:flex", "flex-col", "w-[18rem]", "h-full", "overflow-hidden", "bg-base-100", "border-r", "border-base-300"], [1, "flex", "items-center", "divide-x", "divide-base-200"], ["matRipple", "", "class", "flex-1 font-medium p-2 flex items-center justify-center space-x-2", 3, "border-b", "border-base-200", "bg-base-200", "bg-opacity-5", "click", 4, "ngIf"], ["matRipple", "", 1, "flex-1", "font-medium", "p-2", "flex", "items-center", "justify-center", "space-x-2", 3, "click"], [1, "flex-1", "w-full", "h-1/2"], [1, "text-sm", "sm:text-base"]], template: function LandingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LandingComponent_topbar_0_Template, 1, 0, "topbar", 0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275template(2, LandingComponent_div_2_Template, 12, 14, "div", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "header", 4)(5, "div", 5)(6, "div", 6);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 7);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, LandingComponent_div_12_Template, 2, 1, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 9);
    \u0275\u0275element(14, "img", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, LandingComponent_landing_quick_links_15_Template, 1, 0, "landing-quick-links", 11);
    \u0275\u0275element(16, "landing-availability")(17, "div", 12)(18, "landing-upcoming");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, LandingComponent_footer_menu_19_Template, 1, 0, "footer-menu", 11);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", !ctx.hide_nav);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.hide_landing_sidebar);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 7, "WPA.WELCOME_MESSAGE", \u0275\u0275pureFunction1(13, _c05, ctx.user == null ? null : ctx.user.name)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 10, ctx.date, "fullDate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx.building == null ? null : ctx.building.address) || (ctx.building == null ? null : ctx.building.name));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.show_quick_links);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx.hide_nav);
  }
}, dependencies: [NgIf, TopbarComponent, FooterMenuComponent, IconComponent, MatRipple, LandingColleaguesComponent, LandingAvailabilityComponent, LandingUpcomingComponent, LandingFavouritesComponent, LandingQuickLinksComponent, UpperCasePipe, DatePipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\nmain[_ngcontent-%COMP%] {\n  min-height: 50%;\n}\n/*# sourceMappingURL=landing.component.css.map */"] });
var LandingComponent = _LandingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "apps/workplace/src/app/landing/landing.component.ts", lineNumber: 113 });
})();

// apps/workplace/src/app/landing/landing.module.ts
var ROUTES = [{ path: "", component: LandingComponent }];
var _AppLandingModule = class _AppLandingModule {
};
_AppLandingModule.\u0275fac = function AppLandingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppLandingModule)();
};
_AppLandingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppLandingModule });
_AppLandingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  SharedComponentModule,
  FormsModule,
  RouterModule.forChild(ROUTES)
] });
var AppLandingModule = _AppLandingModule;
export {
  AppLandingModule
};
//# sourceMappingURL=landing.module-MNHKA6Q7.js.map
