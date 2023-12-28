import { Injectable } from '@angular/core';
import { uploadFiles } from '@placeos/cloud-uploads';
import { notifySuccess, randomInt, randomString } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import {
    PlaceMetadata,
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
    takeWhile,
} from 'rxjs/operators';

import * as blobUtil from 'blob-util';
import { SignageMedia } from './signage.classes';
import { MatDialog } from '@angular/material/dialog';
import { SignageMediaPreviewModalComponent } from './signage-media-preview-modal.component';

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
        map(
            (_) =>
                (_.details instanceof Array ? _.details : null) || [
                    {
                        id: `media-${randomString(8)}`,
                        name: 'Welcome to PlaceOS',
                        description: 'This is a sample media file',
                        url: 'https://assets-global.website-files.com/6171e55cb416782d0a8e7a4c/6171e8d5fe3ffc10c0c800bc_PlaceOS-Logo-Dark-Alt.png',
                        type: 'image',
                        duration: 15,
                    },
                    {
                        id: `media-${randomString(8)}`,
                        name: 'Welcome to PlaceOS',
                        description: 'This is a sample media file',
                        url: 'https://assets-global.website-files.com/6171e55cb416782d0a8e7a4c/6171e8d5fe3ffc10c0c800bc_PlaceOS-Logo-Dark-Alt.png',
                        type: 'image',
                        duration: 30,
                    },
                    {
                        id: `media-${randomString(8)}`,
                        name: 'Welcome to PlaceOS',
                        description: 'This is a sample media file',
                        url: 'https://assets-global.website-files.com/6171e55cb416782d0a8e7a4c/6171e8d5fe3ffc10c0c800bc_PlaceOS-Logo-Dark-Alt.png',
                        type: 'image',
                        duration: 60,
                    },
                    {
                        id: `media-${randomString(8)}`,
                        name: 'Welcome to PlaceOS',
                        description: 'This is a sample media file',
                        url: 'https://assets-global.website-files.com/6171e55cb416782d0a8e7a4c/6171e8d5fe3ffc10c0c800bc_PlaceOS-Logo-Dark-Alt.png',
                        type: 'image',
                        duration: 15,
                    },
                    {
                        id: `media-${randomString(8)}`,
                        name: 'Welcome to PlaceOS',
                        description: 'This is a sample media file',
                        url: 'https://assets-global.website-files.com/6171e55cb416782d0a8e7a4c/6171e8d5fe3ffc10c0c800bc_PlaceOS-Logo-Dark-Alt.png',
                        type: 'image',
                        duration: 30,
                    },
                    {
                        id: `media-${randomString(8)}`,
                        name: 'Welcome to PlaceOS',
                        description: 'This is a sample media file',
                        url: 'https://assets-global.website-files.com/6171e55cb416782d0a8e7a4c/6171e8d5fe3ffc10c0c800bc_PlaceOS-Logo-Dark-Alt.png',
                        type: 'image',
                        duration: 60,
                    },
                ]
        ),
        shareReplay(1)
    );

    constructor(
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {}

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
            data: { url, type, name: media.name, save: true },
        });
        ref.afterClosed().subscribe(() => URL.revokeObjectURL(url));
    }

    public async addMedia(file: File) {
        const media = await this._uploadFile(file);
        const media_list = await this.media.pipe(take(1)).toPromise();
        media_list.push({
            id: `media-${randomString(8)}`,
            name: media.name,
            description: '',
            url: media.url,
            type: file.type.includes('image') ? 'image' : 'video',
            duration: 15,
        });
        const bld = this._org.building.id;
        await updateMetadata(bld, {
            name: 'signage-media',
            details: media_list,
            description: 'Media for signage displays',
        }).toPromise();
        notifySuccess('Successfully added media.');
        this._active_upload.next(null);
        this._change.next(Date.now());
    }

    private _uploadFile(file: File): Promise<Attachment> {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.addEventListener('loadend', (e: any) => {
                const arrayBuffer = e.target.result;
                const blob = blobUtil.arrayBufferToBlob(arrayBuffer, file.type);
                const upload_list = uploadFiles([blob], {
                    file_name: file.name,
                });
                const upload = upload_list[0];
                const upload_details: Attachment = {
                    id: `${randomInt(9999_9999_9999)}`,
                    name: file.name,
                    progress: 0,
                    size: file.size,
                    created_at: Date.now(),
                    url: '',
                };
                upload.status
                    .pipe(takeWhile((_) => _.status !== 'complete', true))
                    .subscribe(
                        (state) => {
                            if (upload.access_url)
                                upload_details.url = upload.access_url;
                            upload_details.progress = state.progress;
                            if (state.status === 'error') {
                                upload_details.progress = -1;
                                reject();
                            }
                        },
                        reject,
                        () => resolve(upload_details)
                    );
                this._active_upload.next(upload_details);
            });
            fileReader.readAsArrayBuffer(file);
        });
    }
}
