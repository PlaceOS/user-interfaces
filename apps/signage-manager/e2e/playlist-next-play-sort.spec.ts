import { expect, Page, test } from '@playwright/test';
import { navigateWithMock } from './test-utils';

// The mock distribution playlist schedules its items relative to load time
const DISTRIBUTION_URL = '/#/playlists/playlist-distribution';
const SAVED_ORDER = [
    'Weekly Office Updates', // In 3 hours
    'Weekly Office Updates v2', // No schedules
    "Today's Meetings", // In 1 hour
    "Today's Meetings v2", // Playing now
    'Building Directory', // Played 2 days ago
];
const NEXT_PLAY_ORDER = [
    "Today's Meetings v2",
    "Today's Meetings",
    'Weekly Office Updates',
    'Weekly Office Updates v2',
    'Building Directory',
];

function itemNames(page: Page) {
    return page.locator('playlist-items [role="listitem"] .truncate.text-sm');
}

function sortButton(page: Page) {
    return page
        .locator('playlist-items')
        .getByRole('button', { name: /sort by next play/i });
}

async function openDistributionPlaylist(page: Page) {
    await page.setViewportSize({ width: 1400, height: 900 });
    await navigateWithMock(page, DISTRIBUTION_URL);
    await expect(itemNames(page)).toHaveText(SAVED_ORDER);
}

test.describe('US-SGM-007: Sort Distribution Items by Next Play', () => {
    test('shows the sort button on the left of the expand all button', async ({
        page,
    }) => {
        await openDistributionPlaylist(page);

        const sort = sortButton(page);
        const expand = page
            .locator('playlist-items')
            .getByRole('button', { name: /collapse all|expand all/i });
        await expect(sort).toBeVisible();
        await expect(sort).toHaveAttribute('aria-pressed', 'false');
        const sort_box = await sort.boundingBox();
        const expand_box = await expand.boundingBox();
        expect(sort_box!.x + sort_box!.width).toBeLessThan(expand_box!.x);
        expect(Math.abs(sort_box!.y - expand_box!.y)).toBeLessThan(8);

        await sort.hover();
        await expect(
            page.locator('.mat-mdc-tooltip-surface').filter({
                hasText: /toggle between order added and next playing/i,
            }),
        ).toBeVisible();
    });

    test('orders items by next play and returns to the saved order', async ({
        page,
    }) => {
        await openDistributionPlaylist(page);

        await sortButton(page).click();
        await expect(sortButton(page)).toHaveAttribute('aria-pressed', 'true');
        await expect(itemNames(page)).toHaveText(NEXT_PLAY_ORDER);

        await sortButton(page).click();
        await expect(sortButton(page)).toHaveAttribute('aria-pressed', 'false');
        await expect(itemNames(page)).toHaveText(SAVED_ORDER);
    });

    test('remembers the sort across sessions and opens distribution playlists sorted', async ({
        page,
    }) => {
        await openDistributionPlaylist(page);
        await sortButton(page).click();
        await expect(itemNames(page)).toHaveText(NEXT_PLAY_ORDER);

        await page.reload();
        await expect(sortButton(page)).toHaveAttribute('aria-pressed', 'true');
        await expect(itemNames(page)).toHaveText(NEXT_PLAY_ORDER);

        await sortButton(page).click();
        await expect(itemNames(page)).toHaveText(SAVED_ORDER);
        await page.reload();
        await expect(sortButton(page)).toHaveAttribute('aria-pressed', 'false');
        await expect(itemNames(page)).toHaveText(SAVED_ORDER);
    });

    test('keeps selection on the same item when the sort changes', async ({
        page,
    }) => {
        await openDistributionPlaylist(page);
        await sortButton(page).click();
        await expect(itemNames(page)).toHaveText(NEXT_PLAY_ORDER);

        await page
            .getByRole('checkbox', { name: /today's meetings v2/i })
            .check();
        await expect(page.getByText(/1 selected/i)).toBeVisible();

        await sortButton(page).click();
        await expect(itemNames(page)).toHaveText(SAVED_ORDER);
        await expect(
            page.getByRole('checkbox', { name: /today's meetings v2/i }),
        ).toBeChecked();
        await expect(
            page.getByRole('checkbox', { name: /^select today's meetings$/i }),
        ).not.toBeChecked();
    });

    test('does not show the sort for playlists that are not distribution playlists', async ({
        page,
    }) => {
        await page.setViewportSize({ width: 1400, height: 900 });
        await navigateWithMock(page, '/#/playlists/playlist-001');
        await expect(
            page.locator('playlist-items [role="listitem"]').first(),
        ).toBeVisible();

        await expect(sortButton(page)).toHaveCount(0);
    });
});
