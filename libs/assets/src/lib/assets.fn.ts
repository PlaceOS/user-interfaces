import { cleanObject, del, get, post, put } from '@placeos/ts-client';
import { toQueryString } from 'libs/common/src/lib/api';
import { catchError, map } from 'rxjs/operators';
import {
    Asset,
    AssetCategory,
    AssetGroup,
    AssetPurchaseOrder,
} from './asset.class';
import { Observable, combineLatest, of } from 'rxjs';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import {
    BookingsQueryParams,
    createBooking,
    queryBookings,
    removeBooking,
} from 'libs/bookings/src/lib/bookings.fn';
import { Booking } from 'libs/bookings/src/lib/booking.class';
import { flatten } from '@placeos/common';
import { CalendarEvent } from 'libs/events/src/lib/event.class';

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
    return post(
        `${BASE_ENDPOINT}/assets/bulk`,
        assets.map((_) => cleanObject(_, [undefined, null, '']))
    ).pipe(map((_) => _ as Asset[]));
}

export function updateAssetsInBulk(asset: Partial<Asset>[]) {
    return put(
        `${BASE_ENDPOINT}/assets/bulk`,
        asset.map((_) => cleanObject(_, [undefined, null, '']))
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
    return combineLatest([queryAssetGroups(query), queryAssets(query)]).pipe(
        map(([products, assets]) => {
            for (const product of products) {
                product.assets = assets.filter(
                    (asset) => asset.type_id === product.id
                );
            }
            return products;
        })
    );
}

export function showGroupFull(id: string) {
    return combineLatest([
        showAssetGroup(id),
        queryAssetCategories(),
        queryAssets({ type_id: id }),
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
    return combineLatest([queryAssets(), queryBookings(query)]).pipe(
        map(([assets, bookings]) =>
            assets.filter(
                (asset) =>
                    ignore?.includes(asset.id) ||
                    !bookings.find((booking) => booking.asset_id === asset.id)
            )
        )
    );
}

export function queryGroupAvailability(
    query: BookingsQueryParams,
    ignore?: string[]
) {
    return combineLatest([
        queryAssetGroups(),
        queryAvailableAssets(query, ignore),
    ]).pipe(
        map(([products, assets]) => {
            for (const product of products) {
                product.assets = assets.filter(
                    (asset) =>
                        asset.type_id === product.id ||
                        (asset as any).asset_type_id === product.id
                );
            }
            return products;
        })
    );
}

export async function updateAssetRequestsForResource(
    { id, ical_uid }: Partial<CalendarEvent>,
    {
        date,
        duration,
        host,
        location_name,
        zones,
    }: {
        date: number;
        duration: number;
        host: string;
        location_name?: string;
        zones?: string[];
    },
    new_assets: AssetGroup[],
    old_assets: Asset[]
) {
    const assets: Asset[] = flatten(
        new_assets.map((_) =>
            _.assets
                .slice(0, (_ as any).amount)
                .map((asset) => ({ ...asset, name: _.name }))
        )
    );
    const bookings = await queryBookings({
        period_start: getUnixTime(startOfDay(date)),
        period_end: getUnixTime(endOfDay(date)),
        type: 'asset-request',
        email: host,
        event_id: id,
        ical_uid,
    }).toPromise();
    const filtered = bookings.filter(
        (item) =>
            item.extension_data.parent_id === id &&
            old_assets.find((_) => _.id === item.id)
    );
    await Promise.all(
        filtered.map((item) => removeBooking(item.id).toPromise())
    );
    await Promise.all(
        assets.map((item) =>
            createBooking(
                new Booking({
                    type: 'asset-request',
                    booking_type: 'asset-request',
                    date,
                    duration,
                    description: location_name,
                    user_email: host,
                    asset_id: item.id,
                    asset_name: (item as any).name,
                    title: (item as any).name,
                    extension_data: { parent_id: id },
                    zones: zones || [],
                }),
                { ical_uid, event_id: id }
            ).toPromise()
        )
    );
    return assets;
}
