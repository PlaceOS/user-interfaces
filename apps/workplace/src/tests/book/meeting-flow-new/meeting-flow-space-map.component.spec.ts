import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { InteractiveMapComponent } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import { MockProvider } from 'ng-mocks';
import { mockComponent } from '@placeos/common/tests';
import { MeetingFlowSpaceMapComponent } from '../../../app/book/meeting-flow-new/meeting-flow-space-map.component';

describe('MeetingFlowSpaceMapComponent', () => {
    let spectator: Spectator<MeetingFlowSpaceMapComponent>;
    let spaces: ReturnType<typeof signal<any[]>>;
    let available_spaces: ReturnType<typeof signal<any[]>>;
    let options: ReturnType<typeof signal<any>>;
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

    const createComponent = createComponentFactory({
        component: MeetingFlowSpaceMapComponent,
        detectChanges: false,
        declarations: [mockComponent(InteractiveMapComponent)],
        providers: [
            {
                provide: EventFormService,
                useFactory: () => ({
                    spaces,
                    available_spaces,
                    options,
                    setOptions: (set_options = vi.fn()),
                }),
            },
            MockProvider(OrganisationService, {
                active_region: signal(null) as any,
                active_building: signal({ id: 'bld-1' }) as any,
                levelsForRegion: vi.fn(() => [level_1, parking_level]),
                levelsForBuilding: vi.fn(() => [level_1, parking_level]),
                levelWithID: vi.fn((zones: string[] = []) =>
                    zones?.includes('level-1') ? level_1 : null,
                ),
                buildings: [{ id: 'bld-1', location: '5,6' }] as any,
            } as any),
            MockProvider(SettingsService, {
                get: (settings_get = vi.fn(() => ({}))),
            } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        spaces = signal([
            { id: 'space-1', map_id: 'sp-1', zones: ['level-1'] },
            { id: 'space-2', map_id: 'sp-2', zones: ['level-1'] },
        ]);
        available_spaces = signal([
            { id: 'space-1', map_id: 'sp-1', zones: ['level-1'], images: [] },
        ]);
        options = signal({ zones: ['level-1'] });
        settingSignal('use_region', false).set(false);
        spectator = createComponent();
    });

    it('should list bookable levels while excluding parking levels', () => {
        const levels = spectator.component.levels();
        expect(levels).toEqual([level_1]);
        expect(levels).not.toContain(parking_level);
    });

    it('should expose the map id from the active level', () => {
        spectator.component.level.set(level_1 as any);
        expect(spectator.component.map_url()).toBe('map-1');
    });

    it('should resolve the selected space from the selected ids', () => {
        spectator.setInput('selected_spaces', ['space-1']);
        expect(spectator.component.selected_space()).toEqual(
            expect.objectContaining({ id: 'space-1' }),
        );

        spectator.setInput('selected_spaces', ['missing']);
        expect(spectator.component.selected_space()).toBeNull();
    });

    it('should build map actions for each available space', () => {
        const actions = spectator.component.actions();
        expect(actions.length).toBe(1);
        expect(actions[0]).toEqual(
            expect.objectContaining({
                id: 'sp-1',
                action: ['touchend', 'mouseup'],
            }),
        );
        expect(typeof actions[0].callback).toBe('function');
    });

    it('should emit the space when a map action callback fires', () => {
        const emitted: any[] = [];
        spectator.output('space_selected').subscribe((v) => emitted.push(v));
        spectator.component.actions()[0].callback();
        expect(emitted[0]).toEqual(
            expect.objectContaining({ id: 'space-1' }),
        );
    });

    it('should style available spaces free, selected pending, and others busy', () => {
        spectator.setInput('selected_spaces', ['space-1']);
        const styles = spectator.component.styles();
        // space-1 is available and selected -> pending colour
        expect(styles['#sp-1'].fill).toBe('#ffb300');
        // space-2 is not in available_spaces -> busy colour
        expect(styles['#sp-2'].fill).toBe('#e53935');
    });

    it('should apply configured colours when provided', () => {
        settings_get.mockReturnValue({ 'space-free': '#123456' });
        // space-1 available but not selected -> free
        const styles = spectator.component.styles();
        expect(styles['#sp-1'].fill).toBe('#123456');
    });

    it('should update options and coordinates when a level is picked', () => {
        spectator.component.setLevel(level_1 as any);
        expect(set_options).toHaveBeenCalledWith({ zones: ['level-1'] });
        expect(spectator.component.level()).toEqual(level_1);
        expect(spectator.component.coordinates()).toEqual({
            latitude: 1,
            longitude: 2,
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

    it('should sync the active level from the form option zones', () => {
        options.set({ zones: ['level-1'] });
        TestBed.flushEffects();
        expect(spectator.component.level()).toEqual(level_1);
    });
});
