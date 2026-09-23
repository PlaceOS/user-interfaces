import {
  EventFormService
} from "./chunk-S4FJO4LM.js";
import {
  Injectable,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-RKFYMMSC.js";

// apps/outlook-addin/src/app/rooms/features-filter.service.ts
var FeaturesFilterService = class _FeaturesFilterService {
  constructor() {
    this._state = inject(EventFormService);
    this.spaces = this._state.available_spaces;
    this.selected_features = signal(
      [],
      ...ngDevMode ? [{ debugName: "selected_features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_favourites = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_favourites" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._applied_features = signal(
      [],
      ...ngDevMode ? [{ debugName: "_applied_features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._applied_show_favourites = signal(
      false,
      ...ngDevMode ? [{ debugName: "_applied_show_favourites" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.room_features = [
      { name: "Video Conference (VC)", id: "VidConf", value: false },
      { name: "Conference Phone", id: "ConfPhone", value: false },
      { name: "Wireless Content Sharing", id: "Wireless", value: false },
      { name: "Video Wall", id: "VidWall", value: false },
      { name: "Whiteboard", id: "Whiteboard", value: false },
      { name: "Jamboard", id: "Jamboard", value: false },
      { name: "Projector", id: "Projector", value: false },
      { name: "Views", id: "Views", value: false }
    ];
    this.features = signal(
      this.room_features,
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_spaces = computed(
      () => {
        const selected_features = this._applied_features();
        const favourite_spaces = this._applied_show_favourites() ? this._state.favorite_spaces : null;
        return this.spaces().filter((space) => {
          const features = space.feature_list?.length ? space.feature_list : space.features || [];
          return (!favourite_spaces || favourite_spaces.includes(space.id)) && selected_features.every((feature) => features.includes(feature));
        });
      },
      ...ngDevMode ? [{ debugName: "filtered_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  getSelectedFeatures() {
    this.selected_features.set(this.features().filter((item) => item.value));
  }
  applyFilter() {
    this.getSelectedFeatures();
    this._applied_features.set(this.selected_features().map((item) => item.id));
    this._applied_show_favourites.set(this.show_favourites());
  }
  clearFilter() {
    this.selected_features.set([]);
    this.show_favourites.set(false);
    this._applied_features.set([]);
    this._applied_show_favourites.set(false);
    this.room_features.forEach((feature) => feature.value = false);
    this.features.set([...this.room_features]);
  }
  static {
    this.\u0275fac = function FeaturesFilterService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeaturesFilterService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FeaturesFilterService, factory: _FeaturesFilterService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeaturesFilterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  FeaturesFilterService
};
//# debugId=7c229647-f890-50ed-b4f8-38eef5c5ecf8
//# sourceMappingURL=chunk-LEMMB4DU.js.map
