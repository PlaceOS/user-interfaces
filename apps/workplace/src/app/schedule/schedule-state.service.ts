import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    Booking,
    queryBookings,
    removeBooking,
    showBooking,
} from '@user-interfaces/bookings';
import { CalendarService } from '@user-interfaces/calendar';
import {
    BaseClass,
    currentUser,
    notifyError,
    notifySuccess,
    openConfirmModal,
    timePeriodsIntersect,
} from '@user-interfaces/common';
import {
    CalendarEvent,
    queryEvents,
    removeEvent,
    showEvent,
} from '@user-interfaces/events';
import { addDays, endOfDay, isToday, startOfDay } from 'date-fns';
import {
    BehaviorSubject,
    combineLatest,
    Observable,
    of,
    throwError,
} from 'rxjs';
import {
    catchError,
    debounceTime,
    first,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';

export interface ScheduleOptions {
    date: number;
    calendar?: string;
}

@Injectable({
    providedIn: 'root',
})
export class ScheduleStateService extends BaseClass {
    private _loading = new BehaviorSubject<string>('');
    private _poll = new BehaviorSubject<boolean>(false);

    private _active_item = new BehaviorSubject<string>('');

    private _options = new BehaviorSubject<ScheduleOptions>({
        date: new Date().valueOf(),
    });

    private _item: CalendarEvent | Booking;

    public readonly loading = this._loading.asObservable();
    public readonly options = this._options.asObservable();
    public readonly calendars = this._calendars.calendar_list;

    public readonly events: Observable<
        (CalendarEvent | Booking)[]
    > = combineLatest([this._options, this._poll]).pipe(
        debounceTime(1000),
        switchMap(([options]) => {
            this._loading.next(' ');
            const start = startOfDay(options.date).valueOf();
            let duration = isToday(start) ? 6 : 4;
            const end = endOfDay(addDays(start, duration)).valueOf();
            return options.calendar === 'desks'
                ? queryBookings({
                      period_start: Math.floor(start / 1000),
                      period_end: Math.floor(end / 1000),
                      type: 'desk',
                  })
                : queryEvents({
                      period_start: Math.floor(start / 1000),
                      period_end: Math.floor(end / 1000),
                      calendars: options.calendar,
                  });
        }),
        catchError((_) => []),
        shareReplay(1)
    );

    public readonly active_item = this._active_item.pipe(
        debounceTime(500),
        switchMap((id) => {
            return id
                ? showEvent(id, {
                      calendar:
                          this._options.getValue().calendar ||
                          currentUser().email,
                  })
                : throwError('No ID');
        }),
        catchError((_) =>
            this._active_item.getValue()
                ? showBooking(this._active_item.getValue())
                : of(null)
        ),
        catchError((_) => of(null)),
        map((_: CalendarEvent | Booking | null) => {
            this._item = _;
            return _;
        }),
        shareReplay()
    );

    public get date() {
        return this._options.getValue().date;
    }

    constructor(
        private _calendars: CalendarService,
        private _dialog: MatDialog,
        private _router: Router
    ) {
        super();
        this.calendars
            .pipe(first((_) => _?.length > 0))
            .subscribe((_) => this.setOptions({ calendar: _[0].id }));
    }

    public setOptions(options: Partial<ScheduleOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public setItem(id: string) {
        this._active_item.next(id);
    }

    public startPolling(delay: number = 15 * 1000) {
        this._poll.next(!this._poll.getValue());
        this.interval(
            'poll',
            () => this._poll.next(!this._poll.getValue()),
            delay
        );
    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    public duplicateEvent() {
        if (sessionStorage) {
            const booking = new CalendarEvent({
                ...(this._item as any),
                id: '',
            });
            sessionStorage.setItem(
                'STAFF.booking_form',
                JSON.stringify(booking)
            );
        }
        this._router.navigate(['/book']);
    }

    public async deleteEvent() {
        if (!this._item) return;
        const details = await openConfirmModal(
            {
                title: 'Cancel Meeting',
                content: `Are you sure you want to cancel this meeting: ${this._item.title}`,
                icon: { content: 'delete' },
            },
            this._dialog
        );
        if (!details) return;
        const is_event = this._item instanceof CalendarEvent;
        details.loading(
            `Cancelling ${is_event ? 'meeting' : 'desk booking'}...`
        );
        const method = is_event
            ? removeEvent(this._item.id).toPromise()
            : removeBooking(this._item.id).toPromise();
        const err = await method.catch((_) => _);
        details.close();
        if (err)
            return notifyError(
                `Error unable to cancel ${
                    is_event ? 'meeting' : 'desk booking'
                }. Error: ${err.statusText || err.message || err}`
            );
        notifySuccess(
            `Successfully cancelled ${is_event ? 'meeting' : 'desk booking'}.`
        );
        this._router.navigate(['/schedule', 'listing'], {
            queryParamsHandling: 'preserve',
        });
    }
}
