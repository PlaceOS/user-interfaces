import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    Booking,
    Locker,
    LockersService,
    checkinBooking,
    queryBookings,
} from '@placeos/bookings';
import {
    AsyncHandler,
    current_user,
    currentUser,
    flatten,
    openConfirmModal,
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
import {
    addMinutes,
    differenceInMilliseconds,
    differenceInMinutes,
    endOfDay,
    format,
    getUnixTime,
    isSameDay,
    startOfDay,
    startOfMinute,
} from 'date-fns';
import { BehaviorSubject, combineLatest, interval, Observable, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilChanged,
    distinctUntilKeyChanged,
    filter,
    map,
    shareReplay,
    startWith,
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
        shown_types: [
            'event',
            'desk',
            'parking',
            'visitor',
            'locker',
            'group-event',
        ],
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
                        )) &&
                    !_.linked_bookings?.find(
                        (b) => b.booking_type === 'group-event'
                    )
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
            }).pipe(catchError((_) => of([] as Booking[])))
        ),
        map((_) => _.filter((_) => !_.parent_id && !_.linked_event)),
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
            }).pipe(catchError((_) => of([])))
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
    /** List of group event bookings for the selected date */
    public readonly group_events: Observable<Booking[]> = this._update.pipe(
        switchMap(([date]) =>
            queryBookings({
                period_start: getUnixTime(startOfDay(date)),
                period_end: getUnixTime(endOfDay(date)),
                type: 'group-event',
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
        switchMap(async ([_, lockers]) => {
            const system_id = this._org.binding('lockers');
            if (!system_id) return [[], lockers];
            const mod = getModule(system_id, 'LockerLocations');
            const my_lockers = await mod
                .execute('lockers_allocated_to_me')
                .catch((_) => []);
            return [my_lockers, lockers];
        }),
        map(([my_lockers, lockers]) => {
            return my_lockers
                .map((i) => {
                    const locker = (lockers as Locker[]).find(
                        (_) => _.id === i.locker_id
                    );
                    if (!locker && (!i.level || !i.building)) return null;
                    i.level = i.level || locker?.level_id;
                    i.building =
                        i.building ||
                        this._org.levelWithID([locker?.level_id])?.parent_id;
                    return new Booking({
                        date: startOfDay(Date.now()).valueOf(),
                        duration: 24 * 60 - 1,
                        title: 'Locker Booking',
                        description: i.locker_name,
                        booking_type: 'locker',
                        all_day: true,
                        asset_id: locker.map_id,
                        asset_name: i.locker_name,
                        zones: [i.building, i.level],
                        extension_data: {
                            // map_id: i.locker_id || locker.map_id,
                        },
                    });
                })
                .filter((item) => item);
        }),
        catchError((e) => {
            console.error(e);
            return of([]);
        }),
        tap(() => this.timeout('end_loading', () => this._loading.next(false))),
        shareReplay(1)
    );

    /** List of events and bookings for the selected date */
    public readonly bookings = combineLatest([
        this.events,
        this.visitors,
        this.desks,
        this.parking,
        this.lockers,
        this.group_events,
    ]).pipe(
        map(([e, v, d, p, l, ge]) => {
            const filtered_events = e.filter(
                (ev) =>
                    !d.find((bkn) => `${ev.meeting_id}` === `${bkn.id}`) &&
                    ev.linked_bookings[0]?.booking_type !== 'group-event'
            );
            return [...filtered_events, ...v, ...d, ...p, ...l, ...ge].sort(
                (a, b) => a.date - b.date
            );
        })
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

    private _ignore_cancel: string[] = [];
    private _checkCancel = combineLatest([
        current_user,
        interval(60 * 1000).pipe(startWith(0)),
    ]).pipe(
        filter(([u]) => !!u),
        map(async ([user]) => {
            const is_home = user.location !== 'wfo';
            const auto_release = this._settings.get('app.auto_release');
            if (
                auto_release &&
                is_home &&
                (auto_release.time_after || auto_release.time_before) &&
                auto_release.resources?.length
            ) {
                for (const type of auto_release.resources) {
                    const bookings = await queryBookings({
                        period_start: getUnixTime(startOfMinute(Date.now())),
                        period_end: getUnixTime(
                            addMinutes(
                                Date.now(),
                                (auto_release.time_after || 5) +
                                    (auto_release.time_before || 0)
                            )
                        ),
                        type,
                    }).toPromise();
                    const check_block =
                        (auto_release.time_after || 0) +
                        (auto_release.time_before || 0);
                    for (const booking of bookings) {
                        if (
                            this._ignore_cancel.includes(booking.id) ||
                            booking.checked_in ||
                            booking.rejected
                        ) {
                            continue;
                        }
                        this._dialog.closeAll();
                        const diff = differenceInMinutes(
                            addMinutes(
                                booking.date,
                                auto_release.time_after || 0
                            ),
                            Date.now()
                        );
                        if (diff > check_block || diff < 0) continue;
                        const time = addMinutes(
                            booking.date,
                            auto_release.time_after || 0
                        );
                        const close_after = differenceInMilliseconds(
                            time.getTime() + 60 * 1000,
                            Date.now()
                        );
                        const wording =
                            type === 'parking' ? 'reservation' : 'booking';
                        const result = await openConfirmModal(
                            {
                                title: `Keep ${type} ${wording}`,
                                content: `You have indicated you are not in the office. 
                                Your  ${wording} for "<i>${
                                    booking.asset_name || booking.title
                                }</i>" at ${format(
                                    booking.date,
                                    this._settings.time_format
                                )} will be cancelled at ${format(
                                    time,
                                    this._settings.time_format
                                )}.<br/><br/>
                                Do you wish to keep this ${wording}?`,
                                icon: { content: 'event_busy' },
                                confirm_text: 'Keep',
                                cancel_text: 'Dismiss',
                                close_delay: close_after,
                            },
                            this._dialog
                        );
                        if (result.reason !== 'done') {
                            this._ignore_cancel.push(booking.id);
                            continue;
                        }
                        result.loading('Checking in booking...');
                        await checkinBooking(booking.id, true).toPromise();
                        result.close();
                    }
                }
            }
        })
    );

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _lockers: LockersService,
        private _dialog: MatDialog
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
        this.subscription(
            'chat_event',
            this._settings
                .listen('CHAT:task_complete')
                .subscribe(() => this.triggerPoll())
        );
        this.subscription('wfh_checks', this._checkCancel.subscribe());
        this._deleted = JSON.parse(
            sessionStorage.getItem('PLACEOS.events.deleted') || '[]'
        );
    }

    public triggerPoll() {
        this._poll.next(Date.now());
    }

    public startPolling(delay = 60 * 1000) {
        this.interval('poll', () => this._poll.next(Date.now()), delay);
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
