import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import {
    current_user,
    currentUser,
    notifyError,
    notifyInfo,
    notifySuccess,
    notifyWarn,
    OrganisationService,
    SettingsService,
    UploadsService,
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
    shareSignageMedia,
    shareSignagePlaylists,
    SignageMedia,
    SignagePlaylist,
    SignagePlugin,
    updateGroup,
    updateGroupUser,
    updateGroupZone,
    updateSignageMedia,
    updateSignagePlaylist,
    updateSignagePlaylistMedia,
    updateSystem,
    updateZone,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, lastValueFrom, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    filter,
    map,
    shareReplay,
    startWith,
    switchMap,
    tap,
} from 'rxjs/operators';
import { DisplaySelectModalComponent } from './shared/display-select-modal.component';
import { GroupSelectModalComponent } from './shared/group-select-modal.component';
import { MediaEditModalComponent } from './shared/media-edit-modal.component';
import { MediaPreviewModalComponent } from './shared/media-preview-modal.component';
import { PlaylistApproveModalComponent } from './shared/playlist-approve-modal.component';
import { PlaylistEditModalComponent } from './shared/playlist-edit-modal.component';
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

interface PreparedUploadMedia {
    file: File;
    media_type: 'image' | 'video';
    metadata: SignageMediaMetadata;
}

interface PlaylistMetaState {
    media_ids: string[];
    updated_at: number;
    approved?: boolean;
}

const PLAYLIST_META_SESSION_KEY = 'PlaceOS.SIGNAGE:playlist-meta-cache:v1';
const SIGNAGE_GROUP_STORAGE_KEY = 'PlaceOS.SIGNAGE:selected-group:v1';

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

@Injectable({
    providedIn: 'root',
})
export class SignageService {
    private readonly _org = inject(OrganisationService);
    private readonly _settings = inject(SettingsService);
    private readonly _uploads = inject(UploadsService);
    private readonly _dialog = inject(MatDialog);
    private readonly _change = new BehaviorSubject(Date.now());
    private readonly _groups_change = new BehaviorSubject(Date.now());
    private readonly _display_overrides = signal<Record<string, any>>({});
    private readonly _display_overrides$ = toObservable(
        this._display_overrides,
    );
    private readonly _zone_overrides = signal<Record<string, any>>({});
    private readonly _zone_overrides$ = toObservable(this._zone_overrides);
    public readonly media_upload_accept = SIGNAGE_MEDIA_PICKER_ACCEPT;

    public readonly search_term = signal('');
    public readonly managed_group_id = signal('');
    public readonly managed_group_tab = signal<'users' | 'zones'>('users');
    private search_term$ = toObservable(this.search_term);
    private managed_group_id$ = toObservable(this.managed_group_id);
    private readonly _current_user = toSignal(current_user, {
        initialValue: currentUser(),
    });
    private readonly _signage_groups_loaded = signal(false);
    public readonly signage_groups_loaded = computed(() =>
        this._signage_groups_loaded(),
    );
    public readonly selected_group_id = signal(loadSelectedGroupId());
    public readonly signage_groups = toSignal(
        combineLatest([
            current_user.pipe(
                filter(
                    (user) =>
                        !!user?.email &&
                        user.email !== '<empty>@dev.place.tech',
                ),
            ),
            this._groups_change,
        ]).pipe(
            switchMap(() =>
                (this.is_sys_admin()
                    ? queryGroups({
                          limit: 1000,
                          fields: [
                              'id',
                              'name',
                              'description',
                              'subsystems',
                              'authority_id',
                              'parent_id',
                          ].join(','),
                          subsystem: 'signage',
                      } as any).pipe(
                          map(({ data }) =>
                              data
                                  .filter((group) =>
                                      group.subsystems?.includes('signage'),
                                  )
                                  .map(
                                      (group) =>
                                          ({
                                              group,
                                              permissions:
                                                  SignageGroupPermission.Manage,
                                          }) as PlaceCurrentGroup,
                                  ),
                          ),
                      )
                    : currentGroups({ subsystem: 'signage' })
                ).pipe(
                    catchError(() => of([] as PlaceCurrentGroup[])),
                    map((groups) =>
                        groups.sort((a, b) =>
                            a.group.name.localeCompare(b.group.name),
                        ),
                    ),
                    tap(() => this._signage_groups_loaded.set(true)),
                ),
            ),
        ),
        { initialValue: [] as PlaceCurrentGroup[] },
    );
    public readonly selected_group = computed(() => {
        const group_id = this.selected_group_id();
        return this.signage_groups().find((item) => item.group.id === group_id);
    });
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
    public readonly manageable_signage_groups = toSignal(
        combineLatest([
            current_user.pipe(
                filter(
                    (user) =>
                        !!user?.email &&
                        user.email !== '<empty>@dev.place.tech',
                ),
            ),
            this._groups_change,
        ]).pipe(
            switchMap(() =>
                this.can_manage_all_groups()
                    ? queryGroups({
                          limit: 1000,
                          fields: [
                              'id',
                              'name',
                              'description',
                              'subsystems',
                              'authority_id',
                              'parent_id',
                          ].join(','),
                          subsystem: 'signage',
                      } as any).pipe(
                          map(({ data }) =>
                              data.filter((group) =>
                                  group.subsystems?.includes('signage'),
                              ),
                          ),
                      )
                    : currentGroups({ subsystem: 'signage' }).pipe(
                          map((groups) =>
                              groups
                                  .filter(
                                      (item) =>
                                          !!(
                                              item.permissions &
                                              SignageGroupPermission.Manage
                                          ),
                                  )
                                  .map((item) => item.group),
                          ),
                      ),
            ),
            catchError(() => of([] as PlaceGroup[])),
            map((groups) =>
                groups.sort((a, b) => a.name.localeCompare(b.name)),
            ),
        ),
        { initialValue: [] as PlaceGroup[] },
    );
    public readonly managed_group = computed(() => {
        const group_id = this.managed_group_id();
        return this.manageable_signage_groups().find(
            (group) => group.id === group_id,
        );
    });
    public readonly managed_group_users = combineLatest([
        this.managed_group_id$,
        this._groups_change,
    ]).pipe(
        filter(([group_id]) => !!group_id),
        switchMap(([group_id]) =>
            queryGroupUsers({ group_id, limit: 1000 }).pipe(
                catchError(() => of({ data: [] })),
            ),
        ),
        map(({ data }) =>
            data.sort((a, b) =>
                (a.user?.name || a.user_id).localeCompare(
                    b.user?.name || b.user_id,
                ),
            ),
        ),
        shareReplay(1),
    );
    public readonly managed_group_zones = combineLatest([
        this.managed_group_id$,
        this._groups_change,
    ]).pipe(
        filter(([group_id]) => !!group_id),
        switchMap(([group_id]) =>
            queryGroupZones({ group_id, limit: 1000 }).pipe(
                catchError(() => of({ data: [] })),
            ),
        ),
        map(({ data }) =>
            data.sort((a, b) =>
                (a.zone?.name || a.zone_id).localeCompare(
                    b.zone?.name || b.zone_id,
                ),
            ),
        ),
        shareReplay(1),
    );
    private readonly _api_group_id = computed(
        () => this.selected_group()?.group.id || '',
    );
    private readonly _api_group_id$ = toObservable(this._api_group_id);
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
        this.is_sys_admin() && !this.selected_group()
            ? false
            : this._hasGroupPermission(SignageGroupPermission.Share),
    );
    public readonly is_admin = computed(() =>
        this._hasGroupPermission(SignageGroupPermission.Manage),
    );

    public readonly media = combineLatest([
        this._org.active_building,
        this._change,
        this._api_group_id$,
    ]).pipe(
        filter(
            ([building, , group_id]) =>
                !!building?.id && (this.is_sys_admin() || !!group_id),
        ),
        debounceTime(300),
        switchMap(([, , group_id]) =>
            querySignageMedia(
                this._groupQueryParams({ limit: 2500 }, group_id),
            ).pipe(catchError(() => of({ data: [] }))),
        ),
        map((result: any) =>
            (result.data || []).sort((a, b) => b.created_at - a.created_at),
        ),
        shareReplay(1),
    );

    public readonly filtered_media = combineLatest([
        this.search_term$,
        this.media,
    ]).pipe(
        map(([search, media]) =>
            media.filter((media) =>
                media.name.toLowerCase().includes(search.toLowerCase()),
            ),
        ),
    );

    public readonly playlists = combineLatest([
        this._org.active_building,
        this._change,
        this._api_group_id$,
    ]).pipe(
        filter(
            ([building, , group_id]) =>
                !!building?.id && (this.is_sys_admin() || !!group_id),
        ),
        debounceTime(300),
        switchMap(([, , group_id]) =>
            querySignagePlaylists(
                this._groupQueryParams({ limit: 500 }, group_id),
            ).pipe(catchError(() => of({ data: [] }))),
        ),
        map((result: any) =>
            (result.data || []).sort((a, b) => a.name.localeCompare(b.name)),
        ),
        shareReplay(1),
    );

    public readonly displays = combineLatest([
        combineLatest([this._org.initialised, this._change]).pipe(
            filter(([_]) => !_),
            debounceTime(300),
            switchMap(() => this._api_group_id$),
            filter((group_id) => this.is_sys_admin() || !!group_id),
            switchMap((group_id) =>
                querySystems({
                    ...(group_id
                        ? { group_id }
                        : { zone_id: this._org.organisation?.id }),
                    limit: 500,
                    signage: true,
                } as any).pipe(catchError(() => of({ data: [] }))),
            ),
            map((result: any) => (result.data || []).filter((s) => s.signage)),
            startWith([]),
        ),
        this._display_overrides$,
    ]).pipe(
        map(([displays, overrides]) => this._mergeItems(displays, overrides)),
        shareReplay(1),
    );

    public readonly zones = combineLatest([
        combineLatest([this._org.active_building, this._change]).pipe(
            filter(([building]) => !!building?.id),
            debounceTime(300),
            switchMap(() => this._api_group_id$),
            filter((group_id) => this.is_sys_admin() || !!group_id),
            switchMap((group_id) =>
                queryZones({
                    limit: 250,
                    tags: 'signage',
                    ...(group_id ? { group_id } : {}),
                } as any).pipe(catchError(() => of({ data: [] }))),
            ),
            map((result: any) => result.data || []),
            startWith([]),
        ),
        this._zone_overrides$,
    ]).pipe(
        map(([zones, overrides]) => this._mergeItems(zones, overrides)),
        shareReplay(1),
    );

    public readonly all_zones = combineLatest([
        combineLatest([this._org.initialised, this._change]).pipe(
            filter(([initialised]) => !!initialised),
            debounceTime(300),
            switchMap(() => this._api_group_id$),
            filter((group_id) => this.is_sys_admin() || !!group_id),
            switchMap((group_id) =>
                queryZones(
                    this._groupQueryParams({ limit: 2500 }, group_id),
                ).pipe(catchError(() => of({ data: [] }))),
            ),
            map((result: any) => result.data || []),
            startWith([]),
        ),
        this._zone_overrides$,
    ]).pipe(
        map(([zones, overrides]) => this._mergeItems(zones, overrides)),
        shareReplay(1),
    );

    public readonly plugins = combineLatest([
        this._org.active_building,
        this._change,
    ]).pipe(
        filter(([building]) => !!building?.id),
        debounceTime(300),
        switchMap(() =>
            querySignagePlugins({ limit: 500 } as any).pipe(
                catchError(() => of({ data: [] })),
            ),
        ),
        map((result: any) =>
            (result.data || [])
                .filter((p: SignagePlugin) => p.enabled)
                .sort((a: SignagePlugin, b: SignagePlugin) =>
                    a.name.localeCompare(b.name),
                ),
        ),
        startWith([]),
        shareReplay(1),
    );

    public readonly selected_playlist = signal<SignagePlaylist | null>(null);
    public readonly selected_playlist_item = signal<SignageMedia | null>(null);
    public readonly playlist_search_term = signal('');

    public readonly selected_zone = signal<any>(null);
    public readonly zone_search_term = signal('');

    public readonly selected_display = signal<any>(null);
    public readonly display_search_term = signal('');
    private readonly _playlist_meta_state = signal<
        Record<string, PlaylistMetaState>
    >(loadPlaylistMetaSessionCache());
    private readonly _playlist_meta_loading = signal<Record<string, boolean>>(
        {},
    );
    private readonly _playlist_meta_queue: Record<string, SignagePlaylist> = {};
    private _playlist_meta_processing = false;

    private readonly _playlists = toSignal(this.playlists, {
        initialValue: [] as SignagePlaylist[],
    });

    public readonly filtered_playlists = computed(() => {
        const term = this.playlist_search_term().toLowerCase();
        return this._playlists().filter((p) =>
            p.name.toLowerCase().includes(term),
        );
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

    private readonly _zones = toSignal(this.zones, {
        initialValue: [] as any[],
    });
    private readonly _all_zones = toSignal(this.all_zones, {
        initialValue: [] as any[],
    });

    public readonly filtered_zones = computed(() => {
        const term = this.zone_search_term().toLowerCase();
        return this._all_zones().filter((z) =>
            (z.display_name || z.name).toLowerCase().includes(term),
        );
    });

    private readonly _displays = toSignal(this.displays, {
        initialValue: [] as any[],
    });

    public readonly filtered_displays = computed(() => {
        const term = this.display_search_term().toLowerCase();
        return this._displays().filter((d) =>
            (d.display_name || d.name).toLowerCase().includes(term),
        );
    });

    private readonly _playlist_change = new BehaviorSubject(Date.now());
    private readonly _selected_playlist$ = toObservable(this.selected_playlist);
    public readonly playlist_media_loading = signal(false);

    public readonly playlist_media_items$ = combineLatest([
        this._selected_playlist$,
        this._playlist_change,
    ]).pipe(
        switchMap(([playlist]) => {
            if (!playlist?.id) {
                this.playlist_media_loading.set(false);
                return of([]);
            }
            this.playlist_media_loading.set(true);
            return listSignagePlaylistMedia(playlist.id).pipe(
                switchMap((result) => {
                    const item_ids = result.items || [];
                    if (!item_ids.length) {
                        this.playlist_media_loading.set(false);
                        return of([]);
                    }
                    return this.media.pipe(
                        map((all_media) =>
                            item_ids
                                .map((id) => all_media.find((m) => m.id === id))
                                .filter(Boolean),
                        ),
                        map((items) => {
                            this.playlist_media_loading.set(false);
                            return items;
                        }),
                    );
                }),
                catchError(() => {
                    this.playlist_media_loading.set(false);
                    return of([]);
                }),
            );
        }),
        shareReplay(1),
    );

    constructor() {
        effect(() => {
            if (!this._signage_groups_loaded()) return;
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
    }

    public async addPlaylist() {
        if (
            !this._requirePermission(
                this.can_create(),
                'You cannot create playlists in this group.',
            )
        )
            return;
        const ref = this._dialog.open(PlaylistEditModalComponent, {
            data: {
                playlist: new SignagePlaylist({}),
                onAdd: (data: Partial<SignagePlaylist>) =>
                    lastValueFrom(this._addSignagePlaylist(data)),
            },
            panelClass: 'mobile-fullscreen',
        });
        const result = await lastValueFrom(ref.afterClosed());
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
                'You cannot update playlists in this group.',
            )
        )
            return;
        const ref = this._dialog.open(PlaylistEditModalComponent, {
            data: {
                playlist,
                onEdit: (id: string, data: Partial<SignagePlaylist>) =>
                    lastValueFrom(updateSignagePlaylist(id, data)),
            },
            panelClass: 'mobile-fullscreen',
        });
        const result = await lastValueFrom(ref.afterClosed());
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
                'You cannot delete playlists in this group.',
            )
        )
            return;
        const result = await openConfirmModal(
            {
                title: 'Remove playlist?',
                content: `Delete "${playlist.name}"?`,
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        await lastValueFrom(removeSignagePlaylist(playlist.id));
        if (this.selected_playlist()?.id === playlist.id) {
            this.selected_playlist.set(null);
            this.selected_playlist_item.set(null);
        }
        this.changed();
        notifySuccess('Playlist removed');
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
                'You cannot approve playlists in this group.',
            )
        )
            return;
        this._dialog.open(PlaylistApproveModalComponent, {
            data: { playlist },
            panelClass: 'mobile-fullscreen',
        });
    }

    public async removeMediaFromPlaylist(
        playlist_id: string,
        media_id: string,
    ) {
        if (
            !this._requirePermission(
                this.can_update(),
                'You cannot update playlists in this group.',
            )
        )
            return;
        const media_list = await lastValueFrom(
            listSignagePlaylistMedia(playlist_id),
        );
        const new_items = (media_list.items || []).filter(
            (id) => id !== media_id,
        );
        await lastValueFrom(updateSignagePlaylistMedia(playlist_id, new_items));
        this.setPlaylistApprovalStatus(playlist_id, false);
        notifySuccess('Item removed from playlist');
        this._playlist_change.next(Date.now());
        this.changed();
    }

    public async reorderPlaylistMedia(playlist_id: string, items: string[]) {
        if (
            !this._requirePermission(
                this.can_update(),
                'You cannot update playlists in this group.',
            )
        )
            return;
        await lastValueFrom(updateSignagePlaylistMedia(playlist_id, items));
        this.setPlaylistApprovalStatus(playlist_id, false);
        this._playlist_change.next(Date.now());
    }

    public changed() {
        this._change.next(Date.now());
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
            notifyWarn('You cannot manage this signage group.');
            return null;
        }
        const payload = {
            ...group,
            ...data,
            subsystems: Array.from(
                new Set([...(group.subsystems || []), 'signage']),
            ),
        };
        const result = await lastValueFrom(
            group.id ? updateGroup(group.id, payload) : addGroup(payload),
        ).catch((error) => {
            notifyError('Error saving signage group');
            throw error;
        });
        this._groups_change.next(Date.now());
        notifySuccess('Signage group saved');
        return result;
    }

    public async removeSignageGroup(group: PlaceGroup) {
        if (!group?.id) return;
        if (!this.canManageSignageGroup(group.id)) {
            notifyWarn('You cannot manage this signage group.');
            return;
        }
        const result = await openConfirmModal(
            {
                title: 'Remove signage group?',
                content: `Delete "${group.name}"?`,
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        await lastValueFrom(removeGroup(group.id)).catch((error) => {
            result.close();
            notifyError('Error removing signage group');
            throw error;
        });
        result.close();
        if (this.selected_group_id() === group.id) {
            this.selected_group_id.set('');
        }
        this._groups_change.next(Date.now());
        notifySuccess('Signage group removed');
    }

    public searchGroupUsers(search = '') {
        const group = this.managed_group();
        return queryUsers({
            q: search,
            limit: 20,
            ...(group?.authority_id
                ? { authority_id: group.authority_id }
                : {}),
        }).pipe(map(({ data }) => data));
    }

    public searchGroupZones(search = '') {
        const group = this.managed_group();
        return queryZones({
            q: search,
            limit: 20,
            ...(group?.authority_id
                ? { authority_id: group.authority_id }
                : {}),
        } as Record<string, unknown>).pipe(map(({ data }) => data));
    }

    public async addManagedGroupUser(user: PlaceUser) {
        const group_id = this.managed_group_id();
        if (!user?.id || !this.canManageSignageGroup(group_id)) return;
        await lastValueFrom(
            addGroupUser({ group_id, user_id: user.id, permissions: 0 }),
        ).catch((error) => {
            notifyError('Error adding group user');
            throw error;
        });
        this._groups_change.next(Date.now());
        notifySuccess('Group user added');
    }

    public async updateManagedGroupUser(
        item: PlaceGroupUser,
        permissions: number,
    ) {
        if (!this.canManageSignageGroup(item.group_id)) return;
        await lastValueFrom(
            updateGroupUser(item.user_id, item.group_id, { permissions }),
        ).catch((error) => {
            notifyError('Error updating group user');
            throw error;
        });
        this._groups_change.next(Date.now());
        notifySuccess('Group user updated');
    }

    public async removeManagedGroupUser(item: PlaceGroupUser) {
        if (!this.canManageSignageGroup(item.group_id)) return;
        const result = await openConfirmModal(
            {
                title: 'Remove group user?',
                content: `Remove "${item.user?.name || item.user_id}" from this group?`,
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        await lastValueFrom(removeGroupUser(item.user_id, item.group_id)).catch(
            (error) => {
                result.close();
                notifyError('Error removing group user');
                throw error;
            },
        );
        result.close();
        this._groups_change.next(Date.now());
        notifySuccess('Group user removed');
    }

    public async addManagedGroupZone(zone: PlaceZone) {
        const group_id = this.managed_group_id();
        if (!zone?.id || !this.canManageSignageGroup(group_id)) return;
        await lastValueFrom(
            addGroupZone({ group_id, zone_id: zone.id, permissions: 0 }),
        ).catch((error) => {
            notifyError('Error adding group zone');
            throw error;
        });
        this._groups_change.next(Date.now());
        notifySuccess('Group zone added');
    }

    public async updateManagedGroupZone(
        item: PlaceGroupZone,
        permissions: number,
        deny: boolean,
    ) {
        if (!this.canManageSignageGroup(item.group_id)) return;
        await lastValueFrom(
            updateGroupZone(item.group_id, item.zone_id, { permissions, deny }),
        ).catch((error) => {
            notifyError('Error updating group zone');
            throw error;
        });
        this._groups_change.next(Date.now());
        notifySuccess('Group zone updated');
    }

    public async removeManagedGroupZone(item: PlaceGroupZone) {
        if (!this.canManageSignageGroup(item.group_id)) return;
        const result = await openConfirmModal(
            {
                title: 'Remove group zone?',
                content: `Remove "${item.zone?.name || item.zone_id}" from this group?`,
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        await lastValueFrom(removeGroupZone(item.group_id, item.zone_id)).catch(
            (error) => {
                result.close();
                notifyError('Error removing group zone');
                throw error;
            },
        );
        result.close();
        this._groups_change.next(Date.now());
        notifySuccess('Group zone removed');
    }

    public setSelectedGroup(group_id: string) {
        if (this.is_sys_admin() && !group_id) {
            this.selected_group_id.set('');
            this.selected_playlist.set(null);
            this.selected_playlist_item.set(null);
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

    private _addSignageMedia(form_data: Partial<SignageMedia>) {
        const group_id = this._api_group_id();
        if (!group_id) return addSignageMedia(form_data);
        return post(
            `${apiEndpoint()}/signage/media?group_id=${encodeURIComponent(group_id)}`,
            form_data,
        ).pipe(map((resp: any) => new SignageMedia(resp)));
    }

    private _addSignagePlaylist(form_data: Partial<SignagePlaylist>) {
        const group_id = this._api_group_id();
        if (!group_id) return addSignagePlaylist(form_data);
        return post(
            `${apiEndpoint()}/signage/playlists?group_id=${encodeURIComponent(group_id)}`,
            form_data,
        ).pipe(map((resp: any) => new SignagePlaylist(resp)));
    }

    private async _shareSignageItems(
        item_type: 'media' | 'playlists',
        item_ids: string[],
    ) {
        if (
            !this._requirePermission(
                this.can_share(),
                'You cannot share items from this group.',
            )
        )
            return;
        const selected_group_id = this.selected_group()?.group.id || '';
        const target_groups = this.signage_groups().filter(
            (item) => item.group.id !== selected_group_id,
        );
        if (!target_groups.length) {
            notifyWarn('No other signage groups are available to share with.');
            return;
        }
        const ref = this._dialog.open(GroupSelectModalComponent, {
            data: {
                title:
                    item_type === 'media'
                        ? 'Share media with group'
                        : 'Share playlist with group',
                groups: target_groups,
            },
            panelClass: 'mobile-fullscreen',
        });
        const group_id = await lastValueFrom(ref.afterClosed());
        if (!group_id) return;
        const request =
            item_type === 'media'
                ? shareSignageMedia({ items: item_ids.join(','), to: group_id })
                : shareSignagePlaylists({
                      items: item_ids.join(','),
                      to: group_id,
                  });
        await lastValueFrom(request);
        notifySuccess(
            item_type === 'media' ? 'Media shared' : 'Playlist shared',
        );
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
                'You cannot update playlists in this group.',
            )
        )
            return;
        await lastValueFrom(updateSignagePlaylistMedia(playlist_id, list));
        this.setPlaylistApprovalStatus(playlist_id, false);
        notifySuccess('Playlist updated');
        this.changed();
    }

    public async addMediaToPlaylist(playlist_id: string, media_id: string) {
        if (
            !this._requirePermission(
                this.can_update(),
                'You cannot update playlists in this group.',
            )
        )
            return;
        const media_list = await lastValueFrom(
            listSignagePlaylistMedia(playlist_id),
        );
        if (media_list.items?.includes(media_id)) {
            notifyError('Media already exists in this playlist.');
            return;
        }
        const new_items = [...(media_list.items || []), media_id];
        await this.updatePlaylistMedia(playlist_id, new_items);
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
                typeof meta?.approved !== 'boolean')
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
                    const media = await lastValueFrom(
                        listSignagePlaylistMedia(next_playlist.id),
                    );
                    this._setPlaylistMeta(next_playlist.id, {
                        media_ids: (media.items || []).slice(0, 3),
                        updated_at: playlist_updated_at,
                        approved: media.approved,
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

    public setPlaylistApprovalStatus(playlist_id: string, approved: boolean) {
        const playlist =
            this._playlists().find((item) => item.id === playlist_id) ||
            this.selected_playlist();
        const current_state = this._playlist_meta_state()[playlist_id];
        this._setPlaylistMeta(playlist_id, {
            media_ids: current_state?.media_ids || [],
            updated_at:
                current_state?.updated_at || playlist?.updated_at || Date.now(),
            approved,
        });
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
                'You cannot create media in this group.',
            )
        )
            return;
        if (!files) return;
        const upload_files = Array.from(files);
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

    public async addMediaFromLink(url: string) {
        if (
            !this._requirePermission(
                this.can_create(),
                'You cannot create media in this group.',
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
                'You cannot create media in this group.',
            )
        )
            return;
        const media = new SignageMedia({
            name: '',
            media_uri: plugin.uri,
            media_type: 'plugin',
            plugin_id: plugin.id,
            plugin_params: { ...plugin.defaults },
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
                    'You cannot update media in this group.',
                )
            )
                return;
        } else if (
            !this._requirePermission(
                this.can_create(),
                'You cannot create media in this group.',
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
        } else if (
            media.media_type === 'webpage' &&
            media.media_uri &&
            !media.thumbnail_id
        ) {
            file_thumbnail = await this.generateUrlThumbnail(
                media.media_uri,
            ).catch(() => '');
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
                onAdd: (
                    f: File,
                    m: SignageMedia,
                    file_metadata?: SignageMediaMetadata,
                ) =>
                    this._addMedia(
                        f,
                        m,
                        playlist_id,
                        file_metadata,
                        file_thumbnail,
                    ),
                onEdit: (id: string, data: any) => this._editMedia(id, data),
                preview: (item) => this.previewMedia(item),
            },
        });
        return new Promise<void>((resolve) => {
            ref.afterClosed().subscribe(() => {
                setTimeout(() => this.changed(), 500);
                resolve();
            });
        });
    }

    private async _editMedia(id: string, data: any) {
        if (
            !this._requirePermission(
                this.can_update(),
                'You cannot update media in this group.',
            )
        )
            return;
        await lastValueFrom(updateSignageMedia(id, data));
        this.changed();
    }

    private async _resolvePlugin(
        plugin_id: string,
    ): Promise<SignagePlugin | undefined> {
        if (!plugin_id) return undefined;
        try {
            const result = await lastValueFrom(
                querySignagePlugins({ limit: 500 } as any).pipe(
                    catchError(() => of({ data: [] })),
                ),
            );
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
    ) {
        let result: SignageMedia;
        if (file) {
            result = await this.addMedia(file, media_item, file_metadata);
        } else {
            let thumbnail_id = '';
            if (url_thumbnail) {
                const name = `thumb+${(media_item.name || 'media').replace(/[^a-zA-Z0-9_-]/g, '_')}.jpg`;
                thumbnail_id = await this._uploads
                    .uploadFile(dataURLtoFile(url_thumbnail, name))
                    .catch(() => '');
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
            result = await lastValueFrom(this._addSignageMedia(data));
        }
        if (playlist_id && result?.id) {
            const media_list = await lastValueFrom(
                listSignagePlaylistMedia(playlist_id),
            );
            const new_media_list = [...media_list.items, result.id];
            await this.updatePlaylistMedia(playlist_id, new_media_list);
        }
        this.changed();
        return result;
    }

    public async addMedia(
        file: File,
        media_item: SignageMedia = new SignageMedia({}),
        file_metadata?: SignageMediaMetadata,
    ) {
        if (
            !this._requirePermission(
                this.can_create(),
                'You cannot create media in this group.',
            )
        ) {
            throw new Error('Permission denied');
        }
        const prepared =
            (file_metadata &&
                (await this._prepareUploadMedia(file, file_metadata))) ||
            (await this._prepareUploadMedia(file));
        if (!prepared) {
            throw new Error('Please select a media file to upload.');
        }
        const { file: upload_file, media_type, metadata } = prepared;
        const { is_landscape } = metadata;
        const thumbnail_image = await this._generateThumbnail(
            upload_file,
            1280,
            720,
        ).catch(() => null);
        const media_id =
            await this._uploads.uploadFileWithPermissions(upload_file);
        const media_url = `${
            location.origin
        }/api/engine/v2/uploads/${encodeURIComponent(media_id)}/url`;
        let thumbnail_id = '';
        if (thumbnail_image) {
            const name_parts = upload_file.name.split('.');
            name_parts.pop();
            const name = `thumb+${name_parts.join('.')}.jpg`;
            thumbnail_id = await this._uploads.uploadFile(
                dataURLtoFile(thumbnail_image, name),
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
        const result = await lastValueFrom(this._addSignageMedia(data));
        return result;
    }

    private async _prepareUploadMedia(
        file: File | null,
        metadata?: SignageMediaMetadata,
    ): Promise<PreparedUploadMedia | null> {
        if (!file) {
            notifyError('Please select a media file to upload.');
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
                `Converted ${file.name} to ${converted_file.name} for browser compatibility.`,
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
                'You cannot delete media in this group.',
            )
        )
            return;
        const result = await openConfirmModal(
            {
                title: 'Remove media?',
                content: `Delete ${item.name}?`,
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        await lastValueFrom(removeSignageMedia(item.id));
        this.changed();
        notifySuccess('Media removed');
        result.close();
    }

    public async shareMedia(item: SignageMedia) {
        if (!item?.id) return;
        await this._shareSignageItems('media', [item.id]);
    }

    public async openPlaylistSelectModal(media_id: string) {
        const ref = this._dialog.open(PlaylistSelectModalComponent, {
            data: { media_id },
            panelClass: 'mobile-fullscreen',
        });
        const playlist_id = await lastValueFrom(ref.afterClosed());
        if (!playlist_id) return;
        await this.addMediaToPlaylist(playlist_id, media_id);
    }

    public async addPlaylistToZone(zone: any) {
        if (
            !this._requirePermission(
                this.can_update(),
                'You cannot update signage assignments in this group.',
            )
        )
            return;
        const ref = this._dialog.open(PlaylistSelectModalComponent, {
            data: { zone_id: zone.id },
            panelClass: 'mobile-fullscreen',
        });
        const playlist_id = await lastValueFrom(ref.afterClosed());
        if (!playlist_id) return;
        if (zone.playlists?.includes(playlist_id)) {
            notifyError('Playlist already assigned to this zone.');
            return;
        }
        const playlists = [...(zone.playlists || []), playlist_id];
        const updated = await lastValueFrom(
            updateZone(zone.id, { playlists, version: zone.version }, 'patch'),
        );
        this._cacheZone(updated);
        this.selected_zone.set(updated);
        this.changed();
        notifySuccess('Playlist added to zone');
    }

    public async removePlaylistFromZone(zone: any, playlist_id: string) {
        if (
            !this._requirePermission(
                this.can_update(),
                'You cannot update signage assignments in this group.',
            )
        )
            return;
        const playlists = (zone.playlists || []).filter(
            (id: string) => id !== playlist_id,
        );
        const updated = await lastValueFrom(
            updateZone(zone.id, { playlists, version: zone.version }, 'patch'),
        );
        this._cacheZone(updated);
        this.selected_zone.set(updated);
        this.changed();
        notifySuccess('Playlist removed from zone');
    }

    public async addDisplayToZone(zone: any) {
        if (
            !this._requirePermission(
                this.can_update(),
                'You cannot update signage assignments in this group.',
            )
        )
            return;
        const ref = this._dialog.open(DisplaySelectModalComponent, {
            data: { zone_id: zone.id },
            panelClass: 'mobile-fullscreen',
        });
        const display_id = await lastValueFrom(ref.afterClosed());
        if (!display_id) return;
        const displays = this._displays();
        const display = displays.find((d: any) => d.id === display_id);
        if (!display) return;
        if (display.zones?.includes(zone.id)) {
            notifyError('Display already assigned to this zone.');
            return;
        }
        const zones = [...(display.zones || []), zone.id];
        const updated = await lastValueFrom(
            updateSystem(
                display.id,
                { zones, version: display.version } as any,
                'patch',
            ),
        );
        this._cacheDisplay(updated);
        this.changed();
        notifySuccess('Display added to zone');
    }

    public async removeDisplayFromZone(zone: any, display_id: string) {
        if (
            !this._requirePermission(
                this.can_update(),
                'You cannot update signage assignments in this group.',
            )
        )
            return;
        const displays = this._displays();
        const display = displays.find((d: any) => d.id === display_id);
        if (!display) return;
        const zones = (display.zones || []).filter(
            (id: string) => id !== zone.id,
        );
        const updated = await lastValueFrom(
            updateSystem(
                display.id,
                { zones, version: display.version } as any,
                'patch',
            ),
        );
        this._cacheDisplay(updated);
        this.changed();
        notifySuccess('Display removed from zone');
    }

    public async addPlaylistToDisplay(display: any) {
        if (
            !this._requirePermission(
                this.can_update(),
                'You cannot update signage assignments in this group.',
            )
        )
            return;
        const ref = this._dialog.open(PlaylistSelectModalComponent, {
            data: { display_id: display.id },
            panelClass: 'mobile-fullscreen',
        });
        const playlist_id = await lastValueFrom(ref.afterClosed());
        if (!playlist_id) return;
        if (display.playlists?.includes(playlist_id)) {
            notifyError('Playlist already assigned to this display.');
            return;
        }
        const playlists = [...(display.playlists || []), playlist_id];
        const updated = await lastValueFrom(
            updateSystem(
                display.id,
                { playlists, version: display.version } as any,
                'patch',
            ),
        );
        this._cacheDisplay(updated);
        this.selected_display.set(updated);
        this.changed();
        notifySuccess('Playlist added to display');
    }

    public async addDisplayToPlaylist(playlist: SignagePlaylist) {
        if (
            !this._requirePermission(
                this.can_update(),
                'You cannot update signage assignments in this group.',
            )
        )
            return;
        const ref = this._dialog.open(DisplaySelectModalComponent, {
            data: { playlist_id: playlist.id },
            panelClass: 'mobile-fullscreen',
        });
        const display_id = await lastValueFrom(ref.afterClosed());
        if (!display_id) return;
        const displays = this._displays();
        const display = displays.find((d: any) => d.id === display_id);
        if (!display) return;
        if (display.playlists?.includes(playlist.id)) {
            notifyError('Playlist already assigned to this display.');
            return;
        }
        const playlists = [...(display.playlists || []), playlist.id];
        const updated = await lastValueFrom(
            updateSystem(
                display.id,
                { playlists, version: display.version } as any,
                'patch',
            ),
        );
        this._cacheDisplay(updated);
        if (this.selected_display()?.id === display.id) {
            this.selected_display.set(updated);
        }
        this.changed();
        notifySuccess('Display added to playlist');
    }

    public async addZoneToPlaylist(playlist: SignagePlaylist) {
        if (
            !this._requirePermission(
                this.can_update(),
                'You cannot update signage assignments in this group.',
            )
        )
            return;
        const ref = this._dialog.open(ZoneSelectModalComponent, {
            data: { playlist_id: playlist.id },
            panelClass: 'mobile-fullscreen',
        });
        const zone_id = await lastValueFrom(ref.afterClosed());
        if (!zone_id) return;
        const zones = this._zones();
        const zone = zones.find((z: any) => z.id === zone_id);
        if (!zone) return;
        if (zone.playlists?.includes(playlist.id)) {
            notifyError('Playlist already assigned to this zone.');
            return;
        }
        const playlists = [...(zone.playlists || []), playlist.id];
        const updated = await lastValueFrom(
            updateZone(zone.id, { playlists, version: zone.version }, 'patch'),
        );
        this._cacheZone(updated);
        if (this.selected_zone()?.id === zone.id) {
            this.selected_zone.set(updated);
        }
        this.changed();
        notifySuccess('Zone added to playlist');
    }

    public async removeDisplayFromPlaylist(
        playlist: SignagePlaylist,
        display: any,
    ) {
        if (
            !this._requirePermission(
                this.can_update(),
                'You cannot update signage assignments in this group.',
            )
        )
            return;
        const playlists = (display.playlists || []).filter(
            (id: string) => id !== playlist.id,
        );
        const updated = await lastValueFrom(
            updateSystem(
                display.id,
                { playlists, version: display.version } as any,
                'patch',
            ),
        );
        this._cacheDisplay(updated);
        if (this.selected_display()?.id === display.id) {
            this.selected_display.set(updated);
        }
        this.changed();
        notifySuccess('Display removed from playlist');
    }

    public async removeZoneFromPlaylist(playlist: SignagePlaylist, zone: any) {
        if (
            !this._requirePermission(
                this.can_update(),
                'You cannot update signage assignments in this group.',
            )
        )
            return;
        const playlists = (zone.playlists || []).filter(
            (id: string) => id !== playlist.id,
        );
        const updated = await lastValueFrom(
            updateZone(zone.id, { playlists, version: zone.version }, 'patch'),
        );
        this._cacheZone(updated);
        if (this.selected_zone()?.id === zone.id) {
            this.selected_zone.set(updated);
        }
        this.changed();
        notifySuccess('Zone removed from playlist');
    }

    public async removePlaylistFromDisplay(display: any, playlist_id: string) {
        if (
            !this._requirePermission(
                this.can_update(),
                'You cannot update signage assignments in this group.',
            )
        )
            return;
        const playlists = (display.playlists || []).filter(
            (id: string) => id !== playlist_id,
        );
        const updated = await lastValueFrom(
            updateSystem(
                display.id,
                { playlists, version: display.version } as any,
                'patch',
            ),
        );
        this._cacheDisplay(updated);
        this.selected_display.set(updated);
        this.changed();
        notifySuccess('Playlist removed from display');
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

    private _generateImageThumbnail(
        file: File,
        max_width: number,
        max_height: number,
    ) {
        return new Promise<string>((resolve, reject) => {
            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                const image = this._generateThumbnailFromResource(
                    img,
                    img.width,
                    img.height,
                    max_width,
                    max_height,
                );
                URL.revokeObjectURL(img.src);
                resolve(image);
            };
            img.onerror = reject;
        });
    }

    private async _convertImageToWebp(file: File) {
        const image = await this._loadImage(file);
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Unable to convert image');
        ctx.drawImage(image, 0, 0);
        const blob = await new Promise<Blob | null>((resolve) =>
            canvas.toBlob(resolve, 'image/webp', 0.92),
        );
        if (!blob) throw new Error('Unable to convert image');
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
                reject(new Error('Unable to load image'));
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
            video.autoplay = true;
            video.muted = true;
            video.src = URL.createObjectURL(file);
            video.onloadeddata = () => {
                const image = this._generateThumbnailFromResource(
                    video,
                    video.videoWidth,
                    video.videoHeight,
                    max_width,
                    max_height,
                );
                URL.revokeObjectURL(video.src);
                resolve(image);
            };
            video.onerror = reject;
        });
    }

    private _generateThumbnailFromResource(
        data: HTMLImageElement | HTMLVideoElement,
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
        canvas.width = thumbnail_width;
        canvas.height = thumbnail_height;
        ctx.drawImage(data, 0, 0, thumbnail_width, thumbnail_height);
        return canvas.toDataURL('image/jpeg');
    }

    /** Generate a thumbnail by loading a URL in a hidden iframe and capturing its content. */
    public generateUrlThumbnail(
        url: string,
        width = 1280,
        height = 720,
        timeout_ms = 8000,
    ): Promise<string> {
        return new Promise<string>((resolve) => {
            const iframe = document.createElement('iframe');
            iframe.style.position = 'fixed';
            iframe.style.left = '-10000px';
            iframe.style.top = '-10000px';
            iframe.style.width = `${width}px`;
            iframe.style.height = `${height}px`;
            iframe.style.border = 'none';
            iframe.style.opacity = '0';
            iframe.style.pointerEvents = 'none';
            iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
            let resolved = false;
            const cleanup = () => {
                if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
            };
            const finish = (result: string) => {
                if (resolved) return;
                resolved = true;
                cleanup();
                resolve(result);
            };
            const timer = setTimeout(() => finish(''), timeout_ms);
            iframe.addEventListener('load', () => {
                /* Allow the page content time to render after the load event. */
                setTimeout(() => {
                    clearTimeout(timer);
                    try {
                        const doc = iframe.contentDocument;
                        if (!doc) {
                            finish('');
                            return;
                        }
                        const canvas = document.createElement('canvas');
                        canvas.width = width;
                        canvas.height = height;
                        const ctx = canvas.getContext('2d');
                        if (!ctx) {
                            finish('');
                            return;
                        }
                        /* Fill with a white background to match typical page backgrounds. */
                        ctx.fillStyle = '#ffffff';
                        ctx.fillRect(0, 0, width, height);
                        /* Render the foreign object via an SVG wrapper. */
                        const serializer = new XMLSerializer();
                        const html = serializer.serializeToString(doc);
                        const svg_data = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
                                <foreignObject width="100%" height="100%">
                                    ${html}
                                </foreignObject>
                            </svg>`;
                        const svg_blob = new Blob([svg_data], {
                            type: 'image/svg+xml;charset=utf-8',
                        });
                        const svg_url = URL.createObjectURL(svg_blob);
                        const img = new Image();
                        img.onload = () => {
                            ctx.drawImage(img, 0, 0, width, height);
                            URL.revokeObjectURL(svg_url);
                            finish(canvas.toDataURL('image/jpeg', 0.85));
                        };
                        img.onerror = () => {
                            URL.revokeObjectURL(svg_url);
                            finish('');
                        };
                        img.src = svg_url;
                    } catch {
                        finish('');
                    }
                }, 2000);
            });
            iframe.addEventListener('error', () => {
                clearTimeout(timer);
                finish('');
            });
            document.body.appendChild(iframe);
            iframe.src = url;
        });
    }
}
