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
    } as any);
    const createComponent = createComponentFactory({
        component: BookingLinkModalComponent,
        shallow: true,
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: event },
            MockProvider(SettingsService as any, createSettingsServiceMock()),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should render a calendar link for each provider', () => {
        expect(spectator.queryAll('a[btn]').length).toBe(3);
    });

    it('should generate outlook, google and ical links from the event', () => {
        expect(spectator.component.outlook_link).toContain(
            'outlook',
        );
        expect(spectator.component.outlook_link).toContain('calendar');
        expect(spectator.component.google_link).toContain(
            'calendar.google.com',
        );
        expect(spectator.component.ical_link).toContain(
            'data:text/calendar',
        );
    });

    it('should provide a close button', () => {
        expect(spectator.query('button[mat-dialog-close]')).toExist();
    });
});
