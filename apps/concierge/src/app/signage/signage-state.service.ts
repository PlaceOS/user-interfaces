import { inject, Injectable } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import {
    AsyncHandler,
    Attachment,
    i18n,
    notifyError,
    notifySuccess,
    OrganisationService,
    SettingsService,
    UploadsService,
} from '@placeos/common';
import {
    addSignageMedia,
    addSignagePlaylist,
    listSignagePlaylistMedia,
    PlaceSystem,
    PlaceZone,
    querySignageMedia,
    querySignagePlaylists,
    querySystems,
    queryZones,
    removeSignageMedia,
    removeSignagePlaylist,
    removeSystem,
    SignageMedia,
    SignagePlaylist,
    token,
    updateSignageMedia,
    updateSignagePlaylist,
    updateSignagePlaylistMedia,
    updateSystem,
} from '@placeos/ts-client';
import {
    BehaviorSubject,
    combineLatest,
    from,
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
    startWith,
    switchMap,
} from 'rxjs/operators';

import { MatDialog } from '@angular/material/dialog';
import { SignedRequest } from '@placeos/cloud-uploads';
import { openConfirmModal } from '@placeos/components';
import { SignageApprovePlaylistModalComponent } from './signage-approve-playlist-modal.component';
import { SignageDisplayModalComponent } from './signage-display-modal.component';
import { SignageMediaModalComponent } from './signage-media-modal.component';
import { SignageMediaPreviewModalComponent } from './signage-media-preview-modal.component';
import { SignagePlaylistModalComponent } from './signage-playlist-modal.component';

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

function cleanPlaylistPayload(playlist: Partial<SignagePlaylist>) {
    // Temporary workaround until the backend ignores blank playlist fields.
    return Object.fromEntries(
        Object.entries(playlist).filter(
            ([, value]) =>
                value !== '' && value !== null && value !== undefined,
        ),
    ) as Partial<SignagePlaylist>;
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
        toObservable(this._org.active_building),
        this._change,
    ]).pipe(
        filter(([_]) => !!_?.id),
        debounceTime(300),
        switchMap(() => querySignageMedia({ limit: 2500 } as any)),
        map((_) => _.data.sort((a, b) => b.created_at - a.created_at)),
        startWith([] as SignageMedia[]),
        shareReplay(1),
    );

    public readonly playlists: Observable<SignagePlaylist[]> = combineLatest([
        toObservable(this._org.active_building),
        this._change,
    ]).pipe(
        filter(([_]) => !!_?.id),
        debounceTime(300),
        switchMap(() => querySignagePlaylists({ limit: 500 } as any)),
        map((_) => (_.data || []).sort((a, b) => a.name.localeCompare(b.name))),
        startWith([] as SignagePlaylist[]),
        shareReplay(1),
    );

    public readonly displays: Observable<PlaceSystem[]> = combineLatest([
        toObservable(this._org.active_region),
        toObservable(this._org.active_building),
        this._change,
    ]).pipe(
        filter(([, bld]) => !!bld?.id),
        switchMap(([region, bld]) =>
            from(
                querySystems({
                    zone_id:
                        (this._settings.get('app.use_region')
                            ? region?.id
                            : '') || bld?.id,
                    limit: 500,
                    signage: true,
                }),
            ).pipe(
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
        startWith([] as PlaceSystem[]),
        shareReplay(1),
    );

    public readonly zones = combineLatest([
        toObservable(this._org.active_building),
        this._change,
    ]).pipe(
        switchMap(() =>
            from(
                queryZones({
                    limit: 250,
                    tags: 'signage',
                } as any),
            ).pipe(catchError(() => of({ data: [] }))),
        ),
        map((_) =>
            (_.data || []).sort((a, b) =>
                (a.display_name || a.name).localeCompare(
                    b.display_name || b.name,
                ),
            ),
        ),
        startWith([] as PlaceZone[]),
        shareReplay(1),
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
            await updateSystem(display.id, {
                signage: false,
            } as any);
        } else {
            await removeSystem(display.id);
        }
        this._change.next(Date.now());
        notifySuccess(i18n('APP.CONCIERGE.SIGNAGE_DISPLAYS_REMOVE_SUCCESS'));
        result.close();
    }

    public async savePlaylist(playlist: Partial<SignagePlaylist>) {
        const clean_playlist = cleanPlaylistPayload(playlist);
        const call = clean_playlist.id
            ? updateSignagePlaylist(clean_playlist.id, clean_playlist, 'put')
            : addSignagePlaylist(clean_playlist);
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
        await removeSignagePlaylist(playlist.id);
        notifySuccess(i18n('APP.CONCIERGE.SIGNAGE_PLAYLISTS_REMOVE_SUCCESS'));
        this._change.next(Date.now());
        result.close();
    }

    public async updatePlaylistMedia(playlist_id: string, list: string[]) {
        await updateSignagePlaylistMedia(playlist_id, list);
        notifySuccess(
            i18n('APP.CONCIERGE.SIGNAGE_PLAYLISTS_MEDIA_SAVE_SUCCESS'),
        );
        this.changed();
    }

    public async getPlaylistMedia(playlist_id: string) {
        const { items } = await listSignagePlaylistMedia(playlist_id);
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
                const media_list = await listSignagePlaylistMedia(playlist_id);
                const new_media_list = [...media_list.items, new_media.id];
                await updateSignagePlaylistMedia(playlist_id, new_media_list);
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
        const result = await addSignageMedia(data);
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

                const check_state = () => {
                    const list = this._uploads.upload_list();
                    console.log('Upload List:', list, id);
                    state = list.find((s) => id === s.id);
                    if (state?.error) {
                        this.clearInterval(`upload-${id}`);
                        reject(state.error);
                        return;
                    }
                    if (state && (state.link || state.progress >= 100)) {
                        resolved = true;
                        const uid = state.upload_id || state.upload?.id || id;
                        const url = `/api/engine/v2/uploads/${encodeURIComponent(
                            uid,
                        )}/url`;
                        resolve({
                            id: uid,
                            link: state.link || url,
                        });
                        this.clearInterval(`upload-${id}`);
                    }
                };
                this.interval(`upload-${id}`, check_state, 100);
                check_state();
            });
        const [is_landscape] = await this._getMediaMetadata(file);
        const thumbnail_image = await this._generateThumbnail(
            file,
            1280,
            720,
        ).catch(() => null);
        const media_id = await this._uploads.uploadFileWithPermissions(file);
        const tkn = token();
        if (!tkn) throw new Error('Token expired. Try again.');
        SignedRequest.setToken(tkn);
        const media = await uploadDetails(media_id);
        let thumbnail = null;
        if (thumbnail_image) {
            const name_parts = file.name.split('.');
            name_parts.pop(); // Drop the extension
            const name = `thumb+${name_parts.join('.')}.jpg`;
            const thumb_id = await this._uploads.uploadFile(
                dataURLtoFile(thumbnail_image, name),
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
        const result = await addSignageMedia(data);
        this._active_upload.next(null);
        this.timeout('changed', () => this._change.next(Date.now()), 500);
        return result;
    }

    public async updateMedia(item: SignageMedia) {
        if (!item?.id) return;
        await updateSignageMedia(item.id, item);
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
        await removeSignageMedia(item.id);
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
