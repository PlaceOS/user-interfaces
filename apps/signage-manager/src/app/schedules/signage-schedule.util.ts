import { SignagePlaylist } from '@placeos/ts-client';
import { isSameDay, startOfDay } from 'date-fns';

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
const DEFAULT_PLAYLIST_DURATION = 60;
export const DAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export interface ScheduleBlock {
    playlist: SignagePlaylist;
    day_index: number;
    start_minutes: number;
    duration_minutes: number;
    all_day: boolean;
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

export interface ScheduleTimelineRow {
    id: string;
    name: string;
    description: string;
    subtitle: string;
    icon: string;
    route: string[];
    blocks: ScheduleBlock[];
    search_index: string;
    updated_at: number;
}

interface ScheduleBlockBase {
    start_minutes: number;
    duration_minutes: number;
    all_day: boolean;
    label: string;
}

interface ScheduleItem {
    id: string;
    name?: string;
    display_name?: string;
    playlists?: string[];
    zones?: string[];
}

function matchesCronPart(value: number, cron_part: string): boolean {
    if (cron_part === '*') return true;
    if (cron_part.includes(',')) {
        return cron_part
            .split(',')
            .some((item) => matchesCronPart(value, item));
    }
    if (cron_part.includes('/')) {
        const [base, step] = cron_part.split('/');
        const step_value = Number(step);
        if (!step_value) return false;
        if (base === '*') return value % step_value === 0;
        if (base.includes('-')) {
            const [start, end] = base.split('-').map(Number);
            if (value < start || value > end) return false;
            return (value - start) % step_value === 0;
        }
    }
    if (cron_part.includes('-')) {
        const [start, end] = cron_part.split('-').map(Number);
        return value >= start && value <= end;
    }
    return Number(cron_part) === value;
}

function parseDurationMinutes(hhmm: string): number {
    const [hours, minutes] = hhmm.split(':').map(Number);
    return (hours || 0) * 60 + (minutes || 0);
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

function parsePlayAt(play_at: string | number): Date | null {
    if (!play_at || play_at === '0') return null;
    const numeric_value = Number(play_at);
    if (!Number.isNaN(numeric_value) && numeric_value > 0) {
        return new Date(
            numeric_value > 1_000_000_000_000
                ? numeric_value
                : numeric_value * 1000,
        );
    }
    const date = new Date(play_at);
    return Number.isNaN(date.getTime()) ? null : date;
}

function isDayInRange(
    day: Date,
    valid_from?: number,
    valid_until?: number,
): boolean {
    const day_start = startOfDay(day).getTime();
    if (valid_from) {
        const from_start = startOfDay(new Date(valid_from * 1000)).getTime();
        if (day_start < from_start) return false;
    }
    if (valid_until) {
        const until_start = startOfDay(new Date(valid_until * 1000)).getTime();
        if (day_start > until_start) return false;
    }
    return true;
}

function getCronBlocksForDay(
    cron: string,
    play_hours: string,
): ScheduleBlockBase[] {
    const parts = cron.trim().split(/\s+/);
    if (parts.length !== 5) return [];
    const [minute_part, hour_part] = parts;
    const duration = play_hours
        ? parseDurationMinutes(play_hours)
        : DEFAULT_PLAYLIST_DURATION;
    const blocks: ScheduleBlockBase[] = [];
    for (let hours = 0; hours < 24; hours++) {
        if (!matchesCronPart(hours, hour_part)) continue;
        for (let minutes = 0; minutes < 60; minutes++) {
            if (!matchesCronPart(minutes, minute_part)) continue;
            const start_minutes = hours * 60 + minutes;
            blocks.push({
                start_minutes,
                duration_minutes: duration,
                all_day: false,
                label: formatTimeRange(start_minutes, duration),
            });
        }
    }
    return blocks;
}

function doesCronMatchDay(cron: string, day: Date): boolean {
    const parts = cron.trim().split(/\s+/);
    if (parts.length !== 5) return false;
    const [, , dom_part, month_part, dow_part] = parts;
    const month = day.getMonth() + 1;
    const day_of_month = day.getDate();
    const day_of_week = day.getDay();
    if (!matchesCronPart(month, month_part)) return false;
    if (dom_part === '*' && dow_part === '*') return true;
    if (dom_part !== '*' && dow_part === '*') {
        return matchesCronPart(day_of_month, dom_part);
    }
    if (dom_part === '*' && dow_part !== '*') {
        return matchesCronPart(day_of_week, dow_part);
    }
    return (
        matchesCronPart(day_of_month, dom_part) ||
        matchesCronPart(day_of_week, dow_part)
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
    const { play_hours, play_at, play_cron, valid_from, valid_until } =
        playlist;
    const has_cron = !!play_cron?.trim();
    const has_at = !!play_at && play_at !== '0';
    const has_hours = !!play_hours?.trim();
    const is_range = has_hours && play_hours.includes('-');

    for (let index = 0; index < days.length; index++) {
        const day = days[index];
        if (!isDayInRange(day, valid_from, valid_until)) continue;

        if (has_cron) {
            if (!doesCronMatchDay(play_cron, day)) continue;
            const cron_blocks = getCronBlocksForDay(play_cron, play_hours);
            for (const block of cron_blocks) {
                blocks.push({
                    ...block,
                    playlist,
                    day_index: index,
                    bg_color: colour.bg,
                    text_color: colour.text,
                    source_label,
                    source_type,
                });
            }
            continue;
        }

        if (has_at) {
            const at_date = parsePlayAt(play_at);
            if (!at_date || !isSameDay(day, at_date)) continue;
            const start_minutes =
                at_date.getHours() * 60 + at_date.getMinutes();
            const duration_minutes = has_hours
                ? parseDurationMinutes(play_hours)
                : DEFAULT_PLAYLIST_DURATION;
            blocks.push({
                playlist,
                day_index: index,
                start_minutes,
                duration_minutes,
                all_day: false,
                bg_color: colour.bg,
                text_color: colour.text,
                label: formatTimeRange(start_minutes, duration_minutes),
                source_label,
                source_type,
            });
            continue;
        }

        if (is_range) {
            const [start_str, end_str] = play_hours.split('-');
            const start_minutes = parseDurationMinutes(start_str);
            const end_minutes = parseDurationMinutes(end_str);
            const duration_minutes =
                end_minutes > start_minutes
                    ? end_minutes - start_minutes
                    : MINUTES_PER_DAY - start_minutes + end_minutes;
            blocks.push({
                playlist,
                day_index: index,
                start_minutes,
                duration_minutes,
                all_day: false,
                bg_color: colour.bg,
                text_color: colour.text,
                label: `${start_str} – ${end_str}`,
                source_label,
                source_type,
            });
            continue;
        }

        blocks.push({
            playlist,
            day_index: index,
            start_minutes: 0,
            duration_minutes: MINUTES_PER_DAY,
            all_day: true,
            bg_color: colour.bg,
            text_color: colour.text,
            label: playlist.name,
            source_label,
            source_type,
        });
    }

    return blocks;
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
            source_label: 'Display',
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
                zone.display_name || zone.name || 'Zone',
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
                labels.length > 1 ? `${labels.length} zones` : labels[0],
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
            source_label: zone.display_name || zone.name || 'Zone',
        }));
}
