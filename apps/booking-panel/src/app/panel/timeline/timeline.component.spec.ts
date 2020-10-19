
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { format, subHours, startOfMinute, addMinutes, isAfter, isBefore } from 'date-fns';

import { PanelTimelineComponent } from './timeline.component';
import { generateMockBooking, setMockBookingStartDatetime } from 'src/app/bookings/booking.utilities';
import { Space } from 'src/app/spaces/space.class';
import { generateMockSpace } from 'src/app/spaces/space.utilities';
import { CalendarEvent } from 'src/app/events/event.class';

describe('PanelTimelineComponent', () => {
    let spectator: Spectator<PanelTimelineComponent>
    const createComponent = createComponentFactory({
        component: PanelTimelineComponent
    })
    let space: Space;
    let bookings: CalendarEvent[];

    beforeEach(() => {
        setMockBookingStartDatetime(subHours(new Date(), 1).valueOf());
        bookings = new Array(10).fill(0).map(i => new CalendarEvent(generateMockBooking()));
        spectator = createComponent();
        space = new Space(generateMockSpace());
        spectator.component.space = space;
    });

    it('should display current time', () => {
        const now = format(new Date(), 'h:mm a');
        expect(spectator.query('.time-display')).toHaveText(now);
    });

    it('should show the correct amount of time', () => {
        const duration = spectator.component.options ? spectator.component.options.duration : 720;
        expect(spectator.component.time_blocks.length).toBe(Math.floor(duration / 5));
    });

    it('should show the correct amount of expired time', () => {
        const expired: HTMLDivElement = spectator.query('.expired');
        expect(expired).toBeTruthy();
    });

    it('should show the correct blocks as in use', () => {
        spectator.component.checkBookings(bookings);
        // Check block values
        for (const booking of bookings) {
            const start = startOfMinute(new Date(booking.date));
            const end = addMinutes(start, booking.duration);
            for (const block of spectator.component.time_blocks) {
                const time = startOfMinute(new Date(block.value));
                if (isAfter(time, start) && isBefore(time, end)) {
                    expect(block.in_use).toBeTruthy();
                }
            }
        }
        // Check template
        spectator.detectChanges();
        const block_list = spectator.queryAll('.block');
        expect(block_list.length).toBe(spectator.component.time_blocks.length);
        for (const block of spectator.component.time_blocks) {
            if (block.in_use) {
                const el = block_list[spectator.component.time_blocks.indexOf(block)];
                expect(el.classList.contains('in-use')).toBeTruthy();
            }
        }
    });

    it('should hide availability if binding is true', () => {
        spectator.component.checkBookings(bookings);
        spectator.detectChanges();
        expect(spectator.query('.block.in-use')).toBeTruthy();
        spectator.component.hide_status = true;
        spectator.component.checkBookings(bookings);
        spectator.detectChanges();
        expect(spectator.query('.block.in-use')).toBeFalsy();
        spectator.component.hide_status = false;
        spectator.component.hide_all = true;
        spectator.component.checkBookings(bookings);
        spectator.detectChanges();
        expect(spectator.query('.block.in-use')).toBeFalsy();
    });
});
