import { Component, effect, inject, input, signal } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    AsyncHandler,
    currentUser,
    formatDuration,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { SettingsToggleComponent, TranslatePipe } from '@placeos/components';
import { EventFormService, queryCalendarPermission } from '@placeos/events';
import {
    DateFieldComponent,
    DurationFieldComponent,
    HostSelectFieldComponent,
    RecurrenceFieldComponent,
    TimeFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import {
    addDays,
    addMinutes,
    differenceInMinutes,
    endOfDay,
    format,
    startOfDay,
} from 'date-fns';
import { lastValueFrom } from 'rxjs';

const MINUTES_IN_DAY = 24 * 60;

const ALLOWED_CALENDAR_ROLES = [
    'write',
    'delegateWithoutPrivateEventAccess',
    'delegateWithPrivateEventAccess',
];

@Component({
    selector: 'meeting-form-details',
    template: `
        @if (form()) {
            <div [formGroup]="form()">
                <div class="flex flex-wrap items-center sm:space-x-2">
                    <div class="min-w-[256px] flex-1">
                        <label for="title">{{
                            'FORM.TITLE' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="title"
                                formControlName="title"
                                [placeholder]="
                                    'CALENDAR_EVENT.TITLE_PLACEHOLDER'
                                        | translate
                                "
                            />
                            <mat-error>
                                {{ 'FORM.TITLE_REQUIRED' | translate }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                    @if (!allow_multiday) {
                        <div class="relative min-w-[256px] flex-1">
                            <label for="date">
                                {{ 'FORM.DATE' | translate }}<span>*</span>
                            </label>
                            <a-date-field
                                name="date"
                                formControlName="date"
                                [to]="end_date"
                                [use_24hr]="use_24hr"
                                [timezone]="timezone"
                            >
                                {{ 'FORM.DATE_ERROR' | translate }}
                            </a-date-field>
                            @if (allow_all_day) {
                                <mat-checkbox
                                    formControlName="all_day"
                                    class="absolute -top-2 right-2"
                                >
                                    {{ 'COMMON.ALL_DAY' | translate }}
                                </mat-checkbox>
                            }
                        </div>
                    }
                </div>
                @if (allow_multiday) {
                    <div class="flex flex-wrap items-center sm:space-x-2">
                        <div class="relative min-w-[256px] flex-1">
                            <label for="date">
                                {{ 'FORM.DATE' | translate }}<span>*</span>
                            </label>
                            <a-date-field
                                name="date"
                                formControlName="date"
                                [to]="end_date"
                                [use_24hr]="use_24hr"
                                [timezone]="timezone"
                                [range]="1"
                            >
                                {{ 'FORM.DATE_ERROR' | translate }}
                            </a-date-field>
                            @if (allow_all_day) {
                                <mat-checkbox
                                    formControlName="all_day"
                                    class="absolute -top-2 right-2"
                                >
                                    {{ 'COMMON.ALL_DAY' | translate }}
                                </mat-checkbox>
                            }
                        </div>
                        <div class="relative min-w-[256px] flex-1">
                            <label for="date">
                                {{ 'FORM.DATE_END' | translate }}<span>*</span>
                            </label>
                            <a-date-field
                                name="date"
                                formControlName="date_end"
                                [from]="start_date"
                                [to]="end_date"
                                [use_24hr]="use_24hr"
                                [timezone]="timezone"
                                [range]="2"
                            >
                                {{ 'FORM.DATE_ERROR' | translate }}
                            </a-date-field>
                        </div>
                    </div>
                }
                @if (!form().value.all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="start-time">
                                {{ 'FORM.TIME_START' | translate }}
                                <span>*</span>
                            </label>
                            <a-time-field
                                name="start-time"
                                [ngModel]="form().getRawValue().date"
                                (ngModelChange)="
                                    form().patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [disabled]="form().controls.date.disabled"
                                [range]="bookable_hours"
                                [use_24hr]="use_24hr"
                                [timezone]="timezone"
                            ></a-time-field>
                        </div>
                        @if (allow_multiday) {
                            <div class="w-1/3 flex-1">
                                <label for="end-time">
                                    {{ 'FORM.TIME_END' | translate
                                    }}<span>*</span>
                                </label>
                                <a-time-field
                                    name="end-time"
                                    [ngModel]="form().value.date_end"
                                    (ngModelChange)="
                                        form().patchValue({ date_end: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [from]="
                                        form()?.getRawValue()?.date +
                                        30 * 60 * 1000
                                    "
                                    [range]="bookable_hours"
                                    [use_24hr]="use_24hr"
                                    [extra_info_fn]="duration_info"
                                    [timezone]="timezone"
                                ></a-time-field>
                            </div>
                        }
                        @if (!allow_multiday) {
                            <div class="w-1/3 flex-1">
                                <label for="end-time">
                                    {{ 'FORM.TIME_END' | translate
                                    }}<span>*</span>
                                </label>
                                <a-duration-field
                                    name="end-time"
                                    formControlName="duration"
                                    [time]="form()?.getRawValue()?.date"
                                    [max]="max_duration"
                                    [end_time]="bookable_hours?.end"
                                    [use_24hr]="use_24hr"
                                    [timezone]="timezone"
                                ></a-duration-field>
                            </div>
                        }
                    </div>
                }
                @if (can_book_for_anyone) {
                    <div class="mb-4 flex w-full flex-col">
                        <label for="host">
                            {{ 'FORM.HOST' | translate }}<span>*</span>
                        </label>
                        <a-user-search-field
                            name="host"
                            formControlName="organiser"
                        ></a-user-search-field>
                        @if (checking_permission()) {
                            <p class="text-pending mt-1 text-xs">
                                Checking calendar permissions...
                            </p>
                        }
                        @if (permission_error()) {
                            <p class="text-error mt-1 text-xs">
                                {{ permission_error() }}
                            </p>
                        }
                    </div>
                } @else if (can_book_for_others) {
                    <div class="flex w-full flex-col">
                        <label for="host">
                            {{ 'FORM.HOST' | translate }}<span>*</span>
                        </label>
                        <host-select-field
                            name="host"
                            formControlName="organiser"
                        ></host-select-field>
                    </div>
                }
                @if (allow_recurrence) {
                    <div class="flex w-full flex-col">
                        <label for="recurrence">
                            {{ 'FORM.RECURRENCE' | translate }}<span>*</span>
                        </label>
                        <recurrence-field
                            name="recurrence"
                            type="event"
                            [date]="form().getRawValue().date"
                            formControlName="recurrence"
                        ></recurrence-field>
                        @if (form().value.id) {
                            <mat-checkbox formControlName="update_master">
                                {{ 'FORM.UPDATE_FUTURE' | translate }}
                            </mat-checkbox>
                        }
                    </div>
                }
                @if (allow_visibility) {
                    <div class="flex w-full flex-col">
                        <label for="visibility">
                            {{ 'COMMON.VISIBILITY' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select formControlName="visibility">
                                @for (
                                    option of visibility_options;
                                    track option.value
                                ) {
                                    <mat-option [value]="option.value">
                                        {{
                                            'COMMON.VISIBILITY_' + option.label
                                                | translate
                                        }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                @if (allow_online_meetings) {
                    <settings-toggle
                        [ngModel]="
                            form().value.meeting_provider === 'teamsForBusiness'
                        "
                        (ngModelChange)="
                            form().patchValue({
                                meeting_provider: $event
                                    ? 'teamsForBusiness'
                                    : null,
                            })
                        "
                        [ngModelOptions]="{ standalone: true }"
                    >
                        {{ 'CALENDAR_EVENT.TEAMS_MEETING' | translate }}
                    </settings-toggle>
                }
            </div>
        }
    `,
    styles: [],
    imports: [
        TranslatePipe,
        MatFormFieldModule,
        MatSelectModule,
        MatCheckboxModule,
        RecurrenceFieldComponent,
        HostSelectFieldComponent,
        UserSearchFieldComponent,
        DurationFieldComponent,
        TimeFieldComponent,
        DateFieldComponent,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        SettingsToggleComponent,
    ],
})
export class MeetingFormDetailsComponent extends AsyncHandler {
    private _settings = inject(SettingsService);
    private _event_form = inject(EventFormService);
    private _org = inject(OrganisationService);

    public readonly form = input<FormGroup>(undefined);
    public readonly checking_permission = signal(false);
    public readonly permission_error = signal('');

    public readonly minimum_duration = 30;

    constructor() {
        super();
        effect(() => {
            const form = this.form();
            if (!form) return;
            this.subscription(
                'organiser_permission_check',
                form.get('organiser').valueChanges.subscribe((user) => {
                    this._checkCalendarPermission(user);
                }),
            );
        });
    }

    private async _checkCalendarPermission(user: any) {
        this.permission_error.set('');
        if (!user?.email || !this.can_book_for_anyone) return;
        const current = currentUser();
        if (user.email.toLowerCase() === current?.email?.toLowerCase()) return;
        const checked_email = user.email;
        this.checking_permission.set(true);
        try {
            const permission = await lastValueFrom(
                queryCalendarPermission(checked_email),
            );
            if (this.form()?.value?.organiser?.email !== checked_email) return;
            if (
                !permission.has_access ||
                !ALLOWED_CALENDAR_ROLES.includes(permission.role)
            ) {
                this.permission_error.set(
                    "You don't have permission to book on behalf of that user, please select a user which has shared their calendar with Edit or Delegate permissions.",
                );
                this.form()?.patchValue(
                    { organiser: currentUser() },
                    { emitEvent: false },
                );
            }
        } catch (_) {
            if (this.form()?.value?.organiser?.email !== checked_email) return;
            this.permission_error.set(
                "You don't have permission to book on behalf of that user, please select a user which has shared their calendar with Edit or Delegate permissions.",
            );
            this.form()?.patchValue(
                { organiser: currentUser() },
                { emitEvent: false },
            );
        } finally {
            this.checking_permission.set(false);
        }
    }

    public get max_duration() {
        return this._settings.get('app.events.max_duration') || 480;
    }

    public get can_book_for_others() {
        return this._settings.get('app.events.can_book_for_others');
    }

    public get can_book_for_anyone() {
        return this._settings.get('app.events.can_book_for_anyone');
    }

    public get allow_all_day() {
        return this._settings.get('app.events.allow_all_day');
    }

    public get allow_visibility() {
        return this._settings.get('app.events.allow_visibility');
    }

    public get allow_online_meetings() {
        return !!this._settings.get('app.events.allow_online_meetings');
    }

    public get allow_recurrence() {
        return (
            this._settings.get('app.events.allow_recurrence') &&
            this.form().value.duration <= 24 * 60
        );
    }

    public get allow_multiday() {
        return (
            this._settings.get('app.events.allow_multiday') ||
            this._event_form.is_multiday
        );
    }

    public get timezone() {
        return this._settings.get('app.events.use_building_timezone')
            ? this._org.building?.timezone || ''
            : '';
    }

    public get start_date() {
        const date = this.form().getRawValue().date || Date.now();
        const date_end =
            this.form().getRawValue().date_end ||
            addMinutes(date, 30).valueOf();
        const is_next_day =
            format(date, 'yyyy-MM-dd') !== format(date_end, 'yyyy-MM-dd');
        return is_next_day
            ? startOfDay(date).valueOf()
            : addMinutes(date, 30).valueOf();
    }

    public get end_date() {
        return endOfDay(
            addDays(
                Date.now(),
                this._settings.get('app.events.allowed_future_days') || 180,
            ),
        ).valueOf();
    }

    public get use_24hr() {
        return this._settings.get('app.use_24_hour_time');
    }

    public get bookable_hours() {
        return this._settings.get('app.events.bookable_hours');
    }

    public readonly duration_info = (time: number) => {
        const date = this.form().getRawValue().date;
        if (format(date, 'yyyy-MM-dd') !== format(time, 'yyyy-MM-dd'))
            return '';
        const diff = differenceInMinutes(time, date);
        return ` (${formatDuration({
            hours: Math.floor(diff / 60),
            minutes: diff % 60,
        })})`;
    };

    public readonly visibility_options = [
        { value: 'normal', label: 'NORMAL' },
        { value: 'personal', label: 'PERSONAL' },
        { value: 'public', label: 'PUBLIC' },
        { value: 'private', label: 'PRIVATE' },
        { value: 'confidential', label: 'CONFIDENTIAL' },
    ];
}
