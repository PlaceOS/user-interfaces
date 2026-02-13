import { AsyncPipe } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BookingFormService } from '@placeos/bookings';
import {
    currentUser,
    OrganisationService,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    DateFieldComponent,
    DurationFieldComponent,
    RecurrenceFieldComponent,
    TimeFieldComponent,
    UserListFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { FindAvailabilityModalComponent } from '@placeos/users';
import { addDays, endOfDay } from 'date-fns';

type FormType = 'single' | 'group' | 'other';

@Component({
    selector: 'desk-flow-details',
    template: `
        <div class="w-full p-4">
            <!-- Mobile select dropdown -->
            <div class="mb-4 flex w-full sm:hidden">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <mat-select
                        [ngModel]="active_form()"
                        (ngModelChange)="setActiveForm($event)"
                        [ngModelOptions]="{ standalone: true }"
                    >
                        <mat-select-trigger>
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">{{
                                    form_type_config()[active_form()].icon
                                }}</icon>
                                <span>{{
                                    form_type_config()[active_form()].label
                                }}</span>
                            </div>
                        </mat-select-trigger>
                        <mat-option value="single">
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">person</icon>
                                <span>Single</span>
                            </div>
                        </mat-option>
                        <mat-option value="group">
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">group_add</icon>
                                <span>Group</span>
                            </div>
                        </mat-option>
                        <mat-option value="other">
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">person_add</icon>
                                <span>Book for other</span>
                            </div>
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <!-- Desktop button toggle -->
            <div
                class="bg-base-200 hidden w-full items-center space-x-1 rounded-lg p-1 sm:flex"
            >
                <button
                    btn
                    matRipple
                    class="border-base-300 hover:bg-base-300 flex-1 space-x-2 border"
                    [class.clear]="active_form() !== 'single'"
                    (click)="setActiveForm('single')"
                >
                    <icon class="text-xl">person</icon>
                    <div>Single</div>
                </button>
                <button
                    btn
                    matRipple
                    class="border-base-300 hover:bg-base-300 flex-1 space-x-2 border"
                    [class.clear]="active_form() !== 'group'"
                    (click)="setActiveForm('group')"
                >
                    <icon class="text-xl">group_add</icon>
                    <div>Group</div>
                </button>
                <button
                    btn
                    matRipple
                    class="border-base-300 hover:bg-base-300 flex-1 space-x-2 border"
                    [class.clear]="active_form() !== 'other'"
                    (click)="setActiveForm('other')"
                >
                    <icon class="text-xl">person_add</icon>
                    <div>Book for other</div>
                </button>
            </div>
            <div class="mt-4" [formGroup]="form">
                @if (active_form() === 'other') {
                    <div class="mb-4 w-full">
                        <label for="user"
                            >{{ 'FORM.BOOK_FOR' | translate
                            }}<span required>*</span></label
                        >
                        <a-user-search-field
                            formControlName="user"
                        ></a-user-search-field>
                    </div>
                }
                @if (!hide_title()) {
                    <div>
                        <label for="title"
                            >{{ 'FORM.TITLE' | translate }}<span>*</span></label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="title"
                                formControlName="title"
                                [placeholder]="
                                    'BOOKINGS.DESK_TITLE_PLACEHOLDER'
                                        | translate
                                "
                            />
                            <mat-error>{{
                                'FORM.TITLE_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                <div
                    class="flex flex-col space-y-2 sm:hidden sm:flex-row sm:space-y-0 sm:space-x-2"
                >
                    <div class="relative flex-1">
                        <label for="date">{{ 'FORM.DATE' | translate }}</label>
                        <date-field name="date" formControlName="date" />
                        @if (allow_all_day()) {
                            <mat-checkbox
                                [ngModel]="form_value().all_day"
                                (ngModelChange)="
                                    form.patchValue({ all_day: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                class="absolute -top-2 right-2"
                            >
                                {{ 'COMMON.ALL_DAY' | translate }}
                            </mat-checkbox>
                        }
                    </div>
                    @if (!form_value().all_day) {
                        <div class="flex-1">
                            <label for="time">{{
                                'FORM.TIME' | translate
                            }}</label>
                            <time-field
                                name="time"
                                [ngModel]="form_value().date"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                            />
                        </div>
                        <div class="flex-1">
                            <label for="duration">{{
                                'FORM.DURATION' | translate
                            }}</label>
                            <duration-field
                                name="duration"
                                [time]="form_value().date"
                                [max]="max_duration()"
                                [min]="min_duration()"
                                [custom_options]="custom_duration_options()"
                                [step]="duration_step()"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone"
                                formControlName="duration"
                            />
                        </div>
                    }
                </div>
                @if (can_recurr()) {
                    <div class="flex flex-col">
                        <label for="recurrence">
                            {{ 'FORM.RECURRENCE' | translate }}<span>*</span>
                        </label>
                        <recurrence-field
                            name="recurrence"
                            [date]="form_value().date"
                            [ngModel]="form.value"
                            (ngModelChange)="onRecurrenceChange($event)"
                            [ngModelOptions]="{ standalone: true }"
                            [available_days]="available_days()"
                        ></recurrence-field>
                    </div>
                }
                @if (can_book_lockers()) {
                    <div class="flex items-center space-x-2">
                        <mat-checkbox
                            [ngModel]="!!form_value().secondary_resource"
                            (ngModelChange)="
                                form.patchValue({
                                    secondary_resource: $event ? 'locker' : '',
                                })
                            "
                            [ngModelOptions]="{ standalone: true }"
                        >
                            {{ 'BOOKINGS.DESK_REQUIRE_LOCKER' | translate }}
                        </mat-checkbox>
                    </div>
                }
                @if (active_form() === 'group') {
                    <div class="flex flex-col">
                        <label for="members">
                            {{ 'BOOKINGS.DESK_GROUP_MEMBERS' | translate }}
                        </label>
                        <a-user-list-field
                            [ngModel]="(options | async)?.members || []"
                            (ngModelChange)="setOptions({ members: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            [time]="form_value().date"
                        >
                            <button
                                btn
                                matRipple
                                type="button"
                                class="inverse min-w-1/4 flex-1 sm:flex-none"
                                (click)="findAvailableTime()"
                            >
                                <div class="hidden sm:flex">
                                    {{ 'Find Available time' }}
                                </div>
                                <div class="flex sm:hidden">Availability</div>
                            </button>
                        </a-user-list-field>
                        <p
                            class="bg-info text-info-content mt-1 flex items-center space-x-1 rounded p-1 text-sm shadow"
                        >
                            <icon class="text-xl">info</icon>
                            <span>{{
                                'BOOKINGS.DESK_GROUP_MEMBERS_INFO' | translate
                            }}</span>
                        </p>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        AsyncPipe,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        DateFieldComponent,
        DurationFieldComponent,
        TimeFieldComponent,
        FormsModule,
        ReactiveFormsModule,
        TranslatePipe,
        IconComponent,
        RecurrenceFieldComponent,
        UserSearchFieldComponent,
        UserListFieldComponent,
    ],
})
export class DeskFlowDetailsComponent {
    private _booking_form = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _dialog = inject(MatDialog);

    public readonly active_form = signal<FormType>('single');
    public readonly form_type_config = signal({
        single: { icon: 'person', label: 'Single' },
        group: { icon: 'group_add', label: 'Group' },
        other: { icon: 'person_add', label: 'Book for other' },
    });
    public readonly form_value = toSignal(this.form.valueChanges, {
        initialValue: this.form.value,
    });
    public readonly options = this._booking_form.options;
    private readonly _options_signal = toSignal(this._booking_form.options);

    private _options_sync = effect(() => {
        const options = this._options_signal();
        if (options?.group && this.active_form() !== 'group') {
            this.active_form.set('group');
        }
    });

    private _user_validation_sync = effect(() => {
        const form_type = this.active_form();
        const user_control = this.form.get('user');
        if (form_type === 'other') {
            user_control?.setValidators([Validators.required]);
        } else {
            user_control?.clearValidators();
        }
        user_control?.updateValueAndValidity();
    });

    public readonly hide_title = settingSignal('desks.hide_title', false);
    public readonly available_days = settingSignal(
        'desks.available_period',
        90,
    );

    public readonly end_date = computed(() => {
        return endOfDay(addDays(Date.now(), this.available_days())).valueOf();
    });

    public get form() {
        return this._booking_form.form;
    }
    public readonly duration_step = computed(
        () =>
            settingSignal('desks.duration_step')() ||
            settingSignal('bookings.duration_step', 15)(),
    );

    public readonly min_duration = computed(
        () =>
            settingSignal('desks.min_duration')() ||
            settingSignal('bookings.min_duration', 30)(),
    );

    public readonly max_duration = computed(
        () =>
            settingSignal('desks.max_duration')() ||
            settingSignal('bookings.max_duration', 8 * 60)(),
    );
    public readonly custom_duration_options = computed<number[]>(
        () =>
            settingSignal('desks.custom_duration_options')() ||
            settingSignal('bookings.custom_duration_options', [] as number[])(),
    );
    public readonly can_book_lockers = settingSignal(
        'desks.can_book_lockers',
        false,
    );
    public readonly can_recurr = settingSignal('desks.allow_recurrence', false);
    public readonly allow_time_changes = computed(
        () => settingSignal('desks.allow_time_changes')() !== false,
    );
    public readonly allow_all_day = computed(
        () =>
            this.allow_time_changes() &&
            (settingSignal('desks.allow_all_day')() ||
                settingSignal('bookings.allow_all_day')()),
    );
    public readonly use_24hr = settingSignal('use_24_hour_time', false);

    public get timezone() {
        return this._settings.get('app.bookings.use_building_timezone') ||
            this._settings.get('app.desks.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }

    public setActiveForm(form: FormType) {
        this.active_form.set(form as any);
        this._booking_form.setOptions({ group: form === 'group' });
        if (form === 'single') {
            this.form.patchValue({ user: currentUser(), attendees: [] });
        } else if (form === 'group') {
            this.form.patchValue({ user: currentUser() });
        } else {
            this.form.patchValue({ user: null, attendees: [] });
        }
    }

    public setOptions(options: any) {
        this._booking_form.setOptions(options);
    }

    public onRecurrenceChange(recurrence: any) {
        this.form.patchValue(recurrence);
    }

    public findAvailableTime() {
        const { date, duration } = this.form.getRawValue();
        const members = this._options_signal()?.members ?? [];
        const ref = this._dialog.open(FindAvailabilityModalComponent, {
            data: {
                users: members,
                host: currentUser(),
                date,
                duration,
            },
        });
        ref.afterClosed().subscribe((result) => {
            if (!result) return;
            this.form.patchValue({
                date: ref.componentInstance.date(),
                duration: ref.componentInstance.duration(),
            });
            this.setOptions({ members: ref.componentInstance.users() });
        });
    }
}
