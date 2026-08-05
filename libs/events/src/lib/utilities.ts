import { Injector, signal, type WritableSignal } from '@angular/core';
import {
    disabled,
    form,
    required,
    validate,
    type FieldTree,
} from '@angular/forms/signals';
import {
    Booking,
    CalendarEvent,
    guardModelUndefinedWrites,
    LOCAL_TIMEZONE,
    onFieldChange,
    SettingsService,
    setupFormTimeSync,
    type FormTimeSyncHandle,
    type SignalFormRef,
    timePeriodsIntersect,
    unique,
    User,
    currentUser,
} from '@placeos/common';
import {
    add,
    addMinutes,
    differenceInMinutes,
    format,
    formatDuration,
    getTime,
    isAfter,
    isSameDay,
    setHours,
    setMinutes,
    startOfDay,
    startOfMinute,
} from 'date-fns';

import { getNextFreeTimeSlot } from './helpers';

let BOOKING_DATE = add(setMinutes(setHours(new Date(), 6), 0), { days: -1 });

/** Raw value held by the event form model. */
export interface EventFormValue {
    id: string;
    ical_uid: string;
    host: string;
    organiser: User;
    creator: string;
    calendar: string;
    attendees: any[];
    resources: any[];
    title: string;
    body: string;
    private: boolean;
    date: number;
    duration: number;
    all_day: boolean;
    date_end: number;
    recurring: boolean;
    recurrence: any;
    recurring_event_id: string;
    master: any;
    attachments: any;
    catering: any[];
    catering_notes: string;
    catering_charge_code: string;
    setup_time: number;
    breakdown_time: number;
    assets: any[];
    visitor_type: any;
    location: string;
    visibility: string;
    needs_space: boolean;
    needs_parking: boolean;
    event_type: string;
    category: string;
    tags: string[];
    update_master: boolean;
    system: any;
    attendance_type: string;
    timezone: string;
    shared_event: boolean;
    view_access: string;
    images: any[];
    featured: boolean;
    meeting_provider: any;
}

/** Build the raw event form value from a calendar event. */
export function eventFormValue(
    event: CalendarEvent = new CalendarEvent(),
): EventFormValue {
    // Every field must be non-`undefined`: the signal-forms FieldTree only
    // exposes a sub-field for keys whose value is defined, so an `undefined`
    // seed would make `[formField]="form.x"` bind to nothing at runtime.
    return {
        id: event.id || '',
        ical_uid: event.ical_uid || '',
        host:
            event.host || event.organiser?.email || currentUser()?.email || '',
        organiser: event.organiser || ({ email: event.host || '' } as User),
        creator: event.creator || currentUser()?.email || '',
        calendar: event.calendar || '',
        attendees: event.attendees || [],
        resources: event.resources || [],
        title: event.title || '',
        body: event.body || '',
        private: event.private ?? false,
        date: event.date ?? 0,
        duration: event.duration ?? 0,
        all_day: event.all_day ?? false,
        date_end: event.date_end ?? 0,
        recurring: event.recurring ?? false,
        recurrence: event.recurrence ?? null,
        recurring_event_id: event.recurring_event_id || '',
        master: event.master ?? null,
        attachments: event.attachments ?? null,
        catering: (event.extension_data?.catering as any) || [],
        catering_notes: event.extension_data?.catering?.[0]?.notes || '',
        catering_charge_code:
            event.extension_data?.catering?.[0]?.charge_code || '',
        setup_time: event.setup_time || 0,
        breakdown_time: event.breakdown_time || 0,
        assets: event.extension_data?.assets || [],
        visitor_type: event.extension_data?.visitor_type ?? null,
        location: event.location || '',
        visibility: event.visibility || 'normal',
        needs_space: true,
        needs_parking: event.extension_data?.needs_parking || false,
        event_type: event.extension_data?.event_type || '',
        category: event.extension_data?.category || '',
        tags: event.extension_data?.tags || [],
        update_master: false,
        system: event.system ?? null,
        attendance_type: event.extension_data?.attendance_type || 'ONSITE',
        timezone: event.timezone || LOCAL_TIMEZONE,
        shared_event: event.extension_data?.shared_event || false,
        view_access: event.extension_data?.view_access || 'OPEN',
        images: event.extension_data?.images || [],
        featured: event.extension_data?.featured || false,
        meeting_provider: event.meeting_provider || null,
    } as EventFormValue;
}

/** FieldTree for the event form, with attached time-sync + lock handles. */
export type EventForm = FieldTree<EventFormValue> & {
    _time_sync?: FormTimeSyncHandle;
    _lock_start_time?: WritableSignal<boolean>;
};

export type EventFormRef = SignalFormRef<EventFormValue, EventForm> & {
    /** Time-sync handle for runtime duration/bookable-hours reconfiguration. */
    time_sync: FormTimeSyncHandle;
    /** Signal controlling whether the start time is locked (in-progress events). */
    lock_start_time: WritableSignal<boolean>;
};

export function generateEventForm(
    event: CalendarEvent = new CalendarEvent(),
    settings?: SettingsService,
    injector?: Injector,
): EventFormRef {
    if (!event) event = new CalendarEvent();
    const lock_start_time = signal(
        !!event.id &&
            (event.state === 'started' || event.state === 'in_progress'),
    );
    const has_id = !!event.id;
    const notes_required = () =>
        !!(
            settings?.get('app.events.catering_notes_required') ||
            settings?.value('require_catering_notes')
        );

    const model: WritableSignal<EventFormValue> = signal(
        eventFormValue(event),
    );

    // Keep every key defined so signal-forms never drops a sub-field bound via
    // `[formField]` (an undefined value triggers `this.field() is not a
    // function`). Guards writes synchronously — no reactive surface.
    guardModelUndefinedWrites(model, eventFormValue(new CalendarEvent()));

    const event_form = form<EventFormValue>(model, (p) => {
        required(p.host);
        required(p.date);
        validate(p.duration, ({ value, valueOf }) => {
            const date = valueOf(p.date);
            return date && isAfter(Date.now(), addMinutes(date, value()))
                ? { kind: 'duration' }
                : undefined;
        });
        required(p.catering_notes, {
            when: ({ valueOf }) =>
                !!valueOf(p.catering)?.length && notes_required(),
        });
        disabled(p.host, { when: () => has_id });
        disabled(p.organiser, { when: () => has_id });
        disabled(p.date, { when: () => lock_start_time() });
        disabled(p.assets, { when: ({ valueOf }) => !valueOf(p.resources)?.length });
        disabled(p.duration, { when: ({ valueOf }) => !!valueOf(p.all_day) });
    }, { injector }) as EventForm;

    // organiser → host
    onFieldChange(
        model,
        (v) => v.organiser,
        (organiser) =>
            // Coalesce to '' so the `host` sub-field is never removed from the
            // FieldTree (an undefined value breaks its `required`/`[formField]`).
            model.update((m) => ({ ...m, host: (organiser as any)?.email ?? '' })),
        injector,
    );
    // resources → system
    onFieldChange(
        model,
        (v) => v.resources,
        (resources) =>
            model.update((m) => ({
                ...m,
                system: resources?.length ? resources[0] : null,
            })),
        injector,
    );
    // Sync recurrence day-of-week when the date changes
    onFieldChange(
        model,
        (v) => v.date,
        (date) => {
            const recurrence = model().recurrence;
            // Non-recurring events have an empty recurrence. Writing
            // days_of_week into it invents a recurrence and makes the form
            // look edited when only the date was seeded.
            if (!recurrence?.pattern) return;
            if (
                recurrence._pattern !== 'custom_display' &&
                recurrence._pattern !== 'none'
            ) {
                model.update((m) => ({
                    ...m,
                    recurrence: {
                        ...m.recurrence,
                        days_of_week: [new Date(date).getDay()],
                    },
                }));
            }
        },
        injector,
    );

    const setCateringTime = () => {
        const value = model();
        if (!value.catering?.length || !value.date) return;
        const event = {
            date: value.all_day ? startOfDay(value.date) : value.date,
            duration: value.all_day ? 24 * 60 : value.duration,
        };
        if (
            value.catering.every(
                (order: any) =>
                    +order.event?.date === +event.date &&
                    order.event?.duration === event.duration,
            )
        )
            return;
        model.update((m) => ({
            ...m,
            catering: (m.catering || []).map((order: any) => ({
                ...order,
                event,
            })),
        }));
    };
    // Recompute catering times when the catering list changes
    onFieldChange(model, (v) => v.catering, setCateringTime, injector);

    const time_sync = setupFormTimeSync(
        model,
        { on_time_change: setCateringTime },
        injector,
    );

    return { model, form: event_form, time_sync, lock_start_time };
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
    date: number = getTime(new Date()),
) {
    const now = new Date(date);
    const next_free_slot = getNextFreeTimeSlot(bookings, date, 5);
    const start = new Date(next_free_slot.start);
    const end = new Date(next_free_slot.end);
    const currently_free = timePeriodsIntersect(
        date,
        date,
        next_free_slot.start,
        next_free_slot.end,
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
    filter_options: { space: string; from: number; to: number },
) {
    const from = filter_options.from;
    const to = filter_options.to;
    const filtered_list = list.filter((booking) => {
        const start = new Date(booking.date);
        const end = addMinutes(start, booking.duration);
        return (
            !booking.resources?.find(
                (space) => space.email === filter_options.space,
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
