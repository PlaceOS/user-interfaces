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

const update = (dataset) => (id, data) => {
    const index = dataset.findIndex((e) => e.id === id);
    if (index < 0)
        throw {
            status: 404,
            message: `Unable to find booking with ID ${id}`,
        };
    const new_event = { ...data };
    dataset.splice(index, 1, new_event);
    return new_event;
};

export function registerMockAssets() {
    registerMockEndpoint({
        path: `${BASE_PATH}/asset_categories`,
        metadata: {},
        method: 'GET',
        callback: (req) => {
            let results = MOCK_CATEGORIES;
            if (req.query_params?.hidden !== undefined) {
                const hidden = String(req.query_params.hidden) === 'true';
                results = results.filter((c) => !!(c as any).hidden === hidden);
            }
            return results;
        },
    });

    registerMockEndpoint({
        path: `${BASE_PATH}/asset_categories/:id`,
        metadata: {},
        method: 'GET',
        callback: (_) => {
            const event = MOCK_CATEGORIES.find(
                (e) => e.id === _.route_params.id,
            );
            if (!event)
                throw {
                    status: 404,
                    message: `Unable to find booking with ID ${_.route_params.id}`,
                };
            return event;
        },
    });

    registerMockEndpoint({
        path: `${BASE_PATH}/asset_categories`,
        metadata: {},
        method: 'POST',
        callback: (request) => {
            const new_event = {
                ...request.body,
                id: `-category-${predictableRandomInt(999)}`,
            };
            MOCK_CATEGORIES.push(new_event);
            return new_event;
        },
    });

    registerMockEndpoint({
        path: `${BASE_PATH}/asset_categories/:id`,
        metadata: {},
        method: 'PUT',
        callback: (req) =>
            update(MOCK_CATEGORIES)(req.route_params.id, { ...req.body }),
    });

    registerMockEndpoint({
        path: `${BASE_PATH}/asset_categories/:id`,
        metadata: {},
        method: 'DELETE',
        callback: (req) => {
            const index = MOCK_CATEGORIES.findIndex(
                (e) => e.id === req.route_params.id,
            );
            if (index < 0)
                throw {
                    status: 404,
                    message: `Unable to find booking with ID ${req.route_params.id}`,
                };
            MOCK_CATEGORIES.splice(index, 1);
            return;
        },
    });

    registerMockEndpoint({
        path: `${BASE_PATH}/asset_types`,
        metadata: {},
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

    registerMockEndpoint({
        path: `${BASE_PATH}/asset_types/:id`,
        metadata: {},
        method: 'GET',
        callback: (_) => {
            const event = MOCK_PRODUCTS.find((e) => e.id === _.route_params.id);
            if (!event)
                throw {
                    status: 404,
                    message: `Unable to find booking with ID ${_.route_params.id}`,
                };
            return event;
        },
    });

    registerMockEndpoint({
        path: `${BASE_PATH}/asset_types`,
        metadata: {},
        method: 'POST',
        callback: (request) => {
            const new_event = {
                ...request.body,
                id: `-product-${predictableRandomInt(999)}`,
            };
            MOCK_PRODUCTS.push(new_event);
            return new_event;
        },
    });

    registerMockEndpoint({
        path: `${BASE_PATH}/asset_types/:id`,
        metadata: {},
        method: 'PUT',
        callback: (req) =>
            update(MOCK_PRODUCTS)(req.route_params.id, { ...req.body }),
    });

    registerMockEndpoint({
        path: `${BASE_PATH}/asset_types/:id`,
        metadata: {},
        method: 'DELETE',
        callback: (req) => {
            const index = MOCK_PRODUCTS.findIndex(
                (e) => e.id === req.route_params.id,
            );
            if (index < 0)
                throw {
                    status: 404,
                    message: `Unable to find booking with ID ${req.route_params.id}`,
                };
            MOCK_PRODUCTS.splice(index, 1);
            return;
        },
    });

    registerMockEndpoint({
        path: `${BASE_PATH}/asset_purchase_orders`,
        metadata: {},
        method: 'GET',
        callback: (_) => {
            const events = MOCK_PURCHASE_ORDERS;
            return events;
        },
    });

    registerMockEndpoint({
        path: `${BASE_PATH}/asset_purchase_orders/:id`,
        metadata: {},
        method: 'GET',
        callback: (_) => {
            const event = MOCK_PURCHASE_ORDERS.find(
                (e) => e.id === _.route_params.id,
            );
            if (!event)
                throw {
                    status: 404,
                    message: `Unable to find booking with ID ${_.route_params.id}`,
                };
            return event;
        },
    });

    registerMockEndpoint({
        path: `${BASE_PATH}/asset_purchase_orders`,
        metadata: {},
        method: 'POST',
        callback: (request) => {
            const new_event = {
                ...request.body,
                id: `-purchase-order-${predictableRandomInt(999)}`,
            };
            MOCK_PURCHASE_ORDERS.push(new_event);
            return new_event;
        },
    });

    registerMockEndpoint({
        path: `${BASE_PATH}/asset_purchase_orders/:id`,
        metadata: {},
        method: 'PUT',
        callback: (req) =>
            update(MOCK_PURCHASE_ORDERS)(req.route_params.id, { ...req.body }),
    });

    registerMockEndpoint({
        path: `${BASE_PATH}/asset_purchase_orders/:id`,
        metadata: {},
        method: 'DELETE',
        callback: (req) => {
            const index = MOCK_PURCHASE_ORDERS.findIndex(
                (e) => e.id === req.route_params.id,
            );
            if (index < 0)
                throw {
                    status: 404,
                    message: `Unable to find purchase order with ID ${req.route_params.id}`,
                };
            MOCK_PURCHASE_ORDERS.splice(index, 1);
            return;
        },
    });

    registerMockEndpoint({
        path: `${BASE_PATH}/assets`,
        metadata: {},
        method: 'GET',
        callback: (req) => {
            const type_id = req.query_params?.type_id;
            const zone_id = req.query_params?.zone_id;
            if (type_id === '_parking_type_' && zone_id) {
                return generateMockParkingAssets(zone_id);
            }
            let results = [...MOCK_ASSETS, ...getAllMockParkingAssets()];
            if (type_id) {
                results = results.filter(
                    (a) => (a as any).asset_type_id === type_id,
                );
            }
            if (zone_id) {
                results = results.filter((a) => (a as any).zone_id === zone_id);
            }
            return results;
        },
    });

    registerMockEndpoint({
        path: `${BASE_PATH}/assets/:id`,
        metadata: {},
        method: 'GET',
        callback: (_) => {
            const event = MOCK_ASSETS.find((e) => e.id === _.route_params.id);
            if (!event)
                throw {
                    status: 404,
                    message: `Unable to find booking with ID ${_.route_params.id}`,
                };
            return event;
        },
    });

    registerMockEndpoint({
        path: `${BASE_PATH}/assets`,
        metadata: {},
        method: 'POST',
        callback: (request) => {
            const new_event = {
                ...request.body,
                id: `-asset-${predictableRandomInt(999)}`,
            };
            MOCK_ASSETS.push(new_event);
            return new_event;
        },
    });

    registerMockEndpoint({
        path: `${BASE_PATH}/assets/:id`,
        metadata: {},
        method: 'PUT',
        callback: (req) =>
            update(MOCK_ASSETS)(req.route_params.id, { ...req.body }),
    });

    registerMockEndpoint({
        path: `${BASE_PATH}/assets/:id`,
        metadata: {},
        method: 'DELETE',
        callback: (req) => {
            const index = MOCK_ASSETS.findIndex(
                (e) => e.id === req.route_params.id,
            );
            if (index < 0)
                throw {
                    status: 404,
                    message: `Unable to find booking with ID ${req.route_params.id}`,
                };
            MOCK_ASSETS.splice(index, 1);
            return;
        },
    });
}
