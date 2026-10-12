import {
    MediaAnimation,
    SignageMedia,
    type SignagePlaylistItemSchedule,
    type SignagePlaylistSchedule,
} from '@placeos/ts-client';
import { format, formatDistance, fromUnixTime, getUnixTime } from 'date-fns';
import { fromZonedTime, toZonedTime } from 'date-fns-tz';
import {
    cronDaySlots,
    cronParts,
    doesCronMatchDay,
    isCronMonthlyWeekday,
    nextCronDates,
    parseCronNumber,
    parseCronWeekdays,
} from './signage-cron.util';

/**
 * Schedule fields that are not in the ts-client type yet.
 * valid_from uses Unix seconds. Zero or omitted means no start limit.
 */
export type PlaylistSchedule = SignagePlaylistSchedule & {
    readonly valid_from?: number;
    /** Up to 128 binary characters, first occurrence first. Empty disables the mask. */
    readonly mask?: string;
    /**
     * One-off play time as a wall-clock time with no offset, e.g.
     * "2027-01-01T00:00:00". Each display plays it in its own timezone.
     * Do not set it with `play_at`.
     */
    readonly play_at_local?: string;
};

const PLAY_AT_LOCAL_PATTERN =
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})$/;

/** Whether the schedule plays once at `play_at` or `play_at_local`. */
export function isPlayOnceSchedule(schedule: Partial<PlaylistSchedule>) {
    return !!schedule.play_at || !!schedule.play_at_local;
}

/**
 * Parse a `play_at_local` value as a wall-clock time in the viewer's timezone.
 * Returns null when the value is not an ISO 8601 date time with no offset.
 */
export function parsePlayAtLocal(value: string | null | undefined) {
    const match = PLAY_AT_LOCAL_PATTERN.exec(value || '');
    if (!match) return null;
    const [year, month, day, hours, minutes, seconds] = match
        .slice(1)
        .map(Number);
    const date = new Date(year, month - 1, day, hours, minutes, seconds);
    // Reject values such as February 30 or 00:60 that roll over.
    return date.getDate() === day &&
        date.getMonth() === month - 1 &&
        minutes < 60 &&
        seconds < 60
        ? date
        : null;
}

/** Format a date as a `play_at_local` value in the viewer's timezone. */
export function formatPlayAtLocal(date: Date | number) {
    return format(date, "yyyy-MM-dd'T'HH:mm:ss");
}

/** Play once start time for labels. Local times note the display timezone. */
function playOnceLabel(schedule: Partial<PlaylistSchedule>) {
    const start = playOnceStart(schedule)?.toLocaleString() ?? '';
    return schedule.play_at ? start : `${start} display local time`;
}

/**
 * Start of a play once schedule, or null for a recurring schedule.
 * The viewer's timezone resolves `play_at_local` values.
 */
export function playOnceStart(schedule: Partial<PlaylistSchedule>) {
    if (schedule.play_at) return fromUnixTime(schedule.play_at);
    return parsePlayAtLocal(schedule.play_at_local);
}

/** Play period of a schedule that does not set one: the whole day */
export const DEFAULT_PLAY_PERIOD_MINUTES = 24 * 60;
const WEEKDAY_NAMES = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

/**
 * Animation as a `MediaAnimation` value. The API accepts animation names
 * but stores and returns the index of the name in `MediaAnimation`, e.g.
 * 2 for `cross_fade`. Names are kept as they are.
 * @returns The default animation for an index out of range or no value
 */
export function mediaAnimation(
    value: MediaAnimation | number | null | undefined,
): MediaAnimation {
    if (typeof value !== 'number') return value || MediaAnimation.Default;
    const animations = Object.values(MediaAnimation);
    return Number.isInteger(value) && value >= 0 && value < animations.length
        ? animations[value]
        : MediaAnimation.Default;
}

/**
 * Default animation of a playlist that ts-client loaded. The API returns
 * the index of the animation, and `SignagePlaylist` replaces a falsy value
 * with `cut`. So index 0 (`default`) arrives as the name `cut`, while a
 * saved Cut arrives as the index 1. Read the name `cut` as the default.
 *
 * The player treats the default as its own transition, not as a cut, so
 * the two must not be merged.
 */
export function playlistAnimation(playlist: {
    default_animation?: MediaAnimation | number;
}): MediaAnimation {
    const value = playlist.default_animation;
    return value === MediaAnimation.Cut
        ? MediaAnimation.Default
        : mediaAnimation(value);
}

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

/**
 * Apply a new order of the shown playlist items to the saved item ids.
 * Items that do not resolve to media are not shown, so they keep their
 * position instead of being dropped from the playlist.
 * @param item_ids Saved item ids of the playlist
 * @param ordered_ids Ids of the shown items, in the new order
 */
export function reorderPlaylistItemIds(
    item_ids: string[],
    ordered_ids: string[],
) {
    if (!item_ids.length) return [...ordered_ids];
    const shown_ids = new Set(ordered_ids);
    let next_index = 0;
    return item_ids.map((id) =>
        shown_ids.has(id) && next_index < ordered_ids.length
            ? ordered_ids[next_index++]
            : id,
    );
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

/** English ordinal of a number, e.g. "1st" or "12th" */
export function ordinal(value: number) {
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

/** Days of the month in a plain list such as "1,15". Empty for other values. */
export function parseCronMonthDays(value: string) {
    if (!value || value === '*') return [];
    const days = value.split(',').map((part) => parseCronNumber(part, 1, 31));
    return days.every((day) => day !== null)
        ? [...new Set(days)].sort((a, b) => a - b)
        : [];
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
        const weekdays = parseCronWeekdays(day_of_week).map(
            (day_value) => WEEKDAY_NAMES[day_value],
        );
        return weekdays.length
            ? `Every ${listText(weekdays)} at ${time}${suffix}`
            : `Custom schedule (${cron})`;
    }
    if (day !== '*' && day_of_week === '*') {
        const days = parseCronMonthDays(day).map((day_value) =>
            ordinal(day_value),
        );
        return days.length
            ? `On the ${listText(days)} of each month at ${time}${suffix}`
            : `Custom schedule (${cron})`;
    }
    if (isCronMonthlyWeekday(day, day_of_week)) {
        const weeks = weekOfMonthLabels(day);
        const weekdays = parseCronWeekdays(day_of_week).map(
            (day_value) => WEEKDAY_NAMES[day_value],
        );
        return weeks.length && weekdays.length
            ? `On the ${listText(weeks)} ${listText(weekdays)} of each month at ${time}${suffix}`
            : `Custom schedule (${cron})`;
    }
    return `Custom schedule (${cron})`;
}

function schedulePeriod(schedule: Partial<PlaylistSchedule>) {
    return Number.isFinite(schedule.play_period)
        ? schedule.play_period || 0
        : DEFAULT_PLAY_PERIOD_MINUTES;
}

/** Play time in milliseconds when no other value is set. Matches the signage player. */
const DEFAULT_PLAY_TIME_MS = 15 * 1000;

/**
 * Time in milliseconds to play each item once. Uses the same fallbacks as
 * the signage player: item play time, video length, playlist default, then
 * 15 seconds. Item schedules are not applied.
 * @param items Media items of the playlist
 * @param default_duration Playlist default play time in milliseconds
 */
export function playlistLoopDuration(
    items: Pick<SignageMedia, 'play_time' | 'video_length'>[],
    default_duration = 0,
) {
    return items.reduce(
        (total, item) =>
            total +
            (item.play_time ||
                item.video_length ||
                default_duration ||
                DEFAULT_PLAY_TIME_MS),
        0,
    );
}

export function playlistScheduleExpiryLabel(
    schedule: Partial<PlaylistSchedule>,
    now = Date.now(),
) {
    if (!schedule.valid_until) return '';
    const expiry = fromUnixTime(schedule.valid_until);
    const distance = formatDistance(expiry, new Date(now));
    const relative_time =
        expiry.getTime() >= now ? `${distance} from now` : `${distance} ago`;
    return `until ${relative_time}`;
}

export function playlistScheduleExpiryTooltip(
    schedule: Partial<PlaylistSchedule>,
) {
    return schedule.valid_until
        ? fromUnixTime(schedule.valid_until).toLocaleString()
        : '';
}

/**
 * When a playlist stopped playing, in Unix seconds: its own end date, or the
 * last schedule end date when every schedule has ended. 0 while it can play.
 */
export function playlistExpiredAt(
    playlist: {
        valid_until?: number;
        schedules?: readonly Partial<PlaylistSchedule>[];
    },
    now = Date.now(),
) {
    if (playlist.valid_until && playlist.valid_until * 1000 < now) {
        return playlist.valid_until;
    }
    const ends = (playlist.schedules || []).map(
        ({ valid_until }) => valid_until || 0,
    );
    if (!ends.length || ends.some((end) => !end || end * 1000 >= now)) {
        return 0;
    }
    return Math.max(...ends);
}

/** Status badge of a playlist in a list. Null when it needs no badge. */
export type PlaylistStatus =
    | 'expired'
    | 'pending'
    | 'awaiting_approval'
    | 'awaiting_review'
    | null;

/**
 * Status of a playlist for list badges. Expiry uses `playlistExpiredAt`, so
 * lists agree with the content report.
 * @param approvals Approval state by playlist ID. A playlist that is not in
 * it has no approval state, e.g. it does not need approval.
 * @param requests Whether approval was requested, by playlist ID
 */
export function playlistStatus(
    playlist: {
        id: string;
        valid_from?: number;
        valid_until?: number;
        schedules?: readonly Partial<PlaylistSchedule>[];
    },
    approvals: Record<string, boolean>,
    requests: Record<string, boolean>,
    now = Date.now(),
): PlaylistStatus {
    if (playlistExpiredAt(playlist, now)) return 'expired';
    if (playlist.valid_from && playlist.valid_from * 1000 > now) {
        return 'pending';
    }
    if (!(playlist.id in approvals) || approvals[playlist.id]) return null;
    return requests[playlist.id] ? 'awaiting_review' : 'awaiting_approval';
}

export function playlistScheduleLabel(schedule: Partial<PlaylistSchedule>) {
    const period = schedulePeriod(schedule);
    const expiry = playlistScheduleExpiryLabel(schedule);
    const suffix = [
        schedule.play_takeover ? 'takeover' : '',
        expiry,
        schedule.mask
            ? `mask ${schedule.mask}, repeats every ${schedule.mask.length} instances`
            : '',
    ]
        .filter((_) => _)
        .join(' · ');
    if (isPlayOnceSchedule(schedule)) {
        return `Plays once on ${playOnceLabel(schedule)} for ${durationLabel(period)}${
            suffix ? ` · ${suffix}` : ''
        }`;
    }
    return `${humanizeCronSchedule(schedule.play_cron || '0 0 * * *', period)}${
        suffix ? ` · ${suffix}` : ''
    }`;
}

/** Validate an active mask without changing leading zeros or whitespace. */
export function isValidScheduleMask(mask: string) {
    return mask.length > 0 && mask.length <= 128 && !/[^01]/.test(mask);
}

/** Whether the mask can select any instances in its repeat cycle. */
export function hasPlayableScheduleMask(schedule: Partial<PlaylistSchedule>) {
    const mask = schedule.mask || '';
    return (
        !mask ||
        (isValidScheduleMask(mask) &&
            !!schedule.valid_from &&
            mask.includes('1'))
    );
}

/**
 * Count cron instances from valid_from, before applying the repeating mask.
 * Cache complete days so successive preview times do not recount the past.
 * Call this filter only for timestamps that match the schedule.
 */
export function createScheduleMaskFilter(
    schedule: Partial<PlaylistSchedule>,
    timezone?: string,
): (date: Date) => boolean {
    const mask = schedule.mask || '';
    const size = mask.length;
    if (!size) return () => true;
    if (!hasPlayableScheduleMask(schedule)) return () => false;
    const anchor = schedule.valid_from * 1000;
    if (!Number.isFinite(new Date(anchor).getTime())) return () => false;
    if (isPlayOnceSchedule(schedule))
        return (date) => date.getTime() >= anchor && mask[0] === '1';
    const parts = cronParts(schedule.play_cron || '0 0 * * *');
    if (!parts) return () => false;
    const slots = cronDaySlots(parts);
    if (!slots.length) return () => false;
    const wallTime = (date: Date) =>
        timezone ? toZonedTime(date, timezone) : new Date(date);
    const instant = (date: Date) =>
        timezone ? fromZonedTime(date, timezone) : new Date(date);
    const first_day = wallTime(new Date(anchor));
    first_day.setHours(0, 0, 0, 0);
    let cursor = new Date(first_day);
    let preceding = 0;
    let cached_day = NaN;
    let cached_times: number[] = [];
    const countBefore = (day: Date, before: number) => {
        if (!doesCronMatchDay(parts, day)) return 0;
        const next_day = new Date(day);
        next_day.setDate(next_day.getDate() + 1);
        const start = instant(day).getTime();
        const end = instant(next_day).getTime();
        // Normal complete days need no per-minute timezone conversion.
        if (start >= anchor && end <= before && end - start === 86_400_000)
            return slots.length;
        if (cached_day !== day.getTime()) {
            cached_day = day.getTime();
            cached_times = [];
            for (const slot of slots) {
                const wall = new Date(day);
                wall.setHours(0, slot, 0, 0);
                const time = instant(wall);
                if (
                    time.getTime() >= anchor &&
                    wallTime(time).getTime() === wall.getTime()
                ) {
                    cached_times.push(time.getTime());
                }
            }
            cached_times.sort((left, right) => left - right);
        }
        let lower = 0;
        let upper = cached_times.length;
        while (lower < upper) {
            const middle = Math.floor((lower + upper) / 2);
            if (cached_times[middle] < before) lower = middle + 1;
            else upper = middle;
        }
        return lower;
    };
    return (date) => {
        const time = date.getTime();
        if (!Number.isFinite(time) || time < anchor) return false;
        const day = wallTime(date);
        day.setHours(0, 0, 0, 0);
        if (day < cursor) {
            cursor = new Date(first_day);
            preceding = 0;
        }
        for (; cursor < day; cursor.setDate(cursor.getDate() + 1)) {
            preceding = (preceding + countBefore(cursor, Infinity)) % size;
        }
        const index = (preceding + countBefore(day, time)) % size;
        return mask[index] === '1';
    };
}

/**
 * Date and time of a play, e.g. "Mon, Jan 5, 9:00 AM".
 * @param timeZone IANA timezone. The viewer's timezone when not set.
 */
export function formatPlayDateTime(date: Date, timeZone?: string) {
    return date.toLocaleString(undefined, {
        timeZone,
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
    });
}

function formatPlayTime(date: Date, timeZone?: string) {
    return date.toLocaleTimeString(undefined, {
        timeZone,
        hour: 'numeric',
        minute: '2-digit',
    });
}

/**
 * Last second of a play. Adds elapsed time, as the player does, so a play
 * across a daylight saving change keeps its length. A play period of 0 plays
 * the playlist once, so it ends at its start.
 */
export function playEndTime(start: Date, duration_minutes: number) {
    const duration = Math.max(0, duration_minutes || 0);
    return new Date(
        start.getTime() + duration * 60_000 - (duration > 0 ? 1000 : 0),
    );
}

/**
 * Time range of a play. The end shows only its time when the play ends on
 * the day it starts.
 * @param timeZone IANA timezone. The viewer's timezone when not set.
 */
export function formatPlayDateTimeRange(
    start: Date,
    duration_minutes: number,
    timeZone?: string,
) {
    const end = playEndTime(start, duration_minutes);
    const day = (date: Date) =>
        (timeZone ? toZonedTime(date, timeZone) : date).toDateString();
    const end_text =
        day(start) === day(end)
            ? formatPlayTime(end, timeZone)
            : formatPlayDateTime(end, timeZone);
    return `${formatPlayDateTime(start, timeZone)} – ${end_text}`;
}

interface PlaySession {
    start: Date;
    period: number;
}

/** Next plays of one schedule, inside its validity window and mask. */
function nextSchedulePlays(
    schedule: Partial<PlaylistSchedule>,
    count: number,
    now: number,
): PlaySession[] {
    const period = schedulePeriod(schedule);
    if (isPlayOnceSchedule(schedule)) {
        const start = playOnceStart(schedule);
        if (!start) return [];
        const end = playEndTime(start, period);
        const play_at = getUnixTime(start);
        const outside_valid_window =
            (!!schedule.valid_until && play_at > schedule.valid_until) ||
            (!!schedule.valid_from && play_at < schedule.valid_from);
        return end.getTime() >= now &&
            !outside_valid_window &&
            createScheduleMaskFilter(schedule)(start)
            ? [{ start, period }]
            : [];
    }
    if (!hasPlayableScheduleMask(schedule)) return [];
    return nextCronDates(schedule.play_cron || '0 0 * * *', {
        from: Math.max(now + 1, (schedule.valid_from || 0) * 1000),
        until: schedule.valid_until ? schedule.valid_until * 1000 : undefined,
        count,
        allows: createScheduleMaskFilter(schedule),
    }).map((start) => ({ start, period }));
}

/** Time ranges of the next plays of all the schedules, earliest first. */
export function playlistNextPlayLabels(
    schedules: Partial<PlaylistSchedule>[],
    count = 5,
    now = Date.now(),
) {
    return schedules
        .flatMap((schedule) => nextSchedulePlays(schedule, count, now))
        .sort((a, b) => a.start.getTime() - b.start.getTime())
        .slice(0, count)
        .map(({ start, period }) => formatPlayDateTimeRange(start, period));
}

/** Time ranges of the next plays of one schedule. */
export function playlistScheduleNextPlayLabels(
    schedule: Partial<PlaylistSchedule>,
    count = 5,
) {
    return playlistNextPlayLabels([schedule], count);
}
