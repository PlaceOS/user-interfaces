
import { registerMockEndpoint } from '@placeos/ts-client';
import { MOCK_ORGS, MOCK_LEVELS, MOCK_BUILDINGS } from './zone.data';

registerMockEndpoint({
    path: '/api/engine/v2/zones',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        if (request.query_params.tags === 'org') {
            return MOCK_ORGS;
        } else if (request.query_params.tags === 'building') {
            return MOCK_BUILDINGS;
        } else if (request.query_params.tags === 'level') {
            return MOCK_LEVELS;
        }
        throw { status: 404, message: 'Zones not found' }
    }
});

registerMockEndpoint({
    path: '/api/engine/v2/metadata/:id',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        if (request.query_params.name === 'catering') {
            return [];
        }
        return {}
    }
})
