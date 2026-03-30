import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { addMinutes, endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, lastValueFrom, of } from 'rxjs';

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
                get: ((name: string) =>
                    name === 'app.use_region' ? false : undefined) as any,
            } as any),
            MockProvider(OrganisationService, organisation_service),
        ],
    });

    beforeEach(() => {
        current_building = { id: 'bld-1' };
        active_building = new BehaviorSubject(current_building);
        active_region = new BehaviorSubject({ id: 'region-1' });
        organisation_service.active_building = active_building;
        organisation_service.active_region = active_region;
        organisation_service.region = { id: 'region-1' };
        (booking_mod as any).queryPagedBookings = jest.fn(() =>
            of({ data: [], total: 0, next: null }),
        );
        (booking_mod as any).saveBooking = jest.fn(() => of({}));
        (booking_mod as any).removeBooking = jest.fn(() => of(undefined));
        jest.spyOn(ts_client_mod, 'updateMetadata').mockReturnValue(
            of({}) as any,
        );
        (component_mod as any).openConfirmModal = jest.fn(async () => ({
            reason: 'done',
            loading: jest.fn(),
            close: jest.fn(),
        }));
        (common_mod as any).nextValueFrom = jest.fn((obs) =>
            lastValueFrom(obs),
        );
        (common_mod as any).notifySuccess = jest.fn();
        (common_mod as any).notifyError = jest.fn();
        (common_mod as any).unique = jest.fn((list) => list);
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should reload desk bookings when the active building changes', async () => {
        jest.useFakeTimers();
        spectator.service.setFilters({ view: 'events' });
        await jest.advanceTimersByTimeAsync(1100);

        expect(booking_mod.queryPagedBookings).toHaveBeenCalledTimes(1);
        expect(booking_mod.queryPagedBookings).toHaveBeenLastCalledWith(
            expect.objectContaining({ zones: 'bld-1' }),
        );

        current_building = { id: 'bld-2' };
        active_building.next(current_building);
        await jest.advanceTimersByTimeAsync(1100);

        expect(booking_mod.queryPagedBookings).toHaveBeenCalledTimes(2);
        expect(booking_mod.queryPagedBookings).toHaveBeenLastCalledWith(
            expect.objectContaining({ zones: 'bld-2' }),
        );
        jest.useRealTimers();
    });

    it('should apply building timezone to desk booking listing requests', async () => {
        jest.useFakeTimers();
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

        spectator.service.setFilters({ view: 'events', date });
        await jest.advanceTimersByTimeAsync(1100);

        expect(booking_mod.queryPagedBookings).toHaveBeenLastCalledWith(
            expect.objectContaining({
                period_start: getUnixTime(addMinutes(startOfDay(date), 120)),
                period_end: getUnixTime(addMinutes(endOfDay(date), 120)),
            }),
        );
        jest.useRealTimers();
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

        expect(booking_mod.saveBooking).toHaveBeenCalled();
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
    it.todo('should allow rejection of all displayed bookings');
});
