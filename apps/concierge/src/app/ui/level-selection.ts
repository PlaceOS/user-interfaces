import { effect, inject, signal, untracked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuildingLevel, OrganisationService } from '@placeos/common';

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
    const route = inject(ActivatedRoute);
    const router = inject(Router);
    /** Selected level ids */
    const zones = signal<string[]>([]);
    /** Levels of the active building */
    const levels = signal<BuildingLevel[]>([]);
    const updateZones = (list: string[]) => {
        router.navigate([], {
            relativeTo: route,
            queryParams: { zone_ids: list.join(',') },
            queryParamsHandling: 'merge',
        });
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
