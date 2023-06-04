import {
    MatDialogModule,
    MatDialogRef,
    MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { NewSpaceSelectModalComponent } from '../../lib/space-select-modal/new-space-select-modal.component';
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

    it('should show available filters', () =>
        expect('space-filters').toExist());

    it('should show selected filters', () =>
        expect('space-filters-display').toExist());

    it('should show available spaces', () => expect('space-list').toExist());

    it("should show selected space's details", () =>
        expect('space-details').toExist());

    it('should allow closing the modal', () =>
        expect('header [mat-dialog-close]').toExist());

    it('should allow saving the list items', () =>
        expect('button[name="save-spaces"]').toExist());

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
            spectator.inject(SettingsService).saveUserSetting
        ).toBeCalledWith('favourite_spaces', ['1']);
    });

    it('should allow un-favouriting a space', () => {
        (spectator.inject(SettingsService).get as any).mockImplementation(
            () => ['1']
        );
        spectator.component.toggleFavourite(new Space({ id: '1' }));
        expect(
            spectator.inject(SettingsService).saveUserSetting
        ).toBeCalledWith('favourite_spaces', []);
    });
});
