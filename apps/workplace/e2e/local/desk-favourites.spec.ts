/**
 * DESK-16 — marking a desk as a favourite.
 *
 * Favourites are a USER setting, written to the signed-in user's `settings`
 * metadata as `favourite_desks` and read back on every later visit. The room
 * equivalent (ROOM-19) is green; desks have the same feature and no coverage, and
 * the failure mode is the one that makes a feature pointless rather than broken:
 * a star that lights up and is forgotten on reload looks perfect in a screenshot.
 *
 * Asserted on the BACKEND, not on the star, and polled — the write is debounced
 * (~2.4 seconds in `SettingsService.saveUserSetting`) and sends the whole
 * settings blob as one `PUT /metadata/{user_id}`.
 *
 * ## Cleanup matters more here than in a booking spec
 *
 * This changes a user's saved settings, which persist across runs and share one
 * blob with the visitor specs' invitee list and the room specs' favourite rooms.
 * It is cleared either side, through a read-modify-write that cannot wipe the
 * neighbours.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deskFor } from '../../../../e2e/support/env';
import {
    readUserSettings,
    setFavouriteDesks,
} from '../../../../e2e/support/desk/desk.api';
import { useSettings } from '../../../../e2e/support/desk/desk.settings';
import { DeskForm } from '../../../../e2e/support/desk/desk-form.page';

test.describe('favourite desks', () => {
    test('a desk marked as a favourite is saved against the user', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);

        // Start from none. A favourite left behind by an earlier run would let
        // the assertion pass without this test having done anything.
        await setFavouriteDesks(staffApi, []);
        await useSettings(staffPage, {});

        try {
            const form = new DeskForm(staffPage);
            await form.open();
            await form.setChecked(form.requireLocker, false);
            await form.addDeskButton.click();

            const row = staffPage
                .locator('li[desk], [desk]')
                .filter({ hasText: desk.name })
                .first();
            const star = row.locator('button[name="toggle-desk-favourite"]').first();
            const found = await star
                .waitFor({ state: 'visible', timeout: 20_000 })
                .then(() => true)
                .catch(() => false);
            if (!found) {
                const offered = await staffPage
                    .locator('button[name="select-desk"]')
                    .allInnerTexts();
                throw new Error(
                    `no favourite control on the row for ${desk.name}. The picker offers ` +
                        `${offered.length} desk(s): ` +
                        `${JSON.stringify(offered.map((t) => t.split('\n')[0].trim()))}.`,
                );
            }
            await star.click();

            await expect(async () => {
                const settings = await readUserSettings(staffApi);
                expect(
                    settings.favourite_desks ?? [],
                    `${desk.name} (${desk.id}) should be saved as a favourite desk`,
                ).toContain(desk.id);
            }).toPass({ timeout: 30_000 });

            // And it is remembered: a fresh page load reads the saved setting
            // back, which is the whole point of a favourite.
            await staffPage.reload();
            await form.open();
            await form.setChecked(form.requireLocker, false);
            await form.addDeskButton.click();
            await expect(
                staffPage
                    .locator('[desk]')
                    .filter({ hasText: desk.name })
                    .first()
                    .locator('button[name="toggle-desk-favourite"] icon'),
                'the favourite should still be marked after a reload',
            ).toBeVisible({ timeout: 20_000 });
            const after = await readUserSettings(staffApi);
            expect(
                after.favourite_desks ?? [],
                'and still saved against the user',
            ).toContain(desk.id);
        } finally {
            // Not optional: this is a saved user setting, not a booking.
            await setFavouriteDesks(staffApi, []);
        }
    });
});
