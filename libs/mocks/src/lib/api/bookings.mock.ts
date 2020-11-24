import { registerMockEndpoint } from '@placeos/ts-client';

registerMockEndpoint({
    path: '/api/staff/v1/bookings',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        return [];
    },
});
