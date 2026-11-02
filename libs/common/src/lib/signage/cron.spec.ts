import {
    cronDaySlots,
    cronParts,
    doesCronMatchDay,
    isCronMonthlyWeekday,
    matchesCronPart,
    parseCronWeekdays,
    parseCronWeeksOfMonth,
} from './cron';

/** Fields of a cron that is known to be valid */
const parts = (cron: string) => cronParts(cron) || [];

/** Values from `min` to `max` that match the cron field */
function matches(part: string, min: number, max: number) {
    return Array.from({ length: max - min + 1 }, (_, i) => min + i).filter(
        (value) => matchesCronPart(value, part),
    );
}

// Some rules differ from standard cron on purpose. Displays already play
// schedules by these rules.
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

    it('splits five fields and rejects other crons', () => {
        expect(cronParts('  0   9   *   *   1-5  ')).toEqual([
            '0',
            '9',
            '*',
            '*',
            '1-5',
        ]);
        expect(cronParts('0 9 * *')).toBeNull();
        expect(cronParts(undefined)).toBeNull();
    });

    it('lists the minutes of the day that a cron runs at, in order', () => {
        expect(cronDaySlots(parts('30 9-10 * * *'))).toEqual([570, 630]);
        expect(cronDaySlots(parts('61 * * * *'))).toEqual([]);
    });
});

describe('monthly weekday fields', () => {
    it('reads weekday lists in order and rejects other values', () => {
        expect(parseCronWeekdays('5,1-3')).toEqual([1, 2, 3, 5]);
        expect(parseCronWeekdays('1,7')).toEqual([]);
        expect(parseCronWeekdays('*')).toEqual([]);
    });

    it('reads week of month ranges in order and rejects other days', () => {
        expect(parseCronWeeksOfMonth('15-21,1-7')).toEqual([1, 3]);
        expect(parseCronWeeksOfMonth('29-31')).toEqual([5]);
        expect(parseCronWeeksOfMonth('1-10')).toEqual([]);
    });

    it('needs week ranges and weekdays for a monthly weekday', () => {
        expect(isCronMonthlyWeekday('1-7', '1')).toBe(true);
        expect(isCronMonthlyWeekday('1-7', '*')).toBe(false);
        expect(isCronMonthlyWeekday('1,15', '1')).toBe(false);
    });
});
