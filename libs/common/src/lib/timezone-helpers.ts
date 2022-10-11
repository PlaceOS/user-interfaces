import { addMilliseconds } from 'date-fns';
import { getTimezoneOffset } from 'date-fns-tz';


export const LOCAL_TIMEZONE = Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || 'Australia/Sydney';

export function localToTimezone(date: Date | number, tz: string = LOCAL_TIMEZONE) {
    const offset_diff = getTimezoneOffset(tz) - getTimezoneOffset(LOCAL_TIMEZONE);
    return addMilliseconds(date, offset_diff).valueOf();
}

export function timezoneToLocal(date: Date | number, tz: string = LOCAL_TIMEZONE) {
    const offset_diff = getTimezoneOffset(LOCAL_TIMEZONE) - getTimezoneOffset(tz);
    return addMilliseconds(date, offset_diff).valueOf();
}
