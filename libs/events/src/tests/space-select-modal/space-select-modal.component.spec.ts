import { inject, Injector } from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/vitest';
import { SETTING_KEYS, SettingsService, Space } from '@placeos/common';
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
                saveUserSetting: vi.fn(),
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

    it('should allow setting selected spaces', () => {
        expect(spectator.component.selected_ids()).not.toContain('space-1');
        spectator.component.setSelected(new Space({ id: 'space-1' }), true);
        expect(spectator.component.selected_ids()).toContain('space-1');
        spectator.component.setSelected(new Space({ id: 'space-1' }), true);
        expect(spectator.component.selected_ids()).toEqual('space-1');
        spectator.component.setSelected(new Space({ id: 'space-1' }), false);
        expect(spectator.component.selected_ids()).not.toContain('space-1');
    });

    it('should allow favouriting a space', () => {
        spectator.component.toggleFavourite(new Space({ id: '1' }));
        expect(spectator.component.favorites()).toEqual(['1']);
        expect(
            spectator.inject(SettingsService).saveUserSetting,
        ).toHaveBeenCalledWith(SETTING_KEYS.FAVORITE_ROOMS, ['1']);
    });

    it('should allow un-favouriting a space', () => {
        // Add space-1 as favourite first, then un-favourite it
        spectator.component.toggleFavourite(new Space({ id: '1' }));
        expect(
            spectator.inject(SettingsService).saveUserSetting,
        ).toHaveBeenCalledWith(SETTING_KEYS.FAVORITE_ROOMS, ['1']);
    });
});

describe('SpaceSelectModalComponent (with favourites)', () => {
    let spectator: Spectator<SpaceSelectModalComponent>;
    const createComponent = createRoutingFactory({
        component: SpaceSelectModalComponent,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn((key: string) =>
                    key === SETTING_KEYS.FAVORITE_ROOMS ? ['1'] : undefined,
                ) as any,
                saveUserSetting: vi.fn(),
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
        ).toHaveBeenCalledWith(SETTING_KEYS.FAVORITE_ROOMS, []);
    });
});
