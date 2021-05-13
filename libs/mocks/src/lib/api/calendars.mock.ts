import { registerMockEndpoint } from '@placeos/ts-client';

import { MOCK_EVENTS } from './events.data';
import { MOCK_SPACES } from './spaces.data';

import * as dayjs from 'dayjs';
import { timePeriodsIntersect } from '@placeos/common';
registerMockEndpoint({
    path: '/api/staff/v1/calendars',
    metadata: {},
    method: 'GET',
    callback: (request) => [],
});

const handleSpaceAvailability = (request) => {
    const start = +request.query_params.period_start;
    const end = +request.query_params.period_end;
    const zones = (request.query_params.zone_ids || '')
        .split(',')
        .filter((i) => !!i);
    const systems = (request.query_params.system_ids || '')
        .split(',')
        .filter((i) => !!i);

    const spaces = MOCK_SPACES.filter((space) =>
        zones.length
            ? zones.reduce(
                  (has, zone) => has && space.zones.includes(zone),
                  true
              )
            : systems.length
            ? systems.includes(space.id)
            : true
    ).filter((space) => {
        const bookings = MOCK_EVENTS.filter((event) =>
            event.attendees.find((user) => user.id === space.id)
        );
        for (const event of bookings) {
            if (
                timePeriodsIntersect(
                    start,
                    end,
                    event.event_start,
                    event.event_end
                )
            )
                return false;
        }
        return true;
    });
    return spaces;
};

registerMockEndpoint({
    path: '/api/staff/v1/calendars/availability',
    metadata: {},
    method: 'GET',
    callback: (request) =>
        handleSpaceAvailability(request).map((_) => ({
            resource: _,
        })),
});

registerMockEndpoint({
    path: '/api/staff/v1/calendars/free_busy',
    metadata: {},
    method: 'GET',
    callback: (request) =>
        handleSpaceAvailability(request).map((_) => ({
            resource: _,
        })),
});
