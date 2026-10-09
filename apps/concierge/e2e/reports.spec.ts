import { expect, test } from './fixtures';
import { gotoMockRoute, waitForAppShell, waitForHost } from './helpers';

// US-110: Built-in report routes and default report routing.
test.describe('Reports Page', () => {
    test('defaults to the desks report', async ({ page }) => {
        await gotoMockRoute(page, '/#/reports');
        await waitForAppShell(page);
        await waitForHost(page, '[app-new-reports]');
        await waitForHost(page, '[report-desks]');

        expect(page.url()).toContain('/reports/desks');
    });

    test('shows built-in report routes', async ({ page }) => {
        const reports = [
            {
                route: '/#/reports/attendance',
                selector: '[site-attendance-report]',
            },
            { route: '/#/reports/bookings', selector: '[report-spaces]' },
            { route: '/#/reports/desks', selector: '[report-desks]' },
            { route: '/#/reports/parking', selector: '[parking-report]' },
            { route: '/#/reports/lockers', selector: '[lockers-report]' },
            { route: '/#/reports/catering', selector: 'catering-report' },
            {
                route: '/#/reports/contact-tracing',
                selector: 'app-contact-tracing-report',
            },
            { route: '/#/reports/assets', selector: '[report-assets]' },
            { route: '/#/reports/visitors', selector: '[visitors-report]' },
        ];

        for (const { route, selector } of reports) {
            await gotoMockRoute(page, route);
            await waitForAppShell(page);
            await waitForHost(page, '[app-new-reports]');
            await waitForHost(page, selector);
        }
    });

    // US-111: Report exports are gated until generated data exists.
    test('disables generic report download and print until data exists', async ({
        page,
    }) => {
        await gotoMockRoute(page, '/#/reports/desks');
        await waitForHost(page, 'reports-options');

        await expect(
            page.locator('reports-options button[icon]').nth(0),
        ).toBeDisabled();
        await expect(
            page.locator('reports-options button[icon]').nth(1),
        ).toBeDisabled();
    });

    // US-114: Contact tracing requires a selected user before export/print.
    test('disables contact tracing export actions until a user is selected', async ({
        page,
    }) => {
        await gotoMockRoute(page, '/#/reports/contact-tracing');
        await waitForHost(page, 'contact-tracing-options');

        await expect(
            page.locator('contact-tracing-options button[icon]').nth(0),
        ).toBeDisabled();
        await expect(
            page.locator('contact-tracing-options button[icon]').nth(1),
        ).toBeDisabled();
    });
});
