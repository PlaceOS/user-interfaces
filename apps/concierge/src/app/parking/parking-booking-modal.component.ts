import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Booking, BookingFormService } from '@placeos/bookings';

@Component({
    selector: 'parking-booking-modal',
    template: `
        <div class="w-[28rem]">
            <header class="flex items-center justify-between px-2 w-full">
                <h2 class="px-2">
                    {{ id ? 'Edit' : 'New' }} Parking Reservation
                </h2>
                <button *ngIf="!loading" icon matRipple mat-dialog-close>
                    <app-icon>close</app-icon>
                </button>
            </header>
            <main
                *ngIf="!loading; else load_state"
                class="p-4 flex flex-col max-h-[65vh] overflow-auto"
                [formGroup]="form"
            ></main>
            <footer
                *ngIf="!loading"
                class="flex items-center justify-end space-x-2 p-2 border-t border-base-200"
            >
                <button btn matRipple class="w-32 inverse" mat-dialog-close>
                    Cancel
                </button>
                <button btn matRipple class="w-32" (click)="postForm()">
                    Save
                </button>
            </footer>
        </div>
        <ng-template #load_state>
            <main
                class="p-8 flex flex-col items-center justify-center user-y-2"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>Saving parking reservation...</p>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class ParkingBookingModalComponent {
    public loading: boolean = false;

    public form = this._booking_form.form;

    public get id() {
        return this.form.value.id;
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private _booking: Booking,
        private _booking_form: BookingFormService
    ) {}

    public ngOnInit() {
        this._booking_form.newForm(this._booking);
    }

    public postForm() {
        if (!this.form.valid) return;
        this.loading = true;
        this._booking_form.postForm().catch((e) => {
            this.loading = false;
            throw e;
        });
    }
}
