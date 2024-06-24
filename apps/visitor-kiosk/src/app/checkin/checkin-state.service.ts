import { Injectable } from '@angular/core';
import { HashMap, notifyError, notifySuccess } from '@placeos/common';
import { GuestUser, generateGuestForm, showGuest } from '@placeos/users';
import { addMinutes, getUnixTime, isSameDay, startOfHour } from 'date-fns';
import { BehaviorSubject } from 'rxjs';
import {
    Booking,
    checkinBooking,
    queryAllBookings,
    setBookingState,
    showBooking,
    updateBooking,
} from '@placeos/bookings';
import { SpacePipe } from '@placeos/spaces';

@Injectable({
    providedIn: 'root',
})
export class CheckinStateService {
    /** Current event being checked in */
    private _booking = new BehaviorSubject<Booking>(
        new Booking({
            asset_id: 'jim@1234.com',
            asset_name: 'Jim Jones',
            user_email: 'alex@place.tech',
            user_name: 'Alex Sorafumo',
            date: startOfHour(Date.now()).valueOf(),
            duration: 60,
            zones: ['zone-Do2HJ00hTG'],
        })
    );
    /** Current guest being checked in */
    private _guest = new BehaviorSubject<GuestUser>(null);
    /** Photo of the current guest */
    private _photo = new BehaviorSubject<string>('');
    /** Photo of the current guest */
    private _error = new BehaviorSubject<string>('');
    /** Form for the current guest details */
    private _form = new BehaviorSubject(generateGuestForm());
    private _space_pipe = new SpacePipe();

    public readonly event = this._booking.asObservable();
    public readonly guest = this._guest.asObservable();
    public readonly error = this._error.asObservable();
    public readonly form = this._form.asObservable();

    public clear() {
        this._guest.next(null);
        this._booking.next(null);
        this._photo.next(null);
    }

    public setPhoto(data: string) {
        this._photo.next(data);
    }

    public setError(message: string) {
        this._error.next(message);
    }

    /** Load guest and event data */
    public async loadGuestAndEvent(email: string, event_id?: string) {
        const guest = await showGuest(email).toPromise();
        if (event_id) {
            const event = await showBooking(event_id).toPromise();
            this._guest.next(guest);
            this._booking.next(event);
            this._form.next(generateGuestForm(guest, event.user_email));
            return { guest, event };
        }
        if (guest.booking) {
            this._guest.next(guest);
            this._booking.next(guest.booking);
            this._form.next(generateGuestForm(guest, guest.booking.user_email));
            return { guest, event: guest.booking };
        }
        let upcoming = await queryAllBookings({
            type: 'visitor',
            period_start: getUnixTime(Date.now()),
            period_end: getUnixTime(addMinutes(Date.now(), 120)),
        }).toPromise();
        upcoming = upcoming.filter(
            (_) => _.user_email === email || _.asset_id === email
        );
        const today = new Date();
        const todays_events = upcoming.filter((event) =>
            isSameDay(new Date(event.date), today)
        );
        todays_events.sort((a, b) => a.date - b.date);
        if (todays_events.length <= 0) {
            throw new Error(`No meetings for guest "${email}" today`);
        }
        this._guest.next(guest);
        this._booking.next(todays_events[0]);
        this._form.next(generateGuestForm(guest, todays_events[0].user_email));
        return { guest, event: todays_events[0] };
    }

    public async updateGuest(data?: HashMap) {
        const guest = this._guest.getValue();
        const form = this._form.getValue();
        if (!guest || !form) return;
        // await updateMetadata(guest.email, {
        //     name: 'preferences',
        //     details: { ...guest, ...form.value, ...(data || {}) },
        //     description: '',
        // }).toPromise();
    }

    public async completeInduction() {
        const guest = this._guest.getValue();
        const event = this._booking.getValue() || guest.extension_data.event;
        if (!guest || !event) return;
        await setBookingState(event.id, 'inducted').toPromise();
        const details = {
            ...event,
            induction: true,
        };
        delete details.parent_id;
        await updateBooking(event.id, details).toPromise();
    }

    public async declineInduction() {
        const guest = this._guest.getValue();
        const event = this._booking.getValue() || guest.extension_data.event;
        if (!guest || !event) return;
        await setBookingState(event.id, 'declined_induction').toPromise();
    }

    public async checkinGuest() {
        const guest = this._guest.getValue();
        const event = this._booking.getValue() || guest.extension_data.event;
        if (!guest || !event) return;
        const checkin_fn = checkinBooking(event.id, true).toPromise();
        await checkin_fn.catch(async (e) => {
            notifyError(
                e ||
                    `Error checking in ${guest.name} for ${
                        event.user_name || event.user_email
                    }'s meeting.`
            );
            throw e;
        });
        notifySuccess(
            `Successfully checked in ${guest.name} for ${
                event.user_name || event.user_email
            }'s meeting`
        );
    }

    public printPass() {
        try {
            // TODO: actually trigger print visitor pass
            return new Promise((res) => setTimeout(() => res(''), 5000));
        } catch (err) {
            notifyError('Error printing visitor pass');
        }
        return Promise.reject();
    }
}
