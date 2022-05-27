import { Injectable } from '@angular/core';
import { BaseClass } from '@placeos/common';
import { queryBookings } from '@placeos/bookings';
import { Observable, BehaviorSubject } from 'rxjs';
import { CalendarEvent } from '@placeos/events';

@Injectable({
    providedIn: 'root',
})
export class ExistingBookingsService extends BaseClass {
    private _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        false
    );
    public loading$: Observable<boolean> = this._loading.asObservable();
    private _date: BehaviorSubject<number> = new BehaviorSubject(Date.now());

    private _bookings: BehaviorSubject<CalendarEvent[]> = new BehaviorSubject<
        CalendarEvent[]
    >(null);
    public bookings$: Observable<CalendarEvent[]> =
        this._bookings.asObservable();

    get bookings() {
        return this._bookings.getValue();
    }

    set bookings(bookings: CalendarEvent[]) {
        this._bookings.next(bookings);
    }

    constructor() {
        super();
    }

    getBookings() {}
}
