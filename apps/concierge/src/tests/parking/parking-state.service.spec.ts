import { MatDialog } from '@angular/material/dialog';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { addMinutes, endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, of } from 'rxjs';

import * as assets_mod from '@placeos/assets';
import * as booking_mod from '@placeos/bookings';
import * as common_mod from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { ParkingStateService } from '../../app/parking/parking-state.service';

jest.mock('@placeos/assets');
jest.mock('@placeos/bookings');
jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return { ...actual, getTimezoneDifferenceInHours: jest.fn(() => 0) };
});

describe('ParkingStateService', () => {
    let spectator: SpectatorService<ParkingStateService>;
    let active_building: BehaviorSubject<any>;
    let active_region: BehaviorSubject<any>;
    let current_building: any;

    const organisation_service: any = {
        region: { id: 'region-1' },
        levels: [],
        buildingsForRegion: jest.fn(() => []),
        get building() {
            return current_building;
        },
    };

    const createService = createServiceFactory({
        service: ParkingStateService,
        providers: [
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(SettingsService, {
                get: jest.fn((name: string) => {
                    if (name === 'app.use_region') return false;
                    if (name === 'app.bookings.use_building_timezone') {
                        return true;
                    }
                    return undefined;
                }) as any,
            } as any),
            MockProvider(OrganisationService, organisation_service),
        ],
    });

    beforeEach(() => {
        current_building = { id: 'bld-1', timezone: 'Australia/Sydney' };
        active_building = new BehaviorSubject(current_building);
        active_region = new BehaviorSubject({ id: 'region-1' });
        organisation_service.active_building = active_building;
        organisation_service.active_region = active_region;
        (assets_mod as any).queryParkingUsers = jest.fn(() => of([]));
        (assets_mod as any).queryParkingFleetVehicles = jest.fn(() => of([]));
        (assets_mod as any).queryParkingSpaces = jest.fn(() => of([]));
        (booking_mod as any).queryBookings = jest.fn(() => of([]));
        (common_mod.getTimezoneDifferenceInHours as jest.Mock).mockReturnValue(
            2,
        );
        spectator = createService();
    });

    afterEach(() => jest.restoreAllMocks());

    it('should apply building timezone to parking booking listing requests', async () => {
        jest.useFakeTimers();
        const date = new Date('2026-06-15T12:00:00').valueOf();
        const subscription = spectator.service.bookings.subscribe();

        spectator.service.setOptions({ date });
        await jest.advanceTimersByTimeAsync(1100);

        expect(booking_mod.queryBookings).toHaveBeenLastCalledWith(
            expect.objectContaining({
                period_start: getUnixTime(addMinutes(startOfDay(date), 120)),
                period_end: getUnixTime(addMinutes(endOfDay(date), 120)),
            }),
        );

        subscription.unsubscribe();
        jest.useRealTimers();
    });

    it('should not filter requests by approver group in event lists', () => {
        const settings = spectator.inject(SettingsService);
        (settings.get as jest.Mock).mockImplementation((name: string) => {
            if (name === 'app.parking.show_requests') return true;
            if (name === 'app.use_region') return false;
            if (name === 'app.bookings.use_building_timezone') return true;
            return undefined;
        });
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
});
