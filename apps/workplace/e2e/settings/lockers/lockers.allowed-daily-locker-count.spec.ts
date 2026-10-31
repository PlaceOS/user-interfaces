// Setting: bookings.allowed_daily_locker_count (docs/settings/workplace.md).
// Coverage: 1 unique Setting / 2 scenarios.
//
// Source: libs/bookings/src/lib/booking-form.service.ts _checkResourceAvailable
// (the same check as the desk and parking limits, with type 'locker'), run by
// postForm before anything is saved: the user's locker bookings for the
// booking period (GET /api/staff/v1/bookings with period_start, period_end,
// type=locker, email=<user>, limit=1000) are counted, and with
// app.bookings.allowed_daily_locker_count (default 1; 0 = no limit) or more
// the save is refused with BOOKINGS.CLASH_CURRENT_USER.
// Flow: new-locker-form-details -> locker-list-field opens locker-select-modal
// -> pick the bank, then the locker -> open-locker-confirm opens
// locker-flow-confirm -> confirm-locker calls postForm; a refusal is shown
// with notifyError and the confirm sheet stays open.
//
// Synthetic, browser-only locker inventory (settings-harness lockerInventory):
// one bank and one locker in the active building. The picker's availability
// answer is held until the picker has loaded its lockers (see lockerInventory
// for the product timing issue this avoids). Both scenarios answer the
// existing-bookings GET with ONE active locker booking for the signed-in user
// in the requested period, for another locker.
//   1. limit 1: refused with CLASH_CURRENT_USER; no POST; sheet still open.
//   2. limit 2: exactly one locker booking POST, caught and answered in the
//      browser (armBookingPost); the locker success view opens.
// Not tested here: the default (unset = 1) and 0 (no limit).
//
// Safety: the read-only context guard is unchanged and fails any write; only
// scenario 2 arms one booking POST, answered locally. Nothing is saved.
import { expect } from '../../../../../e2e/support/fixtures';
import {
    armBookingPost,
    bookingPosts,
    clashCurrentUser,
    LOCKER,
    LOCKER_ID,
    lockerInventory,
    oneDailyBooking,
    pickerLockerCount,
    prepare,
    test,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const OTHER_LOCKER = 'e2e-locker-other';

const SCENARIOS = [
    { label: '1 refuses a second locker booking that day', limit: 1, allowed: false },
    { label: '2 allows a second locker booking that day', limit: 2, allowed: true },
];

for (const scenario of SCENARIOS) {
    test('locker settings: bookings.allowed_daily_locker_count ' + scenario.label, async ({ staffPage, audit }) => {
        const fixture = await prepare(staffPage, audit, {
            ...LOCKER,
            'app.bookings.allowed_daily_locker_count': scenario.limit,
        });
        const inventory = await lockerInventory(staffPage, audit);
        await staffPage.goto('/#/book/locker/form');
        await fixture.ready();
        const form = staffPage.locator('new-locker-form-details');
        await expect(form.locator('button[name="add-locker"]')).toBeVisible();
        const { email } = await fixture.user();
        const served = await oneDailyBooking(staffPage, audit, { type: 'locker', email, asset_id: OTHER_LOCKER });
        await expect.poll(inventory.served, { message: 'the form read locker availability' }).toBeGreaterThan(0);

        // Pick the synthetic locker.
        inventory.hold();
        await form.locator('button[name="add-locker"]').click();
        const picker = staffPage.locator('locker-select-modal');
        await expect(picker).toBeVisible();
        await expect.poll(() => pickerLockerCount(staffPage, 'locker-bank-list'),
            { message: 'the picker loaded its lockers' }).toBe(1);
        inventory.release();
        const banks = picker.locator('locker-bank-list li[locker_bank]');
        await expect(banks).toHaveCount(1);
        await banks.locator('button[name="select-locker_bank"]').click();
        const locker = picker.locator('locker-grid button').filter({ hasText: 'E2E Locker 1' });
        await expect(locker).toHaveCount(1);
        await expect(locker).toBeEnabled();
        await locker.click();
        await picker.locator('button[name="toggle-locker"]').click();
        await expect(picker).toHaveCount(0);
        await expect(form.locator('locker-list-field div[locker]')).toHaveCount(1);

        const posts = bookingPosts(staffPage);
        const armed = scenario.allowed
            ? await armBookingPost(staffPage, (body) =>
                body.booking_type === 'locker' && body.user_email === email && body.asset_id === LOCKER_ID)
            : undefined;

        await staffPage.locator('button[name="open-locker-confirm"]').click();
        const sheet = staffPage.locator('locker-flow-confirm');
        await expect(sheet.locator('button[name="confirm-locker"]')).toBeVisible();
        await sheet.locator('button[name="confirm-locker"]').click();

        await expect.poll(() => served.length, { message: 'existing locker bookings were read' }).toBeGreaterThan(0);
        expect(served[0].period_end).toBeGreaterThan(served[0].period_start);
        if (!scenario.allowed) {
            await expect(staffPage.locator('mat-snack-bar-container')).toContainText(clashCurrentUser(email));
            expect(posts, 'no booking POST is sent').toEqual([]);
            await expect(sheet.locator('button[name="confirm-locker"]')).toBeVisible();
            await expect(staffPage).toHaveURL(/#\/book\/locker\/form$/);
            await expect(staffPage.locator('locker-flow-success')).toHaveCount(0);
        } else {
            await expect.poll(() => armed!.completed, { message: 'the armed booking POST was answered' }).toBe(true);
            expect(posts, 'exactly one booking POST').toHaveLength(1);
            expect(armed!.bodies).toHaveLength(1);
            expect(armed!.bodies[0].asset_id).toBe(LOCKER_ID);
            await expect(staffPage).toHaveURL(/#\/book\/locker\/success$/);
            // The success host has no box of its own; check its visible heading.
            await expect(staffPage.locator('locker-flow-success h2')).toBeVisible();
            await expect(sheet).toHaveCount(0);
        }
    });
}
