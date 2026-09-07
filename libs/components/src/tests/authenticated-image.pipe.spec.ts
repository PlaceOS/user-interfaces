import {
    clearAuthenticatedImageCache,
    loadAuthenticatedImageWithHeader,
} from '../lib/authenticated-image.pipe';

vi.mock('@placeos/ts-client', { spy: true });

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
});
