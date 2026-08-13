import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { signal } from '@angular/core';
import { MockProvider } from 'ng-mocks';

vi.mock('@placeos/ts-client', { spy: true });

import { OrganisationService, SettingsService } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { ParkingService } from '@placeos/bookings';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';

describe('ScheduleStateService', () => {
    let spectator: SpectatorService<ScheduleStateService>;
    const parking_factory = vi.fn(() => ({}));
    const createService = createServiceFactory({
        service: ScheduleStateService,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn(),
                // `listen` returns a WritableSignal in production; the service
                // invokes its result (`listen(name)()`), so the mock must hand
                // back a callable signal, not an observable.
                listen: vi.fn(() => signal(0)),
            } as any),
            MockProvider(OrganisationService, {
                active_building: signal({} as any),
                building_list: signal([]),
                level_list: signal([]),
            }),
            {
                provide: ParkingService,
                useFactory: parking_factory,
            },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        // The schedule fns (queryBookings/queryEvents/requestSpacesForZone/
        // loadLockerResources) are workspace fns that can't be spied; they all
        // funnel into ts-client `get`/`querySystems`, so stub + assert one
        // layer down.
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        vi.mocked(ts_client.querySystems).mockResolvedValue({
            data: [],
        } as any);
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should not make schedule requests before schedule data is consumed', () => {
        expect(parking_factory).not.toHaveBeenCalled();
        expect(ts_client.get).not.toHaveBeenCalled();
        expect(ts_client.querySystems).not.toHaveBeenCalled();
    });

    it('should not make schedule requests for disabled features when consumed', () => {
        spectator.service.bookings();

        expect(ts_client.get).not.toHaveBeenCalled();
        expect(ts_client.querySystems).not.toHaveBeenCalled();
    });

    it('should only mark enabled feature booking types as loadable', () => {
        const settings = spectator.inject(SettingsService) as any;
        settings.get.mockImplementation((key: string) =>
            key === 'app.features' ? ['desks', 'parking-requests'] : undefined,
        );

        expect((spectator.service as any)._canLoadBookingType('desk')).toBe(
            true,
        );
        expect((spectator.service as any)._canLoadBookingType('parking')).toBe(
            true,
        );
        expect((spectator.service as any)._canLoadBookingType('visitor')).toBe(
            false,
        );
        expect((spectator.service as any)._canLoadBookingType('locker')).toBe(
            false,
        );
        expect((spectator.service as any)._canLoadEvents()).toBe(false);
    });

    it('should share identical in-flight booking queries', async () => {
        const date = new Date(2026, 5, 22, 9).valueOf();

        await Promise.all([
            (spectator.service as any)._bookingQuery('desk', 'day', date),
            (spectator.service as any)._bookingQuery('desk', 'day', date),
        ]);

        expect(ts_client.get).toHaveBeenCalledTimes(1);
    });

    it('should request cancelled and ended bookings', async () => {
        await (spectator.service as any)._bookingQuery(
            'visitor',
            'day',
            new Date(2026, 5, 22, 9).valueOf(),
        );

        const url = vi.mocked(ts_client.get).mock.lastCall?.[0] as string;
        expect(url).toContain('include_checked_out=true');
        expect(url).toContain('include_deleted=true');
    });
});
