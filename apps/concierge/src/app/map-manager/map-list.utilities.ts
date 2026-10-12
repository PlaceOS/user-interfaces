import { Building, BuildingLevel } from '@placeos/common';

export interface MapListOptions {
    building?: string;
    search?: string;
}

/** One level with a map, as the Map Management list shows it. */
export interface MapRow {
    id: string;
    level: BuildingLevel;
    name: string;
    building: string;
    building_id: string;
    map_id: string;
    map_short: string;
}

export const DEFAULT_MAP_STUDIO_URL = '/map-studio/';

/** The levels that have a map, filtered by building and search text. */
export function mapRows(
    levels: readonly BuildingLevel[],
    buildings: readonly Building[],
    options: MapListOptions = {},
): MapRow[] {
    const search = (options.search || '').trim().toLowerCase();
    const rows: MapRow[] = [];
    for (const level of levels) {
        if (!level.map_id) continue;
        if (options.building && level.parent_id !== options.building) continue;
        const building = buildings.find((item) => item.id === level.parent_id);
        const name = level.display_name || level.name || level.id;
        const building_name = building?.display_name || building?.name || '';
        if (
            search &&
            !`${name} ${level.id} ${building_name} ${level.map_id}`
                .toLowerCase()
                .includes(search)
        ) {
            continue;
        }
        rows.push({
            id: level.id,
            level,
            name,
            building: building_name,
            building_id: level.parent_id,
            map_id: level.map_id,
            map_short: shortenMapUrl(level.map_id),
        });
    }
    return rows.sort(
        (a, b) =>
            a.building.localeCompare(b.building) ||
            a.name.localeCompare(b.name),
    );
}

/** The tail of a map URL that tells one map from another. */
export function shortenMapUrl(url: string, max = 40): string {
    const trimmed = (url || '').trim();
    if (!trimmed) return '';
    const without_query = trimmed.split(/[?#]/)[0];
    const parts = without_query.split('/').filter((part) => !!part);
    const tail = parts.length > 2 ? `…/${parts.slice(-2).join('/')}` : trimmed;
    return tail.length > max ? `…${tail.slice(-max)}` : tail;
}

/**
 * Where "Open in Map Studio" goes: the editor route when a floorplan id is
 * known, otherwise the studio's root.
 */
export function mapStudioUrl(
    base: string | null | undefined,
    floorplan_id?: string | null,
): string {
    let root =
        (base || DEFAULT_MAP_STUDIO_URL).trim() || DEFAULT_MAP_STUDIO_URL;
    if (!root.endsWith('/')) root = `${root}/`;
    return floorplan_id
        ? `${root}#/editor/${encodeURIComponent(floorplan_id)}`
        : root;
}

/** A file name for the uploaded map, from the level's name. */
export function mapFileName(
    level: Pick<BuildingLevel, 'display_name' | 'name' | 'id'>,
): string {
    const name = level.display_name || level.name || level.id || '';
    const slug =
        name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '') || 'level-map';
    return `${slug}.svg`;
}

export interface MapHistoryEntry {
    upload_id: string;
    map_id: string;
    at: number;
    by: string;
    summary: string;
}

export const MAP_HISTORY_LIMIT = 10;

/** The history list with a new entry first, capped at the limit. */
export function appendMapHistory(
    existing: unknown,
    entry: MapHistoryEntry,
    limit = MAP_HISTORY_LIMIT,
): MapHistoryEntry[] {
    const list = Array.isArray(existing)
        ? existing.filter(
              (item): item is MapHistoryEntry =>
                  !!item && typeof item === 'object' && 'map_id' in item,
          )
        : [];
    return [entry, ...list].slice(0, limit);
}
