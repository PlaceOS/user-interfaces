import { Booking, VERSION } from '@placeos/common';
import {
    approveBooking,
    checkinBooking,
    createBooking,
    queryBookings,
    rejectBooking,
    saveBooking,
    showBooking,
    updateBooking,
} from '../lib/bookings.fn';

jest.mock('@placeos/ts-client');

import * as ts_client from '@placeos/ts-client';

describe('[Booking API]', () => {
    const app_version = VERSION.raw || VERSION.version || VERSION.hash;
    const app_name = 'PlaceOS';

    beforeEach(() => jest.clearAllMocks());

    describe('queryBookings', () => {
        it('should allow calling GET request for listing bookings', async () => {
            const spy = jest.spyOn(ts_client, 'get');
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

    describe('showBooking', () => {
        it('should allow calling GET request for a specific booking', async () => {
            const spy = jest.spyOn(ts_client, 'get');
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
            const spy = jest.spyOn(ts_client, 'post');
            expect(spy).not.toHaveBeenCalled();
            spy.mockResolvedValue({} as any);
            const booking = await createBooking({});
            expect(booking).toBeInstanceOf(Booking);
            expect(ts_client.post).toHaveBeenCalledWith(
                `/api/staff/v1/bookings`,
                { extension_data: { app_name, app_version } },
            );
            spy.mockReset();
        });
    });

    describe('updateBooking', () => {
        it('should allow calling PATCH request for updating a booking', async () => {
            const spy = jest.spyOn(ts_client, 'patch');
            expect(spy).not.toHaveBeenCalled();
            spy.mockResolvedValue({} as any);
            const booking = await updateBooking('1', {});
            expect(booking).toBeInstanceOf(Booking);
            expect(ts_client.patch).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/1`,
                { extension_data: { app_name, app_version } },
            );
            spy.mockReset();
        });
        it('should allow calling PUT request for updating a booking', async () => {
            const spy = jest.spyOn(ts_client, 'put');
            expect(spy).not.toHaveBeenCalled();
            spy.mockResolvedValue({} as any);
            const booking = await updateBooking('1', {}, 'put');
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
            const spy = jest.spyOn(ts_client, 'post');
            spy.mockResolvedValue({} as any);
            expect(ts_client.post).not.toHaveBeenCalled();
            await saveBooking({});
            expect(ts_client.post).toHaveBeenCalledWith(
                `/api/staff/v1/bookings`,
                { extension_data: { app_name, app_version } },
            );
            spy.mockReset();
        });
        it('should update existing bookings', async () => {
            const spy = jest.spyOn(ts_client, 'patch');
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

    describe('approveBooking', () => {
        it('should allow calling POST request for approving a booking', async () => {
            const spy = jest.spyOn(ts_client, 'post');
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
            const spy = jest.spyOn(ts_client, 'post');
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
            const spy = jest.spyOn(ts_client, 'post');
            expect(spy).not.toHaveBeenCalled();
            spy.mockResolvedValue({} as any);
            const booking = await checkinBooking('1', true);
            expect(booking).toBeInstanceOf(Booking);
            expect(ts_client.post).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/1/check_in?state=true`,
                '',
            );
            spy.mockReset();
        });
    });
});
