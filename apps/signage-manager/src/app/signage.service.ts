import { computed, inject, Injectable, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import {
    notifyError,
    notifySuccess,
    OrganisationService,
    UploadsService,
} from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import {
    addSignageMedia,
    addSignagePlaylist,
    listSignagePlaylistMedia,
    querySignageMedia,
    querySignagePlaylists,
    querySystems,
    queryZones,
    removeSignageMedia,
    removeSignagePlaylist,
    SignageMedia,
    SignagePlaylist,
    updateSignageMedia,
    updateSignagePlaylist,
    updateSignagePlaylistMedia,
    updateSystem,
    updateZone,
} from '@placeos/ts-client';
import { startWith } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, lastValueFrom, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    filter,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';
import { MediaEditModalComponent } from './shared/media-edit-modal.component';
import { MediaPreviewModalComponent } from './shared/media-preview-modal.component';
import { PlaylistEditModalComponent } from './shared/playlist-edit-modal.component';
import { DisplaySelectModalComponent } from './shared/display-select-modal.component';
import { PlaylistSelectModalComponent } from './shared/playlist-select-modal.component';

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

@Injectable({
    providedIn: 'root',
})
export class SignageService {
    private readonly _org = inject(OrganisationService);
    private readonly _uploads = inject(UploadsService);
    private readonly _dialog = inject(MatDialog);
    private readonly _change = new BehaviorSubject(Date.now());

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
        this._org.active_building,
        this._change,
    ]).pipe(
        filter(([building]) => !!building?.id),
        debounceTime(300),
        switchMap(([building]) =>
            querySystems({
                zone_id: building?.id,
                limit: 500,
                signage: true,
            } as any).pipe(catchError(() => of({ data: [] }))),
        ),
        map((result: any) =>
            (result.data || [])
                .filter((s) => s.signage)
                .sort((a, b) =>
                    (a.display_name || a.name).localeCompare(
                        b.display_name || b.name,
                    ),
                ),
        ),
        startWith([]),
        shareReplay(1),
    );

    public readonly zones = combineLatest([
        this._org.active_building,
        this._change,
    ]).pipe(
        filter(([building]) => !!building?.id),
        debounceTime(300),
        switchMap(() =>
            queryZones({
                limit: 250,
                tags: 'signage',
            } as any).pipe(catchError(() => of({ data: [] }))),
        ),
        map((result: any) =>
            (result.data || []).sort((a, b) =>
                (a.display_name || a.name).localeCompare(
                    b.display_name || b.name,
                ),
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

    private readonly _playlists = toSignal(this.playlists, {
        initialValue: [] as SignagePlaylist[],
    });

    public readonly filtered_playlists = computed(() => {
        const term = this.playlist_search_term().toLowerCase();
        return this._playlists().filter((p) =>
            p.name.toLowerCase().includes(term),
        );
    });

    private readonly _zones = toSignal(this.zones, {
        initialValue: [] as any[],
    });

    public readonly filtered_zones = computed(() => {
        const term = this.zone_search_term().toLowerCase();
        return this._zones().filter((z) =>
            (z.display_name || z.name).toLowerCase().includes(term),
        );
    });

    private readonly _playlist_change = new BehaviorSubject(Date.now());
    private readonly _selected_playlist$ = toObservable(this.selected_playlist);

    public readonly playlist_media_items$ = combineLatest([
        this._selected_playlist$,
        this._playlist_change,
    ]).pipe(
        switchMap(([playlist]) => {
            if (!playlist?.id) return of([]);
            return listSignagePlaylistMedia(playlist.id).pipe(
                switchMap((result) => {
                    const item_ids = result.items || [];
                    if (!item_ids.length) return of([]);
                    return this.media.pipe(
                        map((all_media) =>
                            item_ids
                                .map((id) => all_media.find((m) => m.id === id))
                                .filter(Boolean),
                        ),
                    );
                }),
                catchError(() => of([])),
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
        notifySuccess('Item removed from playlist');
        this._playlist_change.next(Date.now());
        this.changed();
    }

    public async reorderPlaylistMedia(playlist_id: string, items: string[]) {
        await lastValueFrom(updateSignagePlaylistMedia(playlist_id, items));
        this._playlist_change.next(Date.now());
    }

    public changed() {
        this._change.next(Date.now());
    }

    public async updatePlaylistMedia(playlist_id: string, list: string[]) {
        await lastValueFrom(updateSignagePlaylistMedia(playlist_id, list));
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

    public previewMedia(item: SignageMedia) {
        this._dialog.open(MediaPreviewModalComponent, {
            data: item,
            panelClass: 'fullscreen-dialog',
        });
    }

    public async previewFileFromInput(event: Event, playlist_id = '') {
        const element = event.target as HTMLInputElement;
        if (!element?.files?.length) return;
        const file = element.files.item(0);
        if (
            !file ||
            (!file.type.includes('image') && !file.type.includes('video'))
        ) {
            notifyError('Please select an image or video file.');
            return;
        }
        try {
            await this.editMedia(new SignageMedia({}), file, playlist_id);
        } finally {
            element.value = '';
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

    public async editMedia(
        media: SignageMedia = new SignageMedia({}),
        file?: File,
        playlist_id = '',
    ) {
        const ref = this._dialog.open(MediaEditModalComponent, {
            data: {
                media,
                file,
                file_metadata: file
                    ? await this._getMediaMetadata(file)
                    : [media.orientation === 'landscape', 0],
                file_thumbnail: file
                    ? await this._generateThumbnail(file, 1024, 720)
                    : '',
                playlist_id,
                onAdd: (f: File, m: SignageMedia) =>
                    this._addMedia(f, m, playlist_id),
                onEdit: (id: string, data: any) =>
                    this._editMedia(id, data),
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

    private async _addMedia(
        file: File | undefined,
        media_item: SignageMedia,
        playlist_id = '',
    ) {
        let result: SignageMedia;
        if (file) {
            result = await this.addMedia(file, media_item);
        } else {
            const data = { ...new SignageMedia(media_item) };
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
    ) {
        const [is_landscape] = await this._getMediaMetadata(file);
        const thumbnail_image = await this._generateThumbnail(
            file,
            1280,
            720,
        ).catch(() => null);
        const media_id = await this._uploads.uploadFileWithPermissions(file);
        const media_url = `${
            location.origin
        }/api/engine/v2/uploads/${encodeURIComponent(media_id)}/url`;
        let thumbnail_id = '';
        if (thumbnail_image) {
            const name_parts = file.name.split('.');
            name_parts.pop();
            const name = `thumb+${name_parts.join('.')}.jpg`;
            thumbnail_id = await this._uploads.uploadFile(
                dataURLtoFile(thumbnail_image, name),
            );
        }
        const data = {
            ...new SignageMedia({
                ...media_item,
                name: media_item.name || file.name,
                media_id,
                media_uri: media_url,
                media_type: file.type.includes('image') ? 'image' : 'video',
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
        const displays = await lastValueFrom(this.displays);
        const display = displays.find((d: any) => d.id === display_id);
        if (!display) return;
        if (display.zones?.includes(zone.id)) {
            notifyError('Display already assigned to this zone.');
            return;
        }
        const zones = [...(display.zones || []), zone.id];
        await lastValueFrom(
            updateSystem(display.id, { zones, version: display.version } as any, 'patch'),
        );
        this.changed();
        notifySuccess('Display added to zone');
    }

    public async removeDisplayFromZone(zone: any, display_id: string) {
        const displays = await lastValueFrom(this.displays);
        const display = displays.find((d: any) => d.id === display_id);
        if (!display) return;
        const zones = (display.zones || []).filter(
            (id: string) => id !== zone.id,
        );
        await lastValueFrom(
            updateSystem(display.id, { zones, version: display.version } as any, 'patch'),
        );
        this.changed();
        notifySuccess('Display removed from zone');
    }

    private _getMediaMetadata(file: File) {
        return new Promise<[boolean, number]>((resolve) => {
            const url = URL.createObjectURL(file);
            if (file.type.includes('video')) {
                const video = document.createElement('video');
                video.src = url;
                video.addEventListener('loadedmetadata', () => {
                    resolve([
                        video.videoWidth > video.videoHeight,
                        video.duration,
                    ]);
                    URL.revokeObjectURL(url);
                });
                video.load();
            } else {
                const img = new Image();
                img.onload = () => {
                    resolve([img.width > img.height, 0]);
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
        if (file.type.includes('video')) {
            return this._generateVideoThumbnail(file, max_width, max_height);
        } else if (
            file.type.includes('image') ||
            file.type.includes('svg')
        ) {
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
}
