import { registerMockEndpoint } from '@placeos/ts-client';
import { MOCK_ZONES } from './zone.data';

export const EVENT_MOCKS = registerMocks();

function registerMocks() {
    MOCK_ZONES.push({
        id: 'zone-sign01',
        tags: ['signage'],
        display_name: 'Signage 01',
        name: 'Signage 01',
        parent_id: 'bld-01',
    });
    MOCK_ZONES.push({
        id: 'zone-sign02',
        tags: ['signage'],
        display_name: 'Signage 02',
        name: 'Signage 01',
        parent_id: 'bld-01',
    });
    registerMockEndpoint({
        path: '/api/staff/v1/signage-playlists',
        metadata: {},
        method: 'GET',
        callback: (_) => {},
    });
    registerMockEndpoint({
        path: '/api/staff/v1/signage-displays',
        metadata: {},
        method: 'GET',
        callback: (_) => {},
    });
    registerMockEndpoint({
        path: '/api/staff/v1/signage-triggers',
        metadata: {},
        method: 'GET',
        callback: (_) => {},
    });
    registerMockEndpoint({
        path: '/api/staff/v1/signage-media',
        metadata: {},
        method: 'GET',
        callback: (_) => {},
    });
}
