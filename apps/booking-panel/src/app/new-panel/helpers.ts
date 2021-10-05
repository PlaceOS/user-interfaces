import { CalendarEvent } from '@placeos/events';
import {
    addMinutes,
    differenceInMinutes,
    format,
    formatDuration,
} from 'date-fns';

export function nextPeriod(next: CalendarEvent) {
    const next_diff = differenceInMinutes(next?.date, Date.now());
    return next && next_diff < 24 * 60
        ? `${format(next.date, 'h:mm a')} - ${format(
              addMinutes(next.date, next.duration),
              'h:mm a'
          )}`
        : '';
}

export function currentPeriod(current: CalendarEvent, next: CalendarEvent) {
    const next_diff = differenceInMinutes(next?.date, Date.now());
    if (!current)
        return next && next_diff < 24 * 60
            ? `Free for ${formatDuration({
                  hours: Math.floor(next_diff / 60),
                  minutes: next_diff % 60,
              })}`
            : '';
    const checked_in = true;
    const current_diff = differenceInMinutes(
        Date.now(),
        current.event_end * 1000
    );
    const curr_avail = formatDuration({
        hours: Math.floor(current_diff / 60),
        minutes: current_diff % 60,
    });
    return checked_in
        ? `Free in ${curr_avail}`
        : `You meeting will be cancelled in ${'8 minutes'} if you do not check-in`;
}
