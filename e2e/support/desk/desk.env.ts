/**
 * Identities and slots for the DESK BOOKING specs added on top of the dev's
 * original four.
 *
 * Kept in its own folder, like `visitor/`, `room/` and `bookings/`: the shared
 * `e2e/support/{env,api,flows}.ts` are what the ORIGINAL desk specs depend on,
 * and nothing added later should be able to break those. The desk identity
 * itself still comes from the shared `env.ts` — `deskFor` is seeded data, not
 * behaviour, and duplicating it would let the two drift.
 *
 * ## The spare desk
 *
 * `seed.ts` creates **WORKERS + 1** desks, so there is always exactly one desk
 * no worker owns. That is the only way to test moving a booking from one desk to
 * another without a seeding change: `altDesk()` returns it. Because it is SHARED
 * between workers, the spec that books it staggers its HOUR by worker index —
 * see `hourFor`, and the note below on why the hour and not the day.
 */
import { WORKERS, deskFor } from '../env';

/**
 * A day and an hour per spec file.
 *
 * ## Days stay SMALL, and that is not arbitrary
 *
 * Two calendars are involved and the tighter one wins:
 *
 *  - the desk FORM's picker reaches 90 days ahead (`desks.available_period`);
 *  - the SCHEDULE's sidebar calendar — which the edit specs must use to open a
 *    booking — shows a single month grid, and nothing in the page navigates
 *    between months. Only the displayed month and a few trailing days can be
 *    selected at all.
 *
 * A first draft used +14 to +30 and every edit test failed with "the calendar
 * did not select the day", because those dates fell into the next month.
 * Everything here now sits within four days of today, which is reachable
 * whatever today is, and separation comes from the hour instead.
 *
 * Days 5 to 13 are deliberately avoided: the Your Bookings specs own those, on
 * this same desk.
 */
export const DESK_SLOTS = {
    /** desk-times.spec.ts */
    times: { day: 1, hour: 10 },
    /** desk-edit.spec.ts, test 1 — `moved_to` is the hour it is moved into */
    edit_time: { day: 2, hour: 9, moved_to: 13 },
    /** desk-edit.spec.ts, test 2 — moves onto the SHARED spare desk */
    edit_desk: { day: 2, hour: 16 },
    /** desk-settings.spec.ts (all-day) */
    settings: { day: 3, hour: 9 },
    /** desk-delegate.spec.ts */
    delegate: { day: 4, hour: 9 },
    /** desk-status.spec.ts */
    status: { day: 4, hour: 15 },
    /** desk-api.spec.ts — no UI, so only the window has to be clear */
    api: { day: 1, hour: 20 },
} as const;

/**
 * Stagger an hour by worker, for slots on the SHARED spare desk.
 *
 * Days cannot be staggered — see above — so the hour is. Four workers land on
 * four consecutive hours, which keeps them inside any sensible bookable-hours
 * setting.
 */
export function hourFor(base: number, workerIndex: number): number {
    return base + workerIndex;
}

/** The desk no worker owns, for "move it to another desk". */
export function altDesk(): { id: string; name: string } {
    return deskFor(WORKERS);
}

/** A booking window on a day, in unix seconds, plus the local ms timestamp. */
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

/**
 * The local day a slot falls on, as a unix-second window.
 *
 * Sweeps use this rather than "the slot plus or minus a day": a window that
 * spills into neighbouring days reaches into whatever another spec file is
 * doing there, and the sweep that lets a spec recover from its own past
 * failures would then clear somebody else's booking.
 */
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

/** "HH:mm" for a unix timestamp, in the browser's local time. */
export function hhmm(unix_seconds: number): string {
    const date = new Date(unix_seconds * 1000);
    const hh = `${date.getHours()}`.padStart(2, '0');
    const mm = `${date.getMinutes()}`.padStart(2, '0');
    return `${hh}:${mm}`;
}
