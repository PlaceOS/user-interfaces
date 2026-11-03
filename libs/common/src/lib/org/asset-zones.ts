import { unique } from '../general';
import type { OrganisationService } from './organisation.service';

/**
 * Zones an asset on `level_id` belongs to: the org, region, building and level.
 * Assets are queried by any of them with the assets API `zones` filter.
 */
export function assetZones(
    org: Pick<OrganisationService, 'organisation' | 'levels' | 'buildings'> &
        Partial<Pick<OrganisationService, 'building' | 'region'>>,
    level_id: string,
): string[] {
    const level = org.levels?.find((item) => item.id === level_id);
    // levels that are not loaded are assumed to be in the active building
    const building_id = level?.parent_id || org.building?.id;
    const building =
        org.buildings?.find((item) => item.id === building_id) ||
        (org.building?.id === building_id ? org.building : undefined);
    return unique([
        org.organisation?.id,
        building?.parent_id || org.region?.id,
        building?.id || building_id,
        level_id,
    ]).filter((id) => !!id);
}
