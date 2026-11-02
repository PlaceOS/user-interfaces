import { cronDaySlots, cronParts, doesCronMatchDay } from '@placeos/common';
import { formatInTimeZone, fromZonedTime, toZonedTime } from 'date-fns-tz';

/**
 * Upcoming start times of signage schedules. The cron rules are shared with
 * the signage player in `libs/common/src/lib/signage/cron.ts`.
 */

/** Days searched for upcoming plays, so a cron that never matches stops. */
const MAX_CRON_SEARCH_DAYS = 2 * 366;

const MS_PER_DAY = 86_400_000;

/**
 * Time in milliseconds of a wall-clock time, or null when the time does not
 * exist because of a daylight saving change.
 */
function wallClockTime(
    year: number,
    month: number,
    day: number,
    minutes: number,
    timezone?: string,
) {
    if (!timezone) {
        const date = new Date(year, month, day, 0, minutes);
        return date.getDate() === day &&
            date.getHours() * 60 + date.getMinutes() === minutes
            ? date.getTime()
            : null;
    }
    const pad = (value: number) => String(value).padStart(2, '0');
    const wall = `${year}-${pad(month + 1)}-${pad(day)}T${pad(Math.floor(minutes / 60))}:${pad(minutes % 60)}:00`;
    const instant = fromZonedTime(wall, timezone);
    return formatInTimeZone(instant, timezone, "yyyy-MM-dd'T'HH:mm:ss") === wall
        ? instant.getTime()
        : null;
}

export interface NextCronOptions {
    /** Earliest start in milliseconds, included */
    from: number;
    /** Most start times to return */
    count: number;
    /** Latest start in milliseconds, included */
    until?: number;
    /** IANA timezone of the cron clock. Defaults to the browser timezone. */
    timezone?: string;
    /** Extra filter for each start, e.g. a schedule mask */
    allows?: (date: Date) => boolean;
}

/**
 * Next start times of a cron. Steps day by day, then through the times of
 * each matching day, so a sparse cron costs one check per day, not one per
 * minute. Searches up to `MAX_CRON_SEARCH_DAYS`.
 */
export function nextCronDates(
    cron: string,
    { from, count, until = Infinity, timezone, allows }: NextCronOptions,
) {
    const result: Date[] = [];
    const parts = cronParts(cron);
    if (!parts || !Number.isFinite(from) || count <= 0) return result;
    const slots = cronDaySlots(parts);
    if (!slots.length) return result;
    // Start a day early so a timezone offset cannot skip the first day.
    const first = timezone ? toZonedTime(from, timezone) : new Date(from);
    for (let offset = -1; offset < MAX_CRON_SEARCH_DAYS; offset++) {
        // Noon keeps the calendar date clear of daylight saving changes.
        const calendar = new Date(
            first.getFullYear(),
            first.getMonth(),
            first.getDate() + offset,
            12,
        );
        if (!doesCronMatchDay(parts, calendar)) continue;
        const [year, month, day] = [
            calendar.getFullYear(),
            calendar.getMonth(),
            calendar.getDate(),
        ];
        const next_day = new Date(year, month, day + 1, 12);
        const day_start = wallClockTime(year, month, day, 0, timezone);
        const next_day_start = wallClockTime(
            next_day.getFullYear(),
            next_day.getMonth(),
            next_day.getDate(),
            0,
            timezone,
        );
        // A day without a daylight saving change has 24 even hours.
        const even_day =
            day_start !== null &&
            next_day_start !== null &&
            next_day_start - day_start === MS_PER_DAY;
        if (even_day && next_day_start <= from) continue;
        for (const slot of slots) {
            const time = even_day
                ? day_start + slot * 60_000
                : wallClockTime(year, month, day, slot, timezone);
            if (time === null || time < from) continue;
            if (time > until) return result;
            const start = new Date(time);
            if (allows && !allows(start)) continue;
            result.push(start);
            if (result.length >= count) return result;
        }
    }
    return result;
}
