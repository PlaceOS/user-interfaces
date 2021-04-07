import { Router } from '@angular/router';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { of } from 'rxjs';

jest.mock('@placeos/ts-client');
jest.mock('@placeos/common');

import * as ts_client from '@placeos/ts-client';
import * as common_lib from '@placeos/common';

import { AuthorisedAdminGuard } from '../lib/authorised-admin.guard';

describe('AuthorisedAdminGuard', () => {
    let spectator: SpectatorService<AuthorisedAdminGuard>;
    const createService = createServiceFactory({
        service: AuthorisedAdminGuard,
        providers: [{ provide: Router, useValue: { navigate: jest.fn() } }],
    });

    beforeEach(() => (spectator = createService()));

    it('should create the service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should check if logged in user can activate a route', async () => {
        (ts_client as any).onlineState = jest.fn(() => of(true));
        (common_lib as any).current_user = of({ groups: [] });
        let can_activate = await spectator.service.canActivate();
        expect(can_activate).toBeFalsy();
        (common_lib as any).current_user = of({ groups: ['placeos_admin'] });
        can_activate = await spectator.service.canActivate();
        expect(can_activate).toBeTruthy();
    });

    it('should check if logged in user can load a route', async () => {
        (ts_client as any).onlineState = jest.fn(() => of(true));
        (common_lib as any).current_user = of({ groups: [] });
        let can_load = await spectator.service.canLoad();
        expect(can_load).toBeFalsy();
        (common_lib as any).current_user = of({ groups: ['placeos_admin'] });
        can_load = await spectator.service.canLoad();
        expect(can_load).toBeTruthy();
    });
});
