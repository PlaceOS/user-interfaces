import { Signal } from '@angular/core';
import { BookingForm } from '@placeos/bookings';
import { getInvalidSignalFields, i18n, notifyError } from '@placeos/common';

/** Locale keys for the labels of booking form fields */
const FIELD_LABELS: Record<string, string> = {
    date: 'FORM.DATE',
    duration: 'FORM.DURATION',
    title: 'FORM.TITLE',
    user: 'FORM.HOST',
    notes: 'FORM.NOTES',
    plate_number: 'BOOKINGS.PARKING_PLATE_NUMBER',
    space_restrictions: 'BOOKINGS.PARKING_SPACE_RESTRICTIONS_TITLE',
};

/**
 * Mark the booking form as touched so that inline errors show, then show
 * a message that lists the labels of the invalid fields.
 * `resource_key` is the locale key for the label of the booked resource.
 */
export function notifyInvalidBookingFields(
    form: BookingForm,
    model: Signal<object>,
    resource_key: string,
) {
    form().markAsTouched();
    const labels: Record<string, string> = {};
    const keys = {
        ...FIELD_LABELS,
        asset_id: resource_key,
        resources: resource_key,
    };
    for (const field in keys) labels[field] = i18n(keys[field]);
    const fields = getInvalidSignalFields(form, model, labels);
    notifyError(
        i18n('FORM.INVALID_FIELDS', {
            field_list: [...new Set(fields)].join(', '),
        }),
    );
}
