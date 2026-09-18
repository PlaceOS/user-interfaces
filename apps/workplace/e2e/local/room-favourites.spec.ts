/**
 * ROOM-19 — marking a room as a favourite.
 *
 * The only room feature here that outlives the booking flow: a favourite is a
 * USER setting, written to the signed-in user's `settings` metadata and read
 * back on every later visit. That is what makes it worth a spec — a star that
 * lights up and is forgotten on reload looks identical on screen and is useless.
 *
 * So this asserts twice, on two different things:
 *
 *  1. the BACKEND holds the room id in `favourite_spaces` afterwards. The write
 *     is debounced (~2.4 seconds in `SettingsService.saveUserSetting`) and sends
 *     the whole settings blob as one `PUT /metadata/{user_id}`, so a spec that
 *     read it immediately would see the old value and call it a bug.
 *  2. the "Favorites Only" filter then narrows the picker to it. The list is
 *     asserted to hold more than one room BEFORE the filter goes on, so
 *     "narrowed to one" cannot pass in a stack that only has one room to offer.
 *
 * ## Cleanup matters more here than anywhere else in these specs
 *
 * Every other room spec cleans up bookings. This one changes a USER's saved
 * settings, which persist across runs and are shared with the visitor specs
 * (`visitor-invitees` lives in the same blob). It is cleared either side, and
 * `setFavouriteSpaces` deliberately reads-modifies-writes so it cannot wipe the
 * visitor data as collateral.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import {
    readUserSettings,
    setFavouriteSpaces,
} from '../../../../e2e/support/room/room.api';
import { ROOM_BASE_SETTINGS, useSettings } from '../../../../e2e/support/room/room.settings';
import { MeetingForm } from '../../../../e2e/support/room/meeting-form.page';

test.describe('favourite rooms', () => {
    test('a room marked as a favourite is saved and can be filtered to', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const room = await roomForWorker(testInfo.parallelIndex);

        // Start from none. A favourite left behind by an earlier run would make
        // step 2 pass without step 1 having done anything.
        await setFavouriteSpaces(staffApi, []);
        await useSettings(staffPage, ROOM_BASE_SETTINGS);

        try {
            const form = new MeetingForm(staffPage);
            await form.open();
            await form.addSpaceButton.click();
            const rows = staffPage.locator('button[name="select-space"]');
            await expect(rows.first(), 'the room picker did not open').toBeVisible({
                timeout: 20_000,
            });
            const offered_before = await rows.count();
            expect(
                offered_before,
                'the picker must offer more than one room, or filtering down to one ' +
                    'proves nothing',
            ).toBeGreaterThan(1);

            const row = staffPage.locator('li[space]').filter({ hasText: room.name });
            await expect(
                row,
                `no row for ${room.name} in the picker — it offers ${offered_before}`,
            ).toHaveCount(1, { timeout: 20_000 });
            await row.locator('button[name="toggle-space-favourite"]').first().click();

            // The write is debounced, so poll rather than read once.
            await expect(async () => {
                const settings = await readUserSettings(staffApi);
                expect(
                    settings.favourite_spaces ?? [],
                    `${room.name} (${room.id}) should be saved as a favourite room`,
                ).toContain(room.id);
            }).toPass({ timeout: 30_000 });

            // "Favorites Only" is a toggle in the picker's filter panel. Its
            // label is translated, so it is reached through the `favs` section
            // attribute instead.
            await staffPage.locator('section[favs] settings-toggle button').first().click();
            await expect(
                rows,
                'with Favorites Only on, the picker should offer just the favourite',
            ).toHaveCount(1, { timeout: 20_000 });
            await expect(
                staffPage.locator('li[space]').filter({ hasText: room.name }),
                'and the one it offers should be the room that was favourited',
            ).toHaveCount(1, { timeout: 20_000 });
        } finally {
            // Not optional. This is a saved user setting, not a booking.
            await setFavouriteSpaces(staffApi, []);
        }
    });
});
