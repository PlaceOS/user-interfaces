import {
  OrganisationService,
  SettingsService,
  firstValueWhere
} from "./chunk-KTADYPHH.js";
import {
  Injector,
  computed,
  inject
} from "./chunk-6OEACKVR.js";

// apps/workplace/src/app/legacy-flows.guard.ts
var SETTINGS_WAIT = 20 * 1e3;
async function legacyFlowsGuard() {
  const org = inject(OrganisationService);
  const settings = inject(SettingsService);
  const injector = inject(Injector);
  const ready = computed(
    () => {
      if (!org.initialised())
        return false;
      const id = org.active_building()?.id;
      if (!id || settings.get("dont_load_metadata"))
        return true;
      return org.active_building_loaded() && settings.overrides()[0] === org.buildingSettings(id);
    },
    ...ngDevMode ? [{ debugName: "ready" }] : (
      /* istanbul ignore next */
      []
    )
  );
  let timer;
  await Promise.race([
    firstValueWhere(ready, Boolean, injector),
    new Promise((resolve) => timer = setTimeout(resolve, SETTINGS_WAIT))
  ]);
  clearTimeout(timer);
  return !!settings.get("app.use_legacy_flows");
}

export {
  legacyFlowsGuard
};
//# debugId=b946885c-10aa-5a95-bbdc-ed6dec4dc5e9
//# sourceMappingURL=chunk-N4FHCUN2.js.map
