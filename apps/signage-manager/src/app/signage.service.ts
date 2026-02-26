import { inject, Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
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
    listSignagePlaylistMedia,
    querySignageMedia,
    querySignagePlaylists,
    removeSignageMedia,
    SignageMedia,
    updateSignageMedia,
    updateSignagePlaylistMedia,
} from '@placeos/ts-client';
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
