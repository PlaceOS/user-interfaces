import {
  Desk,
  findOldestByName,
  saveAssetCategory,
  saveAssetType
} from "./chunk-I3HIYV2O.js";
import {
  Al,
  Ul,
  Yt,
  flatten,
  gl
} from "./chunk-7MJI2IHH.js";
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
  let category = findOldestByName(await Ul({ hidden: true, limit: 500 }).then((response) => response.data), DESK_CATEGORY_NAME);
  if (!category) {
    category = await saveAssetCategory({
      name: DESK_CATEGORY_NAME,
      hidden: true
    });
  }
  let type = findOldestByName(await Al({
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
async function queryDeskAssets(zone_id) {
  const type_id = await resolveDeskTypeId();
  const response = await gl({ zone_id, type_id, limit: 500 });
  return response.data;
}
async function queryDeskAssetsForZones(zone_ids) {
  if (!zone_ids.length)
    return [];
  const type_id = await resolveDeskTypeId();
  const results = await Promise.all(zone_ids.map((zone_id) => gl({ zone_id, type_id, limit: 500 }).then((response) => response.data)));
  return flatten(results);
}
function deskFromAsset(asset, zone) {
  const security = asset.security_system_groups?.[0] || "";
  return new Desk(__spreadProps(__spreadValues({}, asset), {
    name: asset.identifier || asset.name,
    map_id: asset.map_id || asset.id,
    zone: new Yt(zone || { id: asset.zone_id }),
    groups: asset.place_groups,
    security
  }));
}

export {
  queryDeskAssets,
  queryDeskAssetsForZones,
  deskFromAsset
};
//# sourceMappingURL=chunk-LVPYA6GN.js.map
