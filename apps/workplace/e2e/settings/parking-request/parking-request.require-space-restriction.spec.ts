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

test.describe('parking request form: parking.require_space_restriction', () => {
    for (const required of [true, false]) {
        test('parking.require_space_restriction ' + required + ' marks the restriction group ' +
            (required ? 'required and invalid until a bay is chosen' : 'optional and valid without a choice'),
            async ({ staffPage, audit }) => {
                const root = await openRequest(staffPage, audit, {
                    'app.parking.require_space_restriction': required,
                    'app.parking.request_space_restrictions': RESTRICTIONS,
                });
                const group = root.locator('mat-radio-group[aria-labelledby="parking-space-restrictions-label"]');
                await expect(root.locator('#parking-space-restrictions-label span[aria-hidden="true"]'))
                    .toHaveCount(required ? 1 : 0);
                await expect(group).toHaveAttribute('aria-required', String(required));
                // booking-form.model.ts validates only when required.
                await expect(group).toHaveAttribute('aria-invalid', String(required));
                await group.getByRole('radio', { name: 'E2E Standard Bay' }).check();
                await expect(group).toHaveAttribute('aria-invalid', 'false');
                await untouched(staffPage);
            });
    }
});
