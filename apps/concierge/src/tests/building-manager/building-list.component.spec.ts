import { Clipboard } from '@angular/cdk/clipboard';
import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { setNotifyOutlet } from '@placeos/common';

import { BuildingListComponent } from '../../app/building-manager/building-list.component';
import { BuildingManagementService } from '../../app/building-manager/building-management.service';
import { WorkplaceSettingsFormModalComponent } from '../../app/ui/app-settings/workplace-settings-form-modal.component';

describe('BuildingListComponent', () => {
    let spectator: Spectator<BuildingListComponent>;
    let manager: any;
    let copy: any;
    let notify_open: ReturnType<typeof vi.fn>;

    const createComponent = createComponentFactory({
        component: BuildingListComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(BuildingManagementService, {}),
            MockProvider(Clipboard, {}),
            MockProvider(MatDialog, { open: vi.fn() }),
        ],
    });

    beforeEach(() => {
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        manager = {
            filtered_buildings: signal([{ id: 'b1' }]),
            editBuilding: vi.fn(),
            editBuildingMetadata: vi.fn(),
            removeBuilding: vi.fn(),
            setAutoRelease: vi.fn(),
            setInduction: vi.fn(),
            setSupportIssueTypes: vi.fn(),
        };
        copy = vi.fn(() => true);
        spectator = createComponent({
            providers: [
                { provide: BuildingManagementService, useValue: manager },
                { provide: Clipboard, useValue: { copy } },
                { provide: MatDialog, useValue: { open: vi.fn() } },
            ],
        });
    });

    afterEach(() => setNotifyOutlet(null as any, true));

    it('should expose the filtered buildings from the manager', () => {
        expect(spectator.component.buildings()).toEqual([{ id: 'b1' }]);
    });

    it('should notify only when the id is copied successfully', () => {
        spectator.component.copyToClipboard('b1');
        expect(copy).toHaveBeenCalledWith('b1');
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );

        notify_open.mockClear();
        copy.mockReturnValue(false);
        spectator.component.copyToClipboard('b1');
        expect(notify_open).not.toHaveBeenCalled();
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
