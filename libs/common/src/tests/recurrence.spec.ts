import { addWeeks, endOfDay, format } from 'date-fns';

import {
    formatRecurrence,
    fromEventRecurrence,
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
            pattern: 'month_day',
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

        expect(raw.pattern).toBe('month_day');
        expect(raw.days_of_week).toEqual([3]);
        expect(raw.start).toBe(new Date(2026, 4, 13, 9).valueOf());
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
