import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import {
    OrganisationService,
    SETTING_KEYS,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { MockProvider } from 'ng-mocks';
import { LandingStateService } from '../../app/landing/landing-state.service';
import { LandingFavouritesNewComponent } from '../../app/landing-new/landing-favourites-new.component';

describe('LandingFavouritesNewComponent', () => {
    let spectator: Spectator<LandingFavouritesNewComponent>;
    const booking_model = signal<any>({});
    const createComponent = createComponentFactory({
        component: LandingFavouritesNewComponent,
        detectChanges: false,
        providers: [
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' },
                active_building: signal({ id: 'bld-1' }),
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn(),
                saveUserSetting: vi.fn(),
            }),
            MockProvider(LandingStateService, {
                space_list: signal([
                    { id: 'space-1', name: 'Room 1', email: 'r1@x', zones: [] },
                ]) as any,
                loading_spaces: signal(false),
            }),
            MockProvider(EventFormService, {
                newForm: vi.fn(),
                newFormWith: vi.fn(),
                model: signal<any>({}),
            } as any),
            MockProvider(BookingFormService, {
                loadResourceList: vi.fn((type: string) =>
                    Promise.resolve(
                        type === 'parking-spaces'
                            ? [{ id: 'park-123', name: 'Parking 123', zones: [] }]
                            : [],
                    ),
                ),
                newForm: vi.fn(),
                setOptions: vi.fn(),
                model: booking_model,
            } as any),
            MockProvider(Router, { navigate: vi.fn() }),
        ],
    });

    const features = settingSignal<string[]>('features', []);
    const fav_rooms = settingSignal<string[]>(
        SETTING_KEYS.FAVORITE_ROOMS,
        [],
        true,
    );
    const fav_parking = settingSignal<string[]>(
        SETTING_KEYS.FAVORITE_PARKING_SPACES,
        [],
        true,
    );

    beforeEach(() => {
        vi.clearAllMocks();
        booking_model.set({});
        features.set(['spaces', 'desks', 'parking', 'lockers']);
        fav_rooms.set([]);
        fav_parking.set([]);
        spectator = createComponent();
    });

    it('should list favourite rooms on a first visit and only with the spaces feature', () => {
        // The room list is from the landing state, not from the event form
        fav_rooms.set(['space-1']);
        spectator.detectChanges();
        expect(spectator.component.favourites().map((_) => _.id)).toEqual([
            'space-1',
        ]);

        features.set(['desks']);
        expect(spectator.component.favourites()).toEqual([]);
    });

    it('should load a resource list only for an enabled feature with favourites', async () => {
        const load = spectator.inject(BookingFormService).loadResourceList;
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        expect(load).not.toHaveBeenCalled();

        fav_parking.set(['park-123']);
        features.set(['parking']);
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        expect(load).toHaveBeenCalledTimes(1);
        expect(load).toHaveBeenCalledWith('parking-spaces');

        // More favourites of the same type use the list that is loaded
        fav_parking.set(['park-123', 'park-456']);
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        expect(load).toHaveBeenCalledTimes(1);
    });

    it('should navigate desk favourites using asset_id query params', () => {
        const router = spectator.inject(Router);
        const settings = spectator.inject(SettingsService);
        const booking_form = spectator.inject(BookingFormService);
        (settings.get as any).mockReturnValue(true);

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
        expect(booking_model()).toEqual({});
    });

    // No wait before the checks: a prefill on a timer is lost when the form
    // page loads after the timer.
    it('should save a favourite room with the meeting form before it opens the form', () => {
        const router = spectator.inject(Router);
        const settings = spectator.inject(SettingsService);
        const event_form = spectator.inject(EventFormService);
        (settings.get as any).mockReturnValue(true);
        spectator.detectChanges();

        spectator.component.bookResource({
            id: 'space-1',
            name: 'Room 1',
            type: 'room',
        } as any);

        expect(event_form.newFormWith).toHaveBeenCalledWith({
            resources: [expect.objectContaining({ id: 'space-1' })],
        });
        expect(router.navigate).toHaveBeenCalledWith(['/book', 'meeting']);
    });

    it('should still preload non-desk favourites into the booking form', async () => {
        const router = spectator.inject(Router);
        const settings = spectator.inject(SettingsService);
        const booking_form = spectator.inject(BookingFormService);
        (settings.get as any).mockReturnValue(true);
        const parking = {
            id: 'park-123',
            name: 'Parking 123',
            zones: [],
            type: 'parking',
        } as any;

        // Flush the parking resource loader so the full list is available
        fav_parking.set(['park-123']);
        spectator.detectChanges();
        await new Promise((resolve) => setTimeout(resolve, 0));
        spectator.detectChanges();

        spectator.component.bookResource(parking);

        expect(router.navigate).toHaveBeenCalledWith(['/book', 'parking']);
        expect(booking_form.newForm).toHaveBeenCalledWith('parking');
        expect(booking_form.setOptions).toHaveBeenCalledWith({
            type: 'parking',
        });
        expect(booking_model()).toEqual(
            expect.objectContaining({
                resources: [{ id: 'park-123', name: 'Parking 123', zones: [] }],
                asset_id: 'park-123',
                booking_type: 'parking',
            }),
        );
    });
});
