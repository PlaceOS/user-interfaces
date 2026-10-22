import {
  ScheduleStateService
} from "./chunk-IY4LPDTW.js";
import {
  searchStaff
} from "./chunk-I3OEOK2P.js";
import {
  CalendarService
} from "./chunk-IVWYWRG7.js";
import {
  requestSpacesForZone
} from "./chunk-5XMRXOYP.js";
import {
  Booking,
  OrganisationService,
  SettingsService,
  StaffUser,
  currentUser,
  filterResourcesFromRules
} from "./chunk-KTADYPHH.js";
import {
  AsyncHandler
} from "./chunk-2FYBYRLM.js";
import {
  Gp,
  Mt,
  ac,
  eh,
  hc,
  i18n,
  isSameDay,
  th,
  unique
} from "./chunk-LSVIIU5S.js";
import {
  Injectable,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-6OEACKVR.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/workplace/src/app/landing/contacts.fn.ts
var COLLEAGUE_REQUEST_LIMIT = 6;
async function mapWithLimit(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const index = next++;
      results[index] = await fn(items[index]);
    }
  };
  const count = Math.max(1, Math.min(limit, items.length));
  await Promise.all(Array.from({ length: count }, worker));
  return results;
}
var _contacts_request = null;
function loadContacts(user_id, refresh = false) {
  if (!refresh && _contacts_request && _contacts_request.user_id === user_id) {
    return _contacts_request.promise;
  }
  const promise = (async () => {
    const metadata = await ac(user_id, "contacts");
    const list = metadata?.details instanceof Array ? metadata.details : [];
    const users = await mapWithLimit(list, COLLEAGUE_REQUEST_LIMIT, (contact) => Promise.resolve(th(contact.email)).catch(() => contact));
    return users.map((user) => new StaffUser(user));
  })().finally(() => {
    if (_contacts_request?.promise === promise)
      _contacts_request = null;
  });
  _contacts_request = { user_id, promise };
  return promise;
}

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
    this._search_failed = signal(
      false,
      ...ngDevMode ? [{ debugName: "_search_failed" }] : (
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
    this._status_watchers = signal(
      0,
      ...ngDevMode ? [{ debugName: "_status_watchers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._watch_statuses = computed(
      () => this._status_watchers() > 0,
      ...ngDevMode ? [{ debugName: "_watch_statuses" }] : (
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
    this.space_list = this._space_list.asReadonly();
    this.free_space_list = computed(
      () => this._filtered_spaces().filter((_, idx) => this._space_statuses()[idx] === "free").sort((a, b) => a.capacity - b.capacity),
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
    this.search_failed = this._search_failed.asReadonly();
    this.level_occupancy = this._level_occupancy.asReadonly();
    this.search_fn = async (q) => this._settings.get("app.basic_user_search") || this._settings.get("app.colleagues_require_auth") !== false ? eh({ q, authority_id: Mt()?.id }).then(({ data }) => data.map((_) => new StaffUser(_))) : searchStaff(q);
    effect(async (onCleanup) => {
      const bld = this._org.active_building();
      if (!bld)
        return;
      let active = true;
      onCleanup(() => active = false);
      this._loading_spaces.set(true);
      const metadata = await ac(bld.id, `room_booking_rules`).catch(() => ({ details: [] }));
      const spaces = await requestSpacesForZone(bld.id).toPromise().catch(() => []);
      if (!active)
        return;
      this._loading_spaces.set(false);
      this._booking_rules.set(metadata?.details instanceof Array ? metadata.details : []);
      this._space_list.set((spaces || []).filter((s) => s.bookable));
      this.updateBuildingMetadata();
      this.updateOccupancy({});
    });
    effect((onCleanup) => {
      const list = this._watch_statuses() ? this._filtered_spaces() : [];
      this.unsubWith("bind:");
      this._space_statuses.set(Array(list.length).fill(null));
      for (const [idx, space] of list.entries()) {
        const binding = Gp(space.id, "Bookings").variable("status");
        const unsubscribe = binding.bindThenSubscribe((status) => {
          const next_statuses = [...untracked(this._space_statuses)];
          next_statuses[idx] = status;
          this._space_statuses.set(next_statuses);
        });
        this.subscription(`bind:${space.id}`, unsubscribe);
      }
      onCleanup(() => this.unsubWith("bind:"));
    });
    let search_id = 0;
    effect((onCleanup) => {
      const { search } = this._options();
      const id = ++search_id;
      const timeout = setTimeout(async () => {
        this._loading.set(i18n("APP.WORKPLACE.COLLEAGUE_SEARCH_LOADING"));
        let failed = false;
        const results = search ? await this.search_fn(search).catch(() => {
          failed = true;
          return [];
        }) : [];
        if (id !== search_id)
          return;
        this._search_results.set(results);
        this._search_failed.set(failed);
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
  /**
   * Bind the live room statuses for `free_space_list` while a screen shows
   * them. Call the returned function when the screen closes.
   */
  watchSpaceStatuses() {
    this._status_watchers.update((count) => count + 1);
    let released = false;
    return () => {
      if (released)
        return;
      released = true;
      this._status_watchers.update((count) => count - 1);
    };
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
  /**
   * Load the contacts of the user. Set `refresh` after a contact change, so
   * that a load which started before the change is not used.
   */
  async updateContacts(refresh = false) {
    this._contacts.set(await loadContacts(currentUser().id, refresh));
  }
  async addContact(user) {
    let users = [...this._contacts()];
    users.push(user);
    users = unique(users, "email");
    await hc(currentUser().id, {
      name: "contacts",
      description: "Contacts for the User",
      details: users
    });
    this.updateContacts(true);
  }
  async addContacts(user_list) {
    let users = [...this._contacts(), ...user_list];
    users = unique(users, "email");
    await hc(currentUser().id, {
      name: "contacts",
      description: "Contacts for the User",
      details: users
    });
    this.updateContacts(true);
  }
  async removeContact(user) {
    let users = [...this._contacts()];
    users = users.filter((u) => u.email !== user.email);
    await hc(currentUser().id, {
      name: "contacts",
      description: "Contacts for the User",
      details: users
    });
    this.updateContacts(true);
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
    const mod = Gp(sys, module, index);
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
  COLLEAGUE_REQUEST_LIMIT,
  mapWithLimit,
  loadContacts,
  LandingStateService
};
//# debugId=99faf5cd-f3ae-5bee-b2b6-258942a56e20
//# sourceMappingURL=chunk-KTRXRIOF.js.map
