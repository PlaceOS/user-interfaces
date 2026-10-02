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
    notifySuccess,
    notifyWarn,
    OrganisationService,
} from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import {
    addSignagePlaylist,
    listSignagePlaylistApprovers,
    listSignagePlaylistMedia,
    mediaThumbnail,
    PlaceCurrentGroup,
    type QueryResponse,
    querySignagePlaylists,
    removeSignagePlaylist,
    requestApprovalSignagePlaylist,
    scheduleSignagePlaylistMedia,
    showSignagePlaylist,
    SignageMedia,
    SignagePlaylist,
    type SignagePlaylistApprover,
    SignagePlaylistItemSchedule,
    SignagePlaylistMedia,
    updateSignagePlaylist,
    updateSignagePlaylistMedia,
    updateSignagePlaylistMediaSchedule,
} from '@placeos/ts-client';
import { format } from 'date-fns';
import {
    CONFLICT_WINDOW_DAYS,
    findTakeoverConflicts,
    type TakeoverConflict,
} from '../schedules/schedule-conflicts.util';
import {
    hasTakeoverSchedule,
    type ScheduleItem,
} from '../schedules/signage-schedule.util';
import { decodeEntityNames } from '../shared/decode-entity-names.util';
import { PagedList } from '../shared/paged-list';
import { byName } from '../shared/paged-search';
import type { PlaylistRequestApprovalModalResult } from '../shared/playlist-request-approval-modal.component';
import { SignageContextService } from '../signage-context.service';
import {
    type SignageInventory,
    SignageInventoryService,
} from '../signage-inventory.service';
import {
    playlistAnimation,
    playlistItemScheduleMap,
    playlistMediaIds,
    playlistMediaItems,
    reorderPlaylistItemIds,
} from '../signage-playlist.util';
import { dialogClosed, PAGE_SIZE, searchParam } from '../signage-service.util';

interface PlaylistMetaState {
    media_ids: string[];
    item_ids?: string[];
    updated_at: number;
    approved?: boolean;
    approval_requested?: boolean;
}

const PLAYLIST_META_SESSION_KEY = 'PlaceOS.SIGNAGE:playlist-meta-cache:v1';

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

function escapeHtml(text: string) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
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

/**
 * Signage playlists, the selected playlist and its media, approvals and
 * takeover checks
 */
@Injectable({
    providedIn: 'root',
})
export class SignagePlaylistService {
    private readonly _org = inject(OrganisationService);
    private readonly _dialog = inject(MatDialog);
    private readonly _context = inject(SignageContextService);
    private readonly _inventory_service = inject(SignageInventoryService);

    // --- Playlists (paged incrementally as the user scrolls) ---
    // Searching is done by the backend so results are paged like the full
    // list; filtering the loaded pages would only search playlists that have
    // already been fetched.
    public readonly playlist_search_term = signal('');
    private readonly _playlist_search_debounced = debounced(
        this.playlist_search_term,
        400,
    );
    // Keep playlists seen outside the current search available to display,
    // zone and schedule views, which resolve their playlist ids from this list.
    private readonly _playlist_cache = signal<Record<string, SignagePlaylist>>(
        {},
    );
    private _playlist_cache_group: string | null = null;
    private _playlist_cache_change: number | null = null;
    private readonly _playlist_list = new PagedList<SignagePlaylist>({
        sort: byName,
        on_page: (items) =>
            this._playlist_cache.update((cache) => {
                const next = { ...cache };
                for (const item of items) next[item.id] = item;
                return next;
            }),
    });

    public readonly playlists = computed(() =>
        Object.values(this._playlist_cache()).sort(byName),
    );
    public readonly playlists_loading = this._playlist_list.loading;
    /** Whether the last page of playlists failed to load */
    public readonly playlists_error = this._playlist_list.error;
    /** Number of playlists that match the query, loaded or not */
    public readonly playlists_total = this._playlist_list.total;
    public readonly playlists_has_more = this._playlist_list.has_more;
    private readonly _playlists_retry = signal(0);

    private readonly _reload_playlists = effect(() => {
        const initialised = this._org.initialised();
        const can_query = this._context.can_query_group_data();
        const group_id = this._context.api_group_id_debounced.value();
        const search = this._playlist_search_debounced.value().trim();
        const change = this._context.data_change();
        this._playlists_retry();
        untracked(() => {
            if (
                group_id !== this._playlist_cache_group ||
                change !== this._playlist_cache_change
            ) {
                this._playlist_cache_group = group_id;
                this._playlist_cache_change = change;
                this._playlist_cache.set({});
            }
            this._playlist_list.reset(
                initialised && can_query
                    ? querySignagePlaylists(
                          this._context.orgZoneQueryParams(
                              { limit: PAGE_SIZE, ...searchParam(search) },
                              group_id,
                          ),
                      )
                    : null,
            );
        });
    });

    /** Load the playlist list again from the first page, e.g. after an error */
    public reloadPlaylists() {
        this._playlists_retry.update((count) => count + 1);
    }

    public loadMorePlaylists() {
        this._playlist_list.loadMore();
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
                    this._context.groupQueryParams({}),
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

    public queryPlaylists(search = ''): QueryResponse<SignagePlaylist> | null {
        if (!this._context.canQueryLists()) return null;
        return querySignagePlaylists({
            ...this._context.orgZoneQueryParams({ limit: PAGE_SIZE }),
            ...searchParam(search),
        });
    }

    /**
     * Warn when a change would make two takeover playlists play at the same
     * time on a display, in the next few weeks.
     * @returns Whether to go ahead with the change
     */
    public async confirmTakeoverChange(change: TakeoverChange) {
        const known =
            change.playlist ||
            this.playlists().find(({ id }) => id === change.playlist_id);
        if (known && !hasTakeoverSchedule(known)) return true;
        let inventory: SignageInventory;
        try {
            inventory = await this._inventory_service.loadSignageInventory();
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

    // Selections are cleared when the user switches group
    public readonly selected_playlist = linkedSignal<
        number,
        SignagePlaylist | null
    >({
        source: this._context.group_switch,
        computation: () => null,
    });
    // Selecting a playlist loads its media; debounce so arrowing through the
    // playlist list doesn't fetch media for every intermediate selection.
    private readonly _selected_playlist_debounced = debounced(
        this.selected_playlist,
        300,
    );
    public readonly selected_playlist_item = linkedSignal<
        number,
        SignageMedia | null
    >({
        source: this._context.group_switch,
        computation: () => null,
    });
    public readonly selected_playlist_item_index = linkedSignal<
        number,
        number | null
    >({
        source: this._context.group_switch,
        computation: () => null,
    });

    private readonly _playlist_meta_state = signal<
        Record<string, PlaylistMetaState>
    >(loadPlaylistMetaSessionCache());
    private readonly _playlist_meta_loading = signal<Record<string, boolean>>(
        {},
    );
    private readonly _playlist_meta_queue: Record<string, SignagePlaylist> = {};
    private _playlist_meta_processing = false;

    public readonly filtered_playlists = this._playlist_list.items;

    public readonly selected_playlist_requires_approval = computed(() => {
        const playlist = this.selected_playlist();
        if (!playlist?.id) return false;
        const approvals = this.playlist_approval_status();
        return playlist.id in approvals && !approvals[playlist.id];
    });
    public readonly playlist_approval_status = computed(() =>
        this._metaFlags('approved'),
    );
    public readonly playlist_approval_requested_status = computed(() =>
        this._metaFlags('approval_requested'),
    );
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

    // Playlists that a tracked view shows but the loaded playlist pages do
    // not include, fetched by id. Null while loading or when the playlist
    // cannot be loaded.
    private readonly _playlists_by_id = signal<
        Record<string, SignagePlaylist | null>
    >({});
    private _playlists_by_id_key = '';
    // Playlist ids of the views that resolve playlists by id
    private readonly _tracked_ids = signal<(() => readonly string[])[]>([]);
    private readonly _load_tracked_playlists = effect(() => {
        const key = `${this._context.api_group_id()}:${this._context.data_change()}`;
        const ids = this._tracked_ids().flatMap((source) => source());
        const cache = this._playlist_cache();
        // Wait for the first page, which usually holds the playlists
        if (this.playlists_loading()) return;
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
            const query_params = this._context.groupQueryParams({});
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
     * Fetch the playlists of a view that the loaded pages lack, such as the
     * playlists of the selected display. The ids are read in an effect, so
     * the fetch follows the signals that `ids` reads.
     */
    public trackPlaylistIds(ids: () => readonly string[]) {
        this._tracked_ids.update((list) => [...list, ids]);
    }

    /**
     * Playlists for a list of ids, from the loaded pages or fetched by id.
     * Only ids passed to `trackPlaylistIds` are fetched.
     */
    public playlistsById(ids: readonly string[]) {
        const cache = this._playlist_cache();
        const fetched = this._playlists_by_id();
        return [...new Set(ids)]
            .map((id) => cache[id] || fetched[id])
            .filter((playlist): playlist is SignagePlaylist => !!playlist)
            .sort(byName);
    }

    private readonly _playlist_change = signal(Date.now());

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
            if (!playlist_id) return null as SignagePlaylistMedia | null;
            const result = await listSignagePlaylistMedia(playlist_id);
            this._setPlaylistMediaState(playlist_id, result.items || [], {
                approved: result.approved,
                approval_requested: result.approval_requested,
                schedules: result.schedules,
            });
            return result;
        },
    });
    /** Whether the items of the selected playlist are loading */
    public readonly playlist_media_loading = computed(() =>
        this._playlist_media_items.isLoading(),
    );
    /** Whether the items of the selected playlist failed to load */
    public readonly playlist_media_error = computed(
        () => this._playlist_media_items.status() === 'error',
    );
    public readonly playlist_media_items = computed(() =>
        playlistMediaItems(this._mediaList() || {}),
    );
    public readonly playlist_item_schedules = computed(() =>
        playlistItemScheduleMap(this._mediaList() || {}),
    );
    public readonly playlist_item_schedule_list = computed(
        () => this._mediaList()?.schedules || [],
    );

    /** Load the items of the selected playlist again, e.g. after an error */
    public reloadPlaylistMedia() {
        this._playlist_media_items.reload();
    }

    /** Media list of the selected playlist. Null while none is loaded. */
    private _mediaList() {
        return this._playlist_media_items.hasValue()
            ? this._playlist_media_items.value()
            : null;
    }

    public async addPlaylist() {
        if (
            !this._context.requirePermission(
                this._context.can_create(),
                'SIGNAGE_MANAGER.SVC_NO_CREATE_PLAYLISTS',
            )
        )
            return;
        const { PlaylistEditModalComponent } =
            await import('../shared/playlist-edit-modal.component');
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
            this._context.changed();
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
            !this._context.requirePermission(
                this._context.can_update(),
                'SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS',
            )
        )
            return;
        const { PlaylistEditModalComponent } =
            await import('../shared/playlist-edit-modal.component');
        const ref = this._dialog.open(PlaylistEditModalComponent, {
            data: {
                playlist,
                group_id: this._context.api_group_id(),
                onEdit: (id: string, data: Partial<SignagePlaylist>) =>
                    updateSignagePlaylist(id, data),
                beforeSave: (data: Partial<SignagePlaylist>) =>
                    this.confirmTakeoverChange({
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
            this._context.changed();
        }
    }

    public async removePlaylist(playlist: SignagePlaylist) {
        if (!playlist?.id) return;
        if (
            !this._context.requirePermission(
                this._context.can_delete(),
                'SIGNAGE_MANAGER.SVC_NO_DELETE_PLAYLISTS',
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
        this._context.changed();
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
            !this._context.requirePermission(
                this._context.can_create(),
                'SIGNAGE_MANAGER.SVC_NO_CREATE_PLAYLISTS',
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
                default_animation: playlistAnimation(playlist),
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
            this._context.changed();
            notifySuccess(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_DUPLICATED'));
            return copy;
        } catch {
            // Show the partial copy when it cannot be removed
            if (copy?.id) {
                await removeSignagePlaylist(copy.id).catch(() =>
                    this._context.changed(),
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
        await this._context.shareItems('playlists', [playlist.id]);
    }

    public async approvePlaylist(playlist: SignagePlaylist) {
        if (!playlist?.id) return;
        if (
            !this._context.requirePermission(
                this._context.can_approve(),
                'SIGNAGE_MANAGER.SVC_NO_APPROVE_PLAYLISTS',
            )
        )
            return;
        const { PlaylistApproveModalComponent } =
            await import('../shared/playlist-approve-modal.component');
        this._dialog.open(PlaylistApproveModalComponent, {
            data: { playlist },
            panelClass: 'mobile-fullscreen',
        });
    }

    public async requestPlaylistApproval(playlist: SignagePlaylist) {
        if (!playlist?.id) return;
        if (this.playlist_approval_request_loading()) return;
        if (this._context.can_approve()) {
            await this.approvePlaylist(playlist);
            return;
        }
        let approvers: SignagePlaylistApprover[] = [];
        let group: PlaceCurrentGroup | null = null;
        this.playlist_approval_request_loading.set(true);
        try {
            [group] = await this._context.groupsHolding(
                playlist.id,
                (group_id) => querySignagePlaylists({ group_id, limit: 500 }),
            );
            if (!group) {
                notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_GROUPS_FOR_PLAYLIST'));
                return;
            }
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
            await import('../shared/playlist-request-approval-modal.component');
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
            !this._context.requirePermission(
                this._context.can_update(),
                'SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS',
            )
        )
            return;
        const previous = this._mediaList();
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
        this._setPlaylistMediaState(playlist_id, new_items, {
            approved: false,
            schedules: media_list.schedules,
        });
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_ITEM_REMOVED'));
        this._context.changed();
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
            !this._context.requirePermission(
                this._context.can_update(),
                'SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS',
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
        const previous = this._mediaList();
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
        this._setPlaylistMediaState(playlist_id, new_items, {
            approved: false,
            schedules: media_list.schedules,
        });
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
        this._context.changed();
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
            !this._context.requirePermission(
                this._context.can_update(),
                'SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS',
            )
        )
            return;
        const previous = this._mediaList();
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
        this._setPlaylistMediaState(playlist_id, items, { approved: false });
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

    public async editPlaylistItemSchedules(
        items: SignagePlaylistItemSchedule[],
    ) {
        const playlist = this.selected_playlist();
        const schedule_items = items.filter(
            (item) => !!item?.item_id && !!(item.id || item.item_id),
        );
        if (!playlist?.id || !schedule_items.length) return false;
        if (
            !this._context.requirePermission(
                this._context.can_update(),
                'SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS',
            )
        )
            return false;
        const { PlaylistItemScheduleModalComponent } =
            await import('../shared/playlist-item-schedule-modal.component');
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
            this._context.changed();
        }
        return !!result;
    }

    public refreshPlaylist(playlist_id: string) {
        if (!playlist_id) return;
        this._removePlaylistMediaState(playlist_id);
        if (this.selected_playlist()?.id === playlist_id) {
            this._playlist_change.set(Date.now());
        }
        this._context.changed();
    }

    private async _scheduleMediaForDistributionPlaylist(
        playlist_id: string,
        media_id: string,
        media?: SignageMedia,
    ) {
        const { PlaylistItemScheduleModalComponent } =
            await import('../shared/playlist-item-schedule-modal.component');
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
                        { approved: false, schedules: media_list.schedules },
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

    private _addSignagePlaylist(form_data: Partial<SignagePlaylist>) {
        return addSignagePlaylist(
            form_data,
            this._context.groupQueryParams({}),
        );
    }

    private async _updatePlaylistMedia(playlist_id: string, list: string[]) {
        if (
            !this._context.requirePermission(
                this._context.can_update(),
                'SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS',
            )
        )
            return;
        await updateSignagePlaylistMedia(playlist_id, list);
        this._setPlaylistMediaState(playlist_id, list, { approved: false });
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_UPDATED'));
        this._playlist_change.set(Date.now());
    }

    /**
     * The playlist record, from the loaded pages or fetched by ID. Pickers
     * search the backend, so their playlist may not be in the loaded pages.
     * @throws When the playlist cannot be loaded
     */
    private async _playlistRecord(playlist_id: string) {
        const playlist =
            this._playlist_cache()[playlist_id] ||
            (await this.loadPlaylist(playlist_id));
        if (!playlist) throw new Error(`Playlist ${playlist_id} not found`);
        return playlist;
    }

    /**
     * Add media to the end of a playlist. A distribution playlist asks for
     * the schedule of the media first. Shows an error when the add fails.
     * @param media Record of the media, shown in the schedule modal
     */
    public async addMediaToPlaylist(
        playlist_id: string,
        media_id: string,
        media?: SignageMedia,
    ) {
        if (
            !this._context.requirePermission(
                this._context.can_update(),
                'SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS',
            )
        )
            return;
        try {
            const [playlist, media_list] = await Promise.all([
                this._playlistRecord(playlist_id),
                listSignagePlaylistMedia(playlist_id),
            ]);
            if (media_list.items?.includes(media_id)) {
                const result = await openConfirmModal(
                    {
                        title: i18n('SIGNAGE_MANAGER.SVC_ADD_DUPLICATE_TITLE'),
                        content: i18n(
                            'SIGNAGE_MANAGER.SVC_ADD_DUPLICATE_CONTENT',
                        ),
                        icon: { content: 'playlist_add' },
                    },
                    this._dialog,
                );
                if (result.reason !== 'done') return;
                result.close();
            }
            if (playlist.distribution) {
                await this._scheduleMediaForDistributionPlaylist(
                    playlist_id,
                    media_id,
                    media,
                );
                return;
            }
            await this._updatePlaylistMedia(playlist_id, [
                ...(media_list.items || []),
                media_id,
            ]);
        } catch {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ERR_ADD_PLAYLIST_ITEMS'));
        }
    }

    /**
     * Add media items that the playlist does not hold yet to its end.
     * Shows an error when the add fails.
     * @param media Records of the media, shown in the schedule modal of a
     * distribution playlist
     * @returns Whether the media was added
     */
    public async addMediaItemsToPlaylist(
        playlist_id: string,
        media_ids: string[],
        media: SignageMedia[] = [],
    ) {
        if (
            !this._context.requirePermission(
                this._context.can_update(),
                'SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS',
            )
        )
            return false;
        const unique_media_ids = [...new Set(media_ids)].filter(Boolean);
        if (!playlist_id || !unique_media_ids.length) return false;
        try {
            const [playlist, media_list] = await Promise.all([
                this._playlistRecord(playlist_id),
                listSignagePlaylistMedia(playlist_id),
            ]);
            const existing_items = media_list.items || [];
            const new_media_ids = unique_media_ids.filter(
                (id) => !existing_items.includes(id),
            );
            if (!new_media_ids.length) {
                notifyWarn(i18n('SIGNAGE_MANAGER.SVC_MEDIA_ALREADY_IN'));
                return false;
            }
            if (playlist.distribution) {
                for (const media_id of new_media_ids) {
                    const added =
                        await this._scheduleMediaForDistributionPlaylist(
                            playlist_id,
                            media_id,
                            media.find(({ id }) => id === media_id),
                        );
                    if (!added) return false;
                }
                return true;
            }
            await this._updatePlaylistMedia(playlist_id, [
                ...existing_items,
                ...new_media_ids,
            ]);
            return true;
        } catch {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ERR_ADD_PLAYLIST_ITEMS'));
            return false;
        }
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

    /**
     * Keep the items and approval state of a playlist for its list row.
     * @param state Approval flags and item schedules. A flag that is not set
     * keeps its value, except that a local change (`approved: false`) also
     * clears the approval request.
     */
    private _setPlaylistMediaState(
        playlist_id: string,
        item_ids: string[],
        state: {
            approved?: boolean;
            approval_requested?: boolean;
            schedules?: SignagePlaylistItemSchedule[];
        } = {},
    ) {
        const { approved, approval_requested, schedules } = state;
        // Distribution playlist items are schedule item ids; map them to the
        // scheduled media ids so thumbnail URLs resolve.
        const schedule_map = playlistItemScheduleMap({
            schedules: schedules || this._mediaList()?.schedules,
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
                approval_requested ??
                (approved === false
                    ? false
                    : (current_state?.approval_requested ?? false)),
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
     * Remove media from the playlists that hold it, before the media is
     * deleted. Also checks cached playlists that list the media, in case the
     * media lookup failed.
     * @param media_ids Media to remove
     * @param playlist_ids Playlists that the media lookup found
     */
    public async removeMediaFromPlaylists(
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
            this._setPlaylistMediaState(playlist_id, updated_items, {
                approved: false,
                schedules: list.schedules,
            });
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

    /** Playlist IDs with a boolean meta flag, mapped to its value */
    private _metaFlags(key: 'approved' | 'approval_requested') {
        const result: Record<string, boolean> = {};
        for (const [playlist_id, data] of Object.entries(
            this._playlist_meta_state(),
        )) {
            if (typeof data[key] === 'boolean') result[playlist_id] = data[key];
        }
        return result;
    }
}
