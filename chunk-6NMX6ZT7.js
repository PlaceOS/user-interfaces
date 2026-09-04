import {
  OrganisationService,
  Pipe,
  inject,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-KKWVE3W4.js";

// libs/components/src/lib/building.pipe.ts
var BuildingPipe = class _BuildingPipe {
  constructor() {
    this._org = inject(OrganisationService);
  }
  transform(id) {
    return this._org.buildings.find((bld) => id instanceof Array ? id.includes(bld.id) : bld.id === id);
  }
  static {
    this.\u0275fac = function BuildingPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "building", type: _BuildingPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuildingPipe, [{
    type: Pipe,
    args: [{
      name: "building"
    }]
  }], null, null);
})();

export {
  BuildingPipe
};
//# sourceMappingURL=chunk-6NMX6ZT7.js.map
