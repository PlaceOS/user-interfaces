import { Injectable } from '@angular/core';
import { updateMetadata } from '@placeos/ts-client';
import { HashMap, notifyError } from '@placeos/common';
import { CalendarEvent, checkinEventGuest, showEvent } from '@placeos/events';
import {
    GuestUser,
    generateGuestForm,
    showGuest,
    listGuestMeetings,
} from '@placeos/users';
import { isSameDay } from 'date-fns';
import { BehaviorSubject } from 'rxjs';

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
        await updateMetadata(guest.email, {
            name: 'preferences',
            details: { ...guest, ...form.value, ...(data || {}) },
        }).toPromise();
    }

    public async checkinGuest() {
        const guest = this._guest.getValue();
        const event = this._event.getValue();
        if (!guest || !event) return;
        await checkinEventGuest(event.id, guest.email, true, {
            system_id: event.system?.id || event.resources[0]?.id,
        }).toPromise();
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
