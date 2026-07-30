import {
  ScheduleStateService
} from "./chunk-IEOLJMW6.js";
import {
  requestSpacesForZone
} from "./chunk-H6J6JXKT.js";
import {
  searchStaff
} from "./chunk-MMD7DVNR.js";
import {
  AsyncHandler,
  Booking,
  CalendarService,
  OrganisationService,
  SettingsService,
  StaffUser,
  currentUser,
  filterResourcesFromRules
} from "./chunk-XA6QWCVD.js";
import {
  Injectable,
  Ma,
  Na,
  Qu,
  Rt,
  Wl,
  Wu,
  computed,
  effect,
  inject,
  isSameDay,
  setClassMetadata,
  signal,
  unique,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-6SUTYSMR.js";
import {
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
      this._upcoming_events.set(this._schedule.filtered_bookings().filter((i) => !i.deleted && !["cancelled", "declined", "ended"].includes(i.status) && (i instanceof Booking ? !i.is_done : i.state !== "done") && isSameDay(i.date, Date.now())));
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
  async addContacts(user_list) {
    let users = [...this._contacts(), ...user_list];
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

export {
  LandingStateService
};
//# sourceMappingURL=chunk-TQGNCEXM.js.map
