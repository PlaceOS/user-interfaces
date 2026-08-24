import { DatePipe } from '@angular/common';
import { Component, computed, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FieldTree, FormField } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { i18n, LocaleService } from '@placeos/common';
import {
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    CounterComponent,
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';
import {
    SignagePlaylist,
    type SignagePlaylistSchedule,
} from '@placeos/ts-client';
import { endOfDay, fromUnixTime, getUnixTime } from 'date-fns';
import {
    playlistScheduleExpiryLabel,
    playlistScheduleExpiryTooltip,
} from '../signage-playlist.util';

export type PlaylistScheduleType = 'play_at' | 'play_cron';
type RecurringScheduleType =
    | 'minutes'
    | 'hours'
    | 'daily'
    | 'weekdays'
    | 'weekly'
    | 'monthly'
    | 'monthly_weekday'
    | 'custom';

export interface PlaylistScheduleFormModel {
    schedule_type: PlaylistScheduleType;
    play_start: number;
    play_at: number;
    play_takeover: boolean;
    play_cron: string;
    recurrence_type: RecurringScheduleType;
    recurrence_time: string;
    recurrence_interval: number;
    recurrence_week_of_month: number[];
    recurrence_day_of_week: number;
    recurrence_weekdays: number[];
    recurrence_day_of_month: number[];
    play_period: number;
    has_valid_until: boolean;
    valid_until: number;
}

const FULL_DAY_START_MINUTES = 0;
const FULL_DAY_END_MINUTES = 23 * 60 + 59;
const DEFAULT_RECURRING_TIME = '00:00';
const DEFAULT_RECURRING_CRON = '0 0 * * *';
const DEFAULT_PLAY_PERIOD_MINUTES = 24 * 60;
const WEEKDAY_OPTIONS = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 0 },
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

function normaliseMonthDays(value: number[] | null | undefined) {
    const seen_days = new Set<number>();
    for (const day of value || []) {
        if (day >= 1 && day <= 31) seen_days.add(day);
    }
    return Array.from({ length: 31 }, (_, index) => index + 1).filter((day) =>
        seen_days.has(day),
    );
}

function normaliseWeeksOfMonth(value: number[] | null | undefined) {
    const seen_weeks = new Set<number>();
    for (const week of value || []) {
        if (week >= 1 && week <= 5) seen_weeks.add(week);
    }
    return WEEK_OF_MONTH_OPTIONS.filter((week) => seen_weeks.has(week));
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

function parseCronWeekOfMonthRange(value: string) {
    const match = /^(\d+)-(\d+)$/.exec(value || '');
    if (!match) return null;
    const start = +match[1];
    const end = +match[2];
    if (start === 29 && end === 31) return 5;
    if ((start - 1) % 7 !== 0 || end !== start + 6) return null;
    const week = (start - 1) / 7 + 1;
    return week >= 1 && week <= 4 ? week : null;
}

function parseCronWeeksOfMonth(value: string) {
    if (!value?.trim() || value === '*') return null;
    const weeks = new Set<number>();
    for (const part of value.split(',')) {
        const week = parseCronWeekOfMonthRange(part);
        if (week === null) return null;
        weeks.add(week);
    }
    return normaliseWeeksOfMonth([...weeks]);
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

function parseCronMonthDays(value: string) {
    if (!value?.trim() || value === '*') return null;
    const days = new Set<number>();
    for (const part of value.split(',')) {
        const day = parseCronNumber(part, 1, 31);
        if (day === null) return null;
        days.add(day);
    }
    return normaliseMonthDays([...days]);
}

function isCronMonthlyWeekday(day_part: string, weekday_part: string) {
    return (
        !!parseCronWeeksOfMonth(day_part)?.length &&
        !!parseCronWeekdays(weekday_part)?.length
    );
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
        recurrence_week_of_month: [1],
        recurrence_day_of_week: 1,
        recurrence_weekdays: [1],
        recurrence_day_of_month: [1],
    };
    if (day_part === '*' && month_part === '*' && weekday_part === '*') {
        const minute_step =
            minute_part === '*' ? 1 : parseCronStep(minute_part, 1, 59);
        if (minute_step !== null && hour_part === '*') return custom;
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
        const month_weekdays = parseCronWeekdays(weekday_part) || [1];
        return {
            ...custom,
            recurrence_type: 'monthly_weekday' as RecurringScheduleType,
            recurrence_week_of_month: parseCronWeeksOfMonth(day_part) || [1],
            recurrence_day_of_week: month_weekdays[0],
            recurrence_weekdays: month_weekdays,
        };
    }
    if (day_part === '*' && weekdays?.length) {
        return {
            ...custom,
            recurrence_type: 'weekly' as RecurringScheduleType,
            recurrence_weekdays: weekdays,
        };
    }
    const days_of_month = parseCronMonthDays(day_part);
    if (days_of_month?.length && weekday_part === '*') {
        return {
            ...custom,
            recurrence_type: 'monthly' as RecurringScheduleType,
            recurrence_day_of_month: days_of_month,
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
    recurrence_week_of_month?: number[] | null;
    recurrence_day_of_week?: number | null;
    recurrence_weekdays?: number[] | null;
    recurrence_day_of_month?: number[] | null;
    play_start?: number | null;
    play_cron?: string | null;
}) {
    if (value.recurrence_type === 'custom') {
        return value.play_cron || DEFAULT_RECURRING_CRON;
    }
    const recurrence_time = isIntervalRecurringType(value.recurrence_type)
        ? value.recurrence_time || DEFAULT_RECURRING_TIME
        : minutesToTime(
              value.play_start ?? timeToMinutes(DEFAULT_RECURRING_TIME),
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
        const days = normaliseMonthDays(value.recurrence_day_of_month);
        return `${minute} ${hour} ${(days.length ? days : [1]).join(',')} * *`;
    }
    if (value.recurrence_type === 'monthly_weekday') {
        const weekdays = normaliseWeekdays(value.recurrence_weekdays);
        const weeks = normaliseWeeksOfMonth(value.recurrence_week_of_month);
        const day_ranges = (weeks.length ? weeks : [1])
            .map((week) => dayRangeForWeekOfMonth(week))
            .join(',');
        return `${minute} ${hour} ${day_ranges} * ${(weekdays.length ? weekdays : [1]).join(',')}`;
    }
    return `${minute} ${hour} * * *`;
}

function playlistPlayPeriod(schedule: Partial<SignagePlaylistSchedule>) {
    return Number.isFinite(schedule.play_period)
        ? Math.max(0, schedule.play_period)
        : DEFAULT_PLAY_PERIOD_MINUTES;
}

function scheduleTypeFor(
    schedule: Partial<SignagePlaylistSchedule>,
): PlaylistScheduleType {
    return schedule.play_at ? 'play_at' : 'play_cron';
}

function currentPlaylistSchedule(playlist: SignagePlaylist) {
    const legacy_playlist = playlist as SignagePlaylist & {
        play_at?: number;
        play_cron?: string;
        play_period?: number;
        play_takeover?: boolean;
    };
    return (
        playlist.schedules?.[0] || {
            play_at: legacy_playlist.play_at,
            play_cron: legacy_playlist.play_cron,
            play_period: legacy_playlist.play_period,
            play_takeover: legacy_playlist.play_takeover,
        }
    );
}

export function playlistSchedules(playlist: SignagePlaylist) {
    const schedule = currentPlaylistSchedule(playlist);
    return playlist.schedules?.length ? playlist.schedules : [schedule];
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

function formatPlayDateTime(date: Date) {
    return date.toLocaleString(undefined, {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
    });
}

function formatPlayTime(date: Date) {
    return date.toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: '2-digit',
    });
}

function formatPlayDateTimeRange(start: Date, duration_minutes: number) {
    const end = new Date(start);
    end.setMinutes(end.getMinutes() + Math.max(0, duration_minutes || 0));
    if (duration_minutes > 0) end.setSeconds(end.getSeconds() - 1);
    const end_text =
        start.toDateString() === end.toDateString()
            ? formatPlayTime(end)
            : formatPlayDateTime(end);
    return `${formatPlayDateTime(start)} – ${end_text}`;
}

function formatMinutes(value: number | null | undefined) {
    const total_minutes = Math.max(0, Math.round(value || 0));
    if (!total_minutes) return '';
    const days = Math.floor(total_minutes / (24 * 60));
    const hours = Math.floor((total_minutes % (24 * 60)) / 60);
    const minutes = total_minutes % 60;
    const parts = [
        {
            value: days,
            key: 'SIGNAGE_MANAGER.DURATION_DAY',
        },
        {
            value: hours,
            key: 'SIGNAGE_MANAGER.DURATION_HOUR',
        },
        {
            value: minutes,
            key: 'SIGNAGE_MANAGER.DURATION_MINUTE',
        },
    ];
    return parts
        .filter((part) => part.value)
        .map((part) => i18n(part.key, { count: part.value }, part.value))
        .join(' ');
}

function nextCronPlayTimes(
    cron: string,
    duration_minutes: number,
    valid_until = 0,
) {
    const result: string[] = [];
    if (!cron?.trim()) return result;
    const date = new Date();
    date.setSeconds(0, 0);
    date.setMinutes(date.getMinutes() + 1);
    const end = new Date(date);
    end.setFullYear(end.getFullYear() + 2);
    const expiry = valid_until ? new Date(valid_until) : end;
    while (date <= end && date <= expiry && result.length < 5) {
        if (doesCronMatchDate(cron, date)) {
            result.push(formatPlayDateTimeRange(date, duration_minutes));
        }
        date.setMinutes(date.getMinutes() + 1);
    }
    return result;
}

export function createPlaylistScheduleModel(
    schedule?: Partial<SignagePlaylistSchedule>,
): PlaylistScheduleFormModel {
    const source = schedule || {};
    const recurring_schedule = parseRecurringCron(source.play_cron);
    return {
        schedule_type: scheduleTypeFor(source),
        play_start: timeToMinutes(recurring_schedule.recurrence_time),
        // The API carries a unix timestamp in seconds; the form model works in
        // milliseconds, as playlistSchedulePayload's getUnixTime assumes.
        play_at: source.play_at
            ? fromUnixTime(source.play_at).getTime()
            : Date.now(),
        play_takeover: !!source.play_takeover,
        play_cron: source.play_cron || DEFAULT_RECURRING_CRON,
        recurrence_type: recurring_schedule.recurrence_type,
        recurrence_time: recurring_schedule.recurrence_time,
        recurrence_interval: recurring_schedule.recurrence_interval,
        recurrence_week_of_month: recurring_schedule.recurrence_week_of_month,
        recurrence_day_of_week: recurring_schedule.recurrence_day_of_week,
        recurrence_weekdays: recurring_schedule.recurrence_weekdays,
        recurrence_day_of_month: recurring_schedule.recurrence_day_of_month,
        play_period: playlistPlayPeriod(source),
        has_valid_until: !!source.valid_until,
        valid_until: source.valid_until
            ? fromUnixTime(source.valid_until).getTime()
            : endOfDay(Date.now()).getTime(),
    };
}

export function playlistSchedulePayload(
    value: PlaylistScheduleFormModel,
): SignagePlaylistSchedule {
    return value.schedule_type === 'play_at'
        ? {
              play_at: value.play_at ? getUnixTime(new Date(value.play_at)) : 0,
              play_cron: DEFAULT_RECURRING_CRON,
              play_period: Math.max(0, value.play_period || 0),
              play_takeover: !!value.play_takeover,
              valid_until: value.has_valid_until
                  ? getUnixTime(new Date(value.valid_until))
                  : 0,
          }
        : {
              play_at: 0,
              play_cron: buildRecurringCron(value),
              play_period: Math.max(0, value.play_period || 0),
              play_takeover: !!value.play_takeover,
              valid_until: value.has_valid_until
                  ? getUnixTime(new Date(value.valid_until))
                  : 0,
          };
}

@Component({
    selector: 'playlist-schedule-form',
    template: `
        <div
            class="border-base-300 overflow-hidden rounded-sm border"
            [class.border-primary]="open()"
        >
            <div
                class="hover:bg-base-200/60 flex items-center gap-3 px-3 py-1.5 transition-colors"
            >
                <button
                    type="button"
                    class="flex min-w-0 flex-1 items-center gap-3 text-left"
                    [attr.aria-expanded]="open()"
                    (click)="toggle.emit()"
                >
                    <div class="min-w-24 text-sm font-medium">
                        {{
                            'SIGNAGE_MANAGER.SCHEDULE_NUMBER'
                                | translate: { number: index() + 1 }
                        }}
                    </div>
                    <div
                        class="text-base-content min-w-0 flex-1 truncate text-xs"
                        [matTooltip]="scheduleExpiryTooltip()"
                        [matTooltipDisabled]="!value().has_valid_until"
                    >
                        {{ scheduleSummary() }}
                    </div>
                </button>
                <button
                    icon
                    default
                    error
                    type="button"
                    class="border-base-300 hover:bg-base-200 rounded border px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
                    [disabled]="!can_remove()"
                    (click)="removeSchedule($event)"
                >
                    <icon>delete</icon>
                </button>
                <button
                    type="button"
                    class="flex items-center"
                    [attr.aria-expanded]="open()"
                    (click)="toggle.emit()"
                >
                    <icon class="text-base-content/60 text-xl">
                        {{ open() ? 'expand_less' : 'expand_more' }}
                    </icon>
                </button>
            </div>
            @if (open()) {
                <div class="border-base-300 space-y-2 border-t px-2 pt-4 pb-2">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-full"
                    >
                        <mat-select
                            [formField]="schedule().schedule_type"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.SCHEDULE_TYPE_ARIA' | translate
                            "
                        >
                            <mat-option value="play_at">{{
                                'SIGNAGE_MANAGER.PLAY_ONCE' | translate
                            }}</mat-option>
                            <mat-option value="play_cron">{{
                                'SIGNAGE_MANAGER.RECURRING_SCHEDULE' | translate
                            }}</mat-option>
                        </mat-select>
                    </mat-form-field>
                    @if (value().schedule_type === 'play_at') {
                        <div class="flex space-x-4">
                            <div class="flex-1">
                                <label>{{
                                    'SIGNAGE_MANAGER.PLAY_AT' | translate
                                }}</label>
                                <a-date-field
                                    class="w-full"
                                    [formField]="schedule().play_at"
                                ></a-date-field>
                            </div>
                            <div class="flex-1">
                                <label>&nbsp;</label>
                                <a-time-field
                                    class="w-full"
                                    [ngModel]="value().play_at"
                                    (ngModelChange)="
                                        schedule().play_at().value.set($event)
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                ></a-time-field>
                            </div>
                        </div>
                        <label>{{
                            'SIGNAGE_MANAGER.PLAY_PERIOD' | translate
                        }}</label>
                        <a-duration-field
                            class="w-full"
                            [formField]="schedule().play_period"
                            [min]="15"
                            [max]="24 * 60"
                            [time]="value().play_at"
                            [custom_options]="[value().play_period]"
                        ></a-duration-field>
                        <settings-toggle
                            [label]="
                                'SIGNAGE_MANAGER.TAKEOVER_PLAYBACK' | translate
                            "
                            [formField]="schedule().play_takeover"
                        />
                    } @else if (value().schedule_type === 'play_cron') {
                        <div
                            class="bg-base-200/40 border-base-300 space-y-4 rounded-lg border p-3"
                        >
                            <div
                                class="flex flex-col gap-3 md:flex-row md:items-end"
                            >
                                <div class="min-w-48 flex-1">
                                    <label>{{
                                        'SIGNAGE_MANAGER.REPEAT' | translate
                                    }}</label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="no-subscript w-full"
                                    >
                                        <mat-select
                                            [formField]="
                                                schedule().recurrence_type
                                            "
                                            [attr.aria-label]="
                                                'SIGNAGE_MANAGER.REPEAT_PATTERN_ARIA'
                                                    | translate
                                            "
                                        >
                                            <mat-option value="hours">{{
                                                'SIGNAGE_MANAGER.EVERY_FEW_HOURS'
                                                    | translate
                                            }}</mat-option>
                                            <mat-option value="daily">{{
                                                'SIGNAGE_MANAGER.EVERY_DAY'
                                                    | translate
                                            }}</mat-option>
                                            <mat-option value="weekdays">{{
                                                'SIGNAGE_MANAGER.WEEKDAYS'
                                                    | translate
                                            }}</mat-option>
                                            <mat-option value="weekly">{{
                                                'SIGNAGE_MANAGER.WEEKLY'
                                                    | translate
                                            }}</mat-option>
                                            <mat-option value="monthly">{{
                                                'SIGNAGE_MANAGER.MONTHLY'
                                                    | translate
                                            }}</mat-option>
                                            <mat-option
                                                value="monthly_weekday"
                                                >{{
                                                    'SIGNAGE_MANAGER.MONTHLY_BY_WEEKDAY'
                                                        | translate
                                                }}</mat-option
                                            >
                                            @if (
                                                value().recurrence_type ===
                                                'custom'
                                            ) {
                                                <mat-option value="custom">{{
                                                    'SIGNAGE_MANAGER.CUSTOM_SCHEDULE'
                                                        | translate
                                                }}</mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                                @if (isIntervalRecurrence()) {
                                    <label class="m-0 min-w-40 flex-1">
                                        <div>
                                            {{
                                                (value().recurrence_type ===
                                                'minutes'
                                                    ? 'SIGNAGE_MANAGER.MINUTES_BETWEEN_PLAYS'
                                                    : 'SIGNAGE_MANAGER.HOURS_BETWEEN_PLAYS'
                                                ) | translate
                                            }}
                                        </div>
                                        <a-counter
                                            [min]="1"
                                            [max]="
                                                value().recurrence_type ===
                                                'minutes'
                                                    ? 59
                                                    : 23
                                            "
                                            [formField]="
                                                schedule().recurrence_interval
                                            "
                                            [attr.aria-label]="
                                                'SIGNAGE_MANAGER.SCHEDULE_INTERVAL_ARIA'
                                                    | translate
                                            "
                                        />
                                    </label>
                                }
                            </div>
                            @if (value().recurrence_type === 'weekly') {
                                <div>
                                    <div class="mb-2 text-sm font-medium">
                                        {{
                                            'SIGNAGE_MANAGER.PLAY_ON'
                                                | translate
                                        }}
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
                                                {{
                                                    weekdayLabel(
                                                        day.value,
                                                        'EEE'
                                                    )
                                                }}
                                            </button>
                                        }
                                    </div>
                                </div>
                            } @else if (value().recurrence_type === 'monthly') {
                                <div>
                                    <label>{{
                                        'SIGNAGE_MANAGER.PLAY_EACH_MONTH_ON'
                                            | translate
                                    }}</label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="no-subscript w-full"
                                    >
                                        <mat-select
                                            [formField]="
                                                schedule()
                                                    .recurrence_day_of_month
                                            "
                                            [attr.aria-label]="
                                                'SIGNAGE_MANAGER.DAYS_OF_MONTH_ARIA'
                                                    | translate
                                            "
                                            multiple
                                        >
                                            @for (
                                                day of month_days;
                                                track day
                                            ) {
                                                <mat-option [value]="day">{{
                                                    ordinal(day)
                                                }}</mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            } @else if (
                                value().recurrence_type === 'monthly_weekday'
                            ) {
                                <div>
                                    <label>{{
                                        'SIGNAGE_MANAGER.PLAY_EACH_MONTH_ON'
                                            | translate
                                    }}</label>
                                    <div class="grid grid-cols-2 gap-3">
                                        <mat-form-field
                                            appearance="outline"
                                            class="no-subscript w-full"
                                        >
                                            <mat-select
                                                [formField]="
                                                    schedule()
                                                        .recurrence_week_of_month
                                                "
                                                [attr.aria-label]="
                                                    'SIGNAGE_MANAGER.WEEK_OF_MONTH_ARIA'
                                                        | translate
                                                "
                                                multiple
                                            >
                                                @for (
                                                    week of week_of_month_options;
                                                    track week
                                                ) {
                                                    <mat-option
                                                        [value]="week"
                                                        >{{
                                                            ordinal(week)
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
                                                [formField]="
                                                    schedule()
                                                        .recurrence_weekdays
                                                "
                                                [attr.aria-label]="
                                                    'SIGNAGE_MANAGER.DAYS_OF_WEEK_ARIA'
                                                        | translate
                                                "
                                                multiple
                                            >
                                                @for (
                                                    day of weekday_options;
                                                    track day.value
                                                ) {
                                                    <mat-option
                                                        [value]="day.value"
                                                        >{{
                                                            weekdayLabel(
                                                                day.value,
                                                                'EEEE'
                                                            )
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                            } @else if (value().recurrence_type === 'custom') {
                                <div
                                    class="border-warning/30 bg-warning/10 text-warning-content rounded-lg border p-3 text-sm"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.ADVANCED_SCHEDULE_WARNING'
                                            | translate
                                    }}
                                </div>
                            }
                            <div class="flex flex-col gap-3 md:flex-row">
                                @if (showRecurringStartTime()) {
                                    <div class="flex w-full flex-1 flex-col">
                                        <label>{{
                                            'SIGNAGE_MANAGER.START' | translate
                                        }}</label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="no-subscript"
                                        >
                                            <input
                                                matInput
                                                type="time"
                                                [value]="
                                                    formatPlayHour(
                                                        value().play_start
                                                    )
                                                "
                                                [attr.aria-label]="
                                                    'SIGNAGE_MANAGER.PLAY_PERIOD_START_ARIA'
                                                        | translate
                                                "
                                                (input)="
                                                    setPlayStart(
                                                        $any($event.target)
                                                            .value
                                                    )
                                                "
                                            />
                                        </mat-form-field>
                                    </div>
                                }
                                <div class="w-full flex-1">
                                    <label>{{
                                        'SIGNAGE_MANAGER.PLAY_PERIOD'
                                            | translate
                                    }}</label>
                                    <a-duration-field
                                        class="no-subscript w-full flex-1"
                                        [formField]="schedule().play_period"
                                        [min]="15"
                                        [max]="24 * 60"
                                        [time]="recurringPlayStartTime()"
                                        [custom_options]="[value().play_period]"
                                    ></a-duration-field>
                                </div>
                            </div>
                            <settings-toggle
                                [label]="
                                    'SIGNAGE_MANAGER.TAKEOVER_PLAYBACK'
                                        | translate
                                "
                                [formField]="schedule().play_takeover"
                            />
                        </div>
                        <div
                            class="border-base-300 relative mt-6 flex flex-col gap-2 rounded border px-2 pt-4 pb-2 text-sm"
                        >
                            <div
                                class="bg-base-100 absolute top-0 left-3 -translate-y-1/2 rounded px-2"
                            >
                                {{
                                    'SIGNAGE_MANAGER.UPCOMING_PLAY_TIMES'
                                        | translate
                                }}
                            </div>
                            @for (
                                play_time of nextCronPlayTimes();
                                track play_time
                            ) {
                                <div
                                    class="border-base-200 hover:bg-base-200/50 rounded-lg border p-2 font-mono text-xs"
                                >
                                    {{ play_time }}
                                </div>
                            } @empty {
                                <div class="text-base-content/60 text-xs">
                                    {{
                                        'SIGNAGE_MANAGER.NO_UPCOMING_PLAY_TIMES'
                                            | translate
                                    }}
                                </div>
                            }
                        </div>
                    }
                    <div
                        class="bg-base-200/40 border-base-300 mt-4 rounded-lg border p-3"
                    >
                        <settings-toggle
                            [label]="'FORM.EXPIRES_AT' | translate"
                            [formField]="schedule().has_valid_until"
                        />
                        @if (value().has_valid_until) {
                            <div class="mt-3 flex space-x-4">
                                <a-date-field
                                    class="w-full flex-1"
                                    [formField]="schedule().valid_until"
                                ></a-date-field>
                                <a-time-field
                                    class="w-full flex-1"
                                    [ngModel]="value().valid_until"
                                    (ngModelChange)="
                                        schedule()
                                            .valid_until()
                                            .value.set($event)
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                ></a-time-field>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    `,
    styles: [``],
    imports: [
        FormField,
        FormsModule,
        DateFieldComponent,
        TimeFieldComponent,
        DurationFieldComponent,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        IconComponent,
        CounterComponent,
        SettingsToggleComponent,
        TranslatePipe,
    ],
})
export class PlaylistScheduleFormComponent {
    private readonly _locale = inject(LocaleService);
    private readonly _date_pipe = new DatePipe(this._locale.locale);

    public readonly schedule =
        input.required<FieldTree<PlaylistScheduleFormModel, number>>();
    public readonly index = input.required<number>();
    public readonly open = input(false);
    public readonly can_remove = input(false);
    public readonly toggle = output<void>();
    public readonly remove = output<Event>();

    public readonly weekday_options = WEEKDAY_OPTIONS;
    public readonly week_of_month_options = WEEK_OF_MONTH_OPTIONS;
    public readonly month_days = Array.from(
        { length: 31 },
        (_, index) => index + 1,
    );
    public readonly ordinal = ordinal;
    public readonly value = computed(() => this.schedule()().value());
    public readonly formatPlayHour = (value: number | null | undefined) =>
        minutesToTime(value || 0);

    public removeSchedule(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        this.remove.emit(event);
    }

    public nextCronPlayTimes() {
        const value = this.value();
        if (value.schedule_type !== 'play_cron') return [];
        return nextCronPlayTimes(
            buildRecurringCron(value),
            value.play_period ?? DEFAULT_PLAY_PERIOD_MINUTES,
            value.has_valid_until ? value.valid_until : 0,
        );
    }

    public recurringScheduleSummary() {
        const value = this.value();
        if (value.recurrence_type === 'custom') {
            return i18n('SIGNAGE_MANAGER.SUMMARY_ADVANCED');
        }
        const interval = value.recurrence_interval || 1;
        const start_time = this.formatPlayHour(value.play_start);
        const period = value.play_period ?? DEFAULT_PLAY_PERIOD_MINUTES;
        const duration =
            formatMinutes(period) || i18n('SIGNAGE_MANAGER.ONE_PLAYLIST_PASS');
        if (value.recurrence_type === 'minutes') {
            return i18n(
                'SIGNAGE_MANAGER.SUMMARY_EVERY_MINUTE',
                { interval },
                interval,
            );
        }
        if (value.recurrence_type === 'hours') {
            return i18n(
                'SIGNAGE_MANAGER.SUMMARY_EVERY_HOUR',
                { interval },
                interval,
            );
        }
        if (value.recurrence_type === 'weekdays') {
            return i18n('SIGNAGE_MANAGER.SUMMARY_WEEKDAYS', {
                time: start_time,
                duration,
            });
        }
        if (value.recurrence_type === 'weekly') {
            const days = this._weekdayNames(value.recurrence_weekdays);
            return i18n('SIGNAGE_MANAGER.SUMMARY_WEEKLY', {
                days,
                time: start_time,
                duration,
            });
        }
        if (value.recurrence_type === 'monthly') {
            const days = normaliseMonthDays(value.recurrence_day_of_month);
            return i18n('SIGNAGE_MANAGER.SUMMARY_MONTHLY', {
                days: (days.length ? days : [1])
                    .map((day) => ordinal(day))
                    .join(', '),
                time: start_time,
                duration,
            });
        }
        if (value.recurrence_type === 'monthly_weekday') {
            const weeks = normaliseWeeksOfMonth(value.recurrence_week_of_month);
            return i18n('SIGNAGE_MANAGER.SUMMARY_MONTHLY_WEEKDAY', {
                weeks: (weeks.length ? weeks : [1])
                    .map((week) => ordinal(week))
                    .join(', '),
                days: this._weekdayNames(value.recurrence_weekdays),
                time: start_time,
                duration,
            });
        }
        return i18n('SIGNAGE_MANAGER.SUMMARY_DAILY', {
            time: start_time,
            duration,
        });
    }

    public scheduleSummary() {
        const value = this.value();
        const period = value.play_period ?? DEFAULT_PLAY_PERIOD_MINUTES;
        const duration =
            formatMinutes(period) || i18n('SIGNAGE_MANAGER.ONE_PLAYLIST_PASS');
        const takeover = value.play_takeover
            ? i18n('SIGNAGE_MANAGER.TAKEOVER_SUFFIX')
            : '';
        const expiry = playlistScheduleExpiryLabel(
            playlistSchedulePayload(value),
        );
        const expiry_suffix = expiry ? ` · ${expiry}` : '';
        if (value.schedule_type === 'play_at') {
            const date = new Date(value.play_at || Date.now());
            return `${i18n('SIGNAGE_MANAGER.SUMMARY_PLAY_ONCE', {
                datetime: formatPlayDateTime(date),
                duration,
            })}${takeover}${expiry_suffix}`;
        }
        return `${this.recurringScheduleSummary()}${takeover}${expiry_suffix}`;
    }

    public scheduleExpiryTooltip() {
        return playlistScheduleExpiryTooltip(
            playlistSchedulePayload(this.value()),
        );
    }

    public recurringPlayStartTime() {
        if (!this.showRecurringStartTime()) return undefined;
        const value = this.value();
        const start_time = new Date();
        start_time.setSeconds(0, 0);
        start_time.setHours(0, value.play_start || 0, 0, 0);
        return start_time.valueOf();
    }

    public setPlayStart(value: string) {
        this.schedule().play_start().value.set(timeToMinutes(value));
    }

    public isIntervalRecurrence() {
        return isIntervalRecurringType(this.value().recurrence_type);
    }

    public showRecurringStartTime() {
        return (
            this.value().recurrence_type !== 'custom' &&
            !this.isIntervalRecurrence()
        );
    }

    public isRecurrenceWeekdaySelected(day: number) {
        return !!this.value().recurrence_weekdays?.includes(day);
    }

    public toggleRecurrenceWeekday(day: number) {
        const selected_days = this.value().recurrence_weekdays || [];
        const next_days = selected_days.includes(day)
            ? selected_days.filter((item) => item !== day)
            : [...selected_days, day];
        this.schedule()
            .recurrence_weekdays()
            .value.set(normaliseWeekdays(next_days.length ? next_days : [day]));
    }

    public weekdayLabel(
        value: number | null | undefined,
        format: 'EEE' | 'EEEE',
    ) {
        const day = typeof value === 'number' ? value : 1;
        const monday_based_offset = day === 0 ? 6 : day - 1;
        const date = new Date(2024, 0, 1 + monday_based_offset);
        return this._date_pipe.transform(date, format) || '';
    }

    private _weekdayNames(value: number[] | null | undefined) {
        const weekdays = normaliseWeekdays(value);
        return (weekdays.length ? weekdays : [1])
            .map((day) => this.weekdayLabel(day, 'EEEE'))
            .filter((_) => _)
            .join(', ');
    }
}
