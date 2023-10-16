import { predictableRandomInt, timePeriodsIntersect } from '@placeos/common';
import { mockSystem, registerMockEndpoint } from '@placeos/ts-client';
import { MOCK_EVENTS } from './events.data';
import { ACTIVE_USER, MOCK_STAFF } from './users.data';

export const EVENT_MOCKS = registerMocks();

function registerMocks() {
    registerMockEndpoint({
        path: '/api/staff/v1/events',
        metadata: {},
        method: 'GET',
        callback: (_) => {
            let events = MOCK_EVENTS;
            if (!_.query_params.zone_ids) {
                events = events.filter(
                    (event) =>
                        !!event.attendees.find(
                            (user) => user.email === ACTIVE_USER.email
                        )
                );
            }
            if (_.query_params.period_start) {
                events = events.filter((e) =>
                    timePeriodsIntersect(
                        +_.query_params.period_start,
                        +_.query_params.period_end,
                        e.event_start,
                        e.event_end
                    )
                );
            }
            return events;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/events',
        metadata: {},
        method: 'POST',
        callback: (request) => {
            const new_event = {
                ...request.body,
                id: `-cal-event-${predictableRandomInt(999)}`,
            };
            new_event.attendees = [
                MOCK_STAFF.find((_) => _.email === new_event.host),
                ...(new_event.attendees || []),
            ];
            new_event.attendees.forEach((user) => {
                if (user.zones) user.resource = true;
            });

            if (new_event.system) {
                new_event.attendees = [
                    ...(new_event.attendees || []),
                    { ...new_event.system, resource: true },
                ];
            }
            MOCK_EVENTS.push(new_event);

            const system = mockSystem(new_event.system?.id);
            system?.Bookings[0]?.$poll_bookings();
            return new_event;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/events/:id',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            const item = MOCK_EVENTS.find(
                (event) => event.id === request.route_params.id
            );
            if (item) {
                return item;
            }
            throw { status: 404, message: 'Event not found' };
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/events/:id',
        metadata: {},
        method: 'DELETE',
        callback: (request) => {
            const index = MOCK_EVENTS.findIndex(
                (event) => event.id === request.route_params.id
            );
            if (index > 0) {
                if (MOCK_EVENTS[index].host === ACTIVE_USER.email) {
                    MOCK_EVENTS.splice(index, 1);
                } else {
                    const user = MOCK_EVENTS[index].attendees.find(
                        (_) => _.email === ACTIVE_USER.email
                    );
                    user.response_status = 'declined';
                }
                return;
            }
            throw { status: 404, message: 'Event not found' };
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/events/:id',
        metadata: {},
        method: 'PATCH',
        callback: (request) => {
            const index = MOCK_EVENTS.findIndex(
                (event) => event.id === request.route_params.id
            );
            if (index >= 0) {
                return MOCK_EVENTS.splice(index, 1, request.body);
            }
            throw { status: 404, message: 'Event not found' };
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/events/:id/guests/:email/checkin',
        metadata: {},
        method: 'POST',
        callback: (request) => {
            const event = MOCK_EVENTS.find(
                (event) => event.id === request.route_params.id
            );
            if (event) {
                const checked_in =
                    (event.extension_data as any).checked_in || [];
                (event.extension_data as any).checked_in = checked_in.concat([
                    request.route_params.email,
                ]);
                return event;
            }
            throw { status: 404, message: 'Guest not found' };
        },
    });
}
