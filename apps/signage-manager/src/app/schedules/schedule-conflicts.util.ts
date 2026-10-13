import { SignagePlaylist } from '@placeos/ts-client';
import { addDays, startOfDay } from 'date-fns';
import {
    buildDisplayScheduleAssignments,
    buildScheduleBlocks,
    hasTakeoverSchedule,
    MINUTES_PER_DAY,
    type ScheduleItem,
} from './signage-schedule.util';

/** Number of days ahead that takeover conflicts are checked for */
export const CONFLICT_WINDOW_DAYS = 14;

/** Two takeover playlists that play at the same time on one display */
export interface TakeoverConflict {
    display: ScheduleItem;
    playlists: [SignagePlaylist, SignagePlaylist];
    starts_at: Date;
    ends_at: Date;
}

export interface TakeoverConflictOptions {
    displays: ScheduleItem[];
    zones: ScheduleItem[];
    playlists: SignagePlaylist[];
    /** Only return conflicts that include this playlist */
    playlist_id?: string;
    /** Time to check from. Leaves out overlaps that end before it. Defaults to now. */
    start?: Date;
    days?: number;
}

/**
 * Date of a wall-clock minute offset from the first day. Blocks use clock
 * minutes, so a day with a daylight saving change still starts its minutes
 * at midnight.
 */
function wallClockDate(first_day: Date, minutes: number) {
    const days = Math.floor(minutes / MINUTES_PER_DAY);
    const date = addDays(first_day, days);
    date.setHours(0, minutes - days * MINUTES_PER_DAY, 0, 0);
    return date;
}

/** Minutes from the start of the first day in which a takeover plays */
interface TakeoverRun {
    playlist: SignagePlaylist;
    start: number;
    end: number;
}

/** Overlap of two takeover playlists, in minutes from the first day */
interface TakeoverOverlap {
    playlists: [SignagePlaylist, SignagePlaylist];
    start: number;
    end: number;
}

/**
 * Timed runs and single passes (`play_period` 0) of a playlist, in start
 * order. The player plays a single pass alone, ahead of timed runs, so the
 * two kinds do not play at the same time.
 */
interface PlaylistRuns {
    timed: TakeoverRun[];
    single_pass: TakeoverRun[];
}

const byStart = (a: { start: number }, b: { start: number }) =>
    a.start - b.start;

const pairKey = ([a, b]: [SignagePlaylist, SignagePlaylist]) =>
    [a.id, b.id].sort().join('|');

/**
 * Join touching or overlapping runs. Runs must be in start order. Keeps the
 * sweep in `findOverlaps` short when a playlist plays every few minutes.
 */
function mergeRuns(runs: TakeoverRun[]) {
    const merged: TakeoverRun[] = [];
    for (const run of runs) {
        const last = merged[merged.length - 1];
        if (last && run.start <= last.end) {
            last.end = Math.max(last.end, run.end);
        } else {
            merged.push({ ...run });
        }
    }
    return merged;
}

/**
 * Overlaps of runs of different playlists, from runs in start order. When
 * `playlist_id` is set, only overlaps with that playlist.
 */
function findOverlaps(runs: TakeoverRun[], playlist_id?: string) {
    const overlaps: TakeoverOverlap[] = [];
    for (let i = 0; i < runs.length; i++) {
        const first = runs[i];
        for (let j = i + 1; j < runs.length && runs[j].start < first.end; j++) {
            const second = runs[j];
            if (
                first.playlist.id === second.playlist.id ||
                (playlist_id &&
                    first.playlist.id !== playlist_id &&
                    second.playlist.id !== playlist_id)
            ) {
                continue;
            }
            overlaps.push({
                playlists: [first.playlist, second.playlist],
                start: second.start,
                end: Math.min(first.end, second.end),
            });
        }
    }
    return overlaps;
}

/**
 * Find takeover schedules that overlap on the same display. Returns the
 * first overlap of each pair of playlists on each display that has not
 * ended before `start`.
 *
 * Matches the player: only enabled playlists play, and a single pass plays
 * alone ahead of timed runs. So a single pass conflicts only with another
 * single pass, and a timed run only with another timed run. A single pass
 * has no set length, so it counts as one minute.
 */
export function findTakeoverConflicts({
    displays,
    zones,
    playlists,
    playlist_id,
    start = new Date(),
    days = CONFLICT_WINDOW_DAYS,
}: TakeoverConflictOptions): TakeoverConflict[] {
    const first_day = startOfDay(start);
    const now = start.getHours() * 60 + start.getMinutes();
    // Start a day early, so a run from yesterday that still plays counts
    const day_list = Array.from({ length: days + 1 }, (_, index) =>
        addDays(first_day, index - 1),
    );
    // Only enabled takeover playlists can conflict
    const takeover_playlists = playlists.filter(
        (playlist) => playlist.enabled && hasTakeoverSchedule(playlist),
    );
    // Runs do not depend on the display, so build them once per playlist
    const playlist_runs = new Map<string, PlaylistRuns>();
    const takeoverRuns = (playlist: SignagePlaylist) => {
        const cached = playlist_runs.get(playlist.id);
        if (cached) return cached;
        const runs: PlaylistRuns = { timed: [], single_pass: [] };
        for (const block of buildScheduleBlocks([{ playlist }], day_list)) {
            if (!block.takeover) continue;
            // Minutes from the first day, so runs that go past midnight
            // still overlap runs on the next day
            const run_start =
                (block.day_index - 1) * MINUTES_PER_DAY + block.start_minutes;
            const run_end = run_start + Math.max(1, block.duration_minutes);
            if (run_end <= now) continue;
            runs[block.duration_minutes ? 'timed' : 'single_pass'].push({
                playlist,
                start: run_start,
                end: run_end,
            });
        }
        runs.timed = mergeRuns(runs.timed.sort(byStart));
        runs.single_pass = mergeRuns(runs.single_pass.sort(byStart));
        playlist_runs.set(playlist.id, runs);
        return runs;
    };
    // Displays with the same takeover playlists have the same overlaps
    const set_overlaps = new Map<string, TakeoverOverlap[]>();
    const overlapsOf = (assigned: SignagePlaylist[]) => {
        const key = assigned
            .map(({ id }) => id)
            .sort()
            .join('|');
        const cached = set_overlaps.get(key);
        if (cached) return cached;
        const runs = assigned.map(takeoverRuns);
        const seen_pairs = new Set<string>();
        const overlaps = [
            ...findOverlaps(
                runs.flatMap(({ timed }) => timed).sort(byStart),
                playlist_id,
            ),
            ...findOverlaps(
                runs.flatMap(({ single_pass }) => single_pass).sort(byStart),
                playlist_id,
            ),
        ]
            .sort(byStart)
            .filter(({ playlists }) => {
                const pair = pairKey(playlists);
                if (seen_pairs.has(pair)) return false;
                seen_pairs.add(pair);
                return true;
            });
        set_overlaps.set(key, overlaps);
        return overlaps;
    };
    const conflicts: TakeoverConflict[] = [];
    for (const display of displays) {
        const assigned = buildDisplayScheduleAssignments(
            display,
            zones,
            takeover_playlists,
        ).map(({ playlist }) => playlist);
        if (
            assigned.length < 2 ||
            (playlist_id && !assigned.some(({ id }) => id === playlist_id))
        ) {
            continue;
        }
        for (const overlap of overlapsOf(assigned)) {
            conflicts.push({
                display,
                playlists: overlap.playlists,
                starts_at: wallClockDate(first_day, overlap.start),
                ends_at: wallClockDate(first_day, overlap.end),
            });
        }
    }
    return conflicts;
}
