import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UploadPermissions } from '@placeos/common';

@Component({
    selector: 'upload-permissions-modal',
    template: `
        <header>
            <h2>Upload File</h2>
            <button btn icon mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="p-4 min-w-[20rem]">
            <div class="flex flex-col space-y-2">
                <label>File Name</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        [ngModel]="file.name"
                        disabled="true"
                        placeholder="File Name"
                    />
                </mat-form-field>
            </div>
            <div class="pb-4">
                <mat-checkbox [(ngModel)]="is_public">Public</mat-checkbox>
            </div>
            <div class="flex flex-col space-y-2" *ngIf="!is_public">
                <label>Permissions</label>
                <mat-form-field appearance="outline">
                    <mat-select [(ngModel)]="permissions">
                        <mat-option value="none">None</mat-option>
                        <mat-option value="support">Support</mat-option>
                        <mat-option value="admin">Admin</mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
        </main>
        <footer
            class="flex items-center justify-end space-x-2 px-4 py-2 border-t border-base-200"
        >
            <button btn class="inverse w-32" mat-dialog-close>Cancel</button>
            <button
                btn
                class="w-32"
                [mat-dialog-close]="{ file, is_public, permissions }"
            >
                Upload
            </button>
        </footer>
    `,
    styles: [``],
})
export class UploadPermissionsModalComponent {
    /** File to upload */
    public readonly file: File = this._data.file;
    /** Whether file should be public */
    public is_public: boolean = true;
    /** Permissions for file */
    public permissions: UploadPermissions = 'none';

    constructor(
        private _dialog_ref: MatDialogRef<UploadPermissionsModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: { file: File }
    ) {
        this.file = this._data.file;
    }

    public close() {
        this._dialog_ref.close();
    }
}
