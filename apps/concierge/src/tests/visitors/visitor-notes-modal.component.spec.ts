import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MockProvider } from 'ng-mocks';

import { VisitorNotesModalComponent } from '../../app/visitors/visitor-notes-modal.component';

jest.mock('@placeos/bookings');
import * as booking_mod from '@placeos/bookings';

describe('VisitorNotesModalComponent', () => {
    let spectator: Spectator<VisitorNotesModalComponent>;
    let dialog_ref: { close: jest.Mock; disableClose: boolean };

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
                    close: jest.fn(),
                    disableClose: false,
                }),
            },
        ],
    });

    beforeEach(() => {
        (booking_mod as any).updateBooking = jest.fn(() => Promise.resolve({}));
        dialog_ref = { close: jest.fn(), disableClose: false };
        spectator = createComponent({
            providers: [{ provide: MatDialogRef, useValue: dialog_ref }],
        });
    });

    it('should seed notes from the booking extension data', () => {
        expect(spectator.component.notes()).toBe('existing note');
    });

    it('should persist the merged notes and close on save', async () => {
        spectator.component.notes.set('updated note');
        await spectator.component.save();

        expect(booking_mod.updateBooking).toHaveBeenCalledWith(
            'booking-1',
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
        (booking_mod as any).updateBooking = jest.fn(() =>
            Promise.reject(new Error('nope')),
        );

        await expect(spectator.component.save()).rejects.toThrow('nope');
        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(dialog_ref.disableClose).toBe(false);
        expect(spectator.component.loading()).toBe(false);
    });
});
