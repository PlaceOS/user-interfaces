import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { BookingFormService } from '@placeos/bookings';
import {
    setNotifyOutlet,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { LandingQuickBookComponent } from '../../app/landing/landing-quick-book.component';

describe('LandingQuickBookComponent', () => {
    let spectator: Spectator<LandingQuickBookComponent>;
    let notify_open: ReturnType<typeof vi.fn>;
    const createComponent = createComponentFactory({
        component: LandingQuickBookComponent,
        detectChanges: false,
        providers: [
            MockProvider(SettingsService, { get: vi.fn() }),
            MockProvider(Router, { navigate: vi.fn() }),
            MockProvider(BookingFormService, {
                newForm: vi.fn(),
                setOptions: vi.fn(),
                listAvailableResources: vi.fn(() => Promise.resolve([])),
                confirmPost: vi.fn(() => Promise.resolve({} as any)),
                resetForm: vi.fn(),
                model: Object.assign(
                    vi.fn(() => ({})),
                    {
                        update: vi.fn(),
                        set: vi.fn(),
                    },
                ),
            } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        settingSignal<string[]>('features', []).set(['desks', 'parking']);
        spectator = createComponent();
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
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
        (form.listAvailableResources as any).mockResolvedValue([]);
        await spectator.component.book('desk');
        expect(form.newForm).toHaveBeenCalledWith('desk');
        expect(form.setOptions).toHaveBeenCalledWith({ type: 'desk' });
        expect(notify_open).toHaveBeenCalled();
        expect(notify_open.mock.calls[0][0]).toBe(
            'No desk available for the current building',
        );
        expect(form.confirmPost).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe('');
    });

    it('books the first available resource and navigates to success', async () => {
        const form = spectator.inject(BookingFormService);
        const router = spectator.inject(Router);
        const resource = { id: 'desk-1', name: 'Desk 1' };
        (form.listAvailableResources as any).mockResolvedValue([resource]);
        await spectator.component.book('desk');
        expect(form.model.update).toHaveBeenCalled();
        const update_fn = (form.model.update as any).mock.calls[0][0];
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
        expect(notify_open).not.toHaveBeenCalled();
    });

    it('reports availability failures and allows another attempt', async () => {
        const form = spectator.inject(BookingFormService);
        vi.mocked(form.listAvailableResources).mockRejectedValueOnce(
            new Error('unavailable'),
        );

        await spectator.component.book('desk');

        expect(notify_open.mock.calls[0][0]).toContain(
            'Please try again or use Bookings',
        );
        expect(spectator.component.loading()).toBe('');
        expect(form.resetForm).toHaveBeenCalled();
        expect(form.confirmPost).not.toHaveBeenCalled();
        await spectator.component.book('desk');
        expect(form.listAvailableResources).toHaveBeenCalledTimes(2);
    });

    it('times out availability without posting a late booking', async () => {
        vi.useFakeTimers();
        try {
            const form = spectator.inject(BookingFormService);
            let resolve_resources: (
                resources: Awaited<
                    ReturnType<BookingFormService['listAvailableResources']>
                >,
            ) => void;
            vi.mocked(form.listAvailableResources).mockReturnValueOnce(
                new Promise((resolve) => {
                    resolve_resources = resolve;
                }),
            );
            const request = spectator.component.book('desk');
            await vi.advanceTimersByTimeAsync(15_000);
            await request;
            expect(spectator.component.loading()).toBe('');
            expect(notify_open).toHaveBeenCalled();

            resolve_resources([]);
            await Promise.resolve();
            expect(form.confirmPost).not.toHaveBeenCalled();
        } finally {
            vi.useRealTimers();
        }
    });

    it('blocks another quick booking until confirmation finishes', async () => {
        const form = spectator.inject(BookingFormService);
        let cancel: (reason: unknown) => void;
        vi.mocked(form.listAvailableResources).mockResolvedValueOnce([
            { id: 'desk-1', name: 'Desk 1', bookable: true, features: [] },
        ]);
        vi.mocked(form.confirmPost).mockReturnValueOnce(
            new Promise((_, reject) => {
                cancel = reject;
            }),
        );
        const request = spectator.component.book('desk');
        await vi.waitFor(() => expect(form.confirmPost).toHaveBeenCalled());
        expect(spectator.component.loading()).toBe('desk');
        await spectator.component.book('parking');
        expect(form.newForm).toHaveBeenCalledTimes(1);
        cancel('User cancelled');
        await request;
        expect(spectator.component.loading()).toBe('');
        expect(notify_open).not.toHaveBeenCalled();
    });

    it('resets the form without navigating when confirmation fails', async () => {
        const form = spectator.inject(BookingFormService);
        const router = spectator.inject(Router);
        (form.listAvailableResources as any).mockResolvedValue([
            { id: 'desk-1', name: 'Desk 1', bookable: true, features: [] },
        ]);
        (form.confirmPost as any).mockRejectedValue(new Error('nope'));
        await spectator.component.book('desk');
        expect(router.navigate).not.toHaveBeenCalled();
        expect(form.resetForm).toHaveBeenCalled();
    });
});
