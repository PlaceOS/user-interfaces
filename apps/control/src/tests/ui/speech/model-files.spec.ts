import { ModelFiles } from '../../../app/ui/speech/litert';

/** Cache API stand-in that keeps responses by URL */
class FakeCache {
    public readonly store = new Map<string, Response>();

    public async match(url: string) {
        return this.store.get(url)?.clone();
    }

    public async put(url: string, response: Response) {
        this.store.set(url, response);
    }

    public async keys() {
        return [...this.store.keys()].map((url) => ({ url }) as Request);
    }

    public async delete(request: Request) {
        return this.store.delete(request.url);
    }
}

describe('ModelFiles', () => {
    let cache: FakeCache;
    const fetch = vi.fn();

    beforeEach(() => {
        cache = new FakeCache();
        fetch.mockReset();
        vi.stubGlobal('caches', { open: async () => cache });
        vi.stubGlobal('fetch', fetch);
    });

    afterEach(() => vi.unstubAllGlobals());

    it('should use the mirror folder instead of Hugging Face when one is set', () => {
        const hugging_face = new ModelFiles().url('whistle');
        expect(hugging_face).toMatch(
            /^https:\/\/huggingface\.co\/.+\/whistle\.cact$/,
        );
        // A folder URL with or without a trailing slash gives the same file URL
        for (const mirror of [
            'https://cdn.test/models',
            'https://cdn.test/models/',
        ]) {
            expect(new ModelFiles(mirror).url('matcha_config')).toBe(
                'https://cdn.test/models/config.json',
            );
        }
    });

    it('should download a file once and then read it from the cache', async () => {
        fetch.mockResolvedValue(new Response(new Uint8Array([1, 2, 3])));
        const files = new ModelFiles('https://cdn.test/');
        expect([...(await files.bytes('whistle'))]).toEqual([1, 2, 3]);
        expect([...(await files.bytes('whistle'))]).toEqual([1, 2, 3]);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('https://cdn.test/whistle.cact');
    });

    it('should not cache a failed download', async () => {
        fetch.mockResolvedValue(new Response('', { status: 404 }));
        const files = new ModelFiles('https://cdn.test/');
        await expect(files.bytes('whistle')).rejects.toThrow(
            'HTTP 404 when loading https://cdn.test/whistle.cact',
        );
        expect(cache.store.size).toBe(0);
    });

    it('should delete cached files that the app no longer uses', async () => {
        const files = new ModelFiles('https://cdn.test/');
        const current = files.url('whistle');
        cache.store.set(current, new Response('new'));
        cache.store.set(
            'https://cdn.test/old/whistle.cact',
            new Response('old'),
        );
        cache.store.set(new ModelFiles().url('whistle'), new Response('hf'));
        await files.prune();
        expect([...cache.store.keys()]).toEqual([current]);
    });
});
