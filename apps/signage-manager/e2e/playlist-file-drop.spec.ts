import { expect, Locator, Page, test } from '@playwright/test';
import {
    MEDIA_URL,
    navigateWithMock,
    openFirstPlaylist,
    PLAYLISTS_URL,
} from './test-utils';
import { mockUploads } from './upload-mocks';

// A 1×1 PNG
const PNG = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==',
    'base64',
);

/**
 * Drag image files from outside the page onto a target and drop them, as the
 * browser does. Checks that the target shows it will take the files.
 *
 * Find the target by CSS rather than by role: the upload dialog the drop
 * opens hides the rest of the page from the accessibility tree.
 */
async function dropImages(target: Locator, names: string[]) {
    const data = await target.page().evaluateHandle(
        ({ names, base64 }) => {
            const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
            const transfer = new DataTransfer();
            for (const name of names) {
                transfer.items.add(
                    new File([bytes], name, { type: 'image/png' }),
                );
            }
            return transfer;
        },
        { names, base64: PNG.toString('base64') },
    );
    await target.dispatchEvent('dragenter', { dataTransfer: data });
    await target.dispatchEvent('dragover', { dataTransfer: data });
    await expect(target).toHaveClass(/file-drop-over/);
    await target.dispatchEvent('drop', { dataTransfer: data });
    await expect(target).not.toHaveClass(/file-drop-over/);
}

/** Upload the files listed in the bulk upload dialog */
async function uploadAll(page: Page, count: number) {
    const upload = page.locator('bulk-media-upload-modal');
    await upload
        .getByRole('button', { name: `Upload files (${count})` })
        .click();
    await expect(upload).toBeHidden({ timeout: 30000 });
}

/** The name of a playlist link, from its accessible name */
async function playlistName(link: Locator) {
    const label = await link.getAttribute('aria-label');
    return label.replace(/^Open playlist /i, '').replace(/, disabled$/i, '');
}

test.describe('US-SGM-007: Upload files onto a playlist', () => {
    test('adds files dropped on the open playlist to its items', async ({
        page,
    }) => {
        await mockUploads(page);
        await openFirstPlaylist(page);
        const items = page.locator('playlist-items');
        await expect(items).not.toContainText('drop-one.png');

        await dropImages(items, ['drop-one.png', 'drop-two.png']);
        await uploadAll(page, 2);

        // The open playlist reloads with the new media at the end
        await expect(items).toContainText('drop-one.png');
        await expect(items).toContainText('drop-two.png');
    });

    test('adds a file dropped on a playlist in the list', async ({ page }) => {
        await mockUploads(page);
        await navigateWithMock(page, PLAYLISTS_URL);
        const link = page
            .locator('playlist-list a[href*="/playlists/"]')
            .nth(1);
        const name = await playlistName(link);

        // One file opens the edit dialog, as a drop on the media library does
        await dropImages(link, ['drop-poster.png']);
        const edit = page.getByRole('dialog');
        await edit.getByRole('button', { name: /save/i }).click();
        await expect(edit).toBeHidden({ timeout: 30000 });

        await link.click();
        await expect(page.locator('playlist-items')).toContainText(name);
        await expect(page.locator('playlist-items')).toContainText(
            'drop-poster.png',
        );
    });

    test('adds files dropped on a playlist in the media sidebar', async ({
        page,
    }) => {
        await mockUploads(page);
        await navigateWithMock(page, MEDIA_URL);
        const link = page
            .locator('playlist-sidebar a[href*="/playlists/"]')
            .first();
        const target = link.locator('.cdk-drop-list');

        await dropImages(target, ['side-one.png', 'side-two.png']);
        // The drop went to the playlist, not to the media library overlay
        await expect(page.getByText(/drop media to upload/i)).toBeHidden();
        await uploadAll(page, 2);

        await link.click();
        await expect(page).toHaveURL(/#\/playlists\/.+/);
        const items = page.locator('playlist-items');
        await expect(items).toContainText('side-one.png');
        await expect(items).toContainText('side-two.png');
    });
});
