const STORE_DISPLAY_KEY = 'PlaceOS.SIGNAGE.display';

/**
 * Whether this device has been bootstrapped to a display, and so is expected to
 * be showing content. A player that has never been set up is legitimately
 * sitting on the display picker waiting for someone, and must not be treated as
 * a failed startup.
 */
export function hasBootstrappedDisplay() {
    try {
        return !!localStorage.getItem(STORE_DISPLAY_KEY);
    } catch {
        return false;
    }
}
