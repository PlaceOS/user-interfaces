import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { SpacesService } from '@placeos/spaces';
import { BehaviorSubject } from 'rxjs';
import { PanelStateService } from '../../app/panel/panel-state.service';

describe('PanelStateService', () => {
    let spectator: SpectatorService<PanelStateService>;
    const createService = createServiceFactory({
        service: PanelStateService,
        providers: [
            {
                provide: SpacesService,
                useValue: { list: new BehaviorSubject([]) },
            },
            { provide: MatDialog, useValue: { open: jest.fn() } },
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should bind to system properties', () => {
        // TODO
    });

    it('should allow starting an event', () => {
        // TODO
    });

    it('should allow viewing control URL', () => {
        // TODO
    });

    it('should allow calling a waiter', () => {
        // TODO
    });
});
