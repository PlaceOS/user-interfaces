import {
  queryTypeAssetsForZones,
  queryTypeAssetsInZone,
  resolveHiddenAssetTypeId,
  saveAsset
} from "./chunk-VQKBKL6P.js";
import {
  sp
} from "./chunk-UKH6PET6.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/assets/src/lib/parking-assets.fn.ts
var PARKING_CATEGORY_NAME = "_PARKING_";
var PARKING_TYPE_NAME = "_PARKING_SPACES_";
function resolveParkingTypeId() {
  return resolveHiddenAssetTypeId(PARKING_CATEGORY_NAME, PARKING_TYPE_NAME);
}
async function queryParkingSpaces(zone_id) {
  return queryTypeAssetsForZones(await resolveParkingTypeId(), [zone_id]);
}
async function queryParkingSpacesForZones(zone_ids) {
  if (!zone_ids?.length)
    return [];
  return queryTypeAssetsForZones(await resolveParkingTypeId(), zone_ids);
}
async function queryParkingSpacesInZone(zone_id) {
  if (!zone_id)
    return [];
  return queryTypeAssetsInZone(await resolveParkingTypeId(), zone_id);
}
async function saveParkingSpace(space) {
  const type_id = await resolveParkingTypeId();
  return saveAsset(__spreadProps(__spreadValues({}, space), { asset_type_id: type_id }));
}
function deleteParkingSpace(id) {
  return sp(id);
}
var PARKING_USER_TYPE_NAME = "_PARKING_USERS_";
function resolveParkingUserTypeId() {
  return resolveHiddenAssetTypeId(PARKING_CATEGORY_NAME, PARKING_USER_TYPE_NAME);
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
  const assets = await queryTypeAssetsForZones(await resolveParkingUserTypeId(), [zone_id]);
  return assets.map(toParkingUser);
}
async function saveParkingUser(user, zone_id) {
  const asset = fromParkingUser(user, zone_id);
  const type_id = await resolveParkingUserTypeId();
  return saveAsset(__spreadProps(__spreadValues({}, asset), { asset_type_id: type_id }));
}
function deleteParkingUser(id) {
  return sp(id);
}
var PARKING_FLEET_TYPE_NAME = "_PARKING_FLEET_VEHICLES_";
function resolveParkingFleetTypeId() {
  return resolveHiddenAssetTypeId(PARKING_CATEGORY_NAME, PARKING_FLEET_TYPE_NAME);
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
  const assets = await queryTypeAssetsForZones(await resolveParkingFleetTypeId(), [zone_id]);
  return assets.map(toParkingFleetVehicle);
}
async function saveParkingFleetVehicle(vehicle, zone_id) {
  const asset = fromParkingFleetVehicle(vehicle, zone_id);
  const type_id = await resolveParkingFleetTypeId();
  return saveAsset(__spreadProps(__spreadValues({}, asset), { asset_type_id: type_id }));
}
function deleteParkingFleetVehicle(id) {
  return sp(id);
}

export {
  queryParkingSpaces,
  queryParkingSpacesForZones,
  queryParkingSpacesInZone,
  saveParkingSpace,
  deleteParkingSpace,
  toParkingUser,
  queryParkingUsers,
  saveParkingUser,
  deleteParkingUser,
  toParkingFleetVehicle,
  queryParkingFleetVehicles,
  saveParkingFleetVehicle,
  deleteParkingFleetVehicle
};
//# debugId=1ed9c7ae-5319-54ac-9605-587c1edac9d9
//# sourceMappingURL=chunk-B2IAHZJ4.js.map
