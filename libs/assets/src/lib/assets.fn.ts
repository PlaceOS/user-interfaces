import {
    AssetGroup,
    AssetRequest,
    Booking,
    flatten,
    unique,
} from '@placeos/common';
import {
    PlaceAsset,
    PlaceAssetCategory,
    PlaceAssetPurchaseOrder,
    addAsset as tsAddAsset,
    addAssetCategory as tsAddAssetCategory,
    addAssetPurchaseOrder as tsAddAssetPurchaseOrder,
    addAssets as tsAddAssets,
    addAssetType as tsAddAssetType,
    queryAssetCategories as tsQueryAssetCategories,
    queryAssetPurchaseOrders as tsQueryAssetPurchaseOrders,
    queryAssets as tsQueryAssets,
    queryAssetTypes as tsQueryAssetTypes,
    removeAsset as tsRemoveAsset,
    removeAssetCategory as tsRemoveAssetCategory,
    removeAssetPurchaseOrder as tsRemoveAssetPurchaseOrder,
    removeAssets as tsRemoveAssets,
    removeAssetType as tsRemoveAssetType,
    showAsset as tsShowAsset,
    showAssetCategory as tsShowAssetCategory,
    showAssetPurchaseOrder as tsShowAssetPurchaseOrder,
    showAssetType as tsShowAssetType,
    updateAsset as tsUpdateAsset,
    updateAssetCategory as tsUpdateAssetCategory,
    updateAssetPurchaseOrder as tsUpdateAssetPurchaseOrder,
    updateAssets as tsUpdateAssets,
    updateAssetType as tsUpdateAssetType,
} from '@placeos/ts-client';
import { addMinutes, endOfDay, getUnixTime, startOfDay } from 'date-fns';
import {
    BookingsQueryParams,
    createBooking,
    queryBookings,
    removeBooking,
} from 'libs/bookings/src/lib/bookings.fn';
import { combineLatest, forkJoin, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

////////////////////////////////
////    Asset Categories    ////
////////////////////////////////

export function queryAssetCategories(query: any = {}) {
    return tsQueryAssetCategories(query).pipe(
        map((res) => res.data as PlaceAssetCategory[]),
    );
}

export function addAssetCategory(category: Partial<PlaceAssetCategory>) {
    return tsAddAssetCategory(category);
}

export function updateAssetCategory(
    id: string,
    category: Partial<PlaceAssetCategory>,
) {
    return tsUpdateAssetCategory(id, category);
}

export function saveAssetCategory(category: Partial<PlaceAssetCategory>) {
    return category.id
        ? updateAssetCategory(category.id, category)
        : addAssetCategory(category);
}

export function showAssetCategory(id: string) {
    return tsShowAssetCategory(id);
}

export function deleteAssetCategory(id: string) {
    return tsRemoveAssetCategory(id);
}

//////////////////////////////
////     Asset Groups     ////
//////////////////////////////

export function queryAssetGroups(query: any = {}) {
    return tsQueryAssetTypes(query).pipe(
        map((res) => res.data as AssetGroup[]),
    );
}

const groups_cache = new Map<string, AssetGroup[]>();

export function queryAssetGroupsExtended(query: any = {}) {
    if (groups_cache.has(query.zones)) {
        return of(groups_cache.get(query.zones));
    }
    return tsQueryAssetTypes(query).pipe(
        map((res) => res.data as AssetGroup[]),
        switchMap((list) =>
            list.length
                ? forkJoin(
                      list.map((group) =>
                          queryAssets({
                              limit: 200,
                              ...query,
                              type_id: group.id,
                          }).pipe(
                              map(
                                  (assets) =>
                                      ({ ...group, assets }) as AssetGroup,
                              ),
                          ),
                      ),
                  )
                : of([]),
        ),
        tap((_) => {
            groups_cache.set(query.zones, _);
            // Clear cache after 5 minutes
            setTimeout(() => groups_cache.delete(query.zones), 5 * 60 * 1000);
        }),
    );
}

export function addAssetGroup(product: Partial<AssetGroup>) {
    return tsAddAssetType(product).pipe(map((_) => _ as AssetGroup));
}

export function updateAssetGroup(id: string, product: Partial<AssetGroup>) {
    return tsUpdateAssetType(id, product).pipe(map((_) => _ as AssetGroup));
}

export function saveAssetGroup(product: Partial<AssetGroup>) {
    return product.id
        ? updateAssetGroup(product.id, product)
        : addAssetGroup(product);
}

export function showAssetGroup(id: string) {
    return tsShowAssetType(id).pipe(map((_) => _ as AssetGroup));
}

export function deleteAssetGroup(id: string) {
    return tsRemoveAssetType(id);
}

////////////////////////////////
////          Assets        ////
////////////////////////////////

export function queryAssets(query: any = {}) {
    return tsQueryAssets(query).pipe(map((res) => res.data as PlaceAsset[]));
}

export function addAsset(asset: Partial<PlaceAsset>) {
    return tsAddAsset(asset);
}

export function updateAsset(id: string, asset: Partial<PlaceAsset>) {
    return tsUpdateAsset(id, asset);
}

export function saveAsset(asset: Partial<PlaceAsset>) {
    return asset.id ? updateAsset(asset.id, asset) : addAsset(asset);
}

export function showAsset(id: string) {
    return tsShowAsset(id);
}

export function deleteAsset(id: string) {
    return tsRemoveAsset(id);
}

////////////////////////////////
////      Assets (Bulk)     ////
////////////////////////////////

export function addAssetsInBulk(assets: Partial<PlaceAsset>[]) {
    return tsAddAssets(assets);
}

export function updateAssetsInBulk(assets: Partial<PlaceAsset>[]) {
    return tsUpdateAssets(assets);
}

export function saveAssetsInBulk(assets: Partial<PlaceAsset>[]) {
    if (!assets?.length) return of([]);
    return assets.every((item) => item?.id)
        ? updateAssetsInBulk(assets)
        : addAssetsInBulk(assets);
}

export function deleteAssetsInBulk(id_list: string[]) {
    return tsRemoveAssets(id_list);
}

/////////////////////////////////
////  Asset Purchase Orders  ////
/////////////////////////////////

export function queryAssetPurchaseOrders(query: any = {}) {
    return tsQueryAssetPurchaseOrders(query).pipe(
        map((res) => res.data as PlaceAssetPurchaseOrder[]),
    );
}

export function addAssetPurchaseOrder(order: Partial<PlaceAssetPurchaseOrder>) {
    return tsAddAssetPurchaseOrder(order);
}

export function updateAssetPurchaseOrder(
    id: string,
    order: Partial<PlaceAssetPurchaseOrder>,
) {
    return tsUpdateAssetPurchaseOrder(id, order);
}

export function saveAssetPurchaseOrder(
    order: Partial<PlaceAssetPurchaseOrder>,
) {
    return order.id
        ? updateAssetPurchaseOrder(order.id, order)
        : addAssetPurchaseOrder(order);
}

export function showAssetPurchaseOrder(id: string) {
    return tsShowAssetPurchaseOrder(id);
}

export function deleteAssetPurchaseOrder(id: string) {
    return tsRemoveAssetPurchaseOrder(id);
}

//////////////////////////////////////
////     Asset Helper Methods     ////
//////////////////////////////////////

export function getGroupsWithAssets(query: any = {}) {
    return combineLatest([queryAssetGroups(query)]).pipe(
        map(([products]) => products),
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
                (category) => category.id === product.category_id,
            );
            product.assets = assets.filter(
                (asset) => asset.asset_type_id === product.id,
            );
            for (const asset of product.assets) {
                (asset as any).purchase_order_number = purchase_orders.find(
                    (_) => _.id === asset.purchase_order_id,
                )?.purchase_order_number;
            }
            product.purchase_orders = purchase_orders.filter((order) =>
                product.assets.find(
                    (asset) => asset.purchase_order_id === order.id,
                ),
            );
            return product;
        }),
    );
}

export function queryAvailableAssets(
    query: BookingsQueryParams,
    ignore?: string[],
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
                            booking.asset_ids?.includes(asset.id),
                    ),
            ),
        ),
    );
}

export function queryGroupAvailability(
    query: BookingsQueryParams,
    ignore: string[] = [],
) {
    query.type = 'asset-request';
    return combineLatest([
        queryAssetGroupsExtended(query),
        queryBookings(query),
    ]).pipe(
        map(([products, bookings]) => {
            bookings = bookings.filter(
                (_) => _.status !== 'declined' && _.status !== 'cancelled',
            );
            return products.map((product) => ({
                ...product,
                assets: product.assets.filter(
                    (asset) =>
                        ignore?.includes(asset.id) ||
                        !bookings.find(
                            (booking) =>
                                !ignore.includes(booking.id) &&
                                (booking.asset_id === asset.id ||
                                    booking.asset_ids?.includes(asset.id)),
                        ),
                ),
            }));
        }),
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
            .map((request) => removeBooking(request.id).toPromise()),
    );
}

export function differenceBetweenAssetRequests(
    new_assets: AssetRequest[],
    old_assets: AssetRequest[],
    reset_state: boolean = false,
): string[] {
    if ((!new_assets || new_assets?.length <= 0) && old_assets?.length)
        return [];
    if (!old_assets) return [];
    const changed: string[] = [];
    for (const request of new_assets) {
        const match = old_assets.find((_) => _.id === request.id);
        if (!match || match.ref_id !== request.ref_id) {
            changed.push(request.id);
        }
    }
    return changed;
}

export async function validateAssetRequestsForResource(
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
    new_assets: AssetRequest[] = [],
    force_create = false,
): Promise<() => Promise<void>> {
    const requests = await queryBookings({
        period_start: getUnixTime(all_day ? startOfDay(date) : date),
        period_end: getUnixTime(
            all_day
                ? endOfDay(addMinutes(date, duration))
                : addMinutes(date, duration),
        ),
        type: 'asset-request',
        zones: zones.join(','),
    }).toPromise();
    const bookings =
        id && ical_uid
            ? await queryBookings({
                  period_start: getUnixTime(startOfDay(date)),
                  period_end: getUnixTime(endOfDay(date)),
                  type: 'asset-request',
                  email: host,
                  event_id: from_booking ? '' : id,
                  booking_id: from_booking ? id : '',
                  ical_uid,
              }).toPromise()
            : [];
    const booking_list: [string, AssetRequest][] = bookings.map((_) => [
        _.id,
        new AssetRequest(_.extension_data.request),
    ]);
    new_assets?.forEach((_) => (_.conflict = false));
    let changed = force_create
        ? new_assets.map((_) => _.id)
        : differenceBetweenAssetRequests(
              new_assets,
              booking_list.map(([_, r]) => r),
              reset_state,
          );
    if (reset_state) {
        const has_state = bookings.filter((_) => _.approved || _.rejected);
        changed = unique([
            ...changed,
            ...has_state.map((_) => _.extension_data.request_id),
        ]);
    }
    const unchanged = booking_list.filter(
        ([_, request]) => !changed.includes(request.id),
    );
    const changed_requests = booking_list.filter(([_, { id }]) =>
        changed.includes(id),
    );
    const changed_assets = new_assets.filter(({ id }) => changed.includes(id));
    const filtered = requests.filter(
        (req) =>
            !req.rejected &&
            (!bookings.find((b) => b.id === req.id) ||
                unchanged.find(([id]) => req.event_id === id)),
    );
    let used_ids: string[] = flatten(filtered.map((_) => _.asset_ids));
    for (const [_, request] of unchanged) {
        used_ids = [
            ...used_ids,
            ...flatten(request.items.map((_) => _.item_ids)),
        ];
    }
    const available_groups = await queryGroupAvailability(
        {
            period_start: getUnixTime(all_day ? startOfDay(date) : date),
            period_end: getUnixTime(
                all_day
                    ? endOfDay(addMinutes(date, duration))
                    : addMinutes(date, duration),
            ),
            type: 'asset-request',
        },
        bookings.map((_) => _.id),
    ).toPromise();
    const processed_requests = changed_assets.map((request) => {
        // Handle duplicate asset ids
        let asset_ids = flatten(
            (request.items as any).map(({ id, item_ids, quantity }) => {
                const assets = available_groups.find(
                    (_) => _.id === id,
                )?.assets;
                if (!assets) return item_ids;
                const list = [];
                return new Array(quantity).fill(0).map((_, idx) => {
                    const item =
                        used_ids.includes(item_ids[idx]) ||
                        list.includes(item_ids[idx]) ||
                        !item_ids[idx]
                            ? assets?.find(({ id }) => {
                                  return (
                                      !used_ids.includes(id) &&
                                      !list.includes(id)
                                  );
                              })?.id
                            : item_ids[idx];
                    if (!item) {
                        request.conflict = true;
                        throw 'Unable to find available asset for request';
                    }
                    list.push(item);
                    return item;
                });
            }),
        );
        // Grab any existing bookings for the asset for the parent event/booking
        const booking = bookings.find((_) =>
            _.asset_ids.find((id) =>
                request.items?.find((i) => i.item_ids.includes(id)),
            ),
        );
        used_ids = [...used_ids, ...asset_ids];
        const asset_data: Partial<Booking> = {
            type: 'asset-request',
            booking_type: 'asset-request',
            date,
            duration,
            all_day,
            description: location_name,
            user_email: host,
            asset_id: asset_ids[0],
            asset_ids,
            asset_name: request.items.map((_) => _.name).join(', '),
            title: request.items.map((_) => _.name).join(', '),
            approved: !reset_state && booking?.approved && !request._changed,
            rejected: !reset_state && booking?.rejected && !request._changed,
            extension_data: {
                parent_id: id,
                request_id: request.id,
                location_id,
                request: new AssetRequest({ ...request, event: null }),
            },
            zones: zones || [],
        };
        if (from_booking) (asset_data as any).parent_id = id;
        return createBooking(new Booking(asset_data), {
            ical_uid,
            event_id: from_booking ? '' : id,
        });
    });
    return async () => {
        await Promise.all(
            changed_requests.map(([id]) => removeBooking(id).toPromise()),
        );
        await Promise.all(processed_requests.map((r) => r.toPromise()));
    };
}
