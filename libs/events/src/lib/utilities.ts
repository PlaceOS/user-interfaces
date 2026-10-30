import { computed, type Signal } from '@angular/core';
import { Booking, CalendarEvent, SettingsService, User } from '@placeos/common';

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
