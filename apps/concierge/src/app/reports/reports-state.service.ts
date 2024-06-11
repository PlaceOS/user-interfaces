import { Injectable } from '@angular/core';
import { showMetadata } from '@placeos/ts-client';
import { Booking, queryAllBookings } from '@placeos/bookings';
import {
    downloadFile,
    flatten,
    HashMap,
    jsonToCsv,
    notifyError,
    SettingsService,
    timePeriodsIntersect,
    unique,
} from '@placeos/common';
import { CalendarEvent, queryAllEvents } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
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
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';
import {
    generateReportForBookings,
    generateReportForDeskBookings,
} from './reports.utilities';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
import { requestSpacesForZone } from '@placeos/spaces';

export interface ReportOptions {
    type?: 'desks' | 'events';
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

@Injectable({
    providedIn: 'root',
})
export class ReportsStateService {
    private _space_pipe: SpacePipe = new SpacePipe(this._org);
    private _generate = new Subject<number>();
    private _loading = new BehaviorSubject<string>('');
    private _active_bookings = new BehaviorSubject<(CalendarEvent | Booking)[]>(
        []
    );

    private _options = new BehaviorSubject<ReportOptions>({
        start: new Date(),
        end: new Date(),
    });

    private _bookings_list = this._generate.pipe(
        debounceTime(500),
        switchMap((_) => {
            const options = this._options.getValue();
            this._loading.next('Loading report details...');
            if (!options?.type && !options?.zones?.length) return of([]);
            const start = startOfDay(options.start || Date.now());
            const end = endOfDay(options.end || start);
            const zones = options?.zones
                ? options.zones.filter((z) => z !== 'All').join(',')
                : '';
            const query = {
                period_start: getUnixTime(start),
                period_end: getUnixTime(end),
            };
            return options.type === 'desks'
                ? queryAllBookings({
                      ...query,
                      zones: zones,
                      type: 'desk',
                      limit: 1000,
                  })
                : queryAllEvents({
                      ...query,
                      zone_ids: zones,
                      limit: 1000,
                  }).pipe(
                      switchMap(async (l) =>
                          Promise.all(
                              l.map(
                                  async (_: CalendarEvent) =>
                                      new CalendarEvent({
                                          ..._,
                                          resources: (
                                              await Promise.all(
                                                  _.resources.map((r) =>
                                                      this._space_pipe.transform(
                                                          r.id || r.email
                                                      )
                                                  )
                                              )
                                          ).filter((s) =>
                                              options.zones.find((z) =>
                                                  s.zones.includes(z)
                                              )
                                          ),
                                      } as any)
                              )
                          )
                      )
                  );
        }),
        catchError((_) => []),
        map((list) => {
            this._loading.next('');
            if (!list?.length) {
                notifyError('No bookings for the selected levels and period');
            }
            const ignore_days =
                this._settings
                    .get('app.reports.ignore_days')
                    ?.map((_) =>
                        typeof _ === 'string'
                            ? _.toLowerCase()
                            : format(
                                  setDay(new Date(), _),
                                  'eeee'
                              ).toLowerCase()
                    ) || [];
            list = list.filter(
                (bkn) =>
                    !ignore_days.includes(
                        DAYS_OF_WEEK_INDEX[new Date(bkn.date).getDay()]
                    )
            );
            this._active_bookings.next(list || []);
            return list;
        }),
        shareReplay(1)
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
                    requestSpacesForZone(id).pipe(catchError(() => of([])))
                )
            );
        }),
        map((l) => flatten(l)),
        shareReplay(1)
    );

    public readonly counts = this._options.pipe(
        debounceTime(500),
        switchMap((filters) => {
            const zones = (filters.zones || []).filter(
                (z: any) => z !== -1 && z !== 'All'
            );
            if (filters.type === 'events') {
                return this.spaces.pipe(
                    map((_) =>
                        zones.map((z) => [
                            z,
                            _.filter((s) => s.zones.includes(z)).length,
                        ])
                    )
                );
            }
            return Promise.all(
                zones.map((z) =>
                    showMetadata(z, 'desks')
                        .pipe(
                            catchError(() => of({ details: [] })),
                            map((m) => [z, m.details.length])
                        )
                        .toPromise()
                )
            );
        }),
        map((list: [string, number][]) => {
            const map: HashMap<number> = {};
            this._active_bookings.next([]);
            list.forEach(([id, count]) => (map[id] = count));
            return map;
        }),
        shareReplay(1)
    );

    public readonly stats: Observable<HashMap> = combineLatest([
        this.counts,
        this.bookings,
    ]).pipe(
        switchMap(async ([counts, list]) => {
            if (list[0] instanceof CalendarEvent) {
                return generateReportForBookings(
                    list as CalendarEvent[],
                    this.duration * 8,
                    counts
                );
            }
            return generateReportForDeskBookings(
                (list as Booking[]) || [],
                this.duration,
                counts
            );
        })
    );

    public readonly day_list = combineLatest([this.options, this.stats]).pipe(
        map(([options, stats]) => {
            const { start } = options;
            let date = startOfDay(start);
            const end = endOfDay(options.end || date);
            const dates = [];
            const ignore_days =
                this._settings
                    .get('app.reports.ignore_days')
                    ?.map((_) => _.toLowerCase()) || [];
            while (isBefore(date, end)) {
                if (ignore_days.includes(DAYS_OF_WEEK_INDEX[date.getDay()])) {
                    date = addDays(date, 1);
                    continue;
                }
                const s = startOfDay(date).valueOf();
                const e = endOfDay(s).valueOf();
                const events: Booking[] = stats.events.filter((bkn) =>
                    timePeriodsIntersect(
                        s,
                        e,
                        bkn.date,
                        bkn.date + bkn.duration * 60 * 1000
                    )
                );
                const usage =
                    options.type === 'desks'
                        ? unique(events, 'system_id').length
                        : unique(events, 'asset_id').length;
                dates.push({
                    date: s,
                    total: stats.total,
                    usage,
                    free: stats.total - events.length,
                    approved: events.reduce(
                        (c, e) =>
                            c + (e.approved || e.status === 'approved' ? 1 : 0),
                        0
                    ),
                    count: events.length,
                    utilisation: ((events.length / stats.total) * 100).toFixed(
                        1
                    ),
                });
                date = addDays(date, 1);
            }
            return dates;
        }),
        shareReplay(1)
    );

    public get duration() {
        const opts = this._options.getValue();
        const ignore_days =
            this._settings
                .get('app.reports.ignore_days')
                ?.map((_) =>
                    typeof _ === 'string'
                        ? _.toLowerCase()
                        : format(setDay(new Date(), _), 'eeee').toLowerCase()
                ) || [];
        let start = startOfDay(opts.start);
        const end = addMinutes(endOfDay(opts.end), 1);
        let count = 0;
        while (start.valueOf() < end.valueOf()) {
            if (!ignore_days.includes(DAYS_OF_WEEK_INDEX[start.getDay()])) {
                count++;
            }
            start = addDays(start, 1);
        }
        return Math.max(1, count);
    }

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
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
                'yyyy-MM-dd'
            )}+${format(options.end, 'yyyy-MM-dd')}.tsv`,
            jsonToCsv(
                bookings.map((bkn) => {
                    const details = bkn.toJSON();
                    delete details.zones;
                    delete details.server_names;
                    delete details.extension_data;
                    return details;
                }),
                '\t'
            )
        );
    }
}
