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
        get: vi.fn((_key: string): unknown => []),
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
        localStorage.removeItem('PLACEOS.access_allowed.workplace');
        access_mock.group = '';
        settings_mock.app_name = 'workplace';
        settings_mock.get.mockImplementation((key) =>
            key === 'app.allow_access_groups' ? [] : undefined,
        );
        setCurrentUser({ groups: [] } as any);
        vi.mocked(ts_client.authority).mockReturnValue(undefined);
        vi.mocked(ts_client.currentGroups).mockReturnValue(of([]) as any);
        vi.mocked(ts_client.onlineState).mockReturnValue(of(true) as any);
        vi.mocked(ts_client.waitForSignal).mockResolvedValue(true);
        common_lib.user_groups.set([]);
        common_lib.user_groups_loaded.set(true);
        common_lib.user_groups_failed.set(false);
        wait_until_initialised.mockResolvedValue(undefined);
        spectator = createService();
    });

    it('should allow access on cached credentials when the backend is unreachable', async () => {
        vi.useFakeTimers();
        settings_mock.get.mockImplementation((key) =>
            key === 'app.offline_boot' ? true : [],
        );
        // Organisation data never initialises, as on an offline cold boot
        wait_until_initialised.mockImplementation(
            () => new Promise(() => undefined),
        );
        // ts-client reports an api-key session as the token `x-api-key`; fixed
        // devices authenticate this way, so offline boot depends on it.
        vi.mocked(ts_client.token).mockReturnValue('x-api-key');

        const result = spectator.service.canActivate();
        await vi.advanceTimersByTimeAsync(21_000);

        await expect(result).resolves.toBe(true);
        expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
        vi.useRealTimers();
    });

    it('should keep refusing a user that the last online check denied', async () => {
        access_mock.group = 'admins';
        setCurrentUser({ groups: ['staff'] } as any);
        await expect(spectator.service.canActivate()).resolves.toBe(false);

        vi.useFakeTimers();
        wait_until_initialised.mockImplementation(
            () => new Promise(() => undefined),
        );
        vi.mocked(ts_client.token).mockReturnValue('cached-token');
        const result = spectator.service.canActivate();
        await vi.advanceTimersByTimeAsync(21_000);

        await expect(result).resolves.toBe(false);
        vi.useRealTimers();
    });

    it('should use cached access, not a denial, when the user permissions failed to load', async () => {
        localStorage.setItem('PLACEOS.access_allowed.workplace', '1');
        vi.mocked(ts_client.authority).mockReturnValue({
            config: { use_group_subsystem_access: true },
        } as any);
        vi.mocked(ts_client.token).mockReturnValue('cached-token');
        common_lib.user_groups_failed.set(true);
        await expect(spectator.service.canActivate()).resolves.toBe(true);
        expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
        expect(localStorage.getItem('PLACEOS.access_allowed.workplace')).toBe(
            '1',
        );
    });

    it('should refuse access when the backend is unreachable and there are no cached credentials', async () => {
        vi.useFakeTimers();
        settings_mock.get.mockImplementation((key) =>
            key === 'app.offline_boot' ? true : [],
        );
        wait_until_initialised.mockImplementation(
            () => new Promise(() => undefined),
        );
        vi.mocked(ts_client.token).mockReturnValue('');
        const router = spectator.inject(Router);

        const result = spectator.service.canActivate();
        await vi.advanceTimersByTimeAsync(21_000);

        await expect(result).resolves.toBe(false);
        expect(router.navigate).toHaveBeenCalledWith(['/unauthorised']);
        vi.useRealTimers();
    });

    it('should allow access on cached credentials when the online check stalls', async () => {
        vi.useFakeTimers();
        settings_mock.get.mockImplementation((key) => {
            if (key === 'app.offline_boot') return true;
            if (key === 'app.allow_access_groups') return ['signage-users'];
            return undefined;
        });
        vi.mocked(ts_client.waitForSignal).mockImplementation(
            () => new Promise(() => undefined),
        );
        vi.mocked(ts_client.token).mockReturnValue('cached-token');

        const result = spectator.service.canActivate();
        await vi.advanceTimersByTimeAsync(21_000);

        await expect(result).resolves.toBe(true);
        vi.useRealTimers();
    });

    it('should allow only users in the app access group, through each guard hook', async () => {
        const router = spectator.inject(Router);
        await expect(spectator.service.canActivate()).resolves.toBe(true);

        access_mock.group = 'Admin';
        await expect(spectator.service.canLoad()).resolves.toBe(false);
        expect(router.navigate).toHaveBeenCalledWith(['/unauthorised']);

        setCurrentUser({ groups: ['Admin'] } as any);
        await expect(spectator.service.canActivateChild()).resolves.toBe(true);
    });

    it('should use the access groups from settings when the app sets none', async () => {
        settings_mock.get.mockImplementation((key) =>
            key === 'app.allow_access_groups' ? ['staff', 'admins'] : undefined,
        );
        setCurrentUser({ groups: ['visitors'] } as any);
        await expect(spectator.service.canActivate()).resolves.toBe(false);
        expect(localStorage.getItem('PLACEOS.access_allowed.workplace')).toBe(
            '0',
        );

        setCurrentUser({ groups: ['admins'] } as any);
        await expect(spectator.service.canActivate()).resolves.toBe(true);
        expect(localStorage.getItem('PLACEOS.access_allowed.workplace')).toBe(
            '1',
        );
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

        await expect(spectator.service.canActivate()).resolves.toBe(true);
        expect(ts_client.currentGroups).not.toHaveBeenCalled();
    });

    it('should use the configured access subsystem over the app name', async () => {
        vi.mocked(ts_client.authority).mockReturnValue({
            config: { use_group_subsystem_access: true },
        } as any);
        settings_mock.app_name = 'signage-manager';
        settings_mock.get.mockImplementation((key) =>
            key === 'app.access_subsystem' ? 'signage' : undefined,
        );
        setCurrentUser({ groups: [] } as any);
        common_lib.user_groups.set([
            {
                group: { subsystems: ['signage'] },
                permissions: common_lib.GroupPermission.Read,
            } as any,
        ]);

        await expect(spectator.service.canActivate()).resolves.toBe(true);
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

        await expect(spectator.service.canActivate()).resolves.toBe(false);
        expect(ts_client.currentGroups).not.toHaveBeenCalled();
    });
});
