import { CalendarEvent } from '@placeos/common';
import { addMinutes, format } from 'date-fns';

import {
    canExtend,
    currentPeriod,
    endingSoon,
    formatCountdown,
    freeMinutes,
    nextPeriod,
    quickBookDurations,
    releaseCountdown,
    timelineData,
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
            expect(currentPeriod([], null as any, next)).toEqual([
                false,
                1,
                30,
            ]);
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

    describe('timelineData', () => {
        it('should keep hour markers when the clock moves off the step interval', () => {
            const timeline = timelineData(
                [],
                FIXED_NOW + 60 * 1000,
                timelineStart(FIXED_NOW),
            );

            expect(
                timeline.blocks.filter((block) => block.on_hour),
            ).toHaveLength(12);
        });

        it('should position bookings using their exact start and end times', () => {
            const booking = {
                date: FIXED_NOW + 33 * 60 * 1000,
                duration: 17,
            } as any;
            const start = timelineStart(FIXED_NOW);
            const timeline = timelineData([booking], FIXED_NOW, start);

            expect(timeline.blocks).toHaveLength(72);
            expect(timeline.bookings[0].start).toBeCloseTo((93 / 720) * 100);
            expect(timeline.bookings[0].size).toBeCloseTo((17 / 720) * 100);
        });

        it('should move the current-time marker between grid intervals', () => {
            const start = timelineStart(FIXED_NOW);
            const first = timelineData([], FIXED_NOW, start);
            const second = timelineData([], FIXED_NOW + 30 * 1000, start);

            expect(second.now).toBeGreaterThan(first.now);
            expect(second.now - first.now).toBeCloseTo((0.5 / 720) * 100);
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
});
