/**
 * PARK-12 — marking a parking space as a favourite.
 *
 * Favourites are a USER setting, written to the signed-in user's `settings`
 * metadata as `favourite_parking_spaces` and read back on every later visit. The room
 * and desk equivalents are both green; parking has the same feature, and the
 * same failure mode: a star that lights up and is forgotten on reload looks
 * perfect in a screenshot and is useless to the person circling the car park
 * every morning.
 *
 * Asserted on the BACKEND, and polled, because the write is debounced (~2.4s in
 * `SettingsService.saveUserSetting`) and sends the whole settings blob as one
 * `PUT /metadata/{user_id}`.
 *
 * Cleared either side, through a read-modify-write: this blob is shared with the
 * visitor specs' invitee list and the other areas' favourites, and a careless
 * write would wipe them.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { spaceForWorker } from '../../../../e2e/support/parking/parking.seed';
import {
    FAVOURITE_PARKING_KEY,
    readUserSettings,
    setFavouriteParking,
} from '../../../../e2e/support/parking/parking.api';
import {
    PARKING_BASE_SETTINGS,
    useSettings,
} from '../../../../e2e/support/parking/parking.settings';
import { ParkingForm } from '../../../../e2e/support/parking/parking-form.page';

test.describe('favourite parking spaces', () => {
    test('a space marked as a favourite is saved against the user', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const space = await spaceForWorker(testInfo.parallelIndex);

        // Start from none: a favourite left by an earlier run would let the
        // assertion pass without this test having done anything.
        await setFavouriteParking(staffApi, []);
        await useSettings(staffPage, PARKING_BASE_SETTINGS);

        try {
            const form = new ParkingForm(staffPage);
            await form.open();
            await form.addSpaceButton.click({ timeout: 10_000 });

            const row = this_row(staffPage, space.name);
            // `fav`, a bare attribute — not `favourite`, and not a name. Found by
            // asking the failure message to list the row's buttons, which is
            // faster than reading the template for every picker in this app.
            const star = row.locator('button[fav]').first();
            const found = await star
                .waitFor({ state: 'visible', timeout: 20_000 })
                .then(() => true)
                .catch(() => false);
            if (!found) {
                const offered = await staffPage.locator('li[space]').allInnerTexts();
                const buttons = await row.locator('button').evaluateAll((els) =>
                    els.map((el) =>
                        [...el.attributes].map((a) => a.name).join(','),
                    ),
                );
                throw new Error(
                    `no favourite control on the row for ${space.name}. The picker ` +
                        `offers ${offered.length} space(s), and that row's buttons ` +
                        `carry: ${JSON.stringify(buttons)}`,
                );
            }
            await star.click();

            await expect(async () => {
                const settings = await readUserSettings(staffApi);
                expect(
                    settings[FAVOURITE_PARKING_KEY] ?? [],
                    `${space.name} (${space.id}) should be saved as a favourite space ` +
                        `under "${FAVOURITE_PARKING_KEY}". Note the codebase also has a ` +
                        `dead \`favourite_parking\` constant that nothing reads`,
                ).toContain(space.id);
            }).toPass({ timeout: 30_000 });
        } finally {
            // Not optional: this is a saved user setting, not a booking.
            await setFavouriteParking(staffApi, []);
        }
    });
});

/** The picker row for a space, by name. */
function this_row(page: import('@playwright/test').Page, name: string) {
    return page.locator('li[space]').filter({ hasText: name }).first();
}
