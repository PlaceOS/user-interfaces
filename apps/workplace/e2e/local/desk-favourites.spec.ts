/**
 * DESK-16 — saving a favourite desk and filtering the desk list to favourites.
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
import {
    readUserSettings,
    setFavouriteDesks,
} from '../../../../e2e/support/desk/desk.api';
import { useSettings } from '../../../../e2e/support/desk/desk.settings';
import { DeskFlow } from '../../../../e2e/support/desk/desk-flow.page';

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
            const form = new DeskFlow(staffPage);
            const openList = async () => {
                await form.open();
                await form.pickDate(slot.date_ms);
                await form.setChecked(form.requireLocker, false);
                await form.setAllDay(false);
                await form.setStartTime('08:00');
                await form.setDuration(60);
            };
            // The list loads again after each change to a filter, and it has
            // pages, so both checks read the names on all pages and converge.
            const expectBoth = async () => {
                await expect(
                    form.favouritesOnly,
                    'favourites-only filtering must be off',
                ).not.toBeChecked();
                await expect(async () => {
                    const names = await form.deskNames();
                    expect(names, 'the worker desk must be offered').toContain(desk.name);
                    expect(names, 'the non-favourite control must be offered').toContain(
                        control.name,
                    );
                }).toPass({ timeout: 30_000 });
            };
            const expectFiltered = async () => {
                await expect(
                    form.favouritesOnly,
                    'favourites-only filtering must be on',
                ).toBeChecked();
                await expect(async () => {
                    const names = await form.deskNames();
                    expect(names, 'filtering must exclude the non-favourite').not.toContain(
                        control.name,
                    );
                    // Check the retained row too, so an empty list cannot pass.
                    expect(names, 'filtering must retain the favourite').toContain(desk.name);
                }).toPass({ timeout: 30_000 });
            };
            await openList();
            await expectBoth();

            // The local stack can list the same desk id on two levels. A
            // favourite is saved by id, so the first row with the name will
            // do, and the saved id is asserted below.
            const row = await form.findDesk(desk.name);
            await form.favouriteToggle(row).click();

            await expect(async () => {
                const settings = await readUserSettings(staffApi);
                expect(
                    settings.favourite_desks ?? [],
                    `${desk.name} (${desk.id}) should be saved as a favourite desk`,
                ).toContain(desk.id);
            }).toPass({ timeout: 30_000 });

            await form.setChecked(form.favouritesOnly, true);
            await expectFiltered();
            await form.setChecked(form.favouritesOnly, false);
            await expectBoth();

            // And it is remembered: a fresh page load reads the saved setting
            // back, which is the whole point of a favourite.
            await staffPage.reload();
            await openList();
            await expectBoth();
            await form.setChecked(form.favouritesOnly, true);
            await expectFiltered();
        } finally {
            // Not optional: this is a saved user setting, not a booking.
            await setFavouriteDesks(staffApi, []);
        }
    });
});
