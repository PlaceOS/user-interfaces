import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Booking, BookingFormService } from '@placeos/bookings';
import { User } from '@placeos/users';

@Component({
    selector: 'parking-booking-modal',
    template: `
        <div class="w-[32rem]">
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
            >
                <div class="flex items-center space-x-2" *ngIf="!user">
                    <a-user-search-field
                        name="user"
                        formControlName="user"
                    ></a-user-search-field>
                    <button
                        icon
                        matRipple
                        class="mb-5 h-12 w-12 min-w-12 rounded bg-secondary text-secondary-content"
                        matTooltip="Clear Selected User"
                        (click)="
                            form.patchValue({
                                user: null,
                                email: null,
                                name: null,
                                phone: null,
                            })
                        "
                    >
                        <app-icon className="material-symbols-outlined">
                            person_cancel
                        </app-icon>
                    </button>
                </div>
                <label for="name">Name</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="name"
                        [disabled]="user"
                        formControlName="name"
                        placeholder="Name"
                    />
                    <mat-error>A name is required</mat-error>
                </mat-form-field>
                <label for="email">Email</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="email"
                        [disabled]="user"
                        formControlName="email"
                        placeholder="Email"
                    />
                    <mat-error>An email is required</mat-error>
                </mat-form-field>
                <label for="parking-space">Parking Space</label>
                <parking-space-list-field
                    name="parking-space"
                    formControlName="resources"
                ></parking-space-list-field>
            </main>
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
    public readonly user = this._data.user;

    public form = this._booking_form.form;

    public get id() {
        return this.form.value.id;
    }

    constructor(
        @Inject(MAT_DIALOG_DATA)
        private _data: { booking: Booking; user?: User; link_id?: string },
        private _booking_form: BookingFormService
    ) {}

    public ngOnInit() {
        this._booking_form.newForm(this._data.booking);
        this._booking_form.setOptions({ type: 'parking' });
        if (this._data.user) {
            this.form.patchValue({
                user_email: this._data.user.email,
                user_id: this._data.user.email,
                name: this._data.user.name,
                attendees: [this._data.user],
            });
        }
        if (this._data.link_id) {
            this.form.patchValue({ parent_id: this._data.link_id });
        }
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
