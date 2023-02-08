import { MatDialog } from '@angular/material/dialog';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { CalendarEvent } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { set } from 'date-fns';
import { MockComponent } from 'ng-mocks';
import { EventCardComponent } from '../lib/event-card.component';

describe('EventCardComponent', () => {
    let spectator: SpectatorRouting<EventCardComponent>;
    const createComponent = createRoutingFactory({
        component: EventCardComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            {
                provide: OrganisationService,
                useValue: { levelWithID: jest.fn(), buildings: [] },
            },
            { provide: MatDialog, useValue: { open: jest.fn() } },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show event details', () => {
        expect('[details]').not.toExist();
        spectator.setInput({
            event: new CalendarEvent({
                date: set(Date.now(), { hours: 8, minutes: 0 }).valueOf(),
            }),
        });
        spectator.detectChanges();
        expect('[name="view-event-details"]').toExist();
        expect('[day]').not.toExist();
        spectator.setInput({ show_day: true });
        spectator.detectChanges();
        expect('[day]').toExist();
    });
});
