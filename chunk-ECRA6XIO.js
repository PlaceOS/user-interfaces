import {
  SpacePipe
} from "./chunk-LY74LPO5.js";
import {
  OrganisationService,
  SettingsService,
  Space
} from "./chunk-OOXMEN3E.js";
import {
  Injectable,
  computed,
  effect,
  flatten,
  ha,
  inject,
  pa,
  setClassMetadata,
  signal,
  unique,
  ɵɵdefineInjectable
} from "./chunk-P3URBYOL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/events/src/lib/spaces.service.ts
var SPACE_PIPE;
var SpacesService = class _SpacesService {
  /** List of available spaces */
  get space_list() {
    return this._all_spaces().filter((s) => s.map_id);
  }
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._all_spaces = signal(
      [],
      ...ngDevMode ? [{ debugName: "_all_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._initialised = signal(
      false,
      ...ngDevMode ? [{ debugName: "_initialised" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.initialised = this._initialised.asReadonly();
    this.all_spaces = this._all_spaces.asReadonly();
    this.list = computed(
      () => this._all_spaces().filter((space) => space.map_id),
      ...ngDevMode ? [{ debugName: "list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => unique(flatten(this.list().map((i) => i.features.filter((_) => _.trim())))),
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._compare = (space) => space.zones.includes(this._org.building.id);
    SPACE_PIPE = new SpacePipe();
    if (!SPACE_PIPE.org)
      SPACE_PIPE.org = this._org;
    effect(() => {
      if (!this._org.initialised())
        return;
      this._init();
    });
  }
  _init() {
    if (!this._settings.get("app.prevent_space_init"))
      this.loadSpaces();
    else
      this._initialised.set(true);
  }
  /**
   * Get a filtered list of the available spaces
   * @param predicate Predicate for filtering spaces
   */
  filter(predicate = this._compare) {
    return this.space_list.filter((_) => predicate(_));
  }
  async loadSpace(space_id) {
    const system = await pa(space_id);
    const space = new Space(__spreadProps(__spreadValues({}, system), {
      level: this._org.levelWithID([...system.zones])
    }));
    SPACE_PIPE.updateSpaceList([space]);
  }
  /**
   * Find space with given id/email
   * @param space_id ID/Email address associated with the space
   */
  find(space_id) {
    return this.space_list.find(({ id, email }) => space_id === id || space_id === email);
  }
  async loadSpaces() {
    const systems = (await ha({
      zone_id: this._org.organisation?.id,
      limit: 5e3
    })).data;
    const space_list = systems.map((sys) => new Space(__spreadProps(__spreadValues({}, sys), {
      level: this._org.levelWithID([...sys.zones])
    })));
    this._all_spaces.set(space_list);
    SPACE_PIPE.updateSpaceList(this.space_list);
    this._initialised.set(true);
  }
  static {
    this.\u0275fac = function SpacesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SpacesService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SpacesService, factory: _SpacesService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpacesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  SpacesService
};
//# sourceMappingURL=chunk-ECRA6XIO.js.map
