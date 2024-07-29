import { Injectable } from '@angular/core';
import { AssetGroup, queryAssetGroupsExtended } from '@placeos/assets';
import { Booking, queryBookings } from '@placeos/bookings';
import {
    downloadFile,
    flatten,
    jsonToCsv,
    SettingsService,
    unique,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import {
    addDays,
    endOfDay,
    format,
    getUnixTime,
    isBefore,
    isSameDay,
    startOfDay,
} from 'date-fns';
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
        shareReplay(1),
    );

    public readonly bookings$ = this._generate.pipe(
        filter((gen) => gen > 0),
        switchMap(() => this._options),
        switchMap((options) => {
            this._loading.next(true);
            return queryBookings({
                period_start: getUnixTime(startOfDay(options.start)),
                period_end: getUnixTime(endOfDay(options.end || options.start)),
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
        shareReplay(1),
    );

    public readonly stats$ = combineLatest([
        this.products$,
        this.bookings$,
    ]).pipe(
        map(([products, bookings]) =>
            this._processBookingStats(bookings, products),
        ),
    );

    public readonly daily_stats$ = combineLatest([
        this._options,
        this.products$,
        this.bookings$,
    ]).pipe(
        map(([options, products, bookings]) => {
            const stats = {};
            let count = 0;
            let start = startOfDay(options.start);
            const end = endOfDay(options.end);
            while (isBefore(start, end) && count < 365) {
                const date = format(start, 'yyyy-MM-dd');
                stats[date] = this._processBookingStats(
                    bookings.filter((_) => isSameDay(_.date, start)),
                    products,
                );
                start = addDays(start, 1);
                count++;
            }
        }),
    );

    private _processBookingStats(
        booking_list: Booking[],
        products: AssetGroup[],
    ) {
        const booked_assets = flatten(booking_list.map((_) => _.asset_ids));
        const unique_events = unique(
            booking_list.map((_) => _.linked_event),
            'id',
        );
        return {
            events: unique_events,
            bookings: booking_list,
            products,
            booking_count: booking_list.length,
            event_count: unique_events.length,
            total_booked_items: booking_list.reduce(
                (c, i) => c + i.asset_ids.length,
                0,
            ),
            unique_items: products.filter((p) =>
                p.assets.find((_) => booked_assets.includes(_)),
            ).length,
            products_booked: products
                .filter((p) => p.assets.find((_) => booked_assets.includes(_)))
                .map((p) => ({
                    name: p.name,
                    count: p.assets.filter((_) => booked_assets.includes(_))
                        .length,
                })),
        } as any;
    }

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService,
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

    public setOptions(options: Partial<AssetsReportOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }
}
