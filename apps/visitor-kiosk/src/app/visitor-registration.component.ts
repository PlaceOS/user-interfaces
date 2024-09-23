import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import {
    getInvalidFields,
    notifyError,
    SettingsService,
    unique,
} from '@placeos/common';
import { startOfMinute } from 'date-fns';
import { CheckinStateService } from './checkin/checkin-state.service';
import { Validators } from '@angular/forms';
import { User } from '@placeos/users';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'visitor-registration',
    template: `
        <div class="absolute inset-0 p-8 flex items-center">
            <img
                [src]="background"
                class="absolute min-h-[100%] min-w-[100%] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            />
            <img
                src="assets/img/building.png"
                class="absolute w-[60%] bottom-0 right-0"
            />
            <div
                class="absolute top-1/2 left-4 -translate-y-1/2 bg-base-100 rounded shadow overflow-auto max-h-[80vh] max-w-[calc(100%-2rem)] w-[32rem]"
                [formGroup]="form"
            >
                <div
                    class="flex items-center justify-between space-x-4 px-4 py-2 border-b border-base-300"
                >
                    <h3 class="text-lg font-medium py-2">
                        Visitor Registration
                    </h3>
                    <a icon matRipple [routerLink]="['/welcome']">
                        <app-icon>close</app-icon>
                    </a>
                </div>
                <div class="p-4">
                    <label for="name" i18n>Name</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="name"
                            formControlName="asset_name"
                            placeholder="Name"
                        />
                        <mat-error>A valid email is required</mat-error>
                    </mat-form-field>
                    <label for="email" i18n>Email</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="email"
                            formControlName="asset_id"
                            placeholder="Email"
                        />
                        <mat-error>A valid email is required</mat-error>
                    </mat-form-field>
                    <label for="user" i18n>Host</label>
                    <a-user-search-field
                        formControlName="user"
                        class="mb-4"
                    ></a-user-search-field>
                    <label form="phone">Phone Number</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="phone"
                            type="tel"
                            formControlName="phone"
                            placeholder="Phone Number"
                        />
                    </mat-form-field>
                    <label form="org">Organisation / Company</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="org"
                            formControlName="company"
                            placeholder="Organisation / Company"
                        />
                    </mat-form-field>
                </div>
                <div
                    class="flex justify-end px-4 py-2 space-x-4 border-t border-base-300"
                >
                    <button btn matRipple class="w-40" (click)="register()">
                        Register
                    </button>
                </div>
            </div>
            <div class="absolute top-4 right-4 text-2xl text-white">
                {{ now | date: 'mediumDate' }} {{ now | date: 'shortTime' }}
            </div>
        </div>
    `,
    styles: [``],
})
export class VisitorRegistrationComponent {
    public readonly form = this._booking_form.form;

    public get now() {
        return startOfMinute(Date.now());
    }

    public get background() {
        return this._settings.get('app.home.background');
    }

    public get is_induction_enabled() {
        return (
            this._settings.get('app.induction_enabled') &&
            this._settings.get('app.induction_details')
        );
    }

    public get induction_after_details() {
        return this._settings.get('app.induction_after_details');
    }

    constructor(
        private _settings: SettingsService,
        private _booking_form: BookingFormService,
        private _checkin: CheckinStateService,
        private _router: Router,
        private _org: OrganisationService,
    ) {}

    public ngOnInit() {
        this._booking_form.clearOldState();
        this._booking_form.newForm();
        this._booking_form.setOptions({ type: 'visitor' });
        this.form
            .get('asset_id')
            .setValidators([Validators.required, Validators.email]);
        this._booking_form.form.patchValue({
            booking_type: 'visitor',
        });
        setTimeout(() => {
            if (this._settings.get('app.allow_self_registration')) return;
            this._router.navigate(['/welcome']);
        }, 1000);
    }

    public async register() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return notifyError(
                `Some fields are invalid. [${getInvalidFields(this.form).join(', ')}]`,
            );
        }
        const value = this.form.value;
        this._booking_form.form.patchValue({
            booking_type: 'visitor',
            self_registered: true,
            name: value.asset_name,
            attendees: [
                new User({
                    name: value.asset_name,
                    email: value.asset_id,
                    organisation: value.company,
                    phone: value.phone,
                }),
            ],
            zones: unique([
                this._org.organisation.id,
                this._org.region?.id,
                this._org.building?.id,
            ]),
        });
        const result = await this._booking_form.postForm(true);
        this._checkin.setBooking(result, 'registered');
        if (
            result.induction !== 'accepted' &&
            this.is_induction_enabled &&
            !this.induction_after_details
        ) {
            this._router.navigate(['/checkin', 'induction']);
        } else {
            this._router.navigate(['/checkin', 'details']);
        }
    }
}
