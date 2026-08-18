import {
  findOldestByName,
  saveAsset,
  saveAssetCategory,
  saveAssetType
} from "./chunk-QLJWVDTT.js";
import {
  $l,
  Rl,
  flatten,
  ml,
  xl
} from "./chunk-DXPN6VFM.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

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
    _hidden_categories_promise = Rl({
      hidden: true,
      limit: 500
    }).then((_) => _.data).catch(() => []);
  }
  return _hidden_categories_promise;
}
async function query_types_for_category(category_id) {
  if (!_types_for_category_promises.has(category_id)) {
    _types_for_category_promises.set(category_id, xl({ category_id, limit: 500 }).then((_) => _.data).catch(() => []));
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
async function queryParkingSpaces(zone_id) {
  const type_id = await resolveParkingTypeId();
  const response = await ml({ zone_id, type_id, limit: 500 });
  return response.data;
}
async function queryParkingSpacesForZones(zone_ids) {
  if (!zone_ids?.length)
    return [];
  const type_id = await resolveParkingTypeId();
  const results = await Promise.all(zone_ids.map((zone_id) => ml({ zone_id, type_id, limit: 500 }).then((_) => _.data)));
  return flatten(results);
}
async function saveParkingSpace(space) {
  const type_id = await resolveParkingTypeId();
  return saveAsset(__spreadProps(__spreadValues({}, space), { asset_type_id: type_id }));
}
function deleteParkingSpace(id) {
  return $l(id);
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
function fromParkingUser(user, zone_id) {
  return __spreadProps(__spreadValues({}, user.id ? { id: user.id } : {}), {
    identifier: user.name || "",
    notes: user.notes || "",
    zone_id,
    other_data: {
      name: user.name || "",
      email: user.email || "",
      car_model: user.car_model || "",
      car_colour: user.car_colour || "",
      plate_number: user.plate_number || "",
      phone: user.phone || "",
      deny: user.deny ? "true" : "false",
      special_needs: user.special_needs ? "true" : "false"
    }
  });
}
async function queryParkingUsers(zone_id) {
  const type_id = await resolveParkingUserTypeId();
  const assets = await ml({ zone_id, type_id, limit: 500 });
  return assets.data.map(toParkingUser);
}
async function saveParkingUser(user, zone_id) {
  const asset = fromParkingUser(user, zone_id);
  const type_id = await resolveParkingUserTypeId();
  return saveAsset(__spreadProps(__spreadValues({}, asset), { asset_type_id: type_id }));
}
function deleteParkingUser(id) {
  return $l(id);
}
var PARKING_FLEET_TYPE_NAME = "_PARKING_FLEET_VEHICLES_";
var _parking_fleet_type_id = null;
var _parking_fleet_type_id_promise = null;
function resolveParkingFleetTypeId() {
  if (_parking_fleet_type_id)
    return Promise.resolve(_parking_fleet_type_id);
  if (!_parking_fleet_type_id_promise) {
    _parking_fleet_type_id_promise = _bootstrapParkingFleetType().then((id) => {
      _parking_fleet_type_id = id;
      return id;
    });
  }
  return _parking_fleet_type_id_promise;
}
async function _bootstrapParkingFleetType() {
  return bootstrap_asset_type(PARKING_FLEET_TYPE_NAME);
}
function toParkingFleetVehicle(asset) {
  const data = asset.other_data || {};
  return {
    id: asset.id,
    name: asset.identifier || "",
    car_model: data.car_model || "",
    car_colour: data.car_colour || "",
    plate_number: data.plate_number || "",
    notes: asset.notes || ""
  };
}
function fromParkingFleetVehicle(vehicle, zone_id) {
  return __spreadProps(__spreadValues({}, vehicle.id ? { id: vehicle.id } : {}), {
    identifier: vehicle.name || "",
    notes: vehicle.notes || "",
    zone_id,
    other_data: {
      name: vehicle.name || "",
      car_model: vehicle.car_model || "",
      car_colour: vehicle.car_colour || "",
      plate_number: vehicle.plate_number || ""
    }
  });
}
async function queryParkingFleetVehicles(zone_id) {
  const type_id = await resolveParkingFleetTypeId();
  const assets = await ml({ zone_id, type_id, limit: 500 });
  return assets.data.map(toParkingFleetVehicle);
}
async function saveParkingFleetVehicle(vehicle, zone_id) {
  const asset = fromParkingFleetVehicle(vehicle, zone_id);
  const type_id = await resolveParkingFleetTypeId();
  return saveAsset(__spreadProps(__spreadValues({}, asset), { asset_type_id: type_id }));
}
function deleteParkingFleetVehicle(id) {
  return $l(id);
}

export {
  queryParkingSpaces,
  queryParkingSpacesForZones,
  saveParkingSpace,
  deleteParkingSpace,
  queryParkingUsers,
  saveParkingUser,
  deleteParkingUser,
  toParkingFleetVehicle,
  queryParkingFleetVehicles,
  saveParkingFleetVehicle,
  deleteParkingFleetVehicle
};
//# sourceMappingURL=chunk-6B3N6BP6.js.map
