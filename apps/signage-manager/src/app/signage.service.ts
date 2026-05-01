import { computed, inject, Injectable, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import {
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
    addSignageMedia,
    listSignagePlaylistMedia,
    mediaThumbnail,
    querySignageMedia,
    querySignagePlaylists,
    querySignagePlugins,
    querySystems,
    queryZones,
    removeSignageMedia,
    removeSignagePlaylist,
    SignageMedia,
    SignagePlaylist,
    SignagePlugin,
    updateSignageMedia,
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
} from 'rxjs/operators';
import { DisplaySelectModalComponent } from './shared/display-select-modal.component';
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
    } catch {}
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
    private readonly _display_overrides = signal<Record<string, any>>({});
    private readonly _display_overrides$ = toObservable(
        this._display_overrides,
    );
    private readonly _zone_overrides = signal<Record<string, any>>({});
    private readonly _zone_overrides$ = toObservable(this._zone_overrides);
    public readonly media_upload_accept = SIGNAGE_MEDIA_PICKER_ACCEPT;

    public readonly search_term = signal('');
    private search_term$ = toObservable(this.search_term);

    public readonly media = combineLatest([
        this._org.active_building,
        this._change,
    ]).pipe(
        filter(([building]) => !!building?.id),
        debounceTime(300),
        switchMap(() =>
            querySignageMedia({ limit: 2500 } as any).pipe(
                catchError(() => of({ data: [] })),
            ),
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
    ]).pipe(
        filter(([building]) => !!building?.id),
        debounceTime(300),
        switchMap(() =>
            querySignagePlaylists({ limit: 500 } as any).pipe(
                catchError(() => of({ data: [] })),
            ),
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
            switchMap(() =>
                querySystems({
                    zone_id: this._org.organisation?.id,
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
            switchMap(() =>
                queryZones({
                    limit: 250,
                    tags: 'signage',
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
            switchMap(() =>
                queryZones({ limit: 2500 } as any).pipe(
                    catchError(() => of({ data: [] })),
                ),
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

    public readonly is_admin = computed(() => {
        const groups = currentUser().groups || [];
        const admin_group = this._settings.get('app.admin_group') || 'admin';
        return groups.includes(admin_group) || groups.includes('placeos_admin');
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

    public async addPlaylist() {
        const ref = this._dialog.open(PlaylistEditModalComponent, {
            data: { playlist: new SignagePlaylist({}) },
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
        const ref = this._dialog.open(PlaylistEditModalComponent, {
            data: { playlist },
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

    public approvePlaylist(playlist: SignagePlaylist) {
        if (!playlist?.id) return;
        this._dialog.open(PlaylistApproveModalComponent, {
            data: { playlist },
            panelClass: 'mobile-fullscreen',
        });
    }

    public async removeMediaFromPlaylist(
        playlist_id: string,
        media_id: string,
    ) {
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
        await lastValueFrom(updateSignagePlaylistMedia(playlist_id, items));
        this.setPlaylistApprovalStatus(playlist_id, false);
        this._playlist_change.next(Date.now());
    }

    public changed() {
        this._change.next(Date.now());
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
        await lastValueFrom(updateSignagePlaylistMedia(playlist_id, list));
        this.setPlaylistApprovalStatus(playlist_id, false);
        notifySuccess('Playlist updated');
        this.changed();
    }

    public async addMediaToPlaylist(playlist_id: string, media_id: string) {
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
            while (true) {
                const next_playlist = Object.values(
                    this._playlist_meta_queue,
                )[0];
                if (!next_playlist) break;
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
            result = await lastValueFrom(addSignageMedia(data));
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
        const result = await lastValueFrom(addSignageMedia(data));
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
