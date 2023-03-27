import { predictableRandomInt } from '@placeos/common';
import { registerMockEndpoint } from '@placeos/ts-client';
import { MOCK_ASSETS } from './assets.data';

const BASE_PATH = '/api/engine/v2/assets';

export const ASSET_MOCKS = registerMocks();

function registerMocks() {
    registerMockEndpoint({
        path: BASE_PATH,
        metadata: {},
        method: 'GET',
        callback: (_) => {
            const events = MOCK_ASSETS;
            return events;
        },
    });

    registerMockEndpoint({
        path: `${BASE_PATH}/:id`,
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
        path: BASE_PATH,
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

    const updateAsset = (id, data) => {
        const index = MOCK_ASSETS.findIndex((e) => e.id === id);
        if (index < 0)
            throw {
                status: 404,
                message: `Unable to find booking with ID ${id}`,
            };
        const new_event = { ...data };
        MOCK_ASSETS.splice(index, 1, new_event);
        return new_event;
    };

    registerMockEndpoint({
        path: `${BASE_PATH}/:id`,
        metadata: {},
        method: 'PUT',
        callback: (req) => updateAsset(req.route_params.id, { ...req.body }),
    });

    registerMockEndpoint({
        path: `${BASE_PATH}/:id`,
        metadata: {},
        method: 'DELETE',
        callback: (req) => {
            const index = MOCK_ASSETS.findIndex(
                (e) => e.id === req.route_params.id
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
