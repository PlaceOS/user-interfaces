import { Injectable } from '@angular/core';
import { BaseClass } from '@placeos/common';
import { queryBookings } from '@placeos/bookings';
import { queryEvents } from '@placeos/events';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CalendarEvent } from '@placeos/events';
import { getUnixTime, startOfDay, endOfDay } from 'date-fns';

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

    events: Observable<CalendarEvent[]>;

    constructor() {
        super();
    }

    getBookings() {
        this.events = this._date.pipe(
            switchMap(() =>
                queryEvents({
                    period_start: getUnixTime(startOfDay(this.date)),
                    period_end: getUnixTime(endOfDay(this.date)),
                })
            )
        );
    }
}
