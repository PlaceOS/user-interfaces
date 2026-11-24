import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { expect, test } from '@playwright/test';
import { navigateWithMock } from './test-utils';
import { mockUploads } from './upload-mocks';

// A 32×24 HEIC image generated from two solid colour blocks.
const POSTER = readFileSync(join(__dirname, 'fixtures/poster.heic'));

for (const { input_extension, input_type, output_extension, output_type } of [
    {
        input_extension: 'HEIC',
        input_type: 'image/heic',
        output_extension: 'webp',
        output_type: 'image/webp',
    },
    {
        input_extension: 'heif',
        input_type: 'application/octet-stream',
        output_extension: 'jpg',
        output_type: 'image/jpeg',
    },
]) {
    test(`previews ${input_extension} and uploads it as ${output_extension}`, async ({
        page,
    }) => {
        const { stored } = await mockUploads(page);
        const decoder_requests: string[] = [];
        page.on('request', (request) => {
            if (request.url().includes('/assets/heif/')) {
                decoder_requests.push(new URL(request.url()).pathname);
            }
        });
        if (output_extension === 'jpg') {
            // Simulate a browser whose canvas falls back to PNG for WebP.
            await page.route('**/heif-conversion.worker.mjs', async (route) => {
                const response = await route.fetch();
                await route.fulfill({
                    response,
                    body: `
                        const encode = OffscreenCanvas.prototype.convertToBlob;
                        OffscreenCanvas.prototype.convertToBlob = function (options) {
                            return encode.call(this, options.type === 'image/webp'
                                ? { type: 'image/png' }
                                : options);
                        };
                        ${await response.text()}
                    `,
                });
            });
        }
        await navigateWithMock(page);
        expect(decoder_requests).toEqual([]);

        const file_name = `poster.${output_extension}`;
        await page
            .locator('media-list-header input[type="file"][multiple]')
            .first()
            .setInputFiles({
                name: `poster.${input_extension}`,
                mimeType: input_type,
                buffer: POSTER,
            });

        const edit = page.locator('media-edit-modal');
        await expect(edit.locator('input#media-name')).toHaveValue(file_name);
        const preview = edit.getByRole('img', { name: file_name });
        await expect(preview).toBeVisible();
        await expect(preview).toHaveJSProperty('naturalWidth', 32);
        await expect(preview).toHaveJSProperty('naturalHeight', 24);
        expect(decoder_requests).toContain('/assets/heif/libheif-bundle.mjs');
        expect(stored).toHaveLength(0);

        await edit.getByRole('button', { name: /save/i }).click();
        await expect(edit).toHaveCount(0, { timeout: 30_000 });
        const upload = stored.find(({ name }) => name === file_name);
        expect(upload).toMatchObject({ name: file_name, mime: output_type });
        if (output_extension === 'webp') {
            expect(upload.body.toString('ascii', 8, 12)).toBe('WEBP');
        } else {
            expect(upload.body.subarray(0, 3).toString('hex')).toBe('ffd8ff');
        }
    });
}
