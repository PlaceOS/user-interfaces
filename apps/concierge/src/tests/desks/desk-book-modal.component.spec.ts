import { MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService, generateBookingForm } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { DeskBookModalComponent } from '../../app/desks/desk-book-modal.component';

describe('DeskBookModalComponent', () => {
    let spectator: Spectator<DeskBookModalComponent>;
    let settings: Record<string, unknown>;
    const form = generateBookingForm();
    const newForm = jest.fn();
    const applyDurationSettings = jest.fn();
    const createComponent = createComponentFactory({
        component: DeskBookModalComponent,
        shallow: true,
        providers: [
            MockProvider(BookingFormService, {
                form,
                newForm,
                applyDurationSettings,
                options: of({ type: 'desk' }),
                postForm: jest.fn(async () => null),
            }),
            MockProvider(MatDialogRef, { close: jest.fn() }),
            MockProvider(SettingsService, {
                get: jest.fn((key: string) => settings[key]),
            }),
        ],
    });

    beforeEach(() => {
        settings = { 'app.desks.default_duration': 60 };
        form.reset();
        newForm.mockClear();
        applyDurationSettings.mockClear();
    });

    it('should initialise a desk booking form', () => {
        spectator = createComponent();

        expect(newForm).toHaveBeenCalledWith('desk');
        expect(spectator.component.form.value.duration).toBe(60);
        expect(applyDurationSettings).toHaveBeenCalledTimes(1);
    });

    it('should apply the desk all day default setting', () => {
        settings['app.desks.all_day_default'] = true;

        spectator = createComponent();

        expect(spectator.component.form.value.all_day).toBe(true);
    });

    it('should fall back to the booking all day default setting', () => {
        settings['app.bookings.all_day_default'] = true;

        spectator = createComponent();

        expect(spectator.component.form.value.all_day).toBe(true);
    });
});
