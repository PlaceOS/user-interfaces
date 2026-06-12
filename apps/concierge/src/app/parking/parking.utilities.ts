import type { Booking } from '@placeos/common';
import { isSameDay } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

export function isParkingAllDayBooking(
    booking: Pick<Booking, 'all_day' | 'duration' | 'date' | 'date_end'>,
    timezone?: string,
): boolean {
    if (booking.all_day) return true;
    if (booking.duration <= 12 * 60) return false;
    if (!booking.date || !booking.date_end) return true;
    const start = timezone ? toZonedTime(booking.date, timezone) : booking.date;
    const end = timezone
        ? toZonedTime(booking.date_end, timezone)
        : booking.date_end;
    return isSameDay(start, end);
}
