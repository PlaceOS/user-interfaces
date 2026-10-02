import { i18n } from '@placeos/common';
import { SignagePlaylist } from '@placeos/ts-client';
import { addDays, fromUnixTime, isSameDay, startOfDay } from 'date-fns';
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
export const MIN_VISIBLE_MINUTES = 15;
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

function playlistSchedules(
    playlist: SignagePlaylist,
): Partial<PlaylistSchedule>[] {
    const legacy_playlist = playlist as SignagePlaylist & {
        play_at?: number;
        play_cron?: string;
        play_period?: number;
        play_takeover?: boolean;
    };
    if (playlist.schedules?.length) return playlist.schedules;
    return [
        {
            play_at: legacy_playlist.play_at,
            play_cron: legacy_playlist.play_cron || '0 0 * * *',
            play_period:
                legacy_playlist.play_period ?? DEFAULT_PLAYLIST_DURATION,
            play_takeover: !!legacy_playlist.play_takeover,
        },
    ];
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

function isScheduleValidAt(schedule: Partial<PlaylistSchedule>, date: Date) {
    const time = date.getTime();
    return (
        (!schedule.valid_from || time >= schedule.valid_from * 1000) &&
        (!schedule.valid_until || time <= schedule.valid_until * 1000)
    );
}

function isDayInRange(
    day: Date,
    valid_from?: number,
    valid_until?: number,
): boolean {
    const day_start = startOfDay(day).getTime();
    if (valid_from) {
        const from_start = startOfDay(fromUnixTime(valid_from)).getTime();
        if (day_start < from_start) return false;
    }
    if (valid_until) {
        const until_start = startOfDay(fromUnixTime(valid_until)).getTime();
        if (day_start > until_start) return false;
    }
    return true;
}

function getCronBlocksForDay(
    parts: readonly string[],
    schedule: Partial<PlaylistSchedule>,
): ScheduleBlockBase[] {
    const duration = playPeriodMinutes(schedule);
    return cronDaySlots(parts).map((start_minutes) => ({
        start_minutes,
        duration_minutes: duration,
        all_day: start_minutes === 0 && duration >= MINUTES_PER_DAY,
        label: duration
            ? formatTimeRange(start_minutes, duration)
            : i18n('SIGNAGE_MANAGER.PLAY_THROUGH_ONCE'),
    }));
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
    const { valid_from, valid_until } = playlist;
    const schedules = playlistSchedules(playlist).map((schedule) => ({
        schedule,
        allows: createScheduleMaskFilter(schedule),
    }));

    for (let index = 0; index < days.length; index++) {
        const day = days[index];
        if (!isDayInRange(day, valid_from, valid_until)) continue;

        for (const { schedule, allows } of schedules) {
            const play_cron = schedule.play_cron?.trim() || '0 0 * * *';
            const play_period = playPeriodMinutes(schedule);

            if (isPlayOnceSchedule(schedule)) {
                const at_date = playOnceStart(schedule);
                if (
                    !at_date ||
                    !isSameDay(day, at_date) ||
                    !isScheduleValidAt(schedule, at_date) ||
                    !allows(at_date)
                ) {
                    continue;
                }
                const start_minutes =
                    at_date.getHours() * 60 + at_date.getMinutes();
                const duration_minutes = play_period;
                blocks.push({
                    playlist,
                    day_index: index,
                    start_minutes,
                    duration_minutes,
                    all_day: false,
                    takeover: !!schedule.play_takeover,
                    bg_color: colour.bg,
                    text_color: colour.text,
                    label: formatTimeRange(start_minutes, duration_minutes),
                    source_label,
                    source_type,
                });
                continue;
            }

            const parts = cronParts(play_cron);
            if (!parts || !doesCronMatchDay(parts, day)) continue;
            const cron_blocks = getCronBlocksForDay(parts, schedule);
            for (const block of cron_blocks) {
                const starts_at = new Date(day);
                starts_at.setHours(0, block.start_minutes, 0, 0);
                if (
                    !isScheduleValidAt(schedule, starts_at) ||
                    !allows(starts_at)
                )
                    continue;
                blocks.push({
                    ...block,
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
    if (start < 0 && end <= 0) return [];
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
