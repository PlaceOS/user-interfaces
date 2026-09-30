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
    /** First day to check. Defaults to today. */
    start?: Date;
    days?: number;
}

/**
 * Date of a wall-clock minute offset from the first day. Blocks use clock
 * minutes, so a day with a daylight saving change still starts its minutes
 * at midnight.
 */
function wallClockDate(first_day: Date, minutes: number) {
    const date = addDays(first_day, Math.floor(minutes / MINUTES_PER_DAY));
    date.setHours(0, minutes % MINUTES_PER_DAY, 0, 0);
    return date;
}

/**
 * Find takeover schedules that overlap on the same display. Returns the
 * first overlap of each pair of playlists on each display.
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
    const day_list = Array.from({ length: days }, (_, index) =>
        addDays(first_day, index),
    );
    // Only takeover playlists can conflict
    const takeover_playlists = playlists.filter(hasTakeoverSchedule);
    // Blocks do not depend on the display, so build them once per playlist
    const playlist_blocks = new Map<
        string,
        { playlist: SignagePlaylist; start: number; end: number }[]
    >();
    const takeoverBlocks = (playlist: SignagePlaylist) => {
        let blocks = playlist_blocks.get(playlist.id);
        if (blocks) return blocks;
        // Minutes from the first day, so blocks that run past midnight
        // still overlap blocks on the next day.
        blocks = buildScheduleBlocks([{ playlist }], day_list)
            .filter((block) => block.takeover)
            .map((block) => {
                const block_start =
                    block.day_index * MINUTES_PER_DAY + block.start_minutes;
                // A play period of 0 plays the playlist once, so treat it as 1 minute
                const length = Math.max(1, block.duration_minutes);
                return {
                    playlist: block.playlist,
                    start: block_start,
                    end: block_start + length,
                };
            });
        playlist_blocks.set(playlist.id, blocks);
        return blocks;
    };
    const conflicts: TakeoverConflict[] = [];
    for (const display of displays) {
        const assignments = buildDisplayScheduleAssignments(
            display,
            zones,
            takeover_playlists,
        );
        if (
            assignments.length < 2 ||
            (playlist_id &&
                !assignments.some(
                    ({ playlist }) => playlist.id === playlist_id,
                ))
        ) {
            continue;
        }
        const blocks = assignments
            .flatMap(({ playlist }) => takeoverBlocks(playlist))
            .sort((a, b) => a.start - b.start);
        const seen_pairs = new Set<string>();
        for (let i = 0; i < blocks.length; i++) {
            const first = blocks[i];
            for (
                let j = i + 1;
                j < blocks.length && blocks[j].start < first.end;
                j++
            ) {
                const second = blocks[j];
                if (first.playlist.id === second.playlist.id) continue;
                if (
                    playlist_id &&
                    first.playlist.id !== playlist_id &&
                    second.playlist.id !== playlist_id
                ) {
                    continue;
                }
                const pair = [first.playlist.id, second.playlist.id]
                    .sort()
                    .join('|');
                if (seen_pairs.has(pair)) continue;
                seen_pairs.add(pair);
                conflicts.push({
                    display,
                    playlists: [first.playlist, second.playlist],
                    starts_at: wallClockDate(first_day, second.start),
                    ends_at: wallClockDate(
                        first_day,
                        Math.min(first.end, second.end),
                    ),
                });
            }
        }
    }
    return conflicts;
}
