import {
    clearAuthenticatedImageCache,
    loadAuthenticatedImageWithHeader,
    loadUploadPreview,
    UNKNOWN_UPLOAD_TYPE,
} from '../lib/authenticated-image';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

describe('authenticated image loading', () => {
    let create_url: ReturnType<typeof vi.spyOn>;
    let revoke_url: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
        clearAuthenticatedImageCache();
        vi.clearAllMocks();
        create_url = vi
            .spyOn(URL, 'createObjectURL')
            .mockImplementation(
                () => `blob:image-${create_url.mock.calls.length}`,
            );
        revoke_url = vi
            .spyOn(URL, 'revokeObjectURL')
            .mockImplementation(() => {});
    });

    afterEach(() => {
        clearAuthenticatedImageCache();
        vi.restoreAllMocks();
        vi.unstubAllGlobals();
    });

    it('shares a request while the same image is loading', async () => {
        let finish_request!: (response: Response) => void;
        const response = new Promise<Response>((resolve) => {
            finish_request = resolve;
        });
        const fetch_mock = vi.fn().mockReturnValue(response);
        vi.stubGlobal('fetch', fetch_mock);

        const first = loadAuthenticatedImageWithHeader('/image/one');
        const second = loadAuthenticatedImageWithHeader('/image/one');
        finish_request(new Response(new Blob(['image'])));

        await expect(first).resolves.toBe(await second);
        expect(fetch_mock).toHaveBeenCalledTimes(1);
        expect(create_url).toHaveBeenCalledTimes(1);
    });

    it('evicts and revokes the oldest object URL at the cache limit', async () => {
        vi.stubGlobal(
            'fetch',
            vi
                .fn()
                .mockImplementation(() =>
                    Promise.resolve(new Response(new Blob(['image']))),
                ),
        );

        for (let index = 0; index < 65; index += 1) {
            await loadAuthenticatedImageWithHeader(`/image/${index}`);
        }

        expect(revoke_url).toHaveBeenCalledTimes(1);
        expect(revoke_url).toHaveBeenCalledWith('blob:image-1');
    });

    it('does not follow redirects with an API key header', async () => {
        vi.mocked(ts_client.token).mockReturnValue('x-api-key');
        vi.mocked(ts_client.apiKey).mockReturnValue('device-key');
        const fetch_mock = vi
            .fn()
            .mockResolvedValue(new Response(new Blob(['image'])));
        vi.stubGlobal('fetch', fetch_mock);

        await loadAuthenticatedImageWithHeader('/image/key');

        expect(fetch_mock).toHaveBeenCalledWith('/image/key', {
            headers: { 'X-API-Key': 'device-key' },
            redirect: 'error',
        });
    });

    it('types an upload preview from its content, not the server', async () => {
        const html = new Response('<script>alert(1)</script>', {
            headers: { 'Content-Type': 'application/pdf' },
        });
        const pdf = new Response(
            new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d]),
            {
                headers: { 'Content-Type': 'text/html' },
            },
        );
        vi.stubGlobal(
            'fetch',
            vi.fn().mockResolvedValueOnce(html).mockResolvedValueOnce(pdf),
        );

        const upload = '/api/engine/v2/uploads/doc/url';
        expect((await loadUploadPreview(upload)).type).toBe(
            UNKNOWN_UPLOAD_TYPE,
        );
        expect((await loadUploadPreview(upload)).type).toBe('application/pdf');
    });
});
