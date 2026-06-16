import { expect, test } from './fixtures';

// US-020 / US-023: Viewing desk bookings and managing the desk inventory.
test.describe('Desk Bookings Page', () => {
    test('shows desk bookings view', async ({ page }) => {
        await page.goto('/#/book/desks/events?mock=true');
        await page.locator('[app-desks]').waitFor({ timeout: 30000 });

        await expect(page.locator('app-topbar')).toBeVisible();
        await expect(page.locator('desk-bookings')).toBeVisible();
    });

    test('shows desk management view', async ({ page }) => {
        await page.goto('/#/book/desks/manage?mock=true');
        await page.locator('[app-desks]').waitFor({ timeout: 30000 });

        await expect(page.locator('desks-manage')).toBeVisible();
    });
});
