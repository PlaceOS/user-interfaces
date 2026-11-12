import { CalendarEvent } from '@placeos/common';
import { addDays, addMinutes, format, startOfDay } from 'date-fns';

import {
    burnInOffset,
    canExtend,
    currentPeriod,
    endingSoon,
    formatCountdown,
    freeMinutes,
    isNightTime,
    nextPeriod,
    quickBookDurations,
    releaseCountdown,
    timelineBlocks,
    timelineBookings,
    timelineNow,
    timelineSlot,
    timelineStart,
} from '../../app/new-panel/helpers';

const FIXED_NOW = new Date('2026-07-04T09:00:00.000Z').valueOf();

const event = (date: number, duration = 30) =>
    new CalendarEvent({ date, duration });

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
            expect(nextPeriod(null)).toBe('');
        });

        it('should return an empty string when the next booking is more than a day away', () => {
            const date = FIXED_NOW + 24 * 60 * 60 * 1000;
            expect(nextPeriod(event(date))).toBe('');
        });

        it('should format a start-to-end range for an upcoming booking', () => {
            const date = FIXED_NOW + 60 * 60 * 1000;
            const expected = `${format(date, 'h:mm a')} - ${format(
                addMinutes(date, 30),
                'h:mm a',
            )}`;
            expect(nextPeriod(event(date))).toBe(expected);
        });

        it('should show the weekday for a booking tomorrow', () => {
            const date = addDays(startOfDay(FIXED_NOW), 1).valueOf() + 1000;
            expect(nextPeriod(event(date))).toBe(
                `${format(date, 'EEE h:mm a')} - ${format(
                    addMinutes(date, 30),
                    'h:mm a',
                )}`,
            );
        });

        it('should use the given time format', () => {
            const date = FIXED_NOW + 60 * 1000;
            expect(nextPeriod(event(date), 'HH:mm')).toBe(
                `${format(date, 'HH:mm')} - ${format(
                    addMinutes(date, 30),
                    'HH:mm',
                )}`,
            );
        });
    });

    describe('currentPeriod', () => {
        it('should return an empty tuple when there is no current or next booking', () => {
            expect(currentPeriod([], null, null)).toEqual([]);
        });

        it('should return an empty tuple when the next booking is more than a day away', () => {
            const next = event(FIXED_NOW + 24 * 60 * 60 * 1000);
            expect(currentPeriod([], null, next)).toEqual([]);
        });

        it('should count down to the next booking when there is no current booking', () => {
            const next = event(FIXED_NOW + 90 * 60 * 1000);
            expect(currentPeriod([], null, next)).toEqual([false, 1, 30]);
        });

        it('should count down to the next free slot when a booking is current', () => {
            // A 120 minute booking starting now leaves the next free slot
            // beginning 120 minutes from now.
            const current = event(FIXED_NOW, 120);
            const next = event(FIXED_NOW + 200 * 60 * 1000);
            expect(currentPeriod([current], current, next)).toEqual([
                true,
                2,
                0,
            ]);
        });
    });

    describe('timeline helpers', () => {
        it('should mark each hour on the timeline', () => {
            const blocks = timelineBlocks(timelineStart(FIXED_NOW));

            expect(blocks.filter((block) => block.on_hour)).toHaveLength(12);
        });

        it('should label hours in the 24 hour format', () => {
            const start = new Date(2026, 6, 4, 13, 0).valueOf();
            expect(timelineBlocks(start)[0].hour).toBe('1PM');
            expect(timelineBlocks(start, 10, 'HH:mm')[0].hour).toBe('13');
        });

        it('should position bookings using their exact start and end times', () => {
            const booking = event(FIXED_NOW + 33 * 60 * 1000, 17);
            const start = timelineStart(FIXED_NOW);
            const bookings = timelineBookings([booking], start);

            expect(timelineBlocks(start)).toHaveLength(72);
            expect(bookings[0].start).toBeCloseTo((93 / 720) * 100);
            expect(bookings[0].size).toBeCloseTo((17 / 720) * 100);
        });

        it('should clip bookings to the timeline and drop the ones outside it', () => {
            const start = timelineStart(FIXED_NOW);
            const bookings = timelineBookings(
                [
                    // Starts 30 minutes before the timeline
                    event(addMinutes(start, -30).valueOf(), 60),
                    // Ends when the timeline starts
                    event(addMinutes(start, -30).valueOf(), 30),
                    // Starts when the timeline ends
                    event(addMinutes(start, 12 * 60).valueOf(), 30),
                ],
                start,
            );

            expect(bookings).toHaveLength(1);
            expect(bookings[0].start).toBe(0);
            expect(bookings[0].size).toBeCloseTo((30 / 720) * 100);
        });

        it('should move the current-time marker between grid intervals', () => {
            const start = timelineStart(FIXED_NOW);
            const first = timelineNow(FIXED_NOW, start);
            const second = timelineNow(FIXED_NOW + 30 * 1000, start);

            expect(second).toBeGreaterThan(first);
            expect(second - first).toBeCloseTo((0.5 / 720) * 100);
        });
    });

    describe('releaseCountdown', () => {
        it('should return the time left in the pending period', () => {
            const booking = event(addMinutes(FIXED_NOW, -2).valueOf());
            expect(releaseCountdown(booking, 10, FIXED_NOW)).toBe(
                8 * 60 * 1000,
            );
        });

        it('should not go below zero', () => {
            const booking = event(addMinutes(FIXED_NOW, -20).valueOf());
            expect(releaseCountdown(booking, 10, FIXED_NOW)).toBe(0);
        });

        it('should return null without a pending period', () => {
            expect(releaseCountdown(event(FIXED_NOW), 0)).toBeNull();
        });
    });

    it('formatCountdown should format as m:ss', () => {
        expect(formatCountdown(272 * 1000)).toBe('4:32');
        expect(formatCountdown(5 * 1000)).toBe('0:05');
    });

    describe('freeMinutes', () => {
        it('should return minutes until the next booking', () => {
            const bookings = [
                event(addMinutes(FIXED_NOW, 90).valueOf()),
                event(addMinutes(FIXED_NOW, 40).valueOf()),
            ];
            expect(freeMinutes(bookings, FIXED_NOW)).toBe(40);
        });

        it('should ignore bookings that have started', () => {
            const bookings = [
                event(addMinutes(FIXED_NOW, -10).valueOf()),
                event(addMinutes(FIXED_NOW, 50).valueOf()),
            ];
            expect(freeMinutes(bookings, FIXED_NOW)).toBe(50);
        });

        it('should return the max without later bookings', () => {
            expect(freeMinutes([], FIXED_NOW, 120)).toBe(120);
        });
    });

    it('quickBookDurations should only offer durations that fit', () => {
        expect(quickBookDurations(45)).toEqual([15, 30]);
        expect(quickBookDurations(120, 30)).toEqual([30, 60]);
        expect(quickBookDurations(10)).toEqual([]);
    });

    describe('canExtend', () => {
        const current = event(FIXED_NOW);

        it('should allow extending into free time', () => {
            expect(canExtend(current, [current])).toBe(true);
        });

        it('should block extending into the next booking', () => {
            const next = event(addMinutes(FIXED_NOW, 40).valueOf());
            expect(canExtend(current, [current, next])).toBe(false);
        });
    });

    describe('endingSoon', () => {
        const current = event(FIXED_NOW);
        const next = event(addMinutes(FIXED_NOW, 30).valueOf());

        it('should return the next booking near the end of the current one', () => {
            const now = addMinutes(FIXED_NOW, 26).valueOf();
            expect(endingSoon(current, next, now)).toBe(next);
        });

        it('should return null earlier in the meeting', () => {
            const now = addMinutes(FIXED_NOW, 10).valueOf();
            expect(endingSoon(current, next, now)).toBeNull();
        });

        it('should return null after the current booking ends', () => {
            const now = addMinutes(FIXED_NOW, 31).valueOf();
            expect(endingSoon(current, next, now)).toBeNull();
        });

        it('should return null when the next booking is much later', () => {
            const now = addMinutes(FIXED_NOW, 26).valueOf();
            const later = event(addMinutes(FIXED_NOW, 90).valueOf());
            expect(endingSoon(current, later, now)).toBeNull();
        });
    });

    describe('timelineSlot', () => {
        const start = timelineStart(FIXED_NOW);

        it('should snap a future tap to the start of its slot', () => {
            // The timeline starts an hour before now, so 2.1 hours in is
            // 66 minutes from now. That snaps down to 60 minutes from now.
            const slot = timelineSlot(2.1 / 12, start, [], FIXED_NOW);
            expect(slot).toBe(addMinutes(FIXED_NOW, 60).valueOf());
        });

        it('should use now for the slot in progress', () => {
            const now = addMinutes(FIXED_NOW, 5).valueOf();
            const slot = timelineSlot(1.1 / 12, start, [], now);
            expect(slot).toBe(now);
        });

        it('should return null for past or booked slots', () => {
            expect(timelineSlot(0, start, [], FIXED_NOW)).toBeNull();
            const booking = event(addMinutes(FIXED_NOW, 60).valueOf());
            expect(
                timelineSlot(2.1 / 12, start, [booking], FIXED_NOW),
            ).toBeNull();
        });
    });

    describe('isNightTime', () => {
        const at = (hour: number, minute = 0) =>
            new Date(2026, 6, 4, hour, minute).valueOf();

        it('should handle a window that crosses midnight', () => {
            expect(isNightTime(at(19))).toBe(true);
            expect(isNightTime(at(2))).toBe(true);
            expect(isNightTime(at(6, 59))).toBe(true);
            expect(isNightTime(at(7))).toBe(false);
            expect(isNightTime(at(18, 59))).toBe(false);
        });

        it('should use the default hours for unset settings', () => {
            expect(isNightTime(at(22), null, null)).toBe(true);
        });

        it('should handle a window inside one day', () => {
            expect(isNightTime(at(13), '12:00', '14:00')).toBe(true);
            expect(isNightTime(at(14), '12:00', '14:00')).toBe(false);
        });

        it('should return false for invalid or equal times', () => {
            expect(isNightTime(at(22), 'late', '07:00')).toBe(false);
            expect(isNightTime(at(22), '25:00', '07:00')).toBe(false);
            expect(isNightTime(at(22), '07:00', '07:00')).toBe(false);
        });
    });

    it('burnInOffset should move to the next offset each minute', () => {
        expect(burnInOffset(0)).toEqual([0, 0]);
        expect(burnInOffset(60 * 1000)).toEqual([2, 0]);
        expect(burnInOffset(9 * 60 * 1000)).toEqual([0, 0]);
    });
});
