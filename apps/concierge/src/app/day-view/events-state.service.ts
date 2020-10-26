import { Injectable } from '@angular/core';
import { startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth } from 'date-fns';
import { BehaviorSubject, of, combineLatest } from 'rxjs';
import { map, switchMap, debounceTime, catchError, filter } from 'rxjs/operators';

import { BaseClass, flatten, timePeriodsIntersect, unique } from '@user-interfaces/common';
import { CalendarEvent, EventsService, replaceBookings } from '@user-interfaces/events';
import { SpacesService } from '@user-interfaces/spaces';

export type BookingType =
    | 'internal'
    | 'client'
    | 'external'
    | 'setup'
    | 'training'
    | 'interview'
    | 'declined';

export interface BookingFilters {
    /** List of zone ids to get bookings for */
    zone_ids?: string[];
    space_emails?: string[];
    hide_type?: BookingType[];
}

export interface BookingUIOptions {
    /** Whether to show setup and breakdown times for events */
    show_overflow?: boolean;
    /** Whether to show cleaning status of the events */
    show_cleaning?: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class EventsStateService extends BaseClass {
    /** List of bookings */
    private _poll = new BehaviorSubject<boolean>(false);
    /** List of bookings */
    private _long_poll = new BehaviorSubject<'month' | 'week' | ''>('');
    /** List of bookings */
    private _bookings = new BehaviorSubject<CalendarEvent[]>([]);
    /** Filter details for bookings */
    private _filters = new BehaviorSubject<BookingFilters>({});
    /** Filter details for bookings */
    private _ui_options = new BehaviorSubject<BookingUIOptions>({});
    /** Currently active date */
    private _date = new BehaviorSubject<number>(new Date().valueOf());
    /** Currently displayed zone */
    private _zones = new BehaviorSubject<string[]>([]);
    /** Whether booking data is being loaded */
    private _loading = new BehaviorSubject<boolean>(false);
    /** Observable for filter and booking list changes */
    private _state = combineLatest(this._bookings, this._filters, this._date, this._zones);
    /** Event currently being viewed */
    private _event = new BehaviorSubject<CalendarEvent>(null);

    /** Observable for list of bookings */
    public readonly bookings = this._bookings.asObservable();
    /** Observable for active date */
    public readonly date = this._date.asObservable();
    /** Observable for active zone */
    public readonly zones = this._zones.asObservable();
    /** Observable for UI display options */
    public readonly ui_options = this._ui_options.asObservable();
    /** Observable for loading state of bookings */
    public readonly loading = this._loading.asObservable();
    /** Observable for viewed event */
    public readonly event = this._event.asObservable();
    /** Obsevable for filtered list of bookings */
    public readonly filtered = this._state.pipe(
        map(() => {
            const start = startOfDay(new Date(this._date.getValue()));
            const end = endOfDay(start);
            return this.filterEvents(start, end);
        })
    );
    /** Obsevable for filtered list of bookings of the active week */
    public readonly filtered_week = this._state.pipe(
        map(() => {
            const start = startOfWeek(new Date(this._date.getValue()));
            const end = endOfWeek(start);
            return this.filterEvents(start, end);
        })
    );
    /** Obsevable for filtered list of bookings for active month */
    public readonly filtered_month = this._state.pipe(
        map(() => {
            const start = startOfMonth(new Date(this._date.getValue()));
            const end = endOfMonth(start);
            return this.filterEvents(start, end);
        })
    );

    /** Active filters */
    public get filters() {
        return this._filters.getValue();
    }

    constructor(private _events: EventsService, private _spaces: SpacesService) {
        super();
        /** Generate observable for updating bookings */
        const search = combineLatest([this._poll, this._zones, this._date]).pipe(
            filter((i) => !!i[0]),
            debounceTime(500),
            switchMap(() => {
                const fzones = this._zones.getValue();
                if (!fzones || !fzones.length) {
                    return of([]);
                }
                this._loading.next(true);
                const start = startOfDay(new Date(this._date.getValue()));
                const end = endOfDay(start);
                return this._events.query({
                    zone_ids: fzones.join(','),
                    period_start: Math.floor(start.valueOf() / 1000),
                    period_end: Math.floor(end.valueOf() / 1000),
                });
            }),
            catchError(() => of([]))
        );
        /** Generate observable for updating bookings */
        const search_long = combineLatest([this._long_poll, this._zones, this._date]).pipe(
            filter((i) => !!i[0]),
            debounceTime(500),
            switchMap((props) => {
                const type = props[0];
                const fzones = props[1];
                if (!fzones || !fzones.length) {
                    return of([]);
                }
                this._loading.next(true);
                const start = (type === 'week' ? startOfWeek : startOfMonth)(new Date(props[2]));
                const end = (type === 'week' ? endOfWeek : endOfMonth)(start);
                return this._events.query({
                    zone_ids: fzones.join(','),
                    period_start: Math.floor(start.valueOf() / 1000),
                    period_end: Math.floor(end.valueOf() / 1000),
                });
            }),
            catchError(() => of([]))
        );
        /** Subscribe to update observable */
        search.subscribe((events) => {
            this.processBookings(events);
            this._loading.next(false);
        });
        search_long.subscribe((events) => {
            this.processBookings(events, this._long_poll.getValue() as any);
            this._loading.next(false);
        });
    }

    /**
     * Update the booking filters
     * @param details
     */
    public setFilters(details: BookingFilters) {
        this._filters.next(details);
    }

    /**
     * Update the booking date
     * @param details
     */
    public setDate(date: number) {
        this._date.next(date);
    }

    /**
     * Update the booking's zone
     * @param details
     */
    public setZones(zones: string[]) {
        this._zones.next(zones);
    }

    /**
     * Update the booking's zone
     * @param details
     */
    public setEvent(event: CalendarEvent) {
        this._event.next(event);
    }

    /**
     * Update the booking's zone
     * @param details
     */
    public setUIOptions(options: BookingUIOptions) {
        const old_options = this._ui_options.getValue();
        this._ui_options.next({ ...old_options, ...options });
    }

    /**
     * Start polling to update bookings
     * @param delay Duration between polling events in milliseconds
     */
    public startPolling(delay: number = 10 * 1000) {
        this._poll.next(true);
        this.interval('polling', () => this._poll.next(true), delay);
    }

    /**
     * Start polling to update bookings
     * @param delay Duration between polling events in milliseconds
     */
    public startPollingWeek(delay: number = 30 * 1000) {
        this._long_poll.next('week');
        this.interval('polling_long', () => this._long_poll.next('week'), delay);
    }

    /**
     * Start polling to update bookings
     * @param delay Duration between polling events in milliseconds
     */
    public startPollingMonth(delay: number = 5 * 60 * 1000) {
        this._long_poll.next('month');
        this.interval('polling_long', () => this._long_poll.next('month'), delay);
    }

    /**
     * Stop polling to update bookings;
     */
    public stopPolling() {
        this._poll.next(false);
        this.clearInterval('polling');
        this._long_poll.next('');
        this.clearInterval('polling_long');
    }

    /**
     * Add booking to bookings listing
     * @param booking
     */
    public add(booking: CalendarEvent) {
        const bookings = this._bookings.getValue();
        const new_bookings = bookings.concat([booking]);
        this._bookings.next(new_bookings);
    }

    /**
     * Update booking in the bookings list
     * @param booking
     */
    public replace(booking: CalendarEvent) {
        const bookings = this._bookings.getValue();
        const new_bookings = bookings.filter((bkn) => bkn.id !== booking.id).concat([booking]);
        this._bookings.next(new_bookings);
    }

    /**
     * Remove booking in the bookings list
     * @param booking
     */
    public remove(booking: CalendarEvent) {
        const bookings = this._bookings.getValue();
        const new_bookings = bookings.filter((bkn) => bkn.id !== booking.id);
        this._bookings.next(new_bookings);
    }

    private processBookings(events: CalendarEvent[], period: 'day' | 'week' | 'month' = 'day') {
        const start = (period === 'month'
            ? startOfMonth
            : period === 'week'
            ? startOfWeek
            : startOfDay)(new Date(this._date.getValue()));
        const end = (period === 'month' ? endOfMonth : period === 'week' ? endOfWeek : endOfDay)(
            start
        );
        let bookings = this._bookings.getValue();
        const space_list = unique(flatten(events.map((event) => event.resources)), 'email');
        space_list.forEach((space) => {
            bookings = replaceBookings(
                bookings,
                events
                    .filter((bkn) => bkn.resources.find((s) => s.email === space.email))
                    .map((bkn) => new CalendarEvent(bkn)),
                {
                    space: space.email,
                    from: start.valueOf(),
                    to: end.valueOf(),
                }
            );
        });
        this._bookings.next(bookings);
    }

    private filterEvents(start: Date, end: Date) {
        const filters = this._filters.getValue();
        const bookings = this._bookings.getValue();
        const fzones = this._zones.getValue();
        return bookings.filter((bkn) => {
            const intersects = timePeriodsIntersect(
                start.valueOf(),
                end.valueOf(),
                bkn.date,
                bkn.date + bkn.duration * 60 * 1000
            );
            const in_zone = !!bkn.resources
                .map((r) => this._spaces.find(r.id))
                .find((space) => fzones.find((z) => space.zones.includes(z)));
            const has_space =
                !filters.space_emails?.length ||
                !!bkn.resources.find((space) => filters.space_emails.includes(space.email));
            const in_zones =
                !filters.zone_ids?.length ||
                !!bkn.resources.find((space) =>
                    space.zones.find((zone) => filters.zone_ids.includes(zone))
                );
            const type = bkn.has_visitors ? 'external' : bkn.status === 'cancelled' ? 'cancelled' : 'internal';
            const show = !filters.hide_type?.length || !filters.hide_type.includes(type as any);
            return intersects && has_space && in_zone && in_zones && show;
        });
    }
}
