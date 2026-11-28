import {
    queryAllBookingsOrThrow,
    removeBooking,
    showBooking,
    updateBooking,
} from '@placeos/bookings';
import { BookingType, unique } from '@placeos/common';
import { addDays, endOfDay, getUnixTime, startOfDay, subDays } from 'date-fns';

/** Days ahead to look for a recurring series, e.g. a weekday one on a weekend */
const SERIES_LOOKAHEAD_DAYS = 7;

/**
 * End the bookings of a user for an assigned desk, parking space or locker,
 * before the assignment changes or the resource is removed: today's single
 * bookings, and recurring series with an occurrence in the next week.
 *
 * A recurring series that started before today ends yesterday. A series that
 * starts today or later cannot end before it starts, so it is deleted, as is
 * a single booking. Does nothing without an assignee. Rejects when a lookup
 * or change fails.
 */
export async function clearAssignedBooking(
    type: BookingType,
    asset_id: string,
    email: string | undefined,
    now = Date.now(),
) {
    // Without an email the API lists the bookings of the signed-in user
    if (!email) return;
    const today_start = getUnixTime(startOfDay(now));
    const today_end = getUnixTime(endOfDay(now));
    const bookings = await queryAllBookingsOrThrow({
        period_start: today_start,
        period_end: getUnixTime(endOfDay(addDays(now, SERIES_LOOKAHEAD_DAYS))),
        type,
        email,
        include_checked_out: true,
        limit: 200,
    });
    // Occurrences of one series share its ID, so change each series once
    // Single bookings on later days are the user's own, so keep them
    const matches = unique(
        bookings.filter(
            (_) =>
                _.asset_id === asset_id &&
                (_.instance || _.booking_start <= today_end),
        ),
        'id',
    );
    // Listed instances start at their occurrence, so read each series start.
    // Read them all before any change, so a failed read changes nothing.
    const series_starts = await Promise.all(
        matches.map((booking) =>
            booking.instance
                ? showBooking(booking.id).then((_) => _.booking_start)
                : null,
        ),
    );
    for (const [index, booking] of matches.entries()) {
        const series_start = series_starts[index];
        // An instance has the ID of its series. Never delete by `parent_id`,
        // which links a booking to a meeting or group booking.
        if (
            series_start === null ||
            getUnixTime(startOfDay(series_start * 1000)) >= today_start
        ) {
            await removeBooking(booking.id);
        } else {
            await updateBooking(booking.id, {
                recurrence_end: getUnixTime(endOfDay(subDays(now, 1))),
            });
        }
    }
}
