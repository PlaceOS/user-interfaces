import { predictableRandomInt, timePeriodsIntersect } from '@placeos/common';
import { registerMockEndpoint } from '@placeos/ts-client';

import { MOCK_BOOKINGS } from './bookings.data';

registerMockEndpoint({
    path: '/api/staff/v1/bookings',
    metadata: {},
    method: 'GET',
    callback: (_) => {
        const events = MOCK_BOOKINGS.filter(
            (event) =>
                timePeriodsIntersect(
                    _.query_params.period_start,
                    _.query_params.period_end,
                    event.booking_start,
                    event.booking_end
                ) && event.type === _.query_params.type
        );
        return events;
    },
});

registerMockEndpoint({
    path: '/api/staff/v1/bookings',
    metadata: {},
    method: 'POST',
    callback: (request) => {
        const new_event = {
            ...request.body,
            id: `-booking-${predictableRandomInt(999)}`,
        };
        MOCK_BOOKINGS.push(new_event);
        return new_event;
    },
});
