import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { CalendarService } from '@placeos/calendar';
import { of } from 'rxjs';
import { ControlStateService } from '../app/control-state.service';

describe('ControlStateService', () => {
    let spectator: SpectatorService<ControlStateService>;
    const createService = createServiceFactory({
        service: ControlStateService,
        providers: [
            { provide: MatDialog, useValue: { open: jest.fn() } },
            { provide: CalendarService, useValue: { calendars: of([]) } },
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });
});
