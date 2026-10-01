import { TestBed } from '@angular/core/testing';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
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
        ).rejects.toThrow('Cached item with URL not found');
        await expect(spectator.service.getFile('/outer.png')).resolves.toEqual(
            expect.any(File),
        );
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
        await expect(spectator.service.getFile('/shared.png')).resolves.toEqual(
            expect.any(File),
        );
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
        expect(fetch_spy).toHaveBeenCalledWith('/stale.png', expect.anything());
        expect(spectator.service.availableFiles('display-1')).toEqual([
            '/stale.png',
        ]);
        await expect(spectator.service.getFile('/stale.png')).resolves.toEqual(
            expect.any(File),
        );
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
        await expect(spectator.service.getFile('/stored.png')).resolves.toEqual(
            expect.any(File),
        );
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
        expect(fetch_spy).toHaveBeenCalledWith('/blank.png', expect.anything());
        await expect(spectator.service.getFile('/blank.png')).resolves.toEqual(
            expect.any(File),
        );
        // The blank record is replaced, not left behind
        expect(stored_files.has('blank-file')).toBe(false);
        expect(stored_files.size).toBe(1);
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
        for (let i = 0; i < 20 && !fetch_spy.mock.calls.length; i++) {
            await Promise.resolve();
        }

        expect(fetch_spy).toHaveBeenCalledWith(
            '/waiting.png',
            expect.anything(),
        );
        expect(
            spectator.service['_cache_db'].transaction,
        ).not.toHaveBeenCalled();

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
        // Let the download and the write request start, but not complete
        for (let i = 0; i < 20 && !complete_transaction; i++) {
            await Promise.resolve();
        }

        expect(complete_transaction).toBeDefined();
        expect(spectator.service.availableFiles()).toEqual([]);

        complete_transaction();
        await cache_promise;

        expect(spectator.service.availableFiles()).toEqual([
            '/transaction.png',
        ]);
    });

    it('should not download a priority file that cannot fit', async () => {
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

        const has_failures = await spectator.service.requestFilesToCache(
            ['/first.png', '/second.png', '/third.png'],
            'display-1',
            { max_size: 8 },
        );

        expect(has_failures).toBe(false);
        expect(fetch_spy).toHaveBeenCalledTimes(2);
        expect(spectator.service.availableFiles('display-1')).toEqual([
            '/first.png',
            '/second.png',
        ]);
        expect([...stored_files.values()].map((_) => _.url)).toEqual([
            '/first.png',
            '/second.png',
        ]);
        // Plays from the network without waiting on a download
        expect(spectator.service.isLoadingFile('/third.png')).toBe(false);
        expect(spectator.service.cacheState().too_large).toEqual([
            '/third.png',
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

    describe('recovery', () => {
        const good_fetch = () =>
            vi.fn().mockResolvedValue({
                ok: true,
                blob: () =>
                    Promise.resolve(new Blob(['image'], { type: 'image/png' })),
            } as Response);

        const streamed_response = (
            body: ReadableStream<Uint8Array>,
            length = 0,
        ) =>
            ({
                ok: true,
                headers: new Headers({
                    'content-type': 'image/png',
                    ...(length ? { 'content-length': `${length}` } : {}),
                }),
                body,
            }) as Response;

        const cached_entry = (id: string, url: string) => ({
            id,
            url,
            owner: 'display-1',
            owners: ['display-1'],
            size: 5,
            status: 'cached' as const,
            on_change: new Subject<any>(),
        });

        it('should drop persisted entries the store no longer holds', async () => {
            const service = spectator.service as any;
            service._file_cache_index.set([cached_entry('gone', '/gone.png')]);
            service._unverified_ids.add('gone');

            await service._loadCacheMetadataFromStore();

            expect(spectator.service.availableFiles('display-1')).toEqual([]);
            expect(spectator.service.cacheState().files).toEqual([]);
        });

        it('should keep files cached this session that a store snapshot predates', async () => {
            const service = spectator.service as any;
            service._file_cache_index.set([
                cached_entry('fresh', '/fresh.png'),
            ]);

            await service._loadCacheMetadataFromStore();

            expect(spectator.service.availableFiles('display-1')).toEqual([
                '/fresh.png',
            ]);
        });

        it('should hand back a download that could not be stored', async () => {
            Object.defineProperty(globalThis, 'fetch', {
                configurable: true,
                value: good_fetch(),
            });
            spectator.service['_cache_db'] = {
                transaction: vi.fn(() => {
                    const transaction: any = {
                        objectStore: () => ({
                            add: () => {
                                const request: any = {};
                                queueMicrotask(() =>
                                    request.onerror?.({
                                        target: {
                                            error: new Error(
                                                'QuotaExceededError',
                                            ),
                                        },
                                    }),
                                );
                                return request;
                            },
                        }),
                    };
                    return transaction;
                }),
            } as any;

            const file = await spectator.service.fetchFile(
                '/unstorable.png',
                'display-1',
            );

            expect(file).toEqual(expect.any(File));
            expect(spectator.service.isCachedFile('/unstorable.png')).toBe(
                false,
            );
            expect(spectator.service.isLoadingFile('/unstorable.png')).toBe(
                false,
            );
        });

        it('should still report a failure to the cache sync when storing fails', async () => {
            Object.defineProperty(globalThis, 'fetch', {
                configurable: true,
                value: good_fetch(),
            });
            spectator.service['_cache_db'] = {
                transaction: vi.fn(() => ({
                    objectStore: () => ({
                        add: () => {
                            const request: any = {};
                            queueMicrotask(() =>
                                request.onerror?.({
                                    target: { error: new Error('nope') },
                                }),
                            );
                            return request;
                        },
                    }),
                })),
            } as any;

            const has_failures = await spectator.service.requestFilesToCache(
                ['/unstorable.png'],
                'display-1',
            );

            expect(has_failures).toBe(true);
        });

        it('should share one download between concurrent requests for a file', async () => {
            const fetch_spy = good_fetch();
            Object.defineProperty(globalThis, 'fetch', {
                configurable: true,
                value: fetch_spy,
            });

            const [first, second] = await Promise.all([
                spectator.service.fetchFile('/shared.png', 'display-1'),
                spectator.service.fetchFile('/shared.png', 'display-1'),
            ]);

            expect(fetch_spy).toHaveBeenCalledTimes(1);
            expect(first).toEqual(expect.any(File));
            expect(second).toEqual(expect.any(File));
            expect(
                spectator.service
                    .cacheState()
                    .files.filter((_) => _.url === '/shared.png'),
            ).toHaveLength(1);
        });

        it('should collapse duplicate entries for a URL when it is cached again', async () => {
            Object.defineProperty(globalThis, 'fetch', {
                configurable: true,
                value: good_fetch(),
            });
            spectator.service['_file_cache_index'].set([
                cached_entry('stale-1', '/dup.png'),
                cached_entry('stale-2', '/dup.png'),
            ]);

            await spectator.service.requestFilesToCache(
                ['/dup.png'],
                'display-1',
            );

            const entries = spectator.service
                .cacheState()
                .files.filter((_) => _.url === '/dup.png');
            expect(entries).toHaveLength(1);
            expect(entries[0].status).toBe('cached');
            await expect(
                spectator.service.getFile('/dup.png'),
            ).resolves.toEqual(expect.any(File));
        });

        it('should stop waiting on a download that never finishes', async () => {
            spectator.service['_file_cache_index'].set([
                {
                    id: 'stuck',
                    url: '/stuck.png',
                    status: 'downloading',
                    on_change: new Subject(),
                },
            ]);

            await expect(
                spectator.service.getFile('/stuck.png', 10),
            ).resolves.toBeNull();
            await expect(
                spectator.service.fetchFile('/stuck.png', 'display-1', 10),
            ).resolves.toBeNull();
        });

        it('should abandon a download the server never answers', async () => {
            vi.useFakeTimers();
            try {
                Object.defineProperty(globalThis, 'fetch', {
                    configurable: true,
                    value: vi.fn(() => new Promise(() => undefined)),
                });

                const cache_promise = spectator.service.requestFilesToCache([
                    '/hung.png',
                ]);
                await vi.advanceTimersByTimeAsync(61_000);

                await expect(cache_promise).resolves.toBe(true);
                expect(spectator.service.isLoadingFile('/hung.png')).toBe(
                    false,
                );
            } finally {
                vi.useRealTimers();
            }
        });

        it('should abandon a download that stops sending data', async () => {
            vi.useFakeTimers();
            try {
                Object.defineProperty(globalThis, 'fetch', {
                    configurable: true,
                    value: vi.fn().mockResolvedValue(
                        streamed_response(
                            new ReadableStream<Uint8Array>({
                                pull: () => new Promise(() => undefined),
                            }),
                        ),
                    ),
                });

                const cache_promise = spectator.service.requestFilesToCache([
                    '/stalled.png',
                ]);
                await vi.advanceTimersByTimeAsync(61_000);

                await expect(cache_promise).resolves.toBe(true);
                expect(spectator.service.isLoadingFile('/stalled.png')).toBe(
                    false,
                );
            } finally {
                vi.useRealTimers();
            }
        });

        it('should stream a download in chunks', async () => {
            const chunks = [new Uint8Array([1, 2]), new Uint8Array([3])];
            Object.defineProperty(globalThis, 'fetch', {
                configurable: true,
                value: vi.fn().mockResolvedValue(
                    streamed_response(
                        new ReadableStream<Uint8Array>({
                            pull: (controller) => {
                                const chunk = chunks.shift();
                                if (chunk) controller.enqueue(chunk);
                                else controller.close();
                            },
                        }),
                    ),
                ),
            });

            const file = await spectator.service.fetchFile('/chunked.png');

            expect(file?.size).toBe(3);
            expect(file?.type).toBe('image/png');
            expect(spectator.service.isCachedFile('/chunked.png')).toBe(true);
        });

        it('should let a slow download finish while data keeps arriving', async () => {
            vi.useFakeTimers();
            try {
                // 40 chunks, 30 seconds apart: 20 minutes in all
                let sent = 0;
                Object.defineProperty(globalThis, 'fetch', {
                    configurable: true,
                    value: vi.fn().mockResolvedValue(
                        streamed_response(
                            new ReadableStream<Uint8Array>({
                                pull: async (controller) => {
                                    await new Promise((resolve) =>
                                        setTimeout(resolve, 30_000),
                                    );
                                    controller.enqueue(new Uint8Array([1]));
                                    if (++sent >= 40) controller.close();
                                },
                            }),
                        ),
                    ),
                });

                const cache_promise = spectator.service.requestFilesToCache([
                    '/slow.mp4',
                ]);
                await vi.advanceTimersByTimeAsync(21 * 60_000);

                await expect(cache_promise).resolves.toBe(false);
                expect(spectator.service.cacheState().files[0].size).toBe(40);
            } finally {
                vi.useRealTimers();
            }
        });

        it('should not download a file whose length cannot fit', async () => {
            const body = new ReadableStream<Uint8Array>();
            const fetch_spy = vi
                .fn()
                .mockResolvedValue(streamed_response(body, 100));
            Object.defineProperty(globalThis, 'fetch', {
                configurable: true,
                value: fetch_spy,
            });

            const has_failures = await spectator.service.requestFilesToCache(
                ['/huge.mp4'],
                'display-1',
                { max_size: 50 },
            );
            await spectator.service.requestFilesToCache(
                ['/huge.mp4'],
                'display-1',
                { max_size: 50 },
            );

            // Refused on its headers, and not asked for again
            expect(has_failures).toBe(false);
            expect(fetch_spy).toHaveBeenCalledTimes(1);
            expect(body.locked).toBe(false);
            expect(spectator.service.isLoadingFile('/huge.mp4')).toBe(false);
            // Playback streams it from the server instead
            await expect(
                spectator.service.fetchFile('/huge.mp4', 'display-1'),
            ).resolves.toBeNull();
            expect(fetch_spy).toHaveBeenCalledTimes(1);
        });

        it('should evict files outside the playlist to make room before storing', async () => {
            Object.defineProperty(globalThis, 'fetch', {
                configurable: true,
                value: good_fetch(),
            });
            stored_files.set('stale', {
                name: 'stale',
                url: '/stale.png',
                owner: 'display-1',
                owners: ['display-1'],
                file: new File(['12345'], 'stale'),
            });
            spectator.service['_file_cache_index'].set([
                cached_entry('stale', '/stale.png'),
            ]);

            const has_failures = await spectator.service.requestFilesToCache(
                ['/new.png'],
                'display-1',
                { max_size: 8 },
            );

            expect(has_failures).toBe(false);
            expect(spectator.service.availableFiles()).toEqual(['/new.png']);
            expect([...stored_files.values()].map((_) => _.url)).toEqual([
                '/new.png',
            ]);
        });

        it('should evict and retry once when storage is full', async () => {
            Object.defineProperty(globalThis, 'fetch', {
                configurable: true,
                value: good_fetch(),
            });
            stored_files.set('stale', {
                name: 'stale',
                url: '/stale.png',
                owner: 'display-1',
                owners: ['display-1'],
                file: new File(['12345'], 'stale'),
            });
            spectator.service['_file_cache_index'].set([
                cached_entry('stale', '/stale.png'),
            ]);
            const store_file = spectator.service['_storeFile'].bind(
                spectator.service,
            );
            spectator.service['_storeFile'] = vi
                .fn()
                .mockRejectedValueOnce(
                    new DOMException('Storage is full', 'QuotaExceededError'),
                )
                .mockImplementation(store_file);

            const has_failures = await spectator.service.requestFilesToCache(
                ['/new.png'],
                'display-1',
            );

            expect(has_failures).toBe(false);
            expect(spectator.service.availableFiles()).toEqual(['/new.png']);
            expect([...stored_files.values()].map((_) => _.url)).toEqual([
                '/new.png',
            ]);
        });

        // Chrome reports a disk filling during a blob write as a DataError
        it.each(['QuotaExceededError', 'DataError'])(
            'should stop retrying a file that storage has no room for (%s)',
            async (error_name) => {
                const fetch_spy = good_fetch();
                Object.defineProperty(globalThis, 'fetch', {
                    configurable: true,
                    value: fetch_spy,
                });
                spectator.service['_storeFile'] = vi
                    .fn()
                    .mockRejectedValue(
                        new DOMException('Storage is full', error_name),
                    );

                const has_failures =
                    await spectator.service.requestFilesToCache(
                        ['/full.png'],
                        'display-1',
                    );
                await spectator.service.requestFilesToCache(
                    ['/full.png'],
                    'display-1',
                );

                // Not a failure: a retry would download it again to no end
                expect(has_failures).toBe(false);
                expect(fetch_spy).toHaveBeenCalledTimes(1);
                expect(spectator.service.isLoadingFile('/full.png')).toBe(
                    false,
                );
            },
        );

        describe('when the browser cannot build a Blob from a stream', () => {
            const stream_of = (bytes: number) =>
                new ReadableStream<Uint8Array>({
                    start: (controller) => {
                        controller.enqueue(new Uint8Array(bytes));
                        controller.close();
                    },
                });

            beforeEach(() => {
                // Chrome rejects like this when its blob storage is full
                vi.stubGlobal(
                    'Response',
                    class {
                        blob() {
                            return Promise.reject(
                                new TypeError('Failed to fetch'),
                            );
                        }
                    },
                );
            });

            afterEach(() => vi.unstubAllGlobals());

            it('should download a small file again into memory', async () => {
                const fetch_spy = vi.fn(() =>
                    Promise.resolve(streamed_response(stream_of(3), 3)),
                );
                Object.defineProperty(globalThis, 'fetch', {
                    configurable: true,
                    value: fetch_spy,
                });

                const has_failures =
                    await spectator.service.requestFilesToCache(['/small.png']);

                expect(has_failures).toBe(false);
                expect(fetch_spy).toHaveBeenCalledTimes(2);
                expect(spectator.service.isCachedFile('/small.png')).toBe(true);
                expect(spectator.service.cacheState().files[0].size).toBe(3);
            });

            it('should stream a large file from the network without retrying', async () => {
                // Too large to read into memory on a low-memory player
                const length = 100 * 1024 * 1024;
                const fetch_spy = vi.fn(() =>
                    Promise.resolve(streamed_response(stream_of(3), length)),
                );
                Object.defineProperty(globalThis, 'fetch', {
                    configurable: true,
                    value: fetch_spy,
                });

                const has_failures =
                    await spectator.service.requestFilesToCache(['/large.mp4']);
                await spectator.service.requestFilesToCache(['/large.mp4']);

                // The fallback is refused on its headers, and the file is
                // not asked for again
                expect(has_failures).toBe(false);
                expect(fetch_spy).toHaveBeenCalledTimes(2);
                expect(spectator.service.isLoadingFile('/large.mp4')).toBe(
                    false,
                );
                await expect(
                    spectator.service.fetchFile('/large.mp4'),
                ).resolves.toBeNull();
                expect(fetch_spy).toHaveBeenCalledTimes(2);
            });
        });

        it('should not download a file that playback cached during the stagger delay', async () => {
            vi.useFakeTimers();
            try {
                const fetch_spy = good_fetch();
                Object.defineProperty(globalThis, 'fetch', {
                    configurable: true,
                    value: fetch_spy,
                });

                const cache_promise = spectator.service.requestFilesToCache(
                    ['/first.png', '/second.png'],
                    'display-1',
                );
                // The first file is cached; the sync waits before the second
                await vi.advanceTimersByTimeAsync(100);
                await spectator.service.fetchFile('/second.png', 'display-1');
                await vi.advanceTimersByTimeAsync(1_000);

                await expect(cache_promise).resolves.toBe(false);
                expect(fetch_spy).toHaveBeenCalledTimes(2);
            } finally {
                vi.useRealTimers();
            }
        });

        it('should not download a file that playback found too large during the stagger delay', async () => {
            vi.useFakeTimers();
            try {
                const fetch_spy = good_fetch();
                Object.defineProperty(globalThis, 'fetch', {
                    configurable: true,
                    value: fetch_spy,
                });

                const cache_promise = spectator.service.requestFilesToCache(
                    ['/first.png', '/second.png'],
                    'display-1',
                );
                // The first file is cached; the sync waits before the second
                await vi.advanceTimersByTimeAsync(100);
                spectator.service['_markTooLarge']('/second.png', 1e15);
                await vi.advanceTimersByTimeAsync(1_000);

                await expect(cache_promise).resolves.toBe(false);
                expect(fetch_spy).toHaveBeenCalledTimes(1);
            } finally {
                vi.useRealTimers();
            }
        });

        it('should not download a file again when the store cannot be read', async () => {
            const fetch_spy = good_fetch();
            Object.defineProperty(globalThis, 'fetch', {
                configurable: true,
                value: fetch_spy,
            });
            stored_files.set('kept', {
                name: 'kept',
                url: '/kept.png',
                owner: 'display-1',
                file: new File(['image'], 'kept'),
            });
            spectator.service['_file_cache_index'].set([
                cached_entry('kept', '/kept.png'),
            ]);
            spectator.service['_storedFileExists'] = vi
                .fn()
                .mockRejectedValue(new Error('read failed'));

            const has_failures = await spectator.service.requestFilesToCache(
                ['/kept.png'],
                'display-1',
            );

            // Retried later rather than orphaning the stored copy
            expect(has_failures).toBe(true);
            expect(fetch_spy).not.toHaveBeenCalled();
            expect(spectator.service.isCachedFile('/kept.png')).toBe(true);
            expect(stored_files.has('kept')).toBe(true);
        });

        it('should delete records no entry can use when loading the store', async () => {
            const record = (name: string, url: string, content: string[]) => ({
                name,
                url,
                owner: 'display-1',
                file: new File(content, name),
            });
            stored_files.set('first', record('first', '/a.png', ['image']));
            stored_files.set('copy', record('copy', '/a.png', ['image']));
            stored_files.set('no-url', record('no-url', '', ['image']));
            stored_files.set('blank', record('blank', '/b.png', []));

            await spectator.service['_loadCacheMetadataFromStore']();

            expect([...stored_files.keys()]).toEqual(['first']);
            expect(spectator.service.availableFiles()).toEqual(['/a.png']);
        });

        it('should size the budget from the storage estimate', async () => {
            const persist = vi.fn().mockResolvedValue(true);
            Object.defineProperty(navigator, 'storage', {
                configurable: true,
                value: {
                    estimate: () =>
                        Promise.resolve({ quota: 1_000, usage: 110 }),
                    persist,
                },
            });
            const service = TestBed.runInInjectionContext(
                () => new MediaCacheService(),
            );
            try {
                service['_file_cache_index'].set([
                    { ...cached_entry('a', '/a.png'), size: 10 },
                ]);

                // 80% of the quota, less 100 bytes used outside the cache
                await expect(service['_storageBudget']()).resolves.toBe(720);
                expect(service.cacheState().limit_bytes).toBe(720);
                expect(persist).toHaveBeenCalledTimes(1);
            } finally {
                service.ngOnDestroy();
                delete (navigator as { storage?: StorageManager }).storage;
            }
        });

        it('should recreate the database when it cannot be opened', async () => {
            const open_requests: any[] = [];
            const delete_request: any = {};
            Object.defineProperty(globalThis, 'indexedDB', {
                configurable: true,
                value: {
                    open: vi.fn(() => {
                        const request: any = {};
                        open_requests.push(request);
                        return request;
                    }),
                    deleteDatabase: vi.fn(() => delete_request),
                },
            });
            const recovering = {
                service: TestBed.runInInjectionContext(
                    () => new MediaCacheService(),
                ),
            };
            try {
                open_requests[0].onerror({
                    target: { error: new Error('UnknownError') },
                });
                await Promise.resolve();
                expect(indexedDB.deleteDatabase).toHaveBeenCalledWith(
                    'SignageMedia',
                );

                delete_request.onsuccess();
                await Promise.resolve();
                await Promise.resolve();

                expect(open_requests).toHaveLength(2);
                const db = { onversionchange: null, onclose: null };
                open_requests[1].onsuccess({ target: { result: db } });
                await Promise.resolve();

                expect(recovering.service['_cache_db']).toBe(db);
            } finally {
                recovering.service.ngOnDestroy();
            }
        });

        it('should reopen the database when the connection closes', async () => {
            const open_requests: any[] = [];
            Object.defineProperty(globalThis, 'indexedDB', {
                configurable: true,
                value: {
                    open: vi.fn(() => {
                        const request: any = {};
                        open_requests.push(request);
                        return request;
                    }),
                    deleteDatabase: vi.fn(),
                },
            });
            const recovering = {
                service: TestBed.runInInjectionContext(
                    () => new MediaCacheService(),
                ),
            };
            try {
                const db: any = { close: vi.fn(), transaction: vi.fn() };
                open_requests[0].onsuccess({ target: { result: db } });
                await Promise.resolve();

                db.onclose();

                expect(open_requests).toHaveLength(2);
            } finally {
                recovering.service.ngOnDestroy();
            }
        });

        it('should attach the session cookie to direct upload URLs', () => {
            const cookie_spy = vi.spyOn(
                spectator.service,
                'applyAuthenticationCookie',
            );

            expect(spectator.service.directURL('/cdn/plain.png')).toBe(
                '/cdn/plain.png',
            );
            expect(cookie_spy).not.toHaveBeenCalled();

            const url = '/api/engine/v2/uploads/upload-1/url';
            expect(spectator.service.directURL(url)).toBe(url);
            expect(cookie_spy).toHaveBeenCalledWith(expect.any(Number));
        });
    });
});
