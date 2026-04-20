import { format } from 'date-fns';

import { WeekOfMonth } from '../lib/recurrence';
import { formatRecurrence } from '../lib/recurrence';

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
