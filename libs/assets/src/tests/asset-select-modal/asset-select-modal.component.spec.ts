import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { AssetDetailsComponent } from '../../lib/asset-select-modal/asset-details.component';
import { AssetFiltersDisplayComponent } from '../../lib/asset-select-modal/asset-filters-display.component';
import { AssetFiltersComponent } from '../../lib/asset-select-modal/asset-filters.component';
import { AssetListComponent } from '../../lib/asset-select-modal/asset-list.component';

import { AssetSelectModalComponent } from '../../lib/asset-select-modal/asset-select-modal.component';

describe('AssetSelectModalComponent', () => {
    let spectator: Spectator<AssetSelectModalComponent>;
    const createComponent = createRoutingFactory({
        component: AssetSelectModalComponent,
        providers: [
            {
                provide: SettingsService,
                useValue: { get: jest.fn(), saveUserSetting: jest.fn() },
            },
            { provide: MAT_DIALOG_DATA, useValue: { details: {} } },
        ],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(AssetFiltersComponent),
            MockComponent(AssetFiltersDisplayComponent),
            MockComponent(AssetListComponent),
            MockComponent(AssetDetailsComponent),
        ],
        imports: [MatDialogModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show asset list', () => {
        expect('asset-list').toExist();
    });
    it('should show asset filters', () => {
        expect('asset-filters').toExist();
        expect('asset-filters-display').toExist();
    });
    it('should show asset details', () => {
        expect('asset-details').toExist();
    });

    it('should allow setting selected assets', () => {
        spectator.component.setSelected({ id: '1' } as any, true);
        expect(spectator.component.selected).toHaveLength(1);
        spectator.component.setSelected({ id: '1' } as any, false);
        expect(spectator.component.selected).toHaveLength(0);
    });

    it('should allow toggling favourites', () => {
        const settings = spectator.inject(SettingsService);
        (settings.get as any).mockImplementation(() => []);
        spectator.component.toggleFavourite({ id: '1' } as any);
        expect(settings.saveUserSetting).toBeCalledWith('favourite_assets', [
            '1',
        ]);
        (settings.get as any).mockImplementation(() => ['1']);
        spectator.component.toggleFavourite({ id: '1' } as any);
        expect(settings.saveUserSetting).toBeCalledWith('favourite_assets', []);
    });
});
