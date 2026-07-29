import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { setCurrentUser } from '@placeos/common';
import { of } from 'rxjs';

// The real `current_user` store and user-groups signals run for real (driven
// via `setCurrentUser` / `user_groups`); only ts-client helpers are stubbed.
vi.mock('@placeos/ts-client', { spy: true });

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
        get: vi.fn((key: string): any => []),
    };
    const wait_until_initialised = vi.fn().mockResolvedValue(undefined);

    const createService = createServiceFactory({
        service: AuthorisedUserGuard,
        providers: [
            MockProvider(Router, { navigate: vi.fn() }),
            {
                provide: PLACEOS_APP_ACCESS,
                useValue: access_mock,
            },
            {
                provide: SettingsService,
                useValue: settings_mock,
            },
            MockProvider(OrganisationService, {
                initialised: signal(true),
                waitUntilInitialised: wait_until_initialised,
            }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        access_mock.group = '';
        settings_mock.app_name = 'workplace';
        settings_mock.get.mockReturnValue([]);
        setCurrentUser({ groups: [] } as any);
        vi.mocked(ts_client.authority).mockReturnValue(undefined);
        vi.mocked(ts_client.currentGroups).mockReturnValue(of([]) as any);
        vi.mocked(ts_client.onlineState).mockReturnValue(of(true) as any);
        vi.mocked(ts_client.waitForSignal).mockResolvedValue(true as any);
        common_lib.user_groups.set([]);
        common_lib.user_groups_loaded.set(true);
        wait_until_initialised.mockResolvedValue(undefined);
        spectator = createService();
    });

    it('should create the service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should check if logged in user can activate a route', async () => {
        // Setup mocks
        setCurrentUser({ groups: [] } as any);

        // With no required groups, user should be allowed
        let can_activate = await spectator.service.canActivate();
        expect(can_activate).toBeTruthy();

        // With required 'Admin' group, user without it should be denied
        access_mock.group = 'Admin';
        can_activate = await spectator.service.canActivate();
        expect(can_activate).toBeFalsy();

        // User with 'Admin' group should be allowed
        setCurrentUser({ groups: ['Admin'] } as any);
        can_activate = await spectator.service.canActivate();
        expect(can_activate).toBeTruthy();

        // Reset
        access_mock.group = '';
    });

    it('waits for user groups and app settings to load', async () => {
        common_lib.user_groups_loaded.set(false);
        let resolve_settings: () => void;
        wait_until_initialised.mockImplementationOnce(
            () =>
                new Promise<void>((resolve) => {
                    resolve_settings = resolve;
                }),
        );

        const guard_result = spectator.service.canActivate();
        let resolved = false;
        guard_result.then(() => (resolved = true));

        await Promise.resolve();
        expect(resolved).toBe(false);

        common_lib.user_groups_loaded.set(true);
        TestBed.flushEffects();
        await Promise.resolve();
        expect(resolved).toBe(false);

        resolve_settings!();
        await expect(guard_result).resolves.toBe(true);
    });

    it('should check if logged in user can load a route', async () => {
        // Setup mocks
        setCurrentUser({ groups: [] } as any);

        // With no required groups, user should be allowed
        let can_load = await spectator.service.canLoad();
        expect(can_load).toBeTruthy();

        // With required 'Admin' group, user without it should be denied
        access_mock.group = 'Admin';
        can_load = await spectator.service.canLoad();
        expect(can_load).toBeFalsy();

        // User with 'Admin' group should be allowed
        setCurrentUser({ groups: ['Admin'] } as any);
        can_load = await spectator.service.canLoad();
        expect(can_load).toBeTruthy();
    });

    it('should require read access to the app subsystem when enabled', async () => {
        vi.mocked(ts_client.authority).mockReturnValue({
            config: { use_group_subsystem_access: true },
        } as any);
        setCurrentUser({ groups: [] } as any);
        common_lib.user_groups.set([
            {
                group: { subsystems: ['workplace'] },
                permissions: common_lib.GroupPermission.Read,
            } as any,
        ]);

        await expect(spectator.service.canActivate()).resolves.toBeTruthy();
        expect(ts_client.currentGroups).not.toHaveBeenCalled();
    });

    it('should use the configured access subsystem over the app name', async () => {
        vi.mocked(ts_client.authority).mockReturnValue({
            config: { use_group_subsystem_access: true },
        } as any);
        settings_mock.app_name = 'signage-manager';
        settings_mock.get.mockImplementation((key) =>
            key === 'app.access_subsystem' ? ('signage' as any) : [],
        );
        setCurrentUser({ groups: [] } as any);
        common_lib.user_groups.set([
            {
                group: { subsystems: ['signage'] },
                permissions: common_lib.GroupPermission.Read,
            } as any,
        ]);

        await expect(spectator.service.canActivate()).resolves.toBeTruthy();
    });

    it('should block users without read access to the app subsystem', async () => {
        vi.mocked(ts_client.authority).mockReturnValue({
            config: { use_group_subsystem_access: true },
        } as any);
        setCurrentUser({ groups: [] } as any);
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
