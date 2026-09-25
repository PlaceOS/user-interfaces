/**
 * Identities and time slots for the YOUR BOOKINGS page specs.
 *
 * Kept out of `e2e/support/{env,api,flows}.ts`, out of `visitor/` and out of
 * `room/` on purpose — the same rule the visitor and room work followed. The
 * desk specs depend on the shared files and the other two areas depend on their
 * own; nothing schedule-shaped should be able to break any of them.
 *
 * ## What this page is, and why its slots look different
 *
 * `/your-bookings` does not create anything. It LISTS what other flows created,
 * so these specs seed a booking through the API and then assert on the page. The
 * risk is therefore not contention over an asset, it is contention over a DAY:
 * the schedule shows one day at a time, and two specs seeding the same day for
 * the same worker would see each other's cards and miscount.
 *
 * So every spec file owns a **day**, not an hour. They sit five or more days
 * out, clear of:
 *
 *  - the desk specs, which book ALL DAY TODAY and sweep ±2 days;
 *  - the room specs, which use +3 and +4;
 *  - anything a person booked by hand while poking at the stack.
 *
 * The check-in spec is the one exception and has to be near the clock — a
 * check-in is only offered while the booking is about to start or running.
 */
import { staffEmail } from '../env';

/** One day per spec file, as an offset from today. */
export const SCHEDULE_DAYS = {
    /** bookings-list.spec.ts */
    list: 5,
    /** bookings-filters.spec.ts */
    filters: 6,
    /** bookings-cancel.spec.ts, test 1 */
    cancel: 7,
    /**
     * bookings-cancel.spec.ts, test 2.
     *
     * A day of its own rather than another hour on day 7. The sweep that makes a
     * spec recover from its own past failures clears a WHOLE DAY, so two tests
     * sharing a day can clear each other — and with `fullyParallel` there is no
     * ordering guarantee to lean on. Seen once: the second test's pre-sweep
     * removed the first test's booking, and the failure read as "the booking was
     * not live before anyone pressed Cancel", which is true and points nowhere.
     */
    cancel_declined: 10,
    /** bookings-edit.spec.ts */
    edit: 8,
    /** bookings-scoping.spec.ts */
    scoping: 9,
    /** bookings-past.spec.ts — deliberately BEHIND today, so the booking is over */
    past: -2,
    /** bookings-empty.spec.ts — a day nothing is ever seeded on */
    empty: 13,
    /** bookings-limit.spec.ts — isolated high-history listing */
    history: 15,
} as const;

/**
 * A booking window on a given day, in unix seconds, plus the local ms timestamp
 * the schedule's calendar needs.
 *
 * Fixed hours on a fixed day rather than "now plus an hour": these specs assert
 * which day a card appears on, and a window that moves with the clock cannot be
 * compared with anything. Local time, not UTC, because the schedule groups cards
 * by the BROWSER's day and the browser shares this process's clock.
 */
/**
 * The local day a slot falls on, as a unix-second window.
 *
 * Sweeps and listings use this rather than "the slot plus or minus a day":
 * a window that spills into the neighbouring days reaches into whatever another
 * spec file is doing there.
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
 * A visitor address owned by THESE specs.
 *
 * Deliberately a different prefix from the visitor specs' own addresses
 * (`e2e-visitor-*`): their sweeps delete by address, so sharing one would let
 * two areas delete each other's data. `tag` separates the spec files from each
 * other in the same way.
 */
export function scheduleVisitorFor(workerIndex: number, tag: string) {
    return {
        email: `yb-visitor-${workerIndex}-${tag}@example.com`,
        name: `YB Visitor ${workerIndex} ${tag}`,
    };
}

/** The colleague these specs use as "somebody else". */
export function otherStaffEmail(workerIndex: number, workers: number): string {
    return staffEmail((workerIndex + 1) % workers);
}
