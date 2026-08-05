import {
    SignageMedia,
    type SignagePlaylistItemSchedule,
    type SignagePlaylistSchedule,
} from '@placeos/ts-client';
import { fromUnixTime } from 'date-fns';

const DEFAULT_PLAY_PERIOD_MINUTES = 24 * 60;
const WEEKDAY_NAMES = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

export function playlistMediaThumbnailUrl(item: SignageMedia) {
    // `SignageMedia.thumbnail_url` builds an uploads URL whether or not a
    // thumbnail exists, so items without one render as a broken image
    if (!item?.thumbnail_id) return '';
    return item.id
        ? `/api/engine/v2/signage/media/${item.id}/thumbnail`
        : item.thumbnail_url || '';
}

export function playlistMediaUrl(item: SignageMedia) {
    return item?.media_id
        ? `/api/engine/v2/uploads/${item.media_id}/url`
        : item?.media_uri || '';
}

export function playlistMediaIcon(item: SignageMedia) {
    return item?.media_type === 'video'
        ? 'video_library'
        : item?.media_type === 'webpage'
          ? 'http'
          : item?.media_type === 'plugin'
            ? 'extension'
            : 'image';
}

export function playlistMediaItems(list: {
    items?: string[];
    media?: SignageMedia[];
    schedules?: SignagePlaylistItemSchedule[];
}) {
    const scheduled_media = (list.schedules || [])
        .map((item) => item.media)
        .filter((item): item is SignageMedia => !!item?.id);
    if (!list.media?.length && scheduled_media.length) return scheduled_media;
    const media = list.media?.length ? list.media : scheduled_media;
    const media_by_id = new Map(media.map((item) => [item.id, item]));
    // Distribution playlist items reference schedule item ids, not media ids
    for (const schedule of list.schedules || []) {
        if (!schedule.media?.id) continue;
        if (schedule.id) media_by_id.set(schedule.id, schedule.media);
        if (schedule.item_id) {
            media_by_id.set(schedule.item_id, schedule.media);
        }
    }
    return list.items?.length
        ? list.items
              .map((id) => media_by_id.get(id))
              .filter((item): item is SignageMedia => !!item)
        : media;
}

export function playlistMediaIds(list: {
    items?: string[];
    media?: SignageMedia[];
    schedules?: SignagePlaylistItemSchedule[];
}) {
    return playlistMediaItems(list).map((item) => item.id);
}

export function playlistItemScheduleMap(list: {
    schedules?: SignagePlaylistItemSchedule[];
}) {
    const map = new Map<string, SignagePlaylistItemSchedule>();
    for (const item of list.schedules || []) {
        if (item.id) map.set(item.id, item);
        if (item.item_id) map.set(item.item_id, item);
        if (item.media?.id) map.set(item.media.id, item);
    }
    return map;
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

function formatCronTime(hour_part: string, minute_part: string) {
    const date = new Date();
    date.setHours(+hour_part || 0, +minute_part || 0, 0, 0);
    return date.toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: '2-digit',
    });
}

function durationLabel(duration_minutes: number) {
    if (!duration_minutes) return 'one playlist pass';
    if (duration_minutes < 60) {
        return `${duration_minutes} minute${duration_minutes === 1 ? '' : 's'}`;
    }
    if (duration_minutes % 60 === 0) {
        const hours = duration_minutes / 60;
        return `${hours} hour${hours === 1 ? '' : 's'}`;
    }
    const hours = Math.floor(duration_minutes / 60);
    const minutes = duration_minutes % 60;
    return `${hours} hr ${minutes} min`;
}

function parseCronList(value: string, min: number, max: number) {
    const values = new Set<number>();
    if (!value || value === '*') return [];
    for (const part of value.split(',')) {
        if (part.includes('-')) {
            const [start, end] = part.split('-').map(Number);
            if (start < min || end > max || start > end) return [];
            for (let item = start; item <= end; item++) values.add(item);
        } else {
            const item = Number(part);
            if (item < min || item > max) return [];
            values.add(item);
        }
    }
    return [...values].sort((a, b) => a - b);
}

function listText(values: string[]) {
    if (values.length <= 1) return values[0] || '';
    if (values.length === 2) return `${values[0]} and ${values[1]}`;
    return `${values.slice(0, -1).join(', ')} and ${values.at(-1)}`;
}

function weekOfMonthLabel(day_part: string) {
    const [start, end] = day_part.split('-').map(Number);
    if (start === 1 && end === 7) return '1st';
    if (start === 8 && end === 14) return '2nd';
    if (start === 15 && end === 21) return '3rd';
    if (start === 22 && end === 28) return '4th';
    if (start === 29 && end === 31) return '5th';
    return '';
}

function weekOfMonthLabels(day_part: string) {
    const labels = day_part.split(',').map((range) => weekOfMonthLabel(range));
    return labels.every((label) => label) ? labels : [];
}

function isCronMonthlyWeekday(day_part: string, weekday_part: string) {
    return /^\d+-\d+(,\d+-\d+)*$/.test(day_part || '') && weekday_part !== '*';
}

function humanizeCronSchedule(cron: string, duration_minutes: number) {
    const parts = (cron || '0 0 * * *').trim().split(/\s+/);
    if (parts.length !== 5) return `Custom schedule (${cron})`;
    const [minute, hour, day, month, day_of_week] = parts;
    const duration = durationLabel(duration_minutes);
    const suffix = ` for ${duration}`;
    if (month !== '*') return `Custom schedule (${cron})`;
    const minute_interval = /^\*\/(\d+)$/.exec(minute)?.[1];
    if (minute === '*' && hour === '*' && day === '*' && day_of_week === '*') {
        return `Every minute${suffix}`;
    }
    if (minute_interval && hour === '*' && day === '*' && day_of_week === '*') {
        return `Every ${minute_interval} minutes${suffix}`;
    }
    const hour_interval = /^\*\/(\d+)$/.exec(hour)?.[1];
    if (minute === '0' && hour === '*' && day === '*' && day_of_week === '*') {
        return `Every hour${suffix}`;
    }
    if (minute === '0' && hour_interval && day === '*' && day_of_week === '*') {
        return `Every ${hour_interval} hours${suffix}`;
    }
    if (!/^\d+$/.test(minute) || !/^\d+$/.test(hour)) {
        return `Custom schedule (${cron})`;
    }
    const time = formatCronTime(hour, minute);
    if (day === '*' && day_of_week === '*') {
        return `Every day at ${time}${suffix}`;
    }
    if (day === '*' && day_of_week === '1-5') {
        return `Weekdays at ${time}${suffix}`;
    }
    if (day === '*' && day_of_week !== '*') {
        const weekdays = parseCronList(day_of_week, 0, 6).map(
            (day_value) => WEEKDAY_NAMES[day_value],
        );
        return weekdays.length
            ? `Every ${listText(weekdays)} at ${time}${suffix}`
            : `Custom schedule (${cron})`;
    }
    if (day !== '*' && day_of_week === '*') {
        const days = parseCronList(day, 1, 31).map((day_value) =>
            ordinal(day_value),
        );
        return days.length
            ? `On the ${listText(days)} of each month at ${time}${suffix}`
            : `Custom schedule (${cron})`;
    }
    if (isCronMonthlyWeekday(day, day_of_week)) {
        const weeks = weekOfMonthLabels(day);
        const weekdays = parseCronList(day_of_week, 0, 6).map(
            (day_value) => WEEKDAY_NAMES[day_value],
        );
        return weeks.length && weekdays.length
            ? `On the ${listText(weeks)} ${listText(weekdays)} of each month at ${time}${suffix}`
            : `Custom schedule (${cron})`;
    }
    return `Custom schedule (${cron})`;
}

function schedulePeriod(schedule: Partial<SignagePlaylistSchedule>) {
    return Number.isFinite(schedule.play_period)
        ? schedule.play_period || 0
        : DEFAULT_PLAY_PERIOD_MINUTES;
}

export function playlistScheduleLabel(
    schedule: Partial<SignagePlaylistSchedule>,
) {
    const period = schedulePeriod(schedule);
    if (schedule.play_at) {
        const date = fromUnixTime(schedule.play_at);
        return `Plays once on ${date.toLocaleString()} for ${durationLabel(period)}`;
    }
    return `${humanizeCronSchedule(schedule.play_cron || '0 0 * * *', period)}${
        schedule.play_takeover ? ' · takeover' : ''
    }`;
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

function nextCronPlayDates(cron: string, count: number) {
    const result: Date[] = [];
    if (!cron?.trim()) return result;
    const date = new Date();
    date.setSeconds(0, 0);
    date.setMinutes(date.getMinutes() + 1);
    const end = new Date(date);
    end.setFullYear(end.getFullYear() + 2);
    while (date <= end && result.length < count) {
        if (doesCronMatchDate(cron, date)) result.push(new Date(date));
        date.setMinutes(date.getMinutes() + 1);
    }
    return result;
}

export function playlistScheduleNextPlayLabels(
    schedule: Partial<SignagePlaylistSchedule>,
    count = 5,
) {
    const period = schedulePeriod(schedule);
    if (schedule.play_at) {
        const start = fromUnixTime(schedule.play_at);
        const end = new Date(start);
        end.setMinutes(end.getMinutes() + Math.max(0, period || 0));
        if (period > 0) end.setSeconds(end.getSeconds() - 1);
        return end >= new Date()
            ? [formatPlayDateTimeRange(start, period)]
            : [];
    }
    return nextCronPlayDates(schedule.play_cron || '0 0 * * *', count).map(
        (start) => formatPlayDateTimeRange(start, period),
    );
}
