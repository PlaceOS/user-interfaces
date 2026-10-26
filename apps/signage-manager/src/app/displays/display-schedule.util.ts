import { SignagePlaylist } from '@placeos/ts-client';
import { addMinutes, format, startOfDay } from 'date-fns';
import {
    buildScheduleBlocks,
    MINUTES_PER_DAY,
    ScheduleBlock,
} from '../schedules/signage-schedule.util';
import { HydratedSignageTemplateMapping } from '../signage-template-mapping';

export interface DisplayScheduleBlock extends ScheduleBlock {
    mapping?: HydratedSignageTemplateMapping;
    children: ScheduleBlock[];
}

/** Group playlist time under each overlapping template and keep uncovered time. */
export function buildDisplayScheduleDays(
    playlists: ScheduleBlock[],
    mappings: HydratedSignageTemplateMapping[],
    days: Date[],
) {
    // Template mappings use the same schedule format as playlists.
    const templates = mappings.flatMap((mapping) =>
        buildScheduleBlocks(
            [
                {
                    playlist: new SignagePlaylist({
                        id: mapping.id,
                        name:
                            mapping.template_details.name ||
                            mapping.template_id,
                        schedules: mapping.schedule ? [mapping.schedule] : [],
                    }),
                },
            ],
            days,
        ).map(
            (block): DisplayScheduleBlock => ({
                ...block,
                mapping,
                children: [],
            }),
        ),
    );
    return days.map((day, day_index) => {
        const parents = templates.filter(
            (block) => block.day_index === day_index,
        );
        const standalone: DisplayScheduleBlock[] = [];
        for (const playlist of playlists.filter(
            (block) => block.day_index === day_index,
        )) {
            let remaining = [playlist];
            for (const parent of parents) {
                const start = Math.max(
                    playlist.start_minutes,
                    parent.start_minutes,
                );
                const end = Math.min(blockEnd(playlist), blockEnd(parent));
                if (start >= end) continue;
                parent.children.push(sliceBlock(playlist, start, end, day));
                remaining = remaining.flatMap((block) => {
                    const overlap_start = Math.max(block.start_minutes, start);
                    const overlap_end = Math.min(blockEnd(block), end);
                    if (overlap_start >= overlap_end) return [block];
                    const parts: ScheduleBlock[] = [];
                    if (block.start_minutes < overlap_start) {
                        parts.push(
                            sliceBlock(
                                block,
                                block.start_minutes,
                                overlap_start,
                                day,
                            ),
                        );
                    }
                    if (overlap_end < blockEnd(block)) {
                        parts.push(
                            sliceBlock(
                                block,
                                overlap_end,
                                blockEnd(block),
                                day,
                            ),
                        );
                    }
                    return parts;
                });
            }
            standalone.push(
                ...remaining.map((block) => ({ ...block, children: [] })),
            );
        }
        const items = [...parents, ...standalone].sort(sortBlocks);
        for (const parent of parents) parent.children.sort(sortBlocks);
        return {
            items,
            all_day: items.filter((block) => block.all_day),
            timed: items.filter((block) => !block.all_day),
        };
    });
}

function blockEnd(block: ScheduleBlock) {
    return Math.min(
        MINUTES_PER_DAY,
        block.start_minutes + block.duration_minutes,
    );
}

function sliceBlock(
    block: ScheduleBlock,
    start: number,
    end: number,
    day: Date,
): ScheduleBlock {
    if (start === block.start_minutes && end === blockEnd(block)) return block;
    const midnight = startOfDay(day);
    return {
        ...block,
        start_minutes: start,
        duration_minutes: end - start,
        all_day: start === 0 && end === MINUTES_PER_DAY,
        label: `${format(addMinutes(midnight, start), 'HH:mm')} – ${format(addMinutes(midnight, end), 'HH:mm')}`,
    };
}

function sortBlocks(left: ScheduleBlock, right: ScheduleBlock) {
    return (
        Number(right.all_day) - Number(left.all_day) ||
        left.start_minutes - right.start_minutes ||
        left.playlist.name.localeCompare(right.playlist.name)
    );
}
