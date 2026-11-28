import { EventEmitter, WritableSignal, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    SpectatorService,
    createServiceFactory,
} from '@ngneat/spectator/vitest';
import {
    Booking,
    OrganisationService,
    SettingsService,
    StaffUser,
    setCurrentUser,
    setNotifyOutlet,
    setTimeInTimezone,
} from '@placeos/common';
import { getUnixTime } from 'date-fns';
import { NEVER, of } from 'rxjs';

import { mockData } from '@placeos/common/tests';
import * as ts_client from '@placeos/ts-client';
import { fromV1Mock, mockPage, mockReply } from '@placeos/ts-client/compat';
import { Booking as StaffBooking, bookings } from '@placeos/ts-client/staff';
import { UserPipe } from '@placeos/users';
import { MockProvider } from 'ng-mocks';
import { ParkingBookingModalComponent } from '../../app/parking/parking-booking-modal.component';
import { ParkingRequestModalComponent } from '../../app/parking/parking-request-modal.component';
import { ParkingSpaceModalComponent } from '../../app/parking/parking-space-modal.component';
import {
    ParkingStateService,
    type ParkingSpace,
} from '../../app/parking/parking-state.service';
import { BookingHistoryModalComponent } from '../../app/ui/booking-history-modal.component';
import { buildingDayEnd, buildingDayStart } from '../../app/ui/building-time';
import { captureDownloads } from '../reports/download-capture.helper';

vi.mock('@placeos/ts-client', { spy: true });
vi.mock('@placeos/ts-client/staff', { spy: true });

/** A staff API booking reply. Staff API booking IDs are integers */
const bookingReply = (id = 1) => mockReply(mockData(StaffBooking, { id }));

const CATEGORY_STUB = {
    data: [{ id: 'cat-parking', name: '_PARKING_', hidden: true }],
    total: 1,
    next: null,
};
const TYPE_STUB = {
    data: [
        {
            id: 'type-parking-spaces',
            name: '_PARKING_SPACES_',
            category_id: 'cat-parking',
        },
        {
            id: 'type-parking-users',
            name: '_PARKING_USERS_',
            category_id: 'cat-parking',
        },
        {
            id: 'type-parking-fleet',
            name: '_PARKING_FLEET_VEHICLES_',
            category_id: 'cat-parking',
        },
    ],
    total: 3,
    next: null,
};

describe('ParkingStateService', () => {
    let spectator: SpectatorService<ParkingStateService>;
    let active_building: WritableSignal<unknown>;
    let active_region: WritableSignal<unknown>;
    let current_building: any;
    let settings_map: Record<string, any>;
    let notify_open: ReturnType<typeof vi.fn>;

    const organisation_service: any = {
        organisation: { id: 'org-1' },
        region: { id: 'region-1' },
        initialised: signal(true),
        refreshing: signal(false),
        levels: [],
        buildingsForRegion: vi.fn(() => []),
        levelsForBuilding: vi.fn((bld) =>
            organisation_service.levels.filter(
                (level) => level.parent_id === (bld || current_building)?.id,
            ),
        ),
        get building() {
            return current_building;
        },
    };

    const createService = createServiceFactory({
        service: ParkingStateService,
        providers: [
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(SettingsService, {
                get: vi.fn((name: string) => settings_map[name]),
                signal: vi.fn((name: string, default_value: any) =>
                    signal(settings_map[`app.${name}`] ?? default_value),
                ),
            }),
            MockProvider(OrganisationService, organisation_service),
        ],
    });

    /** Reset ts-client boundary spies with safe defaults for service bootstrap */
    const stubTsClient = () => {
        (ts_client.asset_categories.query as any).mockReset();
        (ts_client.asset_categories.query as any).mockResolvedValue(
            mockPage(CATEGORY_STUB),
        );
        (ts_client.asset_types.query as any).mockReset();
        (ts_client.asset_types.query as any).mockResolvedValue(
            mockPage(TYPE_STUB),
        );
        (ts_client.assets.query as any).mockReset();
        (ts_client.assets.query as any).mockResolvedValue(
            mockPage({
                data: [],
                total: 0,
                next: null,
            }),
        );
        // @placeos/bookings calls the staff API booking operations
        for (const op of [
            bookings.query,
            bookings.booked,
            bookings.create,
            bookings.update,
            bookings.updateInstance,
            bookings.approve,
            bookings.approveInstance,
            bookings.reject,
            bookings.rejectInstance,
            bookings.destroy,
            bookings.destroyInstance,
        ]) {
            vi.mocked(op).mockReset();
        }
        vi.mocked(bookings.query).mockResolvedValue(mockPage({ data: [] }));
        vi.mocked(bookings.booked).mockResolvedValue(mockPage({ data: [] }));
        vi.mocked(bookings.create).mockResolvedValue(bookingReply());
        vi.mocked(bookings.update).mockResolvedValue(bookingReply());
        vi.mocked(bookings.updateInstance).mockResolvedValue(bookingReply());
        vi.mocked(bookings.approve).mockResolvedValue(bookingReply());
        vi.mocked(bookings.approveInstance).mockResolvedValue(bookingReply());
        vi.mocked(bookings.reject).mockResolvedValue(bookingReply());
        vi.mocked(bookings.rejectInstance).mockResolvedValue(bookingReply());
        vi.mocked(bookings.destroy).mockResolvedValue(mockReply(''));
        vi.mocked(bookings.destroyInstance).mockResolvedValue(mockReply(''));
        (ts_client.assets.create as any).mockReset();
        (ts_client.assets.create as any).mockResolvedValue(
            mockReply({ id: 'new-asset' }),
        );
        (ts_client.assets.update as any).mockReset();
        (ts_client.assets.update as any).mockResolvedValue(
            mockReply({
                id: 'updated-asset',
            }),
        );
        (ts_client.assets.destroy as any).mockReset();
        (ts_client.assets.destroy as any).mockResolvedValue(
            mockReply(undefined),
        );
    };

    /** Input of the most recent booking listing request (queryPagedBookings -> bookings.query) */
    const lastBookingsQuery = () =>
        vi.mocked(bookings.query).mock.calls.at(-1)?.[0] ?? null;
    const bookingsParams = () => {
        const params = new URLSearchParams();
        for (const [key, value] of Object.entries(lastBookingsQuery() ?? {})) {
            if (value !== undefined) params.set(key, String(value));
        }
        return params;
    };

    beforeEach(() => {
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        current_building = { id: 'bld-1', timezone: 'Australia/Sydney' };
        settings_map = {
            'app.use_region': false,
            'app.bookings.use_building_timezone': true,
            'app.parking.assign_space_on_approve': false,
        };
        active_building = signal(current_building);
        active_region = signal({ id: 'region-1' });
        organisation_service.active_building = active_building;
        organisation_service.active_region = active_region;
        organisation_service.levels = [];
        stubTsClient();
        spectator = createService();
    });

    afterEach(() => {
        setNotifyOutlet(null, true);
        setCurrentUser(new StaffUser({}));
        vi.restoreAllMocks();
    });

    it('should apply building timezone to parking booking listing requests', async () => {
        vi.useFakeTimers();
        const date = new Date('2026-06-15T12:00:00').valueOf();

        spectator.service.setOptions({ date });
        TestBed.flushEffects();
        await vi.advanceTimersByTimeAsync(1100);
        TestBed.flushEffects();
        await vi.advanceTimersByTimeAsync(1100);

        const timezone = spectator.service.timezone;
        const params = bookingsParams();
        expect(params.get('period_start')).toBe(
            String(getUnixTime(buildingDayStart(date, timezone))),
        );
        expect(params.get('period_end')).toBe(
            String(getUnixTime(buildingDayEnd(date, timezone))),
        );

        vi.useRealTimers();
    });

    it('should apply parking timezone setting to booking listing requests', async () => {
        vi.useFakeTimers();
        settings_map['app.bookings.use_building_timezone'] = false;
        settings_map['app.parking.use_building_timezone'] = true;
        const date = new Date('2026-06-15T12:00:00').valueOf();

        spectator.service.setOptions({ date });
        TestBed.flushEffects();
        await vi.advanceTimersByTimeAsync(1100);
        TestBed.flushEffects();
        await vi.advanceTimersByTimeAsync(1100);

        const timezone = spectator.service.timezone;
        const params = bookingsParams();
        expect(params.get('period_start')).toBe(
            String(getUnixTime(buildingDayStart(date, timezone))),
        );
        expect(params.get('period_end')).toBe(
            String(getUnixTime(buildingDayEnd(date, timezone))),
        );

        vi.useRealTimers();
    });

    it('should filter booking listings by selected levels for all bookings', async () => {
        vi.useFakeTimers();

        spectator.service.setOptions({
            request_filter: 'all',
            zones: ['lvl-1', 'lvl-2'],
        });
        TestBed.flushEffects();
        await vi.advanceTimersByTimeAsync(1100);
        TestBed.flushEffects();
        await vi.advanceTimersByTimeAsync(1100);

        expect(bookingsParams().get('zones')).toBe('lvl-1,lvl-2');

        vi.useRealTimers();
    });

    it('should list bookings for the region when parking.use_region is set', async () => {
        vi.useFakeTimers();
        // The mock is shared across tests, so use the last signal it made
        const settings = vi.mocked(spectator.inject(SettingsService).signal);
        const calls = settings.mock.calls as unknown[][];
        const index = calls
            .map((args) => args[0])
            .lastIndexOf('parking.use_region');
        settings.mock.results[index].value.set(true);

        expect(spectator.service.use_region()).toBe(true);
        spectator.service.setOptions({ request_filter: 'all', zones: [] });
        TestBed.flushEffects();
        await vi.advanceTimersByTimeAsync(1100);
        TestBed.flushEffects();
        await vi.advanceTimersByTimeAsync(1100);

        expect(bookingsParams().get('zones')).toBe('region-1');

        vi.useRealTimers();
    });

    it('should search bookings by building and level in the region scope', () => {
        const settings = vi.mocked(spectator.inject(SettingsService).signal);
        const calls = settings.mock.calls as unknown[][];
        const index = calls
            .map((args) => args[0])
            .lastIndexOf('parking.use_region');
        const use_region = settings.mock.results[index].value;
        use_region.set(true);
        vi.spyOn(spectator.service, 'bookingLocation').mockImplementation(
            (booking: Booking) => ({
                building_name: '',
                level_name: '',
                location: booking.id === 'b' ? 'Tower B P1' : 'Tower A P1',
            }),
        );
        const bookings = [{ id: 'a' }, { id: 'b' }] as unknown as Booking[];

        expect(
            spectator.service
                .filterEventSearch(bookings, 'tower b')
                .map(({ id }) => id),
        ).toEqual(['b']);

        // Turn it off again before the bookings reload, which would run
        // after this test ends
        use_region.set(false);
    });

    it('should filter request listings by the building zone when levels are disabled', async () => {
        vi.useFakeTimers();

        spectator.service.setOptions({
            request_filter: 'requests',
            zones: ['lvl-1', 'lvl-2'],
        });
        TestBed.flushEffects();
        await vi.advanceTimersByTimeAsync(1100);
        TestBed.flushEffects();
        await vi.advanceTimersByTimeAsync(1100);

        expect(bookingsParams().get('zones')).toBe('bld-1');

        vi.useRealTimers();
    });

    it('should wait for parking users before loading bookings', async () => {
        vi.restoreAllMocks();
        stubTsClient();
        // Hold each asset query (parking users and spaces) until released
        const pending_assets: ((value: unknown) => void)[] = [];
        const resolve_assets = (value: unknown) => {
            for (const resolve of pending_assets.splice(0)) resolve(value);
        };
        (ts_client.assets.query as any).mockImplementation(
            fromV1Mock(
                () => new Promise((resolve) => pending_assets.push(resolve)),
                ['...'],
                'page',
            ),
        );
        vi.useFakeTimers();
        spectator = createService();

        TestBed.flushEffects();
        await vi.advanceTimersByTimeAsync(1100);
        TestBed.flushEffects();
        expect(lastBookingsQuery()).toBeNull();

        resolve_assets({ data: [], total: 0, next: null });
        await Promise.resolve();
        TestBed.flushEffects();
        await vi.advanceTimersByTimeAsync(1100);
        TestBed.flushEffects();
        await vi.advanceTimersByTimeAsync(1100);

        expect(lastBookingsQuery()).not.toBeNull();
        vi.useRealTimers();
    });

    it('should load all parking booking pages', async () => {
        const booking = (id: string) =>
            new Booking({
                id,
                user_email: 'staff@example.com',
                extension_data: {},
            });
        const fourth_page = vi.fn().mockResolvedValue({
            data: [booking('booking-4')],
            total: 4,
            next: null,
        });
        const third_page = vi.fn().mockResolvedValue({
            data: [booking('booking-3')],
            total: 4,
            next: fourth_page,
        });
        const second_page = vi.fn().mockResolvedValue({
            data: [booking('booking-2')],
            total: 4,
            next: third_page,
        });
        const first_page = vi.fn().mockResolvedValue({
            data: [booking('booking-1')],
            total: 4,
            next: second_page,
        });
        (spectator.service as any)._first_page = first_page;

        await (spectator.service as any)._loadPage(true);

        expect(first_page).toHaveBeenCalledTimes(1);
        expect(second_page).toHaveBeenCalledTimes(1);
        expect(third_page).toHaveBeenCalledTimes(1);
        expect(fourth_page).toHaveBeenCalledTimes(1);
        expect(spectator.service.bookings().map((item) => item.id)).toEqual([
            'booking-1',
            'booking-2',
            'booking-3',
            'booking-4',
        ]);
        expect(spectator.service.has_more_pages()).toBe(false);
        expect(spectator.service.loading()).not.toContain('[BOOKINGS]');
    });

    it('should add plate numbers by email and stop a superseded page chain', async () => {
        (spectator.service as any)._users_resource.value.set([
            { email: 'Staff@Example.com', plate_number: 'ABC123' },
        ]);
        const booking = new Booking({
            id: 'booking-1',
            user_email: 'staff@example.com',
            extension_data: {},
        });
        const second_page = vi.fn();
        const first_page = vi.fn().mockImplementation(async () => {
            // A newer load starts while this page is in flight
            (spectator.service as any)._load_token++;
            return { data: [booking], total: 2, next: second_page };
        });
        (spectator.service as any)._first_page = first_page;

        await (spectator.service as any)._loadPage(true);

        expect(second_page).not.toHaveBeenCalled();
        expect(spectator.service.bookings()).toEqual([]);

        (spectator.service as any)._first_page = vi.fn().mockResolvedValue({
            data: [booking],
            total: 1,
            next: null,
        });
        await (spectator.service as any)._loadPage(true);
        expect(
            spectator.service.bookings()[0].extension_data.plate_number,
        ).toBe('ABC123');
    });

    it('should stop loading pages when the reported total is reached', async () => {
        const booking = new Booking({
            id: 'booking-1',
            user_email: 'staff@example.com',
            extension_data: {},
        });
        const repeated_page = vi.fn();
        const first_page = vi.fn().mockResolvedValue({
            data: [booking],
            total: 1,
            next: repeated_page,
        });
        (spectator.service as any)._first_page = first_page;

        await (spectator.service as any)._loadPage(true);

        expect(first_page).toHaveBeenCalledTimes(1);
        expect(repeated_page).not.toHaveBeenCalled();
        expect(spectator.service.has_more_pages()).toBe(false);
        expect(spectator.service.loading()).not.toContain('[BOOKINGS]');
    });

    it('should stop parking booking pagination when a page is empty', async () => {
        const booking = new Booking({
            id: 'booking-1',
            user_email: 'staff@example.com',
            extension_data: {},
        });
        const next_page = vi.fn();
        const empty_page = vi.fn().mockResolvedValue({
            data: [],
            total: 3,
            next: next_page,
        });
        const first_page = vi.fn().mockResolvedValue({
            data: [booking],
            total: 3,
            next: empty_page,
        });
        (spectator.service as any)._first_page = first_page;

        await (spectator.service as any)._loadPage(true);

        expect(first_page).toHaveBeenCalledTimes(1);
        expect(empty_page).toHaveBeenCalledTimes(1);
        expect(next_page).not.toHaveBeenCalled();
        expect(spectator.service.bookings()).toEqual([booking]);
        expect(spectator.service.has_more_pages()).toBe(false);
        expect(spectator.service.loading()).not.toContain('[BOOKINGS]');
    });

    it('should limit page loading when the backend always returns a next page', async () => {
        let booking_count = 0;
        const repeated_page = vi.fn().mockImplementation(async () => ({
            data: [
                new Booking({
                    id: `booking-${++booking_count}`,
                    user_email: 'staff@example.com',
                    extension_data: {},
                }),
            ],
            total: 0,
            next: repeated_page,
        }));
        (spectator.service as any)._first_page = repeated_page;

        await (spectator.service as any)._loadPage(true);

        expect(repeated_page).toHaveBeenCalledTimes(50);
        expect(spectator.service.bookings()).toHaveLength(50);
        expect(spectator.service.has_more_pages()).toBe(false);
        expect(spectator.service.loading()).not.toContain('[BOOKINGS]');
    });

    it('should use the building timezone for assigned parking bookings', async () => {
        const mock_now = new Date('2026-06-15T12:00:00Z').valueOf();
        const assigned_start = setTimeInTimezone(
            mock_now,
            1,
            0,
            'Australia/Sydney',
        );
        const dialog_ref = {
            afterClosed: () => NEVER,
            componentInstance: {
                event: of({
                    reason: 'done',
                    metadata: {
                        id: 'space-1',
                        name: 'Bay 1',
                        assigned_to: 'staff@example.com',
                    },
                }),
                loading: { set: vi.fn() },
            },
            close: vi.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        (ts_client.assets.update as any).mockResolvedValue(
            mockReply({
                id: 'space-1',
                name: 'Bay 1',
            }),
        );
        vi.spyOn(UserPipe.prototype, 'transform').mockResolvedValue({
            id: 'user-1',
            name: 'Staff Name',
        } as any);
        vi.spyOn(Date, 'now').mockReturnValue(mock_now);

        await spectator.service.editSpace({ id: 'space-0' } as any);

        // saveBooking(no id) -> createBooking -> bookings.create()
        const booking_post = vi.mocked(bookings.create).mock.calls[0];
        expect(booking_post).toBeTruthy();
        expect(booking_post[0].body).toEqual(
            expect.objectContaining({
                booking_start: getUnixTime(assigned_start),
                booking_end: getUnixTime(assigned_start + 22 * 60 * 60 * 1000),
            }),
        );
    });

    it('should keep the level but refresh the zones when editing a parking space', async () => {
        spectator.service.setOptions({ zones: ['lvl-selected'] });
        const original_space: ParkingSpace = mockData(ts_client.Asset, {
            id: 'space-1',
            identifier: 'Bay 1',
            zone_id: 'lvl-original',
            zones: ['org-1', 'region-1', 'bld-1', 'lvl-original'],
            bookable: true,
        });
        const dialog_ref = {
            afterClosed: () => NEVER,
            componentInstance: {
                event: of({
                    reason: 'done',
                    metadata: {
                        id: 'space-1',
                        identifier: 'Bay 1',
                        bookable: false,
                        zone_id: 'lvl-selected',
                        zones: ['lvl-selected'],
                    },
                }),
                loading: { set: vi.fn() },
            },
            close: vi.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);

        await spectator.service.editSpace(original_space);

        expect(ts_client.assets.update).toHaveBeenCalledTimes(1);
        const update_data = vi.mocked(ts_client.assets.update).mock.calls[0][0]
            .body;
        expect(update_data).toEqual(
            expect.objectContaining({ id: 'space-1', bookable: false }),
        );
        // the space stays on its level, the modal level is not applied
        expect(update_data).not.toHaveProperty('zone_id');
        expect(update_data.zones).toEqual([
            'org-1',
            'region-1',
            'bld-1',
            'lvl-original',
        ]);
    });

    it('should set zone fields when creating a parking space', async () => {
        const levels = [
            {
                id: 'lvl-first',
                parent_id: 'bld-1',
                tags: ['parking'],
            },
            {
                id: 'lvl-chosen',
                parent_id: 'bld-1',
                tags: ['parking'],
            },
        ];
        Object.defineProperty(spectator.service, 'levels', {
            value: () => levels,
            configurable: true,
        });
        spectator.service.setOptions({ zones: [] });
        const dialog_ref = {
            afterClosed: () => NEVER,
            componentInstance: {
                event: of({
                    reason: 'done',
                    metadata: {
                        identifier: 'Bay 1',
                        bookable: true,
                        zone_id: 'lvl-chosen',
                    },
                }),
                loading: { set: vi.fn() },
            },
            close: vi.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        spectator.inject(MatDialog).open.mockClear();

        await spectator.service.editSpace();

        expect(spectator.inject(MatDialog).open).toHaveBeenCalledWith(
            ParkingSpaceModalComponent,
            expect.objectContaining({
                data: expect.objectContaining({ zone_id: 'lvl-first' }),
            }),
        );
        expect(ts_client.assets.create).toHaveBeenCalledWith({
            body: expect.objectContaining({
                zone_id: 'lvl-chosen',
                zones: ['org-1', 'region-1', 'bld-1', 'lvl-chosen'],
            }),
        });
    });

    it('should show a new parking space before the list query includes it', async () => {
        const levels = [
            { id: 'lvl-chosen', parent_id: 'bld-1', tags: ['parking'] },
        ];
        Object.defineProperty(spectator.service, 'levels', {
            value: () => levels,
            configurable: true,
        });
        spectator.service.setOptions({ zones: ['lvl-chosen'] });
        await vi.waitFor(() =>
            expect(
                (spectator.service as any)._spaces_params_debounced.value(),
            ).toEqual({ zone_ids: ['lvl-chosen'] }),
        );
        // The list query lags new records, so it keeps returning no spaces.
        (ts_client.assets.query as any).mockResolvedValue(
            mockPage({
                data: [],
                total: 0,
                next: null,
            }),
        );
        (ts_client.assets.create as any).mockResolvedValue(
            mockReply({
                id: 'space-new',
                name: 'Bay 1',
                zone_id: 'lvl-chosen',
            }),
        );
        (spectator.inject(MatDialog).open as any).mockReturnValue({
            afterClosed: () => NEVER,
            componentInstance: {
                event: of({
                    reason: 'done',
                    metadata: { identifier: 'Bay 1', zone_id: 'lvl-chosen' },
                }),
                loading: { set: vi.fn() },
            },
            close: vi.fn(),
        });

        await spectator.service.editSpace();
        await new Promise((resolve) => setTimeout(resolve, 50));

        expect(spectator.service.spaces().map((_) => _.id)).toEqual([
            'space-new',
        ]);
    });

    it('should default a new parking space to the selected level', async () => {
        const levels = [
            {
                id: 'lvl-selected',
                parent_id: 'bld-1',
                tags: ['parking'],
            },
        ];
        Object.defineProperty(spectator.service, 'levels', {
            value: () => levels,
            configurable: true,
        });
        spectator.service.setOptions({ zones: ['lvl-selected'] });
        const dialog_ref = {
            afterClosed: () => of(undefined),
            componentInstance: {
                event: NEVER,
                loading: { set: vi.fn() },
            },
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        spectator.inject(MatDialog).open.mockClear();

        await spectator.service.editSpace();

        expect(spectator.inject(MatDialog).open).toHaveBeenCalledWith(
            ParkingSpaceModalComponent,
            expect.objectContaining({
                data: expect.objectContaining({ zone_id: 'lvl-selected' }),
            }),
        );
    });

    it('should edit unallocated parking requests with the request form modal', async () => {
        const dialog_ref = {
            afterClosed: () => of('request-1'),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);

        const result = await spectator.service.editReservation({
            id: 'request-1',
            asset_id: 'unallocated-request-1',
        } as Booking);

        expect(result).toBe('request-1');
        expect(spectator.inject(MatDialog).open).toHaveBeenCalledWith(
            ParkingRequestModalComponent,
            {
                data: {
                    booking: expect.objectContaining({ id: 'request-1' }),
                    date: undefined,
                },
            },
        );
    });

    it('should keep assigned parking reservations on the booking modal', async () => {
        organisation_service.levels = [
            { id: 'lvl-1', parent_id: 'bld-1', tags: ['parking'] },
        ];
        const dialog_ref = {
            afterClosed: () => of('booking-1'),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);

        const result = await spectator.service.editReservation({
            id: 'booking-1',
            asset_id: 'space-1',
        } as Booking);

        expect(result).toBe('booking-1');
        expect(spectator.inject(MatDialog).open).toHaveBeenCalledWith(
            ParkingBookingModalComponent,
            expect.objectContaining({
                data: expect.objectContaining({
                    booking: expect.objectContaining({ id: 'booking-1' }),
                }),
            }),
        );
    });

    it('should load spaces for all selected parking levels', async () => {
        vi.useFakeTimers();
        organisation_service.levels = [
            { id: 'lvl-1', parent_id: 'bld-1', tags: ['parking'] },
            { id: 'lvl-2', parent_id: 'bld-1', tags: ['parking'] },
        ];
        (ts_client.assets.query as any).mockImplementation(
            fromV1Mock(
                (q: any) => {
                    if (q?.zone_id === 'lvl-1') {
                        return Promise.resolve({
                            data: [{ id: 'space-1', zone_id: 'lvl-1' }],
                            total: 1,
                            next: null,
                        });
                    }
                    if (q?.zone_id === 'lvl-2') {
                        return Promise.resolve({
                            data: [{ id: 'space-2', zone_id: 'lvl-2' }],
                            total: 1,
                            next: null,
                        });
                    }
                    return Promise.resolve({ data: [], total: 0, next: null });
                },
                ['...'],
                'page',
            ),
        );

        spectator.service.setOptions({ zones: ['lvl-1', 'lvl-2'] });
        TestBed.flushEffects();
        await vi.advanceTimersByTimeAsync(400);
        TestBed.flushEffects();
        await vi.advanceTimersByTimeAsync(50);
        TestBed.flushEffects();

        expect(ts_client.assets.query).toHaveBeenCalledWith(
            expect.objectContaining({ zone_id: 'lvl-1' }),
        );
        expect(ts_client.assets.query).toHaveBeenCalledWith(
            expect.objectContaining({ zone_id: 'lvl-2' }),
        );
        expect(spectator.service.spaces()).toEqual([
            expect.objectContaining({ id: 'space-1', zone_id: 'lvl-1' }),
            expect.objectContaining({ id: 'space-2', zone_id: 'lvl-2' }),
        ]);

        vi.useRealTimers();
    });

    it('should reuse the level space requests for the first spaces load', async () => {
        vi.useFakeTimers();
        (spectator.inject(OrganisationService) as any).levels = [
            { id: 'lvl-1', parent_id: 'bld-1', tags: ['parking'] },
            { id: 'lvl-2', parent_id: 'bld-1', tags: ['parking'] },
        ];
        (ts_client.assets.query as any).mockImplementation(
            fromV1Mock(
                (q: any) =>
                    Promise.resolve({
                        data: [
                            { id: `space-${q?.zone_id}`, zone_id: q?.zone_id },
                        ],
                        total: 1,
                        next: null,
                    }),
                ['...'],
                'page',
            ),
        );
        (ts_client.assets.query as any).mockClear();
        // Recompute the levels for the new organisation levels
        active_building.set({ ...current_building });
        TestBed.flushEffects();
        await vi.advanceTimersByTimeAsync(400);
        TestBed.flushEffects();
        await vi.advanceTimersByTimeAsync(50);

        const zone_ids = (ts_client.assets.query as any).mock.calls
            .map(([q]: any) => q?.zone_id)
            .filter((id: string) => id?.startsWith('lvl-'));
        expect(zone_ids.sort()).toEqual(['lvl-1', 'lvl-2']);
        expect(spectator.service.spaces().map((_) => _.id)).toEqual([
            'space-lvl-1',
            'space-lvl-2',
        ]);
        expect(spectator.service.bookable_levels().map((_) => _.id)).toEqual([
            'lvl-1',
            'lvl-2',
        ]);
        vi.useRealTimers();
    });

    it('should not filter requests by approver group in event lists', () => {
        settings_map['app.parking.show_requests'] = true;
        const request = {
            id: 'req-1',
            asset_id: 'unallocated-1',
            status: 'tentative',
            date: Date.now(),
            extension_data: { approver_group: 'parking-team' },
        } as any;

        expect(
            spectator.service.filterEventList([request], 'requests'),
        ).toEqual([request]);
    });

    it('should hide parking requests from users outside the request groups', () => {
        settings_map['app.parking.show_requests'] = true;
        settings_map['app.feature_groups'] = {
            'parking-requests': ['parking-team'],
        };
        setCurrentUser(new StaffUser({ groups: ['staff'] }));
        expect(spectator.service.can_view_requests).toBe(false);

        setCurrentUser(new StaffUser({ groups: ['parking-team'] }));
        expect(spectator.service.can_view_requests).toBe(true);
    });

    it('should show parking requests to admins only when requests are enabled', () => {
        settings_map['app.feature_groups'] = {
            'parking-requests': ['parking-team'],
        };
        setCurrentUser(new StaffUser({ groups: ['admin'] }));
        expect(spectator.service.can_view_requests).toBe(false);

        settings_map['app.parking.show_requests'] = true;
        expect(spectator.service.can_view_requests).toBe(true);
    });

    it('should fall back to request filtering when waitlist display is disabled', () => {
        settings_map['app.parking.show_requests'] = true;
        settings_map['app.parking.show_waitlist'] = false;
        const request = {
            id: 'waitlisted',
            asset_id: 'unallocated-1',
            status: 'tentative',
            date: Date.now(),
            extension_data: {},
        } as any;

        expect(
            spectator.service.filterEventList([request], 'waitlist'),
        ).toEqual([request]);
    });

    it('should include waitlisted requests in pending filtering when waitlist display is disabled', () => {
        settings_map['app.parking.show_requests'] = true;
        settings_map['app.parking.show_waitlist'] = false;
        const request = {
            id: 'waitlisted',
            asset_id: 'unallocated-1',
            status: 'tentative',
            date: Date.now(),
            extension_data: {},
        } as any;

        expect(spectator.service.filterEventList([request], 'pending')).toEqual(
            [request],
        );
    });

    it('should not treat waiting approval parking requests as waitlisted', () => {
        const request = {
            id: 'pending-approval',
            asset_id: 'unallocated-1',
            status: 'tentative',
            process_state: 'waiting_approval',
            date: Date.now(),
            extension_data: {},
        } as any;

        expect(spectator.service.isWaitlisted(request)).toBe(false);
    });

    it('should keep waiting approval parking requests in pending filtering', () => {
        settings_map['app.parking.show_requests'] = true;
        const request = {
            id: 'pending-approval',
            asset_id: 'unallocated-1',
            status: 'tentative',
            process_state: 'waiting_approval',
            date: Date.now(),
            extension_data: {},
        } as any;

        expect(
            spectator.service.filterEventList([request], 'waitlist'),
        ).toEqual([]);
        expect(spectator.service.filterEventList([request], 'pending')).toEqual(
            [request],
        );
    });

    it('should keep requests without a process state pending', () => {
        settings_map['app.parking.show_requests'] = true;
        const request = {
            id: 'new-request',
            asset_id: 'unallocated-1',
            status: 'tentative',
            date: Date.now(),
            extension_data: {},
        } as any;

        expect(spectator.service.isWaitlisted(request)).toBe(false);
        expect(spectator.service.isManualRequest(request)).toBe(false);
        expect(
            spectator.service.filterEventList([request], 'waitlist'),
        ).toEqual([]);
        expect(spectator.service.filterEventList([request], 'pending')).toEqual(
            [request],
        );
    });

    it('should identify waitlisted requests that do not need manual approval', () => {
        settings_map['app.parking.show_requests'] = true;
        const request = {
            id: 'waitlisted-request',
            asset_id: 'unallocated-1',
            approved: false,
            status: 'tentative',
            process_state: 'wait_list',
            date: Date.now(),
            extension_data: { requires_manual_approval: false },
        } as any;

        expect(spectator.service.isWaitlisted(request)).toBe(true);
        expect(spectator.service.isManualRequest(request)).toBe(false);
        expect(
            spectator.service.filterEventList([request], 'waitlist'),
        ).toEqual([request]);
        expect(spectator.service.filterEventList([request], 'pending')).toEqual(
            [],
        );
    });

    it('should require approval for unapproved manual approval requests', () => {
        settings_map['app.parking.show_requests'] = true;
        const request = {
            id: 'manual-request',
            asset_id: 'unallocated-1',
            approved: false,
            status: 'tentative',
            date: Date.now(),
            extension_data: { requires_manual_approval: true },
        } as any;

        expect(spectator.service.isManualRequest(request)).toBe(true);
        expect(spectator.service.isWaitlisted(request)).toBe(false);
        expect(spectator.service.filterEventList([request], 'manual')).toEqual([
            request,
        ]);
    });

    it('should only allow approval for matching approver groups', () => {
        const restricted_request = {
            asset_id: 'unallocated-1',
            extension_data: { approver_group: 'parking-team' },
        } as any;
        const allowed_request = {
            asset_id: 'unallocated-1',
            extension_data: { approver_group: 'staff' },
        } as any;

        expect(
            spectator.service.canApproveBooking(restricted_request, ['staff']),
        ).toBe(false);
        expect(
            spectator.service.canApproveBooking(allowed_request, ['staff']),
        ).toBe(true);
        expect(
            spectator.service.canApproveBooking(
                {
                    asset_id: 'bay-1',
                    extension_data: { approver_group: 'parking-team' },
                } as any,
                ['staff'],
            ),
        ).toBe(false);
        expect(
            spectator.service.canApproveBooking(
                {
                    asset_id: 'unallocated-1',
                    extension_data: {},
                } as any,
                ['staff'],
            ),
        ).toBe(true);
    });

    it('should hide declined manual requests from pending approval filtering', () => {
        settings_map['app.parking.show_requests'] = true;
        const pending_request = {
            id: 'request-1',
            asset_id: 'unallocated-1',
            approved: false,
            status: 'tentative',
            extension_data: {
                approver_group: 'parking-team',
                requires_manual_approval: true,
            },
        } as any;
        const declined_request = {
            id: 'request-2',
            asset_id: 'unallocated-2',
            approved: false,
            status: 'declined',
            extension_data: {
                approver_group: 'parking-team',
                requires_manual_approval: true,
            },
        } as any;

        expect(
            spectator.service.filterEventList(
                [pending_request, declined_request],
                'manual',
            ),
        ).toEqual([pending_request]);
    });

    it('should hide approved manual requests from pending approval filtering', () => {
        settings_map['app.parking.show_requests'] = true;
        const pending_request = {
            id: 'request-1',
            asset_id: 'unallocated-1',
            approved: false,
            status: 'tentative',
            extension_data: {
                approver_group: 'parking-team',
                requires_manual_approval: true,
            },
        } as any;
        const approved_request = {
            id: 'request-2',
            asset_id: 'unallocated-2',
            status: 'approved',
            extension_data: {
                approver_group: 'parking-team',
                requires_manual_approval: true,
            },
        } as any;
        const allocated_request = {
            id: 'request-3',
            asset_id: 'space-1',
            status: 'approved',
            extension_data: { requires_manual_approval: true },
        } as any;

        expect(
            spectator.service.filterEventList(
                [pending_request, approved_request, allocated_request],
                'manual',
            ),
        ).toEqual([pending_request]);
    });

    it('should include manual approval bookings in pending approval filtering', () => {
        settings_map['app.parking.show_requests'] = true;
        const booking = {
            id: 'booking-1',
            asset_id: 'space-1',
            approved: false,
            status: 'tentative',
            extension_data: { requires_manual_approval: true },
        } as any;
        const regular_booking = {
            id: 'booking-2',
            asset_id: 'space-2',
            status: 'tentative',
            extension_data: {},
        } as any;

        expect(
            spectator.service.filterEventList(
                [booking, regular_booking],
                'manual',
            ),
        ).toEqual([booking]);
    });

    it('should assign a space before approving requests when enabled', async () => {
        settings_map['app.parking.assign_space_on_approve'] = true;
        organisation_service.levels = [
            { id: 'lvl-1', parent_id: 'bld-1', tags: ['parking'] },
        ];
        (ts_client.assets.query as any).mockImplementation(
            fromV1Mock(
                (q: any) =>
                    q?.zone_id === 'lvl-1'
                        ? Promise.resolve({
                              data: [
                                  {
                                      id: 'space-1',
                                      name: 'Bay 1',
                                      zone_id: 'lvl-1',
                                      bookable: true,
                                  },
                              ],
                              total: 1,
                              next: null,
                          })
                        : Promise.resolve({ data: [], total: 0, next: null }),
                ['...'],
                'page',
            ),
        );
        const request = {
            id: '1',
            asset_id: 'unallocated-1',
            status: 'tentative',
            date: new Date('2026-06-15T09:00:00').valueOf(),
            zones: ['org-1', 'bld-1'],
            extension_data: {},
        } as Booking;

        await spectator.service.approveBooking(request);

        // bookedResourceList -> bookings.booked()
        expect(bookings.booked).toHaveBeenCalledWith(
            expect.objectContaining({ zones: 'bld-1', type: 'parking' }),
        );
        expect(ts_client.assets.query).toHaveBeenCalledWith(
            expect.objectContaining({ zone_id: 'lvl-1' }),
        );
        // updateBooking('1', patch) -> bookings.update()
        const patch_call = vi
            .mocked(bookings.update)
            .mock.calls.find(([input]) => input.id === 1);
        expect(patch_call).toBeTruthy();
        expect(patch_call[0].body).toEqual(
            expect.objectContaining({
                asset_id: 'space-1',
                // The staff API has no `asset_name`: it is in `extension_data`
                zones: ['org-1', 'region-1', 'bld-1', 'lvl-1'],
                extension_data: expect.objectContaining({
                    asset_name: 'Bay 1',
                }),
            }),
        );
        // approveBooking('1') -> bookings.approve()
        expect(bookings.approve).toHaveBeenCalledWith({ id: 1 });
    });

    it('should error instead of approving when no spaces are available', async () => {
        settings_map['app.parking.assign_space_on_approve'] = true;
        organisation_service.levels = [
            { id: 'lvl-1', parent_id: 'bld-1', tags: ['parking'] },
        ];
        (ts_client.assets.query as any).mockImplementation(
            fromV1Mock(
                (q: any) =>
                    q?.zone_id === 'lvl-1'
                        ? Promise.resolve({
                              data: [
                                  {
                                      id: 'space-1',
                                      name: 'Bay 1',
                                      zone_id: 'lvl-1',
                                      bookable: true,
                                  },
                              ],
                              total: 1,
                              next: null,
                          })
                        : Promise.resolve({ data: [], total: 0, next: null }),
                ['...'],
                'page',
            ),
        );
        // Every available space is already booked
        vi.mocked(bookings.booked).mockResolvedValue(
            mockPage({ data: ['space-1'], total: 1 }),
        );
        const request = {
            id: '1',
            asset_id: 'unallocated-1',
            status: 'tentative',
            date: new Date('2026-06-15T09:00:00').valueOf(),
            zones: ['org-1', 'bld-1'],
            extension_data: {},
        } as Booking;

        await spectator.service.approveBooking(request);

        expect(bookings.update).not.toHaveBeenCalled();
        expect(bookings.approve).not.toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('should delete parking bookings after confirmation', async () => {
        const confirm_ref = {
            componentInstance: {
                event: NEVER,
                loading: { set: vi.fn() },
            },
            afterClosed: () => of({ reason: 'done' }),
            close: vi.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(confirm_ref);
        const booking = {
            id: '2',
            asset_name: 'Bay 1',
            user_name: 'Test User',
            user_email: 'test@example.com',
            date: Date.now(),
        } as Booking;

        await spectator.service.removeBooking(booking);

        expect(spectator.inject(MatDialog).open).toHaveBeenCalled();
        expect(bookings.destroy).toHaveBeenCalledWith(
            expect.objectContaining({ id: 2 }),
        );
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });

    it('should block assigned parking when the limit is reached', async () => {
        settings_map['app.parking.max_assigned_count'] = 1;
        organisation_service.levels = [
            { id: 'lvl-1', parent_id: 'bld-1', tags: ['parking'] },
        ];
        (ts_client.assets.query as any).mockImplementation(
            fromV1Mock(
                (q: any) =>
                    q?.zone_id === 'lvl-1'
                        ? Promise.resolve({
                              data: [
                                  {
                                      id: 'space-existing',
                                      assigned_to: 'staff@example.com',
                                  },
                              ],
                              total: 1,
                              next: null,
                          })
                        : Promise.resolve({ data: [], total: 0, next: null }),
                ['...'],
                'page',
            ),
        );
        const dialog_ref = {
            afterClosed: () => NEVER,
            componentInstance: {
                event: of({
                    reason: 'done',
                    metadata: {
                        id: 'space-new',
                        identifier: 'Bay 2',
                        assigned_to: 'staff@example.com',
                        assigned_name: 'Staff Name',
                    },
                }),
                loading: { set: vi.fn() },
            },
            close: vi.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);

        // A failed save keeps the modal open, so wait for the reset.
        void spectator.service.editSpace({ id: 'space-other' } as any);
        await vi.waitFor(() =>
            expect(dialog_ref.componentInstance.loading.set).toHaveBeenCalled(),
        );

        expect(notify_open).toHaveBeenCalledWith(
            'Users can only have 1 assigned parking space at a time.',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(ts_client.assets.create).not.toHaveBeenCalled();
        expect(ts_client.assets.update).not.toHaveBeenCalled();
        expect(bookings.create).not.toHaveBeenCalled();
        expect(dialog_ref.componentInstance.loading.set).toHaveBeenCalledWith(
            false,
        );
    });

    it('should let the user save again after a failed save', async () => {
        const events = new EventEmitter<any>();
        const dialog_ref = {
            afterClosed: () => NEVER,
            componentInstance: { event: events, loading: { set: vi.fn() } },
            close: vi.fn(),
            disableClose: true,
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        (ts_client.assets.update as any)
            .mockRejectedValueOnce('offline')
            .mockResolvedValueOnce(mockReply({ id: 'space-1' }));
        const done = { reason: 'done', metadata: { id: 'space-1' } };

        const saved = spectator.service.editSpace({ id: 'space-1' } as any);
        events.emit(done);
        await vi.waitFor(() =>
            expect(
                dialog_ref.componentInstance.loading.set,
            ).toHaveBeenCalledWith(false),
        );
        expect(dialog_ref.disableClose).toBe(false);
        expect(dialog_ref.close).not.toHaveBeenCalled();

        events.emit(done);
        await saved;

        expect(ts_client.assets.update).toHaveBeenCalledTimes(2);
        expect(dialog_ref.close).toHaveBeenCalled();
    });

    it('should restore the previous assigned parking booking when reassignment fails', async () => {
        const original_space = {
            id: 'space-1',
            name: 'Bay 1',
            assigned_to: 'old.staff@example.com',
            assigned_name: 'Old Staff',
            zone_id: 'lvl-1',
            zones: ['org-1', 'region-1', 'bld-1', 'lvl-1'],
        } as any;
        const dialog_ref = {
            afterClosed: () => NEVER,
            componentInstance: {
                event: of({
                    reason: 'done',
                    metadata: {
                        ...original_space,
                        assigned_to: 'new.staff@example.com',
                        assigned_name: 'New Staff',
                    },
                }),
                loading: { set: vi.fn() },
            },
            close: vi.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        // _clearAssignedBooking -> queryAllBookingsOrThrow -> bookings.query
        vi.mocked(bookings.query).mockResolvedValue(
            mockPage({
                data: [
                    mockData(StaffBooking, {
                        id: 2,
                        asset_id: 'space-1',
                        booking_start: Math.floor(Date.now() / 1000),
                    }),
                ],
                total: 1,
            }),
        );
        // saveParkingSpace -> updateAsset (space has id)
        (ts_client.assets.update as any)
            .mockResolvedValueOnce(mockReply({ id: 'space-1', name: 'Bay 1' }))
            .mockResolvedValueOnce(mockReply(original_space));
        // saveBooking -> createBooking -> bookings.create: first attempt fails, restore succeeds
        vi.mocked(bookings.create)
            .mockRejectedValueOnce({ status: 409 })
            .mockResolvedValueOnce(bookingReply());
        vi.spyOn(UserPipe.prototype, 'transform').mockResolvedValue({
            id: 'user-1',
            name: 'Staff Name',
        } as any);

        // A failed save keeps the modal open, so wait for the reset.
        void spectator.service.editSpace(original_space);
        await vi.waitFor(() =>
            expect(dialog_ref.componentInstance.loading.set).toHaveBeenCalled(),
        );

        expect(bookings.destroy).toHaveBeenCalledWith(
            expect.objectContaining({ id: 2 }),
        );
        expect(ts_client.assets.update).toHaveBeenCalledTimes(2);
        expect(ts_client.assets.update).toHaveBeenNthCalledWith(2, {
            id: 'space-1',
            body: expect.objectContaining({
                assigned_to: 'old.staff@example.com',
            }),
        });
        const booking_posts = vi.mocked(bookings.create).mock.calls;
        expect(booking_posts).toHaveLength(2);
        expect(booking_posts[1][0].body).toEqual(
            expect.objectContaining({
                user_email: 'old.staff@example.com',
                asset_id: 'space-1',
                extension_data: expect.objectContaining({
                    asset_name: 'Bay 1',
                    is_assigned: true,
                }),
            }),
        );
        expect(notify_open).toHaveBeenCalledWith(
            'APP.CONCIERGE.PARKING_ASSIGN_SPACE_ERROR',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(dialog_ref.componentInstance.loading.set).toHaveBeenCalledWith(
            false,
        );
        expect(dialog_ref.close).not.toHaveBeenCalled();
    });

    it('should split comma separated features when uploading parking spaces', async () => {
        organisation_service.levels = [
            { id: 'lvl-1', parent_id: 'bld-1', tags: ['parking'] },
        ];
        spectator.service.setOptions({ zones: ['lvl-1'] });
        const csv =
            'identifier,map_id,bookable,place_groups,features,notes\n' +
            'G.123,G.123,true,,"Maximum Height 2.3m,Open Ground Level",Car';
        const file = new File([csv], 'spaces.csv', { type: 'text/csv' });
        const event = {
            target: { files: [file], value: '' },
        } as unknown as InputEvent;

        await spectator.service.uploadSpacesCSV(event);

        expect(ts_client.assets.create).toHaveBeenCalledWith({
            body: expect.objectContaining({
                identifier: 'G.123',
                features: ['Maximum Height 2.3m', 'Open Ground Level'],
                notes: 'Car',
                zone_id: 'lvl-1',
            }),
        });
    });

    it('should skip blank CSV lines and give new spaces their zones', async () => {
        organisation_service.levels = [
            { id: 'lvl-1', parent_id: 'bld-1', tags: ['parking'] },
        ];
        spectator.service.setOptions({ zones: ['lvl-1'] });
        const csv = 'identifier,map_id,bookable\n' + 'A1,A1,true\n' + ',,\n';
        const file = new File([csv], 'spaces.csv', { type: 'text/csv' });
        const event = {
            target: { files: [file], value: '' },
        } as unknown as InputEvent;

        await spectator.service.uploadSpacesCSV(event);

        expect(ts_client.assets.create).toHaveBeenCalledTimes(1);
        expect(ts_client.assets.create).toHaveBeenCalledWith({
            body: expect.objectContaining({
                identifier: 'A1',
                zones: ['org-1', 'region-1', 'bld-1', 'lvl-1'],
            }),
        });
    });

    it('should refresh the zones of spaces updated by CSV', async () => {
        Object.defineProperty(spectator.service, 'spaces', {
            value: () => [{ id: 'space-1', zone_id: 'lvl-1' }],
            configurable: true,
        });
        const csv = 'id,identifier,bookable\n' + 'space-1,A1,true';
        const file = new File([csv], 'spaces.csv', { type: 'text/csv' });
        const event = {
            target: { files: [file], value: '' },
        } as unknown as InputEvent;

        await spectator.service.uploadSpacesCSV(event);

        const update = vi.mocked(ts_client.assets.update).mock.calls[0][0].body;
        expect(update).toEqual(
            expect.objectContaining({
                id: 'space-1',
                zones: ['org-1', 'region-1', 'bld-1', 'lvl-1'],
            }),
        );
        expect(update).not.toHaveProperty('zone_id');
    });

    it('should upload numeric parking space identifiers as strings', async () => {
        organisation_service.levels = [
            { id: 'lvl-1', parent_id: 'bld-1', tags: ['parking'] },
        ];
        spectator.service.setOptions({ zones: ['lvl-1'] });
        const csv = 'identifier,map_id,bookable\n' + '123,G.123,true';
        const file = new File([csv], 'spaces.csv', { type: 'text/csv' });
        const event = {
            target: { files: [file], value: '' },
        } as unknown as InputEvent;

        await spectator.service.uploadSpacesCSV(event);

        expect(ts_client.assets.create).toHaveBeenCalledWith({
            body: expect.objectContaining({
                identifier: '123',
                map_id: 'G.123',
                zone_id: 'lvl-1',
            }),
        });
    });

    it('should download a parking spaces template with parking columns', async () => {
        const downloads = captureDownloads();
        try {
            await spectator.service.downloadSpacesCSV();
            const csv = await downloads.text();

            expect(downloads.filename).toBe('parking-spaces.csv');
            expect(csv.replace(/^\uFEFF/, '').split(/\r?\n/)[0]).toBe(
                'id,identifier,map_id,assigned_to,assigned_name,bookable,place_groups,features,notes',
            );
        } finally {
            downloads.restore();
        }
    });

    it('should open the booking history modal for a parking booking', () => {
        const booking = new Booking({ id: 'booking-1' });

        spectator.service.viewBookingHistory(booking);

        expect(spectator.inject(MatDialog).open).toHaveBeenCalledWith(
            BookingHistoryModalComponent,
            {
                data: { booking },
                width: '32rem',
                maxWidth: '100vw',
            },
        );
    });
});
