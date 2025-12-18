import {
  ScheduleStateService
} from "./chunk-575FDSG4.js";
import {
  $h,
  Aa,
  AsyncHandler,
  BehaviorSubject,
  CalendarService,
  Injectable,
  OrganisationService,
  SettingsService,
  StaffUser,
  Ut,
  Xu,
  __spreadValues,
  catchError,
  combineLatest,
  currentUser,
  debounceTime,
  ec,
  filter,
  filterResourcesFromRules,
  firstTruthyValueFrom,
  inject,
  isSameDay,
  lastValueFrom,
  map,
  of,
  requestSpacesForZone,
  searchStaff,
  setClassMetadata,
  shareReplay,
  switchMap,
  tap,
  toObservable,
  unique,
  xa,
  ɵɵdefineInjectable
} from "./chunk-JVFYVEPN.js";

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
    this.upcoming_events = toObservable(this._schedule.bookings).pipe(map((_) => _.filter((i) => i.state !== "done" && isSameDay(i.date, Date.now()))));
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
  async addContacts(user_list) {
    let users = [...this._contacts.getValue(), ...user_list];
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

export {
  LandingStateService
};
//# sourceMappingURL=chunk-556WBWYD.js.map
