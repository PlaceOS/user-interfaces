import { computed, inject, Injectable, resource, signal } from '@angular/core';
import { queryAllBookings } from '@placeos/bookings';
import {
    Booking,
    CalendarEvent,
    downloadFile,
    i18n,
    jsonToCsv,
    notifyError,
    OrganisationService,
    SettingsService,
    User,
} from '@placeos/common';
import { queryAllEvents } from '@placeos/events';
import { endOfDay, format, getUnixTime, startOfDay } from 'date-fns';
import { reportBookingStatus, reportEventStatus } from '../reports.utilities';

export interface UserReportOptions {
    /** Start of the report period in ms */
    start: number;
    /** End of the report period in ms */
    end: number;
    /** User to list the bookings of */
    user: User | null;
}

export type UserReportType = 'desk' | 'parking' | 'locker' | 'room';

export interface UserReportRow {
    type: UserReportType;
    type_name: string;
    name: string;
    location: string;
    date: number;
    duration: number;
    all_day: boolean;
    checked_in: string;
    status: string;
}

/** Row as loaded. `checked_in` has a locale key until `rows` translates it */
type LoadedUserReportRow = Omit<UserReportRow, 'type_name'>;

/** Locale key for the name of each booking type in the report */
const TYPE_NAMES: Record<UserReportType, string> = {
    desk: 'RESOURCE.DESK',
    parking: 'RESOURCE.PARKING',
    locker: 'RESOURCE.LOCKER',
    room: 'RESOURCE.ROOM',
};

/** Booking types loaded from the bookings API */
const BOOKING_TYPES = ['desk', 'parking', 'locker'] as const;

/**
 * Loads the desk, parking, locker and room bookings of a single user in the
 * active building, or in the active region when `app.use_region` is set.
 * Provide it on the report component, so loading stops when the user leaves
 * the report.
 */
@Injectable()
export class UserReportService {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    private _options = signal<UserReportOptions>({
        start: startOfDay(Date.now()).valueOf(),
        end: endOfDay(Date.now()).valueOf(),
        user: null,
    });

    /**
     * Values that select the bookings to load. Compared by value, because
     * the settings change after each building change and the resource loads
     * again for each new params object.
     */
    private readonly _params = computed(
        () => {
            const { start, end, user } = this._options();
            const zone = this._settings.get('app.use_region')
                ? this._org.active_region()?.id
                : this._org.active_building()?.id;
            return { start, end, email: user?.email, zone };
        },
        {
            equal: (a, b) =>
                a.start === b.start &&
                a.end === b.end &&
                a.email === b.email &&
                a.zone === b.zone,
        },
    );

    /** Loads the bookings when the user, the dates or the zone change */
    private readonly _rows = resource({
        params: () => this._params(),
        defaultValue: [] as LoadedUserReportRow[],
        loader: async ({ params: { start, end, email, zone } }) => {
            if (!email || !zone) return [];
            const period = {
                period_start: getUnixTime(startOfDay(start)),
                period_end: getUnixTime(endOfDay(end)),
            };
            // The events API reads the calendar of another user only on
            // some tenants. Load the room events of the zone, as the rooms
            // report does, and keep the events that the user hosts. When
            // the tenant forces the calendar host, `host_override` has the
            // user who made the booking.
            const [events, ...booking_lists] = await Promise.all([
                // Tell the user when the room events are too many to load
                queryAllEvents({
                    ...period,
                    zone_ids: zone,
                    include_cancelled: true,
                    limit: 200,
                }).catch(() => {
                    notifyError(i18n('COMMON.LOAD_ERROR'));
                    return [] as CalendarEvent[];
                }),
                ...BOOKING_TYPES.map((type) =>
                    queryAllBookings({
                        ...period,
                        type,
                        zones: zone,
                        email,
                        include_deleted: true,
                        include_checked_out: true,
                        limit: 200,
                    }),
                ),
            ]);
            const host = email.toLowerCase();
            return [
                ...booking_lists.flat().map((_) => this._bookingRow(_)),
                ...events
                    .filter((event) =>
                        [event.extension_data?.host_override, event.host].some(
                            (_) => _?.toLowerCase() === host,
                        ),
                    )
                    .map((_) => this._eventRow(_)),
            ].sort((a, b) => a.date - b.date);
        },
    });

    public readonly options = this._options.asReadonly();
    public readonly loading = this._rows.isLoading;
    /** Loaded rows with locale text, which follows locale changes */
    public readonly rows = computed<UserReportRow[]>(() =>
        this._rows.value().map((row) => ({
            ...row,
            type_name: i18n(TYPE_NAMES[row.type]),
            checked_in: row.checked_in && i18n(row.checked_in),
        })),
    );

    /** Number of bookings for each type */
    public readonly counts = computed(() => {
        const counts: Record<UserReportType, number> = {
            desk: 0,
            parking: 0,
            locker: 0,
            room: 0,
        };
        for (const row of this.rows()) counts[row.type] += 1;
        return counts;
    });

    public setOptions(options: Partial<UserReportOptions>) {
        this._options.update((current) => ({ ...current, ...options }));
    }

    public downloadReport() {
        const { start, end, user } = this._options();
        const rows = this.rows();
        if (!user || !rows.length) return;
        downloadFile(
            `report+user+${user.email}+${format(start, 'yyyy-MM-dd')}+${format(
                end,
                'yyyy-MM-dd',
            )}.csv`,
            jsonToCsv(
                rows.map((row) => ({
                    type: row.type_name,
                    name: row.name,
                    location: row.location,
                    date: format(row.date, 'yyyy-MM-dd HH:mm'),
                    duration: row.duration,
                    all_day: row.all_day,
                    checked_in: row.checked_in,
                    status: row.status,
                })),
            ),
        );
    }

    private _bookingRow(booking: Booking): LoadedUserReportRow {
        const type = booking.booking_type as UserReportType;
        return {
            type,
            name:
                booking.asset_name ||
                booking.extension_data?.asset_name ||
                booking.description ||
                booking.asset_id,
            location: this._org.locationWithID(booking.zones).label,
            date: booking.date,
            duration: booking.duration,
            all_day: booking.is_all_day,
            checked_in: booking.checked_in ? 'COMMON.YES' : 'COMMON.NO',
            status: reportBookingStatus(booking),
        };
    }

    private _eventRow(event: CalendarEvent): LoadedUserReportRow {
        return {
            type: 'room',
            name: event.system?.display_name || event.system?.name || '',
            location: this._org.locationWithID([...(event.system?.zones || [])])
                .label,
            date: event.date,
            duration: event.duration,
            all_day: event.is_all_day,
            // Room events have no check-in state
            checked_in: '',
            status: reportEventStatus(event),
        };
    }
}
