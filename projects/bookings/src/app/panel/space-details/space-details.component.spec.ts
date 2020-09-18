import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { PanelSpaceDetailsComponent } from './space-details.component';
import { setMockBookingStartDatetime, generateMockBooking } from 'src/app/bookings/booking.utilities';
import { CalendarEvent } from 'src/app/events/event.class';

describe('PanelSpaceDetailsComponent', () => {
    let spectator: Spectator<PanelSpaceDetailsComponent>;
    const createComponent = createComponentFactory(PanelSpaceDetailsComponent);

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should display the next meeting', () => {
        setMockBookingStartDatetime(new Date().valueOf());
        const space = { next: new Booking(generateMockBooking()) } as any;
        spectator.component.space = space;
        spectator.detectChanges();
        expect(spectator.query('.details.next')).toBeTruthy();
        expect(spectator.query('.details.current')).toBeFalsy();
        expect(spectator.query('.details.next .title')).toHaveText(space.next.title);
        expect(spectator.query('.details.next .host')).toHaveText(space.next.organiser.name);
        expect(spectator.query('.details.next .time')).toHaveText(
            `Next meeting at ${space.next.start_time}`
        );
    });

    it('should display the current meeting', () => {
        setMockBookingStartDatetime(new Date().valueOf());
        const space = { current: new Booking(generateMockBooking()) } as any;
        spectator.component.space = space;
        spectator.detectChanges();
        expect(spectator.query('.details.current')).toBeTruthy();
        expect(spectator.query('.details.current .title')).toHaveText(space.current.title);
        expect(spectator.query('.details.current .host')).toHaveText(space.current.organiser.name);
        expect(spectator.query('.details.current .time')).toHaveText(
            `Booked until ${space.current.end_time}`
        );
    });

    it('should display the next free period', async () => {
        setMockBookingStartDatetime(new Date().valueOf());
        const current = new Booking(generateMockBooking());
        setMockBookingStartDatetime(new Date().valueOf());
        const next = new Booking(generateMockBooking());
        const space = { current, next } as any;
        spectator.component.space = space;
        spectator.detectChanges();
        expect(spectator.query('.details.current')).toBeTruthy();
        expect(spectator.query('.details.next')).toBeTruthy();
        expect(spectator.query('.details.other')).toBeTruthy();
        const next_free = await spectator.component.next_free.toPromise();
        const content = ` Free ${next_free.start ? 'at ' + next_free.start : ''} ${
            next_free.end ? 'until ' + next_free.end : ''
        } `;
        expect(spectator.query('.details.other .time')).toHaveText(content.trim());
    });

    it('should show information block if title or description binding', () => {
        expect(spectator.query('.information')).toBeFalsy();
        spectator.component.title = 'Test title';
        spectator.detectChanges();
        expect(spectator.query('.information')).toBeTruthy();
        expect(spectator.query('.information .title')).toHaveText(spectator.component.title);
        spectator.component.title = null;
        spectator.component.description = 'Test Description';
        spectator.detectChanges();
        expect(spectator.query('.information')).toBeTruthy();
        expect(spectator.query('.information .text')).toHaveText(spectator.component.description);
    });

    it('should hide title if binding true', () => {
        const booking = new Booking(generateMockBooking());
        const space = { current: booking, next: booking } as any;
        spectator.component.space = space;
        spectator.detectChanges();
        expect(spectator.query('.details .title')).toBeTruthy();
        spectator.component.hide_title = true;
        spectator.detectChanges();
        expect(spectator.query('.details .title')).toBeFalsy();
    });

    it('should hide user if binding true', () => {
        const booking = new Booking(generateMockBooking());
        const space = { current: booking, next: booking } as any;
        spectator.component.space = space;
        spectator.detectChanges();
        expect(spectator.query('.details .host')).toBeTruthy();
        spectator.component.hide_user = true;
        spectator.detectChanges();
        expect(spectator.query('.details .host')).toBeFalsy();
    });

    it('should hide details if binding true', () => {
        const booking = new Booking(generateMockBooking());
        const space = { current: booking, next: booking } as any;
        spectator.component.space = space;
        spectator.detectChanges();
        expect(spectator.query('.details .title')).toBeTruthy();
        expect(spectator.query('.details .host')).toBeTruthy();
        spectator.component.hide_details = true;
        spectator.detectChanges();
        expect(spectator.query('.details .title')).toBeFalsy();
        expect(spectator.query('.details .host')).toBeFalsy();
    });

    it('should hide availability if binding true', () => {
        const booking = new CalendarEvent(generateMockBooking());
        const space = { current: booking, next: booking } as any;
        spectator.component.space = space;
        spectator.detectChanges();
        expect(spectator.query('.details .time')).toBeTruthy();
        spectator.component.hide_availability = true;
        spectator.detectChanges();
        expect(spectator.query('.details .time')).toBeFalsy();
    });
});
