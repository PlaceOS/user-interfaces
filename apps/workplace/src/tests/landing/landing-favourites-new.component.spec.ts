import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { ExploreSpacesService } from '@placeos/explore';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { LandingFavouritesNewComponent } from '../../app/landing-new/landing-favourites-new.component';

describe('LandingFavouritesNewComponent', () => {
    let spectator: Spectator<LandingFavouritesNewComponent>;
    const createComponent = createComponentFactory({
        component: LandingFavouritesNewComponent,
        detectChanges: false,
        componentProviders: [MockProvider(ExploreSpacesService)],
        providers: [
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' },
                active_building: of({ id: 'bld-1' }),
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn(),
                saveUserSetting: jest.fn(),
            }),
            MockProvider(EventFormService, {
                spaces$: of([]),
                newForm: jest.fn(),
                form: { patchValue: jest.fn() },
            } as any),
            MockProvider(BookingFormService, {
                loadResourceList: jest.fn((type: string) =>
                    of(
                        type === 'parking-spaces'
                            ? [{ id: 'park-123', name: 'Parking 123', zones: [] }]
                            : [],
                    ),
                ),
                newForm: jest.fn(),
                setOptions: jest.fn(),
                form: { patchValue: jest.fn() },
            } as any),
            MockProvider(Router, { navigate: jest.fn() }),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should navigate desk favourites using asset_id query params', () => {
        const router = spectator.inject(Router);
        const settings = spectator.inject(SettingsService);
        const booking_form = spectator.inject(BookingFormService);
        (settings.get as jest.Mock).mockReturnValue(true);

        spectator.component.bookResource({
            id: 'desk-123',
            name: 'Desk 123',
            type: 'desk',
            zones: [],
        });

        expect(router.navigate).toHaveBeenCalledWith(['/book', 'desk'], {
            queryParams: { asset_id: 'desk-123' },
        });
        expect(booking_form.newForm).not.toHaveBeenCalled();
        expect(booking_form.setOptions).not.toHaveBeenCalled();
        expect(booking_form.form.patchValue).not.toHaveBeenCalled();
    });

    it('should still preload non-desk favourites into the booking form', () => {
        const router = spectator.inject(Router);
        const settings = spectator.inject(SettingsService);
        const booking_form = spectator.inject(BookingFormService);
        (settings.get as jest.Mock).mockReturnValue(true);
        const parking = {
            id: 'park-123',
            name: 'Parking 123',
            zones: [],
            type: 'parking',
        } as any;

        spectator.component.bookResource(parking);

        expect(router.navigate).toHaveBeenCalledWith(['/book', 'parking']);
        expect(booking_form.newForm).toHaveBeenCalledWith('parking');
        expect(booking_form.setOptions).toHaveBeenCalledWith({
            type: 'parking',
        });
        expect(booking_form.form.patchValue).toHaveBeenCalledWith({
            resources: [{ id: 'park-123', name: 'Parking 123', zones: [] }],
            asset_id: 'park-123',
            booking_type: 'parking',
        });
    });
});
