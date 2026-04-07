import { MatDialog } from '@angular/material/dialog';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { addMinutes, endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, of } from 'rxjs';

import * as booking_mod from '@placeos/bookings';
import * as common_mod from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { LockerStateService } from '../../app/lockers/locker-state.service';

jest.mock('@placeos/bookings');
jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return { ...actual, getTimezoneDifferenceInHours: jest.fn(() => 0) };
});

describe('LockerStateService', () => {
    let spectator: SpectatorService<LockerStateService>;
    let current_building: any;

    const organisation_service: any = {
        initialised: of(true),
        region: { id: 'region-1' },
        level_list: of([]),
        levelsForBuilding: jest.fn(() => []),
        get building() {
            return current_building;
        },
    };

    const createService = createServiceFactory({
        service: LockerStateService,
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
        organisation_service.active_building = new BehaviorSubject(
            current_building,
        );
        organisation_service.active_region = new BehaviorSubject({
            id: 'region-1',
        });
        (booking_mod.queryPagedBookings as jest.Mock).mockReturnValue(
            of({ data: [], total: 0, next: null } as any),
        );
        (common_mod.getTimezoneDifferenceInHours as jest.Mock).mockReturnValue(
            2,
        );
    });

    afterEach(() => jest.restoreAllMocks());

    it('should apply building timezone to locker booking listing requests', async () => {
        jest.useFakeTimers();
        const date = new Date('2026-06-15T12:00:00').valueOf();
        spectator = createService();
        let next_page: any;
        const subscription = (spectator.service as any)._next_page.subscribe(
            (fn) => (next_page = fn),
        );

        spectator.service.setFilters({ date });
        await jest.advanceTimersByTimeAsync(1100);
        next_page()?.subscribe();

        expect(booking_mod.queryPagedBookings).toHaveBeenLastCalledWith(
            expect.objectContaining({
                period_start: getUnixTime(addMinutes(startOfDay(date), 120)),
                period_end: getUnixTime(addMinutes(endOfDay(date), 120)),
            }),
        );

        subscription.unsubscribe();
        jest.useRealTimers();
    });
});
