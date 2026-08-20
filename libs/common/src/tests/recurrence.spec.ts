import { addWeeks, endOfDay, format, getUnixTime } from 'date-fns';

import {
    formatRecurrence,
    fromBookingRecurrence,
    fromEventRecurrence,
    RecurrDays,
    recurrenceEndDate,
    recurrenceInstanceCount,
    toBookingRecurrence,
    toEventRecurrence,
    WeekOfMonth,
} from '../lib/recurrence';

describe('formatRecurrence', () => {
    const selected_date = new Date(2026, 2, 31).valueOf();

    it('should return an empty string for no recurrence', () => {
        expect(
            formatRecurrence({
                _custom: false,
                type: 'none',
                interval: 1,
                end_type: 'never',
            }),
        ).toBe('');
    });

    it('should format daily recurrence with an end date', () => {
        expect(
            formatRecurrence({
                _custom: true,
                type: 'daily',
                interval: 2,
                end_type: 'date',
                end_date: new Date(2026, 3, 30).valueOf(),
            }),
        ).toBe('Every 2 days until 30 Apr 2026');
    });

    it('should format weekly recurrence with multiple weekdays and instances', () => {
        expect(
            formatRecurrence({
                _custom: true,
                type: 'weekly',
                interval: 1,
                weekdays: new Set([1, 3] as any[]),
                end_type: 'instances',
                end_instances: 4,
                end_date: new Date(2026, 2, 25).valueOf(),
            }),
        ).toBe(
            'Every 1 week on Monday and Wednesday ends after 4 instances (25 Mar 2026)',
        );
    });

    it('should serialise weekly instances with the final occurrence date', () => {
        const booking_date = new Date(2026, 4, 12).valueOf();
        const raw = toEventRecurrence(
            {
                _custom: true,
                type: 'weekly',
                interval: 1,
                weekdays: new Set([2 as any]),
                end_type: 'instances',
                end_instances: 7,
            },
            booking_date,
        );

        expect(raw.end).toBe(endOfDay(addWeeks(booking_date, 6)).valueOf());
        expect(formatRecurrence(fromEventRecurrence(raw), booking_date)).toBe(
            'Every 1 week on Tuesday ends after 7 instances (23 Jun 2026)',
        );
    });

    it('should count booking instances from the first matching recurrence date', () => {
        const booking_date = new Date(2026, 4, 12).valueOf();
        const first_instance = new Date(2026, 4, 14).valueOf();
        const raw = toBookingRecurrence(
            {
                _custom: true,
                type: 'weekly',
                interval: 1,
                weekdays: new Set([4 as any]),
                end_type: 'instances',
                end_instances: 3,
            },
            booking_date,
        );

        expect(raw.recurrence_end).toBe(
            Math.floor(endOfDay(addWeeks(first_instance, 2)).valueOf() / 1000),
        );
    });

    it('should count multi-day weekly instances individually', () => {
        const booking_date = new Date(2026, 4, 12).valueOf();
        const raw = toBookingRecurrence(
            {
                _custom: true,
                type: 'weekly',
                interval: 1,
                weekdays: new Set([2, 4] as any[]),
                end_type: 'instances',
                end_instances: 3,
            },
            booking_date,
        );

        expect(raw.recurrence_end).toBe(
            Math.floor(
                endOfDay(new Date(2026, 4, 19).valueOf()).valueOf() / 1000,
            ),
        );
    });

    it('should fall back to the selected weekday for weekly recurrence', () => {
        expect(
            formatRecurrence(
                {
                    _custom: true,
                    type: 'weekly',
                    interval: 1,
                    end_type: 'never',
                },
                selected_date,
            ),
        ).toBe(`Every 1 week on ${format(selected_date, 'EEEE')}`);
    });

    it('should format monthly recurrence by week and weekday', () => {
        expect(
            formatRecurrence({
                _custom: true,
                type: 'monthly',
                interval: 2,
                weekdays: new Set([2 as any]),
                week: WeekOfMonth.Last as any,
                monthly_type: 'day_of_week',
                end_type: 'never',
            }),
        ).toBe('Every 2 months on the Last Tuesday');
    });

    it('should recover monthly recurrence week and weekday from event recurrence start', () => {
        const recurrence = fromEventRecurrence({
            pattern: 'monthly',
            interval: 1,
            days_of_week: [3],
            start: new Date(2026, 4, 13, 9).valueOf(),
            end: new Date(2026, 10, 30).valueOf(),
        });

        expect(
            formatRecurrence(recurrence, new Date(2026, 4, 12).valueOf()),
        ).toBe('Every 1 month on the Second Wednesday until 30 Nov 2026');
    });

    it('should anchor monthly event recurrence to the selected week and weekday', () => {
        const booking_date = new Date(2026, 4, 12, 9).valueOf();
        const raw = toEventRecurrence(
            {
                _custom: true,
                type: 'monthly',
                interval: 1,
                weekdays: new Set([3 as any]),
                week: WeekOfMonth.Second as any,
                monthly_type: 'day_of_week',
                end_type: 'never',
            },
            booking_date,
        );

        expect(raw.pattern).toBe('monthly');
        expect(raw.days_of_week).toEqual([3]);
        expect(raw.nth_of_month).toBe(WeekOfMonth.Second);
        expect(raw.start).toBe(new Date(2026, 4, 13, 9).valueOf());
    });

    it('should prefer the monthly recurrence week from event metadata', () => {
        const recurrence = fromEventRecurrence({
            pattern: 'monthly',
            interval: 1,
            days_of_week: [3],
            nth_of_month: WeekOfMonth.Second,
            start: new Date(2026, 4, 27, 9).valueOf(),
            end: new Date(2026, 10, 30).valueOf(),
        });

        expect(formatRecurrence(recurrence)).toBe(
            'Every 1 month on the Second Wednesday until 30 Nov 2026',
        );
    });

    it('should serialise monthly event recurrence by day of month', () => {
        const booking_date = new Date(2026, 4, 12, 9).valueOf();
        const raw = toEventRecurrence(
            {
                _custom: true,
                type: 'monthly',
                interval: 1,
                monthly_type: 'day_of_month',
                end_type: 'never',
            },
            booking_date,
        );

        expect(raw.pattern).toBe('month_day');
        expect(raw.days_of_week).toEqual([]);
        expect(raw.start).toBe(booking_date);
    });

    it('should recover monthly event recurrence by day of month', () => {
        const recurrence = fromEventRecurrence({
            pattern: 'month_day',
            interval: 1,
            days_of_week: [],
            start: new Date(2026, 4, 12, 9).valueOf(),
            end: new Date(2026, 10, 30).valueOf(),
        });

        expect(recurrence.monthly_type).toBe('day_of_month');
        expect(
            formatRecurrence(recurrence, new Date(2026, 4, 12).valueOf()),
        ).toBe('Every 1 month on day 12 until 30 Nov 2026');
    });

    it('should preserve the selected event recurrence end date', () => {
        const booking_date = new Date(2026, 5, 2, 9).valueOf();
        const end_date = new Date(2026, 5, 30, 23, 59, 59, 999).valueOf();
        const raw = toEventRecurrence(
            {
                _custom: true,
                type: 'weekly',
                interval: 1,
                weekdays: new Set([2 as any]),
                end_type: 'date',
                end_date,
            },
            booking_date,
        );

        expect(raw.end).toBe(end_date);
    });

    it('should format monthly recurrence by selected day of month', () => {
        expect(
            formatRecurrence(
                {
                    _custom: true,
                    type: 'monthly',
                    interval: 1,
                    monthly_type: 'day_of_month',
                    end_type: 'never',
                },
                selected_date,
            ),
        ).toBe('Every 1 month on day 31');
    });

    it('should format yearly recurrence using the selected date', () => {
        expect(
            formatRecurrence(
                {
                    _custom: true,
                    type: 'yearly',
                    interval: 1,
                    end_type: 'never',
                },
                selected_date,
            ),
        ).toBe('Every 1 year on 31 Mar');
    });

    it('should default invalid intervals to one', () => {
        expect(
            formatRecurrence({
                _custom: true,
                type: 'daily',
                interval: 0,
                end_type: 'never',
            }),
        ).toBe('Every 1 day');
    });
});

/**
 * PPT-2672: a stored `recurrence_instances` value that is not a usable count
 * (e.g. an empty array from `extension_data`) used to read as truthy. That
 * flipped the recurrence to instances mode, where the end date was recomputed
 * as "one instance" — so the summary showed the booking date instead of the
 * end date the user picked, and the count rendered as an empty string.
 */
describe('recurrence instance counts', () => {
    const booking_date = new Date(2026, 7, 19).valueOf();
    const end_date = new Date(2026, 8, 2, 23, 59).valueOf();

    it('should only accept whole counts of one or more', () => {
        expect(recurrenceInstanceCount([] as any)).toBeUndefined();
        expect(recurrenceInstanceCount(null)).toBeUndefined();
        expect(recurrenceInstanceCount(undefined)).toBeUndefined();
        expect(recurrenceInstanceCount(0)).toBeUndefined();
        expect(recurrenceInstanceCount(13)).toBe(13);
        expect(recurrenceInstanceCount('13')).toBe(13);
    });

    it('should end by date when the stored instance count is unusable', () => {
        const recurrence = fromBookingRecurrence({
            recurrence_custom: true,
            recurrence_type: 'daily',
            recurrence_interval: 1,
            recurrence_days: RecurrDays.ALL,
            recurrence_end: getUnixTime(end_date),
            recurrence_instances: [] as any,
        });

        expect(recurrence.end_type).toBe('date');
        expect(recurrence.end_instances).toBeUndefined();
        expect(formatRecurrence(recurrence, booking_date)).toBe(
            'Every 1 day until 02 Sep 2026',
        );
    });

    it('should keep a usable stored instance count', () => {
        const recurrence = fromBookingRecurrence({
            recurrence_custom: true,
            recurrence_type: 'daily',
            recurrence_interval: 1,
            recurrence_days: RecurrDays.ALL,
            recurrence_end: getUnixTime(end_date),
            recurrence_instances: 15,
        });

        expect(recurrence.end_type).toBe('instances');
        expect(recurrence.end_instances).toBe(15);
        expect(formatRecurrence(recurrence, booking_date)).toBe(
            'Every 1 day ends after 15 instances (02 Sep 2026)',
        );
    });

    it('should count the full run when computing an instance end date', () => {
        expect(
            recurrenceEndDate(
                {
                    _custom: true,
                    type: 'daily',
                    interval: 1,
                    end_type: 'instances',
                    end_instances: 15,
                },
                booking_date,
            ),
        ).toBe(endOfDay(new Date(2026, 8, 2)).valueOf());
    });

    it('should not write an unusable instance count back to a booking', () => {
        const raw = toBookingRecurrence(
            {
                _custom: true,
                type: 'daily',
                interval: 1,
                end_type: 'instances',
                end_instances: [] as any,
            },
            booking_date,
        );

        expect(raw.recurrence_instances).toBeUndefined();
    });
});
