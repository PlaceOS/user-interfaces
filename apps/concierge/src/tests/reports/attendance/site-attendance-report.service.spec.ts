import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    setNotifyOutlet,
    SettingsService,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as ts_client_mod from '@placeos/ts-client';
import { fromV1Mock, mockPage, mockReply } from '@placeos/ts-client/compat';
import {
    PlaceCalendarEvent,
    bookings as staff_bookings,
    events as staff_events,
    Booking as StaffBooking,
} from '@placeos/ts-client/staff';
import { SiteAttendanceReportService } from 'apps/concierge/src/app/reports/attendance/site-attendance-report.service';
import { serverData } from '../../mock-http';
import { captureDownloads } from '../download-capture.helper';

vi.mock('@placeos/ts-client', { spy: true });
vi.mock('@placeos/ts-client/staff', { spy: true });

/** Test data in the app shape: `date` and `date_end` in ms, `duration` in minutes */
interface TimedItem {
    date: number;
    date_end?: number;
    duration: number;
    [key: string]: unknown;
}

/** Start and end in seconds of the app shaped test data */
function period({ date, date_end, duration }: TimedItem) {
    const start = Math.floor(date / 1000);
    const end = date_end ? Math.floor(date_end / 1000) : start + duration * 60;
    return { start, end };
}

/** A staff API booking from the app shaped test data */
function staffBooking(item: TimedItem, id: number) {
    const { start, end } = period(item);
    const { date, date_end, duration, ...rest } = item;
    return serverData(StaffBooking, {
        ...rest,
        id,
        booking_start: start,
        booking_end: end,
    });
}

/** A staff API event from the app shaped test data */
function staffEvent(item: TimedItem) {
    const { start, end } = period(item);
    const { date, date_end, duration, ...rest } = item;
    return serverData(PlaceCalendarEvent, {
        ...rest,
        event_start: start,
        event_end: end,
    });
}

/** The input of each list request of the staff API */
const listInputs = () => [
    ...vi.mocked(staff_bookings.query).mock.calls.map(([input]) => input),
    ...vi.mocked(staff_events.query).mock.calls.map(([input]) => input),
];

describe('SiteAttendanceReportService', () => {
    let spectator: SpectatorService<SiteAttendanceReportService>;
    let features: string[];
    let attendance_include_weekends: boolean;
    let notify_open: ReturnType<typeof vi.fn>;
    let downloads: ReturnType<typeof captureDownloads>;
    // Booking payloads keyed by the `type` passed to `queryAllBookings`, and
    // the event payload for `queryAllEvents`. Both aggregation functions run
    // for real; only the staff API `bookings.query` and `events.query` are
    // stubbed here. The app shaped data goes through the app classes and the
    // schema, as data from the server does.
    let booking_data: Record<string, TimedItem[]>;
    let event_data: TimedItem[];
    let space_systems: any[];

    const day_1 = new Date('2026-04-06T12:00:00').valueOf();
    const day_2 = new Date('2026-04-07T12:00:00').valueOf();

    const createService = createServiceFactory({
        service: SiteAttendanceReportService,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn((name: string) => {
                    if (name === 'app.use_region') return false;
                    if (name === 'app.features') return features;
                    if (name === 'app.group_events_calendar') {
                        return 'group-events@example.com';
                    }
                    if (name === 'app.reports.attendance_include_weekends') {
                        return attendance_include_weekends;
                    }
                    return undefined;
                }),
            } as any),
            MockProvider(OrganisationService, {
                building: { id: 'building-1' },
                region: { id: 'region-1' },
                levelsForBuilding: vi.fn(() => [
                    { id: 'level-1' },
                    { id: 'level-2' },
                ]),
                levelsForRegion: vi.fn(() => [
                    { id: 'region-level-1' },
                    { id: 'region-level-2' },
                ]),
            } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        features = ['spaces', 'desks', 'parking', 'lockers', 'visitors'];
        attendance_include_weekends = false;
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        downloads = captureDownloads();

        booking_data = {
            desk: [
                {
                    asset_id: 'desk-1',
                    user_email: 'desk.user@example.com',
                    date: day_1,
                    duration: 480,
                    checked_in: true,
                },
            ],
            parking: [
                {
                    asset_id: 'parking-1',
                    user_email: 'parking.user@example.com',
                    date: day_1,
                    duration: 480,
                    checked_in: false,
                },
            ],
            locker: [
                {
                    asset_id: 'locker-1',
                    user_email: 'locker.user@example.com',
                    date: day_1,
                    duration: 1440,
                    checked_in: true,
                },
            ],
            visitor: [
                {
                    asset_id: 'visitor-1@example.com',
                    user_email: 'visitor.host@example.com',
                    extension_data: {},
                    date: day_1,
                    duration: 60,
                    checked_in: true,
                },
            ],
        };
        event_data = [
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
        ];
        space_systems = [{ id: 'room-1' }, { id: 'room-2' }, { id: 'room-3' }];

        // Add a synthetic numeric id so the real `unique(list, 'id')` in
        // `queryAllBookings` keeps every row.
        let booking_id = 0;
        vi.mocked(staff_bookings.query).mockImplementation(async (input) =>
            mockPage({
                data: (booking_data[input?.type] || []).map((item) =>
                    staffBooking(item, ++booking_id),
                ),
            }),
        );
        vi.mocked(staff_events.query).mockImplementation(async () =>
            mockReply(event_data.map(staffEvent)),
        );
        // requestSpacesForZone -> querySystems
        vi.mocked(ts_client_mod.systems.query).mockResolvedValue(
            mockPage({
                data: space_systems,
                next: undefined,
            } as any),
        );
        // parking/locker asset bootstrap + counts
        vi.mocked(ts_client_mod.asset_categories.query).mockResolvedValue(
            mockPage({
                data: [
                    { id: 'cat-park', name: '_PARKING_', hidden: true },
                    { id: 'cat-lock', name: '_LOCKERS_', hidden: true },
                ],
                next: undefined,
            } as any),
        );
        vi.mocked(ts_client_mod.asset_types.query).mockImplementation(
            fromV1Mock(
                ({ category_id }) =>
                    Promise.resolve({
                        data:
                            category_id === 'cat-park'
                                ? [
                                      {
                                          id: 'type-park',
                                          name: '_PARKING_SPACES_',
                                          category_id,
                                      },
                                  ]
                                : [
                                      {
                                          id: 'type-lock',
                                          name: '_LOCKERS_',
                                          category_id,
                                      },
                                  ],
                        next: undefined,
                    }) as any,
                ['...'],
                'page',
            ),
        );
        vi.mocked(ts_client_mod.assets.query).mockResolvedValue(
            mockPage({
                data: [],
                next: undefined,
            } as any),
        );
        vi.mocked(ts_client_mod.metadata.show).mockImplementation(
            fromV1Mock(
                (_zone: string, key: string) =>
                    Promise.resolve({
                        details:
                            key === 'desks'
                                ? [{ id: 'desk-a' }, { id: 'desk-b' }]
                                : [{ id: 'locker-a' }],
                    }) as any,
                ['id', 'name'],
                'data',
                'name',
            ),
        );
        spectator = createService();
    });

    afterEach(() => {
        downloads.restore();
        setNotifyOutlet(null, true);
    });

    it('should aggregate bookings into site attendance cards', async () => {
        spectator.service.setOptions({
            start: new Date('2026-04-06T12:00:00').valueOf(),
            end: new Date('2026-04-06T12:00:00').valueOf(),
        });

        await spectator.service.generateReport();
        const report = spectator.service.report();

        // The events API has no `limit`
        expect(staff_events.query).toHaveBeenCalledWith(
            expect.objectContaining({ zone_ids: 'building-1' }),
            expect.anything(),
        );
        expect(staff_bookings.query).toHaveBeenCalledWith(
            expect.objectContaining({
                zones: 'building-1',
                type: 'desk',
                include_checked_out: true,
            }),
        );
        expect(staff_bookings.query).toHaveBeenCalledWith(
            expect.objectContaining({
                zones: 'building-1',
                type: 'visitor',
                include_checked_out: true,
                limit: 200,
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
        booking_data = { desk: [], parking: [], locker: [], visitor: [] };
        event_data = [];
        space_systems = [];
        vi.mocked(ts_client_mod.systems.query).mockResolvedValue(
            mockPage({
                data: [],
                next: undefined,
            } as any),
        );
        vi.mocked(ts_client_mod.metadata.show).mockImplementation(
            fromV1Mock(
                () =>
                    ({
                        details: [],
                    }) as any,
                ['id', 'name'],
                'data',
                'name',
            ),
        );

        await spectator.service.generateReport();
        const report = spectator.service.report();

        expect(report.total_bookings).toBe(0);
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('should calculate all day desk average length from actual start and end times', async () => {
        features = ['desks'];
        spectator = createService();
        const start = new Date('2026-04-06T08:00:00').valueOf();
        const end = new Date('2026-04-06T18:00:00').valueOf();
        booking_data.desk = [
            {
                all_day: true,
                asset_id: 'desk-1',
                user_email: 'desk.user@example.com',
                date: start,
                date_end: end,
                duration: 24 * 60,
                checked_in: true,
            },
        ];
        spectator.service.setOptions({ start, end });

        await spectator.service.generateReport();
        const report = spectator.service.report();

        expect(report.cards.find((card) => card.id === 'desks')).toEqual(
            expect.objectContaining({
                average_length: '600 minutes',
                bookings: 1,
            }),
        );
    });

    it('should exclude system events from site attendance', async () => {
        features = ['spaces'];
        spectator = createService();
        event_data = [
            {
                host: 'host@example.com',
                date: day_1,
                duration: 60,
                attendees: [{ email: 'attendee@example.com' }],
                extension_data: { people_count: { max: 2 } },
                system: { id: 'room-1' },
            },
            {
                host: 'setup@example.com',
                date: day_1,
                duration: 30,
                attendees: [{ email: 'setup.attendee@example.com' }],
                extension_data: { people_count: { max: 2 } },
                // The API marks a setup or breakdown event in its body
                body: 'main_event_id: event-1',
                system: { id: 'room-1' },
                title: 'Setup',
            },
        ];

        await spectator.service.generateReport();
        const report = spectator.service.report();

        expect(report.total_attendance).toBe(2);
        expect(report.total_bookings).toBe(1);
        expect(report.unique_people).toBe(2);
        expect(report.hosts).toEqual([
            expect.objectContaining({ id: 'host@example.com' }),
        ]);
        expect(report.attendees).toEqual([
            expect.objectContaining({ id: 'attendee@example.com' }),
        ]);
        expect(report.cards.find((card) => card.id === 'events')).toEqual(
            expect.objectContaining({ attendance: 2, bookings: 1 }),
        );
    });

    it('should exclude rejected bookings and events from site attendance', async () => {
        features = ['spaces', 'desks'];
        spectator = createService();
        booking_data.desk = [
            {
                asset_id: 'desk-1',
                user_email: 'desk.user@example.com',
                date: day_1,
                duration: 480,
            },
            {
                asset_id: 'desk-2',
                user_email: 'rejected.desk@example.com',
                date: day_1,
                duration: 480,
                rejected: true,
            },
            {
                asset_id: 'desk-3',
                user_email: 'cancelled.desk@example.com',
                date: day_1,
                duration: 480,
                // The bookings API has no status: a cancelled booking is deleted
                deleted: true,
            },
        ];
        event_data = [
            {
                host: 'host@example.com',
                date: day_1,
                duration: 60,
                attendees: [{ email: 'attendee@example.com' }],
                extension_data: { people_count: { max: 2 } },
                system: { id: 'room-1' },
            },
            {
                host: 'rejected.host@example.com',
                date: day_1,
                duration: 60,
                // The room declined the event
                attendees: [
                    { email: 'rejected.attendee@example.com' },
                    {
                        email: 'room-2@example.com',
                        resource: true,
                        response_status: 'declined',
                    },
                ],
                extension_data: { people_count: { max: 2 } },
                system: { id: 'room-2' },
            },
            {
                host: 'cancelled.host@example.com',
                date: day_1,
                duration: 60,
                attendees: [{ email: 'cancelled.attendee@example.com' }],
                extension_data: { people_count: { max: 2 } },
                status: 'cancelled',
                system: { id: 'room-3' },
            },
        ];

        await spectator.service.generateReport();
        const report = spectator.service.report();

        expect(report.total_attendance).toBe(3);
        expect(report.total_bookings).toBe(2);
        expect(report.unique_people).toBe(3);
        expect(report.cards.find((card) => card.id === 'events')).toEqual(
            expect.objectContaining({ attendance: 2, bookings: 1 }),
        );
        expect(report.cards.find((card) => card.id === 'desks')).toEqual(
            expect.objectContaining({ attendance: 1, bookings: 1 }),
        );
        expect(report.hosts.map((host) => host.id)).toEqual([
            'desk.user@example.com',
            'host@example.com',
        ]);
        expect(report.attendees.map((attendee) => attendee.id)).toEqual([
            'attendee@example.com',
        ]);
    });

    it('should only request enabled resource bookings', async () => {
        features = ['desks'];
        spectator = createService();
        vi.clearAllMocks();

        await spectator.service.generateReport();
        const report = spectator.service.report();

        // events disabled -> query only ever called for the desk bookings
        expect(listInputs()).toHaveLength(1);
        expect(staff_bookings.query).toHaveBeenCalledWith(
            expect.objectContaining({
                type: 'desk',
                include_checked_out: true,
            }),
        );
        expect(staff_bookings.query).not.toHaveBeenCalledWith(
            expect.objectContaining({ type: 'visitor' }),
        );
        // parking disabled -> parking asset lookup never runs
        expect(ts_client_mod.assets.query).not.toHaveBeenCalled();
        expect(ts_client_mod.metadata.show).toHaveBeenCalledWith({
            id: 'level-1',
            name: 'desks',
        });
        expect(ts_client_mod.metadata.show).toHaveBeenCalledWith({
            id: 'level-2',
            name: 'desks',
        });
        expect(ts_client_mod.metadata.show).not.toHaveBeenCalledWith({
            id: expect.any(String),
            name: 'lockers-spaces',
        });
        expect(report.cards.map((card) => card.id)).toEqual(['desks']);
    });

    it('should sum unique site attendance per day', async () => {
        features = ['spaces', 'desks', 'parking'];
        spectator = createService();
        booking_data.desk = [
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
        ];
        booking_data.parking = [
            {
                asset_id: 'parking-1',
                user_email: 'parking.user@example.com',
                date: day_1,
                duration: 480,
            },
        ];
        event_data = [
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
                date: day_1,
                duration: 60,
                attendees: [{ email: 'attendee@example.com' }],
                extension_data: {},
                system: { id: 'room-2' },
            },
            {
                host: 'same.user@example.com',
                date: day_2,
                duration: 60,
                attendees: [{ email: 'attendee@example.com' }],
                extension_data: {},
                system: { id: 'room-1' },
            },
        ];
        spectator.service.setOptions({ start: day_1, end: day_2 });

        await spectator.service.generateReport();
        const report = spectator.service.report();

        expect(report.unique_people).toBe(4);
        expect(report.total_attendance).toBe(6);
        expect(report.cards.find((card) => card.id === 'events')).toEqual(
            expect.objectContaining({ attendance: 4, daily_average: 2 }),
        );
        expect(report.daily_attendance).toEqual([
            {
                date: '2026-04-06',
                events: 2,
                desks: 3,
                parking: 1,
                visitors: 0,
                total: 4,
            },
            {
                date: '2026-04-07',
                events: 2,
                desks: 1,
                parking: 0,
                visitors: 0,
                total: 2,
            },
        ]);
    });

    it('should exclude weekends from business days by default', async () => {
        features = ['desks'];
        spectator = createService();
        const saturday = new Date('2026-04-11T12:00:00').valueOf();
        const sunday = new Date('2026-04-12T12:00:00').valueOf();
        booking_data.desk = [
            {
                asset_id: 'desk-1',
                user_email: 'saturday.user@example.com',
                date: saturday,
                duration: 480,
            },
            {
                asset_id: 'desk-2',
                user_email: 'sunday.user@example.com',
                date: sunday,
                duration: 480,
            },
        ];
        spectator.service.setOptions({ start: saturday, end: sunday });

        await spectator.service.generateReport();
        const report = spectator.service.report();

        expect(report.business_days).toBe(1);
        expect(report.cards.find((card) => card.id === 'desks')).toEqual(
            expect.objectContaining({ attendance: 2, daily_average: 2 }),
        );
    });

    it('should include weekends in business days when enabled', async () => {
        features = ['desks'];
        attendance_include_weekends = true;
        spectator = createService();
        const saturday = new Date('2026-04-11T12:00:00').valueOf();
        const sunday = new Date('2026-04-12T12:00:00').valueOf();
        booking_data.desk = [
            {
                asset_id: 'desk-1',
                user_email: 'saturday.user@example.com',
                date: saturday,
                duration: 480,
            },
            {
                asset_id: 'desk-2',
                user_email: 'sunday.user@example.com',
                date: sunday,
                duration: 480,
            },
        ];
        spectator.service.setOptions({ start: saturday, end: sunday });

        await spectator.service.generateReport();
        const report = spectator.service.report();

        expect(report.business_days).toBe(2);
        expect(report.cards.find((card) => card.id === 'desks')).toEqual(
            expect.objectContaining({ attendance: 2, daily_average: 1 }),
        );
    });

    it('should export report data', () => {
        // The filename is built with date-fns `format`, which renders in the
        // machine's timezone, so the range is set the same way. A UTC instant
        // here names the previous day once the runner is west of Greenwich.
        spectator.service.setOptions({
            start: new Date(2026, 3, 6).valueOf(),
            end: new Date(2026, 3, 6, 23, 59, 59).valueOf(),
        });
        (spectator.service as any)._report.set({
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

        expect(downloads.filename).toMatch(
            /^report\+site-attendance\+2026-04-06/,
        );
    });
});
