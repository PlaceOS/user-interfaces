import { Clipboard } from '@angular/cdk/clipboard';
import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';

import { BuildingListComponent } from '../../app/building-manager/building-list.component';
import { BuildingManagementService } from '../../app/building-manager/building-management.service';
import { WorkplaceSettingsFormModalComponent } from '../../app/ui/app-settings/workplace-settings-form-modal.component';

import * as common_mod from '@placeos/common';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifySuccess: jest.fn(),
}));

describe('BuildingListComponent', () => {
    let spectator: Spectator<BuildingListComponent>;
    let manager: any;
    let copy: jest.Mock;

    const createComponent = createComponentFactory({
        component: BuildingListComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(BuildingManagementService, {}),
            MockProvider(Clipboard, {}),
            MockProvider(MatDialog, { open: jest.fn() }),
        ],
    });

    beforeEach(() => {
        (common_mod.notifySuccess as jest.Mock).mockClear();
        manager = {
            filtered_buildings: signal([{ id: 'b1' }]),
            editBuilding: jest.fn(),
            editBuildingMetadata: jest.fn(),
            removeBuilding: jest.fn(),
            setAutoRelease: jest.fn(),
            setInduction: jest.fn(),
            setSupportIssueTypes: jest.fn(),
        };
        copy = jest.fn(() => true);
        spectator = createComponent({
            providers: [
                { provide: BuildingManagementService, useValue: manager },
                { provide: Clipboard, useValue: { copy } },
                { provide: MatDialog, useValue: { open: jest.fn() } },
            ],
        });
    });

    it('should expose the filtered buildings from the manager', () => {
        expect(spectator.component.buildings()).toEqual([{ id: 'b1' }]);
    });

    it('should notify only when the id is copied successfully', () => {
        spectator.component.copyToClipboard('b1');
        expect(copy).toHaveBeenCalledWith('b1');
        expect(common_mod.notifySuccess).toHaveBeenCalled();

        (common_mod.notifySuccess as jest.Mock).mockClear();
        copy.mockReturnValue(false);
        spectator.component.copyToClipboard('b1');
        expect(common_mod.notifySuccess).not.toHaveBeenCalled();
    });

    it('should delegate row actions to the management service', () => {
        const row = { id: 'b1' };
        spectator.component.editBuilding(row);
        spectator.component.setAutoRelease(row);
        spectator.component.setInduction(row);
        spectator.component.setSupportIssueTypes(row);
        spectator.component.removeBuilding(row);
        expect(manager.editBuilding).toHaveBeenCalledWith(row);
        expect(manager.setAutoRelease).toHaveBeenCalledWith(row);
        expect(manager.setInduction).toHaveBeenCalledWith(row);
        expect(manager.setSupportIssueTypes).toHaveBeenCalledWith(row);
        expect(manager.removeBuilding).toHaveBeenCalledWith(row);
    });

    it('should open the workplace settings modal for the selected zone', () => {
        const zone = { id: 'b1' };
        spectator.component.editWorkplaceSettings(zone);
        expect(spectator.inject(MatDialog).open).toHaveBeenCalledWith(
            WorkplaceSettingsFormModalComponent,
            { data: { zone } },
        );
    });
});
