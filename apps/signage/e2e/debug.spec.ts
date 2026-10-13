import { expect, test } from '@playwright/test';
import {
    LOAD_TIMEOUT,
    MOCK_SYSTEM_ID,
    SIGNAGE_SYSTEM_URL,
    clickMuteToggle,
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

    test('stores mute state for the browser session', async ({ page }) => {
        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForDebugControls(page);

        await clickMuteToggle(page);

        const muted_state = await page.evaluate(() =>
            sessionStorage.getItem('SIGNAGE.muted'),
        );
        expect(muted_state).toBe('false');
    });

    test('edits and stores the debug overlay layout', async ({ page }) => {
        await navigateWithConfig(page, SIGNAGE_DEBUG_URL);
        await waitForDebugControls(page);

        await page.getByRole('button', { name: 'Edit debug layout' }).click();
        const layout_grid = page.getByTestId('debug-layout-grid');
        await expect(layout_grid).toBeVisible();
        await expect(layout_grid).toHaveCSS(
            'background-size',
            '2.5% 2.5%, 2.5% 2.5%',
        );
        const inactive_controls = page
            .locator('[data-overlay-id="player-playback"] [inert]')
            .first();
        await expect(inactive_controls).toHaveClass(/pointer-events-none/);
        await expect(inactive_controls).toHaveCSS('pointer-events', 'none');
        await expect(inactive_controls).toHaveCSS('opacity', '0.8');
        await expect(page.locator('media-player').first()).toHaveCSS(
            'z-index',
            'auto',
        );
        await expect(
            page.locator('[data-overlay-id="player-playback"]'),
        ).toHaveCSS('z-index', '20');
        await expect(layout_grid).toHaveCSS('z-index', '10');

        const time_overlay = page.locator('[data-overlay-id="player-time"]');
        const initial_bounds = await time_overlay.boundingBox();
        if (!initial_bounds) throw new Error('Time overlay is not visible');
        const time_hide_bounds = await page
            .getByRole('button', { name: 'Hide debug time' })
            .boundingBox();
        if (!time_hide_bounds)
            throw new Error('Time hide control is not visible');
        expect(time_hide_bounds.y).toBeGreaterThan(
            initial_bounds.y + initial_bounds.height,
        );
        expect(time_hide_bounds.x + time_hide_bounds.width).toBeCloseTo(
            initial_bounds.x + initial_bounds.width,
            0,
        );
        const playback_bounds = await page
            .locator('[data-overlay-id="player-playback"]')
            .boundingBox();
        const playback_hide_bounds = await page
            .getByRole('button', { name: 'Hide playback controls' })
            .boundingBox();
        if (!playback_bounds || !playback_hide_bounds)
            throw new Error('Playback layout controls are not visible');
        expect(
            playback_hide_bounds.y + playback_hide_bounds.height,
        ).toBeLessThan(playback_bounds.y);
        expect(playback_hide_bounds.x + playback_hide_bounds.width).toBeCloseTo(
            playback_bounds.x + playback_bounds.width,
            0,
        );
        const origin_handle = page.getByRole('button', {
            name: 'Move debug time origin',
        });
        const origin_bounds = await origin_handle.boundingBox();
        if (!origin_bounds) throw new Error('Time origin is not visible');
        await page.mouse.move(
            origin_bounds.x + origin_bounds.width / 2,
            origin_bounds.y + origin_bounds.height / 2,
        );
        await page.mouse.down();
        await page.mouse.move(
            origin_bounds.x + origin_bounds.width / 2 + 60,
            origin_bounds.y + origin_bounds.height / 2 + 20,
            { steps: 10 },
        );
        await page.mouse.up();
        const origin_moved_bounds = await time_overlay.boundingBox();
        if (!origin_moved_bounds)
            throw new Error('Time overlay is not visible');
        expect(origin_moved_bounds.x).toBeCloseTo(initial_bounds.x, 0);
        expect(origin_moved_bounds.y).toBeCloseTo(initial_bounds.y, 0);

        await page.mouse.move(
            origin_moved_bounds.x + 20,
            origin_moved_bounds.y + origin_moved_bounds.height - 10,
        );
        await page.keyboard.down('Shift');
        await page.mouse.down();
        await page.mouse.move(
            origin_moved_bounds.x + 103,
            origin_moved_bounds.y + origin_moved_bounds.height + 48,
            { steps: 10 },
        );
        await page.mouse.up();
        await page.keyboard.up('Shift');
        const moved_bounds = await time_overlay.boundingBox();
        if (!moved_bounds) throw new Error('Time overlay is not visible');
        expect(moved_bounds.x).toBeGreaterThan(origin_moved_bounds.x + 40);
        expect(moved_bounds.y).toBeGreaterThan(origin_moved_bounds.y + 20);
        const stored_layout = await page.evaluate(() => {
            const value = localStorage.getItem(
                'SIGNAGE.debug-overlay.player-time',
            );
            if (!value) throw new Error('Time layout was not stored');
            return JSON.parse(value);
        });
        expect(stored_layout.origin.x).toBeGreaterThan(0.1);
        expect(stored_layout.origin.y).toBeGreaterThan(0.1);
        expect(stored_layout.position.x * 40).toBeCloseTo(
            Math.round(stored_layout.position.x * 40),
            10,
        );
        expect(stored_layout.position.y * 40).toBeCloseTo(
            Math.round(stored_layout.position.y * 40),
            10,
        );

        await page
            .getByRole('button', { name: 'Hide playback controls' })
            .click();
        await expect(page.locator('media-controls')).toBeHidden();
        await expect(
            page.getByRole('button', { name: 'Show playback controls' }),
        ).toBeVisible();
        await page
            .getByRole('button', { name: 'Finish editing debug layout' })
            .click();
        await expect(page.getByTestId('debug-layout-grid')).toBeHidden();
        await expect(
            page.getByRole('button', { name: 'Show playback controls' }),
        ).toBeHidden();

        await page.reload();

        await page.getByRole('button', { name: 'Edit debug layout' }).click();
        await expect(
            page.getByRole('button', { name: 'Show playback controls' }),
        ).toBeVisible({ timeout: LOAD_TIMEOUT });
        await expect(page.locator('media-controls')).toBeHidden();

        await page.evaluate(() =>
            localStorage.setItem('SIGNAGE.debug-overlay.stale', '{}'),
        );
        await page.getByRole('button', { name: 'Reset debug layout' }).click();
        await expect(page.locator('media-controls')).toBeVisible();
        const reset_bounds = await time_overlay.boundingBox();
        if (!reset_bounds) throw new Error('Time overlay is not visible');
        expect(reset_bounds.x).toBeCloseTo(initial_bounds.x, 0);
        expect(reset_bounds.y).toBeCloseTo(initial_bounds.y, 0);
        expect(
            await page.evaluate(() =>
                Object.keys(localStorage).filter((key) =>
                    key.startsWith('SIGNAGE.debug-overlay.'),
                ),
            ),
        ).toEqual([]);

        await page
            .getByRole('button', { name: 'Finish editing debug layout' })
            .click();
        await expect(page.locator('media-controls')).toBeVisible();
        await expect(page.locator('[data-overlay-id] [inert]')).toHaveCount(0);

        await clickMuteToggle(page);
        expect(
            await page.evaluate(() => sessionStorage.getItem('SIGNAGE.muted')),
        ).toBe('false');
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
            page.locator('button:has(icon:has-text("delete_sweep"))'),
        ).toBeVisible();
        await expect(
            page.locator('button:has(icon:has-text("save"))'),
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
