import { formatDate } from '@angular/common';
import { computed, inject, Injectable, resource, signal } from '@angular/core';
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

    private _loading = signal<boolean>(false);
    private _options = signal<AssetsReportOptions>({});
    private _generate = signal<number>(0);

    public readonly loading = this._loading.asReadonly();
    public readonly options = this._options.asReadonly();

    private readonly _products = resource({
        params: () => this._generate(),
        defaultValue: [] as AssetGroup[],
        loader: async ({ params: gen }) => {
            if (gen <= 0) return [];
            const options = this._options();
            this._loading.set(true);
            try {
                return await queryAssetGroupsExtended({
                    zones:
                        (options.zones || [])?.join(',') ||
                        (this._settings.get('app.use_region')
                            ? this._org.region?.id
                            : '') ||
                        this._org.building?.id,
                });
            } finally {
                this._loading.set(false);
            }
        },
    });
    public readonly products = this._products.value;

    private readonly _bookings = resource({
        params: () => this._generate(),
        defaultValue: [] as Booking[],
        loader: async ({ params: gen }) => {
            if (gen <= 0) return [];
            const options = this._options();
            this._loading.set(true);
            const { start, end, zones } = options;
            try {
                const list = await queryBookings({
                    period_start: getUnixTime(startOfDay(start || Date.now())),
                    period_end: getUnixTime(
                        endOfDay(end || start || Date.now()),
                    ),
                    type: 'asset-request',
                    include_deleted: true,
                    include_checked_out: true,
                    zones:
                        (zones || [])?.join(',') ||
                        (this._settings.get('app.use_region')
                            ? this._org.region?.id
                            : '') ||
                        this._org.building?.id,
                });
                if (!list.length) {
                    notifyError(i18n('APP.CONCIERGE.REPORTS_LOAD_ERROR'));
                }
                return list;
            } finally {
                this._loading.set(false);
            }
        },
    });
    public readonly bookings = this._bookings.value;

    public readonly stats = computed(() =>
        this._processBookingStats(this.bookings(), this.products()),
    );

    public readonly daily_stats = computed(() => {
        const options = this._options();
        const products = this.products();
        const bookings = this.bookings();
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
    });

    private readonly _expired_items = resource({
        params: () => this._generate(),
        defaultValue: [] as any[],
        loader: async ({ params: gen }) => {
            if (gen <= 0) return [];
            const options = this._options();
            this._loading.set(true);
            try {
                const purchase_orders = await queryAssetPurchaseOrders({});
                return purchase_orders.data.filter((order) => {
                    order.expected_service_end_date <
                        getUnixTime(options.start || Date.now());
                });
            } finally {
                this._loading.set(false);
            }
        },
    });
    public readonly expired_items = this._expired_items.value;

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
        this._generate.set(Date.now());
    }

    public async downloadReport() {
        const options = this._options();
        const bookings = this.bookings();
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
        this._options.set({ ...this._options(), ...options });
    }
}
