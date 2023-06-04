import { CalendarEvent, getNextFreeTimeSlot } from '@placeos/events';
import {
    addMinutes,
    differenceInMinutes,
    differenceInSeconds,
    format,
    formatDuration,
} from 'date-fns';

export function nextPeriod(next: CalendarEvent) {
    const next_diff = Math.ceil(
        differenceInSeconds(next?.date, Date.now()) / 60
    );
    return next && next_diff < 24 * 60
        ? `${format(next.date, 'h:mm a')} - ${format(
              addMinutes(next.date, next.duration),
              'h:mm a'
          )}`
        : '';
}

export function currentPeriod(
    bookings: CalendarEvent[],
    current: CalendarEvent,
    next: CalendarEvent
) {
    const slot = getNextFreeTimeSlot(bookings);
    const next_diff = Math.ceil(
        differenceInSeconds(next?.date, Date.now()) / 60
    );
    if (!current)
        return next && next_diff < 24 * 60
            ? [false, Math.floor(next_diff / 60), next_diff % 60]
            : [];
    const checked_in = true;
    const current_diff = Math.ceil(
        differenceInSeconds(slot.start, Date.now()) / 60
    );
    return checked_in
        ? [true, Math.floor(current_diff / 60), current_diff % 60]
        : [];
}
