import { signal } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { InteractiveMapComponent } from '@placeos/components';
import { ExploreParkingService, ExploreStateService } from '@placeos/explore';

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
                    initialised: signal(true),
                    waitUntilInitialised: () => Promise.resolve(),
                    levelsForBuilding: vi.fn(() => [
                        { id: 'level-1', tags: ['parking'] },
                    ]),
                    levelWithID: vi.fn(),
                },
            },
            {
                provide: ParkingStateService,
                useValue: {
                    options: signal({
                        date: Date.now(),
                        all_day: true,
                        duration: 60,
                        search: '',
                        zones: [],
                        period: 'day',
                        request_filter: 'all',
                    }),
                    setOptions: vi.fn(),
                    editReservation: vi.fn(),
                },
            },
            {
                provide: ExploreStateService,
                useValue: {
                    map_url: signal('map-1'),
                    map_styles: signal(style_map),
                    map_features: signal(feature_list),
                    map_actions: signal([]),
                    map_labels: signal([]),
                    setLevel: vi.fn(),
                },
            },
            {
                provide: SettingsService,
                useValue: {
                    get: vi.fn(),
                    signal: vi.fn((name: string, default_value: any) =>
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
                    setOptions: vi.fn(),
                    startPolling: vi.fn(() => () => null),
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

    it('should show parking availability for the full selected day', async () => {
        await spectator.fixture.whenStable();

        const selector = spectator.query(MatSelect);
        expect(selector.value).toBe('all_day');
        const parking = spectator.inject(ExploreParkingService, true);
        expect(parking.setOptions).toHaveBeenCalledWith(
            expect.objectContaining({ date: expect.any(Number) }),
        );
    });

    it('should select a one-hour parking availability window', () => {
        const state = spectator.inject(ParkingStateService);
        // `setAvailabilityHour` picks the hour with `Date#setHours`, which is
        // the machine's timezone, so both the input and the expectation are
        // built the same way. Writing either as a fixed UTC offset would pin
        // the test to a runner in that zone.
        const date = new Date(2026, 6, 13, 9, 30).valueOf();
        Object.defineProperty(spectator.component, 'options', {
            value: () => ({ date, all_day: true, zones: [] }),
            configurable: true,
        });

        spectator.component.setAvailabilityHour(14);

        expect(state.setOptions).toHaveBeenCalledWith({
            date: new Date(2026, 6, 13, 14, 0, 0, 0).valueOf(),
            all_day: false,
            duration: 60,
        });
    });
});
