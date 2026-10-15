import { Desk, flatten, OrganisationService } from '@placeos/common';
import { isMock, listChildMetadata } from '@placeos/ts-client';
import {
    deskFromAsset,
    queryDeskAssetsForZones,
} from 'libs/assets/src/lib/desk-assets.fn';
import { queryParkingSpacesForZones } from 'libs/assets/src/lib/parking-assets.fn';
import type { BookingAsset } from './booking-form.types';

const _in_flight = new Map<string, Promise<unknown>>();

/**
 * Share one in-flight request between callers with the same key. The entry
 * is removed when the request settles, so a later call loads fresh data.
 */
function shareInFlight<T>(key: string, load: () => Promise<T>): Promise<T> {
    const scoped_key = `${isMock() ? 'mock' : 'live'}|${key}`;
    const existing = _in_flight.get(scoped_key) as Promise<T> | undefined;
    if (existing) return existing;
    const request = load().finally(() => _in_flight.delete(scoped_key));
    _in_flight.set(scoped_key, request);
    return request;
}

/** Child metadata of `zone_id` with the given `name`. Shares in-flight requests */
function childMetadata(zone_id: string, name: string) {
    return shareInFlight(`metadata|${zone_id}|${name}`, () =>
        listChildMetadata(zone_id, { name }),
    );
}

/** Desk assets of the given levels. Shares in-flight requests */
function deskAssets(level_ids: string[]) {
    return shareInFlight(`desk-assets|${[...level_ids].sort().join(',')}`, () =>
        queryDeskAssetsForZones(level_ids),
    );
}

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
    const assets = await deskAssets(levels.map((level) => level.id));
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
    const id = use_region ? org.building?.parent_id : org.building?.id;
    if (!id) return [];
    if (use_region) {
        const buildings = org.buildings.filter((_) => _.parent_id === id);
        const lists = await Promise.all(
            buildings.map((_) =>
                childMetadata(_.id, type).then((data) =>
                    flatten(data.map(map_metadata)),
                ),
            ),
        );
        return flatten(lists);
    }
    const data = await childMetadata(id, type);
    return flatten(data.map(map_metadata));
}

/**
 * ID of the first active building with a desk assigned to `user_email`, or
 * null. Reads desk assets when `use_assets` is set, otherwise the desks
 * metadata. Callers with the same scope share one in-flight scan.
 */
export function assignedDeskBuilding(
    org: OrganisationService,
    user_email: string,
    use_assets: boolean,
): Promise<string | null> {
    const buildings = org.building_list() || [];
    const email = user_email?.toLowerCase();
    if (!buildings.length || !email) return Promise.resolve(null);
    const building_ids = buildings.map((building) => building.id);
    const key = `assigned-desk|${use_assets}|${email}|${building_ids.join(',')}`;
    return shareInFlight(key, async () => {
        if (use_assets) {
            const ids = new Set(building_ids);
            const levels = org.levels.filter((level) =>
                ids.has(level.parent_id),
            );
            const desks = await deskAssets(
                levels.map((level) => level.id),
            ).catch(() => []);
            const desk = desks.find(
                (item) => item.assigned_to?.toLowerCase() === email,
            );
            if (!desk) return null;
            return (
                levels.find((level) => level.id === desk.zone_id)?.parent_id ||
                null
            );
        }
        const map_metadata = (meta) =>
            (meta?.metadata?.desks?.details instanceof Array
                ? meta.metadata.desks.details
                : []
            ).map((desk) => new Desk({ ...desk, zone: meta.zone }));
        const desk_lists = await Promise.all(
            building_ids.map((id) =>
                childMetadata(id, 'desks')
                    .then((data) => flatten<Desk>(data.map(map_metadata)))
                    .catch(() => [] as Desk[]),
            ),
        );
        const index = desk_lists.findIndex((list) =>
            list.some((desk) => desk.assigned_to?.toLowerCase() === email),
        );
        return index >= 0 ? building_ids[index] : null;
    });
}

/** Whether a desk in any active building is assigned to `user_email` */
export async function hasAssignedDesk(
    org: OrganisationService,
    user_email: string,
    use_assets: boolean,
): Promise<boolean> {
    return !!(await assignedDeskBuilding(org, user_email, use_assets));
}
