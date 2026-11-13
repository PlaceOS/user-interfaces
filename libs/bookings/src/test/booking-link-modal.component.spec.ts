import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { Booking, SettingsService } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockProvider } from 'ng-mocks';

import { BookingLinkModalComponent } from '../lib/booking-link-modal.component';

describe('BookingLinkModalComponent', () => {
    let spectator: Spectator<BookingLinkModalComponent>;
    const event = new Booking({
        id: 'bkn-1',
        title: 'Team Sync',
        date: Date.now(),
        duration: 60,
        attendees: [],
    });
    const createComponent = createComponentFactory({
        component: BookingLinkModalComponent,
        shallow: true,
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: event },
            MockProvider(SettingsService, createSettingsServiceMock()),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should link each calendar button to a link for the event', () => {
        const hrefs = spectator
            .queryAll('a[btn]')
            .map((_) => _.getAttribute('href'));
        const { outlook_link, google_link, ical_link } = spectator.component;

        expect(hrefs).toEqual([outlook_link, google_link, ical_link]);
        expect(google_link).toContain('calendar.google.com');
        expect(ical_link).toMatch(/^data:text\/calendar/);
        for (const link of [outlook_link, google_link, ical_link]) {
            expect(decodeURIComponent(link.replace(/\+/g, ' '))).toContain(
                'Team Sync',
            );
        }
    });
});
