import {
    addMinutes,
    differenceInMinutes,
    differenceInSeconds,
    format,
    getMinutes,
    roundToNearestMinutes,
    startOfHour,
    type NearestMinutes,
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

/** Length of the panel timeline in minutes */
export const TIMELINE_SPAN = 12 * 60;

/** Durations in minutes offered by the quick book buttons */
export const QUICK_BOOK_DURATIONS = [15, 30, 60];

/** Minutes the extend button adds to the current booking */
export const EXTEND_MINUTES = 15;

/** Minutes before the end of a booking to warn about the next booking */
export const ENDING_WARNING_MINUTES = 5;

function bookingEnd(booking: CalendarEvent) {
    return addMinutes(booking.date, booking.duration).valueOf();
}

function overlapsBooking(
    bookings: CalendarEvent[],
    start: number,
    end: number,
) {
    return bookings.some(
        (booking) => booking.date < end && bookingEnd(booking) > start,
    );
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
    const end = addMinutes(start, TIMELINE_SPAN).valueOf();
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

/**
 * Milliseconds until a pending booking is released.
 * Returns `null` when the booking will not be released.
 */
export function releaseCountdown(
    booking: CalendarEvent | null,
    pending_period: number | undefined,
    now = Date.now(),
): number | null {
    if (!booking || !pending_period || pending_period < 1) return null;
    return Math.max(
        0,
        addMinutes(booking.date, pending_period).valueOf() - now,
    );
}

/** Format milliseconds as `m:ss` */
export function formatCountdown(ms: number) {
    const seconds = Math.ceil(ms / 1000);
    return `${Math.floor(seconds / 60)}:${`${seconds % 60}`.padStart(2, '0')}`;
}

/** Minutes from `now` until the next booking starts, capped at `max` */
export function freeMinutes(
    bookings: CalendarEvent[],
    now = Date.now(),
    max = 480,
) {
    const starts = bookings
        .filter((booking) => booking.date > now)
        .map((booking) => booking.date);
    if (!starts.length) return max;
    return Math.min(max, differenceInMinutes(Math.min(...starts), now));
}

/** Quick book durations that fit in the free time and the minimum duration */
export function quickBookDurations(free: number, min_duration = 15) {
    return QUICK_BOOK_DURATIONS.filter(
        (duration) => duration >= min_duration && duration <= free,
    );
}

/** Whether `current` can be extended by `minutes` without a clash */
export function canExtend(
    current: CalendarEvent | null,
    bookings: CalendarEvent[],
    minutes = EXTEND_MINUTES,
) {
    if (!current) return false;
    const end = bookingEnd(current);
    return !overlapsBooking(bookings, end, addMinutes(end, minutes).valueOf());
}

/**
 * The next booking when `current` ends within `warn` minutes and `next`
 * starts within 15 minutes of that end. Otherwise `null`.
 */
export function endingSoon(
    current: CalendarEvent | null,
    next: CalendarEvent | null,
    now = Date.now(),
    warn = ENDING_WARNING_MINUTES,
) {
    if (!current || !next) return null;
    const end = bookingEnd(current);
    if (end < now || end - now > warn * 60 * 1000) return null;
    return next.date - end <= 15 * 60 * 1000 ? next : null;
}

/**
 * Start time for a booking at `fraction` (0 to 1) along the timeline.
 * Snaps down to `step` minutes and uses `now` for the slot in progress.
 * Returns `null` when the slot is in the past or already booked.
 */
export function timelineSlot(
    fraction: number,
    start: number,
    bookings: CalendarEvent[],
    now = Date.now(),
    step: NearestMinutes = 15,
) {
    const offset = Math.max(0, Math.min(1, fraction)) * TIMELINE_SPAN;
    const slot = roundToNearestMinutes(addMinutes(start, offset), {
        nearestTo: step,
        roundingMethod: 'floor',
    }).valueOf();
    const slot_end = addMinutes(slot, step).valueOf();
    if (slot_end <= now) return null;
    const date = Math.max(slot, now);
    if (overlapsBooking(bookings, date, slot_end)) return null;
    return date;
}

/**
 * Whether `now` is inside the night window from `start` to `end`.
 * Times use `HH:mm` in local time. The window can cross midnight.
 * Unset times default to `19:00` and `07:00`.
 * Returns `false` for invalid or equal times.
 */
export function isNightTime(
    now: number,
    start?: string | null,
    end?: string | null,
) {
    const toMinutes = (time: string) => {
        const match = /^(\d{1,2}):(\d{2})$/.exec(time || '');
        if (!match || +match[1] > 23 || +match[2] > 59) return null;
        return +match[1] * 60 + +match[2];
    };
    const from = toMinutes(start ?? '19:00');
    const to = toMinutes(end ?? '07:00');
    if (from === null || to === null || from === to) return false;
    const date = new Date(now);
    const minutes = date.getHours() * 60 + date.getMinutes();
    return from < to
        ? minutes >= from && minutes < to
        : minutes >= from || minutes < to;
}

/** Pixel offsets the panel moves through to prevent screen burn-in */
export const BURN_IN_OFFSETS: [number, number][] = [
    [0, 0],
    [2, 0],
    [2, 2],
    [0, 2],
    [-2, 2],
    [-2, 0],
    [-2, -2],
    [0, -2],
    [2, -2],
];

/** Burn-in offset for `now`. Moves to the next offset every minute. */
export function burnInOffset(now: number): [number, number] {
    const step = Math.floor(now / (60 * 1000)) % BURN_IN_OFFSETS.length;
    return BURN_IN_OFFSETS[step];
}
