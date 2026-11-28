import { inject, Injector } from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    BookingFormService,
    generateBookingForm,
    ParkingService,
} from '@placeos/bookings';
import {
    OrganisationService,
    setCurrentUser,
    setNotifyOutlet,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { ParkingRequestModalComponent } from '../../app/parking/parking-request-modal.component';

vi.mock('@placeos/ts-client/staff', { spy: true });

import { mockData } from '@placeos/common/tests';
import { mockReply } from '@placeos/ts-client/compat';
import { bookings, Booking as StaffBooking } from '@placeos/ts-client/staff';

describe('ParkingRequestModalComponent', () => {
    let spectator: Spectator<ParkingRequestModalComponent>;
    let data: unknown;
    let settings: Record<string, unknown>;
    let user_details: any;
    let model: BookingFormService['model'];
    let settings_service: SettingsService;
    const post_form = vi.fn(
        async (): Promise<{ id: string; status: string }> => ({
            // Staff API booking IDs are integers
            id: '11',
            status: 'approved',
        }),
    );
    const snackbar = {
        open: vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        })),
    };
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
                    };
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
            MockProvider(MatDialogRef, { close }),
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
            }),
        );
        data = { booking: null };
        settings = {};
        user_details = null;
        post_form.mockClear();
        clear_form.mockClear();
        close.mockClear();
        snackbar.open.mockClear();
        setNotifyOutlet(snackbar as unknown as MatSnackBar, true);
        vi.mocked(bookings.approve).mockReset();
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
        expect(close).toHaveBeenCalledWith('11');
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
            }),
            plate_number: 'OTHER123',
        }));

        await spectator.component.postForm();

        expect(settings_service.saveUserSetting).not.toHaveBeenCalled();
    });

    it('should approve a new request that is not yet approved', async () => {
        post_form.mockResolvedValueOnce({ id: '11', status: 'tentative' });
        vi.mocked(bookings.approve).mockResolvedValue(
            mockReply(mockData(StaffBooking, { id: 11, approved: true })),
        );
        spectator = createComponent();
        await spectator.component.ngOnInit();

        await spectator.component.postForm();

        expect(bookings.approve).toHaveBeenCalledWith({ id: 11 });
        expect(snackbar.open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
        expect(close).toHaveBeenCalledWith('11');
    });

    it('should warn and close the dialog when approval fails after the request is saved', async () => {
        post_form.mockResolvedValueOnce({ id: '11', status: 'tentative' });
        vi.mocked(bookings.approve).mockRejectedValue({ status: 403 });
        spectator = createComponent();
        await spectator.component.ngOnInit();

        await spectator.component.postForm();

        expect(snackbar.open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['warn'] }),
        );
        expect(clear_form).toHaveBeenCalled();
        expect(close).toHaveBeenCalledWith('11');
    });
});
