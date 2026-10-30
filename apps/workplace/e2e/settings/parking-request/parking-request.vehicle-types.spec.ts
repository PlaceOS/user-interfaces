import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Audit, labelledSelect, optionLabels, prepareSettings, REQUEST, ROUTE, type Settings, test, untouched } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const DEFAULT_VEHICLES = ['Car', 'Bike', 'Van', 'Truck', 'Other'];

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

test.describe('parking request form: parking.vehicle_types', () => {

    test('parking.vehicle_types replaces the vehicle choices', async ({ staffPage, audit }) => {
        const root = await openRequest(staffPage, audit, {
            'app.parking.vehicle_types': [
                { id: 'e2e-ev', name: 'E2E Electric' },
                { id: '', name: 'E2E Missing Id' },
                { id: 'e2e-moto', name: 'E2E Motorbike' },
            ],
        });
        // _normaliseOptions drops entries without an id (parking-request-form-details.component.ts).
        expect(await optionLabels(staffPage, labelledSelect(root, 'Vehicle Type'))).toEqual(['E2E Electric', 'E2E Motorbike']);
        await untouched(staffPage);
    });

    test('parking.vehicle_types unset offers the five default vehicles', async ({ staffPage, audit }) => {
        const root = await openRequest(staffPage, audit, { 'app.parking.vehicle_types': null });
        expect(await optionLabels(staffPage, labelledSelect(root, 'Vehicle Type'))).toEqual(DEFAULT_VEHICLES);
        await untouched(staffPage);
    });
});
