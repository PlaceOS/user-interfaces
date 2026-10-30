// Setting: banner (banner.id, banner.type, banner.content) (docs/settings/workplace.md).
// Coverage: 5 scenarios shared by the banner keys (warn, error, empty content,
// close remembers the id, a new id shows again). Consumer: GlobalBannerComponent.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import {
    BASE_SETTINGS,
    LANDING_TIMEZONE,
    landingSafetyTest,
} from '../support/settings-harness';

const test = landingSafetyTest(BASE_SETTINGS, 'e2e-settings-landing');

test.describe.configure({ timeout: 120_000 });

test.use({
    storageState: undefined,
    timezoneId: LANDING_TIMEZONE,
    readOnlyTimezone: LANDING_TIMEZONE,
    locale: 'en-AU',
});

// GlobalBannerComponent: hidden until is_setup() (500 ms after org init), then shown when content is set and
// localStorage PLACE.last_banner differs from banner.id. Close only writes that browser-local key.
type BannerHost = {
    is_setup(): boolean;
    banner(): { id?: string } | undefined;
};
const bannerState = (page: Page) =>
    page.locator('global-banner').evaluate((el) => {
        const c = (
            window as unknown as { ng?: { getComponent(e: Element): unknown } }
        ).ng?.getComponent(el) as BannerHost | undefined;
        return { setup: !!c?.is_setup(), id: c?.banner()?.id ?? null };
    });
const bannerBox = (page: Page) =>
    page.locator('global-banner > div:not(.environment-bar)');

for (const [type, colour] of [
    ['warn', /\bbg-warning\b/],
    ['error', /\bbg-error\b/],
] as const) {
    test(
        'banner type ' + type + ' renders the configured content and colour',
        async ({ isolated }) => {
            const page = await isolated.open({
                'app.banner': {
                    id: 'prepared-banner-' + type,
                    type,
                    content: 'Prepared banner ' + type,
                },
            });
            const box = bannerBox(page);
            await expect(box).toHaveCount(1);
            await expect(box).toBeVisible();
            await expect(box).toContainText('Prepared banner ' + type);
            await expect(box).toHaveClass(colour);
            await expect(box.locator('button icon')).toHaveText('close');
        },
    );
}

test('banner with empty content stays hidden after setup', async ({
    isolated,
}) => {
    const page = await isolated.open({
        'app.banner': {
            id: 'prepared-banner-empty',
            type: 'info',
            content: '',
        },
    });
    // Wait for the source readiness signal so the absence is not vacuous.
    await expect
        .poll(() => bannerState(page))
        .toEqual({ setup: true, id: 'prepared-banner-empty' });
    await expect(bannerBox(page)).toHaveCount(0);
});

test('banner close remembers banner.id in browser storage only', async ({
    isolated,
}) => {
    const id = 'prepared-banner-dismiss';
    const page = await isolated.open({
        'app.banner': {
            id,
            type: 'info',
            content: 'Prepared dismissible banner',
        },
    });
    const box = bannerBox(page);
    await expect(box).toBeVisible();
    await expect(box).toHaveClass(/\bbg-info\b/);
    await box
        .locator('button')
        .filter({ has: page.locator('icon', { hasText: 'close' }) })
        .click();
    await expect(box).toHaveCount(0);
    expect(
        await page.evaluate(() => localStorage.getItem('PLACE.last_banner')),
    ).toBe(id);
    await page.reload();
    // Same setting still applied after reload; the stored id keeps it dismissed.
    await expect.poll(() => bannerState(page)).toEqual({ setup: true, id });
    await expect(bannerBox(page)).toHaveCount(0);
});

// A dismissal is remembered for one banner.id only, so a different stored id
// (an earlier banner the user closed) does not hide a new banner. The stored
// value is written in the browser before load.
test('banner with a new id shows again after an earlier banner was dismissed', async ({
    isolated,
    staffPage,
}) => {
    const previous = 'prepared-banner-previous';
    const id = 'prepared-banner-new';
    // isolated.open uses staffPage for the first page of a test.
    await staffPage.addInitScript(
        (value) => localStorage.setItem('PLACE.last_banner', value),
        previous,
    );
    const page = await isolated.open({
        'app.banner': { id, type: 'info', content: 'Prepared new banner' },
    });
    expect(page).toBe(staffPage);
    // Wait for setup so visibility is decided by the stored id, not by timing.
    await expect.poll(() => bannerState(page)).toEqual({ setup: true, id });
    expect(
        await page.evaluate(() => localStorage.getItem('PLACE.last_banner')),
    ).toBe(previous);
    const box = bannerBox(page);
    await expect(box).toHaveCount(1);
    await expect(box).toBeVisible();
    await expect(box).toContainText('Prepared new banner');
    await expect(box).toHaveClass(/\bbg-info\b/);
});
