import {
    Component,
    computed,
    inject,
    Injector,
    input,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    AsyncHandler,
    currentUser,
    formatDuration,
    onFieldChange,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
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

import { queryCalendarPermission } from './calendar.fn';
import { EventFormService } from './event-form.service';

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
            <div>
                <div class="flex flex-wrap items-center sm:space-x-2">
                    <div class="min-w-[256px] flex-1">
                        <label for="title">{{
                            'FORM.TITLE' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                id="title"
                                matInput
                                [formField]="form().title"
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
                    @if (!allow_multiday()) {
                        <div class="relative min-w-[256px] flex-1">
                            <label for="date">
                                {{ 'FORM.DATE' | translate }}<span>*</span>
                            </label>
                            <a-date-field
                                id="date"
                                [formField]="form().date"
                                [to]="end_date()"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone()"
                            >
                                {{ 'FORM.DATE_ERROR' | translate }}
                            </a-date-field>
                            @if (allow_all_day()) {
                                <mat-checkbox
                                    [formField]="form().all_day"
                                    class="absolute -top-2 right-2"
                                >
                                    {{ 'COMMON.ALL_DAY' | translate }}
                                </mat-checkbox>
                            }
                        </div>
                    }
                </div>
                @if (allow_multiday()) {
                    <div class="flex flex-wrap items-center sm:space-x-2">
                        <div class="relative min-w-[256px] flex-1">
                            <label for="date">
                                {{ 'FORM.DATE' | translate }}<span>*</span>
                            </label>
                            <a-date-field
                                [formField]="form().date"
                                [to]="end_date()"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone()"
                                [range]="1"
                            >
                                {{ 'FORM.DATE_ERROR' | translate }}
                            </a-date-field>
                            @if (allow_all_day()) {
                                <mat-checkbox
                                    [formField]="form().all_day"
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
                                [formField]="form().date_end"
                                [from]="start_date"
                                [to]="end_date()"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone()"
                                [range]="2"
                            >
                                {{ 'FORM.DATE_ERROR' | translate }}
                            </a-date-field>
                        </div>
                    </div>
                }
                @if (!model().all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="start-time">
                                {{ 'FORM.TIME_START' | translate }}
                                <span>*</span>
                            </label>
                            <a-time-field
                                name="start-time"
                                [ngModel]="model().date"
                                (ngModelChange)="
                                    model.update((m) => ({ ...m, date: $event }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [disabled]="form().date().disabled()"
                                [range]="bookable_hours()"
                                [min_duration]="effective_min_duration()"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone()"
                            ></a-time-field>
                        </div>
                        @if (allow_multiday()) {
                            <div class="w-1/3 flex-1">
                                <label for="end-time">
                                    {{ 'FORM.TIME_END' | translate
                                    }}<span>*</span>
                                </label>
                                <a-time-field
                                    name="end-time"
                                    [ngModel]="model().date_end"
                                    (ngModelChange)="
                                        model.update((m) => ({
                                            ...m,
                                            date_end: $event,
                                        }))
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [from]="model()?.date + 30 * 60 * 1000"
                                    [range]="bookable_hours()"
                                    [use_24hr]="use_24hr()"
                                    [extra_info_fn]="duration_info"
                                    [timezone]="timezone()"
                                ></a-time-field>
                            </div>
                        }
                        @if (!allow_multiday()) {
                            <div class="w-1/3 flex-1">
                                <label for="end-time">
                                    {{ 'FORM.TIME_END' | translate
                                    }}<span>*</span>
                                </label>
                                <a-duration-field
                                    id="end-time"
                                    [formField]="form().duration"
                                    [time]="model()?.date"
                                    [max]="max_duration()"
                                    [min]="min_duration()"
                                    [step]="duration_step()"
                                    [custom_options]="custom_duration_options()"
                                    [end_time]="bookable_hours()?.end"
                                    [use_24hr]="use_24hr()"
                                    [timezone]="timezone()"
                                ></a-duration-field>
                            </div>
                        }
                    </div>
                }
                @if (can_book_for_anyone()) {
                    <div class="mb-4 flex w-full flex-col">
                        <label for="host">
                            {{ 'FORM.HOST' | translate }}<span>*</span>
                        </label>
                        <a-user-search-field
                            [formField]="form().organiser"
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
                } @else if (can_book_for_others()) {
                    <div class="flex w-full flex-col">
                        <label for="host">
                            {{ 'FORM.HOST' | translate }}<span>*</span>
                        </label>
                        <host-select-field
                            [formField]="form().organiser"
                        ></host-select-field>
                    </div>
                }
                @if (show_host_change_warning()) {
                    <div
                        host-change-warning
                        class="bg-warning text-warning-content mb-4 flex items-center gap-2 rounded-sm p-2 text-sm"
                    >
                        <icon class="text-2xl">warning</icon>
                        <p>
                            {{
                                'CALENDAR_EVENT.HOST_CHANGE_WARNING' | translate
                            }}
                            @if (has_visitors()) {
                                <br />
                                {{
                                    'CALENDAR_EVENT.HOST_CHANGE_VISITORS_WARNING'
                                        | translate
                                }}
                            }
                        </p>
                    </div>
                }
                @if (allow_recurrence()) {
                    <div class="flex w-full flex-col">
                        <label for="recurrence">
                            {{ 'FORM.RECURRENCE' | translate }}<span>*</span>
                        </label>
                        <recurrence-field
                            type="event"
                            [date]="model().date"
                            [available_days]="allowed_future_days()"
                            (first_instance)="onFirstInstanceChange($event)"
                            [formField]="form().recurrence"
                        ></recurrence-field>
                        @if (model().id) {
                            <mat-checkbox [formField]="form().update_master">
                                {{ 'FORM.UPDATE_FUTURE' | translate }}
                            </mat-checkbox>
                        }
                    </div>
                }
                @if (allow_visibility()) {
                    <div class="flex w-full flex-col">
                        <label for="visibility">
                            {{ 'COMMON.VISIBILITY' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select [formField]="form().visibility">
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
                @if (allow_online_meetings()) {
                    <settings-toggle
                        [ngModel]="
                            model().meeting_provider === 'teamsForBusiness'
                        "
                        (ngModelChange)="
                            model.update((m) => ({
                                ...m,
                                meeting_provider: $event
                                    ? 'teamsForBusiness'
                                    : null,
                            }))
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
        FormField,
        FormsModule,
        SettingsToggleComponent,
        IconComponent,
    ],
})
export class MeetingFormDetailsComponent extends AsyncHandler {
    private _settings = inject(SettingsService);
    private _event_form = inject(EventFormService);
    private _org = inject(OrganisationService);
    private readonly _max_duration = this._settings.signal(
        'events.max_duration',
        480,
    );
    private readonly _duration_step = this._settings.signal(
        'events.duration_step',
        30,
    );
    private readonly _can_book_for_others = this._settings.signal(
        'events.can_book_for_others',
        false,
    );
    private readonly _can_book_for_anyone = this._settings.signal(
        'events.can_book_for_anyone',
        false,
    );
    private readonly _allow_all_day = this._settings.signal(
        'events.allow_all_day',
        false,
    );
    private readonly _allow_visibility = this._settings.signal(
        'events.allow_visibility',
        false,
    );
    private readonly _allow_online_meetings = this._settings.signal(
        'events.allow_online_meetings',
        false,
    );
    private readonly _allow_recurrence = this._settings.signal(
        'events.allow_recurrence',
        false,
    );
    private readonly _allow_multiday = this._settings.signal(
        'events.allow_multiday',
        false,
    );
    private readonly _use_building_timezone = this._settings.signal(
        'events.use_building_timezone',
        false,
    );
    private readonly _allowed_future_days = this._settings.signal(
        'events.allowed_future_days',
        180,
    );
    private readonly _use_24hr = this._settings.signal(
        'use_24_hour_time',
        false,
    );
    private readonly _bookable_hours = this._settings.signal(
        'events.bookable_hours',
        null,
    );
    private readonly _min_duration = this._settings.signal(
        'events.min_duration',
        30,
    );
    private readonly _custom_duration_options = this._settings.signal(
        'events.custom_duration_options',
        [],
    );

    private _injector = inject(Injector);

    public readonly form = input<EventFormService['form']>(undefined);
    public readonly checking_permission = signal(false);
    public readonly permission_error = signal('');

    public readonly minimum_duration = 30;

    public get model() {
        return this._event_form.model;
    }

    public readonly show_host_change_warning = computed(() => {
        const event = this._event_form.event;
        const model = this.model();
        const original_host = (event?.host || event?.organiser?.email || '')
            .trim()
            .toLowerCase();
        const new_host = (model.host || model.organiser?.email || '')
            .trim()
            .toLowerCase();
        return (
            !!event?.id &&
            (this.can_book_for_anyone() || this.can_book_for_others()) &&
            !!original_host &&
            !!new_host &&
            original_host !== new_host
        );
    });
    public readonly has_visitors = computed(() => {
        const event = this._event_form.event;
        return [
            ...(event?.attendees || []),
            ...(this.model().attendees || []),
        ].some((user) => user?.is_external);
    });

    constructor() {
        super();
        onFieldChange(
            this.model,
            (m) => m.organiser,
            (user) => this._checkCalendarPermission(user),
            this._injector,
        );
    }

    private async _checkCalendarPermission(user: any) {
        if (!user?.email || !this.can_book_for_anyone()) return;
        const current = currentUser();
        if (user.email.toLowerCase() === current?.email?.toLowerCase()) return;
        this.permission_error.set('');
        const checked_email = user.email;
        this.checking_permission.set(true);
        try {
            const permission = await queryCalendarPermission(checked_email);
            if (this.model()?.organiser?.email !== checked_email) return;
            const can_book =
                (permission.has_access &&
                    ALLOWED_CALENDAR_ROLES.includes(permission.role)) ||
                permission.can_edit;
            if (!can_book) {
                this.permission_error.set(
                    `You don't have permission to book on behalf of the user "${checked_email}", please select a user which has shared their calendar with Edit or Delegate permissions. Host reverted back to you.`,
                );
                this._resetHostToCurrentUser();
            }
        } catch (_) {
            if (this.model()?.organiser?.email !== checked_email) return;
            this.permission_error.set(
                `You don't have permission to book on behalf of the user "${checked_email}", please select a user which has shared their calendar with Edit or Delegate permissions.`,
            );
            this._resetHostToCurrentUser();
        } finally {
            this.checking_permission.set(false);
        }
    }

    private _resetHostToCurrentUser() {
        const user = currentUser();
        this.model.update((m) => ({
            ...m,
            host: user.email,
            organiser: user,
            user,
            creator: user.email,
            calendar: user.email,
        }));
        this._event_form.storeForm();
    }

    public readonly max_duration = this._max_duration;
    public readonly duration_step = this._duration_step;
    public readonly can_book_for_others = this._can_book_for_others;
    public readonly can_book_for_anyone = this._can_book_for_anyone;
    public readonly allow_all_day = this._allow_all_day;
    public readonly allow_visibility = this._allow_visibility;
    public readonly allow_online_meetings = this._allow_online_meetings;
    public readonly allow_recurrence = computed(
        () => this._allow_recurrence() && this.model().duration <= 24 * 60,
    );
    public readonly allow_multiday = computed(
        () => this._allow_multiday() || this._event_form.is_multiday,
    );
    public readonly timezone = computed(() =>
        this._use_building_timezone() ? this._org.building?.timezone || '' : '',
    );

    public get start_date() {
        const date = this.model().date || Date.now();
        const date_end =
            this.model().date_end || addMinutes(date, 30).valueOf();
        const is_next_day =
            format(date, 'yyyy-MM-dd') !== format(date_end, 'yyyy-MM-dd');
        return is_next_day
            ? startOfDay(date).valueOf()
            : addMinutes(date, 30).valueOf();
    }

    public readonly end_date = computed(() =>
        endOfDay(addDays(Date.now(), this._allowed_future_days())).valueOf(),
    );
    public readonly use_24hr = this._use_24hr;
    public readonly allowed_future_days = this._allowed_future_days;
    public readonly bookable_hours = this._bookable_hours;
    public readonly min_duration = this._min_duration;
    public readonly custom_duration_options = this._custom_duration_options;
    public readonly effective_min_duration = computed(() =>
        Math.min(this.min_duration(), ...this.custom_duration_options()),
    );

    public readonly duration_info = (time: number) => {
        const date = this.model().date;
        if (format(date, 'yyyy-MM-dd') !== format(time, 'yyyy-MM-dd'))
            return '';
        const diff = differenceInMinutes(time, date);
        return ` (${formatDuration({
            hours: Math.floor(diff / 60),
            minutes: diff % 60,
        })})`;
    };

    public onFirstInstanceChange(date: number) {
        this.model.update((m) => ({ ...m, date }));
    }

    public readonly visibility_options = [
        { value: 'normal', label: 'NORMAL' },
        { value: 'personal', label: 'PERSONAL' },
        { value: 'public', label: 'PUBLIC' },
        { value: 'private', label: 'PRIVATE' },
        { value: 'confidential', label: 'CONFIDENTIAL' },
    ];
}
