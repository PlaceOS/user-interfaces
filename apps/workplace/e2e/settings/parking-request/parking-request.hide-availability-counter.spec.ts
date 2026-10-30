import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Audit, prepareSettings, REQUEST, ROUTE, type Settings, test, untouched } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

async function openRequest(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepareSettings(page, { ...REQUEST, ...overrides }, {
        audit, base: {}, landingRooms: false, identity: false, bookings: { types: ['parking'] }, bootstrap: true,
    });
    await page.goto(ROUTE);
    await fixture.ready();
    const root = page.locator('parking-request-form-details');
    await expect(root).toBeVisible();
    await expect(page.locator('parking-request-form button[btn]').filter({ has: page.locator('icon', { hasText: /^\s*send\s*$/ }) })).toBeVisible();
    return root;
}

test.describe('parking request form: parking.hide_availability_counter', () => {
    for (const hidden of [false, true]) {
        test('parking.hide_availability_counter ' + hidden + ' controls the location capacity counter',
            async ({ staffPage, audit }) => {
                const root = await openRequest(staffPage, audit, { 'app.parking.hide_availability_counter': hidden });
                await expect(root.getByText(/Location Preference/i)).toBeVisible();
                // Spaces are served empty, so the shown counter settles at 0 of 0 with no lookup.
                const counter = root.locator('icon').filter({ hasText: /^\s*car_lock\s*$/ });
                await expect(counter).toHaveCount(hidden ? 0 : 1);
                await expect(root.getByText('Checking...', { exact: true })).toHaveCount(0);
                if (!hidden) await expect(counter).toBeVisible();
                await untouched(staffPage);
            });
    }
});
