import { Desk, flatten } from '@placeos/common';
import {
    PlaceAsset,
    PlaceZone,
    queryAssetCategories,
    queryAssetTypes,
    removeAsset,
} from '@placeos/ts-client';
import {
    findOldestByName,
    queryAllAssetPages,
    saveAsset,
    saveAssetCategory,
    saveAssetType,
} from './assets.fn';

const DESK_CATEGORY_NAME = '_DESKS_';
const DESK_TYPE_NAME = '_DESKS_';

type DeskZone = Pick<PlaceZone, 'id'> &
    Partial<Pick<PlaceZone, 'name' | 'display_name' | 'parent_id' | 'map_id'>>;

let _desk_type_id: string | null = null;
let _desk_type_id_promise: Promise<string> | null = null;

async function bootstrap_desk_type(): Promise<string> {
    let category = findOldestByName(
        await queryAssetCategories({ hidden: true, limit: 500 }).then(
            (response) => response.data,
        ),
        DESK_CATEGORY_NAME,
    );
    if (!category) {
        category = await saveAssetCategory({
            name: DESK_CATEGORY_NAME,
            hidden: true,
        });
    }
    let type = findOldestByName(
        await queryAssetTypes({
            category_id: category.id,
            limit: 500,
        }).then((response) => response.data),
        DESK_TYPE_NAME,
    );
    if (!type) {
        type = await saveAssetType({
            name: DESK_TYPE_NAME,
            brand: 'PlaceOS',
            category_id: category.id,
        });
    }
    return type.id;
}

/** Resolve the hidden asset type used for desk resources. */
export function resolveDeskTypeId(): Promise<string> {
    if (_desk_type_id) return Promise.resolve(_desk_type_id);
    if (!_desk_type_id_promise) {
        _desk_type_id_promise = bootstrap_desk_type().then(
            (id) => {
                _desk_type_id = id;
                return id;
            },
            (error) => {
                // allow a later call to retry, e.g. after a network error
                _desk_type_id_promise = null;
                throw error;
            },
        );
    }
    return _desk_type_id_promise;
}

/** Query desk assets for one level. */
export async function queryDeskAssets(zone_id: string): Promise<PlaceAsset[]> {
    const type_id = await resolveDeskTypeId();
    const response = await queryAllAssetPages({ zone_id, type_id });
    return response.data;
}

/**
 * Query the desk assets within a building or region. Desk assets list every
 * zone they are in (org, region, building and level) in `zones`.
 */
export async function queryDeskAssetsInZone(
    zone_id: string,
): Promise<PlaceAsset[]> {
    // an empty `zones` filter is not a scope, e.g. the building is not loaded
    if (!zone_id) return [];
    const type_id = await resolveDeskTypeId();
    const response = await queryAllAssetPages({ zones: zone_id, type_id });
    return response.data;
}

/** Query desk assets for multiple levels. */
export async function queryDeskAssetsForZones(
    zone_ids: string[],
): Promise<PlaceAsset[]> {
    if (!zone_ids.length) return [];
    const type_id = await resolveDeskTypeId();
    const results = await Promise.all(
        zone_ids.map((zone_id) =>
            queryAllAssetPages({ zone_id, type_id }).then(
                (response) => response.data,
            ),
        ),
    );
    return flatten(results);
}

/**
 * Find the desk for an id from a link, check-in code, favourite or import.
 * Matches the desk asset id first, then the legacy metadata desk id: migrated
 * desk assets keep it as `client_ids.place_id` when it differs from the map id.
 */
export function findDeskByLegacyId<
    T extends { id: string; map_id?: string; place_id?: string },
>(desks: T[], id: string | undefined): T | undefined {
    if (!id) return undefined;
    return (
        desks.find((desk) => desk.id === id) ||
        desks.find((desk) => desk.place_id === id) ||
        desks.find((desk) => desk.map_id === id)
    );
}

/**
 * Fields with a dedicated place on the asset or desk. Other string fields are
 * kept in `client_ids`, everything else in `other_data`.
 */
const DESK_ASSET_KEYS = new Set([
    'id',
    'parent_id',
    'asset_type_id',
    'purchase_order_id',
    'zone_id',
    'identifier',
    'serial_number',
    'other_data',
    'barcode',
    'name',
    'client_ids',
    'place_id',
    'map_id',
    'bookable',
    'accessible',
    'zones',
    'place_groups',
    'assigned_to',
    'assigned_name',
    'features',
    'images',
    'notes',
    'security_system_groups',
    'created_at',
    'updated_at',
    'zone',
    'groups',
    'security',
    'qr_code',
    'staff_name',
    'toJSON',
]);

function isPlainValue(value: unknown) {
    if (value == null) return false;
    if (Array.isArray(value)) return value.every((i) => typeof i !== 'object');
    return typeof value !== 'object' && typeof value !== 'function';
}

/** String custom fields that are still kept in `other_data` */
const DESK_OTHER_DATA_KEYS = new Set(['homebase']);

/** Convert a desk asset to the desk model used by booking and map views. */
export function deskFromAsset(asset: PlaceAsset, zone?: DeskZone): Desk {
    const security = asset.security_system_groups?.[0] || '';
    return new Desk({
        // custom desk fields: tags and homebase live in `other_data`, third
        // party ids and the legacy desk id (`place_id`) in `client_ids`
        ...(asset.other_data || {}),
        ...(asset.client_ids || {}),
        ...asset,
        name: asset.identifier || asset.name,
        map_id: asset.map_id || asset.id,
        zone: new PlaceZone(zone || { id: asset.zone_id }),
        groups: asset.place_groups,
        security,
    });
}

/**
 * Merge the desk's custom fields into the existing `client_ids` (string
 * values) and `other_data` (everything else and `homebase`).
 */
function deskCustomData(desk: Desk) {
    const client_ids: Record<string, string> = {
        ...(desk['client_ids'] || {}),
    };
    const other_data: Record<string, unknown> = {
        ...(desk['other_data'] || {}),
    };
    for (const key of Object.keys(desk)) {
        if (DESK_ASSET_KEYS.has(key) || key.startsWith('_')) continue;
        const value = desk[key];
        if (value === '' || (Array.isArray(value) && !value.length)) {
            delete client_ids[key];
            delete other_data[key];
        } else if (
            typeof value === 'string' &&
            !DESK_OTHER_DATA_KEYS.has(key)
        ) {
            client_ids[key] = value;
            delete other_data[key];
        } else if (isPlainValue(value)) {
            other_data[key] = value;
            delete client_ids[key];
        }
    }
    return { client_ids, other_data };
}

/** Keep any additional security groups unless the primary group was changed */
function deskSecurityGroups(desk: Desk): string[] {
    if (!desk.security) return [];
    const groups: string[] = desk['security_system_groups'] || [];
    return groups[0] === desk.security ? groups : [desk.security];
}

/** Convert a desk model to the asset fields used by the assets API. */
export function deskToAsset(
    desk: Desk,
    zone_id: string,
    zones?: string[],
): Partial<PlaceAsset> {
    const is_existing_asset = !!desk['asset_type_id'];
    const { client_ids, other_data } = deskCustomData(desk);
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
        security_system_groups: deskSecurityGroups(desk),
        client_ids,
        other_data: other_data as Record<string, string>,
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
