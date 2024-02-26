import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UploadDetails, UploadPermissions, uploadFile } from './uploads';
import { MatDialog } from '@angular/material/dialog';
import { UploadPermissionsModalComponent } from 'libs/components/src/lib/upload-permissions-modal.component';

@Injectable({
    providedIn: 'root',
})
export class UploadsService {
    private _upload_list = new BehaviorSubject<UploadDetails[]>([]);

    public readonly upload_list = this._upload_list.asObservable();

    constructor(private _dialog: MatDialog) {
        if (localStorage) {
            this._upload_list.next(
                JSON.parse(localStorage.getItem('BACKOFFICE.uploads') || '[]')
            );
        }
    }

    public clearList() {
        const in_progress_list = this._upload_list
            .getValue()
            .filter((file) => file.progress < 100 && !file.error);
        this._upload_list.next(in_progress_list);
    }

    public uploadFileWithPermissions(file: File) {
        return new Promise<number>((resolve, reject) => {
            const ref = this._dialog.open(UploadPermissionsModalComponent, {
                data: { file },
            });
            ref.afterClosed().subscribe(async (details) => {
                if (details) {
                    const id = await this.uploadFile(
                        details.file,
                        details.is_public,
                        details.permissions
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
        pub: boolean = true,
        permissions: UploadPermissions = 'none'
    ) {
        return new Promise<number>((resolve) => {
            let resolved = false;
            const update_fn = (details) => {
                if (!resolved) {
                    resolve(details.id);
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
                () => this._updateUploadHistory()
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
