/**
 * DESK-15 — the level selector re-scopes which desks are offered.
 *
 * The row nobody could write. The stack seeds one org, one building and one
 * level, so the selector has always had a list of one and a test would have
 * asserted nothing. That is why it sat as "todo — needs a seeding change" in the
 * coverage doc.
 *
 * ## It does not need a seeding change after all
 *
 * The level is created by this spec and deleted afterwards
 * (`desk/desk.zones.ts`), which leaves the shared `seed.ts` untouched — the file
 * both sessions have deliberately avoided, because a mistake in it breaks the
 * dev's original desk specs.
 *
 * This is the only place in the suite that adds to the org hierarchy. It is
 * per-worker, reused if an earlier run left it behind, and removed in teardown.
 *
 * ## What is being guarded
 *
 * A picker that ignored the selector would offer every desk in the building
 * whatever the user chose — so somebody would book a desk on a floor they never
 * meant, and nothing about the screen would look wrong. Hence both halves: the
 * extra level's desk appears when it is selected, and the ordinary level's desks
 * do not.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deskFor } from '../../../../e2e/support/env';
import {
    createSecondLevel,
    removeSecondLevel,
} from '../../../../e2e/support/desk/desk.zones';
import { DeskForm } from '../../../../e2e/support/desk/desk-form.page';

test.describe('desk level scoping', () => {
    test('choosing a level changes which desks the picker offers', async ({
        staffPage,
    }, testInfo) => {
        const ordinary_desk = deskFor(testInfo.parallelIndex);
        const extra = await createSecondLevel(testInfo.parallelIndex);

        try {
            const form = new DeskForm(staffPage);
            await form.open();
            await form.setChecked(form.requireLocker, false);
            await form.addDeskButton.click();

            const offered = async () => {
                const texts = await staffPage
                    .locator('button[name="select-desk"]')
                    .allInnerTexts();
                return texts.map((t) => t.split('\n')[0].trim());
            };
            await expect(
                staffPage.locator('button[name="select-desk"]').first(),
                'the desk picker did not open',
            ).toBeVisible({ timeout: 20_000 });

            const before = await offered();
            expect(
                before,
                `precondition: the ordinary level's desk is offered to begin with. ` +
                    `Offered: ${JSON.stringify(before)}`,
            ).toContain(ordinary_desk.name);

            // Switch the level. The selector is a `mat-select` named `location`
            // in the picker's filters; its options are the building's levels.
            const selector = staffPage.locator('mat-select[name="location"]').first();
            const present = await selector
                .waitFor({ state: 'visible', timeout: 10_000 })
                .then(() => true)
                .catch(() => false);
            if (!present) {
                throw new Error(
                    `no level selector in the desk picker. It is only rendered when the ` +
                        `building has levels to choose between — this spec creates a ` +
                        `second one, so check createSecondLevel ran (zone ` +
                        `${extra.zone_id}).`,
                );
            }
            await selector.click();
            const option = staffPage
                .locator('.cdk-overlay-container mat-option')
                .filter({ hasText: 'E2E Extra Level' })
                .first();
            await expect(
                option,
                'the extra level is not among the options the selector offers',
            ).toBeVisible({ timeout: 10_000 });
            await option.click();

            // The desk on the extra level appears, and the ordinary level's does
            // not. The second half is what makes this about scoping rather than
            // about the list simply growing.
            await expect(async () => {
                const after = await offered();
                expect(
                    after,
                    `the extra level's desk should be offered once it is selected. ` +
                        `Offered: ${JSON.stringify(after)}`,
                ).toContain(extra.desk.name);
                expect(
                    after,
                    `and the other level's desks must NOT be — otherwise the picker is ` +
                        `ignoring the selector, and somebody can book a desk on a floor ` +
                        `they never chose`,
                ).not.toContain(ordinary_desk.name);
            }).toPass({ timeout: 30_000 });
        } finally {
            await removeSecondLevel(extra.zone_id);
        }
    });
});
