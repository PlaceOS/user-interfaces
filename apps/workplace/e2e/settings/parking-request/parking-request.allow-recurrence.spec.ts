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

test.describe('parking request form: parking.allow_recurrence', () => {
    for (const enabled of [true, false]) {
        test('parking.allow_recurrence ' + enabled + ' controls the Single Day / Multi-day choice',
            async ({ staffPage, audit }) => {
                const root = await openRequest(staffPage, audit, { 'app.parking.allow_recurrence': enabled });
                await expect(root.getByText('Single Day', { exact: true })).toHaveCount(enabled ? 1 : 0);
                await expect(root.getByText('Multi-day', { exact: true })).toHaveCount(enabled ? 1 : 0);
                await expect(root.locator('a-date-field')).toBeVisible();
                if (enabled) {
                    // Local state only: setBookingFrequency('daily') reveals the week choices
                    // (available_period 14 -> max_weeks 2).
                    await root.getByText('Multi-day', { exact: true }).click();
                    await expect(root.getByRole('button', { name: '1 week', exact: true })).toBeVisible();
                    await expect(root.getByRole('button', { name: '2 weeks', exact: true })).toBeVisible();
                }
                await untouched(staffPage);
            });
    }
});
