import { MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService, generateBookingForm } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { DeskBookModalComponent } from '../../app/desks/desk-book-modal.component';

describe('DeskBookModalComponent', () => {
    let spectator: Spectator<DeskBookModalComponent>;
    const form = generateBookingForm();
    const newForm = jest.fn(() => form.patchValue({ all_day: true }));
    const createComponent = createComponentFactory({
        component: DeskBookModalComponent,
        shallow: true,
        providers: [
            MockProvider(BookingFormService, {
                form,
                newForm,
                options: of({ type: 'desk' }),
                postForm: jest.fn(async () => null),
            }),
            MockProvider(MatDialogRef, { close: jest.fn() }),
            MockProvider(SettingsService, {
                get: jest.fn((key: string) =>
                    key === 'app.desks.default_duration' ? 60 : undefined,
                ),
            }),
        ],
    });

    beforeEach(() => {
        form.reset();
        newForm.mockClear();
        spectator = createComponent();
    });

    it('should initialise a desk booking form so booking defaults apply', () => {
        expect(newForm).toHaveBeenCalledWith('desk');
        expect(spectator.component.form.value.all_day).toBe(true);
    });
});
