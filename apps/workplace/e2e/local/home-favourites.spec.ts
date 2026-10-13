/**
 * HOME-13 / HOME-14 — the Favourites section of the home page.
 *
 * Favourites are set in the pickers (covered for rooms, desks and parking in
 * their own specs) and READ here. That split is the point: the home page is
 * where a favourite is supposed to pay off, so a favourite that saves correctly
 * and never appears on the home page is a feature nobody benefits from — and
 * nothing would notice, because the picker specs stop at the write.
 *
 * Test 1 seeds a favourite desk through the API and asserts the panel lists it.
 * Test 2 removes it from the home page and asserts the saved setting is cleared,
 * which is the other half of the same contract.
 *
 * ## The key
 *
 * `landing-favourites-new.component.ts` reads `SETTING_KEYS.FAVORITE_DESKS` —
 * `favourite_desks`, inside the user's `settings` blob. The same key the desk
 * picker writes, which is why DESK-16 and this test agree.
 *
 * Cleared either side through a read-modify-write: that blob is shared with the
 * visitor specs' invitee list and every other area's favourites.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deskFor } from '../../../../e2e/support/env';
import { uniqueTitle } from '../../../../e2e/support/api';
import {
    FAVOURITE_DESKS_KEY,
    readUserSettings,
    setUserSetting,
} from '../../../../e2e/support/home/home.api';
import { LandingNewPage } from '../../../../e2e/support/home/landing-new.page';
import { MeetingFlow } from '../../../../e2e/support/room/meeting-flow.page';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import {
    FAVOURITE_ROOMS_KEY,
    readUserSettings as readRoomUserSettings,
    setFavouriteSpaces,
} from '../../../../e2e/support/room/room.api';
import { ROOM_BASE_SETTINGS, useSettings } from '../../../../e2e/support/room/room.settings';

test.describe('home page — favourites', () => {
    test('a favourite desk is listed in the Favourites section', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        await setUserSetting(staffApi, FAVOURITE_DESKS_KEY, [desk.id]);

        try {
            const home = new LandingNewPage(staffPage);
            await home.open();
            await expect(
                home.favourites,
                `${desk.name} was saved as a favourite desk, so the section should list ` +
                    `it — a favourite that never shows up here benefits nobody`,
            ).toContainText(desk.name, { timeout: 30_000 });
        } finally {
            await setUserSetting(staffApi, FAVOURITE_DESKS_KEY, []);
        }
    });

    test('removing a favourite from the home page clears the saved setting', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        await setUserSetting(staffApi, FAVOURITE_DESKS_KEY, [desk.id]);

        try {
            const home = new LandingNewPage(staffPage);
            await home.open();
            await expect(
                home.favourite(desk.name),
                'precondition: the favourite is listed before it is removed',
            ).toBeVisible({ timeout: 30_000 });

            await home.removeFavourite(desk.name).click({ timeout: 10_000 });

            await expect(home.favourite(desk.name)).toHaveCount(0);
            // The save to the user settings is delayed, so poll the backend.
            await expect(async () => {
                const settings = await readUserSettings(staffApi);
                expect(
                    settings[FAVOURITE_DESKS_KEY] ?? [],
                    `${desk.id} should be gone from "${FAVOURITE_DESKS_KEY}"`,
                ).not.toContain(desk.id);
            }).toPass({ timeout: 30_000 });
        } finally {
            await setUserSetting(staffApi, FAVOURITE_DESKS_KEY, []);
        }
    });

    test('a favourite room opens its meeting form from Home', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const room = await roomForWorker(testInfo.parallelIndex);
        const previous_settings = await readRoomUserSettings(staffApi);
        const saved: unknown = previous_settings[FAVOURITE_ROOMS_KEY];
        const previous_favourites: string[] = Array.isArray(saved) ? saved : [];
        // The room list reads free rooms from the bookings in this mode. The
        // default mode asks the calendar, which this stack does not have.
        await useSettings(staffPage, ROOM_BASE_SETTINGS);

        try {
            await setFavouriteSpaces(staffApi, [
                ...new Set([...previous_favourites, room.id]),
            ]);
            await expect(async () => {
                const settings = await readRoomUserSettings(staffApi);
                expect(
                    settings[FAVOURITE_ROOMS_KEY] ?? [],
                    `${room.id} should be saved in ${FAVOURITE_ROOMS_KEY} before Home loads`,
                ).toContain(room.id);
            }).toPass({ timeout: 15_000 });

            const home = new LandingNewPage(staffPage);
            const flow = new MeetingFlow(staffPage);
            await home.open();
            await expect(
                home.favourite(room.name),
                `${room.name} was saved as a favourite room, so Home should list it`,
            ).toBeVisible({ timeout: 30_000 });
            await home.bookFavourite(room.name).click();
            await expect(
                staffPage,
                'booking a favourite room should open the room meeting flow',
            ).toHaveURL(/#\/book\/meeting(\/form)?/, { timeout: 30_000 });

            // The room is put on the form 300 ms after the route change. The
            // last step names the room that the form holds, and the room step
            // lets nobody through without a room. A title is the requirement
            // of the first step.
            await flow.title.fill(uniqueTitle('E2E Home Favourite Room'));
            await flow.toRoomStep();
            await flow.toOptionsStep();
            expect(
                await flow.chosenRoomNames(),
                'the meeting flow should hold the favourite room that was clicked on Home',
            ).toEqual([room.name]);
        } finally {
            await setFavouriteSpaces(staffApi, previous_favourites);
        }
    });
});
