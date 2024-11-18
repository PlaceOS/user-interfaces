import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { notifyError } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { PlaceSystem, showMetadata, updateMetadata } from '@placeos/ts-client';

@Component({
    selector: 'room-alert-modal',
    template: `
        <header class="space-x-4">
            <h2>Set Alert for {{ room.display_name || room.name }}</h2>
            <button btn icon mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="max-h-[65vh] overflow-y-auto overflow-x-hidden p-4 min-w-[24rem] flex flex-col"
            *ngIf="!loading; else load_state"
            [formGroup]="form"
        >
            <label for="status" i18n="@@statusLabel">Status</label>
            <mat-form-field appearance="outline">
                <mat-select name="status" formControlName="status">
                    <mat-option value="">None</mat-option>
                    <mat-option value="info">Info</mat-option>
                    <mat-option value="warn">Warning</mat-option>
                    <mat-option value="closed">Closed</mat-option>
                </mat-select>
            </mat-form-field>
            <label for="message" i18n="@@messageLabel">Message</label>
            <mat-form-field appearance="outline">
                <textarea
                    matInput
                    name="message"
                    formControlName="message"
                ></textarea>
            </mat-form-field>
        </main>
        <footer
            class="p-2 flex justify-end border-t border-base-200"
            *ngIf="!loading"
        >
            <button btn class="w-32" (click)="save()">Save</button>
        </footer>
        <ng-template #load_state>
            <div class="flex flex-col items-center justify-center w-64 h-64">
                <mat-spinner diameter="32"></mat-spinner>
                <p class="mt-4">Saving room...</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class RoomAlertModalComponent {
    public loading = false;
    public readonly room: PlaceSystem = this._data.room;
    public readonly form = new FormGroup({
        status: new FormControl(''),
        message: new FormControl(''),
    });

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: { room: PlaceSystem },
        private _dialog_ref: MatDialogRef<RoomAlertModalComponent>,
        private _org: OrganisationService,
    ) {
        this.form.patchValue((this.room as any).alert || {});
    }

    public async save() {
        this.loading = true;
        const metadata = await showMetadata(
            this._org.organisation.id,
            'room_alerts',
        )
            .toPromise()
            .catch((e) => {
                notifyError(
                    `Error loading existing room alert details: ${e.message || e}`,
                );
                this.loading = false;
                throw e;
            });
        const alert = this.form.getRawValue();
        if (alert.status === '') {
            delete metadata.details[this.room.id];
        } else {
            metadata.details[this.room.id] = [alert.status, alert.message];
        }
        await updateMetadata(this._org.organisation.id, {
            name: 'room_alerts',
            details: metadata.details,
            editors: metadata.editors || [],
            description: 'Details for room alerts',
        })
            .toPromise()
            .catch((e) => {
                notifyError(
                    `Error saving room alert details: ${e.message || e}`,
                );
                this.loading = false;
                throw e;
            });
        this._dialog_ref.close(true);
    }
}
