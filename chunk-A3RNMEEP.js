import {
  findOldestByName,
  queryAllAssetPages,
  saveAsset,
  saveAssetCategory,
  saveAssetType
} from "./chunk-JNC45QN5.js";
import {
  Desk
} from "./chunk-GCZQA4AJ.js";
import {
  en,
  flatten,
  pp,
  sp,
  up
} from "./chunk-KI57CP2G.js";
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
  let category = findOldestByName(await pp({ hidden: true, limit: 500 }).then((response) => response.data), DESK_CATEGORY_NAME);
  if (!category) {
    category = await saveAssetCategory({
      name: DESK_CATEGORY_NAME,
      hidden: true
    });
  }
  let type = findOldestByName(await up({
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
    }, (error) => {
      _desk_type_id_promise = null;
      throw error;
    });
  }
  return _desk_type_id_promise;
}
async function queryDeskAssets(zone_id) {
  const type_id = await resolveDeskTypeId();
  const response = await queryAllAssetPages({ zone_id, type_id });
  return response.data;
}
async function queryDeskAssetsInZone(zone_id) {
  if (!zone_id)
    return [];
  const type_id = await resolveDeskTypeId();
  const response = await queryAllAssetPages({ zones: zone_id, type_id });
  return response.data;
}
async function queryDeskAssetsForZones(zone_ids) {
  if (!zone_ids.length)
    return [];
  const type_id = await resolveDeskTypeId();
  const results = await Promise.all(zone_ids.map((zone_id) => queryAllAssetPages({ zone_id, type_id }).then((response) => response.data)));
  return flatten(results);
}
function findDeskByLegacyId(desks, id) {
  if (!id)
    return void 0;
  return desks.find((desk) => desk.id === id) || desks.find((desk) => desk.map_id === id);
}
var DESK_ASSET_KEYS = /* @__PURE__ */ new Set([
  "id",
  "parent_id",
  "asset_type_id",
  "purchase_order_id",
  "zone_id",
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
  "created_at",
  "updated_at",
  "zone",
  "groups",
  "security",
  "qr_code",
  "staff_name",
  "toJSON"
]);
function isPlainValue(value) {
  if (value == null)
    return false;
  if (Array.isArray(value))
    return value.every((i) => typeof i !== "object");
  return typeof value !== "object" && typeof value !== "function";
}
function deskFromAsset(asset, zone) {
  const other_data = asset.other_data || {};
  const security = asset.security_system_groups?.[0] || "";
  return new Desk(__spreadProps(__spreadValues(__spreadValues({}, other_data), asset), {
    name: asset.identifier || asset.name,
    map_id: asset.map_id || other_data["map_id"] || asset.id,
    zone: new en(zone || { id: asset.zone_id }),
    groups: asset.place_groups,
    security
  }));
}
function deskOtherData(desk) {
  const other_data = __spreadValues({}, desk["other_data"] || {});
  for (const key of Object.keys(desk)) {
    if (DESK_ASSET_KEYS.has(key) || key.startsWith("_"))
      continue;
    const value = desk[key];
    if (value === "" || Array.isArray(value) && !value.length) {
      delete other_data[key];
    } else if (isPlainValue(value)) {
      other_data[key] = value;
    }
  }
  return other_data;
}
function deskSecurityGroups(desk) {
  if (!desk.security)
    return [];
  const groups = desk["security_system_groups"] || [];
  return groups[0] === desk.security ? groups : [desk.security];
}
function deskToAsset(desk, zone_id, zones) {
  const is_existing_asset = !!desk["asset_type_id"];
  return __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, is_existing_asset ? { id: desk.id } : {}), {
    zone_id
  }), (zones || desk["zones"])?.length ? { zones: zones || desk["zones"] } : {}), {
    identifier: desk.name,
    map_id: desk.map_id || desk.id,
    bookable: desk.bookable,
    assigned_to: desk.assigned_to,
    assigned_name: desk["assigned_name"] || "",
    place_groups: desk.groups,
    features: desk.features,
    images: desk.images,
    notes: desk["notes"] || "",
    security_system_groups: deskSecurityGroups(desk),
    other_data: deskOtherData(desk)
  });
}
async function saveDeskAsset(desk, zone_id, zones) {
  const asset_type_id = await resolveDeskTypeId();
  return saveAsset(__spreadProps(__spreadValues({}, deskToAsset(desk, zone_id, zones)), {
    asset_type_id
  }));
}
function deleteDeskAsset(id) {
  return sp(id);
}

export {
  queryDeskAssets,
  queryDeskAssetsInZone,
  queryDeskAssetsForZones,
  findDeskByLegacyId,
  deskFromAsset,
  saveDeskAsset,
  deleteDeskAsset
};
//# debugId=b0c70702-c7c4-5b2e-ac14-9161bbf074d5
//# sourceMappingURL=chunk-A3RNMEEP.js.map
