import {
    deskFromAsset,
    queryDeskAssetsForZones,
    queryParkingSpacesForZones,
} from '@placeos/assets';
import { Desk, flatten, OrganisationService } from '@placeos/common';
import { listChildMetadata } from '@placeos/ts-client';
import type { BookingAsset } from './booking-form.types';

/** Load parking spaces on the parking levels of the active building or region. */
export async function loadParkingResources(
    org: OrganisationService,
    use_region: boolean,
): Promise<BookingAsset[]> {
    const levels = (
        use_region ? org.levelsForRegion() : org.levelsForBuilding()
    ).filter((_) => _.tags.includes('parking'));
    const spaces = await queryParkingSpacesForZones(levels.map((l) => l.id));
    return spaces.map((s) => ({
        ...s,
        id: s.id || s.map_id,
        groups: s.place_groups,
        zone: org.levelWithID([s.zone_id]) as any,
    })) as BookingAsset[];
}

/** Load desk resources from the assets API for the active building or region. */
export async function loadDeskResources(
    org: OrganisationService,
    use_region: boolean,
): Promise<BookingAsset[]> {
    const levels = use_region ? org.levelsForRegion() : org.levelsForBuilding();
    const assets = await queryDeskAssetsForZones(
        levels.map((level) => level.id),
    );
    return assets.map((asset) =>
        deskFromAsset(asset, org.levelWithID([asset.zone_id])),
    ) as BookingAsset[];
}

/**
 * Load the resources stored in the `type` metadata of every level in the
 * active building, or in every building of its region.
 */
export async function loadMetadataResources(
    org: OrganisationService,
    type: string,
    use_region: boolean,
): Promise<BookingAsset[]> {
    const map_metadata = (_) =>
        (_?.metadata[type]?.details instanceof Array
            ? _.metadata[type].details
            : []
        ).map((d) => ({
            ...d,
            id: d.id || d.map_id,
            zone: _.zone,
        }));
    if (use_region) {
        const id = org.building.parent_id;
        const buildings = org.buildings.filter((_) => _.parent_id === id);
        const lists = await Promise.all(
            buildings.map((_) =>
                listChildMetadata(_.id, { name: type }).then((data) =>
                    flatten(data.map(map_metadata)),
                ),
            ),
        );
        return flatten(lists);
    }
    const data = await listChildMetadata(org.building.id, {
        name: type,
    });
    return flatten(data.map(map_metadata));
}

/**
 * Whether a desk in any active building is assigned to `user_email`. Reads
 * desk assets when `use_assets` is set, otherwise the desks metadata.
 */
export async function hasAssignedDesk(
    org: OrganisationService,
    user_email: string,
    use_assets: boolean,
): Promise<boolean> {
    const buildings = org.building_list();
    if (!(buildings?.length > 0)) return false;
    const email = user_email?.toLowerCase();
    if (!email) return false;
    if (use_assets) {
        const building_ids = new Set(buildings.map((building) => building.id));
        const level_ids = org.levels
            .filter((level) => building_ids.has(level.parent_id))
            .map((level) => level.id);
        const desks = await queryDeskAssetsForZones(level_ids).catch(() => []);
        return desks.some((desk) => desk.assigned_to?.toLowerCase() === email);
    }
    const map_metadata = (meta) =>
        (meta?.metadata?.desks?.details instanceof Array
            ? meta.metadata.desks.details
            : []
        ).map((desk) => new Desk({ ...desk, zone: meta.zone }));
    const desk_lists = await Promise.all(
        buildings.map((building) =>
            listChildMetadata(building.id, { name: 'desks' })
                .then((data) => flatten<Desk>(data.map(map_metadata)))
                .catch(() => [] as Desk[]),
        ),
    );
    return flatten(desk_lists).some(
        (desk) => desk.assigned_to?.toLowerCase() === email,
    );
}
