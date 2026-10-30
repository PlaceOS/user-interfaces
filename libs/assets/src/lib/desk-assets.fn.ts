import { Desk } from '@placeos/common';
import { PlaceAsset, PlaceZone, removeAsset } from '@placeos/ts-client';
import {
    queryTypeAssetsForZones,
    resolveHiddenAssetTypeId,
    saveAsset,
} from './assets.fn';

const DESK_CATEGORY_NAME = '_DESKS_';
const DESK_TYPE_NAME = '_DESKS_';

type DeskZone = Pick<PlaceZone, 'id'> &
    Partial<Pick<PlaceZone, 'name' | 'display_name' | 'parent_id' | 'map_id'>>;

/** Resolve the hidden asset type used for desk resources. */
export function resolveDeskTypeId(): Promise<string> {
    return resolveHiddenAssetTypeId(DESK_CATEGORY_NAME, DESK_TYPE_NAME);
}

/** Query desk assets for one level. */
export async function queryDeskAssets(zone_id: string): Promise<PlaceAsset[]> {
    return queryDeskAssetsForZones([zone_id]);
}

/** Query desk assets for multiple levels. */
export async function queryDeskAssetsForZones(
    zone_ids: string[],
): Promise<PlaceAsset[]> {
    if (!zone_ids.length) return [];
    return queryTypeAssetsForZones(await resolveDeskTypeId(), zone_ids);
}

/** Convert a desk asset to the desk model used by booking and map views. */
export function deskFromAsset(asset: PlaceAsset, zone?: DeskZone): Desk {
    const security = asset.security_system_groups?.[0] || '';
    return new Desk({
        ...asset,
        name: asset.identifier || asset.name,
        map_id: asset.map_id || asset.id,
        zone: new PlaceZone(zone || { id: asset.zone_id }),
        groups: asset.place_groups,
        security,
    });
}

/** Convert a desk model to the asset fields used by the assets API. */
export function deskToAsset(
    desk: Desk,
    zone_id: string,
    zones?: string[],
): Partial<PlaceAsset> {
    const is_existing_asset = !!desk['asset_type_id'];
    return {
        ...(is_existing_asset ? { id: desk.id } : {}),
        zone_id,
        ...((zones || desk['zones'])?.length
            ? { zones: zones || desk['zones'] }
            : {}),
        identifier: desk.name,
        map_id: desk.map_id || desk.id,
        bookable: desk.bookable,
        assigned_to: desk.assigned_to,
        assigned_name: desk['assigned_name'] || '',
        place_groups: desk.groups,
        features: desk.features,
        images: desk.images,
        notes: desk['notes'] || '',
        security_system_groups: desk.security ? [desk.security] : [],
    };
}

/** Save a desk asset. */
export async function saveDeskAsset(
    desk: Desk,
    zone_id: string,
    zones?: string[],
): Promise<PlaceAsset> {
    const asset_type_id = await resolveDeskTypeId();
    return saveAsset({
        ...deskToAsset(desk, zone_id, zones),
        asset_type_id,
    });
}

/** Delete a desk asset. */
export function deleteDeskAsset(id: string) {
    return removeAsset(id);
}
