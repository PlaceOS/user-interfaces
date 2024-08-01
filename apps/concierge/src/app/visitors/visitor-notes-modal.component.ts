import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Booking, BookingFormService } from '@placeos/bookings';
import { notifyError, notifySuccess } from '@placeos/common';

@Component({
    selector: 'visitor-notes-modal',
    template: `
        <header>
            <h2>
                Notes for Visitor
                <span
                    class="font-medium px-2 py-1 text-sm bg-base-200 rounded ml-2"
                >
                    {{ item?.asset_name }}
                </span>
            </h2>
            <button icon mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="p-4 w-[36rem] max-h-[65vh] h-[65vh] overflow-auto"
            [formGroup]="form"
            *ngIf="!loading; else loading_template"
        >
            <mat-form-field
                appearance="outline"
                class="w-full h-full no-subscript"
            >
                <textarea
                    matInput
                    formControlName="notes"
                    class="resize-none"
                    placeholder="Notes for visitor"
                ></textarea>
            </mat-form-field>
        </main>
        <footer
            class="flex justify-end space-x-2 p-2 border-t border-base-200"
            *ngIf="!loading"
        >
            <button btn matRipple class="w-32" (click)="save()">Save</button>
        </footer>
        <ng-template #loading_template>
            <div
                loading
                class="absolute inset-0 bg-base-100 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>Saving visitor notes...</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class VisitorNotesModalComponent {
    public item: Booking = this._data.item;
    public readonly form = this._booking.form;
    public loading = '';

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: { item: Booking },
        private _booking: BookingFormService,
        private _dialog_ref: MatDialogRef<VisitorNotesModalComponent>,
    ) {
        this.item = _data.item;
        this._booking.newForm(this.item);
    }

    public async save() {
        this.loading = 'Saving...';
        this._dialog_ref.disableClose = true;
        await this._booking.postForm().catch((_) => {
            notifyError('Error saving visitor notes');
            this.loading = '';
            this._dialog_ref.disableClose = false;
            throw _;
        });
        this.loading = '';
        notifySuccess('Successfully saved visitor notes');
        this._dialog_ref.close();
    }
}
