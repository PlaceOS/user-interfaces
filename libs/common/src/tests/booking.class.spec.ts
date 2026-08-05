import { Booking } from '../lib/types/booking.class';

describe('Booking', () => {
    it('derives the window from date/duration', () => {
        const date = 1_700_000_000_000; // ms
        const booking = new Booking({ date, duration: 60 });
        expect(booking.booking_start).toBe(Math.floor(date / 1000));
        expect(booking.booking_end).toBe(Math.floor(date / 1000) + 60 * 60);
        expect(booking.booking_end).toBeGreaterThan(booking.booking_start);
    });

    it('never inverts the window when a stale booking_end is paired with a fresh date', () => {
        // Fresh `date` but a stale `booking_end` that predates it and no duration.
        // Previously the constructor paired the fresh start with the stale end.
        const date = 1_700_000_000_000; // ms
        const booking = new Booking({
            date,
            booking_start: 1, // stale
            booking_end: 2, // stale, well before `date`
        } as any);
        expect(booking.booking_start).toBe(Math.floor(date / 1000));
        expect(booking.booking_end).toBeGreaterThan(booking.booking_start);
    });

    it('uses booking_start/booking_end when no date is provided', () => {
        const booking = new Booking({
            booking_start: 1_700_000_000,
            booking_end: 1_700_003_600,
        } as any);
        expect(booking.booking_start).toBe(1_700_000_000);
        expect(booking.booking_end).toBe(1_700_003_600);
    });

    it('retains server-provided booking history without serialising it', () => {
        const booking = new Booking({
            history: [
                { state: 'reserved', time: 1_700_000_000, source: 'desktop' },
                { state: 'checked_in', time: 1_700_000_600 },
            ],
        });

        expect(booking.history).toEqual([
            { state: 'reserved', time: 1_700_000_000, source: 'desktop' },
            { state: 'checked_in', time: 1_700_000_600 },
        ]);
        expect(booking.toJSON()).not.toHaveProperty('history');
    });
});
