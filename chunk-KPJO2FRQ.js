import {
  queryTypeAssetsForZones,
  queryTypeAssetsInZone,
  resolveHiddenAssetTypeId,
  saveAsset
} from "./chunk-ZAQ6A2MU.js";
import {
  Desk
} from "./chunk-IZI74WOU.js";
import {
  en,
  sp
} from "./chunk-R4OILVJS.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/assets/src/lib/desk-assets.fn.ts
var DESK_CATEGORY_NAME = "_DESKS_";
var DESK_TYPE_NAME = "_DESKS_";
function resolveDeskTypeId() {
  return resolveHiddenAssetTypeId(DESK_CATEGORY_NAME, DESK_TYPE_NAME);
}
async function queryDeskAssets(zone_id) {
  return queryDeskAssetsForZones([zone_id]);
}
async function queryDeskAssetsForZones(zone_ids) {
  if (!zone_ids.length)
    return [];
  return queryTypeAssetsForZones(await resolveDeskTypeId(), zone_ids);
}
async function queryDeskAssetsInZone(zone_id) {
  if (!zone_id)
    return [];
  return queryTypeAssetsInZone(await resolveDeskTypeId(), zone_id);
}
function findDeskByLegacyId(desks, id) {
  if (!id)
    return void 0;
  return desks.find((desk) => desk.id === id) || desks.find((desk) => desk.place_id === id) || desks.find((desk) => desk.map_id === id);
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
  "place_id",
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
var DESK_OTHER_DATA_KEYS = /* @__PURE__ */ new Set(["homebase"]);
function deskFromAsset(asset, zone) {
  const security = asset.security_system_groups?.[0] || "";
  return new Desk(__spreadProps(__spreadValues(__spreadValues(__spreadValues({}, asset.other_data || {}), asset.client_ids || {}), asset), {
    name: asset.identifier || asset.name,
    map_id: asset.map_id || asset.id,
    zone: new en(zone || { id: asset.zone_id }),
    groups: asset.place_groups,
    security
  }));
}
function deskCustomData(desk) {
  const client_ids = __spreadValues({}, desk["client_ids"] || {});
  const other_data = __spreadValues({}, desk["other_data"] || {});
  for (const key of Object.keys(desk)) {
    if (DESK_ASSET_KEYS.has(key) || key.startsWith("_"))
      continue;
    const value = desk[key];
    if (value === "" || Array.isArray(value) && !value.length) {
      delete client_ids[key];
      delete other_data[key];
    } else if (typeof value === "string" && !DESK_OTHER_DATA_KEYS.has(key)) {
      client_ids[key] = value;
      delete other_data[key];
    } else if (isPlainValue(value)) {
      other_data[key] = value;
      delete client_ids[key];
    }
  }
  return { client_ids, other_data };
}
function deskSecurityGroups(desk) {
  if (!desk.security)
    return [];
  const groups = desk["security_system_groups"] || [];
  return groups[0] === desk.security ? groups : [desk.security];
}
function deskToAsset(desk, zone_id, zones) {
  const is_existing_asset = !!desk["asset_type_id"];
  const { client_ids, other_data } = deskCustomData(desk);
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
    client_ids,
    other_data
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
  queryDeskAssetsForZones,
  queryDeskAssetsInZone,
  findDeskByLegacyId,
  deskFromAsset,
  saveDeskAsset,
  deleteDeskAsset
};
//# debugId=2da20c27-da3d-57fa-8457-056ac0c8dd48
//# sourceMappingURL=chunk-KPJO2FRQ.js.map
