import { addDays, subDays } from 'date-fns';
import { Booking } from '../lib/booking.class';

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
});
