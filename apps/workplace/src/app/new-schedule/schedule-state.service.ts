import { Injectable } from '@angular/core';
import { queryBookings } from '@placeos/bookings';
import { BaseClass } from '@placeos/common';
import { CalendarEvent, queryEvents } from '@placeos/events';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ScheduleStateService extends BaseClass {
    private _poll = new BehaviorSubject(0);
    private _loading = new BehaviorSubject(false);
    private _filters = new BehaviorSubject({
        shown_types: ['event', 'desk', 'parking'],
    });
    private _date = new BehaviorSubject(Date.now());
    /** List of calendar events for the selected date */
    public readonly events = combineLatest([this._date, this._poll]).pipe(
        switchMap(([date]) =>
            queryEvents({
                period_start: getUnixTime(startOfDay(date)),
                period_end: getUnixTime(endOfDay(date)),
            })
        )
    );
    /** List of desk bookings for the selected date */
    public readonly desks = combineLatest([this._date, this._poll]).pipe(
        switchMap(([date]) =>
            queryBookings({
                period_start: getUnixTime(startOfDay(date)),
                period_end: getUnixTime(endOfDay(date)),
                type: 'desk',
            })
        )
    );
    /** List of parking bookings for the selected date */
    public readonly parking = combineLatest([this._date, this._poll]).pipe(
        switchMap(([date]) =>
            queryBookings({
                period_start: getUnixTime(startOfDay(date)),
                period_end: getUnixTime(endOfDay(date)),
                type: 'parking',
            })
        )
    );

    /** List of events and bookings for the selected date */
    public readonly bookings = combineLatest([
        this.events,
        this.desks,
        this.parking,
    ]).pipe(
        map(([e, d, p]) => [...e, ...d, ...p].sort((a, b) => a.date - b.date)),
        tap(() => this.timeout('end_loading', () => this._loading.next(false)))
    );
    /** Filtered list of events and bookings for the selected date */
    public readonly filtered_bookings = combineLatest([
        this.bookings,
        this._filters,
    ]).pipe(
        map(([bkns, filters]) =>
            bkns.filter(
                (_) =>
                    (_ instanceof CalendarEvent &&
                        filters?.shown_types?.includes('event')) ||
                    filters?.shown_types?.includes(_.type)
            )
        )
    );
    /** Currently selected date */
    public readonly filters = this._filters.asObservable();
    /** Currently selected date */
    public readonly date = this._date.asObservable();
    /** Whether events and bookings are loading */
    public readonly loading = this._loading.asObservable();

    constructor() {
        super();
        this.subscription(
            'date',
            combineLatest([this._date, this._poll]).subscribe((_) => this._loading.next(true))
        );
    }

    public setDate(date: number) {
        this._date.next(date);
    }

    public async toggleType(name: string, clear: boolean = false) {
        const filters = this._filters.getValue() || { shown_types: [] };
        const { shown_types } = filters
        if (shown_types && (shown_types.includes(name) || clear)) {
            this._filters.next({ ...filters, shown_types: shown_types.filter(_ => _ !== name) });
        } else {
            this._filters.next({ ...filters, shown_types: [...shown_types, name] });
        }
    }
}
