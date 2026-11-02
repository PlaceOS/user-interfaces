import {
    i18n,
    isCronMonthlyWeekday,
    isPlayOnceSchedule,
    parseCronNumber,
    parseCronWeekdays,
    parseCronWeeksOfMonth,
    settingSignal,
} from '@placeos/common';
import { type SignagePlaylistSchedule } from '@placeos/ts-client';
import { format, fromUnixTime } from 'date-fns';
import {
    formatPlayDateTime,
    playOnceStart,
    playPeriodMinutes,
} from '../signage-playlist.util';

export type RecurringScheduleType =
    | 'hours'
    | 'daily'
    | 'weekdays'
    | 'weekly'
    | 'monthly'
    | 'monthly_weekday'
    | 'custom';

/** Repeat pattern of a recurring schedule, as the schedule form edits it */
export interface RecurringSchedule {
    recurrence_type: RecurringScheduleType;
    /** Start time as `HH:mm` */
    recurrence_time: string;
    recurrence_interval: number;
    recurrence_week_of_month: number[];
    recurrence_weekdays: number[];
    recurrence_day_of_month: number[];
}

export const DEFAULT_RECURRING_TIME = '00:00';
export const DEFAULT_RECURRING_CRON = '0 0 * * *';
/** Weekdays in the order the form shows them, Monday first */
export const WEEKDAY_OPTIONS = [1, 2, 3, 4, 5, 6, 0].map((value) => ({
    value,
}));
export const WEEK_OF_MONTH_OPTIONS = [1, 2, 3, 4, 5];

/**
 * Clock time of minutes from midnight as `HH:mm`. Minutes past the end of
 * the day wrap to the next day.
 */
export function formatClockTime(minutes: number) {
    const hours = Math.floor(minutes / 60) % 24;
    const mins = minutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
}

/**
 * Clock time such as `09:30` in the time format of the app: 24 hour when
 * the `use_24_hour_time` setting is on, otherwise 12 hour such as `9:30 AM`.
 * Matches `SettingsService.time_format_signal`.
 * @param time Time as `HH:mm`
 */
export function formatSettingTime(time: string) {
    const [hours, minutes] = time.split(':').map((part) => +part || 0);
    return format(
        new Date(2000, 0, 1, hours, minutes),
        settingSignal('use_24_hour_time', false)() ? 'HH:mm' : 'h:mm a',
    );
}

/**
 * Minutes between plays of a cron that plays every N minutes, such as
 * `*\/5 * * * *`. Null for other crons.
 */
function cronMinuteInterval(cron: string) {
    const [minute, ...rest] = cron.trim().split(/\s+/);
    if (rest.length !== 4 || rest.some((part) => part !== '*')) return null;
    return minute === '*' ? 1 : parseCronStep(minute, 1, 59);
}

/** Valid weekdays with no repeats, Monday first */
export function normaliseWeekdays(value: number[] | null | undefined) {
    const seen_days = new Set<number>();
    for (const day of value || []) {
        if (day >= 0 && day <= 6) seen_days.add(day);
    }
    return WEEKDAY_OPTIONS.map((day) => day.value).filter((day) =>
        seen_days.has(day),
    );
}

/** Valid days of the month with no repeats, in order */
export function normaliseMonthDays(value: number[] | null | undefined) {
    const seen_days = new Set<number>();
    for (const day of value || []) {
        if (day >= 1 && day <= 31) seen_days.add(day);
    }
    return Array.from({ length: 31 }, (_, index) => index + 1).filter((day) =>
        seen_days.has(day),
    );
}

/** Valid weeks of the month with no repeats, in order */
export function normaliseWeeksOfMonth(value: number[] | null | undefined) {
    const seen_weeks = new Set<number>();
    for (const week of value || []) {
        if (week >= 1 && week <= 5) seen_weeks.add(week);
    }
    return WEEK_OF_MONTH_OPTIONS.filter((week) => seen_weeks.has(week));
}

/** Days of the month in a plain list such as "1,15". Empty for other values. */
function parseCronMonthDays(value: string) {
    if (!value || value === '*') return [];
    const days = value.split(',').map((part) => parseCronNumber(part, 1, 31));
    return days.every((day) => day !== null)
        ? [...new Set(days)].sort((a, b) => a - b)
        : [];
}

function parseCronStep(value: string, min: number, max: number) {
    const match = /^\*\/(\d+)$/.exec(value || '');
    if (!match) return null;
    const step = +match[1];
    return step >= min && step <= max ? step : null;
}

/**
 * Repeat pattern of a cron expression. Expressions the form cannot edit
 * give the `custom` type.
 */
export function parseRecurringCron(
    value: string | null | undefined,
): RecurringSchedule {
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
            : formatClockTime(hour * 60 + minute);
    const custom: RecurringSchedule = {
        recurrence_type: 'custom',
        recurrence_time: time,
        recurrence_interval: 1,
        recurrence_week_of_month: [1],
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
                recurrence_type: 'hours',
                recurrence_interval: hour_step,
            };
        }
    }
    if (minute === null || hour === null || month_part !== '*') return custom;
    if (day_part === '*' && weekday_part === '*') {
        return { ...custom, recurrence_type: 'daily' };
    }
    if (day_part === '*' && weekday_part === '1-5') {
        return { ...custom, recurrence_type: 'weekdays' };
    }
    const weekdays = normaliseWeekdays(parseCronWeekdays(weekday_part));
    if (isCronMonthlyWeekday(day_part, weekday_part)) {
        return {
            ...custom,
            recurrence_type: 'monthly_weekday',
            recurrence_week_of_month: parseCronWeeksOfMonth(day_part),
            recurrence_weekdays: weekdays,
        };
    }
    if (day_part === '*' && weekdays.length) {
        return {
            ...custom,
            recurrence_type: 'weekly',
            recurrence_weekdays: weekdays,
        };
    }
    const days_of_month = parseCronMonthDays(day_part);
    if (days_of_month.length && weekday_part === '*') {
        return {
            ...custom,
            recurrence_type: 'monthly',
            recurrence_day_of_month: days_of_month,
        };
    }
    return custom;
}

/** Translated ordinal of a day or week of the month, such as "2nd" */
export function ordinalLabel(value: number) {
    return i18n('SIGNAGE_MANAGER.ORDINAL', { count: value }, value);
}

/** Translated length such as "1 hour 30 minutes". Empty for 0. */
export function formatDuration(value: number | null | undefined) {
    const total_minutes = Math.max(0, Math.round(value || 0));
    if (!total_minutes) return '';
    const parts = [
        {
            value: Math.floor(total_minutes / (24 * 60)),
            key: 'SIGNAGE_MANAGER.DURATION_DAY',
        },
        {
            value: Math.floor((total_minutes % (24 * 60)) / 60),
            key: 'SIGNAGE_MANAGER.DURATION_HOUR',
        },
        { value: total_minutes % 60, key: 'SIGNAGE_MANAGER.DURATION_MINUTE' },
    ];
    return parts
        .filter((part) => part.value)
        .map((part) => i18n(part.key, { count: part.value }, part.value))
        .join(' ');
}

/** Translated play length. A length of 0 plays the playlist once. */
export function playLengthLabel(minutes: number) {
    return formatDuration(minutes) || i18n('SIGNAGE_MANAGER.ONE_PLAYLIST_PASS');
}

/** Names of weekdays in the locale, Monday first, such as "Monday, Friday" */
function weekdayNames(value: number[], locale: string) {
    const format = new Intl.DateTimeFormat(locale, { weekday: 'long' });
    const weekdays = normaliseWeekdays(value);
    // 1 January 2024 is a Monday
    return (weekdays.length ? weekdays : [1])
        .map((day) => format.format(new Date(2024, 0, day === 0 ? 7 : day)))
        .join(', ');
}

/**
 * Translated summary of a repeat pattern, such as "Starts every weekday at
 * 09:00 for 1 hour.". Null for a `custom` pattern, which callers describe.
 * @param time Start time to show
 * @param period Play length in minutes
 * @param locale Locale of the weekday names
 */
export function recurringScheduleSummary(
    value: Omit<RecurringSchedule, 'recurrence_time'>,
    time: string,
    period: number,
    locale: string,
) {
    const duration = playLengthLabel(period);
    switch (value.recurrence_type) {
        case 'custom':
            return null;
        case 'hours': {
            const interval = value.recurrence_interval || 1;
            return i18n(
                'SIGNAGE_MANAGER.SUMMARY_EVERY_HOUR',
                { interval },
                interval,
            );
        }
        case 'weekdays':
            return i18n('SIGNAGE_MANAGER.SUMMARY_WEEKDAYS', { time, duration });
        case 'weekly':
            return i18n('SIGNAGE_MANAGER.SUMMARY_WEEKLY', {
                days: weekdayNames(value.recurrence_weekdays, locale),
                time,
                duration,
            });
        case 'monthly': {
            const days = normaliseMonthDays(value.recurrence_day_of_month);
            return i18n('SIGNAGE_MANAGER.SUMMARY_MONTHLY', {
                days: (days.length ? days : [1]).map(ordinalLabel).join(', '),
                time,
                duration,
            });
        }
        case 'monthly_weekday': {
            const weeks = normaliseWeeksOfMonth(value.recurrence_week_of_month);
            return i18n('SIGNAGE_MANAGER.SUMMARY_MONTHLY_WEEKDAY', {
                weeks: (weeks.length ? weeks : [1])
                    .map(ordinalLabel)
                    .join(', '),
                days: weekdayNames(value.recurrence_weekdays, locale),
                time,
                duration,
            });
        }
        default:
            return i18n('SIGNAGE_MANAGER.SUMMARY_DAILY', { time, duration });
    }
}

/** Translated distance in its largest whole unit, such as "3 days" */
function distanceLabel(milliseconds: number) {
    const minutes = Math.max(1, Math.round(milliseconds / 60_000));
    const [value, key] =
        minutes >= 24 * 60
            ? [Math.round(minutes / (24 * 60)), 'SIGNAGE_MANAGER.DURATION_DAY']
            : minutes >= 60
              ? [Math.round(minutes / 60), 'SIGNAGE_MANAGER.DURATION_HOUR']
              : [minutes, 'SIGNAGE_MANAGER.DURATION_MINUTE'];
    return i18n(key, { count: value }, value);
}

/**
 * Translated end of a schedule relative to now, such as "until 3 days from
 * now". Empty when the schedule has no end.
 * @param valid_until End of the schedule in Unix seconds
 */
export function scheduleExpiryLabel(
    valid_until: number | undefined,
    now = Date.now(),
) {
    if (!valid_until) return '';
    const expiry = fromUnixTime(valid_until).getTime();
    const time = distanceLabel(Math.abs(expiry - now));
    return expiry >= now
        ? i18n('SIGNAGE_MANAGER.SCHEDULE_UNTIL_FROM_NOW', { time })
        : i18n('SIGNAGE_MANAGER.SCHEDULE_UNTIL_AGO', { time });
}

/** Translated summary of a schedule mask */
export function scheduleMaskLabel(mask: string) {
    return i18n('SIGNAGE_MANAGER.SCHEDULE_MASK_SUMMARY', {
        mask,
        size: mask.length,
    });
}

/**
 * Translated one line summary of a saved playlist schedule, for lists.
 * @param locale Locale of the weekday names
 */
export function scheduleSummary(
    schedule: Partial<SignagePlaylistSchedule>,
    locale: string,
) {
    const period = playPeriodMinutes(schedule);
    const takeover = schedule.play_takeover
        ? i18n('SIGNAGE_MANAGER.TAKEOVER_SUFFIX')
        : '';
    const suffix = [
        scheduleExpiryLabel(schedule.valid_until),
        schedule.mask ? scheduleMaskLabel(schedule.mask) : '',
    ]
        .filter((part) => part)
        .map((part) => ` · ${part}`)
        .join('');
    if (isPlayOnceSchedule(schedule)) {
        const start = playOnceStart(schedule);
        // Follow the app's time format, like the recurring summaries
        const hour12 = !settingSignal('use_24_hour_time', false)();
        const date = start ? formatPlayDateTime(start, undefined, hour12) : '';
        const datetime = schedule.play_at
            ? date
            : `${date} ${i18n('SIGNAGE_MANAGER.DISPLAY_LOCAL_TIME')}`;
        return `${i18n('SIGNAGE_MANAGER.SUMMARY_PLAY_ONCE', {
            datetime,
            duration: playLengthLabel(period),
        })}${takeover}${suffix}`;
    }
    const cron = schedule.play_cron || DEFAULT_RECURRING_CRON;
    const recurrence = parseRecurringCron(cron);
    // The form has no minute repeat, so its parser reads one as custom
    const minute_interval = cronMinuteInterval(cron);
    const summary =
        minute_interval !== null
            ? i18n(
                  'SIGNAGE_MANAGER.SUMMARY_EVERY_MINUTE',
                  { interval: minute_interval },
                  minute_interval,
              )
            : (recurringScheduleSummary(
                  recurrence,
                  formatSettingTime(recurrence.recurrence_time),
                  period,
                  locale,
              ) ?? `${i18n('SIGNAGE_MANAGER.CUSTOM_SCHEDULE')} (${cron})`);
    return `${summary}${takeover}${suffix}`;
}
