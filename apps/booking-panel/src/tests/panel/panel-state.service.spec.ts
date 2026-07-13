import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import {
    KeepAliveService,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { EventFormService, SpacesService } from '@placeos/events';
import { MockProvider } from 'ng-mocks';
import { PanelStateService } from '../../app/panel-state.service';

describe('PanelStateService', () => {
    let spectator: SpectatorService<PanelStateService>;
    const createService = createServiceFactory({
        service: PanelStateService,
        providers: [
            MockProvider(SpacesService, {
                list: signal([]),
                loadSpace: vi.fn(),
            }),
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(EventFormService, {}),
            MockProvider(OrganisationService, { initialised: signal(true) }),
            MockProvider(KeepAliveService),
            MockProvider(SettingsService, { get: vi.fn() }),
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
