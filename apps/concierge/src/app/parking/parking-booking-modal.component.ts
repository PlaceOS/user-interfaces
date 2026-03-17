import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    BookingFormService,
    ParkingSpace,
    ParkingSpaceListFieldComponent,
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

@Component({
    selector: 'parking-booking-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (id
                    ? 'APP.CONCIERGE.PARKING_EDIT'
                    : 'APP.CONCIERGE.PARKING_NEW'
                ) | translate
            "
            [loading]="
                loading() ? ('APP.CONCIERGE.PARKING_SAVING' | translate) : ''
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
                <div class="relative">
                    <label for="date">{{ 'FORM.DATE' | translate }}</label>
                    <a-date-field formControlName="date"></a-date-field>
                    @if (allow_all_day && !form.controls.duration.disabled) {
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
                            <label for="start-time"
                                >{{ 'FORM.TIME_START' | translate
                                }}<span>*</span></label
                            >
                            <a-time-field
                                name="start-time"
                                [ngModel]="form.value.date"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [disabled]="form.controls.date.disabled"
                                [use_24hr]="use_24hr"
                                [range]="bookable_hours"
                            ></a-time-field>
                        </div>
                        <div class="relative w-1/3 flex-1">
                            <label for="end-time"
                                >{{ 'FORM.TIME_END' | translate
                                }}<span>*</span></label
                            >
                            <a-duration-field
                                name="end-time"
                                formControlName="duration"
                                [time]="form?.getRawValue()?.date"
                                [max]="max_duration"
                                [use_24hr]="use_24hr"
                                [end_time]="bookable_hours?.end"
                            >
                            </a-duration-field>
                        </div>
                    </div>
                }
                <label for="parking-space">{{
                    'APP.CONCIERGE.PARKING_SPACE' | translate
                }}</label>
                <parking-space-list-field
                    name="parking-space"
                    formControlName="resources"
                    class="mb-2"
                ></parking-space-list-field>
                <label for="plate-number">
                    {{ 'EXPLORE.PARKING_PLATE_NUMBER' | translate }}
                    @if (user) {
                        <span>*</span>
                    }
                </label>
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        name="plate-number"
                        formControlName="plate_number"
                        [placeholder]="
                            'EXPLORE.PARKING_PLATE_NUMBER' | translate
                        "
                    />
                    <mat-error>{{
                        'BOOKINGS.PARKING_PLATE_NUMBER_REQUIRED' | translate
                    }}</mat-error>
                </mat-form-field>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FullscreenModalShellComponent,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        DurationFieldComponent,
        TimeFieldComponent,
        MatCheckboxModule,
        DateFieldComponent,
        MatInputModule,
        TranslatePipe,
        UserSearchFieldComponent,
        ParkingSpaceListFieldComponent,
    ],
})
export class ParkingBookingModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _data = inject<{
        booking: Booking;
        user?: User;
        link_id?: string;
        date?: number;
        level?: BuildingLevel;
        space?: ParkingSpace;
        allow_time_changes?: boolean;
        external_user?: boolean;
        parent_id?: string;
    }>(MAT_DIALOG_DATA);
    private _booking_form = inject(BookingFormService);
    private _dialog_ref =
        inject<MatDialogRef<ParkingBookingModalComponent>>(MatDialogRef);
    private _settings = inject(SettingsService);

    public readonly loading = signal(false);
    public readonly user = this._data.user;
    public readonly date = this._data.date;
    public readonly allow_time_changes = this._data.allow_time_changes;

    public form = this._booking_form.form;

    public get id() {
        return this.form.value.id;
    }

    public get end_date() {
        return endOfDay(
            addDays(
                Date.now(),
                this._settings.get('app.parking.available_period') ||
                    this._settings.get('app.bookings.available_period') ||
                    7,
            ),
        );
    }

    public get max_duration() {
        return (
            this._settings.get('app.parking.max_duration') ||
            this._settings.get('app.bookings.max_duration') ||
            480
        );
    }

    public get allow_all_day() {
        return this._settings.get('app.parking.allow_all_day') ?? true;
    }

    public get use_24hr() {
        return this._settings.get('app.use_24_hour_time');
    }

    public get bookable_hours() {
        return (
            this._settings.get('app.parking.bookable_hours') ||
            this._settings.get('app.bookings.bookable_hours')
        );
    }

    public ngOnInit() {
        this._booking_form.newForm('parking', this._data.booking);
        this._booking_form.setOptions({ type: 'parking' });
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
            booking_type: 'parking',
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
            this.form.controls.plate_number.setValidators([
                Validators.required,
            ]);
            this.form.controls.user_name.disable();
            this.form.controls.user_email.disable();
        }
        if (this._data.booking?.id) {
            this.form.controls.user.disable();
            this.form.controls.user_name.disable();
            this.form.controls.user_email.disable();
        } else {
            this.form.controls.user.enable();
            this.form.controls.user_name.enable();
            this.form.controls.user_email.enable();
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
            console.log('Date:', this._data.date);
            this.timeout(
                'init_date',
                () => {
                    this.form.patchValue({ date: this._data.date });
                },
                300,
            );
        }
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
        this.form.patchValue({ user_id: undefined, booking_type: 'parking' });
        const result = await this._booking_form.postForm().catch((e) => {
            this.loading.set(false);
            this.form.controls.plate_number.setValidators([]);
            notifyError(e);
            throw e;
        });
        this.form.controls.plate_number.setValidators([]);
        notifySuccess(i18n('APP.CONCIERGE.PARKING_SAVE'));

        this.form.get('date').enable();
        this.form.get('duration').enable();
        this.form.controls.user.disable();
        this.form.controls.user_name.disable();
        this.form.controls.user_email.disable();
        this._dialog_ref.close(result.id);
    }
}
