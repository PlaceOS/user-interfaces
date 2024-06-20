import { Booking } from '@placeos/bookings';
import { HashMap } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';

export function generateReportForDeskBookings(
    bookings: Booking[],
    util_period: number = 1,
    counts: HashMap<number> = {}
) {
    util_period = Math.max(1, util_period);
    const total = Object.keys(counts).reduce((c, i) => c + (counts[i] || 0), 0);
    const utilisation =
        Math.floor((bookings.length / total / util_period) * 10000) / 10000;
    return {
        total,
        count: bookings.length,
        utilisation,
        events: bookings,
    };
}

export function generateReportForBookings(
    bookings: CalendarEvent[],
    util_period: number = 8,
    counts: HashMap<number> = {}
) {
    util_period = Math.max(1, util_period);
    const total_users = bookings.reduce((c, i) => c + i.attendees.length, 0);
    const total_capacity = bookings.reduce((c, i) => c + i.system?.capacity, 0);
    const utilisation =
        Math.floor(
            (bookings.reduce((c, i) => c + i.duration, 0) /
                (util_period * 60)) *
                100
        ) / 100;
    const occupancy = Math.floor((total_users / total_capacity) * 100) / 100;
    const total = Object.keys(counts).reduce((c, i) => c + (counts[i] || 0), 0);
    return {
        count: bookings.length,
        avg_length:
            Math.floor(
                (bookings.reduce((c, i) => c + i.duration, 0) /
                    bookings.length) *
                    100
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
