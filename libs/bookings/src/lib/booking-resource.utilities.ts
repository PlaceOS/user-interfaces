import type { BookingAsset } from './booking-form.types';
import { findNearbyFeature } from './booking.utilities';

/** Whether the resource has the given ID or map ID. */
export function resourceMatches(resource: Partial<BookingAsset>, id: string) {
    if (!resource || !id) return false;
    return resource.id === id || resource.map_id === id;
}

/** Find the resource with the given ID or map ID. */
export function findResourceById(resources: BookingAsset[], id: string) {
    return (resources || []).find((_) => resourceMatches(_, id));
}

/** Whether the resource is already reserved for another group member. */
export function resourceReserved(
    resource: Partial<BookingAsset>,
    reserved_ids: Set<string>,
) {
    return !!(
        resource &&
        ((resource.id && reserved_ids.has(resource.id)) ||
            (resource.map_id && reserved_ids.has(resource.map_id)))
    );
}

/** Reserve the resource so no other group member gets it. */
export function reserveResource(
    resource: Partial<BookingAsset>,
    reserved_ids: Set<string>,
) {
    if (!resource) return;
    if (resource.id) reserved_ids.add(resource.id);
    if (resource.map_id) reserved_ids.add(resource.map_id);
}

/**
 * Find up to `count` unreserved resources closest to the map element `id`.
 * Found resources are added to `reserved_ids`.
 */
export async function nearbyResources(
    map_url: string,
    id: string,
    resources: BookingAsset[],
    count: number,
    reserved_ids = new Set<string>(),
): Promise<BookingAsset[]> {
    const nearby_resources: BookingAsset[] = [];
    let asset_list = resources.filter(
        (_) => !resourceReserved(_, reserved_ids) && !resourceMatches(_, id),
    );
    for (let i = 0; i < count; i++) {
        const item = await findNearbyFeature(
            map_url,
            id,
            asset_list.map((_) => _.map_id || _.id),
        );
        if (item) {
            const resource = resources.find((_) => resourceMatches(_, item));
            if (!resource || resourceReserved(resource, reserved_ids)) {
                asset_list = asset_list.filter(
                    (_) => !resourceMatches(_, item),
                );
                continue;
            }
            nearby_resources.push(resource);
            reserveResource(resource, reserved_ids);
            asset_list = asset_list.filter((_) => !resourceMatches(_, item));
        }
    }
    return nearby_resources;
}

/** Split the resources into groups of `member_count` that share a level. */
export function groupAvailability(
    resources: BookingAsset[],
    member_count: number,
): BookingAsset[][] {
    const groups: BookingAsset[][] = [];
    const asset_list = [...resources].sort((a, b) =>
        a.zone?.id?.localeCompare(b.zone?.id),
    );
    // Each pass pops at least one asset, so this ends when the list is empty.
    while (asset_list.length) {
        const group: BookingAsset[] = [];
        let asset = asset_list.pop();
        while (group.length < member_count) {
            if (
                group.length &&
                !group.find((_) => _.zone?.id === asset.zone?.id)
            ) {
                break;
            }
            group.push(asset);
            asset = asset_list.pop();
        }
        if (group.length < member_count) continue;
        groups.push(group);
    }
    return groups;
}

/**
 * Resources whose tags or homebase match the user's groups.
 * Priority: both > homebase > tags > all available.
 */
export function preferredAllocationPool(
    available: BookingAsset[],
    user_groups: string[],
): BookingAsset[] {
    if (!user_groups.length) return available;
    const tagMatch = (asset: BookingAsset) =>
        !!asset.tags?.some((tag) => user_groups.includes(tag));
    const homebaseMatch = (asset: BookingAsset) =>
        !!asset.homebase && user_groups.includes(asset.homebase);
    const tag_matched = available.filter(tagMatch);
    const homebase_matched = available.filter(homebaseMatch);
    const both_matched = tag_matched.filter(homebaseMatch);
    if (both_matched.length) return both_matched;
    if (homebase_matched.length) return homebase_matched;
    if (tag_matched.length) return tag_matched;
    return available;
}

/** Pick a random resource on the level with the most available resources. */
export function pickAutoAllocatedResource(
    available: BookingAsset[],
): BookingAsset {
    // Group available resources by zone (level) id
    const zone_map: Record<string, BookingAsset[]> = {};
    for (const asset of available) {
        const zone_id = asset.zone?.id || 'unknown';
        if (!zone_map[zone_id]) zone_map[zone_id] = [];
        zone_map[zone_id].push(asset);
    }
    // Find the level with the most free resources
    let best_zone_id = '';
    let best_count = 0;
    for (const zone_id in zone_map) {
        if (zone_map[zone_id].length > best_count) {
            best_count = zone_map[zone_id].length;
            best_zone_id = zone_id;
        }
    }
    const candidates = zone_map[best_zone_id];
    // Select a random resource from that level
    return candidates[Math.floor(Math.random() * candidates.length)];
}
