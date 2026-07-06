import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { ParkingService } from '../lib/parking.service';

// The parking asset fns (@placeos/assets) and bookings.fn run for real; only
// the ts-client API layer beneath them is stubbed. `queryParkingSpacesForZones`
// resolves to `queryAssets`, and `queryBookings` resolves to `get`.
vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

describe('ParkingService', () => {
    let spectator: SpectatorService<ParkingService>;
    const createService = createServiceFactory({
        service: ParkingService,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn(() => true) as any,
            }),
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }),
                building: { id: 'bld-1' },
                building_list: signal([]),
                level_list: signal([
                    { id: 'lvl-1', parent_id: 'bld-1', tags: ['parking'] },
                ]),
            } as any),
        ],
    });

    beforeEach(async () => {
        vi.clearAllMocks();
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
        vi.mocked(ts_client.listChildMetadata).mockResolvedValue([] as any);
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        spectator = createService();
        TestBed.tick();
        await new Promise((resolve) => setTimeout(resolve, 50));
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should not load parking bookings before requested', () => {
        // Parking spaces are queried up-front (queryParkingSpacesForZones ->
        // queryAssets), but bookings (queryBookings -> get) are not.
        expect(ts_client.queryAssets).toHaveBeenCalled();
        expect(ts_client.get).not.toHaveBeenCalled();
    });

    it('should load parking bookings when requested', async () => {
        spectator.service.loadBookings();
        TestBed.tick();
        await new Promise((resolve) => setTimeout(resolve, 50));

        expect(ts_client.get).toHaveBeenCalledTimes(1);
        expect(ts_client.get).toHaveBeenCalledWith(
            expect.stringContaining('/api/staff/v1/bookings'),
        );
    });
});
