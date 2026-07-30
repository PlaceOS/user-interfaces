import { effect, Injectable, signal } from '@angular/core';
import { AsyncHandler, randomString, scoped_log } from '@placeos/common';
import { apiKey, token } from '@placeos/ts-client';
// `Subject`/`firstValueFrom` are kept for `on_change`: awaiting a cache item's
// next terminal status is an event stream, not state, so it stays reactive.
import { filter, firstValueFrom, Subject } from 'rxjs';

const STORE_KEY = 'PlaceOS.SIGNAGE.cached_files';
const STAGGER_DELAY_MS = 500; // Delay between uncached resource requests
const DEFAULT_OWNER_CACHE_LIMIT_BYTES = 512 * 1024 * 1024;
const log = scoped_log('MediaCache');

export type CacheItemStatus =
    | 'preparing'
    | 'downloading'
    | 'storing'
    | 'cached'
    | 'invalidated';

export interface CacheItem {
    id: string;
    url: string;
    owner?: string;
    owners?: string[];
    /** Size of the stored file in bytes; 0 when not yet known */
    size?: number;
    status: CacheItemStatus;
    on_change: Subject<CacheItemStatus>;
}

export interface CacheRequestOptions {
    max_size?: number;
    prune_other_owners?: boolean;
}

interface StoredCacheRecord {
    name: string;
    url?: string;
    owner?: string;
    owners?: string[];
    file: File;
}

function isLoadingStatus(status: CacheItemStatus) {
    return (
        status === 'preparing' ||
        status === 'downloading' ||
        status === 'storing'
    );
}

function cacheStatus(item: CacheItem, status: CacheItemStatus) {
    item.status = status;
    item.on_change.next(status);
}

function cacheOwners(item: CacheItem | StoredCacheRecord) {
    return [...new Set([...(item.owners || []), item.owner || ''])].filter(
        (_) => !!_,
    );
}

@Injectable({
    providedIn: 'root',
})
export class MediaCacheService extends AsyncHandler {
    private _cache_db: IDBDatabase;
    private _cache_db_ready: Promise<void>;
    private readonly _file_cache_index = signal<CacheItem[]>([]);

    private get _cache_index() {
        return this._file_cache_index();
    }

    constructor() {
        super();
        const request = indexedDB.open('SignageMedia', 1);

        this._cache_db_ready = new Promise((resolve, reject) => {
            request.onerror = (event: any) => {
                log.error(`DB Error: ${event.target.error}.`);
                reject(event.target.error);
            };

            request.onsuccess = (event: any) => {
                this._cache_db = event.target.result;
                log.debug(`Connected to database successfully.`);
                resolve();
            };
        });

        request.onupgradeneeded = (event: any) => {
            this._cache_db = event.target.result;
            const objectStore = this._cache_db.createObjectStore('files', {
                keyPath: 'name',
            });
            log.debug(`Object store created successfully.`);
        };

        this._loadCacheMetadata();
        this._cache_db_ready
            .then(() => this._loadCacheMetadataFromStore())
            .catch(() => undefined);
        effect(() => {
            this._file_cache_index();
            this._saveCacheMetadata();
        });
    }

    public async requestFilesToCache(
        url_list: string[],
        owner = '',
        options: CacheRequestOptions = {},
    ): Promise<boolean> {
        let failures = false;
        let uncached_count = 0;
        for (const url of url_list) {
            const existing = this._cache_index.find((_) => _.url === url);
            if (existing) {
                if (isLoadingStatus(existing.status)) {
                    const final_status = await this._finalCacheStatus(existing);
                    if (final_status === 'cached') {
                        await this._addOwner(existing, owner);
                        continue;
                    }
                } else if (
                    existing.status === 'cached' &&
                    (await this._hasStoredFile(existing, url))
                ) {
                    await this._addOwner(existing, owner);
                    continue;
                }
            }
            // Stagger requests for uncached resources to avoid overwhelming the network
            if (uncached_count > 0) {
                await new Promise((resolve) =>
                    setTimeout(resolve, STAGGER_DELAY_MS),
                );
            }
            uncached_count++;
            const cache_item: CacheItem = {
                id: randomString(16, '0123456789ABCDEF'),
                url,
                owner,
                owners: owner ? [owner] : [],
                status: 'preparing',
                on_change: new Subject(),
            };
            this._file_cache_index.set([
                ...this._cache_index.filter((_) => _.id !== existing?.id),
                cache_item,
            ]);
            await this.requestAndCacheFile(url, cache_item).catch((_) => {
                failures = true;
            });
            await this.pruneCache(
                owner,
                url_list,
                options.max_size,
                options.prune_other_owners,
            );
        }
        this._file_cache_index.set(this._cache_index);
        await this.pruneCache(
            owner,
            url_list,
            options.max_size,
            options.prune_other_owners,
        );
        return failures;
    }

    public async requestAndCacheFile(url: string, cache_item: CacheItem) {
        try {
            cacheStatus(cache_item, 'downloading');
            // If not an API call, just load the image
            if (url.includes('/api/engine/v2/uploads')) {
                this._applyAuthenticationCookie();
            }
            // Fetch the file from the server
            const response = await fetch(url);
            if (!response.ok) {
                log.error(`Error fetching resource. ${response.status}`, url);
                throw new Error();
            }

            // Get the file as a blob
            const blob = await response.blob();
            if (blob.size <= 0) {
                log.error(`Downloaded resource is empty.`, url);
                throw new Error('Downloaded media file is empty');
            }

            cacheStatus(cache_item, 'storing');

            // Create a File object (or you can use the blob directly)
            const file = new File([blob], cache_item.id, { type: blob.type });

            await this._storeFile(cache_item, file, url);
            cache_item.size = file.size;
            log.debug(`Cached resource.`, [cache_item.id, url]);
            cacheStatus(cache_item, 'cached');
        } catch (e) {
            log.error(`Error downloading resource.`, url, e);
            if (cache_item.status !== 'invalidated') {
                cacheStatus(cache_item, 'invalidated');
            }
            throw e;
        }
    }

    public availableFiles(owner = '') {
        return this._cache_index
            .filter(
                (_) =>
                    _.status === 'cached' &&
                    (!owner || cacheOwners(_).includes(owner)),
            )
            .map((_) => _.url);
    }

    /**
     * Whether a file is still being prepared/downloaded/stored, or has not yet
     * been registered for caching (i.e. queued). Returns false once the file is
     * cached or has been invalidated.
     */
    public isLoadingFile(url: string): boolean {
        const item = this._cache_index.find((_) => _.url === url);
        if (!item) return true;
        return isLoadingStatus(item.status);
    }

    public isCachedFile(url: string): boolean {
        return this._cache_index.some(
            (item) => item.url === url && item.status === 'cached',
        );
    }

    public async getFile(url: string): Promise<File | null> {
        const cache_item = this._cache_index.find((_) => _.url === url);
        if (!cache_item) throw new Error('Unable to find file with URL');

        // Wait for download to complete if item is currently being downloaded
        if (isLoadingStatus(cache_item.status)) {
            const final_status = await this._finalCacheStatus(cache_item);
            if (final_status === 'invalidated') {
                return null;
            }
        } else if (cache_item.status === 'invalidated') {
            return null;
        }

        return this._storedFile(cache_item, url);
    }

    public async pruneCache(
        owner = '',
        priority_urls: string[] = [],
        max_size = DEFAULT_OWNER_CACHE_LIMIT_BYTES,
        prune_other_owners = false,
    ) {
        if (!this._cache_db_ready || max_size <= 0) return;
        // Sizes are tracked on the index, so the common case - comfortably
        // under budget - costs nothing. Reading every record back out of the
        // store to add up its size would pull every cached video into memory.
        const candidates = this._cache_index.filter(
            (item) =>
                item.status === 'cached' &&
                (!owner ||
                    cacheOwners(item).includes(owner) ||
                    prune_other_owners),
        );
        // Metadata written before sizes were recorded needs one pass over the
        // store to fill them in; after that this stays in memory.
        if (candidates.some((item) => !(item.size > 0))) {
            await this._recoverCachedSizes();
        }
        const owner_items = candidates
            .map((item) => {
                const owners = cacheOwners(item);
                return {
                    item,
                    owners,
                    size: item.size || 0,
                    priority: priority_urls.indexOf(item.url),
                    owner_priority:
                        !owner || owners.includes(owner)
                            ? 1
                            : 0,
                };
            })
            .filter((_) => _.size > 0);
        let total_size = owner_items.reduce(
            (total, item) => total + item.size,
            0,
        );
        if (total_size <= max_size) return;
        await this._cache_db_ready;
        const eviction_list = owner_items.sort((a, b) => {
            const a_priority =
                a.priority >= 0 ? a.priority : Number.MAX_SAFE_INTEGER;
            const b_priority =
                b.priority >= 0 ? b.priority : Number.MAX_SAFE_INTEGER;
            if (a.owner_priority !== b.owner_priority) {
                return a.owner_priority - b.owner_priority;
            }
            if (a_priority !== b_priority) return b_priority - a_priority;
            return b.size - a.size;
        });
        for (const { item, owners, size } of eviction_list) {
            if (total_size <= max_size) break;
            const is_owner_file = owner && owners.includes(owner);
            await this.invalidateFile(
                item.url,
                is_owner_file ? owner : '',
            ).catch(() => undefined);
            total_size -= size;
        }
    }

    public invalidateStore() {
        if (!this._cache_db_ready) return Promise.resolve();
        return new Promise<void>((resolve, reject) => {
            this._cache_db_ready
                .then(() => {
                    const transaction = this._cache_db.transaction(
                        ['files'],
                        'readwrite',
                    );
                    const objectStore = transaction.objectStore('files');
                    const request = objectStore.clear();

                    request.onerror = (event: any) => {
                        log.error(
                            `Error clearing all cached resources. ${event.target.error}`,
                        );
                        reject(event.target.error);
                    };

                    transaction.onerror = (event: any) =>
                        reject(event.target.error);
                    transaction.onabort = (event: any) =>
                        reject(event.target.error);
                    transaction.oncomplete = (_) => {
                        log.debug(`Cleared all cached resources.`);
                        this._file_cache_index.set([]);
                        resolve();
                    };
                })
                .catch(reject);
        });
    }

    public invalidateFile(url: string, owner = '') {
        if (!this._cache_db_ready) return Promise.reject('Cache DB not ready');
        return new Promise<void>((resolve, reject) => {
            const cache_item = this._cache_index.find((_) => _.url === url);
            if (cache_item?.status !== 'cached')
                return reject('Cached item with URL not found');
            if (owner && !cacheOwners(cache_item).includes(owner)) {
                return reject('Cached item with URL not found');
            }
            const remaining_owners = owner
                ? cacheOwners(cache_item).filter((_) => _ !== owner)
                : [];
            if (owner && remaining_owners.length) {
                cache_item.owner = remaining_owners[0] || '';
                cache_item.owners = remaining_owners;
                this._file_cache_index.set([...this._cache_index]);
                this._updateStoredOwners(cache_item).then(resolve).catch(reject);
                return;
            }
            this._cache_db_ready
                .then(() => {
                    const transaction = this._cache_db.transaction(
                        ['files'],
                        'readwrite',
                    );
                    const objectStore = transaction.objectStore('files');
                    const request = objectStore.delete(cache_item.id);

                    request.onerror = (event: any) => {
                        log.error(
                            `Error removing cached resource. ${event.target.error}`,
                            url,
                        );
                        reject(event.target.error);
                    };

                    transaction.onerror = (event: any) =>
                        reject(event.target.error);
                    transaction.onabort = (event: any) =>
                        reject(event.target.error);
                    transaction.oncomplete = (event: any) => {
                        log.debug(`Removed resource.`, cache_item.id, url);
                        this._file_cache_index.set(
                            this._cache_index.filter(
                                (_) => _.id !== cache_item.id,
                            ),
                        );
                        resolve();
                    };
                })
                .catch(reject);
        });
    }

    private _finalCacheStatus(cache_item: CacheItem) {
        if (!isLoadingStatus(cache_item.status)) {
            return Promise.resolve(cache_item.status);
        }
        return firstValueFrom(
            cache_item.on_change.pipe(
                filter(
                    (status) => status === 'cached' || status === 'invalidated',
                ),
            ),
        );
    }

    private async _storeFile(cache_item: CacheItem, file: File, url: string) {
        await this._cache_db_ready;
        return new Promise<void>((resolve, reject) => {
            const transaction = this._cache_db.transaction(
                ['files'],
                'readwrite',
            );
            const objectStore = transaction.objectStore('files');
            const request = objectStore.add({
                name: cache_item.id,
                url: cache_item.url,
                owner: cache_item.owner || '',
                owners: cacheOwners(cache_item),
                file,
            });

            const fail = (event: any) => {
                log.error(`Error caching resource. ${event.target.error}`, url);
                cacheStatus(cache_item, 'invalidated');
                reject(event.target.error);
            };
            request.onerror = fail;

            transaction.onerror = fail;
            transaction.onabort = fail;
            transaction.oncomplete = () => resolve();
        });
    }

    /**
     * Whether the file behind a cache entry is still in the store. Uses a key
     * count rather than reading the record, so confirming a cached playlist
     * does not pull every one of its files into memory.
     */
    private async _hasStoredFile(cache_item: CacheItem, url: string) {
        if (!(cache_item.size > 0)) {
            // Size unknown - metadata written by an older build. Read the
            // record once to recover it; later checks are cheap.
            const file = await this._storedFile(cache_item, url);
            if (file) this._setCachedSize(cache_item, file.size);
            return !!file;
        }
        const exists = await this._storedFileExists(cache_item.id).catch(
            () => false,
        );
        if (!exists) {
            log.error(`Unable to find cached resource.`, url);
            this._markInvalidated(cache_item);
        }
        return exists;
    }

    private async _storedFileExists(id: string): Promise<boolean> {
        await this._cache_db_ready;
        return new Promise<boolean>((resolve, reject) => {
            const transaction = this._cache_db.transaction(
                ['files'],
                'readonly',
            );
            const objectStore = transaction.objectStore('files');
            const request = objectStore.count(id);

            request.onerror = (event: any) => reject(event.target.error);
            request.onsuccess = () => resolve((request.result || 0) > 0);
        });
    }

    private _setCachedSize(cache_item: CacheItem, size: number) {
        if (cache_item.size === size) return;
        cache_item.size = size;
        this._file_cache_index.set([...this._cache_index]);
    }

    /** Fill in sizes for entries whose metadata predates size tracking */
    private async _recoverCachedSizes() {
        await this._cache_db_ready;
        const records = await this._storedFileRecords().catch(() => []);
        if (!records.length) return;
        let changed = false;
        for (const item of this._cache_index) {
            if (item.size > 0) continue;
            const record = records.find((_) => _.name === item.id);
            if (!record?.file?.size) continue;
            item.size = record.file.size;
            changed = true;
        }
        if (changed) this._file_cache_index.set([...this._cache_index]);
    }

    private async _storedFile(
        cache_item: CacheItem,
        url: string,
    ): Promise<File | null> {
        await this._cache_db_ready;
        return new Promise<File | null>((resolve, reject) => {
            const transaction = this._cache_db.transaction(
                ['files'],
                'readonly',
            );
            const objectStore = transaction.objectStore('files');
            const request = objectStore.get(cache_item.id);

            request.onerror = (event: any) => {
                log.error(
                    `Error retrieving cached resource. ${event.target.error}`,
                    url,
                );
                reject(event.target.error);
            };

            request.onsuccess = (event: any) => {
                const record = request.result as StoredCacheRecord | undefined;
                if (record) {
                    const file = record.file;
                    if (file.size > 0) {
                        resolve(file);
                        return;
                    }
                    log.error(`Cached resource is empty.`, url);
                    this._markInvalidated(cache_item);
                    resolve(null);
                } else {
                    log.error(`Unable to find cached resource.`, url);
                    this._markInvalidated(cache_item);
                    resolve(null);
                }
            };
        });
    }

    private async _loadCacheMetadataFromStore() {
        const records = await this._storedFileRecords().catch(() => []);
        if (!records.length) return;
        const stored_items = records
            .filter((record) => record.url && record.file?.size > 0)
            .map((record) => ({
                id: record.name,
                url: record.url,
                owner: record.owner || '',
                owners: cacheOwners(record),
                size: record.file.size,
                status: 'cached' as const,
                on_change: new Subject<CacheItemStatus>(),
            }));
        const active_items = this._cache_index.filter(
            (item) => item.status !== 'cached',
        );
        this._file_cache_index.set([
            ...active_items,
            ...stored_items.filter(
                (stored) =>
                    !active_items.some(
                        (item) =>
                            item.id === stored.id || item.url === stored.url,
                    ),
            ),
        ]);
    }

    private _storedFileRecords(): Promise<StoredCacheRecord[]> {
        return new Promise((resolve, reject) => {
            const transaction = this._cache_db.transaction(
                ['files'],
                'readonly',
            );
            const objectStore = transaction.objectStore('files');
            const request = objectStore.getAll();

            request.onerror = (event: any) => {
                log.error(
                    `Error retrieving cached resources. ${event.target.error}`,
                );
                reject(event.target.error);
            };

            request.onsuccess = () =>
                resolve((request.result || []) as StoredCacheRecord[]);
        });
    }

    private _markInvalidated(cache_item: CacheItem) {
        cacheStatus(cache_item, 'invalidated');
        this._file_cache_index.set([...this._cache_index]);
    }

    private _loadCacheMetadata() {
        log.debug('Loading cache metadata...');
        const metadata_string = localStorage.getItem(STORE_KEY) || '[]';
        try {
            const metadata = JSON.parse(metadata_string);
            if (metadata instanceof Array) {
                this._file_cache_index.set(
                    metadata.map((_) => ({
                        id: _.id,
                        url: _.url,
                        owner: _.owner || '',
                        owners: _.owners || (_.owner ? [_.owner] : []),
                        size: _.size || 0,
                        status: 'cached',
                        on_change: new Subject(),
                    })),
                );
            }
        } catch {}
    }

    private _saveCacheMetadata() {
        this.timeout('save_metadata', () => {
            log.debug('Saving cache metadata...');
            const metadata = this._cache_index
                .filter((_) => _.status === 'cached')
                .map((_) => ({
                    id: _.id,
                    url: _.url,
                    owner: cacheOwners(_)[0] || '',
                    owners: cacheOwners(_),
                    size: _.size || 0,
                }));
            localStorage.setItem(STORE_KEY, JSON.stringify(metadata));
        });
    }

    private async _addOwner(cache_item: CacheItem, owner = '') {
        if (!owner || cacheOwners(cache_item).includes(owner)) return;
        cache_item.owner = cache_item.owner || owner;
        cache_item.owners = [...cacheOwners(cache_item), owner];
        this._file_cache_index.set([...this._cache_index]);
        await this._updateStoredOwners(cache_item);
    }

    private async _updateStoredOwners(cache_item: CacheItem) {
        await this._cache_db_ready;
        const record = await this._storedRecord(cache_item.id);
        if (!record) return;
        await this._putStoredRecord({
            ...record,
            owner: cacheOwners(cache_item)[0] || '',
            owners: cacheOwners(cache_item),
        });
    }

    private _storedRecord(id: string): Promise<StoredCacheRecord | null> {
        return new Promise((resolve, reject) => {
            const transaction = this._cache_db.transaction(
                ['files'],
                'readonly',
            );
            const objectStore = transaction.objectStore('files');
            const request = objectStore.get(id);

            request.onerror = (event: any) => reject(event.target.error);
            request.onsuccess = () =>
                resolve((request.result as StoredCacheRecord) || null);
        });
    }

    private _putStoredRecord(record: StoredCacheRecord) {
        return new Promise<void>((resolve, reject) => {
            const transaction = this._cache_db.transaction(
                ['files'],
                'readwrite',
            );
            const objectStore = transaction.objectStore('files');
            const request = objectStore.put(record);

            request.onerror = (event: any) => reject(event.target.error);
            transaction.onerror = (event: any) => reject(event.target.error);
            transaction.onabort = (event: any) => reject(event.target.error);
            transaction.oncomplete = () => resolve();
        });
    }

    private _applyAuthenticationCookie() {
        const tkn = token();
        document.cookie = `${
            tkn === 'x-api-key'
                ? 'api-key=' + encodeURIComponent(apiKey())
                : 'bearer_token=' + encodeURIComponent(tkn)
        };max-age=30;path=/api/engine/v2/uploads;samesite=strict;${
            location.protocol === 'https:' ? 'secure;' : ''
        }`;
    }
}
