import { registerMockEndpoint } from '@placeos/ts-client';

import { MOCK_EVENTS } from './events.data';
import { MOCK_SPACES } from './spaces.data';

import * as dayjs from 'dayjs';

registerMockEndpoint({
    path: '/api/staff/v1/calendars/availability',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        const start = dayjs(+request.query_params.period_start * 1000);
        const end = dayjs(+request.query_params.period_end * 1000);
        const zones = (request.query_params.zone_ids || '').split(',').filter(i => !!i);
        const systems = (request.query_params.system_ids || '').split(',').filter(i => !!i);

        const spaces = MOCK_SPACES.filter((space) =>
            zones.length
                ? zones.reduce((has, zone) => has && space.zones.includes(zone), true)
                : systems.length
                    ? systems.includes(space.id)
                    : true
        )
            .filter((space) => {
                const bookings = MOCK_EVENTS.filter((event) =>
                    event.attendees.find((user) => user.id === space.id)
                );
                for (const event of bookings) {
                    const event_start = dayjs(event.event_start * 1000);
                    const event_end = dayjs(event.event_end * 1000);
                    if (
                        (start.isAfter(event_start, 's') && start.isBefore(event_end, 'm')) ||
                        (end.isAfter(event_start, 'm') && end.isBefore(event_end, 'm')) ||
                        (event_start.isAfter(start, 'm') && event_start.isBefore(end, 'm'))
                    ) {
                        return false;
                    }
                }
                return true;
            });
        const output = {};
        spaces.forEach(space => output[space.email] = space);
        return output;
    },
});
