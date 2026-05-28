import { expect, test } from '@playwright/test';
import {
    LOAD_TIMEOUT,
    MOCK_SYSTEM_ID,
    SIGNAGE_SYSTEM_URL,
    STORE_DISPLAY_DETAILS_KEY,
    TEST_IMAGE_URL,
    TEST_WEBPAGE_URL,
    clickSkipNext,
    navigateWithConfig,
    waitForDebugControls,
    waitForMediaPlayer,
    waitForSignagePage,
} from './test-utils';

const SIGNAGE_DEBUG_URL = `${SIGNAGE_SYSTEM_URL(MOCK_SYSTEM_ID)}?debug=true`;

test.describe('US-SIG-004: Redirect Uninitialised Displays', () => {
    test('starts playback when a display ID is supplied', async ({ page }) => {
        await navigateWithConfig(page, SIGNAGE_SYSTEM_URL(MOCK_SYSTEM_ID));

        await waitForSignagePage(page);
        await expect(page.locator('media-player')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(page).toHaveURL(/#\/signage\/display-1/);
    });

    test('redirects the signage root to bootstrap after the setup timeout', async ({
        page,
    }) => {
        await page.goto('/?mock=true');
        await page.evaluate(() => {
            localStorage.removeItem('PlaceOS.SIGNAGE.display');
            localStorage.removeItem('PlaceOS.SIGNAGE.display_details');
        });

        await page.goto('/#/signage?mock=true');

        await expect(page).toHaveURL(/#\/bootstrap/, {
            timeout: LOAD_TIMEOUT,
        });
    });
});

test.describe('US-SIG-005: Load Display Configuration', () => {
    test('uses the active display configuration and caches the latest details', async ({
        page,
    }) => {
        await navigateWithConfig(page, SIGNAGE_SYSTEM_URL(MOCK_SYSTEM_ID));
        await waitForMediaPlayer(page);

        const display_details = await page.evaluate((key) => {
            return JSON.parse(localStorage.getItem(key) || '{}');
        }, STORE_DISPLAY_DETAILS_KEY);

        expect(display_details.id).toBe(MOCK_SYSTEM_ID);
        expect(display_details.playlist_mappings[MOCK_SYSTEM_ID]).toContain(
            'base-playlist',
        );
    });
});

test.describe('US-SIG-007: Display Image Media', () => {
    test('renders image media centred with object-contain sizing', async ({
        page,
    }) => {
        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForMediaPlayer(page);

        const image = page.locator('media-player img:not(.hidden)').first();
        await expect(image).toBeVisible({ timeout: LOAD_TIMEOUT });

        await expect(image).toHaveAttribute('src', /^blob:/);
        const image_style = await image.evaluate((element) => {
            const style = window.getComputedStyle(element);
            return {
                fit: style.objectFit,
                position: style.objectPosition,
            };
        });
        expect(image_style).toEqual({ fit: 'contain', position: '50% 50%' });
    });

    test('requests the configured image URL for local caching', async ({
        page,
    }) => {
        const image_request = page.waitForRequest((request) =>
            request.url().endsWith(TEST_IMAGE_URL),
        );

        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForMediaPlayer(page);

        await expect(image_request).resolves.toBeTruthy();
    });
});

test.describe('US-SIG-008: Play Video Media', () => {
    test('exposes video playback and debug mute controls', async ({ page }) => {
        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForDebugControls(page);

        await expect(page.locator('media-player video').first()).toBeAttached();
        await expect(
            page.locator(
                'media-controls button:has(icon:has-text("volume_up")), media-controls button:has(icon:has-text("volume_off"))',
            ),
        ).toBeVisible();
    });
});

test.describe('US-SIG-009: Display Webpage Media', () => {
    test('renders webpage media in an iframe without caching the webpage URL', async ({
        page,
    }) => {
        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForDebugControls(page);

        await clickSkipNext(page);
        const iframe = page.locator('media-player iframe:not(.hidden)').first();
        await expect(iframe).toBeVisible({ timeout: LOAD_TIMEOUT });
        await expect(iframe).toHaveAttribute(
            'src',
            new RegExp(TEST_WEBPAGE_URL),
        );

        const cached_urls = await page.evaluate(() => {
            return JSON.parse(
                localStorage.getItem('PlaceOS.SIGNAGE.cached_files') || '[]',
            ).map((item: { url: string }) => item.url);
        });
        expect(cached_urls).not.toContain(TEST_WEBPAGE_URL);
    });
});

test.describe('US-SIG-011: Animate Media Transitions', () => {
    test('shows transition progress when moving between playlist items', async ({
        page,
    }) => {
        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForDebugControls(page);

        await clickSkipNext(page);

        const progress = page.locator('media-controls mat-progress-bar');
        await expect(progress).toBeVisible({ timeout: LOAD_TIMEOUT });
    });
});
