import {
  setHours
} from "./chunk-UWCVIV5O.js";
import {
  Wu,
  addHours,
  form,
  isAfter,
  isBefore,
  required,
  signal,
  stringToMinutes
} from "./chunk-DN5DJS3N.js";

// node_modules/date-fns/subHours.js
function subHours(date, amount, options) {
  return addHours(date, -amount, options);
}

// libs/assets/src/lib/asset.utilities.ts
function generateAssetCategoryForm(category = {}, injector) {
  const model = signal(
    {
      id: category.id || "",
      name: category.name || "",
      parent_category_id: category.parent_category_id || ""
    },
    ...ngDevMode ? [{ debugName: "model" }] : (
      /* istanbul ignore next */
      []
    )
  );
  const ref_form = form(model, (p) => required(p.name), {
    injector
  });
  return { model, form: ref_form };
}
function generateAssetPurchaseOrderForm(order = {}, injector) {
  const model = signal(
    {
      id: order.id || "",
      purchase_order_number: order.purchase_order_number || "",
      invoice_number: order.invoice_number || "",
      unit_price: order.unit_price || 0,
      purchase_date: order.purchase_date ? order.purchase_date * 1e3 : null,
      expected_service_start_date: order.expected_service_start_date ? order.expected_service_start_date * 1e3 : null,
      expected_service_end_date: order.expected_service_end_date ? order.expected_service_end_date * 1e3 : null
    },
    ...ngDevMode ? [{ debugName: "model" }] : (
      /* istanbul ignore next */
      []
    )
  );
  const ref_form = form(model, (p) => required(p.purchase_order_number), {
    injector
  });
  return { model, form: ref_form };
}
function generateAssetGroupForm(group = {}, injector) {
  const model = signal(
    {
      id: group.id || "",
      category_id: group.category_id || "",
      images: [...group.images || []],
      brand: group.brand || "",
      name: group.name || "",
      description: group.description || ""
    },
    ...ngDevMode ? [{ debugName: "model" }] : (
      /* istanbul ignore next */
      []
    )
  );
  const ref_form = form(model, (p) => {
    required(p.category_id);
    required(p.name);
  }, { injector });
  return { model, form: ref_form };
}
function generateAssetForm(asset = {}, injector) {
  const model = signal(
    {
      id: asset.id || "",
      asset_type_id: asset.asset_type_id || "",
      name: asset.name || "",
      serial_number: asset.serial_number || "",
      barcode: asset.barcode || "",
      identifier: asset.identifier || "",
      other_data: asset.other_data || {},
      purchase_order_id: asset.purchase_order_id || ""
    },
    ...ngDevMode ? [{ debugName: "model" }] : (
      /* istanbul ignore next */
      []
    )
  );
  const ref_form = form(model, (p) => required(p.asset_type_id), {
    injector
  });
  return { model, form: ref_form };
}
var RULE_REQUESTS = {};
function getAssetRulesForZone(zone_id, fresh = false) {
  if (!zone_id)
    return Promise.resolve([]);
  if (!RULE_REQUESTS[zone_id] || fresh)
    RULE_REQUESTS[zone_id] = Wu(zone_id, "assets_config").then((_) => _.details instanceof Array ? _.details : []).catch(() => []);
  return RULE_REQUESTS[zone_id];
}
function assetAvailable(item, rules, event) {
  const current_date = Date.now();
  const event_date = new Date(event.date);
  const isRuleMatch = (rule) => item.name === rule.name || item.category?.name.includes(rule.name) || event.resources?.some((resource) => resource.zones?.includes(rule.name)) || event.space?.zones?.includes(rule.name) || rule.name === "*";
  const countMatches = (rule) => rule.rules.reduce((matches, condition) => {
    switch (condition[0]) {
      case "is_before":
        return matches + (isBefore(current_date, subHours(event_date, condition[1])) ? 1 : 0);
      case "within_hours":
        return matches + (isAfter(current_date, subHours(event_date, condition[1])) ? 1 : 0);
      case "after_hour":
        return matches + (isAfter(event_date, setHours(event_date, condition[1])) ? 1 : 0);
      case "before_hour":
        return matches + (isBefore(event_date, setHours(event_date, condition[1])) ? 1 : 0);
      case "min_length":
        return matches + (event.duration >= stringToMinutes(condition[1]) ? 1 : 0);
      case "max_length":
        return matches + (event.duration <= stringToMinutes(condition[1]) ? 1 : 0);
      case "visitor_type":
        return matches + (event.ext("visitor_type") === condition[1] ? 1 : 0);
      default:
        return matches + 1;
    }
  }, 0);
  for (const rule of rules) {
    if (isRuleMatch(rule)) {
      if (countMatches(rule) < rule.rules.length) {
        return false;
      }
    }
  }
  return true;
}

export {
  generateAssetCategoryForm,
  generateAssetPurchaseOrderForm,
  generateAssetGroupForm,
  generateAssetForm,
  getAssetRulesForZone,
  assetAvailable
};
//# sourceMappingURL=chunk-YB5K4TR6.js.map
