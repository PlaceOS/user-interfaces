import {
  findOldestByName,
  saveAsset,
  saveAssetCategory,
  saveAssetType
} from "./chunk-VIHI6OWH.js";
import {
  Al,
  CateringItem,
  Ul,
  flatten,
  gl,
  vl
} from "./chunk-VR5QVDIH.js";
import {
  __objRest
} from "./chunk-653SOEEV.js";

// libs/assets/src/lib/catering-assets.fn.ts
var CATERING_CATEGORY_NAME = "_CATERING_";
var CATERING_TYPE_PREFIX = "CATERING:";
var STANDALONE_CATERER_NAME = "_STANDALONE_";
var STANDALONE_CATERER_LABEL = "standalone";
var _catering_category_id = null;
var _catering_category_id_promise = null;
var _hidden_categories_promise = null;
var _catering_types_promise = null;
function normalise_name(name = "") {
  return name.trim().toLowerCase();
}
function reset_hidden_categories_cache() {
  _hidden_categories_promise = null;
}
function reset_catering_types_cache() {
  _catering_types_promise = null;
}
async function query_hidden_categories() {
  if (!_hidden_categories_promise) {
    _hidden_categories_promise = Ul({
      hidden: true,
      limit: 500
    }).then((_) => _.data).catch(() => []);
  }
  return _hidden_categories_promise;
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
    category = await saveAssetCategory({
      name,
      hidden: true
    });
    reset_hidden_categories_cache();
    return category;
  } catch (error) {
    reset_hidden_categories_cache();
    category = findOldestByName(await query_hidden_categories(), name);
    if (category)
      return category;
    throw error;
  }
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
  if (_catering_category_id)
    return Promise.resolve(_catering_category_id);
  if (!_catering_category_id_promise) {
    _catering_category_id_promise = ensure_hidden_category(CATERING_CATEGORY_NAME).then((category) => {
      _catering_category_id = category.id;
      return category.id;
    });
  }
  return _catering_category_id_promise;
}
function query_catering_types() {
  if (!_catering_types_promise) {
    _catering_types_promise = resolveCateringCategoryId().then((category_id) => Al({ category_id, limit: 500 })).then((_) => _.data.filter((type) => isCateringTypeName(type.name))).catch(() => []);
  }
  return _catering_types_promise;
}
async function resolveCateringTypeId(caterer = "") {
  const type_name = toCateringTypeName(caterer);
  const types = await query_catering_types();
  const type = findOldestByName(types, type_name);
  if (type)
    return type.id;
  try {
    const category_id = await resolveCateringCategoryId();
    const type2 = await saveAssetType({
      name: type_name,
      brand: "PlaceOS",
      category_id
    });
    reset_catering_types_cache();
    return type2.id;
  } catch (error) {
    reset_catering_types_cache();
    const types2 = await query_catering_types();
    const type2 = findOldestByName(types2, type_name);
    if (type2)
      return type2.id;
    throw error;
  }
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
    other_data: {
      category: item.category || "",
      description: item.description || "",
      unit_price: item.unit_price || 0,
      quantity: item.quantity || 0,
      options: item.options || [],
      tags: item.tags || [],
      accept_points: !!item.accept_points,
      discount_cap: item.discount_cap || 0,
      hide_for_zones: item.hide_for_zones || []
    }
  };
}
async function queryCateringItems(zone_id) {
  if (!zone_id)
    return [];
  const types = await query_catering_types();
  if (!types.length)
    return [];
  const results = await Promise.all(types.map((type) => gl({
    zone_id,
    type_id: type.id,
    limit: 500
  }).then((assets) => assets.data.map((asset) => toCateringItem(asset, fromCateringTypeName(type.name))))));
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
  return vl(id);
}

export {
  queryCateringItems,
  saveCateringItem,
  deleteCateringItem
};
//# sourceMappingURL=chunk-R4W6FDZR.js.map
