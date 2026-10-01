import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router, UrlTree } from '@angular/router';
import { OrganisationService } from '@placeos/common';
import { SignageService } from '../app/signage.service';
import { templatesEnabledGuard } from '../app/templates-enabled.guard';

describe('templatesEnabledGuard', () => {
    const wait_until_initialised = vi.fn().mockResolvedValue(undefined);
    const features_ready = signal(true);
    const templates_enabled = signal(true);
    const signage_groups_failed = signal(false);

    function runGuard() {
        return TestBed.runInInjectionContext(
            () =>
                templatesEnabledGuard({} as any, {} as any) as Promise<
                    boolean | UrlTree
                >,
        );
    }

    function redirectOf(result: boolean | UrlTree) {
        return TestBed.inject(Router).serializeUrl(result as UrlTree);
    }

    beforeEach(() => {
        wait_until_initialised.mockResolvedValue(undefined);
        features_ready.set(true);
        templates_enabled.set(true);
        signage_groups_failed.set(false);
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
                        features_ready,
                        templates_enabled,
                        signage_groups_failed,
                    },
                },
            ],
        });
    });

    it('allows access when the selected group has templates on', async () => {
        await expect(runGuard()).resolves.toBe(true);
    });

    it('redirects to media when the selected group has templates off', async () => {
        templates_enabled.set(false);

        expect(redirectOf(await runGuard())).toBe('/media');
    });

    it('waits for the flags of the selected group before checking', async () => {
        features_ready.set(false);
        templates_enabled.set(false);
        let result: boolean | UrlTree | undefined;
        runGuard().then((value) => (result = value));

        await Promise.resolve();
        TestBed.tick();
        expect(result).toBeUndefined();

        templates_enabled.set(true);
        features_ready.set(true);
        TestBed.tick();
        await vi.waitFor(() => expect(result).toBe(true));
    });

    it('waits for the org (and its settings overrides) before checking', async () => {
        let resolve_init: () => void;
        wait_until_initialised.mockImplementationOnce(
            () =>
                new Promise<void>((resolve) => {
                    resolve_init = resolve;
                }),
        );
        let resolved = false;
        const guard_result = runGuard();
        guard_result.then(() => (resolved = true));

        await Promise.resolve();
        expect(resolved).toBe(false);

        resolve_init!();
        await expect(guard_result).resolves.toBe(true);
    });

    it('redirects to media when the group list failed to load', async () => {
        signage_groups_failed.set(true);

        expect(redirectOf(await runGuard())).toBe('/media');
    });
});
