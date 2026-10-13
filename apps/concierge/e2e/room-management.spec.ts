import { expect, test } from './fixtures';

// US-141: Managing room configuration.
test.describe('Room Management Page', () => {
    test('shows the room list', async ({ page }) => {
        await page.goto('/#/room-management?mock=true');
        await page
            .locator('[app-new-room-manager]')
            .waitFor({ timeout: 30000 });

        await expect(page.locator('app-topbar')).toBeVisible();
        await expect(page.locator('room-manager-topbar')).toBeVisible();
        await expect(page.locator('room-list')).toBeVisible();
    });
});
