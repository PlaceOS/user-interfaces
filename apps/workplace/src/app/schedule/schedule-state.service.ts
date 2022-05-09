import { Injectable } from '@angular/core';
import { Booking, queryBookings } from '@placeos/bookings';
import { BaseClass, timePeriodsIntersect, unique } from '@placeos/common';
import { CalendarEvent, queryEvents } from '@placeos/events';
import { addDays, endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest, forkJoin, Observable } from 'rxjs';
import {
    catchError,
    debounceTime,
    map,
    mergeMap,
    shareReplay,
    tap,
} from 'rxjs/operators';

export type BookingLike = CalendarEvent & Booking;

export interface ScheduleOptions {
    calendar?: string;
    start: number;
}

@Injectable({
    providedIn: 'root',
})
export class ScheduleStateService extends BaseClass {
    private _poll = new BehaviorSubject(0);
    private _options = new BehaviorSubject<ScheduleOptions>({
        start: Date.now(),
    });
    private _loading = new BehaviorSubject<string>('');
    private _schedule = new BehaviorSubject<BookingLike[]>([]);

    public readonly options = this._options.asObservable();
    public readonly loading = this._loading.asObservable();
    public readonly schedule = this._loading.asObservable();

    public readonly events: Observable<BookingLike[]> = combineLatest([
        this._options,
        this._poll,
    ]).pipe(
        debounceTime(1000),
        mergeMap(([options]) => {
            this._loading.next('Loading schedule...');
            const query: any = {
                period_start: getUnixTime(startOfDay(options.start)),
                period_end: getUnixTime(addDays(endOfDay(options.start), 6)),
            };
            if (options.calendar) {
                query.calendar = options.calendar;
            }
            this._schedule.next(
                this._schedule
                    .getValue()
                    .filter(
                        (_) =>
                            !timePeriodsIntersect(
                                query.period_start * 1000,
                                query.period_end * 1000,
                                _.date,
                                _.date + _.duration * 60 * 1000
                            )
                    )
            );
            return forkJoin([
                queryEvents({ ...query }).pipe(catchError((_) => [])),
                queryBookings({ ...query, type: 'desk' }).pipe(catchError((_) => [])),
            ]);
        }),
        map(([events, bookings]) => {
            const list = [
                ...this._schedule.getValue(),
                ...events,
                ...bookings.filter(_ => _.status !== 'declined'),
            ].sort((a, b) => a.date - b.date);
            this._schedule.next(unique(list, 'id') as any);
            return list;
        }),
        catchError((_) => []),
        tap((_) => this._loading.next('')),
        shareReplay(1)
    );

    public startPolling(delay: number = 15 * 1000) {
        this.interval('poll', () => this._poll.next(Date.now()), delay);
    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    public setOptions(options: Partial<ScheduleOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }
}
