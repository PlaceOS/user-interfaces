import {
  findOldestByName,
  saveAssetCategory,
  saveAssetType
} from "./chunk-TLPZYJMD.js";
import {
  Desk,
  Fl,
  Xt,
  Zl,
  ed,
  flatten
} from "./chunk-EFL5ZC6C.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/assets/src/lib/desk-assets.fn.ts
var DESK_CATEGORY_NAME = "_DESKS_";
var DESK_TYPE_NAME = "_DESKS_";
var _desk_type_id = null;
var _desk_type_id_promise = null;
async function bootstrap_desk_type() {
  let category = findOldestByName(await ed({ hidden: true, limit: 500 }).then((response) => response.data), DESK_CATEGORY_NAME);
  if (!category) {
    category = await saveAssetCategory({
      name: DESK_CATEGORY_NAME,
      hidden: true
    });
  }
  let type = findOldestByName(await Zl({
    category_id: category.id,
    limit: 500
  }).then((response) => response.data), DESK_TYPE_NAME);
  if (!type) {
    type = await saveAssetType({
      name: DESK_TYPE_NAME,
      brand: "PlaceOS",
      category_id: category.id
    });
  }
  return type.id;
}
function resolveDeskTypeId() {
  if (_desk_type_id)
    return Promise.resolve(_desk_type_id);
  if (!_desk_type_id_promise) {
    _desk_type_id_promise = bootstrap_desk_type().then((id) => {
      _desk_type_id = id;
      return id;
    });
  }
  return _desk_type_id_promise;
}
async function queryDeskAssetsForZones(zone_ids) {
  if (!zone_ids.length)
    return [];
  const type_id = await resolveDeskTypeId();
  const results = await Promise.all(zone_ids.map((zone_id) => Fl({ zone_id, type_id, limit: 500 }).then((response) => response.data)));
  return flatten(results);
}
function deskFromAsset(asset, zone) {
  const security = asset.security_system_groups?.[0] || "";
  return new Desk(__spreadProps(__spreadValues({}, asset), {
    name: asset.identifier || asset.name,
    map_id: asset.map_id || asset.id,
    zone: new Xt(zone || { id: asset.zone_id }),
    groups: asset.place_groups,
    security
  }));
}

// libs/assets/src/lib/parking-assets.fn.ts
var PARKING_CATEGORY_NAME = "_PARKING_";
var PARKING_TYPE_NAME = "_PARKING_SPACES_";
var _parking_type_id = null;
var _parking_type_id_promise = null;
var _hidden_categories_promise = null;
var _types_for_category_promises = /* @__PURE__ */ new Map();
function normalise_name(name = "") {
  return name.trim().toLowerCase();
}
async function query_hidden_categories() {
  if (!_hidden_categories_promise) {
    _hidden_categories_promise = ed({
      hidden: true,
      limit: 500
    }).then((_) => _.data).catch(() => []);
  }
  return _hidden_categories_promise;
}
async function query_types_for_category(category_id) {
  if (!_types_for_category_promises.has(category_id)) {
    _types_for_category_promises.set(category_id, Zl({ category_id, limit: 500 }).then((_) => _.data).catch(() => []));
  }
  return _types_for_category_promises.get(category_id);
}
function reset_hidden_categories_cache() {
  _hidden_categories_promise = null;
}
function reset_types_cache(category_ids) {
  category_ids.forEach((category_id) => _types_for_category_promises.delete(category_id));
}
async function query_types_for_categories(category_ids) {
  const list = await Promise.all(category_ids.map((category_id) => query_types_for_category(category_id)));
  return list.flat();
}
async function ensure_hidden_category(name) {
  let category = findOldestByName(await query_hidden_categories(), name);
  if (category)
    return category;
  reset_hidden_categories_cache();
  category = findOldestByName(await query_hidden_categories(), name);
  if (category)
    return category;
  try {
    const category2 = await saveAssetCategory({
      name,
      hidden: true
    });
    reset_hidden_categories_cache();
    return category2;
  } catch (error) {
    reset_hidden_categories_cache();
    category = findOldestByName(await query_hidden_categories(), name);
    if (category)
      return category;
    throw error;
  }
}
async function move_type_to_category(type, category_id, name) {
  if (type.category_id === category_id && normalise_name(type.name) === normalise_name(name)) {
    return type;
  }
  try {
    const updated_type = await saveAssetType({
      id: type.id,
      name,
      brand: type.brand || "PlaceOS",
      category_id
    });
    reset_types_cache([category_id]);
    return updated_type;
  } catch (error) {
    reset_types_cache([category_id]);
    const types = await query_types_for_category(category_id);
    const existing_type = findOldestByName(types, name);
    if (existing_type)
      return existing_type;
    throw error;
  }
}
async function ensure_type(category_id, name, legacy_category_ids = []) {
  let type = findOldestByName(await query_types_for_categories([
    category_id,
    ...legacy_category_ids.filter((_) => _ !== category_id)
  ]), name);
  if (type)
    return move_type_to_category(type, category_id, name);
  try {
    const type2 = await saveAssetType({
      name,
      brand: "PlaceOS",
      category_id
    });
    reset_types_cache([category_id]);
    return type2;
  } catch (error) {
    reset_types_cache([category_id, ...legacy_category_ids]);
    type = findOldestByName(await query_types_for_categories([
      category_id,
      ...legacy_category_ids.filter((_) => _ !== category_id)
    ]), name);
    if (type)
      return move_type_to_category(type, category_id, name);
    throw error;
  }
}
async function bootstrap_asset_type(type_name) {
  const category = await ensure_hidden_category(PARKING_CATEGORY_NAME);
  const type = await ensure_type(category.id, type_name);
  return type.id;
}
function resolveParkingTypeId() {
  if (_parking_type_id)
    return Promise.resolve(_parking_type_id);
  if (!_parking_type_id_promise) {
    _parking_type_id_promise = _bootstrapParkingType().then((id) => {
      _parking_type_id = id;
      return id;
    });
  }
  return _parking_type_id_promise;
}
async function _bootstrapParkingType() {
  return bootstrap_asset_type(PARKING_TYPE_NAME);
}
async function queryParkingSpacesForZones(zone_ids) {
  if (!zone_ids?.length)
    return [];
  const type_id = await resolveParkingTypeId();
  const results = await Promise.all(zone_ids.map((zone_id) => Fl({ zone_id, type_id, limit: 500 }).then((_) => _.data)));
  return flatten(results);
}
var PARKING_USER_TYPE_NAME = "_PARKING_USERS_";
var _parking_user_type_id = null;
var _parking_user_type_id_promise = null;
function resolveParkingUserTypeId() {
  if (_parking_user_type_id)
    return Promise.resolve(_parking_user_type_id);
  if (!_parking_user_type_id_promise) {
    _parking_user_type_id_promise = _bootstrapParkingUserType().then((id) => {
      _parking_user_type_id = id;
      return id;
    });
  }
  return _parking_user_type_id_promise;
}
async function _bootstrapParkingUserType() {
  return bootstrap_asset_type(PARKING_USER_TYPE_NAME);
}
function toParkingUser(asset) {
  const data = asset.other_data || {};
  return {
    id: asset.id,
    name: asset.identifier || "",
    email: data.email || "",
    car_model: data.car_model || "",
    car_colour: data.car_colour || "",
    plate_number: data.plate_number || "",
    phone: data.phone || "",
    notes: asset.notes || "",
    deny: String(data.deny) === "true",
    special_needs: String(data.special_needs) === "true"
  };
}
async function queryParkingUsers(zone_id) {
  const type_id = await resolveParkingUserTypeId();
  const assets = await Fl({ zone_id, type_id, limit: 500 });
  return assets.data.map(toParkingUser);
}

export {
  queryDeskAssetsForZones,
  deskFromAsset,
  queryParkingSpacesForZones,
  queryParkingUsers
};
//# debugId=0985afba-9b54-5af8-9f7a-40181f7a1227
//# sourceMappingURL=chunk-NZPRXLWP.js.map
