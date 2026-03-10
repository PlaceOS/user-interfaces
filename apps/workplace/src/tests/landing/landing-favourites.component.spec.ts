import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { Router } from '@angular/router';
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
                levelWithID: jest.fn(),
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn(),
                saveUserSetting: jest.fn(),
            }),
            MockProvider(EventFormService),
            MockProvider(BookingFormService, {
                loadResourceList: jest.fn(() => of([])),
                loadParkingResources: jest.fn(() => of([])),
                newForm: jest.fn(),
                setOptions: jest.fn(),
                form: { patchValue: jest.fn() },
            } as any),
            MockProvider(Router, { navigate: jest.fn() }),
            MockProvider(SpacePipe),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should navigate desk favourites using asset_id query params', () => {
        jest.useFakeTimers();
        const router = spectator.inject(Router);
        const settings = spectator.inject(SettingsService);
        const booking_form = spectator.inject(BookingFormService);
        (settings.get as jest.Mock).mockReturnValue(false);

        spectator.component.newBooking('desk', { id: 'desk-123' } as any);
        jest.runAllTimers();

        expect(router.navigate).toHaveBeenCalledWith(
            ['/book', 'desks'],
            { queryParams: { asset_id: 'desk-123' } },
        );
        expect(booking_form.newForm).not.toHaveBeenCalled();
        expect(booking_form.setOptions).not.toHaveBeenCalled();
        expect(booking_form.form.patchValue).not.toHaveBeenCalled();
        jest.useRealTimers();
    });

    it('should still preload non-desk favourites into the booking form', () => {
        jest.useFakeTimers();
        const router = spectator.inject(Router);
        const settings = spectator.inject(SettingsService);
        const booking_form = spectator.inject(BookingFormService);
        (settings.get as jest.Mock).mockReturnValue(false);
        const item = { id: 'park-123' } as any;

        spectator.component.newBooking('parking', item);
        jest.runAllTimers();

        expect(router.navigate).toHaveBeenCalledWith(
            ['/book', 'parking'],
            { queryParams: {} },
        );
        expect(booking_form.newForm).toHaveBeenCalledWith('parking');
        expect(booking_form.setOptions).toHaveBeenCalledWith({
            type: 'parking',
        });
        expect(booking_form.form.patchValue).toHaveBeenCalledWith({
            resources: [item],
            asset_id: 'park-123',
            booking_type: 'parking',
        });
        jest.useRealTimers();
    });
});
