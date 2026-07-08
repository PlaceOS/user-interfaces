import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MockComponent } from 'ng-mocks';
import { IconComponent } from '@placeos/components';

import { ViewAttendeesModalComponent } from '../../app/components/view-attendees-modal.component';

describe('ViewAttendeesModalComponent', () => {
    const attendees = [
        { name: 'Alice', email: 'alice@place.tech' },
        { name: 'Bob', email: 'bob@place.tech' },
    ];

    let spectator: Spectator<ViewAttendeesModalComponent>;
    const createComponent = createComponentFactory({
        component: ViewAttendeesModalComponent,
        declarations: [MockComponent(IconComponent)],
        detectChanges: false,
        providers: [{ provide: MAT_DIALOG_DATA, useValue: { attendees } }],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('populates attendees from dialog data on init', () => {
        spectator.detectChanges();
        expect(spectator.component.attendees()).toEqual(attendees);
    });

    it('renders a row per attendee with name and mailto link', () => {
        spectator.detectChanges();
        const names = spectator
            .queryAll('label')
            .map((el) => el.textContent?.trim());
        expect(names).toEqual(['Alice', 'Bob']);
        const links = spectator.queryAll('a');
        expect(links).toHaveLength(2);
        expect(links[0].getAttribute('href')).toBe('mailto:alice@place.tech');
        expect(links[1].textContent?.trim()).toBe('bob@place.tech');
    });
});
