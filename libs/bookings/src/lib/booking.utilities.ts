import { FormControl, FormGroup, Validators } from '@angular/forms';
import { currentUser } from '@placeos/common';
import { CalendarEvent } from 'libs/events/src/lib/event.class';
import { endInFuture } from 'libs/events/src/lib/validators';
import {
    createViewer,
    getViewer,
    Point,
    removeViewer,
} from '@placeos/svg-viewer';
import { Booking } from './booking.class';

export function generateBookingForm(booking: Booking = new Booking()) {
    const form = new FormGroup({
        id: new FormControl(booking.id || ''),
        date: new FormControl(booking.date, [Validators.required]),
        all_day: new FormControl(booking.all_day ?? false),
        name: new FormControl(
            booking.extension_data.name || booking.asset_name || ''
        ),
        duration: new FormControl(booking.duration, [endInFuture]),
        booking_type: new FormControl(booking.booking_type),
        zones: new FormControl(booking.zones),
        title: new FormControl(booking.title),
        description: new FormControl(booking.description),
        booking_asset: new FormControl(null),
        resources: new FormControl([]),
        company: new FormControl(''),
        asset_id: new FormControl(booking.asset_id, [Validators.required]),
        asset_name: new FormControl(booking.description),
        assets: new FormControl(booking.extension_data?.assets || []),
        attendees: new FormControl(booking.attendees || []),
        map_id: new FormControl(booking.extension_data?.map_id),
        user: new FormControl(currentUser()),
        user_id: new FormControl(booking.user_id),
        user_email: new FormControl(booking.user_email),
        booked_by: new FormControl(currentUser()),
        booked_by_id: new FormControl(booking.booked_by_id),
        booked_by_email: new FormControl(booking.booked_by_email),
        secondary_resource: new FormControl(
            booking.extension_data?.other_asset_type ||
                booking.extension_data?.secondary_resource
        ),
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
    form.controls.all_day.valueChanges.subscribe((all_day) => {
        if (all_day) form.controls.duration.disable();
        else form.controls.duration.enable();
    });
    return form;
}

export async function findNearbyFeature(
    map_url: string,
    centered_at: Point | string,
    desk_ids: string[] = []
): Promise<string> {
    const element = document.createElement('div');
    element.style.position = 'absolute';
    element.style.top = '-9999px';
    element.style.width = '1000px';
    element.style.height = '1000px';
    document.body.appendChild(element);
    const id = await createViewer({
        url: map_url,
        element,
    });
    const viewer = getViewer(id);
    const point = (typeof centered_at === 'string'
        ? viewer.mappings[centered_at]
        : centered_at) || { x: 0.5, y: 0.5 };
    let dist = 10;
    let closest = '';
    for (const desk of desk_ids) {
        const { x, y } = viewer.mappings[desk] || { x: 2, y: 2 };
        const d = Math.sqrt(
            (x - point.x) * (x - point.x) + (y - point.y) * (y - point.y)
        );
        if (d < dist) {
            dist = d;
            closest = desk;
        }
    }
    document.body.removeChild(element);
    removeViewer(id);
    return closest;
}

export function newBookingFromCalendarEvent(event: CalendarEvent) {
    return new Booking({
        id: event.id,
        user_email: event.host,
        asset_id: event.system?.id,
        asset_name: event.system?.display_name || event.system?.name,
        booking_type: 'room',
        approved: event.status === 'approved',
        extension_data: {
            ...event,
        },
    });
}
