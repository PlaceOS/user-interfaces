import { Booking, currentUser } from '@placeos/common';
import { bookingFormValue } from './booking-form.model';

/** Keys that live on the `Booking` model itself. `extension_data` must never
 * duplicate these — built once from a throwaway instance. */
const BOOKING_MODEL_KEYS = new Set(Object.keys(new Booking()));
const BOOKING_FORM_KEYS = new Set(Object.keys(bookingFormValue(new Booking())));
const BOOKING_EXTENSION_FIELD_BLACKLIST = new Set([
    'resources',
    'assets',
    'level',
]);

/** Keep only real form fields from carried `extension_data`. */
export function formExtensionData(data: Record<string, any> = {}) {
    const extra: Record<string, any> = {};
    for (const key in data) {
        if (
            BOOKING_FORM_KEYS.has(key) &&
            !BOOKING_MODEL_KEYS.has(key) &&
            !BOOKING_EXTENSION_FIELD_BLACKLIST.has(key)
        ) {
            extra[key] = data[key];
        }
    }
    return extra;
}

/** Keep only `Booking` model and form fields from a form value for saving. */
export function formBookingData(value: Record<string, any>) {
    const data: Record<string, any> = {};
    for (const key in value) {
        if (key === 'extension_data') {
            data.extension_data = formExtensionData(value.extension_data);
        } else if (
            // `asset_ids` is spread into the form model from the booking being
            // edited and never updated when `asset_id` changes, so sending it
            // back would overwrite the new resource with the old one. The
            // `Booking` constructor rebuilds it from `asset_id`.
            key !== 'asset_ids' &&
            !BOOKING_EXTENSION_FIELD_BLACKLIST.has(key) &&
            (BOOKING_FORM_KEYS.has(key) || BOOKING_MODEL_KEYS.has(key))
        ) {
            data[key] = value[key];
        }
    }
    return data;
}

/** Build the `extension_data` payload saved with a booking. Only fields that
 * need renaming, coercion, computing or a fallback live here — plain flat form
 * fields (e.g. `phone`, `company`, `recurrence_instances`, `plate_number`,
 * `notes`) are copied into `extension_data` automatically by the `Booking`
 * constructor, so they must NOT be duplicated below. */
export function buildBookingExtensionData(
    value: Record<string, any>,
    group_members: any[],
) {
    const type = value.booking_type;
    return {
        ...formExtensionData(value.extension_data),
        ...(value.extension_data?.invoice
            ? {
                  invoice: value.extension_data.invoice,
                  invoice_id: value.extension_data.invoice_id,
              }
            : {}),
        // `group` is a getter on `Booking`, so the constructor skips the
        // top-level form value — it has to be set into `extension_data` here.
        group: value.group,
        // `assets` is ignored by the constructor's auto-copy, so map it here.
        assets: value.assets.map((_: any) => _.toJSON()),
        ...(type === 'desk'
            ? {
                  assigned_asset_id: value.asset_id,
                  assigned_asset_name: value.asset_name || value.asset_id,
              }
            : {}),
        ...(type === 'visitor'
            ? {
                  international: !!value.international,
                  visitor_name: value.asset_name || value.asset_id || '',
              }
            : {}),
        ...(type === 'parking'
            ? {
                  requires_manual_approval: !!value.requires_manual_approval,
                  user_groups: [
                      ...(value.user &&
                      value.user.email !== currentUser()?.email
                          ? value.user.groups || []
                          : currentUser()?.groups || []),
                  ],
              }
            : {}),
        ...(group_members.length ? { group_members } : {}),
        department: value.user?.department || currentUser()?.department,
    };
}

/** Query for `saveBooking`. Links the booking to its parent event or booking,
 * and targets one occurrence when an instance of a series is edited alone. */
export function bookingSaveQuery(
    value: Record<string, any>,
    booking: Booking,
): Record<string, any> {
    const { event_id, parent_id } = value;
    const q: Record<string, any> = event_id
        ? { ical_uid: value.ical_uid, event_id: event_id }
        : parent_id
          ? { booking_id: parent_id }
          : {};
    if (booking.instance && !value.update_master) {
        q.instance = true;
        q.start_time = booking.booking_start;
    }
    return q;
}
