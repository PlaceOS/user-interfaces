import {
  OrganisationService,
  SettingsService,
  Space
} from "./chunk-3YCGTXG5.js";
import {
  Injectable,
  computed,
  effect,
  ha,
  inject,
  resource,
  setClassMetadata,
  signal,
  unique,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-7MJI2IHH.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/explore/src/lib/explore-state.service.ts
var ExploreStateService = class _ExploreStateService {
  get positions() {
    return this._positions();
  }
  get active_level() {
    return this._level();
  }
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._initialised = this._org.initialised;
    this._active_levels = this._org.active_levels;
    this._active_building = this._org.active_building;
    this._overrides = computed(
      () => this._settings.overrides instanceof Function ? this._settings.overrides() : [],
      ...ngDevMode ? [{ debugName: "_overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._level = signal(
      null,
      ...ngDevMode ? [{ debugName: "_level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._positions = signal(
      {
        zoom: 1,
        center: { x: 0.5, y: 0.5 }
      },
      ...ngDevMode ? [{ debugName: "_positions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._styles = signal(
      {},
      ...ngDevMode ? [{ debugName: "_styles" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._features = signal(
      {},
      ...ngDevMode ? [{ debugName: "_features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._actions = signal(
      {},
      ...ngDevMode ? [{ debugName: "_actions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._labels = signal(
      {},
      ...ngDevMode ? [{ debugName: "_labels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._options = signal(
      {
        is_public: false,
        disable: ["zones", "devices", "sensors"]
      },
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._message = signal(
      "",
      ...ngDevMode ? [{ debugName: "_message" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level = this._level.asReadonly();
    this.message = this._message.asReadonly();
    this._spaces = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_spaces" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        level: this._level(),
        initialised: this._initialised()
      }),
      loader: ({ params: { level, initialised } }) => initialised ? ha({
        zone_id: level?.id || this._org.organisation.id,
        limit: 50
      }).then(({ data }) => data.map((_) => new Space(_))).catch((_) => []) : Promise.resolve([])
    }));
    this.spaces = computed(
      () => this._spaces.value() ?? [],
      ...ngDevMode ? [{ debugName: "spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_url = computed(
      () => this._level()?.map_id || "",
      ...ngDevMode ? [{ debugName: "map_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_positions = this._positions.asReadonly();
    this.map_features = computed(
      () => {
        this._overrides();
        const features = this._features();
        const disable = this._disabledGroups(this._options(), "features");
        let list = [];
        for (const key in features) {
          if (disable.includes(key) || key === "zones-canvas" && disable.includes("zones"))
            continue;
          list = list.concat(features[key]);
        }
        return list;
      },
      ...ngDevMode ? [{ debugName: "map_features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_actions = computed(
      () => {
        this._overrides();
        const actions = this._actions();
        const disable = this._disabledGroups(this._options(), "actions");
        let list = [];
        for (const key in actions) {
          if (disable.includes(key))
            continue;
          list = list.concat(actions[key]);
        }
        return list;
      },
      ...ngDevMode ? [{ debugName: "map_actions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_labels = computed(
      () => {
        this._overrides();
        const labels = this._labels();
        const disable = this._disabledGroups(this._options(), "labels");
        let list = [];
        for (const key in labels) {
          if (disable.includes(key))
            continue;
          list = list.concat(labels[key]);
        }
        return list;
      },
      ...ngDevMode ? [{ debugName: "map_labels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_styles = computed(
      () => {
        this._overrides();
        const styles = this._styles();
        const disable = this._disabledGroups(this._options(), "styles");
        let style_mappings = { text: { display: "none" } };
        for (const key in styles) {
          if (disable.includes(key))
            continue;
          style_mappings = __spreadValues(__spreadValues({}, style_mappings), styles[key]);
        }
        if (disable.includes("zones")) {
          style_mappings["#zones"] = { display: "none" };
          style_mappings["#Zones"] = { display: "none" };
        }
        return style_mappings;
      },
      ...ngDevMode ? [{ debugName: "map_styles" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._options.asReadonly();
    effect(() => {
      if (!this._initialised())
        return;
      const level_list = this._active_levels();
      if (!level_list)
        return;
      untracked(() => {
        const level = this._level();
        const has_level = level_list.find((lvl) => level?.id === lvl.id);
        if (!has_level && level_list.length) {
          this.setLevel(level_list[0].id);
        }
      });
    });
    effect(() => {
      if (!this._initialised())
        return;
      const bld = this._active_building();
      if (!bld)
        return;
      untracked(() => this.setOptions({}));
    });
  }
  setOptions(options) {
    const old_options = this._options();
    const disable = unique([
      ...this._normaliseDisabledOption(options.disable ?? old_options.disable),
      ...this._normaliseDisabledSetting("app.explore.disable")
    ]);
    this._options.set(__spreadProps(__spreadValues(__spreadValues({}, old_options), options), {
      disable,
      disable_styles: this._normaliseDisabledOption(options.disable_styles ?? old_options.disable_styles),
      disable_actions: this._normaliseDisabledOption(options.disable_actions ?? old_options.disable_actions),
      disable_labels: this._normaliseDisabledOption(options.disable_labels ?? old_options.disable_labels),
      disable_features: this._normaliseDisabledOption(options.disable_features ?? old_options.disable_features)
    }));
  }
  reset() {
    this._styles.set({});
    this._features.set({});
    this._labels.set({});
    this._actions.set({});
    this._options.set({
      is_public: false,
      disable: unique([
        "zones",
        "devices",
        "sensors",
        ...this._normaliseDisabledSetting("app.explore.disable")
      ])
    });
    this.setPositions(1, { x: 0.5, y: 0.5 });
  }
  setLevel(zone_id) {
    const lvl = this._org.levelWithID([zone_id]);
    if (lvl)
      this._level.set(lvl);
  }
  setStyles(name, styles) {
    this._styles.update((map) => __spreadProps(__spreadValues({}, map), { [name]: styles }));
  }
  setFeatures(name, features) {
    this._features.update((map) => __spreadProps(__spreadValues({}, map), { [name]: features }));
  }
  setActions(name, actions) {
    this._actions.update((map) => __spreadProps(__spreadValues({}, map), { [name]: actions }));
  }
  setLabels(name, labels) {
    this._labels.update((map) => __spreadProps(__spreadValues({}, map), { [name]: labels }));
  }
  setPositions(zoom, center) {
    this._positions.set({ zoom, center });
  }
  has(type, id, exclude = []) {
    if (type === "style") {
      const styles_map = untracked(this._styles);
      for (const group in styles_map) {
        if (exclude.includes(group))
          continue;
        const styles = styles_map[group];
        if (id in styles || `#${id}` in styles)
          return true;
      }
    } else if (type === "feature") {
      const feature_map = untracked(this._features);
      for (const group in feature_map) {
        if (exclude.includes(group))
          continue;
        for (const feature of feature_map[group]) {
          if (feature.location === id)
            return true;
        }
      }
    } else if (type === "action") {
      const actions_map = untracked(this._actions);
      for (const group in actions_map) {
        if (exclude.includes(group))
          continue;
        for (const feature of actions_map[group]) {
          if (feature.id === id)
            return true;
        }
      }
    } else if (type === "label") {
      const labels_map = untracked(this._labels);
      for (const group in labels_map) {
        if (exclude.includes(group))
          continue;
        for (const feature of labels_map[group]) {
          if (feature.location === id)
            return true;
        }
      }
    }
    return false;
  }
  /**
   * Combined list of disabled groups for the given resource type, merging
   * the current map options with the `app.explore.disable*` settings
   */
  _disabledGroups(options, type) {
    return unique([
      ...this._normaliseDisabledOption(options.disable),
      ...this._normaliseDisabledSetting("app.explore.disable"),
      ...this._normaliseDisabledOption(options[`disable_${type}`]),
      ...this._normaliseDisabledSetting(`app.explore.disable_${type}`)
    ]);
  }
  _normaliseDisabledSetting(name) {
    return this._normaliseDisabledOption(this._settings.get(name));
  }
  _normaliseDisabledOption(value) {
    if (value instanceof Array)
      return value.filter((_) => !!_);
    if (typeof value === "string") {
      return value.split(",").map((_) => _.trim()).filter((_) => !!_);
    }
    return [];
  }
  static {
    this.\u0275fac = function ExploreStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreStateService, factory: _ExploreStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ExploreStateService
};
//# sourceMappingURL=chunk-XYVHZEPG.js.map
