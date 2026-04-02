import {
    AssetGroup,
    AssetRequest,
    Booking,
    flatten,
    unique,
} from '@placeos/common';
import {
    addAsset,
    addAssetCategory,
    addAssetPurchaseOrder,
    addAssets,
    addAssetType,
    PlaceAsset,
    PlaceAssetCategory,
    PlaceAssetPurchaseOrder,
    queryAssetCategories,
    queryAssetPurchaseOrders,
    queryAssets,
    queryAssetTypes,
    showAssetType,
    updateAsset,
    updateAssetCategory,
    updateAssetPurchaseOrder,
    updateAssets,
    updateAssetType,
} from '@placeos/ts-client';
import { addMinutes, endOfDay, getUnixTime, startOfDay } from 'date-fns';
import {
    BookingsQueryParams,
    createBooking,
    queryBookings,
    removeBooking,
} from 'libs/bookings/src/lib/bookings.fn';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

export {
    queryAssetCategories,
    queryAssetPurchaseOrders,
    queryAssets,
} from '@placeos/ts-client';

////////////////////////////////
////    Asset Categories    ////
////////////////////////////////

export function saveAssetCategory(category: Partial<PlaceAssetCategory>) {
    return category.id
        ? updateAssetCategory(category.id, category)
        : addAssetCategory(category);
}

//////////////////////////////
////     Asset Groups     ////
//////////////////////////////

const _GROUPS_CACHE = new Map<string, AssetGroup[]>();
const REMOVE_QUERY_KEYS = ['period_start', 'period_end', 'type', 'rejected'];

export function queryAssetGroupsExtended(
    query: any = {},
): Observable<AssetGroup[]> {
    if (_GROUPS_CACHE.has(query.zones)) {
        return of(_GROUPS_CACHE.get(query.zones));
    }
    const q = { ...query };
    for (const key of REMOVE_QUERY_KEYS) {
        if (key in q) delete q[key];
    }
    console.log('Query:', q, query);
    return queryAssetTypes(q).pipe(
        switchMap((list) =>
            list.data.length
                ? forkJoin(
                      list.data.map((group) =>
                          queryAssets({
                              limit: 200,
                              ...q,
                              type_id: group.id,
                          }).pipe(
                              map(
                                  (assets) =>
                                      ({
                                          ...group,
                                          assets: assets.data,
                                      }) as AssetGroup,
                              ),
                          ),
                      ),
                  )
                : of([]),
        ),
        tap((_) => {
            _GROUPS_CACHE.set(query.zones, _);
            // Clear cache after 5 minutes
            setTimeout(() => _GROUPS_CACHE.delete(query.zones), 5 * 60 * 1000);
        }),
    );
}

export function saveAssetType(product: Partial<AssetGroup>) {
    return product.id
        ? updateAssetType(product.id, product)
        : addAssetType(product);
}

////////////////////////////////
////          Assets        ////
////////////////////////////////
//
export function saveAsset(asset: Partial<PlaceAsset>) {
    return asset.id ? updateAsset(asset.id, asset) : addAsset(asset);
}

////////////////////////////////
////      Assets (Bulk)     ////
////////////////////////////////

export function saveAssetsInBulk(assets: Partial<PlaceAsset>[]) {
    if (!assets?.length) return of([]);
    return assets.every((item) => item?.id)
        ? updateAssets(assets)
        : addAssets(assets);
}

/////////////////////////////////
////  Asset Purchase Orders  ////
/////////////////////////////////

export function saveAssetPurchaseOrder(
    order: Partial<PlaceAssetPurchaseOrder>,
) {
    return order.id
        ? updateAssetPurchaseOrder(order.id, order)
        : addAssetPurchaseOrder(order);
}

//////////////////////////////////////
////     Asset Helper Methods     ////
//////////////////////////////////////

export function getGroupsWithAssets(query: any = {}) {
    return combineLatest([queryAssetTypes(query)]).pipe(
        map(([products]) => products),
    );
}

const _GROUP_FULL_CACHE: Map<string, AssetGroup> = new Map();

export function showGroupFull(id: string, query: any = {}) {
    if (_GROUP_FULL_CACHE.has(id)) return of(_GROUP_FULL_CACHE.get(id));
    return combineLatest([
        showAssetType(id),
        queryAssetCategories(),
        queryAssets({ ...query, type_id: id, limit: 2000 }),
        queryAssetPurchaseOrders(),
    ]).pipe(
        map(([type, categories, assets, purchase_orders]) => {
            const product = type as AssetGroup;
            (product as any).category = categories.data.find(
                (category) => category.id === product.category_id,
            );
            (product as any).assets = assets.data.filter(
                (asset) => asset.asset_type_id === product.id,
            );
            for (const asset of product.assets) {
                (asset as any).purchase_order_number =
                    purchase_orders.data.find(
                        (_) => _.id === asset.purchase_order_id,
                    )?.purchase_order_number;
            }
            product.purchase_orders = purchase_orders.data.filter((order) =>
                product.assets.find(
                    (asset) => asset.purchase_order_id === order.id,
                ),
            );
            _GROUP_FULL_CACHE.set(id, product);
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
            assets.data.filter(
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
    return combineLatest([
        queryAssetGroupsExtended(query),
        queryBookings({ ...query, type: 'asset-request' }),
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
    reset_state = false,
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
        period_start: getUnixTime(date),
        period_end: getUnixTime(addMinutes(date, duration)),
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
            period_start: getUnixTime(date),
            period_end: getUnixTime(addMinutes(date, duration)),
            type: 'asset-request',
        },
        bookings.map((_) => _.id),
    ).toPromise();
    const processed_requests = changed_assets.map((request) => {
        // Handle duplicate asset ids
        const asset_ids = flatten(
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
