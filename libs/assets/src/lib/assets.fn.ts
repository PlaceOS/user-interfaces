import { cleanObject, del, get, post, put } from '@placeos/ts-client';
import { toQueryString } from 'libs/common/src/lib/api';
import { catchError, map } from 'rxjs/operators';
import { Asset } from './asset.class';
import { Observable, of } from 'rxjs';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import {
    createBooking,
    queryBookings,
    removeBooking,
} from 'libs/bookings/src/lib/bookings.fn';
import { Booking } from 'libs/bookings/src/lib/booking.class';

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

export async function updateAssetRequestsForResource(
    parent_id: string,
    { date, duration, host }: { date: number; duration: number; host: string },
    new_assets: Asset[],
    old_assets: Asset[]
) {
    const bookings = await queryBookings({
        period_start: getUnixTime(startOfDay(date)),
        period_end: getUnixTime(endOfDay(date)),
        type: 'asset-request',
        email: host,
    }).toPromise();
    const filtered = bookings.filter(
        (item) =>
            item.extension_data.parent_id === parent_id &&
            old_assets.find((_) => _.id === item.asset_id)
    );
    await Promise.all(
        filtered.map((item) => removeBooking(item.id).toPromise())
    );
    await Promise.all(
        new_assets.map((item) =>
            createBooking(
                new Booking({
                    date,
                    duration,
                    user_email: host,
                    asset_id: item.id,
                    asset_name: item.name,
                    extension_data: { parent_id },
                })
            ).toPromise()
        )
    );
}
