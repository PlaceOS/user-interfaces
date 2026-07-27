import { formatDate } from '@angular/common';
import { computed, inject, Injectable, resource, signal } from '@angular/core';
import { queryBookings } from '@placeos/bookings';
import {
    Booking,
    downloadFile,
    i18n,
    jsonToCsv,
    notifyError,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { endOfDay, format, getUnixTime, isSameDay, startOfDay } from 'date-fns';
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
export class VisitorsReportService {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    private _loading = signal<boolean>(false);
    private _options = signal<ReportOptions>({});
    private _generate = signal<number>(0);

    public readonly loading = this._loading.asReadonly();
    public readonly options = this._options.asReadonly();

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
                    type: 'visitor',
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

    public readonly daily_stats = computed(() => {
        const bookings = this.bookings();
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
    });

    public setOptions(options: Partial<ReportOptions>) {
        this._options.set({ ...this._options(), ...options });
    }

    public generateReport() {
        this._generate.set(Date.now());
    }

    public async downloadReport() {
        const options = this._options();
        const bookings = this.bookings();
        const show_international = !!this._settings.get(
            'app.visitors.allow_international',
        );
        if (!bookings?.length) return;
        const is_same = isSameDay(options.start, options.end);
        const date = is_same
            ? format(options.start || startOfDay(Date.now()), 'yyyy-MM-dd')
            : `${format(options.start || startOfDay(Date.now()), 'yyyy-MM-dd')}-${format(
                  options.end || endOfDay(Date.now()),
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
                    if (show_international) {
                        b.international = i18n(
                            booking.extension_data?.international
                                ? 'COMMON.YES'
                                : 'COMMON.NO',
                        );
                    }
                    for (const key of REMOVE_KEYS) delete b[key];
                    return b;
                }),
                '\t',
            ),
        );
    }
}
