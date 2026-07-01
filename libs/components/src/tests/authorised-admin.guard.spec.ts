import { Router } from '@angular/router';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { of } from 'rxjs';

let mock_current_user = of(null);

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    onlineState: jest.fn(),
    waitForSignal: jest.fn(),
}));
jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    get current_user() {
        return mock_current_user;
    },
}));

import * as ts_client from '@placeos/ts-client';

import { AuthorisedAdminGuard } from '../lib/authorised-admin.guard';

describe('AuthorisedAdminGuard', () => {
    let spectator: SpectatorService<AuthorisedAdminGuard>;
    const createService = createServiceFactory({
        service: AuthorisedAdminGuard,
        providers: [{ provide: Router, useValue: { navigate: jest.fn() } }],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        mock_current_user = of(null);
        jest.mocked(ts_client.onlineState).mockReturnValue(of(true) as any);
        jest.mocked(ts_client.waitForSignal).mockResolvedValue(true as any);
        spectator = createService();
    });

    it('should create the service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should check if logged in user can activate a route', async () => {
        mock_current_user = of({ groups: [] } as any);
        let can_activate = await spectator.service.canActivate();
        expect(can_activate).toBeFalsy();
        mock_current_user = of({ groups: ['placeos_admin'] } as any);
        can_activate = await spectator.service.canActivate();
        expect(can_activate).toBeTruthy();
    });

    it('should check if logged in user can load a route', async () => {
        mock_current_user = of({ groups: [] } as any);
        let can_load = await spectator.service.canLoad();
        expect(can_load).toBeFalsy();
        mock_current_user = of({ groups: ['placeos_admin'] } as any);
        can_load = await spectator.service.canLoad();
        expect(can_load).toBeTruthy();
    });
});
