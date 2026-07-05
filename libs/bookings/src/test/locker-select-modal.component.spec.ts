import { signal } from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockComponent, MockModule } from 'ng-mocks';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { BookingFormService } from '../lib/booking-form.service';
import { LockerGridComponent } from '../lib/locker-grid.component';
import { LockerBankListComponent } from '../lib/locker-select-modal/locker-bank-list.component';
import { LockerFiltersDisplayComponent } from '../lib/locker-select-modal/locker-filters-display.component';
import { LockerFiltersComponent } from '../lib/locker-select-modal/locker-filters.component';
import { LockerMapComponent } from '../lib/locker-select-modal/locker-map.component';
import {
    FAV_LOCKER_KEY,
    LockerSelectModalComponent,
} from '../lib/locker-select-modal/locker-select-modal.component';

describe('LockerSelectModalComponent', () => {
    let spectator: Spectator<LockerSelectModalComponent>;
    const options = signal<any>({ group: false });
    const dialog_ref = { close: vi.fn() };
    const set_options = vi.fn();
    let dialog_data: any;

    const createComponent = createComponentFactory({
        component: LockerSelectModalComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(LockerBankListComponent),
            MockComponent(LockerFiltersComponent),
            MockComponent(LockerMapComponent),
            MockComponent(LockerFiltersDisplayComponent),
            MockComponent(LockerGridComponent),
        ],
        imports: [MockModule(MatDialogModule)],
        providers: [
            { provide: MatDialogRef, useValue: dialog_ref },
            {
                provide: BookingFormService,
                useValue: { options, setOptions: set_options },
            },
            {
                provide: SettingsService,
                useValue: createSettingsServiceMock(),
            },
            {
                provide: MAT_DIALOG_DATA,
                useFactory: () => dialog_data,
            },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        options.set({ group: false });
        dialog_data = {
            items: [{ id: 'locker-1', name: 'Locker 1' }],
            options: { group: false },
        };
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should seed selection from the provided items and apply flow options', () => {
        expect(spectator.component.selected()).toEqual([
            { id: 'locker-1', name: 'Locker 1' },
        ]);
        expect(spectator.component.selected_ids()).toBe('locker-1');
        expect(set_options).toHaveBeenCalledWith({ group: false });
    });

    it('should switch between list and map views', () => {
        expect(spectator.component.view()).toBe('list');
        expect('locker-bank-list').toExist();
        expect('locker-map').not.toExist();
        spectator.click('header button:nth-child(2)');
        expect(spectator.component.view()).toBe('map');
        spectator.detectChanges();
        expect('locker-map').toExist();
        expect('locker-bank-list').not.toExist();
    });

    it('should report selection state for a given id', () => {
        expect(spectator.component.isSelected('locker-1')).toBe(true);
        expect(spectator.component.isSelected('missing')).toBe(false);
        expect(spectator.component.isSelected(null)).toBe(false);
    });

    it('should add and remove selected lockers', () => {
        spectator.component.setSelected({ id: 'locker-2' } as any, true);
        expect(spectator.component.isSelected('locker-2')).toBe(true);
        spectator.component.setSelected({ id: 'locker-2' } as any, false);
        expect(spectator.component.isSelected('locker-2')).toBe(false);
    });

    it('should close the dialog with the item for single (non-group) selection', () => {
        spectator.component.setSelected({ id: 'locker-3' } as any, true);
        expect(dialog_ref.close).toHaveBeenCalledWith([{ id: 'locker-3' }]);
    });

    it('should not close the dialog when selecting in group mode', () => {
        dialog_data.options = { group: true };
        spectator = createComponent();
        spectator.component.setSelected({ id: 'locker-3' } as any, true);
        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(spectator.component.isSelected('locker-3')).toBe(true);
    });

    it('should toggle favourites and persist them', () => {
        const settings = spectator.inject(SettingsService);
        expect(spectator.component.favorites()).toEqual([]);
        spectator.component.toggleFavourite({ id: 'locker-1' } as any);
        expect(spectator.component.favorites()).toEqual(['locker-1']);
        expect(settings.saveUserSetting).toHaveBeenCalledWith(FAV_LOCKER_KEY, [
            'locker-1',
        ]);
        spectator.component.toggleFavourite({ id: 'locker-1' } as any);
        expect(spectator.component.favorites()).toEqual([]);
    });

    it('should show a bank grid once a bank is selected', () => {
        expect('locker-grid').not.toExist();
        spectator.component.bank.set({ id: 'bank-1', name: 'Bank 1' } as any);
        spectator.detectChanges();
        expect('locker-grid').toExist();
        expect(spectator.query('locker-bank-list')).not.toExist();
    });

    it('should toggle the filters panel on mobile', () => {
        expect(spectator.component.show_filters()).toBe(false);
        spectator.click('main > button');
        expect(spectator.component.show_filters()).toBe(true);
    });
});
