import * as ts_client from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';

import { getShortUrlQRCode, saveShortURL } from '../lib/shorten.fn';
import { startFakePlaceClient } from './fake-session';
import { mockData } from './mock-data';
import { startMockPlaceClient } from './test-helpers';

vi.mock('@placeos/ts-client', { spy: true });

describe('short URLs', () => {
    beforeEach(() => vi.clearAllMocks());

    afterEach(() => {
        vi.restoreAllMocks();
    });

    describe('saveShortURL', () => {
        it('should update a URL that has an ID', async () => {
            const url = mockData(ts_client.ShortUrl, {
                id: 'url-1',
                name: 'Saved',
            });
            vi.mocked(ts_client.short_url.update).mockResolvedValue(
                mockReply(url),
            );

            const saved = await saveShortURL({ id: 'url-1' });

            expect(ts_client.short_url.update).toHaveBeenCalledWith({
                id: 'url-1',
                body: { id: 'url-1' },
            });
            expect(ts_client.short_url.create).not.toHaveBeenCalled();
            expect(saved).toEqual(url);
        });

        it('should create a URL that has no ID', async () => {
            const url = mockData(ts_client.ShortUrl, { id: 'url-2' });
            vi.mocked(ts_client.short_url.create).mockResolvedValue(
                mockReply(url),
            );

            const saved = await saveShortURL({ name: 'New' });

            expect(ts_client.short_url.create).toHaveBeenCalledWith({
                body: { name: 'New' },
            });
            expect(ts_client.short_url.update).not.toHaveBeenCalled();
            expect(saved).toEqual(url);
        });
    });

    describe('getShortUrlQRCode', () => {
        it('should load the QR code from the server once per format', async () => {
            startFakePlaceClient().signIn();
            vi.mocked(ts_client.short_url.pngQr).mockResolvedValue(
                mockReply(new Uint8Array([1, 2, 3])),
            );
            vi.mocked(ts_client.short_url.svgQr).mockResolvedValue(
                mockReply('<svg></svg>'),
            );
            vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:qr');

            expect(await getShortUrlQRCode('uri-server', 'png')).toBe(
                'blob:qr',
            );
            expect(await getShortUrlQRCode('uri-server', 'png')).toBe(
                'blob:qr',
            );
            await getShortUrlQRCode('uri-server', 'svg');

            expect(ts_client.short_url.pngQr).toHaveBeenCalledTimes(1);
            expect(ts_client.short_url.pngQr).toHaveBeenCalledWith({
                id: 'uri-server',
            });
            expect(ts_client.short_url.svgQr).toHaveBeenCalledTimes(1);
        });

        it('should draw the QR code locally in mock mode', async () => {
            startMockPlaceClient();

            const url = await getShortUrlQRCode('uri-mock');

            expect(url.startsWith('data:image/svg+xml,')).toBe(true);
            expect(ts_client.short_url.svgQr).not.toHaveBeenCalled();
        });
    });
});
