import {
    AssetGroup,
    AssetRequest,
    Booking,
    CalendarEvent,
    flatten,
    toJsonValue,
    unique,
} from '@placeos/common';
import {
    type Asset,
    asset_categories,
    asset_purchase_orders,
    asset_types,
    type AssetCategory,
    type AssetCategoryInput,
    type AssetInput,
    type AssetPurchaseOrder,
    type AssetPurchaseOrderInput,
    assets as assets_v7,
    type AssetType,
    type AssetTypeInput,
} from '@placeos/ts-client';
import { orThrow, orThrowPage, type Page } from '@placeos/ts-client/compat';
import { addMinutes, endOfDay, getUnixTime, startOfDay } from 'date-fns';
import {
    BookingsQueryParams,
    createBooking,
    parentBookingId,
    queryBookings,
    removeBooking,
} from 'libs/bookings/src/lib/bookings.fn';

/** Query parameters of the asset list, and whether to include hidden assets */
export type AssetQuery = NonNullable<Parameters<typeof assets_v7.query>[0]> & {
    hidden?: boolean;
};

/** Query parameters of the asset type list, and whether to include hidden types */
export type AssetTypeQuery = NonNullable<
    Parameters<typeof asset_types.query>[0]
> & { hidden?: boolean };

/** Query parameters of the asset category list */
export type AssetCategoryQuery = NonNullable<
    Parameters<typeof asset_categories.query>[0]
>;

/** Query parameters of the asset purchase order list */
export type AssetPurchaseOrderQuery = NonNullable<
    Parameters<typeof asset_purchase_orders.query>[0]
>;

/** Filters of `queryAssetGroupsExtended` */
export interface AssetGroupQuery {
    /** Comma separated zone ids. The first one filters the lists */
    zones?: string;
    zone_id?: string;
    category_id?: string;
    type_id?: string;
    q?: string;
}

/**
 * The fields of `value` that are in `keys`. The API rejects a request body
 * with a field that its schema does not have, so the save functions send only
 * the fields of the schema, as the 6.x model classes did.
 */
function pickFields<T, K extends keyof T>(
    value: T,
    keys: readonly K[],
): Partial<Pick<T, K>> {
    const result: Partial<Pick<T, K>> = {};
    for (const key of keys) {
        if (value[key] !== undefined) result[key] = value[key];
    }
    return result;
}

const ASSET_FIELDS = [
    'id',
    'identifier',
    'serial_number',
    'other_data',
    'barcode',
    'name',
    'client_ids',
    'map_id',
    'bookable',
    'accessible',
    'zones',
    'place_groups',
    'assigned_to',
    'assigned_name',
    'features',
    'images',
    'notes',
    'security_system_groups',
    'parent_id',
    'asset_type_id',
    'purchase_order_id',
    'zone_id',
] as const satisfies readonly (keyof Asset & keyof AssetInput)[];

/**
 * The request body of an asset. The JSON fields are copied as plain JSON, as
 * the API rejects class instances and `undefined` values in them.
 */
function assetBody(asset: Partial<Asset>): AssetInput {
    const body = pickFields(asset, ASSET_FIELDS);
    return {
        ...body,
        ...('other_data' in body
            ? { other_data: toJsonValue(body.other_data) }
            : {}),
        ...('client_ids' in body
            ? { client_ids: toJsonValue(body.client_ids) }
            : {}),
    };
}

const ASSET_TYPE_FIELDS = [
    'id',
    'name',
    'brand',
    'description',
    'model_number',
    'images',
    'category_id',
] as const satisfies readonly (keyof AssetType & keyof AssetTypeInput)[];

const ASSET_CATEGORY_FIELDS = [
    'id',
    'name',
    'description',
    'hidden',
    'parent_category_id',
] as const satisfies readonly (keyof AssetCategory &
    keyof AssetCategoryInput)[];

const PURCHASE_ORDER_FIELDS = [
    'id',
    'purchase_order_number',
    'invoice_number',
    'supplier_details',
    'purchase_date',
    'unit_price',
    'expected_service_start_date',
    'expected_service_end_date',
] as const satisfies readonly (keyof AssetPurchaseOrder &
    keyof AssetPurchaseOrderInput)[];

export async function queryAssetPurchaseOrders(
    query: AssetPurchaseOrderQuery = {},
) {
    return asset_purchase_orders.query(query).then(orThrowPage);
}

/**
 * Find the item whose name matches (trimmed, case-insensitive), resolving
 * duplicates to the oldest (lowest `created_at`) so every client converges
 * on the same record.
 */
export function findOldestByName<
    T extends { readonly name?: string; readonly created_at?: number },
>(list: readonly T[], name: string = ''): T | undefined {
    const match_name = name.trim().toLowerCase();
    return list
        .filter((_) => (_.name || '').trim().toLowerCase() === match_name)
        .sort((a, b) => (a.created_at || 0) - (b.created_at || 0))[0];
}

/**
 * Find the hidden category with the given name. The API returns only the
 * caller's own categories and legacy categories with no authority, so any
 * category with an `authority_id` belongs to the current authority. These come
 * first, and legacy categories are the fallback. This does not read
 * `authority()`, which can still be unset when the list loads. Types belong
 * to a category, so this choice also sets which types are used.
 */
function findHiddenCategory(list: readonly AssetCategory[], name: string) {
    const own = list.filter((_) => _.authority_id);
    return findOldestByName(own, name) || findOldestByName(list, name);
}

// Hidden categories and types store app resources (desks, lockers, parking,
// catering) as assets. The lookups below are shared so each list is only
// requested once. A failed list request rejects and is not cached, so a
// network error never causes a duplicate category or type to be created.
let _hidden_categories: Promise<readonly AssetCategory[]> | null = null;
const _category_types = new Map<string, Promise<readonly AssetType[]>>();
const _hidden_type_ids = new Map<string, Promise<string>>();

function queryHiddenCategories() {
    if (!_hidden_categories) {
        const request = asset_categories
            .query({ hidden: true, limit: 500 })
            .then(orThrowPage)
            .then((_) => _.data);
        request.catch(() => {
            if (_hidden_categories === request) _hidden_categories = null;
        });
        _hidden_categories = request;
    }
    return _hidden_categories;
}

function queryCategoryTypes(category_id: string) {
    if (!_category_types.has(category_id)) {
        const request = asset_types
            .query({ category_id, limit: 500 })
            .then(orThrowPage)
            .then((_) => _.data);
        request.catch(() => {
            if (_category_types.get(category_id) === request) {
                _category_types.delete(category_id);
            }
        });
        _category_types.set(category_id, request);
    }
    return _category_types.get(category_id);
}

/**
 * Find the hidden asset category with the given name, or create it.
 * When the create collides with another client, the list is read again.
 */
export async function ensureHiddenCategory(name: string) {
    let category = findHiddenCategory(await queryHiddenCategories(), name);
    if (category) return category;
    _hidden_categories = null;
    category = findHiddenCategory(await queryHiddenCategories(), name);
    if (category) return category;
    try {
        category = await saveAssetCategory({ name, hidden: true });
        _hidden_categories = null;
        return category;
    } catch (error) {
        _hidden_categories = null;
        category = findHiddenCategory(await queryHiddenCategories(), name);
        if (category) return category;
        throw error;
    }
}

/**
 * Find the asset type with the given name in the category, or create it.
 * When the create collides with another client, the list is read again.
 */
export async function ensureAssetType(category_id: string, name: string) {
    let type = findOldestByName(await queryCategoryTypes(category_id), name);
    if (type) return type;
    try {
        type = await saveAssetType({ name, brand: 'PlaceOS', category_id });
        _category_types.delete(category_id);
        return type;
    } catch (error) {
        _category_types.delete(category_id);
        type = findOldestByName(await queryCategoryTypes(category_id), name);
        if (type) return type;
        throw error;
    }
}

/**
 * Resolve the ID of a hidden asset type, creating the category and type when
 * missing. The ID is cached per type. A failed lookup is not cached.
 */
export function resolveHiddenAssetTypeId(
    category_name: string,
    type_name: string,
): Promise<string> {
    const key = `${category_name}/${type_name}`;
    if (!_hidden_type_ids.has(key)) {
        const request = ensureHiddenCategory(category_name)
            .then((category) => ensureAssetType(category.id, type_name))
            .then((type) => type.id);
        request.catch(() => _hidden_type_ids.delete(key));
        _hidden_type_ids.set(key, request);
    }
    return _hidden_type_ids.get(key);
}

/** Query the assets of one type across the zones, flattening the results */
export async function queryTypeAssetsForZones(
    type_id: string,
    zone_ids: string[],
): Promise<Asset[]> {
    const results = await Promise.all(
        zone_ids.map((zone_id) =>
            queryAllAssetPages({ zone_id, type_id }).then((_) => _.data),
        ),
    );
    return flatten<Asset>(results);
}

/**
 * Query the assets of one type within a building or region. These assets list
 * every zone they are in (org, region, building and level) in `zones`.
 */
export async function queryTypeAssetsInZone(
    type_id: string,
    zone_id: string,
): Promise<Asset[]> {
    const response = await queryAllAssetPages({ zones: [zone_id], type_id });
    return response.data;
}

function filter_hidden_items<T extends { data: readonly AssetCategory[] }>(
    response: T,
): T {
    return {
        ...response,
        data: response.data.filter((item) => !item?.hidden),
    };
}

/** Page size of the queries that load each page */
const PAGE_LIMIT = 500;
/** Upper bound on pages loaded by `loadAllPages` (100 × 500 items) */
const MAX_PAGES = 100;

/**
 * Data of `first` and of the pages after it, up to `MAX_PAGES` pages.
 * `total` is the total of the last page loaded.
 */
async function loadAllPages<T>(first: Page<readonly T[]>) {
    let response = first;
    const data: T[] = [...response.data];
    for (let page = 1; page < MAX_PAGES; page++) {
        const next = response.next?.();
        if (!next) break;
        response = await next;
        data.push(...response.data);
    }
    return { total: response.total, next: () => null, data };
}

/** IDs of the categories that are not hidden, from all pages */
async function visible_category_ids() {
    const response = await loadAllPages(
        await asset_categories.query({ limit: PAGE_LIMIT }).then(orThrowPage),
    );
    return new Set(
        response.data.filter((item) => !item?.hidden).map((item) => item.id),
    );
}

export async function queryAssetCategories(query: AssetCategoryQuery = {}) {
    if (query.hidden === true)
        return asset_categories.query(query).then(orThrowPage);
    const { hidden, ...rest } = query;
    return filter_hidden_items(
        await asset_categories.query(rest).then(orThrowPage),
    );
}

export async function queryAssetTypes(query: AssetTypeQuery = {}) {
    // The asset type API has no `hidden` filter: hidden types are the types
    // of hidden categories
    const { hidden, ...rest } = query;
    if (hidden === true) return asset_types.query(rest).then(orThrowPage);
    const [response, visible_ids] = await Promise.all([
        asset_types.query(rest).then(orThrowPage),
        visible_category_ids(),
    ]);
    return {
        ...response,
        data: response.data.filter((item) => visible_ids.has(item.category_id)),
    };
}

export async function queryAssets(query: AssetQuery = {}) {
    const { hidden, ...rest } = query;
    if (hidden === true) return assets_v7.query(rest).then(orThrowPage);
    const [response, types] = await Promise.all([
        assets_v7.query(rest).then(orThrowPage),
        queryAssetTypes({
            ...(rest.zone_id ? { zone_id: rest.zone_id } : {}),
            limit: 2000,
        }),
    ]);
    const visible_type_ids = new Set(types.data.map((item) => item.id));
    return {
        ...response,
        data: response.data.filter((item) =>
            visible_type_ids.has(item.asset_type_id),
        ),
    };
}

////////////////////////////////
////    Asset Categories    ////
////////////////////////////////

export function saveAssetCategory(category: Partial<AssetCategory>) {
    const body = pickFields(category, ASSET_CATEGORY_FIELDS);
    return category.id
        ? asset_categories.update({ id: category.id, body }).then(orThrow)
        : asset_categories.create({ body }).then(orThrow);
}

//////////////////////////////
////     Asset Groups     ////
//////////////////////////////

const _GROUPS_CACHE = new Map<string, AssetGroup[]>();

/**
 * Query assets, following pagination until every page is loaded.
 * `zones` is a comma separated list, assets must be in every zone listed.
 */
async function queryAllAssetPages(query: AssetQuery = {}) {
    return loadAllPages(
        await assets_v7
            .query({ ...query, limit: query.limit || PAGE_LIMIT })
            .then(orThrowPage),
    );
}

export async function queryAssetGroupsExtended(
    query: AssetGroupQuery = {},
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
    // Booking availability uses `zones`, while asset APIs use `zone_id`.
    const zone_id = query.zone_id || query.zones || undefined;
    const filters = { zone_id, q: query.q || undefined };
    const [types, assets] = await Promise.all([
        // Leaves out the types of hidden categories, such as desks
        queryAssetTypes({
            ...filters,
            category_id: query.category_id || undefined,
        }),
        queryAllAssetPages({ ...filters, type_id: query.type_id || undefined }),
    ]);
    let groups = [...types.data];
    if (query.type_id) {
        groups = groups.filter((item) => item.id === query.type_id);
    }
    const visible_type_ids = new Set(groups.map((item) => item.id));
    const assets_by_type = new Map<string, Asset[]>();
    for (const asset of assets.data) {
        if (!visible_type_ids.has(asset.asset_type_id)) continue;
        const list = assets_by_type.get(asset.asset_type_id) || [];
        list.push(asset);
        assets_by_type.set(asset.asset_type_id, list);
    }
    const list: AssetGroup[] = groups.map((group) => ({
        ...group,
        assets: assets_by_type.get(group.id) || [],
    }));
    _GROUPS_CACHE.set(cache_key, list);
    // Clear cache after 5 minutes
    setTimeout(() => _GROUPS_CACHE.delete(cache_key), 5 * 60 * 1000);
    return list;
}

export function saveAssetType(
    product: Partial<AssetType> & Partial<AssetGroup>,
) {
    const body = pickFields(product, ASSET_TYPE_FIELDS);
    return product.id
        ? asset_types.update({ id: product.id, body }).then(orThrow)
        : asset_types.create({ body }).then(orThrow);
}

////////////////////////////////
////          Assets        ////
////////////////////////////////
//
export function saveAsset(asset: Partial<Asset>) {
    const body = assetBody(asset);
    return asset.id
        ? assets_v7.update({ id: asset.id, body }).then(orThrow)
        : assets_v7.create({ body }).then(orThrow);
}

////////////////////////////////
////      Assets (Bulk)     ////
////////////////////////////////

export function saveAssetsInBulk(assets: Partial<Asset>[]) {
    if (!assets?.length) return Promise.resolve([]);
    const body = assets.map(assetBody);
    return assets.every((item) => item?.id)
        ? assets_v7.bulkUpdate({ body }).then(orThrow)
        : assets_v7.bulkCreate({ body }).then(orThrow);
}

/////////////////////////////////
////  Asset Purchase Orders  ////
/////////////////////////////////

export function saveAssetPurchaseOrder(order: Partial<AssetPurchaseOrder>) {
    const fields = pickFields(order, PURCHASE_ORDER_FIELDS);
    const body: AssetPurchaseOrderInput =
        'supplier_details' in fields
            ? {
                  ...fields,
                  supplier_details: toJsonValue(fields.supplier_details),
              }
            : fields;
    return order.id
        ? asset_purchase_orders.update({ id: order.id, body }).then(orThrow)
        : asset_purchase_orders.create({ body }).then(orThrow);
}

//////////////////////////////////////
////     Asset Helper Methods     ////
//////////////////////////////////////

export function getGroupsWithAssets(query: AssetTypeQuery = {}) {
    return queryAssetTypes(query);
}

const _GROUP_FULL_CACHE: Map<string, AssetGroup> = new Map();

export async function showGroupFull(id: string, query: AssetQuery = {}) {
    if (_GROUP_FULL_CACHE.has(id)) return _GROUP_FULL_CACHE.get(id);
    const [type, categories, assets, purchase_orders] = await Promise.all([
        asset_types.show({ id }).then(orThrow),
        queryAssetCategories(),
        queryAssets({ ...query, type_id: id, limit: 2000 }),
        queryAssetPurchaseOrders(),
    ]);
    const product: AssetGroup = { ...type };
    product.category = categories.data.find(
        (category) => category.id === product.category_id,
    );
    product.assets = assets.data.filter(
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

/**
 * Check the asset requests of a parent against asset availability. Returns a
 * function that removes the changed asset bookings and creates the new ones.
 * The parent is a calendar event, or a native booking when `from_booking` or
 * `from_bookings` is set
 */
export async function validateAssetRequestsForResource(
    {
        id,
        ical_uid,
        from_booking,
        from_bookings,
    }: Partial<Pick<CalendarEvent, 'id' | 'ical_uid' | 'from_bookings'>> & {
        from_booking?: boolean;
    },
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
    const native = !!(from_booking || from_bookings);
    // The API has no filter for the parent booking, so a native query returns
    // every asset request of the host on the day. Keep only this parent's
    const bookings =
        id && (ical_uid || native)
            ? (
                  await queryBookings({
                      period_start: getUnixTime(startOfDay(date)),
                      period_end: getUnixTime(endOfDay(date)),
                      type: 'asset-request',
                      email: host,
                      event_id: native ? '' : id,
                      ical_uid,
                  })
              ).filter(
                  (_) =>
                      !native ||
                      String(_.extension_data?.parent_id) === String(id),
              )
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
            request.items.map(({ id, item_ids, quantity }) => {
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
        return () =>
            native
                ? createBooking({
                      ...new Booking(asset_data).toJSON(),
                      parent_id: parentBookingId(id),
                  })
                : createBooking(new Booking(asset_data), {
                      ical_uid,
                      event_id: id,
                  });
    });
    return async () => {
        await Promise.all(changed_requests.map(([id]) => removeBooking(id)));
        await Promise.all(processed_requests.map((create) => create()));
    };
}
