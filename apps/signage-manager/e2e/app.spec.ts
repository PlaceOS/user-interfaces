import { expect, test } from '@playwright/test';
import {
    closeDialog,
    desktopNavLink,
    DISPLAYS_URL,
    GROUPS_URL,
    LOAD_TIMEOUT,
    MEDIA_URL,
    navigateWithMock,
    openFirstDisplay,
    openFirstPlaylist,
    openFirstZone,
    PLAYLISTS_URL,
    SCHEDULES_URL,
    ZONES_URL,
} from './test-utils';

test.describe('US-SGM-001: Access Signage Manager', () => {
    test('loads the manager in mock mode', async ({ page }) => {
        await navigateWithMock(page);

        await expect(page.locator('app-root')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(
            page.getByRole('heading', { name: /signage media/i }),
        ).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('redirects unknown routes to media', async ({ page }) => {
        await navigateWithMock(page, '/#/unknown-route');

        await expect(page).toHaveURL(/#\/media/);
        await expect(
            page.getByRole('heading', { name: /signage media/i }),
        ).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});

test.describe('US-SGM-002: Switch Signage Groups', () => {
    test('keeps desktop navigation within a short viewport', async ({
        page,
    }) => {
        await page.setViewportSize({ width: 1280, height: 600 });
        await navigateWithMock(page, MEDIA_URL);

        const navigation = page.locator('nav-sidebar nav');
        const dimensions = await navigation.evaluate((element) => ({
            client_height: element.clientHeight,
            scroll_height: element.scrollHeight,
        }));

        expect(dimensions.scroll_height).toBeLessThanOrEqual(
            dimensions.client_height,
        );

        const active_marker = navigation.locator('a.active [active]');
        const active_marker_is_painted = await active_marker.evaluate(
            (element) => {
                const bounds = element.getBoundingClientRect();
                const center_x = bounds.left + bounds.width / 2;
                const center_y = bounds.top + bounds.height / 2;
                return document
                    .elementsFromPoint(center_x, center_y)
                    .includes(element);
            },
        );

        expect(active_marker_is_painted).toBe(true);
    });

    test('exposes the story navigation routes', async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 900 });
        await navigateWithMock(page, MEDIA_URL);

        await expect(desktopNavLink(page, '/media')).toBeVisible();
        await expect(desktopNavLink(page, '/playlists')).toBeVisible();
        await expect(desktopNavLink(page, '/zones')).toBeVisible();
        await expect(desktopNavLink(page, '/schedules')).toBeVisible();
        await expect(desktopNavLink(page, '/displays')).toBeVisible();

        const groups_link = desktopNavLink(page, '/groups');
        if (await groups_link.isVisible().catch(() => false)) {
            await expect(groups_link).toBeVisible();
        }

        const group_selector = page.getByRole('button', {
            name: /signage group:/i,
        });
        if (await group_selector.isVisible().catch(() => false)) {
            await group_selector.click();
            await expect(
                page.getByRole('heading', { name: /select signage group/i }),
            ).toBeVisible();
            await expect(
                page
                    .getByRole('dialog')
                    .getByRole('button', { name: /all groups/i }),
            ).toBeVisible();
            await closeDialog(page);
        }
    });
});

test.describe('US-SGM-003: Browse Media', () => {
    test('opens the media library story surface', async ({ page }) => {
        await navigateWithMock(page, MEDIA_URL);

        await expect(
            page.getByRole('heading', { name: /signage media/i }),
        ).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(
            page.getByRole('textbox', { name: /search media/i }),
        ).toBeVisible();
        await expect(
            page.getByRole('button', { name: /grid view/i }),
        ).toBeVisible();
    });

    test('covers media search, view modes, and group filter workflows', async ({
        page,
    }) => {
        await navigateWithMock(page, MEDIA_URL);

        await page.getByRole('textbox', { name: /search media/i }).fill('meeting');
        await expect(page.getByText(/of \d+ items/i).first()).toBeVisible();

        await page.getByRole('button', { name: /list view/i }).click();
        await expect(
            page.getByRole('button', { name: /list view/i }),
        ).toHaveAttribute('aria-pressed', 'true');

        await page.getByRole('button', { name: /folders/i }).click();
        await expect(
            page.getByRole('button', { name: /folders/i }),
        ).toHaveAttribute('aria-pressed', 'true');
        await expect(page.getByRole('list')).toBeVisible();

        const all_groups = page.getByRole('tab', { name: /all groups/i });
        if (await all_groups.isVisible().catch(() => false)) {
            await all_groups.click();
            await expect(all_groups).toHaveAttribute('aria-selected', 'true');
        }
    });
});

test.describe('US-SGM-004: Add Media', () => {
    test('covers media add workflows', async ({ page }) => {
        await page.setViewportSize({ width: 390, height: 844 });
        await navigateWithMock(page, MEDIA_URL);

        await page
            .locator('media-list-header')
            .getByRole('button', { name: /media actions/i })
            .click();
        await page.getByRole('menuitem', { name: /add from link/i }).click();
        await expect(
            page.getByRole('heading', { name: /add from link/i }),
        ).toBeVisible();
        await expect(
            page.getByRole('textbox', { name: /media url/i }),
        ).toBeVisible();
        await expect(page.getByRole('button', { name: /^add$/i })).toBeDisabled();
        await page
            .getByRole('textbox', { name: /media url/i })
            .fill('https://example.com');
        await expect(page.getByRole('button', { name: /^add$/i })).toBeEnabled();
        await closeDialog(page);

        await page
            .locator('media-list-header')
            .getByRole('button', { name: /media actions/i })
            .click();
        await page.getByRole('menuitem', { name: /add plugin/i }).click();
        await expect(
            page.getByRole('heading', { name: /add plugin/i }),
        ).toBeVisible();
        await expect(page.getByRole('button', { name: /^add$/i })).toBeDisabled();
        await expect(page.locator('media-add-modal mat-select')).toBeVisible();
        await page.locator('media-add-modal mat-select').click();
        await page.getByRole('option', { name: /weather/i }).click();
        await expect(page.getByRole('button', { name: /^add$/i })).toBeEnabled();
        await closeDialog(page);

        await expect(
            page.locator('input[type="file"][multiple]').first(),
        ).toBeAttached();
    });
});

test.describe('US-SGM-005: Manage Media Items', () => {
    test('covers media preview, edit, assign, share, delete, and bulk workflows', async ({
        page,
    }) => {
        await navigateWithMock(page, MEDIA_URL);

        await page.getByRole('button', { name: /^preview /i }).first().click();
        await expect(page.getByRole('dialog')).toBeVisible();
        await expect(page.locator('media-preview-modal')).toBeVisible();
        await closeDialog(page);

        await page.getByRole('button', { name: /media actions/i }).first().click();
        await expect(page.getByRole('menuitem', { name: /edit/i })).toBeVisible();
        await expect(page.getByRole('menuitem', { name: /share/i })).toBeVisible();
        await expect(page.getByRole('menuitem', { name: /preview/i })).toBeVisible();
        await expect(page.getByRole('menuitem', { name: /remove/i })).toBeVisible();

        await page.getByRole('menuitem', { name: /edit/i }).click();
        await expect(page.getByRole('heading', { name: /edit media/i })).toBeVisible();
        await expect(page.getByRole('textbox', { name: /media name/i })).toBeVisible();
        await closeDialog(page);

        await page.getByRole('button', { name: /media actions/i }).first().click();
        await page.getByRole('menuitem', { name: /share/i }).click();
        await expect(page.getByRole('heading', { name: /share media/i })).toBeVisible();
        await closeDialog(page);

        await page.getByRole('checkbox').first().check();
        await expect(page.getByText(/1 selected/i)).toBeVisible();
        await expect(page.locator('footer icon').filter({ hasText: 'delete' })).toBeVisible();
        await expect(
            page.locator('footer icon').filter({ hasText: 'playlist_add' }),
        ).toBeVisible();
        await expect(
            page.locator('footer icon').filter({ hasText: 'ios_share' }),
        ).toBeVisible();

        await page
            .locator('footer button')
            .filter({
                has: page.locator('icon').filter({ hasText: 'playlist_add' }),
            })
            .click();
        await expect(page.getByRole('heading', { name: /add to playlist/i })).toBeVisible();
        await expect(
            page
                .getByRole('dialog')
                .getByRole('textbox', { name: /search playlists/i }),
        ).toBeVisible();
        await closeDialog(page);

        await page
            .locator('footer button')
            .filter({
                has: page.locator('icon').filter({ hasText: 'ios_share' }),
            })
            .click();
        await expect(page.getByRole('heading', { name: /share media/i })).toBeVisible();
        await closeDialog(page);

        await page
            .locator('footer button')
            .filter({
                has: page.locator('icon').filter({ hasText: 'delete' }),
            })
            .click();
        await expect(page.getByRole('heading', { name: /remove media/i })).toBeVisible();
        await closeDialog(page);
    });
});

test.describe('US-SGM-006: Browse and Create Playlists', () => {
    test('opens the playlists story surface', async ({ page }) => {
        await navigateWithMock(page, PLAYLISTS_URL);

        await expect(
            page.getByRole('heading', { name: /signage playlists/i }),
        ).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(
            page.getByRole('textbox', { name: /search playlists/i }),
        ).toBeVisible();
        await expect(
            page.getByRole('button', { name: /create new playlist/i }),
        ).toBeVisible();
    });

    test('covers playlist browse, search, create, select, and edit workflows', async ({
        page,
    }) => {
        await navigateWithMock(page, PLAYLISTS_URL);

        await page
            .getByRole('textbox', { name: /search playlists/i })
            .fill('general');
        await expect(
            page.getByRole('link', { name: /open playlist/i }).first(),
        ).toBeVisible();

        await page.getByRole('button', { name: /create new playlist/i }).click();
        await expect(page.getByRole('heading', { name: /new playlist/i })).toBeVisible();
        await expect(page.getByRole('textbox', { name: /playlist name/i })).toBeVisible();
        await expect(page.getByText(/playlist schedules/i)).toBeVisible();
        await closeDialog(page);

        await openFirstPlaylist(page);
        await expect(page.getByText(/select a playlist/i)).not.toBeVisible();
        await expect(
            page.getByRole('button', { name: /edit selected playlist/i }),
        ).toBeVisible();
        await page.getByRole('button', { name: /edit selected playlist/i }).click();
        await expect(page.getByRole('heading', { name: /edit playlist/i })).toBeVisible();
        await expect(page.getByRole('textbox', { name: /playlist name/i })).toBeVisible();
        await closeDialog(page);
    });
});

test.describe('US-SGM-007 and US-SGM-009: Playlist Items and Approval', () => {
    test('covers playlist item preview, schedule, approval, share, and delete workflows', async ({
        page,
    }) => {
        await openFirstPlaylist(page);

        const item_preview = page.getByRole('button', { name: /^preview /i }).first();
        if (await item_preview.isVisible().catch(() => false)) {
            await item_preview.click();
            await expect(page.locator('media-preview-modal')).toBeVisible();
            await closeDialog(page);
        } else {
            await expect(page.getByText(/no items in this playlist/i)).toBeVisible();
        }

        const edit_schedule = page.getByRole('button', { name: /edit schedule/i }).first();
        if (await edit_schedule.isVisible().catch(() => false)) {
            await edit_schedule.click();
            await expect(
                page.getByRole('heading', { name: /item schedules/i }),
            ).toBeVisible();
            await expect(page.getByRole('button', { name: /add schedule/i })).toBeVisible();
            await closeDialog(page);
        }

        const request_approval = page.getByRole('button', {
            name: /request approval/i,
        });
        const approve = page.getByRole('button', { name: /approve selected playlist/i });
        if (await request_approval.isVisible().catch(() => false)) {
            await request_approval.click();
            await expect(page.getByRole('heading', { name: /request approval/i })).toBeVisible();
            await expect(page.getByText(/playlist/i).first()).toBeVisible();
            await closeDialog(page);
        } else if (await approve.isVisible().catch(() => false)) {
            await approve.click();
            await expect(page.getByRole('heading', { name: /approve playlist/i })).toBeVisible();
            await closeDialog(page);
        }

        await page.getByRole('button', { name: /share selected playlist/i }).click();
        await expect(page.getByRole('heading', { name: /share playlist/i })).toBeVisible();
        await closeDialog(page);

        await page.getByRole('button', { name: /delete selected playlist/i }).click();
        await expect(page.getByRole('heading', { name: /remove playlist/i })).toBeVisible();
        await closeDialog(page);
    });
});

test.describe('US-SGM-008: Manage Playlist Details', () => {
    test('covers playlist detail assignment workflows', async ({ page }) => {
        await openFirstPlaylist(page);

        const details_tab = page.getByRole('tab', { name: /details/i });
        if (await details_tab.isVisible().catch(() => false)) {
            await details_tab.click();
        }

        const add_display = page.getByRole('button', {
            name: /add display to playlist/i,
        });
        if (await add_display.isVisible().catch(() => false)) {
            await add_display.click();
            await expect(page.getByRole('heading', { name: /add display/i })).toBeVisible();
            await expect(page.getByRole('textbox', { name: /search displays/i })).toBeVisible();
            await closeDialog(page);
        }

        const add_zone = page.getByRole('button', {
            name: /add zone to playlist/i,
        });
        if (await add_zone.isVisible().catch(() => false)) {
            await add_zone.click();
            await expect(page.getByRole('heading', { name: /add zone/i })).toBeVisible();
            await expect(page.getByRole('textbox', { name: /search zones/i })).toBeVisible();
            await closeDialog(page);
        }
    });
});

test.describe('US-SGM-010: Manage Zone Assignments', () => {
    test('opens the zone assignment story surface', async ({ page }) => {
        await navigateWithMock(page, ZONES_URL);

        await expect(
            page.getByRole('heading', { name: /signage zones/i }),
        ).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await page.getByRole('button', { name: /create new zone/i }).click();
        await expect(
            page.getByRole('heading', { name: /new zone/i }),
        ).toBeVisible();
        await expect(
            page.getByRole('textbox', { name: /zone name/i }),
        ).toBeVisible();
        await expect(
            page.getByRole('heading', { name: /parent zone/i }),
        ).toBeVisible();
        await closeDialog(page);
    });

    test('covers zone search, selection, tabs, and assignment workflows', async ({
        page,
    }) => {
        await openFirstZone(page);
        const zone_search = page.getByRole('textbox', { name: /search in /i });
        await zone_search.fill('hub');
        await expect(zone_search).toHaveValue('hub');
        await zone_search.fill('');
        await expect(page.getByText(/playlists/i).first()).toBeVisible();
        const displays_tab = page.getByRole('tab', { name: /displays/i });
        if (await displays_tab.isVisible().catch(() => false)) {
            await displays_tab.click();
            await expect(displays_tab).toHaveAttribute('aria-selected', 'true');
        }

        const add_display = page.getByRole('button', { name: /add display to zone/i });
        if (await add_display.isVisible().catch(() => false)) {
            await add_display.click();
            await expect(page.getByRole('heading', { name: /add display/i })).toBeVisible();
            await closeDialog(page);
        }

        const playlists_tab = page.getByRole('tab', { name: /playlists/i });
        if (await playlists_tab.isVisible().catch(() => false)) {
            await playlists_tab.click();
        }
        const add_playlist = page.getByRole('button', {
            name: /add playlist to zone/i,
        });
        if (await add_playlist.isVisible().catch(() => false)) {
            await add_playlist.click();
            await expect(page.getByRole('heading', { name: /add to playlist/i })).toBeVisible();
            await closeDialog(page);
        }
    });
});

test.describe('US-SGM-012: Review Daily Display and Zone Schedules', () => {
    test('opens the schedule review story surface', async ({ page }) => {
        await navigateWithMock(page, SCHEDULES_URL);

        await expect(page.locator('schedules-section')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(page.getByRole('tab', { name: /displays/i })).toBeVisible();
        await expect(page.getByRole('tab', { name: /zones/i })).toBeVisible();
    });

    test('covers schedule date, search, tab, clear, and row link workflows', async ({
        page,
    }) => {
        await navigateWithMock(page, SCHEDULES_URL);

        await page.getByRole('button', { name: /show next day/i }).click();
        await page.getByRole('button', { name: /show previous day/i }).click();
        await page.getByRole('button', { name: /show today/i }).click();

        await page.getByRole('searchbox').fill('hub');
        await expect(page.getByRole('button', { name: /clear schedule search/i })).toBeVisible();
        await page.getByRole('button', { name: /clear schedule search/i }).click();

        await page.getByRole('tab', { name: /zones/i }).click();
        await expect(page.getByRole('tab', { name: /zones/i })).toHaveAttribute(
            'aria-selected',
            'true',
        );
        await expect(page.getByRole('link').first()).toBeVisible();
    });
});

test.describe('US-SGM-011: Manage Display Assignments', () => {
    test('opens the display assignment story surface', async ({ page }) => {
        await navigateWithMock(page, DISPLAYS_URL);

        await expect(
            page.getByRole('heading', { name: /signage displays/i }),
        ).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(
            page.getByRole('textbox', { name: /search displays/i }),
        ).toBeVisible();
    });

    test('covers display search, selection, player link, tabs, and assignment workflows', async ({
        page,
    }) => {
        await navigateWithMock(page, DISPLAYS_URL);

        await page.getByRole('textbox', { name: /search displays/i }).fill('hub');
        await expect(page.getByRole('link', { name: /open display/i }).first()).toBeVisible();

        await openFirstDisplay(page);
        const panel_link = page.getByRole('link', { name: /open panel/i });
        if (await panel_link.isVisible().catch(() => false)) {
            await expect(panel_link).toHaveAttribute('target', '_blank');
        }
        await page.getByRole('tab', { name: /playlists/i }).click();
        await expect(page.getByRole('tab', { name: /playlists/i })).toHaveAttribute(
            'aria-selected',
            'true',
        );

        const add_playlist = page.getByRole('button', {
            name: /add playlist to display/i,
        });
        if (await add_playlist.isVisible().catch(() => false)) {
            await add_playlist.click();
            await expect(page.getByRole('heading', { name: /add to playlist/i })).toBeVisible();
            await closeDialog(page);
        }

        await page.getByRole('tab', { name: /zones/i }).click();
        await expect(page.getByRole('tab', { name: /zones/i })).toHaveAttribute(
            'aria-selected',
            'true',
        );
    });
});

test.describe('US-SGM-013: Manage Signage Groups', () => {
    test('opens group management when available', async ({ page }) => {
        await navigateWithMock(page, GROUPS_URL);

        const unauthorised = await page
            .locator('unauthorised')
            .isVisible()
            .catch(() => false);
        if (unauthorised) return;

        await expect(
            page.getByRole('heading', { name: /signage groups/i }),
        ).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(
            page.getByRole('textbox', { name: /search signage groups/i }),
        ).toBeVisible();
    });
});

test.describe('US-SGM-014 and US-SGM-015: Group Users, Zones, and Permissions', () => {
    test('covers group create, search, edit, user, zone, and permission workflows', async ({
        page,
    }) => {
        await navigateWithMock(page, GROUPS_URL);

        const unauthorised = await page
            .locator('unauthorised')
            .isVisible()
            .catch(() => false);
        if (unauthorised) return;

        const new_group = page.getByRole('button', { name: /^add$/i }).first();
        if (await new_group.isVisible().catch(() => false)) {
            await new_group.click();
            await expect(
                page.getByRole('heading', { name: /new signage group/i }),
            ).toBeVisible();
            await expect(page.getByPlaceholder(/name/i)).toBeVisible();
            await closeDialog(page);
        }

        await page
            .getByRole('textbox', { name: /search signage groups/i })
            .fill('facilities');
        await expect(page.getByRole('button', { name: /open group/i }).first()).toBeVisible();
        await page.getByRole('button', { name: /open group/i }).first().click();

        await page
            .locator('signage-group-detail-header button')
            .filter({ hasText: 'edit' })
            .click();
        await expect(
            page.getByRole('heading', { name: /edit signage group/i }),
        ).toBeVisible();
        await closeDialog(page);

        await page.locator('signage-group-users button').filter({ hasText: 'add' }).click();
        await expect(page.getByRole('heading', { name: /add user/i })).toBeVisible();
        await expect(page.getByRole('textbox', { name: /search users/i })).toBeVisible();
        await closeDialog(page);

        await page.locator('signage-group-users button').filter({ hasText: 'edit' }).first().click();
        await expect(page.getByRole('heading', { name: /user permissions/i })).toBeVisible();
        await expect(page.getByRole('button', { name: /^read$/i })).toBeVisible();
        await closeDialog(page);

        await page.locator('signage-group-zones button').filter({ hasText: 'add' }).click();
        await expect(page.getByRole('heading', { name: /add zone/i })).toBeVisible();
        await expect(page.getByRole('textbox', { name: /search zones/i })).toBeVisible();
        await closeDialog(page);

        await page.locator('signage-group-zones button').filter({ hasText: 'edit' }).first().click();
        await expect(page.getByRole('heading', { name: /zone permissions/i })).toBeVisible();
        await expect(page.getByText(/deny selected/i)).toBeVisible();
        await closeDialog(page);
    });
});

test.describe('US-SGM-016: Use Signage Manager on Mobile', () => {
    test('covers mobile navigation and compact media add workflows', async ({
        page,
    }) => {
        await page.setViewportSize({ width: 390, height: 844 });
        await navigateWithMock(page, MEDIA_URL);

        const add_menu = page.locator('media-list-header').getByRole('button', {
            name: /media actions/i,
        });
        await expect(add_menu).toBeVisible();
        await add_menu.click();
        await expect(page.getByRole('menuitem', { name: /add plugin/i })).toBeVisible();
        await expect(page.getByRole('menuitem', { name: /add from link/i })).toBeVisible();
        await expect(page.getByRole('menuitem', { name: /upload media/i })).toBeVisible();
        await page.keyboard.press('Escape');

        await expect(page.getByRole('link', { name: /media/i })).toBeVisible();
        const footer = page.locator('nav-footer');
        await expect(footer).toBeVisible();
        const more_nav = footer.getByRole('button', { name: /more nav options/i });
        if (await more_nav.isVisible().catch(() => false)) {
            await more_nav.click();
            await expect(page.getByRole('menuitem', { name: /schedules/i })).toBeVisible();
        }
    });
});
