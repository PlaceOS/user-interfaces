import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { CateringOrderStateService } from '../../lib/catering-order-modal/catering-order-state.service';

describe('CateringOrderStateService', () => {
    let spectator: SpectatorService<CateringOrderStateService>;
    const createService = createServiceFactory({
        service: CateringOrderStateService,
        providers: [
            MockProvider(MatDialog, { open: jest.fn() } as any),
            MockProvider(OrganisationService, {
                building: { id: '' },
                active_building: of({}),
            } as any),
            MockProvider(SettingsService, { get: jest.fn() }),
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
