import { signal } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';

import { EnrolmentEventDetailsComponent } from '../app/enrolment-event-details.component';
import { EnrolmentStateService } from '../app/enrolment-state.service';

describe('EnrolmentEventDetailsComponent', () => {
    let spectator: Spectator<EnrolmentEventDetailsComponent>;
    const event = signal<any>(null);

    const createComponent = createComponentFactory({
        component: EnrolmentEventDetailsComponent,
        providers: [
            { provide: EnrolmentStateService, useValue: { event } },
        ],
        detectChanges: false,
    });

    function render(details: any) {
        event.set(details);
        spectator = createComponent();
        spectator.detectChanges();
        return spectator.element.textContent?.replace(/\s+/g, ' ').trim() ?? '';
    }

    it('should render the host, date and location of the meeting', () => {
        const text = render({
            host: 'host@example.com',
            location: 'Level 2 Boardroom',
            date: new Date('2026-06-15T14:30:00').valueOf(),
        });

        expect(text).toContain('host@example.com');
        expect(text).toContain('Level 2 Boardroom');
        expect(text).toContain('Jun 15, 2026');
        expect(text).toContain('2:30 PM');
    });

    it('should fall back to placeholders when the event is missing', () => {
        const text = render(null);

        expect(text).toContain('No host');
        expect(text).toContain('No Location');
    });
});
