import {
    MatDialogModule,
    MatDialogRef,
    MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { Desk } from '@placeos/organisation';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { BookingFormService } from '../../lib/booking-form.service';
import { DeskDetailsComponent } from '../../lib/desk-select-modal/desk-details.component';
import { DeskFiltersDisplayComponent } from '../../lib/desk-select-modal/desk-filters-display.component';
import { DeskFiltersComponent } from '../../lib/desk-select-modal/desk-filters.component';
import { DeskListComponent } from '../../lib/desk-select-modal/desk-list.component';
import { DeskMapComponent } from '../../lib/desk-select-modal/desk-map.component';
import {
    DeskSelectModalComponent,
    FAV_DESK_KEY,
} from '../../lib/desk-select-modal/desk-select-modal.component';

describe('DeskSelectModalComponent', () => {
    let spectator: Spectator<DeskSelectModalComponent>;
    const createComponent = createComponentFactory({
        component: DeskSelectModalComponent,
        providers: [
            MockProvider(BookingFormService),
            MockProvider(SettingsService, {
                get: jest.fn(),
                saveUserSetting: jest.fn(),
            }),
            MockProvider(MAT_DIALOG_DATA, {}),
            MockProvider(MatDialogRef, { close: jest.fn() }),
        ],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(DeskFiltersDisplayComponent),
            MockComponent(DeskFiltersComponent),
            MockComponent(DeskListComponent),
            MockComponent(DeskDetailsComponent),
            MockComponent(DeskMapComponent),
        ],
        imports: [MockModule(MatDialogModule)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show selected filters', () =>
        expect('desk-filters-display').toExist());

    it('should show available desks', () => expect('desk-list').toExist());

    it('should show desk details', () => expect('desk-details').toExist());

    it('should allow closing the modal', () =>
        expect('header [mat-dialog-close]').toExist());

    it('should allow favouriting a space', () => {
        spectator.component.toggleFavourite(new Desk({ id: '1' }));
        expect(
            spectator.inject(SettingsService).saveUserSetting
        ).toBeCalledWith(FAV_DESK_KEY, ['1']);
    });

    it('should allow un-favouriting a space', () => {
        (spectator.inject(SettingsService).get as any).mockImplementation(
            () => ['1']
        );
        spectator.component.toggleFavourite(new Desk({ id: '1' }));
        expect(
            spectator.inject(SettingsService).saveUserSetting
        ).toBeCalledWith(FAV_DESK_KEY, []);
    });

    it('should show desk map view', () => {
        expect('desk-map').not.toExist();
        spectator.component.view = 'map';
        spectator.detectChanges();
        expect('desk-map').toExist();
    });
});
