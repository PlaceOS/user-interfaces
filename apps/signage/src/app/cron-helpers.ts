function matchesCronPart(value: number, cron_part: string): boolean {
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

function cronNumber(value: string, min: number, max: number) {
    if (!/^\d+$/.test(value || '')) return null;
    const number_value = Number(value);
    return number_value >= min && number_value <= max ? number_value : null;
}

function parseCronWeekdays(value: string) {
    if (!value?.trim() || value === '*') return [];
    const days = new Set<number>();
    for (const part of value.split(',')) {
        if (part.includes('-')) {
            const [start, end] = part
                .split('-')
                .map((_) => cronNumber(_, 0, 6));
            if (start === null || end === null || start > end) return [];
            for (let day = start; day <= end; day++) days.add(day);
        } else {
            const day = cronNumber(part, 0, 6);
            if (day === null) return [];
            days.add(day);
        }
    }
    return [...days];
}

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

function parseCronWeeksOfMonth(value: string) {
    if (!value?.trim() || value === '*') return [];
    const weeks = new Set<number>();
    for (const part of value.split(',')) {
        const week = parseCronWeekOfMonthRange(part);
        if (week === null) return [];
        weeks.add(week);
    }
    return [...weeks];
}

function isCronMonthlyWeekday(
    day_of_month_part: string,
    day_of_week_part: string,
) {
    return (
        !!parseCronWeeksOfMonth(day_of_month_part).length &&
        !!parseCronWeekdays(day_of_week_part).length
    );
}

function doesCronMatchDate(cron_parts: string[], date: Date) {
    const [
        minute_part,
        hour_part,
        day_of_month_part,
        month_part,
        day_of_week_part,
    ] = cron_parts;
    if (!matchesCronPart(date.getMinutes(), minute_part)) return false;
    if (!matchesCronPart(date.getHours(), hour_part)) return false;
    if (!matchesCronPart(date.getMonth() + 1, month_part)) return false;
    const day_of_month_matches = matchesCronPart(
        date.getDate(),
        day_of_month_part,
    );
    const day_of_week_matches = matchesCronPart(
        date.getDay(),
        day_of_week_part,
    );
    if (day_of_month_part === '*' && day_of_week_part === '*') return true;
    if (day_of_month_part !== '*' && day_of_week_part === '*') {
        return day_of_month_matches;
    }
    if (day_of_month_part === '*' && day_of_week_part !== '*') {
        return day_of_week_matches;
    }
    if (isCronMonthlyWeekday(day_of_month_part, day_of_week_part)) {
        return day_of_month_matches && day_of_week_matches;
    }
    return day_of_month_matches || day_of_week_matches;
}

function cronParts(cron_string: string) {
    const parts = cron_string.trim().split(/\s+/);
    if (parts.length !== 5) {
        throw new Error('Invalid CRON string: Must have 5 parts.');
    }
    return parts;
}

/**
 * Calculates the Unix timestamp for the next signage-manager-compatible cron
 * run in the device's local timezone, but only if it occurs within a specified
 * time range.
 *
 * @param cron_string The 5-field CRON string (e.g., "* * * * *").
 * @param search_limit_in_seconds The maximum number of seconds from now to search for a run.
 * @returns The Unix timestamp (in seconds) for the next run if found within the
 *          limit, otherwise returns `null`.
 * @throws An error if the CRON string format is invalid.
 */
export function getNextCronRunTimestampInRange(
    cron_string: string,
    search_limit_in_seconds: number,
    now = Date.now(),
): number | null {
    const parts = cronParts(cron_string);

    const searchLimitDate = new Date(now + search_limit_in_seconds * 1000);
    const start_time = new Date(now);
    start_time.setSeconds(0, 0);
    start_time.setMinutes(start_time.getMinutes() + 1);

    const current_date = new Date(start_time.getTime());

    while (current_date <= searchLimitDate) {
        if (doesCronMatchDate(parts, current_date)) {
            return Math.floor(current_date.getTime() / 1000);
        }
        current_date.setMinutes(current_date.getMinutes() + 1);
    }
    return null;
}

/**
 * Calculates the Unix timestamp for the most recent signage-manager-compatible
 * cron run at or before `now`, in the device's local timezone, but only if it
 * occurred within a specified time range.
 *
 * A schedule that fires more often than its play period is long has several
 * runs inside the search window; the run that is currently playing is always
 * the latest one, so the search walks backwards from `now`.
 *
 * @param cron_string The 5-field CRON string (e.g., "* * * * *").
 * @param search_limit_in_seconds The maximum number of seconds before now to search for a run.
 * @returns The Unix timestamp (in seconds) for the last run if found within the
 *          limit, otherwise returns `null`.
 * @throws An error if the CRON string format is invalid.
 */
export function getLastCronRunTimestampInRange(
    cron_string: string,
    search_limit_in_seconds: number,
    now = Date.now(),
): number | null {
    const parts = cronParts(cron_string);

    const search_limit_date = new Date(now - search_limit_in_seconds * 1000);
    const current_date = new Date(now);
    current_date.setSeconds(0, 0);

    while (current_date >= search_limit_date) {
        if (doesCronMatchDate(parts, current_date)) {
            return Math.floor(current_date.getTime() / 1000);
        }
        current_date.setMinutes(current_date.getMinutes() - 1);
    }
    return null;
}
