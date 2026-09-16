import { effect, Injectable, signal } from '@angular/core';
import {
    AsyncHandler,
    MINUTES,
    randomString,
    scoped_log,
    SECONDS,
} from '@placeos/common';
import { apiKey, token } from '@placeos/ts-client';
// `Subject`/`firstValueFrom` are kept for `on_change`: awaiting a cache item's
// next terminal status is an event stream, not state, so it stays reactive.
import { filter, firstValueFrom, of, Subject, timeout } from 'rxjs';

const STORE_KEY = 'PlaceOS.SIGNAGE.cached_files';
const DB_NAME = 'SignageMedia';
const DB_VERSION = 1;
const DB_STORE = 'files';
const UPLOADS_PATH = '/api/engine/v2/uploads';
const STAGGER_DELAY_MS = 500; // Delay between uncached resource requests
const DEFAULT_OWNER_CACHE_LIMIT_BYTES = 512 * 1024 * 1024;
/**
 * How long a single database request may take before it counts as failed. A
 * request that never settles would otherwise hold the whole cache sync - and
 * the player waiting on it - forever.
 */
const DB_OPERATION_TIMEOUT_MS = 30 * SECONDS;
/** Minimum spacing between attempts to reopen a broken database connection */
const DB_RECONNECT_INTERVAL_MS = 30 * SECONDS;
/** How long a download may go without receiving any data before it is abandoned */
const DOWNLOAD_STALL_MS = 60 * SECONDS;
/** Longest a single download may run, however slowly it is progressing */
const DOWNLOAD_TIMEOUT_MS = 15 * MINUTES;
/** Longest anything waits on an in-progress download to reach a final state */
const DOWNLOAD_WAIT_MS = DOWNLOAD_TIMEOUT_MS + DB_OPERATION_TIMEOUT_MS;
/** Lifetime of the cookie that lets media elements stream protected uploads */
const DIRECT_URL_COOKIE_SECONDS = 60 * 60;
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

interface DownloadResult {
    /** The downloaded file, whether or not it could be stored */
    file: File | null;
    /** Whether the file is now in the cache store */
    stored: boolean;
}

function isLoadingStatus(status: CacheItemStatus) {
    return (
        status === 'preparing' ||
        status === 'downloading' ||
        status === 'storing'
    );
}

function isFinalStatus(status: CacheItemStatus) {
    return status === 'cached' || status === 'invalidated';
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

function delay(ms: number) {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

/**
 * Rejects if `promise` has not settled within `timeout_ms`. `on_timeout` lets
 * the caller abandon whatever the promise was waiting on.
 */
function withTimeout<T>(
    promise: Promise<T>,
    timeout_ms: number,
    message: string,
    on_timeout?: () => void,
) {
    return new Promise<T>((resolve, reject) => {
        const timer = setTimeout(() => {
            on_timeout?.();
            reject(new Error(message));
        }, timeout_ms);
        promise.then(
            (value) => {
                clearTimeout(timer);
                resolve(value);
            },
            (error) => {
                clearTimeout(timer);
                reject(error);
            },
        );
    });
}

/**
 * Local store of media files for offline playback.
 *
 * Nothing in here is allowed to leave the player without content. Every wait
 * on the network or the database is bounded, a database that stops answering
 * is reopened (or recreated), and metadata that turns out to be wrong is
 * dropped and rebuilt from what is actually stored. When the cache still
 * cannot supply a file the player falls back to streaming it from the server.
 */
@Injectable({
    providedIn: 'root',
})
export class MediaCacheService extends AsyncHandler {
    private _cache_db: IDBDatabase;
    private _cache_db_ready: Promise<void>;
    private readonly _file_cache_index = signal<CacheItem[]>([]);
    /**
     * Entries restored from persisted metadata that have not yet been seen in
     * the store. They are dropped if the store turns out not to hold them.
     */
    private readonly _unverified_ids = new Set<string>();
    /** Downloads currently running, keyed by URL, so they are never duplicated */
    private readonly _downloads = new Map<string, Promise<DownloadResult>>();
    private _last_reconnect = 0;

    private get _cache_index() {
        return this._file_cache_index();
    }

    constructor() {
        super();
        this._loadCacheMetadata();
        this._connectDatabase();
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
            if (!url) continue;
            const existing = this._cacheItem(url);
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
            if (uncached_count > 0) await delay(STAGGER_DELAY_MS);
            uncached_count++;
            const { stored } = await this._cacheFile(url, owner);
            if (!stored) failures = true;
            await this.pruneCache(
                owner,
                url_list,
                options.max_size,
                options.prune_other_owners,
            );
        }
        this._file_cache_index.set([...this._cache_index]);
        await this.pruneCache(
            owner,
            url_list,
            options.max_size,
            options.prune_other_owners,
        );
        return failures;
    }

    /** Download a file into the cache entry. Rejects unless it was stored. */
    public async requestAndCacheFile(url: string, cache_item: CacheItem) {
        const { file, stored } = await this._downloadAndStore(url, cache_item);
        if (!stored) throw new Error('Unable to cache media file');
        return file;
    }

    /**
     * The file for a URL, from the cache when it has it and downloaded when it
     * does not. Unlike `requestFilesToCache` this hands back a download that
     * could not be stored, so a broken database never stops media playing.
     * Waits at most `wait_ms` for a download that is already in progress and
     * returns null if it has not finished by then.
     */
    public async fetchFile(
        url: string,
        owner = '',
        wait_ms = DOWNLOAD_WAIT_MS,
    ): Promise<File | null> {
        if (!url) return null;
        const existing = this._cacheItem(url);
        if (existing && isLoadingStatus(existing.status)) {
            const status = await this._finalCacheStatus(existing, wait_ms);
            if (status === 'cached') {
                return this._storedFile(existing, url).catch(() => null);
            }
            if (isLoadingStatus(status)) return null;
        } else if (existing?.status === 'cached') {
            const file = await this._storedFile(existing, url).catch(
                () => null,
            );
            if (file) return file;
        }
        const { file } = await this._cacheFile(url, owner);
        return file;
    }

    /**
     * A URL the player can hand to a media element when the cache has nothing
     * to offer. Protected uploads need the session cookie the media element
     * will send with its request.
     */
    public directURL(url: string) {
        if (!url) return '';
        if (url.includes(UPLOADS_PATH)) {
            this.applyAuthenticationCookie(DIRECT_URL_COOKIE_SECONDS);
        }
        return url;
    }

    /** Snapshot of what the cache is holding, for diagnostics */
    public cacheState(owner = '') {
        const files = this._cache_index
            .filter((_) => !owner || cacheOwners(_).includes(owner))
            .map((_) => ({
                url: _.url,
                status: _.status,
                size: _.size || 0,
                owners: cacheOwners(_),
            }));
        return {
            file_count: files.length,
            cached_count: files.filter((_) => _.status === 'cached').length,
            total_bytes: files.reduce((total, _) => total + _.size, 0),
            limit_bytes: DEFAULT_OWNER_CACHE_LIMIT_BYTES,
            downloads_in_flight: this._downloads.size,
            files,
        };
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
        const item = this._cacheItem(url);
        if (!item) return true;
        return isLoadingStatus(item.status);
    }

    public isCachedFile(url: string): boolean {
        return this._cacheItem(url)?.status === 'cached';
    }

    /**
     * The cached file for a URL. Waits at most `max_wait_ms` for a download
     * that is in progress, and resolves null when the cache has no usable copy.
     */
    public async getFile(
        url: string,
        max_wait_ms = DOWNLOAD_WAIT_MS,
    ): Promise<File | null> {
        const cache_item = this._cacheItem(url);
        if (!cache_item) throw new Error('Unable to find file with URL');

        // Wait for download to complete if item is currently being downloaded
        if (isLoadingStatus(cache_item.status)) {
            const final_status = await this._finalCacheStatus(
                cache_item,
                max_wait_ms,
            );
            if (final_status !== 'cached') return null;
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
                    owner_priority: !owner || owners.includes(owner) ? 1 : 0,
                };
            })
            .filter((_) => _.size > 0);
        let total_size = owner_items.reduce(
            (total, item) => total + item.size,
            0,
        );
        if (total_size <= max_size) return;
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

    public async invalidateStore() {
        if (!this._cache_db_ready) return;
        try {
            await this._write((store) => store.clear(), 'clear');
        } catch (e) {
            log.error(`Error clearing all cached resources. ${e}`);
            throw e;
        }
        log.debug(`Cleared all cached resources.`);
        this._file_cache_index.set([]);
    }

    public async invalidateFile(url: string, owner = '') {
        if (!this._cache_db_ready) throw new Error('Cache DB not ready');
        const cache_item = this._cacheItem(url);
        if (cache_item?.status !== 'cached') {
            throw new Error('Cached item with URL not found');
        }
        if (owner && !cacheOwners(cache_item).includes(owner)) {
            throw new Error('Cached item with URL not found');
        }
        const remaining_owners = owner
            ? cacheOwners(cache_item).filter((_) => _ !== owner)
            : [];
        if (owner && remaining_owners.length) {
            cache_item.owner = remaining_owners[0] || '';
            cache_item.owners = remaining_owners;
            this._file_cache_index.set([...this._cache_index]);
            await this._updateStoredOwners(cache_item);
            return;
        }
        try {
            await this._write((store) => store.delete(cache_item.id), 'delete');
        } catch (e) {
            log.error(`Error removing cached resource. ${e}`, url);
            throw e;
        }
        log.debug(`Removed resource.`, cache_item.id, url);
        this._file_cache_index.set(
            this._cache_index.filter((_) => _.id !== cache_item.id),
        );
    }

    /**
     * Set the session cookie that authenticates requests for protected uploads
     * made outside the API client: the cache's own download and, as a fallback,
     * media elements streaming straight from the server.
     */
    public applyAuthenticationCookie(max_age_seconds = 30) {
        const tkn = token();
        document.cookie = `${
            tkn === 'x-api-key'
                ? 'api-key=' + encodeURIComponent(apiKey())
                : 'bearer_token=' + encodeURIComponent(tkn)
        };max-age=${max_age_seconds};path=${UPLOADS_PATH};samesite=strict;${
            location.protocol === 'https:' ? 'secure;' : ''
        }`;
    }

    private _cacheItem(url: string) {
        return this._cache_index.find((_) => _.url === url);
    }

    /**
     * Download a URL into the cache, sharing the download with any other
     * caller asking for the same URL at the same time.
     */
    private _cacheFile(url: string, owner: string): Promise<DownloadResult> {
        const in_flight = this._downloads.get(url);
        if (in_flight) return in_flight;
        const cache_item: CacheItem = {
            id: randomString(16, '0123456789ABCDEF'),
            url,
            owner,
            owners: owner ? [owner] : [],
            status: 'preparing',
            on_change: new Subject(),
        };
        // One entry per URL: a stale duplicate left behind would be found
        // before this one and reported missing on every lookup.
        this._file_cache_index.set([
            ...this._cache_index.filter((_) => _.url !== url),
            cache_item,
        ]);
        const download = this._downloadAndStore(url, cache_item).finally(() => {
            if (this._downloads.get(url) === download) {
                this._downloads.delete(url);
            }
        });
        this._downloads.set(url, download);
        return download;
    }

    private async _downloadAndStore(
        url: string,
        cache_item: CacheItem,
    ): Promise<DownloadResult> {
        let file: File | null = null;
        try {
            cacheStatus(cache_item, 'downloading');
            // If not an API call, just load the image
            if (url.includes(UPLOADS_PATH)) this.applyAuthenticationCookie();
            const blob = await this._download(url);
            if (blob.size <= 0) {
                log.error(`Downloaded resource is empty.`, url);
                throw new Error('Downloaded media file is empty');
            }
            cacheStatus(cache_item, 'storing');
            // Create a File object (or you can use the blob directly)
            file = new File([blob], cache_item.id, { type: blob.type });
            await this._storeFile(cache_item, file, url);
            cache_item.size = file.size;
            log.debug(`Cached resource.`, [cache_item.id, url]);
            cacheStatus(cache_item, 'cached');
            this._file_cache_index.set([...this._cache_index]);
            return { file, stored: true };
        } catch (e) {
            log.error(`Error downloading resource.`, url, e);
            if (cache_item.status !== 'invalidated') {
                this._markInvalidated(cache_item);
            }
            return { file, stored: false };
        }
    }

    /**
     * Fetch a URL, giving up if the response stops arriving. A download that
     * hangs would otherwise leave its cache entry loading forever, with the
     * player and every later cache sync waiting behind it.
     */
    private async _download(url: string): Promise<Blob> {
        const controller =
            typeof AbortController === 'function'
                ? new AbortController()
                : null;
        const abort = () => controller?.abort();
        const response = await withTimeout(
            fetch(url, controller ? { signal: controller.signal } : undefined),
            DOWNLOAD_STALL_MS,
            'Timed out waiting for the server to respond',
            abort,
        );
        if (!response.ok) {
            log.error(`Error fetching resource. ${response.status}`, url);
            throw new Error(`Request failed with status ${response.status}`);
        }
        const reader = response.body?.getReader?.();
        if (!reader) {
            return withTimeout(
                response.blob(),
                DOWNLOAD_TIMEOUT_MS,
                'Timed out downloading resource',
                abort,
            );
        }
        const deadline = Date.now() + DOWNLOAD_TIMEOUT_MS;
        const chunks: BlobPart[] = [];
        for (;;) {
            const remaining = deadline - Date.now();
            if (remaining <= 0) {
                abort();
                throw new Error('Timed out downloading resource');
            }
            const { done, value } = await withTimeout(
                reader.read(),
                Math.min(DOWNLOAD_STALL_MS, remaining),
                'Download stalled',
                abort,
            );
            if (done) break;
            if (value) chunks.push(value);
        }
        const type = response.headers?.get?.('content-type') || '';
        return new Blob(chunks, { type });
    }

    /**
     * Wait for a loading entry to settle. Resolves with the entry's current
     * status if it is still loading after `max_wait_ms`, so a caller is never
     * pinned to a download that has stopped making progress.
     */
    private _finalCacheStatus(
        cache_item: CacheItem,
        max_wait_ms = DOWNLOAD_WAIT_MS,
    ): Promise<CacheItemStatus> {
        if (!isLoadingStatus(cache_item.status)) {
            return Promise.resolve(cache_item.status);
        }
        return firstValueFrom(
            cache_item.on_change.pipe(
                filter(isFinalStatus),
                timeout({
                    first: Math.max(0, max_wait_ms),
                    with: () => of(cache_item.status),
                }),
            ),
        );
    }

    private async _storeFile(cache_item: CacheItem, file: File, url: string) {
        try {
            await this._write(
                (store) =>
                    store.add({
                        name: cache_item.id,
                        url: cache_item.url,
                        owner: cache_item.owner || '',
                        owners: cacheOwners(cache_item),
                        file,
                    }),
                'add',
            );
        } catch (e) {
            log.error(`Error caching resource. ${e}`, url);
            throw e;
        }
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
            const file = await this._storedFile(cache_item, url).catch(
                () => null,
            );
            if (file) this._setCachedSize(cache_item, file.size);
            return !!file;
        }
        const exists = await this._storedFileExists(cache_item.id).catch(
            () => false,
        );
        if (!exists) {
            this._markMissing(cache_item, url);
            return false;
        }
        this._unverified_ids.delete(cache_item.id);
        return true;
    }

    private async _storedFileExists(id: string): Promise<boolean> {
        const count = await this._read((store) => store.count(id), 'count');
        return (count || 0) > 0;
    }

    private _setCachedSize(cache_item: CacheItem, size: number) {
        if (cache_item.size === size) return;
        cache_item.size = size;
        this._file_cache_index.set([...this._cache_index]);
    }

    /** Fill in sizes for entries whose metadata predates size tracking */
    private async _recoverCachedSizes() {
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
        let record: StoredCacheRecord | undefined;
        try {
            record = await this._read(
                (store) => store.get(cache_item.id),
                'get',
            );
        } catch (e) {
            log.error(`Error retrieving cached resource. ${e}`, url);
            throw e;
        }
        if (!record) {
            this._markMissing(cache_item, url);
            return null;
        }
        const file = record.file;
        if (!(file?.size > 0)) {
            log.warn(
                `Cached resource is empty. It will be downloaded again.`,
                url,
            );
            this._markInvalidated(cache_item);
            return null;
        }
        this._unverified_ids.delete(cache_item.id);
        return file;
    }

    /**
     * Rebuild the cached entries from what the store actually holds. The store
     * is authoritative: persisted metadata is only a head start until it has
     * answered, and any entry it does not hold is dropped so nothing keeps
     * looking for a file that is not there.
     */
    private async _loadCacheMetadataFromStore() {
        const records = await this._storedFileRecords().catch(() => null);
        if (!records) return;
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
        const stored_ids = new Set(stored_items.map((_) => _.id));
        // Keep entries still in progress, and files cached by this session
        // that the store snapshot may predate. Only entries restored from
        // persisted metadata and never seen in the store are dropped.
        const kept_items = this._cache_index.filter(
            (item) =>
                item.status !== 'cached' ||
                stored_ids.has(item.id) ||
                !this._unverified_ids.has(item.id),
        );
        const dropped = this._cache_index.length - kept_items.length;
        if (dropped > 0) {
            log.warn(
                `Dropped ${dropped} cached entries that have no stored file.`,
            );
        }
        this._unverified_ids.clear();
        this._file_cache_index.set([
            ...kept_items,
            ...stored_items.filter(
                (stored) =>
                    !kept_items.some(
                        (item) =>
                            item.id === stored.id || item.url === stored.url,
                    ),
            ),
        ]);
    }

    private _storedFileRecords(): Promise<StoredCacheRecord[]> {
        return this._read(
            (store) => store.getAll() as IDBRequest<StoredCacheRecord[]>,
            'getAll',
        )
            .then((records) => records || [])
            .catch((e) => {
                log.error(`Error retrieving cached resources. ${e}`);
                throw e;
            });
    }

    private _markMissing(cache_item: CacheItem, url: string) {
        log.warn(
            `Cached resource is missing from storage. It will be downloaded again.`,
            url,
        );
        this._markInvalidated(cache_item);
    }

    private _markInvalidated(cache_item: CacheItem) {
        cacheStatus(cache_item, 'invalidated');
        this._unverified_ids.delete(cache_item.id);
        this._file_cache_index.set([...this._cache_index]);
    }

    private _loadCacheMetadata() {
        log.debug('Loading cache metadata...');
        const metadata_string = localStorage.getItem(STORE_KEY) || '[]';
        try {
            const metadata = JSON.parse(metadata_string);
            if (metadata instanceof Array) {
                const items: CacheItem[] = [];
                for (const _ of metadata) {
                    if (!_?.id || !_.url) continue;
                    if (items.some((item) => item.url === _.url)) continue;
                    items.push({
                        id: _.id,
                        url: _.url,
                        owner: _.owner || '',
                        owners: _.owners || (_.owner ? [_.owner] : []),
                        size: _.size || 0,
                        status: 'cached',
                        on_change: new Subject(),
                    });
                    this._unverified_ids.add(_.id);
                }
                this._file_cache_index.set(items);
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
            try {
                localStorage.setItem(STORE_KEY, JSON.stringify(metadata));
            } catch (e) {
                log.warn(`Unable to save cache metadata. ${e}`);
            }
        });
    }

    private async _addOwner(cache_item: CacheItem, owner = '') {
        if (!owner || cacheOwners(cache_item).includes(owner)) return;
        cache_item.owner = cache_item.owner || owner;
        cache_item.owners = [...cacheOwners(cache_item), owner];
        this._file_cache_index.set([...this._cache_index]);
        await this._updateStoredOwners(cache_item).catch((e) =>
            log.warn(`Unable to update owners of cached resource. ${e}`),
        );
    }

    private async _updateStoredOwners(cache_item: CacheItem) {
        const record = await this._read(
            (store) => store.get(cache_item.id),
            'get',
        );
        if (!record) return;
        await this._write(
            (store) =>
                store.put({
                    ...record,
                    owner: cacheOwners(cache_item)[0] || '',
                    owners: cacheOwners(cache_item),
                }),
            'put',
        );
    }

    // ---- Database connection -------------------------------------------

    private _connectDatabase() {
        this._cache_db_ready = this._openDatabase();
        this._cache_db_ready
            .then(() => this._loadCacheMetadataFromStore())
            .catch((e) => log.error(`Media database unavailable. ${e}`));
    }

    /**
     * Open the database, recreating it if it cannot be opened. A database that
     * refuses to open is no use to anyone; the files it held are downloaded
     * again into the replacement.
     */
    private _openDatabase(recreate_on_error = true): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            let request: IDBOpenDBRequest;
            try {
                request = indexedDB.open(DB_NAME, DB_VERSION);
            } catch (e) {
                log.error(`DB Error: ${e}.`);
                return reject(e);
            }
            request.onupgradeneeded = (event: any) => {
                const db = event.target.result as IDBDatabase;
                if (!db.objectStoreNames.contains(DB_STORE)) {
                    db.createObjectStore(DB_STORE, { keyPath: 'name' });
                    log.debug(`Object store created successfully.`);
                }
            };
            request.onblocked = () =>
                log.warn(`Database open is blocked by another connection.`);
            request.onerror = (event: any) => {
                const error = event.target?.error;
                log.error(`DB Error: ${error}.`);
                if (!recreate_on_error) return reject(error);
                log.warn(`Recreating the media database.`);
                this._deleteDatabase()
                    .then(() => this._openDatabase(false))
                    .then(resolve, reject);
            };
            request.onsuccess = (event: any) => {
                const db = event.target.result as IDBDatabase;
                // Another context is upgrading or deleting the database; let
                // go of it and come back once that has happened.
                db.onversionchange = () => {
                    try {
                        db.close();
                    } catch {}
                    this._reconnect('version change');
                };
                // Chrome closes connections it can no longer service, for
                // example after storage is wiped underneath the page.
                db.onclose = () => this._reconnect('connection closed');
                this._cache_db = db;
                log.debug(`Connected to database successfully.`);
                resolve();
            };
        });
    }

    private _deleteDatabase() {
        return new Promise<void>((resolve) => {
            try {
                const request = indexedDB.deleteDatabase(DB_NAME);
                request.onsuccess = () => resolve();
                request.onerror = () => resolve();
                request.onblocked = () => resolve();
            } catch {
                resolve();
            }
        });
    }

    /** Reopen the database connection, at most once every so often */
    private _reconnect(reason: string) {
        const now = Date.now();
        if (now - this._last_reconnect < DB_RECONNECT_INTERVAL_MS) return;
        this._last_reconnect = now;
        log.warn(`Reconnecting to the media database: ${reason}.`);
        try {
            this._cache_db?.close();
        } catch {}
        this._cache_db = undefined;
        this._connectDatabase();
    }

    /** The open database, reconnecting if the last attempt to open it failed */
    private async _database(): Promise<IDBDatabase> {
        try {
            await this._cache_db_ready;
        } catch (e) {
            this._reconnect('previous open failed');
            throw e;
        }
        if (!this._cache_db) throw new Error('Cache DB not connected');
        return this._cache_db;
    }

    private async _transaction(mode: IDBTransactionMode) {
        const db = await this._database();
        try {
            return db.transaction([DB_STORE], mode);
        } catch (e) {
            // A connection that has been closed underneath us throws here;
            // reopen it for the next caller.
            this._reconnect(`transaction failed (${e})`);
            throw e;
        }
    }

    /** Run a read request and resolve with its result */
    private async _read<T>(
        run: (store: IDBObjectStore) => IDBRequest<T>,
        label: string,
    ): Promise<T> {
        const transaction = await this._transaction('readonly');
        return withTimeout(
            new Promise<T>((resolve, reject) => {
                const request = run(transaction.objectStore(DB_STORE));
                request.onerror = (event: any) =>
                    reject(event.target?.error || new Error(`${label} failed`));
                request.onsuccess = () => resolve(request.result);
            }),
            DB_OPERATION_TIMEOUT_MS,
            `Database ${label} timed out`,
        );
    }

    /** Run a write request and resolve once its transaction has committed */
    private async _write(
        run: (store: IDBObjectStore) => IDBRequest,
        label: string,
    ): Promise<void> {
        const transaction = await this._transaction('readwrite');
        return withTimeout(
            new Promise<void>((resolve, reject) => {
                const fail = (event: any) =>
                    reject(event.target?.error || new Error(`${label} failed`));
                const request = run(transaction.objectStore(DB_STORE));
                request.onerror = fail;
                transaction.onerror = fail;
                transaction.onabort = fail;
                transaction.oncomplete = () => resolve();
            }),
            DB_OPERATION_TIMEOUT_MS,
            `Database ${label} timed out`,
            () => {
                try {
                    transaction.abort();
                } catch {}
            },
        );
    }
}
