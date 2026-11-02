import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { CalEvent } from '@placeos/events';

import { BookingCalendarLinksComponent } from '../../app/book/booking-calendar-links.component';

describe('BookingCalendarLinksComponent', () => {
    let spectator: Spectator<BookingCalendarLinksComponent>;
    const event = {
        title: 'Desk booking',
        date: Date.parse('2026-07-04T10:00:00Z'),
        duration: 60,
        location: 'HQ, Level 1',
    } as CalEvent;

    const createComponent = createComponentFactory({
        component: BookingCalendarLinksComponent,
        detectChanges: false,
    });

    it('names each link with the prefix and links to the event', () => {
        spectator = createComponent({ props: { event, prefix: 'desk' } });
        spectator.detectChanges();

        expect(
            spectator
                .query('a[name="desk-outlook-link"]')
                ?.getAttribute('href'),
        ).toContain('http');
        expect(
            spectator.query('a[name="desk-google-link"]')?.getAttribute('href'),
        ).toContain('google.com');
        expect(
            spectator.query('a[name="desk-ical-link"]')?.getAttribute('href'),
        ).toContain('data:text/calendar');
    });

    it('gives empty links when there is no event', () => {
        spectator = createComponent({ props: { event: null, prefix: 'desk' } });

        expect(spectator.component.outlook_link()).toBe('');
        expect(spectator.component.google_link()).toBe('');
        expect(spectator.component.ical_link()).toBe('');
    });
});
