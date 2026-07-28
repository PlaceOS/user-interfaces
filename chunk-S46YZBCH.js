import {
  findOldestByName,
  saveAsset,
  saveAssetCategory,
  saveAssetType
} from "./chunk-U3IRXCUL.js";
import {
  Xh,
  Zh,
  cl,
  flatten,
  sl
} from "./chunk-SWNDH6XR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/assets/src/lib/locker-assets.fn.ts
var LOCKER_CATEGORY_NAME = "_LOCKERS_";
var LOCKER_BANK_TYPE_NAME = "_LOCKER_BANKS_";
var LOCKER_TYPE_NAME = "_LOCKERS_";
var _locker_bank_type_id = null;
var _locker_bank_type_id_promise = null;
var _locker_type_id = null;
var _locker_type_id_promise = null;
var _hidden_categories_promise = null;
var _types_for_category_promises = /* @__PURE__ */ new Map();
async function query_hidden_categories() {
  if (!_hidden_categories_promise) {
    _hidden_categories_promise = cl({
      hidden: true,
      limit: 500
    }).then((_) => _.data).catch(() => []);
  }
  return _hidden_categories_promise;
}
async function query_types_for_category(category_id) {
  if (!_types_for_category_promises.has(category_id)) {
    _types_for_category_promises.set(category_id, sl({ category_id, limit: 500 }).then((_) => _.data).catch(() => []));
  }
  return _types_for_category_promises.get(category_id);
}
async function ensure_hidden_category(name) {
  let category = findOldestByName(await query_hidden_categories(), name);
  if (category)
    return category;
  _hidden_categories_promise = null;
  category = findOldestByName(await query_hidden_categories(), name);
  if (category)
    return category;
  const created = await saveAssetCategory({
    name,
    hidden: true
  });
  _hidden_categories_promise = null;
  return created;
}
async function ensure_type(category_id, name) {
  let type = findOldestByName(await query_types_for_category(category_id), name);
  if (type)
    return type;
  const created = await saveAssetType({
    name,
    brand: "PlaceOS",
    category_id
  });
  _types_for_category_promises.delete(category_id);
  return created;
}
async function bootstrap_locker_type(type_name) {
  const category = await ensure_hidden_category(LOCKER_CATEGORY_NAME);
  const type = await ensure_type(category.id, type_name);
  return type.id;
}
function resolveLockerBankTypeId() {
  if (_locker_bank_type_id)
    return Promise.resolve(_locker_bank_type_id);
  if (!_locker_bank_type_id_promise) {
    _locker_bank_type_id_promise = bootstrap_locker_type(LOCKER_BANK_TYPE_NAME).then((id) => {
      _locker_bank_type_id = id;
      return id;
    });
  }
  return _locker_bank_type_id_promise;
}
function resolveLockerTypeId() {
  if (_locker_type_id)
    return Promise.resolve(_locker_type_id);
  if (!_locker_type_id_promise) {
    _locker_type_id_promise = bootstrap_locker_type(LOCKER_TYPE_NAME).then((id) => {
      _locker_type_id = id;
      return id;
    });
  }
  return _locker_type_id_promise;
}
async function queryLockerBankAssetsForZones(zone_ids) {
  if (!zone_ids?.length)
    return [];
  const type_id = await resolveLockerBankTypeId();
  const results = await Promise.all(zone_ids.map((zone_id) => Zh({ zone_id, type_id, limit: 500 }).then((_) => _.data)));
  return flatten(results);
}
async function saveLockerBankAsset(bank) {
  const type_id = await resolveLockerBankTypeId();
  return saveAsset(__spreadProps(__spreadValues({}, bank), { asset_type_id: type_id }));
}
function deleteLockerBankAsset(id) {
  return Xh(id);
}
async function queryLockerAssets(zone_id) {
  const type_id = await resolveLockerTypeId();
  const response = await Zh({ zone_id, type_id, limit: 500 });
  return response.data;
}
async function queryLockerAssetsForZones(zone_ids) {
  if (!zone_ids?.length)
    return [];
  const type_id = await resolveLockerTypeId();
  const results = await Promise.all(zone_ids.map((zone_id) => Zh({ zone_id, type_id, limit: 500 }).then((_) => _.data)));
  return flatten(results);
}
async function saveLockerAsset(locker) {
  const type_id = await resolveLockerTypeId();
  return saveAsset(__spreadProps(__spreadValues({}, locker), { asset_type_id: type_id }));
}
function deleteLockerAsset(id) {
  return Xh(id);
}

export {
  queryLockerBankAssetsForZones,
  saveLockerBankAsset,
  deleteLockerBankAsset,
  queryLockerAssets,
  queryLockerAssetsForZones,
  saveLockerAsset,
  deleteLockerAsset
};
//# sourceMappingURL=chunk-S46YZBCH.js.map
