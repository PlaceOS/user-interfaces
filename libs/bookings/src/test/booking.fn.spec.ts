import { Booking, setCurrentUser, StaffUser, VERSION } from '@placeos/common';
import {
    approveBooking,
    bookedResourceList,
    checkinBooking,
    createBooking,
    queryBookings,
    rejectBooking,
    removeBooking,
    removeBookingInstance,
    saveBooking,
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
});
