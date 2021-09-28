import { FormControl, FormGroup } from '@angular/forms';
import { currentUser } from '@placeos/common';
import { Booking } from './booking.class';

export function generateBookingForm(booking: Booking = {} as any) {
    const form = new FormGroup({
        id: new FormControl(booking.id || ''),
        date: new FormControl(booking.date, []),
        duration: new FormControl(booking.duration),
        booking_type: new FormControl(booking.booking_type),
        zones: new FormControl(booking.zones),
        title: new FormControl(booking.title),
        description: new FormControl(booking.description),
        asset_id: new FormControl(booking.asset_id),
        map_id: new FormControl(booking.extension_data.map_id),
        user: new FormControl(currentUser()),
        user_id: new FormControl(booking.user_id),
        user_email: new FormControl(booking.user_email),
        booked_by: new FormControl(currentUser()),
        booked_by_id: new FormControl(booking.booked_by_id),
        booked_by_email: new FormControl(booking.booked_by_email),
    });
    form.valueChanges.subscribe((v) => {
        const user = v.user;
        const booker = v.booked_by;
        booker || user
            ? form.patchValue(
                  {
                      user_id: user.id || booker.id,
                      user_email: user.email || booker.id,
                      booked_by_id: booker.id,
                      booked_by_email: booker.email,
                  },
                  { emitEvent: false }
              )
            : '';
    });
    return form;
}
