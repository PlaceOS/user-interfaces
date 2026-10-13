import { expect, Page } from '@playwright/test';

export const LOAD_TIMEOUT = 30000;

export const MEDIA_URL = '/#/media';
export const PLAYLISTS_URL = '/#/playlists';
export const ZONES_URL = '/#/zones';
export const SCHEDULES_URL = '/#/schedules';
export const DISPLAYS_URL = '/#/displays';
export const GROUPS_URL = '/#/groups';

export async function navigateWithMock(page: Page, url = MEDIA_URL) {
    await page.goto('/?mock=true');
    await page.evaluate(() => localStorage.setItem('mock', 'true'));
    await page.goto(`${url}?mock=true`);
    await expect(page.locator('app-root')).toBeVisible({
        timeout: LOAD_TIMEOUT,
    });
    await waitForLoadingComplete(page);
}

export async function waitForLoadingComplete(page: Page) {
    await Promise.race([
        page
            .locator('[loader]')
            .waitFor({ state: 'detached', timeout: LOAD_TIMEOUT }),
        page.waitForTimeout(5000),
    ]).catch(() => {
        // Loader may be absent or already hidden.
    });
}

export function desktopNavLink(page: Page, route: string) {
    return page.locator(`nav a[href*="${route}"]`).first();
}

export async function closeDialog(page: Page) {
    await page.keyboard.press('Escape');
    await page
        .locator('[role="dialog"]')
        .waitFor({ state: 'detached', timeout: 5000 })
        .catch(() => {});
}

export async function openFirstPlaylist(page: Page) {
    await navigateWithMock(page, PLAYLISTS_URL);
    await page.getByRole('link', { name: /open playlist/i }).first().click();
    await expect(page).toHaveURL(/#\/playlists\/.+/);
}

export async function openFirstZone(page: Page) {
    await navigateWithMock(page, '/#/zones/bld-03');
    await expect(page).toHaveURL(/#\/zones\/bld-03/);
}

export async function openFirstDisplay(page: Page) {
    await navigateWithMock(page, DISPLAYS_URL);
    await page.getByRole('link', { name: /open display/i }).first().click();
    await expect(page).toHaveURL(/#\/displays\/.+/);
    await expect(page.getByRole('tab', { name: /playlists/i })).toBeVisible({
        timeout: LOAD_TIMEOUT,
    });
}
