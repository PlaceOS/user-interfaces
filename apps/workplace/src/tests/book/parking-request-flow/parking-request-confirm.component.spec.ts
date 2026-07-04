import { signal } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { ParkingRequestConfirmComponent } from '../../../app/book/parking-request-flow/parking-request-confirm.component';
import * as common from '@placeos/common';

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return {
        ...actual,
        notifyError: jest.fn(),
    };
});

describe('ParkingRequestConfirmComponent', () => {
    let spectator: Spectator<ParkingRequestConfirmComponent>;
    let model: ReturnType<typeof signal<Record<string, any>>>;
    let loading: ReturnType<typeof signal<boolean>>;
    let post_form: jest.Mock;
    let dismiss: jest.Mock;

    const createComponent = createComponentFactory({
        component: ParkingRequestConfirmComponent,
        detectChanges: false,
        providers: [
            MockProvider(BookingFormService, {} as any),
            MockProvider(OrganisationService, {} as any),
            MockProvider(SettingsService, {} as any),
            MockProvider(MatBottomSheetRef, {} as any),
        ],
    });

    beforeEach(() => {
        (common.notifyError as jest.Mock).mockClear();
        model = signal({
            title: 'Parking Request',
            date: Date.now(),
            duration: 60,
            all_day: false,
            vehicle_type: 'car',
            request_type: 'standard',
            zones: ['bld-1'],
            space_restrictions: 'oversized',
            extra_space_restrictions: [],
        });
        loading = signal(false);
        post_form = jest.fn(() => Promise.resolve({ id: 'req-1' }));
        dismiss = jest.fn();
        spectator = createComponent({
            providers: [
                MockProvider(BookingFormService, {
                    model,
                    loading,
                    postForm: post_form,
                } as any),
                MockProvider(OrganisationService, {
                    buildings: [
                        { id: 'bld-1', name: 'HQ', display_name: 'Headquarters' },
                    ],
                } as any),
                MockProvider(SettingsService, {
                    time_format: 'h:mm a',
                } as any),
                { provide: MatBottomSheetRef, useValue: { dismiss } },
            ],
        });
    });

    it('should dismiss with a truthy value when the request is posted successfully', async () => {
        await spectator.component.postForm();

        expect(post_form).toHaveBeenCalled();
        expect(dismiss).toHaveBeenCalledWith(true);
        expect(common.notifyError).not.toHaveBeenCalled();
    });

    it('should not dismiss when postForm resolves without a booking', async () => {
        post_form.mockResolvedValueOnce(undefined);

        await spectator.component.postForm();

        expect(dismiss).not.toHaveBeenCalled();
    });

    it('should notify the user and not dismiss when submitting the request fails', async () => {
        post_form.mockRejectedValueOnce('boom');

        await spectator.component.postForm();

        expect(common.notifyError).toHaveBeenCalledWith(
            expect.stringContaining('Unable to submit parking request.'),
        );
        expect(dismiss).not.toHaveBeenCalled();
    });

    it('should resolve the location from the booking zones', () => {
        expect(spectator.component.location).toBe('Headquarters');
    });

    it('should map a known space restriction id to its configured label', () => {
        spectator.component.space_restriction_options.set([
            { id: 'oversized', name: 'Oversized Vehicle' },
        ]);
        expect(spectator.component.space_restriction_label).toBe(
            'Oversized Vehicle',
        );
    });

    it('should fall back to the raw value for an unknown space restriction id', () => {
        spectator.component.space_restriction_options.set([]);
        model.update((m) => ({ ...m, space_restrictions: 'unknown-id' }));
        expect(spectator.component.space_restriction_label).toBe('unknown-id');
    });

    it('should use a generic label when the space restriction is not a string', () => {
        model.update((m) => ({ ...m, space_restrictions: true }));
        expect(spectator.component.space_restriction_label).toBe(
            'BOOKINGS.PARKING_SPACE_RESTRICTIONS',
        );
    });

    it('should return an empty label when there is no space restriction', () => {
        model.update((m) => ({ ...m, space_restrictions: null }));
        expect(spectator.component.space_restriction_label).toBe('');
    });

    it('should map extra space restriction ids to their configured labels', () => {
        spectator.component.extra_space_restriction_options.set([
            { id: 'ev', name: 'EV Charging' },
            { id: 'accessible', name: 'Accessible' },
        ]);
        model.update((m) => ({
            ...m,
            extra_space_restrictions: ['ev', 'missing'],
        }));

        expect(spectator.component.extra_space_restriction_labels).toEqual([
            'EV Charging',
            'missing',
        ]);
    });

    it('should return no extra labels when none are selected', () => {
        model.update((m) => ({ ...m, extra_space_restrictions: [] }));
        expect(spectator.component.extra_space_restriction_labels).toEqual([]);
    });
});
