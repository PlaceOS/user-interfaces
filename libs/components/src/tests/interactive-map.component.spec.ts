import { signal } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    SettingsService,
    settingSignal,
} from '@placeos/common';
import { MapsPeopleService } from 'libs/common/src/lib/mapspeople.service';
import { ExploreStateService } from 'libs/explore/src/lib/explore-state.service';
import { MockComponent } from 'ng-mocks';

import { CiscoMapComponent } from '../lib/cisco-map.component';
import { DynamicMapComponent } from '../lib/dynamic-map.component';
import { InteractiveMapComponent } from '../lib/interactive-map.component';
import { MapZoomControlsComponent } from '../lib/map-zoom-controls.component';
import { MapsIndoorsComponent } from '../lib/maps-indoors.component';

describe('InteractiveMapComponent', () => {
    let spectator: Spectator<InteractiveMapComponent>;
    const available = signal(false);
    const explore = { setLevel: vi.fn() };
    const createComponent = createComponentFactory({
        component: InteractiveMapComponent,
        providers: [
            {
                provide: SettingsService,
                useValue: {
                    get: vi.fn(() => null),
                    signal: (name: string, default_value: any) =>
                        settingSignal(name, default_value),
                },
            },
            { provide: MapsPeopleService, useValue: { available } },
            {
                provide: OrganisationService,
                useValue: {
                    levels: [{ id: 'lvl-1', map_id: 'map-1' }],
                },
            },
            { provide: ExploreStateService, useValue: explore },
        ],
        overrideComponents: [
            [
                InteractiveMapComponent,
                {
                    remove: {
                        imports: [
                            MapsIndoorsComponent,
                            DynamicMapComponent,
                            CiscoMapComponent,
                            MapZoomControlsComponent,
                        ],
                    },
                    add: {
                        imports: [
                            MockComponent(MapsIndoorsComponent),
                            MockComponent(DynamicMapComponent),
                            MockComponent(CiscoMapComponent),
                            MockComponent(MapZoomControlsComponent),
                        ],
                    },
                },
            ],
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        available.set(false);
        settingSignal('explore.cisco_maps.enabled', false).set(false);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render the dynamic map by default', () => {
        expect('dynamic-map').toExist();
        expect('maps-indoors').not.toExist();
        expect('cisco-map').not.toExist();
    });

    it('should render MapsIndoors when the MapsPeople service is available', () => {
        available.set(true);
        spectator.detectChanges();
        expect('maps-indoors').toExist();
        expect('dynamic-map').not.toExist();
    });

    it('should render the Cisco map when enabled in settings', () => {
        settingSignal('explore.cisco_maps.enabled', false).set(true);
        spectator.detectChanges();
        expect('cisco-map').toExist();
        expect('dynamic-map').not.toExist();
    });

    it('should render zoom controls and disable renderer controls', () => {
        expect('map-zoom-controls').not.toExist();
        spectator.setInput('options', { controls: true });
        spectator.detectChanges();
        expect('map-zoom-controls').toExist();
        expect(spectator.component.renderer_options().controls).toBe(false);
    });

    it('should map the source to the matching building level', () => {
        expect(spectator.component.location()).toBeUndefined();
        spectator.setInput('src', 'map-1');
        expect(spectator.component.location()?.id).toBe('lvl-1');
    });

    it('should update the explore state on level change', () => {
        spectator.component.onLevelChange({ id: 'lvl-2', name: 'Level 2' });
        expect(explore.setLevel).toHaveBeenCalledWith('lvl-2');
    });
});
