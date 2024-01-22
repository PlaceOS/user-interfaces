import { Injectable } from '@angular/core';
import {
    notifyError,
    notifySuccess,
    randomString,
    uploadFile,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import {
    PlaceMetadata,
    queryZones,
    showMetadata,
    updateMetadata,
} from '@placeos/ts-client';
import { Attachment } from '@placeos/users';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
    take,
} from 'rxjs/operators';

import {
    SignageDisplay,
    SignageMedia,
    SignagePlaylist,
} from './signage.classes';
import { MatDialog } from '@angular/material/dialog';
import { SignageMediaPreviewModalComponent } from './signage-media-preview-modal.component';
import { SignagePlaylistModalComponent } from './signage-playlist-modal.component';
import { SignageDisplayModalComponent } from './signage-display-modal.component';

@Injectable({
    providedIn: 'root',
})
export class SignageStateService {
    private _loading = new BehaviorSubject(false);
    private _change = new BehaviorSubject(0);
    private _active_upload = new BehaviorSubject<Attachment>(null);

    public readonly loading = this._loading.asObservable();

    public readonly media: Observable<SignageMedia[]> = combineLatest([
        this._org.active_building,
        this._change,
    ]).pipe(
        filter(([_]) => !!_?.id),
        switchMap(([bld]) =>
            showMetadata(bld.id, 'signage-media').pipe(
                catchError(() => of({} as PlaceMetadata))
            )
        ),
        map((_) => (_.details instanceof Array ? _.details : null) || []),
        shareReplay(1)
    );

    public readonly playlists: Observable<SignagePlaylist[]> = combineLatest([
        this._org.active_building,
        this._change,
    ]).pipe(
        filter(([_]) => !!_?.id),
        switchMap(([bld]) =>
            showMetadata(bld.id, 'signage-playlists').pipe(
                catchError(() => of({} as PlaceMetadata))
            )
        ),
        map((_) => (_.details instanceof Array ? _.details : []))
    );

    public readonly displays: Observable<SignageDisplay[]> = combineLatest([
        this._org.active_building,
        this._change,
    ]).pipe(
        filter(([_]) => !!_?.id),
        switchMap(([bld]) =>
            showMetadata(bld.id, 'signage-displays').pipe(
                catchError(() => of({} as PlaceMetadata))
            )
        ),
        map((_) => (_.details instanceof Array ? _.details : []))
    );

    public readonly zones = combineLatest([
        this._org.active_building,
        this._change,
    ]).pipe(
        filter(([_]) => !!_?.id),
        switchMap(([bld]) =>
            queryZones({ parent_id: bld.id, tags: 'signage', limit: 100 }).pipe(
                catchError(() => of({ data: [] }))
            )
        ),
        map((_) => _.data || [])
    );

    constructor(
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {}

    public editPlaylist(playlist: SignagePlaylist = new SignagePlaylist()) {
        const ref = this._dialog.open(SignagePlaylistModalComponent, {
            data: playlist,
        });
        ref.afterClosed().subscribe(() => this._change.next(Date.now()));
    }

    public async savePlaylist(playlist: SignagePlaylist, remove = false) {
        const bld = this._org.building.id;
        const playlist_list =
            (await this.playlists.pipe(take(1)).toPromise()) || [];
        const idx = playlist_list.findIndex((_) => _.id === playlist.id);
        if (idx >= 0) playlist_list.splice(idx, 1);
        if (!playlist.id) (playlist as any).id = `playlist-${randomString(8)}`;
        if (!remove) playlist_list.push(playlist);
        await updateMetadata(bld, {
            name: 'signage-playlists',
            details: playlist_list,
            description: 'Playlists for signage displays',
        }).toPromise();
        notifySuccess(`Successfully ${remove ? 'removed' : 'saved'} playlist.`);
        this._change.next(Date.now());
    }

    public async removePlaylist(playlist: SignagePlaylist) {
        await this.savePlaylist(playlist, true);
    }

    public editDisplay(display: SignageDisplay = new SignageDisplay()) {
        const ref = this._dialog.open(SignageDisplayModalComponent, {
            data: display,
        });
        ref.afterClosed().subscribe(() => this._change.next(Date.now()));
    }

    public async saveDisplay(display: SignageDisplay, remove = false) {
        const bld = this._org.building.id;
        const display_list = await this.displays.pipe(take(1)).toPromise();
        const idx = display_list.findIndex((_) => _.id === display.id);
        if (idx >= 0) display_list.splice(idx, 1);
        if (!display.id) (display as any).id = `display-${randomString(8)}`;
        if (!remove) display_list.push(display);
        await updateMetadata(bld, {
            name: 'signage-displays',
            details: display_list,
            description: 'Displays for signage displays',
        }).toPromise();
        notifySuccess(`Successfully ${remove ? 'removed' : 'saved'} display.`);
        this._change.next(Date.now());
    }

    public async removeDisplay(display: SignageDisplay) {
        await this.saveDisplay(display, true);
    }

    public previewMedia(item: SignageMedia) {
        const { url, type, name } = item;
        const ref = this._dialog.open(SignageMediaPreviewModalComponent, {
            data: { url, type, name, save: false },
        });
        ref.afterClosed().subscribe(() => URL.revokeObjectURL(url));
    }

    public previewFileMedia(media: File) {
        const url = URL.createObjectURL(media);
        const type = media.type.includes('image') ? 'image' : 'video';
        const ref = this._dialog.open(SignageMediaPreviewModalComponent, {
            data: { url, type, name: media.name, save: true, file: media },
        });
        ref.afterClosed().subscribe(() => URL.revokeObjectURL(url));
        ref.componentInstance.save.subscribe(async () => {
            ref.componentInstance.loading = 'Saving...';
            await this.addMedia(media).catch((e) => {
                notifyError('Error saving media.');
                ref.componentInstance.loading = '';
                throw e;
            });
            ref.close();
        });
    }

    public async addMedia(file: File) {
        const upload = () =>
            new Promise<string>((resolve, reject) => {
                let state = null;
                let resolved = false;
                uploadFile(file).subscribe(
                    (s) => {
                        state = s;
                        if (s.link) {
                            resolved = true;
                            resolve(s.link);
                        }
                    },
                    reject,
                    () => (!resolved ? resolve(state) : null)
                );
            });
        const media = await upload();
        const media_list = await this.media.pipe(take(1)).toPromise();
        const video_metadata = new Promise<[boolean, number]>((resolve) => {
            const url = URL.createObjectURL(file);
            // file is loaded
            if (file.type.includes('video')) {
                let video = document.createElement('video');
                video.src = url.toString();
                video.addEventListener('loadedmetadata', () => {
                    const { videoWidth, videoHeight } = video;
                    resolve([videoWidth > videoHeight, duration]);
                });
                video.load();
            } else {
                let img = new Image();
                img.onload = () => resolve([img.width > img.height, 0]);
                img.src = url.toString(); // is the data URL because called with readAsDataURL
            }
        });
        const [is_landscape, duration] = await video_metadata;
        media_list.push({
            id: `media-${randomString(8)}`,
            name: file.name,
            description: '',
            url: media,
            type: file.type.includes('image') ? 'image' : 'video',
            orientation: is_landscape ? 'landscape' : 'portrait',
            duration: duration || 15,
        });
        const bld = this._org.building.id;
        await updateMetadata(bld, {
            name: 'signage-media',
            details: media_list,
            description: 'Media for signage displays',
        }).toPromise();
        this._active_upload.next(null);
        this._change.next(Date.now());
    }
}
