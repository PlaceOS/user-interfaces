import { expect, test } from '@playwright/test';

test.describe('Landing Page', () => {
    test('has layout', async ({ page }) => {
        await page.goto('/#/?mock=true');
        await page.locator('app-landing').waitFor({ timeout: 30000 });
        await expect(page.locator('app-landing')).toBeVisible();
        await expect(page.locator('topbar')).toBeVisible();
        await expect(page.locator('landing-colleagues')).toBeVisible();
        await expect(page.locator('landing-upcoming')).toBeVisible();
        await expect(page.locator('landing-availability')).toBeVisible();
    });

    test('controlled free status shows a room and opens its booking modal', async ({
        page,
    }) => {
        await page.goto('/#/?mock=true');
        await expect(page.locator('app-landing')).toBeVisible({ timeout: 30_000 });

        const room = page.locator('button[name="landing-book-room"]').first();
        await expect(room, 'the mock Bookings module should publish free status').toBeVisible({
            timeout: 30_000,
        });
        const room_name = ((await room.innerText()).split('\n')[0] ?? '').trim();
        await room.click();

        const modal = page.locator('.cdk-overlay-container mat-dialog-container');
        await expect(modal, 'booking the available room should open its modal').toBeVisible({
            timeout: 20_000,
        });
        await expect(modal).toContainText(room_name);
    });
});
