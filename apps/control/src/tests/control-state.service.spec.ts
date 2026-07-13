import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { CalendarService, SpacesService } from '@placeos/events';
import { of } from 'rxjs';
import { ControlStateService } from '../app/control-state.service';

describe('ControlStateService', () => {
    let spectator: SpectatorService<ControlStateService>;
    const createService = createServiceFactory({
        service: ControlStateService,
        providers: [
            { provide: MatDialog, useValue: { open: vi.fn() } },
            { provide: CalendarService, useValue: { calendars: of([]) } },
            { provide: SpacesService, useValue: { loadSpaces: vi.fn() } },
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });
});
