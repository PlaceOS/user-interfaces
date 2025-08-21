import { inject, Injectable } from '@angular/core';
import {
    AsyncHandler,
    i18n,
    notifyError,
    notifySuccess,
    SettingsService,
    UploadsService,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import {
    addSignageMedia,
    addSignagePlaylist,
    listSignagePlaylistMedia,
    PlaceSystem,
    querySignageMedia,
    querySignagePlaylists,
    querySystems,
    queryZones,
    removeSignageMedia,
    removeSignagePlaylist,
    removeSystem,
    SignageMedia,
    SignagePlaylist,
    updateSignageMedia,
    updateSignagePlaylist,
    updateSignagePlaylistMedia,
    updateSystem,
} from '@placeos/ts-client';
import { Attachment } from '@placeos/users';
import {
    BehaviorSubject,
    combineLatest,
    lastValueFrom,
    Observable,
    of,
} from 'rxjs';
import {
    catchError,
    debounceTime,
    filter,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';

import { MatDialog } from '@angular/material/dialog';
import { openConfirmModal } from 'libs/components/src/lib/confirm-modal.component';
import { SignageApprovePlaylistModalComponent } from './signage-approve-playlist-modal.component';
import { SignageDisplayModalComponent } from './signage-display-modal.component';
import { SignageMediaModalComponent } from './signage-media-modal.component';
import { SignageMediaPreviewModalComponent } from './signage-media-preview-modal.component';
import { SignagePlaylistModalComponent } from './signage-playlist-modal.component';

function dataURLtoBlob(dataURL) {
    // Split the data URL to get the mime type and the data
    const [prefix, data] = dataURL.split(',');
    const mimeType = prefix.split(':')[1].split(';')[0];

    // Convert base64 to raw binary data
    const byteString = atob(data);

    // Create an ArrayBuffer and fill it with the binary data
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
        uint8Array[i] = byteString.charCodeAt(i);
    }

    // Create and return the Blob
    return new Blob([arrayBuffer], { type: mimeType });
}

function dataURLtoFile(dataURL, filename) {
    // Split the data URL to get the mime type and the data
    const [prefix, data] = dataURL.split(',');
    const mimeType = prefix.split(':')[1].split(';')[0];

    // Convert base64 to raw binary data
    const byteString = atob(data);

    // Create an ArrayBuffer and fill it with the binary data
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
        uint8Array[i] = byteString.charCodeAt(i);
    }

    // Create and return the File
    return new File([uint8Array], filename, { type: mimeType });
}

@Injectable({
    providedIn: 'root',
})
export class SignageStateService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);
    private _uploads = inject(UploadsService);

    private _loading = new BehaviorSubject(false);
    private _change = new BehaviorSubject(0);
    private _active_upload = new BehaviorSubject<Attachment>(null);

    public readonly loading = this._loading.asObservable();
    public readonly has_changed = this._change.asObservable();

    public readonly media: Observable<SignageMedia[]> = combineLatest([
        this._org.active_building,
        this._change,
    ]).pipe(
        filter(([_]) => !!_?.id),
        debounceTime(300),
        switchMap(() => querySignageMedia({ limit: 2500 } as any)),
        map((_) => _.data.sort((a, b) => b.created_at - a.created_at)),
        shareReplay(1),
    );

    public readonly playlists: Observable<SignagePlaylist[]> = combineLatest([
        this._org.active_building,
        this._change,
    ]).pipe(
        filter(([_]) => !!_?.id),
        debounceTime(300),
        switchMap(() => querySignagePlaylists({ limit: 500 } as any)),
        map((_) => (_.data || []).sort((a, b) => a.name.localeCompare(b.name))),
        shareReplay(1),
    );

    public readonly displays: Observable<PlaceSystem[]> = combineLatest([
        this._org.active_region,
        this._org.active_building,
        this._change,
    ]).pipe(
        filter(([, bld]) => !!bld?.id),
        switchMap(([region, bld]) =>
            querySystems({
                zone_id:
                    (this._settings.get('app.use_region') ? region?.id : '') ||
                    bld?.id,
                limit: 500,
                signage: true,
            }).pipe(
                map((_) =>
                    (_.data || [])
                        .sort((a, b) =>
                            (a.display_name || a.name).localeCompare(
                                b.display_name || b.name,
                            ),
                        )
                        .filter((_) => _.signage),
                ),
            ),
        ),
        shareReplay(1),
    );

    public readonly zones = combineLatest([
        this._org.active_building,
        this._change,
    ]).pipe(
        switchMap(() =>
            queryZones({
                limit: 250,
            } as any).pipe(catchError(() => of({ data: [] }))),
        ),
        map((_) =>
            (_.data || []).sort((a, b) =>
                (a.display_name || a.name).localeCompare(
                    b.display_name || b.name,
                ),
            ),
        ),
    );

    public changed() {
        this._change.next(Date.now());
    }

    public editPlaylist(playlist: SignagePlaylist = new SignagePlaylist({})) {
        return new Promise<SignagePlaylist | null>((resolve) => {
            const ref = this._dialog.open(SignagePlaylistModalComponent, {
                data: playlist,
            });
            ref.afterClosed().subscribe((result) => {
                this.timeout('changed', () => this._change.next(Date.now()));
                resolve(result);
            });
        });
    }

    public editMedia(
        media: SignageMedia = new SignageMedia({}),
        file?: File,
        playlist_id = '',
    ) {
        return new Promise<SignagePlaylist | null>(async (resolve) => {
            const ref = this._dialog.open(SignageMediaModalComponent, {
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
                    onAdd: (f, m) => this.addMedia(f, m),
                    preview: (item) => this.previewMedia(item),
                },
            });
            ref.afterClosed().subscribe((result) => {
                this.timeout('changed', () => this._change.next(Date.now()));
                resolve(result);
            });
        });
    }

    public async editDisplay(display: PlaceSystem = new PlaceSystem({})) {
        console.log('Edit Display:', display);
        const ref = this._dialog.open(SignageDisplayModalComponent, {
            data: { display },
        });
        const result = await lastValueFrom(ref.afterClosed());
        this.timeout('changed', () => this._change.next(Date.now()));
        return result;
    }

    public async removeDisplay(display: PlaceSystem) {
        const result = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.SIGNAGE_DISPLAYS_REMOVE'),
                content: i18n('APP.CONCIERGE.SIGNAGE_DISPLAYS_REMOVE_MSG', {
                    name: display.display_name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        result.loading(i18n('APP.CONCIERGE.SIGNAGE_DISPLAYS_REMOVE_LOADING'));
        if (display.map_id || display.email || display.module_list.length > 0) {
            await lastValueFrom(
                updateSystem(display.id, {
                    signage: false,
                } as any),
            );
        } else {
            await lastValueFrom(removeSystem(display.id));
        }
        this._change.next(Date.now());
        notifySuccess(i18n('APP.CONCIERGE.SIGNAGE_DISPLAYS_REMOVE_SUCCESS'));
        result.close();
    }

    public async savePlaylist(playlist: Partial<SignagePlaylist>) {
        const call = lastValueFrom(
            playlist.id
                ? updateSignagePlaylist(playlist.id, playlist, 'put')
                : addSignagePlaylist(playlist),
        );
        const new_playlist = await call;
        notifySuccess(i18n('APP.CONCIERGE.SIGNAGE_PLAYLISTS_SAVE_SUCCESS'));
        this._change.next(Date.now());
    }

    public async removePlaylist(playlist: SignagePlaylist) {
        if (!playlist?.id) return;
        const result = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.SIGNAGE_PLAYLISTS_REMOVE'),
                content: i18n('APP.CONCIERGE.SIGNAGE_PLAYLISTS_REMOVE_MSG', {
                    name: playlist.name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        await lastValueFrom(removeSignagePlaylist(playlist.id));
        notifySuccess(i18n('APP.CONCIERGE.SIGNAGE_PLAYLISTS_REMOVE_SUCCESS'));
        this._change.next(Date.now());
        result.close();
    }

    public async updatePlaylistMedia(playlist_id: string, list: string[]) {
        await lastValueFrom(updateSignagePlaylistMedia(playlist_id, list));
        notifySuccess(
            i18n('APP.CONCIERGE.SIGNAGE_PLAYLISTS_MEDIA_SAVE_SUCCESS'),
        );
    }

    public async getPlaylistMedia(playlist_id: string) {
        const { items } = await lastValueFrom(
            listSignagePlaylistMedia(playlist_id),
        );
        return items;
    }

    public previewMedia(item: SignageMedia) {
        this._dialog.open(SignageMediaPreviewModalComponent, {
            data: {
                url: item.media_url,
                type: item.media_type,
                name: item.name,
                save: false,
            },
        });
    }

    public previewFileFromInput(event, playlist_id = '') {
        const element: HTMLInputElement = event.target as any;
        /* istanbul ignore else */
        if (!element?.files?.length) return;
        const files: FileList = element.files;
        const file = files[0];
        if (
            file &&
            (file.type.includes('image') || file.type.includes('video'))
        ) {
            this.editMedia(undefined, file, playlist_id);
        } else {
            notifyError(i18n('APP.CONCIERGE.SIGNAGE_MEDIA_FILE_ERROR'));
        }
    }

    public previewFileMedia(media: File, playlist_id = '') {
        const url = URL.createObjectURL(media);
        const type = media.type.includes('image') ? 'image' : 'video';
        const ref = this._dialog.open(SignageMediaPreviewModalComponent, {
            data: { url, type, name: media.name, save: true, file: media },
        });
        ref.afterClosed().subscribe(() => URL.revokeObjectURL(url));
        ref.componentInstance.save.subscribe(async () => {
            ref.componentInstance.loading.set('Saving...');
            const new_media = await this.addMedia(media).catch((e) => {
                notifyError('Error saving media.');
                ref.componentInstance.loading.set('');
                throw e;
            });
            if (playlist_id && new_media.id) {
                const media_list = await lastValueFrom(
                    listSignagePlaylistMedia(playlist_id),
                );
                const new_media_list = [...media_list.items, new_media.id];
                await lastValueFrom(
                    updateSignagePlaylistMedia(playlist_id, new_media_list),
                );
            }
            ref.close();
        });
    }

    public async addMediaFromLink(
        url: string,
        media_item: SignageMedia = new SignageMedia({}),
    ) {
        const url_obj = new URL(url);
        const data = {
            ...new SignageMedia({
                ...media_item,
                name: media_item.name || url_obj.hostname,
                media_uri: url,
                media_type: 'webpage',
                orientation: 'landscape',
            }),
        };
        for (const key in data) {
            if (!data[key]) delete data[key];
        }
        const result = await lastValueFrom(addSignageMedia(data));
        this._active_upload.next(null);
        this._change.next(Date.now());
        notifySuccess('Successfully added media from link');
        return result;
    }

    public async addMedia(
        file: File,
        media_item: SignageMedia = new SignageMedia({}),
    ) {
        const uploadDetails = (id) =>
            new Promise<{ id: string; link: string }>((resolve, reject) => {
                let state = null;
                let resolved = false;
                this.subscription(
                    `upload-${id}`,
                    this._uploads.upload_list.subscribe(
                        (list) => {
                            state = list.find(
                                (s) => s.upload?.id === id || s.id,
                            );
                            if (state && state.link) {
                                resolved = true;
                                resolve({
                                    id: state.upload.id || id,
                                    link: state.link,
                                });
                                this.unsub(`upload-${id}`);
                            }
                        },
                        reject,
                        () => (!resolved ? resolve(state) : null),
                    ),
                );
            });
        const [is_landscape] = await this._getMediaMetadata(file);
        const thumbnail_image = await this._generateThumbnail(
            file,
            1280,
            720,
        ).catch(() => null);
        const media_id = await this._uploads.uploadFileWithPermissions(file);
        const media = await uploadDetails(media_id);
        let thumbnail = null;
        if (thumbnail_image) {
            const name_parts = file.name.split('.');
            name_parts.pop(); // Drop the extension
            const name = `thumb+${name_parts.join('.')}.jpg`;

            const thumb_id = await this._uploads.uploadFile(
                dataURLtoFile(thumbnail_image, name),
                true,
            );
            thumbnail = await uploadDetails(thumb_id);
        }
        const data = {
            ...new SignageMedia({
                ...media_item,
                name: media_item.name || file.name,
                media_id: media.id,
                media_uri: media.link,
                media_type: file.type.includes('image') ? 'image' : 'video',
                orientation: is_landscape ? 'landscape' : 'portrait',
                thumbnail_id: thumbnail.id,
            }),
        };
        for (const key in data) {
            if (!data[key]) delete data[key];
        }
        const result = await lastValueFrom(addSignageMedia(data));
        this._active_upload.next(null);
        this._change.next(Date.now());
        return result;
    }

    public async updateMedia(item: SignageMedia) {
        if (!item?.id) return;
        await lastValueFrom(updateSignageMedia(item.id, item));
    }

    public async approvePlaylist(playlist: SignagePlaylist) {
        this._dialog.open(SignageApprovePlaylistModalComponent, {
            data: playlist,
        });
    }

    public async removeMedia(item: SignageMedia) {
        if (!item?.id) return;
        const result = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE'),
                content: i18n('APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE_MSG', {
                    name: item.name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        result.loading(i18n('APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE_LOADING'));
        await removeSignageMedia(item.id).toPromise();
        this._change.next(Date.now());
        notifySuccess(i18n('APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE_SUCCESS'));
        result.close();
    }

    private _getMediaMetadata(file: File) {
        return new Promise<[boolean, number]>((resolve) => {
            const url = URL.createObjectURL(file);
            // file is loaded
            if (file.type.includes('video')) {
                const video = document.createElement('video');
                video.src = url.toString();
                video.addEventListener('loadedmetadata', () => {
                    const { videoWidth, videoHeight } = video;
                    resolve([videoWidth > videoHeight, video.duration]);
                });
                video.load();
            } else {
                const img = new Image();
                img.onload = () => resolve([img.width > img.height, 0]);
                img.src = url.toString(); // is the data URL because called with readAsDataURL
            }
        });
    }

    private async _generateThumbnail(
        file: File,
        max_width: number,
        max_height: number,
    ) {
        console.log('File:', file, max_width, max_height);
        if (file.type.includes('video')) {
            return this._generateVideoThumbnail(file, max_width, max_height);
        } else if (file.type.includes('image') || file.type.includes('svg')) {
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
            console.log('Image:', img.src);

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
            // Create video element
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

                // Clean up
                URL.revokeObjectURL(video.src);
                resolve(image);
            };

            video.onerror = reject;
        });
    }

    private _generateThumbnailFromResource(
        data,
        source_width,
        source_height,
        max_width: number,
        max_height: number,
    ) {
        // Create canvas element
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Calculate thumbnail dimensions
        let thumbnailWidth = source_width;
        let thumbnailHeight = source_height;
        const aspectRatio = thumbnailWidth / thumbnailHeight;

        if (thumbnailWidth > max_width) {
            thumbnailWidth = max_height;
            thumbnailHeight = thumbnailWidth / aspectRatio;
        }

        if (thumbnailHeight > max_height) {
            thumbnailHeight = max_width;
            thumbnailWidth = thumbnailHeight * aspectRatio;
        }

        canvas.width = thumbnailWidth;
        canvas.height = thumbnailHeight;

        // Draw video frame on canvas
        ctx.drawImage(data, 0, 0, thumbnailWidth, thumbnailHeight);

        // Convert canvas to data URL
        const dataURL = canvas.toDataURL('image/jpeg');

        return dataURL;
    }
}
