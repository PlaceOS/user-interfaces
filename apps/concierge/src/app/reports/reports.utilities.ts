import { Booking, CalendarEvent, HashMap } from '@placeos/common';

export function isActiveReportBooking(booking: Booking): boolean {
    return !booking.deleted && booking.status !== 'cancelled';
}

export function activeReportBookings<T extends Booking>(bookings: T[]): T[] {
    return bookings.filter(isActiveReportBooking);
}

export function reportBookingStatusStats(bookings: Booking[]) {
    const deleted_count = bookings.filter((booking) => booking.deleted).length;
    const cancelled_count = bookings.filter(
        (booking) => !booking.deleted && booking.status === 'cancelled',
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
    return booking.deleted ? 'Deleted' : booking.status || 'tentative';
}

export function isActiveReportEvent(event: CalendarEvent): boolean {
    return !event.deleted && event.type !== 'cancelled';
}

export function activeReportEvents<T extends CalendarEvent>(events: T[]): T[] {
    return events.filter(isActiveReportEvent);
}

export function reportEventStatusStats(events: CalendarEvent[]) {
    const deleted_count = events.filter((event) => event.deleted).length;
    const cancelled_count = events.filter(
        (event) => !event.deleted && event.type === 'cancelled',
    ).length;
    return {
        active_count: events.length - cancelled_count - deleted_count,
        cancelled_count,
        deleted_count,
        inactive_count: cancelled_count + deleted_count,
        total_count: events.length,
    };
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
    counts: HashMap<number> = {},
) {
    util_period = Math.max(1, util_period);
    const total_users = bookings.reduce((c, i) => c + i.attendees.length, 0);
    const total_capacity = bookings.reduce(
        (c, i) => c + Math.max(1, i.system?.capacity),
        0,
    );
    const utilisation =
        Math.floor(
            (bookings.reduce((c, i) => c + i.duration, 0) /
                (util_period * 60)) *
                100,
        ) / 100;
    const occupancy = Math.floor((total_users / total_capacity) * 100) / 100;
    const total = Object.keys(counts).reduce((c, i) => c + (counts[i] || 0), 0);
    return {
        count: bookings.length,
        avg_length:
            Math.floor(
                (bookings.reduce((c, i) => c + i.duration, 0) /
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
