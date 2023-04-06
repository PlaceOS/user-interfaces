import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BookingFormService } from '@placeos/bookings';
import { DialogEvent, notifyError, notifySuccess } from '@placeos/common';

@Component({
    selector: 'desk-book-modal',
    template: `
        <header>
            <h2>New Booking</h2>
            <div class="flex-1 w-0"></div>
            <button icon mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            *ngIf="!(loading | async); else load_state"
            class="overflow-auto p-4"
        >
            <new-desk-form-details [form]="form"></new-desk-form-details>
        </main>
        <footer
            *ngIf="!(loading | async)"
            class="flex justify-center items-center p-2 border-t border-gray-200"
        >
            <button btn matRipple class="w-32" (click)="save()">Save</button>
        </footer>
        <ng-template #load_state>
            <main
                loading
                class="h-64 flex flex-col items-center justify-center"
            >
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>{{ loading | async }}</p>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class DeskBookModalComponent {
    @Output() public event = new EventEmitter<DialogEvent>();
    public readonly loading = this._booking_form.loading;

    public get form() {
        return this._booking_form.form;
    }

    constructor(
        private _booking_form: BookingFormService,
        private _dialog_ref: MatDialogRef<DeskBookModalComponent>
    ) {}

    public async save() {
        const event = await this._booking_form.postForm().catch((_) => {
            notifyError(_);
            throw _;
        });
        this.event.emit({ reason: 'done', metadata: event });
        notifySuccess('Successfully created booking');
        this._dialog_ref.close();
    }
}
