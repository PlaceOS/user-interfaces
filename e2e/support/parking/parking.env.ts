/**
 * Identities and slots for the PARKING specs.
 *
 * Its own folder, like every other area: nothing parking-shaped should be able
 * to break the desk, visitor, room or Your Bookings specs.
 *
 * A parking space is EXCLUSIVE for its window, like a desk and unlike a visitor,
 * so the isolation rule is the desk one — every worker owns a space
 * (`parking.seed.ts`) and every spec sweeps it before booking.
 *
 * Days stay small for the same reason they do for desks: the schedule's sidebar
 * calendar only reaches the displayed month, and the edit and cancel specs have
 * to use it. Days 1 to 4 are shared with the desk specs, which is safe because
 * the ASSET differs — a sweep is per asset, not per day.
 */
export const PARKING_PREFIX = 'e2e-parking-';

/** The name of the space this worker owns. */
export function spaceFor(workerIndex: number): { name: string } {
    return { name: `E2E Parking ${workerIndex}` };
}

/**
 * How many spaces are seeded: one per worker, plus one spare.
 *
 * The spare is what makes "move the booking to another space" testable without
 * borrowing a space another worker is using. Because it is SHARED, the spec that
 * books it staggers its hour by worker index — the same approach the spare desk
 * needs, and for the same reason: days cannot be staggered, since the schedule's
 * sidebar calendar only reaches the displayed month.
 */
export function spaceCount(workers: number): number {
    return workers + 1;
}

/** Stagger an hour by worker, for slots on the SHARED spare space. */
export function hourFor(base: number, workerIndex: number): number {
    return base + workerIndex;
}

/** A day and an hour per spec file. */
export const PARKING_SLOTS = {
    /** parking-booking.spec.ts */
    booking: { day: 1, hour: 9 },
    /** parking-booking.spec.ts, the teardown test */
    cleanup: { day: 1, hour: 11 },
    /** parking-clash.spec.ts */
    clash: { day: 2, hour: 9 },
    /** parking-clash.spec.ts, the freed test */
    freed: { day: 2, hour: 13 },
    /** parking-scoping.spec.ts */
    scoping: { day: 3, hour: 9 },
    /** parking-scoping.spec.ts, the control */
    scoping_control: { day: 3, hour: 13 },
    /** parking-times.spec.ts */
    times: { day: 4, hour: 10 },
    /** parking-cancel.spec.ts */
    cancel: { day: 1, hour: 15 },
    /** parking-cancel.spec.ts, the declined test */
    cancel_declined: { day: 2, hour: 16 },
    /** parking-edit.spec.ts */
    edit: { day: 3, hour: 16, moved_to: 18 },
    /** parking-api.spec.ts */
    api: { day: 4, hour: 20 },
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

/** "HH:mm" for a unix timestamp, in the browser's local time. */
export function hhmm(unix_seconds: number): string {
    const date = new Date(unix_seconds * 1000);
    const hh = `${date.getHours()}`.padStart(2, '0');
    const mm = `${date.getMinutes()}`.padStart(2, '0');
    return `${hh}:${mm}`;
}
