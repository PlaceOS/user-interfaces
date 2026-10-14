/**
 * ROOM-22 — ordering catering with a room booking.
 *
 * The last of the room surfaces, and the one with the most moving parts: a
 * catering order is not a field on the booking, it is a SEPARATE booking of
 * type `catering-order`, created after the meeting itself
 * (`postForm` → `createBookingsForEvent(event, 'catering-order', ...)`). So the
 * failure this guards against is the quiet one — the meeting is booked, the
 * screen says it worked, and the food was never ordered.
 *
 * ## The menu has to be seeded, and it is not a setting
 *
 * The form only shows its catering section when the building has a menu, and a
 * menu is made of ASSETS: a hidden `_CATERING_` asset category, an asset type
 * called `CATERING:<caterer>`, and an asset per item on the building zone. All
 * on the ENGINE api, all needing admin. `catering.seed.ts` does it, idempotently
 * and once per process, and explains the shape.
 *
 * ## Order of operations in the flow
 *
 * The room goes first. Catering is delivered to a room, so the catering
 * section is on the last step of the flow, after the room list. See
 * `MeetingFlow.addCateringItem`.
 *
 * ## ROOM-B5, the worst of the room findings — fixed in the app
 *
 * Ordering catering with a PlaceOS-native room booking could not work at all.
 * The meeting was created (`201`), and the catering order that followed was
 * refused:
 *
 *   POST /api/staff/v1/bookings  (booking_type: catering-order)
 *   -> 422 {"error":"error linking booking to event",
 *           "failures":[{"field":"event_id",
 *                        "reason":"Could not find metadata for event ARRAY['1138']"}]}
 *
 * The order was linked to a calendar EVENT by `event_id`, and in `use_bookings`
 * mode there is no event — the meeting is a booking, so the id handed over
 * (1138 here) was a booking id and the lookup found nothing.
 *
 * Measured what was left behind afterwards, because that is what decides how
 * bad it is: **the room booking survived, undeleted, and no catering order
 * existed.** The user was shown an error, so they had every reason to believe
 * nothing was booked — while the room was held and the food was never ordered.
 *
 * The order is now linked to the native booking by `parent_id`, which is what
 * the assertions below check. Measured through the new meeting flow,
 * 13 Oct 2026: the order is stored and names the item.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import {
    deleteBooking,
    getBooking,
    listBookings,
    uniqueTitle,
} from '../../../../e2e/support/api';
import { ROOM_SLOTS_2, SECOND_DAY, slotFor } from '../../../../e2e/support/room/room.env';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import { cateringMenu } from '../../../../e2e/support/room/catering.seed';
import { type RoomBooking, releaseRoom } from '../../../../e2e/support/room/room.api';
import { ROOM_BASE_SETTINGS, useSettings } from '../../../../e2e/support/room/room.settings';
import { bookRoomViaUI } from '../../../../e2e/support/room/room.flows';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 7 * DAY;

test.describe('room booking catering', () => {
    test('catering ordered on the form is stored as its own booking', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const room = await roomForWorker(testInfo.parallelIndex);
        const menu = await cateringMenu();
        const slot = slotFor(ROOM_SLOTS_2.catering.ordered, SECOND_DAY);
        const title = uniqueTitle('E2E Room Catering');
        let booking_id: number | undefined;
        const order_ids: number[] = [];

        await releaseRoom(staffApi, room.id, window_from(), window_to());
        await useSettings(staffPage, ROOM_BASE_SETTINGS);

        try {
            // Through the shared flow, so a refusal is reported with the
            // request, the response and what was on screen — which is what
            // makes a catering failure legible at all.
            const created = await bookRoomViaUI(staffPage, staffApi, room, title, {
                date: slot.date_ms,
                catering: [menu.item_name],
            });
            booking_id = created.id;

            // And the food, as a booking of its own. Polled, because it is
            // created AFTER the meeting and the success screen does not wait
            // for it — which is exactly how a silently unordered lunch happens.
            await expect(async () => {
                const orders = (await listBookings(
                    staffApi,
                    'catering-order',
                    window_from(),
                    window_to(),
                )) as RoomBooking[];
                // A native booking links its order by `parent_id`; a calendar
                // event links by `extension_data.event_id`.
                const mine = orders.filter(
                    (o) =>
                        !o.deleted &&
                        [
                            (o as Record<string, unknown>).parent_id,
                            o.extension_data?.parent_id,
                            o.extension_data?.event_id,
                        ].some((link) => `${link ?? ''}` === `${booking_id}`),
                );
                expect(
                    mine.length,
                    `a catering order should exist for meeting ${booking_id}. ` +
                        `${orders.length} order(s) are live in the window: ` +
                        `${JSON.stringify(
                            orders.map((o) => ({
                                id: o.id,
                                parent: (o as Record<string, unknown>).parent_id,
                                event: o.extension_data?.event_id,
                                deleted: o.deleted,
                            })),
                        )}`,
                ).toBeGreaterThan(0);
                for (const order of mine) order_ids.push(order.id);
            }).toPass({ timeout: 45_000 });

            const order = await getBooking(staffApi, order_ids[0]);
            expect(
                JSON.stringify((order as RoomBooking).extension_data ?? {}),
                `the order should name the item that was chosen (${menu.item_name})`,
            ).toContain(menu.item_name);
        } finally {
            for (const id of order_ids) await deleteBooking(staffApi, id);
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseRoom(staffApi, room.id, window_from(), window_to());
        }
    });
});
