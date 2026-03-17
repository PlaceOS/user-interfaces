import { flatten } from '@placeos/common';
import {
    PlaceAsset,
    queryAssetCategories,
    queryAssets,
    queryAssetTypes,
    removeAsset,
} from '@placeos/ts-client';
import { defer, forkJoin, from, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { saveAsset, saveAssetCategory, saveAssetType } from './assets.fn';

const PARKING_CATEGORY_NAME = '_PARKING_SPACES_';
const PARKING_TYPE_NAME = '_PARKING_SPACES_';

let _parking_type_id: string | null = null;
let _parking_type_id_promise: Promise<string> | null = null;

/**
 * Ensures the _PARKING_SPACES_ category (hidden) and _PARKING_SPACES_ type exist,
 * caches the type ID. Returns synchronously via of() once resolved.
 */
export function resolveParkingTypeId(): Observable<string> {
    if (_parking_type_id) return of(_parking_type_id);
    if (!_parking_type_id_promise) {
        _parking_type_id_promise = _bootstrapParkingType().then((id) => {
            _parking_type_id = id;
            return id;
        });
    }
    return defer(() => from(_parking_type_id_promise));
}

async function _bootstrapParkingType(): Promise<string> {
    const categories = await queryAssetCategories({ hidden: true })
        .pipe(map((_) => _.data))
        .toPromise()
        .catch(() => []);
    let category = categories.find((_) => _.name === PARKING_CATEGORY_NAME);
    if (!category) {
        category = await saveAssetCategory({
            name: PARKING_CATEGORY_NAME,
            hidden: true,
        } as any).toPromise();
    }
    const types = await queryAssetTypes({ category_id: category.id })
        .pipe(map((_) => _.data))
        .toPromise()
        .catch(() => []);
    let type = types.find((_) => _.name === PARKING_TYPE_NAME);
    if (!type) {
        type = await saveAssetType({
            name: PARKING_TYPE_NAME,
            brand: 'PlaceOS',
            category_id: category.id,
        } as any).toPromise();
    }
    return type.id;
}

/** Query parking spaces for a single zone */
export function queryParkingSpaces(zone_id: string): Observable<PlaceAsset[]> {
    return resolveParkingTypeId().pipe(
        switchMap((type_id) => queryAssets({ zone_id, type_id, limit: 500 })),
        map((_) => _.data),
    );
}

/** Query parking spaces across multiple zones, flattening results */
export function queryParkingSpacesForZones(
    zone_ids: string[],
): Observable<PlaceAsset[]> {
    if (!zone_ids?.length) return of([]);
    return forkJoin(zone_ids.map((id) => queryParkingSpaces(id))).pipe(
        map((results) => flatten<PlaceAsset>(results)),
    );
}

/** Save (create or update) a parking space asset */
export function saveParkingSpace(
    space: Partial<PlaceAsset>,
): Observable<PlaceAsset> {
    return resolveParkingTypeId().pipe(
        switchMap((type_id) => saveAsset({ ...space, asset_type_id: type_id })),
    );
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

const PARKING_USER_CATEGORY_NAME = '_PARKING_USERS_';
const PARKING_USER_TYPE_NAME = '_PARKING_USERS_';

let _parking_user_type_id: string | null = null;
let _parking_user_type_id_promise: Promise<string> | null = null;

/**
 * Ensures the _PARKING_USERS_ category (hidden) and _PARKING_USERS_ type exist,
 * caches the type ID. Returns synchronously via of() once resolved.
 */
export function resolveParkingUserTypeId(): Observable<string> {
    if (_parking_user_type_id) return of(_parking_user_type_id);
    if (!_parking_user_type_id_promise) {
        _parking_user_type_id_promise = _bootstrapParkingUserType().then(
            (id) => {
                _parking_user_type_id = id;
                return id;
            },
        );
    }
    return defer(() => from(_parking_user_type_id_promise));
}

async function _bootstrapParkingUserType(): Promise<string> {
    const categories = await queryAssetCategories({ hidden: true })
        .pipe(map((_) => _.data))
        .toPromise()
        .catch(() => []);
    let category = categories.find(
        (_) => _.name === PARKING_USER_CATEGORY_NAME,
    );
    if (!category) {
        category = await saveAssetCategory({
            name: PARKING_USER_CATEGORY_NAME,
            hidden: true,
        } as any).toPromise();
    }
    const types = await queryAssetTypes({ category_id: category.id })
        .pipe(map((_) => _.data))
        .toPromise()
        .catch(() => []);
    let type = types.find((_) => _.name === PARKING_USER_TYPE_NAME);
    if (!type) {
        type = await saveAssetType({
            name: PARKING_USER_TYPE_NAME,
            brand: 'PlaceOS',
            category_id: category.id,
        } as any).toPromise();
    }
    return type.id;
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
export function queryParkingUsers(zone_id: string): Observable<ParkingUser[]> {
    return resolveParkingUserTypeId().pipe(
        switchMap((type_id) => queryAssets({ zone_id, type_id, limit: 500 })),
        map((assets) => assets.data.map(toParkingUser)),
    );
}

/** Save (create or update) a parking user asset */
export function saveParkingUser(
    user: Partial<ParkingUser>,
    zone_id: string,
): Observable<PlaceAsset> {
    const asset = fromParkingUser(user, zone_id);
    return resolveParkingUserTypeId().pipe(
        switchMap((type_id) => saveAsset({ ...asset, asset_type_id: type_id })),
    );
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

const PARKING_FLEET_CATEGORY_NAME = '_PARKING_FLEET_VEHICLES_';
const PARKING_FLEET_TYPE_NAME = '_PARKING_FLEET_VEHICLES_';

let _parking_fleet_type_id: string | null = null;
let _parking_fleet_type_id_promise: Promise<string> | null = null;

/**
 * Ensures the _PARKING_FLEET_VEHICLES_ category (hidden) and
 * _PARKING_FLEET_VEHICLES_ type exist, caches the type ID.
 */
export function resolveParkingFleetTypeId(): Observable<string> {
    if (_parking_fleet_type_id) return of(_parking_fleet_type_id);
    if (!_parking_fleet_type_id_promise) {
        _parking_fleet_type_id_promise = _bootstrapParkingFleetType().then(
            (id) => {
                _parking_fleet_type_id = id;
                return id;
            },
        );
    }
    return defer(() => from(_parking_fleet_type_id_promise));
}

async function _bootstrapParkingFleetType(): Promise<string> {
    const categories = await queryAssetCategories({ hidden: true })
        .pipe(map((_) => _.data))
        .toPromise()
        .catch(() => []);
    let category = categories.find(
        (_) => _.name === PARKING_FLEET_CATEGORY_NAME,
    );
    if (!category) {
        category = await saveAssetCategory({
            name: PARKING_FLEET_CATEGORY_NAME,
            hidden: true,
        } as any).toPromise();
    }
    const types = await queryAssetTypes({ category_id: category.id })
        .pipe(map((_) => _.data))
        .toPromise()
        .catch(() => []);
    let type = types.find((_) => _.name === PARKING_FLEET_TYPE_NAME);
    if (!type) {
        type = await saveAssetType({
            name: PARKING_FLEET_TYPE_NAME,
            brand: 'PlaceOS',
            category_id: category.id,
        } as any).toPromise();
    }
    return type.id;
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
export function queryParkingFleetVehicles(
    zone_id: string,
): Observable<ParkingFleetVehicle[]> {
    return resolveParkingFleetTypeId().pipe(
        switchMap((type_id) => queryAssets({ zone_id, type_id, limit: 500 })),
        map((assets) => assets.data.map(toParkingFleetVehicle)),
    );
}

/** Save (create or update) a fleet vehicle asset */
export function saveParkingFleetVehicle(
    vehicle: Partial<ParkingFleetVehicle>,
    zone_id: string,
): Observable<PlaceAsset> {
    const asset = fromParkingFleetVehicle(vehicle, zone_id);
    return resolveParkingFleetTypeId().pipe(
        switchMap((type_id) => saveAsset({ ...asset, asset_type_id: type_id })),
    );
}

/** Delete a fleet vehicle asset by ID */
export function deleteParkingFleetVehicle(id: string) {
    return removeAsset(id);
}
