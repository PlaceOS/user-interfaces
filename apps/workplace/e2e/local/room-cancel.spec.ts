/**
 * ROOM-11 / ROOM-12 — cancelling a room booking FROM THE APP.
 *
 * Every other room spec tears its booking down through the API, which is right
 * for a teardown and useless as coverage: the Cancel item in the booking menu,
 * and the confirmation in front of it, are never otherwise exercised. For a
 * room that matters more than for a desk — a cancellation that does not take
 * leaves the room held against everybody else.
 *
 * The pair is deliberate. Cancelling and NOT cancelling are equally important: a
 * dialog whose decline button also deletes is worse than one that fails to
 * delete, and only the second test can catch it.
 *
 * Both read the backend afterwards. The card leaving the screen proves nothing —
 * the app removes it optimistically either way.
 */
import type { APIRequestContext } from '@playwright/test';
import {
    deleteBooking,
    listBookings,
    uniqueTitle,
} from '../../../../e2e/support/api';
import { expect, test } from '../../../../e2e/support/fixtures';
import {
    createRoomBookingViaApi,
    releaseRoom,
} from '../../../../e2e/support/room/room.api';
import { ROOM_SLOTS, slotFor } from '../../../../e2e/support/room/room.env';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import {
    ROOM_BASE_SETTINGS,
    useSettings,
} from '../../../../e2e/support/room/room.settings';
import { RoomSchedulePage } from '../../../../e2e/support/room/schedule.page';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 7 * DAY;

/** Is this booking still live (present and not soft-deleted) on the backend? */
async function isLive(api: APIRequestContext, id: number): Promise<boolean> {
    const live = await listBookings(api, 'room', window_from(), window_to());
    return live.some((b) => Number(b.id) === id && !b.deleted);
}

test.describe('cancelling a room booking from the app', () => {
    // ROOM-11 / ROOM-B4: native booking cancellation; assert persisted state.
    // Keep active so a fix can be verified rather than hidden by test.fixme.
    test('cancelling from the booking menu removes it for real', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const room = await roomForWorker(testInfo.parallelIndex);
        const slot = slotFor(ROOM_SLOTS.cancel.fromApp);
        const title = uniqueTitle('E2E Room Cancel');
        const cancellation_responses: object[] = [];
        staffPage.on('response', (response) => {
            if (response.request().method() === 'DELETE')
                cancellation_responses.push({
                    path: new URL(response.url()).pathname,
                    status: response.status(),
                });
        });
        let booking_id: number | undefined;

        await useSettings(staffPage, ROOM_BASE_SETTINGS);

        try {
            // Created through the API: the subject is cancelling, and driving
            // the meeting form first would only add an unrelated way to fail.
            const created = await createRoomBookingViaApi(staffApi, {
                room,
                title,
                start: slot.start,
                end: slot.end,
            });
            booking_id = created.id;

            const page = new RoomSchedulePage(staffPage);
            await page.open();
            await page.showRooms();
            await page.showDayOf(slot.date_ms);
            expect(
                await isLive(staffApi, booking_id),
                'precondition: the booking is live before we cancel it',
            ).toBe(true);

            await page.startCancel(booking_id);
            await page.acceptConfirm();

            await expect(async () => {
                expect(
                    await isLive(staffApi, booking_id!),
                    'the cancelled booking must be gone from the backend, not just the ' +
                        'screen — a room still held by a cancelled booking looks free ' +
                        'and refuses everyone',
                ).toBe(false);
            }).toPass({ timeout: 30_000 });

            await expect(
                page.card(booking_id),
                'and its card must leave the schedule',
            ).toBeHidden({ timeout: 30_000 });
        } finally {
            await staffPage
                .screenshot({ path: testInfo.outputPath('room-cancel.png') })
                .catch(() => null);
            await testInfo.attach('cancellation-evidence', {
                body: JSON.stringify({
                    booking_id,
                    cancellation_responses,
                    live_before_cleanup:
                        booking_id != null
                            ? await isLive(staffApi, booking_id)
                            : null,
                }),
                contentType: 'application/json',
            });
            if (booking_id != null)
                await deleteBooking(staffApi, booking_id).catch(() => null);
        }
    });

    test('declining the confirmation leaves the booking alone', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const room = await roomForWorker(testInfo.parallelIndex);
        const slot = slotFor(ROOM_SLOTS.cancel.dismissed);
        const title = uniqueTitle('E2E Room Keep');
        let booking_id: number | undefined;

        await releaseRoom(staffApi, room.id, window_from(), window_to());
        await useSettings(staffPage, ROOM_BASE_SETTINGS);

        try {
            const created = await createRoomBookingViaApi(staffApi, {
                room,
                title,
                start: slot.start,
                end: slot.end,
            });
            booking_id = created.id;

            const page = new RoomSchedulePage(staffPage);
            await page.open();
            await page.showRooms();
            await page.showDayOf(slot.date_ms);

            await page.startCancel(booking_id);
            await page.dismissConfirm();

            // Wait before asserting: "still there" a millisecond after the click
            // would pass even if a delete were already on its way.
            await staffPage.waitForTimeout(5_000);
            expect(
                await isLive(staffApi, booking_id),
                'walking away from the confirmation must not cancel anything',
            ).toBe(true);
        } finally {
            if (booking_id != null)
                await deleteBooking(staffApi, booking_id).catch(() => null);
        }
    });
});
