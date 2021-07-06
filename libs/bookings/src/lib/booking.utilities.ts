import { FormControl, FormGroup } from '@angular/forms';
import { currentUser } from '@placeos/common';
import { Booking } from './booking.class';

export function generateBookingForm(booking: Booking) {
    const form = new FormGroup({
        id: new FormControl(booking.id || ''),
        date: new FormControl(booking.date, []),
        duration: new FormControl(booking.duration),
        booking_type: new FormControl(booking.booking_type),
        zones: new FormControl(booking.zones),
        title: new FormControl(booking.title),
        description: new FormControl(booking.description),
        asset_id: new FormControl(booking.asset_id),
        user: new FormControl(currentUser()),
        user_id: new FormControl(booking.user_id),
        booked_by: new FormControl(currentUser()),
        booked_by_id: new FormControl(booking.booked_by_id),
    });
    form.get('user')?.valueChanges.subscribe((u) =>
        u ? form.get('user_id')?.setValue(u.id) : ''
    );
    form.get('booked_by')?.valueChanges.subscribe((u) =>
        u ? form.get('booked_by')?.setValue(u.id) : ''
    );
    return form;
}
