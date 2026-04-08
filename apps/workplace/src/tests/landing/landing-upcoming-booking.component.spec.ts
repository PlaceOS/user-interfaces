import { MatDialog } from '@angular/material/dialog';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { BookingDetailsModalComponent } from '@placeos/bookings';
import { Booking, CalendarEvent, OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { LandingUpcomingBookingComponent } from '../../app/landing-new/landing-upcoming-booking.component';
import { LandingStateService } from '../../app/landing/landing-state.service';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';

describe('LandingUpcomingBookingComponent', () => {
    let spectator: SpectatorRouting<LandingUpcomingBookingComponent>;
    const upcoming_events = new BehaviorSubject([
        new Booking({
            id: 'booking-1',
            booking_type: 'desk',
            type: 'desk',
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
            description: 'Desk Booking',
            date: Date.now(),
            duration: 60,
            status: 'approved',
        } as any),
    ]);
    const refreshUpcomingEvents = jest.fn();
    const dialog = {
        open: jest.fn(),
    };
    const createComponent = createRoutingFactory({
        component: LandingUpcomingBookingComponent,
        providers: [
            {
                provide: MatDialog,
                useValue: dialog,
            },
            {
                provide: LandingStateService,
                useValue: {
                    upcoming_events,
                    refreshUpcomingEvents,
                },
            },
            {
                provide: ScheduleStateService,
                useValue: {
                    edit: jest.fn(),
                    editBooking: jest.fn(),
                    remove: jest.fn(),
                    end: jest.fn(),
                },
            },
            MockProvider(OrganisationService, {
                levelWithID: jest.fn(),
                buildings: [],
            } as any),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        upcoming_events.next([
            new Booking({
                id: 'booking-1',
                booking_type: 'desk',
                type: 'desk',
                asset_id: 'desk-1',
                asset_name: 'Desk 1',
                description: 'Desk Booking',
                date: Date.now(),
                duration: 60,
                status: 'approved',
            } as any),
        ]);
        spectator = createComponent();
    });

    it('should pass a refresh callback to booking details modal', () => {
        jest.useFakeTimers();

        spectator.component.viewDetails();
        jest.runAllTimers();

        expect(dialog.open).toHaveBeenCalledWith(
            BookingDetailsModalComponent,
            expect.objectContaining({
                data: expect.objectContaining({
                    refresh_fn: expect.any(Function),
                }),
            }),
        );

        dialog.open.mock.calls[0][1].data.refresh_fn();

        expect(refreshUpcomingEvents).toHaveBeenCalled();
        jest.useRealTimers();
    });

    it('should reflect checked in state for room events', () => {
        upcoming_events.next([
            new CalendarEvent({
                id: 'event-1',
                title: 'Room Booking',
                date: Date.now(),
                duration: 60,
                status: 'approved',
                system: { id: 'sys-1' },
            } as any),
        ]);
        spectator.component.room_status.set('busy');

        spectator.detectChanges();

        expect(spectator.component.isCheckedIn()).toBe(true);
        expect(spectator.query('button[btn]')).toBeDisabled();
    });
});
