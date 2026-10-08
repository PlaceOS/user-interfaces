import { computed, type Signal } from '@angular/core';
import {
    Booking,
    CalendarEvent,
    SettingsService,
    timePeriodsIntersect,
    unique,
    User,
} from '@placeos/common';
import {
    add,
    addMinutes,
    differenceInMinutes,
    format,
    formatDuration,
    getTime,
    isSameDay,
    setHours,
    setMinutes,
    startOfMinute,
} from 'date-fns';

import { getNextFreeTimeSlot } from './helpers';

let BOOKING_DATE = add(setMinutes(setHours(new Date(), 6), 0), { days: -1 });

/** Whether the current settings allow one event to use multiple spaces. */
export function multipleSpacesEnabled(settings: SettingsService): boolean {
    return (
        settings.get('app.events.multiple_spaces') === true ||
        settings.get('app.events.allow_multiple_spaces') === true
    );
}

/** Reactive form of the multiple-space compatibility setting. */
export function multipleSpacesSignal(
    settings: SettingsService,
): Signal<boolean> {
    const current = settings.signal<boolean>('events.multiple_spaces', false);
    const legacy = settings.signal<boolean>(
        'events.allow_multiple_spaces',
        false,
    );
    return computed(() => current() || legacy());
}

/** Read an IANA timezone supplied with an organiser record. */
export function organiserTimezone(user?: User): string {
    const details = user?.extension_data as
        | { timezone?: unknown; time_zone?: unknown }
        | undefined;
    const timezone = details?.timezone || details?.time_zone;
    return typeof timezone === 'string' ? timezone : '';
}

/**
 * Set the initial time used for generating mock bookings
 * @param time New initial time as ms from UTC epoch
 */
export function setMockBookingStartDatetime(time: number) {
    BOOKING_DATE = startOfMinute(new Date(time));
}

/**
 * Get current status within bookings
 * @param bookings List of bookings
 * @param host Host of the new event
 * @param date Datetime of the new event
 */
export function statusFromBookings(
    bookings: CalendarEvent[],
    bookable: boolean,
    requestable: boolean,
    date: number = getTime(new Date()),
) {
    const now = new Date(date);
    const next_free_slot = getNextFreeTimeSlot(bookings, date, 5);
    const start = new Date(next_free_slot.start);
    const end = new Date(next_free_slot.end);
    const currently_free = timePeriodsIntersect(
        date,
        date,
        next_free_slot.start,
        next_free_slot.end,
    );
    const time_until_next_block = formatDuration({
        minutes: currently_free
            ? differenceInMinutes(end, now)
            : differenceInMinutes(start, now),
    });
    const free_tomorrow = !currently_free && !isSameDay(start, now);
    const free_today = currently_free && !isSameDay(end, now);
    return {
        status: !bookable
            ? 'Not Bookable'
            : currently_free
              ? requestable
                  ? 'Available by Request'
                  : 'Available'
              : 'Meeting in Progress',
        available_until: free_today
            ? 'No meetings today'
            : currently_free
              ? `Free until ${format(end, 'h:mm B')}(${time_until_next_block})`
              : free_tomorrow
                ? 'Unavailable today'
                : `Free at ${format(start, 'h:mm B')}(${time_until_next_block})`,
    };
}

export function replaceBookings(
    list: CalendarEvent[],
    new_bookings: CalendarEvent[],
    filter_options: { space: string; from: number; to: number },
) {
    const from = filter_options.from;
    const to = filter_options.to;
    const filtered_list = list.filter((booking) => {
        const start = new Date(booking.date);
        const end = addMinutes(start, booking.duration);
        return (
            !booking.resources?.find(
                (space) => space.email === filter_options.space,
            ) || !timePeriodsIntersect(from, to, start.valueOf(), end.valueOf())
        );
    });
    const updated_list = filtered_list.concat(new_bookings);
    updated_list.sort((a, b) => a.date - b.date);
    return unique(updated_list, 'id');
}

export function newCalendarEventFromBooking(booking: Booking) {
    let attendees = [
        {
            id: booking.user_id,
            name: booking.user_name,
            email: booking.user_email,
            organizer: true,
        },
    ];
    if (booking.booking_type === 'visitor') {
        attendees.push(
            new User({
                name: booking.asset_name || booking.description,
                email: booking.asset_id,
                checked_in: booking.checked_in,
            }),
        );
    }
    attendees = attendees.concat(booking.attendees);
    return new CalendarEvent({
        ...booking,
        ...booking.extension_data,
        attendees,
        id: booking.id || booking.extension_data.id,
        host: booking.user_email,
        from_bookings: true,
    } as any);
}
