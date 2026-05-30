import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';

import { MediaCacheService } from '../app/media-cache.service';

describe('MediaCacheService', () => {
    let spectator: SpectatorService<MediaCacheService>;
    const stored_files = new Map<string, File>();

    const create_service = createServiceFactory({
        service: MediaCacheService,
    });

    beforeEach(() => {
        stored_files.clear();
        localStorage.clear();
        Object.defineProperty(globalThis, 'indexedDB', {
            configurable: true,
            value: {
                open: jest.fn(() => ({})),
            },
        });
        spectator = create_service();
        spectator.service['_cache_db'] = {
            transaction: jest.fn(() => ({
                objectStore: () => ({
                    add: (item: { name: string; file: File }) => {
                        const request: IDBRequest = {} as IDBRequest;
                        stored_files.set(item.name, item.file);
                        queueMicrotask(() => request.onsuccess?.({} as Event));
                        return request;
                    },
                    get: (name: string) => {
                        const request: IDBRequest = {
                            result: {
                                file: stored_files.get(name),
                            },
                        } as IDBRequest;
                        queueMicrotask(() => request.onsuccess?.({} as Event));
                        return request;
                    },
                }),
            })),
        } as any;
    });

    afterEach(() => {
        spectator.service.ngOnDestroy();
        jest.restoreAllMocks();
    });

    it('should invalidate failed downloads and keep caching following media', async () => {
        const fetch_spy = jest
            .fn()
            .mockResolvedValueOnce({ ok: false, status: 500 } as Response)
            .mockResolvedValueOnce({
                ok: true,
                blob: () =>
                    Promise.resolve(new Blob(['image'], { type: 'image/png' })),
            } as Response);
        Object.defineProperty(globalThis, 'fetch', {
            configurable: true,
            value: fetch_spy,
        });

        const has_failures = await spectator.service.requestFilesToCache([
            '/broken.png',
            '/new.png',
        ]);

        expect(has_failures).toBe(true);
        expect(fetch_spy).toHaveBeenCalledTimes(2);
        expect(spectator.service.isLoadingFile('/broken.png')).toBe(false);
        expect(spectator.service.isLoadingFile('/new.png')).toBe(false);
        expect(spectator.service.availableFiles()).toEqual(['/new.png']);
        await expect(spectator.service.getFile('/broken.png')).resolves.toBe(
            null,
        );
        await expect(spectator.service.getFile('/new.png')).resolves.toEqual(
            expect.any(File),
        );
    });

    it('should only report cached files for the requested owner', async () => {
        const fetch_spy = jest.fn().mockResolvedValue({
            ok: true,
            blob: () =>
                Promise.resolve(new Blob(['image'], { type: 'image/png' })),
        } as Response);
        Object.defineProperty(globalThis, 'fetch', {
            configurable: true,
            value: fetch_spy,
        });

        await spectator.service.requestFilesToCache(
            ['/outer.png'],
            'outer-display',
        );
        await spectator.service.requestFilesToCache(
            ['/embedded.png'],
            'embedded-display',
        );

        expect(spectator.service.availableFiles('outer-display')).toEqual([
            '/outer.png',
        ]);
        expect(spectator.service.availableFiles('embedded-display')).toEqual([
            '/embedded.png',
        ]);
        await expect(
            spectator.service.invalidateFile('/outer.png', 'embedded-display'),
        ).rejects.toBe('Cached item with URL not found');
        await expect(
            spectator.service.getFile('/outer.png'),
        ).resolves.toEqual(expect.any(File));
    });
});
