import { endOfDay, format, startOfDay } from 'date-fns';
import { formatInTimeZone, fromZonedTime } from 'date-fns-tz';

/** Step and most steps used to find where a building day starts */
const DAY_START_STEP_MS = 15 * 60 * 1000;
const DAY_START_MAX_STEPS = 8;

/** Calendar date `days` after a `yyyy-MM-dd` date */
function addCalendarDays(day: string, days: number) {
    const [year, month, date] = day.split('-').map(Number);
    return new Date(Date.UTC(year, month - 1, date + days))
        .toISOString()
        .slice(0, 10);
}

/**
 * First moment of a `yyyy-MM-dd` date in a timezone. Midnight can be
 * skipped or repeated on a daylight saving change, so look near it for the
 * earliest moment of the date.
 */
function zonedDayStart(day: string, timezone: string) {
    const dayOf = (time: number) =>
        formatInTimeZone(time, timezone, 'yyyy-MM-dd');
    let time = fromZonedTime(`${day}T00:00:00`, timezone).valueOf();
    // A skipped midnight can resolve to the evening before
    for (
        let step = 0;
        step < DAY_START_MAX_STEPS && dayOf(time) < day;
        step++
    ) {
        time += DAY_START_STEP_MS;
    }
    // A repeated midnight can resolve to its second time
    for (
        let step = 0;
        step < DAY_START_MAX_STEPS && dayOf(time - DAY_START_STEP_MS) === day;
        step++
    ) {
        time -= DAY_START_STEP_MS;
    }
    return new Date(time);
}

/**
 * First moment of the calendar day of `date` in a building's timezone. The
 * day is the date that the browser shows, e.g. a day picked in a calendar.
 * Without a timezone, returns the browser's start of that day.
 */
export function buildingDayStart(date: Date | number, timezone?: string) {
    if (!timezone) return startOfDay(date);
    return zonedDayStart(format(date, 'yyyy-MM-dd'), timezone);
}

/**
 * Last moment of the calendar day of `date` in a building's timezone, just
 * before the next day starts, so a repeated hour at the end of the day is in
 * it. Without a timezone, returns the browser's end of that day.
 */
export function buildingDayEnd(date: Date | number, timezone?: string) {
    if (!timezone) return endOfDay(date);
    const next_day = addCalendarDays(format(date, 'yyyy-MM-dd'), 1);
    return new Date(zonedDayStart(next_day, timezone).valueOf() - 1);
}
