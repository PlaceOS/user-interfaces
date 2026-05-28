import { expect, test } from '@playwright/test';
import {
    LOAD_TIMEOUT,
    MOCK_SYSTEM_ID,
    SIGNAGE_SYSTEM_URL,
    STORE_CACHED_FILES_KEY,
    TEST_IMAGE_URL,
    UNAUTHORISED_URL,
    clearLocalStorage,
    navigateWithConfig,
    navigateWithMock,
    waitForMediaPlayer,
} from './test-utils';

const SIGNAGE_DEBUG_URL = `${SIGNAGE_SYSTEM_URL(MOCK_SYSTEM_ID)}?debug=true`;

test.describe('US-SIG-025: Cache Media Locally', () => {
    test('stores non-webpage media in the signage cache metadata', async ({
        page,
    }) => {
        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForMediaPlayer(page);

        await expect
            .poll(async () => {
                return page.evaluate((key) => {
                    return JSON.parse(localStorage.getItem(key) || '[]').map(
                        (item: { url: string }) => item.url,
                    );
                }, STORE_CACHED_FILES_KEY);
            })
            .toContain(TEST_IMAGE_URL);
    });
});

test.describe('US-SIG-026: Maintain the Media Cache', () => {
    test('keeps playback stable when cached media is invalidated by a refresh', async ({
        page,
    }) => {
        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForMediaPlayer(page);

        await page.evaluate(
            (key) => localStorage.setItem(key, '[]'),
            STORE_CACHED_FILES_KEY,
        );
        await page.reload();

        await expect(page.locator('media-player')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});

test.describe('US-SIG-030: Handle Missing or Invalid Media', () => {
    test('remains stable when the active display ID is invalid', async ({
        page,
    }) => {
        await navigateWithConfig(
            page,
            '/#/signage/invalid-display?debug=true',
            {
                system_id: 'invalid-display',
            },
        );

        await expect(page.locator('app-root')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(page).toHaveURL(/#\/signage\/invalid-display/);
    });

    test('retries instead of crashing when no display has been configured', async ({
        page,
    }) => {
        await page.goto('/?mock=true');
        await clearLocalStorage(page);

        await page.goto('/#/signage?mock=true');

        await expect(page.locator('app-root')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(page).toHaveURL(/#\/bootstrap/, {
            timeout: LOAD_TIMEOUT,
        });
    });
});

test.describe('US-SIG-031: Protect Signage Routes', () => {
    test('renders the unauthorised route', async ({ page }) => {
        await navigateWithMock(page, UNAUTHORISED_URL);

        await expect(page.locator('app-root')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('redirects unknown routes to bootstrap', async ({ page }) => {
        await navigateWithMock(page, '/#/missing-route');

        await expect(page).toHaveURL(/#\/bootstrap/, {
            timeout: LOAD_TIMEOUT,
        });
    });
});
