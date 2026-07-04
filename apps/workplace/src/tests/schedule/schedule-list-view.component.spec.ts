import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { Booking, CalendarEvent } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { BookingCardComponent } from '@placeos/bookings';
import { EventCardComponent } from '@placeos/events';
import { MockComponent, MockPipe } from 'ng-mocks';
import { addDays, addHours, startOfDay } from 'date-fns';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';
import { ScheduleListViewComponent } from '../../app/schedule/schedule-list-view.component';

describe('ScheduleListViewComponent', () => {
    let spectator: Spectator<ScheduleListViewComponent>;
    const state = {
        edit: jest.fn(),
        editBooking: jest.fn(),
        remove: jest.fn(),
        end: jest.fn(),
    };

    const day_one = startOfDay(new Date('2026-05-14T00:00:00')).valueOf();

    const bookingOn = (date: number, id: string) =>
        new Booking({
            id,
            booking_type: 'desk',
            date: addHours(date, 9).valueOf(),
            duration: 60,
            title: id,
        });

    const createComponent = createComponentFactory({
        component: ScheduleListViewComponent,
        declarations: [
            MockPipe(TranslatePipe, (key) => key),
            MockComponent(EventCardComponent),
            MockComponent(BookingCardComponent),
        ],
        providers: [{ provide: ScheduleStateService, useValue: state }],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        spectator = createComponent({ props: { date: day_one } });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should identify calendar events with isEvent', () => {
        expect(
            spectator.component.isEvent(new CalendarEvent({ id: 'e' })),
        ).toBe(true);
        expect(
            spectator.component.isEvent(new Booking({ booking_type: 'desk' })),
        ).toBe(false);
    });

    it('should group the selected single day into one date block', () => {
        spectator.setInput('bookings', [
            bookingOn(day_one, 'a'),
            bookingOn(day_one, 'b'),
        ]);
        const blocks = spectator.component.booking_dates();
        expect(blocks).toHaveLength(1);
        expect(blocks[0].bookings.map((b: Booking) => b.id)).toEqual([
            'a',
            'b',
        ]);
    });

    it('should exclude bookings from other days in single-date mode', () => {
        spectator.setInput('bookings', [
            bookingOn(day_one, 'a'),
            bookingOn(addDays(day_one, 3).valueOf(), 'later'),
        ]);
        const blocks = spectator.component.booking_dates();
        expect(blocks).toHaveLength(1);
        expect(blocks[0].bookings.map((b: Booking) => b.id)).toEqual(['a']);
    });

    it('should mark the block containing today with is_today', () => {
        const today = startOfDay(Date.now()).valueOf();
        spectator.setInput('date', today);
        spectator.setInput('bookings', [bookingOn(today, 'now')]);
        const blocks = spectator.component.booking_dates();
        expect(blocks[0].is_today).toBe(true);
    });

    it('should not mark a non-today block as today', () => {
        spectator.setInput('bookings', [bookingOn(day_one, 'a')]);
        expect(spectator.component.booking_dates()[0].is_today).toBe(false);
    });

    it('should produce a block per day across a date range, sorted by date', () => {
        const day_three = addDays(day_one, 2).valueOf();
        spectator.setInput('end_date', day_three);
        spectator.setInput('bookings', [
            bookingOn(day_three, 'c'),
            bookingOn(day_one, 'a'),
        ]);
        const blocks = spectator.component.booking_dates();
        expect(blocks).toHaveLength(2);
        // sorted ascending by date
        expect(blocks[0].bookings[0].id).toBe('a');
        expect(blocks[1].bookings[0].id).toBe('c');
    });

    it('should exclude bookings outside the date range', () => {
        const day_two = addDays(day_one, 1).valueOf();
        spectator.setInput('end_date', day_two);
        spectator.setInput('bookings', [
            bookingOn(day_one, 'a'),
            bookingOn(addDays(day_one, 10).valueOf(), 'far'),
        ]);
        const blocks = spectator.component.booking_dates();
        const all_ids = blocks.flatMap((b: any) =>
            b.bookings.map((x: Booking) => x.id),
        );
        expect(all_ids).toContain('a');
        expect(all_ids).not.toContain('far');
    });

    it('should return no blocks while loading', () => {
        spectator.setInput('loading', true);
        spectator.setInput('bookings', [bookingOn(day_one, 'a')]);
        expect(spectator.component.booking_dates()).toEqual([]);
    });

    it('should show the empty state when there are no bookings', () => {
        spectator.setInput('bookings', []);
        spectator.detectChanges();
        expect(spectator.query('img[src="assets/img/no-events.svg"]')).toExist();
        expect(spectator.query('.opacity-30')?.textContent).toContain(
            'APP.WORKPLACE.SCHEDULE_EMPTY',
        );
    });

    it('should render an event-card for events and booking-card for bookings', () => {
        spectator.setInput('bookings', [
            bookingOn(day_one, 'a'),
            Object.assign(new CalendarEvent({ id: 'e1', title: 'Meet' }), {
                date: addHours(day_one, 10).valueOf(),
            }),
        ]);
        spectator.detectChanges();
        expect(spectator.query('booking-card')).toExist();
        expect(spectator.query('event-card')).toExist();
    });

    it('should wire card callbacks through to the state service', () => {
        const booking = bookingOn(day_one, 'a');
        spectator.component.edit_fn(booking as any);
        spectator.component.edit_booking_fn(booking);
        spectator.component.remove_fn(booking, true);
        spectator.component.end_fn(booking);
        expect(state.edit).toHaveBeenCalledWith(booking);
        expect(state.editBooking).toHaveBeenCalledWith(booking);
        expect(state.remove).toHaveBeenCalledWith(booking, true);
        expect(state.end).toHaveBeenCalledWith(booking);
    });
});
