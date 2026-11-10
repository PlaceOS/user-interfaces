import { Page } from '@playwright/test';

const SIGNED_UPLOAD_HOST = 'https://uploads.e2e.test';

interface CapturedUpload {
    name: string;
    mime: string;
    body: Buffer;
}

/**
 * Stand in for the uploads API and the storage it signs requests for. Mock
 * mode does not cover uploads, which go straight to the network. Resolves
 * with each file that reached storage. With `hold`, storage holds each file
 * until `release` is called, so the upload can be checked while it runs.
 */
export async function mockUploads(page: Page, { hold = false } = {}) {
    const uploads = new Map<string, { name: string; mime: string }>();
    const stored: CapturedUpload[] = [];
    let count = 0;
    let release: () => void;
    const released = hold
        ? new Promise<void>((resolve) => (release = resolve))
        : Promise.resolve();
    await page.route('**/api/engine/v2/uploads**', async (route) => {
        const request = route.request();
        const url = new URL(request.url());
        if (url.pathname.endsWith('/uploads/new')) {
            return route.fulfill({ json: { residence: 'AmazonS3' } });
        }
        if (request.method() === 'POST' && url.pathname.endsWith('/uploads')) {
            const params = request.postDataJSON();
            count += 1;
            const upload_id = `upload-${count}`;
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
        await released;
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
    return { stored, release: () => release?.() };
}
