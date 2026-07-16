import { signal } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import {
    Building,
    Organisation,
    OrganisationService,
    SettingsService,
} from '@placeos/common';

import { ExploreStateService } from '../lib/explore-state.service';
import { ExploreZonesService } from '../lib/explore-zones.service';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';

describe('ExploreStateService', () => {
    let spectator: SpectatorService<ExploreZonesService>;
    const createService = createServiceFactory({
        service: ExploreZonesService,
        providers: [
            MockProvider(ExploreStateService, {
                level: signal({ id: 'lvl-1' }) as any,
                options: signal({ is_public: false }) as any,
                has: vi.fn(() => false),
                setFeatures: vi.fn(),
                setLabels: vi.fn(),
                setStyles: vi.fn(),
            }),
            MockProvider(OrganisationService, {
                organisation: new Organisation(),
                binding: vi.fn(),
                initialised: signal(true),
                levels: [],
                buildings: [],
                active_building: signal<Building>({
                    id: 'bld-1',
                } as any),
            }),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(ts_client.showMetadata).mockResolvedValue({} as any);
        spectator = createService();
    });

    it('should create the service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('clears stale zone state when binding to another level', () => {
        const org = spectator.inject(OrganisationService);
        const state = spectator.inject(ExploreStateService);
        const area_unsubscribe = vi.fn();
        const zone_unsubscribe = vi.fn();
        const service = spectator.service as any;
        service._subscriptions.binding = area_unsubscribe;
        service._subscriptions['zone-binding'] = zone_unsubscribe;
        service._area_data.set({ value: [{ area_id: 'old-area' }] });
        service._zone_data.set({ value: [{ area_id: 'old-zone' }] });
        (org as any).module = vi.fn(() => null);

        service._bindToLevel('lvl-2');

        expect(area_unsubscribe).toHaveBeenCalled();
        expect(zone_unsubscribe).toHaveBeenCalled();
        expect(service._area_data()).toBeNull();
        expect(service._zone_data()).toBeNull();
        expect(state.setLabels).toHaveBeenCalledWith('zones', []);
        expect(state.setStyles).toHaveBeenCalledWith('zones-styles', {});
    });

    it('removes statuses missing from the latest binding data', () => {
        const state = spectator.inject(ExploreStateService);
        (spectator.service as any)._location['zone-1'] = { x: 0.5, y: 0.5 };

        spectator.service.parseData([{ area_id: 'zone-1', count: 50 }]);
        expect(state.setStyles).toHaveBeenLastCalledWith('zones-styles', {
            '#zone-1': { fill: '#ffb300', opacity: 0.6 },
        });

        spectator.service.parseData([]);
        expect(state.setStyles).toHaveBeenLastCalledWith('zones-styles', {});
    });

    it('uses map IDs to match binding data with region metadata', async () => {
        const org = spectator.inject(OrganisationService);
        const state = spectator.inject(ExploreStateService);
        (org as any).levels = [{ id: 'lvl-1' }];
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: {
                areas: [
                    {
                        id: 'area-1',
                        map_id: 'map-zone-1',
                        geometry: {
                            coordinates: [
                                [0.2, 0.2],
                                [0.4, 0.4],
                            ],
                        },
                    },
                ],
            },
        } as any);

        await spectator.service.init();
        spectator.service.parseData([
            { area_id: 'area-1', map_id: 'map-zone-1', count: 50 },
        ]);

        expect(state.setStyles).toHaveBeenLastCalledWith('zones-styles', {
            '#map-zone-1': { fill: '#ffb300', opacity: 0.6 },
        });
    });

    it('mounts the polygon canvas over the full map bounds', async () => {
        const state = spectator.inject(ExploreStateService);

        await spectator.service.init();

        expect(state.setFeatures).toHaveBeenCalledWith('zones-canvas', [
            expect.objectContaining({
                location: { x: 0, y: 0, w: 1, h: 1 },
                full_size: true,
            }),
        ]);
    });

    it('preserves zero sensor readings', () => {
        const settings = spectator.inject(SettingsService);
        const state = spectator.inject(ExploreStateService);
        vi.mocked(settings.get).mockImplementation((key: string) =>
            key === 'app.explore.show_zone_sensor_info' ? true : null,
        );
        (spectator.service as any)._location['zone-1'] = { x: 0.5, y: 0.5 };

        spectator.service.parseData([
            { area_id: 'zone-1', temperature: 0, humidity: 0 },
        ]);

        expect(state.setFeatures).toHaveBeenCalledWith('zones', []);
        expect(state.setFeatures).toHaveBeenLastCalledWith(
            'sensors',
            expect.arrayContaining([
                expect.objectContaining({
                    track_id: 'sensors:zone-1',
                    data: expect.objectContaining({ temp: 0, humidity: 0 }),
                }),
            ]),
        );
    });

    it('shows configured zone labels when enabled', () => {
        const settings = spectator.inject(SettingsService);
        const state = spectator.inject(ExploreStateService);
        vi.mocked(settings.get).mockImplementation((key: string) =>
            key === 'app.explore.show_zone_labels' ? true : null,
        );
        (spectator.service as any)._location['zone-1'] = { x: 0.5, y: 0.5 };
        (spectator.service as any)._label_location['zone-1'] = {
            x: 0.4,
            y: 0.4,
        };

        spectator.service.parseData([{ area_id: 'zone-1', count: 1 }]);

        expect(state.setLabels).toHaveBeenLastCalledWith('zones', [
            expect.objectContaining({ location: { x: 0.4, y: 0.4 } }),
        ]);
    });
});
