import { Page } from '@playwright/test';

// Timeout constants
export const LOAD_TIMEOUT = 30000;
export const ACTION_TIMEOUT = 10000;

// URL constants for signage app routes
export const BOOTSTRAP_URL = '/#/bootstrap';
export const SIGNAGE_URL = '/#/signage';
export const SIGNAGE_SYSTEM_URL = (system_id: string) =>
    `/#/signage/${system_id}`;
export const UNAUTHORISED_URL = '/#/unauthorised';

// Mock system IDs for testing
export const MOCK_SYSTEM_ID = 'sys-signage-01';
export const MOCK_BUILDING_ID = 'bld-01';

// LocalStorage keys (must match the app's STORE_PREFIX)
export const STORE_PREFIX = 'PlaceOS.SIGNAGE';
export const STORE_DISPLAY_KEY = `${STORE_PREFIX}.display`;
export const STORE_BUILDING_KEY = `${STORE_PREFIX}.building`;

/**
 * Initialize the app with mock mode enabled
 */
export async function initializeAppWithMock(page: Page): Promise<void> {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    await page
        .evaluate(() => {
            localStorage.setItem('mock', 'true');
        })
        .catch(() => {});

    await page.goto('/?mock=true');
    await page.waitForLoadState('domcontentloaded');

    await page
        .evaluate(() => {
            localStorage.setItem('mock', 'true');
        })
        .catch(() => {});

    await page
        .locator('app-root')
        .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT });

    await waitForLoadingComplete(page);
}

/**
 * Navigate to a URL with mock mode enabled
 */
export async function navigateWithMock(
    page: Page,
    url: string
): Promise<void> {
    await initializeAppWithMock(page);
    const full_url = url.includes('?') ? `${url}&mock=true` : `${url}?mock=true`;
    await page.goto(full_url);
    await waitForLoadingComplete(page);
}

/**
 * Navigate to signage display with pre-configured localStorage
 */
export async function navigateWithConfig(
    page: Page,
    url: string,
    config?: { building_id?: string; system_id?: string }
): Promise<void> {
    await page.goto('/?mock=true');
    await page.waitForTimeout(500);

    const building_id = config?.building_id || MOCK_BUILDING_ID;
    const system_id = config?.system_id || MOCK_SYSTEM_ID;

    await page.evaluate(
        ({ building_id, system_id, display_key, building_key }) => {
            localStorage.setItem('mock', 'true');
            if (building_id) {
                localStorage.setItem(building_key, building_id);
            }
            if (system_id) {
                localStorage.setItem(display_key, system_id);
            }
        },
        {
            building_id,
            system_id,
            display_key: STORE_DISPLAY_KEY,
            building_key: STORE_BUILDING_KEY,
        }
    );

    const full_url = url.includes('?') ? `${url}&mock=true` : `${url}?mock=true`;
    await page.goto(full_url);
    await page.waitForTimeout(500);
    await waitForLoadingComplete(page);
}

/**
 * Wait for any loading overlay to disappear
 */
export async function waitForLoadingComplete(page: Page): Promise<void> {
    // Wait for global-loading to disappear (blocks interactions)
    await Promise.race([
        page
            .locator('global-loading')
            .waitFor({ state: 'hidden', timeout: LOAD_TIMEOUT }),
        page.waitForTimeout(10000),
    ]).catch(() => {});

    // Also wait for loader/loading attributes
    await Promise.race([
        page
            .locator('[loader]')
            .waitFor({ state: 'detached', timeout: LOAD_TIMEOUT }),
        page
            .locator('[loading]')
            .waitFor({ state: 'detached', timeout: LOAD_TIMEOUT }),
        page.waitForTimeout(5000),
    ]).catch(() => {});
}

/**
 * Wait for the app root to be ready
 */
export async function waitForAppReady(page: Page): Promise<void> {
    await page
        .locator('app-root')
        .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT });
    await page.waitForLoadState('networkidle');
}

/**
 * Wait for the bootstrap page to be ready
 */
export async function waitForBootstrapPage(page: Page): Promise<void> {
    await waitForLoadingComplete(page);

    // Wait for the bootstrap component to exist
    await page
        .locator('[bootstrap]')
        .waitFor({ state: 'attached', timeout: LOAD_TIMEOUT });

    // Wait for the bootstrap form content to be visible (not the loading spinner)
    // The bootstrap component shows a mat-spinner while loading, then shows the form
    await Promise.race([
        page
            .locator('[bootstrap] mat-form-field')
            .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT }),
        page
            .locator('[bootstrap] button[btn]')
            .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT }),
        page.waitForTimeout(10000),
    ]).catch(() => {});

    // Additional wait for the form to be interactive
    await page.waitForTimeout(500);
}

/**
 * Wait for the signage display page to be ready
 */
export async function waitForSignagePage(page: Page): Promise<void> {
    await waitForLoadingComplete(page);
    await page
        .locator('signage-panel')
        .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT });
}

/**
 * Wait for the media player component to be visible
 */
export async function waitForMediaPlayer(page: Page): Promise<void> {
    await waitForLoadingComplete(page);
    await page
        .locator('media-player')
        .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT });
}

/**
 * Wait for debug controls to be visible (requires ?debug=true)
 */
export async function waitForDebugControls(page: Page): Promise<void> {
    await waitForLoadingComplete(page);
    await page
        .locator('media-controls')
        .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT });
}

/**
 * Select a display from the bootstrap dropdown
 */
export async function selectDisplay(
    page: Page,
    display_name?: string
): Promise<void> {
    const select = page.locator('mat-select').first();
    await select.click();
    await page.waitForTimeout(200);

    if (display_name) {
        const option = page.locator(`mat-option:has-text("${display_name}")`);
        await option.click();
    } else {
        // Select first available option
        const option = page.locator('mat-option').first();
        await option.click();
    }
    await page.waitForTimeout(200);
}

/**
 * Click the bootstrap/start button to initialize the display
 */
export async function clickBootstrapButton(page: Page): Promise<void> {
    // The button uses translation key COMMON.BOOTSTRAP_SUBMIT which translates to "Finish setup"
    // Use the button[btn] selector as a fallback
    const button = page.locator(
        '[bootstrap] button[btn], button:has-text("Finish setup"), button:has-text("Bootstrap")'
    ).first();
    await button.click();
    await page.waitForTimeout(300);
}

/**
 * Enable debug mode by navigating with debug=true parameter
 */
export async function enableDebugMode(
    page: Page,
    url: string
): Promise<void> {
    const debug_url = url.includes('?')
        ? `${url}&debug=true&mock=true`
        : `${url}?debug=true&mock=true`;
    await page.goto(debug_url);
    await waitForLoadingComplete(page);
}

/**
 * Click play/pause button in media controls
 */
export async function clickPlayPause(page: Page): Promise<void> {
    const button = page.locator(
        'media-controls button:has(icon:has-text("play_arrow")), media-controls button:has(icon:has-text("pause"))'
    );
    await button.click();
    await page.waitForTimeout(300);
}

/**
 * Click skip next button in media controls
 */
export async function clickSkipNext(page: Page): Promise<void> {
    const button = page.locator(
        'media-controls button:has(icon:has-text("skip_next"))'
    );
    await button.click();
    await page.waitForTimeout(300);
}

/**
 * Click skip previous button in media controls
 */
export async function clickSkipPrevious(page: Page): Promise<void> {
    const button = page.locator(
        'media-controls button:has(icon:has-text("skip_previous"))'
    );
    await button.click();
    await page.waitForTimeout(300);
}

/**
 * Click mute/unmute button in media controls
 */
export async function clickMuteToggle(page: Page): Promise<void> {
    const button = page.locator(
        'media-controls button:has(icon:has-text("volume_up")), media-controls button:has(icon:has-text("volume_off"))'
    );
    await button.click();
    await page.waitForTimeout(300);
}

/**
 * Click loop toggle button in media controls
 */
export async function clickLoopToggle(page: Page): Promise<void> {
    const button = page.locator(
        'media-controls button:has(icon:has-text("repeat"))'
    );
    await button.click();
    await page.waitForTimeout(300);
}

/**
 * Click shuffle toggle button in media controls
 */
export async function clickShuffleToggle(page: Page): Promise<void> {
    const button = page.locator(
        'media-controls button:has(icon:has-text("shuffle"))'
    );
    await button.click();
    await page.waitForTimeout(300);
}

/**
 * Check if media player is currently playing
 */
export async function isMediaPlaying(page: Page): Promise<boolean> {
    const pause_button = page.locator(
        'media-controls button:has(icon:has-text("pause"))'
    );
    return pause_button.isVisible().catch(() => false);
}

/**
 * Check if playlist sidebar is visible
 */
export async function isPlaylistVisible(page: Page): Promise<boolean> {
    const playlist = page.locator('playlist-display');
    return playlist.isVisible().catch(() => false);
}

/**
 * Get the count of items in the playlist display
 */
export async function getPlaylistItemCount(page: Page): Promise<number> {
    const items = page.locator('playlist-display [playlist-item]');
    return items.count();
}

/**
 * Click on a specific playlist item by index
 */
export async function clickPlaylistItem(
    page: Page,
    index: number
): Promise<void> {
    const item = page.locator('playlist-display [playlist-item]').nth(index);
    await item.click();
    await page.waitForTimeout(300);
}

/**
 * Open time controls modal in debug mode
 */
export async function openTimeControls(page: Page): Promise<void> {
    const button = page.locator(
        'time-controls button:has(icon:has-text("schedule"))'
    );
    await button.click();
    await page.waitForTimeout(300);
}

/**
 * Check if time override is active
 */
export async function isTimeOverrideActive(page: Page): Promise<boolean> {
    const indicator = page.locator('time-controls .time-override-active');
    return indicator.isVisible().catch(() => false);
}

/**
 * Clear localStorage configuration
 */
export async function clearLocalStorage(page: Page): Promise<void> {
    await page.evaluate(
        ({ display_key, building_key }) => {
            localStorage.removeItem(building_key);
            localStorage.removeItem(display_key);
        },
        { display_key: STORE_DISPLAY_KEY, building_key: STORE_BUILDING_KEY }
    );
}

/**
 * Get current media type being displayed
 */
export async function getCurrentMediaType(
    page: Page
): Promise<'image' | 'video' | 'iframe' | 'unknown'> {
    const image = page.locator('media-player img');
    const video = page.locator('media-player video');
    const iframe = page.locator('media-player iframe');

    if (await image.isVisible().catch(() => false)) return 'image';
    if (await video.isVisible().catch(() => false)) return 'video';
    if (await iframe.isVisible().catch(() => false)) return 'iframe';
    return 'unknown';
}

/**
 * Check if override playlist indicator is visible
 */
export async function isOverrideActive(page: Page): Promise<boolean> {
    const indicator = page.locator('[override-indicator], .override-active');
    return indicator.isVisible().catch(() => false);
}

/**
 * Close override playlist (if close button is visible)
 */
export async function closeOverridePlaylist(page: Page): Promise<void> {
    const close_button = page.locator(
        'button:has(icon:has-text("close")):near([override-indicator])'
    );
    const is_visible = await close_button.isVisible().catch(() => false);
    if (is_visible) {
        await close_button.click();
        await page.waitForTimeout(300);
    }
}
