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

const PARKING_CATEGORY_NAME = '_PARKING_';
const PARKING_TYPE_NAME = '_PARKING_SPACES_';

let _parking_type_id: string | null = null;
let _parking_type_id_promise: Promise<string> | null = null;
let _hidden_categories_promise: Promise<any[]> | null = null;
const _types_for_category_promises = new Map<string, Promise<any[]>>();

function normalise_name(name: string = '') {
    return name.trim().toLowerCase();
}

async function query_hidden_categories() {
    if (!_hidden_categories_promise) {
        _hidden_categories_promise = queryAssetCategories({
            hidden: true,
            limit: 500,
        })
            .then((_) => _.data)
            .catch(() => []);
    }
    return _hidden_categories_promise;
}

async function query_types_for_category(category_id: string) {
    if (!_types_for_category_promises.has(category_id)) {
        _types_for_category_promises.set(
            category_id,
            queryAssetTypes({ category_id, limit: 500 })
                .then((_) => _.data)
                .catch(() => []),
        );
    }
    return _types_for_category_promises.get(category_id);
}

function reset_hidden_categories_cache() {
    _hidden_categories_promise = null;
}

function reset_types_cache(category_ids: string[]) {
    category_ids.forEach((category_id) =>
        _types_for_category_promises.delete(category_id),
    );
}

async function query_types_for_categories(category_ids: string[]) {
    const list = await Promise.all(
        category_ids.map((category_id) =>
            query_types_for_category(category_id),
        ),
    );
    return list.flat();
}

async function ensure_hidden_category(name: string) {
    const match_name = normalise_name(name);
    let category = (await query_hidden_categories()).find(
        (_) => normalise_name(_.name) === match_name,
    );
    if (category) return category;
    reset_hidden_categories_cache();
    category = (await query_hidden_categories()).find(
        (_) => normalise_name(_.name) === match_name,
    );
    if (category) return category;
    try {
        const category = await saveAssetCategory({
            name,
            hidden: true,
        } as any).toPromise();
        reset_hidden_categories_cache();
        return category;
    } catch (error) {
        reset_hidden_categories_cache();
        category = (await query_hidden_categories()).find(
            (_) => normalise_name(_.name) === match_name,
        );
        if (category) return category;
        throw error;
    }
}

async function move_type_to_category(
    type: any,
    category_id: string,
    name: string,
) {
    if (
        type.category_id === category_id &&
        normalise_name(type.name) === normalise_name(name)
    ) {
        return type;
    }
    try {
        const updated_type = await saveAssetType({
            id: type.id,
            name,
            brand: type.brand || 'PlaceOS',
            category_id,
        } as any).toPromise();
        reset_types_cache([category_id]);
        return updated_type;
    } catch (error) {
        reset_types_cache([category_id]);
        const types = await query_types_for_category(category_id);
        const existing_type = types.find(
            (_) => normalise_name(_.name) === normalise_name(name),
        );
        if (existing_type) return existing_type;
        throw error;
    }
}

async function ensure_type(
    category_id: string,
    name: string,
    legacy_category_ids: string[] = [],
) {
    const match_name = normalise_name(name);
    let type = (
        await query_types_for_categories([
            category_id,
            ...legacy_category_ids.filter((_) => _ !== category_id),
        ])
    ).find((_) => normalise_name(_.name) === match_name);
    if (type) return move_type_to_category(type, category_id, name);
    try {
        const type = await saveAssetType({
            name,
            brand: 'PlaceOS',
            category_id,
        } as any).toPromise();
        reset_types_cache([category_id]);
        return type;
    } catch (error) {
        reset_types_cache([category_id, ...legacy_category_ids]);
        type = (
            await query_types_for_categories([
                category_id,
                ...legacy_category_ids.filter((_) => _ !== category_id),
            ])
        ).find((_) => normalise_name(_.name) === match_name);
        if (type) return move_type_to_category(type, category_id, name);
        throw error;
    }
}

async function bootstrap_asset_type(type_name: string) {
    const category = await ensure_hidden_category(PARKING_CATEGORY_NAME);
    const type = await ensure_type(category.id, type_name);
    return type.id;
}

/**
 * Ensures the shared _PARKING_ category (hidden) and _PARKING_SPACES_ type
 * exist, migrating legacy parking categories when needed.
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
    return bootstrap_asset_type(PARKING_TYPE_NAME);
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
    return resolveParkingTypeId().pipe(
        switchMap((type_id) =>
            forkJoin(
                zone_ids.map((zone_id) =>
                    queryAssets({ zone_id, type_id, limit: 500 }).then(
                        (_) => _.data,
                    ),
                ),
            ),
        ),
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
    return from(removeAsset(id));
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

let _parking_user_type_id: string | null = null;
let _parking_user_type_id_promise: Promise<string> | null = null;

/**
 * Ensures the shared _PARKING_ category (hidden) and _PARKING_USERS_ type
 * exist, migrating legacy parking categories when needed.
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
    return bootstrap_asset_type(PARKING_USER_TYPE_NAME);
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
    return from(removeAsset(id));
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

let _parking_fleet_type_id: string | null = null;
let _parking_fleet_type_id_promise: Promise<string> | null = null;

/**
 * Ensures the shared _PARKING_ category (hidden) and
 * _PARKING_FLEET_VEHICLES_ type exist, migrating legacy parking categories
 * when needed.
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
    return bootstrap_asset_type(PARKING_FLEET_TYPE_NAME);
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
    return from(removeAsset(id));
}
