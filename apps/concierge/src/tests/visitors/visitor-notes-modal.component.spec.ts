import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { setNotifyOutlet } from '@placeos/common';

import { VisitorNotesModalComponent } from '../../app/visitors/visitor-notes-modal.component';

vi.mock('@placeos/ts-client/staff', { spy: true });

import { mockData } from '@placeos/common/tests';
import { mockReply } from '@placeos/ts-client/compat';
import { bookings, Booking as StaffBooking } from '@placeos/ts-client/staff';

describe('VisitorNotesModalComponent', () => {
    let spectator: Spectator<VisitorNotesModalComponent>;
    let dialog_ref: { close: unknown; disableClose: boolean };

    // Staff API booking IDs are integers
    const item = {
        id: '1',
        asset_name: 'John Doe',
        extension_data: { notes: 'existing note', other: 'keep' },
        toJSON: () => ({ id: '1', asset_name: 'John Doe' }),
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
        vi.mocked(bookings.update).mockResolvedValue(
            mockReply(mockData(StaffBooking, { id: 1 })),
        );
        setNotifyOutlet(null, true);
        dialog_ref = { close: vi.fn(), disableClose: false };
        spectator = createComponent({
            providers: [{ provide: MatDialogRef, useValue: dialog_ref }],
        });
    });

    afterEach(() => setNotifyOutlet(null, true));

    it('should seed notes from the booking extension data', () => {
        expect(spectator.component.notes()).toBe('existing note');
    });

    it('should persist the merged notes and close on save', async () => {
        spectator.component.notes.set('updated note');
        await spectator.component.save();

        // updateBooking -> bookings.update()
        expect(bookings.update).toHaveBeenCalledWith({
            id: 1,
            body: expect.objectContaining({
                extension_data: expect.objectContaining({
                    notes: 'updated note',
                    other: 'keep',
                }),
            }),
        });
        expect(dialog_ref.close).toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });

    it('should restore state and rethrow when saving fails', async () => {
        vi.mocked(bookings.update).mockRejectedValue(new Error('nope'));

        await expect(spectator.component.save()).rejects.toThrow('nope');
        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(dialog_ref.disableClose).toBe(false);
        expect(spectator.component.loading()).toBe(false);
    });
});
