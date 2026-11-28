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

import { startTestPlaceClient } from './test-place-client';

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
                    signal: (name: string, default_value: unknown) =>
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

    describe('3D view', () => {
        const FLAT =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9"/>';
        const RAISED = FLAT.replace('<svg', '<svg data-3d-unit="10"');
        // The map store caches by URL for the whole run, so every test uses new URLs
        let run = 0;

        async function show(src: string) {
            spectator.setInput('src', src);
            spectator.detectChanges();
            for (let i = 0; i < 6; i++) await Promise.resolve();
            await new Promise((resolve) => setTimeout(resolve, 0));
            spectator.detectChanges();
        }

        beforeEach(() => {
            run++;
            localStorage.removeItem('PLACEOS.map_view_mode');
            // The map loads once the client has an authority
            startTestPlaceClient().setAuthority({ id: 'auth' });
            vi.stubGlobal(
                'fetch',
                vi.fn(async (url: string) => ({
                    ok: true,
                    text: async () => (url.includes('raised') ? RAISED : FLAT),
                })),
            );
            spectator = createComponent();
        });

        afterEach(() => vi.unstubAllGlobals());

        it('should offer 3D only for a map that has a 3D view', async () => {
            await show(`/maps/${run}/flat.svg`);
            expect(spectator.component.can_3d()).toBe(false);
            await show(`/maps/${run}/raised.svg`);
            expect(spectator.component.can_3d()).toBe(true);
            expect(spectator.component.mode()).toBe('2d');
        });

        it('should keep the view the user chose for other maps and visits', async () => {
            await show(`/maps/${run}/raised.svg`);
            spectator.component.setMode('3d');
            expect(spectator.component.mode()).toBe('3d');
            expect(localStorage.getItem('PLACEOS.map_view_mode')).toBe('3d');

            await show(`/maps/${run}/flat.svg`);
            expect(spectator.component.mode()).toBe('2d');
            await show(`/maps/${run}/other-raised.svg`);
            expect(spectator.component.mode()).toBe('3d');

            spectator = createComponent();
            expect(spectator.component.preferred_mode()).toBe('3d');
        });

        it('should keep the isometric lock the user chose', () => {
            expect(spectator.component.isometric()).toBe(false);
            spectator.component.setIsometric(true);
            expect(localStorage.getItem('PLACEOS.map_view_isometric')).toBe(
                'true',
            );
            spectator = createComponent();
            expect(spectator.component.isometric()).toBe(true);
            spectator.component.setIsometric(false);
        });

        it('should stay in 2D on a fixed map and where 3D cannot start', async () => {
            await show(`/maps/${run}/raised.svg`);
            spectator.component.setMode('3d');
            spectator.setInput('options', { disable_zoom: true });
            expect(spectator.component.mode()).toBe('2d');
            spectator.setInput('options', {});
            expect(spectator.component.mode()).toBe('3d');
            spectator.component.unsupported_3d.set(true);
            expect(spectator.component.can_3d()).toBe(false);
            expect(spectator.component.mode()).toBe('2d');
        });
    });
});
