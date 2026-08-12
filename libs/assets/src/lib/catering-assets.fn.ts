import { CateringItem, flatten } from '@placeos/common';
import {
    PlaceAsset,
    queryAssetCategories,
    queryAssets,
    queryAssetTypes,
    removeAsset,
    showMetadata,
} from '@placeos/ts-client';
import {
    findOldestByName,
    saveAsset,
    saveAssetCategory,
    saveAssetType,
} from './assets.fn';

const CATERING_CATEGORY_NAME = '_CATERING_';
const CATERING_TYPE_PREFIX = 'CATERING:';
const STANDALONE_CATERER_NAME = '_STANDALONE_';
const STANDALONE_CATERER_LABEL = 'standalone';

let _catering_category_id: string | null = null;
let _catering_category_id_promise: Promise<string> | null = null;
let _hidden_categories_promise: Promise<any[]> | null = null;
let _catering_types_promise: Promise<any[]> | null = null;

function normalise_name(name: string = '') {
    return name.trim().toLowerCase();
}

function reset_hidden_categories_cache() {
    _hidden_categories_promise = null;
}

function reset_catering_types_cache() {
    _catering_types_promise = null;
}

async function query_hidden_categories() {
    if (!_hidden_categories_promise) {
        _hidden_categories_promise = queryAssetCategories({
            hidden: true,
            limit: 500,
        })
            .then((_) => _.data)
            .catch(() => []);
    }
    return _hidden_categories_promise;
}

async function ensure_hidden_category(name: string) {
    let category = findOldestByName(await query_hidden_categories(), name);
    if (category) return category;
    reset_hidden_categories_cache();
    category = findOldestByName(await query_hidden_categories(), name);
    if (category) return category;
    try {
        category = await saveAssetCategory({
            name,
            hidden: true,
        } as any);
        reset_hidden_categories_cache();
        return category;
    } catch (error) {
        reset_hidden_categories_cache();
        category = findOldestByName(await query_hidden_categories(), name);
        if (category) return category;
        throw error;
    }
}

export function toCateringTypeName(caterer: string = '') {
    const value = `${caterer || ''}`.trim();
    const name =
        !value ||
        normalise_name(value) === STANDALONE_CATERER_LABEL ||
        value === STANDALONE_CATERER_NAME
            ? STANDALONE_CATERER_NAME
            : value;
    return `${CATERING_TYPE_PREFIX}${name}`;
}

export function fromCateringTypeName(type_name: string = '') {
    const name = type_name.startsWith(CATERING_TYPE_PREFIX)
        ? type_name.slice(CATERING_TYPE_PREFIX.length)
        : type_name;
    return name === STANDALONE_CATERER_NAME ? STANDALONE_CATERER_LABEL : name;
}

export function isCateringTypeName(type_name: string = '') {
    return type_name.startsWith(CATERING_TYPE_PREFIX);
}

export function resolveCateringCategoryId(): Promise<string> {
    if (_catering_category_id) return Promise.resolve(_catering_category_id);
    if (!_catering_category_id_promise) {
        _catering_category_id_promise = ensure_hidden_category(
            CATERING_CATEGORY_NAME,
        ).then((category) => {
            _catering_category_id = category.id;
            return category.id;
        });
    }
    return _catering_category_id_promise;
}

function query_catering_types(): Promise<any[]> {
    if (!_catering_types_promise) {
        _catering_types_promise = resolveCateringCategoryId()
            .then((category_id) => queryAssetTypes({ category_id, limit: 500 }))
            .then((_) => _.data.filter((type) => isCateringTypeName(type.name)))
            .catch(() => []);
    }
    return _catering_types_promise;
}

export async function resolveCateringTypeId(
    caterer: string = '',
): Promise<string> {
    const type_name = toCateringTypeName(caterer);
    const types = await query_catering_types();
    const type = findOldestByName(types, type_name);
    if (type) return type.id;
    try {
        const category_id = await resolveCateringCategoryId();
        const type = await saveAssetType({
            name: type_name,
            brand: 'PlaceOS',
            category_id,
        } as any);
        reset_catering_types_cache();
        return type.id;
    } catch (error) {
        reset_catering_types_cache();
        const types = await query_catering_types();
        const type = findOldestByName(types, type_name);
        if (type) return type.id;
        throw error;
    }
}

export function toCateringItem(asset: PlaceAsset, caterer: string) {
    const details = (asset.other_data || {}) as any;
    return new CateringItem({
        id: asset.id,
        name: asset.name || asset.identifier || asset.id,
        caterer,
        category: details.category || '',
        description: details.description || '',
        unit_price: +details.unit_price || 0,
        quantity: +details.quantity || 0,
        options: details.options instanceof Array ? details.options : [],
        tags: details.tags instanceof Array ? details.tags : [],
        accept_points: !!details.accept_points,
        discount_cap: +details.discount_cap || 0,
        images:
            asset.images instanceof Array
                ? asset.images
                : details.images instanceof Array
                  ? details.images
                  : [],
        hide_for_zones:
            details.hide_for_zones instanceof Array
                ? details.hide_for_zones
                : [],
    });
}

function to_asset_data(
    item: Partial<CateringItem>,
    zone_id: string,
    asset_type_id: string,
): Partial<PlaceAsset> {
    const id = item.id || undefined;
    return {
        id,
        name: item.name || id,
        identifier: item.name || id,
        zone_id,
        asset_type_id,
        images: [...(item.images || [])],
        other_data: {
            category: item.category || '',
            description: item.description || '',
            unit_price: item.unit_price || 0,
            quantity: item.quantity || 0,
            options: item.options || [],
            tags: item.tags || [],
            accept_points: !!item.accept_points,
            discount_cap: item.discount_cap || 0,
            hide_for_zones: item.hide_for_zones || [],
        } as any,
    };
}

async function queryLegacyCateringItems(
    zone_id: string,
): Promise<CateringItem[]> {
    const metadata = await showMetadata(zone_id, 'catering').catch(() => null);
    return metadata?.details instanceof Array
        ? metadata.details.map((item) => new CateringItem(item))
        : [];
}

export async function queryCateringItems(
    zone_id: string,
): Promise<CateringItem[]> {
    if (!zone_id) return [];
    const types = await query_catering_types();
    if (!types.length) return queryLegacyCateringItems(zone_id);
    const results = await Promise.all(
        types.map((type) =>
            queryAssets({
                zone_id,
                type_id: type.id,
                limit: 500,
            }).then((assets) =>
                assets.data.map((asset) =>
                    toCateringItem(asset, fromCateringTypeName(type.name)),
                ),
            ),
        ),
    );
    const items = flatten<CateringItem>(results);
    const menu = items.length ? items : await queryLegacyCateringItems(zone_id);
    return menu.sort((a, b) => a.name.localeCompare(b.name));
}

export async function queryCateringItemsForZones(
    zone_ids: string[],
): Promise<CateringItem[]> {
    if (!zone_ids?.length) return [];
    const results = await Promise.all(
        zone_ids.map((zone_id) => queryCateringItems(zone_id)),
    );
    return flatten<CateringItem>(results);
}

export async function saveCateringItem(
    item: Partial<CateringItem>,
    zone_id: string,
): Promise<CateringItem> {
    const asset_type_id = await resolveCateringTypeId(item.caterer);
    const asset = to_asset_data(item, zone_id, asset_type_id);
    let saved: PlaceAsset;
    try {
        saved = await saveAsset(asset);
    } catch (error) {
        if (!asset.id || (error as any)?.status !== 404) throw error;
        const { id, ...new_asset } = asset;
        saved = await saveAsset(new_asset);
    }
    return toCateringItem(
        saved,
        fromCateringTypeName(toCateringTypeName(item.caterer)),
    );
}

export function deleteCateringItem(id: string) {
    return removeAsset(id);
}
