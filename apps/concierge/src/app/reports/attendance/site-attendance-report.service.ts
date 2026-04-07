import { formatDate } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { queryParkingSpaces } from '@placeos/assets';
import { queryAllBookings, queryBookings } from '@placeos/bookings';
import {
    Booking,
    CalendarEvent,
    downloadFile,
    formatDuration,
    i18n,
    jsonToCsv,
    notifyError,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { queryAllEvents, requestSpacesForZone } from '@placeos/events';
import { showMetadata } from '@placeos/ts-client';
import {
    differenceInBusinessDays,
    endOfDay,
    format,
    getUnixTime,
    isSameDay,
    startOfDay,
} from 'date-fns';
import { BehaviorSubject, forkJoin, of } from 'rxjs';
import { catchError, finalize, map, skip, takeUntil } from 'rxjs/operators';

export interface ReportOptions {
    zones?: string[];
    start?: number;
    end?: number;
}

export interface SiteAttendanceCard {
    id: 'events' | 'desks' | 'parking' | 'lockers' | 'visitors';
    bookings: number;
    attendance: number;
    daily_average: number;
    average_length: string;
    unique_people: number;
    resource_summary: string;
    status_label: string;
    status_count: number;
    status_rate: number;
}

export interface SiteAttendanceReport {
    business_days: number;
    total_attendance: number;
    total_bookings: number;
    active_types: number;
    unique_people: number;
    cards: SiteAttendanceCard[];
}

export const EMPTY_REPORT: SiteAttendanceReport = {
    business_days: 0,
    total_attendance: 0,
    total_bookings: 0,
    active_types: 0,
    unique_people: 0,
    cards: [],
};

@Injectable({
    providedIn: 'root',
})
export class SiteAttendanceReportService {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    private _loading = new BehaviorSubject(false);
    private _options = new BehaviorSubject<ReportOptions>({
        start: startOfDay(Date.now()).valueOf(),
        end: endOfDay(Date.now()).valueOf(),
        zones: [],
    });
    private _report = new BehaviorSubject<SiteAttendanceReport>(EMPTY_REPORT);

    public readonly loading$ = this._loading.asObservable();
    public readonly options$ = this._options.asObservable();
    public readonly report$ = this._report.asObservable();

    public setOptions(options: Partial<ReportOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public generateReport() {
        const options = this._options.getValue();
        const start = startOfDay(options.start || Date.now());
        const end = endOfDay(options.end || start.valueOf());
        const booking_zones = this.getBookingZones(options.zones);
        const level_ids = this.getLevelIds(options.zones);
        const space_zones = this.getSpaceZones(options.zones);
        const query = {
            period_start: getUnixTime(start),
            period_end: getUnixTime(end),
        };
        this._loading.next(true);
        forkJoin({
            events: queryAllEvents({
                ...query,
                zone_ids: booking_zones,
                limit: 1000,
            }).pipe(catchError(() => of([]))),
            desks: queryAllBookings({
                ...query,
                zones: booking_zones,
                type: 'desk',
                limit: 1000,
            }).pipe(catchError(() => of([]))),
            parking: queryAllBookings({
                ...query,
                zones: booking_zones,
                type: 'parking',
                limit: 1000,
            }).pipe(catchError(() => of([]))),
            lockers: queryAllBookings({
                ...query,
                zones: booking_zones,
                type: 'locker',
                limit: 1000,
            }).pipe(catchError(() => of([]))),
            visitors: queryBookings({
                ...query,
                type: 'visitor',
                zones: booking_zones,
            }).pipe(catchError(() => of([]))),
            room_count: this.getRoomCount(space_zones),
            desk_count: this.getDeskCount(level_ids),
            parking_count: this.getParkingCount(level_ids),
            locker_count: this.getLockerCount(level_ids),
        })
            .pipe(
                takeUntil(this._options.pipe(skip(1))),
                finalize(() => this._loading.next(false)),
                map((result) =>
                    this.buildReport(result, start.valueOf(), end.valueOf()),
                ),
            )
            .subscribe((report) => {
                if (!report.total_bookings) {
                    notifyError(i18n('APP.CONCIERGE.REPORTS_LOAD_ERROR'));
                }
                this._report.next(report);
            });
    }

    public downloadReport() {
        const report = this._report.getValue();
        const { start, end } = this._options.getValue();
        if (!report.total_bookings) return;
        const is_same = isSameDay(start || Date.now(), end || Date.now());
        const date = is_same
            ? format(start || Date.now(), 'yyyy-MM-dd')
            : `${format(start || Date.now(), 'yyyy-MM-dd')}-${format(
                  end || Date.now(),
                  'yyyy-MM-dd',
              )}`;
        downloadFile(
            `report+site-attendance+${date}.tsv`,
            jsonToCsv(
                report.cards.map((card) => ({
                    booking_type: card.id,
                    attendance: card.attendance,
                    bookings: card.bookings,
                    daily_average: card.daily_average,
                    average_length: card.average_length,
                    unique_people: card.unique_people,
                    resources_used: card.resource_summary,
                    status_label: card.status_label,
                    status_count: card.status_count,
                    status_rate: `${card.status_rate}%`,
                    report_start: formatDate(
                        start || Date.now(),
                        'MMM d, y',
                        'en',
                    ),
                    report_end: formatDate(end || Date.now(), 'MMM d, y', 'en'),
                })),
                '\t',
            ),
        );
    }

    private getBookingZones(zones: string[] = []) {
        const zone_list = zones.filter((zone) => zone && zone !== 'All');
        if (zone_list.length) return zone_list.join(',');
        return this._settings.get('app.use_region')
            ? this._org.region?.id
            : this._org.building?.id;
    }

    private getLevelIds(zones: string[] = []) {
        const zone_list = zones.filter((zone) => zone && zone !== 'All');
        if (zone_list.length) return zone_list;
        return (
            this._settings.get('app.use_region')
                ? this._org.levelsForRegion()
                : this._org.levelsForBuilding()
        ).map((level) => level.id);
    }

    private getSpaceZones(zones: string[] = []) {
        const zone_list = zones.filter((zone) => zone && zone !== 'All');
        if (zone_list.length) return zone_list;
        return [
            this._settings.get('app.use_region')
                ? this._org.region?.id
                : this._org.building?.id,
        ].filter((zone) => !!zone);
    }

    private getRoomCount(zones: string[]) {
        if (!zones.length) return of(0);
        return forkJoin(
            zones.map((zone) =>
                requestSpacesForZone(zone).pipe(catchError(() => of([]))),
            ),
        ).pipe(
            map((space_lists) => {
                const space_ids = new Set(
                    space_lists
                        .flat()
                        .map((space) => space.id)
                        .filter((id) => !!id),
                );
                return space_ids.size;
            }),
        );
    }

    private getDeskCount(zones: string[]) {
        if (!zones.length) return of(0);
        return forkJoin(
            zones.map((zone) =>
                showMetadata(zone, 'desks').pipe(
                    catchError(() => of({ details: [] })),
                    map((metadata) => metadata.details?.length || 0),
                ),
            ),
        ).pipe(
            map((counts) => counts.reduce((count, value) => count + value, 0)),
        );
    }

    private getParkingCount(zones: string[]) {
        if (!zones.length) return of(0);
        return forkJoin(
            zones.map((zone) =>
                queryParkingSpaces(zone).pipe(
                    catchError(() => of([])),
                    map((spaces) => spaces.length || 0),
                ),
            ),
        ).pipe(
            map((counts) => counts.reduce((count, value) => count + value, 0)),
        );
    }

    private getLockerCount(zones: string[]) {
        if (!zones.length) return of(0);
        return forkJoin(
            zones.map((zone) =>
                showMetadata(zone, 'lockers-spaces').pipe(
                    catchError(() => of({ details: [] })),
                    map((metadata) => metadata.details?.length || 0),
                ),
            ),
        ).pipe(
            map((counts) => counts.reduce((count, value) => count + value, 0)),
        );
    }

    private buildReport(
        result: {
            events: CalendarEvent[];
            desks: Booking[];
            parking: Booking[];
            lockers: Booking[];
            visitors: Booking[];
            room_count: number;
            desk_count: number;
            parking_count: number;
            locker_count: number;
        },
        start: number,
        end: number,
    ): SiteAttendanceReport {
        const business_days =
            differenceInBusinessDays(
                endOfDay(end).valueOf() + 1,
                startOfDay(start),
            ) || 1;
        const cards: SiteAttendanceCard[] = [
            this.buildEventCard(
                result.events || [],
                result.room_count || 0,
                business_days,
            ),
            this.buildBookingCard(
                'desks',
                result.desks || [],
                result.desk_count || 0,
                business_days,
            ),
            this.buildBookingCard(
                'parking',
                result.parking || [],
                result.parking_count || 0,
                business_days,
            ),
            this.buildBookingCard(
                'lockers',
                result.lockers || [],
                result.locker_count || 0,
                business_days,
            ),
            this.buildVisitorCard(result.visitors || [], business_days),
        ];
        const unique_people = new Set<string>([
            ...this.getEventPeople(result.events || []),
            ...this.getBookingPeople(result.desks || []),
            ...this.getBookingPeople(result.parking || []),
            ...this.getBookingPeople(result.lockers || []),
            ...this.getVisitorPeople(result.visitors || []),
        ]).size;
        return {
            business_days,
            total_attendance: cards.reduce(
                (count, card) => count + card.attendance,
                0,
            ),
            total_bookings: cards.reduce(
                (count, card) => count + card.bookings,
                0,
            ),
            active_types: cards.filter((card) => card.bookings > 0).length,
            unique_people,
            cards,
        };
    }

    private buildEventCard(
        bookings: CalendarEvent[],
        resource_count: number,
        business_days: number,
    ): SiteAttendanceCard {
        const attendance = bookings.reduce(
            (count, booking) => count + this.getEventAttendance(booking),
            0,
        );
        const tracked_bookings = bookings.filter(
            (booking) => this.getPeopleCount(booking) !== undefined,
        );
        const no_shows = tracked_bookings.filter(
            (booking) => this.getPeopleCount(booking)?.max === 0,
        ).length;
        const resources_used = new Set(
            bookings
                .map(
                    (booking) =>
                        booking.system?.id ||
                        booking.system?.email ||
                        booking.location,
                )
                .filter((value) => !!value),
        ).size;
        return {
            id: 'events',
            bookings: bookings.length,
            attendance,
            daily_average: this.toFixed(
                attendance / Math.max(1, business_days),
            ),
            average_length: this.getAverageLength(bookings),
            unique_people: new Set(this.getEventPeople(bookings)).size,
            resource_summary: resource_count
                ? `${resources_used} / ${resource_count}`
                : `${resources_used}`,
            status_label: 'APP.CONCIERGE.REPORTS_NO_SHOWS',
            status_count: no_shows,
            status_rate: this.toFixed(
                (no_shows /
                    Math.max(1, tracked_bookings.length || bookings.length)) *
                    100,
            ),
        };
    }

    private buildBookingCard(
        id: 'desks' | 'parking' | 'lockers',
        bookings: Booking[],
        resource_count: number,
        business_days: number,
    ): SiteAttendanceCard {
        const resources_used = new Set(
            bookings
                .map((booking) => booking.asset_id)
                .filter((value) => !!value),
        ).size;
        const checked_in = bookings.filter(
            (booking) => booking.checked_in,
        ).length;
        return {
            id,
            bookings: bookings.length,
            attendance: bookings.length,
            daily_average: this.toFixed(
                bookings.length / Math.max(1, business_days),
            ),
            average_length: this.getAverageLength(bookings),
            unique_people: new Set(this.getBookingPeople(bookings)).size,
            resource_summary: resource_count
                ? `${resources_used} / ${resource_count}`
                : `${resources_used}`,
            status_label: 'COMMON.CHECKED_IN',
            status_count: checked_in,
            status_rate: this.toFixed(
                (checked_in / Math.max(1, bookings.length)) * 100,
            ),
        };
    }

    private buildVisitorCard(
        bookings: Booking[],
        business_days: number,
    ): SiteAttendanceCard {
        const checked_in = bookings.filter(
            (booking) => booking.checked_in,
        ).length;
        return {
            id: 'visitors',
            bookings: bookings.length,
            attendance: bookings.length,
            daily_average: this.toFixed(
                bookings.length / Math.max(1, business_days),
            ),
            average_length: this.getAverageLength(bookings),
            unique_people: new Set(this.getVisitorPeople(bookings)).size,
            resource_summary: '-',
            status_label: 'COMMON.CHECKED_IN',
            status_count: checked_in,
            status_rate: this.toFixed(
                (checked_in / Math.max(1, bookings.length)) * 100,
            ),
        };
    }

    private getAverageLength(bookings: { duration: number }[]) {
        const minutes = Math.floor(
            bookings.reduce((count, booking) => count + booking.duration, 0) /
                Math.max(1, bookings.length),
        );
        return formatDuration({ minutes }) || '0';
    }

    private getEventAttendance(booking: CalendarEvent) {
        const attendance = this.getPeopleCount(booking)?.max;
        if (typeof attendance === 'number') return attendance;
        return booking.attendees?.length || 0;
    }

    private getPeopleCount(booking: CalendarEvent) {
        return (booking.extension_data as any)?.people_count;
    }

    private getEventPeople(bookings: CalendarEvent[]) {
        return bookings
            .map((booking) => booking.host || booking.organiser?.email)
            .filter((value) => !!value);
    }

    private getBookingPeople(bookings: Booking[]) {
        return bookings
            .map(
                (booking) =>
                    booking.user_email ||
                    booking.booked_by_email ||
                    booking.user_id,
            )
            .filter((value) => !!value);
    }

    private getVisitorPeople(bookings: Booking[]) {
        return bookings
            .map(
                (booking) =>
                    booking.asset_id ||
                    booking.extension_data?.visitor_email ||
                    booking.asset_name ||
                    booking.extension_data?.visitor_name,
            )
            .filter((value) => !!value);
    }

    private toFixed(value: number) {
        return Math.round(value * 10) / 10;
    }
}
