import {
  OrganisationService,
  Pipe,
  Space,
  oa,
  ra,
  setClassMetadata,
  ɵɵdefinePipe,
  ɵɵdirectiveInject
} from "./chunk-HZ6PXTLM.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/events/src/lib/space.pipe.ts
var SPACE_LIST = [];
var ATTEMPT_COUNT = {};
var EMPTY_SPACE = new Space({ email: "empty.space@place.os" });
function updateSpaceList(space_list) {
  for (const space of space_list) {
    if (!SPACE_LIST.find(({ id }) => id === space.id)) {
      SPACE_LIST.push(space);
    }
  }
}
setInterval(() => {
  for (const id in ATTEMPT_COUNT) {
    ATTEMPT_COUNT[id] = ATTEMPT_COUNT[id] - 1;
    if (ATTEMPT_COUNT[id] <= 0) {
      delete ATTEMPT_COUNT[id];
    }
  }
}, 10 * 1e3);
var _org_service = null;
var SpacePipe = class _SpacePipe {
  get org() {
    return _org_service;
  }
  set org(value) {
    _org_service = value;
  }
  constructor(org = null) {
    if (org)
      this.org = org;
  }
  /**
   * Get details of the space with the given ID
   * @param space_id ID or Email of the space
   */
  async transform(space_id) {
    if (this.org) {
      await this.org.waitUntilInitialised();
    }
    const is_email = space_id?.includes("@");
    if (!space_id)
      return EMPTY_SPACE;
    let space = SPACE_LIST.find(({ id, email }) => id === space_id || email === space_id);
    if (space)
      return space;
    if (ATTEMPT_COUNT[space_id])
      return EMPTY_SPACE;
    if (!is_email) {
      const system = await oa(space_id).catch((_) => null);
      if (system) {
        space = new Space(__spreadProps(__spreadValues({}, system), {
          level: this.org?.levelWithID([...system.zones])
        }));
        SPACE_LIST.push(space);
        return space;
      }
    }
    const systems = (await ra({
      in: space_id
    })).data;
    if (systems.length === 1) {
      space = new Space(__spreadProps(__spreadValues({}, systems[0]), {
        level: this.org?.levelWithID([...systems[0].zones])
      }));
      SPACE_LIST.push(space);
      return space;
    }
    return EMPTY_SPACE;
  }
  get(space_id) {
    return SPACE_LIST.find(({ id, email }) => id === space_id || email === space_id) || EMPTY_SPACE;
  }
  updateSpaceList(space_list) {
    updateSpaceList(space_list);
  }
  static {
    this.\u0275fac = function SpacePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SpacePipe)(\u0275\u0275directiveInject(OrganisationService, 16));
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "space", type: _SpacePipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpacePipe, [{
    type: Pipe,
    args: [{
      name: "space"
    }]
  }], () => [{ type: OrganisationService }], null);
})();

export {
  updateSpaceList,
  SpacePipe
};
//# sourceMappingURL=chunk-SUZRQYFK.js.map
