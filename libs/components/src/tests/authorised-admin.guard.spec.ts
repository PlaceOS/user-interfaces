import { Router } from '@angular/router';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { setCurrentUser } from '@placeos/common';
import { of } from 'rxjs';

// The real `current_user` store is driven via `setCurrentUser`; only the
// ts-client signal helpers used by the guard are stubbed.
vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

import { AuthorisedAdminGuard } from '../lib/authorised-admin.guard';

describe('AuthorisedAdminGuard', () => {
    let spectator: SpectatorService<AuthorisedAdminGuard>;
    const createService = createServiceFactory({
        service: AuthorisedAdminGuard,
        providers: [{ provide: Router, useValue: { navigate: vi.fn() } }],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        setCurrentUser({ groups: [] } as any);
        vi.mocked(ts_client.onlineState).mockReturnValue(of(true) as any);
        vi.mocked(ts_client.waitForSignal).mockResolvedValue(true as any);
        spectator = createService();
    });

    it('should create the service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should check if logged in user can activate a route', async () => {
        setCurrentUser({ groups: [] } as any);
        let can_activate = await spectator.service.canActivate();
        expect(can_activate).toBeFalsy();
        setCurrentUser({ groups: ['placeos_admin'] } as any);
        can_activate = await spectator.service.canActivate();
        expect(can_activate).toBeTruthy();
    });

    it('should check if logged in user can load a route', async () => {
        setCurrentUser({ groups: [] } as any);
        let can_load = await spectator.service.canLoad();
        expect(can_load).toBeFalsy();
        setCurrentUser({ groups: ['placeos_admin'] } as any);
        can_load = await spectator.service.canLoad();
        expect(can_load).toBeTruthy();
    });
});
