import { PlaceAsset } from '@placeos/ts-client';
import { defer, forkJoin, from, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
    deleteAsset,
    queryAssetCategories,
    queryAssetGroups,
    queryAssets,
    saveAsset,
    saveAssetCategory,
    saveAssetGroup,
} from './assets.fn';
import { flatten } from '@placeos/common';

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
        .toPromise()
        .catch(() => []);
    let category = categories.find((_) => _.name === PARKING_CATEGORY_NAME);
    if (!category) {
        category = await saveAssetCategory({
            name: PARKING_CATEGORY_NAME,
            hidden: true,
        } as any).toPromise();
    }
    const types = await queryAssetGroups({ category_id: category.id })
        .toPromise()
        .catch(() => []);
    let type = types.find((_) => _.name === PARKING_TYPE_NAME);
    if (!type) {
        type = await saveAssetGroup({
            name: PARKING_TYPE_NAME,
            category_id: category.id,
        } as any).toPromise();
    }
    return type.id;
}

/** Query parking spaces for a single zone */
export function queryParkingSpaces(zone_id: string): Observable<PlaceAsset[]> {
    return resolveParkingTypeId().pipe(
        switchMap((type_id) =>
            queryAssets({ zone_id, type_id, limit: 500 }),
        ),
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
        switchMap((type_id) =>
            saveAsset({ ...space, asset_type_id: type_id }),
        ),
    );
}

/** Delete a parking space asset by ID */
export function deleteParkingSpace(id: string) {
    return deleteAsset(id);
}
