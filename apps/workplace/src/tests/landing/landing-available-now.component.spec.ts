import { signal } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { MockProvider } from 'ng-mocks';
import { LandingStateService } from '../../app/landing/landing-state.service';
import { LandingAvailableNowComponent } from '../../app/landing-new/landing-available-now.component';

describe('LandingAvailableNowComponent', () => {
    let spectator: SpectatorRouting<LandingAvailableNowComponent>;
    const booking_form = {
        available_resources: signal([]),
        loading: signal(''),
        model: signal<any>({}),
        setOptions: jest.fn(),
    };
    const event_form = {
        available_spaces: signal([]),
        loading: signal(''),
        model: signal<any>({}),
    };
    const settings_service = {
        signal: jest.fn((_: string, default_value?: any) =>
            signal(default_value ?? []),
        ),
    };
    const createComponent = createRoutingFactory({
        component: LandingAvailableNowComponent,
        detectChanges: false,
        imports: [NoopAnimationsModule],
        providers: [
            MockProvider(LandingStateService, {
                level_occupancy: signal([]),
            }),
            MockProvider(BookingFormService, booking_form as any),
            MockProvider(EventFormService, event_form as any),
            MockProvider(OrganisationService, {
                levelWithID: jest.fn(),
                buildings: [],
            } as any),
            {
                provide: SettingsService,
                useValue: settings_service,
            },
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        booking_form.model.set({});
        event_form.model.set({});
    });

    it('should restore the availability query window on init', () => {
        spectator = createComponent();
        spectator.detectChanges();

        expect(booking_form.setOptions).toHaveBeenCalledWith({ type: 'desk' });
        expect(booking_form.model()).toEqual(
            expect.objectContaining({
                date: expect.any(Number),
                duration: 60,
            }),
        );
        expect(event_form.model()).toEqual(
            expect.objectContaining({
                date: expect.any(Number),
                duration: 60,
            }),
        );
    });

    it('should preserve existing availability windows', () => {
        booking_form.model.set({ date: 1, duration: 30 });
        event_form.model.set({ date: 2, duration: 45 });
        spectator = createComponent();

        spectator.detectChanges();

        expect(booking_form.setOptions).toHaveBeenCalledWith({ type: 'desk' });
        expect(booking_form.model()).toEqual({ date: 1, duration: 30 });
        expect(event_form.model()).toEqual({ date: 2, duration: 45 });
    });
});
