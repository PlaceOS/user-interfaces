import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService, Space } from '@placeos/common';
import { EventFormService, generateEventForm } from '@placeos/events';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { NewSpaceDetailsComponent } from '../../lib/new-space-select-modal/new-space-details.component';
import { NewSpaceFiltersDisplayComponent } from '../../lib/new-space-select-modal/new-space-filters-display.component';
import { NewSpaceFiltersComponent } from '../../lib/new-space-select-modal/new-space-filters.component';
import { NewSpaceListComponent } from '../../lib/new-space-select-modal/new-space-list.component';
import { NewSpaceMapComponent } from '../../lib/new-space-select-modal/new-space-map.component';
import { NewSpaceSelectModalComponent } from '../../lib/new-space-select-modal/new-space-select-modal.component';

describe('NewSpaceSelectModalComponent', () => {
    let spectator: Spectator<NewSpaceSelectModalComponent>;
    const createComponent = createRoutingFactory({
        component: NewSpaceSelectModalComponent,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn(),
                saveUserSetting: jest.fn(),
            }),
            MockProvider(MAT_DIALOG_DATA, []),
            MockProvider(MatDialogRef, { close: jest.fn() }),
            MockProvider(EventFormService, {
                loading$: new BehaviorSubject(''),
                room_alerts: new BehaviorSubject({}),
                options$: new BehaviorSubject({}),
                filters$: new BehaviorSubject({}),
                available_spaces: new BehaviorSubject([]),
                spaces$: new BehaviorSubject([]),
                form: generateEventForm(),
                filters: {},
                setOptions: jest.fn(),
                setFilters: jest.fn(),
                setView: jest.fn(),
            }),
        ],
        imports: [
            MockModule(MatDialogModule),
            MockComponent(NewSpaceDetailsComponent),
            MockComponent(NewSpaceFiltersComponent),
            MockComponent(NewSpaceFiltersDisplayComponent),
            MockComponent(NewSpaceListComponent),
            MockComponent(NewSpaceMapComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show available filters', () => expect('[filters]').toExist());

    it('should show selected filters', () =>
        expect('new-space-filters-display').toExist());

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
        expect(
            spectator.inject(SettingsService).saveUserSetting,
        ).toHaveBeenCalledWith('favourite_rooms', ['1']);
    });

    it('should allow un-favouriting a space', () => {
        (spectator.inject(SettingsService).get as jest.Mock).mockImplementation(
            (key: string) => (key === 'favourite_rooms' ? ['1'] : undefined),
        );
        spectator.component.toggleFavourite(new Space({ id: '1' }));
        expect(
            spectator.inject(SettingsService).saveUserSetting,
        ).toHaveBeenCalledWith('favourite_rooms', []);
    });
});
