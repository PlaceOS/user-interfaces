import { Injectable } from '@angular/core';
import { Booking, LockersService, queryBookings } from '@placeos/bookings';
import {
    AsyncHandler,
    currentUser,
    flatten,
    SettingsService,
} from '@placeos/common';
import {
    CalendarEvent,
    newCalendarEventFromBooking,
    queryEvents,
} from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { requestSpacesForZone } from '@placeos/spaces';
import { getModule } from '@placeos/ts-client';
import { endOfDay, getUnixTime, isSameDay, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilChanged,
    distinctUntilKeyChanged,
    filter,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ScheduleStateService extends AsyncHandler {
    private _poll = new BehaviorSubject(0);
    private _poll_type = new BehaviorSubject<'api' | 'ws'>('api');
    private _loading = new BehaviorSubject(false);
    private _filters = new BehaviorSubject({
        shown_types: ['event', 'desk', 'parking', 'visitor', 'locker'],
    });
    private _date = new BehaviorSubject(Date.now());
    private _update = combineLatest([this._date, this._poll]).pipe(
        debounceTime(500),
        tap((_) => this._loading.next(true))
    );

    private _deleted: string[] = [];

    private _space_bookings: Observable<CalendarEvent[]> =
        this._org.active_building.pipe(
            filter((_) => !!_),
            distinctUntilKeyChanged('id'),
            debounceTime(300),
            tap((_) => this.unsubWith('bind:')),
            switchMap(({ id }) => {
                this._loading.next(true);
                return requestSpacesForZone(id);
            }), // Get list of spaces for building
            distinctUntilChanged(([s1], [s2]) => s1 !== s2),
            switchMap((list) => {
                this._loading.next(false);
                return combineLatest(
                    (list || []).map((space) => {
                        const binding = getModule(space.id, 'Bookings').binding(
                            'bookings'
                        );
                        const obs = binding.listen().pipe(
                            map((event_list) =>
                                (event_list || []).map(
                                    (i) =>
                                        new CalendarEvent({
                                            ...i,
                                            resources: i.attendees.filter(
                                                (_) =>
                                                    _.email === space.email ||
                                                    _.resource
                                            ),
                                            system: space,
                                        })
                                )
                            ),
                            catchError((_) => of([]))
                        );
                        if (!this.hasSubscription(`bind:${space.id}`)) {
                            this.subscription(
                                `bind:${space.id}`,
                                binding.bind()
                            );
                        }
                        return obs;
                    })
                );
            }),
            map((_) => flatten<CalendarEvent>(_)),
            shareReplay(1)
        );

    public readonly ws_events = combineLatest([
        this._space_bookings,
        this._update,
    ]).pipe(
        map(([_, [date]]) => {
            const user = currentUser();
            return _.filter(
                (_) =>
                    isSameDay(_.date, date) &&
                    (_.host.toLowerCase() === user.email.toLowerCase() ||
                        _.attendees.find(
                            (a) =>
                                a.email.toLowerCase() ===
                                user.email.toLowerCase()
                        ))
            );
        })
    );
    /** List of calendar events for the selected date */
    public readonly api_events: Observable<CalendarEvent[]> = this._update.pipe(
        switchMap(([date]) => {
            const query = {
                period_start: getUnixTime(startOfDay(date)),
                period_end: getUnixTime(endOfDay(date)),
            };
            return this._settings.get('app.events.use_bookings')
                ? queryBookings({ ...query, type: 'room' }).pipe(
                      map((_) => _.map((i) => newCalendarEventFromBooking(i))),
                      catchError((_) => of([]))
                  )
                : queryEvents({ ...query }).pipe(catchError((_) => of([])));
        }),
        shareReplay(1)
    );
    /** List of calendar events for the selected date */
    public readonly events = combineLatest([this._poll_type]).pipe(
        switchMap(([t]) => (t === 'api' ? this.api_events : this.ws_events)),
        tap(() => this.timeout('end_loading', () => this._loading.next(false))),
        shareReplay(1)
    );
    /** List of desk bookings for the selected date */
    public readonly visitors: Observable<Booking[]> = this._update.pipe(
        switchMap(([date]) =>
            queryBookings({
                period_start: getUnixTime(startOfDay(date)),
                period_end: getUnixTime(endOfDay(date)),
                type: 'visitor',
            }).pipe(
                catchError((_) => {
                    console.error(_);
                    return of([]);
                })
            )
        ),
        tap(() => this.timeout('end_loading', () => this._loading.next(false))),
        shareReplay(1)
    );
    /** List of desk bookings for the selected date */
    public readonly desks: Observable<Booking[]> = this._update.pipe(
        switchMap(([date]) =>
            queryBookings({
                period_start: getUnixTime(startOfDay(date)),
                period_end: getUnixTime(endOfDay(date)),
                include_checked_out: true,
                type: 'desk',
            }).pipe(
                catchError((_) => {
                    console.error(_);
                    return of([]);
                })
            )
        ),
        tap(() => this.timeout('end_loading', () => this._loading.next(false))),
        shareReplay(1)
    );
    /** List of parking bookings for the selected date */
    public readonly parking: Observable<Booking[]> = this._update.pipe(
        switchMap(([date]) =>
            queryBookings({
                period_start: getUnixTime(startOfDay(date)),
                period_end: getUnixTime(endOfDay(date)),
                type: 'parking',
            }).pipe(catchError((_) => of([])))
        ),
        tap(() => this.timeout('end_loading', () => this._loading.next(false))),
        shareReplay(1)
    );
    /** List of parking bookings for the selected date */
    public readonly lockers: Observable<Booking[]> = combineLatest([
        this._org.active_building.pipe(
            filter((_) => !!_),
            distinctUntilKeyChanged('id')
        ),
        this._lockers.lockers$,
    ]).pipe(
        debounceTime(300),
        switchMap(async ([bld, lockers]) => {
            const system_id = this._org.binding('lockers');
            console.log('Lockers:', bld, system_id, lockers);
            if (!system_id) return of([[], lockers]);
            const mod = getModule(system_id, 'LockerLocations');
            return [
                await mod.execute('lockers_allocated_to_me').catch((_) => {
                    console.log('Locker Error:', _);
                    return [];
                }),
                lockers,
            ] as any;
        }),
        map(([_, lockers]) =>
            _.map((i) => {
                const locker = lockers.find((_) => _.id === i.locker_id);
                i.level = i.level || locker?.level_id;
                i.building =
                    i.building ||
                    this._org.levelWithID([locker.level_id])?.parent_id;
                return new Booking({
                    date: startOfDay(Date.now()).valueOf(),
                    duration: 24 * 60 - 1,
                    title: 'Locker Booking',
                    description: i.locker_name,
                    booking_type: 'locker',
                    all_day: true,
                    asset_id: i.locker_id,
                    asset_name: i.locker_name,
                    zones: [i.building, i.level],
                    extension_data: {
                        map_id: i.locker_id,
                    },
                });
            })
        ),
        catchError((e) => {
            console.log('Locker Error:', e);
            return of([]);
        }),
        tap((data) => {
            console.log('Your Lockers:', data);
            this.timeout('end_loading', () => this._loading.next(false));
        }),
        shareReplay(1)
    );

    /** List of events and bookings for the selected date */
    public readonly bookings = combineLatest([
        this.events,
        this.visitors,
        this.desks,
        this.parking,
        this.lockers,
    ]).pipe(
        map(([e, v, d, p, l]) =>
            [...e, ...v, ...d, ...p, ...l].sort((a, b) => a.date - b.date)
        )
    );
    /** Filtered list of events and bookings for the selected date */
    public readonly filtered_bookings = combineLatest([
        this.bookings,
        this._filters,
    ]).pipe(
        map(([bkns, filters]) =>
            bkns.filter(
                (_) =>
                    (!this._deleted.includes(_.id) &&
                        _ instanceof CalendarEvent &&
                        filters?.shown_types?.includes('event')) ||
                    filters?.shown_types?.includes((_ as any).booking_type)
            )
        )
    );
    /** Currently selected date */
    public readonly filters = this._filters.asObservable();
    /** Currently selected date */
    public readonly date = this._date.asObservable();
    /** Whether events and bookings are loading */
    public readonly loading = this._loading.asObservable();

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _lockers: LockersService
    ) {
        super();
        this.subscription(
            'poll_type',
            this._org.active_building.subscribe(() =>
                this._poll_type.next(
                    this._settings.get('app.schedule.use_websocket')
                        ? 'ws'
                        : 'api'
                )
            )
        );
        this._deleted = JSON.parse(
            sessionStorage.getItem('PLACEOS.events.deleted') || '[]'
        );
    }

    public triggerPoll() {
        this._poll.next(Date.now());
    }

    public startPolling(delay = 60 * 1000) {
        this.interval(
            'poll',
            () => {
                document.visibilityState === 'visible'
                    ? this._poll.next(Date.now())
                    : '';
            },
            delay
        );
        return () => this.stopPolling();
    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    public setDate(date: number) {
        this._date.next(date);
    }

    public removeItem(item) {
        this.setAsDeleted(item.id);
        this._poll.next(Date.now());
    }

    public setAsDeleted(id: string) {
        this._deleted.push(id);
        sessionStorage.setItem(
            'PLACEOS.events.deleted',
            JSON.stringify(this._deleted)
        );
    }

    public async toggleType(name: string, clear: boolean = false) {
        const filters = this._filters.getValue() || { shown_types: [] };
        const { shown_types } = filters;
        if (shown_types && (shown_types.includes(name) || clear)) {
            this._filters.next({
                ...filters,
                shown_types: shown_types.filter((_) => _ !== name),
            });
        } else {
            this._filters.next({
                ...filters,
                shown_types: [...shown_types, name],
            });
        }
    }
}
