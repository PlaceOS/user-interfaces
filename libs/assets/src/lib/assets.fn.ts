import { cleanObject, del, get, post, put } from '@placeos/ts-client';
import { toQueryString } from 'libs/common/src/lib/api';
import { map, switchMap } from 'rxjs/operators';
import {
    Asset,
    AssetCategory,
    AssetGroup,
    AssetPurchaseOrder,
} from './asset.class';
import { combineLatest, forkJoin, of } from 'rxjs';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import {
    BookingsQueryParams,
    createBooking,
    queryBookings,
    removeBooking,
} from 'libs/bookings/src/lib/bookings.fn';
import { Booking } from 'libs/bookings/src/lib/booking.class';
import { flatten } from '@placeos/common';
import { AssetRequest } from './asset-request.class';

const BASE_ENDPOINT = '/api/engine/v2';

////////////////////////////////
////    Asset Categories    ////
////////////////////////////////

export function queryAssetCategories(query: any = {}) {
    const q = toQueryString(query);
    return get(`${BASE_ENDPOINT}/asset_categories${q ? '?' + q : ''}`).pipe(
        map((_) => _ as AssetCategory[])
    );
}

export function addAssetCategory(category: AssetCategory) {
    return post(
        `${BASE_ENDPOINT}/asset_categories`,
        cleanObject(category, [undefined, null, ''])
    ).pipe(map((_) => _ as AssetCategory));
}

export function updateAssetCategory(
    id: string,
    category: Partial<AssetCategory>
) {
    return put(
        `${BASE_ENDPOINT}/asset_categories/${id}`,
        cleanObject(category, [undefined, null, ''])
    ).pipe(map((_) => _ as AssetCategory));
}

export function saveAssetCategory(category: AssetCategory) {
    return category.id
        ? updateAssetCategory(category.id, category)
        : addAssetCategory(category);
}

export function showAssetCategory(id: string) {
    return get(`${BASE_ENDPOINT}/asset_categories/${id}`).pipe(
        map((_) => _ as AssetCategory)
    );
}

export function deleteAssetCategory(id: string) {
    return del(`${BASE_ENDPOINT}/asset_categories/${id}`);
}

//////////////////////////////
////     Asset Groups     ////
//////////////////////////////

export function queryAssetGroups(query: any = {}) {
    const q = toQueryString(query);
    return get(`${BASE_ENDPOINT}/asset_types${q ? '?' + q : ''}`).pipe(
        map((_) => _ as AssetGroup[])
    );
}

export function queryAssetGroupsExtended(query: any = {}) {
    const q = toQueryString(query);
    return get(`${BASE_ENDPOINT}/asset_types${q ? '?' + q : ''}`).pipe(
        map((_) => _ as AssetGroup[]),
        switchMap((list) =>
            forkJoin(
                list.map((group) =>
                    queryAssets({
                        limit: 200,
                        ...query,
                        type_id: group.id,
                    }).pipe(
                        map((assets) => ({ ...group, assets } as AssetGroup))
                    )
                )
            )
        )
    );
}

export function addAssetGroup(product: AssetGroup) {
    return post(
        `${BASE_ENDPOINT}/asset_types`,
        cleanObject(product, [undefined, null, ''])
    ).pipe(map((_) => _ as AssetGroup));
}

export function updateAssetGroup(id: string, product: Partial<AssetGroup>) {
    return put(
        `${BASE_ENDPOINT}/asset_types/${id}`,
        cleanObject(product, [undefined, null, ''])
    ).pipe(map((_) => _ as AssetGroup));
}

export function saveAssetGroup(product: AssetGroup) {
    return product.id
        ? updateAssetGroup(product.id, product)
        : addAssetGroup(product);
}

export function showAssetGroup(id: string) {
    return get(`${BASE_ENDPOINT}/asset_types/${id}`).pipe(
        map((_) => _ as AssetGroup)
    );
}

export function deleteAssetGroup(id: string) {
    return del(`${BASE_ENDPOINT}/asset_types/${id}`);
}

////////////////////////////////
////          Assets        ////
////////////////////////////////

export function queryAssets(query: any = {}) {
    const q = toQueryString(query);
    return get(`${BASE_ENDPOINT}/assets${q ? '?' + q : ''}`).pipe(
        map((_) => _ as Asset[])
    );
}

export function addAsset(asset: Asset) {
    return post(
        `${BASE_ENDPOINT}/assets`,
        cleanObject(asset, [undefined, null, ''])
    ).pipe(map((_) => _ as Asset));
}

export function updateAsset(id: string, asset: Partial<Asset>) {
    return put(
        `${BASE_ENDPOINT}/assets/${id}`,
        cleanObject(asset, [undefined, null, ''])
    ).pipe(map((_) => _ as Asset));
}

export function saveAsset(asset: Asset) {
    return asset.id
        ? updateAsset(asset.id, {
              ...asset,
              asset_type_id: asset.type_id,
          } as any)
        : addAsset({ ...asset, asset_type_id: asset.type_id } as any);
}

export function showAsset(id: string) {
    return get(`${BASE_ENDPOINT}/assets/${id}`).pipe(map((_) => _ as Asset));
}

export function deleteAsset(id: string) {
    return del(`${BASE_ENDPOINT}/assets/${id}`);
}

////////////////////////////////
////      Assets (Bulk)     ////
////////////////////////////////

export function addAssetsInBulk(assets: Asset[]) {
    assets.map((_: any) => (_.asset_type_id = _.type_id));
    return post(
        `${BASE_ENDPOINT}/assets/bulk`,
        assets.map((_) => cleanObject(_, [undefined, null, '']))
    ).pipe(map((_) => _ as Asset[]));
}

export function updateAssetsInBulk(assets: Partial<Asset>[]) {
    assets.map((_: any) => (_.asset_type_id = _.type_id));
    return put(
        `${BASE_ENDPOINT}/assets/bulk`,
        assets.map((_) => cleanObject(_, [undefined, null, '']))
    ).pipe(map((_) => _ as Asset[]));
}

export function saveAssetsInBulk(assets: Asset[]) {
    if (!assets?.length) return of([]);
    return assets.every((item) => item?.id)
        ? updateAssetsInBulk(assets)
        : addAssetsInBulk(assets);
}

export function deleteAssetsInBulk(id_list: string[]) {
    return del(`${BASE_ENDPOINT}/assets/bulk`, { body: { id_list } });
}

/////////////////////////////////
////  Asset Purchase Orders  ////
/////////////////////////////////

export function queryAssetPurchaseOrders(query: any = {}) {
    const q = toQueryString(query);
    return get(
        `${BASE_ENDPOINT}/asset_purchase_orders${q ? '?' + q : ''}`
    ).pipe(map((_) => _ as AssetPurchaseOrder[]));
}

export function addAssetPurchaseOrder(order: AssetPurchaseOrder) {
    return post(
        `${BASE_ENDPOINT}/asset_purchase_orders`,
        cleanObject(order, [undefined, null, ''])
    ).pipe(map((_) => _ as AssetPurchaseOrder));
}

export function updateAssetPurchaseOrder(
    id: string,
    order: Partial<AssetPurchaseOrder>
) {
    return put(
        `${BASE_ENDPOINT}/asset_purchase_orders/${id}`,
        cleanObject(order, [undefined, null, ''])
    ).pipe(map((_) => _ as AssetPurchaseOrder));
}

export function saveAssetPurchaseOrder(order: AssetPurchaseOrder) {
    return order.id
        ? updateAssetPurchaseOrder(order.id, {
              ...order,
              purchase_order_number: order.order_number,
          } as any)
        : addAssetPurchaseOrder({
              ...order,
              purchase_order_number: order.order_number,
          } as any);
}

export function showAssetPurchaseOrder(id: string) {
    return get(`${BASE_ENDPOINT}/asset_purchase_orders/${id}`).pipe(
        map((_) => _ as AssetPurchaseOrder)
    );
}

export function deleteAssetPurchaseOrder(id: string) {
    return del(`${BASE_ENDPOINT}/asset_purchase_orders/${id}`);
}

//////////////////////////////////////
////     Asset Helper Methods     ////
//////////////////////////////////////

export function getGroupsWithAssets(query: any = {}) {
    return combineLatest([queryAssetGroups(query)]).pipe(
        map(([products]) => products)
    );
}

export function showGroupFull(id: string, query: any = {}) {
    return combineLatest([
        showAssetGroup(id),
        queryAssetCategories(),
        queryAssets({ ...query, type_id: id, limit: 2000 }),
        queryAssetPurchaseOrders(),
    ]).pipe(
        map(([product, categories, assets, purchase_orders]) => {
            product.category = categories.find(
                (category) => category.id === product.category_id
            );
            product.assets = assets.filter(
                (asset) =>
                    asset.type_id === product.id ||
                    (asset as any).asset_type_id === product.id
            );
            for (const asset of product.assets) {
                (asset as any).order_number = (purchase_orders as any).find(
                    (_) => _.id === asset.purchase_order_id
                )?.purchase_order_number;
            }
            product.purchase_orders = purchase_orders.filter((order) =>
                product.assets.find(
                    (asset) => asset.purchase_order_id === order.id
                )
            );
            return product;
        })
    );
}

export function queryAvailableAssets(
    query: BookingsQueryParams,
    ignore?: string[]
) {
    query.type = 'asset-request';
    return combineLatest([queryAssets(query), queryBookings(query)]).pipe(
        map(([assets, bookings]) =>
            assets.filter(
                (asset) =>
                    ignore?.includes(asset.id) ||
                    !bookings.find(
                        (booking) =>
                            booking.asset_id === asset.id ||
                            booking.asset_ids?.includes(asset.id)
                    )
            )
        )
    );
}

export function queryGroupAvailability(
    query: BookingsQueryParams,
    ignore?: string[]
) {
    query.type = 'asset-request';
    return combineLatest([
        queryAssetGroupsExtended(query),
        queryBookings(query),
    ]).pipe(
        map(([products, bookings]) => {
            for (const product of products) {
                product.assets = product.assets.filter(
                    (asset) =>
                        ignore?.includes(asset.id) ||
                        !bookings.find(
                            (booking) =>
                                booking.asset_id === asset.id ||
                                booking.asset_ids?.includes(asset.id)
                        )
                );
            }
            return products;
        })
    );
}

export async function removeAssetRequests(id: string) {
    const requests = await queryBookings({
        period_start: getUnixTime(startOfDay(new Date())),
        period_end: getUnixTime(endOfDay(new Date())),
        type: 'asset-request',
    }).toPromise();
    return Promise.all(
        requests
            .filter((_) => _.asset_id === id || _.asset_ids?.includes(id))
            .map((request) => removeBooking(request.id).toPromise())
    );
}

export async function updateAssetRequestsForResource(
    { id, ical_uid, from_booking }: any,
    {
        date,
        duration,
        all_day,
        host,
        location_name,
        location_id,
        zones,
        reset_state,
    }: {
        date: number;
        duration: number;
        all_day: boolean;
        host: string;
        location_name?: string;
        location_id?: string;
        zones?: string[];
        reset_state?: boolean;
    },
    new_assets: AssetRequest[]
) {
    const bookings = await queryBookings({
        period_start: getUnixTime(startOfDay(date)),
        period_end: getUnixTime(endOfDay(date)),
        type: 'asset-request',
        email: host,
        event_id: from_booking ? '' : id,
        booking_id: from_booking ? id : '',
        ical_uid,
    }).toPromise();
    await Promise.all(
        bookings.map((item) => removeBooking(item.id).toPromise())
    );
    await Promise.all(
        new_assets.map((request) => {
            const booking = bookings.find((_) =>
                _.asset_ids.find((id) =>
                    request.items?.find((i) => i.item_ids.includes(id))
                )
            );
            return createBooking(
                new Booking({
                    type: 'asset-request',
                    booking_type: 'asset-request',
                    date,
                    duration,
                    all_day,
                    description: location_name,
                    user_email: host,
                    asset_id: request.id,
                    asset_ids: flatten(request.items.map((_) => _.item_ids)),
                    asset_name: request.items.map((_) => _.name).join(', '),
                    title: request.items.map((_) => _.name).join(', '),
                    approved:
                        !reset_state && booking?.approved && !request._changed,
                    rejected:
                        !reset_state && booking?.rejected && !request._changed,
                    extension_data: {
                        parent_id: id,
                        location_id,
                        request: new AssetRequest({ ...request, event: null }),
                    },
                    zones: zones || [],
                }),
                { ical_uid, event_id: from_booking ? '' : id }
            ).toPromise();
        })
    );
}
