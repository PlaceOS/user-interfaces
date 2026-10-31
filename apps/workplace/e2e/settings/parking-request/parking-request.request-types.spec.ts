import type { Locator, Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Audit, prepareSettings, REQUEST, ROUTE, type Settings, test, untouched } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const DEFAULT_TYPES = ['Standard Parking Request', 'P2 Special Needs Request', 'After-hours Private Access Request'];

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
// Request types are <button role="radio"> rows in the Request Type radiogroup
// (parking-request-form-details.component.ts); name, badge and description sit
// inside the button, and aria-checked marks the selected row.
function typeCard(root: Locator, name: string) {
    return root.getByRole('radio').filter({ has: root.page().getByText(name, { exact: true }) });
}

test.describe('parking request form: parking.request_types', () => {

    test('parking.request_types replaces the default request types', async ({ staffPage, audit }) => {
        const root = await openRequest(staffPage, audit, {
            'app.parking.request_types': [
                { id: 'standard', name: 'E2E Commuter Request', description: 'E2E commuter description', badge: 'E2E Badge' },
                { id: 'e2e-night', name: 'E2E Night Request' },
                { id: 'e2e-hidden', name: 'E2E Group-only Request', groups: ['e2e-no-such-group'] },
            ],
        });
        await expect(typeCard(root, 'E2E Commuter Request')).toContainText('E2E commuter description');
        await expect(typeCard(root, 'E2E Commuter Request')).toContainText('E2E Badge');
        await expect(typeCard(root, 'E2E Night Request')).toHaveCount(1);
        // groups the user lacks filter the type out (request_types in parking-request-form-details.component.ts).
        await expect(typeCard(root, 'E2E Group-only Request')).toHaveCount(0);
        for (const name of DEFAULT_TYPES) await expect(root.getByText(name, { exact: true })).toHaveCount(0);
        await typeCard(root, 'E2E Night Request').click();
        await expect(typeCard(root, 'E2E Night Request')).toHaveAttribute('aria-checked', 'true');
        await expect(typeCard(root, 'E2E Commuter Request')).toHaveAttribute('aria-checked', 'false');
        await untouched(staffPage);
    });

    test('parking.request_types unset shows the three default request types', async ({ staffPage, audit }) => {
        const root = await openRequest(staffPage, audit, { 'app.parking.request_types': null });
        for (const name of DEFAULT_TYPES) await expect(typeCard(root, name)).toHaveCount(1);
        await expect(root.getByText('E2E Commuter Request', { exact: true })).toHaveCount(0);
        await untouched(staffPage);
    });
});
