import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { Router } from '@angular/router';
import { MockProvider } from 'ng-mocks';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifyError: jest.fn(),
}));

import { BookingFormService } from '@placeos/bookings';
import { notifyError, settingSignal, SettingsService } from '@placeos/common';
import { LandingQuickBookComponent } from '../../app/landing/landing-quick-book.component';

describe('LandingQuickBookComponent', () => {
    let spectator: Spectator<LandingQuickBookComponent>;
    const createComponent = createComponentFactory({
        component: LandingQuickBookComponent,
        detectChanges: false,
        providers: [
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(Router, { navigate: jest.fn() }),
            MockProvider(BookingFormService, {
                newForm: jest.fn(),
                setOptions: jest.fn(),
                listAvailableResources: jest.fn(() => Promise.resolve([])),
                confirmPost: jest.fn(() => Promise.resolve({} as any)),
                resetForm: jest.fn(),
                model: Object.assign(jest.fn(() => ({})), {
                    update: jest.fn(),
                    set: jest.fn(),
                }),
            } as any),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        settingSignal<string[]>('features', []).set(['desks', 'parking']);
        spectator = createComponent();
    });

    it('exposes enabled features from settings', () => {
        expect(spectator.component.features()).toEqual(['desks', 'parking']);
    });

    it('ignores space bookings without touching the booking form', async () => {
        const form = spectator.inject(BookingFormService);
        await spectator.component.book('space');
        expect(form.newForm).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe('');
    });

    it('does nothing when a booking is already in progress', async () => {
        const form = spectator.inject(BookingFormService);
        spectator.component.loading.set('desk');
        await spectator.component.book('parking');
        expect(form.newForm).not.toHaveBeenCalled();
    });

    it('notifies and resets loading when no resources are available', async () => {
        const form = spectator.inject(BookingFormService);
        (form.listAvailableResources as jest.Mock).mockResolvedValue([]);
        await spectator.component.book('desk');
        expect(form.newForm).toHaveBeenCalledWith('desk');
        expect(form.setOptions).toHaveBeenCalledWith({ type: 'desk' });
        expect(notifyError).toHaveBeenCalledWith(
            'No desk available for the current building',
        );
        expect(form.confirmPost).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe('');
    });

    it('books the first available resource and navigates to success', async () => {
        const form = spectator.inject(BookingFormService);
        const router = spectator.inject(Router);
        const resource = { id: 'desk-1', name: 'Desk 1' };
        (form.listAvailableResources as jest.Mock).mockResolvedValue([
            resource,
        ]);
        await spectator.component.book('desk');
        expect(form.model.update).toHaveBeenCalled();
        const update_fn = (form.model.update as jest.Mock).mock.calls[0][0];
        expect(update_fn({ existing: true })).toEqual({
            existing: true,
            resources: [resource],
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
        });
        expect(form.confirmPost).toHaveBeenCalled();
        expect(router.navigate).toHaveBeenCalledWith([
            '/book',
            'desk',
            'success',
        ]);
        expect(form.resetForm).toHaveBeenCalled();
        expect(notifyError).not.toHaveBeenCalled();
    });

    it('resets the form without navigating when confirmation fails', async () => {
        const form = spectator.inject(BookingFormService);
        const router = spectator.inject(Router);
        (form.listAvailableResources as jest.Mock).mockResolvedValue([
            { id: 'desk-1', name: 'Desk 1' },
        ]);
        (form.confirmPost as jest.Mock).mockRejectedValue(new Error('nope'));
        await spectator.component.book('desk');
        expect(router.navigate).not.toHaveBeenCalled();
        expect(form.resetForm).toHaveBeenCalled();
    });
});
