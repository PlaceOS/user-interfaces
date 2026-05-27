import { Router } from '@angular/router';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { lastValueFrom, of } from 'rxjs';
import { first } from 'rxjs/operators';

// Mock modules before importing
jest.mock('@placeos/ts-client');
jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    current_user: of(null),
    firstTruthyValueFrom: jest.fn((obs) =>
        obs
            ? lastValueFrom(obs.pipe(first((_) => !!_)))
            : Promise.resolve(null),
    ),
}));

import * as common_lib from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

import { OrganisationService } from '@placeos/common';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { MockProvider } from 'ng-mocks';
import {
    AuthorisedUserGuard,
    PLACEOS_APP_ACCESS,
} from '../lib/authorised-user.guard';

describe('AuthorisedUserGuard', () => {
    let spectator: SpectatorService<AuthorisedUserGuard>;
    const access_mock = { group: '' };
    const settings_mock = {
        app_name: 'workplace',
        get: jest.fn(() => []),
    };

    const createService = createServiceFactory({
        service: AuthorisedUserGuard,
        providers: [
            MockProvider(Router, { navigate: jest.fn() }),
            {
                provide: PLACEOS_APP_ACCESS,
                useValue: access_mock,
            },
            {
                provide: SettingsService,
                useValue: settings_mock,
            },
            MockProvider(OrganisationService, { initialised: of(true) }),
        ],
    });

    beforeEach(() => {
        access_mock.group = '';
        settings_mock.app_name = 'workplace';
        settings_mock.get.mockReturnValue([]);
        (ts_client as any).authority = jest.fn(() => undefined);
        (ts_client as any).currentGroups = jest.fn(() => of([]));
        common_lib.user_groups.set([]);
        common_lib.user_groups_loaded.set(true);
        spectator = createService();
    });

    it('should create the service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should check if logged in user can activate a route', async () => {
        // Setup mocks
        (ts_client as any).onlineState = jest.fn(() => of(true));
        (common_lib as any).current_user = of({ groups: [] });

        // With no required groups, user should be allowed
        let can_activate = await spectator.service.canActivate();
        expect(can_activate).toBeTruthy();

        // With required 'Admin' group, user without it should be denied
        access_mock.group = 'Admin';
        can_activate = await spectator.service.canActivate();
        expect(can_activate).toBeFalsy();

        // User with 'Admin' group should be allowed
        (common_lib as any).current_user = of({ groups: ['Admin'] });
        can_activate = await spectator.service.canActivate();
        expect(can_activate).toBeTruthy();

        // Reset
        access_mock.group = '';
    });

    it('should check if logged in user can load a route', async () => {
        // Setup mocks
        (ts_client as any).onlineState = jest.fn(() => of(true));
        (common_lib as any).current_user = of({ groups: [] });

        // With no required groups, user should be allowed
        let can_load = await spectator.service.canLoad();
        expect(can_load).toBeTruthy();

        // With required 'Admin' group, user without it should be denied
        access_mock.group = 'Admin';
        can_load = await spectator.service.canLoad();
        expect(can_load).toBeFalsy();

        // User with 'Admin' group should be allowed
        (common_lib as any).current_user = of({ groups: ['Admin'] });
        can_load = await spectator.service.canLoad();
        expect(can_load).toBeTruthy();
    });

    it('should require read access to the app subsystem when enabled', async () => {
        (ts_client as any).onlineState = jest.fn(() => of(true));
        (ts_client as any).authority = jest.fn(() => ({
            config: { use_group_subsystem_access: true },
        }));
        (common_lib as any).current_user = of({ groups: [] });
        common_lib.user_groups.set([
            {
                group: { subsystems: ['workplace'] },
                permissions: common_lib.GroupPermission.Read,
            } as any,
        ]);

        await expect(spectator.service.canActivate()).resolves.toBeTruthy();
        expect(ts_client.currentGroups).not.toHaveBeenCalled();
    });

    it('should block users without read access to the app subsystem', async () => {
        (ts_client as any).onlineState = jest.fn(() => of(true));
        (ts_client as any).authority = jest.fn(() => ({
            config: { use_group_subsystem_access: true },
        }));
        (common_lib as any).current_user = of({ groups: [] });
        common_lib.user_groups.set([
            {
                group: { subsystems: ['workplace'] },
                permissions: common_lib.GroupPermission.Create,
            } as any,
        ]);

        await expect(spectator.service.canActivate()).resolves.toBeFalsy();
        expect(ts_client.currentGroups).not.toHaveBeenCalled();
    });
});
