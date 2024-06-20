import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    startOfDay,
    endOfDay,
    startOfWeek,
    endOfWeek,
    startOfMonth,
    endOfMonth,
    format,
    getUnixTime,
} from 'date-fns';
import { BehaviorSubject, of, combineLatest, Observable, forkJoin } from 'rxjs';
import {
    map,
    switchMap,
    debounceTime,
    catchError,
    filter,
    first,
    tap,
    shareReplay,
    distinctUntilKeyChanged,
} from 'rxjs/operators';

import {
    AsyncHandler,
    SettingsService,
    flatten,
    openConfirmModal,
    randomInt,
    timePeriodsIntersect,
    unique,
} from '@placeos/common';
import {
    CalendarEvent,
    queryEvents,
    removeEvent,
    replaceBookings,
} from '@placeos/events';
import { Space, requestSpacesForZone } from '@placeos/spaces';
import { OrganisationService } from '@placeos/organisation';
import { getModule } from '@placeos/ts-client';

import { EventBookModalComponent } from './event-book-modal.component';

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
    /** Whether weekends should be shown on week view */
    show_weekends?: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class EventsStateService extends AsyncHandler {
    /** Emitter for poll events */
    private _poll = new BehaviorSubject<number>(0);
    /** Period to list bookings for */
    private _period = new BehaviorSubject<'month' | 'week' | 'day'>('day');
    /** List of bookings */
    private _bookings = new BehaviorSubject<CalendarEvent[]>([]);
    /** Event to display */
    private _event = new BehaviorSubject<CalendarEvent>(null);
    /** Filter details for bookings */
    private _filters = new BehaviorSubject<BookingFilters>({});
    /** Filter details for bookings */
    private _options = new BehaviorSubject<BookingUIOptions>({});
    /** Currently active date */
    private _date = new BehaviorSubject<number>(new Date().valueOf());
    /** Currently displayed zone */
    private _zones = new BehaviorSubject<string[]>([]);
    /** Whether booking data is being loaded */
    private _loading = new BehaviorSubject<boolean>(false);

    /** Observable for active date */
    public readonly date = this._date.asObservable();
    /** Observable for active zone */
    public readonly zones = this._zones.asObservable();
    /** Observable for UI display options */
    public readonly options = this._options.asObservable();
    /** Observable for loading state of bookings */
    public readonly loading = this._loading.asObservable();
    /** Observable for viewed event */
    public readonly event = this._event.asObservable();

    public readonly spaces: Observable<Space[]> = combineLatest([
        this._zones,
        this._org.active_region.pipe(
            filter((_) => !!_),
            distinctUntilKeyChanged('id')
        ),
        this._org.active_building.pipe(
            filter((_) => !!_),
            distinctUntilKeyChanged('id')
        ),
    ]).pipe(
        debounceTime(300),
        tap((_) => this.unsubWith('bind:')),
        switchMap(([zone_ids]) => {
            this._loading.next(true);
            if (!zone_ids?.length || zone_ids[0] === this._org.region.id) {
                zone_ids = (this._settings.get('app.use_region')
                    ? this._org
                          .buildingsForRegion(this._org.region)
                          .map((_) => _.id)
                    : null) || [this._org.building?.id];
            }
            return forkJoin(zone_ids.map((id) => requestSpacesForZone(id)));
        }),
        map((l) => flatten(l)),
        tap((_) => {
            this._loading.next(false);
            console.log('Spaces', _);
        }),
        shareReplay(1)
    );
    /** Obsevable for filtered list of bookings */
    public readonly filtered = combineLatest([
        this._bookings,
        this._filters,
        this._date,
        this._period,
        this._zones,
    ]).pipe(
        map(([events, filters, date, period, zones]) => {
            const start_fn =
                period === 'month'
                    ? startOfMonth
                    : period === 'week'
                    ? startOfWeek
                    : startOfDay;
            const end_fn =
                period === 'month'
                    ? endOfMonth
                    : period === 'week'
                    ? endOfWeek
                    : endOfDay;
            const start = start_fn(date);
            const end = end_fn(date);
            return this.filterEvents(events, start, end, filters, zones);
        }),
        shareReplay(1)
    );

    public readonly pending: Observable<CalendarEvent[]> = of(1).pipe(
        switchMap(() => {
            const system_id = this._org.binding('approvals');
            if (!system_id) return of([]);
            const mod = getModule(system_id, 'RoomBookingApproval');
            if (!mod) return of([]);
            const binding =
                mod.binding<Partial<CalendarEvent>[]>('approval_required');
            this.subscription('pending', binding.bind());
            return binding
                .listen()
                .pipe(
                    map((_) =>
                        flatten(Object.values(_ || {}))?.map(
                            (i) => new CalendarEvent(i)
                        )
                    )
                );
        }),
        shareReplay(1)
    );
    private _retries = 0;
    /** Observable for list of bookings */
    public readonly events = combineLatest([
        this._period,
        this._zones,
        this._date,
        this._poll,
    ]).pipe(
        filter(([period]) => !!period),
        debounceTime(300),
        switchMap(([period, zones, date]) => {
            if (!zones?.length) return of([]);
            if (zones[0] === this._org.region.id) {
                zones = (this._settings.get('app.use_region')
                    ? this._org
                          .buildingsForRegion(this._org.region)
                          .map((_) => _.id)
                    : null) || [this._org.building?.id];
            }
            this._loading.next(true);
            const start_fn =
                period === 'month'
                    ? startOfMonth
                    : period === 'week'
                    ? startOfWeek
                    : startOfDay;
            const end_fn =
                period === 'month'
                    ? endOfMonth
                    : period === 'week'
                    ? endOfWeek
                    : endOfDay;
            const start = start_fn(date);
            const end = end_fn(date);
            return queryEvents({
                strict: 'limit',
                zone_ids: zones.join(','),
                period_start: getUnixTime(start),
                period_end: getUnixTime(end),
            }).pipe(
                map((_) => {
                    this._retries = 0;
                    return [_, start, end, true];
                }),
                catchError((e) => {
                    if (e?.status === 429) {
                        this._retries += 1;
                        const timeout_base = Math.min(
                            8000,
                            1000 * this._retries
                        );
                        this.timeout(
                            'retry',
                            () => this._poll.next(Date.now()),
                            randomInt(timeout_base + 1000, timeout_base)
                        );
                    }
                    return of([
                        [] as CalendarEvent[],
                        undefined,
                        undefined,
                        false,
                    ]);
                })
            );
        }),
        tap(([events, start, end, clear]) => {
            if (!clear && !events?.length) {
                return this._loading.next(false);
            }
            this.processBookings(
                events || [],
                start?.valueOf(),
                end?.valueOf()
            );
            this._loading.next(false);
        }),
        map(([events]) => events),
        shareReplay(1)
    );

    /** Active filters */
    public get filters() {
        return this._filters.getValue();
    }

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _org: OrganisationService,
        private _dialog: MatDialog,
        private _settings: SettingsService
    ) {
        super();
        this.events.subscribe();
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
        const old_options = this._options.getValue();
        this._options.next({ ...old_options, ...options });
    }

    /**
     * Start polling to update bookings
     * @param delay Duration between polling events in milliseconds
     */
    public startPolling(
        period: 'day' | 'week' | 'month' = 'day',
        delay: number = 30 * 1000
    ) {
        this._poll.next(Date.now());
        this._period.next(period);
        this.interval('polling', () => this._poll.next(Date.now()), delay);
        return () => this.stopPolling();
    }

    /**
     * Stop polling to update bookings;
     */
    public stopPolling() {
        this._poll.next(0);
        this.clearInterval('polling');
    }

    public async newBooking(event?: CalendarEvent) {
        const ref = this._dialog.open(EventBookModalComponent, {
            data: { event },
        });
        const details = await Promise.race([
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ]);
        if (details?.reason !== 'done') return;
        this.replace(details.metadata);
    }

    public async removeBooking(event: CalendarEvent) {
        const details = await openConfirmModal(
            {
                title: 'Delete meeting?',
                content: `Are you sure you want to delete the meeting at ${format(
                    new Date(event.date),
                    'dd MMM yyyy, ' + this.time_format
                )}<br> in ${event.location}?`,
                icon: { class: 'material-icons', content: 'delete' },
            },
            this._dialog
        );
        if (details.reason !== 'done') return false;
        details.loading('Deleting booking...');
        await removeEvent(event.id, {
            system_id: event.system?.id,
        }).toPromise();
        this.remove(event);
        details.close();
        return true;
    }

    /**
     * Update booking in the bookings list
     * @param booking
     */
    public replace(booking: CalendarEvent) {
        const bookings = this._bookings.getValue();
        const new_bookings = bookings
            .filter((bkn) => bkn.id !== booking.id)
            .concat([booking]);
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

    private processBookings(
        events: CalendarEvent[],
        start: number = startOfDay(Date.now()).valueOf(),
        end: number = endOfDay(Date.now()).valueOf()
    ) {
        let bookings = this._bookings.getValue() || [];
        const space_list = unique(
            flatten(events.map((event) => event.resources)),
            'email'
        );
        space_list.forEach((space) => {
            bookings = replaceBookings(
                bookings,
                events.filter((bkn) =>
                    bkn.resources.find((s) => s.email === space.email)
                ),
                {
                    space: space.email,
                    from: start.valueOf(),
                    to: end.valueOf(),
                }
            );
        });
        this._bookings.next(bookings);
    }

    private filterEvents(
        events: CalendarEvent[],
        start: Date,
        end: Date,
        filters: BookingFilters,
        zones: string[] = []
    ) {
        return events.filter((bkn) => {
            const intersects = timePeriodsIntersect(
                start.valueOf(),
                end.valueOf(),
                bkn.date,
                bkn.date + bkn.duration * 60 * 1000
            );
            const has_space =
                !filters.space_emails?.length ||
                !!bkn.resources.find((space) =>
                    filters.space_emails.includes(space.email)
                );
            const in_zones =
                !filters.zone_ids?.length ||
                !!bkn.resources.find((space) =>
                    space.zones.find((zone) => filters.zone_ids.includes(zone))
                );
            const type = bkn.guests.length
                ? 'external'
                : bkn.status === 'declined'
                ? 'cancelled'
                : 'internal';
            const show =
                !filters.hide_type?.length ||
                !(filters.hide_type as any).find(
                    (item) => item.id === type || item === type
                );
            return intersects && has_space && in_zones && show;
        });
    }
}
