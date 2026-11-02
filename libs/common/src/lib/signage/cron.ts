/**
 * Cron rules for signage schedules.
 *
 * The signage player decides what a display plays, and Signage Manager shows
 * when it plays. Both use these rules. They differ from standard cron:
 * - `*\/n` matches values that divide by n. Day of month `*\/2` is 2, 4, 6...
 * - `a-b/n` matches a, a + n, a + 2n... up to b.
 * - `a/n` matches only a, and only when a divides by n. `5/15` never matches.
 * - Day of week 7 does not match Sunday. Use 0.
 * - When day of month and day of week are both set, a day matches either one.
 *   Week of month ranges (1-7, 8-14, 15-21, 22-28, 29-31) with weekdays must
 *   match both, e.g. "first Monday".
 */

/** The five cron fields, or null when the cron does not have five fields. */
export function cronParts(cron: string | null | undefined) {
    const parts = (cron || '').trim().split(/\s+/);
    return parts.length === 5 ? parts : null;
}

/** Whether a value matches one cron field. */
export function matchesCronPart(value: number, cron_part: string): boolean {
    if (cron_part === '*') return true;
    if (cron_part.includes(',')) {
        return cron_part
            .split(',')
            .some((item) => matchesCronPart(value, item));
    }
    if (cron_part.includes('/')) {
        const [base, step] = cron_part.split('/');
        const step_value = Number(step);
        if (!step_value) return false;
        if (base === '*') return value % step_value === 0;
        if (base.includes('-')) {
            const [start, end] = base.split('-').map(Number);
            if (value < start || value > end) return false;
            return (value - start) % step_value === 0;
        }
        return value % step_value === 0 && matchesCronPart(value, base);
    }
    if (cron_part.includes('-')) {
        const [start, end] = cron_part.split('-').map(Number);
        return value >= start && value <= end;
    }
    return Number(cron_part) === value;
}

/** A whole number from `min` to `max`, or null. */
export function parseCronNumber(value: string, min: number, max: number) {
    if (!/^\d+$/.test(value || '')) return null;
    const number_value = Number(value);
    return number_value >= min && number_value <= max ? number_value : null;
}

/** Weekdays (0 is Sunday) of a list such as "1,3,5" or "1-5", in order. Empty when the field is not a plain list. */
export function parseCronWeekdays(value: string) {
    if (!value?.trim() || value === '*') return [];
    const days = new Set<number>();
    for (const part of value.split(',')) {
        if (part.includes('-')) {
            const [start, end] = part
                .split('-')
                .map((_) => parseCronNumber(_, 0, 6));
            if (start === null || end === null || start > end) return [];
            for (let day = start; day <= end; day++) days.add(day);
        } else {
            const day = parseCronNumber(part, 0, 6);
            if (day === null) return [];
            days.add(day);
        }
    }
    return [...days].sort((a, b) => a - b);
}

/** Week of the month (1 to 5) of a day range such as "8-14", or null. */
function parseCronWeekOfMonthRange(value: string) {
    const match = /^(\d+)-(\d+)$/.exec(value || '');
    if (!match) return null;
    const start = Number(match[1]);
    const end = Number(match[2]);
    if (start === 29 && end === 31) return 5;
    if ((start - 1) % 7 !== 0 || end !== start + 6) return null;
    const week = (start - 1) / 7 + 1;
    return week >= 1 && week <= 4 ? week : null;
}

/** Weeks of the month (1 to 5) of day ranges such as "1-7,15-21", in order. Empty when the field has other values. */
export function parseCronWeeksOfMonth(value: string) {
    if (!value?.trim() || value === '*') return [];
    const weeks = new Set<number>();
    for (const part of value.split(',')) {
        const week = parseCronWeekOfMonthRange(part);
        if (week === null) return [];
        weeks.add(week);
    }
    return [...weeks].sort((a, b) => a - b);
}

/** Whether the day fields mean "these weekdays in these weeks of the month". */
export function isCronMonthlyWeekday(day_part: string, weekday_part: string) {
    return (
        !!parseCronWeeksOfMonth(day_part).length &&
        !!parseCronWeekdays(weekday_part).length
    );
}

/** Whether the calendar fields (day, month, weekday) match the local date. */
export function doesCronMatchDay(parts: readonly string[], date: Date) {
    const [, , day_part, month_part, weekday_part] = parts;
    if (!matchesCronPart(date.getMonth() + 1, month_part)) return false;
    if (day_part === '*' && weekday_part === '*') return true;
    const day_matches = matchesCronPart(date.getDate(), day_part);
    if (weekday_part === '*') return day_matches;
    const weekday_matches = matchesCronPart(date.getDay(), weekday_part);
    if (day_part === '*') return weekday_matches;
    if (isCronMonthlyWeekday(day_part, weekday_part)) {
        return day_matches && weekday_matches;
    }
    return day_matches || weekday_matches;
}

/** Minutes after midnight that the minute and hour fields match, in order. */
export function cronDaySlots(parts: readonly string[]) {
    const slots: number[] = [];
    for (let hour = 0; hour < 24; hour++) {
        if (!matchesCronPart(hour, parts[1])) continue;
        for (let minute = 0; minute < 60; minute++) {
            if (matchesCronPart(minute, parts[0]))
                slots.push(hour * 60 + minute);
        }
    }
    return slots;
}
