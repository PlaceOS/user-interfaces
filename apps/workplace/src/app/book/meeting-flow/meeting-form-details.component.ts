import { Component, inject, input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
    formatDuration,
} from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import {
    DateFieldComponent,
    DurationFieldComponent,
    HostSelectFieldComponent,
    RecurrenceFieldComponent,
    TimeFieldComponent,
    TimeFieldRange,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import {
    addDays,
    addMinutes,
    differenceInMinutes,
    endOfDay,
    format,
    set,
    startOfDay,
    startOfMinute,
} from 'date-fns';

const MINUTES_IN_DAY = 24 * 60;

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
                                [range]="start_time_range"
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
                    <div class="flex w-full flex-col">
                        <label for="host">
                            {{ 'FORM.HOST' | translate }}<span>*</span>
                        </label>
                        <a-user-search-field
                            name="host"
                            formControlName="organiser"
                        ></a-user-search-field>
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
    ],
})
export class MeetingFormDetailsComponent
    extends AsyncHandler
    implements OnChanges
{
    private _settings = inject(SettingsService);
    private _event_form = inject(EventFormService);
    private _org = inject(OrganisationService);

    public readonly form = input<FormGroup>(undefined);

    public readonly minimum_duration = 30;

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
        return (
            this._settings.get('app.events.allow_all_day') &&
            !this.bookable_hours
        );
    }

    public get allow_visibility() {
        return this._settings.get('app.events.allow_visibility');
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
            this.form().getRawValue().date_end || addMinutes(date, 30).valueOf();
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
        const minutes = this._settings.get('app.events.bookable_hours');
        const start = Number(minutes?.start);
        const end = Number(minutes?.end);
        if (!Number.isFinite(start) || !Number.isFinite(end)) {
            return undefined;
        }
        const normalised_start = Math.max(0, Math.min(MINUTES_IN_DAY, start));
        const normalised_end = Math.max(0, Math.min(MINUTES_IN_DAY, end));
        if (normalised_start >= normalised_end) {
            return undefined;
        }
        return { start: normalised_start, end: normalised_end };
    }

    public get start_time_range() {
        const bookable_hours = this.bookable_hours;
        if (!bookable_hours) {
            return undefined;
        }
        return {
            start: bookable_hours.start,
            end: Math.max(
                bookable_hours.start,
                bookable_hours.end -
                    (this.allow_multiday ? 0 : this.minimum_duration),
            ),
        };
    }

    public ngOnChanges(changes: SimpleChanges): void {
        const form = this.form();
        if (!changes.form || !form) {
            return;
        }
        this.subscription(
            'meeting_bookable_hours',
            form.valueChanges.subscribe(() => this.enforceBookableHours()),
        );
        this.timeout('meeting_bookable_hours_init', () =>
            this.enforceBookableHours(),
        );
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

    private enforceBookableHours(): void {
        const form = this.form();
        const bookable_hours = this.bookable_hours;
        const start_time_range = this.start_time_range;
        if (!form || !bookable_hours || !start_time_range) {
            return;
        }
        const value = form.getRawValue();
        const patch: Record<string, any> = {};
        if (value.all_day) {
            patch.all_day = false;
        }
        if (value.date) {
            const start_date = this.clampDateToRange(
                value.date,
                start_time_range,
            );
            if (start_date !== value.date) {
                patch.date = start_date;
            }
        }
        if (this.allow_multiday && value.date_end) {
            const end_date = this.clampDateToRange(
                value.date_end,
                bookable_hours,
            );
            if (end_date !== value.date_end) {
                patch.date_end = end_date;
            }
        }
        const start_date = patch.date ?? value.date;
        if (!start_date) {
            this.patchBookableHours(form, patch);
            return;
        }
        const start_minutes = this.minutesSinceMidnight(start_date);
        const max_duration = Math.min(
            this.max_duration,
            bookable_hours.end - start_minutes,
        );
        if (!this.allow_multiday && value.duration > max_duration) {
            patch.duration = max_duration;
        }
        this.patchBookableHours(form, patch);
    }

    private clampDateToRange(datestamp: number, range: TimeFieldRange): number {
        const current_minutes = this.minutesSinceMidnight(datestamp);
        if (current_minutes < range.start) {
            return this.setMinutesSinceMidnight(datestamp, range.start);
        }
        if (current_minutes > range.end) {
            return this.setMinutesSinceMidnight(datestamp, range.end);
        }
        return datestamp;
    }

    private minutesSinceMidnight(datestamp: number): number {
        const date = new Date(datestamp);
        return date.getHours() * 60 + date.getMinutes();
    }

    private setMinutesSinceMidnight(
        datestamp: number,
        minute_of_day: number,
    ): number {
        return startOfMinute(
            set(datestamp, {
                hours: Math.floor(minute_of_day / 60),
                minutes: minute_of_day % 60,
                seconds: 0,
                milliseconds: 0,
            }),
        ).valueOf();
    }

    private patchBookableHours(
        form: FormGroup,
        patch: Record<string, any>,
    ): void {
        if (!Object.keys(patch).length) {
            return;
        }
        form.patchValue(patch, { emitEvent: false });
    }
}
