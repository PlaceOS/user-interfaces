/**
 * DESK-16 — saving a favourite desk and filtering the picker to favourites.
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
import { altDesk, slotOn } from '../../../../e2e/support/desk/desk.env';
import { zonesWithTag } from '../../../../e2e/support/api';
import {
    readUserSettings,
    setFavouriteDesks,
} from '../../../../e2e/support/desk/desk.api';
import { useSettings } from '../../../../e2e/support/desk/desk.settings';
import { DeskForm } from '../../../../e2e/support/desk/desk-form.page';

test.describe('favourite desks', () => {
    test('a desk marked as a favourite is saved and drives favourites-only filtering', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const control = altDesk();
        // Both fixtures are seeded on the same level. Read them at a future
        // slot outside the other desk specs' slots; neither is booked here.
        const slot = slotOn(1, 8);

        // Start from none. A favourite left behind by an earlier run would let
        // the assertion pass without this test having done anything.
        await setFavouriteDesks(staffApi, []);
        try {
            await useSettings(staffPage, {});
            const form = new DeskForm(staffPage);
            const levels = await zonesWithTag(staffApi, 'level');
            const level = levels.find((candidate) =>
                candidate.parent_id && !candidate.tags.includes('parking'),
            );
            expect(level, 'a seeded desk level must exist').toBeTruthy();
            const level_name = String(level!.display_name || level!.name);
            const openPicker = async () => {
                await form.open();
                await form.pickDate(slot.date_ms);
                await form.setChecked(form.requireLocker, false);
                await form.setChecked(form.allDay, false);
                await form.setStartTime('08:00');
                await form.setDuration(60);
                await form.addDeskButton.click();
            };
            // The local stack can contain duplicate desk metadata on parking
            // levels. Match both resources on the same non-parking level.
            const favourite = staffPage.locator('button[name="select-desk"]').filter({
                has: staffPage.getByText(desk.name, { exact: true }),
            }).filter({
                has: staffPage.getByText(level_name, { exact: true }),
            });
            const other = staffPage.locator('button[name="select-desk"]').filter({
                has: staffPage.getByText(control.name, { exact: true }),
            }).filter({
                has: staffPage.getByText(level_name, { exact: true }),
            });
            const filter = staffPage.locator(
                'desk-filters section[favs] settings-toggle button',
            );
            const active_filter = staffPage.locator(
                'button[name="remove-desk-favs-filter"]',
            );
            const expectBoth = async () => {
                await expect(active_filter, 'favourites-only filtering must be off').toBeHidden();
                await expect(favourite, 'the worker desk must be offered').toBeVisible();
                await expect(other, 'the non-favourite control must be offered').toBeVisible();
            };
            const expectFiltered = async () => {
                await expect(active_filter, 'favourites-only filtering must be on').toBeVisible();
                await expect(other, 'filtering must exclude the non-favourite').toHaveCount(0);
                // Check the retained row last so an empty/loading list cannot pass.
                await expect(favourite, 'filtering must retain the favourite').toBeVisible();
            };
            await openPicker();
            await expectBoth();

            const row = staffPage
                .locator('li[desk]')
                .filter({ has: favourite });
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

            await filter.click();
            await expectFiltered();
            await filter.click();
            await expectBoth();

            // And it is remembered: a fresh page load reads the saved setting
            // back, which is the whole point of a favourite.
            await staffPage.reload();
            await openPicker();
            await expectBoth();
            await filter.click();
            await expectFiltered();
        } finally {
            // Not optional: this is a saved user setting, not a booking.
            await setFavouriteDesks(staffApi, []);
        }
    });
});
