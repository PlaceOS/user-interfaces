import { signal } from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BookingFormService, ParkingService } from '@placeos/bookings';
import {
    SettingsService,
    setCurrentUser,
    setNotifyOutlet,
    StaffUser,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { ParkingFlowFormComponent } from '../../../app/book/parking-flow/parking-flow-form.component';

describe('ParkingFlowFormComponent', () => {
    let spectator: Spectator<ParkingFlowFormComponent>;
    let notify_open: any;
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
            // This spec drives the component's methods directly and never
            // asserts on the DOM. Left on, zoneless auto-detect renders the
            // signal-forms `[formField]` template against the hand-mocked form
            // (whose fields aren't callable), throwing `this.field(...) is not
            // a function` asynchronously. Disable it so no template renders.
            { provide: ComponentFixtureAutoDetect, useValue: false },
            MockProvider(BookingFormService, {} as any),
            MockProvider(SettingsService, {} as any),
            MockProvider(ParkingService, {} as any),
            MockProvider(MatBottomSheet, {} as any),
            MockProvider(Router, {} as any),
        ],
    });

    beforeEach(() => {
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        setCurrentUser(
            new StaffUser({
                id: 'me',
                email: 'me@test.com',
                name: 'Me',
            } as any),
        );
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
            instance: { show_close: { set: vi.fn() } },
            afterDismissed: () => of(dismiss_value),
        };
        spectator = createComponent({
            providers: [
                MockProvider(BookingFormService, {
                    form,
                    model,
                    setOptions: vi.fn(),
                    setView: vi.fn(),
                    resetForm: vi.fn(),
                } as any),
                MockProvider(SettingsService, {
                    get: vi.fn(() => undefined),
                } as any),
                MockProvider(ParkingService, {
                    user_details,
                } as any),
                MockProvider(MatBottomSheet, {
                    open: vi.fn(() => open_result),
                } as any),
                MockProvider(Router, { navigate: vi.fn() }),
            ],
        });
    });

    afterEach(() => setNotifyOutlet(null as any, true));

    it('should notify the user and not open the confirm sheet when the form is invalid', () => {
        valid_flag = false;
        const sheet: any = spectator.inject(MatBottomSheet);

        spectator.component.viewConfirm();

        expect(
            notify_open.mock.calls.some(
                (c) =>
                    typeof c[0] === 'string' &&
                    c[0].includes('Some fields are invalid.'),
            ),
        ).toBe(true);
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
        expect(model().user.email).toBe('me@test.com');
        expect(model().user.name).toBe('Me');
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
