import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { EventFormService, SpacePipe } from '@placeos/events';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { LandingFavouritesComponent } from '../../app/landing/landing-favourites.component';

describe('LandingFavouritesComponent', () => {
    let spectator: Spectator<LandingFavouritesComponent>;
    const createComponent = createComponentFactory({
        component: LandingFavouritesComponent,
        detectChanges: false,
        providers: [
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' },
                levelWithID: vi.fn(),
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn(),
                saveUserSetting: vi.fn(),
            }),
            MockProvider(EventFormService),
            MockProvider(BookingFormService, {
                loadResourceList: vi.fn(() => of([])),
                loadParkingResources: vi.fn(() => of([])),
                newForm: vi.fn(),
                setOptions: vi.fn(),
                model: Object.assign(vi.fn(() => ({})), {
                    update: vi.fn(),
                    set: vi.fn(),
                }),
            } as any),
            MockProvider(Router, { navigate: vi.fn() }),
            MockProvider(SpacePipe),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should navigate desk favourites using asset_id query params', () => {
        vi.useFakeTimers();
        const router = spectator.inject(Router);
        const settings = spectator.inject(SettingsService);
        const booking_form = spectator.inject(BookingFormService);
        (settings.get as any).mockReturnValue(false);

        spectator.component.newBooking('desk', { id: 'desk-123' } as any);
        vi.runAllTimers();

        expect(router.navigate).toHaveBeenCalledWith(['/book', 'desks'], {
            queryParams: { asset_id: 'desk-123' },
        });
        expect(booking_form.newForm).not.toHaveBeenCalled();
        expect(booking_form.setOptions).not.toHaveBeenCalled();
        expect(booking_form.model.update).not.toHaveBeenCalled();
        vi.useRealTimers();
    });

    it('should still preload non-desk favourites into the booking form', () => {
        vi.useFakeTimers();
        const router = spectator.inject(Router);
        const settings = spectator.inject(SettingsService);
        const booking_form = spectator.inject(BookingFormService);
        (settings.get as any).mockReturnValue(false);
        const item = { id: 'park-123' } as any;

        spectator.component.newBooking('parking', item);
        vi.runAllTimers();

        expect(router.navigate).toHaveBeenCalledWith(['/book', 'parking'], {
            queryParams: {},
        });
        expect(booking_form.newForm).toHaveBeenCalledWith('parking');
        expect(booking_form.setOptions).toHaveBeenCalledWith({
            type: 'parking',
        });
        expect(booking_form.model.update).toHaveBeenCalled();
        const update_fn = (booking_form.model.update as any).mock
            .calls[0][0];
        expect(update_fn({})).toEqual({
            resources: [item],
            asset_id: 'park-123',
            booking_type: 'parking',
        });
        vi.useRealTimers();
    });
});
