import {
  decodeEntityNames
} from "./chunk-EMBZFGIE.js";
import {
  $,
  P,
  Us,
  d,
  q
} from "./chunk-UY3BZCXJ.js";

// apps/signage-manager/src/app/displays/signage-display.ts
var SYSTEMS_PATH = "systems";
function signageDisplay(raw) {
  const display = Object.assign(new Us(raw), {
    signage_last_seen: raw.signage_last_seen || 0
  });
  return decodeEntityNames(display);
}
function querySignageDisplays(query_params) {
  return $({ query_params, fn: signageDisplay, path: SYSTEMS_PATH });
}
function showSignageDisplay(id) {
  return d({
    id,
    query_params: {},
    fn: signageDisplay,
    path: SYSTEMS_PATH
  });
}
function updateSignageDisplay(id, form_data) {
  return P({
    id,
    form_data,
    query_params: {},
    method: "patch",
    fn: signageDisplay,
    path: SYSTEMS_PATH
  });
}
function addSignageDisplay(form_data) {
  return q({
    form_data,
    query_params: {},
    fn: signageDisplay,
    path: SYSTEMS_PATH
  });
}

export {
  querySignageDisplays,
  showSignageDisplay,
  updateSignageDisplay,
  addSignageDisplay
};
//# debugId=44032185-8dea-5c26-8566-5953e0c2f2ac
//# sourceMappingURL=chunk-STYUKBG2.js.map
