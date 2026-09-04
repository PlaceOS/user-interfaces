import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BookingDetailsModalComponent } from '@placeos/bookings';
import { Booking, CalendarEvent, OrganisationService } from '@placeos/common';
import {
    EventDetailsModalComponent,
    GroupEventDetailsModalComponent,
} from '@placeos/events';
import { UserPipe } from '@placeos/users';
import { addDays, addHours, startOfDay } from 'date-fns';
import { MockPipe, MockProvider } from 'ng-mocks';
import { ScheduleDayViewComponent } from '../../app/schedule/schedule-day-view.component';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';

describe('ScheduleDayViewComponent', () => {
    let spectator: Spectator<ScheduleDayViewComponent>;
    let dialog: MatDialog;

    // Fixed reference day (avoids "ended" status surprises for positioning tests)
    const the_day = startOfDay(new Date('2026-05-14T00:00:00')).valueOf();

    const bookingAt = (
        start_hour: number,
        duration_minutes: number,
        extra: Record<string, any> = {},
    ) => {
        const date = addHours(the_day, start_hour).valueOf();
        return new Booking({
            id: extra.id || `bkn-${start_hour}-${duration_minutes}`,
            booking_type: 'desk',
            date,
            duration: duration_minutes,
            title: `Booking ${start_hour}`,
            ...extra,
        });
    };

    const createComponent = createComponentFactory({
        component: ScheduleDayViewComponent,
        declarations: [MockPipe(UserPipe, (value) => value as any)],
        providers: [
            MockProvider(MatDialog, { open: vi.fn(), closeAll: vi.fn() }),
            MockProvider(OrganisationService, { levelWithID: vi.fn() }),
            {
                provide: ScheduleStateService,
                useValue: {
                    edit: vi.fn(),
                    editBooking: vi.fn(),
                    remove: vi.fn(),
                    end: vi.fn(),
                    triggerPoll: vi.fn(),
                },
            },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        spectator = createComponent({ props: { date: the_day } });
        dialog = spectator.inject(MatDialog);
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should build 24 hourly time slots for the whole day', () => {
        const slots = spectator.component.timeSlots();
        expect(slots).toHaveLength(24);
        expect(slots[0].hour).toBe(0);
        expect(slots[23].hour).toBe(23);
        // labels are formatted as "12 AM", "1 AM", ... "12 PM" ...
        expect(slots[0].label).toBe('12 AM');
        expect(slots[13].label).toBe('1 PM');
    });

    it('should filter bookings down to the selected day', () => {
        const today_booking = bookingAt(9, 60, { id: 'today' });
        const other_day = new Booking({
            id: 'other',
            booking_type: 'desk',
            date: addDays(the_day, 2).valueOf(),
            duration: 60,
        });
        spectator.setInput('bookings', [today_booking, other_day]);
        const day = spectator.component.dayBookings();
        expect(day.map((b) => b.id)).toEqual(['today']);
    });

    it('should render a booking count that is pluralised', () => {
        spectator.setInput('bookings', [bookingAt(9, 60)]);
        spectator.detectChanges();
        expect(spectator.query('.mb-4')?.textContent).toContain('1 booking');
        expect(spectator.query('.mb-4')?.textContent).not.toContain('bookings');

        spectator.setInput('bookings', [bookingAt(9, 60), bookingAt(11, 60)]);
        spectator.detectChanges();
        expect(spectator.query('.mb-4')?.textContent).toContain('2 bookings');
    });

    it('should give non-overlapping bookings the full width in one column', () => {
        spectator.setInput('bookings', [
            bookingAt(9, 60, { id: 'a' }),
            bookingAt(11, 60, { id: 'b' }),
        ]);
        const positioned = spectator.component.positionedBookings();
        expect(positioned).toHaveLength(2);
        for (const item of positioned) {
            expect(item.totalColumns).toBe(1);
            expect(item.width).toBe(100);
            expect(item.left).toBe(0);
        }
    });

    it('should split overlapping bookings into side-by-side columns', () => {
        spectator.setInput('bookings', [
            bookingAt(9, 120, { id: 'a' }), // 9-11
            bookingAt(10, 60, { id: 'b' }), // 10-11 overlaps a
        ]);
        const positioned = spectator.component.positionedBookings();
        expect(positioned).toHaveLength(2);
        const by_id = Object.fromEntries(
            positioned.map((p) => [p.booking.id, p]),
        );
        expect(by_id['a'].totalColumns).toBe(2);
        expect(by_id['b'].totalColumns).toBe(2);
        expect(by_id['a'].column).toBe(0);
        expect(by_id['b'].column).toBe(1);
        // Columns should not overlap horizontally
        expect(by_id['b'].left).toBeGreaterThan(by_id['a'].left);
        expect(by_id['a'].width).toBeLessThan(100);
    });

    it('should compute a proportional top and height for a booking', () => {
        // 6am booking, one hour long, over a 24h grid
        spectator.setInput('bookings', [bookingAt(6, 60, { id: 'a' })]);
        const [item] = spectator.component.positionedBookings();
        // 6/24 hours from top = 25%
        expect(item.top).toBeCloseTo(25, 1);
        // 1 hour of 24 = ~4.16%
        expect(item.height).toBeCloseTo(100 / 24, 1);
    });

    it('should enforce a minimum height for very short bookings', () => {
        spectator.setInput('bookings', [bookingAt(6, 1, { id: 'a' })]);
        const [item] = spectator.component.positionedBookings();
        expect(item.height).toBeGreaterThanOrEqual(1);
    });

    it('should return no positioned bookings when the day is empty', () => {
        spectator.setInput('bookings', []);
        expect(spectator.component.positionedBookings()).toEqual([]);
    });

    describe('type()', () => {
        it('returns the booking_type for Booking instances', () => {
            expect(
                spectator.component.type(
                    new Booking({ booking_type: 'parking' }),
                ),
            ).toBe('parking');
        });

        it('returns "event" for a plain calendar event', () => {
            const event = new CalendarEvent({ id: 'e1', title: 'Meet' });
            expect(spectator.component.type(event)).toBe('event');
        });

        it('returns "group-event" for a shared calendar event', () => {
            const event = new CalendarEvent({
                id: 'e2',
                title: 'Meet',
                extension_data: { shared_event: true },
            });
            expect(spectator.component.type(event)).toBe('group-event');
        });
    });

    describe('bookingStatus()', () => {
        afterEach(() => vi.restoreAllMocks());

        it('returns "approved" for an approved future booking', () => {
            const booking = new Booking({
                booking_type: 'desk',
                date: addDays(Date.now(), 1).valueOf(),
                duration: 60,
                status: 'approved',
            });
            expect(spectator.component.bookingStatus(booking)).toBe('approved');
        });

        it('flags a tentative parking booking in the active waitlist week as waitlisted', () => {
            // Friday 18:00 local is the default start of the waitlist week
            vi.spyOn(Date, 'now').mockReturnValue(
                new Date(2026, 6, 31, 18, 0).valueOf(),
            );
            const booking = new Booking({
                booking_type: 'parking',
                date: new Date(2026, 7, 3, 8, 0).valueOf(),
                duration: 60,
            });
            expect(booking.status).toBe('tentative');
            expect(spectator.component.bookingStatus(booking)).toBe(
                'waitlisted',
            );
        });

        it('leaves a tentative parking booking past the waitlist week as tentative', () => {
            vi.spyOn(Date, 'now').mockReturnValue(
                new Date(2026, 6, 31, 17, 59).valueOf(),
            );
            const booking = new Booking({
                booking_type: 'parking',
                date: new Date(2026, 7, 3, 8, 0).valueOf(),
                duration: 60,
            });
            expect(spectator.component.bookingStatus(booking)).toBe(
                'tentative',
            );
        });

        it('returns null for statuses outside the known set (e.g. ended)', () => {
            // a past booking is "ended" which is not surfaced
            const booking = bookingAt(9, 60);
            expect(booking.status).toBe('ended');
            expect(spectator.component.bookingStatus(booking)).toBeNull();
        });
    });

    describe('statusLabel() / statusColor()', () => {
        it('capitalises the status label', () => {
            expect(spectator.component.statusLabel('approved')).toBe(
                'Approved',
            );
            expect(spectator.component.statusLabel('waitlisted')).toBe(
                'Waitlisted',
            );
        });

        it('maps each status to a themed colour variable', () => {
            expect(spectator.component.statusColor('approved')).toBe(
                'var(--success)',
            );
            expect(spectator.component.statusColor('waitlisted')).toBe(
                'var(--info)',
            );
            expect(spectator.component.statusColor('tentative')).toBe(
                'var(--warn)',
            );
            expect(spectator.component.statusColor('declined')).toBe(
                'var(--error)',
            );
        });
    });

    it('should hide the visitor name for non-visitor bookings', () => {
        const parking = new Booking({
            booking_type: 'parking',
            asset_id: 'unallocated-123',
        });
        expect(spectator.component.visitorName(parking)).toBe('');
    });

    it('should hide the asset id of unallocated parking bookings', () => {
        const unallocated = new Booking({
            booking_type: 'parking',
            asset_id: 'unallocated-123',
        });
        expect(spectator.component.location(unallocated)).toBe('');
    });

    describe('backgroundColor()', () => {
        it('uses the solid type colour for the current user', () => {
            const booking = new Booking({ booking_type: 'desk' });
            expect(spectator.component.backgroundColor(booking)).toBe(
                '#BFDBFE',
            );
        });

        it('adds transparency when the booking is for another user', () => {
            const booking = new Booking({
                booking_type: 'desk',
                booked_by_email: 'me@place.tech',
                user_email: 'other@place.tech',
            });
            vi.spyOn(
                spectator.component,
                'isBookingForOtherUser',
            ).mockReturnValue(true as any);
            expect(spectator.component.backgroundColor(booking)).toBe(
                '#BFDBFE80',
            );
        });
    });

    describe('currentTimePosition()', () => {
        it('returns null when the viewed day is not today', () => {
            // component date input is the fixed 2026 day, not today
            expect(spectator.component.isToday()).toBe(false);
            expect(spectator.component.currentTimePosition()).toBeNull();
        });

        it('returns a percentage within range when viewing today', () => {
            spectator.setInput('date', Date.now());
            expect(spectator.component.isToday()).toBe(true);
            const pos = spectator.component.currentTimePosition();
            expect(pos).not.toBeNull();
            expect(pos).toBeGreaterThanOrEqual(0);
            expect(pos).toBeLessThanOrEqual(100);
        });
    });

    describe('viewBooking()', () => {
        it('closes any open dialogs first', () => {
            spectator.component.viewBooking(bookingAt(9, 60));
            expect(dialog.closeAll).toHaveBeenCalled();
        });

        it('opens the event modal for a plain calendar event', () => {
            const event = new CalendarEvent({ id: 'e1', title: 'Meet' });
            spectator.component.viewBooking(event);
            expect(dialog.open).toHaveBeenCalledWith(
                EventDetailsModalComponent,
                expect.anything(),
            );
        });

        it('opens the group modal for a shared calendar event', () => {
            const event = new CalendarEvent({
                id: 'e2',
                title: 'Meet',
                extension_data: { shared_event: true },
            });
            spectator.component.viewBooking(event);
            expect(dialog.open).toHaveBeenCalledWith(
                GroupEventDetailsModalComponent,
                expect.anything(),
            );
        });

        it('opens the booking details modal for a normal booking', () => {
            spectator.component.viewBooking(bookingAt(9, 60));
            expect(dialog.open).toHaveBeenCalledWith(
                BookingDetailsModalComponent,
                expect.anything(),
            );
            const state = spectator.inject(ScheduleStateService);
            (dialog.open as any).mock.calls[0][1].data.refresh_fn();
            expect(state.triggerPoll).toHaveBeenCalled();
        });

        it('opens the group modal for a group-event booking', () => {
            const booking = new Booking({
                id: 'g1',
                booking_type: 'group-event',
                date: the_day,
                duration: 60,
            });
            spectator.component.viewBooking(booking);
            expect(dialog.open).toHaveBeenCalledWith(
                GroupEventDetailsModalComponent,
                expect.anything(),
            );
        });
    });
});
