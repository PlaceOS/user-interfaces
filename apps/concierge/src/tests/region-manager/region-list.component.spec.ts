import { Clipboard } from '@angular/cdk/clipboard';
import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { setNotifyOutlet } from '@placeos/common';

import { RegionListComponent } from '../../app/region-manager/region-list.component';
import { RegionManagementService } from '../../app/region-manager/region-management.service';
import { ConciergeSettingsFormModalComponent } from '../../app/ui/app-settings/concierge-settings-form-modal.component';

describe('RegionListComponent', () => {
    let spectator: Spectator<RegionListComponent>;
    let manager: any;
    let copy: any;
    let notify_open: ReturnType<typeof vi.fn>;

    const createComponent = createComponentFactory({
        component: RegionListComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(RegionManagementService, {}),
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
            filtered_regions: signal([{ id: 'r1' }]),
            editRegion: vi.fn(),
            removeRegion: vi.fn(),
        };
        copy = vi.fn(() => true);
        spectator = createComponent({
            providers: [
                { provide: RegionManagementService, useValue: manager },
                { provide: Clipboard, useValue: { copy } },
                { provide: MatDialog, useValue: { open: vi.fn() } },
            ],
        });
    });

    afterEach(() => setNotifyOutlet(null as any, true));

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
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );

        notify_open.mockClear();
        copy.mockReturnValue(false);
        spectator.component.copyToClipboard('r1');
        expect(notify_open).not.toHaveBeenCalled();
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
