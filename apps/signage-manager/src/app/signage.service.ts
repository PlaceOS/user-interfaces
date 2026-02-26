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
    updateSignagePlaylistMedia,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, lastValueFrom, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';
import { MediaPreviewModalComponent } from './shared/media-preview-modal.component';
import { PlaylistSelectModalComponent } from './shared/playlist-select-modal.component';

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
            data: {
                url: item.media_url || item.media_uri,
                type: item.media_type,
                name: item.name,
                save: false,
            },
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
        const media_item = await this.addMedia(file);
        if (playlist_id && media_item?.id) {
            const media_list = await lastValueFrom(
                listSignagePlaylistMedia(playlist_id),
            );
            const new_media_list = [...media_list.items, media_item.id];
            await this.updatePlaylistMedia(playlist_id, new_media_list);
        }
        element.value = '';
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
        this.changed();
        notifySuccess('Media link added');
        return result;
    }

    public async addMedia(
        file: File,
        media_item: SignageMedia = new SignageMedia({}),
    ) {
        const media_id = await this._uploads.uploadFileWithPermissions(file);
        const media_url = `${
            location.origin
        }/api/engine/v2/uploads/${encodeURIComponent(media_id)}/url`;
        const data = {
            ...new SignageMedia({
                ...media_item,
                name: media_item.name || file.name,
                media_id,
                media_uri: media_url,
                media_type: file.type.includes('image') ? 'image' : 'video',
                orientation: 'landscape',
            }),
        };
        for (const key in data) {
            if (!data[key]) delete data[key];
        }
        const result = await lastValueFrom(addSignageMedia(data));
        this.changed();
        notifySuccess('Media uploaded');
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

    public editMedia() {
        notifyError('Edit media is not implemented yet in signage manager.');
    }
}
