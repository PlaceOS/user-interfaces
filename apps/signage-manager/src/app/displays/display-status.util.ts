/** Minutes without a player check-in before a display counts as offline */
export const DISPLAY_OFFLINE_MINUTES = 5;

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
