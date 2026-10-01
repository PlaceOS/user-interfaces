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
/** Cache budget used when the browser cannot report its storage */
const FALLBACK_CACHE_LIMIT_BYTES = 512 * 1024 * 1024;
/**
 * Share of the storage available to this origin that the cache may fill. The
 * rest is headroom for the app itself, database overhead, and an estimate that
 * lags behind recent writes.
 */
const STORAGE_BUDGET_SHARE = 0.8;
/** Most URLs remembered as too large to cache, so the list stays bounded */
const MAX_TOO_LARGE_URLS = 200;
/**
 * How long a single database request may take before it counts as failed. A
 * request that never settles would otherwise hold the whole cache sync - and
 * the player waiting on it - forever.
 */
const DB_OPERATION_TIMEOUT_MS = 30 * SECONDS;
/** Minimum spacing between attempts to reopen a broken database connection */
const DB_RECONNECT_INTERVAL_MS = 30 * SECONDS;
/**
 * How long a download may go without receiving any data before it is
 * abandoned. A download that keeps receiving data has no overall deadline, so
 * a large file on a slow link can always finish.
 */
const DOWNLOAD_STALL_MS = 60 * SECONDS;
/**
 * Shortest deadline for a download that cannot be watched for progress (no
 * streaming support). Longer files get time at `MIN_DOWNLOAD_BYTES_PER_SECOND`.
 */
const DOWNLOAD_TIMEOUT_MS = 15 * MINUTES;
/** Slowest link assumed when sizing that deadline: about 1 Mbps */
const MIN_DOWNLOAD_BYTES_PER_SECOND = 128 * 1024;
/**
 * Largest file read into memory when the browser cannot build a Blob from a
 * stream. That read holds about twice the file at its peak: about 100 MB here,
 * which a 2 GB player can spare beside the video it is playing. Larger files
 * play from the network instead.
 */
const IN_MEMORY_DOWNLOAD_LIMIT_BYTES = 50 * 1024 * 1024;
/**
 * Longest a caller waits on a download that is already in progress before it
 * stops waiting. The download itself carries on.
 */
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
    /** Bytes the whole cache may hold. Defaults to the storage budget. */
    max_size?: number;
    /** Whether files of other owners may be evicted to make room */
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
    /** The file does not fit in storage, so it plays from the network */
    no_room?: boolean;
}

/** How much a download may store, and how to make room for it */
interface CacheFit {
    /** Largest file that may be stored */
    max_bytes: number;
    /**
     * Evict entries the request does not need until `bytes` more fit in the
     * budget. `Infinity` evicts every entry the request may evict.
     */
    make_room?: (bytes: number) => Promise<void>;
}

/** A response body stream, typed as the browser hands it over */
type ResponseBody = NonNullable<Response['body']>;

/** A file that does not fit in the storage the cache may use */
class NoRoomError extends Error {
    /**
     * @param bytes Room the file needs before it is worth trying again.
     * `Infinity` means not until the player reloads.
     */
    constructor(public readonly bytes: number) {
        super(`Media needs ${bytes} bytes of storage`);
    }
}

/**
 * The browser could not build a Blob from a download that arrived fine,
 * usually because its blob storage is full. On a small profile volume that
 * limit can be far below the free space.
 */
class BlobStorageError extends Error {}

/**
 * Whether a write failed because storage is full. Chrome reports a disk that
 * fills during a blob write as a `DataError` ("Failed to write blobs"), not a
 * quota error. The cache's keys are always valid, so no other `DataError` is
 * expected from a write.
 */
function isStorageFullError(error: unknown) {
    const name = (error as DOMException | null)?.name;
    return name === 'QuotaExceededError' || name === 'DataError';
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
 * Read a response body into a Blob. Fails if no data arrives for
 * `DOWNLOAD_STALL_MS`, or once the body grows past `max_bytes`. Chunks pass
 * straight through into the Blob instead of being collected first, so the
 * file is held once, and the browser can keep a large one on disk.
 *
 * The browser builds that Blob in its own blob storage, which has a limit of
 * its own. When the Blob cannot be built while the network is fine, this
 * rejects with a `BlobStorageError`.
 */
function streamToBlob(
    body: ResponseBody,
    type: string,
    max_bytes: number,
    abort: () => void,
) {
    return new Promise<Blob>((resolve, reject) => {
        const reader = body.getReader();
        let timer: ReturnType<typeof setTimeout>;
        let received = 0;
        // Set when the download itself failed, not the Blob it feeds
        let source_error: unknown = null;
        const fail = (error: unknown) => {
            clearTimeout(timer);
            abort();
            // Also stops reading where the request cannot be aborted
            reader.cancel(error).catch(() => undefined);
            reject(error);
        };
        const watch = () => {
            clearTimeout(timer);
            timer = setTimeout(
                () => fail(new Error('Download stalled')),
                DOWNLOAD_STALL_MS,
            );
        };
        const counted = new ReadableStream<Uint8Array>({
            // Only a failed read or an oversized body counts as the source
            // failing. `close` and `enqueue` throw once the Blob side has
            // given up, and that is a blob storage failure.
            pull: async (controller) => {
                const { done, value } = await reader.read().catch((e) => {
                    source_error = e || new Error('Download failed');
                    throw source_error;
                });
                if (done) return controller.close();
                received += value.byteLength;
                if (received > max_bytes) {
                    source_error = new NoRoomError(received);
                    throw source_error;
                }
                watch();
                controller.enqueue(value);
            },
            cancel: (reason) => reader.cancel(reason),
        });
        watch();
        new Response(
            counted,
            type ? { headers: { 'content-type': type } } : undefined,
        )
            .blob()
            .then(
                (blob) => {
                    clearTimeout(timer);
                    resolve(blob);
                },
                (e) => fail(source_error || new BlobStorageError(`${e}`)),
            );
    });
}

/**
 * Read a response body into memory, then into a Blob. Holds about twice the
 * file at its peak, so it is only a fallback for small files when the browser
 * cannot build a Blob from a stream. A file past `max_bytes`, or one the
 * browser cannot hold, fails with a `NoRoomError` that is not retried.
 */
async function readToBlob(
    body: ResponseBody,
    type: string,
    max_bytes: number,
    abort: () => void,
) {
    const reader = body.getReader();
    const chunks: BlobPart[] = [];
    let received = 0;
    // Ends when the body does, stalls, or passes `max_bytes`
    for (;;) {
        const { done, value } = await withTimeout(
            reader.read(),
            DOWNLOAD_STALL_MS,
            'Download stalled',
            abort,
        );
        if (done) break;
        received += value.byteLength;
        if (received > max_bytes) {
            abort();
            reader.cancel().catch(() => undefined);
            throw new NoRoomError(Infinity);
        }
        chunks.push(value);
    }
    try {
        return new Blob(chunks, { type });
    } catch (e) {
        log.warn(`Unable to hold downloaded media in memory. ${e}`);
        throw new NoRoomError(Infinity);
    }
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
    /**
     * URLs that do not fit in storage, with the room they need before they
     * are tried again. They play from the network until then.
     */
    private readonly _too_large = new Map<string, number>();
    /** Bytes the cache may hold, as last worked out from the storage estimate */
    private _budget_bytes = FALLBACK_CACHE_LIMIT_BYTES;
    private _last_reconnect = 0;

    private get _cache_index() {
        return this._file_cache_index();
    }

    constructor() {
        super();
        this._loadCacheMetadata();
        this._connectDatabase();
        this._requestPersistentStorage();
        effect(() => {
            this._file_cache_index();
            this._saveCacheMetadata();
        });
    }

    /**
     * Cache the files in `url_list`, most important first. Other entries are
     * evicted to make room for them, but entries in the list never are. A
     * file that cannot fit is not downloaded; it plays from the network.
     * Resolves true when a file failed in a way that is worth retrying.
     */
    public async requestFilesToCache(
        url_list: string[],
        owner = '',
        options: CacheRequestOptions = {},
    ): Promise<boolean> {
        const budget = options.max_size ?? (await this._storageBudget());
        const prune_others = !!options.prune_other_owners;
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
                } else if (existing.status === 'cached') {
                    // A store that cannot be read says nothing about the
                    // file. Downloading it again would orphan the old copy.
                    const stored = await this._hasStoredFile(
                        existing,
                        url,
                    ).catch(() => null);
                    if (stored === null) {
                        failures = true;
                        continue;
                    }
                    if (stored) {
                        await this._addOwner(existing, owner);
                        continue;
                    }
                }
            }
            const fit = this._cacheFit(owner, url_list, budget, prune_others);
            if (!this._mayFit(url, fit.max_bytes)) continue;
            // Stagger requests for uncached resources to avoid overwhelming the network
            if (uncached_count > 0) await delay(STAGGER_DELAY_MS);
            uncached_count++;
            // Playback may have cached the file, or found it too large, during
            // the delay
            const latest = this._cacheItem(url);
            if (latest?.status === 'cached') {
                await this._addOwner(latest, owner);
                continue;
            }
            if (!this._mayFit(url, fit.max_bytes)) continue;
            const { stored, no_room } = await this._cacheFile(url, owner, fit);
            if (!stored && !no_room) failures = true;
        }
        this._file_cache_index.set([...this._cache_index]);
        await this.pruneCache(owner, url_list, budget, prune_others);
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
     * Resolves null for a file too large to cache, which plays from the
     * network instead. Playback never evicts: the file must fit in what the
     * budget has left, and only a sync makes more room. Waits at most
     * `wait_ms` for a download that is already in progress and returns null
     * if it has not finished by then.
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
        if (this._too_large.has(url)) return null;
        // Everything cached counts as needed, so nothing is evicted
        const fit = this._cacheFit(
            owner,
            this._cache_index.map((_) => _.url),
            this._budget_bytes,
            false,
        );
        if (!this._mayFit(url, fit.max_bytes)) return null;
        const { file } = await this._cacheFile(url, owner, fit);
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
            limit_bytes: this._budget_bytes,
            downloads_in_flight: this._downloads.size,
            too_large: [...this._too_large.keys()],
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
     * cached, has been invalidated, or is too large to cache.
     */
    public isLoadingFile(url: string): boolean {
        const item = this._cacheItem(url);
        if (!item) return !this._too_large.has(url);
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

    /**
     * Evict cached files until the whole cache fits in `max_size` bytes.
     * Files in `priority_urls` are never evicted, nor are files shared with
     * other owners unless `prune_other_owners` is set. Other owners' files go
     * first, then the largest.
     */
    public async pruneCache(
        owner = '',
        priority_urls: string[] = [],
        max_size = this._budget_bytes,
        prune_other_owners = false,
    ) {
        if (!this._cache_db_ready) return;
        // Sizes are tracked on the index, so the common case - comfortably
        // under budget - costs nothing. Metadata written before sizes were
        // recorded needs one pass over the store to fill them in.
        if (
            this._cache_index.some(
                (item) => item.status === 'cached' && !(item.size > 0),
            )
        ) {
            await this._recoverCachedSizes();
        }
        let total_size = this._cachedBytes();
        if (total_size <= max_size) return;
        const eviction_list = this._evictable(
            owner,
            priority_urls,
            prune_other_owners,
        );
        for (const item of eviction_list) {
            if (total_size <= max_size) break;
            const removed = await this.invalidateFile(item.url).then(
                () => true,
                () => false,
            );
            if (removed) total_size -= item.size || 0;
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
        this._too_large.clear();
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
    private _cacheFile(
        url: string,
        owner: string,
        fit: CacheFit,
    ): Promise<DownloadResult> {
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
        // before this one and reported missing on every lookup. The records
        // of the entries replaced go too, as nothing would point at them.
        const replaced = this._cache_index.filter((_) => _.url === url);
        this._file_cache_index.set([
            ...this._cache_index.filter((_) => _.url !== url),
            cache_item,
        ]);
        this._deleteRecords(replaced.map((_) => _.id));
        const download = this._downloadAndStore(url, cache_item, fit).finally(
            () => {
                if (this._downloads.get(url) === download) {
                    this._downloads.delete(url);
                }
            },
        );
        this._downloads.set(url, download);
        return download;
    }

    private async _downloadAndStore(
        url: string,
        cache_item: CacheItem,
        fit: CacheFit = { max_bytes: Infinity },
    ): Promise<DownloadResult> {
        let file: File | null = null;
        try {
            cacheStatus(cache_item, 'downloading');
            // If not an API call, just load the image
            if (url.includes(UPLOADS_PATH)) this.applyAuthenticationCookie();
            const blob = await this._download(url, fit);
            if (blob.size <= 0) {
                log.error(`Downloaded resource is empty.`, url);
                throw new Error('Downloaded media file is empty');
            }
            cacheStatus(cache_item, 'storing');
            // Wraps the blob without copying it
            file = new File([blob], cache_item.id, { type: blob.type });
            await fit.make_room?.(file.size);
            try {
                await this._storeFile(cache_item, file, url);
            } catch (e) {
                // The budget is an estimate, so storage can still run out.
                // Evict everything the request does not need and try once
                // more; past that the file plays from the network.
                if (!isStorageFullError(e) || !fit.make_room) throw e;
                log.warn(`Storage is full. Evicting media to retry.`, url);
                await fit.make_room(Infinity);
                try {
                    await this._storeFile(cache_item, file, url);
                } catch (retry_error) {
                    if (!isStorageFullError(retry_error)) throw retry_error;
                    throw new NoRoomError(fit.max_bytes + file.size);
                }
            }
            cache_item.size = file.size;
            this._too_large.delete(url);
            log.debug(`Cached resource.`, [cache_item.id, url]);
            cacheStatus(cache_item, 'cached');
            this._file_cache_index.set([...this._cache_index]);
            return { file, stored: true };
        } catch (e) {
            const no_room = e instanceof NoRoomError;
            if (no_room) {
                log.warn(
                    `Media does not fit in storage. It will play from the network.`,
                    url,
                    e,
                );
                this._markTooLarge(url, e.bytes);
            } else {
                log.error(`Error downloading resource.`, url, e);
            }
            if (cache_item.status !== 'invalidated') {
                this._markInvalidated(cache_item);
            }
            return { file, stored: false, no_room };
        }
    }

    /**
     * Fetch a URL, giving up if the response stops arriving or turns out
     * larger than `max_bytes`. A download that hangs would otherwise leave
     * its cache entry loading forever, with the player and every later cache
     * sync waiting behind it. One that is still receiving data has no
     * deadline, so a large file on a slow link can finish. If the browser
     * cannot build a Blob from the stream, a small file is downloaded once
     * more into memory; a large one fails with a `NoRoomError`.
     */
    private async _download(url: string, fit: CacheFit): Promise<Blob> {
        try {
            return await this._fetchBlob(url, fit, false);
        } catch (e) {
            if (!(e instanceof BlobStorageError)) throw e;
            log.warn(
                `Browser blob storage is full. Retrying in memory.`,
                url,
                e,
            );
            return this._fetchBlob(url, fit, true);
        }
    }

    /**
     * One attempt at `_download`. `in_memory` reads the body into memory
     * instead of streaming it into a Blob, for files up to
     * `IN_MEMORY_DOWNLOAD_LIMIT_BYTES`.
     */
    private async _fetchBlob(
        url: string,
        fit: CacheFit,
        in_memory: boolean,
    ): Promise<Blob> {
        const { max_bytes } = fit;
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
        // Refuse a file that cannot fit before downloading any of it
        const length = Number(response.headers?.get?.('content-length')) || 0;
        if (length > max_bytes) {
            abort();
            throw new NoRoomError(length);
        }
        // Make room before the body arrives. On a nearly full disk the
        // browser can fail to build a large Blob that would fit once older
        // files are gone.
        if (length > 0) await fit.make_room?.(length);
        const type = response.headers?.get?.('content-type') || '';
        const body = response.body;
        if (in_memory) {
            if (length > IN_MEMORY_DOWNLOAD_LIMIT_BYTES) {
                abort();
                throw new NoRoomError(Infinity);
            }
            return readToBlob(
                body,
                type,
                Math.min(max_bytes, IN_MEMORY_DOWNLOAD_LIMIT_BYTES),
                abort,
            );
        }
        if (typeof body?.getReader === 'function') {
            return streamToBlob(body, type, max_bytes, abort);
        }
        // Without streams progress cannot be watched, so allow for the whole
        // file arriving at a slow but workable rate.
        const blob = await withTimeout(
            response.blob(),
            Math.max(
                DOWNLOAD_TIMEOUT_MS,
                (length / MIN_DOWNLOAD_BYTES_PER_SECOND) * SECONDS,
            ),
            'Timed out downloading resource',
            abort,
        );
        if (blob.size > max_bytes) throw new NoRoomError(blob.size);
        return blob;
    }

    /**
     * Whether a download of `url` could fit in `room` bytes. A URL refused
     * before is only tried again once there is the room it needed.
     */
    private _mayFit(url: string, room: number) {
        if (room >= (this._too_large.get(url) ?? 1)) return true;
        if (!this._too_large.has(url)) this._markTooLarge(url, 1);
        return false;
    }

    private _markTooLarge(url: string, bytes: number) {
        this._too_large.delete(url);
        this._too_large.set(url, bytes);
        if (this._too_large.size > MAX_TOO_LARGE_URLS) {
            const [oldest] = this._too_large.keys();
            this._too_large.delete(oldest);
        }
    }

    private _cachedBytes() {
        return this._cache_index
            .filter((_) => _.status === 'cached')
            .reduce((total, _) => total + (_.size || 0), 0);
    }

    /**
     * Cached entries a request may evict, in the order to evict them: files
     * of other owners first, then the largest. Entries the request lists are
     * never evicted, and neither are files shared with owners it may not
     * touch.
     */
    private _evictable(
        owner: string,
        priority_urls: string[],
        prune_other_owners: boolean,
    ) {
        const own = (item: CacheItem) =>
            !owner || cacheOwners(item).includes(owner) ? 1 : 0;
        return this._cache_index
            .filter(
                (item) =>
                    item.status === 'cached' &&
                    !priority_urls.includes(item.url) &&
                    (!owner ||
                        prune_other_owners ||
                        cacheOwners(item).every((_) => _ === owner)),
            )
            .sort((a, b) => own(a) - own(b) || (b.size || 0) - (a.size || 0));
    }

    /**
     * How much a download for `owner` may store within `budget`, and how it
     * makes room: by evicting cached entries outside `priority_urls`. Shared
     * by cache syncs and playback so both keep to the same budget.
     */
    private _cacheFit(
        owner: string,
        priority_urls: string[],
        budget: number,
        prune_other_owners: boolean,
    ): CacheFit {
        return {
            max_bytes:
                budget -
                this._pinnedBytes(owner, priority_urls, prune_other_owners),
            make_room: (bytes) =>
                this.pruneCache(
                    owner,
                    priority_urls,
                    budget - bytes,
                    prune_other_owners,
                ),
        };
    }

    /** Bytes held by cached entries that a request may not evict */
    private _pinnedBytes(
        owner: string,
        priority_urls: string[],
        prune_other_owners: boolean,
    ) {
        const evictable = this._evictable(
            owner,
            priority_urls,
            prune_other_owners,
        ).reduce((total, _) => total + (_.size || 0), 0);
        return this._cachedBytes() - evictable;
    }

    /**
     * Bytes the cache may hold: a share of the storage this origin may use,
     * less what the app holds outside the cache. Falls back to a fixed budget
     * when the browser cannot report its storage.
     */
    private async _storageBudget() {
        const storage =
            typeof navigator === 'undefined' ? undefined : navigator.storage;
        if (typeof storage?.estimate !== 'function') {
            this._budget_bytes = FALLBACK_CACHE_LIMIT_BYTES;
            return this._budget_bytes;
        }
        const estimate = await withTimeout(
            storage.estimate(),
            DB_OPERATION_TIMEOUT_MS,
            'Storage estimate timed out',
        ).catch((e) => {
            log.warn(`Unable to estimate storage. ${e}`);
            return null;
        });
        if (!(estimate?.quota > 0)) {
            this._budget_bytes = FALLBACK_CACHE_LIMIT_BYTES;
            return this._budget_bytes;
        }
        const other_usage = Math.max(
            0,
            (estimate.usage || 0) - this._cachedBytes(),
        );
        this._budget_bytes = Math.max(
            0,
            Math.floor((estimate.quota - other_usage) * STORAGE_BUDGET_SHARE),
        );
        return this._budget_bytes;
    }

    /**
     * Ask the browser not to clear stored media when the device runs low on
     * space. A cleared cache leaves the player downloading everything again.
     */
    private _requestPersistentStorage() {
        const storage =
            typeof navigator === 'undefined' ? undefined : navigator.storage;
        if (typeof storage?.persist !== 'function') return;
        storage.persist().then(
            (granted) =>
                log.debug(
                    `Persistent storage ${granted ? 'granted' : 'denied'}.`,
                ),
            (e) => log.warn(`Unable to request persistent storage. ${e}`),
        );
    }

    /** Delete store records that no entry points at. Failures are logged. */
    private _deleteRecords(ids: string[]) {
        return Promise.all(
            ids.map((id) =>
                this._write((store) => store.delete(id), 'delete').catch((e) =>
                    log.warn(`Unable to delete orphaned media. ${e}`, id),
                ),
            ),
        );
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
     * does not pull every one of its files into memory. Rejects when the store
     * cannot be read, as that says nothing about whether the file is there.
     */
    private async _hasStoredFile(cache_item: CacheItem, url: string) {
        if (!(cache_item.size > 0)) {
            // Size unknown - metadata written by an older build. Read the
            // record once to recover it; later checks are cheap.
            const file = await this._storedFile(cache_item, url);
            if (file) this._setCachedSize(cache_item, file.size);
            return !!file;
        }
        const exists = await this._storedFileExists(cache_item.id);
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
     * looking for a file that is not there. Records no entry can use - empty,
     * without a URL, or a second copy of a URL - are deleted, as nothing else
     * would ever remove them.
     */
    private async _loadCacheMetadataFromStore() {
        const records = await this._storedFileRecords().catch(() => null);
        if (!records) return;
        const usable = records.filter(
            (record) => record.url && record.file?.size > 0,
        );
        const stored_ids = new Set(usable.map((_) => _.name));
        // Keep entries still in progress, and files cached by this session
        // that the store snapshot may predate. Entries restored from persisted
        // metadata and never seen in the store are dropped, and so are failed
        // entries for a URL the store holds a usable file for.
        const kept_items = this._cache_index.filter((item) => {
            if (item.status === 'cached') {
                return (
                    stored_ids.has(item.id) ||
                    !this._unverified_ids.has(item.id)
                );
            }
            if (item.status === 'invalidated') {
                return !usable.some((_) => _.url === item.url);
            }
            return true;
        });
        const dropped = this._cache_index.length - kept_items.length;
        if (dropped > 0) {
            log.warn(
                `Dropped ${dropped} cached entries that have no stored file.`,
            );
        }
        const stored_items: CacheItem[] = [];
        const orphan_ids: string[] = [];
        for (const record of records) {
            const kept = kept_items.find((_) => _.url === record.url);
            if (kept?.id === record.name) continue;
            if (
                !stored_ids.has(record.name) ||
                kept ||
                stored_items.some((_) => _.url === record.url)
            ) {
                orphan_ids.push(record.name);
                continue;
            }
            stored_items.push({
                id: record.name,
                url: record.url,
                owner: record.owner || '',
                owners: cacheOwners(record),
                size: record.file.size,
                status: 'cached',
                on_change: new Subject<CacheItemStatus>(),
            });
        }
        this._unverified_ids.clear();
        this._file_cache_index.set([...kept_items, ...stored_items]);
        if (orphan_ids.length) {
            log.warn(`Deleting ${orphan_ids.length} orphaned media records.`);
            await this._deleteRecords(orphan_ids);
        }
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
