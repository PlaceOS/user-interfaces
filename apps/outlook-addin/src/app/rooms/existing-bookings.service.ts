import { Injectable } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { queryBookings } from '@placeos/bookings';
import { queryEvents } from '@placeos/events';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { CalendarEvent } from '@placeos/events';
import { getUnixTime, startOfDay, endOfDay } from 'date-fns';

@Injectable({
    providedIn: 'root',
})
export class ExistingBookingsService extends AsyncHandler {
    private _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        null
    );
    public loading$: Observable<boolean> = this._loading.asObservable();

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
        this.getBookings();
    }

    async getBookings() {
        this._loading.next(true);
        this.events = this._date.pipe(
            switchMap(() =>
                queryEvents({
                    period_start: getUnixTime(startOfDay(this.date)),
                    period_end: getUnixTime(endOfDay(this.date)),
                })
            )
        );
        this._loading.next(false);
    }
}
