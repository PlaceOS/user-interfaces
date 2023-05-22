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
    return post(`${BASE_ENDPOINT}/asset_categories`, category).pipe(
        map((_) => _ as AssetCategory)
    );
}

export function updateAssetCategory(
    id: string,
    category: Partial<AssetCategory>
) {
    return put(`${BASE_ENDPOINT}/asset_categories/${id}`, category).pipe(
        map((_) => _ as AssetCategory)
    );
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
    return post(`${BASE_ENDPOINT}/asset_types`, product).pipe(
        map((_) => _ as AssetGroup)
    );
}

export function updateAssetGroup(id: string, product: Partial<AssetGroup>) {
    return put(`${BASE_ENDPOINT}/asset_types/${id}`, product).pipe(
        map((_) => _ as AssetGroup)
    );
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
    return post(`${BASE_ENDPOINT}/assets`, asset).pipe(map((_) => _ as Asset));
}

export function updateAsset(id: string, asset: Partial<Asset>) {
    return put(`${BASE_ENDPOINT}/assets/${id}`, asset).pipe(
        map((_) => _ as Asset)
    );
}

export function saveAsset(asset: Asset) {
    return asset.id ? updateAsset(asset.id, asset) : addAsset(asset);
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
    return post(`${BASE_ENDPOINT}/assets/bulk`, assets).pipe(
        map((_) => _ as Asset[])
    );
}

export function updateAssetsInBulk(asset: Partial<Asset>[]) {
    return put(`${BASE_ENDPOINT}/assets/bulk`, asset).pipe(
        map((_) => _ as Asset[])
    );
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
    return post(`${BASE_ENDPOINT}/asset_purchase_orders`, order).pipe(
        map((_) => _ as AssetPurchaseOrder)
    );
}

export function updateAssetPurchaseOrder(
    id: string,
    order: Partial<AssetPurchaseOrder>
) {
    return put(`${BASE_ENDPOINT}/asset_purchase_orders/${id}`, order).pipe(
        map((_) => _ as AssetPurchaseOrder)
    );
}

export function saveAssetPurchaseOrder(order: AssetPurchaseOrder) {
    return order.id
        ? updateAssetPurchaseOrder(order.id, order)
        : addAssetPurchaseOrder(order);
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
                (asset) => asset.type_id === product.id
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

export function queryAvailableAssets(query: BookingsQueryParams) {
    query.type = 'asset-request';
    return combineLatest([queryAssets(), queryBookings(query)]).pipe(
        map(([assets, bookings]) =>
            assets.filter(
                (asset) => !bookings.find((booking) => booking.id === asset.id)
            )
        )
    );
}

export function queryGroupAvailability(query: BookingsQueryParams) {
    return combineLatest([
        queryAssetGroups(),
        queryAvailableAssets(query),
    ]).pipe(
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

export async function updateAssetRequestsForResource(
    parent_id: string,
    { date, duration, host }: { date: number; duration: number; host: string },
    new_assets: AssetGroup[],
    old_assets: Asset[]
) {
    const assets: Asset[] = flatten(
        new_assets.map((_) => _.assets.slice(0, (_ as any).amount))
    );
    const bookings = await queryBookings({
        period_start: getUnixTime(startOfDay(date)),
        period_end: getUnixTime(endOfDay(date)),
        type: 'asset-request',
        email: host,
    }).toPromise();
    const filtered = bookings.filter(
        (item) =>
            item.extension_data.parent_id === parent_id &&
            old_assets.find((_) => _.id === item.id)
    );
    await Promise.all(
        filtered.map((item) => removeBooking(item.id).toPromise())
    );
    await Promise.all(
        assets.map((item) =>
            createBooking(
                new Booking({
                    date,
                    duration,
                    user_email: host,
                    id: item.id,
                    asset_name: item.name,
                    extension_data: { parent_id },
                })
            ).toPromise()
        )
    );
    return assets;
}
