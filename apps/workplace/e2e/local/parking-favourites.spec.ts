/**
 * PARK-12 — saving a favourite parking space and filtering the picker to favourites.
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
import { altSpace, spaceForWorker } from '../../../../e2e/support/parking/parking.seed';
import { slotOn } from '../../../../e2e/support/parking/parking.env';
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
    test('a space marked as a favourite is saved and drives favourites-only filtering', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const space = await spaceForWorker(testInfo.parallelIndex);
        const control = await altSpace();
        // Both fixtures share the seeded parking level. This read-only window
        // ends before the other parking specs' slots; neither space is booked here.
        const slot = slotOn(1, 8);

        // Start from none: a favourite left by an earlier run would let the
        // assertion pass without this test having done anything.
        await setFavouriteParking(staffApi, []);
        try {
            await useSettings(staffPage, PARKING_BASE_SETTINGS);
            const form = new ParkingForm(staffPage);
            const openPicker = async () => {
                await form.open();
                await form.pickDate(slot.date_ms);
                await form.setChecked(form.allDay, false);
                await form.setStartTime('08:00');
                await form.setDuration(60);
                await form.addSpaceButton.click({ timeout: 10_000 });
            };

            const row = this_row(staffPage, space.name);
            const other = this_row(staffPage, control.name);
            const filter = staffPage.locator(
                'parking-space-filters section[favs] settings-toggle button',
            );
            const expectBoth = async () => {
                await expect(row, 'the worker space must be offered').toBeVisible();
                await expect(other, 'the non-favourite control must be offered').toBeVisible();
            };
            const expectFiltered = async () => {
                await expect(other, 'filtering must exclude the non-favourite').toHaveCount(0);
                // Check the retained row last so an empty/loading list cannot pass.
                await expect(row, 'filtering must retain the favourite').toBeVisible();
            };
            await openPicker();
            await expectBoth();

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

            await filter.click();
            await expectFiltered();
            await filter.click();
            await expectBoth();

            // Reopening after reload must use the persisted favourite, without
            // starring it again in this browser session.
            await staffPage.reload();
            await openPicker();
            await expectBoth();
            await filter.click();
            await expectFiltered();
        } finally {
            // Not optional: this is a saved user setting, not a booking.
            await setFavouriteParking(staffApi, []);
        }
    });
});

/** The picker row for a space, by name. */
function this_row(page: import('@playwright/test').Page, name: string) {
    return page.locator('parking-space-list li[space]').filter({
        has: page.getByText(name, { exact: true }),
    });
}
