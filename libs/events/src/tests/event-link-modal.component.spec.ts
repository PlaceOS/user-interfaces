import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { CalendarEvent } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { EventLinkModalComponent } from '../lib/event-link-modal.component';

describe('EventLinkModalComponent', () => {
    let spectator: Spectator<EventLinkModalComponent>;
    const createComponent = createComponentFactory({
        component: EventLinkModalComponent,
        providers: [
            MockProvider(
                MAT_DIALOG_DATA,
                new CalendarEvent({
                    title: 'Linked Event',
                    date: Date.now(),
                    duration: 60,
                }),
            ),
            MockProvider(MatDialogRef, { close: vi.fn() }),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should generate calendar links for the event', () => {
        expect(spectator.component.outlook_link).toContain(
            'outlook.office.com',
        );
        expect(spectator.component.google_link).toContain(
            'calendar.google.com',
        );
        expect(spectator.component.ical_link).toContain('data:text/calendar');
    });

    it('should prevent closing until a calendar option is selected', () => {
        spectator.component.close();
        expect(spectator.inject(MatDialogRef).close).not.toHaveBeenCalled();
    });

    it('should close once a calendar option has been actioned', () => {
        spectator.component.has_actioned.set(true);
        spectator.component.close();
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalledWith(
            true,
        );
    });

    it('should mark as actioned when a link is clicked', () => {
        expect(spectator.component.has_actioned()).toBe(false);
        spectator.click(spectator.query('a[href*="outlook"]'));
        expect(spectator.component.has_actioned()).toBe(true);
    });
});
