import { inject, Injector, signal } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { createComponentFactory } from '@ngneat/spectator/vitest';
import { BookingFormService, generateBookingForm } from '@placeos/bookings';
import { setNotifyOutlet } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { DeskBookModalComponent } from '../../app/desks/desk-book-modal.component';

describe('DeskBookModalComponent', () => {
    const newForm = vi.fn();
    const postForm = vi.fn(async (): Promise<unknown> => null);
    const createComponent = createComponentFactory({
        component: DeskBookModalComponent,
        shallow: true,
        providers: [
            {
                provide: BookingFormService,
                useFactory: () => {
                    const ref = generateBookingForm(
                        undefined,
                        inject(Injector),
                    );
                    return {
                        model: ref.model,
                        form: ref.form,
                        newForm,
                        options: signal({ type: 'desk' }),
                        postForm,
                    };
                },
            },
            MockProvider(MatDialogRef, { close: vi.fn() }),
        ],
    });

    beforeEach(() => {
        newForm.mockClear();
        postForm.mockReset();
    });

    afterEach(() => setNotifyOutlet(null));

    it('should initialise a desk booking form', () => {
        createComponent();

        expect(newForm).toHaveBeenCalledWith('desk');
    });

    it('should show invalid fields without rejecting or closing', async () => {
        const open = vi.fn(() => ({
            onAction: () => ({ subscribe: vi.fn() }),
        }));
        setNotifyOutlet({ open } as unknown as MatSnackBar, true);
        postForm.mockRejectedValue('Some fields are invalid. [Desk]');
        const spectator = createComponent();
        const dialog_ref = spectator.inject(MatDialogRef);

        await expect(spectator.component.save()).resolves.toBeUndefined();

        expect(open).toHaveBeenCalledWith(
            'Some fields are invalid. [Desk]',
            'OK',
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });
});
