import { formatDate } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import {
    queryLockerAssetsForZones,
    queryLockerBankAssetsForZones,
    queryParkingSpacesForZones,
} from '@placeos/assets';
import { queryAllBookings } from '@placeos/bookings';
import {
    BookableHoursRange,
    Booking,
    CalendarEvent,
    downloadFile,
    flatten,
    HashMap,
    i18n,
    jsonToCsv,
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
    endOfDay,
    format,
    getUnixTime,
    isBefore,
    setDay,
    startOfDay,
} from 'date-fns';
import {
    BehaviorSubject,
    combineLatest,
    forkJoin,
    Observable,
    of,
    Subject,
} from 'rxjs';
import {
    catchError,
    debounceTime,
    finalize,
    map,
    shareReplay,
    skip,
    switchMap,
    takeUntil,
} from 'rxjs/operators';
import {
    activeReportBookings,
    activeReportEvents,
    generateReportForBookings,
    generateReportForDeskBookings,
    reportBookedTimeUtilisationPercent,
    isDeclinedReportEvent,
    reportBookableMinutes,
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
export class ReportsStateService {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    private _space_pipe: SpacePipe = new SpacePipe(this._org);
    private _generate = new Subject<number>();
    private _loading = new BehaviorSubject<string>('');
    private _active_bookings = new BehaviorSubject<(CalendarEvent | Booking)[]>(
        [],
    );

    private _options = new BehaviorSubject<ReportOptions>({
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

    private _bookings_list = this._generate.pipe(
        debounceTime(500),
        switchMap((_) => {
            const options = this._options.getValue();
            this._loading.next(i18n('APP.CONCIERGE.REPORTS_LOADING'));
            if (!options?.type && !options?.zones?.length) return of([]);
            const start = startOfDay(options.start || Date.now());
            const end = endOfDay(options.end || start);
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
                include_deleted: true as any,
                include_checked_out: true,
            };
            let request$: Observable<(CalendarEvent | Booking)[]>;
            switch (options.type) {
                case 'desks':
                    request$ = queryAllBookings({
                        ...bookings_query,
                        zones: zones,
                        type: 'desk',
                        limit: 1000,
                    });
                    break;
                case 'parking':
                    request$ = queryAllBookings({
                        ...bookings_query,
                        zones: zones,
                        type: 'parking',
                        limit: 1000,
                    });
                    break;
                case 'lockers':
                    request$ = queryAllBookings({
                        ...bookings_query,
                        zones: zones,
                        type: 'locker',
                        limit: 1000,
                    });
                    break;
                case 'assets':
                    request$ = queryAllBookings({
                        ...bookings_query,
                        zones: zones,
                        type: 'asset-request',
                        limit: 1000,
                    });
                    break;
                case 'catering':
                    request$ = queryAllBookings({
                        ...bookings_query,
                        zones: zones,
                        type: 'catering-order',
                        limit: 1000,
                    });
                    break;
                case 'events':
                    request$ = queryAllEvents({
                        ...query,
                        zone_ids: zones,
                        include_cancelled: true,
                        limit: 1000,
                    }).pipe(catchError((_) => of([])));
                    break;
                default:
                    request$ = of([]);
            }
            // Cancel request if options change before it completes
            return request$.pipe(
                takeUntil(this._options.pipe(skip(1))),
                finalize(() => this._loading.next('')),
            );
        }),
        map((list) => {
            if (!list?.length) {
                notifyError('No bookings for the selected levels and period');
            }
            list = list.filter((bkn) => {
                return !this._ignore_days.includes(
                    DAYS_OF_WEEK_INDEX[new Date(bkn.date).getDay()],
                );
            });
            this._active_bookings.next(list || []);
            return list;
        }),
        shareReplay(1),
    );

    public readonly loading = this._loading.asObservable();

    public readonly options = this._options.asObservable();

    public readonly bookings = this._active_bookings.asObservable();

    public readonly spaces = this._options.pipe(
        switchMap(({ zones }) => {
            const use_region = this._settings.get('app.use_region');
            if (!zones?.length) {
                zones = [
                    (use_region
                        ? this._org.building?.parent_id
                        : this._org.building?.id) || this._org.building?.id,
                ];
            }
            return forkJoin(
                zones.map((id) =>
                    requestSpacesForZone(id).pipe(catchError(() => of([]))),
                ),
            );
        }),
        map((l) => flatten(l)),
        shareReplay(1),
    );

    public readonly counts = this._options.pipe(
        debounceTime(500),
        switchMap((filters) => {
            let zones = (filters.zones || []).filter(
                (z: any) => z !== -1 && z !== 'All',
            );
            if (!zones.length) {
                zones = this._settings.get('app.use_region')
                    ? this._org.levelsForRegion().map((_) => _.id)
                    : this._org.levelsForBuilding().map((_) => _.id);
            }
            if (filters.type === 'events' || filters.type === 'catering') {
                return this.spaces.pipe(
                    map((_) =>
                        zones.map((z) => [
                            z,
                            _.filter((s) => s.zones.includes(z)).length,
                        ]),
                    ),
                );
            }
            if (filters.type === 'parking') {
                const scope_id = this._settings.get('app.use_region')
                    ? this._org.region?.id
                    : this._org.building?.id;
                if (!scope_id) return of([]);
                return queryParkingSpacesForZones([scope_id]).pipe(
                    map((spaces) =>
                        zones.map((z) => [
                            z,
                            spaces.filter((space) => space.zones?.includes(z))
                                .length,
                        ]),
                    ),
                    catchError(() => of([])),
                );
            }
            if (!zones.length) return of([]);
            return forkJoin(
                zones.map((z) => this._resourceCountForZone(z, filters.type)),
            );
        }),
        map((list: [string, number][]) => {
            const map: HashMap<number> = {};
            this._active_bookings.next([]);
            list.forEach(([id, count]) => (map[id] = count));
            return map;
        }),
        shareReplay(1),
    );

    private _resourceCountForZone(
        zone_id: string,
        resource_type: ReportOptions['type'],
    ): Observable<[string, number]> {
        switch (resource_type) {
            case 'lockers':
                const parent_id = this._org.levels.find(
                    (level) => level.id === zone_id,
                )?.parent_id;
                if (!parent_id) {
                    return of([zone_id, 0]);
                }
                return forkJoin([
                    queryLockerBankAssetsForZones([parent_id]).pipe(
                        catchError(() => of([])),
                    ),
                    queryLockerAssetsForZones([parent_id]).pipe(
                        catchError(() => of([])),
                    ),
                ]).pipe(
                    map(([banks, lockers]) => {
                        const bank_ids = banks
                            .filter((bank) => bank.zones?.includes(zone_id))
                            .map((bank) => bank.id);
                        const count = lockers.filter(
                            (locker) =>
                                locker.bookable !== false &&
                                bank_ids.includes((locker as any).parent_id),
                        ).length;
                        return [zone_id, count] as [string, number];
                    }),
                    catchError(() => of([zone_id, 0] as [string, number])),
                );
            case 'desks':
                return showMetadata(zone_id, 'desks').pipe(
                    catchError(() => of({ details: [] })),
                    map(
                        (metadata) =>
                            [zone_id, metadata.details.length] as [
                                string,
                                number,
                            ],
                    ),
                );
            default:
                return of([zone_id, 0]);
        }
    }

    public readonly stats: Observable<HashMap> = combineLatest([
        this.counts,
        this.bookings,
    ]).pipe(
        debounceTime(300),
        switchMap(async ([counts, list]) => {
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
                };
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
            };
        }),
        shareReplay(1),
    );

    public readonly day_list = combineLatest([this.options, this.stats]).pipe(
        map(([options, stats]) => {
            const { start } = options;
            let date = startOfDay(start);
            const end = endOfDay(options.end || date);
            const dates = [];
            while (isBefore(date, end)) {
                if (
                    this._ignore_days.includes(
                        DAYS_OF_WEEK_INDEX[date.getDay()],
                    )
                ) {
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
        }),
        shareReplay(1),
    );

    public get duration() {
        const opts = this._options.getValue();
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
        this._bookings_list.subscribe((_) => _);
    }

    public generateReport() {
        this._generate.next(new Date().valueOf());
    }

    public setOptions(options: ReportOptions) {
        if (options.zones?.includes('All')) {
            options.zones = [
                'All',
                ...this._org
                    .levelsForBuilding(this._org.building)
                    .map((lvl) => lvl.id),
            ];
        } else if (
            options.zones &&
            this._options.getValue()?.zones?.includes('All')
        ) {
            options.zones = [];
        }
        if (
            options.start?.valueOf() ===
                this._options.getValue().start?.valueOf() ||
            options.end?.valueOf() === this._options.getValue().end?.valueOf()
        )
            return;
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public downloadReport() {
        const options = this._options.getValue();
        const bookings: HashMap[] = this._active_bookings.getValue();
        downloadFile(
            `report+${options.type}+${format(
                options.start,
                'yyyy-MM-dd',
            )}+${format(options.end, 'yyyy-MM-dd')}.tsv`,
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
                    for (const key of REMOVE_KEYS) delete details[key];
                    return details;
                }),
                '\t',
            ),
        );
    }
}
