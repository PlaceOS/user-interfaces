import { formatDate } from '@angular/common';
import {
    computed,
    inject,
    Injectable,
    resource,
    Signal,
    signal,
    untracked,
} from '@angular/core';
import {
    queryDeskAssets,
    queryLockerAssetsForZones,
    queryLockerBankAssetsForZones,
    queryParkingSpacesForZones,
} from '@placeos/assets';
import { queryAllBookings } from '@placeos/bookings';
import {
    AsyncHandler,
    BookableHoursRange,
    Booking,
    CalendarEvent,
    downloadFile,
    flatten,
    getTimezoneDifferenceInHours,
    HashMap,
    i18n,
    jsonToCsv,
    nextValueFrom,
    notifyError,
    OrganisationService,
    SettingsService,
    timePeriodsIntersect,
    unique,
} from '@placeos/common';
import {
    queryAllEvents,
    requestSpacesForZone,
    SpacePipe,
} from '@placeos/events';
import { PlaceAsset, showMetadata } from '@placeos/ts-client';
import {
    addDays,
    addMinutes,
    endOfDay,
    format,
    getUnixTime,
    isBefore,
    setDay,
    startOfDay,
} from 'date-fns';
import {
    activeReportBookings,
    activeReportEvents,
    generateReportForBookings,
    generateReportForDeskBookings,
    isDeclinedReportEvent,
    reportBookableMinutes,
    reportBookedTimeUtilisationPercent,
    reportBookingStatusStats,
    reportEventStatusStats,
} from './reports.utilities';

export interface ReportOptions {
    type?: 'desks' | 'events' | 'parking' | 'lockers' | 'assets' | 'catering';
    start?: number | Date;
    end?: number | Date;
    zones?: string[];
}

const DAYS_OF_WEEK_INDEX = {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
};

export const REMOVE_KEYS = [
    'zones',
    'server_names',
    'extension_data',
    'event_start',
    'event_end',
    'booking_start',
    'booking_end',
    'system',
    'old_system',
    'date',
    'date_end',
    '_valid_asset_cache',
    '_valid_cache_expiry',
];

@Injectable({
    providedIn: 'root',
})
export class ReportsStateService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    private _space_pipe: SpacePipe = new SpacePipe(this._org);
    private _loading = signal<string>('');
    private _active_bookings = signal<(CalendarEvent | Booking)[]>([]);
    /** Aborts the page chain of a superseded booking load */
    private _load_controller?: AbortController;

    private _options = signal<ReportOptions>({
        start: new Date(),
        end: new Date(),
        zones: [],
    });

    private get _ignore_days() {
        const day_list = this._settings.get('app.reports.ignore_days') || [];
        return day_list
            ?.map((_) =>
                typeof _ === 'string'
                    ? _?.toLowerCase()
                    : format(setDay(new Date(), _), 'eeee')?.toLowerCase(),
            )
            .filter((_) => !!_);
    }

    private get _event_bookable_hours(): BookableHoursRange | null {
        return (
            this._settings.get('app.events.bookable_hours') ||
            this._settings.get('app.bookings.bookable_hours') ||
            null
        );
    }

    private get _event_bookable_minutes() {
        return reportBookableMinutes(this._event_bookable_hours);
    }

    public readonly loading = this._loading.asReadonly();

    public readonly options = this._options.asReadonly();

    public readonly bookings = this._active_bookings.asReadonly();

    /** Changes on each Generate Report, so the inventory loads again */
    private readonly _inventory_version = signal(0);
    public readonly inventory_version = this._inventory_version.asReadonly();
    /** In-flight inventory requests, shared by loads that run together */
    private readonly _inventory_requests = new Map<
        string,
        Promise<PlaceAsset[]>
    >();

    /**
     * Values that select the report inventory. Equal values keep the same
     * object, so date changes do not load the inventory again. Building,
     * region, level and setting changes do.
     */
    private readonly _inventory = computed(
        () => {
            const { type, zones = [] } = this._options();
            const use_region = !!this._settings.get('app.use_region');
            const building = this._org.active_building();
            const region = this._org.active_region();
            const selected = zones.filter(
                (z: unknown) => z !== -1 && z !== 'All',
            );
            const levels = selected.length
                ? selected
                : (use_region
                      ? this._org.levelsForRegion(region)
                      : this._org.levelsForBuilding(building)
                  ).map((_) => _.id);
            return {
                type,
                zones,
                levels,
                scope_id: use_region ? region?.id : building?.id,
                space_scope_id:
                    (use_region ? building?.parent_id : building?.id) ||
                    building?.id,
                use_assets: !!this._settings.get('app.desks.use_assets'),
                version: this._inventory_version(),
            };
        },
        { equal: (a, b) => JSON.stringify(a) === JSON.stringify(b) },
    );

    /** List of bookable spaces for the active zones */
    private readonly _spaces = resource({
        params: () => {
            const { zones, space_scope_id, version } = this._inventory();
            return { zones, space_scope_id, version };
        },
        loader: async ({ params }) => {
            const zones = params.zones.length
                ? params.zones
                : [params.space_scope_id];
            const lists = await Promise.all(
                zones.map((id) =>
                    nextValueFrom(requestSpacesForZone(id)).catch(() => []),
                ),
            );
            return flatten(lists);
        },
    });
    public readonly spaces = computed<any[]>(() => this._spaces.value() ?? []);

    /** Total bookable resource counts per zone for the active filters */
    private readonly _counts = resource({
        params: () => {
            const inventory = this._inventory();
            // Only room counts use spaces, so other types skip their reloads
            if (inventory.type !== 'events' && inventory.type !== 'catering') {
                return { ...inventory, spaces: [] };
            }
            const spaces = this._spaces.value();
            return spaces ? { ...inventory, spaces } : undefined;
        },
        defaultValue: {} as HashMap<number>,
        loader: async ({ params }) => {
            const { type, levels: zones, scope_id } = params;
            let list: [string, number][] = [];
            if (type === 'events' || type === 'catering') {
                list = zones.map((z) => [
                    z,
                    params.spaces.filter((s) => s.zones.includes(z)).length,
                ]);
            } else if (type === 'parking') {
                if (scope_id) {
                    const spaces = await queryParkingSpacesForZones([
                        scope_id,
                    ]).catch(() => []);
                    list = zones.map((z) => [
                        z,
                        spaces.filter((space) => space.zones?.includes(z))
                            .length,
                    ]);
                }
            } else if (type === 'lockers') {
                list = await this._lockerCounts(zones);
            } else if (zones.length) {
                list = await Promise.all(
                    zones.map((z) =>
                        this._resourceCountForZone(z, type, params.use_assets),
                    ),
                );
            }
            const map: HashMap<number> = {};
            list.forEach(([id, count]) => (map[id] = count));
            return map;
        },
    });
    public readonly counts: Signal<HashMap<number>> = this._counts.value;

    /**
     * Load locker assets for a zone. Calls that run at the same time share
     * one request. The result is not kept, so later loads get fresh data.
     */
    public queryLockers(zone_id: string) {
        return this._sharedInventory(`lockers:${zone_id}`, () =>
            queryLockerAssetsForZones([zone_id]),
        );
    }

    private _sharedInventory(
        key: string,
        load: () => Promise<PlaceAsset[]>,
    ): Promise<PlaceAsset[]> {
        let request = this._inventory_requests.get(key);
        if (!request) {
            request = load().finally(() =>
                this._inventory_requests.delete(key),
            );
            this._inventory_requests.set(key, request);
        }
        return request;
    }

    /**
     * Count bookable lockers in the banks on each level. Loads the
     * inventory once for each building, not once for each level.
     */
    private async _lockerCounts(
        zone_ids: string[],
    ): Promise<[string, number][]> {
        const parent_ids = new Map<string, string>();
        for (const level of this._org.levels) {
            if (level.parent_id) parent_ids.set(level.id, level.parent_id);
        }
        const buildings = unique(
            zone_ids.map((id) => parent_ids.get(id)).filter((id) => !!id),
        );
        const inventories = new Map(
            await Promise.all(
                buildings.map(
                    async (id) =>
                        [
                            id,
                            await Promise.all([
                                this._sharedInventory(`banks:${id}`, () =>
                                    queryLockerBankAssetsForZones([id]),
                                ).catch(() => [] as PlaceAsset[]),
                                this.queryLockers(id).catch(
                                    () => [] as PlaceAsset[],
                                ),
                            ]),
                        ] as const,
                ),
            ),
        );
        return zone_ids.map((zone_id) => {
            const [banks, lockers] = inventories.get(
                parent_ids.get(zone_id),
            ) || [[], []];
            const bank_ids = new Set(
                banks
                    .filter((bank) => bank.zones?.includes(zone_id))
                    .map((bank) => bank.id),
            );
            const count = lockers.filter(
                (locker) =>
                    locker.bookable !== false && bank_ids.has(locker.parent_id),
            ).length;
            return [zone_id, count];
        });
    }

    private async _resourceCountForZone(
        zone_id: string,
        resource_type: ReportOptions['type'],
        use_assets: boolean,
    ): Promise<[string, number]> {
        switch (resource_type) {
            case 'desks': {
                if (use_assets) {
                    const desks = await queryDeskAssets(zone_id).catch(
                        () => [],
                    );
                    return [zone_id, desks.length];
                }
                const metadata = await showMetadata(zone_id, 'desks').catch(
                    () => ({ details: [] }),
                );
                return [zone_id, metadata.details.length];
            }
            default:
                return [zone_id, 0];
        }
    }

    /** Aggregated statistics for the active bookings and resource counts */
    private readonly _stats = resource({
        params: () => ({
            counts: this._counts.value(),
            list: this._active_bookings(),
        }),
        defaultValue: {} as HashMap,
        loader: async ({ params }) => {
            const { counts, list } = params;
            if (list[0] instanceof CalendarEvent) {
                const events = (list as CalendarEvent[]) || [];
                return {
                    ...generateReportForBookings(
                        activeReportEvents(events),
                        (this.duration * this._event_bookable_minutes) / 60,
                        this._event_bookable_minutes,
                        counts,
                    ),
                    ...reportEventStatusStats(events),
                    all_events: events,
                } as HashMap;
            }
            const bookings = (list as Booking[]) || [];
            return {
                ...generateReportForDeskBookings(
                    activeReportBookings(bookings),
                    this.duration,
                    counts,
                ),
                ...reportBookingStatusStats(bookings),
                all_events: bookings,
            } as HashMap;
        },
    });
    public readonly stats: Signal<HashMap> = this._stats.value;

    public readonly day_list = computed(() => {
        const options = this._options();
        const stats = this.stats();
        const { start } = options;
        let date = startOfDay(start);
        const end = endOfDay(options.end || date);
        const dates = [];
        while (isBefore(date, end)) {
            if (this._ignore_days.includes(DAYS_OF_WEEK_INDEX[date.getDay()])) {
                date = addDays(date, 1);
                continue;
            }
            const s = startOfDay(date).valueOf();
            const e = endOfDay(s).valueOf();
            const all_events: (Booking | CalendarEvent)[] =
                stats.all_events?.filter((bkn) =>
                    timePeriodsIntersect(
                        s,
                        e,
                        bkn.date,
                        bkn.date + bkn.duration * 60 * 1000,
                    ),
                ) || [];
            const events: (Booking | CalendarEvent)[] =
                stats.events?.filter((bkn) =>
                    timePeriodsIntersect(
                        s,
                        e,
                        bkn.date,
                        bkn.date + bkn.duration * 60 * 1000,
                    ),
                ) || [];
            const usage =
                options.type === 'events'
                    ? unique(events, 'system_id').length
                    : unique(events, 'asset_id').length;
            dates.push({
                date: s,
                total: stats.total,
                usage,
                free: stats.total - events.length,
                approved: events.reduce(
                    (c, e) =>
                        c +
                        ((e as Booking).approved || e.status === 'approved'
                            ? 1
                            : 0),
                    0,
                ),
                cancelled: all_events.filter(
                    (event) =>
                        !event.deleted &&
                        isDeclinedReportEvent(event as CalendarEvent),
                ).length,
                deleted: all_events.filter((event) => event.deleted).length,
                count: all_events.length,
                utilisation: reportBookedTimeUtilisationPercent(
                    events as CalendarEvent[],
                    stats.total,
                    this._event_bookable_minutes,
                ).toFixed(1),
            });
            date = addDays(date, 1);
        }
        return dates;
    });

    public get duration() {
        const opts = this._options();
        let start = startOfDay(opts.start);
        const end = endOfDay(opts.end).valueOf();
        let count = 0;
        while (start.valueOf() < end) {
            if (
                !this._ignore_days.includes(DAYS_OF_WEEK_INDEX[start.getDay()])
            ) {
                count++;
            }
            start = addDays(start, 1);
        }
        return Math.max(1, count);
    }

    constructor() {
        super();
    }

    /** Load the bookings and the inventory again for the active options */
    public generateReport() {
        this._inventory_version.update((v) => v + 1);
        this.timeout('generate-report', () => this._loadBookings(), 500);
    }

    /** Load the bookings for the active report options */
    private async _loadBookings() {
        const options = this._options();
        this._loading.set(i18n('APP.CONCIERGE.REPORTS_LOADING'));
        if (!options?.type && !options?.zones?.length) {
            this._loading.set('');
            this._active_bookings.set([]);
            return;
        }
        let start = startOfDay(options.start || Date.now());
        let end = endOfDay(options.end || start);
        if (
            options.type === 'parking' &&
            (this._settings.get('app.bookings.use_building_timezone') ||
                this._settings.get('app.parking.use_building_timezone')) &&
            this._org.building?.timezone
        ) {
            const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const offset = getTimezoneDifferenceInHours(
                current_tz,
                this._org.building.timezone,
            );
            start = addMinutes(start, offset * 60);
            end = addMinutes(end, offset * 60);
        }
        let zones = options?.zones
            ? options.zones.filter((z) => z !== 'All').join(',')
            : '';
        if (!zones) {
            zones = this._settings.get('app.use_region')
                ? this._org.region.id
                : this._org.building.id;
        }
        const query = {
            period_start: getUnixTime(start),
            period_end: getUnixTime(end),
        };
        const bookings_query = {
            ...query,
            include_deleted: true,
            include_checked_out: true,
        };
        this._load_controller?.abort();
        const controller = new AbortController();
        this._load_controller = controller;
        const { signal } = controller;
        let list: (CalendarEvent | Booking)[] = [];
        let failed = false;
        try {
            switch (options.type) {
                case 'desks':
                    list = await queryAllBookings(
                        {
                            ...bookings_query,
                            zones,
                            type: 'desk',
                            limit: 200,
                        },
                        { signal },
                    );
                    break;
                case 'parking':
                    list = await queryAllBookings(
                        {
                            ...bookings_query,
                            zones,
                            type: 'parking',
                            limit: 200,
                        },
                        { signal },
                    );
                    break;
                case 'lockers':
                    list = await queryAllBookings(
                        {
                            ...bookings_query,
                            zones,
                            type: 'locker',
                            limit: 200,
                        },
                        { signal },
                    );
                    break;
                case 'assets':
                    list = await queryAllBookings(
                        {
                            ...bookings_query,
                            zones,
                            type: 'asset-request',
                            limit: 200,
                        },
                        { signal },
                    );
                    break;
                case 'catering':
                    list = await queryAllBookings(
                        {
                            ...bookings_query,
                            zones,
                            type: 'catering-order',
                            limit: 200,
                        },
                        { signal },
                    );
                    break;
                case 'events':
                    list = await queryAllEvents(
                        {
                            ...query,
                            zone_ids: zones,
                            include_cancelled: true,
                            limit: 200,
                        },
                        { signal },
                    );
                    break;
                default:
                    list = [];
            }
        } catch (_) {
            list = [];
            failed = true;
        }
        // Discard the response if the options changed before it completed
        if (signal.aborted) return;
        this._loading.set('');
        if (failed) {
            notifyError(i18n('COMMON.LOAD_ERROR'), i18n('COMMON.RETRY'), () =>
                this.generateReport(),
            );
        } else if (!list?.length) {
            notifyError('No bookings for the selected levels and period');
        }
        list = list.filter((bkn) => {
            return !this._ignore_days.includes(
                DAYS_OF_WEEK_INDEX[new Date(bkn.date).getDay()],
            );
        });
        this._active_bookings.set(list || []);
    }

    public setOptions(options: ReportOptions) {
        // Read the current value untracked so callers invoking setOptions from
        // a reactive context (e.g. an effect) do not create a dependency on
        // `_options` — which, combined with the write below, would loop.
        const current = untracked(this._options);
        if (options.zones?.includes('All')) {
            options.zones = [
                'All',
                ...this._org
                    .levelsForBuilding(this._org.building)
                    .map((lvl) => lvl.id),
            ];
        } else if (options.zones && current.zones?.includes('All')) {
            options.zones = [];
        }
        // Skip only when every given option equals its current value.
        const value = (v: unknown) =>
            v instanceof Array ? v.join() : v instanceof Date ? v.valueOf() : v;
        const unchanged = Object.entries(options).every(
            ([key, v]) =>
                value(v) === value(current[key as keyof ReportOptions]),
        );
        if (unchanged) return;
        // Clear stale bookings and cancel any in-flight load. The cancelled
        // load exits early, so clear its loading state here.
        this._active_bookings.set([]);
        this._load_controller?.abort();
        this._loading.set('');
        this._options.set({ ...current, ...options });
    }

    public downloadReport() {
        const options = this._options();
        const bookings: HashMap[] = this._active_bookings();
        downloadFile(
            `report+${options.type}+${format(
                options.start,
                'yyyy-MM-dd',
            )}+${format(options.end, 'yyyy-MM-dd')}.csv`,
            jsonToCsv(
                bookings.map((bkn) => {
                    const details = bkn.toJSON();
                    details.start = formatDate(
                        (details.event_start || details.booking_start) * 1000,
                        'MMM d, y, h:mm a',
                        'en',
                    );
                    details.end = formatDate(
                        (details.event_end || details.booking_end) * 1000,
                        'MMM d, y, h:mm a',
                        'en',
                    );
                    // Always set so the column exists even when the first
                    // booking was never checked in
                    details.checked_in_time = details.checked_in_at
                        ? formatDate(
                              details.checked_in_at * 1000,
                              'MMM d, y, h:mm a',
                              'en',
                          )
                        : '';
                    delete details.checked_in_at;
                    for (const key of REMOVE_KEYS) delete details[key];
                    return details;
                }),
            ),
        );
    }
}
