import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MockProvider } from 'ng-mocks';

import { setNotifyOutlet } from '@placeos/common';

import { VisitorNotesModalComponent } from '../../app/visitors/visitor-notes-modal.component';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

describe('VisitorNotesModalComponent', () => {
    let spectator: Spectator<VisitorNotesModalComponent>;
    let dialog_ref: { close: any; disableClose: boolean };

    const item = {
        id: 'booking-1',
        asset_name: 'John Doe',
        extension_data: { notes: 'existing note', other: 'keep' },
        toJSON: () => ({ id: 'booking-1', asset_name: 'John Doe' }),
    };

    const createComponent = createComponentFactory({
        component: VisitorNotesModalComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(MAT_DIALOG_DATA, { item }),
            {
                provide: MatDialogRef,
                useValue: (dialog_ref = {
                    close: vi.fn(),
                    disableClose: false,
                }),
            },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(ts_client.patch).mockResolvedValue({} as any);
        setNotifyOutlet(null as any, true);
        dialog_ref = { close: vi.fn(), disableClose: false };
        spectator = createComponent({
            providers: [{ provide: MatDialogRef, useValue: dialog_ref }],
        });
    });

    afterEach(() => setNotifyOutlet(null as any, true));

    it('should seed notes from the booking extension data', () => {
        expect(spectator.component.notes()).toBe('existing note');
    });

    it('should persist the merged notes and close on save', async () => {
        spectator.component.notes.set('updated note');
        await spectator.component.save();

        // updateBooking -> ts-client `patch` at the API boundary
        expect(ts_client.patch).toHaveBeenCalledWith(
            expect.stringContaining('booking-1'),
            expect.objectContaining({
                extension_data: expect.objectContaining({
                    notes: 'updated note',
                    other: 'keep',
                }),
            }),
        );
        expect(dialog_ref.close).toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });

    it('should restore state and rethrow when saving fails', async () => {
        vi.mocked(ts_client.patch).mockRejectedValue(new Error('nope'));

        await expect(spectator.component.save()).rejects.toThrow('nope');
        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(dialog_ref.disableClose).toBe(false);
        expect(spectator.component.loading()).toBe(false);
    });
});
