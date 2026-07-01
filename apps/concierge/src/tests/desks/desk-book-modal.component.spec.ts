import { inject, Injector, signal } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService, generateBookingForm } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { DeskBookModalComponent } from '../../app/desks/desk-book-modal.component';

describe('DeskBookModalComponent', () => {
    let spectator: Spectator<DeskBookModalComponent>;
    let settings: Record<string, unknown>;
    let model: BookingFormService['model'];
    let form: BookingFormService['form'];
    let default_value: ReturnType<BookingFormService['model']>;
    const newForm = jest.fn();
    const applyDurationSettings = jest.fn();
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
                    model = ref.model;
                    form = ref.form;
                    if (!default_value) default_value = model();
                    return {
                        model: ref.model,
                        form: ref.form,
                        newForm,
                        applyDurationSettings,
                        options: signal({ type: 'desk' }) as any,
                        postForm: jest.fn(async () => null),
                    } as Partial<BookingFormService>;
                },
            },
            MockProvider(MatDialogRef, { close: jest.fn() }),
            MockProvider(SettingsService as any, {
                get: jest.fn((key: string) => settings[key]),
            }),
        ],
    });

    beforeEach(() => {
        settings = { 'app.desks.default_duration': 60 };
        newForm.mockClear();
        applyDurationSettings.mockClear();
    });

    it('should initialise a desk booking form', () => {
        spectator = createComponent();

        expect(newForm).toHaveBeenCalledWith('desk');
        expect(model().duration).toBe(60);
        expect(applyDurationSettings).toHaveBeenCalledTimes(1);
    });

    it('should apply the desk all day default setting', () => {
        settings['app.desks.all_day_default'] = true;

        spectator = createComponent();

        expect(model().all_day).toBe(true);
    });

    it('should fall back to the booking all day default setting', () => {
        settings['app.bookings.all_day_default'] = true;

        spectator = createComponent();

        expect(model().all_day).toBe(true);
    });
});
