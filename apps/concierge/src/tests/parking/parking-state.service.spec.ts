import { signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator/jest';
import { Booking, OrganisationService, SettingsService } from '@placeos/common';
import { addMinutes, endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { of } from 'rxjs';

import * as assets_mod from '@placeos/assets';
import * as booking_mod from '@placeos/bookings';
import * as common_mod from '@placeos/common';
import * as component_mod from '@placeos/components';
import { UserPipe } from '@placeos/users';
import { MockProvider } from 'ng-mocks';
import { ParkingStateService } from '../../app/parking/parking-state.service';
import { ParkingBookingModalComponent } from '../../app/parking/parking-booking-modal.component';
import { ParkingRequestModalComponent } from '../../app/parking/parking-request-modal.component';

jest.mock('@placeos/assets');
jest.mock('@placeos/bookings');
jest.mock('@placeos/components');
jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return {
        ...actual,
        getTimezoneDifferenceInHours: jest.fn(() => 0),
        loadTextFileFromInputEvent: jest.fn(),
        notifyError: jest.fn(),
        notifySuccess: jest.fn(),
    };
});

describe('ParkingStateService', () => {
    let spectator: SpectatorService<ParkingStateService>;
    let active_building: WritableSignal<any>;
    let active_region: WritableSignal<any>;
    let current_building: any;
    let settings_map: Record<string, any>;

    const organisation_service: any = {
        organisation: { id: 'org-1' },
        region: { id: 'region-1' },
        initialised: signal(true),
        levels: [],
        buildingsForRegion: jest.fn(() => []),
        levelsForBuilding: jest.fn((bld) =>
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
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(SettingsService, {
                get: jest.fn((name: string) => settings_map[name]) as any,
                signal: jest.fn((name: string, default_value: any) =>
                    signal(settings_map[`app.${name}`] ?? default_value),
                ) as any,
            } as any),
            MockProvider(OrganisationService, organisation_service),
        ],
    });

    beforeEach(() => {
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
        (assets_mod as any).queryParkingUsers = jest.fn(() =>
            Promise.resolve([]),
        );
        (assets_mod as any).queryParkingFleetVehicles = jest.fn(() =>
            Promise.resolve([]),
        );
        (assets_mod as any).queryParkingSpaces = jest.fn(() =>
            Promise.resolve([]),
        );
        (assets_mod as any).queryParkingSpacesForZones = jest.fn(() =>
            Promise.resolve([]),
        );
        (booking_mod as any).bookedResourceList = jest.fn(() =>
            Promise.resolve([]),
        );
        (booking_mod as any).queryBookings = jest.fn(() => Promise.resolve([]));
        (booking_mod as any).saveBooking = jest.fn(() => Promise.resolve({}));
        (booking_mod as any).updateBooking = jest.fn(() =>
            Promise.resolve({}),
        );
        (booking_mod as any).updateBookingInstance = jest.fn(() =>
            Promise.resolve({}),
        );
        (booking_mod as any).approveBooking = jest.fn(() =>
            Promise.resolve({}),
        );
        (booking_mod as any).approveBookingInstance = jest.fn(() =>
            Promise.resolve({}),
        );
        (booking_mod as any).removeBooking = jest.fn(() =>
            Promise.resolve({}),
        );
        (component_mod as any).openConfirmModal = jest.fn(async () => ({
            reason: 'done',
            loading: jest.fn(),
            close: jest.fn(),
        }));
        jest.clearAllMocks();
        (common_mod.getTimezoneDifferenceInHours as jest.Mock).mockReturnValue(
            2,
        );
        spectator = createService();
    });

    afterEach(() => jest.restoreAllMocks());

    it('should apply building timezone to parking booking listing requests', async () => {
        jest.useFakeTimers();
        const date = new Date('2026-06-15T12:00:00').valueOf();

        spectator.service.setOptions({ date });
        TestBed.flushEffects();
        await jest.advanceTimersByTimeAsync(1100);
        TestBed.flushEffects();

        expect(booking_mod.queryBookings).toHaveBeenLastCalledWith(
            expect.objectContaining({
                period_start: getUnixTime(addMinutes(startOfDay(date), 120)),
                period_end: getUnixTime(addMinutes(endOfDay(date), 120)),
            }),
        );

        jest.useRealTimers();
    });

    it('should apply parking timezone setting to booking listing requests', async () => {
        jest.useFakeTimers();
        settings_map['app.bookings.use_building_timezone'] = false;
        settings_map['app.parking.use_building_timezone'] = true;
        const date = new Date('2026-06-15T12:00:00').valueOf();

        spectator.service.setOptions({ date });
        TestBed.flushEffects();
        await jest.advanceTimersByTimeAsync(1100);
        TestBed.flushEffects();

        expect(booking_mod.queryBookings).toHaveBeenLastCalledWith(
            expect.objectContaining({
                period_start: getUnixTime(addMinutes(startOfDay(date), 120)),
                period_end: getUnixTime(addMinutes(endOfDay(date), 120)),
            }),
        );

        jest.useRealTimers();
    });

    it('should filter booking listings by selected levels for all bookings', async () => {
        jest.useFakeTimers();

        spectator.service.setOptions({
            request_filter: 'all',
            zones: ['lvl-1', 'lvl-2'],
        });
        TestBed.flushEffects();
        await jest.advanceTimersByTimeAsync(1100);
        TestBed.flushEffects();

        expect(booking_mod.queryBookings).toHaveBeenLastCalledWith(
            expect.objectContaining({
                zones: 'lvl-1,lvl-2',
            }),
        );

        jest.useRealTimers();
    });

    it('should filter request listings by the building zone when levels are disabled', async () => {
        jest.useFakeTimers();

        spectator.service.setOptions({
            request_filter: 'requests',
            zones: ['lvl-1', 'lvl-2'],
        });
        TestBed.flushEffects();
        await jest.advanceTimersByTimeAsync(1100);
        TestBed.flushEffects();

        expect(booking_mod.queryBookings).toHaveBeenLastCalledWith(
            expect.objectContaining({
                zones: 'bld-1',
            }),
        );

        jest.useRealTimers();
    });

    it('should wait for parking users before loading bookings', async () => {
        jest.useFakeTimers();
        let resolve_users: (users: any[]) => void;
        (assets_mod.queryParkingUsers as jest.Mock).mockReturnValue(
            new Promise((resolve) => (resolve_users = resolve)),
        );
        spectator = createService();

        TestBed.flushEffects();
        await jest.advanceTimersByTimeAsync(1100);
        TestBed.flushEffects();
        expect(booking_mod.queryBookings).not.toHaveBeenCalled();

        resolve_users([]);
        await Promise.resolve();
        TestBed.flushEffects();
        await jest.advanceTimersByTimeAsync(1100);
        TestBed.flushEffects();

        expect(booking_mod.queryBookings).toHaveBeenCalledTimes(1);
        jest.useRealTimers();
    });

    it('should use the building timezone for assigned parking bookings', async () => {
        const mock_now = new Date('2026-06-15T12:00:00Z').valueOf();
        const assigned_start = common_mod.setTimeInTimezone(
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
                        id: 'space-1',
                        name: 'Bay 1',
                        assigned_to: 'staff@example.com',
                    },
                }),
            componentInstance: {
                event: of({ reason: 'done' }),
                loading: { set: jest.fn() },
            },
            close: jest.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        (assets_mod.saveParkingSpace as jest.Mock).mockReturnValue(
            Promise.resolve({ id: 'space-1', name: 'Bay 1' }),
        );
        jest.spyOn(UserPipe.prototype, 'transform').mockResolvedValue({
            id: 'user-1',
            name: 'Staff Name',
        } as any);
        jest.spyOn(Date, 'now').mockReturnValue(mock_now);

        await spectator.service.editSpace({ id: 'space-0' } as any);

        expect(booking_mod.saveBooking).toHaveBeenCalledWith(
            expect.objectContaining({
                booking_start: getUnixTime(assigned_start),
                booking_end: getUnixTime(
                    assigned_start + 22 * 60 * 60 * 1000,
                ),
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
        (assets_mod.queryParkingSpacesForZones as jest.Mock).mockReturnValue(
            of([{ id: 'space-1' }]),
        );
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
        jest.useFakeTimers();
        organisation_service.levels = [
            { id: 'lvl-1', parent_id: 'bld-1', tags: ['parking'] },
            { id: 'lvl-2', parent_id: 'bld-1', tags: ['parking'] },
        ];
        (assets_mod as any).queryParkingSpacesForZones = jest.fn(() =>
            Promise.resolve([
                { id: 'space-1', zone_id: 'lvl-1' },
                { id: 'space-2', zone_id: 'lvl-2' },
            ]),
        );

        spectator.service.setOptions({ zones: ['lvl-1', 'lvl-2'] });
        TestBed.flushEffects();
        await jest.advanceTimersByTimeAsync(400);
        TestBed.flushEffects();
        await jest.advanceTimersByTimeAsync(0);

        expect(assets_mod.queryParkingSpacesForZones).toHaveBeenCalledWith([
            'lvl-1',
            'lvl-2',
        ]);
        expect(spectator.service.spaces()).toEqual([
            expect.objectContaining({ id: 'space-1', zone_id: 'lvl-1' }),
            expect.objectContaining({ id: 'space-2', zone_id: 'lvl-2' }),
        ]);

        jest.useRealTimers();
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

        expect(spectator.service.filterEventList([request], 'waitlist')).toEqual([
            request,
        ]);
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

        expect(spectator.service.filterEventList([request], 'pending')).toEqual([
            request,
        ]);
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

        expect(spectator.service.filterEventList([request], 'waitlist')).toEqual(
            [],
        );
        expect(spectator.service.filterEventList([request], 'pending')).toEqual([
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
            status: 'tentative',
            extension_data: { approver_group: 'parking-team' },
        } as any;
        const declined_request = {
            id: 'request-2',
            asset_id: 'unallocated-2',
            status: 'declined',
            extension_data: { approver_group: 'parking-team' },
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
            status: 'tentative',
            extension_data: { approver_group: 'parking-team' },
        } as any;
        const approved_request = {
            id: 'request-2',
            asset_id: 'unallocated-2',
            status: 'approved',
            extension_data: { approver_group: 'parking-team' },
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
        (assets_mod as any).queryParkingSpaces = jest.fn(() =>
            Promise.resolve([
                {
                    id: 'space-1',
                    name: 'Bay 1',
                    zone_id: 'lvl-1',
                    bookable: true,
                },
            ]),
        );
        (booking_mod as any).bookedResourceList = jest.fn(() =>
            Promise.resolve([]),
        );
        const request = {
            id: 'req-1',
            asset_id: 'unallocated-1',
            status: 'tentative',
            date: new Date('2026-06-15T09:00:00').valueOf(),
            zones: ['org-1', 'bld-1'],
            extension_data: {},
        } as Booking;

        await spectator.service.approveBooking(request);

        expect(booking_mod.bookedResourceList).toHaveBeenCalledWith(
            expect.objectContaining({ zones: 'bld-1', type: 'parking' }),
        );
        expect(assets_mod.queryParkingSpaces).toHaveBeenCalledWith('lvl-1');
        expect(booking_mod.updateBooking).toHaveBeenCalledWith(
            'req-1',
            expect.objectContaining({
                asset_id: 'space-1',
                asset_name: 'Bay 1',
                zones: ['org-1', 'region-1', 'bld-1', 'lvl-1'],
                extension_data: expect.objectContaining({
                    asset_name: 'Bay 1',
                }),
            }),
        );
        expect(booking_mod.approveBooking).toHaveBeenCalledWith('req-1');
    });

    it('should error instead of approving when no spaces are available', async () => {
        settings_map['app.parking.assign_space_on_approve'] = true;
        organisation_service.levels = [
            { id: 'lvl-1', parent_id: 'bld-1', tags: ['parking'] },
        ];
        (assets_mod as any).queryParkingSpaces = jest.fn(() =>
            Promise.resolve([
                {
                    id: 'space-1',
                    name: 'Bay 1',
                    zone_id: 'lvl-1',
                    bookable: true,
                },
            ]),
        );
        (booking_mod as any).bookedResourceList = jest.fn(() =>
            Promise.resolve(['space-1']),
        );
        const request = {
            id: 'req-1',
            asset_id: 'unallocated-1',
            status: 'tentative',
            date: new Date('2026-06-15T09:00:00').valueOf(),
            zones: ['org-1', 'bld-1'],
            extension_data: {},
        } as Booking;

        await spectator.service.approveBooking(request);

        expect(booking_mod.updateBooking).not.toHaveBeenCalled();
        expect(booking_mod.approveBooking).not.toHaveBeenCalled();
        expect(common_mod.notifyError).toHaveBeenCalled();
    });

    it('should delete parking bookings after confirmation', async () => {
        const booking = {
            id: 'booking-1',
            asset_name: 'Bay 1',
            user_name: 'Test User',
            user_email: 'test@example.com',
            date: Date.now(),
        } as Booking;

        await spectator.service.removeBooking(booking);

        expect(component_mod.openConfirmModal).toHaveBeenCalled();
        expect(booking_mod.removeBooking).toHaveBeenCalledWith('booking-1', {});
        expect(common_mod.notifySuccess).toHaveBeenCalled();
    });

    it('should block assigned parking when the limit is reached', async () => {
        settings_map['app.parking.max_assigned_count'] = 1;
        organisation_service.levels = [
            { id: 'lvl-1', parent_id: 'bld-1', tags: ['parking'] },
        ];
        (assets_mod as any).queryParkingSpacesForZones = jest.fn(() =>
            Promise.resolve([
                {
                    id: 'space-existing',
                    assigned_to: 'staff@example.com',
                },
            ]),
        );
        const dialog_ref = {
            afterClosed: () =>
                of({
                    reason: 'done',
                    metadata: {
                        id: 'space-new',
                        identifier: 'Bay 2',
                        assigned_to: 'staff@example.com',
                        assigned_name: 'Staff Name',
                    },
                }),
            componentInstance: {
                event: of({ reason: 'done' }),
                loading: { set: jest.fn() },
            },
            close: jest.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);

        await spectator.service.editSpace({ id: 'space-other' } as any).catch(() => undefined);

        expect(common_mod.notifyError).toHaveBeenCalledWith(
            'Users can only have 1 assigned parking space at a time.',
        );
        expect(assets_mod.saveParkingSpace).not.toHaveBeenCalled();
        expect(booking_mod.saveBooking).not.toHaveBeenCalled();
        expect(dialog_ref.componentInstance.loading.set).toHaveBeenCalledWith(
            false,
        );
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
            afterClosed: () =>
                of({
                    reason: 'done',
                    metadata: {
                        ...original_space,
                        assigned_to: 'new.staff@example.com',
                        assigned_name: 'New Staff',
                    },
                }),
            componentInstance: {
                event: of({ reason: 'done' }),
                loading: { set: jest.fn() },
            },
            close: jest.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        (booking_mod.queryBookings as jest.Mock).mockReturnValue(
            Promise.resolve([
                {
                    id: 'booking-1',
                    asset_id: 'space-1',
                },
            ]),
        );
        (assets_mod.saveParkingSpace as jest.Mock)
            .mockResolvedValueOnce({ id: 'space-1', name: 'Bay 1' })
            .mockResolvedValueOnce(original_space);
        (booking_mod.saveBooking as jest.Mock)
            .mockRejectedValueOnce({ status: 409 })
            .mockResolvedValueOnce({});
        jest.spyOn(UserPipe.prototype, 'transform').mockResolvedValue({
            id: 'user-1',
            name: 'Staff Name',
        } as any);

        await spectator.service.editSpace(original_space).catch(() => undefined);

        expect(booking_mod.removeBooking).toHaveBeenCalledWith('booking-1');
        expect(assets_mod.saveParkingSpace).toHaveBeenCalledTimes(2);
        expect(assets_mod.saveParkingSpace).toHaveBeenNthCalledWith(
            2,
            expect.objectContaining({
                id: 'space-1',
                assigned_to: 'old.staff@example.com',
            }),
        );
        expect(booking_mod.saveBooking).toHaveBeenCalledTimes(2);
        expect(booking_mod.saveBooking).toHaveBeenNthCalledWith(
            2,
            expect.objectContaining({
                user_email: 'old.staff@example.com',
                asset_id: 'space-1',
                asset_name: 'Bay 1',
                extension_data: expect.objectContaining({
                    is_assigned: true,
                }),
            }),
        );
        expect(common_mod.notifyError).toHaveBeenCalledWith(
            'APP.CONCIERGE.PARKING_ASSIGN_SPACE_ERROR',
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
        (common_mod.loadTextFileFromInputEvent as jest.Mock).mockResolvedValue(
            'identifier,map_id,bookable,place_groups,features,notes\n' +
                'G.123,G.123,true,,"Maximum Height 2.3m,Open Ground Level",Car',
        );
        (assets_mod.saveParkingSpace as jest.Mock).mockReturnValue(of({}));

        await spectator.service.uploadSpacesCSV({} as InputEvent);

        expect(assets_mod.saveParkingSpace).toHaveBeenCalledWith(
            expect.objectContaining({
                identifier: 'G.123',
                features: ['Maximum Height 2.3m', 'Open Ground Level'],
                notes: 'Car',
                zone_id: 'lvl-1',
            }),
        );
    });
});
