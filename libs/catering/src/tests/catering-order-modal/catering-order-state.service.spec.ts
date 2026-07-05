import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { CateringOrderStateService } from '../../lib/catering-order-modal/catering-order-state.service';

describe('CateringOrderStateService', () => {
    let spectator: SpectatorService<CateringOrderStateService>;
    const createService = createServiceFactory({
        service: CateringOrderStateService,
        providers: [
            MockProvider(MatDialog, { open: vi.fn() } as any),
            MockProvider(OrganisationService, {
                building: { id: '' },
                active_building: signal({}),
            } as any),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create component', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should list menu items', () => {});
    it('should list filtered menu items', () => {});
    it('should allow changing menu options', () => {});
    it('should allow changing menu filters', () => {});
});
