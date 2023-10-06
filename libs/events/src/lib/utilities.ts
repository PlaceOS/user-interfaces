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
} from 'date-fns';
import { currentUser, timePeriodsIntersect, unique } from '@placeos/common';

import { CalendarEvent } from './event.class';
import { endInFuture } from './validators';
import { getNextFreeTimeSlot } from './helpers';
import { User } from 'libs/users/src/lib/user.class';
import { Booking } from 'libs/bookings/src/lib/booking.class';
import { assetsToGroups } from 'libs/assets/src/lib/asset.utilities';

let BOOKING_DATE = add(setMinutes(setHours(new Date(), 6), 0), { days: -1 });

const validateCateringField =
    (catering_control: AbstractControl) => (control: AbstractControl) => {
        if (catering_control.value?.length && !control.value) {
            return { catering_field: 'Catering sub-fields are required' };
        }
        return null;
    };

export function generateEventForm(event: CalendarEvent = new CalendarEvent()) {
    if (!event) event = new CalendarEvent();
    const form = new FormGroup({
        id: new FormControl(event.id),
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
        recurring: new FormControl(event.recurring),
        recurrence: new FormControl(event.recurrence),
        recurring_event_id: new FormControl(event.recurring_event_id),
        master: new FormControl(event.master),
        attachments: new FormControl(event.attachments),
        catering: new FormControl(
            (event.extension_data?.catering[0]?.items || []) as any
        ),
        catering_notes: new FormControl(
            event.extension_data?.catering[0]?.notes || ''
        ),
        catering_charge_code: new FormControl(
            event.extension_data?.catering[0]?.charge_code || ''
        ),
        setup: new FormControl(event.extension_data?.setup || 0),
        breakdown: new FormControl(event.extension_data?.breakdown || 0),
        assets: new FormControl(
            assetsToGroups(event.extension_data?.assets || [])
        ),
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
    let previous_time = form.value.date;
    let previous_duration = form.value.duration;
    let previous_all_day = form.value.all_day;
    form.valueChanges.subscribe((v) => {
        if (form.value.date < Date.now() && form.value.id) {
            form.get('date')?.disable({ emitEvent: false });
        } else {
            form.get('date')?.enable({ emitEvent: false });
        }
        if (!('all_day' in v)) {
            previous_time = v.date || previous_time;
            previous_duration = v.duration || previous_duration;
        }
        previous_all_day = v.all_day ?? previous_all_day;
    });
    form.controls.date.valueChanges.subscribe((date) => {
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
    });
    form.controls.all_day.valueChanges.subscribe((all_day) => {
        if (all_day) {
            previous_time = form.value.date;
            previous_duration = form.value.duration;
            form.patchValue({
                date: setHours(setMinutes(previous_time, 0), 6).valueOf(),
                duration: 12 * 60,
            });
            form.controls.duration.disable();
        } else if (previous_all_day && !all_day) {
            form.controls.duration.enable();
            form.patchValue({
                date: Math.max(Date.now() - 1, previous_time),
                duration: previous_duration,
            });
        }
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
