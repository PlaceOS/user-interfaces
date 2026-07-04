import {
  OrganisationService
} from "./chunk-C4E2PAFD.js";
import {
  Pipe,
  inject,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-W6ACSYVL.js";

// libs/components/src/lib/level.pipe.ts
var LevelPipe = class _LevelPipe {
  constructor() {
    this._org = inject(OrganisationService);
  }
  transform(id) {
    return this._org.levelWithID(id instanceof Array ? id : [id]);
  }
  static {
    this.\u0275fac = function LevelPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LevelPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "level", type: _LevelPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LevelPipe, [{
    type: Pipe,
    args: [{
      name: "level"
    }]
  }], null, null);
})();

export {
  LevelPipe
};
//# sourceMappingURL=chunk-5S3LSV44.js.map
