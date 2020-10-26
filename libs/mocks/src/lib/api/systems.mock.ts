
import { registerSystem, registerMockEndpoint } from '@placeos/ts-client';

import { createSystem } from '../systems-bindings.mock';
import { MOCK_SPACES } from './spaces.data';

MOCK_SPACES.forEach((space: any, index) => {
    registerSystem(space.id, createSystem(space.id) as any);
});

registerMockEndpoint({
    path: '/api/engine/v2/systems',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        return MOCK_SPACES;
    }
});
