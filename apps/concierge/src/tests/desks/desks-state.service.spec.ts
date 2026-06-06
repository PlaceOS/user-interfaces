import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { addMinutes, endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, lastValueFrom, of, throwError } from 'rxjs';

import * as booking_mod from '@placeos/bookings';
import * as common_mod from '@placeos/common';
import { SettingsService } from '@placeos/common';
import * as component_mod from '@placeos/components';
import * as ts_client_mod from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';
import { DesksStateService } from '../../app/desks/desks-state.service';

jest.mock('@placeos/bookings');
jest.mock('@placeos/common');
jest.mock('@placeos/components');
jest.mock('@placeos/ts-client');

describe('DesksStateService', () => {
    let spectator: SpectatorService<DesksStateService>;
    let active_building: BehaviorSubject<any>;
    let active_region: BehaviorSubject<any>;
    let current_building: any;
    let settings_map: Record<string, any>;
    const organisation_service: any = {
        active_levels: of([]),
        initialised: of(true),
        levelWithID: jest.fn(),
        organisation: { id: 'org-1' },
        region: { id: 'region-1' },
        buildings: [],
        levelsForBuilding: jest.fn((building) => [
            { id: `${building?.id || 'bld-1'}-lvl-1` },
        ]),
        levelsForRegion: jest.fn(() => []),
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
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(SettingsService, {
                get: ((name: string) => settings_map[name]) as any,
            } as any),
            MockProvider(OrganisationService, organisation_service),
        ],
    });

    beforeEach(() => {
        current_building = { id: 'bld-1' };
        settings_map = { 'app.use_region': false };
        active_building = new BehaviorSubject(current_building);
        active_region = new BehaviorSubject({ id: 'region-1' });
        organisation_service.active_building = active_building;
        organisation_service.active_region = active_region;
        organisation_service.region = { id: 'region-1' };
        (booking_mod as any).queryPagedBookings = jest.fn(() =>
            of({ data: [], total: 0, next: null }),
        );
        (booking_mod as any).queryBookings = jest.fn(() => of([]));
        (booking_mod as any).saveBooking = jest.fn(() => of({}));
        (booking_mod as any).removeBooking = jest.fn(() => of(undefined));
        (booking_mod as any).rejectBooking = jest.fn(() => of({}));
        (booking_mod as any).rejectBookingInstance = jest.fn(() => of({}));
        (booking_mod as any).updateBooking = jest.fn(() => of({}));
        jest.spyOn(ts_client_mod, 'updateMetadata').mockReturnValue(
            of({}) as any,
        );
        jest.spyOn(ts_client_mod, 'showMetadata').mockReturnValue(
            of({ details: [] }) as any,
        );
        (component_mod as any).openConfirmModal = jest.fn(async () => ({
            reason: 'done',
            loading: jest.fn(),
            close: jest.fn(),
        }));
        (common_mod as any).nextValueFrom = jest.fn((obs) =>
            lastValueFrom(obs),
        );
        (common_mod as any).i18n = jest.fn((key) => key);
        (common_mod as any).notifySuccess = jest.fn();
        (common_mod as any).notifyError = jest.fn();
        (common_mod as any).setTimeInTimezone = jest.fn((date) => date);
        (common_mod as any).unique = jest.fn((list) => list);
        (common_mod as any).Booking.mockImplementation(function (data) {
            Object.assign(this, data);
        });
        jest.clearAllMocks();
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should reload desk bookings when the active building changes', () => {
        expect((spectator.service as any)._currentLevelList()).toEqual([
            { id: 'bld-1-lvl-1' },
        ]);
        current_building = { id: 'bld-2' };
        active_building.next(current_building);
        expect((spectator.service as any)._currentLevelList()).toEqual([
            { id: 'bld-2-lvl-1' },
        ]);
    });

    it('should apply building timezone to desk booking listing requests', () => {
        current_building = { id: 'bld-1', timezone: 'Australia/Sydney' };
        active_building.next(current_building);
        (spectator.inject(SettingsService).get as any) = jest.fn(
            (name: string) => {
                if (name === 'app.use_region') return false;
                if (name === 'app.bookings.use_building_timezone') return true;
                return undefined;
            },
        );
        (common_mod as any).getTimezoneDifferenceInHours = jest.fn(() => 2);
        const date = new Date('2026-06-15T12:00:00').valueOf();

        expect(spectator.service.tz_offset).toBe(2);
        expect(
            getUnixTime(
                addMinutes(startOfDay(date), spectator.service.tz_offset * 60),
            ),
        ).toBe(getUnixTime(addMinutes(startOfDay(date), 120)));
        expect(
            getUnixTime(
                addMinutes(endOfDay(date), spectator.service.tz_offset * 60),
            ),
        ).toBe(getUnixTime(addMinutes(endOfDay(date), 120)));
    });

    it('should cancel only one recurring booking instance', async () => {
        const booking = {
            id: 'booking-1',
            parent_id: 'booking-parent',
            instance: 1_740_000_000,
        } as any;

        await spectator.service.cancelBooking(booking);

        expect(booking_mod.removeBooking).toHaveBeenCalledWith('booking-1', {
            instance: true,
            start_time: 1_740_000_000,
        });
    });

    it('should delete recurring booking series by parent booking id', async () => {
        const booking = {
            id: 'booking-1',
            parent_id: 'booking-parent',
            instance: 1_740_000_000,
        } as any;

        await spectator.service.cancelBooking(booking, true);

        expect(booking_mod.removeBooking).toHaveBeenCalledWith(
            'booking-parent',
            {},
        );
    });

    it('should create assigned booking for non-bookable desks', async () => {
        const mock_now = new Date('2026-06-15T12:00:00Z').valueOf();
        const assigned_start = new Date('2026-06-15T01:00:00Z').valueOf();
        current_building = { id: 'bld-1', timezone: 'Australia/Sydney' };
        active_building.next(current_building);
        settings_map['app.bookings.use_building_timezone'] = true;
        jest.spyOn(Date, 'now').mockReturnValue(mock_now);
        (common_mod as any).setTimeInTimezone.mockReturnValue(assigned_start);
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
                loading: { set: jest.fn() },
            },
            close: jest.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        spectator.service.setFilters({ zones: ['level-1'] });

        await spectator.service.editDesk({ id: 'desk-1' } as any);

        expect(common_mod.setTimeInTimezone).toHaveBeenCalledWith(
            mock_now,
            1,
            0,
            'Australia/Sydney',
        );
        expect(booking_mod.saveBooking).toHaveBeenCalledWith(
            expect.objectContaining({
                booking_start: getUnixTime(assigned_start),
                booking_end: getUnixTime(
                    assigned_start + 22 * 60 * 60 * 1000,
                ),
            }),
        );
    });

    it('should persist homebase when editing desks', async () => {
        jest.spyOn(ts_client_mod, 'updateMetadata').mockReturnValue(
            of({}) as any,
        );
        const dialog_ref = {
            afterClosed: () =>
                of({
                    reason: 'done',
                    metadata: {
                        id: 'desk-1',
                        name: 'Desk 1',
                        map_id: 'desk-1',
                        homebase: 'Sydney HQ',
                    },
                }),
            componentInstance: {
                event: new EventEmitter<any>(),
                loading: { set: jest.fn() },
            },
            close: jest.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        spectator.service.setFilters({ zones: ['level-1'] });

        await spectator.service.editDesk({ id: 'desk-1' } as any);

        expect(ts_client_mod.updateMetadata).toHaveBeenCalledWith(
            'level-1',
            expect.objectContaining({
                details: expect.arrayContaining([
                    expect.objectContaining({ homebase: 'Sydney HQ' }),
                ]),
            }),
        );
    });

    it('should block assignments when the desk limit is reached', async () => {
        settings_map['app.desks.max_assigned_count'] = 1;
        (ts_client_mod.showMetadata as jest.Mock).mockReturnValue(
            of({
                details: [
                    {
                        id: 'desk-existing',
                        assigned_to: 'staff@example.com',
                        assigned_name: 'Staff Name',
                    },
                ],
            }) as any,
        );
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
                loading: { set: jest.fn() },
            },
            close: jest.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        spectator.service.setFilters({ zones: ['level-1'] });

        await spectator.service
            .editDesk({ id: 'desk-new-2' } as any)
            .catch(() => undefined);

        expect(common_mod.notifyError).toHaveBeenCalledWith(
            'Users can only have 1 assigned desk at a time.',
        );
        expect(ts_client_mod.updateMetadata).not.toHaveBeenCalled();
        expect(booking_mod.saveBooking).not.toHaveBeenCalled();
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
                loading: { set: jest.fn() },
            },
            close: jest.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        spectator.service.setFilters({ zones: ['level-1'] });
        (booking_mod.queryBookings as jest.Mock).mockReturnValue(
            of([
                {
                    id: 'booking-1',
                    asset_id: 'desk-1',
                },
            ]),
        );
        (booking_mod.saveBooking as jest.Mock)
            .mockReturnValueOnce(throwError(() => ({ status: 409 })))
            .mockReturnValueOnce(of({}));

        await spectator.service.editDesk(original_desk).catch(() => undefined);

        expect(ts_client_mod.updateMetadata).toHaveBeenCalledTimes(2);
        expect(booking_mod.removeBooking).toHaveBeenCalledWith('booking-1');
        expect(booking_mod.saveBooking).toHaveBeenCalledTimes(2);
        expect(common_mod.Booking).toHaveBeenCalledTimes(2);
        expect(common_mod.Booking).toHaveBeenNthCalledWith(
            1,
            expect.objectContaining({
                user_email: 'new.staff@example.com',
                user_name: 'New Staff',
                asset_id: 'desk-1',
            }),
        );
        expect(common_mod.Booking).toHaveBeenNthCalledWith(
            2,
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

    it('should reject all displayed desk bookings with the instance endpoint where needed', async () => {
        const confirm_ref = {
            reason: 'done',
            loading: jest.fn(),
            close: jest.fn(),
        };
        (component_mod.openConfirmModal as jest.Mock).mockResolvedValue(
            confirm_ref,
        );
        Object.defineProperty(spectator.service, 'paged_bookings', {
            value: () => ({
                list: [
                    { id: 'booking-1' },
                    { id: 'booking-2', instance: 1_740_000_000 },
                ],
                total: 2,
                has_next: false,
            }),
        });

        await spectator.service.rejectAllDesks();

        expect(booking_mod.rejectBooking).toHaveBeenCalledWith('booking-1');
        expect(booking_mod.rejectBookingInstance).toHaveBeenCalledWith(
            'booking-2',
            1_740_000_000,
        );
        expect(confirm_ref.loading).toHaveBeenCalledWith(
            'APP.CONCIERGE.DESKS_REJECT_ALL_LOADING',
        );
        expect(confirm_ref.close).toHaveBeenCalled();
        expect(common_mod.notifySuccess).toHaveBeenCalledWith(
            'APP.CONCIERGE.DESKS_REJECT_ALL_SUCCESS',
        );
    });

    it('should close the reject all confirmation when a desk rejection fails', async () => {
        const confirm_ref = {
            reason: 'done',
            loading: jest.fn(),
            close: jest.fn(),
        };
        (component_mod.openConfirmModal as jest.Mock).mockResolvedValue(
            confirm_ref,
        );
        Object.defineProperty(spectator.service, 'paged_bookings', {
            value: () => ({
                list: [{ id: 'booking-1', instance: 1_740_000_000 }],
                total: 1,
                has_next: false,
            }),
        });
        (booking_mod.rejectBookingInstance as jest.Mock).mockReturnValue(
            throwError(() => '405 Method Not Allowed'),
        );

        await expect(spectator.service.rejectAllDesks()).rejects.toBe(
            '405 Method Not Allowed',
        );

        expect(common_mod.notifyError).toHaveBeenCalledWith(
            'APP.CONCIERGE.DESKS_REJECT_ALL_ERROR',
        );
        expect(confirm_ref.close).toHaveBeenCalled();
        expect(common_mod.notifySuccess).not.toHaveBeenCalled();
    });
});
