import {
  createBooking,
  queryBookings,
  removeBooking
} from "./chunk-FVVXP7WC.js";
import {
  $l,
  Al,
  AssetRequest,
  Booking,
  Cl,
  Dl,
  El,
  Ml,
  Nl,
  Pl,
  Tl,
  Ul,
  addMinutes,
  bl,
  endOfDay,
  flatten,
  getUnixTime,
  gl,
  ql,
  startOfDay,
  unique
} from "./chunk-XDJAXGLZ.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/assets/src/lib/assets.fn.ts
async function queryAssetPurchaseOrders(query = {}) {
  return Cl(query);
}
function findOldestByName(list, name = "") {
  const match_name = name.trim().toLowerCase();
  return list.filter((_) => (_.name || "").trim().toLowerCase() === match_name).sort((a, b) => (a.created_at || 0) - (b.created_at || 0))[0];
}
function filter_hidden_items(response) {
  return __spreadProps(__spreadValues({}, response), {
    data: response.data.filter((item) => !item?.hidden)
  });
}
async function visible_category_ids() {
  const response = await Ul({});
  return new Set(response.data.filter((item) => !item?.hidden).map((item) => item.id));
}
async function queryAssetCategories(query = {}) {
  if (query.hidden === true)
    return Ul(query);
  const _a = query, { hidden } = _a, rest = __objRest(_a, ["hidden"]);
  return filter_hidden_items(await Ul(rest));
}
async function queryAssetTypes(query = {}) {
  if (query.hidden === true)
    return Al(query);
  const _a = query, { hidden } = _a, rest = __objRest(_a, ["hidden"]);
  const [response, visible_ids] = await Promise.all([
    Al(rest),
    visible_category_ids()
  ]);
  return __spreadProps(__spreadValues({}, response), {
    data: response.data.filter((item) => !item?.hidden && visible_ids.has(item.category_id))
  });
}
async function queryAssets(query = {}) {
  if (query.hidden === true)
    return gl(query);
  const _a = query, { hidden } = _a, rest = __objRest(_a, ["hidden"]);
  const [response, types] = await Promise.all([
    gl(rest),
    queryAssetTypes(__spreadProps(__spreadValues({}, rest.zone_id ? { zone_id: rest.zone_id } : {}), {
      limit: 2e3
    }))
  ]);
  const visible_type_ids = new Set(types.data.map((item) => item.id));
  return __spreadProps(__spreadValues({}, response), {
    data: response.data.filter((item) => !item?.hidden && visible_type_ids.has(item.asset_type_id))
  });
}
function saveAssetCategory(category) {
  return category.id ? El(category.id, category) : Ml(category);
}
var _GROUPS_CACHE = /* @__PURE__ */ new Map();
var REMOVE_QUERY_KEYS = ["period_start", "period_end", "type", "rejected"];
async function queryAllAssetPages(query = {}) {
  let response = await gl(__spreadProps(__spreadValues({}, query), {
    limit: query.limit || 500
  }));
  let total = response.total;
  const data = [...response.data];
  while (typeof response.next === "function") {
    const next = response.next();
    if (!next)
      break;
    response = await next;
    total = response.total;
    data.push(...response.data);
  }
  return { total, next: () => null, data };
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
  const q = __spreadValues({}, query);
  for (const key of REMOVE_QUERY_KEYS) {
    if (key in q)
      delete q[key];
  }
  if (q.zones && !q.zone_id)
    q.zone_id = q.zones;
  if (q.zones)
    delete q.zones;
  const [types, assets] = await Promise.all([
    Al(q),
    queryAllAssetPages(q)
  ]);
  let groups = types.data.filter((item) => !item?.hidden);
  if (q.type_id)
    groups = groups.filter((item) => item.id === q.type_id);
  const visible_type_ids = new Set(groups.map((item) => item.id));
  const assets_by_type = /* @__PURE__ */ new Map();
  for (const asset of assets.data) {
    if (asset?.hidden || !visible_type_ids.has(asset.asset_type_id)) {
      continue;
    }
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
  return product.id ? Pl(product.id, product) : Tl(product);
}
function saveAsset(asset) {
  return asset.id ? bl(asset.id, asset) : $l(asset);
}
function saveAssetPurchaseOrder(order) {
  return order.id ? Nl(order.id, order) : Dl(order);
}
function getGroupsWithAssets(query = {}) {
  return queryAssetTypes(query);
}
var _GROUP_FULL_CACHE = /* @__PURE__ */ new Map();
async function showGroupFull(id, query = {}) {
  if (_GROUP_FULL_CACHE.has(id))
    return _GROUP_FULL_CACHE.get(id);
  const [type, categories, assets, purchase_orders] = await Promise.all([
    ql(id),
    queryAssetCategories(),
    queryAssets(__spreadProps(__spreadValues({}, query), { type_id: id, limit: 2e3 })),
    queryAssetPurchaseOrders()
  ]);
  const product = type;
  product.category = categories.data.find((category) => category.id === product.category_id);
  product.assets = assets.data.filter((asset) => asset.asset_type_id === product.id);
  for (const asset of product.assets) {
    asset.purchase_order_number = purchase_orders.data.find((_) => _.id === asset.purchase_order_id)?.purchase_order_number;
  }
  product.purchase_orders = purchase_orders.data.filter((order) => product.assets.find((asset) => asset.purchase_order_id === order.id));
  _GROUP_FULL_CACHE.set(id, product);
  return product;
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
async function removeAssetRequests(id) {
  const requests = await queryBookings({
    period_start: getUnixTime(startOfDay(/* @__PURE__ */ new Date())),
    period_end: getUnixTime(endOfDay(/* @__PURE__ */ new Date())),
    type: "asset-request"
  });
  return Promise.all(requests.filter((_) => _.asset_id === id || _.asset_ids?.includes(id)).map((request) => removeBooking(request.id)));
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
async function validateAssetRequestsForResource({ id, ical_uid, from_booking }, { date, duration, all_day, host, location_name, location_id, zones, reset_state }, new_assets = [], force_create = false) {
  const requests = await queryBookings({
    period_start: getUnixTime(date),
    period_end: getUnixTime(addMinutes(date, duration)),
    type: "asset-request",
    zones: zones.join(",")
  });
  const bookings = id && ical_uid ? await queryBookings({
    period_start: getUnixTime(startOfDay(date)),
    period_end: getUnixTime(endOfDay(date)),
    type: "asset-request",
    email: host,
    event_id: from_booking ? "" : id,
    booking_id: from_booking ? id : "",
    ical_uid
  }) : [];
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
    type: "asset-request"
  }, bookings.map((_) => _.id));
  const processed_requests = changed_assets.map((request) => {
    const asset_ids = flatten(request.items.map(({ id: id2, item_ids, quantity }) => {
      const assets = available_groups.find((_) => _.id === id2)?.assets;
      if (!assets)
        return item_ids;
      const list = [];
      return new Array(quantity).fill(0).map((_, idx) => {
        const item = used_ids.includes(item_ids[idx]) || list.includes(item_ids[idx]) || !item_ids[idx] ? assets?.find(({ id: id3 }) => {
          return !used_ids.includes(id3) && !list.includes(id3);
        })?.id : item_ids[idx];
        if (!item) {
          request.conflict = true;
          throw "Unable to find available asset for request";
        }
        list.push(item);
        return item;
      });
    }));
    const booking = bookings.find((_) => _.asset_ids.find((id2) => request.items?.find((i) => i.item_ids.includes(id2))));
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
    if (from_booking)
      asset_data.parent_id = id;
    return createBooking(new Booking(asset_data), {
      ical_uid,
      event_id: from_booking ? "" : id
    });
  });
  return async () => {
    await Promise.all(changed_requests.map(([id2]) => removeBooking(id2)));
    await Promise.all(processed_requests);
  };
}

export {
  queryAssetPurchaseOrders,
  findOldestByName,
  queryAssetCategories,
  queryAssetTypes,
  queryAssets,
  saveAssetCategory,
  queryAssetGroupsExtended,
  saveAssetType,
  saveAsset,
  saveAssetPurchaseOrder,
  getGroupsWithAssets,
  showGroupFull,
  queryGroupAvailability,
  removeAssetRequests,
  validateAssetRequestsForResource
};
//# sourceMappingURL=chunk-2OCRTLUJ.js.map
