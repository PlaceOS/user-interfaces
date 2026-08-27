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
import { showMetadata } from '@placeos/ts-client';
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

const DAYS_OF_WEEK = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thurday: 4,
    friday: 5,
    saturday: 6,
};

const DAYS_OF_WEEK_INDEX = {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thurday',
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
    /** Token used to discard responses from superseded booking loads */
    private _load_token = 0;

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

    /** List of bookable spaces for the active zones */
    private readonly _spaces = resource({
        params: () => this._options().zones || [],
        loader: async ({ params }) => {
            const use_region = this._settings.get('app.use_region');
            let zones = params;
            if (!zones?.length) {
                zones = [
                    (use_region
                        ? this._org.building?.parent_id
                        : this._org.building?.id) || this._org.building?.id,
                ];
            }
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
            const type = this._options().type;
            const spaces = this._spaces.value();
            return (type === 'events' || type === 'catering') && !spaces
                ? undefined
                : {
                      type,
                      zones: this._options().zones || [],
                      spaces: spaces || [],
                  };
        },
        defaultValue: {} as HashMap<number>,
        loader: async ({ params }) => {
            let zones = (params.zones || []).filter(
                (z: any) => z !== -1 && z !== 'All',
            );
            if (!zones.length) {
                zones = this._settings.get('app.use_region')
                    ? this._org.levelsForRegion().map((_) => _.id)
                    : this._org.levelsForBuilding().map((_) => _.id);
            }
            let list: [string, number][] = [];
            if (params.type === 'events' || params.type === 'catering') {
                list = zones.map((z) => [
                    z,
                    params.spaces.filter((s) => s.zones.includes(z)).length,
                ]);
            } else if (params.type === 'parking') {
                const scope_id = this._settings.get('app.use_region')
                    ? this._org.region?.id
                    : this._org.building?.id;
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
            } else if (zones.length) {
                list = await Promise.all(
                    zones.map((z) =>
                        this._resourceCountForZone(z, params.type),
                    ),
                );
            }
            const map: HashMap<number> = {};
            list.forEach(([id, count]) => (map[id] = count));
            return map;
        },
    });
    public readonly counts: Signal<HashMap<number>> = this._counts.value;

    private async _resourceCountForZone(
        zone_id: string,
        resource_type: ReportOptions['type'],
    ): Promise<[string, number]> {
        switch (resource_type) {
            case 'lockers': {
                const parent_id = this._org.levels.find(
                    (level) => level.id === zone_id,
                )?.parent_id;
                if (!parent_id) return [zone_id, 0];
                const banks = await queryLockerBankAssetsForZones([
                    parent_id,
                ]).catch(() => []);
                const lockers = await queryLockerAssetsForZones([
                    parent_id,
                ]).catch(() => []);
                const bank_ids = banks
                    .filter((bank) => bank.zones?.includes(zone_id))
                    .map((bank) => bank.id);
                const count = lockers.filter(
                    (locker) =>
                        locker.bookable !== false &&
                        bank_ids.includes((locker as any).parent_id),
                ).length;
                return [zone_id, count];
            }
            case 'desks': {
                const metadata = await showMetadata(zone_id, 'desks').catch(
                    () => ({ details: [] }) as any,
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
        let count = 1;
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

    public generateReport() {
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
        const token = ++this._load_token;
        let list: (CalendarEvent | Booking)[] = [];
        try {
            switch (options.type) {
                case 'desks':
                    list = await queryAllBookings({
                        ...bookings_query,
                        zones,
                        type: 'desk',
                        limit: 200,
                    });
                    break;
                case 'parking':
                    list = await queryAllBookings({
                        ...bookings_query,
                        zones,
                        type: 'parking',
                        limit: 200,
                    });
                    break;
                case 'lockers':
                    list = await queryAllBookings({
                        ...bookings_query,
                        zones,
                        type: 'locker',
                        limit: 200,
                    });
                    break;
                case 'assets':
                    list = await queryAllBookings({
                        ...bookings_query,
                        zones,
                        type: 'asset-request',
                        limit: 200,
                    });
                    break;
                case 'catering':
                    list = await queryAllBookings({
                        ...bookings_query,
                        zones,
                        type: 'catering-order',
                        limit: 200,
                    });
                    break;
                case 'events':
                    list = await queryAllEvents({
                        ...query,
                        zone_ids: zones,
                        include_cancelled: true,
                        limit: 200,
                    }).catch(() => []);
                    break;
                default:
                    list = [];
            }
        } catch (_) {
            list = [];
        }
        // Discard the response if the options changed before it completed
        if (token !== this._load_token) return;
        this._loading.set('');
        if (!list?.length) {
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
        if (
            options.start?.valueOf() === current.start?.valueOf() ||
            options.end?.valueOf() === current.end?.valueOf()
        )
            return;
        // Clear stale bookings and cancel any in-flight load
        this._active_bookings.set([]);
        this._load_token++;
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
