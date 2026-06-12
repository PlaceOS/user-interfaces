import { expect, test } from '@playwright/test';

test.describe('Locker Management Page', () => {
    test('creates a locker bank and child locker with mocks', async ({ page }) => {
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
            .locator('mat-dialog-container mat-select[formcontrolname="level_id"]')
            .click();
        await page.getByRole('option', { name: 'Ground Floor' }).first().click();
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
});
