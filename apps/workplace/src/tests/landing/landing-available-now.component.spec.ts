import { signal } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { LandingStateService } from '../../app/landing/landing-state.service';
import { LandingAvailableNowComponent } from '../../app/landing-new/landing-available-now.component';

describe('LandingAvailableNowComponent', () => {
    let spectator: SpectatorRouting<LandingAvailableNowComponent>;
    const booking_form = {
        available_resources: of([]),
        form: {
            getRawValue: jest.fn(),
            patchValue: jest.fn(),
        },
        setOptions: jest.fn(),
    };
    const event_form = {
        available_spaces: of([]),
        form: {
            getRawValue: jest.fn(),
            patchValue: jest.fn(),
        },
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
                level_occupancy: of([]),
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
        booking_form.form.getRawValue.mockReturnValue({});
        event_form.form.getRawValue.mockReturnValue({});
    });

    it('should restore the availability query window on init', () => {
        spectator = createComponent();
        spectator.detectChanges();

        expect(booking_form.setOptions).toHaveBeenCalledWith({ type: 'desk' });
        expect(booking_form.form.patchValue).toHaveBeenCalledWith({
            date: expect.any(Number),
            duration: 60,
        });
        expect(event_form.form.patchValue).toHaveBeenCalledWith({
            date: expect.any(Number),
            duration: 60,
        });
    });

    it('should preserve existing availability windows', () => {
        booking_form.form.getRawValue.mockReturnValue({
            date: 1,
            duration: 30,
        });
        event_form.form.getRawValue.mockReturnValue({
            date: 2,
            duration: 45,
        });
        spectator = createComponent();

        spectator.detectChanges();

        expect(booking_form.setOptions).toHaveBeenCalledWith({ type: 'desk' });
        expect(booking_form.form.patchValue).not.toHaveBeenCalled();
        expect(event_form.form.patchValue).not.toHaveBeenCalled();
    });
});
