import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router, UrlTree } from '@angular/router';
import { OrganisationService, user_groups_loaded } from '@placeos/common';
import {
    canAccessSignageApp,
    signageAccessGuard,
} from '../app/signage-access.guard';
import { SignageService } from '../app/signage.service';

describe('canAccessSignageApp', () => {
    it('allows sys admins and support users without groups', () => {
        expect(canAccessSignageApp(true, 0)).toBe(true);
    });

    it('allows users with signage group permissions', () => {
        expect(canAccessSignageApp(false, 1)).toBe(true);
    });

    it('blocks users without admin, support, or group permissions', () => {
        expect(canAccessSignageApp(false, 0)).toBe(false);
    });

    it('allows access when the group request failed', () => {
        expect(canAccessSignageApp(false, 0, true)).toBe(true);
    });
});

describe('signageAccessGuard', () => {
    const loaded = signal(false);
    const can_manage_all_groups = signal(false);
    const signage_groups = signal<any[]>([]);
    const signage_groups_failed = signal(false);
    const wait_until_initialised = vi.fn().mockResolvedValue(undefined);

    function runGuard() {
        return TestBed.runInInjectionContext(
            () =>
                signageAccessGuard({} as any, {} as any) as Promise<
                    boolean | UrlTree
                >,
        );
    }

    beforeEach(() => {
        loaded.set(false);
        can_manage_all_groups.set(false);
        signage_groups.set([]);
        signage_groups_failed.set(false);
        user_groups_loaded.set(true);
        wait_until_initialised.mockResolvedValue(undefined);

        TestBed.configureTestingModule({
            providers: [
                provideRouter([]),
                {
                    provide: OrganisationService,
                    useValue: {
                        waitUntilInitialised: wait_until_initialised,
                    },
                },
                {
                    provide: SignageService,
                    useValue: {
                        signage_groups_loaded: loaded,
                        can_manage_all_groups,
                        signage_groups,
                        signage_groups_failed,
                    },
                },
            ],
        });
    });

    it('waits for signage group permissions to load', async () => {
        can_manage_all_groups.set(true);
        const guard_result = runGuard();
        let resolved = false;
        guard_result.then(() => (resolved = true));

        await Promise.resolve();

        expect(resolved).toBe(false);

        loaded.set(true);
        TestBed.flushEffects();

        await expect(guard_result).resolves.toBe(true);
    });

    it('waits for user groups and app settings to load', async () => {
        user_groups_loaded.set(false);
        loaded.set(true);
        let resolve_settings: () => void;
        wait_until_initialised.mockImplementationOnce(
            () =>
                new Promise<void>((resolve) => {
                    resolve_settings = resolve;
                }),
        );

        const guard_result = runGuard();
        let resolved = false;
        guard_result.then(() => (resolved = true));

        await Promise.resolve();
        expect(resolved).toBe(false);

        user_groups_loaded.set(true);
        TestBed.flushEffects();
        await Promise.resolve();
        expect(resolved).toBe(false);

        resolve_settings!();
        const result = await guard_result;
        const router = TestBed.inject(Router);
        expect(router.serializeUrl(result as UrlTree)).toBe('/unauthorised');
    });

    it('allows users with signage group permissions', async () => {
        signage_groups.set([{ group: { id: 'group-1' }, permissions: 1 }]);
        loaded.set(true);

        await expect(runGuard()).resolves.toBe(true);
    });

    it('lets users through when the group request failed', async () => {
        signage_groups_failed.set(true);
        loaded.set(true);

        await expect(runGuard()).resolves.toBe(true);
    });

    it('redirects users without admin, support, or group permissions', async () => {
        loaded.set(true);

        const router = TestBed.inject(Router);
        const result = await runGuard();

        expect(router.serializeUrl(result as UrlTree)).toBe('/unauthorised');
    });
});
