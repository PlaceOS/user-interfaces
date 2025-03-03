import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { i18n, notifyError, notifySuccess } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { PlaceSystem, showMetadata, updateMetadata } from '@placeos/ts-client';

@Component({
    selector: 'room-alert-modal',
    template: `
        <header class="space-x-4">
            <h2>
                {{
                    'APP.CONCIERGE.ROOMS_ALERT_HEADER'
                        | translate: { name: room.display_name || room.name }
                }}
            </h2>
            <button btn icon mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="flex max-h-[65vh] min-w-[24rem] flex-col overflow-y-auto overflow-x-hidden p-4"
            *ngIf="!loading; else load_state"
            [formGroup]="form"
        >
            <label for="status">{{ 'COMMON.STATUS' | translate }}</label>
            <mat-form-field appearance="outline">
                <mat-select name="status" formControlName="status">
                    <mat-option value="">{{
                        'APP.CONCIERGE.ROOMS_ALERT_TYPE_NONE' | translate
                    }}</mat-option>
                    <mat-option value="info">{{
                        'APP.CONCIERGE.ROOMS_ALERT_TYPE_INFO' | translate
                    }}</mat-option>
                    <mat-option value="warn">{{
                        'APP.CONCIERGE.ROOMS_ALERT_TYPE_WARNING' | translate
                    }}</mat-option>
                    <mat-option value="closed">{{
                        'APP.CONCIERGE.ROOMS_ALERT_TYPE_CLOSED' | translate
                    }}</mat-option>
                </mat-select>
            </mat-form-field>
            <label for="message">{{
                'APP.CONCIERGE.ROOMS_ALERT_MSG' | translate
            }}</label>
            <mat-form-field appearance="outline">
                <textarea
                    matInput
                    name="message"
                    formControlName="message"
                ></textarea>
            </mat-form-field>
        </main>
        <footer
            class="flex justify-end border-t border-base-200 p-2"
            *ngIf="!loading"
        >
            <button btn class="w-32" (click)="save()">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
        <ng-template #load_state>
            <div class="flex h-64 w-64 flex-col items-center justify-center">
                <mat-spinner diameter="32"></mat-spinner>
                <p class="mt-4">
                    {{ 'APP.CONCIERGE.ROOMS_SAVING' | translate }}
                </p>
            </div>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
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
                    i18n('APP.CONCIERGE.ROOMS_ALERT_LOAD_ERROR', {
                        error: e.message || e,
                    }),
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
                    i18n('APP.CONCIERGE.ROOMS_ALERT_SAVE_ERROR', {
                        error: e.message || e,
                    }),
                );
                this.loading = false;
                throw e;
            });
        notifySuccess(i18n('APP.CONCIERGE.ROOMS_ALERT_SAVE_SUCCESS'));
        this._dialog_ref.close(true);
    }
}
