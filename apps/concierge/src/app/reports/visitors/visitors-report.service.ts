import { Injectable } from '@angular/core';
import { queryBookings } from '@placeos/bookings';
import {
    downloadFile,
    jsonToCsv,
    notifyError,
    SettingsService,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { endOfDay, format, getUnixTime, isSameDay, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest } from 'rxjs';
import {
    debounceTime,
    filter,
    map,
    shareReplay,
    startWith,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';

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
export class VisitorsReportService {
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
                type: 'visitor',
                zones:
                    (zones || [])?.join(',') ||
                    (this._settings.get('app.use_region')
                        ? this._org.region?.id
                        : '') ||
                    this._org.building?.id,
            });
        }),
        tap((_) => {
            if (!_.length) {
                notifyError('No bookings for the selected levels and period');
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
                bookings.map((bkn: any) => {
                    const details = bkn.toJSON();
                    delete details.zones;
                    delete details.server_names;
                    delete details.extension_data;
                    return details;
                }),
                '\t',
            ),
        );
    }
}
