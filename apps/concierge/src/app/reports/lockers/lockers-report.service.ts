import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { queryBookings } from '@placeos/bookings';
import {
    downloadFile,
    i18n,
    jsonToCsv,
    notifyError,
    SettingsService,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { showMetadata } from '@placeos/ts-client';
import { endOfDay, format, getUnixTime, isSameDay, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    filter,
    map,
    shareReplay,
    startWith,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';
import { REMOVE_KEYS } from '../reports-state.service';

export interface ReportOptions {
    /** Zones to check available space for */
    zones?: string[];
    /** Start time of the report in ms */
    start?: number;
    /** End time of the report in ms */
    end?: number;
}

@Injectable({
    providedIn: 'root',
})
export class LockersReportService {
    private _loading = new BehaviorSubject<boolean>(false);
    private _options = new BehaviorSubject<ReportOptions>({});
    private _generate = new BehaviorSubject<number>(0);

    public readonly loading$ = this._loading.asObservable();
    public readonly options$ = this._options.asObservable();

    public readonly bookings$ = this._generate.pipe(
        filter((gen) => gen > 0),
        switchMap(() => this._options.pipe(take(1))),
        debounceTime(300),
        switchMap((options) => {
            this._loading.next(true);
            const { start, end, zones } = options;
            return queryBookings({
                period_start: getUnixTime(startOfDay(start || Date.now())),
                period_end: getUnixTime(endOfDay(end || start || Date.now())),
                type: 'locker',
                include_checked_out: true,
                zones:
                    (zones || [])?.join(',') ||
                    (this._settings.get('app.use_region')
                        ? this._org.region?.id
                        : '') ||
                    this._org.building?.id,
                limit: 10000,
            });
        }),
        tap((_) => {
            if (!_.length) {
                notifyError(i18n('APP.CONCIERGE.REPORTS_LOAD_ERROR'));
            }
            this._loading.next(false);
        }),
        startWith([]),
        shareReplay(1),
    );

    public readonly daily_stats$ = combineLatest([
        this.bookings$,
        this._options,
    ]).pipe(
        map(([bookings, options]) => {
            const days = {};
            for (const booking of bookings) {
                const date = format(booking.date, 'yyyy-MM-dd');
                if (!days[date]) {
                    days[date] = {
                        date: booking.date,
                        bookings: [],
                    };
                }
                days[date].bookings.push(booking);
            }
            return days;
        }),
        shareReplay(1),
    );

    public readonly counts$ = this._options.pipe(
        debounceTime(500),
        switchMap((filters) => {
            let zones = (filters.zones || []).filter(
                (z: any) => z !== -1 && z !== 'All',
            );
            if (!zones.length) {
                zones = (
                    this._settings.get('app.use_region')
                        ? this._org.levelsForRegion()
                        : this._org.levelsForBuilding()
                )
                    .filter((_) => _.tags.includes('lockers'))
                    .map((_) => _.id);
            }
            return Promise.all(
                zones.map((z) =>
                    showMetadata(z, 'lockers-spaces')
                        .pipe(
                            catchError(() => of({ details: [] })),
                            map((m) => [z, m.details.length]),
                        )
                        .toPromise(),
                ),
            );
        }),
        map((list: [string, number][]) => {
            const mapping: Record<string, number> = {};
            list.forEach(
                ([id, count]) => (mapping[id] = Math.max(count || 0, 1)),
            );
            return mapping;
        }),
        shareReplay(1),
    );

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService,
    ) {}

    public setOptions(options: Partial<ReportOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public generateReport() {
        this._generate.next(Date.now());
    }

    public async downloadReport() {
        const options = this._options.getValue();
        const bookings = await this.bookings$.pipe(take(1)).toPromise();
        if (!bookings?.length) return;
        const is_same = isSameDay(options.start, options.end);
        const date = is_same
            ? format(options.start, 'yyyy-MM-dd')
            : `${format(options.start, 'yyyy-MM-dd')}-${format(
                  options.end,
                  'yyyy-MM-dd',
              )}`;
        downloadFile(
            `report+assets+${date}.tsv`,
            jsonToCsv(
                bookings.map((booking) => {
                    const b: any = booking.toJSON();
                    const fmt_str = 'MMM d, y, h:mm a';
                    b.start = formatDate(b.booking_start * 1000, fmt_str, 'en');
                    b.end = formatDate(b.booking_end * 1000, fmt_str, 'en');
                    for (const key of REMOVE_KEYS) delete b[key];
                    return b;
                }),
                '\t',
            ),
        );
    }
}
