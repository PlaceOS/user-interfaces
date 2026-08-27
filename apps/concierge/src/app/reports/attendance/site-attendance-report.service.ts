import { formatDate } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';
import { queryLockerAssets, queryParkingSpaces } from '@placeos/assets';
import { queryAllBookings } from '@placeos/bookings';
import {
    Booking,
    CalendarEvent,
    downloadFile,
    formatDuration,
    i18n,
    jsonToCsv,
    nextValueFrom,
    notifyError,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { queryAllEvents, requestSpacesForZone } from '@placeos/events';
import { showMetadata } from '@placeos/ts-client';
import {
    differenceInBusinessDays,
    differenceInCalendarDays,
    eachDayOfInterval,
    endOfDay,
    format,
    getUnixTime,
    isSameDay,
    startOfDay,
} from 'date-fns';

import {
    activeReportBookings,
    activeReportEvents,
    reportBookingDuration,
} from '../reports.utilities';

export interface ReportOptions {
    zones?: string[];
    start?: number;
    end?: number;
}

export interface SiteAttendanceCard {
    id: SiteAttendanceResource;
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

export interface SiteAttendancePersonRow {
    id: string;
    name: string;
    events: number;
    desks: number;
    parking: number;
    lockers: number;
    visitors: number;
    total: number;
}

export interface SiteAttendanceDailyRow {
    date: string;
    events: number;
    desks: number;
    parking: number;
    visitors: number;
    total: number;
}

export interface SiteAttendanceReport {
    business_days: number;
    total_attendance: number;
    total_bookings: number;
    active_types: number;
    unique_people: number;
    daily_attendance: SiteAttendanceDailyRow[];
    cards: SiteAttendanceCard[];
    hosts: SiteAttendancePersonRow[];
    attendees: SiteAttendancePersonRow[];
}

type SiteAttendanceResource =
    | 'events'
    | 'desks'
    | 'parking'
    | 'lockers'
    | 'visitors';

type BookingResource = Exclude<SiteAttendanceResource, 'events' | 'visitors'>;

interface SiteAttendancePerson {
    id: string;
    name: string;
}

interface EnabledAttendanceResources {
    events: boolean;
    desks: boolean;
    parking: boolean;
    lockers: boolean;
    visitors: boolean;
}

interface AttendanceReportResult {
    events: CalendarEvent[];
    desks: Booking[];
    parking: Booking[];
    lockers: Booking[];
    visitors: Booking[];
    room_count: number;
    desk_count: number;
    parking_count: number;
    locker_count: number;
    enabled: EnabledAttendanceResources;
}

export const EMPTY_REPORT: SiteAttendanceReport = {
    business_days: 0,
    total_attendance: 0,
    total_bookings: 0,
    active_types: 0,
    unique_people: 0,
    daily_attendance: [],
    cards: [],
    hosts: [],
    attendees: [],
};

@Injectable({
    providedIn: 'root',
})
export class SiteAttendanceReportService {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    private _loading = signal(false);
    private _options = signal<ReportOptions>({
        start: startOfDay(Date.now()).valueOf(),
        end: endOfDay(Date.now()).valueOf(),
        zones: [],
    });
    private _report = signal<SiteAttendanceReport>(EMPTY_REPORT);
    /** Token used to discard responses from superseded report loads */
    private _load_token = 0;

    public readonly loading = this._loading.asReadonly();
    public readonly options = this._options.asReadonly();
    public readonly report = this._report.asReadonly();

    public setOptions(options: Partial<ReportOptions>) {
        // Cancel any in-flight load when the options change
        this._load_token++;
        this._options.set({ ...this._options(), ...options });
    }

    public async generateReport() {
        const options = this._options();
        const start = startOfDay(options.start || Date.now());
        const end = endOfDay(options.end || start.valueOf());
        const booking_zones = this.getBookingZones(options.zones);
        const level_ids = this.getLevelIds(options.zones);
        const space_zones = this.getSpaceZones(options.zones);
        const enabled = this.getEnabledResources();
        const query = {
            period_start: getUnixTime(start),
            period_end: getUnixTime(end),
        };
        const bookings_query = {
            ...query,
            include_checked_out: true,
        };
        const token = ++this._load_token;
        this._loading.set(true);
        try {
            const [
                events,
                desks,
                parking,
                lockers,
                visitors,
                room_count,
                desk_count,
                parking_count,
                locker_count,
            ] = await Promise.all([
                enabled.events
                    ? queryAllEvents({
                          ...query,
                          zone_ids: booking_zones,
                          limit: 200,
                      }).catch(() => [])
                    : Promise.resolve([]),
                enabled.desks
                    ? queryAllBookings({
                          ...bookings_query,
                          zones: booking_zones,
                          type: 'desk',
                          limit: 200,
                      }).catch(() => [])
                    : Promise.resolve([]),
                enabled.parking
                    ? queryAllBookings({
                          ...bookings_query,
                          zones: booking_zones,
                          type: 'parking',
                          limit: 200,
                      }).catch(() => [])
                    : Promise.resolve([]),
                enabled.lockers
                    ? queryAllBookings({
                          ...bookings_query,
                          zones: booking_zones,
                          type: 'locker',
                          limit: 200,
                      }).catch(() => [])
                    : Promise.resolve([]),
                enabled.visitors
                    ? queryAllBookings({
                          ...bookings_query,
                          type: 'visitor',
                          zones: booking_zones,
                          limit: 200,
                      }).catch(() => [])
                    : Promise.resolve([]),
                enabled.events
                    ? this.getRoomCount(space_zones)
                    : Promise.resolve(0),
                enabled.desks
                    ? this.getDeskCount(level_ids)
                    : Promise.resolve(0),
                enabled.parking
                    ? this.getParkingCount(level_ids)
                    : Promise.resolve(0),
                enabled.lockers
                    ? this.getLockerCount(level_ids)
                    : Promise.resolve(0),
            ]);
            // Discard the response if the options changed before it completed
            if (token !== this._load_token) return;
            const report = this.buildReport(
                {
                    events,
                    desks,
                    parking,
                    lockers,
                    visitors,
                    room_count,
                    desk_count,
                    parking_count,
                    locker_count,
                    enabled,
                },
                start.valueOf(),
                end.valueOf(),
            );
            if (!report.total_bookings) {
                notifyError(i18n('APP.CONCIERGE.REPORTS_LOAD_ERROR'));
            }
            this._report.set(report);
        } finally {
            if (token === this._load_token) this._loading.set(false);
        }
    }

    public downloadReport() {
        const report = this._report();
        const { start, end } = this._options();
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

    private getEnabledResources(): EnabledAttendanceResources {
        const features = this._settings.get('app.features') || [];
        return {
            events: features.includes('spaces'),
            desks: features.includes('desks'),
            parking: features.includes('parking'),
            lockers: features.includes('lockers'),
            visitors: features.includes('visitors'),
        };
    }

    private async getRoomCount(zones: string[]) {
        if (!zones.length) return 0;
        const space_lists = await Promise.all(
            zones.map((zone) =>
                nextValueFrom(requestSpacesForZone(zone)).catch(() => []),
            ),
        );
        const space_ids = new Set(
            space_lists
                .flat()
                .map((space) => space.id)
                .filter((id) => !!id),
        );
        return space_ids.size;
    }

    private async getDeskCount(zones: string[]) {
        if (!zones.length) return 0;
        const counts = await Promise.all(
            zones.map((zone) =>
                showMetadata(zone, 'desks')
                    .then((metadata) => metadata.details?.length || 0)
                    .catch(() => 0),
            ),
        );
        return counts.reduce((count, value) => count + value, 0);
    }

    private async getParkingCount(zones: string[]) {
        if (!zones.length) return 0;
        const counts = await Promise.all(
            zones.map((zone) =>
                queryParkingSpaces(zone)
                    .then((spaces) => spaces.length || 0)
                    .catch(() => 0),
            ),
        );
        return counts.reduce((count, value) => count + value, 0);
    }

    private async getLockerCount(zones: string[]) {
        if (!zones.length) return 0;
        const counts = await Promise.all(
            zones.map((zone) =>
                queryLockerAssets(zone)
                    .then((lockers) => lockers.length || 0)
                    .catch(() => 0),
            ),
        );
        return counts.reduce((count, value) => count + value, 0);
    }

    private buildReport(
        result: AttendanceReportResult,
        start: number,
        end: number,
    ): SiteAttendanceReport {
        const report_result = {
            ...result,
            events: this.getReportEvents(result.events || []),
            desks: activeReportBookings(result.desks || []),
            parking: activeReportBookings(result.parking || []),
            lockers: activeReportBookings(result.lockers || []),
            visitors: activeReportBookings(result.visitors || []),
        };
        const business_days = this.getBusinessDays(start, end);
        const cards = this.buildCards(report_result, business_days);
        const unique_people = this.getUniquePeople(report_result);
        return {
            business_days,
            total_attendance: this.getDailyUniqueAttendance(report_result),
            total_bookings: cards.reduce(
                (count, card) => count + card.bookings,
                0,
            ),
            active_types: cards.filter((card) => card.bookings > 0).length,
            unique_people,
            daily_attendance: this.buildDailyAttendance(
                report_result,
                start,
                end,
            ),
            cards,
            hosts: this.buildHostRows(report_result),
            attendees: this.buildAttendeeRows(report_result),
        };
    }

    private getReportEvents(events: CalendarEvent[]) {
        return activeReportEvents(events).filter(
            (event) => !event.is_system_event && !this.isGroupEvent(event),
        );
    }

    private isGroupEvent(event: CalendarEvent) {
        const group_events_calendar = this._settings.get(
            'app.group_events_calendar',
        );
        return (
            !!event.extension_data?.shared_event ||
            (!!group_events_calendar &&
                event.calendar === group_events_calendar)
        );
    }

    private getBusinessDays(start: number, end: number) {
        if (!this._settings.get('app.reports.attendance_include_weekends')) {
            return (
                differenceInBusinessDays(
                    endOfDay(end).valueOf() + 1,
                    startOfDay(start),
                ) || 1
            );
        }
        return Math.max(
            1,
            differenceInCalendarDays(endOfDay(end), startOfDay(start)) + 1,
        );
    }

    private buildCards(
        result: AttendanceReportResult,
        business_days: number,
    ): SiteAttendanceCard[] {
        const cards: SiteAttendanceCard[] = [];
        if (result.enabled.events) {
            cards.push(
                this.buildEventCard(
                    result.events || [],
                    result.room_count || 0,
                    business_days,
                ),
            );
        }
        if (result.enabled.desks) {
            cards.push(
                this.buildBookingCard(
                    'desks',
                    result.desks || [],
                    result.desk_count || 0,
                    business_days,
                ),
            );
        }
        if (result.enabled.parking) {
            cards.push(
                this.buildBookingCard(
                    'parking',
                    result.parking || [],
                    result.parking_count || 0,
                    business_days,
                ),
            );
        }
        if (result.enabled.lockers) {
            cards.push(
                this.buildBookingCard(
                    'lockers',
                    result.lockers || [],
                    result.locker_count || 0,
                    business_days,
                ),
            );
        }
        if (result.enabled.visitors) {
            cards.push(
                this.buildVisitorCard(result.visitors || [], business_days),
            );
        }
        return cards;
    }

    private getUniquePeople(result: AttendanceReportResult) {
        return new Set<string>([
            ...this.getEventPeople(result.events || []),
            ...this.getEventAttendeePeople(result.events || []),
            ...this.getBookingPeople(result.desks || []),
            ...this.getBookingPeople(result.parking || []),
            ...this.getBookingPeople(result.lockers || []),
            ...this.getVisitorPeople(result.visitors || []),
        ]).size;
    }

    private getDailyUniqueAttendance(result: AttendanceReportResult) {
        const daily_people = new Map<string, Set<string>>();

        for (const booking of result.events || []) {
            for (const person of this.getEventAttendancePeople(booking)) {
                this.addDailyPerson(daily_people, booking.date, person.id);
            }
        }
        for (const booking of result.desks || []) {
            for (const person of this.getBookingAttendancePeople(booking)) {
                this.addDailyPerson(daily_people, booking.date, person.id);
            }
        }
        for (const booking of result.parking || []) {
            for (const person of this.getBookingAttendancePeople(booking)) {
                this.addDailyPerson(daily_people, booking.date, person.id);
            }
        }
        for (const booking of result.lockers || []) {
            for (const person of this.getBookingAttendancePeople(booking)) {
                this.addDailyPerson(daily_people, booking.date, person.id);
            }
        }
        for (const booking of result.visitors || []) {
            for (const person of this.getVisitorAttendancePeople(booking)) {
                this.addDailyPerson(daily_people, booking.date, person.id);
            }
        }

        return this.countDailyPeople(daily_people);
    }

    private buildDailyAttendance(
        result: AttendanceReportResult,
        start: number,
        end: number,
    ): SiteAttendanceDailyRow[] {
        const events = new Map<string, Set<string>>();
        const desks = new Map<string, Set<string>>();
        const parking = new Map<string, Set<string>>();
        const visitors = new Map<string, Set<string>>();
        const total = new Map<string, Set<string>>();

        this.addDailyAttendance(events, total, result.events || [], (booking) =>
            this.getEventAttendancePeople(booking),
        );
        this.addDailyAttendance(desks, total, result.desks || [], (booking) =>
            this.getBookingAttendancePeople(booking),
        );
        this.addDailyAttendance(
            parking,
            total,
            result.parking || [],
            (booking) => this.getBookingAttendancePeople(booking),
        );
        this.addDailyAttendance(
            new Map<string, Set<string>>(),
            total,
            result.lockers || [],
            (booking) => this.getBookingAttendancePeople(booking),
        );
        this.addDailyAttendance(
            visitors,
            total,
            result.visitors || [],
            (booking) => this.getVisitorAttendancePeople(booking),
        );

        return eachDayOfInterval({
            start: startOfDay(start),
            end: endOfDay(end),
        }).map((day) => {
            const date = format(day, 'yyyy-MM-dd');
            return {
                date,
                events: events.get(date)?.size || 0,
                desks: desks.get(date)?.size || 0,
                parking: parking.get(date)?.size || 0,
                visitors: visitors.get(date)?.size || 0,
                total: total.get(date)?.size || 0,
            };
        });
    }

    private addDailyAttendance<T extends { date: number }>(
        daily_people: Map<string, Set<string>>,
        total_people: Map<string, Set<string>>,
        bookings: T[],
        get_people: (booking: T) => SiteAttendancePerson[],
    ) {
        for (const booking of bookings) {
            for (const person of get_people(booking)) {
                this.addDailyPerson(daily_people, booking.date, person.id);
                this.addDailyPerson(total_people, booking.date, person.id);
            }
        }
    }

    private addDailyPerson(
        daily_people: Map<string, Set<string>>,
        date: number,
        id: string,
    ) {
        if (!date || !id) return;
        const day = format(date, 'yyyy-MM-dd');
        const people = daily_people.get(day) || new Set<string>();
        people.add(id.toLowerCase());
        daily_people.set(day, people);
    }

    private countDailyPeople(daily_people: Map<string, Set<string>>) {
        return [...daily_people.values()].reduce(
            (total, people) => total + people.size,
            0,
        );
    }

    private buildHostRows(result: AttendanceReportResult) {
        const rows = new Map<string, SiteAttendancePersonRow>();

        for (const booking of result.events || []) {
            this.addPersonBooking(rows, this.getEventPerson(booking), 'events');
        }
        for (const booking of result.desks || []) {
            this.addPersonBooking(
                rows,
                this.getBookingPerson(booking),
                'desks',
            );
        }
        for (const booking of result.parking || []) {
            this.addPersonBooking(
                rows,
                this.getBookingPerson(booking),
                'parking',
            );
        }
        for (const booking of result.lockers || []) {
            this.addPersonBooking(
                rows,
                this.getBookingPerson(booking),
                'lockers',
            );
        }
        for (const booking of result.visitors || []) {
            this.addPersonBooking(
                rows,
                this.getBookingPerson(booking),
                'visitors',
            );
        }
        return this.sortPersonRows(rows);
    }

    private buildAttendeeRows(result: AttendanceReportResult) {
        const rows = new Map<string, SiteAttendancePersonRow>();

        for (const booking of result.events || []) {
            for (const attendee of this.getEventAttendees(booking)) {
                this.addPersonBooking(rows, attendee, 'events');
            }
        }
        for (const booking of result.desks || []) {
            for (const attendee of this.getBookingAttendees(booking)) {
                this.addPersonBooking(rows, attendee, 'desks');
            }
        }
        for (const booking of result.parking || []) {
            for (const attendee of this.getBookingAttendees(booking)) {
                this.addPersonBooking(rows, attendee, 'parking');
            }
        }
        for (const booking of result.lockers || []) {
            for (const attendee of this.getBookingAttendees(booking)) {
                this.addPersonBooking(rows, attendee, 'lockers');
            }
        }
        for (const booking of result.visitors || []) {
            this.addPersonBooking(
                rows,
                this.getVisitorPerson(booking),
                'visitors',
            );
        }
        return this.sortPersonRows(rows);
    }

    private addPersonBooking(
        rows: Map<string, SiteAttendancePersonRow>,
        person: SiteAttendancePerson,
        type: SiteAttendanceResource,
    ) {
        if (!person.id) return;
        const id = person.id.toLowerCase();
        const row = rows.get(id) || this.createPersonRow(person, id);
        row[type] += 1;
        row.total += 1;
        rows.set(id, row);
    }

    private createPersonRow(
        person: SiteAttendancePerson,
        id: string,
    ): SiteAttendancePersonRow {
        return {
            id,
            name: person.name || person.id,
            events: 0,
            desks: 0,
            parking: 0,
            lockers: 0,
            visitors: 0,
            total: 0,
        };
    }

    private sortPersonRows(rows: Map<string, SiteAttendancePersonRow>) {
        return [...rows.values()].sort(
            (a, b) => b.total - a.total || a.name.localeCompare(b.name),
        );
    }

    private buildEventCard(
        bookings: CalendarEvent[],
        resource_count: number,
        business_days: number,
    ): SiteAttendanceCard {
        const attendance = this.getDailyEventAttendance(bookings);
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
            unique_people: new Set([
                ...this.getEventPeople(bookings),
                ...this.getEventAttendeePeople(bookings),
            ]).size,
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
        id: BookingResource,
        bookings: Booking[],
        resource_count: number,
        business_days: number,
    ): SiteAttendanceCard {
        const attendance = this.getDailyBookingAttendance(bookings);
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
            attendance,
            daily_average: this.toFixed(
                attendance / Math.max(1, business_days),
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
        const attendance = this.getDailyVisitorAttendance(bookings);
        const checked_in = bookings.filter(
            (booking) => booking.checked_in,
        ).length;
        return {
            id: 'visitors',
            bookings: bookings.length,
            attendance,
            daily_average: this.toFixed(
                attendance / Math.max(1, business_days),
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

    private getAverageLength(
        bookings: ({ date: number; duration: number; date_end?: number } & {
            all_day?: boolean;
        })[],
    ) {
        const minutes = Math.floor(
            bookings.reduce(
                (count, booking) => count + reportBookingDuration(booking),
                0,
            ) / Math.max(1, bookings.length),
        );
        return formatDuration({ minutes }) || '0';
    }

    private getDailyEventAttendance(bookings: CalendarEvent[]) {
        const daily_people = new Map<string, Set<string>>();
        for (const booking of bookings) {
            for (const person of this.getEventAttendancePeople(booking)) {
                this.addDailyPerson(daily_people, booking.date, person.id);
            }
        }
        return this.countDailyPeople(daily_people);
    }

    private getDailyBookingAttendance(bookings: Booking[]) {
        const daily_people = new Map<string, Set<string>>();
        for (const booking of bookings) {
            for (const person of this.getBookingAttendancePeople(booking)) {
                this.addDailyPerson(daily_people, booking.date, person.id);
            }
        }
        return this.countDailyPeople(daily_people);
    }

    private getDailyVisitorAttendance(bookings: Booking[]) {
        const daily_people = new Map<string, Set<string>>();
        for (const booking of bookings) {
            for (const person of this.getVisitorAttendancePeople(booking)) {
                this.addDailyPerson(daily_people, booking.date, person.id);
            }
        }
        return this.countDailyPeople(daily_people);
    }

    private getPeopleCount(booking: CalendarEvent) {
        return (booking.extension_data as any)?.people_count;
    }

    private getEventPeople(bookings: CalendarEvent[]) {
        return bookings
            .map((booking) => this.getEventPerson(booking).id)
            .filter((value) => !!value);
    }

    private getEventAttendeePeople(bookings: CalendarEvent[]) {
        return bookings
            .flatMap((booking) => this.getEventAttendees(booking))
            .map((person) => person.id)
            .filter((value) => !!value);
    }

    private getEventAttendancePeople(booking: CalendarEvent) {
        return [
            this.getEventPerson(booking),
            ...this.getEventAttendees(booking),
        ];
    }

    private getBookingAttendancePeople(booking: Booking) {
        return [
            this.getBookingPerson(booking),
            ...this.getBookingAttendees(booking),
        ];
    }

    private getVisitorAttendancePeople(booking: Booking) {
        return [this.getBookingPerson(booking), this.getVisitorPerson(booking)];
    }

    private getBookingPeople(bookings: Booking[]) {
        return bookings
            .map((booking) => this.getBookingPerson(booking).id)
            .filter((value) => !!value);
    }

    private getEventPerson(booking: CalendarEvent) {
        const id = booking.host || booking.organiser?.email || '';
        return this.isRoomResource(booking, id)
            ? { id: '', name: '' }
            : { id, name: booking.organiser?.name || id };
    }

    private getBookingPerson(booking: Booking) {
        const id =
            booking.user_email ||
            booking.booked_by_email ||
            booking.user_id ||
            '';
        return { id, name: booking.user_name || booking.booked_by_name || id };
    }

    private getEventAttendees(booking: CalendarEvent) {
        const host_id = this.getEventPerson(booking).id.toLowerCase();
        return (booking.attendees || [])
            .map((user) => this.getUserPerson(user))
            .filter(
                (person) =>
                    person.id &&
                    person.id.toLowerCase() !== host_id &&
                    !this.isRoomResource(booking, person.id),
            );
    }

    private getBookingAttendees(booking: Booking) {
        return (booking.attendees || [])
            .map((user) => this.getUserPerson(user))
            .filter((person) => !!person.id);
    }

    private isRoomResource(booking: CalendarEvent, id = '') {
        const value = id.toLowerCase();
        if (!value) return false;
        return this.getRoomResourceIds(booking).includes(value);
    }

    private getRoomResourceIds(booking: CalendarEvent) {
        return [booking.system, ...(booking.resources || [])]
            .flatMap((resource) => [resource?.id, resource?.email])
            .filter((value) => !!value)
            .map((value) => value.toLowerCase());
    }

    private getUserPerson(user: {
        email?: string;
        id?: string;
        name?: string;
    }) {
        const id = user.email || user.id || user.name || '';
        return { id, name: user.name || id };
    }

    private getVisitorPerson(booking: Booking) {
        const id =
            booking.asset_id ||
            booking.extension_data?.visitor_email ||
            booking.asset_name ||
            booking.extension_data?.visitor_name ||
            '';
        return {
            id,
            name:
                booking.asset_name ||
                booking.extension_data?.visitor_name ||
                id,
        };
    }

    private getVisitorPeople(bookings: Booking[]) {
        return bookings
            .map((booking) => this.getVisitorPerson(booking).id)
            .filter((value) => !!value);
    }

    private toFixed(value: number) {
        return Math.round(value * 10) / 10;
    }
}
