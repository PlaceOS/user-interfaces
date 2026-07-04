import { addMinutes, format } from 'date-fns';

import { getNextFreeTimeSlot } from '@placeos/events';
import { currentPeriod, nextPeriod } from '../../app/new-panel/helpers';

jest.mock('@placeos/events', () => ({
    getNextFreeTimeSlot: jest.fn(),
}));

const FIXED_NOW = new Date('2026-07-04T09:00:00.000Z').valueOf();

describe('new-panel helpers', () => {
    beforeEach(() => {
        jest.useFakeTimers();
        jest.setSystemTime(FIXED_NOW);
        (getNextFreeTimeSlot as jest.Mock).mockReset();
    });

    afterEach(() => jest.useRealTimers());

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
            (getNextFreeTimeSlot as jest.Mock).mockReturnValue({
                start: FIXED_NOW,
                end: FIXED_NOW,
            });
            expect(currentPeriod([], null as any, null as any)).toEqual([]);
        });

        it('should return an empty tuple when the next booking is more than a day away', () => {
            (getNextFreeTimeSlot as jest.Mock).mockReturnValue({
                start: FIXED_NOW,
                end: FIXED_NOW,
            });
            const next = { date: FIXED_NOW + 24 * 60 * 60 * 1000 } as any;
            expect(currentPeriod([], null as any, next)).toEqual([]);
        });

        it('should count down to the next booking when there is no current booking', () => {
            (getNextFreeTimeSlot as jest.Mock).mockReturnValue({
                start: FIXED_NOW,
                end: FIXED_NOW,
            });
            const next = { date: FIXED_NOW + 90 * 60 * 1000 } as any;
            expect(currentPeriod([], null as any, next)).toEqual([false, 1, 30]);
        });

        it('should count down to the next free slot when a booking is current', () => {
            const slot_start = FIXED_NOW + 120 * 60 * 1000;
            (getNextFreeTimeSlot as jest.Mock).mockReturnValue({
                start: slot_start,
                end: slot_start,
            });
            const bookings = [{ id: '1' }] as any;
            const current = { date: FIXED_NOW } as any;
            const next = { date: FIXED_NOW + 200 * 60 * 1000 } as any;
            const result = currentPeriod(bookings, current, next);
            expect(result).toEqual([true, 2, 0]);
            expect(getNextFreeTimeSlot).toHaveBeenCalledWith(bookings);
        });

        it('should report a checked-in state regardless of the next booking', () => {
            const slot_start = FIXED_NOW + 45 * 60 * 1000;
            (getNextFreeTimeSlot as jest.Mock).mockReturnValue({
                start: slot_start,
                end: slot_start,
            });
            const current = { date: FIXED_NOW } as any;
            const [checked_in, hours, minutes] = currentPeriod(
                [],
                current,
                null as any,
            ) as [boolean, number, number];
            expect(checked_in).toBe(true);
            expect(hours).toBe(0);
            expect(minutes).toBe(45);
        });
    });
});
