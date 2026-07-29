import { EventEmitter, WritableSignal, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    SpectatorService,
    createServiceFactory,
} from '@ngneat/spectator/vitest';
import {
    Booking,
    Desk,
    OrganisationService,
    SettingsService,
    getTimezoneDifferenceInHours,
    setNotifyOutlet,
    setTimeInTimezone,
} from '@placeos/common';
import {
    addHours,
    addMinutes,
    endOfDay,
    getUnixTime,
    startOfDay,
} from 'date-fns';
import { NEVER, of } from 'rxjs';

import * as ts_client_mod from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';
import { DesksStateService } from '../../app/desks/desks-state.service';
import { BookingHistoryModalComponent } from '../../app/ui/booking-history-modal.component';
import { captureDownloads } from '../reports/download-capture.helper';

vi.mock('@placeos/ts-client', { spy: true });

describe('DesksStateService', () => {
    let spectator: SpectatorService<DesksStateService>;
    let active_building: WritableSignal<any>;
    let active_region: WritableSignal<any>;
    let current_building: any;
    let settings_map: Record<string, any>;
    let notify_open: ReturnType<typeof vi.fn>;
    const organisation_service: any = {
        active_levels: signal([]),
        initialised: signal(true),
        levelWithID: vi.fn(),
        organisation: { id: 'org-1' },
        region: { id: 'region-1' },
        buildings: [],
        levelsForBuilding: vi.fn((building) => [
            { id: `${building?.id || 'bld-1'}-lvl-1` },
        ]),
        levelsForRegion: vi.fn(() => []),
        get building() {
            return current_building;
        },
        set building(value) {
            current_building = value;
        },
    };
    const createService = createServiceFactory({
        service: DesksStateService,
        providers: [
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(SettingsService, {
                get: ((name: string) => settings_map[name]) as any,
            } as any),
            MockProvider(OrganisationService, organisation_service),
        ],
    });

    // The workspace booking helpers (saveBooking, removeBooking, ...) are not
    // mockable under the bundling builder, so both stubbing and assertions
    // happen at the ts-client boundary they resolve to:
    //   queryBookings -> get('/bookings?...'), saveBooking -> post/patch,
    //   rejectBooking(Instance) -> post('.../reject[/start]'),
    //   removeBooking(Instance) -> del('.../{id}[/instance/{start}]')
    const posted_bookings = () =>
        vi
            .mocked(ts_client_mod.post)
            .mock.calls.filter(([url]) => String(url).includes('/bookings'));
    const del_urls = () =>
        vi.mocked(ts_client_mod.del).mock.calls.map(([url]) => String(url));

    // The real `openConfirmModal` runs against a fake MatDialog ref: its
    // `event` emitter resolves the confirmation ({ reason: 'done' } emitted on
    // the next macrotask, after openConfirmModal has subscribed), while
    // `afterClosed` must stay pending or it wins the internal Promise.race
    // with an empty result.
    const mockConfirm = () => {
        const confirm_event = new EventEmitter<any>();
        const confirm_ref = {
            afterClosed: () => NEVER,
            componentInstance: {
                event: confirm_event,
                loading: { set: vi.fn() },
            },
            close: vi.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(confirm_ref);
        setTimeout(() => confirm_event.emit({ reason: 'done' }));
        return confirm_ref;
    };

    beforeEach(() => {
        vi.clearAllMocks();
        current_building = { id: 'bld-1' };
        settings_map = { 'app.use_region': false };
        active_building = signal(current_building);
        active_region = signal({ id: 'region-1' });
        organisation_service.active_building = active_building;
        organisation_service.active_region = active_region;
        organisation_service.region = { id: 'region-1' };
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        vi.mocked(ts_client_mod.get).mockResolvedValue([] as any);
        vi.mocked(ts_client_mod.post).mockResolvedValue({} as any);
        vi.mocked(ts_client_mod.patch).mockResolvedValue({} as any);
        vi.mocked(ts_client_mod.put).mockResolvedValue({} as any);
        vi.mocked(ts_client_mod.del).mockResolvedValue(undefined as any);
        vi.mocked(ts_client_mod.updateMetadata).mockResolvedValue({} as never);
        vi.mocked(ts_client_mod.showMetadata).mockResolvedValue({
            details: [],
        } as never);
        spectator = createService();
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
        vi.restoreAllMocks();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should open the booking history modal for a desk booking', () => {
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

    it('should download the current desk list', async () => {
        Object.defineProperty(spectator.service, 'desks', {
            value: () => [
                new Desk({
                    id: 'desk-1',
                    name: 'Desk One',
                    bookable: true,
                }),
                new Desk({ id: 'desk-2', name: 'Desk Two' }),
            ],
        });
        const downloads = captureDownloads();
        try {
            spectator.service.downloadDesksCSV();
            const csv = await downloads.text();

            expect(downloads.filename).toBe('desks.csv');
            expect(csv).toContain('desk-1');
            expect(csv).toContain('Desk One');
            expect(csv).toContain('desk-2');
            expect(csv).not.toContain('Test Desk');
        } finally {
            downloads.restore();
        }
    });

    it('should reload desk bookings when the active building changes', () => {
        expect((spectator.service as any)._currentLevelList()).toEqual([
            { id: 'bld-1-lvl-1' },
        ]);
        current_building = { id: 'bld-2' };
        active_building.set(current_building);
        expect((spectator.service as any)._currentLevelList()).toEqual([
            { id: 'bld-2-lvl-1' },
        ]);
    });

    it('should apply building timezone to desk booking listing requests', () => {
        current_building = { id: 'bld-1', timezone: 'Australia/Sydney' };
        active_building.set(current_building);
        (spectator.inject(SettingsService).get as any) = vi.fn(
            (name: string) => {
                if (name === 'app.use_region') return false;
                if (name === 'app.bookings.use_building_timezone') return true;
                return undefined;
            },
        );
        const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const expected_offset = getTimezoneDifferenceInHours(
            current_tz,
            'Australia/Sydney',
        );
        const date = new Date('2026-06-15T12:00:00').valueOf();

        expect(spectator.service.tz_offset).toBe(expected_offset);
        expect(
            getUnixTime(
                addMinutes(startOfDay(date), spectator.service.tz_offset * 60),
            ),
        ).toBe(getUnixTime(addMinutes(startOfDay(date), expected_offset * 60)));
        expect(
            getUnixTime(
                addMinutes(endOfDay(date), spectator.service.tz_offset * 60),
            ),
        ).toBe(getUnixTime(addMinutes(endOfDay(date), expected_offset * 60)));
    });

    it('should include and show rejected desk bookings as declined', async () => {
        const first_page = vi.fn(() =>
            Promise.resolve({
                data: [
                    {
                        id: 'booking-1',
                        rejected: true,
                        status: 'approved',
                    },
                ],
                total: 1,
                next: null,
            }),
        );
        (spectator.service as any)._first_page = first_page;
        (spectator.service as any)._next_page_fn = first_page;

        await (spectator.service as any)._loadPage(true);

        expect(spectator.service.bookings()[0]).toEqual(
            expect.objectContaining({
                rejected: true,
                status: 'declined',
            }),
        );
    });

    it('should keep rejected status when a fast reload returns the old approved state', async () => {
        const booking = {
            id: 'booking-1',
            approved: true,
            rejected: false,
            status: 'approved',
        } as any;
        const first_page = vi.fn(() =>
            Promise.resolve({
                data: [{ ...booking, approved: true, status: 'approved' }],
                total: 1,
                next: null,
            }),
        );

        await spectator.service.rejectDesk(booking);
        (spectator.service as any)._first_page = first_page;
        (spectator.service as any)._next_page_fn = first_page;
        await (spectator.service as any)._loadPage(true);

        expect(spectator.service.bookings()[0]).toEqual(
            expect.objectContaining({
                approved: false,
                rejected: true,
                status: 'declined',
            }),
        );
    });

    it('should cancel only one recurring booking instance', async () => {
        mockConfirm();
        const booking = new Booking({
            id: 'booking-1',
            parent_id: 'booking-parent',
            instance: 1_740_000_000,
        });
        const other_instance = new Booking({
            id: 'booking-1',
            parent_id: 'booking-parent',
            instance: 1_740_086_400,
        });
        (spectator.service as any)._bookings_state.set({
            list: [booking, other_instance],
            total: 2,
            has_next: false,
        });

        await spectator.service.cancelBooking(booking);

        expect(del_urls()).toEqual([
            expect.stringContaining('/booking-1/instance/1740000000'),
        ]);
        expect(spectator.service.bookings()).toEqual([
            expect.objectContaining({
                instance: 1_740_000_000,
                deleted: true,
                status: 'cancelled',
            }),
            expect.objectContaining({
                instance: 1_740_086_400,
                deleted: false,
            }),
        ]);
    });

    it('should delete recurring booking series and update every instance', async () => {
        mockConfirm();
        const booking = new Booking({
            id: 'booking-1',
            parent_id: 'booking-parent',
            instance: 1_740_000_000,
        });
        const other_instance = new Booking({
            id: 'booking-2',
            parent_id: 'booking-parent',
            instance: 1_740_086_400,
        });
        const unrelated_booking = new Booking({ id: 'booking-3' });
        (spectator.service as any)._bookings_state.set({
            list: [booking, other_instance, unrelated_booking],
            total: 3,
            has_next: false,
        });

        await spectator.service.cancelBooking(booking, true);

        expect(del_urls()).toEqual([
            expect.stringMatching(/\/bookings\/booking-parent\?utm_source=/),
        ]);
        expect(spectator.service.bookings()).toEqual([
            expect.objectContaining({ deleted: true, status: 'cancelled' }),
            expect.objectContaining({ deleted: true, status: 'cancelled' }),
            expect.objectContaining({ id: 'booking-3', deleted: false }),
        ]);
    });

    it('should create assigned booking for non-bookable desks', async () => {
        const mock_now = new Date('2026-06-15T12:00:00Z').valueOf();
        current_building = { id: 'bld-1', timezone: 'Australia/Sydney' };
        active_building.set(current_building);
        settings_map['app.bookings.use_building_timezone'] = true;
        vi.spyOn(Date, 'now').mockReturnValue(mock_now);
        // The real `setTimeInTimezone` runs (workspace fns can't be spied);
        // derive the expected window with the same inputs the service uses.
        const assigned_start = setTimeInTimezone(
            mock_now,
            1,
            0,
            'Australia/Sydney',
        );
        const dialog_ref = {
            afterClosed: () =>
                of({
                    reason: 'done',
                    metadata: {
                        id: 'desk-1',
                        name: 'Desk 1',
                        bookable: false,
                        assigned_to: 'staff@example.com',
                        assigned_name: 'Staff Name',
                    },
                }),
            componentInstance: {
                event: new EventEmitter<any>(),
                loading: { set: vi.fn() },
            },
            close: vi.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        spectator.service.setFilters({ zones: ['level-1'] });

        await spectator.service.editDesk({ id: 'desk-1' } as any);

        expect(posted_bookings()).toHaveLength(1);
        expect(posted_bookings()[0][1]).toEqual(
            expect.objectContaining({
                booking_start: getUnixTime(assigned_start),
                booking_end: getUnixTime(addHours(assigned_start, 22)),
            }),
        );
    });

    it('should block assignments when the desk limit is reached', async () => {
        settings_map['app.desks.max_assigned_count'] = 1;
        vi.mocked(ts_client_mod.showMetadata).mockResolvedValue({
            details: [
                {
                    id: 'desk-existing',
                    assigned_to: 'staff@example.com',
                    assigned_name: 'Staff Name',
                },
            ],
        } as never);
        const dialog_ref = {
            afterClosed: () =>
                of({
                    reason: 'done',
                    metadata: {
                        id: 'desk-new',
                        name: 'Desk New',
                        assigned_to: 'staff@example.com',
                        assigned_name: 'Staff Name',
                    },
                }),
            componentInstance: {
                event: new EventEmitter<any>(),
                loading: { set: vi.fn() },
            },
            close: vi.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        spectator.service.setFilters({ zones: ['level-1'] });

        await spectator.service
            .editDesk({ id: 'desk-new-2' } as any)
            .catch(() => undefined);

        expect(notify_open).toHaveBeenCalledWith(
            'Users can only have 1 assigned desk at a time.',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(ts_client_mod.updateMetadata).not.toHaveBeenCalled();
        expect(posted_bookings()).toHaveLength(0);
        expect(dialog_ref.componentInstance.loading.set).toHaveBeenCalledWith(
            false,
        );
    });

    it('should restore the previous assigned desk booking when reassignment fails', async () => {
        const original_desk = {
            id: 'desk-1',
            name: 'Desk 1',
            assigned_to: 'old.staff@example.com',
            assigned_name: 'Old Staff',
            zone: { id: 'level-1' },
            zones: ['level-1'],
        } as any;
        const dialog_ref = {
            afterClosed: () =>
                of({
                    reason: 'done',
                    metadata: {
                        ...original_desk,
                        assigned_to: 'new.staff@example.com',
                        assigned_name: 'New Staff',
                    },
                }),
            componentInstance: {
                event: new EventEmitter<any>(),
                loading: { set: vi.fn() },
            },
            close: vi.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        spectator.service.setFilters({ zones: ['level-1'] });
        // `_clearAssignedBooking` looks the old booking up via queryBookings.
        vi.mocked(ts_client_mod.get).mockResolvedValue([
            { id: 'booking-1', asset_id: 'desk-1' },
        ] as any);
        // First save (new assignment) conflicts; the restore save succeeds.
        vi.mocked(ts_client_mod.post)
            .mockRejectedValueOnce({ status: 409 })
            .mockResolvedValueOnce({} as any);

        await spectator.service.editDesk(original_desk).catch(() => undefined);

        expect(ts_client_mod.updateMetadata).toHaveBeenCalledTimes(2);
        expect(del_urls()).toEqual([
            expect.stringMatching(/\/bookings\/booking-1\?utm_source=/),
        ]);
        expect(posted_bookings()).toHaveLength(2);
        expect(posted_bookings()[0][1]).toEqual(
            expect.objectContaining({
                user_email: 'new.staff@example.com',
                user_name: 'New Staff',
                asset_id: 'desk-1',
            }),
        );
        expect(posted_bookings()[1][1]).toEqual(
            expect.objectContaining({
                user_email: 'old.staff@example.com',
                user_name: 'Old Staff',
                asset_id: 'desk-1',
                asset_name: 'Desk 1',
                zones: expect.arrayContaining([
                    'org-1',
                    'region-1',
                    'bld-1',
                    'level-1',
                    { id: 'level-1' },
                ]),
                extension_data: expect.objectContaining({
                    asset_name: 'Desk 1',
                    is_assigned: true,
                }),
            }),
        );
    });

    it.todo('should handle loading desk bookings');
    it.todo('should handle loading desk list');
    it.todo('should handle filtering of desk bookings');
    it.todo('should handle filtering of desk list');
    it.todo('should allow for polling of desk bookings');
    it.todo('should allow checking in of bookings');
    it.todo('should allow approving of bookings');
    it.todo('should allow rejection of bookings');
    it.todo('should allow toggling of access state for booking users');

    it('should mark a rejected desk booking as declined', async () => {
        const booking = {
            id: 'booking-1',
            approved: true,
            rejected: false,
            status: 'approved',
        } as any;

        await spectator.service.rejectDesk(booking);

        expect(posted_bookings()).toEqual([
            [
                expect.stringContaining('/bookings/booking-1/reject'),
                expect.anything(),
            ],
        ]);
        expect(booking.approved).toBe(false);
        expect(booking.rejected).toBe(true);
        expect(booking.status).toBe('declined');
        expect(notify_open).toHaveBeenCalledWith(
            'APP.CONCIERGE.DESKS_REJECT_SUCCESS',
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });

    it('should reset desk bookings with the first page query on refresh', () => {
        const first_page = vi.fn(() =>
            Promise.resolve({ data: [], total: 0, next: null }),
        );
        (spectator.service as any)._first_page = first_page;

        spectator.service.refresh();

        expect((spectator.service as any)._next_page_fn).toBe(first_page);
        expect(first_page).toHaveBeenCalled();
    });

    it('should reject all displayed desk bookings with the instance endpoint where needed', async () => {
        const confirm_ref = mockConfirm();
        const list = [
            { id: 'booking-1', status: 'approved' },
            {
                id: 'booking-2',
                instance: 1_740_000_000,
                status: 'approved',
            },
        ];
        Object.defineProperty(spectator.service, 'paged_bookings', {
            value: () => ({
                list,
                total: 2,
                has_next: false,
            }),
        });
        const refresh_spy = vi.spyOn(spectator.service, 'refresh');

        await spectator.service.rejectAllDesks();

        expect(vi.mocked(ts_client_mod.post)).toHaveBeenCalledWith(
            expect.stringContaining('/bookings/booking-1/reject'),
            expect.anything(),
        );
        expect(vi.mocked(ts_client_mod.post)).toHaveBeenCalledWith(
            expect.stringContaining('/bookings/booking-2/reject/1740000000'),
            expect.anything(),
        );
        expect(confirm_ref.componentInstance.loading.set).toHaveBeenCalledWith(
            'APP.CONCIERGE.DESKS_REJECT_ALL_LOADING',
        );
        expect(confirm_ref.close).toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledWith(
            'APP.CONCIERGE.DESKS_REJECT_ALL_SUCCESS',
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
        expect(list.every((desk) => desk.status === 'declined')).toBe(true);
        expect(refresh_spy).toHaveBeenCalled();
    });

    it('should close the reject all confirmation when a desk rejection fails', async () => {
        const confirm_ref = mockConfirm();
        Object.defineProperty(spectator.service, 'paged_bookings', {
            value: () => ({
                list: [{ id: 'booking-1', instance: 1_740_000_000 }],
                total: 1,
                has_next: false,
            }),
        });
        vi.mocked(ts_client_mod.post).mockImplementation((url) =>
            String(url).includes('/reject/')
                ? Promise.reject('405 Method Not Allowed')
                : Promise.resolve({} as any),
        );
        const refresh_spy = vi.spyOn(spectator.service, 'refresh');

        await expect(spectator.service.rejectAllDesks()).rejects.toBe(
            '405 Method Not Allowed',
        );

        expect(notify_open).toHaveBeenCalledWith(
            'APP.CONCIERGE.DESKS_REJECT_ALL_ERROR',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(confirm_ref.close).toHaveBeenCalled();
        expect(notify_open).not.toHaveBeenCalledWith(
            'APP.CONCIERGE.DESKS_REJECT_ALL_SUCCESS',
            expect.anything(),
            expect.anything(),
        );
        expect(refresh_spy).not.toHaveBeenCalled();
    });
});
