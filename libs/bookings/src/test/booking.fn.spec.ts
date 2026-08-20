import {
    Booking,
    CalendarEvent,
    setCurrentUser,
    Space,
    StaffUser,
    VERSION,
} from '@placeos/common';
import {
    approveBooking,
    bookedResourceList,
    cancelOverlappingRecurringBookings,
    checkinBooking,
    createBooking,
    createBookingsForEvent,
    queryBookings,
    rejectBooking,
    removeBooking,
    removeBookingInstance,
    saveBooking,
    setBookingCheckedIn,
    showBooking,
    updateBooking,
} from '../lib/bookings.fn';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

describe('[Booking API]', () => {
    const app_version = VERSION.raw || VERSION.version || VERSION.hash;
    const app_name = 'PlaceOS';
    const user_email = 'current.user@example.com';
    const utm_source = `${app_name}_${VERSION.hash}_${user_email}`;
    const encoded_utm_source = encodeURIComponent(utm_source);

    beforeEach(() => {
        vi.clearAllMocks();
        setCurrentUser(
            new StaffUser({
                id: 'current-user',
                email: user_email,
                name: 'Current User',
            }),
        );
    });

    describe('queryBookings', () => {
        it('should allow calling GET request for listing bookings', async () => {
            const spy = vi.spyOn(ts_client, 'get');
            expect(spy).not.toHaveBeenCalled();
            spy.mockResolvedValue([{}] as any);
            const bookings = await queryBookings({
                period_start: 1,
                period_end: 2,
                type: 'desk',
            });
            expect(bookings).toHaveLength(1);
            expect(bookings[0]).toBeInstanceOf(Booking);
            expect(ts_client.get).toHaveBeenCalledWith(
                `/api/staff/v1/bookings?period_start=1&period_end=2&type=desk`,
            );
            spy.mockReset();
        });
    });

    describe('bookedResourceList', () => {
        it('should query all pages of booked resources', async () => {
            const spy = vi.spyOn(ts_client, 'query');
            spy.mockResolvedValue({
                total: 3,
                data: ['asset-1', 'asset-2'],
                next: () =>
                    Promise.resolve({
                        total: 3,
                        data: ['asset-3'],
                        next: null,
                    }),
            } as any);

            await expect(
                bookedResourceList(
                    { period_start: 1, period_end: 2, type: 'desk' },
                    200,
                ),
            ).resolves.toEqual(['asset-1', 'asset-2', 'asset-3']);
            expect(ts_client.query).toHaveBeenCalledWith({
                query_params: {
                    period_start: 1,
                    period_end: 2,
                    type: 'desk',
                    limit: 200,
                },
                endpoint: `/api/staff/v1/bookings`,
                path: 'booked',
            });
            spy.mockReset();
        });
    });

    describe('showBooking', () => {
        it('should allow calling GET request for a specific booking', async () => {
            const spy = vi.spyOn(ts_client, 'get');
            expect(spy).not.toHaveBeenCalled();
            spy.mockResolvedValue({} as any);
            const booking = await showBooking('1');
            expect(booking).toBeInstanceOf(Booking);
            expect(ts_client.get).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/1`,
            );
            spy.mockReset();
        });
    });

    describe('createBooking', () => {
        it('should allow calling POST request for creating a new booking', async () => {
            const spy = vi.spyOn(ts_client, 'post');
            expect(spy).not.toHaveBeenCalled();
            spy.mockResolvedValue({} as any);
            const booking = await createBooking({ created_at: 123 });
            expect(booking).toBeInstanceOf(Booking);
            expect(ts_client.post).toHaveBeenCalledWith(
                `/api/staff/v1/bookings?utm_source=${encoded_utm_source}`,
                { extension_data: { app_name, app_version } },
            );
            spy.mockReset();
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
            vi.spyOn(ts_client, 'get').mockResolvedValue([] as never);
            let active_requests = 0;
            let max_concurrent_requests = 0;
            vi.spyOn(ts_client, 'post').mockImplementation(async () => {
                active_requests += 1;
                max_concurrent_requests = Math.max(
                    max_concurrent_requests,
                    active_requests,
                );
                await Promise.resolve();
                active_requests -= 1;
                return { id: `booking-${active_requests}` } as never;
            });

            await createBookingsForEvent(event, 'visitor', visitors);

            expect(ts_client.post).toHaveBeenCalledTimes(2);
            expect(max_concurrent_requests).toBe(1);
        });

        it('should remove created visitor bookings when a later request fails', async () => {
            const error = new Error('Unable to link visitor');
            vi.spyOn(ts_client, 'get').mockResolvedValue([] as never);
            vi.spyOn(ts_client, 'post')
                .mockResolvedValueOnce({ id: 'visitor-booking-1' } as never)
                .mockRejectedValueOnce(error);
            const delete_spy = vi
                .spyOn(ts_client, 'del')
                .mockResolvedValue(undefined);

            await expect(
                createBookingsForEvent(event, 'visitor', visitors),
            ).rejects.toBe(error);

            expect(delete_spy).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/visitor-booking-1?utm_source=${encoded_utm_source}`,
                { response_type: 'void' },
            );
        });
    });

    describe('updateBooking', () => {
        it('should allow calling PATCH request for updating a booking', async () => {
            const spy = vi.spyOn(ts_client, 'patch');
            expect(spy).not.toHaveBeenCalled();
            spy.mockResolvedValue({} as any);
            const booking = await updateBooking('1', { created_at: 123 });
            expect(booking).toBeInstanceOf(Booking);
            expect(ts_client.patch).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/1`,
                { extension_data: { app_name, app_version } },
            );
            spy.mockReset();
        });
        it('should allow calling PUT request for updating a booking', async () => {
            const spy = vi.spyOn(ts_client, 'put');
            expect(spy).not.toHaveBeenCalled();
            spy.mockResolvedValue({} as any);
            const booking = await updateBooking(
                '1',
                { created_at: 123 },
                'put',
            );
            expect(booking).toBeInstanceOf(Booking);
            expect(ts_client.put).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/1`,
                { extension_data: { app_name, app_version } },
            );
            spy.mockReset();
        });
    });

    describe('saveBooking', () => {
        it('should create new bookings', async () => {
            const spy = vi.spyOn(ts_client, 'post');
            spy.mockResolvedValue({} as any);
            expect(ts_client.post).not.toHaveBeenCalled();
            await saveBooking({});
            expect(ts_client.post).toHaveBeenCalledWith(
                `/api/staff/v1/bookings?utm_source=${encoded_utm_source}`,
                { extension_data: { app_name, app_version } },
            );
            spy.mockReset();
        });
        it('should update existing bookings', async () => {
            const spy = vi.spyOn(ts_client, 'patch');
            spy.mockResolvedValue({} as any);
            expect(ts_client.patch).not.toHaveBeenCalled();
            await saveBooking({ id: '1' });
            expect(ts_client.patch).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/1`,
                { extension_data: { app_name, app_version } },
            );
            spy.mockReset();
        });
    });

    describe('removeBooking', () => {
        it('should include the UTM source in a booking DELETE request', async () => {
            const spy = vi.spyOn(ts_client, 'del');
            spy.mockResolvedValue(undefined as any);

            await removeBooking('booking/1');

            expect(spy).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/booking%2F1?utm_source=${encoded_utm_source}`,
                { response_type: 'void' },
            );
        });

        it('should include the UTM source in an instance DELETE request', async () => {
            const spy = vi.spyOn(ts_client, 'del');
            spy.mockResolvedValue(undefined as any);

            await removeBookingInstance('booking/1', 123);

            expect(spy).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/booking%2F1/instance/123?utm_source=${encoded_utm_source}`,
                { response_type: 'void' },
            );
        });
    });

    describe('cancelOverlappingRecurringBookings', () => {
        it('should cancel an overlapping desk booking on another floor', async () => {
            const now = new Date('2026-08-18T10:55:00+10:00').valueOf();
            const now_spy = vi.spyOn(Date, 'now').mockReturnValue(now);
            vi.spyOn(ts_client, 'get').mockResolvedValue([
                {
                    id: 'ad-hoc-booking',
                    booking_start:
                        new Date('2026-08-18T16:45:00+10:00').valueOf() / 1000,
                    booking_end:
                        new Date('2026-08-18T17:15:00+10:00').valueOf() / 1000,
                    booking_type: 'desk',
                    approved: true,
                    asset_id: 'F-010',
                    zones: ['first-floor'],
                },
            ] as never);
            const delete_spy = vi
                .spyOn(ts_client, 'del')
                .mockResolvedValue(undefined);
            const post_spy = vi.spyOn(ts_client, 'post');
            const assignment = new Booking({
                id: 'permanent-assignment',
                booking_start:
                    new Date('2026-08-18T03:00:00+10:00').valueOf() / 1000,
                booking_end:
                    new Date('2026-08-18T23:00:00+10:00').valueOf() / 1000,
                booking_type: 'desk',
                recurrence_type: 'daily',
                user_email: 'staff@example.com',
                asset_id: 'G-033',
                zones: ['ground-floor'],
            });

            await expect(
                cancelOverlappingRecurringBookings(assignment, 'desk'),
            ).resolves.toEqual(['ad-hoc-booking']);

            expect(delete_spy).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/ad-hoc-booking?utm_source=${encoded_utm_source}`,
                { response_type: 'void' },
            );
            expect(post_spy).not.toHaveBeenCalledWith(
                expect.stringContaining('/ad-hoc-booking/reject'),
                expect.anything(),
            );
            now_spy.mockRestore();
        });
    });

    describe('approveBooking', () => {
        it('should allow calling POST request for approving a booking', async () => {
            const spy = vi.spyOn(ts_client, 'post');
            expect(spy).not.toHaveBeenCalled();
            spy.mockResolvedValue({} as any);
            const booking = await approveBooking('1');
            expect(booking).toBeInstanceOf(Booking);
            expect(ts_client.post).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/1/approve`,
                '',
            );
            spy.mockReset();
        });
    });

    describe('rejectBooking', () => {
        it('should allow calling POST request for rejecting a booking', async () => {
            const spy = vi.spyOn(ts_client, 'post');
            expect(spy).not.toHaveBeenCalled();
            spy.mockResolvedValue({} as any);
            const booking = await rejectBooking('1');
            expect(booking).toBeInstanceOf(Booking);
            expect(ts_client.post).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/1/reject`,
                '',
            );
            spy.mockReset();
        });
    });

    describe('checkinBooking', () => {
        it('should allow calling POST request for checking in a booking', async () => {
            const spy = vi.spyOn(ts_client, 'post');
            expect(spy).not.toHaveBeenCalled();
            spy.mockResolvedValue({} as any);
            const booking = await checkinBooking('1', true);
            expect(booking).toBeInstanceOf(Booking);
            expect(ts_client.post).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/1/check_in?state=true&utm_source=${utm_source}`,
                '',
            );
            spy.mockReset();
        });
    });

    describe('setBookingCheckedIn', () => {
        it('should check in the whole booking when it is not recurring', async () => {
            const spy = vi.spyOn(ts_client, 'post');
            spy.mockResolvedValue({} as any);
            const booking = await setBookingCheckedIn(
                new Booking({ id: '1', booking_start: 100 }),
                true,
            );
            expect(booking).toBeInstanceOf(Booking);
            expect(ts_client.post).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/1/check_in?state=true&utm_source=${utm_source}`,
                '',
            );
            spy.mockReset();
        });

        it('should check in only the instance of a recurring booking', async () => {
            const spy = vi.spyOn(ts_client, 'post');
            spy.mockResolvedValue({} as any);
            await setBookingCheckedIn(
                new Booking({
                    id: '1',
                    booking_start: 100,
                    instance: 200,
                    recurrence_type: 'daily',
                } as any),
                true,
            );
            expect(ts_client.post).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/1/check_in/200?state=true&utm_source=${utm_source}`,
                '',
            );
            spy.mockReset();
        });

        it('should use the start time for the first instance of a series', async () => {
            const spy = vi.spyOn(ts_client, 'post');
            spy.mockResolvedValue({} as any);
            await setBookingCheckedIn(
                new Booking({
                    id: '1',
                    booking_start: 100,
                    recurrence_type: 'weekly',
                } as any),
                false,
            );
            expect(ts_client.post).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/1/check_in/100?state=false&utm_source=${utm_source}`,
                '',
            );
            spy.mockReset();
        });
    });
});
