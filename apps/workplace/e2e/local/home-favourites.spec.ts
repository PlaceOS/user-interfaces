/**
 * HOME-13 / HOME-14 — the Favourites tab in the home page sidebar.
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
 * `landing-favourites.component.ts` reads `FAV_DESK_KEY` from `@placeos/bookings`
 * — `favourite_desks`, inside the user's `settings` blob. The same key the desk
 * picker writes, which is why DESK-16 and this test agree.
 *
 * Cleared either side through a read-modify-write: that blob is shared with the
 * visitor specs' invitee list and every other area's favourites.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deskFor } from '../../../../e2e/support/env';
import {
    FAVOURITE_DESKS_KEY,
    readUserSettings,
    setUserSetting,
} from '../../../../e2e/support/home/home.api';
import { LandingPage } from '../../../../e2e/support/home/landing.page';

test.describe('home page — favourites', () => {
    test('a favourite desk is listed on the Favourites tab', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);

        await setUserSetting(staffApi, FAVOURITE_DESKS_KEY, [desk.id]);

        try {
            const home = new LandingPage(staffPage);
            await home.open();
            await home.showTab('fav');

            await expect(
                home.favourites,
                'the Favourites panel should be on the page',
            ).toBeVisible({ timeout: 30_000 });
            await expect(
                home.favourites,
                `${desk.name} was saved as a favourite desk, so the panel should list ` +
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
            const home = new LandingPage(staffPage);
            await home.open();
            await home.showTab('fav');
            await expect(
                home.favourites,
                'precondition: the favourite is listed before it is removed',
            ).toContainText(desk.name, { timeout: 30_000 });

            // The remove control is behind the row's overflow menu.
            await home.favourites
                .locator('button[name="favourite-more"]')
                .first()
                .click({ timeout: 10_000 });
            const remove = staffPage
                .locator('.cdk-overlay-container button[name="landing-remove-favourite"]')
                .first();
            await expect(
                remove,
                'the favourite menu has no remove action',
            ).toBeVisible({ timeout: 10_000 });
            await remove.click();

            // The backend is the assertion: the row leaving the panel proves
            // nothing, and the write is debounced.
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
});
