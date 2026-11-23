import { jsonRecord, jsonText } from '@placeos/common';
import { type Asset, assets as assets_v7 } from '@placeos/ts-client';
import { orThrow } from '@placeos/ts-client/compat';
import {
    queryTypeAssetsForZones,
    queryTypeAssetsInZone,
    resolveHiddenAssetTypeId,
    saveAsset,
} from './assets.fn';

const PARKING_CATEGORY_NAME = '_PARKING_';
const PARKING_TYPE_NAME = '_PARKING_SPACES_';

/** Resolve the hidden _PARKING_SPACES_ asset type in the _PARKING_ category */
export function resolveParkingTypeId(): Promise<string> {
    return resolveHiddenAssetTypeId(PARKING_CATEGORY_NAME, PARKING_TYPE_NAME);
}

/** Query parking spaces for a single zone */
export async function queryParkingSpaces(zone_id: string): Promise<Asset[]> {
    return queryTypeAssetsForZones(await resolveParkingTypeId(), [zone_id]);
}

/** Query parking spaces across multiple zones, flattening results */
export async function queryParkingSpacesForZones(
    zone_ids: string[],
): Promise<Asset[]> {
    if (!zone_ids?.length) return [];
    return queryTypeAssetsForZones(await resolveParkingTypeId(), zone_ids);
}

/**
 * Query the parking spaces within a building or region. Parking assets list
 * every zone they are in (org, region, building and level) in `zones`.
 */
export async function queryParkingSpacesInZone(
    zone_id: string,
): Promise<Asset[]> {
    // an empty `zones` filter is not a scope, e.g. the building is not loaded
    if (!zone_id) return [];
    return queryTypeAssetsInZone(await resolveParkingTypeId(), zone_id);
}

/** Save (create or update) a parking space asset */
export async function saveParkingSpace(space: Partial<Asset>): Promise<Asset> {
    const type_id = await resolveParkingTypeId();
    return saveAsset({ ...space, asset_type_id: type_id });
}

/** Delete a parking space asset by ID */
export function deleteParkingSpace(id: string) {
    return assets_v7.destroy({ id }).then(orThrow);
}

export interface ParkingUser {
    id: string;
    name: string;
    email: string;
    car_model: string;
    car_colour: string;
    plate_number: string;
    phone: string;
    notes: string;
    deny: boolean;
    special_needs: boolean;
}

const PARKING_USER_TYPE_NAME = '_PARKING_USERS_';

/** Resolve the hidden _PARKING_USERS_ asset type in the _PARKING_ category */
export function resolveParkingUserTypeId(): Promise<string> {
    return resolveHiddenAssetTypeId(
        PARKING_CATEGORY_NAME,
        PARKING_USER_TYPE_NAME,
    );
}

/** Convert a Asset to a ParkingUser */
export function toParkingUser(asset: Asset): ParkingUser {
    const data = jsonRecord(asset.other_data);
    return {
        id: asset.id,
        name: asset.identifier || '',
        email: jsonText(data.email),
        car_model: jsonText(data.car_model),
        car_colour: jsonText(data.car_colour),
        plate_number: jsonText(data.plate_number),
        phone: jsonText(data.phone),
        notes: asset.notes || '',
        deny: String(data.deny) === 'true',
        special_needs: String(data.special_needs) === 'true',
    };
}

/** Convert a ParkingUser to a partial Asset for saving */
export function fromParkingUser(
    user: Partial<ParkingUser>,
    zone_id: string,
): Partial<Asset> {
    return {
        ...(user.id ? { id: user.id } : {}),
        identifier: user.name || '',
        notes: user.notes || '',
        zone_id,
        other_data: {
            name: user.name || '',
            email: user.email || '',
            car_model: user.car_model || '',
            car_colour: user.car_colour || '',
            plate_number: user.plate_number || '',
            phone: user.phone || '',
            deny: user.deny ? 'true' : 'false',
            special_needs: user.special_needs ? 'true' : 'false',
        },
    };
}

/** Query parking users for a zone */
export async function queryParkingUsers(
    zone_id: string,
): Promise<ParkingUser[]> {
    const assets = await queryTypeAssetsForZones(
        await resolveParkingUserTypeId(),
        [zone_id],
    );
    return assets.map(toParkingUser);
}

/** Save (create or update) a parking user asset */
export async function saveParkingUser(
    user: Partial<ParkingUser>,
    zone_id: string,
): Promise<Asset> {
    const asset = fromParkingUser(user, zone_id);
    const type_id = await resolveParkingUserTypeId();
    return saveAsset({ ...asset, asset_type_id: type_id });
}

/** Delete a parking user asset by ID */
export function deleteParkingUser(id: string) {
    return assets_v7.destroy({ id }).then(orThrow);
}

export interface ParkingFleetVehicle {
    id: string;
    name: string;
    car_model: string;
    car_colour: string;
    plate_number: string;
    notes: string;
}

const PARKING_FLEET_TYPE_NAME = '_PARKING_FLEET_VEHICLES_';

/**
 * Resolve the hidden _PARKING_FLEET_VEHICLES_ asset type in the _PARKING_
 * category
 */
export function resolveParkingFleetTypeId(): Promise<string> {
    return resolveHiddenAssetTypeId(
        PARKING_CATEGORY_NAME,
        PARKING_FLEET_TYPE_NAME,
    );
}

/** Convert a Asset to a ParkingFleetVehicle */
export function toParkingFleetVehicle(asset: Asset): ParkingFleetVehicle {
    const data = jsonRecord(asset.other_data);
    return {
        id: asset.id,
        name: asset.identifier || '',
        car_model: jsonText(data.car_model),
        car_colour: jsonText(data.car_colour),
        plate_number: jsonText(data.plate_number),
        notes: asset.notes || '',
    };
}

/** Convert a ParkingFleetVehicle to a partial Asset for saving */
export function fromParkingFleetVehicle(
    vehicle: Partial<ParkingFleetVehicle>,
    zone_id: string,
): Partial<Asset> {
    return {
        ...(vehicle.id ? { id: vehicle.id } : {}),
        identifier: vehicle.name || '',
        notes: vehicle.notes || '',
        zone_id,
        other_data: {
            name: vehicle.name || '',
            car_model: vehicle.car_model || '',
            car_colour: vehicle.car_colour || '',
            plate_number: vehicle.plate_number || '',
        },
    };
}

/** Query fleet vehicles for a zone */
export async function queryParkingFleetVehicles(
    zone_id: string,
): Promise<ParkingFleetVehicle[]> {
    const assets = await queryTypeAssetsForZones(
        await resolveParkingFleetTypeId(),
        [zone_id],
    );
    return assets.map(toParkingFleetVehicle);
}

/** Save (create or update) a fleet vehicle asset */
export async function saveParkingFleetVehicle(
    vehicle: Partial<ParkingFleetVehicle>,
    zone_id: string,
): Promise<Asset> {
    const asset = fromParkingFleetVehicle(vehicle, zone_id);
    const type_id = await resolveParkingFleetTypeId();
    return saveAsset({ ...asset, asset_type_id: type_id });
}

/** Delete a fleet vehicle asset by ID */
export function deleteParkingFleetVehicle(id: string) {
    return assets_v7.destroy({ id }).then(orThrow);
}
