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

/**
 * Slots for the specs added after the first six files, on a DIFFERENT DAY.
 *
 * The hours above fill 9 to 20, and the ones left over (early morning, late
 * evening) are outside the hours the form offers — so a spec that has to pick a
 * time through the UI could not use them. Moving to `SECOND_DAY` reopens the
 * whole working day instead. Same rule as before within it: one hour per test,
 * because a worker's specs share one room and a sweep is per room, not per hour.
 */
export const SECOND_DAY = 4;

export const ROOM_SLOTS_2 = {
    /** room-edit.spec.ts — `moved_to` is the hour a booking is moved INTO */
    edit: { time: 9, moved_to: 10, room: 11 },
    /** room-capacity.spec.ts */
    capacity: { strict: 12, warning: 13 },
    /** room-favourites.spec.ts */
    favourites: { toggled: 14 },
    /** room-approval.spec.ts — blocked by ROOM-B1 */
    approval: { approved: 15 },
    /** room-catering.spec.ts */
    catering: { ordered: 16 },
    /** room-multi.spec.ts — two rooms at once */
    multi: { hour: 17 },
    /** room-allday.spec.ts */
    allday: { hour: 18 },
    /** room-delegate.spec.ts */
    delegate: { hour: 19 },
    /** room-features.spec.ts — no booking, so only the picker matters */
    features: { hour: 20 },
} as const;

export interface RoomIdentity {
    /** Engine system id, filled in by the seeder — not known up front. */
    id: string;
    name: string;
    email: string;
    capacity: number;
}

/**
 * Three rooms per worker, not one.
 *
 *  - `main` is the room every other spec books. Capacity 8.
 *  - `alt` exists so a booking can be MOVED from one room to another
 *    (ROOM-16). A second room is the only way to tell "the room was changed"
 *    from "the room field was ignored".
 *  - `small` has capacity ONE, so a single attendee is already over it
 *    (ROOM-17). Capacity is a property of the System and cannot be set per
 *    test, so the alternative would be adding eight attendees through the
 *    autocomplete to overflow `main` — slower, and every extra chip is another
 *    way for the test to fail for an unrelated reason.
 *
 * The names deliberately share no prefix with each other's full name, because
 * the picker is searched by name text: "E2E Room 0" does not appear inside
 * "E2E Alt Room 0" or "E2E Small Room 0".
 */
export type RoomVariant = 'main' | 'alt' | 'small';

/**
 * A feature only the `alt` room has.
 *
 * Space features come from the engine System's own `features` list, and the
 * picker's facilities filter is built from whatever the loaded rooms carry
 * (`space-filters.component.ts`). With no room carrying anything, the filter
 * section is not rendered at all — so testing it needs exactly this: one
 * feature, on one room, so filtering by it has a right answer.
 */
export const ALT_ROOM_FEATURE = 'E2E Projector';

export const ROOM_VARIANTS: RoomVariant[] = ['main', 'alt', 'small'];

/** The name, address and capacity of a room this worker owns. */
export function roomFor(
    workerIndex: number,
    variant: RoomVariant = 'main',
): Omit<RoomIdentity, 'id'> {
    switch (variant) {
        case 'alt':
            return {
                name: `E2E Alt Room ${workerIndex}`,
                email: `${ROOM_PREFIX}alt-${workerIndex}@place.tech`,
                capacity: 8,
            };
        case 'small':
            return {
                name: `E2E Small Room ${workerIndex}`,
                email: `${ROOM_PREFIX}small-${workerIndex}@place.tech`,
                capacity: 1,
            };
        default:
            return {
                name: `E2E Room ${workerIndex}`,
                email: `${ROOM_PREFIX}${workerIndex}@place.tech`,
                capacity: 8,
            };
    }
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
