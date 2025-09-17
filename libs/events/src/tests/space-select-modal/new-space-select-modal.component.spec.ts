import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { EventFormService, generateEventForm } from '@placeos/events';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { NewSpaceSelectModalComponent } from '../../lib/new-space-select-modal/new-space-select-modal.component';
import { SpaceDetailsComponent } from '../../lib/space-select-modal/space-details.component';
import { SpaceFiltersDisplayComponent } from '../../lib/space-select-modal/space-filters-display.component';
import { SpaceFiltersComponent } from '../../lib/space-select-modal/space-filters.component';
import { SpaceListComponent } from '../../lib/space-select-modal/space-list.component';
import { Space } from '../../lib/spaces';

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
                room_alerts: new BehaviorSubject({}),
                options$: new BehaviorSubject({}),
                form: generateEventForm(),
            }),
        ],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(SpaceDetailsComponent),
            MockComponent(SpaceListComponent),
            MockComponent(SpaceFiltersComponent),
            MockComponent(SpaceFiltersDisplayComponent),
        ],
        imports: [MockModule(MatDialogModule)],
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
        expect(spectator.component.selected_ids).not.toContain('space-1');
        spectator.component.setSelected(new Space({ id: 'space-1' }), true);
        expect(spectator.component.selected_ids).toContain('space-1');
        spectator.component.setSelected(new Space({ id: 'space-1' }), true);
        expect(spectator.component.selected_ids).toEqual('space-1');
        spectator.component.setSelected(new Space({ id: 'space-1' }), false);
        expect(spectator.component.selected_ids).not.toContain('space-1');
    });

    it('should allow favouriting a space', () => {
        spectator.component.toggleFavourite(new Space({ id: '1' }));
        expect(
            spectator.inject(SettingsService).saveUserSetting,
        ).toBeCalledWith('favourite_spaces', ['1']);
    });

    it('should allow un-favouriting a space', () => {
        (spectator.inject(SettingsService).get as any).mockImplementation(
            () => ['1'],
        );
        spectator.component.toggleFavourite(new Space({ id: '1' }));
        expect(
            spectator.inject(SettingsService).saveUserSetting,
        ).toBeCalledWith('favourite_spaces', []);
    });
});
