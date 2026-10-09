/**
 * Slots and identities for the HOME PAGE specs.
 *
 * Its own folder, like every other area, so nothing home-shaped can break the
 * desk, visitor, room, Your Bookings or parking specs.
 *
 * ## What is different about this page
 *
 * The home page CREATES almost nothing — it lists what other flows created. So
 * the risk is not contention over an asset, it is contention over the day being
 * displayed: the Upcoming panel shows the next few bookings a user has, whatever
 * day they fall on, so ANY leftover booking belonging to this worker can show up
 * in it.
 *
 * That is why these specs assert on specific booking ids rather than on how many
 * cards the panel holds, and why they sweep their own asset first. The one
 * exception is the quick-book spec, which really does book a desk.
 *
 * Days sit clear of the other areas: desks use today and +1 to +4, the room
 * specs +3 and +4, Your Bookings +5 to +13. The home page uses +16 onwards, and
 * TODAY for the panel that only shows imminent bookings.
 */
export const HOME_SLOTS = {
    /** home-upcoming.spec.ts — the panel lists what is coming up */
    upcoming: { day: 16, hour: 9 },
    /** home-upcoming.spec.ts — View all hands off to Your Bookings */
    view_all: { day: 17, hour: 9 },
    /** home-upcoming.spec.ts — a cancelled booking leaves the panel */
    cancelled: { day: 18, hour: 9 },
    /** home-scoping.spec.ts */
    scoping: { day: 19, hour: 9 },
    /** home-scoping.spec.ts, the control */
    scoping_control: { day: 20, hour: 9 },
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
