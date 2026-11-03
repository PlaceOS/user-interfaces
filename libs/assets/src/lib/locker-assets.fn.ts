import { PlaceAsset, removeAsset } from '@placeos/ts-client';
import {
    queryTypeAssetsForZones,
    queryTypeAssetsInZone,
    resolveHiddenAssetTypeId,
    saveAsset,
} from './assets.fn';

const LOCKER_CATEGORY_NAME = '_LOCKERS_';
const LOCKER_BANK_TYPE_NAME = '_LOCKER_BANKS_';
const LOCKER_TYPE_NAME = '_LOCKERS_';

export function resolveLockerBankTypeId(): Promise<string> {
    return resolveHiddenAssetTypeId(
        LOCKER_CATEGORY_NAME,
        LOCKER_BANK_TYPE_NAME,
    );
}

export function resolveLockerTypeId(): Promise<string> {
    return resolveHiddenAssetTypeId(LOCKER_CATEGORY_NAME, LOCKER_TYPE_NAME);
}

export async function queryLockerBankAssetsForZones(
    zone_ids: string[],
): Promise<PlaceAsset[]> {
    if (!zone_ids?.length) return [];
    return queryTypeAssetsForZones(await resolveLockerBankTypeId(), zone_ids);
}

/** Query the locker banks within a building or region, by their `zones` */
export async function queryLockerBankAssetsInZone(
    zone_id: string,
): Promise<PlaceAsset[]> {
    // an empty `zones` filter is not a scope, e.g. the building is not loaded
    if (!zone_id) return [];
    return queryTypeAssetsInZone(await resolveLockerBankTypeId(), zone_id);
}

export async function saveLockerBankAsset(
    bank: Partial<PlaceAsset>,
): Promise<PlaceAsset> {
    const type_id = await resolveLockerBankTypeId();
    return saveAsset({ ...bank, asset_type_id: type_id });
}

export function deleteLockerBankAsset(id: string) {
    return removeAsset(id);
}

export async function queryLockerAssets(
    zone_id: string,
): Promise<PlaceAsset[]> {
    return queryTypeAssetsForZones(await resolveLockerTypeId(), [zone_id]);
}

export async function queryLockerAssetsForZones(
    zone_ids: string[],
): Promise<PlaceAsset[]> {
    if (!zone_ids?.length) return [];
    return queryTypeAssetsForZones(await resolveLockerTypeId(), zone_ids);
}

/** Query the lockers within a building or region, by their `zones` */
export async function queryLockerAssetsInZone(
    zone_id: string,
): Promise<PlaceAsset[]> {
    // an empty `zones` filter is not a scope, e.g. the building is not loaded
    if (!zone_id) return [];
    return queryTypeAssetsInZone(await resolveLockerTypeId(), zone_id);
}

export async function saveLockerAsset(
    locker: Partial<PlaceAsset>,
): Promise<PlaceAsset> {
    const type_id = await resolveLockerTypeId();
    return saveAsset({ ...locker, asset_type_id: type_id });
}

export function deleteLockerAsset(id: string) {
    return removeAsset(id);
}
