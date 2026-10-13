/**
 * NEW-ROOM-01, NEW-ROOM-02 — the `meeting-flow-new` booking flow, as a
 * NON-ADMIN, against a real local backend.
 *
 * `room-booking.spec.ts` covers the same story for the flow this one replaced.
 * That flow is no longer routed, so these are the specs that hold the story
 * for `/book/meeting`.
 *
 * As with every room spec, this runs with `app.events.use_bookings = true`:
 * the room is saved as a PlaceOS booking of type `room`. A green run says
 * nothing about the calendar path. See `room.settings.ts`.
 */
import {
    deleteBooking,
    getBooking,
    listBookings,
    uniqueTitle,
} from '../../../../e2e/support/api';
import { expect, test } from '../../../../e2e/support/fixtures';
import { MeetingFlow } from '../../../../e2e/support/room/meeting-flow.page';
import { releaseRoom, type RoomBooking } from '../../../../e2e/support/room/room.api';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import { ROOM_BASE_SETTINGS, useSettings } from '../../../../e2e/support/room/room.settings';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 2 * DAY;

const isBookingPost = (url: string, method: string) =>
    url.includes('/api/staff/v1/bookings') && method === 'POST';

test.describe('room booking — the new flow', () => {
    test('NEW-ROOM-01: a non-admin books a room through the three steps and the backend stores it', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const room = await roomForWorker(testInfo.parallelIndex);
        const title = uniqueTitle('E2E New Room');
        const flow = new MeetingFlow(staffPage);
        let booking_id: number | undefined;

        const swept = await releaseRoom(staffApi, room.id, window_from(), window_to());
        if (swept) console.log(`  swept ${swept} stale booking(s) off ${room.name}`);
        await useSettings(staffPage, ROOM_BASE_SETTINGS);

        try {
            await flow.open();
            await flow.title.fill(title);
            // All Day replaces the default slot, which is the next boundary of
            // the clock and makes the booking depend on how fast the run is.
            await flow.setAllDay(true);

            await flow.searchRooms.click();
            await expect(staffPage).toHaveURL(/view=1/);
            await flow.selectRoom(room.name);

            await flow.continue.click();
            await expect(staffPage).toHaveURL(/view=2/);
            await expect(
                flow.options,
                'the last step shows the meeting and the room before it is sent',
            ).toContainText(title);
            await expect(flow.options).toContainText(room.name);

            const [response] = await Promise.all([
                staffPage.waitForResponse(
                    (r) => isBookingPost(r.url(), r.request().method()),
                    { timeout: 30_000 },
                ),
                flow.confirm.click(),
            ]);
            const status = response.status();
            const body = await response.text().catch(() => '<body unavailable>');
            expect(response.ok(), `POST /bookings should succeed, got ${status}: ${body}`).toBeTruthy();
            const created_id: number = JSON.parse(body).id;
            booking_id = created_id;

            // The app reached its own success state, not merely a POST.
            await expect(staffPage).toHaveURL(/#\/book\/meeting\/success/);
            await expect(flow.successContinue).toBeVisible();

            // Read it back independently of the response parsed above.
            const stored = (await getBooking(staffApi, created_id)) as RoomBooking;
            expect(stored.booking_type, 'stored as a room booking').toBe('room');
            expect(stored.asset_id, 'against the room this worker owns').toBe(room.id);
            expect(stored.title, 'the meeting name we typed reached the backend').toBe(title);
            expect(stored.deleted, 'not soft-deleted').toBeFalsy();
            expect(stored.rejected, 'not rejected').toBeFalsy();
            expect(
                stored.zones.length,
                'carries its zone hierarchy (building/level)',
            ).toBeGreaterThan(0);

            const listed = await listBookings(staffApi, 'room', window_from(), window_to());
            expect(
                listed.map((b) => b.id),
                'the new booking appears in the room listing',
            ).toContain(created_id);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
        }
    });

    test('NEW-ROOM-02: each step refuses to go forward without its requirement, and nothing is sent', async ({
        staffPage,
    }) => {
        const flow = new MeetingFlow(staffPage);
        const posts: string[] = [];
        staffPage.on('request', (request) => {
            if (isBookingPost(request.url(), request.method())) posts.push(request.url());
        });
        await useSettings(staffPage, ROOM_BASE_SETTINGS);

        // Step 0 -> 1 needs a title.
        await flow.open();
        await expect(flow.title).toHaveValue('');
        await flow.searchRooms.click();
        await expect(staffPage.locator('mat-snack-bar-container')).toBeVisible();
        await expect(flow.details, 'no title: the flow stays on the details').toBeVisible();
        await expect(flow.roomSelect).toHaveCount(0);

        // Step 1 -> 2 needs a room.
        await flow.title.fill(uniqueTitle('E2E New Room None'));
        await flow.searchRooms.click();
        await expect(flow.rooms.first(), 'the room list should offer rooms').toBeVisible({
            timeout: 20_000,
        });
        await flow.continue.click();
        await expect(flow.roomSelect, 'no room: the flow stays on the room list').toBeVisible();
        await expect(flow.options).toHaveCount(0);

        expect(posts, 'no booking request may leave the page on a refused step').toEqual([]);
    });
});
