/**
 * Whether the player is being debugged.
 *
 * Debug mode is turned on with a `debug` query parameter and remembered for
 * the browser session, so it can be read here before the panel that normally
 * handles that parameter exists. Kept in step with `signage.component.ts`.
 */
const DEBUG_KEY = 'SIGNAGE.debug';

/** A `debug` parameter counts as on unless it is explicitly false */
export function isDebugEnabled(value: string | null) {
    return value !== null && value !== 'false';
}

export function isDebugMode(): boolean {
    try {
        // Hash routed, so the query string lives in the hash
        const query = location.hash.split('?')[1] || location.search.slice(1);
        const params = new URLSearchParams(query);
        if (params.has('debug')) return isDebugEnabled(params.get('debug'));
        return isDebugEnabled(sessionStorage.getItem(DEBUG_KEY));
    } catch {
        return false;
    }
}
