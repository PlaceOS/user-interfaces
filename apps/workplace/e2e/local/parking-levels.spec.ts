/**
 * PARK-16 — only spaces on a PARKING level are offered.
 *
 * `ParkingService.levels` filters the org's levels to those tagged `parking`,
 * and the picker only asks those levels for spaces. That tag is the entire
 * boundary between "this is a car park" and "this is an office floor", and
 * nothing tests it — so a change that dropped the filter would offer desks'
 * levels as parking, and the first anybody would know is a user booking a
 * parking space on the third floor.
 *
 * The test creates a parking-shaped asset on the ORDINARY level (the one the
 * desks live on, which is not tagged `parking`) and asserts the picker does not
 * offer it, while the properly-placed space still is. Both halves matter: the
 * second is what stops "the picker offers nothing" passing as success.
 *
 * The decoy is removed in teardown. It is an asset of the same type on a zone
 * the parking flow should ignore — harmless, but not something to leave behind.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { ENGINE_API, apiFor, zonesWithTag } from '../../../../e2e/support/api';
import { spaceForWorker, parkingSeed } from '../../../../e2e/support/parking/parking.seed';
import {
    PARKING_BASE_SETTINGS,
    useSettings,
} from '../../../../e2e/support/parking/parking.settings';
import { ParkingForm } from '../../../../e2e/support/parking/parking-form.page';

test.describe('parking level scoping', () => {
    test('a space on a level that is not tagged parking is not offered', async ({
        staffPage,
    }, testInfo) => {
        const proper = await spaceForWorker(testInfo.parallelIndex);
        const seed = await parkingSeed();
        const decoy_name = `E2E Decoy Space ${testInfo.parallelIndex}`;
        const admin = await apiFor('admin', 0);
        let decoy_id: string | undefined;

        await useSettings(staffPage, PARKING_BASE_SETTINGS);

        try {
            // The ordinary level — where the desks live, and deliberately NOT
            // tagged `parking`.
            //
            // Filtered rather than taken first: the parking level this suite
            // seeds is tagged BOTH `level` and `parking`, so it is in this list
            // too and happened to come first.
            const levels = await zonesWithTag(admin, 'level');
            const level = levels.find((zone) => zone.id !== seed.zone_id);
            expect(
                level?.id,
                `precondition: the stack has an ordinary level zone to plant a decoy ` +
                    `on. Levels found: ${JSON.stringify(levels.map((z) => z.name))}`,
            ).toBeTruthy();

            const created = await admin.post(`${ENGINE_API}/assets`, {
                data: {
                    name: decoy_name,
                    identifier: decoy_name,
                    zone_id: level!.id,
                    asset_type_id: seed.type_id,
                    description: 'Decoy for PARK-16. Safe to delete.',
                },
            });
            expect(
                created.ok(),
                `planting the decoy failed: HTTP ${created.status()} ${await created.text()}`,
            ).toBe(true);
            decoy_id = (await created.json()).id;

            const form = new ParkingForm(staffPage);
            await form.open();
            await form.addSpaceButton.click({ timeout: 10_000 });
            await expect(
                staffPage.locator('li[space]').first(),
                'the parking picker did not open',
            ).toBeVisible({ timeout: 20_000 });

            const offered = await staffPage.locator('li[space]').allInnerTexts();
            const names = offered.map((t) => t.split('\n')[0].trim());

            expect(
                names.join(' | '),
                `a space on a level that is not tagged \`parking\` must NOT be offered. ` +
                    `The picker offered: ${JSON.stringify(names)}`,
            ).not.toContain(decoy_name);

            // The control: the properly-placed space IS offered, so the
            // assertion above is about the tag rather than about an empty picker.
            expect(
                names.join(' | '),
                `the space on the parking level should still be offered, or "nothing is ` +
                    `offered" would pass as success. The picker offered: ` +
                    `${JSON.stringify(names)}`,
            ).toContain(proper.name);
        } finally {
            if (decoy_id) {
                await admin.delete(`${ENGINE_API}/assets/${decoy_id}`).catch(() => null);
            }
            await admin.dispose();
        }
    });
});
