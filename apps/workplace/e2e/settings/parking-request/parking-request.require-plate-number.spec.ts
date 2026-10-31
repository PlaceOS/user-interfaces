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

test.describe('parking request form: parking.require_plate_number', () => {
    for (const required of [true, false]) {
        test('parking.require_plate_number ' + required + ' controls the Registration required marker',
            async ({ staffPage, audit }) => {
                const root = await openRequest(staffPage, audit, { 'app.parking.require_plate_number': required });
                const label = root.locator('label').filter({ hasText: /^\s*Registration\s*\*?\s*$/ });
                await expect(label).toHaveCount(1);
                await expect(label.locator('span')).toHaveCount(required ? 1 : 0);
                if (required) await expect(label.locator('span')).toHaveText('*');
                await untouched(staffPage);
            });
    }
});
