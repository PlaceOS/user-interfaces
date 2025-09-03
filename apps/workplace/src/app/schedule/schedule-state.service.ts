import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    Booking,
    BookingType,
    checkinBooking,
    loadLockerBanks,
    loadLockers,
    Locker,
    LockerBank,
    ParkingService,
    queryBookings,
} from '@placeos/bookings';
import {
    AsyncHandler,
    current_user,
    currentUser,
    flatten,
    SettingsService,
    unique,
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
    addWeeks,
    differenceInMilliseconds,
    differenceInMinutes,
    endOfDay,
    endOfWeek,
    format,
    getUnixTime,
    isAfter,
    isBefore,
    isSameDay,
    setHours,
    startOfDay,
    startOfMinute,
    startOfWeek,
} from 'date-fns';
import { openConfirmModal } from 'libs/components/src/lib/confirm-modal.component';
import {
    BehaviorSubject,
    combineLatest,
    interval,
    lastValueFrom,
    Observable,
    of,
} from 'rxjs';
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

export interface ScheduleOptions {
    period: 'day' | 'week' | 'month';
}

@Injectable({
    providedIn: 'root',
})
export class ScheduleStateService extends AsyncHandler {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _parking = inject(ParkingService);

    private _poll = new BehaviorSubject(0);
    private _poll_type = new BehaviorSubject<'api' | 'ws'>('api');
    private _loading = new BehaviorSubject(false);
    private _options = new BehaviorSubject<ScheduleOptions>({ period: 'day' });
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
        tap((_) => this._loading.next(true)),
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
                        const binding = getModule(
                            space.id,
                            'Bookings',
                        ).variable('bookings');
                        const obs = binding.listen().pipe(
                            map((event_list) =>
                                (event_list || []).map(
                                    (i) =>
                                        new CalendarEvent({
                                            ...i,
                                            resources: i.attendees.filter(
                                                (_) =>
                                                    _.email === space.email ||
                                                    _.resource,
                                            ),
                                            system: space,
                                        }),
                                ),
                            ),
                            catchError((_) => of([])),
                        );
                        if (!this.hasSubscription(`bind:${space.id}`)) {
                            this.subscription(
                                `bind:${space.id}`,
                                binding.bind(),
                            );
                        }
                        return obs;
                    }),
                );
            }),
            map((_) => flatten<CalendarEvent>(_)),
            shareReplay(1),
        );

    public readonly options = this._options.asObservable();
    /** Currently selected date */
    public readonly filters = this._filters.asObservable();
    /** Currently selected date */
    public readonly date = this._date.asObservable();
    /** Whether events and bookings are loading */
    public readonly loading = this._loading.asObservable();

    public setOptions(options: ScheduleOptions) {
        this._options.next(options);
    }

    public getOptions() {
        return this._options.getValue();
    }
    public readonly week_date = combineLatest([
        this._org.active_building,
        this.date,
    ]).pipe(
        map(([_, date]) =>
            startOfWeek(date, {
                weekStartsOn: this.offset_weekday as any,
            }).valueOf(),
        ),
    );

    public readonly week_options = combineLatest([
        this._org.active_building,
        this.date,
    ]).pipe(
        filter(([bld]) => !!bld),
        map(() => {
            const options = [];
            const date = startOfDay(Date.now());
            for (let i = -4; i < 48; i++) {
                const day = addWeeks(date, i);
                const week_s_date = startOfWeek(day, {
                    weekStartsOn: this.offset_weekday,
                });
                const week_e_date = endOfWeek(day, {
                    weekStartsOn: this.offset_weekday,
                });
                const this_week =
                    isAfter(Date.now(), week_s_date) &&
                    isBefore(Date.now(), week_e_date);
                const week_start = format(week_s_date, 'dd MMM');
                const week_end = format(week_e_date, 'dd MMM');
                options.push({
                    id: week_s_date.valueOf(),
                    name: `${week_start} - ${week_end}`,
                    this_week,
                });
            }
            return options;
        }),
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
                                user.email.toLowerCase(),
                        )) &&
                    !_.linked_bookings?.find(
                        (b) => b.booking_type === 'group-event',
                    ),
            );
        }),
    );
    /** List of calendar events for the selected date */
    public readonly api_events: Observable<CalendarEvent[]> = combineLatest([
        this._update,
        this._options,
    ]).pipe(
        switchMap(([[date], { period }]) => {
            const query = {
                period_start: getUnixTime(
                    period === 'day'
                        ? startOfDay(date)
                        : startOfWeek(date, {
                              weekStartsOn: this.offset_weekday as any,
                          }),
                ),
                period_end: getUnixTime(
                    period === 'day'
                        ? endOfDay(date)
                        : endOfWeek(date, {
                              weekStartsOn: this.offset_weekday as any,
                          }),
                ),
            };
            return this._settings.get('app.events.use_bookings')
                ? queryBookings({ ...query, type: 'room' }).pipe(
                      map((_) => _.map((i) => newCalendarEventFromBooking(i))),
                      catchError((_) => of([])),
                  )
                : queryEvents({ ...query }).pipe(catchError((_) => of([])));
        }),
        shareReplay(1),
    );
    /** List of calendar events for the selected date */
    public readonly raw_events = combineLatest([
        this._poll_type,
        this._options,
    ]).pipe(
        switchMap(([t, { period }]) =>
            t === 'api' || period !== 'week' ? this.api_events : this.ws_events,
        ),
        tap(() => this.timeout('end_loading', () => this._loading.next(false))),
        shareReplay(1),
    );
    /** List of calendar events for the selected date */
    public readonly events = this.raw_events.pipe(
        map((_) => _.filter((_) => !_.extension_data?.shared_event)),
    );
    /** List of desk bookings for the selected date */
    public readonly visitors: Observable<Booking[]> = combineLatest([
        this._update,
        this.options,
    ]).pipe(
        switchMap(([[date], { period }]) =>
            this._bookingQuery('visitor', period, date),
        ),
        map((_) => _.filter((_) => !_.parent_id && !_.linked_event)),
        tap(() => this.timeout('end_loading', () => this._loading.next(false))),
        shareReplay(1),
    );
    /** List of desk bookings for the selected date */
    public readonly desks: Observable<Booking[]> = combineLatest([
        this._update,
        this.options,
    ]).pipe(
        switchMap(([[date], { period }]) =>
            this._bookingQuery('desk', period, date),
        ),
        tap(() => this.timeout('end_loading', () => this._loading.next(false))),
        shareReplay(1),
    );
    /** List of parking bookings for the selected date */
    public readonly parking: Observable<Booking[]> = combineLatest([
        this._update,
        this.options,
    ]).pipe(
        switchMap(([[date], { period }]) =>
            this._bookingQuery('parking', period, date),
        ),
        tap(() => this.timeout('end_loading', () => this._loading.next(false))),
        shareReplay(1),
    );
    /** List of calendar events for the selected date */
    public readonly group_events = this.raw_events.pipe(
        map((_) => _.filter((_) => _.extension_data?.shared_event)),
    );
    public readonly locker_bookings: Observable<Booking[]> = combineLatest([
        this._update,
        this.options,
    ]).pipe(
        switchMap(([[date], { period }]) =>
            this._bookingQuery('locker', period, date),
        ),
        tap(() => this.timeout('end_loading', () => this._loading.next(false))),
        shareReplay(1),
    );
    private _lockers_banks: Observable<LockerBank[]> = loadLockerBanks(
        this._org,
        combineLatest([this._org.active_building, this._org.active_region]),
        () => this._settings.get('app.use_region'),
    );
    private _lockers: Observable<Locker[]> = loadLockers(
        this._org,
        combineLatest([this._org.active_building, this._org.active_region]),
        this._lockers_banks,
        () => this._settings.get('app.use_region'),
    );
    /** List of parking bookings for the selected date */
    public readonly lockers: Observable<Booking[]> = combineLatest([
        this._lockers,
        this._org.active_building.pipe(
            filter((_) => !!_),
            distinctUntilKeyChanged('id'),
        ),
    ]).pipe(
        debounceTime(300),
        switchMap(async ([lockers]) => {
            const mod = this._org.module('lockers', 'LockerLocations');
            if (!mod) return [[], lockers];
            const my_lockers = await mod
                .execute('lockers_allocated_to_me')
                .catch(() => []);
            return [my_lockers, lockers];
        }),
        map(([my_lockers, lockers]) => {
            return my_lockers
                .map((i) => {
                    const locker = (lockers as Locker[]).find(
                        (lkr) => lkr.id === i.locker_id,
                    );
                    if (!locker && (!i.level || !i.building)) return null;
                    return new Booking({
                        date: startOfDay(Date.now()).valueOf(),
                        duration: 24 * 60 - 1,
                        title: 'Locker Booking',
                        description: i.locker_name,
                        booking_type: 'locker',
                        all_day: true,
                        asset_id: locker.map_id,
                        asset_name: i.locker_name,
                        zones: [...(locker.bank?.zones || [])],
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
        shareReplay(1),
    );

    /** List of events and bookings for the selected date */
    public readonly bookings = combineLatest([
        this.events,
        this.visitors,
        this.desks,
        this.parking,
        this.lockers,
        this.locker_bookings,
        this.group_events,
    ]).pipe(
        map(
            ([
                events,
                visitors,
                desks,
                parking,
                lockers,
                locker_bookings,
                group_events,
            ]: any) => {
                const filtered_events = events.filter(
                    (ev) =>
                        !desks.find(
                            (bkn) => `${ev.meeting_id}` === `${bkn.id}`,
                        ) &&
                        ev.linked_bookings[0]?.booking_type !== 'group-event',
                );
                return [
                    ...filtered_events,
                    ...visitors,
                    ...desks,
                    ...parking,
                    ...lockers,
                    ...locker_bookings,
                    ...group_events,
                ].sort((a, b) => a.date - b.date);
            },
        ),
    );
    /** Filtered list of events and bookings for the selected date */
    public readonly filtered_bookings = combineLatest([
        this.bookings,
        this._filters,
    ]).pipe(
        map(([bkns, filters]) =>
            bkns.filter((_) => {
                if (
                    this._deleted.includes(
                        _.instance ? `${_.id}|${_.instance}` : _.id,
                    )
                )
                    return false;
                if (
                    _.extension_data?.shared_event &&
                    !filters?.shown_types?.includes('group-event')
                ) {
                    return false;
                }
                if (
                    _ instanceof CalendarEvent &&
                    !_.extension_data?.shared_event &&
                    !filters?.shown_types?.includes('event')
                ) {
                    return false;
                } else if (_ instanceof CalendarEvent) return true;
                return filters?.shown_types?.includes((_ as any).booking_type);
            }),
        ),
    );

    public get offset_weekday(): 0 | 1 | 2 | 3 | 4 | 5 | 6 {
        return this._settings.get('app.week_start') || 0;
    }

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
                    const time_after =
                        auto_release[`${type}_time_after`] ||
                        auto_release.time_after;
                    const time_before = Math.min(
                        60,
                        auto_release[`${type}_time_before`] ||
                            auto_release.time_before ||
                            0,
                    );
                    const bookings = await lastValueFrom(
                        queryBookings({
                            period_start: getUnixTime(
                                startOfMinute(Date.now()),
                            ),
                            period_end: getUnixTime(
                                addMinutes(
                                    Date.now(),
                                    (time_after || 5) + time_before,
                                ),
                            ),
                            type,
                        }),
                    );
                    const check_block = (time_after || 0) + time_before;
                    for (const booking of bookings) {
                        if (
                            this._ignore_cancel.includes(booking.id) ||
                            booking.checked_in ||
                            booking.rejected
                        ) {
                            continue;
                        }
                        const start_time = booking.is_all_day
                            ? setHours(booking.date, auto_release.all_day_start)
                            : booking.date;
                        this._dialog.closeAll();
                        const diff = differenceInMinutes(
                            addMinutes(start_time, time_after || 0),
                            Date.now(),
                        );
                        if (diff > check_block || diff < 0) continue;
                        const time = addMinutes(start_time, time_after || 0);
                        const close_after = differenceInMilliseconds(
                            time.getTime() + 60 * 1000,
                            Date.now(),
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
                                    this._settings.time_format,
                                )} will be cancelled at ${format(
                                    time,
                                    this._settings.time_format,
                                )}.<br/><br/>
                                Do you wish to keep this ${wording}?`,
                                icon: { content: 'event_busy' },
                                confirm_text: 'Keep',
                                close_delay: close_after,
                            },
                            this._dialog,
                        );
                        if (result.reason !== 'done') {
                            this._ignore_cancel.push(booking.id);
                            continue;
                        }
                        result.loading('Checking in booking...');
                        await lastValueFrom(checkinBooking(booking.id, true));
                        result.close();
                    }
                }
            }
        }),
    );

    public get dateValue() {
        return this._date.getValue();
    }

    constructor() {
        super();
        this.subscription(
            'poll_type',
            this._org.active_building.subscribe(() =>
                this._poll_type.next(
                    this._settings.get('app.schedule.use_websocket')
                        ? 'ws'
                        : 'api',
                ),
            ),
        );
        this.subscription(
            'chat_event',
            this._settings
                .listen('CHAT:task_complete')
                .subscribe(() => this.triggerPoll()),
        );
        this.subscription('wfh_checks', this._checkCancel.subscribe());
        this._deleted = JSON.parse(
            sessionStorage.getItem('PLACEOS.events.deleted') || '[]',
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
        this.setAsDeleted(
            item.instance ? `${item.id}|${item.instance}` : item.id,
        );
        this._poll.next(Date.now());
    }

    public setAsDeleted(id: string) {
        this._deleted.push(id);
        sessionStorage.setItem(
            'PLACEOS.events.deleted',
            JSON.stringify(this._deleted),
        );
    }

    public setType(name: string, state: boolean) {
        const filters = this._filters.getValue() || { shown_types: [] };
        const { shown_types } = filters;
        if (shown_types.includes(name) === state) return;
        const new_types = state
            ? unique([...shown_types, name])
            : shown_types.filter((_) => _ !== name);
        this._filters.next({
            ...filters,
            shown_types: new_types,
        });
    }

    public async toggleType(name: string, clear = false) {
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

    private _bookingQuery(
        type: BookingType,
        period: 'day' | 'week' | 'month',
        date: number,
    ) {
        return queryBookings({
            period_start: getUnixTime(
                period === 'day'
                    ? startOfDay(date)
                    : startOfWeek(date, {
                          weekStartsOn: this.offset_weekday,
                      }),
            ),
            period_end: getUnixTime(
                period === 'day'
                    ? endOfDay(date)
                    : endOfWeek(date, {
                          weekStartsOn: this.offset_weekday,
                      }),
            ),
            type,
            include_checked_out: true,
            include_deleted: 'recurring',
        }).pipe(catchError(() => of([])));
    }
}
