import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { startOfMinute } from 'date-fns';

import {
    getInvalidFields,
    i18n,
    notifyError,
    OrganisationService,
    SettingsService,
    unique,
    User,
} from '@placeos/common';

import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BookingFormService } from '@placeos/bookings';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    DurationFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { CheckinStateService } from './checkin/checkin-state.service';

@Component({
    selector: 'visitor-registration',
    template: `
        <div class="absolute inset-0 flex items-center p-8">
            <img
                [src]="background"
                class="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2"
            />
            @if (!hide_building_image) {
                <img
                    src="assets/img/building.png"
                    class="absolute right-0 bottom-0 w-[60%]"
                />
            }
            @if (!loading) {
                <div
                    class="bg-base-100 absolute top-1/2 left-4 max-h-[80vh] w-lg max-w-[calc(100%-2rem)] -translate-y-1/2 overflow-auto rounded-sm shadow-sm"
                    [formGroup]="form"
                >
                    <div
                        class="bg-base-200 sticky top-0 z-10 m-2 flex w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none p-2"
                    >
                        <h3 class="px-2 text-lg font-medium">
                            {{ 'APP.VISITOR_KIOSK.REGISTRATION' | translate }}
                        </h3>
                        <a icon matRipple [routerLink]="['/welcome']">
                            <icon>close</icon>
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
                                [placeholder]="
                                    'APP.VISITOR_KIOSK.NAME' | translate
                                "
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
                        <label form="reason">
                            {{ 'BOOKINGS.VISITOR_REASON' | translate }}
                        </label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <input
                                matInput
                                name="reason"
                                formControlName="title"
                                [placeholder]="
                                    'BOOKINGS.VISITOR_REASON_PLACEHOLDER'
                                        | translate
                                "
                            />
                        </mat-form-field>
                        @if (allow_pass_number) {
                            <div class="h-4"></div>
                            <label form="pass">
                                {{ 'BOOKINGS.VISITOR_PASS' | translate }}
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input
                                    matInput
                                    name="pass"
                                    formControlName="pass_number"
                                    [placeholder]="
                                        'BOOKINGS.VISITOR_PASS_PLACEHOLDER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        }
                        @if (allow_registration_time_options) {
                            <div class="relative mt-4 flex justify-end">
                                <mat-checkbox
                                    class="absolute -top-2 right-0"
                                    formControlName="all_day"
                                >
                                    {{ 'COMMON.ALL_DAY' | translate }}
                                </mat-checkbox>
                            </div>
                            <label form="duration">
                                {{ 'FORM.DURATION' | translate }}
                            </label>
                            <a-duration-field
                                name="duration"
                                formControlName="duration"
                                [time]="form.value.date"
                                [max]="max_duration"
                                [disabled]="form.value.all_day"
                            ></a-duration-field>
                        }
                    </div>
                    <div
                        class="bg-base-200 sticky bottom-0 z-10 m-2 flex w-[calc(100%-1rem)] items-center justify-end rounded-sm border-none p-2"
                    >
                        <button btn matRipple class="w-40" (click)="register()">
                            {{ 'APP.VISITOR_KIOSK.REGISTER' | translate }}
                        </button>
                    </div>
                </div>
            } @else {
                <div
                    class="bg-base-100 absolute top-1/2 left-4 flex w-[24rem] -translate-y-1/2 flex-col items-center justify-center space-y-4 rounded-sm p-16 shadow-sm"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ 'APP.VISITOR_KIOSK.REGISTERING' | translate }}</p>
                </div>
            }
            <div class="absolute top-4 right-4 text-2xl text-white">
                {{ now | date: 'mediumDate' }} {{ now | date: 'shortTime' }}
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        UserSearchFieldComponent,
        DurationFieldComponent,
        RouterModule,
    ],
})
export class VisitorRegistrationComponent implements OnInit {
    private _settings = inject(SettingsService);
    private _booking_form = inject(BookingFormService);
    private _checkin = inject(CheckinStateService);
    private _router = inject(Router);
    private _org = inject(OrganisationService);

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

    public get allow_pass_number() {
        return this._settings.get('app.allow_pass_number');
    }

    public get hide_building_image() {
        return this._settings.get('app.hide_building_image');
    }

    public get allow_registration_time_options() {
        const setting = this._settings.get(
            'app.allow_registration_time_options',
        );
        if (setting !== undefined) return !!setting;
        return !!(
            this._settings.get('app.visitors.allow_all_day') ??
            this._settings.get('app.bookings.allow_all_day')
        );
    }

    public get max_duration() {
        return (
            this._settings.get('app.visitors.max_duration') ||
            this._settings.get('app.bookings.max_duration') ||
            180
        );
    }

    public get induction_after_details() {
        return this._settings.get('app.induction_after_details');
    }

    public ngOnInit() {
        this._booking_form.clearOldState();
        this._booking_form.newForm('visitor');
        this._booking_form.setOptions({ type: 'visitor' });
        this.form
            .get('asset_id')
            .setValidators([Validators.required, Validators.email]);
        this._booking_form.form.patchValue({
            booking_type: 'visitor',
            title: 'Visit',
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
            description: value.description || value.title || '',
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
