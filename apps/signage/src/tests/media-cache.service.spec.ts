import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { Subject } from 'rxjs';

import { MediaCacheService } from '../app/media-cache.service';

describe('MediaCacheService', () => {
    let spectator: SpectatorService<MediaCacheService>;
    const stored_files = new Map<
        string,
        {
            name: string;
            url?: string;
            owner?: string;
            owners?: string[];
            file: File;
        }
    >();

    const create_service = createServiceFactory({
        service: MediaCacheService,
    });

    /** Counts of the object store reads that pull file blobs into memory */
    let store_reads: { get: number; get_all: number; count: number };

    beforeEach(() => {
        stored_files.clear();
        localStorage.clear();
        store_reads = { get: 0, get_all: 0, count: 0 };
        const create_transaction = () => {
            const transaction = {
                oncomplete: null,
                onerror: null,
                onabort: null,
                objectStore: () => ({
                    add: (item: {
                        name: string;
                        url?: string;
                        owner?: string;
                        owners?: string[];
                        file: File;
                    }) => {
                        const request: IDBRequest = {} as IDBRequest;
                        stored_files.set(item.name, item);
                        queueMicrotask(() => {
                            request.onsuccess?.({} as Event);
                            transaction.oncomplete?.({} as Event);
                        });
                        return request;
                    },
                    get: (name: string) => {
                        store_reads.get++;
                        const request: IDBRequest = {
                            result: stored_files.get(name),
                        } as IDBRequest;
                        queueMicrotask(() => request.onsuccess?.({} as Event));
                        return request;
                    },
                    count: (name: string) => {
                        store_reads.count++;
                        const request: IDBRequest = {
                            result: stored_files.has(name) ? 1 : 0,
                        } as IDBRequest;
                        queueMicrotask(() => request.onsuccess?.({} as Event));
                        return request;
                    },
                    put: (item: {
                        name: string;
                        url?: string;
                        owner?: string;
                        owners?: string[];
                        file: File;
                    }) => {
                        const request: IDBRequest = {} as IDBRequest;
                        stored_files.set(item.name, item);
                        queueMicrotask(() => {
                            request.onsuccess?.({} as Event);
                            transaction.oncomplete?.({} as Event);
                        });
                        return request;
                    },
                    getAll: () => {
                        store_reads.get_all++;
                        const request: IDBRequest = {
                            result: [...stored_files.values()],
                        } as IDBRequest;
                        queueMicrotask(() => request.onsuccess?.({} as Event));
                        return request;
                    },
                    delete: (name: string) => {
                        const request: IDBRequest = {} as IDBRequest;
                        stored_files.delete(name);
                        queueMicrotask(() => {
                            request.onsuccess?.({} as Event);
                            transaction.oncomplete?.({} as Event);
                        });
                        return request;
                    },
                    clear: () => {
                        const request: IDBRequest = {} as IDBRequest;
                        stored_files.clear();
                        queueMicrotask(() => {
                            request.onsuccess?.({} as Event);
                            transaction.oncomplete?.({} as Event);
                        });
                        return request;
                    },
                }),
            };
            return transaction;
        };
        Object.defineProperty(globalThis, 'indexedDB', {
            configurable: true,
            value: {
                open: vi.fn(() => ({})),
            },
        });
        spectator = create_service();
        spectator.service['_cache_db'] = {
            transaction: vi.fn(create_transaction),
        } as any;
        spectator.service['_cache_db_ready'] = Promise.resolve();
    });

    afterEach(() => {
        spectator.service.ngOnDestroy();
        vi.restoreAllMocks();
    });

    it('should not read stored files when re-confirming a cached playlist', async () => {
        Object.defineProperty(globalThis, 'fetch', {
            configurable: true,
            value: vi.fn().mockResolvedValue({
                ok: true,
                blob: () =>
                    Promise.resolve(new Blob(['image'], { type: 'image/png' })),
            } as Response),
        });
        await spectator.service.requestFilesToCache(
            ['/a.png', '/b.png'],
            'display-1',
        );
        store_reads = { get: 0, get_all: 0, count: 0 };

        await spectator.service.requestFilesToCache(
            ['/a.png', '/b.png'],
            'display-1',
        );

        // Existence is confirmed with a key count, and staying under budget
        // must not walk the whole store to add up its size.
        expect(store_reads.count).toBe(2);
        expect(store_reads.get).toBe(0);
        expect(store_reads.get_all).toBe(0);
    });

    it('should track stored file sizes for pruning', async () => {
        Object.defineProperty(globalThis, 'fetch', {
            configurable: true,
            value: vi.fn().mockResolvedValue({
                ok: true,
                blob: () =>
                    Promise.resolve(new Blob(['image'], { type: 'image/png' })),
            } as Response),
        });

        await spectator.service.requestFilesToCache(['/a.png'], 'display-1');

        const [item] = spectator.service['_cache_index'];
        expect(item.size).toBe(5);
    });

    it('should restore tracked sizes from persisted metadata', () => {
        localStorage.setItem(
            'PlaceOS.SIGNAGE.cached_files',
            JSON.stringify([
                {
                    id: 'a',
                    url: '/a.png',
                    owner: 'display-1',
                    owners: ['display-1'],
                    size: 1234,
                },
            ]),
        );

        spectator.service['_loadCacheMetadata']();

        expect(spectator.service['_cache_index'][0].size).toBe(1234);
    });

    it('should evict the largest unneeded file when over budget', async () => {
        Object.defineProperty(globalThis, 'fetch', {
            configurable: true,
            value: vi.fn().mockResolvedValue({
                ok: true,
                blob: () =>
                    Promise.resolve(
                        new Blob(['0123456789'], { type: 'image/png' }),
                    ),
            } as Response),
        });
        await spectator.service.requestFilesToCache(
            ['/keep.png', '/drop.png'],
            'display-1',
        );

        await spectator.service.pruneCache('display-1', ['/keep.png'], 15);

        expect(spectator.service.availableFiles('display-1')).toEqual([
            '/keep.png',
        ]);
    });

    it('should recover a missing size from the store once', async () => {
        Object.defineProperty(globalThis, 'fetch', {
            configurable: true,
            value: vi.fn().mockResolvedValue({
                ok: true,
                blob: () =>
                    Promise.resolve(new Blob(['image'], { type: 'image/png' })),
            } as Response),
        });
        await spectator.service.requestFilesToCache(['/a.png'], 'display-1');
        // Metadata written by a build that did not record sizes
        spectator.service['_cache_index'][0].size = 0;
        store_reads = { get: 0, get_all: 0, count: 0 };

        await spectator.service.requestFilesToCache(['/a.png'], 'display-1');
        await spectator.service.requestFilesToCache(['/a.png'], 'display-1');

        expect(store_reads.get).toBe(1);
        expect(store_reads.count).toBe(1);
        expect(spectator.service['_cache_index'][0].size).toBe(5);
    });

    it('should invalidate failed downloads and keep caching following media', async () => {
        const fetch_spy = vi
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
        const fetch_spy = vi.fn().mockResolvedValue({
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

    it('should share one cached file between multiple owners', async () => {
        const fetch_spy = vi.fn().mockResolvedValue({
            ok: true,
            blob: () =>
                Promise.resolve(new Blob(['image'], { type: 'image/png' })),
        } as Response);
        Object.defineProperty(globalThis, 'fetch', {
            configurable: true,
            value: fetch_spy,
        });

        await spectator.service.requestFilesToCache(
            ['/shared.png'],
            'outer-display',
        );
        await spectator.service.requestFilesToCache(
            ['/shared.png'],
            'embedded-display',
        );

        expect(fetch_spy).toHaveBeenCalledTimes(1);
        expect(stored_files.size).toBe(1);
        expect(spectator.service.availableFiles('outer-display')).toEqual([
            '/shared.png',
        ]);
        expect(spectator.service.availableFiles('embedded-display')).toEqual([
            '/shared.png',
        ]);
        expect([...stored_files.values()][0].owners).toEqual([
            'outer-display',
            'embedded-display',
        ]);
    });

    it('should keep shared cached files when one owner invalidates them', async () => {
        const fetch_spy = vi.fn().mockResolvedValue({
            ok: true,
            blob: () =>
                Promise.resolve(new Blob(['image'], { type: 'image/png' })),
        } as Response);
        Object.defineProperty(globalThis, 'fetch', {
            configurable: true,
            value: fetch_spy,
        });
        await spectator.service.requestFilesToCache(
            ['/shared.png'],
            'outer-display',
        );
        await spectator.service.requestFilesToCache(
            ['/shared.png'],
            'embedded-display',
        );

        await spectator.service.invalidateFile('/shared.png', 'outer-display');

        expect(stored_files.size).toBe(1);
        expect(spectator.service.availableFiles('outer-display')).toEqual([]);
        expect(spectator.service.availableFiles('embedded-display')).toEqual([
            '/shared.png',
        ]);
        await expect(
            spectator.service.getFile('/shared.png'),
        ).resolves.toEqual(expect.any(File));
        expect([...stored_files.values()][0].owners).toEqual([
            'embedded-display',
        ]);
    });

    it('should remove shared cached files when the last owner invalidates them', async () => {
        const fetch_spy = vi.fn().mockResolvedValue({
            ok: true,
            blob: () =>
                Promise.resolve(new Blob(['image'], { type: 'image/png' })),
        } as Response);
        Object.defineProperty(globalThis, 'fetch', {
            configurable: true,
            value: fetch_spy,
        });
        await spectator.service.requestFilesToCache(
            ['/shared.png'],
            'outer-display',
        );
        await spectator.service.requestFilesToCache(
            ['/shared.png'],
            'embedded-display',
        );

        await spectator.service.invalidateFile('/shared.png', 'outer-display');
        await spectator.service.invalidateFile(
            '/shared.png',
            'embedded-display',
        );

        expect(stored_files.size).toBe(0);
        expect(spectator.service.availableFiles()).toEqual([]);
    });

    it('should re-download cached metadata when the backing file is missing', async () => {
        const fetch_spy = vi.fn().mockResolvedValue({
            ok: true,
            blob: () =>
                Promise.resolve(new Blob(['fresh'], { type: 'image/png' })),
        } as Response);
        Object.defineProperty(globalThis, 'fetch', {
            configurable: true,
            value: fetch_spy,
        });
        spectator.service['_file_cache_index'].set([
            {
                id: 'missing-file',
                url: '/stale.png',
                owner: 'display-1',
                status: 'cached',
                on_change: new Subject(),
            },
        ]);

        const has_failures = await spectator.service.requestFilesToCache(
            ['/stale.png'],
            'display-1',
        );

        expect(has_failures).toBe(false);
        expect(fetch_spy).toHaveBeenCalledWith('/stale.png');
        expect(spectator.service.availableFiles('display-1')).toEqual([
            '/stale.png',
        ]);
        await expect(
            spectator.service.getFile('/stale.png'),
        ).resolves.toEqual(expect.any(File));
    });

    it('should load cache metadata from IndexedDB records', async () => {
        stored_files.set('stored-file', {
            name: 'stored-file',
            url: '/stored.png',
            owner: 'display-1',
            file: new File(['image'], 'stored-file'),
        });

        await spectator.service['_loadCacheMetadataFromStore']();

        expect(spectator.service.availableFiles('display-1')).toEqual([
            '/stored.png',
        ]);
        await expect(
            spectator.service.getFile('/stored.png'),
        ).resolves.toEqual(expect.any(File));
    });

    it('should re-download cached metadata when the backing file is blank', async () => {
        stored_files.set('blank-file', {
            name: 'blank-file',
            url: '/blank.png',
            owner: 'display-1',
            file: new File([], 'blank-file'),
        });
        const fetch_spy = vi.fn().mockResolvedValue({
            ok: true,
            blob: () =>
                Promise.resolve(new Blob(['fresh'], { type: 'image/png' })),
        } as Response);
        Object.defineProperty(globalThis, 'fetch', {
            configurable: true,
            value: fetch_spy,
        });
        spectator.service['_file_cache_index'].set([
            {
                id: 'blank-file',
                url: '/blank.png',
                owner: 'display-1',
                status: 'cached',
                on_change: new Subject(),
            },
        ]);

        const has_failures = await spectator.service.requestFilesToCache(
            ['/blank.png'],
            'display-1',
        );

        expect(has_failures).toBe(false);
        expect(fetch_spy).toHaveBeenCalledWith('/blank.png');
        await expect(
            spectator.service.getFile('/blank.png'),
        ).resolves.toEqual(expect.any(File));
    });

    it('should reject empty downloads instead of storing blank files', async () => {
        const fetch_spy = vi.fn().mockResolvedValue({
            ok: true,
            blob: () => Promise.resolve(new Blob([])),
        } as Response);
        Object.defineProperty(globalThis, 'fetch', {
            configurable: true,
            value: fetch_spy,
        });

        const has_failures = await spectator.service.requestFilesToCache([
            '/empty.png',
        ]);

        expect(has_failures).toBe(true);
        expect(stored_files.size).toBe(0);
        expect(spectator.service.availableFiles()).toEqual([]);
        await expect(spectator.service.getFile('/empty.png')).resolves.toBe(
            null,
        );
    });

    it('should wait for the cache database before writing files', async () => {
        let resolve_ready: () => void;
        spectator.service['_cache_db_ready'] = new Promise<void>(
            (resolve) => (resolve_ready = resolve),
        );
        const fetch_spy = vi.fn().mockResolvedValue({
            ok: true,
            blob: () =>
                Promise.resolve(new Blob(['image'], { type: 'image/png' })),
        } as Response);
        Object.defineProperty(globalThis, 'fetch', {
            configurable: true,
            value: fetch_spy,
        });

        const cache_promise = spectator.service.requestFilesToCache([
            '/waiting.png',
        ]);
        await Promise.resolve();
        await Promise.resolve();

        expect(fetch_spy).toHaveBeenCalledWith('/waiting.png');
        expect(spectator.service['_cache_db'].transaction).not.toHaveBeenCalled();

        resolve_ready();
        await cache_promise;

        expect(spectator.service['_cache_db'].transaction).toHaveBeenCalled();
        expect(spectator.service.availableFiles()).toEqual(['/waiting.png']);
    });

    it('should not start a duplicate download for media already loading', async () => {
        const on_change = new Subject<any>();
        spectator.service['_file_cache_index'].set([
            {
                id: 'loading-file',
                url: '/loading.png',
                owner: 'display-1',
                status: 'downloading',
                on_change,
            },
        ]);
        const fetch_spy = vi.fn();
        Object.defineProperty(globalThis, 'fetch', {
            configurable: true,
            value: fetch_spy,
        });

        const cache_promise = spectator.service.requestFilesToCache(
            ['/loading.png'],
            'display-1',
        );
        await Promise.resolve();
        spectator.service['_cache_index'][0].status = 'cached';
        on_change.next('cached');
        const has_failures = await cache_promise;

        expect(has_failures).toBe(false);
        expect(fetch_spy).not.toHaveBeenCalled();
    });

    it('should only mark files cached after the IndexedDB transaction completes', async () => {
        let complete_transaction: () => void;
        spectator.service['_cache_db'] = {
            transaction: vi.fn(() => {
                const transaction = {
                    oncomplete: null,
                    onerror: null,
                    onabort: null,
                    objectStore: () => ({
                        add: (item: {
                            name: string;
                            url?: string;
                            owner?: string;
                            owners?: string[];
                            file: File;
                        }) => {
                            const request: IDBRequest = {} as IDBRequest;
                            stored_files.set(item.name, item);
                            queueMicrotask(() =>
                                request.onsuccess?.({} as Event),
                            );
                            complete_transaction = () =>
                                transaction.oncomplete?.({} as Event);
                            return request;
                        },
                    }),
                };
                return transaction;
            }),
        } as any;
        const fetch_spy = vi.fn().mockResolvedValue({
            ok: true,
            blob: () =>
                Promise.resolve(new Blob(['image'], { type: 'image/png' })),
        } as Response);
        Object.defineProperty(globalThis, 'fetch', {
            configurable: true,
            value: fetch_spy,
        });

        const cache_promise = spectator.service.requestFilesToCache([
            '/transaction.png',
        ]);
        await Promise.resolve();
        await Promise.resolve();
        await Promise.resolve();

        expect(spectator.service.availableFiles()).toEqual([]);

        complete_transaction();
        await cache_promise;

        expect(spectator.service.availableFiles()).toEqual([
            '/transaction.png',
        ]);
    });

    it('should keep earlier priority files when the owner cache is over size', async () => {
        const fetch_spy = vi
            .fn()
            .mockResolvedValueOnce({
                ok: true,
                blob: () => Promise.resolve(new Blob(['1111'])),
            } as Response)
            .mockResolvedValueOnce({
                ok: true,
                blob: () => Promise.resolve(new Blob(['2222'])),
            } as Response)
            .mockResolvedValueOnce({
                ok: true,
                blob: () => Promise.resolve(new Blob(['3333'])),
            } as Response);
        Object.defineProperty(globalThis, 'fetch', {
            configurable: true,
            value: fetch_spy,
        });

        await spectator.service.requestFilesToCache(
            ['/first.png', '/second.png', '/third.png'],
            'display-1',
            { max_size: 8 },
        );

        expect(spectator.service.availableFiles('display-1')).toEqual([
            '/first.png',
            '/second.png',
        ]);
        expect([...stored_files.values()].map((_) => _.url)).toEqual([
            '/first.png',
            '/second.png',
        ]);
    });

    it('should evict non-priority owner files before active playlist files', async () => {
        const make_file = (name: string) => new File(['12345'], name);
        stored_files.set('active-file', {
            name: 'active-file',
            url: '/active.png',
            owner: 'display-1',
            owners: ['display-1'],
            file: make_file('active-file'),
        });
        stored_files.set('stale-file', {
            name: 'stale-file',
            url: '/stale.png',
            owner: 'display-1',
            owners: ['display-1'],
            file: make_file('stale-file'),
        });
        spectator.service['_file_cache_index'].set([
            {
                id: 'active-file',
                url: '/active.png',
                owner: 'display-1',
                owners: ['display-1'],
                status: 'cached',
                on_change: new Subject(),
            },
            {
                id: 'stale-file',
                url: '/stale.png',
                owner: 'display-1',
                owners: ['display-1'],
                status: 'cached',
                on_change: new Subject(),
            },
        ]);

        await spectator.service.pruneCache('display-1', ['/active.png'], 5);

        expect(spectator.service.availableFiles('display-1')).toEqual([
            '/active.png',
        ]);
        expect([...stored_files.values()].map((_) => _.url)).toEqual([
            '/active.png',
        ]);
    });

    it('should allow root players to evict nested player files when over size', async () => {
        const make_file = (name: string) => new File(['12345'], name);
        stored_files.set('active-file', {
            name: 'active-file',
            url: '/active.png',
            owner: 'root-display',
            owners: ['root-display'],
            file: make_file('active-file'),
        });
        stored_files.set('nested-file', {
            name: 'nested-file',
            url: '/nested.png',
            owner: 'nested-display',
            owners: ['nested-display'],
            file: make_file('nested-file'),
        });
        spectator.service['_file_cache_index'].set([
            {
                id: 'active-file',
                url: '/active.png',
                owner: 'root-display',
                owners: ['root-display'],
                status: 'cached',
                on_change: new Subject(),
            },
            {
                id: 'nested-file',
                url: '/nested.png',
                owner: 'nested-display',
                owners: ['nested-display'],
                status: 'cached',
                on_change: new Subject(),
            },
        ]);

        await spectator.service.pruneCache(
            'root-display',
            ['/active.png'],
            5,
            true,
        );

        expect(spectator.service.availableFiles('root-display')).toEqual([
            '/active.png',
        ]);
        expect(spectator.service.availableFiles('nested-display')).toEqual([]);
        expect([...stored_files.values()].map((_) => _.url)).toEqual([
            '/active.png',
        ]);
    });

    it('should keep pruning scoped to one owner by default', async () => {
        const make_file = (name: string) => new File(['12345'], name);
        stored_files.set('root-file', {
            name: 'root-file',
            url: '/root.png',
            owner: 'root-display',
            owners: ['root-display'],
            file: make_file('root-file'),
        });
        stored_files.set('nested-file', {
            name: 'nested-file',
            url: '/nested.png',
            owner: 'nested-display',
            owners: ['nested-display'],
            file: make_file('nested-file'),
        });
        spectator.service['_file_cache_index'].set([
            {
                id: 'root-file',
                url: '/root.png',
                owner: 'root-display',
                owners: ['root-display'],
                status: 'cached',
                on_change: new Subject(),
            },
            {
                id: 'nested-file',
                url: '/nested.png',
                owner: 'nested-display',
                owners: ['nested-display'],
                status: 'cached',
                on_change: new Subject(),
            },
        ]);

        await spectator.service.pruneCache(
            'nested-display',
            ['/nested.png'],
            5,
        );

        expect(spectator.service.availableFiles('root-display')).toEqual([
            '/root.png',
        ]);
        expect(spectator.service.availableFiles('nested-display')).toEqual([
            '/nested.png',
        ]);
        expect([...stored_files.values()].map((_) => _.url)).toEqual([
            '/root.png',
            '/nested.png',
        ]);
    });
});
