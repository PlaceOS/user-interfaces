import { Component, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Booking, BookingFormService, ParkingSpace } from '@placeos/bookings';
import {
    AsyncHandler,
    currentUser,
    notify,
    notifyError,
} from '@placeos/common';
import { BuildingLevel } from '@placeos/organisation';
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
                <div class="flex items-center space-x-2 mb-4" *ngIf="!user">
                    <a-user-search-field
                        name="user"
                        formControlName="user"
                        class="flex-1"
                    ></a-user-search-field>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="flex-1">
                        <label for="user-name">Name</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="user-name"
                                formControlName="user_name"
                                placeholder="Name"
                            />
                            <mat-error>A name is required</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex-1">
                        <label for="email">Email</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="email"
                                formControlName="user_email"
                                placeholder="Email"
                            />
                            <mat-error>An email is required</mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <label for="date">Date</label>
                <a-date-field formControlName="date"></a-date-field>
                <label for="parking-space">Parking Space</label>
                <parking-space-list-field
                    name="parking-space"
                    formControlName="resources"
                    class="mb-2"
                ></parking-space-list-field>
                <label for="plate-number">
                    Plate Number<span *ngIf="user">*</span>
                </label>
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        name="plate-number"
                        formControlName="plate_number"
                        placeholder="Plate Number"
                    />
                    <mat-error>A plate number is required</mat-error>
                </mat-form-field>
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
export class ParkingBookingModalComponent extends AsyncHandler {
    public loading: boolean = false;
    public readonly user = this._data.user;
    public readonly date = this._data.date;

    public form = this._booking_form.form;

    public get id() {
        return this.form.value.id;
    }

    constructor(
        @Inject(MAT_DIALOG_DATA)
        private _data: {
            booking: Booking;
            user?: User;
            link_id?: string;
            date?: number;
            level?: BuildingLevel;
            space?: ParkingSpace;
            allow_time_changes?: boolean;
        },
        private _booking_form: BookingFormService,
        private _dialog_ref: MatDialogRef<ParkingBookingModalComponent>,
    ) {
        super();
    }

    public ngOnInit() {
        this._booking_form.newForm(this._data.booking);
        this._booking_form.setOptions({ type: 'parking' });
        this.subscription(
            'user_changes',
            this.form.controls.user.valueChanges.subscribe((user) => {
                if (!user) return;
                this.form.patchValue({
                    user_name: user.name,
                    user_email: user.email,
                    user_id: user.id || user.email,
                    attendees: [user],
                });
            }),
        );
        this.form.patchValue({
            all_day: true,
            booking_type: 'parking',
            user: (this._data.user as any) || currentUser(),
        });
        if (this._data.user) {
            this.form.patchValue({
                user_email: this._data.user.email,
                user_id: this._data.user.email,
                user_name: this._data.user.name,
                attendees: [this._data.user],
            });
            this.form.controls.plate_number.setValidators([
                Validators.required,
            ]);
            this.form.controls.user_name.disable();
            this.form.controls.user_email.disable();
        }
        if (this._data.level) {
            this._booking_form.setOptions({ zone_id: this._data.level.id });
        }
        if (this._data.link_id) {
            this.form.patchValue({ parent_id: this._data.link_id });
        }
        if (this._data.space) {
            this.form.patchValue({ resources: [this._data.space] });
        }
        if (this._data.date) {
            this.timeout(
                'init_date',
                () => {
                    this.form.patchValue({ date: this._data.date });
                    if (!this._data.allow_time_changes) {
                        this.form.get('date').disable();
                    }
                },
                300,
            );
            if (!this._data.allow_time_changes) {
                this.subscription(
                    'form_change',
                    this.form.valueChanges.subscribe((v) => {
                        this.timeout(
                            'disable_date',
                            () =>
                                this.form
                                    .get('date')
                                    .disable({ emitEvent: false }),
                            50,
                        );
                    }),
                );
            }
        }
    }

    public async postForm() {
        this.form.updateValueAndValidity();
        if (!this.form.valid) return;
        this.loading = true;
        const result = await this._booking_form.postForm().catch((e) => {
            this.loading = false;
            this.form.controls.plate_number.setValidators([]);
            notifyError(e);
            throw e;
        });
        this.form.controls.plate_number.setValidators([]);
        this._dialog_ref.close(result.id);
    }
}
