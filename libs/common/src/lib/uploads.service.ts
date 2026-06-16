import {
    inject,
    Injectable,
    InjectionToken,
    signal,
    Type,
    WritableSignal,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
    humanReadableByteCount,
    initUploads,
    uploadFile,
} from '@placeos/cloud-uploads';
import { authorise, token } from '@placeos/ts-client';
import { AsyncHandler } from './async-handler.class';
import { log } from './general';

import { randomString } from './general';

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
    upload: any;
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

    private _upload_list = signal<UploadDetails[]>([]);

    public readonly upload_list = this._upload_list.asReadonly();

    constructor() {
        super();
        if (localStorage) {
            this._upload_list.set(
                JSON.parse(localStorage.getItem('BACKOFFICE.uploads') || '[]'),
            );
        }
    }

    public init(tries = 1) {
        this.timeout('init_uploads', () => {
            try {
                this._initUploads();
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
        const in_progress_list = this._upload_list().filter(
            (file) => file.progress < 100 && !file.error,
        );
        this._upload_list.set(in_progress_list);
    }

    public uploadFileWithPermissions(file: File, default_public = false) {
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
                if (!details) return reject();
                const id = await this.uploadFile(
                    details.file,
                    details.is_public,
                    details.permissions,
                ).catch((e) => {
                    reject(e);
                    throw e;
                });
                resolve(id);
            });
        });
    }

    public uploadFile(
        file: File,
        pub = false,
        permissions: UploadPermissions = 'none',
    ) {
        return new Promise<string>((resolve, reject) => {
            let resolved = false;
            const update_fn = (details) => {
                if (!resolved) {
                    resolve(
                        details.upload_id || details.upload?.id || details.id,
                    );
                    resolved = true;
                }
                this._upload_list.set([
                    ...this._upload_list().filter((_) => _.id !== details.id),
                    details,
                ]);
            };
            this._uploadFile(file, pub, permissions, {
                next: update_fn,
                error: (details) => {
                    if (details?.id) update_fn(details);
                    if (!resolved) reject(details);
                },
                complete: () => this._updateUploadHistory(),
            });
        });
    }

    public async uploadFileToCompletion(
        file: File,
        pub = false,
        permissions: UploadPermissions = 'none',
    ) {
        const details = await this._uploadFileToDetails(file, pub, permissions);
        const upload_id = details.upload_id || details.upload?.id || details.id;
        if (!upload_id) throw new Error('Failed to get uploaded file ID');
        return upload_id;
    }

    public uploadFileWithPermissionsToCompletion(
        file: File,
        default_public = false,
    ) {
        if (!this._permissions_modal) {
            log(
                'UPLOAD',
                'Permissions modal not initialized',
                undefined,
                'warn',
            );
            return this.uploadFileToCompletion(file, default_public);
        }
        return new Promise<string>((resolve, reject) => {
            const ref = this._dialog.open(this._permissions_modal, {
                data: { file, is_public: default_public },
            });
            ref.afterClosed().subscribe((details) => {
                if (!details) {
                    reject(new Error('Upload cancelled'));
                    return;
                }
                this.uploadFileToCompletion(
                    details.file,
                    details.is_public,
                    details.permissions,
                ).then(resolve, reject);
            });
        });
    }

    public uploadFileWithProgress(
        file: File,
        pub = false,
        permissions: UploadPermissions = 'none',
    ): WritableSignal<UploadDetails> {
        const progress = signal<UploadDetails>(null);
        this._uploadFile(file, pub, permissions, {
            next: (details) => progress.set(details),
            error: (details) => progress.set(details),
            complete: () => this._updateUploadHistory(),
        });
        return progress;
    }

    private _updateUploadHistory() {
        const done_list = this._upload_list().filter(
            (file) => file.progress >= 100,
        );
        done_list.forEach((i) => delete i.upload);
        if (localStorage) {
            localStorage.setItem('PLACEOS.uploads', JSON.stringify(done_list));
        }
    }

    private _initUploads() {
        initUploads({
            auto_start: true,
            token: token(),
            endpoint: '/api/engine/v2/uploads',
            worker_url: 'assets/md5_worker.js',
        });
    }

    private async _updateUploadToken() {
        if (!token(false)) await authorise();
        this._initUploads();
    }

    /**
     * Upload the given file to the cloud
     * @param file File to upload
     */
    private _uploadFile(
        file: File,
        pub = false,
        permissions: UploadPermissions = 'none',
        observer: {
            next: (_: UploadDetails) => void;
            error: (_: any) => void;
            complete: () => void;
        },
    ) {
        this._updateUploadToken()
            .then(() =>
                uploadFile(file, {
                    permissions,
                    public: pub,
                }),
            )
            .then((upload) => {
                const upload_details: UploadDetails = {
                    id: upload?.id || `upi-${randomString(8)}`,
                    name: file.name,
                    progress: 0,
                    link: '',
                    formatted_size: humanReadableByteCount(file.size),
                    size: file.size,
                    upload,
                };
                upload.state.subscribe((state) => {
                    upload_details.upload_id = upload.id;
                    console.log('Upload:', state, upload);
                    if ((upload as any).access_url || state.progress >= 100) {
                        const local_url = `${
                            location.origin
                        }/api/engine/v2/uploads/${encodeURIComponent(
                            upload_details.upload_id || upload.id,
                        )}/url`;
                        upload_details.link = local_url;
                    }
                    upload_details.progress = state.progress;
                    observer.next(upload_details);
                    if (state.status === 'FAILED') {
                        observer.error({
                            ...upload_details,
                            error: (state as any).error || 'Error',
                        });
                    }
                    if (state.status === 'COMPLETED') observer.complete();
                });
                observer.next(upload_details);
            })
            .catch((upload_error) => observer.error(upload_error));
    }

    private _uploadFileToDetails(
        file: File,
        pub = false,
        permissions: UploadPermissions = 'none',
    ) {
        return new Promise<UploadDetails>((resolve, reject) => {
            let last_details: UploadDetails;
            this._uploadFile(file, pub, permissions, {
                next: (details) => {
                    last_details = details;
                },
                error: reject,
                complete: () => {
                    this._updateUploadHistory();
                    resolve(last_details);
                },
            });
        });
    }
}
