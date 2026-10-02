import {
    computed,
    debounced,
    effect,
    inject,
    Injectable,
    resource,
    signal,
    untracked,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    i18n,
    notifyError,
    notifyInfo,
    notifySuccess,
    notifyWarn,
    OrganisationService,
    SettingsService,
    UploadPermissions,
    UploadsService,
} from '@placeos/common';
import { loadAuthenticatedImage, openConfirmModal } from '@placeos/components';
import {
    addSignageMedia,
    apiEndpoint,
    del,
    post,
    type QueryResponse,
    querySignageMedia,
    removeSignageMedia,
    removeSignageMediaTag,
    renameSignageMediaTag,
    showSignageMedia,
    SignageMedia,
    SignagePlaylist,
    SignagePlugin,
    updateSignageMedia,
} from '@placeos/ts-client';
import type { ImageGenModalData } from '../image-gen/image-gen-modal.component';
import { SignagePlaylistService } from '../playlists/signage-playlist.service';
import type {
    BulkMediaUploadItem,
    BulkMediaUploadModalData,
} from '../shared/bulk-media-upload-modal.component';
import { decodeEntityNames } from '../shared/decode-entity-names.util';
import type { MediaEditChanges } from '../shared/media-edit-modal.component';
import type { MediaTagModalResult } from '../shared/media-tag-modal.component';
import { PagedList } from '../shared/paged-list';
import { SignageContextService } from '../signage-context.service';
import {
    listSignageMediaTagCounts,
    type SignageMediaTagCounts,
} from '../signage-media-tags.util';
import {
    getVideoContainer,
    isImageSourceFile,
    isSupportedImageFile,
    SIGNAGE_MEDIA_PICKER_ACCEPT,
    SignageMediaMetadata,
    validateSignageMediaDimensions,
    validateSignageMediaFile,
} from '../signage-media-upload.util';
import { SignagePluginService } from '../signage-plugin.service';
import { dialogClosed, PAGE_SIZE, searchParam } from '../signage-service.util';
import { parseWebUrl } from '../signage-url.util';
import {
    convertImageToWebp,
    dataURLtoFile,
    generateThumbnail,
    getMediaMetadata,
} from './media-file.util';
import {
    applyMediaView,
    DEFAULT_MEDIA_VIEW,
    isMediaViewActive,
    type MediaViewOptions,
} from './media-view.util';

/** Backoff between attempts at creating a media record, in milliseconds */
const MEDIA_RETRY_DELAYS = [500, 1500, 4500];
/** Most media lookups or file reads to run at once */
const MEDIA_CONCURRENCY = 4;

/**
 * Run `task` for each item, at most `MEDIA_CONCURRENCY` at a time. Like
 * `Promise.allSettled`, one failure does not stop the others, and the results
 * keep the order of `items`.
 */
async function settleEach<T, R>(items: T[], task: (item: T) => Promise<R>) {
    const results: PromiseSettledResult<R>[] = new Array(items.length);
    let next = 0;
    const worker = async () => {
        // Each pass takes a new index, so this ends after `items.length` passes
        while (next < items.length) {
            const index = next++;
            try {
                results[index] = {
                    status: 'fulfilled',
                    value: await task(items[index]),
                };
            } catch (reason) {
                results[index] = { status: 'rejected', reason };
            }
        }
    };
    const workers = Math.min(MEDIA_CONCURRENCY, items.length);
    await Promise.all(Array.from({ length: workers }, worker));
    return results;
}

/** First three names, then a count of the others, such as "a, b, c +2" */
function shortList(names: string[]) {
    const hidden_count = names.length - 3;
    return (
        names.slice(0, 3).join(', ') +
        (hidden_count > 0 ? ` +${hidden_count}` : '')
    );
}

/** Video length in milliseconds from file metadata. 0 when it is unknown. */
function videoLength(metadata: SignageMediaMetadata) {
    return Number.isFinite(metadata.duration)
        ? Math.floor(metadata.duration * 1000)
        : 0;
}

/**
 * Absolute URL of a page the server can screenshot. Plugin URIs can be
 * relative, so resolve them the same way the preview iframe does. The server
 * only renders https pages, so anything else gives an empty string.
 */
function screenshotPageURL(url: string) {
    const page = url ? parseWebUrl(url, document.baseURI) : null;
    return page?.protocol === 'https:' ? page.href : '';
}

/** Absolute URL that serves an upload */
function uploadUrl(upload_id: string) {
    return `${location.origin}/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`;
}

/**
 * Creating a media record is not idempotent, so only retry statuses that mean
 * the server did not process the request. A 500, 502 or 504, or a connection
 * that dropped with no status, can arrive after the record was committed, and
 * a retry would then create a duplicate.
 *
 * A 401 is deliberately absent: the API client already invalidates the token,
 * re-authorises and replays the request itself, so retrying here as well would
 * multiply into a long run of auth refreshes.
 */
function isRetryableMediaError(error: unknown) {
    const status = (error as { status?: unknown } | null)?.status;
    return status === 408 || status === 429 || status === 503;
}

/** Run a media record create, retrying with backoff while the server did not
 * process it. */
async function retryMediaRequest<T>(request: () => Promise<T>): Promise<T> {
    for (const delay of MEDIA_RETRY_DELAYS) {
        try {
            return await request();
        } catch (error) {
            if (!isRetryableMediaError(error)) throw error;
        }
        await new Promise((resolve) => setTimeout(resolve, delay));
    }
    return request();
}

interface PreparedUploadMedia {
    file: File;
    media_type: 'image' | 'video';
    metadata: SignageMediaMetadata;
}

/** File and thumbnail that are stored, but do not have a media record yet */
interface StoredMediaUpload {
    media_id: string;
    thumbnail_id: string;
}

interface SignageUploadOptions {
    permissions: UploadPermissions;
    on_progress?: (progress: number) => void;
    /** Upload from an earlier attempt, so a retry only creates the record */
    stored?: StoredMediaUpload;
    /** Called when the file and thumbnail are stored */
    on_stored?: (stored: StoredMediaUpload) => void;
}

const SIGNAGE_VIEW_MODE_STORAGE_KEY = 'PlaceOS.SIGNAGE:media-view-mode:v1';
type MediaViewMode = 'grid' | 'list' | 'folder';

function loadMediaViewMode(): MediaViewMode {
    if (typeof localStorage === 'undefined') return 'grid';
    try {
        const stored = localStorage.getItem(SIGNAGE_VIEW_MODE_STORAGE_KEY);
        return stored === 'list' || stored === 'folder' ? stored : 'grid';
    } catch {
        return 'grid';
    }
}

function persistMediaViewMode(mode: MediaViewMode) {
    if (typeof localStorage === 'undefined') return;
    try {
        localStorage.setItem(SIGNAGE_VIEW_MODE_STORAGE_KEY, mode);
    } catch {
        // Local storage can be unavailable in private browsing or restricted embeds.
    }
}

/**
 * Signage media library: paging, tags, uploads and thumbnails, and
 * generated images
 */
@Injectable({
    providedIn: 'root',
})
export class SignageMediaService {
    private readonly _org = inject(OrganisationService);
    private readonly _settings = inject(SettingsService);
    private readonly _uploads = inject(UploadsService);
    private readonly _dialog = inject(MatDialog);
    private readonly _context = inject(SignageContextService);
    private readonly _playlist_service = inject(SignagePlaylistService);
    private readonly _plugin_service = inject(SignagePluginService);
    // Kept on the instance, so specs can stub the file processing
    private _generateThumbnail = generateThumbnail;
    private _getMediaMetadata = getMediaMetadata;

    public readonly media_upload_accept = SIGNAGE_MEDIA_PICKER_ACCEPT;

    /** Whether the media page offers its group tab bar. */
    public readonly show_media_group_tabs = this._settings.signal(
        'show_media_group_tabs',
        true,
    );

    public readonly search_term = signal('');
    public readonly media_view_mode =
        signal<MediaViewMode>(loadMediaViewMode());

    // --- Media (paged incrementally as the user scrolls) ---
    // Searching is done by the backend so results are paged like the full
    // library; filtering the loaded pages would only search media that has
    // already been fetched.
    private readonly _media_search_debounced = debounced(this.search_term, 400);
    private readonly _media_list = new PagedList<SignageMedia>({
        sort: (a, b) => b.created_at - a.created_at,
    });
    // Bumped to fetch the first page again after it failed.
    private readonly _media_reload = signal(0);

    /** Sort and filters for the media library */
    public readonly media_view = signal<MediaViewOptions>(DEFAULT_MEDIA_VIEW);
    public readonly media_view_active = computed(() =>
        isMediaViewActive(this.media_view()),
    );
    /** Loaded media with the library sort and filters applied */
    public readonly media = computed(() =>
        applyMediaView(this._media_list.items(), this.media_view()),
    );
    public readonly media_loading = this._media_list.loading;
    public readonly media_has_more = this._media_list.has_more;
    /** Whether the last media page failed to load. `retryMedia` loads it. */
    public readonly media_error = this._media_list.error;
    /** Media count the backend reports for the current group and search. */
    public readonly media_total = this._media_list.total;

    // Reload the first page whenever the org/group/search/change inputs change.
    private readonly _reload_media = effect(() => {
        const initialised = this._org.initialised();
        const can_query = this._context.can_query_group_data();
        const group_id = this._context.api_group_id_debounced.value();
        const search = this._media_search_debounced.value().trim();
        this._context.data_change();
        this._media_reload();
        untracked(() =>
            this._media_list.reset(
                initialised && can_query
                    ? querySignageMedia(
                          this._context.orgZoneQueryParams(
                              { limit: PAGE_SIZE, ...searchParam(search) },
                              group_id,
                          ),
                      )
                    : null,
            ),
        );
    });

    // The API cannot sort or filter by type or expiry, so the browser does it.
    // That needs the whole library, so load the remaining pages one at a time
    // while a sort or filter is active. Stops when the last page is loaded.
    private readonly _load_all_media = effect(() => {
        if (!this.media_view_active()) return;
        if (!this.media_has_more() || this.media_loading()) return;
        untracked(() => this.loadMoreMedia());
    });

    public loadMoreMedia() {
        this._media_list.loadMore();
    }

    /** Load the media page that failed again: the next page when some pages
     * are loaded, otherwise the first page. */
    public retryMedia() {
        if (!this._media_list.retry()) {
            this._media_reload.update((count) => count + 1);
        }
    }

    // Distinct tags in use across the active group/zone's signage media, with
    // the number of media items using each. Sourced from the dedicated
    // tag-counts endpoint so the folder list and its counts stay complete no
    // matter how many media pages have been loaded.
    private readonly _media_tags = resource({
        params: () => ({
            initialised: this._org.initialised(),
            can_query: this._context.can_query_group_data(),
            group_id: this._context.api_group_id_debounced.value(),
            change: this._context.data_change(),
        }),
        loader: async ({ params }) => {
            const empty: SignageMediaTagCounts = { tags: [], counts: {} };
            if (!params.initialised || !params.can_query) return empty;
            try {
                return await listSignageMediaTagCounts(
                    this._context.orgZoneQueryParams({}, params.group_id),
                );
            } catch {
                return empty;
            }
        },
    });
    public readonly media_tags = computed(
        () => this._media_tags.value()?.tags || [],
    );
    /** Media count per tag. Empty when the backend cannot count them. */
    public readonly media_tag_counts = computed(
        () => this._media_tags.value()?.counts || {},
    );

    public queryMedia(search = ''): QueryResponse<SignageMedia> | null {
        if (!this._context.canQueryLists()) return null;
        return querySignageMedia({
            ...this._context.orgZoneQueryParams({ limit: PAGE_SIZE }),
            ...searchParam(search),
        });
    }

    /**
     * Create a media record and add it to the loaded list. Empty fields are
     * left out, so the backend applies its defaults.
     */
    private async _createMedia(fields: Partial<SignageMedia>) {
        const data = { ...new SignageMedia(fields) };
        for (const key in data) {
            if (!data[key]) delete data[key];
        }
        const query_params = this._context.groupQueryParams({});
        const result = await retryMediaRequest(() =>
            addSignageMedia(data, query_params),
        );
        this._addMediaToList(result);
        return result;
    }

    /**
     * Fold a newly created item into the loaded media list. Refetching instead
     * loses the item whenever the backend index lags the write, which reads as
     * a failed upload.
     */
    private _addMediaToList(media: SignageMedia) {
        if (!media?.id) return;
        const item = decodeEntityNames(media);
        if (!this._media_list.items().some(({ id }) => id === item.id)) {
            this._media_list.adjustTotal(1);
        }
        this._media_list.update((items) =>
            [item, ...items.filter((existing) => existing.id !== item.id)].sort(
                (a, b) => b.created_at - a.created_at,
            ),
        );
        this._media_tags.reload();
    }

    /** Take deleted media out of the loaded list and its total, in place, as
     * the search index can still return it for a short time. */
    private _removeMediaFromList(media_ids: string[]) {
        const removed = new Set(media_ids);
        this._media_list.update((items) =>
            items.filter((item) => !removed.has(item.id)),
        );
        this._media_list.adjustTotal(-removed.size);
        this._media_tags.reload();
    }

    /**
     * Playlists that include any of the media items, read from the media
     * show route. A failed lookup only leaves out the playlists of that item.
     */
    private async _playlistsUsingMedia(media_ids: string[]) {
        const query_params = this._context.groupQueryParams({});
        const results = await settleEach(media_ids, (id) =>
            showSignageMedia(id, query_params),
        );
        const by_id = new Map<string, SignagePlaylist>();
        for (const result of results) {
            if (result.status !== 'fulfilled') continue;
            for (const playlist of result.value?.playlists || []) {
                if (playlist?.id) by_id.set(playlist.id, playlist);
            }
        }
        return [...by_id.values()];
    }

    /**
     * Add the playlists that use the media to a delete confirmation message
     * @param item_count Number of media items to delete
     */
    private _withMediaUsage(
        content: string,
        playlists: SignagePlaylist[],
        item_count = 1,
    ) {
        if (!playlists.length) return content;
        const names = shortList(playlists.map(({ name }) => name));
        const usage = i18n(
            item_count > 1
                ? 'SIGNAGE_MANAGER.SVC_MEDIA_ITEMS_USED_IN'
                : 'SIGNAGE_MANAGER.SVC_MEDIA_USED_IN',
            { count: playlists.length, names },
            playlists.length,
        );
        return `${content} ${usage}`;
    }

    /** Warn about bulk upload files larger than 4K, by name. A single file
     * shows the warning in its edit modal instead. */
    private _warnLargeMedia(items: BulkMediaUploadItem[]) {
        const large = items.filter(
            ({ metadata }) => !validateSignageMediaDimensions(metadata).valid,
        );
        if (!large.length) return;
        const { error } = validateSignageMediaDimensions(large[0].metadata);
        notifyWarn(
            `${shortList(large.map(({ file }) => file.name))}: ${error}`,
        );
    }

    public async previewMedia(item: SignageMedia) {
        const plugin =
            item.media_type === 'plugin' && item.plugin_id
                ? await this._plugin_service.resolvePlugin(item.plugin_id)
                : undefined;
        const { MediaPreviewModalComponent } =
            await import('../shared/media-preview-modal.component');
        this._dialog.open(MediaPreviewModalComponent, {
            data: {
                media: item,
                plugin,
                group_id: this._context.api_group_id(),
            },
            panelClass: 'fullscreen-dialog',
        });
    }

    public async previewFileFromInput(event: Event) {
        const element = event.target as HTMLInputElement;
        if (!element?.files?.length) return;
        try {
            await this.previewFiles(element.files);
        } finally {
            element.value = '';
        }
    }

    public async previewFiles(
        files: ArrayLike<File> | Iterable<File> | null | undefined,
    ) {
        if (
            !this._context.requirePermission(
                this._context.can_create(),
                'SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA',
            )
        )
            return;
        if (!files) return;
        const upload_files = Array.from(files);
        if (upload_files.length > 1) {
            return this.bulkUploadMedia(upload_files);
        }
        const [file] = upload_files;
        const prepared = file ? await this._prepareUploadMedia(file) : null;
        if (!prepared) return;
        await this.editMedia(
            new SignageMedia({ video_length: videoLength(prepared.metadata) }),
            prepared.file,
            prepared.metadata,
        );
    }

    /**
     * Upload several files through the bulk upload modal. Each created item is
     * added to the loaded media list, so the list is not fetched again: the
     * search index can lag the new records and would drop them.
     */
    public async bulkUploadMedia(files: File[]) {
        if (
            !this._context.requirePermission(
                this._context.can_create(),
                'SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA',
            )
        )
            return;
        const prepared = await settleEach(files, (file) =>
            this._prepareUploadMedia(file),
        );
        const items: BulkMediaUploadItem[] = prepared.flatMap((result) =>
            result.status === 'fulfilled' && result.value ? [result.value] : [],
        );
        if (!items.length) return;
        this._warnLargeMedia(items);
        // A retry reuses the stored file, so only the failed step runs again
        const stored = new Map<BulkMediaUploadItem, StoredMediaUpload>();
        const data: BulkMediaUploadModalData = {
            items,
            onUpload: (item, permissions, on_progress) =>
                this._addMedia(
                    item.file,
                    new SignageMedia({}),
                    item.metadata,
                    undefined,
                    {
                        permissions,
                        on_progress,
                        stored: stored.get(item),
                        on_stored: (upload) => stored.set(item, upload),
                    },
                ),
        };
        const { BulkMediaUploadModalComponent } =
            await import('../shared/bulk-media-upload-modal.component');
        const ref = this._dialog.open(BulkMediaUploadModalComponent, {
            data,
            panelClass: 'mobile-fullscreen',
        });
        await dialogClosed(ref);
    }

    public async addMediaFromLink(url: string) {
        if (
            !this._context.requirePermission(
                this._context.can_create(),
                'SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA',
            )
        )
            return;
        const url_obj = new URL(url);
        const media = new SignageMedia({
            name: url_obj.hostname,
            media_uri: url,
            media_type: 'webpage',
            orientation: 'landscape',
        });
        await this.editMedia(media);
    }

    /**
     * Create a media item from an image the backend already stored, without
     * sending the bytes up a second time. The caller adds it to a playlist, so
     * a failure there leaves the created row in its hands to retry.
     */
    public async addMediaFromUpload(
        upload_id: string,
        media_item: Partial<SignageMedia> = {},
    ) {
        if (
            !this._context.requirePermission(
                this._context.can_create(),
                'SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA',
            )
        ) {
            throw new Error(i18n('SIGNAGE_MANAGER.SVC_PERMISSION_DENIED'));
        }
        let thumbnail_id = '';
        try {
            const blob = await this._fetchUpload(upload_id);
            const file = new File(
                [blob],
                `${media_item.name || 'image'}.${blob.type.includes('png') ? 'png' : 'jpg'}`,
                { type: blob.type || 'image/jpeg' },
            );
            const thumbnail = await this._generateThumbnailImage(file);
            if (thumbnail) {
                thumbnail_id = await this._uploadThumbnailImage(
                    thumbnail,
                    media_item.name || 'image',
                );
            }
        } catch {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_THUMBNAIL_FAILED'));
        }

        return this._createMedia({
            orientation: 'landscape',
            ...media_item,
            media_id: upload_id,
            media_uri: uploadUrl(upload_id),
            media_type: 'image',
            thumbnail_id,
        });
    }

    /** Remove a media row when the generated upload could not be claimed. */
    public async discardCreatedMedia(id: string) {
        await removeSignageMedia(id);
        this._removeMediaFromList([id]);
    }

    /** guards against a second modal while one is loading or open */
    private _image_gen_modal_open = false;

    /** Open the image generation modal, to create artwork or to change some. */
    public async generateMediaWithImageGen(options: ImageGenModalData = {}) {
        if (
            !this._context.requirePermission(
                this._context.can_create(),
                'SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA',
            )
        )
            return;
        if (
            !this._context.requirePermission(
                this._context.hasFeature(
                    options.source_upload_id ? 'ai-editing' : 'ai-generation',
                ),
                'SIGNAGE_MANAGER.SVC_IMAGE_GEN_DISABLED',
            )
        )
            return;
        if (this._image_gen_modal_open) return;
        // set before the import, so a second click while it loads is ignored
        this._image_gen_modal_open = true;
        try {
            const { ImageGenModalComponent } =
                await import('../image-gen/image-gen-modal.component');
            const ref = this._dialog.open(ImageGenModalComponent, {
                data: options,
                panelClass: 'fullscreen-dialog',
                autoFocus: false,
                ariaLabelledBy: 'image-gen-modal-title',
            });
            const result = await dialogClosed(ref);
            this._context.changed();
            return result;
        } finally {
            this._image_gen_modal_open = false;
        }
    }

    public async editMediaWithImageGen(media: SignageMedia) {
        if (!media?.media_id) return;
        return this.generateMediaWithImageGen({
            source_upload_id: media.media_id,
            source_item_id: media.id,
            source_name: media.name,
            aspect_ratio: media.orientation === 'portrait' ? '9:16' : '16:9',
        });
    }

    public async addMediaFromPlugin(plugin: SignagePlugin) {
        if (plugin.plugin_type !== 'plugin') return;
        if (
            !this._context.requirePermission(
                this._context.can_create(),
                'SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA',
            )
        )
            return;
        const media = new SignageMedia({
            name: '',
            media_uri: plugin.uri,
            media_type: 'plugin',
            plugin_id: plugin.id,
            orientation: 'landscape',
        });
        await this.editMedia(media, undefined, undefined, plugin);
    }

    /**
     * Open the media edit modal. A new file must come from
     * `_prepareUploadMedia` with its metadata, as it is not validated again.
     */
    public async editMedia(
        media: SignageMedia = new SignageMedia({}),
        file?: File,
        prepared_file_metadata?: SignageMediaMetadata,
        plugin?: SignagePlugin,
    ) {
        if (media.id) {
            if (
                !this._context.requirePermission(
                    this._context.can_update(),
                    'SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA',
                )
            )
                return;
        } else if (
            !this._context.requirePermission(
                this._context.can_create(),
                'SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA',
            )
        )
            return;
        const file_metadata = file
            ? prepared_file_metadata || (await this._getMediaMetadata(file))
            : {
                  is_landscape: media.orientation === 'landscape',
                  duration: 0,
                  width: 0,
                  height: 0,
              };
        const load_plugin = media.plugin_id
            ? () => this._plugin_service.resolvePlugin(media.plugin_id)
            : undefined;
        // A file the browser cannot render a frame of still opens the modal,
        // with the fallback preview
        const file_thumbnail = file
            ? await this._generateThumbnail(file, 1024, 720).catch(() => '')
            : '';
        const { MediaEditModalComponent } =
            await import('../shared/media-edit-modal.component');
        const ref = this._dialog.open(MediaEditModalComponent, {
            data: {
                media,
                file,
                file_metadata,
                file_thumbnail,
                group_id: this._context.api_group_id(),
                plugin,
                tag_options: this.media_tags(),
                loadPlugin: load_plugin,
                generateThumbnail: (f: File) => this._generateThumbnailImage(f),
                onAdd: (
                    f: File,
                    m: SignageMedia,
                    file_metadata?: SignageMediaMetadata,
                    thumbnail?: string,
                    fallback_thumbnail?: () => Promise<string>,
                    permissions?: UploadPermissions,
                ) =>
                    this._addMedia(
                        f,
                        m,
                        file_metadata,
                        thumbnail || file_thumbnail,
                        permissions ? { permissions } : undefined,
                        fallback_thumbnail,
                    ),
                onEdit: async (id: string, data: MediaEditChanges) => {
                    const updated_media = await this._editMedia(id, data);
                    Object.assign(media, updated_media);
                },
                preview: (item) => this.previewMedia(item),
            },
        });
        await dialogClosed(ref);
    }

    private async _editMedia(id: string, data: MediaEditChanges) {
        if (
            !this._context.requirePermission(
                this._context.can_update(),
                'SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA',
            )
        )
            return;
        // Webpage and plugin items carry their thumbnail as an image the user
        // picked in the modal. It has to be uploaded before the item can point
        // at it.
        const { thumbnail_image, ...update } = data;
        if (thumbnail_image) {
            const thumbnail_id = await this._uploadThumbnailImage(
                thumbnail_image,
                update.name,
            );
            if (thumbnail_id) update.thumbnail_id = thumbnail_id;
        }
        const updated_media = decodeEntityNames(
            await updateSignageMedia(id, update),
        );
        this._media_list.update((items) =>
            items.map((item) => (item.id === id ? updated_media : item)),
        );
        this._media_tags.reload();
        return updated_media;
    }

    /**
     * Add a media item, optionally to a playlist. Webpages and plugins without
     * a supplied thumbnail get a server screenshot. When the screenshot fails,
     * `fallback_thumbnail` can supply an image instead, such as the one a
     * plugin renders of itself.
     */
    private async _addMedia(
        file: File | undefined,
        media_item: SignageMedia,
        file_metadata?: SignageMediaMetadata,
        url_thumbnail?: string,
        upload_options?: SignageUploadOptions,
        fallback_thumbnail?: () => Promise<string>,
    ) {
        if (file) {
            return this.addMedia(
                file,
                media_item,
                file_metadata,
                upload_options,
            );
        }
        let thumbnail_id = '';
        if (url_thumbnail) {
            thumbnail_id = await this._uploadThumbnailImage(
                url_thumbnail,
                media_item.name,
            );
        } else if (
            media_item.media_type === 'webpage' ||
            media_item.media_type === 'plugin'
        ) {
            thumbnail_id = await this._screenshotThumbnail(
                media_item.media_uri,
                media_item.name,
            );
            const fallback =
                !thumbnail_id && fallback_thumbnail
                    ? await fallback_thumbnail().catch(() => '')
                    : '';
            if (fallback) {
                thumbnail_id = await this._uploadThumbnailImage(
                    fallback,
                    media_item.name,
                );
            }
        }
        return this._createMedia({
            ...media_item,
            thumbnail_id: thumbnail_id || undefined,
        });
    }

    /**
     * Upload a file and create its media record. A file passed with
     * `file_metadata` must come from `_prepareUploadMedia`, so it is not read
     * and validated a second time.
     */
    public async addMedia(
        file: File,
        media_item: SignageMedia = new SignageMedia({}),
        file_metadata?: SignageMediaMetadata,
        upload_options?: SignageUploadOptions,
    ) {
        if (
            !this._context.requirePermission(
                this._context.can_create(),
                'SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA',
            )
        ) {
            throw new Error(i18n('SIGNAGE_MANAGER.SVC_PERMISSION_DENIED'));
        }
        const prepared: PreparedUploadMedia | null = file_metadata
            ? {
                  file,
                  media_type: getVideoContainer(file) ? 'video' : 'image',
                  metadata: file_metadata,
              }
            : await this._prepareUploadMedia(file);
        if (!prepared) {
            throw new Error(i18n('SIGNAGE_MANAGER.SVC_SELECT_MEDIA_FILE'));
        }
        const { file: upload_file, media_type, metadata } = prepared;
        const { is_landscape } = metadata;
        let stored = upload_options?.stored;
        if (!stored) {
            stored = await this._storeMediaUpload(upload_file, upload_options);
            upload_options?.on_stored?.(stored);
        }
        const { media_id, thumbnail_id } = stored;
        return this._createMedia({
            ...media_item,
            name: media_item.name || upload_file.name,
            media_id,
            media_uri: uploadUrl(media_id),
            media_type,
            orientation: is_landscape ? 'landscape' : 'portrait',
            thumbnail_id,
        });
    }

    /** Upload a media file and its generated thumbnail. */
    private async _storeMediaUpload(
        file: File,
        upload_options?: SignageUploadOptions,
    ): Promise<StoredMediaUpload> {
        // The thumbnail renders while the file uploads
        const thumbnail_request = this._generateThumbnail(
            file,
            1280,
            720,
        ).catch(() => null);
        // Resolves only once the upload is committed. Watching progress reach
        // 100 is not enough: the last chunk lands before finalisation and the
        // commit run, so a failure there would otherwise look like success.
        const media_id = await this._uploads.uploadFileToCompletion(
            file,
            false,
            upload_options?.permissions ?? 'none',
            upload_options?.on_progress,
        );
        const thumbnail_image = await thumbnail_request;
        let thumbnail_id = '';
        if (thumbnail_image) {
            const name_parts = file.name.split('.');
            name_parts.pop();
            thumbnail_id = await this._uploadThumbnailImage(
                thumbnail_image,
                name_parts.join('.'),
            );
        }
        return { media_id, thumbnail_id };
    }

    /**
     * Normalise, validate and measure a picked file, once per upload. Null,
     * with an error shown, when the file cannot be used.
     */
    private async _prepareUploadMedia(
        file: File | null,
    ): Promise<PreparedUploadMedia | null> {
        if (!file) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_SELECT_MEDIA_FILE'));
            return null;
        }
        const normalized_file = await this._normalizeImageUpload(file);
        const validation = await validateSignageMediaFile(
            normalized_file,
            this._mediaValidationOptions(),
        );
        if (!validation.valid) {
            notifyError(validation.error);
            return null;
        }
        let metadata: SignageMediaMetadata;
        try {
            metadata = await this._getMediaMetadata(normalized_file);
        } catch {
            notifyError(
                i18n('SIGNAGE_MANAGER.SVC_ERR_READ_MEDIA', {
                    name: normalized_file.name,
                }),
            );
            return null;
        }
        return {
            file: normalized_file,
            media_type: validation.media_type,
            metadata,
        };
    }

    private async _normalizeImageUpload(file: File) {
        if (isSupportedImageFile(file) || getVideoContainer(file)) {
            return file;
        }
        if (!isImageSourceFile(file)) {
            return file;
        }
        try {
            const converted_file = await convertImageToWebp(file);
            notifyInfo(
                i18n('SIGNAGE_MANAGER.SVC_CONVERTED_MEDIA', {
                    from: file.name,
                    to: converted_file.name,
                }),
            );
            return converted_file;
        } catch {
            return file;
        }
    }

    public async removeMedia(item: SignageMedia) {
        if (!item?.id) return;
        if (
            !this._context.requirePermission(
                this._context.can_delete(),
                'SIGNAGE_MANAGER.SVC_NO_DELETE_MEDIA',
            )
        )
            return;
        const playlists = await this._playlistsUsingMedia([item.id]);
        const result = await openConfirmModal(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_MEDIA_TITLE'),
                content: this._withMediaUsage(
                    i18n('SIGNAGE_MANAGER.SVC_DELETE_NAMED_PLAIN', {
                        name: item.name,
                    }),
                    playlists,
                ),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        result.loading(i18n('SIGNAGE_MANAGER.SVC_MEDIA_REMOVING'));
        try {
            await removeSignageMedia(
                item.id,
                this._context.groupQueryParams({}),
            );
        } catch {
            result.close();
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ERR_REMOVE_MEDIA'));
            return;
        }
        this._removeMediaFromList([item.id]);
        await this._removeDeletedMediaFromPlaylists(
            [item.id],
            playlists.map(({ id }) => id),
        );
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_MEDIA_REMOVED'));
        result.close();
    }

    /**
     * Take deleted media out of the playlists that held it. The media is
     * already gone, so a failure here only warns.
     */
    private async _removeDeletedMediaFromPlaylists(
        media_ids: string[],
        playlist_ids: string[],
    ) {
        try {
            await this._playlist_service.removeMediaFromPlaylists(
                media_ids,
                playlist_ids,
            );
        } catch {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_MEDIA_PLAYLISTS_NOT_UPDATED'));
        }
    }

    public async removeMediaItems(items: SignageMedia[]) {
        const media_items = items.filter((item) => !!item?.id);
        if (!media_items.length) return false;
        if (
            !this._context.requirePermission(
                this._context.can_delete(),
                'SIGNAGE_MANAGER.SVC_NO_DELETE_MEDIA',
            )
        )
            return false;
        const media_ids = media_items.map((item) => item.id);
        const playlists = await this._playlistsUsingMedia(media_ids);
        const result = await openConfirmModal(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_MEDIA_TITLE'),
                content: this._withMediaUsage(
                    i18n(
                        'SIGNAGE_MANAGER.SVC_DELETE_SELECTED_MEDIA',
                        { count: media_items.length },
                        media_items.length,
                    ),
                    playlists,
                    media_items.length,
                ),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return false;
        result.loading(i18n('SIGNAGE_MANAGER.SVC_MEDIA_REMOVING'));
        const results = await Promise.allSettled(
            media_ids.map((id) =>
                removeSignageMedia(id, this._context.groupQueryParams({})),
            ),
        );
        const removed_ids = media_ids.filter(
            (_, index) => results[index].status === 'fulfilled',
        );
        if (removed_ids.length) {
            this._removeMediaFromList(removed_ids);
            await this._removeDeletedMediaFromPlaylists(
                removed_ids,
                playlists.map(({ id }) => id),
            );
        }
        result.close();
        if (removed_ids.length < media_ids.length) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ERR_REMOVE_MEDIA'));
            return false;
        }
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_MEDIA_REMOVED'));
        return true;
    }

    public async shareMediaItems(items: SignageMedia[]) {
        const media_ids = items.map((item) => item.id).filter(Boolean);
        if (!media_ids.length) return false;
        return this._context.shareItems('media', media_ids);
    }

    public async addMediaTags(items: SignageMedia[]) {
        const media_items = items.filter((item) => !!item?.id);
        if (!media_items.length) return false;
        if (
            !this._context.requirePermission(
                this._context.can_update(),
                'SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA',
            )
        )
            return false;
        const { MediaTagsModalComponent } =
            await import('../shared/media-tags-modal.component');
        const ref = this._dialog.open(MediaTagsModalComponent, {
            data: { tags: this.media_tags() },
            width: 'min(28rem, calc(100vw - 2rem))',
        });
        const tags = await dialogClosed<string[]>(ref);
        if (!tags?.length) return false;
        const changes = media_items.map((item) => ({
            id: item.id,
            tags: [...new Set([...(item.tags || []), ...tags])],
        }));
        const results = await Promise.allSettled(
            changes.map(({ id, tags }) => updateSignageMedia(id, { tags })),
        );
        // Show the new tags on the items that saved, in place
        const saved = new Map(
            changes
                .filter((_, index) => results[index].status === 'fulfilled')
                .map(({ id, tags }) => [id, tags]),
        );
        if (saved.size) {
            this._media_list.update((items) =>
                items.map((item) =>
                    saved.has(item.id)
                        ? new SignageMedia({
                              ...item,
                              tags: saved.get(item.id),
                          })
                        : item,
                ),
            );
            this._media_tags.reload();
        }
        const failed = media_items.length - saved.size;
        if (failed) {
            notifyError(
                i18n(
                    'SIGNAGE_MANAGER.SVC_ERR_MEDIA_TAGS',
                    { count: failed },
                    failed,
                ),
            );
            return false;
        }
        notifySuccess(i18n('SIGNAGE_MANAGER.MEDIA_SAVE_SUCCESS'));
        return true;
    }

    public async renameMediaTag(tag: string, count: number) {
        if (!tag) return false;
        if (
            !this._context.requirePermission(
                this._context.can_update_media_tags(),
                'SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA',
            )
        )
            return false;
        const { MediaTagModalComponent } =
            await import('../shared/media-tag-modal.component');
        const ref = this._dialog.open(MediaTagModalComponent, {
            data: {
                action: 'rename',
                tag,
                count,
                can_delete_media: false,
            },
            width: 'min(28rem, calc(100vw - 2rem))',
        });
        const result = await dialogClosed<MediaTagModalResult>(ref);
        if (result?.action !== 'rename') return false;
        try {
            const group_id = this._context.api_group_id();
            await renameSignageMediaTag({
                current_tag: tag,
                new_tag: result.new_tag,
                ...(group_id ? { group_id } : {}),
            });
        } catch (error) {
            notifyError(
                i18n('SIGNAGE_MANAGER.SVC_MEDIA_TAG_ERROR', {
                    error: error instanceof Error ? error.message : `${error}`,
                }),
            );
            return false;
        }
        this._context.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_MEDIA_TAG_RENAMED'));
        return true;
    }

    public async removeMediaTag(tag: string, count: number) {
        if (!tag) return false;
        if (
            !this._context.requirePermission(
                this._context.can_update_media_tags(),
                'SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA',
            )
        )
            return false;
        const { MediaTagModalComponent } =
            await import('../shared/media-tag-modal.component');
        const ref = this._dialog.open(MediaTagModalComponent, {
            data: {
                action: 'remove',
                tag,
                count,
                can_delete_media: this._context.can_delete_tagged_media(),
            },
            width: 'min(28rem, calc(100vw - 2rem))',
        });
        const result = await dialogClosed<MediaTagModalResult>(ref);
        if (result?.action !== 'remove') return false;
        if (
            result.remove_media &&
            !this._context.requirePermission(
                this._context.can_delete_tagged_media(),
                'SIGNAGE_MANAGER.SVC_NO_DELETE_MEDIA',
            )
        )
            return false;
        try {
            const group_id = this._context.api_group_id();
            await removeSignageMediaTag({
                tag,
                ...(result.remove_media ? { remove_media: true } : {}),
                ...(group_id ? { group_id } : {}),
            });
        } catch (error) {
            notifyError(
                i18n('SIGNAGE_MANAGER.SVC_MEDIA_TAG_ERROR', {
                    error: error instanceof Error ? error.message : `${error}`,
                }),
            );
            return false;
        }
        this._context.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_MEDIA_TAG_REMOVED'));
        return true;
    }

    public async openPlaylistSelectModal(media_id: string) {
        const { PlaylistSelectModalComponent } =
            await import('../shared/playlist-select-modal.component');
        const ref = this._dialog.open(PlaylistSelectModalComponent, {
            data: { media_id },
            panelClass: 'mobile-fullscreen',
        });
        const playlist_id = await dialogClosed(ref);
        if (!playlist_id) return;
        await this._playlist_service.addMediaToPlaylist(
            playlist_id,
            media_id,
            this._media_list.items().find(({ id }) => id === media_id),
        );
    }

    public async openBulkPlaylistSelectModal(media_ids: string[]) {
        const { PlaylistSelectModalComponent } =
            await import('../shared/playlist-select-modal.component');
        const ref = this._dialog.open(PlaylistSelectModalComponent, {
            data: { media_ids },
            panelClass: 'mobile-fullscreen',
        });
        const playlist_id = await dialogClosed(ref);
        if (!playlist_id) return false;
        return this._playlist_service.addMediaItemsToPlaylist(
            playlist_id,
            media_ids,
            this._media_list.items().filter(({ id }) => media_ids.includes(id)),
        );
    }

    private _uploadThumbnailImage(data_url: string, name: string) {
        const file_name = `thumb+${(name || 'media').replace(/[^a-zA-Z0-9_-]/g, '_')}.jpg`;
        return this._uploads
            .uploadFileToCompletion(dataURLtoFile(data_url, file_name))
            .catch(() => {
                notifyWarn(i18n('SIGNAGE_MANAGER.SVC_THUMBNAIL_UPLOAD_FAILED'));
                return '';
            });
    }

    /** Read an upload, with the auth the uploads route needs */
    private async _fetchUpload(upload_id: string) {
        const source = await loadAuthenticatedImage(
            uploadUrl(upload_id),
            '/api/engine/v2/uploads',
        );
        return (await fetch(source)).blob();
    }

    /**
     * Make a thumbnail for a webpage or plugin from a server side screenshot
     * of its URL. The full size screenshot is only the source of the
     * thumbnail, so it is deleted again after use. Returns the thumbnail
     * upload ID, or an empty string when the page cannot be captured. The
     * server only renders https pages.
     */
    private async _screenshotThumbnail(url: string, name: string) {
        const page = screenshotPageURL(url);
        if (!page) return '';
        let screenshot_id = '';
        try {
            const upload = await post(`${apiEndpoint()}/uploads/screenshot`, {
                url: page,
                width: 1920,
                height: 1080,
                format: 'jpeg',
            });
            screenshot_id = `${upload?.id || ''}`;
            if (!screenshot_id) return '';
            const blob = await this._fetchUpload(screenshot_id);
            const thumbnail = await this._generateThumbnail(
                new File([blob], 'screenshot.jpg', {
                    type: blob.type || 'image/jpeg',
                }),
                1280,
                720,
            );
            if (!thumbnail) return '';
            return await this._uploadThumbnailImage(thumbnail, name);
        } catch {
            return '';
        } finally {
            if (screenshot_id) {
                del(
                    `${apiEndpoint()}/uploads/${encodeURIComponent(screenshot_id)}`,
                ).catch(() => undefined);
            }
        }
    }

    /**
     * Scale an image the user picked down to a thumbnail data URL. Webpages
     * and plugins have no file to capture a frame from, so the user can
     * supply an image instead of the automatic screenshot.
     */
    private async _generateThumbnailImage(file: File) {
        if (!file || !isImageSourceFile(file)) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_THUMBNAIL_NOT_IMAGE'));
            return '';
        }
        const image = await this._normalizeImageUpload(file);
        const thumbnail = await this._generateThumbnail(image, 1280, 720).catch(
            () => '',
        );
        if (!thumbnail) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_THUMBNAIL_FAILED'));
        }
        return thumbnail;
    }

    private _mediaValidationOptions() {
        return {
            allow_extended_video_codecs: !!this._settings.get(
                'app.media_allow_extended_video_codecs',
            ),
        };
    }

    constructor() {
        effect(() => persistMediaViewMode(this.media_view_mode()));
    }
}
