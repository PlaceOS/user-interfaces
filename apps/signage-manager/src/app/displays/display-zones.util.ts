import { PlaceZone } from '@placeos/ts-client';

/** Return each selected zone with its ancestors, ordered parent first. */
export async function displayZoneIds(
    selected_zones: PlaceZone[],
    known_zones: PlaceZone[],
    load_zone: (zone_id: string) => Promise<PlaceZone | null>,
) {
    const zones = new Map(known_zones.map((zone) => [zone.id, zone]));
    for (const zone of selected_zones) zones.set(zone.id, zone);

    const zone_ids: string[] = [];
    const added = new Set<string>();
    for (const selected_zone of selected_zones) {
        const path: string[] = [];
        const visited = new Set<string>();
        let zone: PlaceZone | null = selected_zone;
        while (zone?.id && !visited.has(zone.id)) {
            path.unshift(zone.id);
            visited.add(zone.id);
            if (!zone.parent_id) break;
            let parent = zones.get(zone.parent_id) || null;
            if (!parent) {
                parent = await load_zone(zone.parent_id).catch(() => null);
                if (parent) zones.set(parent.id, parent);
            }
            if (!parent) {
                path.unshift(zone.parent_id);
                break;
            }
            zone = parent;
        }
        for (const zone_id of path) {
            if (added.has(zone_id)) continue;
            added.add(zone_id);
            zone_ids.push(zone_id);
        }
    }
    return zone_ids;
}
