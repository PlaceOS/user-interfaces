import { expect, test } from './fixtures';
import { gotoMockRoute, waitForHost } from './helpers';

// US-070 / US-071: Viewing visitors and opening the invite visitor flow.
test.describe('Visitors Page', () => {
    test('shows the visitor listing', async ({ page }) => {
        await page.goto('/#/book/visitors?mock=true');
        await page.locator('[app-new-visitors]').waitFor({ timeout: 30000 });

        await expect(page.locator('app-topbar')).toBeVisible();
        await expect(page.locator('guest-listings')).toBeVisible();
    });

    test('opens the invite visitor dialog', async ({ page }) => {
        await page.goto('/#/book/visitors?mock=true');
        await page.locator('[app-new-visitors]').waitFor({ timeout: 30000 });

        await page
            .getByRole('button', { name: 'Invite Visitor' })
            .first()
            .click();
        // The invite modal renders inside a fullscreen shell whose host has no
        // box; assert on its heading (the page's only other heading is
        // "Visitors") rather than the zero-size dialog/shell host.
        await expect(
            page.getByRole('heading', { name: 'Invite Visitor' }),
        ).toBeVisible({ timeout: 10000 });
    });

    // US-070 / US-073 / US-074 / US-076: Visitor listing detail columns.
    test('shows visitor operational columns', async ({ page }) => {
        await gotoMockRoute(page, '/#/book/visitors');
        await waitForHost(page, '[app-new-visitors]');
        await waitForHost(page, 'guest-listings');

        await expect(
            page
                .locator('guest-listings')
                .getByRole('button', { name: /^Status$/ }),
        ).toBeVisible();
        await expect(
            page
                .locator('guest-listings')
                .getByRole('button', { name: /Visitor/i }),
        ).toBeVisible();
        await expect(
            page
                .locator('guest-listings')
                .getByRole('button', { name: /Host/i }),
        ).toBeVisible();
        await expect(
            page
                .locator('guest-listings')
                .getByRole('button', { name: /Checked-in/i }),
        ).toBeVisible();
        await expect(
            page
                .locator('guest-listings')
                .getByRole('button', { name: /Checked-out/i }),
        ).toBeVisible();
    });
});
