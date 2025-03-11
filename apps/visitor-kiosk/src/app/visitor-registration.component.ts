import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import {
    getInvalidFields,
    i18n,
    notifyError,
    SettingsService,
    unique,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { User } from '@placeos/users';
import { startOfMinute } from 'date-fns';
import { CheckinStateService } from './checkin/checkin-state.service';

@Component({
    selector: 'visitor-registration',
    template: `
        <div class="absolute inset-0 flex items-center p-8">
            <img
                [src]="background"
                class="absolute left-1/2 top-1/2 min-h-[100%] min-w-[100%] -translate-x-1/2 -translate-y-1/2"
            />
            <img
                src="assets/img/building.png"
                class="absolute bottom-0 right-0 w-[60%]"
            />
            <div
                class="absolute left-4 top-1/2 max-h-[80vh] w-[32rem] max-w-[calc(100%-2rem)] -translate-y-1/2 overflow-auto rounded bg-base-100 shadow"
                [formGroup]="form"
                *ngIf="!loading; else load_state"
            >
                <div
                    class="flex items-center justify-between space-x-4 border-b border-base-300 px-4 py-2"
                >
                    <h3 class="py-2 text-lg font-medium">
                        {{ 'APP.VISITOR_KIOSK.REGISTRATION' | translate }}
                    </h3>
                    <a icon matRipple [routerLink]="['/welcome']">
                        <app-icon>close</app-icon>
                    </a>
                </div>
                <div class="p-4">
                    <label for="name">
                        {{ 'APP.VISITOR_KIOSK.NAME' | translate }}</label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="name"
                            formControlName="asset_name"
                            [placeholder]="'APP.VISITOR_KIOSK.NAME' | translate"
                        />
                        <mat-error>A valid email is required</mat-error>
                    </mat-form-field>
                    <label for="email">
                        {{ 'APP.VISITOR_KIOSK.EMAIL' | translate }}</label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="email"
                            formControlName="asset_id"
                            [placeholder]="
                                'APP.VISITOR_KIOSK.EMAIL' | translate
                            "
                        />
                        <mat-error>A valid email is required</mat-error>
                    </mat-form-field>
                    <label for="user">Host</label>
                    <a-user-search-field
                        formControlName="user"
                        class="mb-4"
                    ></a-user-search-field>
                    <label form="phone">
                        {{ 'APP.VISITOR_KIOSK.PHONE' | translate }}</label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="phone"
                            type="tel"
                            formControlName="phone"
                            [placeholder]="
                                'APP.VISITOR_KIOSK.PHONE' | translate
                            "
                        />
                    </mat-form-field>
                    <label form="org">
                        {{
                            'APP.VISITOR_KIOSK.ORGANISATION' | translate
                        }}</label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="org"
                            formControlName="company"
                            [placeholder]="
                                'APP.VISITOR_KIOSK.ORGANISATION' | translate
                            "
                        />
                    </mat-form-field>
                </div>
                <div
                    class="flex justify-end space-x-4 border-t border-base-300 px-4 py-2"
                >
                    <button btn matRipple class="w-40" (click)="register()">
                        {{ 'APP.VISITOR_KIOSK.REGISTER' | translate }}
                    </button>
                </div>
            </div>
            <div class="absolute right-4 top-4 text-2xl text-white">
                {{ now | date: 'mediumDate' }} {{ now | date: 'shortTime' }}
            </div>
        </div>
        <ng-template #load_state>
            <div
                class="absolute left-4 top-1/2 flex w-[24rem] -translate-y-1/2 flex-col items-center justify-center space-y-4 rounded bg-base-100 p-16 shadow"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ 'APP.VISITOR_KIOSK.REGISTERING' | translate }}</p>
            </div>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
})
export class VisitorRegistrationComponent implements OnInit {
    public loading = false;
    public readonly form = this._booking_form.form;

    public get now() {
        return startOfMinute(Date.now());
    }

    public get background() {
        return this._settings.get('app.welcome_background');
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
        this._booking_form.newForm('visitor');
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
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
            );
        }
        this.loading = true;
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
        const result = await this._booking_form.postForm(true).catch((e) => {
            notifyError(
                i18n('APP.VISITOR_KIOSK.REGISTRATION_ERROR', {
                    error: e?.statusText || e,
                }),
            );
            this.loading = false;
            throw e;
        });
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
        this.loading = false;
    }
}
