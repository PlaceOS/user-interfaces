import { Injectable } from '@angular/core';
import { Booking, queryBookings } from '@placeos/bookings';
import { queryCalendars } from '@placeos/calendar';
import {
    AsyncHandler,
    SettingsService,
    timePeriodsIntersect,
    unique,
} from '@placeos/common';
import {
    CalendarEvent,
    newCalendarEventFromBooking,
    queryEvents,
} from '@placeos/events';
import { addDays, endOfDay, getUnixTime, startOfDay } from 'date-fns';
import {
    BehaviorSubject,
    combineLatest,
    forkJoin,
    Observable,
    timer,
} from 'rxjs';
import {
    catchError,
    debounceTime,
    map,
    mergeMap,
    shareReplay,
    switchMap,
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
export class ScheduleStateService extends AsyncHandler {
    private _poll = new BehaviorSubject(0);
    private _options = new BehaviorSubject<ScheduleOptions>({
        start: Date.now(),
    });
    private _loading = new BehaviorSubject<string>('');
    private _schedule = new BehaviorSubject<BookingLike[]>([]);

    public readonly options = this._options.asObservable();
    public readonly loading = this._loading.asObservable();
    public readonly schedule = this._loading.asObservable();

    public readonly calendars = timer(1000).pipe(
        switchMap((_) => queryCalendars()),
        shareReplay(1)
    );

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
                this._settings.get('app.events.use_bookings') === true
                    ? queryBookings({ ...query, type: 'room' }).pipe(
                          map((_) =>
                              _.map((i) => newCalendarEventFromBooking(i))
                          )
                      )
                    : queryEvents({ ...query }),
                queryBookings({ ...query, type: 'desk' }),
                queryBookings({ ...query, type: 'parking' }),
                queryBookings({ ...query, type: 'group-event' }),
            ]).pipe(catchError((_) => []));
        }),
        map(([events, bookings, parking, group_events]) => {
            const list = [
                ...this._schedule.getValue(),
                ...events,
                ...bookings.filter((_) => _.status !== 'declined'),
                ...group_events.filter((_) => _.status !== 'declined'),
            ].sort((a, b) => a.date - b.date);
            this._schedule.next(unique(list, 'id') as any);
            return list;
        }),
        catchError((_) => []),
        tap((_) => this._loading.next('')),
        shareReplay(1)
    );

    constructor(private _settings: SettingsService) {
        super();
    }

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
