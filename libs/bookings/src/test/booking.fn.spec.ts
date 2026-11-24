import { TestBed } from '@angular/core/testing';
import {
    Booking,
    CalendarEvent,
    CateringItem,
    CateringOrder,
    setCurrentUser,
    SettingsService,
    Space,
    StaffUser,
    User,
    VERSION,
} from '@placeos/common';
import { configure } from '@placeos/ts-client';
import { CallFailed } from '@placeos/ts-client/compat';
import {
    clearEndpointMocks,
    endpointMocks,
    type EndpointName,
    httpError,
    mockEndpoint,
    type MockHandler,
    respond,
} from '@placeos/ts-client/mock';
import { bookings } from '@placeos/ts-client/staff';
import { fromZonedTime } from 'date-fns-tz';
import { newBookingFromCalendarEvent } from '../lib/booking.utilities';
import {
    approveBooking,
    bookedResourceList,
    bookingId,
    cancelOverlappingRecurringBookings,
    checkinBooking,
    createBooking,
    createBookingsForEvent,
    isInWaitlistWeek,
    parentBookingId,
    queryAllBookings,
    queryAllBookingsOrThrow,
    queryBookings,
    queryBookingsOrThrow,
    queryResourceAvailability,
    rejectBooking,
    rejectOverlappingRecurringBookings,
    removeBooking,
    removeBookingInstance,
    saveBooking,
    setBookingCheckedIn,
    showBooking,
    updateBooking,
} from '../lib/bookings.fn';

vi.mock('@placeos/ts-client/staff', { spy: true });

/** Answers the calls of a staff endpoint with `handler` and records each input */
function mock<K extends EndpointName>(name: K, handler: MockHandler<K>) {
    const spy = vi.fn(handler);
    mockEndpoint(name, spy);
    return spy;
}

describe('[Booking API]', () => {
    const app_version = VERSION.raw || VERSION.version || VERSION.hash;
    const app_name = 'PlaceOS';
    const user_email = 'current.user@example.com';
    const utm_source = `${app_name}_${VERSION.hash}_${user_email}`;

    beforeEach(() => {
        vi.clearAllMocks();
        clearEndpointMocks();
        configure({
            base_url: '',
            auth: { kind: 'none' },
            mock: endpointMocks,
        });
        setCurrentUser(
            new StaffUser({
                id: 'current-user',
                email: user_email,
                name: 'Current User',
            }),
        );
    });

    describe('queryBookings', () => {
        it('should list bookings with the staff query operation', async () => {
            const query = mock('staff.bookings.query', () => [{}]);
            const list = await queryBookings({
                period_start: 1,
                period_end: 2,
                type: 'desk',
                include_parent_bookings: true,
            });
            expect(list).toHaveLength(1);
            expect(list[0]).toBeInstanceOf(Booking);
            expect(query).toHaveBeenCalledWith({
                period_start: 1,
                period_end: 2,
                type: 'desk',
                include_parent_bookings: true,
            });
        });

        it('should return no bookings when the request fails, unlike queryBookingsOrThrow', async () => {
            mock('staff.bookings.query', () => {
                throw httpError(500);
            });
            const q = { period_start: 1, period_end: 2, type: 'desk' as const };

            await expect(queryBookings(q)).resolves.toEqual([]);
            await expect(queryBookingsOrThrow(q)).rejects.toBeInstanceOf(
                CallFailed,
            );
        });
    });

    describe('queryResourceAvailability', () => {
        it('should mark every room held by a multi-room booking as unavailable', async () => {
            mock('staff.bookings.query', () => [
                { id: 7, asset_id: 'room-1', asset_ids: ['room-1', 'room-2'] },
            ]);
            expect(
                await queryResourceAvailability(
                    ['room-1', 'room-2', 'room-3'],
                    0,
                    30,
                ),
            ).toEqual([false, false, true]);
            expect(
                await queryResourceAvailability(['room-2'], 0, 30, '7'),
            ).toEqual([true]);
            // A booking event keeps the numeric ID from the API
            expect(
                await queryResourceAvailability(['room-2'], 0, 30, 7),
            ).toEqual([true]);
        });
    });

    describe('bookedResourceList', () => {
        it('should query all pages of booked resources', async () => {
            const booked = mock('staff.bookings.booked', (input) =>
                input.offset
                    ? ['asset-3']
                    : respond(['asset-1', 'asset-2'], {
                          total: 3,
                          next_offset: 2,
                      }),
            );

            await expect(
                bookedResourceList(
                    { period_start: 1, period_end: 2, type: 'desk' },
                    200,
                ),
            ).resolves.toEqual(['asset-1', 'asset-2', 'asset-3']);
            expect(booked).toHaveBeenCalledTimes(2);
            expect(booked).toHaveBeenNthCalledWith(1, {
                period_start: 1,
                period_end: 2,
                type: 'desk',
                limit: 200,
            });
        });
    });

    describe('queryAllBookings', () => {
        it('should follow every page and return each booking once', async () => {
            const query = mock('staff.bookings.query', (input) =>
                input.offset
                    ? [{ id: 2 }, { id: 3 }]
                    : respond([{ id: 1 }, { id: 2 }], {
                          total: 3,
                          next_offset: 2,
                      }),
            );

            const list = await queryAllBookings({
                period_start: 1,
                period_end: 2,
                type: 'desk',
            });

            expect(list.map((booking) => booking.id)).toEqual([1, 2, 3]);
            expect(query).toHaveBeenNthCalledWith(1, {
                period_start: 1,
                period_end: 2,
                type: 'desk',
            });
        });

        it('should keep each instance of a recurring booking from the OrThrow variant', async () => {
            const spy = vi.spyOn(ts_client, 'query');
            spy.mockResolvedValue({
                total: 3,
                data: [
                    new Booking({ id: 'b-1', instance: 100 }),
                    new Booking({ id: 'b-1', instance: 200 }),
                    new Booking({ id: 'b-1', instance: 200 }),
                ],
                next: null,
            });
            const q = { period_start: 1, period_end: 2, type: 'desk' as const };

            const list = await queryAllBookingsOrThrow(q);

            expect(list.map((booking) => booking.instance)).toEqual([100, 200]);
            expect(await queryAllBookings(q)).toHaveLength(1);
            spy.mockReset();
        });

        it('should reject from the OrThrow variant when a later page fails', async () => {
            const spy = vi.spyOn(ts_client, 'query');
            spy.mockImplementation(async () => ({
                total: 2,
                data: [new Booking({ id: 'b-1' })],
                next: () => Promise.reject(new Error('500')),
            }));
            const q = { period_start: 1, period_end: 2, type: 'desk' as const };

            await expect(queryAllBookingsOrThrow(q)).rejects.toThrow('500');
            expect(await queryAllBookings(q)).toEqual([]);
            spy.mockReset();
        });

        it('should not request more pages after the signal aborts', async () => {
            const controller = new AbortController();
            const query = mock('staff.bookings.query', () => {
                controller.abort();
                return respond([{ id: 1 }], { total: 4, next_offset: 1 });
            });

            const list = await queryAllBookings(
                { period_start: 1, period_end: 2, type: 'desk' },
                { signal: controller.signal },
            );

            expect(list).toEqual([]);
            expect(query).toHaveBeenCalledTimes(1);
        });
    });

    describe('showBooking', () => {
        it('should get a booking by its integer id', async () => {
            const show = mock('staff.bookings.show', () => ({}));
            const booking = await showBooking('1');
            expect(booking).toBeInstanceOf(Booking);
            expect(show).toHaveBeenCalledWith({ id: 1 });
        });
    });

    describe('createBooking', () => {
        it('should omit an empty ID when creating an asset booking model', async () => {
            const create = mock('staff.bookings.create', () => ({}));
            const request = new Booking({
                booking_type: 'asset-request',
                asset_id: 'asset-1',
                asset_ids: ['asset-1'],
                booking_start: 1_800_000_000,
                booking_end: 1_800_003_600,
            });

            await createBooking(request);

            const body = create.mock.calls[0][0].body;
            expect(body).not.toHaveProperty('id');
            expect(body).toMatchObject({
                booking_type: 'asset-request',
                asset_id: 'asset-1',
                asset_ids: ['asset-1'],
                booking_start: 1_800_000_000,
                booking_end: 1_800_003_600,
                extension_data: { app_name, app_version },
            });
        });

        it('should create a booking with the UTM source', async () => {
            const create = mock('staff.bookings.create', () => ({}));
            const booking = await createBooking({ created_at: 123 });
            expect(booking).toBeInstanceOf(Booking);
            expect(create).toHaveBeenCalledWith({
                utm_source,
                body: { extension_data: { app_name, app_version } },
            });
        });

        it('should send only the fields of the API booking', async () => {
            const create = mock('staff.bookings.create', () => ({}));
            await createBooking(
                new Booking({
                    asset_id: 'desk-1',
                    asset_name: 'Desk 1',
                    permission: 'OPEN',
                    attendees: [
                        new User({ email: 'guest@example.com', name: 'Guest' }),
                    ],
                }),
            );
            const body = create.mock.calls[0][0].body;
            expect(body).not.toHaveProperty('asset_name');
            expect(body).not.toHaveProperty('date_end');
            expect(body).toMatchObject({
                asset_id: 'desk-1',
                permission: 'open',
                attendees: [{ email: 'guest@example.com', name: 'Guest' }],
            });
        });
    });

    describe('createBookingsForEvent', () => {
        const event = new CalendarEvent({
            id: 'event-1',
            event_start: 1_800_000_000,
            event_end: 1_800_003_600,
            host: user_email,
            title: 'Visitor meeting',
            ical_uid: 'event-1@example.com',
            resources: [
                new Space({
                    id: 'space-1',
                    email: 'space-1@example.com',
                    zones: ['zone-1'],
                }),
            ],
        });
        const visitors = [
            {
                id: 'visitor-1',
                email: 'visitor.one@external.com',
                name: 'Visitor One',
            },
            {
                id: 'visitor-2',
                email: 'visitor.two@external.com',
                name: 'Visitor Two',
            },
        ];

        it('should create linked visitor bookings sequentially', async () => {
            mock('staff.bookings.query', () => []);
            let active_requests = 0;
            let max_concurrent_requests = 0;
            const create = mock('staff.bookings.create', async () => {
                active_requests += 1;
                max_concurrent_requests = Math.max(
                    max_concurrent_requests,
                    active_requests,
                );
                await Promise.resolve();
                active_requests -= 1;
                return { id: 100 + active_requests };
            });

            await createBookingsForEvent(event, 'visitor', visitors);

            expect(create).toHaveBeenCalledTimes(2);
            expect(max_concurrent_requests).toBe(1);
        });

        it('should lift visitor flags onto the booking extension data', async () => {
            mock('staff.bookings.query', () => []);
            const create = mock('staff.bookings.create', () => ({ id: 101 }));
            const flagged = [
                new User({
                    id: 'visitor-1',
                    email: 'visitor.one@external.com',
                    name: 'Visitor One',
                    extension_data: {
                        international: true,
                        visitor_internal_or_external: 'external',
                    },
                }),
                new User(visitors[1]),
            ];

            await createBookingsForEvent(event, 'visitor', flagged);

            expect(create.mock.calls[0][0].body).toMatchObject({
                extension_data: expect.objectContaining({
                    international: true,
                    visitor_internal_or_external: 'external',
                }),
            });
            const unflagged = create.mock.calls[1][0].body.extension_data;
            expect(unflagged).not.toHaveProperty('international');
            expect(unflagged).not.toHaveProperty(
                'visitor_internal_or_external',
            );
        });

        it('should remove created visitor bookings when a later request fails', async () => {
            mock('staff.bookings.query', () => []);
            let count = 0;
            mock('staff.bookings.create', () => {
                count += 1;
                if (count > 1) throw httpError(409, 'Unable to link visitor');
                return { id: 101 };
            });
            const destroy = mock('staff.bookings.destroy', () => undefined);

            await expect(
                createBookingsForEvent(event, 'visitor', visitors),
            ).rejects.toBeInstanceOf(CallFailed);

            expect(destroy).toHaveBeenCalledWith({ id: 101, utm_source });
        });

        const linked_visitor = (overrides: Record<string, unknown> = {}) => ({
            id: 101,
            booking_type: 'visitor',
            booking_start: 1_800_000_000,
            booking_end: 1_800_003_600,
            title: 'Visitor meeting',
            description: 'Visitor meeting',
            user_email,
            asset_id: 'visitor.one@external.com',
            zones: ['zone-1'],
            attendees: [visitors[0]],
            approved: true,
            checked_in: true,
            extension_data: {
                parent_id: 'event-1',
                name: 'Visitor One',
                details: visitors[0],
            },
            ...overrides,
        });

        it('should update the linked booking of an attendee still on the event', async () => {
            mock('staff.bookings.query', () => [
                linked_visitor({
                    booking_start: 1_799_990_000,
                    booking_end: 1_799_993_600,
                }),
            ]);
            const update = mock('staff.bookings.update', () => ({ id: 101 }));
            const create = mock('staff.bookings.create', () => ({ id: 102 }));
            const destroy = mock('staff.bookings.destroy', () => undefined);

            await createBookingsForEvent(event, 'visitor', visitors);

            expect(update).toHaveBeenCalledTimes(1);
            expect(update).toHaveBeenCalledWith({
                id: 101,
                body: expect.objectContaining({
                    booking_start: 1_800_000_000,
                    booking_end: 1_800_003_600,
                    extension_data: expect.objectContaining({
                        parent_id: 'event-1',
                        details: expect.objectContaining({ id: 'visitor-1' }),
                    }),
                }),
            });
            const body = update.mock.calls[0][0].body;
            for (const key of ['date', 'title', 'attendees', 'approved']) {
                expect(body).not.toHaveProperty(key);
            }
            expect(create).toHaveBeenCalledTimes(1);
            expect(create.mock.calls[0][0].body).toMatchObject({
                asset_id: 'visitor.two@external.com',
            });
            expect(destroy).not.toHaveBeenCalled();
        });

        it('should leave an unchanged linked booking alone', async () => {
            const [first, ...rest] = Object.entries(visitors[0]);
            mock('staff.bookings.query', () => [
                linked_visitor({
                    extension_data: {
                        parent_id: 'event-1',
                        name: 'Visitor One',
                        // Stored JSON can return keys in another order
                        details: Object.fromEntries([...rest, first]),
                    },
                }),
            ]);
            const update = mock('staff.bookings.update', () => ({}));
            const create = mock('staff.bookings.create', () => ({}));
            const destroy = mock('staff.bookings.destroy', () => undefined);

            await createBookingsForEvent(event, 'visitor', [visitors[0]]);

            expect(update).not.toHaveBeenCalled();
            expect(create).not.toHaveBeenCalled();
            expect(destroy).not.toHaveBeenCalled();
        });

        it('should remove the linked bookings of attendees taken off the event one at a time', async () => {
            const removed = (id: number, email: string) =>
                linked_visitor({
                    id,
                    asset_id: email,
                    attendees: [{ email, name: email }],
                    extension_data: {
                        parent_id: 'event-1',
                        details: { id: `${id}` },
                    },
                });
            mock('staff.bookings.query', () => [
                linked_visitor(),
                removed(103, 'visitor.three@external.com'),
                removed(104, 'visitor.four@external.com'),
            ]);
            const update = mock('staff.bookings.update', () => ({}));
            const create = mock('staff.bookings.create', () => ({}));
            let active_requests = 0;
            let max_concurrent_requests = 0;
            const destroy = mock('staff.bookings.destroy', async () => {
                active_requests += 1;
                max_concurrent_requests = Math.max(
                    max_concurrent_requests,
                    active_requests,
                );
                await Promise.resolve();
                active_requests -= 1;
                return undefined;
            });

            await createBookingsForEvent(event, 'visitor', [visitors[0]]);

            expect(update).not.toHaveBeenCalled();
            expect(create).not.toHaveBeenCalled();
            expect(destroy.mock.calls.map(([input]) => input)).toEqual([
                { id: 103, utm_source },
                { id: 104, utm_source },
            ]);
            expect(max_concurrent_requests).toBe(1);
        });

        it('should find linked bookings by event id and ignore other bookings', async () => {
            const query = mock('staff.bookings.query', () => [
                linked_visitor({
                    id: 105,
                    extension_data: { parent_id: 'event-2' },
                }),
            ]);
            const create = mock('staff.bookings.create', () => ({ id: 102 }));
            const destroy = mock('staff.bookings.destroy', () => undefined);

            await createBookingsForEvent(event, 'visitor', [visitors[0]]);

            expect(query.mock.calls[0][0]).toMatchObject({
                event_id: 'event-1',
            });
            expect(create).toHaveBeenCalledTimes(1);
            expect(destroy).not.toHaveBeenCalled();
        });

        it('should link the bookings of a native booking event by parent id', async () => {
            const native_event = new CalendarEvent({
                ...event.toJSON(),
                id: '1138',
                ical_uid: '',
                from_bookings: true,
            });
            const query = mock('staff.bookings.query', () => []);
            const create = mock('staff.bookings.create', () => ({ id: 101 }));

            await createBookingsForEvent(native_event, 'visitor', [
                visitors[0],
            ]);

            expect(query).not.toHaveBeenCalled();
            const input = create.mock.calls[0][0];
            expect(input).not.toHaveProperty('event_id');
            expect(input).not.toHaveProperty('ical_uid');
            expect(input.body.parent_id).toBe(1138);
            expect(input.body.extension_data).toMatchObject({
                parent_id: '1138',
            });
        });

        it('should update the child of a native booking that another user hosts', async () => {
            const host = 'host@example.com';
            const native_event = new CalendarEvent({
                ...event.toJSON(),
                id: '1138',
                host,
                ical_uid: '',
                from_bookings: true,
                linked_bookings: [
                    linked_visitor({
                        parent_id: '1138',
                        user_email: host,
                        booking_start: 1_799_990_000,
                        booking_end: 1_799_993_600,
                        extension_data: {
                            parent_id: '1138',
                            name: 'Visitor One',
                            details: visitors[0],
                        },
                    }),
                ],
            } as never);
            // The API only lists the current user's bookings without filters
            mock('staff.bookings.query', () => []);
            const update = mock('staff.bookings.update', () => ({ id: 101 }));
            const create = mock('staff.bookings.create', () => ({}));
            const destroy = mock('staff.bookings.destroy', () => undefined);

            await createBookingsForEvent(native_event, 'visitor', [
                visitors[0],
            ]);

            expect(update).toHaveBeenCalledTimes(1);
            expect(update.mock.calls[0][0].id).toBe(101);
            expect(create).not.toHaveBeenCalled();
            expect(destroy).not.toHaveBeenCalled();
        });

        it('should not create bookings when the linked bookings fail to load', async () => {
            mock('staff.bookings.query', () => {
                throw httpError(500, 'Unable to load bookings');
            });
            const create = mock('staff.bookings.create', () => ({}));
            const destroy = mock('staff.bookings.destroy', () => undefined);

            await expect(
                createBookingsForEvent(event, 'visitor', visitors),
            ).rejects.toBeInstanceOf(CallFailed);

            expect(create).not.toHaveBeenCalled();
            expect(destroy).not.toHaveBeenCalled();
        });

        it('should recreate the linked bookings of an event moved to a new host', async () => {
            const new_host = 'new.host@example.com';
            const old_booking = linked_visitor();
            const moved_event = new CalendarEvent({
                id: 'event-2',
                event_start: 1_800_000_000,
                event_end: 1_800_003_600,
                host: new_host,
                title: 'Visitor meeting',
                ical_uid: 'event-2@example.com',
                resources: event.resources,
                linked_bookings: [
                    old_booking,
                    {
                        ...old_booking,
                        id: 201,
                        booking_type: 'catering-order',
                    },
                ] as never,
            });
            mock('staff.bookings.query', () => [old_booking]);
            const update = mock('staff.bookings.update', () => ({}));
            const destroy = mock('staff.bookings.destroy', () => undefined);
            const create = mock('staff.bookings.create', () => ({ id: 102 }));

            await createBookingsForEvent(moved_event, 'visitor', [visitors[0]]);

            expect(destroy.mock.calls.map(([input]) => input)).toEqual([
                { id: 101, utm_source },
            ]);
            expect(update).not.toHaveBeenCalled();
            expect(create).toHaveBeenCalledTimes(1);
            expect(create.mock.calls[0][0].event_id).toBe('event-2');
            expect(create.mock.calls[0][0].body).toMatchObject({
                user_email: new_host,
                extension_data: { parent_id: 'event-2' },
            });
            expect(destroy.mock.invocationCallOrder[0]).toBeLessThan(
                create.mock.invocationCallOrder[0],
            );
        });

        it('should leave a saved catering booking alone on the next save', async () => {
            const order = () =>
                new CateringOrder({
                    id: 'order-1',
                    system_id: 'space-1',
                    caterer: 'Cafe',
                    items: [
                        new CateringItem({
                            id: 'coffee',
                            caterer: 'Cafe',
                            quantity: 1,
                        }),
                    ],
                });
            mock('staff.bookings.query', () => []);
            const create = mock('staff.bookings.create', () => ({ id: 201 }));
            await createBookingsForEvent(event, 'catering-order', [order()]);
            const saved = JSON.parse(
                JSON.stringify(create.mock.calls[0][0].body),
            );
            // Without an event the order's delivery time falls back to now
            saved.extension_data.details.deliver_at_time = 1;
            mock('staff.bookings.query', () => [{ ...saved, id: 201 }]);
            const update = mock('staff.bookings.update', () => ({}));

            await createBookingsForEvent(event, 'catering-order', [order()]);

            expect(update).not.toHaveBeenCalled();
            expect(create).toHaveBeenCalledTimes(1);
        });

        it('should create catering bookings against the assigned room', async () => {
            const catering_event = new CalendarEvent({
                id: 'event-1',
                event_start: 1_800_000_000,
                event_end: 1_800_003_600,
                host: user_email,
                title: 'Catering meeting',
                ical_uid: 'event-1@example.com',
                resources: [
                    new Space({
                        id: 'space-1',
                        email: 'space-1@example.com',
                        name: 'Boardroom',
                        zones: ['building-1', 'level-1'],
                    }),
                    new Space({
                        id: 'space-2',
                        email: 'space-2@example.com',
                        name: 'Training room',
                        zones: ['building-1', 'level-2'],
                    }),
                ],
            });
            const order = new CateringOrder({
                id: 'order-1',
                system_id: 'space-2',
                caterer: 'Cafe',
                items: [
                    new CateringItem({
                        id: 'coffee',
                        caterer: 'Cafe',
                        quantity: 1,
                    }),
                ],
            });
            mock('staff.bookings.query', () => []);
            const create = mock('staff.bookings.create', () => ({ id: 201 }));

            await createBookingsForEvent(catering_event, 'catering-order', [
                order,
            ]);

            // The API booking has no `asset_name`. The name goes in the
            // extension data, where the app reads it.
            expect(create.mock.calls[0][0].body).toMatchObject({
                asset_id: 'space-2',
                zones: ['building-1', 'level-2'],
                extension_data: expect.objectContaining({
                    name: 'Training room',
                    location_id: 'space-2',
                    details: expect.objectContaining({
                        id: 'order-1',
                        system_id: 'space-2',
                    }),
                }),
            });
        });
    });

    describe('updateBooking', () => {
        it('should update a booking with the staff update operation', async () => {
            const update = mock('staff.bookings.update', () => ({}));
            const booking = await updateBooking('1', { created_at: 123 });
            expect(booking).toBeInstanceOf(Booking);
            expect(update).toHaveBeenCalledWith({
                id: 1,
                body: { extension_data: { app_name, app_version } },
            });
        });

        it('should use the staff update operation also for the PUT method, as the API has one update action', async () => {
            const update = mock('staff.bookings.update', () => ({}));
            const booking = await updateBooking(
                '1',
                { created_at: 123 },
                'put',
            );
            expect(booking).toBeInstanceOf(Booking);
            expect(update).toHaveBeenCalledWith({
                id: 1,
                body: { extension_data: { app_name, app_version } },
            });
        });
    });

    describe('saveBooking', () => {
        it('should send the selected room host separately from the creator', async () => {
            const host = new User({
                id: 'staff-colleague',
                email: 'colleague@example.com',
                name: 'Selected Colleague',
            });
            const event = new CalendarEvent({
                host: host.email,
                creator: user_email,
                attendees: [host],
            });
            const create = mock('staff.bookings.create', () => ({}));

            await saveBooking(
                newBookingFromCalendarEvent(event.toJSON() as CalendarEvent),
            );

            expect(create.mock.calls[0][0].body).toMatchObject({
                user_id: host.id,
                user_email: host.email,
                user_name: host.name,
                extension_data: expect.objectContaining({
                    creator: user_email,
                }),
            });
        });

        it('should keep the fields of a booking attendee', async () => {
            const create = mock('staff.bookings.create', () => ({}));
            const attendee = {
                id: 7,
                guest_id: 3,
                email: 'guest@example.com',
                name: 'Guest',
                visit_expected: true,
            };

            // An attendee from the API, which the app `User` type does not model
            await saveBooking({ attendees: [attendee as unknown as User] });

            expect(create.mock.calls[0][0].body.attendees).toEqual([attendee]);
        });

        it('should update existing bookings', async () => {
            const update = mock('staff.bookings.update', () => ({}));
            await saveBooking({ id: '1' });
            expect(update).toHaveBeenCalledWith({
                id: 1,
                body: { extension_data: { app_name, app_version } },
            });
        });

        it('should update only one occurrence when the query targets an instance', async () => {
            const update = mock('staff.bookings.updateInstance', () => ({}));

            await saveBooking(
                new Booking({
                    id: '55',
                    booking_start: 1_800_000_000,
                    booking_end: 1_800_003_600,
                }),
                { instance: 1 },
            );

            expect(update).toHaveBeenCalledTimes(1);
            const input = update.mock.calls[0][0];
            expect(input).toMatchObject({ id: 55, instance: 1_800_000_000 });
            expect(input.body).not.toHaveProperty('id');
        });
    });

    describe('removeBooking', () => {
        it('should include the UTM source in a booking DELETE request', async () => {
            const destroy = mock('staff.bookings.destroy', () => undefined);

            await removeBooking('42');

            expect(destroy).toHaveBeenCalledWith({ id: 42, utm_source });
        });

        it('should include the UTM source in an instance DELETE request', async () => {
            const destroy = mock(
                'staff.bookings.destroyInstance',
                () => undefined,
            );

            await removeBookingInstance('42', 123);

            expect(destroy).toHaveBeenCalledWith({
                id: 42,
                instance: 123,
                utm_source,
            });
        });

        it('should reject for an id that is not an integer', async () => {
            await expect(removeBooking('booking/1')).rejects.toThrow(
                'not an integer',
            );
        });
    });

    describe('cancelOverlappingRecurringBookings', () => {
        it('should cancel an overlapping desk booking on another floor', async () => {
            const now = new Date('2026-08-18T10:55:00').valueOf();
            const now_spy = vi.spyOn(Date, 'now').mockReturnValue(now);
            mock('staff.bookings.query', () => [
                {
                    id: 301,
                    booking_start:
                        new Date('2026-08-18T16:45:00').valueOf() / 1000,
                    booking_end:
                        new Date('2026-08-18T17:15:00').valueOf() / 1000,
                    booking_type: 'desk',
                    approved: true,
                    asset_id: 'F-010',
                    zones: ['first-floor'],
                },
            ]);
            const destroy = mock('staff.bookings.destroy', () => undefined);
            const reject = mock('staff.bookings.reject', () => ({}));
            const assignment = new Booking({
                id: '300',
                booking_start: new Date('2026-08-18T03:00:00').valueOf() / 1000,
                booking_end: new Date('2026-08-18T23:00:00').valueOf() / 1000,
                booking_type: 'desk',
                recurrence_type: 'daily',
                user_email: 'staff@example.com',
                asset_id: 'G-033',
                zones: ['ground-floor'],
            });

            await expect(
                cancelOverlappingRecurringBookings(assignment, 'desk'),
            ).resolves.toEqual([301]);

            expect(destroy).toHaveBeenCalledWith({ id: 301, utm_source });
            expect(reject).not.toHaveBeenCalled();
            now_spy.mockRestore();
        });
    });

    describe('rejectOverlappingRecurringBookings', () => {
        afterEach(() => vi.restoreAllMocks());

        it('should reject only active bookings that overlap the time of the series', async () => {
            // Local wall-clock dates so the assertions hold in any timezone
            const at = (hours: number, minutes = 0) =>
                new Date(2026, 7, 18, hours, minutes).valueOf() / 1000;
            vi.spyOn(Date, 'now').mockReturnValue(at(8) * 1000);
            const other = (id: number, start: number, extra = {}) => ({
                id,
                booking_start: start,
                booking_end: start + 30 * 60,
                booking_type: 'desk',
                approved: true,
                asset_id: `desk-${id}`,
                ...extra,
            });
            mock('staff.bookings.query', () => [
                other(401, at(9, 30)),
                other(402, at(9, 15), { instance: at(9, 15) }),
                other(403, at(11)),
                other(404, at(9, 30), { rejected: true }),
                other(405, at(9, 30), { parent_id: 400 }),
            ]);
            const reject = mock('staff.bookings.reject', () => ({}));
            const reject_instance = mock(
                'staff.bookings.rejectInstance',
                () => ({}),
            );
            const series = new Booking({
                id: '400',
                booking_start: at(9),
                booking_end: at(10),
                booking_type: 'desk',
                recurrence_type: 'daily',
                user_email: 'staff@example.com',
                asset_id: 'desk-1',
            });

            await expect(
                rejectOverlappingRecurringBookings(series, 'desk'),
            ).resolves.toEqual([401, 402]);

            expect(reject.mock.calls.map(([input]) => input)).toEqual([
                { id: 401 },
            ]);
            expect(reject_instance.mock.calls.map(([input]) => input)).toEqual([
                { id: 402, instance: at(9, 15) },
            ]);
        });

        it('should not query bookings for a series that does not repeat', async () => {
            const query = mock('staff.bookings.query', () => []);

            await expect(
                rejectOverlappingRecurringBookings(
                    new Booking({ id: '1', user_email: 'a@example.com' }),
                    'desk',
                ),
            ).resolves.toEqual([]);
            expect(query).not.toHaveBeenCalled();
        });
    });

    describe('parentBookingId', () => {
        it('should send a numeric ID as an integer and keep other IDs unchanged', () => {
            expect(parentBookingId('42')).toBe(42);
            expect(parentBookingId('bkn-42')).toBe('bkn-42');
            expect(parentBookingId('12345678901234567890')).toBe(
                '12345678901234567890',
            );
        });

        it('should throw when the ID is missing', () => {
            expect(() => parentBookingId('')).toThrow();
        });
    });

    describe('bookingId', () => {
        it('should give the integer of a booking ID', () => {
            expect(bookingId('42')).toBe(42);
            expect(bookingId(7)).toBe(7);
        });

        it('should throw for an ID that is not an integer', () => {
            expect(() => bookingId('')).toThrow();
            expect(() => bookingId('bkn-42')).toThrow();
            expect(() => bookingId('12345678901234567890')).toThrow();
        });
    });

    describe('approveBooking', () => {
        it('should approve a booking with the staff approve operation', async () => {
            const approve = mock('staff.bookings.approve', () => ({}));
            const booking = await approveBooking('1');
            expect(booking).toBeInstanceOf(Booking);
            expect(approve).toHaveBeenCalledWith({ id: 1 });
        });
    });

    describe('rejectBooking', () => {
        it('should reject a booking with the staff reject operation', async () => {
            const reject = mock('staff.bookings.reject', () => ({}));
            const booking = await rejectBooking('1');
            expect(booking).toBeInstanceOf(Booking);
            expect(reject).toHaveBeenCalledWith({ id: 1 });
        });
    });

    describe('isInWaitlistWeek', () => {
        // Local wall-clock dates so the assertions hold in any timezone
        const friday_17_59 = new Date(2026, 6, 31, 17, 59).valueOf();
        const friday_18_00 = new Date(2026, 6, 31, 18, 0).valueOf();
        const next_monday = new Date(2026, 7, 3, 8, 0).valueOf();

        afterEach(() => vi.restoreAllMocks());

        it('should exclude next week before the default Friday 18:00 cutoff', () => {
            vi.spyOn(Date, 'now').mockReturnValue(friday_17_59);
            expect(isInWaitlistWeek(next_monday)).toBe(false);
        });

        it('should include next week once the cutoff is reached', () => {
            vi.spyOn(Date, 'now').mockReturnValue(friday_18_00);
            expect(isInWaitlistWeek(next_monday)).toBe(true);
        });

        it('should use the configured week boundary', () => {
            const week_start = { day: 3, hour: 9, minute: 30 };
            const thursday = new Date(2026, 6, 30, 8, 0).valueOf();
            const now_spy = vi.spyOn(Date, 'now');
            now_spy.mockReturnValue(new Date(2026, 6, 29, 9, 29).valueOf());
            expect(isInWaitlistWeek(thursday, '', week_start)).toBe(false);
            now_spy.mockReturnValue(new Date(2026, 6, 29, 9, 30).valueOf());
            expect(isInWaitlistWeek(thursday, '', week_start)).toBe(true);
        });
    });

    describe('checkinBooking', () => {
        /** Makes the next check-in call fail with an HTTP error body */
        const failWith = (body: Record<string, string | number> | null) =>
            vi.mocked(bookings.checkIn).mockResolvedValueOnce({
                ok: false,
                error: {
                    kind: 'http',
                    status: 400,
                    message: null,
                    body,
                    text: body ? null : 'Bad Gateway',
                },
            });

        it('should check in a booking with the staff check in operation', async () => {
            const check_in = mock('staff.bookings.checkIn', () => ({}));
            const booking = await checkinBooking('1', true);
            expect(booking).toBeInstanceOf(Booking);
            expect(check_in).toHaveBeenCalledWith({
                id: 1,
                state: true,
                utm_source,
            });
        });

        it('should throw the error message from the response body', async () => {
            failWith({ error: 'Too early', message: 'ignored' });
            await expect(checkinBooking('1', true)).rejects.toBe('Too early');
            failWith({ message: 'Not found' });
            await expect(checkinBooking('1', true)).rejects.toBe('Not found');
            failWith({ code: 500 });
            await expect(checkinBooking('1', true)).rejects.toEqual({
                code: 500,
            });
        });

        it('should throw the call error when there is no response body', async () => {
            vi.mocked(bookings.checkIn).mockResolvedValueOnce({
                ok: false,
                error: { kind: 'network', message: 'Load failed' },
            });
            await expect(checkinBooking('1', true)).rejects.toBeInstanceOf(
                CallFailed,
            );
        });

        it('should throw the call error when the body is not JSON', async () => {
            failWith(null);
            await expect(checkinBooking('1', true)).rejects.toBeInstanceOf(
                CallFailed,
            );
        });
    });

    describe('setBookingCheckedIn', () => {
        it('should check in the whole booking when it is not recurring', async () => {
            const check_in = mock('staff.bookings.checkIn', () => ({}));
            const booking = await setBookingCheckedIn(
                new Booking({ id: '1', booking_start: 100 }),
                true,
            );
            expect(booking).toBeInstanceOf(Booking);
            expect(check_in).toHaveBeenCalledWith({
                id: 1,
                state: true,
                utm_source,
            });
        });

        it('should check in only the instance of a recurring booking', async () => {
            const check_in = mock('staff.bookings.checkInInstance', () => ({}));
            await setBookingCheckedIn(
                new Booking({
                    id: '1',
                    booking_start: 100,
                    instance: 200,
                    recurrence_type: 'daily',
                }),
                true,
            );
            expect(check_in).toHaveBeenCalledWith({
                id: 1,
                instance: 200,
                state: true,
                utm_source,
            });
        });

        it('should use the start time for the first instance of a series', async () => {
            const check_in = mock('staff.bookings.checkInInstance', () => ({}));
            await setBookingCheckedIn(
                new Booking({
                    id: '1',
                    booking_start: 100,
                    recurrence_type: 'weekly',
                }),
                false,
            );
            expect(check_in).toHaveBeenCalledWith({
                id: 1,
                instance: 100,
                state: false,
                utm_source,
            });
        });
    });

    // Last in the file: it registers a real settings service for `setting()`.
    describe('isInWaitlistWeek with building timezones', () => {
        // UTC+14, so the building time is not the local time of the test
        const timezone = 'Pacific/Kiritimati';
        const at = (day: number, hours: number, minutes = 0) =>
            fromZonedTime(new Date(2026, 6, day, hours, minutes), timezone);

        afterEach(() => vi.restoreAllMocks());

        it('should apply the cutoff in the building timezone when enabled', () => {
            const settings = TestBed.inject(SettingsService);
            vi.spyOn(settings, 'get').mockImplementation(
                (key: string) =>
                    (key === 'app.parking.use_building_timezone') as never,
            );
            const next_monday = at(3 + 31, 8).valueOf();
            const now = vi.spyOn(Date, 'now');

            // Friday 31 July 17:59 and 18:00 in the building
            now.mockReturnValue(at(31, 17, 59).valueOf());
            expect(isInWaitlistWeek(next_monday, timezone)).toBe(false);
            now.mockReturnValue(at(31, 18).valueOf());
            expect(isInWaitlistWeek(next_monday, timezone)).toBe(true);
        });
    });
});
