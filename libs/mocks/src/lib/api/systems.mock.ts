import { registerMockEndpoint } from '@placeos/ts-client';

import { createSystem } from '../systems-bindings.mock';
import { MOCK_SPACES } from './spaces.data';

export const SYSTEM_MOCKS = registerMocks();

function registerMocks() {
    MOCK_SPACES.forEach((space: any, index) => createSystem(space));

    registerMockEndpoint({
        path: '/api/engine/v2/systems',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            return request.query_params?.zone_id
                ? MOCK_SPACES.filter((_) =>
                      _.zones.includes(request.query_params.zone_id)
                  )
                : MOCK_SPACES;
        },
    });

    registerMockEndpoint({
        path: '/api/engine/v2/systems/:id',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            const space = MOCK_SPACES.find(_ => _.id === request.route_params.id);
            if (!space) throw { status: 404 };
            return space;
        },
    });
}
