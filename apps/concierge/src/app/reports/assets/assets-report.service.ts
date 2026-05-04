import { formatDate } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import {
    queryAssetGroupsExtended,
    queryAssetPurchaseOrders,
} from '@placeos/assets';
import { queryBookings } from '@placeos/bookings';
import {
    AssetGroup,
    Booking,
    CalendarEvent,
    downloadFile,
    i18n,
    jsonToCsv,
    nextValueFrom,
    notifyError,
    OrganisationService,
    SettingsService,
    unique,
} from '@placeos/common';
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
    finalize,
    map,
    shareReplay,
    skip,
    switchMap,
    takeUntil,
    tap,
} from 'rxjs/operators';
import { REMOVE_KEYS } from '../reports-state.service';
import {
    activeReportBookings,
    reportBookingStatusStats,
} from '../reports.utilities';

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
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    private _loading = new BehaviorSubject<boolean>(false);
    private _options = new BehaviorSubject<AssetsReportOptions>({});
    private _generate = new BehaviorSubject<number>(0);

    public readonly loading$ = this._loading.asObservable();
    public readonly options$ = this._options.asObservable();

    public readonly products$ = this._generate.pipe(
        filter((gen) => gen > 0),
        debounceTime(300),
        switchMap(() => {
            const options = this._options.getValue();
            this._loading.next(true);
            return queryAssetGroupsExtended({
                zones:
                    (options.zones || [])?.join(',') ||
                    (this._settings.get('app.use_region')
                        ? this._org.region?.id
                        : '') ||
                    this._org.building?.id,
            }).pipe(
                takeUntil(this._options.pipe(skip(1))),
                finalize(() => this._loading.next(false)),
            );
        }),
        shareReplay(1),
    );

    public readonly bookings$ = this._generate.pipe(
        filter((gen) => gen > 0),
        debounceTime(300),
        switchMap(() => {
            const options = this._options.getValue();
            this._loading.next(true);
            const { start, end, zones } = options;
            return queryBookings({
                period_start: getUnixTime(startOfDay(start || Date.now())),
                period_end: getUnixTime(endOfDay(end || start || Date.now())),
                type: 'asset-request',
                include_deleted: true as any,
                include_checked_out: true,
                zones:
                    (zones || [])?.join(',') ||
                    (this._settings.get('app.use_region')
                        ? this._org.region?.id
                        : '') ||
                    this._org.building?.id,
            }).pipe(
                takeUntil(this._options.pipe(skip(1))),
                finalize(() => this._loading.next(false)),
            );
        }),
        tap((_) => {
            if (!_.length) {
                notifyError(i18n('APP.CONCIERGE.REPORTS_LOAD_ERROR'));
            }
        }),
        shareReplay(1),
    );

    public readonly stats$ = combineLatest([
        this.products$,
        this.bookings$,
    ]).pipe(
        map(([products, bookings]) => {
            const data = this._processBookingStats(bookings, products);
            return data;
        }),
        shareReplay(1),
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
            return stats;
        }),
        shareReplay(1),
    );

    public readonly expired_items$ = this._generate.pipe(
        switchMap(() => {
            this._loading.next(true);
            return combineLatest([queryAssetPurchaseOrders({}), this._options]);
        }),
        map(([purchase_orders, options]) => {
            return purchase_orders.data.filter((order) => {
                order.expected_service_end_date <
                    getUnixTime(options.start || Date.now());
            });
        }),
        tap(() => this._loading.next(false)),
        shareReplay(1),
    );

    private _processBookingStats(
        booking_list: Booking[],
        products: AssetGroup[],
    ) {
        const active_bookings = activeReportBookings(booking_list);
        const booked_assets = active_bookings
            .map((_) => _.asset_ids?.length || [_.asset_id])
            .flat();
        const unique_events = unique(
            active_bookings
                .map((_) => _.linked_event || _.linked_bookings[0])
                .filter((_) => _),
            'id',
        ).map((i) => new CalendarEvent(i as any));
        return {
            events: unique_events,
            bookings: active_bookings,
            all_bookings: booking_list,
            products,
            booking_count: active_bookings.length,
            event_count: unique_events.length,
            total_booked_items: active_bookings.reduce(
                (c, i) => c + i.asset_ids.length,
                0,
            ),
            ...reportBookingStatusStats(booking_list),
            unique_items: products.filter((p) =>
                p.assets.find((_) => booked_assets.includes(_.id)),
            ).length,
            products_booked: products
                .filter((p) =>
                    p.assets.find((_) => booked_assets.includes(_.id)),
                )
                .map((p) => ({
                    name: p.name,
                    count: p.assets.filter((_) => booked_assets.includes(_.id))
                        .length,
                })),
        };
    }

    public generateReport() {
        this._generate.next(Date.now());
    }

    public async downloadReport() {
        const options = this._options.getValue();
        const bookings = await nextValueFrom(this.bookings$);
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

    public setOptions(options: Partial<AssetsReportOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }
}
