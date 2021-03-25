import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { ControlStateService } from '../app/control-state.service';

describe('ControlStateService', () => {
    let spectator: SpectatorService<ControlStateService>;
    const createService = createServiceFactory({
        service: ControlStateService,
        providers: [{ provide: MatDialog, useValue: { open: jest.fn() } }]
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });
});
