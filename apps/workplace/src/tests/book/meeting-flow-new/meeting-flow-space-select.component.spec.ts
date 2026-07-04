import { signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    notifyError,
    OrganisationService,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { EventFormService, SpacesService } from '@placeos/events';
import { MockProvider } from 'ng-mocks';
import { MeetingFlowSpaceSelectComponent } from '../../../app/book/meeting-flow-new/meeting-flow-space-select.component';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifyError: jest.fn(),
}));

describe('MeetingFlowSpaceSelectComponent', () => {
    let spectator: Spectator<MeetingFlowSpaceSelectComponent>;
    let model: ReturnType<typeof signal<any>>;
    let options: ReturnType<typeof signal<any>>;
    let filters: ReturnType<typeof signal<any>>;
    let spaces: ReturnType<typeof signal<any[]>>;
    let available_spaces: ReturnType<typeof signal<any[]>>;
    let set_options: jest.Mock;
    let set_filters: jest.Mock;
    let navigate: jest.Mock;
    let settings_get: jest.Mock;
    let org: any;

    const level_1 = {
        id: 'level-1',
        parent_id: 'bld-1',
        name: 'Level 1',
        display_name: 'Level 1',
        tags: [],
    };
    const level_2 = {
        id: 'level-2',
        parent_id: 'bld-1',
        name: 'Level 2',
        display_name: 'Level 2',
        tags: [],
    };
    const parking_level = {
        id: 'level-p',
        parent_id: 'bld-1',
        name: 'Parking',
        display_name: 'Parking',
        tags: ['parking'],
    };

    const createComponent = createComponentFactory({
        component: MeetingFlowSpaceSelectComponent,
        detectChanges: false,
        providers: [
            {
                provide: EventFormService,
                useFactory: () => ({
                    model,
                    form: {},
                    options,
                    filters,
                    spaces,
                    available_spaces,
                    loading: signal(false),
                    room_alerts: signal({}),
                    setOptions: (set_options = jest.fn()),
                    setFilters: (set_filters = jest.fn()),
                }),
            },
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }) as any,
                active_buildings: signal([{ id: 'bld-1' }]) as any,
                active_region: signal(null) as any,
                region_list: signal([]) as any,
                levelsForBuilding: jest.fn(() => [
                    level_1,
                    level_2,
                    parking_level,
                ]),
                levelsForRegion: jest.fn(() => []),
                get building() {
                    return { id: 'bld-1', timezone: '' };
                },
                set building(_v) {},
                get region() {
                    return null;
                },
                set region(_v) {},
            } as any),
            MockProvider(SettingsService, {
                get: (settings_get = jest.fn(() => false)),
            } as any),
            MockProvider(SpacesService, {
                features: signal(['whiteboard']) as any,
            } as any),
            MockProvider(Router, { navigate: (navigate = jest.fn()) }),
            MockProvider(ActivatedRoute, {}),
        ],
    });

    beforeEach(() => {
        (notifyError as jest.Mock).mockClear();
        model = signal({
            date: Date.now(),
            duration: 60,
            resources: [],
        });
        options = signal({ zones: ['level-1'] });
        filters = signal({ capacity: -1, features: [] });
        spaces = signal([
            { id: 'space-1', zones: ['level-1'], features: ['whiteboard'] },
            { id: 'space-2', zones: ['level-2'], features: ['tv'] },
        ]);
        available_spaces = signal([
            { id: 'space-1', zones: ['level-1'], features: ['whiteboard'] },
        ]);
        settingSignal('use_region', false).set(false);
        spectator = createComponent();
        org = spectator.inject(OrganisationService);
    });

    it('should map selected resources to their ids', () => {
        model.set({ resources: [{ id: 'space-1' }, { id: 'space-2' }] });
        expect(spectator.component.selected()).toEqual(['space-1', 'space-2']);
    });

    it('should report whether a space is selected', () => {
        expect(spectator.component.has_space()).toBe(false);
        model.set({ resources: [{ id: 'space-1' }] });
        expect(spectator.component.has_space()).toBe(true);
    });

    it('should list bookable levels excluding parking, sorted', () => {
        // Both levels have a space assigned via zones
        spaces.set([
            { id: 'space-1', zones: ['level-1'] },
            { id: 'space-2', zones: ['level-2'] },
        ]);
        const levels = spectator.component.levels();
        expect(levels).toEqual([level_1, level_2]);
        expect(levels).not.toContain(parking_level);
    });

    it('should aggregate space features with the service feature list', () => {
        const features = spectator.component.features();
        expect(features).toEqual(
            expect.arrayContaining(['whiteboard']),
        );
        // unique - no duplicates
        expect(features.filter((f) => f === 'whiteboard').length).toBe(1);
    });

    it('should add a feature filter when toggled on', () => {
        spectator.component.toggleFeature('tv', true);
        expect(set_filters).toHaveBeenCalledWith({ features: ['tv'] });
    });

    it('should remove a feature filter when toggled off', () => {
        filters.set({ features: ['tv', 'whiteboard'] });
        spectator.component.toggleFeature('tv', false);
        expect(set_filters).toHaveBeenCalledWith({ features: ['whiteboard'] });
    });

    it('should remove a single feature filter', () => {
        filters.set({ features: ['tv', 'whiteboard'] });
        spectator.component.removeFeature('whiteboard');
        expect(set_filters).toHaveBeenCalledWith({ features: ['tv'] });
    });

    it('should clear all feature filters', () => {
        spectator.component.removeAllFeatures();
        expect(set_filters).toHaveBeenCalledWith({ features: [] });
    });

    it('should switch to the map view and keep the current valid zone', () => {
        options.set({ zones: ['level-2'] });
        spectator.component.setMapView();
        expect(spectator.component.view()).toBe('map');
        expect(set_options).toHaveBeenCalledWith({ zones: ['level-2'] });
    });

    it('should switch to map view and fall back to the first level for an invalid zone', () => {
        options.set({ zones: ['not-a-level'] });
        spectator.component.setMapView();
        expect(spectator.component.view()).toBe('map');
        expect(set_options).toHaveBeenCalledWith({ zones: ['level-1'] });
    });

    it('should replace the selection with a single space by default', () => {
        settings_get.mockReturnValue(false);
        model.set({ resources: [{ id: 'space-9' }] });
        spectator.component.filters_open.set(true);

        spectator.component.toggleSpace({ id: 'space-1' } as any);

        expect(model().resources).toEqual([{ id: 'space-1' }]);
        expect(spectator.component.filters_open()).toBe(false);
    });

    it('should append and toggle spaces when multiple selection is allowed', () => {
        settings_get.mockImplementation(
            (k: string) => k === 'app.events.allow_multiple_spaces',
        );
        model.set({ resources: [{ id: 'space-1' }] });

        spectator.component.toggleSpace({ id: 'space-2' } as any);
        expect(model().resources).toEqual([
            { id: 'space-1' },
            { id: 'space-2' },
        ]);

        spectator.component.toggleSpace({ id: 'space-1' } as any);
        expect(model().resources).toEqual([{ id: 'space-2' }]);
    });

    it('should block continuing without a selected space', () => {
        model.set({ resources: [] });
        spectator.component.continue();
        expect(notifyError).toHaveBeenCalled();
        expect(navigate).not.toHaveBeenCalled();
    });

    it('should navigate to the confirm step once a space is selected', () => {
        model.set({ resources: [{ id: 'space-1' }] });
        spectator.component.continue();
        expect(notifyError).not.toHaveBeenCalled();
        expect(navigate).toHaveBeenCalledWith(
            [],
            expect.objectContaining({ queryParams: { view: 2 } }),
        );
    });

    it('should assign the active building and region through setters', () => {
        const building_spy = jest.spyOn(org, 'building', 'set');
        const region_spy = jest.spyOn(org, 'region', 'set');
        spectator.component.setBuilding({ id: 'bld-2' });
        spectator.component.setRegion({ id: 'reg-1' });
        expect(building_spy).toHaveBeenCalledWith({ id: 'bld-2' });
        expect(region_spy).toHaveBeenCalledWith({ id: 'reg-1' });
    });
});
