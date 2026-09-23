import {
  findOldestByName,
  saveAssetCategory,
  saveAssetType
} from "./chunk-7CYURA5J.js";
import {
  Desk
} from "./chunk-BBWQXWRS.js";
import {
  Fl,
  Xt,
  Zl,
  ed,
  flatten
} from "./chunk-C5JCVNGY.js";
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
async function queryDeskAssets(zone_id) {
  const type_id = await resolveDeskTypeId();
  const response = await Fl({ zone_id, type_id, limit: 500 });
  return response.data;
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

export {
  queryDeskAssets,
  queryDeskAssetsForZones,
  deskFromAsset
};
//# debugId=6dcd9515-8056-5f8c-9c00-2e59f7c8358b
//# sourceMappingURL=chunk-275CIZOL.js.map
