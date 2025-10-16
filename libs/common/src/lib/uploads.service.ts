import { Injectable, InjectionToken, Type, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';

import {
    Amazon,
    Azure,
    Google,
    OpenStack,
    initialiseUploadService,
} from '@placeos/cloud-uploads';
import { token } from '@placeos/ts-client';
import { AsyncHandler } from './async-handler.class';
import { log } from './general';

import {
    Upload,
    humanReadableByteCount,
    uploadFiles,
} from '@placeos/cloud-uploads';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

import { randomString } from './general';

import * as blobUtil from 'blob-util';

export interface UploadDetails {
    /** Unique ID for the upload */
    id: string;
    /** Unique ID for the upload */
    upload_id?: string;
    /** Name of the file uploaded */
    name: string;
    /** Progress of the file upload */
    progress: number;
    /** Link to the uploaded file */
    link: string;
    /** Formatted file size */
    formatted_size: string;
    /** Size of the file being uploaded */
    size: number;
    /** Error with upload request */
    error?: string;
    /** Upload object associated with the file */
    upload: Upload;
}

export type UploadPermissions = 'none' | 'support' | 'admin';

export const UPLOAD_PERMISSIONS_MODAL = new InjectionToken<Type<any>>(
    'UploadPermissionsModalComponent',
);

@Injectable({
    providedIn: 'root',
})
export class UploadsService extends AsyncHandler {
    private _dialog = inject(MatDialog);
    private _permissions_modal = inject(UPLOAD_PERMISSIONS_MODAL, {
        optional: true,
    });

    private _upload_list = new BehaviorSubject<UploadDetails[]>([]);

    public readonly upload_list = this._upload_list.asObservable();

    constructor() {
        super();
        if (localStorage) {
            this._upload_list.next(
                JSON.parse(localStorage.getItem('BACKOFFICE.uploads') || '[]'),
            );
        }
    }

    public init(tries = 1) {
        this.timeout('init_uploads', () => {
            try {
                initialiseUploadService({
                    auto_start: true,
                    token: token(),
                    endpoint: '/api/engine/v2/uploads',
                    worker_url: 'assets/md5_worker.js',
                    providers: [Amazon, Azure, Google, OpenStack] as any,
                });
            } catch (e) {
                this.timeout(
                    'init_uploads',
                    () => this.init((tries += 1)),
                    1000 * tries,
                );
            }
        });
    }

    public clearList() {
        const in_progress_list = this._upload_list
            .getValue()
            .filter((file) => file.progress < 100 && !file.error);
        this._upload_list.next(in_progress_list);
    }

    public uploadFileWithPermissions(file: File, default_public = true) {
        if (!this._permissions_modal) {
            log(
                'UPLOAD',
                'Permissions modal not initialized',
                undefined,
                'warn',
            );
            return this.uploadFile(file, default_public);
        }
        return new Promise<string>((resolve, reject) => {
            const ref = this._dialog.open(this._permissions_modal, {
                data: { file, is_public: default_public },
            });
            ref.afterClosed().subscribe(async (details) => {
                if (details) {
                    const id = await this.uploadFile(
                        details.file,
                        details.is_public,
                        details.permissions,
                    ).catch((e) => {
                        reject(e);
                        throw e;
                    });
                    resolve(id);
                } else reject();
            });
        });
    }

    public uploadFile(
        file: File,
        pub = true,
        permissions: UploadPermissions = 'none',
    ) {
        return new Promise<string>((resolve) => {
            let resolved = false;
            const update_fn = (details) => {
                if (!resolved) {
                    resolve(details.upload?.id || details.id);
                    resolved = true;
                }
                this._upload_list.next([
                    ...this._upload_list
                        .getValue()
                        .filter((_) => _.id !== details.id),
                    details,
                ]);
            };
            this._uploadFile(file, pub, permissions).subscribe({
                next: update_fn,
                error: update_fn,
                complete: () => this._updateUploadHistory(),
            });
        });
    }

    public uploadFileWithProgress(
        file: File,
        pub = true,
        permissions: UploadPermissions = 'none',
    ): Observable<UploadDetails> {
        return this._uploadFile(file, pub, permissions);
    }

    private _updateUploadHistory() {
        const done_list = this._upload_list
            .getValue()
            .filter((file) => file.progress >= 100);
        done_list.forEach((i) => delete i.upload);
        if (localStorage) {
            localStorage.setItem('PLACEOS.uploads', JSON.stringify(done_list));
        }
    }

    /**
     * Upload the given file to the cloud
     * @param file File to upload
     */
    private _uploadFile(
        file: File,
        pub = true,
        permissions: UploadPermissions = 'none',
    ): Observable<UploadDetails> {
        return new Observable((observer) => {
            const fileReader = new FileReader();
            fileReader.addEventListener('loadend', (e: any) => {
                const arrayBuffer = e.target.result;
                const blob = blobUtil.arrayBufferToBlob(arrayBuffer, file.type);
                const upload_list = uploadFiles([blob], {
                    file_name: file.name,
                    permissions,
                    public: pub,
                } as any);
                const upload = upload_list[0];
                const upload_details: UploadDetails = {
                    id: upload?.id || `uploads-${randomString(8)}`,
                    name: file.name,
                    progress: 0,
                    link: '',
                    formatted_size: humanReadableByteCount(file.size),
                    size: file.size,
                    upload,
                };
                upload.status
                    .pipe(takeWhile((_) => _.status !== 'complete', true))
                    .subscribe((state) => {
                        upload_details.upload_id = (
                            upload as any
                        )._request.upload_id;
                        if (upload.access_url) {
                            upload_details.link = !pub
                                ? `${
                                      location.origin
                                  }/api/engine/v2/uploads/${encodeURIComponent(
                                      upload_details.upload_id || upload.id,
                                  )}/url`
                                : upload.access_url;
                        }
                        upload_details.progress = state.progress;
                        observer.next(upload_details);
                        if (state.status === 'error')
                            observer.error({
                                ...upload_details,
                                error: state.error,
                            });
                        if (state.status === 'complete') observer.complete();
                    });
                observer.next(upload_details);
            });
            fileReader.readAsArrayBuffer(file);
        });
    }
}
