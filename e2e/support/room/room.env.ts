/**
 * Room identities for the e2e suite.
 *
 * Kept out of `e2e/support/env.ts` and out of `e2e/support/visitor/` on purpose:
 * the desk specs depend on the first, the visitor specs on the second, and
 * nothing room-shaped should be able to break either.
 *
 * A room is EXCLUSIVE for a time range, exactly like a desk and unlike a
 * visitor — the backend refuses an overlapping booking with 409 (measured, see
 * `room-clash.spec.ts`). So the isolation rule is the desk one: every worker
 * gets its own room, and every spec sweeps it before booking.
 *
 * Unlike a desk, a room is a real engine SYSTEM and has to be created. See
 * `room.seed.ts` — it is seeded from the specs rather than from the shared
 * `e2e/support/seed.ts`, so no file the desk specs rely on is touched.
 */
export const ROOM_PREFIX = 'e2e-room-';

/**
 * Time slots, one per spec file.
 *
 * A worker owns one room, and two specs on that worker booking the same hour
 * would clash with each other rather than with the thing under test. Distinct
 * slots make that impossible by construction instead of by hoping Playwright
 * schedules them apart.
 *
 * Hours are local, on a day a few days out so nothing collides with a booking a
 * human made while poking at the stack.
 */
export const ROOM_SLOTS = {
    /** room-booking.spec.ts */
    booking: { stores: 9, cleanup: 10 },
    /** room-clash.spec.ts */
    clash: { taken: 11, freed: 12 },
    /** room-scoping.spec.ts */
    scoping: { own: 13, control: 14 },
    /** room-times.spec.ts */
    times: { chosen: 15, limits: 16 },
    /** room-attendees.spec.ts */
    attendees: { stored: 17, removed: 18 },
    /** room-cancel.spec.ts */
    cancel: { fromApp: 19, dismissed: 20 },
} as const;

export interface RoomIdentity {
    /** Engine system id, filled in by the seeder — not known up front. */
    id: string;
    name: string;
    email: string;
    capacity: number;
}

/** The name and address of the room this worker owns. */
export function roomFor(workerIndex: number): Omit<RoomIdentity, 'id'> {
    return {
        name: `E2E Room ${workerIndex}`,
        email: `${ROOM_PREFIX}${workerIndex}@place.tech`,
        capacity: 8,
    };
}

/**
 * A booking window, in unix seconds, for a given slot.
 *
 * Fixed hours on a fixed day rather than "now plus an hour": the room specs
 * assert on stored times, and a window that moves with the clock cannot be
 * compared to anything. Three days out keeps it clear of today's schedule view
 * and of anything a person has booked by hand.
 */
export function slotFor(hour: number, daysAhead = 3, minutes = 60) {
    const start = new Date();
    start.setDate(start.getDate() + daysAhead);
    start.setHours(hour, 0, 0, 0);
    return {
        start: Math.floor(start.valueOf() / 1000),
        end: Math.floor(start.valueOf() / 1000) + minutes * 60,
        date_ms: start.valueOf(),
    };
}
