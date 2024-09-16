import { addMilliseconds } from 'date-fns';
import { getTimezoneOffset } from 'date-fns-tz';

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
export function getTimezoneOffsetInMinutes(timeZone, date = new Date()) {
    const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour12: false,
        timeZoneName: 'short',
    };
    const formatter = new Intl.DateTimeFormat([], options);
    const parts = formatter.formatToParts(date);

    // Find the timeZoneName part which contains the GMT offset
    const tzOffsetPart = parts.find((part) => part.type === 'timeZoneName');
    const tzOffsetString = tzOffsetPart ? tzOffsetPart.value : 'GMT';

    // Match the offset from the string (e.g., "GMT+0530")
    const offsetMatch = tzOffsetString.match(/GMT([+-])(\d{2})(\d{2})?/);
    if (!offsetMatch) {
        return 0; // If no match, assume UTC (offset 0)
    }

    const sign = offsetMatch[1] === '+' ? 1 : -1;
    const hours = parseInt(offsetMatch[2], 10);
    const minutes = offsetMatch[3] ? parseInt(offsetMatch[3], 10) : 0;

    return sign * (hours * 60 + minutes);
}

export function getTimezoneDifferenceInHours(
    timeZone1: string,
    timeZone2: string,
    date: Date = new Date(),
) {
    const offset1 = getTimezoneOffsetInMinutes(timeZone1, date);
    const offset2 = getTimezoneOffsetInMinutes(timeZone2, date);

    // Calculate the difference in hours
    return (offset1 - offset2) / 60;
}
