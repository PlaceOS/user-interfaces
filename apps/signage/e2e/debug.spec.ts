import { expect, test } from '@playwright/test';
import {
    LOAD_TIMEOUT,
    MOCK_SYSTEM_ID,
    SIGNAGE_SYSTEM_URL,
    clickPlayPause,
    navigateWithConfig,
    openTimeControls,
    waitForDebugControls,
    waitForMediaPlayer,
} from './test-utils';

const SIGNAGE_URL = SIGNAGE_SYSTEM_URL(MOCK_SYSTEM_ID);
const SIGNAGE_DEBUG_URL = `${SIGNAGE_URL}?debug=true`;

test.describe('US-SIG-022: Enable Debug Mode', () => {
    test('enables debug mode from the URL and stores the debug state', async ({
        page,
    }) => {
        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForDebugControls(page);

        await expect(page.locator('media-controls')).toBeVisible();
        await expect(page.locator('time-controls')).toBeVisible();
        await expect(page.locator('playlist-display')).toBeVisible();
        await expect(page.locator('signage-panel')).toContainText(
            'media-image',
        );

        const debug_state = await page.evaluate(() =>
            sessionStorage.getItem('SIGNAGE.debug'),
        );
        expect(debug_state).toBe('true');
    });

    test('restores stored debug mode without a debug query parameter', async ({
        page,
    }) => {
        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForDebugControls(page);

        await page.goto(`${SIGNAGE_URL}?mock=true`);

        await expect(page.locator('media-controls')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('debug=false disables debug controls and stores the disabled state', async ({
        page,
    }) => {
        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForDebugControls(page);

        await page.goto(`${SIGNAGE_URL}?debug=false&mock=true`);

        await expect(page.locator('media-controls')).toBeHidden({
            timeout: LOAD_TIMEOUT,
        });
        const debug_state = await page.evaluate(() =>
            sessionStorage.getItem('SIGNAGE.debug'),
        );
        expect(debug_state).toBe('false');
    });
});

test.describe('US-SIG-023: Override Time in Debug', () => {
    test('opens the time override controls with speed, clear, and save actions', async ({
        page,
    }) => {
        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForMediaPlayer(page);

        await openTimeControls(page);

        await expect(page.locator('text=Debug Time')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(page.locator('text=Progression')).toBeVisible();
        await expect(page.locator('button:has-text("16x")')).toBeVisible();
        await expect(
            page.locator('button[btn]:has-text("Clear")'),
        ).toBeVisible();
        await expect(
            page.locator('button[btn]:has-text("Save")'),
        ).toBeVisible();
    });
});

test.describe('US-SIG-024: Pause and Resume from a Parent Frame', () => {
    test('pauses and resumes playback from postMessage payloads', async ({
        page,
    }) => {
        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForDebugControls(page);

        await page.evaluate(() => {
            window.postMessage({ type: 'signage:pause' }, '*');
        });
        await expect(
            page.locator('media-controls icon:has-text("play_arrow")'),
        ).toBeVisible({ timeout: LOAD_TIMEOUT });

        await page.evaluate(() => {
            window.postMessage({ type: 'ignored' }, '*');
        });
        await expect(
            page.locator('media-controls icon:has-text("play_arrow")'),
        ).toBeVisible();

        await page.evaluate(() => {
            window.postMessage({ type: 'signage:resume' }, '*');
        });
        await expect(
            page.locator('media-controls icon:has-text("pause")'),
        ).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('play and pause controls preserve a usable player state', async ({
        page,
    }) => {
        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForDebugControls(page);

        await clickPlayPause(page);
        await expect(
            page.locator(
                'media-controls icon:has-text("play_arrow"), media-controls icon:has-text("pause")',
            ),
        ).toBeVisible();
    });
});
