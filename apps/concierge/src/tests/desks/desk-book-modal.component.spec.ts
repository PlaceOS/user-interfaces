import { inject, Injector, signal } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory } from '@ngneat/spectator/vitest';
import { BookingFormService, generateBookingForm } from '@placeos/bookings';
import { MockProvider } from 'ng-mocks';

import { DeskBookModalComponent } from '../../app/desks/desk-book-modal.component';

describe('DeskBookModalComponent', () => {
    const newForm = vi.fn();
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
                        postForm: vi.fn(async () => null),
                    };
                },
            },
            MockProvider(MatDialogRef, { close: vi.fn() }),
        ],
    });

    beforeEach(() => newForm.mockClear());

    it('should initialise a desk booking form', () => {
        createComponent();

        expect(newForm).toHaveBeenCalledWith('desk');
    });
});
