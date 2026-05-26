import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { notifyError, notifySuccess } from '@placeos/common';
import {
    FullscreenModalShellComponent,
    MediaDurationPipe,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';
import {
    addSignagePlaylist,
    MediaAnimation,
    SignagePlaylist,
    updateSignagePlaylist,
} from '@placeos/ts-client';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { lastValueFrom, startWith } from 'rxjs';

type PlaylistScheduleType = 'play_hours' | 'play_at' | 'play_cron';
type RecurringScheduleType =
    | 'minutes'
    | 'hours'
    | 'daily'
    | 'weekdays'
    | 'weekly'
    | 'monthly'
    | 'monthly_weekday'
    | 'custom';

const FULL_DAY_START_MINUTES = 0;
const FULL_DAY_END_MINUTES = 23 * 60 + 59;
const DEFAULT_RECURRING_TIME = '09:00';
const DEFAULT_RECURRING_CRON = '0 9 * * *';
const WEEKDAY_OPTIONS = [
    { value: 1, label: 'Mon', name: 'Monday' },
    { value: 2, label: 'Tue', name: 'Tuesday' },
    { value: 3, label: 'Wed', name: 'Wednesday' },
    { value: 4, label: 'Thu', name: 'Thursday' },
    { value: 5, label: 'Fri', name: 'Friday' },
    { value: 6, label: 'Sat', name: 'Saturday' },
    { value: 0, label: 'Sun', name: 'Sunday' },
];
const WEEK_OF_MONTH_OPTIONS = [1, 2, 3, 4, 5];

function minutesToTime(value: number) {
    const safe_value = Math.max(
        FULL_DAY_START_MINUTES,
        Math.min(FULL_DAY_END_MINUTES, value || 0),
    );
    const hours = Math.floor(safe_value / 60)
        .toString()
        .padStart(2, '0');
    const minutes = (safe_value % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

function timeToMinutes(value: string) {
    const [hours, minutes] = (value || '').split(':').map((_) => +_ || 0);
    return Math.max(
        FULL_DAY_START_MINUTES,
        Math.min(FULL_DAY_END_MINUTES, hours * 60 + minutes),
    );
}

function parsePlayHours(value: string | null | undefined) {
    const [start, end] = (value || '').split('-');
    return {
        start: start ? timeToMinutes(start) : FULL_DAY_START_MINUTES,
        end: end ? timeToMinutes(end) : FULL_DAY_END_MINUTES,
    };
}

function parseCronPlayHours(
    play_hours: string | null | undefined,
    recurrence_time: string,
) {
    if (play_hours?.includes('-')) return parsePlayHours(play_hours);
    const start = timeToMinutes(recurrence_time);
    const duration = parseDurationMinutes(play_hours) || 30;
    return {
        start,
        end: Math.min(FULL_DAY_END_MINUTES, start + duration),
    };
}

function parseDurationMinutes(value: string | null | undefined) {
    const [hours, minutes] = (value || '').split(':').map((_) => +_ || 0);
    return hours * 60 + minutes;
}

function ordinal(value: number) {
    if (value >= 11 && value <= 13) return `${value}th`;
    switch (value % 10) {
        case 1:
            return `${value}st`;
        case 2:
            return `${value}nd`;
        case 3:
            return `${value}rd`;
        default:
            return `${value}th`;
    }
}

function normaliseWeekdays(value: number[] | null | undefined) {
    const seen_days = new Set<number>();
    for (const day of value || []) {
        if (day >= 0 && day <= 6) seen_days.add(day);
    }
    return WEEKDAY_OPTIONS.map((day) => day.value).filter((day) =>
        seen_days.has(day),
    );
}

function parseCronNumber(value: string, min: number, max: number) {
    if (!/^\d+$/.test(value || '')) return null;
    const number_value = +value;
    return number_value >= min && number_value <= max ? number_value : null;
}

function parseCronStep(value: string, min: number, max: number) {
    const match = /^\*\/(\d+)$/.exec(value || '');
    if (!match) return null;
    const step = +match[1];
    return step >= min && step <= max ? step : null;
}

function dayRangeForWeekOfMonth(value: number | null | undefined) {
    const week = Math.max(1, Math.min(5, value || 1));
    if (week === 5) return '29-31';
    const start = (week - 1) * 7 + 1;
    return `${start}-${start + 6}`;
}

function parseCronWeekOfMonth(value: string) {
    const match = /^(\d+)-(\d+)$/.exec(value || '');
    if (!match) return null;
    const start = +match[1];
    const end = +match[2];
    if (start === 29 && end === 31) return 5;
    if ((start - 1) % 7 !== 0 || end !== start + 6) return null;
    const week = (start - 1) / 7 + 1;
    return week >= 1 && week <= 4 ? week : null;
}

function isCronMonthlyWeekday(day_part: string, weekday_part: string) {
    return (
        parseCronWeekOfMonth(day_part) !== null &&
        parseCronNumber(weekday_part, 0, 6) !== null
    );
}

function parseCronWeekdays(value: string) {
    if (!value?.trim() || value === '*') return null;
    const days = new Set<number>();
    for (const part of value.split(',')) {
        if (part.includes('-')) {
            const [start, end] = part
                .split('-')
                .map((_) => parseCronNumber(_, 0, 6));
            if (start === null || end === null || start > end) return null;
            for (let day = start; day <= end; day++) days.add(day);
        } else {
            const day = parseCronNumber(part, 0, 6);
            if (day === null) return null;
            days.add(day);
        }
    }
    return normaliseWeekdays([...days]);
}

function parseRecurringCron(value: string | null | undefined) {
    const [minute_part, hour_part, day_part, month_part, weekday_part] = (
        value || DEFAULT_RECURRING_CRON
    )
        .trim()
        .split(/\s+/);
    const minute = parseCronNumber(minute_part, 0, 59);
    const hour = parseCronNumber(hour_part, 0, 23);
    const time =
        minute === null || hour === null
            ? DEFAULT_RECURRING_TIME
            : `${hour.toString().padStart(2, '0')}:${minute
                  .toString()
                  .padStart(2, '0')}`;
    const custom = {
        recurrence_type: 'custom' as RecurringScheduleType,
        recurrence_time: time,
        recurrence_interval: 1,
        recurrence_week_of_month: 1,
        recurrence_day_of_week: 1,
        recurrence_weekdays: [1],
        recurrence_day_of_month: 1,
    };
    if (day_part === '*' && month_part === '*' && weekday_part === '*') {
        const minute_step =
            minute_part === '*' ? 1 : parseCronStep(minute_part, 1, 59);
        if (minute_step !== null && hour_part === '*') {
            return {
                ...custom,
                recurrence_type: 'minutes' as RecurringScheduleType,
                recurrence_interval: minute_step,
            };
        }
        const hour_step =
            hour_part === '*' ? 1 : parseCronStep(hour_part, 1, 23);
        if (parseCronNumber(minute_part, 0, 59) === 0 && hour_step !== null) {
            return {
                ...custom,
                recurrence_type: 'hours' as RecurringScheduleType,
                recurrence_interval: hour_step,
            };
        }
    }
    if (minute === null || hour === null || month_part !== '*') return custom;
    if (day_part === '*' && weekday_part === '*') {
        return { ...custom, recurrence_type: 'daily' as RecurringScheduleType };
    }
    if (day_part === '*' && weekday_part === '1-5') {
        return {
            ...custom,
            recurrence_type: 'weekdays' as RecurringScheduleType,
        };
    }
    const weekdays = parseCronWeekdays(weekday_part);
    if (isCronMonthlyWeekday(day_part, weekday_part)) {
        const weekday = parseCronNumber(weekday_part, 0, 6) ?? 1;
        return {
            ...custom,
            recurrence_type: 'monthly_weekday' as RecurringScheduleType,
            recurrence_week_of_month: parseCronWeekOfMonth(day_part) || 1,
            recurrence_day_of_week: weekday,
            recurrence_weekdays: [weekday],
        };
    }
    if (day_part === '*' && weekdays?.length) {
        return {
            ...custom,
            recurrence_type: 'weekly' as RecurringScheduleType,
            recurrence_weekdays: weekdays,
        };
    }
    const day_of_month = parseCronNumber(day_part, 1, 31);
    if (day_of_month !== null && weekday_part === '*') {
        return {
            ...custom,
            recurrence_type: 'monthly' as RecurringScheduleType,
            recurrence_day_of_month: day_of_month,
        };
    }
    return custom;
}

function isIntervalRecurringType(
    value: RecurringScheduleType | null | undefined,
) {
    return value === 'minutes' || value === 'hours';
}

function buildRecurringCron(value: {
    recurrence_type?: RecurringScheduleType | null;
    recurrence_time?: string | null;
    recurrence_interval?: number | null;
    recurrence_week_of_month?: number | null;
    recurrence_day_of_week?: number | null;
    recurrence_weekdays?: number[] | null;
    recurrence_day_of_month?: number | null;
    play_hours_start?: number | null;
    play_cron?: string | null;
}) {
    if (value.recurrence_type === 'custom') {
        return value.play_cron || DEFAULT_RECURRING_CRON;
    }
    const recurrence_time = isIntervalRecurringType(value.recurrence_type)
        ? value.recurrence_time || DEFAULT_RECURRING_TIME
        : minutesToTime(
              value.play_hours_start ?? timeToMinutes(DEFAULT_RECURRING_TIME),
          );
    const [hours, minutes] = recurrence_time.split(':').map((_) => +_ || 0);
    const minute = Math.max(0, Math.min(59, minutes));
    const hour = Math.max(0, Math.min(23, hours));
    if (value.recurrence_type === 'minutes') {
        const interval = Math.max(
            1,
            Math.min(59, value.recurrence_interval || 1),
        );
        return interval === 1 ? '* * * * *' : `*/${interval} * * * *`;
    }
    if (value.recurrence_type === 'hours') {
        const interval = Math.max(
            1,
            Math.min(23, value.recurrence_interval || 1),
        );
        return interval === 1 ? '0 * * * *' : `0 */${interval} * * *`;
    }
    if (value.recurrence_type === 'weekdays')
        return `${minute} ${hour} * * 1-5`;
    if (value.recurrence_type === 'weekly') {
        const weekdays = normaliseWeekdays(value.recurrence_weekdays);
        return `${minute} ${hour} * * ${(weekdays.length ? weekdays : [1]).join(',')}`;
    }
    if (value.recurrence_type === 'monthly') {
        const day = Math.max(
            1,
            Math.min(31, value.recurrence_day_of_month || 1),
        );
        return `${minute} ${hour} ${day} * *`;
    }
    if (value.recurrence_type === 'monthly_weekday') {
        const day = Math.max(0, Math.min(6, value.recurrence_day_of_week ?? 1));
        return `${minute} ${hour} ${dayRangeForWeekOfMonth(
            value.recurrence_week_of_month,
        )} * ${day}`;
    }
    return `${minute} ${hour} * * *`;
}

function scheduleTypeFor(playlist: SignagePlaylist): PlaylistScheduleType {
    if (playlist.play_cron?.trim()) return 'play_cron';
    if (playlist.play_at && playlist.play_at !== '0') return 'play_at';
    return 'play_hours';
}

function matchesCronPart(value: number, cron_part: string) {
    if (cron_part === '*') return true;
    if (cron_part.includes(',')) {
        return cron_part
            .split(',')
            .some((item) => matchesCronPart(value, item));
    }
    if (cron_part.includes('/')) {
        const [base, step] = cron_part.split('/');
        return !!+step && value % +step === 0 && matchesCronPart(value, base);
    }
    if (cron_part.includes('-')) {
        const [start, end] = cron_part.split('-').map(Number);
        return value >= start && value <= end;
    }
    return Number(cron_part) === value;
}

function doesCronMatchDate(cron: string, date: Date) {
    const parts = cron.trim().split(/\s+/);
    if (parts.length !== 5) return false;
    const [minute, hour, day, month, day_of_week] = parts;
    if (!matchesCronPart(date.getMinutes(), minute)) return false;
    if (!matchesCronPart(date.getHours(), hour)) return false;
    if (!matchesCronPart(date.getMonth() + 1, month)) return false;
    const day_matches = matchesCronPart(date.getDate(), day);
    const weekday_matches = matchesCronPart(date.getDay(), day_of_week);
    if (day === '*' && day_of_week === '*') return true;
    if (day !== '*' && day_of_week === '*') return day_matches;
    if (day === '*' && day_of_week !== '*') return weekday_matches;
    if (isCronMonthlyWeekday(day, day_of_week)) {
        return day_matches && weekday_matches;
    }
    return day_matches || weekday_matches;
}

function nextCronPlayTimes(cron: string) {
    const result: string[] = [];
    if (!cron?.trim()) return result;
    const date = new Date();
    date.setSeconds(0, 0);
    date.setMinutes(date.getMinutes() + 1);
    const end = new Date(date);
    end.setFullYear(end.getFullYear() + 2);
    while (date <= end && result.length < 5) {
        if (doesCronMatchDate(cron, date)) {
            result.push(
                date.toLocaleString(undefined, {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                }),
            );
        }
        date.setMinutes(date.getMinutes() + 1);
    }
    return result;
}

export interface PlaylistEditModalData {
    playlist: SignagePlaylist;
    onAdd?: (data: Partial<SignagePlaylist>) => Promise<SignagePlaylist>;
    onEdit?: (
        id: string,
        data: Partial<SignagePlaylist>,
    ) => Promise<SignagePlaylist>;
}

@Component({
    selector: 'playlist-edit-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (playlist.id
                    ? 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_EDIT'
                    : 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_NEW'
                ) | translate
            "
            (confirm)="savePlaylist()"
            [loading]="
                loading()
                    ? ('APP.CONCIERGE.SIGNAGE_PLAYLISTS_SAVING' | translate)
                    : ''
            "
        >
            <form [formGroup]="form">
                <label for="name"
                    >{{ 'FORM.NAME' | translate }}<span required>*</span></label
                >
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        name="name"
                        [placeholder]="'FORM.NAME' | translate"
                        formControlName="name"
                        aria-label="Playlist name"
                    />
                    <mat-error>{{
                        'FORM.NAME_REQUIRED' | translate
                    }}</mat-error>
                </mat-form-field>
                <div class="mb-4 flex items-center space-x-4">
                    <settings-toggle
                        class="flex-1"
                        [name]="'COMMON.ENABLED' | translate"
                        formControlName="enabled"
                    >
                    </settings-toggle>
                    <settings-toggle
                        class="flex-1"
                        [name]="
                            'APP.CONCIERGE.SIGNAGE_PLAYLISTS_SHUFFLE'
                                | translate
                        "
                        formControlName="random"
                    >
                    </settings-toggle>
                </div>
                <div class="pt-2 pb-4">
                    <div class="border-base-300 relative rounded-sm border">
                        <label
                            for="default-duration"
                            class="bg-base-100 absolute top-0 left-2 m-0 flex w-auto min-w-0 -translate-y-1/2 items-center space-x-2 px-2"
                        >
                            <div>Default Play Time</div>
                        </label>
                        <div class="flex items-center px-2 pt-2">
                            <mat-slider
                                class="flex-1"
                                min="5000"
                                max="300000"
                                step="1000"
                            >
                                <input
                                    name="default-duration"
                                    matSliderThumb
                                    formControlName="default_duration"
                                />
                            </mat-slider>
                            <div class="w-16 px-2 text-right font-mono text-xs">
                                {{
                                    form.value.default_duration / 1000
                                        | mediaDuration
                                }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="flex-1">
                        <label for="orientation">{{
                            'APP.CONCIERGE.SIGNAGE_ORIENTATION' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="orientation"
                                formControlName="orientation"
                                [placeholder]="
                                    'APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE'
                                        | translate
                                "
                                aria-label="Playlist orientation"
                            >
                                <mat-option value="unspecified">
                                    {{
                                        'APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE'
                                            | translate
                                    }}
                                </mat-option>
                                <mat-option value="landscape">{{
                                    'APP.CONCIERGE.SIGNAGE_ORIENTATION_LANDSCAPE'
                                        | translate
                                }}</mat-option>
                                <mat-option value="portrait">{{
                                    'APP.CONCIERGE.SIGNAGE_ORIENTATION_PORTRAIT'
                                        | translate
                                }}</mat-option>
                                <mat-option value="square">{{
                                    'APP.CONCIERGE.SIGNAGE_ORIENTATION_SQUARE'
                                        | translate
                                }}</mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="flex-1">
                        <label for="animation">{{
                            'APP.CONCIERGE.SIGNAGE_ANIMATION' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="animation"
                                formControlName="default_animation"
                                [placeholder]="
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_DEFAULT'
                                        | translate
                                "
                                aria-label="Default animation"
                            >
                                <mat-option [value]="0">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_DEFAULT'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="1">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_CUT'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="2">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_CROSS_FADE'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="3">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_TOP'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="4">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_LEFT'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="5">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_RIGHT'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="6">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_BOTTOM'
                                        | translate
                                }}</mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                </div>
                <label for="description">{{
                    'COMMON.DESCRIPTION' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full">
                    <textarea
                        matInput
                        name="description"
                        [placeholder]="'COMMON.DESCRIPTION' | translate"
                        formControlName="description"
                        class="min-h-32"
                        aria-label="Playlist description"
                    ></textarea>
                </mat-form-field>
                <div class="flex space-x-4">
                    <div class="flex-1">
                        <label for="valid-from">{{
                            'APP.CONCIERGE.VALID_FROM' | translate
                        }}</label>
                        <a-date-field
                            name="valid-from"
                            class="w-full"
                            formControlName="valid_from"
                        ></a-date-field>
                    </div>
                    <div class="flex-1">
                        <label for="valid-until">{{
                            'APP.CONCIERGE.VALID_UNTIL' | translate
                        }}</label>
                        <a-date-field
                            name="valid-until"
                            class="w-full"
                            [from]="form.value.valid_from"
                            formControlName="valid_until"
                        ></a-date-field>
                    </div>
                </div>
                <div class="pt-2 pb-4">
                    <div class="border-base-300 relative rounded-sm border">
                        <label
                            for="schedule-type"
                            class="bg-base-100 absolute top-0 left-2 m-0 flex w-auto min-w-0 -translate-y-1/2 items-center space-x-2 px-2"
                        >
                            <div>Schedule</div>
                        </label>
                        <div class="space-y-2 px-2 pt-4 pb-2">
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="schedule-type"
                                    formControlName="schedule_type"
                                    aria-label="Playlist schedule type"
                                >
                                    <mat-option value="play_hours"
                                        >Play during hours</mat-option
                                    >
                                    <mat-option value="play_at"
                                        >Play once</mat-option
                                    >
                                    <mat-option value="play_cron"
                                        >Recurring schedule</mat-option
                                    >
                                </mat-select>
                            </mat-form-field>
                            @if (form.value.schedule_type === 'play_hours') {
                                <div class="space-y-3">
                                    <div class="grid grid-cols-2 gap-3">
                                        <mat-form-field
                                            appearance="outline"
                                            class="no-subscript w-full"
                                        >
                                            <mat-label>Start time</mat-label>
                                            <input
                                                matInput
                                                type="time"
                                                [value]="
                                                    formatPlayHour(
                                                        form.value
                                                            .play_hours_start
                                                    )
                                                "
                                                aria-label="Play hours start time"
                                                (input)="
                                                    setPlayHour(
                                                        'play_hours_start',
                                                        $any($event.target)
                                                            .value
                                                    )
                                                "
                                            />
                                        </mat-form-field>
                                        <mat-form-field
                                            appearance="outline"
                                            class="no-subscript w-full"
                                        >
                                            <mat-label>End time</mat-label>
                                            <input
                                                matInput
                                                type="time"
                                                [value]="
                                                    formatPlayHour(
                                                        form.value
                                                            .play_hours_end
                                                    )
                                                "
                                                aria-label="Play hours end time"
                                                (input)="
                                                    setPlayHour(
                                                        'play_hours_end',
                                                        $any($event.target)
                                                            .value
                                                    )
                                                "
                                            />
                                        </mat-form-field>
                                    </div>
                                    <mat-slider
                                        class="w-[calc(100%-1rem)]"
                                        min="0"
                                        max="1439"
                                        step="1"
                                        [displayWith]="formatPlayHour"
                                    >
                                        <input
                                            name="play-hours-start"
                                            matSliderStartThumb
                                            formControlName="play_hours_start"
                                        />
                                        <input
                                            name="play-hours-end"
                                            matSliderEndThumb
                                            formControlName="play_hours_end"
                                        />
                                    </mat-slider>
                                </div>
                            } @else if (
                                form.value.schedule_type === 'play_at'
                            ) {
                                <div class="flex space-x-4">
                                    <div class="flex-1">
                                        <label for="play-at">Play At</label>
                                        <a-date-field
                                            name="play-at"
                                            class="w-full"
                                            formControlName="play_at"
                                        ></a-date-field>
                                    </div>
                                    <div class="flex-1">
                                        <label for="play-at-time">&nbsp;</label>
                                        <a-time-field
                                            name="play-at-time"
                                            class="w-full"
                                            [ngModel]="form.value.play_at"
                                            (ngModelChange)="
                                                form.patchValue({
                                                    play_at: $event,
                                                })
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        ></a-time-field>
                                    </div>
                                </div>
                                <label for="play-duration">Play Duration</label>
                                <a-duration-field
                                    name="play-duration"
                                    class="w-full"
                                    formControlName="play_duration"
                                    [max]="12 * 60"
                                ></a-duration-field>
                                <settings-toggle
                                    class="mb-2"
                                    [name]="'Takeover playback'"
                                    formControlName="play_at_takeover"
                                >
                                </settings-toggle>
                            } @else if (
                                form.value.schedule_type === 'play_cron'
                            ) {
                                <div
                                    class="bg-base-200/40 border-base-300 space-y-4 rounded-lg border p-3"
                                >
                                    <div
                                        class="flex flex-col gap-3 md:flex-row md:items-end"
                                    >
                                        <div class="min-w-48 flex-1">
                                            <label for="recurrence-type"
                                                >Repeat</label
                                            >
                                            <mat-form-field
                                                appearance="outline"
                                                class="no-subscript w-full"
                                            >
                                                <mat-select
                                                    name="recurrence-type"
                                                    formControlName="recurrence_type"
                                                    aria-label="Recurring schedule repeat pattern"
                                                >
                                                    <mat-option value="minutes"
                                                        >Every few
                                                        minutes</mat-option
                                                    >
                                                    <mat-option value="hours"
                                                        >Every few
                                                        hours</mat-option
                                                    >
                                                    <mat-option value="daily"
                                                        >Every day</mat-option
                                                    >
                                                    <mat-option value="weekdays"
                                                        >Weekdays</mat-option
                                                    >
                                                    <mat-option value="weekly"
                                                        >Weekly</mat-option
                                                    >
                                                    <mat-option value="monthly"
                                                        >Monthly</mat-option
                                                    >
                                                    <mat-option
                                                        value="monthly_weekday"
                                                        >Monthly by
                                                        weekday</mat-option
                                                    >
                                                    @if (
                                                        form.value
                                                            .recurrence_type ===
                                                        'custom'
                                                    ) {
                                                        <mat-option
                                                            value="custom"
                                                            >Custom
                                                            schedule</mat-option
                                                        >
                                                    }
                                                </mat-select>
                                            </mat-form-field>
                                        </div>
                                        @if (isIntervalRecurrence()) {
                                            <label class="m-0 min-w-40 flex-1">
                                                <div>
                                                    {{
                                                        form.value
                                                            .recurrence_type ===
                                                        'minutes'
                                                            ? 'Minutes between plays'
                                                            : 'Hours between plays'
                                                    }}
                                                </div>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    [max]="
                                                        form.value
                                                            .recurrence_type ===
                                                        'minutes'
                                                            ? 59
                                                            : 23
                                                    "
                                                    class="border-base-300 focus:border-base-content h-14 w-full rounded-sm border bg-transparent px-3 text-sm outline-hidden"
                                                    formControlName="recurrence_interval"
                                                    aria-label="Recurring schedule interval"
                                                />
                                            </label>
                                        }
                                    </div>
                                    @if (
                                        form.value.recurrence_type === 'weekly'
                                    ) {
                                        <div>
                                            <div
                                                class="mb-2 text-sm font-medium"
                                            >
                                                Play on
                                            </div>
                                            <div class="flex flex-wrap gap-2">
                                                @for (
                                                    day of weekday_options;
                                                    track day.value
                                                ) {
                                                    <button
                                                        type="button"
                                                        class="min-w-12 rounded-full border px-3 py-2 text-sm transition-colors"
                                                        [class.border-primary]="
                                                            isRecurrenceWeekdaySelected(
                                                                day.value
                                                            )
                                                        "
                                                        [class.bg-primary]="
                                                            isRecurrenceWeekdaySelected(
                                                                day.value
                                                            )
                                                        "
                                                        [class.text-primary-content]="
                                                            isRecurrenceWeekdaySelected(
                                                                day.value
                                                            )
                                                        "
                                                        [class.border-base-300]="
                                                            !isRecurrenceWeekdaySelected(
                                                                day.value
                                                            )
                                                        "
                                                        [attr.aria-pressed]="
                                                            isRecurrenceWeekdaySelected(
                                                                day.value
                                                            )
                                                        "
                                                        (click)="
                                                            toggleRecurrenceWeekday(
                                                                day.value
                                                            )
                                                        "
                                                    >
                                                        {{ day.label }}
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                    } @else if (
                                        form.value.recurrence_type === 'monthly'
                                    ) {
                                        <div>
                                            <label for="recurrence-day-of-month"
                                                >Play each month on</label
                                            >
                                            <mat-form-field
                                                appearance="outline"
                                                class="no-subscript w-full"
                                            >
                                                <mat-select
                                                    name="recurrence-day-of-month"
                                                    formControlName="recurrence_day_of_month"
                                                    aria-label="Recurring schedule day of month"
                                                >
                                                    @for (
                                                        day of month_days;
                                                        track day
                                                    ) {
                                                        <mat-option
                                                            [value]="day"
                                                            >{{
                                                                ordinal(day)
                                                            }}</mat-option
                                                        >
                                                    }
                                                </mat-select>
                                            </mat-form-field>
                                        </div>
                                    } @else if (
                                        form.value.recurrence_type ===
                                        'monthly_weekday'
                                    ) {
                                        <div>
                                            <label>Play each month on</label>
                                            <div class="grid grid-cols-2 gap-3">
                                                <mat-form-field
                                                    appearance="outline"
                                                    class="no-subscript w-full"
                                                >
                                                    <mat-select
                                                        formControlName="recurrence_week_of_month"
                                                        aria-label="Recurring schedule week of month"
                                                    >
                                                        @for (
                                                            week of week_of_month_options;
                                                            track week
                                                        ) {
                                                            <mat-option
                                                                [value]="week"
                                                                >{{
                                                                    ordinal(
                                                                        week
                                                                    )
                                                                }}</mat-option
                                                            >
                                                        }
                                                    </mat-select>
                                                </mat-form-field>
                                                <mat-form-field
                                                    appearance="outline"
                                                    class="no-subscript w-full"
                                                >
                                                    <mat-select
                                                        formControlName="recurrence_day_of_week"
                                                        aria-label="Recurring schedule day of week"
                                                    >
                                                        @for (
                                                            day of weekday_options;
                                                            track day.value
                                                        ) {
                                                            <mat-option
                                                                [value]="
                                                                    day.value
                                                                "
                                                                >{{
                                                                    day.name
                                                                }}</mat-option
                                                            >
                                                        }
                                                    </mat-select>
                                                </mat-form-field>
                                            </div>
                                        </div>
                                    } @else if (
                                        form.value.recurrence_type === 'custom'
                                    ) {
                                        <div
                                            class="border-warning/30 bg-warning/10 text-warning-content rounded-lg border p-3 text-sm"
                                        >
                                            This playlist uses an advanced
                                            schedule that cannot be edited with
                                            the simple recurrence controls.
                                            Choose one of the repeat patterns
                                            above to replace it.
                                        </div>
                                    }
                                    @if (showRecurringPlayHours()) {
                                        <div>
                                            <div
                                                class="mb-1 text-sm font-medium"
                                            >
                                                Play hours
                                            </div>
                                            <div class="space-y-3">
                                                <div
                                                    class="grid grid-cols-2 gap-3"
                                                >
                                                    <mat-form-field
                                                        appearance="outline"
                                                        class="no-subscript w-full"
                                                    >
                                                        <mat-label
                                                            >Start
                                                            time</mat-label
                                                        >
                                                        <input
                                                            matInput
                                                            type="time"
                                                            [value]="
                                                                formatPlayHour(
                                                                    form.value
                                                                        .play_hours_start
                                                                )
                                                            "
                                                            aria-label="Recurring play hours start time"
                                                            (input)="
                                                                setPlayHour(
                                                                    'play_hours_start',
                                                                    $any(
                                                                        $event.target
                                                                    ).value
                                                                )
                                                            "
                                                        />
                                                    </mat-form-field>
                                                    <mat-form-field
                                                        appearance="outline"
                                                        class="no-subscript w-full"
                                                    >
                                                        <mat-label
                                                            >End time</mat-label
                                                        >
                                                        <input
                                                            matInput
                                                            type="time"
                                                            [value]="
                                                                formatPlayHour(
                                                                    form.value
                                                                        .play_hours_end
                                                                )
                                                            "
                                                            aria-label="Recurring play hours end time"
                                                            (input)="
                                                                setPlayHour(
                                                                    'play_hours_end',
                                                                    $any(
                                                                        $event.target
                                                                    ).value
                                                                )
                                                            "
                                                        />
                                                    </mat-form-field>
                                                </div>
                                                <mat-slider
                                                    class="w-[calc(100%-1rem)]"
                                                    min="0"
                                                    max="1439"
                                                    step="1"
                                                    [displayWith]="
                                                        formatPlayHour
                                                    "
                                                >
                                                    <input
                                                        name="recurring-play-hours-start"
                                                        matSliderStartThumb
                                                        formControlName="play_hours_start"
                                                    />
                                                    <input
                                                        name="recurring-play-hours-end"
                                                        matSliderEndThumb
                                                        formControlName="play_hours_end"
                                                    />
                                                </mat-slider>
                                            </div>
                                        </div>
                                    }
                                    <div
                                        class="border-base-300 bg-base-100 rounded-lg border p-3"
                                    >
                                        <div
                                            class="text-base-content/60 text-xs font-medium tracking-wide uppercase"
                                        >
                                            Summary
                                        </div>
                                        <div class="mt-1 text-sm">
                                            {{ recurring_schedule_summary() }}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="border-base-300 relative mt-6 flex flex-col gap-2 rounded border px-2 pt-4 pb-2 text-sm"
                                >
                                    <div
                                        class="bg-base-100 absolute top-0 left-3 -translate-y-1/2 rounded px-2"
                                    >
                                        Upcoming Play Times
                                    </div>
                                    @for (
                                        play_time of next_cron_play_times();
                                        track play_time
                                    ) {
                                        <div
                                            class="border-base-200 hover:bg-base-200/50 rounded-lg border p-2 font-mono text-xs"
                                        >
                                            {{ play_time }}
                                        </div>
                                    } @empty {
                                        <div
                                            class="text-base-content/60 text-xs"
                                        >
                                            No upcoming play times found.
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FullscreenModalShellComponent,
        SettingsToggleComponent,
        ReactiveFormsModule,
        FormsModule,
        DateFieldComponent,
        TimeFieldComponent,
        DurationFieldComponent,
        TranslatePipe,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatSliderModule,
        MediaDurationPipe,
    ],
})
export class PlaylistEditModalComponent {
    private _data = inject<PlaylistEditModalData>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<PlaylistEditModalComponent>>(MatDialogRef);

    public readonly loading = signal(false);
    public readonly playlist = this._data.playlist;
    public readonly weekday_options = WEEKDAY_OPTIONS;
    public readonly week_of_month_options = WEEK_OF_MONTH_OPTIONS;
    public readonly month_days = Array.from(
        { length: 31 },
        (_, index) => index + 1,
    );
    public readonly ordinal = ordinal;

    public readonly form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl(''),
        enabled: new FormControl(true),
        random: new FormControl(false),
        default_animation: new FormControl<MediaAnimation>(
            MediaAnimation.Default,
        ),
        orientation: new FormControl('unspecified'),
        default_duration: new FormControl(15000),
        schedule_type: new FormControl<PlaylistScheduleType>('play_hours'),
        play_hours_start: new FormControl(FULL_DAY_START_MINUTES),
        play_hours_end: new FormControl(FULL_DAY_END_MINUTES),
        play_at: new FormControl(Date.now()),
        play_at_takeover: new FormControl(false),
        play_cron: new FormControl(DEFAULT_RECURRING_CRON),
        recurrence_type: new FormControl<RecurringScheduleType>('daily'),
        recurrence_time: new FormControl(DEFAULT_RECURRING_TIME),
        recurrence_interval: new FormControl(1),
        recurrence_week_of_month: new FormControl(1),
        recurrence_day_of_week: new FormControl(1),
        recurrence_weekdays: new FormControl<number[]>([1]),
        recurrence_day_of_month: new FormControl(1),
        play_duration: new FormControl(30),
        valid_from: new FormControl(0),
        valid_until: new FormControl(0),
    });
    private readonly _form_value = toSignal(
        this.form.valueChanges.pipe(startWith(this.form.getRawValue())),
        { initialValue: this.form.getRawValue() },
    );
    public readonly next_cron_play_times = computed(() => {
        const value = this._form_value();
        if (value.schedule_type !== 'play_cron') return [];
        return nextCronPlayTimes(buildRecurringCron(value));
    });
    public readonly recurring_schedule_summary = computed(() => {
        const value = this._form_value();
        if (value.recurrence_type === 'custom') {
            return 'Advanced recurring schedule. Choose a repeat pattern to edit it.';
        }
        const interval = value.recurrence_interval || 1;
        const play_hours = `${this.formatPlayHour(value.play_hours_start)} to ${this.formatPlayHour(value.play_hours_end)}`;
        if (value.recurrence_type === 'minutes') {
            return `Plays every ${interval} minute${interval === 1 ? '' : 's'}.`;
        }
        if (value.recurrence_type === 'hours') {
            return `Plays every ${interval} hour${interval === 1 ? '' : 's'}.`;
        }
        if (value.recurrence_type === 'weekdays') {
            return `Plays every weekday from ${play_hours}.`;
        }
        if (value.recurrence_type === 'weekly') {
            const days = this._weekdayNames(value.recurrence_weekdays);
            return `Plays every ${days} from ${play_hours}.`;
        }
        if (value.recurrence_type === 'monthly') {
            return `Plays on the ${ordinal(
                value.recurrence_day_of_month || 1,
            )} of each month from ${play_hours}.`;
        }
        if (value.recurrence_type === 'monthly_weekday') {
            return `Plays on the ${ordinal(
                value.recurrence_week_of_month || 1,
            )} ${this._weekdayName(
                value.recurrence_day_of_week,
            )} of each month from ${play_hours}.`;
        }
        return `Plays every day from ${play_hours}.`;
    });

    constructor() {
        const schedule_type = scheduleTypeFor(this.playlist);
        const recurring_schedule = parseRecurringCron(this.playlist.play_cron);
        const play_hours =
            schedule_type === 'play_cron'
                ? parseCronPlayHours(
                      this.playlist.play_hours,
                      recurring_schedule.recurrence_time,
                  )
                : parsePlayHours(this.playlist.play_hours);
        this.form.patchValue({
            ...this.playlist,
            schedule_type,
            play_hours_start: play_hours.start,
            play_hours_end: play_hours.end,
            play_at: this.playlist.play_at || Date.now(),
            play_cron: this.playlist.play_cron || DEFAULT_RECURRING_CRON,
            ...recurring_schedule,
            play_duration: this.playlist.play_hours?.includes('-')
                ? 30
                : parseDurationMinutes(this.playlist.play_hours) || 30,
            valid_from: this.playlist.valid_from
                ? this.playlist.valid_from * 1000
                : 0,
            valid_until: this.playlist.valid_until
                ? this.playlist.valid_until * 1000
                : 0,
        } as any);
        if (!this.form.value.orientation)
            this.form.patchValue({ orientation: 'unspecified' });
    }

    public readonly formatPlayHour = (value: number | null | undefined) =>
        minutesToTime(value || 0);

    public setPlayHour(
        control_name: 'play_hours_start' | 'play_hours_end',
        value: string,
    ) {
        this.form.patchValue({ [control_name]: timeToMinutes(value) });
    }

    public isIntervalRecurrence() {
        return isIntervalRecurringType(this.form.value.recurrence_type);
    }

    public showRecurringPlayHours() {
        return (
            this.form.value.recurrence_type !== 'custom' &&
            !this.isIntervalRecurrence()
        );
    }

    public isRecurrenceWeekdaySelected(day: number) {
        return !!this.form.value.recurrence_weekdays?.includes(day);
    }

    public toggleRecurrenceWeekday(day: number) {
        const selected_days = this.form.value.recurrence_weekdays || [];
        const next_days = selected_days.includes(day)
            ? selected_days.filter((item) => item !== day)
            : [...selected_days, day];
        this.form.patchValue({
            recurrence_weekdays: normaliseWeekdays(
                next_days.length ? next_days : [day],
            ),
        });
    }

    private _weekdayName(value: number | null | undefined) {
        return (
            WEEKDAY_OPTIONS.find((option) => option.value === value)?.name ||
            'Monday'
        );
    }

    private _weekdayNames(value: number[] | null | undefined) {
        const weekdays = normaliseWeekdays(value);
        return (weekdays.length ? weekdays : [1])
            .map((day) => this._weekdayName(day))
            .filter((_) => _)
            .join(', ');
    }

    public async savePlaylist() {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
        if (!this.form.valid) return;
        this.loading.set(true);
        this._dialog_ref.disableClose = true;
        const form_value = this.form.getRawValue();
        const data: any = { ...form_value };
        delete data.schedule_type;
        delete data.play_hours_start;
        delete data.play_hours_end;
        delete data.play_duration;
        delete data.recurrence_type;
        delete data.recurrence_time;
        delete data.recurrence_interval;
        delete data.recurrence_week_of_month;
        delete data.recurrence_day_of_week;
        delete data.recurrence_weekdays;
        delete data.recurrence_day_of_month;
        const play_hours_start =
            form_value.play_hours_start ?? FULL_DAY_START_MINUTES;
        const play_hours_end =
            form_value.play_hours_end ?? FULL_DAY_END_MINUTES;
        if (form_value.schedule_type === 'play_at') {
            data.play_hours = minutesToTime(form_value.play_duration || 30);
            data.play_cron = '';
        } else if (form_value.schedule_type === 'play_cron') {
            data.play_hours = isIntervalRecurringType(
                form_value.recurrence_type,
            )
                ? null
                : `${minutesToTime(play_hours_start)}-${minutesToTime(play_hours_end)}`;
            data.play_cron = buildRecurringCron(form_value);
            data.play_at = 0;
            data.play_at_takeover = false;
        } else {
            data.play_at = 0;
            data.play_at_takeover = false;
            data.play_cron = '';
            data.play_hours =
                play_hours_start === FULL_DAY_START_MINUTES &&
                play_hours_end === FULL_DAY_END_MINUTES
                    ? null
                    : `${minutesToTime(play_hours_start)}-${minutesToTime(play_hours_end)}`;
        }
        if (data.valid_from) {
            data.valid_from = getUnixTime(startOfDay(data.valid_from));
        } else delete data.valid_from;
        if (data.valid_until) {
            data.valid_until = getUnixTime(endOfDay(data.valid_until));
        } else delete data.valid_until;
        try {
            let result: SignagePlaylist;
            if (this.playlist.id) {
                result = this._data.onEdit
                    ? await this._data.onEdit(this.playlist.id, data)
                    : await lastValueFrom(
                          updateSignagePlaylist(this.playlist.id, data),
                      );
            } else {
                result = this._data.onAdd
                    ? await this._data.onAdd(data)
                    : await lastValueFrom(addSignagePlaylist(data));
            }
            this._dialog_ref.disableClose = false;
            this._dialog_ref.close(result);
            notifySuccess('Playlist saved');
        } catch (e) {
            this._dialog_ref.disableClose = false;
            this.loading.set(false);
            notifyError('Error saving playlist');
            throw e;
        }
    }
}
