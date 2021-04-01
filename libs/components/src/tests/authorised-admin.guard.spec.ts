import { Router } from '@angular/router';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';

import { AuthorisedAdminGuard } from '../lib/authorised-admin.guard';

describe('AuthorisedAdminGuard', () => {
    let spectator: SpectatorService<AuthorisedAdminGuard>;
    const createService = createServiceFactory({
        service: AuthorisedAdminGuard,
        providers: [
            { provide: Router, useValue: { navigate: jest.fn() } }
        ]
    });

    beforeEach(() => (spectator = createService()));

    it('should create the service', () => {
        expect(spectator.service).toBeTruthy();
    });
});
