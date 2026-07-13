import { signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { InteractiveMapComponent } from '@placeos/components';
import { DEFAULT_COLOURS } from '@placeos/explore';
import { mockComponent } from '@placeos/common/tests';
import { MockProvider } from 'ng-mocks';

import { DeskFlowSelectMapComponent } from '../../../app/book/desk-flow-new/desk-flow-select-map.component';

describe('DeskFlowSelectMapComponent', () => {
    let spectator: Spectator<DeskFlowSelectMapComponent>;
    let resources: WritableSignal<any[]>;
    let available_resources: WritableSignal<any[]>;
    let model: WritableSignal<any>;
    let options: WritableSignal<any>;
    let use_region: WritableSignal<boolean>;
    let set_options: any;
    let settings_get: any;

    const level_1 = {
        id: 'level-1',
        parent_id: 'bld-1',
        name: 'Level 1',
        display_name: 'Level 1',
        map_id: 'map-1',
        tags: [],
        location: '1,2',
    };
    const parking_level = {
        id: 'level-p',
        parent_id: 'bld-1',
        name: 'Parking',
        display_name: 'Parking',
        map_id: 'map-p',
        tags: ['parking'],
        location: '',
    };
    const level_2 = {
        id: 'level-2',
        parent_id: 'bld-1',
        name: 'Level 2',
        display_name: 'Level 2',
        map_id: 'map-2',
        tags: [],
        location: '3,4',
    };

    const desk_1 = { id: 'desk-1', map_id: 'd-1', zone: { id: 'level-1' } };
    const desk_2 = { id: 'desk-2', map_id: 'd-2', zone: { id: 'level-1' } };

    const createComponent = createComponentFactory({
        component: DeskFlowSelectMapComponent,
        detectChanges: false,
        declarations: [mockComponent(InteractiveMapComponent)],
        providers: [
            {
                provide: BookingFormService,
                useFactory: () => ({
                    resources,
                    available_resources,
                    model,
                    options,
                    setOptions: (set_options = vi.fn()),
                }),
            },
            MockProvider(OrganisationService, {
                active_region: signal(null) as any,
                active_building: signal({ id: 'bld-1' }) as any,
                levelsForRegion: vi.fn(() => [
                    level_1,
                    parking_level,
                    level_2,
                ]),
                levelsForBuilding: vi.fn(() => [
                    level_1,
                    parking_level,
                    level_2,
                ]),
                levelWithID: vi.fn((zones: string[] = []) =>
                    zones?.includes('level-1') ? level_1 : null,
                ),
                buildings: [{ id: 'bld-1', location: '5,6' }] as any,
            } as any),
            MockProvider(SettingsService, {
                get: (settings_get = vi.fn(() => ({}))),
                signal: ((_key: string, _def: boolean) => use_region) as any,
            } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        use_region = signal(false);
        resources = signal<any[]>([desk_1, desk_2]);
        available_resources = signal<any[]>([desk_1]);
        model = signal<any>({ resources: [] });
        options = signal<any>({ zones: ['level-1'] });
        spectator = createComponent();
    });

    it('should list only bookable levels that hold resources and exclude parking', () => {
        const levels = spectator.component.levels();

        expect(levels).toEqual([level_1]);
        expect(levels).not.toContain(parking_level);
        expect(levels).not.toContain(level_2);
    });

    it('should expose the map id from the active level', () => {
        expect(spectator.component.map_url()).toBe('');
        spectator.component.level.set(level_1 as any);
        expect(spectator.component.map_url()).toBe('map-1');
    });

    it('should resolve the selected desk from the selected ids', () => {
        spectator.setInput('selected_items', ['desk-1']);
        expect(spectator.component.selected_desk()).toEqual(
            expect.objectContaining({ id: 'desk-1' }),
        );

        spectator.setInput('selected_items', ['missing']);
        expect(spectator.component.selected_desk()).toBeNull();
    });

    it('should keep the active desk visible even when it is missing from availability', () => {
        const active_desk = { id: 'desk-active', map_id: 'd-active' };
        model.set({ resources: [active_desk] });

        const available = spectator.component.actions().map((a) => a.id);
        // active desk is prepended to the available list
        expect(available).toContain('d-active');
        expect(available).toContain('d-1');
    });

    it('should build a map action for each available desk', () => {
        const actions = spectator.component.actions();

        expect(actions.length).toBe(1);
        expect(actions[0]).toEqual(
            expect.objectContaining({
                id: 'd-1',
                action: ['touchend', 'mouseup'],
            }),
        );
        expect(typeof actions[0].callback).toBe('function');
    });

    it('should emit the desk when a map action callback fires', () => {
        const emitted: any[] = [];
        spectator.output('item_selected').subscribe((v) => emitted.push(v));

        spectator.component.actions()[0].callback();

        expect(emitted[0]).toEqual(expect.objectContaining({ id: 'desk-1' }));
    });

    it('should style available desks free, selected pending, and others busy', () => {
        spectator.setInput('selected_items', ['desk-1']);
        const styles = spectator.component.styles();

        // desk-1 is available and selected -> pending
        expect(styles['#d-1'].fill).toBe(DEFAULT_COLOURS.pending);
        // desk-2 is not available -> busy
        expect(styles['#d-2'].fill).toBe(DEFAULT_COLOURS.busy);
    });

    it('should style an available but unselected desk as free', () => {
        const styles = spectator.component.styles();
        expect(styles['#d-1'].fill).toBe(DEFAULT_COLOURS.free);
    });

    it('should apply configured colours when provided', () => {
        settings_get.mockReturnValue({ 'space-free': '#123456' });
        const styles = spectator.component.styles();
        expect(styles['#d-1'].fill).toBe('#123456');
    });

    it('should update options and coordinates when a level is picked', () => {
        spectator.component.setLevel(level_1 as any);

        expect(set_options).toHaveBeenCalledWith({
            zones: ['level-1'],
            zone_id: 'level-1',
        });
        expect(spectator.component.level()).toEqual(level_1);
        expect(spectator.component.coordinates()).toEqual({
            latitude: 1,
            longitude: 2,
        });
    });

    it('should fall back to the building location when the level has none', () => {
        const level_no_loc = { ...level_1, location: '' };
        spectator.component.setLevel(level_no_loc as any);

        expect(spectator.component.coordinates()).toEqual({
            latitude: 5,
            longitude: 6,
        });
    });

    it('should clamp zoom to the supported range', () => {
        spectator.component.setZoom(50);
        expect(spectator.component.zoom()).toBe(10);
        spectator.component.setZoom(0.1);
        expect(spectator.component.zoom()).toBe(0.5);
    });

    it('should reset the map view', () => {
        spectator.component.zoom.set(5);
        spectator.component.center.set({ x: 0.1, y: 0.9 });

        spectator.component.resetMap();

        expect(spectator.component.zoom()).toBe(1);
        expect(spectator.component.center()).toEqual({ x: 0.5, y: 0.5 });
    });

    it('should list levels for the active region when region mode is enabled', () => {
        use_region.set(true);
        // recreate so the region-mode signal is read from construction
        spectator = createComponent();

        expect(spectator.component.levels()).toEqual([level_1]);
        expect(
            spectator.inject(OrganisationService).levelsForRegion,
        ).toHaveBeenCalled();
    });

    it('should sync the active level from the form option zones on init', () => {
        options.set({ zones: ['level-1'] });
        TestBed.flushEffects();

        expect(spectator.component.level()).toEqual(level_1);
    });
});
