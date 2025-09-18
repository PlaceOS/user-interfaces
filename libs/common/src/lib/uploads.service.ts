import { Injectable, InjectionToken, Type, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';

import { log } from './general';
import { UploadDetails, UploadPermissions, uploadFile } from './uploads';

export const UPLOAD_PERMISSIONS_MODAL = new InjectionToken<Type<any>>(
    'UploadPermissionsModalComponent',
);

@Injectable({
    providedIn: 'root',
})
export class UploadsService {
    private _dialog = inject(MatDialog);
    private _permissions_modal = inject(UPLOAD_PERMISSIONS_MODAL);

    private _upload_list = new BehaviorSubject<UploadDetails[]>([]);

    public readonly upload_list = this._upload_list.asObservable();

    constructor() {
        if (localStorage) {
            this._upload_list.next(
                JSON.parse(localStorage.getItem('BACKOFFICE.uploads') || '[]'),
            );
        }
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
            uploadFile(file, pub, permissions).subscribe(
                update_fn,
                update_fn,
                () => this._updateUploadHistory(),
            );
        });
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
}
