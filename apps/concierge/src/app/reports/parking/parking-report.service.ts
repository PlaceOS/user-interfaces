import { formatDate } from '@angular/common';
import { computed, inject, Injectable, resource, signal } from '@angular/core';
import { queryParkingSpacesForZones } from '@placeos/assets';
import {
    Booking,
    downloadFile,
    jsonToCsv,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { format, isSameDay } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { REMOVE_KEYS, ReportsStateService } from '../reports-state.service';

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
export class ParkingReportService {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _report = inject(ReportsStateService);

    private _options = signal<ReportOptions>({});

    public readonly loading = this._report.loading;
    public readonly options = this._options.asReadonly();

    public readonly bookings = computed(
        () => this._report.bookings() as Booking[],
    );

    public readonly daily_stats = computed(() => {
        const bookings = this.bookings();
        const days = {};
        for (const booking of bookings) {
            const date = this.formatBookingDate(booking.date, 'yyyy-MM-dd');
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

    private readonly _counts = resource({
        params: () => this._options(),
        defaultValue: {} as Record<string, number>,
        loader: async ({ params: filters }) => {
            let zones = (filters.zones || []).filter(
                (z: any) => z !== -1 && z !== 'All',
            );
            if (!zones.length) {
                zones = (
                    this._settings.get('app.use_region')
                        ? this._org.levelsForRegion()
                        : this._org.levelsForBuilding()
                )
                    .filter((_) => _.tags.includes('parking'))
                    .map((_) => _.id);
            }
            if (!zones.length) return {};
            const scope_id = this._settings.get('app.use_region')
                ? this._org.region?.id
                : this._org.building?.id;
            if (!scope_id) return {};
            const spaces = await queryParkingSpacesForZones([scope_id]).catch(
                () => [],
            );
            const list = zones.map(
                (z) =>
                    [
                        z,
                        spaces.filter((space) => space.zones?.includes(z))
                            .length,
                    ] as [string, number],
            );
            const mapping: Record<string, number> = {};
            list.forEach(
                ([id, count]) => (mapping[id] = Math.max(count || 0, 1)),
            );
            return mapping;
        },
    });
    public readonly counts = this._counts.value;

    public get timezone() {
        return this._settings.get('app.bookings.use_building_timezone') ||
            this._settings.get('app.parking.use_building_timezone')
            ? this._org.building?.timezone || ''
            : '';
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public formatBookingDate(date: number, format_string: string) {
        return format(
            this.timezone ? toZonedTime(date, this.timezone) : date,
            format_string,
        );
    }

    public setOptions(options: Partial<ReportOptions>) {
        this._options.set({ ...this._options(), ...options });
        this._report.setOptions({ ...options, type: 'parking' });
    }

    public generateReport() {
        this._report.setOptions({ type: 'parking' });
        this._report.generateReport();
    }

    public async downloadReport() {
        const options = this._options();
        const bookings = this.bookings();
        if (!bookings?.length) return;
        const start = Number.isFinite(options.start)
            ? options.start
            : bookings[0].date;
        const end = Number.isFinite(options.end) ? options.end : start;
        const is_same = isSameDay(start, end);
        const date = is_same
            ? format(start, 'yyyy-MM-dd')
            : `${format(start, 'yyyy-MM-dd')}-${format(end, 'yyyy-MM-dd')}`;
        downloadFile(
            `report+parking+${date}.csv`,
            jsonToCsv(
                bookings.map((booking) => {
                    const b: any = booking.toJSON();
                    const fmt_str = 'MMM d, y, h:mm a';
                    b.start = formatDate(b.booking_start * 1000, fmt_str, 'en');
                    b.end = formatDate(b.booking_end * 1000, fmt_str, 'en');
                    for (const key of REMOVE_KEYS) delete b[key];
                    return b;
                }),
            ),
        );
    }
}
