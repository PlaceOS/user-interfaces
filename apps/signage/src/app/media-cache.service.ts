import { Injectable } from '@angular/core';
import { AsyncHandler, log, randomString } from '@placeos/common';
import { apiKey, token } from '@placeos/ts-client';
import { BehaviorSubject, filter, firstValueFrom, Subject } from 'rxjs';

const STORE_KEY = 'PlaceOS.SIGNAGE.cached_files';
const STAGGER_DELAY_MS = 500; // Delay between uncached resource requests

export type CacheItemStatus =
    | 'preparing'
    | 'downloading'
    | 'storing'
    | 'cached'
    | 'invalidated';

export interface CacheItem {
    id: string;
    url: string;
    status: CacheItemStatus;
    on_change: Subject<CacheItemStatus>;
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
    private _file_cache_index = new BehaviorSubject<CacheItem[]>([]);

    private get _cache_index() {
        return this._file_cache_index.getValue();
    }

    constructor() {
        super();
        const request = indexedDB.open('SignageMedia', 1);

        request.onerror = (event: any) => {
            log(
                'MediaCache',
                `DB Error: ${event.target.error}.`,
                undefined,
                'error',
            );
        };

        request.onsuccess = (event: any) => {
            this._cache_db = event.target.result;
            log('MediaCache', `Connected to database successfully.`);
        };

        request.onupgradeneeded = (event: any) => {
            this._cache_db = event.target.result;
            const objectStore = this._cache_db.createObjectStore('files', {
                keyPath: 'name',
            });
            log('MediaCache', `Object store created successfully.`);
        };

        this._loadCacheMetadata();
        this._file_cache_index.subscribe(() => this._saveCacheMetadata());
    }

    public async requestFilesToCache(url_list: string[]): Promise<boolean> {
        let failures = false;
        let uncached_count = 0;
        for (const url of url_list) {
            const existing = this._cache_index.find((_) => _.url === url);
            if (existing?.status === 'cached') continue;
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
                log(
                    'MediaCache',
                    `Error fetching resource. ${response.status}`,
                    [url],
                    'error',
                );
                throw new Error();
            }

            // Get the file as a blob
            const blob = await response.blob();

            cacheStatus(cache_item, 'storing');

            // Create a File object (or you can use the blob directly)
            const file = new File([blob], cache_item.id, { type: blob.type });
            // Store the file in IndexedDB
            const transaction = this._cache_db.transaction(
                ['files'],
                'readwrite',
            );
            const objectStore = transaction.objectStore('files');
            const request = objectStore.add({
                name: cache_item.id,
                file: file,
            });

            return new Promise<void>((resolve, reject) => {
                request.onerror = (event: any) => {
                    log(
                        'MediaCache',
                        `Error caching resource. ${event.target.error}`,
                        url,
                        'error',
                    );
                    cacheStatus(cache_item, 'invalidated');
                    reject(event.target.error);
                };

                request.onsuccess = () => {
                    log('MediaCache', `Cached resource.`, [
                        cache_item.id,
                        url,
                    ]);
                    cacheStatus(cache_item, 'cached');
                    resolve();
                };
            });
        } catch (e) {
            log(
                'MediaCache',
                `Error downloading resource.`,
                [url, e],
                'error',
            );
            if (cache_item.status !== 'invalidated') {
                cacheStatus(cache_item, 'invalidated');
            }
            throw e;
        }
    }

    public availableFiles() {
        return this._cache_index
            .filter((_) => _.status === 'cached')
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
        return (
            item.status === 'preparing' ||
            item.status === 'downloading' ||
            item.status === 'storing'
        );
    }

    public async getFile(url: string): Promise<File> {
        const cache_item = this._cache_index.find((_) => _.url === url);
        if (!cache_item) throw new Error('Unable to find file with URL');

        // Wait for download to complete if item is currently being downloaded
        if (
            cache_item.status === 'preparing' ||
            cache_item.status === 'downloading' ||
            cache_item.status === 'storing'
        ) {
            const final_status = await firstValueFrom(
                cache_item.on_change.pipe(
                    filter(
                        (status) =>
                            status === 'cached' || status === 'invalidated',
                    ),
                ),
            );
            if (final_status === 'invalidated') {
                return null;
            }
        } else if (cache_item.status === 'invalidated') {
            return null;
        }

        return new Promise<File>((resolve, reject) => {
            const transaction = this._cache_db.transaction(
                ['files'],
                'readonly',
            );
            const objectStore = transaction.objectStore('files');
            const request = objectStore.get(cache_item.id);

            request.onerror = (event: any) => {
                log(
                    'MediaCache',
                    `Error retrieving cached resource. ${event.target.error}`,
                    [url],
                    'error',
                );
                reject(event.target.error);
            };

            request.onsuccess = (event: any) => {
                if (request.result) {
                    resolve(request.result.file);
                } else {
                    log(
                        'MediaCache',
                        `Unable to find cached resource. ${event.target.error}`,
                        [url],
                        'error',
                    );
                    resolve(null);
                }
            };
        });
    }

    public invalidateStore() {
        return new Promise<void>((resolve, reject) => {
            const transaction = this._cache_db.transaction(
                ['files'],
                'readwrite',
            );
            const objectStore = transaction.objectStore('files');
            const request = objectStore.clear();

            request.onerror = (event: any) => {
                log(
                    'MediaCache',
                    `Error clearing all cached resources. ${event.target.error}`,
                    undefined,
                    'error',
                );
                console.error(
                    'Error clearing file store: ' + event.target.error,
                );
                reject(event.target.error);
            };

            request.onsuccess = (_) => {
                log('MediaCache', `Cleared all cached resources.`);
                this._file_cache_index.next([]);
                resolve();
            };
        });
    }

    public invalidateFile(url: string) {
        return new Promise<void>((resolve, reject) => {
            const cache_item = this._cache_index.find((_) => _.url === url);
            if (cache_item.status !== 'cached')
                return reject('Cached item with URL not found');
            const transaction = this._cache_db.transaction(
                ['files'],
                'readwrite',
            );
            const objectStore = transaction.objectStore('files');
            const request = objectStore.delete(cache_item.id);

            request.onerror = (event: any) => {
                log(
                    'MediaCache',
                    `Error removing cached resource. ${event.target.error}`,
                    [url],
                    'error',
                );
                reject(event.target.error);
            };

            request.onsuccess = (event: any) => {
                log('MediaCache', `Removed resource.`, [cache_item.id, url]);
                this._file_cache_index.next(
                    this._cache_index.filter((_) => _.id !== cache_item.id),
                );
                resolve();
            };
        });
    }

    private _loadCacheMetadata() {
        log('MediaCache', 'Loading cache metadata...');
        const metadata_string = localStorage.getItem(STORE_KEY) || '[]';
        try {
            const metadata = JSON.parse(metadata_string);
            if (metadata instanceof Array) {
                this._file_cache_index.next(
                    metadata.map((_) => ({
                        id: _.id,
                        url: _.url,
                        status: 'cached',
                        on_change: new Subject(),
                    })),
                );
            }
        } catch {}
    }

    private _saveCacheMetadata() {
        this.timeout('save_metadata', () => {
            log('MediaCache', 'Saving cache metadata...');
            const metadata = this._cache_index
                .filter((_) => _.status === 'cached')
                .map((_) => ({ id: _.id, url: _.url }));
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
