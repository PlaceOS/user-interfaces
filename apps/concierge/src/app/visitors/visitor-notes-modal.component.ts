import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Booking, updateBooking } from '@placeos/bookings';
import { i18n, notifyError, notifySuccess } from '@placeos/common';

@Component({
    selector: 'visitor-notes-modal',
    template: `
        <header>
            <h2>
                {{ 'APP.CONCIERGE.VISITORS_NOTES_HEADERS' | translate }}
                <span
                    class="ml-2 rounded bg-base-200 px-2 py-1 text-sm font-medium"
                >
                    {{ item?.asset_name }}
                </span>
            </h2>
            <button icon mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="max-h-[65vh] w-[36rem] overflow-auto p-4"
            *ngIf="!loading; else loading_template"
        >
            <mat-form-field appearance="outline" class="no-subscript w-full">
                <textarea
                    matInput
                    [(ngModel)]="notes"
                    class="h-[60vh] max-h-[64rem] resize-none"
                    [placeholder]="
                        'APP.CONCIERGE.VISITORS_NOTES_HEADERS' | translate
                    "
                ></textarea>
            </mat-form-field>
        </main>
        <footer
            class="flex justify-end space-x-2 border-t border-base-200 p-2"
            *ngIf="!loading"
        >
            <button btn matRipple class="w-32" (click)="save()">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
        <ng-template #loading_template>
            <div
                loading
                class="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-base-100"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.VISITORS_NOTES_SAVING' | translate }}</p>
            </div>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
})
export class VisitorNotesModalComponent {
    public item: Booking = this._data.item;
    public notes = this.item.extension_data?.notes || '';
    public loading = '';

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: { item: Booking },
        private _dialog_ref: MatDialogRef<VisitorNotesModalComponent>,
    ) {
        this.item = _data.item;
    }

    public async save() {
        this.loading = 'Saving...';
        this._dialog_ref.disableClose = true;
        await updateBooking(this.item.id, {
            ...this.item.toJSON(),
            extension_data: {
                ...this.item.extension_data,
                notes: this.notes,
            },
        })
            .toPromise()
            .catch((e) => {
                notifyError(
                    i18n('APP.CONCIERGE.VISITORS_NOTES_ERROR', { error: e }),
                );
                this._dialog_ref.disableClose = false;
                this.loading = '';
                throw e;
            });
        this.loading = '';
        notifySuccess(i18n('APP.CONCIERGE.VISITORS_NOTES_SUCCESS'));
        this._dialog_ref.close();
    }
}
