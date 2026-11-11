import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    setCurrentUser,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { ParkingService } from '../lib/parking.service';

// The parking asset fns (@placeos/assets) and bookings.fn run for real; only
// the ts-client API layer beneath them is stubbed. `queryParkingSpacesForZones`
// resolves to `queryAssets`, and `queryBookings` resolves to `get`.
vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

describe('ParkingService', () => {
    let spectator: SpectatorService<ParkingService>;
    const settings_get = vi.fn();
    const createService = createServiceFactory({
        service: ParkingService,
        providers: [
            MockProvider(SettingsService, {
                get: settings_get as any,
            }),
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }),
                building: { id: 'bld-1' },
                building_list: signal([]),
                buildingsForRegion: () => [
                    { id: 'bld-1', display_name: 'North' },
                    { id: 'bld-2', display_name: 'South' },
                ],
                levels: [],
                level_list: signal([
                    {
                        id: 'lvl-1',
                        parent_id: 'bld-1',
                        display_name: 'P1',
                        tags: ['parking'],
                    },
                    {
                        id: 'lvl-2',
                        parent_id: 'bld-2',
                        display_name: 'P1',
                        tags: ['parking'],
                    },
                    {
                        id: 'lvl-3',
                        parent_id: 'bld-1',
                        display_name: 'L1',
                        tags: [],
                    },
                ]),
            } as any),
        ],
    });

    beforeEach(async () => {
        vi.clearAllMocks();
        // Tests change the settings, so reset them before the next service
        settings_get.mockImplementation(() => true);
        vi.mocked(ts_client.queryAssetCategories).mockResolvedValue({
            data: [{ id: 'cat-parking', name: '_PARKING_', hidden: true }],
        } as any);
        vi.mocked(ts_client.queryAssetTypes).mockResolvedValue({
            data: [
                {
                    id: 'type-parking',
                    name: '_PARKING_SPACES_',
                    category_id: 'cat-parking',
                },
                {
                    id: 'type-parking-users',
                    name: '_PARKING_USERS_',
                    category_id: 'cat-parking',
                },
            ],
        } as any);
        vi.mocked(ts_client.queryAssets).mockResolvedValue({
            data: [{ id: 'park-1', assigned_to: 'user@example.com' }],
        } as any);
        vi.mocked(ts_client.listChildMetadata).mockResolvedValue([]);
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        // The real token() starts a re-authorise timer that can fire after
        // the test environment is torn down
        vi.mocked(ts_client.token).mockReturnValue('token');
        spectator = createService();
        TestBed.tick();
        await new Promise((resolve) => setTimeout(resolve, 50));
    });

    it('should list the parking levels of the region only when regions are on', () => {
        const settings = spectator.inject(SettingsService);
        const org = spectator.inject(OrganisationService) as any;
        const levels = (use_region: boolean) => {
            vi.mocked(settings.get).mockImplementation(((key: string) =>
                key === 'app.use_region' ? use_region : true) as any);
            // the computed does not track settings, so set the levels again
            org.level_list.set([...org.level_list()]);
            return spectator.service.levels();
        };

        expect(levels(true).map((_) => [_.id, _.display_name])).toEqual([
            ['lvl-1', 'North - P1'],
            ['lvl-2', 'South - P1'],
        ]);
        expect(levels(false).map((_) => [_.id, _.display_name])).toEqual([
            ['lvl-1', 'P1'],
        ]);
    });

    it('should not load parking bookings before requested', () => {
        // Parking spaces are queried up-front (queryParkingSpacesForZones ->
        // queryAssets), but bookings (queryBookings -> get) are not.
        expect(ts_client.queryAssets).toHaveBeenCalled();
        expect(ts_client.get).not.toHaveBeenCalled();
    });

    it('should find the booked space when parking bookings are requested', async () => {
        vi.mocked(ts_client.get).mockResolvedValue([
            { id: 'bkn-1', booking_type: 'parking', asset_id: 'park-1' },
        ] as any);

        spectator.service.loadBookings();
        TestBed.tick();
        await new Promise((resolve) => setTimeout(resolve, 50));

        expect(ts_client.get).toHaveBeenCalledTimes(1);
        expect(ts_client.get).toHaveBeenCalledWith(
            expect.stringContaining('/api/staff/v1/bookings'),
        );
        expect(spectator.service.has_booking()).toBe(true);
        expect(spectator.service.booked_space()?.id).toBe('park-1');
    });

    it('should have no booking when the parking bookings request fails', async () => {
        vi.mocked(ts_client.get).mockRejectedValue(new Error('offline'));

        spectator.service.loadBookings();
        TestBed.tick();
        await new Promise((resolve) => setTimeout(resolve, 50));

        expect(spectator.service.has_booking()).toBe(false);
        expect(spectator.service.booked_space()).toBeNull();
    });

    it('should match the assigned space to the user in any case and follow user changes', () => {
        setCurrentUser(new StaffUser({ email: 'USER@example.com' }));
        expect(spectator.service.assigned_space()?.id).toBe('park-1');

        setCurrentUser(new StaffUser({ email: 'other@example.com' }));
        expect(spectator.service.assigned_space()).toBeUndefined();
    });

    it('should scan desks for the home location only while the restriction is enabled', async () => {
        setCurrentUser(new StaffUser({ id: 'me', email: 'me@example.com' }));
        const settings = spectator.inject(SettingsService);
        let restrict = false;
        vi.mocked(settings.get).mockImplementation(((key: string) =>
            key === 'app.parking.restrict_home_location'
                ? restrict
                : false) as any);
        vi.mocked(ts_client.listChildMetadata).mockResolvedValue([
            {
                zone: { id: 'lvl-1' },
                metadata: {
                    desks: {
                        details: [{ id: 'desk-1', assigned_to: 'me@example.com' }],
                    },
                },
            },
        ] as any);
        const org = spectator.inject(OrganisationService) as any;
        const settle = async () => {
            TestBed.tick();
            await new Promise((resolve) => setTimeout(resolve, 20));
        };
        vi.mocked(ts_client.listChildMetadata).mockClear();

        org.building_list.set([{ id: 'bld-1' }, { id: 'bld-2' }]);
        await settle();
        expect(ts_client.listChildMetadata).not.toHaveBeenCalled();
        expect(spectator.service.home_building_id()).toBeNull();

        restrict = true;
        org.building_list.set([{ id: 'bld-1' }, { id: 'bld-2' }]);
        await settle();
        // Services from earlier tests share the organisation mock, so check
        // the buildings that were read, not the request count
        for (const id of ['bld-1', 'bld-2']) {
            expect(ts_client.listChildMetadata).toHaveBeenCalledWith(id, {
                name: 'desks',
            });
        }
        expect(spectator.service.home_building_id()).toBe('bld-1');
        expect(spectator.service.is_home_location()).toBe(true);
    });

    it('should scan desks for the home location again when the user loads', async () => {
        setCurrentUser(new StaffUser({}));
        const settings = spectator.inject(SettingsService);
        vi.mocked(settings.get).mockImplementation(
            (key: string) =>
                key === 'app.parking.restrict_home_location' ||
                key === 'app.use_region',
        );
        vi.mocked(ts_client.listChildMetadata).mockResolvedValue([
            {
                zone: { id: 'lvl-1' },
                metadata: {
                    desks: {
                        details: [{ id: 'desk-1', assigned_to: 'me@example.com' }],
                    },
                },
            },
        ] as any);
        const org = spectator.inject(OrganisationService) as any;
        const settle = async () => {
            TestBed.tick();
            await new Promise((resolve) => setTimeout(resolve, 20));
        };

        org.building_list.set([{ id: 'bld-3' }]);
        await settle();
        expect(spectator.service.home_building_id()).toBeNull();

        setCurrentUser(new StaffUser({ id: 'me', email: 'me@example.com' }));
        await settle();
        expect(spectator.service.home_building_id()).toBe('bld-3');
    });
});

