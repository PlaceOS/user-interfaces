import { MatDialog } from '@angular/material/dialog';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/organisation';
import { of } from 'rxjs';

import { DesksStateService } from '../../app/desks/desks-state.service';
import { MockProvider } from 'ng-mocks';
import { SettingsService } from '@placeos/common';

describe('DesksStateService', () => {
    let spectator: SpectatorService<DesksStateService>;
    const createService = createServiceFactory({
        service: DesksStateService,
        providers: [
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(OrganisationService, {
                active_levels: of([]),
                initialised: of(true),
                levelWithID: jest.fn(),
                buildings: [],
            }),
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it.todo('should handle loading desk bookings');
    it.todo('should handle loading desk list');
    it.todo('should handle filtering of desk bookings');
    it.todo('should handle filtering of desk list');
    it.todo('should allow for polling of desk bookings');
    it.todo('should allow checking in of bookings');
    it.todo('should allow approving of bookings');
    it.todo('should allow rejection of bookings');
    it.todo('should allow toggling of access state for booking users');
    it.todo('should allow rejection of all displayed bookings');
});
