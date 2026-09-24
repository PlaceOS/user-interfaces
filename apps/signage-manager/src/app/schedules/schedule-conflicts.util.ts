import { SignagePlaylist } from '@placeos/ts-client';
import { addDays, addMinutes, startOfDay } from 'date-fns';
import {
    buildDisplayScheduleAssignments,
    buildScheduleBlocks,
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
    const conflicts: TakeoverConflict[] = [];
    for (const display of displays) {
        const assignments = buildDisplayScheduleAssignments(
            display,
            zones,
            playlists,
        );
        if (
            playlist_id &&
            !assignments.some(({ playlist }) => playlist.id === playlist_id)
        ) {
            continue;
        }
        // Minutes from the first day, so blocks that run past midnight
        // still overlap blocks on the next day.
        const blocks = buildScheduleBlocks(assignments, day_list)
            .filter((block) => block.takeover)
            .map((block) => {
                const block_start =
                    block.day_index * MINUTES_PER_DAY + block.start_minutes;
                // A play-once block has no length, so treat it as 1 minute
                const length = Math.max(1, block.duration_minutes);
                return {
                    playlist: block.playlist,
                    start: block_start,
                    end: block_start + length,
                };
            })
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
                    starts_at: addMinutes(first_day, second.start),
                    ends_at: addMinutes(
                        first_day,
                        Math.min(first.end, second.end),
                    ),
                });
            }
        }
    }
    return conflicts;
}
