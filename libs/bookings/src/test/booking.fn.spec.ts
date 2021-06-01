import { of } from 'rxjs';

import { Booking } from '../lib/booking.class';
import {
    createBooking,
    queryBookings,
    showBooking,
    updateBooking,
    saveBooking,
    approveBooking,
    rejectBooking,
    checkinBooking,
} from '../lib/bookings.fn';

jest.mock('@placeos/ts-client');

import * as ts_client from '@placeos/ts-client';

describe('[Booking API]', () => {
    describe('queryBookings', () => {
        it('should allow calling GET request for listing bookings', async () => {
            const spy = jest.spyOn(ts_client, 'get');
            expect(spy).not.toHaveBeenCalled();
            spy.mockImplementation(() => of([{}]) as any);
            const bookings = await queryBookings({
                period_start: 1,
                period_end: 2,
                type: 'desk',
            }).toPromise();
            expect(bookings).toHaveLength(1);
            expect(bookings[0]).toBeInstanceOf(Booking);
            expect(ts_client.get).toHaveBeenCalledWith(
                `/api/staff/v1/bookings?period_start=1&period_end=2&type=desk`
            );
            spy.mockReset();
        });
    });

    describe('showBooking', () => {
        it('should allow calling GET request for a specific booking', async () => {
            const spy = jest.spyOn(ts_client, 'get');
            expect(spy).not.toHaveBeenCalled();
            spy.mockImplementation(() => of({}) as any);
            const booking = await showBooking('1').toPromise();
            expect(booking).toBeInstanceOf(Booking);
            expect(ts_client.get).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/1`
            );
            spy.mockReset();
        });
    });

    describe('createBooking', () => {
        it('should allow calling POST request for creating a new booking', async () => {
            const spy = jest.spyOn(ts_client, 'post');
            expect(spy).not.toHaveBeenCalled();
            spy.mockImplementation(() => of({}) as any);
            const booking = await createBooking({}).toPromise();
            expect(booking).toBeInstanceOf(Booking);
            expect(ts_client.post).toHaveBeenCalledWith(
                `/api/staff/v1/bookings`,
                {}
            );
            spy.mockReset();
        });
    });

    describe('updateBooking', () => {
        it('should allow calling PATCH request for updating a booking', async () => {
            const spy = jest.spyOn(ts_client, 'patch');
            expect(spy).not.toHaveBeenCalled();
            spy.mockImplementation(() => of({}) as any);
            const booking = await updateBooking('1', {}).toPromise();
            expect(booking).toBeInstanceOf(Booking);
            expect(ts_client.patch).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/1`,
                {}
            );
            spy.mockReset();
        });
        it('should allow calling PUT request for updating a booking', async () => {
            const spy = jest.spyOn(ts_client, 'put');
            expect(spy).not.toHaveBeenCalled();
            spy.mockImplementation(() => of({}) as any);
            const booking = await updateBooking('1', {}, 'put').toPromise();
            expect(booking).toBeInstanceOf(Booking);
            expect(ts_client.put).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/1`,
                {}
            );
            spy.mockReset();
        });
    });

    describe('saveBooking', () => {
        it('should create new bookings', async () => {
            const spy = jest.spyOn(ts_client, 'post');
            spy.mockImplementation(() => of({}) as any);
            expect(ts_client.post).not.toHaveBeenCalled();
            await saveBooking({}).toPromise();
            expect(ts_client.post).toHaveBeenCalled();
            spy.mockReset();
        });
        it('should update existing bookings', async () => {
            const spy = jest.spyOn(ts_client, 'patch');
            spy.mockImplementation(() => of({}) as any);
            expect(ts_client.patch).not.toHaveBeenCalled();
            await saveBooking({ id: '1' }).toPromise();
            expect(ts_client.patch).toHaveBeenCalled();
            spy.mockReset();
        });
    });

    describe('approveBooking', () => {
        it('should allow calling POST request for approving a booking', async () => {
            const spy = jest.spyOn(ts_client, 'post');
            expect(spy).not.toHaveBeenCalled();
            spy.mockImplementation(() => of({}) as any);
            const booking = await approveBooking('1').toPromise();
            expect(booking).toBeInstanceOf(Booking);
            expect(ts_client.post).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/1/approve`,
                ''
            );
            spy.mockReset();
        });
    });

    describe('rejectBooking', () => {
        it('should allow calling POST request for rejecting a booking', async () => {
            const spy = jest.spyOn(ts_client, 'post');
            expect(spy).not.toHaveBeenCalled();
            spy.mockImplementation(() => of({}) as any);
            const booking = await rejectBooking('1').toPromise();
            expect(booking).toBeInstanceOf(Booking);
            expect(ts_client.post).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/1/reject`,
                ''
            );
            spy.mockReset();
        });
    });

    describe('checkinBooking', () => {
        it('should allow calling POST request for checking in a booking', async () => {
            const spy = jest.spyOn(ts_client, 'post');
            expect(spy).not.toHaveBeenCalled();
            spy.mockImplementation(() => of({}) as any);
            const booking = await checkinBooking('1', true).toPromise();
            expect(booking).toBeInstanceOf(Booking);
            expect(ts_client.post).toHaveBeenCalledWith(
                `/api/staff/v1/bookings/1/check_in?state=true`,
                ''
            );
            spy.mockReset();
        });
    });
});
