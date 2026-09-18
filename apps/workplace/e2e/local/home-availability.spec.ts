/**
 * HOME-10 — the availability panel, and booking a room from it.
 *
 * The panel lists the building's bookable rooms with their live status, and its
 * button is a second route into booking a room — one that skips the meeting form
 * entirely: `explore-spaces.service.ts::bookSpace` loads the room into the event
 * form and opens a booking modal.
 *
 * What is asserted is that the panel offers the seeded rooms and that the button
 * opens that modal carrying the room that was clicked. Deliberately NOT
 * asserted: completing the booking. The modal's confirm goes through the same
 * path as the meeting form, which is covered properly by the room specs, and in
 * the default mode it reaches the calendar and 500s on this stack.
 *
 * ## `fixme` — blocked by the stack, not by a bug
 *
 * The panel does not list every bookable room. It lists the ones a LIVE STATUS
 * BINDING reports as free (`landing-state.service.ts`):
 *
 *   free_space_list = space_list().filter((_, i) => space_statuses()[i] === 'free')
 *
 * and those statuses come from websocket bindings to a driver module on each
 * room's System. This stack has one driver (`spec_helper`) and one module
 * (`PrivateHelper`), so no room ever reports a status, `free_space_list` is
 * always empty, and the panel renders with nothing in it. Measured: the panel
 * was present and offered zero rooms while four bookable rooms existed on the
 * building.
 *
 * Same blocker as ROOM-23 (room check-in), and the same fix: a real driver
 * running in the e2e stack. The assertions below are right; nothing about them
 * needs changing when that happens.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import { LandingPage } from '../../../../e2e/support/home/landing.page';

test.describe('home page — room availability', () => {
    test.fixme('the panel lists a seeded room, and its button opens the booking modal', async ({
        staffPage,
    }, testInfo) => {
        // The rooms the room specs seed are the only ones this org has.
        const room = await roomForWorker(testInfo.parallelIndex);

        const home = new LandingPage(staffPage);
        await home.open();

        const button = home.bookRoom(room.name);
        const listed = await button
            .waitFor({ state: 'visible', timeout: 30_000 })
            .then(() => true)
            .catch(() => false);
        if (!listed) {
            // Say what IS offered: "not listed" cannot tell apart a room that
            // was never seeded, one on the wrong zone, and a panel that is
            // hidden for this deployment.
            const offered = await home.offeredRooms();
            const panel = await home.availability.count();
            throw new Error(
                `${room.name} is not on the availability panel. The panel ` +
                    `${panel ? 'is present and offers' : 'is not on the page at all;'} ` +
                    `${offered.length} room(s): ${JSON.stringify(offered)}. Rooms come ` +
                    `from the building's systems, so check room.seed.ts ran and the ` +
                    `room sits on the building zone.`,
            );
        }

        await button.click();

        // The modal is the assertion: it carries the room that was clicked, so a
        // panel that opened the wrong room's booking would fail here.
        const modal = staffPage.locator('.cdk-overlay-container mat-dialog-container');
        await expect(
            modal,
            'clicking Book should open the room booking modal',
        ).toBeVisible({ timeout: 20_000 });
        await expect(
            modal,
            `the modal should be for ${room.name} — the room that was clicked`,
        ).toContainText(room.name, { timeout: 20_000 });
    });
});
