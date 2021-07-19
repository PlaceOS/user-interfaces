import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { SpacesService } from '@placeos/spaces';
import { EventsStateService } from '../../app/day-view/events-state.service';

jest.mock('@placeos/events');

import * as events_mod from '@placeos/events';

describe('EventsStateService', () => {
    let spectator: SpectatorService<EventsStateService>;
    const createService = createServiceFactory({
        service: EventsStateService,
        providers: [
            { provide: SpacesService, useValue: { find: jest.fn() } },
            { provide: MatDialog, useValue: { open: jest.fn() } },
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it.todo('should list events');
    it.todo('should allow filtering of listed events');
    it.todo('should allow polling of events for day');
    it.todo('should allow polling of events for week');
    it.todo('should allow polling of events for month');
    it.todo('should allow adding new events');
    it.todo('should allow updating existing events');
    it.todo('should allow removing existing events');
});
