import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { AssetGroup, SettingsService } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockComponent, MockProvider } from 'ng-mocks';

import { AssetDetailsComponent } from '../lib/asset-select-modal/asset-details.component';
import { AssetFiltersDisplayComponent } from '../lib/asset-select-modal/asset-filters-display.component';
import { AssetFiltersComponent } from '../lib/asset-select-modal/asset-filters.component';
import { AssetListComponent } from '../lib/asset-select-modal/asset-list.component';
import { AssetSelectModalComponent } from '../lib/asset-select-modal/asset-select-modal.component';
import { AssetStateService } from '../lib/asset-state.service';

describe('AssetSelectModalComponent', () => {
    let spectator: Spectator<AssetSelectModalComponent>;
    let settings_mock: any;
    let dialog_data: any;
    const set_options = jest.fn();

    const createComponent = createComponentFactory({
        component: AssetSelectModalComponent,
        imports: [MatDialogModule],
        declarations: [
            MockComponent(AssetFiltersComponent),
            MockComponent(AssetListComponent),
            MockComponent(AssetDetailsComponent),
            MockComponent(AssetFiltersDisplayComponent),
        ],
        providers: [
            { provide: SettingsService, useFactory: () => settings_mock },
            MockProvider(AssetStateService, { setOptions: set_options }),
            { provide: MAT_DIALOG_DATA, useFactory: () => dialog_data },
        ],
    });

    beforeEach(() => {
        set_options.mockClear();
        settings_mock = createSettingsServiceMock();
        dialog_data = { details: { duration: 60 }, items: [], requested: {} };
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should pass booking details to the state service', () => {
        expect(set_options).toHaveBeenCalledWith(dialog_data.details);
    });

    it('should clamp the delivery offset to the booking window', () => {
        // Mutate the same data object the injector already cached, then rebuild
        // the component with change detection off so the mock filter component
        // does not push its default offset back through the two-way binding
        dialog_data.offset = 100;
        spectator = createComponent({ detectChanges: false });

        expect(spectator.component.offset()).toBe(60);
    });

    it('should add and remove groups from the selection', () => {
        const group = { id: '1', quantity: 2 } as AssetGroup;
        spectator.component.setSelected(group, true);
        expect(spectator.component.selected()).toContain(group);
        expect(spectator.component.isSelected('1')).toBeTruthy();

        spectator.component.setSelected(group, false);
        expect(spectator.component.selected()).not.toContain(group);
        expect(spectator.component.isSelected('1')).toBeFalsy();
    });

    it('should ignore selection changes for a null group', () => {
        spectator.component.setSelected(null, true);
        expect(spectator.component.selected()).toEqual([]);
    });

    it('should total the quantity across selected groups', () => {
        spectator.component.selected.set([
            { id: '1', quantity: 2 } as AssetGroup,
            { id: '2', quantity: 3 } as AssetGroup,
        ]);
        expect(spectator.component.count()).toBe(5);
        expect(spectator.component.selected_ids()).toBe('1,2');
    });

    it('should update the quantity of the displayed group', () => {
        const group = { id: '1', quantity: 1, assets: [{}, {}] } as AssetGroup;
        spectator.component.selected.set([group]);
        spectator.component.displayed.set(group);

        spectator.component.updateSelectedCount(2);

        expect(spectator.component.selected()[0].quantity).toBe(2);
    });

    it('should add a favourite when not already saved', () => {
        settings_mock.get.mockReturnValue([]);
        spectator.component.toggleFavourite({ id: '1' } as AssetGroup);

        expect(settings_mock.saveUserSetting).toHaveBeenCalledWith(
            'favourite_assets',
            ['1'],
        );
    });

    it('should remove an existing favourite', () => {
        settings_mock.get.mockReturnValue(['1', '2']);
        spectator.component.toggleFavourite({ id: '1' } as AssetGroup);

        expect(settings_mock.saveUserSetting).toHaveBeenCalledWith(
            'favourite_assets',
            ['2'],
        );
    });

    it('should bind delivery settings into the filter component', () => {
        spectator.component.exact_time.set(true);
        spectator.component.offset.set(45);
        spectator.component.offset_day.set(1);
        spectator.detectChanges();

        const filters = spectator.query(AssetFiltersComponent as any) as any;
        expect(filters.at_time).toBe(true);
        expect(filters.offset).toBe(45);
        expect(filters.offset_day).toBe(1);
    });
});
