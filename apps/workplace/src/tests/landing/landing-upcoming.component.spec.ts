import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { BookingCardComponent, BookingFormService } from '@placeos/bookings';
import { Booking, SettingsService } from '@placeos/common';
import { EventCardComponent, EventFormService } from '@placeos/events';
import { MockComponent, MockProvider } from 'ng-mocks';
import { LandingStateService } from '../../app/landing/landing-state.service';
import { LandingUpcomingComponent } from '../../app/landing/landing-upcoming.component';

describe('LandingUpcomingComponent', () => {
    let spectator: SpectatorRouting<LandingUpcomingComponent>;
    const upcoming_events = signal<Booking[]>([]);
    const createComponent = createRoutingFactory({
        component: LandingUpcomingComponent,
        declarations: [
            MockComponent(EventCardComponent),
            MockComponent(BookingCardComponent),
        ],
        providers: [
            { provide: MatDialog, useValue: { open: vi.fn() } },
            {
                provide: LandingStateService,
                useValue: {
                    upcoming_events,
                    refreshUpcomingEvents: vi.fn(),
                    pollUpcomingEvents: vi.fn(),
                    stopPollingUpcomingEvents: vi.fn(),
                },
            },
            { provide: SettingsService, useValue: { get: vi.fn() } },
            MockProvider(EventFormService, { newForm: vi.fn() }),
            MockProvider(BookingFormService, {
                newForm: vi.fn(),
                model: { update: vi.fn() },
            } as any),
            MockProvider(Router, { navigate: vi.fn() }),
        ],
    });

    beforeEach(() => {
        upcoming_events.set([]);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should refresh upcoming bookings on request', () => {
        const state = spectator.inject(LandingStateService);

        spectator.component.refresh_fn();

        expect(state.refreshUpcomingEvents).toHaveBeenCalled();
    });

    it('should not patch resources when editing visitor bookings', () => {
        vi.useFakeTimers();
        const booking_form = spectator.inject(BookingFormService);
        const booking = new Booking({
            booking_type: 'visitor',
            type: 'visitor',
            asset_id: 'visitor@example.com',
            asset_name: 'Visitor',
        } as any);

        spectator.component.editBooking(booking);
        vi.runAllTimers();

        expect(booking_form.newForm).toHaveBeenCalledWith('visitor', booking);
        expect(booking_form.model.update).not.toHaveBeenCalled();
        vi.useRealTimers();
    });

    it('should show a prompt when the upcoming list is truncated', () => {
        upcoming_events.set(
            Array.from(
                { length: 6 },
                (_, index) =>
                    new Booking({
                        id: `booking-${index}`,
                        booking_type: 'desk',
                        type: 'desk',
                    } as any),
            ),
        );
        spectator.detectChanges();

        expect('[name="upcoming-more-bookings"]').toExist();
    });
});
