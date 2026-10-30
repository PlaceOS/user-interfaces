import { PlaceAsset, removeAsset } from '@placeos/ts-client';
import {
    queryTypeAssetsForZones,
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
export async function queryParkingSpaces(
    zone_id: string,
): Promise<PlaceAsset[]> {
    return queryTypeAssetsForZones(await resolveParkingTypeId(), [zone_id]);
}

/** Query parking spaces across multiple zones, flattening results */
export async function queryParkingSpacesForZones(
    zone_ids: string[],
): Promise<PlaceAsset[]> {
    if (!zone_ids?.length) return [];
    return queryTypeAssetsForZones(await resolveParkingTypeId(), zone_ids);
}

/** Save (create or update) a parking space asset */
export async function saveParkingSpace(
    space: Partial<PlaceAsset>,
): Promise<PlaceAsset> {
    const type_id = await resolveParkingTypeId();
    return saveAsset({ ...space, asset_type_id: type_id });
}

/** Delete a parking space asset by ID */
export function deleteParkingSpace(id: string) {
    return removeAsset(id);
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

/** Convert a PlaceAsset to a ParkingUser */
export function toParkingUser(asset: PlaceAsset): ParkingUser {
    const data = asset.other_data || {};
    return {
        id: asset.id,
        name: asset.identifier || '',
        email: data.email || '',
        car_model: data.car_model || '',
        car_colour: data.car_colour || '',
        plate_number: data.plate_number || '',
        phone: data.phone || '',
        notes: asset.notes || '',
        deny: String(data.deny) === 'true',
        special_needs: String(data.special_needs) === 'true',
    };
}

/** Convert a ParkingUser to a partial PlaceAsset for saving */
export function fromParkingUser(
    user: Partial<ParkingUser>,
    zone_id: string,
): Partial<PlaceAsset> {
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
    } as Partial<PlaceAsset>;
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
): Promise<PlaceAsset> {
    const asset = fromParkingUser(user, zone_id);
    const type_id = await resolveParkingUserTypeId();
    return saveAsset({ ...asset, asset_type_id: type_id });
}

/** Delete a parking user asset by ID */
export function deleteParkingUser(id: string) {
    return removeAsset(id);
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

/** Convert a PlaceAsset to a ParkingFleetVehicle */
export function toParkingFleetVehicle(asset: PlaceAsset): ParkingFleetVehicle {
    const data = asset.other_data || {};
    return {
        id: asset.id,
        name: asset.identifier || '',
        car_model: data.car_model || '',
        car_colour: data.car_colour || '',
        plate_number: data.plate_number || '',
        notes: asset.notes || '',
    };
}

/** Convert a ParkingFleetVehicle to a partial PlaceAsset for saving */
export function fromParkingFleetVehicle(
    vehicle: Partial<ParkingFleetVehicle>,
    zone_id: string,
): Partial<PlaceAsset> {
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
    } as Partial<PlaceAsset>;
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
): Promise<PlaceAsset> {
    const asset = fromParkingFleetVehicle(vehicle, zone_id);
    const type_id = await resolveParkingFleetTypeId();
    return saveAsset({ ...asset, asset_type_id: type_id });
}

/** Delete a fleet vehicle asset by ID */
export function deleteParkingFleetVehicle(id: string) {
    return removeAsset(id);
}
