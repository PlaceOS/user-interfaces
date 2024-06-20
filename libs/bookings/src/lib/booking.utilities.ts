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
import {
    addMinutes,
    differenceInMinutes,
    roundToNearestMinutes,
} from 'date-fns';

function setBookingAsset(form: FormGroup, resource: any) {
    if (!resource) return form.patchValue({ asset_id: undefined });
    form.patchValue(
        {
            asset_id: resource.id,
            asset_name: resource.name,
            map_id: resource.map_id || resource.id,
            description: resource.name,
            zones: resource.zone
                ? [resource.zone?.parent_id, resource.zone?.id]
                : [],
            booking_asset: resource,
        },
        { emitEvent: false }
    );
}

export function generateBookingForm(booking: Booking = new Booking()) {
    const form = new FormGroup({
        id: new FormControl(booking.id || ''),
        parent_id: new FormControl(booking.parent_id || ''),
        event_id: new FormControl(booking.event_id || ''),
        ical_uid: new FormControl(booking.extension_data.ical_uid || ''),
        date: new FormControl(booking.date, [Validators.required]),
        date_end: new FormControl(booking.date_end),
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
        featured: new FormControl(booking.extension_data?.featured || false),
        user: new FormControl(currentUser()),
        user_id: new FormControl(booking.user_id),
        group: new FormControl(booking.group),
        user_email: new FormControl(booking.user_email),
        timezone: new FormControl(booking.timezone || ''),
        booked_by: new FormControl(currentUser()),
        booked_by_id: new FormControl(booking.booked_by_id),
        booked_by_email: new FormControl(booking.booked_by_email),
        secondary_resource: new FormControl(
            booking.extension_data?.other_asset_type ||
                booking.extension_data?.secondary_resource
        ),
        location: new FormControl(booking.extension_data.location || ''),
        attendance_type: new FormControl(
            booking.extension_data.attendance_type || 'ANY'
        ),
        phone: new FormControl(booking.extension_data.phone || ''),
        permission: new FormControl(booking.permission || 'PRIVATE'),
        images: new FormControl(booking.images || []),
        tags: new FormControl(booking.tags || []),
    });
    form.valueChanges.subscribe((v) => {
        const user = v.user;
        const booker = v.booked_by || currentUser();
        booker || user
            ? form.patchValue(
                  {
                      user_id: user?.id || booker?.id,
                      user_email: user?.email || booker?.id,
                      booked_by_id: booker?.id,
                      booked_by_email: booker?.email,
                  },
                  { emitEvent: false }
              )
            : '';
        if (form.getRawValue().date < Date.now() && form.value.id) {
            form.get('date')?.disable({ emitEvent: false });
        } else {
            form.get('date')?.enable({ emitEvent: false });
        }
    });
    form.controls.resources.valueChanges.subscribe((resources) =>
        setBookingAsset(form, (resources || [])[0])
    );
    form.controls.duration.valueChanges.subscribe((duration) => {
        form.patchValue(
            {
                date_end: roundToNearestMinutes(
                    addMinutes(form.getRawValue().date, duration),
                    { nearestTo: 5, roundingMethod: 'ceil' }
                ).valueOf(),
            },
            { emitEvent: false }
        );
    });
    form.controls.date_end.valueChanges.subscribe((date) => {
        if (date < addMinutes(form.getRawValue().date, 30).valueOf()) {
            form.patchValue(
                {
                    date_end: roundToNearestMinutes(
                        addMinutes(form.getRawValue().date, 30),
                        { nearestTo: 5, roundingMethod: 'ceil' }
                    ).valueOf(),
                    duration: 30,
                },
                { emitEvent: false }
            );
        } else {
            form.patchValue(
                {
                    duration: differenceInMinutes(
                        date,
                        form.getRawValue().date
                    ),
                },
                { emitEvent: false }
            );
        }
    });
    form.controls.date.valueChanges.subscribe((date) => {
        form.patchValue(
            {
                date_end: roundToNearestMinutes(
                    addMinutes(date, form.value.duration),
                    { nearestTo: 5, roundingMethod: 'ceil' }
                ).valueOf(),
            },
            { emitEvent: false }
        );
        if (date < Date.now() && !form.value.id) {
            form.patchValue(
                {
                    date: roundToNearestMinutes(Date.now(), {
                        nearestTo: 5,
                        roundingMethod: 'ceil',
                    }).valueOf(),
                },
                { emitEvent: false }
            );
        }
    });
    if (booking.state === 'started') form.get('date').disable();
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
