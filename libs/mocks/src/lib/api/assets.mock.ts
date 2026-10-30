import { predictableRandomInt } from '@placeos/common';
import { registerMockEndpoint } from '@placeos/ts-client';
import {
    generateMockParkingAssets,
    getAllMockParkingAssets,
    MOCK_ASSETS,
    MOCK_CATEGORIES,
    MOCK_PRODUCTS,
    MOCK_PURCHASE_ORDERS,
} from './assets.data';

const BASE_PATH = '/api/engine/v2';

/**
 * Register the show, create, update and delete endpoints for a mock dataset.
 * The list endpoint differs per resource, so callers register it themselves.
 */
function registerCrudEndpoints(
    path: string,
    dataset: any[],
    id_prefix: string,
    label: string,
) {
    const indexOf = (id: string) => {
        const index = dataset.findIndex((e) => e.id === id);
        if (index < 0)
            throw {
                status: 404,
                message: `Unable to find ${label} with ID ${id}`,
            };
        return index;
    };
    registerMockEndpoint({
        path: `${path}/:id`,
        method: 'GET',
        callback: (req) => dataset[indexOf(req.route_params.id)],
    });
    registerMockEndpoint({
        path,
        method: 'POST',
        callback: (req) => {
            const item = {
                ...req.body,
                id: `${id_prefix}${predictableRandomInt(999)}`,
            };
            dataset.push(item);
            return item;
        },
    });
    registerMockEndpoint({
        path: `${path}/:id`,
        method: 'PUT',
        callback: (req) => {
            const item = { ...req.body };
            dataset.splice(indexOf(req.route_params.id), 1, item);
            return item;
        },
    });
    registerMockEndpoint({
        path: `${path}/:id`,
        method: 'DELETE',
        callback: (req) => {
            dataset.splice(indexOf(req.route_params.id), 1);
        },
    });
}

export function registerMockAssets() {
    registerMockEndpoint({
        path: `${BASE_PATH}/asset_categories`,
        method: 'GET',
        callback: (req) => {
            let results = MOCK_CATEGORIES;
            if (req.query_params?.hidden !== undefined) {
                const hidden = String(req.query_params.hidden) === 'true';
                results = results.filter((c) => !!c.hidden === hidden);
            }
            return results;
        },
    });
    registerCrudEndpoints(
        `${BASE_PATH}/asset_categories`,
        MOCK_CATEGORIES,
        '-category-',
        'asset category',
    );

    registerMockEndpoint({
        path: `${BASE_PATH}/asset_types`,
        method: 'GET',
        callback: (req) => {
            let results = MOCK_PRODUCTS;
            if (req.query_params?.category_id) {
                results = results.filter(
                    (p) => p.category_id === req.query_params.category_id,
                );
            }
            return results;
        },
    });
    registerCrudEndpoints(
        `${BASE_PATH}/asset_types`,
        MOCK_PRODUCTS,
        '-product-',
        'asset type',
    );

    registerMockEndpoint({
        path: `${BASE_PATH}/asset_purchase_orders`,
        method: 'GET',
        callback: () => MOCK_PURCHASE_ORDERS,
    });
    registerCrudEndpoints(
        `${BASE_PATH}/asset_purchase_orders`,
        MOCK_PURCHASE_ORDERS,
        '-purchase-order-',
        'purchase order',
    );

    registerMockEndpoint({
        path: `${BASE_PATH}/assets`,
        method: 'GET',
        callback: (req) => {
            const type_id = req.query_params?.type_id;
            const zone_id = req.query_params?.zone_id;
            if (type_id === '_parking_type_' && zone_id) {
                return generateMockParkingAssets(zone_id);
            }
            let results = [...MOCK_ASSETS, ...getAllMockParkingAssets()];
            if (type_id) {
                results = results.filter((a) => a.asset_type_id === type_id);
            }
            if (zone_id) {
                results = results.filter(
                    (a) =>
                        a.zone_id === zone_id ||
                        (a.zones || []).includes(zone_id),
                );
            }
            return results;
        },
    });
    registerCrudEndpoints(
        `${BASE_PATH}/assets`,
        MOCK_ASSETS,
        '-asset-',
        'asset',
    );
}
