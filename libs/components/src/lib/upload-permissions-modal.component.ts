import { Component, NO_ERRORS_SCHEMA, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UploadPermissions } from '@placeos/common';
import { IconComponent } from './icon.component';
import { SettingsToggleComponent } from './settings-toggle.component';

@Component({
    selector: 'upload-permissions-modal',
    template: `
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">Upload File</h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="min-w-[20rem] space-y-2 px-4 py-2">
            <div class="flex flex-col">
                <label>File Name</label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <input
                        matInput
                        [ngModel]="file.name"
                        disabled="true"
                        placeholder="File Name"
                    />
                </mat-form-field>
            </div>
            <div>
                <settings-toggle [(ngModel)]="is_public"
                    >Public</settings-toggle
                >
            </div>
            @if (!is_public) {
                <div class="flex flex-col space-y-2">
                    <label>Permissions</label>
                    <mat-form-field appearance="outline">
                        <mat-select [(ngModel)]="permissions">
                            <mat-option value="none">None</mat-option>
                            <mat-option value="support">Support</mat-option>
                            <mat-option value="admin">Admin</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            }
        </main>
        <footer
            class="flex items-center justify-end space-x-2 border-t border-base-200 px-4 py-2"
        >
            <button btn matRipple class="inverse w-32" mat-dialog-close>
                Cancel
            </button>
            <button
                btn
                matRipple
                class="w-32"
                [mat-dialog-close]="{ file, is_public, permissions }"
            >
                Upload
            </button>
        </footer>
    `,
    schemas: [NO_ERRORS_SCHEMA],
    styles: [``],
    imports: [
        MatDialogModule,
        MatFormFieldModule,
        FormsModule,
        MatSelectModule,
        SettingsToggleComponent,
        IconComponent,
        MatInputModule,
        MatRippleModule,
    ],
})
export class UploadPermissionsModalComponent {
    private _dialog_ref =
        inject<MatDialogRef<UploadPermissionsModalComponent>>(MatDialogRef);
    private _data = inject<{
        file: File;
        is_public: boolean;
    }>(MAT_DIALOG_DATA);

    /** File to upload */
    public readonly file: File = this._data.file;
    /** Whether file should be public */
    public is_public = !!this._data.is_public;
    /** Permissions for file */
    public permissions: UploadPermissions = 'none';

    constructor() {
        this.file = this._data.file;
    }

    public close() {
        this._dialog_ref.close();
    }
}
