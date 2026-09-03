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
    addAssetType,
    apiEndpoint,
    PlaceAsset,
    PlaceAssetCategory,
    PlaceAssetPurchaseOrder,
    post,
    queryAssetCategories as queryAssetCategoriesAPI,
    queryAssetPurchaseOrders as queryAssetPurchaseOrdersAPI,
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

export async function queryAssetPurchaseOrders(query: any = {}) {
    return queryAssetPurchaseOrdersAPI(query);
}

/**
 * Find the item whose name matches (trimmed, case-insensitive), resolving
 * duplicates to the oldest (lowest `created_at`) so every client converges
 * on the same record.
 */
export function findOldestByName(list: any[], name: string = '') {
    const match_name = name.trim().toLowerCase();
    return list
        .filter((_) => (_.name || '').trim().toLowerCase() === match_name)
        .sort((a, b) => (a.created_at || 0) - (b.created_at || 0))[0];
}

function filter_hidden_items<T extends { data: any[] }>(response: T): T {
    return {
        ...response,
        data: response.data.filter((item) => !item?.hidden),
    };
}

async function visible_category_ids() {
    const response = await queryAssetCategoriesAPI({});
    return new Set(
        response.data.filter((item) => !item?.hidden).map((item) => item.id),
    );
}

export async function queryAssetCategories(query: any = {}) {
    if (query.hidden === true) return queryAssetCategoriesAPI(query);
    const { hidden, ...rest } = query;
    return filter_hidden_items(await queryAssetCategoriesAPI(rest));
}

export async function queryAssetTypes(query: any = {}) {
    if (query.hidden === true) return queryAssetTypesAPI(query);
    const { hidden, ...rest } = query;
    const [response, visible_ids] = await Promise.all([
        queryAssetTypesAPI(rest),
        visible_category_ids(),
    ]);
    return {
        ...response,
        data: response.data.filter(
            (item) =>
                !(item as any)?.hidden && visible_ids.has(item.category_id),
        ),
    };
}

export async function queryAssets(query: any = {}) {
    if (query.hidden === true) return queryAssetsAPI(query);
    const { hidden, ...rest } = query;
    const [response, types] = await Promise.all([
        queryAssetsAPI(rest),
        queryAssetTypes({
            ...(rest.zone_id ? { zone_id: rest.zone_id } : {}),
            limit: 2000,
        }),
    ]);
    const visible_type_ids = new Set(types.data.map((item) => item.id));
    return {
        ...response,
        data: response.data.filter(
            (item) =>
                !(item as any)?.hidden &&
                visible_type_ids.has(item.asset_type_id),
        ),
    };
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

async function queryAllAssetPages(query: any = {}) {
    let response = await queryAssetsAPI({
        ...query,
        limit: query.limit || 500,
    });
    let total = response.total;
    const data: PlaceAsset[] = [...response.data];
    while (typeof response.next === 'function') {
        const next = response.next();
        if (!next) break;
        response = await next;
        total = response.total;
        data.push(...response.data);
    }
    return { total, next: () => null, data };
}

export async function queryAssetGroupsExtended(
    query: any = {},
): Promise<AssetGroup[]> {
    const cache_key = JSON.stringify({
        zones: query.zones || query.zone_id || '',
        category_id: query.category_id || '',
        q: query.q || '',
        type_id: query.type_id || '',
    });
    if (_GROUPS_CACHE.has(cache_key)) {
        return _GROUPS_CACHE.get(cache_key);
    }
    const q = { ...query };
    for (const key of REMOVE_QUERY_KEYS) {
        if (key in q) delete q[key];
    }
    // Booking availability uses `zones`, while asset APIs use `zone_id`.
    if (q.zones && !q.zone_id) q.zone_id = q.zones;
    if (q.zones) delete q.zones;
    const [types, assets] = await Promise.all([
        queryAssetTypesAPI(q),
        queryAllAssetPages(q),
    ]);
    let groups = types.data.filter((item) => !(item as any)?.hidden);
    if (q.type_id) groups = groups.filter((item) => item.id === q.type_id);
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
    const list = groups.map(
        (group) =>
            ({
                ...group,
                assets: assets_by_type.get(group.id) || [],
            }) as AssetGroup,
    );
    _GROUPS_CACHE.set(cache_key, list);
    // Clear cache after 5 minutes
    setTimeout(() => _GROUPS_CACHE.delete(cache_key), 5 * 60 * 1000);
    return list;
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
    if (!assets?.length) return Promise.resolve([]);
    return assets.every((item) => item?.id)
        ? updateAssets(assets)
        : addAssetsInBulk(assets);
}

/** Add assets through the bulk endpoint with an explicit path separator. */
async function addAssetsInBulk(assets: Partial<PlaceAsset>[]) {
    const response = await post(
        `${apiEndpoint()}/assets/bulk`,
        JSON.stringify(assets),
        {},
    );
    return (response as unknown as Partial<PlaceAsset>[]).map(
        (item) => new PlaceAsset(item),
    );
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
    return queryAssetTypes(query);
}

const _GROUP_FULL_CACHE: Map<string, AssetGroup> = new Map();

export async function showGroupFull(id: string, query: any = {}) {
    if (_GROUP_FULL_CACHE.has(id)) return _GROUP_FULL_CACHE.get(id);
    const [type, categories, assets, purchase_orders] = await Promise.all([
        showAssetType(id),
        queryAssetCategories(),
        queryAssets({ ...query, type_id: id, limit: 2000 }),
        queryAssetPurchaseOrders(),
    ]);
    const product = type as AssetGroup;
    (product as any).category = categories.data.find(
        (category) => category.id === product.category_id,
    );
    (product as any).assets = assets.data.filter(
        (asset) => asset.asset_type_id === product.id,
    );
    for (const asset of product.assets) {
        (asset as any).purchase_order_number = purchase_orders.data.find(
            (_) => _.id === asset.purchase_order_id,
        )?.purchase_order_number;
    }
    product.purchase_orders = purchase_orders.data.filter((order) =>
        product.assets.find((asset) => asset.purchase_order_id === order.id),
    );
    _GROUP_FULL_CACHE.set(id, product);
    return product;
}

export async function queryAvailableAssets(
    query: BookingsQueryParams,
    ignore?: string[],
) {
    query.type = 'asset-request';
    const [assets, booked_assets] = await Promise.all([
        queryAssets(query),
        bookedResourceList(query),
    ]);
    return assets.data.filter(
        (asset) =>
            ignore?.includes(asset.id) ||
            !booked_assets.find((id) => id === asset.id),
    );
}

export async function queryGroupAvailability(
    query: BookingsQueryParams,
    ignore: string[] = [],
) {
    const [products, bookings] = await Promise.all([
        queryAssetGroupsExtended(query),
        queryBookings({ ...query, type: 'asset-request' }),
    ]);
    const active_bookings = bookings.filter(
        (_) => _.status !== 'declined' && _.status !== 'cancelled',
    );
    return products.map((product) => ({
        ...product,
        assets: product.assets.filter(
            (asset) =>
                ignore?.includes(asset.id) ||
                !active_bookings.find(
                    (booking) =>
                        !ignore.includes(booking.id) &&
                        (booking.asset_id === asset.id ||
                            booking.asset_ids?.includes(asset.id)),
                ),
        ),
    }));
}

export async function removeAssetRequests(id: string) {
    const requests = await queryBookings({
        period_start: getUnixTime(startOfDay(new Date())),
        period_end: getUnixTime(endOfDay(new Date())),
        type: 'asset-request',
    });
    return Promise.all(
        requests
            .filter((_) => _.asset_id === id || _.asset_ids?.includes(id))
            .map((request) => removeBooking(request.id)),
    );
}

export function differenceBetweenAssetRequests(
    new_assets: AssetRequest[],
    old_assets: AssetRequest[],
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
    });
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
              })
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
            zones: (zones || []).join(','),
        },
        bookings.map((_) => _.id),
    );
    const processed_requests = changed_assets.map((request) => {
        // Handle duplicate asset ids
        const asset_ids = flatten(
            (request.items as any).map(({ id, item_ids, quantity }) => {
                const selected_ids = item_ids || [];
                const assets = available_groups.find(
                    (_) => _.id === id,
                )?.assets;
                if (!assets) return selected_ids;
                const list = [];
                return new Array(quantity).fill(0).map((_, idx) => {
                    const item =
                        used_ids.includes(selected_ids[idx]) ||
                        list.includes(selected_ids[idx]) ||
                        !selected_ids[idx]
                            ? assets?.find(({ id }) => {
                                  return (
                                      !used_ids.includes(id) &&
                                      !list.includes(id)
                                  );
                              })?.id
                            : selected_ids[idx];
                    if (!item) {
                        request.conflict = true;
                        throw 'Unable to find available asset for request';
                    }
                    list.push(item);
                    return item;
                });
            }),
        );
        if (!asset_ids.length || asset_ids.some((id) => !id)) {
            request.conflict = true;
            throw 'Unable to find available asset for request';
        }
        // Grab any existing bookings for the asset for the parent event/booking
        const booking = bookings.find((_) =>
            _.asset_ids.find((id) =>
                request.items?.find((i) => i.item_ids?.includes(id)),
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
        await Promise.all(changed_requests.map(([id]) => removeBooking(id)));
        await Promise.all(processed_requests);
    };
}
