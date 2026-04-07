import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { BookingCardComponent, BookingFormService } from '@placeos/bookings';
import { Booking, SettingsService } from '@placeos/common';
import { EventCardComponent, EventFormService } from '@placeos/events';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { LandingStateService } from '../../app/landing/landing-state.service';
import { LandingUpcomingComponent } from '../../app/landing/landing-upcoming.component';

describe('LandingUpcomingComponent', () => {
    let spectator: SpectatorRouting<LandingUpcomingComponent>;
    const createComponent = createRoutingFactory({
        component: LandingUpcomingComponent,
        declarations: [
            MockComponent(EventCardComponent),
            MockComponent(BookingCardComponent),
        ],
        providers: [
            { provide: MatDialog, useValue: { open: jest.fn() } },
            {
                provide: LandingStateService,
                useValue: {
                    upcoming_events: new BehaviorSubject([]),
                    refreshUpcomingEvents: jest.fn(),
                    pollUpcomingEvents: jest.fn(),
                    stopPollingUpcomingEvents: jest.fn(),
                },
            },
            { provide: SettingsService, useValue: { get: jest.fn() } },
            MockProvider(EventFormService, { newForm: jest.fn() }),
            MockProvider(BookingFormService, {
                newForm: jest.fn(),
                form: { patchValue: jest.fn() },
            } as any),
            MockProvider(Router, { navigate: jest.fn() }),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should not patch resources when editing visitor bookings', () => {
        jest.useFakeTimers();
        const booking_form = spectator.inject(BookingFormService);
        const booking = new Booking({
            booking_type: 'visitor',
            type: 'visitor',
            asset_id: 'visitor@example.com',
            asset_name: 'Visitor',
        } as any);

        spectator.component.editBooking(booking);
        jest.runAllTimers();

        expect(booking_form.newForm).toHaveBeenCalledWith('visitor', booking);
        expect(booking_form.form.patchValue).not.toHaveBeenCalled();
        jest.useRealTimers();
    });
});
