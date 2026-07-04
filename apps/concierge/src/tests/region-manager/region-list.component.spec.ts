import { Clipboard } from '@angular/cdk/clipboard';
import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';

import { RegionListComponent } from '../../app/region-manager/region-list.component';
import { RegionManagementService } from '../../app/region-manager/region-management.service';
import { ConciergeSettingsFormModalComponent } from '../../app/ui/app-settings/concierge-settings-form-modal.component';

import * as common_mod from '@placeos/common';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifySuccess: jest.fn(),
}));

describe('RegionListComponent', () => {
    let spectator: Spectator<RegionListComponent>;
    let manager: any;
    let copy: jest.Mock;

    const createComponent = createComponentFactory({
        component: RegionListComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(RegionManagementService, {}),
            MockProvider(Clipboard, {}),
            MockProvider(MatDialog, { open: jest.fn() }),
        ],
    });

    beforeEach(() => {
        (common_mod.notifySuccess as jest.Mock).mockClear();
        manager = {
            filtered_regions: signal([{ id: 'r1' }]),
            editRegion: jest.fn(),
            removeRegion: jest.fn(),
        };
        copy = jest.fn(() => true);
        spectator = createComponent({
            providers: [
                { provide: RegionManagementService, useValue: manager },
                { provide: Clipboard, useValue: { copy } },
                { provide: MatDialog, useValue: { open: jest.fn() } },
            ],
        });
    });

    it('should expose the filtered regions from the manager', () => {
        expect(spectator.component.regions()).toEqual([{ id: 'r1' }]);
    });

    it('should delegate region actions to the management service', () => {
        const row = { id: 'r1' };
        spectator.component.editRegion(row);
        spectator.component.removeRegion(row);
        expect(manager.editRegion).toHaveBeenCalledWith(row);
        expect(manager.removeRegion).toHaveBeenCalledWith(row);
    });

    it('should notify only when the id copy succeeds', () => {
        spectator.component.copyToClipboard('r1');
        expect(common_mod.notifySuccess).toHaveBeenCalled();

        (common_mod.notifySuccess as jest.Mock).mockClear();
        copy.mockReturnValue(false);
        spectator.component.copyToClipboard('r1');
        expect(common_mod.notifySuccess).not.toHaveBeenCalled();
    });

    it('should open the concierge settings modal for the selected zone', () => {
        const zone = { id: 'r1' };
        spectator.component.editConciergeSettings(zone);
        expect(spectator.inject(MatDialog).open).toHaveBeenCalledWith(
            ConciergeSettingsFormModalComponent,
            { data: { zone } },
        );
    });
});
