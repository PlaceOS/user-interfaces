import {
  queryTypeAssetsForZones,
  queryTypeAssetsInZone,
  resolveHiddenAssetTypeId,
  saveAsset
} from "./chunk-PISMDB54.js";
import {
  sp
} from "./chunk-4JZMSBTZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/assets/src/lib/locker-assets.fn.ts
var LOCKER_CATEGORY_NAME = "_LOCKERS_";
var LOCKER_BANK_TYPE_NAME = "_LOCKER_BANKS_";
var LOCKER_TYPE_NAME = "_LOCKERS_";
function resolveLockerBankTypeId() {
  return resolveHiddenAssetTypeId(LOCKER_CATEGORY_NAME, LOCKER_BANK_TYPE_NAME);
}
function resolveLockerTypeId() {
  return resolveHiddenAssetTypeId(LOCKER_CATEGORY_NAME, LOCKER_TYPE_NAME);
}
async function queryLockerBankAssetsForZones(zone_ids) {
  if (!zone_ids?.length)
    return [];
  return queryTypeAssetsForZones(await resolveLockerBankTypeId(), zone_ids);
}
async function queryLockerBankAssetsInZone(zone_id) {
  if (!zone_id)
    return [];
  return queryTypeAssetsInZone(await resolveLockerBankTypeId(), zone_id);
}
async function saveLockerBankAsset(bank) {
  const type_id = await resolveLockerBankTypeId();
  return saveAsset(__spreadProps(__spreadValues({}, bank), { asset_type_id: type_id }));
}
function deleteLockerBankAsset(id) {
  return sp(id);
}
async function queryLockerAssets(zone_id) {
  return queryTypeAssetsForZones(await resolveLockerTypeId(), [zone_id]);
}
async function queryLockerAssetsForZones(zone_ids) {
  if (!zone_ids?.length)
    return [];
  return queryTypeAssetsForZones(await resolveLockerTypeId(), zone_ids);
}
async function queryLockerAssetsInZone(zone_id) {
  if (!zone_id)
    return [];
  return queryTypeAssetsInZone(await resolveLockerTypeId(), zone_id);
}
async function saveLockerAsset(locker) {
  const type_id = await resolveLockerTypeId();
  return saveAsset(__spreadProps(__spreadValues({}, locker), { asset_type_id: type_id }));
}
function deleteLockerAsset(id) {
  return sp(id);
}

export {
  queryLockerBankAssetsForZones,
  queryLockerBankAssetsInZone,
  saveLockerBankAsset,
  deleteLockerBankAsset,
  queryLockerAssets,
  queryLockerAssetsForZones,
  queryLockerAssetsInZone,
  saveLockerAsset,
  deleteLockerAsset
};
//# debugId=d6b1ec93-2114-57f0-8be7-209ae5e76e78
//# sourceMappingURL=chunk-X7INAE6Y.js.map
