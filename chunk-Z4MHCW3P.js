import {
  OrganisationService,
  Pipe,
  Space,
  ba,
  setClassMetadata,
  ya,
  ɵɵdefinePipe,
  ɵɵdirectiveInject
} from "./chunk-J5WDDVMQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/events/src/lib/space.pipe.ts
var MAX_CACHED_SPACES = 5e3;
var MAX_FAILED_LOOKUPS = 500;
var FAILED_LOOKUP_TTL = 30 * 1e3;
var SPACE_CACHE = /* @__PURE__ */ new Map();
var SPACE_BY_ID = /* @__PURE__ */ new Map();
var SPACE_BY_EMAIL = /* @__PURE__ */ new Map();
var SPACE_REQUESTS = /* @__PURE__ */ new Map();
var FAILED_LOOKUPS = /* @__PURE__ */ new Map();
var EMPTY_SPACE = new Space({ email: "empty.space@place.os" });
function cacheSpace(space) {
  const cache_key = space.id || space.email;
  if (!cache_key)
    return;
  if (SPACE_CACHE.has(cache_key))
    SPACE_CACHE.delete(cache_key);
  SPACE_CACHE.set(cache_key, space);
  if (space.id)
    SPACE_BY_ID.set(space.id, space);
  if (space.email)
    SPACE_BY_EMAIL.set(space.email, space);
  while (SPACE_CACHE.size > MAX_CACHED_SPACES) {
    const oldest_key = SPACE_CACHE.keys().next().value;
    if (!oldest_key)
      break;
    const oldest = SPACE_CACHE.get(oldest_key);
    SPACE_CACHE.delete(oldest_key);
    if (oldest?.id && SPACE_BY_ID.get(oldest.id) === oldest) {
      SPACE_BY_ID.delete(oldest.id);
    }
    if (oldest?.email && SPACE_BY_EMAIL.get(oldest.email) === oldest) {
      SPACE_BY_EMAIL.delete(oldest.email);
    }
  }
}
function cachedSpace(space_id) {
  return SPACE_BY_ID.get(space_id) || SPACE_BY_EMAIL.get(space_id);
}
function rememberFailedLookup(space_id) {
  FAILED_LOOKUPS.delete(space_id);
  FAILED_LOOKUPS.set(space_id, Date.now() + FAILED_LOOKUP_TTL);
  while (FAILED_LOOKUPS.size > MAX_FAILED_LOOKUPS) {
    const oldest_id = FAILED_LOOKUPS.keys().next().value;
    if (!oldest_id)
      break;
    FAILED_LOOKUPS.delete(oldest_id);
  }
}
function updateSpaceList(space_list) {
  for (const space of space_list)
    cacheSpace(space);
}
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
  /** Get details of the space with the given ID or email address. */
  async transform(space_id) {
    if (this.org)
      await this.org.waitUntilInitialised();
    if (!space_id)
      return EMPTY_SPACE;
    const cached = cachedSpace(space_id);
    if (cached)
      return cached;
    const retry_after = FAILED_LOOKUPS.get(space_id) || 0;
    if (retry_after > Date.now())
      return EMPTY_SPACE;
    FAILED_LOOKUPS.delete(space_id);
    const pending = SPACE_REQUESTS.get(space_id);
    if (pending)
      return pending;
    const request = this._loadSpace(space_id).finally(() => SPACE_REQUESTS.delete(space_id));
    SPACE_REQUESTS.set(space_id, request);
    return request;
  }
  get(space_id) {
    return cachedSpace(space_id) || EMPTY_SPACE;
  }
  updateSpaceList(space_list) {
    updateSpaceList(space_list);
  }
  async _loadSpace(space_id) {
    if (!space_id.includes("@")) {
      const system = await ba(space_id).catch(() => null);
      if (system)
        return this._cacheSystem(system);
    }
    const systems = (await ya({ in: space_id }).catch(() => ({
      data: []
    }))).data;
    if (systems.length === 1)
      return this._cacheSystem(systems[0]);
    rememberFailedLookup(space_id);
    return EMPTY_SPACE;
  }
  _cacheSystem(system) {
    const space = new Space(__spreadProps(__spreadValues({}, system), {
      zones: [...system.zones || []],
      images: [...system.images || []],
      camera_snapshot_urls: [...system.camera_snapshot_urls || []],
      level: this.org?.levelWithID([...system.zones || []])
    }));
    cacheSpace(space);
    return space;
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
//# debugId=9fbdd884-d829-5931-b78c-4f469d4de00c
//# sourceMappingURL=chunk-Z4MHCW3P.js.map
