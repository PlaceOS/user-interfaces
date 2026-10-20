import { computed, inject, Injector } from '@angular/core';
import {
    firstValueWhere,
    OrganisationService,
    SettingsService,
} from '@placeos/common';

/** Longest wait for zone settings before the guard uses the default flows */
const SETTINGS_WAIT = 20 * 1000;

/**
 * Matches a route only when `app.use_legacy_flows` is set.
 * Put the legacy route before the route of the new flow on the same path.
 * The router then opens the legacy flow when the setting is on and the
 * new flow when it is off.
 */
export async function legacyFlowsGuard() {
    const org = inject(OrganisationService);
    const settings = inject(SettingsService);
    const injector = inject(Injector);
    // Building settings load after org initialisation and reach the settings
    // service after a short delay. OrganisationService puts them first in the
    // override stack, so wait until that entry is the loaded building's.
    const ready = computed(() => {
        if (!org.initialised()) return false;
        const id = org.active_building()?.id;
        if (!id || settings.get('dont_load_metadata')) return true;
        return (
            org.active_building_loaded() &&
            settings.overrides()[0] === org.buildingSettings(id)
        );
    });
    let timer: ReturnType<typeof setTimeout>;
    await Promise.race([
        firstValueWhere(ready, Boolean, injector),
        new Promise((resolve) => (timer = setTimeout(resolve, SETTINGS_WAIT))),
    ]);
    clearTimeout(timer);
    return !!settings.get('app.use_legacy_flows');
}
