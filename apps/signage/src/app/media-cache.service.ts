import { Injectable } from '@angular/core';
import { AsyncHandler, randomString, scoped_log } from '@placeos/common';
import { apiKey, token } from '@placeos/ts-client';
import { BehaviorSubject, filter, firstValueFrom, Subject } from 'rxjs';

const STORE_KEY = 'PlaceOS.SIGNAGE.cached_files';
const STAGGER_DELAY_MS = 500; // Delay between uncached resource requests
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
    status: CacheItemStatus;
    on_change: Subject<CacheItemStatus>;
}

interface StoredCacheRecord {
    name: string;
    url?: string;
    owner?: string;
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

@Injectable({
    providedIn: 'root',
})
export class MediaCacheService extends AsyncHandler {
    private _cache_db: IDBDatabase;
    private _cache_db_ready: Promise<void>;
    private _file_cache_index = new BehaviorSubject<CacheItem[]>([]);

    private get _cache_index() {
        return this._file_cache_index.getValue();
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
        this._file_cache_index.subscribe(() => this._saveCacheMetadata());
    }

    public async requestFilesToCache(
        url_list: string[],
        owner = '',
    ): Promise<boolean> {
        let failures = false;
        let uncached_count = 0;
        for (const url of url_list) {
            const existing = this._cache_index.find((_) => _.url === url);
            if (existing) {
                if (isLoadingStatus(existing.status)) {
                    const final_status = await this._finalCacheStatus(existing);
                    if (final_status === 'cached') continue;
                } else if (
                    existing.status === 'cached' &&
                    (await this._hasStoredFile(existing, url))
                ) {
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
                status: 'preparing',
                on_change: new Subject(),
            };
            this._file_cache_index.next([
                ...this._cache_index.filter((_) => _.id !== existing?.id),
                cache_item,
            ]);
            await this.requestAndCacheFile(url, cache_item).catch((_) => {
                failures = true;
            });
        }
        this._file_cache_index.next(this._cache_index);
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
                (_) => _.status === 'cached' && (!owner || _.owner === owner),
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
                        this._file_cache_index.next([]);
                        resolve();
                    };
                })
                .catch(reject);
        });
    }

    public invalidateFile(url: string, owner = '') {
        if (!this._cache_db_ready) return Promise.reject('Cache DB not ready');
        return new Promise<void>((resolve, reject) => {
            const cache_item = this._cache_index.find(
                (_) => _.url === url && (!owner || _.owner === owner),
            );
            if (cache_item?.status !== 'cached')
                return reject('Cached item with URL not found');
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
                        this._file_cache_index.next(
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

    private _hasStoredFile(cache_item: CacheItem, url: string) {
        return this._storedFile(cache_item, url).then((_) => !!_);
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
                status: 'cached' as const,
                on_change: new Subject<CacheItemStatus>(),
            }));
        const active_items = this._cache_index.filter(
            (item) => item.status !== 'cached',
        );
        this._file_cache_index.next([
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
        this._file_cache_index.next([...this._cache_index]);
    }

    private _loadCacheMetadata() {
        log.debug('Loading cache metadata...');
        const metadata_string = localStorage.getItem(STORE_KEY) || '[]';
        try {
            const metadata = JSON.parse(metadata_string);
            if (metadata instanceof Array) {
                this._file_cache_index.next(
                    metadata.map((_) => ({
                        id: _.id,
                        url: _.url,
                        owner: _.owner || '',
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
                    owner: _.owner || '',
                }));
            localStorage.setItem(STORE_KEY, JSON.stringify(metadata));
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
