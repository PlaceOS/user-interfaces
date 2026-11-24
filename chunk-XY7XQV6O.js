import {
  AuthenticatedImageDirective
} from "./chunk-MIQYTEWH.js";
import {
  createBooking,
  parentBookingId,
  queryBookings,
  removeBooking
} from "./chunk-57ID2L5F.js";
import {
  AssetRequest,
  Booking,
  addMinutes,
  asset_categories_exports,
  asset_types_exports,
  assets_exports,
  endOfDay,
  flatten,
  getUnixTime,
  orThrow,
  orThrowPage,
  startOfDay,
  unique
} from "./chunk-WNHK6FY6.js";
import {
  Component,
  Input,
  computed,
  input,
  linkedSignal,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-SQTB4YLR.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// libs/components/src/lib/user-avatar.component.ts
function UserAvatarComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.initials, " ");
  }
}
function UserAvatarComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 3);
    \u0275\u0275listener("error", function UserAvatarComponent_Conditional_0_Conditional_2_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.photo_failed.set(true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("alt", ctx_r0.initials)("source", ctx_r0.user().photo);
  }
}
function UserAvatarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, UserAvatarComponent_Conditional_0_Conditional_1_Template, 2, 1, "div", 1)(2, UserAvatarComponent_Conditional_0_Conditional_2_Template, 1, 2, "img", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("user-id", ctx_r0.user().id);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.user().photo || ctx_r0.photo_failed() ? 1 : 2);
  }
}
var UserAvatarComponent = class _UserAvatarComponent {
  constructor() {
    this.user = input(
      void 0,
      ...ngDevMode ? [{ debugName: "user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.photo_failed = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "photo_failed" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: () => this.user()?.photo,
      computation: () => false
    }));
    this.is_valid = computed(
      () => {
        const user = this.user();
        if (!user)
          return false;
        const name = (user.name || "").trim();
        const email = (user.email || "").trim();
        if (name.startsWith("<empty>") || email.startsWith("<empty>")) {
          return false;
        }
        return !!(name || email || user.first_name || user.last_name);
      },
      ...ngDevMode ? [{ debugName: "is_valid" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get initials() {
    const user = this.user();
    if (!user)
      return "NA";
    if (user.first_name && user.last_name) {
      return `${user.first_name[0]}${user.last_name[0]}`;
    }
    let name = (user.name || "").replace(/<[^>]*>/g, " ").trim();
    if (!name)
      name = (user.email || user.name || "").split("@")[0];
    const parts = name.replace(/[()[\]\-+=\\/@<>]+/gi, " ").split(/\s+/).filter(Boolean);
    if (parts.length === 0)
      return "NA";
    return parts.length > 1 ? `${parts[0][0]}${parts[parts.length - 1][0]}` : parts[0].slice(0, 2);
  }
  static {
    this.\u0275fac = function UserAvatarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAvatarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAvatarComponent, selectors: [["a-user-avatar"]], inputs: { user: [1, "user"] }, decls: 1, vars: 1, consts: [[1, "border-base-100", "bg-base-200", "flex", "h-[2.5em]", "w-[2.5em]", "items-center", "justify-center", "overflow-hidden", "rounded-full", "border-2"], ["initials", "", 1, "text-base-content", "uppercase", "opacity-60"], ["auth", "", 1, "flex", "h-full", "w-full", "items-center", "justify-center", "object-cover", "object-center", 3, "alt", "source"], ["auth", "", 1, "flex", "h-full", "w-full", "items-center", "justify-center", "object-cover", "object-center", 3, "error", "alt", "source"]], template: function UserAvatarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, UserAvatarComponent_Conditional_0_Template, 3, 2, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.is_valid() ? 0 : -1);
      }
    }, dependencies: [AuthenticatedImageDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAvatarComponent, [{
    type: Component,
    args: [{ selector: "a-user-avatar", template: `
        @if (is_valid()) {
            <div
                class="border-base-100 bg-base-200 flex h-[2.5em] w-[2.5em] items-center justify-center overflow-hidden rounded-full border-2"
                [attr.user-id]="user().id"
            >
                @if (!user().photo || photo_failed()) {
                    <div
                        initials
                        class="text-base-content uppercase opacity-60"
                    >
                        {{ initials }}
                    </div>
                } @else {
                    <img
                        auth
                        class="flex h-full w-full items-center justify-center object-cover object-center"
                        [alt]="initials"
                        [source]="user().photo"
                        (error)="photo_failed.set(true)"
                    />
                }
            </div>
        }
    `, imports: [AuthenticatedImageDirective] }]
  }], null, { user: [{ type: Input, args: [{ isSignal: true, alias: "user", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAvatarComponent, { className: "UserAvatarComponent", filePath: "libs/components/src/lib/user-avatar.component.ts", lineNumber: 35 });
})();

// libs/assets/src/lib/assets.fn.ts
function pickFields(value, keys) {
  const result = {};
  for (const key of keys) {
    if (value[key] !== void 0)
      result[key] = value[key];
  }
  return result;
}
var ASSET_TYPE_FIELDS = [
  "id",
  "name",
  "brand",
  "description",
  "model_number",
  "images",
  "category_id"
];
var ASSET_CATEGORY_FIELDS = [
  "id",
  "name",
  "description",
  "hidden",
  "parent_category_id"
];
function findOldestByName(list, name = "") {
  const match_name = name.trim().toLowerCase();
  return list.filter((_) => (_.name || "").trim().toLowerCase() === match_name).sort((a, b) => (a.created_at || 0) - (b.created_at || 0))[0];
}
function findHiddenCategory(list, name) {
  const own = list.filter((_) => _.authority_id);
  return findOldestByName(own, name) || findOldestByName(list, name);
}
var _hidden_categories = null;
var _category_types = /* @__PURE__ */ new Map();
var _hidden_type_ids = /* @__PURE__ */ new Map();
function queryHiddenCategories() {
  if (!_hidden_categories) {
    const request = asset_categories_exports.query({ hidden: true, limit: 500 }).then(orThrowPage).then((_) => _.data);
    request.catch(() => {
      if (_hidden_categories === request)
        _hidden_categories = null;
    });
    _hidden_categories = request;
  }
  return _hidden_categories;
}
function queryCategoryTypes(category_id) {
  if (!_category_types.has(category_id)) {
    const request = asset_types_exports.query({ category_id, limit: 500 }).then(orThrowPage).then((_) => _.data);
    request.catch(() => {
      if (_category_types.get(category_id) === request) {
        _category_types.delete(category_id);
      }
    });
    _category_types.set(category_id, request);
  }
  return _category_types.get(category_id);
}
async function ensureHiddenCategory(name) {
  let category = findHiddenCategory(await queryHiddenCategories(), name);
  if (category)
    return category;
  _hidden_categories = null;
  category = findHiddenCategory(await queryHiddenCategories(), name);
  if (category)
    return category;
  try {
    category = await saveAssetCategory({ name, hidden: true });
    _hidden_categories = null;
    return category;
  } catch (error) {
    _hidden_categories = null;
    category = findHiddenCategory(await queryHiddenCategories(), name);
    if (category)
      return category;
    throw error;
  }
}
async function ensureAssetType(category_id, name) {
  let type = findOldestByName(await queryCategoryTypes(category_id), name);
  if (type)
    return type;
  try {
    type = await saveAssetType({ name, brand: "PlaceOS", category_id });
    _category_types.delete(category_id);
    return type;
  } catch (error) {
    _category_types.delete(category_id);
    type = findOldestByName(await queryCategoryTypes(category_id), name);
    if (type)
      return type;
    throw error;
  }
}
function resolveHiddenAssetTypeId(category_name, type_name) {
  const key = `${category_name}/${type_name}`;
  if (!_hidden_type_ids.has(key)) {
    const request = ensureHiddenCategory(category_name).then((category) => ensureAssetType(category.id, type_name)).then((type) => type.id);
    request.catch(() => _hidden_type_ids.delete(key));
    _hidden_type_ids.set(key, request);
  }
  return _hidden_type_ids.get(key);
}
async function queryTypeAssetsForZones(type_id, zone_ids) {
  const results = await Promise.all(zone_ids.map((zone_id) => queryAllAssetPages({ zone_id, type_id }).then((_) => _.data)));
  return flatten(results);
}
async function queryTypeAssetsInZone(type_id, zone_id) {
  const response = await queryAllAssetPages({ zones: [zone_id], type_id });
  return response.data;
}
function filter_hidden_items(response) {
  return __spreadProps(__spreadValues({}, response), {
    data: response.data.filter((item) => !item?.hidden)
  });
}
var PAGE_LIMIT = 500;
var MAX_PAGES = 100;
async function loadAllPages(first) {
  let response = first;
  const data = [...response.data];
  for (let page = 1; page < MAX_PAGES; page++) {
    const next = response.next?.();
    if (!next)
      break;
    response = await next;
    data.push(...response.data);
  }
  return { total: response.total, next: () => null, data };
}
async function visible_category_ids() {
  const response = await loadAllPages(await asset_categories_exports.query({ limit: PAGE_LIMIT }).then(orThrowPage));
  return new Set(response.data.filter((item) => !item?.hidden).map((item) => item.id));
}
async function queryAssetCategories(query = {}) {
  if (query.hidden === true)
    return asset_categories_exports.query(query).then(orThrowPage);
  const _a = query, { hidden } = _a, rest = __objRest(_a, ["hidden"]);
  return filter_hidden_items(await asset_categories_exports.query(rest).then(orThrowPage));
}
async function queryAssetTypes(query = {}) {
  const _a = query, { hidden } = _a, rest = __objRest(_a, ["hidden"]);
  if (hidden === true)
    return asset_types_exports.query(rest).then(orThrowPage);
  const [response, visible_ids] = await Promise.all([
    asset_types_exports.query(rest).then(orThrowPage),
    visible_category_ids()
  ]);
  return __spreadProps(__spreadValues({}, response), {
    data: response.data.filter((item) => visible_ids.has(item.category_id))
  });
}
function saveAssetCategory(category) {
  const body = pickFields(category, ASSET_CATEGORY_FIELDS);
  return category.id ? asset_categories_exports.update({ id: category.id, body }).then(orThrow) : asset_categories_exports.create({ body }).then(orThrow);
}
var _GROUPS_CACHE = /* @__PURE__ */ new Map();
async function queryAllAssetPages(query = {}) {
  return loadAllPages(await assets_exports.query(__spreadProps(__spreadValues({}, query), { limit: query.limit || PAGE_LIMIT })).then(orThrowPage));
}
async function queryAssetGroupsExtended(query = {}) {
  const cache_key = JSON.stringify({
    zones: query.zones || query.zone_id || "",
    category_id: query.category_id || "",
    q: query.q || "",
    type_id: query.type_id || ""
  });
  if (_GROUPS_CACHE.has(cache_key)) {
    return _GROUPS_CACHE.get(cache_key);
  }
  const zone_id = query.zone_id || query.zones || void 0;
  const filters = { zone_id, q: query.q || void 0 };
  const [types, assets] = await Promise.all([
    // Leaves out the types of hidden categories, such as desks
    queryAssetTypes(__spreadProps(__spreadValues({}, filters), {
      category_id: query.category_id || void 0
    })),
    queryAllAssetPages(__spreadProps(__spreadValues({}, filters), { type_id: query.type_id || void 0 }))
  ]);
  let groups = [...types.data];
  if (query.type_id) {
    groups = groups.filter((item) => item.id === query.type_id);
  }
  const visible_type_ids = new Set(groups.map((item) => item.id));
  const assets_by_type = /* @__PURE__ */ new Map();
  for (const asset of assets.data) {
    if (!visible_type_ids.has(asset.asset_type_id))
      continue;
    const list2 = assets_by_type.get(asset.asset_type_id) || [];
    list2.push(asset);
    assets_by_type.set(asset.asset_type_id, list2);
  }
  const list = groups.map((group) => __spreadProps(__spreadValues({}, group), {
    assets: assets_by_type.get(group.id) || []
  }));
  _GROUPS_CACHE.set(cache_key, list);
  setTimeout(() => _GROUPS_CACHE.delete(cache_key), 5 * 60 * 1e3);
  return list;
}
function saveAssetType(product) {
  const body = pickFields(product, ASSET_TYPE_FIELDS);
  return product.id ? asset_types_exports.update({ id: product.id, body }).then(orThrow) : asset_types_exports.create({ body }).then(orThrow);
}
async function queryGroupAvailability(query, ignore = []) {
  const [products, bookings] = await Promise.all([
    queryAssetGroupsExtended(query),
    queryBookings(__spreadProps(__spreadValues({}, query), { type: "asset-request" }))
  ]);
  const active_bookings = bookings.filter((_) => _.status !== "declined" && _.status !== "cancelled");
  return products.map((product) => __spreadProps(__spreadValues({}, product), {
    assets: product.assets.filter((asset) => ignore?.includes(asset.id) || !active_bookings.find((booking) => !ignore.includes(booking.id) && (booking.asset_id === asset.id || booking.asset_ids?.includes(asset.id))))
  }));
}
function differenceBetweenAssetRequests(new_assets, old_assets) {
  if ((!new_assets || new_assets?.length <= 0) && old_assets?.length)
    return [];
  if (!old_assets)
    return [];
  const changed = [];
  for (const request of new_assets) {
    const match = old_assets.find((_) => _.id === request.id);
    if (!match || match.ref_id !== request.ref_id) {
      changed.push(request.id);
    }
  }
  return changed;
}
async function validateAssetRequestsForResource({ id, ical_uid, from_booking, from_bookings }, { date, duration, all_day, host, location_name, location_id, zones, reset_state }, new_assets = [], force_create = false) {
  const requests = await queryBookings({
    period_start: getUnixTime(date),
    period_end: getUnixTime(addMinutes(date, duration)),
    type: "asset-request",
    zones: zones.join(",")
  });
  const native = !!(from_booking || from_bookings);
  const bookings = id && (ical_uid || native) ? (await queryBookings({
    period_start: getUnixTime(startOfDay(date)),
    period_end: getUnixTime(endOfDay(date)),
    type: "asset-request",
    email: host,
    event_id: native ? "" : id,
    ical_uid
  })).filter((_) => !native || String(_.extension_data?.parent_id) === String(id)) : [];
  const booking_list = bookings.map((_) => [
    _.id,
    new AssetRequest(_.extension_data.request)
  ]);
  new_assets?.forEach((_) => _.conflict = false);
  let changed = force_create ? new_assets.map((_) => _.id) : differenceBetweenAssetRequests(new_assets, booking_list.map(([_, r]) => r));
  if (reset_state) {
    const has_state = bookings.filter((_) => _.approved || _.rejected);
    changed = unique([
      ...changed,
      ...has_state.map((_) => _.extension_data.request_id)
    ]);
  }
  const unchanged = booking_list.filter(([_, request]) => !changed.includes(request.id));
  const changed_requests = booking_list.filter(([_, { id: id2 }]) => changed.includes(id2));
  const changed_assets = new_assets.filter(({ id: id2 }) => changed.includes(id2));
  const filtered = requests.filter((req) => !req.rejected && (!bookings.find((b) => b.id === req.id) || unchanged.find(([id2]) => req.event_id === id2)));
  let used_ids = flatten(filtered.map((_) => _.asset_ids));
  for (const [_, request] of unchanged) {
    used_ids = [
      ...used_ids,
      ...flatten(request.items.map((_2) => _2.item_ids))
    ];
  }
  const available_groups = await queryGroupAvailability({
    period_start: getUnixTime(date),
    period_end: getUnixTime(addMinutes(date, duration)),
    type: "asset-request",
    zones: (zones || []).join(",")
  }, bookings.map((_) => _.id));
  const processed_requests = changed_assets.map((request) => {
    const asset_ids = flatten(request.items.map(({ id: id2, item_ids, quantity }) => {
      const selected_ids = item_ids || [];
      const assets = available_groups.find((_) => _.id === id2)?.assets;
      if (!assets)
        return selected_ids;
      const list = [];
      return new Array(quantity).fill(0).map((_, idx) => {
        const item = used_ids.includes(selected_ids[idx]) || list.includes(selected_ids[idx]) || !selected_ids[idx] ? assets?.find(({ id: id3 }) => {
          return !used_ids.includes(id3) && !list.includes(id3);
        })?.id : selected_ids[idx];
        if (!item) {
          request.conflict = true;
          throw "Unable to find available asset for request";
        }
        list.push(item);
        return item;
      });
    }));
    if (!asset_ids.length || asset_ids.some((id2) => !id2)) {
      request.conflict = true;
      throw "Unable to find available asset for request";
    }
    const booking = bookings.find((_) => _.asset_ids.find((id2) => request.items?.find((i) => i.item_ids?.includes(id2))));
    used_ids = [...used_ids, ...asset_ids];
    const asset_data = {
      type: "asset-request",
      booking_type: "asset-request",
      date,
      duration,
      all_day,
      description: location_name,
      user_email: host,
      asset_id: asset_ids[0],
      asset_ids,
      asset_name: request.items.map((_) => _.name).join(", "),
      title: request.items.map((_) => _.name).join(", "),
      approved: !reset_state && booking?.approved && !request._changed,
      rejected: !reset_state && booking?.rejected && !request._changed,
      extension_data: {
        parent_id: id,
        request_id: request.id,
        location_id,
        request: new AssetRequest(__spreadProps(__spreadValues({}, request), { event: null }))
      },
      zones: zones || []
    };
    return () => native ? createBooking(__spreadProps(__spreadValues({}, new Booking(asset_data).toJSON()), {
      parent_id: parentBookingId(id)
    })) : createBooking(new Booking(asset_data), {
      ical_uid,
      event_id: id
    });
  });
  return async () => {
    await Promise.all(changed_requests.map(([id2]) => removeBooking(id2)));
    await Promise.all(processed_requests.map((create) => create()));
  };
}

export {
  UserAvatarComponent,
  ensureHiddenCategory,
  resolveHiddenAssetTypeId,
  queryTypeAssetsForZones,
  queryTypeAssetsInZone,
  queryAssetCategories,
  queryGroupAvailability,
  validateAssetRequestsForResource
};
//# debugId=5f17f8ee-3fca-5901-8e18-f7f8ffce3808
//# sourceMappingURL=chunk-XY7XQV6O.js.map
