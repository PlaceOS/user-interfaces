/**
 * ROOM-01 / ROOM-02 / ROOM-13 — book a room through the full UI, as a NON-ADMIN.
 *
 * Deliberately the same shape as `desk-booking.spec.ts`: two tests, one that
 * proves the happy path reaches the backend intact, one that proves teardown
 * really tears down.
 *
 * ## Rooms are only testable locally in one mode
 *
 * By default the meeting flow talks to Microsoft/Google through `/events` and
 * `/calendars`, both of which 500 on this stack. With
 * `app.events.use_bookings = true` the same form saves an ordinary PlaceOS
 * booking of type `room` instead, with no outbound call. Every room spec runs in
 * that mode — see `room.settings.ts`. A green run here says the PlaceOS-native
 * room path works and says nothing about the calendar path.
 *
 * ## What makes a room different from a desk and from a visitor
 *
 *  - A room is a real engine SYSTEM and has to be created. A desk is a row in
 *    zone metadata; a visitor is just an email. `room.seed.ts` creates one room
 *    per worker, on demand, without touching the shared `seed.ts`.
 *  - A room is EXCLUSIVE for its window, like a desk. Measured before this spec
 *    was written: the same slot as another user is 409, a partial overlap is
 *    409, a clear slot is 201. `room-clash.spec.ts` owns that.
 *  - The flow has THREE screens — form, confirm, success — and nothing is sent
 *    until the second. A spec that clicks Confirm once and looks for a booking
 *    will find none and blame the backend.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import {
    deleteBooking,
    getBooking,
    listBookings,
    uniqueTitle,
} from '../../../../e2e/support/api';
import { ROOM_SLOTS, slotFor } from '../../../../e2e/support/room/room.env';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import { releaseRoom, type RoomBooking } from '../../../../e2e/support/room/room.api';
import {
    ROOM_BASE_SETTINGS,
    useSettings,
} from '../../../../e2e/support/room/room.settings';
import { bookRoomViaUI } from '../../../../e2e/support/room/room.flows';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 7 * DAY;

test.describe('room booking', () => {
    test('a non-admin books a room in the UI and the backend stores it', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const room = await roomForWorker(testInfo.parallelIndex);
        const slot = slotFor(ROOM_SLOTS.booking.stores);
        const title = uniqueTitle('E2E Room');
        let booking_id: number | undefined;

        // Sweep first, not just after. A run that died between booking and
        // cleanup leaves the room held, and every later run then fails with
        // "no room called ... in the picker" — which looks nothing like the cause.
        const swept = await releaseRoom(staffApi, room.id, window_from(), window_to());
        if (swept) console.log(`  swept ${swept} stale booking(s) off ${room.name}`);
        await useSettings(staffPage, ROOM_BASE_SETTINGS);

        try {
            const created = await bookRoomViaUI(staffPage, staffApi, room, title, {
                date: slot.date_ms,
                duration: 60,
            });
            booking_id = created.id;

            expect(created.id, 'the API returned a booking id').toBeTruthy();

            // Read it back rather than trusting the response we just parsed.
            const stored = (await getBooking(staffApi, booking_id)) as RoomBooking;
            expect(stored.booking_type, 'stored as a room booking').toBe('room');
            expect(stored.asset_id, 'against the room this worker owns').toBe(room.id);

            // The meeting name lives in `extension_data`, NOT in the booking's own
            // `title`. `newBookingFromCalendarEvent` spreads the whole event into
            // extension_data and sets no title, so every room booking is called
            // "Room Booking" at this level. Not a bug — the schedule rebuilds the
            // event from extension_data and shows the real name — but asserting
            // on `stored.title` fails against a booking that is perfectly correct.
            expect(
                stored.extension_data?.title,
                'the meeting name we typed reached the backend',
            ).toBe(title);
            expect(
                stored.title,
                'and the booking itself carries the generic room title',
            ).toBe('Room Booking');
            expect(stored.deleted, 'not soft-deleted').toBeFalsy();
            expect(stored.rejected, 'not rejected').toBeFalsy();
            // Zones are deliberately NOT asserted here — see the `fixme` below.
            expect(
                new Date(stored.booking_start * 1000).toDateString(),
                'and falls on the day chosen in the form, not the default day',
            ).toBe(new Date(slot.date_ms).toDateString());

            // ...and is discoverable through the listing the app itself uses,
            // not only by direct id lookup.
            const listed = await listBookings(staffApi, 'room', window_from(), window_to());
            expect(
                listed.map((b) => b.id),
                'the new booking appears in the room listing',
            ).toContain(booking_id);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
        }
    });

    test('a deleted room booking leaves the listing', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const room = await roomForWorker(testInfo.parallelIndex);
        const slot = slotFor(ROOM_SLOTS.booking.cleanup);
        const title = uniqueTitle('E2E Room Cleanup');

        await releaseRoom(staffApi, room.id, window_from(), window_to());
        await useSettings(staffPage, ROOM_BASE_SETTINGS);

        const created = await bookRoomViaUI(staffPage, staffApi, room, title, {
            date: slot.date_ms,
            duration: 60,
        });
        expect(
            (await listBookings(staffApi, 'room', window_from(), window_to())).map((b) => b.id),
            'precondition: the booking is in the listing before we delete it',
        ).toContain(created.id);

        await deleteBooking(staffApi, created.id);

        expect(
            (await listBookings(staffApi, 'room', window_from(), window_to())).map((b) => b.id),
            'a deleted booking must not come back in the listing — otherwise every ' +
                'spec teardown silently leaks state into the next run, and a room is ' +
                'exclusive, so a leak holds it for everyone',
        ).not.toContain(created.id);
    });

    /**
     * ROOM-13, blocked by ROOM-B2 — a room booked through the app is stored
     * with NO zones.
     *
     * The meeting form sends `zones: []`. Desk and visitor bookings both carry
     * the org/building/level hierarchy, and anything that scopes bookings by
     * zone — a building filter, a report, a per-site view — cannot see a booking
     * that has none.
     *
     * It is also half of ROOM-B1: with no zones, the backend's approval
     * permission check has nothing to check against, and instead of refusing
     * with 403 it builds a query with an empty list and dies with
     * `syntax error at or near ")" (PQ::PQError)`.
     *
     * A third test in a two-test file, on purpose, and `fixme` so it costs
     * nothing per run. Fold it into the first test once the app populates zones.
     */
    test.fixme('a room booking carries its zone hierarchy', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const room = await roomForWorker(testInfo.parallelIndex);
        const slot = slotFor(ROOM_SLOTS.booking.stores, 4);
        const title = uniqueTitle('E2E Room Zones');
        let booking_id: number | undefined;

        await releaseRoom(staffApi, room.id, window_from(), window_to());
        await useSettings(staffPage, ROOM_BASE_SETTINGS);

        try {
            const created = await bookRoomViaUI(staffPage, staffApi, room, title, {
                date: slot.date_ms,
                duration: 60,
            });
            booking_id = created.id;
            const stored = await getBooking(staffApi, booking_id);
            expect(
                stored.zones.length,
                'a room booking must carry its zones, as desk and visitor bookings do',
            ).toBeGreaterThan(0);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
        }
    });
});
