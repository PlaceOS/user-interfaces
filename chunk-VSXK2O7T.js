import {
  decodeEntityNames
} from "./chunk-MKO4OI6B.js";
import {
  $,
  Cs,
  P,
  T,
  f
} from "./chunk-MIKPTNJX.js";

// apps/signage-manager/src/app/displays/signage-display.ts
var SYSTEMS_PATH = "systems";
function signageDisplay(raw) {
  const display = Object.assign(new Cs(raw), {
    signage_last_seen: raw.signage_last_seen || 0
  });
  return decodeEntityNames(display);
}
function querySignageDisplays(query_params) {
  return $({ query_params, fn: signageDisplay, path: SYSTEMS_PATH });
}
function showSignageDisplay(id) {
  return f({
    id,
    query_params: {},
    fn: signageDisplay,
    path: SYSTEMS_PATH
  });
}
function updateSignageDisplay(id, form_data) {
  return T({
    id,
    form_data,
    query_params: {},
    method: "patch",
    fn: signageDisplay,
    path: SYSTEMS_PATH
  });
}
function addSignageDisplay(form_data) {
  return P({
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
//# sourceMappingURL=chunk-VSXK2O7T.js.map
