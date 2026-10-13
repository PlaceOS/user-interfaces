import {
    BookableHoursRange,
    Booking,
    CalendarEvent,
    HashMap,
} from '@placeos/common';

function isActiveReportBooking(booking: Booking): boolean {
    return !booking.deleted && !isDeclinedReportBooking(booking);
}

export function activeReportBookings<T extends Booking>(bookings: T[]): T[] {
    return bookings.filter(isActiveReportBooking);
}

/** Active bookings that have ended without ever being checked in */
export function noShowReportBookings<T extends Booking>(bookings: T[]): T[] {
    return activeReportBookings(bookings).filter(
        (booking) =>
            !booking.asset_id?.startsWith('unallocated') &&
            !booking.checked_in &&
            !booking.checked_in_at &&
            booking.booking_end * 1000 < Date.now(),
    );
}

export function reportBookingStatusStats(bookings: Booking[]) {
    const deleted_count = bookings.filter((booking) => booking.deleted).length;
    const cancelled_count = bookings.filter(
        (booking) => !booking.deleted && isDeclinedReportBooking(booking),
    ).length;
    return {
        active_count: bookings.length - cancelled_count - deleted_count,
        cancelled_count,
        deleted_count,
        inactive_count: cancelled_count + deleted_count,
        total_count: bookings.length,
    };
}

export function reportBookingStatus(booking: Booking): string {
    if (booking.deleted) return 'Cancelled';
    if (isDeclinedReportBooking(booking)) return 'Rejected';
    if (booking.status === 'approved') return 'Approved';
    return booking.status || 'tentative';
}

export function formatReportPercentage(value = 0, total = 0): string {
    const percent = total ? Math.floor((value / total) * 1000) / 10 : 0;
    return `${value || 0} (${percent}%)`;
}

function isActiveReportEvent(event: CalendarEvent): boolean {
    return !event.deleted && !isDeclinedReportEvent(event);
}

export function activeReportEvents<T extends CalendarEvent>(events: T[]): T[] {
    return events.filter(isActiveReportEvent);
}

export function cappedReportAttendeeCount(
    event: CalendarEvent,
    capacity = event.system?.capacity,
): number {
    const attendee_count = event.attendees?.length || 0;
    return capacity > 0 ? Math.min(attendee_count, capacity) : attendee_count;
}

export function reportBookableMinutes(
    bookable_hours?: BookableHoursRange | null,
): number {
    if (!bookable_hours) return 8 * 60;
    const start = Number(bookable_hours.start);
    const end = Number(bookable_hours.end);
    if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) {
        return 8 * 60;
    }
    return (end - start) * 60;
}

export function reportBookingDuration(
    event: Pick<CalendarEvent, 'date' | 'duration'> & {
        date_end?: number;
        all_day?: boolean;
    },
    bookable_minutes = 8 * 60,
): number {
    const start = Number(event.date);
    const end = Number(event.date_end);
    if (Number.isFinite(start) && Number.isFinite(end) && end > start) {
        return Math.floor((end - start) / (60 * 1000));
    }
    if (!Number.isFinite(event.duration)) return bookable_minutes;
    return event.duration || 0;
}

function totalReportBookingDuration(
    bookings: CalendarEvent[],
    bookable_minutes = 8 * 60,
): number {
    return bookings.reduce(
        (total, booking) =>
            total + reportBookingDuration(booking, bookable_minutes),
        0,
    );
}

export function reportBookedTimeUtilisationPercent(
    bookings: CalendarEvent[],
    total_spaces = 0,
    bookable_minutes = 8 * 60,
): number {
    const available_minutes = total_spaces * bookable_minutes;
    if (available_minutes <= 0) return 0;
    return (
        Math.floor(
            (totalReportBookingDuration(bookings, bookable_minutes) /
                available_minutes) *
                1000,
        ) / 10
    );
}

export function reportEventStatusStats(events: CalendarEvent[]) {
    const deleted_count = events.filter((event) => event.deleted).length;
    const cancelled_count = events.filter(
        (event) => !event.deleted && isDeclinedReportEvent(event),
    ).length;
    return {
        active_count: events.length - cancelled_count - deleted_count,
        cancelled_count,
        deleted_count,
        inactive_count: cancelled_count + deleted_count,
        total_count: events.length,
    };
}

function isDeclinedReportBooking(booking: Booking): boolean {
    const state = (booking as any).state;
    return (
        booking.rejected === true ||
        booking.status === 'cancelled' ||
        booking.status === 'declined' ||
        state === 'cancelled'
    );
}

export function isDeclinedReportEvent(event: CalendarEvent): boolean {
    const state = (event as any).state;
    const status = (event as any).status;
    return (
        (event as any).rejected === true ||
        event.type === 'cancelled' ||
        status === 'cancelled' ||
        status === 'declined' ||
        state === 'cancelled'
    );
}

export function generateReportForDeskBookings(
    bookings: Booking[],
    util_period = 1,
    counts: HashMap<number> = {},
) {
    util_period = Math.max(1, util_period);
    let total = Object.keys(counts).reduce((c, i) => c + (counts[i] || 0), 0);
    total = Math.max(1, total);
    const utilisation =
        Math.floor((bookings.length / total / util_period) * 10000) / 10000;
    return {
        ...reportBookingStatusStats(bookings),
        total,
        count: bookings.length,
        utilisation,
        events: bookings,
    };
}

export function generateReportForBookings(
    bookings: CalendarEvent[],
    util_period = 8,
    bookable_minutes = 8 * 60,
    counts: HashMap<number> = {},
) {
    util_period = Math.max(1, util_period);
    const total_users = bookings.reduce((c, i) => c + i.attendees.length, 0);
    const occupancy_users = bookings.reduce(
        (c, i) => c + cappedReportAttendeeCount(i),
        0,
    );
    const total_capacity = bookings.reduce(
        (c, i) => c + Math.max(1, i.system?.capacity),
        0,
    );
    const utilisation =
        Math.floor(
            (totalReportBookingDuration(bookings, bookable_minutes) /
                (util_period * 60)) *
                100,
        ) / 100;
    const occupancy =
        Math.floor((occupancy_users / total_capacity) * 100) / 100;
    const total = Object.keys(counts).reduce((c, i) => c + (counts[i] || 0), 0);
    return {
        count: bookings.length,
        avg_length:
            Math.floor(
                (bookings.reduce((c, i) => c + reportBookingDuration(i), 0) /
                    bookings.length) *
                    100,
            ) / 100,
        efficiency: Math.floor(((utilisation + occupancy) / 2) * 100) / 100,
        total,
        total_users,
        total_capacity,
        occupancy,
        utilisation,
        events: bookings,
    };
}
