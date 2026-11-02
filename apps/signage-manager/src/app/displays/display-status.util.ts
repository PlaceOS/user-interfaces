import { formatDate } from '@angular/common';
import { DateFromPipe } from '@placeos/components';
import { isSameDay } from 'date-fns';

/** Minutes without a player check-in before a display counts as offline */
const DISPLAY_OFFLINE_MINUTES = 5;

/**
 * Whether a display's player checked in recently.
 * @param last_seen Last player check-in in Unix seconds, 0 or omitted if never seen
 * @param now Current time in milliseconds
 */
export function isDisplayOnline(
    last_seen: number | undefined,
    now = Date.now(),
) {
    if (!last_seen) return false;
    return (
        Math.abs(now - last_seen * 1000) <= DISPLAY_OFFLINE_MINUTES * 60 * 1000
    );
}

/**
 * Translation key of the status of a display. The keys take the last seen
 * time as `time`.
 * @param last_seen Last player check-in in Unix seconds, 0 or omitted if never seen
 * @param now Current time in milliseconds
 */
export function displayStatusKey(
    last_seen: number | undefined,
    now = Date.now(),
) {
    if (!last_seen) return 'SIGNAGE_MANAGER.DISPLAY_STATUS_NEVER_SEEN';
    return isDisplayOnline(last_seen, now)
        ? 'SIGNAGE_MANAGER.DISPLAY_STATUS_ONLINE'
        : 'SIGNAGE_MANAGER.DISPLAY_STATUS_OFFLINE';
}

const date_from = new DateFromPipe();

/**
 * When a display's player last checked in: relative within the last hour,
 * the time earlier today, and the date and time before today. Empty when
 * it was never seen.
 * @param last_seen Last player check-in in Unix seconds
 * @param now Current time in milliseconds
 * @param locale Locale of the date and time
 */
export function displayLastSeen(
    last_seen: number | undefined,
    now: number,
    locale: string,
) {
    if (!last_seen) return '';
    const seen_at = last_seen * 1000;
    if (now - seen_at < 60 * 60 * 1000) return date_from.transform(seen_at);
    return formatDate(
        seen_at,
        isSameDay(seen_at, now) ? 'shortTime' : 'short',
        locale,
    );
}
