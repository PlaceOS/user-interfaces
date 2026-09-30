import {
    computed,
    debounced,
    effect,
    inject,
    Injectable,
    linkedSignal,
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
    user_groups_loaded,
    userSignal,
} from '@placeos/common';
import { loadAuthenticatedImage, openConfirmModal } from '@placeos/components';
import {
    addGroup,
    addGroupUser,
    addGroupZone,
    addSignageMedia,
    addSignagePlaylist,
    addSignageTemplate,
    addSignageTemplateMapping,
    apiEndpoint,
    addZone as createZone,
    currentGroups,
    del,
    removeZone as deleteZone,
    get,
    listSignagePlaylistApprovers,
    listSignagePlaylistMedia,
    listSignageTemplateApprovers,
    mediaThumbnail,
    PlaceCurrentGroup,
    PlaceGroup,
    type PlaceGroupQueryOptions,
    PlaceGroupUser,
    PlaceGroupZone,
    PlaceSystem,
    PlaceUser,
    PlaceZone,
    post,
    query,
    queryGroups,
    queryGroupUsers,
    queryGroupZones,
    type QueryResponse,
    querySignageMedia,
    querySignagePlaylists,
    querySignagePlugins,
    querySignageTemplates,
    querySystems,
    queryUsers,
    queryZones,
    removeGroup,
    showGroup,
    showGroupFeatures,
    removeGroupUser,
    removeGroupZone,
    removeSignageMedia,
    removeSignageMediaTag,
    removeSignagePlaylist,
    removeSignageTemplate,
    removeSignageTemplateDraft,
    removeSignageTemplateMapping,
    removeSystem,
    renameSignageMediaTag,
    requestApprovalSignagePlaylist,
    requestApprovalSignageTemplate,
    scheduleSignagePlaylistMedia,
    shareSignageMedia,
    shareSignagePlaylists,
    shareSignageTemplates,
    showSignageMedia,
    showSignagePlaylist,
    showZone,
    SignageMedia,
    SignagePlaylist,
    type SignagePlaylistApprover,
    SignagePlaylistItemSchedule,
    SignagePlaylistMedia,
    type SignagePlaylistSchedule,
    SignagePlugin,
    type SignagePluginType,
    SignageTemplate,
    type SignageTemplateApprover,
    type SignageTemplateLayout,
    updateGroup,
    updateGroupUser,
    updateGroupZone,
    updateSignageMedia,
    updateSignagePlaylist,
    updateSignagePlaylistMedia,
    updateSignagePlaylistMediaSchedule,
    updateSignageTemplate,
    updateSignageTemplateMapping,
    updateZone,
} from '@placeos/ts-client';
import { format } from 'date-fns';
import type { AiImageModalData } from './ai/ai-image-modal.component';
import { errorStatus } from './ai/ai-image.util';
import { displayZoneIds, type ZoneNode } from './displays/display-zones.util';
import {
    addSignageDisplay,
    querySignageDisplays,
    showSignageDisplay,
    updateSignageDisplay,
} from './displays/signage-display';
import {
    applyMediaView,
    DEFAULT_MEDIA_VIEW,
    isMediaViewActive,
    type MediaViewOptions,
} from './media/media-view.util';
import {
    CONFLICT_WINDOW_DAYS,
    findTakeoverConflicts,
    type TakeoverConflict,
} from './schedules/schedule-conflicts.util';
import {
    hasTakeoverSchedule,
    type ScheduleItem,
} from './schedules/signage-schedule.util';
import type {
    BulkMediaUploadItem,
    BulkMediaUploadModalData,
} from './shared/bulk-media-upload-modal.component';
import { decodeEntityNames } from './shared/decode-entity-names.util';
import type { MediaEditChanges } from './shared/media-edit-modal.component';
import type { MediaTagModalResult } from './shared/media-tag-modal.component';
import type { PlaylistRequestApprovalModalResult } from './shared/playlist-request-approval-modal.component';
import type { TemplateRequestApprovalModalResult } from './shared/template-request-approval-modal.component';
import {
    DirectoryGroup,
    SignageGroupAccess,
    signageGroupAccess,
} from './signage-group-access';
import {
    listSignageMediaTagCounts,
    type SignageMediaTagCounts,
} from './signage-media-tags.util';
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
    reorderPlaylistItemIds,
} from './signage-playlist.util';
import {
    effectiveFeatures,
    SIGNAGE_FEATURE_IDS,
    SignageFeature,
    SignageGroupFeatures,
    signageGroupFeatures,
} from './signage-features';
import { markSignageSharedGroupsChanged } from './signage-shared-groups.util';
import {
    HydratedSignageTemplateMapping,
    SignageTemplateMappingQuery,
    SignageTemplateMappingTarget,
} from './signage-template-mapping';
import { applyLayoutPositionDefaults } from './templates/template-layout.util';
import type { ZoneEditFormModel } from './zones/zone-edit-modal.component';

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
 * Absolute URL of a page the server can screenshot. Plugin URIs can be
 * relative, so resolve them the same way the preview iframe does. The server
 * only renders https pages, so anything else gives an empty string.
 */
function screenshotPageURL(url: string) {
    if (!url) return '';
    try {
        const page = new URL(url, document.baseURI);
        return page.protocol === 'https:' ? page.href : '';
    } catch {
        return '';
    }
}

const SIGNAGE_SHARE_CONFIG = {
    media: {
        title: 'SIGNAGE_MANAGER.SVC_SHARE_MEDIA_TITLE',
        success: 'SIGNAGE_MANAGER.SVC_MEDIA_SHARED',
        request: shareSignageMedia,
    },
    playlists: {
        title: 'SIGNAGE_MANAGER.SVC_SHARE_PLAYLIST_TITLE',
        success: 'SIGNAGE_MANAGER.SVC_PLAYLIST_SHARED',
        request: shareSignagePlaylists,
    },
    templates: {
        title: 'SIGNAGE_MANAGER.SVC_SHARE_TEMPLATE_TITLE',
        success: 'SIGNAGE_MANAGER.SVC_TEMPLATE_SHARED',
        request: shareSignageTemplates,
    },
} as const;

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

interface PlaylistMetaState {
    media_ids: string[];
    item_ids?: string[];
    updated_at: number;
    approved?: boolean;
    approval_requested?: boolean;
}

const PLAYLIST_META_SESSION_KEY = 'PlaceOS.SIGNAGE:playlist-meta-cache:v1';
/** Command palette search results with no matches */
const EMPTY_SEARCH_RESULTS = {
    displays: [] as PlaceSystem[],
    playlists: [] as SignagePlaylist[],
    templates: [] as SignageTemplate[],
    zones: [] as PlaceZone[],
    media: [] as SignageMedia[],
};
export type SignageSearchResults = typeof EMPTY_SEARCH_RESULTS;

/** Every display, zone and playlist in the active group */
export interface SignageInventory {
    displays: PlaceSystem[];
    zones: PlaceZone[];
    playlists: SignagePlaylist[];
}

/** A change that can give a display a new takeover schedule */
interface TakeoverChange {
    playlist_id: string;
    /** Unsaved version of the playlist */
    playlist?: SignagePlaylist;
    /** Display that the playlist is being assigned to */
    display_id?: string;
    /** Zone that the playlist is being assigned to */
    zone_id?: string;
}

/** Content that needs attention, shown on the report page */
export interface ContentReport {
    /** Displays with no playlist from the display or its zones */
    empty_displays: PlaceSystem[];
    /** Playlists not assigned to any display or zone */
    unassigned_playlists: SignagePlaylist[];
    /** Expired playlists that are still assigned */
    expired_playlists: SignagePlaylist[];
    /** Expired media that is still in a playlist */
    expired_media: { media: SignageMedia; playlists: SignagePlaylist[] }[];
    /** Takeover playlists that overlap on a display in the coming weeks */
    conflicts: TakeoverConflict[];
}

/** Most expired media items the report looks up playlists for */
const MAX_EXPIRED_MEDIA_CHECKS = 100;

function escapeHtml(text: string) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

const SIGNAGE_GROUP_STORAGE_KEY = 'PlaceOS.SIGNAGE:selected-group:v1';
/** Signage flags of a group, with the ID of the group they were read for */
interface LoadedGroupFeatures {
    group_id: string;
    features: SignageGroupFeatures;
}
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
    'features',
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

/** Whether two records are approved and draft versions of one template. */
export function isSameSignageTemplate(
    first: SignageTemplate,
    second: SignageTemplate,
) {
    return (
        (first.live_template_id || first.id) ===
        (second.live_template_id || second.id)
    );
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
    private readonly _display_overrides = signal<Record<string, PlaceSystem>>(
        {},
    );
    private readonly _zone_overrides = signal<Record<string, PlaceZone>>({});
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
    /** Features available to every group, from `app.features` */
    public readonly global_features = this._settings.signal<string[]>(
        'features',
        SIGNAGE_FEATURE_IDS,
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
    // Set once the live user has loaded. The cached user shown before it can
    // hold the wrong role, and loading groups for that role would reset the
    // saved group. Stays set through later reloads of the user.
    private readonly _user_loaded = linkedSignal<boolean, boolean>({
        source: user_groups_loaded,
        computation: (loaded, previous) => loaded || !!previous?.value,
    });
    // Idle until the live user has loaded, so the group list always matches
    // the role of the user.
    private readonly _signage_groups = resource({
        params: () =>
            this._user_loaded()
                ? {
                      user_email: this._active_user()?.email || '',
                      groups_change: this._groups_change(),
                      sys_admin: this.is_sys_admin(),
                  }
                : undefined,
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
    /** Load the signage groups again, after a failed request */
    public reloadSignageGroups() {
        this._groups_change.set(Date.now());
    }
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
        const user: Partial<Pick<PlaceUser, 'groups' | 'sys_admin'>> =
            this._current_user();
        return (
            !!user.sys_admin || (user.groups || []).includes('placeos_admin')
        );
    });
    public readonly is_support = computed(() => {
        const user: Partial<Pick<PlaceUser, 'groups' | 'support'>> =
            this._current_user();
        return (
            !!user.support || (user.groups || []).includes('placeos_support')
        );
    });
    /**
     * Whether the user can manage every group and use the "All groups" view.
     * Only system admins can change content in that view.
     */
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

    // Upper bound on group index pages, 10,000 groups at 200 per page.
    private static readonly MAX_GROUP_PAGES = 50;

    /**
     * Signage groups from the groups index, every page of them. A single page
     * would hide groups past the first 200 from the selector and group admin.
     * Stops after `MAX_GROUP_PAGES` pages.
     */
    private async _queryManageableGroups(params: PlaceGroupQueryOptions = {}) {
        let page = await queryGroups({
            limit: 200,
            fields: SIGNAGE_GROUP_FIELDS,
            subsystem: 'signage',
            ...params,
        } as PlaceGroupQueryOptions);
        const data = [...(page.data || [])];
        for (let i = 1; i < SignageService.MAX_GROUP_PAGES; i++) {
            const next = page.data?.length ? page.next?.() : null;
            if (!next) break;
            page = await next;
            data.push(...(page.data || []));
        }
        return this._sortGroups(
            data.filter((group) => group.subsystems?.includes('signage')),
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
    public readonly can_create = computed(() =>
        this._hasGroupPermission(SignageGroupPermission.Create),
    );
    public readonly can_update = computed(() =>
        this._hasGroupPermission(SignageGroupPermission.Update),
    );
    public readonly can_delete = computed(() =>
        this._hasGroupPermission(SignageGroupPermission.Delete),
    );
    public readonly can_update_media_tags = computed(() =>
        this._api_group_id() ? this.can_update() : this.is_sys_admin(),
    );
    public readonly can_delete_tagged_media = computed(() =>
        this._api_group_id() ? this.can_delete() : this.is_sys_admin(),
    );
    public readonly can_delete_displays = this.is_sys_admin;
    public readonly can_approve = computed(() =>
        this._hasGroupPermission(SignageGroupPermission.Approve),
    );
    public readonly can_share = computed(() =>
        this._hasGroupPermission(SignageGroupPermission.Share),
    );
    public readonly is_admin = computed(() =>
        this._hasGroupPermission(SignageGroupPermission.Manage),
    );
    public readonly can_manage_zones = this.is_admin;

    // Flags that allow no feature and no plugin
    private static readonly NO_GROUP_FEATURES: SignageGroupFeatures = {
        features: [],
        available_plugins: [],
    };
    // Effective signage flags of the selected group, ancestors included,
    // tagged with the group they belong to. "All groups" has no flags. A 404
    // means the backend has no group features route, so the group sets no
    // limits. Any other failed read allows nothing.
    private readonly _group_features = resource({
        params: () => ({
            group_id: this._api_group_id_debounced.value(),
            groups_change: this._groups_change(),
        }),
        loader: async ({ params }) => ({
            group_id: params.group_id,
            features: await this.loadGroupFeatures(params.group_id).catch(
                (error: unknown) =>
                    errorStatus(error) === 404
                        ? {}
                        : SignageService.NO_GROUP_FEATURES,
            ),
        }),
    });
    // A resource clears its value while it loads. Keep the last result so a
    // reload of the same group does not hide its features.
    private readonly _loaded_group_features = linkedSignal<
        LoadedGroupFeatures | undefined,
        LoadedGroupFeatures | undefined
    >({
        source: () => this._group_features.value(),
        computation: (value, previous) => value ?? previous?.value,
    });
    /** Flags of the selected group, or undefined while they load */
    private readonly _selected_group_features = computed(() => {
        const loaded = this._loaded_group_features();
        return loaded?.group_id === this._api_group_id()
            ? loaded.features
            : undefined;
    });
    /**
     * Signage settings of the selected group, ancestors included. Allows
     * nothing until they load, so the previous group's flags never apply.
     */
    public readonly group_features = computed(
        () =>
            this._selected_group_features() ?? SignageService.NO_GROUP_FEATURES,
    );
    /**
     * Whether `features` belongs to a settled group selection: the group list
     * has loaded, the selected group is picked and its flags have loaded. Also
     * true when the group list failed, as nothing more will load.
     */
    public readonly features_ready = computed(() => {
        if (!this.signage_groups_loaded()) return false;
        if (this.signage_groups_failed()) return true;
        const selection_settled =
            !!this.selected_group() ||
            (!this.selected_group_id() &&
                (this.can_manage_all_groups() ||
                    !this.signage_groups().length));
        return selection_settled && !!this._selected_group_features();
    });
    /** Features the user can use in the selected group */
    public readonly features = computed(() =>
        effectiveFeatures(this.global_features() || [], this.group_features()),
    );
    public hasFeature(feature: SignageFeature) {
        return this.features().includes(feature);
    }
    public readonly templates_enabled = computed(() =>
        this.hasFeature('templates'),
    );
    public readonly can_edit_templates = computed(() =>
        this.hasFeature('template-editing'),
    );
    public readonly can_create_templates = computed(
        () => this.can_create() && this.can_edit_templates(),
    );
    public readonly can_update_templates = computed(
        () => this.can_update() && this.can_edit_templates(),
    );
    public readonly can_delete_templates = computed(
        () => this.can_delete() && this.can_edit_templates(),
    );

    // Follows the debounced group, like the list queries it gates. Reading the
    // live group would let lists run org-wide before a group is picked.
    private readonly _can_query_group_data = computed(
        () =>
            this.can_manage_all_groups() ||
            !!this._api_group_id_debounced.value(),
    );
    // How many items to request per network page.
    private static readonly PAGE_SIZE = 200;

    // --- Media (paged incrementally as the user scrolls) ---
    // Searching is done by the backend so results are paged like the full
    // library; filtering the loaded pages would only search media that has
    // already been fetched.
    private readonly _media_search_debounced = debounced(this.search_term, 400);
    private readonly _media_items = signal<SignageMedia[]>([]);
    private readonly _media_total = signal(0);
    private readonly _media_loading = signal(false);
    private readonly _media_has_more = signal(false);
    private readonly _media_error = signal(false);
    // Bumped to fetch the first page again after it failed.
    private readonly _media_reload = signal(0);
    private _media_next: (() => QueryResponse<SignageMedia> | null) | null =
        null;
    // Bumped on every reset so in-flight pages from a stale query are discarded.
    private _media_token = 0;

    /** Sort and filters for the media library */
    public readonly media_view = signal<MediaViewOptions>(DEFAULT_MEDIA_VIEW);
    public readonly media_view_active = computed(() =>
        isMediaViewActive(this.media_view()),
    );
    /** Loaded media with the library sort and filters applied */
    public readonly media = computed(() =>
        applyMediaView(this._media_items(), this.media_view()),
    );
    public readonly media_loading = this._media_loading.asReadonly();
    public readonly media_has_more = this._media_has_more.asReadonly();
    /** Whether the last media page failed to load. `retryMedia` loads it. */
    public readonly media_error = this._media_error.asReadonly();
    /** Media count the backend reports for the current group and search. */
    public readonly media_total = this._media_total.asReadonly();

    // Reload the first page whenever the org/group/search/change inputs change.
    private readonly _reload_media = effect(() => {
        const initialised = this._org.initialised();
        const can_query = this._can_query_group_data();
        const group_id = this._api_group_id_debounced.value();
        const search = this._media_search_debounced.value().trim();
        this._change();
        this._media_reload();
        untracked(() => {
            const token = ++this._media_token;
            this._media_items.set([]);
            this._media_total.set(0);
            this._media_next = null;
            this._media_has_more.set(false);
            this._media_error.set(false);
            if (!initialised || !can_query) return;
            this._fetchMediaPage(
                querySignageMedia(
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

    // The API cannot sort or filter by type or expiry, so the browser does it.
    // That needs the whole library, so load the remaining pages one at a time
    // while a sort or filter is active. Stops when the last page is loaded.
    private readonly _load_all_media = effect(() => {
        if (!this.media_view_active()) return;
        if (!this._media_has_more() || this._media_loading()) return;
        untracked(() => this.loadMoreMedia());
    });

    public loadMoreMedia() {
        if (this._media_loading() || !this._media_has_more()) return;
        const next = this._media_next?.();
        if (!next) {
            this._media_has_more.set(false);
            return;
        }
        this._fetchMediaPage(next, this._media_token);
    }

    /** Load the media page that failed again: the next page when some pages
     * are loaded, otherwise the first page. */
    public retryMedia() {
        if (this._media_loading() || !this._media_error()) return;
        this._media_error.set(false);
        if (this._media_next) {
            this._media_has_more.set(true);
            this.loadMoreMedia();
        } else {
            this._media_reload.update((count) => count + 1);
        }
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
            // Merged by id so an item already held locally, such as one
            // just uploaded, is not shown twice when its page arrives.
            this._media_items.update((list) => {
                const by_id = new Map(list.map((item) => [item.id, item]));
                for (const item of items) by_id.set(item.id, item);
                return [...by_id.values()].sort(
                    (a, b) => b.created_at - a.created_at,
                );
            });
            this._media_next = page.next;
            this._media_total.set(page.total);
            // An empty page ends paging, so page loops cannot run forever
            this._media_has_more.set(
                items.length > 0 && this._media_items().length < page.total,
            );
        } catch {
            // Paging stops so the load-all effect cannot loop on a failing
            // page. The error state offers a retry instead.
            if (token === this._media_token) {
                this._media_has_more.set(false);
                this._media_error.set(true);
            }
        } finally {
            if (token === this._media_token) this._media_loading.set(false);
        }
    }

    // Distinct tags in use across the active group/zone's signage media, with
    // the number of media items using each. Sourced from the dedicated
    // tag-counts endpoint so the folder list and its counts stay complete no
    // matter how many media pages have been loaded.
    private readonly _media_tags = resource({
        params: () => ({
            initialised: this._org.initialised(),
            can_query: this._can_query_group_data(),
            group_id: this._api_group_id_debounced.value(),
            change: this._change(),
        }),
        loader: async ({ params }) => {
            const empty: SignageMediaTagCounts = { tags: [], counts: {} };
            if (!params.initialised || !params.can_query) return empty;
            try {
                return await listSignageMediaTagCounts(
                    this._orgZoneQueryParams({}, params.group_id),
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
    private readonly _playlists_error = signal(false);
    private readonly _playlists_total = signal(0);
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
    /** Whether the last page of playlists failed to load */
    public readonly playlists_error = this._playlists_error.asReadonly();
    /** Number of playlists that match the query, loaded or not */
    public readonly playlists_total = this._playlists_total.asReadonly();
    public readonly playlists_has_more = this._playlists_has_more.asReadonly();
    private readonly _playlists_retry = signal(0);

    private readonly _reload_playlists = effect(() => {
        const initialised = this._org.initialised();
        const can_query = this._can_query_group_data();
        const group_id = this._api_group_id_debounced.value();
        const search = this._playlist_search_debounced.value().trim();
        const change = this._change();
        this._playlists_retry();
        untracked(() => {
            const token = ++this._playlists_token;
            this._playlist_items.set([]);
            this._playlists_next = null;
            this._playlists_has_more.set(false);
            this._playlists_error.set(false);
            this._playlists_total.set(0);
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

    /** Load the playlist list again from the first page, e.g. after an error */
    public reloadPlaylists() {
        this._playlists_retry.update((count) => count + 1);
    }

    public loadMorePlaylists() {
        if (this._playlists_loading() || !this._playlists_has_more()) return;
        const next = this._playlists_next?.();
        if (!next) {
            this._playlists_has_more.set(false);
            return;
        }
        this._fetchPlaylistPage(next, this._playlists_token);
    }

    /**
     * Fetch a playlist that is not in the loaded pages, e.g. for a link to
     * it, and keep it with the loaded playlists.
     * @returns The playlist, or null when it cannot be loaded
     */
    public async loadPlaylist(playlist_id: string) {
        if (!playlist_id) return null;
        try {
            const playlist = decodeEntityNames(
                await showSignagePlaylist(
                    playlist_id,
                    this._groupQueryParams({}),
                ),
            );
            this._playlist_cache.update((cache) => ({
                ...cache,
                [playlist.id]: playlist,
            }));
            return playlist;
        } catch {
            return null;
        }
    }

    /** Changes when signage data is saved, for views that load their own data */
    public readonly data_change = this._change.asReadonly();

    private async _fetchPlaylistPage(
        query: QueryResponse<SignagePlaylist>,
        token: number,
    ) {
        this._playlists_loading.set(true);
        this._playlists_error.set(false);
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
            this._playlists_total.set(page.total);
            this._playlists_has_more.set(
                this._playlist_items().length < page.total,
            );
        } catch {
            if (token === this._playlists_token) {
                this._playlists_has_more.set(false);
                this._playlists_error.set(true);
            }
        } finally {
            if (token === this._playlists_token)
                this._playlists_loading.set(false);
        }
    }

    // --- Templates (paged incrementally as the user scrolls) ---
    // Searching is done by the backend so results are paged like the full
    // list, the same as playlists above.
    public readonly template_search_term = signal('');
    private readonly _template_search_debounced = debounced(
        this.template_search_term,
        400,
    );
    private readonly _template_items = signal<SignageTemplate[]>([]);
    private readonly _templates_loading = signal(false);
    private readonly _templates_has_more = signal(false);
    private _templates_next:
        | (() => QueryResponse<SignageTemplate> | null)
        | null = null;
    private _templates_token = 0;

    public readonly templates = this._template_items.asReadonly();
    public readonly templates_loading = this._templates_loading.asReadonly();
    public readonly templates_has_more = this._templates_has_more.asReadonly();

    private readonly _reload_templates = effect(() => {
        const enabled = this.templates_enabled();
        const initialised = this._org.initialised();
        const can_query = this._can_query_group_data();
        const group_id = this._api_group_id_debounced.value();
        const search = this._template_search_debounced.value().trim();
        this._change();
        untracked(() => {
            const token = ++this._templates_token;
            this._template_items.set([]);
            this._templates_next = null;
            this._templates_has_more.set(false);
            if (!enabled || !initialised || !can_query) return;
            this._fetchTemplatePage(
                querySignageTemplates(
                    this._groupQueryParams(
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

    public loadMoreTemplates() {
        if (this._templates_loading() || !this._templates_has_more()) return;
        const next = this._templates_next?.();
        if (!next) {
            this._templates_has_more.set(false);
            return;
        }
        this._fetchTemplatePage(next, this._templates_token);
    }

    private async _fetchTemplatePage(
        query: QueryResponse<SignageTemplate>,
        token: number,
    ) {
        this._templates_loading.set(true);
        try {
            const page = await query;
            if (token !== this._templates_token) return;
            const items = (page.data || []).map(decodeEntityNames);
            this._template_items.update((list) => {
                const by_id = new Map(list.map((item) => [item.id, item]));
                for (const item of items) by_id.set(item.id, item);
                return [...by_id.values()].sort((a, b) =>
                    a.name.localeCompare(b.name),
                );
            });
            this._templates_next = page.next;
            this._templates_has_more.set(
                this._template_items().length < page.total,
            );
        } catch {
            if (token === this._templates_token)
                this._templates_has_more.set(false);
        } finally {
            if (token === this._templates_token)
                this._templates_loading.set(false);
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
    private readonly _display_items = signal<PlaceSystem[]>([]);
    // Every display seen since the group last changed, keyed by id. Zone,
    // schedule and playlist views resolve displays by id, so they need the
    // whole set rather than whatever the current search narrowed it to.
    private readonly _display_cache = signal<Record<string, PlaceSystem>>({});
    private _display_cache_group: string | null = null;
    private _display_search: string | null = null;
    private readonly _displays_loading = signal(false);
    private readonly _displays_has_more = signal(false);
    private readonly _displays_total = signal(0);
    // Rows the server returned for the current query, before the signage
    // filter, so paging compares like with like against the server total.
    private _displays_loaded = 0;
    private _displays_next: (() => QueryResponse<PlaceSystem> | null) | null =
        null;
    private _displays_token = 0;

    public readonly displays = computed(() =>
        this._mergeItems(
            Object.values(this._display_cache()),
            this._display_overrides(),
        ),
    );
    public readonly displays_loading = this._displays_loading.asReadonly();
    public readonly displays_has_more = this._displays_has_more.asReadonly();
    /** Number of displays the server has for the current query */
    public readonly displays_total = this._displays_total.asReadonly();

    private readonly _reload_displays = effect(() => {
        const initialised = this._org.initialised();
        const can_query = this._can_query_group_data();
        const group_id = this._api_group_id_debounced.value();
        const search = this._display_search_debounced.value().trim();
        this._change();
        untracked(() => {
            const token = ++this._displays_token;
            // A data change on the same query keeps the loaded rows on screen
            // and reloads as many rows as were loaded, so the list does not
            // empty or drop the pages the user scrolled to.
            const same_query =
                group_id === this._display_cache_group &&
                search === this._display_search;
            const limit = same_query
                ? Math.max(SignageService.PAGE_SIZE, this._displays_loaded)
                : SignageService.PAGE_SIZE;
            this._display_search = search;
            this._displays_next = null;
            this._displays_has_more.set(false);
            if (!same_query) this._display_items.set([]);
            // Only drop the id cache when the source of the data changes, a
            // new search term still needs the displays other views look up.
            if (group_id !== this._display_cache_group) {
                this._display_cache_group = group_id;
                this._display_cache.set({});
            }
            if (!initialised || !can_query) {
                this._display_items.set([]);
                this._displays_loaded = 0;
                this._displays_total.set(0);
                return;
            }
            this._fetchDisplayPage(
                querySignageDisplays({
                    ...this._orgZoneQueryParams({}, group_id),
                    limit,
                    signage: true,
                    ...this._searchParam(search),
                }),
                token,
                true,
            );
        });
    });

    // Local edits only bridge the gap until the lists reload. Drop them when
    // the group or data changes, so a stale copy never hides newer server data
    // or sends an old version with the next patch.
    private readonly _clear_overrides = effect(() => {
        this._api_group_id();
        this._change();
        untracked(() => {
            this._display_overrides.set({});
            this._zone_overrides.set({});
        });
    });

    /**
     * Paged queries for the picker modals, which search on their own without
     * disturbing the lists behind them. Null when the user may not query.
     */
    public queryDisplays(search = ''): QueryResponse<PlaceSystem> | null {
        if (!this._canQueryLists()) return null;
        return querySignageDisplays({
            ...this._orgZoneQueryParams({}),
            limit: SignageService.PAGE_SIZE,
            signage: true,
            ...this._searchParam(search),
        });
    }

    public queryPlaylists(search = ''): QueryResponse<SignagePlaylist> | null {
        if (!this._canQueryLists()) return null;
        return querySignagePlaylists({
            ...this._orgZoneQueryParams({ limit: SignageService.PAGE_SIZE }),
            ...this._searchParam(search),
        });
    }

    public queryMedia(search = ''): QueryResponse<SignageMedia> | null {
        if (!this._canQueryLists()) return null;
        return querySignageMedia({
            ...this._orgZoneQueryParams({ limit: SignageService.PAGE_SIZE }),
            ...this._searchParam(search),
        });
    }

    public async listApprovedTemplates() {
        if (!this._canQueryLists()) return [];
        const result = await query<SignageTemplate>({
            path: 'signage/templates',
            query_params: this._groupQueryParams({
                approved: true,
                limit: 10_000,
            }),
            fn: (data) => new SignageTemplate(data),
        });
        return result.data;
    }

    /** Refresh assignment counts after template mappings change. */
    public readonly template_mappings_revision = signal(0);

    public async listTemplateMappings(
        query_params: SignageTemplateMappingQuery,
    ) {
        if (!this._canQueryLists()) return [];
        const result = await query<HydratedSignageTemplateMapping>({
            path: 'signage/template_mappings',
            query_params: { ...query_params, limit: 10_000 },
            fn: (data) => new HydratedSignageTemplateMapping(data),
        });
        return result.data;
    }

    public querySelectableZones(
        search: string,
        parent_id: string,
    ): QueryResponse<PlaceZone> | null {
        if (!this._canQueryLists() || !parent_id || !search.trim()) return null;
        return queryZones({
            q: search.trim(),
            parent_id,
            limit: 2500,
            include_children_count: true,
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

    /**
     * First matches of each signage type for a search, for the command
     * palette. A type is empty when its query fails or is not available.
     * @param search Text to search for
     * @param limit Most results to return for each type
     */
    public async searchAll(search: string, limit = 5) {
        const term = search.trim();
        if (!term || !this._canQueryLists()) return EMPTY_SEARCH_RESULTS;
        const params = {
            ...this._orgZoneQueryParams({ limit }),
            ...this._searchParam(term),
        };
        const group_params = this._groupQueryParams({
            limit,
            ...this._searchParam(term),
        });
        const settle = async <T>(query: Promise<{ data?: T[] }>) => {
            try {
                const data = (await query).data || [];
                return data.slice(0, limit).map(decodeEntityNames);
            } catch {
                return [] as T[];
            }
        };
        const [displays, playlists, templates, zones, media] =
            await Promise.all([
                settle<PlaceSystem>(
                    querySystems({ ...params, signage: true } as any),
                ),
                settle(querySignagePlaylists(params)),
                this.templates_enabled()
                    ? settle(querySignageTemplates(group_params))
                    : Promise.resolve([] as SignageTemplate[]),
                settle<PlaceZone>(
                    queryZones({ ...group_params, tags: 'signage' } as any),
                ),
                settle(querySignageMedia(params)),
            ]);
        return { displays, playlists, templates, zones, media };
    }

    /**
     * Fetch every display, zone and playlist in the active group. The lists
     * on screen only hold the pages loaded so far, so checks that need the
     * full set use this instead.
     */
    public async loadSignageInventory(): Promise<SignageInventory> {
        if (!this._canQueryLists()) {
            return { displays: [], zones: [], playlists: [] };
        }
        const limit = SignageService.PAGE_SIZE;
        const group_id = this._api_group_id();
        const [displays, zones, playlists] = await Promise.all([
            this._queryAll(
                querySystems({
                    ...this._orgZoneQueryParams({}),
                    limit,
                    signage: true,
                } as any),
            ),
            this._queryAll(
                queryZones({
                    limit,
                    tags: 'signage',
                    ...(group_id ? { group_id } : {}),
                } as any),
            ),
            this._queryAll(
                querySignagePlaylists(this._orgZoneQueryParams({ limit })),
            ),
        ]);
        return { displays, zones, playlists };
    }

    /**
     * Fetch every page of a query.
     * @param max_pages Most pages to fetch, so a bad response cannot loop forever
     */
    private async _queryAll<T>(query: QueryResponse<T>, max_pages = 50) {
        const items: T[] = [];
        let page = await query;
        for (let count = 1; ; count++) {
            const data = page.data || [];
            items.push(...data);
            const next =
                data.length && count < max_pages ? page.next?.() : null;
            if (!next) break;
            page = await next;
        }
        return items.map(decodeEntityNames);
    }

    /**
     * Warn when a change would make two takeover playlists play at the same
     * time on a display, in the next few weeks.
     * @returns Whether to go ahead with the change
     */
    private async _confirmTakeoverChange(change: TakeoverChange) {
        const known =
            change.playlist ||
            this.playlists().find(({ id }) => id === change.playlist_id);
        if (known && !hasTakeoverSchedule(known)) return true;
        let inventory: SignageInventory;
        try {
            inventory = await this.loadSignageInventory();
        } catch {
            // Do not block the change when the check cannot run
            return true;
        }
        const playlist =
            change.playlist ||
            inventory.playlists.find(({ id }) => id === change.playlist_id);
        if (!playlist || !hasTakeoverSchedule(playlist)) return true;
        const withPlaylist = (item: ScheduleItem, target_id?: string) =>
            item.id === target_id && !item.playlists?.includes(playlist.id)
                ? {
                      ...item,
                      playlists: [...(item.playlists || []), playlist.id],
                  }
                : item;
        const conflicts = findTakeoverConflicts({
            displays: inventory.displays.map((item) =>
                withPlaylist(item, change.display_id),
            ),
            zones: inventory.zones.map((item) =>
                withPlaylist(item, change.zone_id),
            ),
            playlists: [
                ...inventory.playlists.filter(({ id }) => id !== playlist.id),
                playlist,
            ],
            playlist_id: playlist.id,
        });
        if (!conflicts.length) return true;
        const result = await openConfirmModal(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_TAKEOVER_CONFLICT_TITLE'),
                content: this._takeoverConflictContent(conflicts, playlist.id),
                confirm_text: i18n(
                    'SIGNAGE_MANAGER.SVC_TAKEOVER_CONFLICT_CONFIRM',
                ),
                icon: { content: 'warning' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return false;
        result.close();
        return true;
    }

    /** Find content that needs attention, for the report page */
    public async loadContentReport(now = Date.now()): Promise<ContentReport> {
        const [{ displays, zones, playlists }, expired_media] =
            await Promise.all([
                this.loadSignageInventory(),
                this._expiredMediaInPlaylists(now),
            ]);
        const zone_playlists = new Map(
            zones.map((zone) => [zone.id, zone.playlists || []]),
        );
        const assigned_ids = new Set(
            [...displays, ...zones].flatMap((item) => [
                ...(item.playlists || []),
            ]),
        );
        return {
            empty_displays: displays.filter(
                (display) =>
                    !display.playlists?.length &&
                    !(display.zones || []).some(
                        (zone_id) => zone_playlists.get(zone_id)?.length,
                    ),
            ),
            unassigned_playlists: playlists.filter(
                ({ id }) => !assigned_ids.has(id),
            ),
            expired_playlists: playlists.filter(
                (playlist) =>
                    assigned_ids.has(playlist.id) &&
                    !!playlist.valid_until &&
                    playlist.valid_until * 1000 < now,
            ),
            expired_media,
            conflicts: findTakeoverConflicts({ displays, zones, playlists }),
        };
    }

    /** Expired media that is still in a playlist, read from the media show route */
    private async _expiredMediaInPlaylists(now: number) {
        if (!this._canQueryLists()) return [];
        const media = await this._queryAll(
            querySignageMedia(
                this._orgZoneQueryParams({ limit: SignageService.PAGE_SIZE }),
            ),
        );
        const expired = media
            .filter(
                (item) => !!item.valid_until && item.valid_until * 1000 < now,
            )
            .slice(0, MAX_EXPIRED_MEDIA_CHECKS);
        const query_params = this._groupQueryParams({});
        const usage = await Promise.all(
            expired.map(async (item) => {
                try {
                    const detail = await showSignageMedia(
                        item.id,
                        query_params,
                    );
                    return { media: item, playlists: detail.playlists || [] };
                } catch {
                    return { media: item, playlists: [] as SignagePlaylist[] };
                }
            }),
        );
        return usage.filter(({ playlists }) => playlists.length);
    }

    private _takeoverConflictContent(
        conflicts: TakeoverConflict[],
        playlist_id: string,
    ) {
        const lines = conflicts.slice(0, 3).map((conflict) => {
            const other =
                conflict.playlists.find(({ id }) => id !== playlist_id) ||
                conflict.playlists[1];
            return i18n('SIGNAGE_MANAGER.SVC_TAKEOVER_CONFLICT_LINE', {
                display: escapeHtml(
                    conflict.display.display_name ||
                        conflict.display.name ||
                        '',
                ),
                playlist: escapeHtml(other.name),
                time: format(conflict.starts_at, 'EEE d MMM, HH:mm'),
            });
        });
        const hidden_count = conflicts.length - lines.length;
        if (hidden_count > 0) lines.push(`+${hidden_count}`);
        return [
            i18n(
                'SIGNAGE_MANAGER.SVC_TAKEOVER_CONFLICT_CONTENT',
                { count: conflicts.length, days: CONFLICT_WINDOW_DAYS },
                conflicts.length,
            ),
            ...lines,
        ].join('<br>');
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

    /**
     * Add a page of displays to the list.
     * @param replace Replace the loaded rows instead of appending, for a reload
     */
    private async _fetchDisplayPage(
        query: QueryResponse<PlaceSystem>,
        token: number,
        replace = false,
    ) {
        this._displays_loading.set(true);
        try {
            const page = await query;
            if (token !== this._displays_token) return;
            const rows = page.data || [];
            const items = rows.filter((item) => item.signage);
            this._displays_loaded =
                (replace ? 0 : this._displays_loaded) + rows.length;
            this._display_items.update((list) => {
                const by_id = new Map(
                    (replace ? [] : list).map((item) => [item.id, item]),
                );
                for (const item of items) by_id.set(item.id, item);
                return [...by_id.values()];
            });
            this._display_cache.update((cache) => {
                const next = { ...cache };
                for (const item of items) next[item.id] = item;
                return next;
            });
            this._displays_next = page.next;
            // Later pages can report an older total while the search index
            // catches up, which would undo the count of a display just added
            if (replace) this._displays_total.set(page.total);
            this._displays_has_more.set(
                !!page.next && this._displays_loaded < page.total,
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
            if (!params.initialised || !params.can_query)
                return [] as PlaceZone[];
            try {
                const result = await queryZones({
                    limit: 250,
                    tags: 'signage',
                    ...(params.group_id ? { group_id: params.group_id } : {}),
                } as any);
                return (result.data || []).map(decodeEntityNames);
            } catch {
                return [] as PlaceZone[];
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
            if (!params.initialised || !params.can_query)
                return [] as PlaceZone[];
            try {
                const result = await queryZones(
                    this._groupQueryParams(
                        { limit: 500, include_children_count: true },
                        params.group_id,
                    ),
                );
                return (result.data || []).map(decodeEntityNames);
            } catch {
                return [] as PlaceZone[];
            }
        },
    });
    public readonly all_zones_loading = this._all_zone_list.isLoading;
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
            if (!params.initialised || !params.can_query)
                return [] as PlaceZone[];
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
                return [] as PlaceZone[];
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

    // Plugins available to the selected group. Signage edits never change
    // plugins, so these lists follow the group but not `changed()`.
    private _pluginResource(plugin_type: SignagePluginType) {
        return resource({
            params: () => ({
                initialised: this._org.initialised(),
                can_query: this._can_query_group_data(),
                group_id: this._api_group_id_debounced.value(),
            }),
            loader: async ({ params }) => {
                if (!params.initialised || !params.can_query) {
                    return [] as SignagePlugin[];
                }
                try {
                    const result = await querySignagePlugins(
                        this._orgZoneQueryParams(
                            { limit: 500, plugin_type },
                            params.group_id,
                        ),
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
    }

    private readonly _plugins = this._pluginResource('plugin');
    private readonly _widgets = this._pluginResource('widget');
    /** Every enabled plugin, before group feature flags apply */
    public readonly all_plugins = computed(() => this._plugins.value() || []);
    /** Plugins the selected group can add to its media library */
    public readonly plugins = computed(() => {
        const allowed = this.group_features().available_plugins;
        const plugins = this.all_plugins();
        return allowed
            ? plugins.filter((plugin) => allowed.includes(plugin.id))
            : plugins;
    });
    public readonly widgets = computed(() => this._widgets.value() || []);

    public readonly selected_template = signal<SignageTemplate | null>(null);
    public readonly selected_template_requires_approval = computed(() => {
        const template = this.selected_template();
        return !!template?.id && !template.approved;
    });
    public readonly template_approval_request_loading = signal(false);
    public readonly selected_template_layout_index = signal<number | null>(
        null,
    );
    // Editable copy of the selected template's layout items, so reorders and
    // plugin changes only hit the API when explicitly saved. Resets whenever
    // the selection (or its saved layouts) change, except that unsaved edits
    // survive a refresh of the same template (details edit, approval).
    public readonly template_layout_draft = linkedSignal<
        SignageTemplate | null,
        SignageTemplateLayout[]
    >({
        source: this.selected_template,
        computation: (template, previous) => {
            const previous_template = previous?.source;
            const keep_draft =
                !!template &&
                !!previous_template &&
                isSameSignageTemplate(previous_template, template) &&
                JSON.stringify(previous.value) !==
                    JSON.stringify(previous_template.layouts ?? []);
            return keep_draft
                ? previous.value
                : structuredClone(template?.layouts ?? []);
        },
    });
    public readonly template_layout_dirty = computed(
        () =>
            JSON.stringify(this.template_layout_draft()) !==
            JSON.stringify(this.selected_template()?.layouts ?? []),
    );

    public readonly selected_playlist = signal<SignagePlaylist | null>(null);
    // Selecting a playlist loads its media; debounce so arrowing through the
    // playlist list doesn't fetch media for every intermediate selection.
    private readonly _selected_playlist_debounced = debounced(
        this.selected_playlist,
        300,
    );
    public readonly selected_playlist_item = signal<SignageMedia | null>(null);
    public readonly selected_playlist_item_index = signal<number | null>(null);
    public readonly selected_zone = signal<PlaceZone | null>(null);
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

    public readonly selected_display = signal<PlaceSystem | null>(null);
    private readonly _playlist_meta_state = signal<
        Record<string, PlaylistMetaState>
    >(loadPlaylistMetaSessionCache());
    private readonly _playlist_meta_loading = signal<Record<string, boolean>>(
        {},
    );
    private readonly _playlist_meta_queue: Record<string, SignagePlaylist> = {};
    private _playlist_meta_processing = false;

    public readonly filtered_playlists = this._playlist_items.asReadonly();

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
    public readonly filtered_displays = computed(() =>
        this._mergeItems(this._display_items(), this._display_overrides()),
    );

    /**
     * Zones of the selected display. Queried by display, as `all_zones` holds
     * only the first 500 zones of the group.
     */
    private readonly _selected_display_zones = resource({
        params: () => {
            const display = this.selected_display();
            if (!display?.id || !this._canQueryLists()) return undefined;
            return {
                id: display.id,
                zone_ids: display.zones,
                group_id: this._api_group_id(),
                change: this._change(),
            };
        },
        loader: async ({ params }) => {
            // Users without admin rights may only query zones in a group
            const { data } = await queryZones(
                this._groupQueryParams(
                    { control_system_id: params.id, limit: 500 },
                    params.group_id,
                ),
            );
            return (data || [])
                .filter(({ id }) => params.zone_ids.includes(id))
                .map(decodeEntityNames);
        },
    });
    public readonly selected_display_zones = computed(() =>
        this._selected_display_zones.hasValue()
            ? this._selected_display_zones.value()
            : [],
    );
    public readonly selected_display_zones_loading =
        this._selected_display_zones.isLoading;

    /**
     * Displays in the selected zone. Queried by zone, as the display list
     * holds only the pages loaded so far.
     */
    private readonly _selected_zone_displays = resource({
        params: () => {
            const id = this.selected_zone()?.id;
            if (!id || !this._canQueryLists()) return undefined;
            return { id, change: this._change() };
        },
        loader: ({ params }) =>
            this._queryAll(
                querySignageDisplays({
                    ...this._orgZoneQueryParams({
                        limit: SignageService.PAGE_SIZE,
                        signage: true,
                    }),
                    zone_id: params.id,
                }),
            ),
    });
    public readonly selected_zone_displays = computed(() => {
        const displays = this._selected_zone_displays.hasValue()
            ? this._selected_zone_displays.value()
            : [];
        return this._mergeItems(displays, this._display_overrides());
    });
    public readonly selected_zone_displays_loading =
        this._selected_zone_displays.isLoading;

    // Playlists of the selected display, its zones or the selected zone that
    // the loaded playlist pages do not include, fetched by id. Null while
    // loading or when the playlist cannot be loaded.
    private readonly _playlists_by_id = signal<
        Record<string, SignagePlaylist | null>
    >({});
    private _playlists_by_id_key = '';
    private readonly _load_selected_playlists = effect(() => {
        const key = `${this._api_group_id()}:${this._change()}`;
        const ids = [
            ...(this.selected_display()?.playlists || []),
            ...this.selected_display_zones().flatMap(
                ({ playlists }) => playlists || [],
            ),
            ...(this.selected_zone()?.playlists || []),
        ];
        const cache = this._playlist_cache();
        // Wait for the first page, which usually holds the playlists
        if (this._playlists_loading()) return;
        untracked(() => {
            if (key !== this._playlists_by_id_key) {
                this._playlists_by_id_key = key;
                this._playlists_by_id.set({});
            }
            const known = this._playlists_by_id();
            const missing = [...new Set(ids)].filter(
                (id) => !cache[id] && !(id in known),
            );
            if (!missing.length) return;
            const query_params = this._groupQueryParams({});
            this._playlists_by_id.update((state) => ({
                ...state,
                ...Object.fromEntries(missing.map((id) => [id, null])),
            }));
            for (const id of missing) {
                showSignagePlaylist(id, query_params)
                    .then((playlist) => {
                        if (key !== this._playlists_by_id_key) return;
                        this._playlists_by_id.update((state) => ({
                            ...state,
                            [id]: decodeEntityNames(playlist),
                        }));
                    })
                    .catch(() => null);
            }
        });
    });

    /**
     * Playlists for a list of ids, from the loaded pages or fetched by id.
     * Only the selected display, its zones and the selected zone are fetched.
     */
    public playlistsById(ids: readonly string[]) {
        const cache = this._playlist_cache();
        const fetched = this._playlists_by_id();
        return [...new Set(ids)]
            .map((id) => cache[id] || fetched[id])
            .filter((playlist): playlist is SignagePlaylist => !!playlist)
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    private readonly _playlist_change = signal(Date.now());
    public readonly playlist_media_loading = signal(false);

    // Keyed by id, so a new copy of the selected playlist from a list reload
    // does not load the media again.
    private readonly _selected_playlist_id = computed(
        () => this._selected_playlist_debounced.value()?.id || '',
    );
    private readonly _playlist_media_items = resource({
        params: () => ({
            playlist_id: this._selected_playlist_id(),
            playlist_change: this._playlist_change(),
        }),
        loader: async ({ params }) => {
            const { playlist_id } = params;
            if (!playlist_id) {
                this.playlist_media_loading.set(false);
                return null as SignagePlaylistMedia | null;
            }
            this.playlist_media_loading.set(true);
            try {
                const result = await listSignagePlaylistMedia(playlist_id);
                this._setPlaylistMediaState(
                    playlist_id,
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
            // A failed load is not an empty list. Keep the saved group so a
            // retry can restore it.
            if (!this.signage_groups_loaded() || this.signage_groups_failed()) {
                return;
            }
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
                this.can_manage_all_groups() ? '' : groups[0].group.id,
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
        const { PlaylistEditModalComponent } =
            await import('./shared/playlist-edit-modal.component');
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
        const { PlaylistEditModalComponent } =
            await import('./shared/playlist-edit-modal.component');
        const ref = this._dialog.open(PlaylistEditModalComponent, {
            data: {
                playlist,
                group_id: this._api_group_id(),
                onEdit: (id: string, data: Partial<SignagePlaylist>) =>
                    updateSignagePlaylist(id, data),
                beforeSave: (data: Partial<SignagePlaylist>) =>
                    this._confirmTakeoverChange({
                        playlist_id: playlist.id,
                        playlist: new SignagePlaylist({ ...playlist, ...data }),
                    }),
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
        try {
            await removeSignagePlaylist(playlist.id);
        } catch {
            result.close();
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ERR_REMOVE_PLAYLIST'));
            return;
        }
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

    /** Whether a playlist is being duplicated */
    public readonly playlist_duplicating = signal(false);

    /**
     * Copy a playlist with its settings, items and item schedules. The copy
     * starts unapproved and is not assigned to any display or zone. When a
     * step fails, the partial copy is removed.
     * @returns The new playlist, or null when no copy was made
     */
    public async duplicatePlaylist(playlist: SignagePlaylist) {
        if (!playlist?.id || this.playlist_duplicating()) return null;
        if (
            !this._requirePermission(
                this.can_create(),
                i18n('SIGNAGE_MANAGER.SVC_NO_CREATE_PLAYLISTS'),
            )
        )
            return null;
        this.playlist_duplicating.set(true);
        let copy: SignagePlaylist | null = null;
        try {
            const list = await listSignagePlaylistMedia(playlist.id);
            copy = await this._addSignagePlaylist({
                name: i18n('SIGNAGE_MANAGER.COPY_NAME', {
                    name: playlist.name,
                }),
                description: playlist.description,
                enabled: playlist.enabled,
                distribution: playlist.distribution,
                random: playlist.random,
                default_animation: playlist.default_animation,
                orientation: playlist.orientation,
                default_duration: playlist.default_duration,
                schedules: playlist.distribution
                    ? undefined
                    : playlist.schedules,
                valid_from: playlist.valid_from || undefined,
                valid_until: playlist.valid_until || undefined,
            });
            if (playlist.distribution) {
                // Distribution items are schedule item ids. Schedule the
                // same media again, in the same order, on the copy.
                const schedule_map = playlistItemScheduleMap(list);
                for (const item_id of list.items || []) {
                    const schedule = schedule_map.get(item_id);
                    if (!schedule?.item_id) continue;
                    await scheduleSignagePlaylistMedia(copy.id, {
                        item_id: schedule.item_id,
                        schedules: schedule.schedules,
                    });
                }
            } else {
                await updateSignagePlaylistMedia(copy.id, list.items || []);
                for (const schedule of list.schedules || []) {
                    if (!schedule.item_id || !schedule.schedules?.length) {
                        continue;
                    }
                    await updateSignagePlaylistMediaSchedule(
                        copy.id,
                        schedule.item_id,
                        {
                            item_id: schedule.item_id,
                            schedules: schedule.schedules,
                        },
                    );
                }
            }
            this.changed();
            notifySuccess(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_DUPLICATED'));
            return copy;
        } catch {
            // Show the partial copy when it cannot be removed
            if (copy?.id) {
                await removeSignagePlaylist(copy.id).catch(() =>
                    this.changed(),
                );
            }
            notifyError(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_DUPLICATE_ERROR'));
            return null;
        } finally {
            this.playlist_duplicating.set(false);
        }
    }

    public async sharePlaylist(playlist: SignagePlaylist) {
        if (!playlist?.id) return;
        await this._shareSignageItems('playlists', [playlist.id]);
    }

    public async approvePlaylist(playlist: SignagePlaylist) {
        if (!playlist?.id) return;
        if (
            !this._requirePermission(
                this.can_approve(),
                i18n('SIGNAGE_MANAGER.SVC_NO_APPROVE_PLAYLISTS'),
            )
        )
            return;
        const { PlaylistApproveModalComponent } =
            await import('./shared/playlist-approve-modal.component');
        this._dialog.open(PlaylistApproveModalComponent, {
            data: { playlist },
            panelClass: 'mobile-fullscreen',
        });
    }

    public async requestPlaylistApproval(playlist: SignagePlaylist) {
        if (!playlist?.id) return;
        if (this.playlist_approval_request_loading()) return;
        if (this.can_approve()) {
            await this.approvePlaylist(playlist);
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
        const { PlaylistRequestApprovalModalComponent } =
            await import('./shared/playlist-request-approval-modal.component');
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
        try {
            await requestApprovalSignagePlaylist(
                playlist.id,
                group.group.id,
                result.message || '',
                result.approver_id || '',
            );
        } catch {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ERR_REQUEST_APPROVAL'));
            return;
        }
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
        const previous = this._playlist_media_items.value();
        let media_list: SignagePlaylistMedia;
        let new_items: string[];
        try {
            media_list = await listSignagePlaylistMedia(playlist_id);
            new_items = [...(media_list.items || [])];
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
            this._showPlaylistMedia(playlist_id, media_list, new_items);
            await updateSignagePlaylistMedia(playlist_id, new_items);
        } catch {
            this._showPlaylistMedia(playlist_id, previous);
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ERR_REMOVE_PLAYLIST_ITEMS'));
            return;
        }
        this._setPlaylistMediaState(
            playlist_id,
            new_items,
            false,
            media_list.schedules,
        );
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_ITEM_REMOVED'));
        this.changed();
    }

    public async removeMediaItemsFromPlaylist(
        playlist_id: string,
        selected_items: { id: string; index: number }[],
    ) {
        const playlist_items = selected_items.filter(
            (item) => !!item.id && item.index >= 0,
        );
        if (!playlist_id || !playlist_items.length) return false;
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS'),
            )
        )
            return false;
        const result = await openConfirmModal(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_PLAYLIST_ITEMS_TITLE'),
                content: i18n(
                    'SIGNAGE_MANAGER.SVC_REMOVE_SELECTED_PLAYLIST_ITEMS',
                    { count: playlist_items.length },
                    playlist_items.length,
                ),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return false;
        const previous = this._playlist_media_items.value();
        let media_list: SignagePlaylistMedia;
        const new_items: string[] = [];
        let removed_count = 0;
        try {
            media_list = await listSignagePlaylistMedia(playlist_id);
            new_items.push(...(media_list.items || []));
            for (const item of [...playlist_items].sort(
                (first, second) => second.index - first.index,
            )) {
                const index =
                    new_items[item.index] === item.id
                        ? item.index
                        : new_items.indexOf(item.id);
                if (index < 0) continue;
                new_items.splice(index, 1);
                removed_count++;
            }
            if (!removed_count) {
                result.close();
                return false;
            }
            this._showPlaylistMedia(playlist_id, media_list, new_items);
            await updateSignagePlaylistMedia(playlist_id, new_items);
        } catch {
            this._showPlaylistMedia(playlist_id, previous);
            result.close();
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ERR_REMOVE_PLAYLIST_ITEMS'));
            return false;
        }
        this._setPlaylistMediaState(
            playlist_id,
            new_items,
            false,
            media_list.schedules,
        );
        const selected_index = this.selected_playlist_item_index();
        if (
            selected_index !== null &&
            playlist_items.some((item) => item.index === selected_index)
        ) {
            this.selected_playlist_item.set(null);
            this.selected_playlist_item_index.set(null);
        }
        notifySuccess(
            i18n(
                'SIGNAGE_MANAGER.SVC_ITEMS_REMOVED',
                { count: removed_count },
                removed_count,
            ),
        );
        this.changed();
        result.close();
        return true;
    }

    /**
     * Save a new order of the shown playlist items. The list shows the new
     * order at once and goes back to the old order when the save fails.
     * @param media_ids Ids of the shown items, in the new order
     */
    public async reorderPlaylistMedia(
        playlist_id: string,
        media_ids: string[],
    ) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS'),
            )
        )
            return;
        const previous = this._playlist_media_items.value();
        const loaded = this._selected_playlist_id() === playlist_id;
        const items = reorderPlaylistItemIds(
            (loaded && previous?.items) || [],
            media_ids,
        );
        this._showPlaylistMedia(playlist_id, previous, items);
        try {
            await updateSignagePlaylistMedia(playlist_id, items);
        } catch {
            this._showPlaylistMedia(playlist_id, previous);
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ERR_REORDER_PLAYLIST'));
            return;
        }
        this._setPlaylistMediaState(playlist_id, items, false);
    }

    /**
     * Show a media list for the selected playlist before the server confirms
     * it, so the items do not reload. Does nothing for other playlists.
     * @param items Item ids to show in place of the ones in the list
     */
    private _showPlaylistMedia(
        playlist_id: string,
        list: SignagePlaylistMedia | null | undefined,
        items?: string[],
    ) {
        if (!list || this._selected_playlist_id() !== playlist_id) return;
        this._playlist_media_items.set(
            items ? new SignagePlaylistMedia({ ...list, items }) : list,
        );
    }

    public async editPlaylistItemSchedule(item: SignagePlaylistItemSchedule) {
        return this.editPlaylistItemSchedules([item]);
    }

    public async editPlaylistItemSchedules(
        items: SignagePlaylistItemSchedule[],
    ) {
        const playlist = this.selected_playlist();
        const schedule_items = items.filter(
            (item) => !!item?.item_id && !!(item.id || item.item_id),
        );
        if (!playlist?.id || !schedule_items.length) return false;
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS'),
            )
        )
            return false;
        const { PlaylistItemScheduleModalComponent } =
            await import('./shared/playlist-item-schedule-modal.component');
        const ref = this._dialog.open(PlaylistItemScheduleModalComponent, {
            data: {
                item: schedule_items[0],
                save: (_schedule_id, schedules) =>
                    Promise.all(
                        schedule_items.map((item) =>
                            updateSignagePlaylistMediaSchedule(
                                playlist.id,
                                item.id || item.item_id,
                                {
                                    item_id: item.item_id,
                                    schedules,
                                },
                            ),
                        ),
                    ),
            },
            panelClass: 'mobile-fullscreen',
        });
        const result = await dialogClosed(ref);
        if (result) {
            this._playlist_change.set(Date.now());
            this.changed();
        }
        return !!result;
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
        const media = this._media_items().find((item) => item.id === media_id);
        const { PlaylistItemScheduleModalComponent } =
            await import('./shared/playlist-item-schedule-modal.component');
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

    public async addTemplate() {
        if (
            !this._requirePermission(
                this.can_create_templates(),
                i18n('SIGNAGE_MANAGER.SVC_NO_CREATE_TEMPLATES'),
            )
        )
            return;
        const { TemplateEditModalComponent } =
            await import('./shared/template-edit-modal.component');
        const ref = this._dialog.open(TemplateEditModalComponent, {
            data: {
                template: new SignageTemplate({}),
                onAdd: (data: Partial<SignageTemplate>) =>
                    this._addSignageTemplate(data),
            },
            panelClass: 'mobile-fullscreen',
        });
        const result = await dialogClosed(ref);
        if (result) {
            this.changed();
        }
    }

    public async editTemplate(template: SignageTemplate) {
        if (
            !this._requirePermission(
                this.can_update_templates(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES'),
            )
        )
            return;
        const { TemplateEditModalComponent } =
            await import('./shared/template-edit-modal.component');
        const ref = this._dialog.open(TemplateEditModalComponent, {
            data: {
                template,
                group_id: this._api_group_id(),
                onEdit: (id: string, data: Partial<SignageTemplate>) =>
                    updateSignageTemplate(id, data),
            },
            panelClass: 'mobile-fullscreen',
        });
        const result = await dialogClosed(ref);
        if (result) {
            this.updateCachedTemplate(result);
            this.changed();
        }
    }

    public async editTemplateMapping(
        target: SignageTemplateMappingTarget,
        mapping: HydratedSignageTemplateMapping | null = null,
    ) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS'),
            )
        )
            return false;
        const templates = mapping ? [] : await this.listApprovedTemplates();
        const { TemplateMappingModalComponent } =
            await import('./shared/template-mapping-modal.component');
        const ref = this._dialog.open(TemplateMappingModalComponent, {
            data: {
                mapping,
                templates,
                save: (
                    template_id: string,
                    schedule: SignagePlaylistSchedule | null,
                ) =>
                    mapping
                        ? updateSignageTemplateMapping(mapping.id, { schedule })
                        : addSignageTemplateMapping({
                              ...target,
                              template_id,
                              schedule,
                          }),
            },
            panelClass: 'mobile-fullscreen',
        });
        const changed = !!(await dialogClosed(ref));
        if (changed)
            this.template_mappings_revision.update((value) => value + 1);
        return changed;
    }

    public async removeTemplateMapping(
        mapping: HydratedSignageTemplateMapping,
    ) {
        if (
            !mapping?.id ||
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS'),
            )
        )
            return false;
        const result = await openConfirmModal(
            {
                title: i18n(
                    'SIGNAGE_MANAGER.SVC_REMOVE_TEMPLATE_MAPPING_TITLE',
                ),
                content: i18n(
                    'SIGNAGE_MANAGER.SVC_REMOVE_TEMPLATE_MAPPING_CONTENT',
                    { name: mapping.template_details.name },
                ),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return false;
        try {
            await removeSignageTemplateMapping(mapping.id);
            this.template_mappings_revision.update((value) => value + 1);
            result.close();
            notifySuccess(i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_MAPPING_REMOVED'));
            return true;
        } catch (error) {
            result.close();
            notifyError(
                i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_MAPPING_REMOVE_ERROR'),
            );
            throw error;
        }
    }

    public async approveTemplate(template: SignageTemplate) {
        if (!template?.id || this._templateLayoutUnsaved(template)) return;
        if (
            !this._requirePermission(
                this.can_approve(),
                i18n('SIGNAGE_MANAGER.SVC_NO_APPROVE_TEMPLATES'),
            )
        )
            return;
        const { TemplateApproveModalComponent } =
            await import('./shared/template-approve-modal.component');
        this._dialog.open(TemplateApproveModalComponent, {
            data: { template },
            panelClass: 'mobile-fullscreen',
        });
    }

    public async requestTemplateApproval(template: SignageTemplate) {
        if (!template?.id || this.template_approval_request_loading()) return;
        if (this._templateLayoutUnsaved(template)) return;
        if (this.can_approve()) {
            await this.approveTemplate(template);
            return;
        }
        let approvers: SignageTemplateApprover[] = [];
        let group: PlaceCurrentGroup | null = null;
        this.template_approval_request_loading.set(true);
        try {
            const groups = await this._templateApprovalGroups(template);
            if (!groups.length) {
                notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_GROUPS_FOR_TEMPLATE'));
                return;
            }
            const selected_group_id = this._api_group_id();
            group =
                groups.find((item) => item.group.id === selected_group_id) ||
                groups[0];
            approvers =
                ((await listSignageTemplateApprovers(
                    group.group.id,
                )) as SignageTemplateApprover[]) || [];
        } catch {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_TEMPLATE_APPROVERS'));
        } finally {
            this.template_approval_request_loading.set(false);
        }
        if (!group) return;
        const { TemplateRequestApprovalModalComponent } =
            await import('./shared/template-request-approval-modal.component');
        const ref = this._dialog.open(TemplateRequestApprovalModalComponent, {
            data: { template, approvers },
            panelClass: 'mobile-fullscreen',
        });
        const result: TemplateRequestApprovalModalResult | undefined =
            await dialogClosed(ref);
        if (!result) return;
        try {
            await requestApprovalSignageTemplate(
                template.id,
                group.group.id,
                result.message || '',
                result.approver_id || '',
            );
        } catch {
            notifyError(
                i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_APPROVAL_REQUEST_ERROR'),
            );
            return;
        }
        this.setTemplateApprovalStatus(template.id, false, true);
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_APPROVAL_REQUESTED'));
    }

    public async removeTemplate(template: SignageTemplate) {
        if (!template?.id) return;
        if (
            !this._requirePermission(
                this.can_delete_templates(),
                i18n('SIGNAGE_MANAGER.SVC_NO_DELETE_TEMPLATES'),
            )
        )
            return;
        const result = await openConfirmModal(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_TEMPLATE_TITLE'),
                content: i18n('SIGNAGE_MANAGER.SVC_DELETE_NAMED', {
                    name: template.name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        try {
            await removeSignageTemplate(
                template.id,
                this._groupQueryParams({}),
            );
        } catch {
            result.close();
            notifyError(i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_REMOVE_ERROR'));
            return;
        }
        if (this.selected_template()?.id === template.id) {
            this.selected_template.set(null);
            this.selected_template_layout_index.set(null);
        }
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_REMOVED'));
        result.close();
    }

    /**
     * Copy a template with its settings and saved layouts. The copy starts
     * unapproved and has no template mappings.
     * @returns The new template, or null when no copy was made
     */
    public async duplicateTemplate(template: SignageTemplate) {
        if (!template?.id) return null;
        if (
            !this._requirePermission(
                this.can_create_templates(),
                i18n('SIGNAGE_MANAGER.SVC_NO_CREATE_TEMPLATES'),
            )
        )
            return null;
        try {
            const copy = await this._addSignageTemplate({
                name: i18n('SIGNAGE_MANAGER.COPY_NAME', {
                    name: template.name,
                }),
                description: template.description || undefined,
                tags: template.tags,
                background_item_id: template.background_item_id || undefined,
                full_screen_takeover: template.full_screen_takeover,
                merge: template.merge,
                layouts: (template.layouts || []).map(
                    applyLayoutPositionDefaults,
                ),
            });
            this.changed();
            notifySuccess(i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_DUPLICATED'));
            return copy;
        } catch {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_DUPLICATE_ERROR'));
            return null;
        }
    }

    public async shareTemplate(template: SignageTemplate) {
        if (!template?.id) return;
        await this._shareSignageItems('templates', [template.id]);
    }

    /** Persist the layout draft of the selected template */
    public async saveTemplateLayouts() {
        const template = this.selected_template();
        if (!template?.id || !this.template_layout_dirty()) return;
        if (
            !this._requirePermission(
                this.can_update_templates(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES'),
            )
        )
            return;
        try {
            const layouts = this.template_layout_draft().map(
                applyLayoutPositionDefaults,
            );
            const response = await updateSignageTemplate(template.id, {
                layouts,
            });
            const result = decodeEntityNames(
                new SignageTemplate({ ...response, layouts }),
            );
            this.updateCachedTemplate(result);
            // The draft is kept while dirty, so reset it to the saved layouts
            this.discardTemplateLayoutDraft();
            notifySuccess(i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_LAYOUTS_SAVED'));
        } catch {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_SAVE_ERROR'));
        }
    }

    public discardTemplateLayoutDraft() {
        this.template_layout_draft.set(
            structuredClone(this.selected_template()?.layouts ?? []),
        );
    }

    /**
     * Discard the pending draft of a template and restore its previous
     * version. Used by the approval modals.
     * @returns Whether the draft was discarded
     */
    public async undoTemplateChanges(
        template_id: string,
        previous_version: SignageTemplate,
    ) {
        if (
            !this._requirePermission(
                this.can_update_templates(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES'),
            )
        )
            return false;
        try {
            await removeSignageTemplateDraft(template_id);
        } catch {
            notifyError(i18n('SIGNAGE_MANAGER.TEMPLATE_REVERT_ERROR'));
            return false;
        }
        this.updateCachedTemplate(previous_version);
        notifySuccess(i18n('SIGNAGE_MANAGER.TEMPLATE_REVERTED'));
        this.changed();
        return true;
    }

    public setTemplateApprovalStatus(
        template_id: string,
        approved: boolean,
        approval_requested = false,
    ) {
        const template =
            this.templates().find((item) => item.id === template_id) ||
            this.selected_template();
        if (!template || template.id !== template_id) return;
        this.updateCachedTemplate(
            new SignageTemplate({
                ...template,
                approved,
                approval_requested,
            }),
        );
    }

    public updateCachedTemplate(template: SignageTemplate) {
        this._template_items.update((items) =>
            items.map((item) =>
                isSameSignageTemplate(item, template) ? template : item,
            ),
        );
        const selected_template = this.selected_template();
        if (
            selected_template &&
            isSameSignageTemplate(selected_template, template)
        ) {
            this.selected_template.set(template);
        }
    }

    /** Warn and return true when `template` has unsaved layout edits */
    private _templateLayoutUnsaved(template: SignageTemplate) {
        const selected_template = this.selected_template();
        if (
            !selected_template ||
            !isSameSignageTemplate(selected_template, template) ||
            !this.template_layout_dirty()
        )
            return false;
        notifyWarn(i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_LAYOUTS_UNSAVED'));
        return true;
    }

    private _addSignageTemplate(form_data: Partial<SignageTemplate>) {
        const group_id = this._api_group_id();
        return addSignageTemplate(
            form_data,
            group_id ? { group_id } : undefined,
        );
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

    /**
     * Whether the user can change a group's feature flags. Only system admins
     * and managers of an ancestor group can, so members of a group cannot
     * lift the limits set on it.
     */
    public canEditGroupFeatures(group: PlaceGroup | undefined) {
        if (!group?.id) return false;
        if (this.is_sys_admin()) return true;
        const groups = this.signage_groups().map((item) => item.group);
        const parent = groups.find((item) => item.id === group.parent_id);
        const ancestor_ids = new Set(
            groupHierarchy(parent, groups).map((item) => item.id),
        );
        return this.signage_groups().some(
            (item) =>
                ancestor_ids.has(item.group.id) &&
                !!(item.permissions & SignageGroupPermission.Manage),
        );
    }

    /** Read a group with its current feature flags */
    public async loadGroup(group_id: string) {
        return decodeEntityNames(await showGroup(group_id));
    }

    /** Effective signage flags of a group, including inherited values */
    public async loadGroupFeatures(group_id: string) {
        if (!group_id) return {} as SignageGroupFeatures;
        const raw = await showGroupFeatures(group_id, { subsystem: 'signage' });
        return signageGroupFeatures(raw);
    }

    /** Replace the signage flags a group sets itself. Other subsystems keep
     * their flags. */
    public async saveGroupFeatures(
        group: PlaceGroup,
        signage: SignageGroupFeatures,
    ) {
        if (!this.canEditGroupFeatures(group)) {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_EDIT_GROUP_FEATURES'));
            return null;
        }
        const features = { ...(group.features || {}), signage: { ...signage } };
        const result = await updateGroup(group.id, { features }).catch(
            (error) => {
                notifyError(i18n('SIGNAGE_MANAGER.SVC_ERR_SAVE_GROUP'));
                throw error;
            },
        );
        this._groups_change.set(Date.now());
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_GROUP_FEATURES_SAVED'));
        return result;
    }

    /** Default permissions and AD group mappings of a group */
    public async loadGroupAccess(group_id: string) {
        return signageGroupAccess(await showGroup(group_id));
    }

    /** Replace the default permissions and AD group mappings of a group.
     * System admins and managers of the group can change them. */
    public async saveGroupAccess(
        group: PlaceGroup,
        access: SignageGroupAccess,
    ) {
        if (!this.canManageSignageGroup(group.id)) {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_MANAGE_GROUP'));
            return null;
        }
        const result = await updateGroup(group.id, access).catch((error) => {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ERR_SAVE_GROUP'));
            throw error;
        });
        this._groups_change.set(Date.now());
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_GROUP_ACCESS_SAVED'));
        return signageGroupAccess(result);
    }

    /** Search the organisation directory for AD groups. Fails when the
     * domain has no staff API tenant or the directory cannot list groups. */
    public async searchDirectoryGroups(search = '') {
        const q = search.trim();
        const url = `/api/staff/v1/groups${q ? `?q=${encodeURIComponent(q)}` : ''}`;
        const list: unknown = await get(url);
        if (!Array.isArray(list)) return [];
        return list.filter(
            (item): item is DirectoryGroup => typeof item?.id === 'string',
        );
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
        // Only the edited fields. A group from a list read has defaults for
        // the fields the read left out, which would replace stored values.
        const payload = {
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
        // No permissions, so the backend applies the group's defaults
        await addGroupUser({ group_id, user_id: user.id }).catch((error) => {
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

    /**
     * Switch the signage group the app works in. An empty ID selects "All
     * groups". The lists reload when the debounced group changes.
     */
    public setSelectedGroup(group_id: string) {
        const allowed = group_id
            ? this.signage_groups().some((item) => item.group.id === group_id)
            : this.can_manage_all_groups();
        if (!allowed) return;
        this.selected_group_id.set(group_id);
        this.selected_playlist.set(null);
        this.selected_playlist_item.set(null);
        this.selected_playlist_item_index.set(null);
        this.selected_zone.set(null);
        this.selected_display.set(null);
    }

    /** Let the user pick the signage group to work in */
    public async selectGroup() {
        const { GroupSelectModalComponent } =
            await import('./shared/group-select-modal.component');
        const ref = this._dialog.open(GroupSelectModalComponent, {
            data: {
                title: i18n('SIGNAGE_MANAGER.SELECT_SIGNAGE_GROUP'),
                groups: this.signage_groups(),
                selected_group_id: this.selected_group_id(),
                show_all_groups: this.can_manage_all_groups(),
            },
            panelClass: 'mobile-fullscreen',
        });
        const group_id = await dialogClosed<string>(ref);
        if (group_id === undefined) return;
        this.setSelectedGroup(group_id);
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
        if (!this._media_items().some(({ id }) => id === item.id)) {
            this._media_total.update((total) => total + 1);
        }
        this._media_items.update((items) =>
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
        this._media_items.update((items) =>
            items.filter((item) => !removed.has(item.id)),
        );
        this._media_total.update((total) => Math.max(0, total - removed.size));
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
        item_type: keyof typeof SIGNAGE_SHARE_CONFIG,
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
        const share_config = SIGNAGE_SHARE_CONFIG[item_type];
        const { GroupSelectModalComponent } =
            await import('./shared/group-select-modal.component');
        const ref = this._dialog.open(GroupSelectModalComponent, {
            data: {
                title: i18n(share_config.title),
                groups: target_groups,
            },
            panelClass: 'mobile-fullscreen',
        });
        const group_id = await dialogClosed(ref);
        if (!group_id) return false;
        const options = { items: item_ids.join(','), to: group_id };
        await share_config.request(options);
        markSignageSharedGroupsChanged();
        notifySuccess(i18n(share_config.success));
        return true;
    }

    /**
     * Signage groups that hold the playlist. The caller prefers the selected
     * group, so only that group is returned when it is set.
     */
    private async _playlistApprovalGroups(playlist: SignagePlaylist) {
        const groups = this.signage_groups().filter(({ group }) => group.id);
        const selected_group_id = this._api_group_id();
        const selected_group = groups.find(
            ({ group }) => group.id === selected_group_id,
        );
        if (selected_group) return [selected_group];
        const matches = await Promise.all(
            groups.map(async (group) => {
                try {
                    const result = await querySignagePlaylists({
                        group_id: group.group.id,
                        limit: 500,
                    });
                    return (result.data || []).some(
                        (item) => item.id === playlist.id,
                    );
                } catch {
                    // Ignore groups the user cannot query.
                    return false;
                }
            }),
        );
        return groups.filter((_, index) => matches[index]);
    }

    /**
     * Signage groups that hold the template. The selected group is used
     * as-is, so only search the other groups when none is selected.
     */
    private async _templateApprovalGroups(template: SignageTemplate) {
        const groups = this.signage_groups().filter(({ group }) => group.id);
        const selected_group_id = this._api_group_id();
        const selected_group = groups.find(
            ({ group }) => group.id === selected_group_id,
        );
        if (selected_group) return [selected_group];
        const matches = await Promise.all(
            groups.map(async (group) => {
                try {
                    const result = await querySignageTemplates({
                        group_id: group.group.id,
                        limit: 500,
                    });
                    return (result.data || []).some(
                        (item) => item.id === template.id,
                    );
                } catch {
                    // Ignore groups the user cannot query.
                    return false;
                }
            }),
        );
        return groups.filter((_, index) => matches[index]);
    }

    /**
     * Keep a saved display until the lists reload.
     * @returns The display with its names decoded, to use for selection
     */
    private _cacheDisplay(display: PlaceSystem) {
        const item = decodeEntityNames(display);
        if (!item?.id) return item;
        this._display_overrides.update((state) => ({
            ...state,
            [item.id]: item,
        }));
        return item;
    }

    private _addDisplayToList(display: PlaceSystem) {
        const item = decodeEntityNames(display);
        if (!item?.id) return item;
        this._display_items.update((items) => [
            item,
            ...items.filter((existing) => existing.id !== item.id),
        ]);
        this._display_cache.update((cache) => ({
            ...cache,
            [item.id]: item,
        }));
        return this._cacheDisplay(item);
    }

    private _removeDisplayFromList(display_id: string) {
        this._displays_total.update((total) => Math.max(0, total - 1));
        this._display_items.update((items) =>
            items.filter((item) => item.id !== display_id),
        );
        this._display_cache.update((cache) => {
            const next = { ...cache };
            delete next[display_id];
            return next;
        });
        this._display_overrides.update((overrides) => {
            const next = { ...overrides };
            delete next[display_id];
            return next;
        });
    }

    /**
     * Keep a saved zone until the lists reload.
     * @returns The zone with its names decoded, to use for selection
     */
    private _cacheZone(zone: PlaceZone) {
        const item = decodeEntityNames(zone);
        if (!item?.id) return item;
        this._zone_overrides.update((state) => ({
            ...state,
            [item.id]: item,
        }));
        return item;
    }

    /** Apply local edits to the items in a list, sorted by name */
    private _mergeItems<
        T extends { id: string; name: string; display_name: string },
    >(list: T[], overrides: Record<string, T>) {
        return (list || [])
            .map((item) => overrides[item.id] || item)
            .sort((a, b) =>
                (a.display_name || a.name).localeCompare(
                    b.display_name || b.name,
                ),
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

    /**
     * Playlists that include any of the media items, read from the media
     * show route. Returns an empty list when the lookup fails.
     */
    private async _playlistsUsingMedia(media_ids: string[]) {
        const query_params = this._groupQueryParams({});
        try {
            const items = await Promise.all(
                media_ids.map((id) => showSignageMedia(id, query_params)),
            );
            const by_id = new Map<string, SignagePlaylist>();
            for (const playlist of items.flatMap(
                (item) => item.playlists || [],
            )) {
                if (playlist?.id) by_id.set(playlist.id, playlist);
            }
            return [...by_id.values()];
        } catch {
            return [] as SignagePlaylist[];
        }
    }

    /** Add the playlists that use the media to a delete confirmation message */
    private _withMediaUsage(content: string, playlists: SignagePlaylist[]) {
        if (!playlists.length) return content;
        const shown = playlists.slice(0, 3).map(({ name }) => name);
        const hidden_count = playlists.length - shown.length;
        const names =
            shown.join(', ') + (hidden_count > 0 ? ` +${hidden_count}` : '');
        const usage = i18n(
            'SIGNAGE_MANAGER.SVC_MEDIA_USED_IN',
            { count: playlists.length, names },
            playlists.length,
        );
        return `${content} ${usage}`;
    }

    /**
     * Remove media from the playlists that hold it, before the media is
     * deleted. Also checks cached playlists that list the media, in case the
     * media lookup failed.
     * @param media_ids Media to remove
     * @param playlist_ids Playlists that the media lookup found
     */
    private async _removeMediaFromPlaylists(
        media_ids: string[],
        playlist_ids: string[] = [],
    ) {
        const removed_ids = new Set(media_ids.filter(Boolean));
        if (!removed_ids.size) return;
        const cached_ids = Object.entries(this._playlist_meta_state())
            .filter(([, state]) =>
                (state.item_ids || state.media_ids || []).some((id) =>
                    removed_ids.has(id),
                ),
            )
            .map(([playlist_id]) => playlist_id);
        const linked_playlist_ids = [
            ...new Set([...playlist_ids, ...cached_ids]),
        ];
        if (!linked_playlist_ids.length) return;
        for (const playlist_id of linked_playlist_ids) {
            const list = await listSignagePlaylistMedia(playlist_id);
            const current_items = list.items || [];
            // Distribution playlist items are schedule item ids, so match
            // them on the media they schedule.
            const schedule_map = playlistItemScheduleMap(list);
            const updated_items = current_items.filter(
                (id) => !removed_ids.has(schedule_map.get(id)?.media?.id || id),
            );
            if (updated_items.length === current_items.length) continue;
            await updateSignagePlaylistMedia(playlist_id, updated_items);
            this._setPlaylistMediaState(
                playlist_id,
                updated_items,
                false,
                list.schedules,
            );
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
        const { MediaPreviewModalComponent } =
            await import('./shared/media-preview-modal.component');
        this._dialog.open(MediaPreviewModalComponent, {
            data: { media: item, plugin, group_id: this._api_group_id() },
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
            !this._requirePermission(
                this.can_create(),
                i18n('SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA'),
            )
        )
            return;
        if (!files) return;
        const upload_files = Array.from(files);
        if (upload_files.length > 1) {
            return this.bulkUploadMedia(upload_files);
        }
        for (const file of upload_files) {
            const prepared = await this._prepareUploadMedia(file);
            if (!prepared) continue;
            await this.editMedia(
                new SignageMedia({}),
                prepared.file,
                prepared.metadata,
            );
        }
    }

    /**
     * Upload several files through the bulk upload modal. Each created item is
     * added to the loaded media list, so the list is not fetched again: the
     * search index can lag the new records and would drop them.
     */
    public async bulkUploadMedia(files: File[]) {
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
            await import('./shared/bulk-media-upload-modal.component');
        const ref = this._dialog.open(BulkMediaUploadModalComponent, {
            data,
            panelClass: 'mobile-fullscreen',
        });
        await dialogClosed(ref);
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
            !this._requirePermission(
                this.can_create(),
                i18n('SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA'),
            )
        ) {
            throw new Error(i18n('SIGNAGE_MANAGER.SVC_PERMISSION_DENIED'));
        }
        const media_url = `${
            location.origin
        }/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`;

        let thumbnail_id = '';
        try {
            const source = await loadAuthenticatedImage(
                media_url,
                '/api/engine/v2/uploads',
            );
            const response = await fetch(source);
            const blob = await response.blob();
            const file = new File(
                [blob],
                `${media_item.name || 'image'}.${blob.type.includes('png') ? 'png' : 'jpg'}`,
                { type: blob.type || 'image/jpeg' },
            );
            const thumbnail = await this.generateThumbnailImage(file);
            if (thumbnail) {
                thumbnail_id = await this._uploadThumbnailImage(
                    thumbnail,
                    media_item.name || 'image',
                );
            }
        } catch {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_THUMBNAIL_FAILED'));
        }

        const data = {
            ...new SignageMedia({
                orientation: 'landscape',
                ...media_item,
                media_id: upload_id,
                media_uri: media_url,
                media_type: 'image',
                thumbnail_id,
            }),
        };
        for (const key in data) {
            if (!data[key]) delete data[key];
        }
        return this._addSignageMedia(data);
    }

    /** Remove a media row when the generated upload could not be claimed. */
    public async discardCreatedMedia(id: string) {
        await removeSignageMedia(id);
        this._removeMediaFromList([id]);
    }

    /** guards against a second modal while one is loading or open */
    private _ai_modal_open = false;

    /** Open the AI image modal, either to create artwork or to change some. */
    public async generateMediaWithAI(options: AiImageModalData = {}) {
        if (
            !this._requirePermission(
                this.can_create(),
                i18n('SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA'),
            )
        )
            return;
        if (
            !this._requirePermission(
                this.hasFeature(
                    options.source_upload_id ? 'ai-editing' : 'ai-generation',
                ),
                i18n('SIGNAGE_MANAGER.SVC_AI_DISABLED'),
            )
        )
            return;
        if (this._ai_modal_open) return;
        // set before the import, so a second click while it loads is ignored
        this._ai_modal_open = true;
        try {
            const { AiImageModalComponent } =
                await import('./ai/ai-image-modal.component');
            const ref = this._dialog.open(AiImageModalComponent, {
                data: options,
                panelClass: 'fullscreen-dialog',
                autoFocus: false,
                ariaLabelledBy: 'ai-image-modal-title',
            });
            const result = await dialogClosed(ref);
            this.changed();
            return result;
        } finally {
            this._ai_modal_open = false;
        }
    }

    public async editMediaWithAI(media: SignageMedia) {
        if (!media?.media_id) return;
        return this.generateMediaWithAI({
            source_upload_id: media.media_id,
            source_item_id: media.id,
            source_name: media.name,
            aspect_ratio: media.orientation === 'portrait' ? '9:16' : '16:9',
        });
    }

    public async addMediaFromPlugin(plugin: SignagePlugin) {
        if (plugin.plugin_type !== 'plugin') return;
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
        const { MediaEditModalComponent } =
            await import('./shared/media-edit-modal.component');
        const ref = this._dialog.open(MediaEditModalComponent, {
            data: {
                media,
                file,
                file_metadata,
                file_thumbnail,
                group_id: this._api_group_id(),
                plugin,
                tag_options: this.media_tags(),
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
                        file_metadata,
                        thumbnail || file_thumbnail,
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
                plugin_type: 'plugin',
            }).catch(() => ({ data: [] }));
            const all_plugins = result.data || [];
            return all_plugins.find((p: SignagePlugin) => p.id === plugin_id);
        } catch {
            return undefined;
        }
    }

    private async _addMedia(
        file: File | undefined,
        media_item: SignageMedia,
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
            } else if (
                media_item.media_type === 'webpage' ||
                media_item.media_type === 'plugin'
            ) {
                thumbnail_id = await this._screenshotThumbnail(
                    media_item.media_uri,
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
        return result;
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
            !this._requirePermission(
                this.can_create(),
                i18n('SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA'),
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
        const media_url = `${
            location.origin
        }/api/engine/v2/uploads/${encodeURIComponent(media_id)}/url`;
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

    /** Upload a media file and its generated thumbnail. */
    private async _storeMediaUpload(
        file: File,
        upload_options?: SignageUploadOptions,
    ): Promise<StoredMediaUpload> {
        const thumbnail_image = await this._generateThumbnail(
            file,
            1280,
            720,
        ).catch(() => null);
        // Resolves only once the upload is committed. Watching progress reach
        // 100 is not enough: the last chunk lands before finalisation and the
        // commit run, so a failure there would otherwise look like success.
        let media_id: string;
        if (upload_options) {
            media_id = await this._uploads.uploadFileToCompletion(
                file,
                false,
                upload_options.permissions,
                upload_options.on_progress,
            );
        } else {
            media_id =
                await this._uploads.uploadFileWithPermissionsToCompletion(file);
        }
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

    /** Normalise, validate and measure a picked file, once per upload. */
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
        return {
            file: normalized_file,
            media_type: validation.media_type,
            metadata: await this._getMediaMetadata(normalized_file),
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
            await removeSignageMedia(item.id, this._groupQueryParams({}));
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
            await this._removeMediaFromPlaylists(media_ids, playlist_ids);
        } catch {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_MEDIA_PLAYLISTS_NOT_UPDATED'));
        }
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
                ),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return false;
        result.loading(i18n('SIGNAGE_MANAGER.SVC_MEDIA_REMOVING'));
        const results = await Promise.allSettled(
            media_ids.map((id) =>
                removeSignageMedia(id, this._groupQueryParams({})),
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
        const { MediaTagsModalComponent } =
            await import('./shared/media-tags-modal.component');
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
            this._media_items.update((items) =>
                items.map((item) =>
                    saved.has(item.id)
                        ? new SignageMedia({ ...item, tags: saved.get(item.id) })
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
            !this._requirePermission(
                this.can_update_media_tags(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA'),
            )
        )
            return false;
        const { MediaTagModalComponent } =
            await import('./shared/media-tag-modal.component');
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
            const group_id = this._api_group_id();
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
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_MEDIA_TAG_RENAMED'));
        return true;
    }

    public async removeMediaTag(tag: string, count: number) {
        if (!tag) return false;
        if (
            !this._requirePermission(
                this.can_update_media_tags(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA'),
            )
        )
            return false;
        const { MediaTagModalComponent } =
            await import('./shared/media-tag-modal.component');
        const ref = this._dialog.open(MediaTagModalComponent, {
            data: {
                action: 'remove',
                tag,
                count,
                can_delete_media: this.can_delete_tagged_media(),
            },
            width: 'min(28rem, calc(100vw - 2rem))',
        });
        const result = await dialogClosed<MediaTagModalResult>(ref);
        if (result?.action !== 'remove') return false;
        if (
            result.remove_media &&
            !this._requirePermission(
                this.can_delete_tagged_media(),
                i18n('SIGNAGE_MANAGER.SVC_NO_DELETE_MEDIA'),
            )
        )
            return false;
        try {
            const group_id = this._api_group_id();
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
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_MEDIA_TAG_REMOVED'));
        return true;
    }

    public async openPlaylistSelectModal(media_id: string) {
        const { PlaylistSelectModalComponent } =
            await import('./shared/playlist-select-modal.component');
        const ref = this._dialog.open(PlaylistSelectModalComponent, {
            data: { media_id },
            panelClass: 'mobile-fullscreen',
        });
        const playlist_id = await dialogClosed(ref);
        if (!playlist_id) return;
        await this.addMediaToPlaylist(playlist_id, media_id);
    }

    public async openBulkPlaylistSelectModal(media_ids: string[]) {
        const { PlaylistSelectModalComponent } =
            await import('./shared/playlist-select-modal.component');
        const ref = this._dialog.open(PlaylistSelectModalComponent, {
            data: { media_ids },
            panelClass: 'mobile-fullscreen',
        });
        const playlist_id = await dialogClosed(ref);
        if (!playlist_id) return false;
        return this.addMediaItemsToPlaylist(playlist_id, media_ids);
    }

    public async addPlaylistToZone(zone: PlaceZone) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS'),
            )
        )
            return;
        const { PlaylistSelectModalComponent } =
            await import('./shared/playlist-select-modal.component');
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
        if (
            !(await this._confirmTakeoverChange({
                playlist_id,
                zone_id: zone.id,
            }))
        )
            return;
        const playlists = [...(zone.playlists || []), playlist_id];
        const updated = await this._patchZonePlaylists(zone, playlists);
        if (!updated) return;
        this.selected_zone.set(updated);
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_ADDED_ZONE'));
    }

    public async removePlaylistFromZone(zone: PlaceZone, playlist_id: string) {
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
        const updated = await this._patchZonePlaylists(zone, playlists);
        if (!updated) return;
        this.selected_zone.set(updated);
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_REMOVED_ZONE'));
    }

    /**
     * Save the playlists of a zone and keep the result until the lists reload.
     * @returns The saved zone, or null after showing an error when it fails
     */
    private async _patchZonePlaylists(zone: PlaceZone, playlists: string[]) {
        const updated = await updateZone(
            zone.id,
            { playlists, version: zone.version },
            'patch',
        ).catch(() => null);
        if (!updated) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ASSIGNMENT_ERROR'));
            return null;
        }
        return this._cacheZone(updated);
    }

    /**
     * Save changes to a display and keep the result until the lists reload.
     * @param error_key Translation key of the error to show when it fails
     * @returns The saved display, or null after showing an error when it fails
     */
    private async _patchDisplay(
        display: PlaceSystem,
        data: Pick<Partial<PlaceSystem>, 'playlists' | 'zones'>,
        error_key = 'SIGNAGE_MANAGER.SVC_ASSIGNMENT_ERROR',
    ) {
        const updated = await updateSignageDisplay(display.id, {
            ...data,
            version: display.version,
        }).catch(() => null);
        if (!updated) {
            notifyError(i18n(error_key));
            return null;
        }
        return this._cacheDisplay(updated);
    }

    public async addZone() {
        if (
            !this._requirePermission(
                this.can_manage_zones(),
                i18n('SIGNAGE_MANAGER.SVC_NO_MANAGE_ZONES'),
            )
        )
            return null;
        const { ZoneEditModalComponent } =
            await import('./zones/zone-edit-modal.component');
        const ref = this._dialog.open(ZoneEditModalComponent, {
            data: {
                zone: new PlaceZone({}),
                default_parent_id:
                    this.selected_zone()?.id || this.root_zones()[0]?.id || '',
                roots: this.root_zones,
                zones: this.all_zones,
                load_children: (parent_id: string) =>
                    this.zoneChildren(parent_id),
                query_zones: (search: string, parent_id: string) =>
                    this.querySelectableZones(search, parent_id),
                onSave: (zone: PlaceZone, data: ZoneEditFormModel) =>
                    this.saveZone(zone, data),
            },
            panelClass: 'mobile-fullscreen',
        });
        const result = (await dialogClosed(ref)) as PlaceZone | null;
        if (!result) return null;
        this.selected_zone.set(result);
        return result;
    }

    public async editZone(zone: PlaceZone) {
        if (!zone.tags?.includes('signage')) return null;
        if (
            !this._requirePermission(
                this.can_manage_zones(),
                i18n('SIGNAGE_MANAGER.SVC_NO_MANAGE_ZONES'),
            )
        )
            return null;
        const { ZoneEditModalComponent } =
            await import('./zones/zone-edit-modal.component');
        const ref = this._dialog.open(ZoneEditModalComponent, {
            data: {
                zone,
                roots: this.root_zones,
                zones: this.all_zones,
                load_children: (parent_id: string) =>
                    this.zoneChildren(parent_id),
                query_zones: (search: string, parent_id: string) =>
                    this.querySelectableZones(search, parent_id),
                onSave: (item: PlaceZone, data: ZoneEditFormModel) =>
                    this.saveZone(item, data),
            },
            panelClass: 'mobile-fullscreen',
        });
        return (await dialogClosed(ref)) as PlaceZone | null;
    }

    public async saveZone(zone: PlaceZone, data: ZoneEditFormModel) {
        if (
            !this._requirePermission(
                this.can_manage_zones(),
                i18n('SIGNAGE_MANAGER.SVC_NO_MANAGE_ZONES'),
            ) ||
            !data.parent_id ||
            data.parent_id === zone.id ||
            (zone.id && !zone.tags?.includes('signage'))
        ) {
            return null;
        }
        const form_data: Partial<PlaceZone> = {
            name: data.name,
            display_name: data.display_name,
            description: data.description,
            parent_id: data.parent_id,
            tags: [...new Set([...(zone.tags || []), 'signage'])],
            ...(zone.id ? { version: zone.version } : {}),
        };
        const result = await (
            zone.id ? updateZone(zone.id, form_data) : createZone(form_data)
        ).catch(() => null);
        if (!result) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_SIGNAGE_ZONE_SAVE_ERROR'));
            return null;
        }
        const saved = this._cacheZone(result);
        this.zone_tree_children_cache.set({});
        this.selected_zone.set(saved);
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_SIGNAGE_ZONE_SAVED'));
        return saved;
    }

    public async removeZone(zone: PlaceZone) {
        if (!zone?.id || !zone.tags?.includes('signage')) return false;
        if (
            !this._requirePermission(
                this.can_manage_zones(),
                i18n('SIGNAGE_MANAGER.SVC_NO_MANAGE_ZONES'),
            )
        )
            return false;
        const result = await openConfirmModal(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_SIGNAGE_ZONE_TITLE'),
                content: i18n('SIGNAGE_MANAGER.SVC_DELETE_NAMED', {
                    name: zone.display_name || zone.name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return false;
        const removed = await deleteZone(zone.id).then(
            () => true,
            () => false,
        );
        result.close();
        if (!removed) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_SIGNAGE_ZONE_REMOVE_ERROR'));
            return false;
        }
        this._zone_overrides.update((overrides) => {
            const next = { ...overrides };
            delete next[zone.id];
            return next;
        });
        this.zone_tree_children_cache.set({});
        this.zone_tree_expanded.update((expanded) => {
            const next = { ...expanded };
            delete next[zone.id];
            return next;
        });
        if (this.selected_zone()?.id === zone.id) {
            this.selected_zone.set(null);
        }
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_SIGNAGE_ZONE_REMOVED'));
        return true;
    }

    public async addDisplay() {
        if (
            !this._requirePermission(
                this.can_create(),
                i18n('SIGNAGE_MANAGER.SVC_NO_CREATE_DISPLAYS'),
            )
        )
            return null;
        const default_zone_ids = await this._defaultDisplayZoneIds();
        const { DisplayEditModalComponent } =
            await import('./displays/display-edit-modal.component');
        const ref = this._dialog.open(DisplayEditModalComponent, {
            data: {
                display: new PlaceSystem({}),
                default_zone_ids,
                ...this._displayEditModalData(),
            },
            panelClass: 'mobile-fullscreen',
        });
        const result = (await dialogClosed(ref)) as PlaceSystem | null;
        if (!result) return null;
        const display = this._addDisplayToList(result);
        this._displays_total.update((total) => total + 1);
        this.selected_display.set(display);
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_DISPLAY_SAVED'));
        return display;
    }

    public async editDisplay(display: PlaceSystem) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_DISPLAYS'),
            )
        )
            return null;
        const { DisplayEditModalComponent } =
            await import('./displays/display-edit-modal.component');
        const ref = this._dialog.open(DisplayEditModalComponent, {
            data: {
                display,
                default_zone_ids: [],
                ...this._displayEditModalData(),
            },
            panelClass: 'mobile-fullscreen',
        });
        const result = (await dialogClosed(ref)) as PlaceSystem | null;
        if (!result) return null;
        const saved = this._addDisplayToList(result);
        this.selected_display.set(saved);
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_DISPLAY_SAVED'));
        return saved;
    }

    /** Data the display edit modal needs for both new and existing displays */
    private _displayEditModalData() {
        return {
            roots: this.root_zones,
            zones: this.all_zones,
            load_children: (parent_id: string) => this.zoneChildren(parent_id),
            query_zones: (search: string, parent_id: string) =>
                this.querySelectableZones(search, parent_id),
            zone_ids: (zone: PlaceZone) => this._zoneIdsWithAncestors([zone]),
            onAdd: (data: Partial<PlaceSystem>) => addSignageDisplay(data),
            onEdit: (id: string, data: Partial<PlaceSystem>) =>
                updateSignageDisplay(id, data),
        };
    }

    public async removeDisplay(display: PlaceSystem) {
        if (!display?.id) return false;
        if (
            !this._requirePermission(
                this.can_delete_displays(),
                i18n('SIGNAGE_MANAGER.SVC_NO_DELETE_DISPLAYS'),
            )
        )
            return false;
        const result = await openConfirmModal(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_DISPLAY_TITLE'),
                content: i18n('SIGNAGE_MANAGER.SVC_DELETE_NAMED', {
                    name: display.display_name || display.name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return false;
        const used_elsewhere = !!(
            display.map_id ||
            display.email ||
            display.modules.length ||
            display.module_list.length
        );
        const request: Promise<unknown> = used_elsewhere
            ? updateSignageDisplay(display.id, { signage: false })
            : removeSystem(display.id);
        const removed = await request.then(
            () => true,
            () => false,
        );
        result.close();
        if (!removed) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_DISPLAY_REMOVE_ERROR'));
            return false;
        }
        this._removeDisplayFromList(display.id);
        if (this.selected_display()?.id === display.id) {
            this.selected_display.set(null);
        }
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_DISPLAY_REMOVED'));
        return true;
    }

    private async _defaultDisplayZoneIds() {
        const group_id = this._api_group_id();
        const active_zone =
            this._org.building || this._org.region || this._org.organisation;
        let roots: ZoneNode[] = group_id
            ? this.root_zones()
            : active_zone
              ? [active_zone]
              : [];
        if (group_id && !roots.length) {
            const result = await queryZones({
                group_id,
                limit: 500,
                include_children_count: true,
            } as any).catch(() => null);
            roots = (result?.data || []).map(decodeEntityNames);
        }
        return this._zoneIdsWithAncestors(roots);
    }

    /**
     * Ids of zones with their ancestors, parent first. A display must be in
     * the ancestors too, so playlists of a building reach its displays.
     */
    private _zoneIdsWithAncestors(zones: ZoneNode[]) {
        const known_zones = [
            ...this.all_zones(),
            this._org.organisation,
            this._org.region,
            this._org.building,
        ].filter((zone): zone is PlaceZone => !!zone?.id);
        return displayZoneIds(zones, known_zones, async (zone_id) =>
            showZone(zone_id).catch(() => null),
        );
    }

    public async addDisplayToZone(zone: PlaceZone) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS'),
            )
        )
            return;
        const { DisplaySelectModalComponent } =
            await import('./shared/display-select-modal.component');
        const ref = this._dialog.open(DisplaySelectModalComponent, {
            data: { zone_id: zone.id },
            panelClass: 'mobile-fullscreen',
        });
        const display_id = await dialogClosed(ref);
        if (!display_id) return;
        // The picker searches the backend, so the choice may be a display the
        // list never loaded.
        const display =
            this.displays().find((d) => d.id === display_id) ||
            (await showSignageDisplay(display_id).catch(() => null));
        if (!display) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ASSIGNMENT_ERROR'));
            return;
        }
        if (display.zones?.includes(zone.id)) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_DISPLAY_IN_ZONE'));
            return;
        }
        const zone_ids = await this._zoneIdsWithAncestors([zone]);
        const zones = [...new Set([...(display.zones || []), ...zone_ids])];
        const updated = await this._patchDisplay(display, { zones });
        if (!updated) return;
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_DISPLAY_ADDED_ZONE'));
    }

    public async removeDisplayFromZone(zone: PlaceZone, display_id: string) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS'),
            )
        )
            return;
        const display = [
            ...this.selected_zone_displays(),
            ...this.displays(),
        ].find((d) => d.id === display_id);
        if (!display) return;
        const zones = (display.zones || []).filter(
            (id: string) => id !== zone.id,
        );
        const updated = await this._patchDisplay(display, { zones });
        if (!updated) return;
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_DISPLAY_REMOVED_ZONE'));
    }

    public async addPlaylistToDisplay(display: PlaceSystem) {
        if (
            !this._requirePermission(
                this.can_update(),
                i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS'),
            )
        )
            return;
        const { PlaylistSelectModalComponent } =
            await import('./shared/playlist-select-modal.component');
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
        if (
            !(await this._confirmTakeoverChange({
                playlist_id,
                display_id: display.id,
            }))
        )
            return;
        const playlists = [...(display.playlists || []), playlist_id];
        const updated = await this._patchDisplay(
            display,
            { playlists },
            'SIGNAGE_MANAGER.SVC_PLAYLIST_ADD_DISPLAY_ERROR',
        );
        if (!updated) return;
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
        const { DisplaySelectModalComponent } =
            await import('./shared/display-select-modal.component');
        const ref = this._dialog.open(DisplaySelectModalComponent, {
            data: { playlist_id: playlist.id },
            panelClass: 'mobile-fullscreen',
        });
        const display_id = await dialogClosed(ref);
        if (!display_id) return;
        // The picker searches the backend, so the choice may be a display the
        // list never loaded.
        const display =
            this.displays().find((d) => d.id === display_id) ||
            (await showSignageDisplay(display_id).catch(() => {
                notifyError(
                    i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_ADD_DISPLAY_ERROR'),
                );
                return null;
            }));
        if (!display) return;
        if (display.playlists?.includes(playlist.id)) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_IN_DISPLAY'));
            return;
        }
        if (
            !(await this._confirmTakeoverChange({
                playlist_id: playlist.id,
                playlist,
                display_id: display.id,
            }))
        )
            return;
        const playlists = [...(display.playlists || []), playlist.id];
        const updated = await this._patchDisplay(
            display,
            { playlists },
            'SIGNAGE_MANAGER.SVC_PLAYLIST_ADD_DISPLAY_ERROR',
        );
        if (!updated) return;
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
        const { ZoneSelectModalComponent } =
            await import('./shared/zone-select-modal.component');
        const ref = this._dialog.open(ZoneSelectModalComponent, {
            data: { playlist_id: playlist.id },
            panelClass: 'mobile-fullscreen',
        });
        const zone_id = await dialogClosed(ref);
        if (!zone_id) return;
        // Likewise the zone picker, which may return a zone outside the list
        const zone =
            this.zones().find((z) => z.id === zone_id) ||
            (await showZone(zone_id).catch(() => null));
        if (!zone) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ASSIGNMENT_ERROR'));
            return;
        }
        if (zone.playlists?.includes(playlist.id)) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_IN_ZONE'));
            return;
        }
        if (
            !(await this._confirmTakeoverChange({
                playlist_id: playlist.id,
                playlist,
                zone_id: zone.id,
            }))
        )
            return;
        const playlists = [...(zone.playlists || []), playlist.id];
        const updated = await this._patchZonePlaylists(zone, playlists);
        if (!updated) return;
        if (this.selected_zone()?.id === zone.id) {
            this.selected_zone.set(updated);
        }
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_ZONE_ADDED_PLAYLIST'));
    }

    public async removeDisplayFromPlaylist(
        playlist: SignagePlaylist,
        display: PlaceSystem,
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
        const updated = await this._patchDisplay(display, { playlists });
        if (!updated) return;
        if (this.selected_display()?.id === display.id) {
            this.selected_display.set(updated);
        }
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_DISPLAY_REMOVED_PLAYLIST'));
    }

    public async removeZoneFromPlaylist(
        playlist: SignagePlaylist,
        zone: PlaceZone,
    ) {
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
        const updated = await this._patchZonePlaylists(zone, playlists);
        if (!updated) return;
        if (this.selected_zone()?.id === zone.id) {
            this.selected_zone.set(updated);
        }
        this.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_ZONE_REMOVED_PLAYLIST'));
    }

    public async removePlaylistFromDisplay(
        display: PlaceSystem,
        playlist_id: string,
    ) {
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
        const updated = await this._patchDisplay(display, { playlists });
        if (!updated) return;
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
            const source = await loadAuthenticatedImage(
                `${location.origin}/api/engine/v2/uploads/${encodeURIComponent(screenshot_id)}/url`,
                '/api/engine/v2/uploads',
            );
            const blob = await (await fetch(source)).blob();
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
