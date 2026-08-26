import {
  Pipe,
  setClassMetadata,
  yl,
  ɵɵdefinePipe
} from "./chunk-AAHQRATD.js";

// libs/assets/src/lib/parking-space.pipe.ts
var PARKING_SPACE_LIST = [];
var EMPTY_PARKING_SPACE = {};
var UNALLOCATED_PARKING_SPACE = { identifier: "Unallocated" };
var ParkingSpacePipe = class _ParkingSpacePipe {
  /**
   * Resolve a parking space asset_id into its PlaceAsset
   * @param asset_id ID of the parking space asset
   */
  async transform(asset_id) {
    if (!asset_id)
      return EMPTY_PARKING_SPACE;
    if (asset_id.startsWith("unallocated"))
      return UNALLOCATED_PARKING_SPACE;
    const cached = PARKING_SPACE_LIST.find(({ id }) => id === asset_id);
    if (cached)
      return cached;
    const space = await yl(asset_id).catch(() => null);
    if (space) {
      PARKING_SPACE_LIST.push(space);
      return space;
    }
    return EMPTY_PARKING_SPACE;
  }
  static {
    this.\u0275fac = function ParkingSpacePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingSpacePipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "parkingSpace", type: _ParkingSpacePipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingSpacePipe, [{
    type: Pipe,
    args: [{
      name: "parkingSpace"
    }]
  }], null, null);
})();

export {
  ParkingSpacePipe
};
//# sourceMappingURL=chunk-EOPUWYDQ.js.map
