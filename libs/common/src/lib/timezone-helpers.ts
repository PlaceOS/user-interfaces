import {
    addMilliseconds,
    endOfDay,
    set,
    startOfDay,
    startOfMinute,
} from 'date-fns';
import { fromZonedTime, getTimezoneOffset, toZonedTime } from 'date-fns-tz';
import { padLength } from './general';

export const LOCAL_TIMEZONE =
    Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || 'Australia/Sydney';

export function localToTimezone(
    date: Date | number,
    tz: string = LOCAL_TIMEZONE,
) {
    const offset_diff =
        getTimezoneOffset(tz) - getTimezoneOffset(LOCAL_TIMEZONE);
    return addMilliseconds(date, offset_diff).valueOf();
}

export function timezoneToLocal(
    date: Date | number,
    tz: string = LOCAL_TIMEZONE,
) {
    const offset_diff =
        getTimezoneOffset(LOCAL_TIMEZONE) - getTimezoneOffset(tz);
    return addMilliseconds(date, offset_diff).valueOf();
}

export function startOfDayInTimezone(
    date: Date | number,
    tz: string = LOCAL_TIMEZONE,
) {
    if (!tz) return startOfDay(date).valueOf();
    return fromZonedTime(startOfDay(toZonedTime(date, tz)), tz).valueOf();
}

export function endOfDayInTimezone(
    date: Date | number,
    tz: string = LOCAL_TIMEZONE,
) {
    if (!tz) return endOfDay(date).valueOf();
    return fromZonedTime(endOfDay(toZonedTime(date, tz)), tz).valueOf();
}

const TIMEZONE_OFFSET_STRINGS: Record<string, string> = {};

export function getTimezoneOffsetString(tz: string, date = new Date()) {
    const offset = getTimezoneOffsetInMinutes(tz, date);
    const cache_key = `${tz}:${offset}`;
    if (TIMEZONE_OFFSET_STRINGS[cache_key]) {
        return TIMEZONE_OFFSET_STRINGS[cache_key];
    }
    const hours = Math.floor(Math.abs(offset) / 60);
    const minutes = Math.abs(offset) % 60;
    const output = `${offset >= 0 ? '+' : '-'}${padLength(hours, 2)}${padLength(
        minutes,
        2,
    )}`;
    TIMEZONE_OFFSET_STRINGS[cache_key] = output;
    return output;
}

export function getTimezoneOffsetInMinutes(timeZone, date = new Date()) {
    const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour12: false,
        timeZoneName: 'shortOffset',
    };
    let formatter: Intl.DateTimeFormat;
    try {
        formatter = new Intl.DateTimeFormat([], options);
    } catch (e) {
        if (e instanceof RangeError) {
            return getTimezoneOffset(timeZone, date) / 60 / 1000;
        }
        throw e;
    }
    const parts = formatter.formatToParts(date);

    // Find the timeZoneName part which contains the GMT offset
    const tzOffsetPart = parts.find((part) => part.type === 'timeZoneName');
    const tzOffsetString = tzOffsetPart ? tzOffsetPart.value : 'GMT';

    // Match the offset from the string (e.g., "GMT+0530")
    const offsetMatch = tzOffsetString.match(
        /GMT([+-])(\d{1,2})(?::?(\d{2}))?/,
    );
    if (!offsetMatch) {
        return 0; // If no match, assume UTC (offset 0)
    }

    const sign = offsetMatch[1] === '+' ? 1 : -1;
    const hours = parseInt(offsetMatch[2], 10);
    const minutes = offsetMatch[3] ? parseInt(offsetMatch[3], 10) : 0;

    return sign * (hours * 60 + minutes);
}

export function getTimezoneDifferenceInHours(
    src_tz: string,
    dest_tz: string = LOCAL_TIMEZONE,
    date: Date = new Date(),
) {
    const offset1 = getTimezoneOffsetInMinutes(src_tz, date);
    const offset2 = getTimezoneOffsetInMinutes(dest_tz, date);

    // Calculate the difference in hours
    return (offset1 - offset2) / 60;
}

/**
 * Get the hours and minutes of a date as they appear in a target timezone.
 * Returns { hours, minutes } in the wall-clock time of the given timezone.
 */
export function getTimeInTimezone(
    date: Date | number,
    tz?: string,
): { hours: number; minutes: number } {
    if (!tz) {
        const d = new Date(date);
        return { hours: d.getHours(), minutes: d.getMinutes() };
    }
    const zoned = toZonedTime(date, tz);
    return { hours: zoned.getHours(), minutes: zoned.getMinutes() };
}

/**
 * Format a date's time as 'HH:mm' in a target timezone.
 * If no timezone is provided, uses the local timezone.
 */
export function formatTimeInTimezone(date: Date | number, tz?: string): string {
    const { hours, minutes } = getTimeInTimezone(date, tz);
    return `${padLength(hours, 2)}:${padLength(minutes, 2)}`;
}

/**
 * Set hours and minutes on a date, interpreting them as wall-clock time in the
 * given timezone, and return the resulting UTC epoch milliseconds.
 * If no timezone is provided, interprets in local timezone.
 */
export function setTimeInTimezone(
    date: Date | number,
    hours: number,
    minutes: number,
    tz?: string,
): number {
    if (!tz) {
        const d = set(new Date(date), { hours, minutes });
        return startOfMinute(d).valueOf();
    }
    // Convert the date to the target timezone's wall-clock representation
    const zoned = toZonedTime(date, tz);
    // Set the desired hours and minutes on the zoned representation
    const adjusted = set(zoned, { hours, minutes });
    // Convert back from the target timezone's wall-clock to UTC epoch
    return startOfMinute(fromZonedTime(adjusted, tz)).valueOf();
}
