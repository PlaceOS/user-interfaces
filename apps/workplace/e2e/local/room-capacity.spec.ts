/**
 * ROOM-17 / ROOM-18 — booking a room that is too small for the meeting.
 *
 * The only place in this suite where the ROOM's own properties constrain the
 * booking. Capacity lives on the engine System, so the test data carries it:
 * every worker owns an `E2E Small Room` with capacity ONE (`room.env.ts`), and
 * one invited colleague is already more people than fit.
 *
 * ## Two settings, two completely different behaviours
 *
 * `app.events.strict_capacity_check` is not a stronger version of the default —
 * it is a different mechanism:
 *
 *   unset ...... a warning is drawn under the attendee list of the last step
 *                and the booking goes through anyway. This is the shipped
 *                default, so it is the behaviour real users get.
 *   true ....... Confirm (`confirmBooking`, meeting-flow-options.component.ts)
 *                returns early with a toast. Nothing is sent.
 *
 * Test 1 takes the strict path, because "the flow refused and the backend never
 * heard about it" is the assertion with teeth. Test 2 takes the default path,
 * because a warning nobody renders is the failure users would actually hit.
 *
 * ## Both tests carry their own control
 *
 * A flow that refuses everything, or renders a warning always, would pass a
 * one-sided version of either test. So test 1 removes the attendee and shows
 * the same flow then books, and test 2 starts from a room that IS big enough
 * and shows the warning appear only when the room changes. Nothing but the
 * capacity differs across either pair.
 *
 * ## The control of test 1 books for real
 *
 * The flow has no confirm screen to stop at: Confirm sends the request at
 * once. So the control of test 1 is a booking that goes through, and the test
 * deletes it afterwards.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deleteBooking, listBookings, uniqueTitle } from '../../../../e2e/support/api';
import { WORKERS, staffEmail } from '../../../../e2e/support/env';
import { type RoomBooking, releaseRoom } from '../../../../e2e/support/room/room.api';
import { ROOM_SLOTS_2, SECOND_DAY, slotFor } from '../../../../e2e/support/room/room.env';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import {
    ROOM_BASE_SETTINGS,
    STRICT_CAPACITY,
    useSettings,
} from '../../../../e2e/support/room/room.settings';
import { MeetingFlow } from '../../../../e2e/support/room/meeting-flow.page';
import { setDate } from '../../../../e2e/support/room/room.flows';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 7 * DAY;

/** "HH:00" for an hour of the slot table. */
const onTheHour = (hour: number) => `${String(hour).padStart(2, '0')}:00`;

test.describe('room capacity', () => {
    test('a meeting bigger than the room is refused before anything is sent', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers for a second address');

        const small = await roomForWorker(mine, 'small');
        const slot = slotFor(ROOM_SLOTS_2.capacity.strict, SECOND_DAY);
        const title = uniqueTitle('E2E Room Capacity');
        const guest = staffEmail(theirs);
        let booking_id: number | undefined;

        await releaseRoom(staffApi, small.id, window_from(), window_to());
        await useSettings(staffPage, { ...ROOM_BASE_SETTINGS, ...STRICT_CAPACITY });

        // Watch every booking write, not just the successful ones. The point of
        // this test is that the backend is never asked at all, and a request
        // that was sent and refused would look identical on screen.
        const writes: string[] = [];
        staffPage.on('request', (r) => {
            if (!r.url().includes('/api/staff/v1/bookings')) return;
            if (r.method() === 'GET') return;
            writes.push(`${r.method()} ${new URL(r.url()).pathname}`);
        });

        try {
            const form = new MeetingFlow(staffPage);
            await form.open();
            await form.title.fill(title);
            await setDate(form, staffPage, slot.date_ms);
            await form.setStartTime(onTheHour(ROOM_SLOTS_2.capacity.strict));
            await form.toRoomStep();
            await form.selectRoom(small.name);
            await form.toOptionsStep();
            await form.addAttendee(guest);

            // Press Confirm. In strict mode the flow refuses with a toast and
            // stays on the last step.
            await form.confirm.click();
            await expect(
                staffPage.locator('mat-snack-bar-container'),
                'a meeting with more people than the room holds must be refused ' +
                    'with a message when `app.events.strict_capacity_check` is set',
            ).toBeVisible({ timeout: 10_000 });
            await expect(
                form.confirm,
                'the flow must stay on the last step, ready for a correction',
            ).toBeVisible();
            await expect(form.successContinue).toHaveCount(0);
            expect(
                writes,
                'nothing at all should have been written to the backend',
            ).toEqual([]);

            // CONTROL: the same flow, one person lighter, gets through. Without
            // this, a flow that was simply broken would pass the assertions above.
            await form.removeAttendee(guest);
            const [response] = await Promise.all([
                staffPage.waitForResponse(
                    (r) =>
                        r.url().includes('/api/staff/v1/bookings') &&
                        r.request().method() === 'POST',
                    { timeout: 30_000 },
                ),
                form.confirm.click(),
            ]);
            const body = await response.text().catch(() => '<body unavailable>');
            expect(
                response.ok(),
                'with the meeting back inside the room capacity the booking must go ' +
                    'through — otherwise the refusal above was not about capacity at ' +
                    `all. Got HTTP ${response.status()}: ${body}`,
            ).toBeTruthy();
            booking_id = JSON.parse(body).id;
            await expect(form.successContinue).toBeVisible({ timeout: 30_000 });
            expect(
                writes,
                'the only write of the whole test is the booking of the control, so ' +
                    'the refused attempt sent nothing late either',
            ).toEqual(['POST /api/staff/v1/bookings']);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseRoom(staffApi, small.id, window_from(), window_to());
        }
    });

    test('a meeting bigger than the room is warned about by default', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers for a second address');

        const room = await roomForWorker(mine);
        const small = await roomForWorker(mine, 'small');
        const slot = slotFor(ROOM_SLOTS_2.capacity.warning, SECOND_DAY);
        const title = uniqueTitle('E2E Room Capacity Warn');
        const guest = staffEmail(theirs);

        // The default: strict checking OFF, which is what ships.
        //
        // The only booking this test makes is in the small room. The main room
        // is selected for the control and then swapped out, but it has to be
        // free for the window to be offered at all, so both are swept.
        await useSettings(staffPage, ROOM_BASE_SETTINGS);
        await releaseRoom(staffApi, room.id, window_from(), window_to());
        await releaseRoom(staffApi, small.id, window_from(), window_to());

        const form = new MeetingFlow(staffPage);
        await form.open();
        await form.title.fill(title);
        await setDate(form, staffPage, slot.date_ms);
        await form.setStartTime(onTheHour(ROOM_SLOTS_2.capacity.warning));
        await form.toRoomStep();
        await form.selectRoom(room.name);
        await form.toOptionsStep();
        await form.addAttendee(guest);

        // CONTROL FIRST, with a room that fits: no warning. This is what makes
        // the assertion below about capacity rather than about the element
        // simply always being there. The room in the summary proves the step
        // has rendered, so "no warning" is not read off an empty page.
        expect(await form.chosenRoomNames()).toEqual([room.name]);
        await expect(
            form.capacityWarning,
            `${room.name} holds ${room.capacity}, so a two-person meeting must not ` +
                'be warned about',
        ).toHaveCount(0);

        // Only the room changes. A click on a room in the list takes it in
        // place of the one that was selected.
        await form.stepLink(1).click();
        await form.selectRoom(small.name);
        await form.toOptionsStep();
        expect(await form.chosenRoomNames()).toEqual([small.name]);
        await expect(
            form.attendeeChips,
            'the attendee must still be on the meeting after the room changed',
        ).toHaveCount(1);
        await expect(
            form.capacityWarning,
            `${small.name} holds ${small.capacity}, so the same meeting must now be ` +
                'warned about',
        ).toBeVisible({ timeout: 20_000 });

        // And it is only a warning: the booking still goes through. That is the
        // shipped behaviour, and a user who ignores the warning must not end up
        // with a flow that silently refuses to submit.
        let booking_id: number | undefined;
        try {
            await form.confirm.click();
            await expect(
                form.successContinue,
                'the default capacity check is advisory — the booking must still be ' +
                    'accepted after the warning',
            ).toBeVisible({ timeout: 30_000 });
            const live = (await listBookings(
                staffApi,
                'room',
                window_from(),
                window_to(),
            )) as RoomBooking[];
            const made = live.find(
                (b) => `${b.extension_data?.title ?? ''}` === title && !b.deleted,
            );
            expect(
                made,
                'a booking should exist for the over-capacity meeting that was warned ' +
                    'about and confirmed anyway',
            ).toBeTruthy();
            expect(made?.asset_id, 'and it holds the small room').toBe(small.id);
            booking_id = made?.id;
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseRoom(staffApi, small.id, window_from(), window_to());
        }
    });
});
