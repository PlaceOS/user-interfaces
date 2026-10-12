/**
 * ROOM-29 — the picker's facilities filter.
 *
 * A user looking for "a room with a projector" uses this, and it is the only
 * filter in the room picker driven by data on the ROOM rather than by the
 * meeting. If it stopped narrowing the list, the picker would look perfectly
 * healthy and quietly offer rooms without the equipment somebody needs.
 *
 * ## The feature has to exist before the filter can
 *
 * The filter section is built from whatever features the loaded rooms carry
 * (`space-filters.component.ts`), so with no room carrying anything it is not
 * rendered at all. `room.seed.ts` therefore puts one feature — `E2E Projector` —
 * on the `alt` room and nothing else, which gives filtering by it a right
 * answer: one room in, the rest out.
 *
 * Two things learned putting it there, both recorded in the seeder: a System
 * PATCH needs `version` in the QUERY STRING (in the body it is ignored and the
 * request 422s), and `features` is an array — a space-separated string is a 400
 * from the JSON parser.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { ALT_ROOM_FEATURE } from '../../../../e2e/support/room/room.env';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import { ROOM_BASE_SETTINGS, useSettings } from '../../../../e2e/support/room/room.settings';
import { MeetingForm } from '../../../../e2e/support/room/meeting-form.page';

test.describe('the room picker facilities filter', () => {
    test('filtering by a feature narrows the list to the room that has it', async ({
        staffPage,
    }, testInfo) => {
        const featured = await roomForWorker(testInfo.parallelIndex, 'alt');
        const plain = await roomForWorker(testInfo.parallelIndex);

        await useSettings(staffPage, ROOM_BASE_SETTINGS);

        const form = new MeetingForm(staffPage);
        await form.open();
        // The small rooms are only offered at the smallest size, and more rooms
        // on screen makes the "before" count below more meaningful.
        await form.setRoomSize(1);
        await form.addSpaceButton.click();
        await expect(
            staffPage.locator('button[name="select-space"]').first(),
            'the room picker did not open',
        ).toBeVisible({ timeout: 20_000 });

        const offered = async () => {
            const texts = await staffPage
                .locator('button[name="select-space"]')
                .allInnerTexts();
            return texts.map((t) => t.split('\n')[0].trim());
        };

        const before = await offered();
        expect(
            before.length,
            'the picker must offer more than one room, or narrowing to one proves ' +
                'nothing',
        ).toBeGreaterThan(1);
        expect(before, 'precondition: both rooms are offered to begin with').toContain(
            featured.name,
        );
        expect(before).toContain(plain.name);

        // The filter lives in the picker's filters panel, in a `features`
        // section, as a toggle per feature. Matched through the section
        // attribute and the feature's own name — which is test data we seeded,
        // not app copy.
        const section = staffPage.locator('section[features]');
        const present = await section
            .first()
            .waitFor({ state: 'visible', timeout: 10_000 })
            .then(() => true)
            .catch(() => false);
        if (!present) {
            throw new Error(
                `no facilities section in the picker. It is only rendered when the ` +
                    `loaded rooms carry features — check room.seed.ts put ` +
                    `"${ALT_ROOM_FEATURE}" on ${featured.name}. Rooms offered: ` +
                    `${JSON.stringify(before)}`,
            );
        }
        const toggle = section
            .locator('settings-toggle')
            .filter({ hasText: ALT_ROOM_FEATURE })
            .first();
        await expect(
            toggle,
            `no toggle for "${ALT_ROOM_FEATURE}" in the facilities section`,
        ).toBeVisible({ timeout: 10_000 });
        await toggle.locator('button').first().click({ timeout: 10_000 });

        await expect(async () => {
            const after = await offered();
            expect(
                after,
                `with "${ALT_ROOM_FEATURE}" required, only ${featured.name} should be ` +
                    `offered. Got ${JSON.stringify(after)}`,
            ).toContain(featured.name);
            expect(
                after,
                `and ${plain.name}, which has no features, must be filtered out`,
            ).not.toContain(plain.name);
        }).toPass({ timeout: 20_000 });
    });
});
