import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { EventFormService } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { SpacesService } from '@placeos/spaces';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';
import { PanelStateService } from '../../app/panel-state.service';
import { KeepAliveService } from '@placeos/common';

describe('PanelStateService', () => {
    let spectator: SpectatorService<PanelStateService>;
    const createService = createServiceFactory({
        service: PanelStateService,
        providers: [
            MockProvider(SpacesService, { list: new BehaviorSubject([]) }),
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(EventFormService, {}),
            MockProvider(OrganisationService, { initialised: of(true) }),
            MockProvider(KeepAliveService),
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
