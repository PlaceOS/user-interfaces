import {
  decodeEntityNames
} from "./chunk-P5YDCKEY.js";
import {
  $,
  Rs,
  d,
  q,
  x
} from "./chunk-VC4MJRPT.js";

// apps/signage-manager/src/app/displays/signage-display.ts
var SYSTEMS_PATH = "systems";
function signageDisplay(raw) {
  const display = Object.assign(new Rs(raw), {
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
  return q({
    id,
    form_data,
    query_params: {},
    method: "patch",
    fn: signageDisplay,
    path: SYSTEMS_PATH
  });
}
function addSignageDisplay(form_data) {
  return x({
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
//# sourceMappingURL=chunk-Y465EEIV.js.map
