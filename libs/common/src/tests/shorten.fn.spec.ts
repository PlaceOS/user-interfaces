import * as ts_client from '@placeos/ts-client';

import { getShortUrlQRCode, saveShortURL, ShortURL } from '../lib/shorten.fn';

vi.mock('@placeos/ts-client', { spy: true });

describe('short URLs', () => {
    beforeEach(() => vi.clearAllMocks());

    afterEach(() => {
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
    });

    describe('saveShortURL', () => {
        // ts-client overloads put and post; the JSON overload is the one used.
        type JsonRequest = (url: string, body: unknown) => Promise<object>;
        const put = vi.mocked(ts_client.put as JsonRequest);
        const post = vi.mocked(ts_client.post as JsonRequest);

        it('should update a URL that has an ID', async () => {
            put.mockResolvedValue({ id: 'url-1', name: 'Saved' });

            const saved = await saveShortURL({ id: 'url-1' } as ShortURL);

            expect(put).toHaveBeenCalledWith('/api/engine/v2/short_url/url-1', {
                id: 'url-1',
            });
            expect(post).not.toHaveBeenCalled();
            expect(saved).toEqual({ id: 'url-1', name: 'Saved' });
        });

        it('should create a URL that has no ID', async () => {
            post.mockResolvedValue({ id: 'url-2' });

            const saved = await saveShortURL({ name: 'New' } as ShortURL);

            expect(post).toHaveBeenCalledWith('/api/engine/v2/short_url', {
                name: 'New',
            });
            expect(put).not.toHaveBeenCalled();
            expect(saved).toEqual({ id: 'url-2' });
        });
    });

    describe('getShortUrlQRCode', () => {
        it('should fetch the QR code from the server once per format', async () => {
            vi.mocked(ts_client.isMock).mockReturnValue(false);
            vi.mocked(ts_client.token).mockReturnValue('token');
            const fetch = vi.fn(async () => new Response('png'));
            vi.stubGlobal('fetch', fetch);
            vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:qr');

            expect(await getShortUrlQRCode('uri-server', 'png')).toBe(
                'blob:qr',
            );
            expect(await getShortUrlQRCode('uri-server', 'png')).toBe(
                'blob:qr',
            );
            await getShortUrlQRCode('uri-server', 'svg');

            expect(fetch.mock.calls).toEqual([
                ['/api/engine/v2/short_url/uri-server/qr_code.png'],
                ['/api/engine/v2/short_url/uri-server/qr_code.svg'],
            ]);
        });

        it('should draw the QR code locally in mock mode', async () => {
            vi.mocked(ts_client.isMock).mockReturnValue(true);
            const fetch = vi.fn();
            vi.stubGlobal('fetch', fetch);

            const url = await getShortUrlQRCode('uri-mock');

            expect(url.startsWith('data:image/svg+xml,')).toBe(true);
            expect(fetch).not.toHaveBeenCalled();
        });
    });
});
