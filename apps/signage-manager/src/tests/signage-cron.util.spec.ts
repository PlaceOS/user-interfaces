import {
    cronParts,
    doesCronMatchDay,
    matchesCronPart,
    nextCronDates,
} from '../app/signage-cron.util';

/** Fields of a cron that is known to be valid */
const parts = (cron: string) => cronParts(cron) || [];

/** Values from `min` to `max` that match the cron field */
function matches(part: string, min: number, max: number) {
    return Array.from({ length: max - min + 1 }, (_, i) => min + i).filter(
        (value) => matchesCronPart(value, part),
    );
}

// Expected values follow apps/signage/src/app/cron-helpers.ts, which decides
// what displays play. Some differ from standard cron on purpose.
describe('signage cron rules', () => {
    it('matches */n on values that divide by n', () => {
        expect(matches('*/2', 1, 9)).toEqual([2, 4, 6, 8]);
        expect(matches('*/15', 0, 59)).toEqual([0, 15, 30, 45]);
    });

    it('steps a range from its start', () => {
        expect(matches('9-17/2', 0, 23)).toEqual([9, 11, 13, 15, 17]);
        expect(matches('10-17/3', 0, 23)).toEqual([10, 13, 16]);
    });

    it('matches a/n only when a divides by n', () => {
        expect(matches('5/15', 0, 59)).toEqual([]);
        expect(matches('0/15', 0, 59)).toEqual([0]);
    });

    it('does not treat day of week 7 as Sunday', () => {
        const sunday = new Date(2026, 9, 4, 12);
        expect(doesCronMatchDay(parts('0 9 * * 7'), sunday)).toBe(false);
        expect(doesCronMatchDay(parts('0 9 * * 0'), sunday)).toBe(true);
    });

    it('needs both day fields only for week of month ranges', () => {
        const first_monday = new Date(2026, 9, 5, 12);
        const second_monday = new Date(2026, 9, 12, 12);
        const monthly_weekday = parts('0 9 1-7 * 1');
        expect(doesCronMatchDay(monthly_weekday, first_monday)).toBe(true);
        expect(doesCronMatchDay(monthly_weekday, second_monday)).toBe(false);
        // Not a week range, so either field is enough
        expect(doesCronMatchDay(parts('0 9 1-10 * 1'), second_monday)).toBe(
            true,
        );
    });

    it('rejects crons without five fields', () => {
        expect(cronParts('0 9 * *')).toBeNull();
        expect(nextCronDates('0 9 * *', { from: 0, count: 5 })).toEqual([]);
    });
});

describe('nextCronDates', () => {
    const from = Date.UTC(2026, 9, 1);

    it('lists starts in the timezone from and until the limits, included', () => {
        const dates = nextCronDates('0 9 * * *', {
            from: Date.UTC(2026, 9, 1, 9),
            until: Date.UTC(2026, 9, 3, 9),
            count: 5,
            timezone: 'UTC',
        });
        expect(dates.map((date) => date.toISOString())).toEqual([
            '2026-10-01T09:00:00.000Z',
            '2026-10-02T09:00:00.000Z',
            '2026-10-03T09:00:00.000Z',
        ]);
    });

    it('skips a time that a daylight saving change removes', () => {
        // Sydney clocks go from 02:00 to 03:00 on 4 October 2026
        const dates = nextCronDates('30 2 * * *', {
            from: Date.UTC(2026, 9, 2),
            count: 3,
            timezone: 'Australia/Sydney',
        });
        expect(dates.map((date) => date.toISOString())).toEqual([
            '2026-10-02T16:30:00.000Z',
            '2026-10-04T15:30:00.000Z',
            '2026-10-05T15:30:00.000Z',
        ]);
    });

    it('keeps the clock time after a daylight saving change', () => {
        const dates = nextCronDates('0 9 * * *', {
            from: Date.UTC(2026, 9, 2),
            count: 3,
            timezone: 'Australia/Sydney',
        });
        expect(dates.map((date) => date.toISOString())).toEqual([
            '2026-10-02T23:00:00.000Z',
            '2026-10-03T22:00:00.000Z',
            '2026-10-04T22:00:00.000Z',
        ]);
    });

    it('applies the extra filter', () => {
        const dates = nextCronDates('0 9 * * *', {
            from,
            count: 2,
            timezone: 'UTC',
            allows: (date) => date.getUTCDate() % 2 === 0,
        });
        expect(dates.map((date) => date.getUTCDate())).toEqual([2, 4]);
    });

    // Target: under 0.5 ms for common crons. The budget allows for slow CI.
    it('finds plays of sparse and never matching crons quickly', () => {
        const started = performance.now();
        for (let i = 0; i < 30; i++) {
            nextCronDates('0 9 * * 1', { from, count: 5 });
        }
        const weekly = performance.now() - started;
        const sparse_started = performance.now();
        const never = nextCronDates('0 9 30 2 *', { from, count: 5 });
        const sparse = performance.now() - sparse_started;

        expect(never).toEqual([]);
        expect(weekly).toBeLessThan(30);
        expect(sparse).toBeLessThan(20);
    });
});
