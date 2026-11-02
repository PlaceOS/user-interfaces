import { DatePipe } from '@angular/common';
import { CalendarEvent, getTimezoneDifferenceInHours } from '@placeos/common';
import {
    addHours,
    differenceInMinutes,
    format,
    setHours,
    startOfDay,
} from 'date-fns';

export function isActiveRoomTimelineEvent(event: CalendarEvent): boolean {
    const state = (event as any).state;
    const status = (event as any).status;
    return (
        !event.deleted &&
        !(event as any).rejected &&
        event.type !== 'cancelled' &&
        status !== 'cancelled' &&
        status !== 'declined' &&
        state !== 'cancelled'
    );
}

interface TimelineSpace {
    id: string;
    email?: string;
}

/**
 * Group events by the spaces that they book. An event matches a space when a
 * resource or the system has the ID or email of the space. An event with
 * many rooms is in the list of each room. Each list keeps the input order.
 *
 * Builds lookup maps once, so the cost is near events + spaces + matches,
 * not spaces * events.
 */
export function groupRoomTimelineEvents(
    spaces: TimelineSpace[],
    events: CalendarEvent[],
): Record<string, CalendarEvent[]> {
    // Map keys can be undefined, which keeps the result of the old
    // `item.email === space.email` check when both emails are missing
    const by_id = new Map<unknown, number[]>();
    const by_email = new Map<unknown, number[]>();
    const add = (map: Map<unknown, number[]>, key: unknown, index: number) => {
        const list = map.get(key);
        if (!list) map.set(key, [index]);
        else if (list[list.length - 1] !== index) list.push(index);
    };
    events.forEach((event, index) => {
        for (const item of event.resources || []) {
            add(by_id, item.id, index);
            add(by_email, item.email, index);
        }
        add(by_id, event.system?.id, index);
        add(by_email, event.system?.email, index);
    });
    const event_map: Record<string, CalendarEvent[]> = {};
    for (const space of spaces) {
        const indexes = new Set([
            ...(by_id.get(space.id) || []),
            ...(by_email.get(space.email) || []),
        ]);
        event_map[space.id] = [...indexes]
            .sort((a, b) => a - b)
            .map((index) => events[index]);
    }
    return event_map;
}

/** Time range of the shown hours, as Unix milliseconds */
export interface TimelineWindow {
    start: number;
    end: number;
}

/**
 * Start and end of the shown hours on the day of `date`. When `timezone` is
 * set, the hours are in that timezone.
 */
export function timelineWindow(
    date: number,
    block_start: number,
    block_end: number,
    timezone: string,
): TimelineWindow {
    const offset = timezone ? getTimezoneDifferenceInHours(timezone) : 0;
    const day = startOfDay(date);
    return {
        start: addHours(setHours(day, block_start), -offset).valueOf(),
        end: addHours(setHours(day, block_end), -offset).valueOf(),
    };
}

/** Group the active events that overlap `window` by the spaces they book. */
export function timelineEvents(
    spaces: TimelineSpace[],
    events: CalendarEvent[],
    window: TimelineWindow,
): Record<string, CalendarEvent[]> {
    return groupRoomTimelineEvents(
        spaces,
        events.filter(
            (event) =>
                isActiveRoomTimelineEvent(event) &&
                event.date_end >= window.start &&
                event.date <= window.end,
        ),
    );
}

/** Hours of the day from `block_start` up to, but not including, `block_end`. */
export function timelineHours(block_start: number, block_end: number) {
    return Array.from({ length: 24 }, (_, i) => i).filter(
        (hour) => hour >= block_start && hour < block_end,
    );
}

/**
 * Position of `date` as a percent of the shown hours on the day of `day`.
 * When `timezone` is set, the hours are in that timezone.
 */
export function timelineOffset(
    date: number,
    day: number,
    block_start: number,
    block_range: number,
    timezone: string,
): number {
    const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const offset = timezone
        ? getTimezoneDifferenceInHours(timezone, current_tz)
        : 0;
    const start_time = setHours(startOfDay(day), block_start - offset);
    const diff = differenceInMinutes(date, start_time);
    return +((Math.max(0, diff / 60) / block_range) * 100).toFixed(2);
}

/** Length of `duration` minutes as a percent of the shown hours. */
export function timelineLength(duration: number, block_range: number): number {
    return +(
        (Math.min(block_range, duration / 60) / block_range) *
        100
    ).toFixed(2);
}

/** Label for an hour on the timeline axis, such as "09:00" or "9 AM". */
export function timelineHourLabel(hour: number, use_24_hour: boolean): string {
    return format(setHours(Date.now(), hour), use_24_hour ? 'HH:00' : 'h a');
}

const DATE_PIPE = new DatePipe('en');

/** Tooltip text for a booking on the timeline. */
export function timelineTooltip(
    event: CalendarEvent,
    time_format: string,
): string {
    return `Start: ${event.all_day ? 'All Day' : DATE_PIPE.transform(event.date, time_format)}
Title:  ${event.title}
Host:  ${event.organiser?.name || event.host}`;
}
