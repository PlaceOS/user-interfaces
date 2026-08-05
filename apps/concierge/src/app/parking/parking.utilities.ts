import { parkingRequestStatus } from '@placeos/bookings';
import type { Booking } from '@placeos/common';
import { isSameDay } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

/** Label for the status of a parking request that hasn't been approved yet */
export function parkingRequestStatusLabel(
    booking: Booking,
    show_waitlist = true,
): string {
    const status = parkingRequestStatus(booking);
    if (status === 'approval_required') return 'COMMON.APPROVAL_REQUIRED';
    if (status === 'waitlist' && show_waitlist)
        return 'APP.CONCIERGE.PARKING_WAITLISTED';
    return 'APP.CONCIERGE.BOOKING_STATUS_PENDING';
}

/** Colour tone for the status of a parking request that hasn't been approved yet */
export function parkingRequestStatusTone(
    booking: Booking,
    show_waitlist = true,
): 'info' | 'approval' | 'warning' {
    const status = parkingRequestStatus(booking);
    if (status === 'approval_required') return 'approval';
    if (status === 'waitlist' && show_waitlist) return 'info';
    return 'warning';
}

export function isParkingAllDayBooking(
    booking: Pick<Booking, 'all_day' | 'duration' | 'date' | 'date_end'>,
    timezone?: string,
    bookable_period?: number,
): boolean {
    if (booking.date == null || booking.date_end == null) return false;
    const start = timezone ? toZonedTime(booking.date, timezone) : booking.date;
    const end = timezone
        ? toZonedTime(booking.date_end, timezone)
        : booking.date_end;
    const start_date = new Date(start);
    const starts_at_midnight =
        start_date.getHours() === 0 &&
        start_date.getMinutes() === 0 &&
        start_date.getSeconds() === 0 &&
        start_date.getMilliseconds() === 0;
    if (booking.duration === 24 * 60 && starts_at_midnight) return true;
    if (!booking.all_day || !isSameDay(start, end)) return false;
    return booking.duration > 23 * 60 || booking.duration === bookable_period;
}
