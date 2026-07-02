import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import {
    BookingAsset,
    BookingFormService,
} from '../lib/booking-form.service';
import { ParkingDetailsComponent } from '../lib/parking-select-modal/parking-details.component';
import { ParkingFiltersDisplayComponent } from '../lib/parking-select-modal/parking-filters-display.component';
import { ParkingFiltersComponent } from '../lib/parking-select-modal/parking-filters.component';
import { ParkingListComponent } from '../lib/parking-select-modal/parking-list.component';
import { ParkingMapComponent } from '../lib/parking-select-modal/parking-map.component';
import {
    FAV_PARKING_KEY,
    ParkingSelectModalComponent,
} from '../lib/parking-select-modal/parking-select-modal.component';

const asset = (id: string): BookingAsset =>
    ({ id, name: id, bookable: true, features: [] }) as BookingAsset;

describe('ParkingSelectModalComponent', () => {
    let spectator: Spectator<ParkingSelectModalComponent>;
    const dialog_ref = { close: jest.fn() };
    let dialog_data: any;

    const createComponent = createComponentFactory({
        component: ParkingSelectModalComponent,
        providers: [
            { provide: MatDialogRef, useValue: dialog_ref },
            { provide: MAT_DIALOG_DATA, useFactory: () => dialog_data },
            MockProvider(BookingFormService, { setOptions: jest.fn() }),
            {
                provide: SettingsService,
                useFactory: () => createSettingsServiceMock(),
            },
        ],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(ParkingListComponent),
            MockComponent(ParkingMapComponent),
            MockComponent(ParkingDetailsComponent),
            MockComponent(ParkingFiltersComponent),
            MockComponent(ParkingFiltersDisplayComponent),
        ],
        imports: [
            MockModule(MatRippleModule),
            MockModule(MatDialogModule),
            MockModule(MatTooltipModule),
        ],
    });

    beforeEach(() => {
        dialog_ref.close.mockClear();
        dialog_data = { spaces: [asset('a')], options: { type: 'parking' } };
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should seed the selection from the dialog data spaces', () => {
        expect(spectator.component.selected().map((_) => _.id)).toEqual(['a']);
        expect(spectator.component.selected_ids()).toBe('a');
    });

    it('should forward the dialog options to the booking form service', () => {
        const form = spectator.inject(BookingFormService);
        expect(form.setOptions).toHaveBeenCalledWith({ type: 'parking' });
    });

    it('should toggle between list and map views', () => {
        expect(spectator.component.view()).toBe('list');
        expect('parking-space-list').toExist();
        expect('parking-space-map').not.toExist();
        spectator.component.view.set('map');
        spectator.detectChanges();
        expect('parking-space-map').toExist();
        expect('parking-space-list').not.toExist();
    });

    it('should report whether a space is selected', () => {
        expect(spectator.component.isSelected('a')).toBe(true);
        expect(spectator.component.isSelected('b')).toBe(false);
        expect(spectator.component.isSelected(null)).toBe(false);
    });

    it('should add and remove spaces from the selection', () => {
        spectator.component.setSelected(asset('b'), true);
        expect(spectator.component.isSelected('b')).toBe(true);
        spectator.component.setSelected(asset('b'), false);
        expect(spectator.component.isSelected('b')).toBe(false);
    });

    it('should close the dialog when selecting outside of a group flow', () => {
        dialog_data.options.group = false;
        spectator.component.setSelected(asset('c'), true);
        expect(dialog_ref.close).toHaveBeenCalledWith([
            expect.objectContaining({ id: 'c' }),
        ]);
    });

    it('should not close the dialog when selecting in a group flow', () => {
        dialog_data.options.group = true;
        spectator.component.setSelected(asset('c'), true);
        expect(dialog_ref.close).not.toHaveBeenCalled();
    });

    it('should toggle favourites and persist them to user settings', () => {
        const settings = spectator.inject(SettingsService);
        expect(spectator.component.favorites()).toEqual([]);
        spectator.component.toggleFavourite(asset('a'));
        expect(spectator.component.favorites()).toEqual(['a']);
        expect(settings.saveUserSetting).toHaveBeenCalledWith(
            FAV_PARKING_KEY,
            ['a'],
        );
        spectator.component.toggleFavourite(asset('a'));
        expect(spectator.component.favorites()).toEqual([]);
    });

    it('should ignore favourite toggles without an id', () => {
        const settings = spectator.inject(SettingsService);
        spectator.component.toggleFavourite(null);
        expect(settings.saveUserSetting).not.toHaveBeenCalled();
    });
});
