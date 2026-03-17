import { computed, inject, Injectable, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    BookingFormService,
    checkinBooking,
    loadLockerBanks,
    loadLockers,
    Locker,
    LockerBank,
    ParkingService,
    queryBookings,
    removeBooking,
    updateBooking,
    updateBookingInstance,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    BookingType,
    CalendarEvent,
    current_user,
    currentUser,
    flatten,
    i18n,
    notifyError,
    notifySuccess,
    OrganisationService,
    SettingsService,
    unique,
} from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import {
    EventFormService,
    newCalendarEventFromBooking,
    queryEvents,
    removeEvent,
    requestSpacesForZone,
    SpacesService,
} from '@placeos/events';
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
import { combineLatest, interval, lastValueFrom, Observable, of } from 'rxjs';
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

export type EventSource = 'api' | 'driver' | 'ws';

export interface ScheduleOptions {
    period: 'day' | 'week' | 'month' | 'range';
}

/**
 * De-duplicates events from multiple sources based on ical_uid.
 * Events from sources earlier in the list take priority.
 * @param events_by_source - Array of event arrays, ordered by priority (first = highest priority)
 * @returns De-duplicated array of events
 */
function deduplicateEventsByIcalUid(
    events_by_source: CalendarEvent[][],
): CalendarEvent[] {
    const seen_ical_uids = new Set<string>();
    const result: CalendarEvent[] = [];

    for (const events of events_by_source) {
        for (const event of events) {
            const uid = event.ical_uid;
            // If no ical_uid, include the event (can't dedupe without it)
            // If ical_uid exists and hasn't been seen, include and mark as seen
            if (!uid || !seen_ical_uids.has(uid)) {
                if (uid) seen_ical_uids.add(uid);
                result.push(event);
            }
        }
    }

    return result;
}

@Injectable({
    providedIn: 'root',
})
export class ScheduleStateService extends AsyncHandler {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _event_form = inject(EventFormService);
    private _booking_form = inject(BookingFormService);
    private _router = inject(Router);
    private _parking = inject(ParkingService);
    private _spaces = inject(SpacesService);

    private _poll = signal(0);
    private _poll_type = signal<'api' | 'ws' | 'driver'>('api');
    private _loading = signal(false);
    private _options = signal<ScheduleOptions>({ period: 'day' });
    private _filters = signal({
        shown_types: [
            'event',
            'desk',
            'parking',
            'visitor',
            'locker',
            'group-event',
            'vip-visitor',
        ],
    });
    private _date = signal(Date.now());
    private _end_date = signal<number | null>(null);

    private _deleted: string[] = [];

    private _active_building = toSignal(
        this._org.active_building.pipe(filter((_) => !!_)),
        { requireSync: false },
    );

    private _space_bookings: Observable<CalendarEvent[]> =
        this._org.active_building.pipe(
            filter((_) => !!_),
            distinctUntilKeyChanged('id'),
            debounceTime(300),
            tap((_) => this.unsubWith('bind:')),
            switchMap(({ id }) => {
                this._loading.set(true);
                return requestSpacesForZone(id);
            }), // Get list of spaces for building
            distinctUntilChanged(([s1], [s2]) => s1 !== s2),
            switchMap((list) => {
                this._loading.set(false);
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

    private _user_bookings: Observable<CalendarEvent[]> = combineLatest([
        this._org.active_building,
        toObservable(this._poll),
    ]).pipe(
        filter(([bld]) => !!bld),
        debounceTime(300),
        switchMap(() => {
            this._loading.set(true);
            const mod = this._org.module(
                'location_services',
                'LocationServices',
            );
            if (!mod?.system) return of([]);
            return mod.execute('my_bookings').catch((_) => []);
        }),
        map((_) => (_ || []).map((_) => new CalendarEvent(_))),
        shareReplay(1),
    );

    public readonly options = this._options.asReadonly();
    /** Currently selected date */
    public readonly filters = this._filters.asReadonly();
    /** Currently selected date (start date for range) */
    public readonly date = this._date.asReadonly();
    /** End date for range selection (list view only) */
    public readonly end_date = this._end_date.asReadonly();
    /** Whether events and bookings are loading */
    public readonly loading = this._loading.asReadonly();

    public setOptions(options: ScheduleOptions) {
        this._options.set(options);
    }

    public getOptions() {
        return this._options();
    }

    public readonly week_date = computed(() => {
        const building = this._active_building();
        const date = this.date();
        if (!building) return Date.now();
        return startOfWeek(date, {
            weekStartsOn: this.offset_weekday as any,
        }).valueOf();
    });

    public readonly week_options = computed(() => {
        const building = this._active_building();
        const date = this.date();
        if (!building) return [];
        const options = [];
        const start_date = startOfDay(Date.now());
        for (let i = -4; i < 48; i++) {
            const day = addWeeks(start_date, i);
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
    });

    private readonly _update$ = combineLatest([
        toObservable(this._date),
        toObservable(this._end_date),
        toObservable(this._poll),
    ]).pipe(
        debounceTime(500),
        tap((_) => this._loading.set(true)),
    );

    private readonly driver_events = toSignal(
        combineLatest([this._user_bookings, this._update$]).pipe(
            map(([_, [date, _end_date]]) => {
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
        ),
        { initialValue: [] },
    );

    private readonly ws_events = toSignal(
        combineLatest([this._space_bookings, this._update$]).pipe(
            map(([_, [date, _end_date]]) => {
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
        ),
        { initialValue: [] },
    );
    /** List of calendar events for the selected date */
    private readonly api_events = toSignal(
        combineLatest([this._update$, toObservable(this._options)]).pipe(
            switchMap(([[date, end_date], options]) => {
                const period = options.period;
                const query = {
                    period_start: getUnixTime(
                        period === 'range'
                            ? startOfDay(date)
                            : period === 'day'
                              ? startOfDay(date)
                              : startOfWeek(date, {
                                    weekStartsOn: this.offset_weekday as any,
                                }),
                    ),
                    period_end: getUnixTime(
                        period === 'range'
                            ? endOfDay(end_date || date)
                            : period === 'day'
                              ? endOfDay(date)
                              : endOfWeek(date, {
                                    weekStartsOn: this.offset_weekday as any,
                                }),
                    ),
                };
                return this._settings.get('app.events.use_bookings')
                    ? queryBookings({ ...query, type: 'room' }).pipe(
                          map((_) =>
                              _.map((i) => newCalendarEventFromBooking(i)),
                          ),
                          catchError((_) => of([])),
                      )
                    : queryEvents({ ...query }).pipe(catchError((_) => of([])));
            }),
            shareReplay(1),
        ),
        { initialValue: [] },
    );
    /** List of calendar events for the selected date */
    public readonly raw_events = computed(() => {
        const poll_type = this._poll_type();
        const period = this._options().period;
        const events =
            poll_type === 'driver'
                ? this.driver_events()
                : poll_type === 'api' || period !== 'week'
                  ? this.api_events()
                  : this.ws_events();
        this.timeout('end_loading', () => this._loading.set(false));
        return events || [];
    });

    /** List of calendar events for the selected date */
    public readonly events = computed(() =>
        this.raw_events().filter((_) => !_.extension_data?.shared_event),
    );
    /** List of VIP visitor bookings for the selected date */
    public readonly vip_visitors = toSignal(
        combineLatest([this._update$, toObservable(this.options)]).pipe(
            switchMap(([[date, end_date], options]) =>
                this._bookingQuery(
                    'vip-visitor',
                    options.period,
                    date,
                    end_date,
                ),
            ),
            map((_) => _.filter((_) => !_.parent_id && !_.linked_event)),
            tap(() =>
                this.timeout('end_loading', () => this._loading.set(false)),
            ),
            shareReplay(1),
        ),
        { initialValue: [] },
    );
    /** List of visitor bookings for the selected date */
    public readonly visitors = toSignal(
        combineLatest([this._update$, toObservable(this.options)]).pipe(
            switchMap(([[date, end_date], options]) =>
                this._bookingQuery('visitor', options.period, date, end_date),
            ),
            map((_) => _.filter((_) => !_.linked_event)),
            tap(() =>
                this.timeout('end_loading', () => this._loading.set(false)),
            ),
            shareReplay(1),
        ),
        { initialValue: [] },
    );
    /** List of desk bookings for the selected date */
    public readonly desks = toSignal(
        combineLatest([this._update$, toObservable(this.options)]).pipe(
            switchMap(([[date, end_date], options]) =>
                this._bookingQuery('desk', options.period, date, end_date),
            ),
            map((_) => _.filter((item) => !item.linked_event)),
            tap(() =>
                this.timeout('end_loading', () => this._loading.set(false)),
            ),
            shareReplay(1),
        ),
        { initialValue: [] },
    );
    /** List of parking bookings for the selected date */
    public readonly parking = toSignal(
        combineLatest([this._update$, toObservable(this.options)]).pipe(
            switchMap(([[date, end_date], options]) =>
                this._bookingQuery('parking', options.period, date, end_date),
            ),
            tap(() =>
                this.timeout('end_loading', () => this._loading.set(false)),
            ),
            shareReplay(1),
        ),
        { initialValue: [] },
    );
    /** List of calendar events for the selected date */
    public readonly group_events = computed(() =>
        this.raw_events().filter((_) => _.extension_data?.shared_event),
    );
    public readonly locker_bookings = toSignal(
        combineLatest([this._update$, toObservable(this.options)]).pipe(
            switchMap(([[date, end_date], options]) =>
                this._bookingQuery('locker', options.period, date, end_date),
            ),
            tap(() =>
                this.timeout('end_loading', () => this._loading.set(false)),
            ),
            shareReplay(1),
        ),
        { initialValue: [] },
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
    public readonly lockers = toSignal(
        combineLatest([
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
            tap(() =>
                this.timeout('end_loading', () => this._loading.set(false)),
            ),
            shareReplay(1),
        ),
        { initialValue: [] },
    );

    /** List of events and bookings for the selected date */
    public readonly bookings = computed(() => {
        const events = this.events() || [];
        const visitors = this.visitors() || [];
        const vip_visitors = this.vip_visitors() || [];
        const desks = this.desks() || [];
        const parking = this.parking() || [];
        const lockers = this.lockers() || [];
        const locker_bookings = this.locker_bookings() || [];
        const group_events = this.group_events() || [];

        const filtered_events = events.filter(
            (ev) =>
                !desks.find(
                    (bkn) =>
                        ev.meeting_id && `${ev.meeting_id}` === `${bkn.id}`,
                ) && ev.linked_bookings[0]?.booking_type !== 'group-event',
        );
        return [
            ...filtered_events,
            ...visitors,
            ...vip_visitors,
            ...desks,
            ...parking,
            ...lockers,
            ...locker_bookings,
            ...group_events,
        ].sort((a, b) => a.date - b.date);
    });

    /** Filtered list of events and bookings for the selected date */
    public readonly filtered_bookings = computed(() => {
        const booking_list = this.bookings();
        const filters = this.filters();
        return booking_list.filter((_) => {
            if (
                this._deleted.includes(
                    (_ as any).instance
                        ? `${_.id}|${(_ as any).instance}`
                        : _.id,
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
        });
    });

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
        return this._date();
    }

    constructor() {
        super();
        this.subscription(
            'poll_type',
            this._org.active_building.subscribe(() =>
                this._poll_type.set(
                    this._settings.get('app.schedule.use_driver')
                        ? 'driver'
                        : this._settings.get('app.schedule.use_websocket')
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
        this._poll.set(Date.now());
    }

    public startPolling(delay = 60 * 1000) {
        this.interval('poll', () => this._poll.set(Date.now()), delay);
        return () => this.stopPolling();
    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    public setDate(date: number) {
        this._date.set(date);
    }

    public setEndDate(date: number | null) {
        this._end_date.set(date);
    }

    public setDateRange(start: number, end: number | null) {
        this._date.set(start);
        this._end_date.set(end);
    }

    public removeItem(item) {
        this.setAsDeleted(
            item.instance ? `${item.id}|${item.instance}` : item.id,
        );
        this._poll.set(Date.now());
    }

    public setAsDeleted(id: string) {
        this._deleted.push(id);
        sessionStorage.setItem(
            'PLACEOS.events.deleted',
            JSON.stringify(this._deleted),
        );
    }

    public setType(name: string, state: boolean) {
        const filters = this._filters();
        const { shown_types } = filters;
        if (shown_types.includes(name) === state) return;
        const new_types = state
            ? unique([...shown_types, name])
            : shown_types.filter((_) => _ !== name);
        this._filters.set({
            ...filters,
            shown_types: new_types,
        });
    }

    public async toggleType(name: string, clear = false) {
        const filters = this._filters();
        const { shown_types } = filters;
        if (shown_types && (shown_types.includes(name) || clear)) {
            this._filters.set({
                ...filters,
                shown_types: shown_types.filter((_) => _ !== name),
            });
        } else {
            this._filters.set({
                ...filters,
                shown_types: [...shown_types, name],
            });
        }
    }

    private _bookingQuery(
        type: BookingType,
        period: 'day' | 'week' | 'month' | 'range',
        date: number,
        end_date?: number | null,
    ) {
        return queryBookings({
            period_start: getUnixTime(
                period === 'range'
                    ? startOfDay(date)
                    : period === 'day'
                      ? startOfDay(date)
                      : startOfWeek(date, {
                            weekStartsOn: this.offset_weekday,
                        }),
            ),
            period_end: getUnixTime(
                period === 'range'
                    ? endOfDay(end_date || date)
                    : period === 'day'
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

    ///////////////////////////////////////////////////////////////

    public async edit(event: CalendarEvent) {
        console.log('Edit Event:', event);
        this._router.navigate(['/book', 'meeting', 'form']);
        if (event.creator !== event.mailbox) {
            event =
                (
                    await queryEvents({
                        period_start: event.event_start,
                        period_end: event.event_end,
                        ical_uid: event.ical_uid,
                    }).toPromise()
                ).find((_) => _.ical_uid === event.ical_uid) || event;
        }
        // Load full space details for resources
        if (event.resources?.length) {
            const full_resources = await Promise.all(
                event.resources.map(async (resource) => {
                    // Use email or id as the lookup key
                    const lookup_key = resource.email || resource.id;
                    if (!lookup_key) return resource;

                    // Try to find in cache first (by id or email)
                    let space = this._spaces.find(lookup_key);
                    if (!space) {
                        // If not in cache, load from API
                        try {
                            await this._spaces.loadSpace(lookup_key);
                            space = this._spaces.find(lookup_key);
                        } catch (err) {
                            console.warn(
                                `Failed to load space ${lookup_key}:`,
                                err,
                            );
                        }
                    }
                    // Return full space or fallback to original resource
                    return space || resource;
                }),
            );
            // Create new event with full resources
            event = new CalendarEvent({
                ...event.toJSON(),
                resources: full_resources,
            });
        }
        setTimeout(() => this._event_form.newForm(event), 300);
    }

    public editBooking(event: Booking) {
        console.log('Edit Booking:', event.type);
        const booking_type = `${event.booking_type || ''}`.trim() || event.type;
        this._router.navigate(['/book', `${event.type}`]);
        this._booking_form.newForm(booking_type as any, event);
        if (booking_type === 'visitor') return;
        setTimeout(() => {
            this._booking_form.form.patchValue({
                resources: [
                    {
                        id: event.asset_id,
                        name: event.asset_name || event.description,
                    },
                ],
                asset_id: event.asset_id,
            });
        }, 100);
    }

    public async remove(item: CalendarEvent | Booking, remove_series = false) {
        const time = `${format(item.date, 'dd MMM yyyy h:mma')}`;
        const resource_name =
            item instanceof CalendarEvent
                ? item.title || item.space?.display_name
                : item.title || item.asset_name || item.asset_id;
        const resp = await openConfirmModal(
            {
                title: i18n(
                    remove_series
                        ? 'APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_TITLE'
                        : 'APP.WORKPLACE.SCHEDULE_REMOVE_TITLE',
                    { name: resource_name, time },
                ),
                content: i18n(
                    remove_series
                        ? 'APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_MSG'
                        : 'APP.WORKPLACE.SCHEDULE_REMOVE_MSG',
                    { name: resource_name, time },
                ),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (item instanceof CalendarEvent && item.creator !== item.mailbox) {
            item =
                (
                    await queryEvents({
                        period_start: item.event_start,
                        period_end: item.event_end,
                        ical_uid: item.ical_uid,
                    }).toPromise()
                ).find(
                    (_) => _.ical_uid === (item as CalendarEvent).ical_uid,
                ) || item;
        }
        if (resp.reason !== 'done') return;
        resp.loading(
            i18n(
                remove_series
                    ? 'APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_LOADING'
                    : 'APP.WORKPLACE.SCHEDULE_REMOVE_LOADING',
            ),
        );
        await (item instanceof CalendarEvent ? removeEvent : removeBooking)(
            remove_series
                ? (item as any).recurring_event_id || item.id
                : item.id,
            {
                calendar: this._settings.get('app.events.use_bookings')
                    ? null
                    : (item as CalendarEvent).calendar || currentUser()?.email,
                system_id: (item as CalendarEvent).system?.id,
                instance: remove_series ? undefined : !!(item as any).instance,
                start_time: (item as any).instance
                    ? (item as any).instance
                    : undefined,
            } as any,
        )
            .toPromise()
            .catch((e) => {
                notifyError(
                    i18n(
                        remove_series
                            ? 'APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_ERROR'
                            : 'APP.WORKPLACE.SCHEDULE_REMOVE_ERROR',
                        { error: e },
                    ),
                );
                resp.close();
                throw e;
            });
        notifySuccess(
            i18n(
                remove_series
                    ? 'APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_SUCCESS'
                    : 'APP.WORKPLACE.SCHEDULE_REMOVE_SUCCESS',
            ),
        );
        this.removeItem(item);
        this._dialog.closeAll();
    }

    public async end(item: Booking) {
        const now = Date.now();
        const resource_name = item.asset_name || item.asset_id;

        // Fail if the current time is past the booking end
        if (isAfter(now, item.date_end)) {
            notifyError(i18n('APP.WORKPLACE.SCHEDULE_END_ALREADY_ENDED_ERROR'));
            return;
        }

        // Delete booking if current time is before the start
        if (isBefore(now, item.date)) {
            return this.remove(item);
        }

        // Otherwise, update the end time to the current time
        const time = `${format(item.date, 'dd MMM yyyy h:mma')}`;
        const resp = await openConfirmModal(
            {
                title: i18n('APP.WORKPLACE.SCHEDULE_END_TITLE'),
                content: i18n('APP.WORKPLACE.SCHEDULE_END_MSG', {
                    name: resource_name,
                    time,
                }),
                icon: { content: 'event_busy' },
            },
            this._dialog,
        );

        if (resp.reason !== 'done') return;
        resp.loading(i18n('APP.WORKPLACE.SCHEDULE_END_LOADING'));
        const changes = {
            booking_end: getUnixTime(now),
            all_day: false,
        };
        const promise = (
            item.instance
                ? updateBookingInstance(item.id, item.instance, changes)
                : updateBooking(item.id, changes)
        )
            .toPromise()
            .catch((e) => {
                notifyError(
                    i18n('APP.WORKPLACE.SCHEDULE_END_ERROR', { error: e }),
                );
                resp.close();
                throw e;
            });
        await promise;
        notifySuccess(i18n('APP.WORKPLACE.SCHEDULE_END_SUCCESS'));
        this._poll.set(Date.now());
        this._dialog.closeAll();
    }
}
