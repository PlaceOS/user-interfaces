import { inject, Injector, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    BookingFormService,
    generateBookingForm,
    ParkingService,
} from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { ParkingRequestModalComponent } from '../../app/parking/parking-request-modal.component';

describe('ParkingRequestModalComponent', () => {
    let spectator: Spectator<ParkingRequestModalComponent>;
    let data: any;
    let settings: Record<string, unknown>;
    let user_details: any;
    let model: BookingFormService['model'];
    const post_form = jest.fn(async () => ({ id: 'req-1', status: 'approved' }));
    const clear_form = jest.fn();
    const close = jest.fn();

    const createComponent = createComponentFactory({
        component: ParkingRequestModalComponent,
        shallow: true,
        detectChanges: false,
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
                    return {
                        model: ref.model,
                        form: ref.form,
                        newForm: jest.fn(),
                        setOptions: jest.fn(),
                        postForm: post_form,
                        clearForm: clear_form,
                    } as Partial<BookingFormService>;
                },
            },
            MockProvider(ParkingService, {
                loadBookings: jest.fn(),
                user_details: (() => user_details) as any,
            }),
            MockProvider(OrganisationService, {
                building: { id: 'bld-1' },
                organisation: { id: 'org-1' },
                region: { id: 'region-1' },
            } as any),
            MockProvider(MatDialogRef, { close } as any),
            MockProvider(SettingsService as any, {
                get: jest.fn((key: string) => settings[key]),
            }),
        ],
    });

    beforeEach(() => {
        data = { booking: null };
        settings = {};
        user_details = null;
        post_form.mockClear();
        clear_form.mockClear();
        close.mockClear();
    });

    it('should seed the form with parking request defaults', async () => {
        spectator = createComponent();

        await spectator.component.ngOnInit();

        expect(model().booking_type).toBe('parking');
        expect(model().request_type).toBe('standard');
        expect(model().vehicle_type).toBe('car');
        expect(model().recurrence_type).toBe('none');
    });

    it('should reveal special needs when the parking user requires them', async () => {
        user_details = { email: 'jane@example.com', special_needs: true };

        spectator = createComponent();
        await spectator.component.ngOnInit();

        expect(spectator.component.show_special_needs()).toBe(true);
    });

    it('should submit the request and close the dialog with the created id', async () => {
        spectator = createComponent();
        await spectator.component.ngOnInit();

        await spectator.component.postForm();

        expect(post_form).toHaveBeenCalled();
        expect(clear_form).toHaveBeenCalled();
        expect(close).toHaveBeenCalledWith('req-1');
    });
});
