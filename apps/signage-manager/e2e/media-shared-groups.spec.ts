import { expect, Page, test } from '@playwright/test';
import { MEDIA_URL, navigateWithMock } from './test-utils';

const BOTH_GROUPS = ['Facilities Signage', 'Marketing Signage'];

async function openListView(page: Page, width: number, height = 900) {
    await page.setViewportSize({ width, height });
    await navigateWithMock(page, MEDIA_URL);
    await page.getByRole('button', { name: /list view/i }).click();
    await expect(mediaRows(page).first()).toBeVisible();
}

function mediaRows(page: Page) {
    return page.locator('#media-list [role="listitem"]');
}

/** Row for the media item with exactly this name */
function mediaRow(page: Page, name: string) {
    return mediaRows(page).filter({
        has: page.getByRole('button', { name, exact: true }),
    });
}

function sharedGroupsList(row: ReturnType<typeof mediaRow>) {
    return row.getByRole('list', { name: /shared with/i });
}

test.describe('US-SGM-005: Media List Shared Groups', () => {
    test('lists the groups a media item is shared with in list view', async ({
        page,
    }) => {
        await openListView(page, 1600);

        const shared_row = mediaRow(page, 'Building Directory');
        await expect(
            sharedGroupsList(shared_row).getByRole('listitem'),
        ).toHaveText(BOTH_GROUPS);

        const single_row = mediaRow(page, 'Building Directory v2');
        await expect(
            sharedGroupsList(single_row).getByRole('listitem'),
        ).toHaveText(['Facilities Signage']);

        // Right aligned, directly before the media actions menu button
        const list_box = await sharedGroupsList(shared_row).boundingBox();
        const menu_box = await shared_row
            .getByRole('button', { name: /media actions/i })
            .boundingBox();
        expect(list_box).not.toBeNull();
        expect(menu_box).not.toBeNull();
        const gap = menu_box!.x - (list_box!.x + list_box!.width);
        expect(gap).toBeGreaterThanOrEqual(0);
        expect(gap).toBeLessThanOrEqual(16);
    });

    test('collapses to a group count when the row is narrow and lists the groups on hover', async ({
        page,
    }) => {
        await openListView(page, 900);

        const row = mediaRow(page, 'Building Directory');
        const badge = row.getByRole('button', {
            name: /shared with: facilities signage, marketing signage/i,
        });
        await expect(badge).toBeVisible();
        await expect(badge).toContainText('2');
        await expect(badge.locator('icon')).toHaveText('groups');
        await expect(row.locator('media-shared-groups ul')).toBeHidden();

        await badge.hover();
        await expect(
            page
                .locator('.mat-mdc-tooltip-surface')
                .filter({ hasText: BOTH_GROUPS.join(', ') }),
        ).toBeVisible();

        // Expands back to the full list once there is room again
        await page.setViewportSize({ width: 1600, height: 900 });
        await expect(sharedGroupsList(row).getByRole('listitem')).toHaveText(
            BOTH_GROUPS,
        );
        await expect(badge).toHaveCount(0);
    });

    test('loads the groups only when a media item scrolls into view', async ({
        page,
    }) => {
        await openListView(page, 1600, 600);

        await expect(
            sharedGroupsList(mediaRows(page).first()).getByRole('listitem'),
        ).not.toHaveCount(0);

        const last_row = mediaRows(page).last();
        const last_groups = last_row.locator('media-shared-groups');
        await expect(last_groups.locator('ul, button')).toHaveCount(0);

        await last_row.scrollIntoViewIfNeeded();
        await expect(
            sharedGroupsList(last_row).getByRole('listitem'),
        ).not.toHaveCount(0);
    });

    test('hides the groups of items held only by the selected group', async ({
        page,
    }) => {
        await openListView(page, 1600);

        await page
            .locator('media-list-header')
            .getByRole('button', { name: /select signage group/i })
            .click();
        await page
            .getByRole('dialog')
            .getByRole('button', { name: /facilities signage/i })
            .click();
        await expect(page.getByRole('dialog')).toHaveCount(0);
        await expect(
            page.getByRole('button', {
                name: /signage group: facilities signage/i,
            }),
        ).toBeVisible();

        await expect(
            sharedGroupsList(mediaRow(page, 'Building Directory')).getByRole(
                'listitem',
            ),
        ).toHaveText(BOTH_GROUPS);
        await expect(
            mediaRow(page, 'Building Directory v2').locator(
                'media-shared-groups ul, media-shared-groups button',
            ),
        ).toHaveCount(0);
    });

    test('does not show shared groups in grid view', async ({ page }) => {
        await page.setViewportSize({ width: 1600, height: 900 });
        await navigateWithMock(page, MEDIA_URL);
        await page.getByRole('button', { name: /grid view/i }).click();
        await expect(mediaRows(page).first()).toBeVisible();

        await expect(page.locator('media-shared-groups')).toHaveCount(0);
    });
});
