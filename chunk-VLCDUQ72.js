import {
  decodeEntityNames
} from "./chunk-ODGOXJUO.js";
import {
  signageSystem
} from "./chunk-HPXH55NH.js";
import {
  orThrow,
  orThrowPage,
  systems_exports
} from "./chunk-ZHBO75B7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-QQY67O5D.js";

// apps/signage-manager/src/app/displays/signage-display.ts
function signageDisplay(raw) {
  return decodeEntityNames(signageSystem(__spreadProps(__spreadValues({}, raw), {
    signage_last_seen: raw.signage_last_seen || 0
  })));
}
function displayPage(page) {
  return __spreadProps(__spreadValues({}, page), {
    data: page.data.map(signageDisplay),
    next: page.next ? () => page.next()?.then(displayPage) ?? null : null
  });
}
function querySignageDisplays(query_params) {
  return systems_exports.query(query_params).then(orThrowPage).then(displayPage);
}
function showSignageDisplay(id) {
  return systems_exports.show({ sys_id: id }).then(orThrow).then(signageDisplay);
}
function updateSignageDisplay(id, form_data) {
  return systems_exports.update({
    sys_id: id,
    version: form_data.version || 0,
    body: form_data
  }).then(orThrow).then(signageDisplay);
}
function addSignageDisplay(form_data) {
  return systems_exports.create({ body: form_data }).then(orThrow).then(signageDisplay);
}

export {
  querySignageDisplays,
  showSignageDisplay,
  updateSignageDisplay,
  addSignageDisplay
};
//# debugId=bc3289e6-da1a-50be-9a75-fb70ac615e99
//# sourceMappingURL=chunk-VLCDUQ72.js.map
