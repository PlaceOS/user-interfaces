import { inject, Injector, signal } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BookingFormService, generateBookingForm } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { LockerBookingModalComponent } from '../../app/lockers/locker-booking-modal.component';

describe('LockerBookingModalComponent', () => {
    let spectator: Spectator<LockerBookingModalComponent>;
    let settings: Record<string, unknown>;
    let dialog_data: any;
    let model: BookingFormService['model'];
    let form: BookingFormService['form'];
    const newForm = vi.fn();
    const setOptions = vi.fn();
    const postForm = vi.fn(async () => ({ id: 'lb-1' }));

    const createComponent = createComponentFactory({
        component: LockerBookingModalComponent,
        shallow: true,
        providers: [
            { provide: MAT_DIALOG_DATA, useFactory: () => dialog_data },
            {
                provide: BookingFormService,
                useFactory: () => {
                    const ref = generateBookingForm(undefined, inject(Injector));
                    model = ref.model;
                    form = ref.form;
                    return {
                        model: ref.model,
                        form: ref.form,
                        newForm,
                        setOptions,
                        postForm,
                    } as any;
                },
            },
            MockProvider(MatDialogRef, { close: vi.fn() } as any),
            MockProvider(MatDialog, { open: vi.fn() } as any),
            MockProvider(SettingsService, {
                get: vi.fn((key: string) => settings[key]),
            } as any),
        ],
    });

    beforeEach(() => {
        settings = {};
        dialog_data = {};
        newForm.mockClear();
        setOptions.mockClear();
        postForm.mockClear();
    });

    it('should compute the effective minimum duration from settings', () => {
        settings['app.lockers.min_duration'] = 30;
        settings['app.lockers.custom_duration_options'] = [15, 45];
        spectator = createComponent();

        expect(spectator.component.effective_min_duration).toBe(15);
    });

    it('should fall back through the max duration setting hierarchy', () => {
        settings['app.bookings.max_duration'] = 240;
        spectator = createComponent();

        expect(spectator.component.max_duration).toBe(240);
    });

    it('should default allow_all_day to true when unset', () => {
        spectator = createComponent();
        expect(spectator.component.allow_all_day).toBe(true);
    });

    it('should initialise a locker booking form on init', () => {
        spectator = createComponent();

        expect(newForm).toHaveBeenCalledWith('locker', undefined);
        expect(model().booking_type).toBe('locker');
    });

    it('should seed the selected locker resource from dialog data', () => {
        const space = { id: 'locker-7' };
        dialog_data = { space };
        spectator = createComponent();

        expect(model().resources).toEqual([space]);
    });

    it('should clamp an over-long duration before submitting', async () => {
        settings['app.lockers.max_duration'] = 60;
        spectator = createComponent();
        model.update((m) => ({ ...m, all_day: false, duration: 999 }));

        await spectator.component.postForm();

        expect(model().duration).toBe(30);
    });
});
