import { MatDialog } from '@angular/material/dialog';
import { Booking, i18n } from '@placeos/common';
import { BulkActionOptions } from '@placeos/components';

/** Booking fields that identify a table row */
export type BookingRowKeyFields = Pick<Booking, 'id' | 'instance'>;

/** Row key for a booking. Instances of a recurring booking share an ID. */
export function bookingRowKey(booking: BookingRowKeyFields) {
    return `${booking.id}:${booking.instance || ''}`;
}

/** Bookings in `list` whose row keys are in `keys` */
export function selectedBookings<T extends BookingRowKeyFields>(
    list: T[],
    keys: string[],
) {
    const selected = new Set(keys);
    return list.filter((booking) => selected.has(bookingRowKey(booking)));
}

/** Bulk action options that ask the user before they reject bookings */
export function bulkRejectOptions(
    count: number,
    dialog: MatDialog,
): BulkActionOptions {
    return {
        dialog,
        confirm: {
            title: i18n('APP.CONCIERGE.BULK_REJECT_TITLE'),
            content: i18n('APP.CONCIERGE.BULK_REJECT_MSG', { count }),
            icon: 'event_busy',
        },
    };
}
