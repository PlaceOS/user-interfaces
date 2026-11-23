import { CateringItem, flatten, toJsonValue } from '@placeos/common';
import {
    type Asset,
    type AssetType,
    asset_types,
    assets as assets_v7,
} from '@placeos/ts-client';
import { orThrow, orThrowPage } from '@placeos/ts-client/compat';
import {
    ensureAssetType,
    ensureHiddenCategory,
    findOldestByName,
    saveAsset,
} from './assets.fn';

const CATERING_CATEGORY_NAME = '_CATERING_';
const CATERING_TYPE_PREFIX = 'CATERING:';
const STANDALONE_CATERER_NAME = '_STANDALONE_';
const STANDALONE_CATERER_LABEL = 'standalone';

let _catering_category_id_promise: Promise<string> | null = null;
let _catering_types_promise: Promise<readonly AssetType[]> | null = null;

function normalise_name(name: string = '') {
    return name.trim().toLowerCase();
}

function reset_catering_types_cache() {
    _catering_types_promise = null;
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

/** Resolve the hidden catering category. A failed lookup is not cached. */
export function resolveCateringCategoryId(): Promise<string> {
    if (!_catering_category_id_promise) {
        const request = ensureHiddenCategory(CATERING_CATEGORY_NAME).then(
            (category) => category.id as string,
        );
        request.catch(() => {
            if (_catering_category_id_promise === request) {
                _catering_category_id_promise = null;
            }
        });
        _catering_category_id_promise = request;
    }
    return _catering_category_id_promise;
}

/** Prefixed catering types. A failed load resolves empty and is not cached. */
function query_catering_types(): Promise<readonly AssetType[]> {
    if (!_catering_types_promise) {
        const request = resolveCateringCategoryId()
            .then((category_id) =>
                asset_types
                    .query({ category_id, limit: 500 })
                    .then(orThrowPage),
            )
            .then((_) =>
                _.data.filter((type) => isCateringTypeName(type.name || '')),
            )
            .catch(() => {
                if (_catering_types_promise === request) {
                    _catering_types_promise = null;
                }
                return [];
            });
        _catering_types_promise = request;
    }
    return _catering_types_promise;
}

export async function resolveCateringTypeId(
    caterer: string = '',
): Promise<string> {
    const type_name = toCateringTypeName(caterer);
    const type = findOldestByName(await query_catering_types(), type_name);
    if (type) return type.id;
    const created = await ensureAssetType(
        await resolveCateringCategoryId(),
        type_name,
    );
    reset_catering_types_cache();
    return created.id;
}

export function toCateringItem(asset: Asset, caterer: string) {
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
): Partial<Asset> {
    const id = item.id || undefined;
    return {
        id,
        name: item.name || id,
        identifier: item.name || id,
        zone_id,
        asset_type_id,
        images: [...(item.images || [])],
        other_data: toJsonValue({
            category: item.category || '',
            description: item.description || '',
            unit_price: item.unit_price || 0,
            quantity: item.quantity || 0,
            options: item.options || [],
            tags: item.tags || [],
            accept_points: !!item.accept_points,
            discount_cap: item.discount_cap || 0,
            hide_for_zones: item.hide_for_zones || [],
        }),
    };
}

export async function queryCateringItems(
    zone_id: string,
): Promise<CateringItem[]> {
    if (!zone_id) return [];
    const types = await query_catering_types();
    if (!types.length) return [];
    const results = await Promise.all(
        types.map((type) =>
            assets_v7
                .query({ zone_id, type_id: type.id, limit: 500 })
                .then(orThrowPage)
                .then((assets) =>
                    assets.data.map((asset) =>
                        toCateringItem(
                            asset,
                            fromCateringTypeName(type.name || ''),
                        ),
                    ),
                ),
        ),
    );
    return flatten<CateringItem>(results).sort((a, b) =>
        a.name.localeCompare(b.name),
    );
}

export async function saveCateringItem(
    item: Partial<CateringItem>,
    zone_id: string,
): Promise<CateringItem> {
    const asset_type_id = await resolveCateringTypeId(item.caterer);
    const asset = to_asset_data(item, zone_id, asset_type_id);
    let saved: Asset;
    try {
        saved = await saveAsset(asset);
    } catch (error) {
        if (!asset.id || error?.status !== 404) throw error;
        const { id, ...new_asset } = asset;
        saved = await saveAsset(new_asset);
    }
    return toCateringItem(
        saved,
        fromCateringTypeName(toCateringTypeName(item.caterer)),
    );
}

export function deleteCateringItem(id: string) {
    return assets_v7.destroy({ id }).then(orThrow);
}
