import { Booking } from '@placeos/common';

/** Completed, cancelled, and rejected bookings cannot change status. */
export function canChangeDeskBooking(booking: Booking): boolean {
    return !(
        booking.deleted ||
        isDeskBookingRejected(booking) ||
        booking.has_ended ||
        booking.status === 'cancelled' ||
        booking.status === 'ended'
    );
}

/** Rejection is final, including attempts to cancel the booking. */
export function isDeskBookingRejected(booking: Booking): boolean {
    return booking.rejected || booking.status === 'declined';
}
