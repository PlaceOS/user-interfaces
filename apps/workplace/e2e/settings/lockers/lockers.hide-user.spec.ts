// Setting: lockers.hide_user (docs/settings/workplace.md: hide the users of
// lockers on the locker selection map). Coverage: 1 unique Setting / 2 scenarios.
//
// Source: libs/bookings/src/lib/locker-select-modal/locker-map.component.ts is
// the only reader. Its `features` (the user/name tooltip shown on each locker
// bank, ExploreDeskInfoComponent with data.user from
// BookingFormService.resourceUserName) are [] when app.lockers.hide_user is
// true; the bank click `actions` and colour `styles` are not affected.
//
// Synthetic, browser-only locker inventory (settings-harness lockerInventory):
// one bank and one locker in the active building. The locker form's picker is
// opened and switched to its map view; the picker's availability answer is
// held until the map has loaded its lockers (see lockerInventory). Both
// scenarios then require one bank click action, so the bank is on the map:
//   1. false: one tooltip feature for the bank (named E2E Locker Bank).
//   2. true: no tooltip features.
// The map's SVG is not loaded (the synthetic bank has no level map), so the
// check reads the component's features; nothing is clicked on the map.
// Nothing is sent or saved; the picker is closed unchanged.
import { expect } from '../../../../../e2e/support/fixtures';
import {
    type DebugWindow,
    LOCKER,
    LOCKER_BANK_ID,
    lockerInventory,
    pickerLockerCount,
    prepare,
    test,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

type MapView = {
    actions(): { id: string }[];
    features(): { location: string; data?: { name?: string } }[];
};

for (const hidden of [false, true]) {
    test('lockers.hide_user ' + hidden + ' sets the locker map user tooltips', async ({ staffPage, audit }) => {
        const fixture = await prepare(staffPage, audit, {
            ...LOCKER,
            'app.lockers.hide_user': hidden,
        });
        const inventory = await lockerInventory(staffPage, audit);
        await staffPage.goto('/#/book/locker/form');
        await fixture.ready();
        const form = staffPage.locator('new-locker-form-details');
        await expect(form.locator('button[name="add-locker"]')).toBeVisible();
        await expect.poll(inventory.served, { message: 'the form read locker availability' }).toBeGreaterThan(0);

        inventory.hold();
        await form.locator('button[name="add-locker"]').click();
        const picker = staffPage.locator('locker-select-modal');
        await expect(picker).toBeVisible();
        await picker.locator('header button').filter({
            has: staffPage.locator('icon', { hasText: /^\s*map\s*$/ }),
        }).click();
        await expect(picker.locator('locker-map')).toHaveCount(1);
        await expect.poll(() => pickerLockerCount(staffPage, 'locker-map'),
            { message: 'the map loaded its lockers' }).toBe(1);
        inventory.release();

        const read = () => picker.locator('locker-map').evaluate((element) => {
            const view = (window as DebugWindow).ng?.getComponent(element) as MapView | undefined;
            if (!view) throw new Error('the locker map is unavailable');
            return {
                actions: view.actions().map((action) => action.id),
                features: view.features().map((feature) => ({
                    location: feature.location, name: feature.data?.name,
                })),
            };
        });
        await expect.poll(async () => (await read()).actions, { message: 'the bank is on the map' })
            .toEqual([LOCKER_BANK_ID]);
        expect((await read()).features).toEqual(hidden
            ? []
            : [{ location: LOCKER_BANK_ID, name: 'E2E Locker Bank' }]);

        await picker.locator('header button[mat-dialog-close]').click();
        await expect(picker).toHaveCount(0);
        await expect(form.locator('locker-list-field div[locker]')).toHaveCount(0);
    });
}
