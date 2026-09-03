import { Injectable, signal } from '@angular/core';
import {
    Booking,
    guardModelUndefinedWrites,
    GuestUser,
    HashMap,
    i18n,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { addMinutes, getUnixTime, isSameDay } from 'date-fns';

import {
    checkinBooking,
    queryAllBookings,
    showBooking,
    updateBooking,
    updateBookingInductionStatus,
} from '@placeos/bookings';
import { SpacePipe } from '@placeos/events';
import { showGuest } from '@placeos/users';

export interface CheckinGuestDetails {
    host: string;
    name: string;
    email: string;
    phone: string;
    organisation: string;
    pass_number: string;
}

function guestDetailsForm(
    guest: GuestUser = new GuestUser(),
    host = '',
): CheckinGuestDetails {
    return {
        host,
        name: guest.name || '',
        email: guest.email || '',
        phone: guest.phone || '',
        organisation: guest.organisation || '',
        pass_number: guest.extension_data?.pass_number || '',
    };
}

@Injectable({
    providedIn: 'root',
})
export class CheckinStateService {
    /** Current event being checked in */
    private _booking = signal<Booking>(null);
    /** Current guest being checked in */
    private _guest = signal<GuestUser>(null);
    /** Photo of the current guest */
    private _photo = signal<string>('');
    /** Photo of the current guest */
    private _error = signal<string>('');
    /** Form for the current guest details */
    public readonly form = signal<CheckinGuestDetails>(guestDetailsForm());
    private _space_pipe = new SpacePipe();

    public readonly photo = this._photo.asReadonly();
    public readonly event = this._booking.asReadonly();
    public readonly guest = this._guest.asReadonly();
    public readonly error = this._error.asReadonly();

    public metadata = '';

    constructor() {
        // Keep every key defined so signal-forms never drops a sub-field bound
        // via `[formField]` in checkin-details (an undefined/partial value
        // triggers `this.field() is not a function`). Guards writes
        // synchronously — no reactive surface.
        guardModelUndefinedWrites(this.form, guestDetailsForm());
    }

    public clear() {
        this._guest.set(null);
        this._booking.set(null);
        this._photo.set(null);
    }

    public setBooking(booking: Booking, metadata = '') {
        const guest = new GuestUser({
            email: booking.asset_id,
            name: booking.asset_name,
            organisation: booking.extension_data?.organisation,
            phone: booking.extension_data?.phone,
            extension_data: booking.extension_data || {},
        });
        this._booking.set(booking);
        this._guest.set(guest);
        this.form.set(guestDetailsForm(guest, booking.user_email));
        this.metadata = metadata;
    }

    public setPhoto(data: string) {
        this._photo.set(data);
    }

    public setError(message: string) {
        this._error.set(message);
    }

    /** Load guest and event data */
    public async loadGuestAndEvent(email: string, event_id?: string) {
        const guest = await showGuest(email);
        if (!guest.booking && event_id) {
            const event = await showBooking(event_id);
            this._guest.set(guest);
            this._booking.set(event);
            this.form.set(guestDetailsForm(guest, event.user_email));
            return { guest, event };
        }
        if (guest.booking) {
            this._guest.set(guest);
            this._booking.set(guest.booking);
            this.form.set(guestDetailsForm(guest, guest.booking.user_email));
            return { guest, event: guest.booking };
        }
        let upcoming = await queryAllBookings({
            type: 'visitor',
            period_start: getUnixTime(Date.now()),
            period_end: getUnixTime(addMinutes(Date.now(), 120)),
        });
        upcoming = upcoming.filter(
            (_) => _.user_email === email || _.asset_id === email,
        );
        const today = new Date();
        const todays_events = upcoming.filter((event) =>
            isSameDay(new Date(event.date), today),
        );
        todays_events.sort((a, b) => a.date - b.date);
        if (todays_events.length <= 0) {
            throw new Error(i18n('APP.VISITOR_KIOSK.NOT_FOUND', { email }));
        }
        this._guest.set(guest);
        this._booking.set(todays_events[0]);
        this.form.set(guestDetailsForm(guest, todays_events[0].user_email));
        return { guest, event: todays_events[0] };
    }

    public async updateGuest(data?: HashMap) {
        const guest = this._guest();
        const form = this.form();
        if (!guest || !form) return;
        const booking = this._booking() || guest.extension_data.event;
        if (!booking || this.metadata) return;
        const updated_booking = await updateBooking(
            booking.id,
            new Booking({
                ...booking,
                asset_id: form.email || booking.asset_id,
                asset_name: form.name || booking.asset_name,
                description: form.name || booking.description,
                extension_data: {
                    ...booking.extension_data,
                    pass_number:
                        form.pass_number || booking.extension_data?.pass_number,
                    organisation:
                        form.organisation ||
                        booking.extension_data?.organisation,
                    phone: form.phone || booking.extension_data?.phone,
                },
            }).toJSON(),
        );
        this.setBooking(updated_booking);
    }

    public async completeInduction() {
        const guest = this._guest();
        const event = this._booking() || guest.extension_data.event;
        if (!guest || !event) return;
        const updated_booking = await updateBookingInductionStatus(
            event.id,
            'accepted',
        );
        this._booking.set(updated_booking);
    }

    public async declineInduction() {
        const guest = this._guest();
        const event = this._booking() || guest.extension_data.event;
        if (!guest || !event) return;
        await updateBookingInductionStatus(event.id, 'declined');
    }

    public async checkinGuest(state = true) {
        const guest = this._guest();
        const event = this._booking() || guest.extension_data.event;
        if (!guest || !event) return;
        const checkin_fn = checkinBooking(event.id, state);
        const vars = {
            guest: guest.name,
            host: event.user_name || event.user_email,
        };
        const result = await checkin_fn.catch(async (e) => {
            notifyError(e || i18n('APP.VISITOR_KIOSK.ERROR_CHECKIN', vars));
            throw e;
        });
        if (!result) return;

        notifySuccess(i18n('APP.VISITOR_KIOSK.SUCCESS_CHECKIN', vars));
        this.metadata = '';
    }

    public printPass() {
        try {
            // TODO: actually trigger print visitor pass
            return new Promise((res) => setTimeout(() => res(''), 5000));
        } catch (err) {
            notifyError(i18n('APP.VISITOR_KIOSK.ERROR_PRINT'));
        }
        return Promise.reject();
    }
}
