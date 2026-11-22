import { expect, Page, test } from '@playwright/test';
import { desktopNavLink, navigateWithMock } from './test-utils';

const GROUPS = [
    { id: 'campus', name: 'Campus' },
    { id: 'lobby', name: 'Lobby', parent_id: 'campus' },
    { id: 'kiosk', name: 'Kiosk', parent_id: 'lobby' },
    { id: 'events', name: 'Events' },
];

const ITEMS = [
    { name: 'Campus', group_ids: ['campus'] },
    { name: 'Lobby', group_ids: ['lobby'], tags: ['lobby-tag'] },
    { name: 'Kiosk', group_ids: ['kiosk'], tags: ['lobby-tag'] },
    { name: 'Events', group_ids: ['events'], tags: ['lobby-tag'] },
    {
        name: 'Shared',
        group_ids: ['campus', 'lobby'],
        tags: ['lobby-tag'],
    },
];

const INCLUDE_CHILDREN = 'Include child group content';

async function seedSignage(page: Page) {
    await page.addInitScript(
        ({ groups, items }) => {
            document.cookie = 'placeos_mock_session=1;path=/;samesite=strict';
            const save = (key: string, value: unknown) =>
                localStorage.setItem(
                    `PLACEOS.mock.${key}`,
                    JSON.stringify(value),
                );
            save(
                'signage-groups',
                groups.map((group) => ({
                    group: {
                        ...group,
                        description: '',
                        subsystems: ['signage'],
                    },
                    permissions: 0xff,
                })),
            );
            save(
                'signage-media',
                items.map((item, index) => ({
                    ...item,
                    id: `child-test-media-${index}`,
                    name: `${item.name} media`,
                    type: 'image',
                    created_at: index + 1,
                })),
            );
            save(
                'signage-playlists',
                items.map((item, index) => ({
                    ...item,
                    id: `child-test-playlist-${index}`,
                    name: `${item.name} playlist`,
                    status: 'active',
                    items: [],
                    created_at: index + 1,
                })),
            );
        },
        { groups: GROUPS, items: ITEMS },
    );
}

test('toggles descendant media and playlists within the selected group', async ({
    page,
}) => {
    await seedSignage(page);
    await navigateWithMock(page);

    const media = page.locator('media-list');
    const playlists = page.locator('playlist-list');
    const breadcrumbs = page.locator('group-breadcrumbs');
    const current_group = breadcrumbs.getByRole('button', {
        name: 'Signage group: Campus',
    });
    const toggle = breadcrumbs.getByRole('button', { name: INCLUDE_CHILDREN });
    const dialog = page.getByRole('dialog');
    const checkbox = dialog.getByRole('checkbox', { name: INCLUDE_CHILDREN });

    await expect(
        media.getByText('Events media', { exact: true }),
    ).toBeVisible();
    await expect(toggle).toHaveCount(0);
    await breadcrumbs.getByRole('button', { name: 'All Groups' }).click();
    await expect(checkbox).toHaveCount(0);
    await dialog.getByRole('button', { name: 'Campus' }).click();

    await expect(current_group).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-pressed', 'false');
    await expect(toggle.locator('icon')).toHaveText('person');
    await expect(
        media.getByText('Campus media', { exact: true }),
    ).toBeVisible();
    await expect(media.getByText('Lobby media', { exact: true })).toHaveCount(
        0,
    );

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-pressed', 'true');
    await expect(toggle.locator('icon')).toHaveText('group');
    await expect(current_group).toBeVisible();
    await expect(media.getByText('Lobby media', { exact: true })).toBeVisible();
    await expect(media.getByText('Kiosk media', { exact: true })).toBeVisible();
    await expect(media.getByText('Shared media', { exact: true })).toHaveCount(
        1,
    );
    await expect(media.getByText('Events media', { exact: true })).toHaveCount(
        0,
    );

    await page.getByRole('button', { name: 'Folders', exact: true }).click();
    await expect(media.getByText('lobby-tag', { exact: true })).toBeVisible();
    await page.getByRole('button', { name: 'Grid view' }).click();

    await desktopNavLink(page, '/playlists').click();
    const child_playlist = playlists.getByRole('link', {
        name: /open playlist.*lobby playlist/i,
    });
    await expect(child_playlist).toBeVisible();
    await expect(
        playlists.getByText('Kiosk playlist', { exact: true }),
    ).toBeVisible();
    await expect(
        playlists.getByText('Shared playlist', { exact: true }),
    ).toHaveCount(1);
    await expect(
        playlists.getByText('Events playlist', { exact: true }),
    ).toHaveCount(0);

    await current_group.click();
    await expect(checkbox).toBeChecked();
    await checkbox.uncheck();
    await page.keyboard.press('Escape');
    await expect(current_group).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-pressed', 'false');
    await expect(
        playlists.getByText('Campus playlist', { exact: true }),
    ).toBeVisible();
    await expect(child_playlist).toHaveCount(0);

    await current_group.click();
    await checkbox.check();
    await page.keyboard.press('Escape');
    await expect(child_playlist).toBeVisible();
    await current_group.click();
    await dialog.getByRole('button', { name: 'All Groups' }).click();
    await expect(toggle).toHaveCount(0);
    await expect(
        playlists.getByText('Events playlist', { exact: true }),
    ).toBeVisible();
    await expect(child_playlist).toBeVisible();
    await expect(
        playlists.getByText('Shared playlist', { exact: true }),
    ).toHaveCount(1);
});

test('renames and removes a media tag across the selected group and its descendants', async ({
    page,
}) => {
    await seedSignage(page);
    await navigateWithMock(page);

    const breadcrumbs = page.locator('group-breadcrumbs');
    const dialog = page.getByRole('dialog');
    const media = page.locator('media-list');
    await breadcrumbs.getByRole('button', { name: 'All Groups' }).click();
    await dialog.getByRole('button', { name: 'Campus' }).click();
    await breadcrumbs.getByRole('button', { name: INCLUDE_CHILDREN }).click();
    await page.getByRole('button', { name: 'Folders', exact: true }).click();

    await expect(
        media.getByRole('button', { name: 'lobby-tag 3 items', exact: true }),
    ).toBeVisible();
    await media
        .getByRole('button', { name: 'Actions for the lobby-tag tag' })
        .click();
    const rename = page.getByRole('menuitem', { name: 'Rename tag' });
    await expect(rename).toBeVisible();
    await rename.click();
    await dialog.getByRole('textbox', { name: 'Tag name' }).fill('updated-tag');
    await dialog.getByRole('button', { name: 'Rename tag' }).click();
    await expect(media.getByText('lobby-tag', { exact: true })).toHaveCount(0);

    await expect(
        media.getByRole('button', { name: 'updated-tag 3 items', exact: true }),
    ).toBeVisible();
    await media
        .getByRole('button', { name: 'Actions for the updated-tag tag' })
        .click();
    await page.getByRole('menuitem', { name: 'Remove tag' }).click();
    await expect(
        dialog.getByText('Remove the "updated-tag" tag from 3 media items?'),
    ).toBeVisible();
    await dialog.getByRole('button', { name: 'Remove', exact: true }).click();
    await expect(media.getByText('updated-tag', { exact: true })).toHaveCount(
        0,
    );
    await page.getByRole('button', { name: 'Grid view' }).click();
    await expect(media.getByText('Lobby media', { exact: true })).toBeVisible();
    await expect(media.getByText('Kiosk media', { exact: true })).toBeVisible();

    await breadcrumbs
        .getByRole('button', { name: 'Signage group: Campus' })
        .click();
    await dialog.getByRole('button', { name: 'All Groups' }).click();
    await page.getByRole('button', { name: 'Folders', exact: true }).click();
    await media.getByText('lobby-tag', { exact: true }).click();
    await expect(
        media.getByText('Events media', { exact: true }),
    ).toBeVisible();
    await expect(media.getByText('Lobby media', { exact: true })).toHaveCount(
        0,
    );
});
