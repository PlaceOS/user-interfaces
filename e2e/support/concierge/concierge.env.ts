/**
 * Config and identities for the CONCIERGE app's e2e specs.
 *
 * ## Concierge is a second app, not a second area
 *
 * Everything else in this suite tests `workplace` on port 4214. Concierge is its
 * own Angular app on **4215**, with its own Playwright config, so it needs its
 * own app URL and its own storage state: a browser session minted for one origin
 * is useless to the other, because the token lives in that origin's
 * `localStorage`.
 *
 * What IS shared is the stack and the seeded identities — one backend, one org,
 * the same users. Nothing else.
 *
 * ## It runs as ADMIN, deliberately
 *
 * Concierge is a front-desk and management app: it reads and writes every user's
 * bookings, and its manager pages (zones, levels, buildings, rooms) are
 * administrative. The seeded non-admin staff users cannot do that, so the specs
 * sign in as the admin identity.
 *
 * That choice is exactly why `concierge-access.spec.ts` exists: if concierge is
 * tested as an admin, then "a plain staff user cannot get in" has to be asserted
 * separately, or the whole permission boundary goes untested.
 */
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../env';

/**
 * Where the concierge app is served.
 *
 * Overridable for the same reason `APP_URL` is: a developer running the app on
 * another port should not have to edit a spec. Defaults to what the app's own
 * Playwright config serves.
 */
export const CONCIERGE_URL =
    process.env.E2E_CONCIERGE_URL ?? 'http://localhost:4215';

/** Refuse to run against anything that is not local. Same guard as workplace. */
export function assertConciergeLocal(): void {
    assertLocalOnly(BACKEND_URL, APP_URL, CONCIERGE_URL);
}

/**
 * A day and an hour per spec file.
 *
 * Concierge reads the same bookings the workplace specs create, so its slots
 * have to stay clear of theirs: desks own today and +1 to +4, rooms +3 and +4,
 * Your Bookings +5 to +13, the home page +16 to +20. Concierge takes +22
 * onwards.
 *
 * The day view is the exception — it shows TODAY and cannot be moved off it for
 * the tests that are about today.
 */
export const CONCIERGE_SLOTS = {
    /** concierge-dayview.spec.ts */
    dayview: { day: 22, hour: 9 },
    /** concierge-dayview.spec.ts, the other-user test */
    dayview_other: { day: 22, hour: 14 },
    /** concierge-visitors.spec.ts */
    visitors: { day: 23, hour: 9 },
    /** concierge-visitors.spec.ts, the other-host test */
    visitors_other: { day: 23, hour: 14 },
    /** concierge-desks.spec.ts */
    desks: { day: 24, hour: 9 },
} as const;

export function slotOn(dayOffset: number, hour: number, minutes = 60) {
    const start = new Date();
    start.setDate(start.getDate() + dayOffset);
    start.setHours(hour, 0, 0, 0);
    return {
        start: Math.floor(start.valueOf() / 1000),
        end: Math.floor(start.valueOf() / 1000) + minutes * 60,
        date_ms: start.valueOf(),
    };
}

/** The local day a slot falls on, as a unix-second window, for sweeps. */
export function dayBoundsOn(dayOffset: number) {
    const start = new Date();
    start.setDate(start.getDate() + dayOffset);
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setHours(23, 59, 59, 0);
    return {
        from: Math.floor(start.valueOf() / 1000),
        to: Math.floor(end.valueOf() / 1000),
    };
}
