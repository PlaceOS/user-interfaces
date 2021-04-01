import { Router } from '@angular/router';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';

import { AuthorisedUserGuard } from '../lib/authorised-user.guard';

describe('AuthorisedUserGuard', () => {
    let spectator: SpectatorService<AuthorisedUserGuard>;
    const createService = createServiceFactory({
        service: AuthorisedUserGuard,
        providers: [
            { provide: Router, useValue: { navigate: jest.fn() } }
        ]
    });

    beforeEach(() => (spectator = createService()));

    it('should create the service', () => {
        expect(spectator.service).toBeTruthy();
    });
});
