import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { inject, Injector, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    BookingFormService,
    generateBookingForm,
    ParkingService,
} from '@placeos/bookings';
import {
    OrganisationService,
    setCurrentUser,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { ParkingRequestModalComponent } from '../../app/parking/parking-request-modal.component';

describe('ParkingRequestModalComponent', () => {
    let spectator: Spectator<ParkingRequestModalComponent>;
    let data: any;
    let settings: Record<string, unknown>;
    let user_details: any;
    let model: BookingFormService['model'];
    let settings_service: SettingsService;
    const post_form = vi.fn(async () => ({ id: 'req-1', status: 'approved' }));
    const clear_form = vi.fn();
    const close = vi.fn();

    const createComponent = createComponentFactory({
        component: ParkingRequestModalComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            { provide: ComponentFixtureAutoDetect, useValue: false },
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
                        newForm: vi.fn(),
                        setOptions: vi.fn(),
                        postForm: post_form,
                        clearForm: clear_form,
                    } as any;
                },
            },
            MockProvider(ParkingService, {
                loadBookings: vi.fn(),
                user_details: (() => user_details) as any,
            }),
            MockProvider(OrganisationService, {
                building: { id: 'bld-1' },
                organisation: { id: 'org-1' },
                region: { id: 'region-1' },
            } as any),
            MockProvider(MatDialogRef, { close } as any),
            MockProvider(SettingsService as any, {
                get: vi.fn((key: string) => settings[key]),
                saveUserSetting: vi.fn(),
            }),
        ],
    });

    beforeEach(() => {
        setCurrentUser(
            new StaffUser({
                id: 'current-user',
                email: 'me@example.com',
            } as any),
        );
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

    it('should save a successful plate number for future requests', async () => {
        settings = { plate_numbers: ['abc123', 'XYZ789'] };
        spectator = createComponent();
        settings_service = spectator.inject(SettingsService);
        vi.mocked(settings_service.saveUserSetting).mockClear();
        await spectator.component.ngOnInit();
        model.update((value) => ({ ...value, plate_number: ' ABC123 ' }));

        await spectator.component.postForm();

        expect(model().plate_number).toBe('ABC123');
        expect(settings_service.saveUserSetting).toHaveBeenCalledWith(
            'plate_numbers',
            ['ABC123', 'XYZ789'],
        );
    });

    it('should not save a plate number for another user', async () => {
        spectator = createComponent();
        settings_service = spectator.inject(SettingsService);
        vi.mocked(settings_service.saveUserSetting).mockClear();
        await spectator.component.ngOnInit();
        model.update((value) => ({
            ...value,
            user: new StaffUser({
                id: 'another-user',
                email: 'someone@example.com',
            } as any),
            plate_number: 'OTHER123',
        }));

        await spectator.component.postForm();

        expect(settings_service.saveUserSetting).not.toHaveBeenCalled();
    });
});
