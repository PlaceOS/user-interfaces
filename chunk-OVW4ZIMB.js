import {
  createBooking,
  parentBookingId,
  queryBookings,
  removeBooking
} from "./chunk-3LX3RFV4.js";
import {
  AssetRequest,
  Booking,
  getUnixTime,
  toJsonValue
} from "./chunk-AIZ2EVEA.js";
import {
  addMinutes,
  asset_categories_exports,
  asset_purchase_orders_exports,
  asset_types_exports,
  assets_exports,
  endOfDay,
  flatten,
  orThrow,
  orThrowPage,
  startOfDay,
  unique
} from "./chunk-BSTBRHVR.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// libs/assets/src/lib/assets.fn.ts
function pickFields(value, keys) {
  const result = {};
  for (const key of keys) {
    if (value[key] !== void 0)
      result[key] = value[key];
  }
  return result;
}
var ASSET_FIELDS = [
  "id",
  "identifier",
  "serial_number",
  "other_data",
  "barcode",
  "name",
  "client_ids",
  "map_id",
  "bookable",
  "accessible",
  "zones",
  "place_groups",
  "assigned_to",
  "assigned_name",
  "features",
  "images",
  "notes",
  "security_system_groups",
  "parent_id",
  "asset_type_id",
  "purchase_order_id",
  "zone_id"
];
function assetBody(asset) {
  const body = pickFields(asset, ASSET_FIELDS);
  return __spreadValues(__spreadValues(__spreadValues({}, body), "other_data" in body ? { other_data: toJsonValue(body.other_data) } : {}), "client_ids" in body ? { client_ids: toJsonValue(body.client_ids) } : {});
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
var PURCHASE_ORDER_FIELDS = [
  "id",
  "purchase_order_number",
  "invoice_number",
  "supplier_details",
  "purchase_date",
  "unit_price",
  "expected_service_start_date",
  "expected_service_end_date"
];
async function queryAssetPurchaseOrders(query = {}) {
  return asset_purchase_orders_exports.query(query).then(orThrowPage);
}
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
async function queryAssets(query = {}) {
  const _a = query, { hidden } = _a, rest = __objRest(_a, ["hidden"]);
  if (hidden === true)
    return assets_exports.query(rest).then(orThrowPage);
  const [response, types] = await Promise.all([
    assets_exports.query(rest).then(orThrowPage),
    queryAssetTypes(__spreadProps(__spreadValues({}, rest.zone_id ? { zone_id: rest.zone_id } : {}), {
      limit: 2e3
    }))
  ]);
  const visible_type_ids = new Set(types.data.map((item) => item.id));
  return __spreadProps(__spreadValues({}, response), {
    data: response.data.filter((item) => visible_type_ids.has(item.asset_type_id))
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
function saveAsset(asset) {
  const body = assetBody(asset);
  return asset.id ? assets_exports.update({ id: asset.id, body }).then(orThrow) : assets_exports.create({ body }).then(orThrow);
}
function saveAssetsInBulk(assets) {
  if (!assets?.length)
    return Promise.resolve([]);
  const body = assets.map(assetBody);
  return assets.every((item) => item?.id) ? assets_exports.bulkUpdate({ body }).then(orThrow) : assets_exports.bulkCreate({ body }).then(orThrow);
}
function saveAssetPurchaseOrder(order) {
  const fields = pickFields(order, PURCHASE_ORDER_FIELDS);
  const body = "supplier_details" in fields ? __spreadProps(__spreadValues({}, fields), {
    supplier_details: toJsonValue(fields.supplier_details)
  }) : fields;
  return order.id ? asset_purchase_orders_exports.update({ id: order.id, body }).then(orThrow) : asset_purchase_orders_exports.create({ body }).then(orThrow);
}
function getGroupsWithAssets(query = {}) {
  return queryAssetTypes(query);
}
var _GROUP_FULL_CACHE = /* @__PURE__ */ new Map();
async function showGroupFull(id, query = {}) {
  if (_GROUP_FULL_CACHE.has(id))
    return _GROUP_FULL_CACHE.get(id);
  const [type, categories, assets, purchase_orders] = await Promise.all([
    asset_types_exports.show({ id }).then(orThrow),
    queryAssetCategories(),
    queryAssets(__spreadProps(__spreadValues({}, query), { type_id: id, limit: 2e3 })),
    queryAssetPurchaseOrders()
  ]);
  const product = __spreadValues({}, type);
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
  queryAssetPurchaseOrders,
  findOldestByName,
  ensureHiddenCategory,
  ensureAssetType,
  resolveHiddenAssetTypeId,
  queryTypeAssetsForZones,
  queryTypeAssetsInZone,
  queryAssetCategories,
  queryAssetTypes,
  queryAssets,
  saveAssetCategory,
  queryAssetGroupsExtended,
  saveAssetType,
  saveAsset,
  saveAssetsInBulk,
  saveAssetPurchaseOrder,
  getGroupsWithAssets,
  showGroupFull,
  queryGroupAvailability,
  removeAssetRequests,
  validateAssetRequestsForResource
};
//# debugId=d3dce00f-4e42-5447-80ad-29b544c4563c
//# sourceMappingURL=chunk-OVW4ZIMB.js.map
