// Mock DeskMapComponent module before any imports so ng-mocks never processes
// InteractiveMapComponent (which uses model() signals unsupported by ng-mocks 14.x)
jest.mock('../../lib/desk-select-modal/desk-map.component', () => {
    const { Component } = jest.requireActual('@angular/core');

    class DeskMapComponent {}
    Component({ selector: 'desk-map', template: '', standalone: true })(
        DeskMapComponent,
    );

    return { DeskMapComponent };
});

import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { Desk, SETTING_KEYS, SettingsService } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { MockModule, MockProvider } from 'ng-mocks';
import { BookingFormService } from '../../lib/booking-form.service';
import { DeskDetailsComponent } from '../../lib/desk-select-modal/desk-details.component';
import { DeskFiltersDisplayComponent } from '../../lib/desk-select-modal/desk-filters-display.component';
import { DeskFiltersComponent } from '../../lib/desk-select-modal/desk-filters.component';
import { DeskListComponent } from '../../lib/desk-select-modal/desk-list.component';
import { DeskSelectModalComponent } from '../../lib/desk-select-modal/desk-select-modal.component';

describe('DeskSelectModalComponent', () => {
    let spectator: Spectator<DeskSelectModalComponent>;
    const createComponent = createComponentFactory({
        component: DeskSelectModalComponent,
        providers: [
            {
                provide: BookingFormService,
                useValue: { setOptions: jest.fn() },
            },
            MockProvider(SettingsService, {
                get: jest.fn(),
                saveUserSetting: jest.fn(),
            }),
            MockProvider(MAT_DIALOG_DATA, {}),
            MockProvider(MatDialogRef, { close: jest.fn() }),
        ],
        declarations: [
            mockComponent(IconComponent),
            mockComponent(DeskFiltersDisplayComponent),
            mockComponent(DeskFiltersComponent),
            mockComponent(DeskListComponent),
            mockComponent(DeskDetailsComponent),
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
            spectator.inject(SettingsService).saveUserSetting,
        ).toBeCalledWith(SETTING_KEYS.FAVORITE_DESKS, ['1']);
    });

    it('should allow un-favouriting a space', () => {
        (spectator.inject(SettingsService).get as any).mockImplementation(
            () => ['1'],
        );
        spectator.component.toggleFavourite(new Desk({ id: '1' }));
        expect(
            spectator.inject(SettingsService).saveUserSetting,
        ).toBeCalledWith(SETTING_KEYS.FAVORITE_DESKS, []);
    });

    it('should show desk map view', () => {
        spectator.component.view = 'list';
        spectator.detectChanges();
        expect('desk-map').not.toExist();
        spectator.component.view = 'map';
        spectator.detectChanges();
        expect('desk-map').toExist();
    });
});
