import { expect, test } from './fixtures';

// US-060 / US-061: Viewing catering orders and the catering menu.
test.describe('Catering Page', () => {
    test('shows catering orders view', async ({ page }) => {
        await page.goto('/#/book/catering/orders?mock=true');
        await page.locator('[app-catering]').waitFor({ timeout: 30000 });

        await expect(page.locator('app-topbar')).toBeVisible();
        await expect(page.locator('catering-topbar')).toBeVisible();
    });

    test('shows catering menu view', async ({ page }) => {
        await page.goto('/#/book/catering/menu?mock=true');
        await page.locator('[app-catering]').waitFor({ timeout: 30000 });

        await expect(page.locator('catering-topbar')).toBeVisible();
    });
});
