/**
 * HOME-10 — the "available now" panel lists free rooms by level.
 *
 * ## What changed with the new home page
 *
 * The page before this one listed each free room with a button that opened a
 * booking modal. `landing-available-now` lists LEVELS, each with the number of
 * its free resources, and a level links to the map. There is no room row and
 * no booking modal, so that half of the story is gone from the page.
 *
 * ## Where the count of the Rooms tab comes from
 *
 * It is not the number of bookable rooms. It is the number of rooms that a
 * LIVE STATUS BINDING reports as free (`landing-state.service.ts`):
 *
 *   free_space_list = filtered spaces whose status is 'free'
 *
 * and a status comes from a websocket binding to the `Bookings` module on each
 * room's System. The stack runs core, and every room `room.seed.ts` creates
 * gets a `Place::Bookings` module polling a demo calendar in the same system
 * (`ensureRoomModules`), so a seeded room reports `free` as long as nothing is
 * put in that calendar. A level on the Rooms tab is therefore the whole chain
 * working: driver process, redis, the rest-api websocket, the app. Room
 * check-in (ROOM-23) binds the same module.
 *
 * The count is shared by all workers, so the test asserts that the tab lists
 * a level, not an exact number.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { LandingNewPage } from '../../../../e2e/support/home/landing-new.page';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';

test.describe('home page — room availability', () => {
    test('the Rooms tab lists a level that has a free seeded room', async ({
        staffPage,
    }, testInfo) => {
        // Seeds the rooms and their `Bookings` modules if they are not there.
        await roomForWorker(testInfo.parallelIndex);

        const home = new LandingNewPage(staffPage);
        await home.open();
        await home.availableTab('rooms').click();

        // The panel lists a level only when it has a free room, so a row is
        // the proof that a room reported `free`.
        // Each row has the icon of its tab, which keeps a row of the Desks
        // tab from passing while the panel changes tab.
        const level = home.availableLevels
            .filter({ has: staffPage.locator('icon', { hasText: 'meeting_room' }) })
            .first();
        await expect(
            level,
            'the Rooms tab lists no level. A level is listed when a room on it reports ' +
                '`free` through its `Bookings` module, so check the drivers loaded ' +
                '(the seed logs a warning when they did not)',
        ).toBeVisible({ timeout: 30_000 });
        await expect(
            level.locator('[count]'),
            'the level should show how many of its rooms are free',
        ).toContainText(/[1-9]/);
    });
});
