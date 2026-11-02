// apps/signage/src/app/bootstrap-state.ts
var STORE_DISPLAY_KEY = "PlaceOS.SIGNAGE.display";
function hasBootstrappedDisplay() {
  try {
    return !!localStorage.getItem(STORE_DISPLAY_KEY);
  } catch {
    return false;
  }
}

export {
  STORE_DISPLAY_KEY,
  hasBootstrappedDisplay
};
//# debugId=c7e3b7b2-7877-5fce-959f-83a92ed5e4d0
//# sourceMappingURL=chunk-OQDJRCPY.js.map
