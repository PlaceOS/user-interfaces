import {
    cronDaySlots,
    cronParts,
    DEFAULT_PLAY_PERIOD_MINUTES,
    doesCronMatchDay,
    hasPlayableScheduleMask,
    isPlayOnceSchedule,
    mediaAnimation,
    parsePlayAtLocal,
} from '@placeos/common';
import {
    MediaAnimation,
    SignageMedia,
    type SignagePlaylistItemSchedule,
    type SignagePlaylistSchedule,
} from '@placeos/ts-client';
import { format, fromUnixTime, getUnixTime } from 'date-fns';
import { fromZonedTime, toZonedTime } from 'date-fns-tz';
import { nextCronDates } from './signage-cron.util';
import { uploadUrl } from './signage-url.util';

/** Format a date as a `play_at_local` value in the viewer's timezone. */
export function formatPlayAtLocal(date: Date | number) {
    return format(date, "yyyy-MM-dd'T'HH:mm:ss");
}

/**
 * Start of a play once schedule, or null for a recurring schedule.
 * The viewer's timezone resolves `play_at_local` values.
 */
export function playOnceStart(schedule: Partial<SignagePlaylistSchedule>) {
    if (schedule.play_at) return fromUnixTime(schedule.play_at);
    const local_time = parsePlayAtLocal(schedule.play_at_local);
    return local_time === null ? null : new Date(local_time);
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
    return item?.media_id ? uploadUrl(item.media_id) : item?.media_uri || '';
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

/** Saved item of a playlist with the media it plays */
export interface PlaylistItemEntry {
    /** Saved item id: a media id, or a schedule item id in a distribution playlist */
    id: string;
    media: SignageMedia;
}

type PlaylistMediaList = {
    items?: string[];
    media?: SignageMedia[];
    schedules?: SignagePlaylistItemSchedule[];
};

/**
 * Saved items of a playlist that resolve to media, in saved order. Items
 * whose media cannot be found are left out. The media and schedule lists
 * can still hold removed items, so only the saved items are shown.
 */
export function playlistItemEntries(
    list: PlaylistMediaList,
): PlaylistItemEntry[] {
    const media_by_id = new Map(
        (list.media || []).map((item) => [item.id, item]),
    );
    // Distribution playlist items reference schedule item ids, not media ids
    for (const schedule of list.schedules || []) {
        if (!schedule.media?.id) continue;
        if (schedule.id) media_by_id.set(schedule.id, schedule.media);
        if (schedule.item_id) {
            media_by_id.set(schedule.item_id, schedule.media);
        }
    }
    return (list.items || []).flatMap((id) => {
        const item = media_by_id.get(id);
        return item ? [{ id, media: item }] : [];
    });
}

export function playlistMediaItems(list: PlaylistMediaList) {
    return playlistItemEntries(list).map(({ media }) => media);
}

/**
 * Media id of each saved item, in saved order. Distribution playlist items
 * are schedule item ids, so they map to the media that they schedule.
 */
export function playlistItemMediaIds(list: {
    items?: string[];
    schedules?: SignagePlaylistItemSchedule[];
}) {
    const schedule_map = playlistItemScheduleMap(list);
    return (list.items || []).map((id) => {
        const schedule = schedule_map.get(id);
        return schedule?.media?.id || schedule?.item_id || id;
    });
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

export function playlistMediaIds(list: PlaylistMediaList) {
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

/**
 * Play length of a schedule in minutes. A schedule without one plays all
 * day. A length of 0 plays the playlist once.
 */
export function playPeriodMinutes(schedule: Partial<SignagePlaylistSchedule>) {
    return Number.isFinite(schedule.play_period)
        ? Math.max(0, schedule.play_period || 0)
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

export function playlistScheduleExpiryTooltip(
    schedule: Partial<SignagePlaylistSchedule>,
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
        schedules?: readonly Partial<SignagePlaylistSchedule>[];
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
        schedules?: readonly Partial<SignagePlaylistSchedule>[];
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

/**
 * Count cron instances from valid_from, before applying the repeating mask.
 * Cache complete days so successive preview times do not recount the past.
 * Call this filter only for timestamps that match the schedule.
 */
export function createScheduleMaskFilter(
    schedule: Partial<SignagePlaylistSchedule>,
    timezone?: string,
): (date: Date) => boolean {
    const mask = schedule.mask || '';
    const size = mask.length;
    if (!size) return () => true;
    if (!hasPlayableScheduleMask(schedule)) return () => false;
    const anchor = schedule.valid_from * 1000;
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
 * @param hour12 12 hour clock when true, 24 hour when false. The viewer's locale decides when not set.
 */
export function formatPlayDateTime(
    date: Date,
    timeZone?: string,
    hour12?: boolean,
) {
    return date.toLocaleString(undefined, {
        timeZone,
        hour12,
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
    schedule: Partial<SignagePlaylistSchedule>,
    count: number,
    now: number,
): PlaySession[] {
    const period = playPeriodMinutes(schedule);
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

/**
 * Time in milliseconds when the schedules next play, from `now`. A play that
 * is under way plays at `now`. Null when no play is left.
 */
export function playlistNextPlayTime(
    schedules: Partial<SignagePlaylistSchedule>[],
    now = Date.now(),
): number | null {
    let next = Infinity;
    for (const schedule of schedules) {
        // Search back one play period, so a play that is under way is found.
        // One-off plays already count until they end.
        const from = isPlayOnceSchedule(schedule)
            ? now
            : now - playPeriodMinutes(schedule) * 60_000;
        const [play] = nextSchedulePlays(schedule, 1, from);
        if (play) next = Math.min(next, Math.max(play.start.getTime(), now));
    }
    return Number.isFinite(next) ? next : null;
}

/** Time ranges of the next plays of all the schedules, earliest first. */
export function playlistNextPlayLabels(
    schedules: Partial<SignagePlaylistSchedule>[],
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
    schedule: Partial<SignagePlaylistSchedule>,
    count = 5,
) {
    return playlistNextPlayLabels([schedule], count);
}
