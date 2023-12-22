import {
    FormGroup,
    FormControl,
    Validators,
    AbstractControl,
} from '@angular/forms';
import {
    add,
    formatDuration,
    differenceInMinutes,
    getTime,
    isSameDay,
    format,
    startOfMinute,
    setHours,
    setMinutes,
    addMinutes,
    roundToNearestMinutes,
    startOfDay,
} from 'date-fns';
import {
    SettingsService,
    currentUser,
    timePeriodsIntersect,
    unique,
} from '@placeos/common';

import { CalendarEvent } from './event.class';
import { endInFuture } from './validators';
import { getNextFreeTimeSlot } from './helpers';
import { User } from 'libs/users/src/lib/user.class';
import { Booking } from 'libs/bookings/src/lib/booking.class';

let BOOKING_DATE = add(setMinutes(setHours(new Date(), 6), 0), { days: -1 });

const validateCateringField =
    (catering_control: AbstractControl) => (control: AbstractControl) => {
        if (catering_control.value?.length && !control.value) {
            return { catering_field: 'Catering sub-fields are required' };
        }
        return null;
    };

export function generateEventForm(
    event: CalendarEvent = new CalendarEvent(),
    settings?: SettingsService
) {
    if (!event) event = new CalendarEvent();
    const form = new FormGroup({
        id: new FormControl(event.id),
        ical_uid: new FormControl(event.ical_uid),
        host: new FormControl(
            event.host || event.organiser?.email || currentUser()?.email || '',
            [Validators.required]
        ),
        organiser: new FormControl(
            event.organiser || new User({ email: event.host || '' })
        ),
        creator: new FormControl(event.creator || currentUser()?.email),
        calendar: new FormControl(event.calendar),
        attendees: new FormControl(event.attendees || []),
        resources: new FormControl(event.resources || []),
        title: new FormControl(event.title),
        body: new FormControl(event.body),
        private: new FormControl(event.private),
        date: new FormControl(event.date, [Validators.required]),
        duration: new FormControl(event.duration, [endInFuture]),
        all_day: new FormControl(event.all_day),
        date_end: new FormControl(event.date_end),
        recurring: new FormControl(event.recurring),
        recurrence: new FormControl(event.recurrence),
        recurring_event_id: new FormControl(event.recurring_event_id),
        master: new FormControl(event.master),
        attachments: new FormControl(event.attachments),
        catering: new FormControl(event.extension_data?.catering as any),
        catering_notes: new FormControl(
            event.extension_data?.catering[0]?.notes || ''
        ),
        catering_charge_code: new FormControl(
            event.extension_data?.catering[0]?.charge_code || ''
        ),
        setup_time: new FormControl(event.setup_time || 0),
        breakdown_time: new FormControl(event.breakdown_time || 0),
        assets: new FormControl(event.extension_data?.assets),
        // has_catering: new FormControl(event.has_catering || false),
        visitor_type: new FormControl(event.extension_data?.visitor_type),
        location: new FormControl(event.location),
        needs_space: new FormControl(true),
        needs_parking: new FormControl(
            event.extension_data?.needs_parking || false
        ),
        event_type: new FormControl(event.extension_data?.event_type || ''),
        category: new FormControl(event.extension_data?.category || ''),
        tags: new FormControl(event.extension_data?.tags || []),
        update_master: new FormControl(false),
        system: new FormControl<any>(event.system),
    });
    form.get('organiser').valueChanges.subscribe((o) =>
        form.controls.host.setValue(o?.email)
    );
    form.get('resources').valueChanges.subscribe((l) => {
        form.controls.system.setValue(l?.length ? (l[0] as any) : null);
        form.controls.assets[l?.length ? 'enable' : 'disable']();
    });
    const setCateringTime = () => {
        if (!form.value.catering?.length || !form.getRawValue().date) return;
        form.patchValue(
            {
                catering: form.value.catering.map((order: any) => ({
                    ...order,
                    event: {
                        date: form.value.all_day
                            ? startOfDay(form.getRawValue().date)
                            : form.getRawValue().date,
                        duration: form.value.all_day
                            ? 24 * 60
                            : form.value.duration,
                    },
                })),
            },
            { emitEvent: false }
        );
    };
    form.valueChanges.subscribe((v) => {
        if (form.getRawValue().date < Date.now() && form.value.id) {
            form.get('date')?.disable({ emitEvent: false });
        } else {
            form.get('date')?.enable({ emitEvent: false });
        }
        if (v.date || v.duration || v.all_day) setCateringTime();
    });
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
        setCateringTime();
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
        setCateringTime();
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
        if (
            form.value.recurrence?._pattern !== 'custom_display' &&
            form.value.recurrence?._pattern !== 'none'
        ) {
            form.patchValue({
                recurrence: {
                    ...form.value.recurrence,
                    days_of_week: [new Date(date).getDay()],
                },
            });
        }
        setCateringTime();
    });
    form.controls.catering.valueChanges.subscribe((_) => {
        const catering = form.getRawValue().catering || [];
        if (
            catering?.length &&
            (settings?.get('app.events.catering_notes_required') ||
                settings.value('require_catering_notes'))
        ) {
            form.get('catering_notes')?.setValidators([Validators.required]);
            form.get('catering_notes').patchValue(form.value.catering_notes);
        } else {
            form.get('catering_notes')?.clearValidators();
            form.get('catering_notes').setErrors(null);
        }
        form.updateValueAndValidity();
    });
    form.get('catering_charge_code').setValidators([
        validateCateringField(form.get('catering')),
    ]);
    if (event.id) {
        form.get('host').disable();
        form.get('organiser').disable();
    }
    if (event.state === 'started') form.get('date').disable();
    return form;
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
    date: number = getTime(new Date())
) {
    const now = new Date(date);
    const next_free_slot = getNextFreeTimeSlot(bookings, date, 5);
    const start = new Date(next_free_slot.start);
    const end = new Date(next_free_slot.end);
    const currently_free = timePeriodsIntersect(
        date,
        date,
        next_free_slot.start,
        next_free_slot.end
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
    filter_options: { space: string; from: number; to: number }
) {
    const from = filter_options.from;
    const to = filter_options.to;
    const filtered_list = list.filter((booking) => {
        const start = new Date(booking.date);
        const end = addMinutes(start, booking.duration);
        return (
            !booking.resources.find(
                (space) => space.email === filter_options.space
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
            })
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
