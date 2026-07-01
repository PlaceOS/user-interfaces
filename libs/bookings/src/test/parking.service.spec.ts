import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { ParkingService } from '../lib/parking.service';

jest.mock('@placeos/assets', () => ({
    queryParkingSpacesForZones: jest.fn(() =>
        Promise.resolve([{ id: 'park-1', assigned_to: 'user@example.com' }]),
    ),
    queryParkingUsers: jest.fn(() => Promise.resolve([])),
}));

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    listChildMetadata: jest.fn(() => Promise.resolve([])),
}));

jest.mock('../lib/bookings.fn', () => ({
    queryBookings: jest.fn(() => Promise.resolve([])),
}));

import { queryParkingSpacesForZones } from '@placeos/assets';
import { queryBookings } from '../lib/bookings.fn';

describe('ParkingService', () => {
    let spectator: SpectatorService<ParkingService>;
    const createService = createServiceFactory({
        service: ParkingService,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn(() => true),
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
        jest.clearAllMocks();
        spectator = createService();
        TestBed.flushEffects();
        await Promise.resolve();
    });

    it('should not load parking bookings before requested', () => {
        expect(queryParkingSpacesForZones).toHaveBeenCalled();
        expect(queryBookings).not.toHaveBeenCalled();
    });

    it('should load parking bookings when requested', async () => {
        spectator.service.loadBookings();
        TestBed.flushEffects();
        await Promise.resolve();

        expect(queryBookings).toHaveBeenCalledTimes(1);
    });
});
