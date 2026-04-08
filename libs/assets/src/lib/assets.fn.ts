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
    queryAssetCategories as queryAssetCategoriesAPI,
    queryAssetPurchaseOrders,
    queryAssets as queryAssetsAPI,
    queryAssetTypes as queryAssetTypesAPI,
    showAssetType,
    updateAsset,
    updateAssetCategory,
    updateAssetPurchaseOrder,
    updateAssets,
    updateAssetType,
} from '@placeos/ts-client';
import { addMinutes, endOfDay, getUnixTime, startOfDay } from 'date-fns';
import {
    bookedResourceList,
    BookingsQueryParams,
    createBooking,
    queryBookings,
    removeBooking,
} from 'libs/bookings/src/lib/bookings.fn';
import { combineLatest, EMPTY, Observable, of } from 'rxjs';
import { expand, map, reduce, tap } from 'rxjs/operators';

export { queryAssetPurchaseOrders } from '@placeos/ts-client';

function filter_hidden_items<T extends { data: any[] }>(response: T): T {
    return {
        ...response,
        data: response.data.filter((item) => !item?.hidden),
    };
}

function visible_category_ids() {
    return queryAssetCategoriesAPI({}).pipe(
        map(
            (response) =>
                new Set(
                    response.data
                        .filter((item) => !item?.hidden)
                        .map((item) => item.id),
                ),
        ),
    );
}

export function queryAssetCategories(query: any = {}) {
    if (query.hidden === true) return queryAssetCategoriesAPI(query);
    const { hidden, ...rest } = query;
    return queryAssetCategoriesAPI(rest).pipe(map(filter_hidden_items));
}

export function queryAssetTypes(query: any = {}) {
    if (query.hidden === true) return queryAssetTypesAPI(query);
    const { hidden, ...rest } = query;
    return combineLatest([
        queryAssetTypesAPI(rest),
        visible_category_ids(),
    ]).pipe(
        map(([response, visible_ids]) => ({
            ...response,
            data: response.data.filter(
                (item) =>
                    !(item as any)?.hidden && visible_ids.has(item.category_id),
            ),
        })),
    );
}

export function queryAssets(query: any = {}) {
    if (query.hidden === true) return queryAssetsAPI(query);
    const { hidden, ...rest } = query;
    return combineLatest([
        queryAssetsAPI(rest),
        queryAssetTypes({
            ...(rest.zone_id ? { zone_id: rest.zone_id } : {}),
            limit: 2000,
        }),
    ]).pipe(
        map(([response, types]) => {
            const visible_type_ids = new Set(types.data.map((item) => item.id));
            return {
                ...response,
                data: response.data.filter(
                    (item) =>
                        !(item as any)?.hidden &&
                        visible_type_ids.has(item.asset_type_id),
                ),
            };
        }),
    );
}

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

function queryAllAssetPages(query: any = {}) {
    return queryAssetsAPI({ ...query, limit: query.limit || 500 }).pipe(
        expand((response) =>
            typeof response.next === 'function'
                ? response.next() || EMPTY
                : EMPTY,
        ),
        reduce(
            (state, response) => ({
                total: response.total,
                data: [...state.data, ...response.data],
            }),
            {
                total: 0,
                data: [] as PlaceAsset[],
            },
        ),
        map(({ total, data }) => ({ total, next: () => null, data })),
    );
}

export function queryAssetGroupsExtended(
    query: any = {},
): Observable<AssetGroup[]> {
    const cache_key = JSON.stringify({
        zones: query.zones || query.zone_id || '',
        category_id: query.category_id || '',
        q: query.q || '',
        type_id: query.type_id || '',
    });
    if (_GROUPS_CACHE.has(cache_key)) {
        return of(_GROUPS_CACHE.get(cache_key));
    }
    const q = { ...query };
    for (const key of REMOVE_QUERY_KEYS) {
        if (key in q) delete q[key];
    }
    // Booking availability uses `zones`, while asset APIs use `zone_id`.
    if (q.zones && !q.zone_id) q.zone_id = q.zones;
    if (q.zones) delete q.zones;
    return combineLatest([queryAssetTypesAPI(q), queryAllAssetPages(q)]).pipe(
        map(([types, assets]) => {
            let groups = types.data.filter((item) => !(item as any)?.hidden);
            if (q.type_id)
                groups = groups.filter((item) => item.id === q.type_id);
            const visible_type_ids = new Set(groups.map((item) => item.id));
            const assets_by_type = new Map<string, PlaceAsset[]>();
            for (const asset of assets.data) {
                if (
                    (asset as any)?.hidden ||
                    !visible_type_ids.has(asset.asset_type_id)
                ) {
                    continue;
                }
                const list = assets_by_type.get(asset.asset_type_id) || [];
                list.push(asset);
                assets_by_type.set(asset.asset_type_id, list);
            }
            return groups.map(
                (group) =>
                    ({
                        ...group,
                        assets: assets_by_type.get(group.id) || [],
                    }) as AssetGroup,
            );
        }),
        tap((_) => {
            _GROUPS_CACHE.set(cache_key, _);
            // Clear cache after 5 minutes
            setTimeout(() => _GROUPS_CACHE.delete(cache_key), 5 * 60 * 1000);
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
    return combineLatest([queryAssets(query), bookedResourceList(query)]).pipe(
        map(([assets, booked_assets]) =>
            assets.data.filter(
                (asset) =>
                    ignore?.includes(asset.id) ||
                    !booked_assets.find((id) => id === asset.id),
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
