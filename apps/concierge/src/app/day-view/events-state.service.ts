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
    addMinutes,
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
    getTimezoneDifferenceInHours,
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

type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

function periodFor(period, date, tz_offset = 0, week_start: DayOfWeek = 0) {
    const start_result =
        period === 'month'
            ? startOfMonth(date)
            : period === 'week'
              ? startOfWeek(date)
              : startOfDay(date);
    const end_result =
        period === 'month'
            ? endOfMonth(date)
            : period === 'week'
              ? endOfWeek(date, { weekStartsOn: week_start })
              : endOfDay(date);
    const start = addMinutes(start_result, tz_offset * 60);
    const end = addMinutes(end_result, tz_offset * 60);
    return { start, end };
}

@Injectable({
    providedIn: 'root',
})
export class EventsStateService extends AsyncHandler {
    /** Emitter for poll events */
    private _poll = new BehaviorSubject<number>(0);
    /** Period to list bookings for */
    private _period = new BehaviorSubject<'month' | 'week' | 'day'>('day');
    /** Event to display */
    private _event = new BehaviorSubject<CalendarEvent>(null);
    /** Event to display */
    private _removed_events = new BehaviorSubject<CalendarEvent[]>([]);
    /** Event to display */
    private _added_events = new BehaviorSubject<CalendarEvent[]>([]);
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
    /** Period of time to show events for */
    public readonly period = this._period.asObservable();

    public readonly spaces: Observable<Space[]> = combineLatest([
        this._zones,
        this._org.active_region.pipe(distinctUntilKeyChanged('id')),
        this._org.active_building.pipe(
            filter((_) => !!_),
            distinctUntilKeyChanged('id'),
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
        map((l) => flatten<Space>(l).filter((_) => _.bookable)),
        tap((_) => this._loading.next(false)),
        shareReplay(1),
    );
    /** Observable for list of bookings */
    public readonly event_list: Observable<CalendarEvent[]> = combineLatest([
        this._period,
        this._zones,
        this._date,
        this._poll,
    ]).pipe(
        filter(([period]) => !!period),
        debounceTime(300),
        switchMap(([period, zones, date]) => {
            if (!zones?.length) return of([]);
            if (zones[0] === this._org.region?.id) {
                zones = (this._settings.get('app.use_region')
                    ? this._org
                          .buildingsForRegion(this._org.region)
                          .map((_) => _.id)
                    : null) || [this._org.building?.id];
            }
            this._loading.next(true);
            const { start, end } = periodFor(
                period,
                date,
                this.tz_offset,
                this._week_start,
            );
            this._removed_events.next([]);
            this._added_events.next([]);
            return queryEvents({
                strict: 'limit',
                zone_ids: zones.join(','),
                period_start: getUnixTime(start),
                period_end: getUnixTime(end),
            }).pipe(catchError(() => of([])));
        }),
        tap(() => this._loading.next(false)),
        shareReplay(1),
    );
    /** Obsevable for filtered list of bookings */
    public readonly filtered = combineLatest([
        this.event_list,
        this._removed_events,
        this._added_events,
        this._filters,
        this._date,
        this._period,
        this._zones,
    ]).pipe(
        map(([events, removed, added, filters, date, period, zones]: any) => {
            let event_list = [...events];
            event_list.filter(
                (_) =>
                    !removed.find(
                        (e) => _.id === e.id || _.ical_uid === e.ical_uid,
                    ),
            );
            event_list = event_list.concat(added);
            const { start, end } = periodFor(
                period,
                date,
                this.tz_offset,
                this._week_start,
            );
            return this.filterEvents(event_list, start, end, filters, zones);
        }),
        shareReplay(1),
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
                            (i) => new CalendarEvent(i),
                        ),
                    ),
                );
        }),
        shareReplay(1),
    );

    /** Active filters */
    public get filters() {
        return this._filters.getValue();
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public get tz_offset() {
        const tz = this._settings.get('app.events.use_building_timezone')
            ? this._org.building.timezone
            : '';
        const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return !tz ? 0 : getTimezoneDifferenceInHours(current_tz, tz);
    }

    private get _week_start() {
        return this._settings.get('app.week_start');
    }

    public getDate() {
        return this._date.getValue();
    }

    constructor(
        private _org: OrganisationService,
        private _dialog: MatDialog,
        private _settings: SettingsService,
    ) {
        super();
    }

    public readonly setFilters = (details: BookingFilters) =>
        this._filters.next(details);
    public readonly setDate = (date: number) => this._date.next(date);
    public readonly setPeriod = (period: 'day' | 'week' | 'month') =>
        this._period.next(period);
    public readonly setZones = (zones: string[]) => this._zones.next(zones);
    public readonly setEvent = (event: CalendarEvent) =>
        this._event.next(event);

    public setUIOptions(options: BookingUIOptions) {
        const old_options = this._options.getValue();
        this._options.next({ ...old_options, ...options });
    }

    public startPolling(
        period: 'day' | 'week' | 'month' = 'day',
        delay: number = 30 * 1000,
    ) {
        this._period.next(period);
        return this.poll(delay);
    }

    public poll(delay: number = 30 * 1000) {
        this._poll.next(Date.now());
        this.interval('polling', () => this._poll.next(Date.now()), delay);
        return () => this.stopPolling();
    }

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
                    'dd MMM yyyy, ' + this.time_format,
                )}<br> in ${event.location}?`,
                icon: { class: 'material-icons', content: 'delete' },
            },
            this._dialog,
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
        this._removed_events.next([...this._added_events.getValue(), booking]);
        this._added_events.next([...this._added_events.getValue(), booking]);
    }

    /**
     * Remove booking in the bookings list
     * @param booking
     */
    public remove(booking: CalendarEvent) {
        this._removed_events.next([
            ...this._removed_events.getValue(),
            booking,
        ]);
    }

    private filterEvents(
        events: CalendarEvent[],
        start: Date,
        end: Date,
        filters: BookingFilters,
        zones: string[] = [],
    ) {
        return events.filter((bkn) => {
            const intersects = timePeriodsIntersect(
                start.valueOf(),
                end.valueOf(),
                bkn.date,
                bkn.date + bkn.duration * 60 * 1000,
            );
            const has_space =
                !filters.space_emails?.length ||
                !!bkn.resources.find((space) =>
                    filters.space_emails.includes(space.email),
                );
            const in_zones =
                !filters.zone_ids?.length ||
                !!bkn.resources.find((space) =>
                    space.zones.find((zone) => filters.zone_ids.includes(zone)),
                );
            const type = bkn.guests?.length
                ? 'external'
                : bkn.status === 'declined'
                  ? 'cancelled'
                  : 'internal';
            const show =
                !filters.hide_type?.length ||
                !(filters.hide_type as any).find(
                    (item) => item.id === type || item === type,
                );
            return intersects && has_space && in_zones && show;
        });
    }
}
