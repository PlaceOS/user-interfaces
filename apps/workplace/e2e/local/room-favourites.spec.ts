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
 *  1. the BACKEND holds the room id in `favourite_rooms` afterwards. The write
 *     is debounced (~2.4 seconds in `SettingsService.saveUserSetting`) and sends
 *     the whole settings blob as one `PUT /metadata/{user_id}`, so a spec that
 *     read it immediately would see the old value and call it a bug.
 *  2. the "Favorites Only" filter then narrows the room list to it. The list
 *     is asserted to hold more than one room BEFORE the filter goes on, so
 *     "narrowed to one" cannot pass in a stack that only has one room to offer.
 *
 * The list and its filters are the second step of the meeting flow, and that
 * step needs a title. No booking is made.
 *
 * ## Cleanup matters more here than anywhere else in these specs
 *
 * Every other room spec cleans up bookings. This one changes a USER's saved
 * settings, which persist across runs and are shared with the visitor specs
 * (`visitor-invitees` lives in the same blob). It is cleared either side, and
 * `setFavouriteSpaces` deliberately reads-modifies-writes so it cannot wipe the
 * visitor data as collateral.
 */
import { uniqueTitle } from '../../../../e2e/support/api';
import { test, expect } from '../../../../e2e/support/fixtures';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import {
    FAVOURITE_ROOMS_KEY,
    readUserSettings,
    setFavouriteSpaces,
} from '../../../../e2e/support/room/room.api';
import { ROOM_BASE_SETTINGS, useSettings } from '../../../../e2e/support/room/room.settings';
import { MeetingFlow } from '../../../../e2e/support/room/meeting-flow.page';

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
            const form = new MeetingFlow(staffPage);
            await form.open();
            await form.title.fill(uniqueTitle('E2E Room Favourite'));
            await form.toRoomStep();
            const offered_before = await form.offeredRoomNames();
            expect(
                offered_before.length,
                'the list must offer more than one room, or filtering down to one ' +
                    'proves nothing',
            ).toBeGreaterThan(1);

            // The favourites were set to none above, so this click turns the
            // favourite ON.
            await form.showRoom(room.name);
            await form.favouriteButton(room.name).click();

            // The write is debounced, so poll rather than read once.
            await expect(async () => {
                const settings = await readUserSettings(staffApi);
                expect(
                    settings[FAVOURITE_ROOMS_KEY] ?? [],
                    `${room.name} (${room.id}) should be saved as a favourite room`,
                ).toContain(room.id);
            }).toPass({ timeout: 30_000 });

            // "Favorites Only" is a toggle in the filter column. Polled: the
            // list shows its old answer until the new query lands.
            await form.setToggle(form.favouritesOnly, true);
            await expect(async () => {
                expect(
                    await form.offeredRoomNames(),
                    'with Favorites Only on, the list should offer just the room ' +
                        'that was favourited',
                ).toEqual([room.name]);
            }).toPass({ timeout: 30_000 });
        } finally {
            // Not optional. This is a saved user setting, not a booking.
            await setFavouriteSpaces(staffApi, []);
        }
    });
});
