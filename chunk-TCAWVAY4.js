import {
  email,
  form,
  required,
  validate
} from "./chunk-ECJGJ4ZQ.js";
import {
  OrganisationService,
  Space
} from "./chunk-L5Q3WJVC.js";
import {
  Aa,
  Sa,
  predictableRandomInt,
  toDate,
  xa
} from "./chunk-KY5ZERL4.js";
import {
  Pipe,
  from,
  map,
  of,
  setClassMetadata,
  shareReplay,
  signal,
  tap,
  ɵɵdefinePipe,
  ɵɵdirectiveInject
} from "./chunk-NTIDS2RH.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// node_modules/date-fns/setMinutes.js
function setMinutes(date, minutes, options) {
  const date_ = toDate(date, options?.in);
  date_.setMinutes(minutes);
  return date_;
}

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
      const system = await xa(space_id).catch(() => null);
      if (system)
        return this._cacheSystem(system);
    }
    const systems = (await Aa({ in: space_id }).catch(() => ({
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

// libs/users/src/lib/user.utilities.ts
var PHONE_PATTERN = /^\+?(\d[\d\s\-\(\)]{5,13}\d)$/;
var USER_DOMAIN = "@place.tech";
function setInternalUserDomain(domain) {
  USER_DOMAIN = domain;
}
function generateUserForm(user, injector) {
  if (!user) {
    throw Error("No user passed");
  }
  const model = signal(
    {
      name: user.name || "",
      email: user.email || "",
      organisation: user.organisation || "",
      phone: user.phone || "",
      assistance_required: user.assistance_required || false,
      visit_expected: user.visit_expected ?? true
    },
    ...ngDevMode ? [{ debugName: "model" }] : (
      /* istanbul ignore next */
      []
    )
  );
  return form(model, (p) => {
    required(p.name);
    required(p.email);
    email(p.email);
    required(p.organisation);
    validate(p.phone, ({ value }) => value() && !PHONE_PATTERN.test(value()) ? { kind: "pattern" } : void 0);
  }, injector ? { injector } : void 0);
}

// libs/events/src/lib/space.utilities.ts
var SPACE_LIST_REQUESTS = {};
function requestSpacesForZone(id) {
  if (!id)
    return of([]);
  if (SPACE_LIST_REQUESTS[id])
    return SPACE_LIST_REQUESTS[id];
  SPACE_LIST_REQUESTS[id] = from(Sa({
    zone_id: id,
    limit: 500,
    signage: false
  })).pipe(map((_) => (_.data || []).map((_2) => new Space(_2))), tap((_) => updateSpaceList(_)), shareReplay(1));
  return SPACE_LIST_REQUESTS[id];
}
var SPACE_COUNT = 0;
function generateMockSpace(overrides = {}) {
  const id = `space-${SPACE_COUNT++}`;
  const name = `Test Space ${SPACE_COUNT}`;
  const linked = predictableRandomInt(99999) % 2 === 0 && SPACE_COUNT > 1;
  const space = __spreadValues({
    id,
    name,
    long_name: `${name} with an long name`,
    map_id: `${SPACE_COUNT}`,
    capacity: predictableRandomInt(21, 1) * 2,
    email: `${name.toLowerCase().split(" ").join(".")}@${USER_DOMAIN}`,
    type: "",
    searchable: predictableRandomInt(99999) % 2 === 0,
    controlable: predictableRandomInt(99999) % 2 === 0,
    bookable: predictableRandomInt(99999) % 2 === 0,
    cost_hour: predictableRandomInt(300) * 100,
    setup: predictableRandomInt(6) * 5,
    breakdown: predictableRandomInt(6) * 5,
    zones: ["zone_lvl-0"],
    support_url: `/control/#/panel/${id}`,
    bookings: [],
    //Array(10).fill(0).map(i => generateMockBooking()),
    linked_rooms: linked ? [`space-${predictableRandomInt(SPACE_COUNT - 1)}`] : [],
    image: ""
  }, overrides);
  if (space["configurations"] && space["configurations"].length > 0) {
    space["configurations"].forEach((config) => config.capacity = predictableRandomInt(space.capacity) + 1);
    space["configurations"][0].capacity = space.capacity;
  }
  return space;
}

export {
  setMinutes,
  USER_DOMAIN,
  setInternalUserDomain,
  generateUserForm,
  SpacePipe,
  requestSpacesForZone,
  generateMockSpace
};
//# debugId=49ba12cd-8b49-570e-be78-4ec6e003a766
//# sourceMappingURL=chunk-TCAWVAY4.js.map
