import {
    Injectable,
    Injector,
    Signal,
    computed,
    debounced,
    effect,
    inject,
    resource,
    signal,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    AsyncHandler,
    BuildingLevel,
    CalendarEvent,
    MINUTES,
    OrganisationService,
    SettingsService,
    Space,
    flatten,
    getTimezoneDifferenceInHours,
    i18n,
    nextValueFrom,
    notifyError,
    notifySuccess,
    timePeriodsIntersect,
} from '@placeos/common';
import {
    declineEvent,
    queryEvents,
    requestSpacesForZone,
} from '@placeos/events';
import { getModule } from '@placeos/ts-client';
import {
    addMinutes,
    endOfDay,
    endOfMonth,
    endOfWeek,
    format,
    getUnixTime,
    startOfDay,
    startOfMonth,
    startOfWeek,
} from 'date-fns';

import { openConfirmModal } from '@placeos/components';
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
interface SpacesParams {
    zones: string[];
    region_id?: string;
    building_id?: string;
}

interface ApiEventsParams {
    period: 'month' | 'week' | 'day';
    zones: string[];
    date: number;
    poll: number;
    spaces: Space[];
}

function periodFor(period, date, tz_offset = 0, week_start: DayOfWeek = 0) {
    const start_result =
        period === 'month'
            ? startOfMonth(date)
            : period === 'week'
              ? startOfWeek(date, { weekStartsOn: week_start })
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
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);
    private _injector = inject(Injector);

    /** Trigger for poll events */
    private _poll = signal<number>(0);
    /** Period to list bookings for */
    private _period = signal<'month' | 'week' | 'day'>('day');
    /** Event to display */
    private _event = signal<CalendarEvent>(null);
    /** Events optimistically removed from the bookings list */
    private _removed_events = signal<CalendarEvent[]>([]);
    /** Events optimistically added to the bookings list */
    private _added_events = signal<CalendarEvent[]>([]);
    /** Filter details for bookings */
    private _filters = signal<BookingFilters>({});
    /** UI display options for bookings */
    private _options = signal<BookingUIOptions>({});
    /** Currently active date */
    private _date = signal<number>(new Date().valueOf());
    /** Currently displayed zones */
    private _zones = signal<string[]>([]);
    /** Bookings pushed from spaces with a room booking driver */
    private _driver_events = signal<Record<string, CalendarEvent[]>>({});
    /** Pending room booking approval requests */
    private _pending = signal<CalendarEvent[]>([]);
    /** Whether the pending approval binding has been set up */
    private _pending_bound = false;

    /** Signal for active date */
    public readonly date = this._date.asReadonly();
    /** Signal for active zones */
    public readonly zones = this._zones.asReadonly();
    /** Signal for UI display options */
    public readonly options = this._options.asReadonly();
    /** Signal for the viewed event */
    public readonly event = this._event.asReadonly();
    /** Period of time to show events for */
    public readonly period = this._period.asReadonly();
    /** Pending room booking approval requests */
    public readonly pending = this._pending.asReadonly();

    /** List of levels with bookable room resources */
    private readonly _levels = resource({
        params: () => this._org.active_levels(),
        defaultValue: [] as BuildingLevel[],
        loader: async ({ params: levels }) => {
            if (!levels.length) return [];
            const results = await Promise.all(
                levels.map(async (level) => {
                    const spaces = await nextValueFrom(
                        requestSpacesForZone(level.id),
                    ).catch(() => [] as Space[]);
                    return {
                        level,
                        has_bookable: (spaces || []).some(
                            (space) => space.bookable,
                        ),
                    };
                }),
            );
            return results
                .filter((item) => item.has_bookable)
                .map((item) => item.level);
        },
    });
    public readonly levels: Signal<BuildingLevel[]> = this._levels.value;

    private readonly _spaces_params = computed<SpacesParams | undefined>(() => {
        const building_id = this._org.active_building()?.id;
        if (!building_id) return undefined;
        return {
            zones: this._zones(),
            region_id: this._org.active_region()?.id,
            building_id,
        };
    });
    private readonly _spaces_params_debounced = debounced(
        this._spaces_params,
        300,
        {
            injector: this._injector,
            equal: (a, b) =>
                a?.region_id === b?.region_id &&
                a?.building_id === b?.building_id &&
                (a?.zones || []).join(',') === (b?.zones || []).join(','),
        },
    );

    /** List of bookable spaces for the active zones */
    private readonly _spaces = resource({
        params: () => this._spaces_params_debounced.value(),
        defaultValue: [] as Space[],
        loader: async ({ params }) => {
            if (!params?.building_id) return [];
            const zone_ids = this._active_zone_ids(params.zones);
            if (!zone_ids.length) return [];
            const lists = await Promise.all(
                zone_ids.map((id) =>
                    nextValueFrom(requestSpacesForZone(id)).catch(
                        () => [] as Space[],
                    ),
                ),
            );
            return flatten<Space>(lists)
                .filter((space) => space.bookable)
                .sort((a, b) =>
                    (a.display_name || a.name || '').localeCompare(
                        b.display_name || b.name || '',
                    ),
                );
        },
    });
    public readonly spaces: Signal<Space[]> = this._spaces.value;

    private readonly _api_events_params = computed<ApiEventsParams | undefined>(
        () => {
            const spaces = this.spaces();
            if (!spaces.length) return undefined;
            return {
                period: this._period(),
                zones: this._zones(),
                date: this._date(),
                poll: this._poll(),
                spaces,
            };
        },
    );
    private readonly _api_events_params_debounced = debounced(
        this._api_events_params,
        300,
        {
            injector: this._injector,
            equal: (a, b) =>
                a?.period === b?.period &&
                a?.date === b?.date &&
                a?.poll === b?.poll &&
                a?.spaces === b?.spaces &&
                (a?.zones || []).join(',') === (b?.zones || []).join(','),
        },
    );

    /** Bookings fetched from the API for spaces without a booking driver */
    private readonly _api_events = resource({
        params: () => this._api_events_params_debounced.value(),
        defaultValue: [] as CalendarEvent[],
        loader: async ({ params }) => {
            if (!params) return [];
            const { period, date, spaces } = params;
            const zones = this._active_zone_ids(params.zones);
            if (!period || !zones.length) return [];
            const spaces_without_driver = spaces.filter(
                (space) => !space.room_booking_url,
            );
            if (!spaces_without_driver.length) return [];
            const { start, end } = periodFor(
                period,
                date,
                this.tz_offset,
                this._week_start,
            );
            const events = await queryEvents({
                strict: 'limit',
                zone_ids: zones.join(','),
                period_start: getUnixTime(start),
                period_end: getUnixTime(end),
            }).catch(() => [] as CalendarEvent[]);
            return (events || []).filter((event) =>
                event.resources?.some((resource) =>
                    spaces_without_driver.some(
                        (space) =>
                            space.id === resource.id ||
                            space.email === resource.email,
                    ),
                ),
            );
        },
    });

    /** Combined list of bookings from the API and booking drivers */
    public readonly event_list: Signal<CalendarEvent[]> = computed(() => {
        const api = this._api_events.value() || [];
        const driver = flatten<CalendarEvent>(
            Object.values(this._driver_events()),
        );
        return [...api, ...driver];
    });

    /** Filtered list of bookings */
    public readonly filtered: Signal<CalendarEvent[]> = computed(() => {
        const removed = this._removed_events();
        const added = this._added_events();
        const filters = this._filters();
        const date = this._date();
        const period = this._period();
        const zones = this._zones();
        const options = this._options();
        let event_list = this.event_list().filter(
            (_) =>
                !removed.find(
                    (e) =>
                        (_.id && e.id && _.id === e.id) ||
                        (_.ical_uid && e.ical_uid && _.ical_uid === e.ical_uid),
                ),
        );
        event_list = event_list.concat(added);
        const { start, end } = periodFor(
            period,
            date,
            this.tz_offset,
            this._week_start,
        );
        return this.filterEvents(
            event_list,
            start,
            end,
            filters,
            zones,
            options,
        );
    });

    /** Whether booking data is being loaded */
    public readonly loading: Signal<boolean> = computed(
        () => this._spaces.isLoading() || this._api_events.isLoading(),
    );

    /** Active filters */
    public get filters() {
        return this._filters();
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

    constructor() {
        super();
        // Manage bookings pushed from spaces with a booking driver. Rebind
        // whenever the list of driver-bound spaces changes.
        effect((on_cleanup) => {
            const driver_spaces = this.spaces().filter(
                (space) => space.room_booking_url,
            );
            const unsubscribes: Record<string, () => void> = {};
            for (const space of driver_spaces) {
                const mod = getModule(space.id, 'Bookings');
                const binding = mod.variable('bookings');
                unsubscribes[space.id] = binding.bindThenSubscribe((value) => {
                    const events = (value || []).map(
                        (bkn) => new CalendarEvent(bkn),
                    );
                    this._driver_events.update((map) => ({
                        ...map,
                        [space.id]: events,
                    }));
                });
            }
            on_cleanup(() => {
                for (const id in unsubscribes) unsubscribes[id]();
                this._driver_events.set({});
            });
        });
        // Clear optimistic add/remove changes when fresh event data arrives
        effect(() => {
            this._api_events.value();
            this._driver_events();
            queueMicrotask(() => {
                this._removed_events.set([]);
                this._added_events.set([]);
            });
        });
        // Bind to room booking approval requests once the module is available
        effect(() => {
            this._org.active_building();
            if (this._pending_bound) return;
            const mod = this._org.module?.('approvals', 'RoomBookingApproval');
            if (!mod) return;
            this._pending_bound = true;
            const binding =
                mod.binding<Partial<CalendarEvent>[]>('approval_required');
            this.subscription('pending', binding.bind());
            const listen = binding.listen();
            const apply = (value) =>
                this._pending.set(
                    flatten<Partial<CalendarEvent>>(
                        Object.values(value || {}),
                    )?.map((i) => new CalendarEvent(i)) ?? [],
                );
            apply(listen());
            this.subscription('pending-listen', listen.subscribe(apply));
        });
    }

    public getDate() {
        return this._date();
    }

    public readonly setFilters = (details: BookingFilters) =>
        this._filters.set(details);
    public readonly setDate = (date: number) => this._date.set(date);
    public readonly setPeriod = (period: 'day' | 'week' | 'month') =>
        this._period.set(period);
    public readonly setZones = (zones: string[]) =>
        this._zones.set(this._clean_zone_ids(zones));
    public readonly setEvent = (event: CalendarEvent) => this._event.set(event);

    public setUIOptions(options: BookingUIOptions) {
        this._options.update((old_options) => ({ ...old_options, ...options }));
    }

    public startPolling(
        period: 'day' | 'week' | 'month' = 'day',
        delay: number = 3 * MINUTES,
    ) {
        this._period.set(period);
        return this.poll(delay);
    }

    public poll(delay: number = 3 * MINUTES) {
        const poll_delay = Math.max(delay, 3 * MINUTES);
        this._poll.set(Date.now());
        this.interval('polling', () => this._poll.set(Date.now()), poll_delay);
        return () => this.stopPolling();
    }

    public stopPolling() {
        this._poll.set(0);
        this.clearInterval('polling');
    }

    public async newBooking(event?: CalendarEvent) {
        const ref = this._dialog.open(EventBookModalComponent, {
            data: { event },
        });
        const details = await Promise.race([
            new Promise((resolve) => {
                const subscription = ref.componentInstance.event.subscribe(
                    (details) => {
                        if (details?.reason !== 'done') return;
                        subscription.unsubscribe();
                        resolve(details);
                    },
                );
            }),
            nextValueFrom(ref.afterClosed()),
        ]);
        if ((details as any)?.reason !== 'done') return;
        this.replace((details as any).metadata);
    }

    public async removeBooking(event: CalendarEvent, series = false) {
        const time = `${format(event.date, 'dd MMM yyyy ' + this.time_format)}`;
        const resource_name = event.space?.display_name || event.location;
        const details = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.BOOKING_REMOVE_TITLE'),
                content: i18n('APP.CONCIERGE.BOOKING_REMOVE_MSG', {
                    name: resource_name,
                    time,
                }),

                icon: { class: 'material-symbols-rounded', content: 'delete' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return false;
        details.loading(i18n('APP.CONCIERGE.BOOKING_REMOVE_LOADING'));
        this.remove(event);
        await declineEvent(
            series ? event.recurring_event_id || event.id : event.id,
            {
                calendar: event.calendar || event.mailbox || event.host,
                system_id: event.system?.id,
            },
        ).catch((e) => {
            this.restore(event);
            notifyError(
                i18n('APP.CONCIERGE.BOOKING_REMOVE_ERROR', { error: e }),
            );
            details.close();
            throw e;
        });
        notifySuccess(i18n('APP.CONCIERGE.BOOKING_REMOVE_SUCCESS'));
        this._dialog.closeAll();
        return true;
    }

    /**
     * Update booking in the bookings list
     * @param booking
     */
    public replace(booking: CalendarEvent) {
        this._removed_events.update((list) => [...list, booking]);
        this._added_events.update((list) => [
            ...list.filter(
                (_) =>
                    !(
                        (_.id && booking.id && _.id === booking.id) ||
                        (_.ical_uid &&
                            booking.ical_uid &&
                            _.ical_uid === booking.ical_uid)
                    ),
            ),
            booking,
        ]);
    }

    /**
     * Remove booking in the bookings list
     * @param booking
     */
    public remove(booking: CalendarEvent) {
        this._removed_events.update((list) => [...list, booking]);
    }

    /**
     * Restore a booking that was optimistically removed
     * @param booking
     */
    public restore(booking: CalendarEvent) {
        this._removed_events.update((list) =>
            list.filter(
                (_) =>
                    !(
                        (_.id && booking.id && _.id === booking.id) ||
                        (_.ical_uid &&
                            booking.ical_uid &&
                            _.ical_uid === booking.ical_uid)
                    ),
            ),
        );
    }

    private filterEvents(
        events: CalendarEvent[],
        start: Date,
        end: Date,
        filters: BookingFilters,
        zones: string[] = [],
        options: BookingUIOptions = {},
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
            const show_setup_breakdown =
                options.show_overflow || !bkn.is_system_event;
            return (
                intersects &&
                has_space &&
                in_zones &&
                show &&
                show_setup_breakdown
            );
        });
    }

    private _clean_zone_ids(zones: string[] = []) {
        return (zones || []).filter((zone_id) => !!zone_id);
    }

    private _active_zone_ids(zones: string[] = []) {
        const zone_ids = this._clean_zone_ids(zones);
        if (zone_ids.length && zone_ids[0] !== this._org.region?.id) {
            return zone_ids;
        }
        const default_zones = this._settings.get('app.use_region')
            ? this._org.buildingsForRegion(this._org.region).map((_) => _.id)
            : [this._org.building?.id];
        return this._clean_zone_ids(default_zones);
    }
}
