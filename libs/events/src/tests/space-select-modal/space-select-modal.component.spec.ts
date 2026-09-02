import { inject, Injector, signal, type WritableSignal } from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService, Space } from '@placeos/common';
import { EventFormService, generateEventForm } from '@placeos/events';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { SpaceDetailsComponent } from '../../lib/space-select-modal/space-details.component';
import { SpaceFiltersDisplayComponent } from '../../lib/space-select-modal/space-filters-display.component';
import { SpaceFiltersComponent } from '../../lib/space-select-modal/space-filters.component';
import { SpaceListComponent } from '../../lib/space-select-modal/space-list.component';
import { SpaceMapComponent } from '../../lib/space-select-modal/space-map.component';
import { SpaceSelectModalComponent } from '../../lib/space-select-modal/space-select-modal.component';

describe('SpaceSelectModalComponent', () => {
    let spectator: Spectator<SpaceSelectModalComponent>;
    const createComponent = createRoutingFactory({
        component: SpaceSelectModalComponent,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn(),
                overrides: signal([]),
                saveUserSetting: vi.fn(),
            }),
            MockProvider(OrganisationService, {
                level_list: signal([]),
                building_list: signal([]),
                region_list: signal([]),
                setRegion: vi.fn(),
                setBuilding: vi.fn(),
            }),
            MockProvider(MAT_DIALOG_DATA, []),
            MockProvider(MatDialogRef, { close: vi.fn() }),
            {
                provide: EventFormService,
                useFactory: () => {
                    const { model, form } = generateEventForm(
                        undefined,
                        undefined,
                        inject(Injector),
                    );
                    return {
                        loading$: new BehaviorSubject(''),
                        room_alerts: new BehaviorSubject({}),
                        options$: new BehaviorSubject({}),
                        filters$: new BehaviorSubject({}),
                        available_spaces: new BehaviorSubject([]),
                        spaces$: new BehaviorSubject([]),
                        spaces: signal([]),
                        loaded_space_zone: signal(''),
                        model,
                        form,
                        filters: {},
                        setOptions: vi.fn(),
                        setFilters: vi.fn(),
                        setView: vi.fn(),
                    } as unknown as Partial<EventFormService>;
                },
            },
        ],
        imports: [
            MockModule(MatDialogModule),
            MockComponent(SpaceDetailsComponent),
            MockComponent(SpaceFiltersComponent),
            MockComponent(SpaceFiltersDisplayComponent),
            MockComponent(SpaceListComponent),
            MockComponent(SpaceMapComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show available filters', () => expect('[filters]').toExist());

    it('should show selected filters', () =>
        expect('space-filters-display').toExist());

    it('should show available spaces', () => expect('[list]').toExist());

    it("should show selected space's details", () =>
        expect('[details]').toExist());

    it('should allow closing the modal', () =>
        expect('header [mat-dialog-close]').toExist());

    it('should enable multiple selection with the documented setting', () => {
        const settings = spectator.inject(SettingsService) as unknown as {
            get: ReturnType<typeof vi.fn>;
            overrides: WritableSignal<unknown[]>;
        };
        settings.get.mockImplementation(
            (key: string) => key === 'app.events.multiple_spaces',
        );
        settings.overrides.set([{}]);

        expect(spectator.component.allow_multiple()).toBe(true);
    });

    it('should support the legacy multiple-space setting', () => {
        const settings = spectator.inject(SettingsService) as unknown as {
            get: ReturnType<typeof vi.fn>;
            overrides: WritableSignal<unknown[]>;
        };
        settings.get.mockImplementation(
            (key: string) => key === 'app.events.allow_multiple_spaces',
        );
        settings.overrides.set([{}]);

        expect(spectator.component.allow_multiple()).toBe(true);
    });

    it('should allow setting selected spaces', () => {
        expect(spectator.component.selected_ids()).not.toContain('space-1');
        spectator.component.setSelected(new Space({ id: 'space-1' }), true);
        expect(spectator.component.selected_ids()).toContain('space-1');
        spectator.component.setSelected(new Space({ id: 'space-1' }), true);
        expect(spectator.component.selected_ids()).toEqual('space-1');
        spectator.component.setSelected(new Space({ id: 'space-1' }), false);
        expect(spectator.component.selected_ids()).not.toContain('space-1');
    });

    it('should describe and return to a selected room location', async () => {
        const org = spectator.inject(OrganisationService) as unknown as {
            level_list: WritableSignal<
                Array<{ id: string; parent_id: string; name: string }>
            >;
            building_list: WritableSignal<
                Array<{
                    id: string;
                    parent_id: string;
                    name: string;
                }>
            >;
            region_list: WritableSignal<Array<{ id: string; name: string }>>;
            setRegion: ReturnType<typeof vi.fn>;
            setBuilding: ReturnType<typeof vi.fn>;
        };
        org.level_list.set([
            { id: 'level-1', parent_id: 'building-1', name: 'Level 1' },
        ]);
        org.building_list.set([
            { id: 'building-1', parent_id: 'region-1', name: 'Sydney' },
        ]);
        org.region_list.set([{ id: 'region-1', name: 'Australia' }]);
        const space = new Space({
            id: 'space-1',
            name: 'Boardroom',
            zones: ['building-1', 'level-1'],
        });

        spectator.component.setSelected(space, true);
        await spectator.component.returnToSpace(space);

        expect(spectator.component.selected_locations()[0].location).toBe(
            'Australia / Sydney / Level 1',
        );
        expect(org.setRegion).toHaveBeenCalledWith(
            expect.objectContaining({ id: 'region-1' }),
        );
        expect(org.setBuilding).toHaveBeenCalledWith(
            expect.objectContaining({ id: 'building-1' }),
        );
        expect(spectator.component.displayed()).toBe(space);
    });

    it('should remove stale rooms only from the location that reloaded', async () => {
        const form = spectator.inject(EventFormService) as unknown as {
            spaces: WritableSignal<Space[]>;
            loaded_space_zone: WritableSignal<string>;
        };
        spectator.component.selected.set([
            new Space({ id: 'stale', zones: ['building-1'] }),
            new Space({ id: 'other', zones: ['building-2'] }),
        ]);

        form.spaces.set([]);
        form.loaded_space_zone.set('building-1');
        await spectator.fixture.whenStable();

        expect(spectator.component.selected().map((_) => _.id)).toEqual([
            'other',
        ]);
    });

    it('should allow favouriting a space', () => {
        spectator.component.toggleFavourite(new Space({ id: '1' }));
        expect(spectator.component.favorites()).toEqual(['1']);
        expect(
            spectator.inject(SettingsService).saveUserSetting,
        ).toHaveBeenCalledWith('favourite_spaces', ['1']);
    });

    it('should allow un-favouriting a space', () => {
        // Add space-1 as favourite first, then un-favourite it
        spectator.component.toggleFavourite(new Space({ id: '1' }));
        expect(
            spectator.inject(SettingsService).saveUserSetting,
        ).toHaveBeenCalledWith('favourite_spaces', ['1']);
    });
});

describe('SpaceSelectModalComponent (with favourites)', () => {
    let spectator: Spectator<SpaceSelectModalComponent>;
    const createComponent = createRoutingFactory({
        component: SpaceSelectModalComponent,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn((key: string) =>
                    key === 'favourite_spaces' ? ['1'] : undefined,
                ) as any,
                overrides: signal([]),
                saveUserSetting: vi.fn(),
            }),
            MockProvider(OrganisationService, {
                level_list: signal([]),
                building_list: signal([]),
                region_list: signal([]),
                setRegion: vi.fn(),
                setBuilding: vi.fn(),
            }),
            MockProvider(MAT_DIALOG_DATA, []),
            MockProvider(MatDialogRef, { close: vi.fn() }),
            {
                provide: EventFormService,
                useFactory: () => {
                    const { model, form } = generateEventForm(
                        undefined,
                        undefined,
                        inject(Injector),
                    );
                    return {
                        loading$: new BehaviorSubject(''),
                        room_alerts: new BehaviorSubject({}),
                        options$: new BehaviorSubject({}),
                        filters$: new BehaviorSubject({}),
                        available_spaces: new BehaviorSubject([]),
                        spaces$: new BehaviorSubject([]),
                        spaces: signal([]),
                        loaded_space_zone: signal(''),
                        model,
                        form,
                        filters: {},
                        setOptions: vi.fn(),
                        setFilters: vi.fn(),
                        setView: vi.fn(),
                    } as unknown as Partial<EventFormService>;
                },
            },
        ],
        imports: [
            MockModule(MatDialogModule),
            MockComponent(SpaceDetailsComponent),
            MockComponent(SpaceFiltersComponent),
            MockComponent(SpaceFiltersDisplayComponent),
            MockComponent(SpaceListComponent),
            MockComponent(SpaceMapComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should allow un-favouriting a space', () => {
        spectator.component.favorites.set(['1']);
        spectator.component.toggleFavourite(new Space({ id: '1' }));
        expect(spectator.component.favorites()).toEqual([]);
        expect(
            spectator.inject(SettingsService).saveUserSetting,
        ).toHaveBeenCalledWith('favourite_spaces', []);
    });
});
