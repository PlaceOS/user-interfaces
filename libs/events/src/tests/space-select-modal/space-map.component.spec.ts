import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    Building,
    BuildingLevel,
    OrganisationService,
    SettingsService,
    Space,
} from '@placeos/common';
import { mockComponent } from 'libs/common/src/tests/test-helpers';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { DEFAULT_COLOURS } from 'libs/explore/src/lib/explore-spaces.service';
import { MockProvider } from 'ng-mocks';
import { EventFormService } from '../../lib/event-form.service';
import { SpaceMapComponent } from '../../lib/space-select-modal/space-map.component';

describe('SpaceMapComponent', () => {
    let spectator: Spectator<SpaceMapComponent>;
    const level_1 = new BuildingLevel({
        id: 'lvl-1',
        parent_id: 'bld-1',
        display_name: 'Level 1',
        map_id: 'map-1',
        location: '1.5,2.5',
    });
    const level_2 = new BuildingLevel({
        id: 'lvl-2',
        parent_id: 'bld-1',
        display_name: 'Level 2',
        map_id: 'map-2',
    });
    const parking = new BuildingLevel({
        id: 'lvl-p',
        parent_id: 'bld-1',
        display_name: 'Parking',
        tags: ['parking'],
    });
    const building = new Building({
        id: 'bld-1',
        name: 'Building 1',
        location: '3.5,4.5',
    });
    const options = signal<any>({ zones: [] });
    const spaces = signal<Space[]>([]);
    const available_spaces = signal<Space[]>([]);
    const org = {
        active_region: signal(null),
        active_building: signal(building),
        buildings: [building],
        levelsForBuilding: vi.fn(() => [level_2, level_1, parking]),
        levelsForRegion: vi.fn(() => []),
        levelWithID: vi.fn((zones: string[] = []) =>
            zones.includes('lvl-2') ? level_2 : null,
        ),
    };
    const createComponent = createComponentFactory({
        component: SpaceMapComponent,
        providers: [
            { provide: OrganisationService, useValue: org },
            MockProvider(EventFormService, {
                options: options as any,
                spaces: spaces as any,
                available_spaces: available_spaces as any,
                setOptions: vi.fn(),
            }),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
        declarations: [mockComponent(InteractiveMapComponent)],
    });

    beforeEach(() => {
        options.set({ zones: [] });
        spaces.set([]);
        available_spaces.set([]);
        spectator = createComponent();
    });

    it('should list levels excluding parking, sorted by name', () => {
        expect(spectator.component.levels()).toEqual([level_1, level_2]);
    });

    it('should default to the first level', () => {
        spectator.detectChanges();
        expect(spectator.component.level()).toBe(level_1);
        expect(spectator.component.map_url()).toBe('map-1');
    });

    it('should sync the level from the form options', () => {
        options.set({ zones: ['lvl-2'] });
        spectator.detectChanges();
        expect(spectator.component.level()).toBe(level_2);
    });

    it('should clamp zoom between 0.5 and 10', () => {
        spectator.component.setZoom(0.1);
        expect(spectator.component.zoom()).toBe(0.5);
        spectator.component.setZoom(50);
        expect(spectator.component.zoom()).toBe(10);
        spectator.component.setZoom(2);
        expect(spectator.component.zoom()).toBe(2);
    });

    it('should reset the map zoom and position', () => {
        spectator.component.setZoom(4);
        spectator.component.center.set({ x: 0.2, y: 0.8 });
        spectator.component.resetMap();
        expect(spectator.component.zoom()).toBe(1);
        expect(spectator.component.center()).toEqual({ x: 0.5, y: 0.5 });
    });

    it('should style spaces based on their availability', () => {
        const free = new Space({ id: 'space-free', map_id: 'area-free' });
        const busy = new Space({ id: 'space-busy', map_id: 'area-busy' });
        spaces.set([free, busy]);
        available_spaces.set([free]);
        const styles = spectator.component.styles();
        expect(styles['#area-free']).toEqual({ fill: DEFAULT_COLOURS.free });
        expect(styles['#area-busy']).toEqual({ fill: DEFAULT_COLOURS.busy });
    });

    it('should update options and coordinates when setting a level', () => {
        spectator.component.setLevel(level_1);
        expect(
            spectator.inject(EventFormService).setOptions,
        ).toHaveBeenCalledWith({ zone_ids: ['lvl-1'] });
        expect(spectator.component.coordinates()).toEqual({
            latitude: 1.5,
            longitude: 2.5,
        });
        expect(spectator.component.level()).toBe(level_1);
    });
});
