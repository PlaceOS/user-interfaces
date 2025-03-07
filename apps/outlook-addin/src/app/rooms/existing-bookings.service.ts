import { Injectable } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { CalendarEvent, queryEvents } from '@placeos/events';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ExistingBookingsService extends AsyncHandler {
    private _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        null,
    );
    public loading$: Observable<boolean> = this._loading.asObservable();

    private _date: BehaviorSubject<number> = new BehaviorSubject<number>(
        Date.now(),
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
                }),
            ),
        );
        this._loading.next(false);
    }
}
