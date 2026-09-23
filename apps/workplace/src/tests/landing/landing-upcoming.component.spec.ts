import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { BookingCardComponent, BookingFormService } from '@placeos/bookings';
import { Booking, CalendarEvent, SettingsService } from '@placeos/common';
import {
    EventCardComponent,
    EventFormService,
    newCalendarEventFromBooking,
} from '@placeos/events';
import * as ts_client from '@placeos/ts-client';
import { MockComponent, MockProvider } from 'ng-mocks';
import { NEVER, of } from 'rxjs';
import { LandingStateService } from '../../app/landing/landing-state.service';
import { LandingUpcomingComponent } from '../../app/landing/landing-upcoming.component';

vi.mock('@placeos/ts-client', { spy: true });

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
            {
                provide: MatDialog,
                useValue: { open: vi.fn(), closeAll: vi.fn() },
            },
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
        vi.clearAllMocks();
        vi.mocked(ts_client.del).mockResolvedValue(undefined);
        upcoming_events.set([]);
        spectator = createComponent();
    });

    it('should refresh upcoming bookings on request', () => {
        const state = spectator.inject(LandingStateService);

        spectator.component.refresh_fn();

        expect(state.refreshUpcomingEvents).toHaveBeenCalled();
    });

    it('should not patch resources when editing visitor bookings', () => {
        vi.useFakeTimers();
        const booking_form = spectator.inject(BookingFormService);
        (booking_form.newForm as any).mockClear();
        (booking_form.model.update as any).mockClear();
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

    it('should not patch resources when editing visitor bookings with only type set', () => {
        vi.useFakeTimers();
        const booking_form = spectator.inject(BookingFormService);
        (booking_form.newForm as any).mockClear();
        (booking_form.model.update as any).mockClear();
        const booking = new Booking({
            booking_type: ' ',
            type: 'visitor',
            asset_id: 'visitor@example.com',
            asset_name: 'Visitor',
        } as any);

        spectator.component.editBooking(booking);
        vi.runAllTimers();

        expect(booking_form.newForm).toHaveBeenLastCalledWith(
            'visitor',
            expect.objectContaining({ type: 'visitor' }),
        );
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
    describe('room cancellation', () => {
        function confirmRemoval(reason = 'done') {
            const dialog =
                spectator.fixture.debugElement.injector.get(MatDialog);
            const close = vi.fn();
            vi.spyOn(dialog, 'open').mockReturnValue({
                afterClosed: () => of({ reason }),
                componentInstance: {
                    event: reason === 'done' ? of({ reason }) : NEVER,
                    loading: { set: vi.fn() },
                },
                close,
            } as unknown as ReturnType<MatDialog['open']>);
            return close;
        }

        function nativeRoom() {
            return newCalendarEventFromBooking(
                new Booking({
                    id: 'room-booking-1',
                    booking_type: 'room',
                    asset_id: 'room-1',
                    user_email: 'staff@example.com',
                    extension_data: { creator: 'staff@example.com' },
                    booking_start: 1800000000,
                    booking_end: 1800003600,
                }),
            );
        }

        it.each([true, false])(
            'uses the native API regardless of the current setting %s',
            async (use_bookings) => {
                confirmRemoval();
                vi.mocked(
                    spectator.inject(SettingsService).get,
                ).mockReturnValue(use_bookings);
                const booking = nativeRoom();

                await spectator.component.remove(booking);

                expect(ts_client.del).toHaveBeenCalledExactlyOnceWith(
                    expect.stringMatching(/\/bookings\/room-booking-1\?/),
                    { response_type: 'void' },
                );
                expect(ts_client.get).not.toHaveBeenCalled();
                expect(
                    spectator.inject(LandingStateService).refreshUpcomingEvents,
                ).toHaveBeenCalled();
            },
        );

        it('keeps calendar events on the calendar API', async () => {
            confirmRemoval();
            const event = new CalendarEvent({
                id: 'calendar-event-1',
                creator: 'staff@example.com',
                mailbox: 'staff@example.com',
            });

            await spectator.component.remove(event);

            expect(ts_client.del).toHaveBeenCalledExactlyOnceWith(
                expect.stringMatching(/\/events\/calendar-event-1\?/),
                { response_type: 'void' },
            );
        });

        it('does not request an API when confirmation is dismissed', async () => {
            confirmRemoval('close');

            await spectator.component.remove(nativeRoom());

            expect(ts_client.del).not.toHaveBeenCalled();
            expect(ts_client.get).not.toHaveBeenCalled();
        });

        it('keeps the booking visible when native cancellation fails', async () => {
            const close = confirmRemoval();
            const error = new Error('Cancellation failed');
            vi.mocked(ts_client.del).mockRejectedValueOnce(error);

            await expect(
                spectator.component.remove(nativeRoom()),
            ).rejects.toThrow(error);

            expect(close).toHaveBeenCalled();
            expect(
                spectator.inject(LandingStateService).refreshUpcomingEvents,
            ).not.toHaveBeenCalled();
        });
    });
});
