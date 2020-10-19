import { registerMockEndpoint } from '@placeos/ts-client';
import { MOCK_EVENTS, ACTIVE_USER } from '../mock-data';

registerMockEndpoint({
    path: '/api/staff/v1/events',
    metadata: {},
    method: 'GET',
    callback: (_) => {
        console.log('Event count:', MOCK_EVENTS.length);
        const events = MOCK_EVENTS.filter(
            (event) => !!event.attendees.find((user) => user.email === ACTIVE_USER.email)
        );
        return events;
    },
});

registerMockEndpoint({
    path: '/api/staff/v1/events',
    metadata: {},
    method: 'POST',
    callback: (request) => {
        const new_event = { ...request.body, id: `-cal-event-${Math.floor(Math.random() * 999)}` };
        new_event.attendees.forEach(user => {
            if (user.zones) {
                user.resource = true;
            }
        });
        MOCK_EVENTS.push(new_event);
        return new_event;
    },
});

registerMockEndpoint({
    path: '/api/staff/v1/events/:id',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        const item = MOCK_EVENTS.find((event) => event.id === request.route_params.id);
        if (item) {
            return item;
        }
        throw { status: 404, message: 'Event not found' };
    },
});

registerMockEndpoint({
    path: '/api/staff/v1/events/:id',
    metadata: {},
    method: 'PATCH',
    callback: (request) => {
        const index = MOCK_EVENTS.findIndex((event) => event.id === request.route_params.id);
        if (index >= 0) {
            return MOCK_EVENTS.splice(index, 1, request.body);
        }
        throw { status: 404, message: 'Event not found' };
    },
});
