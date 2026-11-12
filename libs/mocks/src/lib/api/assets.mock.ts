import {
    MOCK_PAGE_SIZE,
    mockId,
    persist,
    registerMockEndpoint,
} from '../session';
import {
    generateMockParkingAssets,
    MOCK_ASSETS,
    MOCK_CATEGORIES,
    MOCK_PARKING_LEVELS,
    MOCK_PRODUCTS,
    MOCK_PURCHASE_ORDERS,
    mockLevelZones,
} from './assets.data';
import { registerCrudEndpoints } from './crud.mock';
import { MOCK_LEVELS } from './zone.data';

const BASE_PATH = '/api/engine/v2';

/** Bulk asset requests send a JSON string body */
const bulkBody = (body: unknown): any[] => {
    const list = typeof body === 'string' ? JSON.parse(body) : body;
    return Array.isArray(list) ? list : [];
};

export function registerMockAssets() {
    persist('asset-categories', MOCK_CATEGORIES);
    persist('asset-types', MOCK_PRODUCTS);
    persist('asset-purchase-orders', MOCK_PURCHASE_ORDERS);
    persist('assets', MOCK_ASSETS);
    persist('parking-levels', MOCK_PARKING_LEVELS);

    registerMockEndpoint({
        path: `${BASE_PATH}/asset_categories`,
        method: 'GET',
        page_size: MOCK_PAGE_SIZE,
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
        page_size: MOCK_PAGE_SIZE,
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
        page_size: MOCK_PAGE_SIZE,
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
        page_size: MOCK_PAGE_SIZE,
        callback: (req) => {
            const type_id = req.query_params?.type_id;
            const zone_id = req.query_params?.zone_id;
            // `zones` is comma separated, the asset must be in every one
            const zones = `${req.query_params?.zones || ''}`
                .split(',')
                .filter(Boolean);
            if (type_id === '_parking_type_' && zone_id) {
                return generateMockParkingAssets(zone_id);
            }
            if (type_id === '_parking_type_' && zones.length) {
                MOCK_LEVELS.filter(
                    (level) =>
                        level.type === 'parking' &&
                        zones.every((id) =>
                            mockLevelZones(level.id).includes(id),
                        ),
                ).forEach((level) => generateMockParkingAssets(level.id));
            }
            let results = [...MOCK_ASSETS];
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
            if (zones.length) {
                results = results.filter((a) =>
                    zones.every((id) => (a.zones || []).includes(id)),
                );
            }
            return results;
        },
    });
    // Before the `/assets/:id` routes, which would match `bulk` as an ID
    registerMockEndpoint({
        path: `${BASE_PATH}/assets/bulk`,
        method: 'POST',
        callback: (req) => {
            const items = bulkBody(req.body).map((item) => ({
                ...item,
                id: mockId('-asset-'),
            }));
            MOCK_ASSETS.push(...items);
            return items;
        },
    });
    registerMockEndpoint({
        path: `${BASE_PATH}/assets/bulk`,
        method: 'PATCH',
        callback: (req) =>
            bulkBody(req.body).map((changes) => {
                const index = MOCK_ASSETS.findIndex((a) => a.id === changes.id);
                if (index < 0) return changes;
                const item = { ...MOCK_ASSETS[index], ...changes };
                MOCK_ASSETS.splice(index, 1, item);
                return item;
            }),
    });
    registerCrudEndpoints(
        `${BASE_PATH}/assets`,
        MOCK_ASSETS,
        '-asset-',
        'asset',
    );
}
