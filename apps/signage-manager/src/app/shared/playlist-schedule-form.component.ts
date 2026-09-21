import { DatePipe, NgTemplateOutlet } from '@angular/common';
import {
    afterNextRender,
    Component,
    computed,
    inject,
    Injector,
    input,
    output,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FieldTree, FormField, schema, validate } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    formatTimeInTimezone,
    getTimeInTimezone,
    getTimezoneOffsetString,
    i18n,
    LOCAL_TIMEZONE,
    LocaleService,
    setTimeInTimezone,
    settingSignal,
    TIMEZONES_IANA,
} from '@placeos/common';
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
import { SignagePlaylist } from '@placeos/ts-client';
import { endOfDay, fromUnixTime, getUnixTime, startOfDay } from 'date-fns';
import { fromZonedTime, toZonedTime } from 'date-fns-tz';
import {
    createScheduleMaskFilter,
    hasPlayableScheduleMask,
    isValidScheduleMask,
    type PlaylistSchedule,
    playlistScheduleExpiryLabel,
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
    has_mask: boolean;
    mask: string;
    has_valid_from: boolean;
    valid_from: number;
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

function playlistPlayPeriod(schedule: Partial<PlaylistSchedule>) {
    return Number.isFinite(schedule.play_period)
        ? Math.max(0, schedule.play_period)
        : DEFAULT_PLAY_PERIOD_MINUTES;
}

function scheduleTypeFor(
    schedule: Partial<PlaylistSchedule>,
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

function formatPlayDateTime(date: Date, timeZone = LOCAL_TIMEZONE) {
    return date.toLocaleString(undefined, {
        timeZone,
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
    });
}

function formatPlayTime(date: Date, timeZone = LOCAL_TIMEZONE) {
    return date.toLocaleTimeString(undefined, {
        timeZone,
        hour: 'numeric',
        minute: '2-digit',
    });
}

function formatPlayDateTimeRange(
    start: Date,
    duration_minutes: number,
    timezone = LOCAL_TIMEZONE,
) {
    const end = new Date(
        start.getTime() +
            Math.max(0, duration_minutes || 0) * 60_000 -
            (duration_minutes > 0 ? 1000 : 0),
    );
    const end_text =
        toZonedTime(start, timezone).toDateString() ===
        toZonedTime(end, timezone).toDateString()
            ? formatPlayTime(end, timezone)
            : formatPlayDateTime(end, timezone);
    return `${formatPlayDateTime(start, timezone)} – ${end_text}`;
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
    timezone = LOCAL_TIMEZONE,
    valid_from = 0,
    mask = '',
) {
    const allows = createScheduleMaskFilter(
        { play_cron: cron, valid_from: valid_from / 1000, mask },
        timezone,
    );
    const result: string[] = [];
    if (
        !cron?.trim() ||
        !hasPlayableScheduleMask({
            mask,
            valid_from: valid_from / 1000,
        })
    )
        return result;
    const now = Date.now();
    // Start the search at the validity window when it opens in the future.
    const date = toZonedTime(Math.max(now, valid_from), timezone);
    date.setSeconds(0, 0);
    if (valid_from <= now) date.setMinutes(date.getMinutes() + 1);
    const end = new Date(date);
    end.setFullYear(end.getFullYear() + 2);
    const expiry = valid_until ? toZonedTime(valid_until, timezone) : end;
    while (date <= end && date <= expiry && result.length < 5) {
        if (doesCronMatchDate(cron, date)) {
            const instant = fromZonedTime(date, timezone);
            // Skip wall-clock times that do not exist during a daylight saving change.
            if (
                instant.getTime() > now &&
                instant.getTime() >= valid_from &&
                (!valid_until || instant.getTime() <= valid_until) &&
                toZonedTime(instant, timezone).getTime() === date.getTime() &&
                allows(instant)
            ) {
                result.push(
                    formatPlayDateTimeRange(
                        instant,
                        duration_minutes,
                        timezone,
                    ),
                );
            }
        }
        date.setMinutes(date.getMinutes() + 1);
    }
    return result;
}

/** Find the first mask cycle, including occurrences selected to skip. */
function maskOccurrenceDates(
    value: PlaylistScheduleFormModel,
    timezone: string,
) {
    const result: Date[] = [];
    const start = value.valid_from;
    if (
        !value.has_valid_from ||
        !start ||
        !Number.isFinite(new Date(start).getTime())
    )
        return result;
    const expiry = value.has_valid_until ? value.valid_until : Infinity;
    if (expiry < start) return result;
    if (value.schedule_type === 'play_at') {
        return value.play_at >= start && value.play_at <= expiry
            ? [new Date(value.play_at)]
            : result;
    }
    const cron = buildRecurringCron(value);
    const parts = cron.trim().split(/\s+/);
    if (parts.length !== 5) return result;
    const slots: number[] = [];
    for (let hour = 0; hour < 24; hour++) {
        if (!matchesCronPart(hour, parts[1])) continue;
        for (let minute = 0; minute < 60; minute++) {
            if (matchesCronPart(minute, parts[0]))
                slots.push(hour * 60 + minute);
        }
    }
    if (!slots.length) return result;
    const day = toZonedTime(start, timezone);
    day.setHours(0, 0, 0, 0);
    // A Gregorian calendar cycle bounds the search for invalid or rare cron dates.
    const end = new Date(day);
    end.setFullYear(end.getFullYear() + 400);
    const last_day = Number.isFinite(expiry)
        ? toZonedTime(expiry, timezone)
        : end;
    const count = Math.min(128, value.mask.length);
    for (
        ;
        day <= end && day <= last_day && result.length < count;
        day.setDate(day.getDate() + 1)
    ) {
        const probe = new Date(day);
        probe.setHours(0, slots[0], 0, 0);
        if (!doesCronMatchDate(cron, probe)) continue;
        for (const slot of slots) {
            if (result.length >= count) break;
            const wall = new Date(day);
            wall.setHours(0, slot, 0, 0);
            const instant = fromZonedTime(wall, timezone);
            if (
                instant.getTime() >= start &&
                instant.getTime() <= expiry &&
                toZonedTime(instant, timezone).getTime() === wall.getTime()
            )
                result.push(instant);
        }
    }
    return result;
}

export function createPlaylistScheduleModel(
    schedule?: Partial<PlaylistSchedule>,
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
        has_mask: !!source.mask,
        mask: source.mask || '',
        has_valid_from: !!source.valid_from,
        valid_from: source.valid_from
            ? fromUnixTime(source.valid_from).getTime()
            : startOfDay(Date.now()).getTime(),
        has_valid_until: !!source.valid_until,
        valid_until: source.valid_until
            ? fromUnixTime(source.valid_until).getTime()
            : endOfDay(Date.now()).getTime(),
    };
}

/** Validate the repeat mask and schedule validity window. */
export const playlistScheduleSchema = schema<PlaylistScheduleFormModel>(
    (path) => {
        validate(path.mask, ({ value, valueOf }) => {
            if (!valueOf(path.has_mask)) return undefined;
            if (isValidScheduleMask(value())) return undefined;
            return {
                kind: 'mask_range',
                message: i18n('SIGNAGE_MANAGER.SCHEDULE_MASK_RANGE'),
            };
        });
        validate(path.valid_from, ({ value, valueOf }) => {
            if (!valueOf(path.has_mask)) return undefined;
            if (
                valueOf(path.has_valid_from) &&
                value() !== 0 &&
                Number.isFinite(new Date(value()).getTime())
            )
                return undefined;
            return {
                kind: 'mask_valid_from',
                message: i18n('SIGNAGE_MANAGER.SCHEDULE_MASK_VALID_FROM'),
            };
        });
        validate(path.valid_until, ({ value, valueOf }) => {
            if (
                valueOf(path.has_valid_from) &&
                valueOf(path.has_valid_until) &&
                valueOf(path.valid_from) >= value()
            ) {
                return {
                    kind: 'validity_order',
                    message: i18n('SIGNAGE_MANAGER.SCHEDULE_VALIDITY_ORDER'),
                };
            }
            return undefined;
        });
    },
);

export function playlistSchedulePayload(
    value: PlaylistScheduleFormModel,
): PlaylistSchedule {
    return value.schedule_type === 'play_at'
        ? {
              play_at: value.play_at
                  ? getUnixTime(new Date(value.play_at))
                  : undefined,
              play_cron: DEFAULT_RECURRING_CRON,
              play_period: Math.max(0, value.play_period || 0),
              play_takeover: !!value.play_takeover,
              mask: value.has_mask ? value.mask : '',
              valid_from: value.has_valid_from
                  ? getUnixTime(new Date(value.valid_from))
                  : undefined,
              valid_until: value.has_valid_until
                  ? getUnixTime(new Date(value.valid_until))
                  : undefined,
          }
        : {
              play_at: undefined,
              play_cron: buildRecurringCron(value),
              play_period: Math.max(0, value.play_period || 0),
              play_takeover: !!value.play_takeover,
              mask: value.has_mask ? value.mask : '',
              valid_from: value.has_valid_from
                  ? getUnixTime(new Date(value.valid_from))
                  : undefined,
              valid_until: value.has_valid_until
                  ? getUnixTime(new Date(value.valid_until))
                  : undefined,
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
                    @if (
                        !schedule_timezone_once_only() ||
                        value().schedule_type === 'play_at'
                    ) {
                        <ng-container [ngTemplateOutlet]="timezone_field" />
                    }
                    @if (
                        !schedule_timezone_once_only() &&
                        value().schedule_type === 'play_cron'
                    ) {
                        <p class="text-base-content/60 text-xs">
                            {{
                                'SIGNAGE_MANAGER.SCHEDULE_TIMEZONE_HINT'
                                    | translate
                            }}
                        </p>
                    }
                    @if (value().schedule_type === 'play_at') {
                        <div class="flex space-x-4">
                            <div class="flex-1">
                                <label>{{
                                    'SIGNAGE_MANAGER.PLAY_AT' | translate
                                }}</label>
                                <a-date-field
                                    [timezone]="timezone()"
                                    class="w-full"
                                    [formField]="schedule().play_at"
                                ></a-date-field>
                            </div>
                            <div class="flex-1">
                                <label>&nbsp;</label>
                                <!-- Recreate the time input to refresh its cached display when the timezone changes. -->
                                @for (zone of [timezone()]; track zone) {
                                    <a-time-field
                                        [timezone]="timezone()"
                                        class="w-full"
                                        [ngModel]="value().play_at"
                                        (ngModelChange)="
                                            schedule()
                                                .play_at()
                                                .value.set($event)
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                    ></a-time-field>
                                }
                            </div>
                        </div>
                        <label>{{
                            'SIGNAGE_MANAGER.PLAY_PERIOD' | translate
                        }}</label>
                        <a-duration-field
                            [timezone]="timezone()"
                            class="w-full"
                            [formField]="schedule().play_period"
                            [min]="15"
                            [max]="24 * 60"
                            [time]="value().play_at"
                            [allow_end_time]="true"
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
                                                #start_input
                                                matInput
                                                type="time"
                                                step="60"
                                                [value]="
                                                    recurringStartInputTime()
                                                "
                                                [attr.aria-label]="
                                                    'SIGNAGE_MANAGER.PLAY_PERIOD_START_ARIA'
                                                        | translate
                                                "
                                                (input)="
                                                    setPlayStart(
                                                        start_input.value
                                                    )
                                                "
                                                (blur)="
                                                    start_input.value =
                                                        recurringStartInputTime()
                                                "
                                            />
                                        </mat-form-field>
                                        @if (start_timezone_offset()) {
                                            <div
                                                start-timezone
                                                class="text-xs opacity-30"
                                            >
                                                {{
                                                    recurringPlayStartTime()
                                                        | date
                                                            : 'h : mm a (z)'
                                                            : start_timezone_offset()
                                                }}
                                            </div>
                                        }
                                    </div>
                                }
                                <div class="w-full flex-1">
                                    <label>{{
                                        'SIGNAGE_MANAGER.PLAY_PERIOD'
                                            | translate
                                    }}</label>
                                    <a-duration-field
                                        [timezone]="timezone()"
                                        class="no-subscript w-full flex-1"
                                        [formField]="schedule().play_period"
                                        [min]="15"
                                        [max]="24 * 60"
                                        [time]="recurringPlayStartTime()"
                                        [allow_end_time]="true"
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
                    <settings-toggle
                        [label]="'SIGNAGE_MANAGER.SCHEDULE_MASK' | translate"
                        [ngModel]="value().has_mask"
                        (ngModelChange)="setMaskEnabled($event)"
                        [ngModelOptions]="{ standalone: true }"
                    />
                    @if (value().has_mask) {
                        <div
                            mask-editor
                            class="border-base-300 space-y-3 rounded-lg border px-3 py-2"
                        >
                            <div class="space-y-1">
                                <label for="mask-length">
                                    {{
                                        'SIGNAGE_MANAGER.MASK_REPEAT_LENGTH'
                                            | translate
                                    }}
                                </label>
                                <div class="flex items-center justify-between gap-2">
                                    <a-counter
                                        class="block max-w-64 min-w-0 flex-1 [&_[value]]:text-sm"
                                        [render_fn]="formatMaskOccurrences"
                                        name="mask-length"
                                        [min]="1"
                                        [max]="128"
                                        [step]="1"
                                        [ngModel]="value().mask.length"
                                        (ngModelChange)="resizeMask($event)"
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.MASK_REPEAT_LENGTH'
                                                | translate
                                        "
                                    />
                                    <p
                                        class="text-base-content/70 shrink-0 text-sm whitespace-nowrap"
                                        aria-live="polite"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.MASK_PLAY_COUNT'
                                                | translate
                                                    : {
                                                          count: mask_play_count(),
                                                          total: value().mask
                                                              .length,
                                                      }
                                        }}
                                    </p>
                                </div>
                            </div>
                            <p class="text-base-content/70 text-xs">
                                {{
                                    'SIGNAGE_MANAGER.SCHEDULE_MASK_HINT'
                                        | translate
                                }}
                            </p>
                            <div class="flex flex-wrap items-center gap-2">
                                <button
                                    type="button"
                                    class="border-base-300 hover:bg-base-200 rounded border px-3 py-2 text-xs"
                                    (click)="fillMask('play')"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.MASK_PLAY_ALL'
                                            | translate
                                    }}
                                </button>
                                <button
                                    type="button"
                                    class="border-base-300 hover:bg-base-200 rounded border px-3 py-2 text-xs"
                                    (click)="fillMask('skip')"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.MASK_SKIP_ALL'
                                            | translate
                                    }}
                                </button>
                                <button
                                    type="button"
                                    class="border-base-300 hover:bg-base-200 rounded border px-3 py-2 text-xs"
                                    (click)="fillMask('alternate')"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.MASK_ALTERNATE'
                                            | translate
                                    }}
                                </button>
                                <div
                                    class="border-base-300 ml-auto flex shrink-0 overflow-hidden rounded-lg border"
                                >
                                    @for (view of mask_views; track view.mode) {
                                        <button
                                            type="button"
                                            class="focus-visible:ring-primary flex min-h-10 items-center gap-2 px-3 text-xs focus-visible:ring-2 focus-visible:ring-inset"
                                            [class.bg-base-200]="
                                                mask_view() === view.mode
                                            "
                                            [class.font-semibold]="
                                                mask_view() === view.mode
                                            "
                                            [attr.aria-pressed]="
                                                mask_view() === view.mode
                                            "
                                            (click)="mask_view.set(view.mode)"
                                        >
                                            <icon aria-hidden="true">{{
                                                view.icon
                                            }}</icon>
                                            {{ view.label | translate }}
                                        </button>
                                    }
                                </div>
                            </div>
                            <div
                                role="group"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.MASK_PATTERN' | translate
                                "
                                class="grid max-h-80 gap-2 overflow-y-auto p-1"
                                [class]="
                                    mask_view() === 'grid'
                                        ? 'grid-cols-4 sm:grid-cols-8'
                                        : 'grid-cols-1'
                                "
                            >
                                @for (bit of mask_bits(); track $index) {
                                    <button
                                        type="button"
                                        mask-instance
                                        [matTooltip]="
                                            mask_occurrence_labels()[$index]
                                        "
                                        [matTooltipDisabled]="
                                            mask_view() !== 'grid'
                                        "
                                        class="focus-visible:ring-primary flex items-center gap-1 rounded-lg border text-xs focus-visible:ring-2 focus-visible:ring-offset-2"
                                        [class.flex-col]="
                                            mask_view() === 'grid'
                                        "
                                        [class.justify-center]="
                                            mask_view() === 'grid'
                                        "
                                        [class.min-h-14]="
                                            mask_view() === 'grid'
                                        "
                                        [class.justify-between]="
                                            mask_view() === 'list'
                                        "
                                        [class.min-h-11]="
                                            mask_view() === 'list'
                                        "
                                        [class.px-3]="mask_view() === 'list'"
                                        [class.bg-primary]="bit === '1'"
                                        [class.text-primary-content]="
                                            bit === '1'
                                        "
                                        [class.border-primary]="bit === '1'"
                                        [class.border-base-300]="bit !== '1'"
                                        [class.bg-base-100]="bit !== '1'"
                                        [attr.aria-pressed]="bit === '1'"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.MASK_INSTANCE'
                                                | translate
                                                    : {
                                                          number: $index + 1,
                                                          state:
                                                              ((bit === '1'
                                                                  ? 'SIGNAGE_MANAGER.MASK_PLAY'
                                                                  : 'SIGNAGE_MANAGER.MASK_SKIP'
                                                              ) | translate) +
                                                              (mask_view() ===
                                                              'list'
                                                                  ? ', ' +
                                                                    mask_occurrence_labels()[
                                                                        $index
                                                                    ]
                                                                  : ''),
                                                      }
                                        "
                                        (click)="toggleMaskInstance($index)"
                                    >
                                        <span class="font-semibold">{{
                                            $index + 1
                                        }}</span>
                                        @if (mask_view() === 'list') {
                                            <span
                                                class="min-w-0 flex-1 px-2 text-left leading-snug"
                                                mask-instance-date
                                                >{{
                                                    mask_occurrence_labels()[
                                                        $index
                                                    ]
                                                }}</span
                                            >
                                        }
                                        <span
                                            class="flex shrink-0 items-center gap-1"
                                        >
                                            <icon aria-hidden="true">{{
                                                bit === '1'
                                                    ? 'play_arrow'
                                                    : 'block'
                                            }}</icon>
                                            @if (mask_view() === 'list') {
                                                {{
                                                    (bit === '1'
                                                        ? 'SIGNAGE_MANAGER.MASK_PLAY'
                                                        : 'SIGNAGE_MANAGER.MASK_SKIP'
                                                    ) | translate
                                                }}
                                            }
                                        </span>
                                    </button>
                                }
                            </div>
                            @if (!mask_play_count()) {
                                <p class="text-base-content/70 text-xs">
                                    {{
                                        'SIGNAGE_MANAGER.MASK_NONE_PLAY'
                                            | translate
                                    }}
                                </p>
                            }
                        </div>
                    }
                    <div
                        schedule-validity
                        class="bg-base-200/40 border-base-300 mt-4 rounded-lg border p-2"
                    >
                        @if (
                            value().schedule_type === 'play_cron' &&
                            schedule_timezone_once_only()
                        ) {
                            <ng-container [ngTemplateOutlet]="timezone_field" />
                        }
                        <settings-toggle
                            [class.mt-2]="
                                value().schedule_type === 'play_cron' &&
                                schedule_timezone_once_only()
                            "
                            [label]="'SIGNAGE_MANAGER.VALID_FROM' | translate"
                            [formField]="schedule().has_valid_from"
                        />
                        @if (value().has_valid_from) {
                            <div class="mt-2 flex gap-2">
                                <a-date-field
                                    [timezone]="timezone()"
                                    class="w-full flex-1"
                                    [formField]="schedule().valid_from"
                                ></a-date-field>
                                @for (zone of [timezone()]; track zone) {
                                    <a-time-field
                                        [timezone]="timezone()"
                                        class="w-full flex-1"
                                        [(ngModel)]="
                                            schedule().valid_from().value
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                    ></a-time-field>
                                }
                            </div>
                        }
                        <settings-toggle
                            class="mt-2"
                            [label]="'FORM.EXPIRES_AT' | translate"
                            [formField]="schedule().has_valid_until"
                        />
                        @if (value().has_valid_until) {
                            <div class="mt-2 flex gap-2">
                                <a-date-field
                                    [timezone]="timezone()"
                                    class="w-full flex-1"
                                    [formField]="schedule().valid_until"
                                ></a-date-field>
                                @for (zone of [timezone()]; track zone) {
                                    <a-time-field
                                        [timezone]="timezone()"
                                        class="w-full flex-1"
                                        [ngModel]="value().valid_until"
                                        (ngModelChange)="
                                            schedule()
                                                .valid_until()
                                                .value.set($event)
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                    ></a-time-field>
                                }
                            </div>
                        }
                    </div>
                </div>
            }
            @for (error of schedule()().errorSummary(); track error.kind) {
                <p role="alert" class="text-error px-3 pb-3 text-sm">
                    {{ error.message }}
                </p>
            }
        </div>
        <ng-template #timezone_field>
            <label for="timezone">{{ 'COMMON.TIMEZONE' | translate }}</label>
            <mat-form-field appearance="outline" class="no-subscript w-full">
                <mat-select
                    #timezone_select
                    name="timezone"
                    [aria-label]="'COMMON.TIMEZONE' | translate"
                    [(ngModel)]="timezone"
                    [ngModelOptions]="{ standalone: true }"
                    (openedChange)="
                        timezone_search.set('');
                        $event &&
                            focusTimezoneSearch(
                                timezone_select,
                                timezone_filter
                            )
                    "
                >
                    <mat-select-trigger>{{ timezone() }}</mat-select-trigger>
                    <div class="bg-base-100 sticky -top-1.5 z-10">
                        <input
                            #timezone_filter
                            class="border-base-300 h-full w-full border-b px-4 py-3"
                            [placeholder]="'COMMON.SEARCH' | translate"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.SEARCH_TIMEZONES' | translate
                            "
                            [(ngModel)]="timezone_search"
                            [ngModelOptions]="{ standalone: true }"
                            (keydown)="onTimezoneSearchKeydown($event)"
                        />
                    </div>
                    @for (zone of timezone_options(); track zone) {
                        <mat-option [value]="zone">{{ zone }}</mat-option>
                    }
                    @if (!filtered_timezones().length) {
                        <mat-option disabled>{{
                            'COMMON.TIMEZONE_EMPTY' | translate
                        }}</mat-option>
                    }
                </mat-select>
            </mat-form-field>
        </ng-template>
    `,
    styles: [``],
    imports: [
        DatePipe,
        NgTemplateOutlet,
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
    private readonly _injector = inject(Injector);
    private readonly _locale = inject(LocaleService);
    private readonly _date_pipe = new DatePipe(this._locale.locale);

    public readonly schedule =
        input.required<FieldTree<PlaylistScheduleFormModel>>();
    public readonly index = input.required<number>();
    public readonly open = input(false);
    public readonly can_remove = input(false);
    public readonly toggle = output<void>();
    public readonly remove = output<Event>();

    public readonly schedule_timezone_once_only = settingSignal(
        'schedule_timezone_once_only',
        true,
    );
    public readonly timezone = signal(LOCAL_TIMEZONE);
    public readonly timezones = [
        ...new Set([LOCAL_TIMEZONE, 'UTC', ...TIMEZONES_IANA]),
    ].sort();

    public readonly timezone_search = signal('');
    public readonly filtered_timezones = computed(() => {
        const search = this.timezone_search().trim().toLowerCase();
        return this.timezones.filter((zone) =>
            zone.toLowerCase().includes(search),
        );
    });

    // Material needs the selected option to remain in the list to display its trigger.
    public readonly timezone_options = computed(() => {
        const matches = this.filtered_timezones();
        const selected = this.timezone();
        return matches.includes(selected) ? matches : [selected, ...matches];
    });

    public readonly weekday_options = WEEKDAY_OPTIONS;
    public readonly week_of_month_options = WEEK_OF_MONTH_OPTIONS;
    public readonly month_days = Array.from(
        { length: 31 },
        (_, index) => index + 1,
    );
    public readonly ordinal = ordinal;
    public readonly value = computed(() => this.schedule()().value());
    public readonly mask_occurrence_dates = computed(() =>
        maskOccurrenceDates(this.value(), this.timezone()),
    );
    public readonly mask_occurrence_labels = computed(() => {
        const formatter = new Intl.DateTimeFormat(this._locale.locale, {
            timeZone: this.timezone(),
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            timeZoneName: 'short',
        });
        const dates = this.mask_occurrence_dates();
        const missing = i18n(
            this.value().has_valid_from
                ? 'SIGNAGE_MANAGER.MASK_INSTANCE_UNAVAILABLE'
                : 'SIGNAGE_MANAGER.MASK_INSTANCE_START_REQUIRED',
        );
        return this.mask_bits().map((_, index) =>
            dates[index] ? formatter.format(dates[index]) : missing,
        );
    });
    public readonly formatMaskOccurrences = (count: number) =>
        i18n('SIGNAGE_MANAGER.MASK_OCCURRENCES', { count }, count);

    public readonly mask_view = signal<'grid' | 'list'>('grid');
    public readonly mask_views = [
        { mode: 'grid', icon: 'grid_view', label: 'SIGNAGE_MANAGER.VIEW_GRID' },
        { mode: 'list', icon: 'view_list', label: 'SIGNAGE_MANAGER.VIEW_LIST' },
    ] as const;
    public readonly mask_bits = computed(() =>
        this.value().mask.slice(0, 128).split(''),
    );
    public readonly mask_play_count = computed(
        () => this.mask_bits().filter((bit) => bit === '1').length,
    );

    public setMaskEnabled(enabled: boolean) {
        if (enabled && !this.value().mask)
            this.schedule().mask().value.set('11');
        this.schedule().has_mask().value.set(enabled);
    }

    /** Keep existing choices when resizing. New occurrences play by default. */
    public resizeMask(length: number) {
        if (!Number.isFinite(length)) return;
        const size = Math.max(1, Math.min(128, Math.floor(length)));
        this.schedule()
            .mask()
            .value.set(this.value().mask.slice(0, size).padEnd(size, '1'));
    }

    public toggleMaskInstance(index: number) {
        if (
            !Number.isInteger(index) ||
            index < 0 ||
            index >= Math.min(128, this.value().mask.length)
        )
            return;
        const bits = [...this.value().mask];
        bits[index] = bits[index] === '1' ? '0' : '1';
        this.schedule().mask().value.set(bits.join(''));
    }

    public fillMask(pattern: 'play' | 'skip' | 'alternate') {
        const size = Math.max(1, Math.min(128, this.value().mask.length));
        this.schedule()
            .mask()
            .value.set(
                Array.from({ length: size }, (_, index) =>
                    pattern === 'play' ||
                    (pattern === 'alternate' && index % 2 === 0)
                        ? '1'
                        : '0',
                ).join(''),
            );
    }

    public readonly formatPlayHour = (value: number | null | undefined) =>
        minutesToTime(value || 0);

    public focusTimezoneSearch(select: MatSelect, input: HTMLInputElement) {
        afterNextRender(
            () => {
                if (select.panelOpen) input.focus({ preventScroll: true });
            },
            { injector: this._injector },
        );
    }

    public onTimezoneSearchKeydown(event: KeyboardEvent) {
        const navigation_keys = [
            'Escape',
            'Tab',
            'ArrowUp',
            'ArrowDown',
            'Enter',
        ];
        if (
            !navigation_keys.includes(event.key) ||
            event.ctrlKey ||
            event.metaKey
        ) {
            event.stopPropagation();
        }
    }

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
            this.timezone(),
            value.has_valid_from ? value.valid_from : 0,
            value.has_mask ? value.mask : '',
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
        const expiry_suffix =
            (expiry ? ` · ${expiry}` : '') +
            (value.has_mask
                ? ` · ${i18n('SIGNAGE_MANAGER.SCHEDULE_MASK_SUMMARY', { mask: value.mask, size: value.mask.length })}`
                : '');
        if (value.schedule_type === 'play_at') {
            const date = new Date(value.play_at || Date.now());
            return `${i18n('SIGNAGE_MANAGER.SUMMARY_PLAY_ONCE', {
                datetime: `${formatPlayDateTime(date, this.timezone())} ${this.timezone()}`,
                duration,
            })}${takeover}${expiry_suffix}`;
        }
        return `${this.recurringScheduleSummary()} · ${this.timezone()}${takeover}${expiry_suffix}`;
    }

    public scheduleExpiryTooltip() {
        const value = this.value();
        return value.has_valid_until
            ? new Date(value.valid_until).toLocaleString(undefined, {
                  timeZone: this.timezone(),
              })
            : '';
    }

    public recurringPlayStartTime() {
        if (!this.showRecurringStartTime()) return undefined;
        const value = this.value();
        return setTimeInTimezone(
            Date.now(),
            0,
            value.play_start || 0,
            this.timezone(),
        );
    }

    public recurringStartInputTime() {
        return formatTimeInTimezone(this.recurringPlayStartTime());
    }

    public readonly start_timezone_offset = computed(() => {
        const date = new Date(this.recurringPlayStartTime());
        const offset = getTimezoneOffsetString(this.timezone(), date);
        return offset === getTimezoneOffsetString(LOCAL_TIMEZONE, date)
            ? ''
            : offset;
    });

    public setPlayStart(value: string) {
        if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(value)) return;
        const [local_hours, local_minutes] = value.split(':').map(Number);
        const timestamp = setTimeInTimezone(
            this.recurringPlayStartTime(),
            local_hours,
            local_minutes,
        );
        const { hours, minutes } = getTimeInTimezone(
            timestamp,
            this.timezone(),
        );
        this.schedule()
            .play_start()
            .value.set(hours * 60 + minutes);
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
