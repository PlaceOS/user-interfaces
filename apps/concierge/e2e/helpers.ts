import type { Page } from '@playwright/test';

export async function gotoMockRoute(page: Page, route: string) {
    const separator = route.includes('?') ? '&' : '?';
    await page.goto(`${route}${separator}mock=true`);
}

export async function waitForAppShell(page: Page) {
    await page.locator('app-topbar').first().waitFor({ timeout: 30000 });
    await page.locator('app-sidebar').first().waitFor({ timeout: 30000 });
}

export async function waitForHost(page: Page, selector: string) {
    await page
        .locator(selector)
        .first()
        .waitFor({ state: 'attached', timeout: 30000 });
}
