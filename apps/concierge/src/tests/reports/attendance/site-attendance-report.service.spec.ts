import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { firstValueFrom, of } from 'rxjs';
import { skip, take } from 'rxjs/operators';

import * as asset_mod from '@placeos/assets';
import * as booking_mod from '@placeos/bookings';
import * as common_mod from '@placeos/common';
import * as event_mod from '@placeos/events';
import * as ts_client_mod from '@placeos/ts-client';
import { SiteAttendanceReportService } from 'apps/concierge/src/app/reports/attendance/site-attendance-report.service';

jest.mock('@placeos/assets');
jest.mock('@placeos/bookings');
jest.mock('@placeos/common');
jest.mock('@placeos/events');
jest.mock('@placeos/ts-client');

describe('SiteAttendanceReportService', () => {
    let spectator: SpectatorService<SiteAttendanceReportService>;
    let features: string[];
    const day_1 = new Date('2026-04-06T12:00:00').valueOf();
    const day_2 = new Date('2026-04-07T12:00:00').valueOf();
    const createService = createServiceFactory({
        service: SiteAttendanceReportService,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn((name: string) => {
                    if (name === 'app.use_region') return false;
                    if (name === 'app.features') return features;
                    if (name === 'app.group_events_calendar') {
                        return 'group-events@example.com';
                    }
                    return undefined;
                }),
            } as any),
            MockProvider(OrganisationService, {
                building: { id: 'building-1' },
                region: { id: 'region-1' },
                levelsForBuilding: jest.fn(() => [
                    { id: 'level-1' },
                    { id: 'level-2' },
                ]),
                levelsForRegion: jest.fn(() => [
                    { id: 'region-level-1' },
                    { id: 'region-level-2' },
                ]),
            } as any),
        ],
    });

    beforeEach(() => {
        features = ['spaces', 'desks', 'parking', 'lockers', 'visitors'];
        (booking_mod.queryAllBookings as jest.Mock).mockImplementation(
            ({ type }) => {
                if (type === 'desk') {
                    return of([
                        {
                            asset_id: 'desk-1',
                            user_email: 'desk.user@example.com',
                            date: day_1,
                            duration: 480,
                            checked_in: true,
                        },
                    ]);
                }
                if (type === 'parking') {
                    return of([
                        {
                            asset_id: 'parking-1',
                            user_email: 'parking.user@example.com',
                            date: day_1,
                            duration: 480,
                            checked_in: false,
                        },
                    ]);
                }
                if (type === 'locker') {
                    return of([
                        {
                            asset_id: 'locker-1',
                            user_email: 'locker.user@example.com',
                            date: day_1,
                            duration: 1440,
                            checked_in: true,
                        },
                    ]);
                }
                return of([]);
            },
        );
        (booking_mod.queryBookings as jest.Mock).mockReturnValue(
            of([
                {
                    asset_id: 'visitor-1@example.com',
                    user_email: 'visitor.host@example.com',
                    extension_data: {},
                    date: day_1,
                    duration: 60,
                    checked_in: true,
                },
            ]),
        );
        (event_mod.queryAllEvents as jest.Mock).mockReturnValue(
            of([
                {
                    host: 'host-1@example.com',
                    date: day_1,
                    duration: 60,
                    attendees: [
                        { email: 'a' },
                        { email: 'b' },
                        { email: 'room-1@example.com' },
                    ],
                    extension_data: { people_count: { max: 4 } },
                    system: { id: 'room-1', email: 'room-1@example.com' },
                    location: 'Room 1',
                },
                {
                    host: 'host-2@example.com',
                    date: day_1,
                    duration: 30,
                    attendees: [],
                    extension_data: { people_count: { max: 0 } },
                    system: { id: 'room-2' },
                    location: 'Room 2',
                },
                {
                    calendar: 'group-events@example.com',
                    host: 'group.host@example.com',
                    date: day_1,
                    duration: 120,
                    attendees: [{ email: 'group.attendee@example.com' }],
                    extension_data: {
                        people_count: { max: 99 },
                        shared_event: true,
                    },
                    system: { id: 'room-3' },
                    location: 'Room 3',
                },
            ]),
        );
        (event_mod.requestSpacesForZone as jest.Mock).mockReturnValue(
            of([{ id: 'room-1' }, { id: 'room-2' }, { id: 'room-3' }]),
        );
        (asset_mod.queryParkingSpaces as jest.Mock).mockReturnValue(
            of([{ id: 'park-1' }, { id: 'park-2' }]),
        );
        (asset_mod.queryLockerAssets as jest.Mock).mockReturnValue(
            of([{ id: 'locker-a' }]),
        );
        (ts_client_mod.showMetadata as jest.Mock).mockImplementation(
            (_zone: string, key: string) =>
                of({
                    details:
                        key === 'desks'
                            ? [{ id: 'desk-a' }, { id: 'desk-b' }]
                            : [{ id: 'locker-a' }],
                }),
        );
        (common_mod.formatDuration as jest.Mock).mockImplementation(
            ({ minutes }) => `${minutes}m`,
        );
        (common_mod.downloadFile as jest.Mock).mockImplementation(() => null);
        (common_mod.jsonToCsv as jest.Mock).mockImplementation(() => 'csv');
        (common_mod.notifyError as jest.Mock).mockImplementation(() => null);
        (common_mod.i18n as jest.Mock).mockImplementation((key) => key);
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should aggregate bookings into site attendance cards', async () => {
        spectator.service.setOptions({
            start: new Date('2026-04-06T12:00:00').valueOf(),
            end: new Date('2026-04-06T12:00:00').valueOf(),
        });

        const report_promise = firstValueFrom(
            spectator.service.report$.pipe(skip(1), take(1)),
        );
        spectator.service.generateReport();
        const report = await report_promise;

        expect(event_mod.queryAllEvents).toHaveBeenCalledWith(
            expect.objectContaining({ zone_ids: 'building-1', limit: 1000 }),
        );
        expect(booking_mod.queryAllBookings).toHaveBeenCalledWith(
            expect.objectContaining({
                zones: 'building-1',
                type: 'desk',
                include_checked_out: true,
            }),
        );
        expect(booking_mod.queryBookings).toHaveBeenCalledWith(
            expect.objectContaining({
                zones: 'building-1',
                type: 'visitor',
                include_checked_out: true,
            }),
        );
        expect(report.total_attendance).toBe(9);
        expect(report.total_bookings).toBe(6);
        expect(report.active_types).toBe(5);
        expect(report.unique_people).toBe(8);
        expect(report.cards.find((card) => card.id === 'events')).toEqual(
            expect.objectContaining({
                attendance: 4,
                bookings: 2,
                unique_people: 4,
                resource_summary: '2 / 3',
                status_count: 1,
                status_rate: 50,
            }),
        );
        expect(report.cards.find((card) => card.id === 'desks')).toEqual(
            expect.objectContaining({
                attendance: 1,
                resource_summary: '1 / 4',
                status_count: 1,
            }),
        );
        expect(report.hosts).toEqual([
            expect.objectContaining({
                id: 'desk.user@example.com',
                desks: 1,
                total: 1,
            }),
            expect.objectContaining({
                id: 'host-1@example.com',
                events: 1,
                total: 1,
            }),
            expect.objectContaining({
                id: 'host-2@example.com',
                events: 1,
                total: 1,
            }),
            expect.objectContaining({
                id: 'locker.user@example.com',
                lockers: 1,
                total: 1,
            }),
            expect.objectContaining({
                id: 'parking.user@example.com',
                parking: 1,
                total: 1,
            }),
            expect.objectContaining({
                id: 'visitor.host@example.com',
                visitors: 1,
                total: 1,
            }),
        ]);
        expect(report.attendees).toEqual([
            expect.objectContaining({
                id: 'a',
                events: 1,
                total: 1,
            }),
            expect.objectContaining({
                id: 'b',
                events: 1,
                total: 1,
            }),
            expect.objectContaining({
                id: 'visitor-1@example.com',
                visitors: 1,
                total: 1,
            }),
        ]);
    });

    it('should notify when no bookings are found', async () => {
        (booking_mod.queryAllBookings as jest.Mock).mockReturnValue(of([]));
        (booking_mod.queryBookings as jest.Mock).mockReturnValue(of([]));
        (event_mod.queryAllEvents as jest.Mock).mockReturnValue(of([]));
        (event_mod.requestSpacesForZone as jest.Mock).mockReturnValue(of([]));
        (asset_mod.queryParkingSpaces as jest.Mock).mockReturnValue(of([]));
        (asset_mod.queryLockerAssets as jest.Mock).mockReturnValue(of([]));
        (ts_client_mod.showMetadata as jest.Mock).mockReturnValue(
            of({ details: [] }),
        );

        const report_promise = firstValueFrom(
            spectator.service.report$.pipe(skip(1), take(1)),
        );
        spectator.service.generateReport();
        const report = await report_promise;

        expect(report.total_bookings).toBe(0);
        expect(common_mod.notifyError).toHaveBeenCalledWith(
            'APP.CONCIERGE.REPORTS_LOAD_ERROR',
        );
    });

    it('should only request enabled resource bookings', async () => {
        features = ['desks'];
        spectator = createService();
        jest.clearAllMocks();

        const report_promise = firstValueFrom(
            spectator.service.report$.pipe(skip(1), take(1)),
        );
        spectator.service.generateReport();
        const report = await report_promise;

        expect(event_mod.queryAllEvents).not.toHaveBeenCalled();
        expect(booking_mod.queryBookings).not.toHaveBeenCalled();
        expect(asset_mod.queryParkingSpaces).not.toHaveBeenCalled();
        expect(ts_client_mod.showMetadata).toHaveBeenCalledWith(
            'level-1',
            'desks',
        );
        expect(ts_client_mod.showMetadata).toHaveBeenCalledWith(
            'level-2',
            'desks',
        );
        expect(ts_client_mod.showMetadata).not.toHaveBeenCalledWith(
            expect.any(String),
            'lockers-spaces',
        );
        expect(booking_mod.queryAllBookings).toHaveBeenCalledTimes(1);
        expect(booking_mod.queryAllBookings).toHaveBeenCalledWith(
            expect.objectContaining({
                type: 'desk',
                include_checked_out: true,
            }),
        );
        expect(report.cards.map((card) => card.id)).toEqual(['desks']);
    });

    it('should sum unique site attendance per day', async () => {
        features = ['spaces', 'desks'];
        spectator = createService();
        (booking_mod.queryAllBookings as jest.Mock).mockReturnValue(
            of([
                {
                    asset_id: 'desk-1',
                    user_email: 'same.user@example.com',
                    date: day_1,
                    duration: 480,
                },
                {
                    asset_id: 'desk-2',
                    user_email: 'same.user@example.com',
                    date: day_2,
                    duration: 480,
                },
                {
                    asset_id: 'desk-3',
                    user_email: 'desk.owner@example.com',
                    date: day_1,
                    duration: 480,
                    attendees: [{ email: 'attendee@example.com' }],
                },
            ]),
        );
        (event_mod.queryAllEvents as jest.Mock).mockReturnValue(
            of([
                {
                    host: 'same.user@example.com',
                    date: day_1,
                    duration: 60,
                    attendees: [{ email: 'attendee@example.com' }],
                    extension_data: {},
                    system: { id: 'room-1' },
                },
                {
                    host: 'same.user@example.com',
                    date: day_2,
                    duration: 60,
                    attendees: [{ email: 'attendee@example.com' }],
                    extension_data: {},
                    system: { id: 'room-1' },
                },
            ]),
        );
        spectator.service.setOptions({ start: day_1, end: day_2 });

        const report_promise = firstValueFrom(
            spectator.service.report$.pipe(skip(1), take(1)),
        );
        spectator.service.generateReport();
        const report = await report_promise;

        expect(report.unique_people).toBe(3);
        expect(report.total_attendance).toBe(5);
        expect(report.cards.find((card) => card.id === 'events')).toEqual(
            expect.objectContaining({ attendance: 4, daily_average: 2 }),
        );
    });

    it('should export report data', () => {
        spectator.service.setOptions({
            start: new Date('2026-04-06T00:00:00Z').valueOf(),
            end: new Date('2026-04-06T23:59:59Z').valueOf(),
        });
        (spectator.service as any)._report.next({
            business_days: 1,
            total_attendance: 8,
            total_bookings: 6,
            active_types: 5,
            unique_people: 6,
            cards: [
                {
                    id: 'events',
                    attendance: 4,
                    bookings: 2,
                    daily_average: 4,
                    average_length: '45m',
                    unique_people: 2,
                    resource_summary: '2 / 3',
                    status_label: 'APP.CONCIERGE.REPORTS_NO_SHOWS',
                    status_count: 1,
                    status_rate: 50,
                },
            ],
            hosts: [],
            attendees: [],
        });

        spectator.service.downloadReport();

        expect(common_mod.jsonToCsv).toHaveBeenCalled();
        expect(common_mod.downloadFile).toHaveBeenCalledWith(
            expect.stringMatching(/^report\+site-attendance\+2026-04-06/),
            'csv',
        );
    });
});
