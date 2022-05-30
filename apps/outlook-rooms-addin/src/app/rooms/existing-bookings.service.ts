import { Injectable } from '@angular/core';
import { BaseClass } from '@placeos/common';
import { queryBookings } from '@placeos/bookings';
import { queryEvents } from '@placeos/events';
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

    private _date: BehaviorSubject<number> = new BehaviorSubject<number>(
        Date.now()
    );

    date$: Observable<number> = this._date.asObservable();

    get date() {
        return this._date.getValue();
    }

    set date(date) {
        this._date.next(date);
    }

    constructor() {
        super();
    }

    getBookings() {
        let result;
        result = queryEvents({
            period_start: 1653904580,
            period_end: 1753909580,
        });

        console.log(result);
    }
}
