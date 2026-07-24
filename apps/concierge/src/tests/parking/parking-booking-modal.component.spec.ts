import { inject, Injector, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BookingFormService, generateBookingForm } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { ParkingBookingModalComponent } from '../../app/parking/parking-booking-modal.component';

describe('ParkingBookingModalComponent', () => {
    let spectator: Spectator<ParkingBookingModalComponent>;
    let settings: Record<string, unknown>;
    let data: any;
    let model: BookingFormService['model'];
    let form: BookingFormService['form'];
    const post_form = vi.fn(async () => ({ id: 'new-booking' }));
    const close = vi.fn();

    const createComponent = createComponentFactory({
        component: ParkingBookingModalComponent,
        shallow: true,
        providers: [
            { provide: MAT_DIALOG_DATA, useFactory: () => data },
            {
                provide: BookingFormService,
                useFactory: () => {
                    const ref = generateBookingForm(
                        undefined,
                        inject(Injector),
                    );
                    model = ref.model;
                    form = ref.form;
                    return {
                        model: ref.model,
                        form: ref.form,
                        newForm: vi.fn(),
                        setOptions: vi.fn(),
                        postForm: post_form,
                    } as any;
                },
            },
            MockProvider(MatDialogRef, { close } as any),
            MockProvider(SettingsService as any, {
                get: vi.fn((key: string) => settings[key]),
            }),
        ],
    });

    beforeEach(() => {
        settings = {};
        data = { booking: null };
        post_form.mockClear();
        close.mockClear();
    });

    it('should fall back to default durations from settings', () => {
        spectator = createComponent();

        expect(spectator.component.max_duration()).toBe(480);
        expect(spectator.component.min_duration()).toBe(30);
    });

    it('should prefer parking specific duration settings over booking defaults', () => {
        settings['app.parking.max_duration'] = 600;
        settings['app.parking.min_duration'] = 45;
        settings['app.bookings.max_duration'] = 120;

        spectator = createComponent();

        expect(spectator.component.max_duration()).toBe(600);
        expect(spectator.component.min_duration()).toBe(45);
    });

    it('should reduce the effective minimum duration to the smallest custom option', () => {
        settings['app.parking.min_duration'] = 60;
        settings['app.parking.custom_duration_options'] = [15, 90];

        spectator = createComponent();

        expect(spectator.component.effective_min_duration()).toBe(15);
    });

    it('should default a new booking to all day and the parking type', () => {
        spectator = createComponent();

        expect(model().booking_type).toBe('parking');
        expect(model().all_day).toBe(true);
    });

    it('should not close the dialog when the form is invalid', async () => {
        spectator = createComponent();

        await spectator.component.postForm();

        expect(post_form).not.toHaveBeenCalled();
        expect(close).not.toHaveBeenCalled();
    });

    it('should submit and close the dialog when the form is valid', async () => {
        spectator = createComponent();
        model.update((m) => ({
            ...m,
            date: Date.now(),
            asset_id: 'bay-1',
            duration: 60,
            user_name: 'Jane',
            user_email: 'jane@example.com',
        }));

        await spectator.component.postForm();

        expect(post_form).toHaveBeenCalled();
        expect(close).toHaveBeenCalledWith('new-booking');
    });
});
