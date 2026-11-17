import { effect, inject, signal, untracked } from '@angular/core';
import { BuildingLevel, OrganisationService } from '@placeos/common';

import { queryParamsWriter } from './page-transitions';

/**
 * Level selection for a topbar. `updateZones` writes the selected zones to
 * the `zone_ids` query param and to `setFilters`. When the active levels
 * change, keeps the selected zones that are still active, or selects the
 * first level. Call in an injection context.
 */
export function levelSelection(
    setFilters: (filters: { zones: string[] }) => void,
) {
    const org = inject(OrganisationService);
    const setQueryParams = queryParamsWriter();
    /** Selected level ids */
    const zones = signal<string[]>([]);
    /** Levels of the active building */
    const levels = signal<BuildingLevel[]>([]);
    const updateZones = (list: string[]) => {
        setQueryParams({ zone_ids: list.join(',') });
        setFilters({ zones: list });
    };
    effect(() => {
        const current_levels = org.active_levels() || [];
        untracked(() => {
            levels.set(current_levels);
            const list = zones().filter((zone) =>
                current_levels.find((lvl) => lvl.id === zone),
            );
            if (!list.length && current_levels.length) {
                list.push(current_levels[0].id);
            }
            zones.set(list);
            updateZones(list);
        });
    });
    return { zones, levels, updateZones };
}
