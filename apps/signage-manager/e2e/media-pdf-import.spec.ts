import { expect, Locator, Page, test } from '@playwright/test';
import { buildPdf } from './pdf-fixture';
import { MEDIA_URL, navigateWithMock } from './test-utils';

const RED: [number, number, number] = [1, 0, 0];
const GREEN: [number, number, number] = [0, 0.6, 0];
const BLUE: [number, number, number] = [0, 0, 1];

/** A 16:9 slide, an A4 page and another slide */
const DECK = buildPdf([
    { width: 960, height: 540, colour: RED, label: 'One' },
    { width: 595, height: 842, colour: GREEN, label: 'Two' },
    { width: 960, height: 540, colour: BLUE, label: 'Three' },
]);

const SIGNED_UPLOAD_HOST = 'https://uploads.e2e.test';

interface CapturedUpload {
    name: string;
    mime: string;
    body: Buffer;
}

/**
 * Stand in for the uploads API and the storage it signs requests for. Mock
 * mode does not cover uploads, which go straight to the network. Resolves
 * with each file that reached storage.
 */
async function mockUploads(page: Page) {
    const uploads = new Map<string, { name: string; mime: string }>();
    const stored: CapturedUpload[] = [];
    let count = 0;
    await page.route('**/api/engine/v2/uploads**', async (route) => {
        const request = route.request();
        const url = new URL(request.url());
        if (url.pathname.endsWith('/uploads/new')) {
            return route.fulfill({ json: { residence: 'AmazonS3' } });
        }
        if (request.method() === 'POST' && url.pathname.endsWith('/uploads')) {
            const params = request.postDataJSON();
            count += 1;
            const upload_id = `upload-pdf-${count}`;
            uploads.set(upload_id, {
                name: params.file_name,
                mime: params.file_mime,
            });
            return route.fulfill({
                json: {
                    type: 'direct_upload',
                    upload_id,
                    residence: 'AmazonS3',
                    signature: {
                        verb: 'PUT',
                        url: `${SIGNED_UPLOAD_HOST}/${upload_id}`,
                        headers: {},
                    },
                },
            });
        }
        return route.fulfill({ json: {} });
    });
    await page.route(`${SIGNED_UPLOAD_HOST}/**`, async (route) => {
        const request = route.request();
        if (request.method() === 'OPTIONS') {
            return route.fulfill({
                headers: {
                    'access-control-allow-origin': '*',
                    'access-control-allow-methods': 'PUT',
                    'access-control-allow-headers': '*',
                },
            });
        }
        const upload_id = new URL(request.url()).pathname.slice(1);
        const details = uploads.get(upload_id);
        stored.push({
            name: details?.name || upload_id,
            mime: details?.mime || '',
            body: request.postDataBuffer() || Buffer.alloc(0),
        });
        return route.fulfill({
            headers: { 'access-control-allow-origin': '*', etag: '"1"' },
            body: '',
        });
    });
    return stored;
}

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
        await expect(first_preview).toHaveAttribute('src', /^data:image\/png/);
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

    test('uploads the selected pages named and tagged after the PDF', async ({
        page,
    }) => {
        const stored = await mockUploads(page);
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

        const upload = page.locator('bulk-media-upload-modal');
        await expect(upload).toBeVisible();
        await expect(upload).toContainText('Q3 Results - page 1');
        await expect(upload).toContainText('Q3 Results - page 3');
        await expect(upload).not.toContainText('Q3 Results - page 2');

        await upload.getByRole('button', { name: 'Upload files (2)' }).click();
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
