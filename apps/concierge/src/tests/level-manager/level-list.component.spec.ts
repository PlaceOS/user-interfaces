import { Clipboard } from '@angular/cdk/clipboard';
import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { setNotifyOutlet } from '@placeos/common';

import { LevelListComponent } from '../../app/level-manager/level-list.component';
import { LevelManagementService } from '../../app/level-manager/level-management.service';
import { BookingPanelSettingsModalComponent } from '../../app/ui/app-settings/booking-panel-settings-modal.component';

describe('LevelListComponent', () => {
    let spectator: Spectator<LevelListComponent>;
    let manager: any;
    let copy: any;
    let navigate: any;
    let notify_open: ReturnType<typeof vi.fn>;

    const createComponent = createComponentFactory({
        component: LevelListComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(LevelManagementService, {}),
            MockProvider(Clipboard, {}),
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(Router, { navigate: vi.fn() }),
        ],
    });

    beforeEach(() => {
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        manager = {
            filtered_levels: signal([{ id: 'lvl-1' }]),
            editLevel: vi.fn(),
            removeLevel: vi.fn(),
        };
        copy = vi.fn(() => true);
        navigate = vi.fn(async () => true);
        spectator = createComponent({
            providers: [
                { provide: LevelManagementService, useValue: manager },
                { provide: Clipboard, useValue: { copy } },
                { provide: MatDialog, useValue: { open: vi.fn() } },
                { provide: Router, useValue: { navigate } },
            ],
        });
    });

    afterEach(() => setNotifyOutlet(null, true));

    it('should expose the filtered levels from the manager', () => {
        expect(spectator.component.levels()).toEqual([{ id: 'lvl-1' }]);
    });

    it('should delegate level actions to the management service', () => {
        const row = { id: 'lvl-1' };
        spectator.component.editLevel(row);
        spectator.component.removeLevel(row);
        expect(manager.editLevel).toHaveBeenCalledWith(row);
        expect(manager.removeLevel).toHaveBeenCalledWith(row);
    });

    it('should open the map in Map Management', () => {
        spectator.component.editLevelMap({ id: 'lvl-1' });
        expect(navigate).toHaveBeenCalledWith(['/map-management', 'lvl-1']);
    });

    it('should notify only when the id copy succeeds', () => {
        spectator.component.copyToClipboard('lvl-1');
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );

        notify_open.mockClear();
        copy.mockReturnValue(false);
        spectator.component.copyToClipboard('lvl-1');
        expect(notify_open).not.toHaveBeenCalled();
    });

    it('should open the booking panel settings modal for the level', async () => {
        const level = { id: 'lvl-1' };
        await spectator.component.editBookingPanelSettings(level);
        expect(spectator.inject(MatDialog).open).toHaveBeenCalledWith(
            BookingPanelSettingsModalComponent,
            { data: { zone: level } },
        );
    });
});
