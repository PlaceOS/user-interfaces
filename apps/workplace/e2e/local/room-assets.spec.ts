/**
 * ROOM-24 — equipment requested on a meeting.
 *
 * ## The headline: it cannot be done on a PlaceOS-native room booking
 *
 * Measured 2026-09-17, and it is a NEW finding — **ROOM-B9**. I expected this to
 * work from reading the code and it does not, which is worth saying plainly
 * because the code genuinely looks like it should.
 *
 * `validateAssetRequestsForResource` (`libs/assets/src/lib/assets.fn.ts`) has a
 * branch for exactly this case:
 *
 *     createBooking(new Booking(asset_data), {
 *         ical_uid,
 *         event_id: from_booking ? '' : id,
 *     });
 *
 * So when the parent is a booking rather than a calendar event, `event_id` is
 * meant to be left empty and `parent_id` used instead. **That branch is not
 * reached** — `from_booking` is falsy on the object the meeting form hands over,
 * so `event_id` is sent as the room BOOKING's id and the backend refuses:
 *
 *     POST /api/staff/v1/bookings  (booking_type: asset-request)
 *     -> 422 {"error":"error linking booking to event",
 *             "failures":[{"field":"event_id",
 *                          "reason":"Could not find metadata for event ARRAY['2008']"}]}
 *
 * The request payload proves the client half was right: it carried
 * `extension_data.parent_id: 2008` and `request.event_id: ""`. Only the
 * top-level `event_id` option was wrong.
 *
 * ## Same cause as ROOM-B5, better outcome
 *
 * ROOM-B5 is the catering version of this: the order is refused with the
 * identical "error linking booking to event" 422. So the two findings share a
 * root cause — sub-bookings of a native room booking are linked by `event_id`,
 * and in this mode there is no event.
 *
 * What is left behind afterwards is different, and better:
 *
 *   ROOM-B5 (catering)   -> recorded as leaving the room booking UNDELETED and
 *                           held, with no order placed.
 *   ROOM-B9 (equipment)  -> **the room booking is rolled back.** Measured: the
 *                           meeting came back `deleted: true`, and no
 *                           `asset-request` booking exists. The user is told it
 *                           failed and nothing is left held.
 *
 * So ROOM-B9 is a feature that cannot be used, not a booking left in a lying
 * state — lower severity than ROOM-B5.
 *
 * **One thing for whoever picks this up:** both flows call the same
 * `_removeBookingAfterError(!event.id, created_event, …)`, and with `is_new`
 * true that helper calls `removeEvent` and rolls back regardless of which flow
 * failed. That does not square with ROOM-B5's recorded "the room survives",
 * so either something else differs between the two paths or **ROOM-B5's
 * rollback observation is worth re-measuring.** Not resolved here, and not
 * guessed at.
 *
 * ## What still passes, and it is worth having
 *
 * ROOM-24b below is active and green: equipment ALLOCATION works even though
 * requesting it through a meeting does not. With two of three units held by
 * existing `asset-request` bookings, the picker offers exactly one — so
 * `queryGroupAvailability` really does read existing requests, and two meetings
 * cannot be handed the same projector. That is the half of ROOM-24 that can be
 * guarded today.
 *
 * ## Two preconditions, neither of which fails loudly
 *
 *  - `app.events.has_assets` (ROOM_ASSETS_MODE) or the form has no equipment
 *    section at all.
 *  - requestable assets seeded (`asset.seed.ts`) or the modal opens empty.
 *
 * The group offered is the asset TYPE, not an individual unit: the app allocates
 * specific units itself.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import {
    deleteBooking,
    listBookings,
    uniqueTitle,
} from '../../../../e2e/support/api';
import {
    ROOM_SLOTS_3,
    THIRD_DAY,
    slotFor,
} from '../../../../e2e/support/room/room.env';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import { equipmentCatalogue } from '../../../../e2e/support/room/asset.seed';
import { releaseRoom } from '../../../../e2e/support/room/room.api';
import {
    ROOM_ASSETS_MODE,
    ROOM_BASE_SETTINGS,
    useSettings,
} from '../../../../e2e/support/room/room.settings';
import { MeetingForm } from '../../../../e2e/support/room/meeting-form.page';
import { bookRoomViaUI, setDate } from '../../../../e2e/support/room/room.flows';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 21 * DAY;

/** Every `asset-request` booking in the window that names one of our units. */
async function ourAssetRequests(
    api: Parameters<typeof listBookings>[0],
    unit_ids: string[],
) {
    const all = await listBookings(api, 'asset-request', window_from(), window_to());
    return all.filter((booking) => {
        const ids = [
            booking.asset_id,
            ...((booking.asset_ids as string[] | undefined) ?? []),
        ].filter(Boolean);
        return ids.some((id) => unit_ids.includes(id as string));
    });
}

test.describe('room booking equipment requests', () => {
    // `fixme` on ROOM-B9 — see the file header. The assertions below are what
    // SHOULD happen; drop the `fixme` once an asset request can be linked to a
    // booking rather than only to a calendar event.
    test.fixme('ROOM-24: equipment requested on a meeting is stored as its own booking, linked to it', async ({
        staffPage,
        staffApi,
    }) => {
        const kit = await equipmentCatalogue();
        const room = await roomForWorker(test.info().parallelIndex);
        const slot = slotFor(ROOM_SLOTS_3.assets.hour, THIRD_DAY);
        const title = uniqueTitle('E2E Assets');
        const unit_ids = kit.items.map((item) => item.id);

        // Clear both the room and any leftover request on our units, so a
        // previous run cannot make this pass or fail for the wrong reason.
        await releaseRoom(staffApi, room.id, window_from(), window_to());
        for (const stale of await ourAssetRequests(staffApi, unit_ids)) {
            await deleteBooking(staffApi, stale.id);
        }

        await useSettings(staffPage, { ...ROOM_BASE_SETTINGS, ...ROOM_ASSETS_MODE });

        try {
            // Through the shared flow rather than the form directly. It owns the
            // load-bearing order — the DATE first and exactly once, then title
            // and room through the REG-10 retry, then the times last — and
            // getting that wrong is what made the first attempt at this spec
            // fail on a start time the form had never been asked to offer.
            const meeting = await bookRoomViaUI(staffPage, staffApi, room, title, {
                date: slot.date_ms,
                startTime: `${String(ROOM_SLOTS_3.assets.hour).padStart(2, '0')}:00`,
                assets: [kit.type_name],
            });
            expect(
                meeting?.id,
                'the meeting itself was not stored, so nothing can be said about its ' +
                    'equipment. Check the room specs first — this is their subject',
            ).toBeTruthy();

            // 2. The request reached the backend as its own booking.
            await expect
                .poll(async () => (await ourAssetRequests(staffApi, unit_ids)).length, {
                    message:
                        'no `asset-request` booking was stored. This is the quiet ' +
                        'failure the test exists for: the meeting is booked, the screen ' +
                        'says it worked, and the equipment was never requested. If the ' +
                        'response was 422 "error linking booking to event", equipment ' +
                        'has regressed onto the calendar-only path that breaks catering ' +
                        '(ROOM-B5)',
                    timeout: 25_000,
                })
                .toBe(1);

            const [request] = await ourAssetRequests(staffApi, unit_ids);

            // 3. It carries a real unit from our catalogue.
            const allocated = [
                request.asset_id,
                ...((request.asset_ids as string[] | undefined) ?? []),
            ].filter(Boolean);
            expect(
                allocated.some((id) => unit_ids.includes(id as string)),
                `the request was stored but against none of our units. It holds ` +
                    `${JSON.stringify(allocated)}; the catalogue is ` +
                    `${JSON.stringify(unit_ids)}`,
            ).toBe(true);

            // 4. It belongs to the person who asked for it — the signed-in
            //    staff user, not the room and not the admin.
            const me = await (
                await staffApi.get('/api/engine/v2/users/current')
            ).json();
            expect(
                String(request.user_email || '').toLowerCase(),
                'the request must be stored against the requester. If it comes back ' +
                    'as the room or as nobody, the equipment cannot be traced to who ' +
                    'asked for it',
            ).toBe(String(me.email).toLowerCase());

            // 5. It is tied back to the meeting rather than floating free. The
            //    native path links by `parent_id` (assets.fn.ts) rather than by
            //    `event_id`, so accept either and say which was found.
            const extension = (request.extension_data ?? {}) as Record<string, unknown>;
            const link =
                (request as Record<string, unknown>).parent_id ??
                extension.parent_id ??
                (request as Record<string, unknown>).event_id;
            expect(
                link,
                'the request is not linked to anything. An orphaned asset-request ' +
                    'cannot be cancelled with its meeting, so the equipment stays held ' +
                    'after the meeting is gone. Checked parent_id, ' +
                    'extension_data.parent_id and event_id; the request holds ' +
                    `${JSON.stringify(extension)}`,
            ).toBeTruthy();
        } finally {
            for (const stale of await ourAssetRequests(staffApi, unit_ids)) {
                await deleteBooking(staffApi, stale.id);
            }
            await releaseRoom(staffApi, room.id, window_from(), window_to());
        }
    });

    test('ROOM-24b: a unit already requested is not offered to an overlapping meeting', async ({
        staffPage,
        staffApi,
    }) => {
        const kit = await equipmentCatalogue();
        const room = await roomForWorker(test.info().parallelIndex);
        const slot = slotFor(ROOM_SLOTS_3.assets.second, THIRD_DAY);
        const unit_ids = kit.items.map((item) => item.id);

        await releaseRoom(staffApi, room.id, window_from(), window_to());
        for (const stale of await ourAssetRequests(staffApi, unit_ids)) {
            await deleteBooking(staffApi, stale.id);
        }

        // Hold every unit but one, straight through the API — the subject here is
        // what the PICKER offers, not the booking form.
        const held: number[] = [];
        try {
            for (const item of kit.items.slice(0, kit.items.length - 1)) {
                const res = await staffApi.post('/api/staff/v1/bookings', {
                    data: {
                        booking_type: 'asset-request',
                        asset_id: item.id,
                        asset_ids: [item.id],
                        asset_name: item.name,
                        title: uniqueTitle('E2E Held Asset'),
                        booking_start: slot.start,
                        booking_end: slot.end,
                        timezone: 'Etc/UTC',
                        zones: [kit.zone_id],
                    },
                });
                expect(
                    res.ok(),
                    `could not hold ${item.name} for the test: HTTP ${res.status()} ` +
                        `${(await res.text()).slice(0, 200)}`,
                ).toBe(true);
                held.push((await res.json()).id);
            }

            await useSettings(staffPage, {
                ...ROOM_BASE_SETTINGS,
                ...ROOM_ASSETS_MODE,
            });
            // No booking is made here, so this drives the form directly rather
            // than going through `bookRoomViaUI` — but the DATE still has to be
            // set before the times, or the form offers today's hours and the
            // slot's hour is simply absent.
            const form = new MeetingForm(staffPage);
            await form.open();
            await setDate(form, staffPage, slot.date_ms);
            await staffPage.waitForTimeout(2_000);
            await form.chooseRoom(room.name);
            await form.setStartTime(
                `${String(ROOM_SLOTS_3.assets.second).padStart(2, '0')}:00`,
            );
            await staffPage.waitForTimeout(3_000);

            await staffPage
                .locator('asset-list-field')
                .getByRole('button', { name: /Request Assets/i })
                .first()
                .click();
            const modal = staffPage.locator('asset-select-modal');
            await expect(modal, 'the asset modal did not open').toBeVisible({
                timeout: 20_000,
            });

            // The count the modal shows is the assertion. `queryGroupAvailability`
            // removes any unit covered by a live `asset-request`, so with all but
            // one held it must offer exactly one.
            const listing = modal.locator('asset-list');
            await expect(
                listing.getByText(kit.type_name, { exact: false }).first(),
                'the equipment group should still be listed while one unit is free',
            ).toBeVisible({ timeout: 20_000 });
            await expect
                .poll(async () => (await listing.innerText()).replace(/\s+/g, ' '), {
                    message:
                        `with ${held.length} of ${kit.items.length} units held, the ` +
                        `modal must offer exactly ${kit.items.length - held.length}. ` +
                        `If it still offers all of them, availability is not reading ` +
                        `existing asset-request bookings and two meetings can be given ` +
                        `the same projector`,
                    timeout: 25_000,
                })
                .toContain(`${kit.items.length - held.length} available`);
        } finally {
            for (const id of held) await deleteBooking(staffApi, id);
            for (const stale of await ourAssetRequests(staffApi, unit_ids)) {
                await deleteBooking(staffApi, stale.id);
            }
            await releaseRoom(staffApi, room.id, window_from(), window_to());
        }
    });
});
