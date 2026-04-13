import { Booking } from '@placeos/common';
import { addDays, subDays } from 'date-fns';

describe('Booking class', () => {
    let booking: Booking;

    beforeEach(() => {
        booking = new Booking({});
    });

    it('should create the object', () => {
        expect(booking).toBeTruthy();
    });

    it('should render to JSON', () => {
        const json = booking.toJSON();
        expect(json.booking_start).toBeTruthy();
        expect(json.booking_end).toBeTruthy();
        expect(json.timezone).toBeTruthy();
        // Check unneeded properties removed
        expect(json.date).toBeUndefined();
        expect(json.duration).toBeUndefined();
    });

    it('should allow checking today', () => {
        expect(booking.is_today).toBeTruthy();
        booking = new Booking({ date: addDays(new Date(), 2).valueOf() });
        expect(booking.is_today).toBeFalsy();
    });

    it('should allow checking completion', () => {
        expect(booking.is_done).toBeFalsy();
        booking = new Booking({
            date: subDays(new Date(), 2).valueOf(),
            duration: 60,
            all_day: false,
        });
        expect(booking.is_done).toBeTruthy();
    });

    it('should prefer visitor name from extension data', () => {
        booking = new Booking({
            booking_type: 'visitor',
            asset_id: 'visitor@example.com',
            description: 'Vendor Interview',
            extension_data: { visitor_name: 'Visitor One' },
        });

        expect(booking.asset_name).toBe('Visitor One');
    });

    it('should not use visitor reason as fallback visitor name', () => {
        booking = new Booking({
            booking_type: 'visitor',
            asset_id: 'visitor@example.com',
            description: 'Vendor Interview',
        });

        expect(booking.asset_name).toBe('visitor@example.com');
    });

    it('should prefer assigned desk name from extension data', () => {
        booking = new Booking({
            booking_type: 'desk',
            asset_id: 'desk-2',
            asset_name: 'Desk 1',
            extension_data: { assigned_asset_name: 'Desk 2' },
        });

        expect(booking.asset_name).toBe('Desk 2');
    });

    it('should use assigned_asset_name even when it is an ID fallback', () => {
        booking = new Booking({
            booking_type: 'desk',
            asset_id: 'desk-2',
            asset_name: 'Desk 1',
            extension_data: { assigned_asset_name: 'desk-2' },
        });

        expect(booking.asset_name).toBe('desk-2');
    });

    it('should preserve custom all-day periods', () => {
        booking = new Booking({
            all_day: true,
            date: new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
            duration: 8 * 60,
        });

        expect(booking.date).toBe(new Date(2028, 5, 15, 9, 0, 0, 0).valueOf());
        expect(booking.duration).toBe(8 * 60);
        expect(booking.date_end).toBe(
            new Date(2028, 5, 15, 17, 0, 0, 0).valueOf(),
        );
    });

    it('should load custom all-day bookings from extension data', () => {
        booking = new Booking({
            all_day: false,
            date: new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
            duration: 8 * 60,
            extension_data: { custom_all_day: true },
        });

        expect(booking.all_day).toBe(true);
        expect(booking.date).toBe(new Date(2028, 5, 15, 9, 0, 0, 0).valueOf());
        expect(booking.duration).toBe(8 * 60);
    });
});
