import { timePeriodsIntersect } from '@placeos/common';
import { mockSystem } from '@placeos/ts-client';
import { mockId, persistById, registerMockEndpoint } from '../session';
import { eventSpaces, MOCK_EVENTS } from './events.data';
import { MOCK_SPACES } from './spaces.data';
import { ACTIVE_USER, MOCK_STAFF } from './users.data';

/** Find the event with the given ID, or throw a 404 */
function findEvent(id: string) {
    const event = MOCK_EVENTS.find((item) => item.id === id);
    if (!event) throw { status: 404, message: 'Event not found' };
    return event;
}

/** Tell the Bookings module of each space to load its events again */
function pollSpaces(ids: (string | undefined)[]) {
    for (const id of new Set(ids)) {
        if (id) mockSystem(id)?.Bookings?.[0]?.$poll_bookings();
    }
}

/** IDs of the event's spaces that already have an event at the same time */
function clashingSpaces(event: any, include_time: boolean) {
    const space_ids = eventSpaces(event);
    const clashes = MOCK_EVENTS.filter(
        (other) =>
            other.id !== event.id &&
            timePeriodsIntersect(
                event.event_start,
                event.event_end,
                other.event_start,
                other.event_end,
            ),
    ).flatMap((other) =>
        eventSpaces(other)
            .filter((id) => space_ids.includes(id))
            .map((asset_id) => ({
                asset_id,
                booking_start: other.event_start,
                booking_end: other.event_end,
            })),
    );
    return include_time
        ? clashes
        : [...new Set(clashes.map((clash) => clash.asset_id))];
}

export function registerMockEvents() {
    // About 45MB as JSON, so only changed events are kept. Rooms show the
    // events from other tabs at once, without their 30 second poll.
    persistById('events', MOCK_EVENTS, {
        onLoad: () => pollSpaces(MOCK_SPACES.map((space) => space.id)),
    });

    registerMockEndpoint({
        path: '/api/staff/v1/events',
        method: 'GET',
        callback: (_) => {
            let events = MOCK_EVENTS;
            if (!_.query_params.zone_ids) {
                // Live API returns user events when no zone_ids are provided
                events = events.filter(
                    (event) =>
                        !!event.attendees.find(
                            (user) => user.email === ACTIVE_USER.email,
                        ),
                );
            } else {
                // Compare whole IDs. Level IDs start with the building ID.
                const zone_ids = `${_.query_params.zone_ids}`.split(',');
                events = events.filter(
                    (event) =>
                        !!event.system?.zones?.some((zone) =>
                            zone_ids.includes(zone),
                        ),
                );
            }
            if (_.query_params.period_start) {
                events = events.filter((e) =>
                    timePeriodsIntersect(
                        +_.query_params.period_start,
                        +_.query_params.period_end,
                        e.event_start,
                        e.event_end,
                    ),
                );
            }
            return events;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/events',
        method: 'POST',
        callback: (request) => {
            const new_event = {
                ...request.body,
                id: mockId('-cal-event-'),
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
            pollSpaces(eventSpaces(new_event));
            return new_event;
        },
    });

    // Before `/events/:id`, which would match `history` as an ID. The mock
    // keeps no change history.
    registerMockEndpoint({
        path: '/api/staff/v1/events/history',
        method: 'GET',
        callback: () => [],
    });

    registerMockEndpoint({
        path: '/api/staff/v1/events/:id',
        method: 'GET',
        callback: (request) => {
            const item = MOCK_EVENTS.find(
                (event) => event.id === request.route_params.id,
            );
            if (item) {
                return item;
            }
            throw { status: 404, message: 'Event not found' };
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/events/:id',
        method: 'DELETE',
        callback: (request) => {
            const index = MOCK_EVENTS.findIndex(
                (event) => event.id === request.route_params.id,
            );
            if (index >= 0) {
                const event = MOCK_EVENTS[index];
                const user = event.attendees.find(
                    (_) => _.email === ACTIVE_USER.email,
                );
                // A guest declines. The host, or staff who do not attend,
                // such as Concierge users, remove the event.
                if (user && event.host !== ACTIVE_USER.email) {
                    user.response_status = 'declined';
                } else {
                    MOCK_EVENTS.splice(index, 1);
                }
                pollSpaces(eventSpaces(event));
                return;
            }
            throw { status: 404, message: 'Event not found' };
        },
    });

    for (const method of ['PATCH', 'PUT'] as const) {
        registerMockEndpoint({
            path: '/api/staff/v1/events/:id',
            method,
            callback: (request) => {
                const index = MOCK_EVENTS.findIndex(
                    (event) => event.id === request.route_params.id,
                );
                if (index < 0)
                    throw { status: 404, message: 'Event not found' };
                const previous = MOCK_EVENTS[index];
                const event = { ...previous, ...request.body };
                MOCK_EVENTS.splice(index, 1, event);
                // Spaces the event leaves must drop it, as well as the
                // spaces it now books
                pollSpaces([
                    request.query_params.system_id,
                    ...eventSpaces(previous),
                    ...eventSpaces(event),
                ]);
                return event;
            },
        });
    }

    registerMockEndpoint({
        path: '/api/staff/v1/events/:id/guests/:email/checkin',
        method: 'POST',
        callback: (request) => {
            const event = findEvent(request.route_params.id);
            const email = decodeURIComponent(request.route_params.email);
            const state = `${request.query_params.state ?? 'true'}` === 'true';
            event.extension_data ||= {};
            const checked_in: string[] = (
                event.extension_data.checked_in || []
            ).filter((item: string) => item !== email);
            event.extension_data.checked_in = state
                ? [...checked_in, email]
                : checked_in;
            const guest = event.attendees.find((user) => user.email === email);
            return { ...(guest || { email }), checked_in: state };
        },
    });
    registerMockEndpoint({
        path: '/api/staff/v1/events/clashing-assets',
        method: 'POST',
        callback: (request) =>
            clashingSpaces(
                request.body || {},
                `${request.query_params.include_clash_time}` === 'true',
            ),
    });

    registerMockEndpoint({
        path: '/api/staff/v1/events/:id/decline',
        method: 'POST',
        callback: (request) => {
            const event = findEvent(request.route_params.id);
            const user = event.attendees.find(
                (item) => item.email === ACTIVE_USER.email,
            );
            if (user) user.response_status = 'declined';
            return event;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/events/:id/attendee',
        method: 'POST',
        callback: (request) => {
            const event = findEvent(request.route_params.id);
            const guest = { ...request.body };
            event.attendees = [
                ...event.attendees.filter((user) => user.email !== guest.email),
                guest,
            ];
            return guest;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/events/:id/attendee/:email',
        method: 'DELETE',
        callback: (request) => {
            const event = findEvent(request.route_params.id);
            const email = decodeURIComponent(request.route_params.email);
            const guest = event.attendees.find((user) => user.email === email);
            if (!guest) throw { status: 404, message: 'Guest not found' };
            event.attendees = event.attendees.filter((user) => user !== guest);
            return guest;
        },
    });

    // The mock keeps one set of extension data for each event, whichever
    // system asks for it
    registerMockEndpoint({
        path: '/api/staff/v1/events/:id/metadata/:system_id',
        method: 'GET',
        callback: (request) =>
            findEvent(request.route_params.id).extension_data || {},
    });

    registerMockEndpoint({
        path: '/api/staff/v1/events/:id/metadata/:system_id',
        method: 'PATCH',
        callback: (request) => {
            const event = findEvent(request.route_params.id);
            event.extension_data = {
                ...(event.extension_data || {}),
                ...request.body,
            };
            return event.extension_data;
        },
    });
}
