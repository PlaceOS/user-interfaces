import { cleanObject, del, get, post, put } from '@placeos/ts-client';
import { toQueryString } from 'libs/common/src/lib/api';
import { catchError, map } from 'rxjs/operators';
import { Asset } from './asset.class';
import { Observable, of } from 'rxjs';
import { getUnixTime } from 'date-fns';

const ASSET_ENDPOINT = '/api/engine/v2/assets';

/**
 * Query the list of available assets
 * @param q Filter the list based of the give string
 */
export function queryAssets(q?: string): Observable<Asset[]> {
    const query = toQueryString({ q });
    return get(`${ASSET_ENDPOINT}${query ? query : ''}`).pipe(
        map((_: any) => _.map((d: any) => new Asset(d))),
        catchError((_) => of([]))
    );
}

/**
 * Delete asset with the given ID
 * @param id ID of asset to delete
 */
export function deleteAsset(id: string) {
    return del(`${ASSET_ENDPOINT}/${id}`);
}

/**
 * Add asset to database with given details
 * @param asset Asset details
 */
export function createAsset(asset: Asset): Observable<Asset> {
    const data = cleanObject(asset, [undefined, null, '']);
    data.purchase_date = getUnixTime(data.purchase_date);
    return post(`${ASSET_ENDPOINT}`, data).pipe(map((_) => new Asset(_)));
}

/**
 * Update asset in database to the new details
 * @param id ID of the asset to update
 * @param asset New details for asset
 */
export function updateAsset(id: string, asset: Asset) {
    return put(`${ASSET_ENDPOINT}/${id}`, asset).pipe(map((_) => new Asset(_)));
}

/**
 * Save the details for the given asset in the database
 * @param asset Asset details
 */
export function saveAsset(asset: Asset) {
    return asset.id ? updateAsset(asset.id, asset) : createAsset(asset);
}
