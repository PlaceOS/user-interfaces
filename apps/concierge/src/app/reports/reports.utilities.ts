import { Booking } from '@placeos/bookings';
import { HashMap } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';

export function generateReportForDeskBookings(
    bookings: Booking[],
    util_period: number = 1,
    counts: HashMap<number> = {}
) {
    const total = Object.keys(counts).reduce((c, i) => c + (counts[i] || 0), 0);
    const utilisation =
        Math.floor((bookings.length / total / util_period) * 100) / 100;
    return {
        total,
        count: bookings.length,
        utilisation,
        events: bookings,
    };
}

export function generateReportForBookings(
    bookings: CalendarEvent[],
    util_period: number = 8
) {
    const total_users = bookings.reduce((c, i) => c + i.attendees.length, 0);
    const total_capacity = bookings.reduce((c, i) => c + i.system?.capacity, 0);
    const utilisation =
        Math.floor(
            (bookings.reduce((c, i) => c + i.duration, 0) /
                (util_period * 60)) *
                100
        ) / 100;
    const occupancy = Math.floor((total_users / total_capacity) * 100) / 100;
    return {
        count: bookings.length,
        avg_length:
            Math.floor(
                (bookings.reduce((c, i) => c + i.duration, 0) /
                    bookings.length) *
                    100
            ) / 100,
        efficiency: Math.floor(((utilisation + occupancy) / 2) * 100) / 100,
        total_users,
        total_capacity,
        occupancy,
        utilisation,
        events: bookings,
    };
}
