import {
    EnvironmentInjector,
    inject,
    Injectable,
    InjectionToken,
    signal,
    Type,
    WritableSignal,
} from '@angular/core';
import { apiKey, authorise, token } from '@placeos/ts-client';
import { firstValueFrom } from 'rxjs';
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

/**
 * Rejection raised when the user dismisses the upload permissions modal.
 * Lets consumers skip error messaging for a deliberate cancellation.
 */
export class UploadCancelledError extends Error {
    constructor() {
        super('Upload cancelled');
        this.name = 'UploadCancelledError';
    }
}

/** Failure of an upload, carrying the details of the attempt that failed */
export class UploadFailedError extends Error {
    constructor(
        message: string,
        public readonly details?: UploadDetails,
    ) {
        super(message);
        this.name = 'UploadFailedError';
    }
}

/**
 * Loads the uploads library on first use. This file is in every app's initial
 * bundle, and most apps only upload from lazy screens.
 */
const loadCloudUploads = () => import('@placeos/cloud-uploads');

/** How many times a failed upload is re-attempted before reporting failure */
const UPLOAD_RETRY_ATTEMPTS = 3;

function uploadStateError(state: { error?: string } | any) {
    return state?.error || 'Upload failed';
}

/** Normalise whatever an upload failed with into a throwable error */
function uploadFailure(details: any) {
    if (details instanceof Error) return details;
    return new UploadFailedError(
        details?.error || 'Upload failed',
        details as UploadDetails,
    );
}

export const UPLOAD_PERMISSIONS_MODAL = new InjectionToken<Type<any>>(
    'UploadPermissionsModalComponent',
);

@Injectable({
    providedIn: 'root',
})
export class UploadsService extends AsyncHandler {
    private _injector = inject(EnvironmentInjector);
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
            this._initUploads().catch(() =>
                this.timeout(
                    'init_uploads',
                    () => this.init((tries += 1)),
                    1000 * tries,
                ),
            );
        });
    }

    public clearList() {
        const in_progress_list = this._upload_list().filter(
            (file) => file.progress < 100 && !file.error,
        );
        this._upload_list.set(in_progress_list);
    }

    public async uploadFileWithPermissions(file: File, default_public = false) {
        if (!this._permissions_modal) {
            log(
                'UPLOAD',
                'Permissions modal not initialized',
                undefined,
                'warn',
            );
            return this.uploadFile(file, default_public);
        }
        const details = await this._askPermissions(file, default_public);
        return this.uploadFile(
            details.file,
            details.is_public,
            details.permissions,
        );
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
                    if (!resolved) reject(uploadFailure(details));
                },
                complete: () => this._updateUploadHistory(),
            });
        });
    }

    public async uploadFileToCompletion(
        file: File,
        pub = false,
        permissions: UploadPermissions = 'none',
        on_progress?: (progress: number) => void,
    ) {
        const details = await this._uploadFileToDetails(
            file,
            pub,
            permissions,
            on_progress,
        );
        const upload_id = details.upload_id || details.upload?.id || details.id;
        if (!upload_id) throw new Error('Failed to get uploaded file ID');
        return upload_id;
    }

    public async uploadFileWithPermissionsToCompletion(
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
        const details = await this._askPermissions(file, default_public);
        return this.uploadFileToCompletion(
            details.file,
            details.is_public,
            details.permissions,
        );
    }

    /**
     * Opens the permissions modal and waits for its result. The dialog
     * service is loaded on demand to keep it out of the initial bundle.
     */
    private async _askPermissions(file: File, is_public: boolean) {
        const { MatDialog } = await import('@angular/material/dialog');
        const ref = this._injector
            .get(MatDialog)
            .open(this._permissions_modal, { data: { file, is_public } });
        const details = await firstValueFrom(ref.afterClosed(), {
            defaultValue: null,
        });
        if (!details) throw new UploadCancelledError();
        return details;
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

    private async _initUploads() {
        const { initUploads } = await loadCloudUploads();
        const api_key = apiKey();
        initUploads({
            auto_start: true,
            // token() returns the literal string "x-api-key" when the session
            // is authenticated with an API key, which is not a usable bearer
            // token; the uploads API needs the key in its own header.
            ...(api_key ? { api_key } : { token: token() }),
            endpoint: '/api/engine/v2/uploads',
            worker_url: 'assets/md5_worker.js',
        });
    }

    private _token_refresh: Promise<void> | null = null;

    private _updateUploadToken() {
        // ponytail: shared promise so concurrent failed uploads trigger one refresh
        this._token_refresh ||= (async () => {
            if (!apiKey() && !token(false)) await authorise();
            await this._initUploads();
        })().finally(() => (this._token_refresh = null));
        return this._token_refresh;
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
            .then(() => loadCloudUploads())
            .then(async ({ humanReadableByteCount, uploadFile }) => {
                const upload = await uploadFile(file, {
                    permissions,
                    public: pub,
                });
                const upload_details: UploadDetails = {
                    id: upload?.id || `upi-${randomString(8)}`,
                    name: file.name,
                    progress: 0,
                    link: '',
                    formatted_size: humanReadableByteCount(file.size),
                    size: file.size,
                    upload,
                };
                let attempts = 0;
                let settled = false;
                let subscription: { unsubscribe: () => void };
                // The state is a BehaviorSubject, so this can run before
                // `subscription` has been assigned.
                const stop = () => {
                    settled = true;
                    Promise.resolve().then(() => subscription?.unsubscribe());
                };
                subscription = upload.state.subscribe(async (state) => {
                    if (settled) return;
                    upload_details.upload_id = upload.id;
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
                        if (attempts < UPLOAD_RETRY_ATTEMPTS) {
                            // Most often an expired credential; re-validate it
                            // and resume from the parts already uploaded.
                            attempts += 1;
                            await this._updateUploadToken();
                            if (settled) return;
                            upload.resume();
                            return;
                        }
                        stop();
                        observer.error({
                            ...upload_details,
                            error: uploadStateError(state),
                        });
                        return;
                    }
                    if (state.status === 'COMPLETED') {
                        stop();
                        observer.complete();
                    }
                });
                observer.next(upload_details);
            })
            .catch((upload_error) => observer.error(upload_error));
    }

    private _uploadFileToDetails(
        file: File,
        pub = false,
        permissions: UploadPermissions = 'none',
        on_progress?: (progress: number) => void,
    ) {
        return new Promise<UploadDetails>((resolve, reject) => {
            let last_details: UploadDetails;
            this._uploadFile(file, pub, permissions, {
                next: (details) => {
                    last_details = details;
                    on_progress?.(details.progress);
                },
                error: (details) => reject(uploadFailure(details)),
                complete: () => {
                    this._updateUploadHistory();
                    resolve(last_details);
                },
            });
        });
    }
}
