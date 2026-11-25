import {
  ensureAssetType,
  ensureHiddenCategory,
  findOldestByName,
  saveAsset
} from "./chunk-OOSRXU7K.js";
import {
  CateringItem,
  isJsonArray,
  isJsonRecord,
  jsonRecords,
  jsonStrings,
  toJsonValue
} from "./chunk-IUIJMQP6.js";
import {
  asset_types_exports,
  assets_exports,
  flatten,
  orThrow,
  orThrowPage
} from "./chunk-BSTBRHVR.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// libs/assets/src/lib/catering-assets.fn.ts
var CATERING_CATEGORY_NAME = "_CATERING_";
var CATERING_TYPE_PREFIX = "CATERING:";
var STANDALONE_CATERER_NAME = "_STANDALONE_";
var STANDALONE_CATERER_LABEL = "standalone";
var _catering_category_id_promise = null;
var _catering_types_promise = null;
function normalise_name(name = "") {
  return name.trim().toLowerCase();
}
function reset_catering_types_cache() {
  _catering_types_promise = null;
}
function toCateringTypeName(caterer = "") {
  const value = `${caterer || ""}`.trim();
  const name = !value || normalise_name(value) === STANDALONE_CATERER_LABEL || value === STANDALONE_CATERER_NAME ? STANDALONE_CATERER_NAME : value;
  return `${CATERING_TYPE_PREFIX}${name}`;
}
function fromCateringTypeName(type_name = "") {
  const name = type_name.startsWith(CATERING_TYPE_PREFIX) ? type_name.slice(CATERING_TYPE_PREFIX.length) : type_name;
  return name === STANDALONE_CATERER_NAME ? STANDALONE_CATERER_LABEL : name;
}
function isCateringTypeName(type_name = "") {
  return type_name.startsWith(CATERING_TYPE_PREFIX);
}
function resolveCateringCategoryId() {
  if (!_catering_category_id_promise) {
    const request = ensureHiddenCategory(CATERING_CATEGORY_NAME).then((category) => category.id);
    request.catch(() => {
      if (_catering_category_id_promise === request) {
        _catering_category_id_promise = null;
      }
    });
    _catering_category_id_promise = request;
  }
  return _catering_category_id_promise;
}
function query_catering_types() {
  if (!_catering_types_promise) {
    const request = resolveCateringCategoryId().then((category_id) => asset_types_exports.query({ category_id, limit: 500 }).then(orThrowPage)).then((_) => _.data.filter((type) => isCateringTypeName(type.name || ""))).catch(() => {
      if (_catering_types_promise === request) {
        _catering_types_promise = null;
      }
      return [];
    });
    _catering_types_promise = request;
  }
  return _catering_types_promise;
}
async function resolveCateringTypeId(caterer = "") {
  const type_name = toCateringTypeName(caterer);
  const type = findOldestByName(await query_catering_types(), type_name);
  if (type)
    return type.id;
  const created = await ensureAssetType(await resolveCateringCategoryId(), type_name);
  reset_catering_types_cache();
  return created.id;
}
function toCateringItem(asset, caterer) {
  const details = asset.other_data || {};
  return new CateringItem({
    id: asset.id,
    name: asset.name || asset.identifier || asset.id,
    caterer,
    category: details.category || "",
    description: details.description || "",
    unit_price: +details.unit_price || 0,
    quantity: +details.quantity || 0,
    options: details.options instanceof Array ? details.options : [],
    tags: details.tags instanceof Array ? details.tags : [],
    accept_points: !!details.accept_points,
    discount_cap: +details.discount_cap || 0,
    images: asset.images instanceof Array ? asset.images : details.images instanceof Array ? details.images : [],
    hide_for_zones: details.hide_for_zones instanceof Array ? details.hide_for_zones : []
  });
}
function to_asset_data(item, zone_id, asset_type_id) {
  const id = item.id || void 0;
  return {
    id,
    name: item.name || id,
    identifier: item.name || id,
    zone_id,
    asset_type_id,
    images: [...item.images || []],
    other_data: toJsonValue({
      category: item.category || "",
      description: item.description || "",
      unit_price: item.unit_price || 0,
      quantity: item.quantity || 0,
      options: item.options || [],
      tags: item.tags || [],
      accept_points: !!item.accept_points,
      discount_cap: item.discount_cap || 0,
      hide_for_zones: item.hide_for_zones || []
    })
  };
}
async function queryCateringItems(zone_id) {
  if (!zone_id)
    return [];
  const types = await query_catering_types();
  if (!types.length)
    return [];
  const results = await Promise.all(types.map((type) => assets_exports.query({ zone_id, type_id: type.id, limit: 500 }).then(orThrowPage).then((assets) => assets.data.map((asset) => toCateringItem(asset, fromCateringTypeName(type.name || ""))))));
  return flatten(results).sort((a, b) => a.name.localeCompare(b.name));
}
async function saveCateringItem(item, zone_id) {
  const asset_type_id = await resolveCateringTypeId(item.caterer);
  const asset = to_asset_data(item, zone_id, asset_type_id);
  let saved;
  try {
    saved = await saveAsset(asset);
  } catch (error) {
    if (!asset.id || error?.status !== 404)
      throw error;
    const _a = asset, { id } = _a, new_asset = __objRest(_a, ["id"]);
    saved = await saveAsset(new_asset);
  }
  return toCateringItem(saved, fromCateringTypeName(toCateringTypeName(item.caterer)));
}
function deleteCateringItem(id) {
  return assets_exports.destroy({ id }).then(orThrow);
}

// libs/catering/src/lib/catering-metadata.ts
function cateringSettingsFromJson(details) {
  if (!isJsonRecord(details))
    return {};
  const settings = {};
  if (typeof details["require_notes"] === "boolean") {
    settings.require_notes = details["require_notes"];
  }
  if (isJsonArray(details["charge_codes"])) {
    settings.charge_codes = jsonStrings(details["charge_codes"]);
  }
  if (isJsonArray(details["disabled_rooms"])) {
    settings.disabled_rooms = jsonStrings(details["disabled_rooms"]);
  }
  return settings;
}
function rulesetsFromJson(details) {
  return jsonRecords(details).flatMap((item) => {
    const { id, name, rules } = item;
    if (typeof name !== "string" || !isJsonArray(rules))
      return [];
    const ruleset = __spreadProps(__spreadValues({}, typeof id === "string" ? { id } : {}), {
      name,
      rules: rules.filter((rule) => isJsonArray(rule) && rule.length === 2 && typeof rule[0] === "string")
    });
    return [ruleset];
  });
}

export {
  queryCateringItems,
  saveCateringItem,
  deleteCateringItem,
  cateringSettingsFromJson,
  rulesetsFromJson
};
//# debugId=5303f264-1f1b-530e-92f8-67753bd77ab7
//# sourceMappingURL=chunk-L2D7KVU2.js.map
