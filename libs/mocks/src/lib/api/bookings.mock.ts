import { predictableRandomInt, timePeriodsIntersect } from '@placeos/common';
import { registerMockEndpoint } from '@placeos/ts-client';

import { MOCK_BOOKINGS } from './bookings.data';

export const BOOKING_MOCKS = registerMocks();

function registerMocks() {
    registerMockEndpoint({
        path: '/api/staff/v1/bookings',
        metadata: {},
        method: 'GET',
        callback: (_) => {
            const events = MOCK_BOOKINGS.filter(
                (event) =>
                    timePeriodsIntersect(
                        +_.query_params.period_start,
                        +_.query_params.period_end,
                        event.booking_start,
                        event.booking_end
                    ) &&
                    (event.type === _.query_params.type ||
                        event.booking_type === _.query_params.type)
            );
            return events;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id',
        metadata: {},
        method: 'GET',
        callback: (_) => {
            const event = MOCK_BOOKINGS.find((e) => e.id === _.route_params.id);
            if (!event)
                throw {
                    status: 404,
                    message: `Unable to find booking with ID ${_.route_params.id}`,
                };
            return event;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id/attendee',
        metadata: {},
        method: 'POST',
        callback: (_) => {
            const event = MOCK_BOOKINGS.find((e) => e.id === _.route_params.id);
            if (!event) {
                throw {
                    status: 404,
                    message: `Unable to find booking with ID ${_.route_params.id}`,
                };
            }
            const user = {
                id: _.body.id,
                name: _.body.name,
                email: _.body.email,
                checked_in: false,
            };
            event.attendees.push(user);
            return user;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id/guests/:email/check_in',
        metadata: {},
        method: 'POST',
        callback: (_) => {
            const { id, email } = _.route_params;
            const event = MOCK_BOOKINGS.find((e) => e.id === id);
            if (!event) {
                throw {
                    status: 404,
                    message: `Unable to find booking with ID ${id}`,
                };
            }
            const guest = event.attendees.find(
                (_) => _.email === decodeURIComponent(email)
            );
            if (!guest) {
                throw {
                    status: 404,
                    message: `Unable to find guest with email ${email}`,
                };
            }
            guest.checked_in = _.query_params.state === 'true';
            return guest;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id/attendee/:email',
        metadata: {},
        method: 'DELETE',
        callback: (_) => {
            const { id, email } = _.route_params;
            const event = MOCK_BOOKINGS.find((e) => e.id === id);
            if (!event) {
                throw {
                    status: 404,
                    message: `Unable to find booking with ID ${id}`,
                };
            }
            event.attendees = event.attendees.filter(
                (_) => _.email !== decodeURIComponent(email)
            );
            return event;
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

    const updateBooking = (id, data) => {
        const index = MOCK_BOOKINGS.findIndex((e) => e.id === id);
        if (index < 0)
            throw {
                status: 404,
                message: `Unable to find booking with ID ${id}`,
            };
        const new_event = { ...data };
        MOCK_BOOKINGS.splice(index, 1, new_event);
        return new_event;
    };

    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id',
        metadata: {},
        method: 'PUT',
        callback: (req) => updateBooking(req.route_params.id, { ...req.body }),
    });

    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id',
        metadata: {},
        method: 'PATCH',
        callback: (req) => updateBooking(req.route_params.id, { ...req.body }),
    });

    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id/approve',
        metadata: {},
        method: 'POST',
        callback: (req) =>
            updateBooking(req.route_params.id, {
                ...req.body,
                approved: true,
                rejected: false,
            }),
    });

    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id/reject',
        metadata: {},
        method: 'POST',
        callback: (req) =>
            updateBooking(req.route_params.id, {
                ...req.body,
                approved: false,
                rejected: true,
            }),
    });

    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id/check_in',
        metadata: {},
        method: 'POST',
        callback: (req) =>
            updateBooking(req.route_params.id, {
                ...req.body,
                checked_in: req.query_params.state === 'true',
            }),
    });

    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id',
        metadata: {},
        method: 'DELETE',
        callback: (req) => {
            const index = MOCK_BOOKINGS.findIndex(
                (e) => e.id === req.route_params.id
            );
            if (index < 0)
                throw {
                    status: 404,
                    message: `Unable to find booking with ID ${req.route_params.id}`,
                };
            MOCK_BOOKINGS.splice(index, 1);
            return;
        },
    });
}
