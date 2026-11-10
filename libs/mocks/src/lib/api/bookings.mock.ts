import { timePeriodsIntersect } from '@placeos/common';
import { getUnixTime } from 'date-fns';
import { mockId, persistById, registerMockEndpoint } from '../session';

import { MOCK_BOOKINGS, MOCK_CATERING_BOOKINGS } from './bookings.data';
import { ACTIVE_USER } from './users.data';

// Combined bookings for all types
const ALL_BOOKINGS = [...MOCK_BOOKINGS, ...MOCK_CATERING_BOOKINGS];

/** Find the booking with the given ID, or throw a 404 */
function findBooking(id: string | number) {
    const booking = ALL_BOOKINGS.find((b) => `${b.id}` === `${id}`);
    if (!booking) {
        throw {
            status: 404,
            message: `Unable to find booking with ID ${id}`,
        };
    }
    return booking;
}

function approveBooking(id: string, approved: boolean) {
    const booking = findBooking(id);
    booking.approved = approved;
    booking.rejected = !approved;
    return booking;
}

function checkInBooking(id: string, state_param: unknown) {
    const booking = findBooking(id);
    const state = `${state_param ?? 'true'}` === 'true';
    booking.checked_in = state;
    if (state) {
        booking.checked_in_at = getUnixTime(Date.now());
        delete booking.checked_out_at;
    } else {
        booking.checked_out_at = getUnixTime(Date.now());
    }
    return booking;
}

/** Assets of `booking` that overlap a booking already made */
function clashingAssets(booking: any, include_time: boolean) {
    const asset_ids: string[] = booking.asset_ids?.length
        ? booking.asset_ids
        : [booking.asset_id].filter(Boolean);
    const clashes = ALL_BOOKINGS.filter(
        (other) =>
            !other.deleted &&
            !other.rejected &&
            `${other.id}` !== `${booking.id}` &&
            timePeriodsIntersect(
                booking.booking_start,
                booking.booking_end,
                other.booking_start,
                other.booking_end,
            ),
    ).flatMap((other) =>
        (other.asset_ids?.length ? other.asset_ids : [other.asset_id])
            .filter((id: string) => asset_ids.includes(id))
            .map((asset_id: string) => ({
                asset_id,
                booking_start: other.booking_start,
                booking_end: other.booking_end,
            })),
    );
    return include_time
        ? clashes
        : [...new Set(clashes.map((clash) => clash.asset_id))];
}

export function registerMockBookings() {
    // About 3MB as JSON, so only changed bookings are kept
    persistById('bookings', ALL_BOOKINGS);

    registerMockEndpoint({
        path: '/api/staff/v1/bookings',
        method: 'GET',
        callback: (_) => {
            let events = ALL_BOOKINGS;
            if (!_.query_params.zone_ids && !_.query_params.zones) {
                // Real API returns active user bookings when no zone is specified
                _.query_params.user_id = ACTIVE_USER.id;
            }

            // Filter by user if user_id is provided
            if (_.query_params.user_id) {
                events = events.filter(
                    (booking) => booking.user_id === _.query_params.user_id,
                );
            }

            // Filter by user email if email is provided
            if (_.query_params.email) {
                events = events.filter(
                    (booking) => booking.user_email === _.query_params.email,
                );
            }

            // Filter by zones if provided
            if (_.query_params.zones || _.query_params.zone_ids) {
                const zones = (
                    _.query_params.zones ||
                    _.query_params.zone_ids ||
                    ''
                )
                    .split(',')
                    .filter((id) => !!id);
                if (zones.length > 0) {
                    events = events.filter((booking) =>
                        zones.some((zone) => booking.zones.includes(zone)),
                    );
                }
            }

            // Filter by time period if provided
            if (_.query_params.period_start && _.query_params.period_end) {
                events = events.filter((event) =>
                    timePeriodsIntersect(
                        +_.query_params.period_start,
                        +_.query_params.period_end,
                        event.booking_start,
                        event.booking_end,
                    ),
                );
            }

            // Real API hides soft-deleted bookings unless asked for them
            if (!_.query_params.include_deleted && !_.query_params.deleted) {
                events = events.filter((booking) => !booking.deleted);
            }

            // Filter by type if provided
            if (_.query_params.type) {
                events = events.filter(
                    (event) =>
                        event.type === _.query_params.type ||
                        event.booking_type === _.query_params.type,
                );
            }

            // Pagination
            const limit = +_.query_params.limit || 50;
            const offset = +_.query_params.offset || 0;
            events = events.slice(offset, offset + limit);

            return events;
        },
    });

    // Debug endpoint to show booking distribution by user
    registerMockEndpoint({
        path: '/api/debug/bookings/distribution',
        method: 'GET',
        callback: (_) => {
            const distribution = {};
            ALL_BOOKINGS.forEach((booking) => {
                if (!distribution[booking.user_id]) {
                    distribution[booking.user_id] = {
                        user_name: booking.user_name,
                        user_email: booking.user_email,
                        total: 0,
                        desk: 0,
                        parking: 0,
                        visitor: 0,
                        other: 0,
                    };
                }
                distribution[booking.user_id].total++;
                if (booking.type === 'desk')
                    distribution[booking.user_id].desk++;
                else if (booking.type === 'parking')
                    distribution[booking.user_id].parking++;
                else if (booking.type === 'visitor')
                    distribution[booking.user_id].visitor++;
                else distribution[booking.user_id].other++;
            });

            return {
                total_bookings: ALL_BOOKINGS.length,
                total_users: Object.keys(distribution).length,
                distribution,
            };
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id',
        method: 'GET',
        callback: (_) => {
            const event = ALL_BOOKINGS.find(
                (e) => `${e.id}` === `${_.route_params.id}`,
            );
            if (!event)
                throw {
                    status: 404,
                    message: `Unable to find booking with ID ${_.route_params.id}`,
                };
            return event;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id/guests/:email',
        method: 'POST',
        callback: (_) => {
            const event = ALL_BOOKINGS.find(
                (e) => `${e.id}` === `${_.route_params.id}`,
            );
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
            };
            event.attendees.push(user);
            return user;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id/guests/:email',
        method: 'DELETE',
        callback: (_) => {
            const { id, email } = _.route_params;
            const event = ALL_BOOKINGS.find((e) => `${e.id}` === `${id}`);
            if (!event) {
                throw {
                    status: 404,
                    message: `Unable to find booking with ID ${id}`,
                };
            }
            const guest = event.attendees.find(
                (_) => _.email === decodeURIComponent(email),
            );
            if (!guest) {
                throw {
                    status: 404,
                    message: `Unable to find guest with email ${decodeURIComponent(email)}`,
                };
            }
            return guest;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id/guests/:email/checkin',
        method: 'POST',
        callback: (_) => {
            const { id, email } = _.route_params;
            const event = ALL_BOOKINGS.find((e) => `${e.id}` === `${id}`);
            if (!event) {
                throw {
                    status: 404,
                    message: `Unable to find booking with ID ${id}`,
                };
            }
            event.attendees = event.attendees.filter(
                (_) => _.email !== decodeURIComponent(email),
            );
            return {};
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/bookings',
        method: 'POST',
        callback: (request) => {
            const new_event = {
                ...request.body,
                id: mockId('-booking-'),
            };
            ALL_BOOKINGS.push(new_event);
            return new_event;
        },
    });

    const updateBooking = (id: string | number, data: any) => {
        const index = ALL_BOOKINGS.findIndex((e) => `${e.id}` === `${id}`);
        if (index < 0)
            throw {
                status: 404,
                message: `Unable to find booking with ID ${id}`,
            };
        const new_event = { ...data };
        ALL_BOOKINGS.splice(index, 1, new_event);
        return new_event;
    };

    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id',
        method: 'PATCH',
        callback: (req) => updateBooking(req.route_params.id, req.body),
    });

    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id/approve',
        method: 'POST',
        callback: (req) => approveBooking(req.route_params.id, true),
    });

    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id/reject',
        method: 'POST',
        callback: (req) => approveBooking(req.route_params.id, false),
    });

    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id/check_in',
        method: 'POST',
        callback: (req) =>
            checkInBooking(req.route_params.id, req.query_params?.state),
    });

    // Update induction status endpoint for visitor-kiosk
    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id/update_induction',
        method: 'POST',
        callback: (req) => {
            const booking = ALL_BOOKINGS.find(
                (b) => `${b.id}` === `${req.route_params.id}`,
            );
            if (!booking)
                throw {
                    status: 404,
                    message: `Unable to find booking with ID ${req.route_params.id}`,
                };
            const induction = req.query_params.induction || 'tentative';
            booking.induction = induction;
            return booking;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id',
        method: 'PUT',
        callback: (req) => updateBooking(req.route_params.id, req.body),
    });

    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id',
        method: 'DELETE',
        callback: (req) => {
            const booking = findBooking(req.route_params.id);
            // Real API soft-deletes, so the booking stays queryable as cancelled
            booking.deleted = true;
            booking.deleted_at = Math.floor(Date.now() / 1000);
        },
    });
    registerMockEndpoint({
        path: '/api/staff/v1/bookings/clashing-assets',
        method: 'POST',
        callback: (req) =>
            clashingAssets(
                req.body || {},
                `${req.query_params?.include_clash_time}` === 'true',
            ),
    });

    // Mock bookings do not expand recurrences, so an instance route changes
    // the whole booking.
    const instance = '/api/staff/v1/bookings/:id/instance/:start';
    for (const method of ['PATCH', 'PUT'] as const) {
        registerMockEndpoint({
            path: instance,
            method,
            callback: (req) =>
                Object.assign(findBooking(req.route_params.id), req.body),
        });
    }
    registerMockEndpoint({
        path: instance,
        method: 'DELETE',
        callback: (req) => {
            const booking = findBooking(req.route_params.id);
            booking.deleted = true;
            booking.deleted_at = Math.floor(Date.now() / 1000);
        },
    });
    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id/approve/:start',
        method: 'POST',
        callback: (req) => approveBooking(req.route_params.id, true),
    });
    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id/reject/:start',
        method: 'POST',
        callback: (req) => approveBooking(req.route_params.id, false),
    });
    registerMockEndpoint({
        path: '/api/staff/v1/bookings/:id/check_in/:start',
        method: 'POST',
        callback: (req) =>
            checkInBooking(req.route_params.id, req.query_params?.state),
    });
}
