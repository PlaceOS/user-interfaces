import { addMinutes, format } from 'date-fns';

import { currentPeriod, nextPeriod } from '../../app/new-panel/helpers';

const FIXED_NOW = new Date('2026-07-04T09:00:00.000Z').valueOf();

// NOTE: `currentPeriod` depends on `getNextFreeTimeSlot` from `@placeos/events`.
// The native unit-test builder inlines workspace code, so module mocks do not
// intercept it. Instead we feed real booking lists shaped so the real
// `getNextFreeTimeSlot` returns a free slot starting at a known offset.

describe('new-panel helpers', () => {
    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(FIXED_NOW);
    });

    afterEach(() => vi.useRealTimers());

    describe('nextPeriod', () => {
        it('should return an empty string when there is no next booking', () => {
            expect(nextPeriod(null as any)).toBe('');
        });

        it('should return an empty string when the next booking is more than a day away', () => {
            const date = FIXED_NOW + 24 * 60 * 60 * 1000;
            expect(nextPeriod({ date, duration: 30 } as any)).toBe('');
        });

        it('should format a start-to-end range for an upcoming booking', () => {
            const date = FIXED_NOW + 60 * 60 * 1000;
            const expected = `${format(date, 'h:mm a')} - ${format(
                addMinutes(date, 30),
                'h:mm a',
            )}`;
            expect(nextPeriod({ date, duration: 30 } as any)).toBe(expected);
        });
    });

    describe('currentPeriod', () => {
        it('should return an empty tuple when there is no current or next booking', () => {
            expect(currentPeriod([], null as any, null as any)).toEqual([]);
        });

        it('should return an empty tuple when the next booking is more than a day away', () => {
            const next = { date: FIXED_NOW + 24 * 60 * 60 * 1000 } as any;
            expect(currentPeriod([], null as any, next)).toEqual([]);
        });

        it('should count down to the next booking when there is no current booking', () => {
            const next = { date: FIXED_NOW + 90 * 60 * 1000 } as any;
            expect(currentPeriod([], null as any, next)).toEqual([false, 1, 30]);
        });

        it('should count down to the next free slot when a booking is current', () => {
            // A 120 minute booking starting now leaves the next free slot
            // beginning 120 minutes from now.
            const bookings = [{ date: FIXED_NOW, duration: 120 }] as any;
            const current = { date: FIXED_NOW } as any;
            const next = { date: FIXED_NOW + 200 * 60 * 1000 } as any;
            const result = currentPeriod(bookings, current, next);
            expect(result).toEqual([true, 2, 0]);
        });

        it('should report a checked-in state regardless of the next booking', () => {
            // A 45 minute booking starting now leaves the next free slot
            // beginning 45 minutes from now.
            const bookings = [{ date: FIXED_NOW, duration: 45 }] as any;
            const current = { date: FIXED_NOW } as any;
            const [checked_in, hours, minutes] = currentPeriod(
                bookings,
                current,
                null as any,
            ) as [boolean, number, number];
            expect(checked_in).toBe(true);
            expect(hours).toBe(0);
            expect(minutes).toBe(45);
        });
    });
});
