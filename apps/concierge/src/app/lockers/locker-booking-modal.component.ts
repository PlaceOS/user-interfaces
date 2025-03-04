import { Component, Inject, OnInit } from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { Booking, BookingFormService, Locker } from '@placeos/bookings';
import {
    AsyncHandler,
    currentUser,
    getInvalidFields,
    i18n,
    notifyError,
    notifySuccess,
    SettingsService,
} from '@placeos/common';
import { BuildingLevel, OrganisationService } from '@placeos/organisation';
import { User } from '@placeos/users';
import { addDays, endOfDay } from 'date-fns';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'locker-booking-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (id
                    ? 'APP.CONCIERGE.LOCKERS_BOOK_EDIT'
                    : 'APP.CONCIERGE.LOCKERS_BOOK_NEW'
                ) | translate
            "
            [loading]="
                loading ? ('APP.CONCIERGE.LOCKERS_BOOK_SAVING' | translate) : ''
            "
            (confirm)="postForm()"
        >
            <form [formGroup]="form">
                <div class="mb-4 flex items-center space-x-2" *ngIf="!user">
                    <a-user-search-field
                        name="user"
                        formControlName="user"
                        class="flex-1"
                    ></a-user-search-field>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="flex-1">
                        <label for="user-name">{{
                            'FORM.NAME' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="user-name"
                                formControlName="user_name"
                                [placeholder]="'FORM.NAME' | translate"
                            />
                            <mat-error>{{
                                'FORM.NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex-1">
                        <label for="email">{{
                            'FORM.EMAIL' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="email"
                                formControlName="user_email"
                                [placeholder]="'FORM.EMAIL' | translate"
                            />
                            <mat-error>{{
                                'FORM.EMAIL_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <div
                    class="relative"
                    [class.pointer-events-none]="disable_date"
                >
                    <label for="date">{{ 'FORM.DATE' | translate }}</label>
                    <a-date-field formControlName="date"></a-date-field>
                    <mat-checkbox
                        formControlName="all_day"
                        *ngIf="allow_all_day && !only_duration && !disable_date"
                        class="absolute -top-2 right-0"
                    >
                        {{ 'COMMON.ALL_DAY' | translate }}
                    </mat-checkbox>
                </div>
                <div
                    class="flex items-center space-x-2"
                    *ngIf="!form.value.all_day"
                >
                    <div class="w-1/3 flex-1">
                        <label for="start-time">
                            {{ 'FORM.TIME_START' | translate }}<span>*</span>
                        </label>
                        <a-time-field
                            name="start-time"
                            [ngModel]="form.value.date"
                            (ngModelChange)="form.patchValue({ date: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            [disabled]="
                                form.controls.date.disabled || disable_start
                            "
                            [use_24hr]="use_24hr"
                        ></a-time-field>
                    </div>
                    <div class="relative w-1/3 flex-1" *ngIf="!hide_end">
                        <label for="end-time">
                            {{ 'FORM.TIME_END' | translate }}<span>*</span>
                        </label>
                        <a-duration-field
                            name="end-time"
                            formControlName="duration"
                            [time]="form?.getRawValue()?.date"
                            [max]="max_duration"
                            [use_24hr]="use_24hr"
                        >
                        </a-duration-field>
                    </div>
                </div>
                <label for="locker">{{ 'RESOURCE.LOCKER' | translate }}</label>
                <locker-list-field
                    name="locker"
                    formControlName="resources"
                    class="mb-2"
                ></locker-list-field>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    standalone: false,
})
export class LockerBookingModalComponent
    extends AsyncHandler
    implements OnInit
{
    public loading = false;
    public readonly user = this._data.user;
    public readonly date = this._data.date;
    public readonly allow_time_changes = this._data.allow_time_changes ?? true;

    public form = this._booking_form.form;

    public get id() {
        return this.form.value.id;
    }

    public get disable_date() {
        return this._settings.get('app.lockers.disabled_date_select');
    }

    public get disable_start() {
        return this._settings.get('app.lockers.disabled_start_time');
    }
    public get hide_end() {
        return this._settings.get('app.lockers.hide_end_time');
    }

    public get only_duration() {
        return this._settings.get('app.lockers.only_duration');
    }

    public get end_date() {
        return endOfDay(
            addDays(
                Date.now(),
                this._settings.get('app.lockers.available_period') ||
                    this._settings.get('app.bookings.available_period') ||
                    7,
            ),
        );
    }

    public get max_duration() {
        return (
            this._settings.get('app.lockers.max_duration') ||
            this._settings.get('app.bookings.max_duration') ||
            8 * 60
        );
    }

    public get allow_all_day() {
        return (
            this.allow_time_changes &&
            (this._settings.get('app.lockers.allow_all_day') ??
                this._settings.get('app.bookings.allow_all_day') ??
                true)
        );
    }

    public get use_24hr() {
        return this._settings.get('app.use_24_hour_time');
    }

    constructor(
        @Inject(MAT_DIALOG_DATA)
        private _data: {
            booking: Booking;
            user?: User;
            link_id?: string;
            date?: number;
            level?: BuildingLevel;
            space?: Locker;
            allow_time_changes?: boolean;
            external_user?: boolean;
            parent_id?: string;
        },
        private _booking_form: BookingFormService,
        private _dialog_ref: MatDialogRef<LockerBookingModalComponent>,
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _dialog: MatDialog,
    ) {
        super();
    }

    public ngOnInit() {
        this._booking_form.newForm(this._data.booking);
        this._booking_form.setOptions({ type: 'locker' });
        this.subscription(
            'user_changes',
            this.form.controls.user.valueChanges.subscribe((user) => {
                if (!user) return;
                this.form.patchValue({
                    user_name: user.name,
                    user_email: user.email,
                    attendees: [user],
                });
            }),
        );
        this.form.patchValue({
            booking_type: 'locker',
            all_day: this._data.booking
                ? this._data.booking.duration > 12 * 60
                : true,
        });
        if (!this.form.value.user) {
            this.form.patchValue({
                user:
                    (this._data.booking?.attendees[0] as any) || currentUser(),
            });
        }
        if (this._data.parent_id) {
            this.form.patchValue({
                parent_id: this._data.parent_id,
            });
        }
        if (this._data.user) {
            this.form.patchValue({
                user: this._data.user as any,
                user_email: this._data.user.email,
                user_name: this._data.user.name,
                attendees: [this._data.user],
            });
        }
        if (this._data.booking?.id) {
            this.form.controls.user.disable();
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
                () => this.form.patchValue({ date: this._data.date }),

                300,
            );
        }
        this.subscription(
            'bld',
            combineLatest([
                this._org.active_building,
                this.form.controls.duration.valueChanges,
            ]).subscribe(() => {
                this.timeout(
                    'disable',
                    () => {
                        if (this.only_duration) {
                            this.form.patchValue({ all_day: false });
                            this.form.controls.date.disable();
                        } else this.form.controls.date.enable();
                        if (this.disable_date) {
                            this.form.controls.date.disable();
                        }
                    },
                    50,
                );
            }),
        );
    }

    public async postForm() {
        if (
            !this.form.value.all_day &&
            this.form.value.duration > this.max_duration
        ) {
            this.form.patchValue({ duration: 30 });
        }
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
        if (this.form.invalid) {
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
            );
        }
        this.loading = true;
        this.form.patchValue({ user_id: undefined, booking_type: 'locker' });
        const result = await this._booking_form.postForm().catch((e) => {
            this.loading = false;
            notifyError(i18n('APP.CONCIERGE.LOCKERS_BOOK_ERROR', { error: e }));
            throw e;
        });
        notifySuccess(i18n('APP.CONCIERGE.LOCKERS_BOOK_SUCCESS'));

        this.form.get('date').enable();
        this.form.get('duration').enable();
        this.form.controls.user.disable();
        this.form.controls.user_name.disable();
        this.form.controls.user_email.disable();
        this._dialog_ref.close(result.id);
    }
}
