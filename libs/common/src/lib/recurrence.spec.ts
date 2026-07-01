import { addDays } from 'date-fns';
import { fromBookingRecurrence, isRecurrenceInstanceDate } from './recurrence';

describe('isRecurrenceInstanceDate', () => {
    const start = new Date('2026-06-01T09:00:00').valueOf(); // a Monday

    it('matches the start day for non-recurring', () => {
        const r = fromBookingRecurrence({ recurrence_type: 'none' });
        expect(isRecurrenceInstanceDate(r, start, start)).toBe(true);
        expect(
            isRecurrenceInstanceDate(r, start, addDays(start, 1).valueOf()),
        ).toBe(false);
    });

    it('matches every day for a daily series', () => {
        const r = fromBookingRecurrence({ recurrence_type: 'daily' });
        for (let i = 0; i < 14; i++) {
            expect(
                isRecurrenceInstanceDate(r, start, addDays(start, i).valueOf()),
            ).toBe(true);
        }
        expect(
            isRecurrenceInstanceDate(r, start, addDays(start, -1).valueOf()),
        ).toBe(false);
    });

    it('matches only selected weekdays for a weekly series', () => {
        // Mon + Wed (bit 1 + bit 3)
        const r = fromBookingRecurrence({
            recurrence_type: 'daily',
            recurrence_days: (1 << 1) | (1 << 3),
        });
        expect(isRecurrenceInstanceDate(r, start, start)).toBe(true); // Mon
        expect(
            isRecurrenceInstanceDate(r, start, addDays(start, 1).valueOf()),
        ).toBe(false); // Tue
        expect(
            isRecurrenceInstanceDate(r, start, addDays(start, 2).valueOf()),
        ).toBe(true); // Wed
    });

    it('respects the recurrence end date', () => {
        const r = fromBookingRecurrence({
            recurrence_type: 'daily',
            recurrence_end: Math.floor(addDays(start, 3).valueOf() / 1000),
        });
        expect(
            isRecurrenceInstanceDate(r, start, addDays(start, 3).valueOf()),
        ).toBe(true);
        expect(
            isRecurrenceInstanceDate(r, start, addDays(start, 10).valueOf()),
        ).toBe(false);
    });
});
