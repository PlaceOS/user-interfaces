import { signal } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService, ParkingService } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { ParkingFlowFormComponent } from '../../../app/book/parking-flow/parking-flow-form.component';
import * as common from '@placeos/common';

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return {
        ...actual,
        notifyError: jest.fn(),
        currentUser: jest.fn(() => ({ email: 'me@test.com', name: 'Me' })),
    };
});

describe('ParkingFlowFormComponent', () => {
    let spectator: Spectator<ParkingFlowFormComponent>;
    let model: ReturnType<typeof signal<Record<string, any>>>;
    let valid_flag: boolean;
    let form: any;
    let user_details: ReturnType<typeof signal<any>>;
    let open_result: any;
    let dismiss_value: any;

    const createComponent = createComponentFactory({
        component: ParkingFlowFormComponent,
        detectChanges: false,
        shallow: true,
        providers: [
            MockProvider(BookingFormService, {} as any),
            MockProvider(SettingsService, {} as any),
            MockProvider(ParkingService, {} as any),
            MockProvider(MatBottomSheet, {} as any),
            MockProvider(Router, {} as any),
        ],
    });

    beforeEach(() => {
        (common.notifyError as jest.Mock).mockClear();
        valid_flag = true;
        model = signal({
            id: '',
            title: 'Parking',
            date: Date.now() + 60 * 60 * 1000,
            duration: 60,
            asset_id: '',
            resources: [],
            plate_number: '',
        });
        form = () => ({ valid: () => valid_flag });
        user_details = signal<any>(null);
        dismiss_value = true;
        open_result = {
            instance: { show_close: { set: jest.fn() } },
            afterDismissed: () => of(dismiss_value),
        };
        spectator = createComponent({
            providers: [
                MockProvider(BookingFormService, {
                    form,
                    model,
                    setOptions: jest.fn(),
                    setView: jest.fn(),
                    resetForm: jest.fn(),
                } as any),
                MockProvider(SettingsService, {
                    get: jest.fn(() => undefined),
                } as any),
                MockProvider(ParkingService, {
                    user_details,
                } as any),
                MockProvider(MatBottomSheet, {
                    open: jest.fn(() => open_result),
                } as any),
                MockProvider(Router, { navigate: jest.fn() }),
            ],
        });
    });

    it('should notify the user and not open the confirm sheet when the form is invalid', () => {
        valid_flag = false;
        const sheet: any = spectator.inject(MatBottomSheet);

        spectator.component.viewConfirm();

        expect(common.notifyError).toHaveBeenCalledWith(
            expect.stringContaining('Some fields are invalid.'),
        );
        expect(sheet.open).not.toHaveBeenCalled();
    });

    it('should default the asset_id from the first selected resource before confirming', () => {
        model.update((m) => ({
            ...m,
            asset_id: '',
            resources: [{ id: 'space-9' }],
        }));

        spectator.component.viewConfirm();

        expect(model().asset_id).toBe('space-9');
    });

    it('should default the booking date when none is set before confirming', () => {
        model.update((m) => ({ ...m, date: 0 }));

        spectator.component.viewConfirm();

        expect(model().date).toBeGreaterThan(0);
    });

    it('should open the confirm sheet and enable its close button when the form is valid', () => {
        const sheet: any = spectator.inject(MatBottomSheet);

        spectator.component.viewConfirm();

        expect(sheet.open).toHaveBeenCalled();
        expect(open_result.instance.show_close.set).toHaveBeenCalledWith(true);
    });

    it('should navigate to the success step when the confirm sheet is dismissed with a value', () => {
        dismiss_value = true;
        const router: any = spectator.inject(Router);
        const state: any = spectator.inject(BookingFormService);

        spectator.component.viewConfirm();

        expect(router.navigate).toHaveBeenCalledWith([
            '/book',
            'parking',
            'success',
        ]);
        expect(state.setView).toHaveBeenCalledWith('success');
    });

    it('should not navigate when the confirm sheet is dismissed without a value', () => {
        dismiss_value = undefined;
        const router: any = spectator.inject(Router);

        spectator.component.viewConfirm();

        expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should reset the form via the state service when cleared', () => {
        const state: any = spectator.inject(BookingFormService);

        spectator.component.clearForm();

        expect(state.resetForm).toHaveBeenCalled();
    });

    it('should prefill the plate number from the parking user details on init', async () => {
        user_details.set({ email: 'me@test.com', plate_number: 'XYZ789' });

        await spectator.component.ngOnInit();

        expect(model().plate_number).toBe('XYZ789');
        expect(model().user).toEqual({ email: 'me@test.com', name: 'Me' });
    });

    it('should prefer the configured plate number setting over the user details', async () => {
        user_details.set({ email: 'me@test.com', plate_number: 'XYZ789' });
        const settings: any = spectator.inject(SettingsService);
        settings.get.mockImplementation((key: string) =>
            key === 'plate_number' ? 'SETTING1' : undefined,
        );

        await spectator.component.ngOnInit();

        expect(model().plate_number).toBe('SETTING1');
    });
});
