import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as ts_client_mod from '@placeos/ts-client';
import { RoomAlertModalComponent } from '../../app/room-manager/room-alert-modal.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('RoomAlertModalComponent', () => {
    let spectator: Spectator<RoomAlertModalComponent>;
    let dialog_data: { room: any };
    let dialog_ref: any;

    const createComponent = createComponentFactory({
        component: RoomAlertModalComponent,
        providers: [
            { provide: MAT_DIALOG_DATA, useFactory: () => dialog_data },
            { provide: MatDialogRef, useFactory: () => dialog_ref },
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' },
            } as any),
        ],
    });

    const build = (room: any) => {
        dialog_data = { room };
        dialog_ref = { close: vi.fn() };
        spectator = createComponent({ detectChanges: false });
    };

    beforeEach(() => {
        vi.clearAllMocks();
        (ts_client_mod.updateMetadata as any).mockResolvedValue({});
    });

    it('should pre-fill the form from an existing room alert', () => {
        const room = Object.assign({ id: 'sys-1' } as any, {
            alert: { status: 'warn', message: 'Under repair' },
        });
        build(room);
        expect(spectator.component.model()).toEqual({
            status: 'warn',
            message: 'Under repair',
        });
    });

    it('should write the alert to metadata and close on save', async () => {
        (ts_client_mod.showMetadata as any).mockResolvedValue({
            details: {},
            editors: [],
        });
        build({ id: 'sys-1' } as any);
        spectator.component.model.set({
            status: 'closed',
            message: 'Flooded',
        });

        await spectator.component.save();

        expect(ts_client_mod.updateMetadata).toHaveBeenCalledWith(
            'org-1',
            expect.objectContaining({
                name: 'room_alerts',
                details: { 'sys-1': ['closed', 'Flooded'] },
            }),
        );
        expect(dialog_ref.close).toHaveBeenCalledWith(true);
    });

    it('should remove the alert entry when the status is cleared', async () => {
        (ts_client_mod.showMetadata as any).mockResolvedValue({
            details: { 'sys-1': ['warn', 'old'] },
            editors: [],
        });
        build({ id: 'sys-1' } as any);
        spectator.component.model.set({ status: '', message: '' });

        await spectator.component.save();

        expect(ts_client_mod.updateMetadata).toHaveBeenCalledWith(
            'org-1',
            expect.objectContaining({ details: {} }),
        );
        expect(dialog_ref.close).toHaveBeenCalledWith(true);
    });
});
