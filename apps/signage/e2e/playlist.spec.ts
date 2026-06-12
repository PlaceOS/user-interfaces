import { expect, test } from '@playwright/test';
import {
    LOAD_TIMEOUT,
    MOCK_SYSTEM_ID,
    SIGNAGE_SYSTEM_URL,
    clickLoopToggle,
    clickPlaylistItem,
    clickShuffleToggle,
    clickSkipNext,
    getPlaylistItemCount,
    navigateWithConfig,
    waitForDebugControls,
    waitForMediaPlayer,
} from './test-utils';

const SIGNAGE_DEBUG_URL = `${SIGNAGE_SYSTEM_URL(MOCK_SYSTEM_ID)}?debug=true`;

test.describe('US-SIG-012: Cycle Through Playlist Items', () => {
    test('starts at the first valid media item and can advance to the next item', async ({
        page,
    }) => {
        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForDebugControls(page);

        await expect(
            page.locator('playlist-display button').first().locator('icon'),
        ).toContainText('play_arrow');

        await clickSkipNext(page);

        await expect(
            page.locator('playlist-display button').nth(1).locator('icon'),
        ).toContainText('play_arrow', { timeout: LOAD_TIMEOUT });
    });
});

test.describe('US-SIG-013: Control Loop Mode in Debug', () => {
    test('cycles loop modes through ALL, ONE, and NONE', async ({ page }) => {
        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForDebugControls(page);

        const loop_icon = page
            .locator('media-controls button')
            .nth(4)
            .locator('icon');

        await expect(loop_icon).toContainText('repeat');
        await clickLoopToggle(page);
        await expect(loop_icon).toContainText('repeat_one');
        await clickLoopToggle(page);
        await expect(loop_icon).toContainText('repeat');
        await expect(loop_icon).toHaveClass(/opacity-30/);
        await clickLoopToggle(page);
        await expect(loop_icon).toContainText('repeat');
        await expect(loop_icon).not.toHaveClass(/opacity-30/);
    });
});

test.describe('US-SIG-014: Shuffle Playlist in Debug', () => {
    test('toggles shuffle state visually', async ({ page }) => {
        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForDebugControls(page);

        const shuffle_icon = page
            .locator('media-controls button')
            .nth(5)
            .locator('icon');

        await expect(shuffle_icon).toHaveClass(/opacity-30/);
        await clickShuffleToggle(page);
        await expect(shuffle_icon).not.toHaveClass(/opacity-30/);
        await clickShuffleToggle(page);
        await expect(shuffle_icon).toHaveClass(/opacity-30/);
    });
});

test.describe('US-SIG-015: Use Manual Playback Controls', () => {
    test('shows expected playback controls and progress indicator in debug mode', async ({
        page,
    }) => {
        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForDebugControls(page);

        await expect(
            page.locator('media-controls icon:has-text("skip_previous")'),
        ).toBeVisible();
        await expect(
            page.locator(
                'media-controls icon:has-text("pause"), media-controls icon:has-text("play_arrow")',
            ),
        ).toBeVisible();
        await expect(
            page.locator('media-controls icon:has-text("skip_next")'),
        ).toBeVisible();
        await expect(
            page.locator(
                'media-controls icon:has-text("volume_up"), media-controls icon:has-text("volume_off")',
            ),
        ).toBeVisible();
        await expect(
            page.locator('media-controls media-progress-bar'),
        ).toBeVisible();
    });
});

test.describe('US-SIG-016: View and Select Playlist Items', () => {
    test('shows playlist item names, playlist names, durations, and total count', async ({
        page,
    }) => {
        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForMediaPlayer(page);

        const playlist = page.locator('playlist-display');
        await expect(playlist).toBeVisible({ timeout: LOAD_TIMEOUT });
        await expect(playlist).toContainText('Welcome Image');
        await expect(playlist).toContainText('Base Playlist');
        await expect(playlist).toContainText('Live Webpage');
        await expect(playlist).toContainText('Zone Playlist');
        expect(await getPlaylistItemCount(page)).toBe(3);
    });

    test('highlights the current item and jumps to a selected valid item', async ({
        page,
    }) => {
        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForMediaPlayer(page);

        await expect(
            page.locator('playlist-display button').first().locator('icon'),
        ).toContainText('play_arrow');

        await clickPlaylistItem(page, 1);

        await expect(page.locator('signage-panel')).toContainText(
            'media-webpage',
            { timeout: LOAD_TIMEOUT },
        );
        await expect(
            page.locator('playlist-display button').nth(1).locator('icon'),
        ).toContainText('play_arrow');
    });

    test('toggles the playlist sidebar with the queue button', async ({
        page,
    }) => {
        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForDebugControls(page);

        await expect(page.locator('playlist-display')).toBeVisible();

        await page.locator('media-player > div > button').click();
        await expect(page.locator('playlist-display')).toBeHidden();

        await page.locator('media-player > div > button').click();
        await expect(page.locator('playlist-display')).toBeVisible();
    });
});
