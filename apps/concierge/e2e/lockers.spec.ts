import { expect, test } from './fixtures';
import { gotoMockRoute, waitForHost } from './helpers';

test.describe('Locker Management Page', () => {
    // US-040 / US-043: Locker bookings route and approval toolbar context.
    test('shows locker bookings view', async ({ page }) => {
        await gotoMockRoute(page, '/#/book/lockers/events');
        await waitForHost(page, '[app-lockers]');
        await waitForHost(page, 'lockers-topbar');
        await waitForHost(page, 'locker-bookings');

        await expect(
            page.getByRole('button', { name: /New Booking/i }),
        ).toBeVisible();
    });

    test('creates a locker bank and child locker with mocks', async ({
        page,
    }) => {
        const suffix = Date.now();
        const bank_name = `Mock Bank ${suffix}`;
        const locker_name = `Locker ${suffix}`;

        await page.goto('/#/book/lockers/manage?mock=true');
        await page.getByRole('heading', { name: 'Locker Management' }).waitFor({
            timeout: 30000,
        });

        await page.getByRole('button', { name: /Add Bank/ }).click();
        await page.locator('mat-dialog-container').waitFor();
        await page
            .locator('mat-dialog-container input[formcontrolname="name"]')
            .fill(bank_name);
        await page
            .locator('mat-dialog-container input[formcontrolname="map_id"]')
            .fill(`mock-bank-${suffix}`);
        await page
            .locator(
                'mat-dialog-container mat-select[formcontrolname="level_id"]',
            )
            .click();
        await page
            .getByRole('option', { name: 'Ground Floor' })
            .first()
            .click();
        await page.getByRole('button', { name: 'Save' }).click();
        await page
            .locator('mat-dialog-container')
            .waitFor({ state: 'detached', timeout: 10000 });

        await expect(page.getByText(bank_name)).toBeVisible();

        await page
            .getByText(bank_name)
            .locator('xpath=ancestor::button')
            .locator(
                'xpath=following::*[contains(normalize-space(.), "more_vert")][self::button][1]',
            )
            .click();
        await page.getByRole('menuitem', { name: /Add Locker/ }).click();
        await page.locator('mat-dialog-container').waitFor();
        await page
            .locator('mat-dialog-container input[formcontrolname="name"]')
            .fill(locker_name);
        await page.getByRole('button', { name: 'Save' }).click();
        await page
            .locator('mat-dialog-container')
            .waitFor({ state: 'detached', timeout: 10000 });

        await page.getByRole('button', { name: 'chevron_right' }).click();
        await expect(page.getByText(locker_name)).toBeVisible();
    });

    // US-042 / US-044: Locker bulk release and booking rule controls.
    test('shows locker management bulk and rules controls', async ({
        page,
    }) => {
        await gotoMockRoute(page, '/#/book/lockers/manage');
        await waitForHost(page, '[app-lockers]');
        await waitForHost(page, 'locker-list');

        await expect(
            page.locator('lockers-topbar button icon', {
                hasText: 'open_in_new',
            }),
        ).toBeVisible();
        await expect(
            page.locator('lockers-topbar button icon', {
                hasText: 'lock_open',
            }),
        ).toBeVisible();
    });
});
