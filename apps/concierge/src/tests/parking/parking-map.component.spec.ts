import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { InteractiveMapComponent } from '@placeos/components';
import { ExploreParkingService, ExploreStateService } from '@placeos/explore';
import { of } from 'rxjs';

import { ParkingMapComponent } from '../../app/parking/parking-map.component';
import { ParkingStateService } from '../../app/parking/parking-state.service';

describe('ParkingMapComponent', () => {
    let spectator: Spectator<ParkingMapComponent>;
    const disable_styles = signal(false);
    const style_map = {
        text: { display: 'none' },
        '#parking-1': { fill: '#ff0000' },
        '#parking-2': { fill: '#00ff00' },
    };
    const feature_list = [
        { location: 'parking-1' },
        { location: 'parking-2' },
    ] as any[];

    const createComponent = createComponentFactory({
        component: ParkingMapComponent,
        providers: [
            {
                provide: OrganisationService,
                useValue: {
                    initialised: of(true),
                    levelsForBuilding: jest.fn(() => [
                        { id: 'level-1', tags: ['parking'] },
                    ]),
                    levelWithID: jest.fn(),
                },
            },
            {
                provide: ParkingStateService,
                useValue: {
                    options: of({
                        date: Date.now(),
                        search: '',
                        zones: [],
                        period: 'day',
                        request_filter: 'all',
                    }),
                    editReservation: jest.fn(),
                },
            },
            {
                provide: ExploreStateService,
                useValue: {
                    map_url: of('map-1'),
                    map_styles: of(style_map),
                    map_features: of(feature_list),
                    map_actions: of([]),
                    map_labels: of([]),
                    setLevel: jest.fn(),
                },
            },
            {
                provide: SettingsService,
                useValue: {
                    signal: jest.fn((name: string, default_value: any) =>
                        name === 'parking.disable_styles'
                            ? disable_styles
                            : signal(default_value),
                    ),
                },
            },
        ],
        componentProviders: [
            {
                provide: ExploreParkingService,
                useValue: {
                    setOptions: jest.fn(),
                    startPolling: jest.fn(() => () => null),
                },
            },
        ],
        declarations: [mockComponent(InteractiveMapComponent)],
    });

    beforeEach(() => {
        disable_styles.set(false);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should keep parking styles enabled by default', () => {
        expect(spectator.component.styles()).toEqual(style_map);
    });

    it('should remove parking styles when disabled in settings', () => {
        disable_styles.set(true);

        expect(spectator.component.styles()).toEqual({
            text: { display: 'none' },
        });
    });
});
