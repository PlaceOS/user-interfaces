import { nextCronDates } from '../app/signage-cron.util';

describe('nextCronDates', () => {
    const from = Date.UTC(2026, 9, 1);

    it('finds no starts for a cron without five fields', () => {
        expect(nextCronDates('0 9 * *', { from: 0, count: 5 })).toEqual([]);
    });

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
