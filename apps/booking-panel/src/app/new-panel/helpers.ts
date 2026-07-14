import {
    addMinutes,
    differenceInSeconds,
    format,
    getMinutes,
    startOfHour,
} from 'date-fns';

import { CalendarEvent } from '@placeos/common';
import { getNextFreeTimeSlot } from '@placeos/events';

export interface PanelTimelineBlock {
    id: string;
    time: number;
    hour: string;
    on_hour: boolean;
}

export interface PanelTimelineBooking {
    id: string;
    start: number;
    size: number;
    title: string;
}

export function timelineStart(now = Date.now()) {
    return addMinutes(startOfHour(now), -60).valueOf();
}

export function timelineData(
    bookings: CalendarEvent[],
    now = Date.now(),
    start = timelineStart(now),
    step = 10,
): {
    blocks: PanelTimelineBlock[];
    bookings: PanelTimelineBooking[];
    now: number;
} {
    const blocks: PanelTimelineBlock[] = [];
    let time = start;
    const end = addMinutes(start, 12 * 60).valueOf();
    const duration = end - start;

    while (time < end) {
        blocks.push({
            id: `${time}`,
            time,
            hour: format(time, 'ha'),
            on_hour: getMinutes(time) === 0,
        });
        time = addMinutes(time, step).valueOf();
    }

    return {
        blocks,
        bookings: bookings
            .map((booking, index) => {
                const booking_end = addMinutes(
                    booking.date,
                    booking.duration,
                ).valueOf();
                const visible_start = Math.max(booking.date, start);
                const visible_end = Math.min(booking_end, end);
                return {
                    id: `${booking.id || booking.date}-${index}`,
                    start: ((visible_start - start) / duration) * 100,
                    size: ((visible_end - visible_start) / duration) * 100,
                    title: `${format(booking.date, 'h:mm a')} - ${format(
                        booking_end,
                        'h:mm a',
                    )}`,
                };
            })
            .filter((booking) => booking.size > 0),
        now: Math.max(0, Math.min(100, ((now - start) / duration) * 100)),
    };
}

export function nextPeriod(next: CalendarEvent) {
    const next_diff = Math.ceil(
        differenceInSeconds(next?.date, Date.now()) / 60,
    );
    return next && next_diff < 24 * 60
        ? `${format(next.date, 'h:mm a')} - ${format(
              addMinutes(next.date, next.duration),
              'h:mm a',
          )}`
        : '';
}

export function currentPeriod(
    bookings: CalendarEvent[],
    current: CalendarEvent,
    next: CalendarEvent,
): [boolean, number, number] | [] {
    const slot = getNextFreeTimeSlot(bookings);
    const next_diff = Math.ceil(
        differenceInSeconds(next?.date, Date.now()) / 60,
    );
    if (!current)
        return next && next_diff < 24 * 60
            ? [false, Math.floor(next_diff / 60), next_diff % 60]
            : [];
    const checked_in = true;
    const current_diff = Math.ceil(
        differenceInSeconds(slot.start, Date.now()) / 60,
    );
    return checked_in
        ? [true, Math.floor(current_diff / 60), current_diff % 60]
        : [];
}
