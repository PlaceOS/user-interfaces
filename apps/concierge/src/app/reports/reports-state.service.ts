import { Injectable } from '@angular/core';
import { showMetadata } from '@placeos/ts-client';
import { Booking, queryBookings } from '@user-interfaces/bookings';
import {
    downloadFile,
    HashMap,
    jsonToCsv,
    notifyError,
} from '@user-interfaces/common';
import { CalendarEvent, queryEvents } from '@user-interfaces/events';
import { OrganisationService } from '@user-interfaces/organisation';
import { differenceInDays, endOfDay, format, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
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

export interface ReportOptions {
    type?: 'desks' | 'events';
    start?: number | Date;
    end?: number | Date;
    zones?: string[];
}

@Injectable({
    providedIn: 'root',
})
export class ReportsStateService {
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
            console.log('Report:', _);
            const options = this._options.getValue();
            this._loading.next('Loading report details...');
            if (!options?.type && !options?.zones?.length) return of([]);
            const start = startOfDay(
                options?.start ? new Date(options.start) : new Date()
            ).valueOf();
            const end = endOfDay(
                options?.end ? new Date(options.end) : start
            ).valueOf();
            const zones = options?.zones
                ? options.zones.filter((z) => z !== 'All').join(',')
                : '';
            const query = {
                period_start: Math.floor(start / 1000),
                period_end: Math.floor(end / 1000),
            };
            return options.type === 'desks'
                ? queryBookings({
                      ...query,
                      zones: zones,
                      type: 'desk',
                  })
                : queryEvents({ ...query, zone_ids: zones });
        }),
        catchError((_) => []),
        map((_) => {
            this._loading.next('');
            if (!_?.length) {
                notifyError('No bookings for the selected levels and period');
            }
            this._active_bookings.next(_ || []);
            return _;
        }),
        shareReplay()
    );

    public readonly loading = this._loading.asObservable();

    public readonly options = this._options.asObservable();

    public readonly bookings = this._active_bookings.asObservable();

    public readonly counts = this._options.pipe(
        debounceTime(500),
        switchMap((filters) => {
            const zones = (filters.zones || []).filter(
                (z: any) => z !== -1 && z !== 'All'
            );
            return Promise.all(
                zones.map((z) =>
                    showMetadata(z, {
                        name: 'desks',
                    })
                        .pipe(map((m) => [z, m.details.length]))
                        .toPromise()
                )
            );
        }),
        catchError((_) => []),
        map((list: [string, number][]) => {
            const map: HashMap<number> = {};
            this._active_bookings.next([]);
            list.forEach(([id, count]) => (map[id] = count));
            return map;
        }),
        shareReplay()
    );

    public readonly stats: Observable<HashMap> = combineLatest([
        this.counts,
        this.bookings,
    ]).pipe(
        map(([counts, list]) => {
            return list[0] instanceof CalendarEvent
                ? generateReportForBookings(
                      list as CalendarEvent[],
                      this.duration * 8
                  )
                : generateReportForDeskBookings(
                      (list as Booking[]) || [],
                      this.duration,
                      counts
                  );
        })
    );

    public get duration() {
        const opts = this._options.getValue();
        return Math.abs(differenceInDays(opts.start, opts.end));
    }

    constructor(private _org: OrganisationService) {
        this._bookings_list.subscribe((_) => _);
    }

    public generateReport() {
        console.log('Report');
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
            )}+${format(options.end, 'yyyy-MM-dd')}.csv`,
            jsonToCsv(
                bookings.map((bkn) => {
                    const details = bkn.toJSON();
                    delete details.zones;
                    delete details.server_names;
                    return details;
                })
            )
        );
    }
}
