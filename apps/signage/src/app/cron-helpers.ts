/**
 * (Helper function - no changes from before)
 * Parses a single part of a CRON string and checks if it matches a given value.
 */
function matchesCronPart(value: number, cron_part: string): boolean {
    if (cron_part === '*') {
        return true;
    }
    if (cron_part.includes(',')) {
        return cron_part
            .split(',')
            .some((item) => matchesCronPart(value, item));
    }
    if (cron_part.includes('-')) {
        const [start, end] = cron_part.split('-').map(Number);
        return value >= start && value <= end;
    }
    if (cron_part.includes('/')) {
        const [, step] = cron_part.split('/');
        return value % Number(step) === 0;
    }
    return Number(cron_part) === value;
}

/**
 * Calculates the Unix timestamp for the next CRON run, but only if it
 * occurs within a specified time range.
 *
 * WARNING: This is a simplified implementation. It does NOT handle timezones
 * or special CRON characters (L, W, ?, #). It assumes a standard 5-field
 * CRON string. For production use, a robust library is recommended.
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
    const parts = cron_string.split(' ');
    if (parts.length !== 5) {
        throw new Error('Invalid CRON string: Must have 5 parts.');
    }

    const [minutePart, hourPart, dayOfMonthPart, monthPart, dayOfWeekPart] =
        parts;
    // The absolute time when we should stop searching
    const searchLimitDate = new Date(now + search_limit_in_seconds * 1000);

    // Start checking from the top of the next minute
    const start_time = new Date(now);
    start_time.setSeconds(0, 0);
    start_time.setMinutes(start_time.getMinutes() + 1);

    const current_date = new Date(start_time.getTime());

    // Loop until we pass our search limit
    while (current_date <= searchLimitDate) {
        const minute = current_date.getMinutes();
        const hour = current_date.getHours();
        const dayOfMonth = current_date.getDate();
        const month = current_date.getMonth() + 1; // 0-11 -> 1-12
        const dayOfWeek = current_date.getDay(); // 0-6 (Sun-Sat)

        const minuteMatch = matchesCronPart(minute, minutePart);
        const hourMatch = matchesCronPart(hour, hourPart);
        const monthMatch = matchesCronPart(month, monthPart);
        const dayOfMonthMatch = matchesCronPart(dayOfMonth, dayOfMonthPart);
        const dayOfWeekMatch = matchesCronPart(dayOfWeek, dayOfWeekPart);

        let dayMatch = false;
        if (dayOfMonthPart === '*' && dayOfWeekPart === '*') {
            dayMatch = true;
        } else if (dayOfMonthPart !== '*' && dayOfWeekPart === '*') {
            dayMatch = dayOfMonthMatch;
        } else if (dayOfMonthPart === '*' && dayOfWeekPart !== '*') {
            dayMatch = dayOfWeekMatch;
        } else {
            dayMatch = dayOfMonthMatch || dayOfWeekMatch;
        }
        if (minuteMatch && hourMatch && monthMatch && dayMatch) {
            // Found a match within the range!
            return Math.floor(current_date.getTime() / 1000);
        }
        // Increment by one minute and check again
        current_date.setMinutes(current_date.getMinutes() + 1);
    }
    // If the loop completes, no match was found in the given time range
    return null;
}
