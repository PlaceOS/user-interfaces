import {
    computed,
    debounced,
    effect,
    inject,
    Injectable,
    Injector,
    signal,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    BookingFormService,
    loadLockerResources,
    ParkingService,
    queryBookings,
    removeBooking,
    setBookingCheckedIn,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    BookingType,
    CalendarEvent,
    currentUser,
    flatten,
    i18n,
    MINUTES,
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

export type EventSource = 'api' | 'driver' | 'ws';

export interface ScheduleOptions {
    period: 'day' | 'week' | 'month' | 'range';
}

export interface ScheduleFilters {
    shown_types: string[];
    show_bookings_for_others: boolean;
}

export function isBookingForOtherUser(
    item: Booking | CalendarEvent,
    current_email = currentUser()?.email,
) {
    if (!(item instanceof Booking)) return false;
    const current_user_email = current_email?.toLowerCase();
    const booked_by_email = item.booked_by_email?.toLowerCase();
    const user_email = item.user_email?.toLowerCase();
    return (
        !!current_user_email &&
        booked_by_email === current_user_email &&
        !!user_email &&
        user_email !== current_user_email
    );
}

export function bookedForLabel(item: Booking | CalendarEvent) {
    if (!(item instanceof Booking)) return '';
    return (
        `${item.user_name || ''}`.trim() || `${item.user_email || ''}`.trim()
    );
}

function deduplicateEventsByIcalUid(
    events_by_source: CalendarEvent[][],
): CalendarEvent[] {
    const seen_ical_uids = new Set<string>();
    const result: CalendarEvent[] = [];

    for (const events of events_by_source) {
        for (const event of events) {
            const uid = event.ical_uid;
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
    private _spaces = inject(SpacesService);
    private _injector = inject(Injector);

    private _poll = signal(0);
    private _event_sources = signal<EventSource[]>(['api']);
    private _loading = signal(false);
    private _options = signal<ScheduleOptions>({ period: 'day' });
    private _filters = signal<ScheduleFilters>({
        shown_types: [
            'event',
            'desk',
            'parking',
            'visitor',
            'locker',
            'group-event',
        ],
        show_bookings_for_others: false,
    });
    private _date = signal(Date.now());
    private _end_date = signal<number | null>(null);
    private _deleted: string[] = [];
    private _ignore_cancel: string[] = [];
    private _network_requested = false;
    private _network_started = false;
    private _booking_query_requests = new Map<string, Promise<Booking[]>>();

    private _space_bookings = signal<CalendarEvent[]>([]);
    private _user_bookings = signal<CalendarEvent[]>([]);
    private _api_events = signal<CalendarEvent[]>([]);
    private _visitors = signal<Booking[]>([]);
    private _desks = signal<Booking[]>([]);
    private _parking_bookings = signal<Booking[]>([]);
    private _locker_bookings = signal<Booking[]>([]);
    private _lockers = signal<Booking[]>([]);

    private readonly _requests_ready = computed(() => {
        const region = this._org.active_region();
        const building = this._org.active_building();
        const overrides = this._settings.overrides();
        const required_overrides = (this._org.settings?.length || 0) + 2;
        return (
            this._org.initialised() &&
            (!this._org.regions.length || !!region?.id) &&
            !!building?.id &&
            overrides.length >= required_overrides
        );
    });

    public readonly options = this._options.asReadonly();
    public readonly filters = this._filters.asReadonly();
    /** Currently selected date (start date for range) */
    public readonly date = this._date.asReadonly();
    /** End date for range selection (list view only) */
    public readonly end_date = this._end_date.asReadonly();
    public readonly loading = this._loading.asReadonly();
    public readonly event_sources = this._event_sources.asReadonly();

    private readonly _query_params = computed(() => {
        this._poll();
        if (!this._requests_ready()) return undefined;
        return {
            date: this._date(),
            end_date: this._end_date(),
            period: this._options().period,
        };
    });
    private readonly _query_params_debounced = debounced(
        this._query_params,
        300,
    );

    public readonly week_date = computed(() =>
        startOfWeek(this._date(), {
            weekStartsOn: this.offset_weekday as any,
        }).valueOf(),
    );

    public readonly week_options = computed(() => {
        if (!this._org.active_building()) return [];
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
            options.push({
                id: week_s_date.valueOf(),
                name: `${format(week_s_date, 'dd MMM')} - ${format(
                    week_e_date,
                    'dd MMM',
                )}`,
                this_week,
            });
        }
        return options;
    });

    public readonly driver_events = computed(() => {
        if (!this._hasFeature('spaces')) return [];
        this._requestNetwork();
        return this._filterUserEvents(this._user_bookings());
    });
    public readonly ws_events = computed(() => {
        if (!this._hasFeature('spaces')) return [];
        this._requestNetwork();
        return this._filterUserEvents(this._space_bookings());
    });
    public readonly api_events = computed(() => {
        if (!this._canLoadEvents()) return [];
        this._requestNetwork();
        return this._api_events();
    });

    public readonly raw_events = computed(() => {
        const sources = this._event_sources();
        if (!sources?.length) return [];
        const events_by_source = sources.map((source) => {
            switch (source) {
                case 'driver':
                    return this.driver_events();
                case 'ws':
                    return this.ws_events();
                case 'api':
                default:
                    return this.api_events();
            }
        });
        return deduplicateEventsByIcalUid(events_by_source);
    });
    public readonly events = computed(() =>
        this.raw_events().filter((_) => !_.extension_data?.shared_event),
    );
    public readonly visitors = computed(() => {
        if (!this._canLoadBookingType('visitor')) return [];
        this._requestNetwork();
        return this._visitors();
    });
    public readonly desks = computed(() => {
        if (!this._canLoadBookingType('desk')) return [];
        this._requestNetwork();
        return this._desks();
    });
    public readonly parking = computed(() => {
        if (!this._canLoadBookingType('parking')) return [];
        this._requestNetwork();
        return this._parking_bookings();
    });
    public readonly group_events = computed(() =>
        this._hasFeature('group-events')
            ? this.raw_events().filter((_) => _.extension_data?.shared_event)
            : [],
    );
    public readonly locker_bookings = computed(() => {
        if (!this._canLoadBookingType('locker')) return [];
        this._requestNetwork();
        return this._locker_bookings();
    });
    public readonly lockers = computed(() => {
        if (!this._canLoadBookingType('locker')) return [];
        this._requestNetwork();
        return this._lockers();
    });

    public readonly bookings = computed(() => {
        const events = this.events();
        const visitors = this.visitors();
        const desks = this.desks();
        const parking = this.parking();
        const lockers = this.lockers();
        const locker_bookings = this.locker_bookings();
        const group_events = this.group_events();
        const filtered_events = events.filter(
            (ev) =>
                !desks.find((bkn) => `${ev.meeting_id}` === `${bkn.id}`) &&
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
    });

    public readonly filtered_bookings = computed(() =>
        this.bookings().filter((_) => {
            const filters = this._filters();
            if (
                this._deleted.includes(
                    (_ as any).instance
                        ? `${_.id}|${(_ as any).instance}`
                        : _.id,
                )
            ) {
                return false;
            }
            if (
                this.isBookingForOtherUser(_) &&
                !filters?.show_bookings_for_others
            ) {
                return false;
            }
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
            }
            if (_ instanceof CalendarEvent) return true;
            return filters?.shown_types?.includes((_ as any).booking_type);
        }),
    );

    public get offset_weekday(): 0 | 1 | 2 | 3 | 4 | 5 | 6 {
        return this._settings.get('app.week_start') || 0;
    }

    public get dateValue() {
        return this._date();
    }

    constructor() {
        super();
        this._deleted = JSON.parse(
            sessionStorage.getItem('PLACEOS.events.deleted') || '[]',
        );
        effect(() => {
            this._org.active_building();
            this._setConfiguredEventSources();
        });
        effect(() => {
            this._settings.listen('CHAT:task_complete')();
            this.triggerPoll();
        });
    }

    private _requestNetwork() {
        if (this._network_requested || this._network_started) return;
        this._network_requested = true;
        queueMicrotask(() => this._startNetwork());
    }

    private _startNetwork() {
        if (this._network_started) return;
        this._network_started = true;
        this._loadSpaceBookings();
        this._loadUserBookings();
        this._loadApiEvents();
        this._loadBookingType('visitor', this._visitors, (list) =>
            list.filter((_) => !_.linked_event),
        );
        this._loadBookingType('desk', this._desks);
        this._loadBookingType('parking', this._parking_bookings, (list) =>
            this._resolveParkingNames(list),
        );
        this._loadBookingType('locker', this._locker_bookings);
        this._loadLockers();
        this.interval('wfh_checks', () => this._checkCancel(), 60 * 1000);
        this._checkCancel();
    }

    private _hasFeature(feature: string) {
        return (this._settings.get<string[]>('app.features') || []).includes(
            feature,
        );
    }

    private _canLoadEvents() {
        return this._hasFeature('spaces') || this._hasFeature('group-events');
    }

    private _canLoadBookingType(type: BookingType) {
        switch (type) {
            case 'desk':
                return this._hasFeature('desks');
            case 'parking':
                return (
                    this._hasFeature('parking') ||
                    this._hasFeature('parking-requests')
                );
            case 'visitor':
                return this._hasFeature('visitor-invite');
            case 'locker':
                return this._hasFeature('lockers');
            default:
                return true;
        }
    }

    public setOptions(options: ScheduleOptions) {
        this._options.set(options);
    }

    public getOptions() {
        return this._options();
    }

    public setEventSources(sources: EventSource[]) {
        if (sources?.length) this._event_sources.set(sources);
    }

    public getEventSources(): EventSource[] {
        return this._event_sources();
    }

    public triggerPoll() {
        if (this._network_started) {
            this._poll.set(Date.now());
            return;
        }
        this._poll.set(Date.now());
    }

    public startPolling(delay = 3 * MINUTES) {
        this._startNetwork();
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
        this._startNetwork();
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
        this._filters.set({ ...filters, shown_types: new_types });
    }

    public setBookingsForOthers(state: boolean) {
        const filters = this._filters();
        if (filters.show_bookings_for_others === state) return;
        this._filters.set({ ...filters, show_bookings_for_others: state });
    }

    public isBookingForOtherUser(item: Booking | CalendarEvent) {
        return isBookingForOtherUser(item);
    }

    public toggleBookingsForOthers() {
        this.setBookingsForOthers(!this._filters().show_bookings_for_others);
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

    private _loadSpaceBookings() {
        effect(
            async (onCleanup) => {
                const bld = this._org.active_building();
                if (
                    !this._hasFeature('spaces') ||
                    !this._requests_ready() ||
                    !bld?.id
                ) {
                    this._space_bookings.set([]);
                    return;
                }
                let active = true;
                const cleanups: (() => void)[] = [];
                onCleanup(() => {
                    active = false;
                    for (const cleanup of cleanups) cleanup();
                });
                this._loading.set(true);
                const spaces = await requestSpacesForZone(bld.id)
                    .toPromise()
                    .catch(() => []);
                const events_by_space: CalendarEvent[][] = [];
                for (const [idx, space] of (spaces || []).entries()) {
                    const binding = getModule(space.id, 'Bookings').variable(
                        'bookings',
                    );
                    cleanups.push(
                        binding.bindThenSubscribe((event_list) => {
                            events_by_space[idx] = (event_list || []).map(
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
                            );
                            if (active) {
                                this._space_bookings.set(
                                    flatten<CalendarEvent>(events_by_space),
                                );
                            }
                        }),
                    );
                }
                this._loading.set(false);
            },
            { injector: this._injector },
        );
    }

    private _loadUserBookings() {
        effect(
            async () => {
                const bld = this._org.active_building();
                const query = this._query_params_debounced.value();
                if (!this._hasFeature('spaces') || !query || !bld?.id) {
                    this._user_bookings.set([]);
                    return;
                }
                this._loading.set(true);
                const mod = this._org.module(
                    'location_services',
                    'LocationServices',
                );
                const list = mod?.system
                    ? await mod.execute('my_bookings').catch(() => [])
                    : [];
                this._user_bookings.set(
                    (list || []).map((_) => new CalendarEvent(_)),
                );
                this._loading.set(false);
            },
            { injector: this._injector },
        );
    }

    private _loadApiEvents() {
        effect(
            async () => {
                const query_params = this._query_params_debounced.value();
                if (!this._canLoadEvents() || !query_params) {
                    this._api_events.set([]);
                    return;
                }
                const { date, end_date, period } = query_params;
                this._loading.set(true);
                const query = this._periodQuery(period, date, end_date);
                const list = this._settings.get('app.events.use_bookings')
                    ? await queryBookings({ ...query, type: 'room' })
                          .then((_) =>
                              _.map((i) => newCalendarEventFromBooking(i)),
                          )
                          .catch(() => [])
                    : await queryEvents({ ...query }).catch(() => []);
                this._api_events.set(list);
                this.timeout('end_loading', () => this._loading.set(false));
            },
            { injector: this._injector },
        );
    }

    private _loadBookingType(
        type: BookingType,
        target,
        map_list: (list: Booking[]) => Booking[] = (list) => list,
    ) {
        effect(
            async () => {
                const query_params = this._query_params_debounced.value();
                if (!this._canLoadBookingType(type) || !query_params) {
                    target.set([]);
                    return;
                }
                const { date, end_date, period } = query_params;
                this._loading.set(true);
                const list = await this._bookingQuery(
                    type,
                    period,
                    date,
                    end_date,
                );
                target.set(map_list(list));
                this.timeout('end_loading', () => this._loading.set(false));
            },
            { injector: this._injector },
        );
    }

    /**
     * Replace the asset name of parking bookings with the human readable
     * parking space name/identifier. Without this the booking falls back to
     * showing the raw `asset_id` of the space.
     */
    private _resolveParkingNames(list: Booking[]): Booking[] {
        const spaces = this._injector.get(ParkingService).spaces();
        return list.map((booking) => {
            // Already has a proper name, nothing to resolve
            if (booking.asset_name && booking.asset_name !== booking.asset_id) {
                return booking;
            }
            const space = spaces.find((_) => _.id === booking.asset_id);
            const name = space?.name || space?.identifier;
            if (!name) return booking;
            return new Booking({ ...booking.toJSON(), asset_name: name });
        });
    }

    private _loadLockers() {
        effect(
            async () => {
                const bld = this._org.active_building();
                const region = this._org.active_region();
                if (
                    !this._canLoadBookingType('locker') ||
                    !this._requests_ready()
                ) {
                    this._lockers.set([]);
                    return;
                }
                const scope_id = this._settings.get('app.use_region')
                    ? region?.id || this._org.region?.id
                    : bld?.id;
                if (!scope_id) {
                    this._lockers.set([]);
                    return;
                }
                const lockers = await loadLockerResources(this._org, scope_id);
                const mod = this._org.module('lockers', 'LockerLocations');
                const my_lockers = mod
                    ? await mod
                          .execute('lockers_allocated_to_me')
                          .catch(() => [])
                    : [];
                this._lockers.set(
                    my_lockers
                        .map((i) => {
                            const locker = lockers.find(
                                (lkr) => lkr.id === i.locker_id,
                            );
                            if (!locker && (!i.level || !i.building)) {
                                return null;
                            }
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
                                extension_data: {},
                            });
                        })
                        .filter((item) => item),
                );
                this.timeout('end_loading', () => this._loading.set(false));
            },
            { injector: this._injector },
        );
    }

    private _filterUserEvents(list: CalendarEvent[]) {
        const user = currentUser();
        const date = this._date();
        return list.filter(
            (_) =>
                isSameDay(_.date, date) &&
                (_.host.toLowerCase() === user.email.toLowerCase() ||
                    _.attendees.find(
                        (a) =>
                            a.email.toLowerCase() === user.email.toLowerCase(),
                    )) &&
                !_.linked_bookings?.find(
                    (b) => b.booking_type === 'group-event',
                ),
        );
    }

    private _setConfiguredEventSources() {
        const sources_setting = this._settings.get(
            'app.schedule.event_sources',
        ) as EventSource[] | undefined;
        if (sources_setting?.length) {
            this._event_sources.set(sources_setting);
        } else {
            const legacy_source: EventSource = this._settings.get(
                'app.schedule.use_driver',
            )
                ? 'driver'
                : this._settings.get('app.schedule.use_websocket')
                  ? 'ws'
                  : 'api';
            this._event_sources.set([legacy_source]);
        }
    }

    private _periodQuery(
        period: 'day' | 'week' | 'month' | 'range',
        date: number,
        end_date?: number | null,
    ) {
        return {
            period_start: getUnixTime(
                period === 'range' || period === 'day'
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
    }

    private _bookingQuery(
        type: BookingType,
        period: 'day' | 'week' | 'month' | 'range',
        date: number,
        end_date?: number | null,
    ) {
        const query = {
            ...this._periodQuery(period, date, end_date),
            type,
            include_checked_out: true,
            include_booked_by: true,
            include_deleted: true,
        };
        const key = JSON.stringify(query);
        const existing = this._booking_query_requests.get(key);
        if (existing) return existing;
        const request = queryBookings(query)
            .catch(() => [])
            .finally(() => this._booking_query_requests.delete(key));
        this._booking_query_requests.set(key, request);
        return request;
    }

    private async _checkCancel() {
        const user = currentUser();
        if (!user?.id) return;
        const is_home = user.location !== 'wfo';
        const auto_release = this._settings.get('app.auto_release');
        if (
            !auto_release ||
            !is_home ||
            !(auto_release.time_after || auto_release.time_before) ||
            !auto_release.resources?.length
        ) {
            return;
        }
        for (const type of auto_release.resources) {
            if (!this._canLoadBookingType(type)) continue;
            const time_after =
                auto_release[`${type}_time_after`] || auto_release.time_after;
            const time_before = Math.min(
                60,
                auto_release[`${type}_time_before`] ||
                    auto_release.time_before ||
                    0,
            );
            const bookings = await queryBookings({
                period_start: getUnixTime(startOfMinute(Date.now())),
                period_end: getUnixTime(
                    addMinutes(Date.now(), (time_after || 5) + time_before),
                ),
                type,
            });
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
                const wording = type === 'parking' ? 'reservation' : 'booking';
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
                await setBookingCheckedIn(booking, true);
                result.close();
            }
        }
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
                    })
                ).find((_) => _.ical_uid === event.ical_uid) || event;
        }
        // Load full space details for resources
        const resources = event.resources?.length
            ? event.resources
            : event.system
              ? [event.system]
              : [];
        if (resources.length) {
            const full_resources = await Promise.all(
                resources.map(async (resource) => {
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
            this._booking_form.model.update((m) => ({
                ...m,
                resources: [
                    {
                        id: event.asset_id,
                        name: event.asset_name || event.description,
                    },
                ],
                asset_id: event.asset_id,
            }));
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
                    })
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
        ).catch((e) => {
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
        if (item instanceof CalendarEvent) this.removeItem(item);
        else this.triggerPoll();
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

        // Otherwise, check out the booking to end it now
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
        const promise = setBookingCheckedIn(item, false).catch((e) => {
            notifyError(i18n('APP.WORKPLACE.SCHEDULE_END_ERROR', { error: e }));
            resp.close();
            throw e;
        });
        await promise;
        notifySuccess(i18n('APP.WORKPLACE.SCHEDULE_END_SUCCESS'));
        this.triggerPoll();
        this._dialog.closeAll();
    }
}
