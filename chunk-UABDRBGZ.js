import {
  queryParkingSpacesForZones,
  queryParkingUsers
} from "./chunk-BJEHABTQ.js";
import {
  AsyncHandler,
  Desk,
  OrganisationService,
  SettingsService,
  currentUser,
  getUnixTime,
  queryBookings
} from "./chunk-3XNRPS72.js";
import {
  Injectable,
  Ju,
  computed,
  effect,
  endOfDay,
  flatten,
  inject,
  setClassMetadata,
  signal,
  startOfDay,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-2XZZDWFL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/bookings/src/lib/parking.service.ts
var ParkingService = class _ParkingService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._loading = signal(
      [],
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._spaces = signal(
      [],
      ...ngDevMode ? [{ debugName: "_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._users = signal(
      [],
      ...ngDevMode ? [{ debugName: "_users" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._has_booking = signal(
      false,
      ...ngDevMode ? [{ debugName: "_has_booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booked_space = signal(
      null,
      ...ngDevMode ? [{ debugName: "_booked_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._home_building_id = signal(
      null,
      ...ngDevMode ? [{ debugName: "_home_building_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._load_bookings = signal(
      false,
      ...ngDevMode ? [{ debugName: "_load_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._bookings_request = null;
    this.loading = computed(
      () => this._loading().length > 0,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.levels = computed(
      () => {
        const levels = this._org.level_list();
        if (!this._settings.get("app.use_region")) {
          const blds = this._org.buildingsForRegion();
          const bld_ids = blds.map((bld) => bld.id);
          const list = levels.filter((lvl) => bld_ids.includes(lvl.parent_id) && lvl.tags.includes("parking"));
          list.map((lvl) => __spreadProps(__spreadValues({}, lvl), {
            display_name: `${blds.find((_) => _.id === lvl.parent_id)?.display_name} - ${lvl.display_name}`
          }));
          return list;
        }
        return levels.filter((lvl) => lvl.parent_id === this._org.building.id && lvl.tags.includes("parking"));
      },
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.spaces = this._spaces.asReadonly();
    this.users = this._users.asReadonly();
    this.has_booking = this._has_booking.asReadonly();
    this.assigned_space = computed(
      () => this._spaces().find((_) => _.assigned_to?.toLowerCase() === currentUser().email?.toLowerCase()),
      ...ngDevMode ? [{ debugName: "assigned_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user_details = computed(
      () => this._users().find((_) => _.email?.toLowerCase() === currentUser().email?.toLowerCase()),
      ...ngDevMode ? [{ debugName: "user_details" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.deny_parking_access = computed(
      () => !!this.user_details()?.deny,
      ...ngDevMode ? [{ debugName: "deny_parking_access" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.booked_space = this._booked_space.asReadonly();
    this.home_building_id = this._home_building_id.asReadonly();
    this.is_home_location = computed(
      () => {
        if (!this._settings.get("app.parking.restrict_home_location"))
          return false;
        const home_id = this._home_building_id();
        const bld = this._org.active_building();
        return !!home_id && bld?.id === home_id;
      },
      ...ngDevMode ? [{ debugName: "is_home_location" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const levels = this.levels();
      if (levels[0]?.id)
        untracked(() => this._loadSpaces(levels.map((l) => l.id)));
    });
    effect(() => {
      const bld = this._org.active_building();
      if (!bld?.id)
        return;
      untracked(() => {
        this._loadUsers(bld.id);
        this._loadHomeBuilding();
      });
    });
    effect(() => {
      const spaces = this._spaces();
      if (this._load_bookings() && spaces.length) {
        untracked(() => this._loadBookings(spaces));
      }
    });
  }
  loadBookings() {
    this._load_bookings.set(true);
  }
  async _loadSpaces(level_ids) {
    this._loading.set([...this._loading(), "spaces"]);
    this._spaces.set(await queryParkingSpacesForZones(level_ids));
    this._loading.set(this._loading().filter((_) => _ !== "spaces"));
  }
  async _loadUsers(building_id) {
    this._loading.set([...this._loading(), "users"]);
    this._users.set(await queryParkingUsers(building_id));
    this._loading.set(this._loading().filter((_) => _ !== "users"));
  }
  async _loadBookings(spaces) {
    this._bookings_request = this._bookings_request || queryBookings({
      period_start: getUnixTime(startOfDay(Date.now())),
      period_end: getUnixTime(endOfDay(Date.now())),
      type: "parking"
    }).catch(() => []).finally(() => this._bookings_request = null);
    const bookings = await this._bookings_request;
    this._has_booking.set(bookings.length > 0);
    const booked_spaces = bookings.map((booking) => spaces.find((space) => space.id === booking.asset_id)).filter((space) => !!space);
    this._booked_space.set(booked_spaces[0] || null);
  }
  async _loadHomeBuilding() {
    const buildings = this._org.building_list();
    if (!buildings?.length)
      return;
    const results = await Promise.all(buildings.map((bld) => Ju(bld.id, { name: "desks" }).then((data) => ({
      building_id: bld.id,
      desks: flatten(data.map((meta) => (meta?.metadata?.desks?.details instanceof Array ? meta.metadata.desks.details : []).map((d) => new Desk(__spreadProps(__spreadValues({}, d), {
        zone: meta.zone
      })))))
    })).catch(() => ({
      building_id: bld.id,
      desks: []
    }))));
    const email = currentUser()?.email?.toLowerCase();
    if (!email)
      return this._home_building_id.set(null);
    const match = results.find((r) => r.desks.some((d) => d.assigned_to?.toLowerCase() === email));
    this._home_building_id.set(match?.building_id || null);
  }
  static {
    this.\u0275fac = function ParkingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParkingService, factory: _ParkingService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ParkingService
};
//# sourceMappingURL=chunk-UABDRBGZ.js.map
