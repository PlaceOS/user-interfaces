import { signal } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { BookingFormService } from 'libs/bookings/src/lib/booking-form.service';
import { ParkingService } from 'libs/bookings/src/lib/parking.service';

import { ExploreParkingService } from '../lib/explore-parking.service';
import { DEFAULT_COLOURS } from '../lib/explore-spaces.service';
import { ExploreStateService } from '../lib/explore-state.service';

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    showMetadata: jest.fn(),
}));
jest.mock('@placeos/assets', () => ({
    ...jest.requireActual('@placeos/assets'),
    queryParkingSpacesForZones: jest.fn(),
}));
jest.mock('libs/bookings/src/lib/bookings.fn', () => ({
    ...jest.requireActual('libs/bookings/src/lib/bookings.fn'),
    queryBookings: jest.fn(),
}));
jest.mock('libs/common/src/lib/notifications');

import { queryParkingSpacesForZones } from '@placeos/assets';
import * as ts_client from '@placeos/ts-client';
import { queryBookings } from 'libs/bookings/src/lib/bookings.fn';

describe('ExploreParkingService', () => {
    let spectator: SpectatorService<ExploreParkingService>;
    const createService = createServiceFactory({
        service: ExploreParkingService,
        providers: [
            MockProvider(ExploreStateService, {
                level: signal({ id: 'lvl-1' }) as any,
                options: signal({ is_public: false }) as any,
                setActions: jest.fn(),
                setStyles: jest.fn(),
                setFeatures: jest.fn(),
            }),
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }) as any,
                active_levels: signal([]) as any,
                organisation: { id: 'org-1' } as any,
                region: { id: 'region-1' } as any,
                levelWithID: jest.fn(() => ({
                    id: 'lvl-1',
                    parent_id: 'bld-1',
                })) as any,
            }),
            MockProvider(SettingsService, {
                get: jest.fn(),
                app_name: 'workplace',
            }),
            MockProvider(BookingFormService, {
                newForm: jest.fn(),
                setOptions: jest.fn(),
                model: signal({}) as any,
                confirmPost: jest.fn().mockResolvedValue({}),
            }),
            MockProvider(ParkingService, {
                users: signal([]) as any,
                assigned_space: signal(null) as any,
                deny_parking_access: signal(false) as any,
                booked_space: signal(null) as any,
            }),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        jest.mocked(ts_client.showMetadata).mockResolvedValue({
            details: [],
        } as any);
        jest.mocked(queryParkingSpacesForZones).mockResolvedValue([] as any);
        jest.mocked(queryBookings).mockResolvedValue([] as any);
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should default booking to enabled', () => {
        expect(spectator.service.options().enable_booking).toBe(true);
    });

    it('should update options via setOptions', () => {
        spectator.service.setOptions({ date: 123, custom: true });
        expect(spectator.service.options().date).toBe(123);
        expect(spectator.service.options().custom).toBe(true);
    });

    it('should only expose levels tagged as parking', () => {
        const org = spectator.inject(OrganisationService);
        (org.active_levels as any).set([
            { id: 'l1', tags: ['parking'] },
            { id: 'l2', tags: ['desks'] },
        ]);
        const levels = spectator.service.levels();
        expect(levels.length).toBe(1);
        expect(levels[0].id).toBe('l1');
    });

    it('should limit active spaces to the current level', () => {
        (spectator.service as any)._spaces = {
            value: () => [
                { id: 'p1', zone_id: 'lvl-1' },
                { id: 'p2', zone_id: 'lvl-2' },
            ],
        };
        const active = spectator.service.active_spaces();
        expect(active.length).toBe(1);
        expect(active[0].id).toBe('p1');
    });

    it('should register styles, features and actions for parking spaces', () => {
        const state = spectator.inject(ExploreStateService);
        const space = {
            id: 'p1',
            map_id: 'p1',
            name: 'Space 1',
            bookable: true,
            zone_id: 'lvl-1',
        };
        (spectator.service as any)._updateParkingSpaces([space], [space]);
        expect(state.setStyles).toHaveBeenCalledWith('parking', {
            '#p1': { fill: DEFAULT_COLOURS['free'], opacity: 0.6 },
        });
        const [, features] = jest.mocked(state.setFeatures).mock.calls[0];
        expect(features.length).toBe(1);
        expect(features[0].location).toBe('p1');
        const [, actions] = jest.mocked(state.setActions).mock.calls[0];
        expect(actions.length).toBe(1);
        expect(actions[0].id).toBe('p1');
    });

    it('should mark non-bookable spaces and register no action for them', () => {
        const state = spectator.inject(ExploreStateService);
        const space = {
            id: 'p1',
            map_id: 'p1',
            name: 'Space 1',
            bookable: false,
            zone_id: 'lvl-1',
        };
        (spectator.service as any)._updateParkingSpaces([space], []);
        expect(state.setStyles).toHaveBeenCalledWith('parking', {
            '#p1': { fill: DEFAULT_COLOURS['not-bookable'], opacity: 0.6 },
        });
        const [, actions] = jest.mocked(state.setActions).mock.calls[0];
        expect(actions.length).toBe(0);
    });

    it('should delegate to on_book when a booking action fires', async () => {
        const state = spectator.inject(ExploreStateService);
        const space = {
            id: 'p1',
            map_id: 'p1',
            name: 'Space 1',
            bookable: true,
            zone_id: 'lvl-1',
        };
        const on_book = jest.fn().mockResolvedValue(undefined);
        spectator.service.on_book = on_book;
        (spectator.service as any)._updateParkingSpaces([space], [space]);
        const [, actions] = jest.mocked(state.setActions).mock.calls[0];
        await actions[0].callback();
        expect(on_book).toHaveBeenCalledWith(space);
    });

    it('should provide a stop function from startPolling', () => {
        const stop = spectator.service.startPolling();
        expect(typeof stop).toBe('function');
        stop();
    });
});
