import { PlaceGroup, PlaceZone, QueryResponse } from '@placeos/ts-client';

/** Zone tags that name a slot in a status topic, below the org */
export const TOPIC_SLOTS = ['region', 'building', 'level', 'area'] as const;
export type TopicSlot = (typeof TOPIC_SLOTS)[number];
/** Zones a topic filter is narrowed to. Empty listens org wide. */
export type ZoneFilter = Partial<Record<TopicSlot, string>>;

/** Permission bits of a user in a support group */
export enum SupportGroupPermission {
    Read = 1 << 0,
    Manage = 1 << 6,
}

/**
 * What a support group can see. Its zones are the ones it is granted, their
 * descendants, and none under a zone it is denied.
 */
export interface GroupScope {
    /** Zones the group can see */
    reachable: Set<string>;
    /** Zones the group is denied. Anything in one of them is hidden. */
    denied: Set<string>;
    /** Zones the group is granted, the roots of what it can see */
    anchors: PlaceZone[];
    /** Every zone the group can see, and the zones above them */
    zones: Map<string, PlaceZone>;
}

/** The topic slot a zone fills, `org` for the org, or none */
export function zoneSlot(zone?: PlaceZone): TopicSlot | 'org' | null {
    if (!zone) return null;
    if (zone.tags?.includes('org')) return 'org';
    return TOPIC_SLOTS.find((slot) => zone.tags?.includes(slot)) || null;
}

/** IDs of the zones above a zone, nearest first */
export function zoneAncestors(id: string, zones: Map<string, PlaceZone>) {
    const ancestors: string[] = [];
    const seen = new Set([id]);
    let parent_id = zones.get(id)?.parent_id;
    while (parent_id && !seen.has(parent_id)) {
        ancestors.push(parent_id);
        seen.add(parent_id);
        parent_id = zones.get(parent_id)?.parent_id;
    }
    return ancestors;
}

/**
 * Whether something in all of these zones is in the group: in a zone it can
 * see and in none it is denied. A system lists every zone above it, and a
 * status topic every zone in its hierarchy, so a denied zone above one the
 * group was granted still hides it.
 */
export function inGroupScope(
    zone_ids: readonly string[],
    scope: GroupScope | null,
) {
    if (!scope) return true;
    let reachable = false;
    for (const id of zone_ids) {
        if (scope.denied.has(id)) return false;
        if (scope.reachable.has(id)) reachable = true;
    }
    return reachable;
}

/** The org and hierarchy zones of a status topic */
export function topicZoneIds(topic: string) {
    const [, org, , ...rest] = topic.split('/');
    return [org, ...rest.slice(0, TOPIC_SLOTS.length)].filter(
        (id) => id && id !== '_' && id !== '+',
    );
}

function slotFilter(zone: PlaceZone): ZoneFilter | null {
    const slot = zoneSlot(zone);
    if (slot === 'org') return {};
    return slot ? { [slot]: zone.id } : null;
}

/**
 * The zones to listen on for a group, within the region or building the user
 * picked. A picked zone the group cannot see, or no pick, listens on every
 * zone the group was granted. A picked zone the group can see is listened on as a whole. One
 * above what it can see is narrowed to the granted zones under it. Zones under
 * another listened zone are left out, as are zones with no topic slot.
 * @param filter_id Region or building picked, empty for all of them
 */
export function scopeZoneFilters(
    scope: GroupScope,
    filter_id = '',
): ZoneFilter[] {
    const picked = filter_id ? scope.zones.get(filter_id) : undefined;
    let roots: PlaceZone[];
    if (picked && scope.reachable.has(picked.id)) {
        roots = [picked];
    } else {
        roots = scope.anchors.filter(
            (zone) =>
                scope.reachable.has(zone.id) &&
                (!picked ||
                    zoneAncestors(zone.id, scope.zones).includes(picked.id)),
        );
    }
    const root_ids = new Set(roots.map((zone) => zone.id));
    return roots
        .filter(
            (zone) =>
                !zoneAncestors(zone.id, scope.zones).some((id) =>
                    root_ids.has(id),
                ),
        )
        .map(slotFilter)
        .filter((filter): filter is ZoneFilter => !!filter);
}

/** Zones of a group with a tag, sorted by name */
export function scopeZonesTagged(scope: GroupScope, tag: TopicSlot) {
    return [...scope.zones.values()]
        .filter((zone) => zone.tags?.includes(tag))
        .sort((a, b) =>
            (a.display_name || a.name).localeCompare(b.display_name || b.name),
        );
}

/**
 * Build a group's scope from the zones it can see and the zones it was
 * granted or denied. A zone it was given that it cannot see is denied.
 * @param reachable Zones the group can see, descendants included
 * @param assigned Zones the group was granted or denied
 * @param ancestors Zones above the ones it can see
 */
export function groupScope(
    reachable: PlaceZone[],
    assigned: PlaceZone[],
    ancestors: PlaceZone[] = [],
): GroupScope {
    const reachable_ids = new Set(reachable.map((zone) => zone.id));
    const zones = new Map<string, PlaceZone>();
    for (const zone of [...ancestors, ...reachable]) zones.set(zone.id, zone);
    return {
        reachable: reachable_ids,
        denied: new Set(
            assigned
                .filter((zone) => !reachable_ids.has(zone.id))
                .map((zone) => zone.id),
        ),
        anchors: assigned.filter((zone) => reachable_ids.has(zone.id)),
        zones,
    };
}

/** Group and its ancestors, root first. Stops on a repeated group so a broken
 * parent chain can't loop forever. */
export function groupHierarchy(
    selected: PlaceGroup | undefined,
    all_groups: PlaceGroup[],
) {
    if (!selected) return [];
    const groups = new Map(all_groups.map((item) => [item.id, item]));
    const hierarchy: PlaceGroup[] = [];
    const seen = new Set<string>();
    let group = selected;
    while (group?.id && !seen.has(group.id)) {
        hierarchy.unshift(group);
        seen.add(group.id);
        group = group.parent_id ? groups.get(group.parent_id) : undefined;
    }
    return hierarchy;
}

/**
 * Fetch every page of a query.
 * @param max_pages Most pages to fetch, so a bad response cannot loop forever
 */
export async function queryAll<T>(query: QueryResponse<T>, max_pages = 50) {
    const items: T[] = [];
    let page = await query;
    for (let count = 1; ; count++) {
        const data = page.data || [];
        items.push(...data);
        const next = data.length && count < max_pages ? page.next?.() : null;
        if (!next) break;
        page = await next;
    }
    return items;
}
