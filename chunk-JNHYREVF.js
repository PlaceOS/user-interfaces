import {
  queryTypeAssetsForZones,
  resolveHiddenAssetTypeId,
  saveAsset
} from "./chunk-RFCENQ5H.js";
import {
  Desk
} from "./chunk-ACYV7NM4.js";
import {
  en,
  sp
} from "./chunk-JYQPCPCB.js";
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
function deskFromAsset(asset, zone) {
  const security = asset.security_system_groups?.[0] || "";
  return new Desk(__spreadProps(__spreadValues({}, asset), {
    name: asset.identifier || asset.name,
    map_id: asset.map_id || asset.id,
    zone: new en(zone || { id: asset.zone_id }),
    groups: asset.place_groups,
    security
  }));
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
    security_system_groups: desk.security ? [desk.security] : []
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
  deskFromAsset,
  saveDeskAsset,
  deleteDeskAsset
};
//# debugId=68dc7a61-b8c4-556f-8f64-a32fdc220755
//# sourceMappingURL=chunk-JNHYREVF.js.map
