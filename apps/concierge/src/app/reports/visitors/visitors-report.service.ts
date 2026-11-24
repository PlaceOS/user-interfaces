import { formatDate } from '@angular/common';
import { computed, inject, Injectable, resource, signal } from '@angular/core';
import { queryAllBookings } from '@placeos/bookings';
import {
    Booking,
    downloadFile,
    i18n,
    jsonToCsv,
    notifyError,
    notifyInfo,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { endOfDay, format, getUnixTime, isSameDay, startOfDay } from 'date-fns';
import { showVisitorFlag } from '../../visitors/visitor-flags';
import { REMOVE_KEYS } from '../reports-state.service';
import { reportBookingStatus } from '../reports.utilities';

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

    private _options = signal<ReportOptions>({});
    private _generated_options = signal<ReportOptions | undefined>(undefined);

    public readonly options = this._options.asReadonly();

    private readonly _bookings = resource({
        params: () => this._generated_options(),
        defaultValue: [] as Booking[],
        loader: async ({ params: { start, end, zones }, abortSignal }) => {
            const list = await queryAllBookings(
                {
                    period_start: getUnixTime(startOfDay(start || Date.now())),
                    period_end: getUnixTime(
                        endOfDay(end || start || Date.now()),
                    ),
                    type: 'visitor',
                    include_deleted: true,
                    limit: 200,
                    zones:
                        (zones || [])?.join(',') ||
                        (this._settings.get('app.use_region')
                            ? this._org.region?.id
                            : '') ||
                        this._org.building?.id,
                },
                { signal: abortSignal },
            );
            if (!abortSignal.aborted && !list.length) {
                notifyError(i18n('APP.CONCIERGE.REPORTS_LOAD_ERROR'));
            }
            return list;
        },
    });
    public readonly loading = this._bookings.isLoading;
    public readonly bookings = computed(() =>
        this._bookings.value().filter((booking) => !booking.deleted),
    );
    public readonly can_download = computed(
        () => !this.loading() && !!this._bookings.value().length,
    );

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
        this._generated_options.set({ ...this._options() });
    }

    public async downloadReport(exclude_cancelled = false) {
        const options = this._generated_options();
        if (!options || this.loading()) return;
        const all_bookings = this._bookings.value();
        const bookings = exclude_cancelled
            ? all_bookings.filter(
                  (booking) => reportBookingStatus(booking) !== 'Cancelled',
              )
            : all_bookings;
        if (!bookings.length) {
            if (exclude_cancelled) {
                notifyInfo(
                    i18n('APP.CONCIERGE.REPORTS_NO_NON_CANCELLED_BOOKINGS'),
                );
            }
            return;
        }
        const suffix = exclude_cancelled ? '+without-cancelled' : '';
        const show_international = showVisitorFlag(
            this._settings,
            bookings,
            'international',
        );
        const show_visitor_internal_or_external = showVisitorFlag(
            this._settings,
            bookings,
            'visitor_internal_or_external',
        );
        const is_same = isSameDay(options.start, options.end);
        const date = is_same
            ? format(options.start || startOfDay(Date.now()), 'yyyy-MM-dd')
            : `${format(options.start || startOfDay(Date.now()), 'yyyy-MM-dd')}-${format(
                  options.end || endOfDay(Date.now()),
                  'yyyy-MM-dd',
              )}`;
        downloadFile(
            `report+visitors+${date}${suffix}.tsv`,
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
                    if (show_visitor_internal_or_external) {
                        b.visitor_internal_or_external = i18n(
                            booking.extension_data
                                ?.visitor_internal_or_external === 'external'
                                ? 'COMMON.TYPE_EXTERNAL'
                                : 'COMMON.TYPE_INTERNAL',
                        );
                    }
                    for (const key of REMOVE_KEYS) delete b[key];
                    b.booking_status = reportBookingStatus(booking);
                    return b;
                }),
                '\t',
            ),
        );
    }
}
