import {
  FAV_LOCKER_KEY
} from "./chunk-PB2VBNKM.js";
import "./chunk-UBCPBIRB.js";
import {
  BookingCardComponent,
  EventCardComponent
} from "./chunk-IQC7XJ6D.js";
import "./chunk-BJNZUIEM.js";
import {
  FAV_DESK_KEY
} from "./chunk-GENICFHQ.js";
import "./chunk-DOR3G6FN.js";
import {
  LevelPipe
} from "./chunk-YM43MAGG.js";
import "./chunk-TNDPKIGK.js";
import {
  FAV_PARKING_KEY
} from "./chunk-KG3E6LEE.js";
import "./chunk-CALYWFDY.js";
import "./chunk-S6ZR5LUN.js";
import {
  BookingFormService
} from "./chunk-S35VVZBL.js";
import {
  BuildingPipe
} from "./chunk-CFE53OJW.js";
import {
  ExploreSpacesService
} from "./chunk-UT7CJUYK.js";
import "./chunk-ICIPGWKI.js";
import "./chunk-ND37TEVP.js";
import "./chunk-BUD7YZOG.js";
import "./chunk-M76X6DXT.js";
import "./chunk-C2PVN2WU.js";
import "./chunk-II4WSB74.js";
import {
  EventFormService
} from "./chunk-54ENOEFH.js";
import "./chunk-HMWFVGNZ.js";
import "./chunk-4YBHDB4T.js";
import {
  CalendarService
} from "./chunk-DHQW5NC3.js";
import {
  FooterMenuComponent,
  ScheduleStateService,
  TopbarComponent
} from "./chunk-O2JODUUN.js";
import "./chunk-VW43QZTG.js";
import "./chunk-MZVEFEGQ.js";
import "./chunk-TLTH63U5.js";
import "./chunk-RHCVVWRG.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-5URFXOG6.js";
import {
  AuthenticatedImageDirective,
  MatTooltip,
  MatTooltipModule,
  UserAvatarComponent
} from "./chunk-SUJSAOO4.js";
import {
  SpacePipe,
  queryEvents,
  removeEvent,
  requestSpacesForZone
} from "./chunk-TGLGBZBE.js";
import "./chunk-JIBVHYNC.js";
import {
  searchStaff
} from "./chunk-A646ZXHH.js";
import {
  AsyncHandler,
  Booking,
  Building,
  CalendarEvent,
  IconComponent,
  MatDialog,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  OrganisationService,
  SettingsService,
  StaffUser,
  checkinBooking,
  currentUser,
  filterResourcesFromRules,
  openConfirmModal,
  removeBooking,
  settingSignal,
  userSignal
} from "./chunk-4TCF4KBF.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  Injectable,
  Ma,
  MatRipple,
  MatRippleModule,
  Na,
  NgControlStatus,
  NgModel,
  Qu,
  Router,
  RouterLink,
  RouterModule,
  Rt,
  SlicePipe,
  TranslatePipe,
  ViewChild,
  Wl,
  Wu,
  computed,
  effect,
  format,
  i18n,
  inject,
  isSameDay,
  notifyError,
  notifySuccess,
  setClassMetadata,
  signal,
  startOfMinute,
  unique,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
} from "./chunk-CKWNTDV3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/workplace/src/app/landing/landing-state.service.ts
var LandingStateService = class _LandingStateService extends AsyncHandler {
  constructor() {
    super();
    this._calendar = inject(CalendarService);
    this._schedule = inject(ScheduleStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._options = signal(
      {},
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loading_spaces = signal(
      false,
      ...ngDevMode ? [{ debugName: "_loading_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._contacts = signal(
      [],
      ...ngDevMode ? [{ debugName: "_contacts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._level_occupancy = signal(
      [],
      ...ngDevMode ? [{ debugName: "_level_occupancy" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booking_rules = signal(
      [],
      ...ngDevMode ? [{ debugName: "_booking_rules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._space_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "_space_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._space_statuses = signal(
      [],
      ...ngDevMode ? [{ debugName: "_space_statuses" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._search_results = signal(
      [],
      ...ngDevMode ? [{ debugName: "_search_results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._upcoming_events = signal(
      [],
      ...ngDevMode ? [{ debugName: "_upcoming_events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._filtered_spaces = computed(
      () => filterResourcesFromRules(this._space_list(), {
        date: Date.now(),
        duration: 60,
        host: currentUser(),
        resource: null
      }, this._booking_rules()),
      ...ngDevMode ? [{ debugName: "_filtered_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.free_space_list = computed(
      () => (this._space_list() || []).filter((_, idx) => this._space_statuses()[idx] === "free").sort((a, b) => a.capacity - b.capacity),
      ...ngDevMode ? [{ debugName: "free_space_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.upcoming_events = this._upcoming_events.asReadonly();
    this.contacts = this._contacts.asReadonly();
    this.options = this._options.asReadonly();
    this.loading = this._loading.asReadonly();
    this.loading_spaces = this._loading_spaces.asReadonly();
    this.search_results = this._search_results.asReadonly();
    this.level_occupancy = this._level_occupancy.asReadonly();
    this.search_fn = async (q) => this._settings.get("app.basic_user_search") || this._settings.get("app.colleagues_require_auth") !== false ? Ma({ q, authority_id: Rt()?.id }).then(({ data }) => data.map((_) => new StaffUser(_))) : searchStaff(q);
    effect(async (onCleanup) => {
      const bld = this._org.active_building();
      if (!bld)
        return;
      let active = true;
      onCleanup(() => active = false);
      const metadata = await Wu(bld.id, `room_booking_rules`).catch(() => ({ details: [] }));
      const spaces = await requestSpacesForZone(bld.id).toPromise().catch(() => []);
      if (!active)
        return;
      this._booking_rules.set(metadata?.details instanceof Array ? metadata.details : []);
      this._space_list.set((spaces || []).filter((s) => s.bookable));
      this.updateBuildingMetadata();
      this.updateOccupancy({});
    });
    effect((onCleanup) => {
      const list = this._filtered_spaces();
      this.unsubWith("bind:");
      this._space_statuses.set(Array(list.length).fill(null));
      for (const [idx, space] of list.entries()) {
        const binding = Wl(space.id, "Bookings").variable("status");
        const unsubscribe = binding.bindThenSubscribe((status) => {
          const next_statuses = [...untracked(this._space_statuses)];
          next_statuses[idx] = status;
          this._space_statuses.set(next_statuses);
        });
        this.subscription(`bind:${space.id}`, unsubscribe);
      }
      onCleanup(() => this.unsubWith("bind:"));
    });
    effect((onCleanup) => {
      const { search } = this._options();
      const timeout = setTimeout(async () => {
        this._loading.set("Loading users...");
        const results = search ? await this.search_fn(search).catch(() => []) : [];
        this._search_results.set(results);
        this._loading.set("");
      }, 500);
      onCleanup(() => clearTimeout(timeout));
    });
    effect(() => {
      this._upcoming_events.set(this._schedule.filtered_bookings().filter((i) => i.state !== "done" && isSameDay(i.date, Date.now())));
    });
    this.init();
  }
  async init() {
    await this._org.waitUntilInitialised();
    this.updateContacts();
    const mod = this._org.module("area_management", "AreaManagement");
    if (!mod)
      return;
    const binding = mod.variable("overview");
    this.subscription("overview", binding.bindThenSubscribe((d) => this.updateOccupancy(d || {})));
  }
  setOptions(options) {
    this._options.update((old_options) => __spreadValues(__spreadValues({}, old_options), options));
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
    const metadata = await Wu(currentUser().id, "contacts");
    const list = metadata.details instanceof Array ? metadata.details : [];
    const users = await Promise.all(list.map((_) => Na(_.email).catch(() => _)));
    this._contacts.set(users.map((i) => new StaffUser(i)));
  }
  async addContact(user) {
    let users = [...this._contacts()];
    users.push(user);
    users = unique(users, "email");
    await Qu(currentUser().id, {
      name: "contacts",
      description: "Contacts for the User",
      details: users
    });
    this.updateContacts();
  }
  async removeContact(user) {
    let users = [...this._contacts()];
    users = users.filter((u) => u.email !== user.email);
    await Qu(currentUser().id, {
      name: "contacts",
      description: "Contacts for the User",
      details: users
    });
    this.updateContacts();
  }
  async updateOccupancy(map) {
    const levels = this._org.levelsForBuilding() || [];
    levels.sort((a, b) => map[a.id]?.recommendation - map[b.id]?.recommendation);
    this._level_occupancy.set(levels);
  }
  async updateBuildingMetadata() {
    this._level_occupancy.set([]);
    const occupancy = this._org.binding("occupancy");
    if (!occupancy)
      return;
    const { sys, module, index } = occupancy;
    const mod = Wl(sys, module, index);
    if (!mod)
      return;
    this._occupancy_binding = mod.variable("occupancy");
    this.subscription("occupancy_binding", this._occupancy_binding.bindThenSubscribe((value) => {
      const levels = Object.keys(value || {}).map((key) => __spreadValues({
        id: key
      }, value[key]));
      levels.sort((a, b) => a.recommendation_factor - b.recommendation_factor);
      this._level_occupancy.set(levels.map((i) => this._org.levelWithID([i.id])));
    }));
  }
  static {
    this.\u0275fac = function LandingStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LandingStateService, factory: _LandingStateService.\u0275fac, providedIn: "root" });
  }
};
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
    \u0275\u0275property("source", lvl_r1?.images[0]);
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
    \u0275\u0275conditional(lvl_r1?.images?.length ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", lvl_r1.display_name || lvl_r1.name, " ");
    const building_r2 = \u0275\u0275pipeBind1(11, 5, lvl_r1.parent_id);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", building_r2?.display_name || building_r2?.name, " ");
  }
}
function LandingAvailabilityComponent_Conditional_3_Conditional_3_Template(rf, ctx) {
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
    \u0275\u0275conditionalCreate(3, LandingAvailabilityComponent_Conditional_3_Conditional_3_Template, 3, 3, "span", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mb-4", !ctx_r2.hide_rooms());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.levels_free());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.levels_free().length ? 3 : -1);
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
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "RESOURCE.ROOMS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.loading_spaces() ? 4 : -1);
  }
}
function LandingAvailabilityComponent_Conditional_5_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const space_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", space_r5.images[0]);
  }
}
function LandingAvailabilityComponent_Conditional_5_For_2_Conditional_3_Template(rf, ctx) {
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
    \u0275\u0275conditionalCreate(2, LandingAvailabilityComponent_Conditional_5_For_2_Conditional_2_Template, 1, 1, "img", 8)(3, LandingAvailabilityComponent_Conditional_5_For_2_Conditional_3_Template, 1, 0, "img", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10)(5, "div", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "icon", 13);
    \u0275\u0275text(9, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275declareLet(10);
    \u0275\u0275pipe(11, "level");
    \u0275\u0275elementStart(12, "div", 14);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const space_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(space_r5.images?.length ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", space_r5.display_name || space_r5.name, " ");
    const level_r6 = \u0275\u0275pipeBind1(11, 3, space_r5.zones);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", level_r6?.display_name || level_r6?.name, " ");
  }
}
function LandingAvailabilityComponent_Conditional_5_Conditional_3_Template(rf, ctx) {
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
    \u0275\u0275repeaterCreate(1, LandingAvailabilityComponent_Conditional_5_For_2_Template, 14, 5, "button", 16, \u0275\u0275componentInstance().trackBySpaceId, true);
    \u0275\u0275conditionalCreate(3, LandingAvailabilityComponent_Conditional_5_Conditional_3_Template, 3, 3, "span", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.space_list());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.space_list().length ? 3 : -1);
  }
}
var LandingAvailabilityComponent = class _LandingAvailabilityComponent {
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
  static {
    this.\u0275fac = function LandingAvailabilityComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingAvailabilityComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingAvailabilityComponent, selectors: [["landing-availability"]], features: [\u0275\u0275ProvidersFeature([ExploreSpacesService])], decls: 6, vars: 5, consts: [[1, "py-2"], [1, "mb-2", "px-4", "font-medium", "sm:mb-4", "sm:text-lg"], [1, "flex", "items-center", "space-x-2", "px-4", "text-sm", "sm:text-base"], [1, "mx-4", "flex", "w-[calc(100%-2rem)]", "snap-x", "items-center", "space-x-2", "overflow-auto", "py-2", 3, "mb-4"], [1, "mx-4", "flex", "w-[calc(100%-2rem)]", "snap-x", "items-center", "space-x-2", "overflow-auto", "py-2"], ["name", "landing-view-space", "matRipple", "", 1, "border-base-200", "bg-base-100", "flex", "w-64", "snap-start", "items-center", "space-x-2", "rounded-sm", "border", "p-2", "shadow-sm", 3, "routerLink", "queryParams"], [1, "mb-2", "text-sm", "opacity-60"], [1, "bg-base-200", "flex", "h-16", "w-16", "min-w-16", "items-center", "justify-center", "overflow-hidden", "rounded-sm"], ["auth", "", 1, "h-full", "w-full", "object-cover", "object-center", 3, "source"], ["src", "assets/icons/desk-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"], [1, "w-1/2", "flex-1", "space-y-1", "text-left"], [1, "max-w-full", "truncate", "px-1.5", "font-medium"], [1, "flex", "max-w-full", "items-center", "truncate", "text-sm", "opacity-60"], [1, "text-lg", "text-blue-500"], [1, "flex-1", "truncate"], ["diameter", "24"], ["name", "landing-book-room", "matRipple", "", 1, "border-base-200", "bg-base-100", "flex", "w-64", "snap-start", "items-center", "space-x-4", "rounded-sm", "border", "p-2", "shadow-sm"], ["name", "landing-book-room", "matRipple", "", 1, "border-base-200", "bg-base-100", "flex", "w-64", "snap-start", "items-center", "space-x-4", "rounded-sm", "border", "p-2", "shadow-sm", 3, "click"], ["src", "assets/icons/room-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"]], template: function LandingAvailabilityComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, LandingAvailabilityComponent_Conditional_1_Template, 3, 3, "div", 1);
        \u0275\u0275conditionalCreate(2, LandingAvailabilityComponent_Conditional_2_Template, 4, 3, "div", 2);
        \u0275\u0275conditionalCreate(3, LandingAvailabilityComponent_Conditional_3_Template, 4, 3, "div", 3);
        \u0275\u0275conditionalCreate(4, LandingAvailabilityComponent_Conditional_4_Template, 5, 4, "div", 2);
        \u0275\u0275conditionalCreate(5, LandingAvailabilityComponent_Conditional_5_Template, 4, 1, "div", 4);
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
        \u0275\u0275conditional(!ctx.hide_rooms() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_rooms() ? 5 : -1);
      }
    }, dependencies: [
      CommonModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      RouterModule,
      RouterLink,
      IconComponent,
      AuthenticatedImageDirective,
      TranslatePipe,
      LevelPipe,
      BuildingPipe
    ], styles: ["\n*[_ngcontent-%COMP%] {\n  shrink: 0;\n}\n/*# sourceMappingURL=landing-availability.component.css.map */"] });
  }
};
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
                    @for (lvl of levels_free(); track lvl) {
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
                    @if (!levels_free().length) {
                        <span class="mb-2 text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.AVAILABLE_LIST_SPACES_EMPTY'
                                    | translate
                            }}
                        </span>
                    }
                </div>
            }
            @if (!hide_rooms()) {
                <div
                    class="flex items-center space-x-2 px-4 text-sm sm:text-base"
                >
                    <div>
                        {{ 'RESOURCE.ROOMS' | translate }}
                    </div>
                    @if (loading_spaces()) {
                        <mat-spinner diameter="24"></mat-spinner>
                    }
                </div>
            }
            @if (!hide_rooms()) {
                <div
                    class="mx-4 flex w-[calc(100%-2rem)] snap-x items-center space-x-2 overflow-auto py-2"
                >
                    @for (
                        space of space_list();
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
                                @if (space.images?.length) {
                                    <img
                                        auth
                                        [source]="space.images[0]"
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
                    @if (!space_list().length) {
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
      MatProgressSpinnerModule,
      RouterModule,
      IconComponent,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;604008b5b82ae8efe608a1ad34bb5a806886552a595ea4c88282f9cd101ac1cc;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/landing/landing-availability.component.ts */\n* {\n  shrink: 0;\n}\n/*# sourceMappingURL=landing-availability.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingAvailabilityComponent, { className: "LandingAvailabilityComponent", filePath: "apps/workplace/src/app/landing/landing-availability.component.ts", lineNumber: 189 });
})();

// apps/workplace/src/app/landing/landing-colleagues.component.ts
var _c02 = ["search_input"];
var _c12 = (a0) => ({ count: a0 });
var _c2 = (a0) => ({ text: a0 });
function LandingColleaguesComponent_Conditional_5_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 24);
  }
  if (rf & 2) {
    const user_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("bg-error", user_r2.location === "aol" || user_r2.location === "ooo")("bg-success", user_r2.location === "wfo")("bg-warning", user_r2.location === "wfh")("bg-neutral", !user_r2.location);
    \u0275\u0275property("matTooltip", user_r2.location_name);
  }
}
function LandingColleaguesComponent_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275element(2, "a-user-avatar", 12);
    \u0275\u0275conditionalCreate(3, LandingColleaguesComponent_Conditional_5_For_1_Conditional_3_Template, 1, 9, "div", 13);
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
    \u0275\u0275listener("click", function LandingColleaguesComponent_Conditional_5_For_1_Template_button_click_16_listener() {
      const user_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.newMeeting(user_r2));
    });
    \u0275\u0275elementStart(17, "div", 21)(18, "icon", 22);
    \u0275\u0275text(19, "today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 23);
    \u0275\u0275listener("click", function LandingColleaguesComponent_Conditional_5_For_1_Template_button_click_23_listener() {
      const user_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeUser(user_r2));
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
    const user_r2 = ctx.$implicit;
    const menu_r4 = \u0275\u0275reference(15);
    \u0275\u0275advance(2);
    \u0275\u0275property("user", user_r2);
    \u0275\u0275advance();
    \u0275\u0275conditional(!user_r2.outsideHours?.() ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", user_r2.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", user_r2.organisation);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r2.organisation, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r2.location_name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r4);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 10, "APP.WORKPLACE.COLLEAGUE_NEW_MEETING"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 12, "APP.WORKPLACE.COLLEAGUE_REMOVE"), " ");
  }
}
function LandingColleaguesComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LandingColleaguesComponent_Conditional_5_For_1_Template, 30, 14, "div", 10, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.contacts());
  }
}
function LandingColleaguesComponent_Conditional_6_Template(rf, ctx) {
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
function LandingColleaguesComponent_Conditional_17_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function LandingColleaguesComponent_Conditional_17_Conditional_1_For_1_Template_button_click_0_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addUser(user_r6));
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
    const user_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("user", user_r6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r6.organisation || user_r6.email, " ");
  }
}
function LandingColleaguesComponent_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LandingColleaguesComponent_Conditional_17_Conditional_1_For_1_Template, 8, 3, "button", 27, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.search_results());
  }
}
function LandingColleaguesComponent_Conditional_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", !ctx_r2.options().search ? \u0275\u0275pipeBind1(3, 1, "COMMON.SELECT_USER_EMPTY") : \u0275\u0275pipeBind2(4, 3, "COMMON.SELECT_USER_EMPTY", \u0275\u0275pureFunction1(6, _c2, ctx_r2.options().search)), " ");
  }
}
function LandingColleaguesComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275conditionalCreate(1, LandingColleaguesComponent_Conditional_17_Conditional_1_Template, 2, 0)(2, LandingColleaguesComponent_Conditional_17_Conditional_2_Template, 5, 8, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.search_results().length ? 1 : 2);
  }
}
function LandingColleaguesComponent_Conditional_18_Template(rf, ctx) {
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
var LandingColleaguesComponent = class _LandingColleaguesComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(LandingStateService);
    this._settings = inject(SettingsService);
    this._event_form = inject(EventFormService);
    this._router = inject(Router);
    this.show_search = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.contacts = this._state.contacts;
    this.search_results = computed(
      () => this._state.search_results().filter((_) => !this._state.contacts().find((user) => user.id === _.id || user.email === _.email)),
      ...ngDevMode ? [{ debugName: "search_results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.addUser = async (u) => {
      await this._state.addContact(u);
      notifySuccess(i18n("APP.WORKPLACE.COLLEAGUE_ADDED", { name: u.name }));
      this.show_search.set(false);
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
      this._event_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
        attendees: [user]
      }));
    }, 300);
    if (this._settings.get("app.new_features")) {
      this._router.navigate(["/book", "meeting"]);
    } else {
      this._router.navigate(["/book", "spaces"]);
    }
  }
  openSearch() {
    this.updateSearch("");
    this.show_search.set(true);
    this.timeout("open", () => this._input_el().nativeElement.focus(), 100);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275LandingColleaguesComponent_BaseFactory;
      return function LandingColleaguesComponent_Factory(__ngFactoryType__) {
        return (\u0275LandingColleaguesComponent_BaseFactory || (\u0275LandingColleaguesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LandingColleaguesComponent)))(__ngFactoryType__ || _LandingColleaguesComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingColleaguesComponent, selectors: [["landing-colleagues"]], viewQuery: function LandingColleaguesComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._input_el, _c02, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, features: [\u0275\u0275InheritDefinitionFeature], decls: 19, vars: 17, consts: [["search_input", ""], ["menu", "matMenu"], [1, "bg-base-200", "mx-2", "flex", "items-center", "justify-between", "rounded-sm", "p-2", "text-sm"], [1, "h-1/2", "w-full", "flex-1", "space-y-4", "overflow-auto", "pt-4"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["btn", "", "name", "open-colleague-search", "matRipple", "", 1, "inverse", "m-2", "w-[calc(100%-1rem)]", 3, "click"], ["search", "", 1, "border-base-200", "bg-base-100", "absolute", "inset-x-2", "top-2", "bottom-16", "flex", "flex-col", "overflow-hidden", "rounded-sm", "border"], [1, "border-base-200", "w-full", "border-b", "p-2", 3, "ngModelChange", "ngModel", "placeholder"], ["icon", "", "name", "close-colleague-search", 1, "absolute", "top-0", "right-0", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto"], ["user", "", 1, "relative", "flex", "items-center", "space-x-2", "px-2"], [1, "relative", "text-xl"], [3, "user"], [1, "absolute", "right-1", "bottom-1", "h-3", "w-3", "rounded-full", "border", "border-white", 3, "bg-error", "bg-success", "bg-warning", "bg-neutral", "matTooltip"], [1, "w-1/2", "flex-1", "leading-tight"], [1, "truncate", 3, "matTooltip"], [1, "truncate", "text-sm", 3, "matTooltip"], [1, "truncate", "text-xs", "opacity-60"], ["icon", "", "default", "", "name", "colleague-more", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["mat-menu-item", "", "name", "meeting-with-colleague", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], ["name", "remove-colleague", "mat-menu-item", "", 3, "click"], [1, "absolute", "right-1", "bottom-1", "h-3", "w-3", "rounded-full", "border", "border-white", 3, "matTooltip"], ["src", "assets/icons/no-contacts.svg"], [1, "text-center", "text-sm", "opacity-60"], ["matRipple", "", "name", "add-colleague", 1, "flex", "min-h-12", "w-full", "items-center", "space-x-2", "p-1", "text-left"], ["matRipple", "", "name", "add-colleague", 1, "flex", "min-h-12", "w-full", "items-center", "space-x-2", "p-1", "text-left", 3, "click"], [1, "relative", "text-base"], [1, "flex-1", "leading-tight"], [1, "truncate"], ["diameter", "32"]], template: function LandingColleaguesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "h2");
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275conditionalCreate(5, LandingColleaguesComponent_Conditional_5_Template, 2, 0)(6, LandingColleaguesComponent_Conditional_6_Template, 5, 3, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 5);
        \u0275\u0275listener("click", function LandingColleaguesComponent_Template_button_click_7_listener() {
          return ctx.openSearch();
        });
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 6)(11, "input", 7, 0);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275listener("ngModelChange", function LandingColleaguesComponent_Template_input_ngModelChange_11_listener($event) {
          return ctx.updateSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(14, "button", 8);
        \u0275\u0275listener("click", function LandingColleaguesComponent_Template_button_click_14_listener() {
          return ctx.show_search.set(false);
        });
        \u0275\u0275elementStart(15, "icon");
        \u0275\u0275text(16, "close");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(17, LandingColleaguesComponent_Conditional_17_Template, 3, 1, "div", 9)(18, LandingColleaguesComponent_Conditional_18_Template, 5, 3, "div", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 8, "APP.WORKPLACE.COLLEAGUES_COUNT", \u0275\u0275pureFunction1(15, _c12, ctx.contacts().length || 0)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.contacts().length ? 5 : 6);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 11, "APP.WORKPLACE.COLLEAGUE_ADD"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("hidden", !ctx.show_search());
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.options().search)("placeholder", \u0275\u0275pipeBind1(13, 13, "FORM.USER_SEARCH"));
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275conditional(!ctx.loading() ? 17 : 18);
      }
    }, dependencies: [
      CommonModule,
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
      MatMenuTrigger,
      TranslatePipe
    ], styles: ["\n[user][_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=landing-colleagues.component.css.map */"] });
  }
};
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
                        | translate: { count: contacts().length || 0 }
                }}
            </h2>
        </div>
        <div class="h-1/2 w-full flex-1 space-y-4 overflow-auto pt-4">
            @if (contacts().length) {
                @for (user of contacts(); track user) {
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
                            default
                            name="colleague-more"
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
            [class.hidden]="!show_search()"
            class="border-base-200 bg-base-100 absolute inset-x-2 top-2 bottom-16 flex flex-col overflow-hidden rounded-sm border"
        >
            <input
                #search_input
                [ngModel]="options().search"
                (ngModelChange)="updateSearch($event)"
                [placeholder]="'FORM.USER_SEARCH' | translate"
                class="border-base-200 w-full border-b p-2"
            />
            <button
                icon
                name="close-colleague-search"
                class="absolute top-0 right-0"
                (click)="show_search.set(false)"
            >
                <icon>close</icon>
            </button>
            @if (!loading()) {
                <div class="flex h-1/2 flex-1 flex-col space-y-2 overflow-auto">
                    @if (search_results().length) {
                        @for (user of search_results(); track user) {
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
                                    !options().search
                                        ? ('COMMON.SELECT_USER_EMPTY'
                                          | translate)
                                        : ('COMMON.SELECT_USER_EMPTY'
                                          | translate
                                              : {
                                                    text: options().search,
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
  }], null, { _input_el: [{ type: ViewChild, args: ["search_input", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingColleaguesComponent, { className: "LandingColleaguesComponent", filePath: "apps/workplace/src/app/landing/landing-colleagues.component.ts", lineNumber: 247 });
})();

// apps/workplace/src/app/landing/landing-favourites.component.ts
var _c03 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.id || $index;
function LandingFavouritesComponent_Conditional_5_For_1_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const space_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("source", space_r2.images[0]);
  }
}
function LandingFavouritesComponent_Conditional_5_For_1_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
}
function LandingFavouritesComponent_Conditional_5_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    \u0275\u0275conditionalCreate(3, LandingFavouritesComponent_Conditional_5_For_1_Conditional_0_Conditional_3_Template, 1, 1, "img", 7)(4, LandingFavouritesComponent_Conditional_5_For_1_Conditional_0_Conditional_4_Template, 1, 0, "img", 8);
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
    \u0275\u0275listener("click", function LandingFavouritesComponent_Conditional_5_For_1_Conditional_0_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const space_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.newSpaceMeeting(space_r2.id));
    });
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 16)(23, "icon");
    \u0275\u0275text(24, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "mat-menu", 17, 0)(27, "button", 18);
    \u0275\u0275listener("click", function LandingFavouritesComponent_Conditional_5_For_1_Conditional_0_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const space_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeFavourite("space", space_r2.id));
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
    const menu_r4 = \u0275\u0275reference(26);
    const space_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(space_r2.images.length ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", space_r2.display_name || space_r2.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.level(space_r2)?.display_name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 8, "APP.WORKPLACE.CAPACITY", \u0275\u0275pureFunction1(15, _c03, space_r2.capacity || 2)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isClosed(space_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 11, "COMMON.BOOK"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r4);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 13, "APP.WORKPLACE.FAVOURITES_REMOVE"), " ");
  }
}
function LandingFavouritesComponent_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LandingFavouritesComponent_Conditional_5_For_1_Conditional_0_Template, 34, 17, "div", 4);
  }
  if (rf & 2) {
    const space_r2 = ctx.$implicit;
    \u0275\u0275conditional(space_r2?.id ? 0 : -1);
  }
}
function LandingFavouritesComponent_Conditional_5_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", item_r6?.images[0]);
  }
}
function LandingFavouritesComponent_Conditional_5_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 21);
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", "assets/icons/" + (item_r6.type === "desk" ? "desk" : "car") + "-placeholder.svg", \u0275\u0275sanitizeUrl);
  }
}
function LandingFavouritesComponent_Conditional_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    \u0275\u0275conditionalCreate(3, LandingFavouritesComponent_Conditional_5_For_3_Conditional_3_Template, 1, 1, "img", 7)(4, LandingFavouritesComponent_Conditional_5_For_3_Conditional_4_Template, 1, 1, "img", 21);
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
    \u0275\u0275listener("click", function LandingFavouritesComponent_Conditional_5_For_3_Template_button_click_13_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.newBooking(item_r6.type, item_r6));
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 24)(17, "icon");
    \u0275\u0275text(18, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-menu", 17, 0)(21, "button", 18);
    \u0275\u0275listener("click", function LandingFavouritesComponent_Conditional_5_For_3_Template_button_click_21_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeFavourite(item_r6.type, item_r6.id));
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
    const item_r6 = ctx.$implicit;
    const menu_r7 = \u0275\u0275reference(20);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(item_r6?.images?.length ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r6?.display_name || item_r6?.name || item_r6?.id, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", item_r6?.zone?.display_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 6, "COMMON.BOOK"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r7);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 8, "APP.WORKPLACE.FAVOURITES_REMOVE"), " ");
  }
}
function LandingFavouritesComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LandingFavouritesComponent_Conditional_5_For_1_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275repeaterCreate(2, LandingFavouritesComponent_Conditional_5_For_3_Template, 28, 10, "div", 4, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.spaces());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.assets());
  }
}
function LandingFavouritesComponent_Conditional_6_Template(rf, ctx) {
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
var LandingFavouritesComponent = class _LandingFavouritesComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._space_pipe = inject(SpacePipe);
    this._event_form = inject(EventFormService);
    this._booking_form = inject(BookingFormService);
    this._router = inject(Router);
    this.spaces = signal(
      [],
      ...ngDevMode ? [{ debugName: "spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.assets = signal(
      [],
      ...ngDevMode ? [{ debugName: "assets" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get space_ids() {
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
    const metadata = await Wu(this._org.organisation.id, "room_alerts");
    this._room_alerts = metadata.details;
    await this.loadSpaces();
    await this.loadAssets();
  }
  async loadSpaces() {
    const spaces = await Promise.all(this.space_ids.map((id) => this._space_pipe.transform(id)));
    this.spaces.set(spaces.filter((space) => !!space?.id));
  }
  async loadAssets() {
    const [desks, parking] = await Promise.all([
      this._booking_form.loadResourceList("desks"),
      this._booking_form.loadParkingResources()
    ]);
    this.assets.set([
      ...desks.filter(({ id }) => this.desks.includes(id)).map((_) => __spreadProps(__spreadValues({}, _), { type: "desk" })),
      ...parking.filter(({ id }) => this.parking_spaces.includes(id)).map((_) => __spreadProps(__spreadValues({}, _), { type: "parking" }))
    ]);
  }
  removeFavourite(type, id) {
    let fav_list = this.space_ids;
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
    this.loadSpaces();
    this.loadAssets();
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
      this._event_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
        resources: [space]
      }));
    }, 300);
  }
  async newBooking(type, item) {
    if (!item)
      return;
    const booking_path = type === "desk" ? this._settings.get("app.new_features") ? "desk" : "desks" : type === "locker" ? "locker" : "parking";
    const query_params = type === "desk" ? { asset_id: item.id } : {};
    this._router.navigate(["/book", booking_path], {
      queryParams: query_params
    });
    if (type === "desk") {
      return;
    }
    setTimeout(() => {
      this._booking_form.newForm(type);
      this._booking_form.setOptions({ type });
      this._booking_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
        resources: [item],
        asset_id: item.id,
        booking_type: type
      }));
    }, 100);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275LandingFavouritesComponent_BaseFactory;
      return function LandingFavouritesComponent_Factory(__ngFactoryType__) {
        return (\u0275LandingFavouritesComponent_BaseFactory || (\u0275LandingFavouritesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LandingFavouritesComponent)))(__ngFactoryType__ || _LandingFavouritesComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingFavouritesComponent, selectors: [["landing-favourites"]], features: [\u0275\u0275ProvidersFeature([SpacePipe]), \u0275\u0275InheritDefinitionFeature], decls: 7, vars: 7, consts: [["menu", "matMenu"], [1, "bg-base-200", "mx-2", "flex", "items-center", "justify-between", "rounded-sm", "p-2", "text-sm"], [1, "divide-base-200", "h-1/2", "w-full", "flex-1", "space-y-2", "divide-y", "overflow-auto", "pt-4"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["item", "", 1, "relative", "mx-2", "flex", "flex-col", "items-center", "space-y-2", "pt-2"], [1, "relative", "flex", "w-full", "items-center", "space-x-2"], [1, "bg-base-300", "relative", "flex", "h-16", "w-16", "items-center", "justify-center", "overflow-hidden", "rounded-sm"], ["auth", "", 1, "absolute", "top-1/2", "left-1/2", "min-h-full", "min-w-full", "-translate-x-1/2", "-translate-y-1/2", "object-cover", 3, "source"], ["src", "assets/icons/room-placeholder.svg", 1, "m-auto"], [1, "flex", "h-16", "w-1/2", "flex-1", "flex-col", "justify-center", "space-y-1"], [1, "w-full", "truncate", "pr-12"], [1, "flex", "items-center", "space-x-1", "text-xs", "opacity-60"], [1, "text-blue-500"], [1, "w-1/2", "flex-1", "truncate"], [1, "flex", "items-center", "space-x-2", "truncate", "text-xs", "opacity-60"], ["btn", "", "name", "book-favourite", "matRipple", "", 1, "inverse", "w-full", 3, "click", "disabled"], ["icon", "", "name", "favourite-more", 1, "bg-base-200", "absolute", "top-2", "right-0", "m-0!", "rounded-sm!", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["name", "landing-remove-favourite", "mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-error", "text-2xl"], [1, "m-auto", 3, "src"], [1, "truncate"], ["btn", "", "name", "book-favourite", "matRipple", "", 1, "inverse", "w-full", 3, "click"], ["icon", "", "default", "", "name", "favourite-more", 1, "absolute", "top-2", "right-0", 3, "matMenuTriggerFor"], [1, "pr-4"], ["src", "assets/icons/no-favourites.svg"], [1, "text-center", "text-sm", "opacity-60"]], template: function LandingFavouritesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "h2");
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275conditionalCreate(5, LandingFavouritesComponent_Conditional_5_Template, 4, 0)(6, LandingFavouritesComponent_Conditional_6_Template, 5, 3, "div", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "APP.WORKPLACE.FAVOURITES_COUNT", \u0275\u0275pureFunction1(5, _c03, ctx.spaces().length + ctx.assets().length)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.spaces().length || ctx.assets().length ? 5 : 6);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      AuthenticatedImageDirective,
      TranslatePipe
    ], styles: ["\n[user][_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=landing-favourites.component.css.map */"] });
  }
};
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
                                  count: spaces().length + assets().length,
                              }
                }}
            </h2>
        </div>
        <div
            class="divide-base-200 h-1/2 w-full flex-1 space-y-2 divide-y overflow-auto pt-4"
        >
            @if (spaces().length || assets().length) {
                @for (space of spaces(); track space.id || $index) {
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
                                [disabled]="isClosed(space.id)"
                                (click)="newSpaceMeeting(space.id)"
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
                    <div>{{ 'COMMON.VIEW_DETAILS' | translate }}</div>
                  </button> -->
                                <button
                                    name="landing-remove-favourite"
                                    mat-menu-item
                                    (click)="removeFavourite('space', space.id)"
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
                @for (item of assets(); track item) {
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
                            default
                            name="favourite-more"
                            [matMenuTriggerFor]="menu"
                            class="absolute top-2 right-0"
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
                    <div>{{ 'COMMON.VIEW_DETAILS' | translate }}</div>
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
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;ada4d8e106525fc2a6174594c2f22a46ab6eb32f3e34b0dc3ada2058cacb89f7;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/landing/landing-favourites.component.ts */\n[user]:hover button {\n  opacity: 1;\n}\n:host {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=landing-favourites.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingFavouritesComponent, { className: "LandingFavouritesComponent", filePath: "apps/workplace/src/app/landing/landing-favourites.component.ts", lineNumber: 288 });
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
var LandingQuickBookComponent = class _LandingQuickBookComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._router = inject(Router);
    this._book_form = inject(BookingFormService);
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
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
    const resources = await this._book_form.listAvailableResources();
    if (!resources.length) {
      notifyError(`No ${type} available for the current building`);
      this.loading.set("");
      return;
    }
    this._book_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
      resources: [resources[0]],
      asset_id: resources[0].id,
      asset_name: resources[0].name
    }));
    console.log("Resource:", resources[0], type);
    this.loading.set("");
    try {
      await this._book_form.confirmPost();
      this._router.navigate(["/book", type, "success"]);
    } catch {
    }
    this._book_form.resetForm();
  }
  static {
    this.\u0275fac = function LandingQuickBookComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingQuickBookComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingQuickBookComponent, selectors: [["landing-quick-book"]], decls: 6, vars: 5, consts: [[1, "mb-2", "px-4", "font-medium", "sm:mb-4", "sm:text-lg"], [1, "mx-4", "mb-4", "flex", "w-[calc(100%-2rem)]", "snap-x", "space-x-2", "overflow-auto"], ["matRipple", "", 1, "border-base-200", "bg-base-100", "flex", "w-64", "min-w-64", "snap-start", "items-center", "space-x-4", "rounded-sm", "border", "p-2", "shadow-sm"], ["matRipple", "", 1, "border-base-200", "bg-base-100", "flex", "w-64", "min-w-64", "snap-start", "items-center", "space-x-4", "rounded-sm", "border", "p-2", "shadow-sm", 3, "click"], [1, "bg-base-200", "relative", "flex", "h-16", "min-w-16", "items-center", "justify-center", "rounded-sm"], ["src", "assets/icons/desk-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "text-xl"], [1, "bg-base-100", "absolute", "inset-0", "opacity-50"], ["diameter", "48"], [1, "bg-base-200", "flex", "h-16", "min-w-16", "items-center", "justify-center", "overflow-hidden", "rounded-sm"], ["src", "assets/icons/car-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"]], template: function LandingQuickBookComponent_Template(rf, ctx) {
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
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "APP.WORKPLACE.ONECLICK_LINKS_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.features()?.includes("desks") ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.features().includes("parking") ? 5 : -1);
      }
    }, dependencies: [MatRippleModule, MatRipple, MatProgressSpinnerModule, MatProgressSpinner, TranslatePipe], encapsulation: 2 });
  }
};
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingQuickBookComponent, { className: "LandingQuickBookComponent", filePath: "apps/workplace/src/app/landing/landing-quick-book.component.ts", lineNumber: 81 });
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
var LandingQuickLinksComponent = class _LandingQuickLinksComponent {
  constructor() {
    this.features = settingSignal("features", []);
  }
  static {
    this.\u0275fac = function LandingQuickLinksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingQuickLinksComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingQuickLinksComponent, selectors: [["landing-quick-links"]], decls: 8, vars: 7, consts: [[1, "mb-2", "px-4", "font-medium", "sm:mb-4", "sm:text-lg"], [1, "mx-4", "mb-4", "flex", "w-[calc(100%-2rem)]", "snap-x", "space-x-2", "overflow-auto"], ["matRipple", "", 1, "border-base-200", "bg-base-100", "flex", "w-64", "min-w-64", "snap-start", "items-center", "space-x-4", "rounded-sm", "border", "p-2", "shadow-sm", 3, "routerLink"], [1, "bg-base-200", "flex", "h-16", "min-w-16", "items-center", "justify-center", "rounded-sm"], ["src", "assets/icons/room-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"], [1, "text-xl"], ["src", "assets/icons/desk-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"], ["src", "assets/icons/car-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"], ["src", "assets/icons/locker-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"]], template: function LandingQuickLinksComponent_Template(rf, ctx) {
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
    }, dependencies: [MatRippleModule, MatRipple, RouterModule, RouterLink, TranslatePipe], encapsulation: 2 });
  }
};
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
function LandingUpcomingComponent_Conditional_13_For_1_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-card", 8);
  }
  if (rf & 2) {
    const event_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("event", event_r1)("show_day", true)("edit_fn", ctx_r1.edit_fn)("remove_fn", ctx_r1.remove_fn);
  }
}
function LandingUpcomingComponent_Conditional_13_For_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "booking-card", 9);
  }
  if (rf & 2) {
    const event_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("booking", event_r1)("show_day", true)("edit_fn", ctx_r1.edit_booking_fn)("remove_fn", ctx_r1.remove_fn)("end_fn", ctx_r1.end_fn)("refresh_fn", ctx_r1.refresh_fn);
  }
}
function LandingUpcomingComponent_Conditional_13_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LandingUpcomingComponent_Conditional_13_For_1_Case_0_Template, 1, 4, "event-card", 8)(1, LandingUpcomingComponent_Conditional_13_For_1_Case_1_Template, 1, 6, "booking-card", 9);
  }
  if (rf & 2) {
    let tmp_12_0;
    const event_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_12_0 = ctx_r1.type(event_r1)) === "event" ? 0 : tmp_12_0 === "booking" ? 1 : -1);
  }
}
function LandingUpcomingComponent_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c05));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "APP.WORKPLACE.UPCOMING_MORE"), " ");
  }
}
function LandingUpcomingComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LandingUpcomingComponent_Conditional_13_For_1_Template, 2, 1, null, null, _forTrack02);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275conditionalCreate(3, LandingUpcomingComponent_Conditional_13_Conditional_3_Template, 3, 5, "a", 7);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const events_r3 = \u0275\u0275readContextLet(12);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(2, 1, events_r3, 0, 5));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(events_r3.length > 5 ? 3 : -1);
  }
}
function LandingUpcomingComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "img", 10);
    \u0275\u0275elementStart(2, "p", 11);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.WORKPLACE.UPCOMING_EMPTY"), " ");
  }
}
var LandingUpcomingComponent = class _LandingUpcomingComponent extends AsyncHandler {
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
    this.refresh_fn = () => this._state.refreshUpcomingEvents();
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
      event = (await queryEvents({
        period_start: event.event_start,
        period_end: event.event_end,
        ical_uid: event.ical_uid
      })).find((_) => _.ical_uid === event.ical_uid) || event;
    }
    setTimeout(() => this._event_form.newForm(event), 300);
  }
  editBooking(event) {
    this._router.navigate(["/book", `${event.type}`]);
    this._booking_form.newForm(event.booking_type, event);
    if (event.booking_type === "visitor")
      return;
    setTimeout(() => {
      this._booking_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
        resources: [
          {
            id: event.asset_id,
            name: event.asset_name || event.description
          }
        ],
        asset_id: event.asset_id
      }));
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
    const remove_result = (item instanceof CalendarEvent ? removeEvent : removeBooking)(item.id, {
      calendar: this._settings.get("app.events.use_bookings") ? null : currentUser()?.email,
      system_id: item.system?.id,
      instance: remove_series ? void 0 : !!item.instance,
      start_time: item.instance ? item.booking_start : void 0
    });
    await (remove_result?.then instanceof Function ? remove_result : remove_result.toPromise()).catch((e) => {
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
    await checkinBooking(item.id, false).catch((e) => {
      notifyError(i18n("APP.WORKPLACE.SCHEDULE_END_ERROR", { error: e }));
      resp.close();
      throw e;
    });
    notifySuccess(i18n("APP.WORKPLACE.SCHEDULE_END_SUCCESS"));
    this._state.refreshUpcomingEvents();
    this._dialog.closeAll();
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275LandingUpcomingComponent_BaseFactory;
      return function LandingUpcomingComponent_Factory(__ngFactoryType__) {
        return (\u0275LandingUpcomingComponent_BaseFactory || (\u0275LandingUpcomingComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LandingUpcomingComponent)))(__ngFactoryType__ || _LandingUpcomingComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingUpcomingComponent, selectors: [["landing-upcoming"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 15, vars: 15, consts: [[1, "py-2"], [1, "mb-2", "flex", "items-center", "justify-between", "px-4", "sm:mb-4"], [1, "font-medium", "sm:text-lg"], ["btn", "", "name", "upcoming-view-all", 1, "inverse", "hidden", "sm:flex", 3, "routerLink"], ["name", "upcoming-view-all-mobile", 1, "inverse", "relative", "top-8", "flex", "text-blue-500", "underline", "sm:hidden", 3, "routerLink"], [1, "space-y-4", "px-4"], [1, "flex", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "p-8"], ["name", "upcoming-more-bookings", 1, "border-base-300", "bg-base-100", "text-base-content/70", "hover:bg-base-200", "block", "rounded-xl", "border", "border-dashed", "p-4", "text-center", "text-sm", "transition-colors", 3, "routerLink"], [3, "event", "show_day", "edit_fn", "remove_fn"], [3, "booking", "show_day", "edit_fn", "remove_fn", "end_fn", "refresh_fn"], ["src", "assets/img/no-events.svg", 1, "mr-4"], [1, "opacity-30"]], template: function LandingUpcomingComponent_Template(rf, ctx) {
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
        \u0275\u0275declareLet(12);
        \u0275\u0275conditionalCreate(13, LandingUpcomingComponent_Conditional_13_Template, 4, 5)(14, LandingUpcomingComponent_Conditional_14_Template, 5, 3, "div", 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "APP.WORKPLACE.UPCOMING"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c05));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, "COMMON.VIEW_ALL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(14, _c05));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 10, "COMMON.VIEW_ALL"), " ");
        \u0275\u0275advance(3);
        const events_r4 = \u0275\u0275storeLet(ctx.upcoming_events());
        \u0275\u0275advance();
        \u0275\u0275conditional(events_r4?.length ? 13 : 14);
      }
    }, dependencies: [
      CommonModule,
      RouterModule,
      RouterLink,
      EventCardComponent,
      BookingCardComponent,
      SlicePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
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
                    {{ 'COMMON.VIEW_ALL' | translate }}
                </a>
                <a
                    name="upcoming-view-all-mobile"
                    class="inverse relative top-8 flex text-blue-500 underline sm:hidden"
                    [routerLink]="['/your-bookings']"
                >
                    {{ 'COMMON.VIEW_ALL' | translate }}
                </a>
            </div>
            <div class="space-y-4 px-4">
                @let events = upcoming_events();
                @if (events?.length) {
                    @for (
                        event of events | slice: 0 : 5;
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
                                    [refresh_fn]="refresh_fn"
                                ></booking-card>
                            }
                        }
                    }
                    @if (events.length > 5) {
                        <a
                            name="upcoming-more-bookings"
                            class="border-base-300 bg-base-100 text-base-content/70 hover:bg-base-200 block rounded-xl border border-dashed p-4 text-center text-sm transition-colors"
                            [routerLink]="['/your-bookings']"
                        >
                            {{ 'APP.WORKPLACE.UPCOMING_MORE' | translate }}
                        </a>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingUpcomingComponent, { className: "LandingUpcomingComponent", filePath: "apps/workplace/src/app/landing/landing-upcoming.component.ts", lineNumber: 114 });
})();

// apps/workplace/src/app/landing/landing.component.ts
var _c06 = (a0) => ({ name: a0 });
function LandingComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar");
  }
}
function LandingComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function LandingComponent_Conditional_2_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.tab.set("people"));
    });
    \u0275\u0275elementStart(1, "div", 14)(2, "icon");
    \u0275\u0275text(3, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15);
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
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 11);
    \u0275\u0275conditionalCreate(2, LandingComponent_Conditional_2_Conditional_2_Template, 7, 5, "button", 12);
    \u0275\u0275elementStart(3, "button", 13);
    \u0275\u0275listener("click", function LandingComponent_Conditional_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.tab.set("fav"));
    });
    \u0275\u0275elementStart(4, "div", 14)(5, "icon");
    \u0275\u0275text(6, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 15);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 16);
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
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.building()?.address || ctx_r2.building()?.display_name || ctx_r2.building()?.name, " ");
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
var LandingComponent = class _LandingComponent extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this.time = signal(
      0,
      ...ngDevMode ? [{ debugName: "time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tab = signal(
      "people",
      ...ngDevMode ? [{ debugName: "tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_nav = signal(
      false,
      ...ngDevMode ? [{ debugName: "hide_nav" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user = userSignal();
    this.building = signal(
      new Building(),
      ...ngDevMode ? [{ debugName: "building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_landing_sidebar = settingSignal("hide_landing_sidebar");
    this.hide_colleagues = settingSignal("hide_colleagues");
    this.show_quick_links = settingSignal("show_quick_links");
    this.show_quick_book = settingSignal("show_quick_book");
    this.date = computed(
      () => startOfMinute(this.time() || Date.now()),
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect((onCleanup) => {
      this._org.active_building();
      const timeout = setTimeout(() => {
        this.hide_nav.set(localStorage.getItem("PlaceOS.hide_nav") === "true");
        this.building.set(this._org.building);
      }, 300);
      onCleanup(() => clearTimeout(timeout));
    });
  }
  static {
    this.\u0275fac = function LandingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingComponent, selectors: [["app-landing"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 21, vars: 16, consts: [[1, "bg-base-200", "flex", "h-1/2", "flex-1"], [1, "border-base-300", "bg-base-100", "relative", "hidden", "h-full", "w-[18rem]", "flex-col", "overflow-hidden", "border-r", "sm:flex"], [1, "z-0", "h-full", "w-1/2", "flex-1", "overflow-auto", "sm:px-4"], [1, "bg-brand-300", "sticky", "top-0", "z-50", "mb-4", "flex", "items-center", "justify-between", "overflow-hidden", "px-4", "shadow-sm", "sm:rounded-b"], [1, ""], [1, "font-medium", "sm:text-xl"], ["date", "", 1, "text-sm", "sm:text-base"], [1, "text-sm", "sm:text-base"], [1, "h-32", "pt-4"], ["src", "assets/img/landing.svg"], [1, "bg-base-200", "mx-4", "mb-2", "h-px", "w-[calc(100%-2rem)]"], [1, "flex", "items-center", "space-x-2", "p-2"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "inverse"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], [1, "flex", "items-center", "space-x-2", "capitalize"], [1, "pr-2"], [1, "h-1/2", "w-full", "flex-1"]], template: function LandingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, LandingComponent_Conditional_0_Template, 1, 0, "topbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275conditionalCreate(2, LandingComponent_Conditional_2_Template, 13, 8, "div", 1);
        \u0275\u0275elementStart(3, "div", 2)(4, "header", 3)(5, "div", 4)(6, "div", 5);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(12, LandingComponent_Conditional_12_Template, 2, 1, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 8);
        \u0275\u0275element(14, "img", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(15, LandingComponent_Conditional_15_Template, 1, 0, "landing-quick-links");
        \u0275\u0275conditionalCreate(16, LandingComponent_Conditional_16_Template, 1, 0, "landing-quick-book");
        \u0275\u0275element(17, "landing-availability")(18, "div", 10)(19, "landing-upcoming");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(20, LandingComponent_Conditional_20_Template, 1, 0, "footer-menu");
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.hide_nav() ? 0 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.hide_landing_sidebar() ? 2 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 8, "APP.WORKPLACE.WELCOME_MESSAGE", \u0275\u0275pureFunction1(14, _c06, ctx.user()?.name)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 11, ctx.date(), "fullDate"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.building()?.address || ctx.building()?.name ? 12 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.show_quick_links() ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_quick_book() ? 16 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.hide_nav() ? 20 : -1);
      }
    }, dependencies: [
      CommonModule,
      TopbarComponent,
      FooterMenuComponent,
      MatRippleModule,
      MatRipple,
      IconComponent,
      LandingColleaguesComponent,
      LandingFavouritesComponent,
      LandingQuickLinksComponent,
      LandingQuickBookComponent,
      LandingAvailabilityComponent,
      LandingUpcomingComponent,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\nmain[_ngcontent-%COMP%] {\n  min-height: 50%;\n}\n/*# sourceMappingURL=landing.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingComponent, [{
    type: Component,
    args: [{ selector: "app-landing", template: `
        @if (!hide_nav()) {
            <topbar />
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
                                    | translate
                                        : {
                                              name: user()?.name,
                                          }
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
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "apps/workplace/src/app/landing/landing.component.ts", lineNumber: 161 });
})();

// apps/workplace/src/app/landing/landing.routes.ts
var ROUTES = [
  { path: "", component: LandingComponent, title: "Home" }
];
export {
  ROUTES
};
//# sourceMappingURL=landing.routes-VXCS5UR7.js.map
