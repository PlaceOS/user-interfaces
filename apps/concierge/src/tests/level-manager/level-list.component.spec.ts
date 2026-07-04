import { Clipboard } from '@angular/cdk/clipboard';
import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';

import { LevelListComponent } from '../../app/level-manager/level-list.component';
import { LevelManagementService } from '../../app/level-manager/level-management.service';
import { BookingPanelSettingsModalComponent } from '../../app/ui/app-settings/booking-panel-settings-modal.component';

import * as common_mod from '@placeos/common';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifySuccess: jest.fn(),
}));

describe('LevelListComponent', () => {
    let spectator: Spectator<LevelListComponent>;
    let manager: any;
    let copy: jest.Mock;

    const createComponent = createComponentFactory({
        component: LevelListComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(LevelManagementService, {}),
            MockProvider(Clipboard, {}),
            MockProvider(MatDialog, { open: jest.fn() }),
        ],
    });

    beforeEach(() => {
        (common_mod.notifySuccess as jest.Mock).mockClear();
        manager = {
            filtered_levels: signal([{ id: 'lvl-1' }]),
            editLevel: jest.fn(),
            editLevelMap: jest.fn(),
            removeLevel: jest.fn(),
        };
        copy = jest.fn(() => true);
        spectator = createComponent({
            providers: [
                { provide: LevelManagementService, useValue: manager },
                { provide: Clipboard, useValue: { copy } },
                { provide: MatDialog, useValue: { open: jest.fn() } },
            ],
        });
    });

    it('should expose the filtered levels from the manager', () => {
        expect(spectator.component.levels()).toEqual([{ id: 'lvl-1' }]);
    });

    it('should delegate level actions to the management service', () => {
        const row = { id: 'lvl-1' };
        spectator.component.editLevel(row);
        spectator.component.editLevelMap(row);
        spectator.component.removeLevel(row);
        expect(manager.editLevel).toHaveBeenCalledWith(row);
        expect(manager.editLevelMap).toHaveBeenCalledWith(row);
        expect(manager.removeLevel).toHaveBeenCalledWith(row);
    });

    it('should notify only when the id copy succeeds', () => {
        spectator.component.copyToClipboard('lvl-1');
        expect(common_mod.notifySuccess).toHaveBeenCalled();

        (common_mod.notifySuccess as jest.Mock).mockClear();
        copy.mockReturnValue(false);
        spectator.component.copyToClipboard('lvl-1');
        expect(common_mod.notifySuccess).not.toHaveBeenCalled();
    });

    it('should open the booking panel settings modal for the level', () => {
        const level = { id: 'lvl-1' };
        spectator.component.editBookingPanelSettings(level);
        expect(spectator.inject(MatDialog).open).toHaveBeenCalledWith(
            BookingPanelSettingsModalComponent,
            { data: { zone: level } },
        );
    });
});
