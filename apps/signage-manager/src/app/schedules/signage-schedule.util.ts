import { i18n } from '@placeos/common';
import { SignagePlaylist } from '@placeos/ts-client';
import {
    addDays,
    differenceInCalendarDays,
    fromUnixTime,
    isSameDay,
    startOfDay,
} from 'date-fns';
import {
    cronDaySlots,
    cronParts,
    doesCronMatchDay,
} from '../signage-cron.util';
import {
    createScheduleMaskFilter,
    isPlayOnceSchedule,
    type PlaylistSchedule,
    playOnceStart,
} from '../signage-playlist.util';

const BLOCK_PALETTE = [
    { bg: '#dbeafe', text: '#1e40af' },
    { bg: '#d1fae5', text: '#065f46' },
    { bg: '#fef3c7', text: '#92400e' },
    { bg: '#fee2e2', text: '#991b1b' },
    { bg: '#ede9fe', text: '#5b21b6' },
    { bg: '#fce7f3', text: '#9d174d' },
    { bg: '#cffafe', text: '#155e75' },
];

export const DAY_COUNT = 7;
export const MINUTES_PER_DAY = 1440;
/** Shortest block length that the timeline shows, so short plays stay visible */
const MIN_VISIBLE_MINUTES = 15;
const DEFAULT_PLAYLIST_DURATION = 24 * 60;

export interface ScheduleBlock {
    playlist: SignagePlaylist;
    day_index: number;
    start_minutes: number;
    duration_minutes: number;
    all_day: boolean;
    /** Whether the block comes from a takeover schedule */
    takeover: boolean;
    bg_color: string;
    text_color: string;
    label: string;
    source_type?: 'display' | 'zone';
    source_label?: string;
}

export interface ScheduleAssignment {
    playlist: SignagePlaylist;
    source_type?: 'display' | 'zone';
    source_label?: string;
}

/** A block on the one-day timeline */
export interface TimelineBlock extends ScheduleBlock {
    /** Lane in the row, so blocks that overlap do not cover each other */
    lane: number;
}

export interface ScheduleTimelineRow {
    id: string;
    name: string;
    subtitle: string;
    icon: string;
    route: string[];
    blocks: TimelineBlock[];
    /** Number of lanes that the blocks use. At least 1. */
    lane_count: number;
    search_index: string;
    signage_last_seen?: number;
}

interface ScheduleBlockBase {
    start_minutes: number;
    duration_minutes: number;
    all_day: boolean;
    label: string;
}

export interface ScheduleItem {
    id: string;
    name?: string;
    display_name?: string;
    playlists?: readonly string[];
    zones?: readonly string[];
}

/** Schedule of a playlist with no schedules */
const ALL_DAY_SCHEDULE: Partial<PlaylistSchedule> = {
    play_cron: '0 0 * * *',
    play_period: MINUTES_PER_DAY,
};

/**
 * Schedules of a playlist. The player plays a playlist with no schedules all
 * the time as normal content, so it gets one all day schedule that is not a
 * takeover.
 */
export function playlistSchedules(
    playlist: Pick<SignagePlaylist, 'schedules'>,
): Partial<PlaylistSchedule>[] {
    return playlist.schedules?.length ? playlist.schedules : [ALL_DAY_SCHEDULE];
}

/** Whether any schedule of the playlist is a takeover */
export function hasTakeoverSchedule(playlist: SignagePlaylist) {
    return playlistSchedules(playlist).some(
        (schedule) => !!schedule.play_takeover,
    );
}

function playPeriodMinutes(schedule: Partial<PlaylistSchedule>) {
    return Number.isFinite(schedule.play_period)
        ? Math.max(0, schedule.play_period || 0)
        : DEFAULT_PLAYLIST_DURATION;
}

function formatTime(minutes: number): string {
    const hours = Math.floor(minutes / 60) % 24;
    const mins = minutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
}

function formatTimeRange(
    start_minutes: number,
    duration_minutes: number,
): string {
    return `${formatTime(start_minutes)} – ${formatTime(start_minutes + duration_minutes)}`;
}

/** Label and all day flag of a block. A length of 0 plays the playlist once. */
function blockBase(
    start_minutes: number,
    duration_minutes: number,
): ScheduleBlockBase {
    return {
        start_minutes,
        duration_minutes,
        all_day: start_minutes === 0 && duration_minutes >= MINUTES_PER_DAY,
        label: duration_minutes
            ? formatTimeRange(start_minutes, duration_minutes)
            : i18n('SIGNAGE_MANAGER.PLAY_THROUGH_ONCE'),
    };
}

/** Clock minutes of a date from the start of `day`. Later days add 1440 each. */
function clockMinutes(day: Date, date: Date) {
    return (
        differenceInCalendarDays(date, day) * MINUTES_PER_DAY +
        date.getHours() * 60 +
        date.getMinutes()
    );
}

/** Earliest of the end dates that are set, in milliseconds */
function earliestEnd(...values: (number | undefined)[]) {
    return Math.min(
        Infinity,
        ...values
            .filter((value): value is number => !!value)
            .map((value) => value * 1000),
    );
}

/**
 * Part of a run that plays, in clock minutes from the start of `day`, or
 * null when nothing plays. Matches the player: a run starts only inside the
 * schedule dates and before the playlist ends. It plays only after the
 * playlist starts and until the schedule or the playlist ends.
 */
function playedRun(
    day: Date,
    starts_at: Date,
    duration: number,
    schedule: Partial<PlaylistSchedule>,
    playlist: Pick<SignagePlaylist, 'valid_from' | 'valid_until'>,
) {
    const time = starts_at.getTime();
    const ends_at = earliestEnd(schedule.valid_until, playlist.valid_until);
    if (time < (schedule.valid_from || 0) * 1000 || time > ends_at) {
        return null;
    }
    const start = clockMinutes(day, starts_at);
    const from = playlist.valid_from
        ? Math.max(start, clockMinutes(day, fromUnixTime(playlist.valid_from)))
        : start;
    // A single pass has no length, so it plays only when it starts in time
    if (!duration) return from === start ? blockBase(start, 0) : null;
    // The player ends a run after the elapsed play length, so a run that
    // spans a skipped clock hour ends an hour later on the clock. The
    // timeline shows a repeated clock hour once, so a run is never shorter
    // on the clock than its length.
    const run_end = time + duration * 60_000;
    let until = Math.max(
        start + duration,
        clockMinutes(day, new Date(run_end)),
    );
    if (ends_at < run_end) {
        until = Math.min(until, clockMinutes(day, new Date(ends_at)));
    }
    return until > from ? blockBase(from, until - from) : null;
}

/** Start times of a schedule on a day, before the dates and mask apply */
function scheduleStarts(
    schedule: Partial<PlaylistSchedule>,
    slots: readonly number[],
    parts: readonly string[] | null,
    day: Date,
): Date[] {
    if (isPlayOnceSchedule(schedule)) {
        const at_date = playOnceStart(schedule);
        return at_date && isSameDay(day, at_date) ? [at_date] : [];
    }
    if (!parts || !doesCronMatchDay(parts, day)) return [];
    return slots
        .map((slot) => {
            const starts_at = new Date(day);
            starts_at.setHours(0, slot, 0, 0);
            return starts_at;
        })
        .filter(
            // A clock time that a daylight saving change skips never plays.
            // A repeated time plays once, at the first occurrence, which is
            // the time that Date picks.
            (starts_at, index) =>
                starts_at.getHours() * 60 + starts_at.getMinutes() ===
                slots[index],
        );
}

export function buildScheduleBlocks(
    assignments: ScheduleAssignment[],
    days: Date[],
): ScheduleBlock[] {
    return assignments.flatMap((assignment, index) =>
        generateScheduleBlocks(assignment, days, index),
    );
}

function generateScheduleBlocks(
    assignment: ScheduleAssignment,
    days: Date[],
    palette_index: number,
): ScheduleBlock[] {
    const { playlist, source_label, source_type } = assignment;
    const colour = BLOCK_PALETTE[palette_index % BLOCK_PALETTE.length];
    const blocks: ScheduleBlock[] = [];
    const schedules = playlistSchedules(playlist).map((schedule) => {
        const parts = cronParts(schedule.play_cron?.trim() || '0 0 * * *');
        return {
            schedule,
            parts,
            slots: parts ? cronDaySlots(parts) : [],
            duration: playPeriodMinutes(schedule),
            allows: createScheduleMaskFilter(schedule),
        };
    });

    for (let index = 0; index < days.length; index++) {
        const day = startOfDay(days[index]);
        for (const { schedule, parts, slots, duration, allows } of schedules) {
            for (const starts_at of scheduleStarts(
                schedule,
                slots,
                parts,
                day,
            )) {
                if (!allows(starts_at)) continue;
                const run = playedRun(
                    day,
                    starts_at,
                    duration,
                    schedule,
                    playlist,
                );
                if (!run) continue;
                blocks.push({
                    ...run,
                    playlist,
                    day_index: index,
                    takeover: !!schedule.play_takeover,
                    bg_color: colour.bg,
                    text_color: colour.text,
                    source_label,
                    source_type,
                });
            }
        }
    }

    return blocks;
}

/** Minutes that a timeline block covers on screen */
export function visibleMinutes(block: ScheduleBlock) {
    return block.all_day
        ? MINUTES_PER_DAY
        : Math.max(
              MIN_VISIBLE_MINUTES,
              Math.min(
                  block.duration_minutes,
                  MINUTES_PER_DAY - block.start_minutes,
              ),
          );
}

/** Part of a block on the second day of the list, as minutes of that day */
function clipToDay(block: ScheduleBlock): ScheduleBlock[] {
    const start = (block.day_index - 1) * MINUTES_PER_DAY + block.start_minutes;
    const end = start + block.duration_minutes;
    // A block can start on a later day when the playlist starts late
    if (start < 0 ? end <= 0 : start >= MINUTES_PER_DAY) return [];
    const visible_start = Math.max(0, start);
    const visible_end = Math.min(MINUTES_PER_DAY, end);
    return [
        {
            ...block,
            start_minutes: visible_start,
            duration_minutes: visible_end - visible_start,
            all_day: visible_start === 0 && visible_end >= MINUTES_PER_DAY,
        },
    ];
}

/** Join touching or overlapping blocks of one playlist. Blocks must be in start order. */
function mergePlaylistBlocks(blocks: ScheduleBlock[]) {
    const merged: ScheduleBlock[] = [];
    const last_blocks = new Map<string, ScheduleBlock>();
    // A block with no length plays the playlist once, so give it a minute.
    const end = (block: ScheduleBlock) =>
        block.start_minutes + Math.max(1, block.duration_minutes);
    for (const block of blocks) {
        const key = `${block.playlist.id}|${block.takeover}`;
        const last = last_blocks.get(key);
        if (last && block.start_minutes <= end(last)) {
            const last_end = Math.min(
                MINUTES_PER_DAY,
                Math.max(end(last), end(block)),
            );
            last.duration_minutes = last_end - last.start_minutes;
            last.all_day =
                last.start_minutes === 0 && last_end >= MINUTES_PER_DAY;
            last.label = formatTimeRange(
                last.start_minutes,
                last.duration_minutes,
            );
            continue;
        }
        const copy = { ...block };
        merged.push(copy);
        last_blocks.set(key, copy);
    }
    return merged;
}

/**
 * Blocks for one day of the timeline. Adds the part of the previous day's
 * blocks that runs past midnight and cuts blocks at midnight. Joins touching
 * blocks of one playlist, then puts blocks that overlap on screen in
 * separate lanes.
 */
export function buildDayTimelineBlocks(
    assignments: ScheduleAssignment[],
    day: Date,
): { blocks: TimelineBlock[]; lane_count: number } {
    const selected_day = startOfDay(day);
    const blocks = buildScheduleBlocks(assignments, [
        addDays(selected_day, -1),
        selected_day,
    ])
        .flatMap(clipToDay)
        .sort(
            (left, right) =>
                left.start_minutes - right.start_minutes ||
                left.playlist.name.localeCompare(right.playlist.name),
        );
    // Greedy lanes: each block takes the first lane that is free at its start.
    const lane_ends: number[] = [];
    const timeline_blocks = mergePlaylistBlocks(blocks).map((block) => {
        const block_end = block.start_minutes + visibleMinutes(block);
        let lane = lane_ends.findIndex(
            (lane_end) => lane_end <= block.start_minutes,
        );
        if (lane < 0) lane = lane_ends.push(block_end) - 1;
        else lane_ends[lane] = block_end;
        return { ...block, lane };
    });
    return {
        blocks: timeline_blocks,
        lane_count: Math.max(1, lane_ends.length),
    };
}

export function buildDisplayScheduleAssignments(
    display: ScheduleItem,
    zones: ScheduleItem[],
    playlists: SignagePlaylist[],
): ScheduleAssignment[] {
    const playlist_map = new Map(
        playlists.map((playlist) => [playlist.id, playlist]),
    );
    const assignments: ScheduleAssignment[] = [];
    const seen_playlist_ids = new Set<string>();

    for (const playlist_id of display.playlists || []) {
        const playlist = playlist_map.get(playlist_id);
        if (!playlist || seen_playlist_ids.has(playlist.id)) continue;
        seen_playlist_ids.add(playlist.id);
        assignments.push({
            playlist,
            source_type: 'display',
            source_label: i18n('SIGNAGE_MANAGER.SOURCE_DISPLAY'),
        });
    }

    const zone_playlist_sources: Record<string, string[]> = {};
    for (const zone of zones.filter((item) =>
        display.zones?.includes(item.id),
    )) {
        for (const playlist_id of zone.playlists || []) {
            if (!zone_playlist_sources[playlist_id]) {
                zone_playlist_sources[playlist_id] = [];
            }
            zone_playlist_sources[playlist_id].push(
                zone.display_name || zone.name || i18n('RESOURCE.ZONE'),
            );
        }
    }

    for (const [playlist_id, labels] of Object.entries(zone_playlist_sources)) {
        const playlist = playlist_map.get(playlist_id);
        if (!playlist || seen_playlist_ids.has(playlist.id)) continue;
        seen_playlist_ids.add(playlist.id);
        assignments.push({
            playlist,
            source_type: 'zone',
            source_label:
                labels.length > 1
                    ? i18n(
                          'SIGNAGE_MANAGER.ZONE_COUNT_LABEL',
                          {
                              count: labels.length,
                          },
                          labels.length,
                      )
                    : labels[0],
        });
    }

    return assignments.sort((left, right) =>
        left.playlist.name.localeCompare(right.playlist.name),
    );
}

export function buildZoneScheduleAssignments(
    zone: ScheduleItem,
    playlists: SignagePlaylist[],
): ScheduleAssignment[] {
    const playlist_map = new Map(
        playlists.map((playlist) => [playlist.id, playlist]),
    );
    return (zone.playlists || [])
        .map((playlist_id) => playlist_map.get(playlist_id))
        .filter((playlist): playlist is SignagePlaylist => !!playlist)
        .sort((left, right) => left.name.localeCompare(right.name))
        .map((playlist) => ({
            playlist,
            source_type: 'zone' as const,
            source_label:
                zone.display_name || zone.name || i18n('RESOURCE.ZONE'),
        }));
}
