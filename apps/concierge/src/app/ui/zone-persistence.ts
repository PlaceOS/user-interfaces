/**
 * Per-view zone selection persistence helpers.
 *
 * Each concierge view (desks, parking, lockers, room-bookings, events) keeps
 * its own level-filter selection in localStorage scoped by building/region id
 * so that navigating away and back — or reloading — restores the user's prior
 * selection. Views are kept independent: no shared state, just a common
 * storage convention.
 */
const PREFIX = 'PLACEOS.concierge.zones';

/** Returns the persisted zone ids for the given view + scope, or empty array. */
export function loadPersistedZones(view: string, scope_id: string): string[] {
    if (!scope_id) return [];
    try {
        const raw = localStorage.getItem(`${PREFIX}.${view}.${scope_id}`);
        const value = JSON.parse(raw || '[]');
        return Array.isArray(value)
            ? value.filter((_) => typeof _ === 'string')
            : [];
    } catch {
        return [];
    }
}

/** Persists the given zone ids for the view + scope. */
export function persistZones(
    view: string,
    scope_id: string,
    zones: string[] = [],
): void {
    if (!scope_id) return;
    try {
        localStorage.setItem(
            `${PREFIX}.${view}.${scope_id}`,
            JSON.stringify(zones),
        );
    } catch {
        /* ignore quota / privacy-mode errors */
    }
}
