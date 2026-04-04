import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    BookingFormService,
    Locker,
    LockerListFieldComponent,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    BuildingLevel,
    currentUser,
    getInvalidFields,
    i18n,
    notifyError,
    notifySuccess,
    OrganisationService,
    SettingsService,
    User,
} from '@placeos/common';
import {
    FullscreenModalShellComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
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
                loading()
                    ? ('APP.CONCIERGE.LOCKERS_BOOK_SAVING' | translate)
                    : ''
            "
            (confirm)="postForm()"
        >
            <form [formGroup]="form">
                @if (!user) {
                    <div class="mb-4 flex items-center space-x-2">
                        <a-user-search-field
                            name="user"
                            formControlName="user"
                            class="flex-1"
                        ></a-user-search-field>
                    </div>
                }
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
                    @if (allow_all_day && !disable_date) {
                        <mat-checkbox
                            formControlName="all_day"
                            class="absolute -top-2 right-0"
                        >
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    }
                </div>
                @if (!form.value.all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="start-time">
                                {{ 'FORM.TIME_START' | translate
                                }}<span>*</span>
                            </label>
                            <a-time-field
                                name="start-time"
                                [ngModel]="form.value.date"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [disabled]="
                                    form.controls.date.disabled || disable_start
                                "
                                [use_24hr]="use_24hr"
                                [range]="bookable_hours"
                                [min_duration]="effective_min_duration"
                            ></a-time-field>
                        </div>
                        @if (!hide_end) {
                            <div class="relative w-1/3 flex-1">
                                <label for="end-time">
                                    {{ 'FORM.TIME_END' | translate
                                    }}<span>*</span>
                                </label>
                                <a-duration-field
                                    name="end-time"
                                    formControlName="duration"
                                    [time]="form?.getRawValue()?.date"
                                    [max]="max_duration"
                                    [custom_options]="custom_duration_options"
                                    [use_24hr]="use_24hr"
                                    [end_time]="bookable_hours?.end"
                                >
                                </a-duration-field>
                            </div>
                        }
                    </div>
                }
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
    imports: [
        TranslatePipe,
        FullscreenModalShellComponent,
        LockerListFieldComponent,
        DurationFieldComponent,
        TimeFieldComponent,
        MatCheckboxModule,
        DateFieldComponent,
        MatFormFieldModule,
        MatInputModule,
        UserSearchFieldComponent,
        ReactiveFormsModule,
        FormsModule,
    ],
})
export class LockerBookingModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _data = inject<{
        booking: Booking;
        user?: User;
        link_id?: string;
        date?: number;
        level?: BuildingLevel;
        space?: Locker;
        allow_time_changes?: boolean;
        external_user?: boolean;
        parent_id?: string;
    }>(MAT_DIALOG_DATA);
    private _booking_form = inject(BookingFormService);
    private _dialog_ref =
        inject<MatDialogRef<LockerBookingModalComponent>>(MatDialogRef);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);

    public readonly loading = signal(false);
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

    public get bookable_hours() {
        return (
            this._settings.get('app.lockers.bookable_hours') ||
            this._settings.get('app.bookings.bookable_hours')
        );
    }

    public get min_duration() {
        return (
            this._settings.get('app.lockers.min_duration') ||
            this._settings.get('app.bookings.min_duration') ||
            30
        );
    }

    public get custom_duration_options() {
        return (
            this._settings.get('app.lockers.custom_duration_options') ||
            this._settings.get('app.bookings.custom_duration_options') ||
            []
        );
    }

    public get effective_min_duration() {
        return Math.min(this.min_duration, ...this.custom_duration_options);
    }

    public ngOnInit() {
        this._booking_form.newForm('locker', this._data.booking);
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
        this.form.patchValue({ booking_type: 'locker' });
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
            ]).subscribe(() =>
                this.timeout(
                    'disable',
                    () =>
                        this.disable_date
                            ? this.form.controls.date.disable()
                            : '',
                    50,
                ),
            ),
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
        this.loading.set(true);
        this.form.patchValue({ user_id: undefined, booking_type: 'locker' });
        const result = await this._booking_form.postForm().catch((e) => {
            this.loading.set(false);
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
