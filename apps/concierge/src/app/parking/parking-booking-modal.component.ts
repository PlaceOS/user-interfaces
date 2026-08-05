import {
    Component,
    computed,
    inject,
    Injector,
    OnInit,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
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
    alignDateToBookableHours,
    AsyncHandler,
    Booking,
    BuildingLevel,
    currentUser,
    getInvalidSignalFields,
    i18n,
    notifyError,
    notifySuccess,
    onFieldChange,
    settingSignal,
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
                (id()
                    ? 'APP.CONCIERGE.PARKING_EDIT'
                    : 'APP.CONCIERGE.PARKING_NEW'
                ) | translate
            "
            [loading]="
                loading() ? ('APP.CONCIERGE.PARKING_SAVING' | translate) : ''
            "
            (confirm)="postForm()"
        >
            <form>
                @if (!user) {
                    <div class="mb-4 flex items-center space-x-2">
                        <a-user-search-field
                            [formField]="form.user"
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
                                [formField]="form.user_name"
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
                                [formField]="form.user_email"
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
                    <a-date-field [formField]="form.date"></a-date-field>
                    @if (allow_all_day() && !form.duration().disabled()) {
                        <mat-checkbox
                            [formField]="form.all_day"
                            class="absolute -top-2 right-0"
                        >
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    }
                </div>
                @if (!model().all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="start-time"
                                >{{ 'FORM.TIME_START' | translate
                                }}<span>*</span></label
                            >
                            <a-time-field
                                name="start-time"
                                [ngModel]="model().date"
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        date: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [disabled]="form.date().disabled()"
                                [use_24hr]="use_24hr()"
                                [range]="bookable_hours()"
                                [min_duration]="effective_min_duration()"
                            ></a-time-field>
                        </div>
                        <div class="relative w-1/3 flex-1">
                            <label for="end-time"
                                >{{ 'FORM.TIME_END' | translate
                                }}<span>*</span></label
                            >
                            <a-duration-field
                                [formField]="form.duration"
                                [time]="model().date"
                                [max]="max_duration()"
                                [custom_options]="custom_duration_options()"
                                [use_24hr]="use_24hr()"
                                [end_time]="bookable_hours()?.end"
                            >
                            </a-duration-field>
                        </div>
                    </div>
                }
                <label for="parking-space">{{
                    'APP.CONCIERGE.PARKING_SPACE' | translate
                }}</label>
                <parking-space-list-field
                    [formField]="form.resources"
                    class="mb-2"
                ></parking-space-list-field>
                <label for="plate-number">
                    {{ 'BOOKINGS.PARKING_PLATE_NUMBER' | translate }}
                    @if (user) {
                        <span>*</span>
                    }
                </label>
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        [formField]="form.plate_number"
                        [placeholder]="
                            'BOOKINGS.PARKING_PLATE_NUMBER' | translate
                        "
                    />
                    <mat-error>{{
                        'BOOKINGS.PARKING_PLATE_NUMBER_REQUIRED' | translate
                    }}</mat-error>
                </mat-form-field>
                @if (model().notes) {
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            [formField]="form.notes"
                            rows="3"
                            [placeholder]="'FORM.NOTES' | translate"
                        ></textarea>
                    </mat-form-field>
                }
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FullscreenModalShellComponent,
        FormField,
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
    private _injector = inject(Injector);

    public readonly loading = signal(false);
    public readonly user = this._data.user;
    public readonly date = this._data.date;
    public readonly allow_time_changes = this._data.allow_time_changes;

    public form = this._booking_form.form;
    public model = this._booking_form.model;

    public readonly id = computed(() => this.model().id || '');

    public readonly end_date = computed(() =>
        endOfDay(
            addDays(
                Date.now(),
                this._settings.get('app.parking.available_period') ||
                    this._settings.get('app.bookings.available_period') ||
                    7,
            ),
        ),
    );

    public readonly max_duration = computed(
        () =>
            this._settings.get('app.parking.max_duration') ||
            this._settings.get('app.bookings.max_duration') ||
            480,
    );

    public readonly allow_all_day = settingSignal('parking.allow_all_day');

    public readonly use_24hr = computed(() =>
        this._settings.get('app.use_24_hour_time'),
    );

    public readonly bookable_hours = computed(
        () =>
            this._settings.get('app.parking.bookable_hours') ||
            this._settings.get('app.bookings.bookable_hours'),
    );

    public readonly min_duration = computed(
        () =>
            this._settings.get('app.parking.min_duration') ||
            this._settings.get('app.bookings.min_duration') ||
            30,
    );

    public readonly custom_duration_options = computed(
        () =>
            this._settings.get('app.parking.custom_duration_options') ||
            this._settings.get('app.bookings.custom_duration_options') ||
            [],
    );

    public readonly effective_min_duration = computed(() =>
        Math.min(this.min_duration(), ...this.custom_duration_options()),
    );

    public ngOnInit() {
        this._booking_form.newForm('parking', this._data.booking);
        this._booking_form.setOptions({ type: 'parking' });
        const user_changes = onFieldChange(
            this.model,
            (m) => m.user,
            (user) => {
                if (!user) return;
                this.model.update((m) => ({
                    ...m,
                    user_name: user.name,
                    user_email: user.email,
                    attendees: [user],
                }));
            },
            this._injector,
        );
        this.subscription('user_changes', {
            unsubscribe: () => user_changes.destroy(),
        } as any);
        this.model.update((m) => ({
            ...m,
            booking_type: 'parking',
            all_day: this._data.booking
                ? this._data.booking.duration > 12 * 60
                : true,
        }));
        if (!this.model().user) {
            this.model.update((m) => ({
                ...m,
                user:
                    (this._data.booking?.attendees[0] as any) || currentUser(),
            }));
        }
        if (this._data.parent_id) {
            this.model.update((m) => ({
                ...m,
                parent_id: this._data.parent_id,
            }));
        }
        if (this._data.user) {
            this.model.update((m) => ({
                ...m,
                user: this._data.user as any,
                user_email: this._data.user.email,
                user_name: this._data.user.name,
                attendees: [this._data.user],
            }));
        }
        if (this._data.level) {
            this._booking_form.setOptions({ zone_id: this._data.level.id });
        }
        if (this._data.link_id) {
            this.model.update((m) => ({ ...m, parent_id: this._data.link_id }));
        }
        if (this._data.space) {
            this.model.update((m) => ({ ...m, resources: [this._data.space] }));
        }
        if (this._data.date) {
            console.log('Date:', this._data.date);
            this.timeout(
                'init_date',
                () => {
                    this.model.update((m) => ({
                        ...m,
                        date: alignDateToBookableHours(
                            this._data.date,
                            this.bookable_hours(),
                            this.model().date,
                        ),
                    }));
                },
                300,
            );
        }
    }

    public async postForm() {
        if (
            !this.model().all_day &&
            this.model().duration > this.max_duration()
        ) {
            this.model.update((m) => ({ ...m, duration: 30 }));
        }
        this.form().markAsTouched();
        if (this.form().invalid()) {
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidSignalFields(
                        this.form,
                        this.model,
                    ).join(', '),
                }),
            );
        }
        this.loading.set(true);
        this.model.update((m) => ({
            ...m,
            user_id: undefined,
            booking_type: 'parking',
        }));
        const result = await this._booking_form.postForm().catch((e) => {
            this.loading.set(false);
            notifyError(e);
            throw e;
        });
        notifySuccess(i18n('APP.CONCIERGE.PARKING_SAVE'));
        this._dialog_ref.close(result.id);
    }
}
