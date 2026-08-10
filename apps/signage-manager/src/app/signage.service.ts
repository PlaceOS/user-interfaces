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
    userSignal,
} from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import {
    addGroup,
    addGroupUser,
    addGroupZone,
    addSignageMedia,
    addSignagePlaylist,
    apiEndpoint,
    currentGroups,
    listSignageMediaTags,
    listSignagePlaylistApprovers,
    listSignagePlaylistMedia,
    mediaThumbnail,
    PlaceCurrentGroup,
    PlaceGroup,
    PlaceGroupUser,
    PlaceGroupZone,
    PlaceUser,
    PlaceZone,
    post,
    queryGroups,
    queryGroupUsers,
    queryGroupZones,
    type QueryResponse,
    querySignageMedia,
    querySignagePlaylists,
    querySignagePlugins,
    querySystems,
    queryUsers,
    queryZones,
    removeGroup,
    removeGroupUser,
    removeGroupZone,
    removeSignageMedia,
    removeSignagePlaylist,
    requestApprovalSignagePlaylist,
    scheduleSignagePlaylistMedia,
    shareSignageMedia,
    shareSignagePlaylists,
    showSystem,
    showZone,
    SignageMedia,
    SignagePlaylist,
    type SignagePlaylistApprover,
    SignagePlaylistItemSchedule,
    SignagePlaylistMedia,
    SignagePlugin,
    updateGroup,
    updateGroupUser,
    updateGroupZone,
    updateSignageMedia,
    updateSignagePlaylist,
    updateSignagePlaylistMedia,
    updateSignagePlaylistMediaSchedule,
    updateSystem,
    updateZone,
} from '@placeos/ts-client';
import {
    BulkMediaUploadItem,
    BulkMediaUploadModalComponent,
    BulkMediaUploadModalData,
} from './shared/bulk-media-upload-modal.component';
import { decodeEntityNames } from './shared/decode-entity-names.util';
import { DisplaySelectModalComponent } from './shared/display-select-modal.component';
import { GroupSelectModalComponent } from './shared/group-select-modal.component';
import { MediaEditModalComponent } from './shared/media-edit-modal.component';
import { MediaPreviewModalComponent } from './shared/media-preview-modal.component';
import { MediaTagsModalComponent } from './shared/media-tags-modal.component';
import { PlaylistApproveModalComponent } from './shared/playlist-approve-modal.component';
import { PlaylistEditModalComponent } from './shared/playlist-edit-modal.component';
import { PlaylistItemScheduleModalComponent } from './shared/playlist-item-schedule-modal.component';
import {
    PlaylistRequestApprovalModalComponent,
    PlaylistRequestApprovalModalResult,
} from './shared/playlist-request-approval-modal.component';
import { PlaylistSelectModalComponent } from './shared/playlist-select-modal.component';
import { ZoneSelectModalComponent } from './shared/zone-select-modal.component';
import {
    getVideoContainer,
    isImageSourceFile,
    isSupportedImageFile,
    SIGNAGE_MEDIA_PICKER_ACCEPT,
    SignageMediaMetadata,
    validateSignageMediaDimensions,
    validateSignageMediaFile,
} from './signage-media-upload.util';
import {
    playlistItemScheduleMap,
    playlistMediaIds,
    playlistMediaItems,
} from './signage-playlist.util';

function dataURLtoFile(data_url: string, filename: string) {
    const [prefix, data] = data_url.split(',');
    const mime_type = prefix.split(':')[1].split(';')[0];
    const byte_string = atob(data);
    const array_buffer = new ArrayBuffer(byte_string.length);
    const uint8_array = new Uint8Array(array_buffer);
    for (let i = 0; i < byte_string.length; i++) {
        uint8_array[i] = byte_string.charCodeAt(i);
    }
    return new File([uint8_array], filename, { type: mime_type });
}

/** Backoff between attempts at creating a media record, in milliseconds */
const MEDIA_RETRY_DELAYS = [500, 1500, 4500];

/** Point to seek to before capturing a video thumbnail, in seconds */
const VIDEO_THUMBNAIL_OFFSET = 0.1;
/** How long to wait for a paintable video frame, in milliseconds */
const VIDEO_THUMBNAIL_TIMEOUT = 15 * 1000;

/**
 * A 401 is deliberately absent: the API client already invalidates the token,
 * re-authorises and replays the request itself, so retrying here as well would
 * multiply into a long run of auth refreshes.
 */
function isRetryableMediaError(error: any) {
    const status = error?.status;
    // No status means the request never reached the server
    if (typeof status !== 'number') return true;
    return status === 408 || status === 429 || status >= 500;
}

async function retryMediaRequest<T>(request: () => Promise<T>): Promise<T> {
    let last_error: unknown;
    for (let attempt = 0; ; attempt++) {
        try {
            return await request();
        } catch (error) {
            last_error = error;
            if (
                !isRetryableMediaError(error) ||
                attempt >= MEDIA_RETRY_DELAYS.length
            ) {
                break;
            }
            await new Promise((resolve) =>
                setTimeout(resolve, MEDIA_RETRY_DELAYS[attempt]),
            );
        }
    }
    throw last_error;
}

interface PreparedUploadMedia {
    file: File;
    media_type: 'image' | 'video';
    metadata: SignageMediaMetadata;
}

interface SignageUploadOptions {
    permissions: UploadPermissions;
    on_progress?: (progress: number) => void;
}

interface PlaylistMetaState {
    media_ids: string[];
    item_ids?: string[];
    updated_at: number;
    approved?: boolean;
    approval_requested?: boolean;
}

const PLAYLIST_META_SESSION_KEY = 'PlaceOS.SIGNAGE:playlist-meta-cache:v1';
const SIGNAGE_GROUP_STORAGE_KEY = 'PlaceOS.SIGNAGE:selected-group:v1';
const SIGNAGE_VIEW_MODE_STORAGE_KEY = 'PlaceOS.SIGNAGE:media-view-mode:v1';
type MediaViewMode = 'grid' | 'list' | 'folder';
// Fields the backend matches a search term against. Names that don't exist on
// a given resource are ignored, so the one list works for every search.
const SEARCH_FIELDS = [
    'id',
    'name',
    'display_name',
    'description',
    'tags',
].join(',');
const SIGNAGE_GROUP_FIELDS = [
    'id',
    'name',
    'description',
    'subsystems',
    'authority_id',
    'parent_id',
    'children_count',
].join(',');

const enum SignageGroupPermission {
    Read = 1 << 0,
    Create = 1 << 1,
    Update = 1 << 2,
    Delete = 1 << 3,
    Operate = 1 << 4,
    Approve = 1 << 5,
    Manage = 1 << 6,
    Share = 1 << 7,
}

function loadPlaylistMetaSessionCache(): Record<string, PlaylistMetaState> {
    if (typeof sessionStorage === 'undefined') return {};
    try {
        const stored_value = sessionStorage.getItem(PLAYLIST_META_SESSION_KEY);
        return stored_value ? JSON.parse(stored_value) : {};
    } catch {
        return {};
    }
}

function persistPlaylistMetaSessionCache(
    cache: Record<string, PlaylistMetaState>,
) {
    if (typeof sessionStorage === 'undefined') return;
    try {
        sessionStorage.setItem(
            PLAYLIST_META_SESSION_KEY,
            JSON.stringify(cache),
        );
    } catch {
        // Session cache persistence is opportunistic only.
    }
}

function loadSelectedGroupId() {
    if (typeof localStorage === 'undefined') return '';
    try {
        return localStorage.getItem(SIGNAGE_GROUP_STORAGE_KEY) || '';
    } catch {
        // Local storage can be unavailable in private browsing or restricted embeds.
        return '';
    }
}

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

function persistSelectedGroupId(group_id: string) {
    if (typeof localStorage === 'undefined') return;
    try {
        if (group_id) {
            localStorage.setItem(SIGNAGE_GROUP_STORAGE_KEY, group_id);
        } else {
            localStorage.removeItem(SIGNAGE_GROUP_STORAGE_KEY);
        }
    } catch {
        // Ignore persistence failures; the selector can still default safely.
    }
}

/** Group and its ancestors, root first. Stops on a repeated group so a broken
 * parent chain can't loop forever. */
export function groupHierarchy(
    selected: PlaceGroup | undefined,
    all_groups: PlaceGroup[],
) {
    if (!selected) return [];
    const groups = new Map(all_groups.map((item) => [item.id, item]));
    const hierarchy: PlaceGroup[] = [];
    const seen = new Set<string>();
    let group = selected;
    while (group?.id && !seen.has(group.id)) {
        hierarchy.unshift(group);
        seen.add(group.id);
        group = group.parent_id ? groups.get(group.parent_id) : undefined;
    }
    return hierarchy;
}

export function dialogClosed<T = unknown>(ref: {
    afterClosed: () => {
        subscribe: (handler: (value: T) => void) => { unsubscribe: () => void };
    };
}) {
    return new Promise<T | undefined>((resolve) => {
        const subscription = ref.afterClosed().subscribe((value) => {
            subscription.unsubscribe();
            resolve(value);
        });
    });
}

@Injectable({
    providedIn: 'root',
})
export class SignageService {
    private readonly _org = inject(OrganisationService);
    private readonly _settings = inject(SettingsService);
    private readonly _uploads = inject(UploadsService);
    private readonly _dialog = inject(MatDialog);
    private readonly _change = signal(Date.now());
    private readonly _groups_change = signal(Date.now());
    private readonly _display_overrides = signal<Record<string, any>>({});
    private readonly _zone_overrides = signal<Record<string, any>>({});
    public readonly media_upload_accept = SIGNAGE_MEDIA_PICKER_ACCEPT;

    /** Whether the navigation offers a group selector. Hiding it leaves the
     * section header breadcrumbs as the way to change group. */
    public readonly show_group_selector = this._settings.signal(
        'show_group_selector',
        true,
    );
    /** Whether the media page offers its group tab bar. */
    public readonly show_media_group_tabs = this._settings.signal(
        'show_media_group_tabs',
        true,
    );

    public readonly search_term = signal('');
    public readonly media_view_mode =
        signal<MediaViewMode>(loadMediaViewMode());
    public readonly managed_group_id = signal('');
    // Switching managed group refetches its users and zones; debounce so quick
    // re-selection doesn't fire a pair of queries per change.
    private readonly _managed_group_id_debounced = debounced(
        this.managed_group_id,
        300,
    );
    public readonly managed_group_tab = signal<'users' | 'zones'>('users');
    private readonly _current_user = userSignal();
    private readonly _active_user = computed(() => {
        const user = this._current_user();
        return !!user?.email && user.email !== '<empty>@dev.place.tech'
            ? user
            : null;
    });
    // Derived from the resource status (not a manually-set flag) so it stays in
    // sync with signage_groups() — a separate flag flipped in the loader's
    // finally block races ahead of the resource committing its value, which let
    // the access guard read an empty group list and redirect permitted users.
    public readonly signage_groups_loaded = computed(() => {
        if (!this._active_user()?.email) return false;
        const status = this._signage_groups.status();
        return (
            status === 'resolved' || status === 'local' || status === 'error'
        );
    });
    public readonly selected_group_id = signal(loadSelectedGroupId());
    public readonly signage_group_tree_expanded = signal<
        Record<string, boolean>
    >({});
    private readonly _signage_groups = resource({
        params: () => ({
            user_email: this._active_user()?.email || '',
            groups_change: this._groups_change(),
            sys_admin: this.is_sys_admin(),
        }),
        loader: async ({ params }) => {
            if (!params.user_email) return [] as PlaceCurrentGroup[];
            try {
                const groups = params.sys_admin
                    ? (await this._queryManageableGroups()).map(
                          (group) =>
                              ({
                                  group,
                                  permissions: SignageGroupPermission.Manage,
                              }) as PlaceCurrentGroup,
                      )
                    : await this._currentSignageGroups(params.groups_change);
                this.signage_groups_failed.set(false);
                return groups
                    .map(decodeEntityNames)
                    .sort((a, b) => a.group.name.localeCompare(b.group.name));
            } catch {
                this.signage_groups_failed.set(true);
                return [] as PlaceCurrentGroup[];
            }
        },
    });
    /** Whether the last signage group request failed, so an empty group list
     * can't be read as "this user has no access". */
    public readonly signage_groups_failed = signal(false);
    public readonly signage_groups = computed(
        () => this._signage_groups.value() || [],
    );
    public readonly selected_group = computed(() => {
        const group_id = this.selected_group_id();
        return this.signage_groups().find((item) => item.group.id === group_id);
    });
    /** Selected group and its ancestors, root first. Empty when no group is
     * selected. */
    public readonly selected_group_hierarchy = computed(() =>
        groupHierarchy(
            this.selected_group()?.group,
            this.signage_groups().map((item) => item.group),
        ),
    );
    public readonly is_sys_admin = computed(() => {
        const user = this._current_user() as any as {
            groups?: string[];
            sys_admin?: boolean;
        };
        return (
            !!user.sys_admin || (user.groups || []).includes('placeos_admin')
        );
    });
    public readonly is_support = computed(() => {
        const user = this._current_user() as any as {
            groups?: string[];
            support?: boolean;
        };
        return (
            !!user.support || (user.groups || []).includes('placeos_support')
        );
    });
    public readonly can_manage_all_groups = computed(
        () => this.is_sys_admin() || this.is_support(),
    );
    private readonly _manageable_signage_groups = resource({
        params: () => ({
            user_email: this._active_user()?.email || '',
            groups_change: this._groups_change(),
            can_manage_all: this.can_manage_all_groups(),
        }),
        loader: async ({ params }) => {
            if (!params.user_email) return [] as PlaceGroup[];
            try {
                const groups = params.can_manage_all
                    ? await this._queryManageableGroups()
                    : await this._currentManageableGroups(params.groups_change);
                return this._sortGroups(groups);
            } catch {
                return [] as PlaceGroup[];
            }
        },
    });
    public readonly manageable_signage_groups = computed(
        () => this._manageable_signage_groups.value() || [],
    );
    private readonly _root_manageable_signage_groups = resource({
        params: () => ({
            user_email: this._active_user()?.email || '',
            groups_change: this._groups_change(),
            can_manage_all: this.can_manage_all_groups(),
        }),
        loader: async ({ params }) => {
            if (!params.user_email) return [] as PlaceGroup[];
            try {
                if (params.can_manage_all) {
                    return this._queryManageableGroups({
                        parent_id: 'root',
                        include_children_count: true,
                    });
                }
                const groups = await this._currentManageableGroups(
                    params.groups_change,
                );
                const group_ids = new Set(groups.map((group) => group.id));
                return this._sortGroups(
                    groups.filter(
                        (group) =>
                            !group.parent_id || !group_ids.has(group.parent_id),
                    ),
                );
            } catch {
                return [] as PlaceGroup[];
            }
        },
    });
    public readonly root_manageable_signage_groups = computed(
        () => this._root_manageable_signage_groups.value() || [],
    );
    public readonly managed_group = computed(() => {
        const group_id = this.managed_group_id();
        return this.manageable_signage_groups().find(
            (group) => group.id === group_id,
        );
    });

    public async groupChildren(parent_id: string) {
        if (!this.can_manage_all_groups()) {
            return this._sortGroups(
                this.manageable_signage_groups().filter(
                    (group) => group.parent_id === parent_id,
                ),
            );
        }
        return this._queryManageableGroups({
            parent_id,
            include_children_count: true,
        });
    }

    private async _queryManageableGroups(params: Record<string, any> = {}) {
        const { data } = await queryGroups({
            limit: 200,
            fields: SIGNAGE_GROUP_FIELDS,
            subsystem: 'signage',
            ...params,
        } as any);
        return this._sortGroups(
            (data || []).filter((group) =>
                group.subsystems?.includes('signage'),
            ),
        );
    }

    // Several resources need the current user's signage groups on page load.
    // Share a single in-flight request per `groups_change` so we hit the
    // endpoint once instead of three times.
    private _current_groups_request: {
        key: number;
        promise: Promise<PlaceCurrentGroup[]>;
    } | null = null;

    private _currentSignageGroups(groups_change: number) {
        if (this._current_groups_request?.key === groups_change) {
            return this._current_groups_request.promise;
        }
        const promise = currentGroups({ subsystem: 'signage' }).catch((err) => {
            // Drop the cache on failure so a later trigger can retry.
            if (this._current_groups_request?.key === groups_change) {
                this._current_groups_request = null;
            }
            throw err;
        });
        this._current_groups_request = { key: groups_change, promise };
        return promise;
    }

    private async _currentManageableGroups(groups_change: number) {
        const groups = await this._currentSignageGroups(groups_change);
        return groups
            .filter(
                (item) => !!(item.permissions & SignageGroupPermission.Manage),
            )
            .map((item) => decodeEntityNames(item.group));
    }

    private _sortGroups<T extends PlaceGroup>(groups: T[]) {
        return groups
            .map(decodeEntityNames)
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    private readonly _managed_group_users = resource({
        params: () => ({
            group_id: this._managed_group_id_debounced.value(),
            groups_change: this._groups_change(),
        }),
        loader: async ({ params }) => {
            if (!params.group_id) return [] as PlaceGroupUser[];
            try {
                const { data } = await queryGroupUsers({
                    group_id: params.group_id,
                    limit: 1000,
                });
                return data
                    .map(decodeEntityNames)
                    .sort((a, b) =>
                        (a.user?.name || a.user_id).localeCompare(
                            b.user?.name || b.user_id,
                        ),
                    );
            } catch {
                return [] as PlaceGroupUser[];
            }
        },
    });
    public readonly managed_group_users = computed(
        () => this._managed_group_users.value() || [],
    );
    private readonly _managed_group_zones = resource({
        params: () => ({
            group_id: this._managed_group_id_debounced.value(),
            groups_change: this._groups_change(),
        }),
        loader: async ({ params }) => {
            if (!params.group_id) return [] as PlaceGroupZone[];
            try {
                const { data } = await queryGroupZones({
                    group_id: params.group_id,
                    limit: 200,
                });
                return data
                    .map(decodeEntityNames)
                    .sort((a, b) =>
                        (a.zone?.name || a.zone_id).localeCompare(
                            b.zone?.name || b.zone_id,
                        ),
                    );
            } catch {
                return [] as PlaceGroupZone[];
            }
        },
    });
    public readonly managed_group_zones = computed(
        () => this._managed_group_zones.value() || [],
    );
    private readonly _api_group_id = computed(
        () => this.selected_group()?.group.id || '',
    );
    // Group selection fans out to six heavy list queries (media, playlists,
    // displays, zones...). Debounce so clicking through the group tree doesn't
    // fire a full set of refetches per click.
    private readonly _api_group_id_debounced = debounced(
        this._api_group_id,
        300,
    );
    public readonly can_read = computed(() =>
        this._hasGroupPermission(SignageGroupPermission.Read),
    );
    public readonly can_create = computed(() =>
        this._hasGroupPermission(SignageGroupPermission.Create),
    );
    public readonly can_update = computed(() =>
        this._hasGroupPermission(SignageGroupPermission.Update),
    );
    public readonly can_delete = computed(() =>
        this._hasGroupPermission(SignageGroupPermission.Delete),
    );
    public readonly can_approve = computed(() =>
        this._hasGroupPermission(SignageGroupPermission.Approve),
    );
    public readonly can_share = computed(() =>
        this._hasGroupPermission(SignageGroupPermission.Share),
    );
    public readonly is_admin = computed(() =>
        this._hasGroupPermission(SignageGroupPermission.Manage),
    );

    private readonly _can_query_group_data = computed(() => {
        const group_id = this._api_group_id();
        return this.is_sys_admin() || !!group_id;
    });
    // How many items to request per network page.
    private static readonly PAGE_SIZE = 200;

    // --- Media ---
    //
    // TEMPORARY WORKAROUND: the signage media endpoint paginates unreliably,
    // so the whole library is pulled up front instead of a page at a time as
    // the user scrolls.
    //
    // TO REVERT once the backend is fixed: call _fetchMediaPage instead of
    // _fetchAllMediaPages in the reload effect below, then delete
    // _fetchAllMediaPages, _media_loading_all and MAX_MEDIA_PAGES.
    // loadMoreMedia() already drives incremental loading and needs no change.
    private readonly _media_items = signal<SignageMedia[]>([]);
    private readonly _media_loading = signal(false);
    private readonly _media_has_more = signal(false);
    private _media_next: (() => QueryResponse<SignageMedia> | null) | null =
        null;
    // Bumped on every reset so in-flight pages from a stale query are discarded.
    private _media_token = 0;
    // Blocks scroll-driven loading while every page is being pulled up front
    private _media_loading_all = false;
    // Bounded because the fault being worked around is in the very pagination
    // this loop follows; without it a repeating cursor would never terminate.
    private static readonly MAX_MEDIA_PAGES = 50;

    public readonly media = this._media_items.asReadonly();
    public readonly media_loading = this._media_loading.asReadonly();
    public readonly media_has_more = this._media_has_more.asReadonly();

    // Reload the first page whenever the org/group/change inputs change.
    private readonly _reload_media = effect(() => {
        const initialised = this._org.initialised();
        const can_query = this._can_query_group_data();
        const group_id = this._api_group_id_debounced.value();
        this._change();
        untracked(() => {
            const token = ++this._media_token;
            this._media_items.set([]);
            this._media_next = null;
            this._media_has_more.set(false);
            if (!initialised || !can_query) return;
            this._fetchAllMediaPages(
                querySignageMedia(
                    this._orgZoneQueryParams(
                        { limit: SignageService.PAGE_SIZE },
                        group_id,
                    ),
                ),
                token,
            );
        });
    });

    /**
     * TEMPORARY: walk every page of the media library in one go. See the note
     * on the media fields above for how to revert this.
     */
    private async _fetchAllMediaPages(
        query: QueryResponse<SignageMedia>,
        token: number,
    ) {
        this._media_loading_all = true;
        try {
            await this._fetchMediaPage(query, token);
            for (let page = 1; page < SignageService.MAX_MEDIA_PAGES; page++) {
                if (token !== this._media_token) return;
                if (!this._media_has_more()) return;
                const next = this._media_next?.();
                if (!next) break;
                const count_before = this._media_items().length;
                await this._fetchMediaPage(next, token);
                // A page that adds nothing means the cursor is repeating
                if (this._media_items().length === count_before) break;
            }
            if (token === this._media_token) this._media_has_more.set(false);
        } finally {
            if (token === this._media_token) {
                this._media_loading_all = false;
                this._media_loading.set(false);
            }
        }
    }

    public loadMoreMedia() {
        // Nothing to add while every page is being pulled up front
        if (this._media_loading_all) return;
        if (this._media_loading() || !this._media_has_more()) return;
        const next = this._media_next?.();
        if (!next) {
            this._media_has_more.set(false);
            return;
        }
        this._fetchMediaPage(next, this._media_token);
    }

    private async _fetchMediaPage(
        query: QueryResponse<SignageMedia>,
        token: number,
    ) {
        this._media_loading.set(true);
        try {
            const page = await query;
            if (token !== this._media_token) return;
            const items = (page.data || []).map(decodeEntityNames);
            // Merged by id because a faulty paginator can repeat an item
            // across pages, which a plain concatenation would duplicate.
            this._media_items.update((list) => {
                const by_id = new Map(list.map((item) => [item.id, item]));
                for (const item of items) by_id.set(item.id, item);
                return [...by_id.values()].sort(
                    (a, b) => b.created_at - a.created_at,
                );
            });
            this._media_next = page.next;
            this._media_has_more.set(this._media_items().length < page.total);
        } catch {
            if (token === this._media_token) this._media_has_more.set(false);
        } finally {
            if (token === this._media_token) this._media_loading.set(false);
        }
    }

    public readonly filtered_media = computed(() => {
        const term = this.search_term().trim().toLowerCase();
        const media = this.media();
        if (!term) return media;
        return media.filter(
            (item) =>
                item.name.toLowerCase().includes(term) ||
                (item.tags || []).some((tag) =>
                    tag.toLowerCase().includes(term),
                ),
        );
    });

    // Distinct tags in use across the active group/zone's signage media. Sourced
    // from the dedicated tags endpoint so the folder list stays complete no
    // matter how many media pages have been loaded.
    private readonly _media_tags = resource({
        params: () => ({
            initialised: this._org.initialised(),
            can_query: this._can_query_group_data(),
            group_id: this._api_group_id_debounced.value(),
            change: this._change(),
        }),
        loader: async ({ params }) => {
            if (!params.initialised || !params.can_query) return [] as string[];
            try {
                const tags = await listSignageMediaTags(
                    this._orgZoneQueryParams({}, params.group_id),
                );
                return [...tags].sort((a, b) => a.localeCompare(b));
            } catch {
                return [] as string[];
            }
        },
    });
    public readonly media_tags = computed(() => this._media_tags.value() || []);

    // --- Playlists (paged incrementally as the user scrolls) ---
    // Searching is done by the backend so results are paged like the full
    // list; filtering the loaded pages would only search playlists that have
    // already been fetched.
    public readonly playlist_search_term = signal('');
    private readonly _playlist_search_debounced = debounced(
        this.playlist_search_term,
        400,
    );
    private readonly _playlist_items = signal<SignagePlaylist[]>([]);
    // Keep playlists seen outside the current search available to display,
    // zone and schedule views, which resolve their playlist ids from this list.
    private readonly _playlist_cache = signal<Record<string, SignagePlaylist>>(
        {},
    );
    private _playlist_cache_group: string | null = null;
    private _playlist_cache_change: number | null = null;
    private readonly _playlists_loading = signal(false);
    private readonly _playlists_has_more = signal(false);
    private _playlists_next:
        | (() => QueryResponse<SignagePlaylist> | null)
        | null = null;
    private _playlists_token = 0;

    public readonly playlists = computed(() =>
        Object.values(this._playlist_cache()).sort((a, b) =>
            a.name.localeCompare(b.name),
        ),
    );
    public readonly playlists_loading = this._playlists_loading.asReadonly();
    public readonly playlists_has_more = this._playlists_has_more.asReadonly();

    private readonly _reload_playlists = effect(() => {
        const initialised = this._org.initialised();
        const can_query = this._can_query_group_data();
        const group_id = this._api_group_id_debounced.value();
        const search = this._playlist_search_debounced.value().trim();
        const change = this._change();
        untracked(() => {
            const token = ++this._playlists_token;
            this._playlist_items.set([]);
            this._playlists_next = null;
            this._playlists_has_more.set(false);
            if (
                group_id !== this._playlist_cache_group ||
                change !== this._playlist_cache_change
            ) {
                this._playlist_cache_group = group_id;
                this._playlist_cache_change = change;
                this._playlist_cache.set({});
            }
            if (!initialised || !can_query) return;
            this._fetchPlaylistPage(
                querySignagePlaylists(
                    this._orgZoneQueryParams(
                        {
                            limit: SignageService.PAGE_SIZE,
                            ...this._searchParam(search),
                        },
                        group_id,
                    ),
                ),
                token,
            );
        });
    });

    public loadMorePlaylists() {
        if (this._playlists_loading() || !this._playlists_has_more()) return;
        const next = this._playlists_next?.();
        if (!next) {
            this._playlists_has_more.set(false);
            return;
        }
        this._fetchPlaylistPage(next, this._playlists_token);
    }

    private async _fetchPlaylistPage(
        query: QueryResponse<SignagePlaylist>,
        token: number,
    ) {
        this._playlists_loading.set(true);
        try {
            const page = await query;
            if (token !== this._playlists_token) return;
            const items = (page.data || []).map(decodeEntityNames);
            this._playlist_items.update((list) => {
                const by_id = new Map(list.map((item) => [item.id, item]));
                for (const item of items) by_id.set(item.id, item);
                return [...by_id.values()].sort((a, b) =>
                    a.name.localeCompare(b.name),
                );
            });
            this._playlist_cache.update((cache) => {
                const next = { ...cache };
                for (const item of items) next[item.id] = item;
                return next;
            });
            this._playlists_next = page.next;
            this._playlists_has_more.set(
                this._playlist_items().length < page.total,
            );
        } catch {
            if (token === this._playlists_token)
                this._playlists_has_more.set(false);
        } finally {
            if (token === this._playlists_token)
                this._playlists_loading.set(false);
        }
    }

    // --- Displays (paged incrementally as the user scrolls) ---
    // Searching is done by the backend so results are paged like the full
    // list; filtering the loaded pages would only ever search the displays
    // that happened to be fetched already.
    public readonly display_search_term = signal('');
    private readonly _display_search_debounced = debounced(
        this.display_search_term,
        400,
    );
    private readonly _display_items = signal<any[]>([]);
    // Every display seen since the group last changed, keyed by id. Zone,
    // schedule and playlist views resolve displays by id, so they need the
    // whole set rather than whatever the current search narrowed it to.
    private readonly _display_cache = signal<Record<string, any>>({});
    private _display_cache_group: string | null = null;
    private readonly _displays_loading = signal(false);
    private readonly _displays_has_more = signal(false);
    private _displays_next: (() => QueryResponse<any> | null) | null = null;
    private _displays_token = 0;

    public readonly displays = computed(() =>
        this._mergeItems(
            Object.values(this._display_cache()),
            this._display_overrides(),
        ),
    );
    public readonly displays_loading = this._displays_loading.asReadonly();
    public readonly displays_has_more = this._displays_has_more.asReadonly();

    private readonly _reload_displays = effect(() => {
        const initialised = this._org.initialised();
        const can_query = this._can_query_group_data();
        const group_id = this._api_group_id_debounced.value();
        const search = this._display_search_debounced.value().trim();
        this._change();
        untracked(() => {
            const token = ++this._displays_token;
            this._display_items.set([]);
            this._displays_next = null;
            this._displays_has_more.set(false);
            // Only drop the id cache when the source of the data changes, a
            // new search term still needs the displays other views look up.
            if (group_id !== this._display_cache_group) {
                this._display_cache_group = group_id;
                this._display_cache.set({});
            }
            if (!initialised || !can_query) return;
            this._fetchDisplayPage(
                querySystems({
                    ...this._orgZoneQueryParams({}, group_id),
                    limit: SignageService.PAGE_SIZE,
                    signage: true,
                    ...this._searchParam(search),
                } as any),
                token,
            );
        });
    });

    /**
     * Paged queries for the picker modals, which search on their own without
     * disturbing the lists behind them. Null when the user may not query.
     */
    public queryDisplays(search = ''): QueryResponse<any> | null {
        if (!this._canQueryLists()) return null;
        return querySystems({
            ...this._orgZoneQueryParams({}),
            limit: SignageService.PAGE_SIZE,
            signage: true,
            ...this._searchParam(search),
        } as any);
    }

    public queryPlaylists(search = ''): QueryResponse<SignagePlaylist> | null {
        if (!this._canQueryLists()) return null;
        return querySignagePlaylists({
            ...this._orgZoneQueryParams({ limit: SignageService.PAGE_SIZE }),
            ...this._searchParam(search),
        });
    }

    public querySignageZones(search = ''): QueryResponse<PlaceZone> | null {
        if (!this._canQueryLists()) return null;
        const group_id = this._api_group_id();
        return queryZones({
            limit: SignageService.PAGE_SIZE,
            tags: 'signage',
            ...(group_id ? { group_id } : {}),
            ...this._searchParam(search),
        } as any);
    }

    /** Zones a managed group can be given access to, not just signage ones */
    public queryGroupZones(search = ''): QueryResponse<PlaceZone> | null {
        const group = this.managed_group();
        return queryZones({
            limit: SignageService.PAGE_SIZE,
            ...(group?.authority_id
                ? { authority_id: group.authority_id }
                : {}),
            ...this._searchParam(search),
        } as any);
    }

    private _canQueryLists() {
        return this._org.initialised() && this._can_query_group_data();
    }

    private _searchParam(search: string) {
        const term = search.trim();
        return term ? { q: term, fields: SEARCH_FIELDS } : {};
    }

    public loadMoreDisplays() {
        if (this._displays_loading() || !this._displays_has_more()) return;
        const next = this._displays_next?.();
        if (!next) {
            this._displays_has_more.set(false);
            return;
        }
        this._fetchDisplayPage(next, this._displays_token);
    }

    private async _fetchDisplayPage(query: QueryResponse<any>, token: number) {
        this._displays_loading.set(true);
        try {
            const page = await query;
            if (token !== this._displays_token) return;
            const items = (page.data || [])
                .filter((item) => item.signage)
                .map(decodeEntityNames);
            this._display_items.update((list) => [...list, ...items]);
            this._display_cache.update((cache) => {
                const next = { ...cache };
                for (const item of items) next[item.id] = item;
                return next;
            });
            this._displays_next = page.next;
            this._displays_has_more.set(
                this._display_items().length < page.total,
            );
        } catch {
            if (token === this._displays_token)
                this._displays_has_more.set(false);
        } finally {
            if (token === this._displays_token)
                this._displays_loading.set(false);
        }
    }

    private readonly _zone_list = resource({
        params: () => ({
            initialised: this._org.initialised(),
            change: this._change(),
            group_id: this._api_group_id_debounced.value(),
            can_query: this._can_query_group_data(),
        }),
        loader: async ({ params }) => {
            if (!params.initialised || !params.can_query) return [] as any[];
            try {
                const result = await queryZones({
                    limit: 250,
                    tags: 'signage',
                    ...(params.group_id ? { group_id: params.group_id } : {}),
                } as any);
                return (result.data || []).map(decodeEntityNames);
            } catch {
                return [] as any[];
            }
        },
    });
    public readonly zones = computed(() =>
        this._mergeItems(this._zone_list.value() || [], this._zone_overrides()),
    );

    private readonly _all_zone_list = resource({
        params: () => ({
            initialised: this._org.initialised(),
            change: this._change(),
            group_id: this._api_group_id_debounced.value(),
            can_query: this._can_query_group_data(),
        }),
        loader: async ({ params }) => {
            if (!params.initialised || !params.can_query) return [] as any[];
            try {
                const result = await queryZones(
                    this._groupQueryParams(
                        { limit: 500, include_children_count: true },
                        params.group_id,
                    ),
                );
                return (result.data || []).map(decodeEntityNames);
            } catch {
                return [] as any[];
            }
        },
    });
    public readonly all_zones = computed(() =>
        this._mergeItems(
            this._all_zone_list.value() || [],
            this._zone_overrides(),
        ),
    );

    private readonly _root_zone_list = resource({
        params: () => ({
            initialised: this._org.initialised(),
            change: this._change(),
            group_id: this._api_group_id_debounced.value(),
            can_query: this._can_query_group_data(),
        }),
        loader: async ({ params }) => {
            if (!params.initialised || !params.can_query) return [] as any[];
            try {
                const result = await queryZones({
                    limit: 500,
                    include_children_count: true,
                    ...(params.group_id
                        ? { group_id: params.group_id }
                        : { parent_id: 'root' }),
                } as any);
                const zones = (result.data || []).map(decodeEntityNames);
                const org_zone_id = this._org.organisation?.id;
                return org_zone_id && !params.group_id
                    ? zones.filter((zone) => zone.id === org_zone_id)
                    : zones;
            } catch {
                return [] as any[];
            }
        },
    });
    public readonly root_zones = computed(() =>
        this._mergeItems(
            this._root_zone_list.value() || [],
            this._zone_overrides(),
        ),
    );

    public async zoneChildren(parent_id: string) {
        const { data } = await queryZones({
            parent_id,
            limit: 2500,
            include_children_count: true,
        } as any);
        return (data || []).map(decodeEntityNames);
    }

    private readonly _plugins = resource({
        params: () => ({
            initialised: this._org.initialised(),
            change: this._change(),
        }),
        loader: async ({ params }) => {
            if (!params.initialised) return [] as SignagePlugin[];
            try {
                const result = await querySignagePlugins(
                    this._orgZoneQueryParams({ limit: 500 }),
                );
                return (result.data || [])
                    .filter((plugin: SignagePlugin) => plugin.enabled)
                    .map(decodeEntityNames)
                    .sort((a: SignagePlugin, b: SignagePlugin) =>
                        a.name.localeCompare(b.name),
                    );
            } catch {
                return [] as SignagePlugin[];
            }
        },
    });
    public readonly plugins = computed(() => this._plugins.value() || []);

    public readonly selected_playlist = signal<SignagePlaylist | null>(null);
    // Selecting a playlist loads its media; debounce so arrowing through the
    // playlist list doesn't fetch media for every intermediate selection.
    private readonly _selected_playlist_debounced = debounced(
        this.selected_playlist,
        300,
    );
    public readonly selected_playlist_item = signal<SignageMedia | null>(null);
    public readonly selected_playlist_item_index = signal<number | null>(null);
    public readonly selected_zone = signal<any>(null);
    public readonly zone_search_term = signal('');
    public readonly zone_tree_expanded = signal<Record<string, boolean>>({});
    public readonly zone_tree_children_cache = signal<
        Record<string, PlaceZone[]>
    >({});
    private readonly _zone_search_debounced = debounced(
        this.zone_search_term,
        400,
    );
    private readonly _zone_search_results = resource({
        params: () => ({
            initialised: this._org.initialised(),
            can_query: this._can_query_group_data(),
            parent_id: this.selected_zone()?.id || '',
            search: this._zone_search_debounced.value().trim(),
        }),
        loader: async ({ params }) => {
            if (
                !params.initialised ||
                !params.can_query ||
                !params.parent_id ||
                !params.search
            ) {
                return [] as PlaceZone[];
            }
            try {
                const result = await queryZones({
                    q: params.search,
                    parent_id: params.parent_id,
                    limit: 2500,
                    include_children_count: true,
                } as any);
                return (result.data || []).map(decodeEntityNames);
            } catch {
                return [] as PlaceZone[];
            }
        },
    });

    public readonly selected_display = signal<any>(null);
    private readonly _playlist_meta_state = signal<
        Record<string, PlaylistMetaState>
    >(loadPlaylistMetaSessionCache());
    private readonly _playlist_meta_loading = signal<Record<string, boolean>>(
        {},
    );
    private readonly _playlist_meta_queue: Record<string, SignagePlaylist> = {};
    private _playlist_meta_processing = false;

    public readonly filtered_playlists = computed(() => {
        return this._playlist_items();
    });

    public readonly selected_playlist_requires_approval = computed(() => {
        const playlist = this.selected_playlist();
        if (!playlist?.id) return false;
        const approvals = this.playlist_approval_status();
        return playlist.id in approvals && !approvals[playlist.id];
    });
    public readonly playlist_approval_status = computed(() => {
        const result: Record<string, boolean> = {};
        for (const [playlist_id, data] of Object.entries(
            this._playlist_meta_state(),
        )) {
            if (typeof data.approved === 'boolean') {
                result[playlist_id] = data.approved;
            }
        }
        return result;
    });
    public readonly playlist_approval_requested_status = computed(() => {
        const result: Record<string, boolean> = {};
        for (const [playlist_id, data] of Object.entries(
            this._playlist_meta_state(),
        )) {
            if (typeof data.approval_requested === 'boolean') {
                result[playlist_id] = data.approval_requested;
            }
        }
        return result;
    });
    public readonly playlist_approval_request_loading = signal(false);
    public readonly playlist_thumbnail_media = computed(() => {
        const result: Record<string, string[]> = {};
        for (const [playlist_id, data] of Object.entries(
            this._playlist_meta_state(),
        )) {
            result[playlist_id] = (data.media_ids || []).map((id) =>
                mediaThumbnail(id),
            );
        }
        return result;
    });

    public readonly filtered_zones = computed(() => {
        if (!this.selected_zone()?.id || !this.zone_search_term().trim()) {
            return this.all_zones();
        }
        const overrides = this._zone_overrides();
        return (this._zone_search_results.value() || []).map(
            (zone) => overrides[zone.id] || zone,
        );
    });

    // The listing itself, which is whatever page(s) of the (possibly
    // searched) query have been loaded so far. Local edits are applied over
    // the loaded items, but never add a display the query didn't return.
    public readonly filtered_displays = computed(() => {
        const overrides = this._display_overrides();
        return this._display_items()
            .map((display) => overrides[display.id] || display)
            .sort((a, b) =>
                (a.display_name || a.name).localeCompare(
                    b.display_name || b.name,
                ),
            );
    });

    private readonly _playlist_change = signal(Date.now());
    public readonly playlist_media_loading = signal(false);

    private readonly _playlist_media_items = resource({
        params: () => ({
            playlist: this._selected_playlist_debounced.value(),
            playlist_change: this._playlist_change(),
        }),
        loader: async ({ params }) => {
            const playlist = params.playlist;
            if (!playlist?.id) {
                this.playlist_media_loading.set(false);
                return null as SignagePlaylistMedia | null;
            }
            this.playlist_media_loading.set(true);
            try {
                const result = await listSignagePlaylistMedia(playlist.id);
                this._setPlaylistMediaState(
                    playlist.id,
                    result.items || [],
                    result.approved,
                    result.schedules,
                );
                return result;
            } catch {
                return null as SignagePlaylistMedia | null;
            } finally {
                this.playlist_media_loading.set(false);
            }
        },
    });
    public readonly playlist_media_items = computed(() =>
        playlistMediaItems(this._playlist_media_items.value() || {}),
    );
    public readonly playlist_item_schedules = computed(() =>
        playlistItemScheduleMap(this._playlist_media_items.value() || {}),
    );
    public readonly playlist_item_schedule_list = computed(
        () => this._playlist_media_items.value()?.schedules || [],
    );

    constructor() {
        effect(() => {
            if (!this.signage_groups_loaded()) return;
            const groups = this.signage_groups();
            const selected_group_id = this.selected_group_id();
            if (!groups.length) {
                this.selected_group_id.set('');
                return;
            }
            if (groups.some((item) => item.group.id === selected_group_id)) {
                return;
            }
            this.selected_group_id.set(
                this.is_sys_admin() ? '' : groups[0].group.id,
            );
        });

        effect(() => {
            const groups = this.manageable_signage_groups();
            const group_id = this.managed_group_id();
            if (!groups.length) {
                this.managed_group_id.set('');
            } else if (
                !group_id ||
                !groups.some((group) => group.id === group_id)
            ) {
                this.managed_group_id.set(groups[0].id);
            }
        });

        effect(() => persistSelectedGroupId(this.selected_group_id()));
        effect(() => persistMediaViewMode(this.media_view_mode()));
    }

    public async addPlaylist() {
        if (
            !this._requirePermission(
                this.can_create(),
                i18n('SIGNAGE_MANAGER.SVC_NO_CREATE_PLAYLISTS'),
            )
        )
            return;
        const ref = this._dialog.open(PlaylistEditModalComponent, {
            data: {
                playlist: new SignagePlaylist({}),
                onAdd: (data: Partial<SignagePlaylist>) =>
                    this._addSignagePlaylist(data),
            },
            panelClass: 'mobile-fullscreen',
        });
        const result = await dialogClosed(ref);
        if (result) {
            this.changed();
        }
    }

    public queuePlaylistMeta(playlists: SignagePlaylist | SignagePlaylist[]) {
        const list = Array.isArray(playlists) ? playlists : [playlists];
        for (const playlist of list) {
            if (!playlist?.id || !this._needsPlaylistMetaRefresh(playlist)) {
                continue;
            }
            this._playlist_meta_queue[playlist.id] = playlist;
        }
        this._processPlaylistMetaQueue();
    }

    public async editPlaylist(playlist: SignagePlaylist) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS'),
            )
        )
            return;
        const ref = this._dialog.open(PlaylistEditModalComponent, {
            data: {
                playlist,
                onEdit: (id: string, data: Partial<SignagePlaylist>) =>
                    updateSignagePlaylist(id, data),
            },
            panelClass: 'mobile-fullscreen',
        });
        const result = await dialogClosed(ref);
        if (result) {
            if (this.selected_playlist()?.id === playlist.id) {
                this.selected_playlist.set(result);
            }
            this.changed();
        }
    }

    public async removePlaylist(playlist: SignagePlaylist) {
        if (!playlist?.id) return;
        if (
            !this._requirePermission(
                this.can_delete(),
                i18n('SIGNAGE_MANAGER.SVC_NO_DELETE_PLAYLISTS'),
            )
        )
            return;
        const result = await openConfirmModal(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_PLAYLIST_TITLE'),
                content: i18n('SIGNAGE_MANAGER.SVC_DELETE_NAMED', {
                    name: playlist.name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        await removeSignagePlaylist(playlist.id);
        if (this.selected_playlist()?.id === playlist.id) {
            this.selected_playlist.set(null);
            this.selected_playlist_item.set(null);
            this.selected_playlist_item_index.set(null);
        }
        this._removePlaylistMediaState(playlist.id);
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_REMOVED'));
        result.close();
    }

    public async sharePlaylist(playlist: SignagePlaylist) {
        if (!playlist?.id) return;
        await this._shareSignageItems('playlists', [playlist.id]);
    }

    public approvePlaylist(playlist: SignagePlaylist) {
        if (!playlist?.id) return;
        if (
            !this._requirePermission(
                this.can_approve(),
                i18n('SIGNAGE_MANAGER.SVC_NO_APPROVE_PLAYLISTS'),
            )
        )
            return;
        this._dialog.open(PlaylistApproveModalComponent, {
            data: { playlist },
            panelClass: 'mobile-fullscreen',
        });
    }

    public async requestPlaylistApproval(playlist: SignagePlaylist) {
        if (!playlist?.id) return;
        if (this.playlist_approval_request_loading()) return;
        if (this.can_approve()) {
            this.approvePlaylist(playlist);
            return;
        }
        let approvers: SignagePlaylistApprover[] = [];
        let group: PlaceCurrentGroup | null = null;
        this.playlist_approval_request_loading.set(true);
        try {
            const groups = await this._playlistApprovalGroups(playlist);
            if (!groups.length) {
                notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_GROUPS_FOR_PLAYLIST'));
                return;
            }
            const selected_group_id = this._api_group_id();
            group =
                groups.find((item) => item.group.id === selected_group_id) ||
                groups[0];
            approvers =
                ((await listSignagePlaylistApprovers(
                    group.group.id,
                )) as SignagePlaylistApprover[]) || [];
        } catch {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_APPROVERS'));
        } finally {
            this.playlist_approval_request_loading.set(false);
        }
        if (!group) return;
        const ref = this._dialog.open(PlaylistRequestApprovalModalComponent, {
            data: {
                playlist,
                approvers,
            },
            panelClass: 'mobile-fullscreen',
        });
        const result: PlaylistRequestApprovalModalResult | undefined =
            await dialogClosed(ref);
        if (!result) return;
        await requestApprovalSignagePlaylist(
            playlist.id,
            group.group.id,
            result.message || '',
            result.approver_id || '',
        );
        this.setPlaylistApprovalStatus(playlist.id, false, true);
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_APPROVAL_REQUESTED'));
    }

    public async removeMediaFromPlaylist(
        playlist_id: string,
        playlist_item_id: string,
        item_index?: number,
    ) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS'),
            )
        )
            return;
        const media_list = await listSignagePlaylistMedia(playlist_id);
        const new_items = [...(media_list.items || [])];
        if (
            typeof item_index === 'number' &&
            new_items[item_index] === playlist_item_id
        ) {
            new_items.splice(item_index, 1);
        } else {
            const index = new_items.indexOf(playlist_item_id);
            if (index < 0) return;
            new_items.splice(index, 1);
        }
        await updateSignagePlaylistMedia(playlist_id, new_items);
        this._setPlaylistMediaState(
            playlist_id,
            new_items,
            false,
            media_list.schedules,
        );
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_ITEM_REMOVED'));
        this._playlist_change.set(Date.now());
        this.changed();
    }

    public async reorderPlaylistMedia(playlist_id: string, items: string[]) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS'),
            )
        )
            return;
        await updateSignagePlaylistMedia(playlist_id, items);
        this._setPlaylistMediaState(playlist_id, items, false);
        this._playlist_change.set(Date.now());
    }

    public async editPlaylistItemSchedule(item: SignagePlaylistItemSchedule) {
        const playlist = this.selected_playlist();
        if (!playlist?.id || !item?.item_id) return;
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS'),
            )
        )
            return;
        const ref = this._dialog.open(PlaylistItemScheduleModalComponent, {
            data: {
                item,
                save: (schedule_id, schedules) =>
                    updateSignagePlaylistMediaSchedule(
                        playlist.id,
                        schedule_id,
                        {
                            item_id: item.item_id,
                            schedules,
                        },
                    ),
            },
            panelClass: 'mobile-fullscreen',
        });
        const result = await dialogClosed(ref);
        if (result) {
            this._playlist_change.set(Date.now());
            this.changed();
        }
    }

    public refreshPlaylist(playlist_id: string) {
        if (!playlist_id) return;
        this._removePlaylistMediaState(playlist_id);
        if (this.selected_playlist()?.id === playlist_id) {
            this._playlist_change.set(Date.now());
        }
        this.changed();
    }

    private async _scheduleMediaForDistributionPlaylist(
        playlist_id: string,
        media_id: string,
    ) {
        const media = this.media().find((item) => item.id === media_id);
        const ref = this._dialog.open(PlaylistItemScheduleModalComponent, {
            data: {
                item: new SignagePlaylistItemSchedule({
                    item_id: media_id,
                    media,
                }),
                save: async (item_id, schedules) => {
                    const media_list = await scheduleSignagePlaylistMedia(
                        playlist_id,
                        {
                            item_id,
                            schedules,
                        },
                    );
                    this._setPlaylistMediaState(
                        playlist_id,
                        media_list.items || [],
                        false,
                        media_list.schedules,
                    );
                    return media_list;
                },
            },
            panelClass: 'mobile-fullscreen',
        });
        const result = await dialogClosed(ref);
        if (!result) return false;
        this._playlist_change.set(Date.now());
        return true;
    }

    public changed() {
        this._change.set(Date.now());
    }

    public canManageSignageGroup(group_id = '') {
        if (this.can_manage_all_groups()) return true;
        const group = this.signage_groups().find(
            (item) => item.group.id === group_id,
        );
        return !!(group?.permissions & SignageGroupPermission.Manage);
    }

    public async saveSignageGroup(
        group: Partial<PlaceGroup>,
        data: Partial<PlaceGroup>,
    ) {
        const managed_group_id = group.id || data.parent_id || '';
        if (!this.canManageSignageGroup(managed_group_id)) {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_MANAGE_GROUP'));
            return null;
        }
        const payload = {
            ...group,
            ...data,
            subsystems: Array.from(
                new Set([...(group.subsystems || []), 'signage']),
            ),
        };
        const result = await (
            group.id ? updateGroup(group.id, payload) : addGroup(payload)
        ).catch((error) => {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ERR_SAVE_GROUP'));
            throw error;
        });
        this._groups_change.set(Date.now());
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_GROUP_SAVED'));
        return result;
    }

    public async removeSignageGroup(group: PlaceGroup) {
        if (!group?.id) return;
        if (!this.canManageSignageGroup(group.id)) {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_MANAGE_GROUP'));
            return;
        }
        const result = await openConfirmModal(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_GROUP_TITLE'),
                content: i18n('SIGNAGE_MANAGER.SVC_DELETE_NAMED', {
                    name: group.name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        await removeGroup(group.id).catch((error) => {
            result.close();
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ERR_REMOVE_GROUP'));
            throw error;
        });
        result.close();
        if (this.selected_group_id() === group.id) {
            this.selected_group_id.set('');
        }
        this._groups_change.set(Date.now());
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_GROUP_REMOVED'));
    }

    public async searchGroupUsers(search = '') {
        const group = this.managed_group();
        const { data } = await queryUsers({
            q: search,
            limit: 20,
            ...(group?.authority_id
                ? { authority_id: group.authority_id }
                : {}),
        });
        return data;
    }

    public async addManagedGroupUser(user: PlaceUser) {
        const group_id = this.managed_group_id();
        if (!user?.id || !this.canManageSignageGroup(group_id)) return;
        await addGroupUser({
            group_id,
            user_id: user.id,
            permissions: 0,
        }).catch((error) => {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ERR_ADD_USER'));
            throw error;
        });
        this._groups_change.set(Date.now());
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_USER_ADDED'));
    }

    public async updateManagedGroupUser(
        item: PlaceGroupUser,
        permissions: number,
    ) {
        if (!this.canManageSignageGroup(item.group_id)) return;
        await updateGroupUser(item.user_id, item.group_id, {
            permissions,
        }).catch((error) => {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ERR_UPDATE_USER'));
            throw error;
        });
        this._groups_change.set(Date.now());
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_USER_UPDATED'));
    }

    public async removeManagedGroupUser(item: PlaceGroupUser) {
        if (!this.canManageSignageGroup(item.group_id)) return;
        const result = await openConfirmModal(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_USER_TITLE'),
                content: i18n('SIGNAGE_MANAGER.SVC_REMOVE_NAMED_FROM_GROUP', {
                    name: item.user?.name || item.user_id,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        await removeGroupUser(item.user_id, item.group_id).catch((error) => {
            result.close();
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ERR_REMOVE_USER'));
            throw error;
        });
        result.close();
        this._groups_change.set(Date.now());
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_USER_REMOVED'));
    }

    public async addManagedGroupZone(zone: PlaceZone) {
        const group_id = this.managed_group_id();
        if (!zone?.id || !this.canManageSignageGroup(group_id)) return;
        await addGroupZone({
            group_id,
            zone_id: zone.id,
            permissions: 0,
        }).catch((error) => {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ERR_ADD_ZONE'));
            throw error;
        });
        this._groups_change.set(Date.now());
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_ZONE_ADDED'));
    }

    public async updateManagedGroupZone(
        item: PlaceGroupZone,
        permissions: number,
        deny: boolean,
    ) {
        if (!this.canManageSignageGroup(item.group_id)) return;
        await updateGroupZone(item.group_id, item.zone_id, {
            permissions,
            deny,
        }).catch((error) => {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ERR_UPDATE_ZONE'));
            throw error;
        });
        this._groups_change.set(Date.now());
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_ZONE_UPDATED'));
    }

    public async removeManagedGroupZone(item: PlaceGroupZone) {
        if (!this.canManageSignageGroup(item.group_id)) return;
        const result = await openConfirmModal(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_ZONE_TITLE'),
                content: i18n('SIGNAGE_MANAGER.SVC_REMOVE_NAMED_FROM_GROUP', {
                    name: item.zone?.name || item.zone_id,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        await removeGroupZone(item.group_id, item.zone_id).catch((error) => {
            result.close();
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ERR_REMOVE_ZONE'));
            throw error;
        });
        result.close();
        this._groups_change.set(Date.now());
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_ZONE_REMOVED'));
    }

    public setSelectedGroup(group_id: string) {
        if (this.is_sys_admin() && !group_id) {
            this.selected_group_id.set('');
            this.selected_playlist.set(null);
            this.selected_playlist_item.set(null);
            this.selected_playlist_item_index.set(null);
            this.selected_zone.set(null);
            this.selected_display.set(null);
            this.changed();
            return;
        }
        if (!this.signage_groups().some((item) => item.group.id === group_id)) {
            return;
        }
        this.selected_group_id.set(group_id);
        this.selected_playlist.set(null);
        this.selected_playlist_item.set(null);
        this.selected_playlist_item_index.set(null);
        this.selected_zone.set(null);
        this.selected_display.set(null);
        this.changed();
    }

    private _hasGroupPermission(permission: SignageGroupPermission) {
        if (this.is_sys_admin()) return true;
        const permissions = this.selected_group()?.permissions || 0;
        return !!(
            permissions & SignageGroupPermission.Manage ||
            permissions & permission
        );
    }

    private _requirePermission(has_permission: boolean, message: string) {
        if (has_permission) return true;
        notifyWarn(message);
        return false;
    }

    private _groupQueryParams<T extends Record<string, any>>(
        query_params: T,
        group_id = this._api_group_id(),
    ) {
        return {
            ...query_params,
            ...(group_id ? { group_id } : {}),
        } as T & { group_id?: string };
    }

    private _orgZoneQueryParams<T extends Record<string, any>>(
        query_params: T,
        group_id = this._api_group_id(),
    ) {
        const org_zone_id = this._org.organisation?.id;
        let zone_params: { group_id?: string; zone_id?: string } = {};
        if (group_id) {
            zone_params = { group_id };
        } else if (org_zone_id) {
            zone_params = { zone_id: org_zone_id };
        }
        return { ...query_params, ...zone_params } as T & {
            group_id?: string;
            zone_id?: string;
        };
    }

    private async _addSignageMedia(form_data: Partial<SignageMedia>) {
        const group_id = this._api_group_id();
        const result = await retryMediaRequest(() =>
            group_id
                ? post(
                      `${apiEndpoint()}/signage/media?group_id=${encodeURIComponent(group_id)}`,
                      form_data,
                  ).then((resp: any) => new SignageMedia(resp))
                : addSignageMedia(form_data),
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
        this._media_items.update((items) =>
            [item, ...items.filter((existing) => existing.id !== item.id)].sort(
                (a, b) => b.created_at - a.created_at,
            ),
        );
        this._media_tags.reload();
    }

    private _addSignagePlaylist(form_data: Partial<SignagePlaylist>) {
        const group_id = this._api_group_id();
        if (!group_id) return addSignagePlaylist(form_data);
        return post(
            `${apiEndpoint()}/signage/playlists?group_id=${encodeURIComponent(group_id)}`,
            form_data,
        ).then((resp: any) => new SignagePlaylist(resp));
    }

    private async _shareSignageItems(
        item_type: 'media' | 'playlists',
        item_ids: string[],
    ) {
        if (
            !this._requirePermission(
                this.can_share(),
                i18n('SIGNAGE_MANAGER.SVC_NO_SHARE_ITEMS'),
            )
        )
            return false;
        const selected_group_id = this.selected_group()?.group.id || '';
        const target_groups = this.signage_groups().filter(
            (item) => item.group.id !== selected_group_id,
        );
        if (!target_groups.length) {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_GROUPS_TO_SHARE'));
            return false;
        }
        const ref = this._dialog.open(GroupSelectModalComponent, {
            data: {
                title:
                    item_type === 'media'
                        ? i18n('SIGNAGE_MANAGER.SVC_SHARE_MEDIA_TITLE')
                        : i18n('SIGNAGE_MANAGER.SVC_SHARE_PLAYLIST_TITLE'),
                groups: target_groups,
            },
            panelClass: 'mobile-fullscreen',
        });
        const group_id = await dialogClosed(ref);
        if (!group_id) return false;
        const request =
            item_type === 'media'
                ? shareSignageMedia({ items: item_ids.join(','), to: group_id })
                : shareSignagePlaylists({
                      items: item_ids.join(','),
                      to: group_id,
                  });
        await request;
        notifySuccess(
            item_type === 'media'
                ? i18n('SIGNAGE_MANAGER.SVC_MEDIA_SHARED')
                : i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_SHARED'),
        );
        return true;
    }

    private async _playlistApprovalGroups(playlist: SignagePlaylist) {
        const groups = this.signage_groups();
        const selected_group_id = this._api_group_id();
        const matching_groups: PlaceCurrentGroup[] = [];
        for (const group of groups) {
            if (!group.group.id) continue;
            if (group.group.id === selected_group_id) {
                matching_groups.push(group);
                continue;
            }
            try {
                const result = await querySignagePlaylists({
                    group_id: group.group.id,
                    limit: 500,
                } as any);
                if (
                    (result.data || []).some((item) => item.id === playlist.id)
                ) {
                    matching_groups.push(group);
                }
            } catch {
                // Ignore groups the user cannot query.
            }
        }
        return matching_groups;
    }

    private _cacheDisplay(display: any) {
        if (!display?.id) return;
        this._display_overrides.update((state) => ({
            ...state,
            [display.id]: display,
        }));
    }

    private _cacheZone(zone: any) {
        if (!zone?.id) return;
        this._zone_overrides.update((state) => ({
            ...state,
            [zone.id]: zone,
        }));
    }

    private _mergeItems(list: any[], overrides: Record<string, any>) {
        const item_map = new Map((list || []).map((item) => [item.id, item]));
        for (const item of Object.values(overrides)) {
            if (item?.id) item_map.set(item.id, item);
        }
        return [...item_map.values()].sort((a, b) =>
            (a.display_name || a.name).localeCompare(b.display_name || b.name),
        );
    }

    public async updatePlaylistMedia(playlist_id: string, list: string[]) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS'),
            )
        )
            return;
        await updateSignagePlaylistMedia(playlist_id, list);
        this._setPlaylistMediaState(playlist_id, list, false);
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_UPDATED'));
        this._playlist_change.set(Date.now());
    }

    public async addMediaToPlaylist(playlist_id: string, media_id: string) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS'),
            )
        )
            return;
        const media_list = await listSignagePlaylistMedia(playlist_id);
        if (media_list.items?.includes(media_id)) {
            const result = await openConfirmModal(
                {
                    title: i18n('SIGNAGE_MANAGER.SVC_ADD_DUPLICATE_TITLE'),
                    content: i18n('SIGNAGE_MANAGER.SVC_ADD_DUPLICATE_CONTENT'),
                    icon: { content: 'playlist_add' },
                },
                this._dialog,
            );
            if (result.reason !== 'done') return;
            result.close();
        }
        const playlist = this.playlists().find(
            (item) => item.id === playlist_id,
        );
        const new_items = [...(media_list.items || []), media_id];
        if (playlist?.distribution) {
            await this._scheduleMediaForDistributionPlaylist(
                playlist_id,
                media_id,
            );
            return;
        }
        await this.updatePlaylistMedia(playlist_id, new_items);
    }

    public async addMediaItemsToPlaylist(
        playlist_id: string,
        media_ids: string[],
    ) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS'),
            )
        )
            return false;
        const unique_media_ids = [...new Set(media_ids)].filter(Boolean);
        if (!playlist_id || !unique_media_ids.length) return false;
        const playlist = this.playlists().find(
            (item) => item.id === playlist_id,
        );
        const media_list = await listSignagePlaylistMedia(playlist_id);
        const existing_items = media_list.items || [];
        const new_media_ids = unique_media_ids.filter(
            (id) => !existing_items.includes(id),
        );
        if (!new_media_ids.length) {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_MEDIA_ALREADY_IN'));
            return false;
        }
        if (playlist?.distribution) {
            for (const media_id of new_media_ids) {
                const added = await this._scheduleMediaForDistributionPlaylist(
                    playlist_id,
                    media_id,
                );
                if (!added) return false;
            }
            return true;
        }
        await this.updatePlaylistMedia(playlist_id, [
            ...existing_items,
            ...new_media_ids,
        ]);
        return true;
    }

    private _needsPlaylistMetaRefresh(playlist: SignagePlaylist) {
        const meta = this._playlist_meta_state()[playlist.id];
        const loading = this._playlist_meta_loading()[playlist.id];
        const queued = !!this._playlist_meta_queue[playlist.id];
        const playlist_updated_at = playlist.updated_at || 0;
        return (
            !loading &&
            !queued &&
            (meta?.updated_at !== playlist_updated_at ||
                !Array.isArray(meta?.item_ids) ||
                typeof meta?.approved !== 'boolean' ||
                typeof meta?.approval_requested !== 'boolean')
        );
    }

    private async _processPlaylistMetaQueue() {
        if (this._playlist_meta_processing) return;
        this._playlist_meta_processing = true;
        try {
            while (Object.keys(this._playlist_meta_queue).length) {
                const next_playlist = Object.values(
                    this._playlist_meta_queue,
                )[0];
                delete this._playlist_meta_queue[next_playlist.id];
                const playlist_updated_at = next_playlist.updated_at || 0;
                this._playlist_meta_loading.update((state) => ({
                    ...state,
                    [next_playlist.id]: true,
                }));
                try {
                    const media = await listSignagePlaylistMedia(
                        next_playlist.id,
                    );
                    const media_ids = playlistMediaIds(media);
                    this._setPlaylistMeta(next_playlist.id, {
                        media_ids: media_ids.slice(0, 3),
                        item_ids: media.items || media_ids,
                        updated_at: playlist_updated_at,
                        approved: media.approved,
                        approval_requested: media.approval_requested,
                    });
                } catch {
                    this._setPlaylistMeta(next_playlist.id, {
                        media_ids: [],
                        updated_at: playlist_updated_at,
                    });
                } finally {
                    this._playlist_meta_loading.update((state) => ({
                        ...state,
                        [next_playlist.id]: false,
                    }));
                }
            }
        } finally {
            this._playlist_meta_processing = false;
        }
    }

    private _setPlaylistMeta(playlist_id: string, data: PlaylistMetaState) {
        this._updatePlaylistMetaState((state) => ({
            ...state,
            [playlist_id]: data,
        }));
    }

    public setPlaylistApprovalStatus(
        playlist_id: string,
        approved: boolean,
        approval_requested = false,
    ) {
        const playlist =
            this.playlists().find((item) => item.id === playlist_id) ||
            this.selected_playlist();
        const current_state = this._playlist_meta_state()[playlist_id];
        this._setPlaylistMeta(playlist_id, {
            media_ids: current_state?.media_ids || [],
            item_ids: current_state?.item_ids,
            updated_at:
                current_state?.updated_at || playlist?.updated_at || Date.now(),
            approved,
            approval_requested,
        });
    }

    private _setPlaylistMediaState(
        playlist_id: string,
        item_ids: string[],
        approved?: boolean,
        schedules?: SignagePlaylistItemSchedule[],
    ) {
        // Distribution playlist items are schedule item ids; map them to the
        // scheduled media ids so thumbnail URLs resolve.
        const schedule_map = playlistItemScheduleMap({
            schedules:
                schedules || this._playlist_media_items.value()?.schedules,
        });
        const media_ids = item_ids.map(
            (id) => schedule_map.get(id)?.media?.id || id,
        );
        const playlist =
            this.playlists().find((item) => item.id === playlist_id) ||
            this.selected_playlist();
        const current_state = this._playlist_meta_state()[playlist_id];
        this._setPlaylistMeta(playlist_id, {
            media_ids: media_ids.slice(0, 3),
            item_ids: item_ids,
            updated_at:
                current_state?.updated_at || playlist?.updated_at || Date.now(),
            approved: approved ?? current_state?.approved,
            approval_requested:
                approved === false
                    ? false
                    : (current_state?.approval_requested ?? false),
        });
    }

    private _removePlaylistMediaState(playlist_id: string) {
        this._updatePlaylistMetaState((state) => {
            const next_state = { ...state };
            delete next_state[playlist_id];
            return next_state;
        });
    }

    private async _removeMediaFromCachedPlaylists(media_ids: string[]) {
        const removed_ids = new Set(media_ids.filter(Boolean));
        if (!removed_ids.size) return;
        const cached_state = this._playlist_meta_state();
        const linked_playlist_ids = Object.entries(cached_state)
            .filter(([, state]) =>
                (state.item_ids || state.media_ids || []).some((id) =>
                    removed_ids.has(id),
                ),
            )
            .map(([playlist_id]) => playlist_id);
        if (!linked_playlist_ids.length) return;
        for (const playlist_id of linked_playlist_ids) {
            const cached_items = cached_state[playlist_id]?.item_ids;
            const current_items =
                cached_items ||
                (await listSignagePlaylistMedia(playlist_id)).items ||
                [];
            const updated_items = current_items.filter(
                (id) => !removed_ids.has(id),
            );
            if (updated_items.length === current_items.length) continue;
            await updateSignagePlaylistMedia(playlist_id, updated_items);
            this._setPlaylistMediaState(playlist_id, updated_items, false);
        }
        const selected_item = this.selected_playlist_item();
        if (selected_item?.id && removed_ids.has(selected_item.id)) {
            this.selected_playlist_item.set(null);
            this.selected_playlist_item_index.set(null);
        }
        this._playlist_change.set(Date.now());
    }

    private _updatePlaylistMetaState(
        updater: (
            state: Record<string, PlaylistMetaState>,
        ) => Record<string, PlaylistMetaState>,
    ) {
        let next_state: Record<string, PlaylistMetaState> = {};
        this._playlist_meta_state.update((state) => {
            next_state = updater(state);
            return next_state;
        });
        persistPlaylistMetaSessionCache(next_state);
    }

    public async previewMedia(item: SignageMedia) {
        const plugin =
            item.media_type === 'plugin' && item.plugin_id
                ? await this._resolvePlugin(item.plugin_id)
                : undefined;
        this._dialog.open(MediaPreviewModalComponent, {
            data: { media: item, plugin },
            panelClass: 'fullscreen-dialog',
        });
    }

    public async previewFileFromInput(event: Event, playlist_id = '') {
        const element = event.target as HTMLInputElement;
        if (!element?.files?.length) return;
        try {
            await this.previewFiles(element.files, playlist_id);
        } finally {
            element.value = '';
        }
    }

    public async previewFiles(
        files: ArrayLike<File> | Iterable<File> | null | undefined,
        playlist_id = '',
    ) {
        if (
            !this._requirePermission(
                this.can_create(),
                i18n('SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA'),
            )
        )
            return;
        if (!files) return;
        const upload_files = Array.from(files);
        if (upload_files.length > 1) {
            return this.bulkUploadMedia(upload_files, playlist_id);
        }
        for (const file of upload_files) {
            const prepared = await this._prepareUploadMedia(file);
            if (!prepared) continue;
            await this.editMedia(
                new SignageMedia({}),
                prepared.file,
                playlist_id,
                prepared.metadata,
            );
        }
    }

    public async bulkUploadMedia(files: File[], playlist_id = '') {
        if (
            !this._requirePermission(
                this.can_create(),
                i18n('SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA'),
            )
        )
            return;
        const items: BulkMediaUploadItem[] = [];
        for (const file of files) {
            const prepared = await this._prepareUploadMedia(file);
            if (prepared) items.push(prepared);
        }
        if (!items.length) return;
        const data: BulkMediaUploadModalData = {
            items,
            onUpload: (item, permissions, on_progress) =>
                this._addMedia(
                    item.file,
                    new SignageMedia({}),
                    playlist_id,
                    item.metadata,
                    undefined,
                    { permissions, on_progress },
                ),
        };
        const ref = this._dialog.open(BulkMediaUploadModalComponent, {
            data,
            panelClass: 'mobile-fullscreen',
        });
        await dialogClosed(ref);
        this.changed();
    }

    public async addMediaFromLink(url: string) {
        if (
            !this._requirePermission(
                this.can_create(),
                i18n('SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA'),
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

    public async addMediaFromPlugin(plugin: SignagePlugin) {
        if (
            !this._requirePermission(
                this.can_create(),
                i18n('SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA'),
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
        await this.editMedia(media, undefined, '', undefined, plugin);
    }

    public async editMedia(
        media: SignageMedia = new SignageMedia({}),
        file?: File,
        playlist_id = '',
        prepared_file_metadata?: SignageMediaMetadata,
        plugin?: SignagePlugin,
    ) {
        if (media.id) {
            if (
                !this._requirePermission(
                    this.can_update(),
                    i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA'),
                )
            )
                return;
        } else if (
            !this._requirePermission(
                this.can_create(),
                i18n('SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA'),
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
        const dimensions_validation =
            validateSignageMediaDimensions(file_metadata);
        if (!dimensions_validation.valid) {
            notifyWarn(dimensions_validation.error);
        }
        const load_plugin = media.plugin_id
            ? () => this._resolvePlugin(media.plugin_id)
            : undefined;
        let file_thumbnail = '';
        if (file) {
            file_thumbnail = await this._generateThumbnail(file, 1024, 720);
        }
        const ref = this._dialog.open(MediaEditModalComponent, {
            data: {
                media,
                file,
                file_metadata,
                file_thumbnail,
                playlist_id,
                plugin,
                loadPlugin: load_plugin,
                generateThumbnail: (f: File) => this.generateThumbnailImage(f),
                onAdd: (
                    f: File,
                    m: SignageMedia,
                    file_metadata?: SignageMediaMetadata,
                    thumbnail?: string,
                ) =>
                    this._addMedia(
                        f,
                        m,
                        playlist_id,
                        file_metadata,
                        thumbnail || file_thumbnail,
                    ),
                onEdit: async (id: string, data: any) => {
                    const updated_media = await this._editMedia(id, data);
                    Object.assign(media, updated_media);
                },
                preview: (item) => this.previewMedia(item),
            },
        });
        await dialogClosed(ref);
    }

    private async _editMedia(id: string, data: any) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA'),
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
        this._media_items.update((items) =>
            items.map((item) => (item.id === id ? updated_media : item)),
        );
        this._media_tags.reload();
        return updated_media;
    }

    private async _resolvePlugin(
        plugin_id: string,
    ): Promise<SignagePlugin | undefined> {
        if (!plugin_id) return undefined;
        try {
            const result = await querySignagePlugins({
                limit: 500,
            } as any).catch(() => ({ data: [] }));
            const all_plugins = result.data || [];
            return all_plugins.find((p: SignagePlugin) => p.id === plugin_id);
        } catch {
            return undefined;
        }
    }

    private async _addMedia(
        file: File | undefined,
        media_item: SignageMedia,
        playlist_id = '',
        file_metadata?: SignageMediaMetadata,
        url_thumbnail?: string,
        upload_options?: SignageUploadOptions,
    ) {
        let result: SignageMedia;
        if (file) {
            result = await this.addMedia(
                file,
                media_item,
                file_metadata,
                upload_options,
            );
        } else {
            let thumbnail_id = '';
            if (url_thumbnail) {
                thumbnail_id = await this._uploadThumbnailImage(
                    url_thumbnail,
                    media_item.name,
                );
            }
            const data = {
                ...new SignageMedia({
                    ...media_item,
                    thumbnail_id: thumbnail_id || undefined,
                }),
            };
            for (const key in data) {
                if (!data[key]) delete data[key];
            }
            result = await this._addSignageMedia(data);
        }
        if (playlist_id && result?.id) {
            const media_list = await listSignagePlaylistMedia(playlist_id);
            const new_media_list = [...media_list.items, result.id];
            await this.updatePlaylistMedia(playlist_id, new_media_list);
            // Only the playlist views need rebuilding; the media list already
            // holds the item returned by the create call.
            this.changed();
        }
        return result;
    }

    public async addMedia(
        file: File,
        media_item: SignageMedia = new SignageMedia({}),
        file_metadata?: SignageMediaMetadata,
        upload_options?: SignageUploadOptions,
    ) {
        if (
            !this._requirePermission(
                this.can_create(),
                i18n('SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA'),
            )
        ) {
            throw new Error(i18n('SIGNAGE_MANAGER.SVC_PERMISSION_DENIED'));
        }
        const prepared =
            (file_metadata &&
                (await this._prepareUploadMedia(file, file_metadata))) ||
            (await this._prepareUploadMedia(file));
        if (!prepared) {
            throw new Error(i18n('SIGNAGE_MANAGER.SVC_SELECT_MEDIA_FILE'));
        }
        const { file: upload_file, media_type, metadata } = prepared;
        const { is_landscape } = metadata;
        const thumbnail_image = await this._generateThumbnail(
            upload_file,
            1280,
            720,
        ).catch(() => null);
        // Resolves only once the upload is committed. Watching progress reach
        // 100 is not enough: the last chunk lands before finalisation and the
        // commit run, so a failure there would otherwise look like success.
        let media_id: string;
        if (upload_options) {
            media_id = await this._uploads.uploadFileToCompletion(
                upload_file,
                false,
                upload_options.permissions,
                upload_options.on_progress,
            );
        } else {
            media_id =
                await this._uploads.uploadFileWithPermissionsToCompletion(
                    upload_file,
                );
        }
        const media_url = `${
            location.origin
        }/api/engine/v2/uploads/${encodeURIComponent(media_id)}/url`;
        let thumbnail_id = '';
        if (thumbnail_image) {
            const name_parts = upload_file.name.split('.');
            name_parts.pop();
            thumbnail_id = await this._uploadThumbnailImage(
                thumbnail_image,
                name_parts.join('.'),
            );
        }
        const data = {
            ...new SignageMedia({
                ...media_item,
                name: media_item.name || upload_file.name,
                media_id,
                media_uri: media_url,
                media_type,
                orientation: is_landscape ? 'landscape' : 'portrait',
                thumbnail_id,
            }),
        };
        for (const key in data) {
            if (!data[key]) delete data[key];
        }
        const result = await this._addSignageMedia(data);
        return result;
    }

    private async _prepareUploadMedia(
        file: File | null,
        metadata?: SignageMediaMetadata,
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
        return {
            file: normalized_file,
            media_type: validation.media_type,
            metadata:
                metadata || (await this._getMediaMetadata(normalized_file)),
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
            const converted_file = await this._convertImageToWebp(file);
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
            !this._requirePermission(
                this.can_delete(),
                i18n('SIGNAGE_MANAGER.SVC_NO_DELETE_MEDIA'),
            )
        )
            return;
        const result = await openConfirmModal(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_MEDIA_TITLE'),
                content: i18n('SIGNAGE_MANAGER.SVC_DELETE_NAMED_PLAIN', {
                    name: item.name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        await this._removeMediaFromCachedPlaylists([item.id]);
        await removeSignageMedia(item.id);
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_MEDIA_REMOVED'));
        result.close();
    }

    public async removeMediaItems(items: SignageMedia[]) {
        const media_items = items.filter((item) => !!item?.id);
        if (!media_items.length) return false;
        if (
            !this._requirePermission(
                this.can_delete(),
                i18n('SIGNAGE_MANAGER.SVC_NO_DELETE_MEDIA'),
            )
        )
            return false;
        const result = await openConfirmModal(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_MEDIA_TITLE'),
                content: i18n(
                    'SIGNAGE_MANAGER.SVC_DELETE_SELECTED_MEDIA',
                    { count: media_items.length },
                    media_items.length,
                ),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return false;
        await this._removeMediaFromCachedPlaylists(
            media_items.map((item) => item.id),
        );
        await Promise.all(
            media_items.map((item) => removeSignageMedia(item.id)),
        );
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_MEDIA_REMOVED'));
        result.close();
        return true;
    }

    public async shareMedia(item: SignageMedia) {
        if (!item?.id) return;
        await this._shareSignageItems('media', [item.id]);
    }

    public async shareMediaItems(items: SignageMedia[]) {
        const media_ids = items.map((item) => item.id).filter(Boolean);
        if (!media_ids.length) return false;
        return this._shareSignageItems('media', media_ids);
    }

    public async addMediaTags(items: SignageMedia[]) {
        const media_items = items.filter((item) => !!item?.id);
        if (!media_items.length) return false;
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA'),
            )
        )
            return false;
        const ref = this._dialog.open(MediaTagsModalComponent, {
            width: 'min(28rem, calc(100vw - 2rem))',
        });
        const tags = await dialogClosed<string[]>(ref);
        if (!tags?.length) return false;
        try {
            await Promise.all(
                media_items.map((item) =>
                    updateSignageMedia(item.id, {
                        tags: [...new Set([...(item.tags || []), ...tags])],
                    }),
                ),
            );
        } catch (error) {
            notifyError(
                i18n('SIGNAGE_MANAGER.MEDIA_SAVE_ERROR', {
                    error: error instanceof Error ? error.message : `${error}`,
                }),
            );
            return false;
        }
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.MEDIA_SAVE_SUCCESS'));
        return true;
    }

    public async openPlaylistSelectModal(media_id: string) {
        const ref = this._dialog.open(PlaylistSelectModalComponent, {
            data: { media_id },
            panelClass: 'mobile-fullscreen',
        });
        const playlist_id = await dialogClosed(ref);
        if (!playlist_id) return;
        await this.addMediaToPlaylist(playlist_id, media_id);
    }

    public async openBulkPlaylistSelectModal(media_ids: string[]) {
        const ref = this._dialog.open(PlaylistSelectModalComponent, {
            data: { media_ids },
            panelClass: 'mobile-fullscreen',
        });
        const playlist_id = await dialogClosed(ref);
        if (!playlist_id) return false;
        return this.addMediaItemsToPlaylist(playlist_id, media_ids);
    }

    public async addPlaylistToZone(zone: any) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS'),
            )
        )
            return;
        const ref = this._dialog.open(PlaylistSelectModalComponent, {
            data: { zone_id: zone.id },
            panelClass: 'mobile-fullscreen',
        });
        const playlist_id = await dialogClosed(ref);
        if (!playlist_id) return;
        if (zone.playlists?.includes(playlist_id)) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_IN_ZONE'));
            return;
        }
        const playlists = [...(zone.playlists || []), playlist_id];
        const updated = await updateZone(
            zone.id,
            { playlists, version: zone.version },
            'patch',
        );
        this._cacheZone(updated);
        this.selected_zone.set(updated);
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_ADDED_ZONE'));
    }

    public async removePlaylistFromZone(zone: any, playlist_id: string) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS'),
            )
        )
            return;
        const playlists = (zone.playlists || []).filter(
            (id: string) => id !== playlist_id,
        );
        const updated = await updateZone(
            zone.id,
            { playlists, version: zone.version },
            'patch',
        );
        this._cacheZone(updated);
        this.selected_zone.set(updated);
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_REMOVED_ZONE'));
    }

    public async addDisplayToZone(zone: any) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS'),
            )
        )
            return;
        const ref = this._dialog.open(DisplaySelectModalComponent, {
            data: { zone_id: zone.id },
            panelClass: 'mobile-fullscreen',
        });
        const display_id = await dialogClosed(ref);
        if (!display_id) return;
        // The picker searches the backend, so the choice may be a display the
        // list never loaded.
        const display =
            this.displays().find((d: any) => d.id === display_id) ||
            (await showSystem(display_id).catch(() => null));
        if (!display) return;
        if (display.zones?.includes(zone.id)) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_DISPLAY_IN_ZONE'));
            return;
        }
        const zones = [...(display.zones || []), zone.id];
        const updated = await updateSystem(
            display.id,
            { zones, version: display.version } as any,
            'patch',
        );
        this._cacheDisplay(updated);
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_DISPLAY_ADDED_ZONE'));
    }

    public async removeDisplayFromZone(zone: any, display_id: string) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS'),
            )
        )
            return;
        const displays = this.displays();
        const display = displays.find((d: any) => d.id === display_id);
        if (!display) return;
        const zones = (display.zones || []).filter(
            (id: string) => id !== zone.id,
        );
        const updated = await updateSystem(
            display.id,
            { zones, version: display.version } as any,
            'patch',
        );
        this._cacheDisplay(updated);
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_DISPLAY_REMOVED_ZONE'));
    }

    public async addPlaylistToDisplay(display: any) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS'),
            )
        )
            return;
        const ref = this._dialog.open(PlaylistSelectModalComponent, {
            data: { display_id: display.id },
            panelClass: 'mobile-fullscreen',
        });
        const playlist_id = await dialogClosed(ref);
        if (!playlist_id) return;
        if (display.playlists?.includes(playlist_id)) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_IN_DISPLAY'));
            return;
        }
        const playlists = [...(display.playlists || []), playlist_id];
        const updated = await updateSystem(
            display.id,
            { playlists, version: display.version } as any,
            'patch',
        );
        this._cacheDisplay(updated);
        this.selected_display.set(updated);
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_ADDED_DISPLAY'));
    }

    public async addDisplayToPlaylist(playlist: SignagePlaylist) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS'),
            )
        )
            return;
        const ref = this._dialog.open(DisplaySelectModalComponent, {
            data: { playlist_id: playlist.id },
            panelClass: 'mobile-fullscreen',
        });
        const display_id = await dialogClosed(ref);
        if (!display_id) return;
        // The picker searches the backend, so the choice may be a display the
        // list never loaded.
        const display =
            this.displays().find((d: any) => d.id === display_id) ||
            (await showSystem(display_id).catch(() => null));
        if (!display) return;
        if (display.playlists?.includes(playlist.id)) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_IN_DISPLAY'));
            return;
        }
        const playlists = [...(display.playlists || []), playlist.id];
        const updated = await updateSystem(
            display.id,
            { playlists, version: display.version } as any,
            'patch',
        );
        this._cacheDisplay(updated);
        if (this.selected_display()?.id === display.id) {
            this.selected_display.set(updated);
        }
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_DISPLAY_ADDED_PLAYLIST'));
    }

    public async addZoneToPlaylist(playlist: SignagePlaylist) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS'),
            )
        )
            return;
        const ref = this._dialog.open(ZoneSelectModalComponent, {
            data: { playlist_id: playlist.id },
            panelClass: 'mobile-fullscreen',
        });
        const zone_id = await dialogClosed(ref);
        if (!zone_id) return;
        // Likewise the zone picker, which may return a zone outside the list
        const zone =
            this.zones().find((z: any) => z.id === zone_id) ||
            (await showZone(zone_id).catch(() => null));
        if (!zone) return;
        if (zone.playlists?.includes(playlist.id)) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_IN_ZONE'));
            return;
        }
        const playlists = [...(zone.playlists || []), playlist.id];
        const updated = await updateZone(
            zone.id,
            { playlists, version: zone.version },
            'patch',
        );
        this._cacheZone(updated);
        if (this.selected_zone()?.id === zone.id) {
            this.selected_zone.set(updated);
        }
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_ZONE_ADDED_PLAYLIST'));
    }

    public async removeDisplayFromPlaylist(
        playlist: SignagePlaylist,
        display: any,
    ) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS'),
            )
        )
            return;
        const playlists = (display.playlists || []).filter(
            (id: string) => id !== playlist.id,
        );
        const updated = await updateSystem(
            display.id,
            { playlists, version: display.version } as any,
            'patch',
        );
        this._cacheDisplay(updated);
        if (this.selected_display()?.id === display.id) {
            this.selected_display.set(updated);
        }
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_DISPLAY_REMOVED_PLAYLIST'));
    }

    public async removeZoneFromPlaylist(playlist: SignagePlaylist, zone: any) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS'),
            )
        )
            return;
        const playlists = (zone.playlists || []).filter(
            (id: string) => id !== playlist.id,
        );
        const updated = await updateZone(
            zone.id,
            { playlists, version: zone.version },
            'patch',
        );
        this._cacheZone(updated);
        if (this.selected_zone()?.id === zone.id) {
            this.selected_zone.set(updated);
        }
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_ZONE_REMOVED_PLAYLIST'));
    }

    public async removePlaylistFromDisplay(display: any, playlist_id: string) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS'),
            )
        )
            return;
        const playlists = (display.playlists || []).filter(
            (id: string) => id !== playlist_id,
        );
        const updated = await updateSystem(
            display.id,
            { playlists, version: display.version } as any,
            'patch',
        );
        this._cacheDisplay(updated);
        this.selected_display.set(updated);
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_REMOVED_DISPLAY'));
    }

    private _getMediaMetadata(file: File) {
        return new Promise<SignageMediaMetadata>((resolve) => {
            const url = URL.createObjectURL(file);
            if (getVideoContainer(file)) {
                const video = document.createElement('video');
                video.src = url;
                video.addEventListener('loadedmetadata', () => {
                    resolve({
                        is_landscape: video.videoWidth > video.videoHeight,
                        duration: video.duration,
                        width: video.videoWidth,
                        height: video.videoHeight,
                    });
                    URL.revokeObjectURL(url);
                });
                video.load();
            } else {
                const img = new Image();
                img.onload = () => {
                    resolve({
                        is_landscape: img.width > img.height,
                        duration: 0,
                        width: img.width,
                        height: img.height,
                    });
                    URL.revokeObjectURL(url);
                };
                img.src = url;
            }
        });
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

    /**
     * Scale an image the user picked down to a thumbnail data URL. Webpages
     * and plugins have no file to capture a frame from, and a cross origin
     * page cannot be rendered to a canvas, so the image is supplied by hand.
     */
    public async generateThumbnailImage(file: File) {
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

    private async _generateThumbnail(
        file: File,
        max_width: number,
        max_height: number,
    ) {
        if (getVideoContainer(file)) {
            return this._generateVideoThumbnail(file, max_width, max_height);
        } else if (isSupportedImageFile(file)) {
            return this._generateImageThumbnail(file, max_width, max_height);
        }
        return '';
    }

    private async _generateImageThumbnail(
        file: File,
        max_width: number,
        max_height: number,
    ) {
        const source = await this._decodeImageSource(file);
        const { width, height } = this._imageSourceSize(
            source,
            max_width,
            max_height,
        );
        try {
            return this._generateThumbnailFromResource(
                source,
                width,
                height,
                max_width,
                max_height,
            );
        } finally {
            if (source instanceof ImageBitmap) source.close();
        }
    }

    /**
     * Decode the file completely before anything paints it. `load` on an
     * `<img>` only promises the bytes arrived, not that a frame is ready, and
     * browsers differ on when that becomes true.
     */
    private async _decodeImageSource(
        file: File,
    ): Promise<ImageBitmap | HTMLImageElement> {
        if (typeof createImageBitmap === 'function') {
            try {
                const bitmap = await createImageBitmap(file);
                if (bitmap.width > 0 && bitmap.height > 0) return bitmap;
                bitmap.close();
            } catch {
                // Firefox cannot decode SVG through createImageBitmap
            }
        }
        const image = await this._loadImage(file);
        if (typeof image.decode === 'function') {
            await image.decode().catch(() => undefined);
        }
        return image;
    }

    /**
     * An SVG carrying no intrinsic size reports zero dimensions in Firefox
     * while Chrome substitutes a default, which yields a zero sized canvas and
     * a blank thumbnail. Fall back to the target box in that case.
     */
    private _imageSourceSize(
        source: ImageBitmap | HTMLImageElement,
        max_width: number,
        max_height: number,
    ) {
        const width =
            (source as HTMLImageElement).naturalWidth || source.width || 0;
        const height =
            (source as HTMLImageElement).naturalHeight || source.height || 0;
        if (width > 0 && height > 0) return { width, height };
        return { width: max_width, height: max_height };
    }

    private async _convertImageToWebp(file: File) {
        const image = await this._loadImage(file);
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            throw new Error(i18n('SIGNAGE_MANAGER.SVC_ERR_CONVERT_IMAGE'));
        ctx.drawImage(image, 0, 0);
        const blob = await new Promise<Blob | null>((resolve) =>
            canvas.toBlob(resolve, 'image/webp', 0.92),
        );
        if (!blob)
            throw new Error(i18n('SIGNAGE_MANAGER.SVC_ERR_CONVERT_IMAGE'));
        return new File([blob], this._replaceFileExtension(file.name, 'webp'), {
            type: 'image/webp',
            lastModified: file.lastModified,
        });
    }

    private _loadImage(file: File) {
        return new Promise<HTMLImageElement>((resolve, reject) => {
            const image = new Image();
            const url = URL.createObjectURL(file);
            image.onload = () => {
                URL.revokeObjectURL(url);
                resolve(image);
            };
            image.onerror = () => {
                URL.revokeObjectURL(url);
                reject(new Error(i18n('SIGNAGE_MANAGER.SVC_ERR_LOAD_IMAGE')));
            };
            image.src = url;
        });
    }

    private _replaceFileExtension(file_name: string, next_extension: string) {
        return file_name.replace(/\.[^.]+$/, '') + `.${next_extension}`;
    }

    private _mediaValidationOptions() {
        return {
            allow_extended_video_codecs: !!this._settings.get(
                'app.media_allow_extended_video_codecs',
            ),
        };
    }

    private _generateVideoThumbnail(
        file: File,
        max_width: number,
        max_height: number,
    ) {
        return new Promise<string>((resolve, reject) => {
            const video = document.createElement('video');
            const url = URL.createObjectURL(file);
            video.muted = true;
            video.playsInline = true;
            video.preload = 'auto';
            let settled = false;
            const cleanup = () => {
                clearTimeout(timer);
                URL.revokeObjectURL(url);
                video.removeAttribute('src');
                video.load();
            };
            const capture = () => {
                if (settled) return;
                settled = true;
                const image = this._generateThumbnailFromResource(
                    video,
                    video.videoWidth,
                    video.videoHeight,
                    max_width,
                    max_height,
                );
                cleanup();
                resolve(image);
            };
            const fail = (error: unknown) => {
                if (settled) return;
                settled = true;
                cleanup();
                reject(error);
            };
            // Never leave the caller waiting on a frame that will not arrive
            const timer = setTimeout(
                () => fail(new Error('Timed out generating video thumbnail')),
                VIDEO_THUMBNAIL_TIMEOUT,
            );
            video.onseeked = capture;
            video.onloadeddata = () => {
                // `loadeddata` only promises HAVE_CURRENT_DATA, and Firefox
                // reaches it before a frame can be painted, which renders the
                // thumbnail black. Seeking and waiting for `seeked` guarantees
                // a decoded frame is presented.
                const duration = Number.isFinite(video.duration)
                    ? video.duration
                    : 0;
                const target = duration
                    ? Math.min(VIDEO_THUMBNAIL_OFFSET, duration / 2)
                    : VIDEO_THUMBNAIL_OFFSET;
                if (video.currentTime === target) {
                    capture();
                    return;
                }
                // A seek to the current position emits no `seeked` event
                video.currentTime = target;
            };
            video.onerror = () =>
                fail(new Error(i18n('SIGNAGE_MANAGER.SVC_ERR_LOAD_IMAGE')));
            video.src = url;
        });
    }

    private _generateThumbnailFromResource(
        data: CanvasImageSource,
        source_width: number,
        source_height: number,
        max_width: number,
        max_height: number,
    ) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        let thumbnail_width = source_width;
        let thumbnail_height = source_height;
        const aspect_ratio = thumbnail_width / thumbnail_height;
        if (thumbnail_width > max_width) {
            thumbnail_width = max_width;
            thumbnail_height = thumbnail_width / aspect_ratio;
        }
        if (thumbnail_height > max_height) {
            thumbnail_height = max_height;
            thumbnail_width = thumbnail_height * aspect_ratio;
        }
        /* A fractional or zero sized canvas renders nothing at all */
        const width = Math.max(1, Math.round(thumbnail_width));
        const height = Math.max(1, Math.round(thumbnail_height));
        canvas.width = width;
        canvas.height = height;
        /* JPEG has no alpha channel, so anything transparent is written out as
         * black unless the canvas is given a background first. */
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(data, 0, 0, width, height);
        return canvas.toDataURL('image/jpeg');
    }
}
