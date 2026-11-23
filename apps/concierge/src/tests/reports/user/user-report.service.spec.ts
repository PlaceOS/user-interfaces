import { ApplicationRef, signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import {
    Booking,
    CalendarEvent,
    LocaleService,
    OrganisationService,
    SettingsService,
    setTranslationService,
    User,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { mockPage, mockReply } from '@placeos/ts-client/compat';
import {
    PlaceCalendarEvent,
    bookings as staff_bookings,
    events as staff_events,
    Booking as StaffBooking,
} from '@placeos/ts-client/staff';
import { UserReportService } from 'apps/concierge/src/app/reports/user/user-report.service';

import { captureDownloads } from '../download-capture.helper';

import { mockData } from '@placeos/common/tests';
import { serverData } from '../../mock-http';

vi.mock('@placeos/ts-client/staff', { spy: true });

const start = new Date('2026-04-06T00:00:00').valueOf();
const end = new Date('2026-04-07T23:59:59').valueOf();
const user = new User({ name: 'Jane Doe', email: 'Jane.Doe@place.tech' });
// Live events have the zones on the system, not on the room attendee
const room = {
    id: 'sys-1',
    email: 'room-1@place.tech',
    name: 'Room 1',
    zones: ['bld-1', 'lvl-1'],
};
const room_attendee = { email: room.email, name: room.name, resource: true };

/**
 * The staff API booking of an app booking. The API has no `asset_name`, so
 * the app reads it from `extension_data`.
 */
const toStaffBooking = (booking: Booking, id: number) =>
    mockData(StaffBooking, {
        id,
        booking_type: booking.booking_type,
        asset_id: booking.asset_id,
        booking_start: booking.booking_start,
        booking_end: booking.booking_end,
        zones: [...booking.zones],
        checked_in: booking.checked_in,
        approved: booking.approved,
        deleted: booking.deleted,
        extension_data: { asset_name: booking.asset_name },
    });

/** The staff API event of an app event in `room` */
const toStaffEvent = (event: CalendarEvent) =>
    serverData(PlaceCalendarEvent, {
        host: event.host,
        event_start: event.event_start,
        event_end: event.event_end,
        attendees: [room_attendee],
        system: room,
        extension_data: event.extension_data,
    });

describe('UserReportService', () => {
    let spectator: SpectatorService<UserReportService>;
    let bookings: Booking[];
    let events: CalendarEvent[];
    let downloads: ReturnType<typeof captureDownloads>;
    let use_region: boolean;
    /** Stands in for the settings signals that `SettingsService.get` reads */
    let settings_change: WritableSignal<number>;
    let active_building: WritableSignal<{ id: string }>;

    const createService = createServiceFactory({
        service: UserReportService,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn(() => {
                    settings_change();
                    return use_region;
                }),
            } as any),
        ],
    });

    async function settle() {
        await TestBed.inject(ApplicationRef).whenStable();
    }

    /** The input of each booking and event list request */
    function queries(): Record<string, unknown>[] {
        return [
            ...vi.mocked(staff_bookings.query).mock.calls,
            ...vi.mocked(staff_events.query).mock.calls,
        ].map(([input]) => ({ ...input }));
    }

    beforeEach(() => {
        vi.clearAllMocks();
        use_region = false;
        // New signals for each test, so a change does not reach the
        // service of an earlier test
        active_building = signal({ id: 'bld-1' });
        settings_change = signal(0);
        bookings = [];
        events = [];
        downloads = captureDownloads();
        // queryAllBookings -> bookings.query, queryAllEvents -> events.query.
        // The data goes through the schema, as data from the server does.
        vi.mocked(staff_bookings.query).mockImplementation(async (input) =>
            mockPage({
                data: bookings
                    .filter((_) => _.booking_type === input?.type)
                    .map((_, index) => toStaffBooking(_, index + 1)),
            }),
        );
        vi.mocked(staff_events.query).mockImplementation(async () =>
            mockReply(events.map(toStaffEvent)),
        );
        spectator = createService({
            providers: [
                MockProvider(OrganisationService, {
                    active_building,
                    active_region: signal({ id: 'region-1' }),
                    locationWithID: vi.fn((zones: string[]) => ({
                        label: (zones || []).join(' / '),
                    })),
                } as any),
            ],
        });
    });

    afterEach(() => {
        downloads.restore();
    });

    it('should not request bookings before a user is selected', async () => {
        spectator.service.setOptions({ start, end });
        await settle();
        expect(staff_bookings.query).not.toHaveBeenCalled();
        expect(staff_events.query).not.toHaveBeenCalled();
        expect(spectator.service.rows()).toEqual([]);
    });

    it('should request each booking type by email in the active building', async () => {
        spectator.service.setOptions({ start, end, user });
        await settle();
        const booking_queries = queries().filter((_) => _.type);
        expect(booking_queries.map((_) => _.type).sort()).toEqual([
            'desk',
            'locker',
            'parking',
        ]);
        for (const query of booking_queries) {
            expect(query.email).toBe(user.email);
            expect(query.zones).toBe('bld-1');
            expect(query.include_deleted).toBe(true);
        }
        const event_query = queries().find((_) => !_.type);
        expect(event_query.zone_ids).toBe('bld-1');
    });

    it('should use the active region when regions are in use', async () => {
        use_region = true;
        spectator.service.setOptions({ start, end, user });
        await settle();
        const zones = queries().map((_) => _.zones || _.zone_ids);
        expect(zones).toEqual(Array(4).fill('region-1'));
    });

    it('should not load again when settings change but the zone does not', async () => {
        spectator.service.setOptions({ start, end, user });
        await settle();
        settings_change.set(1);
        await settle();
        expect(queries().length).toBe(4);
    });

    it('should load again when the active building changes', async () => {
        spectator.service.setOptions({ start, end, user });
        await settle();
        active_building.set({ id: 'bld-2' });
        await settle();
        const booking_queries = queries().filter((_) => _.type);
        expect(booking_queries.at(-1).zones).toBe('bld-2');
    });

    it('should list bookings and hosted room events by date', async () => {
        bookings = [
            new Booking({
                booking_type: 'parking',
                asset_name: 'Bay 4',
                date: start + 3 * 60 * 60 * 1000,
                zones: ['bld-1', 'lvl-p'],
                checked_in: true,
                approved: true,
            }),
            new Booking({
                booking_type: 'desk',
                asset_name: 'Desk 12',
                date: start + 60 * 60 * 1000,
                zones: ['bld-1', 'lvl-1'],
                deleted: true,
            }),
        ];
        events = [
            // Host email differs only in case from the selected user
            new CalendarEvent({
                host: 'jane.doe@place.tech',
                date: start + 2 * 60 * 60 * 1000,
                attendees: [room_attendee as any],
                system: room as any,
            }),
            // The tenant forces the room as the calendar host
            new CalendarEvent({
                host: room.email,
                date: start + 4 * 60 * 60 * 1000,
                attendees: [room_attendee as any],
                system: room as any,
                extension_data: { host_override: 'jane.doe@place.tech' },
            } as any),
            // Room event of another host
            new CalendarEvent({
                host: 'other@place.tech',
                date: start,
                attendees: [room_attendee as any],
                system: room as any,
            }),
        ];
        spectator.service.setOptions({ start, end, user });
        await settle();
        const rows = spectator.service.rows();
        expect(rows.map((_) => [_.type, _.name, _.location])).toEqual([
            ['desk', 'Desk 12', 'bld-1 / lvl-1'],
            ['room', 'Room 1', 'bld-1 / lvl-1'],
            ['parking', 'Bay 4', 'bld-1 / lvl-p'],
            ['room', 'Room 1', 'bld-1 / lvl-1'],
        ]);
        expect(rows[0].status).toBe('Cancelled');
        expect(spectator.service.counts()).toEqual({
            desk: 1,
            parking: 1,
            locker: 0,
            room: 2,
        });
    });

    it('should update the row text when the locale changes', async () => {
        const mappings = signal<Record<string, string>>({
            'RESOURCE.DESK': 'Desk',
            'COMMON.YES': 'Yes',
        });
        setTranslationService({
            get: (key: string) => mappings()[key] || key,
        } as LocaleService);
        try {
            bookings = [
                new Booking({
                    booking_type: 'desk',
                    date: start + 60 * 60 * 1000,
                    checked_in: true,
                }),
            ];
            spectator.service.setOptions({ start, end, user });
            await settle();
            expect(spectator.service.rows()[0]).toMatchObject({
                type_name: 'Desk',
                checked_in: 'Yes',
            });
            mappings.set({ 'RESOURCE.DESK': 'Bureau', 'COMMON.YES': 'Oui' });
            expect(spectator.service.rows()[0]).toMatchObject({
                type_name: 'Bureau',
                checked_in: 'Oui',
            });
        } finally {
            setTranslationService(undefined);
        }
    });

    it('should download the listed bookings as CSV', async () => {
        bookings = [
            new Booking({
                booking_type: 'locker',
                asset_name: 'Locker 7',
                date: start + 60 * 60 * 1000,
                zones: ['lvl-1'],
            }),
        ];
        spectator.service.setOptions({ start, end, user });
        await settle();
        spectator.service.downloadReport();
        expect(downloads.filename).toBe(
            `report+user+${user.email}+2026-04-06+2026-04-07.csv`,
        );
        const text = await downloads.text();
        expect(text).toContain('Locker 7');
        expect(text).toContain('2026-04-06 01:00');
    });
});
