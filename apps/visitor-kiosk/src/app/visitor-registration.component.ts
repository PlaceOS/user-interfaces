import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { Router, RouterModule } from '@angular/router';
import { startOfMinute } from 'date-fns';

import {
    AsyncHandler,
    EMPTY_USER,
    getInvalidSignalFields,
    i18n,
    isEmptyUser,
    notifyError,
    OrganisationService,
    settingSignal,
    unique,
    User,
} from '@placeos/common';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BookingFormService } from '@placeos/bookings';
import {
    AuthenticatedImageDirective,
    IconComponent,
    TranslatePipe,
    VirtualKeyboardComponent,
} from '@placeos/components';
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
                auth
                [source]="background()"
                class="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2"
            />
            @if (!hide_building_image()) {
                <img
                    src="assets/img/building.png"
                    class="absolute right-0 bottom-0 w-[60%]"
                />
            }
            @if (!loading()) {
                <div
                    class="bg-base-100 absolute top-1/2 left-4 max-h-[80vh] w-lg max-w-[calc(100%-2rem)] -translate-y-1/2 overflow-auto rounded-sm shadow-sm"
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
                        <label for="name"> {{ 'FORM.NAME' | translate }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                keyboard
                                matInput
                                autocomplete="off"
                                [formField]="form.asset_name"
                                [placeholder]="'FORM.NAME' | translate"
                            />
                            <mat-error>A valid email is required</mat-error>
                        </mat-form-field>
                        <label for="email">
                            {{ 'FORM.EMAIL' | translate }}</label
                        >
                        <mat-form-field
                            appearance="outline"
                            class="mb-0 w-full"
                        >
                            <input
                                keyboard
                                matInput
                                autocomplete="off"
                                [formField]="form.asset_id"
                                [placeholder]="'FORM.EMAIL' | translate"
                            />
                            <mat-error>A valid email is required</mat-error>
                        </mat-form-field>
                        <label for="user">Host</label>
                        <a-user-search-field
                            autocomplete="off"
                            [ngModel]="host()"
                            (ngModelChange)="setHost($event)"
                            [class.mb-4]="!host()"
                        ></a-user-search-field>
                        <label form="phone">
                            {{ 'APP.VISITOR_KIOSK.PHONE' | translate }}</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                keyboard
                                matInput
                                type="tel"
                                autocomplete="off"
                                [formField]="form.phone"
                                [placeholder]="
                                    'APP.VISITOR_KIOSK.PHONE' | translate
                                "
                            />
                        </mat-form-field>
                        <label form="org">
                            {{ 'COMMON.ORGANISATION' | translate }}</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                keyboard
                                matInput
                                autocomplete="off"
                                [formField]="form.company"
                                [placeholder]="
                                    'COMMON.ORGANISATION' | translate
                                "
                            />
                        </mat-form-field>
                        <label form="reason">
                            {{ 'BOOKINGS.VISITOR_REASON' | translate }}
                        </label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript mb-4 w-full"
                        >
                            <input
                                keyboard
                                matInput
                                autocomplete="off"
                                [formField]="form.title"
                                [placeholder]="
                                    'BOOKINGS.VISITOR_REASON_PLACEHOLDER'
                                        | translate
                                "
                            />
                        </mat-form-field>
                        @if (allow_pass_number()) {
                            <label form="pass">
                                {{ 'BOOKINGS.PASS_NUMBER' | translate }}
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript mb-4 w-full"
                            >
                                <input
                                    keyboard
                                    matInput
                                    autocomplete="off"
                                    [formField]="form.pass_number"
                                    [placeholder]="
                                        'BOOKINGS.VISITOR_PASS_PLACEHOLDER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        }
                        @if (allow_registration_time_options()) {
                            @if (allow_all_day()) {
                                <div class="relative mt-4 flex justify-end">
                                    <mat-checkbox
                                        class="absolute -top-2 right-0"
                                        [formField]="form.all_day"
                                    >
                                        {{ 'COMMON.ALL_DAY' | translate }}
                                    </mat-checkbox>
                                </div>
                            }
                            <label form="duration">
                                {{ 'FORM.DURATION' | translate }}
                            </label>
                            <a-duration-field
                                class="text-base"
                                [ngModel]="form_value().duration"
                                (ngModelChange)="setDuration($event)"
                                [time]="form_value().date"
                                [max]="max_duration()"
                                [disabled]="form_value().all_day"
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
                {{ now() | date: 'mediumDate' }}
                {{ now() | date: 'shortTime' }}
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        FormsModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        FormField,
        UserSearchFieldComponent,
        DurationFieldComponent,
        RouterModule,
        AuthenticatedImageDirective,
        VirtualKeyboardComponent,
    ],
})
export class VisitorRegistrationComponent
    extends AsyncHandler
    implements OnInit
{
    private _booking_form = inject(BookingFormService);
    private _checkin = inject(CheckinStateService);
    private _router = inject(Router);
    private _org = inject(OrganisationService);
    private readonly _visitor_allow_all_day = settingSignal(
        'visitors.allow_all_day',
    );
    private readonly _booking_allow_all_day = settingSignal(
        'bookings.allow_all_day',
    );
    private readonly _visitor_max_duration = settingSignal(
        'visitors.max_duration',
    );
    private readonly _booking_max_duration = settingSignal(
        'bookings.max_duration',
    );
    private readonly _induction_enabled = settingSignal(
        'induction_enabled',
        false,
    );
    private readonly _induction_details = settingSignal('induction_details');

    public readonly form = this._booking_form.form;
    public readonly form_value = this._booking_form.model;
    public readonly loading = signal(false);
    public readonly now = signal(startOfMinute(Date.now()).valueOf());
    public readonly background = settingSignal('welcome_background');
    public readonly allow_registration_time_options = settingSignal<
        boolean | undefined
    >('allow_registration_time_options');
    public readonly allow_pass_number = settingSignal(
        'allow_pass_number',
        false,
    );
    public readonly hide_building_image = settingSignal(
        'hide_building_image',
        false,
    );
    public readonly induction_after_details = settingSignal(
        'induction_after_details',
        false,
    );
    public readonly allow_self_registration = settingSignal(
        'allow_self_registration',
        false,
    );
    public readonly is_induction_enabled = computed(
        () => !!(this._induction_enabled() && this._induction_details()),
    );
    public readonly allow_all_day = computed(
        () => this._visitor_allow_all_day() ?? this._booking_allow_all_day(),
    );
    public readonly max_duration = computed(
        () =>
            this._visitor_max_duration() || this._booking_max_duration() || 180,
    );
    public readonly host = computed(() => {
        const user = this.form_value().user;
        return isEmptyUser(user) ? null : user;
    });

    public setHost(user: User | null) {
        this._booking_form.model.update((m) => ({
            ...m,
            user: user || EMPTY_USER,
        }));
    }

    public setDuration(duration: number) {
        this._booking_form.model.update((m) => ({ ...m, duration }));
    }

    public ngOnInit() {
        this.interval(
            'time',
            () => this.now.set(startOfMinute(Date.now()).valueOf()),
            30 * 1000,
        );
        this._booking_form.clearOldState();
        this._booking_form.newForm('visitor');
        this._booking_form.setOptions({ type: 'visitor' });
        this._booking_form.model.update((m) => ({
            ...m,
            booking_type: 'visitor',
            title: 'Visit',
            // Always ask for the host; null is sanitized back to currentUser().
            user: EMPTY_USER,
        }));
        setTimeout(() => {
            if (this.allow_self_registration()) return;
            this._router.navigate(['/welcome']);
        }, 1000);
    }

    public async register() {
        this.form().markAsTouched();
        if (!this.form().valid()) {
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidSignalFields(
                        this.form,
                        this._booking_form.model,
                    ).join(', '),
                }),
            );
        }
        if (!this.host()) {
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: i18n('FORM.HOST'),
                }),
            );
        }
        this.loading.set(true);
        try {
            const value = this._booking_form.model();
            this._booking_form.model.update((m) => ({
                ...m,
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
            }));
            const result = await this._booking_form.postForm(true);
            this._checkin.setBooking(result, 'registered');
            if (
                result.induction !== 'accepted' &&
                this.is_induction_enabled() &&
                !this.induction_after_details()
            ) {
                this._router.navigate(['/checkin', 'induction']);
            } else {
                this._router.navigate(['/checkin', 'details']);
            }
        } catch (e) {
            notifyError(
                i18n('APP.VISITOR_KIOSK.REGISTRATION_ERROR', {
                    error: e?.statusText || e,
                }),
            );
        } finally {
            this.loading.set(false);
        }
    }
}
