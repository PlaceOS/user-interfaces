import { Injectable } from '@angular/core';
import { updateMetadata } from '@placeos/ts-client';
import { HashMap, notifyError, notifySuccess } from '@placeos/common';
import {
    CalendarEvent,
    checkinEventGuest,
    newCalendarEventFromBooking,
    showEvent,
} from '@placeos/events';
import {
    GuestUser,
    generateGuestForm,
    showGuest,
    listGuestMeetings,
} from '@placeos/users';
import { isSameDay } from 'date-fns';
import { BehaviorSubject } from 'rxjs';
import { checkinBookingAttendee } from '@placeos/bookings';
import { SpacePipe } from '@placeos/spaces';

@Injectable({
    providedIn: 'root',
})
export class CheckinStateService {
    /** Current event being checked in */
    private _event = new BehaviorSubject<CalendarEvent>(null);
    /** Current guest being checked in */
    private _guest = new BehaviorSubject<GuestUser>(null);
    /** Photo of the current guest */
    private _photo = new BehaviorSubject<string>('');
    /** Photo of the current guest */
    private _error = new BehaviorSubject<string>('');
    /** Form for the current guest details */
    private _form = new BehaviorSubject(generateGuestForm());
    private _space_pipe = new SpacePipe();

    public readonly event = this._event.asObservable();
    public readonly guest = this._guest.asObservable();
    public readonly error = this._error.asObservable();
    public readonly form = this._form.asObservable();

    public clear() {
        this._guest.next(null);
        this._event.next(null);
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
            const event = await showEvent(event_id).toPromise();
            this._guest.next(guest);
            this._event.next(event);
            this._form.next(generateGuestForm(guest, event.host));
            return { guest, event };
        }
        if (guest.booking) {
            const event = newCalendarEventFromBooking(guest.booking);
            this._guest.next(guest);
            this._event.next(event);
            this._form.next(generateGuestForm(guest, event.host));
            return { guest, event };
        }
        const upcoming = await listGuestMeetings(email).toPromise();
        const today = new Date();
        const todays_events = upcoming.filter((event) =>
            isSameDay(new Date(event.date), today)
        );
        todays_events.sort((a, b) => a.date - b.date);
        if (todays_events.length <= 0) {
            throw new Error(`No meetings for guest "${email}" today`);
        }
        this._guest.next(guest);
        this._event.next(todays_events[0]);
        this._form.next(generateGuestForm(guest, todays_events[0].host));
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

    public async checkinGuest() {
        const guest = this._guest.getValue();
        const event = this._event.getValue();
        if (!guest || !event) return;
        const checkin_fn = this._checkinCall(event, guest.email, true);
        await checkin_fn.catch((e) => {
            notifyError(
                `Error checking in ${guest.name} for ${event.organiser?.name}'s meeting`
            );
            throw e;
        });
        notifySuccess(
            `Successfully checked in ${guest.name} for ${event.organiser?.name}'s meeting`
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

    private async _checkinCall(
        data: CalendarEvent,
        email: string,
        state: boolean = true
    ) {
        if (data.from_bookings)
            return checkinBookingAttendee(data.id, email, state).toPromise();
        const event = new CalendarEvent(data);
        const space = await this._space_pipe.transform(
            event.resources[0]?.email
        );
        return checkinEventGuest(
            event.id,
            email,
            state,
            event.resources?.length
                ? {
                      // calendar: event.host || currentUser()?.email,
                      system_id: space.id,
                  }
                : {}
        ).toPromise();
    }
}
