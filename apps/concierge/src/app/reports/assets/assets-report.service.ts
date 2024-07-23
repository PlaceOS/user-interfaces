import { Injectable } from '@angular/core';
import { queryAssetGroupsExtended } from '@placeos/assets';
import { queryBookings } from '@placeos/bookings';
import { downloadFile, jsonToCsv, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { endOfDay, format, getUnixTime, isSameDay, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest } from 'rxjs';
import {
    debounceTime,
    filter,
    map,
    shareReplay,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';

export interface AssetsReportOptions {
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
export class AssetsReportService {
    private _loading = new BehaviorSubject<boolean>(false);
    private _options = new BehaviorSubject<AssetsReportOptions>({});
    private _generate = new BehaviorSubject<number>(0);

    public readonly loading$ = this._loading.asObservable();
    public readonly options$ = this._options.asObservable();

    public readonly products$ = this._options.pipe(
        debounceTime(500),
        switchMap((options) => {
            this._loading.next(true);
            return queryAssetGroupsExtended({
                zones:
                    (this._settings.get('app.use_region')
                        ? this._org.region?.id
                        : '') || this._org.building?.id,
            });
        }),
        tap(() => this._loading.next(false)),
        shareReplay(1)
    );

    public readonly bookings$ = this._generate.pipe(
        filter((gen) => gen > 0),
        switchMap(() => this._options),
        switchMap((options) => {
            this._loading.next(true);
            return queryBookings({
                period_start: getUnixTime(startOfDay(options.start)),
                period_end: getUnixTime(endOfDay(options.end)),
                type: 'asset-request',
                zones:
                    (options.zones || [])?.join(',') ||
                    (this._settings.get('app.use_region')
                        ? this._org.region?.id
                        : '') ||
                    this._org.building?.id,
            });
        }),
        tap(() => this._loading.next(false)),
        shareReplay(1)
    );

    public readonly stats$ = combineLatest([
        this.products$,
        this.bookings$,
    ]).pipe(
        map(([products, bookings]) => {
            return {} as any;
        })
    );

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {}

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
                  'yyyy-MM-dd'
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
                '\t'
            )
        );
    }

    public setOptions(options: Partial<AssetsReportOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }
}
