import { Router } from '@angular/router';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { of } from 'rxjs';

jest.mock('@placeos/ts-client');
jest.mock('@user-interfaces/common');

import * as ts_client from '@placeos/ts-client';
import * as common_lib from '@user-interfaces/common';

import {
    AuthorisedUserGuard,
    PLACEOS_APP_ACCESS,
} from '../lib/authorised-user.guard';

describe('AuthorisedUserGuard', () => {
    let spectator: SpectatorService<AuthorisedUserGuard>;
    const createService = createServiceFactory({
        service: AuthorisedUserGuard,
        providers: [
            { provide: Router, useValue: { navigate: jest.fn() } },
            { provide: PLACEOS_APP_ACCESS, useValue: {} },
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create the service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should check if logged in user can activate a route', async () => {
        (ts_client as any).onlineState = jest.fn(() => of(true));
        (common_lib as any).current_user = of({ groups: [] });
        let can_activate = await spectator.service.canActivate();
        expect(can_activate).toBeTruthy();
        const ACCESS: any = spectator.inject(PLACEOS_APP_ACCESS);
        ACCESS.group = 'Admin';
        can_activate = await spectator.service.canActivate();
        expect(can_activate).toBeFalsy();
        (common_lib as any).current_user = of({ groups: ['Admin'] });
        can_activate = await spectator.service.canActivate();
        expect(can_activate).toBeTruthy();
    });

    it('should check if logged in user can load a route', async () => {
        (ts_client as any).onlineState = jest.fn(() => of(true));
        (common_lib as any).current_user = of({ groups: [] });
        let can_load = await spectator.service.canLoad();
        expect(can_load).toBeTruthy();
        const ACCESS: any = spectator.inject(PLACEOS_APP_ACCESS);
        ACCESS.group = 'Admin';
        can_load = await spectator.service.canLoad();
        expect(can_load).toBeFalsy();
        (common_lib as any).current_user = of({ groups: ['Admin'] });
        can_load = await spectator.service.canLoad();
        expect(can_load).toBeTruthy();
    });
});
