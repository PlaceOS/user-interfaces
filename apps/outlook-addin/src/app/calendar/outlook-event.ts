import { Booking, ResourceResponseStatus } from '@placeos/common';

const DAY_MS = 24 * 60 * 60 * 1000;

/** Snapshot of the Outlook appointment that the task pane is attached to. */
export interface OutlookEvent {
    subject: string;
    /** Start of the event as a UTC timestamp in milliseconds */
    start: number;
    /** End of the event as a UTC timestamp in milliseconds */
    end: number;
    /**
     * Outlook "All day" flag. `null` when the Outlook client does not report
     * it. Never inferred from the event duration.
     */
    all_day: boolean | null;
    is_recurring: boolean;
    /** Lower-case email addresses of the rooms on the event */
    room_emails: string[];
    /** Exchange item ID. Empty while the event is not saved. */
    item_id: string;
}

/** Period used to search for and book a resource. */
export interface BookingWindow {
    date: number;
    /** Duration in minutes */
    duration: number;
    all_day: boolean;
}

/** Booking window for an event, or the reason that there is none. */
export interface WindowResult {
    window: BookingWindow | null;
    reason: string;
}

function windowError(reason: string): WindowResult {
    return { window: null, reason };
}

/** State of a room on the Outlook event. */
export type RoomState = 'selected' | 'pending' | 'confirmed' | 'declined';

/** Number of whole days covered by an all-day event. */
export function allDayCount({
    start,
    end,
}: Pick<OutlookEvent, 'start' | 'end'>) {
    return Math.max(1, Math.round((end - start) / DAY_MS));
}

/**
 * Room search window. Rooms are booked by Exchange for the exact event
 * interval, so all-day events use the full midnight-to-midnight span.
 */
export function roomWindow(event: OutlookEvent): WindowResult {
    const duration = Math.round((event.end - event.start) / 60_000);
    if (duration <= 0) {
        return windowError('The event end time is before the start time.');
    }
    return {
        window: { date: event.start, duration, all_day: false },
        reason: '',
    };
}

/**
 * Booking window for a desk or a parking space. A timed event uses its exact
 * interval. An all-day event books the whole day under the site all-day
 * policy. `resource` names the resource in messages, for example `a desk`.
 */
export function bookingWindow(
    event: OutlookEvent,
    resource = 'a desk',
): WindowResult {
    if (event.is_recurring) {
        return windowError(
            `Booking ${resource} for recurring events is not available yet. Book ${resource} for each occurrence from the workplace app.`,
        );
    }
    if (event.all_day && allDayCount(event) > 1) {
        return windowError(
            `Booking ${resource} for multi-day all-day events is not available yet. Book each day from the workplace app.`,
        );
    }
    const result = roomWindow(event);
    if (!result.window || !event.all_day) return result;
    return {
        window: { date: event.start, duration: 24 * 60, all_day: true },
        reason: '',
    };
}

/** Whether a booking still covers the given booking window. */
export function bookingMatchesWindow(
    booking: Pick<Booking, 'date' | 'duration' | 'all_day'>,
    window: BookingWindow,
) {
    if (window.all_day) {
        return (
            booking.all_day &&
            new Date(booking.date).toDateString() ===
                new Date(window.date).toDateString()
        );
    }
    return (
        !booking.all_day &&
        booking.date === window.date &&
        booking.duration === window.duration
    );
}

/** Map an Exchange resource response to the room state shown to the user. */
export function roomStateFromResponse(
    response: ResourceResponseStatus | undefined,
): RoomState {
    switch (response) {
        case 'accepted':
            return 'confirmed';
        case 'declined':
            return 'declined';
        case 'tentative':
        case 'needsAction':
            return 'pending';
        default:
            return 'selected';
    }
}

/**
 * Human readable event period, for example `Thu 1 Oct · 12:00–12:30` or
 * `Thu 1 Oct – Fri 2 Oct · All day`.
 */
export function formatEventPeriod(
    event: Pick<OutlookEvent, 'start' | 'end' | 'all_day'>,
    locale?: string,
) {
    const day = new Intl.DateTimeFormat(locale, {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    });
    const time = new Intl.DateTimeFormat(locale, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
    if (event.all_day) {
        // Outlook stores the end of an all-day event as the next midnight.
        const last_day = event.end - 1;
        const first = day.format(event.start);
        const last = day.format(last_day);
        return `${first === last ? first : `${first} – ${last}`} · All day`;
    }
    const start_day = day.format(event.start);
    const end_day = day.format(event.end);
    return start_day === end_day
        ? `${start_day} · ${time.format(event.start)}–${time.format(event.end)}`
        : `${start_day} ${time.format(event.start)} – ${end_day} ${time.format(event.end)}`;
}

/** Short name of the local time zone, for example `London`. */
export function localTimezoneLabel() {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    return zone.split('/').pop()?.replace(/_/g, ' ') || zone;
}
