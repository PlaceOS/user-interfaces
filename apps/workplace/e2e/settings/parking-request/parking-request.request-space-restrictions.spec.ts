import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Audit, prepareSettings, REQUEST, ROUTE, type Settings, test, untouched } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const RESTRICTIONS = [
    { id: 'e2e-standard-bay', name: 'E2E Standard Bay' },
    { id: 'e2e-accessible-bay', name: 'E2E Accessible Bay' },
];

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

test.describe('parking request form: parking.request_space_restrictions', () => {

    test('parking.request_space_restrictions renders a single-choice radio group', async ({ staffPage, audit }) => {
        const root = await openRequest(staffPage, audit, { 'app.parking.request_space_restrictions': RESTRICTIONS });
        const group = root.locator('mat-radio-group[aria-labelledby="parking-space-restrictions-label"]');
        await expect(group.getByRole('radio')).toHaveCount(2);
        await group.getByRole('radio', { name: 'E2E Accessible Bay' }).check();
        await expect(group.getByRole('radio', { name: 'E2E Accessible Bay' })).toBeChecked();
        await expect(group.getByRole('radio', { name: 'E2E Standard Bay' })).not.toBeChecked();
        await untouched(staffPage);
    });

    test('parking.request_space_restrictions empty renders no radio group', async ({ staffPage, audit }) => {
        const root = await openRequest(staffPage, audit, { 'app.parking.request_space_restrictions': [] });
        await expect(root.locator('mat-radio-group[aria-labelledby="parking-space-restrictions-label"]')).toHaveCount(0);
        await expect(root.locator('#parking-space-restrictions-label')).toHaveCount(0);
        await untouched(staffPage);
    });
});
