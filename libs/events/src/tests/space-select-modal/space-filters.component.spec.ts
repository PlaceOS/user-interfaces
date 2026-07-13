import { inject, Injector, signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    Building,
    BuildingLevel,
    MapsPeopleService,
    OrganisationService,
    Region,
    settingSignal,
    Space,
} from '@placeos/common';
import { generateEventForm } from '@placeos/events';
import { mockComponent } from 'libs/common/src/tests/test-helpers';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';
import { MockProvider } from 'ng-mocks';
import { EventFormService } from '../../lib/event-form.service';
import { SpaceFiltersComponent } from '../../lib/space-select-modal/space-filters.component';
import { SpacesService } from '../../lib/spaces.service';

describe('SpaceFiltersComponent', () => {
    let spectator: Spectator<SpaceFiltersComponent>;
    const level_1 = new BuildingLevel({
        id: 'lvl-1',
        parent_id: 'bld-1',
        display_name: 'Level 1',
    });
    const level_2 = new BuildingLevel({
        id: 'lvl-2',
        parent_id: 'bld-1',
        display_name: 'Level 2',
    });
    const parking = new BuildingLevel({
        id: 'lvl-p',
        parent_id: 'bld-1',
        display_name: 'Parking',
        tags: ['parking'],
    });
    const building = new Building({ id: 'bld-1', name: 'Building 1' });
    const options = signal<any>({ zones: [] });
    const filters = signal<any>({ features: [] });
    const spaces = signal<Space[]>([
        new Space({ id: 'space-1', zones: ['lvl-1'], features: ['vc'] }),
        new Space({ id: 'space-2', zones: ['lvl-2'] }),
    ]);
    const available_spaces = signal<Space[]>([]);
    const org = {
        active_region: signal<Region>(null),
        active_building: signal(building),
        active_buildings: signal([building]),
        region_list: signal<Region[]>([]),
        buildings: [building],
        building: null as any,
        region: null as any,
        levelsForBuilding: vi.fn(() => [level_2, level_1, parking]),
        levelsForRegion: vi.fn(() => []),
        levelWithID: vi.fn(),
    };
    const createComponent = createComponentFactory({
        component: SpaceFiltersComponent,
        providers: [
            { provide: OrganisationService, useValue: org },
            {
                provide: EventFormService,
                useFactory: () => {
                    const { model, form } = generateEventForm(
                        undefined,
                        undefined,
                        inject(Injector),
                    );
                    return {
                        model,
                        form,
                        options: options as any,
                        filters: filters as any,
                        spaces: spaces as any,
                        available_spaces: available_spaces as any,
                        setOptions: vi.fn(),
                        setFilters: vi.fn(),
                    } as Partial<EventFormService>;
                },
            },
            MockProvider(SpacesService, {
                features: signal(['whiteboard']) as any,
            }),
            MockProvider(MapsPeopleService, {
                available: signal(false) as any,
            }),
        ],
        declarations: [
            mockComponent(SettingsToggleComponent),
            mockComponent(DateFieldComponent),
            mockComponent(TimeFieldComponent),
            mockComponent(DurationFieldComponent),
        ],
        detectChanges: false,
    });

    beforeEach(() => {
        options.set({ zones: [] });
        filters.set({ features: [] });
        available_spaces.set(spaces());
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should list levels that contain spaces, excluding parking', () => {
        expect(spectator.component.levels()).toEqual([level_1, level_2]);
    });

    it('should show the level select when multiple levels are available', () => {
        expect(spectator.component.show_level_select()).toBe(true);
        spectator.setInput({ hide_levels: true });
        expect(spectator.component.show_level_select()).toBe(false);
    });

    it('should combine service and space features', () => {
        expect(spectator.component.features()).toEqual([
            'whiteboard',
            'vc',
        ]);
    });

    it('should add and remove feature filters', () => {
        filters.set({ features: ['vc'] });
        spectator.component.toggleFeature('whiteboard', true);
        expect(
            spectator.inject(EventFormService).setFilters,
        ).toHaveBeenCalledWith({ features: ['vc', 'whiteboard'] });
        spectator.component.toggleFeature('vc', false);
        expect(
            spectator.inject(EventFormService).setFilters,
        ).toHaveBeenCalledWith({ features: [] });
    });

    it('should clear selected zones that are no longer valid levels', () => {
        spectator.setInput({ hide_levels: true });
        options.set({ zones: ['lvl-1', 'lvl-gone'] });
        spectator.detectChanges();
        expect(
            spectator.inject(EventFormService).setOptions,
        ).toHaveBeenCalledWith({ zones: ['lvl-1'] });
    });

    it('should update the organisation building and region', () => {
        const bld = new Building({ id: 'bld-2' });
        spectator.component.setBuilding(bld);
        expect(org.building).toBe(bld);
        const region = new Region({ id: 'region-1' });
        spectator.component.setRegion(region);
        expect(org.region).toBe(region);
    });

    it('should compute the effective minimum duration', () => {
        settingSignal('events.min_duration', 30).set(30);
        settingSignal('events.custom_duration_options', []).set([]);
        expect(spectator.component.effective_min_duration()).toBe(30);
        settingSignal('events.custom_duration_options', []).set([15, 45]);
        expect(spectator.component.effective_min_duration()).toBe(15);
    });
});
