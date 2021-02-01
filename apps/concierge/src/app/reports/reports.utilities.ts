import { Booking } from '@user-interfaces/bookings';
import { HashMap } from '@user-interfaces/common';
import { CalendarEvent } from '@user-interfaces/events';

export function generateReportForDeskBookings(bookings: Booking[], util_period: number = 1, counts: HashMap<number> = {}) {
    console.log('Counts:', counts);
    const total = Object.keys(counts).reduce((c, i) => c + (counts[i] || 0), 0);
    const utilisation = bookings.length / total;
    return {
        total,
        count: bookings.length,
        utilisation,
        events: bookings
    };
}

export function generateReportForBookings(bookings: CalendarEvent[], util_period: number = 8) {
    const total_users = bookings.reduce((c, i) => c + i.attendees.length, 0);
    const total_capacity = bookings.reduce((c, i) => c + i.system?.capacity, 0);
    const utilisation = bookings.reduce((c, i) => c + i.duration, 0) / (util_period * 60);
    const occupancy = total_users / total_capacity;
    return {
        count: bookings.length,
        avg_length:
            bookings.reduce((c, i) => c + i.duration, 0) / bookings.length,
        efficiency: (utilisation + occupancy) / 2,
        total_users,
        total_capacity,
        occupancy,
        utilisation,
        events: bookings
    };
}
