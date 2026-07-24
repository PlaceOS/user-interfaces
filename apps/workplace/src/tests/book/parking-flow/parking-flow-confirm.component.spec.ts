import { signal } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import {
    OrganisationService,
    SettingsService,
    setNotifyOutlet,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { NewParkingFlowConfirmComponent } from '../../../app/book/parking-flow/parking-flow-confirm.component';

describe('NewParkingFlowConfirmComponent', () => {
    let spectator: Spectator<NewParkingFlowConfirmComponent>;
    let notify_open: any;
    let model: ReturnType<typeof signal<Record<string, any>>>;
    let loading: ReturnType<typeof signal<boolean>>;
    let post_form: any;
    let dismiss: any;

    const createComponent = createComponentFactory({
        component: NewParkingFlowConfirmComponent,
        detectChanges: false,
        providers: [
            MockProvider(BookingFormService, {} as any),
            MockProvider(OrganisationService, {} as any),
            MockProvider(SettingsService, {} as any),
            MockProvider(MatBottomSheetRef, {} as any),
        ],
    });

    beforeEach(() => {
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        model = signal({
            title: 'My Parking',
            date: Date.now(),
            duration: 60,
            all_day: false,
            booking_asset: {
                id: 'space-1',
                name: 'Bay 1',
                features: ['covered'],
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
            },
        });
        loading = signal(false);
        post_form = vi.fn(() => Promise.resolve({ id: 'booking-1' }));
        dismiss = vi.fn();
        spectator = createComponent({
            providers: [
                MockProvider(BookingFormService, {
                    model,
                    loading,
                    postForm: post_form,
                } as any),
                MockProvider(OrganisationService, {
                    buildings: [
                        {
                            id: 'bld-1',
                            name: 'HQ',
                            display_name: 'Headquarters',
                            address: '1 Main St',
                        },
                    ],
                    levels: [
                        {
                            id: 'lvl-1',
                            name: 'L1',
                            display_name: 'Level 1',
                        },
                    ],
                } as any),
                MockProvider(SettingsService, {
                    time_format: 'h:mm a',
                } as any),
                { provide: MatBottomSheetRef, useValue: { dismiss } },
            ],
        });
    });

    afterEach(() => setNotifyOutlet(null as any, true));

    it('should dismiss with a truthy value when the booking is posted successfully', async () => {
        await spectator.component.postForm();

        expect(post_form).toHaveBeenCalled();
        expect(dismiss).toHaveBeenCalledWith(true);
        expect(notify_open).not.toHaveBeenCalled();
    });

    it('should not dismiss when postForm resolves without a booking', async () => {
        post_form.mockResolvedValueOnce(undefined);

        await spectator.component.postForm();

        expect(dismiss).not.toHaveBeenCalled();
    });

    it('should notify the user and not dismiss when posting the booking fails', async () => {
        post_form.mockRejectedValueOnce('boom');

        await spectator.component.postForm();

        expect(
            notify_open.mock.calls.some(
                (c) =>
                    typeof c[0] === 'string' &&
                    c[0].includes('Unable to complete booking.'),
            ),
        ).toBe(true);
        expect(dismiss).not.toHaveBeenCalled();
    });

    it('should pass the value through when dismissing directly', () => {
        spectator.component.dismiss(false);
        expect(dismiss).toHaveBeenCalledWith(false);
    });

    it('should resolve the booking location from the org buildings and levels', () => {
        expect(spectator.component.location).toBe('Level 1, 1 Main St');
    });

    it('should expose the current booking model as booking', () => {
        expect(spectator.component.booking.title).toBe('My Parking');
        expect(spectator.component.booking_asset.id).toBe('space-1');
    });
});
