import { expect, Locator, Page, test } from '@playwright/test';
import { buildPdf } from './pdf-fixture';
import { MEDIA_URL, navigateWithMock } from './test-utils';
import { mockUploads } from './upload-mocks';

const RED: [number, number, number] = [1, 0, 0];
const GREEN: [number, number, number] = [0, 0.6, 0];
const BLUE: [number, number, number] = [0, 0, 1];

/** A 16:9 slide, an A4 page and another slide */
const DECK = buildPdf([
    { width: 960, height: 540, colour: RED, label: 'One' },
    { width: 595, height: 842, colour: GREEN, label: 'Two' },
    { width: 960, height: 540, colour: BLUE, label: 'Three' },
]);

/** Width and height from the header of a PNG */
function pngSize(png: Buffer) {
    expect(png.subarray(1, 4).toString('latin1')).toBe('PNG');
    return { width: png.readUInt32BE(16), height: png.readUInt32BE(20) };
}

/** RGBA of the pixels at fractions of an image's width and height */
async function samplePixels(
    page: Page,
    image: Buffer | Locator,
    points: [number, number][],
) {
    const source = Buffer.isBuffer(image)
        ? `data:image/png;base64,${image.toString('base64')}`
        : await image.getAttribute('src');
    return page.evaluate(
        async ({ source, points }) => {
            const bitmap = await createImageBitmap(
                await (await fetch(source)).blob(),
            );
            const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
            const ctx = canvas.getContext('2d');
            ctx.drawImage(bitmap, 0, 0);
            return points.map(([x, y]) =>
                Array.from(
                    ctx.getImageData(
                        Math.floor(x * (bitmap.width - 1)),
                        Math.floor(y * (bitmap.height - 1)),
                        1,
                        1,
                    ).data,
                ),
            );
        },
        { source, points },
    );
}

/**
 * Pick an option of a select. Waits for the panel to close again, as a
 * select opened while the last panel animates away can close straight away.
 */
async function choose(dialog: Locator, label: RegExp, option: RegExp) {
    await dialog.getByRole('combobox', { name: label }).click();
    const listbox = dialog.page().getByRole('listbox');
    await expect(listbox).toBeVisible();
    await listbox.getByRole('option', { name: option }).click();
    await expect(listbox).toBeHidden();
}

async function openPdf(page: Page, name = 'Quarterly Results.pdf') {
    await page
        .locator('media-list-header input[type="file"][multiple]')
        .first()
        .setInputFiles({ name, mimeType: 'application/pdf', buffer: DECK });
    const dialog = page.getByRole('dialog', { name: /import pdf/i });
    await expect(dialog).toBeVisible({ timeout: 15000 });
    return dialog;
}

function pageItems(dialog: Locator) {
    return dialog.getByRole('list', { name: 'Pages' }).getByRole('listitem');
}

test.describe('US-SGM-004: Import PDF Pages as Images', () => {
    test('previews every page and lets the user pick and turn pages', async ({
        page,
    }) => {
        // pdf.js loads its worker, and any data files a PDF needs, from the
        // build's assets
        const missing_assets: string[] = [];
        const pdfjs_requests: string[] = [];
        page.on('response', (response) => {
            if (!response.url().includes('/assets/pdfjs/')) return;
            pdfjs_requests.push(response.url());
            if (!response.ok()) missing_assets.push(response.url());
        });
        await navigateWithMock(page, MEDIA_URL);
        const dialog = await openPdf(page);

        await expect(dialog).toContainText('Quarterly Results.pdf');
        await expect(dialog.getByLabel('Name and tag')).toHaveValue(
            'Quarterly Results',
        );
        await expect(dialog).toContainText(
            'Pages are named "Quarterly Results - page 1".',
        );
        const pages = pageItems(dialog);
        await expect(pages).toHaveCount(3);
        await expect(dialog.getByRole('status')).toHaveText(
            '3 of 3 pages selected',
        );

        // pdf.js renders each page: the square in the middle is painted and
        // the rest of the page is left transparent
        const first_preview = pages.nth(0).locator('img');
        await expect(first_preview).toHaveAttribute('src', /^blob:/);
        const [centre, corner] = await samplePixels(page, first_preview, [
            [0.5, 0.5],
            [0.02, 0.02],
        ]);
        expect(centre).toEqual([255, 0, 0, 255]);
        expect(corner[3]).toBe(0);
        await expect(pages.locator('img')).toHaveCount(3);

        // The page area shows the chosen background behind the page
        await expect(first_preview).toHaveCSS(
            'background-color',
            'rgb(255, 255, 255)',
        );
        await choose(dialog, /^background$/i, /^black$/i);
        await expect(first_preview).toHaveCSS(
            'background-color',
            'rgb(0, 0, 0)',
        );
        await choose(dialog, /^background$/i, /custom colou?r/i);
        await dialog.getByLabel(/background colou?r/i).fill('#336699');
        await expect(first_preview).toHaveCSS(
            'background-color',
            'rgb(51, 102, 153)',
        );

        // Click to leave a page out, shift-click to set a range
        const toggle = (number: number) =>
            dialog.getByRole('button', { name: `Page ${number}`, exact: true });
        await toggle(1).click();
        await expect(toggle(1)).toHaveAttribute('aria-pressed', 'false');
        await toggle(3).click({ modifiers: ['Shift'] });
        await expect(dialog.getByRole('status')).toHaveText(
            '0 of 3 pages selected',
        );
        await expect(
            dialog.getByRole('button', { name: /import pages/i }),
        ).toBeDisabled();
        await dialog.getByRole('button', { name: 'Select all' }).click();
        await expect(dialog.getByRole('status')).toHaveText(
            '3 of 3 pages selected',
        );

        // A turned page renders again in its new orientation
        const second_preview = pages.nth(1).locator('img');
        await expect(second_preview).toHaveJSProperty('naturalWidth', 226);
        await dialog.getByRole('button', { name: 'Rotate page 2' }).click();
        await expect(second_preview).toHaveJSProperty('naturalWidth', 320);
        await dialog
            .getByRole('button', { name: 'Rotate all pages left' })
            .click();
        await expect(second_preview).toHaveJSProperty('naturalWidth', 226);
        await expect(pages.nth(0).locator('img')).toHaveJSProperty(
            'naturalWidth',
            180,
        );

        expect(missing_assets).toEqual([]);
        expect(pdfjs_requests).toContainEqual(
            expect.stringContaining('pdf.worker.min.mjs'),
        );

        await dialog.getByRole('button', { name: 'Cancel' }).click();
        await expect(dialog).toBeHidden();
        await expect(page.locator('bulk-media-upload-modal')).toHaveCount(0);
    });

    test('wraps a long example name above the next option', async ({
        page,
    }) => {
        await navigateWithMock(page, MEDIA_URL);
        const dialog = await openPdf(
            page,
            'admission_price_cover_for_the_winter_lantern_festival-1.pdf',
        );
        const hint = dialog.locator('#pdf-import-name-hint');
        await expect(hint).toContainText(
            'admission_price_cover_for_the_winter_lantern_festival-1 - page 1',
        );
        const label = dialog.locator('#pdf-import-fit-label');
        const options = dialog.getByRole('region', { name: /options/i });
        // Polled, as the dialog scales while it opens
        await expect
            .poll(async () => {
                const [hint_box, label_box, options_box] = await Promise.all(
                    [hint, label, options].map((item) => item.boundingBox()),
                );
                return {
                    above_label: hint_box.y + hint_box.height <= label_box.y,
                    within_options:
                        hint_box.x + hint_box.width <=
                        options_box.x + options_box.width,
                };
            })
            .toEqual({ above_label: true, within_options: true });
    });

    test('uploads the selected pages named and tagged after the PDF', async ({
        page,
    }) => {
        const { stored, release } = await mockUploads(page, { hold: true });
        await navigateWithMock(page, MEDIA_URL);
        const dialog = await openPdf(page);
        await expect(pageItems(dialog).locator('img')).toHaveCount(3);

        await dialog
            .getByRole('button', { name: 'Page 2', exact: true })
            .click();
        await dialog.getByRole('button', { name: 'Rotate page 3' }).click();
        await dialog.getByLabel('Name and tag').fill('Q3 Results');
        await choose(dialog, /image size/i, /fit to landscape/i);
        await choose(dialog, /^background$/i, /^transparent$/i);
        await choose(dialog, /image format/i, /^png$/i);
        await choose(dialog, /resolution/i, /full hd/i);
        await expect(
            pageItems(dialog).nth(0).locator('.checkerboard'),
        ).toBeVisible();

        await dialog.getByRole('button', { name: 'Import pages (2)' }).click();
        await expect(dialog).toBeHidden({ timeout: 30000 });

        // Import starts the upload, so the upload dialog only shows progress
        const upload = page.locator('bulk-media-upload-modal');
        await expect(upload).toBeVisible();
        await expect(upload).toContainText('Uploading 1 of 2');
        await expect(upload).toContainText('Q3 Results - page 1');
        await expect(upload).toContainText('Q3 Results - page 3');
        await expect(upload).not.toContainText('Q3 Results - page 2');
        await expect(upload).not.toContainText(/file access permissions/i);
        await expect(upload.getByRole('combobox')).toHaveCount(0);
        // Pages render as they upload, so the list shows the image size
        // they will have rather than a file size
        await expect(upload).toContainText('1920 × 1080');

        release();
        await expect(upload).toBeHidden({ timeout: 30000 });

        // Each page is listed by name, tagged with the PDF name
        for (const name of ['Q3 Results - page 1', 'Q3 Results - page 3']) {
            const item = page
                .locator('#media-list [role="listitem"]')
                .filter({ hasText: name });
            await expect(item).toBeVisible();
            await expect(item.locator('media-tag-chips')).toHaveText(
                'Q3 Results',
            );
        }

        // The stored images are full HD PNGs of the pages, fitted to a
        // landscape screen over a transparent background
        const images = stored.filter(({ name }) =>
            /^Q3 Results - page \d\.png$/.test(name),
        );
        expect(images.map(({ name }) => name).sort()).toEqual([
            'Q3 Results - page 1.png',
            'Q3 Results - page 3.png',
        ]);
        for (const image of images) {
            expect(image.mime).toBe('image/png');
            expect(pngSize(image.body)).toEqual({ width: 1920, height: 1080 });
        }
        const page_one = images.find(({ name }) => name.endsWith('1.png'));
        const [centre, corner] = await samplePixels(page, page_one.body, [
            [0.5, 0.5],
            [0.01, 0.01],
        ]);
        expect(centre).toEqual([255, 0, 0, 255]);
        expect(corner[3]).toBe(0);

        // Page 3 was turned, so the blue square sits in a portrait page
        // centred on the screen, with transparent bars either side
        const page_three = images.find(({ name }) => name.endsWith('3.png'));
        const [middle, side] = await samplePixels(page, page_three.body, [
            [0.5, 0.5],
            [0.1, 0.5],
        ]);
        expect(middle).toEqual([0, 0, 255, 255]);
        expect(side[3]).toBe(0);
    });

    test('names a file that is not a readable PDF', async ({ page }) => {
        await navigateWithMock(page, MEDIA_URL);
        await page
            .locator('media-list-header input[type="file"][multiple]')
            .first()
            .setInputFiles({
                name: 'broken.pdf',
                mimeType: 'application/pdf',
                buffer: Buffer.from('not a pdf'),
            });

        await expect(page.getByText(/could not read broken\.pdf/i)).toBeVisible(
            {
                timeout: 15000,
            },
        );
        await expect(page.getByRole('dialog')).toHaveCount(0);
    });
});
