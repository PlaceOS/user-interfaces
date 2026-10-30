import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { BookingDetailsModalComponent } from '@placeos/bookings';
import {
    Booking,
    BuildingLevel,
    CalendarEvent,
    OrganisationService,
    settingSignal,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { SpacePipe } from 'libs/events/src/lib/space.pipe';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';
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
    const refreshUpcomingEvents = vi.fn();
    const dialog = {
        open: vi.fn(),
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
                    edit: vi.fn(),
                    editBooking: vi.fn(),
                    remove: vi.fn(),
                    end: vi.fn(),
                    loading: signal(false),
                },
            },
            MockProvider(OrganisationService, {
                levelWithID: vi.fn(),
                buildings: [],
                initialised: signal(true),
            } as any),
        ],
    });

    beforeEach(() => {
        vi.restoreAllMocks();
        vi.clearAllMocks();
        vi.spyOn(SpacePipe.prototype, 'transform').mockImplementation(
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

    describe('checkIn', () => {
        const checkInUrl = () =>
            vi.mocked(ts_client.post).mock.calls[0]?.[0] as string;

        beforeEach(() => {
            vi.mocked(ts_client.post).mockResolvedValue({} as any);
        });

        it('should check in only the occurrence for the first day of a recurring booking', async () => {
            // The first day is the series master: it has no `instance`
            upcoming_events.set([
                new Booking({
                    id: 'series-1',
                    booking_type: 'desk',
                    booking_start: 1_790_000_000,
                    duration: 60,
                    recurrence_type: 'daily',
                }),
            ]);

            await spectator.component.checkIn();

            expect(ts_client.post).toHaveBeenCalledTimes(1);
            expect(checkInUrl()).toContain(
                '/series-1/check_in/1790000000?state=true',
            );
            expect(refreshUpcomingEvents).toHaveBeenCalledTimes(1);
        });

        it('should check in the instance of a later occurrence', async () => {
            upcoming_events.set([
                new Booking({
                    id: 'series-1',
                    booking_type: 'desk',
                    booking_start: 1_790_000_000,
                    duration: 60,
                    instance: 1_790_086_400,
                }),
            ]);

            await spectator.component.checkIn();

            expect(checkInUrl()).toContain(
                '/series-1/check_in/1790086400?state=true',
            );
        });

        it('should check in a booking with no recurrence by its ID', async () => {
            await spectator.component.checkIn();

            expect(checkInUrl()).toContain('/booking-1/check_in?state=true');
        });

        it('should send one request when check in is pressed twice', async () => {
            await Promise.all([
                spectator.component.checkIn(),
                spectator.component.checkIn(),
            ]);

            expect(ts_client.post).toHaveBeenCalledTimes(1);
            expect(spectator.component.checking_in()).toBe(false);
        });
    });

    it('should pass a refresh callback to booking details modal', () => {
        vi.useFakeTimers();

        spectator.component.viewDetails();
        vi.runAllTimers();

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
        vi.useRealTimers();
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

    it('should hide check-in for unallocated parking bookings', () => {
        upcoming_events.set([
            new Booking({
                id: 'parking-booking-1',
                booking_type: 'parking',
                type: 'parking',
                asset_id: 'unallocated-123',
                date: Date.now(),
                duration: 60,
                status: 'approved',
            } as any),
        ]);
        spectator.detectChanges();

        expect(spectator.query('button[btn]:not(.inverse)')).not.toExist();
        const edit_button = spectator.query<HTMLButtonElement>(
            'button[name="edit-booking"]',
        );
        expect(edit_button).toHaveClass('flex-1');
        expect(edit_button).not.toHaveClass('w-12');
        expect(edit_button?.querySelector('div.pr-2')).toExist();
    });

    it('should hide the parking space name when enabled', () => {
        vi.mocked(
            spectator.inject(OrganisationService).levelWithID,
        ).mockReturnValue(new BuildingLevel({ name: 'Level 1' }));
        upcoming_events.set([
            new Booking({
                id: 'parking-booking-1',
                booking_type: 'parking',
                type: 'parking',
                title: '',
                asset_id: 'parking-123',
                asset_name: 'Bay 12',
                description: 'Bay 12',
                zones: ['level-1'],
                date: Date.now(),
                duration: 60,
                status: 'approved',
            } as any),
        ]);
        expect(spectator.component.eventTitle()).toBe('Bay 12');
        expect(spectator.component.eventLocation()).toBe('Bay 12');

        const hide_space = settingSignal('parking.hide_selected_space');
        hide_space.set(true);
        try {
            expect(spectator.component.eventTitle()).toBe('RESOURCE.PARKING');
            expect(spectator.component.eventLocation()).toBe('Level 1');
        } finally {
            hide_space.set(false);
        }
    });

    it('should show check-in for allocated parking bookings', () => {
        upcoming_events.set([
            new Booking({
                id: 'parking-booking-1',
                booking_type: 'parking',
                type: 'parking',
                asset_id: 'parking-123',
                date: Date.now(),
                duration: 60,
                status: 'approved',
            } as any),
        ]);
        spectator.detectChanges();

        expect(spectator.query('button[btn]:not(.inverse)')).toExist();
        const edit_button = spectator.query<HTMLButtonElement>(
            'button[name="edit-booking"]',
        );
        expect(edit_button).toHaveClass('w-12');
        expect(edit_button).not.toHaveClass('flex-1');
        expect(edit_button?.querySelector('div.pr-2')).not.toExist();
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
        vi.useFakeTimers();
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
        vi.runOnlyPendingTimers();
        spectator.detectChanges();

        expect(spectator.component.isCheckedIn()).toBe(true);
        expect(spectator.query('button[btn]')).toBeDisabled();
        vi.useRealTimers();
    });

    it('should not show checked in for room events when the driver booking start does not match', () => {
        vi.useFakeTimers();
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
        vi.runOnlyPendingTimers();
        spectator.detectChanges();

        expect(spectator.component.isCheckedIn()).toBe(false);
        vi.useRealTimers();
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
        const transform_spy = SpacePipe.prototype.transform as any;
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
