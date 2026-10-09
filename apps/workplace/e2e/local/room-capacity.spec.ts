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
 *   unset ...... a warning is drawn next to the room list and the booking goes
 *                through anyway. This is the shipped default, so it is the
 *                behaviour real users get.
 *   true ....... `viewConfirm` (meeting-flow-form.component.ts) returns early
 *                with a toast. The confirm screen never opens and nothing is
 *                sent.
 *
 * Test 1 takes the strict path, because "the form refused and the backend never
 * heard about it" is the assertion with teeth. Test 2 takes the default path,
 * because a warning nobody renders is the failure users would actually hit.
 *
 * ## Both tests carry their own control
 *
 * A form that refuses everything, or renders a warning always, would pass a
 * one-sided version of either test. So test 1 removes the attendee and shows
 * the same form then reaches the confirm screen, and test 2 starts from a room
 * that IS big enough and shows the warning appear only when the room changes.
 * Nothing but the capacity differs across either pair.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deleteBooking, listBookings, uniqueTitle } from '../../../../e2e/support/api';
import { WORKERS, staffEmail } from '../../../../e2e/support/env';
import { type RoomBooking, releaseRoom } from '../../../../e2e/support/room/room.api';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import {
    ROOM_BASE_SETTINGS,
    STRICT_CAPACITY,
    useSettings,
} from '../../../../e2e/support/room/room.settings';
import { MeetingForm } from '../../../../e2e/support/room/meeting-form.page';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 7 * DAY;

/**
 * The capacity warning, matched on its CLASSES.
 *
 * The one selector in the room specs that is neither a `name` attribute nor
 * test data. The element has no attribute to hold on to and its text is
 * translated (`CALENDAR_EVENT.CAPACITY_WARNING`), so the styling is all there
 * is. Scoped to the form so a toast or another warning elsewhere on the page
 * cannot satisfy it.
 */
const CAPACITY_WARNING = 'meeting-flow-form div.bg-warning.text-warning-content';

test.describe('room capacity', () => {
    test('a meeting bigger than the room is refused before anything is sent', async ({
        staffPage,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers for a second address');

        const small = await roomForWorker(mine, 'small');
        const title = uniqueTitle('E2E Room Capacity');
        const guest = staffEmail(theirs);

        await useSettings(staffPage, { ...ROOM_BASE_SETTINGS, ...STRICT_CAPACITY });

        // Watch every booking write, not just the successful ones. The point of
        // this test is that the backend is never asked at all, and a request
        // that was sent and refused would look identical on screen.
        const writes: string[] = [];
        staffPage.on('request', (r) => {
            if (!r.url().includes('/api/staff/v1/bookings')) return;
            if (r.method() === 'GET') return;
            writes.push(`${r.method()} ${r.url()}`);
        });

        const form = new MeetingForm(staffPage);
        await form.open();
        // Without this the small room is not even offered — the picker starts at
        // "min. 4 people". See `setRoomSize`.
        await form.setRoomSize(1);
        await expect(async () => {
            await form.title.fill(title);
            if ((await form.chosenSpaces.count()) === 0) await form.chooseRoom(small.name);
            expect(await form.title.inputValue()).toBe(title);
            expect(await form.chosenSpaces.count()).toBe(1);
        }).toPass({ timeout: 45_000 });
        await form.addAttendee(guest);
        await staffPage.waitForTimeout(2_000);

        // Press Confirm on the FORM. In strict mode this should not even get as
        // far as the confirm screen.
        await form.confirmViewButton.click();
        await expect(
            form.confirmButton,
            'a meeting with more people than the room holds must not reach the ' +
                'confirm screen when `app.events.strict_capacity_check` is set',
        ).toBeHidden({ timeout: 10_000 });
        expect(
            writes,
            'nothing at all should have been written to the backend',
        ).toEqual([]);

        // CONTROL: the same form, one person lighter, gets through. Without
        // this, a form that was simply broken would pass the assertions above.
        await form.removeAttendee(guest);
        await staffPage.waitForTimeout(2_000);
        await form.confirmViewButton.click();
        await expect(
            form.confirmButton,
            'with the meeting back inside the room capacity the confirm screen must ' +
                'open — otherwise the refusal above was not about capacity at all',
        ).toBeVisible({ timeout: 20_000 });
        // Deliberately NOT confirmed: the control is that the screen opens, and
        // sending it would leave a booking to clean up for no extra coverage.
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
        const title = uniqueTitle('E2E Room Capacity Warn');
        const guest = staffEmail(theirs);

        // The default: strict checking OFF, which is what ships.
        //
        // The day is left at whatever the form offers, unlike the other room
        // specs: this test asserts on the FORM, and the only booking it makes is
        // in the small room, which nothing else in the suite ever touches — so
        // there is no slot to collide over. It is swept either side regardless.
        await useSettings(staffPage, ROOM_BASE_SETTINGS);
        await releaseRoom(staffApi, small.id, window_from(), window_to());

        const form = new MeetingForm(staffPage);
        await form.open();
        // Both rooms have to be on offer for the swap below, and the small one is
        // only offered at the smallest size. See `setRoomSize`.
        await form.setRoomSize(1);
        await expect(async () => {
            await form.title.fill(title);
            if ((await form.chosenSpaces.count()) === 0) await form.chooseRoom(room.name);
            expect(await form.title.inputValue()).toBe(title);
            expect(await form.chosenSpaces.count()).toBe(1);
        }).toPass({ timeout: 45_000 });
        await form.addAttendee(guest);
        await staffPage.waitForTimeout(2_000);

        // CONTROL FIRST, with a room that fits: no warning. This is what makes
        // the assertion below about capacity rather than about the element
        // simply always being there.
        await expect(
            staffPage.locator(CAPACITY_WARNING),
            `${room.name} holds ${room.capacity}, so a two-person meeting must not ` +
                'be warned about',
        ).toBeHidden({ timeout: 10_000 });

        // Only the room changes.
        await form.removeRoom();
        await form.chooseRoom(small.name);
        await expect(
            staffPage.locator(CAPACITY_WARNING),
            `${small.name} holds ${small.capacity}, so the same meeting must now be ` +
                'warned about',
        ).toBeVisible({ timeout: 20_000 });

        // And it is only a warning: the booking still goes through. That is the
        // shipped behaviour, and a user who ignores the warning must not end up
        // with a form that silently refuses to submit.
        let booking_id: number | undefined;
        try {
            await form.confirmAndSend();
            await expect(
                form.successPanel,
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
            booking_id = made?.id;
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseRoom(staffApi, small.id, window_from(), window_to());
        }
    });
});
