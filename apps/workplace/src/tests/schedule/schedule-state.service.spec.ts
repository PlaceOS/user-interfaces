import { signal } from '@angular/core';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

vi.mock('@placeos/ts-client', { spy: true });

import { ParkingService } from '@placeos/bookings';
import { Booking, OrganisationService, SettingsService } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
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
        // The schedule fns (queryAllBookings/queryEvents/requestSpacesForZone/
        // loadLockerResources) are workspace fns that can't be spied; they all
        // funnel into ts-client `get`/`query`/`querySystems`, so stub + assert
        // one layer down.
        vi.mocked<(url: string) => Promise<unknown>>(
            ts_client.get,
        ).mockResolvedValue([]);
        vi.mocked(ts_client.query).mockResolvedValue({
            data: [],
            next: null,
            total: 0,
        } as any);
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
        expect(ts_client.query).not.toHaveBeenCalled();
        expect(ts_client.querySystems).not.toHaveBeenCalled();
    });

    it('should not make schedule requests for disabled features when consumed', () => {
        spectator.service.bookings();

        expect(ts_client.get).not.toHaveBeenCalled();
        expect(ts_client.query).not.toHaveBeenCalled();
        expect(ts_client.querySystems).not.toHaveBeenCalled();
    });

    it('should only mark enabled feature booking types as loadable', () => {
        const settings = spectator.inject(SettingsService);
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

        expect(ts_client.query).toHaveBeenCalledTimes(1);
    });

    it('should not reuse in-flight booking queries after a poll is triggered', async () => {
        const date = new Date(2026, 5, 22, 9).valueOf();

        const first = (spectator.service as any)._bookingQuery(
            'desk',
            'day',
            date,
        );
        spectator.service.triggerPoll();
        const second = (spectator.service as any)._bookingQuery(
            'desk',
            'day',
            date,
        );
        await Promise.all([first, second]);

        expect(ts_client.query).toHaveBeenCalledTimes(2);
    });

    it('should list every page of a day, not only the first', async () => {
        vi.mocked(ts_client.query).mockResolvedValueOnce({
            total: 3,
            data: [
                new Booking({ id: 'page-1-a', booking_type: 'desk' }),
                new Booking({ id: 'page-1-b', booking_type: 'desk' }),
            ],
            next: () =>
                Promise.resolve({
                    total: 3,
                    data: [new Booking({ id: 'page-2-a', booking_type: 'desk' })],
                    next: null,
                }),
        } as any);

        const bookings = await spectator.service['_bookingQuery'](
            'desk',
            'day',
            new Date(2026, 5, 22, 9).valueOf(),
        );

        expect(bookings.map((booking) => booking.id)).toEqual([
            'page-1-a',
            'page-1-b',
            'page-2-a',
        ]);
    });

    it('should hide removed visitors but keep ordinary cancellations and failed removals', async () => {
        vi.mocked(ts_client.query).mockResolvedValue({
            total: 4,
            next: null,
            // `query` maps rows through `new Booking` itself; a stub has to.
            data: [
                new Booking({ id: 'retained', booking_type: 'visitor' }),
                new Booking({
                    id: 'cancelled',
                    booking_type: 'visitor',
                    deleted: true,
                }),
                new Booking({
                    id: 'removed',
                    booking_type: 'visitor',
                    deleted: true,
                    extension_data: { removed_from_group: true },
                }),
                new Booking({
                    id: 'failed-removal',
                    booking_type: 'visitor',
                    extension_data: { removed_from_group: true },
                }),
            ],
        } as any);

        const bookings = await spectator.service['_bookingQuery'](
            'visitor',
            'day',
            new Date(2026, 5, 22, 9).valueOf(),
        );

        expect(bookings.map((booking) => booking.id)).toEqual([
            'retained',
            'cancelled',
            'failed-removal',
        ]);
    });

    it('should request cancelled and ended bookings', async () => {
        await (spectator.service as any)._bookingQuery(
            'visitor',
            'day',
            new Date(2026, 5, 22, 9).valueOf(),
        );

        const params = vi.mocked(ts_client.query).mock.lastCall?.[0]
            ?.query_params as Record<string, unknown>;
        expect(params).toMatchObject({
            include_checked_out: true,
            include_deleted: true,
        });
    });
});
