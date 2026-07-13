import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { BookingDetailsModalComponent } from '@placeos/bookings';
import { Booking, CalendarEvent, OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { SpacePipe } from 'libs/events/src/lib/space.pipe';
import { LandingUpcomingBookingComponent } from '../../app/landing-new/landing-upcoming-booking.component';
import { LandingStateService } from '../../app/landing/landing-state.service';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';

describe('LandingUpcomingBookingComponent', () => {
    let spectator: SpectatorRouting<LandingUpcomingBookingComponent>;
    const upcoming_events = signal<any[]>([
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
                initialised: signal(true),
            } as any),
        ],
    });

    beforeEach(() => {
        jest.restoreAllMocks();
        jest.clearAllMocks();
        jest.spyOn(SpacePipe.prototype, 'transform').mockImplementation(
            async (id: string) => ({ id }) as any,
        );
        upcoming_events.set([
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

    it('should disable edit when the booking details modal cannot edit', () => {
        upcoming_events.set([
            new Booking({
                id: 'booking-visitor-1',
                booking_type: 'visitor',
                type: 'visitor',
                description: 'Visitor Booking',
                date: Date.now(),
                duration: 60,
                status: 'approved',
            } as any),
        ]);
        spectator.detectChanges();

        expect(spectator.component.canEdit()).toBe(false);
        expect(spectator.queryAll('button[btn]')[1]).toBeDisabled();
    });

    it('should show the booking title for VIP visitors', () => {
        upcoming_events.set([
            new Booking({
                id: 'booking-vip-visitor-1',
                booking_type: 'vip-visitor',
                type: 'vip-visitor',
                title: 'Board Visit',
                description: 'Visitor Name',
                asset_name: 'Visitor Name',
                date: Date.now(),
                duration: 60,
                status: 'approved',
            } as any),
        ]);

        expect(spectator.component.eventTitle()).toBe('Board Visit');
    });

    it('should keep delete enabled before the shown booking ends', () => {
        const date = Date.now();
        upcoming_events.set([
            new Booking({
                id: 'booking-1',
                booking_type: 'desk',
                type: 'desk',
                asset_id: 'desk-1',
                asset_name: 'Desk 1',
                description: 'Desk Booking',
                date,
                duration: 60,
                date_end: date + 60 * 60 * 1000,
                status: 'approved',
            } as any),
        ]);
        spectator.detectChanges();

        expect(spectator.component.deleteDisabled()).toBe(false);
        expect(spectator.queryAll('button[btn]')[3]).not.toBeDisabled();
    });

    it('should disable delete after the shown booking ends', () => {
        const date = Date.now() - 60 * 60 * 1000;
        upcoming_events.set([
            new Booking({
                id: 'booking-1',
                booking_type: 'desk',
                type: 'desk',
                asset_id: 'desk-1',
                asset_name: 'Desk 1',
                description: 'Desk Booking',
                date,
                duration: 30,
                date_end: date + 30 * 60 * 1000,
                status: 'approved',
            } as any),
        ]);
        spectator.detectChanges();

        expect(spectator.component.deleteDisabled()).toBe(true);
        expect(spectator.queryAll('button[btn]')[3]).toBeDisabled();
    });

    it('should disable delete when the booking is ended early before its scheduled end', () => {
        const date = Date.now();
        upcoming_events.set([
            new Booking({
                id: 'booking-1',
                booking_type: 'desk',
                type: 'desk',
                asset_id: 'desk-1',
                asset_name: 'Desk 1',
                description: 'Desk Booking',
                date,
                duration: 60,
                date_end: date + 60 * 60 * 1000,
                checked_out_at: Math.floor(date / 1000) - 60,
                status: 'approved',
            } as any),
        ]);
        spectator.detectChanges();

        expect(spectator.component.deleteDisabled()).toBe(true);
        expect(spectator.queryAll('button[btn]')[3]).toBeDisabled();
    });

    it('should disable edit when the event details modal cannot edit', () => {
        upcoming_events.set([
            new CalendarEvent({
                id: 'event-shared-1',
                title: 'Shared Event',
                date: Date.now(),
                duration: 60,
                status: 'approved',
                extension_data: { shared_event: true },
            } as any),
        ]);
        spectator.detectChanges();

        expect(spectator.component.canEdit()).toBe(false);
        expect(spectator.queryAll('button[btn]')[1]).toBeDisabled();
    });

    it('should update checked in state immediately for room events', () => {
        jest.useFakeTimers();
        const date = Date.now();
        upcoming_events.set([
            new CalendarEvent({
                id: 'event-1',
                title: 'Room Booking',
                date,
                duration: 60,
                state: 'started',
                status: 'approved',
                system: { id: 'sys-1' },
            } as any),
        ]);

        // Flush the room-resolving effect (resets room state for new event)
        // before simulating the live driver bindings.
        spectator.detectChanges();
        spectator.component.room_status.set('busy');
        spectator.component.room_booking_start.set(date / 1000);

        spectator.detectChanges();
        jest.runOnlyPendingTimers();
        spectator.detectChanges();

        expect(spectator.component.isCheckedIn()).toBe(true);
        expect(spectator.query('button[btn]')).toBeDisabled();
        jest.useRealTimers();
    });

    it('should not show checked in for room events when the driver booking start does not match', () => {
        jest.useFakeTimers();
        const date = Date.now();
        upcoming_events.set([
            new CalendarEvent({
                id: 'event-1',
                title: 'Room Booking',
                date,
                duration: 60,
                state: 'started',
                status: 'approved',
                system: { id: 'sys-1' },
            } as any),
        ]);
        spectator.component.room_status.set('busy');
        spectator.component.room_booking_start.set(date / 1000 + 61);

        spectator.detectChanges();
        jest.runOnlyPendingTimers();
        spectator.detectChanges();

        expect(spectator.component.isCheckedIn()).toBe(false);
        jest.useRealTimers();
    });

    it('should preserve room status when the same room event refreshes', async () => {
        const event_details = {
            id: 'event-2',
            title: 'Room Booking',
            date: Date.now(),
            duration: 60,
            state: 'started',
            status: 'approved',
            system: { id: 'calendar-resource-id' },
        };
        upcoming_events.set([new CalendarEvent(event_details as any)]);
        // Flush the effect so the event becomes the current room event
        spectator.detectChanges();
        await new Promise((resolve) => setTimeout(resolve, 0));

        // Simulate the live driver bindings populating room state
        spectator.component.room_status.set('busy');
        spectator.component.room_booking_start.set(event_details.date / 1000);
        spectator.component.room_system_id.set('room-system-1');

        // Refresh with the same event - state should be preserved
        upcoming_events.set([new CalendarEvent(event_details as any)]);
        await new Promise((resolve) => setTimeout(resolve, 0));
        spectator.detectChanges();

        expect(spectator.component.room_status()).toBe('busy');
        expect(spectator.component.room_booking_start()).toBe(
            event_details.date / 1000,
        );
    });

    it('should resolve the room system id like the details modal', async () => {
        const transform_spy = SpacePipe.prototype
            .transform as jest.MockedFunction<any>;
        transform_spy.mockResolvedValue({ id: 'room-system-1' } as any);
        upcoming_events.set([
            new CalendarEvent({
                id: 'event-3',
                title: 'Room Booking',
                date: Date.now(),
                duration: 60,
                status: 'approved',
                system: { id: 'calendar-resource-id' },
            } as any),
        ]);

        // Flush the room-resolving effect, then wait for the async lookup
        spectator.detectChanges();
        await new Promise((resolve) => setTimeout(resolve, 0));
        spectator.detectChanges();

        expect(transform_spy).toHaveBeenCalledWith('calendar-resource-id');
        expect(spectator.component.room_system_id()).toBe('room-system-1');
    });
});
